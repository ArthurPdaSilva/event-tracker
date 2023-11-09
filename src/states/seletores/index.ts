import { selector } from "recoil";
import { filtroDeEventosState, listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

export const eventosFiltradosState = selector({
  key: "eventosFiltradosState",
  get: ({ get }) => {
    const filtro = get(filtroDeEventosState);
    const todosOsEventos = get(listaDeEventosState);
    const eventosFiltrados = todosOsEventos.filter((evento) => {
      if (!filtro.data) return true;
      const mesmoDia =
        filtro.data.toISOString().slice(0, 10) ===
        evento.inicio.toISOString().slice(0, 10);
      return mesmoDia;
    });

    return eventosFiltrados;
  },
});

export const eventosAsync = selector({
  key: "eventosAsync",
  get: async () => {
    const response = await fetch("http://localhost:8080/eventos");
    const eventos: IEvento[] = await response.json();
    return eventos.map((e) => ({
      ...e,
      inicio: new Date(e.inicio),
      fim: new Date(e.fim),
    }));
  },
});
