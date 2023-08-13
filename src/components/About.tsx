import { useState } from 'react'
// import WordWrapAnimation from './WordWrapAnimation'
import useMousePosition from '../utils/useMousePosition'
import { motion } from 'framer-motion'

function About() {
  const { x, y } = useMousePosition()
  const [isHovered, setIsHovered] = useState(false)
  const size = isHovered ? 400 : 40

  return (
    <div
      className="text-white bg-gradient-to-b from-slate-900 to-black min-h-screen"
      id="about"
    >
      {/* <WordWrapAnimation word="About" length={-72.95} />
       */}
      <h2 className="text-6xl p-12">About</h2>

      <div className="p-12 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 to-black opacity-50 p-12  ">
          <motion.div
            animate={{
              // @ts-ignore
              WebkitMaskPosition: `${x - size / 2 - 45}px ${
                // @ts-ignore
                y - size / 2 - 90
              }px`,
              WebkitMaskSize: `${size}px`,
            }}
            transition={{
              type: 'tween',
              ease: 'backOut',
              duration: 0.5,
            }}
            className="text-2xl flex flex-col gap-12 items-center p-6 text-slate-900 Mask"
          >
            <span
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              As a child, I found inspiration in web-based games and the desire
              to create my own games and apps fueled my journey into web
              development. Starting in middle school, I dove headfirst into the
              world of web development and incorporated it into numerous
              projects, even establishing a coding club to share my passion with
              others.
            </span>
            <span
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Defining moments that solidified my passion include a recent
              internship at Reusser, a local company where I honed my skills in
              React.js, Typescript, PHP, and Laravel. This experience amplified
              my enthusiasm for web development and gave me the chance to tackle
              real-world challenges and projects.
            </span>

            <span
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              What sets me apart from other web developers is my innate
              creativity and willingness to tackle challenging problems. My
              background in photography, videography, and editing allows me to
              bring a unique perspective to my web development projects,
              creating visually appealing and engaging user experiences.
            </span>
            <span
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              When faced with challenges, I embrace them as opportunities to
              grow and push the boundaries of my knowledge. I approach
              problem-solving with an innovative mindset, always seeking
              creative solutions to enhance the functionality and user
              experience of my projects.
            </span>
            <span
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              I find joy in playing the guitar, which not only helps me relax
              and unwind but also fosters creativity in problem-solving. I
              approach each project with a fresh perspective, often drawing
              inspiration from my musical pursuits to think outside the box and
              push the boundaries of my knowledge.
            </span>
          </motion.div>
        </div>

        <div className="text-2xl flex flex-col gap-12  items-center p-6 md:text-slate-500 ">
          <span>
            As a child, I found inspiration in web-based games and the desire to
            create my own games and apps fueled my journey into web development.
            Starting in middle school, I dove headfirst into the world of web
            development and incorporated it into numerous projects, even
            establishing a coding club to share my passion with others.
          </span>
          <span>
            Defining moments that solidified my passion include a recent
            internship at Reusser, a local company where I honed my skills in
            React.js, Typescript, PHP, and Laravel. This experience amplified my
            enthusiasm for web development and gave me the chance to tackle
            real-world challenges and projects.
          </span>

          <span>
            What sets me apart from other web developers is my innate creativity
            and willingness to tackle challenging problems. My background in
            photography, videography, and editing allows me to bring a unique
            perspective to my web development projects, creating visually
            appealing and engaging user experiences.
          </span>
          <span>
            When faced with challenges, I embrace them as opportunities to grow
            and push the boundaries of my knowledge. I approach problem-solving
            with an innovative mindset, always seeking creative solutions to
            enhance the functionality and user experience of my projects.
          </span>
          <span>
            I find joy in playing the guitar, which not only helps me relax and
            unwind but also fosters creativity in problem-solving. I approach
            each project with a fresh perspective, often drawing inspiration
            from my musical pursuits to think outside the box and push the
            boundaries of my knowledge.
          </span>
        </div>
      </div>
    </div>
  )
}

export default About
