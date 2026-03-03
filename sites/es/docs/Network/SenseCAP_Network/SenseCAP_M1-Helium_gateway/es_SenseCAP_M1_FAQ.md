---
description: SenseCAP M1 FAQ
title: SenseCAP M1 FAQ
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_FAQ
last_update:
  date: 02/14/2023
  author: Matthew
---

**¿Cómo encuentro el ID MAC de ETH o Wi-Fi?**
------------------------------------------

El ID MAC se encuentra en la etiqueta inferior del Hotspot como se describe a continuación. Verás tanto el ID MAC de ETH como el de Wi-Fi.

![SenseCAP M1 Mac-ID](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-ids.png)

* * *

**¿Cómo encuentro mi SN (Número de Serie) del dispositivo?**
--------------------------------------------------------

El número de serie se encuentra en la etiqueta inferior del Hotspot como se describe a continuación.

![SenseCAP M1 Serial Number](https://www.sensecapmx.com/wp-content/uploads/2022/07/sn.webp)

* * *

**¿Cuál es la diferencia entre la versión de 2G / 4G / 8G RAM?**
----------------------------------------------------------------

2G /4G / 8G se refiere a la diferencia de RAM (memoria de acceso aleatorio) de Raspberry Pi 4 en SenseCAP M1. Para la función de hotspot, no habría diferencia entre diferentes RAM. Además, en la Tienda Online de Seeed, no se supone que elijamos la RAM al comprar SenseCAP M1, ten en cuenta que toda la distribución será aleatoria basada en el stock.

* * *

**¿Cómo puedo averiguar qué versión de RAM tengo?**
------------------------------------------------

Puedes saberlo por el nombre del modelo. M1-X, X se refiere a la RAM. p. ej. M1-2915 se refiere a 2GB RAM mientras que M1-4915 se refiere a 4GB RAM.

* * *

**¿Por qué mi SenseCAP M1 no puede ser testigo de otros Hotspots de Helium?**
--------------------------------------------------------------------

Algunas posibles razones que resultan en señales RF bajas y corta distancia de transmisiones de Hotspots de Helium incluyen:

- Obstáculos, incluyendo edificios, montañas y bosques en un ambiente comparativamente denso
- Posible Interferencia Electromagnética, Interferencia de Línea de Vista, Interferencia de Zona de Fresnel, o Interferencia RF existente alrededor de las ciudades
- Condiciones Climáticas
- Margen de Operación del Sistema, Sombreado, y/o Link Badger.

* * *

**¿Por qué las ganancias/recompensas de mi SenseCAP M1 no son como esperaba?**
--------------------------------------------------------------------

Hay un mecanismo complejo en las ganancias y recompensas. Mientras tu configuración de Hotspot sea correcta, ubicación, sin estado de retransmisión, y la conexión a internet sea sólida, entonces deberías estar bien.  
Si estás confundido sobre el mecanismo, se te anima a discutir esto en el canal de Helium para buscar más explicaciones. La **[Documentación de Helium](https://docs.helium.com/)** también es útil para que aprendas más.

* * *

**¿Cómo mejorar las señales RF de SenseCAP M1?**
-------------------------------------------------

Configura y coloca tu dispositivo en un ambiente amplio y libre de obstáculos (p. ej., cerca de tu ventana o coloca la antena afuera, como en un techo).

* * *

**¿Cuántos voltios de electricidad podría usar aproximadamente SenseCAP M1?**
---------------------------------------------------------------------------

Aproximadamente 5W, justo como el consumo de electricidad de una bombilla ordinaria.

* * *

**¿Cuál es la distancia recomendada entre gateways?**
------------------------------------------------------

Los Hotspots no deberían desplegarse demasiado cerca uno del otro. Una buena regla general es proporcionar una distancia mínima de 300 a 500 metros entre Hotspots; aunque esto podría variar dependiendo del ambiente (en una ciudad densa más cerca, y un ambiente más rural más lejos).

* * *

**¿Hay tarifas adicionales para configurar SenseCAP M1?**
----------------------------------------------

El dispositivo incluye una tarifa de activación cubierta de \$40 para que los usuarios configuren SenseCAP M1 y una tarifa de \$10 para establecer la ubicación de SenseCAP M1 en la App de Helium.

Solo pagarás tarifas adicionales si reafirmas a otra ubicación después de la primera vez, que es aproximadamente \$10. Para información detallada sobre tarifas, por favor consulta la página de Tarifas de Transacción de Helium.

* * *

**¿SenseCAP M1 soporta conectarse a un servidor de terceros que no sea Helium?**
--------------------------------------------------------------------------------

No, el gateway LoRaWAN SenseCAP M1 solo es compatible con el servidor de Red de Helium.

* * *

**¿SenseCAP M1 soporta PoE?**
---------------------------------

No. Se usa un adaptador de corriente de 5V-3A para alimentar la unidad a través del conector Type-C junto al puerto Ethernet. Necesitarás un inyector y divisor PoE para soportar POE en el Sensecap M1.

* * *

**Como un gateway interior, ¿puede usarse en exteriores?**
--------------------------------------------------

SenseCAP M1 es un gateway interior, por lo que no está diseñado para resistir ambientes exteriores duros y no debería colocarse en un ambiente exterior sin ninguna protección extra.

* * *

**¿Los sensores LoRaWAN de SenseCAP son compatibles con SenseCAP M1 Gateway?**
---------------------------------------------------------------------

Sí. Mientras los nodos finales (es decir, la serie de productos de Sensores LoRaWAN de SenseCAP) sean compatibles con y estén registrados en la Red de Helium, pueden trabajar con el SenseCAP M1 Gateway.

* * *

**¿Los SenseCAP M1 son hotspots completos o hotspots ligeros?**
------------------------------------------------------

El SenseCAP M1 LoRaWAN Indoor Gateway es un hotspot completo que soporta tanto POC como transferencia de datos.

* * *

**¿Habrá un hotspot para uso exterior?**
--------------------------------------------

Actualmente, el SenseCAP M1 es solo para uso interior pero consideraremos la solicitud

* * *

**¿Habrá hotspots ligeros también?**
-----------------------------------------

Sí, el SenseCAP M2 Data Only es un lightspot.

* * *

**¿Habrá AS923, AU915, IN865, y otras frecuencias?**
-------------------------------------------------------------

Actualmente, solo están disponibles US915 (con FCC) y EU868 (con CE). Otras frecuencias aún no son compatibles. Hemos notado la necesidad de diferentes frecuencias. La especificación del dispositivo de hardware está en el rango de 902Mhz ~ 928Mhz / 863Mhz ~ 870Mhz, por lo tanto es configurable a diferentes frecuencias dentro de este rango. SIN EMBARGO, después de la configuración, el producto tiene que pasar por certificaciones específicas para poder ingresar a diferentes mercados.

Actualmente, nuestro equipo se está enfocando en la cadena de suministro y fabricación de US915 y EU868.

* * *

**¿Todos los Gateways LoRaWAN SenseCAP son hotspots de Helium?**
----------------------------------------------------------------

Cuando buscas SenseCAP en Google, encontrarás que hay otros gateways también bajo el nombre SenseCAP. Ten en cuenta que no todos los gateways de marca SenseCAP son hotspots de Helium, SenseCAP M1 LoRaWAN Indoor Gateway es el único que soporta la Red Helium por ahora.

* * *

**Si compro el hotspot en Europa y lo llevo a India, ¿cambiará automáticamente a 865 MHz?**
-------------------------------------------------------------------------------------------

Sí, cambiará automáticamente. Pero solo tenemos certificación CE y FCC, no tenemos certificación BIS que es requerida en India.

* * *

**¿El SenseCAP M1 también está listado en la App de Helium?**
------------------------------------------------------------

¡Sí, SenseCAP M1 ya ha sido añadido a la App de Helium!

* * *

**¿Qué tipo de conector de antena tiene el Sensecap M1?**
---------------------------------------------------------

SenseCAP M1 tiene conector hembra RP-SMA, y la antena tiene conector macho RP-SMA. Todas nuestras antenas de fibra de vidrio en stock tienen un conector macho tipo N, con un cable LMR200 incluido con conector hembra N y conector macho RP-SMA.

![SenseCAP M1 Antenna Connection](https://www.sensecapmx.com/wp-content/uploads/2022/06/connectors-1.png)

* * *

**¿Con qué voltaje/amperaje funciona el dispositivo?**
------------------------------------------------------

El voltaje es 5V DC.

* * *

**¿Conoces el tamaño/medidas del PCB?**
---------------------------------------

El tamaño del dispositivo es 154×100×44 mm y el peso es 370g.

* * *

**A algunas personas no les gusta el 5GHz en su área, ¿es posible apagar el WiFi en el hotspot mismo?**
-------------------------------------------------------------------------------------------------------

Este dispositivo es un transmisor Wi-fi. Si no está conectado al AP, automáticamente dejará de emitir ondas electromagnéticas.

* * *

**¿Por qué mi SenseCAP M1 no cambia al modo de parpadeo lento al presionar el botón?**
--------------------------------------------------------------------------------------

Por favor mantén presionado el botón por 6-10 segundos y no lo sueltes. A veces puede que tengas que presionar fuerte el botón en la parte trasera. Si necesitas soporte adicional, por favor visítanos en Discord aquí.  
Ten en cuenta que si SenseCAP M1 está actualizando su firmware, presionar el botón puede que no cambie el LED azul al modo de parpadeo lento, por favor intenta 10-15 minutos después.

* * *

**¿Cuándo sale el SenseCAP M1 del modo de parpadeo lento?**
-----------------------------------------------------------

El modo de parpadeo lento durará aproximadamente 10 minutos y luego volverá al modo de LED constante o parpadeo rápido.

Si el SenseCAP M1 sale del modo de parpadeo lento durante la configuración, por favor presiona el botón por 5-10 segundos para volver al modo de parpadeo lento y reinicia tu configuración.

* * *

**¿Por qué el LED azul siempre permanece en modo de parpadeo rápido?**
----------------------------------------------------------------------

Eso significa que SenseCAP M1 no está conectado a Internet o está tratando de conectarse a la Red P2P de Helium. Después de cada arranque, SenseCAP M1 puede tomar 5-20 minutos para conectarse a la Red P2P de Helium, lo cual depende de la calidad de tu red.

Si SenseCAP M1 ha estado arrancado por más de 20 minutos, por favor verifica el estado de tu red, asegúrate de que el cable Ethernet o el Wi-Fi estén funcionando bien para SenseCAP M1.

Cuando uses un cable Ethernet, por favor presiona firmemente el cable Ethernet en el puerto para escuchar un "clic" para asegurar que el cable no falle y para asegurar que no esté suelto.

* * *

**Pasos para verificar la versión del Firmware de tu Hotspot:**
---------------------------------------------------------------

1. Mantén presionado el botón Bluetooth del Hotspot por 6-10s, el LED azul parpadeará lentamente, luego empareja tu hotspot.
2. Ejecuta Diagnósticos y encuentra la versión del Firmware del Hotspot. Alternativamente puedes usar el Panel de SenseCAP una vez registrado para verificar tu firmware.

![SenseCAP M1 Firmware Version](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-1.png)

![SenseCAP M1 Firmware Version Step2](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-1-1.png)

![SenseCAP M1 Firmware Version Step3](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-2.png)

* * *

**¿Cuál es la potencia de transmisión del SenseCAP M1 sin la antena?**
---------------------------------------------------------------------

| Plan de Frecuencia | EU868 | US915 |
|---|---|---|
| Certificación | CE | FCC |
| Potencia Máxima de Transmisión Regulatoria | 14 dBm | 30 dBm |
| Potencia de Transmisión Con Antena de Stock | 13.487 dBm | 26.7 dBm |
| Potencia de Transmisión Sin Antena | 10.687 dBm | 25 dBm |
| Ganancia de Antena de Stock | 2.8 dBi | 2.6 dBi |

* * *

**¿Qué son las Reglas de Control Automático del Ventilador?**
---------------------------------------

![Lógica de Control Automático del Ventilador SenseCAP M1](https://www.sensecapmx.com/wp-content/uploads/2022/07/fan-control-logic-1.png)

* * *

**¿Qué debo hacer si el uso de mi tarjeta SD está por encima del 85%?**
------------------------------------------------------

Normalmente no necesitas preocuparte por el uso de la tarjeta SD ya que el sistema la gestionará automáticamente. Si encuentras que tu tarjeta SD no puede recuperarse del uso completo, puedes reiniciar el dispositivo para que vuelva a la normalidad.

Si aún encuentras que no puede resolver el problema, o el soporte técnico te sugiere restablecer el bloque, puedes hacer clic aquí para aprender cómo 'restablecer bloques'.
