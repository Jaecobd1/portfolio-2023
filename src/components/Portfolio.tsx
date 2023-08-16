import { Tooltip } from '@mantine/core'
import linkGarden from '/link-garden.png'
import Hap from '/Hap.png'
import clientPortal from '/Client-Portal.png'
import christmas from '/christmas.png'
import chatFish from '/chatFish.png'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { LiaAwardSolid } from 'react-icons/lia'
import apple from '/apple.png'
import threeImage from '/threeImage.png'
import portfolio from '/portfolio.png'
import studyTimer from '/studyTimer.png'
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
    {
      name: 'Link Garden',
      image: linkGarden,
      link: 'https://link-garden.dobler.studio/garden/AnIH6DGQw3dLR35k66Y5Hjxq41K3',
    },
    {
      name: 'Hall Aluminum Products',
      image: Hap,
      link: 'https://www.hallaluminum.com/',
    },
    { name: 'Reusser Client Portal', image: clientPortal },
    {
      name: '3D Christmas Card',
      image: christmas,
      link: 'https://christmas.dobler.studio/',
    },

    {
      name: 'Chat Fish',
      image: chatFish,
      link: 'https://catfish-alpha.vercel.app/',
      award: true,
    },
    {
      name: 'Apple Clone',
      image: apple,
      link: 'https://apple.dobler.studio/',
    },
    {
      name: "Last Year's Portfolio",
      image: portfolio,
      link: 'https://jake.dobler.studio/',
    },
    {
      name: 'Three JS Playground 2022',
      image: threeImage,
      link: 'https://three.dobler.studio/',
    },
    {
      name: 'Study/Work Timer',
      image: studyTimer,
      link: 'https://timer.dobler.studio/',
    },
  ]
  return (
    <>
      <div id="portfolio"></div>

      <div className="bg-gradient-to-b to-indigo-900 from-slate-900 min-h-screen text-white">
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
                link={work.link}
                isAward={work.award}
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
  link = null,
  isAward = false,
}: {
  name: string
  image: string
  index: number
  link?: string | null
  isAward?: boolean
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
        transition: 'all 1s ease-in-out',
        transitionDelay: `${index * 0.2}s`,
      }}
      key={index}
      className="relative"
    >
      <Tooltip label="open">
        {link ? (
          <a href={link} rel="noopener" target="_blank">
            <motion.div className="border-2 border-white flex  md:h-52  relative rounded-lg overflow-hidden">
              <img src={image} alt={name} className="cover" />
              <div className="absolute bottom-0 bg-slate-900/60 w-fit right-0 mx-auto px-2 left-0 text-white rounded-lg">
                <h3 className="text-xl">{name}</h3>
              </div>
            </motion.div>
          </a>
        ) : (
          <motion.div className="border-2 border-white flex  md:h-52  relative rounded-lg overflow-hidden">
            <img src={image} alt={name} className="cover" />
            <div className="absolute bottom-0 bg-slate-900/60 w-fit right-0 mx-auto px-2 left-0 text-white rounded-lg">
              <h3 className="text-xl">{name}</h3>
            </div>
          </motion.div>
        )}
      </Tooltip>
      {isAward && (
        <Tooltip label="Award Winning">
          <div className="absolute bottom-0 right-0 p-4 text-2xl">
            <LiaAwardSolid />
          </div>
        </Tooltip>
      )}
    </motion.li>
  )
}

export default Portfolio
