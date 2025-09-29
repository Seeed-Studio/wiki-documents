---
description: XIAOESP32C3-FAQ
title: Cómo verificar el voltaje de la batería
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/check_battery_voltage
last_update:
  date: 6/28/2023
  author: cheng.tang
---


Debido a la limitación del número de pines en el ESP32C3, los ingenieros no tenían pines adicionales para asignar a la batería para la medición de voltaje con el fin de asegurar que el XIAO ESP32C3 tenga el mismo número de GPIOs que las otras series XIAO disponibles.

Pero si prefieres usar un pin separado para la medición del voltaje de la batería, puedes referirte a la operación genial de [msfujino](https://forum.seeedstudio.com/u/msfujino). También nos gustaría dar un agradecimiento especial a [msfujino](https://forum.seeedstudio.com/u/msfujino) por toda la experiencia y esfuerzos compartidos para el XIAO ESP32C3.

**La idea básica de operación es:** El voltaje de la batería fue dividido por 1/2 con 200k y conectado al puerto A0 para que el voltaje pudiera ser monitoreado.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/3.png" alt="pir" width="300" height="auto"/></div>

La hoja de datos dice nominalmente 2500mV de conversión AD a escala completa, pero hay una gran variación de chip a chip, en realidad ±10%. Mi chip fue de 2700mV a escala completa.

Afortunadamente, el valor de corrección calibrado para cada chip está escrito en el área de fusible, y al usar la función `alalogReadMilliVolts()`, puedo leer el valor de voltaje corregido sin hacer nada especial.

El resultado de la conversión AD y el voltaje medido por el multímetro concuerdan bien entre sí con un error de aproximadamente 5 mV, lo cual no es un problema en el uso práctico.

Además, durante la comunicación en particular, ocurrieron errores tipo pico, que tuvieron que ser promediados 16 veces para eliminarlos.

El siguiente es el procedimiento para probar el voltaje de la batería.

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
Lo anterior es del usuario del foro de Seeed Studio **msfujino**, publicado originalmente en:
[https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535](https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535).
Recomendamos que tengas buenas habilidades prácticas y mejores habilidades de soldadura antes de intentar medir el voltaje de la batería basándote en lo anterior, y ten cuidado con acciones peligrosas como cortocircuitar baterías.
:::