import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Switch, TextField, FormControlLabel, Button } from '@material-ui/core';

const styles = theme => ({

    buscador: {
        margin: '5px',
        padding: '2em',
    },

    buscadorPrincipal: {
        display: 'flex',
    },

    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),

    },

    botoncito: {
        padding: "1.2em",
    },

    wrap: {
        padding: "1.5em",
    }

})


export const Buscador = props => {

    //For the styles
    const { classes } = props;

    //For the switch
    const [type, setType] = useState({
        checkedA: false
    })

    const handleChange = (event) => {
        setType({ ...type, [event.target.name]: event.target.checked });
    };

    //For the Form
    const initialState = {
        author: '',
        bookName: '',
        dateOfpublishing: 2020,
        bookGender: ''
    }

    const [values, setValues] = useState(initialState);
    const [search, setSearch] = useState('');

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        alert('Subido papa');
        console.log(values);
        event.preventDefault();
      }

    return (
        <div>
            <FormControlLabel
                control={
                    <Switch
                        checked={type.checkedA}
                        onChange={handleChange}
                        color="primary"
                        name="checkedA"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                }
                label='Busqueda Avanzada'
            />
            <br></br>

            {type.checkedA ?
                <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                        className={classes.textField}
                        label="Autor"
                        variant="outlined"
                        name='author'
                        value={values.author}
                        onChange={handleInputChange}
                    />

                    <TextField
                        className={classes.textField}
                        label="Nombre del libro"
                        variant="outlined"
                        name='bookName'
                        value={values.bookName}
                        onChange={handleInputChange}
                    />

                    <TextField
                        className={classes.textField}
                        type='number'
                        max='4'
                        label="Año de publicación"
                        variant="outlined"
                        name='dateOfpublishing'
                        value={values.dateOfpublishing}
                        onChange={handleInputChange}
                    />

                    <TextField
                        className={classes.textField}
                        label="Género"
                        variant="outlined"
                        name='bookGender'
                        value={values.bookGender}
                        onChange={handleInputChange}
                    />
                    <br></br>
                    <br></br>
                    <Button variant="contained" color="primary" type="submit">
                        Buscar
                    </Button>

                    {console.log(values.dateOfpublishing)}
                </form>
                : <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                        className={classes.textField}
                        label="Buscar..."
                        variant="outlined"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <br></br>
                    <br></br>
                    <Button variant="contained" color="primary" type="submit">
                        Buscar
                    </Button>

                </form>}
        </div>
    )
}

export default withStyles(styles)(Buscador) 
