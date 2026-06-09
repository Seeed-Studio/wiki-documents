---
description: Este wiki presenta cómo conectar y controlar una pantalla SPI en la Seeed reComputer J4012 Classic, usando como ejemplo una pantalla LCD SPI ST7789.  
title: Usar una pantalla SPI en reComputer J4012 Classic  
keywords:
- Jetson
- reComputer
- J4012 Classic
- SPI
- ST7789
- LCD  
image: https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_02.png
slug: /jetson_spi_getting_start
sku: 110110145
last_update:
  date: 06/08/2026
  author: HaoChen
createdAt: '2026-06-01'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/es/jetson_spi_getting_start/
---

# Usar una pantalla SPI en reComputer J4012 Classic

## Introducción

Este wiki presenta cómo conectar y controlar una pantalla SPI en la Seeed reComputer J4012 Classic. Cubre el flujo de trabajo básico para usar una pantalla SPI a través del conector de 40 pines, incluyendo el cableado de hardware, la configuración de la interfaz SPI, la comprobación del nodo de dispositivo, la instalación de dependencias, la compilación de una demo en C++ y la ejecución de una sencilla prueba de visualización.

En esta guía se utiliza como ejemplo una pantalla LCD SPI ST7789. Para otros módulos de pantalla SPI, como ST7735 o ILI9341, el flujo de trabajo general es similar, pero los detalles del cableado, la resolución de la pantalla, la secuencia de inicialización y los parámetros del controlador pueden ser diferentes.

El método de esta guía también puede utilizarse como referencia para otras aplicaciones de pantallas SPI. 

## Preparación de hardware

### Hardware necesario

| Elemento                     | Descripción                                            |
| ---------------------------- | ------------------------------------------------------ |
| reComputer J4012 Classic     | Ordenador de IA perimetral basado en Jetson           |
| Módulo de pantalla SPI       | Esta guía usa como ejemplo una pantalla LCD SPI ST7789 |
| Cables Dupont                | Se usan para conectar la pantalla al conector de 40 pines |
| Pantalla HDMI o terminal SSH | Se usan para configurar y probar el dispositivo        |

### Software necesario

| Software         | Descripción                                         |
| ---------------- | --------------------------------------------------- |
| JetPack / Ubuntu | Sistema operativo que se ejecuta en reComputer J4012 Classic |
| g++              | Se usa para compilar la demo en C++                 |
| spidev           | Interfaz de espacio de usuario SPI de Linux         |
| sysfs GPIO       | Se usa para controlar pines GPIO como DC y RES      |

## Conexión de hardware

### Conector de 40 pines

La reComputer J4012 Classic proporciona un conector de expansión de 40 pines. A través de este conector se pueden usar señales SPI y pines GPIO para conectar pequeños módulos de pantalla.

![40-pin header pinout](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_01.png)

Figura 1. Distribución de pines del conector de 40 pines de reComputer J4012 Classic

### Ejemplo de cableado de pantalla SPI: ST7789

En esta guía se utiliza una pantalla SPI ST7789 como módulo de pantalla de ejemplo. Conecta la pantalla al conector de 40 pines según la siguiente tabla.

| Pin ST7789 | Pin de 40 pines J4012 Classic | Función     | Descripción                                 |
| ---------- | ----------------------------- | ----------- | ------------------------------------------- |
| GND        | Pin 6                         | GND         | Tierra                                      |
| VCC        | Pin 1                         | 3.3V        | Entrada de alimentación para la pantalla    |
| SCL        | Pin 23                        | SPI SCLK    | Señal de reloj SPI                          |
| SDA        | Pin 19                        | SPI MOSI    | Datos SPI desde J4012 Classic hacia la pantalla |
| RES        | Pin 31                        | GPIO / PQ.06 | Señal de reinicio por hardware              |
| DC         | Pin 29                        | GPIO / PQ.05 | Selección de datos / comando                |
| CS         | Pin 24                        | SPI CS      | Selección de chip SPI                       |
| BLK        | Pin 17                        | 3.3V        | Alimentación de la retroiluminación, siempre encendida |

![ST7789 SPI display wiring](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_02.png)

Figura 2. Cableado entre reComputer J4012 Classic y la pantalla SPI ST7789

## Habilitar la interfaz SPI

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="jp5-jp6" label="JetPack 5 / JetPack 6">

Antes de ejecutar la demo de la pantalla, se debe habilitar la interfaz SPI en el conector de 40 pines.

Abre la herramienta de configuración Jetson-IO:

```bash
sudo /opt/nvidia/jetson-io/jetson-io.py
```

Selecciona el menú de configuración del conector de 40 pines.

![Jetson-IO main menu](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_03.png)

Figura 3. Menú principal de Jetson-IO

![Configure header pins manually](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_04.png)  

Figura 4. Selecciona "Configure header pins manually"

![Enable spi1 function](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_05.png)  

Figura 5. Habilita la función spi1 en el conector de 40 pines

Guarda la configuración y reinicia el dispositivo:

```bash
sudo reboot
```

Después de que el dispositivo se reinicie, carga el módulo del kernel `spidev`:

```bash
sudo modprobe spidev
```

Este paso garantiza que el controlador SPI de espacio de usuario de Linux esté disponible antes de comprobar o acceder a `/dev/spidev*`.

  </TabItem>

  <TabItem value="jp7" label="JetPack 7">

Antes de ejecutar la demo de la pantalla, habilita la interfaz SPI y configura los pines GPIO usados por la pantalla en la herramienta Jetson Expansion Header Tool.

Abre la herramienta de configuración Jetson-IO:

```bash
sudo /opt/nvidia/jetson-io/jetson-io.py
```

Selecciona el menú de configuración del conector de 40 pines.

![Jetson-IO main menu](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_03.png)

Figura 3. Menú principal de Jetson-IO

![Configure header pins manually](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_04.png)  

Figura 4. Selecciona "Configure header pins manually"

![Enable spi1 and gpio for DC and RES](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_07.png)  

Figura 5. Habilita spi1 y configura el Pin 29 y el Pin 31 como gpio

En JetPack 7, selecciona las siguientes funciones en la herramienta Jetson Expansion Header Tool:

1. Habilita `spi1` para las señales SPI en el Pin 19, Pin 23 y Pin 24.
2. Configura el Pin 29 (`extperiph3_clk`) como `gpio` para la señal `DC`.
3. Configura el Pin 31 (`extperiph4_clk`) como `gpio` para la señal `RES`.

Guarda la configuración y reinicia el dispositivo:

```bash
sudo reboot
```

Después de que el dispositivo se reinicie, carga el módulo del kernel `spidev`:

```bash
sudo modprobe spidev
```

Este paso garantiza que el controlador SPI de espacio de usuario de Linux esté disponible antes de comprobar o acceder a `/dev/spidev*`.

  </TabItem>
</Tabs>

## Comprobar el dispositivo SPI

Después de que el dispositivo se reinicie, comprueba si se ha generado el nodo de dispositivo SPI:

```bash
ls /dev/spidev*
```

Si SPI está habilitado correctamente, verás una salida similar a la siguiente:

```bash
/dev/spidev0.0
/dev/spidev0.1
```

![Check SPI device node](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_06.png)

Figura 6. Nodo de dispositivo SPI generado correctamente

En esta guía, la pantalla ST7789 usa las señales SPI conectadas al Pin 19, Pin 23 y Pin 24. El código de ejemplo usa `/dev/spidev0.0` por defecto. Si tu sistema genera un nodo de dispositivo SPI diferente, modifica la ruta del dispositivo SPI en el código.

## Instalar dependencias

Actualiza la lista de paquetes:

```bash
sudo apt update
```

Instala el compilador de C++:

```bash
sudo apt install -y g++
```

Comprueba si existe el nodo de dispositivo SPI:

```bash
ls /dev/spidev*
```

## Control de GPIO

<Tabs>
  <TabItem value="jp5" label="JetPack 5">

Antes de ejecutar la demo de la pantalla, exporta los pines GPIO usados por `DC` y `RES`. La demo controla estos dos pines a través de la interfaz GPIO de sysfs.

En esta guía:

| Señal | Pin de 40 pines | Nombre GPIO | Número GPIO |
| ------ | --------------- | ----------- | ----------- |
| DC     | Pin 29          | `PQ.05`     | `453`       |
| RES    | Pin 31          | `PQ.06`     | `454`       |

Al exportar GPIO mediante `/sys/class/gpio/export`, usa el número GPIO en lugar del nombre GPIO. En esta guía, el GPIO `453` corresponde a `PQ.05`, y el GPIO `454` corresponde a `PQ.06`:

```bash
sudo sh -c 'echo 453 > /sys/class/gpio/export'
sudo sh -c 'echo 454 > /sys/class/gpio/export'
```

Después de exportarlos, los nodos GPIO correspondientes deberían aparecer como `PQ.05` y `PQ.06`. Comprueba si existen los nodos GPIO:

```bash
ls /sys/class/gpio/PQ.05
ls /sys/class/gpio/PQ.06
```

  </TabItem>

  <TabItem value="jp6" label="JetPack 6">

JetPack 6 usa la interfaz GPIO de dispositivo de caracteres de Linux. Los pines `DC` y `RES` se controlan mediante `libgpiod`, por lo que no se requiere el paso de exportación GPIO de sysfs. Sin embargo, en JetPack 6 los pines GPIO primero deben configurarse a través de los registros de pinmux antes de poder usarse como salidas GPIO.

Los nombres GPIO para estas señales son:

| Señal | Pin de 40 pines | Nombre GPIO |
| ------ | --------------- | ----------- |
| DC     | Pin 29          | `PQ.05`     |
| RES    | Pin 31          | `PQ.06`     |

### Configurar el pinmux de GPIO

Antes de usar `libgpiod`, configura los pines `DC` y `RES` como salidas GPIO a través de los registros de pinmux.

Instala `busybox`:

```bash
sudo apt install -y busybox
```

Usa `jetson-gpio-pinmux-lookup` para encontrar la dirección del registro de pinmux para cada pin del conector de 40 pines:

```bash
jetson-gpio-pinmux-lookup 29
jetson-gpio-pinmux-lookup 31
```

La herramienta imprime la dirección de registro para cada pin. Escribe `0x004` en esa dirección para configurar el pin como salida GPIO.

Por ejemplo, para configurar el Pin 31 (`RES` / `PQ.06`) como salida GPIO:

```bash
sudo busybox devmem 0x02430070 w 0x004
```

De forma similar, configura el Pin 29 (`DC` / `PQ.05`) usando la dirección devuelta por `jetson-gpio-pinmux-lookup 29`:

```bash
sudo busybox devmem <ADDRESS_FROM_LOOKUP> w 0x004
```

Sustituye `<ADDRESS_FROM_LOOKUP>` por la dirección de registro real impresa por `jetson-gpio-pinmux-lookup 29` en tu dispositivo.

:::note
Estos ajustes de pinmux no son persistentes entre reinicios. Vuelve a ejecutar los comandos `devmem` después de cada reinicio, o añádelos a un script de inicio.
:::

### Instalar herramientas GPIO

Instala las herramientas GPIO y la biblioteca de desarrollo:

```bash
sudo apt update
sudo apt install -y gpiod libgpiod-dev
```

Usa `gpioinfo` o `gpiofind` para identificar el chip GPIO y el desplazamiento de línea correspondientes:

```bash
gpioinfo | grep -E "PQ.05|PQ.06"
```

También puedes usar:

```bash
gpiofind PQ.05
gpiofind PQ.06
```

La salida de `gpiofind` normalmente muestra el chip GPIO y el desplazamiento de línea en la siguiente forma:

```bash
gpiochipX LINE_OFFSET
```

Registra el nombre del chip GPIO y el desplazamiento de línea para `PQ.05` y `PQ.06`. Estos valores se utilizarán en el código de demostración basado en libgpiod.

:::note
Los nombres GPIO `PQ.05` y `PQ.06` se utilizan para identificar las señales físicas. El `gpiochip` real y el desplazamiento de línea siempre deben confirmarse en tu dispositivo con `gpioinfo` o `gpiofind`.
:::

  </TabItem>

  <TabItem value="jp7" label="JetPack 7">

JetPack 7 utiliza la interfaz GPIO de dispositivo de caracteres de Linux. Los pines `DC` y `RES` se controlan a través de `libgpiod`, por lo que no se requiere el paso de exportación de GPIO de sysfs. Si el Pin 29 y el Pin 31 ya se han configurado como `gpio` en la herramienta Jetson Expansion Header Tool, no se necesita ninguna configuración manual adicional de pinmux.

Los nombres GPIO para estas señales son:

| Señal | Pin de 40 pines | Nombre GPIO |
| ------ | ---------- | --------- |
| DC     | Pin 29     | `PQ.05`   |
| RES    | Pin 31     | `PQ.06`   |

Instala las herramientas GPIO y la biblioteca de desarrollo:

```bash
sudo apt update
sudo apt install -y gpiod libgpiod-dev
```

Usa `gpioinfo` o `gpiofind` para identificar el chip GPIO correspondiente y el desplazamiento de línea:

```bash
gpioinfo | grep -E "PQ.05|PQ.06"
```

También puedes usar:

```bash
gpiofind PQ.05
gpiofind PQ.06
```

La salida de `gpiofind` normalmente muestra el chip GPIO y el desplazamiento de línea en la siguiente forma:

```bash
gpiochipX LINE_OFFSET
```

Registra el nombre del chip GPIO y el desplazamiento de línea para `PQ.05` y `PQ.06`. Estos valores se utilizarán en el código de demostración basado en libgpiod.

:::note
Los nombres GPIO `PQ.05` y `PQ.06` se utilizan para identificar las señales físicas. El `gpiochip` real y el desplazamiento de línea siempre deben confirmarse en tu dispositivo con `gpioinfo` o `gpiofind`.
:::

  </TabItem>
</Tabs>

## Ejecutar la demostración de la pantalla ST7789

<Tabs>
  <TabItem value="jp5" label="JetPack 5">

Esta sección utiliza una demostración en C++ para verificar que la pantalla SPI ST7789 puede funcionar correctamente en el reComputer J4012 Classic.

La demostración realiza las siguientes operaciones:

1. Abre el dispositivo SPI `/dev/spidev0.0`.
2. Configura el modo SPI, los bits por palabra y la velocidad SPI.
3. Controla los pines `DC` y `RES` a través de sysfs GPIO.
4. Inicializa el controlador de pantalla ST7789.
5. Llena continuamente la pantalla con diferentes colores RGB565.

El cableado utilizado en esta demostración se muestra a continuación.

| Señal   | Pin de 40 pines | GPIO / Dispositivo     |
| -------- | ---------- | ----------------------- |
| SPI SCLK | Pin 23     | Reloj SPI               |
| SPI MOSI | Pin 19     | SPI MOSI                |
| SPI CS   | Pin 24     | SPI CS                  |
| RES      | Pin 31     | `/sys/class/gpio/PQ.06` |
| DC       | Pin 29     | `/sys/class/gpio/PQ.05` |
| BLK      | Pin 17     | 3.3V                    |

Crea un archivo llamado `st7789_spi.cpp`:

```bash
nano st7789_spi.cpp
```

Añade el siguiente código de demostración en C++:

```
#include <iostream>
#include <fcntl.h>
#include <unistd.h>
#include <sys/ioctl.h>
#include <linux/spi/spidev.h>
#include <cstdint>
#include <cstring>

int spi_fd = -1;
int dc_fd = -1;
int res_fd = -1;

// GPIO paths for reComputer J4012 Classic
// DC  -> Pin 29 -> PQ.05
// RES -> Pin 31 -> PQ.06
const char* DC_DIR_PATH  = "/sys/class/gpio/PQ.05/direction";
const char* DC_VAL_PATH  = "/sys/class/gpio/PQ.05/value";
const char* RES_DIR_PATH = "/sys/class/gpio/PQ.06/direction";
const char* RES_VAL_PATH = "/sys/class/gpio/PQ.06/value";

bool write_file(const char* path, const char* value)
{
    int fd = open(path, O_WRONLY);
    if (fd < 0) {
        std::cerr << "open failed: " << path << std::endl;
        return false;
    }

    write(fd, value, strlen(value));
    close(fd);
    return true;
}

bool init_gpios()
{
    if (!write_file(DC_DIR_PATH, "out")) return false;
    if (!write_file(RES_DIR_PATH, "out")) return false;

    dc_fd = open(DC_VAL_PATH, O_WRONLY);
    res_fd = open(RES_VAL_PATH, O_WRONLY);

    if (dc_fd < 0 || res_fd < 0) {
        std::cerr << "open gpio value failed" << std::endl;
        return false;
    }

    return true;
}

void gpio_write(int fd, int value)
{
    lseek(fd, 0, SEEK_SET);
    write(fd, value ? "1" : "0", 1);
}

void WriteCommand(uint8_t cmd)
{
    gpio_write(dc_fd, 0);
    write(spi_fd, &cmd, 1);
}

void WriteData(uint8_t data)
{
    gpio_write(dc_fd, 1);
    write(spi_fd, &data, 1);
}

void WriteDataBuf(const uint8_t* data, size_t len)
{
    gpio_write(dc_fd, 1);

    const size_t CHUNK_SIZE = 4096;
    size_t bytes_sent = 0;

    while (bytes_sent < len) {
        size_t current_chunk = (len - bytes_sent > CHUNK_SIZE) ? CHUNK_SIZE : (len - bytes_sent);

        struct spi_ioc_transfer tr;
        std::memset(&tr, 0, sizeof(tr));

        tr.tx_buf = (unsigned long)(data + bytes_sent);
        tr.rx_buf = 0;
        tr.len = current_chunk;
        tr.speed_hz = 24000000;
        tr.bits_per_word = 8;

        if (ioctl(spi_fd, SPI_IOC_MESSAGE(1), &tr) < 0) {
            std::cerr << "SPI chunk transfer failed at " << bytes_sent << std::endl;
            return;
        }

        bytes_sent += current_chunk;
    }
}

void ST7789_Reset()
{
    gpio_write(res_fd, 0);
    usleep(200000);

    gpio_write(res_fd, 1);
    usleep(200000);
}

void ST7789_Init()
{
    ST7789_Reset();

    WriteCommand(0x11);       // Sleep Out
    usleep(120000);

    WriteCommand(0x3A);       // Pixel Format Set
    WriteData(0x05);          // RGB565

    WriteCommand(0x36);       // Memory Access Control
    WriteData(0x08);          // Default direction

    WriteCommand(0x21);       // Display Inversion ON

    WriteCommand(0x29);       // Display ON
    usleep(20000);
}

void ST7789_SetWindow(uint16_t x0, uint16_t y0, uint16_t x1, uint16_t y1)
{
    WriteCommand(0x2A);       // Column Address Set
    WriteData(x0 >> 8);
    WriteData(x0 & 0xFF);
    WriteData(x1 >> 8);
    WriteData(x1 & 0xFF);

    WriteCommand(0x2B);       // Row Address Set
    WriteData(y0 >> 8);
    WriteData(y0 & 0xFF);
    WriteData(y1 >> 8);
    WriteData(y1 & 0xFF);

    WriteCommand(0x2C);       // Memory Write
}

void ST7789_FillColor(uint16_t color)
{
    const int width = 240;
    const int height = 320;

    ST7789_SetWindow(0, 0, width - 1, height - 1);

    uint8_t screen_buf[height * width * 2];

    uint8_t high = color >> 8;
    uint8_t low = color & 0xFF;

    for (int i = 0; i < height * width * 2; i += 2) {
        screen_buf[i] = high;
        screen_buf[i + 1] = low;
    }

    WriteDataBuf(screen_buf, sizeof(screen_buf));
}

bool init_spi()
{
    spi_fd = open("/dev/spidev0.0", O_RDWR);
    if (spi_fd < 0) {
        std::cerr << "open /dev/spidev0.0 failed" << std::endl;
        return false;
    }

    uint8_t mode = SPI_MODE_0;
    uint8_t bits = 8;
    uint32_t speed = 24000000;

    ioctl(spi_fd, SPI_IOC_WR_MODE, &mode);
    ioctl(spi_fd, SPI_IOC_WR_BITS_PER_WORD, &bits);
    ioctl(spi_fd, SPI_IOC_WR_MAX_SPEED_HZ, &speed);

    return true;
}

uint16_t Rainbow_HSV_To_RGB565(int h)
{
    float r = 0, g = 0, b = 0;

    int sector = h / 60;
    float fractional = (h % 60) / 60.0f;

    float x = 1.0f - fractional;
    float y = fractional;

    switch (sector) {
        case 0: r = 1.0f; g = y;    b = 0.0f; break;
        case 1: r = x;    g = 1.0f; b = 0.0f; break;
        case 2: r = 0.0f; g = 1.0f; b = y;    break;
        case 3: r = 0.0f; g = x;    b = 1.0f; break;
        case 4: r = y;    g = 0.0f; b = 1.0f; break;
        case 5: r = 1.0f; g = 0.0f; b = x;    break;
        default: r = 0.0f; g = 0.0f; b = 0.0f; break;
    }

    uint8_t R8 = static_cast<uint8_t>(r * 255);
    uint8_t G8 = static_cast<uint8_t>(g * 255);
    uint8_t B8 = static_cast<uint8_t>(b * 255);

    return ((R8 >> 3) << 11) | ((G8 >> 2) << 5) | (B8 >> 3);
}

int main()
{
    uint16_t color = 0x001F;
    int i = 0;

    std::cout << "Init SPI..." << std::endl;
    if (!init_spi()) return -1;

    std::cout << "Init GPIO..." << std::endl;
    if (!init_gpios()) return -1;

    std::cout << "Init ST7789..." << std::endl;
    ST7789_Init();

    std::cout << "Fill 240x320 Color..." << std::endl;

    while (1) {
        color = Rainbow_HSV_To_RGB565(i++ % 360);
        ST7789_FillColor(color);
        usleep(10000);
    }

    close(spi_fd);
    close(dc_fd);
    close(res_fd);

    return 0;
}
```

Compila la demostración:

```bash
g++ st7789_spi.cpp -o st7789_spi
```

Ejecuta la demostración:

```bash
sudo ./st7789_spi
```

  </TabItem>

  <TabItem value="jp6" label="JetPack 6">

Esta sección utiliza una demostración en C++ para verificar que la pantalla SPI ST7789 puede funcionar correctamente en el reComputer J4012 Classic.

La demostración realiza las siguientes operaciones:

1. Abre el dispositivo SPI `/dev/spidev0.0`.
2. Configura el modo SPI, los bits por palabra y la velocidad SPI.
3. Controla los pines `DC` y `RES` a través de `libgpiod`.
4. Inicializa el controlador de pantalla ST7789.
5. Llena continuamente la pantalla con diferentes colores RGB565.

El cableado utilizado en esta demostración se muestra a continuación.

| Señal   | Pin de 40 pines | GPIO / Dispositivo |
| -------- | ---------- | ------------- |
| SPI SCLK | Pin 23     | Reloj SPI     |
| SPI MOSI | Pin 19     | SPI MOSI      |
| SPI CS   | Pin 24     | SPI CS        |
| RES      | Pin 31     | `PQ.06`       |
| DC       | Pin 29     | `PQ.05`       |
| BLK      | Pin 17     | 3.3V          |

Antes de ejecutar la demostración, completa la configuración de pinmux GPIO para el Pin 29 y el Pin 31 en la sección **GPIO Control** anterior.

Instala las herramientas de compilación necesarias y la biblioteca de desarrollo GPIO:

```bash
sudo apt update
sudo apt install -y build-essential linux-libc-dev gpiod libgpiod-dev busybox
```

Usa `gpiofind` para comprobar el chip GPIO y el desplazamiento de línea para `PQ.05` y `PQ.06`:

```bash
gpiofind PQ.05
gpiofind PQ.06
```

Si la salida es diferente de los valores utilizados en la demostración, actualiza `GPIO_CHIP_NAME`, `DC_LINE_OFFSET` y `RES_LINE_OFFSET` en el código.

Crea un archivo llamado `st7789_spi_gpiod.cpp`:

```bash
nano st7789_spi_gpiod.cpp
```

Añade el siguiente código de demostración en C++:

```
#include <iostream>
#include <fcntl.h>
#include <unistd.h>
#include <sys/ioctl.h>
#include <linux/spi/spidev.h>
#include <cstdint>
#include <cstring>
#include <gpiod.h>

int spi_fd = -1;

// Update these values according to the gpiofind output on your device.
// DC  -> Pin 29 -> PQ.05
// RES -> Pin 31 -> PQ.06
const char* GPIO_CHIP_NAME = "gpiochip0";
const unsigned int DC_LINE_OFFSET  = 29;
const unsigned int RES_LINE_OFFSET = 31;

gpiod_chip* gpio_chip = nullptr;
gpiod_line* dc_line = nullptr;
gpiod_line* res_line = nullptr;

bool init_gpios()
{
    gpio_chip = gpiod_chip_open_by_name(GPIO_CHIP_NAME);
    if (!gpio_chip) {
        std::cerr << "Failed to open GPIO chip: " << GPIO_CHIP_NAME << std::endl;
        return false;
    }

    dc_line = gpiod_chip_get_line(gpio_chip, DC_LINE_OFFSET);
    if (!dc_line) {
        std::cerr << "Failed to get DC GPIO line" << std::endl;
        return false;
    }

    res_line = gpiod_chip_get_line(gpio_chip, RES_LINE_OFFSET);
    if (!res_line) {
        std::cerr << "Failed to get RES GPIO line" << std::endl;
        return false;
    }

    if (gpiod_line_request_output(dc_line, "st7789-dc", 0) < 0) {
        std::cerr << "Failed to request DC line as output" << std::endl;
        return false;
    }

    if (gpiod_line_request_output(res_line, "st7789-res", 1) < 0) {
        std::cerr << "Failed to request RES line as output" << std::endl;
        return false;
    }

    return true;
}

void gpio_write(gpiod_line* line, int value)
{
    if (gpiod_line_set_value(line, value) < 0) {
        std::cerr << "Failed to set GPIO value" << std::endl;
    }
}

void WriteCommand(uint8_t cmd)
{
    gpio_write(dc_line, 0);
    write(spi_fd, &cmd, 1);
}

void WriteData(uint8_t data)
{
    gpio_write(dc_line, 1);
    write(spi_fd, &data, 1);
}

void WriteDataBuf(const uint8_t* data, size_t len)
{
    gpio_write(dc_line, 1);

    const size_t CHUNK_SIZE = 4096;
    size_t bytes_sent = 0;

    while (bytes_sent < len) {
        size_t current_chunk = (len - bytes_sent > CHUNK_SIZE) ? CHUNK_SIZE : (len - bytes_sent);

        struct spi_ioc_transfer tr;
        std::memset(&tr, 0, sizeof(tr));

        tr.tx_buf = reinterpret_cast<unsigned long>(data + bytes_sent);
        tr.rx_buf = 0;
        tr.len = current_chunk;
        tr.speed_hz = 24000000;
        tr.bits_per_word = 8;

        if (ioctl(spi_fd, SPI_IOC_MESSAGE(1), &tr) < 0) {
            std::cerr << "SPI chunk transfer failed at " << bytes_sent << std::endl;
            return;
        }

        bytes_sent += current_chunk;
    }
}

void ST7789_Reset()
{
    gpio_write(res_line, 0);
    usleep(200000);

    gpio_write(res_line, 1);
    usleep(200000);
}

void ST7789_Init()
{
    ST7789_Reset();

    WriteCommand(0x11);       // Sleep Out
    usleep(120000);

    WriteCommand(0x3A);       // Pixel Format Set
    WriteData(0x05);          // RGB565

    WriteCommand(0x36);       // Memory Access Control
    WriteData(0x08);          // Default direction

    WriteCommand(0x21);       // Display Inversion ON

    WriteCommand(0x29);       // Display ON
    usleep(20000);
}

void ST7789_SetWindow(uint16_t x0, uint16_t y0, uint16_t x1, uint16_t y1)
{
    WriteCommand(0x2A);       // Column Address Set
    WriteData(x0 >> 8);
    WriteData(x0 & 0xFF);
    WriteData(x1 >> 8);
    WriteData(x1 & 0xFF);

    WriteCommand(0x2B);       // Row Address Set
    WriteData(y0 >> 8);
    WriteData(y0 & 0xFF);
    WriteData(y1 >> 8);
    WriteData(y1 & 0xFF);

    WriteCommand(0x2C);       // Memory Write
}

void ST7789_FillColor(uint16_t color)
{
    const int width = 240;
    const int height = 320;

    ST7789_SetWindow(0, 0, width - 1, height - 1);

    uint8_t screen_buf[height * width * 2];

    uint8_t high = color >> 8;
    uint8_t low = color & 0xFF;

    for (int i = 0; i < height * width * 2; i += 2) {
        screen_buf[i] = high;
        screen_buf[i + 1] = low;
    }

    WriteDataBuf(screen_buf, sizeof(screen_buf));
}

bool init_spi()
{
    spi_fd = open("/dev/spidev0.0", O_RDWR);
    if (spi_fd < 0) {
        std::cerr << "open /dev/spidev0.0 failed" << std::endl;
        return false;
    }

    uint8_t mode = SPI_MODE_0;
    uint8_t bits = 8;
    uint32_t speed = 24000000;

    if (ioctl(spi_fd, SPI_IOC_WR_MODE, &mode) < 0) {
        std::cerr << "Failed to set SPI mode" << std::endl;
        return false;
    }

    if (ioctl(spi_fd, SPI_IOC_WR_BITS_PER_WORD, &bits) < 0) {
        std::cerr << "Failed to set SPI bits per word" << std::endl;
        return false;
    }

    if (ioctl(spi_fd, SPI_IOC_WR_MAX_SPEED_HZ, &speed) < 0) {
        std::cerr << "Failed to set SPI speed" << std::endl;
        return false;
    }

    return true;
}

uint16_t Rainbow_HSV_To_RGB565(int h)
{
    float r = 0, g = 0, b = 0;

    int sector = h / 60;
    float fractional = (h % 60) / 60.0f;

    float x = 1.0f - fractional;
    float y = fractional;

    switch (sector) {
        case 0: r = 1.0f; g = y;    b = 0.0f; break;
        case 1: r = x;    g = 1.0f; b = 0.0f; break;
        case 2: r = 0.0f; g = 1.0f; b = y;    break;
        case 3: r = 0.0f; g = x;    b = 1.0f; break;
        case 4: r = y;    g = 0.0f; b = 1.0f; break;
        case 5: r = 1.0f; g = 0.0f; b = x;    break;
        default: r = 0.0f; g = 0.0f; b = 0.0f; break;
    }

    uint8_t R8 = static_cast<uint8_t>(r * 255);
    uint8_t G8 = static_cast<uint8_t>(g * 255);
    uint8_t B8 = static_cast<uint8_t>(b * 255);

    return ((R8 >> 3) << 11) | ((G8 >> 2) << 5) | (B8 >> 3);
}

void cleanup()
{
    if (spi_fd >= 0) {
        close(spi_fd);
        spi_fd = -1;
    }

    if (dc_line) {
        gpiod_line_release(dc_line);
        dc_line = nullptr;
    }

    if (res_line) {
        gpiod_line_release(res_line);
        res_line = nullptr;
    }

    if (gpio_chip) {
        gpiod_chip_close(gpio_chip);
        gpio_chip = nullptr;
    }
}

int main()
{
    uint16_t color = 0x001F;
    int i = 0;

    std::cout << "Init SPI..." << std::endl;
    if (!init_spi()) {
        cleanup();
        return -1;
    }

    std::cout << "Init GPIO with libgpiod..." << std::endl;
    if (!init_gpios()) {
        cleanup();
        return -1;
    }

    std::cout << "Init ST7789..." << std::endl;
    ST7789_Init();

    std::cout << "Fill 240x320 Color..." << std::endl;

    while (1) {
        color = Rainbow_HSV_To_RGB565(i++ % 360);
        ST7789_FillColor(color);
        usleep(10000);
    }

    cleanup();
    return 0;
}
```

Compila la demostración:

```bash
g++ st7789_spi_gpiod.cpp -o st7789_spi_gpiod -lgpiod
```

Ejecuta la demostración:

```bash
sudo ./st7789_spi_gpiod
```

  </TabItem>

  <TabItem value="jp7" label="JetPack 7">

Esta sección utiliza una demostración en C++ para verificar que la pantalla ST7789 SPI puede funcionar correctamente en la reComputer J4012 Classic.

La demostración realiza las siguientes operaciones:

1. Abre el dispositivo SPI `/dev/spidev0.0`.
2. Configura el modo SPI, los bits por palabra y la velocidad SPI.
3. Controla los pines `DC` y `RES` a través de `libgpiod`.
4. Inicializa el controlador de pantalla ST7789.
5. Rellena continuamente la pantalla con diferentes colores RGB565.

El cableado utilizado en esta demostración se muestra a continuación.

| Señal   | Pin de 40 pines | GPIO / Dispositivo |
| ------- | ---------------- | ------------------ |
| SPI SCLK | Pin 23          | Reloj SPI          |
| SPI MOSI | Pin 19          | SPI MOSI           |
| SPI CS   | Pin 24          | SPI CS             |
| RES      | Pin 31          | `PQ.06`            |
| DC       | Pin 29          | `PQ.05`            |
| BLK      | Pin 17          | 3.3V               |

Antes de ejecutar la demostración, asegúrate de que el Pin 29 y el Pin 31 se hayan configurado como `gpio` en la herramienta Jetson Expansion Header Tool en la sección **Enable SPI Interface** anterior. A diferencia de JetPack 6, no se requiere ninguna configuración manual de pinmux con `busybox devmem`.

Instala las herramientas de compilación necesarias y la biblioteca de desarrollo GPIO:

```bash
sudo apt update
sudo apt install -y build-essential linux-libc-dev gpiod libgpiod-dev
```

Utiliza `gpiofind` para comprobar el chip GPIO y el desplazamiento de línea para `PQ.05` y `PQ.06`:

```bash
gpiofind PQ.05
gpiofind PQ.06
```

Si la salida es diferente de los valores utilizados en la demostración, actualiza `GPIO_CHIP_NAME`, `DC_LINE_OFFSET` y `RES_LINE_OFFSET` en el código.

Crea un archivo llamado `st7789_spi_gpiod.cpp`:

```bash
nano st7789_spi_gpiod.cpp
```

Añade el siguiente código de demostración en C++:

```
#include <iostream>
#include <fcntl.h>
#include <unistd.h>
#include <sys/ioctl.h>
#include <linux/spi/spidev.h>
#include <cstdint>
#include <cstring>
#include <gpiod.h>

int spi_fd = -1;

// Update these values according to the gpiofind output on your device.
// DC  -> Pin 29 -> PQ.05
// RES -> Pin 31 -> PQ.06
const char* GPIO_CHIP_NAME = "gpiochip0";
const unsigned int DC_LINE_OFFSET  = 29;
const unsigned int RES_LINE_OFFSET = 31;

gpiod_chip* gpio_chip = nullptr;
gpiod_line* dc_line = nullptr;
gpiod_line* res_line = nullptr;

bool init_gpios()
{
    gpio_chip = gpiod_chip_open_by_name(GPIO_CHIP_NAME);
    if (!gpio_chip) {
        std::cerr << "Failed to open GPIO chip: " << GPIO_CHIP_NAME << std::endl;
        return false;
    }

    dc_line = gpiod_chip_get_line(gpio_chip, DC_LINE_OFFSET);
    if (!dc_line) {
        std::cerr << "Failed to get DC GPIO line" << std::endl;
        return false;
    }

    res_line = gpiod_chip_get_line(gpio_chip, RES_LINE_OFFSET);
    if (!res_line) {
        std::cerr << "Failed to get RES GPIO line" << std::endl;
        return false;
    }

    if (gpiod_line_request_output(dc_line, "st7789-dc", 0) < 0) {
        std::cerr << "Failed to request DC line as output" << std::endl;
        return false;
    }

    if (gpiod_line_request_output(res_line, "st7789-res", 1) < 0) {
        std::cerr << "Failed to request RES line as output" << std::endl;
        return false;
    }

    return true;
}

void gpio_write(gpiod_line* line, int value)
{
    if (gpiod_line_set_value(line, value) < 0) {
        std::cerr << "Failed to set GPIO value" << std::endl;
    }
}

void WriteCommand(uint8_t cmd)
{
    gpio_write(dc_line, 0);
    write(spi_fd, &cmd, 1);
}

void WriteData(uint8_t data)
{
    gpio_write(dc_line, 1);
    write(spi_fd, &data, 1);
}

void WriteDataBuf(const uint8_t* data, size_t len)
{
    gpio_write(dc_line, 1);

    const size_t CHUNK_SIZE = 4096;
    size_t bytes_sent = 0;

    while (bytes_sent < len) {
        size_t current_chunk = (len - bytes_sent > CHUNK_SIZE) ? CHUNK_SIZE : (len - bytes_sent);

        struct spi_ioc_transfer tr;
        std::memset(&tr, 0, sizeof(tr));

        tr.tx_buf = reinterpret_cast<unsigned long>(data + bytes_sent);
        tr.rx_buf = 0;
        tr.len = current_chunk;
        tr.speed_hz = 24000000;
        tr.bits_per_word = 8;

        if (ioctl(spi_fd, SPI_IOC_MESSAGE(1), &tr) < 0) {
            std::cerr << "SPI chunk transfer failed at " << bytes_sent << std::endl;
            return;
        }

        bytes_sent += current_chunk;
    }
}

void ST7789_Reset()
{
    gpio_write(res_line, 0);
    usleep(200000);

    gpio_write(res_line, 1);
    usleep(200000);
}

void ST7789_Init()
{
    ST7789_Reset();

    WriteCommand(0x11);       // Sleep Out
    usleep(120000);

    WriteCommand(0x3A);       // Pixel Format Set
    WriteData(0x05);          // RGB565

    WriteCommand(0x36);       // Memory Access Control
    WriteData(0x08);          // Default direction

    WriteCommand(0x21);       // Display Inversion ON

    WriteCommand(0x29);       // Display ON
    usleep(20000);
}

void ST7789_SetWindow(uint16_t x0, uint16_t y0, uint16_t x1, uint16_t y1)
{
    WriteCommand(0x2A);       // Column Address Set
    WriteData(x0 >> 8);
    WriteData(x0 & 0xFF);
    WriteData(x1 >> 8);
    WriteData(x1 & 0xFF);

    WriteCommand(0x2B);       // Row Address Set
    WriteData(y0 >> 8);
    WriteData(y0 & 0xFF);
    WriteData(y1 >> 8);
    WriteData(y1 & 0xFF);

    WriteCommand(0x2C);       // Memory Write
}

void ST7789_FillColor(uint16_t color)
{
    const int width = 240;
    const int height = 320;

    ST7789_SetWindow(0, 0, width - 1, height - 1);

    uint8_t screen_buf[height * width * 2];

    uint8_t high = color >> 8;
    uint8_t low = color & 0xFF;

    for (int i = 0; i < height * width * 2; i += 2) {
        screen_buf[i] = high;
        screen_buf[i + 1] = low;
    }

    WriteDataBuf(screen_buf, sizeof(screen_buf));
}

bool init_spi()
{
    spi_fd = open("/dev/spidev0.0", O_RDWR);
    if (spi_fd < 0) {
        std::cerr << "open /dev/spidev0.0 failed" << std::endl;
        return false;
    }

    uint8_t mode = SPI_MODE_0;
    uint8_t bits = 8;
    uint32_t speed = 24000000;

    if (ioctl(spi_fd, SPI_IOC_WR_MODE, &mode) < 0) {
        std::cerr << "Failed to set SPI mode" << std::endl;
        return false;
    }

    if (ioctl(spi_fd, SPI_IOC_WR_BITS_PER_WORD, &bits) < 0) {
        std::cerr << "Failed to set SPI bits per word" << std::endl;
        return false;
    }

    if (ioctl(spi_fd, SPI_IOC_WR_MAX_SPEED_HZ, &speed) < 0) {
        std::cerr << "Failed to set SPI speed" << std::endl;
        return false;
    }

    return true;
}

uint16_t Rainbow_HSV_To_RGB565(int h)
{
    float r = 0, g = 0, b = 0;

    int sector = h / 60;
    float fractional = (h % 60) / 60.0f;

    float x = 1.0f - fractional;
    float y = fractional;

    switch (sector) {
        case 0: r = 1.0f; g = y;    b = 0.0f; break;
        case 1: r = x;    g = 1.0f; b = 0.0f; break;
        case 2: r = 0.0f; g = 1.0f; b = y;    break;
        case 3: r = 0.0f; g = x;    b = 1.0f; break;
        case 4: r = y;    g = 0.0f; b = 1.0f; break;
        case 5: r = 1.0f; g = 0.0f; b = x;    break;
        default: r = 0.0f; g = 0.0f; b = 0.0f; break;
    }

    uint8_t R8 = static_cast<uint8_t>(r * 255);
    uint8_t G8 = static_cast<uint8_t>(g * 255);
    uint8_t B8 = static_cast<uint8_t>(b * 255);

    return ((R8 >> 3) << 11) | ((G8 >> 2) << 5) | (B8 >> 3);
}

void cleanup()
{
    if (spi_fd >= 0) {
        close(spi_fd);
        spi_fd = -1;
    }

    if (dc_line) {
        gpiod_line_release(dc_line);
        dc_line = nullptr;
    }

    if (res_line) {
        gpiod_line_release(res_line);
        res_line = nullptr;
    }

    if (gpio_chip) {
        gpiod_chip_close(gpio_chip);
        gpio_chip = nullptr;
    }
}

int main()
{
    uint16_t color = 0x001F;
    int i = 0;

    std::cout << "Init SPI..." << std::endl;
    if (!init_spi()) {
        cleanup();
        return -1;
    }

    std::cout << "Init GPIO with libgpiod..." << std::endl;
    if (!init_gpios()) {
        cleanup();
        return -1;
    }

    std::cout << "Init ST7789..." << std::endl;
    ST7789_Init();

    std::cout << "Fill 240x320 Color..." << std::endl;

    while (1) {
        color = Rainbow_HSV_To_RGB565(i++ % 360);
        ST7789_FillColor(color);
        usleep(10000);
    }

    cleanup();
    return 0;
}
```

Compila la demostración:

```bash
g++ st7789_spi_gpiod.cpp -o st7789_spi_gpiod -lgpiod
```

Ejecuta la demostración:

```bash
sudo ./st7789_spi_gpiod
```

  </TabItem>
</Tabs>

Si el cableado y la configuración SPI son correctos, la pantalla ST7789 debería refrescarse continuamente con diferentes colores.

![Resultado de la demostración de la pantalla ST7789](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_gif_01.gif)

Figura 7. Resultado de la demostración de la pantalla ST7789

## Explicación del código

<Tabs>
  <TabItem value="jp5" label="JetPack 5">

### Inicialización de SPI

La demostración abre `/dev/spidev0.0` y configura la interfaz SPI de la siguiente manera.

| Parámetro      | Valor            |
| -------------- | ---------------- |
| Dispositivo SPI | `/dev/spidev0.0` |
| Modo SPI       | `SPI_MODE_0`     |
| Bits por palabra | `8`             |
| Velocidad SPI  | `24000000 Hz`    |

Si tu sistema genera un nodo de dispositivo SPI diferente, modifica la siguiente línea en el código de demostración:

```cpp
spi_fd = open("/dev/spidev0.0", O_RDWR);
```

Por ejemplo, si tu nodo de dispositivo es `/dev/spidev1.0`, cámbialo a:

```cpp
spi_fd = open("/dev/spidev1.0", O_RDWR);
```

### Control de GPIO

La demostración utiliza sysfs GPIO para controlar los pines `DC` y `RES`.

| Señal | Pin de 40 pines | Ruta sysfs GPIO        |
| ------ | ---------------- | ---------------------- |
| DC     | Pin 29           | `/sys/class/gpio/PQ.05` |
| RES    | Pin 31           | `/sys/class/gpio/PQ.06` |

El pin `DC` se utiliza para cambiar entre el modo de comando y el modo de datos. El pin `RES` se utiliza para reiniciar la pantalla ST7789.

### Inicialización del ST7789

La demostración inicializa la pantalla ST7789 con los siguientes comandos.

| Comando | Descripción            |
| ------- | ---------------------- |
| `0x11`  | Salir de suspensión    |
| `0x3A`  | Configurar formato de píxel |
| `0x05`  | Formato RGB565         |
| `0x36`  | Control de acceso a memoria |
| `0x21`  | Activar inversión de pantalla |
| `0x29`  | Encender pantalla      |

### Prueba de relleno de pantalla

La demo utiliza el formato RGB565 para rellenar la pantalla completa. La resolución de pantalla utilizada en la demo es:

```cpp
const int width = 240;
const int height = 320;
```

Si tu pantalla ST7789 utiliza una resolución diferente, modifica estos valores de acuerdo con el tamaño real de la pantalla.

### Transferencia de datos SPI

El búfer de pantalla completa es más grande que una sola pequeña transferencia SPI. Por lo tanto, la demo envía los datos de visualización en bloques:

```cpp
const size_t CHUNK_SIZE = 4096;
```

Esto evita las limitaciones de tamaño de transferencia y hace que la actualización de pantalla completa sea más estable.

  </TabItem>

  <TabItem value="jp6" label="JetPack 6">

### Inicialización de SPI

La demo abre `/dev/spidev0.0` y configura la interfaz SPI de la siguiente manera.

| Parámetro     | Valor            |
| ------------- | ---------------- |
| Dispositivo SPI | `/dev/spidev0.0` |
| Modo SPI      | `SPI_MODE_0`     |
| Bits por palabra | `8`              |
| Velocidad SPI | `24000000 Hz`    |

Si tu sistema genera un nodo de dispositivo SPI diferente, modifica la siguiente línea en el código de la demo:

```cpp
spi_fd = open("/dev/spidev0.0", O_RDWR);
```

Por ejemplo, si tu nodo de dispositivo es `/dev/spidev1.0`, cámbialo a:

```cpp
spi_fd = open("/dev/spidev1.0", O_RDWR);
```

### Control de GPIO

La demo utiliza `libgpiod` para controlar los pines `DC` y `RES`. El programa abre el chip GPIO, obtiene las líneas GPIO por desplazamiento de línea, las solicita como salidas y luego establece sus valores durante la inicialización de la pantalla y la transferencia de datos.

El chip GPIO y el desplazamiento de línea se establecen en las siguientes líneas:

```cpp
const char* GPIO_CHIP_NAME = "gpiochip0";
const unsigned int DC_LINE_OFFSET  = 29;
const unsigned int RES_LINE_OFFSET = 31;
```

Si la salida de `gpiofind` es diferente, actualiza estos valores antes de compilar la demo.

El pin `DC` se utiliza para cambiar entre modo comando y modo datos. El pin `RES` se utiliza para reiniciar la pantalla ST7789.

### Inicialización de ST7789

La demo inicializa la pantalla ST7789 con los siguientes comandos.

| Comando | Descripción           |
| ------- | --------------------- |
| `0x11`  | Salir de suspensión   |
| `0x3A`  | Configurar formato de píxel |
| `0x05`  | Formato RGB565        |
| `0x36`  | Control de acceso a memoria |
| `0x21`  | Inversión de pantalla activada |
| `0x29`  | Pantalla encendida    |

### Prueba de relleno de pantalla

La demo utiliza el formato RGB565 para rellenar la pantalla completa. La resolución de pantalla utilizada en la demo es:

```cpp
const int width = 240;
const int height = 320;
```

Si tu pantalla ST7789 utiliza una resolución diferente, modifica estos valores de acuerdo con el tamaño real de la pantalla.

### Transferencia de datos SPI

El búfer de pantalla completa es más grande que una sola pequeña transferencia SPI. Por lo tanto, la demo envía los datos de visualización en bloques:

```cpp
const size_t CHUNK_SIZE = 4096;
```

Esto evita las limitaciones de tamaño de transferencia y hace que la actualización de pantalla completa sea más estable.

  </TabItem>

  <TabItem value="jp7" label="JetPack 7">

### Inicialización de SPI

La demo abre `/dev/spidev0.0` y configura la interfaz SPI de la siguiente manera.

| Parámetro     | Valor            |
| ------------- | ---------------- |
| Dispositivo SPI | `/dev/spidev0.0` |
| Modo SPI      | `SPI_MODE_0`     |
| Bits por palabra | `8`              |
| Velocidad SPI | `24000000 Hz`    |

Si tu sistema genera un nodo de dispositivo SPI diferente, modifica la siguiente línea en el código de la demo:

```cpp
spi_fd = open("/dev/spidev0.0", O_RDWR);
```

Por ejemplo, si tu nodo de dispositivo es `/dev/spidev1.0`, cámbialo a:

```cpp
spi_fd = open("/dev/spidev1.0", O_RDWR);
```

### Control de GPIO

La demo utiliza `libgpiod` para controlar los pines `DC` y `RES`. El programa abre el chip GPIO, obtiene las líneas GPIO por desplazamiento de línea, las solicita como salidas y luego establece sus valores durante la inicialización de la pantalla y la transferencia de datos.

En JetPack 7, el Pin 29 y el Pin 31 ya deberían estar configurados como `gpio` en la herramienta Jetson Expansion Header Tool. No se requiere configuración manual de los registros pinmux antes de ejecutar la demo.

El chip GPIO y el desplazamiento de línea se establecen en las siguientes líneas:

```cpp
const char* GPIO_CHIP_NAME = "gpiochip0";
const unsigned int DC_LINE_OFFSET  = 29;
const unsigned int RES_LINE_OFFSET = 31;
```

Si la salida de `gpiofind` es diferente, actualiza estos valores antes de compilar la demo.

El pin `DC` se utiliza para cambiar entre modo comando y modo datos. El pin `RES` se utiliza para reiniciar la pantalla ST7789.

### Inicialización de ST7789

La demo inicializa la pantalla ST7789 con los siguientes comandos.

| Comando | Descripción           |
| ------- | --------------------- |
| `0x11`  | Salir de suspensión   |
| `0x3A`  | Configurar formato de píxel |
| `0x05`  | Formato RGB565        |
| `0x36`  | Control de acceso a memoria |
| `0x21`  | Inversión de pantalla activada |
| `0x29`  | Pantalla encendida    |

### Prueba de relleno de pantalla

La demo utiliza el formato RGB565 para rellenar la pantalla completa. La resolución de pantalla utilizada en la demo es:

```cpp
const int width = 240;
const int height = 320;
```

Si tu pantalla ST7789 utiliza una resolución diferente, modifica estos valores de acuerdo con el tamaño real de la pantalla.

### Transferencia de datos SPI

El búfer de pantalla completa es más grande que una sola pequeña transferencia SPI. Por lo tanto, la demo envía los datos de visualización en bloques:

```cpp
const size_t CHUNK_SIZE = 4096;
```

Esto evita las limitaciones de tamaño de transferencia y hace que la actualización de pantalla completa sea más estable.

  </TabItem>
</Tabs>

## Solución de problemas

<Tabs>
  <TabItem value="jp5" label="JetPack 5">

### No se encontró ningún dispositivo `/dev/spidev*`

Posibles causas:

1. La interfaz SPI no está habilitada.
2. La configuración de Jetson-IO no se guardó.
3. El dispositivo no se reinició después de habilitar SPI.
4. El device tree no expone el nodo de dispositivo SPI.
5. La imagen del sistema no incluye la configuración SPI esperada.

Comprobaciones sugeridas:

```bash
ls /dev/spidev*
```

Si no se encuentra ningún dispositivo SPI, ejecuta Jetson-IO de nuevo y comprueba si SPI está habilitado.

### Permiso denegado al acceder a SPI o GPIO

Si ves un error de permisos al ejecutar la demo en C++, intenta ejecutarla con `sudo`:

```bash
sudo ./st7789_spi
```

También puedes comprobar los permisos del dispositivo SPI y de los nodos GPIO:

```bash
ls -l /dev/spidev*
ls -l /sys/class/gpio/PQ.05/value
ls -l /sys/class/gpio/PQ.06/value
```

### La ruta GPIO no existe

Si `/sys/class/gpio/PQ.05` o `/sys/class/gpio/PQ.06` no existe, es posible que los pines GPIO no se hayan exportado correctamente.

Por favor, comprueba los nodos GPIO disponibles:

```bash
ls /sys/class/gpio/
```

Luego exporta los pines GPIO de nuevo:

```bash
sudo sh -c 'echo 453 > /sys/class/gpio/export'
sudo sh -c 'echo 454 > /sys/class/gpio/export'
```

### SPI se puede abrir pero la pantalla no muestra nada

Posibles causas:

1. El cableado de la pantalla es incorrecto.
2. La ruta del dispositivo SPI es incorrecta.
3. Los pines CS, DC o RES no están conectados correctamente.
4. El controlador de la pantalla no es ST7789.
5. La pantalla requiere una secuencia de inicialización diferente.
6. El pin de la retroiluminación no está alimentado.

Comprobaciones sugeridas:

1. Confirma que `VCC` está conectado al Pin 1.
2. Confirma que `GND` está conectado al Pin 6.
3. Confirma que `BLK` está conectado al Pin 17 y que la retroiluminación está encendida.
4. Confirma que `SCL`, `SDA` y `CS` están conectados al Pin 23, Pin 19 y Pin 24.
5. Confirma que `RES` y `DC` están conectados al Pin 31 y Pin 29.
6. Reduce la velocidad SPI y prueba de nuevo.
7. Confirma el modelo de controlador de la pantalla a partir de la hoja de datos del módulo de pantalla.

### La retroiluminación está encendida pero no se muestra ninguna imagen

Si la retroiluminación está encendida pero no se muestra ninguna imagen, el cableado de alimentación puede ser correcto, pero la comunicación SPI o la inicialización de la pantalla pueden ser incorrectas.

Por favor, comprueba:

1. Si se está utilizando el dispositivo SPI correcto.
2. Si los pines DC y RES están configurados correctamente.
3. Si el controlador de pantalla coincide con el controlador ST7789.
4. Si la resolución de la pantalla es correcta.
5. Si el módulo de pantalla requiere configuraciones de desplazamiento de filas o columnas.

### El color de la imagen es anormal

Posibles causas:

1. Desajuste entre el orden de color RGB y BGR.
2. La configuración de inversión de pantalla es diferente.
3. El parámetro `MADCTL` no es adecuado para tu panel.
4. El módulo de pantalla utiliza una secuencia de inicialización ST7789 ligeramente diferente.

Soluciones sugeridas:

1. Intenta cambiar el valor de `MADCTL`.
2. Intenta habilitar o deshabilitar la inversión de pantalla.
3. Comprueba la hoja de datos del módulo de pantalla ST7789.
4. Confirma si tu módulo utiliza orden de color RGB o BGR.

### La dirección de la imagen es incorrecta

Si la imagen está rotada o reflejada, modifica el parámetro del comando `MADCTL` en la función de inicialización:

```cpp
WriteCommand(0x36);
WriteData(0x08);
```

El valor correcto depende de la orientación del módulo de pantalla.

### La actualización de la pantalla es lenta

Posibles causas:

1. La velocidad de reloj SPI es demasiado baja.
2. El programa actualiza la pantalla completa cada vez.
3. El módulo de pantalla tiene un rendimiento de actualización limitado.
4. La demo en C++ utiliza un método sencillo de relleno de pantalla completa para verificación.

Soluciones sugeridas:

1. Aumenta gradualmente la velocidad de reloj SPI.
2. Evita actualizaciones de pantalla completa innecesarias.
3. Actualiza solo las áreas que cambian si tu aplicación lo permite.
4. Utiliza la prueba de relleno de color actual solo como una demo básica de verificación de hardware.

  </TabItem>

  <TabItem value="jp6" label="JetPack 6">

### No se encontró ningún dispositivo `/dev/spidev*`

Posibles causas:

1. La interfaz SPI no está habilitada.
2. La configuración de Jetson-IO no se guardó.
3. El dispositivo no se reinició después de habilitar SPI.
4. El device tree no expone el nodo de dispositivo SPI.
5. La imagen del sistema no incluye la configuración SPI esperada.

Comprobaciones sugeridas:

```bash
ls /dev/spidev*
```

Si no se encuentra ningún dispositivo SPI, ejecuta Jetson-IO de nuevo y comprueba si SPI está habilitado.

### Permiso denegado al acceder a SPI o GPIO

Si ves un error de permisos al ejecutar la demo en C++, intenta ejecutarla con `sudo`:

```bash
sudo ./st7789_spi_gpiod
```

También puedes comprobar los dispositivos de carácter SPI y GPIO:

```bash
ls -l /dev/spidev*
ls -l /dev/gpiochip*
```

### No se puede encontrar la línea GPIO

Si `gpiofind PQ.05` o `gpiofind PQ.06` no devuelve ningún resultado, comprueba las líneas GPIO disponibles:

```bash
gpioinfo
```

Luego busca los nombres GPIO utilizados por los pines `DC` y `RES`. Si el nombre del chip GPIO o el desplazamiento de línea es diferente, actualiza los siguientes valores en el código de la demo:

```cpp
const char* GPIO_CHIP_NAME = "gpiochip0";
const unsigned int DC_LINE_OFFSET  = 29;
const unsigned int RES_LINE_OFFSET = 31;
```

### Error al solicitar la línea GPIO

Si la demo informa que no se pudo solicitar una línea GPIO, las posibles causas incluyen:

1. El pinmux de GPIO no se ha configurado como salida.
2. El chip GPIO seleccionado es incorrecto.
3. El desplazamiento de línea seleccionado es incorrecto.
4. La línea GPIO ya está siendo utilizada por otro proceso o controlador.
5. El programa no tiene permiso para acceder a `/dev/gpiochip*`.

Comprobaciones sugeridas:

1. Confirma que los registros de pinmux para el Pin 29 y el Pin 31 se han configurado. Si es necesario, vuelve a ejecutar los comandos `jetson-gpio-pinmux-lookup` y `busybox devmem` de la sección **GPIO Control**.
2. Comprueba el estado de la línea GPIO:

```bash
gpioinfo | grep -E "PQ.05|PQ.06"
```

Si la línea ya está en uso, detén el proceso que la está utilizando o elige la línea GPIO correcta de acuerdo con tu conexión de hardware.

### El SPI se puede abrir pero la pantalla no muestra nada

Posibles causas:

1. El cableado de la pantalla es incorrecto.
2. La ruta del dispositivo SPI es incorrecta.
3. Los pines CS, DC o RES no están conectados correctamente.
4. El chip GPIO o el desplazamiento de línea para DC/RES es incorrecto.
5. El controlador de la pantalla no es ST7789.
6. La pantalla requiere una secuencia de inicialización diferente.
7. El pin de la retroiluminación no tiene alimentación.

Comprobaciones sugeridas:

1. Confirma que `VCC` está conectado al Pin 1.
2. Confirma que `GND` está conectado al Pin 6.
3. Confirma que `BLK` está conectado al Pin 17 y que la retroiluminación está encendida.
4. Confirma que `SCL`, `SDA` y `CS` están conectados al Pin 23, Pin 19 y Pin 24.
5. Confirma que `RES` y `DC` están conectados al Pin 31 y Pin 29.
6. Confirma el chip GPIO y el desplazamiento de línea con `gpiofind` o `gpioinfo`.
7. Reduce la velocidad de SPI y prueba de nuevo.
8. Confirma el modelo del controlador de la pantalla en la hoja de datos del módulo de pantalla.

### La retroiluminación está encendida pero no se muestra ninguna imagen

Si la retroiluminación está encendida pero no se muestra ninguna imagen, el cableado de alimentación puede ser correcto, pero la comunicación SPI, el control GPIO o la inicialización de la pantalla pueden ser incorrectos.

Por favor, comprueba:

1. Si se está utilizando el dispositivo SPI correcto.
2. Si se están utilizando el chip GPIO y los desplazamientos de línea correctos para DC y RES.
3. Si el controlador de pantalla coincide con el controlador ST7789.
4. Si la resolución de la pantalla es correcta.
5. Si el módulo de pantalla requiere ajustes de desplazamiento de fila o columna.

### El color de la imagen es anormal

Posibles causas:

1. Desajuste en el orden de color RGB y BGR.
2. La configuración de inversión de pantalla es diferente.
3. El parámetro `MADCTL` no es adecuado para tu panel.
4. El módulo de pantalla utiliza una secuencia de inicialización ST7789 ligeramente diferente.

Soluciones sugeridas:

1. Intenta cambiar el valor de `MADCTL`.
2. Intenta habilitar o deshabilitar la inversión de pantalla.
3. Consulta la hoja de datos del módulo de pantalla ST7789.
4. Confirma si tu módulo utiliza el orden de color RGB o BGR.

### La dirección de la imagen es incorrecta

Si la imagen está rotada o reflejada, modifica el parámetro del comando `MADCTL` en la función de inicialización:

```cpp
WriteCommand(0x36);
WriteData(0x08);
```

El valor correcto depende de la orientación del módulo de pantalla.

### La actualización de la pantalla es lenta

Posibles causas:

1. La velocidad de reloj SPI es demasiado baja.
2. El programa actualiza la pantalla completa cada vez.
3. El módulo de pantalla tiene un rendimiento de actualización limitado.
4. La demo en C++ utiliza un método sencillo de relleno de pantalla completa para la verificación.

Soluciones sugeridas:

1. Aumenta gradualmente la velocidad de reloj SPI.
2. Evita las actualizaciones de pantalla completa innecesarias.
3. Actualiza solo las áreas cambiadas si tu aplicación lo admite.
4. Utiliza la prueba de relleno de color actual solo como una demo básica de verificación de hardware.

  </TabItem>

  <TabItem value="jp7" label="JetPack 7">

### No se encontró ningún dispositivo `/dev/spidev*`

Posibles causas:

1. La interfaz SPI no está habilitada.
2. La configuración de Jetson-IO no se guardó.
3. El dispositivo no se reinició después de habilitar SPI.
4. El árbol de dispositivos no expone el nodo de dispositivo SPI.
5. La imagen del sistema no incluye la configuración SPI esperada.

Comprobaciones sugeridas:

```bash
ls /dev/spidev*
```

Si no se encuentra ningún dispositivo SPI, ejecuta Jetson-IO de nuevo y comprueba si `spi1` está habilitado.

### Permiso denegado al acceder a SPI o GPIO

Si ves un error de permisos al ejecutar la demo en C++, intenta ejecutarla con `sudo`:

```bash
sudo ./st7789_spi_gpiod
```

También puedes comprobar el dispositivo SPI y los dispositivos de caracteres GPIO:

```bash
ls -l /dev/spidev*
ls -l /dev/gpiochip*
```

### No se puede encontrar la línea GPIO

Si `gpiofind PQ.05` o `gpiofind PQ.06` no devuelve ningún resultado, comprueba las líneas GPIO disponibles:

```bash
gpioinfo
```

Luego busca los nombres GPIO utilizados por los pines `DC` y `RES`. Si el nombre del chip GPIO o el desplazamiento de línea es diferente, actualiza los siguientes valores en el código de la demo:

```cpp
const char* GPIO_CHIP_NAME = "gpiochip0";
const unsigned int DC_LINE_OFFSET  = 29;
const unsigned int RES_LINE_OFFSET = 31;
```

Confirma también que el Pin 29 y el Pin 31 están configurados como `gpio` en la herramienta Jetson Expansion Header Tool.

### Error al solicitar la línea GPIO

Si la demo informa que no se pudo solicitar una línea GPIO, las posibles causas incluyen:

1. El Pin 29 o el Pin 31 no están configurados como `gpio` en la herramienta Jetson Expansion Header Tool.
2. El chip GPIO seleccionado es incorrecto.
3. El desplazamiento de línea seleccionado es incorrecto.
4. La línea GPIO ya está siendo utilizada por otro proceso o controlador.
5. El programa no tiene permiso para acceder a `/dev/gpiochip*`.

Comprobaciones sugeridas:

1. Abre Jetson-IO de nuevo y confirma que el Pin 29 (`extperiph3_clk`) y el Pin 31 (`extperiph4_clk`) están configurados como `gpio`.
2. Comprueba el estado de la línea GPIO:

```bash
gpioinfo | grep -E "PQ.05|PQ.06"
```

Si la línea ya está en uso, detén el proceso que la está utilizando o elige la línea GPIO correcta de acuerdo con tu conexión de hardware.

### El SPI se puede abrir pero la pantalla no muestra nada

Posibles causas:

1. El cableado de la pantalla es incorrecto.
2. La ruta del dispositivo SPI es incorrecta.
3. Los pines CS, DC o RES no están conectados correctamente.
4. El chip GPIO o el desplazamiento de línea para DC/RES es incorrecto.
5. El Pin 29 o el Pin 31 no están configurados como `gpio` en Jetson-IO.
6. El controlador de la pantalla no es ST7789.
7. La pantalla requiere una secuencia de inicialización diferente.
8. El pin de la retroiluminación no tiene alimentación.

Comprobaciones sugeridas:

1. Confirma que `VCC` está conectado al Pin 1.
2. Confirma que `GND` está conectado al Pin 6.
3. Confirma que `BLK` está conectado al Pin 17 y que la retroiluminación está encendida.
4. Confirma que `SCL`, `SDA` y `CS` están conectados al Pin 23, Pin 19 y Pin 24.
5. Confirma que `RES` y `DC` están conectados al Pin 31 y Pin 29.
6. Confirma el chip GPIO y el desplazamiento de línea con `gpiofind` o `gpioinfo`.
7. Confirma que el Pin 29 y el Pin 31 están configurados como `gpio` en Jetson-IO.
8. Reduce la velocidad de SPI y prueba de nuevo.
9. Confirma el modelo del controlador de la pantalla en la hoja de datos del módulo de pantalla.

### La retroiluminación está encendida pero no se muestra ninguna imagen

Si la retroiluminación está encendida pero no se muestra ninguna imagen, el cableado de alimentación puede ser correcto, pero la comunicación SPI, el control GPIO o la inicialización de la pantalla pueden ser incorrectos.

Por favor, comprueba:

1. Si se está utilizando el dispositivo SPI correcto.
2. Si se están utilizando el chip GPIO y los desplazamientos de línea correctos para DC y RES.
3. Si el Pin 29 y el Pin 31 están configurados como `gpio` en Jetson-IO.
4. Si el controlador de pantalla coincide con el controlador ST7789.
5. Si la resolución de la pantalla es correcta.
6. Si el módulo de pantalla requiere ajustes de desplazamiento de fila o columna.

### El color de la imagen es anormal

Posibles causas:

1. Desajuste en el orden de color RGB y BGR.
2. La configuración de inversión de pantalla es diferente.
3. El parámetro `MADCTL` no es adecuado para tu panel.
4. El módulo de pantalla utiliza una secuencia de inicialización ST7789 ligeramente diferente.

Soluciones sugeridas:

1. Intenta cambiar el valor de `MADCTL`.
2. Intenta habilitar o deshabilitar la inversión de pantalla.
3. Consulta la hoja de datos del módulo de pantalla ST7789.
4. Confirma si tu módulo utiliza el orden de color RGB o BGR.

### La dirección de la imagen es incorrecta

Si la imagen está rotada o reflejada, modifica el parámetro del comando `MADCTL` en la función de inicialización:

```cpp
WriteCommand(0x36);
WriteData(0x08);
```

El valor correcto depende de la orientación del módulo de pantalla.

### La actualización de la pantalla es lenta

Posibles causas:

1. La velocidad de reloj SPI es demasiado baja.
2. El programa actualiza la pantalla completa cada vez.
3. El módulo de pantalla tiene un rendimiento de actualización limitado.
4. La demo en C++ utiliza un método sencillo de relleno de pantalla completa para la verificación.

Soluciones sugeridas:

1. Aumenta gradualmente la velocidad de reloj SPI.
2. Evita las actualizaciones de pantalla completa innecesarias.
3. Actualiza solo las áreas cambiadas si tu aplicación lo admite.
4. Utiliza la prueba de relleno de color actual solo como una demo básica de verificación de hardware.

  </TabItem>
</Tabs>

## Resumen

En este wiki, presentamos cómo conectar una pantalla SPI al Seeed reComputer J4012 Classic a través del conector de 40 pines. El flujo de trabajo general de una pantalla SPI incluye el cableado de la pantalla, habilitar la interfaz SPI, comprobar el nodo de dispositivo SPI, instalar dependencias, compilar una demo en C++ y ejecutar una prueba de pantalla. JetPack 5 utiliza GPIO sysfs, JetPack 6 utiliza `libgpiod` con configuración manual de pinmux, y JetPack 7 utiliza `libgpiod` con los pines GPIO configurados directamente en la herramienta Jetson Expansion Header Tool.

El ST7789 SPI LCD se utilizó como módulo de pantalla de ejemplo en esta guía. Para otras pantallas SPI, el proceso general es similar, pero el controlador de pantalla, la resolución, la secuencia de inicialización y los detalles de cableado deben ajustarse según el módulo de pantalla real.

## Recursos

- [NVIDIA® Jetson Orin™ NX 16GB AI Device - reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)

- [Hoja de datos de reComputer J401x](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)

- [Asignación de NVIDIA Jetson.GPIO](https://github.com/NVIDIA/jetson-gpio/blob/master/lib/python/Jetson/GPIO/gpio_pin_data.py)

- [Linux spidev userspace API](https://docs.kernel.org/spi/spidev.html)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>