// Thai.tsx
import React, { useState } from "react";
import "./Thai.css";
import { SushiItemProps, SidebarProps } from "../interfaces";
import "../styles/fonts.css";
import Sidebar from "../Sidebar/Sidebar";
import { useSidebar } from "../Context/SidebarContext";
import { useCart } from "../Context/CartContext";
import { Helmet } from "react-helmet";
import { Tooltip } from "react-tooltip";
import thai from '../data/thai.json';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

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

interface ThaiItemProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  customize?: boolean;
  openModal: (image: string) => void;
}

const ThaiItem: React.FC<ThaiItemProps> = ({ title, price, description, imageUrl, customize, openModal }) => {
  const { addToCart } = useCart();
  const meat: string= "Personnalisez votre viande: choix en bas de page";

  return (
    <div className="menu-item">
      <img className="ItemImage" src={imageUrl} alt={title} onClick={() => openModal(imageUrl)} />
      <div className="ItemDetails">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="meal-info">
          <p className="itemPrice">{price}€</p>
          {customize === true ?
          <><span className="info-meat" data-tooltip-id="my-tooltip" data-tooltip-content={meat} data-tooltip-place="bottom">
            <img src="infobull.png" alt="Personnalisez votre viande" />
          </span>
          <Tooltip id="my-tooltip" className="infobulle"/></> : null}
        </div>
      </div>
      {/* <div className="add-container" onClick={() => addToCart(item)}>
        <img className="add-cart" src="Logo-plus.png" />
      </div> */}
    </div>
  );
};

export const Thai: React.FC  = () => {
  const { activeTitle, setActiveTitle } = useSidebar();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image: string) => {
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
        <title>Menu Thaï - Sabaidi</title>
      </Helmet>
      <h2>Menu Thaïlandais</h2>
      <Sidebar titles={submenus.titles} activeTitle={submenus.activeTitle} onTitleClick={handleTitleClick}/>
      <div className="thai-items">
        {activeSubmenu?.map((item, index) => (
          <ThaiItem key={index} {...item} openModal={openModal}/>
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
        <p><strong>Viande au choix : (option Wok disponible)</strong></p>

        <p>Poulet Mariné   -   Poulet crispy   -   Crevette   -   Crevette crispy   -   Boeuf   -   Veggie   -   Saumon crispy (supplément +1€)</p>
      </div>
    </div>
  );
};
