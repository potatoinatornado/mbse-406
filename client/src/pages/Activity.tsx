import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

interface person {
  name: string;
  role: string;
  time: string;
  date: string;
  description: string;
}

//Sample Data
const originalRows: person[] = [
  {name: "Jake", role:'Pilot', time:'08:00 Am', date:'10/21/2021', description:'Scheduled to takeoff'},
  {name: "Amy", role:'Mechanic', time:'11:00 PM', date:'10/20/2021', description:'Repairs completed for Boeing B 767-316ERWL'},
  {name: "Amy", role:'Mechanic', time:'12:00 AM', date:'10/19/2021', description:'Repairs Started for B 767-316ERWL'},
  {name: "Daniel", role:'Mechanic', time:'04:30 PM', date:'10/18/2021', description:'Repairs completed for COMAC ARJ-21-700'},
  {name: "Daniel", role:'Mechanic', time:'01:00 PM', date:'10/18/2021', description:'Repairs started for COMAC ARJ-21-700'}
];
function getRandom (list:any[]) {
  return list[Math.floor((Math.random()*list.length))];
}
//Table Creation
function BasicTable() {


  const[rows, setRows] = useState<any[]>([]);
  const[searched, setSearched] = useState<string>("");
  const[price, setPrice] = useState<any>("Calculating...");

  const minValue = 0  //Or whichever number you want
  const [value, setValue] = useState(minValue)


  const parts = ["Propeller", "Wrench", "Wheel", "Wing", "Screw"]




  const queryElastic = async (amount:number) => {
    {
      const rawResponse = await fetch('/search/' + amount).then(response => response.json())
        .then(content => {

          setRows(content.map((searchData: any) => {

            delete searchData._source["Name of Product"]
            return {
              ...searchData._source,
              "Part Type": getRandom(parts)
            }
          }))

          fetch('/ai?' + new URLSearchParams({
            initPrice: content[0]._source["Initial Price"],
            price: content[0]._source["Selling Price"],
            quantity: content[0]._source["Total Quantity"]
          })).then(response => response.json()).then(price=>{
              setPrice(price.nextPrice)
          })

        });

    }
  }



  const requestSearch = (searchedVal: string) => {
    const filteredRows = originalRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched)
  };

  const onClickSearch = (e:any) => {
    e.preventDefault()
    queryElastic(value)
  }

  return (
    <div className="BasicTable">
      <Paper><br/><img src="./logo.jpg" alt="Logo JPEG" />
        <TextField
            label="# of queries"
            type="number"
            onChange={(e)=>setValue(parseInt(e.target.value))}
            value={value}
        />
        <Button variant="contained" onClick={onClickSearch}>Search</Button>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Activity Table">
        <TableHead>
        <TableCell>Activity Log</TableCell>
          <TableRow>
            {Object.keys(rows?.[0] ?? {}).map(columnName=><TableCell>{columnName}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >{/*
 // @ts-ignore */}
              {Object.keys(row).map(columnName=> row[columnName] === "$680.00" ? (  <Tippy content={`Predicted to change to $${price}`}>
                <TableCell>{row[columnName]}</TableCell>
              </Tippy>) :<TableCell>{row[columnName]}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
    </div>
  );

}

export default BasicTable;