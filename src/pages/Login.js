import Login from "../components/Login/Login";

function LoginPage({ setIsLoggedIn }) {
  return (
    <main>
      <Login setLoggedIn={setIsLoggedIn} />
    </main>
  );
}

export default LoginPage;
