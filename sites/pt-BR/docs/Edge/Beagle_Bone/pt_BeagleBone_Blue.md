---
description: BeagleBone® Blue
title: BeagleBone® Blue
keywords:
  - Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BeagleBone_Blue
sku: 102990827
last_update:
  date: 1/10/2023
  author: jianjing Huang
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/BeagleBone_Blue/
---

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover.jpg" /></div>

BeagleBone® Blue é baseado no projeto de hardware open-source extremamente bem-sucedido do BeagleBone® Black, um computador de hardware aberto com alta capacidade de expansão, focado em makers e apoiado pela comunidade, criado pela BeagleBoard.Org Foundation.

BeagleBone® Blue combina a interface WiFi/Bluetooth WiLink™ flexível e de alto desempenho do BeagleBone® Black Wireless e os recursos de robótica do Robotics Cape da Strawson Design. O BeagleBone® Blue possui gerenciamento de bateria LiPo de 2 células (2S) onboard com carregador e LEDs de nível de bateria, 8 saídas para servomotores, 4 drivers para motores DC, 4 entradas de encoder quadratura, uma ampla variedade de conectores de GPIO e de protocolos seriais incluindo CAN, um IMU de 9 eixos e barômetro, 4 entradas ADC, uma interface USB de PC, uma porta host USB 2.0, um botão de reset, um botão de energia, dois botões configuráveis pelo usuário e seis LEDs indicadores. Construído sobre o System-In-Package da Octavo Systems que integra um processador TI ARM de alto desempenho e 512MB de DDR3, o BeagleBone® Blue inicializa o Linux em cerca de 10 segundos e permite que você comece a desenvolver através do seu navegador em menos de 5 minutos com apenas um único cabo USB.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos

----

- **Processador: Octavo Systems OSD3358 ARM® Cortex-A8 de 1GHz**
  - 512MB de RAM DDR3
  - Gerenciamento de energia integrado
  - 2× unidades programáveis em tempo real (PRUs) de 32 bits a 200 MHz
  - ARM Cortex-M3
  - Armazenamento flash eMMC onboard de 4GB, 8 bits, programado com Debian Linux

- **Conectividade e sensores**
  - Bateria: suporte a LiPo de 2 células com balanceamento, entrada de carregador de 9–18 V
  - Sem fio: 802.11bgn, Bluetooth 4.1 e BLE
  - Controle de motor: 8 saídas para servo de 6V, 4 saídas para motor DC, 4 entradas de encoder quadratura
  - Sensores: IMU de 9 eixos, barômetro
  - Conectividade: USB 2.0 de alta velocidade, cliente e host
  - Interface de usuário: 11 LEDs programáveis pelo usuário, 2 botões programáveis pelo usuário
  - Interfaces de fácil conexão para adicionar sensores adicionais, tais como:
    - GPS, rádio DSM2, UARTs, SPI, I2C, analógico 1,8V, GPIOs 3,3V

- **Compatibilidade de software**
  - [Debian](http://elinux.org/Beagleboard:BeagleBoneBlack_Debian)
  - [ROS](https://dscl.lcsr.jhu.edu/home/courses/me530707_2017_edumip_ros)
  - [ArduPilot](https://github.com/mirkix/ardupilotblue)
  - Programação gráfica com [LabVIEW](https://github.com/ktalke12/Labview-MiP)
  - Cloud9 IDE em Node.js com biblioteca BoneScript
  - E muito mais

## Especificação

----

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-dlfj{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:left;vertical-align:top}\n.tg .tg-l5ls{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:center;\n  vertical-align:top}\n.tg .tg-q7v3{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:top}\n.tg .tg-14gg{background-color:#ffffff;color:#000000;text-align:left;vertical-align:top}\n.tg .tg-88pu{background-color:#ffffff;color:#000000;font-size:16px;text-align:left;vertical-align:top}\n" }} />
  <table className="tg" style={{tableLayout: 'fixed', width: 824}}>
    <colgroup>
      <col style={{width: 275}} />
      <col style={{width: 252}} />
      <col style={{width: 297}} />
    </colgroup>
    <thead>
      <tr>
        <th className="tg-l5ls">Item</th>
        <th className="tg-l5ls" colSpan={2}>Descrição</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-q7v3">Processador<br />(Integrado no <br />OSD3358)</td>
        <td className="tg-dlfj" colSpan={2}>● AM335x ARM® Cortex-A8 de 1GHz<br />● Acelerador gráfico SGX530<br />● Acelerador de ponto flutuante NEON<br />● 2x microcontroladores PRU de 32 bits a 200MHz</td>
      </tr>
      <tr>
        <td className="tg-q7v3">Memória</td>
        <td className="tg-dlfj" colSpan={2}>● 512MB de RAM DDR3 800MHZ (Integrada no OSD3358)<br />● Armazenamento flash eMMC onboard de 4GB, 8 bits<br />● Conector SD/MMC para microSD</td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={18}><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />Conectividade<br /></td>
        <td className="tg-dlfj">Porta cliente USB 2.0 de alta velocidade</td>
        <td className="tg-14gg">Acesso ao USB0, modo Cliente via microUSB</td>
      </tr>
      <tr>
        <td className="tg-dlfj">Porta host USB 2.0 de alta velocidade</td>
        <td className="tg-14gg">Acesso ao USB1, conector tipo A, 500mA LS/FS/HS</td>
      </tr>
      <tr>
        <td className="tg-dlfj" rowSpan={6}><br /><br />WiLink1835 <br />WiFi 802.11 b/g/n 2,4GHz.<br />Suporta os seguintes modos:</td>
        <td className="tg-88pu">2x2 MIMO</td>
      </tr>
      <tr>
        <td className="tg-88pu">AP</td>
      </tr>
      <tr>
        <td className="tg-88pu">SmartConfig</td>
      </tr>
      <tr>
        <td className="tg-88pu">STA</td>
      </tr>
      <tr>
        <td className="tg-88pu">Wi-Fi Direct</td>
      </tr>
      <tr>
        <td className="tg-88pu">Malha sobre Wi-Fi baseada em 802.11s</td>
      </tr>
      <tr>
        <td className="tg-dlfj" rowSpan={3}><br />Porta serial<br /></td>
        <td className="tg-14gg">UART0, UART1, UART5 disponíveis via conectores JST de 4 pinos</td>
      </tr>
      <tr>
        <td className="tg-14gg">UART2 disponível via conector JST de 6 pinos (conector estilo EM-506 GPS)</td>
      </tr>
      <tr>
        <td className="tg-14gg">UART4 RX disponível via conector DSM2 de 3 pinos</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>WiLink 1835 Bluetooth 4.1 com BLE</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>I2C1 disponível via conector JST de 4 pinos</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>SPI1 CS0 (S1.1) e SPI1 CS1 (S1.2) disponíveis via conectores JST de 6 pinos</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>CAN disponível via conector JST de 4 pinos (inclui transceptor CAN TCAN1051)</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>8 GPIOs (GP0 e GPI1) disponíveis via conectores JST de 6 pinos</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>Entradas ADC de 0 a 3 disponíveis via conector JST de 6 pinos</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>Saída de energia 3,3VDC e 5VDC via conector JST de 4 pinos</td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={3}><br /><br />Gerenciamento de energia</td>
        <td className="tg-dlfj" colSpan={2}>O PMIC TPS65217C é usado junto com um LDO separado para fornecer energia ao sistema (Integrado no OSD3358)</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>Carregador de bateria LiPo de 2 células (2S) (alimentado por conector DC de 9 – 18VDC): <br />i., 4 LEDs de nível de bateria; <br />ii.,1 LED do carregador</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>Regulador de 6VDC 4A para acionar as saídas de servomotor</td>
      </tr>
      <tr>
        <td className="tg-q7v3">Suporte de depuração</td>
        <td className="tg-dlfj" colSpan={2}>Pontos de teste JTAG</td>
      </tr>
      <tr>
        <td className="tg-q7v3">Fonte de alimentação</td>
        <td className="tg-dlfj" colSpan={2}>i.,  microUSB USB,<br />ii., conector de bateria LiPo de 2 células (2S),<br />iii.,conector DC 9 - 18VDC</td>
      </tr>
      <tr>
        <td className="tg-q7v3">Entrada / Saída do usuário</td>
        <td className="tg-dlfj" colSpan={2}>i.,Botão de energia; ii.,Botão de reset; iii.,Botão de boot; iv.,2 botões configuráveis pelo usuário;<br />v.,6 LEDs configuráveis pelo usuário;vi LED de alimentação</td>
      </tr>
      <tr>
        <td className="tg-q7v3">Controle de motor (requer alimentação do conector DC ou bateria 2S)</td>
        <td className="tg-dlfj" colSpan={2}>i.,  4 drivers de motor DC,<br />ii., 4 entradas de encoder quadratura,<br />iii.,8 saídas de servomotor</td>
      </tr>
      <tr>
        <td className="tg-q7v3">Sensores<br /></td>
        <td className="tg-dlfj" colSpan={2}>i., IMU de 9 eixos,<br />ii.,Barômetro</td>
      </tr>
    </tbody>
  </table>
</div>

--------

## Ideias de aplicação

- Internet das Coisas

- Casa inteligente
- Industrial
- Automação e Controle de Processos
- Interface Homem-Máquina
- controle de motor
- controle de VANT
- Robô

## Visão geral do hardware

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Hardware_overviw.png" /></div>

## Primeiros passos

----

### Preparação

#### ETAPA1. Atualize para a imagem mais recente

Quando você receber um BeagleBone®Blue da Seeed, a imagem já está gravada no eMMC onboard. O que significa que você pode pular esta etapa. No entanto, recomendamos fortemente que você atualize para a imagem mais recente.

**i.** Clique e baixe a imagem mais recente em [beagleboard.org](https://beagleboard.org/latest-images).

:::note
As imagens "IoT" fornecem mais espaço livre em disco se você não precisar usar uma interface gráfica de usuário (GUI). Devido às necessidades de tamanho, esse download pode levar 30 minutos ou mais.
:::

A distribuição Debian é fornecida para as placas. O arquivo que você baixar terá uma extensão .img.xz. Esta é uma imagem compactada, setor a setor, do cartão SD.

**ii.** Conecte o cartão SD ao seu PC ou MAC com um leitor de cartão SD. Você precisa de um cartão SD com capacidade superior a 4G.

**iii.** Baixe e instale o [Etcher](https://etcher.io/)

Clique para baixar aqui e grave o arquivo ```*.img.xz``` diretamente no seu cartão SD com o Etcher. Ou descompacte o arquivo ```*.img.xz``` para um arquivo ```*.img``` e então grave-o no cartão SD com outras ferramentas de gravação de imagem.

Clique no ícone de Mais para adicionar a imagem que você acabou de baixar, o software selecionará automaticamente o cartão SD que você conectou. Então clique em Flash! para iniciar a gravação. Levará cerca de 20 minutos para gravar.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Respeaker_V2/raw/master/img/v2-flash-sd.png" /></div>

Em seguida, ejete o cartão SD e insira-o no seu BeagleBone® Blue.

#### ETAPA2. Alimentar e inicializar

Conecte o BeagleBone® Blue ao seu computador com o cabo Micro-USB.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/connect.jpg" /></div>

:::caution
Por favor conecte o cabo USB cuidadosamente, caso contrário você pode danificar a interface. Por favor use o cabo USB com 4 fios internos, o cabo de 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, você pode clicar aqui para comprar. Se você quiser usar os módulos de controle de motor do BeagleBone® Blue, a alimentação via porta USB não é suficiente, você precisa usar a porta DC-DC ou bateria 2S.
:::

Você verá o LED de energia (PWR ou ON) acender de forma constante. Em cerca de um minuto, você deverá ver os outros LEDs piscando em suas configurações padrão.

- O USR0 é tipicamente configurado na inicialização para piscar em um padrão de batimento cardíaco
- O USR1 é tipicamente configurado na inicialização para acender durante acessos ao cartão SD (microSD)
- O USR2 é tipicamente configurado na inicialização para acender durante a atividade da CPU
- O USR3 é tipicamente configurado na inicialização para acender durante acessos à eMMC
- O LED WIFI é tipicamente configurado na inicialização para acender com a associação à rede WiFi (apenas BeagleBone® Blue)

Com as imagens mais recentes, não deve mais ser necessário instalar drivers para o seu sistema operacional para lhe proporcionar acesso de rede via USB ao seu Beagle. Caso você esteja executando uma imagem mais antiga, um sistema operacional mais antigo ou precise de drivers adicionais para acesso serial a placas mais antigas, links para os drivers antigos estão abaixo.

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-gvcd{background-color:#ffffff;border-color:#000000;color:#000000;text-align:left;vertical-align:top}\n.tg .tg-l0dh{background-color:#ffffff;border-color:#000000;color:#000000;text-align:center;text-decoration:underline;\n  vertical-align:top}\n.tg .tg-v0nz{background-color:#ffffff;border-color:#000000;color:#000000;text-align:center;vertical-align:top}\n.tg .tg-wzu8{background-color:#ffffff;border-color:#000000;color:#000000;font-weight:bold;text-align:center;vertical-align:top}\n" }} />
  <table className="tg" style={{tableLayout: 'fixed', width: 826}}>
    <colgroup>
      <col style={{width: 148}} />
      <col style={{width: 155}} />
      <col style={{width: 523}} />
    </colgroup>
    <thead>
      <tr>
        <th className="tg-wzu8">Sistema Operacional</th>
        <th className="tg-wzu8">Drivers USB</th>
        <th className="tg-wzu8">Comentários</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-v0nz">Windows <br />(64-bit)</td>
        <td className="tg-l0dh"><a href="https://beagleboard.org/static/Drivers/Windows/BONE_D64.exe" target="_blank" rel="noopener noreferrer">Instalador 64-bit</a><br /></td>
        <td className="tg-gvcd" rowSpan={2}>Em caso de dúvida, tente primeiro o instalador 64-bit.<br /><br />● O aviso de Certificação de Driver do Windows pode aparecer duas ou três vezes. Clique em "Ignore", "Install" ou "Run"<br />● Para verificar se você está executando Windows 32 ou 64-bit veja isto aqui<a href="https://support.microsoft.com/kb/827218" target="_blank" rel="noopener noreferrer">Link</a>.<br />● Em sistemas sem a última versão de serviço, você pode receber um erro (0xc000007b). Nesse caso, clique aqui para instalar e tentar novamente.<br />● Pode ser necessário reiniciar o Windows.<br />● Esses drivers foram testados e funcionam até o Windows 10.</td>
      </tr>
      <tr>
        <td className="tg-v0nz">Windows <br />(32-bit)</td>
        <td className="tg-l0dh"><a href="https://beagleboard.org/static/Drivers/Windows/BONE_DRV.exe" target="_blank" rel="noopener noreferrer">Instalador 32-bit</a><br /></td>
      </tr>
      <tr>
        <td className="tg-v0nz">Mac OS X<br /></td>
        <td className="tg-v0nz"> <a href="https://beagleboard.org/static/Drivers/MacOSX/RNDIS/HoRNDIS.pkg" target="_blank" rel="noopener noreferrer">Rede</a> <a href="https://beagleboard.org/static/Drivers/MacOSX/FTDI/EnergiaFTDIDrivers2.2.18.pkg" target="_blank" rel="noopener noreferrer">Serial</a></td>
        <td className="tg-gvcd">Instale tanto o driver de Rede quanto o Serial.</td>
      </tr>
      <tr>
        <td className="tg-v0nz">Linux</td>
        <td className="tg-l0dh"><a href="https://beagleboard.org/static/Drivers/Linux/FTDI/mkudevrule.sh" target="_blank" rel="noopener noreferrer">mkudevrule.sh</a></td>
        <td className="tg-gvcd">A instalação de driver não é necessária, mas você pode achar algumas regras udev úteis.</td>
      </tr>
    </tbody>
  </table>
</div>

#### ETAPA3. Acessar seu Beagle

Usando Chrome ou Firefox (Internet Explorer NÃO funcionará), acesse o servidor web em execução na sua placa. Ele carregará uma apresentação mostrando as capacidades da placa. Use as teclas de seta do seu teclado para navegar pela apresentação.

Quando a inicialização terminar, um adaptador de rede deverá aparecer no seu computador. Você pode clicar para entrar no [Cloud 9 IDE](http://beaglebone.local:3000/).

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cloud9.png" /></div>

#### ETAPA4. Conectar ao WiFi

Abra um novo terminal e então digite o comando abaixo

```
root@beaglebone:/var/lib/cloud9# connmanctl
connmanctl> enable wifi
Enabled wifi
connmanctl> tether wifi disable
Error disabling wifi tethering: Already disabled
connmanctl> scan wifi
Scan completed for wifi
connmanctl> services
*AO seeed                wifi_f45eabf743ad_7365656564_managed_psk
    CHAIHUOMAKERS        wifi_f45eabf743ad_4348414948554f4d414b455253_managed_psk
    DIRECT-99-HP DeskJet 4670 series wifi_f45eabf743ad_4449524543542d39392d4850204465736b4a6574203436373020736572696573_managed_psk
    mostfun-5bf7         wifi_f45eabf743ad_6d6f737466756e2d35626637_managed_psk
    DIRECT-TNDESKTOP-71PTKLKmsXO wifi_f45eabf743ad_4449524543542d544e4445534b544f502d373150544b4c4b6d73584f_managed_psk
    HPKJ                 wifi_f45eabf743ad_48504b4a_managed_psk
    ChinaNet-yTGy        wifi_f45eabf743ad_4368696e614e65742d79544779_managed_psk
    GPKJ1                wifi_f45eabf743ad_47504b4a31_managed_psk
    GUMO                 wifi_f45eabf743ad_47554d4f_managed_psk
    jdsfkf               wifi_f45eabf743ad_6a6473666b66_managed_psk
connmanctl> agent on
Agent registered
connmanctl> connect wifi_f45eabf743ad_7365656564_managed_psk
Error /net/connman/service/wifi_f45eabf743ad_7365656564_managed_psk: Already connected
connmanctl> quit
root@beaglebone:/var/lib/cloud9# ifconfig wlan0
wlan0     Link encap:Ethernet  HWaddr f4:5e:ab:f7:43:ad  
          inet addr:192.168.199.145  Bcast:192.168.199.255  Mask:255.255.255.0
          inet6 addr: fe80::f65e:abff:fef7:43ad/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST DYNAMIC  MTU:1500  Metric:1
          RX packets:8920 errors:0 dropped:0 overruns:0 frame:0
          TX packets:3531 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:1166820 (1.1 MiB)  TX bytes:3352208 (3.1 MiB)

root@beaglebone:/var/lib/cloud9#
```

Quando você digitar ```ifconfig wlan0``` e o endereço de internet for algo como 192.168.199.145, parabéns, você se conectou ao WiFi com sucesso.

Quando o BeagleBone® Blue se conectar à Internet, recomendamos fortemente que você use o comando abaixo para atualizar seu BeagleBone® Blue.

```
sudo apt-get update
sudo apt-get upgrade
```

Pode levar bastante tempo para atualizar, mas vale a pena.

### Demo.1  Piscar

Este é um demo em Javascript.

Clique no botão **File->New File->** no canto superior direito do Cloud9 IDE.

:::note
depois de criar o arquivo, não se esqueça de salvá-lo e adicionar o tipo de arquivo.
:::

copie o código abaixo e clique em **Run**

```
var b = require('bonescript');

var state = b.LOW;

b.pinMode("USR0", b.OUTPUT);
b.pinMode("USR1", b.OUTPUT);
b.pinMode("USR2", b.OUTPUT);
b.pinMode("USR3", b.OUTPUT);
setInterval(toggle, 1000);

function toggle() {
    if(state == b.LOW) state = b.HIGH;
    else state = b.LOW;
    b.digitalWrite("USR2", state);
}
```

Então você verá o LED USER2 piscar.

### Demo.2  USAR GPIO com Grove-LED

**Passo 1.** Por favor prepare os itens conforme a lista de peças abaixo.

| BeagleBone® Blue | Grove - LED Socket Kit|Cabo adaptador Grove (6 pinos)|
|--------------|-------------|-------|
|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover_icon.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove-White-LED-p-2016.jpeg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove_4pin.jpg" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Universal-4-Pin-to-Beaglebone-Blue-6-Pin-Female-JST%2FSH-Conversion-Cable-%2810-pcs-pack%29-p-3027.html)|

**Passo 2.** Conecte o LED Socket Kit à interface **GPIO** de 6 pinos do BeagleBone® Blue.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/LED.jpg" /></div>

**Passo 3.** Abra um novo terminal no Cloud9 IDE e digite o código abaixo neste terminal.

```
cd /sys/class/gpio
echo 49 >export
cd gpio49
echo out >direction
while sleep 1;
do echo 0 >value;
sleep 1;
echo 1 >value;
done

```

Agora você verá o seu LED acender no modo de batimento cardíaco.

### Demo.3  USAR UART com Grove-GPS

**Passo 1.** Por favor, prepare o material conforme a lista de peças abaixo.

| BeagleBone® Blue | Grove - LED Socket Kit|Cabo adaptador Grove (4 pinos)|
|--------------|-------------|-------|
|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover_icon.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove-GPS.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove_4pin.jpg" /></div>|
|[Compre AGORA](https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html)|[Compre AGORA](https://www.seeedstudio.com/grove-gps-p-959.html)|[Compre AGORA](https://www.seeedstudio.com/category/Grove-Universal-4-Pin-to-Beaglebone-Blue-4-Pin-Female-JST-SH-Conversion-Cable-(10-pcs-pack)-p-3026.html)|

**Passo 2.** Conecte o sensor Grove-GPS à interface **UART1** de 4 pinos do BeagleBone® Blue.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/GPS_hARD.jpg" /></div>

**Passo 3.** Abra um novo terminal no Cloud9 IDE e digite o código abaixo neste terminal.

```
apt install tio
tio /dev/ttyO1 -b 9600
```

Então você verá as informações de GPS no terminal como mostrado na figura abaixo.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/GPS.png" /></div>

### Demo.4  USAR I2C com Grove-Digital Light Sensor

**Passo 1.** Por favor, prepare o material conforme a lista de peças abaixo.

| BeagleBone® Blue | Grove - LED Socket Kit|Cabo adaptador Grove (4 pinos)|
|--------------|-------------|-------|
|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover_icon.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Digital_Light_Sensor.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove_4pin.jpg" /></div>|
|[Compre AGORA](https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html)|[Compre AGORA](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|[Compre AGORA](https://www.seeedstudio.com/category/Grove-Universal-4-Pin-to-Beaglebone-Blue-4-Pin-Female-JST-SH-Conversion-Cable-(10-pcs-pack)-p-3026.html)|

**Passo 2.** Conecte o Grove-Digital Light Sensor à interface **I2C** de 4 pinos do BeagleBone® Blue.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Digital_light.jpg" /></div>

**Passo 3.** Abra um novo terminal no Cloud9 IDE e digite o código abaixo neste terminal.

```
cd /sys/bus/i2c/devices/i2c-1;
echo tsl2561 0x29 >new_device;
watch -n0 cat 1-0029/iio\:device0/in_illuminance0_input

```

Então você obterá o valor de luminosidade como na figura abaixo.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Digital_520.png" /></div>

## Lista de Compatibilidade Grove

Grove é um sistema modular de prototipagem com conector padronizado. Grove adota uma abordagem de blocos de construção para montar eletrônica. Em comparação com o sistema baseado em jumpers ou solda, ele é mais fácil de conectar, experimentar e construir e simplifica o sistema de aprendizado, mas não a ponto de ficar simplório. Alguns dos outros sistemas de prototipagem por aí levam o nível até blocos de montar. É uma boa forma de aprender, mas o sistema Grove permite que você construa sistemas reais. Ele exige algum aprendizado e experiência para conectar as coisas.

A lista abaixo mostra os módulos Grove que funcionam bem com o BeagleBone® Blue.

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-fhi2{background-color:#ffffff;color:#000000;font-size:20px;font-weight:bold;text-align:center;vertical-align:top}\n.tg .tg-366q{background-color:#ffffff;color:#000000;font-size:18px;text-align:center;vertical-align:top}\n" }} />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-fhi2">SKU</th>
        <th className="tg-fhi2">Item</th>
        <th className="tg-fhi2">Tipo de E/S</th>
        <th className="tg-fhi2">Tensão de Trabalho</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-366q">101020017</td>
        <td className="tg-366q">Grove - Rotary Angle Sensor</td>
        <td className="tg-366q">Analógica</td>
        <td className="tg-366q">Pode funcionar em 1.8V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020048</td>
        <td className="tg-366q">Grove - Rotary Angle Sensor(P)</td>
        <td className="tg-366q">Analógica</td>
        <td className="tg-366q">Pode funcionar em 1.8V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020036</td>
        <td className="tg-366q">Grove - Slide Potentiometer</td>
        <td className="tg-366q">Analógica</td>
        <td className="tg-366q">Pode funcionar em 1.8V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020031</td>
        <td className="tg-366q">Grove - Piezo Vibration Sensor</td>
        <td className="tg-366q">Analógica</td>
        <td className="tg-366q">Pode funcionar em 1.8V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020003</td>
        <td className="tg-366q">Grove - Button</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">111020000</td>
        <td className="tg-366q">Grove - Button(P)</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">111020001</td>
        <td className="tg-366q">Grove - Encoder</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020004</td>
        <td className="tg-366q">Grove - Switch(P)</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020025</td>
        <td className="tg-366q">Grove - Tilt Switch</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020018</td>
        <td className="tg-366q">Grove - Water Sensor</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020005</td>
        <td className="tg-366q">Grove - Collision Sensor</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020030</td>
        <td className="tg-366q">Grove - Mouse Encoder</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030007</td>
        <td className="tg-366q">Grove - Green LED</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030005</td>
        <td className="tg-366q">Grove - Red LED</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020172</td>
        <td className="tg-366q">Grove - Line Finder v1.1</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020018</td>
        <td className="tg-366q">Grove - Water Sensor</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020019</td>
        <td className="tg-366q">Grove - Temperature&amp;Humidity Sensor Pro</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020020</td>
        <td className="tg-366q">Grove - PIR Motion Sensor</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020052</td>
        <td className="tg-366q">Grove - GSR sensor</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020175</td>
        <td className="tg-366q">Grove - IR Distance Interrupter v1.2</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020033</td>
        <td className="tg-366q">Grove - Ear-clip Heart Rate Sensor</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020037</td>
        <td className="tg-366q">Grove - Touch Sensor</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020030</td>
        <td className="tg-366q">Grove - Sensor de Luz Digital</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020232</td>
        <td className="tg-366q">Grove - Reconhecimento de Fala v1.0</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020005</td>
        <td className="tg-366q">Grove - Sensor de Colisão</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">105020005</td>
        <td className="tg-366q">Grove - Driver EL</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030009</td>
        <td className="tg-366q">Grove - LED Branco</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030010</td>
        <td className="tg-366q">Grove - LED Azul</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030005</td>
        <td className="tg-366q">Grove - LED Vermelho</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030007</td>
        <td className="tg-366q">Grove - LED Verde</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030014</td>
        <td className="tg-366q">Grove - LED de Flash Multicolorido (5mm)</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104020001</td>
        <td className="tg-366q">Grove - LED de Cor Variável</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104020005</td>
        <td className="tg-366q">Grove - Cordão de Luz de LED</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104020048</td>
        <td className="tg-366q">Grove - LED RGB Encadeável v2.0</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020004</td>
        <td className="tg-366q">Grove - Interruptor(P)</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">111020000</td>
        <td className="tg-366q">Grove - Botão(P)</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020003</td>
        <td className="tg-366q">Grove - Botão</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020038</td>
        <td className="tg-366q">Grove - Interruptor Magnético</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020025</td>
        <td className="tg-366q">Grove - Interruptor de Inclinação</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020005</td>
        <td className="tg-366q">Grove - Relé</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">107020000</td>
        <td className="tg-366q">Grove - Buzzer</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020014</td>
        <td className="tg-366q">Grove - Relé Reed Seco</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">105020003</td>
        <td className="tg-366q">Grove - Motor de Vibração</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">108020021</td>
        <td className="tg-366q">Grove - Mini Ventilador v1.1</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020004</td>
        <td className="tg-366q">Grove - Relé de Estado Sólido</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020007</td>
        <td className="tg-366q">Grove - Terminal de Parafuso</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020008</td>
        <td className="tg-366q">Grove - MOSFET</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020212</td>
        <td className="tg-366q">Grove - Sensor de Temperatura e Umidade (SHT31)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020192</td>
        <td className="tg-366q">Grove - Sensor de Barômetro (BMP280)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020080</td>
        <td className="tg-366q">Grove - IMU 9DOF v2.0</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020054</td>
        <td className="tg-366q">Grove - Acelerômetro Digital de 3 Eixos (±16g)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020252</td>
        <td className="tg-366q">Grove - IMU 10DOF v2.0</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020193</td>
        <td className="tg-366q">Grove - Sensor de Barômetro (BME280)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020082</td>
        <td className="tg-366q">Grove - Sensor de Frequência Cardíaca de Presilha de Dedo com Caixa</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020050</td>
        <td className="tg-366q">Grove - Giroscópio Digital de 3 Eixos</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020024</td>
        <td className="tg-366q">Grove - Sensor de Frequência Cardíaca de Presilha de Dedo</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020081</td>
        <td className="tg-366q">Grove - Acelerômetro e Bússola de 6 Eixos v2.0</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020071</td>
        <td className="tg-366q">Grove - Acelerômetro Digital de 3 Eixos (±400g)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030008</td>
        <td className="tg-366q">Grove - Display OLED 0,96''</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030011</td>
        <td className="tg-366q">Grove - Display OLED 1,12''</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020006</td>
        <td className="tg-366q">Grove - Hub I2C</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020013</td>
        <td className="tg-366q">Grove - ADC I2C</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">113020003</td>
        <td className="tg-366q">Grove - GPS</td>
        <td className="tg-366q">UART</td>
        <td className="tg-366q">3.3V</td>
      </tr>
    </tbody>
  </table>
</div>

## FAQs

Clique aqui para ver todas as FAQs do BeagleBone® Blue.

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/BeagleBone_Blue_eagle-file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

-----

- **[Schematic]** [Esquemático do BeagleBone® Blue](https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/BeagleBone_Blue_eagle-file.zip)
- **[Grove]** [Lista de Compatibilidade Grove do BeagleBone® Blue.xlsx](https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/res/Beaglebone%20Blue%20Grove%20Compatibility%20List.xlsx)
- **[MoreReading]** [Página Principal do BeagleBoard](http://beagleboard.org/)
- **[MoreReading]** [Primeiros Passos com BeagleBoard](http://beagleboard.org/getting-started)
- **[MoreReading]** [Solução de Problemas](http://beagleboard.org/getting-started#troubleshooting)
- **[MoreReading]** [Documentação de Hardware](http://beagleboard.org/getting-started#hardware)
- **[MoreReading]** [Projetos do BeagleBoard](http://beagleboard.org/project)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
