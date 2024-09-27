import './banner.css'

interface BannerProps {
    enderecoImagem: string;
    textoAlternativo?: string
}

const Banner = ( {enderecoImagem, textoAlternativo}:BannerProps) => { 

    //JSX
    return (<header className="cabecalho"> 
        <img src={enderecoImagem} alt={textoAlternativo}/>
    </header>)
}

export default Banner