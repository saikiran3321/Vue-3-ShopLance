export const sliding = () => {
    const sliders = document.querySelector('.sliding');
    sliders.innerHTML +=
        `
        <div class="items items--active">
            <img src="./images/img1.png" alt="img1" class="images">
        </div>
        <div class="items">
            <img src="./images/img2.png" alt="img2" class="images">
        </div>
        <div class="items">
            <img src="./images/img3.png" alt="img3" class="images">
        </div>
        <div class="items">
            <img src="./images/img4.png" alt="img4" class="images">
        </div>
    `;
    changeSlide();
};



function changeSlide () {
    const items = document.querySelectorAll(".items");
    let index = 0;
    function slide() {
    items[index].classList.remove("items--active");
    if(index === items.length - 1){
        index = 0;
    }
    index++;
    items[index].classList.add("items--active");
}
setInterval(slide, 2000);
};

export const anim = () => {
    const animator = document.querySelector('.animation');
    animator.innerHTML += `
        <div class="icon-container">
            <div class="img-wrapper">
                <img src="./images/icon1.png" alt="img1">
            </div>
            <h4>Free Delivery</h4>
        </div>
        <div class="icon-container">
            <div class="img-wrapper">
                <img src="./images/icon2.png" alt="img2">
            </div>
            <h4>Money Back Gurantee</h4>
        </div>
        <div class="icon-container">
            <div class="img-wrapper">
                <img src="./images/icon3.png" alt="img3">
            </div>
            <h4>Always Support</h4>
        </div>
        <div class="icon-container">
            <div class="img-wrapper">
                <img src="./images/icon4.png" alt="img4">
            </div>
            <h4>Secure Payment</h4>
        </div>
    `
}
