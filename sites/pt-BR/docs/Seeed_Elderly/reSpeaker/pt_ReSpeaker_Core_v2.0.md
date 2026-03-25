---
description: ReSpeaker Core v2.0
title: reSpeaker Core v2.0
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_Core_v2.0
sku: 102990883
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ReSpeaker_Core_v2.0/
---
![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_front.JPG)

O ReSpeaker Core v2.0 da Seeed é projetado para aplicações de interface de voz. Ele é baseado no Rockchip RK3229, um ARM Cortex A7 quad-core, rodando até 1,5GHz, com 1GB de RAM. A placa apresenta um arranjo de seis microfones com algoritmos de fala incluindo DoA (Direction of Arrival), BF (Beam-Forming), AEC (Acoustic Echo Cancellation), etc.

O ReSpeaker Core v2.0 roda um sistema operacional GNU/Linux. Ele se beneficia de uma comunidade poderosa e ativa que permite o uso de softwares e ferramentas existentes para desenvolvimento, teste e implantação, possibilitando um desenvolvimento rápido de produtos.

O ReSpeaker Core v2.0 é projetado como uma placa de desenvolvimento rica em recursos para ser avaliada por empresas. Para isso, a placa consiste em duas seções principais, sendo a primeira o módulo central contendo a CPU, Memória (RAM) e PMU. A segunda seção é a placa portadora externa que contém os periféricos como o eMMC, conectores e componentes de conectividade sem fio. Qualquer uma das seções ou ambas podem ser personalizadas por meio dos serviços de customização da Seeed.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<p style={{textAlign: 'center'}}><a href="https://www.amazon.com/dp/B07DN43Q7L" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/amaon.png"  width="300" height="48"  border="0"/></a></p>

## Recursos

- Solução tudo-em-um com SoC de alto desempenho
- 1GB RAM e 4GB eMMC
- Arranjo de 6 microfones  
- USB OTG, dispositivo USB
- WiFi b/g/n e BLE 4.0
- Alcance de detecção: ~5 metros
- Soquete Grove para outros sensores
- Conector de áudio de 3,5mm e conector JST2.0
- 8 canais de ADCs para arranjo de 6 microfones e 2 loopback (loopback de hardware)

- Sistema Linux baseado em Debian
- SDK em C++ e wrapper em Python
- SDK para algoritmo de fala com documentação completa
- Algoritmos e recursos de fala:

  - Despertar por palavra-chave
  - BF(Beam-Forming)
  - DoA (Direction of arrival)
  - NS(Noise suppression)
  - AEC (Acoustic echo cancellation) e AGC (Automatic gain control)

## Especificação

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#f0f0f0;}
.tg .tg-dc35{background-color:#f9f9f9;border-color:inherit;vertical-align:top}
.tg .tg-l711{border-color:inherit}
.tg .tg-us36{border-color:inherit;vertical-align:top}
.tg .tg-4646{background-color:#f9f9f9;border-color:inherit}
.tg .tg-gcw3{border-color:#000000}
</style> -->

<table className="tg">
  <tbody><tr>
      <th className="tg-gcw3" colSpan={3}>Features</th>
    </tr>
    <tr>
      <td className="tg-4646" rowSpan={6}>Soc(Rockchip RK3229)</td>
      <td className="tg-4646">CPU</td>
      <td className="tg-4646">Quad-Core Cortex-A7,up to 1.5GHz</td>
    </tr>
    <tr>
      <td className="tg-l711">GPU</td>
      <td className="tg-l711">Mali400MP, Support OpenGL ES1.1/2.0</td>
    </tr>
    <tr>
      <td className="tg-dc35">Memory</td>
      <td className="tg-dc35">1GB RAM(Core Module includes RAM and PMU)</td>
    </tr>
    <tr>
      <td className="tg-us36" rowSpan={3}>System</td>
      <td className="tg-us36">Operating Voltage:3.6-5V</td>
    </tr>
    <tr>
      <td className="tg-dc35">80 pins on-module</td>
    </tr>
    <tr>
      <td className="tg-us36">PMU on-module</td>
    </tr>
    <tr>
      <td className="tg-dc35" rowSpan={7}>Peripheral</td>
      <td className="tg-dc35">Networks</td>
      <td className="tg-dc35">WiFi b/g/n;<br />BLE 4.0;<br />Ethernet</td>
    </tr>
    <tr>
      <td className="tg-us36">USB</td>
      <td className="tg-us36">2 x USB Host;   1 x USB OTG;    1 x USB power</td>
    </tr>
    <tr>
      <td className="tg-dc35">Grove</td>
      <td className="tg-dc35">1 x Grove socket (I2C and Digital)</td>
    </tr>
    <tr>
      <td className="tg-us36">Video</td>
      <td className="tg-us36">Decodificação de vídeo 4K VP9 e 4K 10bits H265/H264, até 60fps</td>
    </tr>
    <tr>
      <td className="tg-dc35">Audio</td>
      <td className="tg-dc35">Taxa máxima de amostragem: 96Khz;<br />Arranjo de 6 microfones;<br />Conector de áudio de 3,5mm;<br />Conector de saída de áudio JST2.0</td>
    </tr>
    <tr>
      <td className="tg-us36">Storage</td>
      <td className="tg-us36">4GB eMMC on-board;<br />Slot SD</td>
    </tr>
    <tr>
      <td className="tg-dc35">Others</td>
      <td className="tg-dc35">12 x LEDs RGB;<br />8 pinos GPIO</td>
    </tr>
    <tr>
      <td className="tg-us36" rowSpan={2}>Power Consumption</td>
      <td className="tg-us36">Modo de espera</td>
      <td className="tg-us36">200mA /5V</td>
    </tr>
    <tr>
      <td className="tg-dc35">Trabalhando com modo de algoritmo</td>
      <td className="tg-dc35">330mA /5V</td>
    </tr>
  </tbody></table>

:::note
​    Esta tabela lista apenas a especificação básica do ReSpeakser Core v2.0, para parâmetros mais profissionais consulte [Acoustic & Electrical Specification of ReSpeaker Core v2.0](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Acoustic%26Electrical_Specification_of_ReSpeaker_Core_v2.0.pdf).
:::

## Visão geral do hardware

**Interface e armazenamento**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/hardware_overview.png)

- **<font face="" size="3" font color="ff0000">①</font> Conector de fone de ouvido de 3,5mm:**
Saída de áudio. Você pode conectar alto-falantes ativos ou fones de ouvido nesta porta.

- **<font face="" size="3" font color="ff0000">②</font> USB OTG:**
Esta porta USB é usada para conectar ao seu computador via modo serial do putty (ou outras ferramentas seriais).

- **<font face="" size="3" font color="ff0000">③</font> Entrada de alimentação USB:**
Esta porta é usada para fornecer energia para o Respeaker Core v2.0.

- **<font face="" size="3" font color="ff0000">④</font>**Conector de alto-falante:**
Saída de áudio para alto-falantes passivos. Soquete Jst 2.0.

- **<font face="" size="3" font color="ff0000">⑤</font> UART:**
Você também pode conectar o ReSpeaker Core v2.0 ao seu computador através desta porta UART.

- **<font face="" size="3" font color="ff0000">⑥</font> 8 pinos GPIO:**
Interface de Entrada e Saída de Uso Geral para aplicações estendidas.

- **<font face="" size="3" font color="ff0000">⑦</font> Slot para cartão SD:**
Para inserir cartão micro-SD.

- **<font face="" size="3" font color="ff0000">⑧</font> eMMC:**
Embedded Multi Media Card. Você pode gravar a imagem na eMMC, para que o ReSpeaker Core v2.0 possa inicializar a partir da eMMC.

- **<font face="" size="3" font color="ff0000">⑨</font> USB Host:**
Você pode conectar dispositivos USB, como mouse USB, teclado USB e pen drive USB ao ReSpeaker Core v2.0 através desses dois USB hosts.

- **<font face="" size="4" font color="ff0000">Ⓐ</font> Ethernet:**
Acesso à Internet.

- **<font face="" size="4" font color="ff0000">Ⓑ</font> HDMI:**
Saída de vídeo.

- **<font face="" size="4" font color="ff0000">Ⓒ</font> Antena Bluetooth e WIFI:**
A antena integrada é para WIFI e Bluetooth. Também fornecemos uma interface para antena 2.4G ou antena PCB.

- **<font face="" size="4" font color="ff0000">Ⓓ</font> Soquete Grove:**
Soquete Grove para digital ou I2C.

**Diagrama do sistema**

Você pode clicar para ver a imagem original

<a href="https://files.seeedstudio.com/wiki/Respeaker_V2/img/SYS.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Respeaker_V2/img/SYS.png"/></a>

**Pinagem**

**Definição de índice de pinos para os headers**

| Header de 8 pinos | Soquete Grove |
|--------------|-------------|
| ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/GPIO.png)|![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/socketBLACK.png)|

**Pinos GPIO**

MRAA| HEADER PIN INDEX | SYSFS PIN |RK3229 PIN
--|--|--|--
0 |0| 1091| GPIO2_D3
1 |1|   --| VCC
2 |2| 1043| GPIO1_B3
3 |3| 1127| GPIO3_D7
4 |4| 1017| GPIO0_C1
5 |5| 1067| GPIO2_A3
6 |6|   --| GND
7 |7| 1013| GPIO0_B5
8 |8| 1085| GPIO2_C5
9 |9| 1084| GPIO2_C4
10|10| --| VCC
11|11| --| GND

**Pinos I2C**

|MRAA |HEADER PIN INDEX |SYSFS PIN| RK3229 PIN|
|--|--|--|--|
|0 |8 |-- |I2C2_SCL|
|0 |9 |-- |I2C2_SDA|

**Dimensões**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Dimension_2.png)

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Dimension_1.png)

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=10325e7b-718b-477f-80d1-c85f5c2289c7" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>

## Aplicações

- Caixa de som inteligente
- Sistemas inteligentes de assistente de voz
- Gravadores de voz
- Sistema de conferência de voz
- Equipamentos de comunicação para reuniões
- Robô de interação por voz
- Assistente de voz para carro
- Outros cenários que precisam de comando de voz

## Primeiros passos

### Preparação

Esta parte irá explicar a você:

- Como instalar a imagem
- Como acessar o console serial
- Como configurar o WiFi
- Como conectar ao SSH e VNC
- Como configurar o Bluetooth
- Teste de gravação e reprodução de áudio

**Pré-requisitos**

- ReSpeaker Core V2.0
- Rede Wi-Fi
- Cartão SD de 4GB (ou mais) e leitor de cartão SD
- PC ou Mac
- [USB To Uart Adapter](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) (Opcional)
- Adaptador Micro USB 5V 1A para alimentação (Opcional)
- Dois cabos Micro-USB

:::caution
Por favor conecte o cabo USB com cuidado, caso contrário você pode danificar a interface. Por favor use o cabo USB com 4 fios internos, o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, você pode clicar <a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"><b>here</b></a>para comprar
:::

**Instalação da imagem**

Semelhante ao Raspberry Pi, você precisa instalar a imagem do ReSpeaker Core v2.0 a partir de um cartão SD para começar a usar. Oferecemos duas maneiras de inicializar o Respeaker core v2.0. Você pode inicializar a partir do cartão SD ou a partir da eMMC.

**A. Inicializar a partir do cartão SD**

- **Passo 1.** Clique no [mirror-azure](http://respeaker.seeed.io/images/) para baixar nossos arquivos de imagem zip mais recentes: ```respeaker-debian-9-lxqt-sd-********-4gb.img.xz``` ou ```respeaker-debian-9-iot-sd-********-4gb.img.xz```.

|Seção|Descrição|
|---|----|
|**iot** / **lxqt**|A versão **lxqt** vem com uma interface gráfica de desktop enquanto a versão **iot** não vem. Se você é novo no ReSpeaker Core v2.0, a versão **lxqt** é recomendada.|
|**flasher** / **sd**|A versão **flasher** é usada para gravar a eMMC onboard, após a gravação você pode remover o cartão SD. A versão **sd** exigirá que o cartão SD permaneça inserido o tempo todo.|

  Para desenvolvimento, recomendamos a versão **lxqt + sd**. Portanto, baixe o arquivo **respeaker-debian-9-lxqt-sd-[date]-4gb.img.xz**.

:::caution
Este wiki é baseado na imagem **respeaker-debian-9-lxqt-sd-20180610-4gb.img.xz**.
:::

- **Passo 2.** Conecte o cartão SD ao seu PC ou MAC com um leitor de cartões SD. Você precisa de um cartão SD com capacidade superior a 4G.

- **Passo 3.** Clique para baixar o [Etcher](https://etcher.io/) aqui, e grave o arquivo ```*.img.xz``` diretamente no seu cartão SD com o Etcher. Ou descompacte o arquivo ```*.img.xz``` para um arquivo ```*.img``` e depois grave-o no cartão SD com outras ferramentas de gravação de imagem.
<br />

<br />Clique no ícone de Mais para adicionar a imagem que você acabou de baixar, o software selecionará automaticamente o cartão SD que você conectou. Em seguida, clique em Flash! para iniciar a gravação. Levará cerca de 10 minutos para finalizar.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/v2-flash-sd.png)

- **Passo 4.** Depois de gravar a imagem no cartão SD, insira o cartão SD no seu ReSpeaker Core v2.0. Alimente a placa usando a porta micro USB PWR_IN e NÃO remova o cartão SD após ligar. O ReSpeaker Core v2.0 irá inicializar a partir do cartão SD, e você poderá ver os LEDs USER1 e USER2 acenderem. USER1 é normalmente configurado na inicialização para piscar em um padrão de batimento cardíaco e USER2 é normalmente configurado na inicialização para acender durante os acessos ao cartão SD. Agora, você deve ir para a próxima parte: Console Serial.

**B. Inicializar a partir da eMMC**

Não há firmware na EMMC quando sai de fábrica, você pode gravar os arquivos de imagem do ReSpeaker na eMMC do ReSpeaker (memória flash onboard) usando o seu PC ou Mac. Então o ReSpeaker irá inicializar a partir da sua eMMC (memória flash onboard) e não a partir do cartão SD.

- **Passo 1.** Baixe nosso arquivo de imagem zip mais recente ```respeaker-debian-9-iot-flasher-********-4gb.img.xz``` ou ```respeaker-debian-9-lxqt-flasher-********-4gb.img.xz``` em mirror-azure. A versão lxqt vem com desktop Debian e a versão iot não vem. E a versão flasher é para gravar a eMMC, e a versão sd é para inicializar a partir do cartão SD.

- **Passo 2.** Grave o arquivo ```*.img.xz``` diretamente no cartão SD com o Etcher, ou descompacte o arquivo ```*.img.xz``` para um arquivo ```*.img``` e então grave-o no cartão SD com outras ferramentas de gravação de imagem.

- **Passo 3.** Depois de gravar o cartão SD, insira o cartão SD no ReSpeaker Core v2.0. Alimente a placa usando a porta micro USB PWR_IN e não remova o cartão SD enquanto estiver gravando.

Durante o processo de gravação, você verá os LEDs USER1 e USER2 piscarem alternadamente. Levará cerca de 10 minutos para concluir. Quando os LEDs se apagarem, você pode desligar a placa, retirar o cartão SD e ligar novamente. Se os LEDs se acenderem, isso significa que a imagem foi gravada corretamente na eMMC.

Você também pode verificar a versão da imagem com este comando: cat /etc/issue.net.

**Console Serial**

Agora que o seu ReSpeaker Core v2.0 pode inicializar, você talvez queira acessar o sistema Linux via um console, para configurar o Wi-Fi, etc. Você tem duas maneiras de obter o console:

- A. A porta USB OTG - Isso requer um sistema Linux em execução na placa

- B. A porta UART - Esta é a maneira difícil de acessar o console, pode ser usada para depurar problemas de baixo nível

**A. Conexão via OTG**

- **Passo 1.** Encontre um cabo micro USB, e certifique-se de que é um cabo de dados (não apenas um cabo de alimentação), conecte a ponta micro USB à porta micro USB **OTG** do ReSpeaker (Há duas portas micro USB na placa ReSpeaker, que são identificadas com serigrafias diferentes, uma é **PWR_IN** e a outra é **OTG**), depois conecte a outra ponta desse cabo ao seu computador.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/lianjiediannan.jpg)

- **Passo 2.** Verifique no seu computador se a porta serial foi criada:

  - Windows: verifique o gerenciador de dispositivos, deve haver novos dispositivos seriais chamados ```COMx``` em que x é um número crescente. Se você usa Windows XP/7/8, talvez precise instalar os [drivers CDC para Windows](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/ReSpeaker_Gadget_CDC_driver.7z).
  - Linux: `ls /dev/ttyACM*`, você deve obter ```/dev/ttyACMx``` onde x irá variar dependendo de qual porta USB você usou.
  - Mac: `ls /dev/cu.usb*`, você deve obter ```/dev/cu.usbmodem14xx``` onde xx irá variar dependendo de qual porta USB você usou.

- **Passo 3.** Use a sua ferramenta de depuração serial favorita para conectar a porta serial, a serial possui: taxa de 115200 baud, 8 bits, Paridade Nenhuma, 1 bit de parada, Controle de fluxo Nenhum. Por exemplo:

  - Windows: use [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), selecione o protocolo ```Serial```, preencha a porta COM correta do ReSpeaker Core v2.0, ```115200``` baud, 8Bits, Paridade Nenhuma, 1 bit de parada, Controle de fluxo Nenhum.
  - Linux: Dependendo do seu Adaptador USB para TTL, pode ser ```screen /dev/ttyACM0(,1, and so on)``` 115200 ou ```screen /dev/ttyUSB0(,1, and so on) 115200```
  - Mac: Dependendo do seu Adaptador USB para TTL, pode ser ```screen /dev/cu.usbserial1412(,1422, and so on) 115200``` ou ```screen /dev/cu.usbmodem1412(,1422, and so on) 115200```

- **Passo 4.** O nome de usuário padrão é ```respeaker```, e a senha também é ```respeaker```.

**B. Conexão via porta UART**

Nesta seção iremos guiá-lo sobre como estabelecer uma conexão do seu computador ao seu ReSpeaker usando seu adaptador USB para TTL que será conectado à porta Uart do ReSpeaker (a porta Uart localizada logo à esquerda do conector de alto-falante do ReSpeaker).

- **Passo 1.** Conecte a porta Uart e o seu PC/Mac com um Adaptador USB para TTL. Observe que a voltagem de RX/TX é 3,3 V. Se você não tiver um Adaptador USB para TTL, você pode clicar [aqui](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) para obter um.

- **Passo 2.** Use as seguintes ferramentas de depuração Serial com 115200 baud:
  - Windows: use [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), selecione o protocolo ```Serial```, preencha a porta COM correta do ReSpeaker Core v2.0, 115200 baud, 8Bits, Paridade Nenhuma, 1 bit de parada, Controle de fluxo Nenhum.
  - Linux: Dependendo do seu Adaptador USB para TTL, pode ser ```screen /dev/ttyACM0(,1, and so on) 115200``` ou ```screen /dev/ttyUSB0(,1, and so on) 115200```.
  - Mac: Dependendo do seu Adaptador USB para TTL, pode ser ```screen /dev/cu.usbserial1412(,1422, and so on) 115200``` ou ```screen /dev/cu.usbmodem1412(,1422, and so on) 115200```.

- **Passo 3.** O nome de usuário de login é respeaker, e a senha também é respeaker.

- **Passo 4.** Se você não tiver um Adaptador USB para TTL, você também pode usar um Arduino. Se estiver usando um Arduino, conecte uma ponta de um fio jumper ao pino RESET do Arduino e a outra ponta ao pino GND do Arduino. Isso irá contornar o MCU ATMEGA do seu Arduino e transformar o seu Arduino em um adaptador USB para TTL, veja o tutorial em vídeo [aqui](https://www.youtube.com/watch?v=qqSLwK1DP8Q). Agora conecte o pino GND do Arduino ao pino GND na porta Uart do Respeaker. Conecte o pino Rx do Arduino ao pino Rx na porta Uart do Respeaker. Conecte o pino Tx do Arduino ao pino Tx na porta Uart do Respeaker. E por fim, conecte o Arduino ao seu PC/Mac através do cabo USB do Arduino. Agora verifique se o seu Mac ou PC Linux encontra o seu Arduino digitando este comando:

```
ls /dev/cu.usb* (Mac)
ls /dev/ttyACM* (Linux)
```

Você deverá receber algo como:

```
/dev/cu.usbmodem14XX where XX will vary depending on which USB port you used (on Mac)
/dev/ttyACMX where X will vary depending on which USB port you used  (on Linux)
```

Agora siga o passo 2 acima para se conectar ao seu Respeaker por essa conexão serial. E note que este é um procedimento de única vez, pois em seguida você configurará o seu Respeaker para conectividade Wi-Fi e então se conectará via ssh ou VNC daqui em diante.

**Configuração de Rede**

**A. Configuração de Wi-Fi**

Configure a rede do seu ReSpeaker com a ferramenta Network Manager, nmtui. O nmtui já estará instalado na imagem do ReSpeaker.

```
sudo nmtui              # respeaker user needs sudo
```

Então você verá uma página de configuração como esta, selecione ```Activate a connection``` e pressione a tecla ```Enter```.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/nmtui1-1.png)

Selecione o seu Wi-Fi para ReSpeaker v2.0, pressione a tecla ```Enter``` e digite a senha do seu Wi-Fi e pressione a tecla ```Enter``` novamente. Quando você vir uma marca ```*```, isso significa que o seu ReSpeaker foi conectado com sucesso à sua rede Wi-Fi. Toque a tecla ```Esc``` duas vezes para sair da ferramenta de configuração do gerenciador de rede.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/nmtui1-2.png)

Agora encontre o endereço IP do seu ReSpeaker usando o comando abaixo.

```
ip address
```

No exemplo abaixo, podemos ver que o endereço IP deste ReSpeaker é ```192.168.7.108```

```
root@v2:/home/respeaker# ip address

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: sit0@NONE: <NOARP> mtu 1480 qdisc noop state DOWN group default qlen 1
    link/sit 0.0.0.0 brd 0.0.0.0
3: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether e0:76:d0:37:38:6d brd ff:ff:ff:ff:ff:ff
    inet **192.168.7.108**/24 brd 192.168.7.255 scope global dynamic wlan0
       valid_lft 604332sec preferred_lft 604332sec
    inet6 2601:647:4680:ebf0:ec0a:5965:e710:f329/64 scope global noprefixroute dynamic
       valid_lft 345598sec preferred_lft 345598sec
    inet6 fe80::64de:cac8:65ef:aac8/64 scope link
       valid_lft forever preferred_lft forever
```

Além da interface gráfica do Network Manager, o Network Manager também possui uma ferramenta de linha de comando. Se você estiver se conectando a uma rede Wi-Fi oculta, será necessário usar essa ferramenta de linha de comando:

```
nmcli c add type wifi con-name mywifi ifname wlan0 ssid your_wifi_ssid
nmcli con modify mywifi wifi-sec.key-mgmt wpa-psk
nmcli con modify mywifi wifi-sec.psk your_wifi_password
nmcli con up mywifi
```

**B. Conectividade Ethernet**

Você pode se conectar a uma rede usando um cabo Ethernet. Basta conectar o cabo Ethernet que já está conectado à Internet e pronto.

**Conectar via SSH e VNC**

**A. SSH**

O servidor SSH é iniciado automaticamente no ReSpeaker v2.0. Para usuários Windows, clientes SSH de terceiros estão disponíveis. Para usuários Linux/Mac, o cliente SSH já vem incluído.

- Windows: Use o PUTTY, selecione o protocolo SSH, preencha o endereço IP correto e clique em Open. Faça login como usuário respeaker e a senha também é respeaker.

- Linux/Mac:

```
ssh respeaker@192.168.***.***
// password: respeaker
```

:::note
Observe que, se você tiver um desempenho lento usando SSH, mude para uma rede WiFi menos congestionada.
:::

**B. VNC**

Para obter a autorização da Alexa, você precisa usar o VNC Viewer. O sistema possui um servidor VNC embutido. O servidor VNC iniciará a interface gráfica da área de trabalho **lxqt**, que é um ambiente de desktop Qt leve.
O serviço VNC também é iniciado automaticamente. Use o [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) ou [VNC Viewer for Google Chrome](https://chrome.google.com/webstore/detail/vnc%C2%AE-viewer-for-google-ch/iabmpiboiopbgfabjmgeedhcmjenhbla?hl=en) para se conectar à área de trabalho do ReSpeaker Core v2.0.

Para usar o VNC, conecte seu PC/Mac e o ReSpeaker v2.0 à mesma rede Wi-Fi. Em seguida, abra o VNC Viewer e digite ```192.168.xxx.xxx``` na barra de endereço. ```192.168.xxx.xxx``` é o endereço IP da placa; você pode usar o comando **ifconfig** para verificar. Se aparecer ```Unencrypted connection```, clique em Continue para prosseguir. A senha é ```respeaker```.

![](https://user-images.githubusercontent.com/5130185/34665797-93b222d6-f49c-11e7-8112-704f91163038.png)

:::note
Observe que a conexão VNC depende de uma boa qualidade de rede, portanto esteja preparado para provavelmente obter uma taxa de atualização muito baixa na tela do VNC.
:::

**Conectar a alto-falante ou headset**

A placa usa o codec interno do SoC para reproduzir o áudio. Tanto a porta JST do alto-falante quanto a porta do headset são acionadas por seus próprios amplificadores, e ambos os amplificadores estão conectados ao mesmo codec do SoC. O driver de placa de som implementado pela SEEED aciona tanto o dispositivo de captura quanto o dispositivo de reprodução. Portanto, não há placa de som separada de captura ou reprodução na lista de dispositivos ALSA. Todos são chamados de seeed-8mic-voicecard.

A forma mais simples de ouvir som da placa é conectar um headset. Se você preferir um alto-falante potente, a placa pode fornecer até 8 W de capacidade de acionamento.

**Configuração de Bluetooth**

**Ativar o bluetooth**

Digite os comandos abaixo para atualizar e ativar o Bluetooth do ReSpeaker Core v2.0:

```
sudo apt update
sudo apt-mark hold firefox 
sudo apt upgrade
```

:::note
Se a atualização falhar, mude para outra rede WiFi com boas condições de conexão e faça a atualização novamente.
:::

Em seguida, ative o bluetooth com o comando:

```
sudo systemctl enable bt-auto-connect.service
sudo reboot -f
```

**Usar o ReSpeaker Core v2.0 como dispositivo escravo de alto-falante Bluetooth**

Quando o ReSpeaker Core v2.0 reiniciar, ative o bluetooth do seu telefone ou computador; você encontrará um dispositivo bluetooth chamado **ReSpeaker-xxxx**.
Escolha-o e conecte-se a ele. Conecte um alto-falante ou headset ao ReSpeaker Core v2.0, depois reproduza músicas e aproveite seu alto-falante bluetooth.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Bluetooth_connect.png)

**Usar o ReSpeaker Core v2.0 como dispositivo mestre de reprodução Bluetooth**

Além de funcionar apenas como alto-falante bluetooth, ele também pode servir como reprodutor bluetooth para hackear seu headset bluetooth ou alto-falante bluetooth.
Certo, vamos hackear.

- **Passo 1.** Digite `bluetoothctl` para abrir o shell do bluetooth.

- **Passo 2.** Digite `scan on` para procurar seu dispositivo bluetooth.

- **Passo 3.** Quando o ReSpeaker Core v2.0 encontrar seu dispositivo alvo, digite `scan off`.
Para este wiki, digamos que o headset MDR-1000X é nosso alvo, marque o ID do dispositivo Device `04:5D:4B:81:35:84`.

```
respeaker@v2:~$ bluetoothctl
[NEW] Controller 43:43:A0:12:1F:AC ReSpeaker-1FAC [default]
Agent registered
[bluetooth]# scan on
Discovery started
[CHG] Controller 43:43:A0:12:1F:AC Discovering: yes
[NEW] Device C8:69:CD:BB:9B:B3 C8-69-CD-BB-9B-B3
[NEW] Device E1:D9:68:0E:51:C0 MTKBTDEVICE
[NEW] Device 62:15:9C:3F:40:AA 62-15-9C-3F-40-AA
[NEW] Device 56:AF:DE:C0:34:25 56-AF-DE-C0-34-25
[NEW] Device B8:86:87:99:FB:10 SOLARRAIN
[CHG] Device B8:86:87:99:FB:10 Trusted: yes
[NEW] Device 04:5D:4B:81:35:84 MDR-1000X
[CHG] Device 04:5D:4B:81:35:84 Trusted: yes
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Key: 0x004c
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Value:
  10 05 0b 10 99 18 0a                             .......
[bluetooth]# scan off
[CHG] Device 04:5D:4B:81:35:84 RSSI is nil
[CHG] Device B8:86:87:99:FB:10 TxPower is nil
[CHG] Device B8:86:87:99:FB:10 RSSI is nil
[CHG] Device 4C:04:59:38:D3:25 RSSI is nil
[CHG] Device 58:44:98:93:35:24 RSSI is nil
Discovery stopped
[bluetooth]#

```

- **Passo 4.** Agora use o comando `pair + device ID` para parear o dispositivo bluetooth com o ReSpeaker Core v2.0.

- **Passo 5.** Quando você vir a mensagem `Pairing successful`, digite `connect + device ID`.

```
[bluetooth]# pair 04:5D:4B:81:35:84
Attempting to pair with 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 00001108-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110b-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110c-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000111e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Device 04:5D:4B:81:35:84 Paired: yes
Pairing successful
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: no
[CHG] Device 04:5D:4B:81:35:84 Connected: no
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: yes
[bluetooth]# connect 04:5D:4B:81:35:84
Attempting to connect to 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
Connection successful
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[MDR-1000X]#
```

Se `Connection successful` aparecer, configuração concluída!

Você pode digitar `exit` ou `quit` para sair do shell e depois usar os comandos abaixo para testar seu dispositivo bluetooth.

```
arecord bluetoothtest.wav
aplay bluetoothtest.wav

```

**Gravar e Reproduzir**

**1. Testar via ALSA**

Como esta é uma documentação técnica de fase de desenvolvimento, o índice do dispositivo de som pode mudar entre versões. Portanto, verifique primeiro o índice correto do dispositivo com os seguintes comandos:

```
respeaker@v2:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 0: seeed8micvoicec [seeed-8mic-voicecard], device 0: 100b0000.i2s1-ac108-pcm0 ac108-pcm0-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0

respeaker@v2:~$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: seeed8micvoicec [seeed-8mic-voicecard], device 1: 100b0000.i2s1-rk3228-hifi rk3228-hifi-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0

```

Encontre a placa de som cujo nome tenha o prefixo **seeed**. No exemplo acima, o dispositivo de captura é **hw:0,0**, o que significa placa **0**/dispositivo **0**.
O dispositivo de reprodução é **hw:0,1**, o que significa placa **0**/dispositivo **1**. Em seguida, teste a gravação e a reprodução de som com os seguintes comandos:

```
# record & playback 2 channels audio
arecord -Dhw:0,0 -f S16_LE -r 16000 -c 2 hello.wav
aplay -Dhw:0,1 -r 16000 -c 2 hello.wav

# If you want to output the sound by the bluetooth device, you need to use the command below to play
aplay -r 16000 -c 2 hello.wav

# record 8 channels audio
# there are 6 microphones on board, and ac108 compose the 2 remaining channels.
arecord -Dhw:0,0 -f S16_LE -r 16000 -c 8 hello_8ch.wav
```

Além disso, você pode gravar e reproduzir ao mesmo tempo.

```
arecord | aplay
```

**2. Testar via PulseAudio**

Primeiro verifique se o PulseAudio está em execução:

```
respeaker@v2:~$ ps aux|grep pulse|grep -v grep
respeak+  1109  0.0  0.7 363272  7932 ?        S<l  01:01   0:00 /usr/bin/pulseaudio --start --log-target=syslog
```

Se não estiver, consulte a documentação do PulseAudio para ativar o auto-spawn do PulseAudio. Em seguida, teste via:

```
parecord --channels=8 --rate=16000 --format=s16le hello2.wav
paplay hello2.wav
```

Além disso, o dispositivo ALSA padrão agora aponta para o PulseAudio, então usar os seguintes comandos também reproduz/grava som via PulseAudio:

```
arecord -v -f cd hello3.wav
aplay hello3.wav
```

Até agora aprendemos as operações básicas da placa ReSpeaker Core v2.0, vamos avançar. Podemos usar o ReSpeaker Core v2.0 para construir nosso próprio dispositivo AVS (Alexa Voice Service) ou dispositivo Dueros (assistente de voz da Baidu).

## Brincar com Wio Link

Siga o [Tutorial ReSpeaker Core V2 & Wio Link](https://wiki.seeedstudio.com/pt-br/ReSpeaker_Core_V2_&_Wio_Link/) para usar o ReSpeaker Core V2 para controlar o Wio Link através do IFTTT.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/OJ0i6QrZCSM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Brincar com GPIO

Esta parte apresentará como usar **MRAA** e **UPM** para controlar GPIO e o Grove Socket no Respeaker Core v2.0.

- **Passo 1. Atualizar as bibliotecas MRAA e UPM para a versão mais recente**

Primeiro, precisamos instalar os pacotes MRAA e UPM mais recentes.

```
sudo apt install  python-mraa python-upm libmraa1 libupm1 mraa-tools
```

- **Passo 2. Verificar as informações da sua plataforma**

```
#only have bus 0 and id=03(/dev/i2c-3), 0 is the i2c number for mraa and upm
respeaker@v2:~$ mraa-i2c list
Bus   0: id=03 type=linux

#mraa gpio numbers and system gpio numbers and it's pinmux
respeaker@v2:~$ mraa-gpio list
00      GPIO91: GPIO
01         VCC:
02      GPIO43: GPIO
03     GPIO127: GPIO
04      GPIO17: GPIO
05      GPIO67: GPIO
06         GND:
07      GPIO13: GPIO
08    I2C2_SCL: I2C  
09    I2C2_SDA: I2C  
10         VCC:
11         GND:
12      GPIO66: GPIO
```

A descrição da definição dos PINs para a placa ReSpeaker Core v2.0 está em [Pin Out](#)

- **Etapa 3. Demos com MRAA ou UPM**

**A. Usar a biblioteca MRAA**

**Controlar GPIO diretamente**

Materiais

| ReSpeaker Core v2.0 |  Grove - Buzzer |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png)|
|[Adquira agora](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

Conecte o pino **SIG** do sensor Grove PIR ao pino de cabeçalho **0** do ReSpeaker Core v2.0 com um jumper. Não se esqueça de conectar o VCC e o GND ao mesmo tempo. Depois digite o código abaixo no seu console

``` python
respeaker@v2:~$ python
Python 2.7.13 (default, Jan 19 2017, 14:48:08)
[GCC 6.3.0 20170118] on linux2
Type "help", "copyright", "credits" or "license" for more information.
>>> import mraa
>>> x = mraa.Gpio(0)
>>> x.dir(mraa.DIR_OUT)
0
>>> x.write(0)
0
>>> x.write(1)
0
>>>
```

Quando você digitar **x.write(1)**, você ouvirá um som agudo vindo do buzzer.

**Exemplo de Sensor de Movimento PIR**

Materiais

| ReSpeaker Core v2.0 |  Grove -  PIR Motion Sensor |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Grove%20-%20PIR%20Motion%20Sensor.jpg)|
|[Adquira agora](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[Adquira agora](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|

Neste exemplo, vamos escutar o disparo do sensor Grove PIR, em código Python.
Conecte o pino **D1** do sensor Grove PIR ao pino de cabeçalho **0** do ReSpeaker Core v2.0 com um jumper. Não se esqueça de conectar o VCC e o GND ao mesmo tempo.
Depois copie o código abaixo para um novo arquivo e salve-o como um arquivo python, com o nome **mraa_pir.py**. Copie este arquivo para o seu ReSpeaker Core v2.0.

``` python
import mraa

def on_trigger(gpio):
    print("pin " + repr(gpio.getPin(True)) + " = " + repr(gpio.read()))

pin = 0

try:
    x = mraa.Gpio(pin)
    print("Starting ISR for pin " + repr(pin))
    x.dir(mraa.DIR_IN)
    # respeaker v2 only support EDGE_BOTH
    x.isr(mraa.EDGE_BOTH, on_trigger, x)
    var = raw_input("Press ENTER to stop")
    x.isrExit()
except ValueError as e:
    print(e)

```

Depois execute o código com o comando abaixo. (certifique-se de que você está localizado na pasta que contém o mraa_pir.py que você acabou de salvar)

``` python
sudo python mraa_pir.py
```

O resultado será parecido com

```
$ sudo python mraa_pir.py
Starting ISR for pin 0
Press ENTER to stoppin 1091 = 0
pin 1091 = 0
pin 1091 = 1
...
```

**B. Usar a biblioteca UPM**

O projeto UPM implementa drivers de sensores com base na biblioteca MRAA, então não precisamos mais nos preocupar com a programação de GPIO ou qual é o endereço I2C de um sensor, todas as informações e lógicas padrão para um sensor específico foram encapsuladas em uma biblioteca UPM. UPM já oferece suporte a vários sensores. [UPM modules](https://iotdk.intel.com/docs/master/upm/modules.html). Mas observe que não confirmamos se todos os sensores funcionam no ReSpeaker Core v2.0.

**Exemplo para Grove Digital Light Sensor**

Materiais

| ReSpeaker Core v2 |  Grove - Digital Light Sensor |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Digital_Light_Sensor.jpg)|
|[Adquira agora](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|

Este é um exemplo para o Grove Digital Light Sensor, que foi copiado do repositório do UPM no GitHub.

Por favor conecte o PIR Motion Sensor ao seu Respeaker Core v2.0 através do conector Grove.
Depois copie o código abaixo para um novo arquivo e salve-o como um arquivo python, com o nome **tsl2561.py**. Copie este arquivo para o seu ReSpeaker Core v2.0.

``` python
#!/usr/bin/env python
# Author: Zion Orent <zorent@ics.com>
# Copyright (c) 2015 Intel Corporation.
#
# Permission is hereby granted, free of charge, to any person obtaining
# a copy of this software and associated documentation files (the
# "Software"), to deal in the Software without restriction, including
# without limitation the rights to use, copy, modify, merge, publish,
# distribute, sublicense, and/or sell copies of the Software, and to
# permit persons to whom the Software is furnished to do so, subject to
# the following conditions:
#
# The above copyright notice and this permission notice shall be
# included in all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
# EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
# MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
# LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
# OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
# WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

from __future__ import print_function
import time, sys, signal, atexit
from upm import pyupm_tsl2561 as upmTsl2561

def main():
    # Instantiate a digital light sensor TSL2561 on I2C
    myDigitalLightSensor = upmTsl2561.TSL2561()

    ## Exit handlers ##
    # This function stops python from printing a stacktrace when you hit control-C
    def SIGINTHandler(signum, frame):
        raise SystemExit

    # This function lets you run code on exit, including functions from myDigitalLightSensor
    def exitHandler():
        print("Exiting")
        sys.exit(0)

    # Register exit handlers
    atexit.register(exitHandler)
    signal.signal(signal.SIGINT, SIGINTHandler)

    while(1):
        print("Light value is " + str(myDigitalLightSensor.getLux()))
        time.sleep(1)
if __name__ == '__main__':
    main()
```

O resultado deve ser algo como:

``` python
respeaker@v2:~$ python tsl2561.py       
Light value is 0
Light value is 38
Light value is 20
Light value is 54
Light value is 13
Light value is 44
Light value is 31  
```

## FAQs

**Q1: Como gravar e reproduzir com o Audacity?**

  **A1:** A versão **lxqt** já tem o Audacity pré-instalado. Por favor clique no **Botão do Pássaro** no canto inferior esquerdo e você o encontrará em **Sound & Video -> Audacity**.

  Quando você abrir o Audacity, clique na pequena seta preta para escolher o dispositivo de gravação e reprodução e configure como na imagem abaixo.

  ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity.png)

  Você deve escolher Seeed-8mic-voicecard tanto para o dispositivo de gravação quanto para o de reprodução. E você pode escolher 1/2/4/6/8 canais para gravar e reproduzir. Como você pode ver,
  há 8 canais na imagem, porém não há dados nos canais 7 e 8. Isso porque esses dois canais são os canais de reprodução.
  O canal 7 é para o fone de ouvido de 3,5 mm e o canal 8 para o alto-falante JST2.0 (se você não tiver um cabo JST, também pode usar jumpers). Digamos que usamos o alto-falante JST:

- Etapa 1. Configure como na imagem acima, clique no botão **Record** e grave um período de áudio.
- Etapa 2. Clique no botão **Stop**, então você verá que os canais 7 e 8 estão vazios.
- Etapa 3. Clique no botão **Record** novamente, desta vez você verá que o Canal 8 mudou.

  ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity_playback.png)

**Q2: Como acessar o AP do ReSpeaker Core v2.0?**

**A2:** Você pode usar um cabo de dois fios para alimentar o ReSpeaker Core v2.0. Quando o sistema estiver em execução, o Respeaker Core v2.0 pode atuar como um AP. Você pode usar o seu computador para
acessar este AP. Como mostra a figura. Você pode seguir as etapas para configurar o WiFi do ReSpeaker Core v2.0.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Ap.png)

- **Etapa 1.** Digite o comando abaixo para ativar o Ap do ReSpeaker Core v2.0.

```
sudo systemctl enable re-wifi.service
sudo reboot -f

```

- **Etapa 2.** Acesse o AP do ReSpeaker Core v2.0. Após o ReSpeaker Core v2.0 reiniciar, use seu telefone ou computador para procurar o WiFi. Você encontrará que o nome do AP é algo como
   **ReSpeaker_xxxx**, o usuário é **respeaker** e a senha também é **respeaker**.

- **Etapa 3.** Agora você pode usar o Putty, modo SSH, para entrar no Console Serial. O IP da Wlan1 é **192.168.42.1**, você precisa usar esse IP para configurar a conexão.
E o nome de usuário do ReSpeaker Core v2.0 é **respeaker**, a senha é **respeaker**.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/AP2.png)

- **Etapa 3.** Quando você entrar no Console Serial, você pode [configurar o WiFi](https://wiki.seeedstudio.com/pt-br/ReSpeaker_Core_v2.0/#a-configuração-de-wi-fi)

**Q3: Como ajustar o volume?**

**A3:** Você pode usar o Alsamixer para ajustar o volume de reprodução e a sensibilidade de captura.

- **Etapa 1.** Digite o seguinte código para abrir o Alsamixer:

```
alsamixer
```

- **Etapa 2.** Pressione **F6** no seu teclado para escolher o cartão **Seeed-8mic-voicec**.
- **Etapa 3.** Você verá a interface como na imagem abaixo. Você pode escolher o canal de voz de reprodução ou de gravação pressionando a tecla **Right** ou **Left**.
E você pode ajustar o valor pressionando a tecla **Up** ou **Down**.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Alexamixer.png)

**Q4: Como usar o botão de usuário?**
**A4:** Como você pode ver, há um botão de usuário na parte de trás do ReSpeaker Core v2.0. Aqui fornecemos um demo em python para mostrar como usá-lo.

- **Etapa 1.** Digite o comando abaixo:

```
sudo pip install evdev
```

- **Etapa 2.** Copie o código abaixo e salve-o como um arquivo python, vamos chamá-lo de **usrer_button.py**.

```
from evdev import InputDevice,categorize,ecodes

key = InputDevice("/dev/input/event0")
for event in key.read_loop():
    if event.type == ecodes.EV_KEY:
        print(categorize(event))
```

- **Passo 3.** Toque o seguinte comando para executar esta demonstração.

```
sudo python usrer_button.py
```

Então você verá que o resultado é algo como isto:

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/userbutton.png)

**P5: O computador não consegue reconhecer o ReSpeaker Core v2.0, problema de driver?**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/CDC_Driver.png)

**R5:** Isso pode acontecer quando você conecta o ReSpeaker Core v2.0 ao seu computador via OTG ou UART.
Isso acontece porque o driver CDC Serial está em conflito com outro driver OTG. Por favor, desinstale o driver em conflito
 e conecte o ReSpeaker Core v2.0 novamente.

**P6: E se eu quiser usar a antena externa?**

**R6:** O ReSpeaker Core v2.0 usa **AP6212** para fornecer tanto WiFi quanto Bluetooth, eles compartilham a mesma antena.
Em vez da antena on-board, você pode usar uma antena externa. Para isso, você precisa remover uma resistência e soldá-la
nos novos pads, como mostrado abaixo：

- Primeiro você precisa remover a resistência na caixa laranja.
- Depois, por favor, solde-a na caixa verde.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ant.png)

**P7: Como construir meu próprio firmware de gravador? Assim posso gravar meu próprio firmware no restante dos ReSpeaker Core v2.0.**

**R7:** por favor execute o image builder em um sistema ARM debian com RAM>2G.

Aqui estão as instruções detalhadas.

- Passo 1. git clone [repositório image_builder](https://github.com/respeaker/image_builder)
- Passo 2. modifique o caminho de upload em /publish/respeaker.io_stable.sh
- Passo 3. sudo ./publish/respeaker.io_stable.sh

**P8: Quando conecto o cartão SD gravado ao ReSpeaker Core v2.0, não há porta COM no gerenciador de dispositivos e nenhuma exibição na interface HDMI.**

**R8:** Por favor, use o adaptador USB para TTL para conectar-se diretamente ao UART, você verá os erros abaixo.

```
[    2.119560] mmcblk0: timed out sending SET_BLOCK_COUNT command, card status 0x400900
[    2.128134] mmcblk0: command error, retrying timeout
```

A causa raiz é que os cartões SD antigos não funcionam com o sistema Linux. Por favor, mude para cartões SD mais recentes, que suportem todos os comandos eMMC, como ScanDisk Ultra.

## Recursos

- **[Algorithms]** [Algoritmos de processamento de áudio de front-end incluindo AEC, Beamforming, NS e KWS](https://github.com/respeaker/respeakerd)
- **[Google Assistant]** [Demo do Google Assistant](https://github.com/respeaker/googleassistant_respeakerd)
- **[Microsoft]** [Demo de Tradução de Fala da Microsoft](https://github.com/respeaker/Python-Speech-Translate)
- **[Pixel]** [Biblioteca de LEDs RGB](https://github.com/respeaker/pixel_ring)
- **[PDF]** [Baixar PDF desta Wiki](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2.pdf)
- **[PDF]** [Rockchip RK3229 Datasheet V1.1](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Rockchip%20RK3229%20Datasheet%20V1.1%2020151209.pdf)
- **[PDF]** [Dimensões da Placa](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2_Demensions.pdf)
- **[ZIP]** [Modelos 3D para ReSpeaker Core v2.0](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Respeaker_Core_v2_3D_SKP.zip)
- **[ZIP]** [Case para ReSpeaker Core v2.0](https://files.seeedstudio.com/wiki/Respeaker_V2/res/RESPEAKER_CORE_V2_Box.zip)
- **[DXF]** [Suporte para ReSpeaker Core v2.0](https://github.com/respeaker/get_started_with_respeaker/raw/8111196e821fec10c65b00d96cf011dc90111546/files/RESPEAKER_CORE_V2_CASE.dxf)
- **[PDF]** [Desenho de montagem do suporte do ReSpeaker Core v2.0](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2.0_case_Assembly.pdf)
- **[PDF]** [Especificação Acústica e Elétrica do ReSpeaker Core v2.0](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Acoustic%26Electrical_Specification_of_ReSpeaker_Core_v2.0.pdf)
- **[MoreReading]** [Página de documentação do Mraa em Python](http://iotdk.intel.com/docs/master/mraa/python/)
- **[MoreReading]** [Intel Mraa SDK](https://software.intel.com/en-us/mraa-sdk/documentation )
- **[MoreReading]** [Snips SDK](https://snips.gitbook.io/documentation/installing-snips/respeaker-core-2.0)
- **[Source Code]** [Código-fonte do ReSpeaker Core v2.0](https://github.com/respeaker/rk-linux-develop)

## Projetos

**ReSpeaker Core v2.0 - Demonstração com Alexa**

Nesta demonstração, usamos o ReSpeaker Core v2.0 para conversar com a Alexa. Você pode fazer qualquer pergunta e conversar com o ReSpeaker Core v2.0 como se fosse um amigo. Além disso, este produto também pode funcionar com o Google Assistant e o Bing. A hotword é Snowboy e, claro, você pode criar sua própria palavra de ativação.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/q7b8iLqRiPY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<br />

**ReSpeaker Core v2.0 - Teste de Distância de Ativação**

Nesta demonstração, testamos a distância de ativação do ReSpeaker Core v2.0. Usamos a Alexa com a hotword Snowboy. Como você pode ver na tela, o ''Alexa:status  code 204" significa que a Alexa foi ativada com sucesso.

Com algoritmos avançados e seis microfones de alta qualidade, o resultado é impressionante! Podemos ativar o ReSpeaker Core v2.0 a 16 metros (52 pés) de distância!

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/PpcwvOLlpEw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**ReSpeaker Core v2.0 - Sistema de Recepção por Voz**

Este sistema inteligente consiste em um assistente de voz (ReSpeaker Core v2.0) e um assistente de telefone (Linklt One). Como você pode ver, quando um visitante diz ao assistente de voz o nome da pessoa que está procurando, o pequeno assistente inteligente irá reconhecer e procurar a pessoa em seu banco de dados. Se houver um nome correspondente, nosso assistente irá ligar para ele. E quando a pessoa confirmar a identidade do visitante, ela só precisa enviar a mensagem "Open" para abrir a porta para que o visitante possa entrar.

Que tal ter um sistema de recepção por voz assim na frente da sua casa ou local de trabalho? Não é legal?

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/tdIsCRXKoVI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
<br />

**ReSpeaker Core v2.0 - Sistema Simples de Recepção por Voz**

A função básica do serviço de recepção é cumprimentar os visitantes, fazê-los sentir-se bem-vindos e evitar o acesso não autorizado ao escritório. Aproveitamos as funções do ReSpeaker Core v2.0 para projetar um Serviço de Recepção por Voz. O sistema pode interagir com o visitante e deixar uma mensagem para a pessoa a ser visitada. No futuro, podemos projetar um pequeno banco de dados de lista de telefones dos funcionários do escritório; o funcionário pode deixar uma mensagem para o sistema, o sistema usa as funções GPIO do ReSpeaker Core v2.0 para abrir as portas para o visitante. Usamos os serviços Microsoft Bing Speech to text e as APIs de mensagem Twilio/Tencent para desenvolver os scripts em Python. Para mais informações, consulte [Sistema de Recepção por Voz ReSpeaker](https://project.seeedstudio.com/SeeedStudio/respeaker-voice-reception-system-209a6c).

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/-nTOa3LLpVo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
