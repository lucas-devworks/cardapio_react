'use client';
import { useState } from "react";
import Head from "next/head";
import estilos from "@/styles/Home.module.css";
// componenes
import Cards from "@/components/Cards";
import Categorias from "@/components/Categorias";
import CampoDeBusca from "@/components/CampoDeBusca";
// Funções
import {filtrarCategoria, buscarProduto, produtosEntradas} from "@/service";

export default function Home() {
  // states
  const [ListaDeProdutos, setListaDeProdutos] = useState(produtosEntradas);
  const [textoBusca, setTextoBusca] = useState('');
  const [botaoClicado, setBotaoClicado] = useState("Entradas");

  // busca texto digitado com regra
  const handleFiltro = (textoDigitado) => {
    setTextoBusca(textoDigitado);
    textoDigitado.length >= 3 && setListaDeProdutos(buscarProduto(textoDigitado));
    setBotaoClicado("");
  };

  const handleBuscarProduto = (categoria) => {
    setTextoBusca('');
    setListaDeProdutos(filtrarCategoria(categoria));
    setBotaoClicado(categoria);

  }

  // atualiza o ano do copyright
  const anoAtual = () => {
    let data = new Date();
    let anoAtual = data.getFullYear();
    return anoAtual;
  }


  return (
    <div className={estilos.container_pai}>

      <Head>
        <title>Projeto Cardápio Dinâmico</title>
        <meta name="description" content="Projeto para colocar em prática os conhecimentos obtidos no curso de React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      {/* cabeçalho */}
      <header className={estilos.container_banner}>
        <div className={estilos.box_texto}>
          <h1>RESTAURANT</h1>
          <p>De pratos clássicos a criações surpreendentes,
          nosso cardápio é um requinte de sabores refinados.
          </p>
        </div>
      </header>
      {/* main */}
      <main className={estilos.main}>
        <Categorias
            handleFiltro={handleBuscarProduto}
            botaoClicado={botaoClicado}
         />
         
        <CampoDeBusca
            handleBuscarProduto={handleFiltro}
            textoBusca={textoBusca}
        />
        
        <section className={estilos.secao_cards}>
          <div className={estilos.texto_cardapio}>
                <h2>Cardápio</h2>
          </div>
          {/* cards */}
          <div className={estilos.container_cards}>
            { // ARRAY MAP PERCORRENDO DADOS
            ListaDeProdutos.map((produto, index) => (
                <Cards
                  key={index}
                  imagem={produto.imagem}
                  nome={produto.nome}
                  categoria={produto.categoria}
                  descricao={produto.descricao}
                  // usando métodos para deixar 2 decimais no final e substituir o ponto por virgula
                  preco={produto.preco.toFixed(2).replace('.',',')}
                />
              ))
            }

          </div>
          </section>
      </main>
      <footer className={estilos.rodape}>
          <small>copyright &copy; {anoAtual()} - <span>Lucas Teixeira Santos</span></small>
      </footer>

    </div>
  );
}
