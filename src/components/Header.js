import React from 'react';
import { Link } from 'react-router-dom';  // ← já tem, bom!
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.titulo}>Hortifruti Pink Lemonade</h1>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link to="/" className={styles.link}>Início</Link>  {/* ← trocar <a> por <Link> */}
          </li>
          <li>
            <Link to="/produtos" className={styles.link}>Produtos</Link>  {/* ← /produtos (com S) */}
          </li>
          <li>
            <Link to="/Promocao" className={styles.link}>Promoção</Link>
          </li>
          <li>
            <Link to="/contato" className={styles.link}>Contato</Link>  {/* ← /contato */}
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;