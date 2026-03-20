---
description: LinkIt Smart 7688 Duo
title: LinkIt Smart 7688 Duo
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LinkIt_Smart_7688_Duo
sku: 102110017
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/LinkIt_Smart_7688_Duo/
---

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Linkit_7688_DUO_Product_view.jpg)

:::danger
Devido ao encerramento do MediaTek Labs, todos os links relacionados se tornaram inválidos. Se você precisar baixar arquivos relevantes, pesquise por eles no seguinte link: [https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs).
:::

LinkItTM Smart 7688 Duo (uma placa controladora compacta) é uma placa de desenvolvimento aberta baseada em MT7688([datasheet](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/MT7688_datasheet.pdf)) e ATmega32u4. A placa é compatível com sketches do Arduino Yun e é baseada na distribuição Linux OpenWrt. A placa é projetada especialmente para possibilitar a prototipagem de dispositivos IoT de Aplicações Ricas para casa ou escritório inteligentes[1]. Como é bem compatível com Arduino, você pode usar diferentes recursos do Arduino Yun e do LinkIt Smart 7688 Duo[2]. Isso irá ajudá-lo a criar aplicações ricas baseadas em vários sketches robustos e compilados do Arduino Yun. A placa oferece a memória e o armazenamento de pacotes para possibilitar um processamento de vídeo robusto. A plataforma também oferece opções para criar aplicações de dispositivo nas linguagens de programação Python, Node.js e C.

:::note
- Apenas um controlador pode ser o controlador principal da placa por vez.
- Esta placa é apenas uma parte da plataforma MediaTek LinkItTM Smart 7688, que inclui outras placas de desenvolvimento.

:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkIt-Smart-7688-Duo-p-2574.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Recursos

- CPU MIPS de 580 MHz
- Wi-Fi 802.11 b/g/n (2,4G) com entrada única e saída única (1T1R)
- Saída de pinos para GPIO, I2C, I2S, SPI, SPIS, UART, PWM e porta Ethernet
- 32MB Flash e 128MB DDR2 RAM
- USB host
- Slot para Micro SD
- Suporte para API do Arduino (ATmega32U4)

## Ideias de aplicação

- Dispositivo IoT/Gateway
- Robótica
- Ensino e aprendizagem

## Especificação

- MPU
  - Chipset: MT7688AN
  - Núcleo: MIPS24KEc
  - Velocidade de clock: 580MHz
  - Tensão de trabalho: 3,3V
- MCU
  - Chipset: ATmega32U4
  - Núcleo: Atmel AVR
  - Velocidade de clock: 8MHz
  - Tensão de trabalho: 3,3V
- Memória
  - Flash: 32MB
  - RAM: 128MB DDR2
- GPIO
  - Contagem de pinos: 3 (MT7688AN), 24 (ATmega32U4)
  - Tensão: 3,3V
- PWM
  - Contagem de pinos: 8 (Atmega32U4)
  - Tensão: 3,3V
  - Resolução máx.: 16 bits (personalizável)
- ADC
  - Contagem de pinos: 12 (ATmega32U4)
  - Resolução: 10 bits
- Interrupções externas: 8
- SPI/SPIS
  - Números de pinos: S0, S1, S2, S3
  - Velocidade máx.: 4MHz
- I2C
  - Número de pino: D2/D3
  - Velocidade: 400KHz
- UART Lite
  - 1 para ATmega32U4, 1 para MT7688AN
  - Número de pino: P8/P9 (MT7688AN), D0/D1 (ATmega32U4)
- USB Host
  - Número de pino: P6/P7
  - Tipo de conector: Micro-AB
- Comunicação
  - Wi-Fi: 1T1R 802.11 b/g/n (2,4G)
  - Ethernet: 1 porta 10/100 FE PHY
  - Números de pinos: P2/P3/P4/P5
- Armazenamento do usuário: cartão SD Micro SD/SDXC
- Tamanho: 60,8 x 26,0 mm

## Visão geral do hardware

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Front_component_view_with_text_1200_s.jpg)

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/7688_duo_backview_with_text_1200.jpg)

:::note
    * Para proteger o produto de operação incorreta, por favor, preste atenção às notas abaixo. Escolha um adaptador de energia mais confiável com saída estável. Condições recomendadas da fonte de entrada de energia para o 7688:
          * A sobretensão da entrada de energia não deve ultrapassar 5,5.
          * A ondulação de tensão deve estar dentro de ±100mV da tensão nominal.
:::

## Primeiros passos

### Conectando ao sistema operacional embarcado

:::note
    Há duas maneiras descritas no manual. Neste caso, mostramos apenas um método avançado (usando adaptador USB para Serial) que pode parecer um pouco mais difícil. Porém, você se beneficiará muito disso a longo prazo.
:::

#### Materiais necessários

- LinkIt Smart 7688 x 1
- Cabo USB (tipo A para micro tipo-B) x 1
- Adaptador USB para Serial x 1
- Jumpers x 3

### No Windows

**1.** Instale o [PuTTy](http://www.putty.org/). O PuTTY fornece um ambiente de console de sistema usando SSH (Secure Socket Shell) para acessar o sistema operacional da placa de desenvolvimento.

**2.** Instale o Bonjour Print Service (para Windows 7, Windows 8, Windows 10) a partir de [Bonjour](https://support.apple.com/kb/DL999?viewlocale=en_US&locale=en_US).

**3.** Instale o driver. Se você estiver usando um cabo USB baseado em chip FTDI, baixe e instale o driver a partir de [aqui](https://www.ftdichip.com/Drivers/VCP.htm). Se você estiver tendo problemas com o driver mais recente, tente instalar uma [versão mais antiga](https://www.ftdichip.com/Support/Documents/InstallGuides.htm).

**4.** Em seguida, você precisa conectar o cabo Serial-para-USB aos pinos UART do LinkIt Smart 7688, como mostrado na tabela a seguir:

| Pino no adaptador USB | Pino correspondente a ser conectado no LinkIt Smart 7688 |
|-----------------------------------|--------------------------------------------------------|
| Pino RX | Pino 8 |
| Pino TX | Pino 9 |
| Pino GND | Pino GND |

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/7688_duo_demo_view_1200_s.jpg)

**5.** Após conectar o cabo Serial para USB, abra o Gerenciador de Dispositivos e observe o número da porta COM como mostrado na Figura 22. Esse número pode variar em computadores diferentes.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/COM_port.jpg)

**6.** Inicie o terminal PuTTY e insira o número da porta COM do dispositivo USB encontrado no Gerenciador de Dispositivos, clique no botão de opção Serial, digite 57600 na caixa Speed e clique em Open, como mostrado na Figura 23.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Putty_configuration.jpg)

**7.** Para sair do console do sistema, clique no **ícone de fechar** no canto superior direito da janela do PuTTY.

### No Mac

**1.** Instale o driver, se necessário. Verifique o site do fabricante do cabo para ver os requisitos de driver no Mac e instruções de instalação.

**2.** Conecte o cabo ao PC/Notebook e conecte o cabo ao LinkIt Smart 7688.

**3.** Abra uma sessão do Terminal.

**4.** Digite **ls /dev/cu** no Terminal. Você deverá ver uma lista de dispositivos. Procure por algo como cu.usbserial-XXXXXXXX onde XXXXXXXX é geralmente um identificador aleatório. Este é o dispositivo serial usado para acessar o console do sistema.

**Por exemplo:**

```
$ls /dev/cu*

/dev/cu.Bluetooth-Incoming-Port

/dev/cu.Bluetooth-Modem

/dev/cu.pablop-WirelessiAP

/dev/cu.usbserial-A6YMCQBR

```

**5.** Use o utilitário screen para se conectar à porta serial e defina o baudrate para 57600. Isso porque o baudrate do console do sistema é 57600 por padrão. Por exemplo:

```
$screen /dev/cu.usbserial-XXXXXXXX 57600
```

**6.** Agora você deve estar conectado ao console do sistema. Pressione ENTER no Terminal para exibir o prompt. Você notará que o prompt se tornou diferente do seu aplicativo Terminal do OS X, é o prompt do LinkIt Smart 7688 e se parece com o seguinte:

```
  root@myLinkIt:/#
```

**7.** Você está pronto para fazer mudanças no sistema do LinkIt Smart 7688 através deste console.

### No Linux

**1.** Instale o driver, se necessário. Verifique o site do fabricante do cabo para ver os requisitos de driver no Linux e instruções de instalação.

**2.** Conecte o cabo e conecte o cabo ao LinkIt Smart 7688 Duo.

**3.** Abra uma sessão do Terminal.

**4.** Digite **ls /dev/ttyUSB*** no Terminal. Você deverá ver uma lista de dispositivos. Procure por algo como cu.usbserial-XXXXXXXX onde XXXXXXXX é geralmente um identificador aleatório. Este é o dispositivo serial usado para acessar o console do sistema. Por exemplo:

```
$ls /dev/ttyUSB*
/dev/ttyUSB0
```

**5.** Use o utilitário **screen** para se conectar à porta serial e defina o baudrate para **57600**. Isso porque o baudrate do console do sistema é 57600 por padrão. Por exemplo:

```
$sudo screen /dev/ttyUSB0 57600
```

**6.** Agora você deve estar conectado ao console do sistema. Pressione ENTER no Terminal para exibir o prompt. Você notará que o prompt se tornou um aplicativo regular diferente, é o prompt do LinkIt Smart 7688 e se parece com o seguinte:

```
  root@myLinkIt:/#
```

**7.** Você está pronto para fazer mudanças no sistema do LinkIt Smart 7688 através deste console.

### Executando o exemplo Blink

#### Materiais necessários

- LinkIt Smart 7688 x 1
- Cabo USB (tipo A para micro tipo-B) x 1
- Adaptador USB para Serial x 1
- Jumpers x 3

#### Fazer o Blink RODAR

**1.** Ligue sua placa com um cabo micro-USB (conecte apenas a interface USB Power, e não a interface USB Host).

**2.** Inicie o PuTTy e conecte-se ao sistema com o adaptador USB para Serial, como mostrado nas seções anteriores.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Connect_to_computer.jpg)

**3.** Digite **python /IoT/examples/blink-gpio44.py** e pressione **Enter** para executar o exemplo Blink.
:::note
    Observe que há 1 espaço em branco após a primeira palavra "python", caso contrário o exemplo não será encontrado.
:::
**4.** Após cerca de 2 segundos, você notará que o LED Wi-Fi pisca de forma constante.

**5.** No console do sistema, digite **CTRL + C**, isso irá encerrar o exemplo.

### Conectar à Internet (Mudar para o modo Station)

Existem dois tipos de modos Wi-Fi: modo AP e modo Station. Consulte aqui para ver as diferenças entre eles.

**1.** Ligue a placa com um cabo micro-USB.

**2.** Abra o utilitário de conexão Wi-Fi em seu computador e conecte-se ao ponto de acesso chamado LinkIt_Smart_7688_XXXXXX. XXXXXX é um tipo de identificador de hardware que varia de placa para placa.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Connect_wifi.jpg)

**3.** Abra um navegador com a URL mylinkit.local/ ou 192.168.100.1, defina a senha para root e faça login. Clique em Network no canto superior direito.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Network_conf.jpg)

**4.** Selecione o modo Station e clique em Refresh ou na seta para baixo à direita para encontrar o AP ao qual deseja se conectar. Depois de selecionar o AP, digite a senha se necessário. Clique em Configure & Restart para finalizar, como mostrado abaixo. Em seguida, aguarde cerca de 30 segundos para trocar de modo.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Station_mode.jpg)

**5.** Inicie o PuTTy e conecte-se ao sistema com o adaptador USB para Serial, como mostrado na seção anterior.

**6.** Digite ifconfig e encontre o endereço IP de inet addr como mostrado abaixo:

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/IFCONFIG.jpg)

:::note
    Ele continuará entrando no modo Station após reiniciar o sistema. Pressione o botão wi-fi por pelo menos 5 segundos para voltar ao modo AP. Observação: será necessário reiniciar o sistema operacional embarcado usando o comando reboot.
:::
**7.** Digite o IP em uma nova aba do navegador e você poderá fazer login na interface Web do usuário para configurar o sistema.

**8.** Agora tanto o computador host quanto o LinkIt Smart 7688 estão conectados à internet. Digite ping [www.mediatek.com](https://www.mediatek.com/) no console e você obterá:

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Ping_result.jpg)

**9.** Agora você pode usar a internet para configurar seu sistema na placa de desenvolvimento.

### Instalando o ambiente de programação Arduino

Esta placa de desenvolvimento possui recursos compatíveis com Arduino. Assim, você pode aplicar seu código Arduino às plataformas 7688, o que torna o processo de prototipagem mais rápido. Nesta seção, mostraremos como criar um ambiente de programação Arduino.

#### Baixar e instalar o Arduino IDE

Você pode [instalar o Arduino IDE 1.6.5](https://www.arduino.cc/en/Main/Software) em seu computador.

Configurar o Arduino IDE para a plataforma LinkIt Smart 7688

#### Instalando o pacote de suporte à placa de desenvolvimento

O Arduino IDE 1.6.5 suporta integração de placas de terceiros usando a ferramenta **Board Manager**. A placa de desenvolvimento LinkIt Smart 7688 é um plug-in do Arduino IDE e você precisará instalar o pacote da placa para que o Arduino dê suporte à placa LinkIt. Siga as etapas abaixo:

**1.** No Arduino IDE, no menu File clique em Preferences e então insira

```
http://download.labs.mediatek.com/package_mtk_linkit_smart_7688_index.json
```

no campo Additional Boards Manager URLs:

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Install_package.jpg)

**2.** Certifique-se de que seu computador esteja conectado à internet. [Baixe](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/LinkIt.zip) o **LinkIt**, descompacte-o e copie os arquivos para a pasta **packages**, que fica no mesmo local do arquivo **Preferences.txt**. Clique na seção marcada em vermelho a seguir para abrir o local do arquivo **Preferences.txt**.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/7688_duo_demo_preferences.txt_location_s.jpg)

**3.** No menu **Tools** do Arduino, aponte para **Board**.

**4.** Agora deverá haver um item LinkIt Smart 7688 aparecendo na lista de placas no Boards Manager e escolha a porta com **COMxx** (**LinkIt Smart 7688 Duo**).

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Install_SDK.jpg)

**5.** A instalação está concluída.

### Instalando o Driver de Porta COM do LinkIt Smart 7688 Duo

Após instalar o pacote da placa, conecte o LinkIt Smart 7688 Duo ao seu computador e você deverá ver uma porta serial USB COM no gerenciador de dispositivos com o seguinte ID de porta:

- Porta COM do Boot loader: VID=0x0E8D, PID=0xAB00
- Porta COM do Arduino Sketch: VID=0x0E8D, PID=0xAB01

Em seguida, você precisará instalar drivers dependendo do seu sistema operacional. As etapas são:

:::note
    Para Windows 10, não há necessidade de instalar um driver. No entanto, são necessárias etapas extras para garantir que o Windows 10 reconheça a placa. Conecte o LinkIt Smart 7688 Duo ao seu computador com Windows 10 e, em seguida, pressione rapidamente o botão de reset do MCU duas vezes dentro de 700 milissegundos. O sistema agora deve reconhecer o LinkIt Smart 7688 Duo como um USB Serial Device (COM5). O número 5 pode ser diferente em máquinas diferentes. Você só precisa fazer isso na primeira vez que a placa for conectada ao seu computador com Windows.
:::
:::note
    Para Windows 8, o sistema pode bloquear a instalação do driver. Siga este link para saber como desabilitar a imposição de assinatura de driver no Windows 8. Após desabilitar a imposição de assinatura, siga as etapas no Windows 7 abaixo para instalar o driver.
:::
:::note
    Para Windows 7, encontre o driver INF da porta Serial COM no seguinte caminho. Você também pode instalá-lo a partir daqui.
`<Arduino IDE Preference Location>`Arduino15/packages/LinkIt/hardware/avr/0.1.5/driver/linkit_smart_7688.inf
:::
Você encontrará o local de preferências do Arduino em **File -> Preferences**, veja o **caminho de preference.txt**.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Preference_location.jpg)

Clique com o botão direito em linkit_smart_7688.inf e selecione install, aparecerá uma janela de segurança e **clique em Install this driver software anyway**. Isso conclui a instalação do driver.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Driver_inst_alert.jpg)

- Para Ubuntu Linux, deve funcionar sem instalar um driver. O LinkIt Smart 7688 deve estar na pasta /dev e montado como ttyUSB0. O número 0 pode ser diferente em cada máquina Ubuntu.
- Para OS X, também não é necessário instalar um driver, o LinkIt Smart 7688 Duo é montado como um dispositivo serial em /dev/tty.usbmodem1413. O número 1413 pode ser diferente em cada máquina OS X.

## Demonstração: um exemplo Hello world

:::note
    Para evitar ficar sem memória durante o desenvolvimento de aplicações nativas, você deve configurar o ambiente de desenvolvimento de aplicações nativas em um ambiente host mais poderoso que permita compilar cruzado o formato executável do alvo LinkIt Smart 7688. A tabela a seguir mostra uma visão geral das linguagens de programação do LinkIt Smart 7688 e dos ambientes de desenvolvimento relacionados no computador host.
:::
### Python

**1.** Use o FileZilla e consulte este [tutorial](https://wiki.filezilla-project.org/FileZilla_Client_Tutorial_%28en%29), o IP do servidor (substitua o **host name**) é o inet addr encontrado na seção anterior [Switch to Station mode](https://seeeddoc.github.io/LinkIt_Smart_7688_Duo#Switch_to_Station_mode), o nome de usuário é root e a senha é a que você definiu nessa seção.

**2.** Abra um editor de texto, copie e cole o código de exemplo abaixo e salve-o como **helloworld.py**.

```
print "Hello World!"
```

**3.** Copie o arquivo **helloworld.py** para o sistema no ambiente de desenvolvimento de destino (LinkIt Smart 7688) com o FileZilla, coloque-o na pasta **root**.

**4.** Inicie o PuTTy e conecte-se ao sistema com o adaptador USB para Serial.

**5.** Defina o diretório de trabalho para **/root** e digite **python helloworld.py** para executar.

**6.** Agora você pode ver **Hello World**! impresso no console.

### Arduino

#### No computador host (lado Arduino)

O lado do MCU é escrito como um sketch Arduino. Neste exemplo, o sketch simplesmente escuta o comando enviado pelo lado do MPU (Linux) e alterna o LED on-board de acordo.

**1.** Primeiro, conecte o LinkIt Smart 7688 Duo ao seu PC, depois abra o Arduino IDE e cole o seguinte código de sketch no IDE:

```
void setup() {
    Serial.begin(115200); // open serial connection to USB Serial port (connected to your computer)
    Serial1.begin(57600); // open internal serial connection to MT7688
    // in MT7688, this maps to device
    pinMode(13, OUTPUT);
}
void loop() {
    int c = Serial1.read(); // read from MT7688
    if (c != -1) {
        switch(c) {
        case '0': // turn off D13 when receiving "0"
            digitalWrite(13, 0);
            break;
        case '1': // turn off D13 when receiving "1"
            digitalWrite(13, 1);
            break;
        }
    }
}
```

**2.** Em seguida, escolha a porta COM correta no IDE (verifique no gerenciador de dispositivos) clicando em **Tools -> Port**.

**3.** Envie o sketch para a placa. Observe que a placa ainda não está piscando – você precisará escrever um programa no lado Linux para fazê-la piscar, que é o próximo passo.

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Blink_in_arduino.jpg)

#### Na placa de desenvolvimento (lado Linux)

**1.** Use um editor de texto de sua preferência e crie um novo arquivo (um arquivo Python), depois copie o código a seguir e salve-o.

```
import serial
import time
s = None
def setup():
    global s
# open serial COM port to /dev/ttyS0, which maps to UART0(D0/D1)
# the baudrate is set to 57600 and should be the same as the one
# specified in the Arduino sketch uploaded to ATmega32U4.
s = serial.Serial("/dev/ttyS0", 57600)
def loop():
# send "1" to the Arduino sketch on ATmega32U4.
# the sketch will turn on the LED attached to D13 on the board
s.write("1")
time.sleep(1)
# send "0" to the sketch to turn off the LED
s.write("0")
time.sleep(1)
if __name__ == '__main__':
setup()
while True:
loop()
```

**2.** Execute este programa Python no console do sistema – este programa basicamente escreve uma sequência de 1 e 0 na porta /dev/ttyS0, que é mapeada para a interface Serial1 no Arduino. O sketch Arduino que foi enviado na seção anterior receberá a sequência e então fará o LED on-board piscar de acordo.

Agora você pode estender o sketch Arduino para controlar outros dispositivos, como PWM, dispositivos I2C e sincronizar os estados estendendo as mensagens de comando entre o Arduino e o lado Linux. Se mais tipos de periféricos precisarem ser incluídos, você pode usar algumas bibliotecas externas para implementar o protocolo de comunicação. Um desses protocolos – Firmata – é descrito na seção a seguir.

## FAQs

[Aqui](https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/faq) está o FAQ da Mediatek.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/317080023_DIP_Module;LinkIt_Smart_7688_Duo;2x20P.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Arquivos de Esquemático de Hardware](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/Hardware_Schematics.zip)
- [Manual](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/Manual.zip)
- [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)
- [Recursos do MediaTek LinkIt? Smart 7688:](https://labs.mediatek.com/site/global/developer_tools/mediatek_linkit_smart_7688/hdk_intro/index.gsp)
- [Como gravar o firmware via um drive USB](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/Linkit_Smart_7688_DUO_Firmware.pdf)
- [Certificados](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/LinkIt_Smart_7688_Duo-Certificate.zip)
- [Mediatek](https://labs.mediatek.com/en/platform/linkit-smart-7688)

## Projeto

**Monitoramento de Casa Inteligente Baseado em Alexa**: Você está no seu escritório e quer saber sobre a sua casa? Controle seus dispositivos domésticos e receba alertas sobre a casa não importa onde você esteja!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/adithya-tg/alexa-based-smart-home-monitoring-e36b7f/embed' width='350'></iframe>

**Luminária Inteligente DIY - Controlada por Interruptor de Alavanca e Alexa**: Construa uma luminária inteligente que pode ser controlada virando um interruptor e pela Alexa, por apenas US$35.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/darian-johnson/diy-smart-lamp-controlled-by-toggle-switch-and-alexa-7de243/embed' width='350'></iframe>

**ReRouter - Faça um Roteador IoT Extensível**: Integre uma impressora ao meu roteador, assim meu avô ou eu podemos escrever coisas em uma página da web e deixar a impressora imprimí-las.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/seeed-studio/rerouter-make-an-extensible-iot-router-12f1e3/embed' width='350'></iframe>

**Controlador de Aquário IoT**: Um controlador de aquário open source impresso em 3D com recursos de IoT.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/roroid/iot-aquarium-controller-448dac/embed' width='350'></iframe>

**Iluminação Inteligente e Notificações**: Usando um MediaTek LinkIt Smart 7688 Duo para conectar sem fio LEDs inteligentes ao seu sistema de automação residencial.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/phigax/smart-lighting-and-notifications-1c8a1b/embed' width='350'></iframe>

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
