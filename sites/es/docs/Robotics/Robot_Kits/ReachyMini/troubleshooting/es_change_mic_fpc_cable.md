---
description: Tutorial paso a paso para reemplazar un cable FPC dañado en el conjunto del micrófono de Reachy Mini.
title: Cambiar el cable FPC del micrófono
slug: /reachymini_troubleshooting_change_mic_fpc_cable
keywords:
  - fpc cable
  - microphone
  - replacement
  - repair
  - tutorial
  - damaged cable
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-28'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/es/reachymini_troubleshooting_change_mic_fpc_cable/
---

# Tutorial: ¿Cómo cambiar el cable FPC del micrófono de Reachy Mini?

## Introducción
Es posible que tu micrófono deje de funcionar debido a un cable FPC dañado. Este tutorial te guiará a través del proceso de cambio del cable FPC del micrófono de Reachy Mini.

## Ejemplo de cable FPC dañado
Aquí tienes un ejemplo de un cable FPC dañado del micrófono:
![Damaged FPC cable](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/fpc_collage.jpg)

## Nuevo cable FPC para el micrófono
Para cambiar el cable FPC del micrófono, necesitarás conseguir un nuevo cable FPC que coincida con las especificaciones del original.

Las especificaciones del cable del micrófono son las siguientes:
- Cable flexible plano FFC/FPC
- 12 pines
- Espaciado de 0,5 mm
- Tipo A (conectores en el mismo lado)
- Longitud de 15 mm

Aquí tienes algunas referencias si estás buscando un reemplazo para el cable de tu micrófono:
- [Amazon](https://www.amazon.fr/dp/B09TR4X1BP?ref=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&ref_=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&social_share=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z)
- [Farnell](https://fr.farnell.com/molex/15020-0127/cordon-ffc-12-cond-152mm-blanc/dp/3862090)

## Pasos para cambiar el cable FPC del micrófono
1. Apaga tu Reachy Mini y desconéctalo de la fuente de alimentación.
2. Abre la cabeza de Reachy Mini siguiendo las instrucciones de la guía de montaje.
3. Localiza el micrófono y el cable FPC conectado a él.
4. Desconecta con cuidado el cable FPC de la placa de la cabeza.

Ahora deberías tener el conjunto micrófono + parte superior de la cabeza con el cable FPC dañado como en la imagen de abajo:
![Microphone assembly with damaged FPC cable](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/microphone_assembly.jpg)

5. Abre suavemente la carcasa de goma de aislamiento primero por un lado. No se necesita ninguna herramienta, solo usa los dedos para despegarla.
![Peeling off the rubber isolation case](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/peeling_rubber_case_1.jpg)
6. Haz lo mismo en el otro lado de la carcasa de goma de aislamiento. Ten cuidado de no tirar bruscamente.
![Peeling off the rubber isolation case](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/peeling_rubber_case_2.jpg)
7. Retira la carcasa de goma de aislamiento y déjala a un lado.
![Rubber isolation case removed](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/rubber_case_removed.jpg)
8. Ahora puedes ver el cable FPC y la placa del micrófono. Retira suavemente la cinta negra y desconecta el cable FPC de la placa del micrófono. Ten cuidado de no dañar los conectores.
![Disconnecting the FPC cable from the microphone board](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/disconnect_fpc_microphone.jpg)
9. Toma el nuevo cable FPC y conéctalo a la placa del micrófono realizando los pasos en orden inverso. Asegúrate de que esté bien conectado, pero no apliques demasiada fuerza.
10. Vuelve a colocar la carcasa de goma de aislamiento en el conjunto del micrófono y presiónala suavemente para fijarla en su sitio.

Ahora puedes volver a conectar el nuevo cable FPC a la placa de la cabeza y volver a montar la cabeza de Reachy Mini siguiendo las instrucciones de la guía de montaje.
