---
description: Introducción a Arduino
title: Introducción a Arduino
keywords:
- Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Arduino
last_update:
  date: 7/19/2023
  author: Matthew
---
<!-- ---
name: Introducción a Arduino
nointro:
--- -->

## ¿Qué es Arduino?

Arduino es una plataforma versátil con múltiples facetas, cada una sirviendo diferentes roles en el desarrollo e implementación de hardware y software para varios proyectos. A continuación se presenta un desglose de los diferentes significados y componentes asociados con Arduino:

### 1. **Placa Arduino**

- **Descripción**: Arduino se refiere principalmente a las placas físicas que se utilizan para construir dispositivos digitales y objetos interactivos que pueden detectar y controlar objetos en el mundo físico.
- **Utilidad**: Estas placas son ampliamente utilizadas en proyectos de prototipado en electrónica y son favorecidas por su facilidad de uso y naturaleza de código abierto.
- **Proveedores**: [**Seeed Studio**](https://www.seeedstudio.com/catalogsearch/result/?q=arduino), [**Arduino Oficial**](https://store-usa.arduino.cc/?selectedStore=us).

### 2. **Software Arduino (IDE)**

- **Descripción**: Arduino IDE (Entorno de Desarrollo Integrado) es el software utilizado para escribir y cargar programas al hardware de Arduino.
- **Utilidad**: Proporciona una forma conveniente de programar las placas, simplificando el proceso de codificación y reduciendo la necesidad de conocimientos detallados de electrónica.
- **Descarga**: [**Arduino Oficial**](https://www.arduino.cc/en/software).

### 3. **Cadena de Herramientas Arduino**

- **Descripción**: Cuando instalas el IDE de Arduino, automáticamente instala un conjunto de herramientas conocidas como la cadena de herramientas. Esto incluye compiladores, bibliotecas y otras herramientas necesarias para traducir el código que escribes a un formato que las placas Arduino pueden ejecutar.
- **Utilidad**: La cadena de herramientas simplifica el proceso de instalación automatizando la configuración de compiladores y otras herramientas necesarias.

### 4. **Bibliotecas Arduino**

- **Descripción**: Estas son colecciones de código preescrito que facilitan el control de hardware complejo o la realización de tareas comunes.
- **Utilidad**: Las bibliotecas proporcionan una forma simple de interfaz con hardware, pero a veces pueden ser ineficientes y limitar el acceso a características del hardware debido a su abstracción de alto nivel.
- **GitHub**: [**Seeed Studio**](https://github.com/Seeed-Studio), [**Arduino Oficial**](https://github.com/arduino), [**Adafruit**](https://github.com/adafruit).

### 5. **Bootloader Arduino**

- **Descripción**: Un pequeño programa que reside en la placa Arduino que te permite cargar nuevo código sin el uso de un programador de hardware externo.
- **Utilidad**: Simplifica el proceso de cargar nuevo código a la placa directamente desde el IDE de Arduino.

### 6. **Conectores Arduino**

- **Descripción**: Estos se refieren a la configuración física de los pines conectores en las placas Arduino.
- **Utilidad**: Permiten la conexión de varios shields compatibles (placas de expansión) u otros dispositivos para extender la funcionalidad de una placa Arduino.
- **Shields Arduino**: [**Seeed Studio**](https://www.seeedstudio.com/catalogsearch/result/?q=arduino%20shield), [**Arduino Oficial**](https://search.arduino.cc/search?q=shield&tab=store).

## Programación en Arduino

- **Lenguaje**: El lenguaje de programación principal utilizado en el IDE de Arduino es C/C++, aunque a menudo se refiere simplemente como código Arduino o sketches.
- **Sketches**: Estos son programas de Arduino que se escriben en el IDE. Utilizan las librerías de Arduino y pueden usarse para controlar el comportamiento de la placa basado en las entradas y salidas definidas.

### Descarga del IDE de Arduino

Para cada placa compatible con Arduino, podrías necesitar el IDE de Arduino para subir el código, verificar si la placa está funcionando bien y habilitar cada aplicación.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descargar IDE de Arduino</font></span></strong></a>
</div>

### Cómo instalar una librería de Arduino

Hemos proporcionado un tutorial sobre cómo instalar una librería de Arduino. Debes notar que casi todas nuestras librerías están almacenadas en [Github](https://github.com/Seeed-Studio). Proporcionaremos librerías de Arduino cuando un producto necesite una librería, como [CAN-BUS Shield V2](https://github.com/Seeed-Studio/Seeed_Arduino_CAN). Pero para algunos otros productos simples, no hay necesidad de escribir una librería como Grove - Button.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/"><strong><span><font color={'FFFFFF'} size={"4"}>Cómo instalar una Librería de Arduino</font></span></strong></a>
</div>

### Cómo Subir Código

Aquí tenemos otro tutorial para subir el código:

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/"><strong><span><font color={'FFFFFF'} size={"4"}>Cómo subir el código</font></span></strong></a>
</div>

### Más Tutoriales de Cómo Hacer

- [Cómo Instalar una Librería de Arduino](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library)
- [Cómo Usar y Escribir una Librería](https://wiki.seeedstudio.com/es/How_to_use_and_write_a_library)
- [Cómo Subir Código](https://wiki.seeedstudio.com/es/Upload_Code)
- [Cómo Usar un Editor Externo](https://wiki.seeedstudio.com/es/Use_External_Editor)
- [Cómo Usar Demos Descargados del Github de Seeed](https://wiki.seeedstudio.com/es/Guide_to_use_demos_downloaded_from_Seeed-s_Github)

- [Cómo Usar Sketchbook](https://wiki.seeedstudio.com/es/How_To_Use_Sketchbook)
- [Cómo Usar Sketchbook del Kit Avanzado Sidekick](https://wiki.seeedstudio.com/es/Sketchbook_of_Sidekick_Advanced_Kit)

- [Cómo Usar Software Serial](https://wiki.seeedstudio.com/es/Software-Serial)
- [Cómo Usar Software I2C](https://wiki.seeedstudio.com/es/Arduino_Software_I2C_user_guide)
- [Cómo Usar Software SPI](https://wiki.seeedstudio.com/es/Software-SPI)
- [Cómo Usar Librería Estática de Software](https://wiki.seeedstudio.com/es/Software-Static-Library)
- [Cómo Manejar Errores Comunes de Arduino](https://wiki.seeedstudio.com/es/Arduino_Common_Error)

- [Cómo Elegir un Sensor de Gas](https://wiki.seeedstudio.com/es/How-to-Choose-A-Gas-Sensor)
- [Cómo Elegir Diferentes Sensores de Temperatura Grove](https://wiki.seeedstudio.com/es/A_Comparison_of_Different_Grove_Temperature_Sensors)
- [Cómo Elegir Módulos GPS](https://wiki.seeedstudio.com/es/GPS-Modules-Selection-Guide)
- [Cómo Elegir Toque de Dedo](https://wiki.seeedstudio.com/es/How_to_detect_finger_touch)
- [Cómo Elegir Relé Seeed](https://wiki.seeedstudio.com/es/Seeed_Relay_Page)
- [Cómo Elegir Sensor de Barómetro](https://wiki.seeedstudio.com/es/Barometer-Selection-Guide)

- [Cómo Elegir el Cable Correcto](https://wiki.seeedstudio.com/es/How_To_Choose_The_Right_Cable)

### Tutoriales Más Avanzados

- [Suli](https://wiki.seeedstudio.com/es/Suli)
- [Cómo Usar Seeed Arduino Serial](https://wiki.seeedstudio.com/es/Seeed_Arduino_Serial)
- [Cómo Usar I2C y Dirección I2C de Productos Seeed](https://wiki.seeedstudio.com/es/I2C_And_I2C_Address_of_Seeed_Product)
- [Cómo Usar ODYSSEY-X86J4105 con Firmata](https://wiki.seeedstudio.com/es/ODYSSEY-X86J4105-Firmata)
- [Cómo Depurar Placas Arduino usando Interfaz SWD](https://wiki.seeedstudio.com/es/Software-SWD)
- [Cómo Conectar Broker MQTT Mosiquitto a AWS IoT con Placas Arduino](https://wiki.seeedstudio.com/es/Arduino-AWS-IOT-Bridge)
- [Cómo usar Placas Arduino como Dispositivo DAPLink](https://wiki.seeedstudio.com/es/Arduino-DAPLink)
- [Cómo Flashear Bootloader de Arduino Usando DAPLink](https://wiki.seeedstudio.com/es/Flashing-Arduino-Bootloader-DAPLink)
- [Cómo Entender el Mapeo de Pines IO de Xadow](https://wiki.seeedstudio.com/es/Xadow_IO_pin_mapping)

## Arduino Cores

- **Propósito**: Los cores de Arduino permiten que el IDE de Arduino se comunique con diferentes tipos de microcontroladores. Adaptan los comandos estándar de Arduino a las especificidades del hardware subyacente.
- **Ejemplos**: Existen diferentes cores para microcontroladores como RP2040, ESP32, ESP8266, y otros más tradicionales como AVR y SAMD. Algunos cores son mantenidos por la comunidad, asegurando soporte y actualizaciones para una amplia gama de dispositivos.

### Placas compatibles con Arduino

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/xiao_topicpage/main.png" style={{width:1000, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>La Serie Seeed Studio XIAO consta de 7 versiones para satisfacer las diversas necesidades de makers, diseñadores de productos,
y educadores. Si eres un maker, puedes aprovechar sus ricos recursos comunitarios para obtener inspiración y conocimiento para tus propios proyectos. La Serie XIAO ofrece a los educadores un curso integral de introducción y wikis detallados para aprender rápidamente cómo usar XIAO para sus proyectos. Si eres un diseñador de productos, el Manual de Usuario XIAO SoM cubre todo desde la Selección de Módulos hasta la Producción en Masa. <br /> </font>
    </div>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=xiao" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Consigue Uno Ahora </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/SeeedStudio_XIAO_Series_Introduction/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Conoce Más</font></span></strong></a>
</div>

<br />

<br />

<div class="all_container">
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>El Wio Terminal es un microcontrolador basado en SAMD51 con Conectividad Inalámbrica alimentado por Realtek RTL8720DN que es compatible con Arduino y MicroPython. Actualmente, la conectividad inalámbrica solo es compatible con Arduino. Funciona a 120MHz (Acelera hasta 200MHz), 4MB de Flash Externa y 192KB de RAM. Soporta tanto Bluetooth como Wi-Fi proporcionando la base para proyectos IoT. <br /> </font>
    </div>
        <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" style={{width:1000, height:'auto'}}/>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-p-4509.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Consigue Uno Ahora </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Wio Terminal</font></span></strong></a>
</div>

<br />
<br />

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png" style={{width:1000, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SenseCAP Indicator es una pantalla táctil de 4 pulgadas impulsada por ESP32 y RP2040 dual-MCU y soporta comunicación Wi-Fi/BLE/LoRa®. Es una plataforma de desarrollo IoT poderosa y completamente de código abierto para desarrolladores. El servicio ODM Fusion integral también está disponible para personalización y escalado rápido. <br /> </font>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Consigue Uno Ahora </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Develop_with_SenseCAP_Indicator/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚SenseCAP Indicator</font></span></strong></a>
</div>

#### Más

Más en [Seeed Studio Bazaar](https://www.seeedstudio.com/catalogsearch/result/?q=arduino).

### Arduino Shield(placas de extensión)

- [Grove Base V2](https://wiki.seeedstudio.com/es/Base_Shield_V2/)
- [CAN-BUS Shield V2.0](https://wiki.seeedstudio.com/es/CAN-BUS_Shield_V2.0/)
- [Relay Shield v3](https://wiki.seeedstudio.com/es/Relay_Shield_v3/)
- [W5500 Ethernet Shield v1.0](https://wiki.seeedstudio.com/es/W5500_Ethernet_Shield_v1.0/)
- [Small e-Paper Shield V2](https://wiki.seeedstudio.com/es/Small_e-Paper_Shield_V2/)
- [Spartan Edge Accelerator Board](https://wiki.seeedstudio.com/es/Spartan-Edge-Accelerator-Board/)
- [Grove Shield for Arduino Nano](https://wiki.seeedstudio.com/es/Grove_Shield_for_Arduino_Nano/)
- Más en [Seeed Studio Bazaar](https://www.seeedstudio.com/catalogsearch/result/?q=arduino%20shields).

### Kit con Cursos

- [Grove Beginner Kit for Arduino](https://wiki.seeedstudio.com/es/Grove-Beginner-Kit-For-Arduino/)
- [Rainbow Cube kit- RGB 4X4X4 (Rainbowduino Compatible)](https://wiki.seeedstudio.com/es/Rainbow_Cube_kit_RGB_4_4_4_Rainbowduino_Compatible/)
- [Grove Creator Kit for Arduino](https://wiki.seeedstudio.com/es/Grove-Creator-Kit-1/)

## ✨ Proyecto de Colaboradores

- Esta página es actualizada por el [Proyecto de Colaboradores de Seeed Studio](https://github.com/orgs/Seeed-Studio/projects/6).
- ¡Gracias a [los esfuerzos de Elizabeth](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=33963525) y tu trabajo será exhibido!

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
