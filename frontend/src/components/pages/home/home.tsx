import { Flex } from "@radix-ui/themes";

import Header from "@/pages/header";

import { Hero } from "./hero";
import styles from "./home.module.css";


export function HomePage() {
  return (
    <>
      <section id="home">
        <Header />
      </section>

      <main className={ styles.homePage }>
        <Flex className={styles.root} direction="row" gap="9">
          <Hero />
        </Flex>
      </main>
    </>
  );
}