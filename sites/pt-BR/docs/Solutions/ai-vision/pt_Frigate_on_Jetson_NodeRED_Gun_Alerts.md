---
description: Sistema de detecção de armas com IA de borda baseado em Frigate-on-Jetson e Node-RED, com suporte às plataformas Jetson e reComputer R2000 (Hailo).
title: Solução de Detecção de Armas com IA para Alertas em Tempo Real na Borda
image: https://files.seeedstudio.com/wiki/solution/crowd_tracking/scene_3.webp
slug: /solutions/frigate-on-jetson-nodered-gun-alerts
sidebar_position: 1
last_update:
  date: 10/22/2025
  author: Spencer Y
createdAt: '2025-09-05'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/solutions/frigate-on-jetson-nodered-gun-alerts/
---

:::note[Notice]
Este projeto é fornecido **apenas para fins educacionais e de demonstração**.  
Se você pretende implantá-lo em um ambiente real, **certifique-se de estar em conformidade com as regulamentações locais** e obtenha **todas as autorizações necessárias** antes de fazê-lo.
:::

## Visão Geral

A Solução de Detecção de Armas com Frigate + Node-RED é uma pilha de análise de vídeo com IA de borda que detecta armas de fogo em streams de câmera ao vivo e orquestra alertas, revisão e integrações. Desenvolvida para implantações com preservação de privacidade e baixa latência em **AI Boxes**, na série NVIDIA **Jetson** e **reComputer R2000**, ela combina um mecanismo de detecção otimizado (Frigate) com uma camada de automação visual (Node‑RED) e revisão opcional assistida por LLM.

<div align="center">
  <img class='img-responsive' width={680} src="https://www.seeed.cc/wp-content/uploads/2025/09/archi_2-1.png" alt="solution diagram"/>
</div>

Ela oferece uma experiência completa de AI NVR[^nvr] que:

- Detecta armas de fogo a partir de streams RTSP/HTTP ao vivo em tempo real.  
- Automatiza alertas de eventos, registro e notificações.  
- Opera localmente para garantir privacidade, baixa latência e confiabilidade.  

[^nvr]: AI NVRs utilizam modelos avançados de aprendizado de máquina para fornecer **insights em tempo real e capacidades de automação**, enquanto NVRs tradicionais se concentram principalmente em gravar e armazenar imagens de vídeo.
`

Siga este guia para implantar a solução se o seu dispositivo não for do pacote da Seeed ou se você quiser adaptá-la à sua própria configuração.

<table class="table-center">
  <tr>
      <th>Gestão de Segurança em Campus</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://www.seeed.cc/wp-content/uploads/2025/08/scene_3.png" style={{width:480, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeed.cc/solutions/campus-safety-management" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Pacote de Solução 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Recursos

NVRs tradicionais dependem de monitoramento humano, que é lento, inconsistente e difícil de escalar. Esta solução resolve esses desafios ao se concentrar em resultados mensuráveis que entregam valor imediato.
<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Tempo de Resposta Mais Rápido</h3>
                <p>Obtenha consciência situacional instantânea com alertas automáticos e painéis em tempo real, evitando os atrasos do monitoramento manual.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Menos Falsos Positivos</h3>
                <p>Utilize verificação opcional assistida por LLM para revisar alertas de forma inteligente, reduzindo significativamente falsos alarmes e concentrando a atenção do operador.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Soberania de Dados & Privacidade</h3>
                <p>Toda inferência e processamento de dados ocorre on‑premise, sem dependência de nuvem, garantindo total privacidade e controle dos dados.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Suporte Escalável a Múltiplos Streams</h3>
                <p>Aproveite o poderoso decodificador de hardware nas plataformas Jetson e Hailo para monitorar múltiplos streams de câmera simultaneamente sem perda de desempenho.</p>
            </div>
        </li>
    </ul>
</div>

## Arquitetura do Sistema

A solução é composta por vários módulos principais que funcionam em conjunto:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Architecture%20Diagram.png" alt="system architecture"/>
</div>

- **Frigate** processa o vídeo ao vivo e publica eventos de detecção via MQTT.
- **Node-RED** se inscreve nesses eventos, orquestra fluxos de trabalho de alerta e atualiza o painel.
- O **Painel em Tempo Real** oferece monitoramento visual, revisão de eventos e configuração do sistema.
- **Webhooks** permitem integração com quaisquer sistemas de terceiros para notificações e exportação de dados.

## Guia de Implantação

### Pré-requisitos

- **AI Boxes/Hardware de Borda:** reComputer J3011/J4012 (série Jetson Nano/Xavier/Orin).
- **Câmeras de Rede:** streams RTSP/HTTP acessíveis na mesma rede.
- Familiaridade básica com Docker, Node-RED e configuração do Frigate.

<!-- 
This is a ready-to-use AI NVR solution that unifies hardware and software.

- Pre-installed **Frigate** detection engine with a baseline gun model.  
- Built-in **Node-RED Dashboard** for alert visualization and event management.  
- Web-based access — configure RTSP streams and start monitoring immediately.   -->

Nesta página, usaremos o **reComputer J4012 (Jetson Orin™ NX 16GB)** como plataforma de exemplo. No entanto, as etapas são semelhantes para outros hardwares compatíveis.

### Etapa 1: Instalação do Frigate

:::note[Notice]
Execute o seguinte comando para instalar o `curl` se ele ainda não estiver instalado:

```bash
sudo apt update && sudo apt install -y curl
```

⚠️ Não execute `sudo apt upgrade`, pois isso pode quebrar dependências específicas do Jetson.
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/frigate-on-jetson" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>frigate-on-jetson</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Use o script de instalação em um clique pré-configurado para implantar o **Frigate** automaticamente no seu dispositivo Jetson.

```shell
curl -sSL https://raw.githubusercontent.com/Seeed-Studio/frigate-on-jetson/main/install.sh | bash
```

Quando a instalação terminar, abra o navegador e acesse `http://<your_jetson_ip>:5000` para entrar na interface web do Frigate e configurar suas câmeras.

Se não funcionar, verifique se você não tem falta de permissão para executar o Docker sem `sudo`. Consulte a [seção de FAQ](#docker-permission-denied) para passos de solução de problemas. Em seguida, execute novamente o comando acima.

<div style={{textAlign:'center'}}>
  <img alt="Frigate Homepage" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/homepage%20demo.png" />
</div>

No NodeRED, nós iremos assinar os tópicos MQTT do Frigate para receber eventos de detecção e orquestrar fluxos de trabalho de alerta. Você pode consultar a [documentação de MQTT do Frigate](https://docs.frigate.video/integrations/mqtt) para mais detalhes sobre os tópicos e payloads disponíveis.

### Etapa 2: Configuração do Node-RED

Usamos NodeRED como a camada de orquestração para lidar com a programação.

#### Instalação do Node-RED

Se você ainda não instalou o Node-RED, siga as etapas abaixo para configurá-lo no seu dispositivo Jetson.

Execute o Node-RED em um contêiner com o seguinte comando:

```bash
sudo docker run -d --restart=always -p 1880:1880 -v node_red_data:/data --name mynodered nodered/node-red
```

Depois que o contêiner iniciar, abra o navegador e acesse `http://<your_jetson_ip>:1880` para entrar no editor do Node-RED.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/security/nodered-panel.png" alt="nodered-panel"/>
</div>

#### Instalação de Nodes

Antes de começarmos, certifique-se de instalar os seguintes nodes do Node-RED pela opção "Manage palette" no editor do Node-RED:

- `node-red-dashboard` para construir o dashboard simples do front-end.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/security/nodered-install-dashboard.png" alt="nodered-install-dashboard"/>
</div>

## Aplicações

Em ambientes como campi, centros de transporte, parques industriais e locais públicos, os operadores precisam responder instantaneamente a riscos envolvendo armas de fogo. Esta solução foi projetada para:

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 15a.75.75 0 100-1.5.75.75 0 000 1.5z" /></svg>
            </div>
            <div class="info-content">
                <h3>Campus &amp; Educação</h3>
                <p>Habilite alertas proativos para as equipes de segurança e facilite a revisão rápida de incidentes com dados de eventos registrados e capturas de tela.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875m-17.25 4.5h16.5M5.625 13.5a1.875 1.875 0 10-3.75 0 1.875 1.875 0 003.75 0zm12.75 0a1.875 1.875 0 10-3.75 0 1.875 1.875 0 003.75 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Centros de Transporte Público</h3>
                <p>Implemente monitoramento com múltiplas câmeras em estações e integre alertas diretamente em um Centro de Operações de Segurança (SOC) via webhooks.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402a3.75 3.75 0 00-.625-6.25a3.75 3.75 0 00-6.25-.625l-6.402 6.401a3.75 3.75 0 000 5.304m7.496-9.191a3.75 3.75 0 015.304 0l6.401 6.402a3.75 3.75 0 010 5.304l-6.401 6.402a3.75 3.75 0 01-5.304 0l-6.401-6.402a3.75 3.75 0 010-5.304l6.401-6.402z" /></svg>
            </div>
            <div class="info-content">
                <h3>Parques Industriais &amp; Logística</h3>
                <p>Proteja perímetros, pontos de acesso e zonas sensíveis com monitoramento automatizado que nunca se cansa ou se distrai.</p>
            </div>
        </li>
    </ul>
</div>

<br />

Os seguintes demos de exemplo orientam você pelo processo de implantação e personalização da solução.

### Demo 1 — Alerta de Detecção de Arma

Este demo mostra como criar um fluxo Node-RED que escuta eventos de detecção de arma do **Frigate** via **MQTT** e então dispara *alertas em tempo real* tanto em um dashboard quanto por meio de notificações via webhook.

#### Pipeline de Dados

Frigate (detecta arma) → MQTT (publica) → Node-RED (filtra/alerta) → Dashboard + Webhook

<div align="center">
  <img class="img-responsive" width="680" src="https://files.seeedstudio.com/wiki/solution/security/nodered-sample-gun-shot.png" alt="Exemplo de detecção de arma no Node-RED"/>
  <br/>
</div>

#### Configuração do Fluxo Node-RED

Você pode importar o fluxo de exemplo diretamente no seu editor Node-RED usando o arquivo de configuração de fluxo fornecido ([gist flow.json](https://gist.github.com/Love4yzp/2fccdfa6a2d8e64e2740cd566b9b991c)).

> **Observação:** Atualize o endereço IP e a URL do webhook no fluxo para corresponder à sua instância do Frigate e ao endpoint de notificação.

O caminho de entrada do dashboard é configurado como `/frigate`.
Acesse o dashboard em: `http://<your_jetson_ip>:1880/dashboard/frigate`

Por exemplo: `http://192.168.101.100:1880/dashboard/frigate`.

#### Visão Geral do Fluxo

- Ouvinte MQTT – Assina um tópico específico (por exemplo, frigate/reviews) para receber eventos de detecção.
- Filtro de Eventos – Deixa passar apenas eventos rotulados como “gun”.
- Construtor de Alertas – Constrói uma mensagem de alerta detalhada incluindo miniatura, carimbo de tempo e contador.
- Atualização do Dashboard – Atualiza o dashboard com a imagem mais recente, histórico de eventos e contadores de detecção.
- Notificação via Webhook – Envia requisições HTTP POST para endpoints externos, como bot do Telegram, Slack ou APIs personalizadas.

#### Resultados

<div align="center">
  <img class="img-responsive" width="680" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/frigateevents.png" alt="Visualização de eventos do Frigate"/>
</div>

Depois de configurar este fluxo, o **Node-RED** responderá automaticamente aos **eventos de detecção de arma do Frigate** atualizando seu dashboard e enviando notificações imediatas via webhook.

Prossiga para a [seção de Configuração do Frigate](#frigate-config) para instruções sobre como configurar os parâmetros de detecção.

## Config Padrão do Frigate {#frigate-config}

Navegue rapidamente até a página de configuração do Frigate em `http://<your_jetson_ip>:5000/config` para ver sua configuração atual.

O Frigate usa um arquivo YAML chamado `config.yml` para definir como ele é executado.
Este arquivo informa ao Frigate onde encontrar os streams da sua câmera, qual modelo de IA usar e como enviar os resultados de detecção por MQTT.
Ao ajustá-lo, você pode controlar como os objetos são detectados, gravados e exibidos.

### Local de Armazenamento

Por padrão, o Frigate armazena gravações de vídeo e capturas de tela em: `/media/frigate` no seu dispositivo Jetson.

Por exemplo:

```bash
seeed@desktop:/$ docker exec -it frigate /bin/sh
root@274103ae951b:/opt/frigate# cd /media/frigate/
root@274103ae951b:/media/frigate# ls
clips  exports  handgun.mp4  machinegun.mov  recordings
```

Se você planeja manter vídeos por períodos mais longos, monte este diretório em um **SSD externo ou unidade de rede** para evitar que o armazenamento interno do seu Jetson fique cheio.

### Configuração da Câmera

No Frigate, cada câmera precisa ser definida na seção `cameras:`.
Cada bloco de câmera descreve de onde vem o fluxo de vídeo e como ele é decodificado antes de ser analisado pelo modelo de detecção.

```YAML
cameras:
  handgun:
    enabled: true
    ffmpeg:
      hwaccel_args: preset-jetson-h264
      inputs:
        - path: /media/frigate/handgun.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
  machinegun:
    enabled: true
    ffmpeg:
      hwaccel_args: preset-jetson-h264
      inputs:
        - path: /media/frigate/machinegun.mov
          input_args: -stream_loop -1 -re
          roles:
            - detect
```

**Explicação:**

- `enabled`: Ativa ou desativa esta câmera.
- `ffmpeg`: Define como o Frigate usa o FFmpeg para ler e decodificar o fluxo de vídeo.
  - FFmpeg é um framework de mídia que converte e transmite vídeo a partir de arquivos, câmeras RTSP ou outras fontes.
- `hwaccel_args`: Habilita aceleração de hardware (por exemplo, decodificação H.264 no Jetson).
- `inputs`: Lista uma ou mais entradas de vídeo.
  - `path`: A fonte de vídeo real.
    - Neste exemplo, é um arquivo de demonstração local como `/media/frigate/handgun.mp4`.
    - Em implantações reais, você pode substituí-lo por um fluxo de câmera ao vivo, como: `path: rtsp://user:password@192.168.1.21:554/stream1`
- `input_args`: Parâmetros extras do FFmpeg.
  - `-stream_loop -1` faz o loop do vídeo de demonstração indefinidamente.
  - `-re` garante que a reprodução corresponda à velocidade em tempo real.
- `roles`: Define como esta entrada é usada.
  - `detect` significa que o fluxo é usado para detecção de objetos.
  - Outros papéis possíveis incluem `record` ou `rtmp` para streaming.

:::tip
Cada câmera pode ter várias entradas — por exemplo, uma para detecção e outra para gravação em alta qualidade.
O Frigate gerencia automaticamente a decodificação e extração de quadros via FFmpeg para todas as fontes definidas.
:::

### Modelo de IA e Configurações de Detecção

Depois de definir as câmeras, o próximo passo é informar ao Frigate qual modelo de IA usar e como processar cada quadro de vídeo.
Esta seção define o tipo de detector, o caminho do arquivo do modelo e o comportamento de detecção, como tamanho do quadro, rastreamento de objetos e limiar.

```YAML
detectors:
  tensorrt:
    type: tensorrt
    device: 0

model:
  path: /config/model_cache/tensorrt/yolov4-tiny-288_gun_v3.trt
  width: 288
  height: 288
  labelmap_path: /config/guns.txt
  input_tensor: nchw
  input_pixel_format: rgb
```

**Explicação:**

- `detectors`: Define qual backend de IA o Frigate usa para inferência.
  - `type`: tensorrt informa ao Frigate para usar aceleração NVIDIA TensorRT (otimizada para Jetson).
  - `device`: Especifica o índice da GPU. Para a maioria dos dispositivos Jetson, use 0.
- `model`: Aponta para o arquivo de modelo de IA e descreve seu formato de entrada.
  - `path`: Caminho para o seu arquivo .trt (engine TensorRT).
  - `width` / height: Resolução de entrada do modelo (deve corresponder ao que o modelo espera).
  - `labelmap_path`: Arquivo que mapeia índices de classes para rótulos, por exemplo guns.txt → contém "gun".
  - `input_tensor`: Define o layout do tensor; nchw = batch, canal, altura, largura.
  - `input_pixel_format`: Especifica o formato de pixel, geralmente rgb.

:::tip
Modelos TensorRT são versões compiladas de redes treinadas, otimizadas para inferência rápida em GPU.
Você pode substituir este arquivo pelo seu próprio modelo se treinar um novo — apenas garanta que a largura, altura e rótulos correspondam.
:::

### Configuração de Rastreamento de Objetos

O Frigate pode detectar e rastrear tipos específicos de objetos.
Para este projeto, rastreamos apenas armas, o que mantém o sistema eficiente e focado.

```YAML
objects:
  track:
    - gun
  filters:
    gun:
      threshold: 0.3
```

**Explicação:**

- `track`: Lista de objetos para detectar e rastrear.
  - Aqui é apenas "gun", mas você pode adicionar mais rótulos (por exemplo, pessoa, carro etc.) se o seu modelo os suportar.
- `filters`: Ajusta finamente a confiança de detecção para cada tipo de objeto.
- `threshold`: Valor mínimo de confiança (0,0–1,0).
  - Um valor mais baixo (como 0,3) é mais sensível, mas pode incluir falsos positivos.
  - Um valor mais alto (como 0,5) torna a detecção mais rígida.

:::tip
Se você notar muitas detecções falsas, tente aumentar o threshold para 0,5 ou mais.
Para objetos menores que são frequentemente perdidos, você pode diminuí-lo um pouco — mas equilibre entre precisão e ruído.
:::

### Configurações de Gravação

Quando o Frigate detecta um objeto, ele pode gravar vídeos e salvar snapshots para análise posterior ou exibição de alertas.
Essas configurações controlam por quanto tempo as gravações são armazenadas e quais informações são exibidas nas imagens capturadas.

```YAML
record:
  enabled: true
  retain:
    days: 3
    mode: all
```

**Explicação:**

- `enabled`: Ativa a gravação de vídeo.
- `retain`: Controla por quanto tempo manter os arquivos gravados e que tipo de filmagem é armazenada.
  - `days`: Número de dias para manter as gravações antes da exclusão automática.
  - `mode`:
    - `all` – grava continuamente (útil para testes).
    - `motion` – grava apenas quando for detectado movimento.
    - `events` – grava somente quando objetos rastreados (por exemplo, armas) aparecem.

:::tip
Para implantações reais, use `mode: events` ou `mode: motion` para economizar espaço de armazenamento mantendo gravações úteis.
:::

### Configurações de Snapshot

```YAML
snapshots:
  enabled: true
  clean_copy: true
  timestamp: true
  bounding_box: true
  crop: false
  retain:
    default: 14
  quality: 95
```

**Explicação:**

- `enabled`: Habilita o salvamento de snapshots quando ocorre um evento de detecção.
- `clean_copy`: Salva uma versão adicional sem caixas de detecção.
- `timestamp`: Adiciona a sobreposição de data e hora no snapshot.
- `bounding_box`: Desenha uma caixa ao redor dos objetos detectados.
- `crop`: Quando true, salva apenas a área recortada da detecção.
- `retain.default`: Número de dias para manter os snapshots.
- `quality`: Define a qualidade da imagem (1–100). Maior = melhor detalhe, porém tamanho de arquivo maior.

:::tip
Snapshots são ideais para alertas ou dashboards, pois são muito menores que clipes de vídeo e fáceis de enviar via webhook ou MQTT.
:::

### Visão Birdseye

O Frigate também suporta uma visão Birdseye, que exibe múltiplos feeds de câmera juntos para uma visão geral rápida.

```YAML
birdseye:
  enabled: true
  mode: objects
```

**Explicação:**

- `enabled`: Ativa a visão composta Birdseye.
- `mode`:
  - `objects` – mostra apenas câmeras onde objetos estão sendo detectados no momento.
  - `continuous` – sempre mostra todos os feeds de câmera.

### Configuração de MQTT

O Frigate comunica seus eventos de detecção por meio de MQTT, o que permite que outros serviços — como Node-RED, Home Assistant ou dashboards personalizados — recebam atualizações em tempo real sempre que um objeto é detectado.
Ele também fornece opções de registro (logging) para ajudar a monitorar o desempenho do sistema e depurar problemas de detecção.

```YAML
mqtt:
  enabled: true
  host: 172.17.0.1
  port: 1883
```

**Explicação:**

- `enabled`: Ativa a comunicação via MQTT.
- `host`: O endereço IP do seu broker MQTT.
  - Ao usar Docker no Jetson, `172.17.0.1` geralmente se refere à máquina host.
  - Substitua pelo IP real do seu servidor MQTT se você o executar em outro dispositivo.
- `port`: Porta padrão do MQTT, normalmente 1883.

Para configurações MQTT mais avançadas, consulte a [documentação MQTT do Frigate](https://docs.frigate.video/integrations/mqtt).

Com o MQTT habilitado, o Frigate se torna parte de uma rede de eventos em tempo real — enviando alertas de detecção de armas diretamente para o Node-RED ou Home Assistant, onde eles podem acionar dashboards, notificações ou fluxos de trabalho personalizados.

## Desempenho e Dimensionamento

| Plataforma de Hardware | Modelo | FPS (Total) | Streams Estáveis (≥15 FPS) | Observações |
| ----------------- | ----- | ----------- | ------------------------- | ------- |
| reComputer R2000 (Raspberry Pi + Hailo-8) | YOLOv11-s | 30 | 2 | NVR de IA compacto; dispositivo de borda eficiente e de baixo consumo |
| reComputer J3011 (Jetson Orin Nano 8 GB) | YOLOv4-tiny-288 | 90 | 6 | Jetson de entrada; FPS estabiliza após aquecimento |
| reComputer J4012 (Jetson Orin NX 16 GB) | YOLOv4-tiny-288 | 120 | 8 | Limite de concorrência NVDEC atingido; ainda há folga de computação |

## Recursos e Próximos Passos

- **Pacote de Solução:** [Frigate + Node-RED Gun Detection on Jetson](https://www.seeed.cc/solutions/campus-safety-management)
- **Documentação do Frigate:** [https://docs.frigate.video/](https://docs.frigate.video/)
- **Repositório GitHub:** [Seeed-Studio / frigate-on-jetson](https://github.com/Seeed-Studio/frigate-on-jetson)
- **Add-on de Dashboard para Node-RED:** [@flowfuse/node-red-dashboard](https://flows.nodered.org/node/@flowfuse/node-red-dashboard)

<!-- Summary

The **Frigate + Node-RED Gun Detection Solution** delivers real-time firearm detection and intelligent alerting on edge AI hardware — from Raspberry Pi + Hailo systems to Jetson Orin series. It offers a modular, open, and production-ready framework for security integrators, enabling private on-premise analytics, instant visualization, and LLM-driven verification while keeping video data under full control.

| Module | Purpose / Value | Key Capabilities |
| ------ | ---------------- | ---------------- |
| Real-time Video Monitoring | Observe scene context before and after detection | Multi-RTSP/HTTP stream input; split-screen or carousel views; zoom and PTZ control |
| Gun Detection Visualization | Confirm detection accuracy visually | Real-time bounding boxes with confidence overlay; frame pause, magnify, and annotate |
| Event / Alert Queue | Deliver instant alerting and logging | Adjustable confidence and ROI thresholds; popup, sound, light, webhook, email, or SMS actions |
| Event Replay & Retrieval | Support evidence review and playback | Filter by time, camera, or alert type; jump to pre-event and post-event footage |
| Detection Log & Export | Enable third-party analytics and reporting | Timestamp, camera, confidence, snapshot metadata; export in CSV or JSON formats |
| LLM-based Analysis | Reduce false positives and generate summaries | False-positive review for gun/not-gun decisions; semantic summarization and querying (for example, rifle alerts last week); contextual response suggestions for operators | -->

## FAQ

### 1. Não consigo instalar Docker no meu dispositivo Jetson. O que devo fazer?

Se você encontrar problemas com o script padrão de instalação do Docker, pode usar o seguinte script alternativo:

```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```

Para mais informações, visite: https://linuxmirrors.cn

### 2. Como saber minha versão do Jetpack?

Execute o seguinte comando no seu dispositivo Jetson:

```bash
dpkg -l | grep nvidia-jetpack
```

A saída mostrará a versão do Jetpack instalada.

### 3. Como atualizar minha versão do Jetpack?

Siga as instruções na [wiki do seu produto específico](/pt-br/NVIDIA_Jetson).

### 4. “Permission Denied” ao executar Docker {#docker-permission-denied}

Você não tem permissão para acessar o daemon do Docker.
Execute:

```shell
sudo usermod -aG docker $USER
newgrp docker
```

> Fazer logout e login novamente também aplica as novas permissões de grupo.

Depois verifique:

```shell
docker ps
```
