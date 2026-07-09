---
description: Uso de Hardware e Interfaces para reComputer Industrial Série J20
title: Uso de Hardware e Interfaces do reComputer Industrial J20
tags:
  - reComputer Industrial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_Industrial_J20_Hardware_Interfaces_Usage
sku: 114993114
last_update:
  date: 05/16/2023
  author: Lakshantha
createdAt: '2023-06-08'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reComputer_Industrial_J20_Hardware_Interfaces_Usage/
---

Este wiki apresenta os diversos hardwares e interfaces do reComputer Industrial J2012, J2011 e como usá-los para expandir suas ideias de projeto.

## Desmontar o reComputer Industrial

Antes de tudo, é melhor desmontar o gabinete externo para acessar todas as interfaces. Desparafuse os 4 parafusos localizados na parte de trás, conforme a seguir, para desmontar o reComputer Industrial

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/98.png"/></div>

## Câmeras CSI

O reComputer Industrial é equipado com **2 conectores de câmera MIPI CSI de 2 vias e 15 pinos** e as câmeras abaixo são suportadas

- Câmeras IMX219

  - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
  - [IMX219-130 8MP Camera with 130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)
  - [IMX219-160 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
  - [IMX219-200 8MP Camera with 200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html)
  - [IMX219-77 8MP Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
  - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
  - [IMX219-83 8MP 3D Stereo Camera Module](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
  - [IMX219-77IR 8MP IR Night Vision Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
  - [IMX219-160IR 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html)
  - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

- Câmeras IMX477

  - [Raspberry Pi High Quality Camera](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
  - [Raspberry Pi HQ Camera - M12 mount](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
  - [High Quality Camera for Raspberry Pi](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

### Visão Geral da Conexão

Aqui os 2 conectores de câmera CSI estão marcados como **CAM0 e CAM1**. Você pode conectar uma câmera a qualquer um dos 2 conectores ou conectar 2 câmeras a ambos os conectores ao mesmo tempo.

- **Passo 1:** Puxe suavemente a trava preta do conector CSI

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/5.png"/></div>

- **Passo 2:** Insira o cabo flat de 15 pinos no conector certificando-se de que os contatos dourados estejam voltados para baixo

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/6.png"/></div>

- **Passo 3:** Empurre a trava preta para dentro para travar o cabo flat no lugar

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/10.png"/></div>

### Uso

Primeiro você precisa configurar a placa para carregar o driver apropriado para a câmera específica que você utilizará. Para isso o sistema JetPack possui uma ferramenta integrada para suportar câmeras IMX219 e IMX477.

- **Passo 1:** Abra o terminal e execute o seguinte

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

- **Passo 2:** Selecione **Configure Jetson Nano CSI Connector**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/119.jpg"/></div>

- **Passo 3:** Selecione **Configure for compatible hardware**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/120.jpg"/></div>

- **Passo 4:** Selecione a câmera que você deseja usar

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/121.jpg"/></div>

- **Passo 5:** Selecione **Save pin changes**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/122.jpg"/></div>

- **Passo 6:** Selecione **Save and reboot to reconfigure pins**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/123.jpg"/></div>

- **Passo 7:** Pressione qualquer tecla no teclado e o dispositivo será reiniciado com a configuração de câmera aplicada

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/124.jpg"/></div>

Você pode usar câmeras CSI de 2 maneiras diferentes. Siga os comandos abaixo de acordo com o conector da câmera

- Método 1:

Para a porta CAM0

```sh
nvgstcapture-1.0 sensor-id=0 
```

Para a porta CAM1

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::note
Se você quiser alterar mais configurações da câmera, pode digitar **"nvgstcapture-1.0 --help"** para acessar todas as opções configuráveis disponíveis
:::

- Método 2:

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

## RTC

O reComputer Industrial é equipado com 2 maneiras diferentes de se conectar a uma bateria RTC

### Visão Geral da Conexão

- Método 1:

Conecte uma **bateria tipo moeda CR1220 de 3V** ao soquete RTC na placa, conforme mostrado abaixo. Certifique-se de que a extremidade **positiva (+)** da bateria esteja voltada para cima

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/11.jpg"/></div>

- Método 2:

Conecte uma **bateria tipo moeda CR2302 de 3V com conector JST** ao soquete JST de 2 pinos e 1,25 mm na placa, conforme mostrado abaixo

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/12.jpg"/></div>

### Uso

- **Passo 1:** Conecte uma bateria RTC conforme mencionado acima

- **Passo 2:** Ligue o reComputer Industrial

- **Passo 3:** No Ubuntu Desktop, clique no menu suspenso no canto superior direito, navegue até `Settings > Date & Time`, conecte-se a uma rede via cabo Ethernet e selecione **Automatic Date & Time** para obter a data/hora automaticamente

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
Se você não tiver se conectado à internet via Ethernet, pode definir manualmente a data/hora aqui
:::

- **Passo 4:** Abra uma janela de terminal e execute o comando abaixo para verificar a hora do relógio de hardware

```sh
sudo hwclock
```

Você verá uma saída semelhante à mostrada abaixo, que não é a data/hora correta

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

- **Passo 5:** Altere a hora do relógio de hardware para a hora atual do relógio do sistema digitando o comando abaixo

```sh
sudo hwclock --systohc
```

- **Passo 6:** Remova quaisquer cabos Ethernet conectados para garantir que ele não obtenha a hora da internet e reinicie a placa

```sh
sudo reboot
```

- **Passo 7:** Verifique a hora do relógio de hardware para confirmar que a data/hora permanece a mesma mesmo que o dispositivo tenha sido desligado

Agora vamos criar um script para sempre sincronizar o relógio do sistema a partir do relógio de hardware em cada inicialização.

- **Passo 8:** Crie um novo script shell usando qualquer editor de texto de sua preferência. Aqui usamos o editor de texto **vi**

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **Passo 9:** Entre no **modo de inserção** pressionando **i**, copie e cole o seguinte conteúdo dentro do arquivo

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **Passo 10:** Torne o script executável

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **Passo 11:** Crie um arquivo systemd

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

- **Passo 12:** Adicione o seguinte dentro do arquivo

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

- **Passo 13:** Recarregue o daemon do systemctl

```sh
sudo systemctl daemon-reload 
```

- **Passo 14:** Habilite o serviço recém-criado para iniciar na inicialização e inicie o serviço

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **Passo 15:** Verifique se o script está em execução como um serviço systemd

```sh
sudo systemctl status hwtosys.service
```

- **Passo 16:** Reinicie a placa e você verá que o relógio do sistema agora está sincronizado com o relógio de hardware

## M.2 Key M

Fora da caixa, o reComputer Industrial inclui um SSD de 128 GB conectado ao slot M.2 Key M, que vem pré-instalado com o sistema JetPack.

### Visão Geral da Conexão

Se você quiser remover o SSD incluído e instalar um novo, pode seguir as etapas abaixo. Aqui recomendamos apenas o uso de SSDs da Seeed com armazenamento de [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html), [256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html) e [512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html), porque apenas esses SSDs foram testados por nós. Além disso, esta interface suporta SSDs PCIe Gen4.0.

- **Passo 1:** Remova o parafuso do SSD pré-instalado

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/15.png"/></div>

- **Passo 2:** Remova o SSD deslizando-o para fora do conector do SSD

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/16.png"/></div>

- **Passo 3:** Insira um novo SSD e aperte novamente o parafuso

### Uso

Explicaremos como fazer um benchmark simples no SSD conectado

- **Passo 1:** Verifique a velocidade de gravação executando o comando abaixo

```sh
sudo dd if=/dev/zero of=/home/nvidia/test bs=1M count=512 conv=fdatasync
```

- **Passo 2:** Verifique a velocidade de leitura executando os comandos abaixo. Certifique-se de executar isto depois de executar o comando acima para a velocidade de gravação.

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/nvidia/test of=/dev/null bs=1M count=512
```

## mini PCIe

O reComputer Industrial vem com um conector mini PCIe que oferece suporte a módulos 4G e LoRa. No entanto, você só pode conectar um módulo 4G ou um módulo LoRa por vez.

### Visão geral da conexão do módulo 4G

Atualmente esta placa suporta os módulos EC25EUXGA e EC20CEHCLG.

- **Passo 1:** Desligue a placa se ela já estiver ligada

- **Passo 2:** Remova o espaçador incluído. Este espaçador só é necessário se você estiver usando a interface M.2 Key B

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/110.jpg"/></div>

- **Passo 3:** Insira o módulo 4G no slot mini PCIe, use os parafusos pré-instalados e parafuse-os nos 2 furos para fixar o módulo 4G no lugar

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/17.png"/></div>

- **Passo 4:** Conecte uma antena ao conector de antena identificado como **MAIN**. Aqui você precisa usar um conector IPEX

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/18.png"/></div>

- **Passo 5:** Insira um cartão nano SIM habilitado para 4G no slot de cartão SIM na placa certificando-se de que a superfície dourada do cartão SIM esteja voltada para baixo. Aqui insira o cartão até o fim para que ele salte de volta após atingir a mola interna e trave no lugar.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
Se você quiser remover o cartão SIM, empurre o cartão para dentro até atingir a mola interna para que o SIM saia do slot
:::

- **Passo 6:** Adicione um jumper entre os pinos **SIM_MUX_SEL** e **GND** no **Header J8 (Controle e UART)**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/20.png"/></div>

- **Passo 6:** Ligue a placa

### Uso do módulo 4G - Testar discagem

Ao usar o módulo EC25, o módulo será iniciado automaticamente e estará pronto para uso. No entanto, ao usar o módulo EC20, você precisa reiniciar o módulo para que ele funcione

- **Passo 1:** Se você estiver usando o módulo EC25, pode pular esta etapa. Porém, se estiver usando o módulo EC20, insira os comandos a seguir para acessar o pino GPIO298 que é responsável por reiniciar o módulo 4G

```sh
sudo su 
cd /sys/class/gpio
echo 298 > export 
cd gpio298
echo out > direction
echo 1 > value
```

Para o módulo EC25, o LED2 acenderá em verde assim que a placa for inicializada. Para o módulo EC20, o LED2 acenderá em verde após reiniciar o módulo como explicado acima

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/118.jpg"/></div>

- **Passo 2:** Instale o minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **Passo 3:** Entre no console serial do módulo 4G conectado para que possamos inserir comandos AT e interagir com o módulo 4G

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **Passo 4:** Pressione **Ctrl+A** e depois pressione **E** para ativar o eco local

- **Passo 5:** Insira o comando **"AT"** e pressione enter. Se você vir a resposta como "OK", o módulo 4G está funcionando corretamente

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

- **Passo 6:** Insira o comando **"ATI"** para verificar as informações do módulo

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

- **Passo 7:** Para testar o módulo, insira o comando abaixo para chamar outro número de telefone

```sh
ATD<phone_number>;
```

E você verá a saída abaixo

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

Se o número de telefone inserido puder receber a chamada, o módulo está funcionando como esperado

### Uso do módulo 4G - Conectar à Internet

#### Módulo EC25

Se você estiver usando o módulo EC25, siga os passos abaixo

- **Passo 1:** Depois de abrir o console serial do módulo 4G conforme explicado acima (seção Uso do módulo 4G - Testar discagem), execute o seguinte comando para conectar à internet. Aqui substitua **YOUR_APN** pelo APN do seu provedor de rede

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/89.jpg"/></div>

Em caso de conexão bem-sucedida, deve ser exibida a saída **OK** como você pode ver na imagem acima

- **Passo 2:** Reinicie o módulo 4G executando o seguinte

```sh
AT+CFUN=1,1
```

Agora você perderá a conexão com o módulo 4G no terminal serial

- **Passo 3:** Feche o **minicom** pressionando **CTRL + A** e depois **Q**

- **Passo 4:** Digite **ifconfig** e você verá um endereço IP na interface **usb0**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/93.png"/></div>

- **Passo 5:** Você pode tentar pingar um site como a seguir para verificar se há conectividade com a internet

```sh
ping -I usb0 www.bing.com -c 5
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/94.png"/></div>

#### Módulo EC20

Se você estiver usando o módulo EC20, siga os passos abaixo

- **Passo 1:** Se você já tiver reiniciado o módulo 4G conforme explicado na seção anterior (seção Uso do módulo 4G - Testar discagem) para o módulo EC20, pode pular esta etapa. No entanto, se ainda não fez isso, faça agora

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

- **Passo 7:** Você pode tentar pingar uma URL como a seguir para verificar se há conectividade com a internet

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/92.png"/></div>

### Visão geral da conexão do módulo LoRa

Atualmente esta placa suporta o módulo WM1302 SPI. Você pode usar a [versão US](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html) ou a [versão EU](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html) que está disponível em nosso Bazaar.

- **Passo 1:** Desligue a placa se ela já estiver ligada

- **Passo 2:** Insira o módulo LoRa no slot mini PCIe e use os parafusos pré-instalados e parafuse-os nos 2 furos para fixar o módulo 4G no lugar

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/25.png"/></div>

- **Passo 3:** Conecte uma antena ao conector de antena. Aqui você precisa usar um conector IPEX

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/26.png"/></div>

:::note
Certifique-se de que não haja jumper entre os pinos **SIM_MUX_SEL** e **GND** no **Header J8 (Controle e UART)**. Este jumper só é necessário ao usar módulos 4G
:::

- **Passo 4:** Ligue a placa

### Uso do módulo LoRa - Testando RF LoRa

Quando o módulo LoRa estiver conectado, você verá os LEDs verde e azul no módulo acenderem

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/27.png"/></div>

- **Passo 1:** Insira o comando abaixo para verificar se o módulo LoRa é detectado pelo sistema

```sh
i2cdetect -r -y 7
```

Se você vir a saída abaixo, o módulo é detectado pelo sistema

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **Passo 2:** Insira os comandos abaixo para compilar e construir a ferramenta de transmissão de sinais LoRa

```sh
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

Se você vir o resultado abaixo e o LED no módulo LoRa ficar VERMELHO, isso significa que o módulo está transmitindo sinais RF com sucesso

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/28.png"/></div>

Para parar a transmissão, você pode pressionar **CTRL + C** no teclado.

### Uso do módulo LoRa - Conectar ao TTN

Agora iremos conectar ao TTN (The Things Network) e usar o reComputer Industrial como um gateway LoRaWAN TTN

- **Passo 1:** Insira o comando abaixo para deixar o packet forwarder pronto

```sh
cd ..
cd packet_forwarder
cp ../tools/reset_lgw.sh .
```

- **Passo 2:** Execute o seguinte de acordo com o módulo LoRa que você está usando. Aqui testamos a versão SPI US915

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

Depois de executar o comando acima, você verá a saída abaixo com a última linha mostrando as informações do **EUI do concentrador**. Guarde essas informações porque as usaremos mais tarde ao configurar o gateway com o TTN

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/79.jpg"/></div>

- **Etapa 3:** Visite [este URL](https://console.cloud.thethings.network) para entrar no console do TTN e selecione uma região de sua preferência

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/80.png"/></div>

- **Etapa 4:** Faça login se você já tiver uma conta ou cadastre-se para uma nova conta se ainda não tiver uma

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/81.png"/></div>

- **Etapa 5:** Clique em **Go to gateways**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/82.png"/></div>

- **Etapa 6:** Clique em **+ Register gateway**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/83.png"/></div>

- **Etapa 7:** Insira o **EUI do Concentrador** que você obteve antes na seção **Gateway EUI** e clique em **Confirm**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/84.jpg"/></div>

- **Etapa 8:** Insira o **Frequency plan** de acordo com o módulo LoRa que você está usando. Aqui estamos usando a versão US915 do módulo e, portanto, selecionamos **United Stated 902-928 MHz, FSB 2 (used by TTN)**. Depois disso, clique em **Register gateway**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/85.jpg"/></div>

:::note
O **Gateway ID** foi preenchido automaticamente para você. No entanto, você pode alterá-lo para o que preferir. **Gateway name** não é obrigatório. No entanto, você também pode preenchê-lo de acordo com sua preferência
:::

- **Etapa 9:** Anote o **Gateway Server Address** na página inicial principal do gateway

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/86.jpg"/></div>

- **Etapa 9:** No reTerminal Industrial, edite o arquivo **global_conf_json** que usamos junto com o comando **lora_pkt_fwd**. Aqui você precisa alterar as opções **gateway_ID**, **server_address**, **serv_port_up** e **serv_port_down** conforme a seguir

  - gateway_ID: EUI do concentrador do dispositivo
  - server_address: Gateway Server Address do TTN
  - serv_port_up: 1700
  - serv_port_down: 1700

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/87.png"/></div>

- **Etapa 10:** Execute novamente o encaminhador de pacotes

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

Se você vir a saída abaixo, isso significa que o dispositivo foi conectado com sucesso ao TTN

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/88.jpg"/></div>

## M.2 Key B

O reComputer Industrial vem com um conector M.2 Key B que suporta módulos 4G e 5G. Atualmente testamos o **módulo 5G SIM8202G-M2**

### Visão Geral da Conexão do Módulo 5G

- **Etapa 1:** Desligue a placa se ela já estiver ligada

- **Etapa 2:** Certifique-se de que o espaçador (standoff) esteja no lugar e, em seguida, remova o parafuso superior do espaçador

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/111.jpg"/></div>

- **Etapa 2:** Deslize o módulo 5G para o slot M.2 Key B e aparafuse o parafuso do espaçador para fixar o módulo 5G no lugar (falar sobre o espaçador)

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/112.jpg"/></div>

- **Etapa 3:** Conecte 4 antenas aos conectores de antena no módulo. Aqui você precisa usar um conector IPEX 4

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/113.jpg"/></div>

- **Etapa 4:** Insira um cartão nano SIM com suporte a 5G no slot de cartão SIM na placa, certificando-se de que a superfície dourada do cartão SIM esteja voltada para baixo. Aqui insira o cartão até o final para que ele volte depois de bater na mola interna e trave no lugar.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
Se você quiser remover o cartão SIM, empurre o cartão para dentro até bater na mola interna para que o SIM saia do slot
:::

- **Etapa 5:** Ligue a placa

### Uso do Módulo 5G - Teste de Discagem

Ao usar o módulo 5G SIM8202G-M2, o módulo não iniciará automaticamente. Portanto, primeiro precisamos alternar alguns GPIOs para fazê-lo iniciar

- **Etapa 1:** Digite o seguinte para iniciar o módulo 5G

```sh
sudo su 
cd /sys/class/gpio
echo 298 > export 
cd gpio298
echo out > direction
echo 0 > value

cd..
echo 330 > export 
cd PEE.02
echo out > direction
echo 1 > value

cd..
echo 319 > export 
cd PCC.02
echo out > direction
echo 0 > value
```

Depois que o acima for executado, o LED2 acenderá em verde como abaixo

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/117.jpg"/></div>

- **Etapa 2:** Instale o minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **Etapa 3:** Entre no console serial do módulo 5G conectado para que possamos inserir comandos AT e interagir com o módulo 5G

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **Etapa 4:** Digite o comando **"AT"** e pressione Enter. Se você vir a resposta "OK", o módulo 5G está funcionando corretamente

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

- **Etapa 6:** Digite o comando **"ATI"** para verificar as informações do módulo

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>

- **Etapa 7:** Para testar o módulo, digite o comando abaixo para ligar para outro número de telefone

```sh
ATD<phone_number>;
```

E você verá a saída abaixo

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

### Uso do Módulo 5G - Conectar à Internet

Em breve

## DI/ DO

O reComputer Industrial suporta 4 canais de entrada digital e 4 canais de saída digital, todos opticamente isolados para proteger efetivamente a placa principal contra picos de tensão ou outras perturbações elétricas. Há também uma interface CAN nesse mesmo conector, que discutiremos mais tarde neste wiki

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/37.png"/></div>

### Tabela de Atribuição de Pinos de DI/ DO

<table>
  <thead>
    <tr>
      <th>Tipo</th>
      <th>Nome do Rótulo</th>
      <th>Sinal Esquemático</th>
      <th>Número do Pino do Módulo</th>
      <th>Número BGA</th>
      <th>Número do GPIO</th>
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
      <td>440</td>
      <td rowSpan={4}>12V/ 20mA de corrente no total</td>
      <td rowSpan={4}>Entrada Digital de 12V, o sinal de aterramento precisa<br />estar conectado ao GND_DI (Pino2/4/6)</td>
    </tr>
    <tr>
      <td>DI2</td>
      <td>DI_2_GPIO09</td>
      <td>211</td>
      <td>PS.04</td>
      <td>453</td>
    </tr>
    <tr>
      <td>DI3</td>
      <td>DI_3_GPIO11</td>
      <td>216</td>
      <td>PQ.06</td>
      <td>441</td>
    </tr>
    <tr>
      <td>DI4</td>
      <td>DI_4_GPIO13</td>
      <td>228</td>
      <td>PN.01</td>
      <td>419</td>
    </tr>
    <tr>
      <td rowSpan={4}>Saída</td>
      <td>DO1</td>
      <td>DO_1_GPIO</td>
      <td>193</td>
      <td>PT.06</td>
      <td>463</td>
      <td rowSpan={4}>40V/40mA de carga por pino</td>
      <td rowSpan={4}>Saída digital, tensão máxima suportada<br />de 40V, o sinal de aterramento precisa estar<br />conectado ao GND_DO(Pino8/10)</td>
    </tr>
    <tr>
      <td>DO2</td>
      <td>DO_2_GPIO</td>
      <td>195</td>
      <td>PT.07</td>
      <td>464</td>
    </tr>
    <tr>
      <td>DO3</td>
      <td>DO_3_GPIO</td>
      <td>197</td>
      <td>PU.00</td>
      <td>465</td>
    </tr>
    <tr>
      <td>DO4</td>
      <td>DO_4_GPIO</td>
      <td>199</td>
      <td>PT.05</td>
      <td>462</td>
    </tr>
    <tr>
      <td rowSpan={2}>CAN</td>
      <td>CH</td>
      <td colSpan={5} rowSpan={2}>/</td>
      <td rowSpan={2}>Barramento CAN com sinais diferenciais padrão, <br />o sinal de aterramento precisa estar conectado ao GND_ISO (Pino 12)</td>
    </tr>
    <tr>
      <td>CL</td>
    </tr>
    <tr>
      <td rowSpan={3}>Terra</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>O sinal de terra de referência para a Entrada Digital de 12V,<br />que também é o caminho de retorno para o DI</td>
    </tr>
    <tr>
      <td>GND_DO</td>
      <td>O sinal de terra de referência da saída digital, que também é o caminho de retorno do DO</td>
    </tr>
    <tr>
      <td>CG</td>
      <td>O sinal de terra de referência para o CAN</td>
    </tr>
  </tbody>
</table>

### Visão Geral da Conexão para DI

Você pode fazer a conexão para DI seguindo o diagrama abaixo. É melhor adicionar um resistor em série na linha DI. Aqui testamos com um resistor de 4,7kΩ conectado ao pino DI1.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### Uso para DI

Você precisa aplicar uma tensão de 12V na linha DI para que seja detectada como uma entrada

- **Etapa 1:** Faça as conexões conforme mostrado acima para o **pino DI1** e aplique **12V**

- **Etapa 2:** Abra o GPIO para DI1 da seguinte forma

```sh
sudo su 
cd /sys/class/gpio
echo 440 > export 
cd PQ.05
```

:::note
Você pode consultar a **Tabela de Atribuição de Pinos de DI/ DO** para encontrar o número do GPIO e o número BGA. No exemplo acima, para o pino DI1, o número do GPIO é 440 e o número BGA é PQ.05
:::

- **Etapa 3:** Execute o seguinte para verificar o status

```sh
cat value
```

Se o resultado for 0, significa que há entrada de 12V. Se o resultado for 1, significa que não há tensão de entrada.

### Visão geral da conexão para DO

Você pode fazer a conexão para DO seguindo o diagrama abaixo. É melhor adicionar um resistor em série na linha DO. Aqui nós testamos com um resistor de 4,7kΩ

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### Uso para DO

Aqui você precisa conectar uma carga como mencionado no diagrama acima. A maneira mais fácil de testar isso seria conectar um multímetro se você tiver acesso a um, ou então conectar uma carga que exija menos de 40V de tensão máxima

- **Passo 1:** Faça as conexões como mostrado acima no **pino DO1** e insira **40V como máximo**

- **Passo 2:** Abra o GPIO para D01 da seguinte forma

```sh
sudo su 
cd /sys/class/gpio
echo 463 > export 
cd PT.06
echo out > direction
```

:::note
Você pode consultar a **Tabela de Atribuição de Pinos DI/ DO** para encontrar o número de GPIO e o número BGA. No exemplo acima, para o pino DO1, o número GPIO é 463 e o número BGA é PT.06
:::

- **Passo 3:** Execute o seguinte para ligar o pino

```sh
echo 1 > value
```

Se a carga for ligada ou o multímetro mostrar a tensão que você inseriu, o teste está funcionando corretamente.

## CAN

O reComputer Industrial possui uma interface CAN que suporta o protocolo CAN FD (Controller Area Network Flexible Data-Rate) a 5Mbps. A interface CAN é isolada usando isolamento capacitivo, o que fornece excelente proteção EMI e garante comunicação confiável em aplicações industriais e de automação. Um resistor terminal de 120Ω foi instalado por padrão e você pode alternar este resistor ON e OFF usando GPIO.

Nota: A interface CAN usa uma fonte de alimentação isolada, o que significa que o sinal de terra dos dispositivos externos conectados à interface CAN deve ser conectado ao pino CG

### Visão geral da conexão com adaptador USB para CAN

Para testar e interagir com o barramento CAN, conecte um adaptador USB para CAN aos conectores CAN na placa, como mostrado abaixo

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

Aqui usamos o [USB to CAN Analyzer Adapter with USB Cable](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) disponível em nosso Bazaar.

### Uso com adaptador USB para CAN

- **Passo 1:** Baixe o driver para o adaptador USB para CAN que você está usando a partir do site do fabricante e instale-o. No nosso caso, de acordo com o adaptador que usamos, os drivers podem ser encontrados [aqui](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)

- **Passo 2:** Alguns adaptadores também vêm com o software necessário para o PC a fim de se comunicar com o dispositivo CAN. No nosso caso, de acordo com o adaptador que usamos, baixamos e instalamos o software que pode ser encontrado [aqui](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)

- **Passo 3:** Abra uma janela de terminal no reComputer Industrial e execute os seguintes comandos para configurar e habilitar a interface CAN

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Passo 4:** Digite **ifconfig** no terminal e você verá a interface CAN habilitada

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **Passo 5:** Abra o software CAN que você instalou antes. Neste caso, abriremos o software que instalamos de acordo com o adaptador CAN que estamos usando

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/></div>

- **Passo 6:** Conecte o adaptador USB para CAN ao PC e abra o **Device Manager** procurando por ele na barra de busca do Windows. Agora você verá o adaptador conectado em **Ports (COM & LPT)**. Anote a porta serial listada aqui. De acordo com a imagem abaixo, a porta serial é **COM9**

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/></div>

- **Passo 7:** Abra o software CAN, clique em **Refresh** ao lado da seção **COM**, clique no menu suspenso e selecione a porta serial de acordo com o adaptador conectado. Mantenha **COM bps** no padrão e clique em **Open**

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/></div>

- **Passo 8:** Mantenha o **Mode** e o **CAN bps** no padrão, altere o **Type** para **Standard frame** e clique em **Set and Start**

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/></div>

- **Passo 9:** No reComputer Industrial, execute o seguinte comando para enviar um sinal CAN para o PC

```sh
cansend can0 123#abcdabcd
```

Agora você verá o sinal acima recebido pelo software, como mostrado abaixo

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **Passo 10:** No reComputer Industrial, execute o seguinte comando para aguardar o recebimento de sinais CAN do PC

```sh
candump can0 &
```

- **Passo 11:** No software CAN, clique em **Send a single frame**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

Agora você verá que ele é recebido pelo reComputer Industrial da seguinte forma

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

### Visão geral da conexão com reTerminal DM

Se você tiver acesso a um [reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html), poderá se comunicar com ele diretamente porque o reTerminal DM também possui uma interface CAN.

Consulte a imagem abaixo para conectar o reComputer Industrial e o reTerminal DM via CAN

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

### Uso com reTerminal DM

- **Passo 1:** Antes de usar o reTerminal DM, visite [este wiki](https://wiki.seeedstudio.com/pt-br/reterminal-dm) para começar a usar o reTerminal DM

- **Passo 2:** Abra uma janela de terminal no reComputer Industrial e execute os seguintes comandos para configurar e habilitar a interface CAN

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Passo 3:** Abra uma janela de terminal no reTerminal DM e execute os seguintes comandos para configurar e habilitar a interface CAN

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Passo 4:** Abra uma janela de terminal no reTerminal DM e execute os seguintes comandos para configurar e habilitar a interface CAN

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

- **Passo 7:** No reComputer Industrial, execute o seguinte comando para enviar um sinal CAN para o reTerminal Industrial

```sh
cansend can0 123#abcdabcd
```

Agora você verá que ele é recebido pelo reTerminal DM da seguinte forma

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **Passo 8:** Repita o **passo 6 e passo 7**, mas invertendo os dispositivos. Use o reTerminal DM para enviar sinais CAN e use o reComputer Industrial para recebê-los

## Interfaces RS232/ RS422/ RS485

O reComputer Industrial possui um conector DB9 que suporta os protocolos de comunicação RS232, RS422 e RS485 e há um painel de chave DIP na placa para alternar entre as diferentes opções de interface

Você pode ver o painel de chave DIP como abaixo:

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/51.png"/></div>

:::note
Certifique-se de remover a tampa plástica amarela antes de usar o painel de chave DIP
:::

E a tabela abaixo explica os diferentes modos com base nas posições das chaves DIP

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
      <td>Pure RS-232</td>
      <td>3T/5R RS-232</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/54.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>RS-485 Half Duplex</td>
      <td>1T/1R RS-485 ,TX ENABLE Low Active</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/55.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>RS-485 Half Duplex</td>
      <td>1T/1R RS-485 ,TX ENABLE High Active</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/56.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 Full Duplex</td>
      <td>1T/1R RS-422 with termination resistor</td>
    </tr>
    <tr>
      <td rowSpan={3}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/57.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>0</td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>RS-232 Puro</td>
      <td>1T/1R RS-232 coexiste com RS485</td>
    </tr>
    <tr>
      <td>aplicação sem a necessidade do barramento</td>
    </tr>
    <tr>
      <td>IC de chaveamento (para uso especial).</td>
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
      <td>TX ENABLE Low Ativo</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/59.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td>Baixo Consumo</td>
      <td rowSpan={2}>Todos os pinos de E/S são de Alta Impedância</td>
    </tr>
    <tr>
      <td>Desligamento</td>
    </tr>
  </tbody>
</table>

:::note
Ao sair da caixa, o modo padrão dos interruptores estará definido como RS485 com 010 de fábrica
:::

A tabela acima leva em consideração os três primeiros interruptores do painel de DIP switch. No entanto, o quarto interruptor é responsável por alternar a taxa de variação (slew rate), que está diretamente relacionada à taxa de dados

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
      <td>SLEW= Vcc<br />Este Transceptor Multiprotocolo RS232/RS422/RS485 limita a taxa de comunicação da seguinte forma:<br />RS-232: Taxa de Dados Máxima é 1.5Mbps<br />RS-485/RS-422; Taxa de Dados Máxima é 10Mbps<br />A Taxa de Dados Máxima real depende do módulo Jetson SO M usado</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232: Taxa de Dados Máxima é 250Kbps<br />RS-485/RS-422: Taxa de Dados Máxima é 250kbps</td>
    </tr>
  </tbody>
</table>

Aqui usaremos adaptadores USB para RS232, RS485 e RS422 para testar as interfaces. Portanto, antes de prosseguir, você precisa instalar um aplicativo de terminal serial no seu PC. Aqui recomendamos que instale o **Putty**, que é fácil de configurar e usar.

- **Passo 1:** Visite [este site](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) e baixe o Putty de acordo com a arquitetura do seu PC

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/60.png"/></div>

Aqui selecionamos o Putty de acordo com o PC que usamos, que é uma máquina Windows X86 de 64 bits

- **Passo 2:** Abra o instalador baixado e siga os prompts para instalar o aplicativo

### Visão Geral da Conexão Geral

Você pode consultar a numeração dos pinos do conector DB9 e a tabela para fazer as conexões

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
      <td>PIN</td>
      <td>RS232</td>
      <td>RS422</td>
      <td>RS485</td>
    </tr>
    <tr>
      <td>1</td>
      <td />
      <td>TXD-</td>
      <td>Data-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>RXD</td>
      <td>TXD+</td>
      <td>Data+</td>
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

- **Passo 1:** Desligue a placa

- **Passo 2:** Aqui temos 2 opções para configurar os DIP switches. Ou no modo 001 ou no modo 101. As posições dos interruptores para cada modo são mostradas abaixo

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

- **Passo 3:** Conecte o adaptador USB para RS232 ao conector DB9. Aqui conectamos o adaptador que mencionamos acima

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/68.jpg"/></div>

- **Passo 4:** Conecte a outra extremidade a uma das portas USB do seu PC

- **Passo 5:** Ligue a placa

### Uso do RS232

- **Passo 1:** Talvez você precise instalar um driver para o adaptador que está usando ou o Windows instalará o driver automaticamente para você. Vá para o Gerenciador de Dispositivos digitando **Device Manager** na pesquisa do Windows e verifique se você consegue ver o adaptador conectado como um dispositivo COM.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

- **Passo 2:** Se você não conseguir ver o adaptador, será necessário instalar o driver de acordo com o adaptador que está usando. Em geral, você pode encontrar esses drivers no site do fabricante. Para o adaptador que estamos usando, você pode acessar [esta página](https://www.ugreen.com/pages/download), procurar por **20201** como número do modelo e baixar o driver correspondente

- **Passo 3:** Abra o Putty no PC, selecione a seção **Terminal** e defina o seguinte

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **Passo 4:** Selecione **Session**, em **Coonection type**, selecione **Serial**, defina o número da porta serial de acordo com o que você vê no **Device Manager**, mantenha a velocidade padrão (9600) e clique em **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

- **Passo 4:** Na janela de terminal do reTerminal Industrial, digite o seguinte para enviar um sinal do reComputer para o PC

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reComputer Industrial" > /dev/ttyTHS0
```

Agora você verá esta mensagem exibida no Putty

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

- **Passo 5:** Na janela de terminal do reTerminal Industrial, digite o seguinte para aguardar o recebimento de sinais do PC

```sh
sudo cat /dev/ttyTHS0
```

- **Passo 6:** No Putty, digite qualquer coisa, pressione **ENTER** e isso será exibido na janela de terminal do reComputer Industrial

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### Visão Geral da Conexão RS422

Aqui você pode usar um adaptador USB para RS422 para testar a interface. Usamos o [Adaptador DTech USB para RS485](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) para nossos testes.

- **Passo 1:** Desligue a placa

- **Passo 2:** Aqui temos 2 opções para configurar os DIP switches. Ou no modo 000 ou no modo 100. As posições dos interruptores para cada modo são mostradas abaixo

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

- **Passo 3:** Conecte o adaptador USB para RS422 ao conector DB9 usando jumpers, como mostrado abaixo. Aqui conectamos o adaptador que mencionamos acima

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

- **Passo 4:** Conecte a outra extremidade a uma das portas USB do seu PC

- **Passo 5:** Ligue a placa

### Uso do RS422

- **Passo 1:** Talvez você precise instalar um driver para o adaptador que está usando ou o Windows instalará o driver automaticamente para você. Vá para o Gerenciador de Dispositivos digitando **Device Manager** na pesquisa do Windows e verifique se você consegue ver o adaptador conectado como um dispositivo COM.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **Passo 2:** Se você não conseguir ver o adaptador, será necessário instalar o driver de acordo com o adaptador que está usando. Em geral, você pode encontrar esses drivers no site do fabricante. Para o adaptador que estamos usando, você pode acessar [esta página](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

- **Passo 3:** Abra o Putty no PC, selecione a seção **Terminal** e defina o seguinte

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **Passo 4:** Selecione **Session**, em **Coonection type**, selecione **Serial**, defina o número da porta serial de acordo com o que você vê no **Device Manager**, mantenha a velocidade padrão (9600) e clique em **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **Passo 4:** Na janela de terminal do reTerminal Industrial, digite o seguinte para enviar um sinal do reComputer para o PC

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

Agora você verá esta mensagem exibida no Putty

- **Passo 5:** Na janela de terminal do reTerminal Industrial, digite o seguinte para aguardar o recebimento de sinais do PC

```sh
sudo cat /dev/ttyTHS0
```

- **Passo 6:** No Putty, digite qualquer coisa, pressione **ENTER** e ela será exibida na janela de terminal do reComputer Industrial

### Visão geral da conexão RS485

Aqui você pode usar um adaptador USB para RS422 para testar a interface. Utilizamos o [Adaptador DTech USB para RS485](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) para nossos testes.

- **Passo 1:** Desligue a placa

- **Passo 2:** Aqui temos 3 opções para configurar as chaves DIP. Ou no modo 010 ou no modo 011 ou no modo 110. As posições das chaves para cada modo são mostradas abaixo

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

- **Passo 3:** Conecte o adaptador USB para RS422 ao conector DB9 usando jumpers conforme mostrado abaixo. Aqui conectamos o adaptador que mencionamos acima

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

- **Passo 4:** Conecte a outra extremidade a uma das portas USB do seu PC

- **Passo 5:** Ligue a placa

### Uso do RS485

- **Passo 1:** Talvez você precise instalar um driver para o adaptador que está utilizando ou o Windows instalará automaticamente o driver para você. Acesse o Gerenciador de Dispositivos digitando **Device Manager** na pesquisa do Windows e verifique se você consegue ver o adaptador conectado como um dispositivo COM.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **Passo 2:** Se você não conseguir ver o adaptador, precisará instalar o driver de acordo com o adaptador que está usando. Geralmente você encontra esses drivers no site do fabricante. Para o adaptador que estamos usando, você pode acessar [esta página](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

- **Passo 3:** Abra o Putty no PC, selecione a seção **Terminal** e configure o seguinte

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **Passo 4:** Selecione **Session**, em **Coonection type**, selecione **Serial**, defina o número da porta serial de acordo com o que você vê no **Device Manager**, mantenha a velocidade padrão (9600) e clique em **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **Passo 4:** Na janela de terminal do reTerminal Industrial, digite o seguinte para enviar um sinal do reComputer para o PC

```sh
sudo su 
cd /sys/class/gpio 
echo 447 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reComputer Industrial" > /dev/ttyTHS0
```

Agora você verá esta mensagem exibida no Putty

- **Passo 5:** Na janela de terminal do reTerminal Industrial, digite o seguinte para aguardar o recebimento de sinais do PC

```sh
sudo su
cd /sys/class/gpio
echo 447 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

- **Passo 6:** No Putty, digite qualquer coisa, pressione **ENTER** e ela será exibida na janela de terminal do reComputer Industrial

## Conectores Gigabit Ethernet

Existem dois conectores Gigabit Ethernet (10/100/1000M) no reComputer Industrial e eles funcionam de maneiras diferentes

- O conector mais à esquerda é conectado diretamente ao módulo Jetson e é capaz de fornecer funcionalidade PoE com especificação **PSE 802.3 af, 15W**. Isso significa que você pode conectar uma câmera IP PoE ou qualquer outro dispositivo PoE a esta porta para fornecer energia ao dispositivo conectado.
- O outro conector é conectado por meio de um módulo PCIe para Ethernet (LAN7430-I/Y9X)

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/36.png"/></div>

Existem 2 LEDs (verde e amarelo) em cada porta Ethernet que indicam o seguinte

- LED verde: LIGADO apenas quando conectado a uma rede de 1000M
- LED amarelo: Mostra o status de atividade da rede

## USB

O reComputer Industrial vem com 3 conectores USB3.2 onboard e possui as seguintes características:

- Nos conectores USB duplos empilhados, as portas USB superior e inferior compartilham um CI limitador de corrente, com capacidade total de fornecimento de energia de 2.1A de corrente máxima de saída (individualmente também pode ser 2.1A). Se ultrapassar 2.1A, entrará no estado de proteção contra sobrecorrente.
- No conector USB único ao lado dos conectores USB duplos empilhados, ele possui capacidade total de fornecimento de energia de 2.1A de corrente máxima de saída. Se ultrapassar 2.1A, entrará no estado de proteção contra sobrecorrente.
- O módulo Orin NX vem com 3 USB3.2, dos quais apenas um é usado no reComputer e convertido em 3 vias. (USB3.1 TYPE-A x2 - J4 e USB3.1 TYPE-Ax1 -J3).
- Suporta apenas USB Host, não o modo Device
- Fornece 5V 2.1A
- Hot-swappable

### Uso

Vamos explicar como fazer um benchmark simples em um pendrive USB conectado

- **Passo 1:** Verifique a velocidade de gravação executando o comando abaixo

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **Passo 2:** Verifique a velocidade de leitura executando os comandos abaixo. Certifique-se de executá-los após executar o comando acima para velocidade de gravação.

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

## LED Configurável

Há um LED verde localizado na placa conforme mostrado abaixo. Por padrão, ele atua como o LED que mostra que o dispositivo está funcionando corretamente. No entanto, você também pode programar este LED para ligar e desligar pelo sistema

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/21.png"/></div>

### Uso

- **Passo 1:** Digite os seguintes comandos em uma janela de terminal para acessar o LED verde

```sh
sudo -i
cd /sys/class/gpio
echo 318 > export 
cd PCC.01
echo out > direction 
```

- **Passo 2:** Desligue o LED

```sh
echo 0 > value 
```

- **Passo 3:** Ligue o LED

```sh
echo 1 > value 
```

Se você terminou de usar o LED, pode executar o seguinte

```sh
cd ..
echo 318 > unexport
```

## Monitorar Desempenho do Sistema

Podemos usar o aplicativo **jetson stats** para monitorar as temperaturas dos componentes do sistema e verificar outros detalhes do sistema, tais como

- Ver utilização de CPU, GPU, RAM
- Alterar modos de energia
- Definir para clocks máximos
- Verificar informações do JetPack

- **Passo 1:** Nas janelas de terminal do reComputer Industrial, digite o seguinte

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

O reComputer Industrial não vem com WiFi e Bluetooth prontos para uso. Mas há uma seção reservada na PCB para que um módulo WiFi/ Bluetooth possa ser soldado na placa. Aqui reservamos o espaço para suportar um módulo **BL-M8723DU1**.

### Visão geral da conexão

- **Passo 1:** Se você quiser soldar o módulo **BL-M8723DU1** por conta própria, pode soldá-lo. Mas não recomendamos isso porque, se você danificar a placa no processo, a garantia será anulada. O que recomendamos é usar nosso serviço profissional para ajudá-lo a soldar este módulo na placa e você pode enviar um e-mail para order@seeed.cc com seu pedido.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/31.jpg"/></div>

- **Passo 2:** Conecte duas antenas aos dois conectores de antena na placa para WiFi e Bluetooth. Aqui você precisa usar um conector IPEX

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/32.png"/></div>

### Uso

- **Passo 1:** Ligue a placa e, quando o dispositivo iniciar no Ubuntu Desktop, clique no menu suspenso no canto superior direito, navegue até `Settings > Wi-Fi` e alterne o botão na barra de título para ativar o WiFi. Depois disso selecione uma rede WiFi, insira a senha necessária e conecte-se a ela

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/33.png"/></div>

- **Passo 2:** Na mesma janela, escolha **Bluetooth** e alterne o botão na barra de título para ativar o Bluetooth. Depois disso selecione um dispositivo Bluetooth para se conectar a ele

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/34.png"/></div>

## TPM

O reComputer Industrial vem com uma interface TPM para conectar um módulo TPM externo. Aqui testamos com um módulo TPM2.0 baseado em Infineon SLB9670.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/114.jpg"/></div>

### Visão geral da conexão

Conecte o módulo TPM ao conector TPM conforme mostrado abaixo

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

Aqui será pedido para digitar **YES** para reiniciar a placa  

- **Passo 2:** Após a inicialização da placa, insira o seguinte comando para definir os clocks da CPU para a frequência máxima

```sh
sudo jetson_clocks
```

## Tabela de GPIO

Você pode acessar a tabela de GPIO do reComputer Industrial para se familiarizar com todos os mapeamentos de pinos.

Execute o seguinte em um terminal para acessá-la

```sh
sudo cat /sys/kernel/debug/gpio
```

E você verá a saída da seguinte forma

```sh
gpiochip3: GPIOs 289-304, parent: i2c/1-0021, 1-0021, can sleep:
 gpio-289 (wl_dis              |gpio_xten_pin@0     ) out hi
 gpio-290 (hst_wake_wl         |gpio_xten_pin@1     ) out hi
 gpio-291 (wl_wake_hst         |gpio_xten_pin@2     ) out hi ACTIVE LOW
 gpio-292 (bt_dis              |gpio_xten_pin@3     ) out hi
 gpio-293 (hst_wake_bt         |gpio_xten_pin@4     ) out hi
 gpio-294 (bt_wake_hst         |gpio_xten_pin@5     ) out hi ACTIVE LOW
 gpio-295 (spi0_rst_3v3        |gpio_xten_pin@6     ) out lo ACTIVE LOW
 gpio-296 (gpio_pin7           |gpio_xten_pin@7     ) out lo ACTIVE LOW
 gpio-297 (can_120R_en         )
 gpio-298 (M2B_PCIe_rst        )
 gpio-299 (USB_HUB_rst         |gpio_xten_pin@10    ) out hi
 gpio-300 (PCIe_ETH_rst        )
 gpio-301 (M2B_WOWWAN          |gpio_xten_pin@12    ) out hi ACTIVE LOW
 gpio-302 (M2B_DPR_3V3         |gpio_xten_pin@13    ) out hi ACTIVE LOW
 gpio-303 (SIM_MUX_SEL         |gpio_xten_pin@14    ) out hi ACTIVE LOW
 gpio-304 (gpio_pin15          |gpio_xten_pin@15    ) out hi ACTIVE LOW

gpiochip2: GPIOs 305-334, parent: platform/c2f0000.gpio, tegra194-gpio-aon:
 gpio-305 (PAA.00              )
 gpio-306 (PAA.01              )
 gpio-307 (PAA.02              )
 gpio-308 (PAA.03              )
 gpio-309 (PAA.04              )
 gpio-310 (PAA.05              )
 gpio-311 (PAA.06              )
 gpio-312 (PAA.07              )
 gpio-313 (PBB.00              )
 gpio-314 (PBB.01              )
 gpio-315 (PBB.02              )
 gpio-316 (PBB.03              )
 gpio-317 (PCC.00              )
 gpio-318 (PCC.01              |pwr                 ) out hi
 gpio-319 (PCC.02              )
 gpio-320 (PCC.03              |mux                 ) out hi
 gpio-321 (PCC.04              )
 gpio-322 (PCC.05              )
 gpio-323 (PCC.06              )
 gpio-324 (PCC.07              )
 gpio-325 (PDD.00              )
 gpio-326 (PDD.01              )
 gpio-327 (PDD.02              )
 gpio-328 (PEE.00              )
 gpio-329 (PEE.01              )
 gpio-330 (PEE.02              )
 gpio-331 (PEE.03              )
 gpio-332 (PEE.04              |power-key           ) in  hi IRQ ACTIVE LOW
 gpio-333 (PEE.05              )
 gpio-334 (PEE.06              )
gpiochip1: GPIOs 335-503, parent: platform/2200000.gpio, tegra194-gpio:
 gpio-335 (PA.00               )
 gpio-336 (PA.01               )
 gpio-337 (PA.02               )
 gpio-338 (PA.03               )
 gpio-339 (PA.04               )
 gpio-340 (PA.05               )
 gpio-341 (PA.06               )
 gpio-342 (PA.07               )
 gpio-343 (PB.00               )
 gpio-344 (PB.01               )
 gpio-345 (PC.00               )
 gpio-346 (PC.01               )
 gpio-347 (PC.02               )
 gpio-348 (PC.03               )
 gpio-349 (PC.04               )
 gpio-350 (PC.05               )
 gpio-351 (PC.06               )
 gpio-352 (PC.07               )
 gpio-353 (PD.00               )
 gpio-354 (PD.01               )
 gpio-355 (PD.02               )
 gpio-356 (PD.03               )
 gpio-357 (PE.00               )
 gpio-358 (PE.01               )
 gpio-359 (PE.02               )
 gpio-360 (PE.03               )
 gpio-361 (PE.04               )
 gpio-362 (PE.05               )
 gpio-363 (PE.06               )
 gpio-364 (PE.07               )
 gpio-365 (PF.00               )
 gpio-366 (PF.01               )
 gpio-367 (PF.02               )
 gpio-368 (PF.03               )
 gpio-369 (PF.04               )
 gpio-370 (PF.05               )
 gpio-371 (PG.00               |force-recovery      ) in  hi IRQ ACTIVE LOW
 gpio-372 (PG.01               )
 gpio-373 (PG.02               |fixed-regulators:reg) out lo
 gpio-374 (PG.03               |wifi-enable         ) out hi
 gpio-375 (PG.04               )
 gpio-376 (PG.05               )
 gpio-377 (PG.06               )
 gpio-378 (PG.07               )
 gpio-379 (PH.00               )
 gpio-380 (PH.01               )
 gpio-381 (PH.02               )
 gpio-382 (PH.03               )
 gpio-383 (PH.04               )
 gpio-384 (PH.05               )
 gpio-385 (PH.06               )
 gpio-386 (PH.07               )
 gpio-387 (PI.00               )
 gpio-388 (PI.01               )
 gpio-389 (PI.02               )
 gpio-390 (PI.03               )
 gpio-391 (PI.04               )
 gpio-392 (PJ.00               )
 gpio-393 (PJ.01               )
 gpio-394 (PJ.02               )
 gpio-395 (PJ.03               )
 gpio-396 (PJ.04               )
 gpio-397 (PJ.05               )
 gpio-398 (PK.00               )
 gpio-399 (PK.01               )
 gpio-400 (PK.02               )
 gpio-401 (PK.03               )
 gpio-402 (PK.04               )
 gpio-403 (PK.05               )
 gpio-404 (PK.06               )
 gpio-405 (PK.07               )
 gpio-406 (PL.00               )
 gpio-407 (PL.01               )
 gpio-408 (PL.02               )
 gpio-409 (PL.03               )
 gpio-410 (PM.00               )
 gpio-411 (PM.01               |hdmi2.0_hpd         ) in  lo IRQ
 gpio-412 (PM.02               )
 gpio-413 (PM.03               )
 gpio-414 (PM.04               )
 gpio-415 (PM.05               )
 gpio-416 (PM.06               )
 gpio-417 (PM.07               )
 gpio-418 (PN.00               |fixed-regulators:reg) out lo
 gpio-419 (PN.01               )
 gpio-420 (PN.02               )
 gpio-421 (PO.00               )
 gpio-422 (PO.01               )
 gpio-423 (PO.02               )
 gpio-424 (PO.03               )
 gpio-425 (PO.04               )
 gpio-426 (PO.05               )
 gpio-427 (PP.00               )
 gpio-428 (PP.01               )
 gpio-429 (PP.02               )
 gpio-430 (PP.03               )
 gpio-431 (PP.04               )
 gpio-432 (PP.05               )
 gpio-433 (PP.06               )
 gpio-434 (PP.07               )
 gpio-435 (PQ.00               )
 gpio-436 (PQ.01               )
 gpio-437 (PQ.02               )
 gpio-438 (PQ.03               )
 gpio-439 (PQ.04               )
 gpio-440 (PQ.05               )
 gpio-441 (PQ.06               )
 gpio-442 (PQ.07               )
 gpio-443 (PR.00               )
 gpio-444 (PR.01               |phy_reset           ) out hi
 gpio-445 (PR.02               )
 gpio-446 (PR.03               )
 gpio-447 (PR.04               )
 gpio-448 (PR.05               )
 gpio-449 (PS.00               )
 gpio-450 (PS.01               )
 gpio-451 (PS.02               )
 gpio-452 (PS.03               )
 gpio-453 (PS.04               )
 gpio-454 (PS.05               )
 gpio-455 (PS.06               )
 gpio-456 (PS.07               )
 gpio-457 (PT.00               )
 gpio-458 (PT.01               )
 gpio-459 (PT.02               )
 gpio-460 (PT.03               )
 gpio-461 (PT.04               )
 gpio-462 (PT.05               )
 gpio-463 (PT.06               )
 gpio-464 (PT.07               )
 gpio-465 (PU.00               )
 gpio-466 (PV.00               )
 gpio-467 (PV.01               )
 gpio-468 (PV.02               )
 gpio-469 (PV.03               )
 gpio-470 (PV.04               )
 gpio-471 (PV.05               )
 gpio-472 (PV.06               )
 gpio-473 (PV.07               )
 gpio-474 (PW.00               )
 gpio-475 (PW.01               )
 gpio-476 (PX.00               )
 gpio-477 (PX.01               )
 gpio-478 (PX.02               )
 gpio-479 (PX.03               )
 gpio-480 (PX.04               )
 gpio-481 (PX.05               )
 gpio-482 (PX.06               )
 gpio-483 (PX.07               )
 gpio-484 (PY.00               )
 gpio-485 (PY.01               )
 gpio-486 (PY.02               )
 gpio-487 (PY.03               )
 gpio-488 (PY.04               )
 gpio-489 (PY.05               )
 gpio-490 (PY.06               )
 gpio-491 (PY.07               )
 gpio-492 (PZ.00               )
 gpio-493 (PZ.01               |vbus                ) in  hi IRQ ACTIVE LOW
 gpio-494 (PZ.02               )
 gpio-495 (PZ.03               )
 gpio-496 (PZ.04               )
 gpio-497 (PZ.05               )
 gpio-498 (PZ.06               |cs_gpio             ) out lo
 gpio-499 (PZ.07               |cs_gpio             ) out hi
 gpio-500 (PFF.00              )
 gpio-501 (PFF.01              )
 gpio-502 (PGG.00              )
 gpio-503 (PGG.01              )

gpiochip0: GPIOs 504-511, parent: i2c/4-003c, max77620-gpio, can sleep:
 gpio-510 (                    |gpio_default        ) in  hi
 gpio-511 (                    |gpio_default        ) in  hi
```

## Suporte Técnico

Por favor, não hesite em enviar problemas para o nosso [fórum](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
