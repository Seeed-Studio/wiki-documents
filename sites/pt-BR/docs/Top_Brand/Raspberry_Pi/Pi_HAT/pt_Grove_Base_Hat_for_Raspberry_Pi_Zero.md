---
description: Grove Base Hat para Raspberry Pi Zero
title: Grove Base Hat para Raspberry Pi Zero
keywords:
  - Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Base_Hat_for_Raspberry_Pi_Zero
sku: 103030276
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-11'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi_Zero/
---

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/main.jpg)

Hoje, a série Grove de sensores, atuadores e displays cresceu e se tornou uma grande família. Cada vez mais módulos Grove irão se juntar a todo o ecossistema Grove no futuro. Vemos que o Grove ajuda makers, engenheiros, professores, estudantes e até artistas a construir, fazer, criar... Sempre sentimos que é nossa responsabilidade tornar o módulo Grove compatível com mais plataformas. Agora trazemos para você o [Grove Base Hat for Raspberry Pi](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html) e o Grove Base Hat para Raspberry Pi Zero, em outras palavras, trazemos para o Raspberry Pi todo o sistema Grove.

O Grove Base Hat para Raspberry Pi fornece portas Digital/Analógica/I2C/PWM/UART para atender a todas as suas necessidades. Com a ajuda do MCU integrado, também está disponível para o Raspberry Pi um ADC de 12 bits e 6 canais.

Sinceramente, cerca de 60 módulos Grove suportam o Grove Base Hat para Raspberry Pi neste momento. No entanto, continuaremos a adicionar novos módulos compatíveis; quanto mais você usar, mais módulos Grove serão adicionados.


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-Zero-p-3187.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira o seu agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos

- Suporta Raspberry 2/ 3 B/B+ Zero
- MCU integrado
- ADC de 12 bits
- Porta Grove de múltiplos tipos  

## Especificação

|Item|Valor|
|---|---|
|Tensão de Operação|3.3V|
|MCU|STM32|
|ADC|12 bits 6 canais|
|Porta Grove|    2 Digitais <br />3 Analógicas <br /> 1 I2C <br /> 1 PWM  <br /> 1UART|
|Barramento de comunicação do Raspberry pi|I2C|
|Endereço I2C|0x04|

:::caution
A tensão de operação é 3,3 V; não insira mais de 3,3 V, caso contrário pode danificar o Raspberry Pi. Além disso, este hat não pode funcionar com módulo Grove de 5 V através da porta Grove, use módulo Grove compatível com 3,3 V.
:::

## Visão Geral de Hardware

### Pinagem

**Visão geral**

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/pin-out/overview.jpg)

**GPIO**

A mesma pinagem do Raspberry Pi.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/pin-out/1.jpg)

**Digital**

Há 2 soquetes Grove digitais nesta placa; normalmente o fio amarelo (que se conecta ao pino superior do soquete Grove de 4 pinos) do cabo Grove é o fio de sinal, então nomeamos a porta Grove digital como **D5/D16**.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/pin-out/2.jpg)

**Analógico**

Como sabemos, não há ADC no Raspberry Pi, portanto ele não pode funcionar diretamente com sensor analógico. Agora, com a ajuda do MCU STM32 integrado, o Grove Base Hat pode funcionar como um ADC externo de 12 bits, o que significa que você pode usar sensor analógico com seu Raspberry Pi. Ainda mais agradável é que não um, mas quatro soquetes Grove analógicos estão disponíveis.

O sensor analógico fornece a tensão analógica ao ADC de 12 bits. Depois que o ADC converte os dados analógicos em dados digitais, ele envia os dados digitais para o Raspberry Pi através da interface I2C.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/pin-out/4.jpg)

**PWM (modulação por largura de pulso)**

A Porta Grove PWM é conectada aos pinos GPIO/BCM 12 (PWM0) e GPIO/BCM 13 (PWM1), que são os pinos de PWM por hardware do Raspberry Pi; além disso, você pode usar todos os pinos GPIO como pinos de PWM por software.

:::note
0- Todos os números de pinos na camada de serigrafia ao lado da porta Grove são números de pino BCM. Para a diferença entre pinos BCM e pinos físicos, por favor consulte [aqui](https://www.raspberrypi.org/forums/viewtopic.php?p=726435)

1- Comparado ao PWM por hardware, o PWM por software não é tão preciso e terá problemas em altas frequências.

2- O pino GPIO/BCM 18 também está marcado como PWM0; na verdade, o GPIO/BCM 12 e o GPIO/BCM 18 compartilham o mesmo canal de PWM, portanto eles não podem ser configurados para taxas diferentes.

3- A saída do conector de áudio também usa PWM 0 e PWM 1, então você não pode ter saída de áudio nesse conector e usar os PWMs ao mesmo tempo.
:::

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/pin-out/5.jpg)

**I2C**

A porta Grove I2C se conecta diretamente ao pino I2C do Raspberry. A maioria dos novos módulos Grove da Seeed tem interface I2C; você pode achar esta porta extremamente útil.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/pin-out/6.jpg)

**UART**

A porta Grove UART se conecta ao GPIO14 (UART0 TX) e GPIO15 (UART0 RX). O UART é comumente usado no Pi como uma forma conveniente de controlá-lo através do GPIO ou acessar as mensagens de boot do kernel a partir do console serial (ativado por padrão). Também pode ser usado como uma forma de interligar um Arduino, ATmega com bootloader, ESP8266 etc. com o seu Pi.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/pin-out/7.jpg)

**SWD**

Usamos a porta SWD para gravar o firmware neste hat. Além disso, você pode ver 3 pinos GPIO nesta seção, isto é, **pino 9/pino 10/pino 11**. Esses três pinos não são usados por nenhuma porta Grove; você é livre para usá-los sem se preocupar com conflitos de pinos.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/pin-out/3.jpg)

## Primeiros Passos

### Hardware

#### Materiais necessários

-- [Raspberry Pi Zero x1](https://www.seeedstudio.com/Seeedstudio-Raspberry-Pi-Zero-Barebones-Kit-p-2964.html)  
-- Grove Base Hat para Raspberry Pi Zero x1  
-- Módulo Grove

- **Passo 1.** Conecte o Grove Base Hat para Raspberry Pi Zero ao Raspberry Pi Zero.

- **Passo 2.** Conecte o módulo Grove à porta Grove correspondente.

- **Passo 3.** Alimente o Raspberry Pi Zero com um cabo micro-usb.

:::caution
Recomendamos que você ligue o Raspberry Pi somente depois que todas as conexões de hardware estiverem completas. Não faça hot plug do módulo sensor, caso contrário o Raspberry Pi pode travar.
:::

### Software

Nesta seção vamos apresentar como instalar a biblioteca **seeed grove.py** e como usar as portas I2C, PWM, Digital e analógica do Grove Base Hat para Raspberry Pi Zero.

:::tip
Se você não sabe como usar um Raspberry Pi, por favor verifique [aqui](https://www.raspberrypi.org/documentation/) antes de começar.
:::

#### Arquitetura

Para operar sensores Grove, o grove.py depende de muitas bibliotecas de interface de hardware, como mraa/smbus2/rpi.gpi/rpi_ws281x.

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Studio/grove.py/raw/master/images/grove-py-arch.png" /></p>

**Instalação online com um clique**

Instalação com um clique, início rápido, chame como quiser: com o único comando abaixo, podemos instalar/atualizar todas as dependências e a versão mais recente do grove.py.

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você **não pode usar esta linha de comando**.
:::

```python
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

:::tip
Se tudo correr bem, você verá o seguinte aviso.

```text
        Successfully installed grove.py-0.5
        #######################################################
        Lastest Grove.py from github install complete   !!!!!
        #######################################################
```

:::

**Instalação passo a passo**

Além da instalação com um clique, você também pode instalar todas as dependências e a versão mais recente do grove.py passo a passo. Consulte nossa página no GitHub para mais informações.

[Instalação passo a passo](https://github.com/Seeed-Studio/grove.py#installation)

Você pode verificar o arquivo-fonte clonando a biblioteca grove.py.

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

```python
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
# Python2
sudo pip install .
# Python3
sudo pip3 install .
```

#### Uso

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

Agora você pode usar o Grove Base Hat para Raspberry Pi Zero com dezenas de módulos Grove; digite o comando **grove_** e pressione a tecla `tab` para verificar a lista de módulos Grove suportados.

```
pi@raspberrypi:~$ grove_
grove_3_axis_compass_bmm150        grove_i2c_color_sensor_v2          grove_mini_pir_motion_sensor       grove_rotary_angle_sensor          grove_temperature_sensor
grove_4_digit_display              grove_i2c_motor_driver             grove_moisture_sensor              grove_ryb_led_button               grove_thumb_joystick
grove_air_quality_sensor_v1_3      grove_lcd_1.2inches                grove_oled_display_128x64          grove_servo                        grove_tilt_switch
grove_button                       grove_led                          grove_piezo_vibration_sensor       grove_slide_potentiometer          grove_touch_sensor
grove_collision_sensor             grove_light_sensor_v1_2            grove_pwm_buzzer                   grove_sound_sensor                 grove_ultrasonic_ranger
grove_gesture_sensor               grove_loudness_sensor              grove_recorder_v3_0                grove_switch                       grove_water_sensor
grove_high_accuracy_temperature    grove_mech_keycap                  grove_relay                        grove_temperature_humidity_sensor  
pi@raspberrypi:~$ grove_

```

Em seguida, mostraremos como usá-los de acordo com o tipo de porta.

**Porta PWM**

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

Usaremos o [Grove - buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) como exemplo para apresentar a porta PWM.

*Diagrama de conexão de hardware*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/connect1.jpg)

Digite o seguinte comando `sudo grove_pwm_buzzer` na interface de linha de comando.

```python
pi@raspberrypi:~$ sudo grove_pwm_buzzer
Insert Grove-Buzzer to Grove-Base-Hat slot PWM[12 13 VCC GND]

3800
3400
3000
2900
2550
2270
2000
exiting application
```

O buzzer tocará algumas vezes e depois parará, o programa sairá automaticamente.

**Porta Digital**

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

Vamos usar o [Grove - Ultrasonic Ranger](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) como exemplo para apresentar a porta Digital.

*Diagrama de conexão de hardware*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/connect2.jpg)

Digite o seguinte comando `grove_ultrasonic_ranger 5 6` na interface de linha de comando.

```python
pi@raspberrypi:~$ python3 grove_ultrasonic_ranger 5 6
Detecting distance...
6.979909436456088 cm
7.966469074117726 cm
12.451204760321255 cm
15.184797089675378 cm
17.429220265355603 cm
18.73230112010035 cm
20.717752390894397 cm
19.83807004731277 cm
17.3059003106479 cm

^CTraceback (most recent call last):
  File "/usr/local/bin/grove_ultrasonic_ranger", line 11, in <module>
    load_entry_point('grove.py==0.5', 'console_scripts', 'grove_ultrasonic_ranger')()
  File "/usr/local/lib/python3.5/dist-packages/grove/grove_ultrasonic_ranger.py", line 107, in main
    time.sleep(1)
KeyboardInterrupt

```

Quando você mudar a distância entre o Grove - Ultrasonic Ranger e o objeto alvo, o valor da medição mudará de acordo.
Pressione `ctrl`+`c` para sair.

:::caution
Para a maioria dos módulos Grove, você precisa adicionar o parâmetro do número do pino, como `grove_ultrasonic_ranger 5 6`, **5** e **6** são os pinos GPIO/BCM. No entanto, você pode ter notado que no primeiro exemplo `grove_pwm_buzzer`, não adicionamos um parâmetro após o comando. Isso ocorre porque a porta PWM e a porta I2C não exigem parâmetros de número de pino. Você pode encontrar a serigrafia do número do pino logo ao lado do conector Grove.
:::

**Porta Analógica**

Vamos usar o [Grove - Air quality sensor v1.3](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1-3-p-2439.html) como exemplo para apresentar a porta Analógica.

*Diagrama de conexão de hardware*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/connect3.jpg)

Digite o seguinte comando `grove_air_quality_sensor_v1_3 0 1` na interface de linha de comando.

```python
pi@raspberrypi:~$ grove_air_quality_sensor_v1_3 0 1
Detecting ...
62, Air Quality OK.
63, Air Quality OK.
61, Air Quality OK.
61, Air Quality OK.
59, Air Quality OK.
62, Air Quality OK.
60, Air Quality OK.
60, Air Quality OK.
59, Air Quality OK.
60, Air Quality OK.
60, Air Quality OK.
60, Air Quality OK.

57, Air Quality OK.
^CTraceback (most recent call last):
  File "/usr/local/bin/grove_air_quality_sensor_v1_3", line 11, in <module>
    load_entry_point('grove.py==0.5', 'console_scripts', 'grove_air_quality_sensor_v1_3')()
  File "/usr/local/lib/python3.5/dist-packages/grove/grove_air_quality_sensor_v1_3.py", line 68, in main
    time.sleep(.1)
KeyboardInterrupt

```

Você pode usar este sensor para detectar a qualidade do ar. Pressione `ctrl`+`c` para sair.

:::note
Você pode ter notado que, para a porta analógica, o número do pino serigrafado é algo como **A1, A0**, porém no comando usamos os parâmetros **0** e **1**, exatamente como na porta digital. Portanto, certifique-se de conectar o módulo na porta correta, caso contrário pode haver conflitos de pinos.
:::

**I2C**

Vamos usar o [Grove - OLED Display 128x64](https://www.seeedstudio.com/Grove-OLED-Display-0-9-p-781.html) como exemplo para apresentar a porta I2C.

*Diagrama de conexão de hardware*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/connect4.jpg)

Digite o seguinte comando `grove_oled_display_128x64` na interface de linha de comando.

```
pi@raspberrypi:~$ grove_oled_display_128x64
pi@raspberrypi:~$ 
```

Parece que nada aconteceu, porém você pode encontrar a frase mais famosa do mundo cibernético se verificar seu OLED.😄

:::note
Se você usar a ferramenta I2C para escanear o endereço I2C do módulo Grove, poderá encontrar dois ou mais endereços. 0x04 é o endereço do *Grove Base Hat for Raspberry Pi*.
:::

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/res/Grove%20Base%20HAT%20For%20Raspberry%20Pi%20Zero.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

:::noteChange Note

Como os chips da série ST32 estão em falta globalmente, os preços aumentaram várias vezes e não há uma data de entrega definida. Não tivemos escolha a não ser mudar para o chip MM32. Os modelos de substituição específicos são os seguintes: STM32F030F4P6TR é substituído por MM32F031F6P6. Após a substituição do chip, as funções do produto, características, métodos de uso e códigos permanecem inalterados. Deve-se notar que a versão do firmware foi alterada, e o firmware de fábrica foi ajustado de acordo com os diferentes chips. Se você precisar regravar o firmware, faça o download do firmware correspondente ao chip.
:::

## Recursos

- **[Zip]** [Arquivos Eagle do Grove Base Hat for Raspberry Pi Zero](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/res/Grove%20Base%20HAT%20For%20Raspberry%20Pi%20Zero.zip)

- **[Zip]** [Biblioteca Seeed Grove.py](https://github.com/Seeed-Studio/grove.py/archive/master.zip)

- **[Zip]** [Firmware STM32F030F4P6TR](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/grove_rpi_base_hat-v0.2-20180905-02.zip)

- **[Zip]** [Firmware MM32F031F6P6](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/MM32F031F6P6_firmware.zip)

- **[PDF]** [Datasheet STM32](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/STM32.pdf)

- **[PDF]** [MM32F031F6P6_Datasheet.pdf](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/MM32F031F6P6_Datasheet.pdf)

## Projeto

Este é o vídeo de introdução deste produto

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/0dFQWwXOOBI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
