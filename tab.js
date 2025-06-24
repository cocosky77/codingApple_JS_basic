// 버튼0 누르면
// 모든 버튼에 붙은 orange 클래스명 제거
// 버튼 0에 orange 클래스명 추가
// 모든 div에 붙은 show 클래스명 제거
// div0에 show 클래스명 추가

// 버튼.eq(0).on("click", function () {
//   document.getElementsByClassName("tab-button")[0].classList.remove("orange");
//   document.getElementsByClassName("tab-button")[1].classList.remove("orange");
//   document.getElementsByClassName("tab-button")[2].classList.remove("orange");
//   document.getElementsByClassName("tab-button")[0].classList.add("orange");
//   document.getElementsByClassName("tab-content")[0].classList.remove("show");
//   document.getElementsByClassName("tab-content")[1].classList.remove("show");
//   document.getElementsByClassName("tab-content")[2].classList.remove("show");
//   document.getElementsByClassName("tab-content")[0].classList.add("show");
// });

var 버튼 = $(".tab-button");

// for (let i = 0; i < $(".tab-button").length; i++) {
//   버튼.eq(i).on("click", function () {
//     탭열기(i);
//   });
// }

$(".list").click(function (e) {
  탭열기(e.target.dataset.id);
});

function 탭열기(숫자) {
  버튼.removeClass("orange");
  버튼.eq(숫자).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(숫자).addClass("show");
}

var car = ["소나타", 50000, "white"];
var car2 = { name: "소나타", price: [50000, 3000, 4000] };

document.querySelector(".car-product").innerHTML = car2.name;
document.querySelector(".car-price").innerHTML = car2.price[0];

// // 유저가 선택한 값이 바뀔 때 마다
// document.querySelectorAll(".form-select")[0].addEventListener("change", function () {
//   // 유저가 선택한 값
//   const userSelect = this.value;

//   // input 폼 숨기기
//   const formHide = $(".form-product").addClass("form-hide");

//   // 유저가 선택한 게 셔츠이면
//   // form-hide를 삭제하셈
//   if (userSelect == "셔츠") {
//     formHide;
//     document.querySelectorAll(".form-product")[1].classList.remove("form-hide");
//   } else if (userSelect == "바지") {
//     formHide;
//     document.querySelectorAll(".form-product")[1].classList.remove("form-hide");
//     const optionPantsItems = `<option>28</option>
//     <option>30</option>`;
//     document.querySelectorAll(".form-select")[1].insertAdjacentHTML("beforeend", optionPantsItems);
//   }
// });

// 서버에서 온 데이터 (가정)
var pants = [26, 28, 30, 32];
var shirts = [85, 90, 95, 100, 105, 110];
var caps = ["S", "M", "L"];
var obj = { name: "kim", age: 20 };

// for (var key in obj) {
//   console.log(obj[key]);
// }

// // 유저가 선택한 값이 바뀔 때 마다
document.querySelectorAll(".form-select")[0].addEventListener("change", function () {
  // 유저가 선택한 값
  const selected = this.value;

  // 옵션 박스
  const optionBox = document.querySelector(".select-option");

  // 항상 초기화: 숨기고 내용도 비움
  optionBox.classList.add("form-hide");
  optionBox.innerHTML = "";

  // 조건에 따라 옵션 추가 및 보여주기
  if (selected == "셔츠") {
    shirts.forEach(function (item) {
      $(".select-option").append(`<option>${item}</option>`);
    });
    optionBox.classList.remove("form-hide");
  } else if (selected === "바지") {
    pants.forEach(function (item) {
      $(".select-option").append(`<option>${item}</option>`);
    });
    optionBox.classList.remove("form-hide");
  } else if (selected === "모자") {
    caps.forEach((item) => {
      $(".select-option").append(`<option>${item}</option>`);
      optionBox.classList.remove("form-hide");
    });
  }
});

// html 생성 1
// const a = document.createElement("p");
// a.innerHTML = "안녕";
// document.querySelector("#test").appendChild(a);

// html 생성2
// const b = "<p>안녕</p>";
// document.querySelector("#test").insertAdjacentHTML("beforeend", b);

// html 생성
// const optionPants = "<option>바지</option>";
// const optionPants_28 = "<option>28</option>";
// const optionPants_30 = "<option>30</option>";

// document.querySelectorAll(".form-select")[0].insertAdjacentHTML("beforeend", optionPants);
// document.querySelectorAll(".form-select")[0].addEventListener("change", function () {
//   if (this.value == "바지") {
//     document.querySelectorAll(".form-product")[0].innerHTML == optionPants_28;
//     // document.querySelectorAll(".form-product")[0].appendChild(optionPants_30);
//   }
// });

// 문제 1
// var 출석부 = ["흥민", "영희", "철수", "재석", "철수"];

// function 이름찾기(item) {
//   for (let i = 0; i < 출석부.length; i++) {
//     if (item == 출석부[i]) {
//       console.log("있어요");
//       break;
//     }
//   }
// }

// 이름찾기("철수");

// 문제 2
// 2단부터 9단까지 X1부터 X9까지
// for (let i = 2; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(i * j);
//   }
// }

// 문제 3
function 점수계산기(a, b) {
  // 기존 점수
  var 기존점수합 = 0;
  var 기존점수갯수 = a.length;
  // 현재 점수
  var 현재점수 = b;

  a.forEach((item) => {
    기존점수합 += item;
  });
  var 기존점수평균 = 기존점수합 / 기존점수갯수;

  // 기존 점수 평균이랑 현재 점수 비교
  var 점수비교 = 기존점수평균 - 현재점수;
  if (점수비교 < 0) {
    // 현재 점수가 높음
    console.log(`평균보다 ${Math.abs(점수비교)}점이 올랐네요`);
  } else if (점수비교 > 0) {
    // 기존 점수가 높음
    console.log(`평균보다 ${Math.abs(점수비교)}점이 떨어졌네요 재수추천`);
  } else {
    // 점수 변동이 없음
    console.log("발전이 없군요");
  }
}

점수계산기([40, 40, 40], 20);
