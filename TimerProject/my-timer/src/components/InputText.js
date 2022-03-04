import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import TimeSet from "./TimeSet"
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';

export default function InputField() {
  const [time, setTime] = useState(0)
  const [submit, setSubmit] = useState(0)
  if (submit === 0) {
    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': {m: 1, width: '17ch', height: '6ch'},
          alignContent: 'center'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="시간 입력" variant="outlined"
                   onChange={(e) => setTime(parseInt(e.target.value))}/>

        <Button variant="contained" size="large" onClick={() => {
          setSubmit(time)
        }
        }>시간 설정하기
        </Button>
      </Box>
    );
  } else {
    return (
      <>
        <TimeSet set={submit}/>
        <div>
          <Grid item xs={12} sm={12} md={12} lg={12} style={{textAlign: 'center'}}>
            <Button onClick={() => setSubmit(0)}>
              시간 다시 설정하기
            </Button>
          </Grid>
        </div>
      </>)
  }
}
