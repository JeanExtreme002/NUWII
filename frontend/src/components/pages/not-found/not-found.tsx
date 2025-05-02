import { Button, Flex, Text } from "@radix-ui/themes";
import { useRouter } from "next/router";

import { Icon } from "@/components";
import { Header } from "@/pages/header";

import styles from "./not-found.module.css";


export function NotFoundPage() {
  const router = useRouter();

  const goBackHome = (event: Event) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <>
      <Header/>

      <main className={ styles.notFoundPage }>
        <Flex 
          align="center" 
          justify="center" 
          direction="column" 
          gap="9" 
          style={{ marginLeft: "15vw", marginRight: "15vw" }}
        >
          <div className={ styles.container }>

            <div className={ styles.leftComponent }>
              <Text weight="medium" size="8">Página não encontrada</Text>

              <Text as="div" weight="medium" size="3" color="gray" style={{ marginTop: "3vh" }}>
                O conteúdo que você buscou está indisponível ou foi removido.
              </Text>

              <Button 
                color="blue"
                onClick={ goBackHome as any } 
                style={{ cursor: "pointer", marginTop: "5vh", fontSize: "12px" }}
              >
                IR PARA A PÁGINA INICIAL
              </Button>
            </div>

            <div className={ styles.rightComponent }>
              <Icon name="404" className={styles.icon} />
            </div>
          </div>
        </Flex>
      </main>
    </>
  );
}