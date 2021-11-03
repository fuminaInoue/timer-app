import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button'
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
          <Button
            variant="contained"
            sx={{
              margin: '80px auto 0',
              display: 'block',
              textTransform: 'none',
            }}
            onClick={() => onClickMinutesButton(3)}
          >
            3 minutes
          </Button>
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
