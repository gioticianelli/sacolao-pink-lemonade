import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Banner.module.css';


function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.textoBanner}>
                <h2>Frescor que te encanta!</h2>
                <p>Produtos orgânicos do cammpo para seu lar.</p>
                <Link to="/promocao" className={styles.botao}>
                Ver ofertas</Link>
            </div>
        </div>

    )
}

export default Banner;