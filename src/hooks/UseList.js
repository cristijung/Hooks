import { useState } from "react";

function UseList() {
    const [list, setList] = useState([
        { item: 'Feijão'},
        { item: 'Batata'},
        { item: 'Tomate'},
        { item: 'Ovos'}
    ])

    function addProdutos (produto) {
        setList([...list, produto])
    }

    return [list, addProdutos]
}

export default UseList;