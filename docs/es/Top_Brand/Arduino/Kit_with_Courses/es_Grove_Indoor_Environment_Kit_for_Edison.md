---
description: Kit de Ambiente Interior Grove para Edison
title: Kit de Ambiente Interior Grove para Edison
keywords:
- Kit with Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Indoor_Environment_Kit_for_Edison
last_update:
  date: 2/17/2023
  author: jianjing Huang
---

<!-- ---
name: Grove Indoor Environment Kit for Edison
category: Others
bzurl: https://www.seeedstudio.com/Grove-Indoor-Environment-Kit-for-Intel%C2%AE-Edison-p-2427.html
oldwikiname:  Grove Indoor Environment Kit for Edison
prodimagename: Grove_Indoor_Environment_Kit_for_Edison_with_case.JPG
surveyurl: https://www.research.net/r/Grove_Indoor_Environment_Kit_for_Edison
sku:  110060064
--- -->

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Grove_Indoor_Environment_Kit_for_Edison_with_case.JPG)

El Kit de Ambiente Interior Grove para Edison facilita la creación de aplicaciones completas de ambiente interior con Intel Edison y Arduino Breakout Board. Con el Base Shield V2, los desarrolladores pueden conectar hasta 11 sensores y actuadores Grove diferentes rápidamente. Proporcionamos código de demostración genial que se actualizará constantemente, y será muy fácil operar estos sensores y actuadores sin ninguna experiencia de programación.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Indoor-Environment-Kit-for-Intel%C2%AE-Edison-p-2427.html)

## ¿Qué incluye el kit?

---

* [Base Shield V2](/es/Base_Shield_V2)  x1

* [Grove - Sensor de Temperatura y Humedad (Alta Precisión y Mini)](/es/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0)  x1

* [Grove - Sensor de humedad](/es/Grove-Moisture_Sensor)  x1

* [Grove - Sensor de luz](/es/Grove-Light_Sensor)  x1

* [Grove - Sensor UV](/es/Grove-UV_Sensor)  x1

* [Grove - Sensor de movimiento PIR](/es/Grove-PIR_Motion_Sensor)  x1

* [Grove - Encoder](/es/Grove-Encoder)  x1

* [Grove - Botón](/es/Grove-Button)  x1

* [Grove - LCD con retroiluminación RGB](/es/Grove-LCD_RGB_Backlight)  x1

* [Grove - Relé](/es/Grove-Relay)  x1

* [Grove - Servo](/es/Grove-Servo)  x1

* [Grove - Zumbador](/es/Grove-Buzzer)  x1

* [Adaptador de 9V a conector cilíndrico](https://www.seeedstudio.com/depot/9V-to-Barrel-Jack-Adapter-p-1481.html)  x1

* Cable Grove 26AWG  x10

* Cable USB  x1

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Grove-Indoor-Environment-Kit-for-Edison.jpg)

## Instalación del IDE Arduino de Edison

---
Consulte el sitio oficial de Intel Edison: [Guía de inicio de Edison](https://communities.intel.com/docs/DOC-23147)

1.Descargue el IDE Arduino de Edison.(Nota: Seleccione su sistema operativo.)

2.Navegue a la carpeta donde descargó el archivo .zip del IDE Arduino de Edison

3.Haga clic derecho en el archivo .7z, resalte "7-zip", y seleccione "Extraer a "arduino-…"

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/IndoorKit_Extract_7z.png)

4.Haga clic a través de la carpeta que se creó hasta que vea el archivo del IDE "arduino.exe". Haga doble clic en este archivo y esta ventana debería abrirse.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/IndoorKit_ArduinoIDE.png)

## Instalar controladores requeridos

---
1.Descargar [controladores FTDI](https://www.ftdichip.com/Drivers/CDM/CDM%20v2.10.00%20WHQL%20Certified.exe)

2.Hacer clic derecho en el archivo .exe que descargaste, que debería llamarse "CDM…" y seleccionar "Ejecutar como administrador".

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_FTDI_Driver.jpg)

3.Hacer clic en "Extract".

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_FTDI_Driver_Install.jpg)

4.Hacer clic en "Next".

5.Hacer clic en "Finish" cuando veas esta pantalla.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_FTDI_Driver_Install_ok.jpg)

6.Descargar [Controladores Intel Edison](https://communities.intel.com/docs/DOC-23242) para instalar los controladores RNDIS, CDC y DFU requeridos.

7.Hacer doble clic en el archivo .exe para comenzar la instalación.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Intel_Edison_Driver.jpg)

## Conexión de hardware

---
Usando cable Grove de 26AWG hacer las siguientes conexiones:

<table>
  <tbody>
    <tr>
      <th>Módulos Grove</th>
      <th>Conectado a</th>
    </tr>
    <tr>
      <td width="200px">Sensor de Temperatura y Humedad</td>
      <td width="100px">I2C</td>
    </tr>
    <tr>
      <td width="200px">Sensor de Humedad</td>
      <td width="100px">A1</td>
    </tr>
    <tr>
      <td width="200px">Sensor de Luz</td>
      <td width="100px">A2</td>
    </tr>
    <tr>
      <td width="200px">Sensor UV</td>
      <td width="100px">A3</td>
    </tr>
    <tr>
      <td width="200px">Sensor de Movimiento PIR</td>
      <td width="100px">D7</td>
    </tr>
    <tr>
      <td width="200px">Encoder</td>
      <td width="100px">D2</td>
    </tr>
    <tr>
      <td width="200px">Botón</td>
      <td width="100px">UART(D1)</td>
    </tr>
    <tr>
      <td width="200px">LCD RGB Backlight</td>
      <td width="100px">I2C</td>
    </tr>
    <tr>
      <td width="200px">Relé</td>
      <td width="100px">D5</td>
    </tr>
    <tr>
      <td width="200px">Servo</td>
      <td width="100px">D6</td>
    </tr>
    <tr>
      <td width="200px">Buzzer</td>
      <td width="100px">D4</td>
    </tr>
  </tbody>
</table>

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_Indoor_Wire_Figure.png)

## Ejecutar Ejemplo

---
1.Abrir el sitio web: [Grove_Indoor_Environment_Demo](https://github.com/Seeed-Studio/Grove_Indoor_Environment_Demo) para descargar todo el proyecto.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Github_Demo.png)

2.Hacer clic en **Tools &gt; Serial Port** y seleccionar el Com # al que está conectado el Intel Edison

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Import_Indoor_Kit_Demo.png)

3.Hacer clic en Sketch&gt;Import Library…&gt;Add Library e importar la biblioteca descargada en el **paso 1**

4.Hacer clic en **File&gt;Examples&gt; Grove_Indoor_Environment_Demo** y seleccionar la demostración. Hacer clic en el icono **upload**

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Upload_Indoor_Kit_Demo.png)

5.Abrir **Serial Monitor**, imprimirá la información de los sensores:

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Serial_Monitor.png)

6.Rotar el Encoder para verificar el valor del sensor en el LCD.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Rotate_Encoder.png)

7.En el **"Send TextBox"**, puedes ingresar el siguiente comando para operar los sensores y actuadores:

_set [sensor][condición:&gt;, &lt; o =][ umbral],[actuador]=[acción]_

<table>
  <tbody>
    <tr>
      <th>Ejemplo</th>
      <th>Descripción</th>
    </tr>
    <tr>
      <td width="300px">_set temp&gt;40, relay=1_</td>
      <td width="500px">si la temperatura es mayor a 40℃, el relé se abre.</td>
    </tr>
    <tr>
      <td width="300px">_set temp&gt;40, sleep=1_</td>
      <td width="500px">si la temperatura es &gt;40℃, no hacer nada.</td>
    </tr>
    <tr>
      <td width="300px">_set humi&gt;60, buzzer=1_</td>
      <td width="500px">si la humedad es &gt;60%, el zumbador suena.</td>
    </tr>
    <tr>
      <td width="300px">_set light&gt;600, servo=90_</td>
      <td width="500px">si la intensidad de luz es &gt;600, el servo gira 90°.</td>
    </tr>
    <tr>
      <td width="300px">_set uv&gt;80, relay=0_</td>
      <td width="500px">si la intensidad UV es &gt;80, el relé se cierra.</td>
    </tr>
    <tr>
      <td width="300px">_set pir=1, buzzer=1_</td>
      <td width="500px">si se detectan personas, el zumbador suena.</td>
    </tr>
    <tr>
      <td width="300px">_set ms&gt;40, relay=1_</td>
      <td width="500px">si la humedad es &gt;40, el relé se abre.</td>
    </tr>
    <tr>
      <td width="300px">_set ssid=name, psw=password_</td>
      <td width="500px">establecer el SSID y contraseña del wifi. Puedes abrir un navegador web, e ir a la dirección IP mostrada en el Serial Monitor o LCD. El puerto predeterminado es 88. El puerto predeterminado es 88. Por ejemplo: 192.168.1.101:88</td>
    </tr>
  </tbody>
</table>

Nota:

* El comando debe terminar con '/n', por lo que se debe seleccionar **"NewLine"** (en el Monitor Serie).

* Un actuador solo puede ser controlado por un sensor. Si un sensor A quiere controlar un actuador (que ya está siendo controlado por el sensor B), el sensor B debe configurarse en modo sleep.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_command.png)

8.Conexión WiFi. Abre el Monitor Serie y configura tu ssid y contraseña (como se muestra a continuación). Verifica la IP local en la LCD o en el Monitor Serie. En un dispositivo conectado a la misma red, abre un navegador web y ve a la dirección IP anterior, podrás ver el valor del sensor.

_**Nota: Al visitar el servidor web, se debe añadir un número de puerto (88), como por ejemplo: 172.20.10.2:88.**_

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_SSID_PSW.png)

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Local_IP.png)

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Web_Server.png)

## Recursos

---

* [Código Fuente del Kit de Ambiente Interior Grove](https://github.com/Seeed-Studio/Grove_Indoor_Environment_Demo)

* [Guía de Inicio de Edison](https://communities.intel.com/community/makers/edison/getting-started)

* [Software y Documentación de Intel Edison](https://communities.intel.com/community/makers/edison/documentation)

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
