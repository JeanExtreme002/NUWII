import { Flex } from "@radix-ui/themes";

import Header from "@/pages/header";

import { About } from "./about";
import { Hero } from "./hero";
import styles from "./home.module.css";


export function HomePage() {
  return (
    <>
      <section className={styles.section} id="home">
        <Header />
      </section>

      <main className={ styles.homePage }>
        <Flex className={styles.root} direction="column">
          <Hero />
          <section className={styles.section} id="about">
            <About />
          </section>
        </Flex>
      </main>
    </>
  );
}