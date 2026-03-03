---
title: Grove - Adaptador PS/2
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-PS_2_Adapter/
slug: /es/Grove-PS_2_Adapter
last_update:
  date: 01/09/2022
  author: gunengyu
---
 ![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/PS221_sensor.jpg)

El Adaptador PS/2 te permite conectar un dispositivo PS2 a las placas principales Arduino/Seeeduino. Con la ayuda de la biblioteca PS2Keyboard/PS2MouseN, puedes crear el puente entre estos dispositivos PS2 y Arduino/Seeeduino.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-PS%262-Adapter-p-966.html)

## Características

---

* Interfaz Grove estándar

* Interfaz PS/2 estándar

## Especificaciones

---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Elemento</th>
<th scope="col"> Mín</th>
<th scope="col"> Típico</th>
<th scope="col"> Máx</th>
<th scope="col"> Unidad</th>
</tr>
<tr>
<th scope="row"> Voltaje</th>
<td> 4.75</td>
<td> 5.0</td>
<td> 5.25</td>
<td> V</td>
</tr>
<tr>
<th scope="row"> Corriente</th>
<td colspan="3"> 100</td>
<td> mA</td>
</tr>
<tr>
<th scope="row"> Modo de Comunicación</th>
<td colspan="3"> Protocolo de Comunicación PS/2</td>
<td> /</td>
</tr>
<tr>
<th scope="row"> Frecuencia de Reloj</th>
<td> 10</td>
<td> 15</td>
<td> 33</td>
<td> KHZ</td>
</tr>
</table>

## Ideas de Aplicación

---

* Entrada de ratón y teclado PS/2

## Uso

---
El conector PS/2 es un conector Mini-DIN de 6 pines utilizado para conectar teclado y ratón a un sistema informático compatible con PC. Los diseños PS/2 en las interfaces de teclado y ratón son eléctricamente similares y emplean el mismo protocolo de comunicación. Hoy en día, este conector ha sido reemplazado por USB, pero como Arduino/Seeeduino, también es una buena opción usar el conector PS/2 ya que es más conveniente y económico cuando necesitas un ratón o teclado.

Un conector PS/2 tiene 6 pines como puedes ver en el siguiente diagrama. El pin 1 y el pin 6 no están conectados. El pin 3 es para tierra, y el pin 4 es para alimentación. Los otros 2 pines son para reloj y datos.

 ![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/MiniDIN-6_Connector.svg.png)

<table  cellspacing="0" width="702">
<tr>
<th scope="col"> Pin</th>
<th scope="col"> Nombre</th>
<th scope="col"> Función</th>
<th scope="col"> Corresponde a la Interfaz Grove</th>
</tr>
<tr>
<th scope="row"> 1</th>
<td> +DATA</td>
<td> Datos</td>
<td> DATA</td>
</tr>
<tr>
<th scope="row"> 2</th>
<td> NC</td>
<td> Reservado</td>
<td> -</td>
</tr>
<tr>
<th scope="row"> 3</th>
<td> GND</td>
<td> Línea GND</td>
<td> GND</td>
</tr>
<tr>
<th scope="row"> 4</th>
<td> Vcc</td>
<td> +5DCV</td>
<td> VCC</td>
</tr>
<tr>
<th scope="row"> 5</th>
<td> +CLK</td>
<td> Frecuencia de reloj</td>
<td> CLK</td>
</tr>
<tr>
<th scope="row"> 6</th>
<td> NC</td>
<td> Reservado</td>
<td> -</td>
</tr>
</table>

1.Conecta el ratón o teclado PS/2 al Adaptador Grove-PS/2, y luego conecta Grove al D5/D6 del [Grove - Base Shield](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132_134). Puedes cambiar el puerto digital como desees. Pero, no olvides cambiar el número de puerto en la definición del código de demostración al mismo tiempo.

:::note
     El pin 5 es el pin de datos del ratón, el pin 6 es el pin de reloj.
:::
 2.Conecta el Base Shield al Arduino/Seeeduino y conecta el Arduino/Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/PS2_sensorss.jpg)

3.Descarga la [librería PS2 Adapter](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/PS2_Adapter_Library.zip), descomprímela y colócala en el archivo de librerías del IDE de Arduino siguiendo la ruta: ..\arduino-1.0\libraries.

4.Reinicia el IDE de Arduino, abre uno de los códigos de demostración, por ejemplo ps2_mouse directamente siguiendo la ruta:File -&gt; Example -&gt;PS2_Adapter-&gt;ps2_kbd.

```
/*
 * an Arduino sketch to interface with a ps/2 keyboard.
 * Also uses serial protocol to talk back to the host
 * and report what it finds. Used the ps2 library.
 */

#include <ps2.h>

/*
 * Pin 5 is the ps2 data pin, pin 6 is the clock pin
 * Feel free to use whatever pins are convenient.
 */

PS2 kbd(6, 5);

void kbd_init()
{
    char ack;

    kbd.write(0xff);  // send reset code
    ack = kbd.read();  // byte, kbd does self test
    ack = kbd.read();  // another ack when self test is done
}

void setup()
{
    Serial.begin(9600);
    kbd_init();
}

/*
 * get a keycode from the kbd and report it back to the
 * host via the serial line.
 */
void loop()
{
    unsigned char code;

    for (;;) { /* ever */
    /* read a keycode */
        code = kbd.read();
    /* send the data back up */
        Serial.println(code, HEX);
        // delay(20);  /* twiddle */
    }
}
```

Por favor haz clic [aquí](https://www.seeedstudio.com/wiki/Upload_Code) si no sabes cómo cargar código.
 Después de cargar el firmware al MCU, puedes verificar el estado a través de un Monitor Serie (velocidad de baudios 9600):

 ![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/Result.jpg)

 Los valores de salida X, Y cambian correspondientemente mientras el ratón se mueve.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/Grove-PS2_Adapter_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Grove - PS/2 Adapter Archivo Eagle](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/Grove-PS2_Adapter_eagle_file.zip)

* [Biblioteca PS2 Adapter](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/PS2_Adapter_Library.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
