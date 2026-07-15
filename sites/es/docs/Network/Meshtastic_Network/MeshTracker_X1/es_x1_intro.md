---
description: Introducción a SenseCAP MeshTracker X1 para Meshtastic. Este wiki presentará las funciones, especificaciones, descripción general del hardware, botón, LED y lista de pines.
title: Introducción a SenseCAP MeshTracker X1
keywords:
  - Tracker
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/X1First.png
sku: 100087698
slug: /meshtracker_x1_intro
sidebar_position: 0
last_update:
  date: 5/29/2026
  author: MichelleHuang
url: https://wiki.seeedstudio.com/es/meshtracker_x1_intro/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/X1First.png" alt="pir" width={800} height="auto" /></p>

El primer dispositivo Meshtastic del mundo del tamaño de una tarjeta con GPS de doble banda. Diseñado para una comunicación confiable fuera de la red, MeshTracker X1 es un rastreador GPS [Meshtastic®](https://meshtastic.org/) con clasificación IP66 que admite frecuencias de 863–928 MHz. Impulsado por el último chip LoRa Semtech LR2021, cuenta con conectividad USB-C, hasta 5 días de duración de batería y un diseño compacto, listo para exteriores.

### Características

- **Un dispositivo Meshtastic que realmente llevarás contigo** 

SenseCAP MeshTracker X1 está diseñado para personas que necesitan comunicación confiable y uso compartido de ubicación más allá de las redes celulares, ya sea al aire libre, en grandes eventos o durante situaciones de emergencia. Con un factor de forma verdaderamente portátil y protección robusta IP66, lleva la conectividad Meshtastic al uso diario y a aplicaciones reales de campo.
- **Rastreo GPS ultrapreciso de doble banda** 

Impulsado por GNSS de doble banda L1+L5 y un barómetro integrado, MeshTracker X1 ofrece un posicionamiento y una conciencia de altitud más confiables que el GPS de banda única. También es el primer dispositivo Meshtastic del mundo del tamaño de una tarjeta con GPS de doble banda.
- **Conectividad LoRa de próxima generación (LR2021)** 

Impulsado por Semtech LR2021, MeshTracker X1 ofrece un rendimiento de RF más potente con una sensibilidad de hasta -141 dBm y tasas de datos FLRC de 2,6 Mbps para una comunicación de malla más rápida y confiable, creando una base para funciones futuras como transmisión de voz e imagen.
- **Comunicación confiable de largo alcance** 

Probado a 915 MHz, MeshTracker X1 permite una comunicación confiable a distancias de hasta 8 km en condiciones de línea de vista abierta, manteniendo a los equipos conectados durante aventuras al aire libre, eventos y situaciones de emergencia.
- **Diseño del tamaño de una tarjeta, fácil de llevar** 

Delgado y ligero, MeshTracker X1 está diseñado para llevarlo a diario durante las aventuras al aire libre. Llévalo en un cordón, sujétalo a una mochila, fíjalo a una bolsa de bicicleta o simplemente deslízalo en tu bolsillo para disfrutar de conectividad fuera de la red sin esfuerzo.
- **Alertas flexibles de vibración y sonido** 

MeshTracker X1 ofrece opciones de notificación flexibles con vibración integrada y retroalimentación mediante zumbador. Mantente al tanto de los mensajes entrantes tanto si estás en un evento ruidoso, montando al aire libre o explorando senderos tranquilos donde prefieres mínimas distracciones.
- **Protección robusta para exteriores IP66** 

Construido con protección IP66 contra el polvo y el agua, lo que garantiza un rendimiento confiable en entornos exteriores hostiles como lluvia, barro y caminos polvorientos.
- **Conectividad USB-C** 

Interfaz USB-C estándar para carga, actualizaciones de firmware y depuración, diseñada para uso robusto en exteriores y comodidad diaria.
- **Larga duración de batería** 

Un factor de forma altamente integrado, del tamaño de una tarjeta, optimizado en torno a una batería de alta capacidad de 1100 mAh, que ofrece hasta 5 días de funcionamiento y sigue siendo compacto y portátil para llevar al aire libre y comunicación fuera de la red.


### Especificación

**General**

|**Protocolo de red**|LoRa (863-928 MHz), Bluetooth (v5.0)|
| :- | :- |
|**LED**|1\* RGB|
|**Zumbador**|1\* zumbador para indicar el estado|
|**Botón**|1\* botón para operar|
|**Motor**|1\* DRV2605L|
|**Antena**|Interna (GNSS/LoRa/Bluetooth)|
|**Distancia de comunicación**|hasta 8 km|
|**Grado de protección IP**|IP66|
|**Dimensiones**|90\*57\*8 mm|
|**Peso del dispositivo**|45 g|
|**Temperatura de funcionamiento**|-20 a 60℃|
|**Certificación**|CE/FCC/RoSH/TELEC|

**Batería**

|Elemento|Parámetro|
| :- | :- |
|**Capacidad de la batería**|Batería de litio recargable, 1100 mAh|
|**Supervisión de la vida de la batería**|Nivel de batería de subida periódica|
|<p>**Cable de carga**</p><p>**(Adaptador no incluido)**</p>|Cable de carga USB tipo C, 20 cm|
|**Tensión de entrada de alimentación**|4,4 V|
|**Límite de temperatura de carga**|5 a +45℃|

### Lista de pines

<table>
  <tr>
    <th>Componente</th>
    <th>Pin</th>
    <th>N.º de pin</th>
    <th>Protocolo</th>
  </tr>
  <tr>
    <td rowspan="3">LED</td>
    <td>R</td>
    <td>P0.03</td>
    <td rowspan="3">GPIO</td>
  </tr>
  <tr>
    <td>G</td>
    <td>P0.24</td>
  </tr>
  <tr>
    <td>B</td>
    <td>P0.28</td>
  </tr>
  <tr>
    <td>Sensor PWR EN</td>
    <td>-</td>
    <td>P1.07</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td>Zumbador</td>
    <td>-</td>
    <td>P0.25</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td rowspan="3">Controlador de motor</td>
    <td>EN</td>
    <td>P1.05</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td>SCL</td>
    <td>P1.14</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>SDA</td>
    <td>P1.15</td>
  </tr>
  <tr>
    <td rowspan="2">Sensor de presión de aire</td>
    <td>SCL</td>
    <td>P1.14</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>SDA</td>
    <td>P1.15</td>
  </tr>
  <tr>
    <td rowspan="3">Sensor de 6 ejes (versión futura)</td>
    <td>INT</td>
    <td>P1.02</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td>SCL</td>
    <td>P1.14</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>SDA</td>
    <td>P1.15</td>
  </tr>
  <tr>
    <td rowspan="3">Sensor de 3 ejes (versión futura)</td>
    <td>INT</td>
    <td>P1.12</td>
    <td>GPIO</td>
  </tr>
    <tr>
    <td>SCL</td>
    <td>P1.14</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>SDA</td>
    <td>P1.15</td>
  </tr>
  <tr>
    <td>Botón</td>
    <td>-</td>
    <td>P0.06</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td rowspan="7">LR2021</td>
    <td>SPIMISO</td>
    <td>P1.08</td>
    <td rowspan="4">SPI</td>
  </tr>
  <tr>
    <td>SPIMOSI</td>
    <td>P1.09</td>
  </tr>
  <tr>
    <td>SPISCK</td>
    <td>P0.11</td>
  </tr>
  <tr>
    <td>SPInCS</td>
    <td>P0.12</td>
  </tr>
  <tr>
    <td>LR_RST</td>
    <td>P1.10</td>
    <td rowspan="3">GPIO</td>
  </tr>
  <tr>
    <td>LR_BUSY</td>
    <td>P0.07</td>
  </tr>
  <tr>
    <td>LR_DIO8</td>
    <td>P1.01</td>
  </tr>
  <tr>
    <td rowspan="7">GNSS</td>
    <td>TX</td>
    <td>P0.13</td>
    <td rowspan="2">UART</td>
  </tr>
  <tr>
    <td>RX</td>
    <td>P0.14</td>
  </tr>
  <tr>
    <td>Sleep_INT</td>
    <td>P0.30</td>
    <td rowspan="5">GPIO</td>
  </tr>
  <tr>
    <td>PPS0</td>
    <td>P0.04</td>
  </tr>
  <tr>
    <td>RTC_INT</td>
    <td>P0.29</td>
  </tr>
  <tr>
    <td>PWR_EN</td>
    <td>P1.11</td>
  </tr>
  <tr>
    <td>RTC_PWR_EN</td>
    <td>P1.13</td>
  </tr>
   <tr>
    <td rowspan="6">Flash de 8 MB</td>
    <td>SPISCK</td>
    <td>P0.19</td>
    <td rowspan="6">SPI</td>
  </tr>
  <tr>
    <td>SPInCS</td>
    <td>P0.20</td>
  </tr>
  <tr>
    <td>SPIO0</td>
    <td>P0.21</td>
  </tr>
  <tr>
    <td>SPIO1</td>
    <td>P0.22</td>
  </tr>
  <tr>
    <td>SPIO2</td>
    <td>P0.23</td>
  </tr>
  <tr>
    <td>SPIO3</td>
    <td>P1.00</td>
  </tr>
</table>

### Botón

|Acción del botón|Descripción|Zumbador|
|- |- |- |
|Pulsar una vez|Encender|Melodía ascendente|
|Pulsar dos veces|Actualizar información de nodo/ubicación|-|
|Pulsar tres veces|Activar/desactivar el GPS|-|
|Cuatro clics|Silenciar/reactivar temporalmente|-|
|Pulsar y mantener durante 5 s|Apagar|Melodía descendente|

### LED

<table>
  <tr>
    <th colspan="2">Estado de la luz</th>
    <th colspan="1">Estado del dispositivo</th>
  </tr>
  <tr>
    <td rowspan="4">🟢verde</td>
    <td>Constante</td>
    <td>Dispositivo encendiéndose</td>
  </tr>
  <tr>
    <td>Parpadeo rápido </td>
    <td>Funcionando normalmente</td>
  </tr>
  <tr>
    <td>Parpadeo lento </td>
    <td>Cargando</td>
  </tr>
 <tr>
    <td>Constante</td>
    <td>Totalmente cargado</td>
  </tr>
  <tr>
    <td>🔴Rojo</td>
    <td>Parpadeando</td>
    <td>Batería baja</td>
  </tr>
    <tr>
    <td>⚪️blanco</td>
    <td>Constante</td>
    <td>Modo DFU/Modo Bootloader</td>
  </tr>
</table>

### Diagrama de hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/HardWareOverview.png" alt="pir" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/HardwareDiagram.png" alt="pir" width={900} height="auto" /></p>

### Recurso

[Informe de prueba de batería](https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Battry_Certification.zip)