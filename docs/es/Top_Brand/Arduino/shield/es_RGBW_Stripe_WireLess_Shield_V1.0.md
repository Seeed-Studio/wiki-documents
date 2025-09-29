---
description: RGBW_Stripe_WireLess_Shield_V1.0
title: RGBW Stripe WireLess Shield V1.0

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/RGBW_Stripe_WireLess_Shield_V1.0
last_update:
  date: 02/02/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW_rev1_face.jpg" alt="pir" width={600} height="auto" /></p>

RGBW Stripe WireLess Shield tiene 4 salidas PWM para conectar tiras LED RGBW.
Cada una puede manejar una carga de 1.5 A con un voltaje de 5 a 24 V.
El control integrado en 5 Arduino proporciona fácilmente energía desde la fuente de alimentación de entrada.
El fusible autorenovable protege la tira LED contra sobrecorriente.
Para el control remoto de la cinta RGB se utiliza el popular transceptor nRF24L01+.
Lo más interesante es que la placa tiene memoria, ¡y ahora puedes actualizar el firmware de tu Arduino por aire!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW_top.jpg" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW_.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/depot/RGBW-Strip-WireLess-Shield-V10-p-2629.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

* Construido sobre arquitectura compatible con Arduino (DualOptiboot)

* Compatibilidad con tiras LED RGB de 12 - 24V

* 4 salidas PWM (RGBW)

* Flash / E2prom SPI de 64kb integrado (para actualizaciones de firmware OTA)

* LED RF de actividad automática integrado (para nRF24L01 +)

* Mini transceptor 2.4G nRF24L01 +

* Fusible autorenovable

* Botón integrado

* Conector compatible con GROVE: I2C

## Diseño y esquemas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW-top.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW-bottom.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/Scheme_RGBW.PNG" alt="pir" width={600} height="auto" /></p>

## Librerías

### Librerías necesarias

### Código de demostración (ejemplo)

```cpp

int L_RED = 6;
int L_GREEN = 9;
int L_BLUE = 3;
int L_WHITE = 5;

int brightness = 0;
int fadeAmount = 5;

void setup()  {
  pinMode(L_RED, OUTPUT);
  pinMode(L_GREEN, OUTPUT);
  pinMode(L_BLUE, OUTPUT);
  pinMode(L_WHITE, OUTPUT);
}

void loop()  {
  // RED
  analogWrite(L_RED, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
  // GREEN
  analogWrite(L_GREEN, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
  // BLUE
  analogWrite(L_BLUE, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
  // WHITE
  analogWrite(L_WHITE, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
}
```

## Seguimiento de versiones

| Revisión | Descripción | Lanzamiento |
|----------|-------------|-------------|
| 1.0 rev 1 | Versión pública | 19.11.2015 |

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>