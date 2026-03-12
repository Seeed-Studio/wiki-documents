---
description: XIAO ESP32S3(sense) com Zephyr(RTOS)
title: XIAO ESP32S3(sense) com Zephyr(RTOS)
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /xiao_esp32s3_zephyr_rtos
last_update:
  date: 3/20/2024
  author: timo614
createdAt: '2023-07-26'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_zephyr_rtos/
---

# XIAO ESP32S3(sense) com Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-esp32s3.png"/></div>

Este wiki aborda o suporte do [Zephyr](https://www.zephyrproject.org/) para o [Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started/). Com a ajuda deste guia, você poderá utilizar o conjunto de recursos disponível para a placa.

## O que é o [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

O sistema operacional [**Zephyr**](https://www.zephyrproject.org/) é baseado em um kernel de pequeno porte projetado para uso em sistemas embarcados e com restrição de recursos: desde sensores ambientais embarcados simples e wearables com LEDs até controladores embarcados sofisticados, smartwatches e aplicações sem fio de IoT.

Para cada dispositivo suportado o Zephyr possui um arquivo [devicetree](https://docs.zephyrproject.org/latest/build/dts/index.html) que descreve a placa e seus recursos. A [página da placa Xiao ESP32S3 no Zephyr](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32s3/doc/index.html#supported-features) descreve os recursos suportados atualmente disponíveis, que são definidos pelo [arquivo dts da placa](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/seeed/xiao_esp32s3/xiao_esp32s3_esp32s3_procpu.yaml#L7).

*Referência: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## Primeiros Passos

O primeiro passo para trabalhar com o Zephyr é configurar o SDK e o toolchain para desenvolvimento local. O [guia de primeiros passos do Zephyr](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) deve ser consultado para o procedimento de configuração associado necessário para o seu ambiente.

Depois que o toolchain do Zephyr estiver configurado e um SDK associado tiver sido baixado, você pode iniciar o desenvolvimento de aplicações.

Para o Xiao ESP32S3, o [arquivo de descrição da placa](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32s3/doc/index.html) pode ser consultado para mais informações de configuração.

Para buscar os blobs necessários para usar o ESP32S3, execute o seguinte comando:

```
west blobs fetch hal_espressif
```

Depois disso, os exemplos podem ser compilados e gravados na placa.

O exemplo mais simples é executar o exemplo "Hello World" na placa. Depois de mudar para o diretório da instalação do Zephyr, execute os seguintes comandos.

```
west build -p always -b xiao_esp32s3 samples/hello_world
west flash
west espressif monitor
```

Com o comando final, você deverá ver a resposta exibindo a saudação "Hello World!".

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
Hello World! xiao_esp32s3
```

Para ajudar no processo de uso do Zephyr com o Xiao e sua placa de expansão, foi criado um repositório com vários overlays e configurações usados aqui. Presume-se que os comandos incluídos neste artigo do wiki estejam localizados em `../applications/xiao-zephyr-examples` em relação à raiz do zephyr. Um caminho alternativo pode ser fornecido aos comandos abaixo atualizando-o.

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## Preparação de Hardware

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32S3 Sense</th>
      <th>Placa de Expansão Seeed Studio</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### Conhecimentos para o Desenvolvedor

#### Placa de Expansão XIAO

  Para usar módulos Grove com o Seeed Studio XIAO ESP32S3, utilizaremos uma [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) e conectaremos o XIAO ESP32S3 nela.

  Depois disso, os conectores Grove na placa podem ser usados para conectar módulos Grove

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### Definições de Pinos

  Você precisa seguir o gráfico abaixo para usar os números de pinos internos apropriados ao conectar os módulos Grove aos conectores Grove no Grove Shield para Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg"style={{width:900, height:'auto'}}/></div>

### Funcionalidades Principais

- Bluetooth
- Wi-Fi
- TFLite

#### Bluetooth

Para testar essa configuração, podemos usar um exemplo existente com o Zephyr:

```
west build -p always -b xiao_esp32s3 samples/bluetooth/observer
west flash
west espressif monitor
```

Você verá um console disponível para enviar comandos para a placa:

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
Starting Observer Demo
Started scanning...
Exiting main thread.
Device found: EC:11:27:22:AF:D2 (public) (RSSI -77), type 0, AD data len 31
Device found: 02:96:58:9A:B4:64 (random) (RSSI -78), type 3, AD data len 31
Device found: 66:A5:E1:CF:8C:35 (random) (RSSI -58), type 0, AD data len 17
Device found: 62:09:50:DB:85:D0 (random) (RSSI -92), type 0, AD data len 14
Device found: C4:5A:95:A7:96:7D (random) (RSSI -78), type 0, AD data len 20
Device found: E5:44:60:88:DB:99 (random) (RSSI -82), type 0, AD data len 27
Device found: 66:18:ED:DD:74:1C (random) (RSSI -71), type 0, AD data len 17
Device found: 37:D2:FC:F8:FA:B8 (random) (RSSI -75), type 3, AD data len 31
Device found: 40:B8:84:E5:5F:A4 (random) (RSSI -70), type 2, AD data len 28
Device found: 44:EB:7C:AA:89:0B (random) (RSSI -83), type 0, AD data len 18
Device found: 71:AC:4A:98:5E:73 (random) (RSSI -72), type 2, AD data len 4
Device found: 60:D9:62:70:EF:4C (random) (RSSI -95), type 2, AD data len 4
Device found: D8:7D:FC:AE:37:F0 (random) (RSSI -67), type 3, AD data len 8
Device found: 48:1F:C0:29:77:C2 (random) (RSSI -73), type 2, AD data len 4
Device found: 46:B7:35:F5:D7:BE (random) (RSSI -86), type 3, AD data len 17
Device found: E5:4A:F1:1C:3C:39 (random) (RSSI -88), type 3, AD data len 8
```

```
CONFIG_BT=y
CONFIG_BT_OBSERVER=y
```

O [arquivo conf](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf) aqui habilita recursos relacionados a bluetooth para a compilação do Zephyr.

#### Wi-Fi

Para testar essa configuração, podemos usar um exemplo existente com o Zephyr:

```
west build -p always -b xiao_esp32s3 samples/net/wifi
west flash
west espressif monitor
```

Você verá um console disponível para enviar comandos para a placa:

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
uart:~$
```

Existem vários comandos que permitem ver e conectar a redes locais; consulte o [README do exemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/README.rst) para mais informações.

```
uart:~$ wifi scan
Scan requested

Num  | SSID                             (len) | Chan (Band)   | RSSI | Security        | BSSID             | MFP
1    | Zephytopia                       10    | 6    (2.4GHz) | -42  | WPA2-PSK        |                   | Disable
2    | Maceronia                        9     | 6    (2.4GHz) | -43  | WPA2-PSK        |                   | Disable

```

Vamos nos aprofundar um pouco neste exemplo para ver por que ele funciona:

```
&wifi {
 status = "okay";
};
```

O [arquivo de overlay do app](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32s3.overlay) é usado para configurar vários componentes da placa. Usando este arquivo o exemplo pode ser utilizado, pois o overlay informa à lógica do exemplo para habilitar o Wi-Fi.

```
CONFIG_WIFI=y

CONFIG_NETWORKING=y
CONFIG_NET_L2_ETHERNET=y

CONFIG_NET_IPV6=n
CONFIG_NET_IPV4=y
CONFIG_NET_DHCPV4=y
CONFIG_ESP32_WIFI_STA_AUTO_DHCPV4=y

CONFIG_NET_LOG=y
```

O [arquivo conf](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32s3.conf) aqui habilita vários recursos relacionados a rede para a compilação do Zephyr.

#### TFLite - Hello World

Habilite o TFLite com o Zephyr e atualize:

```
west config manifest.project-filter -- +tflite-micro
west update
```

Compile o exemplo e grave na sua placa:

```
west build -p always -b xiao_esp32s3 samples/modules/tflite-micro/hello_world
west flash
west espressif monitor
```

Você verá os resultados retornados pelo console:

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
x_value: 1.0*2^-127, y_value: 1.0*2^-127

x_value: 1.2566366*2^-2, y_value: 1.4910772*2^-2

x_value: 1.2566366*2^-1, y_value: 1.1183078*2^-1

x_value: 1.8849551*2^-1, y_value: 1.677462*2^-1

x_value: 1.2566366*2^0, y_value: 1.9316229*2^-1

x_value: 1.5707957*2^0, y_value: 1.0420598*2^0

x_value: 1.8849551*2^0, y_value: 1.9146791*2^-1

x_value: 1.0995567*2^1, y_value: 1.6435742*2^-1

x_value: 1.2566366*2^1, y_value: 1.0674761*2^-1

x_value: 1.4137159*2^1, y_value: 1.8977352*2^-3
```

Informações adicionais sobre o TFLite estão fora do escopo deste guia, mas o exemplo serve como um guia para as capacidades do dispositivo e os componentes necessários para executar a configuração do TFLite.

### Componentes Adicionais

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Display I2C
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Botão
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Buzzer
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Cartão SD
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Round Display for Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)

#### Grove - Expansion Board - Display I2C

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32s3/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23s3_zephyr/xiao_expansion_oled.jpg" style={{width:600, height:'auto'}}/></div>

Para testar essa configuração podemos usar um exemplo existente com o Zephyr:

```
west build -p always -b xiao_esp32s3 samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash
```

Você verá um display mostrando vários quadrados pretos e um quadrado piscando no canto, dado que esse display suporta apenas duas cores.

Vamos analisar um pouco esse exemplo para ver por que ele funciona:

```
/ {
    chosen {
      zephyr,display = &ssd1306;
    };
};

&xiao_i2c {
  status = "okay";

  ssd1306: ssd1306@3c {
    compatible = "solomon,ssd1306fb";
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

```

O shield configura uma tela OLED SSD1306 no registrador 0x3C. Ela é selecionada como o display do Zephyr na seção `chosen`.

#### Grove - Expansion Board - Botão

Para testar essa configuração podemos usar um exemplo existente com o Zephyr:

```
west build -p always -b xiao_esp32s3 samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board
west flash
west espressif monitor
```

Pressionar o botão com o exemplo irá acionar o LED onboard para acender.

Você verá resultados retornados pelo console:

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
Set up button at gpio@60004000 pin 2
Set up LED at gpio@60004000 pin 21
Press the button
Button pressed at 842621292
Button pressed at 1164489270
Button pressed at 1329015357
Button pressed at 1577684271
Button pressed at 1728636675
Button pressed at 1728755988
Button pressed at 1822426500
```

Vamos analisar um pouco esse exemplo para ver por que ele funciona:

```
/ {
    aliases {
      sw0 = &xiao_button0;
    };

    buttons {
      compatible = "gpio-keys";
      xiao_button0: button_0 {
        gpios = <&xiao_d 1 (GPIO_PULL_UP | GPIO_ACTIVE_LOW)>;
        label = "SW0";
        zephyr,code = <INPUT_KEY_0>;
      };
    };
};
```

O arquivo de shield / overlay é usado para configurar vários componentes da placa. Usando esse arquivo, o exemplo do botão pode ser utilizado, pois o overlay permite que o Zephyr configure o botão e o torne disponível para o código associado.

Neste caso o D1 no Xiao ESP32S3. Ele é configurado nesse overlay para atuar como um botão e é associado ao nome sw0 para permitir que seja usado pelo exemplo, que possui código esperando isso.

#### Grove - Expansion Board - Buzzer

Vamos ativar nosso buzzer usando o exemplo PWM de pisca (`blinky`) para controlar sua ativação por meio de um sinal PWM. Para isso usaremos um overlay personalizado que habilita o PWM para o pino A3.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32s3 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-esp32s3/xiao_expansion_buzzer.overlay"
```

Depois de gravar o firmware você deverá começar a ouvir uma série de bipes que mudam de som conforme o exemplo é executado.

Vamos ver por que isso funciona:

```
#include <zephyr/dt-bindings/pwm/pwm.h>

/ {
    aliases {
        pwm-0 = &ledc0;
        pwm-led0 = &pwm_buzzer;
    };

    pwmleds {
        compatible = "pwm-leds";
        pwm_buzzer: pwm_led_gpio0_4 {
            label = "PWM Buzzer";
            pwms = <&ledc0 0 1000 PWM_POLARITY_NORMAL>;
        };
    };
};

&pinctrl {
    ledc0_default: ledc0_default {
        group1 {
            pinmux = <LEDC_CH0_GPIO4>;
            output-enable;
        };
    };
};

&ledc0 {
    pinctrl-0 = <&ledc0_default>;
    pinctrl-names = "default";
    status = "okay";
    #address-cells = <1>;
    #size-cells = <0>;
    channel0@0 {
        reg = <0x0>;
        timer = <0>;
    };
};
```

O overlay configura a lógica PWM para o pino 4, que corresponde ao pino A3 do mapeamento de pinos do ESP32S3.

#### Grove - Expansion Board - Cartão SD

Aqui usaremos o exemplo de sistema de arquivos juntamente com o shield Xiao Expansion Board para tentar fazer a interface com o leitor de cartão SD via SPI. O shield da expansão possui o pino CS configurado para o pino associado `&xiao_d 2`, então nenhum trabalho é necessário da sua parte para associar essa capacidade à placa além de adicionar o shield. Para prepará-lo ainda mais estamos usando uma configuração personalizada que habilita a funcionalidade de cartão SD.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32s3 samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

Agora grave e monitore:

```
west flash
west espressif monitor
```

Você deverá ver uma resposta semelhante a esta:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
[00:00:00.208,000] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.208,000] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.
Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

Nesse caso meu cartão SD tinha dois arquivos. Seus nomes e seus tamanhos foram enviados para o meu console.

Vamos revisar os elementos relevantes em uso aqui:

```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

Na configuração associada estamos habilitando o SPI, o driver de disco SDMMC e o GPIO. Sem essa configuração o overlay levará a um erro, pois o exemplo não conseguirá encontrar o cartão SD.

A parte relevante do shield Xiao Expansion Board é mostrada abaixo:

```
&xiao_spi {
 status = "okay";
 cs-gpios = <&xiao_d 2 GPIO_ACTIVE_LOW>;

 sdhc0: sdhc@0 {
  compatible = "zephyr,sdhc-spi-slot";
  reg = <0>;
  status = "okay";
  mmc {
   compatible = "zephyr,sdmmc-disk";
   status = "okay";
  };
  spi-max-frequency = <24000000>;
 };
};
```

Conforme mencionado anteriormente, o mapeamento de pinos `&xiao_d 2` é usado para permitir que o pino D2 seja selecionado para isso, independentemente da placa usada, desde que ela suporte a configuração de pinos `&xiao_d`.

#### Grove - Temperature and Humidity Sensor (SHT31)

Primeiro solde os pinos e conecte seu Xiao ESP32S3 à placa de expansão. Depois conecte um cabo conector Grove entre o Grove SHT31 e uma das portas I2C na placa de expansão.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32s3/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23s3_zephyr/xiao_sht31.jpg" style={{width:600, height:'auto'}}/></div>

Para testar essa configuração podemos usar um exemplo existente com o Zephyr:

```
west build -p always -b xiao_esp32s3 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
west flash
west espressif monitor
```

Você verá resultados retornados pelo console:

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
SHT3XD: 25.54 Cel ; 53.39 %RH
SHT3XD: 25.58 Cel ; 53.42 %RH
SHT3XD: 25.60 Cel ; 53.57 %RH
SHT3XD: 25.68 Cel ; 53.71 %RH
SHT3XD: 25.68 Cel ; 53.72 %RH
SHT3XD: 25.71 Cel ; 53.67 %RH
SHT3XD: 25.75 Cel ; 53.60 %RH
SHT3XD: 25.76 Cel ; 53.48 %RH
SHT3XD: 25.82 Cel ; 53.31 %RH
SHT3XD: 25.84 Cel ; 53.16 %RH
```

Vamos analisar um pouco esse exemplo para ver por que ele funciona:

```
 &xiao_i2c {
 sht3xd@44 {
   compatible = "sensirion,sht3xd";
   reg = <0x44>;
  };
 };
```

O arquivo de overlay do app é usado para configurar vários componentes da placa. Usando esse arquivo o exemplo SHT31 pode ser utilizado, pois o overlay informa à [lógica do exemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) como configurar o sensor para nossa placa.

#### 1.69inch LCD Display Module, 240×280 Resolution, SPI Interface

Para este exemplo usaremos SPI para conectar a um LCD de 1,69 polegada com resolução de 240x280.

Primeiro conecte sua placa à tela LCD usando a imagem a seguir como guia (neste caso estamos usando o Xiao ESP32S3, mas o mesmo layout de pinos é usado para a conexão aqui).

| 1.69-inch LCD SPI Display| XIAO ESP32S3 |
| ------------- | ------------------------- |
| VCC | 3V3 |
| GND | GND |
| DIN | D10 |
| CLK | D8 |
| CS | D1 |
| DC | D3 |
| RST | D0 |
| BL | D6 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/10.png" style={{width:700, height:'auto'}}/></div>

Agora podemos compilar e gravar o firmware:

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32s3 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash
```

Com o novo firmware instalado, o dispositivo agora mostra a mesma tela de demonstração que vimos anteriormente na placa de expansão, apenas atualizada para o LCD colorido via SPI.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32s3/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23s3_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>

#### Display Redondo para Xiao

Para testar esta configuração, podemos usar um exemplo existente com Zephyr:

```
west build -p always -b xiao_esp32s3 samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

Entre no modo bootloader e grave o seu dispositivo:

```
west flash
```

Você verá um display mostrando vários cantos coloridos com um canto preto piscando.

Outro exemplo demonstra o uso da tela sensível ao toque:

```
west build -p always -b xiao_esp32s3 samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

A demonstração de música mostrada aqui é apenas uma parte da tela real, mas ainda demonstra a tela sensível ao toque em ação. Como você pode ver, tocar no botão de play ativa a animação de música.

Você pode ver pelo [arquivo do shield](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay) que isso funciona ao fazer a interface com o driver de display redondo GC9A01 via SPI e o módulo de toque CHSC6X via i2c.

Vamos nos aprofundar um pouco neste exemplo para ver como ele funciona:

```
/ {
    chosen {
      zephyr,display = &gc9a01_xiao_round_display;
    };

 lvgl_pointer {
  compatible = "zephyr,lvgl-pointer-input";
  input = <&chsc6x_xiao_round_display>;
 };
};

/*
 * xiao_serial uses pins D6 and D7 of the Xiao, which are used respectively to
 * control the screen backlight and as touch controller interrupt.
 */
&xiao_serial {
 status = "disabled";
};

&xiao_i2c {
 clock-frequency = < I2C_BITRATE_FAST >;

 chsc6x_xiao_round_display: chsc6x@2e {
  status = "okay";
  compatible = "chipsemi,chsc6x";
  reg = <0x2e>;
  irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;
 };
};

&xiao_spi {
 status = "okay";
 cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>, <&xiao_d 2 GPIO_ACTIVE_LOW>;

 gc9a01_xiao_round_display: gc9a01@0 {
  status = "okay";
  compatible = "galaxycore,gc9x01x";
  reg = <0>;
  spi-max-frequency = <DT_FREQ_M(100)>;
  cmd-data-gpios = <&xiao_d 3 GPIO_ACTIVE_HIGH>;
  pixel-format = <PANEL_PIXEL_FORMAT_RGB_565>;
  width = <240>;
  height = <240>;
  display-inversion;
 };
};
```

Este shield faz o seguinte:

- Seleciona o display GC9A01 como o display Zephyr escolhido
- Define a lógica do ponteiro LVGL para usar o módulo CHSC6X
- Desativa a serial, pois os pinos são usados para o backlight e interrupção de toque (como visto acima via: `irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`)
- Configura o display redondo para SPI usando os pinos D1, D2 e D3

A [lógica do exemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c) depende do [código de exemplo da demonstração LVGL](https://github.com/lvgl/lvgl/tree/master/demos/music), que pode ser analisado mais detalhadamente.

## ✨ Projeto de Contribuidores

- Este projeto é apoiado pelo [Projeto de Contribuidores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=56649975) da Seeed Studio.
- Agradecemos **os esforços do Tim** e o seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/Honorary-Contributors/).

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
