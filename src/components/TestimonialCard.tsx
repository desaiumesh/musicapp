"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
        "quote": "This music course has completely transformed my understanding of music theory and composition. The instructors are incredibly knowledgeable and supportive.",
        "name": "Emily Johnson",
        "title": "Aspiring Composer"
    },
    {
        "quote": "The live feedback sessions have been invaluable. Getting real-time advice from experts has accelerated my learning and improved my performance skills dramatically.",
        "name": "Michael Smith",
        "title": "Guitarist"
    },
    {
        "quote": "I love the range of courses offered. From instrument training to music production, I have been able to explore different aspects of music that I never thought I could.",
        "name": "Sarah Brown",
        "title": "Music Enthusiast"
    },
    {
        "quote": "The practical lessons are top-notch. The step-by-step guidance has helped me master my instrument and boosted my confidence in playing.",
        "name": "James Lee",
        "title": "Pianist"
    },
    {
        "quote": "These courses have given me a deep appreciation for the historical and cultural context of music. It’s fascinating to learn how different genres evolved over time.",
        "name": "Anna White",
        "title": "Music History Buff"
    },
    {
        "quote": "The vocal training sessions have significantly improved my singing technique. The exercises and tips provided are practical and easy to follow.",
        "name": "David Martinez",
        "title": "Vocalist"
    },
    {
        "quote": "The music production course opened my eyes to new possibilities. I can now create and edit music with confidence using the latest technology.",
        "name": "Laura Wilson",
        "title": "Aspiring Music Producer"
    },
    {
        "quote": "The instructors are not only knowledgeable but also passionate about music. Their enthusiasm is contagious and makes the learning process enjoyable.",
        "name": "Chris Taylor",
        "title": "Band Member"
    },
    {
        "quote": "I’ve learned so much about songwriting and composition. The tips and techniques shared by the experts have helped me write better songs.",
        "name": "Sophia Harris",
        "title": "Songwriter"
    },
    {
        "quote": "The business and career development courses are a game-changer. I now have a clear roadmap to navigate the music industry and advance my career.",
        "name": "Daniel Kim",
        "title": "Professional Musician"
    }
];


function TestimonialCard() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">

            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of succes</h2>
            </div>
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow" />
            </div>
        </div>
    )
}

export default TestimonialCard