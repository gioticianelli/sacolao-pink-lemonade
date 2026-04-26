import React from 'react';
import styles from './Sobre.module.css';


function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Sobre o Hortifruti Pink Lemonade </h2>
        <p className={styles.texto}>
           Nascemos com missão de levar frescor, sabor e alegria para sua mesa. 
          Somos um sacolão com amor em cada detalhe, oferecendo frutas, verduras e legumes 
          orgânicos de pequenos produtores locais. Tudo com muito carinho e um toque especial 
          que só o Pink Lemonade tem! 
          Aqui você encontra produtos selecionados, qualidade impecável e um atendimento 
          doce como limonada rosa. Venha fazer parte da nossa família!
        </p>
      </div>
    </section>
  );
}


export default Sobre;