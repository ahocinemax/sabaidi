import React from 'react';
import './DynamicContainer.css';
import { DynamicContainerProps } from '../interfaces';

export const DynamicContainer = (props: DynamicContainerProps) => {
    const { children, className } = props;

    return (
        <div className={className}>
            
        </div>
    );
    }