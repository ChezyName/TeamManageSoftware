import React, {useEffect, useState} from 'react'
import { DataType } from './App';
import { Button, Container, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

interface CreateNewProps {
    onEdit: (value:DataType,index:number) => void;
    onClose: () => void;
    DefaultData: DataType;
    Index: number;
}

const Edit = ({onEdit,DefaultData,Index,onClose}:CreateNewProps) => {
    const [A,setA] = useState("");
    const [AB,setAB] = useState(false);

    const [B,setB] = useState("");
    const [BB,setBB] = useState(false);

    const [C,setC] = useState("");
    const [CB,setCB] = useState(false);

    const [D,setD] = useState("");
    const [DB,setDB] = useState(false);

    const [E,setE] = useState("");
    const [EB,setEB] = useState(false);

    const [F,setF] = useState("");
    const [FB,setFB] = useState(false);

    const [G,setG] = useState("");
    const [GB,setGB] = useState(false);

    const [H,setH] = useState("");
    const [HB,setHB] = useState(false);

    const [I,setI] = useState("");
    const [IB,setIB] = useState(false);

    const [J,setJ] = useState("");
    const [JB,setJB] = useState(false);

    useEffect(() => {
        setA(DefaultData.ids[0]);
        setAB(DefaultData.works[0]);

        setB(DefaultData.ids[1]);
        setBB(DefaultData.works[1]);

        setC(DefaultData.ids[2]);
        setCB(DefaultData.works[2]);

        setD(DefaultData.ids[3]);
        setDB(DefaultData.works[3]);

        setE(DefaultData.ids[4]);
        setEB(DefaultData.works[4]);

        setF(DefaultData.ids[5]);
        setFB(DefaultData.works[5]);

        setG(DefaultData.ids[6]);
        setGB(DefaultData.works[6]);

        setH(DefaultData.ids[7]);
        setHB(DefaultData.works[7]);

        setI(DefaultData.ids[8]);
        setIB(DefaultData.works[8]);

        setJ(DefaultData.ids[9]);
        setJB(DefaultData.works[9]);
    }, [DefaultData])
    

    return (
    <div className="root" style={{display: 'block', position: 'fixed', backgroundColor: 'rgba(25,25,25,0.95)'}}>
        <Button onClick={() => {onClose()}}><FontAwesomeIcon icon={faX} /></Button>
        <div style={{height: '5%', color: 'white', width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: '3rem', textDecoration: 'underline', userSelect: 'none'}}>{DefaultData.name}</div>
        <Container style={{marginTop: '3%'}}>
            <Row style={{color: 'white', width: '100%', height: 'auto', padding: '0', margin: '0'}}> <input type="string" style={{borderRadius: '12px', width: '85%'}} value={A}/> <input type='checkbox' checked={AB} style={{width: '15%'}}/> </Row>
        </Container>
    </div>
    )
}

export default Edit