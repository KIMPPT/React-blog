import logo from "./logo.svg";
import "./App.css";
//Bootstarp을 사용하기 위해서는 CSS 추가 필요
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Button>ABC</Button>
    </div>
  );
}

export default App;
