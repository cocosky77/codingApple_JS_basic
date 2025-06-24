// 상품 데이터
var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

// 버튼 누르면 가격순으로 정렬
document.querySelector("#price").addEventListener("click", function () {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  // 바뀐 가격으로 html 생성해주셈
  document.querySelector(".row").innerHTML = "";
  addCard(products);
});

// 카드 섹션 함수
function divCard(item) {
  // row 하위에 박스 3개 추가하는 반복문
  for (let i = 0; i < item.length; i++) {
    // 카드
    var divCard = `<div class="col-sm-4">
        <img src="https://placehold.co/600" class="w-100">
        <h5>${item[i].title}</h5>
        <p>가격 : ${item[i].price}</p>
        <button class='buy'>구매</button>
      </div>`;
    // row 하위에 박스 넣기
    document.querySelector(".row").insertAdjacentHTML("beforeend", divCard);
  }
}

// row 하위에 박스 3개 추가하는 반복문
divCard(products);

// row 하위에 박스 3개 추가하는 함수
function addCard(item) {
  // row 하위에 박스 3개 추가하는 반복문
  divCard(item);
}

// 버튼 클릭 횟수
var moreClick = 0;

// 더보기 버튼 클릭 시 get요청으로 데이터 가져오기
document.querySelector("#more").addEventListener("click", function () {
  // 버튼 클릭 횟수 증가
  moreClick += 1;
  // 버튼 클릭 횟수가 1일때 more1로 get 요청
  if (moreClick == 1) {
    // ajax 요청
    fetch("https://codingapple1.github.io/js/more1.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        addCard(data);
      })
      .catch((error) => {
        console.log("실패함", error);
      });
    // 버튼 클릭 횟수가 2일때 more2로 get 요청
  } else if (moreClick == 2) {
    // ajax 요청
    fetch("https://codingapple1.github.io/js/more2.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        addCard(data);
      })
      .catch((error) => {
        console.log("실패함", error);
      });
    // 버튼 삭제하기
    document.querySelector("#more").classList.add("btn-hide");
  }
});

// 숙제 1. 상품명으로 정렬
document.querySelector("#title").addEventListener("click", function () {
  // 다나가순으로 정렬
  products.sort(function (a, b) {
    if (a.title < b.title) {
      return 1;
    } else if (a.title > b.title) {
      return -1;
    } else {
      return 0;
    }
  });

  // html 비우고 다시 정렬해주셈
  document.querySelector(".row").innerHTML = "";
  addCard(products);
});

// 숙제 2. 6만원 이하 상품만 보기
document.querySelector("#less6").addEventListener("click", function () {
  // 6만원 이하 상품만 필터링
  var less6Pro = products.filter(function (a) {
    return a.price <= 60000;
  });
  console.log(less6Pro);

  // html 비우고 다시 정렬
  document.querySelector(".row").innerHTML = "";
  addCard(less6Pro);
});

// 브라우저 안에 몰래 데이터 저장하는 application
// var arr = [1, 2, 3];
// var newArr = JSON.stringify(arr);

// localStorage.setItem("num", newArr);
// var 꺼낸거 = localStorage.getItem("num");

// console.log(JSON.parse(꺼낸거)[0]);

// 장바구니 숙제 1. 카드하단 구매버튼 클릭하면 누른 상품의 이름을 localStorage에 저장하기
// 이벤트를 버튼에 걸게되면 한 개만 선택하게 되니까 빡셈 --> 상위 요소인 .row에 걸자!
document.querySelector(".row").addEventListener("click", function (e) {
  // 버튼 클릭한 카드의 타이틀을 찾기!
  var selectedCardName = e.target.closest(".col-sm-4").querySelector("h5").innerHTML;
  // 로컬스토리지에 저장할 이름 배열
  var storageCardList = [selectedCardName];
  var storageCardName = JSON.stringify(storageCardList);
  localStorage.setItem("card", storageCardName);
});
