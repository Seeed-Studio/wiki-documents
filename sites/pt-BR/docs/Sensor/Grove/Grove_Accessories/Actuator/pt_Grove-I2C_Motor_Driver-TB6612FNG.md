---
title: Grove - Driver de Motor I2C (TB6612FNG)
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-I2C_Motor_Driver-TB6612FNG/
slug: /Grove-I2C_Motor_Driver-TB6612FNG
sku: 108020103
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-I2C_Motor_Driver-TB6612FNG/
---

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/main.jpg)

O Grove - I2C Motor Driver (TB6612FNG) pode controlar dois motores DC até 12V/1,2A ou um motor de passo até 12V/1,2A. Com o MCU integrado na placa, ele pode funcionar facilmente com Arduino através da interface I2C Grove.

Esta placa de acionamento é baseada no TB6612FNG, que é um CI driver para motor DC e motor de passo com transistor de saída em estrutura LD MOS com baixa resistência em estado ligado (ON-resistor). Dois sinais de entrada, IN1 e IN2, podem selecionar um entre quatro modos, como CW, CCW, frenagem rápida (short brake) e modo de parada.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versão

| Versão do Produto  | Mudanças                                                                                               | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - I2C Motor Driver (TB6612FNG) | Inicial                                                                                               | Set 2018      |

## Recursos

- MCU integrado na placa
- Modos de função CW/CCW/frenagem rápida/parada
- Circuito de desligamento térmico integrado e circuito de detecção de baixa tensão
- Sistema de espera (economia de energia)

## Especificação

|Item|Valor|
|---|---|
|Tensão de Operação do MCU|3.3V / 5V|
|Tensão de Alimentação do Motor|2.5 ~ 13.5 (5V Típico, 15V Máx.)|
|Corrente de Saída|1.2 A(média)/3.2 A (pico)|
|Frequência de Comutação|100kHz|
|Interface Lógica|I2C|
|Endereço I2C|0x14 (padrão)|
|Faixa de Endereço I2C|0x01 ~ 0x7f (Configurável)|
|Tamanho|C: 60mm L: 40mm A: 12mm|
|Peso|13g|
|Tamanho da Embalagem|C: 140mm L: 90mm A: 12mm|
|Peso Bruto|20g|

## Aplicações típicas

- Controle de motor DC
- Controle de motor de passo

## Visão Geral de Hardware

### Pinagem

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out_back.jpg)

### Detalhes de Hardware

___
**Interface I2C**

Esta placa usa a interface I2C para permitir que o MCU integrado se comunique com o computador host.
>GND: conecte este módulo ao GND do sistema  
>VCC: você pode usar 5V ou 3.3V para este módulo  
>SDA: dados seriais I2C  
>SCL: clock serial I2C

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/I2C.jpg)

___
**Entrada de Alimentação**

Fornece alimentação DC para os motores, faixa de entrada 2.5V ~ 13.5V.
>GND: Conecte ao GND do sistema, conecte o "-" da alimentação  
>VM: Conecte o "+"" da alimentação, forneça energia para o motor.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise1.jpg)

___
**Saída de Motor DC**

Esta placa possui duas saídas de motor DC, podendo fornecer 12V/1,2A por canal. Você pode usar esta placa driver para controlar dois motores DC ao mesmo tempo.
>A1: Saída 1 do Canal A  
>A2: Saída 2 do Canal A  
>B1: Saída 1 do Canal B  
>B2: Saída 2 do Canal B

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

___
**Saída de Motor de Passo**

Você também pode usar esta placa para controlar um motor de passo de 4 fios, podendo fornecer até 12V/1,2A.
>OUT1: Conectado a uma das entradas da bobina 1 do motor de passo.  
>OUT2: Conectado à outra entrada da bobina 1 do motor de passo.  
>OUT3: Conectado a uma das entradas da bobina 2 do motor de passo.  
>OUT4: Conectado à outra entrada da bobina 2 do motor de passo.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

:::note
        Na verdade, a porta DC e a porta do motor de passo estão fisicamente conectadas entre si. O diagrama de conexão é o seguinte:
:::

|Porta DC|Porta do Motor de Passo|
|---|---|
|A1|OUT1|
|A2|OUT2|
|B1|OUT3|
|B2|OUT4|

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincando com Arduino

#### Hardware

**Materiais necessários**

*Demo de Motor DC*

| Seeeduino V4.2 | Base Shield | Grove - I2C Motor Driver (TB6612FNG) |Motor DC|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank">Adquira agora</a>|

:::note
    **1** Conecte o cabo USB suavemente, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

    **2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.

    **3** Você também precisa preparar pelo menos 2 jumpers, caso não tenha, pode clicar [aqui](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) para comprar.
:::

- **Passo 1.** Conecte o motor DC na porta **DC Motor Output** da placa driver e conecte a alimentação DC externa na porta **Power In**.

- **Passo 2.** Conecte o Grove - I2C Motor Driver (TB6612FNG) à porta **I^2^C** do Grove-Base Shield.

- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect1.jpg)

*Demo de Motor de Passo*

| Seeeduino V4.2 | Base Shield | Grove - I2C Motor Driver (TB6612FNG) |Motor de Passo|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/Motor%2024BYJ48_02.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Small-Size-and-High-Torque-Stepper-Motor-24BYJ48-p-1922.html" target="_blank">Adquira agora</a>|

- **Passo 1.** Conecte o motor de passo à porta **Stepper Motor Output** da placa driver e conecte a alimentação DC externa na porta **Power In**.

:::tip
        Esta placa driver é adequada para motores de passo de 4 fios. Dependendo do motor de passo que você usar, a cor da fiação será diferente. Nós usamos o motor 24BYJ48, a fiação é mostrada na tabela abaixo:
:::

|Nome do Pino| Fio do Motor de Passo|Cor do fio (24BYJ48)|
|---|---|---|
|OUT1|uma extremidade da bobina 1 |Laranja|
|OUT2|a outra extremidade da bobina 1|Azul|
|OUT3|uma extremidade da bobina 2|Rosa|
|OUT4|a outra extremidade da bobina 2|Amarelo|

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/p%2Blogo/coil.jpg)

- **Passo 2.** Conecte o Grove - I2C Motor Driver (TB6612FNG) à porta **I^2^C** do Grove-Base Shield.

- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect2.jpg)

:::note
        Como a porta DC e a porta do motor de passo estão fisicamente conectadas, você também pode usar as duas portas DC para controlar seu motor de passo. O diagrama de conexão é o seguinte:
:::
![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect3.jpg)

:::note
        Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino      |  Grove Cable       |Grove - I2C Motor Driver (TB6612FNG)|
|--------------- |--------------------|-----|
| GND            | Preto              | GND |
| 5V ou 3,3V     | Vermelho           | VCC |
| SDA            | Branco             | SDA |
| SCL            | Amarelo            | SCL |

#### Software

:::caution
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Grove_Motor_Driver_TB6612FNG](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a Arduino IDE. Abra o exemplo padrão, nós fornecemos dois exemplos para você

>dc_motor: Demo para motor DC  
>stepper_motor_2phase: Demo para motor de passo de 4 fios, 2 fases.

Você pode abri-los das duas maneiras a seguir (pegando o dc_motor como exemplo)：  
    1. Abra diretamente na Arduino IDE através do caminho: **File --> Examples --> Grove - Motor Driver(TB6612FNG) --> dc_motor**.
    ![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/path1.jpg)  
    2. Abra no seu computador clicando em **dc_motor.ino**, que você pode encontrar na pasta **XXXX\Arduino\libraries\Grove_Motor_Driver_TB6612FNG-master\examples\dc_motor**, **XXXX** é o local onde você instalou a Arduino IDE.
    ![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/path2.jpg)

- **Passo 4.** Faça o upload do demo. Se você não sabe como fazer o upload do código, por favor verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

:::tip
        Se tudo correr bem, quando você ligar a porta de alimentação externa, o motor irá girar.
:::

### Brincar com Raspberry Pi 4 Computer

#### Hardware

**Materiais necessários**

*Demo de Motor DC*

| Raspberry Pi 4 Computer | Grove Base Hat for Raspberry Pi | Grove - I2C Motor Driver (TB6612FNG) |DC Motor|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/products/102110421/raspberrypi4.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/BaseHat.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank">Adquira agora</a>|

:::note
    **1** Por favor conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, você pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, você pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.

    **3** Você também precisa preparar pelo menos 2 jumpers, caso não tenha, você pode clicar [aqui](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) para comprar.
:::

- **Passo 1.** Conecte o motor DC na porta **DC Motor Output** da placa controladora, conecte a alimentação DC externa à porta **Power In**.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/hardwareconnect1.jpg)

- **Passo 2.** Conecte o Grove - I2C Motor Driver (TB6612FNG) à porta **I^2^C** do Grove Base Hat for Raspberry Pi.

- **Passo 3.** Conecte o Grove Base Hat for Raspberry Pi ao Raspberry Pi 4 Computer.

- **Passo 4.** Conecte o Raspberry Pi 4 Computer a um monitor.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/hardwareconnect2.jpg)

:::note
        Se esta é a primeira vez que você usa o Raspberry Pi, consulte [Getting started with Raspberry](https://wiki.seeedstudio.com/pt-br/Grove_Base_Kit_for_Raspberry_Pi/#getting-started) antes de começar.
:::

#### Software

:::caution
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
Obrigado a MarkusBansky por fornecer a biblioteca de software e recurso de aprendizado para o Grove_Motor_Driver_TB6612FNG para Raspberry Pi 4 e Python3.
Este é um port da [Grove Arduino LIbrary](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG) para o [Grove I2C Motor Driver on TB6612FNG](https://wiki.seeedstudio.com/pt-br/Grove-I2C_Motor_Driver-TB6612FNG/).
:::

#### Requisitos

* Imagem Linux para RaspberryPi
- Python 3.6+
- Biblioteca smbus
- Biblioteca time
- Biblioteca math

:::note
    A biblioteca contém 6 funções de easing para a partida suave dos motores.
    As funções de easing atualmente só podem ser usadas em um único motor por vez.
    Contém funções IN e OUT.
:::

#### Como usar a biblioteca

:::caution
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
  Antes de tudo, certifique-se de que está executando a versão mais recente lançada do **pip**. Esta biblioteca exige que você adicione um `index-url` adicional ao **pip.conf** para poder instalá-la. Você pode fazer isso editando seu arquivo de configuração com `sudo nano/etc/pip.conf` e inserindo esta linha logo após a seção `[global]`:
:::

  ```
  index-url=https://pypi.python.org/
  ```

Agora você pode instalar o pacote como de costume, para python3 use algo como, por exemplo:

```
python3 -m pip install raspberry-i2c-tb6612fng
```

Depois de instalar a biblioteca com sucesso, por favor entre no arquivo raspberry-i2c-tb6612fng usando o código abaixo.

```
cd raspberry-i2c-tb6612fng
```

A última etapa é executar o código de teste.

```
python3 test.py
```

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/putty.png)

:::tip
        Se tudo correr bem, quando você digitar `python3 test.py`, o motor irá girar.
:::

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - I2C Motor Driver (TB6612FNG) Eagle Files](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip)

- **[Zip]** [Grove_Motor_Driver_TB6612FNG Software Library](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG/archive/master.zip)

- **[PDF]** [Datasheet TB6612FNG](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/TB6612FNG.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
