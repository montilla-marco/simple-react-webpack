import './app.css';
import Logo from './assets/images/marcomarco-logo-transparent.png';

const App = () => (
  <header className="landing-header">
    <img src={Logo} width="16.5%" height="10%" alt="Logo" className="logo-box" />
    <h1 className="text-box">App Yeah!!!</h1>
  </header>
);

export default App;
