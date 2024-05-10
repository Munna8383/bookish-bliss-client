import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination ,Autoplay} from 'swiper/modules';

const Slider = () => {
    return (
        <div className='mt-10 h-30'>
              <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 45,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        pagination={true}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='bg-[url(https://i.ibb.co/HYgRyVP/valdemaras-d-7-VPFyh-B-j8-Y-unsplash.jpg)] h-[350px] sm:h-[450px] w-3/2 mx-auto flex justify-center items-center text-center'>
            <div className='bg-gray-400 bg-opacity-35 p-5  text-blue-950'>
                <h1 className='text-2xl font-bold'>Exploring the Infinite Worlds of Knowledge</h1>
                <p className=' font-bold'> Dive into the vast expanse of literary treasures lining the shelves of our e-library.</p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-[url(https://i.ibb.co/93h9x6q/luisa-brimble-Vf-Ho-MBag-DPc-unsplash.jpg)] h-[350px] sm:h-[450px] w-3/2 mx-auto flex justify-center items-center text-center rounded-md object-cover'> 
        <div className='bg-gray-400 bg-opacity-35 p-5  text-blue-950'>
                <h1 className='text-2xl font-bold'>Unleashing the Power of Technology for Learning</h1>
                <p className=' font-bold'>  Embrace the convenience of digital access to a wealth of educational resources. </p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-[url(https://i.ibb.co/SQNCFGj/eliabe-costa-tzs-UJD0-TGkk-unsplash-1.jpg)] h-[350px] sm:h-[450px] w-3/2 mx-auto flex justify-center items-center text-center rounded-md object-cover'>
        <div className='bg-gray-400 bg-opacity-35 p-5  text-blue-950'>
                <h1 className='text-2xl font-bold'>Finding Solace in the Pages of Wisdom</h1>
                <p className=' font-bold'> Retreat to the cozy corners of our e-library, where the ambiance invites yo.u to immerse yourself </p>
            </div>

          </div>
       
          
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-[url(https://i.ibb.co/nfvjb26/yj-lee-x-Fco-LGuhd-Gs-unsplash.jpg)] h-[350px] sm:h-[450px] w-3/2 mx-auto flex justify-center items-center text-center rounded-md object-cover'>
        <div className='bg-gray-400 bg-opacity-35 p-5  text-blue-950'>
                <h1 className='text-2xl font-bold'>Unraveling the Stories That Shape Minds</h1>
                <p className=' font-bold'> ach page holds a universe of ideas waiting to be explored With our e-library .</p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-[url(https://i.ibb.co/5jV8Yj6/christian-wiediger-INEp-Z-RSQYM-unsplash-1.jpg)] h-[350px] sm:h-[450px] w-3/2 mx-auto flex justify-center items-center text-center rounded-md object-cover'>
        <div className='bg-gray-400 bg-opacity-35 p-5  text-blue-950'>
                <h1 className='text-2xl font-bold'>Connecting Cultures Through the Language of Literature</h1>
                <p className=' font-bold'> Experience the global tapestry of human experience woven through the pages of our e-library. </p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-[url(https://i.ibb.co/8zN9Fkw/fallon-michael-qml-GWIa-Igpo-unsplash.jpg)] h-[350px] sm:h-[450px] w-3/2 mx-auto flex justify-center items-center text-center rounded-md object-cover'>
        <div className='bg-gray-400 bg-opacity-35 p-5  text-blue-950'>
                <h1 className='text-2xl font-bold'>Gateway to Infinite Knowledge</h1>
                <p className=' font-bold'> Step into a realm where curiosity knows no bounds. Our e-library beckons you with its grand entrance,. </p>
            </div>

          </div>
        </SwiperSlide>
   
      </Swiper>
            
        </div>
    );
};

export default Slider;