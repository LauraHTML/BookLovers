import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card/Card"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Button } from "../components/ui/button"

import styles from "./pagina_inicial.module.css"

export default function Home() {
  return (
    <>
        <Header />
          <main>
            <div className="flex flex-col justify-center items-center">
              <div className={styles.bannerBoasVindas}>
                <div className={styles.bannerBoasMarcador}><p>Para os apaixonados por leitura</p></div>
              <h1 className={styles.bannerBoasVindash1}>Procurando algo novo para ler?</h1>
              <h1 className={styles.bannerBoasVindash1}>Entre para a <span className={styles.bannerBoasVindasSpan}>BookLovers</span></h1>
              <h5 className={styles.bannerBoasVindash5}>Prepare-se para a sua próxima leitura favorita e marque cada capítulo</h5>
              <Button variant="default">Comece hoje</Button>
            </div>
            </div>
            <section>
              <h1>Vantagens da BookLovers</h1>
            </section>
            <section >
              <h1>Vantagens de assinar o plano</h1>
              <p>carrossel verissimo</p>
            </section>
            <section>
              <h1>Seção para mostrar como o processo de recebimento dos livros</h1>
            </section>
          </main>
        <Footer />
    </>
  );
}
