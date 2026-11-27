---
description: XIAO RP2040 con Zephyr(RTOS)
title: XIAO RP2040 con Zephyr(RTOS)
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-RP2040-Zephyr-RTOS
last_update:
  date: 3/20/2024
  author: timo614
createdAt: '2024-04-16'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/es/XIAO-RP2040-Zephyr-RTOS/
---

# XIAO RP2040 con Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-rp2040.png"/></div>

Este wiki cubre la compatibilidad de [Zephyr](https://www.zephyrproject.org/) con la [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/es/xiao_rp2040_getting_started/). Con la ayuda de esta guía podrás utilizar el conjunto de funciones disponible para la placa.

## Qué es [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

El sistema operativo [**Zephyr**](https://www.zephyrproject.org/) se basa en un kernel de huella reducida diseñado para su uso en sistemas embebidos y con recursos limitados: desde simples sensores ambientales embebidos y wearables con LED hasta sofisticados controladores embebidos, relojes inteligentes y aplicaciones inalámbricas de IoT.

Para cada dispositivo compatible, Zephyr tiene un archivo [devicetree](https://docs.zephyrproject.org/latest/build/dts/index.html) que describe la placa y sus características. La [página de la placa Xiao RP2040 Zephyr](https://docs.zephyrproject.org/latest/boards/seeed/xiao_rp2040/doc/index.html#supported-features) describe las funciones compatibles disponibles actualmente, que se definen en el [archivo dts de la placa](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/seeed/xiao_rp2040/xiao_rp2040.yaml#L7).

*Referencia: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## Introducción

El primer paso para trabajar con Zephyr es configurar el SDK y la toolchain para el desarrollo local. Debes consultar la [guía de introducción a Zephyr](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) para seguir el procedimiento de configuración correspondiente a tu entorno.

Una vez que la toolchain de Zephyr se haya configurado y se haya descargado un SDK asociado, puedes comenzar el desarrollo de aplicaciones.

Para la Xiao RP2040 se puede consultar el [archivo de descripción de la placa](https://docs.zephyrproject.org/latest/boards/seeed/xiao_rp2040/doc/index.html) para obtener más información de configuración.

Para programar la Xiao RP2040 se pueden seguir los siguientes pasos:

1. Compila un ejemplo o tu aplicación
2. Conecta la Xiao RP2040
3. Mantén pulsado el botón designado `B` (boot) y presiona `R` (reset), lo que montará el dispositivo como un dispositivo de almacenamiento masivo
4. Ejecuta el comando de flasheo para grabar el dispositivo `west flash -r uf2`

El ejemplo más sencillo es ejecutar el ejemplo "Hello World" en la placa. Después de cambiar al directorio de la instalación de Zephyr ejecuta los siguientes comandos.

```
west build -p always -b xiao_rp2040 samples/subsys/usb/console
```

Entra en modo bootloader como se describió anteriormente y luego flashea el dispositivo:

```
west flash -r uf2
```

El dispositivo se reiniciará después de recibir el archivo y tu máquina ahora debería estar conectada por USB para la comunicación serie.

Encuentra el puerto de tu dispositivo, por ejemplo en Ubuntu escribiendo `ls /dev/tty*`, y confirma qué dispositivo aparece cuando se ha conectado tu USB.

En mi ejemplo veo `/dev/ttyACM0` como el dispositivo recién añadido.

Usando screen puedes conectarte y monitorizar la respuesta serie:

```
screen /dev/ttyACM0 115200
```

Deberías ver una respuesta similar a la siguiente:

```
*** Booting Zephyr OS build v3.6.0-2212-gc38ea288eee9 ***
Hello World! arm
Hello World! arm
Hello World! arm
```

Para ayudar con el proceso de uso de Zephyr con Xiao y su placa de expansión se ha creado un repositorio con varias superposiciones (overlays) y configuraciones utilizadas aquí. Los comandos incluidos en este artículo del wiki asumen que está ubicado en `../applications/xiao-zephyr-examples` relativo a la raíz de zephyr. Se puede proporcionar una ruta alternativa a los comandos siguientes actualizándola.

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## Preparación de hardware

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO RP2040</th>
      <th>Seeed Studio Expansion Board</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
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

  Para poder usar módulos Grove con Seeed Studio XIAO RP2040, utilizaremos una [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) y conectaremos la XIAO RP2040 en ella.

  Después de eso, se pueden usar los conectores Grove de la placa para conectar módulos Grove

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### Definiciones de pines

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=rp2040" target="_blank" rel="noopener noreferrer">Explora el pinout interactivo</a>
</div>

  Debes seguir el gráfico siguiente para usar los números de pin internos apropiados al conectar los módulos Grove a los conectores Grove en el Grove Shield para Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg"style={{width:900, height:'auto'}}/></div>

### Funcionalidad principal

- LED WS2812
- LED PWM
- Reloj
- TFLite

#### LED WS2812

En este ejemplo la Xiao RP2040 utiliza su LED integrado y cambia continuamente entre rojo, verde y azul.

Para probar esta configuración podemos usar un ejemplo existente con Zephyr:

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/led_strip
```

Entra en modo bootloader y flashea tu dispositivo:

```
west flash -r uf2
```

Verás el LED WS2812 integrado cambiando continuamente entre rojo, azul y verde en un patrón intermitente.

Profundicemos un poco en este ejemplo para ver por qué funciona:

```

 / {
     aliases {
         led-strip = &ws2812;
     };
 }
 &gpio0 {
     status = "okay";
     neopixel-power-enable {
  gpio-hog;
  gpios = <11 GPIO_ACTIVE_HIGH>;
  output-high;
 };
 };
 &pio0 {
     status = "okay";

     pio-ws2812 {
         compatible = "worldsemi,ws2812-rpi_pico-pio";
         status = "okay";
         pinctrl-0 = <&ws2812_pio0_default>;
         pinctrl-names = "default";
         bit-waveform = <3>, <3>, <4>;

         ws2812: ws2812 {
             status = "okay";
             gpios = <&gpio0 12 GPIO_ACTIVE_HIGH>;
             chain-length = <1>;
             color-mapping = <LED_COLOR_ID_GREEN
                      LED_COLOR_ID_RED
                      LED_COLOR_ID_BLUE>;
             reset-delay = <280>;
             frequency = <800000>;
         };
     };
 };
```

Estos elementos del devicetree muestran el WS2812 integrado y su utilización. Dado que el WS2812 tiene su línea VCC conectada al pin 11 del RP2040, el devicetree utiliza la funcionalidad gpio-hog para permitir que el LED se habilite mediante variables de entorno. En este caso el pin 12 es el que se configura para la línea de datos del WS2812, por lo que con la variable de entorno CONFIG_GPIO_HOGS habilitada la tira de LED puede utilizarse para el ejemplo.

Esto funciona en parte porque el ejemplo tiene un archivo xiao_rp2040.conf como parte de su directorio de placas, por lo que fusiona esa configuración con la configuración de la placa y la habilita.

```
CONFIG_GPIO=y
CONFIG_GPIO_HOGS=y
```

Si deseas utilizar el WS2812 integrado es recomendable habilitar esta variable para permitirle tomar energía.

<!-- <div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Cosmic-Bee/xiao-zephyr-examples/main/images/rp2040/ws2812.gif" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/ws2812.gif" style={{width:300, height:'auto'}}/></div>

#### LED PWM

En este ejemplo demostraremos las capacidades PWM de la Xiao RP2040. Para ello usaremos el LED azul integrado y utilizaremos PWM para atenuarlo continuamente.

Para probar esta configuración podemos usar un ejemplo existente con Zephyr:

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/fade_led
```

Entra en modo bootloader y flashea tu dispositivo:

```
west flash -r uf2
```

Verás cómo la luz azul del LED RGB integrado se atenúa lentamente y repite el proceso de nuevo.

Profundicemos un poco en este ejemplo para ver por qué funciona:

```
&pwm {
 status = "okay";
 divider-int-4 = <255>;
};
```

Este fragmento de lógica en `boards/xiao_rp2040.overlay` para el ejemplo habilita la funcionalidad PWM desde el devicetree que normalmente está deshabilitada. La configuración de la Xiao RP2040 tiene el LED azul RGB integrado configurado como el PWM predeterminado.

Como se puede ver en el `xiao_rp2040-pinctrl.dtsi` de los archivos de la placa de zephyr, existe lo siguiente:

```
 pwm_ch4b_default: pwm_ch4b_default {
  group1 {
   pinmux = <PWM_4B_P25>;
  };
 };
```

En este caso, el PWM está usando el `pwm LED` configurado en el devicetree, que está asociado de vuelta con el pin 25 (el LED azul). Los pines PWM se pueden consultar en la [documentación del RP2040](https://docs.zephyrproject.org/apidoc/latest/rpi-pico-rp2040-pinctrl_8h.html).

<!-- <div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Cosmic-Bee/xiao-zephyr-examples/main/images/rp2040/led_fade.gif" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/led_fade.gif" style={{width:300, height:'auto'}}/></div>

#### Reloj

Para esto usaremos un ejemplo existente y nuestro overlay de consola:

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/counter/alarm -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Entra en modo bootloader y flashea tu dispositivo:

```
west flash -r uf2
```

Conéctate al monitor (después de reiniciar rápidamente tu placa para asegurarte de que se reinicia):

```
screen /dev/ttyACM0 115200
```

Verás una serie de temporizadores activarse tras un retardo establecido, uno tras otro:

```
*** Booting Zephyr OS build v3.6.0-2212-gc38ea288eee9 ***
Counter alarm sample

Set alarm in 2 sec (2000000 ticks)
!!! Alarm !!!
Now: 2
Set alarm in 4 sec (4000000 ticks)
!!! Alarm !!!
Now: 6
Set alarm in 8 sec (8000000 ticks)
!!! Alarm !!!
Now: 14
Set alarm in 16 sec (16000000 ticks)
!!! Alarm !!!
Now: 30
Set alarm in 32 sec (32000000 ticks)
```

#### TFLite - Hello World

Habilita TFLite con Zephyr y actualiza:

```
west config manifest.project-filter -- +tflite-micro
west update
```

Para este ejemplo vamos a usar el ejemplo tflite "Hello World" junto con nuestro overlay de consola y conf para leer la respuesta por serie USB.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/modules/tflite-micro/hello_world -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Entra en modo bootloader y flashea tu dispositivo:

```
west flash -r uf2
```

Conéctate al monitor:

```
screen /dev/ttyACM0 115200
```

Verás resultados devueltos desde la consola:

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
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

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/xiao_expansion_oled.jpg" style={{width:300, height:'auto'}}/></div>

Para probar esta configuración podemos usar un ejemplo existente con Zephyr:

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/display -- -DSHIELD=seeed_xiao_expansion_board
```

Entra en modo bootloader y flashea tu dispositivo:

```
west flash -r uf2
```

Verás una pantalla que muestra múltiples cuadros negros y un cuadro parpadeante en la esquina, dado que esta pantalla solo admite dos colores.

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

El archivo de overlay del shield en este ejemplo configura una pantalla OLED SSD1306 en el registro 0x3C. Se selecciona como la pantalla de Zephyr en la sección `chosen`.

#### Grove - Expansion Board - Botón

Para probar esta configuración podemos usar un ejemplo existente con Zephyr que utilizaremos junto con el overlay y conf de consola USB.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/button -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf -DSHIELD=seeed_xiao_expansion_board
```

Entra en modo bootloader y flashea tu dispositivo:

```
west flash -r uf2
```

Conéctate al monitor:

```
screen /dev/ttyACM0 115200
```

Al pulsar el botón con el ejemplo se activará el LED integrado.

Verás resultados devueltos desde la consola:

```
*** Booting Zephyr OS build v3.6.0-2212-gc38ea288eee9 ***
Set up button at gpio@40014000 pin 27
Set up LED at gpio@40014000 pin 25
Press the button
Button pressed at 1934761489
Button pressed at 2178879257
Button pressed at 3084766465
Button pressed at 3388674993
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

El archivo de overlay de la aplicación se utiliza para configurar varios componentes de la placa. Usando este archivo, el ejemplo del botón puede utilizarse, ya que el overlay permite que Zephyr configure el botón y lo ponga a disposición del código asociado.

En este caso, el GPIO 27 corresponde al pin A1/D1 en la Xiao RP2040. Se configura en este overlay para actuar como un botón y se le asigna el alias `sw0` para permitir que se use en el ejemplo, cuyo código espera este nombre.

#### Grove - Expansion Board - Zumbador

Activaremos nuestro zumbador usando el ejemplo blinky PWM para controlar su activación mediante una señal PWM. Para esto usaremos un overlay personalizado que habilita el PWM para el pin A3.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-rp2040/xiao_expansion_buzzer.overlay"
```

Entra en modo bootloader y flashea tu dispositivo:

```
west flash -r uf2
```

Después de flashear el archivo uf2 deberías empezar a oír una serie de zumbidos que cambian de sonido a medida que el ejemplo se ejecuta.

Veamos por qué funciona esto:

```
/delete-node/ &pwm_led0;

/ {
 aliases {
  pwm-led = &pwm_led0;
 };
};

&{/pwm_leds} {
 status = "okay";
 compatible = "pwm-leds";

 pwm_led0: pwm_led0 {
  status = "okay";
  pwms = <&pwm 13 PWM_HZ(880) PWM_POLARITY_NORMAL>;
 };
};

&pinctrl {
 pwm_ch6b_default: pwm_ch6b_default {
  group1 {
   pinmux = <PWM_6B_P29>;
  };
 };
};

&pwm {
 status = "okay";
 pinctrl-0 = <&pwm_ch6b_default>;
 divider-frac-6 = <15>;
 divider-int-6 = <255>;
};
```

El overlay en uso primero elimina el nodo `pwm_led0` existente, ya que esta placa es compatible mediante un LED integrado configurado para PWM. Luego configura el pin A3 para usarlo como PWM.

Aquí estamos usando el canal 6B para el PWM, ya que el pin asociado a A3 en la Xiao RP2040 es el pin 29. Consulta la [documentación de pinctrl del RP2040](https://docs.zephyrproject.org/apidoc/latest/rpi-pico-rp2040-pinctrl_8h.html#a8c0c1058a626d83ba5f7e18238aba150) para más información y el mapeo de otros pines.

#### Grove - Expansion Board - Tarjeta SD

Aquí usaremos el ejemplo de sistema de archivos junto con el shield Xiao Expansion Board para intentar interactuar con el lector de tarjetas SD mediante SPI. El shield de la placa de expansión tiene el pin CS configurado para el pin asociado `&xiao_d 2`, por lo que no se requiere trabajo adicional por tu parte para asociar esta capacidad con la placa, aparte de añadir el shield. Para prepararlo aún más estamos usando una configuración personalizada que habilita la funcionalidad de la tarjeta SD.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/subsys/fs/fs_sample -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

Entra en modo bootloader y flashea tu dispositivo:

```
west flash -r uf2
```

Conéctate al monitor:

```
screen /dev/ttyACM0 115200
```

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
[00:00:00.201,000] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.202,000] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.

Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

En este caso, mi tarjeta SD tenía dos archivos. Sus nombres y tamaños se mostraron en mi consola.

Revisemos los elementos relevantes que intervienen aquí:

```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

En la configuración asociada estamos habilitando SPI, el controlador de disco SDMMC y el GPIO. Sin esta configuración, la superposición producirá un error, ya que el ejemplo no podrá encontrar la tarjeta SD.

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

Como se mencionó anteriormente, se utiliza la asignación de pines `&xiao_d 2` para permitir que el pin D2 sea seleccionado para esto independientemente de la placa utilizada, siempre que sea compatible con la configuración de pines `&xiao_d`.

#### Grove - Sensor de temperatura y humedad (SHT31)

Primero suelda los pines y conecta tu Xiao RP2040 a la placa de expansión. Luego conecta un cable conector Grove entre el Grove SHT31 y uno de los puertos I2C de la placa de expansión.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/xiao_sht31.jpg" style={{width:500, height:'auto'}}/></div>

Para probar esta configuración podemos usar un ejemplo existente con Zephyr, al cual habilitaremos el soporte de consola USB con nuestra overlay y conf.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Entra en modo bootloader y flashea tu dispositivo:

```
west flash -r uf2
```

Conéctate al monitor:

```
screen /dev/ttyACM0 115200
```

Verás resultados devueltos desde la consola:

```
*** Booting Zephyr OS build v3.6.0-2212-gc38ea288eee9 ***
SHT3XD: 26.20 Cel ; 52.49 %RH
SHT3XD: 26.19 Cel ; 52.69 %RH
SHT3XD: 26.20 Cel ; 52.75 %RH
SHT3XD: 26.24 Cel ; 52.88 %RH
SHT3XD: 26.24 Cel ; 52.67 %RH
SHT3XD: 26.23 Cel ; 52.49 %RH
SHT3XD: 26.23 Cel ; 52.48 %RH
SHT3XD: 26.24 Cel ; 52.30 %RH
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

El archivo de overlay de la aplicación se utiliza para configurar varios componentes de la placa. Usando este archivo, el ejemplo SHT31 puede utilizarse, ya que la overlay informa a la [lógica del ejemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) cómo configurar el sensor para nuestra placa.

#### Módulo de pantalla LCD de 1,69 pulgadas, resolución 240×280, interfaz SPI

Para este ejemplo usaremos SPI para conectar una pantalla LCD de 1,69 pulgadas con una resolución de 240x280.

Primero conecta tu placa a la pantalla LCD usando la siguiente imagen como guía (en este caso estamos usando el Xiao RP2040, pero se utiliza la misma distribución de pines para la conexión aquí).

| Pantalla LCD SPI de 1,69 pulgadas| XIAO RP2040 |
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

A continuación, con el hardware preparado, podemos compilar el archivo uf2 para flashear:

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
```

Entra en modo bootloader y flashea tu dispositivo:

```
west flash -r uf2
```

Con el nuevo firmware instalado, el dispositivo ahora muestra la misma pantalla de demostración que vimos anteriormente en la placa de expansión, solo que ahora actualizada para la pantalla LCD en color sobre SPI.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/spi_lcd.jpg" style={{width:500, height:'auto'}}/></div>

## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=57293558) de Seeed Studio.
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
