import React from 'react';
import styles from './CardProduto.module.css';

function CardProduto({nome, imagem, preco}){
  return(
    <div className={styles.card}>
      <img src={imagem} alt= {nome} className={styles.imagem}/>
      <h3 className={styles.nome}>{nome}</h3>
      <p className={styles.preco}>{preco}</p>
      <button className={styles.botao}>Comprar</button>
    </div>
  )
}

export default CardProduto;
