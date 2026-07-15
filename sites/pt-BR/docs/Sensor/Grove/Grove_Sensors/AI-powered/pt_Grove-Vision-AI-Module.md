---
description: Grove - Módulo Vision AI
title: Módulo Grove Vision AI
keywords:
  - grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Vision-AI-Module
sku: 114992866
last_update:
  date: 3/22/2023
  author: Citric
createdAt: '2023-02-28'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-Vision-AI-Module/
---

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
</div>

:::warning **[Board Version Updated]** 
Como parte do nosso compromisso com a melhoria contínua, evoluímos nossa linha de produtos e o suporte para esta versão foi encerrado. Recomendamos que você conheça e adquira o **Grove Vison AI V2** para uma experiência aprimorada. Se você estiver usando a V1 e tiver qualquer dificuldade, não hesite em entrar em contato com nossa equipe de suporte pós-venda. Estamos comprometidos em oferecer a você a melhor assistência possível.
:::


## Introdução

O sensor Grove Vision AI Module representa uma câmera de IA do tamanho de um polegar, um sensor personalizado que já possui um algoritmo de ML instalado para detecção de pessoas e outros modelos personalizados. Fácil de implantar e exibir em poucos minutos, ele funciona em modo de consumo de energia ultrabaixo e fornece duas formas de transmissão de sinal e vários módulos onboard, o que o torna perfeito para começar a usar uma câmera com tecnologia de IA.

Neste wiki, mostraremos como utilizar o sensor Grove Vision AI Module conectando a série seeed studio XIAO e Arduino para detectar pessoas, panda e então exibi-las na página da web.

### Especificação

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style> -->
<table class="tg">
<thead>
  <tr>
    <th class="tg-c3ow">Parâmetros</th>
    <th class="tg-c3ow">Descrição</th>
    <th class="tg-c3ow">Observação</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-c3ow" rowspan="3">Conector</td>
    <td class="tg-0pky">Grove (base Grove para Arduino)</td>
    <td class="tg-0pky">Carga de 5V e transmissão de dados</td>
  </tr>
  <tr>
    <td class="tg-0pky"><span>Soquete de 7 pinos de dupla fileira (seeed duino XIAO)</span></td>
    <td class="tg-0pky">Carga de 5V e transmissão de dados</td>
  </tr>
  <tr>
    <td class="tg-0pky"><span>USB Type-C</span></td>
    <td class="tg-0pky">Carga de 5V e gravação de firmware</td>
  </tr>
  <tr>
    <td class="tg-0pky">Modo de Comunicação</td>
    <td class="tg-0pky">IIC</td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky">Processador</td>
    <td class="tg-0pky">Himax HX6537-A </td>
    <td class="tg-0pky"><span>DSP de 400Mhz (consumo de energia ultrabaixo)</span></td>
  </tr>
  <tr>
    <td class="tg-0pky">Sensor da Câmera</td>
    <td class="tg-0pky">Chip OV2640</td>
    <td class="tg-0pky">Resolução 1600*1200</td>
  </tr>
  <tr>
    <td class="tg-0pky">Microfone</td>
    <td class="tg-0pky">Chip MSM261D3526H1CPM</td>
    <td class="tg-0pky">Sensibilidade -26dBFs</td>
  </tr>
  <tr>
    <td class="tg-0pky">Sensor Acelerômetro</td>
    <td class="tg-0pky">Sensor STLSM6DS3TR-C</td>
    <td class="tg-0pky">Acelerômetro 3D e giroscópio 3D</td>
  </tr>
</tbody>
</table>

### Características

- Câmera de IA fácil de usar: aplica algoritmo de Machine Learning em borda no sensor de câmera, perfeita para detecção de objetos
- Plug and Play: permite realizar todas as funções e exibição em poucos minutos, sem esforço
- Consumo de energia ultrabaixo: ativa quando detecta objetos em movimento para economia de energia
- Sensor de câmera compacto com tecnologia de IA: o dispositivo em si é do tamanho de um polegar, baseado em visão e adequado para Edge Intelligence
- Design de sensor personalizado: suporta modelos de ML personalizados definidos pelos usuários
- Dois tipos de transmissão de sinal suportados: consulte a conexão elegante seeed studio XIAO e a conexão simples da base Grove para Arduino
- Sensor de câmera onboard: integra chip OV2640 com resolução de 1600*1200
- Microfone onboard: integra chip MSM261D3526H1CPM com sensibilidade de -26dBFs
- Sensor acelerômetro onboard: integra sensor STLSM6DS3TR-C para acelerômetro 3D e giroscópio 3D
- Flash SPI onboard de 32 MB ultrabaixo consumo de energia
- Um fio para toda a saída de dados: representa a conexão simplificada da família Grove, exigindo apenas um cabo Grove entre o sensor e a placa única

## Visão Geral de Hardware

Presumimos que você queira conhecer alguns parâmetros básicos do produto. As tabelas a seguir apresentam informações sobre as características e o pinout do sensor Grove Vision AI Module.

| Característica                        | Valor     | Unidade   |
| :-------:                              | :-------: | :-------: |
| Tensão de operação                     |   5    |     V       |
| Taxa   |    115200     |          |
| Interface I2C                          | seeed studio XIAO & Arduino   | -         |
| Fonte de alimentação | conector duplo de 7 pinos & Type-C    | -         |
| Interface de download e gravação de firmware | Type-C    | -         |
| Dimensões                              |   40*20*13        | mm        |

### Visão Geral do Pinout

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/pinout1.png" style={{width:800, height:'auto'}}/></div>

- 2 —— BL702
- 3 —— MIC MSM261D3526H1CPM
- 4 —— LSM6DS3TR-C de 6 eixos
- 5 —— SPI Flash
- 9 —— USB type C
- 10 —— Soquete fêmea duplo de 7 pinos
- 11 —— **Botão de Reset**
- 12 —— **Botão BOOT**
- 13 —— **Botão USER**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/pinout2.png" style={{width:800, height:'auto'}}/></div>

- 1 —— HX6537-A
- 6 —— Conector da Câmera
- 7 —— Chip DC-DC
- 8 —— Conector Grove
- 14 —— Luz de alimentação
- 15 —— Luz indicadora de gravação

## Primeiros Passos

Mostraremos a você a função básica do módulo e depois apresentaremos a forma personalizada para que você possa construir seu próprio modelo de ML. Mas antes de aplicarmos totalmente o módulo aos nossos projetos, serão necessários vários passos para deixar o módulo pronto.

### Preparação

**Hardware**

- Grove Vision AI Module Sensor
- PC host **Windows** (Win10 testado)
- Cabo Type-C

### Visão Geral da Biblioteca Arduino

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Primeiros Passos com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

O código que usamos aqui fornece vários métodos de classificação e modelos selecionáveis, incluindo modelos personalizados. O padrão que selecionamos aqui é o método de detecção de objetos e o modelo pré-treinado.

*A Seeed Studio desenvolverá mais métodos e modelos no futuro previsível, fique ligado conosco.*

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as Bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### Função

Antes de começarmos a desenvolver um sketch, vamos analisar as funções disponíveis da biblioteca.

1. `if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_1))` - Aqui podemos selecionar nossos métodos de classificação e os modelos.

  Você pode alterar `ALGO_OBJECT_DETECTION` para `ALGO_OBJECT_COUNT` ou `ALGO_IMAGE_CLASSIFICATION`.

  Ao mesmo tempo, se você também gravar seu modelo personalizado (firmware) no módulo, poderá alterar `MODEL_EXT_INDEX_1` para `MODEL_EXT_INDEX_2` ou 3, 4, conforme o nome que você definir.

2. `object_detection_t data` - Este é o conjunto de dados struct onde o resultado é gerado.

  Se você alterar o método de classificação, precisará alterar `object_detection_t` correspondendo para `image_classification_t` ou `object_count_t`.

3. `uint8_t len = ai.get_result_len()` - O "len" aqui significa quantos rostos humanos ele detecta.

4. `object_detection_t data` - Os dados aqui representam um formato de **struct** e o tipo é "object_detection_t", que é predefinido.

  Ao mesmo tempo, se você escolher outros métodos de classificação, precisará alterá-lo para `image_classification_t data` ou `object_count_t data`.

5. `Serial.print(data.confidence)` - O formato **struct** não pode ser usado diretamente para impressão; ele deve apontar para o tipo específico que é definido no arquivo de cabeçalho.

```cpp
typedef struct
{
    uint16_t x;
    uint16_t y;
    uint16_t w;
    uint16_t h;
    uint8_t confidence;
    uint8_t target;
} object_detection_t;
```

:::tip
A "confidence" que queremos imprimir aqui mostra quanta "confiança" a câmera tem para detectar o objeto.
:::

### Instalação da Biblioteca

Como já baixamos a biblioteca em formato zip, abra sua IDE Arduino, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo zip que você acabou de baixar e, se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de aviso. Isso significa que a biblioteca foi instalada com sucesso.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:600, height:'auto'}}/></div>

### Atualização da Biblioteca

Em um futuro previsível, otimizaremos e atualizaremos a biblioteca do produto para funções mais interessantes. De acordo com os métodos de instalação de biblioteca fornecidos acima, apresentamos aqui a você a forma de atualizar.

Atualizaremos o link quando a biblioteca for otimizada. Você pode **deletar a pasta da biblioteca original** na pasta do seu computador, depois baixar a versão mais recente, descompactá-la e colocá-la no diretório de bibliotecas da Arduino IDE. (**...\Arduino\libraries. ....** é o caminho em que você configurou o Arduino)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Location_lib.png" style={{width:600, height:'auto'}}/></div>

## Exemplo com Seeed Studio XIAO / Seeeduino / Arduino

Agora que temos nossa biblioteca instalada e o firmware gravado, podemos executar alguns exemplos com o sensor do módulo Grove AI no Seeed Studio XIAO nRF52840 e Seeeduino V4.2 para ver como ele se comporta.

**Passo 1.** Inicie o aplicativo Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

**Passo 2.** Selecione o modelo da sua placa de desenvolvimento e adicione-o à Arduino IDE.

- Se você quiser usar **Seeeduino** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/) para finalizar a adição.

- Se você quiser usar **Seeed Studio XIAO SAMD21** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#software) para finalizar a adição.

- Se você quiser usar **Seeed Studio XIAO RP2040** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#software-setup) para finalizar a adição.

- Se você quiser usar **Seeed Studio XIAO nRF52840** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#software-setup) para finalizar a adição.

### Demo 1 Detecção de Humanos com Seeed Studio XIAO nRF52840 / Seeeduino / Arduino

Nesta demonstração, iremos detectar rostos humanos e contar quantas pessoas o módulo detecta tanto em <a href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank"><span>Seeed Studio XIAO nRF52840 Sense</span></a> quanto em Seeeduino V4.2 (Arduino UNO). Enquanto isso, a Seeed Studio fornece um [site](https://vision-ai-demo.seeed.cn/) para exibir o que o módulo vê.

#### Materiais Necessários

- **Para Seeed Studio XIAO BLE Sense**

|    Seeed Studio XIAO nRF52840 Sense          | Grove AI Camera  |
|--------------|--------------|
| <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:220, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" style={{width:210, height:'auto'}}/></div> |
| <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a></div> | <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a></div> |

- **Para Seeeduino V4.2**

| Seeeduino V4.2 | Base Shield | Grove AI Camera|
|--------------|-------------|-----------------|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" style={{width:220, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" style={{width:210, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" style={{width:210, height:'auto'}}/></div> |
| <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a></div> | <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a></div> | <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a></div> |

#### Etapas de Operação

- **Passo 3 (Seeed Studio XIAO).** Prepare um cabo Type-C e conecte-o a uma placa Seeed Studio XIAO Série. Encaixe-a pino a pino no Grove AI Module e use outro cabo Type-C para conectar o módulo.

  Ambos os cabos Type-C devem estar conectados ao PC. No final, a direção do conector Type-C no módulo deve ser a mesma do conector Type-C no Seeed Studio XIAO samd21. Por exemplo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI11.JPG" style={{width:600, height:'auto'}}/></div>

- **Passo 3 (Arduino).** Prepare um cabo Grove e conecte-o a uma placa Arduino. Use outro cabo Type-C para conectar o módulo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI13.png" style={{width:400, height:'auto'}}/></div>

- **Passo 4.** Faça o upload do programa.

```c
#include "Seeed_Arduino_GroveAI.h"
#include <Wire.h>

GroveAI ai(Wire);
uint8_t state = 0;
void setup()
{
  Wire.begin();
  Serial.begin(115200);

   Serial.println("begin");
  if (ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x11)) // Object detection and pre-trained model 1
  {
    Serial.print("Version: ");
    Serial.println(ai.version());
    Serial.print("ID: ");
    Serial.println( ai.id());
    Serial.print("Algo: ");
    Serial.println( ai.algo());
    Serial.print("Model: ");
    Serial.println(ai.model());
    Serial.print("Confidence: ");
    Serial.println(ai.confidence());
    state = 1;
  }
  else
  {
    Serial.println("Algo begin failed.");
  }
}

void loop()
{
  if (state == 1)
  {
    uint32_t tick = millis();
    if (ai.invoke()) // begin invoke
    {
      while (1) // wait for invoking finished
      {
        CMD_STATE_T ret = ai.state();
        if (ret == CMD_STATE_IDLE)
        {
          break;
        }
        delay(20);
      }

     uint8_t len = ai.get_result_len(); // receive how many people detect
     if(len)
     {
       int time1 = millis() - tick;
       Serial.print("Time consuming: ");
       Serial.println(time1);
       Serial.print("Number of people: ");
       Serial.println(len);
       object_detection_t data;       //get data

       for (int i = 0; i < len; i++)
       {
          Serial.println("result:detected");
          Serial.print("Detecting and calculating: ");
          Serial.println(i+1);
          ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); //get result

          Serial.print("confidence:");
          Serial.print(data.confidence);
          Serial.println();
        }
     }
     else
     {
       Serial.println("No identification");
     }
    }
    else
    {
      delay(1000);
      Serial.println("Invoke Failed.");
    }
  }
  else
  {
    state == 0;
  }
}
```

Abra o monitor serial e defina o baud rate como 115200 e o resultado da detecção de pessoas deverá ser mostrado continuamente. Enquanto isso, a imagem capturada pelo módulo também será exibida no [site](https://vision-ai-demo.seeed.cn/). A saída contínua bem-sucedida deverá ser como:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI12.png" style={{width:400, height:'auto'}}/></div>

No [site](https://vision-ai-demo.seeed.cn/) de exibição, você pode ver que dois rostos estão emoldurados com números duplos. O número 0 significa o rosto humano que o módulo detectou, e o outro número significa a confiança.

:::note
Nem todos os navegadores suportam a exibição dos resultados do Vision AI. Consulte a tabela abaixo para o suporte de cada navegador principal.

| Chrome | Edge | Firefox | Opera | Safari |
|--------|------|---------|-------|--------|
| Suporta | Suporta | Não suporta |  Suporta | Não suporta |
:::


## Sobre os Modelos

A Seeed Studio forneceu um modelo pré-treinado de detecção de pessoas e fornecerá mais modelos em um futuro previsível. Você pode usá-los diretamente para conhecer rapidamente a câmera de IA.

Você pode encontrar nosso firmware e modelos para o Grove Vision AI nos seguintes locais.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download do Modelo</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Firmware Padrão: Modelo de Detecção de Pessoas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI20.png" style={{width:800, height:'auto'}}/></div>

### Mais Modelos

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/2.png" style={{width:800, height:'auto'}}/></div>

Estamos continuamente mantendo e atualizando mais modelos úteis, então você pode ficar de olho neste repositório.

:::tip
Normalmente, os arquivos de modelo estão no formato **UF2** e têm um sufixo no formato **pre_num**.
:::

### Modelos Personalizados

Se você quiser personalizar o seu próprio modelo, pode consultar <a href="https://github.com/Seeed-Studio/yolov5-swift" target="_blank"><span>aqui</span></a>, que é baseado em YOLOV5.

Ou consulte [o tutorial aqui](https://wiki.seeedstudio.com/pt-br/Train-Deploy-AI-Model-Grove-Vision-AI/) e treine seu próprio modelo para atender às suas necessidades.


## Substituição de novos modelos

Os modelos de treinamento são todos representados como arquivo ".uf2", que é o que precisamos.

:::tip
Normalmente, os arquivos de modelo estão no formato **UF2** e têm um sufixo no formato **pre_num**.
:::

- **Passo 1**. Conecte o módulo ao PC host com um cabo Type-C e **clique duas vezes** no botão BOOT do módulo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI21.png" style={{width:800, height:'auto'}}/></div>

  Um disco "GROVEAI" irá aparecer.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/19.jpg" style={{width:300, height:'auto'}}/></div>

- **Passo 2**. Copie o arquivo de modelo `.uf2` para o disco GROVEAI para concluir o flash do firmware.

Podemos ver que o LED de Trabalho no módulo pisca rapidamente, o que significa que o processo está em andamento. Depois que o disco desaparecer, o processo de gravação do firmware estará concluído.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI10.png" style={{width:600, height:'auto'}}/></div>

- **Passo 3**. Modifique o programa de acordo com o modelo que você está usando.

No demo que fornecemos, dentro da função `setup()` o modelo é inicializado chamando `ai.begin()`.

```cpp
if (ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x11))
```

`ai.begin()` tem dois argumentos, o tipo de modelo e o número do modelo. A numeração geralmente é diferente para modelos diferentes. Ou seja, o número de modelo do programa de exemplo só se aplica ao **Modelo de Detecção de Pessoas**; se você usar outros modelos, então o número não será mais `0x11`.

:::caution
Se você encontrar a mensagem de erro "Algo begin failed." ao usar o demo, primeiro verifique se o número do modelo está errado.
:::

Então, como determinar o número do modelo? Nossos engenheiros de P&D forneceram um documento introdutório detalhado para os desenvolvedores lerem.

- [Protocolo](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/Protocol.md)

Mas se você não quiser ler um artigo tão longo, uma maneira simples de determinar isso é ficar de olho no último número do modelo em Release, que é o número de que precisamos.

Por exemplo, para o modelo **pfld_meter_pre_5.uf2**, o último dígito é **5**, o que significa que o número do modelo é **5**. Você pode usar 

```cpp
ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)5)
```

diretamente, ou reescrevê-lo como hexadecimal 

```cpp
ai.begin(ALGO_ OBJECT_DETECTION, (MODEL_INDEX_T)0x05)
```


## Processamento de Exceções

Se você encontrou uma situação imprevista no uso real, ou se o utilizou incorretamente e teve um resultado diferente do tratamento médico. Consulte as etapas a seguir para solucionar problemas e tentar reparar o módulo.

### Parte 1. Verificar Versão do BootLoader

Você pode precisar detectar se a versão do BootLoader precisa ser atualizada para decidir se a atualização deve ser feita. O método para verificar o número da versão é o seguinte.

Conecte o Grove Vision AI ao seu computador pela porta USB-C. Em seguida, clique duas vezes no botão Boot até que o computador apresente uma unidade USB chamada GROVEAI.

Abra essa unidade de disco e abra o arquivo **INFO_UF2.TXT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/3.png" style={{width:1000, height:'auto'}}/></div>

Como mostrado na figura, você pode ver o número da versão do Bootloader na primeira linha. Em setembro de 2023, o número da versão mais recente do BootLoader deve ser **v2.0.1**. Se você também verificar o mesmo número de versão, então, em princípio, não precisa realizar o próximo segundo passo.

### Parte 2. Atualizar BootLoader

Se o seu Grove Vision AI não for reconhecido pelo computador e se comportar como se não tivesse número de porta, então você pode precisar atualizar o BootLoader.

- **Passo 1**. Baixe o arquivo `.bin` do BootLoader no PC com Windows.

Baixe a versão mais recente do arquivo BootLoader no link abaixo. O nome do BootLoader geralmente é `tinyuf2-grove_vision_ai_vx.x.x.bin`.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/tinyuf2-grove_vision_ai_v2.0.1.bin" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download BootLoader</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Este é o firmware que controla o chip BL702 que constrói a conexão entre o computador e o chip Himax. A versão mais recente do BootLoader agora corrigiu o problema do Vision AI não conseguir ser reconhecido por Mac e Linux.

- **Passo 2**. Baixe e abra o software [**BLDevCube.exe**](https://files.seeedstudio.com/wiki/Grove_AI_Module/BouffaloLabDevCube-1.6.6-win32.rar), selecione **BL702/704/706** e clique em **Finish**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI01a.png" style={{width:300, height:'auto'}}/></div>

- **Passo 3**. Clique em **View** e escolha **MCU** primeiro. Vá para **Image file**, clique em **Browse** e selecione o firmware que você acabou de baixar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/1.png" style={{width:800, height:'auto'}}/></div>

- **Passo 4**. Certifique-se de que não haja outros dispositivos conectados ao PC. Em seguida, mantenha pressionado o botão Boot no módulo e conecte-o ao PC.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI05.png" style={{width:600, height:'auto'}}/></div>

  Podemos ver as luzes de 5V e do LED de 3.3V acesas na parte de trás do módulo; então solte o botão Boot.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI06.png" style={{width:600, height:'auto'}}/></div>

- **Passo 5**. Volte para o software BLDevCube no PC, clique em **Refresh** e escolha uma porta adequada. Em seguida, clique em **Open UART** e defina **Chip Erase** para **True**, depois clique em **Create&Program** e aguarde até o término do processo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI07.png" style={{width:800, height:'auto'}}/></div>

- **Passo 6**. Recomenda-se verificar novamente o número da versão do Vision AI para garantir que o BootLoader mais recente está sendo usado.

### Parte 3. Restaurar Firmware de Fábrica

:::tip
Se em algum momento o envio de firmware na versão mais recente do Windows 11 tiver tornado o dispositivo inutilizável, você pode precisar consultar a seção sobre [Update BootLoader](#Parte-2-Atualizar-BootLoader).
:::

- **Passo 1**. Apagar firmware

:::caution
Você pode tentar pular esta etapa e copiar o firmware diretamente para o Vision AI; se funcionar, então você não precisa apagar o firmware original. Se falhar, talvez seja necessário apagar o firmware.
:::

Utilize a placa-mãe Arduino que você tiver; as séries Seeed Studio XIAO, Wio Terminal ou Seeeduino são recomendadas. Conecte o Grove Vision AI à placa-mãe pela interface IIC.

Abra a IDE do Arduino e envie o programa para apagar o firmware.

```c
#include "Seeed_Arduino_GroveAI.h"
#include <Wire.h>
WEI wei(Wire);

void setup()
{
    Wire.begin();
    Serial.begin(115200);
    while (!Serial)
    {
        /* code */
    }
    delay(1000);
    Serial.println("Press any key to start erase");
}

void loop()
{
    if (Serial.available())
    {
        while (Serial.available())
        {
            Serial.read();
        }
        uint32_t id = wei.ID();
        Serial.print("ID: 0x");
        Serial.println(id, HEX);
        wei.enter_bootloader();
        Serial.println("Erase");
        wei.erase();
        Serial.println("Erase done");
    }
}
```

Abra o monitor serial, insira alguns caracteres aleatórios, como "a", clique em enviar; então a operação de apagar começará a ser executada. Se você vir a mensagem a seguir, isso prova que o apagamento do firmware foi bem-sucedido. Podemos ir para o próximo passo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI23.png" style={{width:800, height:'auto'}}/></div>

- **Passo 2**. Conecte o módulo ao PC host com um cabo Type-C e **clique duas vezes** no botão BOOT do módulo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI21.png" style={{width:800, height:'auto'}}/></div>

Haverá um disco "GROVEAI" aparecendo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/19.jpg" style={{width:300, height:'auto'}}/></div>

- **Etapa 3**. Baixe o firmware de fábrica.

Por favor, baixe a versão mais recente do firmware de fábrica no link abaixo. O nome do firmware de fábrica é geralmente `grove_ai_without_crc_vxx.uf2` ou `grove_ai_vxx.uf2`.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::tip
Em setembro de 2023, a versão mais recente do firmware é **grove_ai_v02-00.uf2**.
:::

- **Etapa 4**. Grave o firmware de fábrica.

Copie o arquivo `grove_ai_without_crc_vxx.uf2` ou `grove_ai_vxx.uf2` para o disco GROVEAI para concluir a gravação do firmware.

As três partes acima precisam ser avaliadas e executadas por sua vez; quando as etapas acima forem executadas, você poderá fazer sua operação novamente. Se ainda houver problemas, entre em contato com nossa equipe de suporte técnico.

## Solução de Problemas

### P1: Qual é o principal método de conexão?

- a. Primeiro, conecte o microcontrolador e o módulo.
- b. Em seguida, conecte o microcontrolador ao PC host.
- c. Por fim, conecte o módulo ao PC host.

### P2: Por que não consigo ver a exibição da imagem no site? Nem a detecção?

- a. O módulo está aquecido? Conectar apenas o módulo causará problema de aquecimento e fará com que o módulo não funcione por um momento.
- b. A conexão está sendo feita seguindo o método correto?

### P3: Por que o Grove Vision AI de repente passa a apresentar um erro "Algo begin failed." um dia durante o uso?

No demo que fornecemos, dentro da função `setup()` o modelo é inicializado chamando `ai.begin()`.

```cpp
if (ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x11))
```

`ai.begin()` tem dois argumentos, o tipo de modelo e o número do modelo. A numeração geralmente é diferente para modelos diferentes. Ou seja, o número do modelo do programa de exemplo se aplica apenas ao **Modelo de Detecção de Pessoas**; se você usar outros modelos, então o número não será mais `0x11`.

:::caution
Se você encontrar a mensagem de erro "Algo begin failed." ao usar o demo, você deve primeiro verificar se o número do modelo está errado.
:::

Então, como você determina o número do modelo? Nossos engenheiros de P&D forneceram um documento introdutório detalhado para os desenvolvedores lerem.

- [Protocol](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/Protocol.md)

Mas se você não quiser ler um artigo tão longo, uma maneira simples de determinar isso é ficar de olho no último número do modelo em Release, que é o número de que precisamos.

Por exemplo, para o modelo **pfld_meter_pre_5.uf2**, o último dígito é **5**, o que significa que o número do modelo é **5**. Você pode usar 

```cpp
ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)5)
```

diretamente ou reescrevê-lo como hexadecimal 

```cpp
ai.begin(ALGO_ OBJECT_DETECTION, (MODEL_INDEX_T)0x05)
```

## Recursos
- **[PDF]** [Diagrama de Circuito](https://files.seeedstudio.com/wiki/Grove_AI_Module/Grove_Vision_AI_NORF_v1.1.pdf)
- **[Zip]** [Diagrama de Layout](https://files.seeedstudio.com/wiki/Grove_AI_Module/Grove_Vision_AI_NORF_v1.1.zip)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

