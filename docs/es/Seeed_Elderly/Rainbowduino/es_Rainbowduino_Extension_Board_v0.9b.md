---
description: Placa de Extensión Rainbowduino v0.9b
title: Placa de Extensión Rainbowduino v0.9b
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Rainbowduino_Extension_Board_v0.9b
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Rainbowduino_Extension_Board_v0.9b/img/Rainbowshield.jpg)

El Shield de Extensión Rainbowduino es una placa de conexión de los 192 canales separados de control de LED de Rainbowduino. Los canales están divididos en tres matrices de 8*8: rojo, verde y azul para un control más fácil, está diseñado para facilitar proyectos LED personalizados basados en Rainbowduino.

<font color="red" size="3">NOTA: Para controlar la Placa de Extensión Rainbowduino, también puede necesitar un [Rainbowduino](https://www.seeedstudio.com/depot/rainbowduino-led-driver-platform-atmega-328-p-371.html?cPath=132_133) .</font>

**Modelo: [INT111A4M](https://www.seeedstudio.com/depot/rainbowduino-extension-board-v09b-p-692.html?cPath=175_177)**


##   Características  

*   60.33mm×180.61mm(3 veces el tamaño de Rainbowduino)

*   Puede controlar 192 LEDs separados

*   No se necesitan conexiones adicionales

*   Conexión directa en Rainbowduino

*   Matriz LED de 8×24

*   controla LEDs externos

##   Ideas de Aplicación  

*   diseña tu propio patrón

*   crea mensajes desplazables

##   Precauciones  

Recuerda que el positivo del LED debe estar conectado al pad octagonal. El pin cuadrado de la placa de extensión debe conectarse a la primera ranura de pin. Por el contrario, los LEDs no brillarán, pero tampoco se dañarán.

##   Uso  

El Shield de Extensión Rainbowduino es la placa de conexión de Rainbowduino, puede controlar fácilmente 192(8×24) LEDs. También puede soldar LEDs fuera de la placa. El LED está hacia arriba, y su parte posterior es el lugar para soldar los pines.

###   Instalación de Hardware  

*   1.soldar cabeceras de pines y LED correctamente
*   2.conectar en Rainbowduino

###   Programación  

El código Demo para detalles está enlazado **aquí**, por favor consúltalo si es necesario.

###   Ejemplo  

El Shield de Extensión Rainbowduino se usa para encender los LEDs en diferentes patrones. El código a continuación es capaz de controlar G10 y R31 para brillar gradualmente como ejemplo. Puedes cambiar el estilo simplemente modificando el valor del parámetro del array dots_color. El primer elemento puede elegir la matriz en diferente color; los últimos dos parámetros se usan para definir cuál necesita brillar en valor de fila y columna.
```
void _main(void)
{
  _init();
  unsigned char i=0;
  for(;;)
  {
    dots_color[0][0][0]=i<<4;//high 4bit G8 dot
    dots_color[1][0][3]=i&0x0f;//low 4bit R1 dot
    i++;
    delay(100);
  }
}
```

El efecto es:

![](https://files.seeedstudio.com/wiki/Rainbowduino_Extension_Board_v0.9b/img/Rainbowduino-extension-exam1.jpg)

En realidad se usa 1 byte para controlar dos LEDs, la teoría en detalle es la siguiente:
```
unsigned char dots_color[3][8][4]=
{
//=====================================================
  {//green debug
    {0x00,0x00,0x00,0x00},//G8,G7,G6,G5,G4,G3,G2,G1          every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//G16,G15,G14,G13,G12,G11,G10,G9   every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//G24,G23,G22,G21,G20,G19,G18,G17  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//G32,G31,G30,G29,G28,G27,G26,G25  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//G40,G39,G38,G37,G36,G35,G34,G33  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//G48,G47,G46,G45,G44,G43,G42,G41  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//G56,G55,G54,G53,G52,G51,G50,G49  every dot has 4 bit color
    {0x00,0x00,0x00,0x00} //G64,G63,G62,G61,G60,G59,G58,G57  every dot has 4 bit color
},
//=======================================================
  {//red debug
    {0x00,0x00,0x00,0x00},//R8,R7,R6,R5,R4,R3,R2,R1          every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//R16,R15,R14,R13,R12,R11,R10,R9   every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//R24,R23,R22,R21,R20,R19,R18,R17  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//R32,R31,R30,R29,R28,R27,R26,R25  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//R40,R39,R38,R37,R36,R35,R34,R33  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//R48,R47,R46,R45,R44,R43,R42,R41  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//R56,R55,R54,R53,R52,R51,R50,R49  every dot has 4 bit color
    {0x00,0x00,0x00,0x00} //R64,R63,R62,R61,R60,R59,R58,R57  every dot has 4 bit color
  },
//======================================================
  {//blue debug
    {0x00,0x00,0x00,0x00},//B8,B7,B6,B5,B4,B3,B2,B1          every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//B16,B15,B14,B13,B12,B11,B10,B9   every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//B24,B23,B22,B21,B20,B19,B18,B17  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//B32,B31,B30,B29,B28,B27,B26,B25  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//B40,B39,B38,B37,B36,B35,B34,B33  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//B48,B47,B46,B45,B44,B43,B42,B41  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//B56,B55,B54,B53,B52,B51,B50,B49  every dot has 4 bit color
    {0x00,0x00,0x00,0x00} //B64,B63,B62,B61,B60,B59,B58,B57  every dot has 4 bit color
},
};
```

Otra imagen de efecto mostrada como el RGB de caracteres aquí, y el código para detalles está enlazado en la página del depósito.

![](https://files.seeedstudio.com/wiki/Rainbowduino_Extension_Board_v0.9b/img/Rainbowduino-extension-exam2.jpg)

##   Recursos  

- **[Hoja de datos]** [Hoja de datos](https://www.seeedstudio.com/depot/datasheet/Rainbowduino_Extension_Shield_v0.9b.pdf)

##   Soporte  

Si tienes preguntas u otras mejores ideas de diseño, puedes ir a nuestro [foro](https://www.seeedstudio.com/forum) o **desear** discutir.

##   Seguimiento de versiones  

<table>
<tr>
<th> Revisión</th>
<th> Descripciones</th>
<th> Lanzamiento</th>
</tr>
<tr>
<td width="300px"> v0.9b</td>
<td width="500px"> Lanzamiento público inicial</td>
<td width="200px"> 23 de septiembre, 2010</td>
</tr>
</table>

##   Idea Adicional  

La Idea Adicional es el lugar para escribir las ideas de tu proyecto sobre este producto, o otros usos que hayas encontrado. O puedes escribirlos en la página de Proyectos.

##   Cómo comprar  

Haz clic aquí para comprar: [https://www.seeedstudio.com/depot/rainbowduino-extension-board-v09b-p-692.html?cPath=175_177](https://www.seeedstudio.com/depot/rainbowduino-extension-board-v09b-p-692.html?cPath=175_177).

##   Ver También  

LEDs para la placa de extensión, por favor revisa aquí: **https://www.seeedstudio.com/depot/optoelectronics-discrete-led-c-93_94.html**

##   Licencias  

Esta documentación está licenciada bajo Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) El código fuente y las librerías están licenciados bajo [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulta los archivos de código fuente para más detalles.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
