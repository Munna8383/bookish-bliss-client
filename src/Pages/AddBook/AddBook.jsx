import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Toaster,toast} from 'react-hot-toast';


const AddBook = () => {

    const axiosSecure = useAxiosSecure()
    


    const handleAddBook = e=>{
        e.preventDefault()

        const photo = e.target.photo.value;
        const bookName = e.target.bookName.value;
        const quantity = parseInt(e.target.quantity.value)
        const authorName = e.target.authorName.value;
        const category = e.target.category.value;
        const description = e.target.description.value;
        const rating = parseInt( e.target.rating.value)
        const bookContent = e.target.bookContent.value;

        const book = {photo,bookName,quantity,authorName,category,description,rating,bookContent}

        axiosSecure.post("/book",book)
        .then(res=>{
            if(res.data.insertedId){
                toast.success('Added In Successfully')
                e.target.reset()
            }
        })


    }
    return (
        <div className="mt-10 w-11/12 mx-auto">
            <Toaster></Toaster>
            <div className="text-center">
                <h1 className="text-3xl font-bold">Add Books</h1>
            </div>

            <div className="card md:w-3/4 lg:w-1/2 mx-auto  bg-base-100 shadow-xl mt- 5 flex justify-center p-5">

                <form onSubmit={handleAddBook} className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Book Cover" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Book Name</span>
                        </label>
                        <input type="text" name="bookName" placeholder="Book Name" className="input input-bordered" required />
                    </div>
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" name="quantity" placeholder="Book Quantity" className="input input-bordered" required />
                    </div>
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <input type="text" name="authorName" placeholder="Author Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name="category" className="select select-bordered">
                            <option>Novel</option>
                            <option>Drama</option>
                            <option>Sci-Fi</option>
                            <option>History</option>
                            <option>Thriller</option>
                            <option>Music</option>
                        </select>
                    </div>

                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Short Description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" name="rating" placeholder="Rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Book Content</span>
                        </label>
                        <input type="text" name="bookContent" placeholder="Book Content" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6 col-span-2">

                        <input className="btn bg-[#c9c6ac] text-black" type="submit" value="Add" />
                    </div>




                </form>

            </div>

        </div>
    );
};

export default AddBook;