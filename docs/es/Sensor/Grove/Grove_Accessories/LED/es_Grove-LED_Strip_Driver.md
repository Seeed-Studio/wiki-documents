---
description: Grove - Controlador de Tira LED
title: Grove - Controlador de Tira LED
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-LED_Strip_Driver
last_update:
  date: 1/7/2023
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/Grove-LED_Strip_Driver.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/Grove-LED_Strip_Driver.jpg" alt="pir" width={600} height="auto" /></p>

El Controlador de Tira LED con interfaz Grove de 4 pines proporciona conectividad fácil a tu dispositivo Arduino estándar o Seeed Stalker. Puede ayudarte a controlar la luminancia de una tira LED de un solo color, así como el color y la luminancia de una tira LED RGB a través de Arduino o Seeeduino.

Tiene 2 terminales y 2 interfaces Grove. La alimentación para la tira LED entra a través del terminal de 2 pines. Y los voltajes de control del LED salen a través del terminal de 4 pines. Las 2 interfaces Grove están serigrafiadas respectivamente como "IN" (para entrada de datos de control) y "OUT" (para datos de control compartidos con el siguiente controlador de tira).

Puede manejar una tira LED de 1 a 2 metros de largo con 9 V, mientras que de 1 a 5 metros de largo con 12 V. El controlador en conjunto con las tiras LED coloridas puede añadir un efecto maravilloso para usos interiores o exteriores.

*   Grove - Controlador de Tira LED V1.1：
 1. Se usa SI5904 para traducción de nivel.
 2. 78M05 es un Regulador de Voltaje, el voltaje de salida es 5V.

*   Grove - Controlador de Tira LED V1.2:

 1. reemplazar SI5904 con dos 2N7002.
 2. El encapsulado de los capacitores de 100nF es 0603, no 0402.
 3. Las resistencias discretas de 3.3K cambian a exclusión.

:::note
    La E/S de reloj/datos requiere nivel lógico de 5V.
:::
<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-LED-Strip-Driver-p-1197.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-LED-Strip-Driver-p-1197.html)
##   Especificaciones
---
<table >
<tr>
<td width="150"> **Fuente de alimentación**</td>
<td width="150"> **Tira LED**</td>
<td width="100"> **Color LED**</td>
<td width="100"> **Longitud(m)**</td>
<td width="150"> **Corriente máx.(mA)**</td>
</tr>
<tr>
<td rowspan="5"> 12V/5A</td>
<td rowspan="5"> Tira LED RGB</td>
<td rowspan="5"> Blanco</td>
<td> 1</td>
<td> 1032</td>
</tr>
<tr>
<td> 2</td>
<td> 1822</td>
</tr>
<tr>
<td> 3</td>
<td> 2430</td>
</tr>
<tr>
<td> 4</td>
<td> 2800</td>
</tr>
<tr>
<td> 5</td>
<td> 3000</td>
</tr>
<tr>
<td rowspan="2"> 9V/1A</td>
<td rowspan="2"> Tira LED RGB</td>
<td rowspan="2"> Blanco</td>
<td> 1</td>
<td> 365</td>
</tr>
<tr>
<td> 2</td>
<td> 627</td>
</tr>
</table>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_Interface3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_Interface3.jpg" alt="pir" width={600} height="auto" /></p>

 **Fuente de Alimentación de 12V** – Terminal de tornillo para fuente de alimentación de 9~12v.

 **Entrada Encadenable** – Conectada al Grove - Base Shield] o a la salida encadenable de otro controlador. Definición de pines: **CLK DIN NC GND**.

 **Salida Encadenable** – Conectada a la entrada encadenable de otro controlador. Definición de pines: **CLK DOUT NC GND**

 **Interfaz de tira LED** – Terminales de tornillo para tira LED. Definición de pines: **+ B R G**

**Nota**: VCC de Arduino/Seeeduino no está conectado a la interfaz Grove.

##   Demostración
---
###   Instalación de hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step1.jpg" alt="pir" width={600} height="auto" /></p>

1.Conecta el conector Grove marcado "IN" en el Controlador de Tira LED y el puerto digital 2 en el Base Shield con un cable Grove.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step2.jpg" alt="pir" width={600} height="auto" /></p>

2.Conecta la tira LED al terminal de 4 pines del Grove - Controlador de Tira LED. Asegúrate de que el cable marcado **"+12v"** de la tira LED vaya al asiento marcado **"+"** del terminal, y **"B"** a **"B"**, **"R"** a **"R"** y **"G"** a **"G"**. La mayoría de las tiras LED que vendemos tienen 4 cables como en la imagen anterior excepto [White LED Flexi-Strip - 60 LED - 1m](https://www.seeedstudio.com/depot/white-led-flexistrip-60-led1m-p-1122.html?cPath=207). Si este es el tipo que vas a usar, los pasos de conexión pueden ser un poco diferentes. Aún conecta el cable marcado **"+12V"** al asiento marcado **"+"**, pero el otro cable puede ir a cualquier asiento de **"B"**, **"R"** y **"G"**. Y ejecuta el código de demostración llamado **"DemoForWhiteLEDStrip"** en su lugar en los siguientes pasos de software.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step3.jpg" alt="pir" width={600} height="auto" /></p>

3.Conecta los cables de alimentación de 12V DC o 9V DC al terminal de 2 pines.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step4.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step4.jpg" alt="pir" width={600} height="auto" /></p>

4.En casos donde quieras utilizar la función de cascada, prepara primero otro controlador y tira. Luego usa un cable Grove para conectar el conector Grove marcado "out" en la primera placa y el conector Grove marcado "IN" en la segunda placa. Listo. Dos tiras brillarán en sincronía ahora.

###   Programación de software

1.Descarga [la Librería del Controlador de Tira LED](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LEDStripDriver_library.zip). Descomprime e impórtala a las Librerías de Arduino-1.0: ..\arduino-1.0\libraries.

2.Sube el código de demostración SingleLEDStrip si solo usas un controlador único.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/SingleLEDStripDemo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/SingleLEDStripDemo.jpg" alt="pir" width={600} height="auto" /></p>

3.En caso de dos tiras LED, sube el código de demostración DualLEDStrip en su lugar.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/DualLEDStripDemo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/DualLEDStripDemo.jpg" alt="pir" width={600} height="auto" /></p>

# Archivos eagle del controlador de tira LED V1.1
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_driver_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Archivos eagle del controlador de tira LED V1.2
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_Driver_eagle_file_V1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##   Recursos
---
*   [Archivos eagle del controlador de tira LED V1.1](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_driver_eagle_files.zip)

*   [Archivos eagle del controlador de tira LED V1.2](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_Driver_eagle_file_V1.2.zip)

*   [Esquemático V1.1 en PDF](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_driver.pdf)

*   [Esquemático V1.2 en PDF](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/Grove-LED_Strip_driver_V1.2.pdf)

*   [Hoja de datos P9813](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/P9813_datasheet.pdf)

*   [Hoja de datos N-MOSFET DMN3016LK3](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/N-MOSFET_DMN3016LK3_Datasheet.pdf)

*   [Biblioteca del controlador de tira LED](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LEDStripDriver_library.zip)

*   [Biblioteca Suli](https://github.com/Seeed-Studio/LED_Strip_Suli)

## Soporte técnico y discusión de productos
¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
