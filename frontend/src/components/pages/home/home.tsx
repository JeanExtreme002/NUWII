import { Flex } from "@radix-ui/themes";

import { Icon } from "@/components";
import { config } from "@/lib/config";
import Header from "@/pages/header";

import { Hero } from "./hero";
import styles from "./home.module.css";


export function HomePage() {
  return (
    <>
      <Header />

      <main className={ styles.homePage }>
        <Flex className={styles.root} direction="row" gap="9">
          <Hero />
        </Flex>
      </main>
      <a href={`https://wa.me/${config.phoneNumber}`}>
        <Icon name={"whatsapp"} className={styles.whatsappButton}/>
      </a>
    </>
  );
}