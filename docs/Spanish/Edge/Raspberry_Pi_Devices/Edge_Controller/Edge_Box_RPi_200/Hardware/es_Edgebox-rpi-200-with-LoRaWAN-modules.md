---
description: EdgeBox RPi 200 con módulo LoRaWAN®
title: EdgeBox RPi 200 con módulo LoRaWAN®
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/EdgeBox-rpi-200-with-LoRaWAN-module
last_update:
  date: 02/11/2025
  author: Erick González
---

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

La serie EdgeBox-RPi-200 son controladores industriales de computación en el borde (Edge Computing) basados en Raspberry Pi, diseñados para múltiples propósitos en entornos industriales. Diseñados como hardware industrial de alta escalabilidad y robustez, con una amplia variedad de recursos de entrada y salida (I/O), y respaldados por el sólido ecosistema de software industrial de Raspberry Pi, son una opción ideal para la automatización inteligente y soluciones del Internet Industrial de las Cosas (IIoT).

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> ¡Consíguelo Ya! 🖱️</font></span></strong>
    </a>
</div>

## Módulo LoRaWAN WM1302

> LoRaWAN® es una marca utilizada bajo licencia de la LoRa Alliance®.
La marca LoRa® es una marca comercial de Semtech Corporation o sus subsidiarias.

:::note
        Recientemente hemos lanzado la serie Wio-E5 basada en el módulo Wio-E5. Haz clic [aquí](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3) para conocer a los nuevos miembros de la familia LoRa-E5, que incluyen el [Módulo Wio-E5](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/), el [Módulo Grove](https://wiki.seeedstudio.com/Grove_LoRa_E5_New_Version/), las [placas de desarrollo mini](https://wiki.seeedstudio.com/LoRa_E5_mini/) y el [Kit de Desarrollo](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/). Para aprender más sobre cómo crear un nodo LoRaWAN® con el paquete STM32Cube MCU para la serie STM32WL (SDK), unirse y enviar datos a la red LoRaWAN®, consulta las páginas wiki de las [placas de desarrollo mini](https://wiki.seeedstudio.com/LoRa_E5_mini/) y el [Kit de Desarrollo](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/).
:::

El módulo WM1302 es una nueva generación de módulos gateway LoRaWAN® con factor de forma mini-PCIe. Basado en el chip de banda base LoRaWAN® Semtech® SX1302, el WM1302 desbloquea un mayor potencial de capacidad de transmisión inalámbrica de largo alcance para productos gateway. Ofrece mayor sensibilidad, menor consumo de energía y una temperatura de funcionamiento más baja en comparación con los chips LoRa® SX1301 y SX1308 anteriores.

El módulo gateway LoRaWAN® WM1302 está disponible en versiones SPI y USB en las bandas de frecuencia US915 y EU868, lo que permite una amplia gama de opciones de planes de frecuencia LoRaWAN®, incluyendo EU868, US915, AS923, AS920, AU915, KR920 e IN865.

El módulo WM1302 cuenta con certificaciones CE, FCC y Telec, lo que ayuda a simplificar el proceso de desarrollo y certificación de dispositivos gateway LoRaWAN®.

WM1302 está diseñado para aplicaciones M2M e IoT y puede aplicarse ampliamente en escenarios con soporte para gateways LPWAN. Es una opción ideal para reducir significativamente las dificultades técnicas y el tiempo de desarrollo de dispositivos gateway LoRa®, incluyendo gateways LoRaWAN® y hotspots.


## Instalación de hardware

**Paso 1:** Desmontar el EdgeBox-RPI-200

**Paso 2:** Insertar el módulo LoRaWAN® en la ranura mini-PCIe

**Paso 3:** Volver a ensamblar el EdgeBox-RPI-200 y encenderlo

**Paso 4:** Sigue los pasos a continuación según la versión de tu módulo:

:::note
Los siguientes pasos requieren acceso directo al sistema operativo del EdgeBox-RPI-200, por lo que debes elegir un método de conexión, ya sea mediante SSH o utilizando una pantalla, un mouse y un teclado con la aplicación `Terminal APP`, según tu preferencia.
:::

<!-- Código -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Módulo WM1302 USB" label="Módulo WM1302 USB">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> ¡Consíguelo ya! 🖱️</font></span></strong>
    </a>
</div>


En la aplicación Terminal o en tu herramienta de línea de comandos preferida

**Paso 5.** Escribe `sudo raspi-config` en la línea de comandos para abrir la herramienta de configuración de software de Raspberry Pi:

- Selecciona **Interface Options**  
- Selecciona **I2C**, luego selecciona **Yes** para habilitarlo  
- Selecciona **Serial Port**, luego selecciona **No** en "Would you like a login shell..." y selecciona **Yes** en "Would you like the serial port hardware..."  

Después de esto, reinicia Raspberry Pi para asegurarte de que estos ajustes funcionen correctamente.

**Paso 6.** Descarga el código de WM1302 y compílalo.

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**Paso 7.** Copia el script reset_lgw.sh

```
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**Paso 8.** Reemplaza el puerto USB del módulo LoRaWAN® en el archivo de configuración `global_conf.json.sx1250.US915.USB`:

**Step 8-1.**
Para obtener el puerto USB específico, sigue los pasos a continuación:

```sh
lsusb
```

En mi caso, nuestro WM1302 está utilizando el `STMicroelectronics Virtual COM Port`, por lo que podemos obtener el ID de producto `5740`.

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device.png"/></div>

### **Paso 8-2. Obtener el puerto del dispositivo USB**
Ejecuta el siguiente comando para buscar el ID de producto `5740`:

```sh
sudo dmesg | grep 5740
```

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device-1.png"/></div>

Después, podemos obtener el puerto del dispositivo con el siguiente comando:

```sh
sudo dmesg | grep 1-1.3
```

En mi caso, el dispositivo USB es `ttyACM0`.

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device-2.png"/></div>

---

## **Modificar el archivo de configuración**

Ahora, modificamos el dispositivo USB en el archivo de configuración  
`global_conf.json.sx1250.US915.USB` usando `sed`.

El formato del comando es el siguiente:

```sh
sed -i 's/ttyACM0/el_resultado_de_arriba/g' global_conf.json.sx1250.frequency_of_your_module.USB
```

Por ejemplo, en mi caso sería:

```sh
sed -i 's/ttyACM0/ttyACM0/g' global_conf.json.sx1250.US915.USB
```

---

## **Paso 9. Iniciar el módulo LoRaWAN®**

Ejecuta el siguiente comando para iniciar el módulo LoRaWAN® según la frecuencia de operación de tu WM1302:

```sh
# Versión USB
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/Edge_Box/lora-activate.png"/></div>

Por último, elige tu servidor de red LoRa® preferido y usa el `EUI ID` mostrado en la imagen para configurar la conexión.



</TabItem>
<TabItem value="WM1302 SPI Module" label="WM1302 SPI Module">


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo Ahora 🖱️</font></span></strong>
    </a>
</div>


**Paso 5.** Escribe `sudo raspi-config` en la línea de comandos para abrir la herramienta de configuración de software de Raspberry Pi:

- Selecciona Opciones de Interfaz
- Selecciona SPI y luego **Sí** para habilitarlo
- Selecciona I2C y luego **Sí** para habilitarlo
- Selecciona Puerto Serie y luego **No** para "¿Te gustaría una terminal de inicio de sesión...?" y selecciona **Sí** para "¿Te gustaría el hardware del puerto serie...?"

Después de esto, reinicia Raspberry Pi para asegurarte de que estas configuraciones funcionen.

**Paso 6.** Descarga el [código fuente de WM1302](https://github.com/peterpanstechland/sx1302_hal.git) y compílalo.

:::note
Esta es una versión modificada de la biblioteca sx1302 hal, porque el sensor de temperatura del módulo WM1302 no es accesible en Edgebox-RPI-200, por lo que el código fuente se modificó en consecuencia. Además, la configuración de pines en `reset_lgw.sh` también se ajustó.
:::

```sh
cd ~/
git clone https://github.com/peterpanstechland/sx1302_hal.git
cd sx1302_hal
git checkout Edgebox-RPI-200
sudo make
```

**Paso 7.** Copia el script reset_lgw.sh

```sh
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**Paso 8.** Iniciar el Módulo LoRaWAN®

Ejecuta el siguiente código para iniciar el módulo LoRaWAN® según la versión de frecuencia de operación de tu WM1302.

```sh
$ cd ~/sx1302_hal/packet_forwarder
$ ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/wm1302-spi.png"/></div>

Por favor, elige tu servidor de red LoRa® preferido y usa el `EUI ID` como se muestra en la imagen de arriba para configurar las conexiones.

</TabItem>
</Tabs>

<!-- Fin del Código -->

## Soporte Técnico y Discusión

¡Gracias por elegir nuestros productos! Estamos aquí para proveerte de nuestra ayuda y soporte para asegurar que tu experiencia con nuestros productos sea tan buena como sea posible. Te ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
