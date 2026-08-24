---
sidebar_position: 7
description: Este artigo descreve como obter saídas usando o Grove Vision AI V2 e o SenseCraft AI.
title: Saída de Modelo para Grove Vision AI V2
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-output-grove-vision-ai
aliases:
  - /sensecraft_ai_output_grove_visionai
last_update:
  date: 12/04/2024
  author: Citric
createdAt: '2024-11-27'
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/tutorials/sensecraft-ai-output-grove-vision-ai/
---

# Configurando a Saída do Modelo no SenseCraft AI para o Grove Vision AI V2

Este artigo da wiki fornece um guia abrangente sobre como configurar as definições de saída de modelo para o dispositivo Grove Vision AI V2 usando a plataforma SenseCraft AI. Seguindo estas instruções passo a passo, você aprenderá como configurar condições de disparo e ações com base na saída do seu modelo treinado em execução no Grove Vision AI V2.

## Pré-requisitos

Antes de começar, certifique-se de que você tem o seguinte:

1. Dispositivo Grove Vision AI V2

2. Cabo USB-C para conectar o Grove Vision AI V2 ao seu computador

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Etapa 1. Acesse o Workspace do Grove Vision AI V2 e conecte o dispositivo

Acesse o workspace do Grove Vision AI V2 via **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home)** > **`Models`** > **`Workspace`** > **`Grove Vision AI V2`**, ou use o [link direto para o workspace](https://sensecraft.seeed.cc/ai/device/local/36).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/grove_vision_ai_v2_workspace.png" style={{width:1000, height:'auto'}}/></div>

Usando o cabo USB-C, conecte seu dispositivo Grove Vision AI V2 ao computador. Quando o dispositivo estiver conectado, clique no botão **Connect** localizado no canto superior esquerdo da página do workspace.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## Etapa 2. Certifique-se de que um Modelo está Carregado no Grove Vision AI V2

Antes de prosseguir, certifique-se de que o seu dispositivo Grove Vision AI V2 tem um modelo treinado implantado nele. Se você ainda não implantou um modelo, consulte a documentação do SenseCraft AI para obter instruções sobre como treinar e implantar modelos no seu dispositivo.

- [Usando um modelo para Grove Vision AI V2](https://wiki.seeedstudio.com/pt-br/sensecraft_ai_pretrained_models_for_grove_visionai_v2/)

Se você quiser usar o seu próprio modelo treinado, pode consultar as duas Wikis a seguir.

- [Tipo de treinamento - Classificação](https://wiki.seeedstudio.com/pt-br/sensecraft_ai_training_classification/)
- [Tipo de treinamento - Detecção de Objetos](https://wiki.seeedstudio.com/pt-br/sensecraft_ai_training_object_detection/)

## Etapa 3. Acesse as Configurações de Saída

Na barra lateral esquerda da página do workspace, clique na opção **Output** para acessar as configurações de saída do seu dispositivo Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/50.png" style={{width:1000, height:'auto'}}/></div>

No lado direito da página, clique no botão **Trigger action when event conditions are met**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

Uma caixa de diálogo aparecerá, solicitando que você insira vários parâmetros que servirão como condições de disparo para as ações desejadas. Esses parâmetros incluem:

- **Object**: Especifique o objeto que o seu modelo deve detectar para acionar a ação. Por exemplo, "person" se você quiser que a ação ocorra quando uma pessoa for detectada.

- **Condition**: Escolha a condição que deve ser atendida para que o disparo ocorra. As opções incluem "Greater than", "Less than", "Equal to", etc. Por exemplo, selecionar "Greater than" significa que a ação será acionada quando o nível de confiança do objeto detectado for maior que o valor especificado.

- **Confidence**: Defina o nível mínimo de confiança necessário para que a detecção do objeto acione a ação. Esse valor varia de 1 a 100, sendo 100 o nível de confiança mais alto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/51.png" style={{width:600, height:'auto'}}/></div>

Após configurar as condições de disparo desejadas, clique no botão **Confirm** para salvar as configurações.

## Etapa 4. Selecione as Ações de Disparo Desejadas

O Grove Vision AI V2 suporta dois tipos de ações de disparo:

- **Light up the LED**: Quando esta opção é selecionada, o LED onboard do Grove Vision AI V2 acenderá quando as condições de disparo forem atendidas.

- **Save image to the SD Card**: Quando esta opção é selecionada, o Grove Vision AI V2 salvará a imagem capturada no cartão MicroSD inserido no dispositivo quando as condições de disparo forem atendidas.

Selecione a caixa de seleção ao lado da(s) ação(ões) de disparo desejada(s) para ativá-la(s).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/52.png" style={{width:1000, height:'auto'}}/></div>

## Etapa 5. Envie a Configuração de Disparo para o Grove Vision AI V2

Por fim, clique no botão **Send** para transmitir a configuração de disparo para o seu dispositivo Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/53.png" style={{width:1000, height:'auto'}}/></div>

O Grove Vision AI V2 agora executará as ações de disparo configuradas quando as condições especificadas forem atendidas, fornecendo uma indicação visual da saída do modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.jpg" style={{width:400, height:'auto'}}/></div>

:::caution
Lembre-se de que a funcionalidade de saída depende da conexão baseada na web entre a plataforma SenseCraft AI e o seu dispositivo Grove Vision AI V2. Se a conexão for perdida ou interrompida, as ações de disparo configuradas deixarão de funcionar. Garanta uma conexão estável durante todo o processo.
:::

## Conclusão

Seguindo este guia passo a passo, você aprendeu como configurar as definições de saída de modelo e ações de disparo na plataforma SenseCraft AI para o dispositivo Grove Vision AI V2. Agora você pode configurar o seu dispositivo para executar ações específicas, como ligar o LED onboard ou salvar imagens capturadas, com base na saída do seu modelo treinado. Essa funcionalidade permite criar aplicações e projetos interativos usando o Grove Vision AI V2 e o SenseCraft AI. Lembre-se de manter uma conexão estável entre a plataforma web e o seu dispositivo para uma operação contínua.

O Grove Vision AI V2 ainda é essencialmente um sensor de câmera com IA, portanto não podemos esperar fazer muito mais do que coisas de sensor com ele. Se você tiver um MCU extra, poderá fazer projetos mais interessantes com a interface Grove ou a interface pino a pino. O SenseCraft AI é apenas um meio de entregar o modelo; para mais rotinas de Arduino no modelo Grove Vision AI V2, consulte [Introdução ao Grove Vision AI V2](https://wiki.seeedstudio.com/pt-br/grove_vision_ai_v2_software_support/).

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
