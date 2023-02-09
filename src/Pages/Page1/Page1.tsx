import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import {useContext, useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataContext } from '../../App';

const Page1 = () => {

    const initialState = {
        name: "",
        email: "",
        phone: "",
    }
    const [data, setData] = useState(initialState); // data state
    const {name,email,phone}=data  
    const [err,setErr]=useState(''); //error message state
    const [open, setOpen] = useState(false); //alert showing state
    const {dataValue,setDataValue}=useContext(DataContext)  //data context API
    const navigate=useNavigate(); // navigation hook 

    useEffect(()=>{
        if(dataValue){
            navigate('/page2')
        }
    },[dataValue])

    // validataion start
    function valid(){
        if(data.name){
            if(data.phone){
                if(data.email){
                    return true
                }
                else{
                    setErr("please enter the email")
                }
            }
            else{
                setErr("please enter the phone")
            }
        }
        else{
            setErr("please enter the name")
        }
        return false;
    }
    // validation end

    //submit action start
    const handleSubmit=(event:React.ChangeEvent<any>)=>{
        event.preventDefault()
        if(valid()){
            storeDataonLocalStorage()
            setDataValue(true)
            console.log(dataValue) 
        }
        else{
            setOpen(true);
        }
        
    }
    // submit action end

    // change action start
    const handleChange = (e:React.ChangeEvent<any>) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(e.target.name, e.target.value);
    }
    // change action end


    // alert close method start
    const handleClose = () => {
        setOpen(false);
    };
    // alert close method end

    // Store data on local storage start
    function storeDataonLocalStorage(){
        localStorage.setItem('user', JSON.stringify(data))
    }
    // store data on local storage end

    return (
        <div>
            <div>
                {/* Form Design start */}
                <form onSubmit={handleSubmit}>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Name</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            type="text"
                            onChange={handleChange}
                            name="name"
                            value={name}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Phone</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            type="number"
                            name="phone"
                            value={phone}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Email</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <Button variant="contained" type="submit">Save</Button>
                    
                </form>
                {/* Form design end */}

                {/* Alert Design start*/}
                <div>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                        {"Alert!!!"}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description" style={{color:'red'}}>
                            {err}
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        
                        <Button onClick={handleClose} autoFocus>
                            Ok
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                {/* Alert Design end */}
            </div>
        </div>
    );
};

export default Page1;