class Game {
  id: number
  image: string
  title: string
  category: string
  system: string
  description: string
  infos: string[]

  constructor(
    id: number,
    image: string,
    title: string,
    category: string,
    system: string,
    description: string,
    infos: string[]
  ) {
    this.id = id
    this.image = image
    this.title = title
    this.category = category
    this.system = system
    this.description = description
    this.infos = infos
  }
}

export default Game
