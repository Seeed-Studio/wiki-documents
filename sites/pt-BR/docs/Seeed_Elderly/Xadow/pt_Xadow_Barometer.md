---
description: Xadow - Barômetro
title: Xadow - Barômetro
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Barometer
sku: 103040001
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Barometer/
---


![](https://files.seeedstudio.com/wiki/Xadow_Barometer/img/Baro_Meter_01.jpg)

O módulo pode medir a pressão do ar e a temperatura do ambiente atual e, em seguida, você pode converter esse sinal em informações de altitude. Se você planeja usar o Xadow para fazer um dispositivo vestível e medir a altitude quando subir a montanha, então este módulo será a sua escolha perfeita.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Barometer-p-1522.html)

## Especificação
---
- Tensão de Trabalho: 1,8 ~ 3,3 V
- Faixa de Pressão: 300 ~ 1100 hPa(+9000 m ~ 4500 m acima do nível do mar)
- Baixo consumo de energia
- Modo de Controle: I2C (endereço 0x77)
- Temperatura de Operação：-40 ~ +85 °C
- Dimensões: 25,43 mm x 20,35 mm


## Demonstração
---
A demonstração mostrará como obter a pressão do ar e a temperatura do ambiente atual.

**Instalação de Hardware**

![](https://files.seeedstudio.com/wiki/Xadow_Barometer/img/XadowBarometerUsage.jpg)

:::note
    Ao conectar o Xadow Barometer à Xadow Main Board, você deve se atentar à direção da conexão. O método de conexão é que o canto chanfrado de um módulo Xadow precisa ser conectado ao ângulo reto de outro módulo (observe os quatro cantos de cada módulo Xadow).
:::
## Baixar Biblioteca
----
- O Xadow Barometer compartilha a biblioteca com o Grove - Barometer Sensor. Você pode baixar diretamente a [biblioteca](https://github.com/Seeed-Studio/Grove_Barometer_Sensor) do Github.
- Agora você pode abrir o código e fazer o upload para a Xadow Main Board. Se você não instalou o Xadow Driver, pode conhecer as etapas de operação consultando o [getting started](https://wiki.seeedstudio.com/pt-br/Xadow_Main_Board/) na página principal do wiki.

```
/*
* Get pressure, altitude, and temperature from the BMP085.
* Serial.print it out at 9600 baud to serial monitor.
*/
#include "Barometer.h"
#include <Wire.h>
float temperature;
float pressure;
float atm;
float altitude;
Barometer myBarometer;
void setup(){
  Serial.begin(9600);
  myBarometer.init();
}

void loop()
{
   temperature = myBarometer.bmp085GetTemperature(myBarometer.bmp085ReadUT()); //Get the temperature, bmp085ReadUT MUST be called first
   pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP());//Get the temperature
   altitude = myBarometer.calcAltitude(pressure); //Uncompensated calculation - in Meters
   atm = pressure / 101325;

  Serial.print("Temperature: ");
  Serial.print(temperature, 2); //display 2 decimal places
  Serial.println("deg C");

  Serial.print("Pressure: ");
  Serial.print(pressure, 0); //whole number only.
  Serial.println(" Pa");

  Serial.print("Ralated Atmosphere: ");
  Serial.println(atm, 4); //display 4 decimal places

  Serial.print("Altitude: ");
  Serial.print(altitude, 2); //display 2 decimal places
  Serial.println(" m");

  Serial.println();

  delay(1000); //wait a second and get values again.
}
```

- Abra o monitor serial para receber os dados do sensor, incluindo temperatura, valor de pressão barométrica, pressão atmosférica relativa e altitude.

![](https://files.seeedstudio.com/wiki/Xadow_Barometer/img/Xadow_Baremeter_Result.jpg)

- Aqui está um gráfico de referência traçando a relação entre altitude acima do nível do mar e pressão barométrica.

![](https://files.seeedstudio.com/wiki/Xadow_Barometer/img/Pressure_and_Altitude.jpg)


## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Barometer/res/Xadow_Barometer.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---
- [Arquivo Eagle do Xadow Barometer](https://files.seeedstudio.com/wiki/Xadow_Barometer/res/Xadow_Barometer.zip)
- [Biblioteca Xadow Barometer](https://files.seeedstudio.com/wiki/Xadow_Barometer/res/Xadow_Barometer_Library.zip)
- [BST-BMP085-DS000-06](https://files.seeedstudio.com/wiki/Xadow_Barometer/res/BST-BMP085-DS000-06.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
