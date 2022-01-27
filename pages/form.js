import React, {useState} from 'react'
import Swal from 'sweetalert2'
import {alert2,alert3} from '../notifications/alerts'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

export default () => {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

const submitValue = () => {
    const frmdetails = {
        'First Name' : fName,
        'Last Name' : lName,
        'Phone' : phone,
        'Email' : email
    }

    alert3.title=`${fName} ${lName} Logueado con Exito!` 
    Swal.fire(alert3)
    console.log(frmdetails)
}

const sw = () =>{
    Swal.fire(alert3)
}

const onChange = e =>{
    setlName(e.target.value)
}
const onChange2 = e =>{
    setfName(e.target.value)
}


return(
    <>

    <hr/>
    

    {/* <input type="text" placeholder="First Name" onChange={e => setfName(e.target.value)} />
    <input type="text" placeholder="Last Name" onChange={e => setlName(e.target.value)} /> */}
    <TextField onChange={onChange2} id="fname" label="Fname" variant="filled" />
    <TextField onChange={onChange} id="lname" label="Lname" variant="filled" color='success'/>
    <Button onClick={submitValue} variant="contained" endIcon={<SendIcon />} color="success">
        Send
    </Button>
    <p> Fname : {fName} </p>
    <p> Lname : {lName} </p>

    </>
    )
}
