---
title: Grove - Divisor de Voltaje
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Voltage_Divider//
slug: /es/Grove-Voltage_Divider
last_update:
  date: 11/30/2023
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/img/Voltage_Divider_01.jpg)

El Grove – Divisor de Voltaje proporciona una interfaz para medir voltaje externo, eliminando la necesidad de conectar una resistencia a la interfaz de entrada. Además, la ganancia de voltaje se puede seleccionar mediante un interruptor de dial. Son fáciles de usar.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Voltage-Divider-p-1472.html)


## Características
---
- Interfaz de Voltaje Externo e Interfaz Grove
- Fácil de usar
- Puede ajustar la ganancia

:::tip
Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones
---

|Elemento|Mín|Típico|Máx|Unidad|
|---|---|---|---|---|
|Voltaje de Trabajo|4.7|5.0|5.3|VDC|
|Precisión de Medición|-|&lt;=1|-|%|
|Rango de Voltaje Externo (seleccionar 3)|0.3|-|12.9|V|
|Rango de Voltaje Externo (Seleccionar 10)|1.0|-|43|V|
|Dimensión|-|24X20|-|mm|

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos
---
Al medir el voltaje externo, conecte el voltaje externo a J1 y luego conecte el conector Grove integrado al puerto analógico de Arduino/Seeeduino:
- Conecte el módulo al puerto A0 del [Grove - Base Shield](https://wiki.seeedstudio.com/es/Base_Shield_V2) con un Cable Grove universal.
- Conecte el [Grove - Base Shield](https://wiki.seeedstudio.com/es/Base_Shield_V2) a Arduino/Seeeduino.

Para probar la precisión de este módulo, probé algunas entradas de voltaje y obtuve los siguientes datos:

![](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/img/Voltage_Divider_Test_Score.jpg)

- Como puede ver, cuando las entradas estaban en el rango de medición, el divisor de voltaje tiene una alta precisión(&lt;1%, que marqué como "OK"). Pero cuando las entradas no estaban en el rango, la precisión se reduce (marqué como "NO") Por favor vea [Especificación](https://wiki.seeedstudio.com/es/Grove-Voltage_Divider/#specification) sobre el rango de medición específico.

Y cuando el voltaje de salida del divisor de voltaje es mayor que VCC (El Voltaje de Operación Grove y referencia de lectura analógica), un indicador se encenderá para mostrarle el error.

- Usando el monitor serie de Arduino, puede medir el valor de voltaje de entrada. Código de demostración como se muestra a continuación:

```cpp
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    long  sensorValue=analogRead(A0);
    long  sum=0;
    for(int i=0;i<1000;i++)
    {
        sum=sensorValue+sum;
        sensorValue=analogRead(A0);
        delay(2);
    }
    sum=sum/1000;

    Serial.print("if you set the Gain to 10,the input voltage:");
    Serial.println(10*sum*4980/1023.00);

    Serial.print("if you set the Gain to 3,the input voltage:");
    Serial.println(3*sum*4980/1023.00);

    delay(1000);
}
```

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Grove - Divisor de Voltaje al puerto A0 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
Si esta es tu primera vez usando Codecraft, consulta también [Guía para usar Codecraft con Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::

**Paso 2.** Arrastra bloques como se muestra en la imagen a continuación o abre el archivo cdc que se puede descargar al final de esta página.

![cc](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/img/cc_Voltage_Divider.png)

Sube el programa a tu Arduino/Seeeduino.

:::success
Cuando el código termine de subirse, verás el voltaje en el Monitor Serie.
:::

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/Grove-Voltage_Divider_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Archivo Eagle del Grove - Divisor de Voltaje](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/Grove-Voltage_Divider_Eagle_File.zip)
- [Hoja de Datos LMV358ID](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/LMV358ID_Datasheet.pdf)
- [Archivo CDC de Codecraft](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/Grove_Voltage_Divider_CDC_File.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>