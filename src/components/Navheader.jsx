import React from "react";
import { Link } from "react-router-dom";
import ColorSchemesExample from "./ColorSchemesExample";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
/*Router의 Link와 Bootstrap을 이용해서 작성
1. 예시를 들고오서 그대로 확인
2. 예시를 수정하여 바뀌는 부분, 

React Bootstrap에서 확인한 css 디자인
class 이름 > 컴포넌트 이름과 동일하게 작성해둠
그 컴포넌트의 디자인을 쓰고 싶을 때 이름을 css에 검색해서확인
*/
export default function Navheader() {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Link className="navbar-brand">블로그</Link>
                <Nav className='me-auto'>
                    <Link className="nav-link" to="/">홈</Link>
                    <Link className="nav-link" to="/boardlist">게시판</Link>
                    <Link className="nav-link" to="/loginform">로그인</Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  );
}
