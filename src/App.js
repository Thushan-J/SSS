import './App.css';
import LogoutButton from './components/Log out button';
import LoginButton from './components/Login button';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <LoginButton />
      <br />
      <LogoutButton></LogoutButton>
      <br />
      <Profile />

    </div>
  );
}

export default App;
