import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import Button from '../Button'
import Tag from '../Tag'

import { parseToBrl, getTotalPrices } from '../../utils'
import { RootReducer } from '../../store'
import { remove, close } from '../../store/reducers/cart'

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const removeFromCart = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => closeCart()} />
      <S.SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.media.thumbnail} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{parseToBrl(item.prices.current)}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                  />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>{items.length} jogo(s) no carrinho.</S.Quantity>
            <S.Prices>
              Total de {parseToBrl(getTotalPrices(items))}
              <span>Até 6x sem juros</span>
            </S.Prices>
            <Button
              onClick={goToCheckout}
              title="Clique para continuar sua compra."
              type="button"
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-cart">O carrinho está vazio.</p>
        )}
        <Button
          variant="secondary"
          title="Clique para voltar à página."
          type="button"
          onClick={closeCart}
        >
          Voltar à página
        </Button>
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
