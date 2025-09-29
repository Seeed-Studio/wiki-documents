---
description: Primeros pasos con el Sensor de Vibración Grove D7S
title: Grove - Sensor de Vibración D7S
keywords:
- Grove
- vibration
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/grove-d7s-vibration-sensor
last_update:
  date: 6/6/2023
  author: Stephen Lo
---

# Grove - Sensor de Vibración D7S

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/main.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-D7S-Vibration-Sensor-p-5701.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

El Grove - Sensor de Vibración D7S es un potente módulo de detección de terremotos que proporciona monitoreo en tiempo real de actividades sísmicas. Está basado en el avanzado módulo D7S desarrollado por Omron Corporation, un fabricante líder en tecnología de sensores.

Con un acelerómetro de tres ejes de alta precisión y algoritmos sofisticados para terremotos, el Grove - Sensor de Vibración D7S ofrece detección precisa y confiable de eventos sísmicos. Puede detectar varios tipos de vibraciones y clasificarlas según su severidad, proporcionando información valiosa para aplicaciones de monitoreo de terremotos y seguridad.

Diseñado con simplicidad y versatilidad en mente, el Grove - Sensor de Vibración D7S se integra perfectamente con el sistema Grove, una plataforma modular de prototipado. Su interfaz estandarizada permite una conexión fácil a placas Arduino y otras plataformas de desarrollo compatibles.

## Introducción

### Características

- Acelerómetro de Alta Precisión: Equipado con un acelerómetro de tres ejes, el sensor proporciona mediciones precisas de vibraciones y actividad sísmica.
- Detección de Terremotos en Tiempo Real: El Grove - Sensor de Vibración D7S utiliza algoritmos avanzados para detectar y clasificar eventos sísmicos en tiempo real. Puede diferenciar entre diferentes magnitudes de terremotos y proporcionar señales de alerta correspondientes.
- Fácil Integración con el Sistema Grove: El sensor cuenta con una interfaz compatible con Grove, permitiendo una conexión fácil a placas Arduino y otras plataformas compatibles. No se requiere cableado complejo ni soldadura, haciéndolo accesible para usuarios de todos los niveles de habilidad.
- Diseño Compacto y Robusto: El Grove - Sensor de Vibración D7S tiene un factor de forma compacto, haciéndolo adecuado para varias aplicaciones donde el espacio es limitado. Su construcción robusta asegura durabilidad y rendimiento confiable, incluso en ambientes hostiles.
- Bajo Consumo de Energía: El sensor está diseñado para operar con bajo consumo de energía, haciéndolo adecuado para aplicaciones de monitoreo a largo plazo sin agotar rápidamente la fuente de alimentación.

### Especificaciones

- Chip: D7S
- Rango de Medición: ±6g
- Interfaz de comunicación: I2C
- Conector Grove: 4 pines HY2.0
- Voltaje de operación: 3.3/5V

### En la Caja

- 1 x Placa del Grove - Sensor de Vibración D7S
- 1 x Cable Grove(20cm)

### Aplicaciones

El Grove - Sensor de Vibración D7S puede ser utilizado en una amplia gama de aplicaciones, incluyendo pero no limitado a:

- Sistemas de Monitoreo de Terremotos: Desplegar el sensor en edificios, puentes e infraestructura crítica permite el monitoreo en tiempo real de actividades sísmicas. Habilita sistemas de detección temprana y alerta, contribuyendo a mejorar la seguridad y respuesta ante desastres.
- Investigación y Análisis Sísmico: Los investigadores pueden utilizar el Grove - Sensor de Vibración D7S para recopilar datos para estudios sísmicos y análisis. Las mediciones de alta precisión del sensor proporcionan información valiosa sobre patrones y características de terremotos.
- Evaluación de Seguridad Estructural: El sensor puede ser integrado en sistemas de monitoreo de salud estructural para evaluar la integridad y estabilidad de edificios, puentes y otras estructuras. Ayuda a identificar debilidades estructurales potenciales causadas por eventos sísmicos.
- Redes de Monitoreo Sísmico basadas en IoT: Al desplegar múltiples Grove - Sensores de Vibración D7S en una red, es posible crear un sistema distribuido para monitoreo sísmico integral sobre un área más grande. Esta configuración permite recopilación y análisis eficiente de datos para mejorar la preparación ante terremotos.

Estos son solo algunos ejemplos de las diversas aplicaciones que el Grove - Sensor de Vibración D7S habilita. Su versatilidad y alto rendimiento lo convierten en una herramienta valiosa en proyectos relacionados con terremotos.

## Descripción General del Hardware

### Mapa de Pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/pinmap.png" alt="pir" width={500} height="auto" /></p>

## Primeros Pasos

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Grove - D7S Vibration Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/main.jpg" alt="pir" width={250} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-D7S-Vibration-Sensor-p-5701.html" target="_blank">Obtener Uno Ahora</a>|

:::note
**1.** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar
    
**2.** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta Grove - D7S Vibration Sensor al puerto **I2C** del Grove-Base Shield.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta Seeeduino a la PC mediante un cable USB.


| Seeeduino     | Grove - D7S Vibration Sensor |
|---------------|-------------------------|
| 3.3/5V        | Rojo                    |
| GND           | Negro                   |
| SDA           | Blanco                  |
| SCL           | Amarillo                |


#### Software

- **Paso 1.** Descarga el [Grove - D7S Vibration Sensor](https://github.com/limengdu/d7s-grove-arduino) desde Github.

- **Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.

- **Paso 3.** Después de descargar e instalar la biblioteca correctamente, puedes encontrar un programa de ejemplo llamado sample.ino en la carpeta examples. Este programa está diseñado para el módulo D7S.

```cpp
#include <D7S.h>

//old earthquake data
float oldSI = 0;
float oldPGA = 0;

//flag variables to handle collapse/shutoff only one time during an earthquake
bool shutoffHandled = false;
bool collapseHandled = false;

//function to handle collapse event
void handleCollapse()
{
    //put here the code to handle the collapse event
    Serial.println("-------------------- COLLAPSE! --------------------");
}

void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(9600);
    while (!Serial)
    {
        ; // wait for serial port to connect. Needed for native USB port only
    }

    Serial.print("Starting D7S communications (it may take some time)...");
    //start D7S connection
    D7S.begin();
    //wait until the D7S is ready
    while (!D7S.isReady())
    {
        Serial.print(".");
        delay(500);
    }
    Serial.println("STARTED");

    //setting the D7S to switch the axis at inizialization time
    Serial.println("Setting D7S sensor to switch axis at inizialization time.");
    D7S.setAxis(SWITCH_AT_INSTALLATION);

    Serial.println("Initializing the D7S sensor in 2 seconds. Please keep it steady during the initializing process.");
    delay(2000);
    Serial.print("Initializing...");
    //start the initial installation procedure
    D7S.initialize();
    //wait until the D7S is ready (the initializing process is ended)
    while (!D7S.isReady())
    {
        Serial.print(".");
        delay(500);
    }
    Serial.println("INITIALIZED!");

    //check if there there was a collapse (if this is the first time the D7S is put in place the installation data may be wrong)
    if (D7S.isInCollapse())
    {
        handleCollapse();
    }

    //reset the events shutoff/collapse memorized into the D7S
    D7S.resetEvents();

    Serial.println("\nListening for earthquakes!");
}

void loop()
{

    //checking if there is an earthquake occuring right now
    if (D7S.isEarthquakeOccuring())
    {

        //check if the shutoff event has been handled and if the shutoff condition is met
        //the call of D7S.isInShutoff() is executed after to prevent useless I2C call
        if (!collapseHandled && D7S.isInCollapse())
        {
            handleCollapse();
            collapseHandled = true;
        }

        //print information about the current earthquake
        float currentSI = D7S.getInstantaneusSI();
        float currentPGA = D7S.getInstantaneusPGA();

        if (currentSI > oldSI || currentPGA > oldPGA)
        {
            //getting instantaneus SI
            Serial.print("\tInstantaneus SI: ");
            Serial.print(currentSI);
            Serial.println(" [m/s]");

            //getting instantaneus PGA
            Serial.print("\tInstantaneus PGA (Peak Ground Acceleration): ");
            Serial.print(currentPGA);
            Serial.println(" [m/s^2]\n");

            //save the current data
            oldSI = currentSI;
            oldPGA = currentPGA;
        }
    }
    else
    {
        //reset the old earthquake data
        oldPGA = 0;
        oldSI = 0;
        //reset the flag of the handled events
        shutoffHandled = false;
        collapseHandled = false;
        //reset D7S events
        D7S.resetEvents();
    }
}
```

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. Puedes generar algunas vibraciones, por ejemplo, golpeando la mesa, y obtendrás los siguientes resultados.

:::note
La inicialización del sensor toma aproximadamente de 3 a 5 minutos.
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/output.png" style={{width:1000, height:'auto'}}/></div>

## Solución de problemas

### P1: ¿Puede el Grove - Sensor de Vibración D7S detectar todos los tipos de terremotos?

El Grove - Sensor de Vibración D7S está diseñado para detectar una amplia gama de actividades sísmicas, incluyendo tanto terremotos menores como mayores. Sin embargo, el rango de detección y la sensibilidad pueden variar dependiendo de la magnitud y proximidad del terremoto.

### P2: ¿Puedo usar el Grove - Sensor de Vibración D7S con otras placas de desarrollo además de Arduino?

Sí, el Grove - Sensor de Vibración D7S es compatible con otras placas de desarrollo que soporten la interfaz I2C. Asegúrate de tener las librerías y recursos necesarios disponibles para tu plataforma elegida.

### P3: ¿Cuál es el requerimiento de energía para el Grove - Sensor de Vibración D7S?

El sensor puede operar a 3.3V.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/D7S-Vibration-Sensor.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Grove - Sensor de Vibración D7S SCH&PCB](https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/D7S-Vibration-Sensor.zip)
- **[PDF]** [Hoja de datos D7S](https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/en-d7s-957666.pdf)

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


