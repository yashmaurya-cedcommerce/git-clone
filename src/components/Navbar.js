import React from 'react'

export default function Navbar() {
    return (
        <div className='navbarContainer'>

            <div className='firstPartNav'>
                <p className='navLogo'>
                    <i class="fa-brands fa-github"></i>
                </p>
                <input className='profileSearchBar' placeholder='Search or jump to...' />
            </div>

            <div className='secondPartNav'>
                <p className='secondNavOptions'>Pull requests</p>
                <p className='secondNavOptions'>Issues</p>
                <p className='secondNavOptions'>Marketplace</p>
                <p className='secondNavOptions'>Explore</p>
            </div>

            <div className='thirdPartNav'>
                <p className='thirdNavOptions'>
                    <i class="fa-regular fa-bell"></i>
                </p>
                <p className='thirdNavOptions'>
                    <i class="fa-solid fa-plus"></i>
                </p>
                <p className='thirdNavOptions'>
                    <i class="fa-solid fa-user"></i>
                </p>
            </div>

        </div>
    )
}
