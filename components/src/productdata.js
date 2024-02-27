export const productDetail = () => {
    const productId = window.location.search.slice(1).split("=")[1];
    const getlocalStorage = JSON.parse(localStorage.getItem("productImg"));
    let productData = -1;

    for (let i = 0; i < getlocalStorage.length; i++) {
        if (getlocalStorage[i].id === productId) {
            productData = i;
        }
    }

    if(productData > -1) {
        const productDiv = document.querySelector('#product');
        productDiv.innerHTML += `
        <div class="left-colum">
            <img id="productImg" src="${getlocalStorage[productData].preview}"/>
        </div>
        <div class="right-colum">
            <div class="product-description">
            <h1 id="name">${getlocalStorage[productData].name}</h1>
            <h4 id="brand">${getlocalStorage[productData].brand}</h4>
            <h3>Price: Rs <span id="price">${getlocalStorage[productData].price}</span></h3>
            <div class="description">
                <h3>Description</h3>
                <p id="description">${getlocalStorage[productData].description}</p>
            </div>
            <div class="product-preview">
                <h3>Product Preview</h3>
                <div class="previewImg">
                    ${Object.values(getlocalStorage[productData].photos)
                        .map(
                        (photos) =>
                            `<img class="img"  src="${photos}" />`
                        )
                    .join("")}
                </div>
            </div>
            <div class="btn">
                <button id="btn-add-to-cart">Add to Cart</button>
            </div>
        </div>
        `;
    }
    updateProduct();
}

const updateProduct = (pos) => {
    const productImg = document.getElementById('productImg');
    const img = document.querySelectorAll('img');

    for(let i=0; i < img.length; i++) {
        if(pos === 0) {
            img.classList.add("active");
        }
        img[i].addEventListener('click', function(e) {
            productImg.src = e.target.src;
            const current = document.getElementsByClassName('active');
            if (current.length > 0) {
                current[0].className = current[0].className.replace('active', '');
            }
            this.className = 'active';
        })
    }
}
