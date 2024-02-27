var cart = document.getElementById('cart');

export function createItemOnCheckOut() {

    function createItems(productId) {
      var item = document.createElement("div");
      item.setAttribute("class", "item");
    
      var itemImg = document.createElement("img");
      itemImg.src = productId.preview;
    
      var itemDetail = document.createElement("div");
      itemDetail.setAttribute("class", "detail");
    
      var itemName = document.createElement("h3");
      var itemNameText = document.createTextNode(productId.name);
      itemName.appendChild(itemNameText);
    
      var itemCount = document.createElement("p");
      var itemCountText = document.createTextNode("x" + productId.count);
      itemCount.appendChild(itemCountText);
    
      var itemPrice = document.createElement("p");
      var itemPriceText = document.createTextNode("Amount: " + productId.count * productId.price);
      itemPrice.appendChild(itemPriceText);
    
      itemDetail.appendChild(itemName);
      itemDetail.appendChild(itemCount);
      itemDetail.appendChild(itemPrice);
    
      item.appendChild(itemImg);
      item.appendChild(itemDetail);
      cardContainer.appendChild(item)
    }
    
    var cardContainer = document.getElementById("cart-item-container");
    var totalAmount = document.getElementById("total-amount");
    var numberOfItem = document.getElementById("number-of-item");
    
    var cost = 0;
    var counter = 0;
    
    let cartItems = JSON.parse(localStorage.getItem('product-list'))
    cartItems?.forEach(function(element){
     createItems(element);  
      counter += element.count;
      console.log(counter);
      cost +=
        parseInt(element.count) *
        parseInt(element.price);
      console.log(cost);
    })
    
    totalAmount .innerHTML= cost;
    numberOfItem .innerHTML= counter;
    
    $("#place-order").click (function() {
      myLocalStorageData = window.localStorage.removeItem("product-list");
      cart = window.localStorage.removeItem("cart-count","0");
      var cost = 0;
      for (let i = 0; i < myLocalStorageData.length; i++) {
        counter += myLocalStorageData[i].count;
      }
      totalAmount.innerHTML = cost;
      numberOfItem.innerHTML = counter;
    });
    
}
    