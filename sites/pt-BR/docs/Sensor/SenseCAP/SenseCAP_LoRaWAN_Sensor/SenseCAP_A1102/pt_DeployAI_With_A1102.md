---
description: Deploy_AI_With_A1102
title: Implantando modelos de IA no SenseCAP A1102 usando o SenseCraft AI
keywords:
  - Sensor Vision_AI_V2
  - SenseCAP A1102
  - SenseCraft AI
  - Custom AI model
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.webp
slug: /deploy_ai_with_a1102
sidebar_position: 3
last_update:
  date: 12/31/2025
  author: Twelve
createdAt: '2025-11-26'
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/pt-br/deploy_ai_with_a1102/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Implantando modelos de IA no SenseCAP A1102 usando o SenseCraft AI

## Visão geral

O SenseCAP A1102 é um dispositivo sensor poderoso que combina recursos avançados de IA com facilidade de implantação. Este guia irá orientá-lo na implantação de modelos de IA oficiais ou personalizados no A1102 usando o site **SenseCraft AI**, oferecendo instruções passo a passo para configuração, implantação e testes.

<div class="info-section">
  <div class="section-header">
      <h2>Implantar modelos de IA no SenseCAP A1102</h2>
      <p>Treine e implante seus modelos de IA: potencialize suas câmeras LoRaWAN com modelos de IA personalizados ou oficiais para análise em tempo real. O SenseCAP A1102 pode fornecer a flexibilidade necessária para trazer insights orientados por IA para suas aplicações.</p>
  </div>
  <ul class="info-list">
      <li class="info-item">
          <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 5h-4l-1-1h-6l-1 1H4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zM12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
            </svg>
          </div>
          <div class="info-content">
              <h3>Implantação de modelo de IA personalizado com câmeras LoRaWAN</h3>
              <p>Com o SenseCAP A1102, você pode treinar seus próprios modelos de IA e implantá-los diretamente em câmeras compatíveis com LoRaWAN. Isso permite detecção de objetos em tempo real. A integração perfeita com LoRaWAN garante que seus insights orientados por IA sejam acessíveis e acionáveis no local.</p>
          </div>
      </li>
      <li class="info-item">
          <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                  <path d="M3 3v5h5"></path>
                  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                  <path d="M16 21h5v-5"></path>
              </svg>
          </div>
          <div class="info-content">
              <h3>Uso de modelos pré-treinados ou modelos personalizados</h3>
              <p>O SenseCAP A1102 oferece suporte a uma ampla variedade de modelos de IA pré-treinados, bem como à capacidade de treinar modelos personalizados usando conjuntos de dados públicos ou personalizados, como os encontrados no Roboflow Universe. Essa flexibilidade permite que você implante facilmente modelos especificamente adaptados aos seus casos de uso.</p>
          </div>
      </li>
      <li class="info-item">
          <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
          </div>
          <div class="info-content">
              <h3>Aplicações versáteis</h3>
              <p>O SenseCAP A1102 pode ser implantado em várias aplicações do mundo real. Seja monitorando a saúde das folhas das plantas na agricultura, detectando a ocupação de vagas de estacionamento em ambientes urbanos ou rastreando posições de embarcações em áreas marítimas, seus modelos de IA podem se adaptar às suas necessidades específicas.</p>
          </div>
      </li>
  </ul>
</div>


## Pré-requisitos

### Hardware necessário

- Dispositivo SenseCAP A1102  
- Cabo de dados USB Tipo-C  
- PC  

### Software necessário
- [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home)

## Processo de implantação de modelo de IA oficial

**Passo 1.** Acesse o workspace do SenseCAP A1102 via **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`SenseCAP A1102`**, ou use este [link direto para o workspace](https://sensecraft.seeed.cc/ai/device/local/37).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/sensecap_a1102_workspace.png" style={{width:1000, height:'auto'}}/></div>

**Passo 2. Conecte-se à nossa plataforma pela porta serial**

- Use um cabo Tipo-C para conectar o dispositivo ao seu PC (certifique-se de que está conectando à porta Tipo-C superior, que é a porta serial Himax, conforme mostrado na imagem abaixo).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:400, height:'auto'}}/></div>

- Clique em `Connect` 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture4.png" style={{width:1000, height:'auto'}}/></div>

- Selecione a porta serial correta e clique em `Connect` na janela pop-up

Se a porta correta for selecionada, você poderá visualizar o fluxo de vídeo de pré-visualização por meio de Invoke e prosseguir normalmente com a seleção e gravação do modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture5.png" style={{width:1000, height:'auto'}}/></div>

**Passo 3. Selecione o modelo de IA que você deseja implantar no dispositivo**

- Clique em `Select Model`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture6.png" style={{width:500, height:'auto'}}/></div>

- Escolha entre Public Models ou seus próprios modelos treinados no SenseCraft AI

- O processo de gravação começará após você clicar no modelo

:::note
Seu dispositivo agora está usando o modelo de IA que você implantou para detectar e enviar o resultado! Acesse seu APP ou outra plataforma para visualizar.
:::

## Processo de implantação de modelo de IA personalizado

:::warning note
Nosso modelo de IA pode ser treinado com muitas classes, mas como os resultados de reconhecimento são transmitidos via **S2100**, apenas as **primeiras 9 classes** são efetivamente suportadas para relatório.
:::

**Passo 1. Obtenha seu conjunto de dados no Roboflow**

- [Crie uma conta gratuita no Roboflow](https://app.roboflow.com/) 

- Se você precisar de um conjunto de dados open-source, acesse o [Roboflow Universe](https://universe.roboflow.com/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p1.png" style={{width:800, height:'auto'}}/></div>

- Se você quiser usar suas próprias imagens e rotulá-las para obter um conjunto de dados, acesse o [Roboflow](https://app.roboflow.com/) para criar um **Project**

:::warning note
Ao usar suas próprias imagens, preste atenção especial à ordem dos rótulos.
Apenas as primeiras 9 classes (índices de rótulo 0–8) são válidas e podem ser reconhecidas pelo A1102.
Se o seu conjunto de dados contiver mais de 9 classes, você deve selecionar apenas as nove classes necessárias removendo as outras antes de exportar o modelo.
:::

**Passo 2. Exporte seu conjunto de dados do Roboflow**

- Clique em Overview e verifique as classes

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p7.png" style={{width:800, height:'auto'}}/></div>

:::danger note 
A ordem das classes exibidas corresponde à ordem dos índices de rótulo. Portanto, apenas as primeiras 9 classes (índices de rótulo 0–8) podem ser carregadas corretamente como resultados de reconhecimento no A1102.
Se o seu modelo contiver mais de 9 classes, você deve selecionar as nove classes de que precisa clonando o conjunto de dados em seu próprio projeto, removendo os outros rótulos e, em seguida, exportando o conjunto de dados novamente.
:::

- No projeto, clique em `Dataset`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p2.png" style={{width:300, height:'auto'}}/></div>

- Clique em `Download Dataset`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p3.png" style={{width:800, height:'auto'}}/></div>

- Clique em `Download Dataset`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p4.png" style={{width:500, height:'auto'}}/></div>

- Selecione `COCO` e `Show download code`, depois clique em `Continue`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p5.png" style={{width:500, height:'auto'}}/></div>

- Copie a **Raw URL** que será usada no processo de treinamento do modelo de IA

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p6.png" style={{width:600, height:'auto'}}/></div>

**Passo 3. Treine seu modelo de IA com o conjunto de dados**

- Siga o [início rápido de treinamento de modelo](https://wiki.seeedstudio.com/pt-br/grove_vision_ai_v2_sscma#treinamento-de-conjunto-de-dados-modelo-exportado) para treinar seu modelo de IA com o conjunto de dados preparado.

- Após a conclusão do treinamento, exporte o modelo treinado no formato .tflite, que será usado para implantação no dispositivo.

**Passo 4. Envie e grave o modelo de IA personalizado**

- Acesse o workspace do SenseCAP A1102 via **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`SenseCAP A1102`**, ou use este [link direto para o workspace](https://sensecraft.seeed.cc/ai/device/local/37).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/sensecap_a1102_workspace.png" style={{width:1000, height:'auto'}}/></div>

- Conecte-se à nossa plataforma pela porta serial

- Use um cabo Tipo-C para conectar o dispositivo ao seu PC (certifique-se de que está conectando à porta Tipo-C superior, que é a porta serial Himax, conforme mostrado na imagem abaixo).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:400, height:'auto'}}/></div>

- Clique em `Connect` 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture4.png" style={{width:1000, height:'auto'}}/></div>

- Selecione a porta serial correta e clique em `Connect` na janela pop-up

- Clique em `Upload Model`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture7.png" style={{width:500, height:'auto'}}/></div>

- Configure as informações do seu modelo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture8.png" style={{width:500, height:'auto'}}/></div>

- `Model File`: Para instruções detalhadas sobre como treinar e exportar um modelo TFLite, consulte este [guia](https://wiki.seeedstudio.com/pt-br/grove_vision_ai_v2_sscma/)

- `Object`: O nome da categoria correspondente à ordem dos rótulos do modelo (de 0 a 8). Apenas até nove classes são suportadas — quaisquer classes adicionais não serão exibidas.

- Clique em `Send` e aguarde o processo de gravação

## Análise de resultados no [Seeed Portal](https://sensecap.seeed.cc/portal/#/dashboard)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture11.png" style={{width:1000, height:'auto'}}/></div>

- O primeiro valor é o carimbo de data/hora do envio dos dados

- Os nove valores seguintes representam as pontuações de confiança (measurementValue) de cada índice de classe (de 0 a 8).

- O valor final contém as informações do modelo, incluindo metadados relacionados ao modelo de IA implantado.

## Análise de resultados no [TTN](https://eu1.cloud.thethings.network/console/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture9.png" style={{width:1000, height:'auto'}}/></div>

- Cada resultado contém 10 medições, que correspondem aos 10 canais RS485.

- As primeiras nove medições representam as pontuações de confiança (measurementValue) de cada índice de classe (de 0 a 8).

- A décima medição contém as informações do modelo, incluindo metadados relacionados ao modelo de IA implantado.

## FAQ

**P: Que tipo de modelo personalizado posso enviar?**

R: Você pode enviar modelos com a extensão de arquivo .tflite. Você pode treinar e exportar seus próprios modelos seguindo as instruções em [Model training quick start](https://wiki.seeedstudio.com/pt-br/grove_vision_ai_v2_sscma/#training-dataset-exported-model).

## **Suporte Técnico & Discussão de Produto**

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
