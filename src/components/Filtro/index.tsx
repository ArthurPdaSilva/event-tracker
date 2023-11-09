import React, { useState } from "react";
import style from "./Filtro.module.scss";
import { useSetRecoilState } from "recoil";
import { filtroDeEventosState } from "../../states/atom";
import { IFiltrosDeEventos } from "../../interfaces/IFiltrosDeEventos";

const Filtro: React.FC = () => {
  const setFiltroDeEventos = useSetRecoilState(filtroDeEventosState);
  const [data, setData] = useState("");

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const filtro: IFiltrosDeEventos = {}
    if(data) filtro.data = new Date(data);
    else filtro.data = null;
    setFiltroDeEventos(filtro);
  };

  return (
    <form className={style.Filtro} onSubmit={submeterForm}>
      <h3 className={style.titulo}>Filtrar por data</h3>
      <input
        type="date"
        name="data"
        className={style.input}
        onChange={(evento) => setData(evento.target.value)}
        placeholder="Por data"
        value={data}
      />

      <button className={style.botao}>Filtrar</button>
    </form>
  );
};

export default Filtro;
