import { IColaborador } from "../../interfaces/Colaborador";
import Colaborador from "../Colaborador";
import "./time.css";
import hexToRgba from "hex-to-rgba";

interface TimeProps {
  time: {
    id: string;
    nome: string;
    cor: string;
  };
  colaboradores: IColaborador[];
  aoDeletar: (id: string) => void;
  mudaCor: (cor: string, id: string) => void;
  aoFavoritar: (id: string) => void;
}


const Time = ({ time, colaboradores, aoDeletar, mudaCor, aoFavoritar } :TimeProps) =>  {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: hexToRgba(time.cor, "0.6"),
        }}
      >
        <input
          onChange={(evento: React.ChangeEvent<HTMLInputElement>) => {
            mudaCor(evento.target.value, time.id);
          }}
          value={time.cor}
          type="color"
          className="input-cor"
        ></input>
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, indice) => (
            <Colaborador
              key={indice}
              colaborador={colaborador}
              corDeFundo={time.cor}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
