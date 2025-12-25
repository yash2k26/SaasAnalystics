import React from 'react'
import Graphcontent from './ui/Graphcontent'

export default function page() {
  return (
    <div className="grid grid-cols-2   ">
        <Graphcontent title='Totoal Revenue' value='$12048.00'  />
        <Graphcontent title='Signup Clicks' value='1,20,399'/>
        <Graphcontent title='Page View' value='2,34,883'/>
        <Graphcontent title='Total Events' value='1,12,36,128'/>
    </div>
  )
}
