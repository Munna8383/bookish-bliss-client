import animation from "../../../public/Animation - 1715326453026.json"
import Lottie from "lottie-react";

const ErrorPage = () => {
    return (
        <div>
           <Lottie  className="h-[650px]" animationData={animation} loop={true} />
        </div>
    );
};

export default ErrorPage;