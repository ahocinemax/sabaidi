// Thai.tsx
import React, { useState } from "react";
import "./Thai.css";
import { SushiItemProps, SidebarProps } from "../interfaces";
import "../styles/fonts.css";
import Sidebar from "../Sidebar/Sidebar";
import { useSidebar } from "../Context/SidebarContext";
import { Helmet } from "react-helmet";
import thai from '../data/thai.json';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import { Item } from "../Items/Items";

const style = {
    border: '0px',
    padding: '0px',
    margin: 'auto',
    opacity: '1',
    transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    display: 'flex',
    justifyContent: 'center',
    height: '100dvh',
    alignItems: 'center',
};

export const Thai: React.FC  = () => {
  const { activeTitle, setActiveTitle } = useSidebar();
  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  const [ selectedImage, setSelectedImage ] = useState("");

  const openModal = (image: string) => {
    if (image === "coming-soon.jpg") return;
    setSelectedImage(image);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const itemsList: Record<string, SushiItemProps[]> = {
    "Riz": thai.riz,
    "Nouilles": thai.nouilles,
  };

  const keys = Object.keys(itemsList);
  const firstKey = keys.length > 0 ? keys[0] : "";

  const activeSubmenu: SushiItemProps[] = itemsList[activeTitle] || itemsList[firstKey];

  const submenus: SidebarProps = {
    titles: Object.keys(itemsList),
    activeTitle: activeTitle,
    onTitleClick: (title: string) => setActiveTitle(title),
  };

  const handleTitleClick = (title: string) => {
    setActiveTitle(title);
  };

  return (
    <div className="container-thai">
      <Helmet>
        <title>Menu Thaï - Thaiko</title>
      </Helmet>
      <h2>Menu Thaïlandais</h2>
      <Sidebar titles={submenus.titles} activeTitle={submenus.activeTitle} onTitleClick={handleTitleClick}/>
      <div className="menu-items">
        {activeSubmenu?.map((item, index) => (
          <Item key={index} {...item} openModal={openModal}/>
        ))}
      </div>
      <Modal
        open={modalIsOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          '& .MuiBackdrop-root': {
            backdropFilter: 'blur(10px)',
            border: '0px',
            padding: '0px',
          }
        }}
      >
        <Fade in={modalIsOpen}>
          <Box sx={style} >
            <img src={selectedImage} alt="Enlarged view" style={{ maxWidth: "95%", maxHeight: "95%", borderRadius: '11px'}} />
            <span className="close-cart" onClick={closeModal}>
              <img 
                style={{
                  height: "3.5rem",
                  position: "fixed",
                  right: "45px",
                  top: "45px"
                }}
                src="cross.png"
                alt="close cross"
              />
            </span>
          </Box>
        </Fade>
      </Modal>
      <div className="meat-list">
        <p><strong>VIANDE AU CHOIX : (OPTION WOK DISPONIBLE)</strong></p>

        <p>Poulet Mariné   -   Poulet crispy   -   Crevette   -   Crevette crispy   -   Boeuf   -   Veggie   -   Saumon crispy (supplément +1€)</p>
      </div>
    </div>
  );
};
