---
description: XIAO nRF52840(Sense)-FAQ
title: Quais são as considerações ao usar o XIAO nRF52840 (Sense) para carregamento de bateria?
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /battery_charging_considerations
last_update:
  date: 6/28/2023
  author: cheng.tang
createdAt: '2023-07-05'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/battery_charging_considerations/
---

<!-- ### Q3: Quais são as considerações ao usar o XIAO nRF52840 (Sense) para carregamento de bateria? -->

Quando P0.14 (D14) desativa a função ADC em um nível alto de 3,3 V, P0.31 ficará no limite de tensão de entrada de 3,6 V. Há risco de queimar o pino P0.31.

Atualmente, para esse problema, recomendamos que os usuários não desativem a função ADC de P0.14 (D14) nem configurem P0.14 (D14) para nível alto durante o carregamento da bateria.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/14.png" alt="pir" width={800} height="auto" /></p>
