---
description: ODYSSEY - X86J4105
title: Primeiros Passos com ODYSSEY
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ODYSSEY_Getting_Started
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2022-11-21'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ODYSSEY_Getting_Started/
---

Por favor, verifique a versão mais recente: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105/

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105/
sku: 102110399
--- -->

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ODYSSEY-X86J4105-side.png)

O ODYSSEY - X86J4105 é baseado no Intel Celeron J4105, uma CPU Quad-Core de 1,5GHz que pode chegar até 2,5GHz. Ele possui todos os ótimos recursos que um computador padrão precisa, incluindo 8GB de RAM LPDDR4, armazenamento eMMC de 64GB (opcional), Wi-Fi/BLE integrado, portas Ethernet Gigabit duplas, entrada e saída de áudio, portas USB, HDMI, conectores SATA, PCIe, etc.

## Principais Recursos

- Intel® Celeron® J4105, Quad-Core 1,5-2,5GHz
- Frequência Dual-Band 2,5GHz/5GHz WiFi/ Bluetooth 5.0
- Intel® UHD Graphics 600
- Ethernet Gigabit dupla
- Coprocessador Arduino integrado ATSAMD21 ARM® Cortex®-M0+
- Compatível com Raspberry Pi de 40 pinos
- 2 x M.2 PCIe (chave B e chave M)
- Pré-instalado com Windows 10 Enterprise
- Compatível com o Ecossistema Grove

<p style={{}}><a href="https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Especificações de Hardware

| Components       | ODYSSEY - X86J4105                                                                                                                                      |
|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Processor        | Intel® Celeron® J4105 (Frequency: 1.5 - 2.5GHz)                                                                                                    |
| Coprocessor      | Microchip® ATSAMD21G18 32-Bit ARM® Cortex® M0+                                                                                                        |
| Graphics         | Intel® UHD Graphics 600 (Frequency: 250 – 750MHz)                                                                                                     |
| Memory           | LPDDR4 8GB                                                                                                                                              |
| Storage          | 64GB eMMC V5.1                                                                                                                                         |
| Wireless         | Wi-Fi 802.11 a/b/g/n/ac @ 2.4/5 GHz HT160 & Bluetooth® 5.0                                                                                          |
| Networking       | Intel® I211AT PCIe Gigabit LAN                                                                                                                          |
| Audio            | Microphone + headphone Combo Connector                                                                                                                 |
| Headers          | 28-pin header from SAMD21G18 & 40-pin header compatible with Raspberry Pi                                                                             |
| USB              | USB 2.0 Type-A x2, USB 3.1 Type-A x1, USB 3.1 Type-C x1                                                                                           |
| Video Interfaces | HDMI2.0a: Up to 4096x2160 @ 60Hz 24bpp / DP1.2a: Up to 4096x2160 @60Hz 24bpp                                                                                                                                                                 |
| Expansion Slots  | M.2(Key B, 2242/2280): SATA III, USB2.0, UIM; M.2 (Key M, 2242/2280): PCIe 2.0 ×4; Micro SD card Socket; SIM Card Socket; SATA III           |
| RTC              | JST 1.0 CR2032 3V                                                                                                                                      |
| TPM              | Built-in TPM (2.0)                                                                                                                                  |
| Power Connector           |DC Jack 5.5/2.1mm or Type-C PD                                                                 |
|Power Supply (for bare board)| <div >DC Jack Input: Min:12V @ 300mA - 1.2A, Max:19V @ 200mA - 0.7A <br />Type-C Input: Min: 15V @ 0.27A, Max:15V @ 0.93A </div>
|
| Dimensions       | 110x110mm                                                                                                                                               |
| Certifications   | FCC, CE                                                                                                                                                 |

!!!Note
        Se você estiver usando discos rígidos de 3,5 polegadas com o ODYSSEY – X86J4105, certifique-se de usar uma fonte de alimentação DC de 12V@2A ou fonte de alimentação Type-C de 15V@2A.

!!!Note
        Você pode alimentar o X86 usando um power bank, mas precisa garantir que ele seja compatível com o protocolo USB PD e conectá-lo via USB C. Além disso, você pode alternar perfeitamente entre a alimentação por USB C e por DC sem problema algum.

## Visão Geral de Hardware

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-08-n.png)

## Diagrama de Pinagem

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-Pinout.png)

## Início Rápido com ODYSSEY - X86J4105

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Connected.png)

### Hardware Necessário

1. ODYSSEY - X86J4105

2. Adaptador de energia (fornecido)

3. Monitor externo

4. Cabo HDMI

5. Teclado e Mouse

### Conectando Armazenamento Externo

Para a versão com armazenamento EMMC de 64 GB do ODYSSEY - X86J4105, você pode pular esta etapa. No entanto, se precisar de mais armazenamento para suas necessidades, sinta-se à vontade para seguir esta etapa.

Existem 4 métodos para adicionar armazenamento ao ODYSSEY - X86J4105, mas apenas 3 métodos suportam a instalação do sistema operacional (M.2 SATA, M.2 PCIE e SATA), e o slot para cartão Micro SD só pode ser usado como armazenamento externo.

- **Método 1 - Conector M.2 PCIE**

- **Método 2 - Conector M.2 SATA**

- **Método 3 - Conector SATA**

- **Método 4 - Slot para Cartão Micro SD**

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Storage.png)

### Instalando o Sistema Operacional

O ODYSSEY - X86J4105 suporta tanto o sistema operacional Windows quanto Linux.

- Para a versão sem EMMC, conecte o armazenamento externo seguindo as etapas anteriores e instale o sistema operacional desejado por meio de um pendrive USB inicializável.

- Para a versão com EMMC, o Windows 10 Enterprise vem pré-instalado.

#### Etapa 1

Conecte o pendrive USB inicializável a uma das portas USB do ODYSSEY - X86J4105.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/USB.png)

**Nota:** visite Creating Bootable USB and Installing OS para mais informações sobre como criar um pendrive USB inicializável.

#### Etapa 2

Pressione o botão liga/desliga e continue pressionando a tecla **F7** no teclado até que a tela do Gerenciador de Boot apareça.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/F7.jpg)

#### Etapa 3

Selecione o pendrive USB conectado como a primeira unidade de boot e pressione Enter.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/boot.png)

#### Etapa 4

Siga as instruções da instalação para concluir a instalação do sistema operacional.

**Nota:** Para acessar a configuração da BIOS, mantenha pressionada a tecla **DEL** ao iniciar.

### Conectando as Antenas

Conecte duas antenas nos dois soquetes da placa.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/WiFi.png)

Nota: Uma antena é para Wi-Fi e Bluetooth, e a outra é para uma forte conectividade 5G.

### Adicionando Conectividade Celular 4G

Para conectividade celular 4G, insira um cartão SIM padrão no slot de cartão SIM da placa.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Sim.png)

#### Inserir um Módulo PCIE 4G

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/4g.png)

**Nota:** Este módulo é indispensável se você quiser usar o cartão SIM conectado.

### Conectando ao Display

Existem 2 métodos para exibição:

#### Método 1 - Porta HDMI

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/hdmi.png)

#### Método 2 - DP pela Porta USB-C

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/typec.png)

### Conectando Teclado e Mouse

Conecte o Teclado e o Mouse pelas portas USB

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/keyboard.png)

## Ligando o Dispositivo

Existem duas maneiras de ligar o ODYSSEY - X86J4105:

### Método 1

A maneira mais simples é usar o adaptador de energia 12V/2A incluído no pacote e conectá-lo ao conector DC do ODYSSEY - X86J4105.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/power.png)

### Método 2

Você também pode alimentar o ODYSSEY - X86J4105 através da porta USB-C com entrada de 12V. Além disso, se o seu monitor suportar USB-PD, você poderá alimentar e exibir o ODYSSEY - X86J4105 usando apenas 1 cabo!

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/typec.png)

## Estatísticas de Desempenho

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/CPU.png)

### Conectividade Wi-Fi

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Stats.png)

### Conectividade Bluetooth

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Bluetooth.png)

## Operando como Computador

- Navegar e assistir vídeos no YouTube

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/YouTube%20-%20Google%20Chrome%202019-12-04%2017-05-19.2019-12-05%2009_33_09.gif)

- Jogando Google T-Rex!

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/T-Rex%20Run!%20-%20Chrome%20Dinosaur%20Game%20-%20Google%20Chrome%202019-12-04%2017-01-42.2019-12-05%2009_38_40.gif)

## Usando o Arduino Core (ATSAMD21G18) no Windows

O ODYSSEY - X86J4105 é construído com Arduino Core(ATSAMD21G18), o que fornece mais funcionalidades à placa, e para usá-lo, basta baixar o [Arduino IDE](https://www.arduino.cc/en/main/software) e instalar a versão para Windows.

1. Clique em `File`->`Preferences`->`Additional Boards Manager URL:` e copie o seguinte link para ele `https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json`.

2. Clique em `Tools`->`Board:`->`Boards Manager...`, e o Boards Manager aparecerá. Procure e instale a biblioteca da placa **`Seeeduino Zero`**.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ArduinoBoard.png)

3. Selecione a Porta e a Placa corretas antes de fazer o upload.

- `Port` -> `COMxx(Seeeduno Zero)`

- `Board` -> `Seeeduino Zero`

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ArduinoPort.png)

Fique à vontade para explorar sua criatividade com o ODYSSEY - X86J4105!

## Usando o Arduino Core (ATSAMD21G18) no Linux OS

Se você instalou o Linux OS, baixe a versão para Linux do [Arduino IDE](https://www.arduino.cc/en/main/software) e instale o IDE da seguinte forma:

### Instalando o Arduino IDE

1. Abra o terminal e vá até Downloads

```sh
cd ~/Downloads
```

2. Use o comando tar para descompactar o arquivo baixado

```sh
tar -xvf arduino -1.8.10-linux64.tar.xz
```

3. Mova o arquivo para opt

```sh
sudo mv arduino-1.8.10 /opt
```

4. Instale o Arduino IDE e crie um atalho na Área de Trabalho

```sh
cd /opt/arduino-1.8.10/ && chmod +x install.sh && ./install.sh
```

5. Conceda permissões ao Arduino para fazer upload

```sh
cd /opt/arduino-1.8.10 && ./arduino-linux-setup.sh
```

### Instalando bibliotecas de placas

1. Clique em `File`->`Preferences`->`Additional Boards Manager URL:` e copie o seguinte link para ele `https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json`.

2. Clique em `Tools`->`Board:`->`Boards Manager...`, e o Boards Manager aparecerá. Procure e instale a biblioteca da placa **`Seeeduino Zero`**.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/LinuxBoard.png)

3. Selecione a Porta e a Placa corretas antes de fazer o upload.

- `Port` -> `ttyACM0(Seeeduno Zero)`

- `Board` -> `Seeeduino Zero`

## FAQs

### Como acessar a configuração da BIOS

Pressione o Botão de Energia e continue pressionando a tecla DEL até ver a Tela de Configuração da BIOS.

### Arduino IDE não reconhece o microcontrolador onboard

Adicione um fio jumper entre o **Pino RST** e o **Pino GND** no conector de 4 pinos (à esquerda dos 28 pinos do SAMD21) para resetar o AMSAMDG21.

### Não consigo conectar Wi-Fi e Bluetooth

Verifique as configurações da BIOS e ative Wi-Fi e Bluetooth na BIOS

### ODYSSEY - X86J4105 não liga

Certifique-se de usar o adaptador de energia 12V/2A fornecido na caixa e verifique a conexão.

### Diferentes estados do botão de Energia do ODYSSEY - X86J4105

Ele tem o mesmo estado de botão de energia que outros computadores:

- `Short Press(While it's off)` -> `Turn on`

- `Short Press(While it's on)` -> `Sleep`

- `Long Press(While it's on)` -> `Force shutdown`

### O ventilador interno é controlável

Atualmente o ventilador é controlado pela BIOS e não pelo usuário. A velocidade do ventilador é definida de acordo com a temperatura da CPU. Verifique `Chipset` -> `FAN Contorl` na tela de configuração da BIOS para mais informações.

### Como atualizar a BIOS

Para as instruções de atualização da BIOS, consulte a seção Installing OS.

### Como configurar o ODYSSEY - X86J4105 para ligar automaticamente quando a energia for conectada

Isso também precisa ser configurado na BIOS. Entre nas configurações da BIOS pressionando a tecla DEL. Navegue até **Chipset** -> **Restore on AC Power Loss** e altere as configurações para **Last State**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Auto-power.png" /></div>

### O ventilador não está ligando

O ventilador do Odyssey é controlado pelo controlador embarcado (EC), cuja função é inicializar o dispositivo antes do sistema ser iniciado. A temperatura na BIOS é detectada pelo EC e o sensor de temperatura fica próximo ao processador Intel, que não possui pino de sensor. Em outras palavras, a temperatura não é o valor direto da CPU, podendo haver um erro de 5 graus centígrados. O valor de temperatura que você vê no sistema é retornado internamente pela CPU, a temperatura na tela da BIOS é retornada pelo EC, o ventilador liga ou desliga de acordo com o valor do EC.

- O valor detectado pelo EC (tela da BIOS) e a tabela de velocidade do ventilador são assim:

**Estado de ventilador desativado**: parado

**Estado de ventilador normal**: menos de 40°C–parado, 45-50°C–50%, 50-60℃–60%, acima de 60℃–80%

**Estado de ventilador positivo**: menos de 40°C–parado, 45-50°C–70%, 50-60℃–80%, acima de 60℃–100%

### Pinout do ventilador

Alguns de vocês podem precisar conhecer o pinout do ventilador PWM de 5V para poder fazer DIY/substituir pelos seus próprios ventiladores. O Odyssey possui um pino PWM de 5V para o ventilador com um conector menor do que o conector de pino de 5V usual. Você pode precisar substituir o conector para encaixar.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/x86-fan.png" /></div>

### Reinstalando o Windows original

As versões com eMMC do ODYSSEY-X86 terão o Windows 10 pré-instalado no dispositivo. Se você instalar outro sistema operacional e quiser voltar ao Windows 10 original, verifique aqui:

- [**Imagem original do Windows 10**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Ant-image/SD-JX-CJ41G-M-101-H.zip)

  - Esta imagem suporta **Auto Flash**. Basta baixar a imagem acima, descompactar os arquivos e colocá-los na **raiz de um drive USB**.

  - Conecte o drive USB ao ODYSSEY-X86 e inicialize a partir do drive USB. Isso irá fazer automaticamente o flash da Imagem original do Windows 10 de volta ao eMMC.

### O Odyssey tem TPM?

O Odyssey tem FTPM integrado ao processador.

### A placa Odyssey possui Boot Guard para Secure Boot?

Sim, você pode habilitar a opção "Security Boot" na BIOS. Quando isso estiver habilitado, a BIOS desativará a inicialização a partir de dispositivos não autenticados.

### Por que o GPIO ainda funciona depois que o Odyssey é desligado?

Para configurar isso, você precisa [atualizar para a BIOS mais recente](https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-Updating-Firmware/) que fornecemos. Na BIOS mais recente, você pode alterar de habilitar para desabilitar aqui para desligar tanto o GPIO quanto o ODYSSEY.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105/OdysseyFAQ1.png)

## Recursos

- **[ZIP]** [Modelo 3D do ODYSSEY-X86J4105](http://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-3D-Model.zip)

- **[PDF]** [Modelo 2D do ODYSSEY-X86J4105](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-2D.pdf)

- **[DXF]** [Modelo 2D do ODYSSEY-X86J4105](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-2D.dxf)

- **[PDF]** [Atmel-SAMD21-datasheet](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/Atmel-SAMD21-datasheet.pdf)

- **[PDF]** [Manual do Usuário do ODYSSEY-X86](https://files.seeedstudio.com/products/102110399/Documents/ODYSSEY-X86%20User-Manual-v1.1.pdf)

- **[ZIP]** [Pacote de Drivers do ODYSSEY-X86 para Windows 10](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-WIndows-Drivers.zip)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
