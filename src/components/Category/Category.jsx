import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Category = () => {
    const axiosSecure = useAxiosSecure()
    const [cate,setCate]=useState([])
    

    useEffect(()=>{

        axiosSecure.get("/bookCategory")
        .then(res=>{

            setCate(res.data)
        })





    },[axiosSecure,cate])
    return (
        <div className="mt-10">

            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">Click To View Categorize book</h1>
                <p className="font-semibold w-2/3 mx-auto"> A world of categorized books awaits, with genres and subjects to suit every readerss taste and curiosity, ready for exploration</p>
            </div>
            
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {
                    cate.map((item,index)=> <Link to={`/book/${item.CategoryName}`} key={index}><div className="card h-[270px] bg-base-100 shadow-xl">
                  <img className="h-full rounded-xl " src={item.image} />
                  </div></Link>)
                }
            </div>
            
        </div>
    );
};

export default Category;