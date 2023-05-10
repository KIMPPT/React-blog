import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
/*복잡해 보일수도 있다.
Boardlist.jsx에서 해당 컴포넌트에서
boardlist.map((board, id) => (<BoardCard board={board} />))
로 현재 컴포넌트에 App.js에서 만든 boardlist 객체를
props에 board로 들고 왔다
그리고 현재 컴포넌트에서 board를 쓴 것이다
*/
export default function BoardCard({ board }) {
  console.log(board);
  return (
    <Card style={{ width: "18rem", margin: "auto", marginTop:"20px"}}>
      <Card.Body>
        <Card.Title>
          <Link style={{ fontSize: "1.2rem" }} to={`/boardlist/${board.id}`}>
            {board.title}
          </Link>
        </Card.Title>
        <Card.Text>{board.date}</Card.Text>
      </Card.Body>
    </Card>
  );
}
