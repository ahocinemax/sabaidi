import './BandeauSocial.css'
import React from 'react'
import { Link } from 'react-router-dom'

export const BandeauSocial = () => {
    return (
    <div className="social-proof">
        <Link className="proof-link" to="" target="_blank" rel="noreferrer">
            <div className="proof-item">
                <img src="starter.png" alt="Facebook"/>
            </div>
        </Link>
        <Link className="proof-link" to="" target="_blank" rel="noreferrer">
            <div className="proof-item">
                <img src="jap.png" alt="Facebook"/>
            </div>
        </Link>
        <Link className="proof-link" to="" target="_blank" rel="noreferrer">
            <div className="proof-item">
                <img src="thai.png" alt="Facebook"/>
            </div>
        </Link>
        <Link className="proof-link" to="" target="_blank" rel="noreferrer">
            <div className="proof-item">
                <img src="dessert.png" alt="Facebook"/>
            </div>
        </Link>
    </div>
    )
}