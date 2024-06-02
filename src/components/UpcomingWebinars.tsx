"use client"
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';
import Link from 'next/link';

const webinars = [
    {
      "title": "Mastering Music Theory",
      "description": "Join our expert instructors for an in-depth webinar on music theory. Learn the fundamentals and advanced concepts that will enhance your musical knowledge.",
      "link": "https://www.musicacademy.com/webinars/mastering-music-theory"
    },
    {
      "title": "Live Performance Tips and Tricks",
      "description": "Discover the secrets to captivating live performances. This webinar will cover stage presence, audience engagement, and practical tips to boost your confidence on stage.",
      "link": "https://www.musicacademy.com/webinars/live-performance-tips"
    },
    {
      "title": "Introduction to Music Production",
      "description": "Explore the world of music production in this introductory webinar. Learn about the tools and techniques used to create professional-sounding tracks.",
      "link": "https://www.musicacademy.com/webinars/introduction-to-music-production"
    },
    {
      "title": "Songwriting Workshop",
      "description": "Enhance your songwriting skills with our interactive workshop. Learn how to craft compelling lyrics and melodies that resonate with listeners.",
      "link": "https://www.musicacademy.com/webinars/songwriting-workshop"
    },
    {
      "title": "Vocal Techniques for Singers",
      "description": "Join our vocal experts for a comprehensive webinar on vocal techniques. Improve your singing voice with practical exercises and professional advice.",
      "link": "https://www.musicacademy.com/webinars/vocal-techniques-for-singers"
    },
    {
      "title": "Music Business 101",
      "description": "Gain insights into the music industry with our Music Business 101 webinar. Learn about career development, marketing strategies, and industry trends.",
      "link": "https://www.musicacademy.com/webinars/music-business-101"
    }
  ]
  ;

function UpcomingWebinars() {
    return (

        <div className='py-12 bg-gray-900'>
            <div>
                <div className="text-center">
                    <h2 className='text-base text-teal-600 font-semibold 
          tracking-wide uppercase'>FEATURED Webinars</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold -tracking-tight text-white sm:text-4xl'>
                       Enhace your Musical Journey</p>
                </div>
            </div>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={webinars} />
            </div>
            <div className='mt-20 text-center'>
                <Link href={"/courses"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white
                    hover:bg-gray-100 transition duration-200'>
                    View All Webinars
                </Link>
            </div>
        </div>

    )
}

export default UpcomingWebinars