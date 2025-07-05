import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaWhatsappSquare, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import profileImage from "./assets/profileImage.png"; 

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #1db954;
`;

const NameAndTitle = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 5px;
`;

const Title = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: #1db954;
`;

const Summary = styled.p`
  font-size: 1.05rem;
  color: #ddd;
  margin-top: 20px;
  line-height: 1.6;
`;

const PortfolioSection = styled.section`
  margin-bottom: 50px;
`;

const PortfolioTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  border-bottom: 2px solid #1db954;
  display: inline-block;
  padding-bottom: 5px;
`;

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(29, 185, 84, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(29, 185, 84, 0.5);
  }
`;

const ProjectTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
`;

const ProjectDesc = styled.p`
  font-size: 0.95rem;
  color: #bbb;
`;

const Contact = styled.section`
  text-align: center;
  margin-top: 50px;
`;

const SocialLinks = styled.div`
  margin-top: 20px;
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  gap: 25px;

  a {
    color: #e0e0e0;
    &:hover {
      color: #1db954;
    }
  }
`;

const projects = [
  {
    id: "video1",
    title: "Conteúdo Dinâmico & Trends",
    description:
      "Vídeos curtos para Reels e TikTok com foco em tendências e alta performance.",
  },
  {
    id: "video2",
    title: "Vinhetas Criativas & Impactantes",
    description:
      "Animações e efeitos para abertura e encerramento de vídeos profissionais.",
  },
  {
    id: "video3",
    title: "Vídeo Aulas | Didáticas e Bem Editadas",
    description:
      "Conteúdo educacional com edição clara e eficiente para treinamentos e cursos.",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <ProfileImage src={profileImage} alt="Rodrigo Campos" />
        <NameAndTitle>
          <Name>Rodrigo Campos</Name>
          <Title>Editor de Vídeo Profissional</Title>
          <Summary>
            Editor de Vídeo / Filmmaker autônomo com atuação em conteúdo para Instagram, TikTok e YouTube.
            Edição focada em engajamento, tendências digitais e narrativa visual. Experiência com cronogramas,
            pautas, planejamento de postagens e análise de desempenho em redes sociais. Ferramentas: Adobe Premiere,
            CapCut, Canva e plataformas de agendamento. Trabalho criativo e colaborativo com foco em impacto de audiência.
          </Summary>
        </NameAndTitle>
      </Header>

      <PortfolioSection>
        <PortfolioTitle>Portfólio</PortfolioTitle>
        <ProjectsList>
          {projects.map(({ id, title, description }) => (
            <ProjectCard key={id} onClick={() => navigate(`/video/${id}`)}>
              <ProjectTitle>{title}</ProjectTitle>
              <ProjectDesc>{description}</ProjectDesc>
            </ProjectCard>
          ))}
        </ProjectsList>
      </PortfolioSection>

      <Contact>
        <p>Conecte-se comigo nas redes sociais:</p>
        <SocialLinks>
          <a
            href="https://www.linkedin.com/in/rodrigo-campos-101975329/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
         
          <a
            href=" href={import.meta.env.VITE_WHATSAPP_URL}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsappSquare />
          </a>
        </SocialLinks>
      </Contact>
    </Container>
  );
}
