import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [acao, setAcao] = useState<Game[]>([])
  const [esportes, setEsportes] = useState<Game[]>([])
  const [luta, setLuta] = useState<Game[]>([])
  const [rpg, setRpg] = useState<Game[]>([])
  const [simulacao, setSimulacao] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setRpg(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setSimulacao(res))
  }, [])
  return (
    <>
      <ProductsList title="Ação" background="black" games={acao} />
      <ProductsList title="Esportes" background="gray" games={esportes} />
      <ProductsList title="Luta" background="black" games={luta} />
      <ProductsList title="RPG" background="gray" games={rpg} />
      <ProductsList title="Simulação" background="black" games={simulacao} />
    </>
  )
}

export default Categories
