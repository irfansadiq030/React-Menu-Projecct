import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Aos from 'aos';
import { useEffect } from 'react';
// import { borders } from '@mui/system';
// import Item from '@mui/material'

export default function MediaCard({ items }) {
  // Adding Animation
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <React.Fragment>
      {/* <Grid spacing={5} container justifyContent="center"> */}
      {
        items.map((param) => {
          const { id, category, price, img, title, description } = param
          return (
            <Grid item md={6} key={id}>
              <Paper elevation={3} sx={{ display: 'flex', background: '#f8f9fb', height: 170 }}>
                <Box sx={{ width: '40%', }} textAlign="left" align="flex-start">
                  <img style={{ width: '100%', height: '100%', }} src={img}></img>
                </Box>
                <Box sx={{ width: '60%' }} textAlign="left" px={3}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1.5px #fca311 solid', }}>
                    <Typography sx={{ fontWeight: '500' }} variant="h6" pb={1}>{title}</Typography>
                    <Typography sx={{ fontWeight: '500', color: '#fca311' }} variant="h5" pb={1}>${price}</Typography>
                  </div>
                  <Typography variant="body1" sx={{ wordSpacing: '3px' }} py={2}>
                    {description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          )
        })
      }
      {/* </Grid> */}
    </React.Fragment>
  );
}
