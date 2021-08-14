import './App.css';
import { Switch, Route, NavLink} from "react-router-dom";
import ContactComponent from './contacts/ContactComponent.jsx';
import PublicationComponent from './publications/PublicationsComponent.jsx';
import PhotoComponent from './photos/PhotoComponent.jsx';
import MainComponent from './main/MainComponent.jsx';
/*
const MainComponent = () => {
  return (
    <p>Головна</p>
  );
}
*/
function App() {
  return (
    <div className="App">
      <nav class="menu">
        <NavLink exact to="/">Головна</NavLink>
        <NavLink to="/publication">Публікації</NavLink>
        <NavLink to="/photo">Фотографії</NavLink>
        <NavLink to="/contact">Контакти з 2 домашки</NavLink>
      </nav>    
        <Switch>
      <Route exact path="/" component={MainComponent} />
      <Route  path="/publication" component={PublicationComponent} />
      <Route  path="/photo" component={PhotoComponent} />
      <Route  path="/contact" component={ContactComponent} />       
    </Switch>
    </div>
  );
}

export default App;
