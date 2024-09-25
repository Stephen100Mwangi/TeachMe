import CallToActionCard from "../components/CallToActionCard"

const Teacher = () => {
  return (
    <div className="flex rounded-lg space-x-0 p-8 py-16">
        <div className="w-1/2 h-96 flex justify-center items-center overflow-clip">
            <img src="/teacher.jpg" alt="" className="rounded-l-lg w-[100%] h-[100%] object-cover" />
        </div>
        <div className="w-1/2 rounded-r-lg pl-8 pt-5 bg-black bg-opacity-10">
            <CallToActionCard title="Become a Teacher"  text="Are you passionate about education and eager to make a difference? Join our platform and inspire the next generation of learners. As a teacher, you'll have the opportunity to share your knowledge, guide students, and be a part of a community dedicated to empowering young minds. Whether you're an experienced educator or just starting your teaching journey, we welcome you to contribute and grow with us." button="Join Now"/>
        </div>
    </div>
  )
}

export default Teacher
