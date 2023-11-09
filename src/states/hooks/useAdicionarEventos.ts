import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";
import { obterId } from "../../util";

const useAdicionarEvento = () => {
    const setListaDeEventos = useSetRecoilState(listaDeEventosState);
    return (novoEvento: IEvento) => {
        novoEvento.id = obterId();
        const hoje = new Date();
        if(novoEvento.inicio < hoje) {
            throw new Error("Não é possível adicionar um evento com data inicial maior que hoje");
        }
        return setListaDeEventos((listaAntiga) => [...listaAntiga, novoEvento ]);}
}

export default useAdicionarEvento;