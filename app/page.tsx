'use client'
import React from 'react'
import Body from './components/Body'
import GenerateButton from './components/GenerateButton'

export default function Home() {
  const [meal, setMeal] = React.useState(null)

  return (
    <div className="flex flex-col gap-5 overflow-auto">
      {meal == null && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 justify-center items-center w-full">
          <div className="font-sans text-2xl font-semibold">
            Feeling Hungry?
          </div>
          <GenerateButton setMeal={setMeal} />
        </div>
      )}
      <Body meal={meal} setMeal={setMeal} />
    </div>
  )
}
