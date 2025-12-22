---
description: Esta es la descripción general de características, especificaciones, interfaz de hardware y lista de componentes.
title: Hardware y Especificaciones
keywords:
  - Edge
  - reCamera
  - reCamera HQ POE
  - POE
  - HQ
  - M12
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /es/recamera_hq_poe_hardware
sidebar_position: 2
last_update:
  date: 09/25/2025
  author: Parker Hu
---

# Descripción General de reCamera HQ POE

reCamera 2002 HQ PoE está equipada con un sensor CMOS avanzado para imágenes más nítidas y claras. Tiene una montura de lente M12—flexible para reemplazar la lente predeterminada con cualquier lente M12 de 2MP compatible. También soporta PoE (Power over Ethernet): no necesita alimentación USB/DC separada, solo un cable Ethernet a un switch PoE para energía y datos.


## Características

- Alta Calidad: Equipada con un sensor CMOS GC2053 de 1/2.9 pulgadas, proporcionando calidad de imagen superior.
- Montura de Lente M12: FOV predeterminado de 90°, fácilmente reemplazable con cualquier lente M12 estándar.
- Ethernet con PoE (Power over Ethernet): Soporta datos y energía sobre un solo cable, solo Modo A PoE.
- Extensión IO/UART: Conector de 6 pines con 1×UART y 3×GPIO.

## Especificaciones

### Sistema de Procesamiento

| **Parámetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **SOC**                | SG2002                                                                    |
| **CPU**                | C906@1GHz + C906@700MHz                                                  |
| **Rendimiento AI**     | 1 Tops @ Int8                                                            |
| **MCU**                | 8051 @ 8KB SRAM                                                          |
| **Sistema Operativo**   | Linux                                                                     |
| **Memoria**             | 256 MB                                                                  |
| **Codificador de Video**      | 5MP @ 30Fps                                                              |



| Sensor                | GC2053                             |
| --------------------- | ---------------------------------- |
| Formato Óptico        | 1/2.9inch                          |
| Resolución            | 1920x1080                          |
| Velocidad de Fotogramas Máx        | 30fps@tamaño completo                    |
| montura de lente            | M12                                |
| FOV                   | 93°                                |
| Ethernet              | 100Mbps con PoE                   |
| USB                   | USB Type-C(2.0)                    |
| Dimensión             | 40x40x45.8mm40x40x53.1mm con lente |
| Temperatura de Operación | -20～50°C                          |
| Humedad de Operación    | 95%                                |


### [Placa Principal-C101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#core-board)
<!-- 搬运github说明和图 -->
| Placa         | Características                           | Versión |
| ------------- | ---------------------------------- | ------------ |
| C1_2002w    | - eMMC <br /> - Módulo WiFi/BLE <br /> - Antena integrada <br /> - Conector de antena externa| 1.2 |
| C1_2002       | - eMMC <br /> - SDIO adicional a placa base <br /> - UART adicional a placa base | 1.2 |

Vista Superior             |  Vista Inferior
:-------------------------:|:-------------------------:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

### [Placa de Sensor-S4_GC2053](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#sensor-board)


Vista Superior             |  Vista Inferior
:-------------------------:|:-------------------------:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/GC2053_top2.png" /></div> |<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/GC2053_bottom2.png" /></div>

#### ⚙️ características

<div>
  <table>
    <tbody>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Sensor</td>
        <td className="dbon">GC2053</td>
        <td style={{ fontWeight: 'bold' }}>Tamaño CMOS</td>
        <td className="dbon">1/2.9"</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Píxeles</td>
        <td className="dbon">2MP</td>
        <td style={{ fontWeight: 'bold' }}>Apertura</td>
        <td className="dbon">F2.8</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Distancia Focal</td>
        <td className="dbon">2.9mm ±0.5%</td>
        <td style={{ fontWeight: 'bold' }}>Campo de Visión</td>
        <td>DFOV 93°   HFOV 84°  VFOV 54°</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Distorsión</td>
        <td>0.5 %</td>
        <td style={{ fontWeight: 'bold' }}>Iluminación Relativa</td>
        <td>30% ± 5%</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Rango de Enfoque</td>
        <td>39~69.5 CM </td>
        <td style={{ fontWeight: 'bold' }}>Altura de enfoque</td>
        <td>50 CM</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Video</td>
        <td colspan="3">1920 x 1080p @30fps, 1280 x 720p @30fps</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Interfaces</td>
        <td colspan="3">- 1 x micrófono<br />- 1 x altavoz<br />- 3 x indicador LED</td>
      </tr>
    </tbody>
  </table>
</div>

### [B3_POE](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Base_Board/B3_POE/readme.md)

Arriba             |  Abajo
:-------------------------:|:-------------------------:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_top2.png" /></div>  |  <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_bottom2.png" /></div>

#### ⚙️ Características:

- 1 x puerto RJ45 para **802.3af PSE**.
- 1 x puerto UART.
- 1 x puerto Debug.
- 3 x puerto IO.

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/IO_Lens_6.png" /></div>

## Interfaz de Hardware

- [Luz](#jump2)
- [Micrófono y Altavoz](#jump3)
- [POE](#jump4)
- [IO](#jump5)
- [Uart (Debug)](#jump6)
- [Botón de Usuario](#jump7)

### <span id="jump2">Luz</span>

Hay 3 indicadores en la recamera, las luces **roja y azul** son indicadores programables, y el indicador **verde** es el indicador de energía que no es programable. **Rojo** es el indicador de estado de la CPU y **azul** es el indicador de estado de lectura del emmc del sistema.

**Estado de los Indicadores de Luz**:

| LED(color) | Estado | Declaración |
| ---- | ---- | ---- |
| LED1 - Verde | ENCENDIDO | Energía Encendida |
| LED2 - Rojo | Parpadeando | CPU Funcionando(definido por usuario) |
| LED3 - Azul | Parpadeando | eMMC Leyendo/Escribiendo |

Ejemplo 1: Usar comando linux para cambiar el brillo del **led rojo** a cero

``` bash
echo 0 | sudo tee /sys/class/leds/red/brightness
```

Ejemplo 2: apagar completamente la **luz roja**

``` bash
echo none | sudo tee /sys/class/leds/red/trigger
```

### <span id="jump3">Micrófono y Altavoz</span>

La recamera tiene un micrófono y un altavoz. Puedes invocar el micrófono y altavoz siguiendo el comando. La recamera puede reproducir archivos de audio en formato **wav**.

El formato predeterminado del reproductor es: tasa de bits de 16bit; La frecuencia de muestreo es 16,000

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

### <span id="jump4">POE</span>

El módulo POE está integrado en el hardware de la versión reCamera HQ POE. El módulo WiFi ha sido removido. Sin embargo, puedes restaurar la función Wi-Fi reemplazando la placa principal del SG2002w.

Conecta la reCamera a un switch que soporte el protocolo **POE 802.3af**, y el dispositivo reCamera se iniciará.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/poe_connect_recamera.jpg" /></div>

Puedes verificar la dirección IP del dispositivo en tu router para acceder a él, o conectar la reCamera vía USB y acceder al terminal para consultar la IP de red cableada.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/router_search.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/terminal_ipv4_search.png" /></div>

### <span id="jump5">IO</span>

**Usando la interfaz GPIO sysfs para controlar I/O**

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/IO_Lens_6.png" /></div>

En Linux, la forma más común de leer y escribir GPIO es usando la interfaz GPIO sysfs. Esto se implementa manipulando archivos como `export`, `unexport`, `gpio{N}/direction`, y `gpio{N}/value` (reemplaza `{N}` con el número de pin real) bajo el directorio `/sys/class/gpio`, y se usa frecuentemente en scripts de shell.

La placa base POE de reCamera tiene 3 puertos IO disponibles. Cada puerto puede configurarse como entrada o salida. Los puertos IO están numerados como sigue:

| Puerto IO | Número GPIO |
| ---- | ---- |
| D1 | 490 |
| CLK(Pines IO Multiplexados) | 487 |
| SMD(Pines IO Multiplexados) | 488 |


```bash
echo "490" > /sys/class/gpio/export #Enable pin GPIO490

echo "out" > /sys/class/gpio/gpio490/direction #Enable the output mode
echo 1 > /sys/class/gpio/gpio490/value # Set the pin to a high level
echo 0 > /sys/class/gpio/gpio490/value # Set the pin to a low level

echo "in" > /sys/class/gpio/gpio490/direction #Enable the input mode
cat /sys/class/gpio/gpio490/value #Read the pin level

echo "490" > /sys/class/gpio/unexport #Disable pin GPIO490
```


### <span id="jump6">Uart (Debug)</span>

La placa base POE de reCamera tiene dos conjuntos de puertos serie, a saber /ttyS0 (para Debug) y /ttyS3.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/image-1.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_pinout.png" /></div>

El puerto serie de debug de este dispositivo tiene una velocidad de baudios de 115200 y soporta conexión a sistemas de monitoreo remoto.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-8.png" /></div>

```bash
#Use the stty tool to query its communication parameters.

stty -F /dev/ttyS3
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/image-2.png" /></div>

```bash
# Modify the serial port baud rate, where ispeed refers to the input speed and ospeed refers to the output speed.

stty -F /dev/ttyS3 ispeed 115200 ospeed 115200
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/image-3.png" /></div>

El puerto serie predeterminado tiene el eco habilitado, y puedes usar el siguiente comando para deshabilitarlo:

```bash
stty -F /dev/ttyS3 -echo
```

Comunicación serie:

```bash
#Send data
echo "hello world" > /dev/ttyS3
echo Hello! > /dev/ttyS3
#Receive data
cat /dev/ttyS3
```

Usa la herramienta minicom para comunicarte a través del puerto serie:

```bash
minicom -D /dev/ttyS3 -b 115200
```


### <span id="jump7">Botón de Usuario</span>

El botón usr de la reCamera puede ser personalizado por el usuario.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_user_button.png" /></div>

```bash
echo "510" > /sys/class/gpio/export
echo "in" > /sys/class/gpio/gpio510/direction #Enable the input mode
cat /sys/class/gpio/gpio510/value #When the key is pressed, 0 is printed
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-11.png" /></div>

## Lista de partes

| Artículo | Cantidad |
|--|--|
| reCamera 2002x HQ PoE | x1 |
| Cable USB Type-C | x1 |
| Cable Ethernet | x1 |
| Manual de Usuario | x1 |
| Cable de 6 Pines | x1 |


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
