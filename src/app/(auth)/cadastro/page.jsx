import Image from "next/image";
import Link from "next/link";

export default function Cadastro(){
    return(<>
    <div className="container_cadastro">
    <div className="box_cadastro">
        <h3>Seja Bem-Vind@!!!</h3>
        <div className="cadastro_input">
            <p>Nome:</p>
            <input type="text" />
            <p>Email:</p>
            <input type="email" />
            <p>Senha:</p>
            <input type="text" />
            <button className="cadastro_btn">Comece já</button>
        </div>
    </div>
    </div>
    
    </>)
}