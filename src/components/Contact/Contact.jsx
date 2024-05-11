
import Lottie from "lottie-react";
import contactAnimation from "../../../public/Animation - 1715350866284.json"
const Contact = () => {

    const handleContact = e=>{
        e.preventDefault()
    }
    return (
        <div className="mt-10">
            <div className="text-center mb-10 space-y-3">
                <h1 className="text-3xl font-bold">Contact Us</h1>
                <p className="font-semibold w-2/3 mx-auto">We value your feedback and inquiries. Please dont hesitate to reach out to us with any questions, concerns, or suggestions you may have. Our dedicated team is here to assist you. You can contact us via email at [email address], by phone at [phone number], or through our websites contact form. </p>
            </div>
         <div className="flex gap-5 items-center">
            <div className="hidden sm:block sm:w-1/2">
            <Lottie  className="h-[550px]" animationData={contactAnimation} loop={true} />

            </div>
            <div className="w-full sm:w-1/2">
            <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                <form onSubmit={handleContact}>
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                            <input type="text" placeholder="First Name " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                            <input type="text" placeholder="Last Name" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                        <input type="email" placeholder="Email" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                        <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform bg-[#c9c6ac] text-black rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Send message
                    </button>
                </form>
            </div>
            </div>
         </div>
            
        </div>
    );
};

export default Contact;