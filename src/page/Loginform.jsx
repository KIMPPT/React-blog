import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Loginform({ setUser }) {
  let navigate=useNavigate();
  let [name,setName]=useState();
  let [password,setPassword]=useState();
  //로그인 메서드
  let loginUser=(e)=>{
    e.preventDefault();
    //지금은 초기값이 null 이기 때문에 user값을 가져오지 않음
    //초기값에 속성이 정해져 있으면 ...user를 통해서 들고와야함
    setUser({name:name})
    navigate("/");
  }
  return (
    <div>
      <Form onSubmit={loginUser}
      >
        <Form.Group className="mx-5 pt-3" controlId="formBasicEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control 
          onChange={(e)=>{setName(e.target.value)}}
          type="text" placeholder="아이디를 입력해주세요" />
        </Form.Group>

        <Form.Group className="mx-5" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력해주세요" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit"
        onClick={()=>{}}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
