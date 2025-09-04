---
title: Dinamo de Bicicleta con Soporte - 6V 3W
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Bicycle_Dynamo_With_Bracket-6V_3W/
slug: /es/Bicycle_Dynamo_With_Bracket-6V_3W
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](http://bz.seeedstudio.com/depot/images/product/Bidynamo.jpg)

Este producto proporciona energía limpia y verde, produce electricidad sin ningún combustible. Funciona de manera segura y silenciosa. Es moderno, los usuarios pueden hacer una contribución para proteger el mundo mediante una vida baja en carbono.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/bicycle-dynamo-with-bracket-6v-3w-p-798.html?cPath=155)

## Características

---
- diseño de forma exterior simple y hermosa y disipación de calor a prueba de lluvia, a prueba de polvo, anti-vibración,
- salida de corriente constante

## Precauciones

---

1. No toque la carcasa del dinamo después de andar durante mucho tiempo, podría quemar su cuerpo. Espere al menos 10 minutos.
2. Se puede usar en días lluviosos, pero no lo ponga en agua, manténgalo alejado de los niños.

## Especificación

---

### Tamaño general del dinamo y estructuras

1. El diámetro máximo del cuerpo del dinamo es: 40.5mm, la longitud más larga del cuerpo principal es: 94.5mm。

![](https://files.seeedstudio.com/wiki/Bicycle_Dynamo_With_Bracket-6V_3W/img/Bicycle-spec.JPG)

1. rodillo de fricción
2. el cuerpo del dinamo
3. Acero magnético
4. Soporte de bobinado
5. Carcasa del resorte
6. Bobina
7. Llave inglesa
8. Placa de orejeta
9. Cubierta trasera

2. SALIDA: 6V,3W

3. GARANTÍA:    1 año

4. VIDA ÚTIL:  2-3 años

### Parámetros técnicos

**prueba de potencia de salida bajo voltaje constante**

<table>
  <tbody>
    <tr>
      <th>Velocidad(km/h)</th>
      <th>Potencia de salida(W)</th>
      <th>Voltaje de salida(V)</th>
      <th>Corriente de salida(A)</th>
    </tr>
    <tr>
      <td width="200px">5</td>
      <td width="200px">0.56</td>
      <td width="200px">6.00</td>
      <td width="200px">0.126</td>
    </tr>
    <tr>
      <td>15</td>
      <td>1.89</td>
      <td>6.00</td>
      <td>0.369</td>
    </tr>
    <tr>
      <td>30</td>
      <td>4.09</td>
      <td>6.00</td>
      <td>0.560</td>
    </tr>
  </tbody>
</table>

**prueba de carga de resistencia constante (18 ohmios)**

<table>
  <tbody>
    <tr>
      <th>velocidad（km/h）</th>
      <th>Potencia de salida(W)</th>
      <th>Voltaje de salida(V)</th>
      <th>Corriente de salida(A)</th>
    </tr>
    <tr>
      <td width="200px">5</td>
      <td width="200px">0.45</td>
      <td width="200px">2.45</td>
      <td width="200px">0.115</td>
    </tr>
    <tr>
      <td>15</td>
      <td>1.89</td>
      <td>5.78</td>
      <td>0.325</td>
    </tr>
    <tr>
      <td>30</td>
      <td>3.21</td>
      <td>7.23</td>
      <td>0.435</td>
    </tr>
  </tbody>
</table>

**Prueba de temperatura:**

<table>
  <tbody>
    <tr>
      <th>Temp. ambiente</th>
      <th>Temp. carcasa</th>
      <th>Aumento temp.</th>
      <th>Observaciones</th>
    </tr>
    <tr>
      <td width="200px">20℃</td>
      <td width="200px">55.2℃</td>
      <td width="200px">32.2℃</td>
      <td width="200px">prueba manteniendo 30cm de distancia</td>
    </tr>
  </tbody>
</table>

## Uso

### Instalación del Hardware

Fije la dinamo en la horquilla delantera cerca de la rueda de la bicicleta, ajuste la altura al lugar adecuado. (preste atención al lado fijo de la dinamo "izquierdo o derecho", debe coincidir.)

1、Mueva la llave, deje que el rodillo de la dinamo toque el borde de la rueda en la posición adecuada.

## FAQ

---
Por favor liste su pregunta aquí:

- ¿Podría usarse para alimentar un Arduino directamente?

R: No si por directamente te refieres a conectar los cables de la dinamo directamente a un arduino, por supuesto que no puede hacer eso. Porque, como todos los generadores, una dinamo como esta producirá CA, lo cual está bien para lámparas de tungsteno.. (es decir, bombillas) pero todos los LEDs necesitan CC, y también los dispositivos de estado sólido como Arduino. Así que siempre vas a necesitar un rectificador de puente *primero*. Lo que agregues después de eso depende de tu presupuesto y tus necesidades. Un arduino necesita voltaje estable, así que para un arduino, vas a necesitar usar el generador esencialmente como un cargador de batería.. y luego alimentas todas tus cosas *de esa batería que se carga.*

Lo que necesitarás para hacer eso con la mayor eficiencia es idealmente un convertidor CC a CC (busca en Google "convertidor boost-buck") o como mínimo algún tipo de circuito de carga alimentado por tu rectificador de puente.

Ver los enlaces más abajo.

- Si me detengo (es decir, en un semáforo en rojo) naturalmente dejará de producir energía. ¿Qué necesito para mantener el flujo de energía, un capacitor?

R: Sí.. eso funcionaría por unos segundos hasta más de un minuto.. dependiendo de qué tan brillante sea el LED que uses y el tamaño del capacitor que uses.

P: ¿Una batería? ¿De qué especificaciones?

R: Busca en Google cualquiera de los numerosos sitios (te di una ventaja abajo) que te dicen cómo construir una luz de bicicleta con una *luz de parada*.
Ese es el término de búsqueda que quieres.

P: Mi uso previsto es a) cargar mi teléfono celular, o b) alimentar un Arduino y hacer cosas geniales :)

R: Eso es *bastante* factible pero de nuevo, necesitarás cambiar esos (bastante variables) 3-~12ish voltios CA a CC a algo más apropiado (y estable) Si usas cualquier interruptor de encendido y apagado, además del propio "interruptor" de la dinamo, ten cuidado de usar un regulador de voltaje porque el voltaje que sale de una dinamo - vía diodos, *sin carga* podría fácilmente cargar un capacitor hasta el voltaje de salida *pico* absoluto de la dinamo que puede ser bastante alto. Entonces en el instante que reconectes tu LED, podrías quemarlo. Si dejas tus luces conectadas y encendidas todo el tiempo y usas un capacitor como luz de parada, y simplemente quitas la dinamo de la rueda cuando quieras apagarla, eso no es un problema.

Saludos --Nighto 01:37, 10 June 2011 (CST)

- LA DINAMO SUMINISTRADA ESTÁ DESTINADA A SER MONTADA SOLO EN LA HORQUILLA DELANTERA. Y cualquier dinamo dada solo funcionará en un lado. Esta dinamo es bastante inflexible en ese aspecto. Ver [https://en.wikipedia.org/wiki/Bottle_dynamo](https://en.wikipedia.org/wiki/Bottle_dynamo) para una imagen de una dinamo montada en la horquilla delantera de una bicicleta, mirando hacia adelante.

Muchas personas que la compran aquí la están usando para otros propósitos que no sean iluminación de bicicleta, así que para ellos todo esto no importa de todos modos.

No asumas que la gente no la usará en bicicletas, dado el hecho de que es una dinamo de bicicleta, y su precio, es una opción competitiva para ciclistas. Y es una pequeña dinamo decente, por el precio, pero tiene que ser montada de forma segura. Todas lo hacen. Eso es solo sentido común básico.

- Pregunta a tu mecánico de bicicletas local para información sobre cómo hacerlo si no estás seguro.*

## Recursos

---
- [Archivo:Spec.doc](https://files.seeedstudio.com/wiki/Bicycle_Dynamo_With_Bracket-6V_3W/res/Spec.doc)

## Enlaces Externos

Enlaces a páginas web externas que proporcionan más ideas de aplicación, documentos/hojas de datos o bibliotecas de software.

[Cómo conectar cables de dinamo](http://www.yellowjersey.org/dami.html)(créelo o no, algunas personas necesitan saberlo)

[http://pilom.com/BicycleElectronics/DynamoCircuits.htm](http://pilom.com/BicycleElectronics/DynamoCircuits.htm)

[http://www.candlepowerforums.com/vb/forumdisplay.php?86-Bicycle](http://www.candlepowerforums.com/vb/forumdisplay.php?86-Bicycle)

## Soporte Técnico y Discusión de Productos

 si tienes algún problema técnico.  envía el problema a nuestro [foro](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
