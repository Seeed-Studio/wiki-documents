---
description: Xadow - Barômetro BMP180
title: Xadow - Barômetro BMP180
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Barometer_BMP180
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Barometer_BMP180/
---
![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/Xadow-bmp180.JPG)

O módulo pode medir a pressão do ar e a temperatura do ambiente atual e, em seguida, você pode converter esse sinal em informação de altitude. O BMP180 é o sucessor compatível em função do BMP085, uma nova geração de sensores de pressão digitais de alta precisão para aplicações de consumo. A eletrônica de potência ultrabaixa e baixa tensão e o desempenho superior do BMP180 são otimizados para uso em dispositivos vestíveis, telefones celulares, PDAs, dispositivos de navegação GPS e equipamentos para uso externo. A interface I2C permite fácil integração ao sistema com um microcontrolador.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Barometer-BMP180-v1.0-p-2412.html)


## Especificação
---
Tensão de trabalho: 3,3 V
Faixa de pressão: 300 ~ 1100 hPa(+9000 m ~ -500 m em relação ao nível do mar)
Baixo consumo de energia
Modo de controle: I2C (endereço 0x77)
Temperatura de operação: -40 ~ +85 °C
Dimensões: 25,43 mm x 20,35 mm


## Demonstração
---
**Com a Placa Principal Xadow**

A demonstração mostrará como obter a pressão do ar e a temperatura do ambiente atual.

![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/IMG_2379.JPG)

!!!Note
    Ao conectar o Xadow - Barômetro BMP180 à Xadow - Placa Principal, você deve se atentar à direção da conexão. O método de conexão é que o canto sem preenchimento de um módulo Xadow precisa ser conectado ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo Xadow).

## Baixar biblioteca
---
- Xadow Barometer BMP180 compartilha a biblioteca com o Grove - Barometer Sensor. Você pode baixar diretamente a [biblioteca](https://github.com/Seeed-Studio/Grove_Barometer_Sensor) do GitHub.
- Agora você pode abrir o código e carregá-lo na Placa Principal Xadow. Se você não instalou o Driver Xadow, pode aprender as etapas de operação consultando o [getting started](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Seeeduino/) na página principal do wiki.

```
/*
* Get pressure, altitude, and temperature from the BMP180.
* Serial.print it out at 9600 baud to serial monitor.
*/
#include "Barometer.h"
#include "Wire.h";
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
  Serial.print(pressure, 0); // whole numbers only.
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

- Abra o monitor serial para receber os dados do sensor, incluindo temperatura, valor da pressão barométrica, pressão atmosférica relativa e altitude.

![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/Barometer_Sensor.jpg)

- A seguir está um gráfico de referência que traça a relação entre a altitude acima do nível do mar e a pressão barométrica.

![](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/Pressure_and_Altitude.jpg)


## Visualizador de esquema online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/res/Xadow_-_Barometer_BMP180_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---
- [Arquivo Eagle do Xadow - Barometer BMP180](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/res/Xadow_-_Barometer_BMP180_v1.0_sch_pcb.zip)
- [Biblioteca Barometer_Sensor](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)
- [Folha de dados do BMP180](https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/res/BMP180.pdf)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
