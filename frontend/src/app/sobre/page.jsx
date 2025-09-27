import Image from "next/image";
import Link from "next/link";

export default function Sobre(){
    return(
        <>
        <div className="banner">
        <h1>Sobre a Book<span className="italico">Lovers</span></h1>
        </div>
        <div className="imagens">
            {/* primeira box */}
            <div className="box pri-box">
            <img src="/livro.jpg" className="box-img-top" alt="..." />
            </div>
            {/* segunda box */}
            <div className="box seg-box">
            <img src="/livraria_cima.jpg" className="box-img-top" alt="..." />
            </div>
            {/* terceira box */}
            <div className="box ter-box">
            <img src="/livros.jpg" className="box-img-top" alt="..." />
            </div>
            {/* quarta box */}
            <div className="box qua-box">
            <img src="/caderno_leitura.jpg" className="box-img-top" alt="..." />
            </div>
            {/* quinta box */}
            <div className="box qui-box">
            <img src="/caderno_de_leitura.jpg" className="box-img-top" alt="..." />
            </div>
            {/* sexta box */}
            <div className="box hex-box">
            <img src="/livraria.jpg" className="box-img-top" alt="..." />
            </div>
        </div>
        <div className="banner">
            <h1>Objetivos da Book<span className="italico">Lovers</span></h1>
            </div>
        <div className="objetivos">
            <div className="objetivos_content">
                <div className="objetivo">
                <Image
                className= ""
                src="/livro-icon.svg"
                alt="Vermelho"
                width={35}
                height={35}
                />
                    <p>Estimular o hábito da leitura para diversos públicos</p>
                </div>
            </div>
            <div className="objetivos_content">
                <div className="objetivo">
                <Image
                className= ""
                src="/book-open-solid.svg"
                alt="Vermelho"
                width={35}
                height={35}
                />
                    <p>Criar conteúdos sobre lançamentos, resenhas e listas de leitura para engajar os leitores.</p>
                </div>
            </div>
            <div className="objetivos_content">
                <div className="objetivo">
                <Image
                className= ""
                src="/bookmark-solid.svg"
                alt="Vermelho"
                width={35}
                height={35}
                    />
                    <p>Garantir um processo de compra seguro e eficiente</p>
                </div>
            </div>
        </div>

        <div className="assinatura">
            <div className="banner">
            <h1>Sobre a <span className="italico">Assinatura</span></h1>
            </div>
            <div className="vantagens">
            <div className="vantagens_content">
                    <div className="assinar">
                        <p><b className="italico">Descubra um mundo de histórias esperando por você!</b></p>
                            <p>Comece a construir sua biblioteca dos sonhos hoje mesmo! </p>
                        <button className="btn_assinar">comece hoje</button>
                    </div>
                    <div className="vantagens_list">
                        <ul>
                            <li><b>Receba livros novos todo mês:</b> Mergulhe em um novo mundo a cada mês com um livro escolhido a dedo para você.</li>
                            <li><b>Descontos exclusivos:</b> Aproveite descontos especiais em toda a livraria, incluindo livros, produtos de papelaria e outros itens.</li>
                            <li><b>Ganhe um diário de leitura:</b> Registre suas reflexões, pensamentos e citações favoritas em um lindo diário de leitura personalizado.</li>
                        </ul>
                    </div>
                </div>
            </div>
                
        </div>

        </>)
};