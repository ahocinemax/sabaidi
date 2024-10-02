import React, { useState } from 'react';
import './BestSellers.css';
import { BestSellersProps } from '../interfaces';

const BestSellers: React.FC<BestSellersProps> = ({ items }) => {
	const [hearts, setHearts] = useState(Array(items.length).fill(false));

	const handleClick = (index: number) => {
		const newHearts = [...hearts];
		newHearts[index] = !newHearts[index];
		// if (typeof items[index].likes === 'undefined') {
			// items[index].likes = 0;
		// }
		// newHearts[index] ? items[index].likes += 1 : items[index].likes -= 1;
		setHearts(newHearts);
	};

	return (
	<div className="section best-sellers">
		<div className="menu-title-container">
			{/* <h2>Goûtez à nos best sellers</h2> */}
		</div>
			<div className="best-sellers-container">
				<div className="best-sellers-items">
					{items.map((item, index) => (
					<div key={index} className="best-sellers-item">
						<div className="image-container">
							<img className="best-seller-img" src={item.imageURL} alt={item.altText} />
							{item.isNew ? 
								<img className='new-best' src={"new.png"} alt='nouveauté' /> : null
							}
						</div>
						<div className="text-box">
							<h3>{item.title}</h3>
							<p>{item.description}</p>
							<h3>{item.price}€</h3>
							<div className="like-button">
								<div className="heart-bg" onClick={() => handleClick(index)}>
									<div className={`heart-icon ${hearts[index] ? 'liked' : ''}`} />
								</div>
							{/* <div className="likes-amount">Likes: 0</div> */}
						</div>
					</div>
				</div>
				))}
			</div>
		</div>
		<div className="arrow-down">
			<img src="down-arrow.svg" alt="down" />
		</div>
    </div>
  );
};

export default BestSellers;
