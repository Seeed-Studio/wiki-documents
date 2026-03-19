---
description: Uso do microfone PDM no Seeed Studio XIAO nRF52840 Sense
title: Uso do PDM para XIAO nRF52840 Sense
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-PDM-Usage
last_update:
  date: 06/25/2024
  author: Spencer
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/XIAO-BLE-Sense-PDM-Usage/
---

# Uso do microfone PDM no Seeed Studio XIAO nRF52840 Sense

## Visão geral

O **Seeed Studio XIAO nRF52840 Sense** está equipado com um **microfone PDM (Modulação por Densidade de Pulsos)** que pode receber dados de áudio em tempo real e pode ser usado para reconhecimento de áudio. Com sua conectividade sem fio e bom desempenho no processamento de dados de áudio graças ao FPU, ele é ideal para projetos TinyML interessantes, como controle de voz remoto de dispositivos.

:::note Nota

- O **Seeed Studio XIAO nRF52840** não está equipado com este módulo de microfone PDM.
- O microfone PDM terá um desempenho melhor quando usarmos a *Seeed nrf52 mbed-enabled Boards Library*, portanto, recomendamos fortemente o seu uso.

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={680} height="auto" /></p>

Este wiki irá apresentar o básico de **como usar o microfone PDM** nesta placa e incluirá dois exemplos:

1. [Visualizing Raw Data](#demo1): Este exemplo demonstra como visualizar em tempo real os dados brutos do microfone.
2. [Saving Recorded Audio](#demo2): Este exemplo mostra como salvar o áudio gravado pelo microfone em um cartão SD.

Vamos explorar esses exemplos agora!

## Exemplo 1: Visualizar dados brutos do microfone PDM em tempo real {#demo1}

Neste exemplo, vamos visualizar os dados brutos do microfone PDM em um **Serial Monitor** e **Serial Plotter** em tempo real.

### Pré-requisitos

- **Etapa 1**. Obtenha a biblioteca Arduino, [Download Seeed_Arduino_Mic Library](https://github.com/Seeed-Studio/Seeed_Arduino_Mic) como um arquivo zip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-zip.png" alt="pir" width={1000} height="auto" /></p>

- **Etapa 2**. Abra o Arduino IDE, vá para `Sketch > Include Library > Add .ZIP Library...` e abra o arquivo zip baixado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

### Executar o exemplo

- **Etapa 3.** Vá para `File > Examples > Seeed Arduino Mic > mic_serial_plotter` para abrir **mic_serial_plotter**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-install.png" alt="pir" width={550} height="auto" /></p>

- **Etapa 4.** Envie os códigos e abra o **Serial Monitor**

:::note Nota
Depois que você enviar os códigos, eles não serão executados automaticamente até que você clique em **Serial Monitor** no canto superior direito da janela do Arduino.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-serial.png" alt="pir" width={550} height="auto" /></p>

Agora você verá os dados brutos do microfone exibidos em tempo real no serial monitor, como mostrado acima!

### Visualizando dados brutos

- **Etapa 5.** Se você for até `Tools > Serial Plotter` e abrir o **Serial Plotter**, verá os dados brutos do microfone exibidos em tempo real em um gráfico de forma de onda!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-graph.png" alt="pir" width={700} height="auto" /></p>

## Exemplo 2: Salvar o áudio gravado pelo microfone em um cartão SD {#demo2}

Assim como a série Seeed Studio XIAO, o Seeed Studio XIAO nRF52840 Sense é perfeitamente compatível com a [Seeeduino Seeed Studio XIAO Expansion board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html). Ele pode ser instalado na placa de expansão, permitindo que você use o módulo de cartão SD na placa. Se você preferir não usar a placa de expansão, pode conectar um módulo de cartão SD separado por meio da interface **SPI**.

### Pré-requisitos

- **Etapa 1.** Conecte o Seeed Studio XIAO nRF52840 Sense a uma Seeed Studio XIAO Expansion Board e insira um cartão SD no slot de cartão SD da placa de expansão.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SD-connect.png" alt="pir" width={500} height="auto" /></p>

:::tip

Quando você vir a luz na placa de expansão piscando regularmente em **verde**, a conexão foi bem-sucedida.

> Como já instalamos a *Seeed_Arduino_Mic Library* antes, não precisamos instalá-la novamente para este exemplo. No entanto, se você não a tiver instalada, siga as instruções do exemplo acima.
:::

- **Etapa 2**. [Download Seeed_Arduino_FS Library](https://github.com/Seeed-Studio/Seeed_Arduino_FS) como um arquivo zip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/arduino-fs-zip.png" alt="pir" width={1000} height="auto" /></p>

**Nota:** Esta biblioteca é necessária para acessar o cartão SD e salvar os dados.

### Executar o exemplo

- **Etapa 3**. Abra o Arduino IDE, vá para `Sketch > Include Library > Add .ZIP Library...` e abra o arquivo zip baixado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **Etapa 4.** Vá para `File > Examples > Seeed Arduino Mic > mic_Saved_OnSDcard` para abrir **mic_Saved_OnSDcard**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-sd-install.jpg" alt="pir" width={550} height="auto" /></p>

- **Etapa 5.** Envie os códigos e abra o **Serial Monitor**

### Salvando dados

**Nota:** Depois que você enviar os códigos, eles não serão executados automaticamente até que você clique em **Serial Monitor** no canto superior direito da janela do Arduino.

Agora os dados de áudio começarão a ser amostrados, serão gravados por 5 minutos e os dados serão salvos automaticamente no cartão SD.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDMsavecodeoncard.png" alt="pir" width={800} height="auto" /></p>

Este **test.9568.wav** é um arquivo de áudio de 5 segundos e está salvo no cartão SD.

:::note Amostrar novamente?
Se você quiser reamostrar os dados de áudio, deve pressionar o botão de reset e depois clicar em **Serial Monitor** novamente para iniciar a amostragem.
:::