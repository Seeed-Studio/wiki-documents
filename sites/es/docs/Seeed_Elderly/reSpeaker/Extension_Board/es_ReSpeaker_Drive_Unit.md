---
description: Unidad de Altavoz ReSpeaker
title: Unidad de Altavoz ReSpeaker
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ReSpeaker_Drive_Unit
last_update:
  date: 1/12/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/Meow_King_Drive_Unit.jpg)

La Unidad de Altavoz ReSpeaker está especialmente diseñada para ReSpeaker Core, como una unidad de altavoz separada.

Con esta unidad de altavoz puedes construir tu propio altavoz inteligente con Amazon Alexa Voice Services u otros servicios de voz. Además, soporta Airplay, lo que significa que puedes transmitir tu música a través de teléfono inteligente, PC y Mac. Y por supuesto, reproducir música local también es posible.

ReSpeaker Core contiene una potente capacidad de extensión, esperamos que pueda ayudarte a habilitar voz en tu prototipo/producto fácilmente.

## Características

- Batería recargable incluida
- Botón táctil
- Soporte para Airplay
- La impedancia es 4Ω, y la Potencia Nominal es 5W
- LED indicador en el ReSpeaker Core

## Especificaciones

- Potencia Nominal: 5W
- Impedancia: 4Ω
- SNR: ≥ 75dBA
- Sensibilidad: 550 ± 50mV
- Grado de Distorsión: ≤ 0.5%
- Respuesta de Frecuencia: 85Hz - 20kHz
- Fuente de Alimentación: 5V a través de USB o a través de batería de 3.7V, 1500mAh
- Diámetro del Altavoz: 40mm

## Guía de uso inmediato

### Preparar el ReSpeaker Core

Para manejar la unidad de altavoz Meow King, el firmware para ReSpeaker Core debe ser actualizado. Para conocer las diferencias entre el firmware original de fábrica y este firmware, por favor consulta el registro de cambios [aquí](https://onedrive.live.com/?authkey=%21AKD3ZD6g0DE2M9E&cid=5219529519B9B6A1&id=5219529519B9B6A1%21720&parId=5219529519B9B6A1%21721&o=OneUp).

Ahora actualicemos el firmware. Primero, descarga `ramips-openwrt-v1.0.01-LinkIt7688-squashfs-sysupgrade.bin` desde [OneDrive](https://1drv.ms/f/s!AqG2uRmVUhlShUyg92Q-oNAxNjPR). Copia el firmware a la tarjeta SD y luego conecta la tarjeta SD al ReSpeaker Core. Sigue [las instrucciones aquí](https://wiki.seeedstudio.com/es/ReSpeaker_Core/#2-connect-to-serial-console) para obtener la consola serial. Ten en cuenta que, para que el USB serial funcione necesitamos restaurar [el firmware por defecto](https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/res/respeaker_arduino_library/examples/pixels_pattern/pixels_pattern.ino) para el chip Arduino (ATMega32U4) si lo hemos cambiado. Después de obtener el USB serial, escribe los siguientes comandos para actualizar el firmware:

```shell
mount /dev/mmcblk0p1 /mnt
cd /mnt
sysupgrade -n -F ramips-openwrt-v1.0.01-LinkIt7688-squashfs-sysupgrade.bin
```

Después de que la imagen del sistema haya sido escrita, el ReSpeaker Core se reiniciará.

### Ensamblaje

Conecta tu ReSpeaker Core a la unidad de altavoz Meow King como se muestra en la imagen a continuación.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/mk_1.jpg" /></div>

Presiona el logo de encendido por más de 5 segundos, la unidad de altavoz se encenderá, y también la placa ReSpeaker Core.

:::note
El circuito de control de energía está en la unidad de altavoz, incluso cuando hayas desconectado el ReSpeaker Core, presionar el logo de encendido por más de 5 segundos aún encenderá la unidad de altavoz.
:::

Para apagar todo el dispositivo, por favor presiona el logo de encendido por más de 5 segundos nuevamente.

Cuando el dispositivo esté encendido, el ReSpeaker Core entrará en el proceso de arranque. El anillo LED se iluminará con color rojo por 1 segundo, indicando que el ReSpeaker Core se está iniciando.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/mk_2.jpg" /></div>

Ahora espera unos segundos, busca tu teléfono inteligente y prepárate para transmitir tu música a la unidad de altavoz Meow King.

### Transmite tu música

#### Para iOS

1. Conéctate a la misma red Wi-Fi en tu dispositivo iOS y ReSpeaker.
2. En tu dispositivo iOS, desliza hacia arriba desde la parte inferior de tu pantalla para abrir el Centro de Control.
3. En el Centro de Control, desliza horizontalmente para encontrar la pantalla de Reproducción Actual.
4. Selecciona ReSpeaker como se muestra en la siguiente imagen:

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/airplay.png" /></div>

5. Conecta tus auriculares/altavoz al respeaker, entonces podrás disfrutar la música ahora.

#### Para Android

1. Conecta tu teléfono inteligente al **Wi-Fi de ReSpeaker**.
2. En tu teléfono inteligente, abre un software cliente AirPlay, como: *AllConnect*.
3. Selecciona ReSpeaker como se muestra en la siguiente imagen:

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/ReSpeaker_Drive_Unit/img/dlna.png" width="50%" height="50%" />
</div>

4. Conecta tus auriculares/altavoz al respeaker, entonces podrás disfrutar la música ahora.

:::note
Un consejo adicional es que, trata de subir el volumen de tu aplicación reproductora si no escuchas sonido después de la reproducción.
:::

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