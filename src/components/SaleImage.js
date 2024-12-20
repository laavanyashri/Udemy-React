import sale from "../assests/images/sale-image.jpg"

function SalesImage() {
    return (
        <div className="sale-image">
            <img src={sale} alt="Sale Image"/>
                <div className="sale-image__offer">
                    <h1>Udemy flash Sale! 24 hours to save.</h1>
                    <p>Get the top courses for just 499.Just one day to save but a lifetime to learn</p>
                </div>
        </div>
    )

}

export default SalesImage