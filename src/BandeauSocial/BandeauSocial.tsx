import './BandeauSocial.css'
import React from 'react'
import { Link } from 'react-router-dom'

export const BandeauSocial = () => {
    return (
    <div className="social-proof">
        <Link className="proof-link" to="" target="_blank" rel="noreferrer">
            <div className="proof-item">
                <img src="couverts.jpg" alt="Facebook"/>
                <p>FRAÎCHEUR GARANTIE</p>
            </div>
        </Link>
        <Link className="proof-link" to="" target="_blank" rel="noreferrer">
            <div className="proof-item">
                <img src="couverts.jpg" alt="Facebook"/>
                <p>LIVRAISON GRATUITE*</p>
            </div>
        </Link>
        <Link className="proof-link" to="" target="_blank" rel="noreferrer">
            <div className="proof-item">
                <img src="couverts.jpg" alt="Facebook"/>
                <p>PAIEMENT 100% SÉCURISÉ</p>
            </div>
        </Link>
        <Link className="proof-link" to="" target="_blank" rel="noreferrer">
            <div className="proof-item">
                <img src="couverts.jpg" alt="Facebook"/>
                <p>OUVERT JUSQU'À 01H</p>
            </div>
        </Link>
    </div>
    )
}