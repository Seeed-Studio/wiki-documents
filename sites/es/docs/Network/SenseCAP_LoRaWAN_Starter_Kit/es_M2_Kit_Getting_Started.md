---
description: Comenzar con el Kit de Inicio SenseCAP LoRaWAN
title: Comenzar con el Kit de Inicio SenseCAP LoRaWAN
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/M2_Kit_Getting_Started
sidebar_position: 0
last_update:
  date: 1/26/2023
  author: Specner
---
# **Descripción General**

## **Fundamentos de LoRaWAN**

LoRaWAN (Long Range Wide Area Network) es un protocolo de comunicación inalámbrica de bajo consumo y largo alcance diseñado específicamente para aplicaciones de Internet de las Cosas (IoT). Proporciona capacidades de comunicación de larga distancia y bajo consumo para dispositivos IoT. Las características clave de LoRaWAN incluyen:

- Comunicación de largo alcance
- Bajo consumo de energía
- Desplegado de forma pública o privada
- Conectividad de dispositivos a gran escala

Debido a estas características, se aplica ampliamente en agricultura inteligente, ciudades inteligentes, monitoreo ambiental y otras aplicaciones de detección inalámbrica.

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/1.png
"/></div>

Para aprender más sobre LoRaWAN, haz clic aquí.

## **Kit de Inicio SenseCAP LoRaWAN**

El Kit de Inicio SenseCAP LoRaWAN tiene como objetivo facilitar a los usuarios la adquisición rápida y aplicación de conocimientos prácticos de LoRaWAN. El kit incluye gateway de múltiples plataformas NM2, XIAOS3, Grove Wio-E5, Sensor de Temperatura y Humedad, Sensor de Humedad, otros Grove expandibles que permiten a los usuarios participar en el aprendizaje práctico de la arquitectura LoRaWAN y los capacita para desarrollar además sus propios proyectos.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/2.jpg" /></div>

Como Kit de Inicio LoRaWAN, incluye todos los componentes de la arquitectura LoRaWAN, incluyendo nodos, gateways, e incluso la plataforma en la nube SenseCAP. El kit ofrece un conjunto completo de características que te permiten experimentar completamente la tecnología LoRaWAN. Con este kit, puedes participar en varias actividades prácticas como pruebas de distancia, pruebas de red y desarrollo de proyectos. Proporciona una solución completa que te permite profundizar en todos los aspectos de LoRaWAN, validando su rendimiento y funcionalidad a través de aplicaciones del mundo real. Ya seas un principiante o un desarrollador experimentado, este kit satisface tus necesidades de aprendizaje y práctica en el ámbito de LoRaWAN.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/3.png" /></div>

Productos Relacionados:

|Nombre|Descripción|
| :- | :- |
|[S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S210x)|Una serie de sensores industriales LoRaWAN® inalámbricos.|
|[S2100 datalogger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)|Puede conectarse a sensores MODBUS-RTU RS485/Analógicos/GPIO y transmitir datos de los sensores a la red LoRaWAN|
|[M2 Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)|Un gateway LoRaWAN® estándar que soporta conexión a diferentes servidores de red|
|[Wio-E5 Dev Kit](https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html)|Un conjunto de herramientas de desarrollo compacto y fácil de usar para que desbloquees el poderoso rendimiento del módulo LoRa Wio-E5 STM32WLE5JC.|

# **Comenzar**

## **Preparación**

### **hardware**

**Componentes Electrónicos**

El kit debe incluir los siguientes componentes electrónicos. Por favor, verifica si están completos.**
**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/4.jpg" /></div>

Antes de comenzar el proyecto, necesitas soldar los conectores en la placa XIAO e instalar la antena.

**Soldar conector**

XIAO ESP32S3 se envía sin conectores de pines por defecto, necesitas preparar tus propios conectores de pines y soldarlos a los pines correspondientes de XIAO para que puedas conectar a la placa de expansión o sensor.

Debido al tamaño miniatura de XIAO ESP32S3, por favor ten cuidado al soldar conectores, no pegues diferentes pines juntos, y no pegues soldadura al blindaje u otros componentes. De lo contrario, puede causar que XIAO haga cortocircuito o no funcione correctamente, y las consecuencias causadas por esto serán responsabilidad del usuario.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/5.png" /></div>

**Instalación de antena**

En la parte inferior izquierda del frente de XIAO ESP32S3, hay un "Conector de Antena WiFi/BT" separado. Para obtener una mejor señal WiFi/Bluetooth, necesitas sacar la antena del interior del paquete e instalarla en el conector.

Hay un pequeño truco para la instalación de la antena, si presionas fuerte directamente sobre ella, encontrarás que es muy difícil de presionar y te dolerán los dedos! La forma correcta de instalar la antena es poner un lado del conector de la antena en el bloque del conector primero, luego presionar un poco hacia abajo en el otro lado, y la antena se instalará.

Remover la antena también es igual, no uses fuerza bruta para tirar de la antena directamente, haz fuerza en un lado para levantar, la antena es fácil de quitar.
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/6.png" /></div>

### **Software**

Tienes la opción de elegir nuestra plataforma en la nube SenseCAP integrada o usar un Servidor de Red LoRaWAN de terceros como The Things Network. Recomendamos usar la plataforma en la nube SenseCAP para la mejor experiencia de usuario. A continuación están los enlaces relevantes.

1. Haz clic para abrir la página Web del [Portal SenseCAP](https://sensecap.seeed.cc/portal/#/login)

Escanea para descargar la APP SenseCAP Mate
<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/7.png" /></div>

# **Iniciación Rápida y Sin Código con el Kit de Inicio LoRaWAN**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/8.png" /></div>

## **Paso 1 Encender y Conectar a Internet**

El kit incluye [SenseCAP Multi-Platform LoRaWAN Indoor Gateway(SX1302) - EU868 - Seeed Studio](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) que es un gateway LoRaWAN® estándar que soporta conexión a diferentes servidores de red. Puede ser usado no solo para desarrollo personal de LoRa sino también en conjunto con sensores industriales. En esta wiki, el flujo de datos pasará a través de SenseCAP Cloud. El modelo por defecto ejecutándose en este gateway es SenseCAP así que no necesitas hacer configuración extra, solo enciende el gateway y conéctalo a Internet por ETH o WIFI.

### **Conectar a Cable ETH**

La forma rápida - Conecta el cable Ethernet al puerto Ethernet, y el indicador en la parte superior mostrará verde sólido si el gateway se conecta exitosamente a Internet.

### **Conectado a WIFI vía Luci**

Hay dos formas para que los usuarios inicien sesión en la página de configuración Luci.:

**Acceso vía router**

1. Conecta tu gateway a un cable Ethernet, y conecta tu PC al mismo router.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/9.png" /></div>

**Nota**: Tu PC y dispositivo deben estar conectados al mismo router/red.

2. Verifica la Dirección IP de tu dispositivo en la página de administración de tu router.
3. Obtén tu Nombre de Usuario y Contraseña del dispositivo: Puedes encontrar el Nombre de Usuario y Contraseña en la etiqueta de tu dispositivo.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/10.png" /></div>

4. Ingresa la Dirección IP de tu dispositivo en un navegador para entrar a la página Luci. Luego ingresa tu nombre de usuario y contraseña del dispositivo para iniciar sesión.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/11.png" /></div>

**Acceso vía hotspot AP del dispositivo**

1. Presiona el botón por 5s hasta que el indicador azul parpadee lentamente para entrar al modo de configuración.
2. El nombre del hotspot AP es SenseCAP_XXXXXX (dirección MAC de 6 cifras), la contraseña por defecto es 12345678; conecta tu computadora a este hotspot AP.

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/12.png" /></div>

3. Obtén tu Nombre de Usuario y Contraseña del dispositivo Puedes encontrar el Nombre de Usuario y Contraseña en la etiqueta de tu dispositivo.

4. Ingresa la Dirección IP (192.168.168.1) en tu navegador para entrar a la Consola Local. Luego ingresa tu nombre de usuario y contraseña del dispositivo, y haz clic en el botón Login.

**Conectar a WIFI**

Haz clic en Network - Wireless

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/13.png" /></div>

Haz clic en el botón Scan para escanear el WIFI.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/14.png" /></div>

Selecciona tu WI-FI para unirte a la red.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/15.png" /></div>

Envía la contraseña del Wi-Fi, y luego haz clic en Submit y Save.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/16.png" /></div>

Luego haz clic en Save and Apply para aplicar tu configuración.

El indicador en la parte superior mostrará verde sólido si el gateway se conecta exitosamente al WIFI.

## **Paso 2 Conectar Nodos**

Inserta el Sensor de Humedad de Suelo Capacitivo Grove, el Sensor de Temperatura y Humedad y el módulo inalámbrico Grove-Wio-E5 en la Placa de Expansión XIAO.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/17.png" /></div>

## **Paso 3 Escanear Código QR del Grove-Wio-E5**

Abre la APP SenseCAP Mate después de descargar la versión correspondiente de la APP según todos los sistemas móviles que uses. Si es tu primera vez usando la plataforma SenseCAP, por favor registra una cuenta primero.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/18.png" /></div>
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/19.png" /></div>

Haz clic en el + en la esquina superior derecha y selecciona Add device para vincular el Grove - Wio-E5.

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/20.png" /></div>

Alinea la caja en el centro de la cámara con el código QR en la parte posterior del Grove - Wio-E5 para escanear el código y vincular tu kit. Ten en cuenta que el código QR en la parte frontal del Wio E5 no debe ser escaneado.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/21.png" /></div>

## **Paso 4 Ver datos**

Después de la vinculación exitosa usando la App SenseCAP Mate, verás los datos del sensor mostrados en la app.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/22.jpg" /></div>

:::tip

La App SenseCAP Mate no actualizará automáticamente la información de datos, necesitarás deslizar manualmente hacia abajo en la página del sensor para actualizar los datos. Si no ves datos nuevos por más de 10 minutos, puedes intentar reiniciar el Wio Terminal presionando hacia abajo el botón lateral una vez.
:::

## Apéndice

- [Código de Firmware Nativo](https://github.com/Seeed-Solution/lorawan-kit)
