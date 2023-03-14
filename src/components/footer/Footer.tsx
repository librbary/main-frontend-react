import React from 'react'
import { Navbar } from 'react-bootstrap'

export const Footer = () => {
    return (
        <div>
            <Navbar fixed="bottom" />
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright: {' '}
                <a className='text-reset fw-bold' href='/'>
                    liBRAry.com
                </a>
            </div>
        </div>
    )
}