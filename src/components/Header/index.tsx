import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HeaderBar, LinkCart, LinkItem, Links } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/">Novidades</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/">Promoções</Link>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <LinkCart onClick={() => openCart()}>
        {items.length} - produto(s)
        <img src={carrinho} alt="carrinho" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header
