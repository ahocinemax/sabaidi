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
                <li key={idx}>
                  <input type="checkbox" />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
