---
description: Xadow - Acelerômetro de 3 Eixos
title: Xadow - Acelerômetro de 3 Eixos
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_3_Aixs_Accelerometer
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Xadow_3_Aixs_Accelerometer/
---

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/Xadow_Accelerometer_01.jpg)

Este é um acelerômetro digital de alta resolução com ampla faixa de medição de ±16g através da interface I2C, adequado para monitorar o estado de movimento. Com este módulo, você pode facilmente adicionar a função de monitoramento de movimentos ao seu projeto, como balanço de braços e pernas. Se você quiser trocar as músicas do seu iPhone balançando o braço, então este módulo é exatamente para você.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-3-Axis-Accelerometer-p-1521.html)

## Especificação
---
- Dimensões: 25.43mm x 20.35mm
- Tensão de funcionamento: 3.3V
- Resolução: 3.9mg/LSB
- Faixa de teste: ±16g
- Modo de controle: I2C

## Demonstração
---
Como outros módulos Xadow, você precisa conectar o Xadow 3-Axis Accelerometer à Xadow Main Board antes de enviar o código de teste para a Xadow Main Board para obter as informações do acelerômetro.

A instalação de hardware:

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/Xadow3AxisAcce.jpg)

:::note
    Ao conectar o Xadow 3-Axis Accelerometer à Xadow Main Board, você deve se atentar à direção da conexão. O método de conexão é que o canto chanfrado de um módulo Xadow precisa ser conectado ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo Xadow).
:::
O código de teste é mostrado abaixo:

```
#include <Wire.h>

#define ADXL345_DEVICE 0x00
#define ADXL345_POWER_CTL 0x2D
#define ADXL345_DATAX0 0x32
#define ADXL345_DATAX1 0x33
#define ADXL345_DATAY0 0x34
#define ADXL345_DATAY1 0x35
#define ADXL345_DATAZ0 0x36
#define ADXL345_DATAZ1 0x37

#define ADXL345_ADDRESS  0x53
int X_Read,Y_Read,Z_Read;
double ax,ay,az;

 void setup()
{
  Wire.begin();
  Serial.begin(19200);
  delay(100);
  //Turning on the ADXL345
  Wire.beginTransmission(ADXL345_DEVICE); // start transmission to device
  Wire.write(ADXL345_POWER_CTL);
  Wire.write(8);                          //measuring enable
  Wire.endTransmission();                 // end transmission

 }

void loop()
{

X_Read = readRegister(ADXL345_ADDRESS,ADXL345_DATAX0,ADXL345_DATAX1);
Y_Read = readRegister(ADXL345_ADDRESS,ADXL345_DATAY0,ADXL345_DATAY1);
Z_Read = readRegister(ADXL345_ADDRESS,ADXL345_DATAZ0,ADXL345_DATAZ1);


 /*Serial.print("The X,Y,Z Value are:");
 Serial.print(X_Read);
 Serial.print(" , ");
 Serial.print(Y_Read);
 Serial.print(" , ");
 Serial.println(Z_Read); */

  getAcceleration();
  Serial.print("X=");
  Serial.print(ax);
  Serial.println(" g");
  Serial.print("Y=");
  Serial.print(ay);
  Serial.println(" g");
  Serial.print("Z=");
  Serial.print(az);
  Serial.println(" g");
  Serial.println("**********************");
 delay(500);
}

int readRegister(int deviceAddress,int address1,int address2)
{
    long int value;
    int readValue1,readValue2;
    Wire.beginTransmission(deviceAddress);
     Wire.write(address1); // register to read
     Wire.write(address2); // register to read
     Wire.endTransmission();
     Wire.requestFrom(deviceAddress,2); // read two byte
     if(Wire.available()<=2)
     {
       readValue1 = Wire.read();
       readValue2 = Wire.read();
     }
     //Wire.endTransmission();
     readValue2 = readValue2<<8;
     value= readValue1 + readValue2;
     delay(100);
     return value;
}

void getAcceleration()
{
  double gains;
  //Boring accelerometer stuff
  gains = 0.00390625;
  ax=X_Read * gains;
  ay=Y_Read * gains;
  az=Z_Read * gains;

}
```

Após enviar o código, abra o monitor serial para observar o resultado do teste. As saídas deste sensor são as informações de aceleração em 3 eixos, que são convertidas na unidade de gravidade, "g".

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/Xadow_3-Axis_Accelemeter_Result.jpg)

## Referência
---
Abaixo estão duas figuras que podem ajudar você a entender o significado físico dos resultados.
A primeira figura mostra a direção de cada eixo:

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/ADXL345_Axes_of_Acceleration_Sensivity.jpg)

A segunda figura fornece alguns exemplos:

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/Sensing_Diraction_2.jpg)


## Visualizador Online de Esquemático
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/res/3-Axis_Accelerometer_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---
- [Arquivo Eagle do acelerômetro Xadow de 3 eixos](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/res/3-Axis_Accelerometer_Eagle_File.zip)
- [Folha de dados do ADXL345](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/res/ADXL345_datasheet.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
