import React from 'react'
import { DataType } from './App';

interface CreateNewProps {
    onEdit: (value:DataType,index:number) => void;
    onClose: () => void;
    DefaultData: DataType;
    Index: number;
}

const Edit = ({onEdit,DefaultData,Index,onClose}:CreateNewProps) => {
  return (
    <div className="root" style={{display: 'flex', position: 'fixed', backgroundColor: 'rgba(25,25,25,0.95)'}}>
        <span style={{}}>EDITING: {DefaultData.name}</span>
    </div>
  )
}

export default Edit