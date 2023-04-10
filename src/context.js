import React, { useState, createContext, Dispatch, SetStateAction } from 'react';
import QRCode from "qrcode";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [showQr, setShowQr] = useState(false);
    const [modal, setModal] = useState(false);
    const [src, setSrc] = useState("");

    const generate = () => {
      QRCode.toDataURL("https://github.com").then(setSrc);
    };
  
    return <AppContext.Provider value={{showQr,setShowQr,modal, setModal,src, setSrc, generate}}>
      {children}
      </AppContext.Provider>;
  };