import { Button, Input, Loader, Modal, Textarea } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  motion,
  useAnimationFrame,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import { useRef, useState } from 'react'
import HeroThreeJS from './HeroThreeJS'
import { supabase } from '../utils/supabaseClient'
import { toast } from 'react-hot-toast'

function Hero() {
  const [scroll, setScroll] = useState<number>()
  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [message, setMessage] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
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
    // @ts-ignore
    ref.current.style.transform = `translateY(${y}px)`
  })

  const [opened, { open, close }] = useDisclosure(false)

  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScroll(latest)
  })

  const svgVariants = {
    start: {
      pathLength: 0,
    },
    finished: {
      pathLength: 1,
      transition: {
        duration: 5,
        ease: 'easeInOut',
      },
    },
  }
  const emailregex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  async function sendContactForm() {
    setIsLoading(true)
    if (!name || !email || !message) {
      toast.error('Please fill out all fields')
      setIsLoading(false)
      return
    }

    if (!emailregex.test(email)) {
      toast.error('Please enter a valid email')
      setIsLoading(false)
      return
    }

    const { error } = await supabase
      .from('contact')
      .insert([{ name, email, message }])

    if (error) {
      toast.error('Error sending message' + error.message)
      setIsLoading(false)
      return
    } else {
      toast.success('Message sent successfully')
      setIsLoading(false)
      close()
    }
  }

  return (
    <div className="bg-slate-800 min-h-screen relative" id="home">
      <motion.div
        className="flex absolute z-40 top-0 bottom-0 right-0 items-center justify-between gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 1.5 } }}
      >
        <div className=" md:w-1/2 h-full ">
          <HeroThreeJS
            //@ts-ignore
            scrollYProgress={scroll}
          />
        </div>
        <div className="flex flex-col justify-between items-start md:mr-4 mr-2 w-1/2">
          <p className="text-white text-4xl md:text-6xl xl:text-9xl font-black flex flex-col md:flex-row items-center gap-2">
            Hi, I'm
            <svg
              className="md:h-64 md:w-64 h-36 w-36 fill-orange-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 765.59 278.81"
            >
              <motion.path
                variants={svgVariants}
                initial="start"
                animate="finished"
                d="m20.56,40.15c-3.42-.27-6.9-.23-10.24-.9-2.55-.52-5.3-1.47-7.28-3.07-4.13-3.34-3.98-7.3-.02-10.91.9-.82,2.17-1.23,3.28-1.82.96-.02,1.91-.04,2.87-.07,3.43-.51,6.86-1,10.29-1.52,2.59-.39,5.17-.81,7.76-1.22,1.51-.32,3.01-.65,4.52-.97,1.83-.23,3.66-.46,5.48-.7,1.44-.13,2.89-.26,4.33-.39,9.83-.97,19.66-1.93,29.48-2.9,1.9,1.02,3.72.97,5.43-.43,2.19-.24,4.38-.49,6.56-.73,1.54,1.04,2.99.97,4.34-.35,1.69-.18,3.38-.36,5.07-.54,1.58-.16,3.16-.33,4.74-.49,5-.58,10.01-1.16,15.01-1.73,1.54-.16,3.08-.32,4.62-.49,2.19-.24,4.38-.48,6.57-.72,1.45-.13,2.9-.25,4.35-.38,9.7-.93,19.41-1.87,29.11-2.8,1.93-.15,3.87-.31,5.8-.46,7.52-.56,15.05-1.12,22.57-1.68,3.02-.17,6.04-.33,9.06-.5,4.37-.22,8.74-.44,13.11-.66,4.75.94,9.48,1.13,14.16-.43,11.28-.24,22.56-.48,33.84-.72,3.62,0,7.24,0,10.86,0,6.92.28,13.83.55,20.75.83,1.09.07,2.17.14,3.26.2,2.55.26,5.1.53,7.65.79,1.18.11,2.36.22,3.54.33,7.7.76,15.39,1.52,23.77,2.34-.82,1.34-1.18,2.66-2.04,3.21-3.2,2.03-6.36,4.45-9.9,5.57-8.73,2.75-17.65,4.92-26.52,7.18-2.4.61-4.93.73-7.4,1.07-.73.02-1.45.05-2.18.07-2.19.25-4.38.5-6.56.75-1.81.13-3.62.26-5.44.38-2.92.21-5.84.41-8.76.62-3.26.15-6.53.31-9.79.46-3.65.21-7.29.42-10.94.63-3.26.15-6.53.31-9.79.46-3.17.17-6.33.34-9.5.51-3.38.19-6.76.39-10.14.58-3.28.22-6.56.44-9.85.66-1.4.15-2.79.3-4.19.46.34,1.05.68,2.11,1.02,3.16.9,5.15,1.82,10.29,2.7,15.44.24,1.38.37,2.77.55,4.16.39,1.1.77,2.2,1.16,3.3.22,1.37.43,2.73.64,4.1.14,1.18.28,2.36.43,3.54.63,11.29,1.26,22.57,1.9,33.86-1.35,5.07-1.33,10.13-.01,15.2-.61,7.28-1.23,14.56-1.84,21.85-.41,1.46-.82,2.92-1.23,4.38-.77,4.74-1.16,9.59-2.38,14.21-3.08,11.72-5.89,23.58-9.99,34.95-6.06,16.81-12.83,33.39-23.86,47.8-6.12,8-13.04,15.09-21.46,20.69-11.28,7.51-23.82,10.04-36.83,7.48-9.64-1.89-17.78-7.72-24.92-14.48-10.88-10.31-18.27-22.74-21.68-37.42-.52-2.24-1.07-4.47-1.61-6.71-.08-.73-.16-1.45-.23-2.18-.35-8.84-1.52-17.75-.86-26.52,1.01-13.43,7.2-25.03,15.5-35.5.4-.5,1.18-.69,2.4-1.37.29,1.54.81,2.68.64,3.71-.46,2.85-1.23,5.65-1.82,8.49-1.72,8.21-2.36,16.46-.76,24.78.1.8.21,1.6.31,2.4.34,2.29.35,4.68,1.07,6.84,4.48,13.44,9.49,26.66,18.21,38.08,3.78,4.94,8.14,9.28,13.61,12.39,7.51,4.26,14.89,3.96,22.15-.65,7.5-4.76,13.38-11.16,18.23-18.5,6.42-9.72,11.78-19.97,15.32-31.15,2.36-7.47,5.47-14.71,7.68-22.22,2.07-7.01,3.48-14.21,5.04-21.37.65-2.97.92-6.02,1.36-9.03,1.95-.74,1.92-2.14,1.23-3.75.22-1.73.43-3.46.65-5.19.16-1.9.33-3.81.49-5.71.06-10.66.13-21.32.17-31.98,0-1.62-.13-3.25-.2-4.87-.02-.72-.04-1.44-.06-2.15-.49-16.06-.97-32.12-1.48-48.89-3.18.17-5.79.31-8.4.45-2.63.18-5.26.37-7.88.55-7.17.53-14.33,1.07-21.5,1.6-1.93.17-3.86.33-5.78.5-2.55.26-5.1.51-7.65.77-1.45.12-2.9.23-4.35.35-2.19.24-4.38.48-6.56.72-1.45.12-2.9.25-4.35.37-2.07.2-4.14.41-6.21.61-1.93.17-3.86.34-5.79.51-2.19.22-4.38.44-6.57.66-1.81.13-3.62.27-5.43.4-2.55.22-5.11.43-7.66.65-2.54.16-5.07.32-7.61.49-2.56.19-5.11.38-7.67.57-1.81.11-3.61.22-5.42.33-9.46.04-18.91.08-28.37.12-1.91-.12-3.81-.24-5.72-.35Z"
              />
              <motion.path
                variants={svgVariants}
                initial="start"
                animate="finished"
                d="m491.59,152.05c.03,2.33.07,4.65.1,6.98.17.84.34,1.68.51,2.52.36,1.8.73,3.59,1.09,5.39.23.45.47.9.7,1.35.13.64.26,1.28.39,1.92.25.44.49.89.74,1.33,4.95,11.02,9.72,22.14,14.93,33.04,3.62,7.58,8.91,14.08,14.68,20.2,5.39,5.71,11.66,9.72,19.31,11.64,1.78.45,4.04.25,5.37,2.8-1.28.54-2.32,1.2-3.45,1.41-10.04,1.88-19.49.61-28.2-5.13-7.1-4.68-12.62-10.93-17.77-17.54-9.42-12.09-16.96-25.35-24.16-38.83-1.17-2.2-2.24-4.45-3.36-6.68-.49-.71-.97-1.42-1.46-2.13-.27.1-.54.2-.81.3.06,1.35.13,2.7.19,4.05.34,15.17.81,30.34.99,45.51.16,13.18,0,26.37-.01,39.56-.07,1.09-.14,2.19-.21,3.28-.27,3.41-.62,6.81-.79,10.22-.12,2.36-.82,4.24-3.14,5.17-2.31.92-4.37.15-5.9-1.5-1.45-1.56-2.89-3.33-3.66-5.27-1.82-4.61-3.24-9.38-4.82-14.09-.03-.73-.06-1.45-.1-2.18-.19-.98-.38-1.96-.56-2.95-.14-.84-.29-1.67-.43-2.51-.22-1.71-.45-3.41-.67-5.12-.16-1.57-.32-3.13-.48-4.7-.78-21.38-1.75-42.75-2.29-64.14-.72-28.64-1.19-57.29-1.58-85.94-.12-8.88.4-17.76.63-26.65.1-1.54.2-3.09.3-4.63.64-6.09,1.28-12.19,1.92-18.28.1-.84.2-1.68.31-2.52.75-10.29,3.41-20.21,6.02-30.13.5-1.91,1.11-3.9,2.17-5.53,2.15-3.28,6.12-2.98,7.79.56.75,1.59,1.08,3.47,1.17,5.24.18,3.26.16,6.53.03,9.8-1.44,35.77.31,71.48,1.79,107.19.13,3.08.11,6.17.16,9.25-1.35,2.05-1.17,3.99.24,6.28,1.29-2.2,2.34-3.97,3.38-5.75,4.33-7.1,10.42-12.55,17.03-17.32,9.83-7.09,19.75-14.09,30.08-20.42,5.79-3.55,12.35-6,18.78-8.33,8.61-3.12,17.43-5.64,26.16-8.42,2.14.01,4.28.02,6.43.03.91.54,1.83,1.08,2.74,1.61.38,2.15.76,4.29,1.14,6.44-.67,1.13-1.34,2.27-2.01,3.4-.84.43-1.69.87-2.53,1.3-10.35,4.9-19.72,11.35-29,17.99-12.22,8.74-24.68,17.14-36.95,25.81-4.72,3.34-9.39,6.85-12.07,12.25-.29.95-.57,1.9-.86,2.84Z"
              />
              <motion.path
                variants={svgVariants}
                initial="start"
                animate="finished"
                d="m240.13,235.74c-1.76-6.91-1.47-13.82-.04-20.73.2-.84.4-1.68.6-2.52,3.94-15.62,12.84-28.29,24.25-39.19,11.57-11.06,24.59-20.24,38.91-27.47,8.12-4.1,16.65-7.05,25.77-8.01,2.87,0,5.75.01,8.62.02,2.93.9,6.07,1.38,8.74,2.77,6.49,3.39,7.6,9.51,3.33,15.56-3.02,4.28-5.83,8.72-8.88,12.98-.51.71-1.9,1.39-2.62,1.18-.71-.21-1.54-1.58-1.51-2.41.04-1.4.64-2.81,1.14-4.16.98-2.71,2.05-5.39,3.45-9.03-2.57.22-4.5.12-6.28.59-30.71,7.94-54.65,24.65-69.26,53.49-3.25,6.41-4.66,13.16-4.33,20.26.12,2.5.57,5.12,1.52,7.41,3.44,8.33,10.03,11.97,19.25,9.74,8.7-2.1,15.88-7.02,22.66-12.57,11.16-9.14,20.87-19.69,29.57-31.17,8.79-11.6,16.65-23.81,23.51-36.67.93-1.75,1.98-3.49,3.23-5.01,2.02-2.45,4.71-3.38,7.82-2.43,3.16.97,4.69,3.36,4.91,6.52.32,4.71.47,9.43.7,14.15.05.72.09,1.44.14,2.16,1.53,12.42,2.59,24.92,4.8,37.21,1.2,6.68,4.37,13,6.67,19.48.58,1.64,1.23,3.26,1.1,5.42-.86-.72-1.85-1.34-2.55-2.19-6.31-7.71-10.27-16.67-13.27-26.05-2.49-7.8-4.66-15.69-7.22-24.4-1.86,3.33-3.33,5.98-4.82,8.62-10.99,19.52-24.87,36.61-42.48,50.58-9.17,7.27-19.15,13.13-30.65,15.63-16.09,3.5-29.92-.27-40.2-14.64-2.77-3.87-4.34-8.61-6.47-12.95-.03-.72-.05-1.44-.08-2.16Z"
              />
              <motion.path
                variants={svgVariants}
                initial="start"
                animate="finished"
                d="m764.88,86.28c-.2-.83-.39-1.67-.59-2.5-2.14-4.55-3.61-9.61-6.56-13.57-9.56-12.87-23-18.73-38.78-19.69-1.79,0-3.58-.01-5.37-.02-13.14.75-25.2,4.68-35.77,12.63-18.28,13.74-28.82,32.31-33.61,54.41-.17.85-.34,1.7-.51,2.56-.26,1.46-.52,2.92-.78,4.38-.08.72-.16,1.44-.24,2.16-.27,3.28-.54,6.56-.81,9.85.03,3.76.07,7.51.1,11.27.57,5.69,1.14,11.38,1.72,17.07.02.73.04,1.45.06,2.18,1.4,5.57,2.63,11.18,4.23,16.69,4.39,15.15,11.22,29.06,21.49,41.15,13.28,15.63,29.83,25.18,50.54,26.81,8.81.69,17.36-1.01,25.8-3.3,1.54-.42,3.36-.93,2.05-3.73-3.21-.13-6.63-.23-10.04-.41-18.71-1.02-34.38-8.3-46.56-22.72-11.06-13.09-17.52-28.51-22.36-44.69-3-10.02-3.64-20.41-4.1-30.8-.08-1.68.2-3.38.28-4.74,3.18.19,5.65.34,8.11.49.73.06,1.45.12,2.18.19,2.18.28,4.37.57,6.55.85.73.06,1.45.11,2.18.17,10.12.43,20.23,1.04,30.24-1.35,13.01-3.1,25.22-7.9,35.42-16.8,11.67-10.19,18.05-22.56,15.13-38.54Zm-24.46,17.48c-5.62,8.49-13.67,13.86-23.08,17.42-9.59,3.62-19.51,3.99-29.53,3.11-6.85-.6-13.68-1.48-20.97-2.29,5.04-22.81,21.37-44.94,45.85-49.37,9.26-1.68,17.76-.12,24.81,6.51,7.53,7.08,8.61,16.01,2.92,24.61Z"
              />
            </svg>
          </p>
          <motion.div
            className="flex md:items-center items-start justify-between gap-2 md:flex-row flex-col"
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
      <Modal opened={opened} onClose={close} padding="md" size="md" centered>
        <Modal.Header>
          <Modal.Title className="text-2xl">Send a message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className="flex flex-col gap-4 "
            onSubmit={(e) => {
              e.preventDefault()
              sendContactForm()
            }}
          >
            <Input.Wrapper label="Name:">
              <Input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Input.Wrapper>
            <Input.Wrapper label="Email:">
              <Input
                placeholder="jaecob.d1@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Input.Wrapper>
            <Input.Wrapper label="Message:">
              <Textarea
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </Input.Wrapper>
            <Button
              variant="outline"
              color="blue"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <Loader /> : 'Send'}
            </Button>
          </form>
        </Modal.Body>
      </Modal>
      <motion.div className="flex w-full h-screen items-start justify-center flex-col  bg-gradient-to-b from-slate-600 to-slate-900"></motion.div>
    </div>
  )
}

export default Hero
