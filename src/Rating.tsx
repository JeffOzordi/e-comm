import React from 'react'

interface Props {
    score: number
}

const Rating = ({ score }: Props) => {
    let color = score > 4 ? 'bg-lime-400' : score > 3 ? 'bg-yellow-300' : 'bg-orange-400' 
  return (
    <span className={`text-l px-2 rounded-md ${color}`}>{score}</span>
  )
}

export default Rating