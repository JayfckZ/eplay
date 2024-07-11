import ProductsList from '../../components/ProductsList'
import {
  useGetActionQuery,
  useGetSportsQuery,
  useGetFightQuery,
  useGetRPGQuery,
  useGetSimulationQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } = useGetActionQuery()
  const { data: sportsGames, isLoading: isLoadingSports } = useGetSportsQuery()
  const { data: fightGames, isLoading: isLoadingFight } = useGetFightQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRPGQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationQuery()

  return (
    <>
      <ProductsList
        id="action"
        title="Ação"
        background="black"
        games={actionGames}
        isLoading={isLoadingAction}
      />
      <ProductsList
        id="sport"
        title="Esportes"
        background="gray"
        games={sportsGames}
        isLoading={isLoadingSports}
      />
      <ProductsList
        id="fight"
        title="Luta"
        background="black"
        games={fightGames}
        isLoading={isLoadingFight}
      />
      <ProductsList
        id="rpg"
        title="RPG"
        background="gray"
        games={rpgGames}
        isLoading={isLoadingRPG}
      />
      <ProductsList
        id="simulation"
        title="Simulação"
        background="black"
        games={simulationGames}
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
