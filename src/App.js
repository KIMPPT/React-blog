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
import { useState } from "react";
function App() {
  //데이터를 하위 컴포넌트에 전달하기 위해서
  //상위 컴포넌트에서 데이터를 작성하고 props값을 전달한다
  //상위 데이터값을 하위에서 공유하기 때문에 동일한 값이 출력

  //유저 데이터
  //처음 값은 null 또는 "" {더미데이터}로 내용 확인 후 선택
  //처음 값을 null로 두었을 때 주의점
  //null 과 undefined는 속성을 가질 수 없기 때문에
  //속성에 접근하면 오류가 나온다.
  //확실하게 처음에는 속성에 접근하지 않을 때 사용
  //[]-배열값을 사용할 때 초기값을 null 이나 ""으로 두면
  //map() 메서드를 쓸 수 없으므로 주의

  //{name:"green"}
  let [user,setUser]=useState(
null
  );
  let [boardlist,setBoardlist]=useState(
    [
      {
        id:1,
        title:"첫번째 게시물",
        content:"게시물의 내용을 작성합니다",
        name:"green",
        date:"2023-04-27"
      },
      
      {
        id:2,
        title:"두번째 게시물",
        content:"두번째 게시물의 내용을 작성합니다",
        name:"blue",
        date:"2023-04-27"
      }
    ]
  );
  //주소와 페이지(컴포넌트 연결)
  return (
    <div className="App">
      <BrowserRouter>
        {/*navheader의 Link를 사용하기 위해서는 browserRouter안에 있어야 한다 */}
        {/*상위 데이터 값 사용을 위해 props으로 전달 */}
        <Navheader user={user}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/boardlist" element={<Boardlist boardlist={boardlist}/>} />
          <Route path="/boardform" element={<Boardform />} />
          <Route path="/loginform" element={<Loginform setUser={setUser}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
