---
description: Uso da Interface de Hardware do reServer Industrial
title: Uso da Interface de Hardware do reServer Industrial
keywords:
  - reServer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reserver_industrial_hardware_interface_usage
last_update:
  date: 09/22/2023
  author: Lakshantha
sku: 114110247
createdAt: '2023-06-08'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reserver_industrial_hardware_interface_usage/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Uso de Hardware e Interfaces

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/2.jpg"/></div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/3.jpg"/></div>

O reServer Industrial possui 2 baias para unidades SATA HDD/ SSD de 2,5" para armazenar facilmente centenas de filmagens de vídeo locais em uma aplicação de análise de vídeo. Ele também permite múltiplas opções de conectividade, incluindo 5 portas Ethernet RJ-45, 1 RS232/422/485, 4 DI/DO isoladas, 1 CAN, 4× USB3.1. O design sem ventoinha com opções versáteis de montagem permite a implantação de -20 a 60 ℃, o que é ideal para ambientes mais severos e cargas mais pesadas.

O reServer Industrial vem com um dissipador de calor passivo e um design sem ventoinha, tornando-o ideal para uso em ambientes exigentes. O dissipador de calor passivo permite um resfriamento eficiente sem a necessidade de uma ventoinha, reduzindo o risco de falha de componentes devido a poeira ou outros contaminantes. O design sem ventoinha também reduz os níveis de ruído e o consumo de energia, tornando-o adequado para uso em ambientes sensíveis a ruído e minimizando os custos de energia.

O reServer Industrial possui 5 portas RJ45 GbE, 4 das quais são portas PoE PSE para fornecer alimentação via Ethernet para dispositivos como câmeras IP. Isso elimina a necessidade de uma fonte de alimentação separada e facilita a implantação de dispositivos de rede em áreas sem tomadas de energia facilmente disponíveis. A porta GbE restante é usada para conectar a um switch ou roteador de rede, permitindo a comunicação com outros dispositivos na rede e o acesso à Internet.

- **Servidor de Borda de IA Compacto e sem Ventoinha:** Alimentado pelos módulos NVIDIA Jetson™ Orin Nano/Orin NX, variando de 20 TOPS a 100 TOPS de desempenho em IA, faixa de temperatura mais ampla de -20 ~ 60°C com fluxo de ar de 0,7m/s
- **Processamento Multistream:** 5× GbE RJ45 (4 para 802.3af PSE), lida com múltiplos fluxos com processamento em tempo real
- **Armazenamento Expansível:** 2 baias para unidades SATA HDD/SSD de 2,5", além de um soquete M.2 2280 para SSD NVMe
- **Interfaces Industriais:** Inclui porta COM, portas DI/DO, porta CAN, USB 3.1 e módulo opcional TPM2.0
- **Conectividade Híbrida:** Suporta 5G/4G/LTE/LoRaWAN® (módulo opcional) com slot para cartão Nano SIM
- **Certificações:** FCC, CE, UKCA, ROHS, KC

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
</a></div>

## Desmontar o reServer Industrial

Antes de tudo, é melhor desmontar o gabinete externo para acessar todas as interfaces. Siga [este documento](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Assembly-Guide.pdf) para saber mais.

## Conectores Gigabit Ethernet

Existem 5 portas Ethernet no reServer Industrial com especificação de 10/100/1000Mbps e 4 delas são classificadas com PSE 802.3 af 15 W, onde você pode conectar diretamente câmeras PoE a essas portas (LAN1-LAN4). Elas são conectadas por meio de um módulo PCIe para Ethernet (LAN7430-I/Y9X). No entanto, a porta Ethernet restante (LAN0) no lado mais à esquerda é usada apenas para conectar a um roteador para acesso à internet.

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reServer-Industrial/5.jpg"/></div>

Existem 2 LEDs (verde e amarelo) em cada porta Ethernet que indicam o seguinte

- LED verde: LIGADO somente quando conectado a uma rede de 1000M
- LED amarelo: Mostra o status de atividade da rede

### Uso

- Antes de conectar câmeras PoE, você precisa habilitar a função PoE para as 4 portas Ethernet. Habilite da seguinte forma:

  <Tabs>
  <TabItem value="Jetpack 5.1.x" label="Jetpack 5.1.x">

    ```sh
    sudo -i
    cd /sys/class/gpio
    echo 315 > export 
    cd gpio315
    echo "out" > direction
    echo 1 > value
    ```

  </TabItem>
  <TabItem value="Jetpack 6" label="Jetpack 6">

    ```sh
    sudo apt update
    sudo apt install gpiod
    gpioset gpiochip2 15=1
    ```

  </TabItem>
  </Tabs>


### Vinculando o IP de Rede Física aos números eth

  **As interfaces LAN1 a LAN4 são designadas para PoE.**

  Se você precisa configurar endereços IP diferentes para cada interface PoE, siga estas instruções:

  :::warning
  Os nomes das interfaces (por exemplo, `enP1p1s0`) podem variar dependendo do seu sistema. Antes de prosseguir, execute o seguinte comando para verificar os nomes reais das interfaces no seu dispositivo. Os comandos abaixo são apenas para referência — substitua o nome da interface pelo que é exibido no seu sistema.

  ```bash
  ifconfig
  ```
  :::

  **Passo 1**: Conecte o dispositivo PoE ao reServer Industrial. Crie uma nova conexão para a interface de destino. Por exemplo, para configurar a interface `enP1p1s0` e nomeá-la `POE1`:

  ```bash
  sudo nmcli connection add type ethernet ifname enP1p1s0 con-name POE1
  ```

  **Passo 2**: Configure o endereço IP. O endereço IP pode ser personalizado de acordo com o uso real.

  ```bash
  sudo nmcli connection modify POE1 ipv4.addresses 192.168.6.6/24
  ```

  **Passo 3**: Defina o método IPv4 como manual (IP estático).

  ```bash
  sudo nmcli connection modify POE1 ipv4.method manual
  ```

  **Passo 4**: Ative a conexão.

  ```bash
  sudo nmcli connection up POE1
  ```

  **Passo 5**: Verifique a configuração.

  ```bash
  ifconfig
  ```

## Conectores SATA

O reServer Industrial suporta 2 HDD/SSD SATA de 2,5" e vem com conectores de dados e alimentação SATA. Você pode conectar ao HDD/ SSD da seguinte forma

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/23.jpg"/></div>

### Uso

Depois que o sistema for inicializado, você pode verificar as unidades SATA conectadas por meio de

```sh
lsblk
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/28.png"/></div>

## RTC

O reServer Industrial está equipado com 2 maneiras diferentes de se conectar a uma bateria de RTC

### Visão Geral da Conexão

- Método 1:

Conecte uma **bateria moeda CR1220 de 3V** ao soquete RTC na placa, como mostrado abaixo. Certifique-se de que a extremidade **positiva (+)** da bateria esteja voltada para cima

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/6.jpg"/></div>

- Método 2:

Conecte uma **bateria moeda CR2302 de 3V com conector JST** ao soquete JST de 2 pinos 1,25mm na placa, como mostrado abaixo

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/7.jpg"/></div>

### Uso

- **Passo 1:** Conecte uma bateria RTC conforme mencionado acima

- **Passo 2:** Ligue o reServer Industrial

- **Passo 3:** No Ubuntu Desktop, clique no menu suspenso no canto superior direito, navegue até `Settings > Date & Time`, conecte-se a uma rede via cabo Ethernet e selecione **Automatic Date & Time** para obter a data/ hora automaticamente

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
Se você não se conectou à internet via Ethernet, pode definir manualmente a data/ hora aqui
:::

- **Passo 4:** Abra uma janela de terminal e execute o comando abaixo para verificar a hora do relógio de hardware

```sh
sudo hwclock
```

Você verá uma saída semelhante à abaixo, que não é a data/ hora correta

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

- **Passo 5:** Altere a hora do relógio de hardware para a hora atual do relógio do sistema inserindo o comando abaixo

```sh
sudo hwclock --systohc
```

- **Passo 6:** Remova quaisquer cabos Ethernet conectados para garantir que ele não obtenha a hora da internet e reinicie a placa

```sh
sudo reboot
```

- **Passo 7:** Verifique a hora do relógio de hardware para confirmar que a data/ hora permanece a mesma mesmo que o dispositivo tenha sido desligado

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

Fora da caixa, o reServer Industrial inclui um SSD de 128GB conectado ao slot M.2 Key M, que vem pré-instalado com o sistema JetPack.

### Visão Geral da Conexão

Se você quiser remover o SSD incluído e instalar um novo, pode seguir as etapas abaixo. Aqui recomendamos apenas o uso de SSDs Seeed com armazenamento de [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html), [256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html), [512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) e [1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html), porque apenas esses SSDs foram testados por nós. Além disso, essa interface suporta SSDs PCIe Gen4.0.

- **Passo 1:** Remova o parafuso do SSD pré-instalado

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/8.jpg"/></div>

- **Passo 2:** Remova o SSD deslizando-o para longe do conector do SSD

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/9.jpg"/></div>

- **Passo 3:** Insira um novo SSD e aperte novamente o parafuso

### Uso

Vamos explicar como fazer um benchmark simples no SSD conectado

- **Passo 1:** Verifique a velocidade de gravação executando o comando abaixo

```sh
sudo dd if=/dev/zero of=/home/$USER/test bs=1M count=512 conv=fdatasync
```

- **Passo 2:** Verifique a velocidade de leitura executando os comandos abaixo. Certifique-se de executar isto depois de executar o comando acima para a velocidade de gravação.

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/$USER/test of=/dev/null bs=1M count=512
```

### mini PCIe

O reServer Industrial vem com um conector mini PCIe que suporta módulos 4G e LoRa. No entanto, você só pode conectar um módulo 4G ou um módulo LoRa por vez. Alguns módulos 4G vêm com funcionalidade de GPS embutida. Iremos falar sobre isso também.

#### Visão geral da conexão do módulo 4G

Atualmente esta placa suporta os módulos EC25EUXGA e EC20CEHCLG.

- **Passo 1:** Desligue a placa se ela já estiver ligada

- **Passo 2:** Remova o espaçador incluso. Este espaçador só é necessário se você estiver usando a interface M.2 Key B

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/10.jpg"/></div>

- **Passo 3:** Insira o módulo 4G no slot mini PCIe, use os parafusos pré-instalados e parafuse-os nos 2 furos para fixar o módulo 4G no lugar

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/11.jpg"/></div>

- **Passo 4:** Conecte uma antena ao conector de antena rotulado como **MAIN**. Aqui você precisa usar um conector IPEX

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/12.jpg"/></div>

- **Passo 5:** Insira um cartão nano SIM habilitado para 4G no slot de cartão SIM na placa, certificando-se de que a superfície dourada do cartão SIM esteja voltada para cima. Aqui insira o cartão até o fim para que ele ressalte após atingir a mola interna e trave no lugar.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
Se você quiser remover o cartão SIM, empurre o cartão para dentro para atingir a mola interna, de modo que o SIM saia do slot
:::

- **Passo 6:** Adicione um jumper entre os pinos **SIM_MUX_SEL** e **GND** no **Header J8 (Control and UART)**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/14.jpg"/></div>

- **Passo 6:** Ligue a placa

#### Uso do módulo 4G - Teste de discagem

Ao usar o módulo EC25, o módulo iniciará automaticamente e estará pronto para uso. No entanto, ao usar o módulo EC20, você precisa reiniciar o módulo para que ele funcione

- **Passo 1:** Se você estiver usando o módulo EC25, pode pular este passo. Porém, se estiver usando o módulo EC20, digite os seguintes comandos para acessar o pino GPIO309, que é responsável por reiniciar o módulo 4G

```sh
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 1 > value
```

Para o módulo EC25, o LED2 acenderá em verde assim que a placa for inicializada. Para o módulo EC20, o LED2 acenderá em verde após reiniciar o módulo, como explicado acima

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

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

- **Passo 5:** Digite o comando **"AT"** e pressione Enter. Se você vir a resposta "OK", o módulo 4G está funcionando corretamente

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

- **Passo 6:** Digite o comando **"ATI"** para verificar as informações do módulo

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

- **Passo 7:** Para testar o módulo, digite o comando abaixo para chamar outro número de telefone

```sh
ATD<phone_number>;
```

E você verá a seguinte saída

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

Se o número de telefone inserido conseguir receber a chamada, o módulo está funcionando como esperado

#### Uso do módulo 4G - Conectar à Internet

##### Módulo EC25

Se você estiver usando o módulo EC25, siga os passos abaixo

- **Passo 1:** Depois de abrir o console serial do módulo 4G conforme explicado acima (seção Uso do módulo 4G - Teste de discagem), execute o seguinte comando para conectar à Internet. Aqui substitua **YOUR_APN** pelo APN do seu provedor de rede

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/89.jpg"/></div>

Com a conexão bem-sucedida, a saída deve ser **OK**, como você pode ver na imagem acima

- **Passo 2:** Reinicie o módulo 4G executando o seguinte

```sh
AT+CFUN=1,1
```

Agora você perderá a conexão com o módulo 4G nos terminais seriais

- **Passo 3:** Feche o **minicom** pressionando **CTRL + A** e depois **Q**

- **Passo 4:** Digite **ifconfig** e você verá um endereço IP na interface **usb0**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/93.png"/></div>

- **Passo 5:** Você pode tentar pingar um site como abaixo para verificar se há conectividade com a Internet

```sh
ping -I usb0 www.bing.com -c 5
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/94.png"/></div>

##### Módulo EC20

Se você estiver usando o módulo EC20, siga os passos abaixo

- **Passo 1:** Se você já tiver reiniciado o módulo 4G conforme explicado na seção anterior (Uso do módulo 4G - Teste de discagem) para o módulo EC20, pode pular este passo. No entanto, se ainda não o fez, faça isso agora

- **Passo 2:** Entre no console serial do módulo 4G e digite o seguinte comando para configurar o modo ECM

```sh
AT+QCFG="usbnet",1
```

- **Passo 3:** Reinicie o módulo 4G

- **Passo 4:** Dentro do console do módulo 4G, execute o comando a seguir para conectar à Internet. Aqui substitua **YOUR_APN** pelo APN do seu provedor de rede

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

- **Passo 6:** Digite **ifconfig** e você verá um endereço IP na interface **usb1**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/90.jpg"/></div>

- **Passo 7:** Você pode tentar pingar uma URL como abaixo para verificar se há conectividade com a Internet

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/92.png"/></div>

#### Uso do módulo 4G - Conectar ao GPS

Alguns módulos 4G vêm com módulos GPS embutidos neles. Ambos os módulos EC25EUXGA e EC20CEHCLG vêm com módulos 4G neles.

- **Passo 1:** Reinicie o módulo GPS executando os comandos abaixo

```sh
echo -e "AT+QGPS=1\r\n" > /dev/ttyUSB2
echo -e "AT+QGPS=0\r\n" > /dev/ttyUSB2
```

- **Passo 2:** Obtenha os dados do GPS executando os comandos abaixo

```sh
sudo cat /dev/ttyUSB1
```

E você verá uma saída como a seguir

```sh
seeed@seeed-x:~$ sudo cat /dev/ttyUSB1
[sudo] password for seeed:
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSA,A,1,,,,,,,,,,,,,,,,*32
$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSA,A,1,,,,,,,,,,,,,,,,*32
$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPVTG,,T,,M,,N,,K,N*2C
```

#### Visão geral da conexão do módulo LoRa

Atualmente esta placa suporta o módulo WM1302 SPI. Você pode usar a [versão dos EUA](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html) ou a [versão da UE](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html), que estão disponíveis em nosso Bazaar.

- **Passo 1:** Desligue a placa se ela já estiver ligada

- **Passo 2:** Insira o módulo LoRa no slot mini PCIe e use os parafusos pré-instalados e parafuse-os nos 2 furos para fixar o módulo LoRa no lugar

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/16.jpg"/></div>

- **Passo 3:** Conecte uma antena ao conector de antena. Aqui você precisa usar um conector IPEX

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/17.jpg"/></div>

:::note
Certifique-se de que não haja jumper entre os pinos **SIM_MUX_SEL** e **GND** no **Header J8 (Control and UART)**. Este jumper só é necessário ao usar módulos 4G
:::

- **Passo 4:** Ligue a placa

#### Uso do módulo LoRa - Testar RF LoRa

Quando o módulo LoRa estiver conectado, você verá os LEDs verde e azul no módulo acenderem

- **Passo 1:** Digite o comando abaixo para verificar se o módulo LoRa foi detectado pelo sistema

```sh
i2cdetect -r -y 7
```

Se você vir a saída abaixo, o módulo foi detectado pelo sistema

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **Passo 2:** Digite os comandos abaixo para compilar e construir a ferramenta de transmissão de sinais LoRa

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

Para parar a transmissão, você pode pressionar **CTRL + C** no teclado.

#### Uso do módulo LoRa - Conectar ao TTN

Agora vamos conectar ao TTN (The Things Network) e usar o reServer Industrial como um gateway LoRaWAN TTN

- **Passo 1:** Insira o seguinte para deixar o packet forwarder pronto

```sh
cd ..
cd packet_forwarder
cp ../tools/reset_lgw.sh .
```

- **Passo 2:** Execute o seguinte de acordo com o módulo LoRa que você está utilizando. Aqui testamos a versão SPI US915

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

Depois de executar o comando acima, você verá a saída abaixo com a última linha exibindo a informação do **EUI do concentrador**. Guarde essa informação porque iremos usá‑la depois ao configurar o gateway com o TTN

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/79.jpg"/></div>

- **Passo 3:** Visite [este URL](https://console.cloud.thethings.network) para entrar no console do TTN e selecione uma região de sua preferência

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/80.png"/></div>

- **Passo 4:** Faça login se você já tiver uma conta ou cadastre uma nova conta se ainda não tiver

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/81.png"/></div>

- **Passo 5:** Clique em **Go to gateways**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/82.png"/></div>

- **Passo 6:** Clique em **+ Register gateway**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/83.png"/></div>

- **Passo 7:** Insira o **Concentrator EUI** que você obteve antes na seção **Gateway EUI** e clique em **Confirm**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/84.jpg"/></div>

- **Passo 8:** Insira o **Frequency plan** de acordo com o módulo LoRa que você está utilizando. Aqui estamos usando a versão US915 do módulo e, portanto, selecionamos **United Stated 902-928 MHz, FSB 2 (used by TTN)**. Depois disso clique em **Register gateway**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/85.jpg"/></div>

:::note
O **Gateway ID** foi preenchido automaticamente para você. No entanto, você pode alterá‑lo para qualquer coisa que preferir. **Gateway name** não é obrigatório preencher. No entanto, você também pode preenchê‑lo de acordo com sua preferência
:::

- **Passo 9:** Anote o **Gateway Server Address** na página inicial principal do gateway

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/86.jpg"/></div>

- **Passo 9:** No reTerminal Industrial, edite o arquivo **global_conf_json** que usamos juntamente com o comando **lora_pkt_fwd**. Aqui você precisa alterar as opções **gateway_ID**, **server_address**, **serv_port_up** e **serv_port_down** da seguinte forma

  - gateway_ID: EUI do concentrador do dispositivo
  - server_address: Gateway Server Address do TTN
  - serv_port_up: 1700
  - serv_port_down: 1700

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/87.png"/></div>

- **Passo 10:** Execute novamente o packet forwarder

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

Se você visualizar a saída abaixo, isso significa que o dispositivo foi conectado ao TTN com sucesso

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/88.jpg"/></div>

## M.2 Key B

O reServer Industrial vem com um conector M.2 Key B que suporta módulos 4G e 5G. Atualmente testamos o **módulo 5G SIM8202G-M2**

### Visão geral da conexão do módulo 5G

- **Passo 1:** Desligue a placa se ela já estiver ligada

- **Passo 2:** Certifique‑se de que o suporte (standoff) esteja no lugar e depois remova o parafuso superior do suporte

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/18.jpg"/></div>

- **Passo 2:** Deslize o módulo 5G para o slot M.2 Key B e parafuse o standoff para fixar o módulo 5G no lugar (falar sobre o standoff)

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/19.jpg"/></div>

- **Passo 3:** Conecte 4 antenas aos conectores de antena no módulo. Aqui você precisa usar um conector IPEX 4

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/20.jpg"/></div>

- **Passo 4:** Insira um cartão nano SIM habilitado para 5G no slot de cartão SIM na placa, certificando‑se de que a superfície dourada do SIM esteja voltada para baixo. Aqui insira o cartão até o final para que ele volte um pouco depois de atingir a mola interna e trave no lugar.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
Se você quiser remover o cartão SIM, empurre o cartão para dentro até atingir a mola interna para que o SIM saia do slot
:::

- **Passo 5:** Ligue a placa

### Uso do módulo 5G - Testar chamada

Ao usar o módulo 5G SIM8202G-M2, o módulo não iniciará automaticamente. Portanto, primeiro precisamos alternar alguns GPIOs para fazê‑lo iniciar

- **Passo 1:** Insira o seguinte para iniciar o módulo 5G

```sh
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

Uma vez que o acima for executado, o LED2 acenderá em verde

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

- **Passo 2:** Instale o minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **Passo 3:** Entre no console serial do módulo 5G conectado para que possamos inserir comandos AT e interagir com o módulo 5G

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **Passo 4:** Insira o comando **"AT"** e pressione Enter. Se você vir a resposta como "OK", o módulo 5G está funcionando corretamente

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

- **Passo 6:** Insira o comando **"ATI"** para verificar as informações do módulo

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>

- **Passo 7:** Para testar o módulo, insira o comando abaixo para ligar para outro número de telefone

```sh
ATD<phone_number>;
```

E você verá a saída abaixo

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

### Uso do módulo 5G - Conectar à Internet

Em breve

## DI/ DO

O reServer Industrial suporta 4 canais de entrada digital e 4 canais de saída digital, todos isolados opticamente para proteger de forma eficaz a placa principal de picos de tensão ou outras perturbações elétricas. Há também uma interface CAN nesse mesmo conector, que discutiremos mais adiante neste wiki

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/37.png"/></div>

### Tabela de atribuição de pinos de DI/ DO

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Label Name</th>
      <th>Schematic Signal</th>
      <th>Module Pin Number</th>
      <th>BGA Number</th>
      <th>GPIO Number</th>
      <th>V/A Limits</th>
      <th>Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>Input</td>
      <td>DI1</td>
      <td>DI_1_GPIO01</td>
      <td>118</td>
      <td>PQ.05</td>
      <td>453</td>
      <td rowSpan={4}>12V/ 20mA current in total</td>
      <td rowSpan={4}>12V Digital Input, ground signal needs to<br />be connected to GND_DI (Pin2/4/6)</td>
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
      <td rowSpan={4}>Output</td>
      <td>DO1</td>
      <td>DO_1_GPIO</td>
      <td>193</td>
      <td>PI.00</td>
      <td>399</td>
      <td rowSpan={4}>40V/40mA load per pin</td>
      <td rowSpan={4}>Digital output, maximum withstand<br />voltage 40V, ground signal needs to be<br />connected to GND_DO(Pin8/10)</td>
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
      <td rowSpan={2}>CAN bus with standard differential signals, <br />ground signal needs to be connected to GND_ISO (Pin 12)</td>
    </tr>
    <tr>
      <td />
      <td>CL</td>
    </tr>
    <tr>
      <td>Ground</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>The reference ground signal for the 12V Digital<br />Input, which is also the return path for the DI</td>
    </tr>
    <tr>
      <td />
      <td>GND_DO</td>
      <td>The reference ground signal of the digital output, which is also the return path of the DO</td>
    </tr>
    <tr>
      <td />
      <td>CG</td>
      <td>The reference ground signal for CAN</td>
    </tr>
  </tbody>
</table>

### Visão geral da conexão para DI

Você pode fazer a conexão para DI seguindo o diagrama abaixo. É melhor adicionar um resistor em série na linha DI. Aqui testamos com um resistor de 4,7kΩ conectado ao pino DI1.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### Uso para DI

Você precisa aplicar uma tensão de 12V na linha DI para que seja detectada como uma entrada. O comando para habilitar DI / DO é diferente entre Jetpack 5 e Jetpack 6. 



<Tabs>
<TabItem value="Jetpack 5" label="Jetpack 5">

- **Passo 1:** Faça as conexões como mostrado acima no **pino DI1** e aplique **12V**

- **Passo 2:** Abra o GPIO para DI1 como a seguir

```sh
sudo su 
cd /sys/class/gpio
echo 453 > export 
cd PQ.05
```

:::note
Você pode consultar a **Tabela de Atribuição de Pinos DI/ DO** para encontrar o número do GPIO e o número BGA. No exemplo acima, para o pino DI1, o número do GPIO é 453 e o número BGA é PQ.05
:::

- **Passo 3:** Execute o seguinte para verificar o status

```sh
cat value
```

Se a saída for 0, significa que há entrada de 12V. Se a saída for 1, significa que não há tensão de entrada.

</TabItem>
<TabItem value="Jetpack 6" label="Jetpack 6">

- **Passo 1:** Faça as conexões como mostrado acima no **pino DI1** e aplique **12V**

- **Passo 2:** Verifique o **line offset** de DI1 no chip0:

```sh
gpioinfo gpiochip0
```
Encontre o **line offset** correspondente com base no número BGA. O **line offset** de DI1 é `105`.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/reserver-di.jpg"/></div>


:::note
Você pode consultar a **Tabela de Atribuição de Pinos DI/ DO** para encontrar o número do GPIO e o número BGA. No exemplo acima, para o pino DI1, o número do GPIO é 453 e o número BGA é PQ.05	
:::

- **Passo 3:**
Para ler o **line offset 105** em gpiochip0, correspondente a DI1:
```sh
sudo gpioget gpiochip0 105
```
Uma saída 0 indica nível baixo. Uma saída 1 indica nível alto.  
O formato do comando é o seguinte `sudo gpioset <gpiochip> <line>`.

</TabItem>
</Tabs>


### Visão geral da conexão para DO

Você pode fazer a conexão para DO seguindo o diagrama abaixo. É melhor adicionar um resistor em série na linha DO. Aqui testamos com um resistor de 4,7kΩ

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### Uso para DO

Aqui você precisa conectar uma carga conforme mencionado no diagrama acima. A maneira mais fácil de testar isso seria conectar um multímetro se você tiver acesso a um, ou então conectar uma carga que exija menos de 40V de tensão máxima. O comando para habilitar DI / DO é diferente entre Jetpack 5 e Jetpack 6. 


<Tabs>
<TabItem value="Jetpack 5" label="Jetpack 5">

- **Passo 1:** Faça as conexões como mostrado acima no **pino DO1** e aplique **40V no máximo**

- **Passo 2:** Abra o GPIO para D01 como a seguir

```sh
sudo su 
cd /sys/class/gpio
echo 399 > export 
cd PI.00
echo out > direction
```

:::note
Você pode consultar a **Tabela de Atribuição de Pinos DI/ DO** para encontrar o número do GPIO e o número BGA. No exemplo acima, para o pino DO1, o número do GPIO é 399 e o número BGA é PI.00
:::

- **Passo 3:** Execute o seguinte para ligar o pino

```sh
echo 1 > value
```

</TabItem>
<TabItem value="Jetpack 6" label="Jetpack 6">

- **Passo 1:** Faça as conexões como mostrado acima no **pino DO1** e aplique **40V no máximo**

- **Passo 2:** Verifique o **line offset** de DO1 no chip0:

```sh
gpioinfo gpiochip0
```
Encontre o **line offset** correspondente com base no número BGA. O **line offset** de DO1 é `51`.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/reserver-do.jpg"/></div>



:::note
Você pode consultar a **Tabela de Atribuição de Pinos DI/ DO** para encontrar o número do GPIO e o número BGA. No exemplo acima, para o pino DO1, o número do GPIO é 399 e o número BGA é PI.00
:::

- **Passo 3:**
Use o seguinte comando para controlar o estado de DO1:
```sh
# set to 12v
sudo gpioset --mode=wait gpiochip0 51=0

# set to 0v
sudo gpioset --mode=wait gpiochip0 51=1
```
O formato do comando é o seguinte `sudo gpioset <gpiochip> <line>=<value>`.

</TabItem>
</Tabs>

Se a carga estiver ligada ou o multímetro indicar a tensão que você aplicou, o teste está funcionando corretamente.

## CAN

O reServer Industrial possui uma interface CAN que suporta o protocolo CAN FD (Controller Area Network Flexible Data-Rate) a 5Mbps. A interface CAN é isolada usando isolamento capacitivo, o que fornece excelente proteção EMI e garante comunicação confiável em aplicações industriais e de automação. Um resistor terminal de 120Ω foi instalado por padrão e você pode alternar este resistor ON e OFF usando GPIO.

Observação: A interface CAN usa uma fonte de alimentação isolada, o que significa que o sinal de terra para dispositivos externos conectados à interface CAN deve ser conectado ao pino CG

### Visão geral da conexão com adaptador USB para CAN

Para testar e interagir com o barramento CAN, conecte um adaptador USB para CAN aos conectores CAN na placa, como mostrado abaixo

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

Aqui usamos o [USB to CAN Analyzer Adapter with USB Cable](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) disponível em nosso Bazaar.

### Uso com adaptador USB para CAN

- **Passo 1:** Baixe o driver para o adaptador USB para CAN que você está usando no site do fabricante e instale-o. No nosso caso, de acordo com o adaptador que usamos, os drivers podem ser encontrados [aqui](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)

- **Passo 2:** Alguns adaptadores também vêm com o software necessário para o PC a fim de se comunicar com o dispositivo CAN. No nosso caso, de acordo com o adaptador que usamos, baixamos e instalamos o software que pode ser encontrado [aqui](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)

- **Passo 3:** Abra uma janela de terminal no reServer Industrial e execute os seguintes comandos para configurar e habilitar a interface CAN

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Passo 4:** Digite **ifconfig** no terminal e você verá que a interface CAN está habilitada

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **Passo 5:** Abra o software CAN que você instalou antes. Neste caso, abriremos o software que instalamos de acordo com o adaptador CAN que estamos usando

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/></div>

- **Passo 6:** Conecte o adaptador USB para CAN ao PC e abra o **Device Manager** pesquisando na barra de busca do Windows. Agora você verá o adaptador conectado em **Ports (COM & LPT)**. Anote a porta serial listada aqui. De acordo com a imagem abaixo, a porta serial é **COM9**

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/></div>

- **Passo 7:** Abra o software CAN, clique em **Refresh** ao lado da seção **COM**, clique no menu suspenso e selecione a porta serial de acordo com o adaptador conectado. Mantenha o **COM bps** no padrão e clique em **Open**

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/></div>

- **Passo 8:** Mantenha o **Mode** e o **CAN bps** no padrão, altere o **Type** para **Standard frame** e clique em **Set and Start**

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/></div>

- **Passo 9:** No reServer Industrial, execute o seguinte comando para enviar um sinal CAN ao PC

```sh
cansend can0 123#abcdabcd
```

Agora você verá o sinal acima recebido pelo software, como mostrado abaixo

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **Passo 10:** No reServer Industrial, execute o seguinte comando para aguardar o recebimento de sinais CAN do PC

```sh
candump can0 &
```

- **Passo 11:** No software CAN, clique em **Send a single frame**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

Agora você o verá sendo recebido pelo reServer Industrial da seguinte forma

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

#### Visão geral da conexão com reTerminal DM

Se você tiver acesso a um [reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html), poderá se comunicar diretamente com ele porque o reTerminal DM também possui uma interface CAN.

Consulte a imagem abaixo para conectar o reServer Industrial e o reTerminal DM via CAN

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

### Uso com reTerminal DM

- **Passo 1:** Antes de usar o reTerminal DM, visite [este wiki](https://wiki.seeedstudio.com/pt-br/reterminal-dm) para começar a usar o reTerminal DM

- **Passo 2:** Abra uma janela de terminal no reServer Industrial e execute os seguintes comandos para configurar e habilitar a interface CAN

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

- **Passo 6:** No reTerminal DM, execute o seguinte para aguardar o recebimento de sinais CAN do reServer Industrial

```sh
candump can0 &
```

- **Passo 7:** No reServer Industrial, execute o seguinte comando para enviar um sinal CAN para o reTerminal Industrial

```sh
cansend can0 123#abcdabcd
```

Agora você verá que ele foi recebido pelo reTerminal DM da seguinte forma

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **Passo 8:** Repita o **passo 6 e o passo 7**, mas invertendo os dispositivos. Use o reTerminal DM para enviar sinais CAN e use o reServer Industrial para recebê-los

## Interfaces RS232/ RS422/ RS485

O reServer Industrial possui um conector DB9 que suporta os protocolos de comunicação RS232, RS422 e RS485, e há um painel de chave DIP na placa para alternar entre as diferentes opções de interface

Você pode ver o painel de chave DIP abaixo:

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/21.jpg"/></div>

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
      <td>RS-232 Puro</td>
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
      <td>IC de chave (para uso especial).</td>
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
      <td>TX ENABLE Low Active</td>
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
      <td>Desligado</td>
    </tr>
  </tbody>
</table>

:::note
Fora da caixa, o modo padrão das chaves será definido como RS485 com 010 de fábrica
:::

A tabela acima leva em consideração as três primeiras chaves do painel de chave DIP. No entanto, a quarta chave é responsável por alternar a taxa de variação (slew rate), que está diretamente relacionada à taxa de dados

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
      <td>SLEW= Vcc<br />Este transceptor multiprotocolo RS232/RS422/RS485 limita a taxa de comunicação da seguinte forma:<br />RS-232: a Taxa de Dados Máxima é 1,5 Mbps<br />RS-485/RS-422; a Taxa de Dados Máxima é 10 Mbps<br />A Taxa de Dados Máxima real depende do Jetson SO Mused</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232: a Taxa de Dados Máxima é 250 Kbps<br />RS-485/RS-422: a Taxa de Dados Máxima é 250 kbps</td>
    </tr>
  </tbody>
</table>

Aqui usaremos adaptadores USB para RS232, RS485 e RS422 para testar as interfaces. Portanto, antes de prosseguir, você precisa instalar um aplicativo de terminal serial no seu PC. Aqui recomendamos que você instale o **Putty**, que é fácil de configurar e usar.

- **Passo 1:** Visite [este site](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) e baixe o Putty de acordo com a arquitetura do seu PC

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/60.png"/></div>

Aqui selecionamos o Putty de acordo com o PC que usamos, que é uma máquina Windows X86 de 64 bits

- **Passo 2:** Abra o instalador baixado e siga as etapas para instalar o aplicativo

### Visão Geral da Conexão

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
      <td>PINO</td>
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

Aqui você pode usar um adaptador USB para RS232 para testar a interface. Nós usamos o [Adaptador UGREEN USB para RS232](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1) para nossos testes.

- **Passo 1:** Desligue a placa

- **Passo 2:** Aqui temos 2 opções para configurar as chaves DIP. Ou no modo 001 ou no modo 101. As posições das chaves para cada modo são mostradas abaixo

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

- **Passo 3:** Conecte o adaptador USB para RS232 ao conector DB9

- **Passo 4:** Conecte a outra extremidade a uma das portas USB do seu PC

- **Passo 5:** Ligue a placa

### Uso de RS232

- **Passo 1:** Talvez você precise instalar um driver para o adaptador que está usando ou o Windows instalará o driver automaticamente para você. Vá para o Gerenciador de Dispositivos digitando **Device Manager** na pesquisa do Windows e verifique se você consegue ver o adaptador conectado como um dispositivo COM.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

- **Passo 2:** Se você não conseguir ver o adaptador, será necessário instalar o driver de acordo com o adaptador que está usando. Você geralmente pode encontrar esses drivers no site do fabricante. Para o adaptador que estamos usando, você pode acessar [esta página](https://www.ugreen.com/pages/download), procurar por **20201** como o número do modelo e baixar o driver correspondente

- **Passo 3:** Abra o Putty no PC, selecione a seção **Terminal** e defina o seguinte

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **Passo 4:** Selecione **Session**, em **Coonection type**, selecione **Serial**, defina o número da porta serial de acordo com o que você vê no **Device Manager**, mantenha a Velocidade como padrão (9600) e clique em **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

- **Passo 4:** Na janela de terminal do reServer Industrial, digite o seguinte para enviar um sinal do reServer Industrial para o PC

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reServer Industrial" > /dev/ttyTHS0
```

Agora você verá esta mensagem exibida no Putty

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

- **Passo 5:** Na janela de terminal do reTerminal Industrial, digite o seguinte para aguardar o recebimento de sinais do PC

```sh
sudo cat /dev/ttyTHS0
```

- **Passo 6:** No Putty, digite qualquer coisa, pressione **ENTER** e isso será exibido na janela de terminal do reServer Industrial

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### Visão Geral da Conexão RS422

Aqui você pode usar um adaptador USB para RS422 para testar a interface. Nós usamos o [Adaptador DTech USB para RS485](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) para nossos testes.

- **Passo 1:** Desligue a placa

- **Passo 2:** Aqui temos 2 opções para configurar as chaves DIP. Ou no modo 000 ou no modo 100. As posições das chaves para cada modo são mostradas abaixo

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

- **Passo 3:** Conecte o adaptador USB para RS422 ao conector DB9 usando jumpers conforme mostrado abaixo. Aqui conectamos o adaptador que mencionamos acima

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

- **Passo 4:** Conecte a outra extremidade a uma das portas USB do seu PC

- **Passo 5:** Ligue a placa

### Uso de RS422

- **Passo 1:** Talvez você precise instalar um driver para o adaptador que está usando ou o Windows instalará o driver automaticamente para você. Vá até o Gerenciador de Dispositivos digitando **Device Manager** na busca do Windows e verifique se você consegue ver o adaptador conectado como um dispositivo COM.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **Passo 2:** Se você não conseguir ver o adaptador, será necessário instalar o driver de acordo com o adaptador que você está usando. Em geral, você pode encontrar esses drivers no site do fabricante. Para o adaptador que estamos usando, você pode usar [esta página](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

- **Passo 3:** Abra o Putty no PC, selecione a seção **Terminal** e configure o seguinte

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **Passo 4:** Selecione **Session**, em **Coonection type**, selecione **Serial**, defina o número da porta serial de acordo com o que você vê no **Device Manager**, mantenha a velocidade como padrão (9600) e clique em **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **Passo 4:** Na janela de terminal do reServer Industrial, digite o seguinte para enviar um sinal do reServer Industrial para o PC

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

Agora você verá esta mensagem exibida no Putty

- **Passo 5:** Na janela de terminal do reTerminal Industrial, digite o seguinte para aguardar o recebimento de sinais do PC

```sh
sudo cat /dev/ttyTHS0
```

- **Passo 6:** No Putty, digite qualquer coisa, pressione **ENTER** e isso será exibido na janela de terminal do reServer Industrial

### Visão Geral da Conexão RS485

Aqui você pode usar um adaptador USB para RS422 para testar a interface. Usamos o [Adaptador DTech USB para RS485](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) para nossos testes.

- **Passo 1:** Desligue a placa

- **Passo 2:** Aqui temos 3 opções para configurar as chaves DIP. Ou no modo 010 ou no modo 011 ou no modo 110. As posições das chaves para cada modo são mostradas abaixo

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

- **Passo 3:** Conecte o adaptador USB para RS422 ao conector DB9 usando jumpers conforme mostrado abaixo. Aqui conectamos o adaptador que mencionamos acima

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

- **Passo 4:** Conecte a outra extremidade a uma das portas USB do seu PC

- **Passo 5:** Ligue a placa

### Uso de RS485

- **Passo 1:** Talvez você precise instalar um driver para o adaptador que está usando ou o Windows instalará o driver automaticamente para você. Vá até o Gerenciador de Dispositivos digitando **Device Manager** na busca do Windows e verifique se você consegue ver o adaptador conectado como um dispositivo COM.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **Passo 2:** Se você não conseguir ver o adaptador, será necessário instalar o driver de acordo com o adaptador que você está usando. Em geral, você pode encontrar esses drivers no site do fabricante. Para o adaptador que estamos usando, você pode usar [esta página](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

- **Passo 3:** Abra o Putty no PC, selecione a seção **Terminal** e configure o seguinte

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **Passo 4:** Selecione **Session**, em **Coonection type**, selecione **Serial**, defina o número da porta serial de acordo com o que você vê no **Device Manager**, mantenha a velocidade como padrão (9600) e clique em **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **Passo 4:** Na janela de terminal do reServer Industrial, digite o seguinte para enviar um sinal do reServer Industrial para o PC

```sh
sudo su 
cd /sys/class/gpio 
echo 460 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reServer Industrial" > /dev/ttyTHS0
```

Agora você verá esta mensagem exibida no Putty

- **Passo 5:** Na janela de terminal do reTerminal Industrial, digite o seguinte para aguardar o recebimento de sinais do PC

```sh
sudo su
cd /sys/class/gpio
echo 460 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

- **Passo 6:** No Putty, digite qualquer coisa, pressione **ENTER** e isso será exibido na janela de terminal do reServer Industrial

## USB

O reServer Industrial vem com 3 conectores USB3.2 onboard e possui os seguintes recursos:

- Nos conectores USB empilhados duplos, as portas USB superior e inferior compartilham um CI limitador de corrente, com uma capacidade total de fornecimento de energia de 2,1 A de corrente máxima de saída (individualmente também pode ser 2,1 A). Se ultrapassar 2,1 A, entrará no estado de proteção contra sobrecorrente.
- No conector USB simples ao lado dos conectores USB empilhados duplos, ele possui uma capacidade total de fornecimento de energia de 2,1 A de corrente máxima de saída. Se ultrapassar 2,1 A, entrará no estado de proteção contra sobrecorrente.
- O módulo Orin NX vem com 3 USB3.2, dos quais apenas um é usado no reServer Industrial e convertido em 3 vias. (USB3.1 TYPE-A x2 - J4 e USB3.1 TYPE-A
x1 -J3).
- Suporta apenas USB Host, não o modo Device
- Fornece 5V 2,1A
- Hot-swappable

### Uso

Explicaremos como fazer um benchmark simples em um pendrive USB conectado

- **Passo 1:** Verifique a velocidade de gravação executando o comando abaixo

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **Passo 2:** Verifique a velocidade de leitura executando os comandos abaixo. Certifique-se de executá-los depois de executar o comando acima para a velocidade de gravação.

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

### LED Configurável

Há um LED de cor verde localizado na placa, como mostrado abaixo. Por padrão, ele funciona como o LED que mostra que o dispositivo está funcionando corretamente. No entanto, você também pode programar esse LED para ligar e desligar pelo sistema

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/22.jpg"/></div>

### Uso

- **Passo 1:** Digite os seguintes comandos em uma janela de terminal para acessar o LED de cor verde

```sh
sudo -i
cd /sys/class/gpio
echo 329 > export 
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
echo 329 > unexport
```

## Monitorar o Desempenho do Sistema

Podemos usar o aplicativo **jetson stats** para monitorar as temperaturas dos componentes do sistema e verificar outros detalhes do sistema, tais como

- Ver utilização de CPU, GPU, RAM
- Alterar modos de energia
- Definir para clocks máximos
- Verificar informações do JetPack

- **Passo 1:** Na janela de terminal do reServer Industrial, digite o seguinte

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

- **Passo 4:** Aqui você pode alternar entre as diferentes páginas do aplicativo e explorar todos os recursos!

## TPM

O reServer Industrial vem com uma interface TPM para conectar um módulo TPM externo. Aqui testamos com um módulo TPM2.0 baseado no Infineon SLB9670.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/24.jpg"/></div>

### Visão Geral da Conexão

Conecte o módulo TPM ao conector TPM, como mostrado abaixo

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/27.jpg"/></div>

### Uso

Verifique se o módulo TPM foi carregado corretamente executando os comandos abaixo

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

E você verá a saída a seguir

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

## Desempenho Máximo no reServer Industrial

Se você quiser habilitar o desempenho máximo no reServer Industrial, siga as instruções abaixo

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

Você pode acessar a tabela de GPIO do reServer Industrial para se familiarizar com todos os mapeamentos de pinos.

Execute o seguinte dentro de um terminal para acessá-la

```sh
sudo cat /sys/kernel/debug/gpio
```

E você verá a saída da seguinte forma

```sh
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

## Recursos

(alterar os links)

- [reServer Industrial Datasheet](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)
- [reServer Industrial Reference Guide](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Reference-Guide.pdf)
- [NVIDIA Jetson Devices and Carrier Boards Comparison](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [reServer Industrial 3D File](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## Suporte Técnico

Não hesite em enviar problemas para o nosso [fórum](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
