---
description: Grove - Sensor de Turbidez para Arduino V1.0
title: Grove - Sensor de Turbidez para Arduino V1.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Turbidity-Sensor-Meter-for-Arduino-V1.0
last_update:
  date: 1/6/2023
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-wiki.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-wiki.jpg" alt="pir" width={600} height="auto" /></p>

El sensor de turbidez Grove puede medir la turbidez del agua (el número de partículas suspendidas).

El sensor óptico de este módulo puede medir la densidad del agua turbia y la concentración de materia extraña utilizando la refracción de la longitud de onda entre el fototransistor y el diodo. Mediante el uso de un transistor óptico y diodos ópticos, un sensor óptico mide la cantidad de luz que proviene de la fuente de luz hacia el receptor de luz, con el fin de calcular la turbidez del agua.

El modo de salida se puede seleccionar ajustando el interruptor en la placa. Soporta salida analógica y digital. La sensibilidad se puede ajustar mediante la perilla integrada.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html)

## Características

- Bajo consumo de energía
- Tamaño pequeño: módulo Grove de 2.0cm x 4.0cm
- Solo se necesitan 3 pines, ahorra recursos de E/S
- Fácil de usar: conector Grove, plug and play
- Modo de salida opcional, soporta salida analógica y salida digital

:::tip

    Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

|Parámetro|Valor/Rango|
|---|---|
| Voltaje de Operación | 3.3V/5V DC |
| Interfaz de Salida  | Analógica / Digital |
| Conector | 1 Grove / 1 interfaz de alimentación |
| Tamaño   | 20*40mm |

## Aplicaciones típicas

- Medir el grado de contaminación del agua de máquinas lavadoras como lavavajillas para determinar el tiempo de lavado óptimo y el número de enjuagues.
- Control de sitios industriales.
- Tratamiento de aguas residuales ambientales.

## Descripción general del hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-pin.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-pin.jpg" alt="pir" width={600} height="auto" /></p>
- **Interruptor Digital a Analógico**

- "D" es la salida digital, el umbral de nivel alto y bajo se puede ajustar mediante la perilla integrada.
- "A" es la salida analógica, el valor de salida disminuirá con el aumento de la turbidez del líquido.

## Plataformas compatibles

| Arduino| Raspberry Pi| BeagleBone| Wio| LinkIt ONE|
|--------|-------------|-----------|----|-----------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" alt="pir" width={200} height="auto" /></p> |

:::caution  

    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

:::note

    Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

**Materiales requeridos**

| Seeeduino V4.2 | Grove - Sensor de Turbidez | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

:::note

 **1** Por favor, conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor, usa el cable USB con 4 cables en su interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar. 
    
 **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

#### Salida Analógica

##### Conexión de Hardware

- **Paso 1.** El interruptor en el sensor selecciona **A**.

- **Paso 1.** Conecta Grove - Turbidity Sensor al puerto **A0** de Grove-Base Shield.

- **Paso 2.** Conecta Grove - Base Shield en Seeeduino.

- **Paso 3.** Conecta Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/connect.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note

    Si no tenemos Grove Base Shield, también podemos conectar directamente Grove - Turbidity Sensor a Seeeduino como se muestra a continuación.
:::

| Seeeduino     | Grove - Turbidity Sensor|
|---------------|-------------------------|
| 5V            | Rojo                     |
| GND           | Negro                   |
| No Conectado | Blanco                   |
| A0            | Amarillo                  |

##### Software

- **Paso 1.** Copia el código de abajo en Arduino IDE y súbelo. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```c
void setup() {

  Serial.begin(9600); //Baud rate: 9600
}

void loop() {
  int sensorValue = analogRead(A0);// read the input on analog pin 0:
  float voltage = sensorValue * (5.0 / 1024.0); // Convert the analog reading (which goes from 0 - 1023) to a voltage (0 - 5V):
  Serial.println(voltage); // print out the value you read:
  delay(500);
}

```

- **Paso 2.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie** o presiona las teclas **Ctrl+Shift+M** al mismo tiempo. Establece la velocidad de baudios a **9600**.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/result.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/result.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3.**  Ahora puedes usar este sensor, y la salida será así:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/serial-port.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/serial-port.png" alt="pir" width={600} height="auto" /></p>

#### Salida Digital

##### Conexión de Hardware

- **Paso 1.** El interruptor en el sensor selecciona **D**.

- **Paso 1.** Conecta Grove - Sensor de Turbidez al puerto **D2** del Grove-Base Shield.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta Seeeduino a la PC mediante un cable USB.

:::note

    Si no tenemos Grove Base Shield, también podemos conectar directamente Grove - Sensor de Turbidez al Seeeduino como se muestra a continuación.
:::

| Seeeduino     | Grove - Sensor de Turbidez|
|---------------|-------------------------|
| 5V            | Rojo                     |
| GND           | Negro                   |
| Sin Conexión | Blanco                   |
| D2            | Amarillo                  |

##### Software

- **Paso 1.** Copia el código de abajo en el IDE de Arduino y súbelo. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```c
int ledPin = 3;               
int sensor_in = 2;                 // Turbidity sensor on Digital Pin 2

void setup(){
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);      // Set ledPin as output mode
  pinMode(sensor_in, INPUT);       //Set Turbidity sensor pin to input mode
}

void loop(){
   int sensorValue = digitalRead(sensor_in);
   Serial.println(sensorValue);
   if(sensorValue==HIGH){       //Read sensor signal 
        digitalWrite(ledPin, HIGH);   // if sensor is LOW, then turn on
     }else{
        digitalWrite(ledPin, LOW);    // if sensor is HIGH, then turn off the led
     }
    delay(500);
}
```

- **Paso 2.** Usamos salida digital y subimos o bajamos el disparador ajustando el potenciómetro para hacer que el LED se encienda y apague.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/Grove-Turbidity-Sensor-v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241,241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}} />

## Recursos

- **[ZIP]** [Diagrama Esquemático](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/Grove-Turbidity-Sensor-v1.0.zip)

- **[PDF]** [Hoja de Datos LMV358](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/LMV358-Datasheet.pdf)

- **[PDF]** [Hoja de Datos MPX5700AP](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/Turbidity-Sensor-Datasheet.pdf)

## Soporte Técnico y Discusión de Productos

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
