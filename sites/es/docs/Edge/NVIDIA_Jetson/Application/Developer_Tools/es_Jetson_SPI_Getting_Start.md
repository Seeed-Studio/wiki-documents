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
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_spi_getting_start
sku: 110110145
last_update:
  date: 06/01/2026
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

| Elemento                     | Descripción                                             |
| ---------------------------- | ------------------------------------------------------- |
| reComputer J4012 Classic     | Ordenador de IA perimetral basado en Jetson            |
| Módulo de pantalla SPI       | Esta guía usa como ejemplo una pantalla LCD SPI ST7789 |
| Cables Dupont                | Se usan para conectar la pantalla al conector de 40 pines |
| Pantalla HDMI o terminal SSH | Se usan para configurar y probar el dispositivo        |

### Software necesario

| Software         | Descripción                                           |
| ---------------- | ----------------------------------------------------- |
| JetPack / Ubuntu | Sistema operativo que se ejecuta en reComputer J4012 Classic |
| g++              | Se usa para compilar la demo en C++                   |
| spidev           | Interfaz de espacio de usuario SPI de Linux           |
| sysfs GPIO       | Se usa para controlar pines GPIO como DC y RES        |

## Conexión de hardware

### Conector de 40 pines

La reComputer J4012 Classic proporciona un conector de expansión de 40 pines. A través de este conector se pueden usar señales SPI y pines GPIO para conectar pequeños módulos de pantalla.

![40-pin header pinout](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_01.png)

Figura 1. Distribución de pines del conector de 40 pines de la reComputer J4012 Classic

### Ejemplo de cableado de pantalla SPI: ST7789

En esta guía se utiliza una pantalla SPI ST7789 como módulo de pantalla de ejemplo. Conecta la pantalla al conector de 40 pines según la siguiente tabla.

| Pin ST7789 | Pin de 40 pines J4012 Classic | Función     | Descripción                                  |
| ---------- | ----------------------------- | ----------- | -------------------------------------------- |
| GND        | Pin 6                         | GND         | Tierra                                       |
| VCC        | Pin 1                         | 3.3V        | Entrada de alimentación para la pantalla     |
| SCL        | Pin 23                        | SPI SCLK    | Señal de reloj SPI                           |
| SDA        | Pin 19                        | SPI MOSI    | Datos SPI desde J4012 Classic hacia la pantalla |
| RES        | Pin 31                        | GPIO / PQ.06 | Señal de reinicio por hardware              |
| DC         | Pin 29                        | GPIO / PQ.05 | Selección de datos / comandos               |
| CS         | Pin 24                        | SPI CS      | Selección de chip SPI                        |
| BLK        | Pin 17                        | 3.3V        | Alimentación de la retroiluminación, siempre encendida |

![ST7789 SPI display wiring](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_02.png)

Figura 2. Cableado entre la reComputer J4012 Classic y la pantalla SPI ST7789

## Habilitar la interfaz SPI

Antes de ejecutar la demo de la pantalla, se debe habilitar la interfaz SPI en el conector de 40 pines.

Abre la herramienta de configuración Jetson-IO:

```bash
sudo /opt/nvidia/jetson-io/jetson-io.py
```

Selecciona el menú de configuración del conector de 40 pines.

![Jetson-IO main menu](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_03.png)

Figura 3. Menú principal de Jetson-IO

![Configure header pins manually](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_04.png)  

Figura 4. Seleccionar "Configure header pins manually"

![Enable spi1 function](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_05.png)  

Figura 5. Habilitar la función spi1 en el conector de 40 pines

Guarda la configuración y reinicia el dispositivo:

```bash
sudo reboot
```

Después de que el dispositivo se reinicie, carga el módulo del kernel `spidev`:

```bash
sudo modprobe spidev
```

Este paso garantiza que el controlador SPI de espacio de usuario de Linux esté disponible antes de comprobar o acceder a `/dev/spidev*`.

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

En esta guía, la pantalla ST7789 utiliza las señales SPI conectadas a los pines 19, 23 y 24. El código de ejemplo usa `/dev/spidev0.0` de forma predeterminada. Si tu sistema genera un nodo de dispositivo SPI diferente, modifica la ruta del dispositivo SPI en el código.

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

## Exportar pines GPIO

Antes de ejecutar la demo de la pantalla, exporta los pines GPIO usados por `DC` y `RES`. La demo controla estos dos pines a través de la interfaz sysfs GPIO.

En esta guía:

| Señal | Pin de 40 pines | Nombre GPIO | Número GPIO |
| ------ | --------------- | ----------- | ----------- |
| DC     | Pin 29          | `PQ.05`     | `453`       |
| RES    | Pin 31          | `PQ.06`     | `454`       |

Al exportar GPIO a través de `/sys/class/gpio/export`, usa el número GPIO en lugar del nombre GPIO. En esta guía, el GPIO `453` corresponde a `PQ.05`, y el GPIO `454` corresponde a `PQ.06`:

```bash
sudo sh -c 'echo 453 > /sys/class/gpio/export'
sudo sh -c 'echo 454 > /sys/class/gpio/export'
```

Después de exportarlos, los nodos GPIO correspondientes deberían aparecer como `PQ.05` y `PQ.06`. Comprueba si existen los nodos GPIO:

```bash
ls /sys/class/gpio/PQ.05
ls /sys/class/gpio/PQ.06
```

## Ejecutar la demo de la pantalla ST7789

Esta sección utiliza una demo en C++ para verificar que la pantalla SPI ST7789 puede funcionar correctamente en la reComputer J4012 Classic.

La demo realiza las siguientes operaciones:

1. Abre el dispositivo SPI `/dev/spidev0.0`.

2. Configura el modo SPI, los bits por palabra y la velocidad SPI.

3. Controla los pines `DC` y `RES` a través de sysfs GPIO.

4. Inicializa el controlador de la pantalla ST7789.

5. Rellena continuamente la pantalla con diferentes colores RGB565.

El cableado utilizado en esta demo se muestra a continuación.

| Señal   | Pin de 40 pines | GPIO / Dispositivo        |
| -------- | --------------- | ------------------------- |
| SPI SCLK | Pin 23          | Reloj SPI                 |
| SPI MOSI | Pin 19          | SPI MOSI                  |
| SPI CS   | Pin 24          | SPI CS                    |
| RES      | Pin 31          | `/sys/class/gpio/PQ.06`   |
| DC       | Pin 29          | `/sys/class/gpio/PQ.05`   |
| BLK      | Pin 17          | 3.3V                      |

Crea un archivo llamado `st7789_spi.cpp`:

```bash
nano st7789_spi.cpp
```

Añade el siguiente código de demo en C++:

```cpp
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

Si el cableado y la configuración de SPI son correctos, la pantalla ST7789 debería actualizarse continuamente con diferentes colores.

![Resultado de la demostración de la pantalla ST7789](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_gif_01.gif)

Figura 7. Resultado de la demostración de la pantalla ST7789

## Explicación del código

### Inicialización de SPI

La demostración abre `/dev/spidev0.0` y configura la interfaz SPI de la siguiente manera.

| Parámetro     | Valor            |
| ------------- | ---------------- |
| Dispositivo SPI | `/dev/spidev0.0` |
| Modo SPI      | `SPI_MODE_0`     |
| Bits por palabra | `8`              |
| Velocidad SPI | `24000000 Hz`    |

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

| Señal | Pin de 40 pines | Ruta de sysfs GPIO     |
| ------ | ---------- | ----------------------- |
| DC     | Pin 29     | `/sys/class/gpio/PQ.05` |
| RES    | Pin 31     | `/sys/class/gpio/PQ.06` |

El pin `DC` se utiliza para cambiar entre el modo de comando y el modo de datos. El pin `RES` se utiliza para reiniciar la pantalla ST7789.

### Inicialización de ST7789

La demostración inicializa la pantalla ST7789 con los siguientes comandos.

| Comando | Descripción           |
| ------- | --------------------- |
| `0x11`  | Salir de suspensión   |
| `0x3A`  | Configuración de formato de píxel |
| `0x05`  | Formato RGB565        |
| `0x36`  | Control de acceso a memoria |
| `0x21`  | Inversión de pantalla activada |
| `0x29`  | Pantalla encendida    |

### Prueba de relleno de pantalla

La demostración utiliza el formato RGB565 para rellenar la pantalla completa. La resolución de pantalla utilizada en la demostración es:

```cpp
const int width = 240;
const int height = 320;
```

Si tu pantalla ST7789 utiliza una resolución diferente, modifica estos valores de acuerdo con el tamaño real de la pantalla.

### Transferencia de datos SPI

El búfer de pantalla completa es más grande que una sola pequeña transferencia SPI. Por lo tanto, la demostración envía los datos de la pantalla en bloques:

```cpp
const size_t CHUNK_SIZE = 4096;
```

Esto evita las limitaciones de tamaño de transferencia y hace que la actualización de pantalla completa sea más estable.

## Solución de problemas

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

Si ves un error de permisos al ejecutar la demostración en C++, intenta ejecutarla con `sudo`:

```bash
sudo ./st7789_spi
```

También puedes comprobar los permisos del dispositivo SPI y de los nodos GPIO:

```bash
ls -l /dev/spidev*
ls -l /sys/class/gpio/PQ.05/value
ls -l /sys/class/gpio/PQ.06/value
```

### La ruta de GPIO no existe

Si `/sys/class/gpio/PQ.05` o `/sys/class/gpio/PQ.06` no existe, el nombre de GPIO o el método de exportación puede ser diferente en la imagen de tu sistema.

Por favor, comprueba los nodos GPIO disponibles:

```bash
ls /sys/class/gpio/
```

Luego modifica las rutas de GPIO en el código de demostración de acuerdo con tu sistema real.

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

6. Reduce la velocidad de SPI y prueba de nuevo.

7. Confirma el modelo del controlador de pantalla a partir de la hoja de datos del módulo de pantalla.

### La retroiluminación está encendida pero no se muestra ninguna imagen

Si la retroiluminación está encendida pero no se muestra ninguna imagen, el cableado de alimentación puede ser correcto, pero la comunicación SPI o la inicialización de la pantalla pueden ser incorrectas.

Por favor, comprueba:

1. Si se utiliza el dispositivo SPI correcto.

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

3. Consulta la hoja de datos del módulo de pantalla ST7789.

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

4. La demostración en C++ utiliza un método sencillo de relleno de pantalla completa para la verificación.

Soluciones sugeridas:

1. Aumenta gradualmente la velocidad de reloj SPI.

2. Evita actualizaciones de pantalla completa innecesarias.

3. Actualiza solo las áreas que hayan cambiado si tu aplicación lo permite.

4. Utiliza la prueba actual de relleno de color solo como una demostración básica de verificación de hardware.

## Resumen

En este wiki, presentamos cómo conectar una pantalla SPI al Seeed reComputer J4012 Classic a través del conector de 40 pines. El flujo de trabajo general de una pantalla SPI incluye el cableado de la pantalla, habilitar la interfaz SPI, comprobar el nodo de dispositivo SPI, instalar dependencias, compilar una demostración en C++ y ejecutar una prueba de pantalla.

La pantalla ST7789 SPI LCD se utilizó como módulo de pantalla de ejemplo en esta guía. Para otras pantallas SPI, el proceso general es similar, pero el controlador de pantalla, la resolución, la secuencia de inicialización y los detalles de cableado deben ajustarse de acuerdo con el módulo de pantalla real.

## Recursos

- [NVIDIA® Jetson Orin™ NX 16GB AI Device - reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)

- [Hoja de datos de reComputer J401x](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)

- [Mapeo de NVIDIA Jetson.GPIO](https://github.com/NVIDIA/jetson-gpio/blob/master/lib/python/Jetson/GPIO/gpio_pin_data.py)

- [Linux spidev userspace API](https://docs.kernel.org/spi/spidev.html)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
