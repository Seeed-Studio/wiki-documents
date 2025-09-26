---
description: Edison_4WD_Auto_Robotic_Platform
title: Edison_4WD_Auto_Robotic_Platform 
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Edison_4WD_Auto_Robotic_Platform
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform12.jpg)

La Plataforma Robótica Automática 4WD es una unidad móvil potente con el kit Intel Edison Arduino, para controlar esta plataforma tienes que usar un teléfono inteligente o una computadora con capacidad wifi para conectarse a su punto de acceso wifi, abrir un navegador web e ingresar la dirección [http://192.168.42.1:8000](http://192.168.42.1:8000) entonces aparece un panel de operación. Este es un proyecto primario si eres un maker y tienes la habilidad de hackear esta plataforma, bienvenido a hacer una remodelación más fuerte.

##  Comenzando

###  Lista de Partes

|Partes|Especificación|Material|Cantidad|
|-----|----|-----|-----|
|Soporte 1|200 * 35 * 20mm * 3.0mm|Aluminio|2|
|Soporte 2|135 * 35 * 20mm * 3.0mm|Aluminio|2|
|Estructura de Unión Angular|29 * 12 * 10mm * 2.0mm|Metal|4|
|Placa Superior|200 * 132 * 1.5mm|Aluminio|1|
|Placa Inferior|199 * 129 * 2.0mm|Acrílico|1|
|Fijador de Batería|67 * 15 * 2.0mm|Acrílico|2|
|Placa Superior|184 * 132 * 2.0mm|Acrílico|1|
|Rueda|Ф85mm * W31mm|Plástico y Goma|4|
|Acoplador de Eje|para eje Ф4mm|Metal|4|
|Motor DC|[Especificación](https://seeeddoc.github.io/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_Spec.pdf)|/|2|
|Motor DC (Encoder Incluido)|[Especificación](https://seeeddoc.github.io/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_with_Encoder_Spec.pdf)|/|2|
|Separador de Distancia|M3.0 * H45+6.0mm|Metal|4|
|Separador de Distancia|M3 × 10mm|Metal|4|
|Separador de Distancia|M2 * 10mm|Metal|3|
|Tornillo de Cabeza Avellanada con Hexágono Interior|M4.0 * H8.0mm|Metal|16|
|Tornillo de Cabeza Cilíndrica con Ranura Cruzada|M4.0 * H8.0mm|Metal|4|
|Tornillo de Cabeza Cilíndrica con Ranura Cruzada|M3 * 35mm|Metal|4|
|Tornillo de Cabeza Cilíndrica con Ranura Cruzada|M3 * 8mm|Metal|30|
|Tornillo de Cabeza Cilíndrica con Ranura Cruzada con Arandela|M3.0 * H6.0mm|Metal|8|
|Ensambles de Tornillo, Arandela de Resorte y Arandela Plana|M2 * 8mm|Metal|6|
|Tuerca Hexagonal|M3|Metal|8|
|Arandela de Resorte|M4|Metal|4|
|Arandela Plana|M3 * 7 * 0.5|Metal|4|
|Destornillador|/|Metal y Plástico|1|
|Llave de Cabeza Hexagonal|/|Metal|1|
|[Grove - Controlador de Motor I2C](https://www.seeedstudio.com/depot/Grove-I2C-Motor-Driver-p-907.html)|/|PCB|1|
|[Base Shield V2](https://www.seeedstudio.com/depot/base-shield-v13-p-1378.html?cPath=132_134)|/|PCB|1|
|[Grove - Cable Universal de 4 Pines con Hebilla de 20cm](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack-p-936.html)|/|Cable|1|
|Adaptador Paralelo Dean|Enchufe|/|1|
|Macho de Cable de Alimentación Dean|/|Cable|1|
|Cable de Alimentación Dean a DC|/|Cable|1|
|Cable de Alimentación TRX a Dean|/|Cable|1|
|Brida para Cables|3 * 60mm|Plástico|3|
|Instrucciones de Ensamblaje|A4|Papel de Copia|1|
  
###  Cómo Ensamblarlo

[Instrucciones de Ensamblaje.pdf](https://seeeddoc.github.io/Edison_4WD_Auto_Robotic_Platform/res/Assembly_Instruction_02.pdf)

**1.Ensamblar el cuerpo principal.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_01.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_02.PNG)

**2.Conectar los cables**

1) A continuación están las partes con cables que deben conectarse, necesitas un destornillador de cabeza ranurada de 2.5mm para atornillar el controlador del motor.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble01.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble17.JPG)

2) Pega los disipadores de calor de aluminio a los chips en el controlador del motor, y ensambla la placa del medio.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble12.JPG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble18.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble19.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble14.JPG)

3) Conecta el controlador del motor, los cables negros del grupo de motores se conectan a "M1-" "M2-" y los rojos se conectan a "M1+" "M2+", conecta el cable de alimentación, el cable negro a "GND", el rojo a "VS".

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble04.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble16.png)

4) Ensambla el grupo de motores en el cuerpo principal, el motor en el mismo grupo debe ensamblarse al mismo lado. Usa un cable de nylon para atar los cables, luego conecta el cable grove.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble05.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_03.PNG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble06.jpg)

5) Coloca la placa del medio, el cable de alimentación y el cable grove deben pasar por el agujero derecho.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble07.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble08.jpg)

6) Conecta el conector de alimentación de 1 a 2, el cable adaptador de la batería y el cable de alimentación de la placa arduino, el cable grove se conecta al pin A0 del Base Shield.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble09.jpg)

7) Conecta cuidadosamente el conector de la batería para encender, prueba si se hizo correctamente ahora, si no se enciende ningún led debes verificar el problema.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble10.JPG)

8) Conecta los cables USB para probar el software.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble11.JPG)

**3.Continuar ensamblando**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_03.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_04.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_05.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_06.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_07.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_08.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_09.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_10.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_11.PNG)

###  Entorno de Desarrollo

Aunque el Edison Arduino puede ser programado por el IDE de Arduino, para un desarrollo más robusto nos adentramos en el sistema Linux para hacer desarrollo de bajo nivel. El recurso más importante es la biblioteca mraa proporcionada por Intel, las cosas no son tan idealizadas ya que hay dificultades en nuestro desarrollo temprano, para construir un entorno de desarrollo conveniente copiamos la partición de rootfs del sistema de archivos de Linux en el cual ya hemos configurado todos los recursos necesarios y construido el proyecto de la plataforma 4WD. Lo único que debes hacer para que esta plataforma funcione es flashear un nuevo firmware en Edison. Si quieres saber qué hemos hecho en el sistema Linux y cómo hacer tu propio proyecto, consulta el repositorio de GitHub:

[https://github.com/Seeed-Studio/Edison_WiFi_Car](https://github.com/Seeed-Studio/Edison_WiFi_Car)

####  Para usuarios de Windows

#####  Instalar herramientas

Sigue el **sitio web oficial de Edison getting started** para instalar los controladores requeridos y el emulador de terminal PuTTy.

Descarga [dfu-util - Device Firmware Upgrade Utilities](http://dfu-util.sourceforge.net/releases/dfu-util-0.8-binaries.tar.xz) y extrae el archivo xz a "C:\" o cualquier otro directorio.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform22.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform21.png)

**Añadir Variables de Entorno**

Haz clic derecho en Este PC  &gt;  Configuración avanzada del sistema  &gt;  Variables de entorno  &gt; copia la ruta de dfu-util.exe para capturar la variable de entorno "Path".

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform22.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform23.png)

#####  Flashear nuevo firmware

**1.Descargar y descomprimir**

[Descargar firmware personalizado desde seeed wiki](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/Edison-image-rel1-maint-rel1-ww42-14-for-wificar.zip)

[Descargar firmware personalizado desde onedrive](https://onedrive.live.com/?cid=b24d52d93861663f&amp;id=B24D52D93861663F%212178&amp;ithint=file,7z&amp;authkey=!AIH0ajk2jCZzTFE)


**2.Usar PuTTy**

Sigue la Guía Oficial de Inicio de Edison para iniciar sesión en Edison con PuTTy.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform25.png)

**3.Flashear firmware**

Sigue los pasos a continuación.

**Paso 1. Haz doble clic en flashall.bat**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform26.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform27.png)

**Paso 2. Ve a PuTTy e ingresa el comando reboot o presiona el botón RESET en la placa Edison Arduino.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform28.png)

**Paso 3. Flasheando firmware**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform29.png)

**Paso 4. Edison se reinicia y el servicio Wi-Fi Car se inicia.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform30.png)

**Paso 5: Reiniciar la alimentación**

Desconecta y reconecta la batería.

####  Para usuarios de Mac

Consulta [sitio web oficial de Intel Edison](https://communities.intel.com/docs/DOC-23193)  "Alternate Flashing Method".

####  Para usuarios de Linux

**1.Descargar imagen personalizada**

<pre>
&gt;&gt;wget https://www.seeedstudio.com/wiki/images/a/a6/Edison-image-rel1-maint-rel1-ww42-14-for-wificar.zip
&gt;&gt;unzip edison-image-rel1-maint-rel1-ww42-14-for-wificar.zip
&gt;&gt;7z x edison-image-rel1-maint-rel1-ww42-14-for-wificar.7z
</pre>

**2.Flashear imagen**

1)Instalar dfu-util

<pre>
sudo apt-get install dfu-util
</pre>

2)Verificar qué dispositivo es para Edison:

<pre>
&gt;&gt;ls /dev/ttyUSB*
</pre>

3)Abrir terminal serie

<pre>
&gt;&gt;sudo screen /dev/ttyUSB0 115200
</pre>

4)Ejecutar flashall.sh

<pre>
&gt;&gt;cd edison-image-rel1-maint-rel1-ww42-14-for-car
&gt;&gt;sudo ./flashall.sh
</pre>

5)Ir a Edison y escribir reboot

<pre>
&gt;&gt;reboot
</pre>

###  Aplicación

Ahora usa un teléfono inteligente o computadora para buscar el punto de acceso WiFi, el SSID fue nombrado con números de serie únicos por el ID S/N en cada placa principal Edison como EDIOSN-FZED445001UCV501, y la contraseña es 12345678.
Después de conectarte al WiFi, abre cualquier navegador web y visita **http://192.168.42.1:8000** verás un panel de control con el cual controlar la Plataforma 4WD.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform15.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform13.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform14.png)

[Wi-Fi car Android apk](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/WiFiCarcn.xiongyihui.wificar2.apk.zip)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform33.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform34.png)

###  Cómo programarlo

Navega a /usr/share/car y verás el proyecto, estos archivos son:

<pre>
&gt;&gt;cd /usr/share/wificar
&gt;&gt;ls
</pre>

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform31.png)

<table cellspacing="0">
<tr>
<th scope="col">car.py</th>
<td>Clase de acción del coche</td>
</tr>
<tr>
<th scope="col">car_httpd.py</th>
<td>Proceso del servidor web</td>
</tr>
<tr>
<th scope="col">i2c_motor.py</th>
<td>El controlador del motor i2c</td>
</tr>
<tr>
<th scope="col">softi2c.py</th>
<td>El controlador softi2c para Edison</td>
</tr>
<tr>
<th scope="col">www</th>
<td>Archivo fuente del servidor web</td>
</tr>
</table>

###   Mejora - dos Controladores de Motor

**1. El cableado.**

Aquí necesitarás un pelacables, un soldador y tijeras para cortar los cables de extensión de los motores, y usar uno de ellos para hacer un nuevo cable de alimentación de motor de uno a dos.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring09.JPG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring02.JPG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring10.JPG)

**2. Ensamblar**

**Paso 1. Conectar los motores.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring01.JPG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble16.png)

**Paso 2. Ensamblar el motor y el controlador de motor, presta atención a las flechas amarillas, dos controladores de motor se atornillan con solo dos tornillos.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring13.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring11.png)

**Paso 3. Conectar el cable de alimentación y dos cables grove.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring06.JPG)

**Paso 4. Colocar la placa intermedia.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring07.JPG)

**Paso 5. Conectar los cables grove a D4(D4,D5) D8(D8,D9) sin definición especial, probar la conexión conectando la batería.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring08.JPG)

**3. Modificación del software**

Ve al terminal virtual, abre car.py y haz el siguiente cambio.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring14.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring15.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring16.png)

##  FAQ

1. Si has conectado el WiFi del Edison y se mostró el panel de control pero no puedes controlar el rover.

R: Intenta reiniciar la alimentación.

2. Los dos puertos USB en la placa Edison Arduino fueron bloqueados por una rueda, ¿qué hacer para conectar cables USB?

R: Tienes que quitar la rueda cuando quieras conectar cables USB. Si solo quieres acceder al sistema linux puedes conectar su AP WiFi y acceder vía herramientas SSH, PuTTy es capaz de SSH.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform33.jpg)

3. He ejecutado el servidor del coche Wi-Fi y el teléfono inteligente recibió el panel de control pero no puede controlar el rover. ¿Por qué?

R: El Controlador de Motor i2c tiene un error que si un byte completo de órdenes enviadas fue interrumpido, el controlador de motor perderá el control. Tienes que reiniciar la placa controladora presionando el botón de reinicio en ella.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform32.png)

##  Soporte

*   [github-Edison_WiFi_Car](https://github.com/Seeed-Studio/Edison_WiFi_Car)

*   [El sitio web oficial de Intel Edison](https://www.intel.com/content/www/us/en/do-it-yourself/edison.html)

*   [Edison - Descargas de Software](https://communities.intel.com/docs/DOC-23242)

*   [Foro oficial de Intel](https://communities.intel.com/community/makers/edison/forums)

*   [intel-iot-devkit/mraa](https://github.com/intel-iot-devkit/mraa)

*   [Primeros pasos con Intel Edison](https://communities.intel.com/docs/DOC-23147)

*   [Flasheo de Edison (cableado) - Windows (Mac, Linux)](https://communities.intel.com/docs/DOC-23192)

*   [Especificaciones del Motor DC de la Plataforma Robótica Automática 4WD Edison](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_Spec.pdf)

*   [Especificaciones del Motor DC con Encoder de la Plataforma Robótica Automática 4WD Edison](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_with_Encoder_Spec.pdf)

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
