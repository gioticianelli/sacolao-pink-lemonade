import React from 'react';
import styles from './Footer.module.css';


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>ticianelligiovana@gmail.com | (11) 94114-4636</p>

                <div className={styles.sociais}>
                    <a href="https://www.linkedin.com/in/giovanaticianelli/" > Linkedin</a>
                    <a href="https://github.com/gioticianelli" > GitHub</a>
                </div>

                <p className={styles.creditos}>
                    © 2026 - Desenvolvido por Giovana - Todos os direitos reservados
                </p>

                <p className={styles.ano}>
                    Projeto React - 2026
                </p>
            </div>
        </footer>
    );
}

export default Footer;