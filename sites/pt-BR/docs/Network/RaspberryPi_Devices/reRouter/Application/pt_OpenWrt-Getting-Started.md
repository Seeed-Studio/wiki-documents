---
description: Introdução ao OpenWrt
title: Primeiros Passos com OpenWRT
keywords:
  - Sorftware OpenWrt
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /OpenWrt-Getting-Started
sku: 102110497,110110090,110110110
last_update:
  date: 1/13/2023
  author: jianjing Huang
createdAt: '2023-01-13'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/OpenWrt-Getting-Started/
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png" alt="pir" width="1000" height="auto"/></p>

OpenWrt é um sistema operacional Linux de código aberto que roda em dispositivos embarcados/ roteadores. Ele oferece mais recursos, desempenho e segurança do que um roteador tradicional. Possui um sistema de arquivos totalmente gravável e inclui um sistema de gerenciamento de pacotes. Você pode usar esses pacotes para adequar suas aplicações de várias maneiras.

Ao usar o OpenWrt você pode ter vários recursos, tais como:

- Aumentar o desempenho geral da rede quando vários dispositivos estão conectados
- Compartilhar arquivos entre dispositivos por meio de uma unidade de armazenamento externa conectada diretamente ao roteador
- Aumentar a segurança da rede
- Executar um cliente BitTorrent a partir do roteador
- Conectar uma impressora diretamente ao roteador para criar uma impressora em rede
- Limitar o uso de largura de banda de um determinado dispositivo na rede
- Gerenciamento ativo de fila
- Monitoramento de rede em tempo real
- Criar DNS Dinâmico
- Configurar um cliente ou servidor VPN

Agora vamos nos aprofundar no uso do OpenWrt na Dual Gigabit Ethernet Carrier Board para Raspberry Pi CM4 e ODYSSEY - X86J4125.

:::note
Este guia também funciona para o ODYSSEY - X86J4105.
:::

## Hardware Necessário

Você precisa preparar o seguinte hardware antes de começar com o OpenWRT na Dual Gigabit Ethernet Carrier Board para Raspberry Pi CM4 e ODYSSEY - X86J4125

- 1 x [Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)
- 1 x [Power adapter (5V/3A) with USB Type-C cable](https://www.seeedstudio.com/Wall-Adapter-Power-Supply-5VDC-3A-Type-C-p-4103.html)
- 1 x [ODYSSEY - X86J4125 with the included power adapter](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)
- 2 x cabos Ethernet

## Configuração Inicial

### Dual Gigabit Ethernet Carrier Board para Raspberry Pi CM4

Primeiro vamos explicar como instalar e configurar o OpenWrt na Dual Gigabit Ethernet Carrier Board para Raspberry Pi CM4

#### Gravar a Imagem do OpenWrt

Agora precisamos gravar a imagem do OpenWrt no armazenamento eMMC da placa para que ela possa ser executada no Raspberry Pi Compute Module 4. Depois que os drivers necessários estiverem instalados, você só precisa conectar a porta USB Type-C do CM4 ao seu PC, e ela aparecerá como uma unidade externa. Siga as etapas abaixo de acordo com o seu sistema operacional.

##### Para Windows

- **Passo 1.** Baixe a **imagem mais recente do OpenWrt** compilada pela Seeed para esta placa a partir [daqui](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd)

:::note
Escolha o arquivo **openwrt-bcm27xx-bcm2711-rpi-4-ext4-factory.img.gz**
:::

- **Passo 2.** Baixe e execute [este instalador](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) para instalar os drivers necessários e a ferramenta de boot

- **Passo 3.** Procure pela ferramenta **rpiboot** que instalamos e abra-a

- **Passo 4.** Conecte um fio jumper entre os pinos **Boot** e **GND** como segue para ativar o modo BOOT

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/connection.png" alt="pir" width="600" height="auto"/></p>

- **Passo 5.** Conecte a Carrier Board ao PC via cabo USB Type-C

O Windows agora encontrará o hardware e instalará os drivers necessários

- **Passo 6.** Abra o **explorador de arquivos** e você verá o eMMC do Computer Module 4 mostrado como um **dispositivo de armazenamento em massa USB**

- **Passo 7.** Baixe o software **balenaEtcher** visitando [este link](https://www.balena.io/etcher) de acordo com o seu sistema operacional

- **Passo 8.** Execute o **balenaEtcher** como **administrador**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **Passo 9.** Clique em **Flash from file** e aponte para o arquivo de imagem do OpenWrt que você baixou anteriormente

- **Passo 10.** Clique em **Select target** e selecione a unidade eMMC conectada

- **Passo 11.** Por fim, clique em **Flash!**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

##### Para Mac/Linux

- **Passo 1.** Baixe a **imagem mais recente do OpenWrt** compilada pela Seeed para esta placa a partir [daqui](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd)

:::note
Escolha o arquivo **openwrt-bcm27xx-bcm2711-rpi-4-ext4-factory.img.gz**
:::

- **Passo 2.** Abra uma janela do **Terminal** e digite o seguinte para atualizar a **lista de pacotes**

```sh
sudo apt update
```

- **Passo 3.** Instale o **Git** com o seguinte comando

```sh
sudo apt install git
```

- **Passo 4.** O Git pode gerar um erro se a data não estiver configurada corretamente. Digite o seguinte para corrigir isso

```sh
sudo date MMDDhhmm
```

:::note
Onde **MM** é o mês, **DD** é o dia e **hh** e **mm** são horas e minutos, respectivamente.
:::

- **Passo 5.** Faça o clone do repositório da ferramenta **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Passo 6.** Digite o seguinte para instalar o **libusb**

```sh
sudo apt install libusb-1.0-0-dev
```

:::note
para usuários de macOS, siga abaixo:
```
brew install libusb pkg-config
```
:::

- **Passo 7.** Compile e instale a ferramenta usbboot

```sh
make
```

- **Passo 8.** Execute a ferramenta usbboot e ela aguardará por uma conexão

```sh
sudo ./rpiboot
```

- **Passo 9.** Conecte um fio jumper entre os pinos **Boot** e **GND** como segue para ativar o modo de programação

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/connection.png" alt="pir" width="600" height="auto"/></p>

- **Passo 10.** Conecte a Carrier Board ao PC via cabo USB Type-C

- **Passo 11.** Baixe o software **balenaEtcher** visitando [este link](https://www.balena.io/etcher) de acordo com o seu sistema operacional

- **Passo 12.** Execute o **balenaEtcher** como **administrador**

<p style={{textAlign: 'center'}}>><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **Passo 13.** Clique em **Flash from file** e aponte para o arquivo de imagem do OpenWrt que você baixou anteriormente

- **Passo 14.** Clique em **Select target** e selecione a unidade eMMC conectada

- **Passo 15.** Por fim, clique em **Flash!**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

#### Conexão das Portas Dual Gigabit Ethernet

Depois que o OpenWrt terminar de ser gravado na Dual Gigabit Ethernet Carrier Board para Raspberry Pi CM4, você pode conectar cabos Ethernet à placa como segue:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/cm4-ports-2.png" alt="pir" width="600" height="auto"/></p>

A imagem do OpenWrt já incluiu as configurações de rede necessárias para que as portas Gigabit duplas funcionem imediatamente, de forma que você não precise configurá-las por conta própria. No entanto, aqui está uma explicação de como as 2 portas estão configuradas.

Uma porta é configurada como **interface LAN** e a outra como **interface WAN**. A interface WAN é aquela que pode ser conectada à internet e está configurada como **cliente DHCP**. Por outro lado, a interface LAN é aquela que pode ser conectada aos dispositivos clientes e está configurada como **servidor DHCP**.

Aqui a interface LAN é configurada para ter um endereço IP estático de **192.168.2.1**. Porém, se você conectar este roteador OpenWrt a outro roteador com gateway padrão IP de 192.168.2.1, talvez queira alterar o endereço IP na interface LAN, caso contrário o OpenWrt terá conflito de IP. Siga o [FAQ](https://wiki.seeedstudio.com/pt-br/OpenWrt-Getting-Started/#q1-what-if-i-connect-the-openwrt-router-to-my-exisiting-router-which-has-a-default-gateway-ip-of-19216821) abaixo para saber mais!

### ODYSSEY - X86J4125

Em seguida, vamos explicar como instalar e configurar o OpenWrt no ODYSSEY - X86J4125

#### Gravar a Imagem do OpenWrt

Agora precisamos instalar o OpenWrt no eMMC/ HDD/ SSD do ODYSSEY - X86J4125 para que ele possa ser executado na placa. Para isso, primeiro precisamos criar um USB bootável com a imagem do OpenWrt. Siga as etapas abaixo

- **Passo 1.** Baixe a **imagem mais recente do OpenWrt** compilada pela Seeed para esta placa a partir [daqui](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd)

:::note
Escolha o arquivo **openwrt-x86-64-generic-ext4-combined-efi.img.gz**
:::

- **Passo 2.** Insira uma unidade USB no PC

- **Passo 3.** Baixe o software **balenaEtcher** visitando [este link](https://www.balena.io/etcher) de acordo com o seu sistema operacional

- **Passo 4.** Execute o **balenaEtcher** como **administrador**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **Passo 5.** Clique em **Flash from file** e aponte para o arquivo de imagem do OpenWrt que você baixou anteriormente

- **Passo 6.** Clique em **Select target** e selecione a unidade USB conectada

- **Passo 7.** Por fim, clique em **Flash!**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

#### Conexão das Portas Dual Gigabit Ethernet

Depois que o OpenWrt terminar de ser gravado na unidade USB, você pode conectar cabos Ethernet à placa como segue:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/odyssey-ports-2.png" alt="pir" width="700" height="auto"/></p>

A imagem do OpenWrt já incluiu as configurações de rede necessárias para que as portas Gigabit duplas funcionem imediatamente, de forma que você não precise configurá-las por conta própria. No entanto, aqui está uma explicação de como as 2 portas estão configuradas.

Uma porta é configurada como **interface LAN** e a outra como **interface WAN**. A interface WAN é aquela que pode ser conectada à internet e está configurada como **cliente DHCP**. Por outro lado, a interface LAN é aquela que pode ser conectada aos dispositivos clientes e está configurada como **servidor DHCP**.

Aqui a interface LAN está configurada para ter um endereço IP estático de **192.168.2.1**. Contudo, se você conectar este roteador OpenWrt a outro roteador com gateway padrão IP de 192.168.2.1, talvez você queira mudar o endereço IP na interface LAN, caso contrário o OpenWrt terá conflito de IP. Siga o **FAQ** abaixo para saber mais!

#### Instalar OpenWrt

Agora que criamos anteriormente uma unidade USB inicializável, vamos prosseguir para instalar o OpenWrt no ODYSSEY - X86J4125

- **Passo 1.** Insira a unidade USB inicializável na placa ODYSSEY e conecte a placa a um monitor e a um teclado

- **Passo 2.** Ligue a placa e continue pressionando **F7** para entrar na tela do gerenciador de boot

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" alt="pir" width="500" height="auto"/></p>

- **Passo 3.** Selecione o USB inicializável e pressione ENTER

Agora o OpenWrt começará a rodar em modo live a partir da unidade USB.

- **Passo 4.** Ligue a placa, abra um navegador web e digite **192.168.2.1** na barra de pesquisa

- **Passo 5.** Quando o portal OpenWrt abrir, navegue até **System > FileTransfer**

- **Passo 6.** Clique em **Choose File** em **Upload** e selecione a imagem OpenWrt que baixamos antes

:::note
Certifique-se de que o arquivo **.gz** seja extraído para o arquivo **.img** antes
:::

- **Passo 7.** Clique em **Upload**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/OpenWrt-image-upload.png" alt="pir" width="1000" height="auto"/></p>

Agora a imagem está salva no diretório **/tmp/upload/**

- **Passo 8.** Navegue até **System > TTYD Terminal** e faça login com **root** como nome de usuário

- **Passo 9.** Digite **lsblk** para listar os dispositivos de armazenamento conectados

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/lsblk.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 10.** Digite o seguinte para gravar a imagem OpenWrt no dispositivo de armazenamento conectado (eMMC/ HDD/ SSD)

```sh
dd if=/tmp/upload/openwrt-x86-64-generic-ext4-combined-efi.img of=/dev/sda 
```

:::note
**/dev/sda** corresponde ao dispositivo de armazenamento conectado
:::

- **Passo 11.** Quando terminar de gravar no dispositivo de armazenamento, reinicie a placa, remova a unidade USB e ela começará a iniciar o OpenWrt a partir do dispositivo de armazenamento conectado.

## Executar OpenWrt

Agora que terminamos de configurar o software OpenWrt e as portas Ethernet Gigabit duplas, vamos passar a executar o OpenWrt na Dual Gigabit Ethernet Carrier Board para Raspberry Pi CM4 e ODYSSEY - X86J4125. Esta seção não será dividida de acordo com as 2 placas porque ambas terão a mesma funcionalidade OpenWrt juntamente com a mesma interface web.

Depois que os cabos ethernet forem conectados como antes e a imagem OpenWrt for gravada, prossiga com os passos abaixo

- **Passo 1.** Ligue a placa

- **Passo 2.** Abra um navegador web e digite **192.168.2.1**

Você verá aqui a interface web Luci do OpenWrt. A imagem OpenWrt compilada pela Seeed inclui muitos pacotes prontos para uso. Assim, você pode usar esses pacotes para realizar muitas aplicações!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/OpenWrt-UI.png" alt="pir" width="1000" height="auto"/></p>

## Executar R23.5 OpenWrt

Atualizamos a versão mais recente do OpenWrt para o Rerouter, a versão R23.5. Se você quiser usar a versão mais recente do OpenWrt, pode escolher a imagem abaixo.

[R23.5 OpenWrt Images](https://firmware-selector.openwrt.org/?version=23.05.2&target=bcm27xx%2Fbcm2711&id=rpi-4)

Depois que os cabos ethernet forem conectados como antes e a imagem OpenWrt for gravada, prossiga com os passos abaixo

- **Passo 1.** Ligue a placa

- **Passo 2.** Abra um navegador web e digite **192.168.1.1**

```text
account: root
password: password
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/R24.7OP-UI.png" alt="pir" width="1000" height="auto"/></p>

## Teste de Velocidade de Rede

Finalmente vamos passar a testar as velocidades de rede na Dual Gigabit Ethernet Carrier Board para Raspberry Pi CM4 e ODYSSEY - X86J4125 com OpenWrt instalado.

### Placa Dual Gigabit como Servidor e ODYSSEY como Cliente

Primeiro usaremos a Dual Gigabit Ethernet Carrier Board como servidor e o ODYSSEY - X86J4125 como cliente para o teste de rede

:::note
Certifique-se de mudar o endereço IP da interface LAN na placa ODYSSEY para **192.168.3.1** [seguindo isto](https://wiki.seeedstudio.com/pt-br/OpenWrt-Getting-Started/#q1-what-if-i-connect-the-openwrt-router-to-my-exisiting-router-which-has-a-default-gateway-ip-of-19216821)
:::

- **Passo 1.** Conecte as placas da seguinte forma

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/speed-cm4-server.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 2.** Abra um navegador web e faça login em ambas as placas e entre no terminal da seguinte forma:

**Dual Gigabit Ethernet Carrier Board**

- Digite **192.168.2.1** na caixa de pesquisa do navegador web

- Navegue até **System > TTYD Terminal** e faça login com **root** como nome de usuário

**ODYSSEY - X86J4125/ X86J4105**

- Digite **192.168.3.1** na caixa de pesquisa do navegador web

- Navegue até **System > TTYD Terminal** e faça login com **root** como nome de usuário

:::note
Certifique-se de que ambos os dispositivos não estejam na mesma faixa de IP na interface LAN
:::

- **Passo 3.** Instale a ferramenta de teste de desempenho de rede **iperf3** em ambos os dispositivos

```sh
opkg update
opkg install iperf3
```

- **Passo 4.** Na janela **TTYD Terminal** da Dual Gigabit Ethernet Carrier Board, digite o seguinte para iniciar o iperf3 como servidor

```sh
iperf3 -s
```

- **Passo 5.** Na janela **TTYD Terminal** do ODYSSEY - X86J4125, digite o seguinte para iniciar o iperf3 como cliente e conectar ao servidor criado antes

```sh
iperf3 -c 192.168.2.1
```

:::note
Aqui está escrito o endereço IP do servidor da Placa Dual Gigabit
:::

Agora você verá os resultados do teste de velocidade de rede da seguinte forma

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/TTYD-CM4-server.png
" alt="pir" width="1000" height="auto"/></p>

:::note
Aqui você pode ver que a velocidade está próxima de 1Gbps
:::

### ODYSSEY como Servidor e Placa Dual Gigabit como Cliente

Agora usaremos o ODYSSEY - X86J4125 como servidor e a Dual Gigabit Ethernet Carrier Board como cliente para o teste de rede

- **Passo 1.** Conecte as placas da seguinte forma

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/speed-odyssey-server.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 2.** Na janela **TTYD Terminal** do ODYSSEY - X86J4125, digite o seguinte para iniciar o iperf3 como servidor

```sh
iperf3 -s
```

- **Passo 3.** Na janela **TTYD Terminal** da Dual Gigabit Ethernet Carrier Board, digite o seguinte para iniciar o iperf3 como cliente e conectar ao servidor criado antes

```sh
iperf3 -c 192.168.3.1
```

:::note
Aqui está escrito o endereço IP do servidor ODYSSEY-X86
:::

Agora você verá os resultados do teste de velocidade de rede da seguinte forma

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/TTYD-X86-server.png" alt="pir" width="1000" height="auto"/></p>

:::note
Aqui você pode ver que a velocidade está próxima de 1Gbps
:::

## FAQ

Para obter detalhes, clique [**aqui**](/pt-br/FAQs_For_openWrt)

## Recursos

- **[Web Page]** [Documentação Oficial OpenWrt](https://openwrt.org)

- **[GitHub]** [Seeed OpenWrt](https://github.com/Seeed-Studio/seeed-linux-openwrt)

- **[OneDrive]** [Imagens Seeed OpenWrt](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd)

- **[Download]** [R23.5 OpenWrt Images](https://firmware-selector.openwrt.org/?version=23.05.2&target=bcm27xx%2Fbcm2711&id=rpi-4)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
