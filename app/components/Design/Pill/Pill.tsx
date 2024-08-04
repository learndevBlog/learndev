import React from 'react'
import { pillVariants } from './variants';

const Pill = ({onClick, color}: { onClick?: Function, color?: string}) => {
  return (
    <div className={pillVariants()}></div>
  )
}

export default Pill
