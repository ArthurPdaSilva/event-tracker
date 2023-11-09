import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

const useAtualizarEvento = () => {
    const setListaDeEventos = useSetRecoilState(listaDeEventosState);
    return (eventoAtualizado: IEvento) => {
        return setListaDeEventos((listaAntiga) => {
        const indice = listaAntiga.findIndex((item) => item.id === eventoAtualizado.id);
        return [
          ...listaAntiga.slice(0, indice),
          eventoAtualizado,
          ...listaAntiga.slice(indice + 1),
        ];
      });}
}

export default useAtualizarEvento;