---
description: Grove - Sensor de Humedad Capacitivo (Resistente a la Corrosión)
title: Grove - Sensor de Humedad Capacitivo (Resistente a la Corrosión)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Capacitive_Moisture_Sensor-Corrosion-Resistant
last_update:
  date: 1/9/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/main.jpg" /></div>

El Grove - Sensor de Humedad Capacitivo (Resistente a la Corrosión) es un sensor de humedad del suelo basado en cambios de capacitancia. Comparado con los sensores resistivos, los sensores capacitivos no requieren exposición directa de los electrodos metálicos, lo que puede reducir significativamente la erosión de los electrodos. Por eso lo llamamos **Resistente a la Corrosión**.

Es importante tener en cuenta que este sensor solo puede probar cualitativamente la humedad del suelo y no puede medir cuantitativamente. Lo que significa que cuando la humedad del suelo aumenta, el valor de la salida disminuye; por el contrario, cuando la humedad disminuye, el valor de salida se vuelve más alto.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2580.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para la detección ambiental. Por favor, consulta el Sensor Inalámbrico de Humedad del Suelo, Temperatura y EC S2105 con mayor rendimiento y robustez para el monitoreo de condiciones del suelo. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba la última [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2105-.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
          <strong>S2105 Humedad del Suelo &amp; Temp &amp; EC</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Sensor de Humedad Capacitivo (Resistente a la Corrosión)  | Inicial                                                                                               | Sep 2018      |


## Características

- Estilo Capacitivo
- Resistente a la Corrosión
- Amplificador Integrado

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Operación|3.3V / 5V|
|Interfaz de Salida|Analógica|
|Longitud|92.1mm|
|Ancho|23.5mm|
|Altura|6.5mm|
|tamaño|L: 40mm A: 20mm H: 13mm|
|Peso|10.6g|
|Tamaño del paquete|L: 150mm A: 100mm H: 15mm|
|Peso bruto|19g|

## Aplicaciones Típicas

- Detección de humedad del suelo
- Riego automático de plantas

## Descripción General del Hardware

### Distribución de Pines

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/pin_out.jpg" /></div>

:::caution
La parte del sensor insertada en el suelo no puede exceder la línea de posición más alta.
:::

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de hardware o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software. Que diga no compatible ahora, puede o no ser compatible en el futuro.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove - Sensor de Humedad Capacitivo  |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2850.html" target="_blank">Obtener Uno Ahora</a>|

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

:::note
**1**. Si usas Arduino UNO como placa madre, se recomienda que uses la fuente de alimentación DC. De lo contrario, la ondulación máxima de VCC puede exceder 100mV. Si usas Seeeduino V4.2 como placa madre, no necesitas conectar alimentación DC.

**2**. No se admite intercambio en caliente.
:::

- **Paso 1.** Conecta el Grove - Sensor de Humedad Capacitivo al puerto **A0** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Inserta el Grove - Sensor de Humedad Capacitivo en el suelo a probar.

:::caution
La parte del sensor insertada en el suelo no puede exceder esta línea blanca.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/line.jpg" /></div>

- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/connect.jpg" /></div>

:::note
    Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino      |  Cable Grove       | Grove - Sensor de Humedad Capacitivo |
|--------------- |--------------------|-----|
| GND            | Negro              | GND |
| 5V o 3.3V     | Rojo                | VCC |
|Sin conexión           | Blanco              |NC |
|A0           | Amarillo             | SIG|


#### Software

:::caution
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

**Paso 1.** Copia el código de abajo, y descárgalo a tu arduino. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```cpp
/*
  AnalogReadSerial

  Reads an analog input on pin 0, prints the result to the Serial Monitor.
  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.

  https://arduino.cc/en/Tutorial/AnalogReadSerial
*/

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int sensorValue = analogRead(A0);
  // print out the value you read:
  Serial.println(sensorValue);
  delay(100);        // delay in between reads for stability
}
```

- **Paso 2.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **9600**.

:::tip
Si todo va bien, cuando abras el Monitor Serie puede mostrarse como se indica a continuación:
:::

```cpp
678
663
631
615
615
624
616
618
620
616
614
614
610
614
614
616
615
612
605
```

:::caution
Debido a las diferencias individuales en los componentes, diferentes mediciones de módulos en el mismo entorno pueden variar.
:::

## Jugar con Raspberry Pi

Si quieres usar este módulo con Raspberry Pi, es posible que necesites usar cualquiera de los siguientes hat:

- [4-Channel 16-Bit ADC for Raspberry Pi(ADS1115)](https://www.seeedstudio.com/4-Channel-16-Bit-ADC-for-Raspberry-Pi-ADS1115.html)
- [8-Channel 12-Bit ADC for Raspberry Pi (STM32F030)](https://www.seeedstudio.com/8-Channel-12-Bit-ADC-for-Raspberry-Pi(STM32F030).html)
- [Grove Base Hat for Raspberry Pi](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)
- [Grove Base Hat for Raspberry Pi Zero](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-Zero-p-3187.html)

Y puedes encontrar la demostración en la wiki de esos hats.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/res/Grove-Capacitive%20Moisture%20Sensor%20(Corrosion%20Resistant).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Capacitive Moisture Sensor (Corrosion Resistant) Eagle Files](https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/res/Grove-Capacitive%20Moisture%20Sensor%20(Corrosion%20Resistant).zip)

- **[PDF]** [NE555DR Datasheet](https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/res/NE555DR.pdf)

- **[PDF]** [PDF Format Wiki](https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/res/soil_sensor.pdf)

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
