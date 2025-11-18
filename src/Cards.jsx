import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

function Cards () {
  const images = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png',
    '/images/6.png'
  ]

  useEffect(() => {
    gsap.utils.toArray('.card').forEach(card => {
      gsap.to(card, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: 'top 15%',
          end: 'bottom 15%',
          markers: true,
          scrub: true
        }
      })
    })
  })

  return (
    <main className='w-full text-white flex flex-col gap-5 items-center py-[12vh] '>
      {images.map((image, index) => {
        return (
          <div
            id={index}
            className='card sticky w-[27vw] top-[12vh] text-center  items-center flex flex-col gap-5 px-[30px] py-[10vh] rounded-lg bg-[#383027]'
          >
            <div className='container w-[150px] h-[150px] flex flex-col items-center'>
              <img className='w-full object-contain' src={image} alt='' />
            </div>

            <h1 className='text-4xl'>
              The <br />
              <span className='font-bold'>Algorithm</span>
            </h1>
            <p className='font-thin'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, velit.
            </p>
          </div>
        )
      })}

      {/* <div className='card sticky w-[27vw] top-[12vh] text-center  items-center flex flex-col gap-5 px-[30px] py-[10vh] rounded-lg bg-[#383027]'>
        <img className='w-[150px]' src='/images/1.png' alt='' />
        <h1 className='text-4xl'>
          The <br />
          <span className='font-bold'>Algorithm</span>
        </h1>
        <p className='font-thin'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          velit.
        </p>
      </div> */}
    </main>
  )
}

export default Cards
