---
description: Página wiki de características para la serie XIAO.
title: Exhibición para la Serie XIAO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_topic_page
last_update:
  date: 07/04/2023
  author: Citric
---

# EXHIBICIÓN DE Seeed Studio XIAO

[La serie Seeed Studio XIAO](https://www.seeedstudio.com/xiao-series-page), nombrada por la palabra china para "pequeño", comprende pequeñas placas de desarrollo basadas en varias plataformas de hardware de ESP32, SAMD21, RP2040, nRF52840, RP2350 y RA4M1, MG24. Estas placas del tamaño de una uña empaquetan capacidades poderosas en un factor de forma compacto.

Nuestro equipo junto con la comunidad, ha creado una rica colección de wikis, aplicaciones y documentación para facilitar el uso y desarrollo. Para hacer más eficiente para toda la comunidad localizar estos documentos útiles, los estamos agrupando en esta página como un índice para que puedas localizar rápidamente el que estás buscando.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/xiao_topicpage/compatible_software.jpg" /></div>

No podemos hacerlo sin el amor y la contribución que recibimos de la comunidad, y si quieres contribuir a este ecosistema vibrante (para llenar las partes en blanco), damos la bienvenida a [tus propias contribuciones de tu desarrollo único para inspirar a otros en la comunidad también](https://wiki.seeedstudio.com/es/Contribution-Guide/).

## Tabla de Contenidos

<div align="center">
   <div style={{width: "auto", height: 450, overflowY: 'scroll', border: '1px solid #ccc', padding: '10px', textAlign: 'left',}}>
 <ul>
  <li><a href="#product_guides"><strong>Guías de Productos (Primeros Pasos, Uso de Pines y más)</strong></a></li>
  <ul>
  <li><a href="#xiao_samd21"><strong>XIAO SAMD21</strong></a></li>
  <li><a href="#xiao_rp2040"><strong>XIAO RP2040</strong></a></li>
  <li><a href="#xiao_nrf52840_(sense)"><strong>XIAO nRF52840 (Sense)</strong></a></li>
  <li><a href="#xiao_esp32c3"><strong>XIAO ESP32C3</strong></a></li>
  <li><a href="#xiao_esp32s3_(sense)"><strong>XIAO ESP32S3 (Sense)</strong></a></li>
  <li><a href="#xiao_esp32c6"><strong>XIAO ESP32C6</strong></a></li>
  <li><a href="#xiao_rp2350"><strong>XIAO RP2350</strong></a></li>
  <li><a href="#xiao_ra4m1"><strong>XIAO RA4M1</strong></a></li>
  <li><a href="#xiao_mg24_(sense)"><strong>XIAO MG24 (Sense)</strong></a></li>
  </ul>
  <li><a href="#supported_languages/platforms"><strong>Lenguajes/Plataformas Soportados</strong></a></li>
  <ul>
  <li><a href="#platformio"><strong>PlatformIO</strong></a></li>
  <li><a href="#micropython"><strong>MicroPython</strong></a></li>
  <li><a href="#circuitpython"><strong>CircuitPython</strong></a></li>
  <li><a href="#embedded_swift"><strong>Embedded Swift</strong></a></li>
  <li><a href="#esp_idf"><strong>ESP IDF</strong></a></li>
  <li><a href="#rust"><strong>Rust</strong></a></li>
  <li><a href="#tinygo"><strong>TinyGo</strong></a></li>
  <li><a href="#microblocks"><strong>MicroBlocks</strong></a></li>
  <li><strong>Lua</strong></li>
  <li><strong>Lenguajes de Programación Gráfica</strong></li>
  </ul>
  <li><a href="#supported_rtos"><strong>RTOS Soportados</strong></a></li>
  <ul>
  <li><a href="#zephyr"><strong>Zephyr</strong></a></li>
  <li><a href="#freertos"><strong>FreeRTOS</strong></a></li>
  <li><a href="#apache_nuttx_rtos"><strong>Apache NuttX RTOS</strong></a></li>
  </ul>
  <li><a href="#communications"><strong>Comunicaciones</strong></a></li>
  <ul>
  <li><a href="#apache_kafka"><strong>Apache Kafka</strong></a></li>
  <li><a href="#matter"><strong>Matter</strong></a></li>
  <li><a href="#zigbee"><strong>Zigbee</strong></a></li>
  <li><a href="#espnow"><strong>ESP-NOW</strong></a></li>
  <li><a href="#meshtastic"><strong>Meshtastic</strong></a></li>
  <li><a href="#amazon_sidewalk"><strong>Amazon Sidewalk</strong></a></li>
  <li><a href="#blecon"><strong>Blecon</strong></a></li>
  <li><a href="https://github.com/marvinroger/async-mqtt-client" target="_blank"><strong>ESP32-MQTT</strong></a></li>
  </ul>
  <li><a href="#tinyml/embedded_machine_learningtinyml"><strong>Plataformas de TinyML/Aprendizaje Automático Embebido</strong></a></li>
  <ul>
  <li><a href="#sensecraft_ai"><strong>SenseCraft AI</strong></a></li>
  <li><a href="#tensorflow_lite"><strong>TensorFlow Lite</strong></a></li>
  <li><a href="#edge_impulse"><strong>Edge Impulse</strong></a></li>
  </ul>
  <li><a href="#smart_home_and_automation"><strong>Hogar Inteligente y Automatización</strong></a></li>
  <ul>
  <li><a href="#home_assistant_esphome"><strong>Home Assistant & ESPHome</strong></a></li>
  <li><strong>OpenHAB</strong></li>
  <li><a href="#tasmota"><strong>Tasmota</strong></a></li>
  </ul>
  <li><a href="#open_source_keyboard_firmware_support"><strong>Soporte de Firmware de Teclado de Código Abierto</strong></a></li>
  <ul>
  <li><a href="#qmk"><strong>QMK</strong></a></li>
  <li><a href="#zmk"><strong>ZMK</strong></a></li>
  </ul>
  <li><a href="#other_hot_applications"><strong>Otras Aplicaciones Populares</strong></a></li>
  <ul>
  <li><a href="#wled"><strong>WLED</strong></a></li>
  <li><a href="#chatgpt"><strong>ChatGPT</strong></a></li>
  <li><a href="#ffmpeg"><strong>FFmpeg</strong></a></li>
  <li><strong>OpenHD</strong></li>
  <li><strong>ESP32Cam</strong></li>
  <li><a href="#mros2_esp32"><strong>mROS2-ESP32</strong></a></li>
  </ul>
  <li><a href="#prototyping_tools_pcb_layout_stimulation"><strong>Herramientas de Prototipado (Diseño de PCB y Simulación)</strong></a></li>
  <ul>
  <li><a href="#fritzing"><strong>Fritzing</strong></a></li>
  <li><a href="#fluxai"><strong>FluxAI</strong></a></li>
  <li><a href="#wokwi"><strong>Wokwi</strong></a></li>
  </ul>
  <li><a href="#iot_clouds_and_iot_platforms"><strong>Nubes IoT y Plataformas IoT</strong></a></li>
  <ul>
  <li><a href="#aws_iot"><strong>AWS IoT</strong></a></li>
  <li><strong>Azure IoT</strong></li>
  <li><a href="#thingspeak"><strong>ThingSpeak</strong></a></li>
  <li><a href="#ubidots"><strong>Ubidots</strong></a></li>
  <li><strong>Blynk</strong></li>
  <li><strong>Losant</strong></li>
  <li><strong>InfluxDB</strong></li>
  </ul>
 </ul>
 </div>
</div>

## <span id="product_guides">Guías de Productos</span>

<br></br>

<span id="xiao_samd21"><strong><font size={"4"}>XIAO SAMD21</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/Seeeduino-XIAO/" target="_blank">Wiki de Primeros Pasos</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/Seeeduino-XIAO-by-Nanase/" target="_blank">Uso de Pines</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/Seeeduino-XIAO-by-Nanase/" target="_blank">IOBUS de Ciclo Único</a> por <a href="https://twitter.com/nanase_coder" target="_blank">@nanase_coder</a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_rp2040"><strong><font  size={"4"}>XIAO RP2040</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/#getting-started" target="_blank">Wiki de Primeros Pasos</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/#pin-multuiplexing-on-the-seeed-studio-xiao-rp2040" target="_blank">Uso de Pines</a></th>
   <th style={{width:333, height:'auto'}}></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_nrf52840_(sense)"><strong><font  size={"4"}>XIAO nRF52840 (Sense)</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO_BLE/" target="_blank">Wiki de Primeros Pasos</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO-BLE-Sense-Pin-Multiplexing/" target="_blank">Uso de Pines</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO-BLE-Sense-IMU-Usage/" target="_blank">Uso de IMU de 6 Ejes</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO-BLE-Sense-PDM-Usage/" target="_blank">Uso de PDM</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao-ble-qspi-flash-usage/" target="_blank">Flash QSPI</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO-BLE-Sense-NFC-Usage/" target="_blank">Uso de NFC</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO-BLE-Sense-Bluetooth_Usage/" target="_blank">Librería Bluetooth (Seeed nRF52)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO-BLE-Sense-Bluetooth-Usage/" target="_blank">Librería Bluetooth (Seeed nRF52 mbed)</a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_esp32c3"><strong><font  size={"4"}>XIAO ESP32C3</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started/" target="_blank">Wiki de Primeros Pasos</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Pin_Multiplexing/" target="_blank">Uso de Pines</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO_ESP32C3_WiFi_Usage/" target="_blank">Uso de Wi-Fi</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Bluetooth_Usage/" target="_blank">Uso de Bluetooth</a></th>
   <th style={{width:333, height:'auto'}}></th>
            <th style={{width:333, height:'auto'}}></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_esp32s3_(sense)"><strong><font  size={"4"}>XIAO ESP32S3 (Sense)</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started/" target="_blank">Wiki de Primeros Pasos</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32s3_pin_multiplexing/" target="_blank">Uso de Pines</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32s3_wifi_usage/" target="_blank">Uso de Wi-Fi</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32s3_bluetooth/" target="_blank">Uso de Bluetooth</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO_ESP32S3_Consumption/" target="_blank">Modos de Suspensión</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32s3_sense_mic/" target="_blank">Uso del Micrófono</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32s3_camera_usage/" target="_blank">Uso de la Cámara</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32s3_sense_filesystem/" target="_blank">Tarjeta MicroSD</a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_esp32c6"><strong><font  size={"4"}>XIAO ESP32C6</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32c6_getting_started/" target="_blank">Wiki de Introducción</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_pin_multiplexing_esp33c6/" target="_blank">Uso de Pines</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_wifi_usage_esp32c6/" target="_blank">Uso de Wi-Fi</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32c6_bluetooth/" target="_blank">Uso de Bluetooth</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_rp2350"><strong><font  size={"4"}>XIAO RP2350</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/getting-started-xiao-rp2350/" target="_blank">Wiki de Introducción</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank">Uso de Pines</a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_ra4m1"><strong><font  size={"4"}>XIAO RA4M1</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/getting_started_xiao_ra4m1/" target="_blank">Wiki de Introducción</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_ra4m1_pin_multiplexing/" target="_blank">Uso de Pines</a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_mg24_(sense)"><strong><font  size={"4"}>XIAO MG24 (Sense)</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_mg24_getting_started/" target="_blank">Wiki de Introducción</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank">Uso de Pines</a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

## <span id="supported_languages/platforms">Lenguajes/Plataformas Compatibles</span>

<br></br>
<div><a href="https://platformio.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/platformio.png" style={{width:'auto', height:50}} /></a></div>

<span id="platformio"><strong><a href="https://platformio.org/" target="_blank">PlatformIO</a></strong></span>, la solución de IDE más querida para Microsoft Visual Studio Code.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/stable/boards/atmelsam/seeed_xiao.html" target="_blank">XIAO SAMD21 (Seeeduino XIAO)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_nrf52840_with_platform_io/" target="_blank">XIAO nRF52840 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html" target="_blank">XIAO ESP32C3</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32c6_with_platform_io/" target="_blank">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32s3.html" target="_blank">XIAO ESP32S3 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://taunoerik.art/2023/05/15/start-seeed-xiao-rp2040-on-platformio/" target="_blank">XIAO RP2040</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_rp2350_with_platform_io/" target="_blank">XIAO RP2350</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_mg24_with_platform_io/" target="_blank"> XIAO MG24 (Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_ra4m1_with_platform_io/" target="_blank">XIAO RA4M1</a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://micropython.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/micropython.png" style={{width:'auto', height:50}} /></a></div>

<span id="micropython"><strong><a href="https://micropython.org/" target="_blank">MicroPython</a></strong></span>, una implementación completa del lenguaje de programación Python 3 que se ejecuta directamente en hardware embebido.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO-SAMD21-MicroPython/" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO-RP2040-with-MicroPython/" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32c3_with_micropython/" target="_blank">XIAO ESP32C3</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32s3_with_micropython/" target="_blank">XIAO ESP32S3 (Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO_ESP32S3_Micropython/" target="_blank">XIAO ESP32S3 Sense Únicamente (Cámara, Wi-Fi)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://micropython.org/download/SEEED_XIAO_NRF52/" target="_blank">XIAO nRF52840 Sense</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32c6_micropython/" target="_blank">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://micropython.org/download/SEEED_XIAO_RP2350/" target="_blank">XIAO RP2350</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_micropython/" target="_blank">XIAO nRF54L15</a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://circuitpython.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/circuitpython.png" style={{width:'auto', height:50}} /></a></div>

<span id="circuitpython"><strong><a href="https://circuitpython.org/" target="_blank">CircuitPython</a></strong></span>, un lenguaje de programación diseñado para simplificar la experimentación y el aprendizaje de programación en placas de microcontroladores de bajo costo.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/Seeeduino-XIAO-CircuitPython/" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO-RP2040-with-CircuitPython/" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO-BLE_CircutPython/" target="_blank">XIAO nRF52840 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32c3_with_circuitpython/" target="_blank">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32s3_project_circuitpython/" target="_blank">XIAO ESP32S3 Sense</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32c6_with_circuitpython/" target="_blank">XIAO ESP32C6</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://circuitpython.org/board/seeeduino_xiao_rp2350/" target="_blank">XIAO RP2350</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.swift.org/getting-started/embedded-swift/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/swift.png" style={{width:'auto', height:50}} /></a></div>

<span id="embedded_swift"><strong><a href="https://www.swift.org/getting-started/embedded-swift/" target="_blank">Embedded Swift</a></strong></span>, un lenguaje escalable, excelente para escribir aplicaciones de escritorio y móviles, backends de servidor y software de sistema, ejecutándose en microcontroladores
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
    <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao-esp32-swift/" target="_blank">XIAO ESP32C6</a></th>
    <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
    <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://idf.espressif.com/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/espressif.png" style={{width:'auto', height:50}} /></a></div>

<span id="esp_idf"><a href="https://idf.espressif.com/" target="_blank"><strong>ESP IDF</strong></a></span>, el marco de desarrollo IoT oficial de Espressif para las series ESP32, ESP32-S y ESP32-C de SoCs, proporcionando un SDK autosuficiente para cualquier desarrollo de aplicaciones genéricas en estas plataformas, utilizando lenguajes de programación como C y C++.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_idf/" target="_blank">Serie XIAO ESP32 (Primeros Pasos)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/getting_started_with_matter/" target="_blank">Desarrollo Matter 1</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32_matter_env/" target="_blank">Desarrollo Matter 2</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/matter_development_framework/" target="_blank">Desarrollo Matter 3</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.rust-lang.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/rust.png" style={{width:'auto', height:50}} /></a></div>

<span id="rust"><strong><a href="https://www.rust-lang.org/" target="_blank">Rust</a></strong></span>, un lenguaje que empodera a todos para construir software confiable y eficiente.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/atsamd-rs/atsamd/tree/master/boards/xiao_m0" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://tutoduino.fr/en/tutorials/programing-in-rust-the-xiao-rp2040-board/" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://forum.seeedstudio.com/t/rust-on-xiao-esp32s3/276724" target="_blank">XIAO ESP32S3 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Wumpf/Seeed-nRF52840-Sense-projects" target="_blank">XIAO nRF52840 (Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://tinygo.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tinygo.png" style={{width:'auto', height:50}} /></a></div>

<span id="tinygo"><strong><a href="https://tinygo.org/" target="_blank">TinyGo</a></strong></span>, un compilador de Go destinado para uso en lugares pequeños como microcontroladores, WebAssembly (wasm/wasi) y herramientas de línea de comandos.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://tinygo.org/docs/reference/microcontrollers/xiao/" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://tinygo.org/docs/reference/microcontrollers/xiao-ble/" target="_blank">XIAO nRF52840 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://tinygo.org/docs/reference/microcontrollers/xiao-rp2040/" target="_blank">XIAO RP2040</a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://microblocks.fun/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/microblocks.png" style={{width:'auto', height:50}} /></a></div>

<span id="microblocks"><strong><a href="https://microblocks.fun/" target="_blank">MicroBlocks</a></strong></span>, un lenguaje de programación por bloques para computación física inspirado en Scratch.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_samd21_microblocks" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_rp2040_microblocks" target="_blank">XIAO RP2040</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_rp2350_microblocks" target="_blank">XIAO RP2350</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_ble_microblocks" target="_blank">XIAO nRF52840</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32c3_microblocks" target="_blank">XIAO ESP32-C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32s3_microblocks" target="_blank">XIAO ESP32-S3</a></th>
  </tr>
 </table>
</div>

## <span id="supported_rtos">RTOS Compatibles</span>

<br></br>
<div><a href="https://docs.zephyrproject.org/latest/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr.png" style={{width:'auto', height:70}} /></a></div>

<span id="zephyr"><strong><a href="https://docs.zephyrproject.org/latest/" target="_blank">Zephyr</a></strong></span>, un sistema operativo en tiempo real (RTOS) escalable que soporta múltiples arquitecturas de hardware, optimizado para dispositivos con recursos limitados y construido con la seguridad en mente.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO-SAMD21-Zephyr-RTOS/" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO-RP2040-Zephyr-RTOS/" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO-nRF52840-Zephyr-RTOS/" target="_blank">XIAO nRF52840 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO-ESP32C3-Zephyr/" target="_blank">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32s3_zephyr_rtos/" target="_blank">XIAO ESP32S3 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32c6/doc/index.html" target="_blank">XIAO ESP32C6</a></th>  
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://docs.zephyrproject.org/latest/boards/seeed/xiao_ra4m1/doc/index.html" target="_blank">XIAO RA4M1</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://docs.zephyrproject.org/latest/boards/seeed/xiao_mg24/doc/index.html" target="_blank">XIAO MG24</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.freertos.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/1.png" style={{width:'auto', height:50}} /></a></div>

<span id="freertos"><strong><a href="https://www.freertos.org/" target="_blank">FreeRTOS</a></strong></span>, sistema operativo en tiempo real para microcontroladores y pequeños microprocesadores.
<br></br>
<br></br>
<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}>XIAO SAMD21</th>
   <th style={{width:333, height:'auto'}}>XIAO nRF52840</th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao-esp32s3-freertos/" target="_blank">XIAO ESP32S3 (Sense)</a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://nuttx.apache.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/nuttxrtos.png" style={{width:'auto', height:80}} /></a></div>

<span id="apache_nuttx_rtos"><strong><a href="https://nuttx.apache.org/" target="_blank">Apache NuttX RTOS</a></strong></span>, un sistema operativo en tiempo real (RTOS) con énfasis en el cumplimiento de estándares y huella pequeña
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/samd2l2/boards/xiao-seeeduino/index.html" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao-rp2040-with-nuttx/" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/nrf52/boards/xiao-nrf52840/index.html" target="_blank">XIAO nRF52840</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/rp23xx/boards/xiao-rp2350/index.html" target="_blank">XIAO RP2350</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/ra4m1/boards/xiao-ra4m1/index.html" target="_blank">XIAO RA4M1</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/xtensa/esp32s3/boards/esp32s3-xiao/index.html" target="_blank">XIAO ESP32S3</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c3/boards/esp32c3-xiao/index.html" target="_blank">XIAO ESP32C3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c6/boards/esp32c6-xiao/index.html" target="_blank">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

## <span id="communications">Comunicaciones</span>

<br></br>
<div><a href="https://kafka.apache.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/apachekafka.png" style={{width:'auto', height:50}} /></a></div>

<span id="apache_kafka"><strong><a href="https://kafka.apache.org/" target="_blank">Apache Kafka</a></strong></span>, una plataforma de transmisión de eventos distribuida de código abierto utilizada por miles de empresas para pipelines de datos de alto rendimiento, análisis de transmisión, integración de datos y aplicaciones críticas.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32c6_kafka/" target="_blank">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://csa-iot.org/all-solutions/matter/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/matter.png" style={{width:'auto', height:50}} /></a></div>

<span id="matter"><strong><a href="https://csa-iot.org/all-solutions/matter/" target="_blank">Matter</a></strong></span>, protocolo estándar unificador de la industria que ofrece conectividad confiable y segura para dispositivos y sistemas compatibles.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_idf/" target="_blank">Serie XIAO ESP32 (C3, S3, C6)</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://csa-iot.org/all-solutions/zigbee/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zigbee.png" style={{width:'auto', height:50}} /></a></div>

<span id="zigbee"><strong><a href="https://csa-iot.org/all-solutions/zigbee/" target="_blank">Zigbee</a></strong></span>, una tecnología inalámbrica desarrollada como un estándar de conectividad de mercado global abierto para abordar las necesidades únicas de redes de datos IoT inalámbricas de bajo costo y bajo consumo.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32c6_zigbee_arduino/" target="_blank">XIAO ESP32C6（Arduino）</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32c6_zigbee/" target="_blank">XIAO ESP32C6（IDF）</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.espressif.com/en/solutions/low-power-solutions/esp-now" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/espnow.png" style={{width:'auto', height:50}} /></a></div>

<span id="espnow"><strong><a href="https://www.espressif.com/en/solutions/low-power-solutions/esp-now" target="_blank">ESP-NOW</a></strong></span>, un protocolo de comunicación inalámbrica para respuestas rápidas y bajo consumo, ampliamente utilizado en electrodomésticos inteligentes, control remoto y sensores.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32s3_espnow/" target="_blank">Serie XIAO ESP32 (ESP32C3, ESP32S3, ESP32S3 Sense, ESP32C6)</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://meshtastic.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/mashtastic.png" style={{width:'auto', height:70}} /></a></div>

<span id="meshtastic"><strong><a href="https://meshtastic.org/" target="_blank">Meshtastic</a></strong></span>, una red de malla descentralizada, fuera de la red y de código abierto construida para funcionar en dispositivos asequibles y de bajo consumo
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/wio_sx1262_xiao_esp32s3_for_meshtastic/" target="_blank">XIAO ESP32S3 para Meshtastic y LoRa</a></th>
   <th style={{width:333, height:'auto'}}>XIAO nRF52840 </th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://aws.amazon.com/iot-core/sidewalk/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/amazonsidewalk.png" style={{width:'auto', height:50}} /></a></div>

<span id="amazon_sidewalk"><strong><a href="https://aws.amazon.com/iot-core/sidewalk/" target="_blank">Amazon Sidewalk</a></strong></span>, una red encriptada gratuita de largo alcance que proporciona conectividad persistente para miles de millones de dispositivos.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao-ble-sidewalk/" target="_blank">XIAO nRF52840</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.blecon.net/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/blecon.png" style={{width:'auto', height:60}} /></a></div>

<span id="blecon"><strong><a href="https://www.blecon.net/" target="_blank">Blecon</a></strong></span>, permite que los productos físicos se comuniquen con aplicaciones en la nube utilizando Bluetooth Low Energy.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://developer.blecon.net/modem-reference/boards-and-modules/seeed-xiao-nrf52840-breakout" target="_blank">XIAO nRF52840</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

## <span id="tinyml/embedded_machine_learningtinyml">Plataformas de TinyML/Aprendizaje Automático Embebido</span>

<br></br>
<div><a href="https://sensecraft.seeed.cc/ai/#/home" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/sensecraft.png" style={{width:'auto', height:50}} /></a></div>

<span id="sensecraft_ai"><strong><a href="https://sensecraft.seeed.cc/ai/#/home" target="_blank">SenseCraft AI</a></strong></span>, <strong>Tu solución ideal para entrenamiento de modelos sin código, despliegue y más.</strong>
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32s3_edgelab/" target="_blank">XIAO ESP32S3 Sense (Asistente de Modelo)</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://ai.google.dev/edge/litert" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tensorflowlite.png" style={{width:'auto', height:50}} /></a></div>

<span id="tensorflow_lite"><strong><a href="https://ai.google.dev/edge/litert" target="_blank">TensorFlow Lite</a></strong></span>, el tiempo de ejecución de alto rendimiento de Google para IA en dispositivos.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO-BLE-Sense-TFLite-Getting-Started/" target="_blank">XIAO nRF52840 (Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://edgeimpulse.com/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/edgeimpulse.png" style={{width:'auto', height:50}} /></a></div>

<span id="edge_impulse"><strong><a href="https://edgeimpulse.com/" target="_blank">Edge Impulse</a></strong></span>, la plataforma de desarrollo líder para aprendizaje automático en dispositivos de borde.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/Seeeduino-XIAO-TinyML/" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO-RP2040-EI/" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAOEI/" target="_blank">XIAO nRF52840 (Sense)-Reconocimiento de Movimiento</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/tinyml_course_Key_Word_Spotting/" target="_blank">XIAO ESP32S3 Sense (Detección de Palabras Clave)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/tinyml_course_Image_classification_project/" target="_blank">XIAO ESP32S3 Sense (Clasificación de Imágenes)</a></th>
  </tr>
 </table>
</div>

## <span id="smart_home_and_automation">Hogar Inteligente y Automatización</span>

<br></br>
<div><a href="https://www.home-assistant.io/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/homoassiatant.png" style={{width:'auto', height:50}} /></a></div>
<div><a href="https://esphome.io/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/esphome.png" style={{width:'auto', height:50}} /></a></div>

<span id="home_assistant_esphome"><strong><a href="https://www.home-assistant.io/" target="_blank">Home Assistant</a> & <a href="https://esphome.io/" target="_blank">ESPHome</a></strong></span>, un sistema para controlar tus microcontroladores mediante archivos de configuración simples pero potentes y controlarlos remotamente a través de sistemas de automatización del hogar como Home Assistant.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/XIAO_ESP32S3_esphome/" target="_blank">XIAO ESP32S3 Sense</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/Connect-Grove-to-Home-Assistant-ESPHome/#grove-compatibility-list-with-esphome" target="_blank">Conectar XIAO ESP32 + Sensores Grove a HA vía ESPHome</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao-esp32c3-esphome/" target="_blank">XIAO ESP32C3 + mmWave a HA</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/Connect-Grove-to-Home-Assistant-ESPHome/" target="_blank">Agregar XIAO ESP32C3 a ESPHome</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://github.com/arendst/Tasmota" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tasmota.png" style={{width:'auto', height:50}} /></a></div>

<span id="tasmota"><strong><a href="https://github.com/arendst/Tasmota" target="_blank">Tasmota</a></strong></span>, firmware de código abierto alternativo para dispositivos basados en ESP8266 y ESP32 con configuración fácil usando interfaz web, actualizaciones OTA, automatización usando temporizadores o reglas, expandibilidad y control completamente local sobre MQTT, HTTP, Serial o KNX.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32C3.html" target="_blank">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32S3.html" target="_blank">XIAO ESP32S3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32S3_SENSE.html" target="_blank">XIAO ESP32S3 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32C6.html" target="_blank">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_mmwave_sensor_kit.html" target="_blank">Kit de Sensor de Detección Humana Sensor de Presencia Basado en XIAO ESP32C3</a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

## <span id="open_source_keyboard_firmware_support">Soporte de Firmware de Teclado de Código Abierto</span>

<br></br>
<div><a href="https://qmk.fm/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/qmk.png" style={{width:'auto', height:50}} /></a></div>

<span id="qmk"><strong><a href="https://qmk.fm/" target="_blank">QMK</a></strong></span>, firmware de teclado de código abierto para familias USB Atmel AVR y Arm.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/PJE66/hummingbird" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/kilipan/hummingbird_qmk" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}>XIAO nRF52840 (Sense)</th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://zmk.dev/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zmk.png" style={{width:'auto', height:50}} /></a></div>

<span id="zmk"><strong><a href="https://zmk.dev/" target="_blank">ZMK</a></strong></span>, un firmware de teclado de código abierto construido sobre el Sistema Operativo en Tiempo Real (RTOS) del Proyecto Zephyr™.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://zmk.dev/docs/hardware#seeed_xiao" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://zmk.dev/docs/hardware#seeed_xiao" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://zmk.dev/docs/hardware#seeed_xiao" target="_blank">XIAO nRF52840 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}>XIAO RP2350</th>
   <th style={{width:333, height:'auto'}}>XIAO MG24 (Sense)</th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

## <span id="other_hot_applications">Otras Aplicaciones Populares</span>

<br></br>
<div><a href="https://kno.wled.ge/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/wled.png" style={{width:'auto', height:50}} /></a></div>

<span id="wled"><strong><a href="https://kno.wled.ge/" target="_blank">WLED</a></strong></span>, una implementación rápida y rica en características de un servidor web ESP8266/ESP32 para controlar LEDs NeoPixel (WS2812B, WS2811, SK6812) o también chipsets basados en SPI.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://www.instructables.com/WLED-ON-XIAO-ESP32/" target="_blank">Serie XIAO ESP32 (C3, S3, S3 Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://chatgpt.com/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/chatgtp.png" style={{width:'auto', height:50}} /></a></div>

<span id="chatgpt"><strong><a href="https://chatgpt.com/" target="_blank">ChatGPT</a></strong></span>, un modelo hermano de InstructGPT⁠, que está entrenado para seguir una instrucción en un prompt y proporcionar una respuesta detallada.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiaoesp32c3-chatgpt/" target="_blank">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.ffmpeg.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/ffmpeg.png" style={{width:'auto', height:50}} /></a></div>

<span id="ffmpeg"><strong><a href="https://www.ffmpeg.org/" target="_blank">FFmpeg</a></strong></span>, una colección de bibliotecas y herramientas para procesar contenido multimedia como audio, video, subtítulos y metadatos relacionados.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://tutoduino.fr/tutoriels/esp32-timelapse/#google_vignette" target="_blank">XIAO ESP32S3 Sense</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://github.com/mROS-base/mros2-esp32" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/mrosbase.png" style={{width:'auto', height:50}} /></a></div>

<span id="mros2_esp32"><strong><a href="https://github.com/mROS-base/mros2-esp32" target="_blank">mROS2-ESP32</a></strong></span>, un entorno de ejecución ligero para nodos ROS en microcontroladores esp32 embebidos
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/mROS-base/mros2-esp32/issues/7" target="_blank">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/mROS-base/mros2-esp32/issues/24" target="_blank">XIAO ESP32S3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://github.com/mROS-base/mros2-esp32/issues/23" target="_blank">XIAO ESP32C6</a></th>
  </tr>
 </table>
</div>

## <span id="prototyping_tools_pcb_layout_stimulation">Herramientas de Prototipado (Diseño de PCB y Simulación)</span>

<br></br>
<div><a href="https://fritzing.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/fritzing.png" style={{width:'auto', height:50}} /></a></div>

<span id="fritzing"><strong><a href="https://fritzing.org/" target="_blank">Fritzing</a></strong></span>, una plataforma de diseño y prototipado electrónico para makers, aficionados y educadores.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20SAMD21(Seeeduino).fzpz" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20RP2040.fzpz" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20nRF52840(Sense).fzpz" target="_blank">XIAO nRF52840 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20ESP32C3.fzpz" target="_blank">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20ESP32C6.fzpz" target="_blank">XIAO ESP32C6</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20ESP32S3(Sense).fzpz" target="_blank">XIAO ESP32S3 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20RP2350.fzpz" target="_blank">XIAO RP2350</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/Seeed%20Studio%20XIAO%20RA4M1.fzpz" target="_blank">XIAO RA4M1</a></th>
            <th style={{width:333, height:'auto'}}>XIAO MG24 (Sense)</th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.flux.ai/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/flux.png" style={{width:'auto', height:50}} /></a></div>

<span id="fluxai"><strong><a href="https://www.flux.ai/" target="_blank">FluxAI</a></strong></span>, una mejor manera de construir PCBs profesionales con un copiloto de IA.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}>XIAO SAMD21</th>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2040" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840" target="_blank">XIAO nRF52840</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840-sense" target="_blank">XIAO nRF52840 Sense</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c3" target="_blank">XIAO ESP32C3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3" target="_blank">XIAO ESP32S3</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3-sense" target="_blank">XIAO ESP32S3 Sense</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c6" target="_blank">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2350" target="_blank">XIAO RP2350</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-ra4m1" target="_blank">XIAO RA4M1</a></th>
            <th style={{width:333, height:'auto'}}>XIAO MG24 (Sense)</th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://wokwi.com/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/wokwi.png" style={{width:'auto', height:50}} /></a></div>

<span id="wokwi"><strong><a href="https://wokwi.com/" target="_blank">Wokwi</a></strong></span>, el simulador de ESP32 más avanzado del mundo.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wokwi.com/projects/410433244849526785" target="_blank">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wokwi.com/projects/411276781876475905" target="_blank">XIAO ESP32S3 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wokwi.com/projects/411265368570177537" target="_blank">XIAO ESP32C6</a></th>
  </tr>
 </table>
</div>

## <span id="iot_clouds_and_iot_platforms">Nubes IoT y Plataformas IoT</span>

<br></br>
<div><a href="https://aws.amazon.com/iot/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/awsiot.png" style={{width:'auto', height:50}} /></a></div>

<span id="aws_iot"><strong><a href="https://aws.amazon.com/iot/" target="_blank">AWS IoT</a></strong></span>, permite conectar y gestionar dispositivos de forma segura, recopilar y analizar datos de dispositivos, y construir e implementar soluciones que generen mayor valor empresarial.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/xiao_esp32c6_aws_iot/" target="_blank">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://thingspeak.mathworks.com/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/thingspeak.png" style={{width:'auto', height:70}} /></a></div>

<span id="thingspeak"><strong><a href="https://thingspeak.mathworks.com/" target="_blank">ThingSpeak</a></strong></span>, la plataforma IoT abierta con análisis de MATLAB.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://elchika.com/article/433216e7-90a9-4f59-bbb3-4a7531588140/" target="_blank">XIAO nRF52840</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://ubidots.com/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/ubidots.png" style={{width:'auto', height:50}} /></a></div>

<span id="ubidots"><strong><a href="https://ubidots.com/" target="_blank">Ubidots</a></strong></span>, una plataforma de desarrollo IoT de bajo código para ingenieros y desarrolladores que no tienen el tiempo o la energía para construir una aplicación IoT completa y lista para producción.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/es/L76K_Path_Tracking_on_Ubidots/" target="_blank">XIAO ESP32S3 + Módulo GNSS L76K para Seguimiento</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>

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
