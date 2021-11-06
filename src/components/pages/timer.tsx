import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

// @mui
import { makeStyles } from '@mui/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Fab from '@mui/material/Fab'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import Paper from '@mui/material/Paper'

export const Timer: React.FC = () => {
  const classes = UseStyles()
  const history = useHistory()
  const { time } = require('query-string').parse(window.location.search)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(60)

  useEffect(() => {
    // queryからtimeを受け取ってセットする
    setMinutes(Number(time))
    // 1秒後に1度だけ分を1減らす
    setTimeout(() => setMinutes(Number(time) - 1), 1000)
  }, [time])

  useEffect(() => {
    if (seconds > 0) {
      // 秒がゼロ以上なら1秒後に1秒減らす
      setTimeout(() => setSeconds(seconds - 1), 1000)
    } else if (seconds === 0 && minutes > 0) {
      // 秒がゼロで分が残っていたら1分減らして
      setMinutes(minutes - 1)
      // 秒に60をセットする
      setSeconds(60)
    }
  }, [seconds])

  const firstSeconds = () => {
    if (seconds === 60) {
      return '0'
    } else if (seconds >= 10) {
      return String(seconds).slice(0, 1)
    } else {
      return '0'
    }
  }

  const secondSeconds = () => {
    if (seconds >= 10) {
      return String(seconds).slice(1)
    } else {
      return seconds
    }
  }

  const onClickReturnButton = () => {
    history.push({ pathname: '/' })
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <h1 className={classes.titleStyle}>Timer</h1>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              mt: 3,
              '& > :not(style)': {
                m: 0.5,
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                fontWeight: 'bold',
              },
              span: {
                width: 8,
              },
            }}
          >
            {/**  TODO: font-family */}
            <Paper elevation={3}>{minutes}</Paper>
            <span>:</span>
            <Paper elevation={3}>{firstSeconds()}</Paper>
            <Paper elevation={3}>{secondSeconds()}</Paper>
          </Box>
          <Fab
            color="primary"
            aria-label="arrow-back-i-os"
            sx={{ margin: '80px auto 0', display: 'block' }}
            onClick={() => onClickReturnButton()}
          >
            <ArrowBackIosIcon sx={{ ml: 1 }} />
          </Fab>
        </Box>
      </Container>
    </>
  )
}

const UseStyles: any = makeStyles({
  titleStyle: {
    fontFamily: "'Poppins', sans-serif",
    margin: 0,
    paddingTop: 200,
    textAlign: 'center',
  },
})
