import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HashLink } from 'react-router-hash-link'

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
          <HashLink to="/">
            <h1>
              <img src={logoIcon} alt="EPLAY" />
            </h1>
          </HashLink>
          <nav>
            <S.Links>
              <S.LinkItem>
                <HashLink to="/categories">Categorias</HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink to="/#coming-soon">Novidades</HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink to="/#on-sale">Promoções</HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.LinkCart role="button" onClick={openCart}>
          {items.length} <span>&nbsp;- produto(s)</span>
          <img src={cartIcon} alt="carrinho" />
        </S.LinkCart>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <HashLink to="/categories" onClick={() => setIsMenuOpen(false)}>
              Categorias
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink to="/#coming-soon" onClick={() => setIsMenuOpen(false)}>
              Novidades
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink to="/#on-sale" onClick={() => setIsMenuOpen(false)}>
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
