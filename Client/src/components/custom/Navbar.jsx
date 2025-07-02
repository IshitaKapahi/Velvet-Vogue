import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ModeToggle } from './ModeToggle'
import CartDrawer from './CartDrawer'
import { User } from 'lucide-react'
import LogoutToggle from './LogoutToggle'

const Navbar = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(true);


    return (
        <nav className="flex justify-between items-center px-8 py-5 border-b dark:bg-zinc-980" >

            {/* icons  */}
            <div className="flex gap-2 justify-center">
                <ModeToggle />
                <CartDrawer />

                {isAuthenticated ? (
                    <LogoutToggle />
                ) : (
                    <Link to="/Login">
                        <User size={28} strokeWidth={1.3} className="text-grey-800 dark:text-white hover:scale-105 transition-all ease-in-out cursor-pointer" />
                    </Link>
                )

                }


            </div>
            <Link to={"/"} className="text-2xl font-bold" >
                Velvet Vogue
            </Link>
            <ul className="hidden sm:flex gap-2 text-xl">
                <Link to={"/"}> About </Link>
                <Link to={"/"}> Faqs </Link>
            </ul>


        </nav>
    )
}

export default Navbar