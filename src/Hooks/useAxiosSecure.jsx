import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "https://bookish-bliss-server.vercel.app",
    withCredentials:true
})
const useAxiosSecure = () => {




    return axiosSecure;
 
};

export default useAxiosSecure;