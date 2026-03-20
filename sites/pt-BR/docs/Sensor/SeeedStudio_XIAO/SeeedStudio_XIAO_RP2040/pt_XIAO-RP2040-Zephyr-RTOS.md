---
description: XIAO RP2040 com Zephyr (RTOS)
title: XIAO RP2040 com Zephyr (RTOS)
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-RP2040-Zephyr-RTOS
last_update:
  date: 3/20/2024
  author: timo614
createdAt: '2024-04-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-Zephyr-RTOS/
---

# XIAO RP2040 com Zephyr (RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-rp2040.png"/></div>

Este wiki aborda o suporte do [Zephyr](https://www.zephyrproject.org/) para o [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/pt-br/xiao_rp2040_getting_started/). Com a ajuda deste guia você poderá utilizar o conjunto de recursos disponível para a placa.

## O que é o [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

O sistema operacional [**Zephyr**](https://www.zephyrproject.org/) é baseado em um kernel de baixo consumo de memória projetado para uso em sistemas embarcados e com recursos limitados: desde sensores ambientais simples embarcados e wearables com LEDs até controladores embarcados sofisticados, smartwatches e aplicações IoT sem fio.

Para cada dispositivo suportado o Zephyr possui um arquivo [devicetree](https://docs.zephyrproject.org/latest/build/dts/index.html) que descreve a placa e seus recursos. A [página da placa Xiao RP2040 Zephyr](https://docs.zephyrproject.org/latest/boards/seeed/xiao_rp2040/doc/index.html#supported-features) descreve os recursos suportados atualmente disponíveis, que são definidos pelo [arquivo dts da placa](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/seeed/xiao_rp2040/xiao_rp2040.yaml#L7).

*Referência: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## Primeiros Passos

O primeiro passo para trabalhar com o Zephyr é configurar o SDK e o toolchain para desenvolvimento local. O [guia de primeiros passos do Zephyr](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) deve ser consultado para o procedimento de configuração correspondente necessário para o seu ambiente.

Depois que o toolchain do Zephyr estiver configurado e um SDK associado tiver sido baixado, você poderá iniciar o desenvolvimento de aplicações.

Para o Xiao RP2040 o [arquivo de descrição da placa](https://docs.zephyrproject.org/latest/boards/seeed/xiao_rp2040/doc/index.html) pode ser consultado para obter mais informações de configuração.

Para programar o Xiao RP2040, podem ser seguidos os seguintes passos:

1. Compile um exemplo ou a sua aplicação
2. Conecte o Xiao RP2040
3. Mantenha pressionado o botão designado `B` (boot) e pressione `R` (reset), o que montará o dispositivo como um dispositivo de armazenamento em massa
4. Execute o comando de gravação para gravar o dispositivo `west flash -r uf2`

O exemplo mais simples é executar o exemplo "Hello World" na placa. Depois de mudar para o diretório da instalação do Zephyr, execute os seguintes comandos.

```
west build -p always -b xiao_rp2040 samples/subsys/usb/console
```

Entre no modo bootloader conforme descrito anteriormente e então grave o dispositivo:

```
west flash -r uf2
```

O dispositivo será reiniciado depois de receber o arquivo e sua máquina agora deverá estar conectada via USB para comunicação serial.

Encontre a porta do seu dispositivo, por exemplo, no Ubuntu digitando `ls /dev/tty*`, e confirme qual dispositivo aparece quando o seu USB é conectado.

No meu exemplo eu vejo `/dev/ttyACM0` como o dispositivo recém-adicionado.

Usando o screen você pode então se conectar e monitorar a resposta serial:

```
screen /dev/ttyACM0 115200
```

Você deverá ver uma resposta semelhante à seguinte:

```
*** Booting Zephyr OS build v3.6.0-2212-gc38ea288eee9 ***
Hello World! arm
Hello World! arm
Hello World! arm
```

Para auxiliar no processo de uso do Zephyr com o Xiao e sua placa de expansão, foi construído um repositório com vários overlays e configurações usados aqui. Os comandos incluídos neste artigo do wiki assumem que ele está localizado em `../applications/xiao-zephyr-examples` em relação à raiz do zephyr. Um caminho alternativo pode ser fornecido aos comandos abaixo atualizando-o.

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## Preparação de Hardware

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO RP2040</th>
      <th>Placa de Expansão Seeed Studio</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### Conhecimento do Desenvolvedor

#### Placa de Expansão XIAO

  Para usar módulos Grove com o Seeed Studio XIAO RP2040, usaremos uma [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) e conectaremos o XIAO RP2040 nela.

  Depois disso, os conectores Grove na placa podem ser usados para conectar módulos Grove

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### Definições de Pinos

  Você precisa seguir o gráfico abaixo para usar os números de pinos internos apropriados ao conectar os módulos Grove aos conectores Grove no Grove Shield para Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg"style={{width:900, height:'auto'}}/></div>

### Funcionalidade Primária

- LED WS2812
- PWM do LED
- Relógio
- TFLite

#### LED WS2812

Neste exemplo o Xiao RP2040 utiliza seu LED onboard e alterna continuamente entre vermelho, verde e azul.

Para testar esta configuração podemos usar um exemplo existente com o Zephyr:

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/led_strip
```

Entre no modo bootloader e grave o seu dispositivo:

```
west flash -r uf2
```

Você verá o LED WS2812 onboard alternando continuamente entre vermelho, azul e verde em um padrão de piscar.

Vamos nos aprofundar um pouco neste exemplo para ver por que ele funciona:

```

 / {
     aliases {
         led-strip = &ws2812;
     };
 }
 &gpio0 {
     status = "okay";
     neopixel-power-enable {
  gpio-hog;
  gpios = <11 GPIO_ACTIVE_HIGH>;
  output-high;
 };
 };
 &pio0 {
     status = "okay";

     pio-ws2812 {
         compatible = "worldsemi,ws2812-rpi_pico-pio";
         status = "okay";
         pinctrl-0 = <&ws2812_pio0_default>;
         pinctrl-names = "default";
         bit-waveform = <3>, <3>, <4>;

         ws2812: ws2812 {
             status = "okay";
             gpios = <&gpio0 12 GPIO_ACTIVE_HIGH>;
             chain-length = <1>;
             color-mapping = <LED_COLOR_ID_GREEN
                      LED_COLOR_ID_RED
                      LED_COLOR_ID_BLUE>;
             reset-delay = <280>;
             frequency = <800000>;
         };
     };
 };
```

Esses elementos da devicetree mostram o WS2812 onboard e sua utilização. Dado que o WS2812 tem sua linha VCC conectada ao pino 11 do RP2040, a devicetree utiliza a funcionalidade gpio-hog para permitir que o LED seja habilitado por meio de variáveis de ambiente. Neste caso, o pino 12 é o configurado para a linha de dados do WS2812, então, com a variável de ambiente CONFIG_GPIO_HOGS habilitada, a tira de LEDs pode ser utilizada para o exemplo.

Isso funciona em parte porque o exemplo possui um arquivo xiao_rp2040.conf como parte de seu diretório de boards, de modo que ele mescla essa configuração com a configuração da placa e a habilita.

```
CONFIG_GPIO=y
CONFIG_GPIO_HOGS=y
```

Se você desejar utilizar o WS2812 onboard é recomendável habilitar esta variável para permitir que ele receba alimentação.

<!-- <div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Cosmic-Bee/xiao-zephyr-examples/main/images/rp2040/ws2812.gif" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/ws2812.gif" style={{width:300, height:'auto'}}/></div>

#### PWM do LED

Neste exemplo vamos demonstrar as capacidades de PWM do Xiao RP2040. Para isso, usaremos o LED azul onboard e usaremos PWM para fazê-lo desvanecer continuamente.

Para testar esta configuração podemos usar um exemplo existente com o Zephyr:

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/fade_led
```

Entre no modo bootloader e grave o seu dispositivo:

```
west flash -r uf2
```

Você verá a luz azul do LED RGB onboard desvanecer lentamente e repetir o processo novamente.

Vamos nos aprofundar um pouco neste exemplo para ver por que ele funciona:

```
&pwm {
 status = "okay";
 divider-int-4 = <255>;
};
```

Esse trecho de lógica no `boards/xiao_rp2040.overlay` para o exemplo habilita a funcionalidade PWM da devicetree que normalmente está desabilitada. A configuração do Xiao RP2040 tem o LED azul RGB onboard configurado como o PWM padrão.

Como pode ser visto em `xiao_rp2040-pinctrl.dtsi` nos arquivos de placa do zephyr, existe o seguinte:

```
 pwm_ch4b_default: pwm_ch4b_default {
  group1 {
   pinmux = <PWM_4B_P25>;
  };
 };
```

Neste caso o PWM está usando o LED PWM configurado na devicetree, que está associado de volta ao pino 25 (o LED azul). Os pinos PWM podem ser consultados na [documentação do RP2040](https://docs.zephyrproject.org/apidoc/latest/rpi-pico-rp2040-pinctrl_8h.html).

<!-- <div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Cosmic-Bee/xiao-zephyr-examples/main/images/rp2040/led_fade.gif" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/led_fade.gif" style={{width:300, height:'auto'}}/></div>

#### Clock

Para isso vamos usar um exemplo existente e nosso overlay de console:

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/counter/alarm -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Entre no modo bootloader e faça o flash do seu dispositivo:

```
west flash -r uf2
```

Conecte ao monitor (após resetar rapidamente sua placa para garantir que ela reinicie):

```
screen /dev/ttyACM0 115200
```

Você verá uma série de temporizadores disparando após um atraso definido, um após o outro:

```
*** Booting Zephyr OS build v3.6.0-2212-gc38ea288eee9 ***
Counter alarm sample

Set alarm in 2 sec (2000000 ticks)
!!! Alarm !!!
Now: 2
Set alarm in 4 sec (4000000 ticks)
!!! Alarm !!!
Now: 6
Set alarm in 8 sec (8000000 ticks)
!!! Alarm !!!
Now: 14
Set alarm in 16 sec (16000000 ticks)
!!! Alarm !!!
Now: 30
Set alarm in 32 sec (32000000 ticks)
```

#### TFLite - Hello World

Ative o TFLite com Zephyr e atualize:

```
west config manifest.project-filter -- +tflite-micro
west update
```

Para este exemplo vamos usar o exemplo tflite "Hello World" juntamente com nosso overlay de console e conf para ler a resposta via USB serial.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/modules/tflite-micro/hello_world -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Entre no modo bootloader e faça o flash do seu dispositivo:

```
west flash -r uf2
```

Conecte ao monitor:

```
screen /dev/ttyACM0 115200
```

Você verá resultados retornados pelo console:

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

### Componentes Adicionais

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Display I2C
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Botão
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Buzzer
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Cartão SD
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)

#### Grove - Expansion Board - Display I2C

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/xiao_expansion_oled.jpg" style={{width:300, height:'auto'}}/></div>

Para testar esta configuração podemos usar um exemplo existente com o Zephyr:

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/display -- -DSHIELD=seeed_xiao_expansion_board
```

Entre no modo bootloader e faça o flash do seu dispositivo:

```
west flash -r uf2
```

Você verá um display mostrando vários quadrados pretos e um quadrado piscando no canto, dado que este display só suporta duas cores.

Vamos analisar um pouco este exemplo para ver por que ele funciona:

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

O arquivo de overlay do shield neste exemplo configura uma tela OLED SSD1306 no registrador 0x3C. Ela é selecionada como o display do zephyr na seção chosen.

#### Grove - Expansion Board - Botão

Para testar esta configuração podemos usar um exemplo existente com o Zephyr, que vamos usar juntamente com o overlay e conf do console USB.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/button -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf -DSHIELD=seeed_xiao_expansion_board
```

Entre no modo bootloader e faça o flash do seu dispositivo:

```
west flash -r uf2
```

Conecte ao monitor:

```
screen /dev/ttyACM0 115200
```

Pressionar o botão com o exemplo fará o LED onboard acender.

Você verá resultados retornados pelo console:

```
*** Booting Zephyr OS build v3.6.0-2212-gc38ea288eee9 ***
Set up button at gpio@40014000 pin 27
Set up LED at gpio@40014000 pin 25
Press the button
Button pressed at 1934761489
Button pressed at 2178879257
Button pressed at 3084766465
Button pressed at 3388674993
```

Vamos analisar um pouco este exemplo para ver por que ele funciona:

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

O arquivo de overlay do app é usado para configurar vários componentes da placa. Usando este arquivo, o exemplo de botão pode ser utilizado, já que o overlay permite que o Zephyr configure o botão e o torne disponível para o código associado.

Neste caso o GPIO 27 corresponde ao pino A1/D1 no Xiao RP2040. Ele é configurado neste overlay para atuar como um botão e é associado ao nome sw0 para permitir que seja usado pelo exemplo que possui código esperando isso.

#### Grove - Expansion Board - Buzzer

Vamos ativar nosso buzzer usando o exemplo PWM de piscar para controlar sua ativação por meio de um sinal PWM. Para isso vamos usar um overlay personalizado que habilita o PWM para o pino A3.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-rp2040/xiao_expansion_buzzer.overlay"
```

Entre no modo bootloader e faça o flash do seu dispositivo:

```
west flash -r uf2
```

Após fazer o flash do arquivo uf2 você deverá começar a ouvir uma série de zumbidos que mudam de som enquanto o exemplo é executado.

Vamos ver por que isso funciona:

```
/delete-node/ &pwm_led0;

/ {
 aliases {
  pwm-led = &pwm_led0;
 };
};

&{/pwm_leds} {
 status = "okay";
 compatible = "pwm-leds";

 pwm_led0: pwm_led0 {
  status = "okay";
  pwms = <&pwm 13 PWM_HZ(880) PWM_POLARITY_NORMAL>;
 };
};

&pinctrl {
 pwm_ch6b_default: pwm_ch6b_default {
  group1 {
   pinmux = <PWM_6B_P29>;
  };
 };
};

&pwm {
 status = "okay";
 pinctrl-0 = <&pwm_ch6b_default>;
 divider-frac-6 = <15>;
 divider-int-6 = <255>;
};
```

O overlay em uso primeiro remove o nó `pwm_led0` existente, pois esta placa é suportada por meio de um LED onboard configurado para PWM. Em seguida, ele configura o pino A3 para uso como PWM.

Estamos usando o canal 6B aqui para o PWM, pois o pino associado ao A3 no Xiao RP2040 é o pino 29. Veja a [documentação de pinctrl do RP2040](https://docs.zephyrproject.org/apidoc/latest/rpi-pico-rp2040-pinctrl_8h.html#a8c0c1058a626d83ba5f7e18238aba150) para mais informações / o mapeamento de pinos de outros pinos.

#### Grove - Expansion Board - Cartão SD

Vamos usar aqui o exemplo de filesystem juntamente com o shield Xiao Expansion Board para tentar interagir com o leitor de cartão SD via SPI. O shield da expansion board tem o pino CS configurado para o pino associado `&xiao_d 2`, então nenhum trabalho é necessário da sua parte para associar essa capacidade à placa além de adicionar o shield. Para prepará-lo ainda mais, estamos usando uma configuração personalizada que habilita a funcionalidade do cartão SD.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/subsys/fs/fs_sample -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

Entre no modo bootloader e faça o flash do seu dispositivo:

```
west flash -r uf2
```

Conecte ao monitor:

```
screen /dev/ttyACM0 115200
```

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
[00:00:00.201,000] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.202,000] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.

Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

Neste caso, meu cartão SD tinha dois arquivos. Seus nomes e tamanhos foram enviados para o meu console.

Vamos analisar os elementos relevantes em jogo aqui:

```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

Na configuração associada estamos habilitando o SPI, o driver de disco SDMMC e o GPIO. Sem essa configuração o overlay resultará em um erro, pois o exemplo não consegue encontrar o cartão SD.

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

Como mencionado anteriormente, o mapeamento de pinos `&xiao_d 2` é usado para permitir que o pino D2 seja selecionado para isso, independentemente da placa utilizada, desde que ela ofereça suporte à configuração de pinos `&xiao_d`.

#### Grove - Sensor de Temperatura e Umidade (SHT31)

Primeiro solde os pinos e conecte sua Xiao RP2040 à placa de expansão. Em seguida, conecte um cabo conector Grove entre o Grove SHT31 e uma das portas I2C na placa de expansão.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/xiao_sht31.jpg" style={{width:500, height:'auto'}}/></div>

Para testar esta configuração, podemos usar um exemplo existente com o Zephyr, para o qual habilitaremos o suporte ao console USB com nosso overlay e arquivo conf.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Entre no modo bootloader e grave seu dispositivo:

```
west flash -r uf2
```

Conecte ao monitor:

```
screen /dev/ttyACM0 115200
```

Você verá resultados retornados pelo console:

```
*** Booting Zephyr OS build v3.6.0-2212-gc38ea288eee9 ***
SHT3XD: 26.20 Cel ; 52.49 %RH
SHT3XD: 26.19 Cel ; 52.69 %RH
SHT3XD: 26.20 Cel ; 52.75 %RH
SHT3XD: 26.24 Cel ; 52.88 %RH
SHT3XD: 26.24 Cel ; 52.67 %RH
SHT3XD: 26.23 Cel ; 52.49 %RH
SHT3XD: 26.23 Cel ; 52.48 %RH
SHT3XD: 26.24 Cel ; 52.30 %RH
```

Vamos nos aprofundar um pouco neste exemplo para ver por que ele funciona:

```
 &xiao_i2c {
 sht3xd@44 {
   compatible = "sensirion,sht3xd";
   reg = <0x44>;
  };
 };
```

O arquivo de overlay do app é usado para configurar vários componentes da placa. Usando este arquivo, o exemplo SHT31 pode ser utilizado, pois o overlay informa à [lógica do exemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) como configurar o sensor para nossa placa.

#### Módulo de Display LCD de 1,69 polegadas, Resolução 240×280, Interface SPI

Para este exemplo usaremos SPI para conectar a um LCD de 1,69 polegadas com resolução de 240x280.

Primeiro conecte sua placa à tela LCD usando a imagem a seguir como guia (neste caso estamos usando a Xiao RP2040, mas o mesmo layout de pinos é usado para a conexão aqui).

| Display LCD SPI 1,69 polegadas| XIAO RP2040 |
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

Em seguida, com o hardware preparado, podemos compilar o arquivo uf2 para gravação:

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_rp2040 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
```

Entre no modo bootloader e grave seu dispositivo:

```
west flash -r uf2
```

Com o novo firmware em funcionamento, o dispositivo agora mostra a mesma tela de demonstração que vimos anteriormente na placa de expansão, só que agora atualizada para o LCD colorido via SPI.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/rp2040/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_rp2040_zephyr/spi_lcd.jpg" style={{width:500, height:'auto'}}/></div>

## ✨ Projeto de Colaborador

- Este projeto é apoiado pelo [Projeto de Colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=57293558) da Seeed Studio.
- Agradecemos **os esforços do Tim** e seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/Honorary-Contributors/).

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
