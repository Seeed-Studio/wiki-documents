---
title: Grove - 16 Channel PWM Driver (PCA9685)
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-16-Channel_PWM_Driver-PCA9685/
slug: /Grove-16-Channel_PWM_Driver-PCA9685
sku: 108020102
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-16-Channel_PWM_Driver-PCA9685/
---

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/main.jpg)

O Grove - 16-Channel PWM Driver é baseado no NXP PCA9685, que é um driver PWM I2C de 16 canais e 12 bits. Esta placa pode controlar até 16 servos com uma fonte de alimentação externa. Você pode controlar esta placa facilmente com um Arduino via interface Grove I2C. Além disso, você pode usar esta placa como um controlador de LED.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-16-Channel-PWM-Driver-(PCA9685)-p-3221.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versão

| Versão do Produto  | Alterações                                                                                             | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 16-Channel PWM Driver (PCA9685) | Inicial                                                                                               | Set 2018      |

## Características

- Barramento I2C compatível com Fast-mode Plus de 1 MHz
- 6 pinos de endereço de hardware permitem conectar 62 dispositivos PCA9685 ao mesmo barramento I2C
- Baixa corrente em standby
- Filtro de ruído nas entradas SDA/SCL

## Especificação

|Item|Valor|
|---|---|
|Tensão de Operação do MCU|3.3V / 5V|
|Tensão de Alimentação do PWM|2.3V ~ 5.5V|
|Entradas Tolerantes|5.5V|
|Corrente de Saída no pino LEDn|25mA|
|Corrente de Alimentação no GND|400mA|
|Temperatura de operação|-40～85℃|
|Interface|I2C|
|Faixa de Endereços I2C|0x40 ~ 0x7f(padrão)|
|Tamanho|C: 60mm L: 40mm A: 18mm|
|Peso|14.3g|
|Tamanho da embalagem|C: 135mm L: 85mm A: 19mm|
|Peso Bruto|21g|

## Aplicações típicas

- Driver de servos
- Driver de LED RGB ou RGBA

## Visão Geral do Hardware

### Pinagem

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin_out.jpg)

:::caution
    Hot swap não é suportado, você deve desconectar o Arduino da fonte de alimentação antes de qualquer substituição ou alteração.
:::

### Detalhes de Hardware

___
**Interface I2C**

Esta placa usa a interface I2C para permitir que o MCU onboard se comunique com o computador host.
>GND: conecte este módulo ao GND do sistema  
>VCC: você pode usar 5V ou 3.3V para este módulo  
>SDA: dados seriais I2C  
>SCL: clock serial I2C

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin-out-1.jpg)

___
**Entrada de Alimentação**

Fornece alimentação DC de 5V para o servo.

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin-out-2.jpg)

___
**Saída PWM**

Há 16 grupos de pinos (1 - 16) nesta placa, cada grupo de pinos contém um pino de sinal PWM, um pino de alimentação de 5V e um pino de terra.
![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin-out-0.jpg)

---
**Endereço I2C**

*você pode clicar na figura a seguir para ver o arquivo original*

Os 6 pads selecionáveis na parte de trás desta placa têm todos 64 endereços I2C opcionais.

<!-- [![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/i2c_ad.jpg)](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/i2c_ad.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/i2c_ad.jpg" alt="pir" width={600} height="auto" /></p>

Como mostrado na figura acima, todos os pads de endereço são conectados ao nível alto por padrão. As regras de endereço são mostradas abaixo:

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/i2c_ad_1.jpg)

O endereço consiste em 7 bits e o bit mais significativo é fixo em 1. Quando convertemos o endereço para um número hexadecimal, precisamos adicionar um 0 à esquerda do bit mais significativo.

Então o endereço padrão é **111 1111**, quando adicionamos um 0, ele se torna **0111 1111**, que é 0x7f.  
E se conectarmos todos os pads de endereço ao terra, ele passa a ser **100 0000**; quando adicionamos um 0, ele se torna **0100 0000**, que é 0x40.

## Princípio de Funcionamento

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Grove - 16-Channel PWM Driver| LED|
|--------------|-------------|-----------------|---------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/red_led.jpg)
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-16-Channel-PWM-Driver-PCA968-p-3221.html)|[Adquira agora](https://www.seeedstudio.com/3mm-LED-Red-25-PCs-p-1588.html)

:::note
    **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use um cabo USB com 4 fios internos; cabos com 2 fios não conseguem transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

    **2** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.

    **3** Você também precisa preparar pelo menos 2 jumpers; caso não tenha, pode clicar [aqui](https://www.seeedstudio.com/20-pin-dual-female-splittable-jumper-wire-300mm-p-629.html) para comprar.
:::

- **Passo 1.** Conecte o LED vermelho ao GND e ao P1 usando jumpers fêmea-fêmea.

- **Passo 2.** Conecte o Grove - 16-Channel PWM Driver à porta **I^2^C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC via cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/connect1.jpg)

:::note
        Neste exemplo com LED, como não estamos usando o pino '5V' no grupo de saída, não precisamos energizar a porta de entrada de alimentação. Se você quiser usar servo, precisa conectar o pino de 5V ao pino de alimentação do servo e fornecer alimentação externa para a porta **Power In**.
:::
Se você quiser usar servo, pode conectar como mostrado abaixo:

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/connect2.jpg)

#### Software

:::caution
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Grove-16-Channel_PWM_Driver-PCA9685](https://github.com/Seeed-Studio/Seeed_PCA9685/archive/master.zip) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para o Arduino.

- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo; você pode abri-lo das três maneiras a seguir：
    1. Abra diretamente na IDE do Arduino pelo caminho: **File --> Examples -->Seeed_PCA9685 --> led**.
    ![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/ard1.jpg)

    2. Abra no seu computador clicando em **basic_demo.ino**, que você pode encontrar na pasta **XXXX\Arduino\libraries\Seeed_PCA9685\examples\led\led.ino**, em que **XXXX** é o local onde você instalou a IDE do Arduino.
    ![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/ard2.jpg)

    3. Ou você pode simplesmente clicar no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o código a seguir para um novo sketch na IDE do Arduino.

```cpp

#include "PCA9685.h"
#include <Wire.h>

PCA9685 led;


void setup()
{
    // join I2C bus (I2Cdev library doesn't do this automatically)
    Wire.begin();
    Serial.begin(9600);
    led.init(0x7f);
    // Set freq to 100Hz, range from 24Hz~1526hz
    led.setFrequency(100);

    for (int i=1;i<17;i++){
        led.setPwm(i, 0, 1024);
    }
}

void loop()
{
}

```

:::caution
        O arquivo de biblioteca pode ser atualizado. Este código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto recomendamos que você use os dois primeiros métodos.
:::

:::tip
        Se tudo correr bem, você verá o LED acender.
:::

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/res/Grove%20-%2016-Channel%20PWM%20Driver%20(PCA9685).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - 16 Channel PWM Driver (PCA9685) Arquivos Eagle](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/res/Grove%20-%2016-Channel%20PWM%20Driver%20(PCA9685).zip)

- **[Zip]** [Seeed_PCA9685 Biblioteca de Software](https://github.com/Seeed-Studio/Seeed_PCA9685/archive/master.zip)

- **[PDF]** [Folha de Dados PCA9685](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/res/PCA9685.pdf)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
