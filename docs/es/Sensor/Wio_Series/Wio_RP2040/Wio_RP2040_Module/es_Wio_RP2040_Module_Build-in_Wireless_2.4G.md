---
title: Módulo Wio RP2040
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio_RP2040_Module_Build-in_Wireless_2.4G/
slug: /es/Wio_RP2040_Module_Build-in_Wireless_2.4G
last_update:
  date: 01/11/2022
  author: gunengyu
---

![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_1.jpg)

El módulo Wio RP2040 es un módulo autodesarrollado por Seeed que utiliza el chip RP2040+WiFi, compatible con programación en MicroPython. Tiene un procesador dual-core Cortex M0+ con reloj flexible que funciona hasta 133MHz. Y el módulo es un microcontrolador de bajo consumo con funciones inalámbricas. Con un rendimiento potente y tamaño pequeño, es una opción perfecta para el desarrollo de varios proyectos IoT. El módulo se puede soldar fácilmente en varios backplanes de PCB.

El módulo tiene interfaces ricas, incluyendo 28 pines GPIO (19 pines soportan PIO y PWM), 2 UART, 4 ADC, 2 SPI, 2 I2C. Algunos pines pueden ser multiplexados, como GP12 y GP13 con funciones I2C, SPI, UART. Por eso 28 pines GPIO pueden lograr más pines I/O e interfaces. El módulo Wio RP2040 también tiene un pin USB, que puede ser diseñado para soportar una interfaz USB Type-C.
[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Wio-RP2040-Module-p-4932.html)  

## Características Clave

- **CPU potente**: procesador dual-core Cortex M0+ de 133MHz y 264KB SRAM, 2MB Flash
- **Conexión inalámbrica confiable**: usando chip WiFi potente, soportando frecuencia de 2.4~2.4835 GHz y modo AP&Station
- **Flexibilidad**: compatible con editor Thonny
- **Tamaño pequeño**: 18.0x 28.2x 1.0mm 32 Pines SMT
- **Múltiples certificaciones**: Certificado FCC y CE
- **Lenguajes de programación soportados**: MicroPython

## Especificaciones

| Nombre             | Detalles  |
|-----------------------|--------------|
| Procesadores     | Procesadores dual Cortex M0+, hasta 133 MHz       |
| SRAM | 264KB |
| Flash          | 2MB            |
| Conectividad inalámbrica         | 2.4〜2.4835 GHz；IEEE802.11 b/g/n；AP & Station            |
| Pines GPIO，PIO y PWM            | 20            |
| I2C             | 2            |
| SPI                  | 2   |
| UART                  | 2   |
| ADC                  | 4   |
| VIN                  | 5V-3.6V DC   |
| Tamaño                  | 18.0 x 28.2 x 1.0mm   |

## Descripción General del Hardware

![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_3.png)

:::note
		Pines I/O: El MCU funciona a 3.3V. Si la entrada de voltaje conectada al pin de I/O de propósito general es superior a 3.3V, puede causar daño al chip. Por favor, preste atención al uso, no levante la cubierta de blindaje.
:::
## Primeros Pasos
Si desea cargar el firmware de MicroPython para este módulo, puede descargar [firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2) a la computadora, luego tire del pin BOOT a bajo y conecte el conector hembra MicroUSB según el siguiente diagrama de cableado, y finalmente, puede conectar a la computadora a través del cable de datos. En este momento, la computadora tendrá un disco extraíble adicional, y luego mueva el firmware que descargó al disco extraíble para completar la actualización del firmware.
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/image1.png)


| Versión del firmware          | Registro de actualizaciones  | Descarga|
|-----------------------|--------------|---------|
|V1.15.1|La primera versión oficial|[firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2)|
|V1.15.2|Corrige la estabilidad del Socket y añade el mensaje de error de fallo de conexión|[firmware-v1.15.2.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/v1.15.2.uf2)|
|V1.15.3|Renombra la función original 'wait_msg()' a función 'check_msg()', y añade nueva función 'wait_msg()'. La principal diferencia entre ellas es que la función original 'wait_msg' bloqueará la ejecución del programa cuando no haya 'esperado' los datos. Sin embargo, la función 'check_msg()' solo detectará si los datos son recibidos. Cuando lo hace, ejecutará el callback, y si no, el programa continuará ejecutándose.|[firmware-v1.15.3.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/1.15.3.uf2)|

:::note
    La versión del firmware utilizada en el tutorial de la wiki es V1.15.1.
    Si utilizas una nueva versión del firmware, consulta el registro de actualizaciones del firmware para modificar el código de ejemplo.
:::

### Software

#### 1. Instalar Thonny
Fácil de comenzar. Thonny viene con Python 3.7 integrado, por lo que solo se necesita un instalador simple y estarás listo para aprender a programar. Primero, haz clic en [Thonny.org](https://thonny.org/) para ingresar a la página de descarga. En la esquina superior derecha de la página, selecciona el paquete de instalación de Thonny según tu sistema operativo para descargarlo. Haz doble clic en el paquete de instalación que descargaste para abrirlo, e instálalo siguiendo los pasos.
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_4.png)
Ahora que tienes Thonny instalado, abre la aplicación. Deberías ver la interfaz principal de Thonny:
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_5.png)
La interfaz principal de Thonny es muy simple, dividida en las siguientes cuatro partes:

1.Barra de herramientas: herramientas básicas comunes, como nuevo, abrir, guardar, ejecutar el script actual, detener, etc.

2.Editor de código: el área central de Thonny, donde escribiremos código Python/MicroPython.

3.Shell: Podemos ejecutar comandos aquí, y los resultados de los comandos se mostrarán en el Shell inmediatamente. También podemos ver las salidas de nuestro código en la ventana del Shell.

4.Intérprete: Aquí puedes seleccionar el tipo de intérprete para compilar el programa. Haz clic en Python 3.7.9, encuentra MicroPython (Raspberry pi Pico) en el menú emergente, y haz clic en OK para cambiar el intérprete al intérprete de Pico. También puedes hacer clic en "Tools>>>Options>>>Interpreter" para seleccionar.

![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_6.png)
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_7.png)

#### 2.Conectar el Módulo Wio RP2040
Para conectar el módulo Wio RP2040, necesitas sacar correctamente los pines USB y conectarlos al cable de datos. Usa el cable de datos para conectar el módulo a la computadora, y luego haz clic en el botón "Restart backend" en la barra de herramientas. Si Wio RP2040 se conecta exitosamente a la computadora, verás la información de la versión de MicroPython y el nombre del dispositivo en el Shell.
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_8.png)

#### 3. Controlar Pines I/O
Puedes activar el pin GP13 con el siguiente código:
```
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

Presiona el ícono de reproducción en la barra de herramientas para ejecutar tu código.
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_9.png)
Puedes conectar una luz LED al pin GP13 para detectar si el pin está siendo controlado normalmente.

## FAQ

### 1. Necesito que el código se ejecute automáticamente después del inicio.

necesitas renombrar el código a "main.py" y guardarlo en la placa de control principal. Cuando la placa de control principal se reinicie la próxima vez, ejecutará automáticamente el programa main.py.

### 2. Después de ejecutar código con funciones de red, se reportan errores o fallos si ejecuto otros programas.

Puedes hacer clic en el botón RESET de la placa de control principal para reiniciar la placa, y luego reconectar al editor Thonny nuevamente para ejecutar otros programas.

### 3. Quiero ver más programas/proyectos de ejemplo.

Puedes consultar la wiki de la Wio RP2040 mini Dev Board, hay más proyectos de ejemplo, y estos proyectos son comunes.


## Soporte Técnico y Discusión de Productos
 si tienes algún problema técnico.  envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>