---
description: XIAO ESP32S3(sense) Con Zephyr(RTOS)
title:  XIAO ESP32S3(sense) Con Zephyr(RTOS)
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/xiao_esp32s3_zephyr_rtos
last_update:
  date: 3/20/2024
  author: timo614
---

# XIAO ESP32S3(sense) Con Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-esp32s3.png"/></div>

Esta wiki cubre el soporte de [Zephyr](https://www.zephyrproject.org/) para el [Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started/). Con la ayuda de esta guía podrás utilizar el conjunto de características disponibles para la placa.

## Qué es [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

El SO [**Zephyr**](https://www.zephyrproject.org/) está basado en un kernel de huella pequeña diseñado para uso en sistemas embebidos y con recursos limitados: desde simples sensores ambientales embebidos y wearables LED hasta controladores embebidos sofisticados, relojes inteligentes y aplicaciones inalámbricas IoT.

Para cada dispositivo soportado Zephyr tiene un archivo [devicetree](https://docs.zephyrproject.org/latest/build/dts/index.html) que describe la placa y sus características. La [página de la placa Xiao ESP32S3 Zephyr](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32s3/doc/index.html#supported-features) describe las características soportadas actualmente disponibles que están definidas por el [archivo dts de la placa](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/seeed/xiao_esp32s3/xiao_esp32s3_esp32s3_procpu.yaml#L7).

*Referencia: [**Proyecto Zephyr**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## Primeros Pasos

El primer paso para trabajar con Zephyr es configurar el SDK y la cadena de herramientas para desarrollo local. La [guía de primeros pasos de Zephyr](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) debe ser referenciada para el procedimiento de configuración asociado necesario para tu entorno.

Una vez que la cadena de herramientas de Zephyr ha sido configurada y un SDK asociado ha sido descargado puedes comenzar el desarrollo de aplicaciones.

Para el Xiao ESP32S3 el [archivo de descripción de la placa](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32s3/doc/index.html) puede ser referenciado para información adicional de configuración.

Para obtener los blobs necesarios para usar el ESP32S3 ejecuta el siguiente comando:

```
west blobs fetch hal_espressif
```

Después de esto, las muestras pueden compilarse y cargarse en la placa.

El ejemplo más simple es ejecutar la muestra "Hello World" en la placa. Después de cambiar al directorio de instalación de Zephyr, ejecuta los siguientes comandos.

```
west build -p always -b xiao_esp32s3 samples/hello_world
west flash
west espressif monitor
```

Con el comando final deberías ver la respuesta mostrando el saludo "Hello World!".

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
Hello World! xiao_esp32s3
```

Para ayudar con el proceso de usar Zephyr con Xiao y su placa de expansión, se ha construido un repositorio con varias superposiciones y configuraciones utilizadas aquí. Los comandos incluidos en este artículo wiki asumen que está ubicado en `../applications/xiao-zephyr-examples` relativo a la raíz de zephyr. Se puede proporcionar una ruta alternativa a los comandos a continuación actualizándola.

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## Preparación del Hardware

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32S3 Sense</th>
      <th>Seeed Studio Expansion Board</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
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

  Para usar módulos Grove con Seeed Studio XIAO ESP32S3, utilizaremos una [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) y conectaremos XIAO ESP32S3 en ella.

  Después de eso, los conectores Grove en la placa se pueden usar para conectar módulos Grove

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### Definiciones de Pines

  Necesitas seguir el gráfico a continuación para usar los números de pin internos apropiados al conectar los módulos Grove a los conectores Grove en Grove Shield para Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg"style={{width:900, height:'auto'}}/></div>

### Funcionalidad Principal

- Bluetooth
- Wi-Fi
- TFLite

#### Bluetooth

Para probar esta configuración podemos usar una muestra existente con Zephyr:

```
west build -p always -b xiao_esp32s3 samples/bluetooth/observer
west flash
west espressif monitor
```
Verás una consola disponible para enviar comandos a la placa:

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
Starting Observer Demo
Started scanning...
Exiting main thread.
Device found: EC:11:27:22:AF:D2 (public) (RSSI -77), type 0, AD data len 31
Device found: 02:96:58:9A:B4:64 (random) (RSSI -78), type 3, AD data len 31
Device found: 66:A5:E1:CF:8C:35 (random) (RSSI -58), type 0, AD data len 17
Device found: 62:09:50:DB:85:D0 (random) (RSSI -92), type 0, AD data len 14
Device found: C4:5A:95:A7:96:7D (random) (RSSI -78), type 0, AD data len 20
Device found: E5:44:60:88:DB:99 (random) (RSSI -82), type 0, AD data len 27
Device found: 66:18:ED:DD:74:1C (random) (RSSI -71), type 0, AD data len 17
Device found: 37:D2:FC:F8:FA:B8 (random) (RSSI -75), type 3, AD data len 31
Device found: 40:B8:84:E5:5F:A4 (random) (RSSI -70), type 2, AD data len 28
Device found: 44:EB:7C:AA:89:0B (random) (RSSI -83), type 0, AD data len 18
Device found: 71:AC:4A:98:5E:73 (random) (RSSI -72), type 2, AD data len 4
Device found: 60:D9:62:70:EF:4C (random) (RSSI -95), type 2, AD data len 4
Device found: D8:7D:FC:AE:37:F0 (random) (RSSI -67), type 3, AD data len 8
Device found: 48:1F:C0:29:77:C2 (random) (RSSI -73), type 2, AD data len 4
Device found: 46:B7:35:F5:D7:BE (random) (RSSI -86), type 3, AD data len 17
Device found: E5:4A:F1:1C:3C:39 (random) (RSSI -88), type 3, AD data len 8
```

```
CONFIG_BT=y
CONFIG_BT_OBSERVER=y
```

El [archivo conf](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf) aquí habilita las características relacionadas con bluetooth para la compilación de Zephyr.

#### Wi-Fi

Para probar esta configuración podemos usar una muestra existente con Zephyr:

```
west build -p always -b xiao_esp32s3 samples/net/wifi
west flash
west espressif monitor
```

Verás una consola disponible para enviar comandos a la placa:
```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
uart:~$
```

Existen varios comandos que te permiten ver y conectarte a redes locales, consulta el [readme de ejemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/README.rst) para más información.
```
uart:~$ wifi scan
Scan requested

Num  | SSID                             (len) | Chan (Band)   | RSSI | Security        | BSSID             | MFP
1    | Zephytopia                       10    | 6    (2.4GHz) | -42  | WPA2-PSK        |                   | Disable
2    | Maceronia                        9     | 6    (2.4GHz) | -43  | WPA2-PSK        |                   | Disable

```

Profundicemos en este ejemplo un poco para ver por qué funciona:
```
&wifi {
	status = "okay";
};
```

El [archivo overlay](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32s3.overlay) de la aplicación se utiliza para configurar varios componentes de la placa. Usando este archivo, el ejemplo puede ser utilizado ya que el overlay informa a la lógica del ejemplo para habilitar Wi-Fi.

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

El [archivo conf](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32s3.conf) aquí habilita varias características relacionadas con redes para la compilación de Zephyr.

#### TFLite - Hello World

Habilitar TFLite con Zephyr y actualizar:
```
west config manifest.project-filter -- +tflite-micro
west update
```

Compila la muestra y grábala en tu placa:
```
west build -p always -b xiao_esp32s3 samples/modules/tflite-micro/hello_world
west flash
west espressif monitor
```

Verás los resultados devueltos desde la consola:
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

La información adicional sobre TFLite está fuera del alcance de esta guía, pero el ejemplo sirve como guía de las capacidades del dispositivo y los componentes requeridos para ejecutar la configuración de TFLite.

### Componentes Adicionales

- [Grove - Placa de Expansión](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Pantalla I2C
- [Grove - Placa de Expansión](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Botón
- [Grove - Placa de Expansión](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Zumbador
- [Grove - Placa de Expansión](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Tarjeta SD
- [Grove - Sensor de Temperatura y Humedad (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [Módulo de Pantalla LCD de 1.69 pulgadas, Resolución 240×280, Interfaz SPI](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Pantalla Redonda para Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)


#### Grove - Placa de Expansión - Pantalla I2C

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32s3/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23s3_zephyr/xiao_expansion_oled.jpg" style={{width:600, height:'auto'}}/></div>


Para probar esta configuración podemos usar una muestra existente con Zephyr:

```
west build -p always -b xiao_esp32s3 samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
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
};

```

El shield configura una pantalla OLED SSD1306 en el registro 0x3C. Se selecciona como la pantalla de zephyr en la sección chosen.


#### Grove - Placa de Expansión - Botón

Para probar esta configuración podemos usar una muestra existente con Zephyr:

```
west build -p always -b xiao_esp32s3 samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board
west flash
west espressif monitor
```

Presionar el botón con la muestra activará el LED integrado para que se encienda.

Verás los resultados devueltos desde la consola:

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
Set up button at gpio@60004000 pin 2
Set up LED at gpio@60004000 pin 21
Press the button
Button pressed at 842621292
Button pressed at 1164489270
Button pressed at 1329015357
Button pressed at 1577684271
Button pressed at 1728636675
Button pressed at 1728755988
Button pressed at 1822426500
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

El archivo de protección / superposición se utiliza para configurar varios componentes de la placa. Usando este archivo, el ejemplo del botón puede utilizarse ya que la superposición permite que Zephyr configure el botón y lo haga disponible para el código asociado.

En este caso D1 en el Xiao ESP32S3. Se configura en esta superposición para actuar como un botón y se le asigna el alias sw0 para permitir que se use en el ejemplo que tiene código esperando esto.

#### Grove - Placa de Expansión - Zumbador

Activaremos nuestro zumbador usando el ejemplo PWM parpadeante para controlar su activación mediante una señal PWM. Para esto usaremos una superposición personalizada que habilita el PWM para el pin A3.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32s3 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-esp32s3/xiao_expansion_buzzer.overlay"
```

Después de flashear deberías comenzar a escuchar una serie de zumbidos que cambian de sonido mientras la muestra ejecuta su curso.

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
        pwm_buzzer: pwm_led_gpio0_4 {
            label = "PWM Buzzer";
            pwms = <&ledc0 0 1000 PWM_POLARITY_NORMAL>;
        };
    };
};

&pinctrl {
    ledc0_default: ledc0_default {
        group1 {
            pinmux = <LEDC_CH0_GPIO4>;
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

La superposición configura la lógica PWM para el pin 4 que corresponde con el pin A3 del pinout del ESP32S3.

#### Grove - Placa de Expansión - Tarjeta SD

Usaremos aquí la muestra del sistema de archivos junto con el shield de la Placa de Expansión Xiao para probar la interfaz con el lector de tarjetas SD a través de SPI. El shield de la placa de expansión tiene el pin CS configurado para el pin `&xiao_d 2` asociado, por lo que no se necesita trabajo de tu parte para asociar esta capacidad con la placa además de añadir el shield. Para prepararlo adicionalmente, estamos usando una configuración personalizada que habilita la funcionalidad de la tarjeta SD.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32s3 samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

Ahora flashea y monitorea:
```
west flash
west espressif monitor
```

Deberías ver una respuesta similar a esta:
```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
[00:00:00.208,000] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.208,000] <inf> main: Block count 15519744
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

Como se mencionó anteriormente, el mapeo de pines `&xiao_d 2` se utiliza para permitir que el pin D2 sea seleccionado para esto independientemente de la placa utilizada, siempre que soporte la configuración de pines `&xiao_d`.

#### Grove - Sensor de Temperatura y Humedad (SHT31)

Primero suelde los pines y conecte su Xiao ESP32S3 a la placa de expansión. Luego conecte un cable conector grove entre el Grove SHT31 y uno de los puertos I2C en la placa de expansión.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32s3/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23s3_zephyr/xiao_sht31.jpg" style={{width:600, height:'auto'}}/></div>

Para probar esta configuración podemos usar una muestra existente con Zephyr:

```
west build -p always -b xiao_esp32s3 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
west flash
west espressif monitor
```

Verás los resultados devueltos desde la consola:
```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
SHT3XD: 25.54 Cel ; 53.39 %RH
SHT3XD: 25.58 Cel ; 53.42 %RH
SHT3XD: 25.60 Cel ; 53.57 %RH
SHT3XD: 25.68 Cel ; 53.71 %RH
SHT3XD: 25.68 Cel ; 53.72 %RH
SHT3XD: 25.71 Cel ; 53.67 %RH
SHT3XD: 25.75 Cel ; 53.60 %RH
SHT3XD: 25.76 Cel ; 53.48 %RH
SHT3XD: 25.82 Cel ; 53.31 %RH
SHT3XD: 25.84 Cel ; 53.16 %RH
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

El archivo de superposición de la aplicación se utiliza para configurar varios componentes de la placa. Usando este archivo, el ejemplo SHT31 puede utilizarse ya que la superposición informa a la [lógica de muestra](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) cómo configurar el sensor para nuestra placa.

#### Módulo de Pantalla LCD de 1.69 pulgadas, Resolución 240×280, Interfaz SPI

Para este ejemplo usaremos SPI para conectar a una LCD de 1.69 pulgadas con una resolución de 240x280.

Primero conecta tu placa a la pantalla LCD usando la siguiente imagen como guía (en este caso estamos usando el Xiao ESP32S3 pero el mismo diseño de pines se usa para conectar aquí).

| Pantalla SPI LCD de 1.69 pulgadas| XIAO ESP32S3 |
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
west build -p always -b xiao_esp32s3 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash
```

Con el nuevo firmware en su lugar, el dispositivo ahora muestra la misma pantalla de demostración que vimos anteriormente en la placa de expansión, solo que ahora actualizada para la LCD a color sobre SPI.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32s3/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23s3_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>


#### Pantalla Redonda para Xiao

Para probar esta configuración podemos usar una muestra existente con Zephyr:

```
west build -p always -b xiao_esp32s3 samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

Entra en modo bootloader y flashea tu dispositivo:
```
west flash
```

Verás una pantalla que muestra múltiples esquinas de colores con una esquina negra parpadeando.

Otro ejemplo demuestra el uso de la pantalla táctil:

```
west build -p always -b xiao_esp32s3 samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

La demostración de música mostrada aquí es solo una parte de la pantalla real, pero aún así demuestra la pantalla táctil en acción. Como puedes ver, tocar el botón de reproducción activa la animación de música.

Puedes ver desde el [archivo shield](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay) que esto funciona interfazando con el controlador de pantalla redonda GC9A01 a través de SPI y el módulo táctil CHSC6X a través de i2c.

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
- Deshabilita el puerto serie ya que los pines se usan para la retroiluminación y la interrupción táctil (como se ve arriba mediante: `irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`)
- Configura la pantalla redonda para SPI usando los pines D1, D2 y D3

La [lógica de ejemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c) se basa en el [código de ejemplo de demostración de LVGL](https://github.com/lvgl/lvgl/tree/master/demos/music) que puede examinarse más a fondo.


## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaborador](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=56649975) de Seeed Studio.
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
