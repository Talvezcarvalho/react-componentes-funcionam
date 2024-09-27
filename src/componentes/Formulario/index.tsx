import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'
import { IColaborador } from '../../interfaces/Colaborador'

interface FormularioProps {
    aoCadastrar: (colaborador: IColaborador) => void
    times: string[]
    cadastrarTimes: (time: {nome: string, cor: string}) => void
}

const Formulario = ({aoCadastrar, times, cadastrarTimes} :FormularioProps) => {

    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [cargo, setCargo]  = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setnomeTime] = useState('')
    const [corTime, setcorTime] = useState('')


    const aoSubmeter = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        console.log('form enviado',id, nome, cargo, imagem, time )
        aoCadastrar({
            id,
            nome,
            cargo,
            imagem,
            time
        })
        setId('')
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <Campo
                    obrigatorio={true}
                    label='Cargo' 
                    placeholder='Digite seu cargo '
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>
                <Campo 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Times'
                    items={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao>
                    Criar Colaborador
                </Botao>
            </form>
            <form className="formulario" onSubmit={(evento) => {
                evento.preventDefault()
                cadastrarTimes({nome: nomeTime, cor: corTime})
            }}>

                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    obrigatorio
                    label='Nome'
                    placeholder='Digite o nome do seu time '
                    valor={nomeTime}
                    aoAlterado={valor => setnomeTime(valor)}/>
                <Campo
                    obrigatorio
                    type='color'
                    label='Cor' 
                    placeholder='Digite a cor do seu time'
                    valor={corTime}
                    aoAlterado={valor => setcorTime(valor)}/>
                    <Botao>
                        Criar time
                    </Botao>
            </form>
        </section>
    )
}

export default Formulario