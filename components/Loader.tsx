import React from 'react'
import loader from "../public/images/loader.gif"
import Image from 'next/image'
import {motion} from "framer-motion"

const Loader = ({onComplete}:any) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50"
    >
       <motion.img
  src="/images/loader.gif" // Replace with your image path
  alt="loasd"
  initial={{ opacity: 1 }}
  animate={{ opacity: 0 }}
  transition={{ duration: 0.5, delay: 0.5 }}
  className=" object-cover"
/>
    </motion.div>
  )
}

export default Loader