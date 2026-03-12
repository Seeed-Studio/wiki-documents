---
description: TinyML no Seeed Studio XIAO SAMD21
title: TinyML no Seeed Studio XIAO SAMD21
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino-XIAO-TinyML
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO-TinyML/
---
# TinyML na Série Seeed Studio XIAO

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/Seeeduino-XIAO-pinout.jpg" /></div>


Graças aos avanços recentes na otimização de modelos e ao surgimento de frameworks criados especificamente para executar inferência de modelos de aprendizado de máquina em microcontroladores, passou a ser possível dar mais inteligência a esses dispositivos minúsculos. Agora podemos implantar redes neurais em microcontroladores para reconhecimento de cenas de áudio (por exemplo, atividade de elefantes ou som de vidro quebrando), detecção de palavra‑chave (para ativar o dispositivo com uma frase específica) ou até mesmo para tarefas simples de reconhecimento de imagem. Os dispositivos com microcontroladores embarcados podem ser usados para dar nova vida e significado a sensores antigos, como usar um acelerômetro instalado em um mecanismo para detecção de anomalias e manutenção preditiva – ou para distinguir vários tipos de licores como neste [demo](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Edge-Impulse-Distinguish-Alochol/)! 
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg" /></div>


**As possibilidades do TinyML são realmente enormes.**

Nós preparamos [uma série inteira sobre implantação de modelos tiny de aprendizado de máquina](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-TinyML/) em outro produto da Seeed Studio, uma placa de desenvolvimento compacta em um gabinete de plástico, o Wio Terminal. Mas é possível ir ainda menor e implantar modelos semelhantes em ARM Cortex M0+ e na pequena placa [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html), que é construída em torno dele – a placa é tão pequena quanto um polegar (21×17,8 mm), consome apenas 1,33 mAh de energia (o que significa que pode funcionar ~112 horas em uma bateria de 150 mA, muito mais se colocada em deep sleep) e custa apenas 4,3 USD.

Este projeto abrange o treinamento e a implantação de modelo nas placas de desenvolvimento Seeed Studio XIAO SAMD21 e Seeed Studio XIAO RP2040. Para informações adicionais, dê uma olhada no vídeo correspondente!

<iframe width={560} height={315} src="https://www.youtube.com/embed/04_7U8MzVKg" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />


## Aquisição de dados e treinamento do modelo

Engenheiros de software passam muito tempo em frente à tela brilhante na minha cadeira. E, mais tarde no dia, torna‑se difícil manter uma postura adequada. Se ao menos houvesse uma maneira de fazer um dispositivo que pudesse aprender a sua posição específica de corpo para posturas corretas e incorretas e avisar quando você se curvar demais ou entrar na “postura Python”... Espere um momento, existe!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/utxkrcg5yss61.png" /></div>


O melhor sensor para a tarefa, que irá fornecer os dados para o modelo de aprendizado de máquina, é obviamente o acelerômetro. O Seeed Studio XIAO SAMD21 original e o Seeed Studio XIAO RP2040, por serem muito pequenos, não vêm equipados com sensor de acelerômetro, enquanto o mais recente Seeed Studio XIAO nRF52840 Sense vem com acelerômetro integrado. 

Se você usar o Seeed Studio XIAO SAMD21 original e o Seeed Studio XIAO RP2040, pode conectar o módulo [Grove LIS3DH accelerometer](https://wiki.seeedstudio.com/pt-br/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR/) à [placa de expansão Seeed Studio XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) e começar a coletar os dados. Colete 3 amostras de dados para cada postura, 60 segundos cada, com o dispositivo preso à camiseta nas suas costas.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-31.png" /></div>


Para cada amostra, mantenha a mesma postura, mas inclua alguns movimentos de braços, cabeça e tronco para simular atividade normal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-32.png" /></div>

Escolha uma janela de tempo de 5 segundos com deslocamento de janela de 1 segundo e o bloco de processamento Flatten, já que estamos lidando com dados que mudam muito lentamente. Uma rede totalmente conectada bem simples forneceu boa precisão. Na seção de Referência, no final do artigo, você pode encontrar o link para a versão pública do projeto Edge Impulse.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-33.png" /></div>

Algumas melhorias podem ser feitas coletando mais dados e garantindo que posturas corretas e incorretas possam ser reconhecidas com algumas variações no posicionamento do dispositivo nas roupas. Como o dispositivo é pensado para uso individual, ele não precisa generalizar para posturas de pessoas diferentes e pode ser facilmente re‑treinado. Você pode verificar quão bem ele detecta suas posturas após o treinamento na aba Live classification.

## Implantação do modelo

Depois que estiver satisfeito com a precisão, baixe o modelo resultante como biblioteca Arduino e copie‑o para a pasta Arduino sketches/libraries. Você pode encontrar código de exemplo na seção de Referência, no final do artigo. O código de exemplo coleta uma amostra de 5 segundos, realiza a inferência e liga o buzzer se uma das posturas incorretas for detectada.

```cpp
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
#endif

  if (result.classification[1].value > ALARM_THRESHOLD || result.classification[2].value > ALARM_THRESHOLD)
  {     
  tone(BUZZER_PIN, 523, 250);
  delay(250);
  noTone(BUZZER_PIN);
  delay(250);  
  tone(BUZZER_PIN, 523, 250);
  delay(250);  
  noTone(BUZZER_PIN);    
  }

}
```

Como se trata de dados que mudam relativamente devagar e não precisamos de tempos de resposta rápidos, o pipeline de inferência sequencial normal se adapta bem a esta aplicação.

Um passo acima seria usar o mais novo Seeed Studio XIAO nRF52840 e conectar o dispositivo ao smartphone do usuário, o que permitiria melhores alertas, estatísticas e assim por diante.

Boas experiências de tinkering e lembre‑se de manter uma boa postura!

## Referência

- [Projeto público no Edge Impulse](https://studio.edgeimpulse.com/public/20025/latest)

- [Github do projeto](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/SeeeduinoXIAO_TinyML_7_Posture_Detection)