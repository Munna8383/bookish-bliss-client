import { useContext, useState } from "react";
import {FaEye,FaEyeSlash} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Toaster,toast} from 'react-hot-toast';
import { Helmet } from "react-helmet-async";


const Register = () => {
    const [showPassword,setShowPassword]=useState(false)
    const{createUser,updatePhotoAndName,logout}= useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister=e=>{
        e.preventDefault()

        
        
        const passwordRegex = /^(?=.*[A-Z]).+$/;
        const lowerpasswordRegex = /^(?=.*[a-z]).+$/;
        const specialCharactersRegex = /[!@#$%^&*(),.?":{}|<>]/

       

        
        const name = e.target.name.value 
        const photo =e.target.photo.value 
        const email = e.target.email.value 
        const password = e.target.password.value 

    


        if (!passwordRegex.test(password)) {
            toast.error("password must have an uppercase letter")

            return
          }

        if(!lowerpasswordRegex.test(password)){
            toast.error("password must have an lowercase letter")

            return
        }
        if(!specialCharactersRegex.test(password)){
            toast.error("password must have a special character")

            return
        }

        if(password.length<6){
            toast.error("password length mus be 6 character")

            return
        }

        createUser(email,password)
        .then(()=>{
            updatePhotoAndName(name,photo)
            .then(()=>{
                toast.success('Registered Successfully')
                logout()

                setTimeout(()=>{
                       navigate("/login")

                },2000)
            })
        })

        e.target.reset()




    }

    return (
        <div className="mt-10 w-11/12 mx-auto">
            <Toaster></Toaster>
            <Helmet><title>Register || BookishBliss</title></Helmet>

            <div className="card bg-gray-300 opacity-85 p-5 shadow-3xl w-full sm:w-2/3 mx-auto">
            <div className="text-center">
                    <h1 className="text-4xl font-bold text-black">Sign Up</h1>
                </div>



                <form onSubmit={handleRegister} className="card-body ">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder=" Enter Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                       
                        <input type={showPassword? "text":"password"} name="password" placeholder=" Enter Password" className=" input input-bordered" required />
                        <span className="absolute right-12 bottom-4" onClick={()=>setShowPassword(!showPassword)}>
                            {
                                showPassword? <FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
                            }
                        </span>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#c9c6ac] text-black">Register</button>
                    </div>
                    <div className="text-center">
                        <h1 className="text-xl font-bold">Already Registered! <Link to={"/login"} className="text-blue-600">Login</Link></h1>
                    </div>
                </form>

                    </div>

                </div>
  

            
    
    );
};

export default Register;