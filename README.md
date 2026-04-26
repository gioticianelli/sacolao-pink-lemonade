# 🍋 Hortifruti Pink Lemonade

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![React Router](https://img.shields.io/badge/React_Router-6.20.0-CA4245?logo=react-router)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel)

##  Sobre o Projeto

O **Hortifruti Pink Lemonade** é um site de e-commerce para um hortifruti, desenvolvido como projeto de estudo em **React**. O site apresenta uma loja virtual de frutas com design responsivo, navegação entre páginas e seções de produtos em destaque e promoções.

###  Funcionalidades

- ✅ Página inicial com banner, produtos em destaque e seção "Sobre"
- ✅ Listagem completa de produtos
- ✅ Seção de promoções com preços destacados em vermelho
- ✅ Página de contato com informações da loja
- ✅ Navegação entre páginas sem recarregar (React Router)
- ✅ Design responsivo (funciona em dispositivos móveis)
- ✅ Estilização com CSS Modules (estilos isolados por componente)

---

##  Componentes Criados

| Componente | Arquivo | Descrição |
|------------|---------|-----------|
| **Header** | `Header.js` | Cabeçalho com logo e menu de navegação (React Router) |
| **Banner** | `Banner.js` | Chamada principal com botão para página de promoções |
| **CardProduto** | `CardProduto.js` | Componente reutilizável para exibir nome, imagem e preço |
| **ProdutosLista** | `ProdutosLista.js` | Lista todos os produtos usando `.map()` |
| **Destaque** | `Destaque.js` | Seção com frutas da estação (Outono) |
| **Promocao** | `Promocao.js` | Ofertas especiais com preço original riscado e preço promocional em vermelho |
| **Sobre** | `Sobre.js` | Texto explicativo sobre a história da loja |
| **Footer** | `Footer.js` | Rodapé com contatos, redes sociais e créditos |

### Páginas (React Router)

| Página | Rota | Componentes |
|--------|------|-------------|
| Home | `/` | Destaque + Banner + ProdutosLista + Sobre |
| Produtos | `/produtos` | Lista completa de produtos |
| Promoção | `/promocao` | Produtos em oferta |
| Contato | `/contato` | Informações de contato |

---

##  Paleta de Cores

| Cor | Código | Utilização |
|-----|--------|------------|
| Verde Oliva | `#818807` | Header, Footer |
| Azul Celeste | `#6CA2E8` | Destaques, hover |
| Laranja Médio | `#F28B0C` | Botões secundários |
| Laranja Forte | `#F2600C` | Botão principal, preços |
| Terracota | `#D9310B` | Bordas, etiquetas de desconto |

---

##  Tecnologias Utilizadas

- **React.js** - Biblioteca para construção da interface
- **React Router DOM** - Navegação entre páginas
- **CSS Modules** - Estilização isolada por componente
- **Vercel** - Hospedagem e deploy contínuo

---

##  Como executar localmente

```bash
# Clone o repositório
git clone https://github.com/gioticianelli/sacolao-pink-lemonade.git

# Acesse a pasta do projeto
cd sacolao-pink-lemonade

# Instale as dependências
npm install

# Execute o projeto
npm start
```

---

### Deploy
O site está hospedado na Vercel:
🔗 Link do projeto: https://sacolao-pink-lemonade.vercel.app

---

### Mídias

https://github.com/user-attachments/assets/145bf2c8-84aa-4e16-a7ba-9093d385bd18

<p align="center">
  <img src="https://github.com/user-attachments/assets/4f36a08c-91e0-43c4-b8d8-b3e9842956fc" width="45%" />
  <img src="https://github.com/user-attachments/assets/112e887f-ca27-4891-a0a4-2d985dcfa0bf" width="45%" />
</p>
