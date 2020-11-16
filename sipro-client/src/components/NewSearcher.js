import React, { useState } from "react";

//Imports para el form
import {Formik, Form} from "formik";
import FormikControl from "./FormikControl";

//Imports de Material UI
import {Button, FormControlLabel, Switch, makeStyles} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import TablaProducciones from "./TablaProducciones";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';

//Imports para Redux
import { fetchGeneralProductions, fetchProductions } from '../redux';
import { connect } from 'react-redux';


//Estilos
const styles = makeStyles( theme => ({
    container: {
        display: 'grid',
        paddingTop: '3em'
    },
    formcito: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gridTemplateRows: 'repeat(2,1fr)',
        gridGap: '2em',
        marginLeft: '2em',
        marginRight: '2em'
    },
    andOr: {
        gridColumn: '1/5'
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

const NewSearcher = ( { prodData, fetchProductions, fetchGeneralProductions } ) => {

    const classes = styles();

    const [open, setOpen] = React.useState(false);

    const radioOptions = [
        { key: 'AND', value: 'and' },
        { key: 'OR', value: 'or'}
	]

    // Valores iniciales del formulario de busqueda.
    const initialValues = {
        tipo: 'and',
        general: '',
        titulo: '',
        autor: '',
        fecha: 0,
        categoria: ''
    }

    //manejar cuando se cierra el snack
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    const onSubmit = (values, onSubmitProps) => {
        //console.log('Form Data', values);
        //console.log(onSubmitProps);

		if(type.checkedA) {
			fetchProductions(values);
		}else {
			fetchGeneralProductions(values.general);
		}
		
        setOpen(true);
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
            <br></br>

            <Formik
				initialValues={initialValues}
                onSubmit={onSubmit}>
                {
                    formik => (
                        <Form>
                            {
                                !type.checkedA ?
                                    <div>

                                        <FormikControl 
                                            label='Búsqueda General'
                                            control='input'
                                            name='general'
                                        />

                                    </div> :
                                    <div className={classes.formcito}>
                                    
                                        <div className={classes.andOr}>
                                            <FormikControl
                                                control='radio'
                                                name='tipo'
                                                options={radioOptions} 
                                            /> 
                                        </div>
                                            
										<FormikControl 
											label='Título del libro'
											control='input'
											name='titulo'
										/>

										<FormikControl 
											label='Autor'
											control='input'
											name='autor'
										/>

										<FormikControl 
											label='Año de publicación'
											type='number'
											control='input'
											name='fecha'
										/>

										<FormikControl 
											label='Categoría'
											control='input'
											name='categoria'
										/>
                                       
                                    </div>        
                            }
                            <br></br>
							<br></br>
                            <Button variant='contained' color="primary" type="submit"
                                    disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting} >
                                Buscar <SearchIcon style={{marginLeft: '0.5em'}}/>
                            </Button> <br></br>
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
		fetchProductions: (body) => dispatch(fetchProductions(body)),
		fetchGeneralProductions: (word) => dispatch(fetchGeneralProductions(word))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSearcher);