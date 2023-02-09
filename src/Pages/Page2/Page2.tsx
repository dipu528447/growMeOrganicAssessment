import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


// Model start
interface dataModel{
  userId : number,
  id : number,
  title : string,
  body : string
}
// Model end


const Page2 = () => {

  const [data,setData]=useState([])   // state for store data

  //load json file
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=>res.json())
      .then(result=>setData(result))
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
            <Link to="/"><Button variant="contained">Back</Button></Link> {/* ADD A BACK BUTTON TO RETURN TO FRONT PAGE */}
        </div>
    );
};

export default Page2;