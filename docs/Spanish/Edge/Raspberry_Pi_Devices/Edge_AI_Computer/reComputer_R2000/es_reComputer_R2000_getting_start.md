---
description: La reComputer AI R2000® es una poderosa computadora diseñada para el cómputo Edge de Inteligencia Artificial (IA) basada en la Raspberry Pi 5. Cuenta un procesador quad-core ARM Cortex-A76, 8GB de memoria RAM, soporte para SSD M.2, y un módulo acelerador de IA Hailo-8 que provee hasta 26 TOPS de capacidad de cálculo. La R2000 permite ejecutar modelos de IA en tiempo real, a baja latencia y con gran eficiencia, siendo una opción perfecta para una amplia gama de aplicaciones de IA, incluyendo análisis de video mediante IA, visión por computadora, y cómputo Edge inteligente.
title: Introducción a la Serie R2000
keywords:
- Raspberry pi
- Edge AI Computer
- reComputer R2000
image: https://files.seeedstudio.com/wiki/recomputer-r2000-getting-start/1_24_1.webp
slug: /es/r2000_series_getting_start
last_update:
  date: 02/10/2025
  author: Erick González
---

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> ¡Consigue el Tuyo! 🖱️</font></span></strong>
    </a>
</div>

La reComputer AI R2000® es una poderosa computadora diseñada para el cómputo Edge de Inteligencia Artificial (IA) basada en la Raspberry Pi 5. Cuenta un procesador quad-core ARM Cortex-A76, 8GB de memoria RAM, soporte para SSD M.2, y un módulo acelerador de IA Hailo-8 que provee hasta 26 TOPS de capacidad de cálculo. La R2000 permite ejecutar modelos de IA en tiempo real, a baja latencia y con gran eficiencia, siendo una opción perfecta para una amplia gama de aplicaciones de IA, incluyendo análisis de video mediante IA, visión por computadora, y cómputo Edge inteligente.

## Características


- **Capacidades de Refrigeración Potentes**: Su diseño compacto y arquitectura térmica optimizada lo hacen altamente adecuado para su implementación en entornos con recursos limitados, proporcionando un excelente rendimiento de refrigeración.

- **Rendimiento Increíble**: Equipado con Raspberry Pi 5, con un CPU quad-core Cortex-A76 y hasta 8GB de RAM.

- **26 Tera-Operaciones por Segundo**: Impulsado por el acelerador de IA Hailo, ofreciendo una potencia de cómputo integrada de hasta 26 TOPS.

- **Conectividad Inalámbrica**: Wi-Fi de doble banda y Bluetooth 5.0/BLE.

- **Extensa Conectividad**: 2x HDMI 4Kp60, 1x puerto Ethernet, 2x USB 3.0, 2x USB 2.0.

- **Opciones de Almacenamiento Flexible**: La ranura PCIe 2.0 de doble M.2 admite tanto un acelerador de IA como almacenamiento SSD.


## **Especificaciones**  

| **Parámetros**        | **Descripción**                                                          |
|-----------------------|--------------------------------------------------------------------------|
| **Especificaciones de Hardware** |  |
| **CPU**                | Raspberry Pi 5, 2.4GHz, procesador de cuatro núcleos de 64 bits Arm Cortex-A76 |
| **GPU**                | Raspberry Pi 5, VideoCore VII                                           |
| **Procesador de IA**   | Módulo de Aceleración Hailo-8 M.2, 26 Teraoperaciones por segundo       |
| **RAM**                | 8GB SDRAM                                                               |
| **Sistema Operativo**  | Raspberry Pi OS, Ubuntu                                                |
| **Especificaciones del Sistema** |  |
| **Fuente de Alimentación** | Alimentación de 5V/5A CC a través de USB-C, compatible con Power Delivery |
| **Decodificador de Video** | Decodificador HEVC 4Kp60                                          |
| **Wi-Fi**              | Wi-Fi® de doble banda 802.11ac                                        |
| **Bluetooth**          | Bluetooth 5.0 / BLE                                                   |
| **Botón de Encendido** | Incluido (Encendido/Apagado)                                          |
| **Interfaz**          |  |
| **Almacenamiento**     | 1 ranura para tarjeta microSD, con soporte para modo SDR104 de alta velocidad |
| **Ranura M.2**        | 2 ranuras M.2, compatibles con SSD NVMe M.2 y módulo de aceleración Hailo M.2 |
| **Puertos USB**        | 2 × puertos USB 3.0                                                    |
|                        | 2 × puertos USB 2.0                                                   |
| **Ethernet**           | 1 × 10/100/1000 Mbps                                                  |
| **Cámara/Pantalla**    | 2 × transceptores MIPI de 4 carriles para cámara/pantalla            |
| **Salida de Video**    | 2 × puertos micro HDMI (4Kp60)                                        |
| **Condiciones Ambientales** |  |
| **Protección contra Ingreso de Polvo/Líquidos** | IP40                                        |
| **Temperatura de Funcionamiento** | 0-45°C                                                 |
| **Otros**             |  |
| **Garantía**           | 1 año                                                                 |
| **Vida Útil del Producto** | Hasta al menos enero de 2036                                    |
| **Certificación**      | CE, FCC, Telec, RoHS, REACH                                          |


## **Introducción a Hailo**  

### **Introducción al hardware**  

[Hailo](https://hailo.ai/) ofrece procesadores de **IA** de última generación, diseñados específicamente para aplicaciones de **aprendizaje profundo de alto rendimiento** en dispositivos **Edge**. Las soluciones de la compañía están enfocadas en habilitar la próxima era de **IA generativa en Edge**, junto con capacidades avanzadas de **percepción y mejora de video**, impulsadas por **aceleradores de IA y procesadores de visión**.  

El **reComputer_R2000**, equipado con el acelerador **NPU Hailo-8**, que proporciona **26 TOPs de rendimiento en IA**, es capaz de alcanzar más de **200 FPS con YOLOv8s**.  

### **Introducción al software**  

![](https://seeed-projects.github.io/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/assets/images/architecture-2bfc6ed440e1add56388738e87558050.png)

La **suite de software de IA de Hailo** proporciona herramientas potentes para ejecutar modelos de **IA** de manera eficiente en **aceleradores de hardware**. Está diseñada para integrarse sin problemas con los frameworks de **aprendizaje profundo existentes**, ofreciendo flujos de trabajo fluidos para los desarrolladores.  

El proceso implica la generación de un archivo **HEF (Hailo Executable Binary File)** a partir de un archivo **ONNX** dentro del **Model Build Environment**. Una vez creado, el archivo **HEF** se transfiere a la máquina de inferencia (**Runtime Environment**), donde se utiliza para ejecutar la inferencia mediante la API **HailoRT**.  

El **script** proporcionado facilita la conversión de un archivo **ONNX** a un archivo **HEF** dentro del **Model Build Environment**.  

> **Nota:**  
> **Si deseas conocer más sobre los ejemplos de uso del NPU Hailo, haz clic en este [enlace](https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero).**

## **Resumen del Hardware**  

![image1](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image3_1.jpeg)  
![image2](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image4_1.jpeg)  

---

## **Instalar el Sistema Operativo (Flash OS)**  

*Necesitas una tarjeta SD y un lector de tarjetas. Inserta la tarjeta SD en el lector y luego conecta el lector a la computadora anfitriona mediante un puerto USB.*  

### **Para computadoras con Windows**  

- **Paso 1.** Descarga el instalador de **rpiboot** haciendo clic **[aquí](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** para instalar los controladores necesarios y la herramienta de arranque.  

- **Paso 2.** Conecta la **reComputer R1000** a la PC mediante un cable **USB Tipo-C**.  

   - Windows detectará el hardware e instalará los controladores necesarios automáticamente.  

- **Paso 3.** Busca la herramienta **rpiboot** que instalaste previamente y ábrela.  

- **Paso 4.** Abre el **Explorador de archivos** y verifica que la **eMMC del Compute Module 4** aparezca como un **dispositivo de almacenamiento masivo USB**.  

- **Paso 5.** Descarga el software **Raspberry Pi Imager** desde **[aquí](https://www.raspberrypi.org/software/)**.  

- **Paso 6.** Abre el software **Raspberry Pi Imager**.  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>  

- **Paso 7.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones Avanzadas**.  

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>  

Aquí puedes **configurar el nombre del host, habilitar SSH, establecer una contraseña, configurar Wi-Fi, establecer la configuración regional** y más.  

:::note
El sistema tiene un nombre de usuario y contraseña preestablecidos. Configura el nombre de usuario predeterminado como "**recomputer**" y la contraseña como "**12345678**" al iniciar sesión.  
Si estableces credenciales diferentes y experimentas problemas, vuelve a **flashear el sistema operativo** si compraste una unidad de la primera producción de **reComputer R1000**.  
:::  


-- **Paso 8.** Haz clic en **CHOOSE OS** y selecciona tu sistema operativo preferido.  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>  

**NOTA:** Puedes seleccionar otros sistemas operativos, como **Ubuntu de 64 bits**, navegando hasta la opción **Other general purpose OS**.  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>  

También puedes utilizar este enlace para descargar directamente el archivo de imagen:  

[Ubuntu para Raspberry Pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)  

- **Paso 9.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad **eMMC** conectada.  

- **Paso 10.** Finalmente, haz clic en **WRITE**.  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>  

Espera unos minutos hasta que el proceso de escritura se complete.  

- **Paso 11.** Cambia el **interruptor de modo de arranque** (**Boot Mode switch**) de vuelta a la posición **Modo normal** (**Normal mode**).  

Ahora puedes saltar directamente a **[aquí](#install-drivers)**.  

### Para computadoras Mac

:::caution
**Necesitas instalar [Homebrew](https://brew.sh/) antes de proceder con los siguientes pasos.**  
Abre una terminal y escribe ```brew -V``` para verificar si tienes configurado correctamente el entorno de Homebrew. Deberías ver la versión instalada de Homebrew.
:::

- **Paso 1.** Clonar el repositorio **usbboot**  

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Paso 2.** Instalar **libusb**  

```sh
brew install libusb
```

- **Paso 3.** Instalar **pkg-config**  

```sh
brew install pkg-config
```

- **Paso 4.** Compilar usando `make`  

```sh
make
```

- **Paso 5.** Ejecutar el binario  

```sh
sudo ./rpiboot
```

- **Paso 6.** Conectar el **reComputer R1000** a la computadora Mac mediante un cable USB Tipo-C.

- **Paso 7.** Descargar e instalar la aplicación **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/).

- **Paso 8.** Abrir la aplicación **Raspberry Pi Imager**.

```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>
```

- **Paso 9.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones Avanzadas**.

```
<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>
```

Aquí puedes **configurar un nombre de host, habilitar SSH, establecer una contraseña, configurar Wi-Fi, ajustar la configuración regional** y más.

:::note
El sistema tiene preconfigurados un nombre de usuario y una contraseña. Por favor, establece el nombre de usuario predeterminado en "**recomputer**" y la contraseña en "**12345678**" al iniciar sesión.  
Si configuras credenciales diferentes y tienes problemas, por favor, vuelve a flashear el sistema operativo si compraste la primera tanda del **reComputer R1000**.
:::

- **Paso 10.** Haz clic en **CHOOSE OS** y selecciona tu sistema operativo preferido.

```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>
```

**NOTA:** Puedes seleccionar otros sistemas operativos, como **Ubuntu de 64 bits**, navegando hasta la opción **Other general purpose OS**.

```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>
```

O puedes utilizar este enlace para descargar el archivo de imagen:

[Ubuntu para Raspberry Pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 11.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada.

- **Paso 12.** Finalmente, haz clic en **WRITE**.

```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>
```

Por favor, espera unos minutos hasta que el proceso de flasheo se complete.

- **Paso 13.** Cambia el **interruptor de modo de arranque** de vuelta a la posición **Normal mode**.

Ahora puedes saltar a **[aquí](#install-drivers)**.

### Para computadoras con Linux

Usaremos Git para obtener el código fuente de **rpiboot**, así que asegúrate de que Git esté instalado.

- **Paso 1.** Abre una ventana de **Terminal** y escribe lo siguiente para actualizar la lista de paquetes:

```sh
sudo apt-get update
```

- **Paso 2.** Instala **Git** con el siguiente comando:

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **Paso 3.** Git podría generar un error si la fecha no está configurada correctamente. Escribe lo siguiente para corregirlo:

```sh
sudo date MMDDhhmm
```

**NOTA:** Donde **MM** es el mes, **DD** es el día, y **hh** y **mm** son las horas y minutos respectivamente.

- **Paso 4.** Clona el repositorio de la herramienta **usbboot**:

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Paso 5.** Compila e instala la herramienta usbboot:

```sh
make
```

- **Paso 6.** Conecta la reComputer R1000 a la PC mediante un cable USB Tipo-C.

- **Paso 7.** Ejecuta la herramienta usbboot, que esperará una conexión:

```sh
sudo ./rpiboot
```

El resultado se muestra a continuación:

```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>
```

- **Paso 8.** Descarga e instala **snap**:

```sh
sudo apt install snap
```

- **Paso 9.** Descarga e instala **rpi-imager**:

```sh
snap install rpi-imager
```

- **Paso 10.** Abre el software **Raspberry Pi Imager**.


```sh
rpi-imager
```

El resultado se muestra a continuación:

```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>
```

- **Paso 11.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones Avanzadas**.

Configura un **nombre de host**, establece una contraseña, configura WiFi y ajusta las configuraciones regionales.

```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>
```

Habilita SSH:

```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>
```

Aquí puedes **configurar un nombre de host, habilitar SSH, establecer una contraseña, configurar WiFi, ajustar configuraciones de idioma** y más.

:::note
El sistema tiene preestablecidos un nombre de usuario y una contraseña. Por favor, usa "**recomputer**" como nombre de usuario y "**12345678**" como contraseña al iniciar sesión.  
Si estableces credenciales diferentes y encuentras problemas, por favor, vuelve a flashear el sistema operativo si compraste la primera tanda del reComputer R1000.
:::

- **Paso 12.** Haz clic en **CHOOSE OS** y selecciona tu sistema operativo preferido.

```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>
```

<!-- 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> 
-->

**NOTA:** Puedes seleccionar otros sistemas operativos como **Ubuntu de 64 bits** navegando en **Other general purpose OS**.

```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>
```

También puedes usar este enlace para descargar la imagen del sistema:

[Ubuntu para Raspberry Pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 13.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada.

- **Paso 14.** Finalmente, haz clic en **NEXT** y luego en **YES**.

```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>
```

Por favor, espera unos minutos hasta que el proceso de flasheo se complete.

El resultado se muestra a continuación:

```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>
```

## Arranque desde NVME

### Actualizar EEPROM

*Este método funciona si tienes una tarjeta SD y has iniciado correctamente el dispositivo.  
Por favor, asegúrate de que tu sistema es la versión más reciente de Raspberry Pi (Bookworm o posterior) y que el firmware de tu RPi 5 está actualizado al 06/12/2023 o más reciente,  
de lo contrario, es posible que no reconozca las configuraciones relacionadas con NVME.*

### **Paso 1**: Asegúrate de que tu sistema Raspberry Pi está actualizado (Bookworm o posterior).  
Ejecuta el siguiente comando para actualizar el firmware de la RPi 5:

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # Si no está actualizado después de diciembre de 2023, usa este comando para iniciar la herramienta de configuración
  sudo raspi-config
```

Desplázate hacia abajo hasta `Advanced Options` y presiona **Enter**:

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>
```

Desplázate hasta `Bootloader Version` y presiona **Enter**:

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>
```

Finalmente, elige `Latest` y presiona **Enter**:

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>
```

Selecciona `No` aquí - quieres el **bootloader más reciente**.

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>
```

Sal de la herramienta seleccionando `Finish`:

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>
```

Si se te solicita reiniciar, selecciona `Yes`:

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>
```

### **Paso 2**: Copiar el sistema operativo al SSD NVME

Haz clic en **Aplicaciones** => **Accesorios** => **SD Card Copier** en la pantalla principal,  
ejecuta el programa **SD Card Copier** y copia el sistema operativo al SSD NVME, como se muestra en la imagen:

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>
```


### Configurar la Raspberry Pi para arrancar desde el SSD NVMe

Si tienes fácil acceso a la ranura de la tarjeta SD, puedes apagar tu Raspberry Pi, extraer la tarjeta SD y (si todo funciona como se espera)  
debería arrancar automáticamente desde tu unidad NVMe la próxima vez que la enciendas.  

Si deseas dejar la tarjeta SD en su lugar y aun así arrancar desde NVMe, necesitarás cambiar el orden de arranque.

### **Paso 1**: Ingresa el siguiente comando:

```shell
  sudo raspi-config
```

Desplázate hasta `Advanced Options` y presiona **Enter**:

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="700" height="auto" /></div>
```

### **Paso 2**: Desplázate hasta `Boot Order` y presiona **Enter**:

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="700" height="auto" /></div>
```

### **Paso 3**: Elige `NVMe/USB Boot` y presiona **Enter**:

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="700" height="auto" /></div>
```

Se confirmará la configuración. Presiona **Enter**:

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="700" height="auto" /></div>
```

### **Paso 4**: Regresa a la pantalla principal seleccionando `Back` o presionando la tecla **Esc**. Luego, navega hasta `Finish` usando la tecla de cursor derecha.

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>
```

Se te preguntará si deseas reiniciar ahora. Haz clic en `Yes`:

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>
```

---

## Flashear Ubuntu en NVME

### **Primero: Actualizar EEPROM con una tarjeta SD**

Consulta este [enlace](https://wiki.seeedstudio.com/r2000_series_getting_start/#update-eeprom) para más detalles.

Para establecer el arranque desde NVMe como la **máxima prioridad**, usa el siguiente comando:

```shell
sudo rpi-eeprom-config --edit
```

Luego, edita la configuración de `rpi-eeprom-config` como se muestra a continuación:

```shell
BOOT_UART=1
BOOT_ORDER=0xf461
NET_INSTALL_AT_POWER_ON=1
PCIE_PROBE=1
```

Presiona `Ctrl+X`, ingresa `y` y presiona **Enter** para guardar los cambios.  

El resultado se verá así:

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/chang_eeprom.png" alt="pir" width="700" height="auto" /></div>
```

### Segundo: Grabar Ubuntu en el NVMe

Abre Raspberry Pi Imager:

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="700" height="auto" /></div>
```

Selecciona el sistema operativo **Ubuntu**:

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="700" height="auto" /></div>
```

Finalmente, haz clic en `Next` y espera a que el proceso de flasheo se complete.

---

### Tercero: Reemplazar el archivo del sistema operativo

Instala `pcie-fix.dtbo` desde este [enlace](https://files.seeedstudio.com/wiki/reComputer-R2000/pcie-fix.dtbo).

Copia el archivo `pcie-fix.dtbo` en la carpeta `/overlays` como se muestra a continuación:

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file1.png" alt="pir" width="700" height="auto" /></div>
```

Modifica el archivo `config.txt`, añadiendo `dtoverlay=pcie-fix` al final del archivo, como se muestra aquí:

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file2.png" alt="pir" width="700" height="auto" /></div>
```

Luego, presiona `Ctrl+X`, ingresa `y` y presiona **Enter** para guardar el archivo.

---

## Consumo de energía y temperatura

⚠️ **Nota:** El estado de espera se probó bajo las siguientes condiciones:  
la interfaz gráfica estaba deshabilitada, el Bluetooth estaba apagado y el Wi-Fi estaba deshabilitado.  
Los comandos utilizados fueron los siguientes:

```shell
sudo ifconfig wlan0 down
sudo systemctl stop bluetooth
sudo systemctl stop lightdm
```

| **Condición**         | **Consumo de energía** | **Temperatura**           |
|----------------------|----------------------|--------------------------|
| **En espera**        | 5.9W                 | CPU: 46°C                |
| **Operación normal** | 6.3W                 | CPU: 53°C                |
| **Carga máxima**     | 16.2W                | CPU: 75°C, Hailo-8: 81°C |


## Aplicaciones

### Frigate

Frigate es un NVR (Grabador de Video en Red) de código abierto diseñado para la detección de objetos en tiempo real utilizando Inteligencia Artificial. Se integra con cámaras existentes y emplea modelos de aprendizaje automático, como TensorFlow y Coral, para realizar detección de objetos en transmisiones de video. Frigate está optimizado para el procesamiento de video con baja latencia y alto rendimiento, ofreciendo funciones como detección de movimiento, transmisión de video en vivo y alertas automatizadas.

<iframe width="800" height="500" src="https://www.youtube.com/embed/thmI3dz9Ugs" title="Vigilancia con IA de bajo costo: Frigate en Raspberry Pi 5 con Hailo8 en PCIe3.0 a Dual M.2 hat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> **Nota:**
> **Si deseas obtener más información sobre este proyecto, consulta este [enlace](https://wiki.seeedstudio.com/frigate_nvr_with_raspberrypi_5/).**

---

### YOLO

La serie de modelos **YOLO (You Only Look Once)** son una familia de modelos de detección de objetos en tiempo real diseñados para ofrecer velocidad y precisión. A diferencia de los métodos tradicionales de detección de objetos, que realizan la propuesta de regiones y la clasificación por separado, YOLO realiza ambas tareas en un único paso de la red neuronal, lo que lo hace mucho más rápido. Los modelos YOLO dividen la imagen en una cuadrícula y predicen cuadros delimitadores y probabilidades de clase para cada celda. 

Con el paso del tiempo, YOLO ha evolucionado a través de diversas versiones, con mejoras en precisión, velocidad y capacidad para detectar objetos más pequeños. Modelos como YOLOv4, YOLOv5 y las versiones más recientes YOLOv7 y YOLOv8 se utilizan ampliamente en aplicaciones como vigilancia, vehículos autónomos y robótica.

<iframe width="800" height="500" src="https://www.youtube.com/embed/olaSVKmt9YI" title="Inteligencia Artificial en Raspberry Pi: Detección de objetos con YOLOv8 - Entrada de video a 240fps, comparación entre Pi 5 PCIe Gen2 y Gen3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> **Nota:**
> **Si deseas obtener más información sobre este proyecto, consulta este [enlace](https://wiki.seeedstudio.com/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/).**

---

### CLIP

**CLIP (Contrastive Language-Image Pretraining)** es un modelo de aprendizaje automático desarrollado por OpenAI que puede comprender imágenes y texto en conjunto. Está entrenado para asociar imágenes con descripciones textuales correspondientes, lo que le permite realizar tareas que involucran ambas modalidades. 

CLIP es capaz de aprendizaje sin necesidad de entrenamiento específico (**zero-shot learning**), lo que significa que puede reconocer objetos y conceptos en imágenes sin haber sido entrenado explícitamente en esas categorías. Ha demostrado un sólido desempeño en diversas tareas, como clasificación de imágenes, detección de objetos e incluso generación de descripciones textuales de imágenes.

<iframe width="800" height="500" src="https://www.youtube.com/embed/JMHtqSmAGCA" title="Clasificación CLIP Zero Shot en Raspberry Pi 5 con el acelerador de IA Hailo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> **Nota:**
> **Si deseas obtener más información sobre este proyecto, consulta este [enlace](https://wiki.seeedstudio.com/clip_application_on_rpi5_with_ai_kit/).**

## Soporte Técnico y Discusión

¡Gracias por elegir nuestros productos! Estamos pendientes para proveerte de nuestra ayuda y soporte para asegurar que tu experiencia con nuestros productos sea tan buena como sea posible. Te ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
