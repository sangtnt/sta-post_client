function Menu(){
    return(
        <div class="menu">
            <div className="left-menu">
                <img src="./Logo.png" alt=""/>
                <input placeholder="Search"/>
            </div>
            <div className="center-menu">
                <div className="menu-btn active">
                    <i class="fas fa-home"></i>
                </div>
            </div>
            <div className="right-menu">
                <div className="profile">
                    <img src="./Logo.png" alt=""/>
                    <span>Tấn Sang</span>
                </div>
                <div className="menu-btn">
                    <div>
                        <i class="fab fa-facebook-messenger"></i>
                    </div>
                </div>
                <div className="menu-btn">
                    <div>
                        <i class="fas fa-bell"></i>
                    </div>
                </div>
                <div className="menu-btn">
                    <div>
                        <i class="fas fa-caret-down"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;