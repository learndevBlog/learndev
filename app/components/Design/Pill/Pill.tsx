import React from 'react'
import { pillVariants } from './variants';

const Pill = ({onClick, color, active = false}: { onClick?: () => void, color?: 'default' | 'primary', active: boolean }) => {
  return (
    <button onClick={onClick} className={`pill ${pillVariants({color})} ${active ? 'active' : ''}`}></button>
  )
}

export default Pill
