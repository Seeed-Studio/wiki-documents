---
description: XIAO nRF52840(sense) Con Zephyr(RTOS)
title:  XIAO nRF52840(sense) Con Zephyr(RTOS)
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-nRF52840-Zephyr-RTOS
last_update:
  date: 06/07/2024
  author: Tim
---

# XIAO nRF52840(sense) Con Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-ble.png"/></div>

## Qué es RTOS

Uno de los componentes más importantes de los sistemas embebidos actuales es el **RTOS** también conocido como **Sistema Operativo de Tiempo Real**, que es responsable de todo, desde la programación de tareas hasta la ejecución de aplicaciones.

**RTOS** está diseñado para proporcionar un modo de ejecución predecible. Cuando el procesamiento debe cumplir con el límite de tiempo del sistema, se utiliza RTOS. Por lo tanto, comparado con GPOS (Sistema Operativo de Propósito General), RTOS es usualmente ligero y pequeño en tamaño, y generalmente solo proporciona funciones requeridas para ejecutar tipos específicos de aplicaciones en hardware específico. En algunos casos, los desarrolladores pueden modificar el RTOS existente, reducirlo para proporcionar solo la funcionalidad requerida por una aplicación específica, y/o personalizar su funcionalidad o características de rendimiento.

## Qué es [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

El SO [**Zephyr**](https://www.zephyrproject.org/) está basado en un kernel de huella pequeña diseñado para uso en sistemas embebidos y con recursos limitados: desde simples sensores ambientales embebidos y wearables LED hasta controladores embebidos sofisticados, relojes inteligentes y aplicaciones inalámbricas IoT.

## Características

Zephyr ofrece un gran y siempre creciente número de características incluyendo:

### Suite extensa de servicios de Kernel

Zephyr ofrece una serie de servicios familiares para desarrollo:

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
  - División de tiempo: Habilita división de tiempo entre hilos preventivos de igual prioridad
  - Múltiples estrategias de cola:
    - Cola de preparados de lista enlazada simple
    - Cola de preparados de árbol rojo/negro
    - Cola de preparados multi-cola tradicional

### Soporte Bluetooth Low Energy 5.0

Cumple con Bluetooth 5.0 (ESR10) y soporte de Controlador Bluetooth Low Energy (LE Link Layer). Incluye malla Bluetooth y un controlador Bluetooth listo para calificación Bluetooth.

- Perfil de Acceso Genérico (GAP) con todos los roles LE posibles
- Perfil de Atributo Genérico (GATT)
- Soporte de emparejamiento, incluyendo la característica Secure Connections de Bluetooth 4.2
- Abstracción de controlador HCI limpia
- Interfaz HCI cruda para ejecutar Zephyr como Controlador en lugar de una pila Host completa
- Verificado con múltiples controladores populares
- Altamente configurable

Soporte de Malla:

- Características de Relay, Friend Node, Low-Power Node (LPN) y GATT Proxy
- Ambos portadores de Aprovisionamiento soportados (PB-ADV & PB-GATT)
- Altamente configurable, ajustándose en dispositivos con al menos 16k RAM

*Referencia: [**Proyecto Zephyr**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## Comenzando

Una vez que la cadena de herramientas de Zephyr ha sido configurada y un SDK asociado ha sido descargado, puedes comenzar el desarrollo de aplicaciones.

Para el Xiao nrf52840, el [archivo de descripción de la placa](https://docs.zephyrproject.org/latest/boards/seeed/xiao_ble/doc/index.html) puede ser referenciado para información adicional de configuración.

Para programar el Xiao nrf52840 se pueden seguir los siguientes pasos:

1. Construir un ejemplo o tu aplicación
2. Conectar el Xiao nrf52840
3. Hacer doble clic en el botón `RST` configurando el dispositivo en modo bootloader uf2
4. Ejecutar el comando `west flash -r uf2` para flashear el dispositivo

El ejemplo más simple es ejecutar la muestra "Hello World" en la placa. Después de cambiar al directorio de la instalación de Zephyr, ejecuta los siguientes comandos.

```
west build -p always -b xiao_ble samples/hello_world
```

Si estás usando una placa Xiao nRF52840 Sense puedes compilar para su archivo de definición de placa usando `xiao_ble/nrf52840/sense` en lugar de `xiao_ble` de esta manera (para este ejemplo no hace diferencia):

```
west build -p always -b xiao_ble/nrf52840/sense samples/hello_world
```

Después de que esto se complete, entra en el modo bootloader uf2 y escribe:

```
west flash -r uf2
```

Encuentra el puerto para tu dispositivo, en el caso de Ubuntu esto se puede hacer mediante: `ls /dev/tty*` y confirmando qué dispositivo aparece cuando tu USB ha sido conectado.

En mi ejemplo veo `/dev/ttyACM0`:

Usando screen puedes entonces conectarte y monitorear la respuesta serial:

```
screen /dev/ttyACM0 115200
```

Deberías ver una respuesta similar a la siguiente:

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Hello World! xiao_ble/nrf52840
```

Para ayudar con el proceso de usar Zephyr con Xiao y su placa de expansión, se ha construido un repositorio con varias superposiciones y configuraciones utilizadas aquí. Los comandos incluidos en este artículo de wiki asumen que está ubicado en `../applications/xiao-zephyr-examples` relativo a la raíz de zephyr. Se puede proporcionar una ruta alternativa a los comandos a continuación actualizándola.

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## Preparación del Hardware

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

  Para usar módulos Grove con Seeed Studio XIAO nrf52840, utilizaremos una [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) y conectaremos XIAO nrf52840 en ella.

  Después de eso, los conectores Grove en la placa se pueden usar para conectar módulos Grove

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### Definiciones de Pines

  Necesitas seguir el gráfico a continuación para usar los números de pin internos apropiados al conectar los módulos Grove a los conectores Grove en Grove Shield para Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/pinout2.png"style={{width:900, height:'auto'}}/></div>

### Funcionalidad Principal

- LED integrado
- IMU integrado (Sense)
- Micrófono integrado (Sense)
- Bluetooth
- TFLite

#### LED Integrado

Para este ejemplo usaremos la muestra de parpadeo para hacer parpadear el LED integrado.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky
```

Presiona dos veces el botón RESET y luego flashea:

```
west flash -r uf2
```

Verás que el LED rojo integrado se enciende y apaga creando un efecto de parpadeo.

Profundicemos un poco en este ejemplo para ver por qué funciona.

El código de ejemplo asociado hace referencia a led0:

```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

Esto se define en el código del árbol de dispositivos del Xiao nRF52840 a través de un alias:

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

Corresponde con el pin 26 en la placa.

Para los pines con el breakout Xiao no necesitas usar el mapeo de pines &gpio0 directamente ya que los archivos de la placa proporcionan un conector Xiao que simplifica la interfaz.

Por ejemplo, si fuera a referenciar D0 lo referenciaría como `&gpio 2` o `&xiao_d 0`.

```
/ {
	xiao_d: connector {
		compatible = "seeed,xiao-gpio";
		#gpio-cells = <2>;
		gpio-map-mask = <0xffffffff 0xffffffc0>;
		gpio-map-pass-thru = <0 0x3f>;
		gpio-map
			= <0 0 &gpio0 2 0>		/* D0 */
			, <1 0 &gpio0 3 0>		/* D1 */
			, <2 0 &gpio0 28 0>		/* D2 */
			, <3 0 &gpio0 29 0>		/* D3 */
			, <4 0 &gpio0 4 0>		/* D4 */
			, <5 0 &gpio0 5 0>		/* D5 */
			, <6 0 &gpio1 11 0>		/* D6 */
			, <7 0 &gpio1 12 0>		/* D7 */
			, <8 0 &gpio1 13 0>		/* D8 */
			, <9 0 &gpio1 14 0>		/* D9 */
			, <10 0 &gpio1 15 0>		/* D10 */
			;
	};
};
```

#### IMU Integrado (Sense)

Una de las características principales del Xiao nrf52840 es su sensor IMU integrado. Con estos datos se podría entrenar un modelo de aprendizaje automático, detectar gestos, movimiento de la placa, etc.

Para probar esta característica usaremos una muestra integrada que utiliza el IMU y luego examinaremos el código asociado para entender por qué funciona.

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/sensor/lsm6dsl
```

Presiona dos veces el botón RESET y luego flashea:

```
west flash -r uf2
```

Necesitarás conectarte para ver la salida:

```
screen /dev/ttyACM0 115200
```

Esto debería mostrar algo similar a esto:

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

¿Por qué funciona? Podemos ver el [código de ejemplo](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/sensor/lsm6dsl) a través del repositorio de github para Zephyr.

```
	const struct device *const lsm6dsl_dev = DEVICE_DT_GET_ONE(st_lsm6dsl);
```

La lógica de ejemplo encuentra el objeto devicetree `st_lsm6dsl` asociado para la placa objetivo. Podemos ver el devicetree del Xiao nrf52840 sense para ver más detalles sobre cómo está configurado:

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

Se está utilizando un GPIO para habilitar la alimentación del pin. Puedes ver en el archivo de definición que está usando GPIO1 8. He resaltado la parte relevante del [esquemático del Xiao nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf) a continuación:

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-imu.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-imu.png" style={{width:500, height:'auto'}}/></div>

De este resaltado del esquemático puedes ver que GPIO1 8 es el pin de habilitación para el IMU. Además, GPIO0 11 es el pin de interrupción. Como tal, esto se refleja en el fragmento de devicetree anterior

#### Micrófono Integrado (Sense)

Una de las características principales del Xiao nrf52840 es su micrófono integrado. Al igual que su IMU, permite muchas aplicaciones de aprendizaje automático a través de su uso.

Para probar esta característica usaremos una muestra integrada que utiliza el micrófono y luego examinaremos el código asociado sobre por qué funciona.

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/drivers/audio/dmic
```

Presiona dos veces el botón RESET y luego flashea:

```
west flash -r uf2
```

Necesitarás conectarte para ver la salida:

```
screen /dev/ttyACM0 115200
```

Esto debería mostrar algo similar a estas líneas:

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

¿Por qué funciona? Podemos ver el [código de ejemplo](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/drivers/audio/dmic) a través del repositorio de github para Zephyr.

Este ejemplo demuestra lo siguiente:

> Esta es una aplicación muy simple destinada a mostrar cómo usar la :ref:`API de Audio DMIC` y también a ser una ayuda en el desarrollo de controladores para implementar esta API. Realiza dos transferencias PDM con diferentes configuraciones (usando un canal y dos canales) pero no procesa de ninguna manera los datos de audio recibidos.

```
const struct device *const dmic_dev = DEVICE_DT_GET(DT_NODELABEL(dmic_dev));
```

La lógica de ejemplo encuentra el objeto devicetree `dmic_dev` asociado para la placa objetivo. Podemos ver el devicetree del Xiao nrf52840 sense para ver más detalles sobre cómo está configurado:

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

En el overlay del proyecto de muestra, este regulador se habilita entonces:

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

Se está utilizando un GPIO para habilitar la alimentación del pin. He resaltado la parte relevante del [esquemático del Xiao nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf) a continuación:

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-mic.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-mic.png" style={{width:500, height:'auto'}}/></div>

Desde este resaltado del esquemático puedes ver que GPIO1 10 es el pin de habilitación para el micrófono.

#### Bluetooth

Para probar esta configuración podemos usar una muestra existente con Zephyr:

```
west build -p always -b xiao_ble samples/bluetooth/observer
```

Flashea tu placa:

```
west flash -r uf2
```

Espera un momento para que el MCU se reinicie después del flasheo y conéctate al monitor:

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

El [archivo conf](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf) aquí habilita las características relacionadas con bluetooth para la compilación de Zephyr.

#### TFLite - Hello World

Habilitar TFLite con Zephyr y actualizar:

```
west config manifest.project-filter -- +tflite-micro
west update
```

Compila la muestra y grábala en tu placa:

```
west build -p always -b xiao_ble samples/modules/tflite-micro/hello_world
```

Flashea tu placa:

```
west flash -r uf2
```

Espera un momento para que el MCU se reinicie después del flasheo y conéctate al monitor:

```
screen /dev/ttyACM0 115200
```

Verás los resultados devueltos desde la consola:

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

La información adicional sobre TFLite está fuera del alcance de esta guía, pero el ejemplo sirve como guía para las capacidades del dispositivo y los componentes requeridos para ejecutar la configuración de TFLite.

### Componentes Adicionales

- [Grove - Placa de Expansión](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Pantalla I2C
- [Grove - Placa de Expansión](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Botón
- [Grove - Placa de Expansión](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Zumbador
- [Grove - Placa de Expansión](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Tarjeta SD
- [Grove - Sensor de Temperatura y Humedad (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [Módulo de Pantalla LCD de 1.69 pulgadas, Resolución 240×280, Interfaz SPI](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Pantalla Redonda para Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- [Pantalla Redonda para Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html) - Tarjeta SD

#### Grove - Placa de Expansión - Pantalla I2C

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/xiao_expansion_oled-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/xiao_expansion_oled-nrf.jpg" style={{width:500, height:'auto'}}/></div>

Para probar esta configuración podemos usar una muestra existente con Zephyr:

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash -r uf2
```

Verás una pantalla que muestra múltiples cajas negras y una caja parpadeante en la esquina dado que esta pantalla solo soporta dos colores.

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

El shield configura una pantalla OLED SSD1306 en el registro 0x3C. Se selecciona como la pantalla de zephyr en la sección chosen.

#### Grove - Placa de Expansión - Botón

Para probar esta configuración podemos usar una muestra existente con Zephyr:

```
west build -p always -b xiao_ble samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board
```

Flashea tu placa:

```
west flash -r uf2
```

Espera un momento para que el MCU se reinicie después del flasheo y conéctate al monitor:

```
screen /dev/ttyACM0 115200
```

Presionar el botón con la muestra activará el LED integrado para que se encienda.

Verás los resultados devueltos desde la consola:

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

El archivo de protección / superposición se utiliza para configurar varios componentes de la placa. Usando este archivo, el ejemplo del botón puede utilizarse ya que la superposición permite que Zephyr configure el botón y lo haga disponible para el código asociado.

En este caso D1 en el Xiao nrf52840. Se configura en esta superposición para actuar como un botón y se le asigna el alias sw0 para permitir que se use para la muestra que tiene código esperando esto.

#### Grove - Placa de Expansión - Zumbador

Activaremos nuestro zumbador usando el ejemplo PWM parpadeante para controlar su activación a través de una señal PWM. Para esto usaremos una superposición personalizada que habilita el PWM para el pin A3.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-nrf52480/xiao_expansion_buzzer.overlay"
```

Después de flashear deberías comenzar a escuchar una serie de zumbidos que cambian de sonido mientras la muestra ejecuta su curso.

Veamos por qué esto funciona:

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

La superposición configura la lógica PWM para el pin 29 que corresponde con el pin A3 del pinout del Xiao nrf52840.

#### Grove - Placa de Expansión - Tarjeta SD

Usaremos aquí la muestra del sistema de archivos junto con el escudo de la Placa de Expansión Xiao para probar la interfaz con el lector de tarjetas SD a través de SPI. El escudo de la placa de expansión tiene el pin CS configurado para el pin `&xiao_d 2` asociado, por lo que no se necesita trabajo de tu parte para asociar esta capacidad con la placa además de añadir el escudo. Para prepararlo más, estamos usando una configuración personalizada que habilita la funcionalidad de la tarjeta SD.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

Ahora flashea y monitorea (primero presionando RESET dos veces para entrar al modo bootloader uf2):

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

Primero solda los pines y conecta tu Xiao nrf52840 a la placa de expansión. Luego conecta un cable conector grove entre el Grove SHT31 y uno de los puertos I2C en la placa de expansión.

Para probar esta configuración podemos usar una muestra existente con Zephyr:

```
west build -p always -b xiao_ble samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
```

Flashea tu placa después de que esté en modo bootloader uf2:
```

west flash -r uf2

```

Espera un momento para que el MCU se reinicie después del flasheo y conéctate al monitor:
```

screen /dev/ttyACM0 115200

```

Verás los resultados devueltos desde la consola:
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

El archivo de superposición de la aplicación se utiliza para configurar varios componentes de la placa. Usando este archivo, el ejemplo SHT31 puede utilizarse ya que la superposición informa a la [lógica de muestra](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) cómo configurar el sensor para nuestra placa.

#### Módulo de Pantalla LCD de 1.69 pulgadas, Resolución 240×280, Interfaz SPI

Para este ejemplo usaremos SPI para conectar a una LCD de 1.69 pulgadas con una resolución de 240x280.

Primero conecta tu placa a la pantalla LCD usando la siguiente imagen como guía (en este caso estamos usando el Xiao nrf52840 pero el mismo diseño de pines se usa para conectar aquí).

| Pantalla SPI LCD de 1.69 pulgadas| XIAO nrf52840 |
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

Con el nuevo firmware en su lugar, el dispositivo ahora muestra la misma pantalla de demostración que vimos anteriormente en la placa de expansión, solo que ahora actualizada para la LCD a color sobre SPI.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/spi_lcd-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/spi_lcd-nrf.jpg" style={{width:500, height:'auto'}}/></div>

#### Pantalla Redonda para Xiao

Para probar esta configuración podemos usar una muestra existente con Zephyr:

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

Entra en modo bootloader y flashea tu dispositivo:
```
west flash -r uf2
```

Verás una pantalla que muestra múltiples esquinas de colores con una esquina negra parpadeando.

Otro ejemplo demuestra el uso de la pantalla táctil:

```
west build -p always -b xiao_ble samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
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
- Deshabilita el serial ya que los pines se usan para la retroiluminación y la interrupción táctil (como se ve arriba mediante: `irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`)
- Configura la pantalla redonda para SPI usando los pines D1, D2 y D3

La [lógica de ejemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c) se basa en el [código de ejemplo de demostración de LVGL](https://github.com/lvgl/lvgl/tree/master/demos/music) que puede ser examinado más a fondo.


#### Pantalla Redonda para Xiao - Tarjeta SD

Usaremos aquí el ejemplo de sistema de archivos junto con el shield de la Placa de Expansión Xiao para intentar interfaz con el lector de tarjetas SD sobre SPI. El shield de la placa de expansión tiene el pin CS configurado para el pin `&xiao_d 2` asociado, por lo que no se necesita trabajo de tu parte para asociar esta capacidad con la placa además de añadir el shield. Para prepararlo más, estamos usando una configuración personalizada que habilita la funcionalidad de la tarjeta SD.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_round_display
```
Ahora flashea y monitorea (primero presionando RESET dos veces para entrar al modo bootloader uf2):

```
west flash -r uf2
```

Espera un momento para que el MCU se reinicie después del flasheo y conéctate al monitor:

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

Como se esperaba, el contenido del archivo se muestra de manera similar a la salida del ejemplo de tarjeta SD de la placa de expansión Xiao.

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

D2 se utiliza para el pin SD CS.

## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaborador](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=57293418) de Seeed Studio.
- Gracias a **los esfuerzos de Tim** y tu trabajo será [exhibido](https://wiki.seeedstudio.com/es/Honorary-Contributors/).

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
