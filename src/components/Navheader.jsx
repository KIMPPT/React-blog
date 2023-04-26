import React from "react";
import { Link } from "react-router-dom";
export default function Navheader() {
  return (
    <div>
      <Link to="/">홈</Link>
      <span>|</span>
      <Link to="/boardlist">게시판</Link>
      <span>|</span>
      <Link to="/loginform">로그인</Link>
    </div>
  );
}
