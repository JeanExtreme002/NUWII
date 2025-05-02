import { Flex } from "@radix-ui/themes";

import { Image } from "@/components";
import { BusinessColors } from "@/lib";

import benefitsImg from "./assets/benefits.png"
import heroImg from "./assets/hero.png"
import styles from "./hero.module.css";

export function Hero() {

  const description1 = `Acreditamos que cada empresa carrega uma história única. E é com responsabilidade, conhecimento e tecnologia que ajudamos você a escrever os próximos capítulos — fazer o seu negócio florescer.`
  const description2 = `Oferecemos uma contabilidade moderna, próxima e descomplicada, com menos burocracia para focar no que realmente importa.`

  const getMotivationText = () => {
    return (
      <span className={ styles.lightingText }>
        <span className={ styles.glowingText }>
          Todos querem <span style={{color: BusinessColors.Blue}}>chegar</span> no topo...
        </span>
      </span>
    )
  }

  return (
    <Flex className={ styles.root }>
      <Flex className={ styles.container }>
        <div className={ styles.motivationText }>
          {getMotivationText()}
        </div>
        <Flex className={ styles.rowContainer }>
          <div className={ styles.leftComponent }>
            <div style={{color: BusinessColors.Blue}}>
              Transformamos números em crescimento com propósito!!
            </div>
            <div className={styles.description}>
              <div>{description1}</div>
              <div>{description2}</div>
            </div>
            <div className={styles.benefitsContainer}>
              <Image className={styles.benefitsImage} src={benefitsImg} alt="Benefits"/>
            </div>
          </div>
          <div className={ styles.rightComponent }>
            <div className={ styles.mobileMotivationText }>
              {getMotivationText()}
            </div>
            <Image className={styles.heroImage} src={heroImg} alt="Hero"/>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
}