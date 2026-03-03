---
description: TBD
title: Grove - Sensor de Gas VOC (SGP40)
keywords:
- Grove
- SGP40
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_voc_gas_sensor_sgp40
last_update:
  date: 6/6/2023
  author: Stephen Lo
---

# Grove - Sensor de Gas VOC (SGP40)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/main.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP40-p-5700.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

El Grove - Sensor de Gas VOC (SGP40) es un módulo de detección ambiental innovador desarrollado para una amplia gama de aplicaciones de detección de Compuestos Orgánicos Volátiles (VOC). Basado en el avanzado sensor Sensirion SGP40, sobresale en transformar señales de sensor en bruto en señales digitales estandarizadas para una integración perfecta en sistemas existentes.

Con su capacidad para realizar mediciones de VOC de alta calidad en tiempo real, este módulo sensor proporciona una solución versátil para rastrear y monitorear la calidad del aire interior. Dada la creciente conciencia y necesidad de monitorear la calidad del aire debido a su correlación directa con la salud, el Grove - Sensor de Gas VOC (SGP40) puede ser un componente esencial de sistemas dirigidos hacia mejorar la calidad del aire interior, monitoreo de ambiente personal, sistemas HVAC, seguridad industrial y cualquier aplicación donde la evaluación de la calidad del aire sea fundamental.

Su compatibilidad con el ecosistema Grove facilita un proceso de configuración fácil y directo. La naturaleza plug-and-play del sistema Grove permite a los desarrolladores incorporar este módulo sin necesidad de manejar cableado complicado o codificación intrincada. Esta característica puede acelerar significativamente el tiempo de desarrollo y permite a los usuarios enfocarse más en la interpretación de datos y pasos de acción basados en las mediciones de VOC.

Una de las ventajas clave del Grove - Sensor de Gas VOC (SGP40) es su protocolo de comunicación. El módulo sensor utiliza la interfaz I2C, un protocolo ampliamente adoptado conocido por su simplicidad y eficiencia. Esto hace que el proceso de transferencia de datos entre el sensor y su controlador principal sea extremadamente fluido, permitiendo tiempos de reacción rápidos para aplicaciones donde las acciones inmediatas basadas en los niveles de VOC son cruciales.

En resumen, el Grove - Sensor de Gas VOC (SGP40) es un módulo compacto, potente y fácil de integrar que hace que la tarea desafiante de detección de VOC sea más simple y accesible, abriendo puertas para innovaciones y desarrollos en aplicaciones ambientales.


## Características

- Utiliza el sensor Sensirion SGP40 para detección confiable de VOC.
- Fácil integración en el ecosistema Grove, simplificando el proceso de cableado y codificación.
- Proporciona mediciones de VOC en tiempo real para evaluación precisa de la calidad del aire.
- Se comunica a través de la interfaz I2C, permitiendo transferencia eficiente de datos.
- Diseño compacto y modular, perfecto para embeberse en varias aplicaciones.

## Especificación

- Voltaje de Operación: 3.3/5V
- Interfaz: I2C
- Dimensiones: 20x40mm

## Aplicaciones

- Sistema de monitoreo de calidad del aire interior: El Grove - VOC Gas Sensor puede ser usado en edificios para monitorear la calidad del aire y asegurar un ambiente de vida o trabajo saludable.
- Dispositivo de monitoreo ambiental personal: El sensor puede ser usado para crear un dispositivo portátil que permite a los individuos monitorear la calidad del aire en su ambiente inmediato.
- Sistemas HVAC: El sensor puede ayudar a regular la calidad del aire en sistemas de calefacción, ventilación y aire acondicionado.
- Seguridad industrial: Puede ser usado en fábricas y sitios industriales para asegurar la seguridad de los trabajadores detectando niveles dañinos de VOC.

## Descripción General del Hardware

### Mapa de Pines


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/pinmap.png" alt="pir" width={500} height="auto" /></p>


## Comenzando

:::note
Si esta es la primera vez que trabajas con Arduino, recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Grove - VOC Gas Sensor (SGP40) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/main.jpg" alt="pir" width={250} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP40-p-5700.html" target="_blank">Obtener Uno Ahora</a>|

:::note
**1.** Por favor, conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor, usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar
    
**2.** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta Grove - VOC Gas Sensor (SGP40) al puerto **I2C** del Grove-Base Shield.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta Seeeduino a la PC mediante un cable USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg" alt="pir" width={600} height="auto" /></p>


:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente Grove - Smart Air Quality Sensor (SGP41) al Seeeduino como se muestra a continuación.
:::

| Seeeduino     | Grove - VOC Gas Sensor (SGP40) |
|---------------|-------------------------|
| 5V            | Rojo                    |
| GND           | Negro                   |
| SDA           | Blanco                  |
| SCL           | Amarillo                |


#### Software

- **Paso 1.** Descarga la [SGP40 Arduino Library](https://github.com/Sensirion/arduino-i2c-sgp40) desde Github.

- **Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.

- **Paso 3.** Después de descargar e instalar la biblioteca correctamente, puedes encontrar un programa de ejemplo llamado `exampleUsage.ino` en la carpeta de ejemplos. Este programa está diseñado para el sensor SGP40.

```cpp
#include <Arduino.h>
#include <SensirionI2CSgp40.h>
#include <Wire.h>

SensirionI2CSgp40 sgp40;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sgp40.begin(Wire);

    uint16_t serialNumber[3];
    uint8_t serialNumberSize = 3;

    error = sgp40.getSerialNumber(serialNumber, serialNumberSize);

    if (error) {
        Serial.print("Error trying to execute getSerialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("SerialNumber:");
        Serial.print("0x");
        for (size_t i = 0; i < serialNumberSize; i++) {
            uint16_t value = serialNumber[i];
            Serial.print(value < 4096 ? "0" : "");
            Serial.print(value < 256 ? "0" : "");
            Serial.print(value < 16 ? "0" : "");
            Serial.print(value, HEX);
        }
        Serial.println();
    }

    uint16_t testResult;
    error = sgp40.executeSelfTest(testResult);
    if (error) {
        Serial.print("Error trying to execute executeSelfTest(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else if (testResult != 0xD400) {
        Serial.print("executeSelfTest failed with error: ");
        Serial.println(testResult);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];
    uint16_t defaultRh = 0x8000;
    uint16_t defaultT = 0x6666;
    uint16_t srawVoc = 0;

    delay(1000);

    error = sgp40.measureRawSignal(defaultRh, defaultT, srawVoc);
    if (error) {
        Serial.print("Error trying to execute measureRawSignal(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("SRAW_VOC:");
        Serial.println(srawVoc);
    }
}
```

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Si todo va bien, obtendrás el resultado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/result.png" alt="pir" width={800} height="auto" /></p>

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_SGP40/Grove-VOC_Gas_Sensor(SGP40).rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Grove - Sensor de Gas VOC (SGP40) SCH&PCB](https://files.seeedstudio.com/wiki/Grove_SGP40/Grove-VOC_Gas_Sensor(SGP40).zip)
- **[PDF]** [Hoja de Datos SGP40](https://files.seeedstudio.com/wiki/Grove_SGP40/Sensirion_Gas_Sensors_Datasheet_SGP40.pdf)


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


