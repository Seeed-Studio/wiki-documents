---
description: Página de recursos da Wiki para a série XIAO.
title: Exposição da Série XIAO
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_topic_page
last_update:
  date: 02/04/2026
  author: Carla Guo
createdAt: '2023-07-07'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao_topic_page/
---

# EXPOSIÇÃO XIAO DA Seeed Studio

[A série Seeed Studio XIAO](https://www.seeedstudio.com/xiao-series-page), batizada com a palavra chinesa para "pequeno", é composta por minúsculas placas de desenvolvimento baseadas em várias plataformas de hardware ESP32, SAMD21, RP2040, nRF52840, RP2350 e RA4M1, MG24. Essas placas do tamanho de uma unha reúnem recursos poderosos em um formato compacto.

Nossa equipe, junto com a comunidade, criou uma coleção rica de wikis, aplicações e documentação para tornar o uso e o desenvolvimento mais fáceis. Para tornar mais eficiente para toda a comunidade localizar esses documentos úteis, estamos reunindo tudo nesta página como um índice para que você encontre rapidamente o que está procurando.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/xiao_topicpage/compatible_software.jpg" /></div>

Não conseguiríamos fazer isso sem o carinho e a contribuição que recebemos da comunidade e, se você quiser contribuir para esse ecossistema vibrante (para preencher as partes em branco), damos as boas-vindas a [seus próprios envios dos seus desenvolvimentos exclusivos para inspirar outras pessoas na comunidade também](https://wiki.seeedstudio.com/pt-br/Contribution-Guide/).

## Tabela de Conteúdos

<div align="center">
   <div style={{width: "auto", height: 450, overflowY: 'scroll', border: '1px solid #ccc', padding: '10px', textAlign: 'left',}}>
 <ul>
  <li><a href="#product_guides"><strong>Guias de Produto (Primeiros Passos, Uso de Pinos e mais)</strong></a></li>
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
  <li><a href="#xiao_nrf54l15_(sense)"><strong>XIAO NRF54L15 (Sense)</strong></a></li>
  <li><a href="#xiao_esp32c5"><strong>XIAO ESP32C5</strong></a></li>
  </ul>
  <li><a href="#supported_languages/platforms"><strong>Linguagens/Plataformas Suportadas</strong></a></li>
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
  <li><strong>Linguagens de Programação Gráfica</strong></li>
  </ul>
  <li><a href="#supported_rtos"><strong>RTOS Suportados</strong></a></li>
  <ul>
  <li><a href="#zephyr"><strong>Zephyr</strong></a></li>
  <li><a href="#freertos"><strong>FreeRTOS</strong></a></li>
  <li><a href="#apache_nuttx_rtos"><strong>Apache NuttX RTOS</strong></a></li>
  </ul>
  <li><a href="#communications"><strong>Comunicações</strong></a></li>
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
  <li><a href="#tinyml/embedded_machine_learningtinyml"><strong>Plataformas TinyML/Aprendizado de Máquina Embarcado</strong></a></li>
  <ul>
  <li><a href="#sensecraft_ai"><strong>SenseCraft AI</strong></a></li>
  <li><a href="#tensorflow_lite"><strong>TensorFlow Lite</strong></a></li>
  <li><a href="#edge_impulse"><strong>Edge Impulse</strong></a></li>
  </ul>
  <li><a href="#smart_home_and_automation"><strong>Casa Inteligente e Automação</strong></a></li>
  <ul>
  <li><a href="#home_assistant_esphome"><strong>Home Assistant & ESPHome</strong></a></li>
  <li><strong>OpenHAB</strong></li>
  <li><a href="#tasmota"><strong>Tasmota</strong></a></li>
  </ul>
  <li><a href="#open_source_keyboard_firmware_support"><strong>Suporte a Firmware de Teclado Open-Source</strong></a></li>
  <ul>
  <li><a href="#qmk"><strong>QMK</strong></a></li>
  <li><a href="#zmk"><strong>ZMK</strong></a></li>
  </ul>
  <li><a href="#other_hot_applications"><strong>Outras Aplicações em Alta</strong></a></li>
  <ul>
  <li><a href="#wled"><strong>WLED</strong></a></li>
  <li><a href="#chatgpt"><strong>ChatGPT</strong></a></li>
  <li><a href="#ffmpeg"><strong>FFmpeg</strong></a></li>
  <li><strong>OpenHD</strong></li>
  <li><strong>ESP32Cam</strong></li>
  <li><a href="#mros2_esp32"><strong>mROS2-ESP32</strong></a></li>
  </ul>
  <li><a href="#prototyping_tools_pcb_layout_stimulation"><strong>Ferramentas de Prototipagem (Layout de PCB & Simulação)</strong></a></li>
  <ul>
  <li><a href="#fritzing"><strong>Fritzing</strong></a></li>
  <li><a href="#fluxai"><strong>FluxAI</strong></a></li>
  <li><a href="#wokwi"><strong>Wokwi</strong></a></li>
  </ul>
  <li><a href="#iot_clouds_and_iot_platforms"><strong>Nuvens IoT e Plataformas IoT</strong></a></li>
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

## <span id="product_guides">Guias de Produto</span>

<br></br>

<span id="xiao_samd21"><strong><font size={"4"}>XIAO SAMD21</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/" target="_blank">Wiki de Primeiros Passos</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO-by-Nanase/" target="_blank">Uso de Pinos</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO-by-Nanase/" target="_blank">Single Cycle IOBUS</a> por <a href="https://twitter.com/nanase_coder" target="_blank">@nanase_coder</a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_rp2040"><strong><font  size={"4"}>XIAO RP2040</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#getting-started" target="_blank">Wiki de Primeiros Passos</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#pin-multuiplexing-on-the-seeed-studio-xiao-rp2040" target="_blank">Uso de Pinos</a></th>
   <th style={{width:333, height:'auto'}}></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_nrf52840_(sense)"><strong><font  size={"4"}>XIAO nRF52840 (Sense)</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO_BLE/" target="_blank">Wiki de Primeiros Passos</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO-BLE-Sense-Pin-Multiplexing/" target="_blank">Uso de Pinos</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO-BLE-Sense-IMU-Usage/" target="_blank">Uso de IMU de 6 Eixos</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO-BLE-Sense-PDM-Usage/" target="_blank">Uso de PDM</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao-ble-qspi-flash-usage/" target="_blank">QSPI Flash</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO-BLE-Sense-NFC-Usage/" target="_blank">Uso de NFC</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO-BLE-Sense-Bluetooth_Usage/" target="_blank">Lib Bluetooth (Seeed nRF52)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO-BLE-Sense-Bluetooth-Usage/" target="_blank">Lib Bluetooth (Seeed nRF52 mbed)</a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_esp32c3"><strong><font  size={"4"}>XIAO ESP32C3</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started/" target="_blank">Wiki de Primeiros Passos</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Pin_Multiplexing/" target="_blank">Uso de Pinos</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_WiFi_Usage/" target="_blank">Uso de Wi-Fi</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Bluetooth_Usage/" target="_blank">Uso de Bluetooth</a></th>
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
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started/" target="_blank">Wiki de Primeiros Passos</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_pin_multiplexing/" target="_blank">Uso de Pinos</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_wifi_usage/" target="_blank">Uso de Wi‑Fi</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_bluetooth/" target="_blank">Uso de Bluetooth</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO_ESP32S3_Consumption/" target="_blank">Modos de Suspensão</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_sense_mic/" target="_blank">Uso do Microfone</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_camera_usage/" target="_blank">Uso da Câmera</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_sense_filesystem/" target="_blank">Cartão MicroSD</a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_esp32c6"><strong><font  size={"4"}>XIAO ESP32C6</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_getting_started/" target="_blank">Wiki de Primeiros Passos</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_pin_multiplexing_esp32c6/" target="_blank">Uso de Pinos</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_wifi_usage_esp32c6/" target="_blank">Uso de Wi‑Fi</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_bluetooth/" target="_blank">Uso de Bluetooth</a></th>
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
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/getting-started-xiao-rp2350/" target="_blank">Wiki de Primeiros Passos</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank">Uso de Pinos</a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_ra4m1"><strong><font  size={"4"}>XIAO RA4M1</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/getting_started_xiao_ra4m1/" target="_blank">Wiki de Primeiros Passos</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_ra4m1_pin_multiplexing/" target="_blank">Uso de Pinos</a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_mg24_(sense)"><strong><font  size={"4"}>XIAO MG24 (Sense)</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_mg24_getting_started/" target="_blank">Wiki de Primeiros Passos</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_mg24_pin_multiplexing/" target="_blank">Uso de Pinos</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_mg24_bluetooth/" target="_blank">Uso de Bluetooth</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_mg24_sense_built_in_sensor/" target="_blank"></a>Uso de IMU e Microfone</th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>


<br></br>

<span id="xiao_nr54l15_(sense)"><strong><font  size={"4"}>XIAO nRF54L15 (Sense)</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_getting_started" target="_blank">Wiki de Primeiros Passos</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_pin_multiplexing/" target="_blank">Uso de Pinos</a></th>
    <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_bluetooth_usage/" target="_blank">Uso de Bluetooth</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_power_consumptions" target="_blank">Consumo de Energia</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>


<span id="xiao_esp32c5"><strong><font  size={"4"}>XIAO ESP32C5</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_getting_started XIAO" target="_blank">Wiki de Primeiros Passos</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_pin_multiplexing XIAO" target="_blank">Uso de Pinos</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_buletooth_usage" target="_blank">Uso de Bluetooth</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_wifi_usage" target="_blank">Uso de WiFi</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xaio_esp32c5_wifi_throughput_tester" target="_blank">Teste de throughput WiFi</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_esp-mesh_audio" target="_blank">ESP‑WIFI‑MESH</a></th>
  </tr>
 </table>
</div>

## <span id="supported_languages/platforms">Linguagens/Plataformas Suportadas</span>

<br></br>
<div><a href="https://platformio.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/platformio.png" style={{width:'auto', height:50}} /></a></div>

<span id="platformio"><strong><a href="https://platformio.org/" target="_blank">PlatformIO</a></strong></span>, a solução de IDE mais amada para o Microsoft Visual Studio Code.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/stable/boards/atmelsam/seeed_xiao.html" target="_blank">XIAO SAMD21 (Seeeduino XIAO)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_nrf52840_with_platform_io/" target="_blank">XIAO nRF52840 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html" target="_blank">XIAO ESP32C3</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_with_platform_io/" target="_blank">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32s3.html" target="_blank">XIAO ESP32S3 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://taunoerik.art/2023/05/15/start-seeed-xiao-rp2040-on-platformio/" target="_blank">XIAO RP2040</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_rp2350_with_platform_io/" target="_blank">XIAO RP2350</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_mg24_with_platform_io/" target="_blank"> XIAO MG24 (Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_ra4m1_with_platform_io/" target="_blank">XIAO RA4M1</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_with_platform_io" target="_blank">XIAO nRF54L15 (Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_with_platformio" target="_blank">XIAO ESP32C5</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://micropython.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/micropython.png" style={{width:'auto', height:50}} /></a></div>

<span id="micropython"><strong><a href="https://micropython.org/" target="_blank">MicroPython</a></strong></span>, uma implementação completa da linguagem de programação Python 3 que roda diretamente em hardware embarcado.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO-SAMD21-MicroPython/" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-MicroPython/" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c3_with_micropython/" target="_blank">XIAO ESP32C3</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_with_micropython/" target="_blank">XIAO ESP32S3 (Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO_ESP32S3_Micropython/" target="_blank">XIAO ESP32S3 apenas com Sense (Câmera, Wi-Fi)</a></th>
    <th style={{width:333, height:'auto'}}><a href="https://micropython.org/download/SEEED_XIAO_NRF52/" target="_blank">XIAO nRF52840 Sense</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_micropython/" target="_blank">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://micropython.org/download/SEEED_XIAO_RP2350/" target="_blank">XIAO RP2350</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_micropython/" target="_blank">XIAO nRF54L15(Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_mg24_sense_micropython" target="_blank">XIAO MG24</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_ra4m1_micropython" target="_blank">XIAO RA4M1</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_with_micropyhton" target="_blank">XIAO ESP32C5</a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://circuitpython.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/circuitpython.png" style={{width:'auto', height:50}} /></a></div>

<span id="circuitpython"><strong><a href="https://circuitpython.org/" target="_blank">CircuitPython</a></strong></span>, uma linguagem de programação projetada para simplificar a experimentação e o aprendizado de codificação em placas de microcontroladores de baixo custo.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO-CircuitPython/" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-CircuitPython/" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO-BLE_CircutPython/" target="_blank">XIAO nRF52840 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c3_with_circuitpython/" target="_blank">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_project_circuitpython/" target="_blank">XIAO ESP32S3 Sense</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_with_circuitpython/" target="_blank">XIAO ESP32C6</a></th>
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

<span id="embedded_swift"><strong><a href="https://www.swift.org/getting-started/embedded-swift/" target="_blank">Embedded Swift</a></strong></span>, uma linguagem escalável, ótima para escrever aplicativos desktop e móveis, backends de servidor e software de sistema, executando em microcontroladores
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
    <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao-esp32-swift/" target="_blank">XIAO ESP32C6</a></th>
    <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
    <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://idf.espressif.com/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/espressif.png" style={{width:'auto', height:50}} /></a></div>

<span id="esp_idf"><a href="https://idf.espressif.com/" target="_blank"><strong>ESP IDF</strong></a></span>, o framework oficial de desenvolvimento de IoT da Espressif para as séries de SoCs ESP32, ESP32-S e ESP32-C, fornecendo um SDK autossuficiente para qualquer desenvolvimento genérico de aplicações nessas plataformas, usando linguagens de programação como C e C++.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_idf/" target="_blank">Série XIAO ESP32 (Primeiros Passos)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/getting_started_with_matter/" target="_blank">Desenvolvimento Matter 1</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32_matter_env/" target="_blank">Desenvolvimento Matter 2</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/matter_development_framework/" target="_blank">Desenvolvimento Matter 3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_mg24_matter" target="_blank">XIAO MG24</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_matter" target="_blank">XIAO nRF54L15 (Sense)</a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.rust-lang.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/rust.png" style={{width:'auto', height:50}} /></a></div>

<span id="rust"><strong><a href="https://www.rust-lang.org/" target="_blank">Rust</a></strong></span>, uma linguagem que capacita todos a construir software confiável e eficiente.
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

<span id="tinygo"><strong><a href="https://tinygo.org/" target="_blank">TinyGo</a></strong></span>, um compilador Go destinado ao uso em espaços reduzidos, como microcontroladores, WebAssembly (wasm/wasi) e ferramentas de linha de comando.
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

<span id="microblocks"><strong><a href="https://microblocks.fun/" target="_blank">MicroBlocks</a></strong></span>, uma linguagem de programação em blocos para computação física inspirada no Scratch.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_samd21_microblocks" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_rp2040_microblocks" target="_blank">XIAO RP2040</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_rp2350_microblocks" target="_blank">XIAO RP2350</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_ble_microblocks" target="_blank">XIAO nRF52840</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c3_microblocks" target="_blank">XIAO ESP32-C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_microblocks" target="_blank">XIAO ESP32-S3</a></th>
  </tr>
 </table>
</div>

## <span id="supported_rtos">RTOS com suporte</span>

<br></br>
<div><a href="https://docs.zephyrproject.org/latest/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr.png" style={{width:'auto', height:70}} /></a></div>

<span id="zephyr"><strong><a href="https://docs.zephyrproject.org/latest/" target="_blank">Zephyr</a></strong></span>, um sistema operacional de tempo real (RTOS) escalável que oferece suporte a múltiplas arquiteturas de hardware, otimizado para dispositivos com recursos limitados e desenvolvido com foco em segurança.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO-SAMD21-Zephyr-RTOS/" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-Zephyr-RTOS/" target="_blank">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO-nRF52840-Zephyr-RTOS/" target="_blank">XIAO nRF52840 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO-ESP32C3-Zephyr/" target="_blank">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_zephyr_rtos/" target="_blank">XIAO ESP32S3 (Sense)</a></th>
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

<span id="freertos"><strong><a href="https://www.freertos.org/" target="_blank">FreeRTOS</a></strong></span>,  sistema operacional em tempo real para microcontroladores e pequenos microprocessadores.
<br></br>
<br></br>
<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}>XIAO SAMD21</th>
   <th style={{width:333, height:'auto'}}>XIAO nRF52840</th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao-esp32s3-freertos/" target="_blank">XIAO ESP32S3 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_with_freertos/" target="_blank">XIAO ESP32C5</a></th>
   <th style={{width:333, height:'auto'}}></th>
   <th style={{width:333, height:'auto'}}></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://nuttx.apache.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/nuttxrtos.png" style={{width:'auto', height:80}} /></a></div>

<span id="apache_nuttx_rtos"><strong><a href="https://nuttx.apache.org/" target="_blank">Apache NuttX RTOS</a></strong></span>, um sistema operacional em tempo real (RTOS) com ênfase na conformidade com padrões e em baixo uso de memória
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/samd2l2/boards/xiao-seeeduino/index.html" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao-rp2040-with-nuttx/" target="_blank">XIAO RP2040</a></th>
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

## <span id="communications">Comunicações</span>

<br></br>
<div><a href="https://kafka.apache.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/apachekafka.png" style={{width:'auto', height:50}} /></a></div>

<span id="apache_kafka"><strong><a href="https://kafka.apache.org/" target="_blank">Apache Kafka</a></strong></span>, uma plataforma de streaming de eventos distribuída e de código aberto, usada por milhares de empresas para pipelines de dados de alto desempenho, análise de dados em streaming, integração de dados e aplicações de missão crítica.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_kafka/" target="_blank">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://csa-iot.org/all-solutions/matter/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/matter.png" style={{width:'auto', height:50}} /></a></div>

<span id="matter"><strong><a href="https://csa-iot.org/all-solutions/matter/" target="_blank">Matter</a></strong></span>, protocolo padrão unificador da indústria que oferece conectividade confiável e segura para dispositivos e sistemas compatíveis.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_idf/" target="_blank">Série XIAO ESP32 (C3, S3, C6)</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://csa-iot.org/all-solutions/zigbee/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zigbee.png" style={{width:'auto', height:50}} /></a></div>

<span id="zigbee"><strong><a href="https://csa-iot.org/all-solutions/zigbee/" target="_blank">Zigbee</a></strong></span>, uma tecnologia sem fio desenvolvida como um padrão aberto de conectividade global de mercado para atender às necessidades exclusivas de redes de dados IoT sem fio de baixo custo e baixo consumo de energia.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_zigbee_arduino/" target="_blank">XIAO ESP32C6（Arduino）</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_zigbee/" target="_blank">XIAO ESP32C6（IDF）</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_zigbee_arduino" target="_blank">XIAO ESP32C5 (Arduino)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_zigbee_idf" target="_blank">XIAO ESP32C5 (IDF)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_zigbee" target="_blank">XIAO nRF54L15 (Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.espressif.com/en/solutions/low-power-solutions/esp-now" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/espnow.png" style={{width:'auto', height:50}} /></a></div>

<span id="espnow"><strong><a href="https://www.espressif.com/en/solutions/low-power-solutions/esp-now" target="_blank">ESP-NOW</a></strong></span>, um protocolo de comunicação sem fio para respostas rápidas e baixo consumo de energia, amplamente utilizado em eletrodomésticos inteligentes, controle remoto e sensores.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_espnow/" target="_blank">Série XIAO ESP32 (ESP32C3, ESP32S3, ESP32S3 Sense, ESP32C6)</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://meshtastic.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/mashtastic.png" style={{width:'auto', height:70}} /></a></div>

<span id="meshtastic"><strong><a href="https://meshtastic.org/" target="_blank">Meshtastic</a></strong></span>, uma rede mesh descentralizada, fora da rede convencional, de código aberto, criada para operar em dispositivos acessíveis e de baixo consumo de energia
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/wio_sx1262_xiao_esp32s3_for_meshtastic/" target="_blank">XIAO ESP32S3 para Meshtastic e LoRa</a></th>
   <th style={{width:333, height:'auto'}}>XIAO nRF52840 </th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://aws.amazon.com/iot-core/sidewalk/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/amazonsidewalk.png" style={{width:'auto', height:50}} /></a></div>

<span id="amazon_sidewalk"><strong><a href="https://aws.amazon.com/iot-core/sidewalk/" target="_blank">Amazon Sidewalk</a></strong></span>, uma rede de longo alcance criptografada e gratuita para conexão que fornece conectividade persistente para bilhões de dispositivos.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao-ble-sidewalk/" target="_blank">XIAO nRF52840</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.blecon.net/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/blecon.png" style={{width:'auto', height:60}} /></a></div>

<span id="blecon"><strong><a href="https://www.blecon.net/" target="_blank">Blecon</a></strong></span>, permite que produtos físicos se comuniquem com aplicações em nuvem usando Bluetooth Low Energy.
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

## <span id="tinyml/embedded_machine_learningtinyml">Plataformas TinyML/Aprendizado de Máquina Embarcado</span>

<br></br>
<div><a href="https://sensecraft.seeed.cc/ai/#/home" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/sensecraft.png" style={{width:'auto', height:50}} /></a></div>

<span id="sensecraft_ai"><strong><a href="https://sensecraft.seeed.cc/ai/#/home" target="_blank">SenseCraft AI</a></strong></span>, <strong>Sua solução ideal para treinamento de modelos sem código, implantação e muito mais.</strong>
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_edgelab/" target="_blank">XIAO ESP32S3 Sense (Model Assistant)</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://ai.google.dev/edge/litert" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tensorflowlite.png" style={{width:'auto', height:50}} /></a></div>

<span id="tensorflow_lite"><strong><a href="https://ai.google.dev/edge/litert" target="_blank">TensorFlow Lite</a></strong></span>, o runtime de alto desempenho do Google para IA em dispositivos.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO-BLE-Sense-TFLite-Getting-Started/" target="_blank">XIAO nRF52840 (Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://edgeimpulse.com/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/edgeimpulse.png" style={{width:'auto', height:50}} /></a></div>

<span id="edge_impulse"><strong><a href="https://edgeimpulse.com/" target="_blank">Edge Impulse</a></strong></span>, a principal plataforma de desenvolvimento para aprendizado de máquina em dispositivos de borda.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO-TinyML/" target="_blank">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-EI/" target="_blank">XIAO RP2040</a></th>
    <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAOEI/" target="_blank">XIAO nRF52840 (Sense)-Reconhecimento de Movimento</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/tinyml_course_Key_Word_Spotting/" target="_blank">XIAO ESP32S3 Sense (Detecção de Palavra-Chave)</a></th>
    <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/tinyml_course_Image_classification_project/" target="_blank">XIAO ESP32S3 Sense (Classificação de Imagens)</a></th>
    <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

## <span id="smart_home_and_automation">Casa Inteligente e Automação</span>

<br></br>
<div><a href="https://www.home-assistant.io/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/homoassiatant.png" style={{width:'auto', height:50}} /></a></div>
<div><a href="https://esphome.io/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/esphome.png" style={{width:'auto', height:50}} /></a></div>

<span id="home_assistant_esphome"><strong><a href="https://www.home-assistant.io/" target="_blank">Home Assistant</a> & <a href="https://esphome.io/" target="_blank">ESPHome</a></strong></span>, um sistema para controlar seus microcontroladores por meio de arquivos de configuração simples, porém poderosos, e controlá-los remotamente por meio de sistemas de automação residencial como o Home Assistant.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/XIAO_ESP32S3_esphome/" target="_blank">XIAO ESP32S3 Sense</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/Connect-Grove-to-Home-Assistant-ESPHome/#grove-compatibility-list-with-esphome" target="_blank">Sensores Grove</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao-esp32c3-esphome/" target="_blank">XIAO ESP32C3</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiaoc6_zigbee_led_ha" target="_blank">XIAO ESP32C6 (zigbee)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_homeassistant" target="_blank">XIAO ESP32C5</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_mg24_ha_openthread/" target="_blank">XIAO MG24</a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://github.com/arendst/Tasmota" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tasmota.png" style={{width:'auto', height:50}} /></a></div>

<span id="tasmota"><strong><a href="https://github.com/arendst/Tasmota" target="_blank">Tasmota</a></strong></span>, firmware alternativo de código aberto para dispositivos baseados em ESP8266 e ESP32 com fácil configuração usando webUI, atualizações OTA, automação usando temporizadores ou regras, expansibilidade e controle totalmente local via MQTT, HTTP, Serial ou KNX.
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
   <th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_mmwave_sensor_kit.html" target="_blank">Kit de Sensor de Detecção Humana Sensor de Presença Baseado em XIAO ESP32C3</a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

## <span id="open_source_keyboard_firmware_support">Suporte a Firmware de Teclado de Código Aberto</span>

<br></br>
<div><a href="https://qmk.fm/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/qmk.png" style={{width:'auto', height:50}} /></a></div>

<span id="qmk"><strong><a href="https://qmk.fm/" target="_blank">QMK</a></strong></span>, firmware de teclado de código aberto para as famílias Atmel AVR e Arm USB.
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

<span id="zmk"><strong><a href="https://zmk.dev/" target="_blank">ZMK</a></strong></span>, um firmware de teclado de código aberto construído sobre o Sistema Operacional de Tempo Real (RTOS) do Projeto Zephyr™.
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

## <span id="other_hot_applications">Outras Aplicações Populares</span>

<br></br>
<div><a href="https://kno.wled.ge/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/wled.png" style={{width:'auto', height:50}} /></a></div>

<span id="wled"><strong><a href="https://kno.wled.ge/" target="_blank">WLED</a></strong></span>, uma implementação rápida e rica em recursos de um servidor web ESP8266/ESP32 para controlar LEDs NeoPixel (WS2812B, WS2811, SK6812) ou também chipsets baseados em SPI.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://www.instructables.com/WLED-ON-XIAO-ESP32/" target="_blank">XIAO ESP32 Series (C3, S3, S3 Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://chatgpt.com/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/chatgtp.png" style={{width:'auto', height:50}} /></a></div>

<span id="chatgpt"><strong><a href="https://chatgpt.com/" target="_blank">ChatGPT</a></strong></span>, um modelo irmão do InstructGPT⁠, que é treinado para seguir uma instrução em um prompt e fornecer uma resposta detalhada.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiaoesp32c3-chatgpt/" target="_blank">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.ffmpeg.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/ffmpeg.png" style={{width:'auto', height:50}} /></a></div>

<span id="ffmpeg"><strong><a href="https://www.ffmpeg.org/" target="_blank">FFmpeg</a></strong></span>, uma coleção de bibliotecas e ferramentas para processar conteúdo multimídia como áudio, vídeo, legendas e metadados relacionados.
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

<span id="mros2_esp32"><strong><a href="https://github.com/mROS-base/mros2-esp32" target="_blank">mROS2-ESP32</a></strong></span>, um ambiente de execução leve para nós ROS em microcontroladores embarcados esp32
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

## <span id="prototyping_tools_pcb_layout_stimulation">Ferramentas de Prototipagem (Layout de PCB & Simulação)</span>

<br></br>
<div><a href="https://fritzing.org/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/fritzing.png" style={{width:'auto', height:50}} /></a></div>

<span id="fritzing"><strong><a href="https://fritzing.org/" target="_blank">Fritzing</a></strong></span>, uma plataforma de design eletrônico e prototipagem para makers, hobbistas e educadores.
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

<span id="fluxai"><strong><a href="https://www.flux.ai/" target="_blank">FluxAI</a></strong></span>, uma forma melhor de criar PCBs profissionais com um copiloto de IA.
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

<span id="wokwi"><strong><a href="https://wokwi.com/" target="_blank">Wokwi</a></strong></span>, o simulador ESP32 mais avançado do mundo.
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

## <span id="iot_clouds_and_iot_platforms">Nuvens IoT e Plataformas IoT</span>

<br></br>
<div><a href="https://aws.amazon.com/iot/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/awsiot.png" style={{width:'auto', height:50}} /></a></div>

<span id="aws_iot"><strong><a href="https://aws.amazon.com/iot/" target="_blank">AWS IoT</a></strong></span>, permite conectar e gerenciar dispositivos com segurança, coletar e analisar dados dos dispositivos e criar e implantar soluções que geram maior valor para o negócio.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_aws_iot/" target="_blank">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://thingspeak.mathworks.com/" target="_blank"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/thingspeak.png" style={{width:'auto', height:70}} /></a></div>

<span id="thingspeak"><strong><a href="https://thingspeak.mathworks.com/" target="_blank">ThingSpeak</a></strong></span>, a plataforma IoT aberta com análises MATLAB.
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

<span id="ubidots"><strong><a href="https://ubidots.com/" target="_blank">Ubidots</a></strong></span>, uma plataforma de desenvolvimento IoT de baixo código para engenheiros e desenvolvedores que não têm tempo ou energia para construir uma aplicação IoT completa e pronta para produção.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/pt-br/L76K_Path_Tracking_on_Ubidots/" target="_blank">XIAO ESP32S3 + Módulo GNSS L76K para Rastreamento</a></th>
   <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
            <th style={{width:333, height:'auto'}}><a href="" target="_blank"></a></th>
  </tr>
 </table>
</div>

<br></br>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
