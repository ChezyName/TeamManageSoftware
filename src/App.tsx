import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { WebviewWindow } from '@tauri-apps/api/window'
import { BaseDirectory,writeTextFile,exists, createDir, readTextFile} from '@tauri-apps/api/fs';
import { appDataDir } from '@tauri-apps/api/path';
import "./App.css";

//FONT AWESOME AND REACT BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import CreateNew from "./CreateNew";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faAdd } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isCreate, setCreate] = useState(false);
  const [data,setData] = useState("");

  async function Create(){
    const saveFileLoc = "save.json";
    let dir = await exists("",{ dir: BaseDirectory.AppData});
    setData(dir ? "TRUE" : "FALSE");
    if(!dir) await createDir("",{ dir: BaseDirectory.AppData})


    let json = await exists(saveFileLoc,{ dir: BaseDirectory.AppData});
    if(!json) {
      await writeTextFile(saveFileLoc, '',{ dir: BaseDirectory.AppData});
    }
    else{
      let data = await readTextFile(saveFileLoc,{ dir: BaseDirectory.AppData});
    }
  }

  Create();

  return (
    <div className="root">
      {isCreate ? <CreateNew onClickFunc={(value:string) => {
        console.log("Creating {"+value+"}");
        if(value != "") {
          
        }
        Create();
        setCreate(false);
      }}/> : ""}
      <div className="TopBar" style={{width: '100%', height: '42px',display: 'flex' , backgroundColor: 'var(--foreground)', borderBottom: '0px solid var(--border)'}}>
        <Button variant="danger"><FontAwesomeIcon icon={faRotateLeft}/> RESET</Button>
        <span style={{margin: 'auto',flex: '1', width: '60%', textAlign: 'center', color: 'white', fontSize: '1.25rem', fontWeight: "bold",userSelect: 'none'}}>Team Manage Software</span>
        <Button variant="primary" style={{marginLeft: 'auto'}} onClick={() => {
          //invoke('open_createnew')
          setCreate(true);
        }}>CREATE NEW <FontAwesomeIcon icon={faAdd}/> </Button>
      </div>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th colSpan={10}>Parts Number</th>
            <th>% Completed</th>
            <th>% Failed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data}</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>0%</td>
            <td>0%</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
