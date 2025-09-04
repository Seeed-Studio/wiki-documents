---
description: I2C LCD
title: I2C LCD
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/I2C_LCD
last_update:
  date: 1/9/2023
  author: shuxu hu
---

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_WIKI_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_WIKI_1.jpg" alt="pir" width={600} height="auto" /></p>

I2C_LCD es un módulo de pantalla fácil de usar que puede hacer que la visualización sea más sencilla. Usarlo puede reducir la dificultad de fabricación, para que los creadores puedan enfocarse en el núcleo del trabajo.

Desarrollamos la biblioteca de Arduino para I2C_LCD, el usuario solo necesita unas pocas líneas de código para lograr características complejas de visualización de gráficos y texto. Puede reemplazar el monitor serie de Arduino en algunos lugares, puedes obtener información de funcionamiento sin una computadora.

Más que eso, también desarrollamos el software dedicado de conversión de datos de imagen (convertidor de bitmap) que ahora está disponible para soportar plataforma PC de Windows, Linux, Mac OS. A través del software convertidor de bitmap puedes obtener tu imagen favorita mostrada en I2C_LCD, sin la necesidad de programación compleja.

¡I2C_LCD puede proporcionarte una forma muy conveniente de crear. Disfrútalo!

###Versión del Producto

| Versión 	| Cómo comprar	|
|-----------|---------------|
|I2C_LCD (Con cable Grove universal)|[<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/300px-Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/I2C_LCD-(With-universal-Grove-cable)-p-2601.html)|
|I2C_LCD (Con cable Grove de conversión)|[<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/300px-Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/I2C_LCD-(With-universal-Grove-cable)-p-2601.html)|

##Características

* Solo se ocupan 2 pines de Arduino (Usa interfaz I2C).
* Soporta modo I2C estándar (100Kbit/s) y modo I2C rápido (400Kbit/s).
* Compatible con múltiples niveles lógicos de comunicación: 2.8~5VDC.
* Librería de Arduino soportada, usa una línea de código para completar la visualización.
* Integra 7 tamaños de fuentes ASCll, 5 funciones gráficas.
* Proporciona software dedicado de conversión de datos de imagen (Bitmap Converter).
* La mayoría de las operaciones complejas son procesadas por el controlador independiente I2C_LCD, ahorrando recursos del controlador del usuario.
* Soporta función de cursor, puede configurar hasta 16 frecuencias de parpadeo del cursor.
* Soporta ajuste de brillo de retroiluminación de 128 niveles.
* Soporta ajuste de contraste de pantalla de 64 niveles.
* Soporta modificación de dirección del dispositivo.
* Soporta 127 I2C_LCD trabajando en paralelo.
* Al depurar código, puede tomar el lugar del monitor serie para monitorear el estado de ejecución del programa.
* Se proporcionan dos métodos de recuperación anormal: reinicio y restauración de configuración de fábrica.
* Compatible con interfaz Grove e interfaz 4Pin-100mil (bajo el conector Grove).
* Diseño de 4 orificios fijos simétricos para fácil instalación del usuario.
* Apariencia única de estilo chino.


##Plataformas Soportadas


##Función de Interfaz

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_Board.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_Board.jpg" alt="pir" width={600} height="auto" /></p>

##Especificaciones
|Parámetro|Valor|
|---------|-------------|
|Tipo de Pantalla|LCD de doble color|
|Resolución de Pantalla|128*64 Píxeles|
|Área Activa de Pantalla (L*A)| 47.1*26.5mm|
|Tamaño de Píxel Individual|0.33*0.33mm|
|Modo de Comunicación|I2C(100Kbit/s y 400Kbit/s)|
|Controlador|STM8S005KBT6|
|Frecuencia de Operación|16 MHz|
|Peso|20g|

##Características Eléctricas
|Parámetro|Mín.|Típico|Máx.|Unidad|
|---------|------|------|------|------|
|Voltaje de alimentación（5V a GND）|4.5|5|5.5|V
|Voltaje Lógico（SCL/SDA）|2.8|5|5.5|V
|HBM ESD|-|5000|-|V
|Temperatura|-20|25|70|℃


##Ideas de Aplicación

Aquí tienes algunos proyectos divertidos para tu referencia.

|Mostrar Imagen|Reloj Con Calendario|Usado Como Depurador|
|-------|-------|-------|
|<p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/BitmapDisplay_p1.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/ClockWithCalendar_p1.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/debugWithMe_p1.png" alt="pir" width={600} height="auto" /></p>|
| [Hazlo Ahora](https://www.instructables.com/id/Display-Picture-Or-Icon-On-the-fancy-I2CLCD/) | [Hazlo Ahora](https://www.instructables.com/id/Beautiful-and-practical-clock-with-calendar/) | [Hazlo Ahora](https://www.instructables.com/id/Use-I2CLCD-to-Debug-Your-Project-1/ )|
|Humidificador Automático|Juego de la Serpiente|
|-------|-------|
|<p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/AutomaticHumidifier.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/DIY_SnakeGame.png" alt="pir" width={600} height="auto" /></p>|
| [Hazlo Ahora](https://www.instructables.com/id/DIY-a-Simple-Automatic-Humidifier/) | [Hazlo Ahora](https://community.seeedstudio.com/project_detail.html?id=1621)|

##Primeros Pasos

**Paso 1:** Instala la última versión del IDE de Arduino en tu computadora.

[<p><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width={600} height="auto" /></p>](https://www.arduino.cc/en/Main/Software)

**Paso 2:** Descarga e instala la librería I2C_LCD en el IDE de Arduino:

Abre el IDE de Arduino, **haz clic en Sketch -> Include library -> Add .ZIP library**.

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_1.jpg)  -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_1.jpg" alt="pir" width={600} height="auto" /></p>

Busca y selecciona el archivo **I2C_LCD.zip** que acabas de descargar.

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_2.jpg" alt="pir" width={600} height="auto" /></p>

Reinicia el IDE de Arduino.

**Paso 3:** Elige el proyecto de ejemplo que te guste. (Tomamos el proyecto "HelloWorld" como ejemplo aquí.)

**Haz clic en File > Examples > I2C_LCD > HelloWorld**

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_3.jpg" alt="pir" width={600} height="auto" /></p>

**Paso 4:** Conecta el I2C_LCD a tu placa Seeeduino Vx con el cable Grove. Luego conecta la placa Seeeduino Vx a tu computadora.

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_4.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_4.jpg" alt="pir" width={600} height="auto" /></p>

**Paso 5:** Selecciona tu placa y puerto serie.

Selecciona la placa: **Haz clic en Tools > Board > "Arduino Duemilanove or Diecimila"(Seeeduino V3.0 o versión anterior), "Arduino Uno"(Seeeduino Lotus o Seeeduino V4.0)**.

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_5.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_5.jpg" alt="pir" width={600} height="auto" /></p>

Selecciona el COM: **Haz clic en Tools -> Serial Port -> COMX(que esté conectado con tu placa.)**

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_6.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_6.jpg" alt="pir" width={600} height="auto" /></p>

**Paso 6:** Sube el programa y **¡disfrútalo!**

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_7.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_7.jpg" alt="pir" width={600} height="auto" /></p>

**PD:**

1. Para más detalles sobre la instalación de librerías, consulta https://arduino.cc/en/Guide/Liaries.
2. Si encuentras otros problemas durante el uso, consulta el Manual de Usuario para obtener ayuda. Si no puedes resolverlo, contáctanos.

**Soporte técnico:** Joney.s@foxmail.com

##Seguimiento de Versiones
**Hardware I2C_LCD:**

| Revisión 	| Nota de Lanzamiento	| Fecha de Lanzamiento	|
|-----------|---------------|---------------|
|I2C_LCD_v1.2| 1. Agregar punto de prueba de producción. |18 Sep, 2015|
|I2C_LCD_v1.1| 1. Modificar la posición del logo. 2. Modificar la forma de la placa. 3. Modificar la posición del botón. |8 May, 2014|
|I2C_LCD_v1.0| 1. Modificar el cableado del circuito de alimentación. |1 Mar, 2014|
|I2C_LCD_v0.9b| 1. Lanzamiento público inicial. |15 Feb, 2014|

**Biblioteca I2C_LCD:**

| Revisión 	| Nota de Lanzamiento	| Fecha de Lanzamiento	|
|-----------|---------------|---------------|
|I2C_LCD_v1.21| Soporte para placas LinkIt. |21 de agosto, 2016|
|I2C_LCD_v1.20| Reorganizar la interfaz del controlador I2C_LCD, hacerla fácil de trasplantar a cualquier otra placa. |16 de abril, 2016|
|I2C_LCD_v1.12| Modificar el error que no puede mostrar bitmap cuando la coordenada y es mayor que 16.|4 de septiembre, 2015|
|I2C_LCD_v1.11| Modificar el error que '\t' no puede imprimir.|27 de junio, 2015|
|I2C_LCD_v1.10| 1.Agregar función de impresión LCD. 2.Editar ejemplo DeviceAddressConfig.|25 de junio, 2015|
|I2C_LCD_v1.0| Lanzamiento público inicial. |6 de julio, 2014|

##Recursos

Manteniendo actualizada la última versión.

El [repositorio de la biblioteca de Arduino está alojado aquí](https://github.com/SparkingStudio/I2C_LCD_library), si tienes alguna buena idea del código, puedes enviárnosla.

* [Biblioteca I2C_LCD](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD_Library.zip)
* [Manual de Usuario I2C_LCD EN](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD-UserManual_EN.zip)
* [Manual de Usuario I2C_LCD 中文](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD-UserManual_CN.zip)
* [BitmapConverter(ParaWindows)](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.rar)
* [BitmapConverter(ParaMacOS)](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.dmg)
* [BitmapConverter(ParaLinux)](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.tar.gz)
* [I2C_LCD_SourceFile](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD12864_SourceFile.zip)
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
