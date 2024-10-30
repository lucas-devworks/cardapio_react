// array produtos
import { produtos } from "@/data/data-produtos";

// retorna o array com a lista de produtos

//Responsável pela filtragem das categorias através do botão
export const filtrarCategoria = (categoria) => {
    return produtos.filter((produto) => produto.categoria === categoria);
}

// busca um produto através do nome, categoria e até mesmo pela descrição
export const buscarProduto = (textoDigitado) => {
    return produtos.filter(
        (produto) =>
                produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
                produto.categoria.toLowerCase().includes(textoDigitado.toLowerCase()) ||
                produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase()) 
        );
}

export const produtosEntradas = filtrarCategoria('Entradas');