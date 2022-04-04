import axios from "axios";

const imagensApiUrl = "https://dog.ceo/api";
const sobreApiUrl = "https://api.thedogapi.com/v1";

const buscaImagemPorRaca = (raca) => {
  return axios
    .get(`${imagensApiUrl}/breed/${raca}/images/random`)
    .then((resposta) => resposta.data.message);
};

const buscaSobreRacas = () => {
  return axios.get(`${sobreApiUrl}/breeds`).then((resposta) => resposta.data);
};

const buscaTodasRacas = () => {
  return axios
    .get(`${imagensApiUrl}/breeds/list/all`)
    .then((resposta) => Object.keys(resposta.data.message));
};

export { buscaImagemPorRaca, buscaSobreRacas, buscaTodasRacas };
