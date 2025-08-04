import { CenterFocusStrong as CenterFocusStrongIcon, InfoOutline as InfoOutlineIcon } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Button,Card, CardContent, List, ListItem, ListItemIcon, ListItemText,   Paper,
Typography ,
} from '@mui/material';
import { green } from '@mui/material/colors';
import { Flex } from "@radix-ui/themes";
import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { BusinessColors, config } from "@/lib";

import person1Image from "./assets/juliana.png"
import person2Image from "./assets/nadja.png"
import styles from "./plans.module.css";

// Lista de planos
const plans = [
  {
    title: "NU Standard*",
    features: [
      'Contabilidade completa',
      'Simples Nacional, Lucro Presumido ou Lucro Real',
      'Pró-labore dos sócios',
      'Abertura ou migração ou desenquadramento grátis',
      'Apuração de impostos e calendário',
      'Certificado digital A1',
      'Aplicativo e portal do cliente web',
    ],
    info: "Plano ideal para Empresas de Serviços com faturamento até R$4.800mi/ano."
  },
  {
    title: "NU Commerce*",
    features: [
      'Contabilidade completa',
      'Simples Nacional, Lucro Presumido ou Lucro Real',
      'Pró-labore dos sócios',
      'Abertura ou migração ou desenquadramento grátis',
      'Apuração de impostos e calendário',
      'Certificado digital A1',
      'Aplicativo e portal do cliente web',
    ],
    info: "Plano ideal para Empresas de Comércio com faturamento até R$4.800mi/ano."
  },
  {
    title: "NU Advanced*",
    features: [
      'Contabilidade completa',
      'Simples Nacional, Lucro Presumido ou Lucro Real',
      'Pró-labore dos sócios',
      'Abertura ou migração ou desenquadramento grátis',
      'Apuração de impostos e calendário',
      'Certificado digital A1',
      'Aplicativo e portal do cliente web',
    ],
    info: "Plano para Empresas de Atividade Mista (Serviço + Comércio ou Serviço + Indústria), com faturamento até R$4.800mi/ano."
  },
  {
    title: "NU MEI*",
    features: [
      'Serviço, Comércio ou Atividade Mista',
      'Contabilidade completa',
      'Pró-labore do empresário',
      'Abertura ou migração grátis',
      'Desenquadramento e transformação jurídica grátis',
      'Apuração de impostos e calendário',
      'Aplicativo e portal do cliente web',
    ],
    info: "Plano ideal para Microempreendedor Individual com faturamento até R$81 mil/ano."
  },
  {
    title: "CARNÊ LEÃO",
    features: [
      'INSS do profissional',
      'Contabilidade completa',
      'Abertura ou migração grátis',
      'Baixa do MEI grátis (pra quem está com atividade irregular no MEI e quer mudar pra modelo autônomo)',
      'Apuração de impostos e calendário',
      'Aplicativo e portal do cliente web',
    ],
    info: "Plano ideal para Autônomo PF com rendimentos até R$81 mil/ano."
  },
  {
    title: "PERSONALIZADO",
    features: [
      'Lucro Presumido ou Lucro Real',
      'Analista dedicado por departamento',
      'Contabilidade completa',
      'Abertura ou migração grátis',
      'Planejamento tributário grátis',
      'Apuração de impostos e calendário',
      'Aplicativo e portal do cliente web',
    ],
    info: "Para empresas com faturamento acima do limite dos planos. Suporte personalizado."
  }
];

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

function highlightTextBold(text: string, substrings: string[]) {
  if (!substrings || substrings.length === 0) return text;

  const pattern = substrings
    .map(str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
  const regex = new RegExp(`(${pattern})`, 'gi');

  return text.split(regex).map((part, i) =>
    substrings.some(sub =>
      part.toLowerCase() === sub.toLowerCase()
    ) ? (
      <strong key={i} style={{fontWeight: "bold"}}>{part}</strong>
    ) : (
      part
    )
  );
}

interface CardPlanProps {
  title: string;
  items: string[];
  info: string;
}

const CardPlan: React.FC<CardPlanProps> = ({ title, items, info }) => {
  const message = `Olá! Venho pelo site da NUWII e estou interessado(a) no plano ${title}.`;
  const whatsappLink = `https://wa.me/${config.phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Box className={styles.planCard} sx={{ position: 'relative', borderRadius: 3 }}>
      {/* Background layer */}
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          left: 8,
          width: '100%',
          height: '100%',
          bgcolor: BusinessColors.Blue,
          borderRadius: 3,
          border: '2px solid black',
          zIndex: 0,
        }}
      />
      {/* Foreground card */}
      <Card
        sx={{
          position: 'relative',
          zIndex: 1,
          borderRadius: 3,
          p: 2,
          border: '2px solid black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: "94%"
        }}
      >
        <CardContent sx={{ flexGrow: 1, paddingBottom: 0 }}>
          <Typography 
            variant="h5" 
            align="center" 
            color={BusinessColors.Blue} 
            fontWeight="bold"     
          >
            {title !== "CARNÊ LEÃO" ? title.split(' ')[0] : <span>CARNÊ <span style={{color: "#000"}}>LEÃO</span></span>}
          </Typography>
          <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
            {title !== "CARNÊ LEÃO" ? title.split(' ').slice(1).join(' ') : <></>}
          </Typography>
          <div className={styles.infoText}>
            <InfoOutlineIcon sx={{fontSize: "13px", marginLeft: "5px"}}/>
            <span style={{marginLeft: "5px"}}>
              {highlightTextBold(info, ["Empresas de Serviços", "Empresas de Comércio", "Empresas de Atividade Mista", "Microempreendedor Individual", "Autônomo PF", "Suporte personalizado."])}
            </span>
          </div>
          <List>
            {items.map((item, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: green[500] }} />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </CardContent>

        {/* WhatsApp Button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            href={whatsappLink}
            target="_blank"
            endIcon={<CenterFocusStrongIcon/>}
            sx={{ backgroundColor: "#fff", color: "#111", borderColor: "#111", borderRadius: "30px" }}
          >
            Saiba mais
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

interface RecommendationCardProps {
  photo: StaticImageData;
  name: string;
  title: string;
  text: string;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ photo, title, name, text }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: '#1c1c1e',
        color: '#fff',
        borderRadius: '12px',
        padding: '32px 24px 48px',
        border: '1px solid #444',
        position: 'relative',
        maxWidth: 400,
        boxShadow: '0 0 10px 0 #1976d2',
        animation: 'shadow-move 2s ease-in-out infinite alternate',
        '@keyframes shadow-move': {
          '0%': {
            boxShadow: '0 0 15px 0 #1976d2',
          },
          '100%': {
            boxShadow: '0 0 15px 3px #1976d2',
          },
        },
      }}
    >
      {/* Aspas */}
      <Box sx={{ fontSize: 120, color: '#fff', position: 'absolute', top: -20, left: 16 }}>
        “
      </Box>

      {/* Título */}
      <Typography variant="h6" fontWeight="bold" sx={{ mt: 4 }}>
        {title}
      </Typography>

      {/* Texto */}
      <Typography variant="body2" sx={{ mt: 2, lineHeight: 1.6, whiteSpace: 'pre-line' }}>
        {text}
      </Typography>

      {/* Rodapé com imagem e nome */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -24,
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#1c1c1e',
          border: '1px solid #444',
          borderRadius: '999px',
          padding: '4px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Image
          src={photo}
          alt={name}
          width={24}
          height={24}
          style={{ borderRadius: '50%' }}
        />
        <Typography variant="caption" color="#b19cd9">@{name}</Typography>
      </Box>
    </Paper>
  );
};

const GradientBar: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '8px',
        borderRadius: '8px',
        background: 'linear-gradient(90deg, #00CFE8, #5F6DF8, #C636F8)',
      }}
    />
  );
};


export function Plans() {
  return (
    <Flex className={styles.root}>
      <Flex className={styles.container}>
        <div className={styles.headerTitle}>
          <span className={styles.lightingText}>
            Nossos planos <span style={{ color: BusinessColors.Blue }}>para todos os tamanhos</span>
          </span>
        </div>
        <div className={styles.headerTitleDetails}>
          <span>
            Aqui na <span style={{ color: BusinessColors.Blue }}>NUWII</span> ao escolher o <span style={{ color: BusinessColors.Blue }}>plano anual</span> você economiza entre <span style={{ color: BusinessColors.Blue }}>10% a 20%</span> e os honorários contábeis de abertura da sua empresa são por nossa conta
          </span>
        </div>
        <Flex className={styles.plansContainer}>
          {plans.map((plan, index) => (
            <CardPlan key={index} title={plan.title} items={plan.features} info={plan.info} />
          ))}
        </Flex>
        <Flex style={{marginTop: "50px", width: "100%", alignItems: "center", justifyContent: "center"}}>
          <div style={{width: "60%"}}>
            <GradientBar/>
          </div>
        </Flex>
        {/* <Flex className={styles.recommendationComponent}>
          <RecommendationCard
            photo={person1Image}
            name="Ju.fraccaroli"
            title="Atendimento Ágil e de Confiança"
            text={`Ter uma equipe dedicada para atender e cuidando da minha empresa, sem precisar enfrentar filas ou passar por várias pessoas até encontrar ajuda de verdade.\nEssa é a diferença da contabilidade que tenho hoje, fazem toda a diferença. Recomendo de olhos fechados!`}
          />
          <RecommendationCard
            photo={person2Image}
            name="profanadjaarruda"
            title="Contabilidade Organizada e Humanizada"
            text={`Meu nome é Nadja, sou cliente da NUWII A há 2 anos e foi o Gabriel junto com sua equipe que organizou tooooda a contabilidade da minha empresa. Começamos na modalidade MEI e hoje já somos uma ME, com tudo perfeitamente organizado. Se pudesse recomendar algo a qualquer empresário seria, sem dúvidas, um suporte de contabilidade como eu tenho. Nunca, nesses 2 anos, precisei resolver nenhuma burocracia com relação a impostos ou taxas. O pessoal da NUWII organiza todos os processos e me deixa super tranquila com relação a essa parte tão chata que é a contabilidade de qualquer empresa. Obrigada, de coração, pelo excelente serviço prestado.`}
          />
        </Flex> */}
      </Flex>
    </Flex>
  );
}
