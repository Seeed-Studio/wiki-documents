---
description: Comenzando con el Módulo de Gateway LoRaWAN® WM1302.
title: Módulo de Gateway LoRaWAN® WM1302
keywords:
  - wio 
  - docusaurus
image: https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.webp
slug: /es/WM1302_module
last_update:
  date: 4/24/2025
  author: Leo
---

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)
> LoRaWAN® es una marca utilizada bajo licencia de LoRa Alliance®.
La marca LoRa® es una marca comercial de Semtech Corporation o sus subsidiarias.

:::note
Recientemente hemos lanzado la Serie Wio-E5 basada en el módulo Wio-E5.

Haz clic [aquí](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3) para conocer los nuevos miembros de la familia LoRa-E5 desde el [Módulo Wio-E5](https://wiki.seeedstudio.com/es/LoRa-E5_STM32WLE5JC_Module/) [módulo Grove](https://wiki.seeedstudio.com/es/Grove_LoRa_E5_New_Version/), [placas de desarrollo mini](https://wiki.seeedstudio.com/es/LoRa_E5_mini/) hasta el [Kit de Desarrollo](https://wiki.seeedstudio.com/es/LoRa_E5_Dev_Board/).

Para aprender más sobre la creación de un Nodo Final LoRaWAN® con el Paquete MCU STM32Cube para la serie STM32WL (SDK), para unirse y enviar datos a la Red LoRaWAN®, lee más en las páginas wiki para [placas de desarrollo mini](https://wiki.seeedstudio.com/es/LoRa_E5_mini/) y [Kit de Desarrollo](https://wiki.seeedstudio.com/es/LoRa_E5_Dev_Board/).
:::

El módulo WM1302 es una nueva generación de módulo de gateway LoRaWAN® con factor de forma mini-PCIe. Basado en el chip LoRaWAN® de banda base Semtech® SX1302, WM1302 desbloquea el mayor potencial de capacidad de transmisión inalámbrica de largo alcance para productos de gateway. Presenta mayor sensibilidad, menor consumo de energía y menor temperatura de operación que los chips LoRa® anteriores SX1301 y SX1308.

El módulo de gateway LoRaWAN® WM1302 tiene versiones SPI y USB en las bandas de frecuencia US915 y EU868, permitiéndote tener una amplia gama de opciones de planes de frecuencia LoRaWAN® para elegir incluyendo EU868, US915, AS923, AS920, AU915, KR920 e IN865.

El módulo WM1302 está certificado CE, FCC y Telec, lo que ayuda a simplificar el proceso de desarrollo y certificación de los dispositivos de gateway LoRaWAN®.

WM1302 está diseñado para aplicaciones M2M e IoT y puede ser ampliamente aplicado en escenarios compatibles con gateway LPWAN. Sería una elección perfecta para reducir significativamente las dificultades técnicas y el consumo de tiempo al desarrollar dispositivos de gateway LoRa®, incluyendo gateway LoRaWAN®, hotspots, etc.

## Características

- **Alimentado por el chip LoRa® de banda base Semtech® SX1302**, consumo de energía extremadamente bajo y alto rendimiento.
- **Factor de forma Mini-PCIe con el conector dorado estándar de 52 pines**, fácil de integrar con varios dispositivos de gateway.
- **Temperatura de operación ultra-baja**, no se necesita disipación de calor adicional, reduciendo el tamaño del gateway LoRaWAN®.
- **Alta sensibilidad** hasta -139 dBm @SF12 con front-end TX/RX SX1250; potencia TX hasta 26 dBm @3.3V.
- **Certificado con CE, FCC y TELEC**. Simplifica el proceso de certificación del producto final.

## Descripción General del Hardware

### Diagrama

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg" alt="pir" width={600} height="auto" /></p>

### Pinout

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_2.jpeg" alt="pir" width={600} height="auto" /></p>

## Especificaciones

<table class="tg">
<thead>
<tr><th class="tg-4onr">Región</th><th class="tg-ev79">EU868</th><th class="tg-ev79">US915</th></tr>
</thead>
<tbody>
  <tr>
    <td class="tg-4onr">Frecuencia</td>
    <td class="tg-f42p">863-870MHz</td>
    <td class="tg-f42p">902-928MHz</td>
  </tr>
  <tr>
    <td class="tg-4onr">Sensibilidad</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
  </tr>
  <tr>
    <td class="tg-4onr">Potencia TX</td>
    <td class="tg-f42p">26 dBm (con fuente de alimentación de 3.3V)</td>
    <td class="tg-f42p">25 dBm (con fuente de alimentación de 3.3V)</td>
  </tr>
  <tr>
    <td class="tg-4onr">LEDs</td>
    <td class="tg-f42p" colspan="2">Alimentación: Verde Config: Rojo TX: Verde RX: Azul</td>
  </tr>
  <tr>
    <td class="tg-4onr">Factor de Forma</td>
    <td class="tg-f42p" colspan="2">Mini PCIe, 52 pines Golden Finger</td>
  </tr>
  <tr>
    <td class="tg-4onr">Consumo de Energía (versión SPI)</td>
    <td class="tg-f42p" colspan="2">Standby: 7.5 mA<br />TX potencia máxima: 415 mA<br />RX: 40 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">Consumo de Energía (versión USB)</td>
    <td class="tg-f42p" colspan="2">Standby: 20 mA<br />TX potencia máxima: 425 mA<br />RX: 53 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">LBT(Listen Before Talk)</td>
    <td class="tg-f42p" colspan="2">Soporte</td>
  </tr>
  <tr>
    <td class="tg-4onr">Conector de Antena</td>
    <td class="tg-f42p" colspan="2">U.FL</td>
  </tr>
  <tr>
    <td class="tg-4onr">Temperatura de Operación</td>
    <td class="tg-f42p" colspan="2">-40°C a 85°C</td>
  </tr>
  <tr>
    <td class="tg-4onr">Dimensiones</td>
    <td class="tg-f42p" colspan="2">30 mm (ancho) × 50.95 mm (largo)</td>
  </tr>
  <tr>
    <td class="tg-4onr">Certificación</td>
    <td class="tg-f42p" colspan="2">CE</td>
  </tr>
</tbody>
</table>

## Aplicación

- Desarrollo de dispositivos Gateway LPWAN

- Desarrollo de cualquier aplicación de comunicación inalámbrica de larga distancia

- Aprendizaje e investigación de aplicaciones LoRa® y LoRaWAN®

## Dimensiones

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg" alt="pir" width={600} height="auto" /></p>

## Primeros Pasos

### Diferencia entre la versión SPI y la versión USB

Para el Módulo Gateway LoRaWAN® WM1302 versión SPI, los chips Semtech SX1302 y SX126x están conectados a Raspberry Pi a través del mismo bus SPI con diferentes pines de selección de chip (CS).

Para el Módulo Gateway LoRaWAN® WM1302 versión USB, los chips Semtech SX1302 y SX126x están conectados a un MCU STM32L4, y este MCU programado de fábrica funcionará como un dispositivo USB, convirtiéndose en un puente entre Raspberry Pi y SX1302/SX126x.

### Inicio Rápido con WM1302

#### Hardware Requerido

- Módulo Gateway LoRaWAN® WM1302

- Placas Raspberry Pi con conector GPIO de 40 pines (ej. Raspberry Pi 4B o Raspberry 3B+)

- Pi Hat WM1302 para Raspberry Pi

- Adaptador de alimentación para Raspberry Pi

- Una antena LoRa®

- Una tarjeta SD de 8G o mayor y un lector de tarjetas

- Un cable USB Tipo C si se usa el Módulo Gateway LoRaWAN® WM1302 versión USB

#### Software Requerido

- [Imagen más reciente de Raspberry Pi OS](https://www.raspberrypi.org/software/operating-systems/): Se recomienda Raspberry Pi OS Lite

- [Balena Etcher](https://www.balena.io/etcher/): Para grabar la imagen de Raspberry Pi OS en la tarjeta SD

- [putty](https://www.putty.org/): Para conectarse a Raspberry Pi vía SSH en Windows

#### Paso1. Montaje del Pi Hat WM1302 e instalación del módulo WM1302

Es fácil montar el Pi Hat en el conector de 40 pines de Raspberry Pi. Apague primero la Raspberry Pi, inserte el módulo WM1302 en el Pi Hat como se muestra en la siguiente imagen y atorníllelo.

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg" alt="pir" width={600} height="auto" /></p>
Si se está usando el módulo WM1302 versión USB, por favor conecte también su puerto Tipo C al puerto USB de la Raspberry Pi con un cable USB Tipo C.

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg" alt="pir" width={600} height="auto" /></p>

#### Paso2. Habilitar las interfaces I2C y SPI de Raspbian

El módulo WM1302 se comunica con Raspberry Pi mediante SPI e I2C. Pero estas dos interfaces no están habilitadas por defecto en Raspbian, por lo que el desarrollador necesita habilitarlas antes de usar WM1302. Aquí, presentamos una forma de línea de comandos para habilitar las interfaces SPI e I2C.

Primero, inicie sesión en Raspberry Pi vía SSH o usando un monitor (no use la consola serie ya que el módulo GPS en el Pi Hat toma control de los pines UART de hardware del Pi), luego escriba `sudo raspi-config` en la línea de comandos para abrir la Herramienta de Configuración de Software de Raspberry Pi:

```shell
sudo raspi-config
```

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png" alt="pir" width={600} height="auto" /></p>

1. Selecciona `Interface Options`

2. Selecciona `SPI`, luego selecciona `Yes` para habilitarlo

3. Selecciona `I2C`, luego selecciona `Yes` para habilitarlo

4. Selecciona `Serial Port`, luego selecciona `No` para "Would you like a login shell..." y selecciona `Yes` para "Would you like the serial port hardware..."

5. Después de esto, por favor reinicia la Raspberry Pi para asegurar que estas configuraciones funcionen.

#### Paso3. Obtener y compilar el código fuente de SX1302

Ahora vamos a instalar `git` y descargar `sx1302_hal`(biblioteca y programas para SX1302 LoRa Gateway) desde github:

```shell
sudo apt update
sudo apt install -y git
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

Muévete a la carpeta `sx1302_hal` y compila todo:

```shell
cd ~/sx1302_hal
make
```

#### Paso4. Ejecutar el reenviador de paquetes Semtech SX1302

:::caution Nota
En el nuevo kernel de Linux, la **interfaz sysfs** ha sido reemplazada por la **interfaz chardev**.

Esto causa que el reset_lgw.sh proporcionado en el repositorio sx_1302 no reinicie el módulo correctamente y genere los siguientes registros:

```shell
...
./reset_lgw.sh: 26: echo: echo: I/O error
./reset_lgw.sh: 27: echo: echo: I/O error
./reset_lgw.sh: 28: echo: echo: I/O error
./reset_lgw.sh: 29: echo: echo: I/O error
./reset_lgw.sh: 32: cannot create /sys/class/gpio/gpio17/direction: Directory nonexistent
./reset_lgw.sh: 33: cannot create /sys/class/gpio/gpio5/direction: Directory nonexistent
./reset_lgw.sh: 34: cannot create /sys/class/gpio/gpio18/direction: Directory nonexistent
./reset_lgw.sh: 35: cannot create /sys/class/gpio/gpio13/direction: Directory nonexistent
CoreCell reset through GPIO17...
SX1261 reset through GPIO17...
CoreCell power enable through GPIO18...
CoreCell ADC reset through GPIO13...
./reset_lgw.sh: 45: cannot create /sys/class/gpio/gpio18/value: Directory nonexistent
./reset_lgw.sh: 47: cannot create /sys/class/gpio/gpio17/value: Directory nonexistent
./reset_lgw.sh: 48: cannot create /sys/class/gpio/gpio17/value: Directory nonexistent
./reset_lgw.sh: 50: cannot create /sys/class/gpio/gpio5/value: Directory nonexistent
./reset_lgw.sh: 51: cannot create /sys/class/gpio/gpio5/value: Directory nonexistent
./reset_lgw.sh: 53: cannot create /sys/class/gpio/gpio13/value: Directory nonexistent
./reset_lgw.sh: 54: cannot create /sys/class/gpio/gpio13/value: Directory nonexistent
...
```

Para determinar si el sistema en el que estás ejecutando aún tiene la **interfaz sysfs**, puedes ejecutar el siguiente comando:

```shell
ls /sys/class/gpio
```

:::

**Para Linux con interfaz sysfs:**

Si aparece una serie de carpetas `gpiox` en él, significa que el kernel de tu sistema aún tiene la **interfaz sysfs**, y puedes usar el script anterior para reiniciar el módulo.

Modifica el `pin de reset` para SX1302 y SX1261 en el script `reset_lgw.sh`, con el editor de texto `nano`:

```shell
nano tools/reset_lgw.sh
```

El siguiente código se muestra en la cabecera del editor de texto:

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=23     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=22     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

Usa las teclas de navegación para mover el cursor, cambia `SX1302_RESET_PIN=23` a `SX1302_RESET_PIN=17` y `SX1261_RESET_PIN=22` a `SX1261_RESET_PIN=5`, como sigue:

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=17     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=5      # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

Guarda estos cambios presionando `CTRL + x`, y luego `y`, finalmente presiona `Enter` para cerrar el editor de texto.

**Para Linux sin interfaz sysfs:**

Si no hay una carpeta llamada `gpiox` en ella, entonces necesitas llamar al GPIO usando el **paquete Libgpiod**.

El script reset_lgw.sh para controlar el GPIO usando el paquete Libgpiod es el siguiente:

<details>
<summary>reset_lgw.sh</summary>

```shell
SX1302_RESET_PIN=17     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=5     # SX1261 reset (LBT / Spectral Scan)


WAIT_GPIO() {
    sleep 0.1
}

reset() {
    echo "CoreCell reset through GPIO$SX1302_RESET_PIN..."
    echo "SX1261 reset through GPIO$SX1261_RESET_PIN..."
    echo "CoreCell power enable through GPIO$SX1302_POWER_EN_PIN..."

    # write output for SX1302 CoreCell power_enable and reset
    gpioset gpiochip0 $SX1302_POWER_EN_PIN=1; WAIT_GPIO
    
    gpioset gpiochip0 $SX1302_RESET_PIN=1; WAIT_GPIO
    gpioset gpiochip0 $SX1302_RESET_PIN=0; WAIT_GPIO

    gpioset gpiochip0 $SX1261_RESET_PIN=0; WAIT_GPIO
    gpioset gpiochip0 $SX1261_RESET_PIN=1; WAIT_GPIO
}

case "$1" in
    start)
    reset
    ;;
    stop)
    reset
    ;;
    *)
    echo "Usage: $0 {start|stop}"
    exit 1
    ;;
esac

exit 0
```

</details>

Copia `reset_lgw.sh` a la carpeta `packet_forwarder`, luego ejecuta `lora_pkt_fwd`. Ten en cuenta que debes seleccionar un archivo de configuración `global_conf.json.sx1250.xxxx` basado en el módulo que estés usando:

```shell
cp tools/reset_lgw.sh packet_forwarder/
cd packet_forwarder

# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915

# for WM1302 LoRaWAN Gateway Module (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

Ahora, el reenviador de paquetes puede ejecutarse correctamente. Pero aún hay cosas que hacer si los desarrolladores necesitan reenviar paquetes LoRa® a su Servidor LoRa® (por ejemplo, TTN o ChirpStack).

Para lograr este objetivo, los desarrolladores primero deben agregar la Puerta de Enlace Raspberry Pi al Servidor LoRa. Tomando [TTNv3](https://www.thethingsindustries.com/docs/getting-started/) como ejemplo, inicia sesión en la [consola TTNv3](https://eu1.cloud.thethings.network/console), haz clic en `Go to gateways` y haz clic en `Add gateway`, en la página `Add gateway` encontrarás docenas de configuraciones para completar. En lo que necesitas enfocarte es en `Gateway EUI` y `Gateway Server address` y `Frequency plan`, las demás déjalas por defecto.

- `Gateway EUI`: Un identificador único extendido de 64 bits para tu puerta de enlace, lo configuramos como `AA555A0000000000` en esta wiki

- `Gateway Server address`: La dirección del servidor al cual se conectará la puerta de enlace, copia esto al portapapeles, los desarrolladores necesitan guardar esto en el archivo de configuración más tarde

- `Frequency plan`: Si usas el módulo EU868, elige `Europe 863-870 MHz (SF9 for RX2)`, si usas el módulo US915, elige `United States 902-928 MHz, FSB 2`
<!-- 
![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png" alt="pir" width={600} height="auto" /></p>
Después de agregar la puerta de enlace, regresa a la Raspberry Pi, presiona `CTRL + c` para detener `lora_pkt_fwd`, luego edita el archivo de configuración `global_conf.json.sx1250.xxxx` que usaste recién, con el editor de texto `nano`:

```shell
# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
nano global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
nano global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
nano global_conf.json.sx1250.US915

# for WM1302 LoRaWAN Gateway Module (USB) - US915
nano global_conf.json.sx1250.US915.USB
```

Básicamente, necesitas modificar estos parámetros: `"gateway_ID" "server_address" "serv_port_up" "serv_port_down"`, que se pueden encontrar al final del archivo de configuración. Copia `Gateway Server address` a `"server_address"`, cambia `"serv_port_up"` y `"serv_port_down"` a `1700`, estos parámetros deben editarse así:

```json
"gateway_conf": {
    "gateway_ID": "AA555A0000000000",
    /* change with default server address/ports */
    "server_address": "eu1.cloud.thethings.network",
    "serv_port_up": 1700,
    "serv_port_down": 1700,
```

Guarda estos cambios presionando `CTRL + x`, luego `y`, y finalmente presiona `Enter` para cerrar el editor de texto.

Reinicia `lora_pkt_fwd`, encontrarás que tu Gateway de Raspberry Pi está conectado a TTNv3.

```shell
# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915

# for WM1302 LoRaWAN Gateway Module (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

## Fuentes

- [Hoja de datos del Semtech SX1302](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R000000Hkyg/U8CIV3e9yI9T_aILFMxuzLNs_6_0Io1WIaksrNYyCMQ)

## Certificados

- [Certificado CE del WM1302(USB)](https://files.seeedstudio.com/products/114992549/SHEA587_EU_Cert.pdf)
- [Certificado CE del WM1302(SPI)](https://files.seeedstudio.com/products/114992549/SHEA588_EU_Cert.pdf)

## Soporte Técnico y Discusión de Productos

Por favor envía cualquier problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
