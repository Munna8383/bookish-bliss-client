import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const UserProfile = () => {

   const  {user}= useContext(AuthContext)
   const axiosSecure= useAxiosSecure()
   const [data,setData]= useState([])

   useEffect(()=>{

    axiosSecure.get(`/feedback/${user.email}`)
    .then(res=>[
        setData(res.data)
    ])


   },[axiosSecure,user.email])

   console.log(data)
    return (
        <div className=" mt-10 flex justify-center items-center">

<div className="card w-[600px] pt-20 pb-5 px-5 text-center space-y-5 bg-base-100 shadow-xl">
    <div>
        <h1 className="text-center text-2xl font-bold text-gray-700">My Profile</h1>
    </div>
  <div>
  <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={user?.photoURL} />
  </div>
</div>

<div>
    <h1 className="text-xl font-bold">Name: {user?.displayName}</h1>
</div>
<div>
    <h1 className="text-xl font-bold">Email: {user?.email}</h1>
</div>

<div>
<div>
        <h1 className="text-center text-2xl font-bold text-gray-700 mt-5">My Feedback</h1>
    </div>
<table className="table border-2 mt-5">
    {/* head */}
    <thead>
      <tr>
        <th>Number</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>

        {
            data.map((item,index)=><tr className="space-x-6" key={index}>
            <td>{index+1}</td>
            <td>{item?.message}</td>
          </tr>)
        }
      
    </tbody>
  </table>
</div>

  </div>

 
</div>
            
        </div>
    );
};

export default UserProfile;