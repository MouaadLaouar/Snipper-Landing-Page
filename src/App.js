import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './Style/css/App.css';


function App() {
  return (
    <div className="App">
      <header>
        <Header/>
        <Content/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
