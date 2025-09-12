import {Addchart as AddchartIcon, CheckCircleOutline as CheckCircleOutlineIcon} from '@mui/icons-material';
import { Button } from "@mui/material";
import { Flex, Heading } from "@radix-ui/themes";

import { Image } from "@/components/shared";
import { BusinessColors } from "@/lib";

import styles from "./about.module.css";
import brazilImage from "./assets/brazil.png";
import heroImage from "./assets/hero2.jpg";
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
              A NUWI<span style={{color: BusinessColors.Blue}}>I</span> é para quem quer ir além da contabilidade tradicional.
            </div>
            <div className={styles.headerTitleDetails2}>
              Somos uma <span style={{color: BusinessColors.Blue}}>contabilidade digital inteligente</span>, feita para empresários que buscam simplicidade, economia e crescimento real.
            </div>
            <Flex className={styles.storyContent}>
              <Flex>
                <Image className={styles.teamImage} src={teamImage} alt="Team" />
              </Flex>
              <Flex style={{justifyContent: "space-between"}}>
                <div className={styles.storyText}>
                  Você conta com um <span style={{color: BusinessColors.Blue}}>serviço digital completo</span>, que uma tecnologia de ponta, com um atendimento humano e descomplicado. <br/><br/>Enquanto você foca no que ama, nós cuidamos da burocracia e do seu crescimento.
                  <div>
                    <div className={styles.circleItem}>
                      <CheckCircleOutlineIcon style={{color: BusinessColors.Blue}}/> Mais de 150 empresas já começaram com a gente.
                    </div>
                    <div className={styles.circleItem}>
                      <CheckCircleOutlineIcon style={{color: BusinessColors.Blue}}/> +10 estados atendidos com excelência.
                    </div>
                    <div className={styles.circleItem}>
                      <CheckCircleOutlineIcon style={{color: BusinessColors.Blue}}/> +5 anos ajudando negócios a prosperar.
                    </div>
                  </div>
                  <div style={{paddingBottom: "10px"}}>
                    Simplifique. Economize. <span style={{color: BusinessColors.Blue}}>Cresça com a NUWII.</span>
                  </div>
                  <Button
                    className={styles.servicesButton}
                    variant="outlined"
                    href="#services"
                    endIcon={<AddchartIcon />}
                    sx={{
                      marginTop: "10px",
                      color: "#111",
                      borderRadius: "50px",
                      backgroundColor: "#fff",
                    }}
                  >
                    <span className={styles.servicesButton}>
                      Começar agora
                    </span>
                  </Button>
                </div>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex className={ styles.root }>
        <div className={styles.brazilContainer}>
          <Flex>
            <Flex style={{justifyContent: "center", width: "100%"}}>
              <Image className={styles.brazilImage} src={brazilImage} alt="Hero" />
            </Flex>
          </Flex>
        </div>
      </Flex>
      <Flex className={ styles.darkRoot } direction={"column"}>
        <Flex className={ styles.container }>
          <Flex className={styles.storyContainer} direction={"column"}>
            <Flex className={styles.storyContent}>
              <Flex className={styles.heroContainer}>
                <div className={styles.storyLargeText}>
                  Entendemos que <span style={{color: BusinessColors.Blue}}>a contabilidade não deve ser um obstáculo nesse processo</span>, <span style={{fontSize: "22px"}}>mas sim a base que sustenta a sua evolução.</span><br/><br/> <span style={{fontSize: "20px"}}>Cuidamos dos números, da burocracia e da estratégia, para que você tenha liberdade de crescer o seu negócio, <span style={{color: BusinessColors.Blue, fontSize: "23px", wordSpacing: "4px"}}>com a leveza e segurança que precisa</span>.</span>
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