import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card/Card";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { Button } from "../components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import styles from "./pagina_inicial.module.css";

export default function Home() {

  const vantagens = [
    {
      imagem: "/imgCarrossel.png", //0
      title: "O que os autores não contam (mas nós sim)",
      texto: "Uma espiada exclusiva nos bastidores da criação literária. Entrevistas, perfis e análises que revelam o processo criativo, as manias e os pensamentos dos seus autores favoritos."
    },
    {
      imagem: "/imgCarrossel.png",// 1
      title: "Escolhidos a dedo: encontre livros que vão marcar sua vida",
      texto: " Mais do que simples resenhas, compartilhamos experiências. Aqui você encontra recomendações de livros com o poder de transformar, inspirar e ficar para sempre na sua memória."
    },
    {
      imagem: "/imgCarrossel.png",// 2
      title: "Sua dose semanal de inspiração, direto da estante para você",
      texto: "Toda semana, um conteúdo novo para alimentar sua paixão. De listas de lançamentos a guias de leitura por gênero, nosso blog é a fonte de inspiração que sua rotina de leitor merece."
    }
  ]

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center gap-25">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className={styles.bannerContent}>
            <div className={styles.bannerBoasMarcador}>
              <p>Para os apaixonados por leitura</p>
            </div>
            <h1 className={styles.bannerContenth1}>
              Procurando algo novo para ler?
            </h1>
            <h1 className={styles.bannerContenth1}>
              Entre para a{" "}
              <span className={styles.bannerContentSpan}>BookLovers</span>
            </h1>
            <div className="flex flex-col gap-3 items-center text-center">
              <h5 className={styles.bannerContentsh5}>
                Prepare-se para a sua próxima leitura favorita e marque cada
                capítulo
              </h5>
              <Button variant="default">Comece hoje</Button>
              <small>Comece hoje, é de graça</small>
            </div>
          </div>
        </div>
        <section className={styles.bannerContent}>
          <h1 className={styles.bannerContenth1}>
            Com a <span className={styles.bannerContentSpan}>BookLovers</span>
            você pode
          </h1>
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="horizontal"
            className="w-full max-w-[95vw]"
          >
            <CarouselContent className="-mt-1">
              {vantagens.map((item, index) => {
                return (
                  <CarouselItem key={index} className="pt-1 md:basis-full">
                    <div className={styles.carouselItem}>
                      <div className="w-full">
                        <h2>{item.title}</h2>
                        <p className={styles.carouselItemTexto}>{item.texto}</p>
                      </div>
                      <div className="w-full">
                        <Image src={item.imagem} width={550} height={250} alt="ola" />
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <section className={styles.bannerBlogContent}>
          <div className="flex flex-col gap-2 items-center m-5">
            <h1 className={styles.bannerContenth1}>
              Folha de Rosto
            </h1>
            <p>Em busca de inspiração para a sua próxima leitura? Este é o seu espaço.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <div className={styles.cartaoDestaqueBlog}>
              <div className="flex flex-row justify-between p-3" >
                <small>20</small>
                <small>21</small>
              </div>
              <div className={styles.linha}></div>
              <div className="flex flex-col items-center text-center p-3">
                <Image src="/quadriculado.png" width={150} height={150} alt="imagem teste"/>
                <h3>O que os autores não contam (mas nós sim)</h3>
              </div>
              <div className={styles.linha}></div>
              <div className="">
                <div className={styles.decricaoBlog}>
                  <p> Uma espiada exclusiva nos bastidores da criação literária. Entrevistas, perfis e análises que revelam o processo criativo, as manias e os pensamentos dos seus autores favoritos.</p>
                </div>
                <div className={styles.linha}></div>
                <div className="flex h-15 w-full justify-center items-center">
                  <span className={styles.bannerContentSpan}>BookLovers</span>
                </div>
              </div>
            </div>

            <div className={styles.cartaoDestaqueBlog}>
              <div className="flex flex-row justify-between p-3" >
                <small>20</small>
                <small>21</small>
              </div>
              <div className={styles.linha}></div>
              <div className="flex flex-col items-center text-center p-3">
                <Image src="/quadriculado.png" width={150} height={150} alt="imagem teste"/>
                <h3>Escolhidos a dedo: encontre livros que vão marcar sua vida</h3>
              </div>
              <div className={styles.linha}></div>
              <div className="">
                <div className={styles.decricaoBlog}>
                  <p>Mais do que simples resenhas, compartilhamos experiências. Aqui você encontra recomendações de livros com o poder de transformar, inspirar e ficar para sempre na sua memória.</p>
                </div>
                <div className={styles.linha}></div>
                <div className="flex h-15 w-full justify-center items-center">
                  <span className={styles.bannerContentSpan}>BookLovers</span>
                </div>
              </div>
            </div>

            <div className={styles.cartaoDestaqueBlog}>
              <div className="flex flex-row justify-between p-3" >
                <small>20</small>
                <small>21</small>
              </div>
              <div className={styles.linha}></div>
              <div className="flex flex-col items-center text-center p-3">
                <Image src="/quadriculado.png" width={150} height={150} alt="imagem teste"/>
                <h3>Sua dose semanal de inspiração, direto da estante para você</h3>
              </div>
              <div className={styles.linha}></div>
              <div className="">
                <div className={styles.decricaoBlog}>
                  <p>Toda semana, um conteúdo novo para alimentar sua paixão. De listas de lançamentos a guias de leitura por gênero, nosso blog é a fonte de inspiração que sua rotina de leitor merece.</p>
                </div>
                <div className={styles.linha}></div>
                <div className="flex h-15 w-full justify-center items-center">
                  <span className={styles.bannerContentSpan}>BookLovers</span>
                </div>
              </div>
            </div>

          </div>
          <Button variant="secondary">Ir para blog</Button>
        </section>
        
        <section className={styles.bannerContent}>
          <div className={styles.bannerBoasMarcador}>
            <p>Para os apaixonados por leitura</p>
          </div>
            <h1 className={styles.bannerContenth1}>
              Assinatura BookLovers
            </h1>
            <div>
              <h2>Comece escolhendo sua assinatura</h2>
            </div>
        </section>

        <p>video</p>
        <p>passo a passo</p>

        <section className={styles.bannerBlog}>
          <div className={styles.bannerFraseContent}>
            <div className={styles.linhaTexto}>
            <div className={styles.frame}><h3>Organize sua estante,</h3></div> <Image src="/pilhaLivros.png" width={70} height={10} alt="estante" /> <div className={styles.frame}><h3>acompanhe suas</h3></div>
            </div>
            <div className={styles.linhaTexto}>
            <div className={styles.frame}><h3>metas com precisão e pare de perder tempo com livros que não são para você. Nossas recomendações inteligentes </h3></div><Image src="/ia.png" width={40} height={20} alt="estante" />
            </div>
            <div className={styles.linhaTexto}>
            <div className={styles.frame}><h3>e nossa curadoria de assinatura </h3></div><Image src="/metas.png" width={70} height={10} alt="meta" /><div className={styles.frame}><h3>garantem que sua próxima leitura seja sempre incrível.</h3> </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
