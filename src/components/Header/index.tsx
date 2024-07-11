import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import * as S from './styles'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import logoIcon from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <img src={logoIcon} alt="EPLAY" />
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link to="/categories">Categorias</Link>
              </S.LinkItem>
              <S.LinkItem>
                <Link to="/">Novidades</Link>
              </S.LinkItem>
              <S.LinkItem>
                <Link to="/">Promoções</Link>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.LinkCart onClick={() => openCart()}>
          {items.length} <span>&nbsp;- produto(s)</span>
          <img src={cartIcon} alt="carrinho" />
        </S.LinkCart>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link to="/categories" onClick={() => setIsMenuOpen(false)}>
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Novidades
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Promoções
            </Link>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
