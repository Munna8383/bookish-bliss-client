import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Rating } from '@smastrom/react-rating'

import DatePicker from "react-datepicker";
import { AuthContext } from "../../Providers/AuthProvider";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";

const BookDetails = () => {

    const {user}= useContext(AuthContext)

    const navigate = useNavigate()


    const { _id } = useParams()

    const [one, setOne] = useState([])

    const axiosSecure = useAxiosSecure()
    const [borrowDate,setBorrowDate]=useState()
    const [returnDate,setReturnDate]=useState()

    useEffect(() => {

        axiosSecure.get(`/details/${_id}`)
            .then(res => {
                setOne(res.data)
            })



    }, [axiosSecure, _id])


    const handleSubmit =(e)=>{
        e.preventDefault()

        const userName = user.displayName;
        const userEmail = user.email;
        const borrowedDate =borrowDate.toString().substring(4,15);
        const returnedDate = returnDate.toString().substring(4,15);


        if(one.email===userEmail){

            toast.error("Already Borrowed.")

            return
        }

        const data = {userName,userEmail,borrowedDate,returnedDate}

        axiosSecure.patch(`/borrowUpdate/${one._id}`,data)
        .then(res=>{
             if(res.data.modifiedCount==1){

                toast.success("Borrowed Successfully.")


                setTimeout(() => {

                    navigate("/borrowed")


                    
                },2000);

              


             }
        })


    }
    return (
        <div className="w-11/12 pt-20 mx-auto mt-10">
            <Toaster
  position="top-left"
  reverseOrder={false}
/>

            <div className="text-center mt-5">
                <h1 className="text-3xl font-bold">Book Details</h1>
            </div>

            <div>
                <div className="card bg-base-100 shadow-2xl">

                    <div className="md:flex items-center gap-10 mt-5 p-5 space-y-3">

                        <div className="md:w-1/2">

                            <img className="h-[500px] w-full rounded-xl" src={one?.photo} alt="" />

                        </div>

                        <div className="md:w-1/2 space-y-2">

                            <h1 className="text-lg font-bold">Book Name: <span className="font-normal">{one?.bookName}</span></h1>
                            <h1 className="text-lg font-bold">Author Name: <span className="font-normal">{one?.authorName}</span></h1>
                            <h1 className="text-lg font-bold">Category: <span className="font-normal">{one?.category}</span></h1>
                            <h1 className="text-lg font-bold">Quantity: <span className="text-xl font-bold text-lime-700">{one?.quantity}</span></h1>
                            <div className="flex item-center">
                         <h1 className="text-lg font-bold">Rating:</h1>
                         <span><Rating style={{ maxWidth: 100 }} value={one?.rating}/></span>
                         </div>
                         <h1 className="text-lg font-bold">Description: <span className="font-normal">{one?.description}</span></h1>
                         <h1 className="text-lg font-bold">Book Content: <span className="font-normal">{one?.bookContent}</span></h1>

                            <button disabled={one?.quantity===0} className="btn w-full bg-[#c9c6ac] text-black font-bold" onClick={() => document.getElementById('my_modal_1').showModal()}>Borrow Book</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box bg-cyan-400 h-[750px]">

                                    <form onSubmit={handleSubmit}>

                                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user.displayName} placeholder="Enter Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder=" Enter Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Borrow Date</span>
                        </label>
                        <DatePicker dateFormat={"dd-MM-yyyy"} className="w-full rounded-xl p-3" selected={borrowDate} onChange={(date) => setBorrowDate(date)} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Return Date</span>
                        </label>
                        <DatePicker  dateFormat={"dd-MM-yyyy"} className="w-full rounded-xl p-3" selected={returnDate} onChange={(date) => setReturnDate(date)} />
                    </div>

                    <div className="form-control mt-4">

<input className="btn bg-[#c9c6ac] text-black" type="submit" value="Submit" />
</div>



                                    </form>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                            

                        </div>

                    </div>
                    
                    
                </div>
            </div>

        </div>
    );
};

export default BookDetails;