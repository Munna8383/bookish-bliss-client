import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


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


    return (
        <div className="mt-10 w-11/12 mx-auto">
            <div className="mt-5 mb-5 pt-20 text-center">
                <h1 className="text-3xl font-bold">Categorized Book</h1>
            </div>

            <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

                {
                    element.map((item,index)=><div key={index} className="card bg-base-100 shadow-xl">
                    <figure><img className="h-[350px] w-full" src={item.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                  
                      <div className="space-y-2 text-lg font-bold">
                          <h1>Book Title :<span className="font-semibold"> {item?.bookName}</span></h1>
                          <h1>Author Name:<span className="font-semibold"> {item?.authorName}</span></h1>
                          <h1>Category:<span className="font-semibold"> {item?.category}</span></h1>
                         <div className="flex item-center">
                         <h1>Rating:</h1>
                         <span><Rating style={{ maxWidth: 100 }} value={item?.rating}/></span>
                         </div>
                   <div className="text-right">
                  <Link to={`/bookDetails/${item._id}`}> <button className="btn bg-[#c9c6ac] text-black font-bold">Details</button></Link>
                   </div>
                      </div>
                      
                     
                     
                    </div>
                  </div>)
                }




            </div>

            
            
        </div>
    );
};

export default CategorizedBook;