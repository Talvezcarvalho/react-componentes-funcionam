import "./colaborador.css";
import { IoIosCloseCircle } from "react-icons/io";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { IColaborador } from "../../interfaces/Colaborador";


interface ColaboradorProps {
  colaborador: IColaborador;
  corDeFundo: string;
  aoDeletar: (id: string) => void;
  aoFavoritar: (id: string) => void;
}
const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }:ColaboradorProps) => {
  function favoritar() {
    aoFavoritar(colaborador.id);
  }

  const propsFavorito = {
    size: 25,
    onClick: favoritar,
  };

  const temData = colaborador.data ? new Date(colaborador.data).toLocaleDateString() : "";

  return (
    <div className="colaborador">
      <IoIosCloseCircle
        size={25}
        className="deletar"
        onClick={() => {
          aoDeletar(colaborador.id);
        }}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <h5>{colaborador.data? new Date(colaborador.data).toLocaleDateString() : null}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            <MdFavorite {...propsFavorito} color="#ff0000" />
          ) : (
            <MdFavoriteBorder {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
