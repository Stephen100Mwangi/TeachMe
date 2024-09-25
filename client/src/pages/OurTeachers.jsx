import CallToActionCard from "../components/CallToActionCard"
import ImageCard from "../components/ImageCard"

const PopularTeachers = () => {
  return (
    <div id="teachers" className="flex flex-col space-y-5 items-center justify-center p-8 text-center">
        <CallToActionCard title="Our Teachers"  text="Meet our dedicated and approachable teachers who are committed to nurturing and guiding students at every step of their learning journey."  button="View More"></CallToActionCard>
        <div className="flex justify-between items-start w-full">
          <ImageCard teacherPosition ="Kindergarten" teacherName="Sarah W"teacherImage="/teacher1.jpg" ></ImageCard>
          <ImageCard teacherPosition ="Upper Primary" teacherName="Tom W"teacherImage="/teacher2.jpg" ></ImageCard>
          <ImageCard teacherPosition ="Kindergarten" teacherName="Peris W"teacherImage="/teacher3.jpg" ></ImageCard>

        </div>
      
    </div>
  )
}

export default PopularTeachers
