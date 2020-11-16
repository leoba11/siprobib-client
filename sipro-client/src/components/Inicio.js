import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import theme from './theme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import library from './images/libraryy.jpg';
const useStyles = makeStyles({
        hero: {
            position: 'relative',
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            "&::before": {
                content: `''`,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: "url(" + library + ")",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(60%)',
            }
        },

        heroContent: {
            position: 'relative',
            color: 'white',
            textAlign: 'center',
            margin: '0.625rem',
        },

        heroTitle: {
            fontSize: '3rem',
            fontWeight: 600,
            marginBottom: 0,
        },

        heroSubtitle: {
            fontSize: '2rem',
            fontWeight: 200,
            marginTop: '1rem',
        },

        contentSite: {
            flex: 1,
        },

        buscador: {
            margin: '5px',
        },

        buscadorPrincipal: {
            display: 'flex',
        }
    }
)

const Inicio = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div >
                <section className={classes.hero}>
                    <div className={classes.heroContent}>
                        <h1 className={classes.heroTitle}>
                            Sistema de Producciones Bibliográficas - SIPROBIB
                        </h1>

                        <h2 className={classes.heroSubtitle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </h2>

                    </div>
                </section>

            </div>
        </ThemeProvider>
    )
}

export default Inicio
