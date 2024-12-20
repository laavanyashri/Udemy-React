function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__s1">
                <h1 className="navbar__s1__title">Udemy</h1>
            </div>
            <div className="navbar__s2">
                <i className="fa-solid fa-magnifying-glass" style={{color:" #0c0d0d"}}></i>
                <input placeholder="Search for anything here.Tech,Business,Art ...."/>
            </div>
            <div className="navbar__s3">
                <p>Courses</p>
                {/* <p>My Learning</p> */}
                <div className="mylearning">
                    <p>My Learning</p>
                    <div className="mylearning_popup">
                        You did not purchase anything yet.
                    </div>
                </div>
                <i className="fa-solid fa-cart-shopping" style={{color:" #070709"}}></i>
                <i className="fa-solid fa-bell" style={{color: "#010409"}}></i>
                <i className="fa-solid fa-user" style={{color:" #020a18"}}></i>
            </div>
        </div>

    )

}

export default Navbar