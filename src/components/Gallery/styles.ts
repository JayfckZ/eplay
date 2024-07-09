import styled from 'styled-components'
import { cores } from '../../styles'

export const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 97.5%;
  border: 2px solid transparent;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`

export const Item = styled.li`
  position: relative;

  > img {
    border: 2px solid ${cores.branco};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 100%;
      transition: opacity 0.3s ease;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.73);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: bold;

    img {
      cursor: pointer;
      width: 22px;
      height: 22px;
    }
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  > img {
    width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
    object-fit: cover;
  }
`
