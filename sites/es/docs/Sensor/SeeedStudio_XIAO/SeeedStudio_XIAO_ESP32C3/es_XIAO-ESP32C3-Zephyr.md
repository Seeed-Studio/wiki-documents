---
description: XIAO ESP32C3 con Zephyr(RTOS)
title: XIAO ESP32C3 con Zephyr(RTOS)
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-ESP32C3-Zephyr
last_update:
  date: 4/17/2023
  author: timo614
createdAt: '2023-07-26'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/es/XIAO-ESP32C3-Zephyr/
---

# XIAO ESP32C3 con Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-esp32c3.png"/></div>

## Qué es un RTOS

Uno de los componentes más importantes de los sistemas embebidos actuales es el **RTOS**, también conocido como **Real-Time Operating System** (sistema operativo en tiempo real), que se encarga de todo, desde la planificación de tareas hasta la ejecución de aplicaciones.

El **RTOS** está diseñado para proporcionar un modo de ejecución predecible. Cuando el procesamiento debe cumplir con el límite de tiempo del sistema, se utiliza un RTOS. Por lo tanto, en comparación con un GPOS (General Purpose Operating System), un RTOS suele ser ligero y de tamaño reducido, y en general solo proporciona las funciones necesarias para ejecutar tipos específicos de aplicaciones en hardware específico. En algunos casos, los desarrolladores pueden modificar el RTOS existente, reducirlo para que solo proporcione la funcionalidad requerida por una aplicación específica y/o personalizar sus características de funcionalidad o rendimiento.

## Qué es [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

El sistema operativo [**Zephyr**](https://www.zephyrproject.org/) se basa en un kernel de pequeña huella diseñado para su uso en sistemas embebidos y con recursos limitados: desde simples sensores ambientales embebidos y wearables con LED hasta sofisticados controladores embebidos, relojes inteligentes y aplicaciones inalámbricas de IoT.

## Características

Zephyr ofrece un gran número de características, en constante crecimiento, que incluyen:

### Amplio conjunto de servicios del kernel

Zephyr ofrece una serie de servicios familiares para el desarrollo:

- *Servicios de multiproceso* para hilos cooperativos, basados en prioridad, no expropiativos y expropiativos con división de tiempo round robin opcional. Incluye compatibilidad con la API POSIX pthreads.
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
  - Cola de listados enlazados simple
  - Cola de listados rojo/negro
  - Cola tradicional de múltiples colas

### Compatibilidad con Bluetooth Low Energy 5.0

Compatible con Bluetooth 5.0 (ESR10) y con el controlador Bluetooth Low Energy (capa de enlace LE). Incluye Bluetooth mesh y un controlador Bluetooth listo para la cualificación Bluetooth.

- Perfil de Acceso Genérico (GAP) con todos los posibles roles LE
- Perfil de Atributos Genéricos (GATT)
- Compatibilidad con emparejamiento, incluida la función Secure Connections de Bluetooth 4.2
- Abstracción limpia del controlador HCI
- Interfaz HCI en bruto para ejecutar Zephyr como un controlador en lugar de una pila de Host completa
- Verificado con múltiples controladores populares
- Altamente configurable

Compatibilidad con Mesh:

- Funciones de Relay, Friend Node, Low-Power Node (LPN) y GATT Proxy
- Compatibles ambos portadores de Provisioning (PB-ADV y PB-GATT)
- Altamente configurable, se adapta a dispositivos con al menos 16k de RAM

*Referencia: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## Primeros pasos

El primer paso para trabajar con Zephyr es configurar el SDK y la toolchain para el desarrollo local. Debe consultarse la [guía de inicio de Zephyr](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) para el procedimiento de configuración asociado necesario para tu entorno.

Una vez que la toolchain de Zephyr se haya configurado y se haya descargado un SDK asociado, puedes comenzar el desarrollo de aplicaciones.

Para el Xiao ESP32C3 se puede consultar el [archivo de descripción de la placa](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32c3/doc/index.html) para obtener más información de configuración.

Para obtener los blobs necesarios para usar el ESP32C3 ejecuta el siguiente comando:

```
west blobs fetch hal_espressif
```

Después de esto se pueden compilar ejemplos y flashearlos en la placa.

El ejemplo más sencillo es ejecutar el ejemplo "Hello World" en la placa. Después de cambiar al directorio de la instalación de Zephyr ejecuta los siguientes comandos.

```
west build -p always -b xiao_esp32c3 samples/hello_world
west flash
west espressif monitor
```

Con el comando final deberías ver la respuesta que muestra el saludo "Hello World!".

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Hello World! xiao_esp32c3/esp32c3
```

Para ayudar con el proceso de uso de Zephyr con Xiao y su placa de expansión se ha creado un repositorio con varias superposiciones y configuraciones utilizadas aquí. Los comandos incluidos en este artículo de la wiki asumen que está ubicado en `../applications/xiao-zephyr-examples` con respecto a la raíz de Zephyr. Se puede proporcionar una ruta alternativa a los comandos siguientes actualizándola.

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## Preparación de hardware

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Placa de expansión Seeed Studio</th>
      <th>Grove Red LED</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED-p-1142.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### Conocimientos para desarrolladores

#### Placa de expansión XIAO

  Para poder utilizar módulos Grove con Seeed Studio XIAO ESP32C3, usaremos una [base de expansión Seeed Studio para XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) y conectaremos el XIAO ESP32C3 en ella.

  Después de eso, los conectores Grove de la placa se pueden utilizar para conectar módulos Grove.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### Definiciones de pines

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=c3" target="_blank" rel="noopener noreferrer">Explora el pinout interactivo</a>
</div>

  Debes seguir el gráfico siguiente para utilizar los números de pines internos apropiados cuando conectes los módulos Grove a los conectores Grove en el Grove Shield para Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png"style={{width:900, height:'auto'}}/></div>

### Funcionalidad principal

- GPIO / LED habilitado
- Bluetooth
- Wi-Fi
- TFLite

#### GPIO / LED habilitado

Para probar esta configuración podemos usar el ejemplo blinky con Zephyr, pero utilizaremos un LED Grove adicional y una superposición para redefinir el LED al pin D0 para demostrar que esto funciona (el Xiao ESP32C3 no tiene un LED integrado programable):

```
west build -p always -b xiao_esp32c3 samples/basic/blinky -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/d0_led.overlay
west flash
west espressif monitor
```

Pulsa dos veces RESET o cortocircuita el pin RST con GND.

```
west flash
```

Verás que el LED rojo conectado se enciende y apaga creando un efecto de parpadeo.

Profundicemos un poco en este ejemplo para ver por qué funciona.

El código de ejemplo asociado hace referencia a led0:

```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

La superposición del LED (`xiao-zephyr-examples/d0_led.overlay`) define este LED por nosotros:

```
/ {
 aliases {
  led0 = &led0;
 };

 leds {
  compatible = "gpio-leds";
  led0: led_0 {
   gpios = <&xiao_d 0 GPIO_ACTIVE_HIGH>;
   label = "Demo LED";
  };
 };
};
```

Esta superposición configura D0 (como se muestra mediante `&xiao_d 0`) como un LED y lo asocia con el alias `led0`. `led0` es un alias que permite que muchos ejemplos lo utilicen como el LED que se controla, ya que buscan específicamente este nombre.

Si monitorizas la salida serie mediante `west espressif monitor` verás una salida similar a:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
LED state: OFF
LED state: ON
LED state: OFF
LED state: ON
```

#### Bluetooth

Para probar esta configuración podemos usar un ejemplo existente con Zephyr:

```
west build -p always -b xiao_esp32c3 samples/bluetooth/observer
west flash
west espressif monitor
```

Verás una consola disponible para enviar comandos a la placa:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Starting Observer Demo
Started scanning...
Device found: E5:44:60:88:DB:99 (random) (RSSI -92), type 0, AD data len 27
Device found: F3:38:F3:AD:FC:C6 (random) (RSSI -63), type 3, AD data len 8
Device found: 49:E6:31:0F:A6:25 (random) (RSSI -55), type 2, AD data len 28
Device found: EC:11:27:22:AF:D2 (public) (RSSI -80), type 0, AD data len 31
Device found: FB:3C:4A:AC:64:33 (random) (RSSI -78), type 0, AD data len 30
Device found: 79:05:36:B8:1E:1B (random) (RSSI -34), type 2, AD data len 4
Device found: 77:4D:FC:E2:12:D4 (random) (RSSI -86), type 2, AD data len 4
Device found: E0:9D:13:29:DA:15 (public) (RSSI -99), type 0, AD data len 31
Device found: 53:17:1B:22:70:23 (random) (RSSI -97), type 0, AD data len 18
```

```
CONFIG_BT=y
CONFIG_BT_OBSERVER=y
```

El [archivo conf](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf) aquí habilita funciones relacionadas con bluetooth para la compilación de Zephyr.

#### Wi-Fi

Para probar esta configuración podemos usar un ejemplo existente con Zephyr:

```
west build -p always -b xiao_esp32c3 samples/net/wifi
west flash
west espressif monitor
```

Verás una consola disponible para enviar comandos a la placa:

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
uart:~$
```

Existen varios comandos que te permiten ver y conectarte a redes locales; consulta el [readme del ejemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/README.rst) para obtener más información.

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
uart:~$ wifi scan
Scan requested
Num  | SSID                             (len) | Chan (Band)   | RSSI | Security        | BSSID             | MFP
1    | Maredonia                        9     | 6    (2.4GHz) | -41  | WPA2-PSK        |                   | Disable
2    | Maredonia                        9     | 6    (2.4GHz) | -41  | WPA2-PSK        |                   | Disable
3    | Aernazonea                       10    | 6    (2.4GHz) | -41  | WPA2-PSK        |                   | Disable
4    | Aernazonea                       10    | 6    (2.4GHz) |
```

Profundicemos un poco en este ejemplo para ver por qué funciona:

```
&wifi {
 status = "okay";
};
```

El [archivo overlay de la app](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32c3.overlay) se utiliza para configurar varios componentes de la placa. Usando este archivo se puede utilizar el ejemplo, ya que el overlay informa a la lógica del ejemplo para habilitar Wi-Fi.

```
CONFIG_WIFI=y

CONFIG_NETWORKING=y
CONFIG_NET_L2_ETHERNET=y

CONFIG_NET_IPV6=n
CONFIG_NET_IPV4=y
CONFIG_NET_DHCPV4=y
CONFIG_ESP32_WIFI_STA_AUTO_DHCPV4=y

CONFIG_NET_LOG=y
```

El [archivo conf](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32c3.conf) aquí habilita varias funciones relacionadas con redes para la compilación de Zephyr.

#### TFLite - Hello World

Habilita TFLite con Zephyr y actualiza:

```
west config manifest.project-filter -- +tflite-micro
west update
```

Compila el ejemplo y flashea tu placa:

```
west build -p always -b xiao_esp32c3 samples/modules/tflite-micro/hello_world
west flash
west espressif monitor
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

Información adicional sobre TFLite está fuera del alcance de esta guía, pero el ejemplo sirve como una guía de las capacidades del dispositivo y de los componentes necesarios para ejecutar la configuración de TFLite.

### Componentes adicionales

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Pantalla I2C
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Botón
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Round Display for Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)

#### Grove - Expansion Board - Pantalla I2C

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/xiao_expansion_oled.jpg" style={{width:600, height:'auto'}}/></div>

Para probar esta configuración podemos usar un ejemplo existente con Zephyr:

```
west build -p always -b xiao_esp32c3 samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash
```

Verás una pantalla que muestra varios cuadros negros y un cuadro parpadeante en la esquina, dado que esta pantalla solo admite dos colores.

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

El shield configura una pantalla OLED SSD1306 en el registro 0x3C. Se selecciona como la pantalla de Zephyr en la sección chosen.

#### Grove - Expansion Board - Botón

Para probar esta configuración podemos usar un ejemplo existente con Zephyr, pero utilizaremos un LED Grove adicional y un overlay para reasignar el LED al pin D0 para demostrar que esto funciona (el Xiao ESP32C3 no tiene un LED programable integrado):

```
west build -p always -b xiao_esp32c3 samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/d0_led.overlay
west flash
west espressif monitor
```

Al pulsar el botón con el ejemplo, se encenderá el LED asociado a D0.

Verás resultados devueltos desde la consola:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Set up button at gpio@60004000 pin 3
Set up LED at gpio@60004000 pin 2
Press the button
Button pressed at 39818120
Button pressed at 63872629
Button pressed at 168304681
Button pressed at 241105558
Button pressed at 346324767
Button pressed at 382181856
Button pressed at 419342954
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

El archivo de shield / overlay se utiliza para configurar varios componentes de la placa. Usando este archivo se puede utilizar el ejemplo del botón, ya que el overlay permite que Zephyr configure el botón y lo ponga a disposición del código asociado.

En este caso D1 en el Xiao ESP32C3. En este overlay se configura para actuar como un botón y se le asigna el alias sw0 para permitir que se use en el ejemplo, cuyo código espera este nombre.

El LED, como se muestra arriba en el ejemplo del LED, también se configura mediante su archivo overlay. Ahora, al asociarlo con el botón, al presionarlo se enciende este LED.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/led-button.gif?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/led-button.gif" style={{width:600, height:'auto'}}/></div>

#### Grove - Expansion Board - Zumbador

Activaremos nuestro zumbador usando el ejemplo blinky PWM para controlar su activación mediante una señal PWM. Para ello usaremos un overlay personalizado que habilita el PWM para el pin A3.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-esp32c3/xiao_expansion_buzzer.overlay"
west flash
```

Después de flashear deberías empezar a oír una serie de zumbidos que cambian de sonido a medida que el ejemplo se ejecuta.

Veamos por qué funciona esto:

```
#include <zephyr/dt-bindings/pwm/pwm.h>

/ {
 aliases {
  pwm-0 = &ledc0;
  pwm-led0 = &pwm_buzzer;
 };

 pwmleds {
  compatible = "pwm-leds";
  pwm_buzzer: pwm_led_gpio0_5 {
   label = "PWM LED0";
   pwms = <&ledc0 0 1000 PWM_POLARITY_NORMAL>;
  };
 };
};

&pinctrl {
 ledc0_default: ledc0_default {
  group1 {
   pinmux = <LEDC_CH0_GPIO5>;
   output-enable;
  };
 };
};

&ledc0 {
 pinctrl-0 = <&ledc0_default>;
 pinctrl-names = "default";
 status = "okay";
 #address-cells = <1>;
 #size-cells = <0>;
 channel0@0 {
  reg = <0x0>;
  timer = <0>;
 };
};
```

El overlay configura la lógica PWM para el pin 5, que corresponde al pin A3 según el pinout del ESP32C3.

#### Grove - Expansion Board - Tarjeta SD

Aquí usaremos el ejemplo de sistema de archivos junto con el shield Xiao Expansion Board para intentar comunicarnos con el lector de tarjetas SD mediante SPI. El shield de la placa de expansión tiene el pin CS configurado para el pin `&xiao_d 2` asociado, por lo que no se requiere trabajo adicional de tu parte para asociar esta capacidad con la placa, aparte de añadir el shield. Para prepararlo aún más estamos usando una configuración personalizada que habilita la funcionalidad de la tarjeta SD.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

Ahora flashea y monitoriza:

```
west flash
west espressif monitor
```

Deberías ver una respuesta similar a esta:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
[00:00:00.032,000] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.033,000] <inf> main: Block count 15519744
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

En la configuración asociada estamos habilitando SPI, el controlador de disco SDMMC y el GPIO. Sin esta configuración, la superposición dará lugar a un error ya que el ejemplo no puede encontrar la tarjeta SD.

La parte relevante del shield de la Xiao Expansion Board se muestra a continuación:

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

Como se mencionó anteriormente, se utiliza la asignación de pines `&xiao_d 2` para permitir que el pin D2 sea seleccionado para esto independientemente de la placa utilizada, siempre que sea compatible con la configuración de pines `&xiao_d`.

#### Grove - Temperature and Humidity Sensor (SHT31)

Primero suelda los pines y conecta tu Xiao ESP32C3 a la placa de expansión. Luego conecta un cable conector Grove entre el Grove SHT31 y uno de los puertos I2C en la placa de expansión.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/xiao_sht31.jpg" style={{width:600, height:'auto'}}/></div>

Para probar esta configuración podemos usar un ejemplo existente con Zephyr:

```
west build -p always -b xiao_esp32c3 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
west flash
west espressif monitor
```

Verás resultados devueltos desde la consola:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
SHT3XD: 25.92 Cel ; 53.37 %RH
SHT3XD: 25.97 Cel ; 54.37 %RH
SHT3XD: 26.00 Cel ; 54.43 %RH
SHT3XD: 26.02 Cel ; 54.11 %RH
SHT3XD: 26.03 Cel ; 53.33 %RH
SHT3XD: 26.02 Cel ; 52.88 %RH
SHT3XD: 26.04 Cel ; 52.12 %RH
SHT3XD: 26.07 Cel ; 51.87 %RH
SHT3XD: 26.13 Cel ; 52.81 %RH
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

El archivo de superposición de la aplicación se utiliza para configurar varios componentes de la placa. Usando este archivo, el ejemplo SHT31 puede utilizarse ya que la superposición informa a la [lógica del ejemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) cómo configurar el sensor para nuestra placa.

#### Módulo de pantalla LCD de 1,69 pulgadas, resolución 240×280, interfaz SPI

Para este ejemplo usaremos SPI para conectar una pantalla LCD de 1,69 pulgadas con una resolución de 240x280.

Primero conecta tu placa a la pantalla LCD usando la siguiente imagen como guía (en este caso estamos usando la Xiao ESP32C3 pero se utiliza la misma distribución de pines para la conexión aquí).

| Pantalla LCD SPI de 1,69 pulgadas| XIAO ESP32C3 |
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
west build -p always -b xiao_esp32c3 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash
```

Con el nuevo firmware en su lugar, el dispositivo ahora muestra la misma pantalla de demostración que vimos anteriormente en la placa de expansión, solo que ahora actualizada para la pantalla LCD en color sobre SPI.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>

#### Round Display for Xiao

Para probar esta configuración podemos usar un ejemplo existente con Zephyr:

```
west build -p always -b xiao_esp32c3 samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

Entra en modo bootloader y flashea tu dispositivo:

```
west flash
```

Verás una pantalla que muestra varias esquinas de colores con una esquina negra parpadeando.

Otro ejemplo demuestra el uso de la pantalla táctil:

```
west build -p always -b xiao_esp32c3 samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

La demo de música que se muestra aquí es solo una parte de la pantalla real, pero aun así demuestra la pantalla táctil en acción. Como puedes ver, al tocar el botón de reproducción se activa la animación de música.

Puedes ver en el [archivo del shield](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay) que esto funciona al interactuar con el controlador de pantalla redonda GC9A01 sobre SPI y el módulo táctil CHSC6X sobre i2c.

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
- Establece la lógica del puntero LVGL para usar el módulo CHSC6X
- Deshabilita el puerto serie ya que los pines se usan para la retroiluminación y la interrupción táctil (como se ve arriba mediante: `irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`)
- Configura la pantalla redonda para SPI usando los pines D1, D2 y D3

La [lógica del ejemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c) se basa en el [código de ejemplo de la demo LVGL](https://github.com/lvgl/lvgl/tree/master/demos/music), que puede examinarse más a fondo.

## ✨ Proyecto de Colaboradores

- Este proyecto está respaldado por el [Proyecto de Colaboradores](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=57293521) de Seeed Studio.
- Gracias a los **esfuerzos de Tim** y tu trabajo será [exhibido](https://wiki.seeedstudio.com/es/Honorary-Contributors/).

## Soporte Técnico y Debate sobre el Producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
