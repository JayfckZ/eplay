import Tag from '../Tag'
import { Card, Titulo, Descricao, Infos } from './styles'

type Props = {
  image: string
  title: string
  category: string
  system: string
  description: string
  infos: string[]
}
const Product = ({
  image,
  title,
  category,
  system,
  description,
  infos
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descricao>{description}</Descricao>
  </Card>
)

export default Product
