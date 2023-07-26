export default function Cart() {
  let 장바구니 = [
    {
      name: 'Tomatoes',
      price: 40,
      number: 4
    },
    {
      name: 'Pasta',
      price: 13,
      number: 2
    }
  ]
    return (
      <div>
        <h4 className="title">Cart</h4>
        <Banner content="롯데카드" />
        <Banner content="현대카드" />
        {
          장바구니.map((item)=>{
            return(
              <CartItem name={item.name} price={`$${item.price}`} number={item.number}/>
            )
          })
        }
      </div>
    )
}

function Banner(props){
  return <h5 className="banner">{props.content} 결제 행사중</h5>
}

function CartItem(props){
    return(
        <div className="cart-item">
          <p>{props.name}</p>
          <p>{props.price}</p>
          <p>{props.number}</p>
        </div>
    )
}