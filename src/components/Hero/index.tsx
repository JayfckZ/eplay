import hero from '../../assets/images/fundo_hogwarts.png'
import { Banner, Infos } from './styles'
import Tag from '../Tag'
import Button from '../Button'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${hero})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>Windows</Tag>
        <Tag>Xbox Series X|S</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          Por R$ 190,00
        </p>
        <Button type="button" title="Adicione ao carrinho." variant="primary">
          Adidionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
