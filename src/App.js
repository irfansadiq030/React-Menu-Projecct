import logo from './logo.svg';
import './App.css';
import Card from './Components/MediaCard'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import menu from './data'
import { useEffect, useState } from 'react';
import Categories from './Components/Categories'
import Aos from 'aos';

function App() {
  // Getting Uniquely Categories Items
  const categoriesAll = ['all', ...new Set(menu.map((param) => {
    return (param.category)
  }))]

  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(categoriesAll);

  // Filter Items

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
    } else {
      const newItems = menu.filter((param) => param.category === category)
      setMenuItems(newItems);
    }
    
  }

  console.log(categories)
  // Adding Animation
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="App">
      <Container>
        <Grid spacing={2} container justifyContent="center">
          <Grid my={3} item md={12}>
            <Box p={3}>
              <Typography variant="h3" sx={{ fontWeight: '600' }}>Our Menu</Typography>
            </Box>
          </Grid>
          <Categories categories={categories} filter={filterItems} />
        </Grid>
        <Grid mb={12} spacing={5} container justifyContent="center">
          <Card data-aos="fade-up" items={menuItems} />
        </Grid>
        <Typography variant="h6">Developed by : irfan sadiq</Typography>
      </Container>
    </div>
  );
}

export default App;
