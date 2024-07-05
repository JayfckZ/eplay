import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import star_wars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import diablo from '../../assets/images/diablo.png'
import fifa from '../../assets/images/fifa.png'
import street from '../../assets/images/street.png'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4 - Remake',
    image: resident,
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['R$ 199,90', '-10%']
  },
  {
    id: 2,
    title: 'Resident Evil 4 - Remake',
    image: resident,
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['R$ 199,90', '-10%']
  },
  {
    id: 3,
    title: 'FIFA 23',
    image: fifa,
    category: 'Esporte',
    system: 'PS5',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    infos: ['R$ 99,90', '-50%']
  },
  {
    id: 4,
    title: 'FIFA 23',
    image: fifa,
    category: 'Esporte',
    system: 'PS5',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    infos: ['R$ 99,90', '-50%']
  }
]

const embreve: Game[] = [
  {
    id: 5,
    title: 'Diablo 4',
    image: diablo,
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['05/04']
  },
  {
    id: 6,
    title: 'Star Wars Jedi Survivor',
    image: star_wars,
    category: 'Aventura',
    system: 'Windows',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    infos: ['05/04']
  },
  {
    id: 7,
    title: 'Street Fighter 6',
    image: street,
    category: 'luta',
    system: 'Windows',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    infos: ['05/04']
  },
  {
    id: 8,
    title: 'The Legend of Zelda - TOK',
    image: zelda,
    category: 'RPG',
    system: 'Switch',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    infos: ['05/04']
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList title="Promoções" background="gray" games={promocoes} />
    <ProductsList title="Em breve" background="black" games={embreve} />
  </>
)

export default Home
