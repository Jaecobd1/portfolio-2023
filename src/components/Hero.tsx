import { Button, Input, Modal, Textarea } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { motion, useAnimationFrame, useTime, useTransform } from 'framer-motion'
import { useRef } from 'react'

function Hero() {
  const languagesAndFrameworks = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'TypeScript', label: 'TypeScript' },
    { value: 'React', label: 'React' },
    { value: 'Node', label: 'Node' },
    { value: 'Laravel', label: 'Laravel' },
    { value: 'PHP', label: 'PHP' },
    { value: 'Java', label: 'Java' },
    { value: 'C#', label: 'C#' },
    { value: 'Python', label: 'Python' },
    { value: 'Django', label: 'Django' },
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'Tailwind', label: 'Tailwind' },
    { value: 'Supabase', label: 'Supabase' },
    { value: 'Three.js', label: 'Three.js' },
  ]

  const ref = useRef(null)
  useAnimationFrame((time) => {
    const y =
      Math.sin(time / (languagesAndFrameworks.length * 200)) *
        (20.45 * languagesAndFrameworks.length) -
      20.45 * languagesAndFrameworks.length
    ref.current.style.transform = `translateY(${y}px)`
  })

  const [opened, { open, close }] = useDisclosure(false)
  const handleSubmit = () => {
    close()
  }

  return (
    <div className="bg-slate-800 min-h-screen relative" id="home">
      <motion.div
        className="flex absolute top-0 bottom-0 right-0 items-center justify-end mr-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 1.5 } }}
      >
        <div className="flex flex-col justify-between items-start">
          <p className="text-white text-4xl md:text-6xl xl:text-9xl font-black">
            Hi, I'm <span className="text-orange-400">Jake</span>
          </p>
          <motion.div
            className="flex items-center justify-between gap-2"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1.5, duration: 1.5 },
            }}
          >
            <p className="text-white text-lg md:text-xl xl:text-4xl">
              Full Stack Web Developer
            </p>
            <ul className=" p-1 mt-4 flex flex-col gap-4 h-12  overflow-hidden">
              <motion.div className="flex flex-col gap-4" ref={ref}>
                {languagesAndFrameworks.map((language) => (
                  <li
                    key={language.value}
                    className="text-white text-lg md:text-xl xl:text-4xl"
                  >
                    {language.label}
                  </li>
                ))}
              </motion.div>
            </ul>
          </motion.div>
          <motion.div
            className="flex justify-center w-full mt-2"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2, duration: 1.5 },
            }}
          >
            <Button onClick={open}>Contact me</Button>
          </motion.div>
        </div>
      </motion.div>
      <Modal opened={opened} onClose={close} padding="md" size="md">
        <Modal.Header>
          <Modal.Title>Send a message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="flex flex-col gap-4 ">
            <Input.Wrapper label="Name:">
              <Input placeholder="Name" />
            </Input.Wrapper>
            <Input.Wrapper label="Email:">
              <Input placeholder="jake@dobler.com" />
            </Input.Wrapper>
            <Input.Wrapper label="Message:">
              <Textarea placeholder="Message" />
            </Input.Wrapper>
            <Button variant="outline" color="blue" onClick={handleSubmit}>
              Send
            </Button>
          </form>
        </Modal.Body>
      </Modal>
      <motion.div className="flex w-full h-screen items-center flex-col justify-end bg-gradient-to-b from-indigo-600 to-indigo-900"></motion.div>
    </div>
  )
}

export default Hero
