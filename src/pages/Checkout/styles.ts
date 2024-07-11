import styled from 'styled-components'
import { cores } from '../../styles'

type InputProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type ButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || 'auto'};
  align-items: flex-end;
`

export const InputGroup = styled.div<InputProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
  }

  input,
  select {
    height: 32px;
    width: 100%;
    padding: 0 8px;
    backgrounf-color: ${cores.branco};
    border: 1px solid ${cores.branco};
  }
`

export const TabButton = styled.button<ButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weigth: bold;
  color: ${cores.branco};
  background-color: ${(props) => (props.isActive ? cores.verde : cores.preto)};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;
  transition: ease 0.3s;

  img {
    margin-right: 8px;
  }
`
