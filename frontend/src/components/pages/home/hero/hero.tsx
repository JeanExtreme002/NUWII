import { Send as SendIcon } from '@mui/icons-material';
import { Button, styled } from "@mui/material"
import { Flex } from "@radix-ui/themes";

import { Image } from "@/components";
import { BusinessColors, config } from "@/lib";

import benefitsImg from "./assets/benefits.png"
import heroImg from "./assets/hero.png"
import styles from "./hero.module.css";

const AnimatedShadowButton = styled(Button)({
  color: BusinessColors.Blue,
  borderColor: BusinessColors.Blue,
  paddingBlock: '20px',
  paddingInline: '100px',
  boxShadow: '0 0 10px 0 #1976d2',
  borderRadius: '100px',
  marginBottom: '1vh',
  animation: 'shadow-move 2s ease-in-out infinite alternate',
  '@keyframes shadow-move': {
    '0%': {
      boxShadow: '0 0 15px 0 #1976d2',
    },
    '100%': {
      boxShadow: '0 0 20px 5px #1976d2',
    },
  },
});

function highlightText(text: string, substring: string) {
  return text.split(new RegExp(`(${substring})`, 'gi')).map((part, i) =>
    part.toLowerCase() === substring.toLowerCase() ? <span key={i} style={{color: BusinessColors.Blue, fontSize: "22px"}}>{part}</span> : part
  );
}

export function Hero() {

  const description1 = `Acreditamos que cada empresa carrega uma história única. E é com responsabilidade, conhecimento e tecnologia que ajudamos você a escrever os próximos capítulos — fazer o seu negócio florescer.`
  const description2 = `Oferecemos uma contabilidade moderna, próxima e descomplicada, com menos burocracia para focar no que realmente importa.`

  const description2Element = highlightText(description2, "contabilidade moderna");  

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
              <div>{description2Element}</div>
            </div>
            <div className={styles.benefitsContainer}>
              <AnimatedShadowButton
                endIcon={<SendIcon />}
                variant="outlined" 
                href={`https://wa.me/${config.phoneNumber}?text=Ol%C3%A1%21%20Venho%20pelo%20site%20da%20NUWII%2C%20e%20possuo%20interesse%20em%20saber%20mais%20sobre%20os%20servi%C3%A7os%20%3A%29`}
              >
                Começar agora
              </AnimatedShadowButton>
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