---
description: Primeiros Passos
title: Primeiros Passos com TensorFlow Lite no Seeed Studio XIAO nRF52840 Sense
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-TFLite-Getting-Started
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/XIAO-BLE-Sense-TFLite-Getting-Started/
---

# Primeiros Passos com TensorFlow Lite no Seeed Studio XIAO nRF52840 Sense

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite-thumb.jpg" alt="pir" width={1000} height="auto" /></p>

Este wiki demonstrará como você pode usar TensorFlow Lite no Seeed Studio XIAO nRF52840 Sense e detectar gestos como socos e flexões usando o acelerômetro integrado. Aqui o treinamento dos dados será feito no próprio dispositivo.

> Para aplicações de IA embarcada, recomendamos fortemente o uso da "Seeed nrf52 mbed-enabled Boards Library".

## Configuração de software

Certifique-se primeiro de seguir o wiki ["Primeiros Passos com Seeed Studio XIAO nRF52840 (Sense)"](https://wiki.seeedstudio.com/pt-br/XIAO-BLE-Sense-Getting-Started) para a configuração inicial de hardware e software.

Agora vamos prosseguir com o restante da configuração de software.

- **Passo 1**. Baixe a [biblioteca Seeed_Arduino_LSM6DS3](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) como um arquivo zip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 2**. Baixe a [biblioteca tflite-micro-arduino-examples](https://github.com/lakshanthad/tflite-micro-arduino-examples) como um arquivo zip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/tflite-micro-github.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 3**. Abra a Arduino IDE, navegue até `Sketch > Include Library > Add .ZIP Library...` e abra os dois arquivos zip baixados, um após o outro

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **Passo 4.** Navegue até `File > Examples > Seeed Arduino LSM6DS3 > IMU_Capture` para abrir **IMU_Capture.ino**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/select-IMUCapture-2.png" alt="pir" width={500} height="auto" /></p>

- **Passo 5.** Faça upload do código e abra o **Serial Monitor**

**Nota:** Depois de fazer o upload do código, ele não será executado automaticamente até que você clique em **Serial Monitor** no canto superior direito da janela do Arduino.

## Treinar dados

### Ação de soco

Com o monitor serial aberto, comece a treinar dados para a ação de soco.

- **Passo 1.** Segure o Seeed Studio XIAO nRF52840 Sense na palma da sua mão e comece a dar socos para a frente e você verá alguns dados sendo impressos no monitor serial

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-punch.gif" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/punch-serial.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 2.** Repita a ação de soco cerca de 10 vezes e você verá novos dados gerados após cada soco

- **Passo 3.** Copie e cole a saída completa do monitor serial em um arquivo de texto e salve o arquivo de texto como **punch.csv**

**Nota:** Copie também a primeira linha, que contém **aX,aY,aZ,gX,gY,gZ**

### Ação de flexão

- **Passo 1.** Reconecte o cabo USB ao Seeed Studio XIAO nRF52840 Sense, abra o monitor serial, segure o Seeed Studio XIAO nRF52840 Sense na palma da sua mão e comece a flexionar para dentro e você verá alguns dados sendo impressos no monitor serial

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-flex.gif" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/flex-serial.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 2.** Repita a ação de flexão cerca de 10 vezes e você verá novos dados gerados após cada flexão

- **Passo 3.** Copie e cole a saída completa do monitor serial em um arquivo de texto e salve o arquivo de texto como **flex.csv**

**Nota:** Copie também a primeira linha, que contém **aX,aY,aZ,gX,gY,gZ**

## Gerar arquivo de modelo TensorFlow Lite

Agora vamos gerar um arquivo de modelo TensorFlow Lite **(model.h)**, usando os arquivos **punch.csv** e **flex.csv** que criamos antes.

- **Passo 1.** Abra [este notebook Python](https://colab.research.google.com/github/arduino/ArduinoTensorFlowLiteTutorials/blob/master/GestureToEmoji/arduino_tinyml_workshop.ipynb) que ajudará a gerar o arquivo model.h de que precisamos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TF-notebook-1.png" alt="pir" width={7500} height="auto" /></p>

- **Passo 2.** Navegue até a aba de arquivos no painel de navegação à esquerda, arraste e solte os arquivos **punch.csv** e **flex.csv** ali dentro

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/drop-punch-flex.png" alt="pir" width={350} height="auto" /></p>

- **Passo 3.** Na seção **Setup Python Environment**, altere o código de **pip install tensorflow==2.0.0-rc1** para **pip install tensorflow**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/tensorflow-install.png" alt="pir" width={550} height="auto" /></p>

- **Passo 4.** Navegue até `Runtime > Run all` para executar todas as células de código

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-all.png" alt="pir" width={450} height="auto" /></p>

- **Passo 5.** Clique em **Run anyway** na mensagem de erro que aparecer

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png" alt="pir" width={600} height="auto" /></p>

- **Passo 6.** Depois que todas as células de código forem executadas, você encontrará um novo arquivo **model.h** gerado na aba **files** que vimos antes

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/model.h.png" alt="pir" width={350} height="auto" /></p>

**Nota:** Se você não conseguir ver o arquivo **model.h** acima, atualize a página.

- **Passo 7.** Clique com o botão direito no arquivo e clique em **Download** para baixar o arquivo para o seu PC

## Inferência

Agora usaremos o arquivo de modelo TensorFlow Lite baixado **(model.h)** para reconhecer as ações de soco e flexão a partir do Seeed Studio XIAO nRF52840 Sense.

- **Passo 1.** Navegue até o caminho da biblioteca **Seeed_Arduino_LSM6DS3** (normalmente em **Documents > Arduino > libraries > Seeed_Arduino_LSM6DS3**) e acesse **examples > IMU_Classifier**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/file-explorer-imu.png" alt="pir" width={650} height="auto" /></p>

- **Passo 2.** Substitua o arquivo **model.h** pelo que baixamos anteriormente

- **Passo 3.** Dê um clique duplo em **IMU_Classifier.ino** e faça upload do código para o Seeed Studio XIAO nRF52840 Sense.

### Ação de soco

Abra o **monitor serial** e realize uma ação de soco. Você verá que será dado um resultado próximo de **1** ao lado de **punch**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/punch-result.png" alt="pir" width={300} height="auto" /></p>

### Ação de flexão

Realize uma ação de flexão. Você verá que será dado um resultado próximo de **1** ao lado de **flex**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/flex-result.png" alt="pir" width={300} height="auto" /></p>

## Recursos

- **[Página da Web]** [Documentação do TensorFlow Lite](https://www.tensorflow.org/lite/guide)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
