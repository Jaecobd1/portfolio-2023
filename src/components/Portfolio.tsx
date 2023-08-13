import { Tooltip } from '@mantine/core'
import linkGarden from '/link-garden.png'
import Hap from '/Hap.png'
import clientPortal from '/Client-Portal.png'
import christmas from '/christmas.png'
import chatFish from '/chatFish.png'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
// import WordWrapAnimation from './WordWrapAnimation'
function Portfolio() {
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const work = [
    { name: 'Link Garden', image: linkGarden },
    { name: 'Hall Aluminum Products', image: Hap },
    { name: 'Reusser Client Portal', image: clientPortal },
    { name: '3D Christmas Card', image: christmas },

    { name: 'Chat Fish', image: chatFish },
  ]
  return (
    <>
      <div id="portfolio"></div>

      <div className="bg-gradient-to-b from-indigo-900 to-slate-900 min-h-screen text-white">
        <div className="flex flex-col p-12 ">
          {/* <WordWrapAnimation word="Portfolio" length={-72.95} />
           */}
          <h3 className="text-6xl">Portfolio</h3>
          <span>
            Here are some projects I have worked on (Blog posts coming soon)
          </span>
          <motion.div
            className="flex flex-wrap mt-12 gap-12 justify-evenly"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {work.map((work, index) => (
              // Fix this to change on intersection

              <WorkContainer
                index={index}
                name={work.name}
                image={work.image}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

function WorkContainer({
  name,
  image,
  index,
}: {
  name: string
  image: string
  index: number
}) {
  const ref = useRef<HTMLLIElement>(null)
  const isInView = useInView(ref)

  return (
    <motion.li
      ref={ref}
      style={{
        listStyle: 'none',
        transform: isInView ? 'translateY(-0)' : 'translateY(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 1.5s ease-in-out',
        transitionDelay: `${index * 0.2}s`,
      }}
      key={index}
    >
      <Tooltip label="open">
        <motion.div className="border-2 border-white flex  md:h-52 h- relative rounded-lg overflow-hidden">
          <img src={image} alt={name} className="cover" />
          <div className="absolute bottom-0 bg-slate-900/60 w-fit right-0 mx-auto px-2 left-0 text-white rounded-lg">
            <h3 className="text-xl">{name}</h3>
          </div>
        </motion.div>
      </Tooltip>
    </motion.li>
  )
}

export default Portfolio
