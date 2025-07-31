'use client';
import { GridBackgroundDemo } from "./ui/grid-background-demo";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
    name: 'Alex Johnson',
    title: 'Guitar Student',
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: 'Samantha Lee',
    title: 'Piano Student',
  },
  {
    quote:
      "From day one, I felt welcomed and motivated. The lessons are engaging, and the progress I’ve made in just a few months is incredible.",
    name: 'Carlos Mendes',
    title: 'Drum Student',
  },
  {
    quote:
      "This school offers the perfect balance of fun and learning. The instructors really care about helping you succeed, both technically and artistically.",
    name: 'Emily Wang',
    title: 'Violin Student',
  },
  {
    quote:
      "Their flexible schedule made it easy for me to learn music while managing a full-time job. Highly recommend it for adult learners too!",
    name: 'Rajiv Kapoor',
    title: 'Adult Learner – Keyboard',
  },
  {
    quote:
      "I always wanted to try music production, and this school gave me the tools and confidence to create my own tracks. A dream come true!",
    name: 'Nina Adams',
    title: 'Music Production Student',
  }
];


const MusicSchoolTestimonial = () => {
  return (

      <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center pt-10">Hear our Harmony: Voices of Success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 z-10">
            <GridBackgroundDemo>
            <div className="w-full max-w-6xl">
       
             <InfiniteMovingCards
          items={musicSchoolTestimonials}
          direction="right"
          speed="slow"
        />   
                    
            </div>
        </GridBackgroundDemo>
        </div>
    </div>

  )
}

export default MusicSchoolTestimonial;