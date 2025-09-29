---
title: Comenzar con la Placa de Desarrollo Wio RP2040 mini
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/
slug: /es/Wio_RP2040_mini_Dev_Board-Onboard_Wifi
last_update:
  date: 01/11/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_1.jpg)

La Placa de Desarrollo Wio RP2040 mini es una placa de desarrollo basada en el módulo Wio RP2040 con función inalámbrica, que soporta programación en MicroPython. Tiene un chip RP2040 de doble núcleo a 133MHz, que es un microcontrolador de bajo consumo con funciones inalámbricas. Con un rendimiento potente y tamaño pequeño, es una opción perfecta para el desarrollo de varios proyectos IOT.

La placa tiene interfaces ricas, incluyendo 28 PINs GPIO (19 PINs soportan PIO y PWM), 2 UART, 4 ADC, 2 SPI, 2 I2C. Algunos pines pueden ser multiplexados, como GP12 y GP13 con funciones I2C, SPI, UART. Por eso 28 PINs GPIO pueden lograr más Pines I/O e interfaces. La placa de desarrollo inalámbrica Wio RP2040 mini soporta una interfaz USB Type-C, que puede suministrar energía y descargar código. Además de la luz LED de alimentación integrada, también agregamos un LED controlable por el usuario (está conectado al pin GP13). Un botón RESET (la pantalla está impresa como "RUN" en la placa) y un botón BOOT (que puede usarse para volver a cargar el firmware).

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html)

## Características Clave

- **CPU Potente:**
  - procesador RP2040 de doble núcleo a 133MHZ y 264KB SRAM, 2MB Flash
- **Conexión inalámbrica confiable:**
  - usando chip wifi potente, soportando frecuencia de 2.4~2.4835 GHz y modo Ap&Station
- **Flexibilidad:**
  - compatible con editor Thonny
- **Operación de proyecto fácil:**
  - amigable con protoboard
- **Múltiples certificaciones:**
  - Certificado FCC y CE
- **Soporta lenguajes de programación:**
  - MicroPython

## Especificación

| Nombre | Detalles |
| --- | --- |
| Procesadores | Procesadores Dual Cortex M0+, hasta 133 MHz |
| SRAM | 264KB |
| Flash | 2MB |
| Conectividad inalámbrica | 2.4〜2.4835 GHz；IEEE802.11 b/g/n；Ap & Station |
| Pines GPIO，PIO y PWM | 20 |
| I2C  | 2 |
| SPI | 2 |
| UART | 2 |
| ADC | 4 |
| Alimentación/Descarga  | Type-C |
| Suministro de Energía | 5V DC |
| Tamaño | 25.8 x 45.5mm |

## Descripción General del Hardware

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_3.png)

## Diagrama de Pines

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_4.png)

:::note
  Pines I/O: El MCU funciona a 3.3V. Si la entrada de voltaje conectada al pin I/O de propósito general es superior a 3.3V, puede causar daño al chip. Por favor, preste atención al uso, no levante la cubierta de blindaje.
:::

## Primeros Pasos

La placa de control principal tiene firmware MicroPython integrado, por lo que los usuarios pueden conectarse directamente al editor de código Thonny. Si su firmware está dañado o desea reemplazarlo con otro firmware, puede descargar [firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2) a la computadora. Mantenga presionado el botón BOOT de la placa de control principal RP2040 y luego conéctela con el cable USB. En este momento, la computadora tendrá un disco extraíble adicional, y luego arrastre el firmware que descargó al disco extraíble para completar la actualización del firmware.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_5.png)

### Requisitos de hardware

- Wio RP2040 mini Dev Board x 1
- Computadora x 1
- Cable USB Type-C x 1

Conecte la Wio RP2040 mini Dev Board a la computadora a través del cable USB, y el indicador LED rojo de alimentación en la placa debería encenderse.

| Versión del firmware            | Registro de actualizaciones  | Descarga|
|-----------------------|--------------|---------|
|V1.15.1|La primera versión oficial|[firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2)|
|V1.15.2|Corrige la estabilidad del Socket y añade el mensaje de error de fallo de conexión|[firmware-v1.15.2.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/v1.15.2.uf2)|
|V1.15.3|Renombra la función original 'wait_msg()' a función 'check_msg()', y añade nueva función 'wait_msg()'. La principal diferencia entre ellas es que la función original 'wait_msg' bloqueará la ejecución del programa cuando no haya 'esperado' los datos. Sin embargo, la función 'check_msg()' solo detectará si los datos son recibidos. Cuando lo hace, ejecutará el callback, y si no, el programa continuará ejecutándose.|[firmware-v1.15.3.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/1.15.3.uf2)|

:::note
       La versión del firmware utilizada en el tutorial de la wiki es V1.15.1.
       Si utilizas una nueva versión del firmware, consulta el registro de actualizaciones del firmware para modificar el código de ejemplo.
:::

## Software

#### 1. Instalar Thonny

Fácil de comenzar. Thonny viene con Python 3.7 integrado, por lo que solo se necesita un instalador simple y estarás listo para aprender a programar. Primero, haz clic en [Thonny.org](https://thonny.org/) para ingresar a la página de descarga. En la esquina superior derecha de la página, selecciona el paquete de instalación de Thonny según tu sistema operativo para descargarlo. Haz doble clic en el paquete de instalación que descargaste para abrirlo, e instálalo siguiendo los pasos.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_6.png)

Ahora que tienes Thonny instalado, abre la aplicación. Deberías ver la interfaz principal de Thonny:

![1.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_7.png)
La interfaz principal de Thonny es muy simple, dividida en las siguientes cuatro partes:

1.Barra de herramientas: herramientas básicas comunes, como nuevo, abrir, guardar, ejecutar el script actual, detener, etc.

2.Editor de código: el área central de Thonny, donde escribiremos código Python/MicroPython.  

3.Shell: Podemos ejecutar comandos aquí, y los resultados de los comandos se mostrarán en el Shell inmediatamente. También podemos ver las salidas de nuestro código en la ventana del Shell.

4.Intérprete: Aquí puedes seleccionar el tipo de intérprete para compilar el programa. Haz clic en Python 3.7.9, encuentra MicroPython (Raspberry pi Pico) en el menú emergente, y haz clic en OK para cambiar el intérprete al intérprete de Pico. También puedes hacer clic en "Tools>>>Options>>>Interpreter" para seleccionar.

![2.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_8.png)
![3.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_9.png)

#### 2.Conectar la placa de desarrollo Wio RP2040 mini

Usa el cable de datos para conectar la placa de desarrollo a la computadora, y luego haz clic en el botón "Restart backend" en la barra de herramientas. Si Wio RP2040 se conecta exitosamente a la computadora, verás la información de la versión de MicroPython y el nombre del dispositivo en el Shell.
![4.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_10.png)

#### 3.Encender la luz LED integrada

Debido a que el PIN13 de la placa de desarrollo está conectado a una luz LED, podemos encender la luz LED elevando el pin PIN13. A continuación, haz clic en "File" y selecciona "New File" para crear un nuevo archivo de programa, y luego escribe el siguiente código:

```python
from machine import Pin, Timer

led = Pin(13, Pin.OUT)
Counter = 0
Fun_Num = 0

def fun(tim):
    global Counter
    Counter = Counter + 1
    print(Counter)
    led.value(Counter%2)
    
tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=fun)
```

**Presiona el ícono de reproducción en la barra de herramientas para ejecutar tu código.**
![5.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_11.png)
Si funciona bien, verás que la luz LED se enciende y se apaga una vez por segundo. Y la salida del número creciente se mostrará en el Shell.
![6.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_12.png)

## FAQ

#### 1. Necesito que el código se ejecute automáticamente después del inicio

necesitas renombrar el código a "main.py" y guardarlo en la placa de control principal. Cuando la placa de control principal se reinicie la próxima vez, ejecutará automáticamente el programa main.py.

#### 2. Después de ejecutar código con funciones de red, se reportan errores o fallos si ejecuto otros programas

Puedes hacer clic en el botón RESET de la placa de control principal para reiniciar la placa, y luego reconectar al editor Thonny nuevamente para ejecutar otros programas.

## Recursos

- **[BRD]** [Wio_RP2040 mini v1.1](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.brd)

- **[PDF]** [Wio_RP2040 mini v1.1.pdf](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.pdf)

- **[SCH]** [Wio_RP2040 mini v1.1.sch](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.sch)

## Soporte Técnico y Discusión de Productos

si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
