
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function DynamicComponent(jsonstr, handler) {
    let json = JSON.parse(jsonstr)
    console.log(json)
    let array = []
    Object.entries(json).forEach(([key, value]) => {
        console.log(key + " => "+ value)
        array.push(React.createElement(TextField, {id:key, label: key, value: value, onChange: handler}))
    });



    let maincontainer = React.createElement(Box, {sx: {
        '& .MuiTextField-root': { m: 1, width: '70%' },
      } }, array);


    
    return maincontainer
}
  
export default DynamicComponent;