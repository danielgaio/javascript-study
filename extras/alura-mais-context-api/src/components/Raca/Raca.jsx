import React from 'react'

import RacaSelecionada from '../RacaSelecionada'
import RacaNaoSelecionada from '../RacaNaoSelecionada'

const Raca = props => {
  // const racaFoiSelecionada = Boolean(props.raca.name)
  const racaFoiSelecionada = Boolean(props.raca.imagem);

  return (
    racaFoiSelecionada
    ?
    <RacaSelecionada {...props} />
    :
    <RacaNaoSelecionada />
  )
}

export default Raca
