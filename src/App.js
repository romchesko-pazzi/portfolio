import './App.css';
import {Header} from "./Header/Header";
import {Introducion} from "./Introducion/Introducion";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Introducion/>
            <Skills/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default App;
