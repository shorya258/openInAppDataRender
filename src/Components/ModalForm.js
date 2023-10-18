import React from "react";
import { createPortal } from "react-dom";
import AddProfileForm from "./AddProfileForm";
import { isMobile } from "react-device-detect";
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  backgroundColor: "rgb(248,250,255)",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
  width : isMobile ? "300px" : "500px",
  borderRadius : '16px',
};
const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgb(0,0,0,0.7)",
  zIndex: 1000,
};
function ModalForm(props) {
  return createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <AddProfileForm onClose={props.onClose} />
      </div>
    </>,
    document.getElementById("profile-root")
  );
}

export default ModalForm;
