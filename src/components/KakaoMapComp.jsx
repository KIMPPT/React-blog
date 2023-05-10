import React, { useEffect } from "react";

export default function KakaoMapComp() {
  //id값으로 JS로 찾는 것보다 useRef로 들고오는 것이 더 안전
  let kakao = window.kakao;

  //카카오JS에 있어지는 일을 실행되자마자 출력되야하기 때문에
  //useEffect에 작성
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(35.156701, 129.059667),
      level: 3,
    };

    let map = new kakao.maps.Map(container, options);

    // 마커가 표시될 위치입니다
    let markerPosition = new kakao.maps.LatLng(35.156701, 129.059667);

    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

        // 마커가 표시될 위치입니다
        let markerPosition1 = new kakao.maps.LatLng(35.156701, 129.060667);
        
        // 마커를 생성합니다
        let marker1 = new kakao.maps.Marker({
          position: markerPosition1,
        });
    
        // 마커가 지도 위에 표시되도록 설정합니다
        marker1.setMap(map);


    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);
  }, []);
  return (
    <div>
      <h3>지도</h3>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
}
