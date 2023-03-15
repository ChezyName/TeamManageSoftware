import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { WebviewWindow } from '@tauri-apps/api/window'
import "./App.css";

import { Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faAdd } from "@fortawesome/free-solid-svg-icons";

interface CreateNewProps {
  onClickFunc: (value:string) => void;
}

function CreateNew({onClickFunc}:CreateNewProps) {
  const [Name, setName] = useState("");

  return (
    <div className="root" style={{display: 'flex', position: 'fixed', backgroundColor: 'rgba(25,25,25,0.95)'}}>
      <div style={{width: '80%', height: '48px', marginLeft: '10%', marginTop: '5%', display: 'flex'}}>
      <Button style={{flex: '1', borderRadius: '15px', marginRight: '5px'}} onClick={() => {
          onClickFunc("");
        }}><FontAwesomeIcon icon={faX}/></Button>
        
        <input type="string" value={Name} onChange={(e) => {setName(e.target.value)}} placeholder="ENTER NAME" style={{width: '90%', height: '100%', borderRadius: '15px'}}/>
        
        <Button style={{flex: '1', borderRadius: '15px', marginLeft: '5px'}} onClick={() => {
          onClickFunc(Name);
        }}><FontAwesomeIcon icon={faAdd}/></Button>
      </div>
    </div>
  );
}

export default CreateNew;
