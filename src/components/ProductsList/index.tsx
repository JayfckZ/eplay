import * as S from './styles'
import { Game } from '../../pages/Home'
import { parseToBrl } from '../../utils'
import Product from '../Product'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
}

const ProductsList = ({ title, background, games, id }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }
  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <S.Title>{title}</S.Title>
        <S.List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                image={game.media.thumbnail}
                title={game.name}
                category={game.details.category}
                system={game.details.system}
                description={game.description}
                infos={getGameTags(game)}
                id={game.id}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
