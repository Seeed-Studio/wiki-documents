---
description: Qual rede LoRaWAN devo selecionar
title: Qual rede LoRaWAN devo selecionar
keywords:
  - LoRaWAN
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /select_lorawan_network
last_update:
  date: 1/9/2023
  author: Jessie
createdAt: '2024-01-09'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/select_lorawan_network/
---


No âmbito em rápida expansão da IoT (Internet das Coisas), as redes LoRaWAN ganharam grande popularidade, oferecendo longo alcance e comunicação de baixo consumo de energia para diversas aplicações de IoT. Ultimamente, temos sido inundados com perguntas: "**Qual rede LoRaWAN devo escolher para o meu projeto específico?**"

Neste artigo, vamos guiá-lo pelos componentes de uma rede LoRaWAN, explorar as diferenças entre redes LoRaWAN públicas e privadas e oferecer referências para ajudá-lo a tomar uma decisão bem informada.

### O que é uma rede LoRaWAN?

**LoRaWAN** (Long Range Wide Area Network) é um protocolo sem fio projetado para comunicações de baixo consumo e longo alcance que permite que dispositivos de Internet das Coisas (IoT) se conectem e troquem dados com servidores ou aplicações.
Ela oferece uma solução econômica e segura para implantar dispositivos IoT em uma ampla gama de aplicações, incluindo cidades inteligentes, agricultura, rastreamento de ativos, monitoramento ambiental e muito mais.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-server.png" alt="pir" width={800} height="auto" /></p>

### Como funciona a rede LoRaWAN?

Uma rede LoRaWAN típica consiste nos seguintes elementos básicos: dispositivos finais, gateway, servidor de rede e servidor de aplicação.

Os dispositivos finais se comunicam com gateways próximos e o gateway é conectado ao servidor de rede. O servidor de rede encaminha os dados para o servidor de aplicação.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-server2.png" alt="pir" width={800} height="auto" /></p>

### Diferenças entre LNS público e LNS privado

As redes LoRaWAN podem ser amplamente categorizadas como públicas ou privadas. As redes LoRaWAN públicas dependem de provedores de rede como TTN, Helium, etc., enquanto as redes privadas colocam elementos da rede, como gateways e servidores, sob o controle do usuário. Você pode selecionar o LNS público ou construir sua própria rede privada.

|Fator|Redes LoRaWAN Públicas|Redes LoRaWAN Privadas|
|--|--|--|
|Propriedade| Gerenciadas por provedores de rede|Sob controle do usuário|
|Cobertura|Disponível em regiões específicas|Livre para cobrir a área de seu interesse|
|Segurança|Infraestrutura compartilhada |Controle e segurança aprimorados|
|Custo de implantação|Custo de entrada relativamente baixo|Custos significativos de infraestrutura no lançamento|
|Custo de transmissão de dados|Altas taxas de assinatura para transmissão de dados dos dispositivos finais|Sem assinatura|

A escolha entre redes LoRaWAN públicas e privadas depende em grande parte da natureza e dos requisitos do seu projeto. Aqui está uma breve visão geral:

**Redes LoRaWAN privadas são adequadas para:**

- Redes de automação industrial que exigem integridade de dados segura de ponta a ponta.
- Aplicações médicas que exigem comunicação ultrassegura entre dispositivos.
- Sistemas de segurança de edifícios inteligentes com informações sensíveis.

**Redes LoRaWAN públicas são adequadas para:**

- Cenários agrícolas, como monitoramento de culturas.
- Cidades inteligentes com aplicações como monitoramento de tráfego, iluminação inteligente e sistemas de estacionamento inteligente.

### Se eu escolher redes LoRaWAN públicas, o que devo fazer?

Se você está considerando uma rede LoRaWAN pública, há vários provedores globais para escolher, incluindo TTN, Helium, Loriot e Chirp Stack, etc. Para tomar uma decisão final, você pode considerar os seguintes fatores:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-map.png" alt="pir" width={800} height="auto" /></p>

#### Existe uma rede LoRaWAN pública disponível na minha região?

Verifique se há uma rede LoRaWAN pública disponível na sua região visitando a página [Network Providers](https://www.semtech.com/lora/ecosystem/networks) do ecossistema LoRa da Semtech ou consultando o [Global Coverage Map](https://lora-alliance.org/#tabs-1) da LoRa Alliance。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-map2.png" alt="pir" width={800} height="auto" /></p>

Para ajudá-lo a escolher o provedor e a área de desenvolvimento mais adequados, recomendamos a realização de testes de campo; o [Wio Terminal LoRaWAN Field Tester](https://www.seeedstudio.com/WioField-Tester-Kit-p-5282.html) ajudará você a saber, em especial, quantos gateways ao redor podem ser alcançados em uma determinada posição, enriquecendo os mapeadores de rede para se conhecerem e compartilharem a cobertura real da rede.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/server-helium.png" alt="pir" width={700} height="auto" /></p>

### Se eu escolher redes LoRaWAN privadas, o que devo fazer?

Construir uma rede LoRaWAN privada pode ser uma opção viável, especialmente para implantações em áreas rotineiras como fábricas ou campi. Uma rede LoRaWAN privada típica envolve três componentes principais — dispositivos LoRaWAN, gateways e servidores; aqui está o que você pode precisar considerar:

#### Que gateway devo escolher?

Para construir sua própria rede LoRaWAN, comece selecionando um gateway adequado, que desempenha um papel importante na conexão de dispositivos finais e servidores de rede. Existem muitos tipos de gateway; ao fazer sua escolha, considere fatores como custo, funcionalidade e opções de implantação. Para uma configuração rápida e fácil, confira o  [SenseCAP Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) - é tão simples quanto configurar um roteador Wi-Fi e vem com um ChirpStack LNS integrado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/server-gateway.png" alt="pir" width={800} height="auto" /></p>

#### Comece a implantar seus dispositivos finais

Depois que seu gateway estiver configurado, é hora de implantar seu primeiro dispositivo! Experimente o [SenseCAP T1000 LoRaWAN Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html), ideal para uma solução de rastreamento realmente confiável.

Quando se trata de implantar dispositivos finais, você pode se perguntar quantos dispositivos podem se conectar a um gateway. A resposta depende de várias variáveis, principalmente do tamanho do payload de dados transmitido pelos dispositivos finais e de seus intervalos de transmissão especificados; as condições ambientais também desempenham um papel nessa avaliação. Para determinar o número máximo de dispositivos suportados sem risco de perda de pacotes, a experimentação prática no local de implantação costuma ser a abordagem mais confiável.

Normalmente, um gateway pode lidar com mensagens de centenas de dispositivos; para o [SenseCAP Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html), ele permite a conexão de aproximadamente 600 [SenseCAP T1000 LoRaWAN Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) (com intervalo de envio de 5 minutos).

Agora que você está mais bem informado sobre as opções disponíveis para redes LoRaWAN, pode tomar uma decisão confiante ao implantar aplicações baseadas em LoRa. Vamos começar a jornada LoRaWAN configurando seu primeiro gateway!
