---
description: XIAO nRF52840(sense) con Zephyr(RTOS)
title: XIAO nRF52840(sense) con Zephyr(RTOS)
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-nRF52840-Zephyr-RTOS
last_update:
  date: 06/07/2024
  author: Tim
createdAt: '2023-07-26'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/es/XIAO-nRF52840-Zephyr-RTOS/
---

# XIAO nRF52840(sense) con Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-ble.png"/></div>

## Qué es un RTOS

Uno de los componentes más importantes de los sistemas embebidos actuales es el **RTOS**, también conocido como **Real-Time Operating System** (sistema operativo en tiempo real), que es responsable de todo, desde la planificación de tareas hasta la ejecución de aplicaciones.

El **RTOS** está diseñado para proporcionar un modo de ejecución predecible. Cuando el procesamiento debe cumplir con el límite de tiempo del sistema, se utiliza un RTOS. Por lo tanto, en comparación con un GPOS (General Purpose Operating System), un RTOS suele ser ligero y de pequeño tamaño, y en general solo proporciona las funciones necesarias para ejecutar tipos específicos de aplicaciones en hardware específico. En algunos casos, los desarrolladores pueden modificar el RTOS existente, reducirlo para que solo proporcione la funcionalidad requerida por una aplicación específica y/o personalizar sus características de funcionalidad o rendimiento.

## Qué es [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

El sistema operativo [**Zephyr**](https://www.zephyrproject.org/) se basa en un kernel de pequeña huella diseñado para su uso en sistemas embebidos y con recursos limitados: desde simples sensores ambientales embebidos y wearables con LED hasta sofisticados controladores embebidos, relojes inteligentes y aplicaciones inalámbricas de IoT.

## Características

Zephyr ofrece un gran número de características, en constante crecimiento, que incluyen:

### Amplio conjunto de servicios del Kernel

Zephyr ofrece una serie de servicios familiares para el desarrollo:

- *Servicios de multiproceso* para hilos cooperativos, basados en prioridad, no expropiativos y expropiativos, con división de tiempo round robin opcional. Incluye compatibilidad con API compatible con POSIX pthreads.
- *Servicios de interrupción* para el registro en tiempo de compilación de manejadores de interrupciones.
- *Servicios de asignación de memoria* para la asignación dinámica y liberación de bloques de memoria de tamaño fijo o variable.
- *Servicios de sincronización entre hilos* para semáforos binarios, semáforos contadores y semáforos mutex.
- *Servicios de paso de datos entre hilos* para colas de mensajes básicas, colas de mensajes mejoradas y flujos de bytes.
- *Servicios de gestión de energía* como la Gestión de Energía del Sistema global, definida por la aplicación o por políticas, y la Gestión de Energía de Dispositivos de grano fino definida por el controlador.

### Múltiples algoritmos de planificación

  Zephyr proporciona un conjunto completo de opciones de planificación de hilos:

- Planificación cooperativa y expropiativa
- Earliest Deadline First (EDF)
- Planificación Meta IRQ que implementa el comportamiento de “interrupt bottom half” o “tasklet”
- Timeslicing: permite la división de tiempo entre hilos expropiables de igual prioridad
- Múltiples estrategias de encolado:
  - Cola de listados enlazados simple
  - Cola de listos con árbol rojo/negro
  - Cola de listos multi-cola tradicional

### Compatibilidad con Bluetooth Low Energy 5.0

Compatible con Bluetooth 5.0 (ESR10) y con el controlador Bluetooth Low Energy (capa de enlace LE). Incluye Bluetooth mesh y un controlador Bluetooth listo para la cualificación Bluetooth.

- Generic Access Profile (GAP) con todos los posibles roles LE
- Generic Attribute Profile (GATT)
- Compatibilidad con emparejamiento, incluida la función Secure Connections de Bluetooth 4.2
- Abstracción limpia del controlador HCI
- Interfaz HCI en bruto para ejecutar Zephyr como un controlador en lugar de una pila de Host completa
- Verificado con múltiples controladores populares
- Altamente configurable

Compatibilidad con Mesh:

- Funciones de Relay, Friend Node, Low-Power Node (LPN) y GATT Proxy
- Compatibles ambos portadores de Provisioning (PB-ADV y PB-GATT)
- Altamente configurable, encajando en dispositivos con al menos 16k de RAM

*Referencia: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## Primeros pasos

Una vez que se haya configurado la toolchain de Zephyr y se haya descargado un SDK asociado, puedes comenzar el desarrollo de aplicaciones.

Para el Xiao nrf52840 se puede consultar el [archivo de descripción de la placa](https://docs.zephyrproject.org/latest/boards/seeed/xiao_ble/doc/index.html) para obtener más información de configuración.

Para programar el Xiao nrf52840 se pueden seguir los siguientes pasos:

1. Compila un ejemplo o tu propia aplicación
2. Conecta el Xiao nrf52840
3. Haz doble clic en el botón `RST` para poner el dispositivo en modo bootloader uf2
4. Ejecuta el comando `west flash -r uf2` para flashear el dispositivo

El ejemplo más sencillo es ejecutar el ejemplo "Hello World" en la placa. Después de cambiar al directorio de la instalación de Zephyr ejecuta los siguientes comandos.

```
west build -p always -b xiao_ble samples/hello_world
```

Si estás usando una placa Xiao nRF52840 Sense puedes compilar para su archivo de definición de placa usando `xiao_ble/nrf52840/sense` en lugar de `xiao_ble` de la siguiente manera (para este ejemplo no hace ninguna diferencia):

```
west build -p always -b xiao_ble/nrf52840/sense samples/hello_world
```

Después de que esto termine entra en modo bootloader uf2 y escribe:

```
west flash -r uf2
```

Encuentra el puerto de tu dispositivo; en el caso de Ubuntu esto se puede hacer mediante: `ls /dev/tty*` y confirmando qué dispositivo aparece cuando se conecta tu USB.

En mi ejemplo veo `/dev/ttyACM0`:

Usando screen puedes conectarte y monitorizar la respuesta serie:

```
screen /dev/ttyACM0 115200
```

Deberías ver una respuesta similar a la siguiente:

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Hello World! xiao_ble/nrf52840
```

Para ayudar con el proceso de uso de Zephyr con Xiao y su placa de expansión se ha creado un repositorio con varias superposiciones y configuraciones utilizadas aquí. Los comandos incluidos en este artículo de la wiki asumen que está ubicado en `../applications/xiao-zephyr-examples` relativo a la raíz de Zephyr. Se puede proporcionar una ruta alternativa a los comandos siguientes actualizándola.

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## Preparación de hardware

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO nrf52840 Sense</th>
      <th>Seeed Studio Expansion Board</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### Conocimientos para desarrolladores

#### Placa de expansión XIAO

  Para poder usar módulos Grove con Seeed Studio XIAO nrf52840, utilizaremos una [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) y conectaremos el XIAO nrf52840 en ella.

  Después de eso, se pueden usar los conectores Grove de la placa para conectar módulos Grove

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### Definiciones de pines

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=nrf52840sense" target="_blank" rel="noopener noreferrer">Explora el pinout interactivo</a>
</div>

  Debes seguir el gráfico siguiente para usar los números de pines internos apropiados cuando conectes los módulos Grove a los conectores Grove en el Grove Shield para Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/pinout2.png"style={{width:900, height:'auto'}}/></div>

### Funcionalidad principal

- LED integrado en la placa
- IMU integrada en la placa (Sense)
- Micrófono integrado en la placa (Sense)
- Bluetooth
- TFLite

#### LED integrado en la placa

Para este ejemplo usaremos el ejemplo blinky para hacer parpadear el LED integrado en la placa.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky
```

Pulsa dos veces el botón RESET y luego flashea:

```
west flash -r uf2
```

Verás que el LED rojo integrado en la placa se enciende y apaga creando un efecto de parpadeo.

Profundicemos un poco en este ejemplo para ver por qué funciona.

El código de ejemplo asociado hace referencia a led0:

```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

Esto se define en el código devicetree del Xiao nRF52840 mediante un alias:

```
 aliases {
  led0 = &led0;
 };

 leds {
  compatible = "gpio-leds";
  led0: led_0 {
   gpios = <&gpio0 26 GPIO_ACTIVE_LOW>;
   label = "Red LED";
  };
  ...
  }
```

Corresponde al pin 26 de la placa.

Para los pines con el breakout de Xiao no necesitas usar directamente el mapeo de pines &gpio0 ya que los archivos de la placa proporcionan un conector Xiao que simplifica la interfaz.

Por ejemplo, si fuera a referirme a D0 me referiría a él como `&gpio 2` o `&xiao_d 0`.

```
/ {
 xiao_d: connector {
  compatible = "seeed,xiao-gpio";
  #gpio-cells = <2>;
  gpio-map-mask = <0xffffffff 0xffffffc0>;
  gpio-map-pass-thru = <0 0x3f>;
  gpio-map
   = <0 0 &gpio0 2 0>  /* D0 */
   , <1 0 &gpio0 3 0>  /* D1 */
   , <2 0 &gpio0 28 0>  /* D2 */
   , <3 0 &gpio0 29 0>  /* D3 */
   , <4 0 &gpio0 4 0>  /* D4 */
   , <5 0 &gpio0 5 0>  /* D5 */
   , <6 0 &gpio1 11 0>  /* D6 */
   , <7 0 &gpio1 12 0>  /* D7 */
   , <8 0 &gpio1 13 0>  /* D8 */
   , <9 0 &gpio1 14 0>  /* D9 */
   , <10 0 &gpio1 15 0>  /* D10 */
   ;
 };
};
```

#### IMU integrada en la placa (Sense)

Una de las principales características del Xiao nrf52840 es su sensor IMU integrado. Con estos datos se podría entrenar un modelo de aprendizaje automático, detectar gestos, movimiento de la placa, etc.

Para probar esta función usaremos un ejemplo integrado que utiliza la IMU y luego veremos el código asociado para entender por qué funciona.

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/sensor/lsm6dsl
```

Pulsa dos veces el botón RESET y luego flashea:

```
west flash -r uf2
```

A continuación tendrás que conectarte para ver la salida:

```
screen /dev/ttyACM0 115200
```

Esto debería mostrar algo similar a lo siguiente:

```
3LSM6DSL sensor samples:

accel x:1.330409 ms/2 y:-1.705484 ms/2 z:9.957133 ms/2
gyro x:0.049632 dps y:-0.070860 dps z:-0.006184 dps
loop:46 trig_cnt:9677

3LSM6DSL sensor samples:

accel x:1.314257 ms/2 y:-1.734198 ms/2 z:9.902696 ms/2
gyro x:-0.220216 dps y:0.032833 dps z:-0.000458 dps
loop:47 trig_cnt:9892

3LSM6DSL sensor samples:

accel x:1.414158 ms/2 y:-1.476371 ms/2 z:9.835697 ms/2
gyro x:0.035430 dps y:-0.132252 dps z:-0.007788 dps
loop:48 trig_cnt:10107
```

¿Por qué funciona? Podemos ver el [código de ejemplo](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/sensor/lsm6dsl) en el repositorio de github de Zephyr.

```
 const struct device *const lsm6dsl_dev = DEVICE_DT_GET_ONE(st_lsm6dsl);
```

La lógica del ejemplo encuentra el objeto devicetree `st_lsm6dsl` asociado para la placa de destino. Podemos ver el devicetree de la Xiao nrf52840 sense para ver con más detalle cómo está configurado:

```
 lsm6ds3tr-c-en {
  compatible = "regulator-fixed-sync", "regulator-fixed";
  enable-gpios = <&gpio1 8 (NRF_GPIO_DRIVE_S0H1 | GPIO_ACTIVE_HIGH)>;
  regulator-name = "LSM6DS3TR_C_EN";
  regulator-boot-on;
  startup-delay-us = <3000>;
 };
```

```
&i2c0 {
 compatible = "nordic,nrf-twim";
 /* Cannot be used together with spi0. */
 status = "okay";
 pinctrl-0 = <&i2c0_default>;
 pinctrl-1 = <&i2c0_sleep>;
 pinctrl-names = "default", "sleep";
 clock-frequency = <I2C_BITRATE_FAST>;

 lsm6ds3tr_c: lsm6ds3tr-c@6a {
  compatible = "st,lsm6dsl";
  reg = <0x6a>;
  irq-gpios = <&gpio0 11 GPIO_ACTIVE_HIGH>;
  status = "okay";
 };
};
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/imu.jpg" style={{width:500, height:'auto'}}/></div>

Se está utilizando un GPIO para habilitar la alimentación del pin. Puedes ver en el archivo de definición que está usando GPIO1 8. He resaltado la parte relevante del [esquemático de la Xiao nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf) a continuación:

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-imu.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-imu.png" style={{width:500, height:'auto'}}/></div>

A partir de este resaltado del esquemático puedes ver que GPIO1 8 es el pin de habilitación para la IMU. Además, GPIO0 11 es el pin de interrupción. Por lo tanto, esto se refleja en el fragmento de devicetree anterior.

#### Micrófono integrado (Sense)

Una de las principales características de la Xiao nrf52840 es su micrófono integrado. Al igual que su IMU, permite muchas aplicaciones de aprendizaje automático gracias a su uso.

Para probar esta función usaremos un ejemplo integrado que utiliza el micrófono y luego veremos el código asociado para entender por qué funciona.

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/drivers/audio/dmic
```

Pulsa dos veces el botón RESET y luego flashea:

```
west flash -r uf2
```

A continuación tendrás que conectarte para ver la salida:

```
screen /dev/ttyACM0 115200
```

Esto debería mostrar algo similar a lo siguiente:

```
[00:00:00.297,088] <inf> dmic_sample: PCM output rate: 16000, channels: 1
[00:00:00.297,119] <inf> dmic_nrfx_pdm: PDM clock frequency: 1280000, actual PCM rate: 16000
[00:00:00.397,216] <inf> dmic_sample: 0 - got buffer 0x20008380 of 3200 bytes
[00:00:00.497,222] <inf> dmic_sample: 1 - got buffer 0x20006a80 of 3200 bytes
[00:00:00.597,229] <inf> dmic_sample: 2 - got buffer 0x20005180 of 3200 bytes
[00:00:00.697,235] <inf> dmic_sample: 3 - got buffer 0x20008380 of 3200 bytes
[00:00:00.797,241] <inf> dmic_sample: 4 - got buffer 0x20006a80 of 3200 bytes
[00:00:00.897,247] <inf> dmic_sample: 5 - got buffer 0x20005180 of 3200 bytes
[00:00:00.997,222] <inf> dmic_sample: 6 - got buffer 0x20008380 of 3200 bytes
[00:00:01.097,229] <inf> dmic_sample: 7 - got buffer 0x20006a80 of 3200 bytes
[00:00:01.097,259] <inf> dmic_sample: PCM output rate: 16000, channels: 2
[00:00:01.097,259] <inf> dmic_nrfx_pdm: PDM clock frequency: 1280000, actual PCM rate: 16000
[00:00:01.197,387] <inf> dmic_sample: 0 - got buffer 0x20008380 of 6400 bytes
[00:00:01.297,393] <inf> dmic_sample: 1 - got buffer 0x20005180 of 6400 bytes
[00:00:01.397,399] <inf> dmic_sample: 2 - got buffer 0x20006a80 of 6400 bytes
[00:00:01.497,375] <inf> dmic_sample: 3 - got buffer 0x20008380 of 6400 bytes
[00:00:01.597,381] <inf> dmic_sample: 4 - got buffer 0x20005180 of 6400 bytes
[00:00:01.697,387] <inf> dmic_sample: 5 - got buffer 0x20006a80 of 6400 bytes
[00:00:01.797,393] <inf> dmic_sample: 6 - got buffer 0x20008380 of 6400 bytes
[00:00:01.897,399] <inf> dmic_sample: 7 - got buffer 0x20005180 of 6400 bytes
[00:00:01.897,399] <inf> dmic_sample: Exiting
```

¿Por qué funciona? Podemos ver el [código de ejemplo](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/drivers/audio/dmic) en el repositorio de github de Zephyr.

Este ejemplo demuestra lo siguiente:

> Esta es una aplicación muy simple destinada a mostrar cómo usar la :ref:`Audio DMIC API` y también servir de ayuda en el desarrollo de controladores para implementar esta API. Realiza dos transferencias PDM con diferentes configuraciones (usando un canal y dos canales), pero no procesa de ninguna manera los datos de audio recibidos.

```
const struct device *const dmic_dev = DEVICE_DT_GET(DT_NODELABEL(dmic_dev));
```

La lógica del ejemplo encuentra el objeto devicetree `dmic_dev` asociado para la placa de destino. Podemos ver el devicetree de la Xiao nrf52840 sense para ver con más detalle cómo está configurado:

```
/ {
 msm261d3526hicpm-c-en {
  compatible = "regulator-fixed";
  enable-gpios = <&gpio1 10 (NRF_GPIO_DRIVE_S0H1 | GPIO_ACTIVE_HIGH)>;
  regulator-name = "MSM261D3526HICPM-C-EN";
 };
}

&pdm0 {
 pinctrl-0 = <&pdm0_default>;
 pinctrl-1 = <&pdm0_sleep>;
 pinctrl-names = "default", "sleep";
 clock-source = "PCLK32M";
};
```

En el overlay del proyecto de ejemplo este regulador se habilita:

```
/ {
 msm261d3526hicpm-c-en {
  regulator-boot-on;
 };
};

dmic_dev: &pdm0 {
 status = "okay";
};
```

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/mic.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/mic.jpg" style={{width:500, height:'auto'}}/></div>

Se está utilizando un GPIO para habilitar la alimentación del pin. He resaltado la parte relevante del [esquemático de la Xiao nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf) a continuación:

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-mic.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-mic.png" style={{width:500, height:'auto'}}/></div>

A partir de este resaltado del esquemático puedes ver que GPIO1 10 es el pin de habilitación para el micrófono.

#### Bluetooth

Para probar esta configuración podemos usar un ejemplo existente con Zephyr:

```
west build -p always -b xiao_ble samples/bluetooth/observer
```

Flashea tu placa:

```
west flash -r uf2
```

Espera un momento a que el MCU se reinicie después de flashear y conéctate para monitorizar:

```
screen /dev/ttyACM0 115200
```

Verás una consola disponible para enviar comandos a la placa:

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Starting Observer Demo
Started scanning...
Exiting main thread.
Device found: EC:11:27:22:AF:D2 (public) (RSSI -74), type 0, AD data len 31
Device found: 0D:9A:BE:8D:10:FC (random) (RSSI -81), type 3, AD data len 31
Device found: D2:70:D8:F2:6F:C4 (random) (RSSI -68), type 0, AD data len 20
Device found: 72:7C:3C:87:E2:17 (random) (RSSI -77), type 0, AD data len 17
Device found: 65:65:23:B9:AD:EC (random) (RSSI -68), type 0, AD data len 17
Device found: 6D:39:26:C2:94:B5 (random) (RSSI -70), type 0, AD data len 18
```

```
CONFIG_BT=y
CONFIG_BT_OBSERVER=y
```

El [archivo conf](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf) aquí habilita las funciones relacionadas con bluetooth para la compilación de Zephyr.

#### TFLite - Hello World

Habilita TFLite con Zephyr y actualiza:

```
west config manifest.project-filter -- +tflite-micro
west update
```

Compila el ejemplo y flashea tu placa:

```
west build -p always -b xiao_ble samples/modules/tflite-micro/hello_world
```

Flashea tu placa:

```
west flash -r uf2
```

Espera un momento a que el MCU se reinicie después de flashear y conéctate para monitorizar:

```
screen /dev/ttyACM0 115200
```

Verás resultados devueltos desde la consola:

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
x_value: 1.0*2^-127, y_value: 1.0*2^-127

x_value: 1.2566366*2^-2, y_value: 1.4910772*2^-2

x_value: 1.2566366*2^-1, y_value: 1.1183078*2^-1

x_value: 1.8849551*2^-1, y_value: 1.677462*2^-1

x_value: 1.2566366*2^0, y_value: 1.9316229*2^-1

x_value: 1.5707957*2^0, y_value: 1.0420598*2^0

x_value: 1.8849551*2^0, y_value: 1.9146791*2^-1

x_value: 1.0995567*2^1, y_value: 1.6435742*2^-1

x_value: 1.2566366*2^1, y_value: 1.0674761*2^-1

x_value: 1.4137159*2^1, y_value: 1.8977352*2^-3
```

Información adicional sobre TFLite está fuera del alcance de esta guía, pero el ejemplo sirve como una guía de las capacidades del dispositivo y de los componentes necesarios para ejecutar la configuración de TFLite.

### Componentes adicionales

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Pantalla I2C
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Botón
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Zumbador
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Tarjeta SD
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Round Display for Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- [Round Display for Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html) - Tarjeta SD

#### Grove - Placa de expansión - Pantalla I2C

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/xiao_expansion_oled-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/xiao_expansion_oled-nrf.jpg" style={{width:500, height:'auto'}}/></div>

Para probar esta configuración podemos usar un ejemplo existente con Zephyr:

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash -r uf2
```

Verás una pantalla que muestra varios cuadros negros y un cuadro parpadeando en la esquina dado que esta pantalla solo admite dos colores.

Profundicemos un poco en este ejemplo para ver por qué funciona:

```
/ {
    chosen {
      zephyr,display = &ssd1306;
    };
};

&xiao_i2c {
  status = "okay";

  ssd1306: ssd1306@3c {
    compatible = "solomon,ssd1306fb";
    reg = <0x3c>;
    width = <128>;
    height = <64>;
    segment-offset = <0>;
    page-offset = <0>;
    display-offset = <0>;
    multiplex-ratio = <63>;
    segment-remap;
    com-invdir;
    prechargep = <0x22>;
  };
};

```

El shield configura una pantalla OLED SSD1306 en el registro 0x3C. Se selecciona como la pantalla de Zephyr en la sección `chosen`.

#### Grove - Placa de expansión - Botón

Para probar esta configuración podemos usar un ejemplo existente con Zephyr:

```
west build -p always -b xiao_ble samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board
```

Flashea tu placa:

```
west flash -r uf2
```

Espera un momento a que el MCU se reinicie después de flashear y conéctate al monitor:

```
screen /dev/ttyACM0 115200
```

Al presionar el botón con el ejemplo se encenderá el LED integrado.

Verás resultados devueltos desde la consola:

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Set up button at gpio@50000000 pin 3
Set up LED at gpio@50000000 pin 26
Press the button
Button pressed at 839637
Button pressed at 857904
Button pressed at 883367
Button pressed at 1001258
```

Profundicemos un poco en este ejemplo para ver por qué funciona:

```
/ {
    aliases {
      sw0 = &xiao_button0;
    };

    buttons {
      compatible = "gpio-keys";
      xiao_button0: button_0 {
        gpios = <&xiao_d 1 (GPIO_PULL_UP | GPIO_ACTIVE_LOW)>;
        label = "SW0";
        zephyr,code = <INPUT_KEY_0>;
      };
    };
};
```

El archivo shield / overlay se utiliza para configurar varios componentes de la placa. Usando este archivo se puede utilizar el ejemplo del botón, ya que el overlay permite que Zephyr configure el botón y lo ponga a disposición del código asociado.

En este caso D1 en la Xiao nrf52840. Se configura en este overlay para actuar como un botón y se le asigna el alias de nombre sw0 para permitir que se use en el ejemplo, cuyo código espera esto.

#### Grove - Placa de expansión - Zumbador

Activaremos nuestro zumbador usando el ejemplo blinky PWM para controlar su activación mediante una señal PWM. Para esto usaremos un overlay personalizado que habilita el PWM para el pin A3.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-nrf52480/xiao_expansion_buzzer.overlay"
```

Después de flashear deberías empezar a escuchar una serie de zumbidos que cambian de sonido a medida que el ejemplo se ejecuta.

Veamos por qué funciona esto:

```
&pwm0 {
 status = "disabled";
};

&sw_pwm {
 status = "okay";
 channel-gpios = <&gpio0 29 PWM_POLARITY_INVERTED>;
};

&pwm_led0 {
 pwms = <&sw_pwm 0 PWM_MSEC(20) PWM_POLARITY_INVERTED>;
};
```

El overlay configura la lógica PWM para el pin 29, que corresponde al pin A3 según el pinout de la Xiao nrf52840.

#### Grove - Placa de expansión - Tarjeta SD

Aquí usaremos el ejemplo de sistema de archivos junto con el shield Xiao Expansion Board para intentar comunicarnos con el lector de tarjetas SD mediante SPI. El shield de la placa de expansión tiene el pin CS configurado para el pin `&xiao_d 2` asociado, por lo que no se requiere trabajo adicional de tu parte para asociar esta capacidad con la placa aparte de añadir el shield. Para prepararlo aún más estamos usando una configuración personalizada que habilita la funcionalidad de la tarjeta SD.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

Ahora flashea y monitoriza (primero presionando RESET dos veces para entrar en modo bootloader uf2):

```
west flash -r uf2
```

Deberías ver una respuesta similar a esta:

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
[00:00:00.483,367] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.483,856] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.

Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

En este caso mi tarjeta SD tenía dos archivos. Sus nombres y tamaños se mostraron en mi consola.

Revisemos los elementos relevantes que intervienen aquí:

```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

En la configuración asociada estamos habilitando SPI, el controlador de disco SDMMC y el GPIO. Sin esta configuración el overlay provocará un error, ya que el ejemplo no puede encontrar la tarjeta SD.

La parte relevante del shield Xiao Expansion Board se muestra a continuación:

```
&xiao_spi {
 status = "okay";
 cs-gpios = <&xiao_d 2 GPIO_ACTIVE_LOW>;

 sdhc0: sdhc@0 {
  compatible = "zephyr,sdhc-spi-slot";
  reg = <0>;
  status = "okay";
  mmc {
   compatible = "zephyr,sdmmc-disk";
   status = "okay";
  };
  spi-max-frequency = <24000000>;
 };
};
```

Como se mencionó anteriormente, el mapeo del pin `&xiao_d 2` se utiliza para permitir que se seleccione el pin D2 para esto independientemente de la placa utilizada, siempre que admita la configuración de pines `&xiao_d`.

#### Grove - Sensor de temperatura y humedad (SHT31)

Primero suelda los pines y conecta tu Xiao nrf52840 a la placa de expansión. Luego conecta un cable conector Grove entre el Grove SHT31 y uno de los puertos I2C de la placa de expansión.

Para probar esta configuración podemos usar un ejemplo existente con Zephyr:

```
west build -p always -b xiao_ble samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
```

Flashea tu placa después de que esté en modo bootloader uf2:

```
west flash -r uf2
```

Espera un momento a que el MCU se reinicie después de flashear y conéctate al monitor:

```
screen /dev/ttyACM0 115200
```

Verás resultados devueltos desde la consola:

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
SHT3XD: 25.68 Cel ; 54.73 %RH
SHT3XD: 25.75 Cel ; 55.44 %RH
SHT3XD: 25.79 Cel ; 55.95 %RH
SHT3XD: 25.82 Cel ; 55.93 %RH
SHT3XD: 25.84 Cel ; 56.07 %RH
SHT3XD: 25.84 Cel ; 55.69 %RH
```

Profundicemos un poco en este ejemplo para ver por qué funciona:

```
 &xiao_i2c {
 sht3xd@44 {
   compatible = "sensirion,sht3xd";
   reg = <0x44>;
  };
 };
```

El archivo app overlay se utiliza para configurar varios componentes de la placa. Usando este archivo se puede utilizar el ejemplo SHT31, ya que el overlay informa a la [lógica del ejemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) cómo configurar el sensor para nuestra placa.

#### Módulo de pantalla LCD de 1,69 pulgadas, resolución 240×280, interfaz SPI

Para este ejemplo usaremos SPI para conectar una pantalla LCD de 1,69 pulgadas con una resolución de 240x280.

Primero conecta tu placa a la pantalla LCD usando la siguiente imagen como guía (en este caso estamos usando la Xiao nrf52840 pero se utiliza la misma distribución de pines para la conexión aquí).

| Pantalla LCD SPI de 1,69 pulgadas| XIAO nrf52840 |
| ------------- | ------------------------- |
| VCC | 3V3 |
| GND | GND |
| DIN | D10 |
| CLK | D8 |
| CS | D1 |
| DC | D3 |
| RST | D0 |
| BL | D6 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/10.png" style={{width:700, height:'auto'}}/></div>

Ahora podemos compilar y flashear el firmware:

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash -r uf2
```

Con el nuevo firmware instalado, el dispositivo ahora muestra la misma pantalla de demostración que vimos anteriormente en la placa de expansión, solo que ahora actualizada para la pantalla LCD en color sobre SPI.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/spi_lcd-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/spi_lcd-nrf.jpg" style={{width:500, height:'auto'}}/></div>

#### Pantalla redonda para Xiao

Para probar esta configuración podemos usar un ejemplo existente con Zephyr:

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

Entra en modo bootloader y flashea tu dispositivo:

```
west flash -r uf2
```

Verás una pantalla que muestra varias esquinas de colores con una esquina negra parpadeando.

Otro ejemplo demuestra el uso de la pantalla táctil:

```
west build -p always -b xiao_ble samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

La demo de música que se muestra aquí es solo una parte de la pantalla real, pero aun así demuestra la pantalla táctil en acción. Como puedes ver, al tocar el botón de reproducción se activa la animación de música.

Puedes ver en el [archivo shield](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay) que esto funciona al interactuar con el controlador de pantalla redonda GC9A01 mediante SPI y el módulo táctil CHSC6X mediante I2C.

Profundicemos un poco en este ejemplo para ver cómo funciona:

```
/ {
    chosen {
      zephyr,display = &gc9a01_xiao_round_display;
    };

 lvgl_pointer {
  compatible = "zephyr,lvgl-pointer-input";
  input = <&chsc6x_xiao_round_display>;
 };
};

/*
 * xiao_serial uses pins D6 and D7 of the Xiao, which are used respectively to
 * control the screen backlight and as touch controller interrupt.
 */
&xiao_serial {
 status = "disabled";
};

&xiao_i2c {
 clock-frequency = < I2C_BITRATE_FAST >;

 chsc6x_xiao_round_display: chsc6x@2e {
  status = "okay";
  compatible = "chipsemi,chsc6x";
  reg = <0x2e>;
  irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;
 };
};

&xiao_spi {
 status = "okay";
 cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>, <&xiao_d 2 GPIO_ACTIVE_LOW>;

 gc9a01_xiao_round_display: gc9a01@0 {
  status = "okay";
  compatible = "galaxycore,gc9x01x";
  reg = <0>;
  spi-max-frequency = <DT_FREQ_M(100)>;
  cmd-data-gpios = <&xiao_d 3 GPIO_ACTIVE_HIGH>;
  pixel-format = <PANEL_PIXEL_FORMAT_RGB_565>;
  width = <240>;
  height = <240>;
  display-inversion;
 };
};
```

Este shield hace lo siguiente:

- Selecciona la pantalla GC9A01 como la pantalla Zephyr elegida
- Configura la lógica del puntero LVGL para usar el módulo CHSC6X
- Desactiva el puerto serie ya que los pines se usan para la retroiluminación y la interrupción táctil (como se ve arriba mediante: `irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`)
- Configura la pantalla redonda para SPI usando los pines D1, D2 y D3

La [lógica de ejemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c) se basa en el [código de ejemplo de la demo de LVGL](https://github.com/lvgl/lvgl/tree/master/demos/music) que se puede examinar más a fondo.

#### Pantalla redonda para Xiao - Tarjeta SD

Usaremos aquí el ejemplo de sistema de archivos junto con el shield Xiao Expansion Board para intentar la comunicación con el lector de tarjetas SD mediante SPI. El shield de la placa de expansión tiene el pin CS configurado para el pin asociado `&xiao_d 2`, por lo que no se necesita trabajo adicional de tu parte para asociar esta capacidad con la placa aparte de añadir el shield. Para prepararlo aún más estamos usando una configuración personalizada que habilita la funcionalidad de la tarjeta SD.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_round_display
```

Ahora flashea y monitoriza (primero presiona RESET dos veces para entrar en el modo bootloader uf2):

```
west flash -r uf2
```

Espera un momento a que el MCU se reinicie después de flashear y conéctate al monitor:

```
screen /dev/ttyACM0 115200
```

Deberías ver una respuesta similar a esta:

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
[00:00:00.491,485] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.491,973] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.

Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

Como era de esperar, el contenido del archivo se muestra de una manera similar a la salida del ejemplo de tarjeta SD de la Xiao Expansion Board.

La parte relevante del shield de pantalla redonda se muestra a continuación:

```
&xiao_spi {
 status = "okay";
 cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>, <&xiao_d 2 GPIO_ACTIVE_LOW>;

 sdhc_xiao_round_display: sdhc@1 {
  compatible = "zephyr,sdhc-spi-slot";
  reg = <1>;
  status = "okay";
  mmc {
   compatible = "zephyr,sdmmc-disk";
   status = "okay";
  };
  spi-max-frequency = <DT_FREQ_M(24)>;
 };
};
```

D2 se usa para el pin CS de la tarjeta SD.

## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=57293418) de Seeed Studio.
- Gracias a **los esfuerzos de Tim** y tu trabajo será [exhibido](https://wiki.seeedstudio.com/es/Honorary-Contributors/).

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
