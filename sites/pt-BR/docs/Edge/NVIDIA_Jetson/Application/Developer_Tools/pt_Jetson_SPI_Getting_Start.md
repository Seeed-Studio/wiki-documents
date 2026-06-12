---
description: Este wiki apresenta como conectar e controlar um display SPI no Seeed reComputer J4012 Classic, usando um LCD SPI ST7789 como exemplo.  
title: Usar um display SPI no reComputer J4012 Classic  
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
url: https://wiki.seeedstudio.com/pt-br/jetson_spi_getting_start/
---

# Usar um display SPI no reComputer J4012 Classic

## Introdução

Este wiki apresenta como conectar e controlar um display SPI no Seeed reComputer J4012 Classic. Ele abrange o fluxo de trabalho básico de uso de um display SPI através do conector de 40 pinos, incluindo a fiação de hardware, configuração da interface SPI, verificação do nó de dispositivo, instalação de dependências, compilação de um demo em C++ e execução de um teste simples de exibição.

Neste guia, um display LCD SPI ST7789 é usado como exemplo. Para outros módulos de display SPI, como ST7735 ou ILI9341, o fluxo de trabalho geral é semelhante, mas os detalhes de fiação, resolução do display, sequência de inicialização e parâmetros do driver podem ser diferentes.

O método deste guia também pode ser usado como referência para outras aplicações de display SPI. 

## Preparação de hardware

### Hardware necessário

| Item                         | Descrição                                              |
| ---------------------------- | ------------------------------------------------------ |
| reComputer J4012 Classic     | Computador de borda de IA baseado em Jetson           |
| Módulo de display SPI        | Este guia usa um display LCD SPI ST7789 como exemplo  |
| Fios Dupont                  | Usados para conectar o display ao conector de 40 pinos |
| Display HDMI ou terminal SSH | Usado para configurar e testar o dispositivo          |

### Software necessário

| Software         | Descrição                                             |
| ---------------- | ----------------------------------------------------- |
| JetPack / Ubuntu | Sistema operacional em execução no reComputer J4012 Classic |
| g++              | Usado para compilar o demo em C++                     |
| spidev           | Interface SPI em espaço de usuário do Linux           |
| sysfs GPIO       | Usado para controlar pinos GPIO como DC e RES         |

## Conexão de hardware

### Conector de 40 pinos

O reComputer J4012 Classic fornece um conector de expansão de 40 pinos. Sinais SPI e pinos GPIO podem ser usados através desse conector para conectar pequenos módulos de display.

![40-pin header pinout](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_01.png)

Figura 1. Pinagem do conector de 40 pinos do reComputer J4012 Classic

### Exemplo de fiação de display SPI: ST7789

Neste guia, um display SPI ST7789 é usado como módulo de display de exemplo. Conecte o display ao conector de 40 pinos de acordo com a tabela abaixo.

| Pino ST7789 | Pino de 40 pinos do J4012 Classic | Função      | Descrição                                   |
| ----------- | ---------------------------------- | ----------- | ------------------------------------------- |
| GND         | Pino 6                             | GND         | Terra                                       |
| VCC         | Pino 1                             | 3.3V        | Entrada de alimentação para o display       |
| SCL         | Pino 23                            | SPI SCLK    | Sinal de clock SPI                          |
| SDA         | Pino 19                            | SPI MOSI    | Dados SPI do J4012 Classic para o display   |
| RES         | Pino 31                            | GPIO / PQ.06 | Sinal de reset de hardware                  |
| DC          | Pino 29                            | GPIO / PQ.05 | Seleção de dados / comando                  |
| CS          | Pino 24                            | SPI CS      | Seleção de chip SPI                         |
| BLK         | Pino 17                            | 3.3V        | Alimentação do backlight, sempre ligado     |

![ST7789 SPI display wiring](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_02.png)

Figura 2. Fiação entre o reComputer J4012 Classic e o display SPI ST7789

## Habilitar interface SPI

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="jp5-jp6" label="JetPack 5 / JetPack 6">

Antes de executar o demo de display, a interface SPI no conector de 40 pinos deve ser habilitada.

Abra a ferramenta de configuração Jetson-IO:

```bash
sudo /opt/nvidia/jetson-io/jetson-io.py
```

Selecione o menu de configuração do conector de 40 pinos.

![Jetson-IO main menu](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_03.png)

Figura 3. Menu principal do Jetson-IO

![Configure header pins manually](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_04.png)  

Figura 4. Selecione "Configure header pins manually"

![Enable spi1 function](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_05.png)  

Figura 5. Habilite a função spi1 no conector de 40 pinos

Salve a configuração e reinicie o dispositivo:

```bash
sudo reboot
```

Após a reinicialização do dispositivo, carregue o módulo de kernel `spidev`:

```bash
sudo modprobe spidev
```

Esta etapa garante que o driver SPI em espaço de usuário do Linux esteja disponível antes de verificar ou acessar `/dev/spidev*`.

  </TabItem>

  <TabItem value="jp7" label="JetPack 7">

Antes de executar o demo de display, habilite a interface SPI e configure os pinos GPIO usados pelo display na ferramenta Jetson Expansion Header Tool.

Abra a ferramenta de configuração Jetson-IO:

```bash
sudo /opt/nvidia/jetson-io/jetson-io.py
```

Selecione o menu de configuração do conector de 40 pinos.

![Jetson-IO main menu](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_03.png)

Figura 3. Menu principal do Jetson-IO

![Configure header pins manually](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_04.png)  

Figura 4. Selecione "Configure header pins manually"

![Enable spi1 and gpio for DC and RES](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_07.png)  

Figura 5. Habilite spi1 e configure o Pino 29 e o Pino 31 como gpio

No JetPack 7, selecione as seguintes funções na ferramenta Jetson Expansion Header Tool:

1. Habilite `spi1` para os sinais SPI nos Pinos 19, 23 e 24.
2. Defina o Pino 29 (`extperiph3_clk`) como `gpio` para o sinal `DC`.
3. Defina o Pino 31 (`extperiph4_clk`) como `gpio` para o sinal `RES`.

Salve a configuração e reinicie o dispositivo:

```bash
sudo reboot
```

Após a reinicialização do dispositivo, carregue o módulo de kernel `spidev`:

```bash
sudo modprobe spidev
```

Esta etapa garante que o driver SPI em espaço de usuário do Linux esteja disponível antes de verificar ou acessar `/dev/spidev*`.

  </TabItem>
</Tabs>

## Verificar dispositivo SPI

Após a reinicialização do dispositivo, verifique se o nó de dispositivo SPI foi gerado:

```bash
ls /dev/spidev*
```

Se o SPI estiver habilitado corretamente, você poderá ver uma saída semelhante à seguinte:

```bash
/dev/spidev0.0
/dev/spidev0.1
```

![Check SPI device node](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_06.png)

Figura 6. Nó de dispositivo SPI gerado com sucesso

Neste guia, o display ST7789 usa os sinais SPI conectados aos Pinos 19, 23 e 24. O código de exemplo usa `/dev/spidev0.0` por padrão. Se o seu sistema gerar um nó de dispositivo SPI diferente, modifique o caminho do dispositivo SPI no código.

## Instalar dependências

Atualize a lista de pacotes:

```bash
sudo apt update
```

Instale o compilador C++:

```bash
sudo apt install -y g++
```

Verifique se o nó de dispositivo SPI existe:

```bash
ls /dev/spidev*
```

## Controle de GPIO

<Tabs>
  <TabItem value="jp5" label="JetPack 5">

Antes de executar o demo de display, exporte os pinos GPIO usados por `DC` e `RES`. O demo controla esses dois pinos através da interface sysfs GPIO.

Neste guia:

| Sinal | Pino de 40 pinos | Nome do GPIO | Número do GPIO |
| ----- | ---------------- | ------------ | -------------- |
| DC    | Pino 29          | `PQ.05`      | `453`          |
| RES   | Pino 31          | `PQ.06`      | `454`          |

Ao exportar GPIO através de `/sys/class/gpio/export`, use o número do GPIO em vez do nome do GPIO. Neste guia, o GPIO `453` corresponde a `PQ.05`, e o GPIO `454` corresponde a `PQ.06`:

```bash
sudo sh -c 'echo 453 > /sys/class/gpio/export'
sudo sh -c 'echo 454 > /sys/class/gpio/export'
```

Após a exportação, os nós GPIO correspondentes devem aparecer como `PQ.05` e `PQ.06`. Verifique se os nós GPIO existem:

```bash
ls /sys/class/gpio/PQ.05
ls /sys/class/gpio/PQ.06
```

  </TabItem>

  <TabItem value="jp6" label="JetPack 6">

O JetPack 6 usa a interface de dispositivo de caractere GPIO do Linux. Os pinos `DC` e `RES` são controlados através de `libgpiod`, portanto nenhuma etapa de exportação sysfs GPIO é necessária. No entanto, no JetPack 6 os pinos GPIO devem primeiro ser configurados através dos registradores de pinmux antes que possam ser usados como saídas GPIO.

Os nomes de GPIO para esses sinais são:

| Sinal | Pino de 40 pinos | Nome do GPIO |
| ----- | ---------------- | ------------ |
| DC    | Pino 29          | `PQ.05`      |
| RES   | Pino 31          | `PQ.06`      |

### Configurar pinmux de GPIO

Antes de usar `libgpiod`, configure os pinos `DC` e `RES` como saídas GPIO através dos registradores de pinmux.

Instale o `busybox`:

```bash
sudo apt install -y busybox
```

Use `jetson-gpio-pinmux-lookup` para encontrar o endereço do registrador de pinmux para cada pino do conector de 40 pinos:

```bash
jetson-gpio-pinmux-lookup 29
jetson-gpio-pinmux-lookup 31
```

A ferramenta imprime o endereço do registrador para cada pino. Escreva `0x004` nesse endereço para definir o pino como saída GPIO.

Por exemplo, para configurar o Pino 31 (`RES` / `PQ.06`) como saída GPIO:

```bash
sudo busybox devmem 0x02430070 w 0x004
```

Da mesma forma, configure o Pino 29 (`DC` / `PQ.05`) usando o endereço retornado por `jetson-gpio-pinmux-lookup 29`:

```bash
sudo busybox devmem <ADDRESS_FROM_LOOKUP> w 0x004
```

Substitua `<ADDRESS_FROM_LOOKUP>` pelo endereço real do registrador impresso por `jetson-gpio-pinmux-lookup 29` no seu dispositivo.

:::note
Essas configurações de pinmux não são persistentes entre reinicializações. Execute novamente os comandos `devmem` após cada reinicialização ou adicione-os a um script de inicialização.
:::

### Instalar ferramentas de GPIO

Instale as ferramentas de GPIO e a biblioteca de desenvolvimento:

```bash
sudo apt update
sudo apt install -y gpiod libgpiod-dev
```

Use `gpioinfo` ou `gpiofind` para identificar o chip GPIO correspondente e o deslocamento da linha:

```bash
gpioinfo | grep -E "PQ.05|PQ.06"
```

Você também pode usar:

```bash
gpiofind PQ.05
gpiofind PQ.06
```

A saída de `gpiofind` geralmente mostra o chip GPIO e o deslocamento da linha na seguinte forma:

```bash
gpiochipX LINE_OFFSET
```

Registre o nome do chip GPIO e o deslocamento da linha para `PQ.05` e `PQ.06`. Esses valores serão usados no código de demonstração baseado em libgpiod.

:::note
Os nomes GPIO `PQ.05` e `PQ.06` são usados para identificar os sinais físicos. O `gpiochip` real e o deslocamento da linha devem sempre ser confirmados no seu dispositivo com `gpioinfo` ou `gpiofind`.
:::

  </TabItem>

  <TabItem value="jp7" label="JetPack 7">

O JetPack 7 usa a interface de dispositivo de caractere GPIO do Linux. Os pinos `DC` e `RES` são controlados por meio de `libgpiod`, portanto nenhuma etapa de exportação de GPIO via sysfs é necessária. Se os pinos 29 e 31 já tiverem sido configurados como `gpio` na ferramenta Jetson Expansion Header Tool, nenhuma configuração manual adicional de pinmux é necessária.

Os nomes GPIO para esses sinais são:

| Sinal | Pino de 40 vias | Nome GPIO |
| ------ | ---------- | --------- |
| DC     | Pino 29    | `PQ.05`   |
| RES    | Pino 31    | `PQ.06`   |

Instale as ferramentas de GPIO e a biblioteca de desenvolvimento:

```bash
sudo apt update
sudo apt install -y gpiod libgpiod-dev
```

Use `gpioinfo` ou `gpiofind` para identificar o chip GPIO correspondente e o deslocamento da linha:

```bash
gpioinfo | grep -E "PQ.05|PQ.06"
```

Você também pode usar:

```bash
gpiofind PQ.05
gpiofind PQ.06
```

A saída de `gpiofind` geralmente mostra o chip GPIO e o deslocamento da linha na seguinte forma:

```bash
gpiochipX LINE_OFFSET
```

Registre o nome do chip GPIO e o deslocamento da linha para `PQ.05` e `PQ.06`. Esses valores serão usados no código de demonstração baseado em libgpiod.

:::note
Os nomes GPIO `PQ.05` e `PQ.06` são usados para identificar os sinais físicos. O `gpiochip` real e o deslocamento da linha devem sempre ser confirmados no seu dispositivo com `gpioinfo` ou `gpiofind`.
:::

  </TabItem>
</Tabs>

## Executar a demonstração do display ST7789

<Tabs>
  <TabItem value="jp5" label="JetPack 5">

Esta seção usa uma demonstração em C++ para verificar se o display SPI ST7789 pode funcionar corretamente no reComputer J4012 Classic.

A demonstração executa as seguintes operações:

1. Abre o dispositivo SPI `/dev/spidev0.0`.
2. Configura o modo SPI, bits por palavra e velocidade SPI.
3. Controla os pinos `DC` e `RES` por meio do sysfs GPIO.
4. Inicializa o controlador de display ST7789.
5. Preenche continuamente a tela com diferentes cores RGB565.

A fiação usada nesta demonstração é mostrada abaixo.

| Sinal   | Pino de 40 vias | GPIO / Dispositivo     |
| -------- | ---------- | ----------------------- |
| SPI SCLK | Pino 23    | Clock SPI               |
| SPI MOSI | Pino 19    | SPI MOSI                |
| SPI CS   | Pino 24    | SPI CS                  |
| RES      | Pino 31    | `/sys/class/gpio/PQ.06` |
| DC       | Pino 29    | `/sys/class/gpio/PQ.05` |
| BLK      | Pino 17    | 3,3 V                   |

Crie um arquivo chamado `st7789_spi.cpp`:

```bash
nano st7789_spi.cpp
```

Adicione o seguinte código de demonstração em C++:

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

Compile a demonstração:

```bash
g++ st7789_spi.cpp -o st7789_spi
```

Execute a demonstração:

```bash
sudo ./st7789_spi
```

  </TabItem>

  <TabItem value="jp6" label="JetPack 6">

Esta seção usa uma demonstração em C++ para verificar se o display SPI ST7789 pode funcionar corretamente no reComputer J4012 Classic.

A demonstração executa as seguintes operações:

1. Abre o dispositivo SPI `/dev/spidev0.0`.
2. Configura o modo SPI, bits por palavra e velocidade SPI.
3. Controla os pinos `DC` e `RES` por meio de `libgpiod`.
4. Inicializa o controlador de display ST7789.
5. Preenche continuamente a tela com diferentes cores RGB565.

A fiação usada nesta demonstração é mostrada abaixo.

| Sinal   | Pino de 40 vias | GPIO / Dispositivo |
| -------- | ---------- | ------------- |
| SPI SCLK | Pino 23    | Clock SPI     |
| SPI MOSI | Pino 19    | SPI MOSI      |
| SPI CS   | Pino 24    | SPI CS        |
| RES      | Pino 31    | `PQ.06`       |
| DC       | Pino 29    | `PQ.05`       |
| BLK      | Pino 17    | 3,3 V         |

Antes de executar a demonstração, conclua a configuração de pinmux GPIO para os pinos 29 e 31 na seção **GPIO Control** acima.

Instale as ferramentas de compilação necessárias e a biblioteca de desenvolvimento GPIO:

```bash
sudo apt update
sudo apt install -y build-essential linux-libc-dev gpiod libgpiod-dev busybox
```

Use `gpiofind` para verificar o chip GPIO e o deslocamento da linha para `PQ.05` e `PQ.06`:

```bash
gpiofind PQ.05
gpiofind PQ.06
```

Se a saída for diferente dos valores usados na demonstração, atualize `GPIO_CHIP_NAME`, `DC_LINE_OFFSET` e `RES_LINE_OFFSET` no código.

Crie um arquivo chamado `st7789_spi_gpiod.cpp`:

```bash
nano st7789_spi_gpiod.cpp
```

Adicione o seguinte código de demonstração em C++:

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

Compile o demo:

```bash
g++ st7789_spi_gpiod.cpp -o st7789_spi_gpiod -lgpiod
```

Execute o demo:

```bash
sudo ./st7789_spi_gpiod
```

  </TabItem>

  <TabItem value="jp7" label="JetPack 7">

Esta seção usa um demo em C++ para verificar se o display SPI ST7789 pode funcionar corretamente no reComputer J4012 Classic.

O demo executa as seguintes operações:

1. Abre o dispositivo SPI `/dev/spidev0.0`.
2. Configura o modo SPI, bits por palavra e velocidade SPI.
3. Controla os pinos `DC` e `RES` por meio de `libgpiod`.
4. Inicializa o controlador de display ST7789.
5. Preenche continuamente a tela com diferentes cores RGB565.

A fiação usada neste demo é mostrada abaixo.

| Sinal   | Pino de 40 pinos | GPIO / Dispositivo |
| -------- | ---------- | ------------- |
| SPI SCLK | Pino 23     | Clock SPI     |
| SPI MOSI | Pino 19     | SPI MOSI      |
| SPI CS   | Pino 24     | SPI CS        |
| RES      | Pino 31     | `PQ.06`       |
| DC       | Pino 29     | `PQ.05`       |
| BLK      | Pino 17     | 3,3 V         |

Antes de executar o demo, certifique-se de que o Pino 29 e o Pino 31 foram configurados como `gpio` na ferramenta Jetson Expansion Header na seção **Enable SPI Interface** acima. Diferente do JetPack 6, não é necessária nenhuma configuração manual de pinmux com `busybox devmem`.

Instale as ferramentas de compilação necessárias e a biblioteca de desenvolvimento de GPIO:

```bash
sudo apt update
sudo apt install -y build-essential linux-libc-dev gpiod libgpiod-dev
```

Use `gpiofind` para verificar o chip GPIO e o deslocamento de linha para `PQ.05` e `PQ.06`:

```bash
gpiofind PQ.05
gpiofind PQ.06
```

Se a saída for diferente dos valores usados no demo, atualize `GPIO_CHIP_NAME`, `DC_LINE_OFFSET` e `RES_LINE_OFFSET` no código.

Crie um arquivo chamado `st7789_spi_gpiod.cpp`:

```bash
nano st7789_spi_gpiod.cpp
```

Adicione o seguinte código de demo em C++:

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

Compile o demo:

```bash
g++ st7789_spi_gpiod.cpp -o st7789_spi_gpiod -lgpiod
```

Execute o demo:

```bash
sudo ./st7789_spi_gpiod
```

  </TabItem>
</Tabs>

Se a fiação e a configuração SPI estiverem corretas, o display ST7789 deverá ser atualizado continuamente com cores diferentes.

![Resultado do demo do display ST7789](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_gif_01.gif)

Figura 7. Resultado do demo do display ST7789

## Explicação do código

<Tabs>
  <TabItem value="jp5" label="JetPack 5">

### Inicialização do SPI

O demo abre `/dev/spidev0.0` e configura a interface SPI da seguinte forma.

| Parâmetro     | Valor            |
| ------------- | ---------------- |
| Dispositivo SPI    | `/dev/spidev0.0` |
| Modo SPI      | `SPI_MODE_0`     |
| Bits por palavra | `8`              |
| Velocidade SPI     | `24000000 Hz`    |

Se o seu sistema gerar um nó de dispositivo SPI diferente, modifique a seguinte linha no código do demo:

```cpp
spi_fd = open("/dev/spidev0.0", O_RDWR);
```

Por exemplo, se o seu nó de dispositivo for `/dev/spidev1.0`, altere para:

```cpp
spi_fd = open("/dev/spidev1.0", O_RDWR);
```

### Controle de GPIO

O demo usa sysfs GPIO para controlar os pinos `DC` e `RES`.

| Sinal | Pino de 40 pinos | Caminho sysfs GPIO         |
| ------ | ---------- | ----------------------- |
| DC     | Pino 29     | `/sys/class/gpio/PQ.05` |
| RES    | Pino 31     | `/sys/class/gpio/PQ.06` |

O pino `DC` é usado para alternar entre o modo de comando e o modo de dados. O pino `RES` é usado para reinicializar o display ST7789.

### Inicialização do ST7789

O demo inicializa o display ST7789 com os seguintes comandos.

| Comando | Descrição           |
| ------- | --------------------- |
| `0x11`  | Sleep Out             |
| `0x3A`  | Pixel Format Set      |
| `0x05`  | Formato RGB565         |
| `0x36`  | Memory Access Control |
| `0x21`  | Display Inversion On  |
| `0x29`  | Display On            |

### Teste de Preenchimento de Tela

A demonstração usa o formato RGB565 para preencher a tela inteira. A resolução de exibição usada na demonstração é:

```cpp
const int width = 240;
const int height = 320;
```

Se o seu display ST7789 usar uma resolução diferente, modifique esses valores de acordo com o tamanho real da tela.

### Transferência de Dados SPI

O buffer de tela cheia é maior do que uma única pequena transferência SPI. Portanto, a demonstração envia os dados de exibição em blocos:

```cpp
const size_t CHUNK_SIZE = 4096;
```

Isso evita limitações de tamanho de transferência e torna a atualização de tela cheia mais estável.

  </TabItem>

  <TabItem value="jp6" label="JetPack 6">

### Inicialização do SPI

A demonstração abre `/dev/spidev0.0` e configura a interface SPI da seguinte forma.

| Parâmetro     | Valor            |
| ------------- | ---------------- |
| Dispositivo SPI | `/dev/spidev0.0` |
| Modo SPI      | `SPI_MODE_0`     |
| Bits por palavra | `8`           |
| Velocidade SPI | `24000000 Hz`   |

Se o seu sistema gerar um nó de dispositivo SPI diferente, modifique a seguinte linha no código de demonstração:

```cpp
spi_fd = open("/dev/spidev0.0", O_RDWR);
```

Por exemplo, se o seu nó de dispositivo for `/dev/spidev1.0`, altere para:

```cpp
spi_fd = open("/dev/spidev1.0", O_RDWR);
```

### Controle de GPIO

A demonstração usa `libgpiod` para controlar os pinos `DC` e `RES`. O programa abre o chip GPIO, obtém as linhas GPIO pelo deslocamento de linha, solicita-as como saídas e então define seus valores durante a inicialização do display e a transferência de dados.

O chip GPIO e o deslocamento de linha são definidos nas seguintes linhas:

```cpp
const char* GPIO_CHIP_NAME = "gpiochip0";
const unsigned int DC_LINE_OFFSET  = 29;
const unsigned int RES_LINE_OFFSET = 31;
```

Se a saída do seu `gpiofind` for diferente, atualize esses valores antes de compilar a demonstração.

O pino `DC` é usado para alternar entre modo de comando e modo de dados. O pino `RES` é usado para reinicializar o display ST7789.

### Inicialização do ST7789

A demonstração inicializa o display ST7789 com os seguintes comandos.

| Comando | Descrição            |
| ------- | --------------------- |
| `0x11`  | Saída do modo de espera |
| `0x3A`  | Definir formato de pixel |
| `0x05`  | Formato RGB565        |
| `0x36`  | Controle de acesso à memória |
| `0x21`  | Inversão de display ativada |
| `0x29`  | Display ligado         |

### Teste de Preenchimento de Tela

A demonstração usa o formato RGB565 para preencher a tela inteira. A resolução de exibição usada na demonstração é:

```cpp
const int width = 240;
const int height = 320;
```

Se o seu display ST7789 usar uma resolução diferente, modifique esses valores de acordo com o tamanho real da tela.

### Transferência de Dados SPI

O buffer de tela cheia é maior do que uma única pequena transferência SPI. Portanto, a demonstração envia os dados de exibição em blocos:

```cpp
const size_t CHUNK_SIZE = 4096;
```

Isso evita limitações de tamanho de transferência e torna a atualização de tela cheia mais estável.

  </TabItem>

  <TabItem value="jp7" label="JetPack 7">

### Inicialização do SPI

A demonstração abre `/dev/spidev0.0` e configura a interface SPI da seguinte forma.

| Parâmetro     | Valor            |
| ------------- | ---------------- |
| Dispositivo SPI | `/dev/spidev0.0` |
| Modo SPI      | `SPI_MODE_0`     |
| Bits por palavra | `8`           |
| Velocidade SPI | `24000000 Hz`   |

Se o seu sistema gerar um nó de dispositivo SPI diferente, modifique a seguinte linha no código de demonstração:

```cpp
spi_fd = open("/dev/spidev0.0", O_RDWR);
```

Por exemplo, se o seu nó de dispositivo for `/dev/spidev1.0`, altere para:

```cpp
spi_fd = open("/dev/spidev1.0", O_RDWR);
```

### Controle de GPIO

A demonstração usa `libgpiod` para controlar os pinos `DC` e `RES`. O programa abre o chip GPIO, obtém as linhas GPIO pelo deslocamento de linha, solicita-as como saídas e então define seus valores durante a inicialização do display e a transferência de dados.

No JetPack 7, o Pino 29 e o Pino 31 já devem estar configurados como `gpio` na ferramenta Jetson Expansion Header. Não é necessária nenhuma configuração manual de registrador de pinmux antes de executar a demonstração.

O chip GPIO e o deslocamento de linha são definidos nas seguintes linhas:

```cpp
const char* GPIO_CHIP_NAME = "gpiochip0";
const unsigned int DC_LINE_OFFSET  = 29;
const unsigned int RES_LINE_OFFSET = 31;
```

Se a saída do seu `gpiofind` for diferente, atualize esses valores antes de compilar a demonstração.

O pino `DC` é usado para alternar entre modo de comando e modo de dados. O pino `RES` é usado para reinicializar o display ST7789.

### Inicialização do ST7789

A demonstração inicializa o display ST7789 com os seguintes comandos.

| Comando | Descrição            |
| ------- | --------------------- |
| `0x11`  | Saída do modo de espera |
| `0x3A`  | Definir formato de pixel |
| `0x05`  | Formato RGB565        |
| `0x36`  | Controle de acesso à memória |
| `0x21`  | Inversão de display ativada |
| `0x29`  | Display ligado         |

### Teste de Preenchimento de Tela

A demonstração usa o formato RGB565 para preencher a tela inteira. A resolução de exibição usada na demonstração é:

```cpp
const int width = 240;
const int height = 320;
```

Se o seu display ST7789 usar uma resolução diferente, modifique esses valores de acordo com o tamanho real da tela.

### Transferência de Dados SPI

O buffer de tela cheia é maior do que uma única pequena transferência SPI. Portanto, a demonstração envia os dados de exibição em blocos:

```cpp
const size_t CHUNK_SIZE = 4096;
```

Isso evita limitações de tamanho de transferência e torna a atualização de tela cheia mais estável.

  </TabItem>
</Tabs>

## Solução de Problemas

<Tabs>
  <TabItem value="jp5" label="JetPack 5">

### Nenhum dispositivo `/dev/spidev*` encontrado

Possíveis causas:

1. A interface SPI não está habilitada.
2. A configuração do Jetson-IO não foi salva.
3. O dispositivo não foi reiniciado após habilitar o SPI.
4. A árvore de dispositivo não expõe o nó de dispositivo SPI.
5. A imagem do sistema não inclui a configuração SPI esperada.

Verificações sugeridas:

```bash
ls /dev/spidev*
```

Se nenhum dispositivo SPI for encontrado, execute o Jetson-IO novamente e verifique se o SPI está habilitado.

### Permissão negada ao acessar SPI ou GPIO

Se você vir um erro de permissão ao executar a demonstração em C++, tente executá-la com `sudo`:

```bash
sudo ./st7789_spi
```

Você também pode verificar a permissão do dispositivo SPI e dos nós GPIO:

```bash
ls -l /dev/spidev*
ls -l /sys/class/gpio/PQ.05/value
ls -l /sys/class/gpio/PQ.06/value
```

### Caminho de GPIO não existe

Se `/sys/class/gpio/PQ.05` ou `/sys/class/gpio/PQ.06` não existir, os pinos GPIO podem não ter sido exportados corretamente.

Verifique os nós GPIO disponíveis:

```bash
ls /sys/class/gpio/
```

Em seguida, exporte novamente os pinos GPIO:

```bash
sudo sh -c 'echo 453 > /sys/class/gpio/export'
sudo sh -c 'echo 454 > /sys/class/gpio/export'
```

### SPI pode ser aberto, mas o display não mostra nada

Possíveis causas:

1. A fiação do display está incorreta.
2. O caminho do dispositivo SPI está incorreto.
3. Os pinos CS, DC ou RES não estão conectados corretamente.
4. O controlador do display não é ST7789.
5. O display requer uma sequência de inicialização diferente.
6. O pino do backlight não está alimentado.

Verificações sugeridas:

1. Confirme que `VCC` está conectado ao Pino 1.
2. Confirme que `GND` está conectado ao Pino 6.
3. Confirme que `BLK` está conectado ao Pino 17 e que o backlight está ligado.
4. Confirme que `SCL`, `SDA` e `CS` estão conectados ao Pino 23, Pino 19 e Pino 24.
5. Confirme que `RES` e `DC` estão conectados ao Pino 31 e Pino 29.
6. Reduza a velocidade do SPI e teste novamente.
7. Confirme o modelo do controlador do display no datasheet do módulo de display.

### Backlight ligado, mas nenhuma imagem é exibida

Se o backlight estiver ligado, mas nenhuma imagem for exibida, a fiação de alimentação pode estar correta, mas a comunicação SPI ou a inicialização do display pode estar incorreta.

Verifique:

1. Se o dispositivo SPI correto está sendo usado.
2. Se os pinos DC e RES estão configurados corretamente.
3. Se o driver de display corresponde ao controlador ST7789.
4. Se a resolução da tela está correta.
5. Se o módulo de display requer configurações de deslocamento de linha ou coluna.

### Cor da imagem está anormal

Possíveis causas:

1. Ordem de cores RGB e BGR não corresponde.
2. Configuração de inversão de display é diferente.
3. O parâmetro `MADCTL` não é adequado para o seu painel.
4. O módulo de display usa uma sequência de inicialização ST7789 ligeiramente diferente.

Soluções sugeridas:

1. Tente alterar o valor de `MADCTL`.
2. Tente ativar ou desativar a inversão de display.
3. Verifique o datasheet do módulo de display ST7789.
4. Confirme se o seu módulo usa ordem de cores RGB ou BGR.

### Direção da imagem está incorreta

Se a imagem estiver girada ou espelhada, modifique o parâmetro do comando `MADCTL` na função de inicialização:

```cpp
WriteCommand(0x36);
WriteData(0x08);
```

O valor correto depende da orientação do módulo de display.

### Atualização do display está lenta

Possíveis causas:

1. A velocidade do clock SPI é muito baixa.
2. O programa atualiza a tela inteira todas as vezes.
3. O módulo de display tem desempenho de atualização limitado.
4. A demonstração em C++ usa um método simples de preenchimento de tela cheia para verificação.

Soluções sugeridas:

1. Aumente gradualmente a velocidade do clock SPI.
2. Evite atualizações desnecessárias de tela cheia.
3. Atualize apenas as áreas alteradas se sua aplicação suportar isso.
4. Use o teste atual de preenchimento de cor apenas como uma demonstração básica de verificação de hardware.

  </TabItem>

  <TabItem value="jp6" label="JetPack 6">

### Nenhum dispositivo `/dev/spidev*` encontrado

Possíveis causas:

1. A interface SPI não está habilitada.
2. A configuração do Jetson-IO não foi salva.
3. O dispositivo não foi reiniciado após habilitar o SPI.
4. A árvore de dispositivo não expõe o nó de dispositivo SPI.
5. A imagem do sistema não inclui a configuração SPI esperada.

Verificações sugeridas:

```bash
ls /dev/spidev*
```

Se nenhum dispositivo SPI for encontrado, execute o Jetson-IO novamente e verifique se o SPI está habilitado.

### Permissão negada ao acessar SPI ou GPIO

Se você vir um erro de permissão ao executar a demonstração em C++, tente executá-la com `sudo`:

```bash
sudo ./st7789_spi_gpiod
```

Você também pode verificar os dispositivos de caractere SPI e GPIO:

```bash
ls -l /dev/spidev*
ls -l /dev/gpiochip*
```

### Linha GPIO não pode ser encontrada

Se `gpiofind PQ.05` ou `gpiofind PQ.06` não retornar resultado, verifique as linhas GPIO disponíveis:

```bash
gpioinfo
```

Em seguida, procure os nomes de GPIO usados pelos pinos `DC` e `RES`. Se o nome do chip GPIO ou o deslocamento de linha for diferente, atualize os seguintes valores no código de demonstração:

```cpp
const char* GPIO_CHIP_NAME = "gpiochip0";
const unsigned int DC_LINE_OFFSET  = 29;
const unsigned int RES_LINE_OFFSET = 31;
```

### Falha ao solicitar linha GPIO

Se o demo informar que falhou ao solicitar uma linha GPIO, possíveis causas incluem:

1. O pinmux do GPIO não foi configurado como saída.
2. O chip GPIO selecionado está incorreto.
3. O deslocamento de linha selecionado está incorreto.
4. A linha GPIO já está sendo usada por outro processo ou driver.
5. O programa não tem permissão para acessar `/dev/gpiochip*`.

Verificações sugeridas:

1. Confirme se os registradores de pinmux do Pino 29 e do Pino 31 foram configurados. Execute novamente os comandos `jetson-gpio-pinmux-lookup` e `busybox devmem` da seção **GPIO Control** se necessário.
2. Verifique o status da linha GPIO:

```bash
gpioinfo | grep -E "PQ.05|PQ.06"
```

Se a linha já estiver em uso, pare o processo que a está usando ou escolha a linha GPIO correta de acordo com a sua conexão de hardware.

### SPI pode ser aberto, mas o display não mostra nada

Possíveis causas:

1. A fiação do display está incorreta.
2. O caminho do dispositivo SPI está incorreto.
3. Os pinos CS, DC ou RES não estão conectados corretamente.
4. O chip GPIO ou o deslocamento de linha para DC/RES está incorreto.
5. O controlador do display não é ST7789.
6. O display requer uma sequência de inicialização diferente.
7. O pino do backlight não está alimentado.

Verificações sugeridas:

1. Confirme que `VCC` está conectado ao Pino 1.
2. Confirme que `GND` está conectado ao Pino 6.
3. Confirme que `BLK` está conectado ao Pino 17 e que o backlight está ligado.
4. Confirme que `SCL`, `SDA` e `CS` estão conectados ao Pino 23, Pino 19 e Pino 24.
5. Confirme que `RES` e `DC` estão conectados ao Pino 31 e Pino 29.
6. Confirme o chip GPIO e o deslocamento de linha com `gpiofind` ou `gpioinfo`.
7. Reduza a velocidade do SPI e teste novamente.
8. Confirme o modelo do controlador do display no datasheet do módulo de display.

### Backlight está ligado, mas nenhuma imagem é exibida

Se o backlight estiver ligado, mas nenhuma imagem for exibida, a fiação de alimentação pode estar correta, mas a comunicação SPI, o controle GPIO ou a inicialização do display podem estar incorretos.

Por favor, verifique:

1. Se o dispositivo SPI correto está sendo usado.
2. Se o chip GPIO correto e os deslocamentos de linha corretos estão sendo usados para DC e RES.
3. Se o driver de display corresponde ao controlador ST7789.
4. Se a resolução da tela está correta.
5. Se o módulo de display requer configurações de deslocamento de linha ou coluna.

### Cor da imagem está anormal

Possíveis causas:

1. Ordem de cores RGB e BGR não correspondem.
2. Configuração de inversão de display é diferente.
3. O parâmetro `MADCTL` não é adequado para o seu painel.
4. O módulo de display usa uma sequência de inicialização ST7789 ligeiramente diferente.

Soluções sugeridas:

1. Tente alterar o valor de `MADCTL`.
2. Tente ativar ou desativar a inversão de display.
3. Verifique o datasheet do módulo de display ST7789.
4. Confirme se o seu módulo usa ordem de cores RGB ou BGR.

### Direção da imagem está incorreta

Se a imagem estiver girada ou espelhada, modifique o parâmetro do comando `MADCTL` na função de inicialização:

```cpp
WriteCommand(0x36);
WriteData(0x08);
```

O valor correto depende da orientação do módulo de display.

### Atualização do display está lenta

Possíveis causas:

1. A velocidade de clock do SPI é muito baixa.
2. O programa atualiza a tela inteira todas as vezes.
3. O módulo de display tem desempenho de atualização limitado.
4. O demo em C++ usa um método simples de preenchimento de tela inteira para verificação.

Soluções sugeridas:

1. Aumente gradualmente a velocidade de clock do SPI.
2. Evite atualizações de tela inteira desnecessárias.
3. Atualize apenas as áreas alteradas se sua aplicação suportar isso.
4. Use o teste atual de preenchimento de cor apenas como um demo básico de verificação de hardware.

  </TabItem>

  <TabItem value="jp7" label="JetPack 7">

### Nenhum dispositivo `/dev/spidev*` encontrado

Possíveis causas:

1. A interface SPI não está habilitada.
2. A configuração do Jetson-IO não foi salva.
3. O dispositivo não foi reiniciado após habilitar o SPI.
4. A device tree não expõe o nó de dispositivo SPI.
5. A imagem do sistema não inclui a configuração SPI esperada.

Verificações sugeridas:

```bash
ls /dev/spidev*
```

Se nenhum dispositivo SPI for encontrado, execute o Jetson-IO novamente e verifique se `spi1` está habilitado.

### Permissão negada ao acessar SPI ou GPIO

Se você vir um erro de permissão ao executar o demo em C++, tente executá-lo com `sudo`:

```bash
sudo ./st7789_spi_gpiod
```

Você também pode verificar o dispositivo SPI e os dispositivos de caractere GPIO:

```bash
ls -l /dev/spidev*
ls -l /dev/gpiochip*
```

### Linha GPIO não pode ser encontrada

Se `gpiofind PQ.05` ou `gpiofind PQ.06` não retornar nenhum resultado, verifique as linhas GPIO disponíveis:

```bash
gpioinfo
```

Em seguida, procure pelos nomes GPIO usados pelos pinos `DC` e `RES`. Se o nome do chip GPIO ou o deslocamento de linha for diferente, atualize os seguintes valores no código do demo:

```cpp
const char* GPIO_CHIP_NAME = "gpiochip0";
const unsigned int DC_LINE_OFFSET  = 29;
const unsigned int RES_LINE_OFFSET = 31;
```

Confirme também que o Pino 29 e o Pino 31 estão configurados como `gpio` na ferramenta Jetson Expansion Header.

### Falha ao solicitar linha GPIO

Se o demo informar que falhou ao solicitar uma linha GPIO, possíveis causas incluem:

1. O Pino 29 ou o Pino 31 não está configurado como `gpio` na ferramenta Jetson Expansion Header.
2. O chip GPIO selecionado está incorreto.
3. O deslocamento de linha selecionado está incorreto.
4. A linha GPIO já está sendo usada por outro processo ou driver.
5. O programa não tem permissão para acessar `/dev/gpiochip*`.

Verificações sugeridas:

1. Abra o Jetson-IO novamente e confirme que o Pino 29 (`extperiph3_clk`) e o Pino 31 (`extperiph4_clk`) estão definidos como `gpio`.
2. Verifique o status da linha GPIO:

```bash
gpioinfo | grep -E "PQ.05|PQ.06"
```

Se a linha já estiver em uso, pare o processo que a está usando ou escolha a linha GPIO correta de acordo com a sua conexão de hardware.

### SPI pode ser aberto, mas o display não mostra nada

Possíveis causas:

1. A fiação do display está incorreta.
2. O caminho do dispositivo SPI está incorreto.
3. Os pinos CS, DC ou RES não estão conectados corretamente.
4. O chip GPIO ou o deslocamento de linha para DC/RES está incorreto.
5. O Pino 29 ou o Pino 31 não está configurado como `gpio` no Jetson-IO.
6. O controlador do display não é ST7789.
7. O display requer uma sequência de inicialização diferente.
8. O pino do backlight não está alimentado.

Verificações sugeridas:

1. Confirme que `VCC` está conectado ao Pino 1.
2. Confirme que `GND` está conectado ao Pino 6.
3. Confirme que `BLK` está conectado ao Pino 17 e que o backlight está ligado.
4. Confirme que `SCL`, `SDA` e `CS` estão conectados ao Pino 23, Pino 19 e Pino 24.
5. Confirme que `RES` e `DC` estão conectados ao Pino 31 e Pino 29.
6. Confirme o chip GPIO e o deslocamento de linha com `gpiofind` ou `gpioinfo`.
7. Confirme que o Pino 29 e o Pino 31 estão configurados como `gpio` no Jetson-IO.
8. Reduza a velocidade do SPI e teste novamente.
9. Confirme o modelo do controlador do display no datasheet do módulo de display.

### Backlight está ligado, mas nenhuma imagem é exibida

Se o backlight estiver ligado, mas nenhuma imagem for exibida, a fiação de alimentação pode estar correta, mas a comunicação SPI, o controle GPIO ou a inicialização do display podem estar incorretos.

Por favor, verifique:

1. Se o dispositivo SPI correto está sendo usado.
2. Se o chip GPIO correto e os deslocamentos de linha corretos estão sendo usados para DC e RES.
3. Se o Pino 29 e o Pino 31 estão configurados como `gpio` no Jetson-IO.
4. Se o driver de display corresponde ao controlador ST7789.
5. Se a resolução da tela está correta.
6. Se o módulo de display requer configurações de deslocamento de linha ou coluna.

### Cor da imagem está anormal

Possíveis causas:

1. Ordem de cores RGB e BGR não correspondem.
2. Configuração de inversão de display é diferente.
3. O parâmetro `MADCTL` não é adequado para o seu painel.
4. O módulo de display usa uma sequência de inicialização ST7789 ligeiramente diferente.

Soluções sugeridas:

1. Tente alterar o valor de `MADCTL`.
2. Tente ativar ou desativar a inversão de display.
3. Verifique o datasheet do módulo de display ST7789.
4. Confirme se o seu módulo usa ordem de cores RGB ou BGR.

### Direção da imagem está incorreta

Se a imagem estiver girada ou espelhada, modifique o parâmetro do comando `MADCTL` na função de inicialização:

```cpp
WriteCommand(0x36);
WriteData(0x08);
```

O valor correto depende da orientação do módulo de display.

### Atualização do display está lenta

Possíveis causas:

1. A velocidade de clock do SPI é muito baixa.
2. O programa atualiza a tela inteira todas as vezes.
3. O módulo de display tem desempenho de atualização limitado.
4. O demo em C++ usa um método simples de preenchimento de tela inteira para verificação.

Soluções sugeridas:

1. Aumente gradualmente a velocidade de clock do SPI.
2. Evite atualizações de tela inteira desnecessárias.
3. Atualize apenas as áreas alteradas se sua aplicação suportar isso.
4. Use o teste atual de preenchimento de cor apenas como um demo básico de verificação de hardware.

  </TabItem>
</Tabs>

## Resumo

Neste wiki, apresentamos como conectar um display SPI ao Seeed reComputer J4012 Classic através do conector de 40 pinos. O fluxo de trabalho geral do display SPI inclui fazer a fiação do display, habilitar a interface SPI, verificar o nó de dispositivo SPI, instalar dependências, compilar um demo em C++ e executar um teste de display. O JetPack 5 usa GPIO via sysfs, o JetPack 6 usa `libgpiod` com configuração manual de pinmux, e o JetPack 7 usa `libgpiod` com pinos GPIO configurados diretamente na ferramenta Jetson Expansion Header.

O LCD SPI ST7789 foi usado como módulo de display de exemplo neste guia. Para outros displays SPI, o processo geral é semelhante, mas o driver de display, a resolução, a sequência de inicialização e os detalhes de fiação devem ser ajustados de acordo com o módulo de display real.

## Recursos

- [NVIDIA® Jetson Orin™ NX 16GB AI Device - reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)

- [reComputer J401x datasheet](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)

- [NVIDIA Jetson.GPIO mapping](https://github.com/NVIDIA/jetson-gpio/blob/master/lib/python/Jetson/GPIO/gpio_pin_data.py)

- [Linux spidev userspace API](https://docs.kernel.org/spi/spidev.html)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>