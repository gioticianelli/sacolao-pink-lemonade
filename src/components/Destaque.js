import React from "react";
import CardProduto from "./CardProduto";
import styles from './ProdutosLista.module.css';

function Destaque() {
  // Array de produtos em destaque (definido DENTRO da função)
  const produtoEstacao = [
    { id: 1, nome: "Banana", imagem: "/imagens/Banana.jpg", preco: "R$3,99/kg" },
    { id: 7, nome: "Maçã", imagem: "/imagens/Maca.jpg", preco: "R$5,99/kg" },
    { id: 9, nome: "Uva", imagem: "/imagens/Uva.jpg", preco: "R$10,99/kg" },
    { id: 14, nome: "Laranja", imagem: "/imagens/Laranja.jpg", preco: "R$3,49/kg" },
    { id: 15, nome: "Limão", imagem: "/imagens/Limao.jpg", preco: "R$2,99/kg" },
    { id: 16, nome: "Maracujá", imagem: "/imagens/Maracuja.jpg", preco: "R$8,50/kg" },
    { id: 18, nome: "Ameixa", imagem: "/imagens/Ameixa.jpg", preco: "R$11,99/kg" }
  ];
   
  return (
    <section id="destaques" className={styles.section}>
      <h2 className={styles.titulo}>Frutas da estação - Outono</h2>
      <div className={styles.grid}>
        {produtoEstacao.map(item => (
          <CardProduto
            key={item.id}
            nome={item.nome}
            imagem={item.imagem}
            preco={item.preco}
          />
        ))}
      </div>
    </section>
  );
}

export default Destaque;