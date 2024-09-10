import React, { useState } from "react";
import Modal from "react-modal";

const ProfileModal = ({ profile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSharing = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ url: document.location.href });
        alert("Content shared!");
      } catch (error) {
        console.error("Error sharing content:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(document.location.href);
        alert("URL copied to clipboard.");
      } catch (error) {
        console.error("Error copying to clipboard:", error);
      }
    }
  };
  const customStyles = {
    content: {
      padding: '0', 
      position: 'relative', 
      top: '50%',  
      left: '50%',  
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',  
    },
  };

  return (
    <div className="modal-container">
      <div className="small-modal" onClick={openModal}>
        <img alt="Mini" />
      </div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        {profile.map((item) => (
          <div className="mini-modal-container" key={item.id}>
             <div className="share" onClick={handleSharing}>
                Share
              </div>
            <div className="user-content">
             
              <div className="logo">
                <img src={item.dpURL} className="avatar" alt="User Avatar" />
              </div>
              <h1>{item.firstname}</h1>
              <h2>{item.lastname}</h2>
              <p>{item.title[0].value}</p>
              <p>{item.location.city + " " + item.location.country}</p>
              <button onClick={closeModal}>Close</button>
            </div>
            
          </div>
        ))}
       
      </Modal>
    </div>
  );
};

export default ProfileModal;
