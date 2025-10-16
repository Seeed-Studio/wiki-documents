---
description: GPS-Modules-Selection-Guide
title: Guía de Selección de Módulos GPS

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/GPS-Modules-Selection-Guide
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

Hemos lanzado varios tipos de Módulos GPS en los últimos años. ¡Echemos un vistazo detallado a ellos y descubramos cuál es el más adecuado para ti!

Para todos los módulos GPS o de Comunicación en nuestro bazar, por favor haz clic en [Seeed Studio Bazaar](https://www.seeedstudio.com/) para verificar.

## Introducción al GPS y Módulos GPS

Uno de los dispositivos del sistema de posicionamiento global (GPS) utiliza datos de satélites para localizar un punto específico en la Tierra en un proceso llamado trilateración. Mientras tanto, un receptor GPS mide las distancias a los satélites usando señales de radio para trilaterizar. Y la trilateración es similar a la triangulación, que mide ángulos, representado en esta ilustración (Tim Gunther, 2020). Los módulos GPS contienen pequeños procesadores y antenas que reciben directamente datos enviados por satélites a través de frecuencias RF dedicadas. Desde allí, recibirá marcas de tiempo de cada satélite visible, junto con otras piezas de datos. Si la antena del módulo puede detectar 4 o más satélites, es capaz de calcular con precisión su posición y tiempo.

Los cuatro sistemas de navegación por satélite global bien conocidos incluyen GPS, BDS(Beidou), GLONASS y GALILEO cuatro sistemas de navegación por satélite. El que apareció más temprano en Estados Unidos es GPS (Sistema de Posicionamiento Global), que es la tecnología más completa en esta etapa. BDS, GLONASS y GALILEO se han convertido en los otros sistemas de navegación por satélite más grandes del mundo y actualmente están en proceso de modernización.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/28251.jpg" /><figcaption><b>Figura 1</b>. <i> Ilustración del globo con tres satélites triangulando una ubicación precisa. ( Tim Gunther, 2020 ) </i></figcaption></div>

Introduciremos y compararemos estos dos módulos GPS:

- [Grove – Módulo GPS](https://wiki.seeedstudio.com/es/Grove-GPS/)  
- [Grove – GPS(Air530)](https://wiki.seeedstudio.com/es/Grove-GPS-Air530/)

Estos módulos GPS son compatibles con Arduino y Raspberry Pi, facilitándote comenzar a probarlos. El Módulo Air 530 en **Grove - GPS(Air530)** es un módulo de posicionamiento y navegación por satélite multimodo de alto rendimiento y altamente integrado. Soporta GPS / Beidou / Glonass / Galileo / QZSS / SBAS, lo que lo hace adecuado para aplicaciones de posicionamiento GNSS como navegación de automóviles, dispositivos inteligentes portátiles y drones. Y el módulo Air530 también soporta el protocolo NMEA 0183 V4.1 y es compatible con versiones anteriores.

Mientras tanto, la serie de módulos E-1612-UB del **Grove - Módulo GPS** es una familia de receptores GPS independientes que cuentan con el motor de posicionamiento u-blox 5 de alto rendimiento. El motor de posicionamiento u-blox 5 de 50 canales cuenta con un Tiempo-Hasta-Primera-Fijación ( TTFF ) de menos de 1 segundo. El motor de adquisición dedicado, con más de 1 millón de correladores, es capaz de búsquedas masivas paralelas de espacio tiempo / frecuencia, permitiéndole encontrar satélites instantáneamente.

## Principio de Funcionamiento

Debes conocer los principios de los módulos GPS antes de comprar y la tabla a continuación proporciona información al respecto.

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-5hs1{background-color:#656565;border-color:#c0c0c0;color:#FFF;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-q854{background-color:#ffffff;border-color:#c0c0c0;color:#000000;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-uxnu{background-color:#ffffff;border-color:#c0c0c0;color:#000000;font-size:18px;text-align:left;vertical-align:top}
</style> -->
<!--

<table class="tg" style="undefined;table-layout: fixed; width: 791px">
<colgroup>
<col style="width: 200px">
<col style="width: 591px">
</colgroup>
<thead>
  <tr>
    <th class="tg-5hs1">Término de Módulos GPS</th>
    <th class="tg-5hs1">Principio de funcionamiento</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-q854"><br><br>DGPS<br></td>
    <td class="tg-uxnu">DGPS es una estación de referencia GPS diferencial que utiliza coordenadas tridimensionales precisas conocidas para obtener la cantidad de corrección de pseudodistancia o la cantidad de corrección de posición, y luego envía esta cantidad de corrección al usuario (navegador GPS en tiempo real o posteriormente) para corregir los datos de medición del usuario y mejorar la precisión de posicionamiento GPS.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br><br>Canales</td>
    <td class="tg-uxnu">El número de canales que ejecuta el módulo GPS afectará su tiempo hasta la primera fijación (TTFF). Dado que el módulo no sabe que está observando el satélite, puede verificar más frecuencias/canales a la vez, y en consecuencia puede encontrar reparaciones más rápido. Después de que el módulo se bloquea o repara, algunos módulos cerrarán los bloques de canales adicionales para ahorrar energía.</td>
  </tr>
  <tr>
    <td class="tg-q854">TTFF</td>
    <td class="tg-uxnu">Tiempo hasta la primera fijación. Una especificación que detalla el tiempo requerido para que un receptor GPS adquiera una posición después del encendido.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br><br><br>NMEA</td>
    <td class="tg-uxnu">NMEA es un formato estándar desarrollado por la Asociación Nacional de Electrónica Marina para equipos electrónicos marinos. Los datos NMEA se muestran en oraciones y se envían desde el pin de transmisión serie (TX) del módulo GPS. "GGA" es el formato más comúnmente utilizado, incluye tiempo de posicionamiento, latitud, longitud, altitud, el número de satélites utilizados para posicionamiento, valor DOP, estado diferencial y período de corrección, etc.</td>
  </tr>
  <tr>
    <td class="tg-q854">Tasa de Actualización</td>
    <td class="tg-uxnu">La tasa de actualización se refiere a la frecuencia con la que el módulo GPS recalcula e informa su posición.</td>
  </tr>
  <tr>
    <td class="tg-q854">Tasa de Baudios</td>
    <td class="tg-uxnu">La tasa de baudios se refiere a qué tan rápido se envían los datos a través de una línea serie. Y una tasa de baudios más alta permite que los datos GPS se envíen más rápido.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>Sensibilidad</td>
    <td class="tg-uxnu">La cifra dBm dicta qué tan propenso es el módulo gps para capturar la frecuencia. Un dBm más alto indica que el módulo es capaz de captar mejor las señales de satélite.</td>
  </tr>
  <tr>
    <td class="tg-q854">Requisitos de Energía</td>
    <td class="tg-uxnu">Los módulos GPS pueden consumir una cantidad sustancial de energía. El promedio es de 30mA a 3.3V.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>Antenas<br></td>
    <td class="tg-uxnu">Cada antena está diseñada para captar la frecuencia GPS L1 de 1.5752 GHz. La posición y el diseño de la antena son cruciales para el rendimiento óptimo del GPS.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>Precisión<br></td>
    <td class="tg-uxnu">Menor la distancia a la que puede llegar = Mayor precisión. Usualmente capaz de encontrar tu ubicación dentro de 30 segundos, hasta +/- 10m y la mayoría de los módulos pueden reducirlo a +/-3m.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br><br>Inicio en Caliente<br></td>
    <td class="tg-uxnu">Significa que no ha habido demasiado movimiento en el lugar donde se apagó la energía la última vez, y el tiempo desde el último posicionamiento es menor a 2 horas. Al posicionar nuevamente, el chip GPS puede continuar usando las efemérides anteriores para buscar rápidamente estrellas a través de software, para lograr posicionamiento en segundos.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>Inicio Tibio</td>
    <td class="tg-uxnu">Se refiere a la situación donde el tiempo de posicionamiento es más de 2 horas desde el último tiempo de posicionamiento, y el tiempo de búsqueda está entre inicio frío e inicio en caliente.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>Inicio Frío<br></td>
    <td class="tg-uxnu">Si la energía del módulo se apaga por mucho tiempo, y el capacitor de respaldo desaparece, los datos se perderán. La próxima vez que enciendas, el GPS necesitará descargar nuevos datos de almanaque y efemérides.</td>
  </tr>
</tbody>
</table> -->

## Campo de Aplicaciones

Existen numerosas utilizaciones de los Módulos GPS. Particularmente, muchas actividades sociales pueden desarrollarse mediante aplicaciones de estos Módulos GPS. Por lo tanto, los Módulos GPS desempeñan roles importantes en varios sectores, que incluyen Medición Ambiental, Transporte, Rescate de Emergencia, Agricultura, Entretenimiento y etc.
<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-5hs1{background-color:#656565;border-color:#c0c0c0;color:#FFF;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-5z8m{background-color:#FFF;border-color:#c0c0c0;color:#000000;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-ut4k{background-color:#FFF;border-color:#c0c0c0;color:#000000;font-size:18px;text-align:left;vertical-align:top}
</style> -->
<table className="tg" style={{tableLayout: 'fixed', width: 792}}>
  <colgroup>
    <col style={{width: 201}} />
    <col style={{width: 591}} />
  </colgroup>
  <thead>
    <tr>
      <th className="tg-5hs1">Campo de aplicación</th>
      <th className="tg-5hs1">Función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-5z8m"><br /><br />Medición<br /></td>
      <td className="tg-ut4k">Utiliza tecnología diferencial de fase portadora (RTK) para procesar la fase portadora de dos estaciones de observación en tiempo real con una precisión de nivel centimétrico. Los resultados de medición se unifican en coordenadas WGS84, la información se recibe y almacena automáticamente, reduciendo el engorroso enlace de procesamiento intermedio.</td>
    </tr>
    <tr>
      <td className="tg-5z8m"><br /><br />Transporte<br /></td>
      <td className="tg-ut4k">Los módulos GPS pueden utilizarse para navegación autónoma, gestión portuaria y guía de entrada, gestión de tráfico de rutas y seguimiento y monitoreo. El equipo montado en vehículos utiliza GPS para posicionamiento preciso, combinado con mapas electrónicos y condiciones de tráfico en tiempo real, coincide automáticamente con la ruta óptima e implementa la navegación autónoma del vehículo.</td>
    </tr>
    <tr>
      <td className="tg-5z8m"><br /><br /><br />Rescate de Emergencia<br /></td>
      <td className="tg-ut4k">Utilizando tecnología de posicionamiento GPS, se puede llevar a cabo el despacho de emergencia de bomberos, ambulancias y policía, y se puede mejorar la eficiencia de respuesta del departamento de respuesta de emergencia a incendios, escenas de crimen, accidentes de tráfico, atascos de tráfico y otros eventos de emergencia. Un barco pesquero equipado con un módulo GPS puede localizar rápidamente y dar alarma cuando ocurre una situación peligrosa, para que pueda obtener rescate más rápido y oportuno.</td>
    </tr>
    <tr>
      <td className="tg-5z8m"><br /><br />Agricultura<br /><br /></td>
      <td className="tg-ut4k">Se utiliza un módulo GPS para localizar y adquirir información de tierras de cultivo, incluyendo monitoreo de rendimiento, recolección de muestras de suelo y etc. El sistema informático determina las medidas de gestión de parcelas de tierras de cultivo analizando y procesando los datos, y carga la información de rendimiento y estado del suelo en el equipo GPS. En el aplicador de pulverización, puede fertilizar y pulverizar con precisión las tierras de cultivo.</td>
    </tr>
    <tr>
      <td className="tg-5z8m"><br /><br />Entretenimiento<br /></td>
      <td className="tg-ut4k">A través de módulos GPS, las personas pueden encontrar rápidamente su destino en una ciudad desconocida, y pueden viajar por la ruta óptima; los campistas llevan receptores GPS para encontrar rápidamente ubicaciones de campamento adecuadas sin preocuparse por perderse; incluso algunos videojuegos de alta gama también utilizan tecnología de simulación GPS.</td>
    </tr>
  </tbody>
</table>

## Módulos GPS en Seeed

| Nombre| Miniatura| Tamaño |Tasa de Actualización| Tasa de Baudios| Sensibilidad de Navegación|Requisitos de Energía|Número de Canales| Tiempo hasta el primer inicio | Antenas |Precisión |Clic para Comprar|
|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------|-------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|--------------------------|
| [Grove – Módulo GPS](https://wiki.seeedstudio.com/es/Grove-GPS/) | ![Grove GPS](https://files.seeedstudio.com/wiki/Grove-GPS/img/gps-module.jpg) | `40mm x 20mm x 13mm` | `1Hz, máx 10Hz` | `9,600bps – 115,200bps` | `-160dBm` | `3.3V - 5V` | `22 seguimiento, 66 canales` | `Inicio en frío: 13s; Inicio tibio: 1-2s; Inicio caliente: <1s` | Antena incluida | `2.5m Precisión de Posición Horizontal GPS` | [Ordenar Ahora](https://www.seeedstudio.com/Grove-GPS-Module.html?utm_source=blog&utm_medium=blog) |
| [Grove – GPS (Air530)](https://wiki.seeedstudio.com/es/Grove-GPS-Air530/)  | <img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/03_11.png"/>|40mm x 20mm x 13mm|/|Por defecto 9,600bps|-148dB|3.3V - 5V|/|Inicio en frío: 27s; Inicio tibio: 4s;|Antena incluida|2.5m Precisión de posicionamiento horizontal|[Ordenar Ahora](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html)|

### Qué Módulo GPS es mejor

#### Mejor consumo de energía

El **Grove – GPS (Air530)** tiene un consumo de energía ultra-bajo de solo 31uA, modo de bajo consumo de 0.85 mA, lo que lo convierte en el mejor GPS con menor consumo de energía.

#### Escalabilidad

Con una tasa de actualización máxima más alta, el **Grove - GPS** puede ser utilizado para proyectos que involucran objetos que viajan a mayor velocidad. Además, al tener más canales abiertos para otras aplicaciones también, el **Grove- GPS (Air 530)** tiene un posicionamiento y navegación satelital multi-modo y soporta más de 6 satélites al mismo tiempo.

#### Precisión

Con una precisión de posicionamiento horizontal de 2.5m, precisión de posicionamiento alto de 3.5m, precisión de velocidad de 0.1m/s, y una precisión de transferencia de tiempo de 30ns, el **Grove -GPS (Air530)** es capaz de posicionarse rápida y precisamente incluso bajo la condición de una mala señal.

## Proyectos

**Proyecto de Rastreador GPS/GPRS**: En este nuevo proyecto presentaremos nuestro Rastreador GPS conectado usando la técnica GPRS y protocolo MQTT.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/OHAlgerie/project-of-gps-gprs-tracker-36c425/embed' width='350'></iframe>

**Sistema de Rastreo Vehicular**: Ahora que ya has elegido tu módulo GPS, aquí tienes algunos proyectos que puedes hacer con tu Arduino y módulo GPS. Visita [aquí](https://create.arduino.cc/projecthub/muchika/vehicle-tracking-system-based-on-gps-and-gsm-57b814?ref=tag&ref_id=gps&offset=15) para información detallada.

<iframe frameborder='560' height='327.5' scrolling='no' src='https://hackster.imgix.net/uploads/attachments/1038379/FZNOC7NK0MP38U3.jpg?auto=compress%2Cformat&w=900&h=675&fit=min' width='350'></iframe>

**Velocímetro LED para Bicicleta**: ¿Quieres saber qué tan rápido estás pedaleando? Con este velocímetro DIY para bicicleta, usando tecnología GPS para detección de velocidad, ¡puedes saber qué tan rápido vas! También cuenta con un LED RGB para indicar la velocidad al ciclista. Visita [aquí](https://create.arduino.cc/projecthub/JeremySCook/gps-led-bike-speedometer-c8f956?ref=tag&ref_id=gps&offset=26) para información detallada.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/watch?v=CeStrH-5Llo&feature=emb_rel_end" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**Asistente GPS Personal**: Este proyecto es un dispositivo que te permite monitorear personas y cosas, y te dice continuamente su ubicación, y los valores de los sensores conectados a él. Una de las características te permite establecer valores límite para los sensores, y cuando estos son excedidos se te envía una alerta SMS. También puedes establecer restricciones de algunos lugares, donde se te darán alertas cuando el dispositivo salga del área. También es posible comunicarse con el dispositivo a través de SMS, para obtener información sobre él.

Visita [aquí](https://create.arduino.cc/projecthub/Momy93/sandro-your-personal-gps-assistant-26dfa3?ref=tag&ref_id=gps&offset=32) para información detallada.

<div class="video-container">
<iframe width="560" height="315" src="https://youtu.be/3lcP4YtxlCg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Recurso

**[Referencia]** [Triangulación de Tim Gunther, National Geographic (2020)](https://www.nationalgeographic.org/photo/triangulation-sized/)

**[ZIP]** [Hojas de datos E-1612-UB](https://files.seeedstudio.com/wiki/Grove-GPS/res/E-1612-UB_Datasheets_Sheet.pdf)

**[ZIP]** [Hojas de datos Air530](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Air530_GPS_User_Booklet.V1.7.pdf)

## Soporte Técnico y Discusión de Productos

Si tienes algún problema técnico, envía el problema a nuestro [foro](http://forum.seeedstudio.com/).

<br />
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
