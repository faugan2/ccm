import React, { useState } from 'react'
import { auth } from '../firebase_file';
import "../styles/admin_content.scss";
import AlerteAssuranceListContent from "./AlerteAssuranceListContent"
import AutoCreditListContent from "./AutoCreditListContent";
import RCHabitationListContent from "./RCHabitationListContent";

export default function AdminContent() {
    const [index,set_index]=useState(0);
    const logout=()=>{
        auth.signOut();
    }
  return (
    <div className="admin_content">
        <div className="left">
            <button className={index==0?"active":""} onClick={e=>set_index(0)}>Alerte Assurance</button>
            <button className={index==1?"active":""}  onClick={e=>set_index(1)}>Assurance à crédit</button>
            <button className={index==2?"active":""}  onClick={e=>set_index(2)}>RC Habitation</button>

            <button className="logout" onClick={logout}>Deconnexion</button>
        </div>
        <div className="right">
            {index==0 && <AlerteAssuranceListContent />}
            {index==1 && <AutoCreditListContent />}
            {index==2 && <RCHabitationListContent />}
        </div>
    </div>
  )
}
