import React from 'react';
import { Button, Grid } from '@mui/material';
import {Link} from 'react-router-dom';
import '../Styles/Home.css';

export default function HomePage(){

    return (
        <div className='homeContainer'>
            <Grid container>
                <Grid item xs={12}>
                    <img className='imagen' src='https://www.copywritecol.com/img/icon.png' alt='imagen Copywrite' width='150px' height='150px'/>
                </Grid>
                <Grid item xs={12} >
                    <div className='text1'>
                        <span>Bienvenido a <strong>PARCIALES y QUICES</strong> Copywrite®</span>
                    </div>
                    <div className='text2'>
                        <span>Sigue los pasos para solicitar ayuda ¡En 5 minutos estarás agendad@! 👇</span>
                    </div>
                    <Link to={'/form'}><Button class='homeButton'><strong>Comenzar</strong></Button></Link>
                    {/* <Button class='homeButton'>Comenzar</Button> */}
                </Grid>
            </Grid>
        </div>
    )
}