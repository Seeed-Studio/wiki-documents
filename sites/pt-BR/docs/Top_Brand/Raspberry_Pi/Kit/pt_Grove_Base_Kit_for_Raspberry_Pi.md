---
description: Kit Base Grove para Raspberry Pi
title: Kit Base Grove para Raspberry Pi
keywords:
  - Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Base_Kit_for_Raspberry_Pi
sku: 110020169
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Grove_Base_Kit_for_Raspberry_Pi/
---


## SISTEMA GROVE

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/groveSystem.png)

Grove é um sistema modular de prototipagem que consiste em uma unidade base e vários módulos com conectores padronizados. A unidade base geralmente é um microprocessador que permite comunicar, processar e controlar a entrada ou saída dos módulos Grove. Cada módulo Grove normalmente atende a uma única função, variando de um simples botão a um sensor de batimentos cardíacos mais complexo. O conector padronizado Grove permite ao usuário montar unidades Grove com uma abordagem de blocos de montagem; comparado ao sistema baseado em jumpers ou solda, é muito mais fácil montar ou desmontar, o que simplifica o processo de aprendizado para experimentação, construção e prototipagem.
Também fornecemos Grove to Pin Header Converter ou Grove Base HAT disponíveis para uma variedade de plataformas de desenvolvimento para aqueles que desejam usar módulos de sensores e atuadores Grove sem a placa de desenvolvimento do Sistema Grove.

Os usuários do sistema Grove precisam ter pelo menos algum conhecimento básico de eletrônica, caso contrário você precisa passar por este tutorial básico para aprender algumas operações básicas no sistema Grove. A primeira parte deste tutorial consiste em uma lista de informações básicas sobre os componentes incluídos no kit inicial, seguida da configuração básica da Arduino IDE para o Seeeduino Lotus. Em seguida, as 11 sessões de tutorial fornecem a operação básica de cada componente individual no kit inicial e as aplicações ao combinar vários módulos, o que dá ao aprendiz alguma visão e conhecimento básico sobre como conectar e programar com o sistema Grove.

## KIT BASE GROVE PARA RASPBERRY PI

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/kit.jpg)

O kit inicial Grove contém um Grove Base Hat (para Raspberry Pi) e 10 módulos Grove. As informações detalhadas estão listadas abaixo.

### Detalhes do Produto

#### Grove Base Hat

**[Grove Base Hat for Raspberry Pi](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/BaseHat.jpg)

Hoje, a série Grove de sensores, atuadores e displays cresceu e se tornou uma grande família. Cada vez mais módulos Grove se juntarão ao ecossistema Grove no futuro. Vemos que o Grove ajuda makers, engenheiros, professores, estudantes e até artistas a construir, fazer, criar... Sempre sentimos que é nossa responsabilidade tornar o módulo Grove compatível com mais plataformas. Agora trazemos para você o Grove Base Hat para Raspberry Pi e o Grove Base Hat para Raspberry Pi Zero, em outras palavras, trazemos para o Raspberry Pi o Sistema Grove.

O Grove Base Hat para Raspberry Pi fornece portas Digital/Analog/I2C/PWM/UART para atender a todas as suas necessidades. Com a ajuda do MCU integrado, um ADC de 12 bits e 8 canais também está disponível para o Raspberry Pi.

**Recursos**

- Suporta Raspberry 2/3B/3B+/Zero
- MCU integrado
- ADC de 12 bits
- Porta Grove de múltiplos tipos

**Visão Geral do Hardware**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pi_pinout.jpg)

GPIO: mesmo pinout do Raspberry Pi.

PWM: A porta Grove PWM está conectada aos pinos GPIO/BCM 12 (PWM0) e GPIO/BCM 13 (PWM1), que são os pinos de PWM por hardware do Raspberry Pi; além disso, você pode usar todos os pinos GPIO como pinos PWM por software.

:::note

- Todos os números de pinos na camada de serigrafia ao lado da porta Grove são números de pino BCM. Para a diferença entre os pinos BCM e os pinos físicos, consulte [aqui](https://www.raspberrypi.org/forums/viewtopic.php?p=726435)

- Comparado ao PWM por hardware, o PWM por software não é tão preciso e terá problemas em altas frequências.

- O pino GPIO/BCM 18 também é marcado como PWM0; na verdade, o GPIO/BCM 12 e o GPIO/BCM 18 compartilham o mesmo canal PWM, portanto eles não podem ser configurados com taxas diferentes.

- A saída do conector de áudio também usa PWM 0 e PWM 1, então você não pode ter saída de áudio nesse conector e usar os PWMs ao mesmo tempo.
:::

UART: A porta Grove UART está conectada ao GPIO14 (UART0 TX) e ao GPIO15 (UART0 RX). UART é comumente usada no Pi como uma maneira conveniente de controlá-lo via GPIO ou acessar as mensagens de boot do kernel a partir do console serial (habilitado por padrão). Também pode ser usada como uma maneira de fazer interface de um Arduino, ATmega com bootloader, ESP8266, etc., com o seu Pi.

Digital: Há 6 soquetes Grove digitais nesta placa; normalmente o fio amarelo (que se conecta ao pino superior do soquete Grove de 4 pinos) do cabo Grove é o fio de sinal, então nomeamos as portas Grove digitais como D5/D16/D18/D22/D24/D26.

Analógico: Como sabemos, não há ADC no Raspberry Pi, então ele não pode trabalhar diretamente com sensores analógicos. Agora, com a ajuda do MCU STM32 integrado, o Grove base hat pode funcionar como um ADC externo de 12 bits, o que significa que você pode usar sensores analógicos com o seu Raspberry Pi. Ainda mais satisfatório é que não há apenas um, mas quatro soquetes Grove analógicos disponíveis. O sensor analógico fornece a tensão analógica na entrada do ADC de 12 bits. Depois que o ADC converte os dados analógicos em dados digitais, ele envia os dados digitais para o Raspberry Pi através da interface I2C.

I2C: Há três portas I2C disponíveis nesta placa; elas todas se conectam diretamente aos pinos I2C do Raspberry. Você pode considerar esta parte como um hub I2C. A maioria dos novos módulos Grove da Seeed possui interface I2C; você pode achar essas três portas extremamente úteis.

SWD: Usamos a porta SWD para gravar o firmware neste hat. Além disso, você pode ver 3 pinos GPIO nesta seção, ou seja, pino 9/pino 10/pino 11. Esses três pinos não são usados por nenhuma porta Grove; você é livre para usá-los sem se preocupar com conflitos de pinos.

#### Módulos Grove

**[Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/buzzer.jpg)

Este módulo usa um buzzer piezoelétrico como componente principal; ele pode produzir um tom de alta frequência enquanto estiver conectado à saída digital e o nível lógico estiver definido como High; caso contrário, pode produzir vários tons de acordo com as frequências geradas pela saída PWM analógica conectada a ele. (nota: a faixa de frequência que o ouvido humano normal pode distinguir é entre 20 Hz e 20 kHz.)

**[Grove - Red LED Button](https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LEDButton.jpg)

O Grove - LED Button é composto por Grove - Yellow Button, Grove - Blue LED Button e Grove - Red LED Button. Este botão é estável e confiável, com uma vida útil longa de 100 000 acionamentos. Com o LED integrado, você pode aplicá-lo em muitos projetos interessantes; é realmente útil usar o LED para mostrar o status do botão.

**[Grove - Light Sensor](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-p-2727.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lightsensor.jpg)

O Grove - Light sensor integra um foto-resistor (resistor dependente de luz) para detectar a intensidade da luz. A resistência do foto-resistor diminui quando a intensidade da luz aumenta. Um chip LM358 de dupla amplificação operacional na placa produz uma tensão correspondente à intensidade da luz (ou seja, baseada no valor da resistência). O sinal de saída é um valor analógico: quanto mais forte a luz, maior o valor.

**[Grove - Moisture Sensor](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Moisture_sensor.jpg)

Este sensor de umidade pode ser usado para detectar a umidade do solo ou verificar se há água ao redor do sensor, permitindo que a planta no seu jardim consiga pedir ajuda humana quando estiver com sede. Este sensor é muito fácil de usar, você pode simplesmente inseri-lo no solo e ler os dados. Com este sensor, você pode fazer um pequeno projeto que permita à planta enviar uma mensagem para você, como “Estou com sede agora, por favor me dê um pouco de água”.

**[Grove - mini PIR motion sensor](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/miniPIR.jpg)

O Grove - mini PIR motion sensor permite que você detecte movimento, geralmente movimento humano dentro do seu alcance. Basta conectá-lo ao Grove - Base shield e programá-lo; quando alguém se mover em sua faixa de detecção, o sensor irá gerar HIGH em seu pino SIG.

**[Grove - Servo](https://www.seeedstudio.com/Grove-Servo-p-1241.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Servo.jpg)

Grove - Servo é um motor DC com sistema de engrenagem e feedback. Ele é usado no mecanismo de acionamento de robôs. O módulo é um produto bônus para os amantes de Grove. Regulamos o servo de três fios para um conector padrão Grove. Agora você pode conectá-lo e usá-lo como um módulo Grove típico, sem a bagunça de fios jumper.

**[Grove - Temperature & Humidity Sensor （DHT11）](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/DHT11.jpg)

Este sensor de temperatura e umidade fornece uma saída digital pré-calibrada. Um elemento sensor capacitivo exclusivo mede a umidade relativa e a temperatura é medida por um termistor NTC (coeficiente de temperatura negativo). Ele tem excelente confiabilidade e estabilidade em longo prazo. Observe que este sensor não funciona para temperaturas abaixo de 0 grau.

**[Grove - Relay](https://www.seeedstudio.com/Grove-Relay-p-769.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Relay.jpg)

O módulo Grove-Relay é um interruptor digital normalmente aberto. Com ele, você pode controlar um circuito de alta tensão com baixa tensão, digamos 5 V no controlador. Há um LED indicador na placa, que acenderá quando os terminais controlados forem fechados.

**[Grove - Ultrasonic Ranger](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Ultrasonic.jpg)

Este Grove - Ultrasonic ranger é um módulo de medição de distância sem contato que funciona a 40KHz. Quando fornecemos um sinal de disparo em pulso com mais de 10uS através do pino de sinal, o Grove_Ultrasonic_Ranger emitirá 8 ciclos de nível de ciclo de 40kHz e detectará o eco. A largura de pulso do sinal de eco é proporcional à distância medida. Aqui está a fórmula: Distância = tempo em nível alto do sinal de eco * velocidade do som (340M/S)/2. Os sinais de trig e echo do Grove_Ultrasonic_Ranger compartilham 1 pino SIG.

**[Grove - 16 x 2 LCD (White on Blue)](https://www.seeedstudio.com/Grove-16-x-2-LCD-White-on-Blu-p-3196.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lcd.jpg)

Este módulo Grove – 162 LCD é um display LCD de 16 caracteres e 2 linhas, ele usa interface de barramento I2C para se comunicar com a placa de desenvolvimento, assim irá reduzir os pinos de cabeçalho de 10 para 2, o que é muito conveniente para o sistema Grove. Este módulo de display LCD também suporta caracteres personalizados, você pode criar e exibir símbolo de coração ou um boneco de palito neste módulo LCD através de uma simples configuração de código.

## PRIMEIROS PASSOS

### Requisitos mínimos

- cabo micro USB
- Raspberry Pi
- cartão SD
- Grove Base Kit para Raspberry Pi

### Tutorial básico

#### Configuração básica do Arduino IDE

#### Como gravar uma imagem Raspbian

**1. Download do Raspbian Stretch**

Baixe o [Raspbian Stretch](https://www.raspberrypi.org/downloads/raspbian/) do site oficial do Raspberry Pi e selecione a versão “with desktop and recommended software”.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss0.png)

**2. Win32 Disk Imager**

- Baixe o [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/) da página do projeto no Sourceforge como um arquivo instalador e execute-o para instalar o software.

- Insira o cartão SD no seu leitor de cartão SD e conecte-o ao seu PC.

- Execute o utilitário Win32DiskImager a partir da área de trabalho ou do menu.

- Na caixa de dispositivo, selecione a letra de unidade correspondente ao cartão SD. Tenha cuidado para selecionar a unidade correta: se você escolher a unidade errada poderá destruir os dados no disco rígido do seu computador! Se você estiver usando um slot de cartão SD no seu computador e não conseguir ver a unidade na janela do Win32DiskImager, tente usar um adaptador SD externo.  

- Clique em 'Write' e aguarde a conclusão da gravação.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss1.png)

- Concluído.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss2.png)

- Saia do imager e ejete o cartão SD.

#### Configuração básica

**Conexão sem fio e SSH**

**1.** Crie um arquivo chamado "wpa_supplicant.conf" na pasta /boot e copie o seguinte código.

```txt
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
ssid="WiFi-name"
psk="WiFi-password"
key_mgmt=WPA-PSK
priority=1
}
```

:::note
O nome e a senha do Wi-Fi devem ser os mesmos da sua rede Wi-Fi local à qual seu PC está conectado (certifique-se de que seu PC e o Raspberry Pi estão na mesma LAN).
:::

**2.** Crie um arquivo em branco chamado "ssh" na pasta /boot.

**3.** Insira o cartão SD com Raspbian no Raspberry Pi

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/sd_card.jpg)

**4.** Conecte o Raspberry Pi à fonte de alimentação e ligue-o.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/power.jpg)

**5.** Abra o putty para conectar o PC ao Raspberry Pi.

Baixe o putty： [https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png)

**Raspberry Pi**
Nome de usuário padrão : pi
Senha padrão : raspberry

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss4.jpg)

**Configuração do VNC**

**1.** Abra o raspi-config digitando o seguinte comando no terminal.

```bash
sudo raspi-config
```

Use a seta para baixo até 5 interfacing Options e pressione "enter" para selecionar.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss5.png)

Use a seta para baixo até P3 VNC e pressione "enter" para selecionar.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss6.png)

Selecione "Yes" para habilitá-lo.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss7.png)

Selecione "Ok".

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss8.png)

**2.** Instale o VNC Viewer

Baixe o [VNC Viewe](https://www.realvnc.com/en/connect/download/viewer/)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss9.png)

Abra o VNC Viewer e insira o endereço IP do Raspberry Pi. Você pode encontrar o endereço IP digitando o comando `ifconfig` no terminal do Raspberry Pi (ou você pode inserir raspberrypi.local).

:::note
Se você usar raspberrypi.local para fazer login no seu Pi, deve se certificar de que há apenas um Raspberry Pi em uso na sua LAN.
:::

Digite o nome de usuário e a senha padrão, e agora você pode acessar a área de trabalho remota do Raspberry Pi!

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss10.png)

Sucesso！

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss11.PNG)

**Configuração da Base Hat**

**1.** Desligue o Raspberry Pi

```bash
sudo shutdown -h now
```

Conecte a Grove Base Hat para Raspberry Pi ao Raspberry Pi.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pi&hat.jpg)

**2.** Ligue o Raspberry Pi com um cabo micro-usb para habilitar o I2C

Abra o raspi-config digitando o seguinte comando no terminal.

```bash
sudo raspi-config
```

Use a seta para baixo até 5 interfacing Options e pressione "enter" para selecionar.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss5.png)

Use a seta para baixo até P5 I2C e pressione "enter" para selecionar.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss13.png)

Selecione "Yes" para habilitá-lo.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss14.png)

Selecione "Ok".

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss15.png)

Selecione "Finish" para salvar as alterações.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss16.png)

**3.** Instalação com um clique, início rápido, como quer que você chame, com o único comando abaixo.

```bash
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss12.PNG)

se tudo correr bem, você verá o seguinte aviso.

```bash
Successfully installed grove.py-0.6
#######################################################
Lastest Grove.py from github install complete   !!!!!
#######################################################
```

**4.** Além da instalação com um clique, você também pode [instalar todas as dependências](https://github.com/Seeed-Studio/grove.py#installation)).

**5.** Clone o repositório mais recente da biblioteca python.py.

```bash
git clone https://github.com/Seeed-Studio/grove.py
```

### Demonstração do botão LED Grove – LED

Após toda a configuração básica do Raspberry Pi, agora podemos executar o código de demonstração do LED. Observação: você deve concluir primeiro as etapas acima para poder continuar as seguintes.

**Conexão de hardware**

Passo 1: Conecte o Grove - Red LED Button à porta D5 da Base Hat

Passo 2: Insira a Base Hat no Raspberry Pi

Passo 3: Conecte o Raspberry Pi à fonte de alimentação por um cabo micro USB.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LEDbutton.png)

**Enviar código**

Passo 1: Execute os seguintes comandos para criar um arquivo python

```bash
cd grove.py
nano example.py
```

Passo 2: Copie o código a seguir no arquivo python

:::caution
 Certifique-se de que o editor de texto está no formato unix.
:::

```python
#!/usr/bin/env python

import time
from grove.grove_ryb_led_button import GroveLedButton

def main():
    ledbtn = GroveLedButton(5)

    while True:
        ledbtn.led.light(True)
        time.sleep(1)

        ledbtn.led.light(False)
        time.sleep(1)

if __name__ == '__main__':
    main()
```

Passo 3：execute o programa

```bash
sudo chmod +x  example.py
sudo ./example.py
```

Quando você clicar uma vez no botão de LED, o LED mudará para o modo "ON", "OFF" se você mantê-lo pressionado. Se você clicar duas vezes no botão de LED, o LED piscará.

```bash
pi@raspberrypi:~/grove.py $ sudo ./example.py
turn on  LED
turn on  LED
turn off LED
turn on  LED
blink    LED
^CTraceback (most recent call last):
  File "./example.py", line 17, in <module>
    main()
  File "./example.py", line 14, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $ 
```

**Explicação do código de piscar**

Em python, como os módulos se referenciam uns aos outros, módulos diferentes podem ter definições "**main**" diferentes, e só pode haver um programa de entrada por vez. A seleção do programa de entrada depende do valor de **name**. "if__name__=='**main**'" é igual, isso significa que é a entrada da emulação python.

```python
if __name__ == '__main__':
    main()
```

## Grove Base Kit para Raspberry Pi

 Agora, você está pronto para explorar o sistema Grove? Nós projetamos 8 tutoriais para você começar com alguns módulos Grove básicos. Esta seção apresenta como os módulos podem ser combinados e aplicados em aplicações da vida real.

### Pré-requisito

Para iniciar o tutorial Grove, é necessário conhecimento fundamental de Raspberry Pi e da linguagem de programação Python. Certifique-se de ter concluído com êxito o tutorial de configuração básica acima e terminado a demonstração de LED Blink e garanta que ela esteja funcionando totalmente com seu Raspberry Pi com a Grove Base Hat.

### Resultados de aprendizagem

- Ser capaz de usar a Grove Base Hat para construir aplicações com módulos Grove.
- Ser capaz de demonstrar cada componente do Grove Starter Kit e utilizar o módulo relevante em seus próprios projetos após este tutorial
- Ser capaz de identificar o tipo de módulos incluídos neste Kit e suas aplicações.
- Entender a diferença entre o sinal analógico e digital.

### Lição 1: Buzzer

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/buzzer.jpg)

**Objetivo**

Usar o buzzer para gerar algum ruído e também definir frequência específica para produzir alguns tons.

**Requisitos de hardware**

Preparar por conta própria

- Cabo micro-USB
- Raspberry Pi 3 Model B
- Computador

Incluído no kit

- Grove Base Hat
- Cabo Grove
- Grove – Buzzer

**Conexão de hardware**

**Passo 1.** Use um cabo Grove para conectar o Grove - Buzzer à porta PWM do Base Hat e insira o Hat no Raspberry Pi.

**Passo 2.** Conecte o Raspberry Pi à fonte de alimentação com um cabo micro USB.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/buzzer&pi.jpg)

**Programação de software**

:::note
Certifique-se de que você clonou o repositório da biblioteca python.py para o seu Raspberry Pi.
:::

Passo 1: Execute os seguintes comandos para criar um arquivo Python

```bash
cd grove.py
nano lesson_1.py
```

Passo 2: Copie o seguinte código

```python
#!/usr/bin/env python
import time
from mraa import getGpioLookup
from upm import pyupm_buzzer as upmBuzzer

def main():
    # Grove - Buzzer connected to PWM port
    buzzer = upmBuzzer.Buzzer(getGpioLookup('GPIO12'))

    CHORDS = [upmBuzzer.BUZZER_DO, upmBuzzer.BUZZER_RE, upmBuzzer.BUZZER_MI, 
        upmBuzzer.BUZZER_FA, upmBuzzer.BUZZER_SOL, upmBuzzer.BUZZER_LA, 
        upmBuzzer.BUZZER_SI]
    for i in range(0, len(CHORDS)):
        buzzer.playSound(CHORDS[i], 500000)
        time.sleep(0.1)

    del buzzer
    print('application exiting...')

if __name__ == '__main__':
    main()
```

Passo 3：execute o programa

```bash
sudo chmod +x lesson_1.py
sudo ./lesson_1.py
```

Se tudo correr bem, você deve notar que o buzzer está emitindo o som “Do Ré Mi Fá Sol Lá Si”.

### Lição 2: Botão de LED Vermelho

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LEDButton.jpg)

**Objetivo**

Usar o Grove - Red LED Button para controlar o piscar dos LEDs e fazer o Grove - Buzzer emitir diferentes efeitos sonoros.

**Requisitos de hardware**

Preparar por conta própria

- Cabo micro-USB
- Raspberry Pi 3 Model B
- Computador

Incluído no kit

- Grove Base Hat
- Cabo Grove
- Grove - Red LED Button
- Grove – Buzzer

**Conexão de hardware**

**Passo 1.** Use um cabo Grove para conectar o Grove - Buzzer à porta PWM e o Grove - Red LED Button à porta D5 do Base Hat e insira o Hat no Raspberry Pi.

**Passo 2.** Conecte o Raspberry Pi à fonte de alimentação com um cabo micro USB.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Buzzer&Button.png)

**Programação de software**

:::note
Certifique-se de que você clonou o repositório da biblioteca python.py para o seu Raspberry Pi.
:::

Passo 1: Execute os seguintes comandos para criar um arquivo Python

```bash
cd grove.py
nano lesson_2.py
```

Passo 2: Copie o seguinte código

```python
#!/usr/bin/env python

import time
from mraa import getGpioLookup
from upm import pyupm_buzzer as upmBuzzer

from grove.button import Button
from grove.grove_ryb_led_button import GroveLedButton

def main():
    # Grove - LED Button connected to port D5
    button = GroveLedButton(5)

    # Grove - Buzzer connected to PWM port
    buzzer = upmBuzzer.Buzzer(getGpioLookup('GPIO12'))

    def on_event(index, event, tm):
        if event & Button.EV_SINGLE_CLICK:
            print('single click')
            button.led.light(True)
            buzzer.playSound(upmBuzzer.BUZZER_DO, 500000)

        elif event & Button.EV_LONG_PRESS:
            print('long press')
            button.led.light(False)
            buzzer.playSound(upmBuzzer.BUZZER_DO, 1000000)

    button.on_event = on_event

    while True:
        time.sleep(1)

if __name__ == '__main__':
    main()
```

Passo 3：execute o programa

```bash
sudo chmod +x lesson_2.py
sudo ./lesson_2.py
```

:::tip
Se tudo correr bem, você verá que, quando você mantiver o botão de LED pressionado, o LED apagará e o buzzer emitirá um som longo de "Do". Porém, quando você pressioná-lo rapidamente, o LED acenderá e o buzzer emitirá um som curto de "Do".
:::

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_2.py
single click
single click
single click
long press
single click
long press
long press
Traceback (most recent call last):
  File "./lesson2.py", line 34, in <module>
    main()
  File "./lesson2.py", line 31, in main
    time.sleep(1)
KeyboardInterrupt
^Cpi@raspberrypi:~/grove.py $ 
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LED&Buz_demo.jpg)

### Lição 3: Sensor de Luz

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lightsensor.jpg)

**Objetivo**

Nesta lição, vamos mostrar como usar o Grove - Light Sensor para controlar o Grove - Servo. Nesse caso, o ângulo de rotação do servo varia com a intensidade da luz.

**Requisitos de hardware**

Preparar por conta própria

- Cabo micro-USB
- Raspberry Pi 3 Model B
- Computador

Incluído no kit

- Grove Base Hat
- Cabo Grove
- Grove - Light Sensor
- Grove - Servo

**Conexão de hardware**

**Passo 1** Conecte o Grove - Light Sensor à porta A0, o Grove - Servo à porta PWM.

**Passo 2** Insira o Base Hat no Raspberry Pi.

**Passo 3** Conecte o Raspberry Pi à fonte de alimentação com um cabo micro USB.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/servo&light.png)

**Programação de software**

:::note
Certifique-se de que você clonou o repositório da biblioteca python.py para o seu Raspberry Pi.
:::

Passo 1: Execute os seguintes comandos para criar um arquivo Python

```bash
cd grove.py
nano lesson_3.py
```

Passo 2: Copie o seguinte código

```python
#!/usr/bin/env python

import time

from grove.grove_servo import GroveServo
from grove.grove_light_sensor_v1_2 import GroveLightSensor

def main():
    # Grove - Servo connected to PWM port
    servo = GroveServo(12)

    # Grove - Light Sensor connected to port A0
    sensor = GroveLightSensor(0)

    while True:
        angle = sensor.light * 180 / 1000
        print('light value {}, turn to {} degree.'.format(sensor.light, angle))
        servo.setAngle(angle)

        time.sleep(1)

if __name__ == '__main__':
    main()
```

Passo 3：execute o programa

```bash
sudo chmod +x lesson_3.py
sudo ./lesson_3.py
```

Se tudo correr bem, a mudança na intensidade da luz resultará em diferentes ângulos de rotação do servo.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/light_on&off.jpg)

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_3.py
light value 300, turn to 113 degree.
light value 80, turn to 80 degree.
light value 166, turn to 165 degree.
light value 498, turn to 132 degree.
light value 601, turn to 60 degree.
light value 200, turn to 21 degree.
light value 459, turn to 99 degree.
light value 172, turn to 173 degree.
light value 319, turn to 138 degree.
^CTraceback (most recent call last):
  File "./lesson3.py", line 23, in <module>
    main()
  File "./lesson3.py", line 20, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $ 
```

### Lição 4: Sensor de Movimento & Relé

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pir+relay.jpg)
<!-- 图片链接缺失 -->
**Objetivo**

Usar o Grove - mini PIR motion sensor para detectar movimento, acendendo a luz quando alguém se aproximar.

**Requisitos de hardware**

Preparar por conta própria

- Cabo micro-USB
- Raspberry Pi 3 Model B
- Computador

Incluído no kit

- Grove Base Hat
- Cabo Grove
- Grove - mini PIR motion sensor
- Grove - Relay

**Conexão de hardware**

**Passo 1** Conecte o Grove - mini PIR motion sensor à porta D5 e o Grove - Relay à porta D16 do Base Hat.

**Passo 2** Insira o Base Hat no Raspberry Pi

**Passo 3** Conecte o Raspberry Pi à fonte de alimentação com um cabo micro USB.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pir&relay.png)

**Programação de software**

:::note
Certifique-se de que você clonou o repositório da biblioteca python.py para o seu Raspberry Pi.
:::

Passo 1: Execute os seguintes comandos para criar um arquivo Python

```bash
cd grove.py
nano lesson_4.py
```

Passo 2: Copie o seguinte código

```python
#!/usr/bin/env python

import time

from grove.grove_mini_pir_motion_sensor import GroveMiniPIRMotionSensor
from grove.grove_relay import GroveRelay

def main():
    # Grove - mini PIR motion sensor connected to port D5
    sensor = GroveMiniPIRMotionSensor(5)

    # Grove - Relay connected to port D16
    relay = GroveRelay(16)

    def on_detect():
        print('motion detected')

        relay.on()
        print('relay on')

        time.sleep(1)

        relay.off()
        print('relay off')

    sensor.on_detect = on_detect

    while True:
        time.sleep(1)

if __name__ == '__main__':
    main()
```

Passo 3：execute o programa

```bash
sudo chmod +x lesson_4.py
sudo ./lesson_4.py
```

Se tudo correr bem, você deverá ver o relé ligar/desligar assim que detectar um movimento.

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_4.py
motion detected
relay on
relay off
motion detected
relay on
relay off
^CTraceback (most recent call last):
  File "./lesson_4.py", line 33, in <module>
    main()
  File "./lesson_4.py", line 30, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $ 
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pir_light.jpg)

### Lição 5: Sensor Ultrassônico & Relé

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ultra+relay.jpg)

**Objetivo**

Nesta lição, usamos o Grove - Ultrasonic Ranger para detectar a distância; quando alguém se aproxima, a luz no Grove - Relay deve ficar "ON".

**Requisitos de hardware**

Preparar por conta própria

- Cabo micro-USB
- Raspberry Pi 3 Model B
- Computador

Incluído no kit

- Grove Base Hat
- Cabo Grove
- Grove - Ultrasonic Ranger
- Grove - Relay

**Conexão de hardware**

**Passo 1** Conecte o Grove - Ultrasonic Ranger à porta D5 e o Grove - Relay à porta D16 do Base Hat.

**Passo 2** Insira o Base Hat no Raspberry Pi

**Passo 3** Conecte o Raspberry Pi à fonte de alimentação com um cabo micro USB.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ultra&relay.png)

**Programação de software**

:::note
Certifique-se de que você clonou a biblioteca do repositório python.py para o seu Raspberry Pi.
:::

Passo 1: Execute os seguintes comandos para criar um arquivo python

```bash
cd grove.py
nano lesson_5.py
```

Passo 2: Copie o seguinte código

```python
#!/usr/bin/env python

import time

from grove.grove_relay import GroveRelay
from grove.grove_ultrasonic_ranger import GroveUltrasonicRanger

def main():
    # Grove - Ultrasonic Ranger connected to port D5
    sensor = GroveUltrasonicRanger(5)

    # Grove - Relay connected to port D16
    relay = GroveRelay(16)

    while True:
        distance = sensor.get_distance()
        print('{} cm'.format(distance))

        if distance < 20:
            relay.on()
            print('relay on')

            time.sleep(1)

            relay.off()
            print('relay off')

            continue

        time.sleep(1)

if __name__ == '__main__':
    main()
```

Passo 3：execute o programa

```bash
sudo chmod +x lesson_5.py
sudo ./lesson_5.py
```

Se tudo correr bem, a mudança na intensidade da luz resultará em diferentes ângulos de rotação do servo.

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_5.py
253.722585481 cm
253.739028141 cm
252.896341784 cm
1.20442489098 cm
relay on
relay off
4.51762100746 cm
relay on
relay off
253.985668051 cm
^CTraceback (most recent call last):
  File "./lesson_5.py", line 34, in <module>
    main()
  File "./lesson_5.py", line 31, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $ 
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ultra_light.jpg)

Agora, compare o resultado da lição quatro com o da lição cinco: você consegue listar as vantagens e desvantagens do Grove - mini sensor de movimento PIR e do Grove Ultrasonic Ranger?

### Lição 6:  LCD

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lcd.jpg)

**Objetivo**

Usar a tela Grove - 16*2 LCD para exibir “Hello World”.

**Requisitos de hardware**

Preparação própria

- cabo micro-USB
- Raspberry Pi 3 Model B
- Computador

Incluídos no kit

- Grove Base Hat
- Cabo Grove
- Grove - 16*2 LCD

**Conexão de hardware**

**Passo 1** Conecte o Grove - 16*2 LCD à porta I2C do Base Hat.

**Passo 2** Insira o Base Hat no Raspberry Pi.

**Passo 3** Conecte o Raspberry Pi à fonte de alimentação com um cabo micro USB.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LCD.png)

**Programação de software**

:::note
Certifique-se de que você clonou a biblioteca do repositório python.py para o seu Raspberry Pi.
:::

Passo 1: Execute os seguintes comandos para criar um arquivo python

```bash
cd grove.py
nano lesson_6.py
```

Passo 2: Copie o seguinte código

```python
#!/usr/bin/env python

import time

from grove.display.jhd1802 import JHD1802

def main():
    # Grove - 16x2 LCD(White on Blue) connected to I2C port
    lcd = JHD1802()

    lcd.setCursor(0, 0)
    lcd.write('hello, world!!!')

    print('application exiting...')

if __name__ == '__main__':
    main()
```

Passo 3：execute o programa

```bash
sudo chmod +x lesson_6.py
sudo ./lesson_6.py
```

Você deverá ver “hello, world!!!” exibido na tela LCD.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/helloworld.jpg)

Se você quiser usar a tela Grove - 16*2 LCD para exibir outros caracteres, basta alterar `lcd.write('hello, world!!!')` no código.

### Lição 7: LCD & Sensor de Temperatura e Umidade

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lcd+dht11.jpg)

**Objetivo**

Usar a tela Grove - 16*2 LCD para exibir dados (temperatura e umidade) do Grove - Temperature and Humidity Sensor

**Requisitos de hardware**

Preparação própria

- cabo micro-USB
- Raspberry Pi 3 Model B
- Computador

Incluídos no kit

- Grove Base Hat
- Cabo Grove
- Grove - 16*2 LCD
- Grove - Temperature and Humidity Sensor

**Conexão de hardware**

**Passo 1** Conecte o Grove - 16*2 LCD à porta I2C, o Grove - Temperature and Humidity Sensor à porta D5.

**Passo 2** Insira o Base Hat no Raspberry Pi.

**Passo 3** Conecte o Raspberry Pi à fonte de alimentação com um cabo micro USB.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/DHT11&LCD.png)

**Programação de software**

:::note
Certifique-se de que você clonou a biblioteca do repositório python.py para o seu Raspberry Pi.
:::

Passo 1: Execute os seguintes comandos para criar um arquivo python e instalar o seeed-python-dht.

```bash
sudo pip3 install seeed-python-dht
cd grove.py
nano lesson_7.py
```

Passo 2: Copie o seguinte código

```python
#!/usr/bin/env python3

import time

from seeed_dht import DHT
from grove.display.jhd1802 import JHD1802

def main():
    # Grove - 16x2 LCD(White on Blue) connected to I2C port
    lcd = JHD1802()

    # Grove - Temperature&Humidity Sensor connected to port D5
    sensor = DHT('11', 5)

    while True:
        humi, temp = sensor.read()
        print('temperature {}C, humidity {}%'.format(temp, humi))

        lcd.setCursor(0, 0)
        lcd.write('temperature: {0:2}C'.format(temp))

        lcd.setCursor(1, 0)
        lcd.write('humidity: {0:5}%'.format(humi))

        time.sleep(1)

if __name__ == '__main__':
    main()

```

Passo 3：execute o programa

```bash
sudo chmod +x lesson_7.py
sudo ./lesson_7.py
```

Se tudo correr bem, você deverá ver os valores atuais de temperatura e umidade exibidos na tela LCD

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_7.py
temperature 23C, humidity 16%
temperature 22C, humidity 17%
temperature 22C, humidity 17%
^CTraceback (most recent call last):
  File "./lesson_7.py", line 28, in <module>
    main()
  File "./lesson_7.py", line 25, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/temp&humi_LCD.jpg)

### Lição 8: LCD & Sensor de Umidade do Solo & Buzzer

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lcd+moisture+buzzer.jpg)

**Objetivo**

Usar o Grove - 16 * 2 LCD para exibir o nível atual de umidade. Quando o status de umidade for "wet", o Grove - Buzzer deverá alertar você.

**Requisitos de hardware**

Preparação própria

- cabo micro-USB
- Raspberry Pi 3 Model B
- Computador

Incluídos no kit

- Grove Base Hat
- Cabo Grove
- Grove - 16*2 LCD
- Grove - Moisture Sensor
- Grove - Buzzer

**Conexão de hardware**

**Passo 1** Conecte o Grove - 16*2 LCD à porta I2C, o Grove - Moisture Sensor à porta A0 e o Grove - Buzzer à porta PWM do Grove Base Hat.

**Passo 2** Insira o Base Hat no Raspberry Pi.

**Passo 3**  Use o micro USB para conectar o Raspberry Pi ao PC.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lesson8.png)

**Programação de software**

:::note
Certifique-se de que você clonou a biblioteca do repositório python.py para o seu Raspberry Pi.
:::

Passo 1: Execute os seguintes comandos para criar um arquivo python

```bash
cd grove.py
nano lesson_8.py
```

Passo 2： Copie o seguinte código

```python
#!/usr/bin/env python

import time
from mraa import getGpioLookup
from upm import pyupm_buzzer as upmBuzzer

from grove.grove_moisture_sensor import GroveMoistureSensor
from grove.lcd.sh1107g import JHD1802

def main():
    # Grove - 16x2 LCD(White on Blue) connected to I2C port
    lcd = JHD1802()

    # Grove - Moisture Sensor connected to port A0
    sensor = GroveMoistureSensor(0)

    # Grove - Buzzer connected to port PWM
    buzzer = upmBuzzer.Buzzer(getGpioLookup('GPIO12'))

    while True:
        mois = sensor.moisture
        if 0 <= mois and mois < 300:
            level = 'dry'
        elif 300 <= mois and mois < 600:
            level = 'moist'
        else:
            level = 'wet'
            buzzer.playSound(upmBuzzer.BUZZER_DO, 200000)

        print('moisture: {}, {}'.format(mois, level))

        lcd.setCursor(0, 0)
        lcd.write('moisture: {0:>6}'.format(mois))

        lcd.setCursor(1, 0)
        lcd.write('{0:>16}'.format(level))

        time.sleep(1)

if __name__ == '__main__':
    main()
```

Passo 3：execute o programa

```bash
sudo chmod +x lesson_8.py
sudo ./lesson_8.py
```

Se tudo correr bem, você conseguirá ver o nível de umidade na tela LCD. O buzzer é usado para alertar as pessoas quando o nível de umidade atingir "wet".

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_8.py
moisture: 0, dry
moisture: 0, dry
moisture: 396, moist
moisture: 398, moist
moisture: 407, wet
moisture: 418, wet
^CTraceback (most recent call last):
  File "./lesson_8.py", line 41, in <module>
    main()
  File "./lesson_8.py", line 38, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lesson8.png)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Disponibilizamos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
