import React, { Component } from "react";
import Slider from "react-slick";

//fontawesome에서 아이콘을 가져오기 위해 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//두가지 이상의 아이콘의 이름이 같을 때
//as를 사용해서 이름을 바꿔서 불러 올 수 있다
import {
  faEnvelope as fasEnvelope,
  faAdd,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as farEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  //배열을 이용하여 map을 사용해 화면에 출력하기 위함
  let pictures = ["pic1.jpg", "pic2.jpg", "pic3.jpg"];
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings} className="mx-5">
        <div>
          <img src={require("../image/pic1.jpg")} alt="" width={300} />
        </div>
        <div>
          <img src={require("../image/pic2.jpg")} alt="" width={300} />
        </div>
        <div>
          <img src={require("../image/pic3.jpg")} alt="" width={300} />
        </div>
        {pictures.map((pic) => (
          <div>
            <img src={require(`../image/${pic}`)} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className={className}
      style={{
        ...style,
        display: "block",
        color: "green",
        width: "50px",
        height: "50px",
        zIndex:"1",
        left:"5px"
      }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      className={className}
      style={{
        ...style,
        display: "block",
        color: "red",
        width: "50px",
        height: "50px",
        right: "5px",
      }}
      onClick={onClick}
    />
  );
}
