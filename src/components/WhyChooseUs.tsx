"use client";
import React from 'react'
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
    description:
      'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
  },
  {
    title: 'Live Feedback & Engagement',
    description:
      'Immerse yourself in an interactive learning experience where feedback is immediate, just like a real performance. Our instructors provide constructive guidance during sessions, helping you refine your skills in real time.',
  },
  {
    title: 'Performance Opportunities',
    description:
      'Step into the spotlight! We host regular concerts and recitals that give our students the chance to showcase their talent, build confidence, and gain real-world stage experience in a supportive environment.',
  },
  {
    title: 'Diverse Instrument Training',
    description:
      'From classical piano and acoustic guitar to digital production and vocals, our comprehensive curriculum covers a wide range of instruments and styles to fit your musical ambitions.',
  },
  {
    title: 'Flexible Learning Options',
    description:
      'Whether you prefer in-person lessons or online sessions, our hybrid learning model ensures you can access quality music education anytime, anywhere.',
  },
  {
    title: 'Community & Collaboration',
    description:
      'Join a vibrant community of musicians. Collaborate on projects, participate in group classes, and connect with peers who share your passion for music.',
  }
];


function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs