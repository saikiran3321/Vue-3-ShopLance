export default {
  data() {
    return {}
  },
  template: `<div class="log">
            <a href="./"><h4><span>SHOP</span>LANE</h4></a>
        </div>
        <ul class="nav_links">
            <li><a href="./">home</a></li>
            <li><a href="#clothing">clothing</a></li>
            <li><a href="#accessories">accessories</a></li>
        </ul>
        <div class="icons">
            <div class="search">
                <input type="text" class="but-txt">
                <a href="#" class="but"><i class="fas fa-search"></i></a>
            </div>
            <div class="cart">
                <a href="./checkout">
                    <i class="fas fa-shopping-cart"></i>
                </a>
                <span id="cart-count">0</span>
            </div>
            <div class="profile">
                <a href="#"><i class="fas fa-user-circle"></i></a>
                <form action="post.php">
                    <a href="./login"><button class="button">login</button></a>
                    <a href="./signin"><button class="button">signin</button></a>
                </form>
            </div>
            <div id="mobile">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </div>`
}