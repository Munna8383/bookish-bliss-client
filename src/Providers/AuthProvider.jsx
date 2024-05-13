/* eslint-disable react/prop-types */
import { createContext, useEffect, useState} from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getAuth} from "firebase/auth";
import app from "../Firebase/firebase.config";
import useAxiosSecure from "../Hooks/useAxiosSecure";


export const AuthContext =createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const axiosSecure = useAxiosSecure()

    const [loading , setLoading] = useState(true)


    const [user,setUser]=useState(null)

   const createUser = (email,password)=>{

    setLoading(true)

    return createUserWithEmailAndPassword(auth,email,password)
   }

   const updatePhotoAndName = (name,photo)=>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
   }

   const login = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

    const googleLogin = ()=>{
        setLoading(true)
      return  signInWithPopup(auth, provider)
    }

    const logout = ()=>{
        setLoading(true)
        signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,currentUser =>{

        const userEmail = currentUser?.email || user?.email
        const loggedUser= {email:userEmail}

            setUser(currentUser)
            setLoading(false)

            if(currentUser){

                

                axiosSecure.post("/jwt",loggedUser)
                .then(res=>{
                    console.log(res.data)
                })

            }
            else{

                axiosSecure.post("/logout",loggedUser)
                .then(res=>{
                    console.log(res.data)
                })


            }

        });

        return ()=>{
            unsubscribe()
        }


    },[axiosSecure,user?.email])



    const authInfo={loading,user,createUser,updatePhotoAndName,login,googleLogin,logout}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

            
        </div>
    );
};

export default AuthProvider;