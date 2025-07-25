import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress  from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from "../HomePage/Button"

const LearningLanguageSection = () => {
  return (
    <div className='mt-16 mb-20'>
      <div className='flex flex-col gap-5 items-center'>
        <div className='text-4xl font-semibold text-center'>
          Your swiss knife for
          <HighlightText text={" learning any language"} />
        </div>
        <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[70%]'>
          Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-center mt-5 gap-6'>
          <img
            src={know_your_progress}
            alt="KnowYourProgressImage"
            className='object-contain shadow-lg rounded-lg rotate-[-8deg] lg:mt-0'
            style={{ boxShadow: '0 8px 24px 0 rgba(0,0,0,0.10)' }}
          />
          <img
            src={compare_with_others}
            alt="CompareWithOthersImage"
            className='object-contain shadow-lg rounded-lg rotate-[6deg] lg:mt-0 -mt-10'
            style={{ boxShadow: '0 8px 24px 0 rgba(0,0,0,0.10)' }}
          />
          <img
            src={plan_your_lesson}
            alt="PlanYourLessonsImage"
            className='object-contain shadow-lg rounded-lg rotate-[4deg] lg:mt-0 -mt-14'
            style={{ boxShadow: '0 8px 24px 0 rgba(0,0,0,0.10)' }}
          />
        </div>
        <div className='w-fit mt-8'>
          <CTAButton active={true} linkto={"/signup"}>
            <div>
              Learn More
            </div>
          </CTAButton>
        </div>
      </div>
    </div>
  )
}

export default LearningLanguageSection
