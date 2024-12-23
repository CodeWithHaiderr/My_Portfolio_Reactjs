/**
 * @copyright 2024 CodeWithHaiderr
 * @license Apache-2.0
 */

import ReviewCard from "./ReviewCard";

import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);


const reviews = [
    {
      content: 'Reliable developer who worked efficiently on our project. He delivered on time and was always responsive to our needs. It was a good experience working with him.',
      name: 'Subhan Naseem',
      imgSrc: '/images/people-1.jpg',
      company: 'Equall technologies'
    },
    {
      content: 'I have worked with Haidar on a few projects. A solid team player and always stays focused on his tasks. He makes sure everything is on track and doesnt hesitate to help when needed.',
      name: 'Moiz Ali',
      imgSrc: '/images/people-1.png',
      company: 'WJIKS IT Solution'
    },
    {
      content: 'You are a reliable teammate who always gets his work done on time. Focused and helpful whenever someone needs assistance.',
      name: 'Zain Ali',
      imgSrc: '/images/people-1.png',
      company: 'Graana'
    },
    {
      content: 'You did a good job on our website. Happy with the results.',
      name: 'Hajra Imtiaz',
      imgSrc: '/images/female-avatar.jpg',
      company: 'Freelancing'
    },
    {
      content: 'I have worked with Mazahir on a few projects. He is good at staying on track and handling tasks without much supervision. Always gets things done.',
      name: 'Aqeel Haider',
      imgSrc: '/images/people-1.png',
      company: 'SDS-IT PayActiv'
    },
    {
      content: 'Mazahir completed our project as requested. ',
      name: 'Zara Ali',
      imgSrc: '/images/female-avatar.jpg',
      company: 'Freelancing'
    }
  ];

const Review = () => {
    useGSAP(()=> {
        gsap.to('.scrub-slide', {
            scrollTrigger: {
                trigger: '.scrub-slide',
                start: '-200% 80%',
                end: '400% 80%',
                scrub: true
            },
            x: '-1000'
        })
    });
  return (
    <section className="section overflow-hidden" id="reviews">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">What our customers say</h2>
            <div className="scrub-slide flex items-stretch gap-3 w-fit">
                {reviews.map(({content,name,imgSrc,company}, key) => (
                    <ReviewCard key={key} name={name} imgSrc={imgSrc} company={company} content={content}/>
                ))}
            </div>
        </div>

    </section>
  )
}

export default Review