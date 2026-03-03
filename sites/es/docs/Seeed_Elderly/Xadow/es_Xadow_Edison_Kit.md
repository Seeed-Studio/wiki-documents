---
description: Xadow - Edison Kit
title: Xadow - Edison Kit
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Edison_Kit
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/110040001%201.jpg)

El Xadow - Edison Kit está basado en el Intel® Edison que está diseñado para reducir las barreras de entrada para cualquier persona que esté prototipando y produciendo productos de IoT y computación wearable. Cuenta con alto rendimiento y bajo consumo de energía, lo que hace que tu proyecto sea pequeño y portátil, especialmente adecuado para proyectos wearables. El Xadow - Edison Kit incluye una placa principal Xadow - Edison que contiene dos interfaces compatibles con Xadow, una interfaz SD, una interfaz de Programador y una interfaz de Batería, un Xadow - Edison Programmer, Xadow - Edison SD. Con Xadow - Edison podrás usar muchos módulos Xadow a través de la interfaz estándar Xadow.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Edison-Kit-p-2444.html)

## Características
---
- Diseño para Intel® Edison.
- Alimentación USB (4.75~5.25V).
- Interfaces compatibles con Xadow.
- Conector de tarjeta SD.
- Puente UART USB a dispositivo con conector USB micro Tipo-B.
- USB OTG con conector USB Micro Tipo-AB.
- Cargador de batería.
- Entrada de botón de encendido/suspensión/recuperación de firmware

## Especificaciones
---
- Alimentación USB: 4.75V ~ 5.25V
- 2 interfaces estándar Xadow
- 1 conector de tarjeta SD.
- 1 conector USB micro Tipo-B
- 1 conector USB Micro Tipo-AB
- 1 interfaz de batería
- 1 botón para Encendido/suspensión; 1 botón para recuperación de firmware
- Dimensiones 30.0 × 40.0 × 7.0 mm
- Temperatura de funcionamiento 32 a 104°F (0 a 40°C)


## Diagrama de Bloques
---
Usando cables FFC realiza las siguientes conexiones:

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Connection.png)

:::note
    Al conectar otros módulos Xadow al Xadow - Edison, debes preocuparte por la dirección de conexión. El método de conexión es que la esquina no rellena de un módulo xadow necesita conectarse al ángulo recto de otro módulo (ver las cuatro esquinas de cada módulo xadow).
:::
## Instalando Edison Arduino IDE
---

Consulta el sitio oficial de Intel Edison: Edison [Guía de Inicio](https://software.intel.com/en-us/get-started-edison-windows)

1. Descarga el Edison Arduino IDE.(Nota: Selecciona tu SO.)

2. Navega a la carpeta donde descargaste el archivo .zip Edison Arduino IDE

3. Haz clic derecho en el archivo .7z, resalta "7-zip", y selecciona "Extract to "arduino-…"

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/IndoorKit_Extract_7z.png)

4. Haz clic a través de la carpeta que se creó hasta que veas el archivo IDE "arduino.exe". Haz doble clic en este archivo y esta ventana debería abrirse.

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/IndoorKit_ArduinoIDE.png)

## Instalar controladores requeridos
---
1. Descarga [controladores FTDI](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/CDM%20v2.10.00%20WHQL%20Certified.exe).
2. Haz clic derecho en el archivo .exe que descargaste, que debería llamarse "CDM…" y selecciona "Ejecutar como administrador".

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Edison_FTDI_Driver.jpg)

3. Haz clic en "Extract".

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Edison_FTDI_Driver_Install.jpg)

4. Haz clic en "Next".
5. Haz clic en "Finish" cuando veas esta pantalla.

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Edison_FTDI_Driver_Install_ok.jpg)

6. Descarga [Controladores Intel Edison](https://downloadcenter.intel.com/product/83267) para instalar los controladores RNDIS, CDC y DFU requeridos.
7. Haz doble clic en el archivo .exe para comenzar la instalación.

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Intel_Edison_Driver.jpg)

## Ejemplo
---
1. Abre el sitio web: [Xadow_Edison_Demos](https://github.com/Seeed-Studio/Xadow_Edison_Demos) para descargar todo el proyecto.

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Github_Xadow_Edison_Demos.png)

2. Haz clic en Tools > Serial Port y selecciona el Com # al que está conectado el Intel Edison

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Import_Indoor_Kit_Demo.png)

3. Haz clic en Sketch>Import Library…>Add Library e importa la biblioteca descargada en el paso 1

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Add_Library.png)

4. Haz clic en File > Examples > Xadow_Edison_Demos > Edison_Pedometer_with_OLED y selecciona la demostración

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Select_Pedometer_Demo.png)

5. Usando cables FFC realiza las siguientes conexiones:

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Pedometer.jpg)

6. Haz clic en el icono de subir.

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_upload.png)


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edision_Programmer_v1.0_sch%26pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Edison Getting Started Guide](https://software.intel.com/en-us/get-started-edison-windows)
- [Xadow_Edison_Demos](https://github.com/Seeed-Studio/Xadow_Edison_Demos)
- [Xadow-Edison_sch_v1.0.pdf](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow-Edison_sch_v1.0.pdf)
- [Xadow - Edison Design Files v1.0](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow-Edison_v1.0_sch%26pcb.zip)
- [Xadow - Edision Programmer sch v1.0.pdf](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edision_Programmer_sch_v1.0.pdf)
- [Xadow - Edision Programmer Design Files v1.0](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edision_Programmer_v1.0_sch%26pcb.zip)
- [Xadow - Edison_SD_sch_v1.0.pdf](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edison_SD_sch_v1.0.pdf)
- [Xadow - Edison_SD Design Files v1.0](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edison_SD_v1.0_sch%26pcb.zip)

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
