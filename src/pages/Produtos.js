import React from 'react';
import CardProduto from '../components/CardProduto';
import produtos from '../dados/produtos';

function Produtos() {
  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Todos os Nossos Produtos</h1>
      <p style={styles.subtitulo}>São {produtos.length} opções fresquinhas para você!</p>
      
      <div style={styles.grid}>
        {produtos.map(produto => (
          <CardProduto
            key={produto.id}
            nome={produto.nome}
            imagem={produto.imagem}
            preco={produto.preco}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  titulo: {
    textAlign: 'center',
    color: '#818807',
    fontSize: '2rem',
    marginBottom: '10px',
  },
  subtitulo: {
    textAlign: 'center',
    color: '#F2600C',
    fontSize: '1.2rem',
    marginBottom: '40px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '25px',
  }
};

export default Produtos;