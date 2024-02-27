const getloaclStorage = JSON.parse(localStorage.getItem("productImg"));

export function getApiRequest() {
    if (getloaclStorage == undefined) {
      //fetch api
      const fetchAPI = (url) => {
        const response = fetch(url);
        response
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setLocalStorage(data);
          })
          .catch((err) => {
            console.log(`Error fetching api : ${err}`);
          });
      };
  
      fetchAPI("https://5d76bf96515d1a0014085cf9.mockapi.io/product");
      console.log("api is fetching!!!");
    } else {
      setLocalStorage(null);
    }
}

function products(data) {
    //DOM element
    const cloth = document.querySelector("#clothing")
    const access = document.querySelector("#accessories")
    for (let i = 0; i < data.length; i++) {
        if(data[i].isAccessory === false) {
            cloth.innerHTML += `
            <!---------------------- Product Card -------------------------------->
            <div class="container">
                    <div class="product-container">
                        <a href="./productdetails.html?id=${data[i].id}">
                            <div class="product-img">
                                <img src="${data[i].preview}"/>
                            </div>
                            <div class="product-description">
                                <div class="product-title">${data[i].name}</div>
                                <div class="product-details">${data[i].brand}</div>
                                <div class="product-price-container">
                                    <p class="product-price">Rs.${data[i].price}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            <!---------------------- END OF Product Card ------------------------->
          `;
        } else {
            access.innerHTML += `
            <!---------------------- Product Card -------------------------------->
            <div class="container">
                    <div class="product-container">
                        <a href="./productdetails.html?id=${data[i].id}">
                            <div class="product-img">
                                <img src="${data[i].preview}"/>
                            </div>
                            <div class="product-description">
                                <div class="product-title">${data[i].name}</div>
                                <div class="product-details">${data[i].brand}</div>
                                <div class="product-price-container">
                                    <p class="product-price">Rs.${data[i].price}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            <!---------------------- END OF Product Card ------------------------->
          `;
        }
    }
  }
  
  function setLocalStorage(data) {
    if (getloaclStorage == undefined) {
      localStorage.setItem("productImg", JSON.stringify(data));
      products(data);
    } else {
      products(getloaclStorage);
    }
  }

