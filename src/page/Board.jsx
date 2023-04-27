import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Board({ boardlist }) {
  let navigate = useNavigate();

  let params = useParams();
  //App.js에서 :id의 값을 params.id가 받아옴
  //params 값으로 전달 할 수 있는 내용은 숫자형과 문자형
  //값으로 받아오면 문자형으로 들어온다
  //boardlist는 전체 배열의 값
  // 지금 필요한 값 : 배열 중에서 id의 값이 params.id와 동일한 객체
  //find() 메서드를 이용하여 값 가져옴
  let board = boardlist.find((b) => b.id === parseInt(params.id));

  /* react 컴포넌트의 실행 순서
  1. 컴포넌트 안에 있는 순서대로 JS 실행
  2. return을 통해서 화면 출력
  3. useEffect() 마운트 할 때 JS 실행
  */
  //마운트 할 때 실행하기 위해 빈 배열로 작성
  useEffect(() => {
    if (board === undefined) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      {board && (
        <div>
          <h1>{board.title}</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{board.id}</span>
            <span>{board.name}</span>
            <span>{board.date}</span>
          </div>
          <p>{board.content}</p>
        </div>
      )}
    </div>
  );
}
