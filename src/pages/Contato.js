import React from 'react';

function Contato() {
  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Fale Conosco</h1>
      
      <div style={styles.card}>
        <h2>Informações de Contato</h2>
        <p>Email: contato@pinklemonade.com</p>
        <p> WhatsApp: (11) 99999-9999</p>
        <p>Horário: Segunda a Sábado, 8h às 18h</p>
        
        <h2>Redes Sociais</h2>
        <p>Instagram: @pinklemonade</p>
        <p>Facebook: /pinklemonade</p>
        
        <h2>Endereço</h2>
        <p>Rua das Frutas, 123 - Jardim Frescor</p>
        <p>São Paulo - SP</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  titulo: {
    textAlign: 'center',
    color: '#818807',
    marginBottom: '30px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  }
};

export default Contato;