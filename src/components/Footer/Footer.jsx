import Image from "next/image"
import styles from "./footer.module.css"

export default function Header() {
    return(
        <>
        <footer className={styles.footer_content}>
          <div className={styles.comece_hoje}>
            <div className={styles.borda_comece_hoje}>
              <div>
               <h5>Entre para a <span>BookLovers</span> hoje</h5>
                <p>Descubra novos livros para ler todo todo mês</p> 
              </div>
              <button className={styles.button_cadastro}>
                <p>Comece Hoje</p>
              </button>
            </div>
          </div>
        <div className={styles.divLivros}>
          <div className={styles.div_pagina_assinatura}>
            <p>Assinatura</p>
          </div>
          <div className={styles.div_pagina_papelaria}>
            <p>Papelaria</p>
          </div>
          <div className={styles.div_pagina_leitura}>
            <p>Diário de Leitura</p>
          </div>
          <div className={styles.div_pagina_recomendacoes}>
            <p>Recomendações</p>
          </div>
          <div className={styles.div_pagina_sobre}>
            <p>Sobre Nós</p>
          </div>
          <div className={styles.div_pagina_contato}>
            <p>Contato</p>
          </div>
          </div>
    </footer>
        </>
    )
}