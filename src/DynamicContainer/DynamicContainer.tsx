import React from 'react';
import './DynamicContainer.css';
import { DynamicContainerProps } from '../interfaces';

export const DynamicContainer = (parent: DynamicContainerProps) => {
  const { children, className, props } = parent;

  return (
    <div className={className}>
      {props?.map((cat, index) => (
        <div className="category" key={index}>
          <h1>{cat.name}</h1>
          <div className='bullet-point'>
            <ul>
              {cat.items.map((item, idx) => (
              <div className='line'>
                <li key={idx}>{item.name}</li>
                {item.price && <p key={idx}>{item.price}</p>}
              </div>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
