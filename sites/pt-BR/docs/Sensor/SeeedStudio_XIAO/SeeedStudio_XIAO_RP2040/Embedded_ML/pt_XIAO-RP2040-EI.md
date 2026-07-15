---
description: Reconhecimento de movimento baseado em Edge Impulse
title: Reconhecimento de movimento baseado em Edge Impulse
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-RP2040-EI
last_update:
  date: 04/17/2023
  author: Citric
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-EI/
---

# TinyML no SEEED XIAO RP2040 (Reconhecimento de Movimento)

Neste wiki, vamos mostrar como utilizar o acelerômetro no Seeed Studio XIAO RP2040 combinado com Edge Impulse para habilitar o reconhecimento de movimento. Os códigos que apresentamos aqui são suportados pela versão mais recente das placas XIAO RP2040.

## Materiais Necessários

### Hardware

Neste wiki, precisamos preparar os seguintes materiais:

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Grove - Shield for Seeeduino Xiao](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)
- [Grove - 3-Axis Digital Accelerometer(±1.5g)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_all_in_one.jpg" alt="pir" width={800} height="auto" /></p>

**Configuração de Hardware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_all_in_one_connect.jpg" alt="pir" width={400} height="auto" /></p>

### Software

As bibliotecas necessárias estão listadas abaixo. É altamente recomendado que você use os códigos aqui para verificar se o hardware está funcionando bem. Se você tiver problema para instalar a biblioteca, consulte [aqui](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/).

- [Seeed_Arduino_LSM6DS3-master](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Seeed_Arduino_LSM6DS3-master.zip)

## Introdução

Primeiro vamos rodar alguns demos para verificar se a placa e a tela de exibição estão funcionando bem. Se as suas estiverem OK, você pode seguir para a próxima instrução.

### Verificar a conexão do circuito e o acelerômetro

Abra a Arduino IDE, navegue até Sketch -> Include Library -> Manage Libraries... e procure e instale a `U8g2 library` no Library Manager.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition29.png" alt="pir" width={400} height="auto" /></p>

Após a instalação, copie o código a seguir e execute-o.

```cpp
#include <Wire.h>
#include "MMA7660.h"
MMA7660 accelemeter;
#define CONVERT_G_TO_MS2    9.80665f

void setup() {
    Serial.begin(115200);
    while (!Serial);
    accelemeter.init();
}


void loop() {

    float ax, ay, az;
    accelemeter.getAcceleration(&ax, &ay, &az);

    Serial.print(ax * CONVERT_G_TO_MS2,4);
    Serial.print('\t');
    Serial.print(ay * CONVERT_G_TO_MS2,4);
    Serial.print('\t');
    Serial.println(az * CONVERT_G_TO_MS2,4);

}

```

Depois de fazer o upload do código e desconectar o Seeed Studio XIAO RP2040.
Então, abra o monitor serial e você verá a saída assim:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_serial_monitor.jpg" alt="pir" width={400} height="auto" /></p>

Se tudo estiver bem, podemos seguir e conectar o Seeed Studio XIAO RP2040 ao Edge Impulse.

## Conectado com Edge Impulse

A precisão do modelo de treinamento é muito importante para o resultado final. Se os resultados de treinamento de saída forem tão baixos quanto menos de 65%, recomendamos fortemente que você treine mais vezes ou adicione mais dados.

- **Passo 1.** Crie um novo projeto no [Edge Impulse](https://studio.edgeimpulse.com/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/01.jpg" alt="pir" width={800} height="auto" /></p>

- **Passo 2.** Escolha "Accelerometer data" e clique em "Let’s get started!"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/02.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/03.jpg" alt="pir" width={800} height="auto" /></p>

- **Passo 3.** Instale o [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/cli-installation) no seu computador.

- **Passo 4.** Execute o comando no seu `terminal` ou `cmd` ou `powershell` para iniciá-lo.

```bash
sudo edge-impulse-data-forwarder
```

- **Passo 5.** Precisamos usar o CLI para conectar o Seeed Studio XIAO RP2040 com o Edge Impulse. Primeiro, faça login na sua conta e escolha seu projeto

Dê um nome ao acelerômetro e ao dispositivo.

Volte para a página "Data acquisition" do Edge Impulse, o resultado deve ser assim se a conexão for bem-sucedida. Você pode encontrar o dispositivo "XIAO RP2040" mostrado à direita da página.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/04.jpg" alt="pir" width={800} height="auto" /></p>

- **Passo 6.**  Selecione o sensor como "3 axes". Dê o nome `up` e `down` ao seu rótulo, modifique Sample length (ms.) para 20000 e clique em start sampling.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/05.jpg" alt="pir" width={800} height="auto" /></p>

- **Passo 7.** Balance o [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040/) para cima e para baixo e mantenha o movimento por 20 segundos. Você pode ver que a aquisição é mostrada assim:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/06.jpg" alt="pir" width={800} height="auto" /></p>

- **Passo 8.** Divida os dados clicando na parte superior direita dos dados brutos e escolhendo "Split Sample". Clique em +Add Segment e depois clique no gráfico. Repita isso mais de 20 vezes para adicionar segmentos. Clique em Split e você verá os dados de amostra, cada um com 1 segundo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/07.jpg" alt="pir" width={800} height="auto" /></p>

- **Passo 9.** Repita o **Passo 7.** e o **Passo 8.** e rotule os dados com nomes diferentes para clicar em dados de movimentos diferentes, como `circle` e `line` e assim por diante. O exemplo fornecido está classificando para cima e para baixo, esquerda e direita, e círculo. Você pode mudar isso como quiser aqui.

:::note
No Passo 8, o tempo de divisão é de 1 segundo, o que significa que você deve pelo menos fazer um movimento de subida e descida em um segundo no Passo 7. Caso contrário, os resultados não serão precisos. Enquanto isso, você pode ajustar o tempo de divisão de acordo com sua própria velocidade de movimento.
:::

- **Passo 10.** Criar Impulse

Clique em **Create impulse** -> Add a processing block -> Escolha **Spectral Analysis** -> Add a learning block -> Escolha **Classification (Keras)** -> Save Impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/08.jpg" alt="pir" width={800} height="auto" /></p>

- **Passo 11.** Spectral features

Clique e configure

Clique em **Spectral features** -> Role a página para baixo para clicar em Save parameters -> Clique em **Generate features**

A página de saída deve ser assim:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/09.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/10.jpg" alt="pir" width={800} height="auto" /></p>

- **Passo 12.** Treinando seu modelo

Clique em NN Classifier -> Clique em Start training -> Escolha Unoptimized (float32)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/11.jpg" alt="pir" width={800} height="auto" /></p>

- **Passo 13.** Teste do modelo

Clique em Model testing -> Clique em Classify all

**Se sua acurácia estiver baixa, você pode verificar seu conjunto de dados aumentando o conjunto de treinamento e estendendo o tempo de amostra**

Também podemos obter a avaliação ao baixar o modelo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/12.jpg" alt="pir" width={800} height="auto" /></p>

- **Passo 14.** Construir biblioteca Arduino

Clique em Deployment -> Clique em Arduino Library -> Clique em **Build** -> Baixe o arquivo .ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/13.jpg" alt="pir" width={800} height="auto" /></p>

- **Passo 15.** O nome do arquivo .ZIP é muito importante, ele é definido como o nome do seu projeto do Edge Impulse por padrão. Como aqui o nome do projeto é "RP2040". Selecione o arquivo como ""Adicione o "arquivo .ZIP" às suas bibliotecas do Arduino

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/14.jpg" alt="pir" width={800} height="auto" /></p>

- **Passo 16.** Abra o Arduino -> Clique em Sketch -> Clique em **Include Library** ->
 **ADD .ZIP Library**

Copie o código abaixo, se o nome do projeto no edgeimpluse for personalizado, então o texto do arquivo zip terá o mesmo nome. Você pode alterar a primeira linha do include para o seu arquivo de cabeçalho.

```c
#include <XIAO_RP2040_inferencing.h> // customed name need change this header file to your own file name
#include <Wire.h>
#include "MMA7660.h"
MMA7660 accelemeter;

#define CONVERT_G_TO_MS2    9.80665f
#define MAX_ACCEPTED_RANGE  2.0f         

static bool debug_nn = false; 

void setup()
{
    Serial.begin(115200);
    while (!Serial);
    Serial.println("Edge Impulse Inferencing Demo");
    accelemeter.init();
}

float ei_get_sign(float number) {
    return (number >= 0.0) ? 1.0 : -1.0;
}

void loop()
{
    ei_printf("\nStarting inferencing in 2 seconds...\n");

    delay(2000);

    ei_printf("Sampling...\n");

    // Allocate a buffer here for the values we'll read from the IMU
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // Determine the next tick (and then sleep later)
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);
        accelemeter.getAcceleration(&buffer[ix], &buffer[ix + 1], &buffer[ix + 2]);

        for (int i = 0; i < 3; i++) {
            if (fabs(buffer[ix + i]) > MAX_ACCEPTED_RANGE) {
                buffer[ix + i] = ei_get_sign(buffer[ix + i]) * MAX_ACCEPTED_RANGE;
            }
        }

        buffer[ix + 0] *= CONVERT_G_TO_MS2;
        buffer[ix + 1] *= CONVERT_G_TO_MS2;
        buffer[ix + 2] *= CONVERT_G_TO_MS2;

        delayMicroseconds(next_tick - micros());
    }

    // Turn the raw buffer in a signal which we can the classify
    signal_t signal;
    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);
    if (err != 0) {
        ei_printf("Failed to create signal from buffer (%d)\n", err);
        return;
    }

    // Run the classifier
    ei_impulse_result_t result = { 0 };

    err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("ERR: Failed to run classifier (%d)\n", err);
        return;
    }

    // print the predictions
    ei_printf("Predictions ");
    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: %.3f\n", result.anomaly);
#endif

}

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/15.jpg" alt="pir" width={800} height="auto" /></p>

- **Passo 17.** Movimente ou segure o Seeed Studio XIAO RP2040 e verifique os resultados:

Clique no monitor no canto superior direito do Arduino.

Quando você mover o Seeed Studio XIAO RP2040 na direção de **círculo e linha**:

O monitor exibirá algo como:

```bash
15:45:45.434 -> 
15:45:45.434 -> Starting inferencing in 2 seconds...
15:45:47.414 -> Sampling...
15:45:48.439 -> Predictions (DSP: 6 ms., Classification: 1 ms., Anomaly: 0 ms.): 
15:45:48.439 ->     Circle: 0.59766
15:45:48.439 ->     line: 0.40234
15:45:48.439 -> 
```

Parabéns! Você chegou ao final do projeto. É encorajado que você tente mais direções e verifique qual delas terá o melhor desempenho de saída.

## Recursos

- [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040/)
- [Edge Impluse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
