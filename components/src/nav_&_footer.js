export const navigation = () => {
    return `
    <div class="log">
            <a href="index.html"><h4><span>SHOP</span>LANE</h4></a>
        </div>
        <ul class="nav_links">
            <li><a href="index.html">home</a></li>
            <li><a href="#clothing">clothing</a></li>
            <li><a href="#accessories">accessories</a></li>
        </ul>
        <div class="icons">
            <div class="search">
                <input type="text" class="but-txt">
                <a href="#" class="but"><i class="fas fa-search"></i></a>
            </div>
            <div class="cart">
                <a href="./checkout.html">
                    <i class="fas fa-shopping-cart"></i>
                </a>
                <span id="cart-count">0</span>
            </div>
            <div class="profile">
                <a href="#"><i class="fas fa-user-circle"></i></a>
                <form action="post.php">
                    <a href="./login.html"><button class="button">login</button></a>
                    <a href="./signin.html"><button class="button">signin</button></a>
                </form>
            </div>
            <div id="mobile">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </div>
    `;
};

export const foot = () => {
    return `
        <ul class="online-store">
        <li><h3>Online Store</h3></li>
        <li><a href="#">Men Clothing</a></li>
        <li><a href="#">Women Clothing</a></li>
        <li><a href="#">Men Accessories</a></li>
        <li><a href="#">Women Accessories</a></li>
      </ul>
      <ul class="helpful-links">
        <li><h3>Helpful Links</h3></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <ul class="patners">
        <li><h3>Patners</h3></li>
        <li><a href="#">Zara</a></li>
        <li><a href="#">Pantaloons</a></li>
        <li><a href="#">Levis</a></li>
        <li><a href="#">Ucb</a></li>
        <li><a href="#">+ Many More</a></li>
      </ul>
      <ul class="address">
        <li><h3>Address</h3></li>
        <li>Building 101</li>
        <li>Central Avenue</li>
        <li>LA - 902722</li>
        <li>United States</li>
      </ul>
    `;
};