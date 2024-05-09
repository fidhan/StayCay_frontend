import Image from "next/image"


const PropertListItem = () => {
  return (
    <div className="cursor:pointer px-3">
      <div className="overflow-hidden rounded-xl aspect-square relative ">
        <Image fill
                    src='/beach_1.jpg'
                    sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
                    className="hover:scale-110 object-cover transition h-full w-full"
                    alt="Beach house" />

      </div>
      <div className="mt-2">
        <p className="text-lg font-semibold">property name</p>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500"><strong>200SAR</strong> per day</p>
      </div>
    </div>
  )
}

export default PropertListItem
