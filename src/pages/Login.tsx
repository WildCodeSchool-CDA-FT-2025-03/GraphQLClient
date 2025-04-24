import { useState } from "react";

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

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const loginSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
