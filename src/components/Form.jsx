import React, {useState} from 'react';
import { Button, InputLabel, MenuItem, Select, Slider, Input, Grid } from '@mui/material';
import {Link} from 'react-router-dom';
import axios from 'axios';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import '../Styles/Form.css'

export default function FormPage(){

    const [input, setInput] = useState({
        name: '',
        materia: '',
        number: '',
        minutes: 60
    });

    function handleChange(event){
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    function sendData(event){
        event.preventDefault();
        async function post(){
            var json = await axios.post('http://localhost:3001/data/create',input)
        }
        post();
        setInput({
            name: '',
            materia: '',
            number: '',
            minutes: 60
        })
    }

    return (
        <div className='formContainer'>
            <div className='title'>
                <strong>Cotiza con Copywrite</strong>
            </div>
            <div className='backButton'>
                <Link to={'/'}><Button><KeyboardBackspaceIcon/></Button></Link>
            </div>
            <Grid containter>
                <Grid item xs={12} sm={6}>
                    <div>
                        <span className='tittles'>Datos personales</span><br/>
                        <div>
                            <label className='label'>Nombres</label>
                            <Input type='text' onChange={handleChange} name='name' value={input.name}></Input>
                        </div>
                        <div>
                            <label className='label'>Numero de telefono</label>
                            <Input type='number' onChange={handleChange} name='number' value={input.number}></Input>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div>
                        <span className='tittles'>Datos de la materia</span>
                        <div>
                            <div className='label2'>¿En qué asignatura necesitas ayuda para tu PARICAL o QUIZ?</div>
                                <Select class='select'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={input.materia}
                                    label="Select..."
                                    onChange={handleChange}
                                    name='materia'
                                >
                                <MenuItem value={'ingles'}>Inglés</MenuItem>
                                <MenuItem value={'calculo'}>Cálculo</MenuItem>
                                <MenuItem value={'geometria'}>Geometría</MenuItem>
                                <MenuItem value={'programacion-i'}>Programación I</MenuItem>
                                <MenuItem value={'fisica'}>Física</MenuItem>
                                <MenuItem value={'teoria de numeros'}>Teória de números</MenuItem>
                                <MenuItem value={'estructura de datos'}>Estructura de datos</MenuItem>
                                <MenuItem value={'base de datos'}>Base de datos</MenuItem>
                                <MenuItem value={'algebra lineal'}>Álgebra lineal</MenuItem>
                                <MenuItem value={'logica'}>Lógica</MenuItem>
                                <MenuItem value={'calculo-ii'}>Cálculo II</MenuItem>
                                <MenuItem value={'fisica-ii'}>Física II </MenuItem>
                                <MenuItem value={'estadistica general'}>Estadística general  </MenuItem>
                                <MenuItem value={'sistemas de la informacion'}>Sistemas de información</MenuItem>
                                <MenuItem value={'pensamiento sistematico'}>Pensamiento sistémico</MenuItem>
                            </Select>
                        </div>
                        <div>
                            <div className='label2'>¿Cuántos MINUTOS dura tu PARCIAL o QUIZ?</div>
                            <Slider
                                class='slider'
                                aria-label="Temperature"
                                // defaultValue={60}
                                value={input.minutes}
                                // getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                step={10}
                                name={'minutes'}
                                marks
                                min={20}
                                max={180}
                                onChange={handleChange}
                            />
                            <span>{input.minutes} minutos</span>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Button class='homeButton' onClick={sendData}>Guardar</Button>
            </Grid>
        </div>
    )
}