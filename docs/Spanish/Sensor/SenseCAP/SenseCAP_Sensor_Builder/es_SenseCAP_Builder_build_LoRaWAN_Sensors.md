---
description: Build LoRaWAN Sensors with SenseCAP Data Logger
title: Construir Sensores LoRaWAN con SenseCAP Data Logger
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Builder_build_LoRaWAN_Sensors
last_update:
  date: 07/24/2025
  author: Guillermo
---

## Resumen

Puedes construir un sensor LoRaWAN personalizado, económico y de grado industrial usando sensores Grove, para conectarlo a SenseCAP Cloud con SenseCAP Data Logger, permitiendo la transmisión inalámbrica de datos a larga distancia.

<div align="center"><img width={700} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-e22011019-sensecap-s2110-lorawan-sensor-kit-first_1_.jpg"/></div>

## Preliminares

### Preparación de Hardware

Esta wiki requiere productos como los listados:

:::tip
En este tutorial, se usa el Grove - Sensor de Oxígeno (MIX8410). Para más módulos Grove disponibles y el método para personalizar tus propios módulos Grove, puedes consultar [aquí](https://记得加链接) para más información.
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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparación de Software

Descarga e instala la **SenseCAP Mate App** en tu móvil según tu sistema operativo.

- [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US)
- [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)

Si es tu primera vez usando la plataforma SenseCAP, por favor regístrate primero haciendo clic en el botón **Register** y luego inicia sesión con la cuenta creada.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/2.jpg"/></div>

:::note
Los campos con * son obligatorios, y los que no tienen * son opcionales.
:::

### Verificación de cobertura de red LoRaWAN

Estamos usando la red LoRaWAN, por lo que es necesario verificar si estás dentro de la cobertura LoRaWAN de Helium o TTN (The Things Network).

- [Ver mapa de red Helium](https://explorer.helium.com/)
- [Ver mapa de red TTN](https://www.thethingsnetwork.org/map)

:::note
Si no tienes cobertura, puedes usar cualquier gateway que funcione con Helium/TTN para enviar los datos del sensor a la nube.
- [SenseCAP M1 LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-M1-LoRaWAN-Indoor-Gateway-US915-p-5023.html) o [SenseCAP M2 LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5342.html) o cualquier otro gateway habilitado para Helium.
- [SenseCAP Outdoor LoRaWAN Gateway](https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html) u otro gateway habilitado para TTN.
:::

## Comenzando

### 1. Conectar el sensor Grove al SenseCAP S2110 Sensor Builder

- **Paso 1:** Desatornilla los cuatro tornillos de la tapa del SenseCAP S2110 Sensor Builder y ábrela.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/84.jpg"/></div>

- **Paso 2:** Quita la tapa roscada.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/78.jpg"/></div>

- **Paso 3:** Pasa el cable incluido a través de la tapa hacia el interior del SenseCAP S2110 Sensor Builder.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/79.jpg"/></div>

- **Paso 4:** Conecta los cables del cable al terminal de tornillo como se muestra.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/86.jpg"/></div>

- **Paso 5:** Coloca un sensor Grove dentro del SenseCAP S2110 Sensor Builder y atorníllalo.

:::note
Grove con 2 agujeros (ejemplo: Grove - Sensor de Luz v1.2)
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/80.jpg"/></div>
Grove con 3 agujeros (Grove Sensor de Temperatura y Barómetro (BMP280))
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/81.jpg"/></div>
:::

- **Paso 6:** Conecta el cable Grove al sensor Grove y al conector Grove en la placa SenseCAP S2110 Sensor Builder.

- **Paso 7:** Cierra la tapa y atorníllala.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/82.jpg"/></div>

- **Paso 8:** Aprieta la tapa roscada y asegúrala en su lugar.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/83.jpg"/></div>

### 2. Conectar SenseCAP S2110 Sensor Builder al SenseCAP Data Logger

- **Paso 1:** Desatornilla los tres tornillos del data logger.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **Paso 2:** Quita la tapa inferior y saca la PCBA interna hasta que los terminales de tornillo sean accesibles. No es necesario sacar toda la placa.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **Paso 3:** Quita la tapa roscada desenroscando en sentido contrario a las agujas del reloj.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **Paso 4:** Pasa el cable incluido a través de la tapa roscada y la tapa inferior.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **Paso 5:** Conecta los cables del cable al terminal de tornillo como se muestra.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/74.png"/></div>

:::note
Como hay 5 cables dentro del cable y solo usamos 4, es mejor aislar con cinta el cable sobrante para evitar contactos accidentales con los terminales.
:::

- **Paso 6:** Vuelve a colocar la unidad de hardware dentro de la caja, cierra con la tapa inferior y atornilla.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **Paso 7:** Aprieta la tapa roscada y asegura el cable en su lugar.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

Una vez realizadas todas las conexiones para el SenseCAP S2110 Sensor Builder y el Data Logger, debería verse así:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/93.jpg"/></div>

### 3. Conectar a SenseCAP Cloud vía SenseCAP Mate App

- **Paso 1:** Abre la aplicación SenseCAP Mate y accede a tu cuenta SenseCAP ingresando tu **correo electrónico y contraseña registrados**, luego haz clic en **Login**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/1.jpg"/></div>

:::note
Mantén la opción **Server Location** en **Global**, que es la configuración por defecto.
:::

#### a. Actualizar firmware del Data Logger

- **Paso 1:** En la página de **Config**, selecciona **S2100 Data Logger**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/4.jpg"/></div>

- **Paso 2:** Mantén presionado el botón de configuración en el SenseCAP Data Logger por 3 segundos para entrar en modo de emparejamiento Bluetooth

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/96.jpg"/></div>

Si entra en modo de emparejamiento Bluetooth, un LED verde comenzará a parpadear

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/99.gif"/></div>

- **Paso 3:** Haz clic en **Update**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/5.jpg"/></div>

- **Paso 4:** Ahora te pedirá activar los servicios de ubicación. Haz clic en **GO TO** para abrir la página de servicios de ubicación en tu teléfono

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/6.jpg"/></div>

- **Paso 5:** Activa los servicios de ubicación. Así se verá en Android

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/9.jpg"/></div>

- **Paso 6:** Regresa a la app SenseCAP Mate y haz clic en **Scan**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/10.jpg"/></div>

Comenzará a buscar Data Loggers SenseCAP cercanos

- **Paso 7:** Haz clic en el dispositivo encontrado

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/11.jpg"/></div>

- **Paso 8:** Si hay una actualización disponible, haz clic en **Get Updates** para actualizar a la versión más reciente. Después de actualizar o si dice **The device is already running the latest firmware**, regresa a la página anterior de configuración

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12.jpg"/></div>

#### b. Configurar comunicación entre Data Logger y SenseCAP S2110 Sensor Builder

- **Paso 1:** Entra nuevamente en **modo de emparejamiento Bluetooth** en el Data Logger y haz clic en **Setup**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/13.jpg"/></div>

- **Paso 2:** Haz clic en el dispositivo encontrado

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/14.jpg"/></div>

Se abrirá una página con información útil bajo **General**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/15.jpg"/></div>

- **Paso 3:** Ve a la página de **Setting** y en **Basic Setting**, elige la plataforma, ya sea **SenseCAP for the Things Network** o **SenseCAP for Helium**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/16.jpg"/></div>

**Nota:** Puedes elegir otras plataformas, pero en ese caso no podrás usar la plataforma SenseCAP.

- **Paso 4:** Elige el **Frequency Plan**, el **Intervalo de subida (Uplink interval)** y la **Política de paquetes (Packet Policy)**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/17.jpg"/></div>

:::note
La política de paquetes por defecto es **2C+1N** y la tabla a continuación explica esta y otras opciones:

| Parámetro | Descripción |
|---|---|
| 2C+1N (por defecto) | 2C+1N (2 paquetes confirmados y 1 sin confirmación) es la mejor estrategia, minimiza la pérdida de paquetes, pero consume más datos en TTN o créditos en Helium. |
| 1C | 1C (1 confirmación): el dispositivo duerme tras recibir 1 paquete de confirmación del servidor. |
| 1N | 1N (sin confirmación): el dispositivo envía el paquete y se duerme sin importar si el servidor lo recibió. |

:::

- **Paso 5:** En Sensor Setting, completa con los siguientes valores

| Parámetro | Descripción |
|---|:---:|
| Protocolo | RS485 Modbus RTU |
| Baud Rate | Velocidad de comunicación con el sensor. Selecciona **9600** aquí. |
| Modbus Address | Dirección esclava del sensor. Rango de 1 a 247. Ingresa **1** aquí. |
| Power Type | Alimentación periódica: enciende el sensor antes de la lectura y lo apaga después para ahorrar batería. Always-on: para sensores que necesitan alimentación constante (generalmente con fuente externa 12V). Selecciona **alimentación periódica**. |
| Power Voltage | Voltaje de alimentación al sensor. Soporta 3V/5V/12V. Selecciona **5V**. |
| Sensor Warm-up Time | Tiempo para que el sensor alcance máxima precisión tras encendido. El Grove **Oxygen Sensor (MIX8410)** y **CO2 & Temperature & Humidity Sensor (SCD41)** requieren 5s (ingresar **5000** ms). Otros sensores Grove soportados actualmente requieren 0ms. |
| Response Timeout | Tiempo de espera para respuesta tras solicitud de datos. Si se supera, se reenvía el comando. Ingresa **1** (100 ms). |
| Startup Time | Tiempo desde encendido hasta que el sensor puede comunicarse vía Modbus. Ingresa **20** (2000 ms = 2 s). |

Ejemplo de página de configuración completa:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/18.jpg"/></div>

- **Paso 6:** Para el **Número de Medición**, consulta la tabla siguiente según el sensor específico.

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

- **Paso 7:** Después de especificar el **Número de Medición**, debes completar la **Configuración de Medición**. Aquí elegiremos un **Grove - Light Sensor v1.2**. Para este sensor, solo necesitamos **una medición**, que es el nivel de luz. Selecciona **1** para el **Número de Medición** y haz clic en **Measurement Setting**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/19.jpg"/></div>

- **Paso 8:** En **Measurement Setting**, haz clic en **Measurement1**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/20.jpg"/></div>

Si usas el **Grove - CO2 & Temperature & Humidity Sensor (SCD41)**, necesitamos **tres mediciones**, que son **temperatura, humedad y niveles de CO2**. Selecciona **3** para el **Número de Medición** y haz clic en **Measurement Setting**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/23.jpg"/></div>

Aquí debes configurar las 3 mediciones por separado

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/24.jpg"/></div>

- **Paso 9:** Para la **Dirección de Registro**, consulta la tabla y escribe el **valor decimal** de la **dirección del registro**

<table>
<thead>
  <tr>
    <th>Nombre del Sensor Grove</th>
    <th>Nombre del Registro</th>
    <th>Dirección del Registro<br />(Hexadecimal)</th>
    <th>Dirección del Registro<br />(Decimal)</th>
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
     <td rowspan="4">Grove - Sensor de Temperatura, Humedad, Presión y Gas (BME680)</td>
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
    <td>Calidad del Aire (VOC)</td>
    <td>0x0022</td>
    <td>34</td>
  </tr>
  <tr>
    <td rowspan="4">Grove - Sensor de Gas V2 (Multicanal)</td>
    <td>NO2</td>
    <td>0x0024</td>
    <td>36</td>
  </tr>
  <tr>
    <td>C2H5OH</td>
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

Ejemplo de dirección de registro completada para **Grove - Light Sensor v1.2**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/21.jpg"/></div>

Direcciones de registro completadas para **Grove - CO2 & Temperature & Humidity Sensor (SCD41)**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/26.jpg"/></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/28.jpg"/></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/29.jpg"/></div>

- **Paso 10:** El resto de configuraciones son comunes para todos los sensores Grove y complétalas como sigue:

| Código de función | Código de función Modbus. Selecciona **03** aquí |
|---|---|
| Tipo de dato | Define cuántos registros lee el sensor y cómo interpretar los datos. Selecciona **Entero con signo de 32 bits, 0xABCD** aquí. |
| Precisión | Precisión del valor. Número de decimales que se reservan. Si seleccionas 1, se reserva un decimal. Selecciona **2, #.##** aquí. |
| Y= Ax + B | “Y”: valor que enviará el Data Logger. “x”: valor original. Factory A: escala el valor “x”. Factory B: ajusta el valor sumando o restando. Para enviar el valor crudo, pon A=1 y B=0. Aquí usamos **Factory A = 0.001 y Factory B = 0**. |
| Estrategia de escritura | Función para algunos sensores especiales, normalmente deshabilitada. Opciones: None (ninguna), After Read (envía comando tras lectura), On New Data (envía comando cada 24 h). Selecciona **None**. |

Ejemplo de página **Measurement Setting** completada:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/30.jpg"/></div>

- **Paso 11:** Haz clic en **Confirmar** para guardar los cambios y volverás a la página de **Setting**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/32.jpg"/></div>

- **Paso 12:** Haz clic en **Enviar** para mandar los cambios al Data Logger

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/33.jpg"/></div>

#### c. Probar y Ver Datos del Sensor Localmente

Ahora necesitamos probar si el SenseCAP S2110 Sensor Builder está enviando correctamente los datos del sensor al Data Logger.

- **Paso 1:** Ve a **General** y haz clic en **Measure**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/34.jpg"/></div>

Mostrará el valor del sensor y verás que los LEDs del Seeed Studio XIAO RP2040 en el SenseCAP S2110 Sensor Builder se encienden.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/101.gif"/></div>

Ejemplo para **Grove - Oxygen Sensor (MIX8410)**: indica concentración de oxígeno en aire 21.36%.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/35.jpg"/></div>

Ejemplo para **Grove Temperature and Barometer Sensor (BMP280)**: temperatura barométrica 30.55°C, presión atmosférica 101401Pa, altura 53.08m.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/36.jpg"/></div>

#### d. Agregar el Sensor Creado a la Plataforma SenseCAP

- **Paso 1:** Regresa a la página principal de la app. Los LEDs rojos del Data Logger parpadearán un par de segundos y luego los verdes brevemente, indicando que la conexión LoRaWAN fue exitosa y los datos se enviaron. También puedes presionar el botón del Data Logger una vez para forzar el envío.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"/></div>

Verás también los LEDs del Seeed Studio XIAO RP2040 en el SenseCAP S2110 Sensor Builder encendidos

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/101.gif"/></div>

Ahora necesitamos añadir este sensor a la plataforma SenseCAP para visualizar los datos en la nube.

- **Paso 2:** Ve a la página **Device**, haz clic en el símbolo **+** y selecciona **Add device**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/39.jpg"/></div>

- **Paso 3:** Escanea el código QR ubicado en el Data Logger

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/40.jpg"/></div>

- **Paso 4:** Introduce un **Nombre del dispositivo** según el sensor Grove conectado y haz clic en **Next**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/41.jpg"/></div>

- **Paso 5:** Introduce una **Ubicación del dispositivo** y haz clic en **Confirm**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/42.jpg"/></div>

### 4. Visualizar Datos del Sensor en SenseCAP Mate App

Ahora verás el Data Logger en línea en SenseCAP Mate App

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/43.jpg"/></div>

Haz clic para mostrar los valores del sensor

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/45.jpg"/></div>

Ejemplo para **Grove Temperature and Barometer Sensor (BMP280)**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/44.jpg"/></div>

### 5. (Opcional) Visualizar Datos en el Panel Web de SenseCAP

También puedes usar el Panel Web de SenseCAP para visualizar los datos.

- **Paso 1:** Visita [sensecap.seeed.cc](https://sensecap.seeed.cc) e inicia sesión con la cuenta creada en SenseCAP Mate App.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/88.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/87.png"/></div>

- **Paso 2:** Haz clic en **Sensor Node** y selecciona el sensor creado en SenseCAP Mate App.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/89.png"/></div>

- **Paso 3:** Haz clic en la pestaña **Data** para ver todos los datos del sensor conectados.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/90.jpg"/></div>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte para que tu experiencia sea lo mejor posible. Ofrecemos varios canales de comunicación para adaptarnos a tus necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
