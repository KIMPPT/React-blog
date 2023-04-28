import React from "react";
import { Link } from "react-router-dom";
import ColorSchemesExample from "./ColorSchemesExample";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
/*Router의 Link와 Bootstrap을 이용해서 작성
1. 예시를 들고오서 그대로 확인
2. 예시를 수정하여 바뀌는 부분, 수정되는 부분 확인

React Bootstrap에서 확인한 css 디자인
class 이름 > 컴포넌트 이름과 동일하게 작성해둠
그 컴포넌트의 디자인을 쓰고 싶을 때 이름을 css에 검색해서확인
margin,padding에 관한 클래스 이름
m:전체 마진, my : 위쪽,아래쪽, mx : 왼쪽,오른쪽, mt/mb : 위쪽/아래쪽
me/ms : 오른쪽/왼쪽
1~5 : 숫자가 클수록 간격이 넓어짐
padding은 m 대신에 p 사용
*/
//props 값을 받아 올 때 NavHeader(props)으로 받아 올 수 있다
//필요에 따라서 구조분해를 통해서 객체의 값을 바로 받아 올 수도 있다
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
export default function Navheader({ user }) {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Link className="navbar-brand">
            <FontAwesomeIcon icon={faGoogle}
            style={{color:"yellow",width:"30px",height:"30px"}}/>
            블로그</Link>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              홈
            </Link>
            <Link className="nav-link" to="/boardlist">
              게시판
            </Link>
            {/* user의 값이 있을 때 user.name을 출력 */}
            {user ? (
              <Navbar.Text>{user.name}</Navbar.Text>
            ) : (
              <Link className="nav-link" to="/loginform">
                로그인
              </Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
