import { Flex } from "@radix-ui/themes";
import { Icon } from "@/components";
import { Header } from "@/pages/header";
import { config } from "@/lib/config";
import styles from "./home.module.css";
import { Hero } from "./hero";


export function HomePage() {
  const title = config.website.title + " | " + config.website.subtitle

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