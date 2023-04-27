import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/*React Bootstrap에서 재공해주는 컴포넌트에서 바로 이벤트를 넣어도 그 이벤트가 실행된다
  직접 만든 컴포넌트는 이벤트/클래스네임이 전부 props값으로 전달된다
*/
export default function Loginform({ setUser }) {
  let navigate = useNavigate();
  let [name, setName] = useState();
  let [password, setPassword] = useState();
  //로그인 메서드
  let loginUser = (e) => {
    e.preventDefault();
    //지금은 초기값이 null 이기 때문에 user값을 가져오지 않음
    //초기값에 속성이 정해져 있으면 ...user를 통해서 들고와야함
    setUser({ name: name });
    //나중에 구글 로그인으로 진행할 예정
    navigate("/");
  };
  return (
    <div>
      <Form onSubmit={loginUser}>
        <Form.Group className="mx-5 pt-3" controlId="formBasicEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="아이디를 입력해주세요"
          />
        </Form.Group>

        <Form.Group className="mx-5" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력해주세요" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
