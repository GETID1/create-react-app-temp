import React from "react";
import "./App.css";
import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";
import reactLogo from "./assets/images/logo.png";

function App() {
  const [isShowDialog, setIsShowDialog] = React.useState(false);
  return (
    <div className="App">
      <div className="container">
        <StarRating />
        <Dialog
          visible={isShowDialog}
          onCancel={() => {
            setIsShowDialog(false);
          }}
        >
          <div className="dialog-children">
            <img src={reactLogo} alt="" />
            <button
              onClick={() => {
                setIsShowDialog(false);
              }}
            >
              Close Dialog
            </button>
          </div>
        </Dialog>
        <div className="button-wrapper">
          <button
            onClick={() => {
              setIsShowDialog(true);
            }}
          >
            open diaglo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
