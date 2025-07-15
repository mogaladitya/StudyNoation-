import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from "../HomePage/Button"

const InstructorSection = () => {
  return (
    <div className='mt-16'>
      <div className='flex flex-col lg:flex-row gap-20 items-center'>
        <div className='lg:w-[50%] flex justify-center'>
          <div className='bg-white p-2 rounded-lg shadow-lg' style={{ width: 'fit-content' }}>
            <img
              src={Instructor}
              alt=""
              className='rounded-lg object-cover'
              style={{ width: 400, height: 400, objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className='lg:w-[50%] flex flex-col gap-10'>
          <div className='text-4xl font-semibold lg:w-[50%]'>
            Become an
            <HighlightText text={" instructor"} />
          </div>
          <p className='font-medium text-[16px] w-[80%] text-richblack-300'>
            Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          <div className='w-fit'>
            <CTAButton active={true} linkto={"/signup"}>
              <div>
                Start Teaching Today
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorSection
