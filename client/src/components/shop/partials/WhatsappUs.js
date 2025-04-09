import React from 'react'
import whatsappIcon from '../../assets/whatsapp.png';
import './style.css';

function WhatsappUs() {
  return (
    <div className="absolute inset-0 flex h-full w-full items-end justify-start">
        <div className="whatsappUsImgWrapper fixed bottom-4 right-4">
            <a href="https://api.whatsapp.com/send?phone=+92 336 3136875" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp Us" className="w-16 h-16 rounded-full shadow-lg" />
            </a>
        </div>
    </div>
  )
}

export default WhatsappUs