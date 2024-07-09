import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Button from '../Button'
import Tag from '../Tag'
import {
  CartContainer,
  Overlay,
  SideBar,
  Prices,
  Quantity,
  CartItem
} from './styles'
import { remove, close } from '../../store/reducers/cart'
import { formataPreco } from '../ProductsList'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const removeFromCart = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrices = () => {
    return items.reduce((acc, atual) => {
      return (acc += atual.prices.current!)
    }, 0)
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => closeCart()} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formataPreco(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeFromCart(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho.</Quantity>
        <Prices>
          Total de {formataPreco(getTotalPrices())}
          <span>Até 6x sem juros</span>
        </Prices>
        <Button title="Clique para continuar sua compra." type="button">
          Continuar com a compra
        </Button>
        <Button
          variant="secondary"
          title="Clique para voltar à página."
          type="button"
          onClick={closeCart}
        >
          Voltar à página
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
