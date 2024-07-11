import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (width < ${breakpoints.tablet}) {
    margin: 0;
    display: block;
  }
`
export const NavMobile = styled.nav`
  display: none;
  &.is-open {
    display: block;
  }
`
export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a {
    color: ${cores.branco};
    text-decoration: none;
    font-weight: bold;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (width < ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (width < ${breakpoints.tablet}) {
    margin: 0;
    a {
      display: block;
      padding: 16px 0;
    }
  }
`

export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }

  @media (width < ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const Hamburguer = styled.div`
  width: 32px;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${cores.branco};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
