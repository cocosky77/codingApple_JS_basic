// 로컬스토리지에 저장되어있는 데이터 불러오기
var getCart = localStorage.getItem("cart");
// JSON 형식 제거하기
var getCartList = JSON.parse(getCart);
console.log(getCartList);

// getCartList 배열의 값을 순서대로 꺼내와서 html에 보여주기
for (let i = 0; i < getCartList.length; i++) {
  var getCartHTML = `<p>${getCartList[i]}</p>`;
  document.querySelector(".cart-list").insertAdjacentHTML("beforeend", getCartHTML);
}
