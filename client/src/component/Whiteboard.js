import "./App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen, faFont, faStickyNote,  faTrash, faCheck, faUndo, faRedo, faMousePointer, faHandPaper, faPencilAlt, faSquare, faCircle, faEraser,  faShareSquare, faInfoCircle, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Whiteboard() {





  
  return (
    <div>
      <div id="whiteboardContainer"></div>
      <div id="toolbar" style={{ position: "absolute", top: "10px", left: "10px" }}>
        <div className="btn-group">
          <button
            id="whiteboardLockBtn"
            style={{ backgroundColor: "orange" }}
            title="View and Write"
            type="button"
          >
            <FontAwesomeIcon icon={faLock} />
          </button>
          <button id="whiteboardUnlockBtn" title="View Only" type="button">
            <FontAwesomeIcon icon={faLockOpen} />
          </button>
        </div>
        <div className="btn-group whiteboard-edit-group">
          <button id="whiteboardTrashBtn" title="Clear the whiteboard" type="button">
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button
            style={{ display: "none" }}
            id="whiteboardTrashBtnConfirm"
            title="Confirm clear..."
            type="button"
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button id="whiteboardUndoBtn" title="Undo your last step" type="button">
            <FontAwesomeIcon icon={faUndo} />
          </button>
          <button id="whiteboardRedoBtn" title="Redo your last undo" type="button">
            <FontAwesomeIcon icon={faRedo} />
          </button>
        </div>

        <div className="btn-group whiteboard-edit-group">
          <button tool="mouse" title="Take the mouse" type="button" className="whiteboard-tool">
            <FontAwesomeIcon icon={faMousePointer} />
          </button>
          <button
            tool="hand"
            title="pan the whiteboard"
            type="button"
            className="whiteboard-tool"
          >
            <FontAwesomeIcon icon={faHandPaper} />
          </button>

          <button
            style={{ paddingBottom: "11px" }}
            tool="recSelect"
            title="Select an area"
            type="button"
            className="whiteboard-tool"
          ></button>
          <button
            tool="pen"
            title="Take the pen"
            type="button"
            className="whiteboard-tool active"
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
          <button
            style={{ paddingBottom: "8px", paddingTop: "6px" }}
            tool="line"
            title="draw a line"
            type="button"
            className="whiteboard-tool"
          >
            ╱
          </button>
          <button tool="rect" title="draw a rectangle" type="button" className="whiteboard-tool">
            <FontAwesomeIcon icon={faSquare} />
          </button>
          <button tool="circle" title="draw a circle" type="button" className="whiteboard-tool">
            <FontAwesomeIcon icon={faCircle} />
          </button>
          <button tool="eraser" title="take the eraser" type="button" className="whiteboard-tool">
            <FontAwesomeIcon icon={faEraser} />
          </button>
        </div>

        <div className="btn-group whiteboard-edit-group">
          <button style={{ width: "190px", cursor: "default" }}>
            <div
              className="activeToolIcon"
              style={{ position: "absolute", top: "2px", left: "2px", fontSize: "0.6em" }}
            >
              <FontAwesomeIcon icon={faPencilAlt} />
            </div>

            <input
              title="Thickness"
              id="whiteboardThicknessSlider"
              style={{ position: "absolute", left: "9px", width: "130px", top: "16px" }}
              type="range"
              min="1"
              max="50"
              value="3"
            />
            <div
              id="whiteboardColorpicker"
              style={{
                position: "absolute",
                left: "155px",
                top: "10px",
                width: "26px",
                height: "23px",
                borderRadius: "3px",
                border: "1px solid darkgrey",
              }}
              data-color="#000000"
            ></div>
          </button>
        </div>

        <div className="btn-group whiteboard-edit-group">
          <button tool="text" title="write text" type="button" className="whiteboard-tool">
            <FontAwesomeIcon icon={faFont} />
          </button>
          <button
            tool="stickynote"
            title="place a sticky note"
            type="button"
            className="whiteboard-tool"
          >
            <FontAwesomeIcon icon={faStickyNote} />
          </button>
          <button
            id="textboxBackgroundColorPickerBtn"
            style={{ display: "none" }}
            title="text background-color"
          ></button>
          <button id="shareWhiteboardBtn" title="share whiteboard" type="button">
            <FontAwesomeIcon icon={faShareSquare} />
          </button>

          <button id="displayWhiteboardInfoBtn" title="Show whiteboard info" type="button">
            <FontAwesomeIcon icon={faInfoCircle} />
          </button>
        </div>

        <div className="btn-group minGroup">
          <button
            style={{ width: "100%", padding: "11px 11px" }}
            id="minMaxBtn"
            title="hide buttons"
            type="button"
          >
            <FontAwesomeIcon
              id="minBtn"
              style={{ position: "relative", left: "-5px" }}
              icon={faAngleLeft}
            />
            <FontAwesomeIcon
              id="maxBtn"
              style={{ position: "relative", left: "-5px", display: "none" }}
              icon={faAngleRight}
            />
          </button>
        </div>
      </div>
      <div id="whiteboardInfoContainer">
        <p>
          <b>Whiteboard information:</b>
        </p>
        <p>
          # connected users: <i id="connectedUsersCount">0</i>
        </p>
      </div>
      <div id="shareWhiteboardDialog" className="displayNone">
        <div className="shareWhiteboardDialogContent">
          <button className="shareWhiteboardDialogItem" id="shareWhiteboardDialogCopyReadOnlyLink">
            <FontAwesomeIcon icon={faLock} />&nbsp;Share read-only link
          </button>
          <button
            className="shareWhiteboardDialogItem displayNone"
            id="shareWhiteboardDialogCopyReadWriteLink"
          >
            <FontAwesomeIcon icon={faLockOpen} />&nbsp;Share read/write link
          </button>
          <button className="shareWhiteboardDialogItem" id="shareWhiteboardDialogGoBack">
            <b>Go back to the whiteboard</b>
          </button>
          <p
            className="shareWhiteboardDialogItem displayNone"
            id="shareWhiteboardDialogMessage"
          ></p>
        </div>
      </div>
    </div>
  );
}

export default Whiteboard;
