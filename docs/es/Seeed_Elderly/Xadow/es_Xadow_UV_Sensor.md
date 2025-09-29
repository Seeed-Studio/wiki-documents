---
description: Xadow - Sensor UV
title: Xadow - Sensor UV
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_UV_Sensor
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/img/xadow%20uv.jpg)

El Sensor UV Xadow es adecuado para medir la radiación UV en la luz solar. Puede detectar la longitud de onda UV de 290 ~ 400 nm. El Sensor UV emite un valor de voltaje digital correspondiente a la intensidad de la luz UV. Con el diagrama de voltaje de salida y UV, podemos conocer fácilmente el índice UV actual. El Sensor UV Xadow puede ser alimentado por 3.3V. Y es compatible con el sistema Xadow.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-UV-Sensor-p-1694.html)

##  Especificaciones
---
*   Puede detectar banda UV-A y UV-B
*   Detección de longitud de onda UV: 290 ~ 400nm
*   Longitud de onda de máxima sensibilidad: 330nm
*   Circuito ADC integrado, alta precisión de conversión
*   Precisión de prueba: ±0.1 Índice UV
*   Temperatura de funcionamiento: -25 ~ 70 ℃
*   Dimensiones: 25.43mm x 20.35mm

##  Demostración
---
El Sensor UV Xadow puede emitir un valor de voltaje correspondiente al índice UV. Debido a que existe una relación lineal entre el voltaje de salida y el índice UV, también puedes ver directamente el índice UV con una fórmula. A continuación mostramos cómo usar el sensor UV para conocer el índice UV y mostrarlo en la pantalla OLED.

<!-- Módulo Xadow requerido: [Xadow - Main Board](/es/Xadow_Main_Board/), [Xadow - OLED 128*64](/es/Xado_OLED_128multiply64/), **Xadow - UV Sensor** -->

**Instalación de Hardware**


:::note
    Cuando conectes el Sensor UV Xadow a la Placa Principal Xadow, debes preocuparte por la dirección de conexión. El método de conexión es que la esquina no rellena de un módulo Xadow necesita conectarse al ángulo recto de otro módulo (ver las cuatro esquinas de cada módulo Xadow).
:::
**Descargar Código**

<!-- *   Primero, debes asegurarte de que esté [la librería:OLED_Display12864](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/res/OLED_Display12864.zip) en tu Librería de Arduino. Si no, por favor haz clic [aquí](https://github.com/Seeed-Studio/Grove_OLED_Display_128X64) para descargar y añadirla a la Librería de Arduino. Consulta [Cómo instalar la Librería de Arduino](/es/How_to_install_Arduino_Library/) en la página wiki, te familiarizarás con la operación. -->

*   Ahora puedes subirlo a la Placa Principal Xadow copiando y pegándolo en el IDE de Arduino.

```
#include <Wire.h>
#include <SeeedOLED.h>
#include <Streaming.h>

#define ADDR_ADC121    0x5A

#define V_REF 3.00

#define REG_ADDR_RESULT         0x00
#define REG_ADDR_ALERT          0x01
#define REG_ADDR_CONFIG         0x02
#define REG_ADDR_LIMITL         0x03
#define REG_ADDR_LIMITH         0x04
#define REG_ADDR_HYST           0x05
#define REG_ADDR_CONVL          0x06
#define REG_ADDR_CONVH          0x07

unsigned int getData;
float analogVal=0;
float UVIndex = 0;
void init_adc()
{
    Wire.beginTransmission(ADDR_ADC121);        // transmit to device
    Wire.write(REG_ADDR_CONFIG);                // Configuration Register
    Wire.write(0x20);
    Wire.endTransmission();
}
void setup()
{
    Wire.begin();
    Serial.begin(38400);
    SeeedOled.init();  //initialize SEEED OLED display
    SeeedOled.clearDisplay();  // clear the screen and set start position to top left corner

    init_adc();
}

void loop()
{
    readVoltage();
    //SeeedOled.clearDisplay();
    SeeedOled.setTextXY(1,0);
    SeeedOled.putString("Voltage: ");
    SeeedOled.setTextXY(1,8);
    SeeedOled.putFloat(analogVal);
    SeeedOled.setTextXY(1,12);
    SeeedOled.putString("mV");
    SeeedOled.setTextXY(2,0);
    SeeedOled.putString("UVIndex: ");
    SeeedOled.setTextXY(2,8);
    SeeedOled.putFloat(UVIndex);
    delay(50);
}
void readVoltage()     //unsigned int *data
{
    Wire.beginTransmission(ADDR_ADC121);        // transmit to device
    Wire.write(REG_ADDR_RESULT);                // get result
    Wire.endTransmission();

    Wire.requestFrom(ADDR_ADC121, 2);           // request 2byte from device
    delay(1);
    if(Wire.available()<=2)
    {
        getData = (Wire.read()&0x0f)<<8;
        getData |= Wire.read();
    }
    delay(50);
    analogVal = getData*V_REF/4096/2;
    Serial.print("analogVal:");
    Serial.print(analogVal);
    Serial.println("mV");
    UVIndex = analogVal/9.71;
    Serial.print("UVIndex:");
    Serial.println(UVIndex);

}
```

*   Abre el monitor serie, se muestran el valor de voltaje y el índice UV:

*   Puedes ver en la pantalla OLED:

*   Determinar el índice UV no es un asunto diferente refiriéndose al diagrama de abajo.

![](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/img/Voltage_and_UVI.jpg)

Acerca del Sensor UV Xadow, usamos una resistencia cuyo valor de resistencia es 3M, por lo que necesitas referirte a esta línea para RL=3M.

Es lineal observando la relación entre voltaje y UV. Y la fórmula calculada puede obtenerse: Índice UV = Voltaje/9.71 que ha sido usada en el código.

##  Referencia
---
###  Dirección I2C del Sensor UV

El Sensor UV Xadow tiene una dirección de hardware de siete bits que se refiere como dirección esclava. Y la dirección esclava está configurada por las entradas de selección de dirección ADR0 y ADR1. ADR0 y ADR1 pueden estar en nivel bajo, dejadas flotantes, o conectadas a nivel alto. El estado de estas entradas establece la dirección de hardware a la que el módulo responde en el bus I2C (ver la Tabla de abajo).

<table  cellspacing="0" width="50%">
<tr>
<th rowspan="2" scope="col">  Dirección Esclava[A6 - A0]</th>
<th colspan="2" scope="col"> Estado de entradas ADR0 y ADR1</th>
</tr>
<tr>
<td scope="col"> ADR1</td>
<td scope="col"> ADR0</td>
</tr>
<tr>
<td scope="row"> 1010000(0x50)</td>
<td>Flotante</td>
<td>Flotante</td>
</tr>
<tr>
<td scope="row"> 1010001(0x51)</td>
<td> Flotante</td>
<td> L </td>
</tr>
<tr>
<td scope="row"> 1010010(0x52)</td>
<td> Flotante</td>
<td> H </td>
</tr>
<tr>
<td scope="row"> 1010100(0x54)</td>
<td> L </td>
<td> Flotante </td>
</tr>
<tr>
<td scope="row"> 1010101(0x55) </td>
<td>L </td>
<td>L </td>
</tr>
<tr>
<td scope="row"> 1010110(0x56) </td>
<td> L </td>
<td> H </td>
</tr>
<tr>
<td scope="row"> 1011000(0x58) </td>
<td> H </td>
<td> Flotante </td>
</tr>
<tr>
<td scope="row"> 1011001(0x59) </td>
<td> H </td>
<td> L </td>
</tr>
<tr>
<td scope="row">1011010(por defecto 0x5A) </td>
<td> H </td>
<td> H </td>
</tr>
</table>

En modo predeterminado, ADR0 y ADR1 están conectados a "H"(ver el Xadow UV Sensor)

###  curva de respuesta espectral del Sensor UV

![](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/img/Responsivity.jpg)


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/res/Xadow_UV_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  Recursos
---
[Archivo Eagle del Xadow UV Sensor](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/res/Xadow_UV_Sensor_Eagle_File.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
