'use client';
import estilos from './CampoDeBusca.module.css';
// icones
import Image from 'next/image';
import lupa from '/public/assets/lupa.png';

export default function CampoDeBusca({handleBuscarProduto,textoBusca}) {
    return (
        <section className={estilos.container_input}>
            <div className={estilos.box_input}>
                <Image src={lupa}/>     
                <input type='text'
                value={textoBusca}
                    onChange={(event) => handleBuscarProduto(event.target.value)}
                    placeholder='Pesquise aqui um dos pratos do nosso cardápio'
                />
            </div>
        </section>
    )
}