---
description: XIAO SAMD21 con Zephyr(RTOS)
title: XIAO SAMD21 con Zephyr(RTOS)
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-SAMD21-Zephyr-RTOS
last_update:
  date: 04/16/2023
  author: timo614
createdAt: '2023-07-26'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/es/XIAO-SAMD21-Zephyr-RTOS/
---

# XIAO SAMD21 con Zephyr(RTOS)

<div align="center"><img width ="{100}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-samd21.png"/></div>

## Qué es un RTOS

Uno de los componentes más importantes de los sistemas embebidos actuales es el **RTOS**, también conocido como **Real-Time Operating System** (sistema operativo en tiempo real), que es responsable de todo, desde la planificación de tareas hasta la ejecución de aplicaciones.

El **RTOS** está diseñado para proporcionar un modo de ejecución predecible. Cuando el procesamiento debe cumplir con el límite de tiempo del sistema, se utiliza un RTOS. Por lo tanto, en comparación con un GPOS (General Purpose Operating System), un RTOS suele ser ligero y de pequeño tamaño, y en general solo proporciona las funciones necesarias para ejecutar tipos específicos de aplicaciones en hardware específico. En algunos casos, los desarrolladores pueden modificar el RTOS existente, reducirlo para que solo proporcione la funcionalidad requerida por una aplicación específica y/o personalizar sus características de funcionalidad o rendimiento.

## Qué es [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

El sistema operativo [**Zephyr**](https://www.zephyrproject.org/) se basa en un kernel de pequeña huella diseñado para su uso en sistemas embebidos y con recursos limitados: desde simples sensores ambientales embebidos y wearables con LED hasta sofisticados controladores embebidos, relojes inteligentes y aplicaciones inalámbricas de IoT.

## Características

Zephyr ofrece un gran número de características, en constante crecimiento, que incluyen:

### Amplio conjunto de servicios del kernel

Zephyr ofrece una serie de servicios familiares para el desarrollo:

- *Servicios de multiproceso* para hilos cooperativos, basados en prioridad, no expropiativos y expropiativos con división de tiempo round robin opcional. Incluye compatibilidad con API compatible con POSIX pthreads.
- *Servicios de interrupción* para el registro en tiempo de compilación de manejadores de interrupciones.
- *Servicios de asignación de memoria* para la asignación dinámica y liberación de bloques de memoria de tamaño fijo o variable.
- *Servicios de sincronización entre hilos* para semáforos binarios, semáforos contadores y semáforos mutex.
- *Servicios de paso de datos entre hilos* para colas de mensajes básicas, colas de mensajes mejoradas y flujos de bytes.
- *Servicios de gestión de energía* como la Gestión de Energía del Sistema de alto nivel, definida por la aplicación o por políticas, y la Gestión de Energía de Dispositivos de grano fino definida por el controlador.

### Múltiples algoritmos de planificación

  Zephyr proporciona un conjunto completo de opciones de planificación de hilos:

- Planificación cooperativa y expropiativa
- Earliest Deadline First (EDF)
- Planificación Meta IRQ que implementa el comportamiento de “interrupt bottom half” o “tasklet”
- División de tiempo: permite la división de tiempo entre hilos expropiables de igual prioridad
- Múltiples estrategias de encolado:
  - Cola de lista enlazada simple preparada
  - Cola preparada de árbol rojo/negro
  - Cola preparada tradicional multi-cola

### Compatibilidad con Bluetooth Low Energy 5.0

Compatible con Bluetooth 5.0 (ESR10) y con el controlador Bluetooth Low Energy (capa de enlace LE). Incluye Bluetooth mesh y un controlador Bluetooth listo para la cualificación Bluetooth.

- Generic Access Profile (GAP) con todos los posibles roles LE
- Generic Attribute Profile (GATT)
- Compatibilidad con emparejamiento, incluida la función Secure Connections de Bluetooth 4.2
- Abstracción limpia del controlador HCI
- Interfaz HCI en bruto para ejecutar Zephyr como un controlador en lugar de una pila completa de Host
- Verificado con múltiples controladores populares
- Altamente configurable

Compatibilidad con Mesh:

- Funciones de Relay, Friend Node, Low-Power Node (LPN) y GATT Proxy
- Compatibles ambos portadores de Provisioning (PB-ADV y PB-GATT)
- Altamente configurable, encajando en dispositivos con al menos 16k de RAM

*Referencia: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## Introducción

Este wiki cubre la compatibilidad de [Zephyr](https://www.zephyrproject.org/) para el [XIAO SAMD21 Zephyr(RTOS) Getting Started](https://docs.zephyrproject.org/latest/boards/seeed/seeeduino_xiao/doc/index.html). Con la ayuda de esta guía podrás utilizar el conjunto de funciones disponible para la placa.

El primer paso para trabajar con Zephyr es configurar el SDK y la toolchain para el desarrollo local. Se debe consultar la [guía de introducción de Zephyr](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) para el procedimiento de configuración asociado necesario para tu entorno.

Una vez que la toolchain de Zephyr se haya configurado y se haya descargado un SDK asociado, puedes comenzar el desarrollo de aplicaciones.

Para programar el Xiao SAMD21 se pueden seguir los siguientes pasos:

1. Compila un ejemplo o tu aplicación
2. Conecta el Xiao SAMD21
3. Puentea el pin RST a GND (usando los puntos de prueba visibles) para arrancar el MCU en modo bootloader (o pulsa el botón RESET en una placa de expansión conectada dos veces seguidas rápidamente)
4. Procede a usar `west flash` para grabar tu firmware en la placa

El ejemplo más sencillo es ejecutar el ejemplo "Hello World" en la placa. Después de cambiar al directorio de la instalación de Zephyr ejecuta los siguientes comandos.

```
west build -p always -b seeeduino_xiao samples/subsys/usb/console
```

Pulsa dos veces RESET o puentea el pin RST a GND:

```
west flash
```

Encuentra el puerto de tu dispositivo escribiendo `ls /dev/tty*` y confirmando qué dispositivo aparece cuando se ha conectado tu USB.

En mi ejemplo veo `/dev/ttyACM0` como el dispositivo recién añadido.

Usando screen puedes conectarte y monitorizar la respuesta serie:

```
screen /dev/ttyACM0 115200
```

Deberías ver una respuesta similar a la siguiente:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Hello World! arm
Hello World! arm
Hello World! arm
Hello World! arm
```

Para ayudar con el proceso de usar Zephyr con Xiao y su placa de expansión se ha construido un repositorio con varias superposiciones y configuraciones utilizadas aquí. Los comandos incluidos en este artículo del wiki asumen que está ubicado en `../applications/xiao-zephyr-examples` relativo a la raíz de Zephyr. Se puede proporcionar una ruta alternativa a los comandos siguientes actualizándola.

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## Preparación de hardware

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO SAMD21</th>
      <th>Placa de expansión Seeed Studio</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
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

### Conocimientos del desarrollador

#### Placa de expansión XIAO

  Para poder usar módulos Grove con Seeed Studio XIAO SAMD21, utilizaremos una [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) y conectaremos el XIAO SAMD21 en ella.

  Después de eso, los conectores Grove de la placa se pueden usar para conectar módulos Grove

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### Definiciones de pines

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=samd21" target="_blank" rel="noopener noreferrer">Explora el pinout interactivo</a>
</div>

  Debes seguir el gráfico de abajo para usar los números de pin internos apropiados cuando conectes los módulos Grove a los conectores Grove en el Grove Shield para Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg"style={{width:900, height:'auto'}}/></div>

### Funcionalidad principal

- LED integrado
- USB HID
- LittleFS
- TFLite

#### LED integrado

Para este ejemplo usaremos el ejemplo blinky para hacer parpadear el LED integrado.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/blinky
```

Pulsa dos veces RESET o puentea el pin RST a GND:

```
west flash
```

Verás que el LED amarillo integrado se enciende y apaga creando un efecto de parpadeo.

Profundicemos un poco en este ejemplo para ver por qué funciona.

El código de ejemplo asociado hace referencia a led0:

```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

Esto se define en el código devicetree de Xiao SAMD21 mediante un alias:

```
 aliases {
  led0 = &led;
 };

 leds {
  compatible = "gpio-leds";
  led: led_0 {
   gpios = <&porta 17 GPIO_ACTIVE_LOW>;
   label = "LED";
  };
 };
```

Corresponde al pin PA17 en la placa. Esto se puede encontrar a través del esquema de Xiao SAMD21 revisando el MCU y viendo el etiquetado en los pines.

Para los pines con el breakout de Xiao no necesitas usar directamente el mapeo de pines &porta y &portb ya que los archivos de la placa proporcionan un conector Xiao que simplifica la interfaz.

Por ejemplo, si fuera a referenciar D0 lo referenciaría como `&porta 2` o `&xiao_d 0`.

```
/ {
 xiao_d: connector {
  compatible = "seeed,xiao-gpio";
  #gpio-cells = <2>;
  gpio-map-mask = <0xffffffff 0xffffffc0>;
  gpio-map-pass-thru = <0 0x3f>;
  gpio-map
   = <0 0 &porta 2 0>  /* D0 */
   , <1 0 &porta 4 0>  /* D1 */
   , <2 0 &porta 10 0>  /* D2 */
   , <3 0 &porta 11 0>  /* D3 */
   , <4 0 &porta 8 0>  /* D4 */
   , <5 0 &porta 9 0>  /* D5 */
   , <6 0 &portb 8 0>  /* D6 */
   , <7 0 &portb 9 0>  /* D7 */
   , <8 0 &porta 7 0>  /* D8 */
   , <9 0 &porta 5 0>  /* D9 */
   , <10 0 &porta 6 0>  /* D10 */
   ;
 };
};
```

#### USB HID

Para esta aplicación de ejemplo usaremos el ejemplo de USB HID Mouse para permitir que el Xiao SAMD21 active clics del ratón para el ordenador host.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/usb/hid-mouse --  -DDTC_OVERLAY_FILE=/home/nineso/zephyrproject/zephyr/boards/shields/seeed_xiao_expansion_board/seeed_xiao_expansion_board.overlay
```

Pulsa dos veces RESET o haz un corto entre el pin RST y GND:

```
west flash
```

Después de que tu Xiao se reinicie ahora deberías poder controlar el botón izquierdo del ratón mediante el botón de tu placa de expansión. Prueba a pasar el cursor sobre algún texto y haz doble clic rápidamente en el botón. Verás que el texto se resalta de forma similar a como si usaras tu ratón normal para hacer clic izquierdo. También notarás que el LED integrado se enciende cuando pulsas el botón, ya que el ejemplo también depende de que se configure un LED en el devicetree.

Se pueden configurar botones adicionales para usar con el ejemplo, ya que permite configurar hasta 4 botones para activar tanto botones como dirección del ratón con fines de demostración.

```
 buttons {
  compatible = "gpio-keys";
  xiao_button0: button_0 {
   gpios = <&xiao_d 1 (GPIO_PULL_UP | GPIO_ACTIVE_LOW)>;
   label = "SW0";
   zephyr,code = <INPUT_KEY_0>;
  };
 };

 aliases {
  sw0 = &xiao_button0;
 };
```

Aquí puedes ver en el ejemplo que `&xiao_d` 1 se usa para indicar el pin D1. Este mapeo lo proporcionan los archivos de placa del Xiao SAMD21 y lo hace conveniente para conectarse a un pin dado, ya que no necesitas conocer el mapeo interno del MCU, sino que puedes basarte en el pinout del Xiao.

Para el ejemplo de HID Mouse los botones se determinan por si son `compatible = "gpio-keys";` y si tienen un mapeo a teclas asociadas (0-3 para el ratón). En este caso estamos usando `zephyr,code = <INPUT_KEY_0>;` que corresponde al botón izquierdo del ratón.

El alias `led0` se establece en el archivo devicetree de la placa como se mencionó en la sección anterior.

#### LittleFS

Para este ejemplo usaremos el ejemplo de littlefs de Zephyr para crear una partición littlefs y guardar el archivo en el sistema de archivos. Luego nos volveremos a conectar y confirmaremos que sigue ahí mediante la salida serie.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/fs/littlefs -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Pulsa dos veces RESET o haz un corto entre el pin RST y GND:

```
west flash
```

Espera un momento a que el MCU se reinicie después de flashear y conéctate al monitor:

```
screen /dev/ttyACM0 115200
```

Con esto cargado deberías ver algo similar a:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Sample program to r/w files on littlefs
Area 2 at 0x3c000 on nvmctrl@41004000 for 16384 bytes
I: LittleFS version 2.8, disk version 2.1
I: FS at nvmctrl@41004000:0x3c000 is 64 0x100-byte blocks with 512 cycle
I: sizes: rd 16 ; pr 16 ; ca 64 ; la 32
E: WEST_TOPDIR/modules/fs/littlefs/lfs.c:1351: Corrupted dir pair at {0x0, 0x1}
W: can't mount (LFS -84); formatting
I: /lfs mounted
/lfs mount: 0
/lfs: bsize = 16 ; frsize = 256 ; blocks = 64 ; bfree = 62

Listing dir /lfs ...
/lfs/boot_count read count:0 (bytes: 0)
/lfs/boot_count write new boot count 1: [wr:1]
I: Test file: /lfs/pattern.bin not found, create one!
------ FILE: /lfs/pattern.bin ------
01 55 55 55 55 55 55 55 02 55 55 55 55 55 55 55
03 55 55 55 55 55 55 55 04 55 55 55 55 55 55 55
05 55 55 55 55 55 55 55 06 55 55 55 55 55 55 55
07 55 55 55 55 55 55 55 08 55 55 55 55 55 55 55
09 55 55 55 55 55 55 55 0a 55 55 55 55 55 55 55
0b 55 55 55 55 55 55 55 0c 55 55 55 55 55 55 55
```

```
screen /dev/ttyACM0 115200
```

Ahora, al conectarnos de nuevo al monitor serie no vemos el formateo ni necesita crear un archivo:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Sample program to r/w files on littlefs
Area 2 at 0x3c000 on nvmctrl@41004000 for 16384 bytes
I: LittleFS version 2.8, disk version 2.1
I: FS at nvmctrl@41004000:0x3c000 is 64 0x100-byte blocks with 512 cycle
I: sizes: rd 16 ; pr 16 ; ca 64 ; la 32
/lfs mount: 0
/lfs: bsize = 16 ; frsize = 256 ; blocks = 64 ; bfree = 59

Listing dir /lfs ...
[FILE] boot_count (size = 1)
[FILE] pattern.bin (size = 547)
/lfs/boot_count read count:1 (bytes: 1)
/lfs/boot_count write new boot count 2: [wr:1]
------ FILE: /lfs/pattern.bin ------
02 55 55 55 55 55 55 55 03 55 55 55 55 55 55 55
04 55 55 55 55 55 55 55 05 55 55 55 55 55 55 55
06 55 55 55 55 55 55 55 07 55 55 55 55 55 55 55
08 55 55 55 55 55 55 55 09 55 55 55 55 55 55 55
0a 55 55 55 55 55 55 55 0b 55 55 55 55 55 55 55
0c 55 55 55 55 55 55 55 0d 55 55 55 55 55 55 55
0e 55 55 55 55 55 55 55 0f 55 55 55 55 55 55 55
10 55 55 55 55 55 55 55 11 55 55 55 55 55 55 55
12 55 55 55 55 55 55 55 13 55
```

#### TFLite - Hello World

Habilita TFLite con Zephyr y actualiza:

```
west config manifest.project-filter -- +tflite-micro
west update
```

Para este ejemplo vamos a usar el ejemplo tflite "Hello World" junto con nuestro overlay y conf de consola para leer la respuesta por USB serie.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/modules/tflite-micro/hello_world -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Pulsa dos veces RESET o haz un corto entre el pin RST y GND:

```
west flash
```

Espera un momento a que el MCU se reinicie después de flashear y conéctate al monitor:

```
screen /dev/ttyACM0 115200
```

Verás resultados devueltos desde la consola:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
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

### Componentes adicionales

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Pantalla I2C
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Botón
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Zumbador
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Tarjeta SD
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)

#### Grove - Expansion Board - Pantalla I2C

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/xiao_expansion_oled1.jpg" style={{width:600, height:'auto'}}/></div>

Para probar esta configuración podemos usar un ejemplo existente con Zephyr:

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/drivers/display -- -DSHIELD=seeed_xiao_expansion_board
```

Pulsa dos veces RESET o haz un corto entre el pin RST y GND:

```
west flash
```

Verás una pantalla que muestra varios cuadros negros y un cuadro parpadeante en la esquina dado que esta pantalla solo admite dos colores.

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
```

El archivo overlay del shield en este ejemplo configura una pantalla OLED SSD1306 en el registro 0x3C. Se selecciona como la pantalla de Zephyr en la sección chosen.

#### Grove - Expansion Board - Botón

Para probar esta configuración podemos usar un ejemplo existente con Zephyr que utilizaremos junto con el overlay y conf de consola USB.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/button -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf -DSHIELD=seeed_xiao_expansion_board
```

Pulsa dos veces RESET o haz un corto entre el pin RST y GND:

```
west flash
```

Espera un momento a que el MCU se reinicie después de flashear y conéctate al monitor:

```
screen /dev/ttyACM0 115200
```

Al pulsar el botón con el ejemplo se encenderá el LED integrado.

Verás resultados devueltos desde la consola:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Set up button at gpio@41004400 pin 4
Set up LED at gpio@41004400 pin 17
Press the button
Button pressed at 420744116
Button pressed at 454208099
Button pressed at 484598863
Button pressed at 518217016
Button pressed at 550754013
Button pressed at 591496990
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

El archivo de superposición de la aplicación se utiliza para configurar varios componentes de la placa. Usando este archivo se puede utilizar el ejemplo del botón, ya que la superposición permite que Zephyr configure el botón y lo ponga a disposición del código asociado.

En este caso se está utilizando la interfaz del conector &xiao_d para asociar D1 como un botón. Alternativamente podríamos haber utilizado aquí la interfaz `&porta` como `&porta 4`, que es el pin correspondiente en el MCU asociado con D1.

#### Grove - Placa de expansión - Zumbador

Activaremos nuestro zumbador usando el ejemplo blinky PWM para controlar su activación mediante una señal PWM. Para esto utilizaremos una superposición personalizada que habilita el PWM para el pin A3.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-samd21/xiao_expansion_buzzer.overlay"
```

Después de cargar el archivo uf2 deberías empezar a escuchar una serie de zumbidos que cambian de sonido a medida que la muestra se ejecuta.

Veamos por qué funciona esto:

```
/delete-node/ &pwm_led0;

/ {
 aliases {
  pwm-led = &pwm_led0;
 };

    pwm_leds {
        status = "okay";
        compatible = "pwm-leds";

        pwm_led0: pwm_led_0 {
            pwms = <&tcc1 1 PWM_HZ(880) >;
        };
    };
};

&pinctrl {
 pwm_default: pwm_default {
  group1 {
   pinmux = <PA11E_TCC1_WO1>;
  };
 };
};

&tcc1 {
 status = "okay";
 compatible = "atmel,sam0-tcc-pwm";
 /* Gives a maximum period of 1.4 s */
 prescaler = <1024>;
 #pwm-cells = <2>;

 pinctrl-0 = <&pwm_default>;
 pinctrl-names = "default";
};
```

La superposición en uso primero elimina el nodo `pwm_led0` existente, ya que esta placa ya está configurada con este alias. Luego configura el pin A3 para su uso como PWM.

Estamos usando el pin A3 que corresponde al GPIO PA11 en el SAMD21. Dado que su pinmux PWM asociado es PA11E_TCC1_WO1 usamos el temporizador tcc1 para el PWM.

#### Grove - Placa de expansión - Tarjeta SD

Usaremos aquí el ejemplo de sistema de archivos junto con el shield Xiao Expansion Board para intentar la comunicación con el lector de tarjetas SD mediante SPI. El shield de la placa de expansión tiene el pin CS configurado para el pin `&xiao_d 2` asociado, por lo que no se requiere trabajo de tu parte para asociar esta capacidad con la placa aparte de añadir el shield. Para prepararlo aún más estamos usando una configuración personalizada que habilita la funcionalidad de la tarjeta SD.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/fs/fs_sample -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.overlay" -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

Después de cargar el archivo uf2 conéctate al monitor:

```
screen /dev/ttyACM0 115200
```

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
[00:00:00.197,000] <inf> sd: Maximum SD clock is under 25MHz, using clock of 10000000Hz
[00:00:00.198,000] <inf> main: Block count 15519744
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

En la configuración asociada estamos habilitando SPI, el controlador de disco SDMMC y el GPIO. Sin esta configuración la superposición provocará un error ya que el ejemplo no puede encontrar la tarjeta SD.

La parte relevante del shield Xiao Expansion Board en realidad se sobrescribe en este ejemplo mediante el `xiao_expansion_sd.overlay` usado para el Xiao SAMD21 que se muestra a continuación:

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
  spi-max-frequency = <10000000>;
 };
};
```

Como se mencionó anteriormente, el mapeo del pin `&xiao_d 2` se utiliza para permitir que el pin D2 sea seleccionado para esto independientemente de la placa utilizada, siempre que admita la configuración de pines `&xiao_d`.

La razón por la que no estamos usando aquí la superposición del shield sino sobrescribiéndola es que la `spi-max-frequency` de `24000000` establecida por el shield es demasiado alta, lo que provoca que el SAMD21 falle.

#### Grove - Sensor de temperatura y humedad (SHT31)

Primero suelda los pines y conecta tu Xiao SAMD21 a la placa de expansión. Luego conecta un cable conector Grove entre el Grove SHT31 y uno de los puertos I2C de la placa de expansión.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/xiaod21_sht31.jpg" style={{width:600, height:'auto'}}/></div>

Para probar esta configuración podemos usar un ejemplo existente con Zephyr al que habilitaremos el soporte de consola USB con nuestra superposición y conf.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Pulsa dos veces RESET o cortocircuita el pin RST con GND:

```
west flash
```

Espera un momento a que el MCU se reinicie después de flashear y conéctate al monitor:

```
screen /dev/ttyACM0 115200
```

Verás resultados devueltos desde la consola:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
SHT3XD: 26.13 Cel ; 47.34 %RH
SHT3XD: 26.11 Cel ; 46.93 %RH
SHT3XD: 26.14 Cel ; 46.78 %RH
SHT3XD: 26.17 Cel ; 46.60 %RH
SHT3XD: 26.19 Cel ; 46.25 %RH
SHT3XD: 26.21 Cel ; 46.01 %RH
SHT3XD: 26.21 Cel ; 45.82 %RH
SHT3XD: 26.23 Cel ; 46.28 %RH
SHT3XD: 26.27 Cel ; 47.11 %RH
SHT3XD: 26.27 Cel ; 47.72 %RH
```

Profundicemos un poco en este ejemplo para ver por qué funciona:

```
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

El archivo de superposición de la aplicación se utiliza para configurar varios componentes de la placa. Usando este archivo se puede utilizar el ejemplo SHT31, ya que la superposición informa a la [lógica del ejemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) cómo configurar el sensor para nuestra placa.

#### Módulo de pantalla LCD de 1,69 pulgadas, resolución 240×280, interfaz SPI

Para este ejemplo usaremos SPI para conectar una pantalla LCD de 1,69 pulgadas con una resolución de 240x280.

Primero conecta tu placa a la pantalla LCD usando la siguiente imagen como guía (en este caso estamos usando el Xiao SAMD21 pero se utiliza la misma distribución de pines para la conexión aquí).

| Pantalla LCD SPI de 1,69 pulgadas| XIAO SAMD21 |
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

A continuación, con el hardware preparado podemos compilar y flashear:

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
```

Pulsa dos veces RESET o cortocircuita el pin RST con GND:

```
west flash
```

Con el nuevo firmware en su lugar, el dispositivo ahora muestra la misma pantalla de demostración que vimos anteriormente en la placa de expansión, solo que ahora actualizada para la pantalla LCD en color mediante SPI.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>

## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaboradores](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=57293601) de Seeed Studio.
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
