import logo from "./logo.svg";
import "./App.css";
//Router를 사용할 때는 BrowserRouter를 들고와서 사용
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Board from "./page/Board";
import Boardlist from "./page/Boardlist";
import Boardform from "./page/Boardform";
import Loginform from "./page/Loginform";
import Navheader from "./components/Navheader";
//Bootstarp을 사용하기 위해서는 CSS 추가 필요
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
function App() {
  //주소와 페이지(컴포넌트 연결)
  return (
    <div className="App">
      <BrowserRouter>
      {/*navheader의 Link를 사용하기 위해서는 browserRouter안에 있어야 한다 */}
      <Navheader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/boardlist" element={<Boardlist />} />
          <Route path="/boardform" element={<Boardform />} />
          <Route path="/loginform" element={<Loginform />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
