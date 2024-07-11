import { CardContainer } from './styles'

type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => {
  return (
    <CardContainer>
      <h2>{title}</h2>
      {children}
    </CardContainer>
  )
}

export default Card
