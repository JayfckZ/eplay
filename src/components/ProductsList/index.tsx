import Game from '../../models/Game'
import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ title, background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            image={game.image}
            title={game.title}
            category={game.category}
            system={game.system}
            description={game.description}
            infos={game.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
