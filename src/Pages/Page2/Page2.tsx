import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useState,useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from '../../App';


// Model start
interface dataModel{
  userId : number,
  id : number,
  title : string,
  body : string
}
// Model end

// user data model start 
interface userType{
  name:string
}
//user data model end

const Page2 = () => {

  const [data,setData]=useState([])   // state for store data
  const {dataValue,setDataValue}=useContext(DataContext)
  const navigate=useNavigate();
  let user : string | null = localStorage.getItem('user');  //to get data from localstorage
  const userData: userType = user? JSON.parse(user):{name:""}  // parse in object
  
  
  //load json file
    useEffect(()=>{    
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=>res.json())
      .then(result=>setData(result))
    },[])

    // check the datavalue entried or not if not then navigate to front page.
    useEffect(()=>{
      if(!dataValue){
          navigate('/')
      }
    },[])

    //Column header
    const columns: GridColDef[] = [
        { field: 'userId', headerName: 'User ID', width: 80 },
        {
          field: 'id',
          headerName: 'ID',
          width: 50,
          editable: false,
        },
        {
          field: 'title',
          headerName: 'Title',
          width: 280,
          editable: false,
        },
        {
          field: 'body',
          headerName: 'Body',
          width: 720,
          editable: false,
        }
    ];
  
    // destructing array from the data state and store in row array
    const rows = [
      ...data  
    ];

    return (
        <div>
            <h4 style={{textAlign: 'right', color: 'blue'}}>Welcome {userData?.name}!!!</h4>
            <Box style={{ height: 700, width: '80vw',margin:'20px 0px', overflowX: 'scroll' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        </div>
    );
};

export default Page2;