import "./campo-texto.css";

interface CampoProps {
  aoAlterado: (valor: string) => void;
  placeholder: string;
  label: string;
  valor: string;
  type?: string;
  obrigatorio?: boolean;
}

const Campo = ({
  type = "text",
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false,
}:CampoProps) => {
  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={(evento: React.ChangeEvent<HTMLInputElement>) => aoAlterado(evento.target.value)}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Campo;
