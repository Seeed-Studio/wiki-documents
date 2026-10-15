---
title: XIAO ESP32-C5 com Zephyr(RTOS)
keywords:
  - xiao
  - esp32c5
  - Zephyr
  - idf
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_with_zephyr
sku: 100010048
last_update:
  date: 4/28/2026
  author: Zeller
createdAt: '2026-04-28'
updatedAt: '2026-05-06'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_with_zephyr/
---

O sistema operacional [**Zephyr**](https://www.zephyrproject.org/) é baseado em um kernel de baixo consumo de recursos, projetado para uso em sistemas embarcados e com recursos limitados: desde sensores ambientais embarcados simples e wearables com LED até controladores embarcados sofisticados, smartwatches e aplicações IoT sem fio.

## Introdução

### Preparação de hardware

Prepare uma placa XIAO ESP32-C5 para dar suporte às seguintes verificações e trabalhos relacionados.

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Preparação de software

Este artigo foi desenvolvido e verificado com base no Ubuntu 24.04 LTS. Consulte a documentação relevante para implantar o ambiente de desenvolvimento no Ubuntu, Mac e Windows. [Guia de Introdução ao Zephyr](https://docs.zephyrproject.org/latest/develop/getting_started/index.html)

:::tip
É oficialmente recomendado usar **Ubuntu 24.04 LTS e versões posteriores**, o que pode evitar de forma eficaz problemas causados por dependências de ambiente e economizar seu tempo.
:::

1. Ative o ambiente virtual.

Crie um novo ambiente virtual:

```bash
python3 -m venv ~/zephyrproject/.venv
```

Ative o ambiente virtual:

```bash
source ~/zephyrproject/.venv/bin/activate
```

2. Abra a pasta **blinky**.

```bash
cd ~/zephyrproject/zephyr/samples/basic/blinky
```

3. Atualize o arquivo overlay e o arquivo prj.conf.

A saída padrão de log da porta serial é mapeada para GPIO11 e GPIO12, correspondendo a D6 e D7 no XIAO ESP32‑C5.
Para usar USB Serial/JTAG para saída de log, é necessário remapear os pinos da porta serial para os pinos correspondentes do USB Serial/JTAG. Ao mesmo tempo, de acordo com o projeto de hardware do XIAO ESP32‑C5, você também deve configurar o pino do LED do usuário para GPIO27.

:::tip
Se você não estiver familiarizado com o pinout do XIAO ESP32-C5, pode verificar a [Lista de pinos](https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_getting_started/#visão-geral-do-hardware)
:::

Crie um novo arquivo overlay

```bash
nano ~/zephyrproject/zephyr/samples/basic/blinky/boards/esp32c5_devkitc_esp32c5_hpcore.overlay
```

  Adicione o conteúdo do overlay

```overlay
/ {
    chosen {
        zephyr,console = &usb_serial;
        zephyr,shell-uart = &usb_serial;
    };

    aliases {
        led0 = &led0;
    };

    leds {
        compatible = "gpio-leds";
        led0: led_0 {
            gpios = <&gpio0 27 GPIO_ACTIVE_HIGH>;
            label = "LED0";
        };
    };
};

&usb_serial {
    status = "okay";
};
```

Após adicionar o conteúdo, pressione Ctrl + O para salvar o arquivo e, em seguida, Ctrl + X para sair.

Modifique o conteúdo de prj.conf

```bash
nano ~/zephyrproject/zephyr/samples/basic/blinky/boards/prj.conf
```

Modifique o conteúdo para o seguinte, ajustando principalmente a relação de mapeamento da UART.

```prj
CONFIG_USB_DEVICE_STACK=y
CONFIG_USB_CDC_ACM=y
CONFIG_UART_LINE_CTRL=y
CONFIG_GPIO=y
CONFIG_LOG=y
```

4. Defina a placa alvo como **esp32c5_devkitc** e inicie a compilação.

:::tip
**hpcore** significa High Performance Core. Geralmente é usado para executar programas principais e tarefas com altos requisitos de desempenho.
:::

```bash
west  build -p always -b esp32c5_devkitc/esp32c5/hpcore ~/zephyrproject/zephyr/samples/basic/blinky
```

Sintomas de compilação bem-sucedida

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_1.png" style={{width:800, height:'auto'}}/></div>

5. Gravar o dispositivo

:::tip
Antes de gravar o programa no dispositivo, o XIAO ESP32-C5 deve ser configurado no modo Bootloader Download.

Método:
Mantenha pressionado o botão BOOT e, em seguida, ligue o dispositivo.
:::

Verifique o dispositivo de porta serial. O dispositivo geralmente é `/dev/ttyACM0`.

```bash
ls /dev/ttyACM*
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_2.png" style={{width:800, height:'auto'}}/></div>

Devido a restrições de permissão de acesso ao arquivo de dispositivo da porta serial, é necessário modificar suas permissões para suportar operações de leitura e gravação.

```bash
sudo chmod 666 /dev/ttyACM0
```

Especifique o dispositivo de porta serial e inicie o download.

```bash
west flash --esp-device /dev/ttyACM0
```

Saída de exemplo para download bem-sucedido

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_3.png" style={{width:800, height:'auto'}}/></div>

6. Demonstração do fenômeno

Após o download bem-sucedido, o LED começará a piscar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/z1.gif" style={{width:800, height:'auto'}}/></div>

Abra a porta serial, e as informações de log de LED ON ou LED OFF serão impressas.

```bash
west espressif monitor --port /dev/ttyACM0
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_4.png" style={{width:800, height:'auto'}}/></div>

## Aplicação

O XIAO ESP32-C5 suporta o uso de placas de expansão compatíveis com a série XIAO, permitindo a fácil expansão de periféricos e cenários de aplicação.

### Usando a Expansion Board Base para XIAO

A Expansion Board Base para XIAO está equipada com uma interface IIC e uma tela OLED onboard de 0,96 polegada.

#### Preparação de hardware

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
   <th>Seeed Studio Expansion Board Base para XIAO com Grove OLED</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/z/h/zheng1.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### Preparação de software

De acordo com a definição de pinos do XIAO ESP32-C5, GPIO23 corresponde a SDA, que é D4; GPIO24 corresponde a SCL, que é D5. É necessário criar e modificar o conteúdo do nó da árvore de dispositivos.

1. Abra o exemplo de display.

```bash
cd ~/zephyrproject/zephyr/samples/drivers/display
```

2. Adicione o arquivo overlay.

```bash
nano esp32c5_devkitc_esp32c5_hpcore.overlay
```

Adicione o conteúdo do nó da árvore de dispositivos.

```dts
#include <zephyr/dt-bindings/pinctrl/esp32c5-pinctrl.h>
#include <zephyr/dt-bindings/i2c/i2c.h>

&pinctrl {
    i2c0_custom: i2c0_custom {
        group1 {
            pinmux = <I2C0_SDA_GPIO23>,
                     <I2C0_SCL_GPIO24>;
            bias-pull-up;
            drive-open-drain;
            output-high;
        };
    };
};

&i2c0 {
    status = "okay";
    clock-frequency = <I2C_BITRATE_FAST>;
    pinctrl-0 = <&i2c0_custom>;
    pinctrl-names = "default";

    ssd1306_128x64: ssd1306@3c {
        compatible = "solomon,ssd1306";
        reg = <0x3c>;
        width = <128>;
        height = <64>;
        segment-offset = <0>;
        page-offset = <0>;
        display-offset = <0>;
        multiplex-ratio = <63>;
        segment-remap;
        com-invdir;
        prechargep = <0x22>;
    };
};

/ {
    chosen {
        zephyr,display = &ssd1306_128x64;
    };
};
```

3. Compile e grave

```bash
west build -p always -b esp32c5_devkitc/esp32c5/hpcore   ~/zephyrproject/zephyr/samples/drivers/display

sudo chmod 666 /dev/ttyACM0

west flash
```

#### Resultado

A Expansion Board Base para XIAO exibirá um efeito de tela.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_5.jpg" style={{width:800, height:'auto'}}/></div>

### Usando o Round Display para Seeed Studio XIAO

O Round Display para Seeed Studio XIAO é um display redondo especialmente projetado para a série XIAO. Ele está equipado com o chip driver GC9A01 onboard e adota o protocolo de comunicação SPI padrão.

#### Preparação de hardware

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
   <th>Round Display para Seeed Studio XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-104030087-seeed-studio-round-display-for-xiao-new-first.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### Preparação de software

1. Abra o exemplo de display.

```bash
cd ~/zephyrproject/zephyr/samples/drivers/display
```

2. Adicione o arquivo overlay.

```bash
nano esp32c5_devkitc_esp32c5_hpcore.overlay
```

Adicione o conteúdo do nó da árvore de dispositivos.

<details>
<summary>esp32c5_devkitc_esp32c5_hpcore.overlay</summary>

```dts
/*
 * Copyright (c) 2026
 * SPDX-License-Identifier: Apache-2.0
 *
 * Standalone overlay for GC9A01 round display on XIAO ESP32-C5.
 * Does not depend on seeed_xiao_round_display shield.
 *
 * Pin mapping (XIAO ESP32-C5):
 *   D1  = GPIO0  -> display CS  (active low)
 *   D2  = GPIO25 -> SD card CS  (active low)
 *   D3  = GPIO7  -> display DC  (active high)
 *   D4  = GPIO23 -> SDA
 *   D5  = GPIO24 -> SCL
 *   D6  = GPIO11 -> TX (disabled, reused for backlight control)
 *   D7  = GPIO12 -> touch IRQ   (active low)
 *   D8  = GPIO8  -> SCK
 *   D9  = GPIO9  -> MISO
 *   D10 = GPIO10 -> MOSI
 */

#include <freq.h>
#include <zephyr/dt-bindings/pinctrl/esp32c5-pinctrl.h>
#include <zephyr/dt-bindings/display/panel.h>

/ {
    chosen {
        zephyr,display = &gc9a01_round_display;
        zephyr,touch = &chsc6x_round_display;
    };

    lvgl_pointer {
        compatible = "zephyr,lvgl-pointer-input";
        input = <&chsc6x_round_display>;
    };

    vbatt {
        compatible = "voltage-divider";
        io-channels = <&adc0 0>;
        output-ohms = <470000>;
        full-ohms = <940000>;
    };

    aliases {
        rtc = &pcf8563_round_display;
    };
};

&pinctrl {
    /* I2C0: SDA = GPIO23 (D4), SCL = GPIO24 (D5) */
    i2c0_custom: i2c0_custom {
        group1 {
            pinmux = <I2C0_SDA_GPIO23>,
                     <I2C0_SCL_GPIO24>;
            bias-pull-up;
            drive-open-drain;
            output-high;
        };
    };

    /* SPI2: SCK = GPIO8 (D8), MISO = GPIO9 (D9), MOSI = GPIO10 (D10) */
    spim2_custom: spim2_custom {
        group1 {
            pinmux = <SPIM2_MISO_GPIO9>,
                     <SPIM2_SCLK_GPIO8>;
        };
        group2 {
            pinmux = <SPIM2_MOSI_GPIO10>;
            output-low;
        };
    };
};

/* D6 = GPIO11 reused for backlight, disable UART TX */
&uart0 {
    status = "disabled";
};

&adc0 {
    status = "okay";
};

&i2c0 {
    status = "okay";
    clock-frequency = <I2C_BITRATE_FAST>;
    pinctrl-0 = <&i2c0_custom>;
    pinctrl-names = "default";

    /* RTC, address 0x51 */
    pcf8563_round_display: pcf8563@51 {
        status = "okay";
        compatible = "nxp,pcf8563";
        reg = <0x51>;
    };

    /* Touch controller, IRQ = GPIO12 (D7) */
    chsc6x_round_display: chsc6x@2e {
        status = "okay";
        compatible = "chipsemi,chsc6x";
        reg = <0x2e>;
        irq-gpios = <&gpio0 12 GPIO_ACTIVE_LOW>;
        screen-width = <240>;
        screen-height = <240>;
    };
};

&spi2 {
    status = "okay";
    pinctrl-0 = <&spim2_custom>;
    pinctrl-names = "default";
    /* D1 = GPIO0  -> display CS
     * D2 = GPIO25 -> SD card CS */
    cs-gpios = <&gpio0 0  GPIO_ACTIVE_LOW>,
               <&gpio0 25 GPIO_ACTIVE_LOW>;

    /* MIPI DBI SPI wrapper for GC9A01, DC = GPIO7 (D3) */
    round_display_mipi_dbi: mipi_dbi {
        compatible = "zephyr,mipi-dbi-spi";
        spi-dev = <&spi2>;
        dc-gpios = <&gpio0 7 GPIO_ACTIVE_HIGH>;
        write-only;
        #address-cells = <1>;
        #size-cells = <0>;

        gc9a01_round_display: gc9a01@0 {
            status = "okay";
            compatible = "galaxycore,gc9x01x";
            reg = <0>;
            mipi-max-frequency = <DT_FREQ_M(100)>;
            pixel-format = <PANEL_PIXEL_FORMAT_RGB_565>;
            width = <240>;
            height = <240>;
            display-inversion;
        };
    };

    /* SD card slot, CS = GPIO25 (D2) */
    sdhc_round_display: sdhc@1 {
        compatible = "zephyr,sdhc-spi-slot";
        reg = <1>;
        status = "okay";
        spi-max-frequency = <DT_FREQ_M(24)>;
        mmc {
            compatible = "zephyr,sdmmc-disk";
            disk-name = "SD";
            status = "okay";
        };
    };
};
```

</details>

3. Compile e faça o flash

```bash
west build -p always -b esp32c5_devkitc/esp32c5/hpcore   ~/zephyrproject/zephyr/samples/drivers/display

sudo chmod 666 /dev/ttyACM0

west flash
```

#### Resultado

Após fazer o flash do firmware, pressione a tecla e o conteúdo da tela será exibido no Round Display for Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zephyr_6.jpg" style={{width:800, height:'auto'}}/></div>

## Conclusão

Acredito que, até agora, você basicamente dominou o desenvolvimento com Zephyr no XIAO ESP32-C5. Se tiver qualquer ideia criativa, sinta-se à vontade para desenvolver seus projetos e compartilhá-los com a comunidade, permitindo que outros vejam seus excelentes trabalhos.

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
