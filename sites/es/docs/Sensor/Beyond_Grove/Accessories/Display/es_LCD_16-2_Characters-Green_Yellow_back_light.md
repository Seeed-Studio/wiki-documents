---
title: LCD_16-2_Characters-Green_Yellow_back_light
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/LCD_8-2_Characters-Blue_back_light/
slug: /es/LCD_16-2_Characters-Green_Yellow_back_light
last_update:
  date: 02/03/2022
  author: matthew
---

![](http://bz.seeedstudio.com/depot/images/product/lcd1621n.jpg)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/lcd-162-characters-green-yellow-back-light-p-62.html?cPath=163_164)

## Precauciones

---

1. El panel LCD está hecho de vidrio. Cualquier impacto mecánico (ej. caída desde un lugar alto) dañará el módulo LCD.

2. No aplique fuerza excesiva en la superficie de la pantalla, lo cual puede causar que el color de la pantalla cambie anormalmente.

3. El polarizador en el LCD se raya fácilmente. Si es posible, no retire la película protectora del LCD hasta el último paso de la instalación.

4. Nunca intente desarmar o retrabajar el módulo LCD.

5. Solo limpie el LCD con alcohol isopropílico o alcohol etílico. Otros solventes (ej. agua) pueden dañar el LCD.

6. Al montar el módulo LCD, asegúrese de que esté libre de torsión, deformación y distorsión.

7. Asegúrese de proporcionar suficiente espacio (con amortiguación) entre la carcasa y el panel LCD para prevenir que se aplique fuerza externa sobre él, o puede causar daño al LCD o degradar el resultado de la pantalla.

8. Solo sostenga el módulo LCD por sus lados. Nunca sostenga el módulo LCD aplicando fuerza en el sellado térmico o TAB.

9. Nunca aplique fuerza a los componentes del módulo LCD. Puede causar daño invisible o degradación de la confiabilidad.

10. El módulo LCD puede dañarse fácilmente por electricidad estática. Tenga cuidado de mantener un ambiente de trabajo antiestático óptimo para proteger el módulo LCD.

11. Al despegar la película protectora del LCD, la carga estática puede causar un patrón de pantalla anormal. Es normal y volverá a la normalidad en poco tiempo.

12. Tenga cuidado y evite lastimarse con el borde afilado del panel LCD.

13. Nunca opere el módulo LCD excediendo las especificaciones máximas absolutas.

14. Mantenga la línea de señal lo más corta posible para prevenir que señales ruidosas se apliquen al módulo LCD.

15. Nunca aplique señal al módulo LCD sin suministro de energía.

16. El chip IC (ej. TAB o COG) es sensible a la luz. Un ambiente de iluminación fuerte podría posiblemente causar mal funcionamiento. Se recomienda una carcasa con estructura de sellado de luz.

17. La confiabilidad del módulo LCD puede reducirse por choque térmico.

18. Al almacenar el módulo LCD, evite la exposición a la luz solar directa, alta humedad, alta temperatura o baja temperatura. Pueden dañar o degradar el módulo LCD.

## Esquemático

---

### Diagrama de Bloques

![](https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/LCD-wbl-block-162.JPG)

## Especificaciones

---

* Modo de Pantalla LCD: STN, Positivo, Transflectivo

* Color de Pantalla: Azul Profundo/ Verde Amarillo

* Ángulo de Visión: 6H

* Método de Manejo: 1/16 duty, 1/5 bias

* Luz de Fondo: Luz de fondo LED Verde-Amarilla

* Dimensión del Contorno: 80*36*15.8 MAX

:::note

1. El tono de color puede cambiar ligeramente por Temperatura y Condición de Manejo.<br />
2. El Color se define como el color inactivo/de fondo
:::

### Características AC

V<sub>ss</sub>=0V,V<sub>DD</sub>=5V,T<sub>OP</sub>=25℃

<table>
<tr>
<th>Elemento</th>
<th>Símbolo</th>
<th>MIN</th>
<th>TYP</th>
<th>MAX</th>
<th>Unidad</th>
</tr>
<tr>
<td width="200px">Tiempo de ciclo E</td>
<td width="100px">tc</td>
<td width="100px">1500</td>
<td width="100px">-</td>
<td width="100px">-</td>
<td width="100px">ns</td>
</tr>
<tr>
<td>Ancho de nivel alto E</td>
<td>twh</td>
<td>700</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>Ancho de nivel bajo E</td>
<td>twl</td>
<td>700</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>Tiempo de subida E</td>
<td>tr</td>
<td>-</td>
<td>-</td>
<td>18</td>
<td>ns</td>
</tr>
<tr>
<td>Tiempo de bajada E</td>
<td>tf</td>
<td>-</td>
<td>-</td>
<td>18</td>
<td>ns</td>
</tr>
<tr>
<td>Tiempo de configuración de dirección</td>
<td>tas</td>
<td>5</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>Tiempo de configuración de dirección</td>
<td>tasu</td>
<td>210</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>Tiempo de retención de dirección</td>
<td>tah</td>
<td>15</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>Tiempo de configuración de datos</td>
<td>tdsw</td>
<td>300</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>Tiempo de retraso de datos</td>
<td>td</td>
<td>-</td>
<td>-</td>
<td>480</td>
<td>ns</td>
</tr>
<tr>
<td>Tiempo de retención de datos(escritura)</td>
<td>tdhw</td>
<td>15</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>Tiempo de retención de datos(lectura)</td>
<td>tdhr</td>
<td>30</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
</table><table>
<tr>
<td>
<div align="center">
<img width={1000} src="https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/LCD-module-WTiming.jpg" />
</div>
</td>
<td>
<div align="center">
<img width={1000} src="https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/LCD-module-RTiming.jpg" />
</div>
</td>
</tr>
<tr>
<td><strong>Diagrama de Temporización de Escritura del Host</strong></td>
<td><strong>Diagrama de Temporización de Lectura del Host</strong></td>
</tr>
</table>

## Definición de pines y especificaciones

---
<table>
<tr>
<th>Pin No</th>
<th>Nombre del Pin</th>
<th>I/O</th>
<th>Descripciones</th>
</tr>
<tr>
<td width="100px">1</td>
<td width="100px">VSS</td>
<td width="100px">Alimentación</td>
<td width="500px">Alimentación negativa, Tierra(0V)</td>
</tr>
<tr>
<td>2</td>
<td>VDD</td>
<td>Alimentación</td>
<td>Alimentación positiva</td>
</tr>
<tr>
<td>3</td>
<td>V0</td>
<td>Alimentación</td>
<td>Referencia de contraste LCD</td>
</tr>
<tr>
<td>4</td>
<td>RS</td>
<td>Entrada</td>
<td>
* RS=ALTO:DB0-DB7=Datos de RAM de pantalla
* RS=BAJO:DB0-DB7=Datos de instrucción
</td>
</tr>
<tr>
<td>5</td>
<td>R/W</td>
<td>Entrada</td>
<td>
En modo lectura R/W=ALTO
Los datos se leen del módulo LCD, los datos aparecen en DB0-DB7 y pueden ser leídos por el host mientras E=H y el dispositivo está siendo seleccionado

En modo escritura R/W=BAJO;
Los datos se escriben al módulo LCD, los datos que aparecen en DB0-DB7 serán escritos en el módulo LCD en E=H-&gt;L y el dispositivo está siendo seleccionado.
</td>
</tr>
<tr>
<td>6</td>
<td>E</td>
<td>Entrada</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>DB0</td>
<td>I/O</td>
<td>Bus de datos; Terminal I/O de tres estados para datos de pantalla o datos de instrucción</td>
</tr>
<tr>
<td>8</td>
<td>DB1</td>
<td>I/O</td>
<td>Bus de datos; Terminal I/O de tres estados para datos de pantalla o datos de instrucción</td>
</tr>
<tr>
<td>9</td>
<td>DB2</td>
<td>I/O</td>
<td>Bus de datos; Terminal I/O de tres estados para datos de pantalla o datos de instrucción</td>
</tr>
<tr>
<td>10</td>
<td>DB3</td>
<td>I/O</td>
<td>Bus de datos; Terminal I/O de tres estados para datos de pantalla o datos de instrucción</td>
</tr>
<tr>
<td>11</td>
<td>DB4</td>
<td>I/O</td>
<td>Bus de datos; Terminal I/O de tres estados para datos de pantalla o datos de instrucción</td>
</tr>
<tr>
<td>12</td>
<td>DB5</td>
<td>I/O</td>
<td>Bus de datos; Terminal I/O de tres estados para datos de pantalla o datos de instrucción</td>
</tr>
<tr>
<td>13</td>
<td>DB6</td>
<td>I/O</td>
<td>Bus de datos; Terminal I/O de tres estados para datos de pantalla o datos de instrucción</td>
</tr>
<tr>
<td>14</td>
<td>DB7</td>
<td>I/O</td>
<td>Bus de datos; Terminal I/O de tres estados para datos de pantalla o datos de instrucción</td>
</tr>
<tr>
<td>15</td>
<td>CS1</td>
<td>entrada</td>
<td>Selección de chip, Cuando CS1=1(*1) Habilita el acceso al lado izquierdo (64 columnas) del módulo LCD</td>
</tr>
<tr>
<td>16</td>
<td>CS2</td>
<td>Entrada</td>
<td>Selección de chip, Cuando CS2=1(*1) Habilita el acceso al lado derecho (64 columnas) del módulo LCD</td>
</tr>
<tr>
<td>17</td>
<td>/RST</td>
<td>Entrada</td>
<td>Señal de reinicio /RST = L, Pantalla apagada el registro de línea de inicio de pantalla se convierte en 0 no se pueden aceptar datos de comando o instrucción /RST = H Funcionamiento normal</td>
</tr>
<tr>
<td>18</td>
<td>VOUT</td>
<td>Salida</td>
<td>Salida del amplificador de potencia para V0</td>
</tr>
<tr>
<td>19</td>
<td>BLA</td>
<td>Alimentación</td>
<td>Alimentación positiva para retroiluminación LED</td>
</tr>
<tr>
<td>20</td>
<td>BLK</td>
<td>Alimentación</td>
<td>Alimentación negativa para retroiluminación LED</td>
</tr>
</table>

Nota:

Los datos de visualización o instrucción pueden escribirse en el controlador/controladores del módulo LCD individualmente o al mismo tiempo.

Solo lee datos de visualización o instrucción de uno de los controladores en el módulo LCD a la vez, de lo contrario puede ocurrir una colisión de datos inesperada.

## Dimensiones Mecánicas

---
Dimensión del Contorno: 98.0*60.0*13.7MAX
(Ver dibujo del contorno adjunto para detalles)

## Uso

---

### Registros Internos

Hay tres registros en cada sección del módulo LCD. Cada uno de ellos puede ser controlado independientemente.

**Registro de Dirección de Página(X)**

El registro de dirección X designa páginas de la RAM de datos de visualización interna. La función de conteo no está disponible. La dirección debe establecerse por instrucción.

**Contador de Dirección de Columna(Y)**

El contador de dirección Y designa la dirección de la RAM de datos de visualización interna. Puede establecerse por instrucción y se incrementa automáticamente en 1 por operaciones de lectura o escritura de datos de visualización.

**Registro de Línea de Inicio de Visualización (Z)**

El registro de dirección Z indica la RAM de datos de visualización a la línea superior del LCD. Puede usarse para desplazar el patrón de visualización en el LCD.

### Programación

---
**Configuración Básica**

Para manejar el módulo LCD correctamente y proporcionar una visualización normal, por favor usa la siguiente configuración

* Línea de inicio de visualización(dirección Z)=0

* Visualización LCD = encendida

:::note

1. Estas configuraciones/comandos deben enviarse al módulo LCD durante el arranque.<br />
2. Ver la sección de Comandos de Visualización para detalles.
:::

**Ajustando el contraste de la visualización LCD**

Una Resistencia Variable debe conectarse al módulo LCD para proporcionar una referencia a V0. Ajustar la VR resultará en el cambio del contraste de visualización del LCD. El valor recomendado de VR es de 25k a 50k.

![](https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/VFD-lcd-module-162.JPG)

**Reiniciando el módulo LCD**

El módulo LCD debe inicializarse estableciendo el terminal /RST en nivel bajo al encender la alimentación.

Cuando /RST se pone en bajo, el módulo LCD:

* Visualización apagada

* El registro de línea de inicio de visualización se convierte en 0. (dirección-Z=0)

Mientras /RST está en bajo, no se puede aceptar ninguna instrucción excepto la lectura de estado. Por lo tanto, ejecuta otras instrucciones después de asegurarte de que DB4=0(limpiar /RST) y DB7=0(listo) por instrucción de lectura de estado. Las condiciones de la fuente de alimentación en el encendido inicial son las siguientes:

<table>
<tr>
<th>Elemento</th>
<th>Símbolo</th>
<th>Mín</th>
<th>Típ</th>
<th>Máx</th>
<th>Unidad</th>
</tr>
<tr>
<td width="200px">Tiempo de reinicio</td>
<td width="100px">trs</td>
<td width="100px">2.0</td>
<td width="100px">-</td>
<td width="100px">-</td>
<td width="100px">us</td>
</tr>
<tr>
<td>Tiempo de subida</td>
<td>tr</td>
<td>-</td>
<td>-</td>
<td>150</td>
<td>ns</td>
</tr>
</table>

![](https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/VFD-lcd-module-trtx.jpg)

## Recursos

* [Hoja de datos](https://bz.seeedstudio.com/depot/datasheet/LMB162ABC-Manual-Rev0.2.pdf)

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
