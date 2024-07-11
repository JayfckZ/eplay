import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  HeaderBar,
  LinkCart,
  LinkItem,
  Links,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
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
          {items.length} <span>&nbsp;- produto(s)</span>
          <img src={carrinho} alt="carrinho" />
        </LinkCart>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link to="/categories" onClick={() => setIsMenuOpen(false)}>
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Novidades
            </Link>
          </LinkItem>
          <LinkItem>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Promoções
            </Link>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
