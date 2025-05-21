import { useState } from "react";
import { useNavigate } from "react-router";
import { useLoginMutation } from "../generated/graphql-types";
import { useAuth } from "../contexts/Auth";

type LoginType = {
  email: string;
  password: string;
};

const initialLogin = {
  email: "",
  password: "",
};

function Login() {
  const [login, setLogin] = useState<LoginType>(initialLogin);
  const [loginMutation] = useLoginMutation();
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const loginSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await loginMutation({
        variables: { data: { password: login.password, email: login.email } },
      });
      if (data && data.login) {
        setUser({ isConnected: data.login });
        setTimeout(() => {
          navigate("/wines");
        }, 100);
      } else {
        setLogin(initialLogin);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <h1>Connectez vous pour continuer</h1>
      <form onSubmit={loginSubmission}>
        <label aria-label="email">
          Email
          <input
            type="email"
            required
            value={login.email}
            name="email"
            onChange={handleLogin}
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            title="Invalid email address"
          />
        </label>
        <label aria-label="password">
          Mot de passe
          <input
            type="password"
            required
            minLength={8}
            name="password"
            onChange={handleLogin}
            value={login.password}
          />
        </label>

        <button type="submit">Se connecter</button>
      </form>
    </main>
  );
}

export default Login;
