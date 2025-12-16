'use client'

import Link from "next/link"

export default function Cart (){
    return(
        <div>
            <Link href={'/cart'}> 
                <i className="fa-solid fa-cart-flatbed-suitcase"></i>
            </Link>
        </div>
    )
}