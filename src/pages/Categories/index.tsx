import ProductsList from '../../components/ProductsList'
import {
  useGetActionQuery,
  useGetSportsQuery,
  useGetFightQuery,
  useGetRPGQuery,
  useGetSimulationQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionQuery()
  const { data: sportsGames } = useGetSportsQuery()
  const { data: fightGames } = useGetFightQuery()
  const { data: rpgGames } = useGetRPGQuery()
  const { data: simulationGames } = useGetSimulationQuery()

  if (actionGames && sportsGames && fightGames && rpgGames && simulationGames) {
    return (
      <>
        <ProductsList title="Ação" background="black" games={actionGames} />
        <ProductsList title="Esportes" background="gray" games={sportsGames} />
        <ProductsList title="Luta" background="black" games={fightGames} />
        <ProductsList title="RPG" background="gray" games={rpgGames} />
        <ProductsList
          title="Simulação"
          background="black"
          games={simulationGames}
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
