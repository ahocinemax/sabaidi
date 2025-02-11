import React, { useEffect, useState } from 'react';

const images = [
    "/public/Jap/sumo-kung-2.jpg",
    "/public/Jap/P6-1.jpg",
    "/public/Thai/mi-prat-1.jpg",
    "/public/Thai/chicken-dynamite-2.jpg",
    "/public/Jap/poke-crevette.jpg"
];

interface BackgroundSlideshowProps {
    path: string;
}

export const BackgroundSlideshow: React.FC<BackgroundSlideshowProps> = ({ path }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [scale, setScale] = useState(1);
    const [blur, setBlur] = useState(path === "/" ? 0 : 6); // Gestion du flou en fonction du path

    useEffect(() => {
        const interval = setInterval(() => {
            // Changement d'image et zoom
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setScale(1.3); // Zoom

            // Réinitialiser le zoom après un court délai
            setTimeout(() => {
                setScale(1);
            }, 500); // Durée du zoom (en ms)
        }, 4000); // Durée totale de chaque slide (4 secondes)

        return () => clearInterval(interval); // Nettoyer l'intervalle
    }, []);

    // Mettre à jour le flou lorsque le path change
    useEffect(() => {
        setBlur(path === "/" ? 0 : 6);
    }, [path]);

    return (
        <div
            className="background"
            style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                transform: `scale(${scale})`,
                filter: `blur(${blur}px)`, // Appliquer le flou dynamiquement
                transition: 'transform 0.5s ease, background-image 1s ease, filter 0.5s ease' // Animation fluide
            }}
        />
    );
};