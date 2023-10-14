import React from "react";
import { createPortal } from "react-dom";
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  backgroundColor: "rgb(248,250,255)",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
  height: "90%",
  width: "90%",
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
        <button
          className="btn btn-danger fs-4"
          style={{ marginLeft: "90%", marginTop: "-35px" }}
          onClick={props.onClose}
        >
          X
        </button>
        {/* {children} */}
      </div>
    </>,
    document.getElementById("profile-root")
  );
}

export default ModalForm;
