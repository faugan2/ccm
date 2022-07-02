import React, { useEffect, useState } from 'react'
import "../styles/admin.scss";
import {auth,db} from "../firebase_file";
import CircularProgress from '@material-ui/core/CircularProgress';
import Login from './Login';
import AdminContent from '../components/AdminContent';

export default function Admin() {
    const [logged_in,set_logged_in]=useState(null);
    useEffect(()=>{
       auth.onAuthStateChanged((user)=>{
        if(user==null){
            set_logged_in(false)
        }else{
            set_logged_in(true);
        }
       })
    },[auth])
  return (
    <div className="admin">
        {logged_in==null && <div className="loading">
            <CircularProgress size={15}/>
            <label>Patientez...</label>
            </div>
        }

        {
            logged_in==false && <Login />
        }

        {
            logged_in==true && <AdminContent />
        }
    </div>
  )
}
