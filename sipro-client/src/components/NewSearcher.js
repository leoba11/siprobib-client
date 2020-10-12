import React, { useState } from "react";

//Imports para el form
import {Formik, Form, Field} from "formik";

//Imports de Material UI
import {Button, FormControlLabel, Switch, TextField, makeStyles} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import TablaProducciones from "./TablaProducciones";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchProductions } from '../redux';
import { connect } from 'react-redux';


//Estilos
const styles = makeStyles( theme => ({
    container: {
        display: 'grid',
        gridTemplateRows: 'repeat(2, 1fr)',
    },
    formcito: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gridGap: '2em',
        marginLeft: '2em',
        marginRight: '2em'
    },
    switchcito: {
        marginLeft: '2em'
    },
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
}));

//Para el snackbar
function Alert(props) {
    return <MuiAlert elevation={8} variant="filled" {...props} />;
}

const NewSearcher = ( { prodData, fetchProductions } ) => {

    const classes = styles();

    const [open, setOpen] = React.useState(false);

    // Valores iniciales del formulario de busqueda.
    const initialValues = {
        general: '',
        author: '',
        title: '',
        gender: '',
        descriptor: ''
    }

    //manejar cuando se cierra el snack
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    const onSubmit = (values, onSubmitProps) => {
        console.log('Form Data', values);
        console.log(onSubmitProps);

        if(values.title !== '' && values.author === '' && values.gender === '' && values.descriptor === '') {
            fetchProductions('produccion-titulo', values.title);
        }else if(values.author !== '' && values.title === '' && values.gender === '' && values.descriptor === '') {
            fetchProductions('produccion-autores', values.author);
        }
        
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
    };

    //Para el switch
    const [type, setType] = useState({
        checkedA: false
    })

    const handleChange = (event) => {
        setType({...type, [event.target.name]: event.target.checked});
    };

    return (
        <div className={classes.container}>
            {/* Switch para seleccionar busqueda avanzada*/}
            <FormControlLabel
                control={
                    <Switch
                        className={classes.switchcito}
                        checked={type.checkedA}
                        onChange={handleChange}
                        color="primary"
                        name="checkedA"
                        inputProps={{'aria-label': 'primary checkbox'}}
                    />
                }
                label='Busqueda Avanzada'
            />

            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}>
                {
                    formik => (
                        <Form>

                            {
                                !type.checkedA ?
                                    <div>
                                        <Field
                                            as={TextField}
                                            label='Búsqueda General'
                                            id='general'
                                            name='general'
                                            variant='outlined'
                                        />
                                    </div> :
                                    <div className={classes.formcito}>
                                        <Field
                                            as={TextField}
                                            label='Autor'
                                            id='author'
                                            name='author'
                                            variant='outlined'
                                        />


                                        <Field
                                            as={TextField}
                                            label='Título del libro'
                                            id='title'
                                            name='title'
                                            variant='outlined'
                                        />

                                        <Field
                                            as={TextField}
                                            label='Género'
                                            id='gender'
                                            name='gender'
                                            variant='outlined'
                                        />

                                        <Field
                                            as={TextField}
                                            label='Descriptores'
                                            id='descriptor'
                                            name='descriptor'
                                            variant='outlined'
                                        />
                                    </div>
                                    
                            }
                            <br/>
                            <Button variant='contained' color="primary" type="submit"
                                    disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}>
                                Buscar <SearchIcon style={{marginLeft: '0.5em'}}/>
                            </Button> <br></br>-
                        </Form>
                    )
                }
            </Formik>

            <br/>

            {
                prodData.loading ? <div style={{margin: '2em'}}> <CircularProgress /> </div> : prodData.productions.length !== 0 &&
                <div style={{margin: '2em'}}>
                    <TablaProducciones production={prodData.productions}/>
                </div>
            }

            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                {
                    prodData.productions.length === 0 ?
                    <Alert onClose={handleClose} severity="info">
                        No se encontraron producciones bibliograficas
                    </Alert> :
                    <Alert onClose={handleClose} severity="info">
                        Se encontraron {prodData.productions.length} producciones bibliograficas
                    </Alert>
                }
                
            </Snackbar>            

        </div>
    )
}

const mapStateToProps = state => {
    return {
        prodData: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProductions: (type, value) => dispatch(fetchProductions(type, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSearcher);