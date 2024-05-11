import React from "react";
import "./App.css";
import StarRating from "./components/StarRating";
// import Dialog from "./components/Dialog";
// import { Button } from "antd";

function App() {
  // const [isShowDialog, setIsShowDialog] = React.useState(false);
  return (
    <div className="App">
      <div className="container">
        <StarRating />
        {/* <Dialog
          visible={isShowDialog}
          onCancel={() => {
            setIsShowDialog(false);
          }}
        /> */}
        <div className="button-wrapper">
          {/* <Button
            type="primary"
            onClick={() => {
              setIsShowDialog(true);
            }}
          >
            open diaglo
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
