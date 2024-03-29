import { useState, useEffect, useRef } from "react";
import "./App.css";

import jsPDF from 'jspdf';
import size from 'window-size';

//FONT AWESOME AND REACT BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import CreateNew from "./CreateNew";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faAdd, faPencil, faDownload } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Edit from "./Edit";
import html2canvas from "html2canvas";

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

  const downloadable = useRef(null);

  const saveFileLoc = "save.json";

  async function Create(){
    /*
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
    */

    let cData:any = localStorage.getItem("data");
    console.log(cData);
    if(cData == "" || cData == null || cData == undefined){
      setData([]);
    }
    else setData(JSON.parse(cData));
  }

  function Save(){
    localStorage.setItem('data',JSON.stringify(data));
  }

  useEffect(() => {
    Create();
  }, [])
  

  return (
    <div className="root">
      {/**<AreYouSure/>*/}
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
          Save();
        }
        Save();
        setCreate(false);
      }}/> : ""}
      {
        isEdit ? <Edit DefaultData={data[Index]} Index={Index} onEdit={(value:DataType,index:number) => {
          let cData = data;
          cData[index] = value;
          setData(cData);
          Save();
          setEdit(false);
        }} onClose={() => {setEdit(false)}}/> : ""
      }
      <div className="TopBar" style={{width: '100%', height: '42px',display: 'flex' , backgroundColor: 'var(--foreground)', borderBottom: '0px solid var(--border)'}}>
        <Button variant="danger" onClick={() => {
          //writeTextFile(saveFileLoc,'',{ dir: BaseDirectory.AppData})
          setData([]);
          Save();
        }}><FontAwesomeIcon icon={faRotateLeft}/> RESET</Button>
        <span style={{margin: 'auto',flex: '1', width: '60%', textAlign: 'center', color: 'white', fontSize: '1.25rem', fontWeight: "bold",userSelect: 'none'}}>Team Manage Software</span>
        <Button variant="primary" style={{marginLeft: 'auto'}} onClick={() => {
          //invoke('open_createnew')
          setCreate(true);
        }}>CREATE NEW <FontAwesomeIcon icon={faAdd}/> </Button>
        <Button variant="primary" style={{marginLeft: '5px'}} onClick={async () => {
          if(downloadable != null){
            var w = Math.max(
              document.documentElement["clientWidth"],
              document.body["scrollWidth"],
              document.documentElement["scrollWidth"],
              document.body["offsetWidth"],
              document.documentElement["offsetWidth"]
            );

            var h = Math.max(
              document.documentElement["clientHeight"],
              document.body["scrollHeight"],
              document.documentElement["scrollHeight"],
              document.body["offsetHeight"],
              document.documentElement["offsetHeight"]
            );

            const element:any = downloadable.current;

            const elementw = element.clientWidth;
            const elementh = element.clientHeight;

            const ScaleW = w / elementw;
            const ScaleH = h / elementh;

            const finalW = elementw * ScaleW;
            const finalH = elementh * ScaleH;

            const quality = 1 // Higher the better but larger file
            html2canvas(downloadable.current || document.createElement('div'),
                { scale: quality }
            ).then(canvas => {
                const pdf = new jsPDF('l', 'px', [elementw,elementh]);
                pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, elementw, elementh);
                pdf.save("");
            });
          }
        }}><FontAwesomeIcon icon={faDownload}/> </Button>
      </div>

      <Table striped bordered hover variant="dark" ref={downloadable}>
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
              percent_works = Math.round((percent_works / 10) * 100)
              const percent_failed = 100 - percent_works;
              return <tr>
                <th>{name}</th>
                {
                  singles
                }
                <th>{percent_works}%</th>
                <th>{percent_failed}%</th>
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
