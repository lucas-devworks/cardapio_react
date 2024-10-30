'use client';
import estilos from './Categorias.module.css';
import Image from 'next/image';
// icones
import entrada from '/public/assets/entrada.png';
import massa from '/public/assets/massa.png';
import carne from '/public/assets/carne.png';
import bebida from '/public/assets/bebidas.png';
import salada from '/public/assets/salada.png';
import sobremesa from '/public/assets/sobremesa.png';


export default function Categorias ({handleFiltro, botaoClicado}) {
    return (
        <section className={estilos.container_categorias}>

            <div className={estilos.container_botao}>
                
                <button 
                    onClick={() => handleFiltro('Entradas')}
                    className={botaoClicado === 'Entradas' ? estilos.botao_on : estilos.apagar}>
                    <Image src={entrada}/>
                    <p>Entradas</p>
                </button>

                <button
                    onClick={() => handleFiltro('Massas')}
                    className={botaoClicado === 'Massas' ? estilos.botao_on : estilos.botao}>
                    <Image src={massa}/>
                    <p>Massas</p>
                </button>

                <button 
                    onClick={() => handleFiltro('Carnes')}
                    className={botaoClicado === 'Carnes' ? estilos.botao_on : estilos.botao}>
                    <Image src={carne}/>
                    <p>Carnes</p>
                </button>

                <button
                    onClick={() => handleFiltro('Bebidas')}
                    className={botaoClicado === 'Bebidas' ? estilos.botao_on : estilos.botao}>
                    <Image src={bebida}/>
                    <p>Bebidas</p>
                </button>

                <button
                    onClick={() => handleFiltro('Saladas')}
                    className={botaoClicado === 'Saladas' ? estilos.botao_on : estilos.botao}>
                    <Image src={salada}/>
                    <p>Saladas</p>
                </button>

                <button
                    onClick={() => handleFiltro('Sobremesas')}
                    className={botaoClicado === 'Sobremesas' ? estilos.botao_on : estilos.botao}>
                    <Image src={sobremesa}/>
                    <p>Sobremesa</p>
                </button>
            </div>

        </section>

    )
}