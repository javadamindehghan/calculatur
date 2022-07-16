import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid'
import Calculate from './Calculate';

function App() {
  return (
   <Grid 
   container
    spacing={2} 
    justifyContent="center"
   alignItems="center">
      <Grid xs={10} md={4}>
        <Calculate/>
      </Grid>
   </Grid>
  );
}

export default App;
