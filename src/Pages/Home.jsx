import Authors from "../components/Authors/Authors";
import Category from "../components/Category/Category";
import Contact from "../components/Contact/Contact";
import Slider from "../components/Slider/Slider";
import { Helmet} from 'react-helmet-async';


const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Helmet><title>Home || BookishBliss</title></Helmet>
            <Slider></Slider>
            <Category></Category>
            <Authors></Authors>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;