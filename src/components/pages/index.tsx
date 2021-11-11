import * as React from 'react'
import { useHistory } from 'react-router-dom'
import chinchilla from 'chinchilla.png'
// @mui
import { makeStyles } from '@mui/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Fab from '@mui/material/Fab'
import { useEffect } from 'react'

export const Index: React.FC = () => {
  const classes = UseStyles()
  const history = useHistory()

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden'
  }, [])

  const onClickMinutesButton = (minutes: number) => {
    history.push({ pathname: '/timer', search: `?time=${minutes}` })
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          className={classes.boxStyle}
          sx={{ bgcolor: '#FFFAF0', height: '100vh' }}
        >
          <h1 className={classes.titleStyle}>ChinChilla Timer</h1>
          <img className={classes.imageStyle} src={chinchilla} alt="チンチラ" />
          <div className={classes.buttonWrapperStyle}>
            <Fab
              className={classes.timeStyle}
              sx={{
                background: '#EDCECA',
                color: '#333',
                display: 'block',
                fontSize: 24,
                fontWeight: 'bold',
                fontFamily: "'Poppins', sans-serif",
              }}
              onClick={() => onClickMinutesButton(1)}
            >
              1
            </Fab>
            <Fab
              sx={{
                background: '#FFE9D0',
                color: '#333',
                display: 'block',
                fontSize: 24,
                fontWeight: 'bold',
                fontFamily: "'Poppins', sans-serif",
              }}
              onClick={() => onClickMinutesButton(3)}
            >
              ３
            </Fab>
            <Fab
              sx={{
                background: '#FFDAD0',
                color: '#333',
                display: 'block',
                fontSize: 24,
                fontWeight: 'bold',
                fontFamily: "'Poppins', sans-serif",
              }}
              onClick={() => onClickMinutesButton(5)}
            >
              5
            </Fab>
          </div>
        </Box>
      </Container>
    </>
  )
}

const UseStyles: any = makeStyles({
  boxStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleStyle: {
    fontFamily: "'Poppins', sans-serif",
    margin: 0,
    paddingTop: 40,
    textAlign: 'center',
    color: '#333',
  },
  buttonWrapperStyle: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '90%',
    margin: '0 auto 100px',
  },
  imageStyle: {
    width: 180,
    height: 'auto',
    margin: '56px auto 0',
    display: 'block',
  },
  timeStyle: {
    color: '#333',
    display: 'block',
    fontSize: 24,
    fontWeight: 'bold',
  },
})
