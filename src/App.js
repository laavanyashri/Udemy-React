import Navbar from "./components/Navbar"
import Category  from "./components/Category"
import SalesImage from "./components/SaleImage"
import RecommendSection from "./components/Recommended"
import CourseList  from "./components/Course.js"
import Popular from "./components/Popular.js"
import footer  from "./components/Footer.js"
import Footer from "./components/Footer.js"
function App()
{
    return(<> 
        <Navbar></Navbar>
        <Category></Category>
        <SalesImage></SalesImage>
        <RecommendSection></RecommendSection>
        <CourseList></CourseList>
        <Popular></Popular>
        <Footer></Footer>
        </> )
}

export default App
