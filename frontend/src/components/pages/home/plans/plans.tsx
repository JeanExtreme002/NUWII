import { Flex } from "@radix-ui/themes";
import styles from "./plans.module.css";
import { BusinessColors } from "@/lib";

export function Plans() {

  return (
    <Flex className={ styles.root }>
      <Flex className={ styles.container }>
        <div className={styles.headerTitle}>
          <span className={ styles.lightingText }>
            Nossos planos <span style={{color: BusinessColors.Blue}}>para todos os tamanhos</span>
          </span>
        </div>
      </Flex>
    </Flex>
  );
}