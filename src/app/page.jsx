import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card/Card"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { Button } from "../components/ui/button"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import styles from "./pagina_inicial.module.css"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className={styles.bannerContent}>
            <div className={styles.bannerBoasMarcador}><p>Para os apaixonados por leitura</p></div>
            <h1 className={styles.bannerContenth1}>Procurando algo novo para ler?</h1>
            <h1 className={styles.bannerContenth1}>Entre para a <span className={styles.bannerContentSpan}>BookLovers</span></h1>
            <h5 className={styles.bannerContentsh5}>Prepare-se para a sua próxima leitura favorita e marque cada capítulo</h5>
            <small>Comece hoje, é de graça</small>
            <Button variant="default">Comece hoje</Button>
          </div>
        </div>
        <section className={styles.bannerFrase}>
          <h3 className={styles.bannerContenth2}>
            Organize sua estante, acompanhe suas metas com precisão e pare de perder tempo com livros que não são para você.
            Nossas recomendações inteligentes e nossa curadoria de assinatura garantem que sua próxima leitura seja sempre incrível.
          </h3>
        </section>
        <section className={styles.bannerContent}>
          <h1 className={styles.bannerContenth1}>Com a <span className={styles.bannerContentSpan}>BookLovers</span> você pode</h1>
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="horizontal"
            className="w-full max-w-xs"
          >
            <CarouselContent className="-mt-1 h-[200px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pt-1 md:basis-1/2">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <section >
          <h1 className={styles.bannerContenth1}>Blog da BookLovers(criar nome diferente)</h1>
          <div>
            <h1>Destaque blog</h1>
          </div>
          <div>
            <h1>Destaque blog</h1>
          </div>
          <div>
            <h1>Destaque blog</h1>
          </div>
          <div>
          </div>
        </section>

        <section className={styles.bannerContent}>
          <h1 className={styles.bannerContenth1}>Sobre nós</h1>
        </section>
        <section>
          <h1>Seção para mostrar como o processo de recebimento dos livros</h1>
        </section>
      </main>
      <Footer />
    </>
  );
}
