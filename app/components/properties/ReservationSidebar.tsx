import React from 'react'

const ReservationSidebar = () => {
  return (
    <aside className='mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl'>
    <h2 className="mb-5 text-2xl">300 per day</h2>
    <div className="mb-6 p-3 border border-gray-400 rounded-xl">
    <label className="mb-2 block font-bold text-xs">Guests</label>
        <select className='w-full -ml-1 text-sm'>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
        </select>
        </div>
        <div className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl cursor-pointer">book</div>
        <div className="mb-4 flex justify-between align-center">
            <p>300*4 nights</p>
            <p>1200</p>
        </div>
      <div className="mb-4 flex justify-between align-center">django fee
      <p>40</p>
      </div>
      <hr />

<div className="mt-4 flex justify-between align-center font-bold">
    <p>Total</p>

    <p>$1240</p>
</div>
    </aside>
  )
}

export default ReservationSidebar
