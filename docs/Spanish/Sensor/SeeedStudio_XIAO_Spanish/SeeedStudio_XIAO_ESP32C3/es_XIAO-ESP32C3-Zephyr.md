---
description: XIAO ESP32C3 with Zephyr(RTOS)
title:  XIAO ESP32C3 con Zephyr(RTOS)
keywords:
- Software
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-ESP32C3-Zephyr
last_update:
  date: 02/04/2025
  author: Guillermo
---

# XIAO ESP32C3 con Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-esp32c3.png"/></div>

## ¿Qué es RTOS?

Uno de los componentes más importantes de los sistemas embebidos actuales es el **RTOS**, también conocido como **Sistema Operativo en Tiempo Real**, que se encarga de todo, desde la programación de tareas hasta la ejecución de aplicaciones.

El **RTOS** está diseñado para proporcionar un modo de ejecución predecible. Cuando el procesamiento debe cumplir con el límite de tiempo del sistema, se utiliza un RTOS. Por lo tanto, en comparación con los GPOS (Sistemas Operativos de Propósito General), el RTOS suele ser ligero y de tamaño pequeño, y generalmente solo proporciona las funciones necesarias para ejecutar tipos específicos de aplicaciones en hardware específico. En algunos casos, los desarrolladores pueden modificar el RTOS existente, reducirlo para que solo proporcione las funcionalidades requeridas por una aplicación específica y/o personalizar su funcionalidad o características de rendimiento.

## ¿Qué es [Zephyr](https://www.zephyrproject.org/)?

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

El sistema operativo [**Zephyr**](https://www.zephyrproject.org/) se basa en un núcleo de bajo consumo diseñado para su uso en sistemas embebidos y con recursos limitados: desde sensores ambientales embebidos simples y wearables con LED hasta controladores embebidos sofisticados, relojes inteligentes y aplicaciones inalámbricas IoT.

## Características

Zephyr ofrece una gran cantidad de características que siguen creciendo, incluyendo:

### Amplia gama de servicios del Kernel

Zephyr ofrece varios servicios conocidos para el desarrollo:

- *Servicios de Multihilo* para hilos cooperativos, basados en prioridades, no preemptivos y preemptivos con segmentación opcional por ronda. Incluye soporte para API compatible con POSIX pthreads.
- *Servicios de Interrupción* para el registro de controladores de interrupción en tiempo de compilación.
- *Servicios de Asignación de Memoria* para la asignación dinámica y liberación de bloques de memoria de tamaño fijo o variable.
- *Servicios de Sincronización entre Hilos* para semáforos binarios, semáforos contadores y semáforos mutex.
- *Servicios de Paso de Datos entre Hilos* para colas de mensajes básicas, colas de mensajes mejoradas y flujos de bytes.
- *Servicios de Gestión de Energía* como la Gestión de Energía del Sistema definida por la aplicación o la política, y la Gestión de Energía del Dispositivo definida por el controlador, con un control más preciso.

### Múltiples Algoritmos de Programación

Zephyr ofrece un conjunto completo de opciones para la programación de hilos:
- Programación cooperativa y preemptiva
- Earliest Deadline First (EDF)
- Programación Meta IRQ implementando comportamiento de "interrupción en la segunda mitad" o "tasklet"
- Segmentación de tiempo: Permite la segmentación de tiempo entre hilos preemptivos de igual prioridad
- Múltiples estrategias de encolado:
  - Cola lista simple
  - Cola lista roja/negra
  - Cola lista múltiple tradicional

### Soporte para Bluetooth Low Energy 5.0
Cumple con Bluetooth 5.0 (ESR10) y soporte para el controlador Bluetooth Low Energy (Capa de Enlace LE). Incluye soporte para Bluetooth mesh y un controlador Bluetooth listo para calificación.

- Perfil de Acceso Genérico (GAP) con todos los roles LE posibles
- Perfil de Atributo Genérico (GATT)
- Soporte para emparejamiento, incluyendo la función de Conexiones Seguras de Bluetooth 4.2
- Abstracción del controlador HCI limpio
- Interfaz HCI cruda para ejecutar Zephyr como un Controlador en lugar de una pila completa de Host
- Verificado con múltiples controladores populares
- Altamente configurable

Soporte para Mesh:

- Características de Relay, Nodo Amigo, Nodo de Baja Potencia (LPN) y Proxy GATT
- Soporte para ambos portadores de aprovisionamiento (PB-ADV y PB-GATT)
- Altamente configurable, adecuado para dispositivos con al menos 16k de RAM

*Referencia: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## Empezando

El primer paso para trabajar con Zephyr es configurar el SDK y la cadena de herramientas para el desarrollo local. Debes consultar la [guía para empezar con Zephyr](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) para el procedimiento de configuración necesario según tu entorno.

Una vez que la cadena de herramientas de Zephyr esté configurada y se haya descargado el SDK asociado, puedes comenzar el desarrollo de la aplicación.

Para el Xiao ESP32C3, puedes consultar el [archivo de descripción de la placa](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32c3/doc/index.html) para obtener más información sobre la configuración.

Para obtener los archivos necesarios para usar el ESP32C3, ejecuta el siguiente comando:

```
west blobs fetch hal_espressif
```

Después de esto, los ejemplos pueden ser construidos y flasheados a la placa.

El ejemplo más sencillo es ejecutar el ejemplo "Hello World" en la placa. Después de cambiar al directorio de la instalación de Zephyr, ejecuta los siguientes comandos.

```
west build -p always -b xiao_esp32c3 samples/hello_world
west flash
west espressif monitor
```

Con el comando final deberías ver la respuesta mostrando el saludo "¡Hello World!".

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Hello World! xiao_esp32c3/esp32c3
```

Para ayudar con el proceso de usar Zephyr con Xiao y su placa de expansión, se ha creado un repositorio con varios overlays y configuraciones que se utilizan aquí. Los comandos incluidos en este artículo de la wiki asumen que se encuentra en `../applications/xiao-zephyr-examples` relativo a la raíz de Zephyr. Se puede proporcionar una ruta alternativa a los comandos a continuación actualizándola.

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## Preparación de Hardware

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio Expansion Board</th>
      <th>Grove Red LED</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED-p-1142.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### Conocimientos para Desarrolladores

#### Placa de Expansión XIAO

Para utilizar módulos Grove con XIAO ESP32C3 de Seeed Studio, utilizaremos una [Placa de Expansión Seeed Studio para XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) y conectaremos la XIAO ESP32C3 en ella.

Después de eso, se pueden utilizar los conectores Grove en la placa para conectar módulos Grove.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### Pin Definitions

  Debes seguir el gráfico a continuación para usar los números de pin internos adecuados al conectar los módulos Grove a los conectores en el Grove Shield para XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png"style={{width:900, height:'auto'}}/></div>

### Funcionalidad Primaria

- GPIO / Acticación de LED
- Bluetooth
- Wi-Fi
- TFLite

#### GPIO / Activación de LED

Para probar esta configuración, podemos utilizar el ejemplo de "blinky" con Zephyr, pero usaremos un LED Grove adicional y un overlay para sobrescribir el LED al pin D0 y demostrar que funciona (el Xiao ESP32C3 no tiene un LED integrado programable).

```
west build -p always -b xiao_esp32c3 samples/basic/blinky -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/d0_led.overlay
west flash
west espressif monitor
```

Presiona el botón de RESET dos veces o conecta el pin RST a GND.

```
west flash
```

Verás que el LED rojo adjunto parpadea encendiéndose y apagándose, creando un efecto de parpadeo.

Ahora vamos a profundizar un poco en este ejemplo para entender por qué funciona.

El código de ejemplo asociado hace referencia a led0:
```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

The LED overlay (`xiao-zephyr-examples/d0_led.overlay`) defines this LED for us:
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

Este overlay configura el pin D0 (como se muestra en `&xiao_d 0`) como un LED y lo asocia con el alias `led0`. `led0` es un alias que permite que muchos ejemplos lo utilicen como el LED que se está controlando, ya que buscan específicamente este nombre.

Si monitoreas la salida serial mediante `west espressif monitor`, verás una salida similar a:
```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
LED state: OFF
LED state: ON
LED state: OFF
LED state: ON
```

#### Bluetooth

Para probar esta configuración, podemos utilizar un ejemplo existente con Zephyr:

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

El [archivo de configuración](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf) aquí habilita las características relacionadas con Bluetooth para la construcción de Zephyr.

#### Wi-Fi

Para probar esta configuración, podemos utilizar un ejemplo existente con Zephyr:

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

Existen varios comandos que te permiten ver y conectar a redes locales. Consulta el [archivo README del ejemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/README.rst) para más información.
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

Vamos a profundizar un poco en este ejemplo para entender por qué funciona:
```
&wifi {
	status = "okay";
};
```

El archivo [overlay de la aplicación](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32c3.overlay) se utiliza para configurar varios componentes de la placa. Usando este archivo, el ejemplo puede ser utilizado ya que el overlay informa a la lógica del ejemplo para habilitar Wi-Fi.

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

El [archivo de configuración](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32c3.conf) aquí habilita varias características relacionadas con redes para la construcción de Zephyr.

#### TFLite - Hola Mundo

Habilita TFLite con Zephyr y actualiza:
```
west config manifest.project-filter -- +tflite-micro
west update
```

Construye el ejemplo y flashea a tu placa:
```
west build -p always -b xiao_esp32c3 samples/modules/tflite-micro/hello_world
west flash
west espressif monitor
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

Información adicional sobre TFLite está fuera del alcance de esta guía, pero el ejemplo sirve como una referencia de las capacidades del dispositivo y los componentes requeridos para ejecutar la configuración de TFLite.

### Componentes Adicionales

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C Display
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Button
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Round Display for Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)

#### Grove - Placa de Expansión - Pantalla I2C

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/xiao_expansion_oled.jpg" style={{width:600, height:'auto'}}/></div>

Para probar esta configuración, podemos utilizar un ejemplo existente con Zephyr:

```
west build -p always -b xiao_esp32c3 samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash
```

Verás una pantalla que muestra varios cuadros negros y un cuadro parpadeante en la esquina, dado que esta pantalla solo soporta dos colores.

Vamos a profundizar un poco en este ejemplo para entender por qué funciona:
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

El shield configura una pantalla OLED SSD1306 en el registro 0x3C. Se selecciona como la pantalla de Zephyr en la sección elegida.

#### Grove - Placa de Expansión - Botón

Para probar esta configuración, podemos utilizar un ejemplo existente con Zephyr, pero usaremos un LED Grove adicional y un overlay para sobrescribir el LED al pin D0 y demostrar que funciona (el Xiao ESP32C3 no tiene un LED integrado programable).

```
west build -p always -b xiao_esp32c3 samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/d0_led.overlay
west flash
west espressif monitor
```

Al presionar el botón con el ejemplo, el LED asociado al pin D0 se encenderá.

Verás los resultados devueltos desde la consola:
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

Vamos a profundizar un poco en este ejemplo para entender por qué funciona:
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

El archivo del shield / overlay se utiliza para configurar varios componentes de la placa. Usando este archivo, el ejemplo del botón puede ser utilizado ya que el overlay permite que Zephyr configure el botón y lo haga disponible para el código asociado.

En este caso, el D1 en el Xiao ESP32C3. Se configura en este overlay para actuar como un botón y se le asigna el nombre sw0 para que pueda ser utilizado en el ejemplo, el cual espera este nombre en el código.

El LED, como se mostró anteriormente en el ejemplo del LED, también se configura a través de su archivo de overlay. Ahora, al presionar el botón, se enciende este LED.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/led-button.gif?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/led-button.gif" style={{width:600, height:'auto'}}/></div>


#### Grove - Placa de Expansión - Buzzer

Activaremos nuestro buzzer utilizando el ejemplo de blinky PWM para controlar su activación a través de una señal PWM. Para esto, utilizaremos un overlay personalizado que habilita el PWM para el pin A3.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-esp32c3/xiao_expansion_buzzer.overlay"
west flash
```

Después de flashear, deberías comenzar a escuchar una serie de zumbidos que cambian de sonido a medida que el ejemplo avanza.

Veamos por qué esto funciona:
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

El overlay configura la lógica PWM para el pin 5, que corresponde con el pin A3 según el diagrama de pines del ESP32C3.

#### Grove - Placa de Expansión - Tarjeta SD

Usaremos el ejemplo del sistema de archivos junto con la placa de expansión Xiao para intentar interactuar con el lector de tarjetas SD a través de SPI. La placa de expansión tiene el pin CS configurado para el pin asociado `&xiao_d 2`, por lo que no es necesario hacer nada de tu parte para asociar esta capacidad con la placa, además de agregar la shield. Para prepararlo aún más, estamos utilizando una configuración personalizada que habilita la funcionalidad de la tarjeta SD.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

Ahora flashea y monitorea:
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

En este caso, mi tarjeta SD tenía dos archivos. Sus nombres y tamaños fueron impresos en mi consola.

Veamos los elementos relevantes que intervienen aquí:
```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

En la configuración asociada estamos habilitando SPI, el controlador de disco SDMMC y el GPIO. Sin esta configuración, el overlay llevará a un error, ya que el ejemplo no podrá encontrar la tarjeta SD.

La parte relevante de la placa de expansión XIAO se muestra a continuación:

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

Como se mencionó anteriormente, se utiliza el mapeo de pin `&xiao_d 2` para permitir que se seleccione el pin D2, independientemente de la placa utilizada, siempre y cuando sea compatible con la configuración de pines `&xiao_d`.

#### Grove - Sensor de Temperatura y Humedad (SHT31)

Primero, suelda los pines y conecta tu Xiao ESP32C3 a la placa de expansión. Luego, conecta un cable de conector Grove entre el Grove SHT31 y uno de los puertos I2C de la placa de expansión.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/xiao_sht31.jpg" style={{width:600, height:'auto'}}/></div>


Para probar esta configuración, podemos usar un ejemplo existente con Zephyr:

```
west build -p always -b xiao_esp32c3 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
west flash
west espressif monitor
```

Verás estos resultados en la consola:
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

Vamos a profundizar un poco en este ejemplo para entender por qué funciona:
```
 &xiao_i2c {
	sht3xd@44 {
			compatible = "sensirion,sht3xd";
			reg = <0x44>;
		};
	};
```

El archivo de la superposición de la aplicación se utiliza para configurar varios componentes de la placa. Usando este archivo, el ejemplo de SHT31 puede ser utilizado ya que la superposición informa a la [lógica del ejemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) cómo configurar el sensor para nuestra placa.

#### Módulo de Pantalla LCD de 1.69 pulgadas, Resolución 240×280, Interfaz SPI

Para este ejemplo, usaremos SPI para conectar una pantalla LCD de 1.69 pulgadas con una resolución de 240x280.

Primero conecta tu placa a la pantalla LCD utilizando la siguiente imagen como guía (en este caso estamos usando el Xiao ESP32C3, pero el mismo esquema de pines se usa para conectar aquí).

| Display LCD SPI de 1.69 pulgadas| XIAO ESP32C3 |
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

Ahora podemos construir y flashear el firmware:
```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash
```

Con el nuevo firmware instalado, el dispositivo ahora muestra la misma pantalla de demostración que vimos previamente en la placa de expansión, pero ahora actualizada para la pantalla LCD a color a través de SPI.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>


#### Pantalla Redonda para XIAO

Para probar esta configuración, podemos usar una muestra existente con Zephyr:

```
west build -p always -b xiao_esp32c3 samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

Entra en moodo bootloader y flashea tu dispositivo
```
west flash
```

Verás una pantalla mostrando varias esquinas de colores con una esquina negra parpadeando.

Otro ejemplo demuestra el uso de la pantalla táctil:

```
west build -p always -b xiao_esp32c3 samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

La demostración de música que se muestra aquí es solo una parte de la pantalla real, pero aún así demuestra la pantalla táctil en acción. Como puedes ver, tocar el botón de reproducción activa la animación de la música.

You can see from the [shield file](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay) that this works by intefacing with the GC9A01 round display driver over SPI and the CHSC6X touch module over i2c.

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
* xiao_serial utiliza los pines D6 y D7 del Xiao, los cuales se usan respectivamente para controlar la retroiluminación de la pantalla y como interrupción del controlador táctil.
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

Este escudo realiza lo siguiente:
- Selecciona la pantalla GC9A01 como la pantalla elegida para Zephyr.
- Configura la lógica del puntero LVGL para usar el módulo CHSC6X.
- Deshabilita la comunicación serial ya que los pines se utilizan para la retroiluminación y la interrupción táctil (como se ve arriba mediante: `irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`).
- Configura la pantalla redonda para SPI utilizando los pines D1, D2 y D3.

The [sample logic](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c) relies on the [LVGL demo example code](https://github.com/lvgl/lvgl/tree/master/demos/music) which can be further examined.


## ✨ Proyecto de Contribuidor

- Este proyecto está respaldado por el [Proyecto de Contribuidor](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=57293521) de Seeed Studio.
- Gracias por **tus esfuerzos Tim**, tu trabajo será exhibido [aquí](https://wiki.seeedstudio.com/Honorary-Contributors/).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
