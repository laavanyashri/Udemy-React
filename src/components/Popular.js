import card1 from "../assests/images/card1.jpg"
import card2 from "../assests/images/card2.jpg"
import card3 from "../assests/images/card3.jpg"
import card4 from "../assests/images/card4.jpg"

function Popular()
{
    return (
        <div className="popular">
    <h1 className="popular__title" >Most Popular</h1>
    <p className="popular__subtitle" >Pick the best fit</p>
<div className="popular__container">
    <div className="course-card">
        <img src={card1}/>
        <h3>2023 Python Data Visualisation MasterclassName</h3>
        <p> Col Steel</p>
        <p>4.9⭐⭐⭐⭐</p>
        <p>449<del>1999</del></p>
    </div>
    <div className="course-card">
        <img src={card2}/>
        <h3>Basic to Advance Programming with EMC</h3>
        <p> Col Steel</p>
        <p>3.9⭐⭐⭐</p>
        <p>449<del>1999</del></p>
    </div>
    <div className="course-card">
        <img src={card3}/>
        <h3>Web Development Bootcamp 2023</h3>
        <p> Col Steel</p>
        <p>4.9⭐⭐⭐⭐</p>
        <p>449<del>1999</del></p>
    </div>
    <div className="course-card">
        <img src={card4}/>
        <h3>master UI/UX Design</h3>
        <p> Col Steel</p>
        <p>4.9⭐⭐⭐⭐</p>
        <p>449<del>1999</del></p>
    </div>
    <div className="course-card">
        <img src={card2}/>
        <h3>Web Development Bootcamp 2023</h3>
        <p> Col Steel</p>
        <p>4.9⭐⭐⭐⭐</p>
        <p>449<del>1999</del></p>
    </div>
    <div className="course-card">
        <img src={card4}/>
        <h3>master UI/UX Design</h3>
        <p> Col Steel</p>
        <p>4.9⭐⭐⭐⭐</p>
        <p>449<del>1999</del></p>
    </div>
    <div className="course-card">
        <img src={card3}/>
        <h3>2023 Python Data Visualisation MasterclassName</h3>
        <p> Col Steel</p>
        <p>4.9⭐⭐⭐⭐</p>
        <p>449<del>1999</del></p>
    </div>
    <div className="course-card">
        <img src={card1}/>
        <h3>Basic to Advance Programming with EMC</h3>
        <p> Col Steel</p>
        <p>3.9⭐⭐⭐</p>
        <p>449<del>1999</del></p>
    </div>
</div>
</div>
    )
}

export default Popular