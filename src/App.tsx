import { useState, useEffect } from "react";
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
import { faRotateLeft, faAdd, faPencil } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Edit from "./Edit";

export interface DataType {
  name: string;
  ids: string[];
  works: boolean[];
}

function App() {
  const [isCreate, setCreate] = useState(false);
  const [data,setData] = useState<DataType[]>([]);

  const [Index,setIndex] = useState(0)
  const [isEdit,setEdit] = useState(false)

  const saveFileLoc = "save.json";

  async function Create(){
    let dir = await exists("",{ dir: BaseDirectory.AppData});
    if(!dir) await createDir("",{ dir: BaseDirectory.AppData})


    let json = await exists(saveFileLoc,{ dir: BaseDirectory.AppData});
    if(!json) {
      await writeTextFile(saveFileLoc, '',{ dir: BaseDirectory.AppData});
    }
    else{
      let cdata = await readTextFile(saveFileLoc,{ dir: BaseDirectory.AppData});
      setData(JSON.parse(cdata));
    }
  }

  function Save(){
    writeTextFile(saveFileLoc,JSON.stringify(data),{ dir: BaseDirectory.AppData})
  }

  useEffect(() => {
    Create();
  }, [])
  

  return (
    <div className="root">
      {isCreate ? <CreateNew onClickFunc={(value:string) => {
        console.log("Creating {"+value+"}");
        if(value != "") {
          for(var i = 0; i < data.length; i++){
            let d = data[i];
            if(d.name == value){
              return;
            }
          }

          let newData = data;
          newData.push({name: value, ids: [], works: []});
          setData(newData);
        }
        Save();
        setCreate(false);
      }}/> : ""}
      {
        isEdit ? <Edit DefaultData={data[Index]} Index={Index} onEdit={(value:DataType,index:number) => {

        }} onClose={() => {setEdit(false)}}/> : ""
      }
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
            <th><FontAwesomeIcon icon={faPencil}/> Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((dta:DataType) => {
              let name = dta.name;
              let singles:any = [];
              let percent_works = 0;
              let index = data.indexOf(dta);
              for(var i = 0; i < 10; i++){
                let id = dta.ids[i];
                let works = dta.works[i];
                if(works) percent_works++;

                singles.push(
                  <th style={{color: works ? "green" : 'red'}}>{id == null ? "N/A" : id}</th>
                )
              }
              return <tr>
                <th>{name}</th>
                {
                  singles
                }
                <th>{percent_works}%</th>
                <th>{percent_works}%</th>
                <button onClick={() => {
                  //console.log("On Clicked " + index);
                  setEdit(true);
                  setIndex(index);
                }} className="editButton" style={{border: '0',width: '100%'}}><FontAwesomeIcon style={{color: 'white !important'}} icon={faPencil}/></button>
              </tr>
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
