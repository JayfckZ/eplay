import { useState } from 'react'
import Section from '../Section'
import { Items, Item, Action, Modal, ModalContent } from './styles'
import legacy from '../../assets/images/legacy.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'

interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: legacy
  },
  {
    type: 'image',
    url: legacy
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/BtyBjOW8sGY?si=8qgoGEbdPByrBthT'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    type: 'image',
    url: '',
    isVisible: false
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      url: '',
      type: 'image'
    })
    console.log('Fecha')
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() =>
                setModal({
                  isVisible: true,
                  url: media.url,
                  type: media.type
                })
              }
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}.`}
              />
              <Action>
                <img src={getMediaIcon(media)} alt="Clique para expandir." />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} onClick={() => closeModal()} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
