---
description: Grove - Sensor de Huellas Dactilares
title: Grove - Sensor de Huellas Dactilares
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Fingerprint_Sensor
last_update:
  date: 1/6/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Print_Sensor.jpg" /></div>

El Sensor de Huellas Dactilares es un sensor óptico de huellas dactilares que hará que la detección y verificación de huellas dactilares sea súper simple. Hay un chip DSP de alta potencia AS601 que realiza el renderizado de imágenes, cálculo, búsqueda de características y búsqueda. También puedes registrar nuevos dedos directamente - hasta 162 huellas dactilares pueden almacenarse en la memoria FLASH integrada. Hay un LED rojo en la lente que se iluminará durante la toma de fotos para que sepas su condición de funcionamiento. Es fácil de usar y por mucho el mejor sensor de huellas dactilares que puedes obtener.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Fingerprint-Sensor-p-1424.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

Especificaciones
-------------

- Voltaje de alimentación: 3.6~6.0 V
- Corriente de operación (Máx): 120 mA
- Tiempo de captura de huella dactilar: 1.0 S
- Modo de Coincidencia: Modo de Comparación 1:1
- Modo de Búsqueda: 1:N
- Capacidad de almacenamiento: 162 plantillas
- Tasa de Falsa Aceptación: 0.001% (Nivel de seguridad 3)
- Tasa de Falso Rechazo: 1.0% (Nivel de seguridad 3)
- Velocidad de baudios: 9600, 19200, 28800, 38400, 57600bps (por defecto es 57600)
- Interfaz: Serie TTL
- Temperatura de Trabajo: -20 ~ +50 ℃
- Interfaz

| Número de Pin | Nombre | Tipo | Descripción de Función                                           |
|---------------|--------|------|------------------------------------------------------------------|
| 1             | Vin    | in   | Terminal de Entrada de Alimentación Positiva (Color de línea: Rojo) |
| 2             | TD     | out  | Salida de datos serie, niveles lógicos TTL (Color de línea: Amarillo) |
| 3             | RD     | in   | Entrada de datos serie, niveles lógicos TTL (Color de línea: Blanco) |
| 4             | GND    | -    | Tierra de señal (Color de línea: Negro)                         |

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Primeros Pasos
-------------

El módulo Sensor de Huella Dactilar se usa típicamente en cajas fuertes - hay un chip DSP de alta potencia que hace el renderizado de imagen, cálculo, búsqueda de características y búsqueda. Conéctalo a cualquier microcontrolador o sistema con serial TTL, y envía paquetes de datos para tomar fotos, detectar huellas, hacer hash y buscar. También puedes inscribir nuevos dedos directamente - hasta 162 huellas dactilares que pueden almacenarse en la memoria FLASH integrada. Hay un LED rojo en la lente que se encenderá durante la toma de fotos para que sepas su condición de funcionamiento.

- Conecta el Sensor al Puerto Digital 2 del Grove - Base Shield.
- Conecta el Grove - Base Shield en Arduino y conecta Arduino a PC usando un cable USB.

Cuando conectes la alimentación, puedes ver el LED rojo parpadear lo que indica que el sensor está funcionando.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/FingerPrint_Sensor1.jpg" /></div>

- Descarga la [Biblioteca del Sensor de Huella Dactilar](https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/Fingerprint_library.rar) y Descomprímela en el archivo de bibliotecas del IDE de Arduino por la ruta: ..\\arduino-1.0.1\\libraries.

La biblioteca puede inscribir y buscar así que es perfecta para cualquier proyecto. Puede ayudarte a funcionar en menos de 10 minutos. Hay básicamente dos requisitos para usar el sensor óptico de huella dactilar. Primero, necesitarás inscribir huellas dactilares - eso significa asignar ID \#'s a cada huella para que puedas consultarlas después. Una vez que hayas inscrito todas tus huellas, puedes fácilmente 'buscar' en el sensor, pidiéndole que identifique qué ID (si alguno) ha sido fotografiado actualmente.

- Abre el código de inscripción directamente por la ruta: **File->Example->FingerPrint->Enroll**.
- Sube el código a Arduino.
- Inicia la Herramienta Serial y Selecciona el ComNum y BaudRate usado por el Arduino.
- Selecciona la opción "SendNew". Envía el ID \# que quieres usar. Puedes usar hasta 162 números ID. Y te pedirá que presiones el dedo al sensor. En ese momento, deberías ver el LED rojo parpadear.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/FingerPrint_Sensor3.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger1.jpg" /></div>

- Si tu presión está bien, podrías ver el siguiente mensaje. Entonces tendrás que repetir el proceso, para obtener una segunda huella limpia. ¡Usa el mismo dedo! En caso de éxito verás el mensaje.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger2.jpg" /></div>

- Si hay un problema como una mala huella o imagen, tendrás que hacerlo de nuevo.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger_Print_Score_2.jpg" /></div>

Una vez que tengas el dedo inscrito, es una buena idea hacer una prueba rápida para asegurarte de que puede encontrarse en la base de datos.

- Abre el código de demostración:fingerprint y súbelo.
- Cuando se te solicite, presiona un dedo diferente/mismo al sensor. Si es el mismo dedo, deberías obtener una coincidencia con el ID \# como se muestra abajo.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger_Print_Score_3.jpg" /></div>

- Si no es un dedo en la base de datos, Este puerto serial no mostrará nada.

:::tip
Más detalles sobre los módulos Grove por favor consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Recursos
--------

- **[Biblioteca]** [Archivo de Biblioteca del Sensor de Huella Dactilar](https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/Fingerprint_library.rar)
- **[Hoja de Datos]** [Hoja de Datos de la Serie ZhianTec ZFM-206 (para esta versión, pero en Chino Simplificado)](https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/ZFM206用户手册V2.1.pdf)
- **[Hoja de Datos]** [Hoja de Datos de la Serie ZhianTec ZFM-20 (para series anteriores, pero en Inglés)](https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/ZFM-user-manualV15.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Fingerprint_Sensor -->

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

