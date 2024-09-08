import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";
import { CiGrid41 } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";
import { Helmet} from 'react-helmet-async';
import { AuthContext } from "../../Providers/AuthProvider";


const AllBooks = () => {
    const [books,setBooks]=useState([])
    const axiosSecure = useAxiosSecure()
    const [text,getText]= useState("")
    const {user}= useContext(AuthContext)

    useEffect(()=>{

        axiosSecure.get(`/entireBook?search=${text}`)
        .then(res=>{

            setBooks(res.data)
        })


    },[axiosSecure,text])
    const handleText= (e)=>{
        getText(e.target.value)

    }

     const handleFilter = () => {
        const remain = [...books].filter((single) => single.quantity != 0);
        
        setBooks(remain)
    }

    const handleSearch=()=>{
        console.log(text)
    }

    if(books.length===0){
        return <div className="min-h-screen flex justify-center items-center "><span className="loading loading-spinner loading-lg"></span></div>
    }
    


    return (
        <div className="mt-10 pt-20 w-11/12 mx-auto">
            <Helmet><title>All Book || BookishBliss</title></Helmet>

            <div className="flex justify-between my-5">
                <h1 className="text-3xl font-bold">All Books</h1>
                <label className="input input-bordered flex items-center gap-2">
                    <input onChange={handleText} type="text" className="grow" placeholder="Search Book" />
                    <svg onClick={handleSearch} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>

        

<Tabs>
   <div className="flex justify-between">
    <div >
        <button className="btn btn-outline font-bold" onClick={handleFilter}>Show Available Book</button>
        <span className="ml-3 text-lg font-bold">Total Books:{books.length}</span>
    </div>
   <TabList>
   
      <Tab><span><CiGrid41 /></span></Tab>
      <Tab><FaListUl /></Tab>
    </TabList>
   </div>

    <div className="mt-5">
    <TabPanel>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {books.map((item,index)=><div key={index} className="card bg-base-100 shadow-xl shadow-gray-600">
  <figure><img className="h-[300px]  w-full" src={item.photo} alt="books" /></figure>
  <div className="card-body">

    <div className="space-y-2 text-lg font-bold">
        <h1>Book Title :<span className="font-medium text-base"> {item?.bookName}</span></h1>
        <h1>Author Name:<span className="font-medium text-base"> {item?.authorName}</span></h1>
        <h1>Category:<span className="font-medium text-base"> {item?.category}</span></h1>
       <div className="flex item-center">
       <h1>Rating:</h1>
       <span><Rating style={{ maxWidth: 100 }} value={item?.rating}/></span>
       </div> 
        <Link to={`/single/${item._id}`}><button disabled={!user} className="btn mt-3 bg-[#c9c6ac] text-black text-base font-medium w-full">Update</button></Link>
    </div>
    
   
   
  </div>
</div>)}
      </div>
    </TabPanel>
    <TabPanel>
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col />
				
			</colgroup>
			<thead className="dark:bg-gray-300">
				<tr className="text-center">
					<th className="p-3">Photo</th>
					<th className="p-3">BookName</th>
					<th className="p-3">Author Name</th>
					<th className="p-3">Category</th>
					<th className="p-3">Rating</th>
					<th className="p-3">Action</th>
				</tr>
			</thead>
			<tbody className="text-center">
				{
                    books.map((item,index)=><tr key={index} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3 flex justify-center">
						<img className="w-[50px]" src={item?.photo}/>
					</td>
					<td className="p-3">
						<h1>{item?.bookName}</h1>
					</td>
					<td className="p-3">
						<h1>{item.authorName}</h1>
					</td>
					<td className="p-3">
						<h1>{item?.category}</h1>
					</td>
					<td className="p-3 flex justify-center items-center">
						<h1><Rating style={{ maxWidth: 50 }} value={item?.rating}/></h1>
					</td>
					<td className="p-3">
						<Link to={`/single/${item._id}`}><button className="btn btn-sm bg-[#c9c6ac] text-black ">Update</button></Link>
					</td>
					
				</tr>)
                }
			</tbody>
		</table>
	</div>
</div>
    </TabPanel>
    </div>
  </Tabs>
            
        </div>
    );
};

export default AllBooks;