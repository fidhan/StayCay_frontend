

const SearchFilters = () => {
  return (
    <div className="flex flex-row h-[64px] items-center justify-between border rounded-full">
        <div>
            <div className="cursor-pointer flex flex-row items-center justify-between">
                <div className="flex flex-col hover:bg-gray-100 justify-center rounded-full w-[250px] px-8 h-[64px]">
                    <p className="text-xs font-semibold">where</p>
                    <p className="text-sm">where to?</p>
                    </div>
                <div className="cursor-pointer flex flex-col hover:bg-gray-100 justify-center rounded-full w-[250px] px-8 h-[64px]">
                    <p className="text-xs font-semibold">check in</p>
                    <p className="text-sm">when?</p>
                    </div>
                <div className="cursor-pointer flex flex-col hover:bg-gray-100 justify-center rounded-full w-[250px] px-8 h-[64px]">
                    <p className="text-xs font-semibold">check out</p>
                    <p className="text-sm">when?</p>
                    </div>
                <div className="cursor-pointer flex flex-col hover:bg-gray-100 justify-center rounded-full w-[250px] px-8 h-[64px]">
                    <p className="text-xs font-semibold">who</p>
                    <p className="text-sm">add guests</p>
                    </div>
            </div>
        </div>
        <div className="p-2">
            <div className="p-4 bg-airbnb-dark rounded-full text-white hover:bg-airbnb transition cursor-pointer ">  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <path fill="#616161" d="M34.6 28.1H38.6V45.1H34.6z" transform="rotate(-45 36.586 36.586)" />
    <path fill="#616161" d="M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z" />
    <path fill="#37474F" d="M36.2 32.1H40.2V44.4H36.2z" transform="rotate(-45 38.24 38.24)" />
    <path fill="#64B5F6" d="M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z" />
    <path fill="#BBDEFB" d="M26.9 14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2 1.2-6.9 3.2c-0.4 0.4-0.3 1.1 0.1 1.4 0.4 0.4 1.1 0.3 1.4-0.1C16 13.9 17.9 13 20 13s4 0.9 5.4 2.5c0.2 0.2 0.5 0.4 0.8 0.4 0.2 0 0.5-0.1 0.6-0.2.3-0.4.3-1.1 0-1.5z" />
  </svg></div>
        </div>
    </div>
  )
}

export default SearchFilters
