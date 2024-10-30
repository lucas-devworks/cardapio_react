import Image from "next/image";
import estilos from './Cards.module.css';


export default function Cards(props) {
    return (
        <div className={estilos.container_card}>
            <div className={estilos.box_imagem}>
                <Image src={props.imagem} />
            </div>

            <div className={estilos.box_conteudo}>
                <h3>{props.nome}</h3>
                <span>{props.categoria}</span>
                <p>{props.descricao}</p>
                <small>R$ {props.preco}</small>
            </div>
        </div>
    )
}