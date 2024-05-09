import Link from "next/link"
import Image from "next/image"
import SearchFilters from "./SearchFilters"
import UserNav from "./UserNav"
import AddPrpopertyButton from "./AddPrpopertyButton"

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10 ">
            <div className="max-w-[1500] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href="/">
                    <Image src="/one.jpeg" alt="logo" width={100} height={30}/>
                    </Link>
                    <SearchFilters/>
                    <div className="flex item-center space-x-6">
                        <AddPrpopertyButton/>
                        <UserNav/></div>
                </div>
            </div>
        
        </nav>
    )
}

export default Navbar