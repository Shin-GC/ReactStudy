import './App.css';
import TimeSet from './components/TimeSet'
import AppBar from "./components/AppBar"
import InputText from "./components/InputText"
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <div className="App">
        <AppBar/>
        <br/>
        <InputText/>
      </div>
      {/*<div>*/}
      {/*  <Grid item xs={12} sm={12} md={12} lg={12}*/}
      {/*        style={{*/}
      {/*          textAlign: 'center' // this does the magic*/}
      {/*        }}*/}
      {/*  >*/}
      {/*    <Button>*/}
      {/*      Test*/}
      {/*    </Button>*/}
      {/*  </Grid>*/}
      {/*</div>*/}
    </>
  );
}

export default App;
