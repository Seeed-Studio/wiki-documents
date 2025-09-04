---
description: Inicio Rápido del SenseCAP M2 Light Gateway
title: Inicio Rápido del SenseCAP M2 Light Gateway
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/SenseCAP_M2_Light_Gateway_Quick_Start
last_update:
  date: 03/23/2023
  author: Yvonne
---

## **Paso 1: Conectar el SenseCAP M2**

Conecta la antena, el adaptador de corriente y el cable ethernet (no es necesario) al hotspot y enciéndelo.

El **LED de alimentación se mostrará** en **rojo**, y en aproximadamente 15s (si usas PoE para alimentar, este tiempo de espera será un poco más largo), el indicador en la parte superior parpadeará en **verde**, indicando que el hotspot se está iniciando.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image1.png)

**Conexión PoE**

SenseCAP M2 soporta PoE (Power on Ethernet) y es compatible con el estándar IEEE 802.3 af. Necesitarás tener un switch PoE adicional que proporcione alimentación DC de 40V-57V como PSE (Power Sourcing Equipment) si tu módem/router no soporta PoE.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image2.png)

## **Paso 2: Conectar SenseCAP M2 a la APP**

- Instala la [App Helium Wallet](https://docs.helium.com/wallets/helium-wallet-app) y la App SenseCAP Hotspot

Crea una cuenta para tu App SenseCAP Hotspot.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image3.png)

- Elige "Helium" y vincula tu Helium Wallet a la App SenseCAP Hotspot.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image4.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image5.png)

- Haz clic en Onboard New Hotspot en la página de Wallet y selecciona "SenseCAP M2" para incorporar

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image6.png)

- Presiona el botón del M2 durante 5s hasta que el indicador azul parpadee lentamente para entrar en modo de configuración y sigue las instrucciones en la App para conectar el SenseCAP M2.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image7.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image8.png)

**NOTA**: Por favor elige "**SenseCAP M2**" para SenseCAP M2 Light Hotspot. Si tienes más de un hotspot alrededor, podrías identificar el hotspot con la dirección MAC de 6 cifras bajo el nombre del hotspot.

- Configurar la Conexión Wi-Fi

Haz clic en "Scan Networks", selecciona el Wi-Fi e ingresa la contraseña; o haz clic en "Use Ethernet Instead" si ya usas un cable ethernet o tarjeta SIM (para la versión 4G).

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image9.png)

## **Paso 3: Agregar SenseCAP M2 a la Blockchain**

- Establece y confirma la ubicación de tu hotspot, luego agrega tu hotspot a la blockchain.

**NOTA:** El SenseCAP M2 Light Hotspot ha cubierto la tarifa de activación de red Helium de \$40 y la primera tarifa de afirmación de ubicación de \$10 (por un valor de \$50 en total) en el precio de compra. Podrías configurar la ubicación y cambiar a otra ubicación si es necesario, pero necesitarás pagar la tarifa de afirmación de ubicación de \$10 nuevamente cada vez que muevas tu hotspot a una nueva ubicación.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image10.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image11.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image12.png)

Ahora has agregado tu SenseCAP M2 a la blockchain (el indicador parpadeará en blanco), pero tu dispositivo aún **no puede proporcionar cobertura Helium**, por favor revisa el paso 4 para activar tu hotspot.

## **Paso 4: Activar el SenseCAP M2 Light Hotspot**

[![cómo canjear la Tarjeta de Licencia SenseCAP](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/redeem.png)](https://www.youtube.com/watch?v=D59QTtMUKdM)

- Inicia sesión en [SenseCAP Dashboard](https://status.sensecapmx.cloud/#/login?redirect=/dashboard) con la cuenta de tu aplicación SenseCAP Hotspot

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image13.png)

- Haz clic en **Redeem License** e ingresa el código de canje de tu tarjeta de canje.

**NOTA**: Por favor no compartas tu código de canje con otros.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image14.png)
![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image15.png)

- Haz clic en el botón Confirm, entonces recibirás una licencia.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image16.png)

- Haz clic en **Apply** y selecciona el hotspot que deseas activar.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image17.png) ![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image18.png)

- Entonces tu hotspot comenzará a proporcionar cobertura Helium LoRaWAN ahora, y el indicador en el dispositivo estará verde.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image19.png)

#### **Comprar Licencia SenseCAP M2 Light Hotspot**

[![cómo comprar Licencia SenseCAP](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/purchase.png)](https://youtu.be/efkWlmRGWmU)

Una vez que la licencia haya expirado, puedes comprarla directamente desde el [SenseCAP Hotspot Dashboard](https://status.sensecapmx.cloud/#/login?redirect=/dashboard) y aplicarla a tu dispositivo sin comprar la tarjeta de canje nuevamente.

- Visita la página License y haz clic en el botón **Purchase License**

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image20.png)

- Selecciona el plan de licencias y la cantidad, luego haz clic en el botón Checkout

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image21.png)

- Confirma tu pedido y paga con PayPal

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image22.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image23.png)

- Entonces puedes verificar tu licencia en la lista **License**

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image24.png)

- Haz clic en **Apply** y selecciona el hotspot que deseas activar.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image25.png)
![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image26.png)

- Entonces tu hotspot comenzará a proporcionar cobertura Helium LoRaWAN ahora, y el indicador en el dispositivo estará verde.

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image27.png)
