import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        id="on-sale"
        title="Promoções"
        background="gray"
        games={onSaleGames}
        isLoading={isLoadingSale}
      />
      <ProductsList
        id="coming-soon"
        title="Em breve"
        background="black"
        games={soonGames}
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
