---
description: Este guia explica como enviar imagens reconstruídas por IA via MeshCore usando compressão de imagem de taxa de bits ultrabaixa baseada no Card Tracker T1000-E.
title: Transmissão de Imagem
keywords:
  - MeshCore
  - MeshCore Open
  - Card Tracker T1000-E
  - Transmissão de Imagem
  - Compressão de Imagem com IA
  - LoRa Mesh
  - AEIC-SE
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshCore_Open_Image_Transmission_MeshCore.png
slug: /meshcore_ai_image_transmission_t1000e
sku: 114993369,114993649
sidebar_position: 1
last_update:
  date: 9/19/2026
  author: Michelle Huang
createdAt: 2026-09-19
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/pt-br/meshcore_ai_image_transmission_t1000e/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}>

<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshCore_Open_Project.png" style={{width:900, height:'auto'}}/>

</div>

[MeshCore](https://meshcore.io/) é projetado para comunicação LoRa mesh de baixa largura de banda. A transmissão tradicional de imagens é difícil porque fotos normais geralmente exigem centenas de kilobytes ou mais de dados. O [MeshCore Open](https://meshcoreopen.org/) permite **transmissão de imagem com taxa de bits ultrabaixa** sobre MeshCore combinando:

- Aplicativo MeshCore Open
- Compressão de imagem baseada em IA
- Pacotes `GRP_DATA` do MeshCore


Esse recurso de transmissão de imagem é adequado para usuários que precisam compartilhar informações visuais em locais sem Internet confiável ou redes celulares.

- **Exploradores ao ar livre**: Caminhantes, alpinistas e equipes de expedição podem compartilhar condições de trilha, enviar imagens de paisagens remotas e fornecer informações visuais quando o texto não é suficiente.
- **Equipes de resposta a emergências e desastres**: A equipe pode compartilhar condições de campo, fornecer atualizações visuais rápidas e melhorar a consciência situacional da equipe por meio de imagens.
- **Entusiastas de comunicação off-grid**: Adequado para usuários de MeshCore e rádio amador que desejam explorar comunicação de borda com IA.


## Como a Transmissão de Imagem Funciona no MeshCore

A imagem **não é transmitida diretamente**. O remetente usa um codificador de IA local para converter a imagem em um arquivo binário muito pequeno. O receptor não restaura os pixels originais. Em vez disso, um decodificador de IA local usa os dados compactados para gerar uma imagem visualmente semelhante.


O fluxo de trabalho é:

```text
Original Image
      ↓
AI Encoder
      ↓
Small Compressed Data
(~100–200 bytes)
      ↓
MeshCore Network
      ↓
AI Decoder
      ↓
Reconstructed Image
```

## Introdução ao MeshCore Open

### Configuração inicial

1. Instale o aplicativo MeshCore Open. [Clique aqui](https://discord.com/channels/@me/1547501987703037965/1547520066478936134) para instalar a versão do APP que oferece suporte à transmissão de imagem.
2. Conecte seu nó MeshCore ao APP. [Clique aqui](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e_meshcore/) para ler o guia de conexão do T1000-E.
3. Configure sua região LoRa e as configurações de rede.
4. Certifique-se de que outro nó MeshCore esteja disponível como receptor.

Para instruções gerais de configuração do MeshCore, consulte o [Guia de Introdução ao MeshCore Open](https://meshcoreopen.org/docs/getting-started/):

### Instalar o modelo

Ative a transmissão de imagem e baixe os arquivos de modelo de ML na configuração do APP.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshCore_Open_Setting.png" style={{width:600, height:'auto'}}/>
</div>

### Transmissão de Imagem

Escolha uma imagem do seu telefone. 

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshOpen_PhotoSelection.png" style={{width:300, height:'auto'}}/>
</div>

O APP processará automaticamente a imagem antes da transmissão. Os dados de imagem compactados serão transmitidos pela rede MeshCore. O tempo de transmissão depende do número de saltos na malha, da configuração de rádio, do tráfego de rede e da qualidade do sinal. Os dados transmitidos contêm apenas a representação compactada, não a imagem original.

Quando o nó receptor recebe os dados compactados, o decodificador então executa a reconstrução da imagem. A imagem reconstruída aparecerá na interface de chat.
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshCore_Open_Image_Transmission_MeshCore.png" style={{width:600, height:'auto'}}/>
</div>

## Entendendo Imagens Reconstruídas por IA

A imagem de saída não é uma cópia perfeita em pixels da imagem original. O decodificador pode gerar detalhes adicionais que não foram transmitidos. Portanto, esse recurso é adequado para consciência de cena, comunicação ao ar livre, monitoramento remoto e compartilhamento de informações visuais. Não é adequado para coleta de evidências, verificação de identidade, análise científica de imagens e aplicações que exigem reprodução exata da imagem.

## Recursos

- [Documentação do MeshCore Open](https://meshcoreopen.org/docs/getting-started/)
- [Codec de Imagem de Taxa de Bits Ultrabaixa AEIC-SE](https://huggingface.co/zjs81/aeic-se-onnx)
