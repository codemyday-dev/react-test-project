import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const App = () => {
  return (
    <Autocomplete
      multiple
      options={options}
      getOptionLabel={(option) => option.title}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          placeholder='Enter value'
        />
      )}
      style={{ width: '70%', margin: '50px auto' }}
    />
  );
};

const options = [
  { title: '+', value: '+' },
  { title: '-', value: '-' },
  { title: '/', value: '/' },
  { title: '*', value: '*' },
  { title: '(', value: '(' },
  { title: ')', value: ')' },

  { title: '1 test', value: 1 },
  { title: '2 test', value: 42 },
  { title: 'another test', value: 13 },
  { title: 'one more test', value: 2000 },
];

export default App;
