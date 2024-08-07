import { useEffect } from 'react';
import styled from 'styled-components';
import maintext from '../../assets/main-text.jpg';
import { Box, Stack, Typography } from '@mui/material';

export default function AboutMe() {
  useEffect(() => {
    const handleScroll = () => {
      const imgElement = document.querySelector('#profile-img');
      if (window.scrollY > 500) {
        imgElement.classList.add('box-shadow-active');
      } else {
        imgElement.classList.remove('box-shadow-active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AboutMeSection id="sobre-a-psicanalise">
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} sx={{ alignItems: 'center' }}>
        <Box my={4} maxWidth="880px" display="flex" flexDirection="column" alignItems="flexStart" gap={2} p={2}>
          <Typography>
            <Profile>
              <img id="profile-img" src={maintext} alt="Main text" />
            </Profile>
            <Typography variant="h4" color="white" sx={{ paddingBottom: '10px' }}>
              Sobre a Psicanálise
            </Typography>
            <Typography variant="h5" sx={{ paddingBottom: '10px' }}>
              Como a Psicanálise pode te ajudar?
            </Typography>
            <Typography variant="body1" sx={{ paddingBottom: '10px' }}>
              A Psicanálise direciona o tratamento através da posição do sujeito em relação ao outro. Ao trabalhar com o
              inconsciente e seus efeitos no corpo, na linguagem e nas relações é possível entender o que desencadeia a
              criação dos sintomas, tendo relação com a singularidade de cada.
            </Typography>
            <Typography variant="body1" sx={{ paddingBottom: '10px' }}>
              O paciente é convidado a falar livremente e através da fala poder se deparar com as “tralhas e relíquias”
              da própria história, sendo possível reescrevê-la. É ao falar sobre seu sofrimento, que se torna possível
              resgatar fragmentos, memórias, juntar pedaços e assim poder inventar novas formas de estar, reconstruindo
              uma narrativa com mais significação em detrimento daquilo que nos faz sofrer.
            </Typography>
            <Typography variant="body1" sx={{ paddingBottom: '10px' }}>
              O trabalho do psicanalista é pautado por três pilares essenciais: análise pessoal, estudo teórico e
              supervisão. A análise pessoal é considerada a base do tripé, só é possível entender sobre o sofrimento do
              outro quando experiencia também esse processo de investigação de si. Já a supervisão pode ser considerado
              uma “bússola”, onde o analista pode falar sobre os casos com outro profissional, sendo possível escutar os
              “pontos-cegos” de cada caso, construindo novos olhares e escuta, além de conduzirem também o
              aprofundamento teórico. O estudo teórico é onde se conhece os conceitos fundamentais que orientam a
              Psicanálise, como Inconsciente, Pulsão, Repetição, Transferência.
            </Typography>
            <Typography variant="body1" sx={{ paddingBottom: '10px' }}>
              Este tripé, subentendendo a necessidade de os três andarem juntos, é o que garante um bom manejo dos
              casos.
            </Typography>
          </Typography>
        </Box>
      </Stack>
    </AboutMeSection>
  );
}

const AboutMeSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 2rem;
  background-color: #2c4a63;
  color: white !important;

  @media screen and (max-width: 1024px) {
    height: max-content;
  }
`;

const Profile = styled.div`
  float: left;
  margin: 0 2em 0 0;
  position: relative;

  img {
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius: 4%;
    transition: box-shadow 1000ms ease;
  }

  @media screen and (max-width: 768px) {
    float: none;
    margin: 0 auto 1em auto;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      max-width: 300px;
      box-shadow: none;
    }
  }
`;
