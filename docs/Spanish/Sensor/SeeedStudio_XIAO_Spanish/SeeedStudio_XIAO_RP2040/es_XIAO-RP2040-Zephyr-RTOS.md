---
description: XIAO RP2040 con Zephyr(RTOS)
title:  XIAO RP2040 con Zephyr(RTOS)
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-RP2040-Zephyr-RTOS
last_update:
  date: 02/18/2025
  author: Guillermo
---

# XIAO RP2040 con Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-rp2040.png"/></div>

Esta wiki cubre el soporte de [Zephyr](https://www.zephyrproject.org/) para la [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/xiao_rp2040_getting_started/). Con la ayuda de esta guía, podrás utilizar el conjunto de características disponibles en la placa.

## ¿Qué es [Zephyr](https://www.zephyrproject.org/)?

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

El sistema operativo [**Zephyr**](https://www.zephyrproject.org/) se basa en un kernel de bajo consumo diseñado para su uso en sistemas embebidos con recursos limitados: desde sensores ambientales embebidos simples y dispositivos portátiles con LEDs hasta controladores embebidos sofisticados, relojes inteligentes y aplicaciones inalámbricas IoT.

Para cada dispositivo compatible, Zephyr tiene un archivo [devicetree](https://docs.zephyrproject.org/latest/build/dts/index.html) que describe la placa y sus características. La página del [Xiao RP2040 en Zephyr](https://docs.zephyrproject.org/latest/boards/seeed/xiao_rp2040/doc/index.html#supported-features) describe las características compatibles actualmente, que están definidas por el [archivo dts de la placa](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/seeed/xiao_rp2040/xiao_rp2040.yaml#L7).

*Referencia: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## Empezando

El primer paso para trabajar con Zephyr es configurar el SDK y la cadena de herramientas para el desarrollo local. La [guía de inicio de Zephyr](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) debe ser consultada para el procedimiento de configuración asociado que se necesita para tu entorno.

Una vez que se haya configurado la cadena de herramientas de Zephyr y se haya descargado el SDK asociado, puedes comenzar con el desarrollo de aplicaciones.

Para el XIAO RP2040, se puede consultar el [archivo de descripción de la placa](https://docs.zephyrproject.org/latest/boards/seeed/xiao_rp2040/doc/index.html) para obtener más información sobre la configuración.

Para programar el XIAO RP2040, puedes seguir los siguientes pasos:
1. Construir un ejemplo o tu aplicación.
2. Conectar el XIAO RP2040.
3. Mantén presionado el botón designado como `B` (boot) y presiona `R` (reset), lo que montará el dispositivo como un dispositivo de almacenamiento masivo.
4. Ejecutar el comando de flash para cargar el dispositivo: `west flash -r uf2`.

El ejemplo más sencillo es ejecutar la muestra "Hello World" en la placa. Después de cambiar al directorio de instalación de Zephyr, ejecuta los siguientes comandos.

```
west build -p always -b xiao_rp2040 samples/subsys/usb/console
```

Ingresa al modo de arranque como se describió anteriormente y luego flashear el dispositivo:

```
west flash -r uf2
```

El dispositivo se reiniciará después de recibir el archivo y tu máquina debería estar ahora conectada por USB para comunicación serial.

Encuentra el puerto de tu dispositivo, por ejemplo, en Ubuntu escribiendo `ls /dev/tty*`, y confirma qué dispositivo aparece cuando conectas el USB.

En mi ejemplo, veo `/dev/ttyACM0` como el dispositivo recién agregado.

Usando `screen`, puedes conectarte y monitorear la respuesta serial:
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

Para asistir con el proceso de usar Zephyr con Xiao y su placa de expansión, se ha creado un repositorio con varias superposiciones y configuraciones utilizadas aquí. Los comandos incluidos en este artículo de wiki suponen que está ubicado en `../applications/xiao-zephyr-examples` relativo a la raíz de Zephyr. Se puede proporcionar una ruta alternativa a los comandos a continuación actualizándola.

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## Preparación de Hardware

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO RP2040</th>
      <th>Seeed Studio Placa de Expansión</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### Conocimientos del Desarrollador

#### Placa de Expansión XIAO

  Para utilizar los módulos Grove con Seeed Studio XIAO RP2040, usaremos una [Placa de Expansión Seeed Studio para XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) y conectaremos el XIAO RP2040 a ella.

  Después de eso, los conectores Grove en la placa se pueden utilizar para conectar los módulos Grove.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### Definiciones de Pines

  Debes seguir la gráfica a continuación para usar los números de pines internos apropiados al conectar los módulos Grove a los conectores Grove en el Grove Shield para Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg"style={{width:900, height:'auto'}}/></div>

### Funcionalidad Principal

- LED WS2812
- PWM de LED
- Reloj
- TFLite

#### LED WS2812

Para este ejemplo, el Xiao RP2040 utiliza su LED integrado y parpadea continuamente a través de los colores rojo, verde y azul.

Para probar esta configuración, podemos usar un ejemplo existente con Zephyr:

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/led_strip
```

Ingresa al modo de arranque y flashea tu dispositivo:
```
west flash -r uf2
```

Verás el LED WS2812 integrado ciclando continuamente a través de los colores rojo, azul y verde en un patrón intermitente.

Vamos a profundizar un poco en este ejemplo para ver por qué funciona:
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

Estos elementos del árbol de dispositivos muestran el WS2812 integrado y su utilización. Dado que el WS2812 tiene su línea VCC configurada en el pin 11 del RP2040, el árbol de dispositivos utiliza la funcionalidad gpio-hog para permitir que el LED se habilite mediante variables de entorno. En este caso, el pin 12 es el que se configura para la línea de datos del WS2812, por lo que, con la variable de entorno CONFIG_GPIO_HOGS habilitada, la tira de LED puede ser utilizada para el ejemplo.

Esto funciona en parte porque el ejemplo tiene un archivo `xiao_rp2040.conf` como parte de su directorio de placas, por lo que fusiona esa configuración con la configuración de la placa y la habilita.

```
CONFIG_GPIO=y
CONFIG_GPIO_HOGS=y
```

Si deseas utilizar el WS2812 integrado, es recomendable habilitar esta variable para permitir que dibuje energía.

<!-- <div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Cosmic-Bee/xiao-zephyr-examples/main/images/rp2040/ws2812.gif" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/ws2812.gif" style={{width:300, height:'auto'}}/></div>

#### PWM de LED

En este ejemplo, demostraremos las capacidades PWM del Xiao RP2040. Para hacerlo, utilizaremos el LED azul integrado y usaremos PWM para atenuarlo de forma continua.

Para probar esta configuración, podemos usar un ejemplo existente con Zephyr:

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/fade_led
```

Ingresa al modo de arranque y flashea tu dispositivo:
```
west flash -r uf2
```

Verás la luz azul del LED RGB integrado desvanecerse lentamente y luego repetir el proceso nuevamente.

Vamos a profundizar un poco en este ejemplo para ver por qué funciona:
```
&pwm {
	status = "okay";
	divider-int-4 = <255>;
};
```

Este fragmento de lógica en el `boards/xiao_rp2040.overlay` para el ejemplo habilita la funcionalidad PWM desde el árbol de dispositivos que normalmente está deshabilitada. La configuración del Xiao RP2040 tiene el LED RGB azul integrado configurado como el PWM predeterminado.

Como se puede ver en el `xiao_rp2040-pinctrl.dtsi` de los archivos de la placa de Zephyr, lo siguiente existe:
```
	pwm_ch4b_default: pwm_ch4b_default {
		group1 {
			pinmux = <PWM_4B_P25>;
		};
	};
```

En este caso, el PWM está utilizando el LED PWM configurado en el árbol de dispositivos, que está asociado con el pin 25 (el LED azul). Los pines PWM pueden ser referenciados desde la [documentación del RP2040](https://docs.zephyrproject.org/apidoc/latest/rpi-pico-rp2040-pinctrl_8h.html).

<!-- <div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Cosmic-Bee/xiao-zephyr-examples/main/images/rp2040/led_fade.gif" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/led_fade.gif" style={{width:300, height:'auto'}}/></div>

#### Reloj

Para esto, utilizaremos un ejemplo existente y nuestra superposición de consola:
```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/counter/alarm -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Ingresa al modo de arranque y flashea tu dispositivo:
```
west flash -r uf2
```

Conéctate al monitor (después de reiniciar rápidamente tu placa para asegurarte de que se reinicie):
```
screen /dev/ttyACM0 115200
```

Verás una serie de temporizadores activándose después de un retraso establecido, uno tras otro:
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

Para este ejemplo, vamos a usar el ejemplo tflite "Hello World" junto con nuestra superposición de consola y configuración para leer la respuesta a través de USB serial.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/modules/tflite-micro/hello_world -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Ingresa al modo de arranque y flashea tu dispositivo:
```
west flash -r uf2
```

Conectarse al monitor:
```
screen /dev/ttyACM0 115200
```

Verás los resultados devueltos de la consola:
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

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C Display
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Button
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Buzzer
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SD Card
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)

#### Grove - Placa de Expansión - Display I2C 

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/xiao_expansion_oled.jpg" style={{width:300, height:'auto'}}/></div>

Para probar esta configuración, podemos usar un ejemplo existente con Zephyr:

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/display -- -DSHIELD=seeed_xiao_expansion_board
```

Ingresa al modo de arranque y flashea tu dispositivo:
```
west flash -r uf2
```

Verás una pantalla mostrando varios cuadros negros y un cuadro parpadeante en la esquina, dado que esta pantalla solo soporta dos colores.

Vamos a profundizar un poco en este ejemplo para ver por qué funciona:
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

El archivo de superposición del shield en este ejemplo configura una pantalla OLED SSD1306 en el registro 0x3C. Se selecciona como la pantalla de Zephyr en la sección elegida.

#### Grove - Placa de Expansión - Botón

Para probar esta configuración, podemos usar un ejemplo existente con Zephyr que utilizaremos junto con la superposición y configuración de consola USB.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/button -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf -DSHIELD=seeed_xiao_expansion_board
```

Ingresa al modo de arranque y flashea tu dispositivo:
```
west flash -r uf2
```

Conectarse al monitor:
```
screen /dev/ttyACM0 115200
```

Al presionar el botón con el ejemplo, se activará el LED integrado.

Verás los resultados devueltos desde la consola:

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

Vamos a adentrarnos un poco en este ejemplo para ver por qué funciona:
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

El archivo de superposición de la aplicación se utiliza para configurar varios componentes de la placa. Usando este archivo, se puede utilizar el ejemplo del botón, ya que la superposición permite que Zephyr configure el botón y lo haga disponible para el código asociado.

En este caso, el GPIO 27 corresponde con el Pin A1/D1 en el Xiao RP2040. Está configurado en esta superposición para actuar como un botón y se asigna al nombre sw0 para permitir su uso en el ejemplo, el cual tiene código que espera esto.

#### Grove - Placa de Expansión - Buzzer

Activaremos nuestro buzzer utilizando el ejemplo de PWM blinky para controlar su activación a través de una señal PWM. Para esto, utilizaremos una superposición personalizada que habilita el PWM para el pin A3.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-rp2040/xiao_expansion_buzzer.overlay"
```

Ingresa al modo de arranque y flashea tu dispositivo:
```
west flash -r uf2
```

Después de flashear el archivo UF2, deberías comenzar a escuchar una serie de zumbidos que cambian de sonido a medida que el ejemplo avanza.

Veamos porque funciona:
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

La superposición en uso primero elimina el nodo existente `pwm_led0`, ya que esta placa es compatible con una configuración de LED integrado para PWM. Luego configura el pin A3 para su uso como PWM.

Estamos utilizando el canal 6B aquí para el PWM, ya que el pin asociado para A3 en el Xiao RP2040 es el pin 29. Consulta la [documentación de pinctrl del RP2040](https://docs.zephyrproject.org/apidoc/latest/rpi-pico-rp2040-pinctrl_8h.html#a8c0c1058a626d83ba5f7e18238aba150) para más información o el mapeo de pines de otros pines.

#### Grove - Placa de Expansión - Tarjeta SD

Usaremos el ejemplo del sistema de archivos aquí junto con el shield de la Placa de Expansión Xiao para intentar interactuar con el lector de tarjetas SD a través de SPI. El shield de la placa de expansión tiene el pin CS configurado para el pin asociado `&xiao_d 2`, por lo que no es necesario hacer ningún trabajo adicional para asociar esta capacidad con la placa, aparte de agregar el shield. Para prepararlo aún más, estamos utilizando una configuración personalizada que habilita la funcionalidad de la tarjeta SD.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/subsys/fs/fs_sample -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

Ingresa al modo de arranque y flashea tu dispositivo:
```
west flash -r uf2
```

Conectarse al monitor:
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

En este caso, mi tarjeta SD tenía dos archivos. Sus nombres y tamaños fueron enviados a mi consola.

Veamos los elementos relevantes que entran en juego aquí:
```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

En la configuración asociada estamos habilitando SPI, el controlador de disco SDMMC y el GPIO. Sin esta configuración, la superposición generará un error, ya que el ejemplo no podrá encontrar la tarjeta SD.

La parte relevante del shield de la Placa de Expansión Xiao se muestra a continuación:

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

Como se mencionó anteriormente, el mapeo de pin `&xiao_d 2` se usa para permitir que se seleccione el pin D2 para esto, sin importar la placa utilizada, siempre y cuando sea compatible con la configuración de pin `&xiao_d`.

#### Grove - Sensor de Temperatura y Humedad (SHT31)

Primero, suelda los pines y conecta tu Xiao RP2040 a la placa de expansión. Luego, conecta un cable de conector Grove entre el Grove SHT31 y uno de los puertos I2C de la placa de expansión.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/xiao_sht31.jpg" style={{width:500, height:'auto'}}/></div>

Para probar esta configuración, podemos usar un ejemplo existente con Zephyr, al cual habilitaremos el soporte de consola USB con nuestra superposición y configuración.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Ingresa al modo de arranque y flashea tu dispositivo:
```
west flash -r uf2
```

Conectarse al monitor:
```
screen /dev/ttyACM0 115200
```

Verá los resultados devueltos de la consola:
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

Vamos a adentrarnos un poco en este ejemplo para ver por qué funciona:
```
 &xiao_i2c {
	sht3xd@44 {
			compatible = "sensirion,sht3xd";
			reg = <0x44>;
		};
	};
```

El archivo de superposición de la aplicación se utiliza para configurar varios componentes de la placa. Usando este archivo, el ejemplo del SHT31 puede ser utilizado, ya que la superposición informa a la [lógica del ejemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) cómo configurar el sensor para nuestra placa.

#### Módulo de Pantalla LCD de 1.69 pulgadas, Resolución 240×280, Interfaz SPI

Para este ejemplo, usaremos SPI para conectar una pantalla LCD de 1.69 pulgadas con una resolución de 240x280.

Primero, conecta tu placa a la pantalla LCD usando la siguiente imagen como guía (en este caso estamos usando el Xiao RP2040, pero el mismo diseño de pines se usa para la conexión aquí).

| Display LCD de 1.69 pulg | XIAO RP2040 |
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

A continuación, con el hardware preparado, podemos construir el archivo UF2 para flashear:
```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
```

Ingresa al modo de arranque y flashea tu dispositivo:
```
west flash -r uf2
```

Con el nuevo firmware instalado, el dispositivo ahora muestra la misma pantalla de demostración que vimos anteriormente en la placa de expansión, pero ahora actualizada para la pantalla LCD a color a través de SPI.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/spi_lcd.jpg" style={{width:500, height:'auto'}}/></div>

## ✨ Proyecto de Colaboradores

- Este proyecto está respaldado por el [Proyecto de Colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=57293558) de Seeed Studio.
- Gracias al **esfuerzo de Tim**, tu trabajo será [exhibido aquí](https://wiki.seeedstudio.com/Honorary-Contributors/).

## Soporte Técnico y Discusión sobre Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
