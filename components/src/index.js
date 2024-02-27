import { navigation } from "./nav_&_footer.js";
import { foot } from "./nav_&_footer.js";
import { navSlide } from "./function.js";
import { searchbar } from "./function.js";
import {sliding} from "./sliding.js";
import {anim} from "./sliding.js";
import { getApiRequest } from "./productcard.js";
import { productDetail } from "./productdata.js";
import { createItemOnCheckOut } from "./check.js"

const navbar = document.getElementById('navbar');
const footer = document.querySelector('.footer');

if(  
window.location.pathname === "/" ||
window.location.pathname === "/index.html"
){
	sliding();
	anim();
  getApiRequest();
}else if (window.location.pathname === "/productdetails.html") {
  productDetail();
}else if (window.location.pathname === "/checkout.html") {
  createItemOnCheckOut();
}

navbar.innerHTML += navigation();
footer.innerHTML += foot();

var mobile = document.querySelector("#mobile");
mobile.addEventListener("click", function() {
  navSlide();
});

var searchion = document.querySelector(".but");
searchion.addEventListener("click", function() {
    searchbar();
});



// ---------------- Insert Data into Local Storage > OnClick > Add To Cart Button -------


var cart = document.getElementById("cart-count");
var myCartData = [];
var cartIntialValue;

if(localStorage.getItem('cart-count') == null) {
	localStorage.setItem('cart-count', '0');
} else {
	var cartValue = localStorage.getItem('cart-count');
	localStorage.setItem('cart-count', cartValue);
}


// ---------------- Increase Cart Count -----------------------
function cartCount() {
  if (window.localStorage.getItem("cart-count") === null) {
    cartIntialValue = 0;
  } else {
    cartIntialValue = JSON.parse(window.localStorage.getItem("cart-count"));
    cart.innerHTML = cartIntialValue;
  }
  var cartCurrentValue = cartIntialValue + 1;
  window.localStorage.setItem("cart-count", cartCurrentValue);
  cart.innerHTML = window.localStorage.getItem("cart-count");
}
cart.innerHTML = window.localStorage.getItem("cart-count");

// ---------------- Add Data into List and then into Local Storage -----------------------

function addDataIntoList(productData) {
  // If Local Storage Is Empty Then Set List To Empty
  if (window.localStorage.getItem("product-list") === null) {
    myCartData = [];
  }
  // If Local Storage Is Not Empty Then Set List To Value Of Local Storage
  else {
    myCartData = JSON.parse(window.localStorage.getItem("product-list"));
  }

  // If List Is Empty Then Push The Object In It
  if (myCartData.length === 0) {
    var myObj = {
      id: productData.id,
      title: productData.name,
      count: 1,
      price: productData.price,
      preview: productData.preview
    };
    myCartData.push(myObj);
  }
  // If List Is Not Empty Then
  else if (myCartData.length != 0) {
    var w = 0;
    // If Same Product Data == True Then List.Count++
    for (var i = 0; i < myCartData.length; i++) {
      if (myCartData[i].id == productData.id) {
        myCartData[i].count = parseInt(myCartData[i].count) + 1;
        w += 1;
      }
    }
    // Else Add New Data Into List
    if (w == 0) {
      var myObj = {
        id: productData.id,
        title: productData.name,
        count: 1,
        price: productData.price,
        preview: productData.preview
      };
      myCartData.push(myObj);
    }
  }
  // Store The List Into Local Storage
  window.localStorage.setItem("product-list", JSON.stringify(myCartData));
}

//------ Add-To-Cart-Btn Click Event Listner ------------------------

$('#btn-add-to-cart').click (function() {
  var productId = window.location.search.split("=")[1];
  var urlLink =
    "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + productId;

  function getDataForLocalStorage() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status === 200) {
          var productData = JSON.parse(this.responseText);
          addDataIntoList(productData);
        }
      }
    };
    http.open("GET", urlLink, true);
    http.send();
  }
  cartCount();
  getDataForLocalStorage();
});

//------------------------------------------------------------

