import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
// import {gambar} from '../img/pika.png'
function Navbar() {
    return (
        <>
            <div className='navbar'>
                <div className='navbar-container container'>
                  <Link to='/'
                    style={{
                      color:'#ffc75e',
                      textDecoration:'none'
                    }}
                  >                    
                    <h1 className="navbar-logo" align='center'>
                        Pokemon x React
                    </h1>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar