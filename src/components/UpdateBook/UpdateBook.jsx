import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { Toaster , toast} from "react-hot-toast";


const UpdateBook = () => {


    const {_id}= useParams()

    const [one,setOne]= useState([])

    const axiosSecure = useAxiosSecure()

    useEffect(()=>{

        axiosSecure.get(`/details/${_id}`)
        .then(res=>{
            setOne(res.data)
        })



    },[axiosSecure,_id])


    const handleUpdate = e=>{

        e.preventDefault()

        const photo = e.target.photo.value;
        const bookName = e.target.bookName.value;
        const authorName = e.target.authorName.value;
        const category = e.target.category.value;
        const rating = parseInt( e.target.rating.value)

        const info = {photo,bookName,authorName,category,rating}

        console.log(info)

        axiosSecure.patch(`/update/${_id}`,info)
        .then(res=>{
            if(res.data.modifiedCount==1){
                toast.success('Updated In Successfully')
            }
        })

    }



  
    return (
        <div className="mt-10 w-11/12 mx-auto">
             <Toaster></Toaster>
            <div className="text-center mt-5">
                <h1 className="text-3xl font-bold">Update Book</h1>
            </div>

            <div className="card md:w-3/4 lg:w-1/2 mx-auto  bg-base-100 shadow-xl mt- 5 flex justify-center p-5">

<form onSubmit={handleUpdate} >

    <div className="form-control">
        <label className="label">
            <span className="label-text">Photo</span>
        </label>
        <input type="text" name="photo" defaultValue={one.photo} placeholder="Book Cover" className="input input-bordered" required />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Book Name</span>
        </label>
        <input type="text" name="bookName" defaultValue={one.bookName} placeholder="Book Name" className="input input-bordered" required />
    </div>
   
 
    <div className="form-control">
        <label className="label">
            <span className="label-text">Author Name</span>
        </label>
        <input type="text" name="authorName" defaultValue={one.authorName} placeholder="Author Name" className="input input-bordered" required />
    </div>

    <div className="form-control">
        <label className="label">
            <span className="label-text">Category</span>
        </label>
        <select name="category" defaultValue={one.category} className="select select-bordered">
            <option >Novel</option>
            <option>Drama</option>
            <option>Sci-Fi</option>
            <option>History</option>
            <option>Thriller</option>
            <option>Music</option>
        </select>
    </div>
  

    <div className="form-control">
        <label className="label">
            <span className="label-text">Rating</span>
        </label>
        <input type="number" name="rating" defaultValue={one.rating} placeholder="Rating" className="input input-bordered" required />
    </div>

    <div className="form-control mt-6">

        <input className="btn bg-[#c9c6ac] text-black" type="submit" value="Update" />
    </div>




</form>

</div>
            
        </div>
    );
};

export default UpdateBook;