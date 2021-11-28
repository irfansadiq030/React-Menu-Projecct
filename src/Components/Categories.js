import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

// Custom Style For Buttons
const buttonStyle = {
    color: '#fca311',
    borderColor: '#fca311',
    "&:hover": {
        backgroundColor: '#fca311',
        borderColor: '#fca311',
        color: '#fff',
        transition: '.5s'
    }
}
const Categories = ({ categories, filter }) => {
    return (
        <>
            <Container>
                <Grid container justifyContent="center" mb={3}>
                    <Grid item xs={5}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            {
                                categories.map((param,index) => {
                                    return (
                                        <Button key={index} variant="outlined" onClick={() => filter(param)} size="large"
                                            sx={{
                                                color: '#fca311', borderColor: '#fca311', "&:hover": {
                                                    backgroundColor: '#fca311',
                                                    borderColor: '#fca311',
                                                    color: '#fff',
                                                    transition: '.3s'

                                                }
                                            }}
                                        >
                                            {param}
                                        </Button>
                                    )
                                })
                            }

                            {/* <Button onClick={() => filter('shakes')} size="large"
                                sx={{
                                    color: '#fca311', borderColor: '#fca311', "&:hover": {
                                        backgroundColor: '#fca311',
                                        borderColor: '#fca311',
                                        color: '#fff',
                                        transition: '.3s'

                                    }
                                }}
                                variant="outlined"
                            >Cakes</Button>
                            <Button onClick={() => filter('breakfast')} size="large"
                                sx={{
                                    color: '#fca311', borderColor: '#fca311', "&:hover": {
                                        backgroundColor: '#fca311',
                                        borderColor: '#fca311',
                                        color: '#fff',
                                        transition: '.3s'

                                    }
                                }}
                                variant="outlined"
                            >Pizza</Button> */}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default Categories