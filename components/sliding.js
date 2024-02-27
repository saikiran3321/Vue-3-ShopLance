export default {
	data() {
		return {
			index : 0
		}
	},
	mounted() {
		this.changeSlide();
	},
	methods : {
		changeSlide() {
			this.slider();
			setTimeout(() => {
				this.changeSlide();
			},2000)
		},
		slider() {
			const items = document.querySelectorAll(".items");
			items[this.index].classList.remove("items--active");
		    if(this.index === items.length - 1){
		        this.index = 0;
		    }
		    this.index++;
		    items[this.index].classList.add("items--active");
		}
	},
	template: `<div class="items items--active">
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
        </div>`
}