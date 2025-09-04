---
description: ODYSSEY - X86J4105
title: Primeros Pasos con ODYSSEY
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ODYSSEY_Getting_Started
last_update:
  date: 01/03/2023
  author: w0x7ce

---

Por favor, consulta la versión más reciente: https://wiki.seeedstudio.com/es/ODYSSEY-X86J4105/

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/es/ODYSSEY-X86J4105/
sku: 102110399
--- -->

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ODYSSEY-X86J4105-side.png)

El ODYSSEY - X86J4105, está basado en Intel Celeron J4105, una CPU de cuatro núcleos de 1.5GHz que alcanza hasta 2.5GHz. Tiene todas las excelentes características que una computadora estándar necesita, incluyendo 8GB de RAM LPDDR4, 64GB de almacenamiento eMMC (opcional), Wi-Fi/BLE integrado, puertos Ethernet Gigabit duales, entrada y salida de audio, puertos USB, HDMI, conectores SATA, PCIe, etc.

## Características Principales

- Intel® Celeron® J4105, Cuatro núcleos 1.5-2.5GHZ
- WiFi de frecuencia dual 2.5GHz/5GHz/ Bluetooth 5.0
- Intel® UHD Graphics 600
- Ethernet Gigabit dual
- Coprocesador Arduino integrado ATSAMD21 ARM® Cortex®-M0+
- Compatible con 40 pines de Raspberry Pi
- 2 x M.2 PCIe (Clave B y Clave M)
- Preinstalado con Windows 10 Enterprise
- Compatible con el ecosistema Grove

<p style={{}}><a href="https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Especificaciones de Hardware

| Componentes      | ODYSSEY - X86J4105                                                                                                                                      |
|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Procesador       | Intel® Celeron® J4105 (Frecuencia: 1.5 - 2.5GHz)                                                                                                   |
| Coprocesador     | Microchip® ATSAMD21G18 32-Bit ARM® Cortex® M0+                                                                                                        |
| Gráficos         | Intel® UHD Graphics 600 (Frecuencia: 250 – 750MHz)                                                                                                    |
| Memoria          | LPDDR4 8GB                                                                                                                                              |
| Almacenamiento   | 64GB eMMC V5.1                                                                                                                                         |
| Inalámbrico      | Wi-Fi 802.11 a/b/g/n/ac @ 2.4/5 GHz HT160 & Bluetooth® 5.0                                                                                          |
| Red              | Intel® I211AT PCIe Gigabit LAN                                                                                                                          |
| Audio            | Conector combinado de micrófono + auriculares                                                                                                          |
| Conectores       | Conector de 28 pines del SAMD21G18 & conector de 40 pines compatible con Raspberry Pi                                                                 |
| USB              | USB 2.0 Tipo-A x2, USB 3.1 Tipo-A x1, USB 3.1 Tipo-C x1                                                                                           |
| Interfaces de Video | HDMI2.0a: Hasta 4096x2160 @ 60Hz 24bpp / DP1.2a: Hasta 4096x2160 @60Hz 24bpp                                                                                                                                                                 |
| Ranuras de Expansión  | M.2(Clave B, 2242/2280): SATA III, USB2.0, UIM; M.2 (Clave M, 2242/2280): PCIe 2.0 ×4; Socket de tarjeta Micro SD; Socket de tarjeta SIM; SATA III           |
| RTC              | JST 1.0 CR2032 3V                                                                                                                                      |
| TPM              | TPM integrado (2.0)                                                                                                                                  |
| Conector de Alimentación           |Conector DC 5.5/2.1mm o Tipo-C PD                                                                 |
|Fuente de Alimentación (para placa desnuda)| <div >Entrada DC Jack: Mín:12V @ 300mA - 1.2A, Máx:19V @ 200mA - 0.7A <br />Entrada Type-C: Mín: 15V @ 0.27A, Máx:15V @ 0.93A </div>
|
| Dimensiones       | 110x110mm                                                                                                                                               |
| Certificaciones   | FCC, CE                                                                                                                                                 |

!!!Note
        Si estás usando unidades HDD de 3.5 pulgadas con el ODYSSEY – X86J4105, asegúrate de usar una fuente de alimentación DC de 12V@2A o una fuente de alimentación Type-C de 15V@2A.

!!!Note
        Puedes alimentar el X86 usando un power bank, pero necesitas asegurarte de usar un power bank con protocolo USB PD y conectar vía USB C. Además, puedes cambiar sin problemas entre alimentación USB C y alimentación DC sin inconvenientes.

## Descripción General del Hardware

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-08-n.png)

## Diagrama de Pines

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-Pinout.png)

## Inicio Rápido con ODYSSEY - X86J4105

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Connected.png)

### Hardware Requerido

1. ODYSSEY - X86J4105

2. Adaptador de Corriente(incluido)

3. Monitor externo

4. Cable HDMI

5. Teclado y Ratón

### Conectar Almacenamiento Externo

Para la versión de almacenamiento EMMC de 64 GB del ODYSSEY - X86J4105, puedes omitir este paso. Sin embargo, si necesitas más almacenamiento para tus necesidades, siéntete libre de seguir este paso.

Hay 4 métodos para agregar almacenamiento al ODYSSEY - X86J4105, pero solo 3 métodos soportan la instalación del sistema operativo(M.2 SATA, M.2 PCIE y SATA), y la ranura de tarjeta Micro SD solo puede usarse como almacenamiento externo.

- **Método 1 - Conector M.2 PCIE**

- **Método 2 - Conector M.2 SATA**

- **Método 3 - Conector SATA**

- **Método 4 - Ranura de Tarjeta Micro SD**

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Storage.png)

### Instalación del Sistema Operativo

ODYSSEY - X86J4105 soporta tanto sistemas operativos Windows como Linux.

- Para la versión sin EMMC, conecta almacenamiento externo siguiendo los pasos anteriores, e instala tu sistema operativo deseado a través de una unidad USB booteable.

- Para la versión EMMC, Windows 10 Enterprise viene preinstalado.

#### Paso 1

Conecta la unidad USB booteable en uno de los puertos USB del ODYSSEY - X86J4105.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/USB.png)

**Nota:** por favor visita Crear USB Booteable e Instalar SO para más información sobre crear una Unidad USB Booteable.

#### Paso 2

Presiona el botón de encendido y mantén presionada la tecla **F7** en el teclado hasta que aparezca la pantalla del Administrador de Arranque.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/F7.jpg)

#### Paso 3

Selecciona la Unidad USB conectada como la primera unidad de arranque y presiona Enter.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/boot.png)

#### Paso 4

Sigue las instrucciones de la instalación para completar la instalación del sistema operativo.

**Nota:** Para acceder a la configuración del BIOS, mantén presionada la tecla **DEL** al arrancar.

### Conectar Antenas

Conecta dos antenas en los dos conectores de la placa.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/WiFi.png)

Nota: Una Antena es para Wi-Fi y Bluetooth, y la otra es para conectividad 5G fuerte.

### Agregar Conectividad Celular 4G

Para conectividad Celular 4G, inserta una tarjeta SIM estándar en la ranura de tarjeta SIM de la placa.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Sim.png)

#### Insertar un Módulo PCIE 4G

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/4g.png)

**Nota:** Este módulo es indispensable si quieres usar la Tarjeta SIM conectada.

### Conectar a Pantalla

Hay 2 métodos para pantalla:

#### Método 1 - Puerto HDMI

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/hdmi.png)

#### Método 2 - DP sobre Puerto USB-C

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/typec.png)

### Conectar Teclado y Ratón

Conecta Teclado y Ratón a través de puertos USB

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/keyboard.png)

## Encendido

Hay dos formas de encender el ODYSSEY - X86J4105:

### Método 1

La forma más sencilla es usar el adaptador de corriente de 12V/2A incluido en el paquete, y conectarlo al conector DC del ODYSSEY - X86J4105.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/power.png)

### Método 2

También puedes encender el ODYSSEY - X86J4105 a través del puerto USB-C con entrada de 12V. Además, si tu monitor soporta USB-PD, ¡puedes encender y mostrar el ODYSSEY - X86J4105 usando solo 1 cable!

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/typec.png)

## Estadísticas de Rendimiento

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/CPU.png)

### Conectividad Wi-Fi

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Stats.png)

### Conectividad Bluetooth

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Bluetooth.png)

## Funcionando como Computadora

- Navegando y viendo videos en Youtube

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/YouTube%20-%20Google%20Chrome%202019-12-04%2017-05-19.2019-12-05%2009_33_09.gif)

- ¡Jugando Google T-Rex!

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/T-Rex%20Run!%20-%20Chrome%20Dinosaur%20Game%20-%20Google%20Chrome%202019-12-04%2017-01-42.2019-12-05%2009_38_40.gif)

## Usando el Arduino Core (ATSAMD21G18) en Windows

El ODYSSEY - X86J4105 está construido con Arduino Core(ATSAMD21G18) que proporciona más funcionalidad a la placa, y para usarlo, simplemente descarga el [Arduino IDE](https://www.arduino.cc/en/main/software), e instala la versión de Windows.

1. Haz clic en `File`->`Preferences`->`Additional Boards Manager URL:` y copia el siguiente enlace en él `https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json`.

2. Haz clic en `Tools`->`Board:`->`Boards Manager...`, y aparecerá el Boards Manager. Busca e instala la librería de placa **`Seeeduino Zero`**.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ArduinoBoard.png)

3. Selecciona el Puerto y la Placa correctos antes de subir.

- `Port` -> `COMxx(Seeeduno Zero)`

- `Board` -> `Seeeduino Zero`

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ArduinoPort.png)

¡Siéntete libre de explorar tu creatividad con ODYSSEY - X86J4105!

## Usando el Arduino Core (ATSAMD21G18) en Linux OS

Si has instalado Linux OS, descarga la versión de Linux del [Arduino IDE](https://www.arduino.cc/en/main/software) e instala el IDE como sigue:

### Instalando Arduino IDE

1. Abre la terminal y ve a Descargas

```sh
cd ~/Downloads
```

2. Usa el comando tar para descomprimir el archivo descargado

```sh
tar -xvf arduino -1.8.10-linux64.tar.xz
```

3. Mover el archivo a opt

```sh
sudo mv arduino-1.8.10 /opt
```

4. Instalar Arduino IDE y crear un acceso directo en el escritorio

```sh
cd /opt/arduino-1.8.10/ && chmod +x install.sh && ./install.sh
```

5. Permitir permisos para que Arduino cargue

```sh
cd /opt/arduino-1.8.10 && ./arduino-linux-setup.sh
```

### Instalación de Librerías de Placa

1. Haz clic en `File`->`Preferences`->`Additional Boards Manager URL:` y copia el siguiente enlace en él `https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json`.

2. Haz clic en `Tools`->`Board:`->`Boards Manager...`, y aparecerá el Administrador de Placas. Busca e instala la librería de placa **`Seeeduino Zero`**.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/LinuxBoard.png)

3. Selecciona el Puerto y la Placa correctos antes de cargar.

- `Port` -> `ttyACM0(Seeeduno Zero)`

- `Board` -> `Seeeduino Zero`

## Preguntas Frecuentes

### ¿Cómo puedo acceder a la configuración del BIOS?

Presiona el Botón de Encendido y mantén presionada la tecla DEL hasta que veas la Configuración del BIOS.

### Arduino IDE no reconoce el microcontrolador integrado

Añade un cable puente entre el **Pin RST** y el **Pin GND** en el conector de 4 pines (a la izquierda de los 28 pines de SAMD21) para reiniciar el AMSAMDG21.

### No puedo conectar Wi-Fi y Bluetooth

Verifica la configuración del BIOS y habilita Wi-Fi y Bluetooth desde el BIOS

### ODYSSEY - X86J4105 no enciende

Asegúrate de usar el adaptador de corriente de 12V/2A proporcionado en la caja y verifica la conexión.

### Diferentes estados del botón de encendido de ODYSSEY - X86J4105

Tiene el mismo estado del botón de encendido que otras computadoras:

- `Presión Corta(Mientras está apagado)` -> `Encender`

- `Presión Corta(Mientras está encendido)` -> `Suspender`

- `Presión Larga(Mientras está encendido)` -> `Apagado forzado`

### ¿Es controlable el ventilador integrado?

Actualmente el ventilador es controlado por el BIOS, y no es controlado por el usuario. La velocidad del ventilador se establece según la temperatura de la CPU. Verifica `Chipset` -> `FAN Contorl` en la pantalla de configuración del BIOS para más información.

### Cómo actualizar el BIOS

Para las instrucciones de actualización del BIOS, por favor verifica la sección de Instalación de SO.

### Cómo configurar el ODYSSEY - X86J4105 para encendido automático cuando se conecta la alimentación

Esto también necesita ser configurado en el BIOS. Ingresa a la configuración del BIOS presionando la tecla DEL. Navega a **Chipset** -> **Restore on AC Power Loss** y cambia la configuración a **Last State**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Auto-power.png" /></div>

### El ventilador no enciende

El ventilador de Odyssey es controlado por el Controlador Embebido (EC) que tiene el rol de inicializar el dispositivo antes de que el sistema arranque. La temperatura en el BIOS es detectada por el EC y el sensor de temperatura se coloca cerca de la CPU Intel que no tiene el pin del sensor. En otras palabras, la temperatura no es el valor directo de la CPU, tal vez 5 grados centígrados de error. Lo que viste del valor de temperatura en el sistema es retroalimentación del interno de la CPU, la temperatura en la pantalla del BIOS es retroalimentación del EC, el ventilador funciona o se detiene según el valor del EC.

- El valor detectado por EC (pantalla del BIOS) y la tabla de velocidad del ventilador es así:

**Estado de ventilador deshabilitado**: parar

**Estado de ventilador normal**: menos de 40°C–parar，45-50°C–50%，50-60℃–60%，arriba de 60℃–80%

**Estado de ventilador positivo**: menos de 40°C–parar，45-50°C–70%，50-60℃–80%，arriba de 60℃–100%

### Pinout del Ventilador

Algunos de ustedes pueden necesitar conocer el pinout del ventilador PWM de 5V para hacer DIY/reemplazar con sus propios ventiladores. Odyssey tiene un pin PWM de 5V para el ventilador con un conector más pequeño que el conector de pin de 5V usual. Puede que necesites reemplazar el conector para que encaje.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/x86-fan.png" /></div>

### Re-Instalación del Windows Original

Las versiones eMMC de ODYSSEY-X86 tendrán Windows 10 pre-instalado en el dispositivo. Si instalas otro SO y quieres volver al Windows 10 original por favor verifica aquí:

- [**Imagen Original de Windows 10**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Ant-image/SD-JX-CJ41G-M-101-H.zip)

  - Esta imagen soporta **Auto Flash**. Simplemente descarga la imagen de arriba y descomprime los archivos y colócalos en la **ubicación raíz de una unidad USB**.

  - Conecta la unidad USB a ODYSSEY-X86 y arranca desde la Unidad USB. Esto flasheará automáticamente la Imagen Original de Windows 10 de vuelta en el eMMC.

### ¿Tiene Odyssey TPM?

Odyssey tiene FTPM integrado en el procesador.

### ¿Tiene la placa Odyssey Boot Guard para Arranque Seguro?

Sí, puedes habilitar la opción "Security Boot" en el BIOS. Cuando esto está habilitado, el BIOS deshabilitará el arranque desde dispositivos no autenticados.

### ¿Por qué GPIO sigue funcionando después de que Odyssey se apaga?

Para configurar esto, necesitas [actualizar al último BIOS](https://wiki.seeedstudio.com/es/ODYSSEY-X86J4105-Updating-Firmware/) que proporcionamos. En el último BIOS, puedes cambiar habilitar a deshabilitar aquí para apagar tanto GPIO como ODYSSEY.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105/OdysseyFAQ1.png)

## Recursos

- **[ZIP]** [Modelo 3D ODYSSEY-X86J4105](http://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-3D-Model.zip)

- **[PDF]** [Modelo 2D ODYSSEY-X86J4105](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-2D.pdf)

- **[DXF]** [Modelo 2D ODYSSEY-X86J4105](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-2D.dxf)

- **[PDF]** [Hoja de datos Atmel-SAMD21](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/Atmel-SAMD21-datasheet.pdf)

- **[PDF]** [Manual de Usuario ODYSSEY-X86](https://files.seeedstudio.com/products/102110399/Documents/ODYSSEY-X86%20User-Manual-v1.1.pdf)

- **[ZIP]** [Paquete de Controladores Windows 10 para ODYSSEY-X86](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-WIndows-Drivers.zip)

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
