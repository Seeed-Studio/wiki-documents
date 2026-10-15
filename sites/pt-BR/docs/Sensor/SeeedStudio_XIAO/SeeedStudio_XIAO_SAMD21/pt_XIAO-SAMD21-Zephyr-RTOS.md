---
description: XIAO SAMD21 com Zephyr(RTOS)
title: XIAO SAMD21 com Zephyr(RTOS)
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-SAMD21-Zephyr-RTOS
last_update:
  date: 04/16/2023
  author: timo614
createdAt: '2023-07-26'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/XIAO-SAMD21-Zephyr-RTOS/
---

# XIAO SAMD21 com Zephyr(RTOS)

<div align="center"><img width ="{100}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-samd21.png"/></div>

## O que é RTOS

Um dos componentes mais importantes dos sistemas embarcados atuais é o **RTOS**, também conhecido como **Real-Time Operating System** (Sistema Operacional em Tempo Real), que é responsável por tudo, desde o agendamento de tarefas até a execução de aplicações.

O **RTOS** é projetado para fornecer um modo de execução previsível. Quando o processamento precisa atender ao limite de tempo do sistema, utiliza-se um RTOS. Portanto, em comparação com um GPOS (General Purpose Operating System), o RTOS geralmente é leve e de pequeno porte, e em geral fornece apenas as funções necessárias para executar tipos específicos de aplicações em hardware específico. Em alguns casos, os desenvolvedores podem modificar o RTOS existente, reduzi-lo para fornecer apenas a funcionalidade exigida por uma aplicação específica e/ou personalizar suas características de funcionalidade ou desempenho.

## O que é o [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

O sistema operacional [**Zephyr**](https://www.zephyrproject.org/) é baseado em um kernel de pequeno porte projetado para uso em sistemas embarcados e com recursos limitados: desde sensores ambientais embarcados simples e wearables com LEDs até controladores embarcados sofisticados, smartwatches e aplicações sem fio de IoT.

## Funcionalidades

O Zephyr oferece um grande e sempre crescente número de funcionalidades, incluindo:

### Amplo conjunto de serviços de Kernel

O Zephyr oferece vários serviços familiares para o desenvolvimento:

- *Serviços de Multithreading* para threads cooperativas, baseadas em prioridade, não-preemptivas e preemptivas, com divisão de tempo `round robin` opcional. Inclui suporte a API compatível com POSIX pthreads.
- *Serviços de Interrupção* para registro, em tempo de compilação, de manipuladores de interrupção.
- *Serviços de Alocação de Memória* para alocação dinâmica e liberação de blocos de memória de tamanho fixo ou variável.
- *Serviços de Sincronização entre Threads* para semáforos binários, semáforos de contagem e semáforos de mutex.
- *Serviços de Passagem de Dados entre Threads* para filas de mensagens básicas, filas de mensagens avançadas e fluxos de bytes.
- *Serviços de Gerenciamento de Energia* como Gerenciamento de Energia do Sistema global, definido pela aplicação ou por política, e Gerenciamento de Energia de Dispositivo de granularidade fina, definido pelo driver.

### Vários algoritmos de escalonamento

  O Zephyr fornece um conjunto abrangente de opções de escalonamento de threads:

- Escalonamento cooperativo e preemptivo
- Earliest Deadline First (EDF)
- Escalonamento Meta IRQ implementando o comportamento de “interrupt bottom half” ou “tasklet”
- Timeslicing: permite divisão de tempo entre threads preemptíveis de mesma prioridade
- Múltiplas estratégias de enfileiramento:
  - Fila de prontos com lista encadeada simples
  - Fila de prontos com árvore vermelho/preto
  - Fila de prontos de múltiplas filas tradicional

### Suporte a Bluetooth Low Energy 5.0

Compatível com Bluetooth 5.0 (ESR10) e suporte ao controlador Bluetooth Low Energy (camada de enlace LE). Inclui malha Bluetooth e um controlador Bluetooth pronto para qualificação Bluetooth.

- Perfil de Acesso Genérico (GAP) com todos os papéis LE possíveis
- Perfil de Atributo Genérico (GATT)
- Suporte a pareamento, incluindo o recurso Secure Connections do Bluetooth 4.2
- Abstração limpa de driver HCI
- Interface HCI bruta para executar o Zephyr como um Controlador em vez de uma pilha Host completa
- Verificado com vários controladores populares
- Altamente configurável

Suporte a Mesh:

- Recursos Relay, Friend Node, Low-Power Node (LPN) e GATT Proxy
- Ambos os portadores de Provisioning suportados (PB-ADV e PB-GATT)
- Altamente configurável, cabendo em dispositivos com pelo menos 16k de RAM

*Referência: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## Primeiros Passos

Este wiki abrange o suporte do [Zephyr](https://www.zephyrproject.org/) para o [XIAO SAMD21 Zephyr(RTOS) Getting Started](https://docs.zephyrproject.org/latest/boards/seeed/seeeduino_xiao/doc/index.html). Com a ajuda deste guia, você poderá utilizar o conjunto de recursos disponível para a placa.

O primeiro passo para trabalhar com o Zephyr é configurar o SDK e a cadeia de ferramentas para desenvolvimento local. O [guia de primeiros passos do Zephyr](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) deve ser consultado para o procedimento de configuração associado necessário para o seu ambiente.

Depois que a cadeia de ferramentas do Zephyr tiver sido configurada e um SDK associado tiver sido baixado, você poderá iniciar o desenvolvimento de aplicações.

Para programar o Xiao SAMD21 podem ser seguidos os passos abaixo:

1. Compile um exemplo ou a sua aplicação
2. Conecte o Xiao SAMD21
3. Faça um curto entre o pino RST e o GND (usando os pontos de teste visíveis) para inicializar o MCU em modo bootloader (ou pressione o botão RESET em uma placa de expansão conectada duas vezes seguidas rapidamente)
4. Prossiga usando `west flash` para gravar o seu firmware na placa

O exemplo mais simples é executar o exemplo "Hello World" na placa. Depois de mudar para o diretório da instalação do Zephyr, execute os seguintes comandos.

```
west build -p always -b seeeduino_xiao samples/subsys/usb/console
```

Pressione RESET duas vezes ou faça um curto entre o pino RST e o GND:

```
west flash
```

Encontre a porta do seu dispositivo digitando `ls /dev/tty*` e confirmando qual dispositivo aparece quando o seu USB é conectado.

No meu exemplo, vejo `/dev/ttyACM0` como o dispositivo recém-adicionado.

Usando o `screen`, você pode então se conectar e monitorar a resposta serial:

```
screen /dev/ttyACM0 115200
```

Você deverá ver uma resposta semelhante à seguinte:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Hello World! arm
Hello World! arm
Hello World! arm
Hello World! arm
```

Para auxiliar no processo de uso do Zephyr com o Xiao e sua placa de expansão, foi construído um repositório com vários overlays e configurações usados aqui. Os comandos incluídos neste artigo do wiki assumem que ele está localizado em `../applications/xiao-zephyr-examples` em relação ao diretório raiz do Zephyr. Um caminho alternativo pode ser fornecido aos comandos abaixo atualizando-o.

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## Preparação de Hardware

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO SAMD21</th>
      <th>Placa de Expansão Seeed Studio</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
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

### Conhecimentos do Desenvolvedor

#### Placa de Expansão XIAO

  Para usar módulos Grove com o Seeed Studio XIAO SAMD21, usaremos uma [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) e conectaremos o XIAO SAMD21 nela.

  Depois disso, os conectores Grove na placa podem ser usados para conectar módulos Grove

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### Definições de Pinos

  Você precisa seguir o gráfico abaixo para usar os números de pino internos apropriados ao conectar os módulos Grove aos conectores Grove no Grove Shield para Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg"style={{width:900, height:'auto'}}/></div>

### Funcionalidade Primária

- LED Onboard
- USB HID
- LittleFS
- TFLite

#### LED Onboard

Neste exemplo, usaremos o exemplo blinky para piscar o LED onboard.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/blinky
```

Pressione RESET duas vezes ou faça um curto entre o pino RST e o GND:

```
west flash
```

Você verá o LED amarelo onboard alternar entre ligado e desligado, criando um efeito de piscar.

Vamos nos aprofundar um pouco neste exemplo para ver por que ele funciona.

O código de exemplo associado faz referência a led0:

```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

Isso é definido no código devicetree do Xiao SAMD21 por meio de um alias:

```
 aliases {
  led0 = &led;
 };

 leds {
  compatible = "gpio-leds";
  led: led_0 {
   gpios = <&porta 17 GPIO_ACTIVE_LOW>;
   label = "LED";
  };
 };
```

Ele corresponde ao pino PA17 na placa. Isso pode ser encontrado através do esquemático do Xiao SAMD21, observando o MCU e vendo a rotulagem nos pinos.

Para os pinos com o breakout do Xiao, você não precisa usar diretamente o mapeamento de pinos &porta e &portb, pois os arquivos da placa fornecem um conector Xiao que simplifica a interface.

Por exemplo, se eu fosse fazer referência a D0, eu o referenciaria como `&porta 2` ou `&xiao_d 0`.

```
/ {
 xiao_d: connector {
  compatible = "seeed,xiao-gpio";
  #gpio-cells = <2>;
  gpio-map-mask = <0xffffffff 0xffffffc0>;
  gpio-map-pass-thru = <0 0x3f>;
  gpio-map
   = <0 0 &porta 2 0>  /* D0 */
   , <1 0 &porta 4 0>  /* D1 */
   , <2 0 &porta 10 0>  /* D2 */
   , <3 0 &porta 11 0>  /* D3 */
   , <4 0 &porta 8 0>  /* D4 */
   , <5 0 &porta 9 0>  /* D5 */
   , <6 0 &portb 8 0>  /* D6 */
   , <7 0 &portb 9 0>  /* D7 */
   , <8 0 &porta 7 0>  /* D8 */
   , <9 0 &porta 5 0>  /* D9 */
   , <10 0 &porta 6 0>  /* D10 */
   ;
 };
};
```

#### USB HID

Para este aplicativo de exemplo usaremos o exemplo USB HID Mouse para permitir que o Xiao SAMD21 acione cliques do mouse para o computador host.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/usb/hid-mouse --  -DDTC_OVERLAY_FILE=/home/nineso/zephyrproject/zephyr/boards/shields/seeed_xiao_expansion_board/seeed_xiao_expansion_board.overlay
```

Pressione RESET duas vezes ou faça um curto entre o pino RST e o GND:

```
west flash
```

Depois que o seu Xiao reiniciar você já deverá conseguir controlar o botão esquerdo do mouse por meio do botão na sua placa de expansão. Tente passar o mouse sobre algum texto e clicar duas vezes rapidamente no botão. Você verá o texto ser destacado de maneira semelhante a como se estivesse usando o seu mouse normal para clicar com o botão esquerdo. Você também notará que o LED onboard acende quando você clica no botão, pois o exemplo também depende de um LED definido no devicetree.

Botões adicionais podem ser configurados para uso com o exemplo, pois ele permite que até 4 botões sejam configurados para acionar tanto botões quanto direção do mouse para fins de demonstração.

```
 buttons {
  compatible = "gpio-keys";
  xiao_button0: button_0 {
   gpios = <&xiao_d 1 (GPIO_PULL_UP | GPIO_ACTIVE_LOW)>;
   label = "SW0";
   zephyr,code = <INPUT_KEY_0>;
  };
 };

 aliases {
  sw0 = &xiao_button0;
 };
```

Você pode ver aqui pelo exemplo que `&xiao_d` 1 é usado aqui para indicar o pino D1. Esse mapeamento é fornecido pelos arquivos da placa Xiao SAMD21 e o torna conveniente para conectar a um determinado pino, já que você não precisa saber o mapeamento interno do MCU, podendo confiar no pinout do Xiao.

Para o exemplo HID Mouse os botões são determinados se forem `compatible = "gpio-keys";` e se tiverem um mapeamento para teclas associadas (0-3 para o mouse). Neste caso estamos usando `zephyr,code = <INPUT_KEY_0>;`, que corresponde ao botão esquerdo do mouse.

O alias `led0` é definido pelo arquivo devicetree da placa, como mencionado na seção anterior.

#### LittleFS

Para este exemplo usaremos o exemplo littlefs do Zephyr para criar uma partição littlefs e salvar o arquivo no sistema de arquivos. Depois vamos reconectar e confirmar que ele ainda está lá por meio da saída serial.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/fs/littlefs -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Pressione RESET duas vezes ou faça um curto entre o pino RST e o GND:

```
west flash
```

Aguarde um momento para o MCU reiniciar após o flashing e conecte ao monitor:

```
screen /dev/ttyACM0 115200
```

Com isso carregado você deverá ver algo semelhante a:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Sample program to r/w files on littlefs
Area 2 at 0x3c000 on nvmctrl@41004000 for 16384 bytes
I: LittleFS version 2.8, disk version 2.1
I: FS at nvmctrl@41004000:0x3c000 is 64 0x100-byte blocks with 512 cycle
I: sizes: rd 16 ; pr 16 ; ca 64 ; la 32
E: WEST_TOPDIR/modules/fs/littlefs/lfs.c:1351: Corrupted dir pair at {0x0, 0x1}
W: can't mount (LFS -84); formatting
I: /lfs mounted
/lfs mount: 0
/lfs: bsize = 16 ; frsize = 256 ; blocks = 64 ; bfree = 62

Listing dir /lfs ...
/lfs/boot_count read count:0 (bytes: 0)
/lfs/boot_count write new boot count 1: [wr:1]
I: Test file: /lfs/pattern.bin not found, create one!
------ FILE: /lfs/pattern.bin ------
01 55 55 55 55 55 55 55 02 55 55 55 55 55 55 55
03 55 55 55 55 55 55 55 04 55 55 55 55 55 55 55
05 55 55 55 55 55 55 55 06 55 55 55 55 55 55 55
07 55 55 55 55 55 55 55 08 55 55 55 55 55 55 55
09 55 55 55 55 55 55 55 0a 55 55 55 55 55 55 55
0b 55 55 55 55 55 55 55 0c 55 55 55 55 55 55 55
```

```
screen /dev/ttyACM0 115200
```

Agora, conectando novamente ao monitor serial, não vemos a formatação nem é necessário criar um arquivo:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Sample program to r/w files on littlefs
Area 2 at 0x3c000 on nvmctrl@41004000 for 16384 bytes
I: LittleFS version 2.8, disk version 2.1
I: FS at nvmctrl@41004000:0x3c000 is 64 0x100-byte blocks with 512 cycle
I: sizes: rd 16 ; pr 16 ; ca 64 ; la 32
/lfs mount: 0
/lfs: bsize = 16 ; frsize = 256 ; blocks = 64 ; bfree = 59

Listing dir /lfs ...
[FILE] boot_count (size = 1)
[FILE] pattern.bin (size = 547)
/lfs/boot_count read count:1 (bytes: 1)
/lfs/boot_count write new boot count 2: [wr:1]
------ FILE: /lfs/pattern.bin ------
02 55 55 55 55 55 55 55 03 55 55 55 55 55 55 55
04 55 55 55 55 55 55 55 05 55 55 55 55 55 55 55
06 55 55 55 55 55 55 55 07 55 55 55 55 55 55 55
08 55 55 55 55 55 55 55 09 55 55 55 55 55 55 55
0a 55 55 55 55 55 55 55 0b 55 55 55 55 55 55 55
0c 55 55 55 55 55 55 55 0d 55 55 55 55 55 55 55
0e 55 55 55 55 55 55 55 0f 55 55 55 55 55 55 55
10 55 55 55 55 55 55 55 11 55 55 55 55 55 55 55
12 55 55 55 55 55 55 55 13 55
```

#### TFLite - Hello World

Habilite o TFLite com o Zephyr e atualize:

```
west config manifest.project-filter -- +tflite-micro
west update
```

Para este exemplo vamos usar o exemplo tflite "Hello World" junto com nosso overlay e conf de console para ler a resposta via serial USB.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/modules/tflite-micro/hello_world -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Pressione RESET duas vezes ou faça um curto entre o pino RST e o GND:

```
west flash
```

Aguarde um momento para o MCU reiniciar após o flashing e conecte ao monitor:

```
screen /dev/ttyACM0 115200
```

Você verá resultados retornados pelo console:

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

### Componentes Adicionais

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Display I2C
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Botão
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Buzzer
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Cartão SD
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)

#### Grove - Expansion Board - Display I2C

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/xiao_expansion_oled1.jpg" style={{width:600, height:'auto'}}/></div>

Para testar esta configuração podemos usar um exemplo existente com o Zephyr:

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/drivers/display -- -DSHIELD=seeed_xiao_expansion_board
```

Pressione RESET duas vezes ou faça um curto entre o pino RST e o GND:

```
west flash
```

Você verá um display mostrando múltiplos quadrados pretos e um quadrado piscando no canto, dado que este display só suporta duas cores.

Vamos nos aprofundar um pouco neste exemplo para ver por que ele funciona:

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
```

O arquivo overlay do shield neste exemplo configura uma tela OLED SSD1306 no registrador 0x3C. Ela é selecionada como o display zephyr na seção chosen.

#### Grove - Expansion Board - Botão

Para testar esta configuração podemos usar um exemplo existente com o Zephyr, que usaremos junto com o overlay e o conf do console USB.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/button -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf -DSHIELD=seeed_xiao_expansion_board
```

Pressione RESET duas vezes ou faça um curto entre o pino RST e o GND:

```
west flash
```

Aguarde um momento para o MCU reiniciar após o flashing e conecte ao monitor:

```
screen /dev/ttyACM0 115200
```

Aperto do botão com o exemplo acionará o LED onboard para acender.

Você verá resultados retornados pelo console:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Set up button at gpio@41004400 pin 4
Set up LED at gpio@41004400 pin 17
Press the button
Button pressed at 420744116
Button pressed at 454208099
Button pressed at 484598863
Button pressed at 518217016
Button pressed at 550754013
Button pressed at 591496990
```

Vamos nos aprofundar um pouco neste exemplo para ver por que ele funciona:

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

O arquivo de overlay do app é usado para configurar vários componentes da placa. Usando esse arquivo, o exemplo do botão pode ser utilizado, pois o overlay permite que o Zephyr configure o botão e o torne disponível para o código associado.

Neste caso, ele está usando a interface do conector &xiao_d para associar D1 como um botão. Alternativamente, poderíamos ter usado a interface `&porta` aqui como `&porta 4`, que é o pino correspondente no MCU associado ao D1.

#### Grove - Placa de Expansão - Buzzer

Vamos ativar nosso buzzer usando o exemplo de PWM piscante para controlar sua ativação por meio de um sinal PWM. Para isso, usaremos um overlay personalizado que habilita o PWM para o pino A3.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-samd21/xiao_expansion_buzzer.overlay"
```

Depois de enviar o arquivo uf2 você deverá começar a ouvir uma série de bipes que mudam de som à medida que o exemplo é executado.

Vamos ver por que isso funciona:

```
/delete-node/ &pwm_led0;

/ {
 aliases {
  pwm-led = &pwm_led0;
 };

    pwm_leds {
        status = "okay";
        compatible = "pwm-leds";

        pwm_led0: pwm_led_0 {
            pwms = <&tcc1 1 PWM_HZ(880) >;
        };
    };
};

&pinctrl {
 pwm_default: pwm_default {
  group1 {
   pinmux = <PA11E_TCC1_WO1>;
  };
 };
};

&tcc1 {
 status = "okay";
 compatible = "atmel,sam0-tcc-pwm";
 /* Gives a maximum period of 1.4 s */
 prescaler = <1024>;
 #pwm-cells = <2>;

 pinctrl-0 = <&pwm_default>;
 pinctrl-names = "default";
};
```

O overlay em uso primeiro remove o node `pwm_led0` existente, pois esta placa já está configurada com esse alias. Em seguida, ele configura o pino A3 para uso como um PWM.

Estamos usando o pino A3, que corresponde ao GPIO PA11 no SAMD21. Dado que seu pinmux PWM associado é PA11E_TCC1_WO1, usamos o temporizador tcc1 para o PWM.

#### Grove - Placa de Expansão - Cartão SD

Aqui usaremos o exemplo de filesystem junto com o shield Xiao Expansion Board para tentar fazer a interface com o leitor de cartão SD via SPI. O shield da placa de expansão tem o pino CS configurado para o pino `&xiao_d 2` associado, portanto nenhum trabalho é necessário da sua parte para associar essa capacidade à placa além de adicionar o shield. Para prepará-lo ainda mais, estamos usando uma configuração personalizada que habilita a funcionalidade do cartão SD.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/subsys/fs/fs_sample -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.overlay" -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf $(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

Depois de enviar o arquivo uf2 conecte ao monitor:

```
screen /dev/ttyACM0 115200
```

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
[00:00:00.197,000] <inf> sd: Maximum SD clock is under 25MHz, using clock of 10000000Hz
[00:00:00.198,000] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.

Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

Neste caso, meu cartão SD tinha dois arquivos. Seus nomes e tamanhos foram enviados para o meu console.

Vamos analisar os elementos relevantes em ação aqui:

```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

Na configuração associada estamos habilitando SPI, o driver de disco SDMMC e o GPIO. Sem essa configuração o overlay levará a um erro, pois o exemplo não consegue encontrar o cartão SD.

A parte relevante do shield Xiao Expansion Board é na verdade substituída neste exemplo via o `xiao_expansion_sd.overlay` usado para o Xiao SAMD21 mostrado abaixo:

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
  spi-max-frequency = <10000000>;
 };
};
```

Como mencionado anteriormente, o mapeamento do pino `&xiao_d 2` é usado para permitir que o pino D2 seja selecionado para isso independentemente da placa usada, desde que ela ofereça suporte à configuração de pinos `&xiao_d`.

A razão pela qual não estamos usando o overlay do shield aqui, mas o substituindo, é que o `spi-max-frequency` de `24000000` definido pelo shield é muito alto, o que faz com que o SAMD21 falhe.

#### Grove - Sensor de Temperatura e Umidade (SHT31)

Primeiro solde os pinos e conecte seu Xiao SAMD21 à placa de expansão. Em seguida, conecte um cabo de conector Grove entre o Grove SHT31 e uma das portas I2C na placa de expansão.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/xiaod21_sht31.jpg" style={{width:600, height:'auto'}}/></div>

Para testar essa configuração podemos usar um exemplo existente no Zephyr no qual iremos habilitar o suporte ao console USB com nosso overlay e conf.

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay $(dirname $(pwd))/applications/xiao-zephyr-examples/console.overlay" -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/console.conf
```

Pressione RESET duas vezes ou faça um curto entre o pino RST e o GND:

```
west flash
```

Espere um momento para o MCU reiniciar após o flashing e conecte ao monitor:

```
screen /dev/ttyACM0 115200
```

Você verá resultados retornados pelo console:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
SHT3XD: 26.13 Cel ; 47.34 %RH
SHT3XD: 26.11 Cel ; 46.93 %RH
SHT3XD: 26.14 Cel ; 46.78 %RH
SHT3XD: 26.17 Cel ; 46.60 %RH
SHT3XD: 26.19 Cel ; 46.25 %RH
SHT3XD: 26.21 Cel ; 46.01 %RH
SHT3XD: 26.21 Cel ; 45.82 %RH
SHT3XD: 26.23 Cel ; 46.28 %RH
SHT3XD: 26.27 Cel ; 47.11 %RH
SHT3XD: 26.27 Cel ; 47.72 %RH
```

Vamos nos aprofundar um pouco neste exemplo para ver por que ele funciona:

```
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

O arquivo de overlay do app é usado para configurar vários componentes da placa. Usando esse arquivo, o exemplo SHT31 pode ser utilizado, pois o overlay informa à [lógica do exemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) como configurar o sensor para nossa placa.

#### Módulo de Display LCD de 1,69 polegadas, Resolução 240×280, Interface SPI

Para este exemplo usaremos SPI para conectar a um LCD de 1,69 polegadas com resolução de 240x280.

Primeiro conecte sua placa à tela LCD usando a imagem a seguir como guia (neste caso estamos usando o Xiao SAMD21, mas o mesmo layout de pinos é usado para a conexão aqui).

| Display LCD SPI de 1,69 polegadas| XIAO SAMD21 |
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

Em seguida, com o hardware preparado, podemos compilar e gravar:

```
cd ~/zephyrproject/zephyr
west build -p always -b seeeduino_xiao samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
```

Pressione RESET duas vezes ou faça um curto entre o pino RST e o GND:

```
west flash
```

Com o novo firmware em funcionamento, o dispositivo agora mostra a mesma tela de demonstração que vimos anteriormente na placa de expansão, só que agora atualizada para o LCD colorido via SPI.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/samd21/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_samd21_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>

## ✨ Projeto de Contribuidor

- Este projeto é apoiado pelo [Projeto de Contribuidores](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=57293601) da Seeed Studio.
- Agradecemos **os esforços de Tim** e o seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/Honorary-Contributors/).

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
