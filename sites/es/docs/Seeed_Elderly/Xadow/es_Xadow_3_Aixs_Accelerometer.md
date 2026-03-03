---
description: Xadow - Acelerómetro de 3 Ejes
title:  Xadow - Acelerómetro de 3 Ejes
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_3_Aixs_Accelerometer
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/Xadow_Accelerometer_01.jpg)

Este es un acelerómetro digital de alta resolución con un amplio rango de medición de ±16g a través de interfaz I2C, adecuado para monitorear el estado de movimiento. Con este módulo, puedes agregar fácilmente la función de monitoreo de movimientos en tu diseño. Como por ejemplo, el movimiento de brazos y piernas. Si quieres cambiar las canciones de tu iPhone mediante el movimiento del brazo, entonces este módulo es justo para ti.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-3-Axis-Accelerometer-p-1521.html)

## Especificaciones
---
- Dimensiones: 25.43mm x 20.35mm
- Voltaje de funcionamiento：3.3V
- Resolución: 3.9mg/LSB
- Rango de prueba: ±16g
- Modo de control: I2C

## Demostración
---
Como otros módulos Xadow, necesitas conectar el Xadow Acelerómetro de 3 Ejes al Xadow Main Board antes de cargar el código de prueba al Xadow Main Board para obtener la información del acelerómetro.

La instalación del hardware:

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/Xadow3AxisAcce.jpg)

:::note
    Cuando conectes el Xadow Acelerómetro de 3 Ejes al Xadow Main Board, debes prestar atención a la dirección de conexión. El método de conexión es que la esquina no rellena de un módulo Xadow necesita conectarse al ángulo recto de otro módulo (ver las cuatro esquinas de cada módulo Xadow).
:::
El código de prueba se muestra a continuación:

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

Después de cargar el código, abre el monitor serie para observar el resultado de la prueba. Las salidas de este sensor son información de aceleración de 3 ejes que se convierte a la unidad de gravedad, "g".

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/Xadow_3-Axis_Accelemeter_Result.jpg)

## Referencia
---
A continuación se muestran dos figuras que pueden ayudarte a entender el significado físico de los resultados.
La primera figura trata sobre la dirección de cada eje:

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/ADXL345_Axes_of_Acceleration_Sensivity.jpg)

La segunda figura da algunos ejemplos:

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/Sensing_Diraction_2.jpg)


## Visor de Esquemas en Línea
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/res/3-Axis_Accelerometer_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Archivo Eagle del Acelerómetro de 3 Ejes Xadow](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/res/3-Axis_Accelerometer_Eagle_File.zip)
- [Hoja de Datos ADXL345](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/res/ADXL345_datasheet.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>