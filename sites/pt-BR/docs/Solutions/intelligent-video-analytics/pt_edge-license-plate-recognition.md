---
description: Reconhecimento de placas e abertura de cancelas por lista de permissão com suas câmeras de portão existentes e um host de borda — hardware, implantação, interfaces e dados medidos em hosts Jetson e RK
title: Reconhecimento de Placas na Borda — Seleção, Implantação e Dados Medidos
keywords:
  - reconhecimento de placas
  - ANPR
  - lista de permissão para cancela de estacionamento
  - abertura automática de portão
  - ANPR na borda
  - Jetson Orin Nano
  - Jetson Orin NX
  - RK3588
  - RK3576
  - YOLOX
  - MQTT
image: https://files.seeedstudio.com/wiki/reference-design/edge_plate_recognition/panel-plate-1-jetson-blue-oblique-20261009-2e5b3792.jpg
slug: /solutions/edge-license-plate-recognition
sidebar_position: 20
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/pt-br/solutions/edge-license-plate-recognition/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[Antes de usar]
Suporta placas azuis de linha única da China continental (7 caracteres) e placas verdes de novos veículos de energia (8 caracteres); placas de duas linhas, de uso especial e estrangeiras não são suportadas. A licença dos pesos de detecção e reconhecimento ainda não está confirmada; confirme-a antes da distribuição comercial.
:::

## O que esta solução faz

Mantenha as câmeras de rede já instaladas no portão e adicione um host de reconhecimento no local para ler as placas. Quando um veículo na lista de permissão chega, o controlador do portão envia à cancela um sinal de abertura; cada veículo deixa um registro com seu número de placa, confiança e uma captura de tela. Serve para portões de condomínios residenciais, campi e estacionamentos de funcionários, e também pode funcionar sem cancela como registro de entrada/saída.

- Pacote de implantação (Docker Compose e configuração): [github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_plate_recognition)
- Seleção e implantação: [página de reference design](https://www.seeed.cc/solutions/reference-designs/edge-anpr-plate-recognition)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Placas e vídeo permanecem no local</h3>
                <p>O reconhecimento é executado no host no local. As capturas de tela permanecem lá por 7 dias por padrão e só saem quando buscadas por link.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>30 fps em 1080p</h3>
                <p>As séries reComputer J30 Series e RK3576 Series processam 1080p a 29–30 fps; veja "Performance e dados medidos".</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Mantenha suas câmeras</h3>
                <p>As câmeras de rede 1080p existentes conectam via RTSP; o host puxa o stream pela LAN.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Um registro por veículo</h3>
                <p>Cada veículo é reportado uma vez com número da placa, tipo de placa, confiança e um link de captura de tela; um sistema de estacionamento assina um tópico MQTT.</p>
            </div>
        </li>
    </ul>
</div>

### Em um dispositivo real

A própria página de pré-visualização no navegador do host de reconhecimento: a placa é enquadrada e rotulada com seu número e confiança, e as últimas cinco leituras são listadas à direita.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_plate_recognition/panel-plate-1-jetson-blue-oblique-20261009-2e5b3792.jpg" alt="Pré-visualização de placa em um reComputer J30 Series: placa azul 皖A62599 lida em 0,98, com as últimas cinco leituras à direita"/>
</div>

Os quadros de entrada são imagens estáticas do conjunto de teste público CCPD (licença MIT) em loop via RTSP, não imagens do local.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_plate_recognition/panel-plate-2-jetson-green-front-20261009-a3ab0b16.jpg" alt="reComputer J30 Series lendo a placa verde de novo veículo de energia 皖AF10528 em 0,87"/>
</div>

## Hardware necessário

Três elementos no local: a câmera do portão, um host de reconhecimento e, para abertura automática, um controlador de portão mais um relé intermediário.

**① Câmera do portão**: sua câmera de rede existente, 1080p ou melhor, com um stream RTSP.

**② Host de reconhecimento**: escolha um; um host por câmera de portão.

| | Host de reconhecimento | Medido (entrada 1080p) | Escolha-o quando |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J30 Series (J3011)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Jetson Orin Nano, JetPack 6.2 | 30 fps | Escolha padrão |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J40 Series (J4012)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Jetson Orin NX, JetPack 6.2 | Mesmo pacote que o J30 | O host também executa outros modelos |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 Series](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>NPU on-board | Implantação e saída medidas | O local se padroniza em Rockchip |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576 Series](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>NPU on-board | 29–30 fps | Custo vem em primeiro lugar |

**③ Controlador de portão (opcional)**: [reComputer R1100 Series (R1124-10)](https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html). Ele executa o broker MQTT, mantém a lista de permissão e aciona a cancela a partir de uma saída digital por meio de um relé intermediário em trilho DIN. O fechamento permanece com o próprio laço ou radar da cancela.

Câmera, host de reconhecimento e controlador de portão ficam na mesma LAN; conexões cabeadas são recomendadas.

## Implantação no local

### 1. Instale a câmera

:::tip[A placa deve ser legível na imagem]
Instale a câmera a 3–8 m da faixa em uma posição fixa, apontada para onde as placas passam. O reconhecimento só é executado dentro de uma região configurada da imagem (a parte inferior central por padrão); verifique essa região novamente sempre que a câmera for movida.
:::

### 2. Instale o software: três etapas

As etapas por dispositivo estão na página de reference design; isto é o resumo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge-anpr-plate-recognition" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e faça a implantação 🖱️</font></span></strong>
    </a>
</div><br />

1. **Controlador de portão (opcional)**: instale o broker MQTT e o serviço de portão no R1124-10, envie o CSV da lista de permissão e confirme que a cancela se move com o endpoint de teste de abertura.
2. **Host de reconhecimento**: insira o endereço RTSP da câmera e o endereço do broker MQTT, depois faça a implantação. A primeira implantação baixa o runtime e os modelos; depois disso ele funciona offline.
3. **Verificação**: abra a página de pré-visualização na porta 8080 do host; veículos que passam mostram a placa enquadrada, e o tópico de placas carrega um registro por veículo.

Antes de entrar em operação, compare as leituras com placas reais usando imagens diurnas e noturnas do seu próprio portão.

## Interfaces

Os resultados vão via MQTT para o broker que você informou na implantação (normalmente o R1124-10); capturas de tela e status usam HTTP.

- **Sistema de estacionamento ou cobrança**: assine o tópico de placas, um registro por veículo; faça a reconciliação em `plate_normalized`.
- **Cancela**: o R1124-10 verifica cada registro de placa em relação à lista de permissão e publica o resultado no tópico do portão. A mesma placa chegando novamente dentro do tempo de espera é registrada como `suppressed` e não reabre.
- **Seu próprio sistema**: busque a captura de tela pelo link no registro ou monitore o serviço pelo endpoint de health.

| Tópico / porta | Conteúdo |
|---|---|
| MQTT `<site>/parking/<camera>/plate` | Número da placa, tipo de placa (`cn_blue` / `cn_green`), confiança, quadros de votação, posição na imagem, link da captura de tela |
| MQTT `<site>/parking/<camera>/gate` | Registro de portão: `open_pulse` (aberto) ou `suppressed`, com o registro de placa correspondente e o rótulo da lista de permissão |
| MQTT `<root>/status` | Status do serviço, publicado periodicamente; o último permanece no broker se o host ficar offline |
| HTTP 8080 `/snapshots/{seq}.jpg` | Captura de tela vinculada a partir do registro de placa, mantida por 7 dias por padrão |
| HTTP 8081 `/whitelist` (R1124-10) | GET retorna o CSV da lista de permissão, PUT o substitui (um 400 informa a linha com falha); `POST /gate/test` dispara uma abertura de teste |
| HTTP 8099 `/healthz` | Status do serviço incluindo velocidade de processamento |

As capturas de tela não são incorporadas nos registros; um registro carrega apenas o link e o sha256 da captura.

## Performance e dados medidos

### Velocidade de processamento

| Dispositivo | Velocidade de processamento | Detecção de placa por quadro | Condições |
|---|---:|---:|---|
| reComputer J30 Series (Orin Nano) | 29,9 fps (medido) | p50 5,6 ms (medido) | RTSP 1080p a 30 fps |
| reComputer RK3576 Series | 29–30 fps (medido) | p50 23,1 ms, reconhecimento 1,8 ms (medido) | Mesmo |

Reproduzir: `sensecraft-solutions/solutions/edge_plate_recognition` (pacote de implantação) com o clipe de entrada `plate-labeled40-1080p-120s.mp4`

### Leituras de placas

A entrada são imagens estáticas de placas do conjunto de teste CCPD, cada uma mantida por vários segundos, transmitidas em 1080p via RTSP. A verdade de base vem dos nomes de arquivo do CCPD.

| Dispositivo | Entrada | Resultado |
|---|---|---|
| reComputer J30 Series | 40 imagens estáticas | 56 registros de placas publicados, 50 correspondem à verdade de base (medido) |
| reComputer RK3576 Series | 40 imagens estáticas | 57 registros de placas publicados, 51 correspondem à verdade de base (medido) |
| reComputer J30 Series | 8 imagens estáticas | 5 lidas corretamente, 3 não produziram registro, 0 placas incorretas (medido) |
| reComputer RK3588 Series | 8 imagens estáticas | 5 lidas corretamente, 3 não produziram registro, 0 placas incorretas (medido) |

Uma imagem estática pode produzir mais de um registro enquanto permanece na tela, portanto as contagens de registros excedem as contagens de imagens. Quando uma placa não pode ser lida, o host não publica nada: nenhum dos dispositivos publicou uma placa incorreta nas 8 imagens estáticas.

Reproduzir: `sensecraft-solutions/solutions/edge_plate_recognition/gallery/ATTRIBUTION.md` (nomes de arquivo e verdade de base das 8 imagens estáticas)

### Modelos e runtimes

| Dispositivo | Detecção | Reconhecimento | Runtime |
|---|---|---|---|
| reComputer J30 / J40 Series | YOLOX-Tiny, 640×640, FP16 | PlateRecNet (interno), 96×32, FP16 | TensorRT, decodificação por hardware |
| reComputer RK3588 / RK3576 Series | YOLOX-Tiny, 640×640, INT8 | PlateRecNet, 96×32, INT8 (camada de saída FP16) | Runtime RKNN 2.3.2, decodificação por hardware MPP |

Parâmetros que afetam os resultados (pacote de implantação `config/plate.json`):

- `plate.roi`: região de reconhecimento, parte inferior central da imagem por padrão. Redesenhe-a depois que a câmera se mover.
- `plate.vote`: até 7 quadros votam por veículo; um registro é publicado quando pelo menos 3 concordam com confiança de 0,6 ou superior.
- `plate.dedup_s`: a mesma placa é publicada no máximo uma vez a cada 30 s.

### Degradações conhecidas

- **Tipos de placa não suportados**: Suporta apenas placas azuis de linha única (7 caracteres) e verdes de nova energia (8 caracteres). Placas amarelas de duas linhas, reboques, polícia e placas estrangeiras não são suportadas.
- **Ângulo e velocidade da câmera**: Os veículos devem entrar em um ângulo ≤ 30° com largura da placa > 96 pixels no quadro. Ângulos de entrada agudos (> 45°) ou velocidades acima de 30 km/h degradam a detecção.
- **Ofuscamento e superexposição dos faróis**: Ofuscamento direto ou faróis altos à noite podem apagar os caracteres. Mesmo em portões sem iluminação, recomenda-se iluminação suplementar (~5000K).

## Fontes de dados e recursos

- CCPD (Xu, Z. et al., ECCV 2018): [github.com/detectRecog/CCPD](https://github.com/detectRecog/CCPD), licença MIT, Copyright (c) 2017 CCPD. As capturas de tela nesta página usam suas imagens do conjunto de teste; as placas são placas reais do conjunto de dados público.
- Código do modelo de detecção YOLOX: Apache-2.0. A estrutura do modelo de reconhecimento é código interno. A licença de ambos os conjuntos de pesos treinados ainda não foi confirmada; confirme-a antes da distribuição comercial.
