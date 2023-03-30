import React from 'react'
import {
  ArrowLeftIcon,
  ChevronDownIcon,
  EllipsisHorizontalIcon
} from '@heroicons/react/24/solid'
import Ingredient from './Ingredient'
import GenerateButton from './GenerateButton'

function Body({ meal, setMeal }: any) {
  let ingredients: string[] = []
  const sortIngredients = (m: string[]) => {
    for (let index: number = 1; index <= 20; index++) {
      console.log(m)
      if (m[`strIngredient${index}`]) {
        ingredients.push(
          m[`strIngredient${index}`] + ':' + m[`strMeasure${index}`]
        )
      } else {
        break
      }
    }
  }
  if (meal !== null) {
    sortIngredients(meal)
  }
  const resetMeal = () => {
    setMeal(null)
  }
  return (
    <>
      {meal && (
        <div className="pt-6 relative flex flex-col h-screen items-center gap-5">
          <div className="flex flex-row items-center justify-evenly w-full">
            <ArrowLeftIcon
              className="h-8 w-8 opacity-30 hover:opacity-100 duration-300 cursor-pointer"
              onClick={resetMeal}
            />
            <h1 className="sm:text-xl text-lg font-bold">{meal.strMeal}</h1>
            <EllipsisHorizontalIcon className="h-8 w-8 opacity-30 hover:opacity-100 duration-300 cursor-pointer" />
          </div>
          <div className="relative overflow-hidden w-[75%] rounded-3xl md:pt-[46.25%] pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
              src={
                'https://www.youtube.com/embed/' + meal.strYoutube.slice(-11)
              }
            ></iframe>
          </div>
          <div className="relative w-full h-2/3 flex flex-col items-center justify-center gap-5">
            <div className="flex flex-row items-center justify-evenly w-full">
              <h1 className="sm:text-2xl text-xl font-bold text-indigo-900">
                Ingredients ({ingredients.length})
              </h1>
              <button className="flex flex-row gap-2 items-center justify-center bg-green-500 text-white font-bold px-4 py-2 rounded-xl pointer-events-none">
                Serving
                <ChevronDownIcon className="h-4 w-4 fill-white scale-150" />
              </button>
            </div>
            <div className="overflow-hidden h-full w-2/3 flex items-center justify-center">
              <Ingredient ingredient={ingredients} />
              <div className="absolute bottom-0 z-10 bg-gradient-to-t from-white w-full h-1/3" />
              <div className="absolute bottom-10 z-20">
                <GenerateButton setMeal={setMeal} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Body
