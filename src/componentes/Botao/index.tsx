import { ReactElement, ReactNode } from 'react';
import './botao.css';
import React from 'react';

interface BotaoProps {
    children: ReactNode;
}

const Botao = ({children} : BotaoProps) => {
    return (<button className="botao">
        {children}
    </button>)
}

export default Botao;