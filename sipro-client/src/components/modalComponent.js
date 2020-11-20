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
        width: 600,
        backgroundColor: theme.palette.background.paper,
        border: '4px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        textAlign: 'center'
    },
    mod: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        columnGap: '2em'
    }
}));

const ModalComponent =  props => {

    const classes = useStyles();
    // getModalStyle isn't a pure function, we roll the style only on the first render
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
                    <h4> Resumen: </h4> <p> {props.info.resumen} </p>
                </div>
                <div >
                    <h4 > Clasificación: </h4> <p> {props.info.clasificacion} </p>
                </div>
                <div >
                    <h4 > Dirección Web: </h4> <p> {props.info.direccionWeb} </p>
                </div>
                <div >
                    <h4> Categoría: </h4> <p> {props.info.categoria.descripcion} </p>
                </div>
                <div >
                    <h4> Autor: </h4>   <ul> { props.info.autores.map(autor => 
                                            <li key={autor.idAutor}>
                                                {autor.nombre + ' ' + autor.apellidos}
                                            </li>) } 
                                        </ul>
                </div>
                <div >
                    <h4> Año: </h4> <p> {props.info.año} </p>
                </div>
                <div >
                    <h4> Ubicación: </h4> <p> {props.info.ubicacion.detalle} </p>
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
            <Modal open={open}>
                {body}
            </Modal>
        </div>
    );
}

export default ModalComponent;