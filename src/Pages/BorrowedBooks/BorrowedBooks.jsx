import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const BorrowedBooks = () => {
    const {user}= useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [data,setData]= useState([])

   useEffect(()=>{

    axiosSecure.get(`/updatedBooks/${user.email}`)
    .then(res=>{
        setData(res.data)
    })
   },[axiosSecure,user.email])



   const handleReturn=id=>{

    console.log(id)

    axiosSecure.patch(`/returnBook/${id}`)
    .then(res=>{
        if(res.data.modifiedCount==1){

            const filtered = data.filter(item=>item._id!==id)

            setData(filtered)
        }
    })


   }
   
   if(data.length==0){
    return <div className="flex justify-center mt-10 text-2xl font-bold mb-20">No Book Found! Please Borrow Book</div>
   }


    return (
        <div className="mt-10 w-11/12 mx-auto">

            <div className="text-center mt-5">
                <h1 className="text-3xl font-bold">Borrowed BookList</h1>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">

                {
                    data.map((item,index)=><div key={index} className="card bg-base-100 shadow-xl">
                    <figure><img className="h-[350px] w-full" src={item.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                  
                      <div className="space-y-2 text-lg font-bold">
                          <h1>Book Title :<span className="font-semibold"> {item?.bookName}</span></h1>
                          <h1>Author Name :<span className="font-semibold"> {item?.authorName}</span></h1>
                          <h1>Borrow Date :<span className="font-semibold"> {item?.borrowDate}</span></h1>
                          <h1>Return Date :<span className="font-semibold"> {item?.returnDate}</span></h1>
                          <h1>Category:<span className="font-semibold"> {item?.category}</span></h1>
                          <button onClick={()=>handleReturn(item._id)} className="btn mt-3 bg-[#c9c6ac] text-black font-bold w-full">Return</button>
                      </div>
                      
                     
                     
                    </div>
                  </div>)
                }

                

            </div>
            
        </div>
    );
};

export default BorrowedBooks;