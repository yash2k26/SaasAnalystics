"use client"
import React, { useEffect } from 'react'
import {motion, motionValue, useAnimate, useMotionValue, useSpring, useTransform} from "motion/react"
import { animate } from 'motion'
import { Currency } from 'lucide-react'
import { formatAmount } from '../Formatcurrency'
import { useTheme } from '../ThemeProvider'


const NumberAnimation = ({value,currency}:{
            value : number
            currency : boolean
        }) => {

    const motionValue = useMotionValue(0)
    
    const spring = useSpring(motionValue, {
        stiffness:120,
        damping:20,
    })

    const displayed = useTransform(spring,(latest)=>{
            const formated = Math.floor(latest)
            return currency ? `$${formatAmount(formated)}` : `${formatAmount(formated)}`
    })

    useEffect(()=>{
        animate(motionValue,value,{
            duration:0.5,
            ease:"easeInOut"
        }) 
    },[])

  return (
    <motion.span>
      {displayed}
    </motion.span>
  )
}




export default NumberAnimation




