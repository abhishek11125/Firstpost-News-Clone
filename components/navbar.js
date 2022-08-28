function navbar(){
    return ` <!-- first-navbar -->

    <div id="navbar-1">
        <div id="items">
            <!-- side bar -->

            <div class="sidebar menu-item">
                <div class="toggle-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="links">
                    <!-- <a href="#" style="padding: 22px;"></a> -->
                    <h1 id="cross-mark"></h1>
                    <a href="index.html">Home</a>
                    <a href="#">Health</a>
                    <a href="india.html">India</a>
                    <a href="politics.html">Politics</a>
                    <a href="world.html">World</a>
                    <a href="#">Auto</a>
                    <a href="#">Opinion</a>
                    <a href="#">Sports</a>
                    <a href="#">Explainers</a>
                    <a href="#">Cricket</a>
                    <a href="#">Entertainment</a>
                    <a href="#">Tech</a>
                </div>
                <div id="comp-logo">
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>

            <!-- side bar ended -->

            <div id="logo" class="menu-item"><img src="https://www.firstpost.com/static/images/fp-desk-logo.png" alt=""></div>
            <div id="comp-logo" class="menu-item">
                <a href="https://www.facebook.com/firstpostin"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://twitter.com/firstpost"><i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/firstpost/"><i class="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/channel/UCz8QaiQxApLq8sLNcszYyJw/featured"><i class="fa-brands fa-youtube"></i></a>
            </div>
            <div id="line" class="menu-item"></div>
            <div id="search"><i class=" fa fa-search"></i></div>

            <div class="search-form">
                <form>
                    <input type="text" placeholder="Search" >
                </form>
            </div>

            <div class="close"><i class="fa fa-times"></i></div>
        </div>
    </div>

    <!-- second-navbar -->

    <div id="second-navbar">
        <div class="tags">
            <a href="india.html">India</a>
        </div>
        <div class="nav-line"></div>
        <div class="tags">
            <a href="world.html">World</a>
        </div>
        <div class="nav-line"></div>
        <div class="tags">
            <a href="politics.html">Politics</a>
        </div>
        <div class="nav-line"></div>
        <div class="tags">
            <a href="#">Auto</a>
        </div>
        <div class="nav-line"></div>
        <div class="tags">
            <a href="#">Opinion</a>
        </div>
        <div class="nav-line"></div>
        <div class="tags">
            <a href="#">Sports</a>
        </div>
        <div class="nav-line"></div>
        <div class="tags">
            <a href="#">Explainers</a>
        </div>
        <div class="nav-line"></div>
        <div class="tags">
            <a href="#">Cricket</a>
        </div>
        <div class="nav-line"></div>
        <div class="tags">
            <a href="#">Entertainment</a>
        </div>
        <div class="nav-line"></div>
        <div class="tags">
            <a href="#">Tech</a>
        </div>
        <div class="nav-line-2"></div>
        <div class="right-side-bar">
            <p><a href="#" style="color:white;">Crypto </a></p>
            <p><a href="#">Asia Cup 2022</a></p>
            <a href="#"><img src="https://www.firstpost.com/static/images/netrasuraksha_L2_103x25px.jpg" alt=""></a>
        </div>
    </div>
</div>`
}

export {navbar}