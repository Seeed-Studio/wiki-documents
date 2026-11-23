---
description: Envie imagens de câmera entre dois Wio-LR2021 Dev Kits via FLRC a 913,76 MHz, execute modelos de rosto, gesto e hidrômetro no transmissor e veja o resultado em um navegador.
title: Demo de Transmissão de Imagem via FLRC com Wio-LR2021 Dev Kit
keywords:
  - Wio-LR2021
  - LR2021
  - FLRC
  - transmissão de imagem
  - câmera
  - detector de rosto
  - reconhecimento de gestos
  - hidrômetro
  - ESP32-S3
image: https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp
slug: /wio_lr2021_dev_kit_flrc_image_transmission_demo
sku: 100038329
type: project
sidebar_position: 1
last_update:
  date: 11/19/2026
  author: David Du
createdAt: '2026-11-19'
updatedAt: '2026-11-19'
url: https://wiki.seeedstudio.com/pt-br/wio_lr2021_dev_kit_flrc_image_transmission_demo/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Demo de Transmissão de Imagem via FLRC com Wio-LR2021 Dev Kit

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp" style={{width:600, height:'auto'}}/>
</div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Wio-LR2021-Dev-Kit-p-7040.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Adquira agora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## Introdução

Dois Wio-LR2021 Dev Kits são suficientes para montar um link completo de câmera sem fio. Um kit captura um frame `320 × 240`, executa um pequeno detector no **ESP32-S3**, desenha o resultado e comprime o frame como JPEG. Ele envia o JPEG via **FLRC** a 2,6 Mbps. O segundo kit remonta a imagem na PSRAM e a disponibiliza a partir de uma página web. Um celular ou laptop entra no ponto de acesso do receptor e acompanha o link em um navegador, sem precisar instalar nenhum aplicativo. O resultado é uma sequência de imagens estáticas, não um fluxo de vídeo.

O demo tem quatro builds de transmissor. Três executam um modelo: **detecção de rosto**, **reconhecimento de gestos de mão** e **leitura de hidrômetro**. O quarto envia a imagem da câmera sem inferência e define a linha de base para o link. Você grava um build por vez, então o mesmo hardware de transmissor pode mostrar qualquer um dos quatro modos.

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/flrc_demo_summary.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::note
O build de rosto é um **detector de rosto**, não um sistema de reconhecimento facial. Ele encontra um rosto e desenha uma caixa ao redor. Ele não identifica quem é a pessoa e não é adequado para autenticação.
:::

### O que você vai montar

- Um **transmissor** que captura uma imagem, executa um modelo Swift-YOLO, desenha caixas e rótulos e envia o JPEG anotado via FLRC.
- Um **receptor** que remonta a imagem, a verifica e publica o frame completo mais recente via Wi‑Fi.
- Uma **visualização no navegador** em `192.168.4.1` que mostra a imagem, a contagem de imagens concluídas e a taxa de quadros atual.

## Como funciona

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/flrc_demo_architecture.png" style={{width:1000, height:'auto'}} alt="Block diagram of the FLRC camera link: camera, ESP32-S3 inference and JPEG, LR2021 transmitter, FLRC burst, LR2021 receiver, PSRAM reassembly, SoftAP and browser"/>
</div>

### Caminho do transmissor

O transmissor executa todo o pipeline em uma placa:

1. A câmera **GC2145** no Media HAT captura um frame `320 × 240 RGB565`.
2. O **ESP32-S3** redimensiona o frame para a entrada do modelo e executa a inferência.
3. O firmware desenha cada detecção no frame, incluindo o rótulo da classe e uma porcentagem de confiança. O build de hidrômetro também desenha uma pontuação por dígito e uma linha `READING:`.
4. O frame anotado é comprimido como JPEG.
5. O LR2021 divide o JPEG em fragmentos, adiciona um ID de imagem e um CRC32 e envia a imagem em um burst FLRC.

A câmera e o codificador JPEG são fixos neste build de firmware. 

### Caminho do receptor

O receptor não executa um modelo. Ele escuta na mesma frequência FLRC e move os pacotes recebidos para a PSRAM com SPI DMA. O ESP32-S3 remonta os fragmentos, verifica o tamanho e o CRC32 e publica a imagem completa mais recente. Uma imagem incompleta é descartada em vez de ser mostrada em partes.

O ESP32-S3 também executa um `SoftAP` e um pequeno servidor HTTP. A página solicita o JPEG mais recente e os contadores a cada cerca de 200 ms, então o navegador sempre mostra o frame completo mais recente. Toda a inferência e desenho acontecem antes da transmissão; o navegador recebe um JPEG finalizado.

### Por que FLRC

LoRa troca taxa de dados por alcance. FLRC faz o oposto: envia um burst curto em alta taxa e aceita um alcance menor. A 2,6 Mbps, um JPEG 320 × 240 ocupa uma fração de segundo de tempo de ar. É isso que torna possível um demo de câmera em um rádio da classe LoRa.

O valor de 2,6 Mbps é a taxa aérea do FLRC, não a taxa de quadros. Captura, inferência, codificação JPEG, transmissão e remontagem somam tempo. A seção [Performance](#performance) mostra as taxas no lado do receptor medidas nos clipes.

## Preparação de hardware

### O que você precisa

| Item | Quantidade | Observações |
| --- | --- | --- |
| Wio-LR2021 Dev Kit | 2 | Um transmissor, um receptor |
| Media HAT com câmera GC2145 | 1 | Serve apenas para o transmissor |
| Antena sub-GHz | 2 | Uma em cada placa, marcada `SUB-1G` |
| Antena de 2,4 GHz | 1 | Apenas receptor; conecta no pad U.FL de 2,4 GHz do ESP32-S3, não no SMA `LR-2.4G` |
| Cabo USB-C | 2 | Compatível com dados, não apenas carga |
| Fonte de alimentação USB | 2 | 5 V; uma porta de computador é suficiente |
| Celular ou laptop | 1 | Wi‑Fi de 2,4 GHz |

### Etapa 1 — Instalar as antenas

Rosqueie a antena sub-GHz no conector `SUB-1G` de cada placa. Aperte apenas com a mão. No receptor, conecte a antena de 2,4 GHz ao pad U.FL do ESP32-S3 marcado `2.4G`. Deixe o SMA `LR-2.4G` vazio.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/install_antenna.jpg" style={{width:600, height:'auto'}}/>
</div>

:::caution
Transmitir em uma porta de antena aberta pode estressar o amplificador de potência. Instale a antena antes de ligar qualquer uma das placas.
:::

### Etapa 2 — Conectar o Camera HAT ao transmissor

Alinhe os dois soquetes de 16 pinos do Media HAT com os headers do transmissor, pino 1 com pino 1. Pressione para baixo de forma uniforme em ambas as extremidades. A câmera faz parte do HAT, então não é necessário cabo FPC separado.

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/connect_media_hat.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::caution
Não conecte nem remova o camera HAT enquanto a placa estiver energizada. Desligue a placa e desconecte o USB-C primeiro.
:::

Deixe o receptor sem camera HAT. Ele usa a antena sub-GHz, a antena de 2,4 GHz e alimentação, mas nenhuma câmera.

### Etapa 3 — Marcar os papéis

Rotule as placas antes de gravar o firmware:

- **Transmissor:** camera HAT, antena sub-GHz, USB-C para alimentação e gravação.
- **Receptor:** antena sub-GHz, antena de 2,4 GHz no pad U.FL do ESP32-S3, USB-C para um computador ou carregador.

As duas placas parecem iguais, e o firmware é diferente. Um rótulo na parte de trás evita ter que regravar depois.

### Etapa 4 — Alimentar as duas placas

Conecte USB-C às duas placas. O receptor precisa de alimentação para o ponto de acesso e o servidor web; o transmissor precisa de alimentação para a câmera e o rádio. O demo gravado usa alimentação USB.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/power_dev_kit.jpg" style={{width:600, height:'auto'}}/>
</div>

## Preparação de software

Baixe o firmware para o **Receptor**: 
 - [Firmware do receptor](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-rx-260914-1522.bin)

Baixe o firmware para o **Transmissor**:
  - [Firmware de detecção de rosto](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-tx-face-detection-260914-1520.bin)
  - [Firmware de detecção de gestos](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-tx-gesture-detection-260914-1525.bin)
  - [Firmware de leitura de hidrômetro](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-tx-digital-meter-water-260914-1523.bin)

### Gravar o firmware do receptor

<Tabs groupId="flash-tool">
<TabItem value="esptool" label="esptool">

Feche qualquer terminal serial que esteja usando a porta e então execute:

```bash
python -m esptool -p <PORT> -b 115200 --before default-reset --after hard-reset write-flash 0x0 flrc-rx-260914-1522.bin
```

Substitua `<PORT>` pela porta da placa:

| Sistema | Porta |
| --- | --- |
| Windows | `COM5` ou o número no Device Manager |
| macOS | `/dev/cu.usbmodem*` |
| Linux | `/dev/ttyACM0` |

</TabItem>
<TabItem value="gui" label="ESP Flash Download Tool">

1. Abra o **ESP Flash Download Tool** e selecione **ESP32-S3**.
2. Adicione `flrc-rx-260914-1522.bin`.
3. Defina o endereço de download como `0x0`.
4. Selecione a porta e inicie o download.
5. Pressione **RESET** na placa quando a ferramenta terminar.

</TabItem>
</Tabs>

### Gravar o firmware do transmissor

Repita o mesmo procedimento com um build de transmissor. Comece com o build de rosto:

```bash
python -m esptool -p <PORT> -b 115200 --before default-reset --after hard-reset write-flash 0x0 flrc-tx-face-detection-260914-1520.bin
```

Para mudar o modo, grave um build de transmissor diferente. O receptor permanece como está.

:::caution
Grave a imagem mesclada em `0x0`. Não use os offsets de bootloader ou aplicação de um build dividido. Não desconecte a placa enquanto a gravação estiver em andamento. A gravação substitui o firmware de fábrica.
:::

### Abrir o log serial

Ambos os builds imprimem mensagens de boot e status a `115200` baud, `8 data bits`, `no parity` e `1 stop bit`. A porta é USB CDC, então a taxa de baud é nominal.

- Os transmissores de IA imprimem o nome do modelo, o modo da câmera e as configurações de FLRC.
- O receptor imprime o ponto de acesso, o contador de imagens e quaisquer imagens descartadas.

## Executar o demo

### Etapa 1 — Inicializar o receptor

Conecte o receptor ao USB-C e pressione **RESET** uma vez. Aguarde o ponto de acesso aparecer. O SSID começa com `Wio-LR2021-FLRC-RX-` e termina com quatro caracteres hexadecimais derivados do endereço MAC de Wi‑Fi do receptor. A senha é `12345678`.

Se a rede não aparecer, abra o log serial e procure pela mensagem do ponto de acesso. Verifique se o build de receptor foi gravado e se a antena de 2,4 GHz está conectada ao pad U.FL do ESP32-S3. Confirme que a placa tem uma alimentação estável de 5 V.

### Etapa 2 — Conecte seu dispositivo com navegador

Conecte-se à rede `Wio-LR2021-FLRC-RX-xxxx` a partir de um celular ou laptop. Mantenha o dispositivo nessa rede; ele não precisa de acesso à internet.

Em alguns celulares, os dados móveis assumem quando o ponto de acesso não tem internet. Desative os dados móveis para o teste ou escolha a opção que mantém a conexão Wi‑Fi.

### Etapa 3 — Abra a página

Abra um navegador e acesse:

```
http://192.168.4.1
```

A página mostra um fundo preto, duas linhas de texto branco e a imagem mais recente. Não há login nem painel de controle.

### Etapa 4 — Aponte o transmissor

Ligue o transmissor e aponte a câmera para o objeto. A primeira imagem pode levar alguns segundos. Para obter o melhor resultado:

- Mantenha o objeto dentro do enquadramento e a uma distância confortável.
- Use iluminação uniforme. Contraluz forte ou reflexos intensos escondem o objeto.

## O que você vê

### O cabeçalho da página

A página mostra dois contadores e uma taxa acima da imagem:

```
Received frames: 174 (image 23)
FPS: 2.22
```

- **Received frames** conta as imagens JPEG que o receptor concluiu.
- **image** é o ID de imagem atribuído pelo transmissor.
- **FPS** é a taxa ponta a ponta medida pelo receptor.

A contagem de quadros e o ID de imagem são separados e não precisam coincidir. Eles podem diferir após um reset.

### Detecção de rosto

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/face_detect.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

A build de rosto desenha uma caixa magenta em volta do rosto detectado e uma barra de rótulo com `face` e uma porcentagem de confiança. A barra fica no canto superior esquerdo da caixa. A página não gira os quadros; monte a câmera na orientação em que você quer ver.

O detector não identifica a pessoa. Duas pessoas diferentes produzem o mesmo rótulo `face`.

### Reconhecimento de gestos

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/gesture_meter_recognition.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

A build de gestos desenha uma caixa em volta da mão e a rotula como `paper`, `rock` ou `scissors`. Neste quadro o modelo retornou dois candidatos sobrepostos para o mesmo punho, então o transmissor desenhou duas caixas e dois rótulos. O firmware não mescla candidatos duplicados. A pontuação maior é o melhor candidato.

Mostre uma mão de cada vez e mantenha os dedos dentro do enquadramento. Evite um fundo muito carregado. O modelo é treinado nos três gestos, não em poses de mão arbitrárias.

### Leitura de hidrômetro

A build de hidrômetro desenha uma caixa em volta de cada dígito e imprime uma pontuação acima da caixa. Ela adiciona uma linha amarela `READING:` na parte inferior da imagem. A leitura é montada a partir dos dígitos detectados. Ela pode mudar de quadro para quadro quando o medidor está inclinado ou os dígitos estão parcialmente ocultos.

Isto é um auxílio de leitura, não um leitor de hidrômetro certificado. Verifique a leitura em relação ao medidor antes de usá-la em qualquer fluxo de faturamento ou de relatórios.

### Linha de base da câmera bruta

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/raw_camera.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

A build bruta envia a imagem da câmera sem inferência. É o modo mais rápido na demonstração e a melhor forma de verificar o link antes de adicionar um modelo. O clipe mostra uma imagem invertida; o receptor exibe o JPEG conforme ele chega e não o gira. Monte a câmera na posição vertical para ter uma visualização em pé.

## Desempenho

Essas taxas foram lidas na página do receptor nos clipes de demonstração. Elas são taxas ponta a ponta: captura, inferência, desenho, codificação JPEG, transmissão FLRC e remontagem estão todos incluídos.

| Build do transmissor | Trabalho no dispositivo | Taxa observada |
| --- | --- | --- |
| Câmera bruta | Captura, JPEG, FLRC | 7,6–9,9 fps, pico de `11.27` fps |
| Detecção de rosto | Modelo 96 × 96, desenho, JPEG, FLRC | cerca de `2.2` fps |
| Reconhecimento de gestos | Modelo 192 × 192, desenho, JPEG, FLRC | cerca de `0.9` fps |
| Leitura de hidrômetro | Modelo 192 × 192, desenho, JPEG, FLRC | cerca de `0.8` fps |

Nesta demonstração, a build bruta é o teto para o pipeline, não uma taxa garantida. As builds de IA são mais lentas porque o modelo roda em cada quadro. Os modelos 192 × 192 também levam mais tempo do que o modelo de rosto 96 × 96. A taxa FLRC de 2,6 Mbps não é a taxa de quadros; o tamanho da imagem e o processamento por quadro predominam.

## Recursos

### Firmware

- 🗃️ [**Wio-LR2021 Dev Kit FLRC Image Demo Firmware Set**](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/FLRC_Image_Demo_Firmware_Set.zip)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
