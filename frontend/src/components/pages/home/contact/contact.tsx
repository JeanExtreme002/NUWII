import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, IconButton, Paper,Stack, Typography } from '@mui/material';
import { Flex } from "@radix-ui/themes";

import { Image } from "@/components"
import { BusinessColors, config } from "@/lib";

import supportImage from "./assets/support.png"
import styles from "./contact.module.css";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      style={{paddingBlock: "10px"}}
      sx={{
        width: '100%',
        backgroundColor: '#19191b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        boxShadow: '0 -10px 25px rgba(0, 0, 0, 0.4)',
      }}
    >
      <Box
        sx={{
          width: '90%',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {/* Esquerda - Copyright */}
        <div className={styles.copyright}>
          © {new Date().getFullYear()} <span style={{color: BusinessColors.Blue}}>NUWII Contabilidade</span>. Todos os direitos reservados.
        </div>

        {/* Direita - Ícones */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            component="a"
            href={`https://instagram.com/${config.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#fff' }}
          >
            <InstagramIcon />
          </IconButton>

          <IconButton
            component="a"
            href={`mailto:${config.email}`}
            sx={{ color: '#fff' }}
          >
            <EmailIcon />
          </IconButton>

          <IconButton
            component="a"
            href={`https://wa.me/${config.phoneNumber}?text=Olá! Venho pelo site da NUWII e preciso de mais informações :)`}
            sx={{ color: '#fff' }}
          >
            <PhoneIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

const contactInfo = [
  {
    label: 'Celular',
    value: config.formattedPhoneNumber,
    href: `https://wa.me/${config.phoneNumber}?text=Olá! Venho pelo site da NUWII e preciso de mais informações :)`,
    icon: <PhoneIcon />,
  },
  {
    label: 'E-mail',
    value: config.email,
    href: 'mailto:' + config.email,
    icon: <EmailIcon />,
  },
  {
    label: 'Instagram',
    value: "@" + config.instagram,
    href: 'https://instagram.com/' + config.instagram,
    icon: <InstagramIcon />,
  },
];

export function Contact() {

  return (
    <Flex className={ styles.root }>
      <Flex className={ styles.container }>
        <Box
          component="section"
          sx={{
            color: '#fff',
            py: 6,
            px: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Fale com a gente 💬
          </Typography>
          <div className={styles.subtitle}>
            Entre em contato conosco pelo canal que preferir. <span style={{color: BusinessColors.Blue}}>Nossa equipe está pronta para ajudar!</span>
          </div>
          <Flex className={styles.contactContainer}>
            <Image className={styles.supportImage} src={supportImage} alt="Support" />
            <Stack spacing={3} alignItems="center">
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Nossos <span style={{color: BusinessColors.Blue}}>Canais</span>
              </Typography>
              {contactInfo.map((item, index) => (
                <Paper
                  key={index}
                  component="a"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  elevation={3}
                  sx={{
                    backgroundColor: '#fff',
                    px: 3,
                    py: 2,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    width: '100%',
                    maxWidth: 400,
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 4px 20px rgba(0, 207, 232, 0.2)',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                >
                  <IconButton
                    size="large"
                    sx={{ color: '#00CFE8', pointerEvents: 'none' }}
                  >
                    {item.icon}
                  </IconButton>
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="subtitle2" sx={{fontWeight: 'bold', color: '#111' }}>
                      {item.label}
                    </Typography>
                    <Typography sx={{ color: '#111', fontSize: '1rem' }}>
                      {item.value}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Stack>
          </Flex>
          {/* Endereço */}
          <div className={styles.address}>
            {config.address}
          </div>
        </Box>
      </Flex>
      <Footer/>
    </Flex>
  );
}