---
title: Grove - Grabadora
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove_Recorder/
slug: /es/Grove_Recorder
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Grove-Recoder.jpg)

Grove - Grabadora está basada en el chip ISD1820P, y puede grabar de 8 a 20 segundos de audio. Ofrece grabación de voz verdaderamente de un solo chip y proporciona almacenamiento no volátil. El tiempo de grabación puede variarse cambiando la resistencia de muestreo (R6) en la PCB del módulo. Por defecto, la resistencia a bordo tiene un valor de 100KΩ y por lo tanto el módulo ofrece un tiempo de grabación predeterminado de 10 segundos. La grabación de audio puede ser controlada directamente por el botón pulsador a bordo o por un microcontrolador como un Seeeduino.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Recorder-p-1825.html)

## Características

---

* Bajo consumo de energía

* Almacenamiento no volátil

* Operación amigable para el usuario

* Reemplazar una sola resistencia para cambiar la duración de grabación y frecuencia de muestreo

* Agregar una resistencia para establecer el modo de ciclo de reproducción

* Se envía con y se conecta a un mini-altavoz de 8Ω/2W (como se muestra en la imagen)
* Usa cables Grove estándar de 4 pines para conectarse a otros módulos Grove o un microcontrolador como el Seeeduino

## Función de la Interfaz

---
![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Recorder_Bottom1.jpg)
![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Recorder_Top1.jpg)

<dl>
  <dt>① Indicador LED</dt>
  <dd>
    Modos:
    <dl>
      <dd>Grabación: La luz LED roja permanece ENCENDIDA desde el inicio de la duración de grabación hasta el final.</dd>
      <dd>Reproducción: El LED rojo parpadea para señalar el final de la reproducción de audio.</dd>
    </dl>
  </dd>
</dl>
<dl><dt>② Resistencia de muestreo</dt><dd>Puedes establecer la duración de grabación y la tasa de muestreo cambiando la resistencia de muestreo (R6) basándote en la siguiente tabla:</dd></dl>
<table  cellspacing="0" width="50%">
<tr>
<th scope="col"> ROSC</th>
<th scope="col"> Duración</th>
<th scope="col"> Frecuencia de Muestreo</th>
<th scope="col"> Ancho de Banda de Entrada</th>
</tr>
<tr>
<th scope="row"> 80 KΩ</th>
<td> 8 segs</td>
<td> 8.0 KHz</td>
<td> 3.4 KHz</td>
</tr>
<tr>
<th scope="row"> 100 KΩ (predeterminado)</th>
<td> 10 segs</td>
<td> 6.4 KHz</td>
<td> 2.6 KHz</td>
</tr>
<tr>
<th scope="row"> 120 KΩ</th>
<td> 12 segs</td>
<td> 5.3 KHz</td>
<td> 2.3 KHz</td>
</tr>
<tr>
<th scope="row"> 160 KΩ</th>
<td> 16 segs</td>
<td> 4.0 KHz</td>
<td> 1.7 KHz</td>
</tr>
<tr>
<th scope="row"> 200 KΩ</th>
<td> 20 segs</td>
<td> 3.2 KHz</td>
<td> 1.3 KHz</td>
</tr>
</table>

<dl>
  <dt>③ Resistor de reproducción</dt>
  <dd>
    Modos:
    <dl>
      <dd>Ciclo: R8 tiene colocado un resistor de 0Ω</dd>
      <dd>Simple: R8 no tiene colocado resistor</dd>
    </dl>
  </dd>
</dl>
<dl><dt>④ Tecla de reproducción</dt><dd>No se usa actualmente</dd></dl>
<dl><dt>⑤ Tecla REC</dt><dd></dd></dl>
<dl><dt>⑥ Interfaz Grove</dt><dd></dd></dl>
<dl><dt>⑦ Interfaz del altavoz</dt><dd></dd></dl>
<dl><dt>⑧ IC REC：ISD1820P</dt><dd></dd></dl>

## Uso

---
Sigue estos pasos para construir un circuito de muestra usando el módulo **Grove - Recorder**:

1. Conecta el módulo grabador al lado de salida del circuito Grove (a la derecha del módulo de alimentación). En el lado de entrada del circuito, puedes usar un módulo [Grove - Button](/Grove-Button "Grove - Button") o un [Grove - Slide Potentiometer](/Grove-Slide_Potentiometer "Grove - Slide Potentiometer").
2. Enciende el circuito.

3. Presiona y mantén presionado el botón REC en el módulo grabador y comienza a grabar el audio. El LED rojo integrado se encenderá. Continúa grabando el audio hasta que el LED rojo se apague. El apagado del LED indica que el tiempo de grabación ha terminado.

4. Para reproducir el segmento de audio que ha sido grabado, presiona y mantén presionado el [Grove - Button](/Grove-Button "Grove - Button"). Ahora deberías escuchar el segmento de audio que grabaste siendo reproducido. Continúa presionando y manteniendo presionado el [Grove - Button](/Grove-Button "Grove - Button") hasta que veas el LED rojo integrado en el módulo grabador parpadear. El parpadeo indica que la reproducción del audio ha terminado. Si en lugar de un [Grove - Button](/Grove-Button "Grove - Button"), estás usando un [Grove - Slide Potentiometer](/Grove-Slide_Potentiometer "Grove - Slide Potentiometer"), simplemente mueve el deslizador de la posición GND a VCC para escuchar la reproducción en cualquier momento.

5. Para sobrescribir el audio grabado, simplemente repite el paso 3 anterior. El nuevo mensaje sobrescribirá el anterior.

 A continuación se muestra una ilustración de un circuito Grove construido usando el módulo Grove - USB Power: 

![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/REC_Grove-Recoder.JPG)

![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Play_Grove-Recoder.JPG)

Si no tienes el módulo Grove - USB Power, usa el módulo Grove - DC Jack Power en su lugar.

## Disponibilidad

---
Este módulo Grove está disponible como parte de la siguiente Serie de Kits Grove

<!-- * [Grove Mixer Pack V2](/Grove-Mixer_Pack_V2 "GROVE MIXER PACK V2") -->

Alternativamente, puede comprarse por separado en el Seeed Studio Bazaar.

## Visor de esquemas en línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove-Recorder_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Grove - Recorder v1.0 Esquemas (archivos Eagle)](https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove-Recorder_v1.0.zip)

* [Grove - Recorder v1.0 Esquemas (pdf)](https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove-Recorder_v1.0.pdf)

* [Hoja de datos ISD1820P.pdf (Chino)](https://files.seeedstudio.com/wiki/Grove_Recorder/res/ISD1820P.pdf)

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
