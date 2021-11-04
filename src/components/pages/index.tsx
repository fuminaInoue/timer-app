import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles'
import Fab from '@mui/material/Fab'
import { useHistory } from 'react-router-dom'

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
          <Fab
            color="primary"
            sx={{
              margin: '80px auto 0',
              display: 'block',
              fontSize: 24,
              fontWeight: 'bold',
            }}
            onClick={() => onClickMinutesButton(3)}
          >
            ３
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
