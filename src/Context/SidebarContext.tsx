// SidebarContext.tsx

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { SidebarContextProps } from '../interfaces';

const SidebarContext = createContext<SidebarContextProps>({
    activeTitle: '',
    setActiveTitle: () => {},
});

interface SidebarProviderProps {
    children: ReactNode;
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [activeTitle, setActiveTitle] = useState('');

  return (
    <SidebarContext.Provider value={{ activeTitle, setActiveTitle }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
