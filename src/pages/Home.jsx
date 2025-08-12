import Navbar from "../section/Navbar"
import Footer from "../section/Footer"
import Hero from "../section/Hero"
import Partner from "../section/Partner"
import OurServices from "../section/OurServices"
import Testimonial from "../section/Testimonial"
import Contact from "../section/Contact"
import AboutUs from "../section/AboutUs"


const Home = () => {
    return (<>
        <Navbar />
        <Hero/>
        <Partner/>
        <AboutUs/>
        <OurServices/>
        <Testimonial/>
        <Contact/>
        <Footer />
    </>)
}

export default Home