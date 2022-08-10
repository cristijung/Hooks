import UseList from '../hooks/UseList'


function ComprasList() {
  const [prods, addProdutos] = UseList(); 

  return (
    <>
      <ul>
        {prods.map((prod) => (<li>{ prod.item }</li>))}        
      </ul>
      <button onClick={() => addProdutos({ item: "Arroz" })}>Adicione mais um produto</button>     
  
    </>
  );
}

export default ComprasList;