---
title: Sensor - Sound(introducción)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Sensor_sound/
slug: /es/Sensor_sound
last_update:
  date: 01/06/2022
  author: gunengyu
---

# Guía de Selección de Sensores de Sonido Seeed

Hemos lanzado varios tipos de sensores de sonido en los últimos años. Puede que encuentres difícil elegir entre ellos. ¡Entendemos tu situación y echemos un vistazo detallado a ellos para determinar cuál es el más adecuado para ti!

Para todos los sensores de sonido en nuestro bazar, por favor haz clic en [Etiqueta de Sonido del Bazar](https://www.seeedstudio.com/tag/Sound.html) para verificar.

## Qué es un sensor de sonido

Los sonidos existen ampliamente en nuestra vida diaria, y podemos usar sonidos para hacer muchos controles interactivos, como luces activadas por voz en corredores. A través del sensor de sonido, aplaudiendo con tus manos frente al cabezal de detección negro (Micrófono) o hablando fuerte, puedes controlar la luz a través del sonido. El sensor de sonido es equivalente a un micrófono. Puede detectar el sonido y convertir el sonido detectado en una salida de señal analógica correspondiente. Se usa ampliamente en teléfonos móviles, grabadoras, iluminación activada por voz, equipos médicos, medición en aguas profundas, monitoreo de ruido de tráfico, detección de ruido de empresas industriales y etc.

Con el desarrollo del sensor de sonido, emergen más y más productos creativos y prometedores con sensores de sonido. Por ejemplo, puede que hayas oído de una cámara que puede fotografiar luz invisible al ojo humano, o una cámara térmica, pero ¿has oído de una cámara que puede fotografiar sonido? Así es: científicos coreanos han desarrollado tal cámara que es capaz de detectar el área de la foto y marcarla con color, ¿es muy interesante?

Esta única "cámara de sonido" se llama SeeSV-S205, con una cámara ordinaria en el medio, pero rodeada por sensores de sonido sofisticados, puede hacer que fotografiar sonido sea tan simple como fotografiar luz. Solo necesitas sostenerla frente a la fuente de sonido, y puedes ver la posición de la fuente de sonido en la imagen final.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Sensor_sound/IMG/sound sensor.jpg" />
  <figcaption><b>Figura 1</b>. <i>Cámara de Sonido SeeSV-S205 ( Imagen de SinaTech, 2013 )</i></figcaption>
</div>

### Cómo funciona un sensor de sonido

El sensor de sonido tiene un micrófono electret condensador incorporado que es sensible al sonido. Las ondas sonoras causan que la película electret en el micrófono vibre, resultando en un cambio en la capacitancia y un pequeño voltaje correspondiente al cambio. Y este voltaje es entonces convertido en un voltaje de 0-5V, que es aceptado por el recolector de datos después de la conversión A/D y transmitido a la computadora.

#### Pastel Interactivo de Sonido y Luz

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Sensor_sound/IMG/birthday cake.png" />
  <figcaption><b>Figura 2</b>. <i> Principio de funcionamiento de un Pastel Interactivo de Sonido y Luz  ( Imagen de Dfrobot, 2019 )</i></figcaption>
</div>

Hay un cabezal de captación negro (MIC) en el sensor de sonido. Cuando la canción de cumpleaños suena fuerte frente al cabezal de captación negro, el sensor de sonido puede sentir la vibración del sonido, que genera señales eléctricas, y enciende las luces en el pastel.

## Campo de Aplicaciones

Existen numerosos usos de estos sensores de sonido. Particularmente, usando este tipo de sensores, los seres humanos pueden ser monitoreados y beneficiados o incluso salvados de diferentes condiciones. Por lo tanto, los sensores de sonido juegan roles importantes en varios sectores, que incluyen la vida diaria, industria, medicina, militar y etc.

| Campo de aplicación                                          | Contenido |
|--------------------------------|-----------------------------------------|
| Vida Diaria  | El sensor muestrea la señal de sonido y la aplica a micrófonos, grabadoras, teléfonos móviles y otros dispositivos. La lámpara de control de audio está equipada con un sensor de audio. Tan pronto como alguien hace un sonido de fricción durante 1 segundo, la lámpara de pared se encenderá automáticamente durante aproximadamente diez segundos; el televisor de control por voz puede almacenar las voces de dos personas.|
| Industria | El sensor de ondas acústicas utiliza el efecto piezoeléctrico positivo e inverso de la conversión entre energía eléctrica y energía mecánica de la cerámica piezoeléctrica de titanato de circonato de plomo PZT para medir distancia. Se añade una señal eléctrica a la cerámica piezoeléctrica, genera vibración mecánica y emite ultrasonido. Cuando se encuentra un obstáculo en el camino, el ultrasonido será reflejado de vuelta inmediatamente, y habrá una salida de señal eléctrica cuando actúe sobre su cerámica. Consecuentemente la distancia entre el automóvil y el obstáculo es calculada y mostrada mediante la medición de las diferencias de tiempo.  |
| Tratamiento médico| El principio de funcionamiento de los audífonos tradicionales es: el micrófono convierte la señal de sonido recibida en una señal eléctrica y la envía al amplificador. El amplificador amplifica la señal eléctrica y la envía al receptor (auricular), que convierte la señal eléctrica en señal de sonido. La señal de sonido en este momento es mucho más fuerte que la señal recibida por el micrófono, de modo que la pérdida auditiva de los sordos puede ser compensada en grados variables.|
| Militar | El sensor de sonido usa ondas sonoras para determinar la composición química del material en el contenedor cerrado para fortalecer la seguridad del puerto; El sistema de sensor de sonido puede localizar y clasificar la potencia de fuego del francotirador, y proporcionar el azimut, elevación, y Rango, calibre y distancia de error.|

## Sensores de Sonido en Seeed

### ¿Cuál es tu Preferencia?

|Nombre|Miniatura|Voltaje de operación|Rango de Medición|Sensibilidad|Salida|Frecuencia de Señal|Clic para comprar|
|----|-----|-----|------|------|------|-----|------|
|[Grove - Sensor de Sonido](https://wiki.seeedstudio.com/es/Grove-Sound_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small.jpg"/>|5V|/|48dB-52dB|/|16kHz-20 kHz|[Comprar Ahora](https://www.seeedstudio.com/Grove-Sound-Sensor-Based-on-LM386-amplifier-Arduino-Compatible.html)|
|[Grove - Reconocedor de Voz](https://wiki.seeedstudio.com/es/Grove-Speech_Recognizer/)|<img src="https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/stuff1.jpg" />|3V-5V|/|-43dB-(-37dB)|/|32.768MHz-50MHz|[Comprar Ahora](https://www.seeedstudio.com/Grove-Speech-Recognizer.html)|
|[Grove - Sensor de Volumen](https://wiki.seeedstudio.com/es/Grove-Loudness_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/LoudnessSensor_s.jpg" />|3.5V-10VDC|/|-48dB~66 dB|Señal Analógica|50Hz~2000 Hz|[Comprar Ahora](https://www.seeedstudio.com/Grove-Loudness-Sensor.html)|
|[Grove - Sensor Heelight](https://wiki.seeedstudio.com/es/Grove-Heelight_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/heelight sensor.png" />|3.3V-5V|0.1m-10m|/|Nivel lógico TTL|/|[Comprar Ahora](https://www.seeedstudio.com/Grove-Heelight-Sensor.html)|
|[Grove - Grabador de Sonido](https://wiki.seeedstudio.com/es/Grove-Sound_Recorder/)|<img src="https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/Sound recorder.png" />|3V-5.5V|±1.5g|/|/|/|[Comprar Ahora](https://www.seeedstudio.com/Grove-Sound-Recorder-p-904.html)|

### Aviso Importante

La tabla anterior muestra una variedad de atribuciones de cada sensor de sonido con diferentes rangos de medición, sensibilidades y frecuencias de señal, puedes elegir el que sea más adecuado para ti.

Para información más detallada de cada uno, por favor visita sus páginas individuales a través de los enlaces ubicados junto a las imágenes de los productos.

## Recurso

- Referencia
  - [Cámara de sonido mágica: compuesta de sensor de sonido de cámara](http://tech.sina.com.cn/digi/dc/2013-05-14/00188334966.shtml)
  - [Boson:Sensor de Sonido](http://wiki.dfrobot.com.cn/index.php?title=%E5%A3%B0%E9%9F%B3%E4%BC%A0%E6%84%9F%E5%99%A8)

## Proyecto

**Hackeando las Escaleras en la Nueva Oficina de Seeed**: Convierte las escaleras de la oficina en una instalación interactiva, e incluso una forma genial de transmitir el mensaje "SOLO PERSONAL" a los visitantes.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/stairs-hackers/hacking-the-stairs-at-seeed-s-new-office-9ef30b/embed' width='350'></iframe>

**El Código Da Vinci**: El trabajo combina arte y electrónica. La parte artística forma el esqueleto y consiste en 11 capas de tablero de fibra de densidad media.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/coding-with-da-vince/the-da-vinci-code-3b91a8/embed' width='350'></iframe>

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
