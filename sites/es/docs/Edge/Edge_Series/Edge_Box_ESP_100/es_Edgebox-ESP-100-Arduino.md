---
description: EdgeBox-ESP-100 Primeros Pasos con Arduino
title: EdgeBox-ESP-100 Primeros Pasos con Arduino
keywords:
  - Edge
  - PLC Control
  - Control system
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edgebox-ESP-100-Arduino
sku: 102991558,102991559,102110771,102110772,102110773,102991734,102991735,102110779,E23010424,114993117
last_update:
  date: 03/10/2023
  author: Peter Pan
createdAt: '2023-03-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/Edgebox-ESP-100-Arduino/
---

## Edgebox-ESP-100

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/e/d/edgebox-esp100_1.jpg" style={{width: 600}}/></div>

EdgeBox-ESP-100 es un controlador basado en ESP32 diseñado para soluciones de automatización ligeras. Soporta entrada analógica, monitoreando y controlando efectivamente en un entorno remoto, ideal para bucles de control PID, control de secuenciación lógica, o una puerta de enlace con expansión flexible de sensores inalámbricos y de campo.

Además del EdgeBox-ESP-100, también tenemos otros 2 productos Edge para diferentes soluciones en la familia Edge, alimentados por Raspberry Pi. Para ayudarte a entender las diferencias profundamente y elegir la parte más adecuada para tus proyectos, por favor consulta la [Página de la Serie Edge](https://www.seeedstudio.com/raspberrypi/device/industry.html) de Seeed Studio.

Ofrece conexiones de bus de campo CAN aislado, RS485, y recursos de E/S ricos para instalaciones extensas y entrada de sensores, tanto para señales digitales como analógicas. Es perfectamente satisfactorio para aplicaciones de PLC y automatización de campo.

Dado que contiene funciones Wi-Fi y BLE integradas, y también incluye un módulo celular 4G LTE, EdgeBox-ESP-100 puede utilizarse para establecer una puerta de enlace industrial, permitiendo que el PLC original se conecte a la red o la nube.

Esta caja portátil viene con hardware robusto, un diseño eléctrico y una carcasa de aleación de aluminio, mediante la cual mantiene su función en un amplio rango de temperatura y proporciona alta protección contra sobretensiones y cortocircuitos, para diversos métodos de implementación basados en tu negocio.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-ESP-100-p-5490.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

> ⚠️ **Aviso Importante: Disponibilidad de la Función de Programación/Depuración USB**
>
> - La **función de Programación/Depuración USB solo está disponible** en la **versión más reciente** del **EdgeBox-ESP-100**.
> - La **versión anterior** solo soporta **alimentación a través del puerto USB-A** y **no soporta programación o depuración**.

---

> ❗**Advertencia: No Conectes el Puerto USB-A de Versiones Anteriores a una PC**
>
> - Conectar el puerto USB-A de la **versión antigua** a un puerto USB de PC puede resultar en **comportamiento inadecuado**.
> - Solo usa la **nueva versión** si planeas programar o depurar el dispositivo vía USB.

---

> **🔍 Cómo Identificar la Nueva Versión**
>
> Verifica la etiqueta del **Número de Serie (SN)** en la carcasa del dispositivo:
>
> **SNs de Versión Antigua**:
>
>  - Todos los números de serie con `2437` o **anteriores**
>  - Ejemplo: `102991735243700001`, `102991735243700093`
> - `2437` = producido en la **Semana 37 de 2024**
>
> **SNs de Nueva Versión**:
> - Todos los números de serie con `2438` o **posteriores**
>  - Ejemplo: `102991735243800001`, `102991735243800093`
> - `2438` = producido desde la **Semana 38 de 2024 en adelante**


- Soporte Multi-Bus de Campo: CAN, RS485, Ethernet
- Capacidad Multi-inalámbrica: Conectividad Wifi y BLE integrada; módulo celular 4G LTE incorporado
- Diseño de Hardware Confiable: Estructura robusta y de mantenimiento reducido
- Diseño Eléctrico Confiable: Alto aislamiento, alta protección contra sobretensiones y cortocircuitos
- Soporte de programas compatibles con IEC 61131-3 (en desarrollo)
- Programable con ESP-IDF, Arduino

## Comparación de especificaciones

<div class="table-center">

<table data-style="height: 1345px;">
  <tbody>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p><strong>Parámetros</strong></p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p><strong>Detalle</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 629px;" colSpan={2} style={{height: 46, width: 629}}>
        <p><strong>Básico</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>CPU</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>ESP32S3</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>Memoria</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>512KB + 8MB RAM</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>Almacenamiento</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>16MB Flash</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 629px;" colSpan={2} style={{height: 46, width: 629}}>
        <p><strong>Inalámbrico</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>WiFi</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>integrado 2.4 GHz</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>Bluetooth</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>integrado Bluetooth 5.0, BLE</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>Celular</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>4G - A7670G SIMCom LTE Cat 1 módulo</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>LoRa</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>Compatible*</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 629px;" colSpan={2} style={{height: 46, width: 629}}>
        <p><strong>Interfaz</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>Ethernet</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>100M RJ45 *1</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>USB</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>USB2.0 A*1</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>CAN BUS</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>CAN BUS *1 (Aislado)</p>
      </td>
    </tr>
    <tr data-style="height: 39px;" style={{height: 39}}>
      <td data-style="height: 39px; width: 132px;" style={{height: 39, width: 132}}>
        <p>RS Serial</p>
      </td>
      <td data-style="height: 39px; width: 491px;" style={{height: 39, width: 491}}>
        <p>RS485 *1 (Aislado)</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 92px; width: 132px;" rowSpan={2} style={{height: 92, width: 132}}>
        <p>Entrada Digital</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>4 (Aisladas) integradas</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <div>
          <div className="document">
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">Voltaje de entrada DC - 24V</p>
          </div>
        </div>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 92px; width: 132px;" rowSpan={2} style={{height: 92, width: 132}}>
        <p>Salida Digital</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>6 (aisladas)</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>Voltaje Recomendado - 24V</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 92px; width: 132px;" rowSpan={2} style={{height: 92, width: 132}}>
        <p>Entrada Analógica</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>4 (Aisladas)</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <div>
          <div className="document">
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">Entrada: 0 ~ 20 mA por defecto, 0-10V opcional</p>
          </div>
        </div>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 92px; width: 132px;" rowSpan={2} style={{height: 92, width: 132}}>
        <p>Salida Analógica</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>2 (Aisladas)</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>Salida: 0 ~ 5 V</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>Fuente de Alimentación</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>10.8 ~ 36 V</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 629px;" colSpan={2} style={{height: 46, width: 629}}>
        <p><strong>Características adicionales</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>RTC</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>RTC</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>Chip de Encriptación</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>Atecc608a(opcional)</p>
      </td>
    </tr>
    <tr data-style="height: 64px;" style={{height: 64}}>
      <td data-style="height: 64px; width: 132px;" style={{height: 64, width: 132}}>
        <p>Temperatura de operación</p>
      </td>
      <td data-style="height: 64px; width: 491px;" style={{height: 64, width: 491}}>
        <p>-20 a +60 °C</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>Certificación</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>RoHS, CE, FCC, UKCA</p>
      </td>
    </tr>
    <tr>
      <td data-style="width: 132px;" style={{width: 132}}>
        <p>Garantía</p>
      </td>
      <td data-style="width: 491px;" style={{width: 491}}>
        <p>2 Años</p>
      </td>
    </tr>
  </tbody>
</table>
</div>

## Descripción general del hardware

### Vista frontal

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/edge_box_esp/font-port.png" /></div>

### Puertos laterales

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/edge_box_esp/connector_side.png" /></div>

1. 4 X LEDs
2. Puerto Ethernet
3. Bus CAN y puerto RS485
4. Conector phoenix multifunción

#### Indicador LED:

<div align="center"><img style={{background: 'rgb(255, 255, 255)', border: '10px solid transparent'}} width={300}src="https://files.seeedstudio.com/wiki/edge_box_esp/LED.png" /></div>

<div class="table-center">

| Nombre LED | Señal        | Descripción            |
|  :---:   |  :---:        |    :---:               | 
|   PWR    | Estado de alimentación  |                        |
| Cellular | 4G/LTE        |                        |
|   ACT    | Estado TX serie | Multiplexado con U0TXD |
|   ERR    | Estado RX serie | Multiplexado con U0RXD |

</div>

#### Puerto Ethernet:

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/eth.png" alt="pir" width={300} height="auto" /></div>


<div class="table-center">

| PIN#          |  Señal      | Descripción                               |
|  :---:        |  :---:       |    :---:                                  | 
|      1        |      TXP     |                                           |
|      2        |      TXN     |                                           |
|      3        |      RXP     |                                           |
|      4        |      N.C.    |                                           |
|      5        |      N.C.    |                                           |
|      6        |      RXN     |                                           |
|      7        |      N.C.    |                                           |
|      8        |      N.C.    |                                           |
|   LED Amarillo  |    ACTIVE    |  Activo cuando pasan datos TX y RX  |
|   LED Verde   |     LINK     |          Activo cuando LINK UP              |

</div>

#### Bus CAN y puerto RS485:

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/eth.png" alt="pir" width={300} height="auto" /></div>

<div class="table-center">

| PIN#          |  Señal      | Descripción                               |
|  :---:        |  :---:       |    :---:                                  | 
|      1        |      N.C.     |                                           |
|      2        |      N.C.     |                                           |
|      3        |      N.C.     |                                           |
|      4        |      CAN_H    |                                           |
|      5        |      CAN_L    |                                           |
|      6        |      N.C.     |                                           |
|      7        |      RS485_A  |                                           |
|      8        |      RS485_B  |                                           |
|   LED Amarillo  |    ACTIVE     |  Activo cuando pasan datos TX y RX del BUS CAN  |
|   LED Verde   |     LINK      |  Activo cuando pasan datos TX y RX de RS485    |

</div>

:::note

    1. La resistencia de terminación de 120 Ohm para RS485 ha sido instalada en el interior.
    2. La resistencia de terminación de 120 Ohm para BUS CAN ha sido instalada en el interior.

:::

#### Conector phoenix multifunción

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/multi-func-connector.png" alt="pir" width={500} height="auto" /></div>


<div class="table-center">

| Función  | PIN No.  |  PIN No. | Función  |
|:---:      | :---: | :---: | :---: |
|  S/S      | 2  | 1  | DO_24V  |
|  DI0      | 4  | 3  | DO_0V  |
|  DI1      | 6  | 5  | DO0  |
|  DI2      | 8  | 7  | DO1  |
|  DI3      | 10  | 9 | DO2  |
|  AGND     | 12 | 11 | DO3  |
|  AI0      | 14 | 13 | DO4  |
|  AI1      | 16 | 15 | DO5  |
|  AI2      | 18 | 17 | AO0  |
|  AI3      | 20 | 29 | AO1  |
|  AGND     | 22 | 21 | AGND  |
|  GND      | 24 | 23 | +24V  | 

</div>

:::note
    1. Se sugieren cables de 24AWG a 16AWG
    2. GND y AGND están aislados
    3. Todas las señales AGND están conectadas internamente
    4. El voltaje DC para entrada es 24V(+- 10%)
    5. El voltaje DC para salida debe ser 24V(+- 10%). la capacidad de corriente es 1A.
:::

### Puertos superiores

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/connector_top.png" alt="pir" width={500} height="auto" /></div>


1. Puerto de antena Wi-Fi (SMA Hembra)
2. Tarjeta SIM 
3. Reset
4. Puerto USB (solo salida de alimentación 5V)
5. Puerto de antena 4G/LTE (SMA Hembra)

### Multiplexado GPIO
<div class="table-center">
<table className="tg">
  <thead>
    <tr>
      <th className="tg-3gxb"><span style={{fontWeight: 'var(--ifm-table-head-font-weight)'}}>Nombre del Pin</span></th>
      <th className="tg-3gxb"><span style={{fontWeight: 'var(--ifm-table-head-font-weight)'}}>ESP32S3 IO</span></th>
      <th className="tg-3gxb"><span style={{fontWeight: 'var(--ifm-table-head-font-weight)'}}>Tipo</span></th>
      <th className="tg-3gxb"><span style={{fontWeight: 'var(--ifm-table-head-font-weight)'}}>Función</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-lhaa">DO0</td>
      <td className="tg-lhaa">IO40</td>
      <td className="tg-lhaa">Salida Digital</td>
      <td className="tg-lhaa">Salida Digital 0</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO1</td>
      <td className="tg-lhaa">IO39</td>
      <td className="tg-lhaa">Salida Digital</td>
      <td className="tg-lhaa">Salida Digital 1</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO2</td>
      <td className="tg-lhaa">IO38</td>
      <td className="tg-lhaa">Salida Digital</td>
      <td className="tg-lhaa">Salida Digital 2</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO3</td>
      <td className="tg-lhaa">IO37</td>
      <td className="tg-lhaa">Salida Digital</td>
      <td className="tg-lhaa">Salida Digital 3</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO4</td>
      <td className="tg-lhaa">IO36</td>
      <td className="tg-lhaa">Salida Digital</td>
      <td className="tg-lhaa">Salida Digital 4</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO5</td>
      <td className="tg-lhaa">IO35</td>
      <td className="tg-lhaa">Salida Digital</td>
      <td className="tg-lhaa">Salida Digital 5</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI0</td>
      <td className="tg-lhaa">IO4</td>
      <td className="tg-lhaa">Entrada Digital</td>
      <td className="tg-lhaa">Entrada Digital 0</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI1</td>
      <td className="tg-lhaa">IO5</td>
      <td className="tg-lhaa">Entrada Digital</td>
      <td className="tg-lhaa">Entrada Digital 1</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI2</td>
      <td className="tg-lhaa">IO6</td>
      <td className="tg-lhaa">Entrada Digital</td>
      <td className="tg-lhaa">Entrada Digital 2</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI3</td>
      <td className="tg-lhaa">IO7</td>
      <td className="tg-lhaa">Entrada Digital</td>
      <td className="tg-lhaa">Entrada Digital 3</td>
    </tr>
    <tr>
      <td className="tg-lhaa" rowSpan={2}>AO0</td>
      <td className="tg-lhaa">IO42</td>
      <td className="tg-lhaa">Salida Analógica</td>
      <td className="tg-lhaa">Salida Analógica 0</td>
    </tr>
    <tr>
      <td className="tg-lhaa">IO41</td>
      <td className="tg-lhaa">Salida Analógica</td>
      <td className="tg-lhaa">Salida Analógica 1</td>
    </tr>
    <tr>
      <td className="tg-rzif" rowSpan={3}>RS485 </td>
      <td className="tg-rzif">IO17</td>
      <td className="tg-rzif">U1TXD</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">IO18</td>
      <td className="tg-rzif">U1RXD</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">IO8</td>
      <td className="tg-rzif">RS485_RTS</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif" rowSpan={4}>4G/LTE</td>
      <td className="tg-rzif">IO48</td>
      <td className="tg-rzif">U2TXD</td>
      <td className="tg-rzif" rowSpan={4}>WWAN</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO47</td>
      <td className="tg-rzif">U2RXD</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO21</td>
      <td className="tg-rzif">PWR_KEY</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO16</td>
      <td className="tg-rzif">PWR_EN</td>
    </tr>
    <tr>
      <td className="tg-rzif" rowSpan={6}>Ethernet </td>
      <td className="tg-rzif">IO10</td>
      <td className="tg-rzif">FSPI_CS0</td>
      <td className="tg-rzif" rowSpan={6}>Conectado a W5500</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO11</td>
      <td className="tg-rzif">FSPI_MISO</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO12</td>
      <td className="tg-rzif">FSPI_MOSI</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO13</td>
      <td className="tg-rzif">FSPI_SCLK</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO14</td>
      <td className="tg-rzif">INT #</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO15</td>
      <td className="tg-rzif">RST #</td>
    </tr>
    <tr>
      <td className="tg-rzif">CAN_TXD</td>
      <td className="tg-rzif">IO1</td>
      <td className="tg-rzif">CAN BUS TX</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">CAN_RXD</td>
      <td className="tg-rzif">IO2</td>
      <td className="tg-rzif">CAN BUS RX</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">TXD0/LED_ACT#</td>
      <td className="tg-rzif">U0TXD</td>
      <td className="tg-rzif" />
      <td className="tg-rzif">Programación/Depuración y controlador LED</td>
    </tr>
    <tr>
      <td className="tg-rzif">RXD0/LED_ERR#</td>
      <td className="tg-rzif">U0RXD</td>
      <td className="tg-rzif" />
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">Beep</td>
      <td className="tg-rzif">IO45</td>
      <td className="tg-rzif">Beep</td>
      <td className="tg-rzif">Activo alto Habilita Zumbador</td>
    </tr>
    <tr>
      <td className="tg-rzif">Reset</td>
      <td className="tg-rzif">IO0</td>
      <td className="tg-rzif">Botón de reset</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif" rowSpan={3}>I2C </td>
      <td className="tg-rzif">IO19</td>
      <td className="tg-rzif" />
      <td className="tg-rzif">I2C_SCL</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO20</td>
      <td className="tg-rzif" />
      <td className="tg-rzif">I2C_SDA</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO9</td>
      <td className="tg-rzif" />
      <td className="tg-rzif">Alarma o Despertar desde PCF8563</td>
    </tr>
  </tbody>
</table>
</div>

#### Puerto de Programación/Depuración

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/programming_port.png" alt="pir" width={300} height="auto" /></div>


<div class="table-center">


| Puerto de depuración | ESP32 IO | Otra función   |
| :---:                | :---:    | :---:          |
| RXD                  | RXD0     | LED_ACT#       |
| TXD                  | TXD0     | LED_ERR#       |
| GND                  | GND      |                |
| GPIO0                | IO0      | Botón RESET    |

</div>


:::note

El GIPIO0 también está conectado al Botón de Reset. Y los RXD, TXD del UART0 se usan en modo de descarga.
Esto permite a los usuarios desarrollar el EdgeBox-ESP-100 en bare metal.

:::

### Dispositivos Integrados

#### Mapa de PINES I2C y Dispositivos I2C Integrados

* Mapa de PINES I2C:

<div class="table-center">

| PIN I2C | ESP32 IO |
|  :---:  |  :---:   |  
| I2C_SDA |   IO20   |
| I2C_SCL |   IO19   |
| I2C_INT |   IO9    |

</div>

* Dispositivos I2C Integrados y Direcciones:

<div class="table-center">

|  Dispositivo         | Dirección | Función           |
|  :---:               | :---:     | :---:             |
|  FM24CL64B           |  0x50     | Memoria retenida  |
|  PCF8563             |  0x51     |   RTC             |
|  Atecc608a           |  0x68     | Dispositivo cripto|
|  SGM58031            |  0x48     |   ADC             |

</div>

#### 4G LTE

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/4glte.png" alt="pir" width={300} height="auto" /></div>

<div class="table-center">

| Módulo 4G A7670G  | ESP32 IO| Función                                     |
|  :---:            |  :---:  |  :---:                                      |
|  PWR_EN           |  IO16   | Habilitar alimentación para A7670G a través de SY8089A |
|  PWRKEY           |  IO21   | PWR_KEY                                     |
|  RXD              |  IO48   | U2TXD                                       |
|  TXD              |  IO47   | U2RXD                                       |

</div>

#### Entrada Analógica (SGM58031)

<div class="table-center">

| SGM58031 (dirección I2C 0x48)  |  IO            |
|   :---:                        |   :---:        |
| CH1+                           |  AI0           |
| CH2+                           |  AI1           |
| CH3+                           |  AI2           |
| CH4+                           |  AI3           |
| SDA                            |  IO20/I2C_SDA  |
| SCL                            |  IO19/I2C_SCL  |

</div>

:::note
  
  El tipo de entrada predeterminado es 4-20ma.
  El tipo de entrada 0-10V es opcional.

:::

#### Salida Analógica

 Los canales duales de Salida Analógica están compuestos por tecnología PWM y LPF.

<div class="table-center">

| Salida analógica | ESP32 IO |
|  :---:           |  :---:   |
|  AO0             |   IO42   |
|  AO1             |   IO41   |

</div>

## Especificaciones eléctricas

### Cómo Alimentar

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/Edgebox-esp-how-to-power.png" alt="pir" width={500} height="auto" /></div>

### Consumo de energía

 El consumo de energía del EdgeBox-ESP-100 depende fuertemente de la aplicación, el modo de operación y los dispositivos periféricos conectados. Los valores dados deben verse como valores aproximados.

:::note

En condición de fuente de alimentación 24V

:::

<div class="table-center">

| Modo de operación | Corriente(ma) |
| :---:             | :---:         |
| Inactivo          | 81            |

</div>

## Comenzando con la Programación de Arduino

### Requisitos

#### Requisitos de hardware

Necesitas preparar lo siguiente:

- 1 x [EdgeBox-ESP-100](https://www.seeedstudio.com/EdgeBox-ESP-100-p-5490.html)
- 1 x PC
- 1 x Adaptador USB a Serial
- 1 x Destornillador de cabeza Phillips PH2 (Opcional)
- 1 x Llave Allen H2.5
- 1 x Fuente de alimentación de 12V3A (Requisito mínimo de potencia de entrada)

#### Requisitos de software

- [Arduino IDE](https://www.arduino.cc/en/software)

### Preparación

#### Hardware 

* PASO 1: Retirar la carcasa y localizar el puerto de programación

* PASO 1-1: Por favor localiza y retira los dos tornillos de cabeza hexagonal negros

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/remove_case.png" alt="pir" width={500} height="auto" /></div>

* PASO 1-2: Luego retira los 3 tornillos de cabeza Phillips M.3 PH2.

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/remove_PH.png" alt="pir" width={500} height="auto" /></div>

* PASO 1-3: Ahora deberías poder localizar el puerto de programación.

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/programming_port.png" alt="pir" width={300} height="auto" /></div>

* PASO 2: conectar el USB-a-Serial al Edgebox-ESP-100

La conexión debe seguir como se muestra a continuación

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/programming.png" alt="pir" width={800} height="auto" /></div>

:::caution

Asegúrate de que la conexión sea correcta, el Edgebox-ESP-100 debe estar apagado durante la conexión.

:::

<div class="table-center">
<table className="tg">
  <thead>
    <tr>
      <th className="tg-wp8o">Edgebox-ESP-100</th>
      <th className="tg-c3ow">USB-A-Serial</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-wp8o">RXD</td>
      <td className="tg-c3ow">TX</td>
    </tr>
    <tr>
      <td className="tg-wp8o">TXD</td>
      <td className="tg-c3ow">RX</td>
    </tr>
    <tr>
      <td className="tg-wp8o">GND</td>
      <td className="tg-c3ow">GND</td>
    </tr>
    <tr>
      <td className="tg-c3ow" rowSpan={2}>GPIO0</td>
      <td className="tg-c3ow">GND (Modo de descarga de programa) <br /></td>
    </tr>
    <tr>
      <td className="tg-c3ow">Sin conectar cuando se usa como depurador serial<br /></td>
    </tr>
  </tbody>
</table>
</div>


#### Software

* PASO 1: Descarga el Arduino IDE 2.0.X desde el [sitio web oficial de Arduino](https://www.arduino.cc/en/software) y luego instálalo. 

* PASO 2: Busca e instala ESP32 desde el administrador de placas. 

* PASO 2-1: Abre el Arduino IDE y haz clic en la `Pestaña de Placa` (Segunda pestaña) para abrir el `Administrador de Placas`
  
* PASO 2-2: En la Barra de Búsqueda por favor escribe **`ESP32`** y presiona enter, ahora deberías poder ver la biblioteca de placas esp32 listada.

* PASO 2-3: Selecciona la Versión más reciente del menú desplegable de versión, por ejemplo, al momento de escribir esta wiki la versión más reciente es **`versión 2.0.7`**

:::note

Por favor instala la versión >= **`2.0.7`** de la biblioteca de placas esp32.

:::

* PASO 2-4: Haz clic en `Instalar` 

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/download_board.png" alt="pir" width="auto" height="auto" /></div>


### Edgebox-ESP-100 Controlando Solenoide con Arduino

#### Diagrama de cableado

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/connection.png" alt="pir" width={400} height="auto" /></div>

#### Código

Aquí está el código para ciclar a través de todos los Solenoides, Por favor copia el código al editor de código del Arduino IDE

```c
void setup() {
  //configurar pines DO al modo de salida
  pinMode(DO0, OUTPUT);
  pinMode(DO1, OUTPUT);
  pinMode(DO2, OUTPUT);
  pinMode(DO3, OUTPUT);
  //configurar pines DO por defecto a Lógica BAJA
  digitalWrite(DO0, LOW);
  digitalWrite(DO1, LOW);
  digitalWrite(DO2, LOW);
  digitalWrite(DO3, LOW);
}

void loop() {
  //Encender DO0 y Apagar DO3
  digitalWrite(DO0, HIGH);
  digitalWrite(DO3, LOW);
  delay(2000);

  //Encender DO1 y Apagar DO0
  digitalWrite(DO0, LOW);
  digitalWrite(DO1, HIGH);
  delay(2000);

  //Encender DO2 y Apagar DO1
  digitalWrite(DO1, LOW);
  digitalWrite(DO2, HIGH);
  delay(2000);
  
  //Encender DO3 y Apagar DO2
  digitalWrite(DO2, LOW);
  digitalWrite(DO3, HIGH);
  delay(2000);
}

```

#### Subir código

* PASO 1: Ahora por favor conecta el adaptador USB-A-Serial a tu PC y la conexión del Edgebox-ESP-100 con el convertidor USB-A-Serial debe configurarse al modo de descarga de programa.

:::note

No enciendas el Edgebox-ESP-100 hasta el siguiente paso

:::

* PASO 2: Enciende el Edgebox-ESP-100

* PASO 3: Selecciona Placa y PUERTOS

* PASO 3-1: Abre la ventana de selección de Placa y Puerto
 
<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/select_boardandport.png" alt="pir" width="auto" height="auto" /></div>

* PASO 3: Selecciona Placas y PUERTOS desde la `ventana de selección de Placa y Puerto` en este caso podemos poner edgebox en la barra de búsqueda y seleccionar Edgebox-ESP-100 como la placa, y seleccionar Puerto según tu adaptador USB-a-Serial. Luego presiona **`OK`** para confirmar.

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/selectboard.png" alt="pir" width="auto" height="auto" /></div>

* PASO 4: Presiona el botón de subir código para subir el código.
  
<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/uploadcode.png" alt="pir" width="auto" height="auto" /></div>

* PASO 5: reinicia la alimentación para monitorear el Edgebox-ESP-100 controlando el Solenoide.

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/demo.gif" alt="pir" width="auto" height="auto" /></div>

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