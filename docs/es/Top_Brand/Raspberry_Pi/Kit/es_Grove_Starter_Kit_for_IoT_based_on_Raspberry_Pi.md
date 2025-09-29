---
description: Grove Starter Kit para IoT basado en Raspberry Pi
title: Grove Starter Kit para IoT basado en Raspberry Pi
keywords:
- Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Grove Starter Kit para IoT basado en Raspberry Pi
category: Raspberry Pi
bzurl: https://www.seeedstudio.com/Microsoft-IoT-Grove-Kit-(Azure-Certified)-p-2694.html
prodimagename: cover.jpg
sku: 110060482
--- -->

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/cover.jpg)

Construir un proyecto IoT en tu Raspberry Pi nunca ha sido una tarea fácil para muchos desarrolladores. Esto se debe a las conexiones de hardware complicadas involucradas y la programación de software compleja. Seeed y Microsoft han trabajado juntos para aliviar algunos de estos desafíos introduciendo el Microsoft IoT Grove Kit.

La capa GrovePi+ incluida en el kit es completamente compatible con tu Raspberry Pi 3 y Raspberry Pi 2 que ejecutan Windows 10 IoT Core. Con el sistema Grove fácil de usar, ahora puedes conectar hasta 15 módulos Grove a tu Raspberry Pi simplemente a través de las interfaces Grove en el GrovePi+.

Además de los sensores y actuadores de alto rendimiento, el kit contiene una pantalla HDMI de 5 pulgadas y un LCD RGB con retroiluminación. El Microsoft IoT Grove Kit es una plataforma poderosa en la cual comenzar tu exploración en el Internet de las Cosas.

Ten en cuenta que este kit NO incluye la placa Raspberry Pi. Por favor visita [aquí](https://www.seeedstudio.com/Boards-for-Raspberry-pi-c-25.html) para comprar por separado.

:::note
GrovePi+ y parte del código fue diseñado por [Dexter Industry](http://www.dexterindustries.com/). Haz clic para obtener más información sobre Dexter.
:::

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Microsoft-IoT-Grove-Kit-(Azure-Certified)-p-2694.html)

## Características

* GrovePi+ fácil de usar que es compatible con Raspberry Pi B/B+/A+/2/3
* Módulos Grove plug-n-play para prototipado rápido

## Lista de Partes

| SKU | Nombre de la Parte | Cant. | Enlace |
|------|--------------|------|-------|
|103010002 | GrovePi+ | 1 | [Obtener Uno Ahora](https://www.seeedstudio.com/GrovePi.html) |
|104990243| Pantalla HDMI de 5 Pulgadas con Pantalla Táctil USB | 1 | [Obtener Uno Ahora](https://www.seeedstudio.com/5-Inch-HDMI-Display-with-USB-TouchScreen-p-2638.html) |
|103020005| Grove - Relay | 1 | [Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Relay-p-769.html) |
|101020011| Grove - Sensor de Temp&Humedad| 1 | [Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Temp&Humi-Sensor-p-745.html) |
|101020010| Grove - Ultrasonic Ranger | 1 | [Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) |
|104020006| Grove LED Bar v2.0 | 1 | [Obtener Uno Ahora](https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html) |
|101020048| Grove - Sensor de Ángulo Rotatorio(P)| 1 | [Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor%28P%29-p-1242.html) |
|107020000| Grove - Buzzer| 1 | [Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) |
|101020023| Grove - Sensor de Sonido| 1 | [Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html) |
|101020014 | Grove - Sensor de Luz v1.2 | 1 | [Obtener Uno Ahora](https://www.seeedstudio.com/Grove-%E2%80%93-Light-Sensor-%28P%29-v1.1-p-2693.html) |
|101020003| Grove - Button| 1 | [Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Button-p-766.html) |
|104030001| Grove - LCD RGB Backlight| 1 | [Obtener Uno Ahora](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html) |
|109990056| Cable HDMI| 1 | [Obtener Uno Ahora](https://www.seeedstudio.com/Flat-HDMI-Male-to-Male-Cable-1M,Support-3D-For-HDTV-computer-&-tablets-cable-p-2142.html) |
|321010007| Cable Micro USB - 48cm| 1 | [Obtener Uno Ahora](https://www.seeedstudio.com/Micro-USB-Cable-1200px-p-1475.html) |

## Conexión de hardware para GrovePi+

**1.1 Conectando el GrovePi+ al Raspberry Pi**

Primero, monta tu GrovePi+ en el Raspberry Pi. El GrovePi+ se desliza sobre la parte superior del
Raspberry Pi como se muestra en la imagen a continuación.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/1_1_1.png)

Asegúrate de que los pines estén correctamente alineados al apilar el GrovePi+.

**Encendiendo el Raspberry Pi**

Para alimentar el GrovePi+ y el Raspberry Pi, puedes usar el puerto de alimentación micro USB en el Raspberry Pi.
Recuerda usar un buen adaptador de corriente capaz de suministrar 2A a 5V. Si quieres ejecutar el GrovePi+ en una configuración independiente, entonces podrías encontrar útil un banco de energía USB.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/1_2_1.png)

## Instalar la biblioteca C# de GrovePi para Raspberry Pi

El GrovePi puede ser programado en C#, pero primero debes instalar la biblioteca de controladores C# de Windows 10 IoT para GrovePi. Hay dos formas de hacer esto: instalar el paquete NuGet y usar el código de la biblioteca C# de GrovePi desarrollado por Dexter.

**Instalar el paquete NuGet**

El paquete NuGet de GrovePi para la versión actual está disponible.
Para instalar GrovePi para Windows IoT sigue los siguientes pasos.

**PASO1.**

Desde el menú Tools, selecciona Library Package Manager y luego haz clic en Package Manager Console.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_1_1.png)

Se muestra la ventana **Package Manager Console**.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_1_2.png)

**PASO2.**

Ejecuta el siguiente comando en la Package Manager Console.

    PM> Install-Package GrovePi

Más detalles en [https://www.nuget.org/packages/GrovePi/](https://www.nuget.org/packages/GrovePi/).

**Usar el código de la biblioteca C# de GrovePi**

Si eres un programador experimentado o no puedes instalar el paquete NuGet de GrovePi exitosamente, puedes descargar el código de la biblioteca haciendo clic en este [https://github.com/DexterInd/GrovePi/tree/master/Software/CSharp](https://github.com/DexterInd/GrovePi/tree/master/Software/CSharp).

**PASO1.**

Mueve los dos proyectos de biblioteca C# "GrovePi" y "Driver" a la carpeta donde reside tu proyecto. Y agrégalos a tu proyecto en Solution Explorer.
Por ejemplo, haz clic derecho en la Solution "GrovePiExamples", Add | Existing Project, como se muestra a continuación.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_1.png)

Luego agrega "GrovePi" y "Driver" al Solution Explorer.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_2.png)

**PASO2.**

Establece la biblioteca C# como los proyectos de referencia. Haz clic derecho en References y haz clic en Add References

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_3.png)

Haz clic en Projects | Solution, y marca la casilla como se muestra en el cuadro rojo a continuación. Luego haz clic en OK.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_4.png)

Ahora, ya has instalado la biblioteca C# de GrovePi exitosamente.

Todos los sensores compatibles están disponibles a través de la clase DeviceFactory.

**Ejemplos**

A continuación se muestran algunos ejemplos simples de cómo usar la biblioteca.

* **Medir Distancia**

Sensor ultrasónico conectado al pin digital 2 (D2)

    var distance = DeviceFactory.Build.UltraSonicSensor(Pin.DigitalPin2).MeasureInCentimeters();

* **Mostrar Hello World**

       DeviceFactory.Build.RgbLcdDisplay().SetText("Hello World").SetBacklightRgb(0, 255, 255);

* **Hacer sonar el zumbador**

Hacer sonar el zumbador conectado al pin digital 2 (D2).

    DeviceFactory.Build.Buzzer(Pin.DigitalPin2).ChangeState(SensorStatus.On);

## Ejecutando Ejemplos de Win10 IoT en Rpi3

Aquí tenemos una lista de proyectos de ejemplo que muestran lo fácil que es comenzar un proyecto con la Raspberry Pi. Estos proyectos de Raspberry Pi combinan sensores Grove fáciles de usar con la potente Raspberry Pi.
Puedes hacer clic [aquí](https://github.com/Seeed-Studio/GrovePiExamples_win10) para descargar el código de ejemplo de GrovePi para win10. Necesitarás presionar el botón verde "Clone or download" a la derecha y elegir "Download ZIP". Luego necesitas extraer el ZIP en una ubicación de tu elección.
Abre el GrovePiExamples(win10).sln con tu Visual Studio 2015, puedes ver que hay 12 proyectos en el Explorador de Soluciones como muestra la imagen a continuación.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_0_1.png)

Antes de comenzar, por favor compila primero el proyecto **GrovePi**. Esto es porque los otros proyectos dependen de él.

**Hola Mundo desde RGB LCD**

Este ejemplo está destinado a ser tu primer proyecto con el GrovePi+. Todas las partes utilizadas en este proyecto están disponibles en el Kit de Inicio GrovePi+. Una vez dominado, puedes pasar a proyectos más complicados como conectar una pantalla u otros sensores a la Raspberry Pi.

* **Paso1:** Establece el proyecto HelloWorld(LCD) como Proyecto de Inicio.
* **Paso2:** Conexión de hardware.

Conecta el RGB LCD al Puerto I2C-1 y enciende la Raspberry Pi usando el conector de cable Grove.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_1_1.png)

* **Paso3:** Despliega tu aplicación.

1) Con la aplicación abierta en Visual Studio, establece la arquitectura en el menú desplegable de la barra de herramientas. Selecciona ARM.

2) A continuación, en la barra de herramientas de Visual Studio, haz clic en el menú desplegable Local Machine y selecciona Remote Machine.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_1_2.png)

3) En este punto, Visual Studio presentará el diálogo Remote Connections. Si previamente usaste [PowerShell](http://ms-iot.github.io/content/en-US/win10/samples/PowerShell.htm) <!-- 源文件链接有误 -->para establecer un nombre único para tu dispositivo, puedes ingresarlo aquí (en este ejemplo, estamos usando my-device). De lo contrario, usa la dirección IP de tu dispositivo Windows IoT Core. Después de ingresar el nombre del dispositivo/IP selecciona None para Windows Authentication, luego haz clic en Select.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_1_3.png)

4) Puedes verificar o modificar estos valores navegando a las propiedades del proyecto (selecciona Properties en el Explorador de Soluciones) y eligiendo la pestaña Debug a la izquierda.

Cuando todo esté configurado, deberías poder presionar F5 desde Visual Studio. Si hay paquetes faltantes que no instalaste durante la configuración, Visual Studio puede pedirte que los adquieras ahora.
La aplicación HelloWorld se desplegará e iniciará en el dispositivo Windows IoT, y verás el HelloWorld desde el Grove RGB LCD.

**Sensor de Ángulo Rotatorio Grove**

Este ejemplo puede configurarse de la misma manera que HelloWorld(LCD).

* **Paso1:** Establece el proyecto GroveAngleSensor como Proyecto de Inicio.
* **Paso2:** Conexión de hardware.
Conecta el Sensor de Ángulo Grove al Puerto A0 y conecta la Raspberry Pi a la pantalla LCD mediante cable HDMI.
* **Paso3:** Despliega tu aplicación. Consulta el ejemplo HelloWorld(LCD) del Paso3.

Cuando todo esté configurado, deberías poder presionar F5 desde Visual Studio. Si hay paquetes faltantes que no instalaste durante la configuración, Visual Studio puede pedirte que los adquieras ahora.
La aplicación GroveAngleSensor se desplegará e iniciará en el dispositivo Windows IoT. Puedes ver el valor del Sensor de Ángulo Grove en la Pantalla LCD.

**Barra LED Grove**

Este ejemplo puede configurarse de la misma manera que HelloWorld(LCD).

* **Paso1:** Establece el proyecto GroveLedBar como Proyecto de Inicio.
* **Paso2:** Conexión de hardware.
Conecta la Barra Led Grove al Puerto D5.
* **Paso3:** Despliega tu aplicación. Consulta el ejemplo HelloWorld(LCD) del Paso3.

Cuando todo esté configurado, deberías poder presionar F5 desde Visual Studio. Si hay paquetes faltantes que no instalaste durante la configuración, Visual Studio puede pedirte que los adquieras ahora.
La aplicación GroveLedBar se desplegará e iniciará en el dispositivo Windows IoT. Puedes ver que la Barra Led Grove se encenderá en ciclo.

**Grove - Sensor de Luz**

Este ejemplo tiene el mismo uso que HelloWorld(LCD).

* **Paso1**: Establece el proyecto GroveLightSensor como Proyecto de Inicio.
* **Paso2**: Conexión de hardware.
Conecta el Sensor de Luz Grove al Puerto A2 y conecta la Raspberry Pi a la pantalla LCD mediante cable HDMI.
* **Paso3**: Despliega tu aplicación. Consulta el ejemplo HelloWorld(LCD) del Paso3.

Cuando todo esté configurado, deberías poder presionar F5 desde Visual Studio. Si hay paquetes faltantes que no instalaste durante la configuración, Visual Studio puede pedirte que los adquieras ahora.
La aplicación GroveLightSensor se desplegará e iniciará en el dispositivo Windows IoT. Puedes ver el valor del Sensor de Luz Grove en la Pantalla LCD.

**Grove - Relé**

Este ejemplo tiene el mismo uso que HelloWorld(LCD).

* **Paso1**: Establece el proyecto GroveRelay como Proyecto de Inicio.
* **Paso2**: Conexión de hardware.
Conecta el Relé Grove al Puerto D2.
* **Paso3**: Despliega tu aplicación. Consulta el ejemplo HelloWorld(LCD) del Paso3.

Cuando todo esté configurado, deberías poder presionar F5 desde Visual Studio. Si hay paquetes faltantes que no instalaste durante la configuración, Visual Studio puede pedirte que los adquieras ahora.
La aplicación GroveRelay se desplegará e iniciará en el dispositivo Windows IoT. Puedes ver que el Relé Grove se abrirá y cerrará cada 1 segundo.

**Grove - Sensor de Sonido**

Este ejemplo tiene el mismo uso que HelloWorld(LCD).

* **Paso1**: Establece el proyecto GroveSoundSensor como Proyecto de Inicio.
* **Paso2**: Conexión de hardware.
Conecta el Sensor de Sonido Grove al Puerto A1 y conecta la Raspberry Pi a la pantalla LCD mediante cable HDMI.
* **Paso3**: Despliega tu aplicación. Consulta el ejemplo HelloWorld(LCD) del Paso3.

Cuando todo esté configurado, deberías poder presionar F5 desde Visual Studio. Si hay paquetes faltantes que no instalaste durante la configuración, Visual Studio puede solicitarte que los adquieras ahora.
La aplicación GroveSoundSensor se desplegará e iniciará en el dispositivo Windows IoT. Puedes ver el valor del Sensor de Sonido Grove en la pantalla LCD.

**Grove - Sensor de Temperatura y Humedad**

Este ejemplo tiene el mismo uso que HelloWorld(LCD).

* **Paso1**: Establece el proyecto GroveTempAndHumi como Proyecto de Inicio.
* **Paso2**: Conexión de hardware.
Conecta el Sensor de Temp y Humedad Grove al Puerto D3 y conecta la Raspberry Pi a la pantalla LCD mediante cable HDMI.
* **Paso3**: Despliega tu aplicación. Consulta el ejemplo HelloWorld(LCD) del Paso3.

Cuando todo esté configurado, deberías poder presionar F5 desde Visual Studio. Si hay paquetes faltantes que no instalaste durante la configuración, Visual Studio puede solicitarte que los adquieras ahora.
La aplicación GroveTempAndHumi se desplegará e iniciará en el dispositivo Windows IoT. Puedes ver los valores de Temperatura y Humedad en la pantalla LCD.

**Grove - Sensor Ultrasónico de Distancia**

Este ejemplo tiene el mismo uso que HelloWorld(LCD).

* **Paso1**: Establece el proyecto GroveUltrasonicSensor como Proyecto de Inicio.
* **Paso2**: Conexión de hardware.
Conecta el Sensor Ultrasónico de Distancia Grove al Puerto D4 y conecta la Raspberry Pi a la pantalla LCD mediante cable HDMI.
* **Paso3**: Despliega tu aplicación. Consulta el ejemplo HelloWorld(LCD) del Paso3.

Cuando todo esté configurado, deberías poder presionar F5 desde Visual Studio. Si hay paquetes faltantes que no instalaste durante la configuración, Visual Studio puede solicitarte que los adquieras ahora.
La aplicación GroveUltrasonicSensor se desplegará e iniciará en el dispositivo Windows IoT. Puedes ver el valor de Distancia en la pantalla LCD.

**Pantalla del Clima del Hogar**

Este ejemplo tiene el mismo uso que HelloWorld(LCD).

* **Paso1**: Establece el proyecto HomeWeatherDisplay como Proyecto de Inicio.
* **Paso2**: Conexión de hardware.
Conecta el Sensor de Temp y Humedad Grove al Puerto D3, LCD RGB al Puerto I2C usando el conector de cable Grove.
* **Paso3**: Despliega tu aplicación. Consulta el ejemplo Blink del Paso5.

Cuando todo esté configurado, deberías poder presionar F5 desde Visual Studio. Si hay paquetes faltantes que no instalaste durante la configuración, Visual Studio puede solicitarte que los adquieras ahora.
La aplicación Home Weather Display se desplegará e iniciará en el dispositivo Windows IoT, y puedes ver la temperatura en el LCD RGB.

**Todos los Módulos en Un Proyecto**

Este ejemplo tiene el mismo uso que HelloWorld(LCD).

* **Paso1**: Establece el proyecto All_in_One como Proyecto de Inicio.
* **Paso2**: Conexión de hardware.
  * Grove - Relay > D2
  * Grove - Sensor de Temp y Humedad > D3
  * Grove - Sensor Ultrasónico de Distancia > D4
  * Grove - Barra LED V2.0 > D5
  * Grove - Zumbador > D6
  * Grove - Botón > D7
  * Grove - Sensor de Ángulo Rotatorio > A0
  * Grove - Sensor de Sonido > A1
  * Grove - Sensor de Luz > A2

Conecta los Módulos Grove al GrovePi+ como muestra la tabla. Y conecta la Raspberry Pi a la pantalla LCD mediante cable HDMI.

* **Paso3**: Despliega tu aplicación. Consulta el ejemplo HelloWorld(LCD) del Paso3.

Cuando todo esté configurado, deberías poder presionar F5 desde Visual Studio. Si hay paquetes faltantes que no instalaste durante la configuración, Visual Studio puede solicitarte que los adquieras ahora.
La aplicación All_in_One se desplegará e iniciará en el dispositivo Windows IoT.
Puedes ver los valores de Distancia, Sonido, Luz y el estado del relay en la pantalla LCD. El sensor de ángulo se mostrará como un gráfico en la pantalla. La Barra LED indica el valor del sensor de ángulo. Presiona el Botón y manténlo presionado, el Relay Grove se abrirá.

## Ver También

* [Windows Dev Center](https://dev.windows.com/en-us/iot)
* [Código de la Biblioteca GrovePi C#](https://github.com/DexterInd/GrovePi/tree/master/Software/CSharp)
* [Código de Ejemplo](https://github.com/Seeed-Studio/GrovePiExamples_win10)

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
