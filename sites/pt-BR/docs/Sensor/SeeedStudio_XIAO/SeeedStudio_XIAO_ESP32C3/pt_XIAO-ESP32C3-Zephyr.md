---
description: XIAO ESP32C3 com Zephyr(RTOS)
title: XIAO ESP32C3 com Zephyr(RTOS)
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-ESP32C3-Zephyr
last_update:
  date: 4/17/2023
  author: timo614
createdAt: '2023-07-26'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/XIAO-ESP32C3-Zephyr/
---

# XIAO ESP32C3 com Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-esp32c3.png"/></div>

## O que é RTOS

Um dos componentes mais importantes dos sistemas embarcados atuais é o **RTOS**, também conhecido como **Sistema Operacional de Tempo Real**, que é responsável por tudo, desde o agendamento de tarefas até a execução de aplicações.

O **RTOS** é projetado para fornecer um modo de execução previsível. Quando o processamento deve atender ao limite de tempo do sistema, o RTOS é utilizado. Portanto, em comparação com o GPOS (Sistema Operacional de Propósito Geral), o RTOS geralmente é leve e pequeno em tamanho, e normalmente fornece apenas as funções necessárias para executar tipos específicos de aplicações em hardware específico. Em alguns casos, os desenvolvedores podem modificar o RTOS existente, reduzi-lo para fornecer apenas a funcionalidade exigida por uma aplicação específica e/ou personalizar suas características de funcionalidade ou desempenho.

## O que é [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

O [**Zephyr**](https://www.zephyrproject.org/) OS é baseado em um kernel de pequeno porte projetado para uso em sistemas com recursos limitados e sistemas embarcados: desde sensores ambientais embarcados simples e wearables com LED até controladores embarcados sofisticados, smartwatches e aplicações IoT sem fio.

## Recursos

O Zephyr oferece um número grande e crescente de recursos, incluindo:

### Conjunto extenso de serviços do Kernel

O Zephyr oferece uma série de serviços familiares para desenvolvimento:

- *Serviços de Multi-threading* para threads cooperativas, baseadas em prioridade, não preemptivas e preemptivas com fatiamento de tempo round robin opcional. Inclui suporte à API compatível com POSIX pthreads.
- *Serviços de Interrupção* para registro em tempo de compilação de manipuladores de interrupção.
- *Serviços de Alocação de Memória* para alocação dinâmica e liberação de blocos de memória de tamanho fixo ou variável.
- *Serviços de Sincronização entre Threads* para semáforos binários, semáforos de contagem e semáforos mutex.
- *Serviços de Passagem de Dados entre Threads* para filas de mensagens básicas, filas de mensagens aprimoradas e fluxos de bytes.
- *Serviços de Gerenciamento de Energia* como Gerenciamento de Energia do Sistema abrangente, definido por aplicação ou política, e Gerenciamento de Energia de Dispositivo refinado, definido pelo driver.

### Múltiplos Algoritmos de Escalonamento

  O Zephyr fornece um conjunto abrangente de opções de escalonamento de threads:

- Escalonamento Cooperativo e Preemptivo
- Earliest Deadline First (EDF)
- Escalonamento Meta IRQ implementando comportamento de "metade inferior de interrupção" ou "tasklet"
- Fatiamento de tempo: Habilita o fatiamento de tempo entre threads preemptíveis de igual prioridade
- Múltiplas estratégias de enfileiramento:
  - Fila de prontidão de lista encadeada simples
  - Fila de prontidão em árvore rubro-negra
  - Fila de prontidão multi-fila tradicional

### Suporte a Bluetooth Low Energy 5.0

Compatível com Bluetooth 5.0 (ESR10) e suporte ao Controlador Bluetooth Low Energy (Camada de Link LE). Inclui Bluetooth mesh e um controlador Bluetooth pronto para qualificação Bluetooth.

- Perfil de Acesso Genérico (GAP) com todos os papéis LE possíveis
- Perfil de Atributo Genérico (GATT)
- Suporte a emparelhamento, incluindo o recurso de Conexões Seguras do Bluetooth 4.2
- Abstração limpa do driver HCI
- Interface HCI bruta para executar o Zephyr como um Controlador em vez de uma pilha Host completa
- Verificado com múltiplos controladores populares
- Altamente configurável

Suporte a Mesh:

- Recursos de Relay, Friend Node, Low-Power Node (LPN) e GATT Proxy
- Ambos os portadores de provisionamento suportados (PB-ADV & PB-GATT)
- Altamente configurável, adequado para dispositivos com pelo menos 16k de RAM

*Referência: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## Primeiros Passos

O primeiro passo para trabalhar com o Zephyr é configurar o SDK e a toolchain para desenvolvimento local. O [guia de primeiros passos do Zephyr](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) deve ser consultado para o procedimento de configuração associado ao seu ambiente.

Após a configuração da toolchain do Zephyr e o download de um SDK associado, você pode começar o desenvolvimento de aplicações.

Para o Xiao ESP32C3, o [arquivo de descrição da placa](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32c3/doc/index.html) pode ser consultado para mais informações de configuração.

Para buscar os blobs necessários para usar o ESP32C3, execute o seguinte comando:

```
west blobs fetch hal_espressif
```

Após isso, os exemplos podem ser compilados e gravados na placa.

O exemplo mais simples é executar o exemplo "Hello World" na placa. Após mudar para o diretório de instalação do Zephyr, execute os seguintes comandos.

```
west build -p always -b xiao_esp32c3 samples/hello_world
west flash
west espressif monitor
```

Com o comando final, você deverá ver a resposta exibindo a saudação "Hello World!".

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Hello World! xiao_esp32c3/esp32c3
```

Para auxiliar no processo de uso do Zephyr com o Xiao e sua placa de expansão, um repositório foi construído com vários overlays e configurações usados aqui. Os comandos incluídos neste artigo wiki assumem que ele está localizado em `../applications/xiao-zephyr-examples` relativo à raiz do zephyr. Um caminho alternativo pode ser fornecido aos comandos abaixo atualizando-o.

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## Preparação de Hardware

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Placa de Expansão Seeed Studio</th>
      <th>Grove LED Vermelho</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED-p-1142.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### Conhecimento do Desenvolvedor

#### Placa de Expansão XIAO

  Para usar módulos Grove com o Seeed Studio XIAO ESP32C3, utilizaremos uma [Base de Expansão Seeed Studio para XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) e conectaremos o XIAO ESP32C3 nela.

  Após isso, os conectores Grove na placa podem ser usados para conectar módulos Grove.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### Definições de Pinos

  Você precisa seguir o gráfico abaixo para usar os números de pinos internos apropriados ao conectar os módulos Grove aos conectores Grove no Grove Shield para Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png"style={{width:900, height:'auto'}}/></div>

### Funcionalidade Principal

- GPIO / Habilitação de LED
- Bluetooth
- Wi-Fi
- TFLite

#### GPIO / Habilitação de LED

Para testar esta configuração, podemos usar o exemplo blinky com o Zephyr, mas usaremos um LED Grove adicional e um overlay para substituir o LED pelo pino D0 para demonstrar seu funcionamento (o Xiao ESP32C3 não possui um LED integrado programável):

```
west build -p always -b xiao_esp32c3 samples/basic/blinky -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/d0_led.overlay
west flash
west espressif monitor
```

Pressione RESET duas vezes rapidamente ou curto-circuite o pino RST ao GND.

```
west flash
```

Você verá o LED vermelho conectado alternando entre ligado e desligado, criando um efeito de piscar.

Vamos analisar este exemplo um pouco para entender por que funciona.

O código de exemplo associado referencia led0:

```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

O overlay de LED (`xiao-zephyr-examples/d0_led.overlay`) define este LED para nós:

```
/ {
 aliases {
  led0 = &led0;
 };

 leds {
  compatible = "gpio-leds";
  led0: led_0 {
   gpios = <&xiao_d 0 GPIO_ACTIVE_HIGH>;
   label = "Demo LED";
  };
 };
};
```

Este overlay define D0 (conforme mostrado via `&xiao_d 0`) como um LED e o associa ao alias `led0`. `led0` é um alias que permite que muitos exemplos o utilizem como o LED sendo controlado, pois procuram especificamente por este nome.

Se você monitorar a saída serial via `west espressif monitor`, verá uma saída semelhante a:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
LED state: OFF
LED state: ON
LED state: OFF
LED state: ON
```

#### Bluetooth

Para testar esta configuração, podemos usar um exemplo existente com o Zephyr:

```
west build -p always -b xiao_esp32c3 samples/bluetooth/observer
west flash
west espressif monitor
```

Você verá um console disponível para enviar comandos à placa:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Starting Observer Demo
Started scanning...
Device found: E5:44:60:88:DB:99 (random) (RSSI -92), type 0, AD data len 27
Device found: F3:38:F3:AD:FC:C6 (random) (RSSI -63), type 3, AD data len 8
Device found: 49:E6:31:0F:A6:25 (random) (RSSI -55), type 2, AD data len 28
Device found: EC:11:27:22:AF:D2 (public) (RSSI -80), type 0, AD data len 31
Device found: FB:3C:4A:AC:64:33 (random) (RSSI -78), type 0, AD data len 30
Device found: 79:05:36:B8:1E:1B (random) (RSSI -34), type 2, AD data len 4
Device found: 77:4D:FC:E2:12:D4 (random) (RSSI -86), type 2, AD data len 4
Device found: E0:9D:13:29:DA:15 (public) (RSSI -99), type 0, AD data len 31
Device found: 53:17:1B:22:70:23 (random) (RSSI -97), type 0, AD data len 18
```

```
CONFIG_BT=y
CONFIG_BT_OBSERVER=y
```

O [arquivo conf](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf) aqui habilita recursos relacionados ao bluetooth para a compilação do Zephyr.

#### Wi-Fi

Para testar esta configuração, podemos usar um exemplo existente com o Zephyr:

```
west build -p always -b xiao_esp32c3 samples/net/wifi
west flash
west espressif monitor
```

Você verá um console disponível para enviar comandos à placa:

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
uart:~$
```

Existem vários comandos que permitem ver e conectar-se a redes locais; consulte o [readme do exemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/README.rst) para mais informações.

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
uart:~$ wifi scan
Scan requested
Num  | SSID                             (len) | Chan (Band)   | RSSI | Security        | BSSID             | MFP
1    | Maredonia                        9     | 6    (2.4GHz) | -41  | WPA2-PSK        |                   | Disable
2    | Maredonia                        9     | 6    (2.4GHz) | -41  | WPA2-PSK        |                   | Disable
3    | Aernazonea                       10    | 6    (2.4GHz) | -41  | WPA2-PSK        |                   | Disable
4    | Aernazonea                       10    | 6    (2.4GHz) |
```

Vamos analisar este exemplo um pouco para entender por que funciona:

```
&wifi {
 status = "okay";
};
```

O [arquivo overlay](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32c3.overlay) do aplicativo é usado para configurar vários componentes da placa. Usando este arquivo, o exemplo pode ser utilizado, pois o overlay informa à lógica do exemplo para habilitar o Wi-Fi.

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

O [arquivo conf](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32c3.conf) aqui habilita vários recursos relacionados a redes para a compilação do Zephyr.

#### TFLite - Hello World

Habilite o TFLite com o Zephyr e atualize:

```
west config manifest.project-filter -- +tflite-micro
west update
```

Compile o exemplo e grave na sua placa:

```
west build -p always -b xiao_esp32c3 samples/modules/tflite-micro/hello_world
west flash
west espressif monitor
```

Você verá os resultados retornados pelo console:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
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

Informações adicionais sobre o TFLite estão fora do escopo deste guia, mas o exemplo serve como referência para as capacidades do dispositivo e os componentes necessários para executar a configuração do TFLite.

### Componentes Adicionais

- [Grove - Placa de Expansão](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Display I2C
- [Grove - Placa de Expansão](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Botão
- [Grove - Sensor de Temperatura e Umidade (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [Módulo de Display LCD 1,69 polegadas, Resolução 240×280, Interface SPI](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Display Redondo para Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)

#### Grove - Placa de Expansão - Display I2C

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/xiao_expansion_oled.jpg" style={{width:600, height:'auto'}}/></div>

Para testar esta configuração, podemos usar um exemplo existente com o Zephyr:

```
west build -p always -b xiao_esp32c3 samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash
```

Você verá um display mostrando várias caixas pretas e uma caixa piscando no canto, já que este display suporta apenas duas cores.

Vamos analisar este exemplo um pouco para entender por que funciona:

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

O shield configura uma tela OLED SSD1306 no registrador 0x3C. Ela é selecionada como o display zephyr na seção chosen.

#### Grove - Placa de Expansão - Botão

Para testar esta configuração, podemos usar um exemplo existente com o Zephyr, mas usaremos um LED Grove adicional e um overlay para substituir o LED pelo pino D0 e demonstrar seu funcionamento (o Xiao ESP32C3 não possui um LED integrado programável):

```
west build -p always -b xiao_esp32c3 samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/d0_led.overlay
west flash
west espressif monitor
```

Pressionar o botão com o exemplo ativará o LED associado ao D0 para acender.

Você verá os resultados retornados pelo console:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Set up button at gpio@60004000 pin 3
Set up LED at gpio@60004000 pin 2
Press the button
Button pressed at 39818120
Button pressed at 63872629
Button pressed at 168304681
Button pressed at 241105558
Button pressed at 346324767
Button pressed at 382181856
Button pressed at 419342954
```

Vamos analisar este exemplo um pouco para entender por que funciona:

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

O arquivo shield / overlay é usado para configurar vários componentes da placa. Usando este arquivo, o exemplo do botão pode ser utilizado, pois o overlay permite que o Zephyr configure o botão e o disponibilize para o código associado.

Neste caso, D1 no Xiao ESP32C3. Ele é configurado neste overlay para funcionar como um botão e recebe o alias sw0 para permitir seu uso no exemplo que possui código esperando por isso.

O LED, conforme mostrado acima no exemplo de LED, também é configurado por meio de seu arquivo overlay. Agora, com o botão associado, pressioná-lo acende este LED.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/led-button.gif?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/led-button.gif" style={{width:600, height:'auto'}}/></div>

#### Grove - Placa de Expansão - Buzzer

Vamos ativar nosso buzzer usando o exemplo blinky PWM para controlar sua ativação por meio de um sinal PWM. Para isso, usaremos um overlay personalizado que habilita o PWM para o pino A3.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-esp32c3/xiao_expansion_buzzer.overlay"
west flash
```

Após gravar, você deverá começar a ouvir uma série de bipes que mudam de som conforme o exemplo é executado.

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
  pwm_buzzer: pwm_led_gpio0_5 {
   label = "PWM LED0";
   pwms = <&ledc0 0 1000 PWM_POLARITY_NORMAL>;
  };
 };
};

&pinctrl {
 ledc0_default: ledc0_default {
  group1 {
   pinmux = <LEDC_CH0_GPIO5>;
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

O overlay configura a lógica PWM para o pino 5, que corresponde ao pino A3 do pinout do ESP32C3.

#### Grove - Placa de Expansão - Cartão SD

Usaremos o exemplo de sistema de arquivos aqui junto com o shield da Placa de Expansão Xiao para tentar fazer a interface com o leitor de cartão SD via SPI. O shield da placa de expansão tem o pino CS configurado para o pino `&xiao_d 2` associado, portanto nenhum trabalho é necessário da sua parte para associar essa capacidade à placa, além de adicionar o shield. Para prepará-lo melhor, estamos usando uma configuração personalizada que habilita a funcionalidade do cartão SD.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

Agora grave e monitore:

```
west flash
west espressif monitor
```

Você deverá ver uma resposta semelhante a esta:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
[00:00:00.032,000] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.033,000] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.
Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

Neste caso, meu cartão SD tinha dois arquivos. Seus nomes e tamanhos foram exibidos no meu console.

Vamos analisar os elementos relevantes em jogo aqui:

```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

Na configuração associada, estamos habilitando SPI, o driver de disco SDMMC e o GPIO. Sem essa configuração, o overlay levará a um erro, pois o exemplo não consegue encontrar o cartão SD.

A parte relevante do shield da Xiao Expansion Board é mostrada abaixo:

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

Como mencionado anteriormente, o mapeamento de pinos `&xiao_d 2` é usado para permitir que o pino D2 seja selecionado para isso independentemente da placa utilizada, desde que ela suporte a configuração de pinos `&xiao_d`.

#### Grove - Sensor de Temperatura e Umidade (SHT31)

Primeiro solde os pinos e conecte seu Xiao ESP32C3 à placa de expansão. Em seguida, conecte um cabo conector Grove entre o Grove SHT31 e uma das portas I2C na placa de expansão.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/xiao_sht31.jpg" style={{width:600, height:'auto'}}/></div>

Para testar esta configuração, podemos usar um exemplo existente com o Zephyr:

```
west build -p always -b xiao_esp32c3 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
west flash
west espressif monitor
```

Você verá os resultados retornados pelo console:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
SHT3XD: 25.92 Cel ; 53.37 %RH
SHT3XD: 25.97 Cel ; 54.37 %RH
SHT3XD: 26.00 Cel ; 54.43 %RH
SHT3XD: 26.02 Cel ; 54.11 %RH
SHT3XD: 26.03 Cel ; 53.33 %RH
SHT3XD: 26.02 Cel ; 52.88 %RH
SHT3XD: 26.04 Cel ; 52.12 %RH
SHT3XD: 26.07 Cel ; 51.87 %RH
SHT3XD: 26.13 Cel ; 52.81 %RH
```

Vamos analisar este exemplo um pouco para entender por que funciona:

```
 &xiao_i2c {
 sht3xd@44 {
   compatible = "sensirion,sht3xd";
   reg = <0x44>;
  };
 };
```

O arquivo overlay do aplicativo é usado para configurar vários componentes da placa. Usando este arquivo, o exemplo SHT31 pode ser utilizado, pois o overlay informa à [lógica do exemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) como configurar o sensor para nossa placa.

#### Módulo de Display LCD de 1,69 polegadas, Resolução 240×280, Interface SPI

Para este exemplo, usaremos SPI para conectar a um LCD de 1,69 polegadas com resolução de 240x280.

Primeiro conecte sua placa à tela LCD usando a imagem a seguir como guia (neste caso estamos usando o Xiao ESP32C3, mas o mesmo layout de pinos é usado para a conexão aqui).

| Display SPI LCD de 1,69 polegadas | XIAO ESP32C3 |
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
west build -p always -b xiao_esp32c3 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash
```

Com o novo firmware instalado, o dispositivo agora exibe a mesma tela de demonstração que vimos anteriormente na placa de expansão, agora atualizada para o LCD colorido via SPI.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>

#### Display Redondo para Xiao

Para testar esta configuração, podemos usar um exemplo existente com o Zephyr:

```
west build -p always -b xiao_esp32c3 samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

Entre no modo bootloader e grave seu dispositivo:

```
west flash
```

Você verá um display mostrando múltiplos cantos coloridos com um canto preto piscando.

Outro exemplo demonstra o uso da tela sensível ao toque:

```
west build -p always -b xiao_esp32c3 samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

A demonstração de música mostrada aqui é apenas uma parte da tela real, mas ainda demonstra a tela sensível ao toque em ação. Como você pode ver, tocar no botão de reprodução ativa a animação de música.

Você pode ver no [arquivo shield](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay) que isso funciona fazendo interface com o driver de display redondo GC9A01 via SPI e o módulo de toque CHSC6X via i2c.

Vamos analisar este exemplo um pouco para entender como funciona:

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
- Define a lógica de ponteiro LVGL para usar o módulo CHSC6X
- Desabilita a serial, pois os pinos são usados para retroiluminação e interrupção de toque (como visto acima via: `irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`)
- Configura o display redondo para SPI usando os pinos D1, D2 e D3

A [lógica do exemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c) depende do [código de exemplo de demonstração LVGL](https://github.com/lvgl/lvgl/tree/master/demos/music), que pode ser examinado com mais detalhes.

## ✨ Projeto de Colaboradores

- Este projeto é apoiado pelo [Projeto de Colaboradores](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=57293521) da Seeed Studio.
- Obrigado pelos **esforços de Tim** e seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/Honorary-Contributors/).

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
