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

function highlightText(text: string, substrings: string[]) {
  if (!substrings || substrings.length === 0) return text;

  const pattern = substrings
    .map(str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
  const regex = new RegExp(`(${pattern})`, 'gi');

  return text.split(regex).map((part, i) =>
    substrings.some(sub =>
      part.toLowerCase() === sub.toLowerCase()
    ) ? (
      <strong key={i} style={{color: BusinessColors.Blue}}>{part}</strong>
    ) : (
      part
    )
  );
}

export function Hero() {

  const description1 = `Nós transformamos números em crescimento com propósito...`
  const description2 = `Acreditamos que cada empresa carrega uma história única. E é com responsabilidade, conhecimento e tecnologia que ajudamos você a escrever os próximos capítulos.`;
  const description3 = `Oferecemos soluções empresariais alinhadas aos seus propósitos, com menos burocracia e mais eficiência, para que possa focar no que realmente importa: O crescimento da sua empresa.`;

  const getMotivationText = () => {
    return (
      <span className={ styles.lightingText }>
        <span className={ styles.glowingText }>
          Todos querem <span style={{color: BusinessColors.Blue}}>chegar</span> ao topo...
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
            <div className={styles.description}>
              <div>{highlightText(description1, ["crescimento"])}</div>
              <div>{highlightText(description2, ["história única", "responsabilidade, conhecimento e tecnologia"])}</div>
              <div>{highlightText(description3, ["soluções empresariais alinhadas aos seus propósitos", "O crescimento da sua empresa"])}</div>
            </div>
            <div className={styles.benefitsContainer}>
              <div className={ styles.mobileButton }>
                <AnimatedShadowButton
                  variant="outlined" 
                  target="_blank"
                  href={`https://wa.me/${config.phoneNumber}?text=Olá! Venho pelo site da NUWII, e possuo interesse em saber mais sobre os serviços :)`}
                >
                  <span className={ styles.mobileButtonText }>QUERO DESCOMPLICAR MINHA CONTABILIDADE</span>
                </AnimatedShadowButton>
              </div>
              <Image className={styles.benefitsImage} src={benefitsImg} alt="Benefits"/>
            </div>
          </div>
          <div className={ styles.rightComponent }>
            <div className={ styles.mobileMotivationText }>
              {getMotivationText()}
            </div>
            <Image className={styles.heroImage} src={heroImg} alt="Hero"/>
            <div className={ styles.desktopButton }>
              <AnimatedShadowButton
                variant="outlined" 
                target="_blank"
                href={`https://wa.me/${config.phoneNumber}?text=Olá! Venho pelo site da NUWII, e possuo interesse em saber mais sobre os serviços :)`}
              >
                QUERO DESCOMPLICAR MINHA CONTABILIDADE
              </AnimatedShadowButton>
            </div>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
}