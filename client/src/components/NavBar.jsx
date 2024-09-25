import { FcReading } from "react-icons/fc";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import { FaDoorOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="w-[100%] flex justify-between items-center p-8">
        <div className="flex space-x-3 justify-center items-center font-normal text-3xl">
            <FcReading />
            <p className="bubbleGum text-headColor">Mwalimu</p>
        </div>
        <div className="openSans flex justify-end items-center space-x-5">
            <Link to="/" className="text-base font-semibold text-black hover:text-headColor cursor-pointer">Home</Link>
            <a href="#aboutMe" className="text-base font-semibold text-black hover:text-headColor cursor-pointer">About Us</a>
            <a href="#classes" className="text-base font-semibold text-black hover:text-headColor cursor-pointer">Classes</a>
            <a href="#teachers" className="text-base font-semibold text-black hover:text-headColor cursor-pointer">Pages</a>
            <a href="#contacts" className="text-base font-semibold text-black hover:text-headColor cursor-pointer">Contacts</a>
            <Link to="/login" className="text-base font-medium rounded-full px-8 bg-headColor flex items-center justify-center space-x-2 text-white p-2 cursor-pointer hover:outline hover:bg-opacity-0 hover:text-headColor">
                <p>Join Us</p>
                <FaDoorOpen />
            </Link>
            <Link to="/register" className="text-lg font-medium rounded-full px-8 bg-red-500 flex items-center justify-center space-x-2 text-white p-2 cursor-pointer hover:outline hover:bg-opacity-0 hover:text-red-500">
                <p>Leave</p>
                <FaPersonWalkingDashedLineArrowRight />
            </Link>
        </div>
      
    </div>
  )
}

export default NavBar
