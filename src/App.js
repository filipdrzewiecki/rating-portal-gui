import './App.css';
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import mockServer from "./mock/MockServer";
import {BrowserRouter as Router} from "react-router-dom";
import PageBody from "./layout/PageBody";
import history from './history';


function App() {
    mockServer();

    return (
        <Router location={history.location} navigator={history}  history={history}>
            <div className="App">
                <Navbar/>
                <PageBody/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
