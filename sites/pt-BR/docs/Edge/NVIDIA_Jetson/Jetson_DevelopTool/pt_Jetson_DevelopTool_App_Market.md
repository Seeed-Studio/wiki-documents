---
description: Navegue e instale aplicações de IA no seu dispositivo Jetson usando o App Market no Seeed Jetson DevelopTool — incluindo YOLOv8, Ollama, DeepSeek e Node-RED.
title: App Market
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - App Market
  - YOLOv8
  - Ollama
  - DeepSeek
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_app_market
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/pt-br/jetson_developtool_app_market/
---

O módulo **App Market** permite que você navegue e instale aplicações de IA populares diretamente no seu dispositivo Jetson — sem necessidade de comandos Docker manuais ou gerenciamento de dependências.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-app-market.png" style={{width:800, height:'auto'}}/></div>

## Aplicações disponíveis

| App | Categoria | Descrição |
|-----|----------|-------------|
| YOLOv8 | Visão computacional | Detecção de objetos em tempo real com aceleração NVIDIA TensorRT |
| Ollama | LLM | Execute modelos de linguagem de grande porte localmente no Jetson |
| DeepSeek | LLM | Motor de inferência DeepSeek otimizado para implantação na borda |
| Node-RED | IoT / Automação | Programação de fluxos de baixo código para pipelines de IoT |
| Jupyter Lab | Desenvolvimento | Servidor interativo de notebooks Python |
| VS Code Server | Desenvolvimento | IDE VS Code baseada em navegador |

## Instalando um app

1. Conecte-se ao seu dispositivo Jetson (veja [Conectar dispositivo](/pt-br/jetson_developtool_connect_device)).
2. Abra a aba **App Market**.
3. Navegue pelos apps disponíveis ou use a barra de pesquisa para filtrar por categoria.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/appmarket-categories.png" style={{width:800, height:'auto'}}/></div>

4. Clique em **Install** no app desejado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/appmarket-app-cards.png" style={{width:800, height:'auto'}}/></div>

5. A ferramenta fará o pull da imagem Docker apropriada e a configurará automaticamente para a versão JetPack do seu Jetson.
6. Depois de instalado, clique em **Launch** para iniciar o app e obter a URL de acesso (para apps baseados na web) ou as informações de conexão.

:::tip
Os apps do App Market são empacotados como contêineres Docker. Certifique-se de que o Docker esteja instalado no seu Jetson. Caso não esteja, a ferramenta oferecerá instalá-lo automaticamente.
:::

## Demo: implantação Depth Anything V3 com um clique

O vídeo a seguir mostra como implantar o **Depth Anything V3** em um dispositivo Jetson com um único clique a partir do App Market.

<div style={{textAlign:'center'}}>
  <video width="800" controls>
    <source src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/depth-anything-v3-deploy.mp4" type="video/mp4"/>
  </video>
</div>

## Gerenciando apps instalados

Na aba **Installed**, você pode:

- **Start / Stop** apps individualmente
- **Update** para a versão mais recente
- **Remove** apps para liberar espaço de armazenamento
- Ver o mapeamento de portas e a URL de acesso de cada app

## Suporte técnico e discussão sobre produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
