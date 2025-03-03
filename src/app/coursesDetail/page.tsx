'use client'
import React from 'react'
import { useSearchParams,useRouter } from 'next/navigation'
import courseData from '../../data/music_courses.json'
import { BackgroundGradient } from '../../components/ui/background-gradient'
import { Button } from '../../components/ui/moving-border'

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseId = searchParams.get('courseId');
  
  const course = courseId 
    ? courseData.find(course => course.id === parseInt(courseId)) 
    : null;
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mt-20 mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-10">
          Course Details
        </h1>
        
        {course ? (
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-black/70">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-4">{course.title}</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 mb-4">{course.description}</p>
                  
                  <div className="space-y-3 text-gray-300">
                    <p>
                      <span className="font-semibold text-teal-400">Instructor:</span>{' '}
                      {course.instructor}
                    </p>
                    <p>
                      <span className="font-semibold text-teal-400">Duration:</span>{' '}
                      {course.duration}
                    </p>
                    <p>
                      <span className="font-semibold text-teal-400">Price:</span>{' '}
                      {course.price}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center items-center">
                  <Button 
                    className="px-6 py-3 rounded-lg text-white bg-teal-600 hover:bg-teal-700 transition duration-300"
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          </BackgroundGradient>
        ) : (
          <div className="text-center">
            <p className="text-xl text-gray-300 mb-6">
              Please select a course to view its details
            </p>
            <Button 
              onClick={() => router.push("/")}
              className="px-6 py-3 rounded-lg text-white bg-teal-600 hover:bg-teal-700 transition duration-300"
            >
              Back to Courses
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Page;
