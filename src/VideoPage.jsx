import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 40px 20px;
  background-color: #111;
  color: white;
  text-align: center;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const VideoCard = styled.div`
  background-color: black;
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 4px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const BackButton = styled.button`
  margin-top: 30px;
  padding: 10px 20px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;

  &:before {
    content: "←";
    margin-right: 8px;
    font-size: 20px;
  }

  &:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.1);
    color: #ddd;
  }
`;


const videoData = {
  video1: {
    title: "Conteúdo Dinâmico & Trends",
    videos: [
      "https://www.youtube.com/embed/qgZEcjWrpzA",
      "https://www.youtube.com/embed/EIr13M2ZeZ0",
      "https://www.youtube.com/embed/4jLZ9rRSwhE",
      "https://www.youtube.com/embed/pGBgmojIQz0",
      "https://www.youtube.com/embed/knQ-dwcUP2Q",
      "https://www.youtube.com/embed/szZzXWDJ0Qs",
    ],
  },
  video2: {
    title: "Vinhetas Criativas & Impactantes",
    videos: [
      "https://www.youtube.com/embed/0RzbSeAR0gM",
      
    ],
  },
  video3: {
    title: "Vídeo Aulas | Didáticas e Bem Editadas",
    videos: [
      "https://www.youtube.com/embed/bEg8mQY-41E",
      "https://www.youtube.com/embed/YnIwPUyUgpQ",
    ],
  },
};

export default function VideoPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = videoData[id];

  if (!project) {
    return (
      <Container>
        <Title>Categoria não encontrada</Title>
        <BackButton onClick={() => navigate("/")}>Voltar</BackButton>
      </Container>
    );
  }

  return (
    <Container>
      <Title>{project.title}</Title>
      <Grid>
        {project.videos.map((url, index) => (
          <VideoCard key={index}>
            <iframe
              src={url}
              title={`Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoCard>
        ))}
      </Grid>
      <BackButton onClick={() => navigate("/")}>Voltar</BackButton>
    </Container>
  );
}
