---
description: Primeiros Passos com o SeeedStudio BeagleBone® Green Eco
title: Seeed Studio BeagleBone® Green Eco
keywords:
  - Beagle_Bone_Green_Eco
image: https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/Seeed-Studio-BeagleBoneR-Green-Eco.webp
slug: /getting_started_with_seeedstudio_beaglebone_green_eco
sku: 102111198
last_update:
  date: 9/18/2025
  author: Atom Yang
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_seeedstudio_beaglebone_green_eco/
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/1-102111198-Seeed-Studio-BeagleBoneR-Green-Eco.jpg" /></div>

**O Seeed Studio BeagleBone® Green Eco** é um computador de placa única de nível industrial e código aberto, co-desenvolvido com a BeagleBoard.org® Foundation e alimentado pelo robusto **TI AM3358 SoC**. Esta versão "Eco" é projetada para alta eficiência, incorporando um avançado chip de gerenciamento de energia da TI (TPS6521403) para garantir consumo de energia otimizado. Ele é bem equipado para aplicações exigentes com generosos 16GB de armazenamento eMMC onboard e uma porta Gigabit Ethernet para conectividade de rede em alta velocidade. Para prototipagem de hardware sem complicações, integra dois conectores Grove característicos, oferecendo acesso direto, sem solda, ao extenso ecossistema de sensores e módulos Grove da Seeed.

Inicialize o Linux em menos de 10 segundos e comece o desenvolvimento em menos de 5 minutos com apenas um único cabo USB.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-Eco-p-6540.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos

**Recurso 1: Núcleo Poderoso e Processamento em Tempo Real**

- Integra um processador TI AM3358 1GHz ARM® Cortex-A8, com um coprocessador NEON™ SIMD para processamento acelerado. Também inclui uma Unidade Programável de Tempo Real de núcleo duplo (PRU-ICSS) para controle determinístico e de baixa latência, essencial para automação industrial e robótica.

**Recurso 2: Gerenciamento de Energia Eficiente (Eco-Friendly)**

- Utiliza um avançado PMIC TI TPS6521403 com recursos como modo PFM e escalonamento dinâmico de tensão. Isso otimiza significativamente o consumo de energia, tornando-o ideal para aplicações sensíveis a energia e alimentadas por bateria.

**Recurso 3: 4X Capacidade de Armazenamento e 10X Velocidade de Rede**

- Dá um salto à frente com 16GB de armazenamento eMMC onboard (um aumento de quatro vezes) e atualiza a conectividade com uma porta Gigabit Ethernet, oferecendo até 10 vezes a largura de banda de seu antecessor para comunicação de rede estável e em alta velocidade.

**Recurso 4: Conectividade Rica e Moderna**

- Possui interfaces atualizadas de alta velocidade, incluindo uma porta Gigabit Ethernet e uma moderna porta USB Type-C para alimentação e dados. Para prototipagem rápida, também inclui dois conectores Grove integrados (I2C e UART)Grove - Seeed Studio, permitindo conexão fácil e sem solda ao amplo ecossistema de sensores e atuadores da Seeed Studio.

**Recurso 5: Pronto para Desenvolvimento**

- Vem pré-carregado com uma imagem de software Debian designada pela BeagleBoard.org® Foundation, fornecendo um ambiente Linux robusto e familiar com ferramentas e bibliotecas bem estabelecidas para agilizar seu processo de desenvolvimento.

## Especificações

| Categoria   | Item                  | Seeed Studio BeagleBone® Green Eco                                                                                     | Seeed Studio BeagleBone® Green                                                                 |
|------------|-----------------------|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| Processador  | Núcleo                  | TI AM3358 1GHz ARM® Cortex-A8                                                                                          | TI AM3358 1GHz ARM® Cortex-A8                                                                 |
|            | Aceleradores          | Unidade de ponto flutuante NEON e acelerador gráfico 3D                                                                | Unidade de ponto flutuante NEON e acelerador gráfico 3D                                       |
| Memória     | RAM                   | 512MB DDR3L, 800MHz                                                                                                    | 512MB DDR3L, 800MHz                                                                           |
|            | Armazenamento Flash   | **16GB eMMC (Kingston EMMC16G-WW28)**                                                                                  | 4GB eMMC de 8 bits                                                                            |
|            | EEPROM                | 4KB                                                                                                                    | 4KB                                                                                    |
|            | Armazenamento Externo | Slot para cartão microSD, suporta até 32GB                                                                             | Slot para cartão microSD, suporta até 32GB                                                    |
| Energia      | Gerenciamento de Energia      | **TI TPS6521403 PMIC**                                                                                                     | TI TPS65217C PMIC                                                                             |
|            | Regulador de Tensão   | TI TPS62A01DRL (Conversor Buck 3,3V);TI TPS74501PDRV (LDO Always-On 1,8V);TI TPS2117DRL (Power Mux)            | TI TL5209DR (Regulador LDO 3,3V)                                                              |
|            | Tensão de Entrada     | 5V DC (via USB Type-C)                                                                                                 | 5V DC (via micro USB)                                                                         |
| Interfaces | USB                   | 1x USB 2.0 Host Type-A;1x USB 2.0 Type-C (alimentação e comunicação de dispositivo)                                            | 1x USB client (alimentação e comunicação);1x USB host                                                 |
|            | Rede               | **Gigabit Ethernet (10/100/1000Mbps)**                                                                                 | Ethernet (10/100Mbit)                                                                         |
|            | Headers de Expansão     | 2x headers de 46 pinos                                                                                                  | 2x headers de 46 pinos                                                                         |
|            | Grove                 | 1x I2C, 1x UART2                                                                                                       | 1x I2C, 1x UART2                                                                              |
|            | Botões               | 1x botão Reset;1x botão de Usuário(Boot)                                                                               | 1x botão Reset;1x botão de Usuário(Boot);1x botão Power                                  |
|            | Indicadores            | 1x LED de alimentação, 4x LEDs programáveis pelo usuário                                                                | 4x LEDs (heartbeat, microSD, CPU, eMMC)                                                       |
| Físico   | Dimensões            | 86,4mm x 53,3mm x 18mm                                                                                                 | 86,4mm x 53,3mm x 18mm                                                                        |
|            | Peso                | 40g                                                                                                                    | 45g                                                                                           |
|            | Temperatura de Operação | **-40 ~ 85℃**                                                                                                              | 0 ~ 75℃                                                                                       |

## Ideias de Aplicação

- Internet das Coisas
- Casa Inteligente
- Industrial
- Automação e Controle de Processo
- Interface Homem-Máquina
- Hub de Sensores
- Robô

## Visão Geral de Hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/Hardware-Overview.png" /></div>

**Diagrama de Blocos Funcionais do BeagleBone® Green Eco**
O BeagleBone® Green Eco é construído em torno do processador ARM Cortex-A8 AM335x da Texas Instruments, fornecendo uma base robusta para diversas aplicações embarcadas. Abaixo está o diagrama de blocos funcionais que ilustra os principais componentes e interconexões que compõem a arquitetura de hardware da placa. Este diagrama mostra como o SoC AM335x se conecta à memória, armazenamento, periféricos e várias opções de E/S.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/Functional-Block-Diagram.png" /></div>

**Processador**
O BeagleBone® Green Eco integra o processador Texas Instruments AM335x 1GHz ARM® Cortex-A8, que combina processamento computacional, aceleração gráfica e funcionalidade de controle em tempo real em um único SoC. A arquitetura implementa ARMv7-A com mecanismo NEON™ SIMD e unidade de ponto flutuante VFPv3 para execução eficiente de tarefas computacionais complexas, mantendo a eficiência energética para aplicações embarcadas.
Um recurso distintivo é o Subsistema de Unidade Programável de Tempo Real e Subssistema de Comunicação Industrial (PRU-ICSS), composto por dois núcleos RISC de 32 bits operando independentemente do processador ARM principal. Essas PRUs permitem controle determinístico em tempo real com tempos de resposta abaixo de microssegundos e implementação de protocolos de comunicação industrial especializados. O AM335x oferece suporte a sistemas operacionais de alto nível, incluindo Linux e sistemas operacionais em tempo real por meio do Processor SDK da TI e ambientes de desenvolvimento.

- Processador AM335x 1GHz ARM® Cortex-A8, 15,0mm x 15,0mm, NFBGA (324)
- Coprocessador NEON™ SIMD e unidade de ponto flutuante VFPv3 para processamento acelerado de mídia e sinais
- Acelerador gráfico PowerVR SGX™ com suporte a OpenGL ES 2.0
- PRU-ICSS duplo de 32 bits para comunicações e controle industriais em tempo real
- Suporte para interfaces industriais incluindo EtherCAT, PROFINET e PROFIBUS

**Memória e Armazenamento**
BeagleBone® Green Eco inclui:

- 1x 512MB (4Gb) de RAM DDR3L (Kingston D2516ECMDXGJDI-U) com interface de 16 bits
- 1x 16GB de armazenamento flash eMMC onboard (Kingston EMMC16G-WW28) com interface MMC1 de 8 bits
- 1x EEPROM de 32Kbit (FMD FT24C32A-ELRT) conectada via I2C0
- Slot para cartão MicroSD com interface MMC0 de 4 bits para armazenamento expansível

**Interfaces e Periféricos**
BeagleBone® Green Eco suporta:

- Conectividade Ethernet Gigabit
- 1x porta USB 2.0 Type-C para alimentação e comunicações
- 1x Interface USB 2.0 Host, Type-A

**Conectores/Headers de Expansão para Suportar Capes Específicas de Aplicação**

- 2x headers de 46 pinos
- 1x headers UART0 de 6 pinos
- Dois conectores Grove (um I2C e um UART) para fácil conexão ao ecossistema Grove de sensores e atuadores

**Definição dos Pinos dos Headers**

Cada pino de E/S digital possui 8 modos diferentes que podem ser selecionados, incluindo GPIO.
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/1.png" /></div>

**65 Possíveis E/S Digitais**

:::note
    No modo GPIO, cada E/S digital pode gerar interrupções.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/2.png" /></div>

**PWMs e Temporizadores**

:::note
Até 8 pinos de E/S digitais podem ser configurados com moduladores por largura de pulso (PWM) para produzir sinais para controlar motores ou criar níveis de tensão pseudoanalógicos, sem consumir ciclos extras de CPU.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/3.png" /></div>

**Entradas Analógicas**

:::note
Certifique-se de não aplicar mais de 1,8V aos pinos de entrada analógica. Este é um conversor analógico-digital de 12 bits único com 8 canais, dos quais 7 estão disponíveis nos headers.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/4.png" /></div>

**UART**

:::note
Há um header dedicado para acessar os pinos UART0 e conectar um cabo de depuração. Cinco portas seriais adicionais são disponibilizadas nos headers de expansão, mas uma delas possui apenas uma direção exposta nos headers.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/5.png" /></div>

**I2C**

:::note
O primeiro barramento I2C é utilizado para leitura das EEPROMs nas placas cape de expansão e não pode ser usado para outras operações de E/S digital sem interferir nessa função, mas você ainda pode usá-lo para adicionar outros dispositivos I2C em endereços disponíveis. O segundo barramento I2C está disponível para você configurar e usar.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/6.png" /></div>

**SPI**

:::note
    Para enviar dados rapidamente, você pode considerar o uso de uma das portas SPI.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/7.png" /></div>

## Primeiros Passos

:::note
Este capítulo é escrito sob Win10. Os passos são semelhantes para outros sistemas operacionais.
:::

**PASSO 1. Conecte seu Seeed Studio BeagleBone® Green via USB**

Use o cabo micro USB fornecido para conectar seu Seeed Studio BeagleBone® Green ao computador. Isso irá tanto alimentar a placa quanto fornecer uma interface de desenvolvimento. O Seeed Studio BeagleBone® Green irá inicializar o Linux a partir da eMMC onboard de 2GB ou 4GB.

O Seeed Studio BeagleBone® Green irá operar como um drive flash fornecendo a você uma cópia local da documentação e dos drivers. Observe que esta interface não pode ser usada para reconfigurar o cartão microSD com uma nova imagem, mas pode ser usada para atualizar os parâmetros de boot usando o arquivo uEnv.txt.

Você verá o LED PWR aceso continuamente. Em até 10 segundos, você deverá ver os outros LEDs piscando em suas configurações padrão.

- D2 é configurado na inicialização para piscar em um padrão de batimento cardíaco
- D3 é configurado na inicialização para acender durante acessos ao cartão microSD
- D4 é configurado na inicialização para acender durante a atividade da CPU
- D5 é configurado na inicialização para acender durante acessos à eMMC

**PASSO 2. Instale os Drivers**

Instale os drivers para o seu sistema operacional para lhe dar acesso de rede-sobre-USB ao seu Beagle. Drivers adicionais lhe dão acesso serial à sua placa.

|Sistema Operacional | Drivers USB | Comentários |
|---------------------|---------|------------|
|Windows (64-bit) | [64-bit installer](https://beagleboard.org/static/Drivers/Windows/BONE_D64.exe)  | |
|Windows (32-bit) | [32-bit installer](https://beagleboard.org/static/Drivers/Windows/BONE_DRV.exe)||
|Mac OS X|[Network](https://beagleboard.org/static/Drivers/MacOSX/RNDIS/HoRNDIS.pkg) [Serial](https://beagleboard.org/static/Drivers/MacOSX/FTDI/EnergiaFTDIDrivers2.2.18.pkg) | Instale ambos os conjuntos de drivers.|
|Linux|[mkudevrule.sh](https://beagleboard.org/static/Drivers/Linux/FTDI/mkudevrule.sh)|A instalação de driver não é necessária, mas você pode achar algumas regras udev úteis.|

:::note
    Para sistema Windows, observe que:

- Um aviso de Certificação de Driver do Windows pode aparecer duas ou três vezes. Clique em "Ignore", "Install" ou "Run"
- Para verificar se você está executando Windows 32 ou 64 bits veja [this](https://support.microsoft.com/kb/827218).
- Em sistemas sem a última atualização de serviço, você pode obter um erro (0xc000007b). Nesse caso, por favor [install](https://www.microsoft.com/en-us/download/confirmation.aspx?id=13523) e tente novamente:
- Você pode precisar reiniciar o Windows.
- Esses drivers foram testados e funcionam até o Windows 10

:::

:::note
Informações adicionais e drivers de FTDI USB para serial/JTAG estão disponíveis em [https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm).
:::

:::note
Informações adicionais e drivers de USB para Ethernet virtual estão disponíveis em [https://www.linux-usb.org/gadget/](https://www.linux-usb.org/gadget/) e [https://joshuawise.com/horndis](https://joshuawise.com/horndis).
:::

**PASSO 3. Navegue até o seu Beagle**

Usando o Chrome ou o Firefox (Internet Explorer NÃO irá funcionar), acesse o servidor web em execução na sua placa. Ele carregará uma apresentação mostrando as capacidades da placa. Use as teclas de seta do teclado para navegar pela apresentação.

Clique em [http://192.168.7.2](http://192.168.7.2) para iniciar o seu Seeed Studio BeagleBone® Green.
Imagens de software mais antigas exigem que você EJETE o drive BeagleBone® para iniciar a rede. Com a imagem de software mais recente, essa etapa não é mais necessária.

[![Click to view larger image](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/launch.png)](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/launch.png)

**PASSO 4. Cloud9 IDE**

Para começar a editar programas que residem na sua placa, você pode usar o Cloud9 IDE clicando

[![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/cloud9.png)](http://192.168.7.2:3000/ide.html)

## Atualizar para o software mais recente

Você precisa atualizar a placa para o software mais recente para manter um melhor desempenho, aqui iremos mostrar como fazer isso passo a passo.

**PASSO 1. Baixe a imagem de software mais recente**

Antes de tudo, você precisa baixar a imagem adequada aqui.

[![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/down_latest_image.png)](https://www.beagleboard.org/distros/beaglebone-black-debian-12-11-2025-08-07-iot-vscode-v6-12-x)

:::note
Devido às necessidades de tamanho, este download pode levar cerca de 30 minutos ou mais.
:::

O arquivo que você baixar terá uma extensão **.img.xz**. Esta é uma imagem comprimida, setor a setor, do cartão SD.

**PASSO 2. Instale o utilitário de compactação e descompacte a imagem**

Baixe e instale o [7-zip.](http://www.7-zip.org/download.html)

:::note
    Escolha uma versão adequada para o seu sistema.
:::

Use o 7-zip para descompactar o arquivo **.img** do cartão SD

**PASSO 3. Instale o utilitário de programação do cartão SD**

Baixe e instale o [Image Writer for Windows](https://sourceforge.net/projects/win32diskimager/files/latest/download). Certifique-se de baixar a distribuição binária.

**PASSO 4. Escreva a imagem no seu cartão SD**

Primeiro você precisa de um adaptador SD para conectar seu cartão microSD ao computador. Em seguida, use o software Image Write for Windows para gravar a imagem descompactada no seu cartão SD.

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/win32_disk_image.png)

Clique no botão **Write**, então o processo será iniciado.

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/win32_disk_image_process.png)

:::note

- Você pode ver um aviso sobre danificar seu dispositivo. Isso é aceitável desde que você esteja apontando para o seu cartão SD para gravação.
- Você não deve ter seu BeagleBone® conectado ao computador neste momento.
- Este processo pode levar até 10 minutos.

:::

**PASSO 5. Inicialize sua placa a partir do cartão SD**

Insira o cartão SD na sua placa (primeiro desligada). Em seguida, a placa irá inicializar a partir do cartão SD.

:::note
Se você não precisar gravar a imagem na eMMC onboard, não precisa ler o restante deste capítulo. Caso contrário, por favor continue.
:::

Se você desejar gravar a imagem na eMMC onboard, precisa acessar a placa e modificar um arquivo.

Em **/boot/uEnv.txt**:

    ##enable BeagleBone® Black: eMMC Flasher:
    #cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh
Mude para:

    ##enable BeagleBone® Black: eMMC Flasher:
    cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh

Então você verá os 4 LEDs de usuário acesos como abaixo

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/flashing.gif)

:::note
Se você não encontrar o traçado de luz acima, por favor pressione o botão RESET para reiniciar a placa.
:::

Quando a gravação for concluída, todos os 4 LEDs USRx estarão **desligados**. As imagens mais recentes do gravador Debian desligam automaticamente a placa após a conclusão. Isso pode levar até **10 minutos**. Desligue a sua placa, remova o cartão SD e ligue-a novamente para concluir.

## Grove para Seeed Studio BeagleBone® Green

Grove é um sistema de prototipagem modular com conectores padronizados. Grove adota uma abordagem de blocos de montar para montar eletrônicos. Em comparação com o sistema baseado em jumpers ou solda, é mais fácil conectar, experimentar e construir, e simplifica o sistema de aprendizado, mas não a ponto de ficar simplório. Alguns dos outros sistemas de prototipagem existentes reduzem o nível para blocos de montar. É uma boa forma de aprender, mas o sistema Grove permite que você construa sistemas reais. Ele exige algum aprendizado e experiência para conectar as coisas.

Abaixo estão listados os módulos Grove que funcionam bem com o Seeed Studio BeagleBone® Green.

|SKU        |Nome|Interface|link|
|-----------|-----|-----|----------|
|101020054  |Grove - Acelerômetro Digital de 3 Eixos (+16g)     | I2C| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B116g%29-p-1156.html)|
|101020071  |Grove - Acelerômetro Digital de 3 Eixos (+400g)    | I2C| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B1400g%29-p-1897.html)|
|101020034  |Grove - Bússola Digital de 3 Eixos                 | I2C| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html)|
|101020050  |Grove - Giroscópio Digital de 3 Eixos                    | Analog| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html)|
|101020081 |Grove - Acelerômetro e Bússola de 6 Eixos v2.0      | I2C| [link](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer&Compass-v2.0-p-2476.html)|
|101020072 |Grove - Sensor de Barômetro (BMP180)              | I2C| [link](https://www.seeedstudio.com/Grove-Barometer-Sensor-%28BMP180%29-p-1840.html)|
|104030010 |Grove - LED Azul                               | I/O| [link](https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html)|
|101020003 |Grove - Botão                                 |I/O| [link](https://www.seeedstudio.com/Grove-Button-p-766.html)|
|111020000 |Grove - Botão (P)                             |I/O| [link](https://www.seeedstudio.com/Grove-Button%28P%29-p-1243.html)|
|107020000 |Grove - Buzzer                                 |I/O| [link](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|
|104030006 |Grove - LED RGB Encadeável                     |I2C| [link](https://www.seeedstudio.com/Grove-Chainable-RGB-LED-p-850.html)|
|101020030 |Grove - Sensor de Luz Digital                 |I2C| [link](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|
|103020024 |Grove - Sensor de Frequência Cardíaca de Presilha de Dedo         |I2C| [link](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-p-2425.html)|
|101020082 |Grove - Sensor de Frequência Cardíaca de Presilha de Dedo com caixa |I2C|[link](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-with-shell-p-2420.html)|
|113020003 |Grove - GPS                         |UART| [link](https://www.seeedstudio.com/Grove-GPS-p-959.html)|
|104030007 |Grove - LED Verde |I/O| [link](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html)|
|103020013 |Grove - I2C ADC |I2C| [link](https://wiki.seeedstudio.com/pt-br/Grove-I2C_ADC/)|
|103020006 |Grove - Hub I2C |I2C| [link](https://www.seeedstudio.com/Grove-I2C-Hub-p-851.html)|
|101020079 |Grove - IMU 10DOF |I2C| [link](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)|
|101020080 |Grove - IMU 9DOF v2.0 |I2C| [link](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)|
|101020040 |Grove - Interrupção de Distância IR |I/O| [link](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html)|
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

Você vai precisar de alguma placa de expansão quando iniciar um projeto. Já existem muitos capes para o Seeed Studio BeagleBone® Green, incluindo display LCD, driver de motor, bem como expansão HDMI etc. Abaixo estão alguns deles recomendados.

|Grove Cape| Motor Bridge Cape|HDMI Cape|
|------------|----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product3.jpg)|
|[GET ONE NOW!](https://www.seeedstudio.com/Grove-Cape-for-BeagleBone-Series-p-1718.html)|[GET ONE NOW!](https://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)|[GET ONE NOW!](https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-HDMI-Cape-p-2570.html)|

|Grove Cape| 5 Inch LCD|7 Inch LCD|
|------------|----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product6.jpg)|
|[GET ONE NOW!](https://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)|[GET ONE NOW!](https://www.seeedstudio.com/5-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2642.html)|[GET ONE NOW!](https://www.seeedstudio.com/7-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2643.html)|

## Referências

Há muitas referências para ajudá-lo a obter mais informações sobre a placa.

- [Página Principal do BeagleBoard](https://beagleboard.org/)
- [BeagleBoard Primeiros Passos](https://beagleboard.org/getting-started)
- [Solução de Problemas](https://beagleboard.org/getting-started#troubleshooting)
- [Documentação de Hardware](https://beagleboard.org/getting-started#hardware)
- [Projetos de BeagleBoard](https://beagleboard.org/project)
- [Certificação CE do Seeed Studio BeagleBone® Green Eco](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/102111198-CE.pdf)
- [Certificação FCC do Seeed Studio BeagleBone® Green Eco](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/102111198-FCC.pdf)

## Recursos

- **[PDF]** [Ficha Técnica AM335X](https://files.seeedstudio.com/wiki/Bazaar_file/102010027/AM335x.pdf)
- **[PDF]** [Esquemático do Seeed Studio BeagleBone Green Eco](https://files.seeedstudio.com/products/102111198/res/BeagleBone%20Green%20Eco_V1.0_SCH_250814.pdf)
- **[PDF]** [Referência de Estrutura do Seeed Studio BeagleBone Green Eco](https://files.seeedstudio.com/products/102111198/res/BBG_Eco_Structure_Reference_20251219.pdf)
- **[DXF]** [Referência de Estrutura do Seeed Studio BeagleBone Green Eco](https://files.seeedstudio.com/products/102111198/res/BBG_Eco_Structure_Reference_20251219.dxf)


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
