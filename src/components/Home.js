import React from 'react'
import { Typography, Grid, Container, Button } from '@material-ui/core'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import styles from './Home.module.css'

function Home(){
   
    return (
        <div>
        <Container className={styles.contmain}>
            <Grid container spacing= {6} justify="center" className={styles.topcont}>
                <Grid item xs={8} className={styles.head}>
                    <Typography variant="h5" component="h2">
                        User Name
                    </Typography>
                    <Typography color="textSecondary">
                        User Bio Lorem Ipsum ser Bio
                    </Typography>
                    <Typography color="textSecondary">
                        Lorem IpsumUser Bio Lorem Ipsum
                    </Typography>

                </Grid>
                <Grid item xs={4}>
                    <Button size="large" variant="contained" color="default">Create New Tweet</Button>
                </Grid>
            </Grid>
            <Container className={styles.cont}>
                <Grid container  justify="center" >
                    <Typography variant="h5" component="h2">
                        Recent Tweets of the User About a topic goes below
                    </Typography>
                </Grid>
                <Grid container spacing= {8} justify="left" className={styles.cont2}>
                    <Grid item xs={4}>
                        <img className={styles.twt} src={img1}/>
                    </Grid>
                    <Grid item xs={4} alignItems="center">
                        <Typography color="textSecondary" className={styles.typo}>
                            This is my Tweet
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing= {8} justify="left" className={styles.cont2}>
                    <Grid item xs={4}>
                        <img className={styles.twt} src={img2}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography color="textSecondary" className={styles.typo}>
                            This is my second Tweet
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing= {8} justify="left" className={styles.cont2}>
                    <Grid item xs={4}>
                        <img className={styles.twt} src={img3}/>
                    </Grid>
                    <Grid item xs={4} alignItems="center">
                        <Typography color="textSecondary" className={styles.typo}>
                            This is my third Tweet
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Container>
        </div>
    );
}

export default Home;