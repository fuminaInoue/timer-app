import * as React from 'react'
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
            <Paper elevation={3}>3</Paper>
            <span>:</span>
            <Paper elevation={3}>0</Paper>
            <Paper elevation={3}>0</Paper>
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
