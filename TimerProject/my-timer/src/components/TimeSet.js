import {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import * as React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function TimeSet({set}) {
  const [time, setTime] = useState(set);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((current) => {
        if (current === 0) {
          clearInterval(timer);
        }
        return current - 1;
      }); // 시점 상관 없이 항상 최신 값 보유
    }, 1000);
  }, []); // 시점

  return (
    <>
      <div>
        <h3>{time > 0 ? time : "시간 종료"}</h3>
      </div>
    </>
  )
    ;
}

TimeSet.defaultProps = {
  set: 10
}

export default TimeSet