"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      "title": "Limitless Learning Opportunities",
      "description": "Explore a vast range of music genres and techniques with our comprehensive courses. Whether you're a beginner or an advanced musician, our curriculum is designed to expand your skills and knowledge without bounds."
    },
    {
      "title": "Live Feedback and Engagement",
      "description": "Get real-time feedback from experienced instructors during live sessions. Our interactive classes ensure that you receive personalized guidance and can engage with peers to enhance your learning experience."
    },
    {
      "title": "Comprehensive Music Theory",
      "description": "Dive deep into music theory with our structured courses. Learn about scales, chords, harmony, and more to build a solid foundation for your musical journey."
    },
    {
      "title": "Practical Instrument Training",
      "description": "Gain hands-on experience with your chosen instrument through practical lessons. Our courses cover a wide range of instruments, providing step-by-step guidance to master playing techniques."
    },
    {
      "title": "Music Production and Technology",
      "description": "Discover the world of music production with our courses on the latest technology and software. Learn how to create, edit, and produce high-quality music tracks."
    },
    {
      "title": "Songwriting and Composition",
      "description": "Develop your songwriting and composition skills with our expert-led courses. Learn how to craft compelling lyrics and melodies that resonate with your audience."
    },
    {
      "title": "Vocal Training and Techniques",
      "description": "Enhance your vocal abilities with professional training. Learn various singing techniques, vocal warm-ups, and exercises to improve your voice quality and range."
    },
    {
      "title": "Music Business and Career Development",
      "description": "Equip yourself with the knowledge to succeed in the music industry. Our courses cover business strategies, marketing, and career development to help you thrive as a professional musician."
    }
  ];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content}></StickyScroll>
    </div>
  )
}

export default WhyChooseUs