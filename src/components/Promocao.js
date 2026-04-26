import React from "react";
import CardProduto from "./CardProduto";
import styles from './Promocao.module.css';

function Promocao() {
  // Produtos em promoção com preço original e promocional
  const produtosPromocao = [
    { 
      id: 2, 
      nome: "Rambutan", 
      imagem: "/imagens/Rambutan.jpg", 
      precoOriginal: 25.00,
      precoPromocional: 15.00,
      desconto: "40% OFF"
    },
    { 
      id: 5, 
      nome: "Pêssego", 
      imagem: "/imagens/Pessego.jpg", 
      precoOriginal: 15.99,
      precoPromocional: 9.99,
      desconto: "38% OFF"
    },
    { 
      id: 12, 
      nome: "Morango", 
      imagem: "/imagens/Morango.jpg", 
      precoOriginal: 15.99,
      precoPromocional: 9.99,
      desconto: "38% OFF"
    },
    { 
      id: 17, 
      nome: "Pitaya", 
      imagem: "/imagens/Pitaya.jpg", 
      precoOriginal: 24.99,
      precoPromocional: 14.99,
      desconto: "40% OFF"
    },
    { 
      id: 3, 
      nome: "Cereja", 
      imagem: "/imagens/Cereja.jpg", 
      precoOriginal: 19.99,
      precoPromocional: 12.99,
      desconto: "35% OFF"
    },
    { 
      id: 10, 
      nome: "Manga", 
      imagem: "/imagens/Manga.jpg", 
      precoOriginal: 8.99,
      precoPromocional: 4.99,
      desconto: "44% OFF"
    }
  ];

  // Função para formatar preço em Real
  const formatarPreco = (preco) => {
    return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <section id="promocao" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.titulo}>Ofertas Imperdíveis!</h2>
        <p className={styles.subtitulo}>Descontos de até 44% OFF!</p>
      </div>
      
      <div className={styles.grid}>
        {produtosPromocao.map(produto => (
          <div key={produto.id} className={styles.cardPromocao}>
            <div className={styles.etiquetaDesconto}>
              {produto.desconto}
            </div>
            <img 
              src={produto.imagem} 
              alt={produto.nome} 
              className={styles.imagem}
            />
            <h3 className={styles.nome}>{produto.nome}</h3>
            
            <div className={styles.precoContainer}>
              <span className={styles.precoOriginal}>
                {formatarPreco(produto.precoOriginal)}
              </span>
              <span className={styles.precoPromocional}>
                {formatarPreco(produto.precoPromocional)}
              </span>
            </div>
            
            <button className={styles.botao}>
              Comprar Agora
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Promocao;