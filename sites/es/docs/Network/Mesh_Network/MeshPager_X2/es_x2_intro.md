---
description: Explora la Serie SenseCAP MeshPager X2 de comunicadores Meshtastic independientes con LR2021 LoRa, GNSS de doble banda, una pantalla de 2,0 pulgadas, protección IP66 y hasta 7 días de duración de la batería.
title: Introducción a la Serie SenseCAP MeshPager X2
keywords:
  - MeshPager X2 Series
  - Meshtastic
  - ESP32-S3
  - LR2021
slug: /meshpager_x2_intro
sidebar_position: 0
last_update:
  date: 11/12/2026
  author: Yves
createdAt: '2026-10-09'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/es/meshpager_x2_intro/
---


La Serie SenseCAP MeshPager X2 ofrece comunicadores de mano [Meshtastic®](https://meshtastic.org/) independientes para mensajería fuera de la red y compartición de ubicación. Impulsado por el ESP32-S3 y el módulo Wio-LR2021 basado en **Semtech LR2021**, combina **LoRa de 863–928 MHz, Bluetooth LE y Wi‑Fi** con GNSS de doble banda, una **pantalla IPS de 2,0 pulgadas**, controles físicos y una **batería de 3400 mAh**. Con hasta **7 días de funcionamiento** y hasta **10 km de comunicación en línea de vista** probados a 915 MHz, puedes redactar mensajes, leer conversaciones y rastrear ubicaciones directamente en el X2 sin un smartphone.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-product-angle.png" alt="Vista del producto MeshPager X2 que muestra la antena externa, la pantalla, los botones naranjas y el pad direccional" width={1248} height={800} style={{width: 800, maxWidth: '100%', height: 'auto'}} />
  <figcaption>MeshPager X2. <a href="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-product-front.png" target="_blank" rel="noopener noreferrer">Vista frontal.</a></figcaption>
</figure>

## Características

- **Comunicación independiente y fácil de transportar:** Escribe texto, visualiza mensajes y rastrea ubicaciones directamente en la pantalla de 2,0 pulgadas usando los controles físicos. El cuerpo compacto incluye un clip de cinturón metálico y un ojal para cordón para sujetar el X2 a una mochila, cinturón o prenda, llevarlo en un cordón o transportarlo en un bolsillo.

- **LoRa de nueva generación y largo alcance:** Semtech LR2021 admite **863–928 MHz**, con sensibilidad de receptor hasta **−141 dBm** y comunicación de **hasta 10 km en condiciones de línea de vista, probada a 915 MHz**. La antena externa flexible tipo látigo de 70 mm admite comunicación de largo alcance para equipos en entornos remotos.

- **GNSS de doble banda y conocimiento de la altitud:** El AG3335MV/B proporciona **posicionamiento de doble banda L1 + L5** para entornos exteriores exigentes, incluyendo cubierta arbórea y cañones. Un barómetro integrado proporciona mediciones de presión atmosférica para el seguimiento de la altitud en tiempo real, complementando la información de ubicación GNSS en la ruta.

- **Hasta una semana de duración de batería con USB‑C:** La **batería de 3400 mAh** proporciona **hasta 7 días de funcionamiento continuo** para excursiones al aire libre de varios días. USB‑C admite carga, actualizaciones de firmware y depuración.

- **Protección IP66 para exteriores:** La **carcasa con clasificación IP66** protege contra el polvo y la lluvia intensa para uso en exteriores en condiciones exigentes.

- **Sensores integrados, almacenamiento ampliable y hardware de audio:** Un barómetro, magnetómetro y giroscopio proporcionan datos de presión atmosférica, rumbo y movimiento. La **ranura para tarjeta microSD** admite mapas sin conexión y registro de datos con firmware compatible. El micrófono y el altavoz integrados proporcionan hardware para **futuras actualizaciones de mensajería de voz**.

El alcance real de comunicación y el tiempo de funcionamiento de la batería varían según la configuración del dispositivo, el uso, el terreno y las condiciones de operación.

## Especificación

<table aria-label="MeshPager X2 specification" style={{width: '100%', display: 'table'}}>
  <thead>
    <tr>
      <th scope="col" style={{width: '42%', textAlign: 'center'}}>Elemento</th>
      <th scope="col" style={{textAlign: 'center'}}>Parámetro</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Procesador</th>
      <td>Espressif ESP32-S3R8, doble núcleo, hasta 240 MHz</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>LoRa</th>
      <td>Wio-LR2021 (Semtech LR2021)</td>
    </tr>
    <tr>
      <td>Rango de frecuencia: 863–928 MHz</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>GNSS</th>
      <td>AG3335MV/B, posicionamiento de doble banda L1 + L5</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Memoria</th>
      <td>32 MB Flash / 8 MB PSRAM</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={5} style={{textAlign: 'left', verticalAlign: 'middle'}}>Antena</th>
      <td>Antena LoRa externa, conector macho RP-SMA</td>
    </tr>
    <tr>
      <td>Rango de frecuencia: 863–928 MHz</td>
    </tr>
    <tr>
      <td>Dimensiones: Ø10,5 × 70 mm</td>
    </tr>
    <tr>
      <td>Ganancia pico: 0,32 dBi</td>
    </tr>
    <tr>
      <td>Eficiencia máxima: 48,7%</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>Conectividad inalámbrica</th>
      <td>Wi‑Fi: 2,4 GHz</td>
    </tr>
    <tr>
      <td>Bluetooth 5.0</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>Interfaz</th>
      <td>USB Tipo‑C</td>
    </tr>
    <tr>
      <td>Ranura para tarjeta MicroSD (SDIO/SDMMC de 1 bit)</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Entrada de alimentación</th>
      <td>USB Tipo‑C: 5 V CC</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>Pantalla IPS</th>
      <td>Tamaño: 2,0 pulgadas</td>
    </tr>
    <tr>
      <td>Resolución: 240 × 320 píxeles</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Botón</th>
      <td>Encendido × 1<br />Botones direccionales × 4<br />Confirmar × 1<br />Volver × 1</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Audio</th>
      <td>Micrófono: micrófono analógico con ADC ES7243E<br />Salida: códec ES8311 y amplificador de altavoz NS4150B</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Distancia de comunicación</th>
      <td>Hasta 10 km (línea de vista, probado a 915 MHz)</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Grado de protección IP</th>
      <td>IP66</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Dimensión</th>
      <td>110,6 × 64,3 × 26,85 mm</td>
    </tr>
  </tbody>
</table>

## Batería

<table aria-label="MeshPager X2 battery" style={{width: '100%', display: 'table'}}>
  <thead>
    <tr>
      <th scope="col" style={{width: '42%', textAlign: 'center'}}>Elemento</th>
      <th scope="col" style={{textAlign: 'center'}}>Parámetro</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Capacidad de la batería</th>
      <td>3400 mAh</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Puerto de carga</th>
      <td>USB Tipo‑C (carga, flasheo de firmware y transferencia de datos)</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Entrada de alimentación del dispositivo</th>
      <td>5 V CC</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Temperatura de funcionamiento (descarga)</th>
      <td>-20°C a 60°C</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Temperatura de carga</th>
      <td>5°C a 45°C</td>
    </tr>
  </tbody>
</table>

<details>
<summary>Condiciones de temperatura de la batería</summary>

La celda de la batería especifica diferentes corrientes en estos rangos de temperatura:

- **Descarga:** 0,2C de -20°C a 15°C; 0,5C de 15°C a 60°C.
- **Carga:** 0,2C de 5°C a 15°C; 0,5C de 15°C a 45°C.

Evita la carga o descarga prolongada en los límites de temperatura.

</details>

<details>
<summary style={{fontSize: '1.5rem', fontWeight: 600}}>Descripción general del hardware</summary>

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <a href="https://files.seeedstudio.com/wiki/MeshPagerX2/MeshPager-X2-V1.0-2x.png" target="_blank" rel="noopener noreferrer">
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/MeshPager-X2-V1.0-2x.png" alt="Diagrama de bloques de hardware MeshPager X2 V1.0 que muestra alimentación, ESP32-S3, LoRa, GNSS, sensores, pantalla, almacenamiento y conexiones de audio, con GPIO41 alimentando ES8311 DSDIN y ES7243E SDOUT alimentando GPIO42" width={4680} height={3960} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  </a>
  <figcaption>Diagrama de bloques de hardware de MeshPager X2. Haz clic para ampliar.</figcaption>
</figure>

| Componente | Función |
| --- | --- |
| Pantalla frontal | Mensajes, información del nodo, estado GNSS y mapas |
| Teclas direccionales | Navegación por menús, selección en el teclado en pantalla y desplazamiento por el mapa |
| Confirmar / Volver | Seleccionar un elemento o volver a la vista anterior |
| Tecla de encendido | Control de encendido y apagado/activación de la pantalla |
| Antena LoRa flexible | Conexión de radio mallada sub‑GHz |
| Puerto USB‑C | Carga y conexión a un ordenador |
| Ranura para tarjeta microSD | Almacenamiento para teselas de mapas sin conexión |
| Micrófono y altavoz | Entrada y salida de audio |
| Barómetro | Mediciones de presión atmosférica para el seguimiento de la altitud |
| Clip de cinturón metálico y ojal para cordón | Fijar el X2 a un cinturón, mochila o cordón |

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142948.png" alt="Primer plano de la ranura para tarjeta microSD del MeshPager X2 con su cubierta exterior retirada" width={600} height={242} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>Ranura para tarjeta microSD. Consulta <a href="/es/x2_get_started_for_meshtastic/#microsd-y-mapas-sin-conexión">microSD y mapas sin conexión</a> para la preparación de la tarjeta.</figcaption>
</figure>

Para la configuración y el funcionamiento de los botones, consulta [Comenzar con la Serie MeshPager X2](/es/x2_get_started_for_meshtastic/).

### Lista de pines

<details>
<summary>Asignaciones de pines del ESP32-S3</summary>

Estas asignaciones siguen el esquema MeshPager X2 V1.0. Los números GPIO identifican señales del ESP32-S3, no números de patilla del encapsulado.

| Función | Señal | GPIO ESP32-S3 |
| --- | --- | --- |
| Tecla Return / BOOT | `ESP_BOOT/Return` | GPIO0 |
| Voltaje de batería | `BAT_ADC` | GPIO1 |
| Interrupción del expansor | `EXP_I2C_INT1` | GPIO2 |
| Reloj SPI de LoRa | `LR_SPI_SCK` | GPIO3 |
| Datos de salida SPI de LoRa | `LR_SPI_MOSI` | GPIO4 |
| Datos de entrada SPI de LoRa | `LR_SPI_MISO` | GPIO5 |
| Selección de chip LoRa | `LR_NSS` | GPIO6 |
| Interrupción LoRa | `LR_DIO8` | GPIO7 |
| Ocupado LoRa | `LR_BUSY` | GPIO8 |
| Tecla de encendido | `PWR_BUTTON` | GPIO9 |
| Selección de chip TFT | `TFT_CS` | GPIO10 |
| Datos SPI TFT | `TFT_SDA` | GPIO11 |
| Reloj SPI TFT | `TFT_SCK` | GPIO12 |
| Datos/comandos TFT | `TFT_A0` | GPIO13 |
| Comando microSD | `SD_CMD` | GPIO14 |
| Reloj microSD | `SD_CLK` | GPIO15 |
| Datos microSD | `SD_DAT0` | GPIO16 |
| Expansor / RTC I2C | SDA / SCL | GPIO17 / GPIO18 |
| USB nativo | D− / D+ | GPIO19 / GPIO20 |
| Pulso por segundo GNSS | `AG_PPS0` | GPIO21 |
| Reloj maestro de audio | `CODEC_I2S0_MCLK` | GPIO38 |
| Reloj de bits de audio | `CODEC_I2S0_SCLK` | GPIO39 |
| Reloj de palabra de audio | `CODEC_I2S0_LRCK` | GPIO40 |
| Datos de reproducción de audio | `CODEC_I2S0_DSDIN` | GPIO41 |
| Datos de captura de audio | `CODEC_I2S0_SDOUT` | GPIO42 |
| UART GNSS | MCU TX / MCU RX | GPIO43 / GPIO44 |
| Salida RTC | `RTC_OUT` | GPIO45 |
| Retroiluminación TFT | `TFT_PWM` | GPIO46 |
| Sensor / audio I2C | SDA / SCL | GPIO47 / GPIO48 |

</details>

<details>
<summary>Notas sobre el expansor de E/S y dispositivos I2C</summary>

**Expansor de E/S**

El TCA6424A está en la dirección I2C `0x22`. Los nombres de puerto como `P14` identifican pines del expansor, no GPIO del ESP32-S3.

| Puerto TCA6424A | Señal / función en el esquema |
| --- | --- |
| P00 / P01 / P02 / P03 | Arriba / Abajo / Izquierda / Derecha |
| P04 | Confirmar |
| P05 | Punto de prueba TP47 |
| P06 | `CHARGER_STAT`, estado del cargador |
| P07 | `EXP_SD_DET`, detección de microSD |
| P10 / P11 | `AG_RTC_INT` / `AG_SLEEP_INT`, interrupciones GNSS |
| P12 | `IMU_INT1`, interrupción del sensor de movimiento |
| P13 | Punto de prueba TP41 |
| P14 | `VCC_SEN_EN`, habilitación de alimentación de sensor y audio |
| P15 | `VCC_SD_EN`, habilitación de alimentación de microSD |
| P16 | `VCC_TFT_EN`, habilitación de alimentación de TFT y retroiluminación |
| P17 | `AG_VRTC_EN`, habilitación de alimentación de respaldo GNSS |
| P20 | `AG_PWR_EN`, habilitación de alimentación principal GNSS |
| P21 | `VBAT_ADC_EN`, habilitación de medición de batería |
| P22 | `AUDIO_PA_EN`, habilitación del amplificador de altavoz |
| P23 | `USB_IN`, detección de entrada USB |
| P24 | `PWR_HOLD`, enclavamiento de alimentación principal |
| P25 / P26 / P27 | Reinicio de TFT / LoRa / GNSS |

**Dispositivos I2C**

| Bus | Dispositivo | Dirección mostrada en el esquema |
| --- | --- | --- |
| GPIO17 SDA / GPIO18 SCL | Expansor de E/S TCA6424A | `0x22` |
| GPIO47 SDA / GPIO48 SCL | Sensor de movimiento LSM6DSO | `0x6A` |
| GPIO47 SDA / GPIO48 SCL | Magnetómetro BMM350 | `0x15` |
| GPIO47 SDA / GPIO48 SCL | Barómetro SPA06-003 | `0x77` |
| GPIO47 SDA / GPIO48 SCL | Códec ES8311 | `0x18` |
| GPIO47 SDA / GPIO48 SCL | ADC ES7243E | `0x14` |

En el esquema V1.0, el pin `ADSEL` del BMM350 se tira a alto a través de R147 (10 kΩ), seleccionando `0x15`. ES7243E usa `0x14`, por lo que los dos dispositivos tienen direcciones distintas en el bus I2C compartido.

</details>

<details>
<summary>Notas de integración de hardware</summary>

- **Antena:** Las especificaciones son para el M02-0401060R0A y usan la configuración de prueba de referencia del proveedor. Selecciona la región LoRa del dispositivo de acuerdo con la normativa local.
- **Batería:** Usa la batería X2 especificada, clasificada para carga de 4,4 V, con su conexión de detección de temperatura. No sustituyas por una celda clasificada para un voltaje máximo de carga de 4,2 V.
- **Flash:** X2 tiene 32 MB de flash externa. El esquema V1.0 especifica PY25Q256HB-SUH-IR. Usa la distribución de particiones suministrada con el paquete de firmware correspondiente.
- **Botones y detección de alimentación:** Return se conecta al `GPIO0` del ESP32-S3. `P06` del TCA6424A proporciona el estado del cargador y `P23` proporciona la detección de entrada USB; `P05` y `P13` se conectan a los puntos de prueba TP47 y TP41.
- **Radio:** LoRa usa la conexión `Sub-G_RF` del módulo. Su puerto `2.4G_RF` no está conectado; Wi-Fi y Bluetooth usan la ruta de antena del ESP32-S3.

</details>

</details>

## Aplicación

- **Comunicación de equipo fuera de la red:** Intercambia mensajes de texto y comparte ubicaciones con otros nodos Meshtastic cuando el servicio celular o Wi‑Fi no está disponible.
- **Senderismo y acampada:** Visualiza la posición GNSS y mapas sin conexión precargados directamente en X2. Usa los botones físicos para redactar y leer mensajes sin un smartphone.

Para la configuración y el funcionamiento, consulta [Get Started with MeshPager X2 Series](/es/x2_get_started_for_meshtastic/).

## Documento

- [Hoja de cálculo de consumo de energía de MeshPager X2 (.xlsx)](https://files.seeedstudio.com/wiki/MeshPagerX2/MeshPager%20X2%20power%20consumption.xlsx)

## Soporte técnico y debate sobre el producto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank" rel="noopener noreferrer">
    <img
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg"
      alt="Únete a la comunidad Meshtastic de Seeed Studio en Facebook"
      style={{width: '90%', maxWidth: '800px', height: 'auto'}}
      loading="lazy"
    />
  </a>
</p>

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Foro técnico de Seeed Studio"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Contactar con el soporte de Seeed Studio"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Comunidad de Seeed Studio en Discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Debate sobre el Wiki de Seeed Studio"></a>
</div>
