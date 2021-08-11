import react from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from  './Cards.module.css';

const Cards =(props) => {

    return(
       <div className={StyleSheet.container}>
           <Grid container spacing = {3} justify= "center">
               <Grid item component={Card}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Infected</Typography>
                       <Typography variant="h5">REAL DATA</Typography>
                       <Typography color="textSecondary">REAL DATE</Typography>
                       <Typography    variant="textSecondary" gutterBottom>Infected</Typography>
                   </CardContent>
               </Grid>
           </Grid>

       </div>
    )
}

export default Cards;