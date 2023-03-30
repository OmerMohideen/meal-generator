import React from 'react'

function Ingredient({ ingredient }: any) {
  return (
    <div className="pb-[25rem] flex flex-col flex-grow w-2/3 h-full max-h-screen gap-4 overflow-scroll scrollbar-hide scroll-smooth snap-y snap-mandatory overscroll-contain">
      {ingredient.map((ingr: String, id: number) => (
        <div
          key={id}
          className="z-10 flex flex-row justify-between items-center px-4 py-2 bg-gray-100 rounded-xl shadow-sm snap-start snap-always"
        >
          <div className="font-sans font-bold">{ingr.split(':')[0]}</div>
          <div className="font-sans text-sm opacity-50">
            {ingr.split(':')[1]}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Ingredient
