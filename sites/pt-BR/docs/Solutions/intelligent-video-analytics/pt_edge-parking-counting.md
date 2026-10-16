---
description: Conte entradas e saídas de veículos em estacionamentos com suas câmeras de portão existentes e publique em tempo real as vagas livres — hardware, implantação, interfaces e dados medidos em hosts Jetson e RK
title: Contagem de Veículos em Entradas/Saídas de Estacionamento — Seleção, Implantação e Dados Medidos
keywords:
  - contagem de veículos em estacionamento
  - contagem de entradas e saídas
  - vagas de estacionamento livres
  - painel de orientação de estacionamento
  - contador de cruzamento de linha
  - Jetson Orin Nano
  - RK3588
  - RK3576
  - YOLOX
  - MQTT
image: https://files.seeedstudio.com/wiki/reference-design/edge_parking_counting/panel-counting-2-after-20261009-fd76361b.jpg
slug: /solutions/edge-parking-counting
sidebar_position: 21
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/pt-br/solutions/edge-parking-counting/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[Antes de usar]
Um conjunto usa uma câmera, cobrindo uma entrada. A contagem depende de os veículos cruzarem uma linha desenhada na imagem; veículos que ficam ocultos ou não cruzam a linha não são contados.
:::

## O que esta solução faz

Saiba quantas vagas restam sem enterrar laços em cada faixa ou instalar contadores na cancela. Após a implantação, você arrasta uma linha de contagem sobre a imagem em um navegador; cada veículo que a cruza conta como entrada ou saída, e os veículos dentro e as vagas livres são enviados em tempo real para o seu broker MQTT, prontos para acionar um painel de vagas livres ou um sistema de estacionamento. Serve para estacionamentos de shoppings e escritórios, bem como portões de campus e fábricas.

- Pacote de implantação (Docker Compose e configuração): [github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_parking_counting)
- Seleção e implantação: [página de reference design](https://www.seeed.cc/solutions/reference-designs/parking-entry-exit-counting)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>O vídeo fica no local</h3>
                <p>A imagem é analisada no host ao lado do portão; apenas as contagens saem dele.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Conta no cruzamento</h3>
                <p>Em um reComputer J30 Series, todos os 41 cruzamentos foram contados na direção correta; veja "Performance e dados medidos".</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Use as câmeras que você já tem</h3>
                <p>Câmeras de rede RTSP existentes no portão se conectam diretamente; sem laços, sem mudanças na cancela.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Entradas e saídas, por tipo de veículo</h3>
                <p>Cada registro de cruzamento traz a direção e o tipo de veículo (carro, motocicleta, ônibus, caminhão).</p>
            </div>
        </li>
    </ul>
</div>

### Em um dispositivo real

A própria página de pré-visualização no navegador do host de contagem: a linha vertical amarela é a linha de contagem, cada veículo carrega um ID de trilha e confiança, e o painel à direita mostra veículos dentro, vagas livres e os totais de hoje.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_parking_counting/panel-counting-1-before-20261009-e25d0080.jpg" alt="Contagem de entrada/saída em um reComputer J30 Series: veículo #48 antes da linha, 1/120 dentro, 24 entradas e 23 saídas hoje"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_parking_counting/panel-counting-2-after-20261009-fd76361b.jpg" alt="O mesmo veículo após cruzar: as saídas de hoje passam a 24, 0/120 dentro"/>
</div>

As duas capturas de tela têm 3 s de diferença. A entrada é um clipe de teste sintético (uma imagem de veículo se movendo para frente e para trás em um fundo cinza), não imagens reais do local.

## Hardware necessário

Três elementos no local: a câmera do portão, um host de contagem e um broker MQTT (um já existente no local, ou instale o Mosquitto).

**① Câmera do portão**: uma câmera de rede existente com um stream RTSP em H.264 ou H.265, fixa sobre a faixa.

**② Host de contagem**: escolha um; um host por câmera.

| | Host de contagem | Velocidade medida | Escolha quando |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J30 Series (J3011)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Jetson Orin Nano, JetPack 6.2 | 30 fps | Veículos passam em velocidade normal |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J40 Series (J4012)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Jetson Orin NX, JetPack 6.2 | Mesmo pacote que o J30 | O host também executa outros modelos |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576 Series](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>NPU integrado | 30 fps | Tráfego em velocidade normal, custo em primeiro lugar |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 Series](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>NPU integrado | cerca de 3 fps | Cancelas onde os veículos reduzem a velocidade ou param |

As velocidades do J30 e do RK3576 foram medidas com entrada 640×360 a 30 fps; o RK3588 com entrada 1280×720 a 5 fps.

O host de contagem, a câmera e o broker MQTT compartilham uma LAN ou conseguem se alcançar. A primeira implantação faz o download do app (cerca de 0,5–0,7 GB) e dos modelos; depois disso ele roda offline.

## Implantando no local

### 1. Instale a câmera

:::tip[Os veículos devem cruzar totalmente a linha]
Fixe a câmera na faixa de forma que os veículos entrem por um lado da imagem e saiam pelo outro. Em um host RK3588, um veículo precisa permanecer em vista por cerca de 1 s ou mais ao redor da linha para ser contado com confiabilidade, o que se adequa a portões com cancela.
:::

### 2. Instale o software: três etapas

As etapas por dispositivo estão na página de reference design; aqui está o resumo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/parking-entry-exit-counting" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e implante 🖱️</font></span></strong>
    </a>
</div><br />

1. **Implante o host de contagem**: informe o endereço RTSP da câmera, o broker MQTT e o número total de vagas; a implantação verifica as bibliotecas de runtime da placa.
2. **Desenhe a linha de contagem**: arraste a linha na página de pré-visualização, escolha qual lado significa "entrada" e salve.
3. **Verifique**: depois que um veículo cruza, a contagem de entrada ou saída na página de pré-visualização aumenta em um e um registro de cruzamento chega via MQTT.

## Interfaces

As contagens vão via MQTT para o seu broker; o status usa HTTP.

- **Painel de vagas livres / sistema de estacionamento**: assine o tópico de status do estacionamento e leia as vagas livres; mude para "Full" quando chegar a zero.
- **Estatísticas de tráfego**: assine o tópico de cruzamentos e conte por direção e tipo de veículo.
- **Várias entradas**: implante um conjunto por entrada e some-os por ID de site a montante.

| Tópico / porta | Conteúdo |
|---|---|
| MQTT `<site>/parking/<entrance>/crossing` | Um por cruzamento: direção (entrada / saída), tipo de veículo, confiança, veículos dentro e vagas livres após o cruzamento |
| MQTT `<site>/parking/<entrance>/occupancy` | Veículos dentro, vagas totais, vagas livres, entradas e saídas de hoje; enviado após cada cruzamento |
| HTTP 8080 `/preview` | Pré-visualização no navegador: imagem, linha de contagem, contagens de veículos dentro e vagas livres |
| HTTP 8099 `/healthz` | Se os frames estão chegando e a taxa de processamento |

## Performance e dados medidos

### Contagens e velocidade de processamento

| Dispositivo | Entrada | Velocidade de processamento | Resultado da contagem |
|---|---|---|---|
| reComputer J30 Series (Orin Nano) | 640×360, 30 fps | 29,98 fps, análise por frame p50 3,6 ms (medido) | Todos os 41 cruzamentos contados, todas as direções corretas (medido) |
| reComputer RK3576 Series | 640×360, 30 fps | 30,0 fps, CPU do contêiner 14,9%, memória 95 MiB (medido) | 19 eventos de cruzamento: 9 entradas, 10 saídas (medido) |
| reComputer RK3588 Series | 1280×720, 5 fps | 3,0 fps, análise por frame p50 17,8 ms (medido) | 107 eventos de cruzamento (medido) |

Todas as entradas são um clipe de teste sintético: uma imagem de veículo cruzando para frente e para trás em um fundo cinza. O RK3588 processa cerca de 3 fps, abaixo da entrada de 5 fps, então um veículo precisa permanecer próximo à linha por cerca de 1 s ou mais.

Reproduza: `sensecraft-solutions/solutions/edge_parking_counting` (pacote de implantação) com o clipe sintético `count-synthetic-120s.mp4`

### Modelos e runtimes

| Dispositivo | Detecção de veículos | Runtime |
|---|---|---|
| reComputer J30 / J40 Series | YOLOX, 416×416, FP16 | TensorRT |
| reComputer RK3588 / RK3576 Series | YOLOX, 416×416, INT8 (w8a8) | RKNN, decodificação de hardware MPP |

Parâmetros que afetam a contagem (pacote de implantação `config/counting*.json`):

- `counting.line` / `in_side`: posição da linha e qual lado conta como "entrada"; altere-os na página de visualização após a implantação.
- `counting.min_track_frames`: um veículo deve ser rastreado por pelo menos 3 quadros consecutivos antes de ser contado, portanto, em baixas taxas de quadros ele precisa permanecer visível por mais tempo.
- `counting.capacity`: vagas totais; vagas livres = total − veículos dentro.

### Degradações conhecidas

- **Aproximação excessiva e oclusão paralela**: quando as distâncias de seguimento são menores que 1 m ou dois veículos cruzam simultaneamente lado a lado, as caixas delimitadoras podem se fundir ou se ocultar, causando subcontagens ou vetores de direção invertidos. Divisores físicos de faixa são recomendados.
- **Interferência de pedestres e bicicletas**: o modelo é treinado em veículos motorizados. Travessias densas de pedestres ou motocicletas passando muito próximas a um carro podem fragmentar os IDs de rastreamento.
- **Velocidade e quadros de rastreamento**: cruzar a linha de contagem requer pelo menos 3 quadros rastreados. As faixas do portão devem ter um limite de velocidade recomendado ≤ 15 km/h; passagens rápidas tipo drive-through podem causar contagens perdidas.

## Fontes de dados e recursos

- Capturas de tela e resultados de contagem usam um clipe de teste sintético; a fonte original da imagem do veículo ainda precisa ser confirmada.
- Código do modelo de detecção YOLOX: Apache-2.0.
