/* eslint-disable react/no-unescaped-entities */
import { Box, Card, CardContent, Chip, Divider, Paper, Typography } from "@mui/material";
import { Flex } from "@radix-ui/themes";
import { ReactNode } from "react";

import { BusinessColors } from "@/lib";

import styles from "./services.module.css";

const cards = [
  {
    titulo: "ASSESSORIA HUMANIZADA",
    descricao:
      "Para empresários e pessoas físicas que buscam regularização e pagamento mínimo de impostos",
  },
  {
    titulo: "ABERTURA DE EMPRESA",
    descricao:
      "Você conta com uma especialista para abrir o seu CNPJ de forma rápida, sem sair de casa e sem cobrança de honorários de abertura",
  },
  {
    titulo: "A SUA TROCA DE CONTADOR",
    descricao:
      "Transfira sua contabilidade para nosso escritório digital a qualquer momento do ano",
  },
  {
    titulo: "CONTABILIDADE COMPLETA",
    descricao:
      "Além da contabilidade completa, fornecemos soluções com nossos parceiros para tornar seu dia a dia mais tranquilo",
  },
];

interface BusinessServiceCardProps {
  title1: string
  description1: ReactNode
  title2: string
  description2: ReactNode
}

const BusinessServiceCard = (props: BusinessServiceCardProps) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Card
        className={styles.businessServiceCard}
        sx={{
          width: 320,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          backgroundColor: '#2f2f2f',
          color: '#f5f5f5',
          boxShadow: 4,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            align="center"
            sx={{
              fontWeight: 'bold',
              backgroundColor: '#4f4f4f',
              color: "#fff",
              borderRadius: 2,
              py: 0.5,
              boxShadow: '0 0 10px 0 ' + BusinessColors.Blue,
              animation: 'shadow-move1 2s ease-in-out infinite alternate',
              '@keyframes shadow-move1': {
                '0%': {
                  boxShadow: '0 0 15px 0 ' + BusinessColors.Blue,
                },
                '100%': {
                  boxShadow: '0 0 15px 3px ' + BusinessColors.Blue,
                },
              },
            }}
          >
            {props.title1}
          </Typography>

          <Typography variant="body2" align="center" mt={2}>
            {props.description1}
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.businessServiceCard}
        sx={{
          width: 320,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
          backgroundColor: '#f0f0f0',
          color: '#212121',
          boxShadow: 4,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            align="center"
            sx={{
              fontWeight: 'bold',
              backgroundColor: BusinessColors.LightBlue,
              color: '#212121',
              borderRadius: 2,
              py: 0.5,
              boxShadow: '0 0 10px 0 ' + BusinessColors.LightBlue,
              animation: 'shadow-move2 2s ease-in-out infinite alternate',
              '@keyframes shadow-move2': {
                '0%': {
                  boxShadow: '0 0 15px 0 ' + BusinessColors.Blue,
                },
                '100%': {
                  boxShadow: '0 0 20px 5px ' + BusinessColors.LightBlue,
                },
              },
            }}
          >
            {props.title2}
          </Typography>

          <Typography variant="body2" align="center" mt={2}>
            {props.description2}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export function Services() {
  return (
    <Flex className={styles.root}>
      <Box className={ styles.container }>
        <div className={styles.headerTitle}>
          Nossos Serviços
        </div>
        <span className={ styles.lightingText }>
          <div className={styles.headerDescription}>
            A solução completa da NUWI<span style={{color: BusinessColors.Blue}}>I</span> para o seu negócio.
          </div>
        </span>

        <Flex
          wrap="wrap"
          gap="4"
          justify="start"
          style={{ marginTop: "24px" }}
          className={styles.serviceCardsContainer}
        >
          {cards.map((card, index) => (
            <Paper
              key={index}
              elevation={3}
              className={styles.serviceCard}
              sx={{
                width: "100%",
                borderRadius: 2,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                flexShrink: 0,
              }}
            >
              {/* Título */}
              <Box
                sx={{
                  backgroundColor: BusinessColors.LightBlue,
                  py: 2,
                  px: 2,
                  textAlign: "center",
                }}
              >
                <div className={styles.serviceCardTitle}>
                  {card.titulo}
                </div>
              </Box>

              {/* Linha divisória */}
              <Box
                sx={{
                  height: "1px",
                  backgroundColor: "#000",
                  width: "100%",
                }}
              />

              {/* Descrição */}
              <Box
                sx={{
                  backgroundColor: "#fff",
                  flexGrow: 1,
                  p: 2,
                  height: "100%",
                }}
              >
                <Typography variant="body2">{card.descricao}</Typography>
              </Box>
            </Paper>
          ))}
        </Flex>
        <Divider sx={{ borderBottomWidth: 5 }} className={styles.divider} variant="middle" orientation="horizontal" flexItem>
          <Chip 
            sx={{
              backgroundColor: BusinessColors.Black,
              color: BusinessColors.LightBlue,
              fontSize: "15px",
              padding: "20px",
              fontFamily: "'LinearGrotesk-Bold', sans-serif",
              boxShadow: '0 0 10px 0 #1976d2',
              marginBottom: '1vh',
              animation: 'shadow-move 2s ease-in-out infinite alternate',
              '@keyframes shadow-move': {
                '0%': {
                  boxShadow: '0 0 15px 0 #1976d2',
                },
                '100%': {
                  boxShadow: '0 0 20px 10px #1976d2',
                },
              },
            }} 
            label="Regimes que atendemos"
          />
        </Divider>
        <Flex className={styles.businessServicesContainer}>
          <BusinessServiceCard 
            title1={"Simples Nacional"}
            description1={
              <>
                Para <strong>empresas que faturam até R$4,8 milhões/ano.</strong><br/><br/>Todos os tributos em uma única guia (DAS). Geralmente é o mais adequado para <strong>abertura de empresas</strong>. Além dos limites de faturamento, é importante que as <strong>atividades exercidas pela empresa</strong> estejam na lista de <strong>atividades permitidas pelo Simples Nacional.</strong>
              </>
            }
            title2={"MEI"}
            description2={
              <>
                Também atendemos o MEI, uma <strong>modalidade do Simples Nacional</strong>, que engloba um "pedaço" das empresas com <strong>atividades específicas</strong> e com o faturamento de até R$ 81 mil, o famoso microempresário individual.
              </>
            }
          />
          <div className={styles.businessServicesContainerDivider}>
            <Divider orientation="vertical">
              <Chip label="+"/>
            </Divider>
          </div>
          <div className={styles.businessServicesContainerDividerHorizontal}>
            <Divider orientation="horizontal">
              <Chip label="+"/>
            </Divider>
          </div>
          <BusinessServiceCard 
            title1={"Lucro Presumido"}
            description1={
              <>
                Para <strong>empresas que faturam acima de R$4,8 milhões</strong>, com poucos custos operacionais e
                folha salarial baixa.
              </>
            }
            title2={"Lucro Real"}
            description2={
              <>
                Obrigatório para empresas com <strong>faturamento acima de R$78 milhões</strong>, ideal para negócios com{' '}
                <strong>muitas despesas</strong> e <strong>margem de lucro reduzidas</strong>.
              </>
            }
          />
        </Flex>
      </Box>
    </Flex>
  );
}
