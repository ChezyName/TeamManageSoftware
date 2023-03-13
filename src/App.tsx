import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

//FONT AWESOME AND REACT BOOTSTRAP
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faAdd } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="root">
      <div className="TopBar" style={{width: '100%', height: '42px',display: 'flex' , backgroundColor: 'var(--foreground)', borderBottom: '0px solid var(--border)'}}>
        <Button variant="danger"><FontAwesomeIcon icon={faRotateLeft}/> RESET</Button>
        <span style={{margin: 'auto',flex: '1', width: '60%', textAlign: 'center', color: 'white', fontSize: '1.25rem', fontWeight: "bold",userSelect: 'none'}}>Team Manage Software</span>
        <Button variant="primary" style={{marginLeft: 'auto'}}>CREATE NEW <FontAwesomeIcon icon={faAdd}/> </Button>
      </div>
    </div>
  );
}

export default App;
