
import "./App.css";
import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import Courses from "./Pages/Courses";
import Plans from "./Pages/Plans";

class Container extends react.Component{

  render(){
    return(
      <>
      <Router>
        <Routes>
            <Route path="/" element={<h2>Welcome to 9raya.tn</h2>} />
            <Route path="/courses" element={<Courses user={this.props.user}/>} />
            <Route path="/plans" element={<Plans />} />
          </Routes>
      </Router>
      </>
    )
  }
}

class App extends react.Component{
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name:"Med Jihed Moueti",
        genre:"F",
        classe:"2eme",
      }
    };
  }

  render(){
    return(
      <>
        <Header user={this.state.user}/>
        <Container user={this.state.user} />
        <Footer />
      </>
    )
  }
}

export default App;
