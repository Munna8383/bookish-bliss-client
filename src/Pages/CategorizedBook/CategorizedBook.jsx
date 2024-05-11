import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const CategorizedBook = () => {

    const {category}= useParams()

    const axiosSecure =useAxiosSecure()

    const [element,setElement]=useState([])

    useEffect(()=>{

        axiosSecure.get(`/books/${category}`)
        .then(res=>{
            setElement(res.data)
        })




    },[axiosSecure,category])



    console.log(element)
    return (
        <div className="mt-10 w-11/12 mx-auto">
            <div className="mt-5 text-center">
                <h1>Categorized Book</h1>
            </div>

            <div>




            </div>

            
            
        </div>
    );
};

export default CategorizedBook;