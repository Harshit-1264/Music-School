'use client';
import Link from 'next/dist/client/link'
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinars = () => {

  const featuredWebinars = [
    {
      title: 'Mastering Jazz Improvisation',
      description:
        'Unlock your creativity by learning the techniques and theory behind jazz improvisation.',
      slug: 'mastering-jazz-improvisation',
      isFeatured: true,
    },
    {
      title: 'Electronic Music Production Basics',
      description:
        'An introduction to digital audio workstations and creating beats, melodies, and full tracks.',
      slug: 'electronic-music-production-basics',
      isFeatured: false,
    },
    {
      title: 'Vocal Techniques for Beginners',
      description:
        'Strengthen your vocal skills with breathing exercises, pitch control, and vocal warmups.',
      slug: 'vocal-techniques-for-beginners',
      isFeatured: true,
    },
    {
      title: 'Composing for Film and Media',
      description:
        'Learn how to write emotionally compelling music for film, games, and commercials.',
      slug: 'composing-for-film-and-media',
      isFeatured: false,
    },
    {
      title: 'Building a Home Studio on a Budget',
      description:
        'Explore affordable equipment and setup techniques to create a professional-quality home studio.',
      slug: 'building-a-home-studio-on-a-budget',
      isFeatured: true,
    },
    {
      title: 'Music Marketing Strategies',
      description:
        'Discover how to promote your music online, grow your fanbase, and monetize your work effectively.',
      slug: 'music-marketing-strategies',
      isFeatured: false,
    }
  ];

  return (
    <div className='p-12 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
          <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Webinars</h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Musical Journey</p>
        </div>

        <div className='mt-10'>
          <HoverEffect
            items={featuredWebinars.map(webinar => (
              {
                title: webinar.title,
                description: webinar.description,
                link: '/',
              }
            ))}
          />
        </div>

        <div className='mt-10 text-center'>
          <Link href={"/"}
          className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
          View All Webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars