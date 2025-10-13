---
description:  Tiny BLE
title:  Tiny BLE
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Tiny_BLE
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/BLE_Smurfs_Photo.png)

El Tiny BLE es una placa de desarrollo Bluetooth Low Energy diseñada teniendo en mente el bajo consumo de energía y el tamaño pequeño. Está integrada con una función de medición de corriente para proporcionar datos de consumo de energía en tiempo real, lo cual es esencial para que los desarrolladores optimicen el software y diseñen dispositivos con larga duración de batería. Soporta el IDE basado en la nube ARM mbed con un SDK de C/C++ práctico y una gran cantidad de librerías de código abierto, lo que hace que el prototipado y desarrollo sean extremadamente fáciles.

|![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Ble_smurfs_interface.png) |![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Ble_smurfs_ble.png)
|---|---|

Con su diseño modular, podemos dividirlo en dos partes - la parte de interfaz CMSIS DAP y la parte BLE. La parte de interfaz CMSIS DAP es como la navaja suiza. Proporciona programación de arrastrar y soltar, depuración CMSIS DAP, puerto serie virtual USB, medición de corriente y carga de batería. La parte BLE está construida sobre el Nordic nRF51822 con radio multiprotocolo Bluetooth Low Energy 2.4GHz y un núcleo ARM Cortex-M0 de 32 bits funcionando a 16MHz. El MPU6050, un 6 DOF con acelerómetro 3D y giroscopio 3D, está integrado para proporcionar función de detección de movimiento.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeed-Tiny-BLE-BLE-%2B-6DOF-Mbed-Platform-p-2268.html)

## Características

---
- nRF51822: ARM Cortex-M0 + radio 2.4GHz (BLE o ANT+)

- MPU-6050: acelerómetro 3d + giroscopio 3d

- LPC11U35FHI33: CMSIS DAP

- Medición de corriente

- CN3065: puerto de carga de batería en la parte USB

- Fuente de alimentación: USB/batería(3.5-4.2V)
- Voltaje de salida: 3.3V

- 4 I/Os, todos pueden ser usados como entrada analógica, entrada/salida digital, I2C, SPI o UART

- Control de salida VCC

## Especificaciones

---
<table>
<tr>
<th>Especificación</th>
<th>Valor</th>
</tr>
<tr>
<td width="200px">Microcontrolador</td>
<td width="400px">nRF51822QFAA; LPC11U35FHI33</td>
</tr>
<tr>
<td>Dimensión Externa</td>
<td>43.3mm x 29.0mm x 4.3mm</td>
</tr>
<tr>
<td>Fuente de alimentación</td>
<td>USB/Batería(Soporte de Batería JST-1.0)</td>
</tr>
</table>

## Comenzar

---
![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Get_started_with_mbed.png)

1. Haz clic en [este enlace](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Tiny-BLE) para **iniciar sesión o registrarte en mbed**

2. [Importa el programa mbed_blinky](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Tiny-BLE) y cambia el código de main.cpp como se muestra a continuación.

3. Haz clic en el icono **Compile** de la barra de herramientas superior para compilar el programa, luego descarga un archivo hex compilado.

4. Arrastra y suelta el archivo hex descargado en el disco MBED

5. Un LED azul comenzará a parpadear.

```
#include "mbed.h"

DigitalOut red(p22);           // RED LED
DigitalOut green(p21);         // GREEN LED
DigitalOut blue(p23);          // BLUE LED

int main()
{
    while (true) {
        blue = !blue;
        wait(0.1);
    }
}
```

[Programa Seeed_Tiny_BLE_Get_Started](http://developer.mbed.org/teams/Seeed/code/Seeed_Tiny_BLE_Get_Started/) incluye detección de movimientos, botón y nivel de batería. Es una buena referencia para comenzar.

### Depuración

Para habilitar la depuración SWD y obtener mensajes de depuración a través del puerto serie virtual USB, por favor instala [el controlador de mbed](https://developer.mbed.org/handbook/Windows-serial-configuration).

### Monitoreo de Energía

Cambiar la velocidad de baudios del puerto serie virtual USB a 4000000+ activará la medición de corriente. Diseñamos una herramienta - Tiny BLE MONITOR para que obtengas la información de consumo de energía fácilmente.

- [Tiny BLE MONITOR para Windows](http://tangram.qiniudn.com/ble_smurfs_monitor_v0.1.exe)

- [Tiny BLE MONITOR para Linux/Mac OS](https://github.com/Seeed-Studio/Tiny_BLE/tree/master/utils), requisito adicional: pyqtgraph

![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Ble_smurfs_monitor_preview.png)

### Actualizar o Restaurar Firmware

La última versión de firmware para el Arch BLE es v0221 compilada el 06 de febrero de 2015. Para verificar tu versión de firmware y fecha de compilación, abre el archivo MBED.HTM o DETAILS.TXT de tu disco MBED en un editor de texto.

Registro de cambios:

- 2015-02-07 corregir problema de Mac OS X 10.10

Firmware:

- [último firmware de interfaz v221 2015-02-06](https://github.com/Seeed-Studio/Tiny_BLE/raw/master/seeed_tiny_ble_interface_latest.bin)

### Over-The-Air

Personalizamos un bootloader DFU para que actualices tu aplicación a través de Over-The-Air (OTA). Está en [github.com/Seeed-Studio/nrf51_dfu_bootloader](https://github.com/Seeed-Studio/nrf51_dfu_bootloader). Ver también [mbed.org FOTA](https://developer.mbed.org/teams/Bluetooth-Low-Energy/wiki/Firmware-Over-the-Air-FOTA-Updates)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Tiny_BLE/res/BLE_Smurfs_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---
- [Archivo eagle de Tiny BLE V1.0](https://files.seeedstudio.com/wiki/Tiny_BLE/res/BLE_Smurfs_v1.0.zip)

- [Tiny BLE V1.0.pdf](https://files.seeedstudio.com/wiki/Tiny_BLE/res/BLE_Smurfs_v1.0_PDF.pdf)

- [Recursos en github](https://github.com/Seeed-Studio/Tiny_BLE)

- [parte de fritzing](https://github.com/Seeed-Studio/Tiny_BLE/blob/master/tiny_ble.fzpz)

- [librería MPU6050](http://developer.mbed.org/teams/Seeed/code/eMPL_MPU6050/)

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
