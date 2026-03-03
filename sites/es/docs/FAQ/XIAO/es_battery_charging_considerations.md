---
description: XIAO nRF52840(Sense)-FAQ
title: ¿Cuáles son las consideraciones al usar XIAO nRF52840 (Sense) para carga de batería?
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/battery_charging_considerations
last_update:
  date: 6/28/2023
  author: cheng.tang
---

<!-- ### Q3: ¿Cuáles son las consideraciones al usar XIAO nRF52840 (Sense) para carga de batería? -->

Cuando P0.14 (D14) desactiva la función ADC a un nivel alto de 3.3V, P0.31 estará en el límite de voltaje de entrada de 3.6V. Existe el riesgo de quemar el pin P0.31.

Actualmente para este problema, recomendamos que los usuarios no desactiven la función ADC de P0.14 (D14) o configuren P0.14 (D14) a alto durante la carga de la batería.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/14.png" alt="pir" width={800} height="auto" /></p>