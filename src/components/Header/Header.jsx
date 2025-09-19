"use client"

import styles from "./header.module.css"
import Image from "next/image"
import { useState } from "react";

//ui
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const [aberto, setAberto] = useState(false);

  let logo = "/nav-burguer.png"
  return (
    <>
      <header className={styles.headerBar}>
        <nav className={styles.navBar}>
          <div className="">
            <p>logo</p>
          </div>
          <div className={styles.navUl}>
            <ul>
              <Button className={styles.navButton}>
                <p className={styles.navUlp}>Recursos</p>
              </Button>
              <Button className={styles.navButton}>
                <p className={styles.navUlp}>Blog</p>
              </Button>
              <Button className={styles.navButton}>
                <p className={styles.navUlp}>Sobre Nós</p>
              </Button>
            </ul>

            {/* navbar mobile */}
          </div>
          <div className={styles.navBarMobileContent}>
            <DropdownMenu >
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Image
                    height={40}
                    width={40}
                    src={logo}
                    alt="nav colapsada"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[100vw]" align="center" >
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Recursos
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Blog
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Sobre Nós
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <button className={styles.navLogin}>
              Log In
            </button>
          </div>
        </nav>
      </header>



    </>
  )
}