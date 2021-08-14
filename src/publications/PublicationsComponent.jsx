import './Post.css';
import Post from './Post.js';
import AndriPhoto from "./img/andri.jpg";
import LordPhoto from "./img/lord.jpg";

const SkywalkerContent = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

function App(props) {
  return (
    <div className="App">
     <Post name = {"Andrii"} 
     photo = {AndriPhoto} 
     nickname = {"Тому що, круті викладачі"} 
     content = {"WTF? Who is Lord Arfon? Why he is Andrii?"} 
     image = {LordPhoto} 
     date = {"13 серпня"} 
     comments = {182} 
     reposts = {146} 
     likes = {887}/>
    </div>
  );
}

export default App;