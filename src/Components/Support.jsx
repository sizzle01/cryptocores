import React, { useState } from "react";
import { RightOutlined, StarFilled, CloseOutlined } from "@ant-design/icons";
import Modal from "react-modal";
import AllTabs from "./form/AllTabs";
import { Data } from "../Data";

Modal.setAppElement("#root");
const Support = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div className="connect-info">BEST WAY TO CONNECT YOUR WALLET</div>
      <div className="wallet-card-wrapper">
        {Data.map((item, index) => {
          return (
            <div key={index} className="wallet-card">
              <div className="card-image-container">
                <img
                  className="card-image"
                  src={item.walletIcon}
                  alt={"support"}
                />
              </div>
              <div className="">
                <h2>{item.walletName}</h2>
                <p>
                  connect <RightOutlined /> <RightOutlined /> <RightOutlined />
                </p>
                <p>
                  <StarFilled style={{ color: "orange" }} />
                  <StarFilled style={{ color: "orange" }} />
                  <StarFilled style={{ color: "orange" }} />
                  <StarFilled style={{ color: "orange" }} />
                  <StarFilled style={{ color: "orange" }} />
                </p>
              </div>
              <div
                className="card-btn"
                onClick={(index) => {
                  setModal(true);
                }}
              >
                <button className="card-connect">connect</button>
              </div>
              <Modal
              className='modal'
            key={index}
          isOpen={modal}
          onRequestClose={() => {
            setModal(false);
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
          <div className="modal-container">
            <h1>{item.desc} </h1>
            <p>Connect {item.walletName} </p>
            <div className="">
              <AllTabs />
            </div>
  
            <div className="close-modal" onClick={(index)=>{
              setModal(!modal)

            }}>
              <button className="close-modal"><CloseOutlined /></button>
            </div>
          </div>
        </Modal>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Support;
