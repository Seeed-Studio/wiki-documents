---
description: Construir Sensores LoRaWAN con SenseCAP Data Logger
title: Construir Sensores LoRaWAN con SenseCAP Data Logger
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Builder_build_LoRaWAN_Sensors
last_update:
  date: 11/20/2023
  author: Matthew
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/SenseCAP_Builder_build_LoRaWAN_Sensors/
---

## Descripción General

Puedes construir un sensor LoRaWAN personalizado, rentable y de grado industrial utilizando sensores Grove, para conectar a SenseCAP Cloud con SenseCAP Data Logger, habilitando transmisión de datos inalámbrica de largo alcance.

<div align="center"><img width={700} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-e22011019-sensecap-s2110-lorawan-sensor-kit-first_1_.jpg"/></div>

## Preliminares

### Preparación de Hardware

Este wiki requiere los productos como la lista:

:::tip
En este tutorial, se utiliza el Grove - Oxygen Sensor (MIX8410). Para más módulos Grove disponibles y el método para personalizar tus propios módulos Grove, puedes consultar [aquí](https://记得加链接) y buscar más información.
:::

<div class="table-center">
  <table align="center">
    <tr>
        <th>SenseCAP S2110 Sensor Builder</th>
        <th>Grove - Oxygen Sensor (MIX8410)</th>
        <th>SenseCAP S2100 Data Logger/DTU</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP_S2110_builder/SenseCAP-S2110-Sensor-Builder-105.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101990680_preview-34.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/f/i/first_page_all-22.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparación del Software

Descarga e instala la **aplicación SenseCAP Mate** en tu teléfono móvil según tu sistema operativo.

- [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US)
- [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)

Si es la primera vez que usas la plataforma SenseCAP, por favor registra una cuenta primero haciendo clic en el botón **Registrar** e inicia sesión después con la cuenta recién creada

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/2.jpg"/></div>

:::note
Los campos con * son campos obligatorios, y aquellos sin * pueden llenarse opcionalmente.
:::

### Verificación de cobertura de red LoRaWAN

Estamos usando la red LoRaWAN aquí. Por lo tanto, es necesario verificar si estás dentro de la cobertura de red LoRaWAN de Helium o TTN (The Things Network).

- [Ver Mapa de Red Helium](https://explorer.helium.com/)
- [Ver Mapa de Red TTN](https://www.thethingsnetwork.org/map)

:::note
Si no tienes cobertura, puedes usar cualquier gateway alimentado por Helium/ TTN para enviar los datos del sensor a la nube.
- [SenseCAP M1 LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-M1-LoRaWAN-Indoor-Gateway-US915-p-5023.html) o [SenseCAP M2 LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5342.html) o cualquier otro gateway habilitado para Helium para Helium.
- [SenseCAP Outdoor LoRaWAN Gateway](https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html) u otro gateway habilitado para TTN para TTN
:::

## Comenzando

Podemos comenzar ahora.

### 1. Conectar Sensor Grove al SenseCAP S2110 Sensor Builder

- **Paso 1:** Desatornilla los cuatro tornillos en la tapa del SenseCAP S2110 Sensor Builder y abre la tapa

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/84.jpg"/></div>

- **Paso 2:** Retira la tapa roscada

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/78.jpg"/></div>

- **Paso 3:** Pasa el cable incluido a través de la tapa hacia el SenseCAP S2110 Sensor Builder

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/79.jpg"/></div>

- **Paso 4:** Conecta los cables del cable en el terminal de tornillo como sigue

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/86.jpg"/></div>

- **Paso 5:** Coloca un sensor Grove dentro del SenseCAP S2110 Sensor Builder y atorníllalo.

:::note
Grove con 2 agujeros (ej: Grove - Light Sensor v1.2)
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/80.jpg"/></div>
Grove con 3 agujeros (Grove Temperature and Barometer Sensor (BMP280))
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/81.jpg"/></div>
:::

- **Paso 6:** Conecta el cable Grove al sensor Grove y al conector Grove en la placa del SenseCAP S2110 Sensor Builder

- **Paso 7:** Cierra la tapa y atorníllala de vuelta

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/82.jpg"/></div>

- **Paso 8:** Aprieta la tapa roscada y asegúrala en su lugar

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/83.jpg"/></div>

### 2. Conectar SenseCAP S2110 Sensor Builder al SenseCAP Data Logger

- **Paso 1:** Desatornilla los tres tornillos en el registrador de datos

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **Paso 2:** Retira la cubierta inferior y saca la PCBA interior hasta que los terminales de tornillo sean accesibles. No necesitas sacar toda la placa

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **Paso 3:** Retira la tapa roscada desenroscando en dirección contraria a las agujas del reloj

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **Paso 4:** Pasa el cable incluido a través de la tapa roscada y la cubierta inferior

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **Paso 5:** Conecta los cables del cable en el terminal de tornillo como sigue

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/74.png"/></div>

:::note
Dado que hay 5 cables dentro del cable y solo estamos usando 4, es mejor pegar con cinta el cable extra para evitar contactos accidentales con los terminales de tornillo
:::

- **Paso 6:** Vuelve a colocar la unidad de hardware dentro de la carcasa, ciérrala desde la cubierta inferior y atorníllala de vuelta

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **Paso 7:** Aprieta la tapa roscada y asegura el cable en su lugar

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

Una vez que todas las conexiones estén hechas para el SenseCAP S2110 Sensor Builder y el Data Logger, debería verse como abajo:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/93.jpg"/></div>

### 3. Conectar a SenseCAP Cloud vía aplicación SenseCAP Mate

- **Paso 1:** Abre la aplicación SenseCAP Mate e inicia sesión en tu cuenta SenseCAP ingresando tu **email y contraseña** registrados y haciendo clic en los botones **Iniciar sesión**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/1.jpg"/></div>

:::note
Mantén la **Ubicación del Servidor** como **Global**, que es la predeterminada
:::

#### a. Actualizar Firmware del Data Logger

- **Paso :** Bajo la página **Config**, selecciona **S2100 Data Logger**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/4.jpg"/></div>

- **Paso 2:** Presiona y mantén presionado el botón de configuración en el SenseCAP Data Logger durante 3 segundos para entrar al modo de emparejamiento bluetooth

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/96.jpg"/></div>

Si entra al modo de emparejamiento bluetooth, un LED verde comenzará a parpadear

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/99.gif"/></div>

- **Paso 3:** Haz clic en **Update**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/5.jpg"/></div>

- **Paso 4:** Ahora te pedirá que actives los servicios de ubicación. Haz clic en **GO TO** para abrir la página de servicios de ubicación en tu teléfono

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/6.jpg"/></div>

- **Paso 5:** Activa los servicios de ubicación. Se verá de la siguiente manera para Android

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/9.jpg"/></div>

- **Paso 6:** Regresa a la aplicación SenseCAP Mate y haz clic en **Scan**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/10.jpg"/></div>

Ahora comenzará a escanear los registradores de datos SenseCAP cercanos

- **Paso 7:** Haz clic en el dispositivo descubierto

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/11.jpg"/></div>

- **Paso 8:** Si hay una actualización disponible, haz clic en **Get Updates** para actualizar a la última versión. Después de actualizar a la última versión o si dice **The device is already running the latest firmware**, regresa a la página de configuración anterior

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12.jpg"/></div>

#### b. Configurar Ajustes para la Comunicación entre el Registrador de Datos y el SenseCAP S2110 Sensor Builder

- **Paso 1:** Entra en **modo de emparejamiento bluetooth** en el Registrador de Datos nuevamente y haz clic en **Setup**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/13.jpg"/></div>

- **Paso 2:** Haz clic en el dispositivo encontrado

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/14.jpg"/></div>

Se abrirá una página con información útil bajo **General**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/15.jpg"/></div>

- **Paso 3:** Ve a la página **Setting** y bajo **Basic Setting**, elige la plataforma como **SenseCAP for the Things Network** o **SenseCAP for Helium**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/16.jpg"/></div>

**Nota:** También puedes elegir otras, pero en ese caso, no podrás usar la plataforma SenseCAP

- **Paso 4:** Elige el **Frequency Plan**, **Uplink interval** y **Packet Policy**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/17.jpg"/></div>

:::note
La Política de Paquetes predeterminada es **2C+1N** y la tabla a continuación explica más sobre esta y otras

| Parámetro | Descripción |
|---|---|
| 2C+1N (predeterminado) | 2C+1N (2 paquetes de confirmación y 1 sin confirmación) es la mejor estrategia, el modo puede minimizar la tasa de pérdida de paquetes, sin embargo el dispositivo consumirá la mayor cantidad de paquetes de datos en TTN, o créditos de datos en la red Helium. |
| 1C | 1C (1 confirmación) el dispositivo dormirá después de obtener 1 paquete de confirmación recibido del servidor. |
| 1N | 1N (1 sin confirmación) el dispositivo solo envía el paquete y luego comienza a dormir, sin importar si el servidor recibió los datos o no. |

:::

- **Paso 5:** Bajo Sensor Setting, completa de la siguiente manera

| Parámetro | Descripción |
|---|:---:|
| Protocol | RS485 Modbus RTU |
| Baud Rate | Velocidad de baudios de comunicación con el sensor. Selecciona **9600** aquí. |
| Modbus Address | Dirección esclava del sensor. El rango es de 1 a 247. Ingresa **1** aquí. |
| Power Type | Alimentación periódica: Alimenta el sensor antes de la recolección de datos, y apaga el sensor después de la recolección de datos. Este modo reduce el consumo de energía y aumenta la vida útil de la batería. Siempre encendido: Selecciona este modo cuando el sensor necesite alimentación constante. Generalmente, se usa una fuente de alimentación externa de 12V DC. Si se alimenta solo con baterías, puede no funcionar por mucho tiempo. Selecciona **periodic power** aquí. |
| Power Voltage | Selecciona el voltaje de alimentación al sensor. Soporta 3V/5V/12V. Selecciona **5V** aquí. |
| Sensor Warm-up Time | El tiempo de calentamiento denota la cantidad de tiempo que tarda el sensor en alcanzar su mayor precisión o nivel de rendimiento una vez que se ha aplicado el suministro de voltaje. Esto depende de cada sensor. El sensor de **Oxígeno Grove (MIX8410)** y el **Sensor de CO2 y Temperatura y Humedad Grove (SCD41)** necesitan un tiempo de calentamiento de **5s**, lo que significa que necesitas ingresar **5000** dentro de la caja. Los otros sensores Grove soportados por el SenseCAP S2110 Sensor Builder en este momento solo necesitan **0ms** de tiempo de calentamiento. |
| Response Timeout | Después de que el Registrador de Datos inicia una solicitud de lectura de datos al sensor, espera el tiempo de espera para una respuesta. Si se excede este tiempo, el comando se reenviará. Ingresa **1** aquí, lo que significa **100ms**. |
| Startup Time | El tiempo que el sensor puede comunicarse desde el encendido hasta comunicarse con Modbus. Ingresa **20** aquí, lo que significa **2000ms=2s** |

Una página de configuración completada se puede ver a continuación

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/18.jpg"/></div>

- **Paso 6:** Para el **Measurement Number**, consulta la tabla a continuación según el sensor específico.

<table>
<thead>
  <tr>
    <th>Nombre del Sensor Grove</th>
    <th>Número de Medición</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Grove - Light Sensor v1.2</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Grove - Flame Sensor</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Grove - Oxygen Sensor (MIX8410)</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Grove - CO2 &amp; Temperature &amp; Humidity Sensor (SCD41)</td>
    <td>3</td>
  </tr>
  <tr>
    <td>Grove - Sunlight sensor (SI1151)</td>
    <td>3</td>
  </tr>
  <tr>
    <td>Grove Temperature and Barometer Sensor (BMP280)</td>
    <td>3</td>
  </tr>
</tbody>
</table>

:::note
SenseCAP Data Logger puede recopilar de 0 a 10 mediciones en modo RS485.
:::

- **Paso 7:** Después de especificar el **Número de Medición**, necesitas completar la **Configuración de Mediciones**. Aquí elegiremos un **Grove - Light Sensor v1.2**. Para este sensor, solo necesitamos **una medición**, que es el nivel de luz. Selecciona **1** para el **Número de Medición** y haz clic en **Configuración de Medición**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/19.jpg"/></div>

- **Paso 8:** En **Configuración de Medición** haz clic en **Medición1**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/20.jpg"/></div>

Si usas el **Grove - CO2 & Temperature & Humidity Sensor (SCD41)** necesitamos **tres mediciones**, que son los **niveles de temperatura, humedad y CO2**. Selecciona **3** para el **Número de Medición** y haz clic en **Configuración de Medición**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/23.jpg"/></div>

Además, aquí necesitas configurar las 3 mediciones por separado

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/24.jpg"/></div>

- **Paso 9:** Para la **Dirección de Registro**, consulta la tabla a continuación e ingresa el **valor decimal** de la **dirección de registro**

<table>
<thead>
  <tr>
    <th>Nombre del Sensor Grove</th>
    <th>Nombre del Registro</th>
    <th>Dirección de Registro<br />(Hexadecimal)</th>
    <th>Dirección de Registro<br />(Decimal)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Grove - Oxygen Sensor (MIX8410)</td>
    <td>Oxígeno</td>
    <td>0x000E</td>
    <td>14</td>
  </tr>
  <tr>
    <td>Presión Atmosférica</td>
    <td>0x0018</td>
    <td>24</td>
  </tr>
  <tr>
    <td>Altura</td>
    <td>0x001A</td>
    <td>26</td>
  </tr>
  <tr>
     <td rowspan="4">Grove - Temperature Humidity Pressure Gas Sensor(BME680)</td>
     <td>Temperatura</td>
     <td>0x001C</td>
     <td>28</td>
  </tr>
  <tr>
    <td>Presión Atmosférica</td>
    <td>0x001E</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Humedad</td>
    <td>0x0020</td>
    <td>32</td>
  </tr>
  <tr>
    <td>Calidad del Aire(VOC)</td>
    <td>0x0022</td>
    <td>34</td>
  </tr>
  <tr>
    <td rowspan="4">Grove - Gas Sensor V2(Multichannel)</td>
    <td>N02</td>
    <td>0x0024</td>
    <td>36</td>
  </tr>
  <tr>
    <td>C2H50H</td>
    <td>0x0026</td>
    <td>38</td>
  </tr>
  <tr>
    <td>VOC</td>
    <td>0x0028</td>
    <td>40</td>
  </tr>
  <tr>
    <td>CO</td>
    <td>0x002A</td>
    <td>42</td>
  </tr>
  <tr>
    <td>Grove - UV Sensor</td>
    <td>Intensidad UV</td>
    <td>0x002C</td>
    <td>44</td>
  </tr>
  <tr>
    <td>Grove - Turbidity Sensor Meter V1.0</td>
    <td>Turbidez</td>
    <td>0x002E</td>
    <td>46</td>
  </tr>
  <tr>
    <td>Grove - TDS Sensor</td>
    <td>TDS</td>
    <td>0x0030</td>
    <td>48</td>
  </tr>
  <tr>
    <td>Grove - Ultrasonic Ranger</td>
    <td>Distancia</td>
    <td>0x0032</td>
    <td>50</td>
  </tr>
</tbody>
</table>

Una dirección de registro completada para el **Grove - Light Sensor v1.2** se puede ver a continuación

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/21.jpg"/></div>

Las direcciones de registro completadas para el **Grove - CO2 & Temperature & Humidity Sensor (SCD41)** se pueden ver a continuación

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/26.jpg"/></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/28.jpg"/></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/29.jpg"/></div>

- **Paso 10:** El resto de las configuraciones son comunes a todos los sensores Grove y se completan de la siguiente manera

| Código de Función | Código de función Modbus. Selecciona **03** aquí |
|---|---|
| Tipo de Datos | El tipo de datos determina el número de registros leídos del sensor y cómo los datos deben analizar el valor. Selecciona **Entero con signo de 32 bits, 0xABCD** aquí. |
| Precisión | Precisión del valor. Puedes elegir el lugar decimal del valor de medición. Si se selecciona 1, se reserva un lugar decimal. Selecciona **2, #.##** aquí. |
| Y= Ax + B | "Y": Es el valor que el Data Logger subirá. "x": Es el valor actual original. Factor A: Valores personalizados que pueden escalar hacia arriba o hacia abajo por múltiplos de la "x". Factor B: Un valor personalizado que incrementa o disminuye el valor de la "x". Al establecer los valores de A y B, puedes calcular el valor deseado. Si solo se necesitan subir valores en bruto, establece A=1 y B=0. Aquí establecemos **Factor A es 0.001 y Factor B es 0**. |
| Estrategia de Escritura | Esta función está habilitada solo para algunos sensores especiales y generalmente está deshabilitada por defecto. Después de leer el valor del registro, se pueden emitir instrucciones especiales al sensor, como la instrucción para vaciar el registro después de leer el registro 0. Ninguna: Desactivada por defecto. Después de Leer: Envía el comando RS485 al sensor después de leer el registro. En Datos Nuevos: Envía el comando RS485 al sensor cada 24 horas. No necesitamos estrategia de escritura así que seleccionamos **Ninguna** aquí |

Una página de **Configuración de Medición** completada se puede ver a continuación

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/30.jpg"/></div>

- **Paso 11:** Haz clic en **Confirmar** para guardar los cambios y regresará a la página de **Configuración**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/32.jpg"/></div>

- **Paso 12:** Haz clic en **Enviar** para enviar los cambios al Data Logger

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/33.jpg"/></div>

#### c. Probar y Ver los Datos del Sensor Localmente

Ahora necesitamos probar si el SenseCAP S2110 Sensor Builder está enviando correctamente los datos del sensor al Data Logger.

- **Paso 1:** Ve a General y haz clic en **Medir**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/34.jpg"/></div>

Ahora mostrará el valor del sensor y verás los LEDs del Seeed Studio XIAO RP2040 en el SenseCAP S2110 Sensor Builder encendiéndose.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/101.gif"/></div>

Lo siguiente es para **Grove - Sensor de Oxígeno (MIX8410)**. Esto indica la concentración de oxígeno del aire que es 21.36%.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/35.jpg"/></div>

Lo siguiente es para **Grove Sensor de Temperatura y Barómetro (BMP280)**. Esto indica temperatura barométrica como 30.55°C, presión atmosférica como 101401Pa, y altura como 53.08m.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/36.jpg"/></div>

#### d. Agregar Sensor Recién Creado a la Plataforma SenseCAP

- **Paso 1:** Regresa a la página de inicio de la aplicación y los LEDs rojos del Data Logger comenzarán a parpadear por un par de segundos seguidos por LEDs verdes parpadeando por un breve período de tiempo para indicar que la conexión LoRaWAN es exitosa y los datos se envían. Alternativamente puedes hacer clic en el botón del data logger una vez, para forzar este envío de datos.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"/></div>

También verás los LEDs del Seeed Studio XIAO RP2040 en el SenseCAP S2110 Sensor Builder encendiéndose

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/101.gif"/></div>

Ahora necesitamos agregar este sensor a la plataforma SenseCAP para poder ver los datos en la nube

- **Paso 2:** Ve a la página **Dispositivo**, haz clic en el símbolo **+** y haz clic en **Agregar dispositivo**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/39.jpg"/></div>

- **Paso 3:** Escanea el código QR ubicado en el Data Logger

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/40.jpg"/></div>

- **Paso 4:** Ingresa un **Nombre del dispositivo** de acuerdo al sensor Grove conectado y haz clic en **Siguiente**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/41.jpg"/></div>

- **Paso 5:** Ingresa una **Ubicación del dispositivo** y haz clic en **Confirmar**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/42.jpg"/></div>

### 4. Visualizar Datos del Sensor en la Aplicación SenseCAP Mate

Ahora verás el Data Logger en línea en la Aplicación SenseCAP Mate

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/43.jpg"/></div>

Haz clic en él para mostrar los valores del sensor

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/45.jpg"/></div>

Lo siguiente es para **Grove Sensor de Temperatura y Barómetro (BMP280)**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/44.jpg"/></div>

### 5. (opcional) Visualizar Datos del Sensor en el Panel de Control SenseCAP

También puedes usar el Panel de Control Web SenseCAP para visualizar los datos del sensor.

- **Paso 1:** Visita sensecap.seeed.cc e inicia sesión en tu cuenta SenseCAP que creaste dentro de la Aplicación SenseCAP Mate anteriormente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/88.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/87.png"/></div>

- **Paso 2:** Haz clic en **Nodo Sensor** y selecciona el sensor que creamos antes dentro de la Aplicación SenseCAP Mate.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/89.png"/></div>

- **Paso 3:** Haz clic en la pestaña **Datos** y verás todos los datos del sensor mostrados desde el sensor Grove conectado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/90.jpg"/></div>

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
