---
description: Este guia fornece uma visão geral detalhada dos componentes de hardware e interfaces do reComputer Super, incluindo como conectar e usar dispositivos como câmeras CSI, portas USB, várias interfaces M.2, mini PCIe, RTC, Ethernet, LEDs, ventiladores, CAN, portas de expansão e HDMI, com instruções passo a passo e exemplos de comandos.
title: reComputer Super Uso de Hardware e Interfaces
keywords:
  - reComputer Super
  - Uso de Interfaces
  - Jetson
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /recomputer_jetson_super_hardware_interfaces_usage
last_update:
  date: 05/26/2025
  author: Zibo
createdAt: '2025-05-29'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/recomputer_jetson_super_hardware_interfaces_usage/
---

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super.png"/>  
</div>

Este wiki apresenta os diversos hardwares e interfaces do reComputer Super e como usá-los para expandir suas ideias de projetos.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
</a></div>

## Câmera CSI

O reComputer Super suporta 4 câmeras MIPI CSI padrão para captura de imagem e vídeo. Siga as etapas abaixo para conectar e testar sua câmera.

### Conexão de Hardware

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/sci.jpg"/>  
</div>

**Passo 1.** Abra a tampa traseira do reComputer Super.

**Passo 2.** Conecte a câmera MIPI CSI à porta CSI apropriada na placa do reComputer Super.

**Passo 3.** Fixe a câmera e certifique-se de que a conexão esteja firme.

### Instruções de Uso

:::note
Antes de usar a câmera CSI, certifique-se de que você instalou uma versão do JetPack com os drivers de câmera necessários.
:::

**Passo 1.** Verifique se a câmera foi reconhecida pelo sistema:

```bash
ls /dev/video*
```

**Passo 2.** (Opcional) Instale utilitários de vídeo se ainda não estiverem presentes:

```bash
sudo apt install v4l-utils
```

**Passo 3.** Inicie a câmera e exiba o fluxo de vídeo usando o seguinte comando:

```bash
nvgstcapture-1.0 --sensor-id=0
```

:::info
Altere `--sensor-id` para o valor apropriado se você tiver várias câmeras.
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/csi.png"/>
</div>

---

## USB

O reComputer Super possui um total de 4 portas USB 3.2 e 1 porta USB 2.0 Type-C para depuração.

### Porta USB 3.2

Podemos inserir `watch -n 1 lsusb -tv` no terminal do Jetson para sondar as portas USB. Quando um dispositivo USB for conectado, as informações detalhadas sobre essa porta serão exibidas aqui.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

Além disso, você pode testar a velocidade de leitura e gravação de dispositivos de armazenamento USB usando o comando `dd`:

- **Leitura:**

  ```bash
  sudo dd if=/dev/sda of=/dev/null bs=1024M count=5 iflag=direct
  ```

 <div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_read.png"/>
</div>

- **Gravação:**

  ```bash
  sudo dd if=/dev/zero of=/dev/sda bs=1024M count=5 conv=fdatasync
  ```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_w.png"/>
</div>

### Porta USB 2.0 Type-C

Usando esta porta serial, através do cabo de dados USB C, você pode monitorar no PC as informações de depuração de entrada e saída.

**Passo 1.** Coloque a chave na posição de modo de depuração.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug.jpg"/>
</div>

**Passo 2.** Conecte o PC por meio de um cabo de dados USB, faça o download do [CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads) no seu PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**Passo 3.** Conecte o PC por meio de um cabo de dados USB, extraia o arquivo baixado e instale o driver no seu PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**Passo 4.** Abra o Gerenciador de Dispositivos no seu PC com Windows e verifique o número da porta COM atribuída ao reComputer Super. Ele deve aparecer em "Ports (COM & LPT)" como "Silicon Labs CP210x USB to UART Bridge (COMX)", onde X é o número da porta COM.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug1.png"/>
</div>

**Passo 5.** Abra a ferramenta de porta serial (aqui usamos a ferramenta MobaXterm como exemplo), crie uma nova sessão.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**Passo 6.** Selecione a ferramenta Serial.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**Passo 7.** Selecione a porta serial correspondente, defina a taxa de baud para 115200 e clique em "OK".

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/3.png"/>
</div>

**Passo 8.** Faça login no seu reComputer Super com o nome de usuário e senha.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4.png"/>
</div>

## M.2 Key M

M.2 Key M é uma interface projetada para unidades de estado sólido (SSDs) de alta velocidade, fornecendo velocidades de transferência de dados ultrarrápidas, ideal para aplicações de alto desempenho.

### SSDs compatíveis são os seguintes

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html)

### Conexão de Hardware

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd.jpg"/>  
</div>

### Instruções de Uso

Abra o terminal no dispositivo Jetson e insira o seguinte comando para testar a velocidade de leitura e gravação do SSD.

```bash
#create a blank test file first
sudo touch /ssd/test
dd if=/dev/zero of=/home/seeed/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd_w.png"/>
</div>

:::danger
Execute o comando `sudo rm /home/seeed/ssd/test` para excluir os arquivos de cache após a conclusão do teste.
:::

## M.2 Key E

A interface M.2 Key E é uma interface de dados compacta e de alta velocidade projetada para módulos de comunicação sem fio, como Wi-Fi e Bluetooth, usada para expandir as capacidades sem fio.

### Conexão de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/wifi_c.png"/>
</div>

### Instruções de Uso

Após instalar o módulo Wi-Fi e ligar o dispositivo, podemos configurar as configurações de Wi-Fi e Bluetooth do dispositivo.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/>
</div>

Claro, também podemos verificar o status de operação do dispositivo usando os seguintes comandos.

```bash
ifconfig
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_ifconfig.png"/>
</div>

**Bluetooth:**

  ```bash
  bluetoothctl
  scan on
  ```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/bluetooth.png"/>
</div>

## Mini PCIe

O reComputer Super vem com um mini-PCIe para módulo LTE 4G.

#### Conexão de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/mini_p.png"/>
</div>

:::note
Se você quiser remover o cartão SIM, empurre o cartão para dentro para acionar a mola interna para que o SIM saia do slot
:::

### Instruções de Uso

**Passo 1.** Instale o minicom:

```bash
sudo apt update
sudo apt install minicom -y
```

**Passo 2.** Entre no console serial do módulo 4G conectado para que possamos inserir comandos AT e interagir com o módulo 4G:

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**Passo 3.** Pressione Ctrl+A e depois pressione E para ativar o eco local.

**Passo 4.** Insira o comando "AT" e pressione Enter. Se você vir a resposta "OK", o módulo 4G está funcionando corretamente.

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/>
</div>

**Passo 5.** Insira o comando "ATI" para verificar as informações do módulo.

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/>
</div>

Usando a rede 4G para acesso à internet

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4g2.png"/>
</div>

## RTC

O reComputer Super possui interfaces RTC, fornecendo medição de tempo precisa mesmo quando o sistema está desligado.

### Conexão de Hardware

Conecte uma bateria tipo moeda CR1225 de 3 V ao soquete RTC na placa, como mostrado abaixo. Certifique-se de que o terminal **positivo (+)** da bateria esteja voltado para cima.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc.jpg"/>
</div>

### Instruções de Uso

**Passo 1.** Conecte uma bateria RTC conforme mencionado acima.

**Passo 2.** Ligue o reComputer Super.

**Passo 3.** No Ubuntu Desktop, clique no menu suspenso no canto superior direito, navegue até `Settings > Date & Time`, conecte-se a uma rede via cabo Ethernet e selecione **Automatic Date & Time** para obter a data/hora automaticamente.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/>
</div>

:::note
Se você não tiver se conectado à internet via Ethernet, você pode definir manualmente a data/hora aqui.
:::

**Passo 4.** Abra uma janela de terminal e execute o comando abaixo para verificar a hora do relógio de hardware:

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time1(1).png"/>
</div>

**Passo 5.** Desconecte a conexão de rede e reinicie o dispositivo. Você verá que o horário do sistema perdeu a alimentação, mas ainda funciona normalmente.
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time2.png"/>
</div>

## Ethernet

Há 2 portas Ethernet Gigabit RJ45 no reComputer Super com suporte a 10/100/1000M. ETH0 é a porta Ethernet nativa e a outra, ETH1, é convertida a partir de PCIe.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth.jpg"/>
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
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_a.png"/>
</div>

```bash
iperf3 -c 192.168.254.100
```

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_p.png"/>
</div>

## Indicadores LED

O reComputer Super está equipado com 2 indicadores LED (PWR e ACT) para mostrar o status de alimentação e a atividade do sistema, permitindo que os usuários monitorem a operação do dispositivo em tempo real.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/led.jpg"/>
</div>

## Ventoinha

O reComputer Super está equipado com dois tipos de conectores de ventoinha para atender diferentes necessidades de tensão e resfriamento:

- 1x Conector de Ventoinha de 4 Pinos (5V PWM): Projetado para ventoinhas silenciosas de baixa tensão e baixa potência, esse conector suporta controle de velocidade PWM, permitindo o ajuste inteligente da velocidade da ventoinha com base na temperatura do sistema para melhorar a eficiência energética e reduzir o ruído.

- 1x Conector de Ventoinha de 4 Pinos (12V PWM): Compatível com ventoinhas PWM padrão de 12V, também suporta controle preciso de velocidade, sendo ideal para requisitos de resfriamento de alto desempenho.

### Conexão de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/fan.jpg"/>
</div>

:::note
Para mais informações, verifique [aqui](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

**Definir velocidade da ventoinha:**

  ```bash
  sudo -i
  echo 100 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
  ```

Além disso, podemos definir manualmente a velocidade da ventoinha usando a ferramenta jtop.

## CAN

A série reComputer Super fornece uma interface CAN em que o sinal CAN é enviado diretamente do SOM em níveis TTL/CMOS, que é um sinal diferencial não padronizado, exigindo um transceptor CAN externo para se conectar a um barramento CAN padrão; ela suporta formatos de quadro CAN FD, permitindo comprimento de dados estendido e taxas de dados mais altas, tornando-a adequada para automação industrial, robótica, prototipagem automotiva e outras aplicações que exigem comunicação confiável e em tempo real.

### Conexão de Hardware

Observe a sequência das linhas conectadas (R OUT ↔ RX, D IN ↔ TX) e, em seguida, converta-as para CAN_L e CAN_H por meio do transceptor de barramento CAN.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can1.png"/>
</div>

De acordo com o [Datasheet do reComputer Super](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf), conecte o aquecedor CAN ao transceptor de barramento CAN da maneira correspondente, depois conecte o transceptor de barramento CAN ao [Adaptador USB para Analisador CAN](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) e, por fim, conecte-o ao Jetson para teste de comunicação em loopback.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_port.png"/>
</div>


<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_connect.png"/>
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
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_loop.png"/>
</div>

## Porta de Extensão

A Porta de Extensão inclui um cabeçalho de extensão de 40 pinos e um cabeçalho de controle e UART de 12 pinos, fornecendo opções versáteis de conectividade para periféricos e interfaces de comunicação.

### Cabeçalho de Extensão de 40 Pinos

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40pin3.jpg"/>
</div>

O Cabeçalho de Extensão de 40 Pinos é uma interface de expansão versátil que fornece várias funções, como GPIO, I2C, SPI e UART, facilitando a conexão de sensores, periféricos ou outros módulos.

O detalhe do cabeçalho de 40 pinos é mostrado abaixo:

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
<tr><td>15</td><td>GPIO12</td><td>PN.01</td><td>Entrada/Saída de Uso Geral</td></tr>
<tr><td>16</td><td>SPI1_CS1</td><td>PY.04</td><td>Chip Select #1 SPI #1</td></tr>
<tr><td>17</td><td>3.3V</td><td>-</td><td>Fonte principal de 3,3V</td></tr>
<tr><td>18</td><td>SPI1_CS0</td><td>PY.03</td><td>Chip Select #0 SPI #1</td></tr>
<tr><td>19</td><td>SPI0_MOSI</td><td>PZ.05</td><td>SPI #0 Master Out / Slave In</td></tr>
<tr><td>20</td><td>GND</td><td>-</td><td>Terra</td></tr>
<tr><td>21</td><td>SPI0_MISO</td><td>PZ.04</td><td>SPI #0 Master In / Slave Out</td></tr>
<tr><td>22</td><td>SPI1_MISO</td><td>PY.01</td><td>SPI #1 Master In / Slave Out</td></tr>
<tr><td>23</td><td>SPI0_SCK</td><td>PZ.03</td><td>Clock SPI #0</td></tr>
<tr><td>24</td><td>SPI0_CS0</td><td>PZ.06</td><td>Chip Select #0 SPI #0</td></tr>
<tr><td>25</td><td>GND</td><td>-</td><td>Terra</td></tr>
<tr><td>26</td><td>SPI0_CS1</td><td>PZ.07</td><td>Chip Select #1 SPI #0</td></tr>
<tr><td>27</td><td>ID_I2C_SDA (I2C0_SDA)</td><td>PDD.00</td><td>Dados I2C #0</td></tr>
<tr><td>28</td><td>ID_I2C_SCL (I2C0_SCL)</td><td>PCC.07</td><td>Clock I2C #0</td></tr>
<tr><td>29</td><td>GPIO01</td><td>PQ.05</td><td>Entrada/Saída de Uso Geral</td></tr>
<tr><td>30</td><td>GND</td><td>-</td><td>Terra</td></tr>
<tr><td>31</td><td>GPIO11</td><td>PQ.06</td><td>Entrada/Saída de Uso Geral</td></tr>
<tr><td>32</td><td>GPIO07</td><td>PG.06</td><td>Entrada/Saída de Uso Geral</td></tr>
<tr><td>33</td><td>GPIO13</td><td>PG.00</td><td>Reservado pelo Sistema</td></tr>
<tr><td>34</td><td>GND</td><td>-</td><td>Terra</td></tr>
<tr><td>35</td><td>I2S0_LRCK (I2S0_FS)</td><td>PI.02</td><td>Sincronismo de Quadro de Áudio I2S #0</td></tr>
<tr><td>36</td><td>UART1_CTS</td><td>PR.05</td><td>UART #1 Clear to Send</td></tr>
<tr><td>37</td><td>SPI1_MOSI</td><td>PY.02</td><td>SPI #1 Master Out / Slave In</td></tr>
<tr><td>38</td><td>I2S0_SDIN (I2S0_DIN)</td><td>PI.01</td><td>Áudio I2S #0 Dados de Entrada</td></tr>
<tr><td>39</td><td>GND</td><td>-</td><td>Terra</td></tr>
<tr><td>40</td><td>I2S0_SDOUT (I2S0_DOUT)</td><td>PI.00</td><td>Áudio I2S #0 Dados de Saída</td></tr>
</tbody>
</table>
</div>


### Instruções de Uso

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
**Se você quiser configurar o GPIO que não está habilitado por padrão, siga as etapas abaixo:**

Habilitar Cabeçalho de 40 Pinos:
```bash
  sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_2.png"/>

</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_3.png"/>
</div>

Salve e reinicie.

**Configure o GPIO não controlado por meio da configuração Overlay:**

**Passo 1.** Baixe e extraia o [pacote overlay](https://files.seeedstudio.com/wiki/overlay.zip) no seu dispositivo Jetson.
```bash
wget https://files.seeedstudio.com/wiki/overlay.zip
```
**Passo 2.** Copie `build.sh` e `gpio-overlay.dts` para o Jetson.

**Passo 3.** Edite o arquivo `pio-overlay.dts` e modifique-o para incluir as definições de pinmux para os pinos de que você precisa.
:::info
para mais detalhes você pode ver em [jetson-orin-nx-and-orin-nano-series-pinmux-config](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)
:::

**Passo 3.**   Ative a configuração de overlay.
```bash
sudo bash ./build.sh
#The following command needs to be executed only once.
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "seeed gpio config Overlay"
```
**Passo 4.** Reinicie o dispositivo para que a configuração entre em vigor.
```bash
sudo reboot
```
**Passo 5.** Agora você pode controlar os pinos por `gpioset` que foram modificados recentemente.
```bash
#For example px7
sudo gpioset --mode=wait 0 121=1
```


### Cabeçalho de Controle e UART de 12 Pinos

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/12pin2.jpg"/>
</div>

O cabeçalho de Controle e UART de 12 pinos fornece sinais de controle essenciais e interfaces de comunicação UART para conectar e gerenciar dispositivos externos.

:::note
As funções dos pinos do reComputer Super são semelhantes às do reComputer Classic. Para informações mais detalhadas, consulte [aqui](https://wiki.seeedstudio.com/pt-br/J401_carrierboard_Hardware_Interfaces_Usage/#gpio).
:::

## HDMI

O reComputer Super está equipado com uma porta HDMI 2.1 Tipo A, que suporta uma resolução de 7680x4320. Isso permite saída de vídeo em ultra alta definição.

## Recursos
- [Manual do Usuário e Datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf)
- [Relatório de Teste de Temperatura](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Super_Temperature_Test_Report.pdf)
- [Esquemático](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401_v1.0_SCH_PDF_250401.pdf)
- [Arquivo 3D](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401.stp)
- [Documento Mecânico - reComputer Super](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super.dxf)
- [Documento Mecânico - reComputer Super PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super_PCBA.dxf)

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
