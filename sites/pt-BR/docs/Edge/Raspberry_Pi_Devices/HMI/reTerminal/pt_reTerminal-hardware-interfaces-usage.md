---
description: Uso de Hardware e Interfaces
title: Uso de Hardware e Interfaces
keywords:
  - Edge
  - reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-hardware-interfaces-usage
sku: 110070048,103060001
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reTerminal-hardware-interfaces-usage/
---


# Uso de Hardware e Interfaces

Este wiki apresenta os diversos hardwares e interfaces do reTerminal e como usá-los para expandir suas ideias de projeto.

**Nota:** Para alguns hardwares e interfaces, as instruções de uso serão diferentes entre si ao executar a imagem Raspberry Pi OS, a [imagem Buildroot](https://wiki.seeedstudio.com/pt-br/reTerminal-Buildroot-SDK) e a [imagem Yocto](https://wiki.seeedstudio.com/pt-br/reTerminal-Yocto). As etapas padrão serão para a imagem Raspberry Pi OS. No entanto, se as instruções para a imagem Buildroot e a imagem Yocto forem diferentes, isso será claramente indicado.

## Visão Geral do Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HW_overview.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hw-overview-internal-v1.3.jpg" alt="pir" width="1000" height="auto"/></p>

## Pinos de 40 vias Compatíveis com Raspberry Pi

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/pinout-v2.jpg" alt="pir" width="1000" height="auto"/></p>

Os **40 pinos** consistem em **26 GPIO, até 5 × I2C, até 5 × SPI, até 5 × UART, 1 x PCM, 1 x PWM, 1 × interface SDIO, 1 × DPI (Display RGB Paralelo), até 3× saídas GPCLK e 1 interface USB**.

A **interface USB** é estendida a partir da **interface USB 2.0 interna** no Compute Module 4. Portanto, você pode expandir para ainda mais conectores USB e obter velocidades de até **480 Mbit/s** usando esta interface.

Você também pode usar esses 40 pinos para conectar **HATs compatíveis com Raspberry Pi** e expandir seus projetos!

[Visite aqui](https://www.seeedstudio.com/hats-shields-c-840.html) para explorar uma ampla gama de HATs Raspberry Pi oferecidos pela Seeed Studio e [visite aqui](https://uk.pi-supply.com/collections/all-raspberry-pi-hats-and-phats) para conferir ainda mais HATs Raspberry Pi de terceiros!

Os pinos GPIO podem consumir com segurança uma corrente máxima de **50mA**. Isso significa 50mA distribuídos por todos os pinos. Portanto, um pino GPIO individual só pode consumir com segurança **16mA** de corrente. Por outro lado, a corrente máxima para cada um dos pinos restantes é de **2A**. Por favor, tenha isso em mente ao conectar hardware adicional a esses pinos.

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/40-pin_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/ReTerminal/40-pin_sch.jpg) para uma imagem em resolução mais alta

### Uso - GPIO

- **Passo 1.** Definir o pino como GPIO

```sh
sudo -i   #enable root account privileges 
cd /sys/class/gpio
echo 23 > export #GPIO23 which is Pin 16
cd gpio23
```

- **Passo 2.** Definir GPIO como entrada/saída

```sh
echo in > direction  #set GPIO as input
echo out > direction  #set GPIO as output
```

- **Passo 3.** Definir nível alto/baixo do GPIO

```sh
echo 1 > value  #set GPIO to high
echo 0 > value  #set GPIO to low
```

- **Passo 4.** Obter o status de entrada/saída do GPIO

```sh
cat direction
```

- **Passo 5.** Obter o status de nível do GPIO

```sh
cat value
```

- **Passo 6.** Retornar o pino ao padrão

```sh
cd ..
echo 23 > unexport
```

#### Uso na imagem Buildroot

- Substitua **sudo -i** por **su -** para habilitar privilégios de conta **root**
- Siga os outros passos mencionados acima

#### Uso na imagem Yocto

- **sudo -i** não é necessário porque já fazemos login como **root**
- Siga os outros passos mencionados acima

### Uso - I2C

- **Passo 1.** Ligue o reTerminal, clique no ícone do Raspberry Pi na interface Desktop do Raspberry Pi e navegue até `Preferences > Raspberry Pi Configuration`

- **Passo 2.** Clique na guia `Interfaces` e clique em **Enabled** que está ao lado de **I2C**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/i2c-enable-1.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 3.** Clique em **OK**

- **Passo 4.** Conecte um dispositivo I2C ao reTerminal

- **Passo 5.** Liste todos os barramentos I2C disponíveis

```sh
i2cdetect -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-l.png" alt="pir" width="750" height="auto"/></p>

- **Passo 6.**  Escaneie os endereços padrão no barramento I2C 1 (i2c-1)

```sh
i2cdetect -y 1
```

**Nota** 1 representa o número do barramento I2C

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-detect-2.png" alt="pir" width="600" height="auto"/></p>

A figura acima mostra dispositivos I2C detectados com endereços 0x20, 0x51, 0x45, 0x19, 0x29 e 0x5c

#### Uso na imagem Buildroot

- Você não precisa ativar o I2C para a imagem Buildroot porque **o I2C é habilitado por padrão**
- Siga os outros passos mencionados acima

#### Uso na imagem Yocto

- I2C não é habilitado ao ligar. Ele só funciona com **modprobe i2c-dev** após cada inicialização. Isso será atualizado assim que for corrigido.

### Uso - SPI

- **Passo 1.** Ligue o reTerminal, clique no ícone do Raspberry Pi na interface Desktop do Raspberry Pi e navegue até `Preferences > Raspberry Pi Configuration`

- **Passo 2.** Clique na guia `Interfaces` e clique em **Enabled** que está ao lado de **SPI**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/spi-enable-1.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 3.** Conecte um dispositivo SPI ao reTerminal

- **Passo 4.** Liste todos os dispositivos SPI disponíveis

```sh
ls /dev/spi*
```

Você verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/spi_list.png" alt="pir" width="450" height="auto"/></p>

- **Passo 5.** Abra uma janela de terminal e digite o seguinte para baixar uma **ferramenta de teste de SPI**

```sh
wget https://files.seeedstudio.com/wiki/102110497/spidev_test
```

- **Passo 6.** Altere os direitos de usuário da ferramenta

```sh
chmod +x spidev_test
```

- **Passo 7.** Curto-circuite **GPIO 10 (Pino 19)** e **GPIO 9 (Pino 21)** usando um jumper

**Nota:** Aqui fazemos um curto-circuito nos **pinos MOSI e MISO**

- **Passo 8.** Execute a seguinte ferramenta de teste SPI

```sh
./spidev_test -D /dev/spidev0.0 -v -p hello
```

Se você vir a seguinte saída, o SPI está funcionando corretamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SPI_test.jpg" alt="pir" width="1000" height="auto"/></p>

#### Uso na imagem Buildroot/ Yocto

- Para ativar o SPI, abra o **config.txt** com o comando **vi /boot/config.txt**
- Adicione **dtparam=spi=on** no final (pressione **i** para entrar no modo de edição)
- Pressione **ESC** para sair do modo de edição
- Salve o arquivo digitando **:wq**
- Reinicie
- A ferramenta spidev_test apresenta problemas ao ser executada. Isso será atualizado assim que for corrigido.

## Interface de Alta Velocidade para Módulos de Expansão

Há uma interface de expansão de alta velocidade na parte de trás do reTerminal. Ela consiste em 1 Host PCIe de 1 via Gen 2 (suportando velocidades de até 5Gbps), 1 USB 2.0, 1 PoE e 26 GPIOs. Os 26 pinos GPIO podem ser usados ainda como 2 I2C, 2 SPI e 1 UART.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Expansion_Schematic.png" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/ReTerminal/Expansion_Schematic.png) para uma imagem em resolução mais alta

:::note
As interfaces PCIe, USB 3.0, 2 x CAN-FD e SDIO3.0 são definidas para produtos futuros e, portanto, não são utilizáveis no momento
:::

Planejamos construir módulos de expansão no futuro para o reTerminal e reservamos esta interface para conectar esses módulos ao reTerminal. Lançaremos uma ampla gama de módulos, tais como:

- Módulo de Matriz de Microfone e Alto-falante
- Módulo de Câmera
- I/O Industrial
- Módulo LoraWAN
- Módulo 5G/4G
- Módulo PoE
- Switch Ethernet

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/external_modules.png" alt="pir" width="750" height="auto"/></p>

Existem 2 furos mecânicos para parafuso M4 na lateral do reTerminal para ajudar a manter os módulos de expansão no lugar.

## Interface de Câmera CSI

O reTerminal possui uma interface de câmera MIPI CSI de 2 vias, o que significa que você pode conectar até 2 câmeras ao reTerminal. Uma interface possui **15 pinos**, enquanto a outra possui **22 pinos**. Portanto, certifique-se de usar o cabo flexível correto correspondente à interface que você pretende usar. Essas interfaces de câmera podem ser usadas para detecção de objetos e aplicações de aprendizado de máquina.

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/CSI_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/ReTerminal/CSI_sch.jpg) para uma imagem em resolução mais alta

#### Uso

- **Passo 1.** Conecte uma câmera à **interface FPC** de **15 pinos** ou **22 pinos**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FPC-label-1.jpg" alt="pir" width="800" height="auto"/></p>

- **Passo 2.** Ligue o reTerminal, clique no ícone do Raspberry Pi na interface Desktop do Raspberry Pi e navegue até `Preferences > Raspberry Pi Configuration`

- **Passo 3.** Clique na guia `Interfaces` e clique em **Enabled** que está ao lado de **Camera**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Cam-enable.jpg" alt="pir" width="1000" height="auto"/></p>

- **Passo 4.** Clique em **Yes** para reiniciar

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/cam-reboot.jpg" alt="pir" width="1000" height="auto"/></p>

- **Passo 5.** Abra uma janela de terminal e digite o seguinte para tirar uma foto estática e salvá-la na Área de Trabalho

```sh
raspistill -o Desktop/image.jpg
```

**Nota:** Você pode alterar o local de salvamento de acordo com sua preferência

- **Passo 6.** Clique duas vezes no arquivo gerado na Área de Trabalho para visualizar a imagem

- **Passo 7.** Digite o seguinte para gravar um vídeo e salvá-lo na Área de Trabalho

```sh
raspivid -o Desktop/video.h264
```

- **Passo 8.** Clique duas vezes no arquivo gerado na Área de Trabalho para reproduzir o vídeo gravado

Você pode aprender mais sobre o uso da câmera visitando a [documentação oficial do Raspberry Pi](https://projects.raspberrypi.org/en/projects/getting-started-with-picamera/3)

#### Uso na imagem Buildroot/ Yocto

- A interface de câmera CSI ainda não foi testada. Isto será atualizado assim que for testado.

## LCD de 5 Polegadas

O LCD de 5 polegadas embutido no reTerminal está conectado à **interface DSI de 30 pinos** na placa carrier interna. Este LCD suporta **multitoque de 5 pontos** e, para habilitar esse recurso, o LCD é conectado a outra **interface TP** na placa carrier.

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/LCD_sch.png" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/ReTerminal/LCD_sch.png) para uma imagem em resolução mais alta

## Painel de Toque para o LCD

### Uso

O painel de toque para o LCD é conectado por meio de um conector **FPC de 6 pinos**. Você pode testá-lo usando a ferramenta evtest

- **Passo 1.** Digite o seguinte para instalar o **evtest**, que é um monitor e ferramenta de consulta de eventos de dispositivos de entrada

```sh
sudo apt install evtest
```

- **Passo 2.** Abra a ferramenta evtest

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest-1.png" alt="pir" width="680" height="auto"/></p>

- **Passo 3.** Digite **1** e você verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tp-1.png" alt="pir" width="720" height="auto"/></p>

- **Passo 4.** Toque aleatoriamente no LCD do reTerminal e você verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tp-2.png" alt="pir" width="850" height="auto"/></p>

#### Uso na imagem Buildroot

- Você não precisa instalar a **ferramenta evtest** porque ela já está instalada
- Antes de executar o **evtest** você precisa mudar para root digitando **su -**
- Siga os outros passos mencionados acima

#### Uso na imagem Yocto

- Você não precisa instalar a **ferramenta evtest** porque ela já está instalada
- Siga os outros passos mencionados acima

### Conectar outros dispositivos ao conector FPC via I2C

O painel de toque é conectado ao reTerminal via protocolo de comunicação I2C. Portanto, você pode facilmente conectar outros dispositivos I2C a esta interface FPC de 6 pinos se preferir. O diagrama de conexão é o seguinte

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FPC-I2C-connection.png" alt="pir" width="900" height="auto"/></p>

Depois disso, siga as etapas do tópico anterior sobre como usar I2C

## 4 Botões Programáveis pelo Usuário

Há 4 botões programáveis pelo usuário na parte frontal do reTerminal. Esses botões podem ser facilmente controlados usando software e podem ser atribuídos para LIGAR/DESLIGAR diferentes funções de acordo com suas aplicações!

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/keys_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/ReTerminal/keys_sch.jpg) para uma imagem em resolução mais alta

### Uso

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/key-label.jpg" alt="pir" width="500" height="auto"/></p>

- **Passo 1.** Abra a ferramenta evtest

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest.png" alt="pir" width="680" height="auto"/></p>

- **Passo 2.** Digite **0** e você verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/button-test.jpg" alt="pir" width="680" height="auto"/></p>

- **Passo 3.** Pressione os botões da esquerda para a direita e você verá o seguinte

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/button-test-result.png" alt="pir" width="800" height="auto"/></p>

**Nota:** Os botões são configurados como **a s d f** da **esquerda para a direita** por padrão

- **Passo 4.** Se você quiser configurar os botões, digite o seguinte

```sh
sudo nano /boot/config.txt
```

- **Passo 5.** Modifique o arquivo adicionando o seguinte ao final

```sh
dtoverlay=reTerminal,key0=0x100,key1=0x101,key2=0x102,key3=0x103,tp_rotate=1
```

**Nota:** Aqui os números hexadecimais 100,101,102 e 103 são atribuídos a key0, key1, key2 e key3 respectivamente

#### Uso na imagem Buildroot

- Você não precisa instalar a **ferramenta evtest** porque ela já está instalada
- Antes de executar o **evtest** você precisa mudar para root digitando **su -**
- Siga os outros passos mencionados acima

#### Uso na imagem Yocto

- Você não precisa instalar a **ferramenta evtest** porque ela já está instalada
- Siga os outros passos mencionados acima

## 3 LEDs Programáveis pelo Usuário

Há 2 LEDs programáveis pelo usuário na parte frontal do reTerminal. Esses LEDs podem ser LIGADOS/DESLIGADOS usando software e podem ser úteis em cenários onde você queira usá-los como LEDs de status para monitorar diferentes recursos de hardware. O LED **USR** pode ser aceso em **Verde**, enquanto o LED **STA** pode ser aceso em **Vermelho** ou **Verde**

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/LEDs_sch.jpg" alt="pir" width="700" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/ReTerminal/LEDs_sch.jpg) para uma imagem em resolução mais alta

### Uso

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/led-label.jpg" alt="pir" width="550" height="auto"/></p>

- **Passo 1.** Habilite privilégios de conta root

```sh
sudo -i
```

- **Passo 2.** Entre no seguinte diretório

```sh
cd /sys/class/leds
```

- **Passo 3.** Entre no seguinte diretório para controlar o **LED USR Verde**

```sh
cd usr_led0
```

- **Passo 4.** Ligue o LED com brilho máximo

```sh
echo 255 > brightness
```

**Nota:** Você pode inserir valores de 1 - 255 para ajustar os níveis de brilho

- **Passo 5.** Desligue o LED

```sh
echo 0 > brightness
```

- **Passo 6.** Entre no seguinte diretório para controlar o **LED STA Vermelho**

```sh
cd ..
cd usr_led1
```

- **Passo 7.** Repita os passos 4 - 5 para controlar o LED

- **Passo 8.** Entre no seguinte diretório para controlar o **LED STA Verde**

```sh
cd ..
cd usr_led2
```

- **Passo 9.** Repita os passos 4 - 5 para controlar o LED

#### Uso na imagem Buildroot

- Substitua **sudo -i** por **su -** para habilitar privilégios de conta **root**
- Siga os outros passos mencionados acima

#### Uso na imagem Yocto

- **sudo -i** não é necessário porque já iniciamos a sessão como **root**
- Siga os outros passos mencionados acima

## Porta Ethernet Gigabit

O reTerminal possui um conector Ethernet Gigabit (RJ45) onboard. Esta porta é conectada ao **Gigabit Ethernet PHY** do módulo CM4 que é baseado no **Broadcom BCM54210PE**. Ele também é **compatível com IEEE 1588-2008**.

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ethernet_sch.png" alt="pir" width="900" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/ReTerminal/Ethernet_sch.png) para uma imagem em resolução mais alta

## Coprocessador de Criptografia

O reTerminal possui recursos de segurança como um **coprocessador criptográfico Microchip ATECC608A** com armazenamento seguro de chaves baseado em hardware. Ele também possui armazenamento protegido para até 16 chaves, certificados ou dados. Fornece suporte de hardware para assinatura simétrica, verificação, acordo de chaves – ECDSA. Possui suporte de hardware para algoritmos simétricos, gerenciamento de chaves de rede e boot seguro.

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Encrypt_sch.jpg" alt="pir" width="800" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/ReTerminal/Encrypt_sch.jpg) para uma imagem em resolução mais alta

### Uso

- **Passo 1.** Liste todos os barramentos I2C disponíveis

```sh
i2cdetect -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-l.png" alt="pir" width="750" height="auto"/></p>

- **Passo 2.**  Faça uma varredura nos endereços padrão no barramento I2C 3 (i2c-3)

```sh
i2cdetect -y 3
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-y3.png" alt="pir" width="530" height="auto"/></p>

**Nota:** 3 representa o número do barramento I2C

O dispositivo com endereço I2C **0x60** é o coprocessador de criptografia

#### Uso na imagem Buildroot

- Funciona como acima

#### Uso na imagem Yocto

- I2C não é habilitado ao ligar. Ele só funciona com **modprobe i2c-dev** após cada boot. Isto será atualizado assim que for corrigido.

## RTC

O RTC embutido no reTerminal é baseado no **NXP Semiconductors PCF8563T** e utiliza uma **bateria CR1220** para alimentá-lo. Possui baixa corrente de backup; típico 0,25μA em VDD = 3,0 V e temperatura = 25°C. Pode ser usado para projetos onde você precisa implementar funções de controle de tempo.

**Nota:** Uma bateria CR1220 já vem instalada de fábrica.

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/RTC_sch.jpg" alt="pir" width="800" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/ReTerminal/RTC_sch.jpg) para uma imagem em resolução mais alta

### Uso

Digite o seguinte comando para obter as informações de data e hora a partir do RTC

```sh
sudo hwclock
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hwclock.png" alt="pir" width="370" height="auto"/></p>

#### Uso na imagem Buildroot

- Primeiro digite **su -** para habilitar a conta **root**
- Depois digite **hwclock**

#### Uso na imagem Yocto

- **sudo** não é necessário porque já iniciamos a sessão como **root**
- Basta digitar **hwclock**

## Sensor de Luz

O reTerminal está equipado com um sensor de luz digital **Levelek LTR-303ALS-01** e ele é conectado à **interface FPC de 6 pinos**. Pode ser usado para detectar os níveis de luz no ambiente e também pode ser usado para o **ajuste automático de brilho da luz de fundo do LCD** de acordo com os níveis de luz ao redor.

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light_sch.jpg" alt="pir" width="700" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/ReTerminal/light_sch.jpg) para uma imagem em resolução mais alta

### Uso

- **Etapa 1.** Habilite privilégios de conta root

```sh
sudo -i
```

- **Etapa 2.** Entre no seguinte diretório

```sh
cd /sys/bus/iio/devices/iio:device0
```

- **Etapa 3.** Digite o seguinte para obter o valor de intensidade de luz em **Lux**

```sh
cat in_illuminance_input 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light-lux.png" alt="pir" width="900" height="auto"/></p>

O sensor de luz está conectado ao reTerminal via **protocolo de comunicação I2C**. Portanto, você pode facilmente conectar outros dispositivos I2C a esta **interface FPC de 6 pinos**, se preferir. O diagrama de conexão é o seguinte

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light-i2c.png" alt="pir" width="1000" height="auto"/></p>

Depois disso, siga as etapas do tópico anterior sobre como usar I2C

#### Uso na imagem Buildroot

- Substitua **sudo -i** por **su -** para habilitar privilégios de conta **root**
- Siga as outras etapas mencionadas acima

#### Uso na imagem Yocto

- **sudo -i** não é necessário porque já fazemos login como **root**
- Siga as outras etapas mencionadas acima

## Acelerômetro

O **acelerômetro de 3 eixos STMicroelectronics LIS3DHTR** integrado pode ser usado para realizar muitas aplicações diferentes com o reTerminal. Você pode usá‑lo para alterar automaticamente a orientação da tela à medida que gira o reTerminal e muito mais.

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/accel_sch.jpg" alt="pir" width="600" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/ReTerminal/accel_sch.jpg) para uma imagem em resolução mais alta

### Uso

- **Etapa 1.** Abra a ferramenta evtest

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest.png" alt="pir" width="680" height="auto"/></p>

- **Etapa 2.** Digite **1** e você verá os valores de aceleração X,Y,Z

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/accel-test.png" alt="pir" width="700" height="auto"/></p>

#### Uso na imagem Buildroot

- Você não precisa instalar a **ferramenta evtest** porque ela já está instalada
- Antes de executar **evtest** você precisa mudar para **root** digitando **su -**
- Siga as outras etapas mencionadas acima

#### Uso na imagem Yocto

- Você não precisa instalar a **ferramenta evtest** porque ela já está instalada
- Siga as outras etapas mencionadas acima

## Buzzer

Há um buzzer embutido no reTerminal. Ele pode ser controlado por software. Este buzzer pode ser usado como um indicador em diferentes aplicações.

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buzzer_sch.jpg" alt="pir" width="500" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/ReTerminal/buzzer_sch.jpg) para uma imagem em resolução mais alta

### Uso

- **Etapa 1.** Habilite privilégios de conta root

```sh
sudo -i
```

- **Etapa 2.** Entre no seguinte diretório

```sh
cd /sys/class/leds/usr_buzzer
```

- **Etapa 3.** Ligue o buzzer

```sh
echo 1 > brightness
```

- **Etapa 4.** Desligue o buzzer

```sh
echo 0 > brightness
```

#### Uso na imagem Buildroot

- Substitua **sudo -i** por **su -** para habilitar privilégios de conta **root**
- Siga as outras etapas mencionadas acima

#### Uso na imagem Yocto

- **sudo -i** não é necessário porque já fazemos login como **root**
- Siga as outras etapas como mencionado

## Portas USB 2.0

O Raspberry Pi CM4 já possui um **Hub USB 2.0 onboard**. Este Hub é estendido para **2 portas USB 2.0** no reTerminal como **USB HOST**

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/ReTerminal/USB_sch.jpg) para uma imagem em resolução mais alta

### Uso

- **Etapa 1.** Conecte um dispositivo USB a uma das portas USB 2.0 no reTerminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-port.jpg" alt="pir" width="130" height="auto"/></p>

- **Etapa 2.** Liste o dispositivo USB conectado digitando o seguinte em uma janela de terminal

```sh
lsusb
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-connected.png" alt="pir" width="850" height="auto"/></p>

- **Etapa 3.** Digite o seguinte para obter mais informações sobre o dispositivo USB conectado, como tamanho do drive, partições, ponto de montagem, etc.

```sh
lsblk
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-mount.png" alt="pir" width="680" height="auto"/></p>

- **Etapa 4.** Acesse o dispositivo USB conectado e liste todos os arquivos dentro

```sh
cd /media/pi/NEW VOLUME
ls -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-access.png" alt="pir" width="730" height="auto"/></p>

**Nota:** O ponto de montagem mudará de dispositivo USB para dispositivo USB

## Slot para Cartão Micro‑SD

O reTerminal é equipado com um **slot para cartão micro‑sd**. Isso é útil quando você deseja **instalar o sistema operacional** em um cartão micro‑SD, enquanto o **módulo CM4 sem eMMC** é usado. É recomendado usar um cartão com no mínimo 8GB. Siga [este link](https://wiki.seeedstudio.com/pt-br/reTerminal/#flash-to-micro-sd-card-cm4-non-emmc-version) para saber mais!

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/SD_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/ReTerminal/SD_sch.jpg) para uma imagem em resolução mais alta

## Porta Micro HDMI

Há uma porta micro HDMI no reTerminal e você pode usá‑la para conectar a monitores HDMI por meio de um **cabo micro HDMI para HDMI padrão**. Ela suporta até resolução 4K a 60fps.

### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HDMI_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/ReTerminal/HDMI_sch.jpg) para uma imagem em resolução mais alta

### Uso

- **Etapa 1.** Conecte um monitor HDMI à porta micro‑HDMI do reTerminal usando um cabo micro‑HDMI para HDMI padrão

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HDMI-port.jpg" alt="pir" width="250" height="auto"/></p>

- **Etapa 2.** Ligue o reTerminal e você verá a saída da interface gráfica tanto no LCD do reTerminal quanto no monitor HDMI conectado

**Nota:** Se você conectar um monitor enquanto o reTerminal estiver ligado, será necessário digitar **sudo service lightdm restart** para exibir a interface gráfica no monitor HDMI conectado.

- **Etapa 3.** Digite o seguinte em uma janela de terminal para instalar o utilitário **Screen Configuration**

```sh
sudo apt install arandr
```

- **Etapa 4.** Clique no ícone do Raspberry Pi no canto superior esquerdo e navegue até `Preferences > Screen Configuration`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-config-setup.png" alt="pir" width="1000" height="auto"/></p>

- **Etapa 5.** Dentro da janela **Screen Layout Editor**, navegue até `Configure > Screens > HDMI-1 > Resolution` e selecione a resolução do monitor HDMI conectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-drag.png" alt="pir" width="1000" height="auto"/></p>

**Nota:** Você também pode alterar a **frequência** e a **orientação** do monitor

- **Etapa 6.** Arraste as duas caixas para alterar o arranjo dos monitores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-setting.png" alt="pir" width="1000" height="auto"/></p>

- **Etapa 7.** Clique na **marca de verificação** para aplicar as configurações

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-apply.png" alt="pir" width="1000" height="auto"/></p>

#### Uso na imagem Buildroot/ Yocto

- Hot-plug não funciona no momento. Isso será atualizado assim que for corrigido.
- Portanto, você precisa primeiro conectar ao monitor HDMI e então ligar o reTerminal
- Observe que o pacote **arandr** não está disponível para a imagem de sistema Buildroot

## Porta USB Tipo‑C

A **porta USB Tipo‑C** no reTerminal pode ser usada para **alimentar o reTerminal usando 5V/4A (recomendado)**. No entanto, ela também pode ser usada para atuar como um **dispositivo USB**, onde você pode conectar o reTerminal a um **PC HOST** e o reTerminal atuará como um **dispositivo de armazenamento em massa USB**. Aqui, você poderá acessar a **eMMC onboard** do reTerminal via um PC e gravar um **sistema operacional** na eMMC. Clique [aqui](https://wiki.seeedstudio.com/pt-br/reTerminal/#flash-to-emmc-cm4-emmc-version) para saber mais!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/type-c.png" alt="pir" width="130" height="auto"/></p>

## Suporte de Câmera Padrão (1/4 polegada)

O reTerminal possui um **suporte de câmera padrão com diâmetro de 1/4 de polegada**. Assim, você pode conectar o reTerminal a um **tripé padrão**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tripod.png" alt="pir" width="450" height="auto"/></p>

## Biblioteca Python para reTerminal

Preparamos uma **biblioteca Python** que permite usar o hardware onboard no reTerminal. Atualmente o **acelerômetro, LEDs de usuário, botões de usuário e buzzer** podem ser acessados usando esta biblioteca Python.

### Instalação

Abra uma janela de terminal no reTerminal e execute o seguinte

```sh
sudo pip3 install seeed-python-reterminal
```

**Nota:** O código-fonte pode ser encontrado [aqui](https://github.com/Seeed-Studio/Seeed_Python_ReTerminal)

### Uso

- **Passo 1.** Crie um novo **arquivo python** e abra usando o **editor de texto nano**

```sh
nano test.py
```

- **Passo 2.** Insira os códigos python

- **Passo 3.** Pressione **CTRL + X** e depois pressione **Y** para salvar o arquivo

- **Passo 4.** Finalmente execute o arquivo

```sh
python3 test.py
```

Você pode seguir os passos acima para testar as funções de hardware abaixo. Os códigos Python incluídos em cada seção podem ser inseridos diretamente no arquivo test.py e depois executar o arquivo

#### Teste dos LEDs do Usuário

```python
import seeed_python_reterminal.core as rt
import time

print("STA ON, USR OFF")
rt.sta_led = True
rt.usr_led = False
time.sleep(1)

print("STA OFF, USR ON")
rt.sta_led = False
rt.usr_led = True
time.sleep(1)

print("STA RED, USR OFF")
rt.sta_led_green = False
rt.sta_led_red = True
rt.usr_led = False
time.sleep(1)

print("STA OFF, USR OFF")
rt.sta_led = False
rt.usr_led = False
```

#### Teste do Buzzer

```python
import seeed_python_reterminal.core as rt
import time

print("BUZZER ON")
rt.buzzer = True
time.sleep(1)

print("BUZZER OFF")
rt.buzzer = False
```

#### Teste dos Botões do Usuário

```python
import seeed_python_reterminal.core as rt
import seeed_python_reterminal.button as rt_btn


device = rt.get_button_device()
while True:
    for event in device.read_loop():
        buttonEvent = rt_btn.ButtonEvent(event)
        if buttonEvent.name != None:
            print(f"name={str(buttonEvent.name)} value={buttonEvent.value}")
```

#### Teste do Acelerômetro

```python
import seeed_python_reterminal.core as rt
import seeed_python_reterminal.acceleration as rt_accel


device = rt.get_acceleration_device()
while True:
    for event in device.read_loop():
        accelEvent = rt_accel.AccelerationEvent(event)
        if accelEvent.name != None:
            print(f"name={str(accelEvent.name)} value={accelEvent.value}")
```

#### Teste do Acelerômetro e dos Botões

```python
import asyncio
import seeed_python_reterminal.core as rt
import seeed_python_reterminal.acceleration as rt_accel
import seeed_python_reterminal.button as rt_btn


async def accel_coroutine(device):
    async for event in device.async_read_loop():
        accelEvent = rt_accel.AccelerationEvent(event)
        if accelEvent.name != None:
            print(f"accel name={str(accelEvent.name)} value={accelEvent.value}")


async def btn_coroutine(device):
    async for event in device.async_read_loop():
        buttonEvent = rt_btn.ButtonEvent(event)
        if buttonEvent.name != None:
            print(f"name={str(buttonEvent.name)} value={buttonEvent.value}")


accel_device = rt.get_acceleration_device()
btn_device = rt.get_button_device()

asyncio.ensure_future(accel_coroutine(accel_device))
asyncio.ensure_future(btn_coroutine(btn_device))

loop = asyncio.get_event_loop()
loop.run_forever()
```

#### Uso na imagem Buildroot

- Esta biblioteca será adicionada posteriormente à imagem Buildroot
- Primeiro digite **su -** para habilitar a conta root
- Depois digite **pip3 install seeed-python-reterminal**
- use **vi** como editor de texto ao criar os arquivos Python
- A demonstração Accel + button tem um problema. Isto será atualizado assim que for corrigido

#### Uso na imagem Yocto

- Embora o Python esteja instalado, o pip não está. Posteriormente iremos empacotar esta biblioteca dentro desta imagem de sistema

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
