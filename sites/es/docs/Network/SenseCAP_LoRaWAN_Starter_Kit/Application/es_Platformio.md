---
description: Guía para principiantes de comunicación LoRa con el módulo Wio-E5 y Arduino en PlatformIO
title: LoRaWAN usando Wio-E5 en PlatformIO
keywords:
    - lorawan
    - grove
    - platformio
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/4.jpg
slug: /es/platformio_wio_e5
toc_max_heading_level: 4
sidebar_position: 1
last_update:
    date: 2024-01-26T06:59:58.390Z
    author: Spencer
---

# Primeros pasos con LoRaWAN usando Wio-E5 y Arduino en PlatformIO

Si quieres aprender sobre Long Range y sus características como la arquitectura de red y aplicaciones, puedes consultar este artículo [LoRapedia, que introduce Long Range y Long Range en detalle](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/), explica qué es Long Range, cómo funciona, y sus pros y contras.

<div style={{ textAlign: 'center' }}>

<img width={680} src="https://wdcdn.qpic.cn/MTIzNDU2Nzg5_993734_kw1N-KbhpVV3i5EZ_1693791639?w=1844&h=904" alt="LoRaWAN Framework " />
<div style={{ marginTop: '-8px' }}><em>Marco de red LoRaWAN</em></div>

</div>  

## Introducción

Esta guía detalla el uso del módulo LoRa Wio-E5 con XIAO ESP32S3 en PlatformIO, aplicable a cualquier placa compatible con Arduino.

Aprendizajes clave:

1. **Programación de librerías Arduino para Wio-E5**: Utilizando librerías Arduino para programación eficiente del Wio-E5, más allá del control básico de comandos AT.
2. **Integración de red LoRaWAN**: Pasos para conectar el Wio-E5 a una red LoRaWAN.
3. **Implementación de enlace ascendente y descendente**: Gestión de transmisión de datos hacia y desde la red.

Esta aplicación modifica la configuración de hardware estándar, incorporando un OLED para visualización directa de datos y CircleLED para indicación de enlace descendente, junto con reporte de datos del sensor DHT11, simplificando el proceso de aprendizaje con implementaciones prácticas.

<!-- 上传下达数据的说明 不够清晰 -->

## Prerrequisitos

### Hardware

- **[XIAO ESP32S3](/es/xiao_esp32s3_getting_started/)**: Una placa versátil que es compatible con Arduino, ideal para varios proyectos IoT. Puedes sustituirla con cualquier placa compatible con Arduino según sea necesario.
- **[Grove - DHT11](/es/Grove-TemperatureAndHumidity_Sensor)**: Para recolección de datos ambientales, esencial en muchas aplicaciones IoT.
- **[Grove - LED Circular](/es/Grove-Circular_LED)**: Usado para control de luz. Este es un ejemplo de un dispositivo controlable; siéntete libre de reemplazarlo con un componente de tu elección.
- **[Grove - Pantalla OLED](https://wiki.seeedstudio.com/es/Grove-OLED-Display-0.96-SSD1315/)**: Mejora tu proyecto con capacidades de visualización de datos. Este componente es opcional pero recomendado para una interfaz de usuario más interactiva.
- **[Grove - Módulo LoRa Wio-E5](/es/Grove_LoRa_E5_New_Version/)**: Proporciona comunicación inalámbrica de largo alcance y bajo consumo, convirtiéndolo en una excelente opción para aplicaciones LoRaWAN.
- **[Gateway Multi-Plataforma SenseCAP M2](/es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_Multi_Platform_Overview/)**: Un componente crítico para habilitar la comunicación entre tu módulo Wio-E5 y la red LoRaWAN.

### Software

#### PlatofmrIO

<div align="center">
    <img class="border-radius: 10px;" src="https://cdn.platformio.org/images/platformio-logo.17fdc3bc.png" height="220" alt="PlatformIO Logo"  title="PlatformIO: una plataforma colaborativa profesional para desarrollo embebido"/>
</div>

Para este proyecto, aprovecharemos PlatformIO, que ofrece numerosas ventajas:

- **Gestión eficiente de librerías**: PlatformIO facilita la gestión fácil y efectiva de librerías, asegurando que tu proyecto esté siempre alineado con los últimos avances.
- **Integración con VSCode**: Esta integración mejora significativamente la experiencia de desarrollo, con resaltado de código e IntelliSense, para un proceso de codificación más fluido y eficiente.
- **Adición y configuración simple de librerías**: Con PlatformIO, agregar y configurar librerías es un proceso directo, permitiendo personalización rápida para ajustarse a las necesidades específicas de tu proyecto.

:::info
Si eres nuevo en PlatformIO o buscas profundizar tu comprensión, puedes comenzar con estos recursos:

- [Cómo usar el IDE PlatformIO para programación Arduino](/es/Software-PlatformIO) – Una guía amigable para principiantes para comenzar.
- [Sitio web oficial de PlatformIO](https://platformio.org/) – Para instrucciones completas y detalladas.

:::

#### Servidor de red LoRaWAN (ChirpStack)

Esta sección proporciona orientación sobre cómo conectarse a un servidor de red LoRaWAN local, usando la plataforma [ChirpStack](https://www.chirpstack.io/) como nuestro ejemplo principal. Nos enfocaremos específicamente en usar el [Gateway Interior Multi-Plataforma LoRaWAN SenseCAP M2 (EU868)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) para este propósito.

:::info
Si no estás familiarizado con los siguientes pasos en ChirpStack, como:

- Crear un perfil de dispositivo
- Agregar una aplicación
- Registrar un dispositivo bajo una aplicación

Puedes aprender más de estos recursos:

- [Registrar el dispositivo en el servidor de red LoRaWAN](/es/SenseCAP_Indicator_Application_LoRaWAN/#21-configure-the-sensecap-lorawan-gateway)
- [Configuración LNS del Gateway SenseCAP M2 MP](/es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration)

*Lo haremos juntos en la siguiente sección*.
:::

:::tip
Para aquellos que prefieren plataformas alternativas como AWS IoT o TTN, consulta las siguientes guías:

- [Conectando a AWS IoT](/es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT/)
- [Conectando a TTN](/es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network/)

:::

## Trabajo preparatorio

Ahora, comencemos. Haremos las siguientes cosas.

### Red LoRaWAN

Para asegurar una comunicación exitosa con la red LoRaWAN a través de tu módulo Wio-E5, hay un par de aspectos clave que necesitas verificar:

1. **Cobertura LoRaWAN:**
   - Asegúrate de que tu dispositivo esté dentro del área de cobertura de una red LoRaWAN. Por ejemplo, en mi caso, el dispositivo está cubierto por un gateway M2 que opera en la banda de frecuencia EU868. Esto es crucial ya que el dispositivo necesita comunicarse con un gateway LoRaWAN cercano que soporte la misma banda de frecuencia.

2. **Enlace del Gateway al LNS:**
   - También es esencial confirmar que uno de estos gateways esté vinculado al Servidor de Red LoRaWAN (LNS) que pretendes usar. Esta vinculación es vital porque el gateway no solo actúa como un puente entre tu dispositivo Wio-E5 y el servidor de red, sino que también dicta la ruta que tomarán los datos de tu dispositivo para llegar al servidor.

#### Obtener Parámetros de Unión

Asumiendo que ya has configurado el servidor de red ChirpStack en la sección anterior, el siguiente paso es reunir los parámetros de unión de red necesarios. Estos parámetros son vitales para asegurar que tu dispositivo pueda unirse exitosamente y acceder a la red.

Para un tutorial paso a paso más detallado, por favor consulta la sección [Registrar el Dispositivo en el Servidor de Red LoRaWAN](/es/SenseCAP_Indicator_Application_LoRaWAN/#21-configure-the-sensecap-lorawan-gateway).

#### Agregar Perfil de Dispositivo

El módulo Wio-E5 está configurado por defecto para usar el Parámetro Regional *V102B*. Esta información está de acuerdo con la `sección 4.28.13 VER` de la [Especificación de Comandos AT Wio-E5](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf).

Consecuentemente, seleccionaremos `LoRaWAN 1.0.2` como la versión MAC y `RP002-1.0.2` para la revisión del Parámetro Regional.

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/device_profile.png"/>
</div>

Si necesitas usar Clase C para tu dispositivo, puedes activarla haciendo clic en el siguiente botón:

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/activate_class_c.png"/>
</div>

<!-- Información adicional de CodeC será agregada aquí -->

#### Agregar Aplicación

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/add_application.png"/>
</div>

#### Agregar Dispositivo

Debes llenar el Device EUI (EUI64) de tu información Device EUI (EUI64), esta sección lo está usando.
<!-- TBD -->

Si lo has cambiado, navega a esta [sección](#get_eui) para obtener el `DevAddr`, `DevEui`, `AppEui`.

Alternativamente, si prefieres usar un nuevo DevEUi, puedes regenerarlo y luego enviarlo.

<div align="center">
  <img class='border-radius: 10px;' width={520} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/add_device.png"/>
</div>

Y obtener el `AppKey`:

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/get_appKey.png"/>
</div>

:::note Información del Dispositivo
Hasta este punto, hemos obtenido las siguientes credenciales necesarias para la operación de unión con la red LoRaWAN:

- **DevEUI:** `2cf7f1205100a785`
- **AppKey:** `19aee7bedec56509a9c66a44b7956b6f`

Estas credenciales son esenciales para el registro seguro y la comunicación de tu dispositivo con la red LoRaWAN.
:::

:::tip ¿Por Qué No Necesitamos AppEUI?
En el contexto de LoRaWAN, DevEUI y AppKey juegan roles críticos en la identificación del dispositivo y la comunicación segura. El AppEUI, también conocido como JoinEUI en LoRaWAN 1.1 y versiones posteriores, se usa típicamente durante el proceso de unión del dispositivo para identificar la instancia del servidor de aplicación al cual el dispositivo debería conectarse. Sin embargo, en algunas configuraciones de red o con ciertas implementaciones de servidor de red, como The Things Network (TTN), el AppEUI puede no ser esencial o ya está predefinido. Este enfoque simplifica el proceso de configuración del dispositivo reduciendo el número de parámetros que necesitan ser configurados. Por lo tanto, basado en las especificidades de tu servidor de red y su configuración, el uso explícito de un AppEUI podría no ser necesario para el proceso de unión.
:::

## Práctica

#### Iniciando un Nuevo Proyecto de PlatformIO

Para comenzar, crearás un proyecto de PlatformIO. Sigue estos pasos:

1. **Abrir PlatformIO:** Comienza abriendo el IDE de PlatformIO en tu computadora.

2. **Crear un Nuevo Proyecto:** Ve al menú principal y selecciona **New Project**.

Aquí hay una imagen de ejemplo que muestra la creación de un nuevo proyecto en PlatformIO:

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/create_project.png"/>
</div>

Para este proyecto, elige **XIAO ESP32S3** como la placa de desarrollo.

Ejemplo de creación de proyecto para XIAO ESP32S3:

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/xiaos3_prj.png"/>
</div>

**Agregar Librerías Necesarias:**

Después de crear tu proyecto, necesitas incluir varias librerías que son esenciales para tu proyecto. Puedes agregar estas librerías a tu archivo `platformio.ini` para permitir que PlatformIO las descargue automáticamente:

```ini
[env:seeed_xiao_esp32s3]
platform = espressif32
board = seeed_xiao_esp32s3
framework = arduino
lib_deps = 
    olikraus/U8g2@^2.35.9
    plerup/EspSoftwareSerial@^8.2.0
    https://github.com/dok-net/ghostl # Issue Fix: https://github.com/plerup/espsoftwareserial/issues/305#issuecomment-1880188894
    seeed-studio/Grove Temperature And Humidity Sensor@^2.0.2
    seeed-studio/Grove LED Bar@^1.0.0
    https://github.com/andresoliva/LoRa-E5
```

Una vez que el Administrador de Bibliotecas de PlatformIO haya terminado de procesar tus solicitudes, podrás ver todas las bibliotecas que se han añadido a tu proyecto. Estas bibliotecas se almacenan en el directorio `.pio/libdeps/seeed_xiao_esp32s3`, específico para tu placa seleccionada, que en este caso es el Seeed XIAO ESP32S3.

Aquí tienes una imagen que muestra cómo se verá tu entorno de PlatformIO después de que las bibliotecas hayan sido añadidas exitosamente:

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/platformio_libraries.png"/>
</div>

En este directorio, encontrarás carpetas para cada biblioteca que especificaste en tu archivo `platformio.ini`. Estas carpetas contienen los archivos necesarios para cada biblioteca, como código fuente, ejemplos y metadatos adicionales.

Esta organización facilita la gestión y actualización de tus bibliotecas. PlatformIO maneja automáticamente la compatibilidad y resolución de dependencias, asegurando que tu proceso de desarrollo sea fluido y eficiente. También puedes actualizar o eliminar bibliotecas fácilmente usando el Administrador de Bibliotecas de PlatformIO, manteniendo tu entorno de desarrollo actualizado con las últimas versiones de las bibliotecas.

#### Unirse a la Red LoRaWAN (Pruebas)

En esta sección, utilizaremos [andresoliva/LoRa-E5](https://github.com/andresoliva/LoRa-E5) para controlar el Wio-E5 para unirse a la red LoRaWAN, en lugar de usar comandos AT manualmente.

```cpp
#include <Arduino.h>
#include <LoRa-E5.h> //main LoRa

#ifdef U8X8_HAVE_HW_SPI
    #include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
    #include <Wire.h>
#endif

// highlight-start
#if defined(ARDUINO_ARCH_AVR)
    #define serialLog Serial

#elif defined(ARDUINO_ARCH_SAMD) || defined(ARDUINO_ARCH_SAM)
    #define serialLog SerialUSB
#else
    #define serialLog Serial
#endif
// highlight-end

const int RXPin = D7, TXPin = D6; // Replace with your Wio-E5 RX,TX pin number

/************************LORA SET UP*******************************************************************/
#define LoRa_APPKEY           "19aee7bedec56509a9c66a44b7956b6f" /*Custom key for this App*/
#define LoRa_FREQ_standard    EU868                              /*International frequency band. see*/
#define LoRa_DR               DR4                                /*DR5=5.2kbps //data rate. see at https://www.thethingsnetwork.org/docs/lorawan/regional-parameters/    */
#define LoRa_DEVICE_CLASS     CLASS_C                            /*CLASS_A for power restriction/low power nodes. Class C for other device applications */
#define LoRa_PORT_BYTES       8                                  /*node Port for binary values to send, allowing the app to know it is recieving bytes*/
#define LoRa_PORT_STRING      7                                  /*Node Port for string messages to send, allowing the app to know it is recieving characters/text */
#define LoRa_POWER            14                                 /*Node Tx (Transmition) power*/
#define LoRa_CHANNEL          0                                  /*Node selected Tx channel. Default is 0, we use 2 to show only to show how to set up*/
#define LoRa_ADR_FLAG         false                              /*ADR(Adaptative Dara Rate) status flag (True or False). Use False if your Node is moving*/
/*Time to wait for transmiting a packet again*/
#define Tx_delay_s            9.5 /*delay between transmitions expressed in seconds*/
/*Packet information*/
#define PAYLOAD_FIRST_TX      10   /*bytes to send into first packet*/
#define Tx_and_ACK_RX_timeout 6000 /*6000 for SF12,4000 for SF11,3000 for SF11, 2000 for SF9/8/, 1500 for SF7. All examples consering 50 bytes payload and BW125*/
/*Buffers used to send*/
unsigned char buffer_binary[128] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20};
char          buffer_char[50]    = "I am sending this message to a LoRa Gateway."; /**/
/*******************************************************************/
/*Set up the LoRa module with the desired configuration */
void LoRa_setup(void) {
    lora.setDeviceMode(LWOTAA); /*LWOTAA or LWABP. We use LWOTAA in this example*/
    lora.setDataRate((_data_rate_t)LoRa_DR, (_physical_type_t)LoRa_FREQ_standard);
    lora.setKey(NULL, NULL, LoRa_APPKEY);                /*Only App key is seeted when using OOTA*/
    lora.setClassType((_class_type_t)LoRa_DEVICE_CLASS); /*set device class*/
    lora.setPort(LoRa_PORT_BYTES);                       /*set the default port for transmiting data*/
    lora.setPower(LoRa_POWER);                           /*sets the Tx power*/
    lora.setChannel(LoRa_CHANNEL);                       /*selects the channel*/
    lora.setAdaptiveDataRate(LoRa_ADR_FLAG);             /*Enables adaptative data rate*/
}

void setup() {
    serialLog.begin(9600);
    while (!serialLog)
        ; // Wait until Serial is ready
    lora.init(TXPin, RXPin);
    /*set up device. You must set up all your parameters BEFORE Joining.
     If you make any change (outside channel or port setup), you should join again the network for proper working*/
    LoRa_setup();
    /*Enters in a while Loop until the join process is completed*/
    serialLog.println("Waiting to join the network...");
    while (lora.setOTAAJoin(JOIN, 10000) == 0)
        ; // will attempt to join network until the ends of time. https://www.thethingsnetwork.org/docs/lorawan/message-types/
    /*POWER DOWN the LoRa module until next Tx (Transmition) cicle*/
    lora.setDeviceLowPower();
    serialLog.println("Joining network successful!");
}

void loop() {

    /*Wake Up the LoRa module*/
    lora.setDeviceWakeUp(); /*if the module is not in sleep state, this command does nothing*/

    /*-----------sending a string message*/
    lora.setPort(LoRa_PORT_STRING); /*set port configured in reception Gateway for expecting Strings*/
    lora.transferPacketWithConfirmed(buffer_char, Tx_and_ACK_RX_timeout);
    /*--------sending bytes message*/
    lora.setPort(LoRa_PORT_BYTES); /*set port configured in reception Gateway for expecting bytes*/
    lora.transferPacketWithConfirmed(buffer_binary, PAYLOAD_FIRST_TX, Tx_and_ACK_RX_timeout);

    /*POWER DOWN the LoRa module until next Tx Transmition (Tx) cicle*/
    lora.setDeviceLowPower();
    delay((unsigned int)(Tx_delay_s*1000));/*Convert the value in seconds to miliseconds*/
}
```

Construyamos y flasheémoslo a la placa.

<!-- <div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/build_flash.png"/>
</div> -->

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/flash_success_lorawan_test.png"/>
</div>

<!-- add a flag to build and flash -->

Ahora podemos ver que aparece el mensaje, y podemos ver que hay dos mensajes ahí:

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/lorawan_event_package.png"/>
</div>

es fácil entender los datos `00010203040506070809`, que provienen del array `buffer_binary`.

también aparecen datos: `SSBhbSBzZW5kaW5nIHRoaXMgbWVzc2FnZSB0byBhIExvUmEgR2F0ZXdheS4=`, ¿qué significa eso? ya que el paquete está codificado en base64.
podemos utilizar el [decodificador base64](https://emn178.github.io/online-tools/base64_decode.html) para ver la cadena.

<div style={{ textAlign: 'center' }}>

<img class='border-radius: 10px;' width={420} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/lorawan_string_decode.png" alt="decode " />
<div style={{ marginTop: '-8px' }}><em><a href="https://emn178.github.io/online-tools/base64_decode.html?input=SSBhbSBzZW5kaW5nIHRoaXMgbWVzc2FnZSB0byBhIExvUmEgR2F0ZXdheS4%3D">🖱️ Haz clic aquí para decodificar</a></em></div>

</div>

Sí, proviene del array `buffer_char`: `I am sending this message to a LoRa Gateway`.

## Solución de problemas

### P1: Problema con la librería Grove_LED_Bar

Si estás experimentando problemas con la librería Grove_LED_Bar, añade las siguientes definiciones de macro al inicio del archivo `Grove_LED_Bar.cpp`:

```cpp
#include "Grove_LED_Bar.h"
// Add these macros to resolve conflicts
// highlight-start
#define max(a, b) (((a) > (b)) ? (a) : (b))
#define min(a, b) (((a) < (b)) ? (a) : (b))
// highlight-end
```

Este código define las macros `max` y `min`, que pueden ayudar a solucionar errores de compilación relacionados con estas funciones en la biblioteca.

## Recursos

- [Grove - Wio-E5 | Wiki](/es/Grove_LoRa_E5_New_Version/)
- [Especificación de Comandos AT Wio-E5](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)

#### Biblioteca LoRaE5

Hay varias bibliotecas disponibles para el módulo Wio E5:

- [andresoliva/LoRa-E5](https://github.com/andresoliva/LoRa-E5)
- [idreamsi/LoRaE5](https://github.com/idreamsi/LoRaE5)
- [disk91/Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5)

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
