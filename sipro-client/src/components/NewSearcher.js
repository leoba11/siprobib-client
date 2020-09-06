import React, {useState} from "react";

//Imports para el form
import {Formik, Form, Field} from "formik";
import * as Yup from 'yup';

//Imports de Material UI
import {Button, FormControlLabel, Switch, TextField} from "@material-ui/core";
import {withStyles} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import TablaProducciones from "./TablaProducciones";

//Estilos
const styles = () => ({
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
    }
})

const NewSearcher = props => {

    const {classes} = props;

    // Valores iniciales del formulario de busqueda.
    const initialValues = {
        general: '',
        author: '',
        title: '',
        gender: '',
        year: ''
    }

    //Validación
    const validationSchema = Yup.object({
        general: Yup.string(),
        author: Yup.string(),
        title: Yup.string(),
        gender: Yup.string(),
        year: Yup.string(),
    })

    const onSubmit = (values, onSubmitProps) => {
        console.log('Form Data', values);
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
                validationSchema={validationSchema}
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
                                            label='Año de publicación'
                                            id='year'
                                            name='year'
                                            variant='outlined'
                                        />

                                    </div>

                            }
                            <br/>
                            <Button variant='contained' color="primary" type="submit"
                                    disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}>
                                Buscar <SearchIcon style={{marginLeft: '0.5em'}}/>
                            </Button>
                        </Form>
                    )
                }
            </Formik>

            <br/>

            <div style={{margin: '2em'}}>
                <TablaProducciones/>
            </div>

        </div>
    )
}


export default withStyles(styles)(NewSearcher);