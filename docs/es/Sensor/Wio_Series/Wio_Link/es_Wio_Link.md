---
title: Wio Link
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio_Link/
slug: /es/Wio_Link
last_update:
  date: 01/11/2022
  author: gunengyu
---

¿Cuál es la parte más difícil de construir aplicaciones IoT? Alguien dice que los cables de puente usualmente lo frustran, mientras que otro dice que odia más la soldadura. Incluso hay algunas personas a las que no les gusta la protoboard. Tal vez no seas uno de ellos, pero el conocimiento de ingeniería electrónica, programación de microcontroladores, programación de redes, manejo de protocolos IoT siguen siendo una gran carga entre tú y un proyecto IoT exitoso.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink.png)

Para simplificar todos estos pasos, a finales de 2015, Seeed Studio inició Wio Link en [KickStarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search), definiendo una nueva forma de desarrollar aplicaciones IoT. Wio Link es una placa de desarrollo Wi-Fi de código abierto basada en SoC ESP8266, la mejor parte es la plataforma asociada que permite a los usuarios crear aplicaciones IoT virtualizando módulos plug-n-play a APIs RESTful con aplicaciones móviles. Esto significa que no habrá programación de hardware, no protoboard, no cables de puente, y no soldadura, solo instalando una aplicación en tu teléfono móvil, puedes construir un proyecto IoT simple en 5 minutos.

[![](https://files.seeedstudio.com/wiki/Wio_Link/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Link-p-2604.html)

:::caution
     La función Wio IFTTT está descontinuada. Pero la aplicación Wio está disponible. Puedes usar la API de la aplicación Wio para leer el estado del sensor y controlar el actuador. 
:::

## Características

- No se requiere programación de hardware, no protoboard, no cables de puente, no soldadura.
- Se soportan muchos módulos Grove (Consulta la lista en la aplicación móvil).
- Módulos Grove Plug-n-Play
- Configuración visual en lugar de programación de microcontroladores.
- Actualización automática vía compilación en la nube y OTA.
- Trae el mundo real a la plataforma virtual. Todos los sensores se convierten en API RESTful virtuales.
- Aplicaciones Android e iOS para gestionar Wio Link.
- IFTTT soportado por el canal de Seeed

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Banner.gif)

## Especificaciones

----

|General|Valor|Gestión de Energía|Valor|
|:---|---|:---|---:|
|**Tamaño**|55mm * 48mm|**Corriente DC por Pin I/O**|12mA|
|**Cristal**|26MHz|**Voltaje de Entrada (Micro USB)**| 5V|
|**Memoria Flash**|4MBytes (W25Q32B)|**Voltaje de Entrada (Portapilas)**|3.4~4.2V|
|**Protocolo de Red Wi-Fi**|802.11b/g/n|**Corriente DC de Salida**|1000mA MAX
|**Tecnología de Cifrado Wi-Fi**|WEP/TKIP/AES|**Voltaje de Operación**|3.3V|
|**Conectores Grove**|6 |**Corriente de Carga**|500mA MAX|
|**Flash**| 4MB (W25Q32B)|

## Crear con Wio Link

----
Wio Link está bien diseñado para proporcionar soluciones Wi-Fi simples para proyectos como:

- Hogar Inteligente
- Monitoreo ambiental inteligente
- Juguetes Divertidos
- Web de las Cosas
- Internet de las Cosas

De hecho, ya hemos diseñado muchos proyectos en nuestra [**receta**](https://community.seeedstudio.com/projects.html?t=Wio), ven y visítala para encontrar algunos proyectos interesantes o incluso compartir tus propios proyectos, estoy seguro de que ganarás muchos fanáticos ~

|Sistema de control de riego |El internet del muro de led | Máquina de alimentación de perros|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1274)    |[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1594) |[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Monitor de Kickstarter|Monitor de Llamadas Perdidas|Tecla del Jefe|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1081)    |[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1059) |[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1077)|

:::note
       * Algunas de las recetas están hechas para Wio Node, pero también se pueden aplicar a Wio Link.
:::

## Descripción General del Hardware

---

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Hardware%20overview.jpg)

|Parte|Función|
|---|---|
|MCU |ESP8266|
|Puerto Digital 0 |GPIO 14|
|Puerto Digital 1| GPIO 12|
|Puerto Digital 2 |GPIO 13|
|Puerto Analógico |A3|
|Puerto UART| Pin 1 y Pin 3|
|Puerto I2C| Pin 4 y Pin 5|
|Luz de Estado|El LED azul es el indicador de estado WiFi, el LED rojo indica el estado de funcionamiento
|Botón de Configuración| Para configurar y gestionar tu Wio Link|
|Soporte de Batería|JST2.0|
|Micro USB|Para alimentar la placa o comunicarse con el PC|
|Botón de Reset| Para reiniciar el MCU|

### LEDs de Estado

Cerca del botón FUNCTION hay 2 LEDs de estado, uno azul y uno rojo. El LED AZUL es el LED indicador de estado de red. Tiene los siguientes patrones de parpadeo:

- respiración En modo de configuración
- parpadea dos veces rápidamente luego se apaga 1s solicitando dirección IP del router
- parpadea una vez rápidamente luego se apaga 1s conectando al servidor
- encendido 1s luego apagado 1s El nodo está en línea
- encendido constantemente el nodo está muerto por no obtener IP o no conectar al servidor.
- parpadea rápidamente (encendido 100ms luego apagado 100ms) OTA  

:::note
     * El LED AZUL está conectado al GPIO2 que también es el pin TX del UART1. Al descargar firmware, el UART1 vuelca los datos transmitiendo en UART0 por instinto. Así que el LED AZUL parpadeará mientras se descarga el firmware. Después del arranque el GPIO2 se configurará como un GPIO no TX del UART1.
:::
El LED ROJO es otro LED de estado que indica el estado de alimentación de los módulos Grove. Todos los VCC de las seis interfaces Grove convergen juntos y pueden ser controlados con el GPIO 15. Cuando el nodo está en modo de sueño profundo, todos los módulos grove pierden su alimentación también. El LED ROJO se encenderá cuando los módulos Grove estén alimentados y se apagará cuando los módulos Grove no estén alimentados.

### ¡Bonus

Wio Link tiene un cargador de batería LiPo incorporado, así que puedes cargar una batería LiPo de 3.7v a través del Puerto JST 2.0 cuando el USB esté conectado.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/500px-Wio_Link_Battery.jpg)

:::note
     * La batería debe comprarse por separado. Por favor visita [Bazaar](https://www.seeedstudio.com/s/Battery.html) donde hemos organizado muchas opciones para ti.
:::

## Comenzar

---

Construyamos una aplicación LED muy básica con Wio Link, en esta aplicación podrás controlar el LED por tu smartphone en aproximadamente 5 minutos. Antes de comenzar, por favor asegúrate de tener las siguientes cosas a mano:

|Wio Link|Grove - LED|Cable Micro USB|
|:--------:|:-----------:|:---------------:|
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio%20link%20small%20image.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/48cmUSBc.jpg)|
|[CONSIGUE UNO AHORA](https://www.seeedstudio.com/Wio-Link-p-2604.html)|[CONSIGUE UNO AHORA](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[CONSIGUE UNO AHORA](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

:::note
    * También se necesita un smartphone (Android OS versión 4.1 o superior, iOS versión 7 o superior)
    * Grove - LED incluye un cable Grove ya
:::

### **PASO 1:** Instalar la App Android/iOS

Necesitas instalar la App Wio Link para gestionar y configurar tus dispositivos Wio Link.

Descarga la App Android o iOS e instálala. O puedes ir a la App Store de Apple o Google Market y buscar "Wio Link", la encontrarás.

|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Android%20Robot%20new.jpg)](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Apple%20new.jpg)](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|
|:---:|:---:|
|[Obtener App Android](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[Obtener App iOS](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|

:::note
    * Asegúrate de que tu versión de Android OS sea 4.1 o superior, versión de iOS sea 7 o superior.
:::

### **PASO 2:** Crea tu Cuenta

- Si es la primera vez que usas la APP Wio, puede requerir autorización de GPS, por favor apruébala, luego regístrate.
- Si ya tienes una cuenta, verifica la ubicación del servidor antes de iniciar sesión.

:::note
    * Por favor presta atención a la ubicación del servidor, porque una ubicación incorrecta del servidor llevará a fallos al conectar con Wio Link.
:::
[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)

### **PASO 3**: Conectar al AP Wi-Fi de Wio Link

- Presiona y mantén el botón CONFIG hasta que el LED azul se convierta en modo respiración (es decir, parpadeando con efecto de aparición y desvanecimiento). Esto significa que Wio Link ha cambiado al modo de configuración exitosamente y puede ser detectado por la App Wio.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink_Configure-middle.png)

- Presiona "Add your first Device".
- Elige Wio Link
- "Go to Wi-Fi list" te llevará a la interfaz de configuración Wi-Fi de tu smartphone.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-1new.png)

- Si has logrado exitosamente hacer que el LED azul se convierta en modo respiración, encontrarás el Wio Link en la lista Wi-Fi, ¡conéctate a él! (Usualmente no se llama Wio Link en la lista Wi-Fi, en el ejemplo, el mío es Wio_8B2F12, puedes encontrar uno llamado wio_xxxxxx en tu lista.)
- Una vez conectado, recibirás una notificación, entonces puedes regresar a la app
- El siguiente paso es conectarse al Wi-Fi de tu hogar o empresa

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-2.png)

- Si hay contraseña del Wi-Fi al que quieres conectarte, puede requerirte ingresar la contraseña
- Considera que puedes necesitar conectar más de 1 dispositivo Wio en el futuro, un nombre especial te hará distinguirlos entre sí fácilmente.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-3.png)

### **PASO 4:** Interconectar virtualmente módulos con Wio Link y actualizar firmware

- Haz clic en el Wio Link y estarás en la interfaz principal.
- Hay 6 conectores grove, selecciona el primero de la izquierda.
- Porque LED son dispositivos de salida. Elige la categoría de salida
- Encuentra el ícono que parece una bombilla, elígelo.
- Entonces encontrarás que el botón rectangular inferior se vuelve rojo y "View API" se convierte en "Update Firmware". Elige "Update Firmware"

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step4.png)

- Ya que seleccionaste el puerto Digital 0 para conectar con LED en la APP, necesitas conectar el Grove-LED real al puerto Digital 0 de Wio Link también.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Grove_LED%20middle.JPG)

### **PASO 5**: Probar aplicación usando APIs

- Ahora que has conectado exitosamente el LED a Wio Link, haz clic en "View API" para verificar la API de Wio Link
- Ingresa "1" o "0" en el área "Test Request", y haz clic en el botón "Post" y ve qué pasará.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step5.png)

## Comenzar con IFTTT y DoButton

---
¿No sabes cómo programar? No te preocupes, con la ayuda de [IFTTT](https://en.wikipedia.org/wiki/IFTTT), incluso si no sabes nada sobre programación, aún puedes construir algunos proyectos simples.

IFTTT es una abreviatura de "If This Then That" (Si Esto Entonces Aquello), es un servicio gratuito basado en web que permite a los usuarios crear cadenas de declaraciones condicionales simples, llamadas "recetas", que se activan basándose en cambios a otros servicios web como Gmail, Facebook, Instagram. ¿Cómo funciona IFTTT con Wio Link? Como puedes ver en las imágenes de abajo, Seeed proporcionó un servicio en la nube en wio.seeed.io, que puede intercambiar datos y enviar instrucciones a IFTTT y Wio Link. Así que creando algunas recetas simples, puedes hackear cosas sin programar.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT.png)

Si no tienes una cuenta de IFTTT, haz clic [aquí](https://ifttt.com/join) para registrarte.

Si ya tienes una cuenta de IFTTT, haz clic [aquí](https://ifttt.com/recipes/search?q=seeed) para conectarte con Seeed, o busca Seeed en el sitio web de IFTTT. Allí encontrarás 9 recetas de Seeed para enseñarte cómo usar IFTTT.
![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT%20recipes.png)

¿Qué es DoButton? DoButton es una de las aplicaciones de IFTTT que te permite crear tu propio botón personalizado con solo un toque, es muy adecuado para construir proyectos IoT y controlarlo a través de tu smartphone, aquí hay dos ejemplos para mostrarte cómo usar IFTTT y DoButton para hacer aplicaciones útiles.

### Ejemplo

|**IFTTT**|**DoButton**|
|:---|:---|
|[**Receta**][Haz un riego automático de jardín sin programar](https://community.seeedstudio.com/project_detail.html?id=1080)|[**Receta**][Cómo alimentar a tus mascotas cuando no estás en casa](https://community.seeedstudio.com/project_detail.html?id=1066)|
|[**Video**][Cómo usar ITFFF](https://vimeo.com/148590984)|[**Video**][Cómo usar DoButton](https://vimeo.com/146988454)|

## Guía para usuarios avanzados

----
¿Te parecen demasiado simples esos ejemplos? ¿Quieres hacer proyectos más complicados? Aquí están las mejores guías para usuarios avanzados para hackear cosas con Wio Link. Con estas guías, los usuarios avanzados pueden conocer información más detallada sobre Wio Link, desplegar servidor privado, e incluso escribir controladores de módulos para Wio Link.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/GOTO_ADVANCED_GUIDE.png)](https://github.com/Seeed-Studio/Wio_Link/wiki)

La guía cubre:

- Referencia de API
- Guía de Despliegue de Servidor
- Guía de Usuario Avanzado
- ¿Cómo escribir controladores de módulos para Wio Link?

## Tutorial Avanzado

Si has controlado exitosamente el grove-led con tu smartphone, y quieres probar algo más difícil y no tan complicado, ¿por qué no pruebas este tutorial? Después de aprenderlo, podrás construir un monitor de temperatura y humedad e iluminar la tira de LED RGB con Wio Link.

Antes de comenzar, por favor verifica si tienes los siguientes dispositivos a mano.

|Tira de LED RGB|Grove-Sensor de Temperatura y Humedad|
|:---:|:---:|
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20LED%20Strip.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/grove-T%26H%20sensor.jpg)|
|[Consigue Uno Ahora](https://www.seeedstudio.com/s/led%20strip.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|

- Paso1: Retira el LED Grove del conector grove, conecta la tira LED al Wio Link y arrastra el mismo módulo al Wio Link en la App.
- Actualiza el firmware.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video.png)

- Paso2：Conecta el Sensor de Temperatura y Humedad Grove al Wio Link y arrastra el mismo módulo al Wio Link en la App.
- Actualiza el firmware.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video%202.png)

- Paso3: Ve las APIs y lee la temperatura y humedad en tu casa. La imagen de abajo muestra el cambio de temperatura antes y después de sostener el grove en la mano. Incrementé la temperatura en 1 grado Celsius. Prueba y ve cómo puedes cambiar la temperatura y humedad en tu casa.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Celsuis%202%20pics.png)

- Paso4: Controla la luz de la tira LED cambiando el valor RGB.

Debido a que la App Wio Link lee valores RGB hexadecimales, los valores RGB necesitan ser convertidos a valores hexadecimales. Aquí me gustaría recomendar el sitio web [RGB t0 Hex](https://www.rgbtohex.net/). Solo ingresando valores RGB para los 3 elementos RGB (Rojo, Verde, Azul), el sitio web convertirá el valor RGB a hexadecimal muy fácilmente. Aquí hay algunos ejemplos.

- Ingresa 255, 0, 0

![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20255%200%200.png)

- Conviértelo, entonces obtendrás el valor hexadecimal como FF0000, el color es Rojo.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/FF0000.png)

:::note
    * El valor RGB que ingreses debe ser cualquier número natural entre 0 y 255 (Incluyendo 0 y 255)
:::
Luego ingresa cuántos LEDs quieres encender y el valor hexadecimal en la app, aquí mi tira LED tiene 30 LEDs, así que los enciendo todos.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio%20link%20control%20led%20strip.png)

También puedes especificar qué parte de la tira sea iluminada y darle un color especial, o incluso hacer que parpadee en modo arcoíris. ¡Muchas funciones increíbles están esperando tu exploración!

## Recursos

---

Hardware

- [Archivos de esquemático EAGLE](https://files.seeedstudio.com/wiki/Wio_Link/resource/Wio_Link_SCH_v1.0.rar)
- [Archivo PCB EAGLE](https://files.seeedstudio.com/wiki/Wio_Link/resource/202000877%20Wio%20Link%20v1.0%20sch%20pcb.zip)
- [Archivos de esquemático(pdf)](https://files.seeedstudio.com/wiki/Wio_Link/resource/Wio%20Link%20v1.0%20sch.pdf)

Software

- [Código Fuente en Github.](https://github.com/Seeed-Studio/Wio_Link)

Más documentación y referencias

- [Referencia de API](https://seeed-studio.github.io/Wio_Link/)
- [Guía de Implementación de Servidor](https://github.com/Seeed-Studio/Wio_Link/wiki/Server%20Deployment%20Guide)
- [Cómo escribir controlador de módulo para Wio Link](https://github.com/Seeed-Studio/Wio_Link/wiki/How-to-write-module-driver-for-Wio-Link%3F)
- [iot.seeed.cc](http://iot.seeed.cc/index.html) para obtener más información.

## FAQ

----
Aquí hay algunas preguntas que usualmente recibimos de nuevos usuarios. Si tienes cualquier otro problema cuando estés usando Wio Link u otros productos Wio, bienvenido a la [Comunidad de Wio](https://community.seeedstudio.com/topics.html?t=Wio) donde hay muchos usuarios profesionales esperando darte consejos y también muchos usuarios avanzados proporcionando muchas ideas sobre cómo usar los productos Wio!

**1. Energía y Batería － ¿Viene Wio Link con una batería Lipo?**

No. Cada Wio Link viene con un cable micro USB para cargar o puedes comprar una batería Lipo de 3.7V de nuestro Bazaar. Aquí están las especificaciones para tu referencia:

- voltaje máximo de entrada: 4.2V;
- corriente máxima de carga: 500mA.

**2. Energía y Batería - ¿Puedo usar un adaptador de corriente con Wio Link? ¿Qué tipo? ¿Y portapilas comunes?**

Hay dos formas de alimentar el Wio Link, cable Micro USB o una batería Lipo de 3.7V. Si tanto el Micro USB como la batería están conectados a la placa, la batería será cargada por la alimentación USB. Puedes usar todo tipo de adaptador de corriente que pueda conectarse con cable Micro USB y salida de 5Vdc. El portabaterías es un conector JST-2.0.

**3. Consumo de Energía - ¿Cuál es el consumo de energía de Wio Link?**

El consumo promedio de energía es 70mA. Con una batería de 700mAh, puede mantenerse vivo hasta 10 horas. Hay APIs de Bajo Consumo que te permiten cambiar el Wio Link del modo de trabajo al modo de suspensión. Reducirá el consumo promedio de energía a 150uA o menos.

**4. Cables Grove - ¿Están los Groves equipados con cables en todos los kits?**

Sí, tenemos cada módulo Grove empacado con un cable Grove estándar de 4 pines.

**5. APIs RESTful - ¿Dónde están los endpoints? ¿Las llamadas no requieren pasar por algunos servidores en la nube verdad? ¿Se requiere una conexión a internet o pueden hacerse todas a través de una red local?**

Desplegamos el servidor de API REST en iot.seeed.cc, así que puedes obtener acceso al sensor y actuador desde iot.seeed.cc. En este momento, Wio Link debe conectarse a Internet. También, haremos código abierto del servidor para permitir a los usuarios desplegar servidores locales de manera muy simple con Docker. Con servidores locales desplegados, pueden utilizar el servicio de compilación e intercambio de datos localmente en lugar de ir en línea.

**6. Métodos de Programación Soportados - ¿Se soportarán otros métodos de programación, como Arduino IDE?**

Wio Link puede ser programado con Arduino IDE, en ese caso perderá la funcionalidad de las APIs RESTful excepto que implementes otra al mismo tiempo. Wio Link se espera principalmente que archive la conversión Web of Things para hardware físico, así que se espera que las interacciones se realicen en web / internet. Pero no te preocupes, la arquitectura de software es flexible, puedes descargar el código fuente localmente y conectar Wio Link a los servidores locales, entonces podrías modificar el código fuente que será compilado.

Si te gustaría interactuar con Arduino o RPI, puedes desarrollar un controlador de módulo de terceros y aquí está la guía: https://github.com/Seeed-Studio/Wio_Link/wiki/How-to-write-module-driver-for-Wio-Link%3F y controlador de ejemplo: https://github.com/Seeed-Studio/Grove_Drivers_for_Wio/tree/master/grove_example

**7. Plataforma Soportada -¿Soporta Wio Link la Plataforma Windows?**

Por ahora Wio Link proporciona dos aplicaciones móviles para Android e iOS. Tenemos todos los servicios como API RESTful, como cuentas de usuario y OTA, siguiendo los documentos de API, los desarrolladores de terceros pueden construir sus propias aplicaciones como Aplicaciones Móviles o Aplicaciones de Escritorio.
Wio Link es un proyecto amigable con la comunidad. No estará limitado a una cierta plataforma. Realmente esperamos que la gente pueda jugar con Wio Link a su manera.

**8. ¿Puedo usar Wio Link para interactuar con sistemas existentes?**

Sí. Wio Link puede interactuar con tu sistema existente de varias maneras. Primero, conecta cualquier GPIO de Wio Link a otro sistema, selecciona los módulos Grove virtuales "Generic Digital Input" o "Generic Digital Output" en la aplicación móvil, luego envía/lee señales hacia/desde el sistema existente con llamadas de API RESTful. Segundo, conecta el puerto analógico de Wio Link a otro sistema, selecciona el módulo Grove virtual "Generic Analog Input" en la aplicación móvil, luego lee la medición analógica para alguna cantidad física de tu sistema existente. Tercero, para interactuar con el sistema existente de manera más flexible, puedes desarrollar un controlador de módulo de terceros en el cual despachar las solicitudes desde internet a tu sistema existente a través de la interfaz I2C o UART. Tenemos una guía[1] sobre cómo desarrollar controladores de módulos de terceros y también podemos proporcionar soporte técnico para tu desarrollo.

[1]https://github.com/Seeed-Studio/Wio_Link#how-to-write-module-driver-for-wio-link

**9. ¿Cuántos Groves son compatibles con Wio Link?**

Hay más de 150 tipos de módulos Grove plug and play disponibles, entre los cuales 36 fueron compatibles con Wio Link hasta ahora, y puedes encontrar la mayoría de ellos en las Recompensas, estamos trabajando para agregar más continuamente.

Aquí está la lista de Groves compatibles hasta ahora:

### Lista de Compatibilidad de Grove

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

**10. Código de error de Wio Link y solución**

| 1021 | Fallo al conectar a Wifi     | No se pudo conectar a Wi-Fi. Por favor verifique la contraseña de Wi-Fi e intente nuevamente                                                           |
|------|--------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| 1031 | Fallo al conectar a Wio Wifi | No se pudo conectar al punto de acceso wi-fi de Wio, por favor intente nuevamente o elija manualmente el punto de acceso Wi-Fi de Wio en la configuración del sistema.                |
| 1032 | Error de selección de wifi        | Por favor seleccione un Wifi como "Wio_xxxxxx"                                                                                              |
| 1033 | Inconformidad de Wifi        | La conexión actual antes del WiFi y la elección de WiFi                                                                          |
| 1041 | Error de envío de orden         | Por favor verifique su conexión a internet e intente nuevamente. Si aún no puede resolver el problema, por favor consulte la sección de FAQ y contáctenos.    |
| 1042 | Error de conexión            | Su teléfono y el wifi del dispositivo se desconectaron                                                                                              |
| 1043 | Fallo al conectar a Wifi     | Por favor verifique su conexión a internet e intente nuevamente. O haga clic en "Configuración" para ir a la vista de configuración manual.                                 |
| 1044 | Error de Conexión         | Por favor verifique su conexión a internet e intente nuevamente. Si aún no puede resolver el problema, por favor consulte la sección de FAQ y contáctenos. |

## Proyecto

**Medidor de Sonido LED usando Wio-Link y Node-Red**: Sensor de sonido SeeedStudio Grove y tira LED conectados a Wio-Link siendo controlados por un flujo de Node-Red.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/potnik/led-sound-meter-using-wio-link-and-node-red-259e02/embed' width='350'></iframe>

## Soporte Técnico y Discusión del Producto

si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
