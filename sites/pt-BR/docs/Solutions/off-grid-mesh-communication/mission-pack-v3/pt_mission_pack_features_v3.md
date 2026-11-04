---
description: intro
title: Features
keywords:
  - mission-pack
slug: /mission_pack_features_v3
sidebar_position: 1
last_update:
  date: 07/08/2025
  author: Spencer
createdAt: '2025-08-11'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/mission_pack_features_v3/
---

O **Hazard Response Mission Pack** é uma solução versátil projetada especificamente para lidar com desafios em ambientes onde os riscos são uma preocupação constante. Combinando hardware e software de última geração, este kit fornece uma plataforma abrangente para monitoramento, alerta e resposta em tempo real, capacitando os usuários a gerenciar riscos de forma eficaz e garantir a segurança.

## Hardware - Criado para Cenários Específicos

O **Mission Pack** inclui uma seleção cuidadosamente escolhida de componentes de hardware, cada um otimizado para cenários específicos de risco. Esses dispositivos são projetados para oferecer desempenho e confiabilidade ideais em situações críticas:

- **Basecamp**: O **Basecamp** atua como o hub central do sistema, integrando vários componentes e lidando com tarefas de computação de borda. Ele é composto pelo **Roteador Wi-Fi**, **R1000 ReComputer com Gateway LoRaWAN** e **Cliente de Roteador Meshtastic**. Esses componentes trabalham juntos para criar um sistema de alerta local resiliente, permitindo processamento de dados e tomada de decisão em tempo real sem depender de servidores remotos, garantindo assim capacidades de resposta rápida.
  - **Interface de Comunicação RS485**: A **Interface de Comunicação RS485** amplia a capacidade do sistema de integrar sensores e dispositivos adicionais, o que é particularmente útil para Integradores de Sistema (SI). Essa interface permite a conexão de dispositivos externos usando o padrão RS485, como sensores e atuadores, possibilitando que o sistema monitore uma gama mais ampla de condições ambientais e melhore a detecção e resposta geral a riscos. Por exemplo, o **Alarme Sonoro e Luminoso RS485** pode ser integrado para cenários específicos em que alertas audiovisuais são necessários.
  - **Ethernet**: A conexão **Ethernet** fornece uma opção de rede cabeada estável que garante transmissão de dados ininterrupta e controle seguro do sistema. Ao usar Ethernet, os dispositivos dentro do **Basecamp** podem manter um canal de comunicação consistente e confiável, o que é especialmente importante em ambientes onde os sinais sem fio podem ser pouco confiáveis ou sujeitos a interferências. Esta configuração cabeada é ideal para aplicações críticas que exigem alta largura de banda e baixa latência, tornando-a adequada para tarefas que demandam processamento de dados em tempo real.
  - **Rede IP Wi-Fi**: A **Rede IP Wi-Fi** dentro do **Basecamp** oferece conectividade sem fio flexível, permitindo que os dispositivos se conectem sem cabos físicos. Isso é particularmente vantajoso em configurações em que a mobilidade é necessária ou em áreas onde passar cabos Ethernet é impraticável. A rede Wi-Fi oferece comunicação contínua entre os dispositivos, permitindo acesso e controle remotos do sistema. Ela também possibilita a fácil expansão da rede, acomodando dispositivos adicionais conforme necessário para aprimorar as capacidades de monitoramento e resposta do sistema.
- **Nós LoRaWAN**: O **SenseCAP Datalogger** oferece comunicação confiável de longa distância, essencial para situações de emergência, especialmente em áreas com cobertura de rede limitada. Este dispositivo oferece suporte à comunicação de emergência de pessoal e rastreamento de ativos, garantindo assistência oportuna e gerenciamento eficiente de recursos. Ele também atua como um sensor de risco universal, capaz de monitorar várias condições ambientais e acionar alarmes quando situações anormais são detectadas, sendo crucial para proteger ativos valiosos e alertar o pessoal sobre possíveis ameaças.
- **Nós Meshtastic**: O **T1000-E Tracker** é um dispositivo versátil dentro da rede Meshtastic, fornecendo funções essenciais de rastreamento e comunicação em ambientes onde a cobertura de rede convencional é indisponível ou pouco confiável.
- **Módulo de IA de Visão**: O **Grove Vision AI 2** é um módulo de IA de visão baseado em MCU que funciona como um "Olho de Monitoramento de Riscos". Ele utiliza IA para monitorar áreas críticas e detectar ameaças como invasores, avanço de animais selvagens ou acesso não autorizado. Seus recursos de IA fornecem alertas imediatos e respostas rápidas, minimizando o risco de danos ou ferimentos.

Além disso, o kit inclui uma **tela HDMI de 10"** e um **teclado**, oferecendo uma interface visual clara para monitorar dados e o status do sistema, aprimorando a interação do usuário com o Mission Pack.

## Software - Integração Perfeita com Node-RED

O **Mission Pack** vem equipado com um poderoso ambiente de software, centrado no **Node-RED**, uma ferramenta de programação visual de código aberto que simplifica a integração e automação de dispositivos de IoT. A interface intuitiva de arrastar e soltar do Node-RED permite que os usuários criem facilmente fluxos de trabalho para processamento de dados, alertas e controle do sistema, tornando-o acessível tanto para usuários técnicos quanto não técnicos.

Para tornar a experiência do usuário ainda mais simples, o ambiente de software é empacotado com **contêineres Docker** prontos para implantação, garantindo que todas as dependências e configurações necessárias estejam pré-instaladas. Essa configuração reduz o tempo e o esforço necessários para colocar o sistema em operação, permitindo que os usuários se concentrem em personalizar e expandir suas capacidades de resposta a riscos.
