import React from 'react'
import { CardProps } from '../../interfaces'

const Card: React.FC<CardProps> = ({ title, image }) => {
  return (
    <div className="rounded-xl border shadow-md p-4">
      <img src={image} alt={title} className="rounded-md w-full h-40 object-cover" />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
    </div>
  )
}

export default Card
