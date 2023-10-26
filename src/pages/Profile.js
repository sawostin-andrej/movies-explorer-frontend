import Header from "../components/Header/Header";
import Profile from "../components/Profile/Profile";

function ProfilePage({ isLoggedIn, setIsLoggedIn }) {
  return (
    <>
      <Header loggedIn={isLoggedIn} />
      <main>
        <Profile setLoggedIn={setIsLoggedIn} />
      </main>
    </>
  );
}

export default ProfilePage;
