---
title: Wio Node
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio_Node/
slug: /es/Wio_Node
last_update:
  date: 01/11/2022
  author: gunengyu
---

Construir proyectos IoT es emocionante, ya que puedes conectar casi todo lo que te rodea y controlarlo. Sin embargo, a veces no es fácil construir aplicaciones IoT ya que requiere mucho trabajo duro, como hardware, programación, cables de puente y soldadura, etc. Incluso un usuario bien entrenado gastaría horas en manejar todo el trabajo, sin mencionar a los principiantes. Para simplificar el desarrollo de proyectos IoT, Seeed lanzó **[Wio Link](https://www.seeedstudio.com/wiki/Wio_Link)** en **[kickstarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search)** y resultó ser un gran éxito. El eslogan en Kickstarter definió bien la característica principal de Wio link:

**3 pasos. 5 minutos. ¡Construye tus propias aplicaciones IoT!**

Es tan simple, es construcción rápida, sin embargo no es ideal para todas las condiciones.
¿Qué pasa si solo necesitamos 2 conectores grove? ¿Qué pasa si hay espacio limitado en la aplicación pero Wio Link es demasiado grande? ¿Qué pasa si queremos reducir costos? Así que justo después de lanzar Wio Link, una solución micro y económica fue puesta en agenda, durante meses Seeeder ha rediseñado y optimizado la placa Wi-Fi y aquí está, el nuevo miembro de la familia Wio---**Wio Node**.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)

Tal como el significado de su nombre, Wio Node es verdaderamente un nodo Wi-Fi que conecta cosas en proyectos IoT. Si Wio Link es el hermano mayor, Wio Node debe ser el hermano menor en la familia Wio porque este pequeño y lindo tipo es solo un cuarto del tamaño de Wio link mientras integra todas las características básicas de Wio Link.

El ecosistema de Wio Node también consiste en Hardware Abierto **placa Wio Node**, **Aplicación Móvil Wio Link de Código Abierto** e **implementación de Servidor IoT de Código Abierto**. Así que la plataforma de software para Wio Link también está disponible para Wio Node.

[![Obtener Uno Ahora](https://files.seeedstudio.com/wiki/Wio_Node/pictures/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Node-p-2637.html)

:::caution
La función Wio IFTTT está EOL. Pero la APP Wio está disponible. Puedes usar la API de la APP Wio para leer el estado del sensor y controlar el actuador.
:::

## Características

----

- No se requiere programación de hardware o No breadboard o No cables de puente o No soldadura.
- Se soportan muchos módulos Grove (Revisa la lista en la Aplicación Móvil).
- Módulos Grove Plug-n-Play
- Configuración visual en lugar de programación de microcontrolador.
- Actualización automática vía compilación en la nube y OTA.
- Trae el mundo real a la plataforma virtual. Todos los sensores se convierten en API RESTful virtual.
- Aplicaciones Android e iOS para gestionar Wio Node.
- IFTTT soportado por el Canal de Seeed
- Certificado CE/FCC/TELEC para el módulo central ESP-WROOM-02

## Especificaciones

----

|General|Valor|Gestión de Energía|Valor|
|:---|---|:---|---:|
|**Tamaño**|28mm * 28mm|**Corriente DC Por Pin I/O**|12mA|
|**Cristal**|26MHz|**Voltaje de Entrada (Micro USB)**| 5V|
|**Memoria Flash**|4MBytes (W25Q32B)|**Voltaje de Entrada (Portapilas)**|3.4~4.2V|
|**Protocolo de Red Wi-Fi**|802.11b/g/n|**Corriente DC de Salida**|1000mA MAX
|**Tecnología de Cifrado Wi-Fi**|WEP/TKIP/AES|**Voltaje de Operación**|3.3V|
|**Conector de Expansión Grove 1**|UART0/I2C0/D0 |**Corriente de Carga**|500mA MAX|
|**Conector de Expansión Grove 2**|Analog/I2C1/D1|

## Ideas de Aplicación

----
Wio Node está bien diseñado para proporcionar soluciones Wi-Fi simples y económicas para proyectos como:

- Hogar Inteligente
- Monitoreo ambiental inteligente
- Juguetes Divertidos
- Web de las Cosas
- Internet de las Cosas

De hecho, hay muchos proyectos en nuestra [**receta**](https://community.seeedstudio.com/projects.html?t=Wio), ven y visítala para encontrar algunos proyectos interesantes o incluso compartir tus propios proyectos, estoy seguro de que ganarás muchos fanáticos.

|Sistema de control de riego |El internet del muro de led | Máquina de alimentación de perros|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1274)    |[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1594) |[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Monitor de Kickstarter|Monitor de Llamadas Perdidas|Tecla del Jefe|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1081)    |[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1059) |[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1077)|

:::note
Algunas de las recetas están hechas con Wio Link, puedes reemplazarlo con un Wio Node.
:::

## Descripción General del Hardware

----

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)

|No.|Nombre|Función|
|---|----|--------|
|1  |Function|Establece el modo de funcionamiento del Wio Node|
|2  |ESP8266|Microcontrolador basado en ESP8266|
|3  |Reset|Reinicia el dispositivo|
|4  |Micro USB|Alimenta el dispositivo y carga la batería|
|5  | Battery Holder|Un conector jst2.0, conecta una batería Li de 3.7V|
|6  | Analog/I2C1/D1|Puerto Grove, puedes conectar un módulo Grove tipo Digital/I2C/Analógico|
|7  | UART/I2C0/D0|Puerto Grove, puedes conectar un módulo Grove tipo UART/I2C/Digital|

### LEDs de Estado

Cerca del botón FUNCTION hay 2 LEDs de estado, uno azul y uno rojo. El LED AZUL es el LED indicador del estado de la red. Tiene los siguientes patrones de parpadeo:

- respiración En modo de configuración
- parpadea dos veces rápidamente luego se apaga 1s solicitando dirección IP del router
- parpadea una vez rápidamente luego se apaga 1s conectándose al servidor
- encendido 1s luego apagado 1s El nodo está en línea
- encendido constantemente el nodo está muerto por no obtener IP o no conectarse al servidor.
- parpadea rápidamente (encendido 100ms luego apagado 100ms) OTA

:::note
El LED AZUL está conectado al GPIO2 que también es el pin TX del UART1. Al descargar firmware, el UART1 vuelca los datos transmitidos en UART0 por instinto. Así que el LED AZUL parpadeará mientras se descarga el firmware. Después del arranque el GPIO2 se configurará como un GPIO no TX del UART1.
:::
El LED ROJO es otro LED de estado que indica el estado de alimentación de los módulos Grove. Todos los VCC de las seis interfaces Grove convergen juntos y pueden ser controlados con el GPIO 15. Cuando el nodo está en modo de sueño profundo, todos los módulos grove pierden su alimentación también. El LED ROJO se encenderá cuando los módulos Grove estén alimentados y se apagará cuando los módulos Grove no estén alimentados.

### Bonus

Wio Node tiene un cargador de batería LiPo incorporado, así que puedes cargar una batería LiPo de 3.7v a través del Puerto JST 2.0 cuando el USB esté conectado.

:::note

- Por favor maneja el conector USB micro tipo-B con cuidado, o podrías romper el conector separándolo de la placa.

- La batería no está incluida en el paquete. Pero hemos organizado muchas opciones para ti en [Bazaar](https://www.seeedstudio.com/s/battery.html).

:::

## Comenzar

----
Construyamos una aplicación LED muy básica con Wio Node, en esta aplicación podrás controlar el LED por tu smartphone en aproximadamente 5 minutos. Antes de comenzar, por favor asegúrate de tener las siguientes cosas a mano:

|Wio Node|Grove - LED|Cable USB Micro|
|--------|-----------|---------------|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20Node2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/48cmUSBc.jpg)|
|[OBTENER UNO AHORA](https://www.seeedstudio.com/Wio-Node-p-2637.html)|[OBTENER UNO AHORA](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[OBTENER UNO AHORA](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

:::note

- También se necesita un smartphone (versión de Android OS 4.1 o superior, versión de iOS 7 o superior)

- Grove - LED incluye un cable Grove ya

:::

### **PASO 1:** Instalar la App Android/iOS

Necesitas instalar la App Wio Link para gestionar y configurar tus dispositivos Wio Node.

Descarga la App Android o iOS e instálala. O puedes ir a la app store de Apple o Google market y buscar "Wio Link", la encontrarás.

|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Android%20Robot%20new.jpg)](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Apple%20new.jpg)](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|
|:---:|:---:|
|[Obtener App Android](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[Obtener App iOS](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|

:::note
Asegúrate de que tu versión de Android OS sea 4.1 o superior, y la versión de iOS sea 7 o superior.
:::

### **PASO 2:** Crea tu Cuenta

- Si es la primera vez que usas la APP Wio, puede requerir autorización de GPS, por favor apruébala, luego regístrate.
- Si ya tienes una cuenta, verifica la ubicación del servidor antes de iniciar sesión.

:::note
Por favor presta atención a la ubicación del servidor, porque una ubicación incorrecta del servidor llevará a fallos al conectar con Wio Node.
:::
[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)

### **PASO 3**: Conecta Wio Node a Internet

- Presiona y mantén el botón CONFIG hasta que el LED azul se convierta en modo respiración (es decir, parpadeando con efecto de aparición y desvanecimiento). Esto significa que Wio Node ha cambiado al modo de configuración exitosamente y puede ser detectado por la App Wio.
[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Confiture%20button.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Confiture%20button.png)
- Presiona "Add your first Device".
- Elige Wio Node
- "Go to Wi-Fi list" te llevará a la interfaz de configuración Wi-Fi de tu smartphone.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node%201.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node%201.png)

- Si has logrado exitosamente que el LED azul se convierta en modo respiración, encontrarás el Wio Node en la lista Wi-Fi, ¡conéctate a él! (Usualmente no se llama Wio Node en la lista Wi-Fi, en el ejemplo, el mío es Wio_091016, puedes encontrar uno llamado wio_xxxxxx en tu lista.)
- Una vez conectado, recibirás una notificación, entonces puedes regresar a la app
- El siguiente paso es conectarse al Wi-Fi de tu hogar o empresa

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node2.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node2.png)

- Si hay contraseña del Wi-Fi al que quieres conectarte, puede requerirte que ingreses la contraseña
- Considera que puedes necesitar conectar más de 1 Wio Node en el futuro, un nombre especial te hará distinguirlos entre sí fácilmente.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node3.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node3.png)

### **PASO 4:** Interconecta virtualmente módulos con Wio Node y actualiza firmware

- Haz clic en el Wio Node y estarás en la interfaz principal.
- Hay 2 conectores grove, selecciona el de la izquierda (D0).
- Porque LED son dispositivos de salida. Elige la categoría output
- Encuentra el ícono que parece una bombilla, selecciónalo.
- Entonces encontrarás que el botón rectangular inferior se vuelve rojo y "View API" se convierte en "Update Firmware". Elige "Update Firmware"

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20modules%20with%20Wio%20node.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20modules%20with%20Wio%20node.png)

- Ya que seleccionaste el puerto D0 para conectar con LED en la APP, necesitas conectar el Grove-LED real al puerto D0 de Wio Node también.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Wio_Node_Grove_LED.JPG)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Wio_Node_Grove_LED.JPG)

### **PASO 5**: Prueba la aplicación usando APIs

- Ahora que has conectado exitosamente el LED a Wio Node, haz clic en "View API" para verificar la API de Wio Node
- Ingresa "1" o "0" en el área "Test Request", y haz clic en el botón "Post" y ve qué pasará.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/change%20the%20valure%20to%20see%20what%20will%20happen.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/change%20the%20valure%20to%20see%20what%20will%20happen.png)

## Comenzar con IFTTT y DoButton

-----
¿No sabes cómo programar? No te preocupes, con la ayuda de [IFTTT](https://en.wikipedia.org/wiki/IFTTT), incluso si no sabes nada sobre programación, aún puedes construir algunos proyectos simples.

IFTTT es una abreviatura de "If This Then That" (Si Esto Entonces Aquello), es un servicio gratuito basado en web que permite a los usuarios crear cadenas de declaraciones condicionales simples, llamadas "recetas", que se activan basándose en cambios a otros servicios web como Gmail, Facebook, Instagram. ¿Cómo funciona IFTTT con Wio Node? Como puedes ver en las imágenes de abajo, Seeed proporcionó un servicio en la nube en wio.seeed.io, que puede intercambiar datos y enviar instrucciones a IFTTT y Wio Node. Así que creando algunas recetas simples, puedes hackear cosas sin programar.

![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/WioLink-Workshop.png)

Si no tienes una cuenta de IFTTT, haz clic [aquí](https://ifttt.com/join) para registrarte.

Si ya tienes una cuenta de IFTTT, haz clic [aquí](https://ifttt.com/recipes/search?q=seeed) para conectarte con Seeed, o busca Seeed en el sitio web de IFTTT. Allí encontrarás 9 recetas de Seeed para enseñarte cómo usar IFTTT.
[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/IFTTT%20recipes.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/IFTTT%20recipes.png)
¿Qué es DoButton? DoButton es una de las aplicaciones de IFTTT que te permite crear tu propio botón personalizado con solo un toque, es muy adecuado para construir proyectos IoT y controlarlo a través de tu smartphone, aquí hay dos ejemplos para mostrarte cómo usar IFTTT y DoButton para hacer aplicaciones útiles.

### Ejemplo

|**IFTTT**|**DoButton**|
|:---|:---|
|**[Receta]**[Haz un riego automático de jardín sin programar](https://community.seeedstudio.com/project_detail.html?id=1080)|**[Receta]**[Cómo alimentar a tus mascotas cuando no estás en casa](https://community.seeedstudio.com/project_detail.html?id=1066)|
|**[Video]**[Cómo usar ITFFF](https://vimeo.com/148590984)|**[Video]**[Cómo usar DoButton](https://vimeo.com/146988454)|

## Guía Avanzada

----
¿Te parecen demasiado simples esos ejemplos? ¿Quieres hacer proyectos más complicados? Aquí están las mejores guías para usuarios avanzados para hackear cosas con Wio nude. Con estas guías, los usuarios avanzados pueden conocer información más detallada sobre Wio Node, desplegar servidor privado, incluso escribir controladores de módulos para Wio Node.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/GOTO_ADVANCED_GUIDE.png)](https://github.com/Seeed-Studio/Wio_Link/wiki)

La guía cubre:

- Referencia de API
- Guía de Despliegue de Servidor
- Guía de Usuario Avanzado
- ¿Cómo escribir controladores de módulos para Wio Link?

:::note
    La guía está escrita para Wio Link, pero también se aplica a Wio Node.
:::

## Lista de Soporte Grove

|SKU       |Nombre                                      |Interfaz  |Controlador            |Enlace     |
|----------|--------------------------------------------|----------|-------------------    |-----------|
|101020008 |    Grove - Sensor de Humedad               |Analógica |sí mismo               | [enlace](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html) |
|101020014 |    Grove - Sensor de Luz                   |Analógica |Entrada Analógica Genérica | [enlace](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html) |
|101020015 |    Grove - Sensor de Temperatura           |Analógica |sí mismo               | [enlace](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html) |
|101020017 |    Grove - Sensor de Ángulo Rotatorio      |Analógica |Entrada Analógica Genérica | [enlace](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html) |
|101020022 |    Grove - Sensor de Luz(P)                |Analógica |Entrada Analógica Genérica | [enlace](https://www.seeedstudio.com/Grove-Light-Sensor(P)-p-1253.html) |
|101020023 |    Grove - Sensor de Sonido                |Analógica |sí mismo               | [enlace](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html) |
|101020027 |    Grove - Sensor de Electricidad          |Analógica |Entrada Analógica Genérica | [enlace](https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html) |
|101020036 |    Grove - Potenciómetro Deslizante        |Analógica |Entrada Analógica Genérica | [enlace](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html) |
|101020042 |    Grove - Sensor de Proximidad Infrarrojo 80cm |Analógica |Entrada Analógica Genérica | [enlace](https://www.seeedstudio.com/Grove-80cm-Infrared-Proximity-Sensor-p-788.html) |
|101020043 |    Grove - Sensor UV                       |Analógica |sí mismo               | [enlace](https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html) |
|101020048 |    Grove - Sensor de Ángulo Rotatorio(P)   |Analógica |Entrada Analógica Genérica | [enlace](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor(P)-p-1242.html) |
|101020063 |    Grove - Sensor de Volumen                |Analógica |sí mismo               | [enlace](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html) |
|101020076 |    Grove - Sensor de Luminancia            |Analógica |sí mismo               | [enlace](https://www.seeedstudio.com/Grove-Luminance-Sensor-p-1941.html) |
|101020078 |    Grove - Sensor de calidad del aire v1.3 |Analógica |Entrada Analógica Genérica | [enlace](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html) |
|101020003 |    Grove - Botón                           |Digital   |sí mismo               | [enlace](https://www.seeedstudio.com/Grove-Button-p-766.html) |
|101020004 |    Grove - Interruptor(P)                  |Digital   |Entrada Digital Genérica | [enlace](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html) |
|101020005 |    Grove - Sensor de Colisión              |Digital   |Entrada Digital Genérica | [enlace](https://www.seeedstudio.com/Grove-Collision-Sensor-p-1132.html) |
|101020009 |    Grove - Buscador de Líneas              |Digital   |Entrada Digital Genérica | [enlace](https://www.seeedstudio.com/Grove-Line-Finder-p-825.html) |
|101020018 |    Grove - Sensor de Agua                  |Digital   |Entrada Digital Genérica | [enlace](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html) |
|101020020 |    Grove - Sensor de Movimiento PIR        |Digital   |sí mismo               | [enlace](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html) |
|101020025 |    Grove - Interruptor de Inclinación      |Digital   |Entrada Digital Genérica | [enlace](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html) |
|101020037 |    Grove - Sensor Táctil                   |Digital   |Entrada Digital Genérica | [enlace](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html) |
|101020038 |    Grove - Interruptor Magnético           |Digital   |sí mismo               | [enlace](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html) |
|101020046 |    Grove - Sensor Hall                     |Digital   |itself                 | [enlace](https://www.seeedstudio.com/Grove-Hall-Sensor-p-965.html) |
|101020049 |    Grove - Sensor de Llama                 |Digital   |Entrada Digital Genérica  | [enlace](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html) |
|111020000 |    Grove - Botón(P)                        |Digital   |Entrada Digital Genérica  | [enlace](https://www.seeedstudio.com/Grove-Button(P)-p-1243.html) |
|101020073 |    Grove - Electroimán                     |Digital   |itself                 | [enlace](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html) |
|101020090 |    Grove - Atomización de Agua v1.0        |Digital   |Salida Digital Genérica | [enlace](https://www.seeedstudio.com/s/101020090.html#) |
|103020004 |    Grove - Relé de Estado Sólido           |Digital   |itself                 | [enlace](https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html) |
|103020005 |    Grove - Relé                            |Digital   |itself                 | [enlace](https://www.seeedstudio.com/Grove-Relay-p-769.html) |
|103020008 |    Grove - MOSFET                          |Digital   |Salida Digital Genérica | [enlace](https://www.seeedstudio.com/Grove-MOSFET-p-1594.html) |
|103020010 |    Grove - Relé de Enganche de 2 Bobinas   |Digital   |Salida Digital Genérica | [enlace](https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html) |
|103020014 |    Grove - Relé de Lengüeta Seca           |Digital   |itself                 | [enlace](https://www.seeedstudio.com/Grove-Dry-Reed-Relay-p-1412.html) |
|104020001 |    Grove - LED de Color Variable            |Digital   |Salida Digital Genérica | [enlace](https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html) |
|104020002 |    Grove - LED Púrpura (3mm)               |Digital   |Salida Digital Genérica | [enlace](https://www.seeedstudio.com/Grove-Purple-LED-(3mm)-p-1143.html) |
|104020005 |    Grove - Tira de Luces LED               |Digital   |Salida Digital Genérica | [enlace](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html) |
|104030005 |    Grove - LED Rojo                        |Digital   |Salida Digital Genérica | [enlace](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html) |
|104030007 |    Grove - LED Verde                       |Digital   |Salida Digital Genérica | [enlace](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html) |
|104030009 |    Grove - LED Blanco                      |Digital   |Salida Digital Genérica | [enlace](https://www.seeedstudio.com/Grove-White-LED-p-1140.html) |
|104030010 |    Grove - LED Azul                        |Digital   |Salida Digital Genérica | [enlace](https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html) |
|104030014 |    Grove - LED Intermitente Multicolor (5mm) |Digital   |Salida Digital Genérica | [enlace](https://www.seeedstudio.com/Grove-Multi-Color-Flash-LED-(5mm)-p-1141.html) |
|105020003 |    Grove - Motor de Vibración              |Digital   |Salida Digital Genérica | [enlace](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html) |
|105020004 |    Grove - Mini Ventilador                 |Digital   |Salida Digital Genérica | [enlace](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html) |
|105020005 |    Grove - Controlador EL                  |Digital   |itself                 | [enlace](https://www.seeedstudio.com/Grove-EL-Driver-p-2269.html) |
|107020000 |    Grove - Zumbador                        |Digital   |Salida Digital Genérica | [enlace](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) |
|107020001 |    Grove - Altavoz                         |Digital   |itself                 | [enlace](https://www.seeedstudio.com/Grove-Speaker-p-1445.html) |
|101020034 |    Grove - Brújula Digital de 3 Ejes       |I2C       |itself                 | [enlace](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html) |
|101020039 |Grove - Acelerómetro Digital de 3 Ejes(±1.5g) |I2C       |itself                 | [enlace](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B11.5g)-p-765.html) |
|101020050 |    Grove - Giroscopio Digital de 3 Ejes    |I2C       |itself                 | [enlace](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html) |
|101020072 |    Grove - Sensor Barómetro (BMP180)       |I2C       |itself                 | [enlace](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html) |
|101020083 |    Grove - Gestos                          |I2C       |itself                 | [enlace](https://www.seeedstudio.com/Grove-Gesture-p-2463.html) |
|101020088 |    Grove - Sensor de Gas Multicanal        |I2C       |itself                 | [enlace](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-p-2502.html) |
|103020013 |    Grove - ADC I2C                         |I2C       |itself                 | [enlace](https://www.seeedstudio.com/Grove-I2C-ADC-p-1580.html) |
|104030008 |    Grove - Pantalla OLED 1.12''            |I2C       |itself                 | [enlace](https://www.seeedstudio.com/Grove-OLED-Display-0.96''-p-781.html) |
|104030011 |    Grove - Pantalla OLED 0.96''            |I2C       |itself                 | [enlace](https://www.seeedstudio.com/Grove-OLED-Display-0.96''-p-781.html) |
|105020001 |    Grove - Controlador de Motor I2C        |I2C       |itself                 | [enlace](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html) |
|107020006 |    Grove - Receptor FM I2C                 |I2C       |itself                 | [enlace](https://www.seeedstudio.com/Grove-I2C-FM-Receiver-p-1953.html) |
|101020192 |    Grove - Barómetro(BMP280)               |I2C       |itself                 | [enlace](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP280)-p-2652.html) |
|101020193 |Grove - Sensor Temp&Hum&Barómetro(BME280)   |I2C       |itself                 | [enlace](https://www.seeedstudio.com/Grove-Temp%26Humi%26Barometer-Sensor-(BME280)-p-2653.html) |
|101020010 |    Grove - Medidor Ultrasónico             |Ditital   |itself                 | [enlace](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) |
|101020016 |    Grove - Receptor Infrarrojo             |Digital   |itself                 | [enlace](https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html) |
|101020019 |    Grove - Sensor Temperatura&Humedad Pro  |Digital   |itself                 | [enlace](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html) |
|101020026 |    Grove - Emisor Infrarrojo               |Digital   |itself                 | [enlace](https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html) |
|101020029 |    Grove - Sensor Reflectivo Infrarrojo    |Others    |itself                 | [enlace](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-p-1230.html) |
|101020030 |    Grove - Sensor de Luz Digital           |I2C       |itself                 | [enlace](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html) |
|101020040 |    Grove - Interruptor de Distancia IR     |Digital   |itself                 | [enlace](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html) |
|103020018 |    Grove - Grabadora                       |Digital   |itself                 | [enlace](https://www.seeedstudio.com/Grove-Recorder-p-1825.html) |
|104020006 |    Grove - Barra LED v2.0                  |UART      |itself                 | [enlace](https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html) |
|104030003 |    Grove - Pantalla de 4 Dígitos          |UART      |propio                 | [enlace](https://www.seeedstudio.com/Grove-4-Digit-Display-p-1198.html) |
|316010005 |    Grove - Servo                           |Digital   |propio                 | [enlace](https://www.seeedstudio.com/Grove-Servo-p-1241.html) |
|101020067 |    Grove - Sensor de CO2                   |UART      |propio                 | [enlace](https://www.seeedstudio.com/Grove-CO2-Sensor-p-1863.html) |

## FAQ

----
Aquí tienes algunas preguntas que usualmente recibimos de nuevos usuarios. Si tienes cualquier otro problema cuando estés usando Wio Node u otros productos Wio, ¡bienvenido a la [Comunidad de Wio](https://community.seeedstudio.com/topics.html?t=Wio) donde hay muchos usuarios profesionales esperando para darte consejos y también muchos usuarios avanzados proporcionando muchas ideas sobre cómo usar los productos Wio!

**P1. ¿Cuál es la diferencia entre Wio Node y Wio Link?**

>Wio Node es como un mini Wio Link, es solo un cuarto del tamaño de Wio Link y mucho más barato. A pesar del tamaño y precio, Wio Node aún tiene toda la funcionalidad de Wio Link. Para aquellos que prefieren un tamaño más pequeño a más conectores grove. Wio node es la mejor opción.

**2. ¿Qué debo hacer si no puedo conectar con el Servidor?**

>Cierra sesión y verifica si elegiste el servidor incorrecto antes de iniciar sesión. Si no estás en China Continental, por favor elige el servidor global.

**3. ¿Falla al configurar Wio Node y no puedo encontrar Wio Node en la lista de wifi?**

>Presta atención al LED azul. Asegúrate de que esté en modo respiración (parpadeando con efecto de aparición y desvanecimiento, es un modo muy único, muy fácil de reconocer) antes de cualquier paso adicional. Solo cuando el LED esté en modo respiración se puede encontrar Wio Node en la lista WiFi.

**4. Si quiero conectar más de 1 dispositivo I2C, ¿qué debo hacer?**

>No podemos conectar 2 dispositivos Grove-I2C a Wio node 2 Puerto Grove-I2C al mismo tiempo. [Grove-I2C hub](https://www.seeedstudio.com/s/I2C%20hub.html) puede ramificar 1 puerto I2C en 4. ¡Ve al [Bazaar](https://www.seeedstudio.com/s/I2C%20hub.html) para conseguir uno!

**5. ¿Puedo cambiar Wio Node al modo de suspensión?**

>Sí, por favor revisa la última API, donde puedes comandar Wio Node al modo de suspensión.

## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_Node/Recources/Wio_Node_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

----

- **Documentación y referencias**
  - [Referencia de API](https://seeed-studio.github.io/Wio_Link/)
  - [Guía de Implementación del Servidor](https://github.com/Seeed-Studio/Wio_Link/wiki/Server%20Deployment%20Guide)
  - [Cómo escribir controlador de módulo para Wio Link](https://github.com/Seeed-Studio/Wio_Link/wiki/How-to-write-module-driver-for-Wio-Link%3F)
- **Software**
  - [Código fuente en **Github**](https://github.com/Seeed-Studio/Wio_Link)
- **Hardware**
  - [Archivo de Esquemático en **PDF**](https://files.seeedstudio.com/wiki/Wio_Node/Recources/Wio%20Node%20v1.0.pdf)
  - [Archivo de Esquemático en **Eagle**](https://files.seeedstudio.com/wiki/Wio_Node/Recources/Wio_Node_Schematics.zip)
- **Certificado**
  - [CE/FCC/TELEC Certificado(solo) para módulo central ESP-WROOM-02](https://files.seeedstudio.com/wiki/Wio_Node/Recources/CE-FCC-TELEC_Certified(only)_for_core_module_ESP-WROOM-02.zip)

## Proyectos

**Casa Inteligente con Wio Link/Wio Node y App Telegram**: Construyendo una casa inteligente con seeedstudio Wio-Link/Wio-Node y conectándola al bot de Telegram.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/idreams/smart-home-with-wio-link-wio-node-and-telegram-app-831f78/embed' width='350'></iframe>

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
