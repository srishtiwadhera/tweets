import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import styles from './Home.module.css'
function Tweet(props) {
    return (
        <Grid container spacing= {8} justify="left" className={styles.cont2}>
                    <Grid item xs={4}>
                        <img className={styles.twt} src={props.image} alt="images"/>
                    </Grid>
                    <Grid item xs={4} alignItems="center">
                        <Typography color="textSecondary" className={styles.typo}>
                            {props.title}
                        </Typography>
                    </Grid>
                </Grid>
    );
    }
export default Tweet;
