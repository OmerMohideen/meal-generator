import React from 'react'

function GenerateButton({ setMeal }: any) {
  const getMeals = async () => {
    return await (
      await fetch('https://www.themealdb.com/api/json/v1/1/random.php', {
        cache: 'no-cache'
      })
    )
      .json()
      .then(res => res.meals[0])
  }
  const generateMeal = async () => {
    let meal = await getMeals()
    setMeal(meal)
  }
  return (
    <div>
      <button
        className="px-6 py-2 scale-125 rounded-xl bg-blue-500 font-sans text-white"
        onClick={generateMeal}
      >
        Generate
      </button>
    </div>
  )
}

export default GenerateButton
