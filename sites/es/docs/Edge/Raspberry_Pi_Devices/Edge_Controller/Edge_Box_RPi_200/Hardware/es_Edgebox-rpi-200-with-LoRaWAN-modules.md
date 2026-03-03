---
description: EdgeBox RPi 200 con Módulo LoRaWAN®
title: EdgeBox RPi 200 con Módulo LoRaWAN®
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/EdgeBox-rpi-200-with-LoRaWAN-module
last_update:
  date: 7/14/2023
  author: Peter Pan
---

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

La serie EdgeBox-RPi-200 son controladores de computación de borde industrial todo-en-uno basados en Raspberry Pi, que combinan múltiples propósitos industriales. Diseñados como hardware industrial robusto y de alta escalabilidad, montados con recursos de E/S abundantes y respaldados por el gran ecosistema de software industrial de Raspberry Pi, es una opción ideal para automatización inteligente y soluciones de Internet Industrial de las Cosas (IIoT).

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Módulo LoRaWAN WM1302

> LoRaWAN® es una marca utilizada bajo licencia de LoRa Alliance®.
La marca LoRa® es una marca comercial de Semtech Corporation o sus subsidiarias.

:::note
        Recientemente hemos lanzado la Serie Wio-E5 basada en el módulo Wio-E5. Haz clic [aquí](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3) para conocer los nuevos miembros de la familia LoRa-E5 desde el [Módulo Wio-E5](https://wiki.seeedstudio.com/es/LoRa-E5_STM32WLE5JC_Module/) [módulo Grove](https://wiki.seeedstudio.com/es/Grove_LoRa_E5_New_Version/), [placas de desarrollo mini](https://wiki.seeedstudio.com/es/LoRa_E5_mini/) hasta [Kit de Desarrollo](https://wiki.seeedstudio.com/es/LoRa_E5_Dev_Board/). Para aprender más sobre crear un Nodo Final LoRaWAN® con el Paquete MCU STM32Cube para la serie STM32WL (SDK), para unirse y enviar datos a la Red LoRaWAN®, lee más en las páginas wiki para [placas de desarrollo mini](https://wiki.seeedstudio.com/es/LoRa_E5_mini/) y [Kit de Desarrollo](https://wiki.seeedstudio.com/es/LoRa_E5_Dev_Board/).
:::

El módulo WM1302 es una nueva generación de módulo de gateway LoRaWAN® con factor de forma mini-PCIe. Basado en el chip LoRaWAN® de banda base Semtech® SX1302, WM1302 desbloquea el mayor potencial de capacidad de transmisión inalámbrica de largo alcance para productos de gateway. Presenta mayor sensibilidad, menor consumo de energía y menor temperatura de operación que los chips LoRa® anteriores SX1301 y SX1308.

El módulo de gateway LoRaWAN® WM1302 tiene versiones SPI y USB en las bandas de frecuencia US915 y EU868, permitiéndote tener una amplia gama de opciones de planes de frecuencia LoRaWAN® para elegir incluyendo EU868, US915, AS923, AS920, AU915, KR920, e IN865.

El módulo WM1302 está certificado CE, FCC y Telec, lo que ayuda a simplificar el proceso de desarrollo y certificación de los dispositivos de gateway LoRaWAN®.

WM1302 está diseñado para aplicaciones M2M e IoT y puede ser ampliamente aplicado en escenarios compatibles con gateway LPWAN. Sería una opción perfecta para reducir significativamente las dificultades técnicas y el consumo de tiempo al desarrollar dispositivos de gateway LoRa®, incluyendo gateway LoRaWAN®, hotspots, etc.

## Instalación de hardware

**Paso 1:** Desmonte el Edgebox-RPI-200

**Paso 2:** Coloque el Módulo LoRaWAN® en la ranura mini-PCIe

**Paso 3:** Por favor, vuelva a ensamblar el Edgebox-RPI-200 y luego aplique energía

**Paso 4:** Por favor, siga los pasos a continuación según la versión de su módulo:

:::note
Los siguientes pasos requieren acceso directo al SO del Edgebox-RPI-200, así que por favor elija un método para conectarse como usar ssh o usar pantalla, ratón y teclado con la `APP Terminal`, según su preferencia.
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 USB Module" label="WM1302 USB Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

En la APP Terminal o su herramienta de línea de comandos preferida

**Paso 5.** escriba `sudo raspi-config` en la línea de comandos para abrir la Herramienta de Configuración de Software de Raspberry Pi:

- Seleccione Opciones de Interfaz
- Seleccione I2C, luego seleccione **Sí** para habilitarlo
- Seleccione Puerto Serie, luego seleccione **No** para "¿Le gustaría un shell de inicio de sesión..." y seleccione **Sí** para "¿Le gustaría el hardware del puerto serie..."

Después de esto, por favor reinicie la Raspberry Pi para asegurarse de que estas configuraciones funcionen.

**Paso 6.** Descargue el [código del WM1302](https://github.com/Lora-net/sx1302_hal) y compílelo.

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**Paso 7.** Copiar el script reset_lgw.sh

```
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**Paso 8.** reemplaza el puerto USB del Módulo LoraWAN® en el archivo de configuración `global_conf.json.sx1250.US915.USB`:

**Paso 8-1.**
Primero para obtener el puerto USB específico, por favor sigue los pasos a continuación:

```sh
lsusb
```

En mi caso nuestro WM1302 está usando el `STMicroelectronics Virtual COM Port` así que podemos obtener el id del producto `5740`

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device.png"/></div>

**Paso 8-2.**

Luego obtén el dispositivo usb con el número de ID del Producto `5740`, En este caso obtenemos el número de puerto USB `1-1.3`:

```sh
sudo dmesg | grep 5740
```

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device-1.png"/></div>

Entonces podríamos obtener el puerto del dispositivo de la siguiente manera:

```sh
sudo dmesg | grep 1-1.3
```

así que en mi caso el dispositivo USB es `ttyACM0`

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device-2.png"/></div>

Así que modifiquemos el dispositivo USB en la configuración `global_conf.json.sx1250.US915.USB` con el comando sed `sed -i 's/cadena_buscar/cadena_reemplazo/g' nombre_archivo`, así que por favor sigue el patrón como `sed -i 's/ttyACM0/el_resultado_de_arriba' global_conf.json.sx1250.frecuencia_de_tu_módulo.USB`, ten en cuenta que por favor reemplaza `el_resultado_de_arriba` y `frecuencia_de_tu_módulo` para tu propia aplicación:

por ejemplo en mi caso:

```sh
sed -i 's/ttyACM0/ttyACM0/g'  global_conf.json.sx1250.US915.USB
```

**Paso 9.** Iniciar el Módulo LoraWAN®

Luego ejecuta el siguiente código para iniciar el Módulo LoraWAN® según la versión de frecuencia de operación de tu WM1302.

```sh
USB version
$ cd ~/sx1302_hal/packet_forwarder
$ ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/lora-activate.png"/></div>

Por favor, elige tu servidor de red Lora® preferido y usa el `EUI ID` como se muestra en la imagen anterior para configurar las conexiones.

</TabItem>
<TabItem value="WM1302 SPI Module" label="WM1302 SPI Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

**Paso 5.** escribe `sudo raspi-config` en la línea de comandos para abrir la Herramienta de Configuración de Software de Raspberry Pi:

- Selecciona Interface Options
- Selecciona SPI, luego selecciona **Yes** para habilitarlo
- Selecciona I2C, luego selecciona **Yes** para habilitarlo
- Selecciona Serial Port, luego selecciona **No** para "Would you like a login shell..." y selecciona **Yes** para "Would you like the serial port hardware..."

Después de esto, por favor reinicia la Raspberry Pi para asegurarte de que estas configuraciones funcionen.

**Paso 6.** Descarga el [código fuente del WM1302](https://github.com/peterpanstechland/sx1302_hal.git) y compílalo.

:::note
Esta es una versión modificada de la biblioteca hal sx1302, porque el sensor de temperatura del módulo WM1302 no es accesible en el Edgebox-RPI-200, por lo que el código fuente se modificó en consecuencia, también la configuración de pines en el `reset_lgw.sh` está configurada en consecuencia.
:::

```sh
cd ~/
git clone https://github.com/peterpanstechland/sx1302_hal.git
cd sx1302_hal
git checkout Edgebox-RPI-200
sudo make
```

**Paso 7.** Copiar el script reset_lgw.sh

```sh
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**Paso 8.** Iniciar el Módulo LoraWAN®

Luego ejecuta el siguiente código para iniciar el Módulo LoraWAN® según la versión de frecuencia de operación de tu WM1302.

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/wm1302-spi.png"/></div>

Por favor, elige tu servidor de red Lora® preferido y usa el `EUI ID` como se muestra en la imagen anterior para configurar las conexiones.

</TabItem>
</Tabs>

<!-- Code END -->

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
