import { useRecoilValue } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { eventosFiltradosState } from "../seletores";

const useListaDeEventos = () => {
  return useRecoilValue<IEvento[]>(eventosFiltradosState);
}

export default useListaDeEventos