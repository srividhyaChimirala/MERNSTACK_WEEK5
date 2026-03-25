function Product (props){  
 // {}
  const { productObj }=props;
    return (
   <div className="shadow-2xl p-3 bg-amber-100">
   <h2 className="text-2xl text-blue-200">{productObj.title}</h2>
   <h2> {productObj.description}</h2>
   <h2 >{productObj.price}</h2>
   </div>
)
}
export default Product;