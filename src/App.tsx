import { useState } from "react";
import "./App.css";

type SignupType = {
  email: string;
  password: string;
  confirmed: string;
};

const initialSignUp = {
  email: "",
  password: "",
  confirmed: "",
};

function App() {
  const [signup, setSignup] = useState<SignupType>(initialSignUp);
  const [error, setError] = useState<string | undefined>();

  const handleSignup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "confirmed" && value !== signup.password) {
      setError("mots de passe différents");
    } else if (name === "confirmed") {
      setError(undefined);
    }
    setSignup((prev) => ({ ...prev, [name]: value }));
  };

  const signUpSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(signup);
  };

  return (
    <main>
      <h1>Enregistrez vous pour continuer</h1>
      <form onSubmit={signUpSubmission}>
        <label aria-label="email">
          Email
          <input
            type="text"
            required
            value={signup.email}
            name="email"
            onChange={handleSignup}
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            title="Invalid email address"
          />
        </label>
        <label aria-label="password">
          Mot de passe
          <input
            type="text"
            required
            minLength={8}
            name="password"
            onChange={handleSignup}
            value={signup.password}
          />
        </label>
        <label aria-label="confirmed password">
          Confirmation
          <input
            type="text"
            required
            minLength={8}
            name="confirmed"
            onChange={handleSignup}
            value={signup.confirmed}
          />
          {error && <p>{error}</p>}
        </label>
        <button type="submit">S'inscrire</button>
      </form>
    </main>
  );
}

export default App;
