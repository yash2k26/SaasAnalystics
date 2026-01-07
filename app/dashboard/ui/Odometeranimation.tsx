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

 const {theme} = useTheme()           
 const MotionValue = useMotionValue(0)

 const spring = useSpring(MotionValue,{
    stiffness:120,
    damping:20
 })

 const displayed = useTransform(spring,(latest)=>{
       const formatted = Math.floor(latest)
       
       return currency ? `$${formatAmount(formatted)}` : `${formatAmount(formatted)}`
    })

 useEffect(()=>{
    const controls = animate(MotionValue,value,{
        duration:0.2,
        ease:"easeOut"
    } )
    return ()=>controls.stop()
 },[theme])

  return (
    <motion.span>
      {displayed}
    </motion.span>
  )
}




export default NumberAnimation
