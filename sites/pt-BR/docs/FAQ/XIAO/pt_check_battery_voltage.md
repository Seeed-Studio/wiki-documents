---
description: XIAOESP32C3-FAQ
title: Como verificar a tensão da bateria
slug: /check_battery_voltage
last_update:
  date: 6/28/2023
  author: cheng.tang
createdAt: '2023-07-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/check_battery_voltage/
---


Devido à limitação do número de pinos no ESP32C3, os engenheiros não tinham pinos extras para alocar à bateria para medição de tensão, a fim de garantir que o XIAO ESP32C3 tivesse o mesmo número de GPIOs que as outras séries XIAO disponíveis.

Mas se você preferir usar um pino separado para medição da tensão da bateria, pode consultar a operação genial de [msfujino](https://forum.seeedstudio.com/u/msfujino). Também gostaríamos de agradecer especialmente a [msfujino](https://forum.seeedstudio.com/u/msfujino) por toda a experiência e esforços compartilhados para o XIAO ESP32C3.

**A ideia básica de funcionamento é:** A tensão da bateria foi dividida por 1/2 com 200k e conectada à porta A0 para que a tensão pudesse ser monitorada.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/3.png" alt="pir" width="300" height="auto"/></div>

A folha de dados indica nominalmente conversão AD de escala total de 2500mV, mas há uma grande variação de chip para chip, na verdade ±10%. Meu chip tinha 2700mV de escala total.

Felizmente, o valor de correção calibrado para cada chip está escrito na área de fusíveis e, usando a função `alalogReadMilliVolts()`, posso ler o valor de tensão corrigido sem fazer nada de especial.

O resultado da conversão AD e a tensão medida pelo multímetro concordam bem entre si, com um erro de cerca de 5 mV, o que não é um problema no uso prático.

Além disso, especialmente durante a comunicação, ocorreram erros em forma de picos, que tiveram que ser suavizados por meio de média 16 vezes para removê-los.

A seguir está o procedimento para testar a tensão da bateria.

```cpp
void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);         // ADC
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt = Vbatt + analogReadMilliVolts(A0); // ADC with correction   
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // attenuation ratio 1/2, mV --> V
  Serial.println(Vbattf, 3);
  delay(1000);
}
```

:::tip
O conteúdo acima é do usuário do fórum da Seeed Studio **msfujino**, originalmente postado em:
[https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535](https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535).
Recomendamos que você tenha boas habilidades práticas e melhores habilidades de soldagem antes de tentar medir a tensão da bateria com base no que foi descrito acima, e que tenha cautela com ações perigosas, como curto-circuitar baterias.
:::
