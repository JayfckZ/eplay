import Section from '../Section'
import { Items, Item, Action } from './styles'
import legacy from '../../assets/images/legacy.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
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
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <Section title="Galeria" background="black">
      <Items>
        {mock.map((media, index) => (
          <Item key={media.url}>
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
  )
}

export default Gallery
