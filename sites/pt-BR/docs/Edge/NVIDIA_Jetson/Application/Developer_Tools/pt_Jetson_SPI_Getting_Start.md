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
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_spi_getting_start
sku: 110110145
last_update:
  date: 06/01/2026
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
| Cabos Dupont                 | Usados para conectar o display ao conector de 40 pinos |
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

O reComputer J4012 Classic fornece um conector de expansão de 40 pinos. Sinais SPI e pinos GPIO podem ser usados através deste conector para conectar pequenos módulos de display.

![40-pin header pinout](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_01.png)

Figura 1. Pinagem do conector de 40 pinos do reComputer J4012 Classic

### Exemplo de fiação de display SPI: ST7789

Neste guia, um display SPI ST7789 é usado como módulo de display de exemplo. Conecte o display ao conector de 40 pinos de acordo com a tabela abaixo.

| Pino ST7789 | Pino de 40 pinos do J4012 Classic | Função      | Descrição                                 |
| ----------- | ---------------------------------- | ----------- | ----------------------------------------- |
| GND         | Pino 6                             | GND         | Terra                                     |
| VCC         | Pino 1                             | 3.3V        | Entrada de alimentação para o display     |
| SCL         | Pino 23                            | SPI SCLK    | Sinal de clock SPI                        |
| SDA         | Pino 19                            | SPI MOSI    | Dados SPI do J4012 Classic para o display |
| RES         | Pino 31                            | GPIO / PQ.06 | Sinal de reset de hardware               |
| DC          | Pino 29                            | GPIO / PQ.05 | Seleção de dados / comando               |
| CS          | Pino 24                            | SPI CS      | Seleção de chip SPI                       |
| BLK         | Pino 17                            | 3.3V        | Alimentação do backlight, sempre ligado   |

![ST7789 SPI display wiring](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_02.png)

Figura 2. Fiação entre o reComputer J4012 Classic e o display SPI ST7789

## Habilitar a interface SPI

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

## Verificar o dispositivo SPI

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

Neste guia, o display ST7789 usa os sinais SPI conectados aos pinos 19, 23 e 24. O código de exemplo usa `/dev/spidev0.0` por padrão. Se o seu sistema gerar um nó de dispositivo SPI diferente, modifique o caminho do dispositivo SPI no código.

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

## Exportar pinos GPIO

Antes de executar o demo de display, exporte os pinos GPIO usados por `DC` e `RES`. O demo controla esses dois pinos através da interface sysfs GPIO.

Neste guia:

| Sinal | Pino de 40 pinos | Nome do GPIO | Número do GPIO |
| ------ | ---------------- | ------------ | -------------- |
| DC     | Pino 29          | `PQ.05`      | `453`          |
| RES    | Pino 31          | `PQ.06`      | `454`          |

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

## Executar o demo de display ST7789

Esta seção usa um demo em C++ para verificar se o display SPI ST7789 pode funcionar corretamente no reComputer J4012 Classic.

O demo executa as seguintes operações:

1. Abre o dispositivo SPI `/dev/spidev0.0`.

2. Configura o modo SPI, bits por palavra e velocidade SPI.

3. Controla os pinos `DC` e `RES` através do sysfs GPIO.

4. Inicializa o controlador de display ST7789.

5. Preenche continuamente a tela com diferentes cores RGB565.

A fiação usada neste demo é mostrada abaixo.

| Sinal   | Pino de 40 pinos | GPIO / Dispositivo        |
| -------- | ---------------- | ------------------------- |
| SPI SCLK | Pino 23          | Clock SPI                 |
| SPI MOSI | Pino 19          | SPI MOSI                  |
| SPI CS   | Pino 24          | SPI CS                    |
| RES      | Pino 31          | `/sys/class/gpio/PQ.06`   |
| DC       | Pino 29          | `/sys/class/gpio/PQ.05`   |
| BLK      | Pino 17          | 3.3V                      |

Crie um arquivo chamado `st7789_spi.cpp`:

```bash
nano st7789_spi.cpp
```

Adicione o seguinte código de demo em C++:

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

Compile o demo:

```bash
g++ st7789_spi.cpp -o st7789_spi
```

Execute o demo:

```bash
sudo ./st7789_spi
```

Se a fiação e a configuração de SPI estiverem corretas, o display ST7789 deve atualizar continuamente com cores diferentes.

![ST7789 display demo result](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_gif_01.gif)

Figura 7. Resultado do demo do display ST7789

## Explicação do código

### Inicialização do SPI

O demo abre `/dev/spidev0.0` e configura a interface SPI da seguinte forma.

| Parâmetro     | Valor            |
| ------------- | ---------------- |
| Dispositivo SPI | `/dev/spidev0.0` |
| Modo SPI      | `SPI_MODE_0`     |
| Bits por palavra | `8`              |
| Velocidade SPI | `24000000 Hz`    |

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

| Sinal | Pino de 40 pinos | caminho sysfs GPIO     |
| ------ | ---------- | ----------------------- |
| DC     | Pino 29    | `/sys/class/gpio/PQ.05` |
| RES    | Pino 31    | `/sys/class/gpio/PQ.06` |

O pino `DC` é usado para alternar entre modo de comando e modo de dados. O pino `RES` é usado para resetar o display ST7789.

### Inicialização do ST7789

O demo inicializa o display ST7789 com os seguintes comandos.

| Comando | Descrição            |
| ------- | --------------------- |
| `0x11`  | Sleep Out             |
| `0x3A`  | Pixel Format Set      |
| `0x05`  | Formato RGB565        |
| `0x36`  | Memory Access Control |
| `0x21`  | Display Inversion On  |
| `0x29`  | Display On            |

### Teste de preenchimento de tela

O demo usa o formato RGB565 para preencher a tela inteira. A resolução do display usada no demo é:

```cpp
const int width = 240;
const int height = 320;
```

Se o seu display ST7789 usar uma resolução diferente, modifique esses valores de acordo com o tamanho real da tela.

### Transferência de dados SPI

O buffer de tela cheia é maior do que uma única pequena transferência SPI. Portanto, o demo envia os dados do display em blocos:

```cpp
const size_t CHUNK_SIZE = 4096;
```

Isso evita limitações de tamanho de transferência e torna a atualização de tela cheia mais estável.

## Solução de problemas

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

Se nenhum dispositivo SPI for encontrado, execute o Jetson-IO novamente e verifique se o SPI está habilitado.

### Permissão negada ao acessar SPI ou GPIO

Se você vir um erro de permissão ao executar o demo em C++, tente executá-lo com `sudo`:

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

Se `/sys/class/gpio/PQ.05` ou `/sys/class/gpio/PQ.06` não existir, a nomenclatura ou o método de exportação de GPIO pode ser diferente na imagem do seu sistema.

Verifique os nós GPIO disponíveis:

```bash
ls /sys/class/gpio/
```

Em seguida, modifique os caminhos de GPIO no código do demo de acordo com o seu sistema real.

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

### Backlight está ligado, mas nenhuma imagem é exibida

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

2. Tente habilitar ou desabilitar a inversão de display.

3. Verifique o datasheet do módulo de display ST7789.

4. Confirme se o seu módulo usa ordem de cores RGB ou BGR.

### Direção da imagem está incorreta

Se a imagem estiver rotacionada ou espelhada, modifique o parâmetro do comando `MADCTL` na função de inicialização:

```cpp
WriteCommand(0x36);
WriteData(0x08);
```

O valor correto depende da orientação do módulo de display.

### Atualização do display está lenta

Possíveis causas:

1. Velocidade de clock SPI é muito baixa.

2. O programa atualiza a tela inteira todas as vezes.

3. O módulo de display tem desempenho de atualização limitado.

4. O demo em C++ usa um método simples de preenchimento de tela cheia para verificação.

Soluções sugeridas:

1. Aumente gradualmente a velocidade do clock SPI.

2. Evite atualizações de tela cheia desnecessárias.

3. Atualize apenas as áreas alteradas se a sua aplicação suportar isso.

4. Use o teste atual de preenchimento de cor apenas como um demo básico de verificação de hardware.

## Resumo

Neste wiki, apresentamos como conectar um display SPI ao Seeed reComputer J4012 Classic através do conector de 40 pinos. O fluxo de trabalho geral do display SPI inclui a fiação do display, habilitar a interface SPI, verificar o nó de dispositivo SPI, instalar dependências, compilar um demo em C++ e executar um teste de display.

O LCD SPI ST7789 foi usado como módulo de display de exemplo neste guia. Para outros displays SPI, o processo geral é semelhante, mas o driver de display, a resolução, a sequência de inicialização e os detalhes de fiação devem ser ajustados de acordo com o módulo de display real.

## Recursos

- [NVIDIA® Jetson Orin™ NX 16GB AI Device - reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)

- [reComputer J401x datasheet](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)

- [NVIDIA Jetson.GPIO mapping](https://github.com/NVIDIA/jetson-gpio/blob/master/lib/python/Jetson/GPIO/gpio_pin_data.py)

- [Linux spidev userspace API](https://docs.kernel.org/spi/spidev.html)

## Suporte técnico e discussão de produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
