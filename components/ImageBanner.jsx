'use client'

import { useEffect, useRef, useState } from "react"

export default function ImageBanner(){

    const [isLoaded , setIsLoaded] = useState(false)
    const imgRef = useRef()
    
    useEffect(()=>{
        if(imgRef.current.complete){
            setIsLoaded(true)
        }
    },[])

    return(
        <div className="banner-img">
            {/* Low-res / High-res banner images */}
            <img className="low-res-img" src="low_res/banner.jpeg" alt="banner-low-res" />
            <img ref={imgRef} className="high-res-img" src="high_res/banner.png" alt="banner-high-res" style={{opacity: isLoaded ? 1 : 0}} onLoad={() =>{
                setIsLoaded(true)
            }}/>
            
            {/* CTA buttons */}
            <div className="cta-btns-container">
                <div>
                    <div>
                        <h3>Discover</h3>
                        <h1>Khmer Temple Art</h1>
                    </div>
                    <div>
                        <button>Shop Paintings</button>
                        <button>Shop Stickers</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
