---
description: XIAO SAMD21 Con Zephyr(RTOS)
title:  XIAO SAMD21 Con Zephyr(RTOS)
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-SAMD21-Zephyr-RTOS
last_update:
  date: 04/16/2023
  author: timo614
---

# XIAO SAMD21 Con Zephyr(RTOS)

<div align="center"><img width ="{100}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-samd21.png"/></div>

## Qué es RTOS

Uno de los componentes más importantes de los sistemas embebidos actuales es el **RTOS** también conocido como **Sistema Operativo de Tiempo Real**, que es responsable de todo, desde la programación de tareas hasta la ejecución de aplicaciones.

**RTOS** está diseñado para proporcionar un modo de ejecución predecible. Cuando el procesamiento debe cumplir con el límite de tiempo del sistema, se utiliza RTOS. Por lo tanto, en comparación con GPOS (Sistema Operativo de Propósito General), RTOS suele ser ligero y pequeño en tamaño, y generalmente solo proporciona funciones requeridas para ejecutar tipos específicos de aplicaciones en hardware específico. En algunos casos, los desarrolladores pueden modificar el RTOS existente, reducirlo para proporcionar solo la funcionalidad requerida por una aplicación específica, y/o personalizar su funcionalidad o características de rendimiento.

## Qué es [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

El SO [**Zephyr**](https://www.zephyrproject.org/) está basado en un kernel de huella pequeña diseñado para uso en sistemas embebidos y con recursos limitados: desde simples sensores ambientales embebidos y wearables LED hasta controladores embebidos sofisticados, relojes inteligentes y aplicaciones inalámbricas IoT.

## Características

Zephyr ofrece un gran y creciente número de características incluyendo:

### Suite extensa de servicios de Kernel

Zephyr ofrece una serie de servicios familiares para el desarrollo:

- *Servicios Multi-hilo* para hilos cooperativos, basados en prioridad, no preventivos y preventivos con división de tiempo round robin opcional. Incluye soporte de API compatible con POSIX pthreads.
- *Servicios de Interrupción* para registro en tiempo de compilación de manejadores de interrupción.
- *Servicios de Asignación de Memoria* para asignación dinámica y liberación de bloques de memoria de tamaño fijo o variable.
- *Servicios de Sincronización Entre Hilos* para semáforos binarios, semáforos de conteo y semáforos mutex.
- *Servicios de Paso de Datos Entre Hilos* para colas de mensajes básicas, colas de mensajes mejoradas y flujos de bytes.
- *Servicios de Gestión de Energía* como Gestión de Energía del Sistema general, definida por aplicación o política, y Gestión de Energía de Dispositivo de grano fino, definida por controlador.

### Múltiples Algoritmos de Programación

  Zephyr proporciona un conjunto integral de opciones de programación de hilos:

- Programación Cooperativa y Preventiva
- Earliest Deadline First (EDF)
- Programación Meta IRQ implementando comportamiento de "interrupt bottom half" o "tasklet"
- División de tiempo: Habilita la división de tiempo entre hilos preventivos de igual prioridad
- Múltiples estrategias de cola:
  - Cola de preparados de lista enlazada simple
  - Cola de preparados de árbol rojo/negro
  - Cola de preparados multi-cola tradicional

### Soporte Bluetooth Low Energy 5.0

Cumple con Bluetooth 5.0 (ESR10) y soporte de Controlador Bluetooth Low Energy (LE Link Layer). Incluye malla Bluetooth y un controlador Bluetooth listo para calificación Bluetooth.

- Perfil de Acceso Genérico (GAP) con todos los roles LE posibles
- Perfil de Atributo Genérico (GATT)
- Soporte de emparejamiento, incluyendo la característica de Conexiones Seguras de Bluetooth 4.2
- Abstracción de controlador HCI limpia
- Interfaz HCI cruda para ejecutar Zephyr como Controlador en lugar de una pila Host completa
- Verificado con múltiples controladores populares
- Altamente configurable

Soporte de Malla:

- Características de Relay, Friend Node, Low-Power Node (LPN) y GATT Proxy
- Ambos portadores de Aprovisionamiento soportados (PB-ADV & PB-GATT)
- Altamente configurable, ajustándose en dispositivos con al menos 16k RAM

*Referencia: [**Proyecto Zephyr**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## Primeros Pasos

Esta wiki cubre el soporte de [Zephyr](https://www.zephyrproject.org/) para el [XIAO SAMD21 Zephyr(RTOS) Getting Started](https://docs.zephyrproject.org/latest/boards/seeed/seeeduino_xiao/doc/index.html). Con la ayuda de esta guía podrás utilizar el conjunto de características disponibles para la placa.

El primer paso para trabajar con Zephyr es configurar el SDK y la cadena de herramientas para el desarrollo local. La [guía de primeros pasos de Zephyr](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) debe ser consultada para el procedimiento de configuración asociado necesario para tu entorno.

Una vez que la cadena de herramientas de Zephyr haya sido configurada y se haya descargado un SDK asociado, puedes comenzar el desarrollo de aplicaciones.

Para programar el Xiao SAMD21 se pueden seguir los siguientes pasos:

1. Compilar un ejemplo o tu aplicación
2. Conectar el Xiao SAMD21
3. Cortocircuitar el pin RST a GND (usando los puntos de prueba visibles) para arrancar el MCU en modo bootloader (o presionar el botón RESET en una placa de expansión conectada dos veces seguidas rápidamente)
4. Proceder a usar `west flash` para flashear tu firmware a la placa

El ejemplo más simple es ejecutar la muestra "Hello World" en la placa. Después de cambiar al directorio de la instalación de Zephyr ejecuta los siguientes comandos.

```
west build -p always -b seeeduino_xiao samples/subsys/usb/console
```

Presiona dos veces RESET o conecta el pin RST a GND:

```
west flash
```

Encuentra el puerto para tu dispositivo escribiendo `ls /dev/tty*` y confirmando qué dispositivo aparece cuando tu USB ha sido conectado.

En mi ejemplo veo `/dev/ttyACM0` como el dispositivo recién añadido.

Usando screen puedes entonces conectarte y monitorear la respuesta serial:

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

Para ayudar con el proceso de usar Zephyr con Xiao y su placa de expansión, se ha construido un repositorio con varias superposiciones y configuraciones utilizadas aquí. Los comandos incluidos en este artículo wiki asumen que está ubicado en `../applications/xiao-zephyr-examples` relativo a la raíz de zephyr. Se puede proporcionar una ruta alternativa a los comandos a continuación actualizándola.

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## Preparación del Hardware

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO SAMD21</th>
      <th>Placa de Expansión Seeed Studio</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### Conocimiento del Desarrollador

#### Placa de Expansión XIAO

  Para usar módulos Grove con Seeed Studio XIAO SAMD21, utilizaremos una [Base de Expansión Seeed Studio para XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) y conectaremos XIAO SAMD21 en ella.

  Después de eso, los conectores Grove en la placa se pueden usar para conectar módulos Grove

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### Definiciones de Pines

  Necesitas seguir el gráfico a continuación para usar los números de pin internos apropiados al conectar los módulos Grove a los conectores Grove en el Shield Grove para Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg"style={{width:900, height:'auto'}}/></div>

### Funcionalidad Principal

- LED integrado
- USB HID
- LittleFS
- TFLite

#### LED Integrado

Para este ejemplo usaremos la muestra de parpadeo para hacer parpadear el LED integrado.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/blinky
```

Presiona dos veces RESET o conecta el pin RST a GND:

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

Esto se define en el código del árbol de dispositivos del Xiao SAMD21 a través de un alias:

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

Corresponde con el pin PA17 en la placa. Esto se puede encontrar a través del esquemático del Xiao SAMD21 revisando el MCU y viendo el etiquetado en los pines.

Para los pines con el breakout del Xiao no necesitas usar el mapeo de pines &porta y &portb directamente ya que los archivos de la placa proporcionan un conector Xiao que simplifica la interfaz.

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

Para esta aplicación de ejemplo usaremos la muestra USB HID Mouse para permitir que el Xiao SAMD21 active clics del ratón para la computadora anfitriona.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/usb/hid-mouse --  -DDTC_OVERLAY_FILE=/home/nineso/zephyrproject/zephyr/boards/shields/seeed_xiao_expansion_board/seeed_xiao_expansion_board.overlay
```

Presiona dos veces RESET o cortocircuita el pin RST a GND:

```
west flash
```

Después de que tu Xiao se reinicie, ahora deberías poder controlar el botón izquierdo del ratón a través del botón en tu placa de expansión. Intenta pasar el cursor sobre algún texto y hacer doble clic en el botón rápidamente. Verás que el texto se resalta de manera similar a como si usaras tu ratón normal para hacer clic izquierdo. También notarás que el LED integrado se enciende cuando haces clic en el botón, ya que el ejemplo también depende de que un LED esté configurado en el devicetree.

Se pueden configurar botones adicionales para usar con el ejemplo, ya que permite que hasta 4 botones se configuren para activar tanto botones como dirección para el ratón con fines de ejemplo.

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

Puedes ver aquí en el ejemplo que `&xiao_d` 1 se usa para indicar el pin D1. Este mapeo es proporcionado por los archivos de placa Xiao SAMD21 y hace conveniente la conexión a un pin dado ya que no necesitas conocer el mapeo subyacente del MCU sino que puedes confiar en el pinout del Xiao.

Para la muestra HID Mouse, los botones se determinan por si son `compatible = "gpio-keys";` y si tienen un mapeo a las teclas asociadas (0-3 para el ratón). En este caso estamos usando `zephyr,code = <INPUT_KEY_0>;` que corresponde al botón izquierdo del ratón.

El alias `led0` es establecido por el archivo devicetree de la placa como se mencionó en la sección anterior.

#### LittleFS

Para este ejemplo usaremos la muestra littlefs de zephyr para crear una partición littlefs y guardar el archivo en el sistema de archivos. Luego nos reconectaremos y confirmaremos que aún está ahí a través de la salida serial.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/fs/littlefs -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Presiona dos veces RESET o cortocircuita el pin RST a GND:

```
west flash
```

Espera un momento para que el MCU se reinicie después del flasheo y conéctate al monitor:

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

Ahora conectándose nuevamente al monitor serie no vemos el formato ni necesita crear un archivo:

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

#### TFLite - Hola Mundo

Habilita TFLite con Zephyr y actualiza:

```
west config manifest.project-filter -- +tflite-micro
west update
```

Para este ejemplo vamos a usar la muestra tflite "Hello World" junto con nuestra superposición de consola y configuración para leer la respuesta a través de USB serial.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/modules/tflite-micro/hello_world -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Presiona RESET dos veces o conecta el pin RST a GND:

```
west flash
```

Espera un momento para que el MCU se reinicie después del flasheo y conéctate al monitor:

```
screen /dev/ttyACM0 115200
```

Verás los resultados devueltos desde la consola:

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

### Componentes Adicionales

- [Grove - Placa de Expansión](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Pantalla I2C
- [Grove - Placa de Expansión](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Botón
- [Grove - Placa de Expansión](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Zumbador
- [Grove - Placa de Expansión](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Tarjeta SD
- [Grove - Sensor de Temperatura y Humedad (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [Módulo de Pantalla LCD de 1.69 pulgadas, Resolución 240×280, Interfaz SPI](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)

#### Grove - Placa de Expansión - Pantalla I2C

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/xiao_expansion_oled1.jpg" style={{width:600, height:'auto'}}/></div>

Para probar esta configuración podemos usar una muestra existente con Zephyr:

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/drivers/display -- -DSHIELD=seeed_xiao_expansion_board
```

Presiona RESET dos veces o conecta el pin RST a GND:

```
west flash
```

Verás una pantalla que muestra múltiples cajas negras y una caja parpadeante en la esquina dado que esta pantalla solo soporta dos colores.

Profundicemos en este ejemplo un poco para ver por qué funciona:

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

El archivo de superposición del shield en este ejemplo configura una pantalla OLED SSD1306 en el registro 0x3C. Se selecciona como la pantalla de zephyr en la sección chosen.

#### Grove - Placa de Expansión - Botón

Para probar esta configuración podemos usar una muestra existente con Zephyr que usaremos junto con la superposición de consola USB y conf.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/button -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf -DSHIELD=seeed_xiao_expansion_board
```

Presiona dos veces RESET o conecta el pin RST a GND:

```
west flash
```

Espera un momento para que el MCU se reinicie después del flasheo y conéctate al monitor:

```
screen /dev/ttyACM0 115200
```

Presionar el botón con la muestra activará el LED integrado para que se encienda.

Verás los resultados devueltos desde la consola:

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

El archivo de superposición de la aplicación se utiliza para configurar varios componentes de la placa. Usando este archivo, el ejemplo del botón puede utilizarse ya que la superposición permite al Zephyr configurar el botón y hacerlo disponible para el código asociado.

En este caso está usando la interfaz del conector &xiao_d para asociar D1 como un botón. Alternativamente podríamos haber usado la interfaz `&porta` aquí como `&porta 4` que es el pin correspondiente en el MCU asociado con D1.

#### Grove - Placa de Expansión - Zumbador

Activaremos nuestro zumbador usando el ejemplo PWM parpadeante para controlar su activación mediante una señal PWM. Para esto usaremos una superposición personalizada que habilita el PWM para el pin A3.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-samd21/xiao_expansion_buzzer.overlay"
```

Después de cargar el archivo uf2 deberías comenzar a escuchar una serie de zumbidos que cambian de sonido mientras la muestra ejecuta su curso.

Veamos por qué esto funciona:

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

La superposición en uso primero elimina el nodo `pwm_led0` existente ya que esta placa está configurada con este alias. Luego configura el pin A3 para su uso como PWM.

Estamos usando el pin A3 que corresponde con el GPIO PA11 en el SAMD21. Dado que su pinmux PWM asociado es PA11E_TCC1_WO1, usamos el temporizador tcc1 para el PWM.

#### Grove - Placa de Expansión - Tarjeta SD

Usaremos la muestra del sistema de archivos aquí junto con el shield de la Placa de Expansión Xiao para probar la interfaz con el lector de tarjetas SD sobre SPI. El shield de la placa de expansión tiene el pin CS configurado para el pin `&xiao_d 2` asociado, por lo que no se necesita trabajo de tu parte para asociar esta capacidad con la placa además de agregar el shield. Para prepararlo más, estamos usando una configuración personalizada que habilita la funcionalidad de la tarjeta SD.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/fs/fs_sample -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.overlay" -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

Después de cargar el archivo uf2, conéctate al monitor:

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

En este caso mi tarjeta SD tenía dos archivos. Sus nombres y sus tamaños fueron mostrados en mi consola.

Veamos los elementos relevantes en juego aquí:

```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

En la configuración asociada estamos habilitando SPI, el controlador de disco SDMMC, y el GPIO. Sin esta configuración, la superposición llevará a un error ya que la muestra no puede encontrar la tarjeta SD.

La parte relevante del shield de la Placa de Expansión Xiao es en realidad anulada en este ejemplo a través del `xiao_expansion_sd.overlay` usado para el Xiao SAMD21 mostrado a continuación:

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

Como se mencionó anteriormente, el mapeo de pines `&xiao_d 2` se utiliza para permitir que el pin D2 sea seleccionado para esto independientemente de la placa utilizada, siempre que soporte la configuración de pines `&xiao_d`.

La razón por la que no estamos usando la superposición del shield aquí sino sobrescribiéndola es que la `spi-max-frequency` de `24000000` establecida por el shield es demasiado alta, lo que causa que el SAMD21 falle.

#### Grove - Sensor de Temperatura y Humedad (SHT31)

Primero solda los pines y conecta tu Xiao SAMD21 a la placa de expansión. Luego conecta un cable conector grove entre el Grove SHT31 y uno de los puertos I2C en la placa de expansión.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/xiaod21_sht31.jpg" style={{width:600, height:'auto'}}/></div>

Para probar esta configuración podemos usar una muestra existente con Zephyr que habilitaremos con soporte de consola USB con nuestra superposición y configuración.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Presiona dos veces RESET o cortocircuita el pin RST a GND:

```
west flash
```

Espera un momento para que el MCU se reinicie después del flasheo y conéctate al monitor:

```
screen /dev/ttyACM0 115200
```

Verás los resultados devueltos desde la consola:

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

El archivo de superposición de la aplicación se utiliza para configurar varios componentes de la placa. Usando este archivo, el ejemplo SHT31 puede utilizarse ya que la superposición informa a la [lógica de muestra](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) cómo configurar el sensor para nuestra placa.

#### Módulo de Pantalla LCD de 1.69 pulgadas, Resolución 240×280, Interfaz SPI

Para este ejemplo usaremos SPI para conectar a una LCD de 1.69 pulgadas con una resolución de 240x280.

Primero conecta tu placa a la pantalla LCD usando la siguiente imagen como guía (en este caso estamos usando el Xiao SAMD21 pero el mismo diseño de pines se usa para conectar aquí).

| Pantalla SPI LCD de 1.69 pulgadas| XIAO SAMD21 |
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

A continuación, con el hardware preparado, podemos compilar y flashear:

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
```

Presiona dos veces RESET o conecta el pin RST a GND:

```
west flash
```

Con el nuevo firmware en su lugar, el dispositivo ahora muestra la misma pantalla de demostración que vimos anteriormente en la placa de expansión, solo que ahora actualizada para la pantalla LCD a color sobre SPI.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>

## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaborador](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=57293601) de Seeed Studio.
- Gracias a **los esfuerzos de Tim** y tu trabajo será [exhibido](https://wiki.seeedstudio.com/es/Honorary-Contributors/).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
