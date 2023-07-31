import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineMenu } from 'react-icons/ai'
import { Drawer, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

function Nav() {
  const [selected, setSelected] = useState('work')
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <>
      <Drawer opened={opened} onClose={close} padding="md">
        <div className="flex flex-col justify-between gap-4 text-2xl font-semibold">
          <a
            href="#home"
            onClick={() => {
              setSelected('home')
              close()
            }}
            className={selected === 'home' ? 'navLinkActive' : 'text-slate-800'}
          >
            Home
          </a>
          <a
            href="#work"
            onClick={() => {
              setSelected('work')
              close()
            }}
            className={selected === 'work' ? 'navLinkActive' : 'text-slate-800'}
          >
            Work
          </a>
          <a
            href="#education"
            onClick={() => {
              setSelected('education')
              close()
            }}
            className={
              selected === 'education' ? 'navLinkActive' : 'text-slate-800'
            }
          >
            Education
          </a>
        </div>
      </Drawer>
      <div className="flex w-full sticky top-0 z-10 bg-slate-800 ">
        <motion.div
          className="bg-slate-800 h-10 items-center flex justify-between w-full "
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: { delay: 0.5, duration: 0.5 },
          }}
        >
          <div className="ml-4 text-white font-semibold hover:text-orange-400">
            Jake Dobler
          </div>
          <div className=" justify-evenly w-1/3 md:flex hidden">
            <a
              href="#home"
              onClick={() => setSelected('home')}
              className={selected === 'home' ? 'navLinkActive' : 'text-white'}
            >
              Home
            </a>
            <a
              href="#work"
              onClick={() => setSelected('work')}
              className={selected === 'work' ? 'navLinkActive' : 'text-white'}
            >
              Work
            </a>
            <a
              href="#education"
              onClick={() => setSelected('education')}
              className={
                selected === 'education' ? 'navLinkActive' : 'text-white'
              }
            >
              Education
            </a>
          </div>
          <div className="md:hidden flex mr-2 text-white">
            <AiOutlineMenu onClick={open} />
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Nav
