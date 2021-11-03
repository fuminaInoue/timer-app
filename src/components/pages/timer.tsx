import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom'

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
          <Button
            variant="contained"
            sx={{ margin: '80px auto 0', display: 'block' }}
            onClick={() => onClickReturnButton()}
          >
            もどる
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
