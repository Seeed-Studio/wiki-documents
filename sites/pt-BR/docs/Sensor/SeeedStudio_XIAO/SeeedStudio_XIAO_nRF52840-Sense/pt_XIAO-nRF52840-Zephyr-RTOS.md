---
description: XIAO nRF52840(sense) com Zephyr(RTOS)
title: XIAO nRF52840(sense) com Zephyr(RTOS)
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-nRF52840-Zephyr-RTOS
last_update:
  date: 06/07/2024
  author: Tim
createdAt: '2023-07-26'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/pt-br/XIAO-nRF52840-Zephyr-RTOS/
---

# XIAO nRF52840(sense) com Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-ble.png"/></div>

## O que é RTOS

Um dos componentes mais importantes dos sistemas embarcados atuais é o **RTOS**, também conhecido como **Real-Time Operating System** (Sistema Operacional em Tempo Real), que é responsável por tudo, desde o agendamento de tarefas até a execução de aplicações.

O **RTOS** é projetado para fornecer um modo de execução previsível. Quando o processamento precisa atender ao limite de tempo do sistema, utiliza-se um RTOS. Portanto, em comparação com um GPOS (General Purpose Operating System), o RTOS costuma ser leve e pequeno em tamanho, e geralmente fornece apenas as funções necessárias para executar tipos específicos de aplicações em hardware específico. Em alguns casos, os desenvolvedores podem modificar o RTOS existente, reduzi-lo para fornecer apenas a funcionalidade exigida por uma aplicação específica e/ou personalizar suas características de funcionalidade ou desempenho.

## O que é o [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

O sistema operacional [**Zephyr**](https://www.zephyrproject.org/) é baseado em um kernel de pequeno porte projetado para uso em sistemas embarcados e com recursos limitados: desde sensores ambientais embarcados simples e wearables com LEDs até controladores embarcados sofisticados, smartwatches e aplicações sem fio de IoT.

## Recursos

O Zephyr oferece um grande e crescente número de recursos, incluindo:

### Amplo conjunto de serviços de Kernel

O Zephyr oferece vários serviços familiares para desenvolvimento:

- *Serviços de multithreading* para threads cooperativas, baseadas em prioridade, não-preemptivas e preemptivas, com fatiamento de tempo round robin opcional. Inclui suporte a API compatível com POSIX pthreads.
- *Serviços de interrupção* para registro em tempo de compilação de manipuladores de interrupção.
- *Serviços de alocação de memória* para alocação dinâmica e liberação de blocos de memória de tamanho fixo ou variável.
- *Serviços de sincronização entre threads* para semáforos binários, semáforos contadores e semáforos mutex.
- *Serviços de passagem de dados entre threads* para filas de mensagens básicas, filas de mensagens avançadas e fluxos de bytes.
- *Serviços de gerenciamento de energia*, como gerenciamento de energia do sistema abrangente, definido pela aplicação ou por política, e gerenciamento de energia de dispositivo, definido pelo driver e em nível mais granular.

### Múltiplos algoritmos de escalonamento

  O Zephyr fornece um conjunto abrangente de opções de escalonamento de threads:

- Escalonamento cooperativo e preemptivo
- Earliest Deadline First (EDF)
- Escalonamento Meta IRQ implementando o comportamento de “interrupt bottom half” ou “tasklet”
- Timeslicing: permite fatiamento de tempo entre threads preemptíveis de mesma prioridade
- Múltiplas estratégias de enfileiramento:
  - Fila pronta com lista encadeada simples
  - Fila pronta com árvore vermelho/preto
  - Fila pronta multi-fila tradicional

### Suporte a Bluetooth Low Energy 5.0

Compatível com Bluetooth 5.0 (ESR10) e suporte a Bluetooth Low Energy Controller (LE Link Layer). Inclui Bluetooth mesh e um controlador Bluetooth pronto para qualificação Bluetooth.

- Generic Access Profile (GAP) com todos os possíveis papéis LE
- Generic Attribute Profile (GATT)
- Suporte a pareamento, incluindo o recurso Secure Connections do Bluetooth 4.2
- Abstração limpa de driver HCI
- Interface HCI bruta para executar o Zephyr como um Controller em vez de uma pilha completa de Host
- Verificado com vários controladores populares
- Altamente configurável

Suporte a Mesh:

- Recursos de Relay, Friend Node, Low-Power Node (LPN) e GATT Proxy
- Ambos os portadores de Provisioning suportados (PB-ADV e PB-GATT)
- Altamente configurável, cabendo em dispositivos com pelo menos 16k de RAM

*Referência: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## Introdução

Depois que a toolchain do Zephyr for configurada e um SDK associado for baixado, você poderá começar o desenvolvimento de aplicações.

Para o Xiao nrf52840, o [arquivo de descrição da placa](https://docs.zephyrproject.org/latest/boards/seeed/xiao_ble/doc/index.html) pode ser consultado para obter mais informações de configuração.

Para programar o Xiao nrf52840, podem ser seguidos os seguintes passos:

1. Compile um exemplo ou a sua aplicação
2. Conecte o Xiao nrf52840
3. Clique duas vezes no botão `RST` colocando o dispositivo no modo bootloader uf2
4. Execute o comando `west flash -r uf2` para gravar o dispositivo

O exemplo mais simples é executar o exemplo "Hello World" na placa. Depois de mudar para o diretório da instalação do Zephyr, execute os seguintes comandos.

```
west build -p always -b xiao_ble samples/hello_world
```

Se você estiver usando uma placa Xiao nRF52840 Sense, poderá compilar para o arquivo de definição de placa dela usando `xiao_ble/nrf52840/sense` no lugar de `xiao_ble`, assim (para este exemplo não faz diferença):

```
west build -p always -b xiao_ble/nrf52840/sense samples/hello_world
```

Depois que isso for concluído, entre no modo bootloader uf2 e digite:

```
west flash -r uf2
```

Encontre a porta do seu dispositivo; no caso do Ubuntu isso pode ser feito via: `ls /dev/tty*` e confirmando qual dispositivo aparece quando o seu USB é conectado.

No meu exemplo eu vejo `/dev/ttyACM0`:

Usando o screen você pode então se conectar e monitorar a resposta serial:

```
screen /dev/ttyACM0 115200
```

Você deverá ver uma resposta semelhante à seguinte:

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Hello World! xiao_ble/nrf52840
```

Para auxiliar no processo de uso do Zephyr com o Xiao e sua placa de expansão, foi construído um repositório com vários overlays e configurações usados aqui. Os comandos incluídos neste artigo da wiki assumem que ele está localizado em `../applications/xiao-zephyr-examples` em relação à raiz do Zephyr. Um caminho alternativo pode ser fornecido aos comandos abaixo atualizando-o.

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## Preparação de Hardware

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO nrf52840 Sense</th>
      <th>Seeed Studio Expansion Board</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
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

### Conhecimentos do desenvolvedor

#### Placa de Expansão XIAO

  Para usar módulos Grove com o Seeed Studio XIAO nrf52840, usaremos uma [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) e conectaremos o XIAO nrf52840 nela.

  Depois disso, os conectores Grove na placa podem ser usados para conectar módulos Grove

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### Definições de pinos

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=nrf52840sense" target="_blank" rel="noopener noreferrer">Explore o Pinout Interativo</a>
</div>

  Você precisa seguir o gráfico abaixo para usar os números de pinos internos apropriados ao conectar os módulos Grove aos conectores Grove no Grove Shield para Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/pinout2.png"style={{width:900, height:'auto'}}/></div>

### Funcionalidade principal

- LED onboard
- IMU onboard (Sense)
- Mic onboard (Sense)
- Bluetooth
- TFLite

#### LED onboard

Neste exemplo usaremos o exemplo blinky para piscar o LED onboard.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky
```

Pressione duas vezes o botão RESET e então faça o flash:

```
west flash -r uf2
```

Você verá o LED vermelho onboard alternar entre ligado e desligado, criando um efeito de piscar.

Vamos nos aprofundar um pouco neste exemplo para ver por que ele funciona.

O código de exemplo associado faz referência a led0:

```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

Isso é definido no código devicetree do Xiao nRF52840 por meio de um alias:

```
 aliases {
  led0 = &led0;
 };

 leds {
  compatible = "gpio-leds";
  led0: led_0 {
   gpios = <&gpio0 26 GPIO_ACTIVE_LOW>;
   label = "Red LED";
  };
  ...
  }
```

Ele corresponde ao pino 26 na placa.

Para os pinos com o breakout do Xiao você não precisa usar diretamente o mapeamento de pinos &gpio0, pois os arquivos da placa fornecem um conector Xiao que simplifica a interface.

Por exemplo, se eu fosse referenciar D0, eu o referenciaria como `&gpio 2` ou `&xiao_d 0`.

```
/ {
 xiao_d: connector {
  compatible = "seeed,xiao-gpio";
  #gpio-cells = <2>;
  gpio-map-mask = <0xffffffff 0xffffffc0>;
  gpio-map-pass-thru = <0 0x3f>;
  gpio-map
   = <0 0 &gpio0 2 0>  /* D0 */
   , <1 0 &gpio0 3 0>  /* D1 */
   , <2 0 &gpio0 28 0>  /* D2 */
   , <3 0 &gpio0 29 0>  /* D3 */
   , <4 0 &gpio0 4 0>  /* D4 */
   , <5 0 &gpio0 5 0>  /* D5 */
   , <6 0 &gpio1 11 0>  /* D6 */
   , <7 0 &gpio1 12 0>  /* D7 */
   , <8 0 &gpio1 13 0>  /* D8 */
   , <9 0 &gpio1 14 0>  /* D9 */
   , <10 0 &gpio1 15 0>  /* D10 */
   ;
 };
};
```

#### IMU onboard (Sense)

Um dos principais recursos do Xiao nrf52840 é seu sensor IMU integrado. Com esses dados, é possível treinar um modelo de aprendizado de máquina, detectar gestos, movimento da placa, etc.

Para testar este recurso, usaremos um exemplo integrado que utiliza o IMU e depois analisaremos o código associado para entender por que ele funciona.

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/sensor/lsm6dsl
```

Pressione duas vezes o botão RESET e então faça o flash:

```
west flash -r uf2
```

Em seguida, você precisará se conectar para ver a saída:

```
screen /dev/ttyACM0 115200
```

Isso deve exibir algo semelhante a isto:

```
3LSM6DSL sensor samples:

accel x:1.330409 ms/2 y:-1.705484 ms/2 z:9.957133 ms/2
gyro x:0.049632 dps y:-0.070860 dps z:-0.006184 dps
loop:46 trig_cnt:9677

3LSM6DSL sensor samples:

accel x:1.314257 ms/2 y:-1.734198 ms/2 z:9.902696 ms/2
gyro x:-0.220216 dps y:0.032833 dps z:-0.000458 dps
loop:47 trig_cnt:9892

3LSM6DSL sensor samples:

accel x:1.414158 ms/2 y:-1.476371 ms/2 z:9.835697 ms/2
gyro x:0.035430 dps y:-0.132252 dps z:-0.007788 dps
loop:48 trig_cnt:10107
```

Por que isso funciona? Podemos ver o [código de exemplo](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/sensor/lsm6dsl) no repositório do Zephyr no GitHub.

```
 const struct device *const lsm6dsl_dev = DEVICE_DT_GET_ONE(st_lsm6dsl);
```

A lógica do exemplo encontra o objeto devicetree `st_lsm6dsl` associado para a placa alvo. Podemos visualizar o devicetree do Xiao nrf52840 sense para ver melhor como isso está configurado:

```
 lsm6ds3tr-c-en {
  compatible = "regulator-fixed-sync", "regulator-fixed";
  enable-gpios = <&gpio1 8 (NRF_GPIO_DRIVE_S0H1 | GPIO_ACTIVE_HIGH)>;
  regulator-name = "LSM6DS3TR_C_EN";
  regulator-boot-on;
  startup-delay-us = <3000>;
 };
```

```
&i2c0 {
 compatible = "nordic,nrf-twim";
 /* Cannot be used together with spi0. */
 status = "okay";
 pinctrl-0 = <&i2c0_default>;
 pinctrl-1 = <&i2c0_sleep>;
 pinctrl-names = "default", "sleep";
 clock-frequency = <I2C_BITRATE_FAST>;

 lsm6ds3tr_c: lsm6ds3tr-c@6a {
  compatible = "st,lsm6dsl";
  reg = <0x6a>;
  irq-gpios = <&gpio0 11 GPIO_ACTIVE_HIGH>;
  status = "okay";
 };
};
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/imu.jpg" style={{width:500, height:'auto'}}/></div>

Um GPIO está sendo usado para habilitar a alimentação do pino. Você pode ver pelo arquivo de definição que ele está usando o GPIO1 8. Eu destaquei a parte relevante do [esquemático do Xiao nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf) abaixo:

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-imu.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-imu.png" style={{width:500, height:'auto'}}/></div>

A partir deste destaque do esquemático, você pode ver que o GPIO1 8 é o pino de habilitação para o IMU. Além disso, o GPIO0 11 é o pino de interrupção. Assim, isso é refletido no trecho de devicetree acima.

#### Mic onboard (Sense)

Um dos principais recursos do Xiao nrf52840 é seu microfone integrado. Assim como o IMU, ele permite muitas aplicações de aprendizado de máquina por meio de seu uso.

Para testar este recurso, usaremos um exemplo integrado que utiliza o microfone e depois analisaremos o código associado para entender por que ele funciona.

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/drivers/audio/dmic
```

Pressione duas vezes o botão RESET e então faça o flash:

```
west flash -r uf2
```

Em seguida, você precisará se conectar para ver a saída:

```
screen /dev/ttyACM0 115200
```

Isso deve exibir algo semelhante a isto:

```
[00:00:00.297,088] <inf> dmic_sample: PCM output rate: 16000, channels: 1
[00:00:00.297,119] <inf> dmic_nrfx_pdm: PDM clock frequency: 1280000, actual PCM rate: 16000
[00:00:00.397,216] <inf> dmic_sample: 0 - got buffer 0x20008380 of 3200 bytes
[00:00:00.497,222] <inf> dmic_sample: 1 - got buffer 0x20006a80 of 3200 bytes
[00:00:00.597,229] <inf> dmic_sample: 2 - got buffer 0x20005180 of 3200 bytes
[00:00:00.697,235] <inf> dmic_sample: 3 - got buffer 0x20008380 of 3200 bytes
[00:00:00.797,241] <inf> dmic_sample: 4 - got buffer 0x20006a80 of 3200 bytes
[00:00:00.897,247] <inf> dmic_sample: 5 - got buffer 0x20005180 of 3200 bytes
[00:00:00.997,222] <inf> dmic_sample: 6 - got buffer 0x20008380 of 3200 bytes
[00:00:01.097,229] <inf> dmic_sample: 7 - got buffer 0x20006a80 of 3200 bytes
[00:00:01.097,259] <inf> dmic_sample: PCM output rate: 16000, channels: 2
[00:00:01.097,259] <inf> dmic_nrfx_pdm: PDM clock frequency: 1280000, actual PCM rate: 16000
[00:00:01.197,387] <inf> dmic_sample: 0 - got buffer 0x20008380 of 6400 bytes
[00:00:01.297,393] <inf> dmic_sample: 1 - got buffer 0x20005180 of 6400 bytes
[00:00:01.397,399] <inf> dmic_sample: 2 - got buffer 0x20006a80 of 6400 bytes
[00:00:01.497,375] <inf> dmic_sample: 3 - got buffer 0x20008380 of 6400 bytes
[00:00:01.597,381] <inf> dmic_sample: 4 - got buffer 0x20005180 of 6400 bytes
[00:00:01.697,387] <inf> dmic_sample: 5 - got buffer 0x20006a80 of 6400 bytes
[00:00:01.797,393] <inf> dmic_sample: 6 - got buffer 0x20008380 of 6400 bytes
[00:00:01.897,399] <inf> dmic_sample: 7 - got buffer 0x20005180 of 6400 bytes
[00:00:01.897,399] <inf> dmic_sample: Exiting
```

Por que isso funciona? Podemos ver o [código de exemplo](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/drivers/audio/dmic) no repositório do Zephyr no GitHub.

Este exemplo demonstra o seguinte:

> Este é um aplicativo muito simples destinado a mostrar como usar a :ref:`Audio DMIC API` e também a servir de auxílio no desenvolvimento de drivers para implementar essa API. Ele realiza duas transferências PDM com configurações diferentes (usando um canal e dois canais), mas não processa de forma alguma os dados de áudio recebidos.

```
const struct device *const dmic_dev = DEVICE_DT_GET(DT_NODELABEL(dmic_dev));
```

A lógica do exemplo encontra o objeto devicetree `dmic_dev` associado para a placa alvo. Podemos visualizar o devicetree do Xiao nrf52840 sense para ver melhor como isso está configurado:

```
/ {
 msm261d3526hicpm-c-en {
  compatible = "regulator-fixed";
  enable-gpios = <&gpio1 10 (NRF_GPIO_DRIVE_S0H1 | GPIO_ACTIVE_HIGH)>;
  regulator-name = "MSM261D3526HICPM-C-EN";
 };
}

&pdm0 {
 pinctrl-0 = <&pdm0_default>;
 pinctrl-1 = <&pdm0_sleep>;
 pinctrl-names = "default", "sleep";
 clock-source = "PCLK32M";
};
```

No overlay do projeto de exemplo, este regulador é então habilitado:

```
/ {
 msm261d3526hicpm-c-en {
  regulator-boot-on;
 };
};

dmic_dev: &pdm0 {
 status = "okay";
};
```

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/mic.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/mic.jpg" style={{width:500, height:'auto'}}/></div>

Um GPIO está sendo usado para habilitar a alimentação do pino. Eu destaquei a parte relevante do [esquemático do Xiao nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf) abaixo:

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-mic.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-mic.png" style={{width:500, height:'auto'}}/></div>

A partir deste destaque do esquemático, você pode ver que o GPIO1 10 é o pino de habilitação para o microfone.

#### Bluetooth

Para testar esta configuração, podemos usar um exemplo existente com o Zephyr:

```
west build -p always -b xiao_ble samples/bluetooth/observer
```

Faça o flash na sua placa:

```
west flash -r uf2
```

Aguarde um momento para o MCU reiniciar após o flash e conecte-se para monitorar:

```
screen /dev/ttyACM0 115200
```

Você verá um console disponível para enviar comandos para a placa:

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Starting Observer Demo
Started scanning...
Exiting main thread.
Device found: EC:11:27:22:AF:D2 (public) (RSSI -74), type 0, AD data len 31
Device found: 0D:9A:BE:8D:10:FC (random) (RSSI -81), type 3, AD data len 31
Device found: D2:70:D8:F2:6F:C4 (random) (RSSI -68), type 0, AD data len 20
Device found: 72:7C:3C:87:E2:17 (random) (RSSI -77), type 0, AD data len 17
Device found: 65:65:23:B9:AD:EC (random) (RSSI -68), type 0, AD data len 17
Device found: 6D:39:26:C2:94:B5 (random) (RSSI -70), type 0, AD data len 18
```

```
CONFIG_BT=y
CONFIG_BT_OBSERVER=y
```

O [arquivo conf](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf) aqui habilita recursos relacionados a bluetooth para a build do Zephyr.

#### TFLite - Hello World

Habilite o TFLite com o Zephyr e atualize:

```
west config manifest.project-filter -- +tflite-micro
west update
```

Compile o exemplo e faça o flash na sua placa:

```
west build -p always -b xiao_ble samples/modules/tflite-micro/hello_world
```

Faça o flash na sua placa:

```
west flash -r uf2
```

Aguarde um momento para o MCU reiniciar após o flash e conecte-se para monitorar:

```
screen /dev/ttyACM0 115200
```

Você verá resultados retornados pelo console:

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
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

Informações adicionais sobre TFLite estão fora do escopo deste guia, mas o exemplo serve como um guia para as capacidades do dispositivo e os componentes necessários para executar a configuração do TFLite.

### Componentes adicionais

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Display I2C
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Botão
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Buzzer
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Cartão SD
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Round Display for Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- [Round Display for Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html) - Cartão SD

#### Grove - Placa de Expansão - Display I2C

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/xiao_expansion_oled-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/xiao_expansion_oled-nrf.jpg" style={{width:500, height:'auto'}}/></div>

Para testar esta configuração podemos usar um exemplo existente com o Zephyr:

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash -r uf2
```

Você verá um display mostrando vários quadrados pretos e um quadrado piscando no canto, dado que este display só suporta duas cores.

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
};

```

O shield configura uma tela OLED SSD1306 no registrador 0x3C. Ela é selecionada como o display do Zephyr na seção chosen.

#### Grove - Placa de Expansão - Botão

Para testar esta configuração podemos usar um exemplo existente com o Zephyr:

```
west build -p always -b xiao_ble samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board
```

Grave o firmware na sua placa:

```
west flash -r uf2
```

Aguarde um momento para o MCU reiniciar após a gravação e conecte ao monitor:

```
screen /dev/ttyACM0 115200
```

Pressionar o botão com o exemplo em execução fará o LED onboard acender.

Você verá resultados retornados pelo console:

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Set up button at gpio@50000000 pin 3
Set up LED at gpio@50000000 pin 26
Press the button
Button pressed at 839637
Button pressed at 857904
Button pressed at 883367
Button pressed at 1001258
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

O arquivo de shield / overlay é usado para configurar vários componentes da placa. Usando este arquivo o exemplo do botão pode ser utilizado, pois o overlay permite que o Zephyr configure o botão e o disponibilize para o código associado.

Neste caso o D1 no Xiao nrf52840. Ele é configurado neste overlay para atuar como um botão e é associado ao nome sw0 para permitir que seja usado pelo exemplo, que possui código esperando isso.

#### Grove - Placa de Expansão - Buzzer

Vamos ativar nosso buzzer usando o exemplo blinky PWM para controlar sua ativação por meio de um sinal PWM. Para isso usaremos um overlay personalizado que habilita o PWM para o pino A3.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-nrf52480/xiao_expansion_buzzer.overlay"
```

Após a gravação você deverá começar a ouvir uma série de bipes que mudam de som conforme o exemplo é executado.

Vamos ver por que isso funciona:

```
&pwm0 {
 status = "disabled";
};

&sw_pwm {
 status = "okay";
 channel-gpios = <&gpio0 29 PWM_POLARITY_INVERTED>;
};

&pwm_led0 {
 pwms = <&sw_pwm 0 PWM_MSEC(20) PWM_POLARITY_INVERTED>;
};
```

O overlay configura a lógica de PWM para o pino 29, que corresponde ao pino A3 no pinout do Xiao nrf52840.

#### Grove - Placa de Expansão - Cartão SD

Usaremos aqui o exemplo de filesystem junto com o shield Xiao Expansion Board para tentar fazer a interface com o leitor de cartão SD via SPI. O shield da placa de expansão tem o pino CS configurado para o pino `&xiao_d 2` associado, então nenhum trabalho é necessário da sua parte para associar esse recurso à placa além de adicionar o shield. Para prepará-lo ainda mais estamos usando uma configuração personalizada que habilita a funcionalidade do cartão SD.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

Agora grave e monitore (primeiro pressionando RESET duas vezes para entrar no modo bootloader uf2):

```
west flash -r uf2
```

Você deverá ver uma resposta semelhante a esta:

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
[00:00:00.483,367] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.483,856] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.

Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

Neste caso meu cartão SD tinha dois arquivos. Seus nomes e tamanhos foram enviados para o meu console.

Vamos analisar os elementos relevantes em jogo aqui:

```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

Na configuração associada estamos habilitando o SPI, o driver de disco SDMMC e o GPIO. Sem essa configuração o overlay levará a um erro, pois o exemplo não consegue encontrar o cartão SD.

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

Como mencionado anteriormente, o mapeamento do pino `&xiao_d 2` é usado para permitir que o pino D2 seja selecionado para isso, independentemente da placa usada, desde que ela suporte a configuração de pinos `&xiao_d`.

#### Grove - Sensor de Temperatura e Umidade (SHT31)

Primeiro solde os pinos e conecte seu Xiao nrf52840 à placa de expansão. Em seguida conecte um cabo conector Grove entre o Grove SHT31 e uma das portas I2C na placa de expansão.

Para testar esta configuração podemos usar um exemplo existente com o Zephyr:

```
west build -p always -b xiao_ble samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
```

Grave sua placa depois que ela estiver em modo bootloader uf2:

```
west flash -r uf2
```

Aguarde um momento para o MCU reiniciar após a gravação e conecte ao monitor:

```
screen /dev/ttyACM0 115200
```

Você verá resultados retornados pelo console:

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
SHT3XD: 25.68 Cel ; 54.73 %RH
SHT3XD: 25.75 Cel ; 55.44 %RH
SHT3XD: 25.79 Cel ; 55.95 %RH
SHT3XD: 25.82 Cel ; 55.93 %RH
SHT3XD: 25.84 Cel ; 56.07 %RH
SHT3XD: 25.84 Cel ; 55.69 %RH
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

O arquivo de app overlay é usado para configurar vários componentes da placa. Usando este arquivo o exemplo SHT31 pode ser utilizado, pois o overlay informa à [lógica do exemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) como configurar o sensor para nossa placa.

#### Módulo de Display LCD de 1,69 polegadas, Resolução 240×280, Interface SPI

Para este exemplo usaremos SPI para conectar a um LCD de 1,69 polegadas com resolução de 240x280.

Primeiro conecte sua placa à tela LCD usando a imagem a seguir como guia (neste caso estamos usando o Xiao nrf52840, mas o mesmo layout de pinos é usado para a conexão aqui).

| Display LCD SPI de 1,69 polegadas| XIAO nrf52840 |
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
west build -p always -b xiao_ble samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash -r uf2
```

Com o novo firmware em funcionamento, o dispositivo agora mostra a mesma tela de demonstração que vimos anteriormente na placa de expansão, só que agora atualizada para o LCD colorido via SPI.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/spi_lcd-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/spi_lcd-nrf.jpg" style={{width:500, height:'auto'}}/></div>

#### Display Redondo para Xiao

Para testar esta configuração podemos usar um exemplo existente com o Zephyr:

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

Entre no modo bootloader e grave seu dispositivo:

```
west flash -r uf2
```

Você verá um display mostrando vários cantos coloridos com um canto preto piscando.

Outro exemplo demonstra o uso da tela sensível ao toque:

```
west build -p always -b xiao_ble samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

A demonstração de música mostrada aqui é apenas uma parte da tela real, mas ainda assim demonstra a tela sensível ao toque em ação. Como você pode ver, tocar no botão de play liga a animação de música.

Você pode ver pelo [arquivo de shield](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay) que isso funciona fazendo a interface com o driver de display redondo GC9A01 via SPI e com o módulo de toque CHSC6X via i2c.

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
- Define a lógica de ponteiro LVGL para usar o módulo CHSC6X
- Desativa a serial, pois os pinos são usados para o backlight e interrupção de toque (como visto acima via: `irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`)
- Configura o display redondo para SPI usando os pinos D1, D2 e D3

A [lógica de exemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c) depende do [código de exemplo da demo LVGL](https://github.com/lvgl/lvgl/tree/master/demos/music), que pode ser analisado mais detalhadamente.

#### Display Redondo para Xiao - Cartão SD

Usaremos aqui o exemplo de filesystem junto com o shield Xiao Expansion Board para tentar fazer a interface com o leitor de cartão SD via SPI. O shield da placa de expansão tem o pino CS configurado para o pino associado `&xiao_d 2`, portanto nenhum trabalho é necessário da sua parte para associar esse recurso à placa além de adicionar o shield. Para prepará-lo ainda mais, estamos usando uma configuração personalizada que habilita a funcionalidade do cartão SD.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_round_display
```

Agora faça o flash e monitore (primeiro pressionando RESET duas vezes para entrar no modo bootloader uf2):

```
west flash -r uf2
```

Aguarde um momento para o MCU reiniciar após o flash e conecte-se ao monitor:

```
screen /dev/ttyACM0 115200
```

Você deverá ver uma resposta semelhante a esta:

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
[00:00:00.491,485] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.491,973] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.

Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

Como esperado, o conteúdo do arquivo é exibido de maneira semelhante à saída do exemplo de cartão SD da Xiao Expansion Board.

A parte relevante do shield do display redondo é mostrada abaixo:

```
&xiao_spi {
 status = "okay";
 cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>, <&xiao_d 2 GPIO_ACTIVE_LOW>;

 sdhc_xiao_round_display: sdhc@1 {
  compatible = "zephyr,sdhc-spi-slot";
  reg = <1>;
  status = "okay";
  mmc {
   compatible = "zephyr,sdmmc-disk";
   status = "okay";
  };
  spi-max-frequency = <DT_FREQ_M(24)>;
 };
};
```

D2 é usado para o pino CS do SD.

## ✨ Projeto de Contribuidor

- Este projeto é apoiado pelo [Projeto de Contribuidores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=57293418) da Seeed Studio.
- Agradecemos **os esforços do Tim** e o seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/Honorary-Contributors/).

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
