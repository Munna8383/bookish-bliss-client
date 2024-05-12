import animation from "../../../public/Animation - 1715326453026.json"
import Lottie from "lottie-react";
import { Helmet} from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div>
            <Helmet><title>Error Page || BookishBliss</title></Helmet>
           <Lottie  className="h-[650px]" animationData={animation} loop={true} />
        </div>
    );
};

export default ErrorPage;