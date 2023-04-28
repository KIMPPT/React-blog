import React, { Component } from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  //배열을 이용하여 map을 사용해 화면에 출력하기 위함
  let pictures = ["pic1.jpg", "pic2.jpg", "pic3.jpg"];
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
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
