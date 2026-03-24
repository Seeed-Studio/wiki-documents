---
description: Uso de hardware e interfaces para reComputer Industrial J30 Série e J40 Série
title: reComputer Industrial J40, J30 Uso de hardware e interfaces
tags:
  - reComputer Industrial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage
last_update:
  date: 05/16/2023
  author: Lakshantha
createdAt: '2023-06-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

Este wiki apresenta os diversos hardwares e interfaces diferentes no reComputer Industrial J4012, J4011, J3011, J3010 e como usá-los para expandir suas ideias de projeto.

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/2.png"/></div>

## Câmeras CSI

O reComputer Industrial está equipado com **2 conectores de câmera MIPI CSI de 2 vias e 15 pinos** e as câmeras abaixo são suportadas

- Câmeras IMX219

  - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
  - [IMX219-77 8MP Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
  - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
  - [IMX219-83 8MP 3D Stereo Camera Module](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
  - [IMX219-77IR 8MP IR Night Vision Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
  - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

- Câmeras IMX477

  - [Raspberry Pi High Quality Camera](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
  - [Raspberry Pi HQ Camera - M12 mount](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
  - [High Quality Camera for Raspberry Pi](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

<!-- - [IMX219-160IR 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html) -->
<!-- - [IMX219-130 8MP Camera with 130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html) -->
<!-- - [IMX219-160 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
- [IMX219-200 8MP Camera with 200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html) -->

### Visão geral da conexão

Aqui os 2 conectores de câmera CSI são marcados como **CAM0 e CAM1**. Você pode conectar uma câmera a qualquer um dos 2 conectores ou conectar 2 câmeras a ambos os conectores ao mesmo tempo.

**Passo 1:** Puxe suavemente a trava de cor preta no conector CSI

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/5.png"/></div>

**Passo 2:** Insira o cabo flat de 15 pinos no conector certificando-se de que os contatos dourados estejam voltados para baixo

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/6.png"/></div>

**Passo 3:** Empurre a trava de cor preta para prender o cabo flat no lugar

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/10.png"/></div>

### Uso

Primeiro você precisa configurar a placa para carregar o driver apropriado para a câmera específica que você usará. Para isso o sistema JetPack possui uma ferramenta embutida para suportar câmeras IMX219 e IMX477.

**Passo 1:** Abra o terminal e execute o seguinte

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

**Passo 2:** Selecione **Configure Jetson Nano CSI Connector**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/119.jpg"/></div>

**Passo 3:** Selecione **Configure for compatible hardware**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/120.jpg"/></div>

**Passo 4:** Selecione a câmera que você deseja usar

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/121.jpg"/></div>

**Passo 5:** Selecione **Save pin changes**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/122.jpg"/></div>

**Passo 6:** Selecione **Save and reboot to reconfigure pins**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/123.jpg"/></div>

**Passo 7:** Pressione qualquer tecla no teclado e o dispositivo será reiniciado com a configuração de câmera aplicada

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/124.jpg"/></div>

Você pode usar câmeras CSI de 2 maneiras diferentes. Siga os comandos abaixo de acordo com o conector da câmera.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Método 1">

Para porta CAM0

```sh
nvgstcapture-1.0 sensor-id=0 
```

Para porta CAM1

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::note
Se você quiser alterar mais configurações da câmera, você pode digitar **"nvgstcapture-1.0 --help"** para acessar todas as opções configuráveis disponíveis
:::

</TabItem>

<TabItem value="Method 2" label="Método 2">

Para porta CAM0

```bash
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

Para porta CAM1

```bash
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::note
Se você quiser alterar mais configurações da câmera, você pode atualizar os argumentos como **width, height, framerate, format**, etc.
:::

</TabItem>
</Tabs>

## RTC

O reComputer Industrial está equipado com 2 maneiras diferentes de se conectar a uma bateria RTC

### Visão geral da conexão

- Método 1:

Conecte uma **bateria tipo moeda CR1220 de 3V** ao soquete RTC na placa como mostrado abaixo. Certifique-se de que a extremidade **positiva (+)** da bateria esteja voltada para cima

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/11.jpg"/></div>

- Método 2:

Conecte uma **bateria tipo moeda CR2302 de 3V com conector JST** ao soquete JST de 2 pinos e 1,25 mm na placa como mostrado abaixo

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/12.jpg"/></div>

### Uso

:::danger
Observe que se o seu dispositivo reComputer já tiver sido atualizado para o JetPack 6 ou posterior, o RTC funcionará normalmente sem nenhuma configuração adicional. Se você estiver usando JetPack 5, será necessário consultar o conteúdo a seguir para configurar o serviço de sincronização de relógio.
:::

**Passo 1:** Conecte uma bateria RTC conforme mencionado acima

**Passo 2:** Ligue o reComputer Industrial

**Passo 3:** No Ubuntu Desktop, clique no menu suspenso no canto superior direito, navegue até `Settings > Date & Time`, conecte-se a uma rede via cabo Ethernet e selecione **Automatic Date & Time** para obter a data/hora automaticamente

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
Se você não tiver se conectado à internet via Ethernet, pode definir manualmente a data/hora aqui
:::

**Passo 4:** Abra uma janela de terminal e execute o comando abaixo para verificar a hora do relógio de hardware

```sh
sudo hwclock
```

Você verá uma saída semelhante à abaixo, que não é a data/hora correta

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

**Passo 5:** Altere a hora do relógio de hardware para a hora atual do relógio do sistema digitando o comando abaixo

```sh
sudo hwclock --systohc
```

**Passo 6:** Remova quaisquer cabos Ethernet conectados para garantir que ele não obtenha a hora da internet e reinicie a placa

```sh
sudo reboot
```

**Passo 7:** Verifique a hora do relógio de hardware para confirmar que a data/hora permanece a mesma, embora o dispositivo tenha sido desligado

Agora criaremos um script para sempre sincronizar o relógio do sistema a partir do relógio de hardware em cada inicialização.

**Passo 8:** Crie um novo script shell usando qualquer editor de texto de sua preferência. Aqui usamos o editor de texto **vi**

```sh
sudo vi /usr/bin/hwtosys.sh 
```

**Passo 9:** Entre no **modo de inserção** pressionando **i**, copie e cole o seguinte conteúdo dentro do arquivo

```sh
#!/bin/bash

sudo hwclock --hctosys
```

**Passo 10:** Torne o script executável

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

**Passo 11:** Crie um arquivo systemd

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

**Passo 12:** Adicione o seguinte dentro do arquivo

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

**Passo 13:** Recarregue o daemon do systemctl

```sh
sudo systemctl daemon-reload 
```

**Passo 14:** Habilite o serviço recém-criado para iniciar na inicialização e inicie o serviço

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

**Passo 15:** Verifique se o script está em execução como um serviço systemd

```sh
sudo systemctl status hwtosys.service
```

**Passo 16:** Reinicie a placa e você verá que o relógio do sistema agora está sincronizado com o relógio de hardware

## M.2 Key M

Fora da caixa, o reComputer Industrial inclui um SSD de 128 GB conectado ao slot M.2 Key M, que vem pré-instalado com o sistema JetPack.

### Visão geral da conexão

Se você quiser remover o SSD incluído e instalar um novo, pode seguir os passos abaixo. Aqui recomendamos apenas o uso de SSDs Seeed com armazenamento de [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html), [256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html) e [512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html), porque apenas esses SSDs foram testados por nós. Além disso, esta interface suporta SSDs PCIe Gen4.0.

- **Passo 1:** Remova o parafuso do SSD pré-instalado

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/15.png"/></div>

- **Passo 2:** Remova o SSD deslizando-o para fora do conector do SSD

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/16.png"/></div>

- **Passo 3:** Insira um novo SSD e aperte novamente o parafuso

### Uso

Vamos explicar como fazer um benchmark simples no SSD conectado

- **Passo 1:** Verifique a velocidade de gravação executando o comando abaixo

```sh
sudo dd if=/dev/zero of=/home/nvidia/test bs=1M count=512 conv=fdatasync
```

- **Passo 2:** Verifique a velocidade de leitura executando os comandos abaixo. Certifique-se de executar isto depois de executar o comando acima para velocidade de gravação.

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/nvidia/test of=/dev/null bs=1M count=512
```

## mini PCIe

O reComputer Industrial vem com um conector mini PCIe que suporta módulos 4G e LoRa. No entanto, você só pode conectar um módulo 4G ou um módulo LoRa por vez.

### Visão geral da conexão do módulo 4G

Atualmente esta placa suporta os módulos EC25EUXGA e EC20CEHCLG.

- **Passo 1:** Desligue a placa se ela já estiver ligada

- **Passo 2:** Remova o espaçador incluído. Este espaçador só é necessário se você estiver usando a interface M.2 Key B

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/110.jpg"/></div>

- **Passo 3:** Insira o módulo 4G no slot mini PCIe, use os parafusos pré-instalados e parafuse-os nos 2 furos para fixar o módulo 4G no lugar

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/17.png"/></div>

- **Passo 4:** Conecte uma antena ao conector de antena rotulado como **MAIN**. Aqui você precisa usar um conector IPEX

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/18.png"/></div>

- **Passo 5:** Insira um cartão nano SIM habilitado para 4G no slot de cartão SIM na placa, certificando-se de que a superfície dourada do cartão SIM esteja voltada para baixo. Aqui insira o cartão até o final para que ele volte após atingir a mola interna e trave no lugar.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
Se você quiser remover o cartão SIM, empurre o cartão para dentro até atingir a mola interna para que o SIM saia do slot
:::

- **Passo 6:** Adicione um jumper entre os pinos **SIM_MUX_SEL** e **GND** no **Header J8 (Control and UART)**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/20.png"/></div>

- **Passo 6:** Ligue a placa

### Uso do módulo 4G - Teste de discagem

Ao usar o módulo EC25, o módulo iniciará automaticamente e estará pronto para uso. No entanto, ao usar o módulo EC20, você precisa reiniciar o módulo para que ele funcione

**Passo 1:** Se você estiver usando o módulo EC25, pode pular esta etapa. Porém, se estiver usando o módulo EC20, insira os seguintes comandos para acessar o pino GPIO309, que é responsável por reiniciar o módulo 4G.

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 1 > value
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo gpioset --mode=wait gpiochip2 9=1
```

</TabItem>
</Tabs>

Para o módulo EC25, o LED2 acenderá em verde assim que a placa for inicializada. Para o módulo EC20, o LED2 acenderá em verde após reiniciar o módulo, conforme explicado acima

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/118.jpg"/></div>

**Passo 2:** Instale o minicom

```sh
sudo apt update
sudo apt install minicom -y
```

**Passo 3:** Entre no console serial do módulo 4G conectado para que possamos inserir comandos AT e interagir com o módulo 4G

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**Passo 4:** Pressione **Ctrl+A** e depois pressione **E** para ativar o eco local

**Passo 5:** Insira o comando **"AT"** e pressione Enter. Se você vir a resposta "OK", o módulo 4G está funcionando corretamente

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

**Passo 6:** Insira o comando **"ATI"** para verificar as informações do módulo

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

**Passo 7:** Para testar o módulo, insira o comando abaixo para chamar outro número de telefone

```sh
ATD<phone_number>;
```

E você verá a saída abaixo

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

Se o número de telefone inserido puder receber a chamada, o módulo está funcionando como esperado

### Uso do módulo 4G - Conectar à Internet

#### Módulo EC25

Se você estiver usando o módulo EC25, siga os passos abaixo

- **Passo 1:** Após abrir o console serial do módulo 4G conforme explicado acima (seção Uso do módulo 4G - Teste de discagem), execute o seguinte comando para conectar à internet. Aqui substitua **YOUR_APN** pelo APN do seu provedor de rede

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/89.jpg"/></div>

Em caso de conexão bem-sucedida, deve ser exibido **OK**, como você pode ver na imagem acima

- **Passo 2:** Reinicie o módulo 4G executando o seguinte

```sh
AT+CFUN=1,1
```

Agora você perderá a conexão com o módulo 4G nos terminais seriais

- **Passo 3:** Feche o **minicom** pressionando **CTRL + A** e depois **Q**

- **Passo 4:** Digite **ifconfig** e você verá um endereço IP na interface **usb0**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/93.png"/></div>

- **Passo 5:** Você pode tentar pingar um website como segue para verificar se há conectividade com a internet

```sh
ping -I usb0 www.bing.com -c 5
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/94.png"/></div>

#### Módulo EC20

Se você estiver usando o módulo EC20, siga os passos abaixo

- **Passo 1:** Se você já tiver reiniciado o módulo 4G conforme explicado na seção anterior (seção Uso do módulo 4G - Teste de discagem) para o módulo EC20, pode pular esta etapa. No entanto, se ainda não fez isso, faça agora

- **Passo 2:** Entre no console serial do módulo 4G e insira o seguinte comando para definir o modo ECM

```sh
AT+QCFG="usbnet",1
```

- **Passo 3:** Reinicie o módulo 4G

- **Passo 4:** Dentro do console do módulo 4G, execute o seguinte comando para conectar à internet. Aqui substitua **YOUR_APN** pelo APN do seu provedor de rede

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

- **Passo 6:** Digite **ifconfig** e você verá um endereço IP na interface **usb1**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/90.jpg"/></div>

- **Passo 7:** Você pode tentar pingar uma URL como segue para verificar se há conectividade com a internet

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/92.png"/></div>

### Visão geral da conexão do módulo LoRa

Atualmente esta placa suporta o módulo WM1302 SPI. Você pode usar a [versão US](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html) ou a [versão EU](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html), que estão disponíveis em nosso Bazaar.

- **Passo 1:** Desligue a placa se ela já estiver ligada

- **Passo 2:** Insira o módulo LoRa no slot mini PCIe e use os parafusos pré-instalados e parafuse-os nos 2 furos para fixar o módulo 4G no lugar

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/25.png"/></div>

- **Passo 3:** Conecte uma antena ao conector de antena. Aqui você precisa usar um conector IPEX

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/26.png"/></div>

:::note
Certifique-se de que não haja jumper entre os pinos **SIM_MUX_SEL** e **GND** no **Header J8 (Control and UART)**. Este jumper só é necessário ao usar módulos 4G
:::

- **Passo 4:** Ligue a placa

### Uso do módulo LoRa - Testando o RF LoRa

Quando o módulo LoRa estiver conectado, você verá os LEDs verde e azul no módulo acenderem

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/27.png"/></div>

- **Passo 1:** Insira o comando abaixo para verificar se o módulo LoRa é detectado pelo sistema

```sh
i2cdetect -r -y 7
```

Se você vir a saída abaixo, o módulo é detectado pelo sistema

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **Passo 2:** Insira os comandos abaixo para compilar e gerar a ferramenta de transmissão de sinais LoRa

:::danger
Por favor, note que esta **ferramenta de transmissão de sinais LoRa** é aplicável apenas ao Jetpack5. Se você quiser testar a funcionalidade do módulo LoRa no Jetpack6, consulte o [esquemático](https://github.com/Seeed-Studio/OSHW-Jetson-Series/blob/main/reComputer%20Jetson%20carrier%20board/reComputer%20Industrial%20J201/Schematic/reComputer%20Industrial%20J201_V1.2.pdf) e o [pinmux](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template) para determinar os nomes dos pinos e use o comando `gpioset` para definir o estado do pino.
:::

```bash
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

Se você vir o resultado abaixo e o LED no módulo LoRa ficar VERMELHO, isso significa que o módulo está transmitindo sinais de RF com sucesso

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/28.png"/></div>

Para parar a transmissão, você pode pressionar **CTRL + C** no teclado.

### Uso do Módulo LoRa - Conectar ao TTN

Agora vamos conectar ao TTN (The Things Network) e usar o reComputer Industrial como um gateway LoRaWAN do TTN

- **Passo 1:** Digite o comando abaixo para deixar o encaminhador de pacotes pronto

```sh
cd ..
cd packet_forwarder
cp ../tools/reset_lgw.sh .
```

- **Passo 2:** Execute o seguinte de acordo com o módulo LoRa que você está usando. Aqui nós testamos a versão SPI US915

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

No entanto, os comandos para outros módulos diferentes são os seguintes

```sh
# USB 915
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB

# SPI EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# USB EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

Depois de executar o comando acima, você verá a saída abaixo com a última linha mostrando a informação do **EUI do concentrador**. Por favor, guarde essa informação porque iremos usá‑la depois ao configurar o gateway com o TTN

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/79.jpg"/></div>

- **Passo 3:** Visite [este URL](https://console.cloud.thethings.network) para entrar no console do TTN e selecione uma região de sua preferência

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/80.png"/></div>

- **Passo 4:** Faça login se você já tiver uma conta ou cadastre uma nova conta se ainda não tiver

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/81.png"/></div>

- **Passo 5:** Clique em **Go to gateways**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/82.png"/></div>

- **Passo 6:** Clique em **+ Register gateway**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/83.png"/></div>

- **Passo 7:** Insira o **EUI do Concentrador** que você obteve antes na seção **Gateway EUI** e clique em **Confirm**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/84.jpg"/></div>

- **Passo 8:** Insira o **Frequency plan** de acordo com o módulo LoRa que você está usando. Aqui estamos usando a versão US915 do módulo e, portanto, selecionamos **United Stated 902-928 MHz, FSB 2 (used by TTN)**. Depois disso clique em **Register gateway**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/85.jpg"/></div>

:::note
O **Gateway ID** foi preenchido automaticamente para você. No entanto, você pode alterá‑lo para qualquer coisa que preferir. **Gateway name** não é obrigatório preencher. No entanto, você também pode preenchê‑lo de acordo com a sua preferência
:::

- **Passo 9:** Anote o **Gateway Server Address** na página principal do gateway

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/86.jpg"/></div>

- **Passo 9:** No reTerminal Industrial, edite o arquivo **global_conf_json** que usamos junto com o comando **lora_pkt_fwd**. Aqui você precisa alterar as opções **gateway_ID**, **server_address**, **serv_port_up** e **serv_port_down** da seguinte forma

  - gateway_ID: EUI do concentrador do dispositivo
  - server_address: Gateway Server Address do TTN
  - serv_port_up: 1700
  - serv_port_down: 1700

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/87.png"/></div>

- **Passo 10:** Execute novamente o encaminhador de pacotes

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

Se você vir a saída abaixo, significa que o dispositivo foi conectado com sucesso ao TTN

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/88.jpg"/></div>

## M.2 Key B

O reComputer Industrial vem com um conector M.2 Key B que suporta módulos 4G e 5G. Atualmente testamos o **módulo 5G SIM8202G-M2**

### Visão Geral da Conexão do Módulo 5G

- **Passo 1:** Desligue a placa se ela já estiver ligada

- **Passo 2:** Certifique‑se de que o espaçador (standoff) esteja no lugar e então remova o parafuso superior do espaçador

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/111.jpg"/></div>

- **Passo 2:** Deslize o módulo 5G para o slot M.2 Key B e parafuse o parafuso do espaçador para fixar o módulo 5G no lugar (falar sobre o espaçador)

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/112.jpg"/></div>

- **Passo 3:** Conecte 4 antenas aos conectores de antena no módulo. Aqui você precisa usar um conector IPEX 4

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/113.jpg"/></div>

- **Passo 4:** Insira um cartão nano SIM habilitado para 5G no slot de cartão SIM na placa, certificando‑se de que a superfície dourada do cartão SIM esteja voltada para baixo. Aqui insira o cartão até o fim para que ele volte depois de atingir a mola interna e trave no lugar.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
Se você quiser remover o cartão SIM, empurre o cartão para dentro até atingir a mola interna para que o SIM saia do slot
:::

- **Passo 5:** Ligue a placa

### Uso do Módulo 5G - Teste de Discagem

Ao usar o módulo 5G SIM8202G-M2, o módulo não iniciará automaticamente. Portanto, primeiro precisamos alternar alguns GPIOs para fazê‑lo iniciar

**Passo 1:** Digite o seguinte para iniciar o módulo 5G

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 0 > value

cd..
echo 341 > export 
cd PEE.02
echo out > direction
echo 1 > value

cd..
echo 330 > export 
cd PCC.02
echo out > direction
echo 0 > value
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo gpioset --mode=wait gpiochip2 9=0
sudo gpioset --mode=wait gpiochip1 25=1
sudo gpioset --mode=wait gpiochip1 14=0
```

:::note
Por favor, abra vários terminais para executar estes comandos e certifique‑se de que cada janela de terminal permaneça ativa.
:::

</TabItem>
</Tabs>

Depois que o acima for executado, o LED2 acenderá em verde como abaixo

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/117.jpg"/></div>

**Passo 2:** Instale o minicom

```sh
sudo apt update
sudo apt install minicom -y
```

**Passo 3:** Entre no console serial do módulo 5G conectado para que possamos inserir comandos AT e interagir com o módulo 5G

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**Passo 4:** Digite o comando **"AT"** e pressione Enter. Se você vir a resposta como "OK", o módulo 5G está funcionando corretamente

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

**Passo 5:** Digite o comando **"ATI"** para verificar as informações do módulo

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>

**Passo 6:** Para testar o módulo, digite o comando abaixo para chamar outro número de telefone

```sh
ATD<phone_number>;
```

E você verá a saída abaixo

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

## DI/ DO

O reComputer Industrial suporta 4 canais de entrada digital e 4 canais de saída digital, todos isolados opticamente para proteger efetivamente a placa principal contra picos de tensão ou outras perturbações elétricas. Há também uma interface CAN neste mesmo conector, que discutiremos mais adiante neste wiki

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/37.png"/></div>

### Tabela de Atribuição de Pinos DI/ DO

<table>
  <thead>
    <tr>
      <th>Tipo</th>
      <th>Nome do Rótulo</th>
      <th>Sinal do Esquemático</th>
      <th>Número do Pino do Módulo</th>
      <th>Número BGA</th>
      <th>Número GPIO</th>
      <th>Limites V/A</th>
      <th>Observação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>Entrada</td>
      <td>DI1</td>
      <td>DI_1_GPIO01</td>
      <td>118</td>
      <td>PQ.05</td>
      <td>453</td>
      <td rowSpan={4}>12V/ 20mA de corrente no total</td>
      <td rowSpan={4}>Entrada Digital de 12V, o sinal de terra precisa<br />ser conectado ao GND_DI (Pino2/4/6)</td>
    </tr>
    <tr>
      <td>DI2</td>
      <td>DI_2_GPIO09</td>
      <td>211</td>
      <td>PAC.06</td>
      <td>492</td>
    </tr>
    <tr>
      <td>DI3</td>
      <td>DI_3_GPIO11</td>
      <td>216</td>
      <td>PQ.06</td>
      <td>454</td>
    </tr>
    <tr>
      <td>DI4</td>
      <td>DI_4_GPIO13</td>
      <td>228</td>
      <td>PH.00</td>
      <td>391</td>
    </tr>
    <tr>
      <td rowSpan={4}>Saída</td>
      <td>DO1</td>
      <td>DO_1_GPIO</td>
      <td>193</td>
      <td>PI.00</td>
      <td>399</td>
      <td rowSpan={4}>Carga de 40V/40mA por pino</td>
      <td rowSpan={4}>Saída digital, tensão máxima suportada<br />40V, o sinal de terra precisa ser<br />conectado ao GND_DO(Pino8/10)</td>
    </tr>
    <tr>
      <td>DO2</td>
      <td>DO_2_GPIO</td>
      <td>195</td>
      <td>PI.01</td>
      <td>400</td>
    </tr>
    <tr>
      <td>DO3</td>
      <td>DO_3_GPIO</td>
      <td>197</td>
      <td>PI.02</td>
      <td>401</td>
    </tr>
    <tr>
      <td>DO4</td>
      <td>DO_4_GPIO</td>
      <td>199</td>
      <td>PH.07</td>
      <td>398</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>CH</td>
      <td colSpan={5} rowSpan={2}>/</td>
      <td rowSpan={2}>Barramento CAN com sinais diferenciais padrão, <br />o sinal de terra precisa ser conectado ao GND_ISO (Pino 12)</td>
    </tr>
    <tr>
      <td />
      <td>CL</td>
    </tr>
    <tr>
      <td>Terra</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>O sinal de terra de referência para a Entrada Digital de 12V,<br />que também é o caminho de retorno para o DI</td>
    </tr>
    <tr>
      <td />
      <td>GND_DO</td>
      <td>O sinal de terra de referência da saída digital, que também é o caminho de retorno do DO</td>
    </tr>
    <tr>
      <td />
      <td>CG</td>
      <td>O sinal de terra de referência para CAN</td>
    </tr>
  </tbody>
</table>

:::danger
Observe que os números dos pinos na tabela acima são válidos apenas para o Jetpack5. Podemos obter os números dos pinos para o Jetpack6 das seguintes maneiras:

1. Use o comando `gpioinfo` para obter a tabela de GPIO.
2. Verifique o **BGA Number** para encontrar o número de pino correspondente no Jetpack6.

:::

### Visão geral de conexão para DI

Você pode fazer a conexão para DI seguindo o diagrama abaixo. É melhor adicionar um resistor em série na linha de DI. Aqui testamos com um resistor de 4,7kΩ conectado ao pino DI1.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### Uso do DI

Você precisa aplicar uma tensão de 12V na linha de DI para que seja detectada como uma entrada

**Passo 1:** Faça as conexões conforme mostrado acima para o **pino DI1** e aplique **12V**

**Passo 2:** Abra e verifique o status do DI1 da seguinte forma:

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo su 
cd /sys/class/gpio
echo 453 > export 
cd PQ.05

cat value
```

:::note
Você pode consultar a **Tabela de Atribuição de Pinos DI/ DO** para encontrar o número de GPIO e o número BGA. No exemplo acima, para o pino DI1, o número GPIO é 453 e o número BGA é PQ.05
:::

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo gpioget gpiochip0 105
```

</TabItem>
</Tabs>

Se a saída for 0, isso significa que há entrada de 12V. Se a saída for 1, isso significa que não há tensão de entrada.

### Visão geral de conexão para DO

Você pode fazer a conexão para DO seguindo o diagrama abaixo. É melhor adicionar um resistor em série na linha de DO. Aqui testamos com um resistor de 4,7kΩ

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### Uso do DO

Aqui você precisa conectar uma carga conforme mencionado no diagrama acima. A maneira mais fácil de testar isso seria conectar um multímetro, se você tiver acesso a um, ou então conectar uma carga que exija menos que 40V de tensão máxima

**Passo 1:** Faça as conexões conforme mostrado acima para o **pino DO1** e aplique **40V no máximo**

**Passo 2:** Abra e ligue o GPIO para o D01 da seguinte forma:

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```sh
sudo su 
cd /sys/class/gpio
echo 399 > export 
cd PI.00
echo out > direction

echo 1 > value
```

:::note
Você pode consultar a **Tabela de Atribuição de Pinos DI/ DO** para encontrar o número de GPIO e o número BGA. No exemplo acima, para o pino DO1, o número GPIO é 399 e o número BGA é PI.00
:::

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo gpioset --mode=wait gpiochip0 51=1
```

</TabItem>
</Tabs>

Se a carga estiver ligada ou o multímetro indicar a tensão que você aplicou, o teste está funcionando corretamente.

## CAN

O reComputer Industrial possui uma interface CAN que suporta o protocolo CAN FD (Controller Area Network Flexible Data-Rate) a 5Mbps. A interface CAN é isolada usando isolamento capacitivo, o que proporciona excelente proteção EMI e garante comunicação confiável em aplicações industriais e de automação. Um resistor terminal de 120Ω foi instalado por padrão e você pode alternar este resistor entre ligado e desligado usando GPIO.

Nota: A interface CAN usa uma fonte de alimentação isolada, o que significa que o sinal de terra para dispositivos externos conectados à interface CAN deve ser conectado ao pino CG

### Visão geral de conexão com adaptador USB para CAN

Para testar e se comunicar com o barramento CAN, conecte um adaptador USB para CAN aos conectores CAN na placa conforme mostrado abaixo

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

Aqui usamos o [USB to CAN Analyzer Adapter with USB Cable](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) disponível em nosso Bazaar.

### Uso com adaptador USB para CAN

- **Passo 1:** Baixe o driver para o adaptador USB para CAN que você está usando no site do fabricante e instale-o. No nosso caso, de acordo com o adaptador que usamos, os drivers podem ser encontrados [aqui](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)

- **Passo 2:** Alguns adaptadores também vêm com o software necessário para o PC a fim de se comunicar com o dispositivo CAN. No nosso caso, de acordo com o adaptador que usamos, baixamos e instalamos o software que pode ser encontrado [aqui](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)

- **Passo 3:** Abra uma janela de terminal no reComputer Industrial e execute os comandos a seguir para configurar e habilitar a interface CAN

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Passo 4:** Digite **ifconfig** no terminal e você verá que a interface CAN está habilitada

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **Passo 5:** Abra o software CAN que você instalou antes. Neste caso, abriremos o software que instalamos de acordo com o adaptador CAN que estamos usando

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/></div>

- **Passo 6:** Conecte o adaptador USB para CAN ao PC e abra o **Device Manager** procurando por ele na barra de pesquisa do Windows. Agora você verá o adaptador conectado em **Ports (COM & LPT)**. Anote a porta serial listada aqui. De acordo com a imagem abaixo, a porta serial é **COM9**

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/></div>

- **Passo 7:** Abra o software CAN, clique em **Refresh** ao lado da seção **COM**, clique no menu suspenso e selecione a porta serial de acordo com o adaptador conectado. Mantenha o **COM bps** no padrão e clique em **Open**

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/></div>

- **Passo 8:** Mantenha o **Mode** e o **CAN bps** no padrão, altere o **Type** para **Standard frame** e clique em **Set and Start**

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/></div>

- **Passo 9:** No reComputer Industrial, execute o seguinte comando para enviar um sinal CAN para o PC

```sh
cansend can0 123#abcdabcd
```

Agora você verá o sinal acima recebido pelo software conforme mostrado abaixo

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **Passo 10:** No reComputer Industrial, execute o seguinte comando para aguardar o recebimento de sinais CAN do PC

```sh
candump can0 &
```

- **Passo 11:** No software CAN, clique em **Send a single frame**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

Agora você verá que ele é recebido pelo reComputer Industrial como segue

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

### Visão geral de conexão com reTerminal DM

Se você tiver acesso a um [reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html), poderá se comunicar diretamente com ele porque o reTerminal DM também possui uma interface CAN.

Consulte a imagem abaixo para conectar o reComputer Industrial e o reTerminal DM via CAN

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

### Uso com reTerminal DM

- **Passo 1:** Antes de usar o reTerminal DM, visite [este wiki](https://wiki.seeedstudio.com/pt-br/reterminal-dm) para começar a usar o reTerminal DM

- **Passo 2:** Abra uma janela de terminal no reComputer Industrial e execute os comandos a seguir para configurar e habilitar a interface CAN

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Passo 3:** Abra uma janela de terminal no reTerminal DM e execute os comandos a seguir para configurar e habilitar a interface CAN

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Passo 4:** Abra uma janela de terminal no reTerminal DM e execute os comandos a seguir para configurar e habilitar a interface CAN

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Passo 5:** Se você digitar **ifconfig** em ambos os dispositivos, verá que as interfaces CAN estão habilitadas

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **Passo 6:** No reTerminal DM, execute o seguinte para aguardar o recebimento de sinais CAN do reComputer Industrial

```sh
candump can0 &
```

- **Passo 7:** No reComputer Industrial, execute o seguinte comando para enviar um sinal CAN ao reTerminal Industrial

```sh
cansend can0 123#abcdabcd
```

Agora você verá que ele é recebido pelo reTerminal DM como segue

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **Passo 8:** Repita o **Passo 6 e o Passo 7**, mas trocando os dispositivos. Use o reTerminal DM para enviar sinais CAN e use o reComputer Industrial para recebê-los

## Interfaces RS232/ RS422/ RS485

O reComputer Industrial possui um conector DB9 que suporta os protocolos de comunicação RS232, RS422 e RS485, e há um painel de chaves DIP na placa para alternar entre as diferentes opções de interface

Você pode ver o painel de chaves DIP abaixo:

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/51.png"/></div>

:::note
Certifique-se de remover a capa plástica amarela antes de usar o painel de chaves DIP
:::

E a tabela abaixo explica os diferentes modos com base nas posições da chave DIP

<table>
  <thead>
    <tr>
      <th />
      <th>MODE_0</th>
      <th>MODE_1</th>
      <th>MODE_2</th>
      <th>Modo</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/52.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 Full Duplex</td>
      <td>1T/1R RS-422</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/53.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>RS-232 Puro</td>
      <td>3T/5R RS-232</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/54.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>RS-485 Half Duplex</td>
      <td>1T/1R RS-485 ,TX ENABLE Nível Baixo Ativo</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/55.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>RS-485 Half Duplex</td>
      <td>1T/1R RS-485 ,TX ENABLE Nível Alto Ativo</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/56.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 Full Duplex</td>
      <td>1T/1R RS-422 com resistor de terminação</td>
    </tr>
    <tr>
      <td rowSpan={3}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/57.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>0</td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>RS-232 Puro</td>
      <td>1T/1R RS-232 coexistindo com RS485</td>
    </tr>
    <tr>
      <td>aplicação sem necessidade de barramento</td>
    </tr>
    <tr>
      <td>de chaveamento de CI (para uso especial).</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/58.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>0</td>
      <td rowSpan={2}>RS-485 Half Duplex</td>
      <td>1T/1R RS-485 com resistor de terminação</td>
    </tr>
    <tr>
      <td>TX ENABLE Nível Baixo Ativo</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/59.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td>Baixo Consumo</td>
      <td rowSpan={2}>Todos os pinos de I/O estão em Alta Impedância</td>
    </tr>
    <tr>
      <td>Desligamento</td>
    </tr>
  </tbody>
</table>

:::note
De fábrica, o modo padrão das chaves será configurado para RS485 com 010
:::

A tabela acima leva em consideração as três primeiras chaves do painel de chave DIP. No entanto, a quarta chave é responsável por alternar a taxa de variação (slew rate) que está diretamente relacionada à taxa de dados

<table>
  <thead>
    <tr>
      <th />
      <th>Status</th>
      <th>Nota</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/62.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>SLEW= Vcc<br />Este Transceptor Multiprotocolo RS232/RS422/RS485 limita a taxa de comunicação da seguinte forma:<br />RS-232: Taxa de Dados Máxima é 1.5Mbps<br />RS-485/RS-422; Taxa de Dados Máxima é 10Mbps<br />A Taxa de Dados Máxima real depende do Jetson SOM usado</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232: Taxa de Dados Máxima é 250Kbps<br />RS-485/RS-422: Taxa de Dados Máxima é 250kbps</td>
    </tr>
  </tbody>
</table>

Aqui usaremos adaptadores USB para RS232, RS485 e RS422 para testar as interfaces. Então, antes de prosseguir, você precisa instalar um aplicativo de terminal serial no seu PC. Aqui recomendamos que você instale o **Putty**, que é fácil de configurar e usar.

- **Passo 1:** Visite [este site](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) e faça o download do Putty de acordo com a arquitetura do seu PC

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/60.png"/></div>

Aqui selecionamos o Putty de acordo com o PC que usamos, que é uma máquina Windows X86 de 64 bits

- **Passo 2:** Abra o instalador baixado e siga as instruções para instalar o aplicativo

### Visão Geral da Conexão Geral

Você pode consultar a numeração de pinos do conector DB9 e a tabela para fazer as conexões

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/61.png"/></div>

<table>
  <thead>
    <tr>
      <th>MODO</th>
      <th>001/101</th>
      <th>000/100</th>
      <th>010/011/110</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PINO</td>
      <td>RS232</td>
      <td>RS422</td>
      <td>RS485</td>
    </tr>
    <tr>
      <td>1</td>
      <td />
      <td>TXD-</td>
      <td>Dados-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>RXD</td>
      <td>TXD+</td>
      <td>Dados+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>TXD</td>
      <td>RXD+</td>
      <td />
    </tr>
    <tr>
      <td>4</td>
      <td />
      <td>RXD-</td>
      <td />
    </tr>
    <tr>
      <td>5</td>
      <td>GND</td>
      <td>GND</td>
      <td>GND</td>
    </tr>
    <tr>
      <td>6</td>
      <td />
      <td />
      <td />
    </tr>
    <tr>
      <td>7</td>
      <td>RTS</td>
      <td />
      <td />
    </tr>
    <tr>
      <td>8</td>
      <td>CTS</td>
      <td />
      <td />
    </tr>
    <tr>
      <td>9</td>
      <td />
      <td />
      <td />
    </tr>
  </tbody>
</table>

### Visão Geral da Conexão RS232

Aqui você pode usar um adaptador USB para RS232 para testar a interface. Usamos o [Adaptador UGREEN USB para RS232](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1) para nossos testes.

**Passo 1:** Desligue a placa

**Passo 2:** Aqui temos 2 opções para configurar as chaves DIP. Ou no modo 001 ou no modo 101. As posições das chaves para cada modo são mostradas abaixo

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

**Passo 3:** Conecte o adaptador USB para RS232 ao conector DB9. Aqui conectamos o adaptador que mencionamos acima

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/68.jpg"/></div>

**Passo 4:** Conecte a outra extremidade a uma das portas USB do seu PC

**Passo 5:** Ligue a placa

### Uso do RS232

**Passo 1:** Pode ser necessário instalar um driver para o adaptador que você está usando ou o Windows instalará o driver automaticamente para você. Vá para o Gerenciador de Dispositivos digitando **Device Manager** na pesquisa do Windows e verifique se você consegue ver o adaptador conectado como um dispositivo COM.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

**Passo 2:** Se você não conseguir ver o adaptador, precisará instalar o driver de acordo com o adaptador que está usando. Geralmente você encontra esses drivers no site do fabricante. Para o adaptador que estamos usando, você pode acessar [esta página](https://www.ugreen.com/pages/download), procurar por **20201** como o número do modelo e baixar o driver correspondente

**Passo 3:** Abra o Putty no PC, selecione a seção **Terminal** e defina o seguinte

- Local echo: Force on
- Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

**Passo 4:** Selecione **Session**, em **Coonection type**, selecione **Serial**, defina o número da porta serial de acordo com o que você vê no **Device Manager**, mantenha a Velocidade como padrão (9600) e clique em **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

**Passo 5:** Na janela de terminal do reTerminal Industrial, digite o seguinte para enviar um sinal do reComputer para o PC

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reComputer Industrial" > /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo chmod 777 /dev/ttyTHS1
sudo echo "RS232 message from reComputer Industrial" > /dev/ttyTHS1
```

</TabItem>
</Tabs>

Agora você verá esta mensagem exibida no Putty

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

**Passo 6:** Na janela de terminal do reTerminal Industrial, digite o seguinte para aguardar o recebimento de sinais do PC

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo cat /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo cat /dev/ttyTHS1
```

</TabItem>
</Tabs>

No Putty, digite qualquer coisa, pressione **ENTER** e ela será exibida na janela de terminal do reComputer Industrial

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### Visão Geral da Conexão RS422

Aqui você pode usar um adaptador USB para RS422 para testar a interface. Usamos o [Adaptador DTech USB para RS485](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) para nossos testes.

**Passo 1:** Desligue a placa

**Passo 2:** Aqui temos 2 opções para configurar as chaves DIP. Ou no modo 000 ou no modo 100. As posições das chaves para cada modo são mostradas abaixo

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

**Passo 3:** Conecte o adaptador USB para RS422 ao conector DB9 usando fios Jumper como mostrado abaixo. Aqui conectamos o adaptador que mencionamos acima

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

**Passo 4:** Conecte a outra extremidade a uma das portas USB do seu PC

**Passo 5:** Ligue a placa

### Uso de RS422

**Passo 1:** Talvez seja necessário instalar um driver para o adaptador que você está usando ou o Windows irá instalar o driver automaticamente para você. Vá para o Gerenciador de Dispositivos digitando **Device Manager** na busca do Windows e verifique se você consegue ver o adaptador conectado como um dispositivo COM.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

**Passo 2:** Se você não conseguir ver o adaptador, será necessário instalar o driver de acordo com o adaptador que você está usando. Geralmente, você pode encontrar esses drivers no site do fabricante. Para o adaptador que estamos usando, você pode acessar [this page](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

**Passo 3:** Abra o Putty no PC, selecione a seção **Terminal** e defina o seguinte

- Local echo: Force on
- Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

**Passo 4:** Selecione **Session**, em **Coonection type**, selecione **Serial**, defina o número da porta serial de acordo com o que você vê no **Device Manager**, mantenha a velocidade como padrão (9600) e clique em **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

**Passo 5:** Na janela de terminal do reTerminal Industrial, digite o seguinte para enviar um sinal do reComputer para o PC

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo chmod 777 /dev/ttyTHS1
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS1
```

</TabItem>
</Tabs>

Agora você verá esta mensagem exibida no Putty

**Passo 6:** Na janela de terminal do reTerminal Industrial, digite o seguinte para aguardar o recebimento de sinais do PC

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo cat /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo cat /dev/ttyTHS1
```

</TabItem>
</Tabs>

No Putty, digite qualquer coisa, pressione **ENTER** e ela será exibida na janela de terminal do reComputer Industrial

### Visão Geral da Conexão RS485

Aqui você pode usar um adaptador USB para RS422 para testar a interface. Usamos o [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) para nossos testes.

**Passo 1:** Desligue a placa

**Passo 2:** Aqui temos 3 opções para definir as chaves DIP. Ou no modo 010, ou modo 011 ou modo 110. As posições dos interruptores para cada modo são mostradas abaixo

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

**Passo 3:** Conecte o adaptador USB para RS422 ao conector DB9 usando fios Jumper como mostrado abaixo. Aqui conectamos o adaptador que mencionamos acima

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

**Passo 4:** Conecte a outra extremidade a uma das portas USB do seu PC

**Passo 5:** Ligue a placa

### Uso de RS485

**Passo 1:** Talvez seja necessário instalar um driver para o adaptador que você está usando ou o Windows irá instalar o driver automaticamente para você. Vá para o Gerenciador de Dispositivos digitando **Device Manager** na busca do Windows e verifique se você consegue ver o adaptador conenected como um dispositivo COM.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

**Passo 2:** Se você não conseguir ver o adaptador, será necessário instalar o driver de acordo com o adaptador que você está usando. Geralmente, você pode encontrar esses drivers no site do fabricante. Para o adaptador que estamos usando, você pode acessar [this page](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

**Passo 3:** Abra o Putty no PC, selecione a seção **Terminal** e defina o seguinte

- Local echo: Force on
- Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

**Passo 4:** Selecione **Session**, em **Coonection type**, selecione **Serial**, defina o número da porta serial de acordo com o que você vê no **Device Manager**, mantenha a velocidade como padrão (9600) e clique em **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

**Passo 5:** Na janela de terminal do reTerminal Industrial, digite o seguinte para enviar um sinal do reComputer para o PC

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo su 
cd /sys/class/gpio 
echo 460 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reComputer Industrial" > /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo chmod 777 /dev/ttyTHS1
sudo gpioset gpiochip0 112=0
echo "RS485 message from reComputer Industrial" > /dev/ttyTHS1
```

</TabItem>
</Tabs>

Agora você verá esta mensagem exibida no Putty

**Passo 6:** Na janela de terminal do reTerminal Industrial, digite o seguinte para aguardar o recebimento de sinais do PC

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo su
cd /sys/class/gpio
echo 460 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo chmod 777 /dev/ttyTHS1
sudo gpioset gpiochip0 112=1
cat /dev/ttyTHS1
```

</TabItem>
</Tabs>

No Putty, digite qualquer coisa, pressione **ENTER** e ela será exibida na janela de terminal do reComputer Industrial

## Conectores Gigabit Ethernet

Há dois conectores Gigabit Ethernet (10/100/1000M) no reComputer Industrial e eles funcionam de maneiras diferentes

- O conector mais à esquerda é conectado diretamente ao módulo Jetson e é capaz de fornecer funcionalidade PoE com especificação **PSE 802.3 af, 15W**. Isso significa que você pode conectar uma câmera IP PoE ou qualquer outro dispositivo PoE a esta porta para fornecer energia ao dispositivo conectado.
- O outro conector é conectado por meio de um módulo PCIe para Ethernet (LAN7430-I/Y9X)

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/36.png"/></div>

Há 2 LEDs (verde e amarelo) em cada porta Ethernet que indicam o seguinte

- LED verde: LIGADO somente quando conectado a uma rede de 1000M
- LED amarelo: Mostra o status de atividade da rede

## USB

O reComputer Industrial vem com 3 conectores USB3.2 onboard e possui as seguintes características:

- Nos conectores USB duplos empilhados, as portas USB superior e inferior compartilham um CI de limitação de corrente, com uma capacidade total de fornecimento de energia de 2,1 A de corrente máxima de saída (um único também pode ser 2,1 A). Se ultrapassar 2,1 A, ele entrará no estado de proteção contra sobrecorrente.
- No conector USB único ao lado dos conectores USB duplos empilhados, ele tem uma capacidade total de fornecimento de energia de 2,1 A de corrente máxima de saída. Se ultrapassar 2,1 A, ele entrará no estado de proteção contra sobrecorrente.
- O módulo Orin NX vem com 3 USB3.2, dos quais apenas um é usado no reComputer e convertido para 3 vias. (USB3.1 TYPE-A x2 - J4 e USB3.1 TYPE-A x1 -J3).
- Suporta apenas USB Host, não o modo Device
- Fornece 5V 2,1A
- Hot-swappable

### Uso

Explicaremos como fazer um benchmark simples em uma unidade flash USB conectada

- **Passo 1:** Verifique a velocidade de gravação executando o comando abaixo

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **Passo 2:** Verifique a velocidade de leitura executando os comandos abaixo. Certifique-se de executar isto após executar o comando acima para velocidade de gravação.

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

## LED Configurável

Há um LED de cor verde localizado na placa como mostrado abaixo. Por padrão, ele atua como o LED que mostra que o dispositivo está funcionando corretamente. No entanto, você também pode programar este LED para ligar e desligar pelo sistema

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/21.png"/></div>

### Uso

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

**Passo 1:** Digite os seguintes comandos em uma janela de terminal para acessar o LED de cor verde

```sh
sudo -i
cd /sys/class/gpio
echo 329 > export 
cd PCC.01
echo out > direction 
```

**Passo 2:** Desligue o LED

```sh
echo 0 > value 
```

**Passo 3:** Ligue o LED

```sh
echo 1 > value 
```

Se você terminou de usar o LED, pode executar o seguinte

```sh
cd ..
echo 329 > unexport
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

Desligar o LED:

```sh
sudo gpioset gpiochip1 13=0
```

Ligar o LED:

```bash
sudo gpioset gpiochip1 13=1
```

</TabItem>
</Tabs>

## Monitorar o Desempenho do Sistema

Podemos usar o aplicativo **jetson stats** para monitorar as temperaturas dos componentes do sistema e verificar outros detalhes do sistema, tais como

- Visualizar utilizações de CPU, GPU, RAM
- Alterar modos de energia
- Definir para clocks máximos
- Verificar informações do JetPack

- **Passo 1:** Na janela de terminal do reComputer Industrial, digite o seguinte

```sh
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

- **Passo 2:** Reinicie a placa

```sh
sudo reboot
```

- **Passo 3:** Digite o seguinte no terminal

```sh
jtop
```

Agora o aplicativo **jtop** será aberto da seguinte forma

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/30.png"/></div>

- **Passo 4:** Aqui você pode alternar entre as diferentes páginas das aplicações e explorar todos os recursos!

## WiFi e Bluetooth

O reComputer Industrial não vem com WiFi e Bluetooth prontos para uso. Mas há uma seção reservada na placa de circuito impresso (PCB) para que um módulo WiFi/ Bluetooth possa ser soldado na placa. Aqui reservamos o espaço para suportar um módulo **BL-M8723DU1**.

### Visão geral da conexão

- **Passo 1:** Se você quiser soldar o módulo **BL-M8723DU1** por conta própria, você pode soldá-lo. Mas não recomendamos isso porque, se você danificar a placa no processo, a garantia será anulada. O que recomendamos é usar nosso serviço profissional para ajudá-lo a soldar este módulo na placa e você pode enviar um e-mail para order@seeed.cc com seu pedido.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/31.jpg"/></div>

- **Passo 2:** Conecte duas antenas aos dois conectores de antena na placa para WiFi e Bluetooth. Aqui você precisa usar um conector IPEX

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/32.png"/></div>

### Uso

- **Passo 1:** Ligue a placa e, quando o dispositivo iniciar no Ubuntu Desktop, clique no menu suspenso no canto superior direito, navegue até `Settings > Wi-Fi` e alterne o botão na barra de título para ativar o WiFi. Depois disso, selecione uma rede WiFi, insira a senha necessária e conecte-se a ela

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/33.png"/></div>

- **Passo 2:** Na mesma janela, escolha **Bluetooth** e alterne o botão na barra de título para ativar o Bluetooth. Depois disso, selecione um dispositivo Bluetooth para se conectar a ele

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/34.png"/></div>

## TPM

O reComputer Industrial vem com uma interface TPM para conectar um módulo TPM externo. Aqui testamos com um módulo TPM2.0 baseado no Infineon SLB9670.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/114.jpg"/></div>

### Visão geral da conexão

Conecte o módulo TPM ao conector TPM como mostrado abaixo

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/115.jpg"/></div>

### Uso

Verifique se o módulo TPM foi carregado corretamente executando os comandos abaixo

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

E você verá a saída da seguinte forma

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

## Desempenho Máximo no reComputer Industrial

Se você quiser habilitar o desempenho máximo no reComputer Industrial, siga as instruções abaixo

- **Passo 1:** Digite o comando abaixo para habilitar o modo de potência máxima

```sh
sudo nvpmodel -m 0
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/35.jpg"/></div>

Aqui será solicitado que você digite **YES** para reiniciar a placa  

- **Passo 2:** Quando a placa iniciar, digite o seguinte comando para definir os clocks da CPU para a frequência máxima

```sh
sudo jetson_clocks
```

## Tabela de GPIO

Você pode acessar a tabela de GPIO do reComputer Industrial para se familiarizar com todos os mapeamentos de pinos.

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

Execute o seguinte dentro de um terminal para acessá-la

```bash
sudo cat /sys/kernel/debug/gpio
```

E você verá a saída da seguinte forma

```bash
gpiochip2: GPIOs 300-315, parent: i2c/1-0021, 1-0021, can sleep:
 gpio-300 (wl_dis              |gpio_xten_pin@0     ) out hi
 gpio-301 (hst_wake_wl         |gpio_xten_pin@1     ) out hi
 gpio-302 (wl_wake_hst         |gpio_xten_pin@2     ) out hi ACTIVE LOW
 gpio-303 (bt_dis              |gpio_xten_pin@3     ) out hi
 gpio-304 (hst_wake_bt         )
 gpio-305 (bt_wake_hst         )
 gpio-306 (spi0_rst_3v3        |gpio_xten_pin@6     ) out lo ACTIVE LOW
 gpio-307 (gpio_pin7           |gpio_xten_pin@7     ) out lo ACTIVE LOW
 gpio-308 (can_120R_en         )
 gpio-309 (M2B_PCIe_rst        )
 gpio-310 (USB_HUB_rst         |gpio_xten_pin@10    ) out hi
 gpio-311 (PCIe_ETH_rst        )
 gpio-312 (M2B_WOWWAN          )
 gpio-313 (M2B_DPR_3V3         )
 gpio-314 (SIM_MUX_SEL         )
 gpio-315 (gpio_pin15          )

gpiochip1: GPIOs 316-347, parent: platform/c2f0000.gpio, tegra234-gpio-aon:
 gpio-316 (PAA.00              )
 gpio-317 (PAA.01              )
 gpio-318 (PAA.02              )
 gpio-319 (PAA.03              )
 gpio-320 (PAA.04              )
 gpio-321 (PAA.05              |fixed-regulators:reg) out hi
 gpio-322 (PAA.06              )
 gpio-323 (PAA.07              )
 gpio-324 (PBB.00              )
 gpio-325 (PBB.01              )
 gpio-326 (PBB.02              )
 gpio-327 (PBB.03              )
 gpio-328 (PCC.00              )
 gpio-329 (PCC.01              )
 gpio-330 (PCC.02              )
 gpio-331 (PCC.03              |mux                 ) out hi
 gpio-332 (PCC.04              )
 gpio-333 (PCC.05              )
 gpio-334 (PCC.06              )
 gpio-335 (PCC.07              )
 gpio-336 (PDD.00              )
 gpio-337 (PDD.01              )
 gpio-338 (PDD.02              )
 gpio-339 (PEE.00              )
 gpio-340 (PEE.01              )
 gpio-341 (PEE.02              )
 gpio-342 (PEE.03              )
 gpio-343 (PEE.04              |power-key           ) in  hi IRQ ACTIVE LOW
 gpio-344 (PEE.05              )
 gpio-345 (PEE.06              )
 gpio-346 (PEE.07              )
 gpio-347 (PGG.00              )
gpiochip0: GPIOs 348-511, parent: platform/2200000.gpio, tegra234-gpio:
 gpio-348 (PA.00               |fixed-regulators:reg) out lo
 gpio-349 (PA.01               )
 gpio-350 (PA.02               )
 gpio-351 (PA.03               )
 gpio-352 (PA.04               )
 gpio-353 (PA.05               )
 gpio-354 (PA.06               )
 gpio-355 (PA.07               )
 gpio-356 (PB.00               )
 gpio-357 (PC.00               )
 gpio-358 (PC.01               )
 gpio-359 (PC.02               )
 gpio-360 (PC.03               )
 gpio-361 (PC.04               )
 gpio-362 (PC.05               )
 gpio-363 (PC.06               )
 gpio-364 (PC.07               )
 gpio-365 (PD.00               )
 gpio-366 (PD.01               )
 gpio-367 (PD.02               )
 gpio-368 (PD.03               )
 gpio-369 (PE.00               )
 gpio-370 (PE.01               )
 gpio-371 (PE.02               )
 gpio-372 (PE.03               )
 gpio-373 (PE.04               )
 gpio-374 (PE.05               )
 gpio-375 (PE.06               )
 gpio-376 (PE.07               )
 gpio-377 (PF.00               )
 gpio-378 (PF.01               )
 gpio-379 (PF.02               )
 gpio-380 (PF.03               )
 gpio-381 (PF.04               )
 gpio-382 (PF.05               )
 gpio-383 (PG.00               |force-recovery      ) in  hi IRQ ACTIVE LOW
 gpio-384 (PG.01               )
 gpio-385 (PG.02               )
 gpio-386 (PG.03               )
 gpio-387 (PG.04               )
 gpio-388 (PG.05               )
 gpio-389 (PG.06               )
 gpio-390 (PG.07               |cd                  ) in  lo IRQ
 gpio-391 (PH.00               )
 gpio-392 (PH.01               )
 gpio-393 (PH.02               )
 gpio-394 (PH.03               )
 gpio-395 (PH.04               )
 gpio-396 (PH.05               )
 gpio-397 (PH.06               )
 gpio-398 (PH.07               )
 gpio-399 (PI.00               )
 gpio-400 (PI.01               )
 gpio-401 (PI.02               )
 gpio-402 (PI.03               )
 gpio-403 (PI.04               )
 gpio-404 (PI.05               )
 gpio-405 (PI.06               )
 gpio-406 (PJ.00               )
 gpio-407 (PJ.01               )
 gpio-408 (PJ.02               )
 gpio-409 (PJ.03               )
 gpio-410 (PJ.04               )
 gpio-411 (PJ.05               )
 gpio-412 (PK.00               )
 gpio-413 (PK.01               )
 gpio-414 (PK.02               )
 gpio-415 (PK.03               )
 gpio-416 (PK.04               )
 gpio-417 (PK.05               )
 gpio-418 (PK.06               )
 gpio-419 (PK.07               )
 gpio-420 (PL.00               )
 gpio-421 (PL.01               )
 gpio-422 (PL.02               |nvidia,pex-wake     ) in  hi ACTIVE LOW
 gpio-423 (PL.03               )
 gpio-424 (PM.00               )
 gpio-425 (PM.01               )
 gpio-426 (PM.02               )
 gpio-427 (PM.03               )
 gpio-428 (PM.04               )
 gpio-429 (PM.05               )
 gpio-430 (PM.06               )
 gpio-431 (PM.07               )
 gpio-432 (PN.00               )
 gpio-433 (PN.01               )
 gpio-434 (PN.02               )
 gpio-435 (PN.03               )
 gpio-436 (PN.04               )
 gpio-437 (PN.05               )
 gpio-438 (PN.06               )
 gpio-439 (PN.07               )
 gpio-440 (PP.00               )
 gpio-441 (PP.01               )
 gpio-442 (PP.02               )
 gpio-443 (PP.03               )
 gpio-444 (PP.04               )
 gpio-445 (PP.05               )
 gpio-446 (PP.06               )
 gpio-447 (PP.07               )
 gpio-448 (PQ.00               )
 gpio-449 (PQ.01               )
 gpio-450 (PQ.02               )
 gpio-451 (PQ.03               )
 gpio-452 (PQ.04               )
 gpio-453 (PQ.05               )
 gpio-454 (PQ.06               )
 gpio-455 (PQ.07               )
 gpio-456 (PR.00               )
 gpio-457 (PR.01               )
 gpio-458 (PR.02               )
 gpio-459 (PR.03               )
 gpio-460 (PR.04               )
 gpio-461 (PR.05               )
 gpio-462 (PX.00               )
 gpio-463 (PX.01               )
 gpio-464 (PX.02               )
 gpio-465 (PX.03               )
 gpio-466 (PX.04               )
 gpio-467 (PX.05               )
 gpio-468 (PX.06               )
 gpio-469 (PX.07               )
 gpio-470 (PY.00               )
 gpio-471 (PY.01               )
 gpio-472 (PY.02               )
 gpio-473 (PY.03               )
 gpio-474 (PY.04               )
 gpio-475 (PY.05               )
 gpio-476 (PY.06               )
 gpio-477 (PY.07               )
 gpio-478 (PZ.00               )
 gpio-479 (PZ.01               |vbus                ) in  hi IRQ ACTIVE LOW
 gpio-480 (PZ.02               )
 gpio-481 (PZ.03               )
 gpio-482 (PZ.04               )
 gpio-483 (PZ.05               )
 gpio-484 (PZ.06               |cs_gpio             ) out lo
 gpio-485 (PZ.07               )
 gpio-486 (PAC.00              )
 gpio-487 (PAC.01              )
 gpio-488 (PAC.02              )
 gpio-489 (PAC.03              )
 gpio-490 (PAC.04              )
 gpio-491 (PAC.05              )
 gpio-492 (PAC.06              )
 gpio-493 (PAC.07              )
 gpio-494 (PAD.00              )
 gpio-495 (PAD.01              )
 gpio-496 (PAD.02              )
 gpio-497 (PAD.03              )
 gpio-498 (PAE.00              )
 gpio-499 (PAE.01              )
 gpio-500 (PAF.00              )
 gpio-501 (PAF.01              )
 gpio-502 (PAF.02              )
 gpio-503 (PAF.03              )
 gpio-504 (PAG.00              )
 gpio-505 (PAG.01              )
 gpio-506 (PAG.02              )
 gpio-507 (PAG.03              )
 gpio-508 (PAG.04              )
 gpio-509 (PAG.05              )
 gpio-510 (PAG.06              )
 gpio-511 (PAG.07              )
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

Execute o seguinte dentro de um terminal para acessá-lo.

```bash
gpioinfo
```

E você verá a saída conforme abaixo

```bash
seeed@seeed-desktop:~$ gpioinfo 
gpiochip0 - 164 lines:
 line   0:      "PA.00" "regulator-vdd-3v3-sd" output active-high [used]
 line   1:      "PA.01"       unused   input  active-high 
 line   2:      "PA.02"       unused   input  active-high 
 line   3:      "PA.03"       unused   input  active-high 
 line   4:      "PA.04"       unused   input  active-high 
 line   5:      "PA.05"       unused   input  active-high 
 line   6:      "PA.06"       unused   input  active-high 
 line   7:      "PA.07"       unused   input  active-high 
 line   8:      "PB.00"       unused   input  active-high 
 line   9:      "PC.00"       unused   input  active-high 
 line  10:      "PC.01"       unused   input  active-high 
 line  11:      "PC.02"       unused   input  active-high 
 line  12:      "PC.03"       unused   input  active-high 
 line  13:      "PC.04"       unused   input  active-high 
 line  14:      "PC.05"       unused   input  active-high 
 line  15:      "PC.06"       unused   input  active-high 
 line  16:      "PC.07"       unused   input  active-high 
 line  17:      "PD.00"       unused   input  active-high 
 line  18:      "PD.01"       unused   input  active-high 
 line  19:      "PD.02"       unused   input  active-high 
 line  20:      "PD.03"       unused   input  active-high 
 line  21:      "PE.00"       unused   input  active-high 
 line  22:      "PE.01"       unused   input  active-high 
 line  23:      "PE.02"       unused   input  active-high 
 line  24:      "PE.03"       unused   input  active-high 
 line  25:      "PE.04"       unused   input  active-high 
 line  26:      "PE.05"       unused   input  active-high 
 line  27:      "PE.06"       unused   input  active-high 
 line  28:      "PE.07"       unused   input  active-high 
 line  29:      "PF.00"       unused   input  active-high 
 line  30:      "PF.01"       unused   input  active-high 
 line  31:      "PF.02"       unused   input  active-high 
 line  32:      "PF.03"       unused   input  active-high 
 line  33:      "PF.04"       unused   input  active-high 
 line  34:      "PF.05"       unused   input  active-high 
 line  35:      "PG.00" "Force Recovery" input active-low [used]
 line  36:      "PG.01"       unused   input  active-high 
 line  37:      "PG.02"    "Suspend"   input   active-low [used]
 line  38:      "PG.03"       unused   input  active-high 
 line  39:      "PG.04"       unused   input  active-high 
 line  40:      "PG.05"       unused   input  active-high 
 line  41:      "PG.06"       unused   input  active-high 
 line  42:      "PG.07"       unused   input  active-high 
 line  43:      "PH.00"       unused   input  active-high 
 line  44:      "PH.01"       unused   input  active-high 
 line  45:      "PH.02"       unused   input  active-high 
 line  46:      "PH.03" "camera-control-output-low" output active-high [used]
 line  47:      "PH.04"       unused   input  active-high 
 line  48:      "PH.05"       unused   input  active-high 
 line  49:      "PH.06"       unused  output  active-high 
 line  50:      "PH.07"       unused   input  active-high 
 line  51:      "PI.00"       unused  output  active-high 
 line  52:      "PI.01"       unused   input  active-high 
 line  53:      "PI.02"       unused   input  active-high 
 line  54:      "PI.03"       unused   input  active-high 
 line  55:      "PI.04"       unused   input  active-high 
 line  56:      "PI.05"       kernel   input  active-high [used]
 line  57:      "PI.06"       unused   input  active-high 
 line  58:      "PJ.00"       unused   input  active-high 
 line  59:      "PJ.01"       unused   input  active-high 
 line  60:      "PJ.02"       unused   input  active-high 
 line  61:      "PJ.03"       unused   input  active-high 
 line  62:      "PJ.04"       unused   input  active-high 
 line  63:      "PJ.05"       unused   input  active-high 
 line  64:      "PK.00"       unused   input  active-high 
 line  65:      "PK.01"       unused   input  active-high 
 line  66:      "PK.02"       unused   input  active-high 
 line  67:      "PK.03"       unused   input  active-high 
 line  68:      "PK.04"       unused  output  active-high 
 line  69:      "PK.05"       unused  output  active-high 
 line  70:      "PK.06"       unused   input  active-high 
 line  71:      "PK.07"       unused   input  active-high 
 line  72:      "PL.00"       unused   input  active-high 
 line  73:      "PL.01"       unused   input  active-high 
 line  74:      "PL.02"       unused   input  active-high 
 line  75:      "PL.03"       unused   input  active-high 
 line  76:      "PM.00"       kernel   input  active-high [used]
 line  77:      "PM.01"       unused   input  active-high 
 line  78:      "PM.02"       unused   input  active-high 
 line  79:      "PM.03"       unused   input  active-high 
 line  80:      "PM.04"       unused   input  active-high 
 line  81:      "PM.05"       unused   input  active-high 
 line  82:      "PM.06"       unused   input  active-high 
 line  83:      "PM.07"       unused   input  active-high 
 line  84:      "PN.00"       unused   input  active-high 
 line  85:      "PN.01"  "interrupt"   input  active-high [used]
 line  86:      "PN.02"       unused   input  active-high 
 line  87:      "PN.03"       unused   input  active-high 
 line  88:      "PN.04"       unused   input  active-high 
 line  89:      "PN.05"       unused   input  active-high 
 line  90:      "PN.06"       unused   input  active-high 
 line  91:      "PN.07"       unused   input  active-high 
 line  92:      "PP.00"       unused   input  active-high 
 line  93:      "PP.01"       unused   input  active-high 
 line  94:      "PP.02"       unused   input  active-high 
 line  95:      "PP.03"       unused   input  active-high 
 line  96:      "PP.04"       unused   input  active-high 
 line  97:      "PP.05"       unused   input  active-high 
 line  98:      "PP.06"       unused   input  active-high 
 line  99:      "PP.07"       unused   input  active-high 
 line 100:      "PQ.00"       unused   input  active-high 
 line 101:      "PQ.01"       unused   input  active-high 
 line 102:      "PQ.02"       unused   input  active-high 
 line 103:      "PQ.03"       unused  output  active-high 
 line 104:      "PQ.04"       unused   input  active-high 
 line 105:      "PQ.05"       unused   input  active-high 
 line 106:      "PQ.06"       unused   input  active-high 
 line 107:      "PQ.07"       unused   input  active-high 
 line 108:      "PR.00"       unused   input  active-high 
 line 109:      "PR.01"       unused   input  active-high 
 line 110:      "PR.02"       unused   input  active-high 
 line 111:      "PR.03"       unused   input  active-high 
 line 112:      "PR.04"       unused   input  active-high 
 line 113:      "PR.05"       unused   input  active-high 
 line 114:      "PX.00"       kernel   input  active-high [used]
 line 115:      "PX.01"       kernel   input  active-high [used]
 line 116:      "PX.02"       unused   input  active-high 
 line 117:      "PX.03"       unused   input  active-high 
 line 118:      "PX.04"       unused   input  active-high 
 line 119:      "PX.05"       unused   input  active-high 
 line 120:      "PX.06"       unused   input  active-high 
 line 121:      "PX.07"       unused   input  active-high 
 line 122:      "PY.00"       unused   input  active-high 
 line 123:      "PY.01"       unused   input  active-high 
 line 124:      "PY.02"       unused   input  active-high 
 line 125:      "PY.03"       unused   input  active-high 
 line 126:      "PY.04"       unused   input  active-high 
 line 127:      "PY.05"       unused   input  active-high 
 line 128:      "PY.06"       unused   input  active-high 
 line 129:      "PY.07"       unused   input  active-high 
 line 130:      "PZ.00"       unused   input  active-high 
 line 131:      "PZ.01"       "vbus"   input   active-low [used]
 line 132:      "PZ.02"       unused   input  active-high 
 line 133:      "PZ.03"       unused   input  active-high 
 line 134:      "PZ.04"       unused   input  active-high 
 line 135:      "PZ.05"       unused   input  active-high 
 line 136:      "PZ.06"   "spi0 CS0"  output   active-low [used]
 line 137:      "PZ.07"       unused   input  active-high 
 line 138:     "PAC.00"       unused  output  active-high 
 line 139:     "PAC.01"       unused   input  active-high 
 line 140:     "PAC.02"       unused   input  active-high 
 line 141:     "PAC.03"       unused   input  active-high 
 line 142:     "PAC.04"       unused   input  active-high 
 line 143:     "PAC.05"       unused   input  active-high 
 line 144:     "PAC.06"       unused   input  active-high 
 line 145:     "PAC.07"       unused   input  active-high 
 line 146:     "PAD.00"       unused   input  active-high 
 line 147:     "PAD.01"       unused   input  active-high 
 line 148:     "PAD.02"       unused   input  active-high 
 line 149:     "PAD.03"       unused   input  active-high 
 line 150:     "PAE.00"       unused   input  active-high 
 line 151:     "PAE.01"       unused   input  active-high 
 line 152:     "PAF.00"       unused   input  active-high 
 line 153:     "PAF.01"       unused   input  active-high 
 line 154:     "PAF.02"       unused   input  active-high 
 line 155:     "PAF.03"       unused   input  active-high 
 line 156:     "PAG.00"       unused   input  active-high 
 line 157:     "PAG.01"       unused   input  active-high 
 line 158:     "PAG.02"       unused   input  active-high 
 line 159:     "PAG.03"       unused   input  active-high 
 line 160:     "PAG.04"       unused   input  active-high 
 line 161:     "PAG.05"       unused   input  active-high 
 line 162:     "PAG.06"       unused   input  active-high 
 line 163:     "PAG.07"       unused   input  active-high 
gpiochip1 - 32 lines:
 line   0:     "PAA.00"       unused   input  active-high 
 line   1:     "PAA.01"       unused   input  active-high 
 line   2:     "PAA.02"       unused   input  active-high 
 line   3:     "PAA.03"       unused   input  active-high 
 line   4:     "PAA.04"       unused  output  active-high 
 line   5:     "PAA.05" "regulator-vdd-3v3-pcie" output active-high [used]
 line   6:     "PAA.06"       unused   input  active-high 
 line   7:     "PAA.07"       unused   input  active-high 
 line   8:     "PBB.00"       unused   input  active-high 
 line   9:     "PBB.01"       unused   input  active-high 
 line  10:     "PBB.02"       unused   input  active-high 
 line  11:     "PBB.03"       unused  output  active-high 
 line  12:     "PCC.00"       unused  output  active-high 
 line  13:     "PCC.01"       unused  output  active-high 
 line  14:     "PCC.02"       unused  output  active-high 
 line  15:     "PCC.03"        "mux"  output  active-high [used]
 line  16:     "PCC.04"       unused   input  active-high 
 line  17:     "PCC.05"       unused   input  active-high 
 line  18:     "PCC.06"       unused   input  active-high 
 line  19:     "PCC.07"       unused   input  active-high 
 line  20:     "PDD.00"       unused   input  active-high 
 line  21:     "PDD.01"       unused   input  active-high 
 line  22:     "PDD.02"       unused   input  active-high 
 line  23:     "PEE.00"       unused   input  active-high 
 line  24:     "PEE.01"       unused   input  active-high 
 line  25:     "PEE.02"       unused   input  active-high 
 line  26:     "PEE.03"       unused   input  active-high 
 line  27:     "PEE.04"      "Power"   input   active-low [used]
 line  28:     "PEE.05"       unused   input  active-high 
 line  29:     "PEE.06"       unused   input  active-high 
 line  30:     "PEE.07"       unused   input  active-high 
 line  31:     "PGG.00"       unused   input  active-high 
gpiochip2 - 16 lines:
 line   0:     "wl_dis" "gpio_xten_pin@0" output active-high [used]
 line   1: "hst_wake_wl" "gpio_xten_pin@1" output active-high [used]
 line   2: "wl_wake_hst" "gpio_xten_pin@2" output active-low [used]
 line   3:     "bt_dis" "gpio_xten_pin@3" output active-high [used]
 line   4: "hst_wake_bt" unused input active-high 
 line   5: "bt_wake_hst" unused input active-high 
 line   6: "spi0_rst_3v3" "gpio_xten_pin@6" output active-low [used]
 line   7:  "gpio_pin7" "gpio_xten_pin@7" output active-low [used]
 line   8: "can_120R_en" unused input active-high 
 line   9: "M2B_PCIe_rst" unused input active-high 
 line  10: "USB_HUB_rst" "gpio_xten_pin@10" output active-high [used]
 line  11: "PCIe_ETH_rst" unused input active-high 
 line  12: "M2B_WOWWAN"       unused   input  active-high 
 line  13: "M2B_DPR_3V3" unused input active-high 
 line  14: "SIM_MUX_SEL" unused input active-high 
 line  15: "gpio_pin15"       unused   input  active-high 
```

</TabItem>
</Tabs>



## Recursos

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

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
