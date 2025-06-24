import { Flex, Heading } from "@radix-ui/themes";

import { Image } from "@/components/shared";
import { BusinessColors } from "@/lib";

import styles from "./about.module.css";
import brazilImage from "./assets/brazil.png";
import heroImage from "./assets/hero2.png";
import notesImage from "./assets/notes.png";
import teamImage from "./assets/team.svg";

export function About() {
  return (
    <>
      <Flex className={ styles.root } direction={"column"}>
        <div className={styles.fade}></div>
        <Flex className={ styles.container }>
          <Heading size={"9"} className={ styles.headerTitle }>
            <div>
              <span style={{color: BusinessColors.Blue}}>A</span> NUWI<span style={{color: BusinessColors.Blue}}>I</span>
            </div>
          </Heading>
          <Flex className={styles.storyContainer} direction={"column"}>
            <div className={styles.headerTitleDetails}>
              A NUWI<span style={{color: BusinessColors.Blue}}>I</span> é uma empresa contábil digital, especialista em soluções para empresários que querem simplificar rotinas, economizar impostos e aumentar seu faturamento.
            </div>
            <Flex className={styles.storyContent}>
              <Flex>
                <Image className={styles.teamImage} src={teamImage} alt="Team" />
              </Flex>
              <Flex style={{justifyContent: "space-between"}}>
                <div className={styles.storyText}>
                  Diferente da contabilidade online, onde o cliente  faz tudo sozinho, nós oferecemos um <span style={{color: BusinessColors.Blue}}>serviço digital completo</span>, rápido, simplificado e 100% virtual. Com nossa abordagem digital, <span style={{color: BusinessColors.Blue}}>você ganha liberdade</span> para focar no que realmente importa: fazer seu negócio florescer.
                </div>
                <div style={{flex: 1}}>
                  <Image className={styles.notesImage} src={notesImage} alt="Notes" />
                </div>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex className={ styles.root }>
        <div className={styles.brazilContainer}>
          <Flex className={ styles.container } style={{alignItems: "center"}}>
            <div>
              <Image className={styles.brazilImage} src={brazilImage} alt="Hero" />
            </div>
          </Flex>
        </div>
      </Flex>
      <Flex className={ styles.root } direction={"column"}>
        <Flex className={ styles.container }>
          <Flex className={styles.storyContainer} direction={"column"}>
            <Flex className={styles.storyContent}>
              <Flex className={styles.heroContainer}>
                <div className={styles.storyLargeText}>
                  Em um mercado cada vez mais competitivo, a <span style={{color: BusinessColors.Blue}}>contabilidade</span> vai além de uma obrigação legal. <br/><br/><span style={{fontSize: "20px"}}>É o <span style={{color: BusinessColors.Blue}}>alicerce</span> estratégico para otimizar a saúde financeira, garantir conformidade fiscal e promover o <span style={{color: BusinessColors.Blue}}>crescimento</span> sustentável do seu negócio.</span>
                </div>
                <div style={{flex: 1}}>
                  <Image className={styles.heroImage} src={heroImage} alt="Hero" />
                </div>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}