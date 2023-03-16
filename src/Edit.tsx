import React, {useEffect, useState} from 'react'
import { DataType } from './App';
import { Button, Container, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCheck } from "@fortawesome/free-solid-svg-icons";

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
    
    function onFinish(){
        let newData:DataType = {
            name: DefaultData.name,
            ids: [
                A,B,C,D,E,F,G,H,I,J
            ],
            works: [
                AB,BB,CB,DB,EB,FB,GB,HB,IB,JB
            ]
        }
        onEdit(newData,Index);
    }

    return (
    <div className="root" style={{display: 'block', position: 'fixed', backgroundColor: 'rgba(25,25,25,0.95)'}}>
        <div style={{display: 'flex'}}>
            <Button onClick={() => {onClose()}}><FontAwesomeIcon icon={faX} /></Button>
            <Button onClick={() => {onFinish()}} style={{marginLeft: 'auto'}}><FontAwesomeIcon icon={faCheck} /></Button>
        </div>

        <div style={{height: '5%', color: 'white', width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: '3rem', textDecoration: 'underline', userSelect: 'none'}}>{DefaultData.name}</div>
        <Container style={{marginTop: '3%'}}>
            <Row style={{color: 'white', width: '100%', height: 'auto', padding: '0', margin: '0', marginTop: '2%'}}> <input type="string" style={{borderRadius: '12px', width: '85%'}} onChange={(e) => {setA(e.target.value)}} value={A}/> <input type='checkbox' onChange={(e) => {setAB(!AB)}} checked={AB} style={{width: '15%'}}/> </Row>
            
            <Row style={{color: 'white', width: '100%', height: 'auto', padding: '0', margin: '0', marginTop: '2%'}}> <input type="string" style={{borderRadius: '12px', width: '85%'}} onChange={(e) => {setB(e.target.value)}} value={B}/> <input type='checkbox' onChange={(e) => {setBB(!BB)}} checked={BB} style={{width: '15%'}}/> </Row>
            
            <Row style={{color: 'white', width: '100%', height: 'auto', padding: '0', margin: '0', marginTop: '2%'}}> <input type="string" style={{borderRadius: '12px', width: '85%'}} onChange={(e) => {setC(e.target.value)}} value={C}/> <input type='checkbox' onChange={(e) => {setCB(!CB)}} checked={CB} style={{width: '15%'}}/> </Row>
            
            <Row style={{color: 'white', width: '100%', height: 'auto', padding: '0', margin: '0', marginTop: '2%'}}> <input type="string" style={{borderRadius: '12px', width: '85%'}} onChange={(e) => {setD(e.target.value)}} value={D}/> <input type='checkbox' onChange={(e) => {setDB(!DB)}} checked={DB} style={{width: '15%'}}/> </Row>
            
            <Row style={{color: 'white', width: '100%', height: 'auto', padding: '0', margin: '0', marginTop: '2%'}}> <input type="string" style={{borderRadius: '12px', width: '85%'}} onChange={(e) => {setE(e.target.value)}} value={E}/> <input type='checkbox' onChange={(e) => {setEB(!EB)}} checked={EB} style={{width: '15%'}}/> </Row>
            
            <Row style={{color: 'white', width: '100%', height: 'auto', padding: '0', margin: '0', marginTop: '2%'}}> <input type="string" style={{borderRadius: '12px', width: '85%'}} onChange={(e) => {setF(e.target.value)}} value={F}/> <input type='checkbox' onChange={(e) => {setFB(!FB)}} checked={FB} style={{width: '15%'}}/> </Row>
            
            <Row style={{color: 'white', width: '100%', height: 'auto', padding: '0', margin: '0', marginTop: '2%'}}> <input type="string" style={{borderRadius: '12px', width: '85%'}} onChange={(e) => {setG(e.target.value)}} value={G}/> <input type='checkbox' onChange={(e) => {setGB(!GB)}} checked={GB} style={{width: '15%'}}/> </Row>
            
            <Row style={{color: 'white', width: '100%', height: 'auto', padding: '0', margin: '0', marginTop: '2%'}}> <input type="string" style={{borderRadius: '12px', width: '85%'}} onChange={(e) => {setH(e.target.value)}} value={H}/> <input type='checkbox' onChange={(e) => {setHB(!HB)}} checked={HB} style={{width: '15%'}}/> </Row>
            
            <Row style={{color: 'white', width: '100%', height: 'auto', padding: '0', margin: '0', marginTop: '2%'}}> <input type="string" style={{borderRadius: '12px', width: '85%'}} onChange={(e) => {setI(e.target.value)}} value={I}/> <input type='checkbox' onChange={(e) => {setIB(!IB)}} checked={IB} style={{width: '15%'}}/> </Row>

            <Row style={{color: 'white', width: '100%', height: 'auto', padding: '0', margin: '0', marginTop: '2%'}}> <input type="string" style={{borderRadius: '12px', width: '85%'}} onChange={(e) => {setJ(e.target.value)}} value={J}/> <input type='checkbox' onChange={(e) => {setJB(!JB)}} checked={JB} style={{width: '15%'}}/> </Row>
        </Container>
    </div>
    )
}

export default Edit