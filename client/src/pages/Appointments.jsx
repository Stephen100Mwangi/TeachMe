import { useState, useRef } from "react"
import { FaSpinner } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";


const Appointments = () => {

    const [loading,setLoading] = useState(false);
    const form = useRef();


    const [dataInput,setDataInput] = useState({
        guardianEmail:"",
        guardianName:"",
        childName:"",
        childAge:"",
        message:""
    })

    const handleChange = (e)=>{
        e.preventDefault();
        const {name,value}= e.target;
        setDataInput((previousData =>({
            ...previousData,
            [name]:value
        })))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!dataInput.childAge || !dataInput.childName || !dataInput.guardianEmail || !dataInput.guardianName || !dataInput.message) {
            toast.error("All fields must be complete");
            return;
        }
        setLoading(true);
        try {
            emailjs
            .sendForm('Mwangi_Dev', 'template_narzbdk', form.current, {
                publicKey: 'qwHf0F2RiOGhkuPAK',
            })
            .then(
                () => {
                console.log('SUCCESS!');
                toast.success("Appointment sent successfully");
                    setDataInput({
                        guardianEmail: "",
                        guardianName: "",
                        childName: "",
                        childAge: "",
                        message: "",
                    });
                            
                },
                (error) => {
                console.log('FAILED...', error.text);
                },
            );
        } catch (error) {
        console.error("FAILED...", error);
        toast.error("Error sending email");
        } finally { ()=>{
            setLoading(false);
        }
            
        }


    }

  return (
    <div className="flex space-x-0 w-full px-8 p-12">
        <Toaster position="top-left"></Toaster>
        <form ref={form} method="POST" onSubmit={handleSubmit} className="flex flex-col space-y-10 justify-start items-start w-1/2 rounded-l-lg">
            <h1 className="text-2xl bubbleGum text-headColor">Book an Appointment</h1>
            <div className="flex space-x-10 w-full justify-start items-start">
                <div className="flex flex-col space-y-3 w-[100%] pr-5">
                    <label htmlFor="Guardian Name" className="lato text-base font-bold text-black">Guardian Name</label>
                    <input type="text" name="guardianName" value={dataInput.guardianName} onChange={handleChange} className="p-2 text-black lato w-full rounded-lg outline-none shadow-lg focus:shadow-none focus:outline focus:outline-[.5px] focus:outline-red-500" id="" placeholder="Guardian Name"/>
                </div>
                <div className="flex flex-col space-y-3 w-[100%] pr-5">
                    <label htmlFor="Guardian Name" className="lato text-base font-bold text-black">Guardian Email</label>
                    <input type="email" name="guardianEmail" value={dataInput.guardianEmail} onChange={handleChange} className="p-2 text-black lato w-full rounded-lg outline-none shadow-lg focus:shadow-none focus:outline focus:outline-[.5px] focus:outline-red-500" id="" placeholder="someone@example.com"/>
                </div>
            </div>
            <div className="flex space-x-10 w-full justify-start items-start">
                <div className="flex flex-col space-y-3 w-[100%] pr-5">
                    <label htmlFor="Guardian Name" className="lato text-base font-bold text-black">Child Name</label>
                    <input type="text" name="childName" value={dataInput.childName} onChange={handleChange} className="p-2 text-black lato w-full rounded-lg outline-none shadow-lg focus:shadow-none focus:outline focus:outline-[.5px] focus:outline-red-500" id="" placeholder="Guardian Name"/>
                </div>
                <div className="flex flex-col space-y-3 w-[100%] pr-5">
                    <label htmlFor="Guardian Name" className="lato text-base font-bold text-black">Child Age</label>
                    <input type="number" name="childAge" value={dataInput.childAge} onChange={handleChange} className="p-2 text-black lato w-full rounded-lg outline-none shadow-lg focus:shadow-none focus:outline focus:outline-[.5px] focus:outline-red-500" id="" placeholder="0"/>
                </div>
            </div>

            <textarea name="message" value={dataInput.message} onChange={handleChange} id="" cols="72" rows="5" placeholder="Type your Message here" className="outline outline-[1px] text-black p-2 outline-headColor rounded-lg"></textarea>
            <button type="submit" disabled={loading} className="p-3 px-8 bg-headColor hover:outline hover:outline-headColor hover:bg-opacity-0 hover:text-headColor hover:rounded-full text-white">
                {
                    loading ? (<div className="flex items-center justify-center space-x-2">
                        <span>Loading</span>
                        <FaSpinner  className="animate-spin"/>
                    </div>): <span>Submit</span>
                }
               
            </button>

        </form>
        <div className="w-1/2 h-96 flex items-center justify-center rounded-r-lg">
            <img src="/appointment.jpg" className="object-cover h-[100%] w-[100%] rounded-r-lg" alt="Appointments" />
        </div>
      
    </div>
  )
}

export default Appointments
