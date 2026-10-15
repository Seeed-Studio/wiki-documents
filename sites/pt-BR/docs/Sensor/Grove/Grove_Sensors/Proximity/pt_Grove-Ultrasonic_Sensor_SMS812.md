---
description: Introdução ao Grove Ultrasonic Sensor (SMS812)
title: Grove Ultrasonic Sensor (SMS812)
keywords:
  - ultrasonic
  - sms812
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_ultrasonic_sensor_sms812
sku: 101021097
last_update:
  date: 08/16/2023
  author: ZouXiong.Xiao
createdAt: '2023-08-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/grove_ultrasonic_sensor_sms812/
---

# Grove Ultrasonic Sensor (SMS812)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/1.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/pt-br/grove_ultrasonic_sensor_sms812" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O Grove Ultrasonic Sensor (SMS812) é um sensor de medição de distância em miniatura e ultrabaixo consumo de energia. O Grove Ultrasonic Sensor (SMS812) é baseado no princípio de tempo de voo (ToF) ultrassônico e é projetado com acústica, eletrônica e algoritmos relacionados. A medição de distância de alta precisão é alcançada através da diferença de energia dos sinais de eco ultrassônico na superfície de diferentes materiais, e ele fornece informações de distância em nível de milímetro e o valor de intensidade de energia de eco, e também pode fornecer bits de sinalização para distinguir materiais macios e duros. Além disso, pode ser usado em robôs de limpeza para identificar materiais do piso e medir distâncias dentro de um determinado alcance. Ele possui tamanho reduzido e é fácil de instalar.

### Aplicações

- O robô de limpeza reconhece os materiais macios e duros no chão
- Robô de serviço doméstico ou aspirador robô para obter informações sobre o piso
- Detecção de nível de impressora 3D

### Características

- Precisão de medição em nível de milímetro, ótima estabilidade de medição
- Reconhece materiais macios e duros e fornece informações de E/S
- Distância de detecção de até 20–50 mm e área cega pequena
- Suporte a Arduino

### Visão geral de hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/2.png" style={{width:600, height:'auto'}}/></div>

1. A estrutura deste sensor é cilíndrica e feita por moldagem por injeção de plástico.
2. As dimensões na figura acima estão em milímetros.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/3.png" style={{width:600, height:'auto'}}/></div>

Esta interface é um conector tipo plugue PH1.0-4P. E a definição dos pinos é a seguinte:

<div class="table-center">
    <table align="center">
        <tbody>
            <tr>
                <td align="center">Pin</td>
                <td align="center">Type</td>
                <td align="center">Description</td>
                <td align="center">Defaults</td>
                <td align="center">Data stream</td>
            </tr>
            <tr>
                <td align="center">GND</td>
                <td align="center">Power supply</td>
                <td align="center">Negativo</td>
                <td align="center">0V</td>
                <td align="center"/>
            </tr>
            <tr>
                <td align="center">Tx</td>
                <td align="center">Saída</td>
                <td align="center">Saída da porta serial do sistema</td>
                <td align="center"/>
                <td align="center">Radar para periféricos</td>
            </tr>
            <tr>
                <td align="center">Rx</td>
                <td align="center">Entrada</td>
                <td align="center">Entrada da porta serial do sistema</td>
                <td align="center"/>
                <td align="center">Periféricos para radar</td>
            </tr>
            <tr>
                <td align="center">VCC</td>
                <td align="center">Power supply</td>
                <td align="center">Positivo</td>
                <td align="center">3.3V</td>
                <td align="center"/>
            </tr>
        </tbody></table>
</div>

## Primeiros Passos

### Preparação de hardware

Esta rotina apresentará o uso deste radar ultrassônico usando o XIAO SAMD21 como controle principal. Para facilitar a fiação, também usaremos a placa de expansão Grove. Você pode escolher uma de acordo com suas necessidades reais.

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO SAMD21</th>
   <th>Grove Base para XIAO</th>
            <th>Grove Ultrasonic Sensor (SMS812)</th>
  </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/4.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/pt-br/grove_ultrasonic_sensor_sms812" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Em seguida, conecte o radar ultrassônico à interface UART do XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/5.jpg" style={{width:700, height:'auto'}}/></div>

## Visão geral da biblioteca Arduino

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) ou veja o simples tutorial abaixo:
:::

O botão abaixo levará você diretamente à nossa biblioteca de programas Arduino para o Grove Ultrasonic Sensor (SMS812).

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio_SMS812_Sensor/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Função

Antes de começarmos a desenvolver um sketch, vamos analisar as funções disponíveis da biblioteca.

- `void setIOMode()` —— Esta função é usada para configurar o radar no modo IO, que é usado principalmente para detectar o material-alvo.

- `void setUARTMode()` —— Esta função é usada para configurar o radar no modo UART; no modo UART o radar irá reportar ativamente informações de distância e material.

- `void setUARTREQMode()` —— Esta função é usada para configurar o radar no modo UART REQ, no qual as informações de distância e material só podem ser consultadas enviando um comando de consulta.

- `void checkUARTREQ(int delaytime = 0, bool showSwitch = true)` —— Esta função é usada no modo UART REQ para consultar o material detectado e a distância.

    **Parâmetros de entrada**

  - `delaytime`: O valor padrão é 0. Este parâmetro controla o tempo em milissegundos para o envio do comando de consulta.
  - `showSwitch`: O padrão é ligado. Este parâmetro controla se o quadro de dados original é impresso.

- `bool getFrame(bool showSwitch = true)` —— Esta função é usada para obter o quadro de dados original.

    **Parâmetros de entrada**

  - `showSwitch`: O padrão é ligado. Este parâmetro controla se o quadro de dados original é impresso.

- `bool parseDatagram(bool showSwitch = false)` —— Esta função é usada para analisar o quadro de dados original.

    **Parâmetros de entrada**

  - `showSwitch`: O padrão é desligado. Este parâmetro controla se o quadro de dados original é impresso.

### Instalação

Como você já baixou a biblioteca em formato zip, abra o seu Arduino IDE, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo zip que você acabou de baixar e, se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de notificações. Isso significa que a biblioteca foi instalada com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## Exemplo com XIAO

**Passo 1.** Você precisa instalar o software Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**Passo 2.** Inicie o aplicativo Arduino.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Passo 3.** Selecione o modelo da sua placa de desenvolvimento e adicione-o ao Arduino IDE.

- Se você quiser usar **Seeeduino V4.2** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/)** para concluir a adição.

- Se você quiser usar **XIAO SAMD21(Seeeduino XIAO)** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#software)** para concluir a adição.

- Se você quiser usar **XIAO RP2040** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#software-setup)** para concluir a adição.

- Se você quiser usar **XIAO nRF52840** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#software-setup)** para concluir a adição.

- Se você quiser usar **XIAO ESP32C3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started/#software-setup)** para concluir a adição.

- Se você quiser usar **XIAO ESP32S3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started#software-preparation)** para concluir a adição.

:::caution
Para **XIAO nRF52840**, selecione **Seeed nRF52 mbed-enabled Boards**, caso contrário, um erro pode ser reportado ao executar programas.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png" style={{width:600, height:'auto'}}/></div>

:::

**Passo 4.** Instale a biblioteca de código Arduino.

### Demo 1: Uso do Modo IO

Este exemplo irá guiá-lo pelo processo de impressão dos bits de sinalização para distinguir materiais macios e duros. Aqui está o código de referência para Arduino:

```c
#include "sms812.h"

const int radarPin = A7;

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A6
//#define TX_Pin A7

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//SMS812_Sensor radar = SMS812_Sensor(&mySerial);

// can also try hardware serial with
SMS812_Sensor radar = SMS812_Sensor(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  Serial1.begin(115200);
  //  mySerial.begin(115200);

  pinMode(radarPin, INPUT);

  while(!Serial);   //When the serial port is opened, the program starts to execute.
  Serial.println("Ready");

  radar.setIOMode();
}

void loop() {
  // put your main code here, to run repeatedly:
  int value = analogRead(radarPin); // Read level status of D7 pin
  Serial.println(value);
  delay(500);
}

```

Depois de ativar o modo IO, você deve saber que, se o sensor US5 reconhecer o material macio, seu pino TX enviará os bits de sinalização `0x01` para a placa, caso contrário, o material duro é `0x00`, então você deve definir o `radarPin` como **A0** (que conecta ao pino TX do sensor) ou o pino que suporta entradas analógicas.

O valor alto acima de 1000 significa reconhecimento de material duro, e o valor abaixo de 20 significa reconhecimento de material macio ou ar.

Então, quando você mover o sensor em frente, verá a saída serial como abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/6.png" style={{width:700, height:'auto'}}/></div>

### Demo 2: Uso do Modo UART

Para o modo UART, o radar gera medições a uma taxa de 100 Hz. O formato do telegrama de dados é mostrado na tabela abaixo.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Quadro de cabeçalho</th>
   <th>Quadro de comando</th>
            <th>Quadro de comprimento de dados</th>
            <th>Quadro de dados</th>
            <th>Quadro de checksum</th>
  </tr>
  <tr>
   <td align="center">0xAA 0xAA</td>
   <td align="center">0xFD</td>
            <td align="center">0x04</td>
            <td align="center">--</td>
            <td align="center">CS</td>
  </tr>
 </table>
</div>

Os bits de dados ocupam 4 Byte. O primeiro 1 Byte é o bit de sinalização de material, 0 significa material duro e 1 significa material macio. Para materiais macios, será impossível medir a distância. Em seguida, há o valor de distância, que ocupa 2 Byte em milímetros. O último 1 Byte é o valor de intensidade, indicando a força do sinal ultrassônico recebido.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Bit de sinalização de material</th>
   <th>Valor de distância</th>
            <th>Intensidade</th>
  </tr>
  <tr>
   <td align="center">1 Byte</td>
   <td align="center">2 Byte</td>
            <td align="center">1 Byte</td>
  </tr>
 </table>
</div>

Neste exemplo, usaremos as funções da biblioteca para analisar os quadros de dados recebidos e imprimir todos os dados de características reportados pelo Sensor ativo via porta serial.

A **porta serial de hardware** na placa XIAO SAMD21 é o pino de interface UART **A6** e **A7**. Você também pode usar quaisquer dois pinos como serial por software.

```c
#include "sms812.h"

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//SMS812_Sensor radar = SMS812_Sensor(&mySerial);

// can also try hardware serial with
SMS812_Sensor radar = SMS812_Sensor(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  Serial1.begin(115200);
  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.
  Serial.println("Ready");

  radar.setUARTMode();
}

void loop() {
  // put your main code here, to run repeatedly:

  // Prints only the acquired raw data frames
//   radar.getFrame();
//   delay(1);                //Add time delay to avoid program jam

  // Parses the contents of the data frame. If the function parseDatagram is given a true argument, the raw data frame display is enabled.
  if(radar.parseDatagram(true)){
    if(radar.material == 0x00){
      Serial.println("No blankets detected.");
      Serial.print("The measured distance is: ");
      Serial.print(radar.distance);
      Serial.println(" mm");
      Serial.print("The ultrasonic signal strength is: ");
      Serial.println(radar.strength);
    }
  }
  delay(1);                //Add time delay to avoid program jam
}
```

Depois de fazer o upload do código para a placa, mova o sensor em frente ao **material duro** (material macio não irá gerar os dados analisados), você poderá ver os dados analisados abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/7.png" style={{width:1000, height:'auto'}}/></div>

### Demo 3: Uso do Modo UART REQ

Neste exemplo, definimos o parâmetro delaytime para 1000, o que significa que fazemos uma pesquisa de 1 segundo para enviar uma consulta de comando. E o sensor retornará o resultado de medição pela mensagem bruta, cujo comprimento é de 9 bytes.

```c
#include "sms812.h"

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//SMS812_Sensor radar = SMS812_Sensor(&mySerial);

// can also try hardware serial with
SMS812_Sensor radar = SMS812_Sensor(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);
  pinMode(A7, INPUT);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");

  radar.setUARTREQMode();
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.checkUARTREQ(1000, true);      // Check radar information every second. And turn on raw data frame display.

  // Parses the contents of the data frame. If the function parseDatagram is given a true argument, the raw data frame display is enabled.
  if(radar.material == 0x00){
    Serial.println("No blankets detected.");
    Serial.print("The measured distance is: ");
    Serial.print(radar.distance);
    Serial.println(" mm");
    Serial.print("The ultrasonic signal strength is: ");
    Serial.println(radar.strength);
  }
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/7.png" style={{width:1000, height:'auto'}}/></div>

## Recursos

- **[PDF]** [Manual de Desenvolvimento Alpha V0.2.0](https://files.seeedstudio.com/wiki/ultrasonic-sms812/sms812_Development_Manual_Alpha_V0.2.0.pdf)
- **[PDF]** [DataSheet Alpha V0.1.3](https://files.seeedstudio.com/wiki/ultrasonic-sms812/sms812_DataSheet_Alpha_V0.1.3.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
