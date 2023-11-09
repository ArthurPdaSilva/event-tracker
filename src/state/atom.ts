// Cada estado é um átomo
import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: [
    {
      descricao: "Estudar React",
      inicio: new Date("2023-11-09T09:00"),
      fim: new Date("2022-01-15T13:00"),
      completo: false,
      id: 1642342747,
    },
    {
      descricao: "Estudar Recoil",
      inicio: new Date("2023-11-09T09:00"),
      fim: new Date("2022-01-16T11:00"),
      completo: false,
      id: 1642342959,
    },
  ],
});
