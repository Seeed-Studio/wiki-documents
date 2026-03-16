---
description: Contagem de pessoas com sensor ultrassônico
title: Contagem de pessoas com sensor ultrassônico
keywords:
  - Wio_terminal
  - Embedded_ML
  - Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-TinyML-EI-4
last_update:
  date: 1/30/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-TinyML-EI-4/
---

# Wio Terminal Edge Impulse Contagem de pessoas com sensor ultrassônico

Neste projeto, criaremos um sistema de contagem de pessoas usando o Wio Terminal, um sensor ultrassônico comum e um toque especial de Deep Learning para que tudo funcione de fato.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/image_zM8pM16fk9.jpeg"/></div>

Também utilizaremos o serviço Microsoft Azure IoT Central para armazenar os dados de ocupação da sala na nuvem e visualizá‑los no PC.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/iotedge.png"/></div>

Para mais detalhes e tutorial em vídeo, assista ao vídeo correspondente!

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/pt1maDNXznI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Entendendo os dados

Primeiro, vamos entender os dados que podemos obter do sensor ultrassônico e como podemos utilizá‑los para determinar a direção dos objetos.

Grove - Ultrasonic ranger é um módulo de medição de distância sem contato que trabalha a 40 kHz. Quando fornecemos um sinal de disparo em pulso com mais de 10uS através do pino de sinal, o Grove_Ultrasonic_Ranger emite 8 ciclos de nível de 40 kHz e detecta o eco. A largura de pulso do sinal de eco é proporcional à distância medida. Aqui está a fórmula: Distância = tempo em nível alto do sinal de eco * velocidade do som (340M/S)/2.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Ultrasonic_Working_Principle.png"/></div>

:::caution
Não conecte ou desconecte o Grove-Ultrasonic-Ranger com o sistema energizado, caso contrário o sensor será danificado. A área medida deve ter pelo menos 0,5 metros quadrados e ser lisa.
:::

Depois de instalar a biblioteca Grove - Ultrasonic Ranger para Arduino IDE e conectar o Ultrasonic Ranger à porta D1/D2 do Wio Terminal, podemos enviar este script simples para o Wio Terminal conectado ao Grove Ultrasonic Ranger e então entrar e sair da sala.

```cpp
#include "Ultrasonic.h"
#define INTERVAL_MS 50
Ultrasonic ultrasonic(0);
void setup() {
    Serial.begin(115200);
    }
void loop() {
    static unsigned long last_interval_ms = 0;
    float distance;
    if (millis() > last_interval_ms + INTERVAL_MS) {
        last_interval_ms = millis();
        distance = ultrasonic.MeasureInCentimeters();
        if (distance < 200.0) {
        Serial.println(distance);
        }
        else
        Serial.println(-1);
        //Serial.print('\t');
    }
}
```

Podemos ver imediatamente que, ao entrar andando, obtemos primeiro valores relativamente altos (correspondentes à distância até o objeto), que depois diminuem. E, ao sair, obtemos um sinal completamente oposto.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/full (Time 0_02_01;29).png"/></div>

Teoricamente, poderíamos escrever nosso próprio algoritmo manualmente que consiga determinar a direção. Infelizmente, as situações da vida real são complicadas – temos pessoas que andam rápido (curva mais curta) e devagar (curva mais longa), temos pessoas mais magras e pessoas que são... não tão magras e assim por diante. Portanto, nosso algoritmo feito à mão precisa levar tudo isso em consideração, o que inevitavelmente o tornará complicado e confuso. Temos uma tarefa envolvendo processamento de sinal de inferência e muitos dados ruidosos com variações significativas… E a solução é — Deep Learning.

## Aquisição de dados de treinamento

Prenda o Wio Terminal e o sensor ultrassônico com parafusos em uma estrutura de madeira ou impressa em 3D, como no exemplo abaixo:

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/device.png"/></div>

Para fixar a estrutura na parede, foram usadas fitas de velcro 3M.

<img width="{200}" align="left" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/3m.png" />

Opções adicionais incluem usar fita de espuma, parafusos ou pregos.

Vamos criar um novo projeto no painel do Edge Impulse e nos preparar para obter os dados. Para coletar os dados, como não precisamos de uma frequência de amostragem muito alta, podemos usar a ferramenta data forwarder do edge-impulse-cli. Envie o script ei_people_counter_data_collection.ino (exatamente o mesmo script colado acima) para o Wio Terminal – as etapas a seguir assumem que você já instalou o Edge Impulse CLI conforme descrito em Getting started with Edge Impulse
.
Neste script em particular, filtramos todos os valores acima de 200 cm, configurando‑os para -1.

```cpp
if (distance < 200.0) {
 Serial.println(distance);
}
else {
    Serial.println(-1);
}
```

Para a sua aplicação, talvez seja necessário definir esse valor mais baixo ou mais alto, dependendo da configuração. Em seguida, comece a andar.
<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/walkinout.gif"/></div>

Para este projeto, gravamos 1 minuto e 30 segundos de dados para cada classe, cada vez registrando amostras de 5000 ms e depois recortando‑as para obter amostras de 1500 ms – lembre‑se de que a variedade é muito importante no conjunto de dados, portanto, certifique‑se de ter amostras em que você (ou outras pessoas) andem rápido, devagar, corram etc.

<div>
<img width="{180}" align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/in.png" />

<img width ={570} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/out.png"/>

<img width="{175}" align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/none.png" />
</div>

Para a categoria none, além de amostras em que não há ninguém na frente do dispositivo, é uma boa ideia incluir amostras em que uma pessoa esteja apenas parada perto do dispositivo e andando ao lado dele, para evitar que qualquer movimento seja falsamente classificado como in ou out.

<br />

## Construindo um modelo de aprendizado de máquina

Quando terminar a coleta de dados, crie o seu impulso – defina o comprimento da janela para 1500 ms e o aumento do tamanho da janela para 500 ms.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Capture.PNG"/></div>

1500 ms é mais do que suficiente para cobrir a duração de tempo que uma pessoa leva ao entrar pela porta ou sair, exceto se estiver se movendo extremamente devagar. Para os blocos de processamento, desta vez temos apenas dois blocos para experimentar – Raw data ou Spectral analysis. O bloco Flatten apagará todas as informações no domínio do tempo dos dados, tornando‑os completamente inúteis para determinar a direção, então não o usaremos.
O bloco Spectral analysis aplica Transformada Rápida de Fourier às amostras de dados, convertendo o sinal do domínio do tempo para o domínio da frequência. Embora a FFT possa funcionar para outros tipos de sinais, como sons ou dados de acelerômetro, no nosso caso a frequência do sinal também não importa tanto, já que não conseguimos julgar se a pessoa está entrando ou saindo da sala com base na frequência. Se você olhar a visualização dos dados após o bloco Spectral analysis, fica claro que é difícil separar as amostras de dados in e out.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Capture1.PNG"/></div>

Mudar o bloco de processamento para Spectrogram não resolve realmente o problema e a precisão resultante ainda permanece bastante baixa – a mais alta que conseguimos foi 79,6 %, com muita confusão entre as classes in e out. E o vencedor, mais uma vez, é Raw data (com scaling) + rede convolucional 1D. Os melhores resultados foram obtidos ajustando um pouco a arquitetura da rede para alcançar 92% de precisão; para isso, você precisará mudar para o modo “expert” e alterar o stride do MaxPool1D para 1 e o pool size para 4.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Capture2.PNG"/></div>

Quão boa é uma precisão de 92% e o que pode ser feito para melhorá‑la?
92% é bastante bom como prova de conceito ou protótipo, mas péssimo como modelo de produção. Para produção, isso pode variar – se a sua aplicação é crítica e de alguma forma usada em controle automatizado e tomada de decisão, você realmente não quer ter nada abaixo de 98 – 99 por cento e mesmo isso pode ser baixo; pense em algo como um sistema de reconhecimento facial para pagamento ou autenticação. Existem maneiras de melhorar a precisão deste sistema?
• O sensor ultrassônico é um sensor barato e onipresente, mas é relativamente lento e não muito preciso.

<img width="{200}" align="left" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Grove-TF-Mini-LiDAR.JPG" />

 Podemos obter dados melhores usando o módulo Grove TF Mini LiDAR.

• Obtenha mais dados e, possivelmente, posicione o sensor mais baixo, na altura normal da cintura de uma pessoa, para garantir que ele consiga detectar pessoas com altura abaixo do normal e crianças.
• Dois são melhores do que um – ter dois sensores fazendo medições em pontos ligeiramente diferentes não adicionará muitos dados (temos apenas 31 pontos de dados em cada amostra), mas pode aumentar a precisão. Para explorar ideias mais interessantes, um sensor de luz embutido pode ser usado se o Wio Terminal estiver posicionado adequadamente.

## Implantando no Wio Terminal

Depois que o modelo estiver treinado, podemos realizar classificação em tempo real com dados do dispositivo – aqui descobrimos que o aumento do tamanho da janela de 500 ms na verdade não funciona tão bem e produz mais falsos positivos, então, na próxima etapa, ao implantar no dispositivo, é melhor aumentar o valor para 750 ms. Para implantar o modelo no Wio Terminal, vá até a aba deployment, escolha Arduino library, faça o download, extraia o arquivo e coloque‑o dentro da pasta de bibliotecas do Arduino.

Desta vez utilizaremos o exemplo de inferência contínua para garantir que não estamos perdendo nenhum dado importante.
Se você se lembra, no primeiro projeto, para a inferência, coletávamos todos os pontos de dados na amostra, executávamos a inferência e então voltávamos à amostragem – isso significa que, ao alimentar os dados para a rede neural, fazíamos uma pausa na coleta de dados e perdíamos parte deles.

<img width="{200}" align="right" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/10df57c-RunImpulse.png" />

Isso não é ideal e podemos usar DMA (Acesso Direto à Memória), threading ou multiprocessamento para corrigir esse problema.
<div align="center">
<img width ={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/DMA.gif"/></div>

O MCU do Wio Terminal (núcleo Cortex M4F) possui apenas um núcleo, então multiprocessamento não é uma opção – portanto, neste caso usaremos FreeRTOS e threads. O que vai acontecer é que, durante o processo de inferência, o FreeRTOS irá pausar a inferência por um breve momento, coletar a amostra de dados e então voltar à inferência.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/TaskExecution.png"/></div>

Dessa forma, a inferência em si levará um pouco mais de tempo, mas a diferença é insignificante para este caso de uso específico. Realizamos a inferência a cada 500 ms, então, para cada fatia de 500 ms da janela de tempo, será feita a inferência 3 vezes. Em seguida, pegamos o resultado que tem a maior confiança entre as 3 inferências – por exemplo, temos confiança mais alta para o rótulo “out” 2 vezes e para o rótulo “none” uma vez, portanto o resultado deve ser classificado como “out”. Para simplificar o teste, adicionaremos as linhas que ligam a tela do Wio Terminal quando a pessoa entra na sala e a desligam quando a pessoa sai.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/test1.gif"/></div>

Abra o sketch Examples -> nome do seu projeto - > nano_ble33_sense_accelerometer_continuous e substitua tudo (incluindo a declaração da função run_inference_background) acima da função setup pelo seguinte bloco de código:

```cpp
/* Includes ---------------------------------------------------------------- */
#include <people_counter_raw_inference.h>
#include <Seeed_Arduino_FreeRTOS.h>
#include "Ultrasonic.h"
#include "TFT_eSPI.h"

#define ERROR_LED_LIGHTUP_STATE HIGH

/* Private variables ------------------------------------------------------- */
static bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal
static uint32_t run_inference_every_ms = 500;

static float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = {0};
static float inference_buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE];
float distance;
uint8_t axis_num = 1;

TaskHandle_t Handle_aTask;
TaskHandle_t Handle_bTask;
Ultrasonic ultrasonic(0);
TFT_eSPI tft;
```

Na função setup, inicialize a tela LCD

```cpp
    tft.begin();
    tft.setRotation(3);
```

e exclua todas as linhas que estão relacionadas ao acelerômetro. Depois, no lugar de ```inference_thread.start(mbed::callback(&run_inference_background));``` cole o seguinte bloco de código - o motivo pelo qual precisamos substituir esta linha é porque a inicialização de Thread é feita de maneira diferente no Arduino BLE33 Sense e no Wio Terminal.

```cpp
    vSetErrorLed(LED_BUILTIN, ERROR_LED_LIGHTUP_STATE);

    // Create the threads that will be managed by the rtos
    // Sets the stack size and priority of each task
    // Also initializes a handler pointer to each task, which are important to communicate with and retrieve info from tasks

    xTaskCreate(run_inference_background,"Inference", 512, NULL, tskIDLE_PRIORITY + 1, &Handle_aTask);
    xTaskCreate(read_data, "Data collection", 256, NULL, tskIDLE_PRIORITY + 2, &Handle_bTask);

    // Start the RTOS, this function will never return and will schedule the tasks.

    vTaskStartScheduler();
```

A função run_inference_continuous é em grande parte inalterada, as únicas duas coisas que precisam ser modificadas aqui são
• ```void run_inference_background()``` para ```static void run_inference_background(void*pvParameters)```
• ```ei_classifier_smooth_init(&smooth, 10 /* no. of readings */, 7 /* min. readings the same */, 0.8 /* min. confidence */, 0.3 /* max anomaly */);``` para
    ```ei_classifier_smooth_init(&smooth, 3 /* no. of readings */, 2 /* min. readings the same */, 0.6 /* min. confidence */, 0.3 /* max anomaly */);```
The line above controls averaging (or smoothing) parameters, that we apply to output of the model. You can experiment with the values to see what values allow for best performance in terms of true positives/false positives rate.
While in the original code, data collection happens in loop function, for Wio Terminal FreeRTOS port, it is better to implement data collection in a thread and leave the loop function empty. Delete the loop function in original code and replace it with the following code block

```cpp
/**
* @brief      Get data and run inferencing
*
* @param[in]  debug  Get debug info if true
*/
static void read_data(void* pvParameters)
{
    while (1) {
        // Determine the next tick (and then sleep later)
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);

        // roll the buffer -axis_num points so we can overwrite the last one
        numpy::roll(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, -axis_num);

        distance = ultrasonic.MeasureInCentimeters();
        if (distance > 200.0) { distance = -1;}

        buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE - 1] = distance;

        // and wait for next tick
        uint64_t time_to_wait = next_tick - micros();
        delay((int)floor((float)time_to_wait / 1000.0f));
        delayMicroseconds(time_to_wait % 1000);
    }
}

void loop()
{
  //nothing, all the work is done in two threads
}
```

Here we wait until it is time to get the data, then take distance measurement with ultrasonic sensor and copy it to inference buffer. Remember that since it is a thread, having delay here doesn't affect the whole system and just temporarily "stops" the thread - until it is time to take next reading. FreeRTOS can perform tasks in other threads while data collection thread is inactive.

## Azure IoT Central Integration

Okay, the model works, but again all in by itself it is not suitable for actually applying it in  the real world. Let’s add two elements to  make it into a full-fledged  application – a simple GUI and data upload to cloud with pretty graphs. We will use [LVGL library](https://wiki.seeedstudio.com/Wio-Terminal-LVGL/) for creating graphical user interface and Microsoft Azure IoT Central service for sending data to and visualization. The resulting sketch is 693 lines long and has 3 concurrent threads running in RTOS. Here is a quick  recap of steps you need to make it work with IoT central.
Find the project in Github repository for this project, under name WioTerminal_Azure_Central.ino and open it in Arduino IDE. After the sketch is uploaded, enter configuration mode by pressing three buttons on top of Wio Terminal and resetting the device.

“In   configuration mode” will be displayed on device screen. Connect to  device with Serial monitor (baud rate 115200, carriage return) and set  WiFi SSID, password and Azure IoT Central credentials (in the following   format ```set_az_iotc your_ID_scope your_primary_key your_device_ID```), which you can get by following these steps:
• Go to [https://apps.azureiotcentral.com/](https://apps.azureiotcentral.com/)
• If you don’t have a Microsoft account yet, register one.
• Go to Build -> Custom app. Enter the app name and unique URL (can be similar to app name). Choose Free plan.
• After an app is created, go to Device Templates. Make a new template of IoT device type. Choose custom model, add three capabilities as in the  below  screenshot and two interfaces (press on Views -> Visualizing  the  device). After finishing that and making sure everything is  correct,  publish the template.
• Create a new device from  template by  going to Devices and pressing on New, remember to choose  the Template  you just created and published!
• Get the ID scope  from  Administration -> Device connection, Primary key from  Administration  -> Device connection -> SAS-IoT-Devices and device  ID from Devices  tab, where you created your device on Step 5.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/azure1.jpeg"/></div>

After configuration is successful, restart Wio Terminal and it will start connecting to Azure IoT Central, you can watch the detailed progress feedback on the Serial Terminal. You will then be able to see   a) Device status on dashboard has changed to Provisioned b) Telemetry data from Accelerometer sensor in Device -> Raw data.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/azure2.jpeg"/></div>

We then add the parts responsible for Edge Impulse model inference,  threading and modify send telemetry function to send values for number of people entered, people left and total number of people in the room.  We also add simple GUI consisting of three buttons and a text field,  which displays  information updates – you can see the resulting sketch by opening WioTerminal_EI_People_Counting_Azure_Central_LVGL.ino from the project Github repository.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/test2.gif"/></div>

The hardest part was really making sure everything works normally in each separate thread and does not  influence other threads. Sacrifices were made in order to accommodate that without over-complicating the  code too much, for example placing LVGL task update function right after interface updates and not letting it run periodically.

## Reference

- [Edge Impulse Public project](https://studio.edgeimpulse.com/public/18808/latest)

- [Project Github](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_3_People_Counting)
