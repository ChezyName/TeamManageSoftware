import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

//FONT AWESOME AND REACT BOOTSTRAP
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="root">
      <div className="TopBar" style={{width: '100%', height: '42px',display: 'flex' , backgroundColor: 'var(--foreground)'}}>
        <Button variant="danger"><FontAwesomeIcon icon={faRotateLeft}/> RESET</Button>
      </div>
    </div>
  );
}

export default App;
