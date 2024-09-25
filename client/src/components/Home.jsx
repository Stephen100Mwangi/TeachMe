import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useState } from "react";
import { Link } from "react-router-dom";
// Image Carousel
const Home = () => {

    const [activeIndex,setActiveIndex] = useState(0);
    const slides = [
        { src: "/image1.jpg", alt: "Image 1" },
        { src: "/image2.jpg", alt: "Image 2" },
        { src: "/image3.jpg", alt: "Image 3" },
        { src: "/image4.jpg", alt: "Image 4" },
        { src: "/image5.jpg", alt: "Image 5" },
    ]

      
    const handlePrevClick = () => {
        setActiveIndex((prevIndex) => 
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setActiveIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    // const buttons = document.querySelectorAll("[data-carousel-button]")
    // buttons.forEach((button)=>{
    //     button.addEventListener("click",()=>{
    //         const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    //         const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

    //         const activeSlide = slides.querySelector("[data-active]");
    //         let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    //         if (newIndex < 0) {
    //             newIndex = slides.children.length -1 ;
    //         }

    //         if (newIndex >= slides.children.length) {
    //             newIndex = 0;                
    //         }

    //         slides.children[newIndex].dataset.active = true;
    //         delete activeSlide.dataset.active;

    //     })
    // })
  return (
    <div id="imageCarousel" data-carousel>
        <div onClick={handlePrevClick} className="p-2 rounded-full size-10 text-red-500 absolute left-2 top-[40%] bg-black bg-opacity-35 text-2xl flex justify-center items-center cursor-pointer z-50 hover:bg-red-500 hover:text-white" data-carousel-button="prev"><GrFormPrevious /></div>
        <div onClick={handleNextClick} className="p-2 rounded-full size-10 text-red-500 absolute right-2 top-[40%] bg-black bg-opacity-35 text-2xl flex justify-center items-center cursor-pointer z-50 hover:bg-red-500 hover:text-white" data-carousel-button="next"><MdNavigateNext /></div>
        <div className="absolute z-20 w-2/5 flex flex-col space-y-5 left-20 top-[20%]">
            <p className="openSans text-4xl font-bold leading-normal">Hi there! Ready to learn something cool today? Let &apos;s jump in and have some fun!</p>
            <p className="openSans text-lg font-normal">Choose your grade and pick a subject. Let &apos;s start learning together!</p>

            <div className="flex items-center w-full justify-start space-x-5">
                <Link to="/quizApp" className="bg-blue-400 text-white py-3 px-6 rounded-full hover:bg-blue-500">Start Now</Link>
                <button className="bg-headColor text-white py-3 px-6 rounded-full hover:outline">See My Progress</button>
            </div>
        </div>
        <ul data-slides>
            {slides.map((slide, index) => (
                <li
                    key={index}
                    className={`slide ${index === activeIndex ? "block" : "hidden"}`}
                    data-active={index === activeIndex}
                >
                    <img src={slide.src} alt={slide.alt} />
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default Home
