import Marquee from "react-fast-marquee";

const Authors = () => {
    return (
        <div className="w-full mt-10">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">Meet the Minds Behind the Words</h1>
                <p className="font-semibold">Discover the faces and voices behind the captivating narratives. Our authors blend creativity with expertise, weaving stories that inspire, provoke, and entertain. Get to know the brilliant minds shaping our literary landscape, one word at a time</p>
            </div>
           <Marquee>
           <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 mx-5">
                <img src="https://i.ibb.co/j5SRj3p/22890669-6718801.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">

                    <h2 className="text-xl text-center font-semibold tracking-wide">William Shakespeare</h2>
                </div>

            </div>
           <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900  mx-5">
                <img src="https://i.ibb.co/n14dtcx/726px-Jane-Austen.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">

                    <h2 className="text-xl text-center font-semibold tracking-wide">Jane Austin</h2>
                </div>

            </div>
           <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900  mx-5">
                <img src="https://i.ibb.co/9sJJFYS/Kafka1906.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">

                    <h2 className="text-xl text-center font-semibold tracking-wide">Franz Kafka </h2>
                </div>

            </div>
           <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900  mx-5">
                <img src="https://i.ibb.co/xFMDbvz/Carl-Van-Vechten-William-Faulkner.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">

                    <h2 className="text-xl text-center font-semibold tracking-wide">William Faulkner</h2>
                </div>

            </div>
          
           </Marquee>
          
          
            

        </div>
    );
};

export default Authors;