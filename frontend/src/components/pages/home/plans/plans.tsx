import { Flex } from "@radix-ui/themes";

import { BusinessColors } from "@/lib";

import styles from "./plans.module.css";

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