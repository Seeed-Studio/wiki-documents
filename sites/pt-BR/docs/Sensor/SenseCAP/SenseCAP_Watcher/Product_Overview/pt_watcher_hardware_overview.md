---
description: Componentes de hardware do SenseCAP Watcher.
title: Visão Geral do Hardware
image: https://files.seeedstudio.com/wiki/watcher_getting_started/hardware_overview_1.webp
slug: /watcher_hardware_overview
sidebar_position: 1
last_update:
  date: 10/18/2024
  author: Citric, Djair
createdAt: '2024-10-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/watcher_hardware_overview/
---

# Visão Geral do Hardware do SenseCAP Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware_overview.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Vídeo do Watcher</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Repositório Github</font></span></strong>
    </a>
</div><br />

Nesta seção do Wiki, focaremos nos componentes de hardware do SenseCAP Watcher, sua construção e o uso de acessórios adicionais.

## Especificações

<div class="table-center">
    <table align="center">
        <tr>
            <th>Hardware</th>
            <th>Descrição</th>
        </tr>
        <tr>
            <td align="center">MCU</td>
            <td align="center">ESP32-S3 @240MHz 8MB PSRAM</td>
        </tr>
        <tr>
            <td align="center">Processador de IA Embutido</td>
            <td align="center">Himax HX6538 (Cortex M55 + Ethos-U55)</td>
        </tr>
        <tr>
            <td align="center">Câmera</td>
            <td align="center">OV5647 120° FOV <br /> Foco Fixo em 3 metros</td>
        </tr>
        <tr>
            <td align="center">Wi-Fi</td>
            <td align="center">Compatível com IEEE 802.11b/g/n<br />Banda de 2,4GHz<br />Alcance Sem Fio: Até 100 metros (teste em espaço aberto)</td>
        </tr>
        <tr>
            <td align="center">Bluetooth LE</td>
            <td align="center">Bluetooth 5</td>
        </tr>
        <tr>
            <td align="center">Antena</td>
            <td align="center">Antena Wi-Fi e BLE embutida</td>
        </tr>
        <tr>
            <td align="center">Display</td>
            <td align="center">Tela sensível ao toque de 1,45 polegada, resolução 412×412</td>
        </tr>
        <tr>
            <td align="center">Microfone</td>
            <td align="center">Microfone único</td>
        </tr>
        <tr>
            <td align="center">Alto-falante</td>
            <td align="center">Saída de alto-falante de 1W</td>
        </tr>
        <tr>
            <td align="center">Roda</td>
            <td align="center">Suporta rolagem para cima e para baixo e botão</td>
        </tr>
        <tr>
            <td align="center">LED</td>
            <td align="center">1x luz RGB para indicação</td>
        </tr>
        <tr>
            <td align="center">Slot para Cartão microSD</td>
            <td align="center">Suporta cartão microSD FAT32 de até 32GB</td>
        </tr>
        <tr>
            <td align="center">Flash</td>
            <td align="center">32MB de Flash para ESP32-S3<br />16MB de Flash para Himax HX6538</td>
        </tr>
        <tr>
            <td align="center">Interface de Extensão</td>
            <td align="center">1x interface Grove IIC<br />2x4 Header fêmea (1xIIC, 2xGPIO, 2xGND, 1x3.3V_OUT, 1x5V_IN)</td>
        </tr>
        <tr>
            <td align="center">USB-C</td>
            <td align="center">1x USB-C na parte de trás (apenas alimentação)<br />1x USB-C na parte inferior (alimentação e programação)</td>
        </tr>
        <tr>
            <td align="center">Botão de Reset</td>
            <td align="center">1x botão RST no orifício inferior</td>
        </tr>
        <tr>
            <td align="center">Fonte de Alimentação</td>
            <td align="center">Alimentação DC de 5V</td>
        </tr>
        <tr>
            <td align="center">Bateria</td>
            <td align="center">Bateria Li-ion de 3,7V 400mAh como energia de backup</td>
        </tr>
        <tr>
            <td align="center">Temperatura de Operação</td>
            <td align="center">0 ~ 45°C</td>
        </tr>
        <tr>
            <td align="center">Suporte de Montagem</td>
            <td align="center">Suporta instalação em parede, mesa e suporte<br />1 x roda universal e placa de base com adesivo<br />1 x conjunto adaptador fêmea 1/4"</td>
        </tr>
    </table>
</div>

## Recursos

- Arquitetura de alta eficiência com processamento de IA no dispositivo + servidor
- Extensível com Infinite Modal
- Garantia de privacidade com código aberto e implantação local (on‑premise)
- Respostas emocionais personalizáveis

## Vista Frontal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-1.png" style={{width:1000, height:'auto'}}/></div>

## Vista Traseira

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-2.png" style={{width:1000, height:'auto'}}/></div>

## Parte Interna

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-3.png" style={{width:1000, height:'auto'}}/></div>

## Interface de Montagem

Na parte de trás do seu dispositivo Watcher, você encontrará um Suporte de Montagem que permite fixar o dispositivo com segurança em várias superfícies ou acessórios. Atualmente, oferecemos dois tipos de suportes de montagem para acomodar diferentes necessidades de posicionamento:

:::tip
Observe que o corpo do Watcher vem apenas com o Suporte Giratório de 360°. Se você precisar do Suporte de Tripé com Rosca 1/4, por favor [compre](https://www.seeedstudio.com/Mini-Tripod-p-5978.html) separadamente.
:::

### Suporte Giratório de 360°

- Este suporte é projetado para fácil instalação em paredes ou outras superfícies verticais.
- Ele oferece rotação total de 360 graus, permitindo ajustar a orientação do seu dispositivo Watcher para atingir o ângulo de visão desejado.
- O suporte giratório oferece flexibilidade no posicionamento e garante uma fixação segura à parede.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/omni_wheel_bracket.gif" style={{width:650, height:'auto'}}/></div><br />

### Suporte de Tripé com Rosca 1/4

- Este suporte é ideal para posicionar seu Watcher em superfícies planas, como mesas, bancadas ou prateleiras.
- Ele possui uma rosca padrão de 1/4 de polegada, tornando-o compatível com a maioria dos tripés e outros acessórios de montagem.
- O suporte de tripé oferece estabilidade e permite posicionar seu Watcher em várias alturas e ângulos, dependendo das suas necessidades específicas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/threaded_bracket.gif" style={{width:650, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Mini-Tripod-p-5978.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora</font></span></strong>
    </a>
</div>

Para usar qualquer um desses suportes de montagem, siga estas etapas gerais:

1. Escolha o suporte apropriado com base no local de posicionamento desejado (parede ou superfície plana).

2. Prenda o suporte selecionado ao Suporte de Montagem na parte de trás do seu dispositivo Watcher. Garanta uma conexão firme para evitar qualquer desprendimento acidental.

3. Para o Suporte Giratório de 360°:
   - Identifique o local desejado na parede onde você quer instalar seu Watcher.
   - Use os parafusos e buchas fornecidos (se necessário) para fixar o suporte com segurança na parede.
   - Ajuste a orientação do seu Watcher girando-o até o ângulo desejado.

4. Para o Suporte de Tripé com Rosca 1/4:
   - Selecione uma superfície plana e estável onde você quer colocar seu Watcher.
   - Se estiver usando um tripé, conecte o tripé ao suporte usando a rosca de 1/4 de polegada.
   - Ajuste a altura e o ângulo do tripé para obter a posição de visualização ideal para o seu Watcher.

5. Quando seu Watcher estiver firmemente montado com qualquer um dos suportes, você poderá conectá-lo à alimentação e configurá-lo de acordo com suas preferências.

Ao oferecer essas duas opções de suportes de montagem, buscamos proporcionar flexibilidade e conveniência na integração do seu dispositivo Watcher em vários ambientes. Quer você prefira uma instalação na parede ou uma disposição adequada para a mesa, nossos suportes garantem uma instalação segura e ajustável.

:::tip
Observe que o corpo do Watcher não vem com nenhum dos suportes abaixo, portanto, se você precisar de um suporte, compre-o separadamente.
:::

## Diagrama de Hardware

Dando continuidade à arquitetura de hardware do Watcher, vamos nos aprofundar nos detalhes fornecidos no diagrama.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/Diagram.png" style={{width:1000, height:'auto'}}/></div>

O coração do Watcher é o MCU Principal, que é um chip **ESP32-S3**. Este poderoso microcontrolador opera a 240MHz e vem com 8MB de PSRAM para processamento eficiente e gerenciamento de memória.

O ESP32-S3 se comunica com vários periféricos e interfaces:

1. **Display**: Ele se conecta a uma Tela LCD Touch **1,45 polegada 412*412** via interface SPI/I2C, permitindo uma interação intuitiva do usuário e uma saída visual vibrante.

2. **Áudio**: A interface I2S permite que o ESP32-S3 se comunique com um alto-falante e um microfone, facilitando capacidades de entrada e saída de áudio.

3. **Armazenamento**: O Watcher é equipado com um módulo Flash 32M, conectado via interface SPI, fornecendo amplo armazenamento para firmware, dados e arquivos do usuário.

4. **Conectividade Sem Fio**: O ESP32-S3 integra funcionalidade Wi-Fi e BLE, permitindo comunicação sem fio perfeita com outros dispositivos e redes.

5. **Expansibilidade**: Uma Porta de Expansão, conectada via interface I2C, permite futuras adições de hardware e personalização.

6. **Entrada do Usuário**: Uma roda de discagem, conectada via GPIO/PWM, oferece uma forma intuitiva para os usuários navegarem e controlarem as funções do Watcher.

7. **Armazenamento Externo**: Um slot para cartão Micro SD, interligado via SPI, permite que os usuários estendam a capacidade de armazenamento do Watcher para dados adicionais e arquivos de mídia.

8. **Energia e Dados**: Uma porta USB está disponível para carregar a bateria de 400mAh e transferir dados entre o Watcher e outros dispositivos.

O MCU de IA, um chip Himax HX6538 com núcleos Cortex M55 e US5, trabalha em conjunto com o MCU Principal para lidar com tarefas e cálculos relacionados à IA, aprimorando as capacidades inteligentes do Watcher.

Por fim, o Watcher apresenta um módulo de câmera OV5647, provavelmente conectado via interface MIPI, permitindo aplicações de visão computacional e sensoriamento visual.

Essa arquitetura de hardware abrangente permite que o Watcher ofereça uma experiência de usuário rica em recursos e versátil, combinando display, áudio, conectividade sem fio, armazenamento e capacidades de IA em um design compacto e eficiente.

## Carregando o Watcher

Há um total de duas portas USB-C no Watcher, permitindo que os usuários encontrem a fonte de alimentação mais apropriada para cada uma das diferentes posições de uso do Watcher.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/charging.png" style={{width:1000, height:'auto'}}/></div>

Ao carregar o Watcher, certifique-se de usar um adaptador de energia de um fabricante confiável; recomendamos usar uma especificação de alimentação de **5V/1A** para alimentar o Watcher. Se você quiser se comunicar com o Watcher, talvez seja necessário usar um cabo USB-C compatível com fio de sinal.

:::caution
Use um plugue de energia que seja compatível com o Watcher; o Watcher deve ser alimentado por uma fonte de 5V e pode queimar se você usar um adaptador de energia não compatível ou uma fonte com tensão superior a 5V!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

O gráfico acima mostra as especificações recomendadas do adaptador. Se você não souber onde pode comprar o adaptador correto, pode optar por comprá-lo diretamente no link abaixo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>
:::

## Conectando ao Console Serial

Quando você conecta seu Watcher via USB, o Windows registra duas novas portas seriais. No meu caso, COM23 e COM24. Decidi fazer um experimento e ver o que apareceria em um terminal serial, porque sou fã de Circuitpython e adoro o REPL! Para isso usei o Putty e o configurei para usar a porta serial a 115200 baud (tive sorte, a primeira porta COM23 já era a que eu precisava para descobrir o console de comandos). Mas a outra, COM24, é usada para atualizar o firmware usando o protocolo Xmodem da mesma forma que no Grove Vision AI V2.

Imediatamente, o terminal exibe uma série de informações sobre a memória do dispositivo. Se você pressionar Enter, um prompt aparece e você pode digitar alguns comandos que listo abaixo:

```
help  [<string>] 
Print the summary of all registered commands if no arguments are given, otherwise print summary of given command, where <string> is the name of command

wifi_sta  [-s <ssid>] [-p <password>]
WiFi is station mode, join specified soft-AP
s <ssid> SSID of AP
p <password> password of AP
ota  [-t <int>] [--url=<string>] force ota, ignoring version check
-t, --ota_type=<int> 0: ai model, 1: himax, 2: esp32
-url=<string> url for ai model, himax or esp32 firmware

taskflow  [-iej] [-f <string>]
i, --import import taskflow
e, --export export taskflow
f, --file=<string> File path, import or export taskflow json string by SD, eg: test.json
j, --json import taskflow json string by stdin

Example: Import taskflow by json string or SD file: taskflow -i -f "test.json".
Example: Export taskflow to stdout or SD file: taskflow -e -f "test.json"

factory_info
Get factory infomation

battery
Get battery percent

bsp  subcmd [subcmd args] 
Bsp call bsp functions

Example Scan the specified i2c bus: bsp i2cdetect <0|1>

reboot 
Reboot the device

factory_reset 
Factory reset and reboot the device

record  [-t <int>] [-f <string>]
Record audio and save to SD.
-t, --time=<int> record time, s
-f, --file=<string> File path, Store PCM audio data in SD card

vi_ctrl  [-sec] [-z <int>] 
Voice interaction ctrl (Probably will be used with Push to Talk function)
-s, --start start wakeup, and start record
-e, --end end record
-c, --stop stop voice interaction when analyzing or palying, Put it into idle.
-z, --exit=<int> 0: exit vi, 1:exit vi then run new taskflow

iperf  [-suVa] [-c <ip>] [-p <port>] [-l <length>] [-i <interval>] [-t <time>] [-b <bandwidth>]
Check conection performance. Similar to iperf linux command.
-c, --client=<ip> run in client mode, connecting to <host>
-s, --server run in server mode
-u, --udp use UDP rather than TCP
-V, --ipv6_domain use IPV6 address rather than IPV4
-p, --port=<port> server port to listen on/connect to
-l, --len=<length> Set read/write buffer size
-i, --interval=<interval> seconds between periodic bandwidth reports
-t, --time=<time> time in seconds to transmit for (default 10 secs)
-b, --bandwidth=<bandwidth> bandwidth to send at in Mbits/sec
-a, --abort abort running iperf

rgb  [-r <int>] [-g <int>] [-b <int>] [-m <int>] [-v <int>] [-t <int>]
Set the rgb LED value. eg: rgb -r 255 -g 0 -b 0 -m 3
-r, --red=<int> red value, 0~255
-g, --green=<int> green value, 0~255
-b, --blue=<int> blue value, 0~255
-m, --mode=<int> 1: breath, 2: blink, 3:solid, default 3
-v, --step_value=<int> RGB step value, default 3
-t, --step_time_ms=<int> RGB step time(ms), default 5
```

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
