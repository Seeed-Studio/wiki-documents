---
description: "Interfaces do reComputer Super: CSI, USB, M.2 Key M e E, Mini PCIe, RTC, Ethernet, LED, ventoinha e CAN. Pinouts, fiação e comandos testados."
title: Uso de Hardware e Interfaces do reComputer Super
keywords:
  - reComputer Super
  - Uso de Interfaces
  - Jetson
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /recomputer_jetson_super_hardware_interfaces_usage
last_update:
  date: 11/06/2026
  author: Zibo
createdAt: '2025-05-29'
updatedAt: '2026-11-06'
url: https://wiki.seeedstudio.com/pt-br/recomputer_jetson_super_hardware_interfaces_usage/
---

<div align="center">
  <img alt="reComputer Super, placa carrier exposta ao lado da unidade montada mostrando as portas frontais" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super.png"/>  
</div>

O reComputer Super expõe quatro portas de câmera MIPI CSI, USB 3.2 e USB 2.0 Type-C, M.2 Key M e Key E, Mini PCIe, RTC, CAN, Ethernet e um conector de expansão de 40 pinos. Cada seção abaixo conecta uma interface e fornece o comando ou verificação que confirma que ela está funcionando.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

## Câmera CSI

O reComputer Super suporta 4 câmeras MIPI CSI padrão para captura de imagem e vídeo. Siga as etapas abaixo para conectar e testar sua câmera.

### Conexão de hardware

<div align="center">
  <img alt="Fita da câmera MIPI CSI conectada ao slot CSI dentro do gabinete do reComputer Super" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/sci.jpg"/>  
</div>

**Etapa 1.** Abra a tampa traseira do reComputer Super.

**Etapa 2.** Conecte a câmera MIPI CSI à porta CSI apropriada na placa do reComputer Super.

**Etapa 3.** Fixe a câmera e certifique-se de que a conexão esteja firme.

### Instruções de uso

:::note
Antes de usar a câmera CSI, certifique-se de ter instalado uma versão do JetPack com os drivers de câmera necessários.
:::

:::info
**Escopo de versão:** os comandos abaixo seguem a organização do JetPack 6.x para as ferramentas de câmera e GPIO. A NVIDIA alterou partes da pilha de câmera em versões posteriores, então no JetPack 7.2 confirme que `nvgstcapture-1.0` está instalado antes de executá-lo — se o binário não estiver presente, controle o sensor com `gst-launch-1.0` e `nvarguscamerasrc` em vez disso.
:::

**Etapa 1.** Verifique se a câmera é reconhecida pelo sistema:

```bash
ls /dev/video*
```

**Etapa 2.** (Opcional) Instale utilitários de vídeo se ainda não estiverem presentes:

```bash
sudo apt install v4l-utils
```

**Etapa 3.** Inicie a câmera e exiba o fluxo de vídeo usando o seguinte comando:

```bash
nvgstcapture-1.0 --sensor-id=0
```

:::info
Altere `--sensor-id` para o valor apropriado se você tiver várias câmeras.
:::

<div align="center">
  <img alt="Janela de pré-visualização da câmera CSI na área de trabalho do reComputer Super" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/csi.png"/>
</div>

---

## USB

O reComputer Super possui um total de 4 portas USB 3.2 e 1 porta USB 2.0 Type-C para depuração.

### Porta USB 3.2

Podemos inserir `watch -n 1 lsusb -tv` no terminal do Jetson para sondar as portas USB. Assim que um dispositivo USB for conectado, as informações detalhadas sobre essa porta serão exibidas aqui.

<div align="center">
  <img alt="Saída do comando watch lsusb listando os dispositivos USB conectados ao reComputer Super" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

Além disso, você pode testar a velocidade de leitura e gravação de dispositivos de armazenamento USB usando o comando `dd`:

- **Leitura:**

  ```bash
  sudo dd if=/dev/sda of=/dev/null bs=1024M count=5 iflag=direct
  ```

 <div align="center">
  <img alt="Saída do teste de leitura com dd medindo a velocidade de leitura de uma unidade USB" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_read.png"/>
</div>

- **Gravação:**

  ```bash
  sudo dd if=/dev/zero of=/dev/sda bs=1024M count=5 conv=fdatasync
  ```

<div align="center">
  <img alt="Saída do teste de gravação com dd medindo a velocidade de gravação em uma unidade USB" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_w.png"/>
</div>

### Porta USB 2.0 Type-C

Usando esta porta serial, por meio do cabo de dados USB C, você pode monitorar no PC as informações de depuração de entrada e saída.

**Etapa 1.** Coloque a chave na posição de modo de depuração.

<div align="center">
  <img alt="Chave de modo de depuração e gravação no reComputer Super ajustada para o modo de depuração" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug.jpg"/>
</div>

**Etapa 2.** Conecte o PC por meio de um cabo de dados USB e baixe o [CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads) no seu PC.

<div align="center">
  <img alt="Página de download do driver Silicon Labs CP210x VCP" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**Etapa 3.** Conecte o PC por meio de um cabo de dados USB, extraia o arquivo baixado e instale o driver no seu PC.

<div align="center">
  <img alt="CP210xVCPInstaller_x64.exe selecionado na pasta extraída do driver" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**Etapa 4.** Abra o Gerenciador de Dispositivos no seu PC com Windows e verifique o número da porta COM atribuída ao reComputer Super. Ele deve aparecer em "Ports (COM & LPT)" como "Silicon Labs CP210x USB to UART Bridge (COMX)", onde X é o número da porta COM.

<div align="center">
  <img alt="Gerenciador de Dispositivos do Windows mostrando a porta COM do CP210x em Ports" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug1.png"/>
</div>

**Etapa 5.** Abra a ferramenta de porta serial (aqui usamos a ferramenta MobaXterm como exemplo) e crie uma nova sessão.

<div align="center">
  <img alt="Janela principal do MobaXterm com a lista de sessões recentes, incluindo COM3" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**Etapa 6.** Selecione a ferramenta Serial.

<div align="center">
  <img alt="Seletor de tipo de sessão do MobaXterm com Serial destacado" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**Etapa 7.** Selecione a porta serial correspondente, defina a taxa de transmissão para 115200 e clique em "OK".

<div align="center">
  <img alt="Configurações seriais do MobaXterm com a porta COM e baud rate de 115200 selecionadas" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/3.png"/>
</div>

**Etapa 8.** Faça login no seu reComputer Super com o nome de usuário e a senha.

<div align="center">
  <img alt="Console serial conectado ao reComputer Super pela porta de depuração" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4.png"/>
</div>

## M.2 Key M

M.2 Key M é uma interface projetada para unidades de estado sólido (SSDs) de alta velocidade, oferecendo velocidades de transferência de dados ultrarrápidas, ideal para aplicações de alto desempenho.

### SSDs compatíveis são os seguintes

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html)

### Conexão de hardware

<div align="center">
  <img alt="SSD NVMe encaixado no slot M.2 Key M do reComputer Super" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd.jpg"/>  
</div>

### Instruções de uso

Abra o terminal no dispositivo Jetson e insira o seguinte comando para testar a velocidade de leitura e gravação do SSD.

```bash
#create a blank test file first
sudo touch /ssd/test
dd if=/dev/zero of=/home/seeed/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img alt="Saída de terminal do teste de gravação com dd medindo a taxa de transferência do SSD NVMe" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd_w.png"/>
</div>

:::danger
Execute o comando `sudo rm /home/seeed/ssd/test` para excluir os arquivos de cache após a conclusão do teste.
:::

## M.2 Key E

A interface M.2 Key E é uma interface de dados compacta e de alta velocidade projetada para módulos de comunicação sem fio, como Wi-Fi e Bluetooth, usada para expandir os recursos sem fio.

### Conexão de hardware

<div align="center">
  <img alt="Módulo Wi-Fi instalado no slot M.2 Key E com os cabos de antena conectados" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/wifi_c.png"/>
</div>

### Instruções de uso

Após instalar o módulo Wi-Fi e ligar o dispositivo, podemos configurar as configurações de Wi-Fi e Bluetooth do dispositivo.

<div align="center">
  <img alt="Área de trabalho do Ubuntu mostrando os indicadores de Wi-Fi e Bluetooth após instalar o módulo sem fio" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/>
</div>

Claro, também podemos verificar o status de operação do dispositivo usando os seguintes comandos.

```bash
ifconfig
```

<div align="center">
  <img alt="Saída do ifconfig listando a interface sem fio no reComputer Super" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_ifconfig.png"/>
</div>

**Bluetooth:**

  ```bash
  bluetoothctl
  scan on
  ```

<div align="center">
  <img alt="bluetoothctl scan on iniciando a descoberta no reComputer Super" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/bluetooth.png"/>
</div>

## Mini PCIe

O reComputer Super vem com um mini-PCIe para módulo LTE 4G.

### Conexão de hardware

<div align="center">
  <img alt="Módulo 4G Quectel EC25 no slot Mini PCIe com três cabos de antena conectados" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/mini_p.png"/>
</div>

:::note
Se você quiser remover o cartão SIM, empurre o cartão para dentro até acionar a mola interna para que o SIM saia do slot
:::

### Instruções de uso

**Etapa 1.** Instale o minicom:

```bash
sudo apt update
sudo apt install minicom -y
```

**Passo 2.** Entre no console serial do módulo 4G conectado para que possamos inserir comandos AT e interagir com o módulo 4G:

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**Passo 3.** Pressione Ctrl+A e depois pressione E para ativar o eco local.

**Passo 4.** Digite o comando "AT" e pressione Enter. Se você vir a resposta "OK", o módulo 4G está funcionando corretamente.

<div align="center">
  <img alt="Terminal serial retornando OK após o comando AT ser enviado para o módulo 4G" width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/>
</div>

**Passo 5.** Digite o comando "ATI" para verificar as informações do módulo.

<div align="center">
  <img alt="Terminal serial retornando as informações do módulo após o comando ATI" width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/>
</div>

Usando rede 4G para acesso à internet

<div align="center">
  <img alt="Configurações de rede mostrando a conexão 4G transportando o tráfego de internet" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4g2.png"/>
</div>

## RTC

O reComputer Super possui interfaces RTC, fornecendo contagem de tempo precisa mesmo quando o sistema está desligado.

### Conexão de Hardware

Conecte uma bateria tipo moeda CR1225 de 3V ao soquete RTC na placa, como mostrado abaixo. Certifique-se de que a extremidade **positiva (+)** da bateria esteja voltada para cima.

<div align="center">
  <img alt="Bateria tipo moeda CR1225 instalada no soquete RTC do reComputer Super" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc.jpg"/>
</div>

### Instruções de Uso

**Passo 1.** Conecte uma bateria RTC conforme mencionado acima.

**Passo 2.** Ligue o reComputer Super.

**Passo 3.** No Ubuntu Desktop, clique no menu suspenso no canto superior direito, navegue até `Settings > Date & Time`, conecte-se a uma rede via cabo Ethernet e selecione **Automatic Date & Time** para obter a data/hora automaticamente.

<div align="center">
  <img alt="Página de configurações de Data e Hora do Ubuntu usada para ativar o ajuste automático de horário" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/>
</div>

:::note
Se você não tiver se conectado à internet via Ethernet, poderá definir a data/hora manualmente aqui.
:::

**Passo 4.** Abra uma janela de terminal e execute o comando abaixo para verificar o horário do relógio de hardware:

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

<div align="center">
  <img alt="Terminal lendo a hora do RTC a partir do dispositivo nvvrs-pseq-rtc" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time1(1).png"/>
</div>

**Passo 5.** Desconecte a conexão de rede e reinicie o dispositivo. Você verá que o sistema perdeu a alimentação, mas o horário ainda funciona normalmente.
<div align="center">
  <img alt="Terminal mostrando a hora do sistema mantida pelo RTC após a rede ser desconectada" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time2.png"/>
</div>

## Ethernet

Há 2 portas RJ45 Gigabit Ethernet no reComputer Super com suporte a 10/100/1000M. ETH0 é a porta Ethernet nativa e a outra, ETH1, é convertida a partir de PCIe.

<div align="center">
  <img alt="Duas portas RJ45 Gigabit Ethernet identificadas como ETH0 e ETH1 no reComputer Super" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth.jpg"/>
</div>

Há 2 LEDs (verde e amarelo) em cada porta Ethernet:

- LED verde: LIGADO apenas quando conectado a uma rede de 1000M/10G.
- LED amarelo: Mostra o status de atividade da rede.

Teste a velocidade da Ethernet:

```bash
iperf3 -c 192.168.254.100 -R
```

:::info
-c `<ip address>` é o endereço IP do servidor, e -R significa modo reverso.
:::

<div align="center">
  <img alt="Cliente iperf3 em modo reverso no reComputer Super, recebendo 942 Mbits/s" width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_a.png"/>
</div>

```bash
iperf3 -c 192.168.254.100
```

<div align="center">
  <img alt="Saída do cliente iperf3 medindo a taxa de transferência Gigabit Ethernet no reComputer Super" width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_p.png"/>
</div>

## Indicadores LED

O reComputer Super está equipado com 2 indicadores LED (PWR e ACT) para mostrar o status de energia e a atividade do sistema, permitindo que os usuários monitorem a operação do dispositivo em tempo real.

<div align="center">
  <img alt="Indicadores LED PWR e ACT no reComputer Super" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/led.jpg"/>
</div>

## Ventoinha

O reComputer Super está equipado com dois tipos de conectores de ventoinha para atender a diferentes necessidades de tensão e refrigeração:

- 1x Conector de Ventoinha de 4 pinos (5V PWM): Projetado para ventoinhas silenciosas de baixa tensão e baixa potência, este conector suporta controle de velocidade PWM, permitindo ajuste inteligente da velocidade da ventoinha com base na temperatura do sistema para melhorar a eficiência energética e reduzir o ruído.

- 1x Conector de Ventoinha de 4 pinos (12V PWM): Compatível com ventoinhas PWM padrão de 12V, também suporta controle preciso de velocidade, sendo ideal para requisitos de refrigeração de alto desempenho.

### Conexão de Hardware

<div align="center">
  <img alt="Conectores de ventoinha PWM de 12V e 5V na placa do reComputer Super" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/fan.jpg"/>
</div>

:::note
Para mais informações, consulte [aqui](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

**Definir velocidade da ventoinha:**

  ```bash
  sudo -i
  echo 100 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
  ```

Além disso, podemos definir manualmente a velocidade da ventoinha usando a ferramenta jtop.

## CAN

A série reComputer Super fornece uma interface CAN em que o sinal CAN é enviado diretamente do SOM em níveis TTL/CMOS, que é um sinal diferencial não padrão exigindo um transceptor CAN externo para se conectar a um barramento CAN padrão; ela suporta formatos de quadro CAN FD, permitindo comprimento de dados estendido e taxas de dados mais altas, tornando-a adequada para automação industrial, robótica, prototipagem automotiva e outras aplicações que exigem comunicação confiável e em tempo real.

### Conexão de Hardware

Observe a sequência dos fios conectados (R OUT ↔ RX, D IN ↔ TX) e, em seguida, converta-os em CAN_L e CAN_H por meio do transceptor de barramento CAN.

<div align="center">
  <img alt="Pinos CAN TX e RX conectados ao transceptor de barramento CAN no reComputer Super" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can1.png"/>
</div>

De acordo com o [Datasheet do reComputer Super](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf), conecte o cabeçalho CAN ao transceptor de barramento CAN da maneira correspondente, depois conecte o transceptor de barramento CAN ao [Adaptador USB para Analisador CAN](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) e, por fim, conecte-o ao Jetson para teste de comunicação em loopback.

<div align="center">
  <img alt="Tabela do datasheet para o conector do barramento CAN listando os pinos TX, RX, GND e 3V3" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_port.png"/>
</div>


<div align="center">
  <img alt="Analisador USB-para-CAN conectado ao cabeçalho CAN no reComputer Super" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_connect.png"/>
</div>

### Instruções de Uso

**Passo 1.** Configure e abra can0:

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000
sudo ip link set can0 up
```
**Passo 2.** Teste de comunicação.
Abra um terminal para receber sinais.
```bash
candump can0
```

**Passo 3.** Abra outro terminal para enviar o sinal.
```bash
cansend can0 123#abcdabcd
```
<div align="center">
  <img alt="Saída de cansend e candump mostrando um quadro CAN em loopback em can0" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_loop.png"/>
</div>

## Porta de Extensão

A Porta de Extensão inclui um cabeçalho de extensão de 40 pinos e um cabeçalho de controle e UART de 12 pinos, oferecendo opções versáteis de conectividade para periféricos e interfaces de comunicação.

### Cabeçalho de Extensão de 40 pinos

<div align="center">
  <img alt="Cabeçalho de extensão de 40 pinos na placa carrier do reComputer Super" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40pin3.jpg"/>
</div>

O Cabeçalho de Extensão de 40 pinos é uma interface de expansão versátil que fornece várias funções, como GPIO, I2C, SPI e UART, facilitando a conexão de sensores, periféricos ou outros módulos.

Os detalhes do cabeçalho de 40 pinos são mostrados abaixo:

<div class="table-center">
<table style={{textAlign: 'center'}}>
<thead>
<tr>
  <th>Pino do Cabeçalho</th>
  <th>Sinal</th>
  <th>Pino BGA</th>
  <th>Função Padrão</th>
</tr>
</thead>
<tbody>
<tr><td>1</td><td>3.3V</td><td>-</td><td>Fonte principal de 3,3V</td></tr>
<tr><td>2</td><td>5V</td><td>-</td><td>Fonte principal de 5V</td></tr>
<tr><td>3</td><td>I2C1_SDA</td><td>PDD.02</td><td>Dados I2C #1</td></tr>
<tr><td>4</td><td>5V</td><td>-</td><td>Fonte principal de 5V</td></tr>
<tr><td>5</td><td>I2C1_SCL</td><td>PDD.01</td><td>Clock I2C #1</td></tr>
<tr><td>6</td><td>GND</td><td>-</td><td>Terra</td></tr>
<tr><td>7</td><td>GPIO09</td><td>PAC.06</td><td>Entrada/Saída de Uso Geral</td></tr>
<tr><td>8</td><td>UART1_TXD</td><td>PR.02</td><td>Transmissão UART #1</td></tr>
<tr><td>9</td><td>GND</td><td>-</td><td>Terra</td></tr>
<tr><td>10</td><td>UART1_RXD</td><td>PR.03</td><td>Recepção UART #1</td></tr>
<tr><td>11</td><td>UART1_RTS</td><td>PR.04</td><td>UART #1 Request to Send</td></tr>
<tr><td>12</td><td>I2S0_SCLK</td><td>PH.07</td><td>Clock de Áudio I2S #0</td></tr>
<tr><td>13</td><td>SPI1_SCK</td><td>PY.00</td><td>Clock SPI #1</td></tr>
<tr><td>14</td><td>GND</td><td>-</td><td>Terra</td></tr>
<tr><td>15</td><td>GPIO12</td><td>PN.01</td><td>GPIO de uso geral</td></tr>
<tr><td>16</td><td>SPI1_CS1</td><td>PY.04</td><td>SPI nº 1 Chip Select nº 1</td></tr>
<tr><td>17</td><td>3.3V</td><td>-</td><td>Fonte principal de 3,3 V</td></tr>
<tr><td>18</td><td>SPI1_CS0</td><td>PY.03</td><td>SPI nº 1 Chip Select nº 0</td></tr>
<tr><td>19</td><td>SPI0_MOSI</td><td>PZ.05</td><td>SPI nº 0 Master Out / Slave In</td></tr>
<tr><td>20</td><td>GND</td><td>-</td><td>Terra</td></tr>
<tr><td>21</td><td>SPI0_MISO</td><td>PZ.04</td><td>SPI nº 0 Master In / Slave Out</td></tr>
<tr><td>22</td><td>SPI1_MISO</td><td>PY.01</td><td>SPI nº 1 Master In / Slave Out</td></tr>
<tr><td>23</td><td>SPI0_SCK</td><td>PZ.03</td><td>SPI nº 0 Clock</td></tr>
<tr><td>24</td><td>SPI0_CS0</td><td>PZ.06</td><td>SPI nº 0 Chip Select nº 0</td></tr>
<tr><td>25</td><td>GND</td><td>-</td><td>Terra</td></tr>
<tr><td>26</td><td>SPI0_CS1</td><td>PZ.07</td><td>SPI nº 0 Chip Select nº 1</td></tr>
<tr><td>27</td><td>ID_I2C_SDA (I2C0_SDA)</td><td>PDD.00</td><td>I2C nº 0 Dados</td></tr>
<tr><td>28</td><td>ID_I2C_SCL (I2C0_SCL)</td><td>PCC.07</td><td>I2C nº 0 Clock</td></tr>
<tr><td>29</td><td>GPIO01</td><td>PQ.05</td><td>GPIO de uso geral</td></tr>
<tr><td>30</td><td>GND</td><td>-</td><td>Terra</td></tr>
<tr><td>31</td><td>GPIO11</td><td>PQ.06</td><td>GPIO de uso geral</td></tr>
<tr><td>32</td><td>GPIO07</td><td>PG.06</td><td>GPIO de uso geral</td></tr>
<tr><td>33</td><td>GPIO13</td><td>PG.00</td><td>Reservado pelo sistema</td></tr>
<tr><td>34</td><td>GND</td><td>-</td><td>Terra</td></tr>
<tr><td>35</td><td>I2S0_LRCK (I2S0_FS)</td><td>PI.02</td><td>Áudio I2S nº 0 Frame Sync</td></tr>
<tr><td>36</td><td>UART1_CTS</td><td>PR.05</td><td>UART nº 1 Clear to Send</td></tr>
<tr><td>37</td><td>SPI1_MOSI</td><td>PY.02</td><td>SPI nº 1 Master Out / Slave In</td></tr>
<tr><td>38</td><td>I2S0_SDIN (I2S0_DIN)</td><td>PI.01</td><td>Áudio I2S nº 0 Dados de entrada</td></tr>
<tr><td>39</td><td>GND</td><td>-</td><td>Terra</td></tr>
<tr><td>40</td><td>I2S0_SDOUT (I2S0_DOUT)</td><td>PI.00</td><td>Áudio I2S nº 0 Dados de saída</td></tr>
</tbody>
</table>
</div>


### Instruções de uso

Exemplo simples de controle de GPIO
```bash
#install
sudo apt-get install gpiod

# Search for the corresponding number for the pin
sudo gpiofind PH.00
gpiochip0 43

#Set the pin to H, then press Enter to release.
sudo gpioset --mode=wait 0 43=1

#Set the Pin to L, then press Enter to release.
sudo gpioset --mode=wait 0 43=0

#gpio 0_119 Low level maintained for 2 seconds
sudo gpioset --mode=time -s 2 0 119=0

#input
sudo gpioget 0 43
```
**Se você quiser configurar o GPIO que não está habilitado por padrão, consulte as etapas a seguir:**

Habilitar o conector de 40 pinos:
```bash
  sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center">
  <img alt="menu principal do jetson-io.py listando as opções de configuração do conector de 40 pinos" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_1.png"/>
</div>

<div align="center">
  <img alt="Ferramenta Jetson Expansion Header mostrando o mapa de pinos do conector de 40 pinos com as opções configuráveis" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_2.png"/>

</div>

<div align="center">
  <img alt="lista de seleção de função para o conector de 40 pinos com uarta.cts e uarta.rts alternados" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_3.png"/>
</div>

Salve e reinicie.

**Configure o GPIO não controlado por meio da configuração Overlay:**

**Etapa 1.** Baixe e extraia o [pacote de overlay](https://files.seeedstudio.com/wiki/overlay.zip) para o seu dispositivo Jetson.
```bash
wget https://files.seeedstudio.com/wiki/overlay.zip
```
**Etapa 2.** Copie build.sh e gpio-overlay.dts para o Jetson.

**Etapa 3.** Edite o arquivo `pio-overlay.dts` e modifique-o para incluir as definições de pinmux para os pinos de que você precisa.
:::info
para mais detalhes você pode ver em [jetson-orin-nx-and-orin-nano-series-pinmux-config](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)
:::

**Etapa 3.**   Habilite a configuração de overlay.
```bash
sudo bash ./build.sh
#The following command needs to be executed only once.
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "seeed gpio config Overlay"
```
**Etapa 4.** Reinicie o dispositivo para que a configuração entre em vigor.
```bash
sudo reboot
```
**Etapa 5.** Agora você pode controlar os pinos por `gpioset` que foram modificados.
```bash
#For example px7
sudo gpioset --mode=wait 0 121=1
```


### Conector de controle e UART de 12 pinos

<div align="center">
  <img alt="conector de botão e LED de 12 pinos com sua lista de pinos: PC_LED, UART2, AC OK, SYS_RESET, FORCE_RECOVERY e PWR_BTN" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/12pin2.jpg"/>
</div>

O conector de controle e UART de 12 pinos fornece sinais de controle essenciais e interfaces de comunicação UART para conectar e gerenciar dispositivos externos.

:::note
As funções dos pinos do reComputer Super são semelhantes às do reComputer Classic. Para informações mais detalhadas, consulte [aqui](https://wiki.seeedstudio.com/pt-br/J401_carrierboard_Hardware_Interfaces_Usage/#gpio).
:::

## HDMI

O reComputer Super está equipado com uma porta HDMI 2.1 Tipo A, que suporta resolução de 7680x4320. Isso permite saída de vídeo em ultra-alta definição.

## FAQ

**Quantas câmeras as portas CSI podem acionar ao mesmo tempo?**
Quatro. A placa expõe quatro portas de câmera MIPI CSI, e o teste nesta página faz a pré-visualização de uma delas com `nvgstcapture`, alterando `--sensor-id` quando mais de uma câmera está conectada.

**Por que apenas ETH0 relata uma interface nativa?**
ETH1 é convertida de PCIe, portanto as duas portas não compartilham o mesmo controlador. Ambas negociam 10/100/1000 Mbps, mas apenas ETH0 vem diretamente do módulo.

**Eu preciso de uma bateria para o RTC manter a hora?**
Sim. Coloque uma bateria tipo moeda CR1225 de 3 V no soquete do RTC com o lado positivo para cima, caso contrário o relógio perde a hora assim que a placa é desligada.

**O módulo 4G responde a comandos AT, mas não há internet.**
Uma resposta `OK` apenas prova que o módulo está ativo na porta serial. Ative a conexão de dados nas configurações de rede e confirme que o tráfego sai por ela, como mostrado na etapa de 4G nesta página.

**Qual é a diferença entre os conectores de 40 pinos e 12 pinos?**
O conector de 40 pinos carrega o conjunto padrão de GPIO do Jetson e é configurado por meio de `jetson-io.py`. O conector de 12 pinos é um conector separado de controle e UART para periféricos, não fazendo parte do mapa de 40 pinos.

## Recursos relacionados

- [Primeiros passos com o reComputer Super](/pt-br/recomputer_jetson_super_getting_started/)
- [reComputer Super vs Classic: desempenho de IA em inferência de borda](/pt-br/recomputer_jetson_super_performance/)
- [Instalação da antena do reComputer](/pt-br/recomputer_antenna_installation/)
- [Página do produto reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html)
- [Repositório de documentos da wiki e discussões](https://github.com/Seeed-Studio/wiki-documents/discussions/69)

## Recursos
- [Manual do usuário & Datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf)
- [Relatório de teste de temperatura](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Super_Temperature_Test_Report.pdf)
- [Esquemático](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401_v1.0_SCH_PDF_250401.pdf)
- [Arquivo 3D](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401.stp)
- [Documento mecânico - reComputer Super](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super.dxf)
- [Documento mecânico - reComputer Super PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super_PCBA.dxf)

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
