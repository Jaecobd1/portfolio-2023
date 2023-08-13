import {
  motion,
  useAnimationFrame,
  useMotionValue,
  // useScroll,
  // useSpring,
  useTransform,
  // useVelocity,
  wrap,
} from 'framer-motion'
import { useRef, useState } from 'react'
function WordWrapAnimation({ word, length }: { word: string; length: number }) {
  const [hovered, setHovered] = useState(false)
  const baseX = useMotionValue(1)
  // const { scrollY } = useScroll()
  // const scrollVelocity = useVelocity(scrollY)
  // const smoothVelocity = useSpring(scrollVelocity, {
  //   damping: 50,
  //   stiffness: 300,
  // })

  const x = useTransform(baseX, (v) => `${wrap(0, length, v)}%`)
  const directionFactor = useRef<number>(1)

  useAnimationFrame((delta) => {
    if (hovered) {
      directionFactor.current = 0
    } else {
      directionFactor.current = 1
    }
    let moveBy = (directionFactor.current * -5 * delta) / 1000
    console.log(delta)

    moveBy += directionFactor.current * moveBy
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <>
      <motion.div
        className="md:flex hidden gap-4"
        style={{ x }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <motion.h2 className="md:text-6xl text-2xl mt-12">{word}</motion.h2>
        <motion.h2 className="md:text-6xl text-2xl mt-12 font-bold">
          {word}
        </motion.h2>
        <motion.h2 className="md:text-6xl text-2xl mt-12">{word}</motion.h2>
        <motion.h2 className="md:text-6xl text-2xl mt-12 font-bold">
          {word}
        </motion.h2>
        <motion.h2 className="md:text-6xl text-2xl mt-12">{word}</motion.h2>
        <motion.h2 className="md:text-6xl text-2xl mt-12 font-bold">
          {word}
        </motion.h2>
        <motion.h2 className="md:text-6xl text-2xl mt-12">{word}</motion.h2>
        <motion.h2 className="md:text-6xl text-2xl mt-12 font-bold">
          {word}
        </motion.h2>
        <motion.h2 className="md:text-6xl text-2xl mt-12">{word}</motion.h2>
        <motion.h2 className="md:text-6xl text-2xl mt-12 font-bold">
          {word}
        </motion.h2>
        <motion.h2 className="md:text-6xl text-2xl mt-12">{word}</motion.h2>
        <motion.h2 className="md:text-6xl text-2xl mt-12 font-bold">
          {word}
        </motion.h2>
      </motion.div>
      <div className="md:hidden flex">
        <h2 className=" text-2xl mt-12">{word}</h2>
      </div>
    </>
  )
}

export default WordWrapAnimation
