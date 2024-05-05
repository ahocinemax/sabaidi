import React from 'react';
import { SushiItemProps } from '../interfaces';
import { Helmet } from 'react-helmet';
import Sidebar from '../Sidebar/Sidebar';
import { SidebarProps } from '../interfaces';
import { useSidebar } from '../Context/SidebarContext';
import desserts from '../data/desserts.json';
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

export const Dessert = () => {
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

  const itemsList: { [key: string]: SushiItemProps[] } = {
    "Classiques": desserts.classiques,
    "Asiatiques": desserts.asiat,
    "Boissons": desserts.boissons,
    "Fruits frais": desserts.fruits,
  };
  const { activeTitle, setActiveTitle } = useSidebar();

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
    <div className='container-thai'>
      <Helmet>
        <title>Desserts - Sabaidi</title>
      </Helmet>

      <h2>Desserts</h2>
      <Sidebar titles={submenus.titles} activeTitle={submenus.activeTitle} onTitleClick={handleTitleClick}/>
      <div className='thai-items'>
        {activeSubmenu?.map((item, index) => (
          <div key={index} className="menu-item">
            <img
              className="ItemImage"
              src={item.imageUrl}
              alt={item.title}
              onClick={() => openModal(item.imageUrl)}/>
              <div className="ItemDetails">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>{item.price}€</p>
              </div>
          </div>
        ))}
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
}