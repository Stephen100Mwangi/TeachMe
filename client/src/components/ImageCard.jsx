import { FiFacebook } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

import PropTypes from 'prop-types'
const ImageCard = ({teacherPosition,teacherName,teacherImage}) => {
  return (
    <div className="relative h-[540px] w-80 bg-black bg-opacity-35 flex items-center justify-center rounded-3xl">
        <img src={teacherImage} className=" absolute h-[100%] w-[100%] object-cover rounded-3xl" alt="" />
        <div className="">
            <div className="links cursor-pointer text-black hover:text-headColor hover:outline hover:outline-5 flex items-center justify-center flex-col space-y-3 z-50 absolute bg-white bottom-2 right-2 rounded-full size-32 space-x-3">
                <div className="name font-normal text-base">{teacherName}</div>
                <div className="position font-light text-base">{teacherPosition}</div>
                <div className="flex items-center justify-center space-x-2">
                    <FiFacebook />
                    <RiTwitterXLine />
                    <BsInstagram />
                </div>
            </div>
        </div>
      
    </div>
  )
}

ImageCard.propTypes = {
    teacherPosition: PropTypes.string,
    teacherName: PropTypes.string,
    teacherImage: PropTypes.image
}

export default ImageCard
