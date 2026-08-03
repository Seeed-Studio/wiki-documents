---
description: Referência para os Blocos de Ferramentas disponíveis ao criar um aplicativo SenseCraft AI.
title: Blocos de Ferramentas
keywords:
  - tool blocks
  - sensecraft ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft-ai/application/tool-blocks
sidebar_position: 2
last_update:
  date: 03/30/2026
  author: Rida
createdAt: '2026-03-30'
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/application/tool-blocks/
---
# Usando Blocos de Ferramentas

No fluxo de implantação, você pode inserir recursos integrados do SenseCraft AI com um clique. Eles simplificam tanto a sua experiência de criação quanto a implantação para o usuário final.

## Visão com IA

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M12 4c2.787 0 5.263 1.257 7.026 2.813c.885.781 1.614 1.658 2.128 2.531c.505.857.846 1.786.846 2.656s-.34 1.799-.846 2.656c-.514.873-1.243 1.75-2.128 2.531C17.263 18.743 14.786 20 12 20c-2.787 0-5.263-1.257-7.026-2.813c-.885-.781-1.614-1.658-2.128-2.531C2.34 13.799 2 12.87 2 12s.34-1.799.846-2.656c.514-.873 1.243-1.75 2.128-2.531C6.737 5.257 9.214 4 12 4m0 2c-2.184 0-4.208.993-5.702 2.312c-.744.656-1.332 1.373-1.729 2.047C4.163 11.049 4 11.62 4 12s.163.951.569 1.641c.397.674.985 1.39 1.729 2.047C7.792 17.007 9.816 18 12 18s4.208-.993 5.702-2.312c.744-.657 1.332-1.373 1.729-2.047c.406-.69.569-1.261.569-1.641s-.163-.951-.569-1.641c-.397-.674-.985-1.39-1.729-2.047C16.208 6.993 14.184 6 12 6m0 3q.132 0 .261.011a2 2 0 0 0 2.728 2.728A3 3 0 1 1 12 9"/></svg>Implemente modelos de visão com IA para reconhecimento, detecção, classificação de objetos e tarefas relacionadas em hardware compatível. Os resultados de inferência podem ser transmitidos em tempo real via MQTT, GPIO ou serial (Serial), dependendo da configuração.

O bloco de ferramenta atualmente oferece suporte a **Detecção** e **Classificação**. Segmentação e estimativa de pose estão planejadas para uma versão futura.

### Dispositivos compatíveis

- [XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Grove - Vision AI V2](https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html)
- [SenseCAP Watcher](https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html)
- [SenseCAP A1102](https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html)
- [reCamera](https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html)

### Selecionar um modelo

- **SenseCraft AI model:** Selecione modelos de alta qualidade compartilhados publicamente pela comunidade na biblioteca de modelos.
- **My model:** Escolha um modelo da sua lista privada salva.
- **Upload model:** Envie arquivos de modelo treinados em plataformas de terceiros. Você deve informar o nome do modelo, tipo de tarefa (Task), categorias do modelo (Class ID e Class Name), anexar o arquivo do modelo e selecionar os dispositivos compatíveis. Após o envio, o modelo aparece em **My model**.
- **Train model:** Para treinar um novo modelo ou retreinar a partir de um existente, abra a entrada de treinamento e siga o assistente. Ao finalizar, abra **Historical models**, escolha **Send to SenseCraft**, conclua o fluxo de upload e salve o resultado em **My model**.

:::caution
Quando você publica para a comunidade um aplicativo que inclui um modelo privado, esse modelo se tornará público automaticamente.
:::

### Selecionar dispositivo

No menu suspenso, escolha o hardware que você realmente usa na lista compatível com esse modelo.

### Parâmetros recomendados

Ajuste as configurações de inferência e do dispositivo para o seu cenário. Esses valores são gravados no dispositivo como padrões no momento da implantação.

- **Confidence threshold:** Critério para o modelo emitir uma predição final. Aumentar o limite tende a reduzir falsos positivos; diminuí-lo tende a reduzir falsos negativos.
- **IOU threshold:** Em tarefas de detecção, IoU compara caixas previstas com o valor de referência. Um limite mais alto ajuda a separar objetos sobrepostos, mas pode produzir caixas duplicadas em um único objeto se estiver muito alto. Um limite mais baixo mescla duplicatas, mas pode unir dois objetos próximos se estiver muito baixo.

#### Modo de saída

- **None:** Após ligar, a inferência não inicia até que outro gatilho seja acionado. Adequado para configurações de baixo consumo em que a inferência roda apenas quando necessário.
- **MQTT:** Inicia a inferência imediatamente após ligar e envia resultados por Wi‑Fi via MQTT.
  - **SenseCraft official service (recommended):** Selecione ou crie um Dev Kit para o seu aplicativo e o MQTT será configurado automaticamente. Abra a [plataforma de dados SenseCraft](https://sensecap.seeed.cc) para visualizar e processar os dados recebidos.
  - **Third-party service:** Use seu próprio broker MQTT ou um de terceiros e configure os parâmetros manualmente.
- **GPIO:** Acione pinos GPIO com sinais de nível.
  - **Trigger conditions:** Defina regras com objeto, condição e limite de confiança.
  - **Trigger actions:** Quando as condições forem atendidas, o dispositivo pode colocar um pino em nível alto/baixo, salvar capturas no cartão SD, acender um LED e assim por diante.
- **Serial:** Use a [SSCMACore library](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA?tab=readme-ov-file#seeed_arduino_sscma-library) para exportar dados de inferência via UART (GPIO), I2C ou SPI.

```text
**UART (GPIO)**
Baud Rate Value: 921600
Data Format: 8N1
TX: GPIO43
RX: GPIO44

**I2C**
Slave Address: 0x62
SDA: GPIO5 (PULLUP)
SCL: GPIO6 (PULLUP)
Protocol:
- READ：0x10，0x01, LEN << 8, LEN & 0xff
- WRITE: 0x10，0x02, LEN << 8, LEN & 0xff
- AVAIL(to read): 0x10，0x03
- RESET(clear buffer): 0x10，0x06

**SPI**
Slave CPOL0 CPHA0
MOSI GPIO9 (PULLUP)
MISO GPIO8,
SCLK GPIO7 (PULLUP)
CS GPIO4 (PULLUP)
Protocol:
- READ：0x10，0x01, LEN << 8, LEN & 0xff
- WRITE: 0x10，0x02, LEN << 8, LEN & 0xff
- AVAIL(to read): 0x10，0x03
- RESET(clear buffer): 0x10，0x06
```

## Áudio com IA

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M12 3a1 1 0 0 1 .993.883L13 4v16a1 1 0 0 1-1.993.117L11 20V4a1 1 0 0 1 1-1M8 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M4 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m16 0a1 1 0 0 1 .993.883L21 10v4a1 1 0 0 1-1.993.117L19 14v-4a1 1 0 0 1 1-1"/></svg>Implemente modelos de áudio com IA para reconhecimento de fala em hardware compatível. Os resultados podem ser transmitidos via MQTT, GPIO ou serial, dependendo da configuração.

### Dispositivos compatíveis

- [XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)

### Selecionar um modelo

- **SenseCraft AI model:** Selecione modelos compartilhados pela comunidade na biblioteca.
- **My model:** Escolha na sua lista privada.
- **Upload model:** Envie arquivos de modelo treinados em plataformas de terceiros. Informe o nome do modelo e as categorias (Class ID e Class Name). Após o envio, o modelo aparece em **My model**.
- **Train model:** Treine um modelo novo ou atualizado e, em seguida, envie-o para o SenseCraft a partir de **Historical models**, como nos modelos de visão.

:::caution
Quando você publica para a comunidade um aplicativo que inclui um modelo privado, esse modelo se tornará público automaticamente.
:::

### Selecionar dispositivo

Modelos de áudio atualmente oferecem suporte apenas ao XIAO ESP32S3 Sense.

### Parâmetros recomendados

Ajuste finamente os valores para o seu cenário.

- **Confidence threshold:** Mesmo papel que em visão; ajuste o equilíbrio entre saídas perdidas e espúrias.
- **Output mode:** Caminho de saída padrão para o modelo de áudio.

## Vibração com IA

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M7.71 5.012a1 1 0 0 1 .76.582l1.147 2.582l2.524-2.84a1 1 0 0 1 1.662.258l1.147 2.582l2.525-2.84a1 1 0 0 1 1.661.258l1.778 4a1 1 0 0 1-1.828.812L17.94 7.824l-2.525 2.84a1 1 0 0 1-1.661-.258l-1.148-2.582l-2.524 2.84a1 1 0 0 1-1.661-.258L7.272 7.824l-2.525 2.84a1 1 0 0 1-1.494-1.328l3.555-4a1 1 0 0 1 .901-.324m0 8a1 1 0 0 1 .76.582l1.147 2.582l2.524-2.84a1 1 0 0 1 1.662.258l1.147 2.582l2.525-2.84a1 1 0 0 1 1.661.258l1.778 4a1 1 0 0 1-1.828.812l-1.147-2.582l-2.525 2.84a1 1 0 0 1-1.661-.258l-1.148-2.582l-2.524 2.84a1 1 0 0 1-1.661-.258l-1.148-2.582l-2.525 2.84a1 1 0 0 1-1.494-1.328l3.555-4a1 1 0 0 1 .901-.324"/></svg>Implemente detecção de anomalias de vibração aprendendo a vibração “normal” e sinalizando desvios.

### Dispositivos compatíveis

- XIAO ESP32S3 Sense (com [acelerômetro de 3 eixos](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html))

### Parâmetros recomendados

Ajuste amostragem, comportamento ao ligar, GPIO e saída para a sua configuração.

- **Sampling window:** Amostras por unidade de tempo. Muito grande deixa a inferência lenta; muito pequena pode subajustar a vibração normal.
- **Enable default power-on inference:** Quando desligado, a inferência não inicia automaticamente ao ligar; use um gatilho externo para baixo consumo.
- **GPIO:** Acione pinos em caso de vibração anormal — por exemplo, definir um nível ou alternar um LED.
- **Output mode:** Caminho de saída padrão para o modelo de vibração.

## Implantar Aplicativo em Contêiner

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M12.01 2.378a2.5 2.5 0 0 1 2.985 2.29l.005.161v.551c1.503-.3 2.9.792 2.995 2.288l.005.161v.55c1.503-.3 2.9.793 2.995 2.289l.005.162v6.53a3 3 0 0 1-2.239 2.902l-.173.04l-6.598 1.32a2.5 2.5 0 0 1-2.985-2.29L9 19.17v-.55l-.01.002a2.5 2.5 0 0 1-2.985-2.29L6 16.17v-.55l-.01.002a2.5 2.5 0 0 1-2.985-2.29L3 13.17V6.64a3 3 0 0 1 2.238-2.902l.174-.04zm6.392 7.961l-6.598 1.32a1 1 0 0 0-.804.98v6.531a.5.5 0 0 0 .598.49l6.598-1.32a1 1 0 0 0 .804-.98v-6.53a.5.5 0 0 0-.598-.49m-3-3L8.804 8.66A1 1 0 0 0 8 9.64v6.531a.5.5 0 0 0 .598.49L9 16.58v-3.94a3 3 0 0 1 2.412-2.942L16 8.78v-.95a.5.5 0 0 0-.598-.49m-3-3L5.804 5.66A1 1 0 0 0 5 6.64v6.531a.5.5 0 0 0 .598.49L6 13.58V9.64a3 3 0 0 1 2.412-2.942L13 5.78v-.95a.5.5 0 0 0-.598-.49"/></svg>Implante aplicativos em contêiner em dispositivos de borda em poucos cliques.

### Aplicativos em destaque

A biblioteca integrada inclui (e continua crescendo):

- **Home Assistant** — hub de automação residencial de código aberto
- **Ollama** — execute modelos de linguagem grandes de código aberto localmente na borda
- **OpenClaw** — plataforma de código aberto para implantar e gerenciar aplicativos de borda conteinerizados
- **reComputer AI Suite** — Computer Vision (CV), Vision-Language Models (VLM) e Large Language Models (LLM) otimizados para hardware reComputer

Compatível com **M1 Gate**, **Raspberry Pi 4 / 5**, **NVIDIA Jetson** e **Seeed reComputer**.

### Como funciona com o SenseCraft Fleet

Os aplicativos em contêiner são gerenciados no [**SenseCraft Fleet**](https://seeed-fleet.com) e implantados por meio do [**SenseCraft AI**](https://sensecraft.seeed.cc/ai) (em **`Applications`**):

- **SenseCraft Fleet** é onde as imagens de contêiner ficam armazenadas — você envia as imagens, define o esquema de configuração e vincula seus dispositivos.
- **SenseCraft AI** é onde você escolhe um app da sua biblioteca, seleciona um dispositivo de destino, o configura e aciona a implantação.

Sua conta SenseCraft AI é vinculada automaticamente ao SenseCraft Fleet; dispositivos vinculados e apps permanecem sincronizados em ambas as plataformas.

### Plataformas compatíveis

Os apps são específicos de plataforma — a imagem e o dispositivo de destino devem corresponder:

- **Linux / ARM64** — por exemplo, Seeed reComputer, Raspberry Pi 4 / 5, NVIDIA Jetson, M1 Gate
- *Linux / AMD64 — em breve*

### Fluxo de configuração

**Selecione um app:** Escolha na biblioteca de apps no SenseCraft Fleet — o catálogo integrado. Se preferir enviar seu app em contêiner personalizado, será necessário adicioná‑lo por meio do [**SenseCraft Fleet**](https://seeed-fleet.com).

**Configure o app:** Cada app expõe os itens de configuração que seu autor definiu no SenseCraft Fleet. Normalmente você não precisa configurar nada, a menos que tenha requisitos específicos.

### Fluxo de implantação

**Etapa 1 — Selecione um app:** Clique em **Deploy Container App**. O SenseCraft AI carrega toda a sua biblioteca de apps a partir do SenseCraft Fleet (catálogo integrado mais quaisquer apps personalizados que você enviou), cada um exibido com nome, ícone e descrição.

**Etapa 2 – Vincule um dispositivo:** Se você já tiver um dispositivo vinculado, pule para a Etapa 3. Caso contrário, ligue o dispositivo, conecte‑o à rede e então faça a vinculação de acordo com o seu hardware:

- **Dispositivo Seeed executando a imagem de fábrica da Seeed:** Insira os últimos 6 dígitos do **ID da CPU** ou do **endereço MAC** do dispositivo para vinculá‑lo instantaneamente.
- **Dispositivo Seeed sem a imagem de fábrica ou dispositivo de terceiros:** Obtenha o endereço IP do dispositivo, abra um terminal e faça SSH nele, depois execute o comando de vinculação exibido no fluxo de vinculação.

Quando a vinculação for concluída, o dispositivo aparecerá na sua lista de dispositivos vinculados.

**Etapa 3 — Selecione um dispositivo de destino:** Escolha na lista de dispositivos vinculados compatíveis com a plataforma do app. Dispositivos incompatíveis são filtrados automaticamente.

**Etapa 4 — Configure o app:** Preencha os itens de configuração expostos pelo autor do app. Consulte a seção [Fluxo de configuração](#fluxo-de-configuração) acima para ver os tipos de controle e padrões.

**Etapa 5 — Implantação com um clique:** Clique em **Deploy**. O SenseCraft AI mostra um indicador de progresso em tempo real e transmite o status em cada fase. Se algo falhar, o erro exato aparece em um pop‑up para que você possa corrigir e tentar novamente. Reimplante com novos valores para atualizar uma implantação existente — a anterior é substituída automaticamente.

:::note
Apps Docker de imagem única são compatíveis hoje. Docker Compose (apps com vários contêineres) está no roteiro.
:::

## Gravar firmware

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M16.586 3A2 2 0 0 1 18 3.586L20.414 6A2 2 0 0 1 21 7.414V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.414A2 2 0 0 1 3.586 6L6 3.586A2 2 0 0 1 7.414 3zM19 9H5v10h14zm-7 1a1 1 0 0 1 1 1v3.186l.414-.414a1 1 0 1 1 1.414 1.414l-2.12 2.121a1 1 0 0 1-1.415 0l-2.121-2.121a1 1 0 1 1 1.414-1.414l.414.414V11a1 1 0 0 1 1-1m4.586-5H7.414l-2 2h13.172z"/></svg>Grave um binário de firmware pré‑compilado em um dispositivo ESP32 diretamente do navegador, sem instalar uma ferramenta de gravação separada. Use isto quando seu firmware já estiver compilado com todos os parâmetros incorporados.

**Dispositivos compatíveis:**

- [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)
- [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio XIAO ESP32S3 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html)
- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html)
- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Seeed Studio XIAO nRF52840 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html)
- [Seeed Studio XIAO nRF52840 Sense Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html)
- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Seeed Studio XIAO RP2350](https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html)
- [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html)
- [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- [Seeed Studio XIAO MG24 Sense](https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html)
- [Wio Terminal (D51R)](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) *(em breve)*
- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html) *(em breve)*
- [Grove Beginner Kit for Arduino](https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html) *(em breve)*

### Pré-requisitos:

**Um único arquivo `.bin` mesclado.** Se você tiver binários separados de bootloader, partição e app, mescle‑os antes de enviar.

- **Arduino IDE 2.x:** Um binário mesclado **só** é produzido quando você executa **Sketch → Export Compiled Binary**. A saída `*.ino.merged.bin` é gravada em uma pasta `build/` ao lado do seu arquivo `.ino`.
- **Arduino IDE antigo / mesclagem manual:** **Export Compiled Binary** grava arquivos `.bin` separados de bootloader, partição e app — mescle‑os com `esptool.py merge_bin` antes de enviar. Veja o guia no fórum da Seeed Studio: [How to export a single merged `.bin` file from Arduino IDE](https://forum.seeedstudio.com/t/how-to-export-compiled-binary-create-a-single-bin-file-for-production-and-test/274990).

### Fluxo de configuração

1. Clique em **Upload firmware** e envie seu arquivo `.bin`.
2. **Selecione o tipo de dispositivo** na lista suspensa.

### Fluxo de implantação

1. Conecte o dispositivo ao seu computador.
2. Clique em **Flash firmware**. O botão mostra a fase atual, com uma barra de progresso e um log de depuração abaixo: conectar serial → detectar dispositivo → gravar → reiniciar.
3. Após a conclusão da gravação, verifique o comportamento na janela de visualização.

Se alguma etapa falhar, um pop‑up de erro explica a causa para que você possa corrigir e tentar novamente.

## Node-RED

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 128 128" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'#8F0000'}}><path fill="currentColor" d="M64 0L8.61 32.033v63.979L64 128l55.39-31.986V32.053zm.023 5.3a1 1 0 0 1 .471.132l50.022 28.873c.306.176.523.502.523.855v57.744c0 .354-.217.68-.523.856l-50.022 28.879a.99.99 0 0 1-.988 0l-50.1-28.877a.99.99 0 0 1-.494-.856V35.16c0-.353.188-.679.494-.855l50.1-28.873a1 1 0 0 1 .517-.131zM64 7.43l-49.06 28.3v17.088h20.308c3.273.019 6.052 2.326 6.363 5.524c2.41-.304 3.891-.97 4.95-1.94c1.24-1.138 2.095-2.763 3.136-4.652c1.042-1.889 2.316-4.057 4.643-5.654c1.88-1.291 4.649-1.93 7.902-2.09v-1.127c0-3.478 2.713-6.281 6.192-6.281h25.183c3.479 0 6.586 2.803 6.586 6.28v6.188c0 3.479-3.121 6.325-6.6 6.325h-25.18c-3.478 0-6.18-2.846-6.18-6.325v-.802c-2.46.146-4.36.605-5.472 1.369c-1.43.98-2.323 2.4-3.311 4.191c-.92 1.667-1.95 3.622-3.666 5.342c9.2 1.46 13.774 4.955 17.426 8.148c4.393 3.842 7.916 6.9 19.728 6.987v-.856c0-3.478 2.979-6.383 6.457-6.383h19.657V35.73zm4.434 33.52c-1.175 0-2.143.754-2.143 1.929v6.187c0 1.175.956 1.973 2.13 1.973h25.184c1.175 0 2.047-.798 2.047-1.973V42.88c0-1.175-.86-1.93-2.035-1.93zM14.94 56.774v10.287h20.307c1.175 0 2.047-.776 2.047-1.95v-6.188c0-1.175-.873-2.149-2.047-2.149zm26.793 5.983l-.002 2.353c0 3.479-3.004 6.303-6.482 6.303H14.941v20.92L64 120.641l49.06-28.307v-6.479H93.407c-3.478 0-6.457-2.744-6.457-6.222v-1.074c-12.79-.17-18.177-4.186-22.554-8.014c-4.562-3.989-8.474-7.564-22.66-7.787zm51.674 8.656c-1.174 0-2.107.857-2.107 2.031v6.08c0 1.175.933 1.979 2.107 1.979h19.655v-10.09z"/></svg>O bloco [Node-RED](https://nodered.org) ajuda você a criar fluxos lógicos visuais para a reCamera.

### Recursos oficiais

- [GitHub](https://github.com/node-red/node-red)
- [Documentação](https://nodered.org/docs/)

### Dispositivos compatíveis

- [reCamera](https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html)

### Prepare seu fluxo de trabalho

Depois de adicionar o bloco Node-RED, configure o fluxo de uma destas maneiras:

1. **Criar novo fluxo de trabalho:** Conecte‑se à reCamera (com fio ou sem fio), abra o Dashboard dela e edite on‑line.
2. **Enviar arquivo local:** Envie um fluxo JSON que você já criou. O sistema valida o tipo de arquivo para que ele possa ser analisado de forma confiável.

### Selecione o modelo de visão de IA

Os fluxos JSON não incorporam binários de modelo. Especifique qual modelo este fluxo deve usar:

- **Integrado ao dispositivo:** Use modelos pré‑instalados na reCamera, incluindo variantes YOLO11n para classificação, detecção, segmentação e pose.
- **Modelos públicos:** Navegue pelos modelos públicos do SenseCraft compartilhados por outros para a reCamera.
- **Meu modelo:** Escolha na sua biblioteca privada.

:::caution
Se você usar um modelo privado em **Meu modelo** e publicar o app para a comunidade pública, esse modelo também se tornará público. Você será avisado antes da publicação.
:::

## Aily Blockly

<img src="https://github.com/ailyProject.png" alt="" style={{width:'1.25em',height:'1.25em',verticalAlign:'-0.3em',marginRight:'0.35em',borderRadius:'4px'}}/>[Aily Blockly](https://aily.pro) é um ambiente de programação visual. Com este bloco você pode gravar, em uma única etapa, programas que criou no Aily Blockly em dispositivos de borda.

### Recursos oficiais

- [GitHub](https://github.com/ailyProject/aily-blockly)
- [Documentation - Global site](https://aily.pro/doc)
- [Documentation - Mainland China site](https://yiyu.pro/doc)

### Dispositivos compatíveis

- [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)
- [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio XIAO ESP32S3 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html)
- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html)
- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Seeed Studio XIAO nRF52840 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html)
- [Seeed Studio XIAO nRF52840 Sense Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html)
- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Seeed Studio XIAO RP2350](https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html)
- [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html)
- [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- [Seeed Studio XIAO MG24 Sense](https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html)
- [Wio Terminal (D51R)](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)
- [Grove Beginner Kit for Arduino](https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html)

### Vincular ID do projeto

Insira o código do projeto que aponta para o seu template público do Aily Blockly.

#### Como obter um ID de projeto

1. Construa seu projeto no Aily Blockly e clique em **`Build (F5)`** para compilar.
2. Após uma compilação bem-sucedida, abra o painel **Cloud Space** e clique em **`Sync this project to cloud`**.
3. Seu ID de projeto aparece na área indicada (**`ID: …`**); use apenas os números.
4. Repita estas etapas sempre que você alterar o projeto para que a cópia na nuvem permaneça atualizada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/tool_blocks/aily-get-project-id.png" alt="Como obter um ID de projeto do Aily Blockly" style={{width:1000, height:'auto'}}/></div>
