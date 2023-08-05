import { Loader } from '@mantine/core'
import ivyTech from '/Ivy-tech.png'
import iupui from '/iupui.png'
import { motion } from 'framer-motion'
import { useState } from 'react'
function Summary() {
  const [hovered, setHovered] = useState(-1)
  const [isHovering, setIsHovering] = useState(false)
  const education = [
    {
      school: 'Ivy Tech',
      degree: 'Certification',
      major: 'Entrepreneurship',
      image: ivyTech,
      year: 'Spring 2022',
      deansList: true,
    },
    {
      school: 'Ivy Tech',
      degree: 'Classes',
      major: 'Computer Science',
      image: ivyTech,
      year: 'Summer 2022',
    },
    {
      school: 'Indiana University Purdue University Indianapolis',
      major: 'Informatics',
      degree: 'Bachelors',
      year: 'Spring 2024',
      image: iupui,
      gpa: '3.893',
      inProgress: true,
      deansList: true,
    },
  ]

  const educationVarients = {
    default: {
      scale: 1,
    },
    otherHovered: {
      scale: 0.5,
      transistion: {
        type: 'interia',
        velocity: 50,
        delay: 1,
        duration: 1,
      },
    },
  }
  return (
    <div id="summary" className="min-h-screen bg-slate-900 text-white p-12">
      {/* Insert Education Here */}
      <div className="flex flex-col gap-4">
        <h2 className="text-6xl mt-12">Summary</h2>

        <div className="flex flex-col">
          <h3 className="text-2xl">Education</h3>
          <div className="w-full flex justify-evenly md:flex-row flex-col gap-6 mt-12 items-center">
            {education.map((school, index) => (
              <motion.div
                className="flex flex-col gap-2 w-96 h-72 rounded-xl shadow-lg bg-white text-black p-4 ring-slate-300"
                whileHover={{ scale: 1.5 }}
                onHoverStart={() => {
                  setHovered(index)
                  setIsHovering(true)
                }}
                onHoverEnd={() => {
                  setHovered(-1)
                  setIsHovering(false)
                }}
                variants={educationVarients}
                initial="default"
                animate={
                  isHovering && hovered !== index ? 'otherHovered' : 'default'
                  // hovered !== index || hovered === -1
                  //   ? 'otherHovered'
                  //   : 'default'
                }
              >
                <h4 className="text-lg underline md:h-12">{school.school}</h4>
                <div className="h-6">
                  {school.deansList && (
                    <p className="text-xs text-slate-400">Deans List</p>
                  )}
                </div>
                <div className="flex items-center justify-evenly">
                  <div className="flex flex-col">
                    <span className="font-bold">{school.degree}</span>
                    <p className="text-xs">{school.major}</p>
                  </div>
                  <div className="w-24 h-24 mx-auto">
                    {school.image && (
                      <img
                        src={school.image}
                        alt={school.school}
                        className="cover"
                      />
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-center h-full flex-col">
                  <p className="text-xs text-slate-400">
                    {school.year} {school.gpa && `| ${school.gpa}`}
                  </p>
                  <p className="text-slate-400 ">{school.year}</p>
                </div>
                {school.inProgress && (
                  <div className="flex items-center gap-2 justify-center">
                    <Loader />
                    <div className="">
                      <p>In Progress </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
