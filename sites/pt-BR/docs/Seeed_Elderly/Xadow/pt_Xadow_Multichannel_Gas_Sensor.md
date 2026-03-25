---
description: Xadow - Sensor de Gás Multicanal
title: Xadow - Sensor de Gás Multicanal
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Multichannel_Gas_Sensor
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Multichannel_Gas_Sensor/
---
![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Xadow_-_Multichannel_Gas_Sensor_photo.jpg)

Xadow – Sensor de Gás Multicanal é uma placa de sensor muito pequena com um sensor MOS compacto, MiCS-6814. O MiCS-6814 é um sensor MEMS robusto para a detecção de poluição por escapamentos de automóveis e odores agrícolas/industriais. Esta placa de sensor possui duas interfaces Xadow padrão. É muito fácil de usar com a [Xadow - Main Board.](https://wiki.seeedstudio.com/pt-br/Xadow_Main_Board)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Multichannel-Gas-Sensor-p-2459.html)

## Características
---
- Três elementos de detecção totalmente independentes em um único encapsulamento
- Desenvolvido com ATmega168PA
- Interface I2C com endereço programável
- Potência de aquecimento pode ser desligada para baixo consumo
- Contorno Xadow padrão

## Diagrama em Blocos

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Xadow_-_Multichannel_Gas_Sensor_block_diagram.jpg)

## Características Elétricas
---
|Item |Condition	|Min.	|Typ.	|Max.	|Unit|
|---|---|---|---|---|---|
|Voltage|	-	|3.1	|3.3|	3.5|	V|
|Ripple	|@Max Power|	-	|80	|100|	mV|
|Heating Power|	-	|-	|-	|88|	mW|
|Max Power|	-|	-|	-|	150|	mW|
|ADC Precision|	-|	-|	10|	-	|Bits|
|ADC Voltage	|-	|0|	-	|3.3	|V|
|I2C Rate|	-|	-	|100	|400	|kHz|
|VIL|	@I2C|	-0.5	|-|	0.99	|V|
|VIH|	@I2C|	2.31|	-|	3.8	|V|

**Desempenho do sensor RED**

|Characteristic RED sensor	|Symbol	|Typ|	Min	|Max	|Unit|
|---|---|---|---|---|
|Sensing resistance in air	|R0|	-	|100	|1500|	kΩ|
|Typical CO detection range	|FS|	-	|1|	1000|	ppm|
|Sensitivity factor	|SR|	-|	1.2|	50|	-|

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Red_sensor.jpg)

**Desempenho do sensor OX**
|Characteristic OX sensor	|Symbol|	Typ	|Min	|Max	|Unit|
|---|---|---|---|---|---|
|Sensing resistance in air	|R0	|-	|0.8|	20|	kΩ|
|Typical NO2 detection range|	FS|	-	|0.05|	10|	ppm|
|Sensitivity factor	|SR	|-|	2	|-	|-|

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/OX_sensor.jpg)

**Desempenho do sensor NH3**
|Characteristic NH3 sensor|	Symbol	|Typ|	Min|	Max|	Unit|
|---|---|---|---|---|---|
|Sensing resistance in air	|R0|	-	|10	|1500|	kΩ|
|Typical NH3 detection range|	FS	|-	|1	|300|	ppm|
|Sensitivity factor|	SR|-	|1.5|	15|	-|

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/NH3_sensor.jpg)

## Definição dos Pinos
---
![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Xadow_Pins.jpg)

## Demonstração

Você pode começar com a [Xadow - Main Board](https://wiki.seeedstudio.com/pt-br/Xadow_Main_Board)

**Instalação de Hardware: **

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Xadow_-_Mutichannel_Gas_Sensor_connect_to_Xadow.JPG)

1) Conecte o Xadow - Sensor de Gás Multicanal à [Xadow - Main Board](https://wiki.seeedstudio.com/pt-br/Xadow_Main_Board). Não se esqueça de instalar o driver Xadow.
Driver. Observação: ao conectar o Xadow - Sensor de Gás Multicanal à [Xadow - Main Board](https://wiki.seeedstudio.com/pt-br/Xadow_Main_Board), você deve se atentar à direção da conexão. O método de conexão é que o canto sem preenchimento de um módulo Xadow precisa ser conectado ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo Xadow).

Carregar Código:

2) Baixe a [Arduino Library & Grove/Xadow firmware](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor) e instale-a na Biblioteca do Arduino.

3) Abra o código diretamente pelo caminho: File -> Example ->Mutichannel_Gas_Sensor->ReadSensorValue_Xadow.

O conteúdo de ReadSensorValue_Xadow.ino consulte abaixo.

```
/*
    This is a demo to test MutichannelGasSensor library
    This code is running on Xadow-mainboard, and the I2C slave is Xadow-MutichannelGasSensor
    There is a ATmega168PA on Xadow-MutichannelGasSensor, it get sensors output and feed back to master.
    the data is raw ADC value, algorithm should be realized on master.

    please feel free to write email to me if there is any question

    Jacky Zhang, Embedded Software Engineer
    qi.zhang@seeed.cc
    17,mar,2015
*/

#include "xadow.h"
#include <Wire.h>
#include "MutichannelGasSensor.h"

void setup()
{
    Xadow.init();

    Serial.begin(9600);  // start serial for output
    Serial.println("power on!");

    mutichannelGasSensor.begin(0x04);//the default I2C address of the slave is 0x04
    //mutichannelGasSensor.changeI2cAddr(0x10);
    //mutichannelGasSensor.doCalibrate();
    //delay(8000);
    while(mutichannelGasSensor.readR0() < 0)
    {
        Serial.println("sensors init error!!");
        delay(1000);
    }
    Serial.print("Res0[0]: ");
    Serial.println(mutichannelGasSensor.res0[0]);
    Serial.print("Res0[1]: ");
    Serial.println(mutichannelGasSensor.res0[1]);
    Serial.print("Res0[2]: ");
    Serial.println(mutichannelGasSensor.res0[2]);
    mutichannelGasSensor.powerOn();
}

void loop()
{
    mutichannelGasSensor.readR();
    Serial.print("Res[0]: ");
    Serial.println(mutichannelGasSensor.res[0]);
    Serial.print("Res[1]: ");
    Serial.println(mutichannelGasSensor.res[1]);
    Serial.print("Res[2]: ");
    Serial.println(mutichannelGasSensor.res[2]);

    mutichannelGasSensor.calcGas();
    Serial.print("NH3: ");
    Serial.print(mutichannelGasSensor.density_nh3);
    Serial.println("ppm");
    Serial.print("CO: ");
    Serial.print(mutichannelGasSensor.density_co);
    Serial.println("ppm");
    Serial.print("NO2: ");
    Serial.print(mutichannelGasSensor.density_no2);
    Serial.println("ppm");

    Xadow.greenLed(LEDON);
    delay(500);
    Xadow.greenLed(LEDOFF);
    delay(500);
    Serial.println("...");
}
```

4) Faça o upload do código. Lembre-se de selecionar Seeeduino Xadow no menu Tools | Board do ambiente
Arduino e selecione a porta serial correta que a [Xadow - Main Board](https://wiki.seeedstudio.com/pt-br/Xadow_Main_Board) está usando. Ou você pode selecionar Arduino Leonardo em seu lugar.

Ao abrir o monitor serial, você pode ver os dados brutos lidos do sensor.

![](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/img/Mutichannel_Gas_Sensor_XadowPrint.jpg)


## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/res/Xadow_-_Multichannel_Gas_Sensor_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Xadow - Multichannel Gas Sensor v1.0 sch](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/res/Xadow_-_Multichannel_Gas_Sensor_v1.0_sch.pdf)
- [Xadow - Multichannel Gas Sensor eagle files](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/res/Xadow_-_Multichannel_Gas_Sensor_eagle_files.zip)
- [MiCS-6814 Datasheet](https://files.seeedstudio.com/wiki/Xadow_Multichannel_Gas_Sensor/res/MiCS-6814_Datasheet.pdf)
- [Arduino Library & Grove/Xadow firmware](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
