---
description: SeeedStudio BeagleBone® Green
title: SeeedStudio BeagleBone® Green
keywords:
  - Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BeagleBone_Green
sku: 102010027
last_update:
  date: 9/2/2026
  author: jianjing Huang
createdAt: '2023-01-10'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/pt-br/BeagleBone_Green/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/cover.jpg" /></div>

Seeed Studio BeagleBone® Green é uma plataforma de desenvolvimento de baixo custo, open-source e suportada pela comunidade, voltada para desenvolvedores e entusiastas. É um esforço conjunto da [BeagleBoard.org](https://beagleboard.org/) e da Seeed Studio. Baseia-se no design clássico de hardware open-source da [BeagleBone® Black](https://beagleboard.org/black) e foi desenvolvida nesta versão diferenciada. A Seeed Studio BeagleBone® Green inclui dois conectores Grove, tornando mais fácil a conexão com a grande família de sensores Grove. A interface HDMI on-board foi removida para abrir espaço para esses conectores Grove.

Inicialize o Linux em menos de 10 segundos e comece o desenvolvimento em menos de 5 minutos usando apenas um único cabo USB.


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-p-2504.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.amazon.com/dp/B01AIC5AP4" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre na amazon.com </font></span></strong>
    </a>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.amazon.com/dp/B01AIC5AP4" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/amaon.png"  width="300" height="48"  border="0"/></a></p>

## Recursos

* **Totalmente compatível com BeagleBone® Black**
* **Processador: AM335x 1GHz ARMR Cortex-A8**
  * 512MB DDR3 RAM
  * 4GB de armazenamento flash eMMC on-board de 8 bits
  * Acelerador de gráficos 3D
  * Acelerador de ponto flutuante NEON
  * 2x microcontroladores PRU de 32 bits
* **Conectividade**
  * Cliente USB para alimentação e comunicações
  * Host USB
  * Ethernet
  * 2x cabeçalhos de 46 pinos
  * 2x conectores Grove (I2C e UART)
* **Compatibilidade de software**
  * Debian
  * Android
  * Ubuntu
  * Cloud9 IDE em Node.js com biblioteca BoneScript
  * e muito mais

## Especificação

|Item|Valor|
|----|------|
|Processador| AM335x 1GHz ARMR Cortex-A8|
|RAM| 512MB DDR3|
|Armazenamento Flash on-board |4GB eMMC|
|CPU Suporta |Acelerador de ponto flutuante NEON e gráficos 3D|
|Micro USB Suporta |alimentação e comunicações|
|USB |Host 1|
|Conectores Grove |2 (Um I2C e Um UART) |
|GPIO |2 x cabeçalhos de 46 pinos|
|Ethernet |1|
|Temperatura de operação |0 ~ 75 |

## Ideias de aplicação

* Internet das Coisas
* Casa inteligente
* Industrial
* Automação e Controle de Processos
* Interface Homem-Máquina
* Hub de sensores
* Robô

Aqui estão alguns projetos divertidos para sua referência.

|Central Residencial|Lâmpada Retrô|Acionar um Motor|
|---------------|-----|--------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project3.jpg" /></div>|
|[FAÇA AGORA MESMO!](https://www.instructables.com/id/Home-Control-Center-Using-BeagleBone-Green-Wireles/)|[FAÇA AGORA MESMO!](https://www.instructables.com/id/DIY-a-Retro-Wooden-Lamp-with-BBG/)|[FAÇA AGORA MESMO!](https://www.instructables.com/id/A-BeagleBone-Tutorial-Getting-Started-With-Motor-B/)|

|Case Acrílico Seeed Studio BeagleBone® Green|Controle de GPIO|Luz Inteligente|
|---------------|-----|--------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project5.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project6.png" /></div>|
|[FAÇA AGORA MESMO!](https://www.instructables.com/id/5-Design-of-Laser-Cut-Cases-for-5-Popular-Platform/)|[FAÇA AGORA MESMO!](https://community.seeedstudio.com/How-to-use-the-Grove-UART-port-as-a-GPIO-on-BBG-p-365.html)|[FAÇA AGORA MESMO!](https://community.seeedstudio.com/Smart-Light-Demo-with-BBG-%26amp%3B-BBG-Start-Kit(HA)-p-366.html)|

## Visão geral de hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/10201002703.jpg" /></div>

* **USB Host** - Host USB
* **Alimentação DC e USB Client** - Alimenta a placa e atua como cliente
* **LEDs**
  * **D2** é configurado na inicialização para piscar em um padrão de batimento cardíaco
  * **D3** é configurado na inicialização para acender durante acessos ao cartão microSD
  * **D4** é configurado na inicialização para acender durante a atividade da CPU
  * **D5** é configurado na inicialização para acender durante acessos à eMMC
* **Botão de boot**
  * Quando houver um cartão SD inserido, o sistema irá inicializar primeiro a partir do cartão SD; se você quiser inicializar a partir da eMMC, pressione este botão e então ligue a alimentação.
  * Use como um botão normal após a inicialização, conectado ao **GPIO_72**
* **Interface Grove I2C** - Conectada ao **I2C2**
* **Interface Grove Uart** - Conectada ao **UART2**
* **Depuração serial** - Conecte ao **UART0**, PIN1~PIN6: GND, NC, NC, RX, TX, NC, observe que o pino 1 fica próximo ao USB.

**Mapa de pinos**

Cada pino de E/S digital possui 8 modos diferentes que podem ser selecionados, incluindo GPIO.

**65 possíveis E/S digitais**

:::note
    No modo GPIO, cada E/S digital pode gerar interrupções.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_IO.png" /></div>

**PWMs e temporizadores**

:::note
Até 8 pinos de E/S digitais podem ser configurados com moduladores de largura de pulso (PWM) para produzir sinais para controlar motores ou criar níveis de tensão pseudoanalógicos, sem consumir ciclos extras da CPU.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_TIMER.png" /></div>

**Entradas analógicas**

:::note
Certifique-se de não aplicar mais de 1,8V aos pinos de entrada analógica. Este é um conversor analógico-digital de 12 bits com 8 canais, dos quais 7 estão disponíveis nos cabeçalhos.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_ANALOG.png" /></div>

**UART**

:::note
Há um cabeçalho dedicado para acessar os pinos UART0 e conectar um cabo de depuração. Cinco portas seriais adicionais são disponibilizadas nos cabeçalhos de expansão, mas uma delas possui apenas uma direção exposta nos cabeçalhos.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_UART.png" /></div>

**I2C**

:::note
O primeiro barramento I2C é utilizado para leitura das EEPROMs nas placas de expansão cape e não pode ser usado para outras operações de E/S digital sem interferir nessa função, mas você ainda pode usá-lo para adicionar outros dispositivos I2C em endereços disponíveis. O segundo barramento I2C está disponível para você configurar e usar.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_I2C.png" /></div>

**SPI**

:::note
    Para enviar dados rapidamente, você pode considerar o uso de uma das portas SPI.
:::

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_SPI.png)

## Desenho mecânico

![](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/BBG_drawing_1.png)

![](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/BBG_drawing_2.png)

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=26887ef4-fe20-4d82-b4dc-25f58774d64f" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>

## Introdução

:::note
Este capítulo foi escrito no Win10. Os passos são semelhantes para outros sistemas operacionais.
:::

**PASSO 1. Conecte sua Seeed Studio BeagleBone® Green via USB**

Use o cabo micro USB fornecido para conectar sua Seeed Studio BeagleBone® Green ao computador. Isso irá tanto alimentar a placa quanto fornecer uma interface de desenvolvimento. A Seeed Studio BeagleBone® Green irá inicializar o Linux a partir da eMMC on-board de 2GB ou 4GB.

A Seeed Studio BeagleBone® Green irá operar como uma unidade flash, fornecendo a você uma cópia local da documentação e dos drivers. Observe que esta interface não pode ser usada para reconfigurar o cartão microSD com uma nova imagem, mas pode ser usada para atualizar os parâmetros de boot usando o arquivo uEnv.txt.

Você verá o LED PWR aceso continuamente. Em até 10 segundos, você deverá ver os outros LEDs piscando em suas configurações padrão.

* D2 é configurado na inicialização para piscar em um padrão de batimento cardíaco
* D3 é configurado na inicialização para acender durante acessos ao cartão microSD
* D4 é configurado na inicialização para acender durante a atividade da CPU
* D5 é configurado na inicialização para acender durante acessos à eMMC

**PASSO 2. Instale os drivers**

Instale os drivers para o seu sistema operacional para obter acesso de rede via USB à sua Beagle. Drivers adicionais fornecem acesso serial à sua placa.

|Sistema Operacional | Drivers USB | Comentários |
|---------------------|---------|------------|
|Windows (64-bit) | [64-bit installer](https://beagleboard.org/static/Drivers/Windows/BONE_D64.exe)  | |
|Windows (32-bit) | [32-bit installer](https://beagleboard.org/static/Drivers/Windows/BONE_DRV.exe)||
|Mac OS X|[Network](https://beagleboard.org/static/Drivers/MacOSX/RNDIS/HoRNDIS.pkg) [Serial](https://beagleboard.org/static/Drivers/MacOSX/FTDI/EnergiaFTDIDrivers2.2.18.pkg) | Instale ambos os conjuntos de drivers.|
|Linux|[mkudevrule.sh](https://beagleboard.org/static/Drivers/Linux/FTDI/mkudevrule.sh)|A instalação de drivers não é necessária, mas você pode achar algumas regras udev úteis.|

:::note
    Para o sistema Windows, observe que:

* O aviso de Certificação de Driver do Windows pode aparecer duas ou três vezes. Clique em "Ignore", "Install" ou "Run"
* Para verificar se você está executando o Windows 32 ou 64-bit veja [isto](https://support.microsoft.com/kb/827218).
* Em sistemas sem a versão mais recente do service release, você pode receber um erro (0xc000007b). Nesse caso, por favor [instale](https://www.microsoft.com/en-us/download/confirmation.aspx?id=13523) e tente novamente:
* Talvez seja necessário reiniciar o Windows.
* Esses drivers foram testados e funcionam até o Windows 10
:::

:::note
Informações adicionais e drivers FTDI USB para serial/JTAG estão disponíveis em [https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm).
:::

:::note
Informações adicionais e drivers USB para Ethernet virtual estão disponíveis em [https://www.linux-usb.org/gadget/](https://www.linux-usb.org/gadget/) e [https://joshuawise.com/horndis](https://joshuawise.com/horndis).
:::

**PASSO 3. Acesse seu Beagle**

Usando o Chrome ou o Firefox (Internet Explorer NÃO funciona), acesse o servidor web em execução na sua placa. Ele carregará uma apresentação mostrando as capacidades da placa. Use as setas do teclado para navegar pela apresentação.

Clique em [http://192.168.7.2](http://192.168.7.2) para iniciar o seu Seeed Studio BeagleBone® Green.
Imagens de software mais antigas exigem que você EJETE a unidade BeagleBone® para iniciar a rede. Com a imagem de software mais recente, essa etapa não é mais necessária.

[![Click to view larger image](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/launch.png)](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/launch.png)

**PASSO 4. Cloud9 IDE**

Para começar a editar programas que estão na sua placa, você pode usar o Cloud9 IDE clicando

[![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/cloud9.png)](http://192.168.7.2:3000/ide.html)

## Atualizar para o software mais recente

Você precisa atualizar a placa para o software mais recente para manter um melhor desempenho; aqui mostraremos como fazer isso passo a passo.

**PASSO 1. Baixe a imagem de software mais recente**

Antes de tudo, você precisa baixar a imagem adequada aqui.

[![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/down_latest_image.png)](https://beagleboard.org/latest-images)

:::note
Devido ao tamanho, esse download pode levar cerca de 30 minutos ou mais.
:::

O arquivo que você baixar terá a extensão **.img.xz**. Esta é uma imagem comprimida, setor a setor, do cartão SD.

**PASSO 2. Instale o utilitário de compactação e descompacte a imagem**

Baixe e instale o [7-zip.](http://www.7-zip.org/download.html)

:::note
    Escolha uma versão adequada para o seu sistema.
:::

Use o 7-zip para descompactar o arquivo **.img** do cartão SD

**PASSO 3. Instale o utilitário de gravação do cartão SD**

Baixe e instale o [Image Writer for Windows](https://sourceforge.net/projects/win32diskimager/files/latest/download). Certifique-se de baixar a distribuição binária.

**PASSO 4. Grave a imagem no seu cartão SD**

Primeiro, você precisa de um adaptador SD para conectar seu cartão microSD ao computador. Em seguida, use o software Image Writer for Windows para gravar a imagem descompactada no seu cartão SD.

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/win32_disk_image.png)

Clique no botão **Write**, então o processo será iniciado.

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/win32_disk_image_process.png)

:::note

* Você pode ver um aviso sobre danificar seu dispositivo. Não há problema em aceitar, desde que você esteja apontando para o seu cartão SD para gravação.
* Você não deve ter o seu BeagleBone® conectado ao computador neste momento.
* Esse processo pode levar até 10 minutos.
:::

**PASSO 5. Inicialize sua placa a partir do cartão SD**

Insira o cartão SD na sua placa (primeiro desligada). Em seguida, a placa será inicializada a partir do cartão SD.

:::note
Se você não precisar gravar a imagem na eMMC integrada, não precisa ler o restante deste capítulo. Caso contrário, por favor continue.
:::

Se você quiser gravar a imagem na eMMC integrada, precisa acessar a placa e modificar um arquivo.

Em **/boot/uEnv.txt**:

    ##enable BeagleBone® Black: eMMC Flasher:
    #cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh
Altere para:

    ##enable BeagleBone® Black: eMMC Flasher:
    cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh

Então você verá os 4 LEDs de usuário acesos como abaixo

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/flashing.gif)

:::note
Se você não encontrar a luz de rastreamento acima, pressione o botão RESET para reiniciar a placa.
:::

Quando a gravação estiver completa, todos os 4 LEDs USRx estarão **apagados**. As imagens mais recentes do flasher Debian desligam automaticamente a placa ao concluir. Isso pode levar até **10 minutos**. Desligue a placa, remova o cartão SD e ligue novamente para concluir.

## Grove para Seeed Studio BeagleBone® Green

Grove é um sistema modular de prototipagem com conector padronizado. Grove adota uma abordagem de blocos de montar para montar eletrônicos. Em comparação com o sistema baseado em jumpers ou solda, é mais fácil conectar, experimentar e construir e simplifica o sistema de aprendizado, mas não a ponto de ficar simplório. Alguns dos outros sistemas de prototipagem por aí reduzem o nível para blocos de montar. Há coisas boas a serem aprendidas dessa forma, mas o sistema Grove permite que você construa sistemas reais. Ele exige algum aprendizado e conhecimento para conectar as coisas.

Abaixo estão listados os módulos Grove que funcionam bem com o Seeed Studio BeagleBone® Green.

|SKU        |Name|Interface|link|
|-----------|-----|-----|----------|
|101020054  |Grove - Acelerômetro Digital de 3 Eixos (+16g)     | I2C| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B116g%29-p-1156.html)|
|101020071  |Grove - Acelerômetro Digital de 3 Eixos (+400g)    | I2C| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B1400g%29-p-1897.html)|
|101020034  |Grove - Bússola Digital de 3 Eixos                 | I2C| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html)|
|101020050  |Grove - Giroscópio Digital de 3 Eixos                    | Analog| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html)|
|101020081 |Grove - Acelerômetro e Bússola de 6 Eixos v2.0      | I2C| [link](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer&Compass-v2.0-p-2476.html)|
|101020072 |Grove - Sensor Barométrico (BMP180)              | I2C| [link](https://www.seeedstudio.com/Grove-Barometer-Sensor-%28BMP180%29-p-1840.html)|
|104030010 |Grove - LED Azul                               | I/O| [link](https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html)|
|101020003 |Grove - Botão                                 |I/O| [link](https://www.seeedstudio.com/Grove-Button-p-766.html)|
|111020000 |Grove - Botão (P)                             |I/O| [link](https://www.seeedstudio.com/Grove-Button%28P%29-p-1243.html)|
|107020000 |Grove - Buzzer                                 |I/O| [link](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|
|104030006 |Grove - LED RGB Encadeável                     |I2C| [link](https://www.seeedstudio.com/Grove-Chainable-RGB-LED-p-850.html)|
|101020030 |Grove - Sensor de Luz Digital                 |I2C| [link](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|
|103020024 |Grove - Sensor de Frequência Cardíaca de Presilha de Dedo         |I2C| [link](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-p-2425.html)|
|101020082 |Grove - Sensor de Frequência Cardíaca de Presilha de Dedo com Case |I2C|[link](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-with-shell-p-2420.html)|
|113020003 |Grove - GPS                         |UART| [link](https://www.seeedstudio.com/Grove-GPS-p-959.html)|
|104030007 |Grove - LED Verde |I/O| [link](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html)|
|103020013 |Grove - I2C ADC |I2C| [link](https://wiki.seeedstudio.com/pt-br/Grove-I2C_ADC/)|
|103020006 |Grove - I2C Hub |I2C| [link](https://www.seeedstudio.com/Grove-I2C-Hub-p-851.html)|
|101020079 |Grove - IMU 10DOF |I2C| [link](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)|
|101020080 |Grove - IMU 9DOF v2.0 |I2C| [link](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)|
|101020040 |Grove - Interruptor de Distância IR |I/O| [link](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html)|
|104030011 |Grove - Display OLED 0,96'' |I2C| [link](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|
|104030008 |Grove - Display OLED 1,12'' |I2C| [link](https://www.seeedstudio.com/Grove-OLED-Display-0.96%22-p-781.html)|
|104030005 |Grove - LED Vermelho |I/O| [link](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|
|103020005 |Grove - Relé |I/O| [link](https://www.seeedstudio.com/Grove-Relay-p-769.html)|
|316010005 |Grove - Servo |I/O| [link](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|
|101020023 |Grove - Sensor de Som |Analog| [link](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|
|101020004 |Grove - Interruptor (P) |I/O| [link](https://www.seeedstudio.com/Grove-Switch%28P%29-p-1252.html)|
|101020015 |Grove - Sensor de Temperatura |Analog| [link](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|
|101020019 |Grove - Sensor de Temperatura e Umidade Pro |Analog| [link](https://www.seeedstudio.com/Grove-Temperature&Humidity-Sensor-Pro-p-838.html)|

## Cape para Seeed Studio BeagleBone® Green

Você vai precisar de alguma placa de expansão quando iniciar um projeto. Já existem muitos capes para o Seeed Studio BeagleBone® Green; eles incluem display LCD, driver de motor, bem como expansão HDMI etc. Abaixo estão alguns dos recomendados.

|Grove Cape| Motor Bridge Cape|HDMI Cape|
|------------|----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product3.jpg)|
|[GET ONE NOW!](https://www.seeedstudio.com/Grove-Cape-for-BeagleBone-Series-p-1718.html)|[GET ONE NOW!](https://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)|[GET ONE NOW!](https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-HDMI-Cape-p-2570.html)|

|Grove Cape| LCD de 5 polegadas|LCD de 7 polegadas|
|------------|----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product6.jpg)|
|[Adquira agora!](https://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)|[Adquira agora!](https://www.seeedstudio.com/5-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2642.html)|[Adquira agora!](https://www.seeedstudio.com/7-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2643.html)|

## FAQ

**1. Qual é a diferença entre o Seeed Studio BeagleBone® Green 1 e o Seeed Studio BeagleBone® Green 2?**

 Atualizamos a eMMC no Seeed Studio Beaglebone® Green em 2016. Portanto, o firmware anterior para o Seeed Studio BeagleBone® Green 1 não funciona no Seeed Studio BeagleBone® Green 2, mas o novo firmware funciona tanto no Seeed Studio BeagleBone® Green 1 quanto no Seeed Studio BeagleBone® Green 2.

![](https://files.seeedstudio.com/wiki/BeagleBone_Green/bbg12.png)

 **2. Às vezes, a porta de rede do Seeed Studio BeagleBone® Green não funciona e é necessário reiniciar para voltar a funcionar. Ocasionalmente isso acontece.**

Substitua por uma fonte de alimentação estável e tente novamente. Normalmente, o adaptador de energia USB de telefone celular é mais estável do que a USB do computador. Ou você pode remover o capacitor C162.

![](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/Capatictor.png)

:::note
O BeagleBone Green foi revisado em 2021, e o capacitor C162 mencionado acima não está mais presente nas placas atualizadas. Este FAQ se aplica apenas às versões do BeagleBone Green lançadas antes de 2021.
:::

**3. Qual é a faixa de temperatura de operação do Seeed Studio BeagleBone® Green?**

O BeagleBone® Green funciona na faixa de temperatura de 0 a 75 graus Celsius.

## Referências

Há muitas referências para ajudá-lo a obter mais informações sobre a placa.

* [Página principal do BeagleBoard](https://beagleboard.org/)
* [Informações do Seeed Studio BeagleBone® Green na página do BeagleBoard](https://beagleboard.org/green)
* [Introdução ao BeagleBoard](https://beagleboard.org/getting-started)
* [Solução de problemas](https://beagleboard.org/getting-started#troubleshooting)
* [Documentação de hardware](https://beagleboard.org/getting-started#hardware)
* [Projetos do BeagleBoard](https://beagleboard.org/project)
* [Certificação CE do Seeed Studio BeagleBone® Green](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/CE.zip)
* [Certificação FCC do Seeed Studio BeagleBone® Green](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/FCC.zip)

## Visualizador online de esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BeagleBone_Green_v1c.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **[PDF]** [Seeed Studio BeagleBone® Green SRM(v1a)](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BBG_SRM_V1a_20151009.pdf)
* **[PDF]** [Seeed Studio BeagleBone® Green SRM(v3)](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BBG_SRM_V3_20150804.pdf)
* **[PDF]** [Esquemáticos do Seeed Studio BeagleBone® Green v1.1](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BeagleBone_Green_REV1.1_SCH.pdf)
* **[ZIP]** [Esquemáticos do Seeed Studio BeagleBone® Green v1.1](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BeagleBone_Green_REV1.1_SCH.zip)
* **[PDF]** [Esquemáticos do Seeed Studio BeagleBone® Green v1.2](https://files.seeedstudio.com/products/102010027/Res/BeagleBone_Green_REV1.2_SCH_240816.pdf)
* **[ZIP]** [Esquemáticos do Seeed Studio BeagleBone® Green v1.2](https://files.seeedstudio.com/products/102010027/Res/202003277_BeagleBone_Green_REV1.2.zip)
* **[PDF]** [Esquemáticos do Seeed Studio BeagleBone® Green v1](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BEAGLEBONE_GREEN_V1.pdf)
* **[Zip]** [Esquemáticos do Seeed Studio BeagleBone® Green (OrCAD) v1c](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BeagleBone_Green_v1c.zip)
* **[RAR]** [Esquemáticos do Seeed Studio BeagleBone® Green (OrCAD)](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BEAGLEBONE_GREEN_V1_166%28sch%29.rar)
* **[RAR]** [PCB do Seeed Studio BeagleBone® Green (OrCAD)](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BeagleBone_Green_v1.166%28board%29.rar)
* **[Zip]** [AM335X Datasheet](https://files.seeedstudio.com/wiki/Bazaar_file/102010027/AM335x.pdf)
* **[3D]** [Modelo 3D do Seeed Studio BeagleBone® Green](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BBG.zip)
* **[PDF]** [Desenho mecânico do Seeed Studio BeagleBone® Green](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BBG-PCBA.pdf)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
