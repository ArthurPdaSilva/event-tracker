// Cada estado é um átomo
import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltrosDeEventos } from "../interfaces/IFiltrosDeEventos";
import { eventosAsync } from "./seletores";

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: eventosAsync,
});

export const filtroDeEventosState = atom<IFiltrosDeEventos>({
  key: "filtroDeEventosState",
  default: {},
});
