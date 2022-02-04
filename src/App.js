import "./App.css";
import Carousel from "./Carousel";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Carousel images={data} />
    </div>
  );
}

export default App;
