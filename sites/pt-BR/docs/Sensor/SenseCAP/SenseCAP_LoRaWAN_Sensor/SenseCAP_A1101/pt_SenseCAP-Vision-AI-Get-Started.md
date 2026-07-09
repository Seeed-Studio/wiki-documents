---
description: Primeiros Passos com SenseCAP Vision AI
title: Primeiros Passos com SenseCAP Vision AI
keywords:
  - Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP-Vision-AI-Get-Started
last_update:
  date: 1/31/2023
  author: Kewei Li
createdAt: '2023-04-07'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP-Vision-AI-Get-Started/
---

<div align="center"><img width ={400} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101990962-a1101-first-new-10.17.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

# Introdução

SenseCAP A1101 - LoRaWAN Vision AI Sensor é um sensor de imagem inteligente habilitado para TinyML Edge AI. Ele suporta uma variedade de modelos de IA, como reconhecimento de imagem, contagem de pessoas, detecção de alvos, reconhecimento de medidores etc. Ele também suporta o treinamento de modelos com TensorFlow Lite. <br />

# Recursos
- Consumo ultrabaixo de energia e poderosa câmera Himax: DSP de 400Mhz, taxa máxima de quadros da câmera 640*480*VGA 60 FPS, inferência local

- Baixo consumo de energia e transmissão de longo alcance: consumo de energia em modo de espera até 2.3uWh, alimentado por módulos Wio-E5 LoRaWAN, transfere dados por quilômetros

- Alta segurança de dados por computação em borda: inferência de imagem local e transferência apenas dos dados de resultado final para a nuvem, adequado para aplicações que exigem transmissão limitada de dados e alta privacidade de dados.

- Fácil visualização de dados: poucos cliques para exibir e gerenciar dados via SenseCAP Mate App e SenseCAP Dashboard, ampla compatibilidade com outras ferramentas de terceiros

- Alto grau de proteção industrial: temperatura de operação de -40 ~ 85℃ e classificação IP66, adequado para implantação interna e externa

- Fácil para implantação em escala: 1 minuto para adicionar e configurar o dispositivo escaneando o código QR do dispositivo, o baixo custo de rede LoRaWAN e o baixo custo de manutenção garantem a escalabilidade do negócio.

# Especificação

Por favor, consulte a [especificação](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf) para mais detalhes.

# Primeiros Passos

1. Existem vários modelos de IA integrados para o A1101, e os usuários podem selecionar modelos de acordo com suas necessidades. Atualmente, os seguintes algoritmos e modelos estão disponíveis:

|**Algoritmo**|**Modelo de IA**|
|---|---|
|Detecção de Objetos|Detecção de Corpo Humano;Definido pelo usuário|
|Contagem de Objetos|Contagem de Pessoas;Definido pelo usuário|
|Classificação de Imagens|Reconhecimento de Pessoa&Panda;Definido pelo usuário|

A seleção e configuração do modelo também é feita na interface Setting. Primeiro selecione o algoritmo; algoritmos diferentes realizam funções diferentes e exibem resultados diferentes na visualização do APP. Clicar no triângulo suspenso atrás do algoritmo trará a caixa de seleção. Em seguida, selecione o modelo de IA, clique no modelo, a caixa de seleção aparecerá, selecione o modelo.

2. Se você quiser treinar seu próprio modelo de IA, há duas maneiras. Por favor, consulte:

**1.[One Stop Model Training with Edge Impulse](https://wiki.seeedstudio.com/pt-br/One-Stop-Model-Training-with-Edge-Impulse)** Rápido de acompanhar.

**2.[Train AI Model with Roboflow, YOLOv5, TensorFlow Lite](https://wiki.seeedstudio.com/pt-br/Train-Deploy-AI-Model-A1101)** Lento de acompanhar.

# Conectar ao LoraWAN®
LoRaWAN® (Long Range Wide Area Network) é um protocolo de comunicação sem fio projetado para comunicações de baixo consumo de energia e longo alcance entre dispositivos de IoT (Internet das Coisas) e gateways. Ele usa espectro de rádio não licenciado na faixa Industrial, Científica e Médica (ISM), normalmente em 868 MHz na Europa e 915 MHz nos Estados Unidos. LoRaWAN® fornece uma solução de baixo custo e eficiente em energia para conectar dispositivos de IoT a longas distâncias. A tecnologia permite comunicação bidirecional entre dispositivos e gateways, e suporta uma variedade de taxas de dados para acomodar diferentes tipos de aplicações. 

## Como selecionar Gateway e LoraWAN®
É necessária cobertura de rede LoRaWAN® ao usar sensores, há duas opções.
![p21](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/4.png)

## Como usar o Sensor
Além de conectar diretamente a um computador para visualizar dados de detecção em tempo real, você também pode transmitir esses dados através do LoraWAN® e, por fim, enviá-los para a [plataforma em nuvem SenseCAP](https://sensecap.seeed.cc/) ou para uma plataforma em nuvem de terceiros. Na plataforma em nuvem SenseCAP, você pode visualizar os dados em um ciclo e exibi-los graficamente por meio do seu celular ou computador. A plataforma em nuvem SenseCAP e o SenseCAP Mate App usam o mesmo sistema de contas.

Como nosso foco aqui é descrever o processo de treinamento de modelos, não entraremos em detalhes sobre a exibição de dados na plataforma em nuvem. Mas se você estiver interessado, sempre pode visitar a plataforma em nuvem SenseCAP para tentar adicionar dispositivos e visualizar dados. É uma ótima maneira de entender melhor os recursos da plataforma!

![p22](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/11.png)

## Suporte Técnico



Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


