import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? cores.verde : cores.branco)};
  color: ${cores.branco};
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.verde : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transtion: ease 0.3s;

  &:hover {
    filter: brightness(0.7);
  }
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branco};
  color: ${cores.branco};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
`
