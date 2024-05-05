import React from "react";
import "./Sushi.css";
import "../styles/fonts.css";
import { SushiItemProps, SidebarProps, ComposeItemProps } from "../interfaces";
import Sidebar from "../Sidebar/Sidebar";
import { useSidebar } from "../Context/SidebarContext";
import { useCart } from "../Context/CartContext";
import { Helmet } from "react-helmet";
import { DynamicContainer } from "../DynamicContainer/DynamicContainer";
import MenuItem from "../data/jap.json";
import composeRoll from "../data/composeRoll.json"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

interface ModalProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  customize?: boolean;
  openModal: (image: string) => void;
}

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

export const Sushi = () => {
  const { activeTitle, setActiveTitle } = useSidebar();
  const { addToCart } = useCart();

  const itemsList: Record<string, SushiItemProps[]> = {
    "Signatures": MenuItem.signatures,
    "Plateaux": MenuItem.plateaux,
    // "Compose ton roll": [],
    "Poké": MenuItem.poke,
    "Yakitori": MenuItem.yakitori,
    "Formules": MenuItem.formules,
    "Tartare": MenuItem.tartare,
    "Chirachi": MenuItem.chirachi,
    "Sashimi": MenuItem.sashimi,
    "Sushis": MenuItem.sushi,
    "Tacos": MenuItem.tacos,
  };
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState("");

  const openModal = (image: string) => {
    if (image === "coming-soon.jpg") return;
    setSelectedImage(image);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }
  const composeProps: ComposeItemProps[] = composeRoll;

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
    <div className="menu-section">
      <Helmet>
        <title>Menu Jap' - Sabaidi</title>
      </Helmet>
      <h2>Menu Japonais</h2>
      <Sidebar titles={submenus.titles} activeTitle={submenus.activeTitle} onTitleClick={handleTitleClick}/>
      <div className="menu-items">
        { activeTitle === "Compose ton roll" && <div className="compose-details">
          <h1>Compose ton roll ! </h1>
        </div>}

        {activeTitle === "Compose ton roll" ?
          <DynamicContainer className="compose-ton-roll-container" props={composeProps}/>
            : 
          ( activeSubmenu?.map((item, index) => (
            <div className="menu-item" key={index}>
              <img className="item-image" src={item.imageUrl} alt="Sushi" onClick={() => openModal(item.imageUrl)} />
              <div className="menu-item-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.price}€</p>
              </div>
              {/* <div className="add-container" onClick={() => addToCart(item)}>
                <img className="add-cart" src="Logo-plus.png" />
              </div> */}
            </div>
          )))
        }
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
      </div>
    </div>
  );
};
