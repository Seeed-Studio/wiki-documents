---
description: Grove - Sensor de Frequência Cardíaca de Presilha de Dedo
title: Grove - Sensor de Frequência Cardíaca de Presilha de Dedo
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Finger-clip_Heart_Rate_Sensor
sku: 103020024
last_update:
  date: 1/6/2023
  author: jianjing Huang
createdAt: '2023-01-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Finger-clip_Heart_Rate_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Grove-Finger-clip_Heart_Rate_Sensor.jpg" /></div>

Grove - Sensor de Frequência Cardíaca de Presilha de Dedo é baseado no PAH8001EI-2G, um sensor óptico de alto desempenho e baixo consumo de energia em processo CMOS, com LED Verde e DSP integrados que atuam como um sensor de Detecção de Frequência Cardíaca (HRD). Este módulo é baseado em tecnologia óptica que mede a variação do movimento do sangue humano no vaso. O baixo consumo de energia e o modo flexível de economia de energia o tornam adequado para dispositivos vestíveis. Como o chip do sensor de frequência cardíaca necessita de alta velocidade de processamento para o algoritmo dos dados de frequência cardíaca(), este módulo integra um STM32; a interface SWD reservada permite que os usuários reprogramem o STM32.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-p-2425.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Especificações

---

* Consumo de energia ultrabaixo, modo de economia de energia durante o período sem movimento de toque

* Controle flexível da taxa de sono

* STM32F103 integrado

* Interface I2C

* Área do sensor de frequência cardíaca de apenas 3,0 x 4,7 mm

* Interface SWD reservada

* Temperatura de trabalho: -20 ~ +60℃

## Função da Interface

---
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finger-clip_Heart_Rate_Sensor_TOP.jpg" /></div>
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finger-clip_Heart_Rate_Sensor_Bottom.jpg" /></div>

* 1: Interface Grove

* 2: Interface SWD reservada para programação do STM32

* 3: Sensor de Frequência Cardíaca

## Uso

---
Aqui, forneceremos um exemplo para mostrar como usar este sensor.

### Instalação de Hardware

Conecte o sensor à porta I2C do Seeeduino com o cabo Grove.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finger-clip_Heart_Rate_Sensor_Connect.jpg" /></div>

### Parte de Software

#### Com Arduino

**Serial de Hardware**

Copie o código a seguir para um novo sketch do Arduino e faça o upload do sketch; então você poderá obter a frequência cardíaca no Serial Monitor.
Pode levar cerca de um minuto para obter uma frequência cardíaca válida depois que você encostar seu dedo no sensor.

```cpp
#include <Wire.h>
void setup() {
    Serial.begin(9600);
    Serial.println("heart rate sensor:");
    Wire.begin();
}
void loop() {
    Wire.requestFrom(0xA0 >> 1, 1);    // request 1 bytes from slave device
    while(Wire.available()) {          // slave may send less than requested
        unsigned char c = Wire.read();   // receive heart rate value (a byte)
        Serial.println(c, DEC);         // print heart rate value
    }
    delay(500);
}
```

**Serial de Software**

A biblioteca I2C padrão para o Arduino é a biblioteca Wire. No entanto, essa biblioteca não funciona quando os pinos I2C SDA/SCL já estão em uso para outros propósitos. Portanto, você pode usar o SoftwareI2C. Você pode conectar o SCL ao D2 e o SDA ao D3. Baixe a [biblioteca SoftI2CMaster](https://github.com/felias-fogg/SoftI2CMaster) e siga o guia [How to install arduino library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/) para configurar a biblioteca. Copie o código a seguir para um novo sketch do Arduino e faça o upload do sketch; então você poderá obter a frequência cardíaca no Serial Monitor.
Pode levar cerca de um minuto para obter uma frequência cardíaca válida depois que você encostar seu dedo no sensor.

```cpp
#define SDA_PORT PORTD
#define SDA_PIN 3
#define SCL_PORT PORTD
#define SCL_PIN 2
#include <SoftI2CMaster.h>
#include <SoftWire.h>
SoftWire Wire = SoftWire();

void setup() {
    Serial.begin(9600);
    Serial.println("heart rate sensor:");
    Wire.begin();
}
void loop() {
    Wire.requestFrom(0xA0 >> 1, 1);    // request 1 bytes from slave device
    while(Wire.available()) {          // slave may send less than requested
        unsigned char c = Wire.read();   // receive heart rate value (a byte)
        Serial.println(c, DEC);         // print heart rate value
    }
    delay(500);
}
```

#### Com Mbed

Leia um byte do dispositivo I2C 0xA0 (endereço de 8 bits); esse é o valor da frequência cardíaca.

```cpp
#include "mbed.h"

I2C i2c(I2C_SDA, I2C_SCL);
const int addr = 0xA0;

int main() {
    char heart_rate;
    while (1) {
        i2c.read(addr, &heart_rate, 1);
        printf("heart rate: = %d\r\n", heart_rate);
    }
}
```

#### Atualizar firmware

Podemos atualizar o firmware do sensor de frequência cardíaca por meio do seu bootloader.

* O bootloader está localizado em 0x08000000 - 0x08002000
* A aplicação está localizada em 0x08002000 - 0x08020000

##### Conexão de Hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Firmware_Connection.jpg" /></div>

* É necessário um [adaptador USB para serial](https://www.seeedstudio.com/CH340G-USB-to-Serial-%28TTL%29-Module%26Adapter-p-2359.html)
* UART (o conector Grove suporta I2C e UART); ao atualizar o firmware, a interface Grove funciona no modo UART.

| Grove-Finger-clip_Heart_Rate_Sensor | Módulo&Adaptador USB para Serial (TTL) |
|-------------------------------------|----------------------------------------|
| VCC                                 | VCC                                    |
| GND                                 | GND                                    |
| SDA                                 | TX                                     |
| SCL                                 | RX                                     |

##### Software

* Baixe o software [Tera Term](https://ttssh2.osdn.jp/index.html.en)
* Defina a taxa de baud da UART como 115200

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/BaudRate_Setting.png" /></div>

* Baixe o [firmware](ttps://github.com/SeeedDocument/Grove-Finger-clip_Heart_Rate_Sensor/raw/master/res/Grove-Finger-clip_Heart_Rate_Sensor_bin.zip)

* Selecione Grove - Finger-clip Heart Rate Sensor.bin

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Select_firmware.png" /></div>

* Faça o download do firmware para o Grove-Finger-clip_Heart_Rate_Sensor

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Firmware_download.png" /></div>

* Firmware baixado com sucesso

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finish_Downloading.png" /></div>

:::note
Grove - Sensor de Frequência Cardíaca de Presilha de Dedo fornece medições de frequência cardíaca. No entanto, ele não é um dispositivo médico. Para usar o sensor de detecção de frequência cardíaca em seu pulso, dedo ou palma da mão, você deve:
:::

* Fixar o sensor firmemente, garantindo um contato bem ajustado com a pele, e permanecer imóvel (sem movimento) durante a medição para obter uma frequência cardíaca
 precisa. Se o sensor não estiver em bom contato com a pele ou houver movimento excessivo durante a medição, a frequência cardíaca não será
 medida corretamente.

* O desempenho do sensor é otimizado com maior fluxo sanguíneo. Em dias frios ou quando o usuário tem má circulação (por exemplo: mãos
 frias, dedos e pés frios), o desempenho do sensor (precisão da frequência cardíaca) pode ser afetado devido ao menor fluxo sanguíneo na
 posição de medição.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Arquivo eagle do Grove - Finger-clip Heart Rate Sensor](https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_v1.0_sch_pcb.zip)

* [Arquivo bin do Grove - Finger-clip Heart Rate Sensor](https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_bin.zip)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

