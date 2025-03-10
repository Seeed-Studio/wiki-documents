---
description: Wiki feature page for the XIAO series.
title: Exhibición para la serie XIAO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_topic_page
last_update:
  date: 01/27/2025
  author: Guillermo
---

# Seeed Studio EXHIBICION XIAO 

[La serie XIAO de Seeed Studio](https://www.seeedstudio.com/xiao-series-page), nombrada por la palabra china para "pequeño", la serie comprende diminutas placas de desarrollo basadas en diversas plataformas de hardware como ESP32, SAMD21, RP2040, nRF52840, RP2350 y RA4M1, MG24. Estas placas, del tamaño de un dedo, ofrecen potentes capacidades en un formato compacto.

Nuestro equipo, junto con la comunidad, ha creado una rica colección de wikis, aplicaciones y documentación para facilitar el uso y desarrollo. Para que toda la comunidad pueda localizar estos útiles recursos de manera más eficiente, los hemos reunido en esta página como un índice para que encuentre rápidamente lo que necesita.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/xiao_topicpage/compatible_software.jpg" /></div>

No podemos lograrlo sin el apoyo y las contribuciones que recibimos de la comunidad. Si deseas contribuir a este vibrante ecosistema (para completar las partes faltantes), te invitamos a [enviar tus propias creaciones únicas de desarrollo para inspirar también a otros en la comunidad](https://wiki.seeedstudio.com/Contribution-Guide/).

## Tabla de Contenidos


<div align="center">
	  <div style={{width: "auto", height: 450, overflowY: 'scroll', border: '1px solid #ccc', padding: '10px', textAlign: 'left',}}>
	<ul>
		<li><a href="#product_guides"><strong>Guías de productos (Empezando, uso de pines y más) </strong></a></li>
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
		<li><a href="#supported_languages/platforms"><strong>Lenguajes/Plataformas compatibles</strong></a></li>
		<ul>
		<li><a href="#platformio"><strong>PlatformIO</strong></a></li>
		<li><a href="#micropython"><strong>MicroPython</strong></a></li>
		<li><a href="#circuitpython"><strong>CircuitPython</strong></a></li>
		<li><a href="#embedded_swift"><strong>Embedded Swift</strong></a></li>
		<li><a href="#esp_idf"><strong>ESP IDF</strong></a></li>
		<li><a href="#rust"><strong>Rust</strong></a></li>
		<li><a href="#tinygo"><strong>TinyGo</strong></a></li>
		<li><strong>Lua</strong></li>
		<li><strong>Lenguajes de programación gráficos</strong></li>
		</ul>
		<li><a href="#supported_rtos"><strong>RTOS compatibles</strong></a></li>
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
		<li><a href="#tinyml/embedded_machine_learningtinyml"><strong>Plataformas embebidas de aprendizaje automático TinyML</strong></a></li>
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
		<li><a href="#open_source_keyboard_firmware_support"><strong>Compatibilidad con Firmware de Teclado de Código Abierto</strong></a></li>
		<ul>
		<li><a href="#qmk"><strong>QMK</strong></a></li>
		<li><a href="#zmk"><strong>ZMK</strong></a></li>
		</ul>
		<li><a href="#other_hot_applications"><strong>Otras Aplicaciones Destacadas</strong></a></li>
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
		<li><a href="#iot_clouds_and_iot_platforms"><strong>Nubes y Plataformas IoT</strong></a></li>
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

## <span id="product_guides">Guía de Productos</span>

<br></br>

<span id="xiao_samd21"><strong><font color={'FFFFFF'} size={"4"}>XIAO SAMD21</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Seeeduino-XIAO/">Wiki para Comenzar</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Seeeduino-XIAO-by-Nanase/">Uso de Pines</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Seeeduino-XIAO-by-Nanase/">Single Cycle IOBUS</a> by <a href="https://twitter.com/nanase_coder">@nanase_coder</a></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_rp2040"><strong><font color={'FFFFFF'} size={"4"}>XIAO RP2040</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#getting-started">Wiki para Comenzar</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#pin-multuiplexing-on-the-seeed-studio-xiao-rp2040">Uso de Pines</a></th>
			<th style={{width:333, height:'auto'}}></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_nrf52840_(sense)"><strong><font color={'FFFFFF'} size={"4"}>XIAO nRF52840 (Sense)</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_BLE/">Wiki para Comenzar</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-Pin-Multiplexing/">Uso de Pines</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-IMU-Usage/">6-Axis IMU </a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-PDM-Usage/">Uso de PDM</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao-ble-qspi-flash-usage/">QSPI Flash</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-NFC-Usage/">Uso de NFC</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-Bluetooth_Usage/">Bluetooth Lib (Seeed nRF52)</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-Bluetooth-Usage/">Bluetooth Lib (Seeed nRF52 mbed)</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_esp32c3"><strong><font color={'FFFFFF'} size={"4"}>XIAO ESP32C3</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/">Wiki para Comenzar</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32C3_Pin_Multiplexing/">Uso de Pines</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32C3_WiFi_Usage/">Uso de Wi-Fi</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32C3_Bluetooth_Usage/">Uso de Bluetooth</a></th>
			<th style={{width:333, height:'auto'}}></th>
            <th style={{width:333, height:'auto'}}></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_esp32s3_(sense)"><strong><font color={'FFFFFF'} size={"4"}>XIAO ESP32S3 (Sense)</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/">Wiki para Comenzar</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_pin_multiplexing/">Uso de Pines</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_wifi_usage/">Uso de Wi-Fi</a></th>
		</tr>
		<tr>			
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_bluetooth/">Uso de Bluetooth</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32S3_Consumption/">Modos de reposo (sleep)</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_sense_mic/">Uso de micrófonos</a></th>          
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/">Uso de Cámara</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_sense_filesystem/">MicroSD Card</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_esp32c6"><strong><font color={'FFFFFF'} size={"4"}>XIAO ESP32C6</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/">Wiki para Comenzar</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_pin_multiplexing_esp33c6/">Uso de Pines</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_wifi_usage_esp32c6/">Uso de Wi-Fi</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_bluetooth/">Uso de Bluetooth</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_rp2350"><strong><font color={'FFFFFF'} size={"4"}>XIAO RP2350</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/getting-started-xiao-rp2350/">Wiki para Comenzar</a></th>
			<th style={{width:333, height:'auto'}}><a href="">Uso de Pines</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_ra4m1"><strong><font color={'FFFFFF'} size={"4"}>XIAO RA4M1</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/getting_started_xiao_ra4m1/">Wiki para Comenzar</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_ra4m1_pin_multiplexing/">Uso de Pines</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>

<span id="xiao_mg24_(sense)"><strong><font color={'FFFFFF'} size={"4"}>XIAO MG24 (Sense)</font></strong></span>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_mg24_getting_started/">Wiki para Comenzar</a></th>
			<th style={{width:333, height:'auto'}}><a href="">Uso de Pines</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

## <span id="supported_languages/platforms">Lenguajes/Plataformas compatibles</span>

<br></br>
<div><a href="https://platformio.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/platformio.png" style={{width:'auto', height:50}} /></a></div>

<span id="platformio"><strong><a href="https://platformio.org/">PlatformIO</a></strong></span>, la solución de IDE más querida para Microsoft Visual Studio Code.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/stable/boards/atmelsam/seeed_xiao.html">XIAO SAMD21 (Seeeduino XIAO)</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_nrf52840_with_platform_io/">XIAO nRF52840 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html">XIAO ESP32C3</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_with_platform_io/">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32s3.html">XIAO ESP32S3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://taunoerik.art/2023/05/15/start-seeed-xiao-rp2040-on-platformio/">XIAO RP2040</a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://micropython.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/micropython.png" style={{width:'auto', height:50}} /></a></div>

<span id="micropython"><strong><a href="https://micropython.org/">MicroPython</a></strong></span>, implementación completa de Python3 para ejecutar directamente en hardware embebido.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-SAMD21-MicroPython/">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-RP2040-with-MicroPython/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c3_with_micropython/">XIAO ESP32C3</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_with_micropython/">XIAO ESP32S3 (Sense)</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32S3_Micropython/">XIAO ESP32S3 Sense Only (Camera, Wi-Fi)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://micropython.org/download/SEEED_XIAO_NRF52/">XIAO nRF52840 Sense</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_micropython/">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://circuitpython.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/circuitpython.png" style={{width:'auto', height:50}} /></a></div>

<span id="circuitpython"><strong><a href="https://circuitpython.org/">CircuitPython</a></strong></span>, un lenguaje de programación diseñado para simplificar la experimentación y el aprendizaje de la programación en placas de bajo costo.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Seeeduino-XIAO-CircuitPython/">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-RP2040-with-CircuitPython/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE_CircutPython/">XIAO nRF52840 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c3_with_circuitpython/">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_project_circuitpython/">XIAO ESP32S3 Sense</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_with_circuitpython/">XIAO ESP32C6</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://circuitpython.org/board/seeeduino_xiao_rp2350/">XIAO RP2350</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.swift.org/getting-started/embedded-swift/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/swift.png" style={{width:'auto', height:50}} /></a></div>

<span id="embedded_swift"><strong><a href="https://www.swift.org/getting-started/embedded-swift/">Embedded Swift</a></strong></span>, un lenguaje escalable, ideal para escribir aplicaciones de escritorio y móviles, backends de servidor y software de sistema, que se ejecuta en microcontroladores.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao-esp32-swift/">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://idf.espressif.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/espressif.png" style={{width:'auto', height:50}} /></a></div>

<span id="esp_idf"><a href="https://idf.espressif.com/"><strong>ESP IDF</strong></a></span>, El framework oficial de Espressif para las series de SoC ESP32, ESP32-S y ESP32-C, que proporciona un SDK autónomo para cualquier desarrollo de aplicaciones genéricas en estas plataformas, utilizando lenguajes de programación como C y C++.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_idf/">XIAO ESP32 Series (Para Empezar)</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/getting_started_with_matter/">Desarrollando con Matter 1</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32_matter_env/">Desarrollando con Matter 2</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/matter_development_framework/">Desarrollando con Matter 3</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.rust-lang.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/rust.png" style={{width:'auto', height:50}} /></a></div>

<span id="rust"><strong><a href="https://www.rust-lang.org/">Rust</a></strong></span>, un lenguaje que empodera a todos para crear software confiable y eficiente.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/atsamd-rs/atsamd/tree/master/boards/xiao_m0">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://tutoduino.fr/en/tutorials/programing-in-rust-the-xiao-rp2040-board/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://forum.seeedstudio.com/t/rust-on-xiao-esp32s3/276724">XIAO ESP32S3 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Wumpf/Seeed-nRF52840-Sense-projects">XIAO nRF52840 (Sense)</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://tinygo.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tinygo.png" style={{width:'auto', height:50}} /></a></div>

<span id="tinygo"><strong><a href="https://tinygo.org/">TinyGo</a></strong></span>, un compilador Go diseñado para su uso en lugares pequeños, como microcontroladores, WebAssembly (wasm/wasi) y herramientas de línea de comandos.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://tinygo.org/docs/reference/microcontrollers/xiao/">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://tinygo.org/docs/reference/microcontrollers/xiao-ble/">XIAO nRF52840 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://tinygo.org/docs/reference/microcontrollers/xiao-rp2040/">XIAO RP2040</a></th>
		</tr>
	</table>
</div>

## <span id="supported_rtos">RTOS compatibles</span>

<br></br>
<div><a href="https://zephyrproject.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr.png" style={{width:'auto', height:70}} /></a></div>

<span id="zephyr"><strong><a href="https://zephyrproject.org/">Zephyr</a></strong></span>, un sistema operativo en tiempo real (RTOS) escalable que admite múltiples arquitecturas de hardware, optimizado para dispositivos con recursos limitados y construido con la seguridad en mente.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-SAMD21-Zephyr-RTOS/">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-RP2040-Zephyr-RTOS/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-nRF52840-Zephyr-RTOS/">XIAO nRF52840 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-ESP32C3-Zephyr/">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_zephyr_rtos/">XIAO ESP32S3 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32c6/doc/index.html">XIAO ESP32C6</a></th>		
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.freertos.org/"><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/1.png" style={{width:'auto', height:50}} /></a></div>

<span id="freertos"><strong><a href="https://www.freertos.org/">FreeRTOS</a></strong></span>, sistema operativo en tiempo real para microcontroladores y microprocesadores pequeños.
<br></br>
<br></br>
<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}>XIAO SAMD21</th>
			<th style={{width:333, height:'auto'}}>XIAO nRF52840</th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao-esp32s3-freertos/">XIAO ESP32S3 (Sense)</a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://nuttx.apache.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/nuttxrtos.png" style={{width:'auto', height:80}} /></a></div>

<span id="apache_nuttx_rtos"><strong><a href="https://nuttx.apache.org/">Apache NuttX RTOS</a></strong></span>, un sistema operativo en tiempo real (RTOS) con énfasis en el cumplimiento de estándares y un tamaño reducido.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/samd2l2/boards/xiao-seeeduino/index.html">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao-rp2040-with-nuttx/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

## <span id="communications">Comunicaciones</span>

<br></br>
<div><a href="https://kafka.apache.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/apachekafka.png" style={{width:'auto', height:50}} /></a></div>

<span id="apache_kafka"><strong><a href="https://kafka.apache.org/">Apache Kafka</a></strong></span>, una plataforma de transmisión de eventos de código abierto utilizada por miles de empresas para pipelines de datos de alto rendimiento, análisis en tiempo real, integración de datos y aplicaciones críticas.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_kafka/">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>


<br></br>
<div><a href="https://csa-iot.org/all-solutions/matter/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/matter.png" style={{width:'auto', height:50}} /></a></div>

<span id="matter"><strong><a href="https://csa-iot.org/all-solutions/matter/">Matter</a></strong></span>, protocolo estándar unificador de la industria que ofrece conectividad confiable y segura para dispositivos y sistemas compatibles.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_idf/">XIAO ESP32 Series (C3, S3, C6)</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://csa-iot.org/all-solutions/zigbee/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zigbee.png" style={{width:'auto', height:50}} /></a></div>

<span id="zigbee"><strong><a href="https://csa-iot.org/all-solutions/zigbee/">Zigbee</a></strong></span>, una tecnología inalámbrica desarrollada como un estándar de conectividad global abierto para abordar las necesidades únicas de las redes de datos IoT inalámbricas de bajo costo y bajo consumo.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_zigbee_arduino/">XIAO ESP32C6（Arduino）</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_zigbee/">XIAO ESP32C6（IDF）</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.espressif.com/en/solutions/low-power-solutions/esp-now"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/espnow.png" style={{width:'auto', height:50}} /></a></div>

<span id="espnow"><strong><a href="https://www.espressif.com/en/solutions/low-power-solutions/esp-now">ESP-NOW</a></strong></span>, un protocolo de comunicación inalámbrica para respuestas rápidas y bajo consumo, ampliamente utilizado en electrodomésticos inteligentes, control remoto y sensores.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_espnow/">XIAO ESP32 Series (ESP32C3, ESP32S3, ESP32S3 Sense, ESP32C6)</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://meshtastic.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/mashtastic.png" style={{width:'auto', height:70}} /></a></div>

<span id="meshtastic"><strong><a href="https://meshtastic.org/">Meshtastic</a></strong></span>, una red de malla descentralizada, fuera de la red eléctrica y de código abierto, diseñada para funcionar en dispositivos asequibles y de bajo consumo.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_for_meshtastic/">XIAO ESP32S3 for Meshtastic and LoRa</a></th>
			<th style={{width:333, height:'auto'}}>XIAO nRF52840 </th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://aws.amazon.com/iot-core/sidewalk/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/amazonsidewalk.png" style={{width:'auto', height:50}} /></a></div>

<span id="amazon_sidewalk"><strong><a href="https://aws.amazon.com/iot-core/sidewalk/">Amazon Sidewalk</a></strong></span>, una red de largo alcance cifrada y de acceso gratuito que proporciona conectividad persistente para miles de millones de dispositivos.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao-ble-sidewalk/">XIAO nRF52840</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.blecon.net/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/blecon.png" style={{width:'auto', height:60}} /></a></div>

<span id="blecon"><strong><a href="https://www.blecon.net/">Blecon</a></strong></span>, permite que los productos físicos se comuniquen con aplicaciones en la nube utilizando Bluetooth de baja energía.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://developer.blecon.net/modem-reference/boards-and-modules/seeed-xiao-nrf52840-breakout">XIAO nRF52840</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

## <span id="tinyml/embedded_machine_learningtinyml">Plataformas TinyML/Aprendizaje Automático Embebido</span>

<br></br>
<div><a href="https://sensecraft.seeed.cc/ai/#/home"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/sensecraft.png" style={{width:'auto', height:50}} /></a></div>

<span id="sensecraft_ai"><strong><a href="https://sensecraft.seeed.cc/ai/#/home">SenseCraft AI</a></strong></span>, <strong>tu solución ideal para entrenamiento de modelos sin código, implementación y más..</strong>
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_edgelab/">XIAO ESP32S3 Sense (Model Assistant)</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://ai.google.dev/edge/litert"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tensorflowlite.png" style={{width:'auto', height:50}} /></a></div>

<span id="tensorflow_lite"><strong><a href="https://ai.google.dev/edge/litert">TensorFlow Lite</a></strong></span>, el entorno de ejecución de alto rendimiento de Google para inteligencia artificial en dispositivos.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-TFLite-Getting-Started/">XIAO nRF52840 (Sense)</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://edgeimpulse.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/edgeimpulse.png" style={{width:'auto', height:50}} /></a></div>

<span id="edge_impulse"><strong><a href="https://edgeimpulse.com/">Edge Impulse</a></strong></span>, la plataforma de desarrollo líder para aprendizaje automático en dispositivos Edge.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Seeeduino-XIAO-TinyML/">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-RP2040-EI/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAOEI/">XIAO nRF52840 (Sense)- Detección de movimiento</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-PDM-EI/">XIAO nRF52840 (Sense)-Speech Recognition</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/tinyml_course_Key_Word_Spotting/">XIAO ESP32S3 Sense (Detección de palabras clave)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/tinyml_course_Image_classification_project/">XIAO ESP32S3 Sense (Clasificación de imágenes)</a></th>
		</tr>
	</table>
</div>


## <span id="smart_home_and_automation">Smart Home y Automatización</span>

<br></br>
<div><a href="https://www.home-assistant.io/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/homoassiatant.png" style={{width:'auto', height:50}} /></a></div>
<div><a href="https://esphome.io/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/esphome.png" style={{width:'auto', height:50}} /></a></div>


<span id="home_assistant_esphome"><strong><a href="https://www.home-assistant.io/">Home Assistant</a> & <a href="https://esphome.io/">ESPHome</a></strong></span>, un sistema para controlar tus microcontroladores mediante archivos de configuración simples pero poderosos y controlarlos de forma remota a través de sistemas de automatización del hogar, como Home Assistant.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32S3_esphome/">XIAO ESP32S3 Sense</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Connect-Grove-to-Home-Assistant-ESPHome/#grove-compatibility-list-with-esphome">Conectar XIAO ESP32 + sensores Grove a Home Assistant (HA) a través de ESPHome.</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao-esp32c3-esphome/">XIAO ESP32C3 + mmWave to HA</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Connect-Grove-to-Home-Assistant-ESPHome/">Add XIAO ESP32C3 to ESPHome</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://github.com/arendst/Tasmota"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tasmota.png" style={{width:'auto', height:50}} /></a></div>

<span id="tasmota"><strong><a href="https://github.com/arendst/Tasmota">Tasmota</a></strong></span>, Firmware de código abierto alternativo para dispositivos basados en ESP8266 y ESP32, con configuración fácil mediante WebUI, actualizaciones OTA, automatización usando temporizadores o reglas, expandibilidad y control completamente local a través de MQTT, HTTP, Serial o KNX.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32C3.html">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32S3.html">XIAO ESP32S3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32S3_SENSE.html">XIAO ESP32S3 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32C6.html">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_mmwave_sensor_kit.html">Human Detection Sensor Kit Presence Sensor Based on XIAO ESP32C3</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

## <span id="open_source_keyboard_firmware_support">Soporte para firmware de teclado de código abierto</span>

<br></br>
<div><a href="https://qmk.fm/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/qmk.png" style={{width:'auto', height:50}} /></a></div>

<span id="qmk"><strong><a href="https://qmk.fm/">QMK</a></strong></span>, Firmware de teclado de código abierto para las familias Atmel AVR y Arm USB.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/PJE66/hummingbird">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/kilipan/hummingbird_qmk">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}>XIAO nRF52840 (Sense)</th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://zmk.dev/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zmk.png" style={{width:'auto', height:50}} /></a></div>

<span id="zmk"><strong><a href="https://zmk.dev/">ZMK</a></strong></span>, un firmware de teclado de código abierto basado en el Sistema Operativo en Tiempo Real (RTOS) Zephyr™.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://zmk.dev/docs/hardware#seeed_xiao">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://zmk.dev/docs/hardware#seeed_xiao">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://zmk.dev/docs/hardware#seeed_xiao">XIAO nRF52840 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}>XIAO RP2350</th>
			<th style={{width:333, height:'auto'}}>XIAO MG24 (Sense)</th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>


## <span id="other_hot_applications">Otras aplicaciones populares</span>

<br></br>
<div><a href="https://kno.wled.ge/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/wled.png" style={{width:'auto', height:50}} /></a></div>

<span id="wled"><strong><a href="https://kno.wled.ge/">WLED</a></strong></span>, una implementación rápida y rica en características de un servidor web ESP8266/ESP32 para controlar LEDs NeoPixel (WS2812B, WS2811, SK6812) o también chipsets basados en SPI.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://www.instructables.com/WLED-ON-XIAO-ESP32/">XIAO ESP32 Series (C3, S3, S3 Sense)</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://chatgpt.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/chatgtp.png" style={{width:'auto', height:50}} /></a></div>

<span id="chatgpt"><strong><a href="https://chatgpt.com/">ChatGPT</a></strong></span>, un modelo hermano de InstructGPT, que está entrenado para seguir una instrucción en un prompt y proporcionar una respuesta detallada.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiaoesp32c3-chatgpt/">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.ffmpeg.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/ffmpeg.png" style={{width:'auto', height:50}} /></a></div>

<span id="ffmpeg"><strong><a href="https://www.ffmpeg.org/">FFmpeg</a></strong></span>, una colección de bibliotecas y herramientas para procesar contenido multimedia como audio, video, subtítulos y metadatos relacionados.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://tutoduino.fr/tutoriels/esp32-timelapse/#google_vignette">XIAO ESP32S3 Sense</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://github.com/mROS-base/mros2-esp32"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/mrosbase.png" style={{width:'auto', height:50}} /></a></div>

<span id="mros2_esp32"><strong><a href="https://github.com/mROS-base/mros2-esp32">mROS2-ESP32</a></strong></span>, un entorno de ejecución ligero para nodos ROS en microcontroladores embebidos ESP32.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/mROS-base/mros2-esp32/issues/7">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/mROS-base/mros2-esp32/issues/24">XIAO ESP32S3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://github.com/mROS-base/mros2-esp32/issues/23">XIAO ESP32C6</a></th>
		</tr>
	</table>
</div>

## <span id="prototyping_tools_pcb_layout_stimulation">Herramientas de prototipado (Diseño de PCB y simulación)</span>

<br></br>
<div><a href="https://fritzing.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/fritzing.png" style={{width:'auto', height:50}} /></a></div>

<span id="fritzing"><strong><a href="https://fritzing.org/">Fritzing</a></strong></span>, una plataforma de diseño y prototipado electrónico para creadores, aficionados y educadores.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20SAMD21(Seeeduino).fzpz">XIAO SAMD21</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20RP2040.fzpz">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20nRF52840(Sense).fzpz">XIAO nRF52840 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20ESP32C3.fzpz">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20ESP32C6.fzpz">XIAO ESP32C6</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20ESP32S3(Sense).fzpz">XIAO ESP32S3 (Sense)</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20RP2350.fzpz">XIAO RP2350</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/Seeed%20Studio%20XIAO%20RA4M1.fzpz">XIAO RA4M1</a></th>
            <th style={{width:333, height:'auto'}}>XIAO MG24 (Sense)</th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://www.flux.ai/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/flux.png" style={{width:'auto', height:50}} /></a></div>

<span id="fluxai"><strong><a href="https://www.flux.ai/">FluxAI</a></strong></span>, una mejor manera de crear PCBs profesionales con un copiloto de IA.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}>XIAO SAMD21</th>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2040">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840">XIAO nRF52840</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840-sense">XIAO nRF52840 Sense</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c3">XIAO ESP32C3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3">XIAO ESP32S3</a></th>
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3-sense">XIAO ESP32S3 Sense</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c6">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2350">XIAO RP2350</a></th>           
		</tr>
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-ra4m1">XIAO RA4M1</a></th>
            <th style={{width:333, height:'auto'}}>XIAO MG24 (Sense)</th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://wokwi.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/wokwi.png" style={{width:'auto', height:50}} /></a></div>

<span id="wokwi"><strong><a href="https://wokwi.com/">Wokwi</a></strong></span>, el simulador ESP32 más avanzado del mundo.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wokwi.com/projects/410433244849526785">XIAO ESP32C3</a></th>
			<th style={{width:333, height:'auto'}}><a href="https://wokwi.com/projects/411276781876475905">XIAO ESP32S3 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wokwi.com/projects/411265368570177537">XIAO ESP32C6</a></th>
		</tr>
	</table>
</div>


## <span id="iot_clouds_and_iot_platforms">Nubes IoT y plataformas IoT</span>

<br></br>
<div><a href="https://aws.amazon.com/iot/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/awsiot.png" style={{width:'auto', height:50}} /></a></div>

<span id="aws_iot"><strong><a href="https://aws.amazon.com/iot/">AWS IoT</a></strong></span>,  permite conectar y gestionar dispositivos de forma segura, recopilar y analizar datos de dispositivos, y crear e implementar soluciones que generen un mayor valor para el negocio.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_aws_iot/">XIAO ESP32C6</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://thingspeak.mathworks.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/thingspeak.png" style={{width:'auto', height:70}} /></a></div>

<span id="thingspeak"><strong><a href="https://thingspeak.mathworks.com/">ThingSpeak</a></strong></span>, La plataforma IoT abierta con análisis en MATLAB.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://elchika.com/article/433216e7-90a9-4f59-bbb3-4a7531588140/">XIAO nRF52840</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>
<div><a href="https://ubidots.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/ubidots.png" style={{width:'auto', height:50}} /></a></div>

<span id="ubidots"><strong><a href="https://ubidots.com/">Ubidots</a></strong></span>, una plataforma de desarrollo IoT de bajo código para ingenieros y desarrolladores que no tienen el tiempo o la energía para construir una aplicación IoT completa y lista para producción.
<br></br>
<br></br>

<div class="table-center">
	<table align="center">
		<tr>
			<th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/L76K_Path_Tracking_on_Ubidots/">XIAO ESP32S3 + Modulo L76K GNSS para rastreo</a></th>
			<th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
		</tr>
	</table>
</div>

<br></br>

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>











