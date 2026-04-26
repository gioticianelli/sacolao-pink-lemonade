import React from "react";
import CardProduto from "./CardProduto";
import produtos from '../dados/produtos';  // ← produtos com S
import styles from './ProdutosLista.module.css';

function ProdutosLista() {
  return (
    <section id="produtos" className={styles.section}>
      <h2 className={styles.titulo}>Escolha sua próxima fruta</h2>
      <div className={styles.grid}>
        {produtos.map(produto => (  // ← produtos com S
          <CardProduto
            key={produto.key}  // ← você usou "key" no array
            nome={produto.nome}
            imagem={produto.imagem}
            preco={produto.preco}
          />
        ))}
      </div>
    </section>
  )
}

export default ProdutosLista;