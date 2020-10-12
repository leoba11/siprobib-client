import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import ModalComponent from "./modalComponent";

const columns = [
    { id: 'titulo', label: 'Nombre', align: 'center'},
    { id: 'direccionWeb', label: 'Direccion', align: 'center'},
    { id: 'clasificacion', label: 'Género', align: 'center'},
    { id: 'año', label: 'Año de publicación', align: 'center'},
    { id: 'informacion', label: '', align: 'center'}
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 500,
    },
    col: {
        backgroundColor: 'grey',
        // color: 'black'
    }
});


const TablaProducciones = props => {
    const classes = useStyles();
    
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>

            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell
                                    className={classes.col}
                                    key={column.id}
                                    align={column.align}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.production.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map( row => {
                                return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.idProduccion}>
                                            {columns.map(column => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        { column.id !== 'informacion' ? value : <ModalComponent info={row} /> }
                                                    </TableCell>
                                                );
                                            })}

                                        </TableRow>
                                );
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={props.production.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default TablaProducciones;
