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
        <ProductsList
          id="action"
          title="Ação"
          background="black"
          games={actionGames}
        />
        <ProductsList
          id="sport"
          title="Esportes"
          background="gray"
          games={sportsGames}
        />
        <ProductsList
          id="fight"
          title="Luta"
          background="black"
          games={fightGames}
        />
        <ProductsList id="rpg" title="RPG" background="gray" games={rpgGames} />
        <ProductsList
          id="simulation"
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
