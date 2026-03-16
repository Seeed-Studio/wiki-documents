---
description: Módulo Grove Vision AI
title: Módulo Grove Vision AI
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1100-Vision-AI-Module-Grove-LoRa-E5
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/K1100-Vision-AI-Module-Grove-LoRa-E5/
---
# Módulo Grove Vision AI

Nesta seção, detalharemos como os sensores funcionam, como obter dados do sensor usando o Wio Terminal e como enviar esses dados usando o Wio Terminal e o Grove - Wio-E5.

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O gabinete IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o poderoso suporte do aplicativo tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x em seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center">
        <font color="white" size={4}>
          <strong>Sensor Industrial SenseCAP</strong>
        </font>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Registrador de Dados</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temperatura &amp; Umidade do Ar</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temperatura &amp; Umidade do Ar &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Umidade &amp; Temperatura do Solo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Umidade &amp; Temperatura do Solo &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estação Meteorológica 8 em 1</strong></a></td>
    </tr>
  </tbody></table>

## Princípio de Funcionamento dos Sensores

A câmera ao vivo de um dispositivo pode ser usada para detectar objetos em um ambiente usando aprendizado de máquina.

O fluxo ao vivo de uma câmera pode ser usado para identificar objetos no mundo físico. Usando o modo "streaming" da API de Detecção e Rastreamento de Objetos do ML Kit, um fluxo de câmera pode detectar objetos e usá-los como entrada para realizar uma busca visual (uma consulta de pesquisa que usa uma imagem como entrada) com o próprio modelo de classificação de imagens do nosso aplicativo (ainda em desenvolvimento).

Pesquisar com uma câmera ao vivo pode ajudar os usuários a aprender mais sobre os objetos ao seu redor, seja um cachorro ou um gato.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/197.jpeg" /></div>

Para mais informações sobre o uso do Módulo Vision AI, consulte a referência [aqui](https://wiki.seeedstudio.com/pt-br/Grove-Vision-AI-Module/).

Se você quiser treinar alguns modelos que possa usar, consulte o conteúdo [aqui](https://wiki.seeedstudio.com/pt-br/Train-Deploy-AI-Model/).

## Materiais Necessários

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
      <td align="center"><div align="center"><img width={170} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
      <td align="center">Módulo Grove Vision AI</td>
    </tr>
  </tbody></table>

## Preparação Preliminar

### Conexão

Nesta rotina, precisamos nos conectar a um gateway LoRa® próximo com a ajuda do Grove - Wio-E5. Precisamos configurar a porta Grove no lado direito do Wio Terminal como uma porta serial por software para receber comandos AT. O Módulo Vision AI (no lado esquerdo) de acordo com o diagrama abaixo.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/aivision.jpg" /></div>

### Preparação de Software

**Passo 1.** Você precisa instalar o software Arduino.

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**Passo 2.** Inicie o aplicativo Arduino.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Passo 3.** Adicione o Wio Terminal à IDE do Arduino.

Abra sua IDE Arduino, clique em `File > Preferences` e copie a URL abaixo em Additional Boards Manager URLs:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

Clique em `Tools > Board > Board Manager` e pesquise **Wio Terminal** no Boards Manager.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**Passo 4.** Selecione sua placa e porta

Você precisará selecionar a entrada no menu `Tools > Board` que corresponda ao seu Arduino. Selecione o **Wio Terminal**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

Selecione o dispositivo serial da placa Wio Terminal no menu `Tools -> Port`. Provavelmente será COM3 ou superior (COM1 e COM2 geralmente são reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa Wio Terminal e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Reconecte a placa e selecione essa porta serial.

:::tip
Para usuários de Mac, será algo como `/dev/cu.usbmodem141401`.

Se você não conseguir fazer o upload do sketch, na maioria das vezes é porque a Arduino IDE não conseguiu colocar o Wio Terminal no modo bootloader. (Porque o MCU foi interrompido ou o seu programa está manipulando o USB) A solução é colocar o seu Wio Terminal em modo bootloader manualmente.
:::
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**Passo 5.** Baixar a biblioteca Grove - Wio-E5

Visite o repositório [Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5) e baixe todo o repositório para o seu disco local.

<div>
  <p style={{}}><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank" /></p><div align="center"><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Passo 6.** Adicionar bibliotecas à Arduino IDE

Agora, a biblioteca do Acelerômetro Digital de 3 Eixos pode ser instalada na Arduino IDE. Abra a Arduino IDE e clique em `sketch -> Include Library -> Add .ZIP Library`, e escolha o arquivo `Disk91_LoRaE5` que você acabou de baixar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

## Obter o valor do Grove Vision AI Module

**Passo 1.** Baixar a biblioteca de código do Grove Vision AI Module

Visite o repositório [Seeed-Grove-Vision-AI-Moudle](https://github.com/limengdu/Seeed-Grove-Vision-AI-Moudle) e baixe todo o repositório para o seu disco local.

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Grove-Vision-AI-Moudle" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Grove-Vision-AI-Moudle" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Passo 2.** Adicionar bibliotecas à Arduino IDE

Agora, a biblioteca do Vision AI Module pode ser instalada na Arduino IDE. Abra a Arduino IDE e clique em `sketch -> Include Library -> Add .ZIP Library`, e escolha o arquivo `Seeed-Grove-Vision-AI-Moudle` que você acabou de baixar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

**Passo 3.** Obter dados do Grove Vision AI Module

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-AI-Module-value" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-AI-Module-value" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

Este repositório é capaz de obter o número de modelos identificados pelo feed da câmera e o nível de confiança. Eles são dados inteiros sem sinal com não mais do que 8 bits.

```cpp
#include "Seeed_Arduino_GroveAI.h"
#include <Wire.h>

GroveAI ai(Wire);
uint8_t state = 0;
void setup()
{
  Wire.begin();
  Serial.begin(115200);

  Serial.println("begin");
  if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_1)) // Object detection and pre-trained model 1
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

Abra o monitor serial da Arduino IDE, selecione a taxa de transmissão como 115200 e observe o resultado.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/198.png" /></div>

## Enviar dados via Grove - Wio-E5

Combinamos o código anterior do Grove - Wio-E5 para se conectar à rede LoRa®. Usando o comando AT é possível enviar o valor do Grove Vision AI Module para a rede LoRa®.

No código da seção anterior, sabemos a saída – o número de objetos detectados e o nível de confiança são ambos inteiros positivos e nenhum deles é maior que 8 bits.

Desta forma, determinamos o conteúdo, o tamanho e o formato dos dados a serem enviados via comando AT. Podemos muito bem configurar um array grande o suficiente, armazenar as strings que precisamos enviar no array e, por fim, usar a função **send_sync()** para enviar o array.

O pseudocódigo para a ideia acima é aproximadamente o seguinte.

```c
  ......
  static uint8_t data_val[4] = { 0x00 };  //Use the data[] to store the values of the sensors

  if (state == 1)
  {
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
        Serial.print("Number of people: "); Serial.println(len);
        object_detection_t data;       //get data

        for (int i = 0; i < len; i++)
        {
          Serial.println("result:detected");
          Serial.print("Detecting and calculating: ");
          Serial.println(i+1);
          ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); //get result

          Serial.print("confidence:"); Serial.println(data.confidence);

          data_decord(len, data.confidence, data_val);

          if ( lorae5.send_sync(              //Sending the sensor values out
                8,                            // LoRaWan Port
                data_val,                     // data array
                sizeof(data_val),             // size of the data
                false,                        // we are not expecting a ack
                7,                            // Spread Factor
                14                            // Tx Power in dBm
               ) 
          )
          ......
```

O restante do que precisamos fazer é usar a função `begin()` para inicializar o Grove - Wio-E5 e a função `setup()` para configurar as informações do triplete do Grove - Wio-E5. Quando enviarmos uma mensagem de dados usando a função `send_sync()`, tentaremos ingressar na LoRaWAN® ao mesmo tempo e, assim que tiver sucesso, os dados serão enviados e informações como intensidade de sinal e endereço serão retornadas.

O exemplo de código completo pode ser encontrado [aqui](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/AI-Module-send-data).

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/AI-Module-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/AI-Module-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

:::tip
Não recomendamos que você faça o upload do código agora para ver os resultados, porque neste momento você ainda não configurou o Helium/TTN e obterá um resultado de "Join failed". Recomendamos que você faça o upload deste código depois de ter concluído o capítulo [Connecting to Helium](https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium/) ou [Connecting to TTN](https://wiki.seeedstudio.com/pt-br/Connecting-to-TTN/) para completar todo o processo de envio de dados.
:::
Depois que você tiver experimentado e entendido como o Grove Vision AI Module funciona e o formato dos dados, continue com o próximo passo do tutorial para ingressar na LoRaWAN®.

<table align="center">
  <tbody><tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>Seção Helium</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Introdução ao Helium</strong><br /><br />Neste capítulo, apresentaremos os controles do console Helium que usamos para obter uma primeira impressão do console Helium.<br /><br /><a href="https://wiki.seeedstudio.com/pt-br/Helium-Introduction">Ir para o capítulo &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/helium.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Conectando ao Helium</strong><br /><br />Esta seção descreve como configurar o Helium para que os dados do sensor possam ser carregados e exibidos com sucesso no Helium.<br /><br /><a href="https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium">Ir para o capítulo &gt;</a></td>
    </tr>
    <tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>Seção TTN</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/TTN.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Introdução ao TTN</strong><br /><br />Neste capítulo, apresentaremos os controles do console TTN que utilizamos para obter uma primeira impressão do console TTN.
        <br /><br /><a href="https://wiki.seeedstudio.com/pt-br/TTN-Introduction">Ir para o capítulo &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/ttncon.jpg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Conectando ao TTN</strong><br /><br />Esta seção descreve como configurar o TTN para que os dados do sensor possam ser carregados e exibidos com sucesso no TTN.
        <br /><br /><a href="https://wiki.seeedstudio.com/pt-br/Connecting-to-TTN">Ir para o capítulo &gt;</a></td>
    </tr>
  </tbody></table>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Declaração

- A marca LoRa® é uma marca registrada da Semtech Corporation ou de suas subsidiárias.
- LoRaWAN® é uma marca usada sob licença da LoRa Alliance®.
