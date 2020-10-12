import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import InfoIcon from "@material-ui/icons/Info";
import Button from "@material-ui/core/Button";

function getModalStyle() {
    const top = 50 ;
    const left = 50 ;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    mod: {
        display: 'grid',
        gridTemplateColumns: '200px 200px',
        columnGap: '2em'
    }
}));

const ModalComponent =  props => {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">{props.info.titulo}</h2>
            <div className={classes.mod}>
                <div >
                    <h4> Resumen: </h4> <p style={{marginLeft: '1em'}}> {props.info.resumen} </p>
                </div>
                <div >
                    <h4 style={{marginRight: '1em'}} > Clasificación: </h4> <p style={{marginLeft: '1em'}}> {props.info.clasificacion} </p>
                </div>
                <div >
                    <h4 > Dirección Web: </h4> <p style={{marginLeft: '1em'}}> {props.info.direccionWeb} </p>
                </div>
                <div >
                    <h4> Categoría: </h4> <p style={{marginLeft: '1em'}}> {props.info.categoria.descripcion} </p>
                </div>
                <div >
    <h4> Autor: </h4> <ul style={{marginLeft: '1em'}}>  {props.info.autores.map(autor => <li key={autor.idAutor}>{autor.nombre + ' ' + autor.apellidos}</li>)} </ul>
                </div>
                <div >
                    <h4> Año: </h4> <p style={{marginLeft: '1em'}}> {props.info.año} </p>
                </div>
                <div >
                    <h4> Ubicación: </h4> <p style={{marginLeft: '1em'}}> {props.info.ubicacion.detalle} </p>
                </div>
            </div>
                <Button onClick={handleClose}  variant='contained' color="primary" > CERRAR </Button>
        </div>
    );

    return (
        <div>
            <Button onClick={handleOpen}>
                <InfoIcon />
            </Button>
            <Modal
                open={open}
                 >
                {body}
            </Modal>
        </div>
    );
}

export default ModalComponent;