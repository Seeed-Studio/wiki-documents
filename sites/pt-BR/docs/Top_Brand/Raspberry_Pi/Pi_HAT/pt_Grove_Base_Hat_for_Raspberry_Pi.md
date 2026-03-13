---
description: Grove Base Hat para Raspberry Pi
title: Grove Base Hat para Raspberry Pi
keywords:
  - Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Base_Hat_for_Raspberry_Pi
sku: 103030275
last_update:
  date: 12/29/2025
  author: Brandy
createdAt: '2023-01-11'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/main.jpg)

Hoje, a série Grove de sensores, atuadores e displays cresceu e se tornou uma grande família. Cada vez mais módulos Grove irão se juntar a todo o ecossistema Grove no futuro. Vemos que o Grove ajuda makers, engenheiros, professores, estudantes e até artistas a construir, fazer, criar... Sempre sentimos que é nossa responsabilidade tornar o módulo Grove compatível com mais plataformas. Agora trazemos para você o Grove Base Hat para Raspberry Pi e o [Grove Base Hat for Ras pberry Pi Zero](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-Zero-p-3187.html), em outras palavras, nós trazemos para o Raspberry Pi todo o Sistema Grove.

O Grove Base Hat para Raspberry Pi fornece portas Digital/Analog/I2C/PWM/UART para atender a todas as suas necessidades. Com a ajuda do MCU integrado, um ADC de 12 bits com 8 canais também está disponível para o Raspberry Pi.

Francamente falando, há cerca de 60 módulos Grove que suportam o Grove Base Hat para Raspberry Pi agora. Entretanto, continuaremos adicionando novos módulos compatíveis, quanto mais você usar, mais módulos Grove serão adicionados.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos

- Suporte a Raspberry Pi 2/3B/3B+/4/Zero
- MCU integrado
- ADC de 12 bits
- Porta Grove de múltiplos tipos  

## Especificação

|Item|Valor|
|---|---|
|Tensão de Operação|3,3V|
|MCU|STM32/MM32|
|ADC|8 canais de 12 bits|
|Porta Grove|    6 Digitais <br />4 Analógicas <br /> 3 I2C <br /> 1 PWM  <br /> 1UART|
|Barramento de comunicação do Raspberry Pi|I2C|
|Endereço I2C|0x04/0x08|

:::caution
A tensão de operação é 3,3V, por favor não aplique mais do que 3,3V, caso contrário isso pode danificar o Raspberry Pi. Além disso, este hat não pode funcionar com módulo Grove de 5V via porta Grove, use módulos Grove compatíveis com 3,3V.
:::

## Visão Geral de Hardware

### Pinagem

**Visão geral**

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/overview.jpg)

**GPIO**

A mesma pinagem do Raspberry Pi.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/1.jpg)

**PWM(modulação por largura de pulso)**

A porta Grove PWM conecta aos pinos GPIO/BCM 12 (PWM0) e GPIO/BCM 13 (PWM1), que são os pinos de PWM por hardware do Raspberry Pi, além disso, você pode usar todos os pinos GPIO como pinos de PWM por software.

:::note
0- Todos os números de pino na camada de serigrafia ao lado da porta Grove são números de pino BCM. Para a diferença entre pinos BCM e pinos físicos, consulte [aqui](https://www.raspberrypi.org/forums/viewtopic.php?p=726435)

1- Comparado ao PWM por hardware, o PWM por software não é tão preciso e terá problemas em altas frequências.

2- O pino GPIO/BCM 18 também é marcado como PWM0, na verdade o GPIO/BCM 12 e o GPIO/BCM 18 compartilham o mesmo canal de PWM, então eles não podem ser configurados para taxas diferentes.

3- A saída do conector de áudio também usa PWM 0 e PWM 1, então você não pode ter saída de áudio nesse conector e usar os PWMs ao mesmo tempo.
:::

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/3.jpg)

**UART**

A porta Grove UART conecta ao GPIO14(UART0 TX) e GPIO15(UART0 RX). UART é comumente usado no Pi como uma forma conveniente de controlá-lo através do GPIO, ou acessar as mensagens de boot do kernel pelo console serial (ativado por padrão). Também pode ser usado como uma maneira de interligar um Arduino, ATmega com bootloader, ESP8266 etc. ao seu Pi.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/2.jpg)

**Digital**

Há 6 soquetes Grove digitais nesta placa, normalmente o fio amarelo (que conecta ao pino superior do soquete Grove de 4 pinos) do cabo Grove é o fio de sinal, então nomeamos as portas Grove digitais como **D5/D16/D18/D22/D24/D26**.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/4.jpg)

**Analógico**

Como sabemos, não há ADC no Raspberry Pi, então ele não pode funcionar diretamente com sensor analógico. Agora, com a ajuda do MCU STM32 integrado, o Grove Base Hat pode funcionar como um ADC externo de 12 bits, o que significa que você pode usar sensores analógicos com o seu Raspberry Pi. Ainda mais agradável é que não há apenas um, mas quatro soquetes Grove analógicos disponíveis.

O sensor analógico envia a tensão analógica para o ADC de 12 bits. Depois que o ADC converte os dados analógicos em dados digitais, ele envia os dados digitais para o Raspberry Pi através da interface I2C.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/5.jpg)

**I2C**

Há três portas I2C disponíveis nesta placa, todas conectadas diretamente aos pinos I2C do Raspberry. Você pode considerar esta parte como um hub I2C. A maioria dos novos módulos Grove da Seeed possui interface I2C, você pode achar essas três portas extremamente úteis.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/7.jpg)

**SWD**

Usamos a porta SWD para gravar o firmware neste hat. Além disso, você pode ver 3 pinos GPIO nesta seção, isto é, **pino 9/pino 10/pino 11**. Esses três pinos não são usados por nenhuma porta Grove, você é livre para usá-los sem se preocupar com conflitos de pinos.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/6.jpg)

**Grove Base Hat para Raspberry Pi vs. GrovePi+**

| Parâmetro                   | [Grove Base Hat para Raspberry Pi](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/)                   | [GrovePi+](https://wiki.seeedstudio.com/pt-br/GrovePi_Plus/)                                                                            |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| Tensão de Trabalho          | 3,3V                                                                                                              | 5V                                                                                                                               |
| MCU                         | STM32F030F4P6                                                                                                     | ATMEGA328P                                                                                                                       |
| Portas Grove                | 6 x Digitais(3,3V); 4 x Analógicas(3,3V) ; 3 x I2C(3,3V); 1 x PWM(3,3V) ; 1 x RPISER(UART) conectada ao Raspberry Pi(3,3V) ; 1 x SWD | 7 x Digitais(5V); 3 x Analógicas(5V) ;3 x I2C(5V) ;1 x SERIAL: Conectada aos pinos D0/1 do ATMEGA328P(5V) ; 1 x RPISER: Conectada ao Raspberry Pi(3,3V) ;1 x ISP |
| Grove-Digital               | Conectadas diretamente ao Raspberry Pi                                                                            | Conectadas aos pinos digitais do ATMEGA328P e convertidas para sinal I2C, depois através de conversor de nível até o Raspberry Pi |
| Grove-Analog                | Conectadas ao STM32F030F4P6(ADC de 12 bits) e então convertidas para sinal I2C, roteadas diretamente ao Raspberry Pi | Conectadas aos pinos analógicos do ATMEGA328P(ADC de 10 bits) e então convertidas para sinal I2C, depois através de conversor de nível até o Raspberry Pi |
| Grove-I2C                   | Conectadas diretamente ao Raspberry Pi                                                                            | Conectadas ao Raspberry Pi através de conversor de nível                                                                         |
| Grove-PWM                   | Conectadas diretamente ao Raspberry Pi                                                                            | N/D                                                                                                                              |
| RPISER                      | Conectada diretamente ao Raspberry Pi                                                                             | Conectada diretamente ao Raspberry Pi                                                                                            |
| SERIAL                      | N/D                                                                                                               | Conectada aos pinos digitais D0/D1 do ATMEGA328P e convertida para sinal I2C, depois através de conversor de nível até o Raspberry Pi |
| SWD                         | Gravar firmware no STM32F030F4P6                                                                                  | N/D                                                                                                                              |
| ISP                         | N/D                                                                                                               | Gravar firmware no ATMEGA328P                                                                                                    |
| Pinos do Conector do Raspberry Pi | 40                                                                                                                | 26                                                                                                                               |

## Primeiros Passos

### Hardware

#### Materiais necessários

-- [Raspberry Pi x1](https://www.seeedstudio.com/Raspberry-Pi-3-Model--p-3037.html)  
-- Grove Base Hat para Raspberry Pi x1  
-- Módulo Grove

- **Passo 1.** Conecte o Grove Base Hat para Raspberry Pi ao Raspberry Pi.

- **Passo 2.** Conecte o módulo Grove à porta Grove correspondente.

- **Passo 3.** Alimente o Raspberry Pi com um cabo micro-usb.

:::caution
Recomendamos que você ligue os Raspberry Pis depois que todas as conexões de hardware estiverem concluídas. Não conecte o módulo de sensor com o sistema ligado, caso contrário o Raspberry Pi pode travar.
:::

### Software

:::caution
Atualmente, esta placa está disponível em duas versões no mercado: a versão STM32 (V1.1) e a versão MM32 (V1.0). A versão atualmente enviada é a versão STM32.

Se você tiver problemas ao usar o Grove Base Hat para Pi com a biblioteca `grove.py`, verifique a versão da sua placa:  

1. **Se for a versão STM32**, o endereço I2C é `0x04`. Você precisa alterar o endereço I2C em `/home/username/.local/lib/python3.9/site-packages/adc.py` para `0x04`.  
2. **Se for a versão MM32**, o endereço I2C é `0x08`. Você precisa alterar o endereço I2C em `/home/username/.local/lib/python3.9/site-packages/adc.py` para `0x08`.  

:::

Nesta seção apresentaremos como instalar a biblioteca **seeed grove.py** e como usar as portas I2C, PWM, digital e analógica do Grove Base Hat para Raspberry Pi.

:::tip
Se você não sabe como usar um Raspberry Pi, consulte [aqui](https://www.raspberrypi.org/documentation/) antes de começar.
:::

#### Arquitetura

Para operar os sensores Grove, o grove.py depende de muitas bibliotecas de interface de hardware, como mraa/smbus2/rpi.gpi/rpi_ws281x.

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Studio/grove.py/raw/master/images/grove-py-arch.png" /></p>

#### Instalação

:::tip
Um ambiente virtual é atualmente a maneira mais estável e recomendada para replicar no Bookworm.
:::

##### Instalar dependências

**Adicionar repositório**

```linux
echo "deb https://seeed-studio.github.io/pi_repo/ stretch main" | sudo tee /etc/apt/sources.list.d/seeed.list
```

**Adicionar chave pública GPG**

```linux
curl https://seeed-studio.github.io/pi_repo/public.key | sudo tee /etc/apt/trusted.gpg.d/seeed.gpg > /dev/null
sudo apt update
```

**Instalar dependências de base (global é suficiente)**

```linux
# Optional: Seeed binary package (not needed for most sensors)
sudo apt install libbmi088 libbma456
# Required: Python layer dependencies
pip install smbus2 pyserial seeed-python-dht   # DHT DHT series required
```

**Habilitar interface I2C**

```linux
sudo raspi-config
```

- Selecione interfacingg Options>I2C>Yes>Ok>Finish
- Habilite a interface I2C

**Instalar pacotes necessários**
:::tip
Na versão mais recente do Python3, é recomendado usar *virtualenv* para gerenciamento isolado de pacotes.
:::

:::tip
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você tem que usar esta linha de comando **apenas com Python3**. A instrução a seguir funciona no sistema Bookworm.
:::

<Tabs>

<TabItem value="env" label="vertual environment" default>

```linux
# Create once
mkdir ~/grove_env && cd ~/grove_env
python3 -m venv --system-site-packages env
# From now on, you need to run this first every time you open the terminal.
source ~/grove_env/env/bin/activate 
```

</TabItem>
</Tabs>




##### Instalar grove.py

Para iniciantes ou apenas usuários da biblioteca, instale usando o método online.

- Instalação automática de dependências e implantação da biblioteca.
- Rápido para começar, sem necessidade de operação manual.

Para desenvolvedores ou usuários avançados, instale as dependências e depois instale o grove.py com o código-fonte.

- Inclui o repositório completo `grove.py`, código-fonte, exemplos e documentação
- Adequado para visualizar código-fonte e exemplos, modificar funções da biblioteca

<Tabs>
<TabItem  value="Beginner" label="For beginner or library user" default>

Para instalar no ambiente global, você pode digitar o seguinte comando:

```linux
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

Se você quiser instalar em um ambiente virtual, primeiro ative o seu virtualenv e digite o seguinte comando:

```linux
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | bash -s -- --user-local --bypass-gui-installation
```

</TabItem>
<TabItem  value="Developer" label="For developer or advanced user" default>




Para instalar no ambiente global, você pode digitar o seguinte comando:

```linux
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
sudo pip3 install .
```

Se você quiser instalar em um ambiente virtual, primeiro ative o seu virtualenv e digite o seguinte comando:

```linux
# Execute in a virtual environment
cd ~/grove_env
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
pip3 install .
```

</TabItem>
</Tabs>

:::note

 Devido a atualizações do Raspberry Pi, o script de instalação com um clique está relativamente antigo e pode não funcionar para instalação com um clique. É recomendado usar o segundo método - o método de código-fonte mais estável para baixar a biblioteca Grove.

:::

**Modelo geral para executar rotinas (toda vez que um novo terminal é aberto)**

Ambiente virtual
```linux
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
python grove_xxx.py          # xxx = Module Name
```

Ambiente global
```linux
 grove_xxx.py          # xxx = Module Name
```

### Uso

Agora você pode usar o Grove Base Hat para Raspberry Pi com dezenas de módulos Grove, digite o comando **grove_** e pressione a tecla ++tab++ para verificar [a lista de Groves suportados](https://github.com/Seeed-Studio/grove.py/tree/master/doc).

```linux
(env) pi@raspberrypi:~ $ grove_
grove_12_key_cap_i2c_touch_mpr121
grove_16x2_lcd
grove_1wire_thermocouple_amplifier_max31850
grove_3_axis_accelerometer_adxl372
grove_3_axis_compass_bmm150
grove_3_axis_digital_accelerometer
grove_4_digit_display
grove_6_axis_accel_gyro_bmi088
grove_air_quality_sensor_v1_3
grove_button
grove_cap_touch_slider_cy8c
grove_collision_sensor
grove_current_sensor
grove_gesture_sensor
grove_gpio
grove_high_accuracy_temperature
grove_i2c_color_sensor_v2
grove_i2c_motor_driver
grove_i2c_thermocouple_amplifier_mcp9600
grove_imu_9dof_icm20600_ak09918
grove_lcd_1.2inches
grove_led
grove_light_sensor_v1_2
(env) pi@raspberrypi:~ $ grove_
grove_12_key_cap_i2c_touch_mpr121
grove_16x2_lcd
grove_1wire_thermocouple_amplifier_max31850
grove_3_axis_accelerometer_adxl372
grove_3_axis_compass_bmm150
grove_3_axis_digital_accelerometer
grove_4_digit_display
grove_6_axis_accel_gyro_bmi088
grove_air_quality_sensor_v1_3
grove_button
grove_cap_touch_slider_cy8c
grove_collision_sensor
grove_current_sensor
grove_gesture_sensor
grove_gpio
grove_high_accuracy_temperature
grove_i2c_color_sensor_v2
grove_i2c_motor_driver
grove_i2c_thermocouple_amplifier_mcp9600
grove_imu_9dof_icm20600_ak09918
grove_lcd_1.2inches
grove_led
grove_light_sensor_v1_2
grove_loudness_sensor
grove_mech_keycap
grove_mini_pir_motion_sensor
grove_moisture_sensor
grove_multi_switch
grove_multi_switch_poll
grove_oled_display_128x64
grove_optical_rotary_encoder
grove_piezo_vibration_sensor
grove_pwm_buzzer
grove_recorder_v3_0
grove_relay
grove_rotary_angle_sensor
grove_round_force_sensor
grove_ryb_led_button
grove_servo
grove_slide_potentiometer
grove_sound_sensor
grove_step_counter_bma456
grove_switch
grove_temperature_humidity_bme680
grove_temperature_humidity_sht31
grove_temperature_sensor
grove_thumb_joystick
grove_tilt_switch
grove_time_of_flight_distance
grove_touch_sensor
grove_ultrasonic_ranger
grove_uv_sensor
grove_water_sensor
grove_ws2813_rgb_led_strip
```

Em seguida mostraremos como usá-los de acordo com o tipo de porta.

**Porta digital**

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você tem que usar esta linha de comando **apenas com Python3**.
:::

Usaremos o [Grove - Ultrasonic Ranger](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) como exemplo para apresentar a porta digital.

*Diagrama de conexão de hardware*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect2.jpg)

Digite o seguinte comando `grove_ultrasonic_ranger 5 6` na interface de linha de comando.

```python
pi@raspberrypi:~$  grove_ultrasonic_ranger 5 6
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

Quando você mudar a distância entre o Grove - Ultrasonic Ranger e o objeto alvo, o valor de medição mudará de acordo.
Pressione ++ctrl+c++ para sair.

:::caution
Para a maioria dos módulos Grove, você precisa adicionar o parâmetro do número do pino, como `grove_ultrasonic_ranger 5 6`, **5** e **6** são os pinos GPIO/BCM. No entanto, você deve ter notado que no primeiro exemplo `grove_pwm_buzzer`, não adicionamos um parâmetro após o comando. Isso porque as portas PWM e I2C não exigem parâmetros de número de pino. Você pode encontrar a serigrafia do número do pino logo ao lado do conector Grove.
:::

**Porta analógica**

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você tem que usar esta linha de comando **apenas com Python3**.
:::

Usaremos o [Grove - Air quality sensor v1.3](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1-3-p-2439.html) como exemplo para apresentar a porta analógica.

*Diagrama de conexão de hardware*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect3.jpg)

Digite o seguinte comando `grove_air_quality_sensor_v1_3 0 1` na interface de linha de comando.

```python
pi@raspberrypi:~$  grove_air_quality_sensor_v1_3 0 1
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

Você pode usar este sensor para detectar a qualidade do ar. Pressione ++ctrl+c++ para sair.

:::note
Você pode ter notado que, para a porta analógica, o número do pino na serigrafia é algo como **A1, A0**, porém no comando usamos o parâmetro **0** e **1**, exatamente como na porta digital. Portanto, certifique-se de conectar o módulo na porta correta, caso contrário poderá haver conflitos de pinos.
:::

**I2C**

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

Tomaremos o [Grove - OLED Display 128x64](https://www.seeedstudio.com/Grove-OLED-Display-0-9-p-781.html) como exemplo para apresentar a porta I2C.

*Diagrama de conexão de hardware*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect4.jpg)

Digite o seguinte comando `grove_oled_display_128x64` na interface de linha de comando.

```
(env)pi@raspberrypi:~$ python grove_oled_display_128x64
```

Parece que nada aconteceu, porém você pode encontrar a frase mais famosa do mundo cibernético se verificar o seu OLED.😄

:::note
Se você usar a ferramenta I2C para escanear o endereço I2C do módulo Grove, poderá encontrar dois ou mais endereços. 0x04 é o endereço do *Grove Base Hat for Raspberry Pi*.
:::

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/Raspberry%20Pi%20Grove%20Base%20HAT%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

<br></br>

:::noteChange Note:

Devido ao fato de que os chips da série ST32 estão em falta globalmente, os preços aumentaram várias vezes e não há uma data de entrega clara. Não tivemos escolha a não ser mudar para o chip MM32. Os modelos de substituição específicos são os seguintes: STM32F030F4P6TR é substituído por MM32F031F6P6. Após a substituição do chip, as funções do produto, características, métodos de uso e códigos permanecem inalterados. Deve-se notar que a versão do firmware mudou, e o firmware de fábrica foi ajustado de acordo com os diferentes chips. Se você precisar regravar o firmware, baixe o firmware correspondente ao chip.
:::

## Recursos

- **[Zip]** [Arquivos Eagle do Grove Base Hat for Raspberry Pi](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/Raspberry%20Pi%20Grove%20Base%20HAT%20v1.0.zip)

- **[Zip]** [Biblioteca Seeed Grove.py](https://github.com/Seeed-Studio/grove.py/archive/master.zip)

- **[Zip]** [Firmware STM32F030F4P6TR](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/grove_rpi_base_hat-v0.2-20180905-02.zip)

- **[Zip]** [Firmware MM32F031F6P6](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/MM32F031F6P6_firmware.zip)

- **[PDF]** [STM32 Datasheet](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/STM32.pdf)

- **[PDF]** [MM32F031F6P6_Datasheet.pdf](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/MM32F031F6P6_Datasheet.pdf)

## Projeto

Este é o vídeo de introdução deste produto.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/0dFQWwXOOBI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
