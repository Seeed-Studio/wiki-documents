---
description: Uso de hardware e interfaces para a placa carrier J401
title: Uso das Interfaces
tags:
  - placa carrier J401
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /J401_carrierboard_Hardware_Interfaces_Usage
last_update:
  date: 04/29/2024
  author: Jiahao
createdAt: '2024-05-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/J401_carrierboard_Hardware_Interfaces_Usage/
---
## Introdução

A **[placa carrier reComputer J401](https://www.seeedstudio.com/reComputer-J401-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-p-5636.html)** oferece suporte ao **NVIDIA Jetson Orin Nano/NX([Orin Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html?___store=retailer)/[Orin Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html)**, **[Orin NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)/[Orin NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html))**, oferecendo desempenho excepcional e sendo projetada para lidar com tarefas exigentes de computação de borda com facilidade. É a escolha perfeita para desenvolver sistemas de automação industrial, construir aplicações avançadas de IA e muito mais.

Ela possui capacidade de rede equipada com 1x **porta Gigabit Ethernet** para rede rápida. Também vem com 4x **portas USB 3.2 Type-A (10Gbps)**, 1x **porta USB 2.0 Type-C** e 1x **conector CAN** para opções versáteis de conectividade. Esta placa de expansão foi montada com 1x **M.2 Key M 2280** para cartão SSD (inclui SSD NVMe 2280 de 128GB) e 1x slot **M.2 Key E** para expansão de conectividade sem fio LTE.

Além disso, há vários periféricos com suporte na placa. Ela permite que os usuários capturem e exibam conteúdo de vídeo em alta qualidade com 2x **MIPI-CSI de 15 pinos** e 1x conector **HDMI 2.1** para conexão de câmera e display. Também inclui um conector de **ventoinha PWM 5V**, um **soquete RTC** e um **conector RTC de 2 pinos**.

A placa suporta uma ampla faixa de entrada de **9-19V DC**, tornando-a flexível para integração em uma variedade de tarefas de computação. Ela mantém a operação na faixa de temperatura de -10°C a 60°C.

<div align="center"><img width ="1000" src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTE1NA_356376_xs4inuEPMdjVeyj__1679475367?w=1200&h=1335"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J401-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-p-5636.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

Para mais sugestões de acessórios, consulte a [página de bundle do reComputer J401](https://www.seeedstudio.com/reComputer-Classic-Optional-Accessories-NVIDIA-Jetson-Orin-Powered-Edge-AI-Box.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoxLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D).

## SODIMM de 260 pinos

A função principal do SODIMM de 260 pinos é conectar sua placa carrier ao **[NVIDIA Jetson Orin Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html?___store=retailer)/[NVIDIA Jetson Orin Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html)**, **[NVIDIA Jetson Orin NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)/[NVIDIA Jetson Orin NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)**.

### Visão geral da conexão

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Jetson-connect-J401.gif"/></div>

:::note
Se a conexão estiver correta, quando você conectar o adaptador de energia, verá o indicador de energia acender.
:::

## M.2 Key M

M.2 Key M é uma especificação para o layout físico e elétrico de um conector M.2 que suporta transferência de dados em alta velocidade usando a interface PCIe (Peripheral Component Interconnect Express). Conectores M.2 Key M são comumente usados para conectar unidades de estado sólido (SSDs) e outras placas de expansão de alto desempenho a uma placa-mãe ou outro dispositivo host. A designação "Key M" refere-se à configuração específica dos pinos e ao encaixe do conector M.2, que determina o tipo de dispositivos que podem ser conectados a ele.

### SSDs compatíveis são os seguintes

- [SSD Interno NVMe M.2 PCle Gen3x4 2280 de 128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [SSD Interno NVMe M.2 PCle Gen3x4 2280 de 256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [SSD Interno NVMe M.2 PCle Gen3x4 2280 de 512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [SSD Interno NVMe M.2 PCle Gen3x4 2280 de 1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [SSD Interno NVMe M.2 PCle Gen3x4 2280 de 2TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html)

### Visão geral da conexão

Se você quiser remover o SSD incluído e instalar um novo, pode seguir as etapas abaixo.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-Install-new-ssd.gif"/></div>

### Uso

Vamos explicar como fazer um benchmark simples no SSD conectado.

- **Etapa 1:** Verifique a velocidade de gravação executando o comando abaixo.

```sh
sudo dd if=/dev/zero of=/home/nvidia/test bs=1M count=512 conv=fdatasync
```

- **Etapa 2:** Verifique a velocidade de leitura executando os comandos abaixo. Certifique-se de executar isto depois de executar o comando acima para a velocidade de gravação.

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/nvidia/test of=/dev/null bs=1M count=512
```

## M.2 Key E

M.2 Key E é uma especificação para o layout físico e elétrico de um conector M.2 que suporta módulos de comunicação sem fio, como placas Wi‑Fi e Bluetooth. A designação "Key E" refere-se à configuração específica dos pinos e ao encaixe do conector M.2, que é otimizada para dispositivos de rede sem fio. Conectores M.2 Key E são comumente encontrados em placas-mãe e outros dispositivos que exigem opções de conectividade sem fio. Aqui recomendamos o módulo [Intel wifi/bluetooth](https://www.seeedstudio.com/RTL8822CE-Wireless-NIC-Kits-for-Nvidia-Jetson-Orin.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6Ijg4MjIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjozLCJjX3RvdGFsX3Jlc3VsdHMiOjQsImNfc2VhcmNoX3Jlc3VsdF90eXBlIjoiUHJvZHVjdCIsImNfc2VhcmNoX2ZpbHRlcnMiOiJzdG9yZUNvZGU6W3JldGFpbGVyXSJ9).

### Visão geral da conexão

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-wifi-model.gif"/></div>

### Uso

Depois de instalar o módulo wifi/bluetooth, você poderá ver o ícone de wifi/bluetooth no canto superior direito.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/></div>

#### Teste de Wi‑Fi

```
ifconfig
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-test.png"/></div>

#### Teste de Bluetooth

```
bluetoothctl
power on   #open bluetooth
agent on   #registe agent
scan on    #search other bluetooths
connect xx:xx:xx:xx #connect target bluetooth
paired-devices #show all paired devices
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-bluetooth-test.png"/></div>

## Câmeras CSI

CSI significa Camera Serial Interface. É uma especificação que descreve uma interface de comunicação serial para transferir dados de vídeo de sensores de imagem para um processador host. CSI é comumente usada em dispositivos móveis, câmeras e sistemas embarcados para permitir a transferência em alta velocidade e eficiente de dados de imagem e vídeo para processamento e análise.

### Câmeras compatíveis são as seguintes

- Câmeras IMX219

  - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)

  <!-- - [IMX219-130 8MP Camera with 130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)
  - [IMX219-160 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
  - [IMX219-200 8MP Camera with 200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html) -->

  - [Câmera IMX219-77 8MP com FOV de 77°](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
  - [Módulo de Câmera CMOS IMX219 montagem M12/CS](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
  - [Módulo de Câmera 3D Estéreo IMX219-83 8MP](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
  - [Câmera de Visão Noturna IR IMX219-77IR 8MP com FOV de 77°](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
  - [Câmera IMX219-160IR 8MP com FOV de 160°](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html)

- Câmeras IMX477

  - [Raspberry Pi High Quality Camera](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
  - [Raspberry Pi HQ Camera - montagem M12](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
  - [High Quality Camera for Raspberry Pi](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

### Visão geral da conexão

Aqui os 2 conectores de câmera CSI estão marcados como **CAM0 e CAM1**. Você pode conectar uma câmera a qualquer um dos 2 conectores ou conectar 2 câmeras a ambos os conectores ao mesmo tempo.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/camera-connect-J401.gif"/></div>

### Uso

Abra o terminal (Ctrl+Alt+T) e insira o comando como abaixo:

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-cameral.gif" /></div>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Método 1">

Para a porta CAM0

```sh
nvgstcapture-1.0 sensor-id=0 
```

Para a porta CAM1

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::note
Se você quiser alterar mais configurações da câmera, pode digitar **"nvgstcapture-1.0 --help"** para acessar todas as opções configuráveis disponíveis.
:::
</TabItem>

<TabItem value="Method 2" label="Method 2">

Para a porta CAM0

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

Para a porta CAM1

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::note
Se você quiser alterar mais configurações da câmera, pode atualizar os argumentos como **width, height, framerate, format**, etc.
:::
</TabItem>
</Tabs>

## RTC

RTC significa Real-Time Clock (Relógio de Tempo Real). É um relógio que mantém o controle da hora e data atuais de forma independente do relógio principal do sistema. RTCs são comumente usados em computadores, sistemas embarcados e outros dispositivos eletrônicos para manter a marcação precisa do tempo mesmo quando o dispositivo está desligado. Eles geralmente são alimentados por uma pequena bateria para garantir operação contínua e reter as informações de hora e data durante ciclos de energia.

### Visão geral da conexão

<Tabs>
<TabItem value="Method 1" label="Method 1">

Conecte uma **bateria tipo moeda CR1220 de 3V** ao soquete de RTC na placa, como mostrado abaixo. Certifique-se de que a extremidade **positiva (+)** da bateria esteja voltada para cima.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-coin-cell-back.gif"/></div>

</TabItem>

<TabItem value="Method 2" label="Method 2">

Conecte uma **bateria tipo moeda CR2302 de 3V com conector JST** ao soquete JST de 2 pinos 1,25 mm na placa, como mostrado abaixo:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-coin-cell.gif"/></div>

</TabItem>
</Tabs>

### Uso

- **Passo 1:** Conecte uma bateria de RTC conforme mencionado acima.

- **Passo 2:** Ligue o reComputer Industrial.

- **Passo 3:** No Ubuntu Desktop, clique no menu suspenso no canto superior direito, navegue até `Settings > Date & Time`, conecte-se a uma rede por meio de um cabo Ethernet e selecione **Automatic Date & Time** para obter a data/hora automaticamente.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
Se você não tiver se conectado à internet via Ethernet, pode definir a data/hora manualmente aqui.
:::

- **Passo 4:** Abra uma janela de terminal e execute o comando abaixo para verificar a hora do relógio de hardware.

```sh
sudo hwclock
```

Você verá uma saída semelhante à abaixo, que não é a data/hora correta.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-RTC.png"/></div>

- **Passo 5:** Altere a hora do relógio de hardware para a hora atual do relógio do sistema digitando o comando abaixo.

```sh
sudo hwclock --systohc
```

- **Passo 6:** Remova quaisquer cabos Ethernet conectados para garantir que ele não obtenha a hora da internet e reinicie a placa.

```sh
sudo reboot
```

- **Passo 7:** Verifique a hora do relógio de hardware para confirmar que a data/hora permanece a mesma mesmo que o dispositivo tenha sido desligado.

- **Passo 8:** Crie um novo script de shell usando qualquer editor de texto de sua preferência. Aqui usamos o editor de texto **vi**.

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **Passo 9:** Entre no **modo de inserção** pressionando **i**, copie e cole o seguinte conteúdo dentro do arquivo.

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **Passo 10:** Torne o script executável.

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **Passo 11:** Crie um arquivo systemd.

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

- **Passo 12:** Adicione o seguinte dentro do arquivo.

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

- **Passo 13:** Recarregue o daemon do systemctl.

```sh
sudo systemctl daemon-reload 
```

- **Passo 14:** Habilite o serviço recém-criado para iniciar na inicialização e inicie o serviço.

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **Passo 15:** Verifique se o script está em execução como um serviço systemd.

```sh
sudo systemctl status hwtosys.service
```

- **Passo 16:** Reinicie a placa e você verá que o relógio do sistema agora está sincronizado com o relógio de hardware.

## Controle da ventoinha

nvfancontrol é um daemon em espaço de usuário para controle da velocidade da ventoinha. Ele gerencia a velocidade da ventoinha com base na tabela de mapeamento temperatura‑para‑velocidade da ventoinha no arquivo de configuração do nvfancontrol.

Existem alguns elementos básicos no serviço nvfancontrol, incluindo Tmargin, kickstart PWM, perfil de ventoinha, controle de ventoinha e governor de ventoinha. Todos eles podem ser programados por meio do arquivo de configuração com base nas preferências do usuário. Este capítulo explicará cada um deles nas seções a seguir.

:::note
Se você quiser alterar o nvfancontrol.conf, certifique-se de ter lido [isto](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)
:::

### Uso

<Tabs>
<TabItem value="Method 1" label="Method 1">

- **Passo 1:** Pare o serviço systemd do nvfancontrol.

```
sudo systemctl stop nvfancontrol
```

- **Passo 2:** Altere o nvfancontrol.conf.

```
vi /etc/nvfancontrol.conf 
```

:::note
Depois de alterar o nvfancontrol.conf, digite `Ese` e `:q` para sair
:::

- **Passo 3:** Remova o arquivo de status.

```
sudo rm /var/lib/nvfancontrol/status
```

- **Passo 4:** Reinicie o serviço systemd do nvfancontrol.

```
sudo systemctl restart nvfancontrol
```

</TabItem>

<TabItem value="Method 2" label="Method 2">

- **Passo 1:**  Entre no modo root.

```
sudo -i
```

- **Passo 2:**  Pare o serviço systemd do nvfancontrol.

```
sudo systemctl stop nvfancontrol
```

- **Passo 3:**  Altere o valor PWM.

```
echo 100 > /sys/devices/platform/pwm-fan/hwmon/hwmon3/pwm1
```

:::note
Quanto maior o valor, mais rápida será a velocidade da ventoinha. O valor de PWM deve estar entre 0 e 255; pode ser que **hwmon3** não seja o seu caminho, então verifique o seu próprio caminho
:::

- **Passo 4:**  Verifique o rpm.

```
cat /sys/class/hwmon/hwmon0/rpm
```

</TabItem>
</Tabs>

## GPIO

**Os detalhes do conector de 40 pinos são mostrados abaixo:**

<div class="table-center">
<table style={{textAlign: 'center'}}>
<thead>
<tr>
  <th>Pino do Header</th>
  <th>Nome do Pino do Módulo</th>
  <th>Pino do Módulo</th>
  <th>Nome do Pino do SoC</th>
  <th>Uso Padrão</th>
  <th>Funcionalidade Alternativa</th>
</tr>
</thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Alimentação principal 3,3V</td>
      <td>-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Alimentação principal 5,0V</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td>I2C1_SDA</td>
      <td>191</td>
      <td>DP_AUX_CH3_N</td>
      <td>Dados I2C #1</td>
      <td>-</td>
    </tr>
    <tr>
      <td>4</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Alimentação principal 5,0V</td>
      <td>-</td>
    </tr>
    <tr>
      <td>5</td>
      <td>I2C1_SCL</td>
      <td>189</td>
      <td>DP_AUX_CH3_P</td>
      <td>Clock I2C #1</td>
      <td>-</td>
    </tr>
    <tr>
      <td>6</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Terra</td>
      <td>-</td>
    </tr>
    <tr>
      <td>7</td>
      <td>GPIO09</td>
      <td>211</td>
      <td>AUD_MCLK</td>
      <td>GPIO</td>
      <td>Clock Mestre de Áudio</td>
    </tr>
    <tr>
      <td>8</td>
      <td>UART1_TXD</td>
      <td>203</td>
      <td>UART1_TX</td>
      <td>Transmissão UART #1</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>9</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Terra</td>
      <td>-</td>
    </tr>
    <tr>
      <td>10</td>
      <td>UART1_RXD</td>
      <td>205</td>
      <td>UART1_RX</td>
      <td>Recepção UART #1</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>11</td>
      <td>UART1_RTS*</td>
      <td>207</td>
      <td>UART1_RTS</td>
      <td>GPIO</td>
      <td>UART #2 Request to Send</td>
    </tr>
    <tr>
      <td>12</td>
      <td>I2S0_SCLK</td>
      <td>199</td>
      <td>DAP5_SCLK</td>
      <td>GPIO</td>
      <td>Clock de Áudio I2S #0</td>
    </tr>
    <tr>
      <td>13</td>
      <td>SPI1_SCK</td>
      <td>106</td>
      <td>SPI3_SCK</td>
      <td>GPIO</td>
      <td>Clock de Deslocamento SPI #1</td>
    </tr>
    <tr>
      <td>14</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Terra</td>
      <td>-</td>
    </tr>
    <tr>
      <td>15</td>
      <td>GPIO12</td>
      <td>218</td>
      <td>TOUCH_CLK</td>
      <td>GPIO</td>
      <td>-</td>
    </tr>
    <tr>
      <td>16</td>
      <td>SPI1_CSI1*</td>
      <td>112</td>
      <td>SPI3_CS1</td>
      <td>GPIO</td>
      <td>Chip Select SPI #1 nº 1</td>
    </tr>
    <tr>
      <td>17</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>GPIO</td>
      <td>-</td>
    </tr>
    <tr>
      <td>18</td>
      <td>SPI1_CSI0*</td>
      <td>110</td>
      <td>SPI3_CS0</td>
      <td>GPIO</td>
      <td>Chip Select SPI #0 nº 0</td>
    </tr>
    <tr>
      <td>19</td>
      <td>SPI0_MOSI</td>
      <td>89</td>
      <td>SPI1_MOSI</td>
      <td>GPIO</td>
      <td>SPI #0 Master Out/Slave In</td>
    </tr>
    <tr>
      <td>20</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Terra</td>
      <td>-</td>
    </tr>
    <tr>
      <td>21</td>
      <td>SPI0_MISO</td>
      <td>93</td>
      <td>SPI1_MISO</td>
      <td>GPIO</td>
      <td>SPI #0 Master In/Slave Out</td>
    </tr>
    <tr>
      <td>22</td>
      <td>SPI1_MISO</td>
      <td>108</td>
      <td>SPI3_MISO</td>
      <td>GPIO</td>
      <td>SPI #1 Master In/Slave Out</td>
    </tr>
    <tr>
      <td>23</td>
      <td>SPI0_SCK</td>
      <td>91</td>
      <td>SPI1_SCK</td>
      <td>GPIO</td>
      <td>Clock de Deslocamento SPI #0</td>
    </tr>
    <tr>
      <td>24</td>
      <td>SPI0_CS0*</td>
      <td>95</td>
      <td>SPI1_CS0</td>
      <td>GPIO</td>
      <td>Chip Select #0 do SPI #0</td>
    </tr>
    <tr>
      <td>25</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Terra</td>
      <td>-</td>
    </tr>
    <tr>
      <td>26</td>
      <td>SPI0_CS1*</td>
      <td>97</td>
      <td>SPI1_CS1</td>
      <td>GPIO</td>
      <td>Chip Select #1 do SPI #0</td>
    </tr>
    <tr>
      <td>27</td>
      <td>I2C0_SDA</td>
      <td>187</td>
      <td>GEN2_I2C_SDA</td>
      <td>Dados do I2C #0</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>28</td>
      <td>I2C0_SCL</td>
      <td>185</td>
      <td>GEN2_I2C_SCL</td>
      <td>Clock do I2C #0</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>29</td>
      <td>GPIO01</td>
      <td>118</td>
      <td>SOC_GPIO41</td>
      <td>GPIO</td>
      <td>Clock de Uso Geral #0</td>
    </tr>
    <tr>
      <td>30</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Terra</td>
      <td>-</td>
    </tr>
    <tr>
      <td>31</td>
      <td>GPIO11</td>
      <td>216</td>
      <td>SOC_GPIO42</td>
      <td>GPIO</td>
      <td>Clock de Uso Geral #1</td>
    </tr>
    <tr>
      <td>32</td>
      <td>GPIO07</td>
      <td>206</td>
      <td>SOC_GPIO44</td>
      <td>GPIO</td>
      <td>PWM</td>
    </tr>
    <tr>
      <td>33</td>
      <td>GPIO13</td>
      <td>228</td>
      <td>SOC_GPIO54</td>
      <td>GPIO</td>
      <td>PWM</td>
    </tr>
    <tr>
      <td>34</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Terra</td>
      <td>-</td>
    </tr>
    <tr>
      <td>35</td>
      <td>I2S0_FS</td>
      <td>197</td>
      <td>DAP5_FS</td>
      <td>GPIO</td>
      <td>Seleção de Campo de Áudio I2S #0</td>
    </tr>
    <tr>
      <td>36</td>
      <td>UART1_CTS*</td>
      <td>209</td>
      <td>UART1_CTS</td>
      <td>GPIO</td>
      <td>Clear to Send da UART #1</td>
    </tr>
    <tr>
      <td>37</td>
      <td>SPI1_MOSI</td>
      <td>104</td>
      <td>SPI3_MOSI</td>
      <td>GPIO</td>
      <td>Master Out/Slave In do SPI #1</td>
    </tr>
    <tr>
      <td>38</td>
      <td>I2S0_DIN</td>
      <td>195</td>
      <td>DAP5_DIN</td>
      <td>GPIO</td>
      <td>Entrada de Dados de Áudio I2S #0</td>
    </tr>
    <tr>
      <td>39</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Terra</td>
      <td>-</td>
    </tr>
    <tr>
      <td>40</td>
      <td>I2S0_DOUT</td>
      <td>193</td>
      <td>DAP5_DOUT</td>
      <td>GPIO</td>
      <td>Saída de Dados de Áudio I2S #0</td>
    </tr>
  </tbody>
</table>
</div>

### UART

UART significa Universal Asynchronous Receiver/Transmitter. É um protocolo de comunicação usado para comunicação serial entre dois dispositivos. A comunicação UART envolve dois pinos: um para transmissão de dados (TX) e um para recepção de dados (RX). Ela é assíncrona, o que significa que os dados são transmitidos sem um sinal de clock compartilhado entre os dispositivos. UART é comumente usado em várias aplicações, como microcontroladores, sensores e comunicação entre diferentes dispositivos eletrônicos.

#### Visão Geral da Conexão

A interface UART está usando o pino abaixo, ou você pode usar outra interface UART no J401:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Pino do Header</th>
      <th>Nome do Pino do Módulo</th>
      <th>Pino do Módulo</th>
      <th>Nome do Pino do SoC</th>
      <th>Uso Padrão</th>
      <th>Funcionalidade Alternativa</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>6</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Terra</td>
      <td>-</td>
    </tr>
    <tr>
      <td>8</td>
      <td>UART1_TXD</td>
      <td>203</td>
      <td>UART1_TX</td>
      <td>Transmissão da UART #1</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>10</td>
      <td>UART1_RXD</td>
      <td>205</td>
      <td>UART1_RX</td>
      <td>Recepção da UART #1</td>
      <td>GPIO</td>
    </tr>
  </tbody>
</table>
</div>
Conecte o J401 com TTL com UART como abaixo:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Pino do Header J401</th>
      <th> Uso</th>
      <th>USB para TTL</th>
      <th>Uso</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>6</td>
      <td>Terra</td>
      <td>GND</td>
      <td>Terra</td>
    </tr>
    <tr>
      <td>8</td>
      <td>UART1_TXD</td>
      <td>U_RX</td>
      <td>UART_RX</td>
    </tr>
    <tr>
      <td>10</td>
      <td>UART1_RXD</td>
      <td>U_TX</td>
      <td>UART_TX</td>
    </tr>
  </tbody>
</table>
</div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-UART-connect.gif"/></div>

#### Uso

- **Passo 1:** Instale o [PuTTy](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) no seu laptop com Windows e configure o PuTTy como abaixo:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-windows-uart-set.png"/></div>

- **Passo 2:** Instale o PuTTy no Jetson, abra seu terminal (ALT+Ctrl+T) e digite o seguinte comando.

```
sudo apt install putty
```

- **Passo 3:** Use o PuTTy no Windows para enviar 'hello linux' para o Jetson e use o PuTTy no Jetson para enviar 'hello windows' para o Windows.

:::note
Certifique-se de que o seu baudrate foi configurado para 115200.
:::

O resultado é o seguinte:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-uart-result.gif"/></div>

### I2C

I2C significa Inter-Integrated Circuit. É um protocolo de comunicação serial amplamente utilizado que permite a comunicação entre múltiplos circuitos integrados em um sistema. O I2C usa duas linhas bidirecionais: uma para dados (SDA) e uma para clock (SCL). Os dispositivos conectados em um barramento I2C podem atuar como mestre ou escravo, permitindo que vários dispositivos se comuniquem entre si. O I2C é popular por sua simplicidade, flexibilidade e capacidade de conectar uma variedade de dispositivos, como sensores, chips de memória e outros periféricos em sistemas embarcados e dispositivos eletrônicos.

#### Visão Geral da Conexão

A interface I2C está usando o pino abaixo, ou você pode usar outra interface I2C no J401:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Pino do Header</th>
      <th>Nome do Pino do Módulo</th>
      <th>Pino do Módulo</th>
      <th>Nome do Pino do SoC</th>
      <th>Uso Padrão</th>
      <th>Funcionalidade Alternativa</th>
    </tr>
  </thead>
    <tr>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Alimentação Principal 5,0V</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td>I2C1_SDA</td>
      <td>191</td>
      <td>DP_AUX_CH3_N</td>
      <td>Dados do I2C #1</td>
      <td>-</td>
    </tr>
    <tr>
      <td>5</td>
      <td>I2C1_SCL</td>
      <td>189</td>
      <td>DP_AUX_CH3_P</td>
      <td>Clock do I2C #1</td>
      <td>-</td>
    </tr>
    <tr>
      <td>6</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Terra</td>
      <td>-</td>
    </tr>
    </table>
</div>

Conecte o J401 ao [Grove-3-Axis Digital Accelerometer](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html) com I2C como abaixo:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>J401</th>
      <th>Uso</th>
      <th>Grove-3-Axis Digital Accelerometer</th>
      <th>Uso</th>
    </tr>
  </thead>
    <tr>
      <td>2</td>
      <td>Alimentação 5V</td>
      <td>Vcc</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td>I2C1_SDA</td>
      <td>SDA</td>
      <td>I2C_SDA</td>
    </tr>
    <tr>
      <td>5</td>
      <td>I2C1_SCL</td>
      <td>SCL</td>
      <td>I2C_SCL</td>
    </tr>
        <tr>
      <td>6</td>
      <td>Terra</td>
      <td>GND</td>
      <td>Terra</td>
    </tr>
</table>
</div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-I2C-connect.gif"/></div>

#### Teste

Abra seu terminal (ALT+Ctrl+T) e digite o seguinte comando:

```
i2cdetect -y -r 7
```

:::note
Seu canal pode ser diferente do meu no comando: ```i2cdetect -y -r x```.
:::

Você verá o resultado abaixo; antes de conectar ao I2C, nenhum dispositivo I2C foi detectado no canal 7, mas depois disso um dispositivo I2C com o endereço 0x19 foi detectado.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-I2C-test.png"/></div>

:::info
Se você quiser usar pinos IO gerais para controle lógico, consulte [este wiki](/pt-br/reComputer_Jetson_GPIO).
:::

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
