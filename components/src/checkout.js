
export function createItemOnCheckOut() {
  createItems()
}

function createItems() {
  var item = document.createElement("div");
  item.setAttribute("class", "item");

  var itemImg = document.createElement("img");
  itemImg.src = productId.Preview;

  var itemDetail = document.createElement("div");
  itemDetail.setAttribute("class", "detail");

  var itemName = document.createElement("h3");
  var itemNameText = document.createTextNode(productId.Name);
  itemName.appendChild(itemNameText);

  var itemCount = document.createElement("p");
  var itemCountText = document.createTextNode("x" + productId.Count);
  itemCount.appendChild(itemCountText);

  var itemPrice = document.createElement("p");
  var itemPriceText = document.createTextNode("Amount: " + productId.Count * productId.Price);
  itemPrice.appendChild(itemPriceText);

  itemDetail.appendChild(itemName);
  itemDetail.appendChild(itemCount);
  itemDetail.appendChild(itemPrice);

  item.appendChild(itemImg);
  item.appendChild(itemDetail);
}

var cardContainer = document.getElementById("cart-item-container");
var totalAmount = document.getElementById("total-amount");
var numberOfItem = document.getElementById("number-of-item");

var productId = JSON.parse(
  window.localStorage.getItem("productImg")
);

var cost = 0;
var counter = 0;
if (productId !== null) {
  for (var z = 0; z < productId.length; z++) {
    cardContainer +=(
      createItemOnCheckOut()
    );
  }
}

for (var y = 0; y < productId.length; y++) {
  counter += productId[y].count;
  console.log(counter);
  cost +=
    parseInt(productId[y].count) *
    parseInt(productId[y].price);
  console.log(cost);
};
totalAmount += cost;
numberOfItem += counter;

$("place-order").click (function() {
  myLocalStorageData = window.localStorage.removeItem("product-list");
  cart = window.localStorage.setItem("cart-count", "0");
  var cost = 0;
  for (var i = 0; i < myLocalStorageData.length; i++) {
    counter += myLocalStorageData[i].count;
  }
  totalAmount.innerHTML = cost;
  numberOfItem.innerHTML = counter;
});
