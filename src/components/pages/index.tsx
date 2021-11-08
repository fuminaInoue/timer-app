import * as React from 'react'
import { useHistory } from 'react-router-dom'

// @mui
import { makeStyles } from '@mui/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Fab from '@mui/material/Fab'

export const Index: React.FC = () => {
  const classes = UseStyles()
  const history = useHistory()

  const onClickMinutesButton = (minutes: number) => {
    history.push({ pathname: '/timer', search: `?time=${minutes}` })
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <h1 className={classes.titleStyle}>ChinChilla Timer</h1>
          <div className={classes.buttonWrapperStyle}>
            <Fab
              color="primary"
              sx={{
                display: 'block',
                fontSize: 24,
                fontWeight: 'bold',
              }}
              onClick={() => onClickMinutesButton(1)}
            >
              1
            </Fab>
            <Fab
              color="primary"
              sx={{
                display: 'block',
                fontSize: 24,
                fontWeight: 'bold',
              }}
              onClick={() => onClickMinutesButton(3)}
            >
              ３
            </Fab>
            <Fab
              color="primary"
              sx={{
                display: 'block',
                fontSize: 24,
                fontWeight: 'bold',
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
  titleStyle: {
    fontFamily: "'Poppins', sans-serif",
    margin: 0,
    paddingTop: 200,
    textAlign: 'center',
  },
  buttonWrapperStyle: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '80%',
    margin: '80px auto',
  },
})
