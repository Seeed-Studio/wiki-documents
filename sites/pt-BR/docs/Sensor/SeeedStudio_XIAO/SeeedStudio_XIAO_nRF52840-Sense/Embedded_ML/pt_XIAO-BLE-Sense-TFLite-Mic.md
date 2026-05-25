---
description: Reconhecimento de Fala
title: Reconhecimento de Fala
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-TFLite-Mic
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/XIAO-BLE-Sense-TFLite-Mic/
---

# Reconhecimento de fala no Seeed Studio XIAO nRF52840 Sense

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TFLite-mic-thumb.png" alt="pir" width={1000} height="auto" /></p>


Este wiki demonstrará como você pode usar TensorFlow Lite no Seeed Studio XIAO nRF52840 Sense e realizar reconhecimento de fala usando o microfone integrado.

> Quando se trata de aplicações de IA embarcada, recomendamos fortemente o uso da "Seeed nrf52 mbed-enabled Boards Library".

## Configuração de software

Certifique-se primeiro de seguir o wiki ["Getting Started with Seeed Studio XIAO nRF52840 (Sense)"](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/) para a configuração inicial de hardware e software.

Agora vamos prosseguir com o restante da configuração de software.

- **Passo 1**. Baixe a [biblioteca tflite-micro-arduino-examples](https://github.com/lakshanthad/tflite-micro-arduino-examples) como um arquivo zip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/tflite-mic-github.png" alt="pir" width={1000} height="auto" /></p>


- **Passo 2**. Abra o Arduino IDE, navegue até `Sketch > Include Library > Add .ZIP Library...` e abra o arquivo zip baixado 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


## Treinar dados e gerar o modelo TensorFlow Lite

Agora usaremos um notebook do Google Colab para realizar o treinamento dos dados e gerar um modelo TensorFlow Lite.

- **Passo 1.** Abra [este notebook Python](https://colab.research.google.com/github/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-mic.jpg" alt="pir" width={1000} height="auto" /></p>


Por padrão, ele carregará [este conjunto de dados](https://storage.googleapis.com/download.tensorflow.org/data/speech_commands_v0.02.tar.gz) que pode reconhecer as palavras: **"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"**

- **Passo 2.** Na coluna **Configure Defaults**, altere o parâmetro **WANTED_WORDS** de acordo com as palavras que você deseja que o modelo reconheça. Você pode escolher entre: **"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-wanted-words.png" alt="pir" width={600} height="auto" /></p>


**Nota:** Neste exemplo, as palavras **yes,no,up,down** foram escolhidas

- **Passo 3.** Navegue até `Runtime > Run all` para executar todas as células de código

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-speech-run-all.png" alt="pir" width={450} height="auto" /></p>


- **Passo 4.** Clique em **Run anyway** na mensagem de erro que aparecer

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png" alt="pir" width={600} height="auto" /></p>


**Nota:** Este processo levará cerca de 2 horas para ser concluído

- **Passo 5.** Quando todas as células de código forem executadas, navegue até a aba **files** no canto esquerdo e você encontrará um novo arquivo **model.cc** gerado dentro da pasta **models**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-cc.png" alt="pir" width={300} height="auto" /></p>


**Nota:** Se você não conseguir ver o arquivo **model.cc** acima, atualize a página.

- **Passo 6.** Clique com o botão direito no arquivo e clique em **Download** para baixá-lo para o seu PC

## Inferência 

Agora usaremos o arquivo de modelo TensorFlow Lite baixado **(model.cc)** para reconhecer diferentes palavras usando o microfone no Seeed Studio XIAO nRF52840 Sense.

- **Passo 1.** Navegue até o caminho da biblioteca **tflite-micro-arduino-examples** (normalmente em **Documents > Arduino > libraries > tflite-micro-arduino-examples**), vá até **examples > micro_speech** e abra **micro_features_model.cpp**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-features-model-open.png" alt="pir" width={550} height="auto" /></p>


- **Passo 2.** Substitua os valores em `const unsigned char g_model[] DATA_ALIGN_ATTRIBUTE = {` pelos novos valores do arquivo **model.cc**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-values.png" alt="pir" width="550" height="auto" /></p>


- **Passo 3.** Altere **g_model_len** de acordo com o valor de **model.cc**. Aqui obtivemos **26720**

```cpp
const int g_model_len = 26720;
```

- **Passo 4.** Abra **micro_features_micro_model_settings.cpp** dentro da pasta **micro_speech** e adicione todas as palavras que definimos no processo de treinamento. Aqui usamos **yes,no,up,down**

```cpp
#include "micro_features_micro_model_settings.h"

const char* kCategoryLabels[kCategoryCount] = {
    "silence",
    "unknown",
    "yes",
    "no",
    "up",
    "down",
};
```

- **Passo 5.** Abra **micro_features_micro_model_settings.h** dentro da pasta **micro_speech** e altere **constexpr int kCategoryCount** de acordo com o número de categorias definidas. Aqui temos 6 categorias

```cpp
constexpr int kCategoryCount = 6;
```

- **Passo 6.** Abra **micro_speech.ino** dentro da pasta **micro_speech** e envie os códigos para o Seeed Studio XIAO nRF52840 Sense

- **Passo 7.** Abra a **janela do monitor serial** e diga em voz alta as palavras que definimos antes. Você verá o monitor serial exibir corretamente as palavras faladas após o reconhecimento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/mic-capture.png" alt="pir" width={300} height="auto" /></p>


## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>