import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Rating } from '@smastrom/react-rating'

const BookDetails = () => {


    const { _id } = useParams()

    const [one, setOne] = useState([])

    const axiosSecure = useAxiosSecure()

    useEffect(() => {

        axiosSecure.get(`/details/${_id}`)
            .then(res => {
                setOne(res.data)
            })



    }, [axiosSecure, _id])

    console.log(one)
    return (
        <div className="w-11/12 mx-auto mt-10">
            <div className="text-center mt-5">
                <h1 className="text-3xl font-bold">Book Details</h1>
            </div>

            <div>
                <div className="card bg-base-100 shadow-2xl">

                    <div className="flex items-center gap-10 mt-5 p-5">

                        <div className="w-1/2">

                            <img className="h-[500px] w-full rounded-xl" src={one?.photo} alt="" />

                        </div>

                        <div className="w-1/2 space-y-2">

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
                                <div className="modal-box h-[500px]">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click the button below to close</p>
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