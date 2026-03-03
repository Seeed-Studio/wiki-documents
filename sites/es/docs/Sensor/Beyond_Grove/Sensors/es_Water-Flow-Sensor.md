---
title: Sensor de Flujo de Agua
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Water-Flow-Sensor/
slug: /es/Water-Flow-Sensor
last_update:
  date: 02/03/2022
  author: gunengyu
---

<div align="center">
  <figure>
    <img src="https://static-cdn.seeedstudio.site/media/catalog/product/cache/ab187aaa5f626ad16c8031644cd2de5b/h/t/httpsstatics3.seeedstudio.comseeedfile2017-06bazaar483771_1.jpg" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b /><i /></figcaption>
  </figure>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Water-Flow-Sensor-YF-B1-p-2878.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

El sensor de flujo de agua consiste en un cuerpo de cobre, un rotor de agua y un sensor de efecto Hall. Cuando el agua fluye a través del rotor, el rotor gira, su velocidad cambia con diferentes tasas de flujo. Y el sensor de efecto Hall emite la señal de pulso correspondiente. Este es adecuado para detectar flujo en dispensadores de agua o máquinas de café. **Más importante aún, la vida útil del de cobre es más larga que la del cuerpo de plástico.**

## Característica

- Compacto, Fácil de Instalar
- Alto Rendimiento de Sellado
- Sensor de Efecto Hall de Alta Calidad
- Cumple con RoHS

## Especificación

|Parámetros|Valor|
|---|---|
|Dimensiones |0mm x0mm x0mm|
|Peso| G.W 79g|
|Batería |Excluir|
|Voltaje de Trabajo Mín.| DC 4.5V|
|Corriente de Trabajo Máx.| 15mA (DC 5V)|
|Voltaje de Trabajo |DC 5V~15V|
|Dimensiones de Interfaz| G1/2Pulgada|
|Rango de Tasa de Flujo |1~25L/min|
|Frecuencia |F=(11*Q)Q=L/MIN±3%|
|Rango de Error |(1~30L\MIN) ±3%|
|Capacidad de Carga |≤10mA (DC 5V)|
|Temperatura de Operación| 0 ~ 80℃|
|Temperatura del Líquido |≤120℃|
|Humedad de Operación |35%～90%RH|
|Presión del Agua| ≤1.75MPa|
|Descripción del Material |H57Cobre+POM|
|Temperatura de Almacenamiento |-25～+ 80℃|
|Humedad de Almacenamiento |25%～95%RH|
|Nivel Alto de Pulso de Salida |&gt;DC 4.7V (Voltaje de Entrada DC5V)|
|Nivel Bajo de Pulso de Salida |&lt;DC 0.5V (Voltaje de Entrada DC5V)|
|Ciclo de Trabajo del Pulso de Salida| 50%±10%|

## Qué es un sensor de flujo de agua (medidor)

Utilizamos un sensor de flujo de agua para medir la velocidad del flujo de agua. La velocidad del flujo de agua es el volumen de fluido que pasa por unidad de tiempo. Las personas a menudo usan sensores de flujo de agua para control automático de calentadores de agua, máquinas de café DIY, máquinas expendedoras de agua, etc. Hay una variedad de sensores de flujo de diferentes principios, pero para makers que usan Arduino o Raspberry Pi, el sensor de flujo más común se basa en un dispositivo Hall. Por ejemplo, los sensores de flujo de agua más clásicos [YF-S402](https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html) y [YF-S201](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html) dependen de sensores Hall.

## Cómo funciona el sensor de flujo de agua

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/DSC03966-1030x686.jpg" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figura 1</b>. <i>Todos los componentes del YF-402</i></figcaption>
</figure>
</div>

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/how-does-water-flow-sensor-work-1030x599.jpg" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figura 2</b>. <i>Principio de funcionamiento del sensor de flujo de agua</i></figcaption>
</figure>
</div>

Es bastante simple por dentro. Los componentes principales son el sensor de Efecto Hall, la rueda de turbina y el imán. El agua fluye a través de la entrada y sale por la salida. La corriente de agua impulsa la rueda a girar, y el imán en la rueda gira con ella. La rotación del campo magnético activa el sensor Hall, que produce ondas cuadradas de nivel alto y bajo (pulso).

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/Water-flow-sensor-principle-1.gif" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figura 3</b>. <i>Principio de funcionamiento del sensor de flujo de agua</i></figcaption>
</figure>
</div>

Por cada vuelta de la rueda, el volumen de agua que fluye es una cantidad determinada, al igual que el número de ondas cuadradas de salida. Por lo tanto, podemos calcular el flujo de agua contando el número de ondas cuadradas (pulso).

## Plataforma Soportada

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Comenzando

#### Materiales Requeridos

|Placa Seeeduino |Grove Base Shield|Sensor de Flujo de Agua|
|--------------|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/Seeeduino_s.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/base_shield.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Water_Flow_Sensor/IMG/Water-Flow-Sensor.png)
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/catalogsearch/result/?q=Water+flow+sensor)|

#### Conexión de Hardware

Para la serie YF, hay 3 cables:

- Rojo para Vcc
- Negro para GND
- Amarillo para salida de pulso.

Para la placa basada en Atmega 328 como [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html). Hay dos pines digitales que pueden usarse como interrupción. Pin digital 2 para **interrupción 0**, y pin digital 3 para ***interrupción 1**. En este blog, usamos el pin **D2** para detectar la salida de pulso del sensor de flujo de agua. Si estás usando Seeeduino + [Grove base shield](https://www.seeedstudio.com/Base-Shield-V2.html), simplemente conecta el sensor de flujo de agua al conector D2. Si estás usando otra placa Arduino, por favor usa cables jumper para conectar al pin correcto.

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/image-34.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figura 4</b>. <i>Sensor de flujo de agua conectado con Arduino</i></figcaption>
</figure>
</div>

:::tip
    Por favor conecta el cable USB, la Interfaz del Sensor de Flujo de Agua en la interfaz de la placa Seeeduino suavemente, de lo contrario podrías dañar el puerto.
:::

#### Software

Por supuesto, puedes usar digitalread() en la función **LOOP** para leer la salida del sensor de flujo de agua. Contar número más uno cada vez que se lee un nivel alto. Sin embargo, este enfoque no es en tiempo real, y el programa requiere un cierto tiempo de espera para cada ejecución, durante el cual no se detectan nuevos pulsos. Para tales aplicaciones que demandan tiempo real, típicamente usamos interrupción. Cada vez que se detecta el flanco ascendente del pulso, se activa una interrupción, contando más uno.

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/image-33.png" alt="Water-Flow-Sensor'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

Para más detalles sobre **interrupt** por favor revisa [attachinterrupt](https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt/).

:::caution
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Conecta la placa Grove Base con el Sensor de Flujo de Agua en la placa Seeeduino y conecta la placa Seeeduino a la PC mediante un cable USB.

- **Paso 2.** Luego abre tu Arduino IDE y copia el código de abajo. Al final, descarga el código en Arduino.

:::note
El código aquí **FUNCIONA** para los más clásicos YF – S201, YF - S402 y otros Sensores de Flujo de Agua en Seeed, así como el principio de funcionamiento de los sensores de flujo de agua.
:::

#### Código de Software

```cpp
/*
YF‐ S201 Water Flow Sensor
Water Flow Sensor output processed to read in litres/hour
Adaptation Courtesy: www.hobbytronics.co.uk
*/

volatile int flow_frequency; // Measures flow sensor pulsesunsigned 

int l_hour; // Calculated litres/hour
unsigned char flowsensor = 2; // Sensor Input
unsigned long currentTime;
unsigned long cloopTime;

void flow () // Interrupt function

{
   flow_frequency++;
}

   void setup()
 {
   pinMode(flowsensor, INPUT);
   digitalWrite(flowsensor, HIGH); // Optional Internal Pull-Up
   Serial.begin(9600);
   attachInterrupt(0, flow, RISING); // Setup Interrupt
   sei(); // Enable interrupts
   currentTime = millis();
   cloopTime = currentTime;
}

   void loop ()
{
   currentTime = millis();// Every second, calculate and print litres/hour
   if(currentTime >= (cloopTime + 1000))
   {
      cloopTime = currentTime; // Updates cloopTime
      // Pulse frequency (Hz) = 7.5Q, Q is flow rate in L/min.
      l_hour = (flow_frequency * 60 / 7.5); // (Pulse frequency x 60 min) / 7.5Q = flowrate in L/hour
      flow_frequency = 0; // Reset Counter
      Serial.print(l_hour, DEC); // Print litres/hour
      Serial.println(" L/hour");
   }
}
```

:::tip
Si todo va bien, abre la herramienta del monitor serie y establece la velocidad de baudios a 9600. Cuando el agua pase, el valor del flujo se imprimirá en la ventana correspondiente.
:::

## La fórmula para el cálculo del sensor de flujo de agua

En la sección de código, utilizamos la siguiente fórmula, entonces ¿cómo surgió esta fórmula?

```cpp
l_hour = (flow_frequency * 60 / 7.5)
```

Anteriormente mencionamos que con cada revolución de la rueda, el volumen de fluido que fluye a través es cierto. Al mismo tiempo, el número de pulsos generados por revolución de la rueda también es una cantidad cierta. Por lo tanto, podemos establecer una ecuación entre el número de pulsos y el flujo de agua.

Para el YF-S201, cada litro de agua que fluye, el Sensor Hall emite 450 pulsos. Hagamos un poco de matemáticas aquí. 450 pulsos por 1 litro, así que cada pulso significa 1/450 litro de agua fluyendo a través. Tomamos el volumen total de líquido que fluye a través del sensor de flujo de agua en un tiempo determinado **t**(unidad s) como **V_total**(unidad L), y el número total de pulsos detectados como **N**. Entonces obtenemos:

```cpp
V_total(L) = N* 1/450(L) 
```

Además, el volumen total de fluido que pasa a través del sensor de flujo de agua es igual a la **velocidad de flujo de agua (Q - unidad L/s)** multiplicada por el tiempo **t** (unidad s).

```cpp
V_total(L) = Q(L/s)*t(s) 
```

Así obtenemos:

```cpp
N* 1/450 = Q(L/s)*t(s) 
N/t = 450 * Q(L/s) 
```

**N/t** resulta ser la frecuencia **f**, por lo tanto:

```cpp
f = 450*Q(L/s); 
Q(L/s) = f/450; 
Q(L/min) = f*60/450 = f/7.5 
Q(L/hour) = f*60*60/450 = f*60 /7.5 
```

Para el YF – S402, por cada litro de agua que fluye, el Sensor Hall emite 4380 pulsos. Por lo tanto, la fórmula debería ser:

```cpp
f = 4380*Q(L/s); 
Q(L/s) = f/4380; 
Q(L/min) = f*60/4380 = f/73 
Q(L/hour) = f*60*60/4380 = f*60 /73 
```

## Sensores de Flujo de Agua en Seeed

:::tip
Hay numerosos Sensores de Flujo de Agua en venta en Seeed, incluyendo [YF - 402](https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html) y [YF - S201](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html). Además, ofrecemos una variedad de Sensores de Flujo de Agua con diferentes dimensiones, rangos de detección, material, etc. como se muestra a continuación:
:::

|   Tipo   | Dimensiones(DN) | Voltaje de Trabajo | Rango de Flujo | Longitud |    Macho y Hembra   | Longitud de Rosca | Material |
|:--------:|:--------------:|:---------------:|:---------------:|:------:|:------------------:|:----------------:|:--------:|
|   [YF-B1](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B1-p-2878.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  44mm  |     Doble Macho    |       10mm       |  Cobre  |
|   [YF-B2](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B2-p-2879.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  50mm  | Macho entrada Hembra salida |       10mm       |  Cobre  |
|   [YF-B3](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B3-p-2880.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  66mm  |     Doble Macho    |       18mm       |  Cobre  |
|   [YF-B4](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B4-p-2881.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  66mm  | Macho entrada Hembra salida |       10mm       |  Cobre  |
|   [YF-B5](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B5-p-2882.html)  |      DN20      |    5V~15V(DC)   |    1~30L/min    |  50mm  |     Doble Macho    |       10mm       |  Cobre  |
|   [YF-B6](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B6-p-2883.html)  |      DN20      |    5V~15V(DC)   |    1~30L/min    |  60mm  |     Doble Macho    |       11mm       |  Cobre  |
|   [YF-B7](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B7-p-2884.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  66mm  |     Doble Macho    |       10mm       |  Cobre  |
|   [G1&2](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-Enclosure-p-1915.html)   |      DN15      |    5V~24V(DC)   |    1~30L/min    |    -   |     Doble Macho    |         -        |  Plástico |
|   [G3&4](https://www.seeedstudio.com/G3-4-Water-Flow-Sensor-p-1083.html)   |      DN20      |    5V~24V(DC)   |    1~60L/min    |    -   |     Doble Macho    |         -        |  Plástico |
|   [G1&2](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html)   |      DN15      |    5V~24V(DC)   |    1~30L/min    |  60mm  |     Doble Macho    |       13mm       |  Plástico |
|   [G1&8](https://www.seeedstudio.com/G1-8-Water-Flow-Sensor-p-1346.html)   |        -       |    5V~24V(DC)   |    0.3~6L/min   |    -   |          -         |         -        |  Plástico |
| [M11*1.25](https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html) |        -       |    5V~24V(DC)   |    0.3~6L/min   |    -   |          -         |         -        |  Plástico |

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
