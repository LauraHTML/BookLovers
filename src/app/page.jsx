import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card/Card"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
        <Header />
          <main>
            <div className="flex flex-col justify-center items-center">
              <h1>Procurando algo novo para ler? Entre para o BookLovers</h1>
              <button>Cadastre-se</button>
            </div>
            <section >
              <h1>O que você pode fazer com a BookLovers</h1>
              <p>carrossel verissimo</p>
            </section>
          </main>
        <Footer />
    </>
  );
}
