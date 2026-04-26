import React from 'react';
import Destaque from '../components/Destaque';
import Promocao from '../components/Promocao';
import Banner from '../components/Banner';
import ProdutosLista from '../components/ProdutosLista';
import Sobre from '../components/Sobre';

function Home() {
    return (
        <div>
            <Destaque />
            <Banner />
            <ProdutosLista />
            <Sobre />
        </div>
    );
}

export default Home;