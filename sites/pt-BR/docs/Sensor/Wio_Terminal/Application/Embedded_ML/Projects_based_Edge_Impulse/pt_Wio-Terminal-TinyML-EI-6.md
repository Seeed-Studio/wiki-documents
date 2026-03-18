---
description: Detecção de anomalias para Manutenção Preditiva
title: Detecção de anomalias para Manutenção Preditiva
keywords:
  - Wio_terminal
  - Embedded_ML
  - Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-TinyML-EI-6
last_update:
  date: 1/30/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-TinyML-EI-6/
---

# Detecção de Anomalias com Wio Terminal e Edge Impulse para Manutenção Preditiva

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_19_2725-1536x864.png"/></div>

Neste projeto, usaremos dados do acelerômetro integrado do Wio Terminal, executaremos detecção de anomalias no próprio dispositivo e depois enviaremos os dados para a Blynk Edgent Cloud.

Anomalias. Ou especificamente detecção de anomalias para manutenção preditiva. Vamos usar dados do acelerômetro integrado do Wio Terminal, executar a inferência de um modelo de rede neural e detecção de anomalias no dispositivo e depois enviar os dados para a nova versão da plataforma Blynk IoT, com uma infinidade de novos recursos, que oferece suporte completo ao Wio Terminal.

Para o tutorial completo e demonstração em vídeo, dê uma olhada no vídeo a seguir:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/gXs-h3eeT1U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Isso foi o QUE, agora quanto ao COMO, vamos começar com um exemplo que pode ser mais familiar.

## Detecção de anomalias e manutenção preditiva em poucas palavras

Se você treinar um modelo simples de reconhecimento de imagens para reconhecer, digamos, 5 classes diferentes de animais (tigre, elefante, urso, cobra e girafa) e então der a ele a imagem de uma pessoa, ele fará uma previsão da melhor forma que conseguir e possivelmente dirá que é um elefante. Entra em cena a risada das pessoas comuns, que na verdade não entendem muito sobre o funcionamento interno desse modelo específico e de visão computacional em geral.

Claro, o modelo não fez nada de errado – ele processou a imagem, calculou as características presentes e então produziu o resultado de classificação com base nessas características. Embora, se plotarmos as características das classes e as agrupamos, veríamos que, idealmente, as características da imagem de um humano estão longe de qualquer agrupamento de classe e, portanto, representam um “outlier”.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/knowing_all_about_outliers_in_machine_learning_sample_points_in_green_are_near_to_each_other.png"/></div>

O que, é claro, poderia ser apenas uma imagem muito estranha de um dos animais, mas na maioria dos casos é muito mais provável que seja um objeto para o qual o modelo não foi treinado para reconhecer.

Para tarefas de visão computacional e reconhecimento de fala, muitas vezes temos uma classe de “fundo” para lidar com esse problema, que basicamente representa qualquer coisa que não seja as classes de interesse. Em algumas situações, nós realmente só queremos que nosso modelo seja capaz de interpretar todos os dados como “normais” e “anormais”. Não importa quais são as características exatas de “anormal” – elas podem ser totalmente diferentes; o importante é que, se a classe “anormal” for detectada, algumas medidas precisam ser implementadas. O que descrevi agora é a premissa por trás do uso de Machine Learning para manutenção preditiva. Monitoramos o estado de um dispositivo, seja um ar-condicionado, bomba d’água ou outra máquina com sensores e, com base no perfil de operação “normal” conhecida, tentamos detectar quando algo começa a dar ERRADO DE LEVE, antes que dê ERRADO DE VERDADE.

## Coletando os dados e treinando o modelo

Para este projeto, instalei o Wio Terminal em uma bomba d’água no pátio externo do nosso escritório, que tem algumas plantas e peixes.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_04_2007-1536x864.png"/></div>

Depois coletei duas categorias de amostras – em repouso e em operação normal – e treinei um modelo simples para reconhecer essas duas com base na saída do bloco de processamento Spectral Features.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-1.png"/></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-2.png"/></div>

Para os parâmetros exatos dos blocos de processamento e aprendizado, você pode dar uma olhada na versão pública do projeto que compartilhei. O único ajuste significativo que fiz foi mudar o filtro de low para high, o que tornou as características das diferentes classes mais proeminentes. Distinguir entre repouso e operação normal da bomba, é claro, acabou sendo realmente fácil. A tarefa mais desafiadora foi a detecção de mau funcionamento. Para simular um mau funcionamento, eu tirava a bomba d’água do tanque – isso basicamente fazia os níveis de som e vibração diminuírem.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_19_2725-1536x864.png"/></div>

Observando a amostra de mau funcionamento, no explorador de características nos eixos accX RMS, accY RMS e accZ RMS, vemos que ela fica na metade do caminho entre as amostras de repouso e de operação normal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-3-1536x906.png"/></div>

Podemos usar isso a nosso favor treinando uma nova (segunda) rede que cria agrupamentos em torno dos dados que já vimos e compara os dados recebidos com esses agrupamentos. Se a distância até um agrupamento for muito grande, a amostra é sinalizada como uma anomalia.

Após tentativa e erro, descobri que uma contagem de clusters bem baixa e um limiar de distância de 0.5 funcionam melhor para detecção de anomalias, mas isso é muito específico de cada caso e depende dos seus dados. Uma coisa que ajudou a aumentar a precisão foi fixar o Wio Terminal firmemente na bomba d’água com cola – para um dispositivo real você pode usar parafusos. Antes de fixá-lo firmemente, o Wio Terminal balançava aleatoriamente, o que introduzia muito ruído nas amostras de operação normal.

## Implantação e teste

Depois que o modelo é treinado e testado usando o modo Live classification, é hora de implantá-lo de volta no dispositivo. Compilamos e baixamos a biblioteca Arduino, extraímos para a pasta de bibliotecas do Arduino e então modificamos o sketch nano33_ble_sense_accelerometer para corresponder ao acelerômetro que temos no Wio Terminal. Para um teste simples usamos a tela LCD, que acende em vermelho se uma anomalia for detectada.

```cpp
#define ANOMALY_THRESHOLD 0.5

/* Includes ---------------------------------------------------------------- */
#include <wio_anomaly_detection_inference.h>
#include"LIS3DHTR.h"
#include"TFT_eSPI.h"

TFT_eSPI tft;
LIS3DHTR<TwoWire> lis;

/* Constant defines -------------------------------------------------------- */
#define CONVERT_G_TO_MS2    9.80665f

/* Private variables ------------------------------------------------------- */
static bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal

/**
* @brief      Arduino setup function
*/
void setup()
{
    // put your setup code here, to run once:
    Serial.begin(115200);
    //while (!Serial) {delay(10);}

    Serial.println("Edge Impulse Inferencing Demo");

    tft.begin();
    tft.setRotation(3);

    lis.begin(Wire1);

    if (!lis.available()) {
    Serial.println("Failed to initialize IMU!");
    while (1);
    }
    else {
        ei_printf("IMU initialized\r\n");
    }
    lis.setOutputDataRate(LIS3DHTR_DATARATE_100HZ); // Setting output data rage to 25Hz, can be set up tp 5kHz 
    lis.setFullScaleRange(LIS3DHTR_RANGE_16G); // Setting scale range to 2g, select from 2,4,8,16g


    if (EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME != 3) {
        ei_printf("ERR: EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME should be equal to 3 (the 3 sensor axes)\n");
        return;
    }
}

/**
* @brief      Printf function uses vsnprintf and output using Arduino Serial
*
* @param[in]  format     Variable argument list
*/
void ei_printf(const char *format, ...) {
   static char print_buf[1024] = { 0 };

   va_list args;
   va_start(args, format);
   int r = vsnprintf(print_buf, sizeof(print_buf), format, args);
   va_end(args);

   if (r > 0) {
       Serial.write(print_buf);
   }
}

/**
* @brief      Get data and run inferencing
*
* @param[in]  debug  Get debug info if true
*/
void loop()
{

    ei_printf("Sampling...\n");

    // Allocate a buffer here for the values we'll read from the IMU
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // Determine the next tick (and then sleep later)
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);

        lis.getAcceleration(&buffer[ix], &buffer[ix+1], &buffer[ix + 2]);
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

  if (result.anomaly > ANOMALY_THRESHOLD)
  {       
    tft.fillScreen(TFT_RED);
    tft.setFreeFont(&FreeSansBoldOblique12pt7b);
    tft.drawString("Anomaly detected", 20, 80);
    delay(1000);
    tft.fillScreen(TFT_WHITE);
  }

#endif
}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_ACCELEROMETER
#error "Invalid model for current sensor"
#endif
```

Claro que, para uma aplicação real, esse tipo de notificação provavelmente não vai funcionar, porque não há uma pessoa monitorando isso constantemente.

## Utilizando o novo lançamento da plataforma Blynk IoT

Para tornar este demo útil, vamos usar a plataforma Blynk IoT.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/b641e2030c1c47fbc7161c98a7e5d998.jpg"/></div>

A plataforma Blynk IoT inclui recursos como um painel web para monitorar dispositivos, gerenciar quem acessa os dados, um gerenciador de WI-FI para um procedimento de configuração simples, uma nova abordagem para criação de modelo de dispositivo, entre outros.

Vá para blynk.cloud, registre uma conta ou crie uma nova. Em seguida, crie um novo template – templates são modelos digitais do dispositivo que podem ser herdados por múltiplos dispositivos com funcionalidade semelhante. O poder dos templates está na atualização instantânea do modelo de dados do dispositivo, independentemente do tamanho da sua frota de dispositivos.

Escolha Arduino Uno como hardware e Wi-Fi como tipo de conexão. Depois preencha as abas Datastreams e Dashboard como nos screenshots a seguir e salve as alterações.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-4-1536x551.png"/></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-5.png"/></div>

Não estamos usando as abas Metadata ou Events neste projeto. A finalidade principal dos componentes principais do template de dispositivo:

- Metadata – dados adicionais sobre o dispositivo que você pode configurar.
- Datastreams – uma entidade para definir os dados que entram e saem do dispositivo. No geral, é muito semelhante a Virtual Pins (que também podem ser usados).
- Events – uma lista de alertas e notificações importantes.
- Web Dashboard – Um conjunto de Widgets no aplicativo Web
- Mobile Dashboard – Um conjunto de Widgets no aplicativo Mobile

Crie um novo dispositivo na aba My Devices – escolha o template que você criou e dê a ele um nome único.

Agora a interface web está pronta para receber os dados do nosso dispositivo. Baixe o sketch de exemplo do repositório de sketches de exemplo do Seeed Wio Terminal – além do arquivo principal do sketch ele também contém arquivos auxiliares, onde o código do gerenciador de Wi-Fi está localizado. No arquivo principal do sketch, o código de coleta de dados/processamento de dados/inferência que usamos para testar com a tela LCD foi movido para a função run_inference(). O ID da classe com maior confiança (se a confiança estiver acima do limite definido) é salvo dentro da variável global best_result e, juntamente com os dados dos sensores de luz e som, está sendo enviado para o servidor Blynk em intervalos periódicos. Lembre-se de alterar BLYNK_TEMPLATE_ID e BLYNK_DEVICE_NAME para aqueles do seu template de Dispositivo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-6.png"/></div>

Depois que você carregar o código no Wio Terminal, ele criará um hotspot, ao qual você poderá se conectar com seu telefone. Ao se conectar, você será automaticamente redirecionado para uma página simples de configuração, onde precisa inserir as credenciais do seu WiFi, seu token de API (você pode encontrá-lo clicando no seu dispositivo na aba My Devices e depois indo em Device Info) e então clicar em Connect. Em seguida, o Wio Terminal se conectará à rede WiFi e ao servidor em nuvem Blynk e começará a enviar os dados. Você pode pressionar o dispositivo na aba My Devices e ver os belos gráficos e a mensagem de status. Você pode ver os resultados do teste no final do vídeo.

Obviamente, a mesma abordagem pode ser aplicada à detecção de irregularidades na operação de outras máquinas – podemos usar o acelerômetro para praticamente tudo que tenha partes móveis, já que estas produzem vibração que podemos medir. Se o dispositivo emitir sons audíveis, também podemos usar um microfone. Uma combinação de sensores pode funcionar ainda melhor. Há outras boas aplicações onde a manutenção preditiva pode ser usada? Escreva suas ideias nos comentários! Espero que este artigo e vídeo tenham sido úteis para você!

## Referência

- [Projeto público do Edge Impulse](https://studio.edgeimpulse.com/public/31205/latest)

- [Projeto Github](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_5_Anomaly_Detection)
