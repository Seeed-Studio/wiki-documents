---
description: Introdução ao reTerminal
title: Introdução ao reTerminal
keywords:
  - Edge
  - reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal
sku: 110070048,102110638,103060001,E2025081502,E2025081503
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2022-11-30'
updatedAt: '2026-02-20'
url: https://wiki.seeedstudio.com/pt-br/reTerminal/
---
# Introdução ao reTerminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" alt="pir" width="600" height="auto"/></p>

Apresentando o reTerminal, um novo membro da nossa família reThings. Este dispositivo de Interface Homem-Máquina (HMI) preparado para o futuro pode trabalhar de forma fácil e eficiente com sistemas de IoT e nuvem para desbloquear infinitos cenários na borda.

O reTerminal é alimentado por um Raspberry Pi Compute Module 4 (CM4), que é uma CPU Quad-Core Cortex-A72 rodando a 1,5 GHz e uma tela multitoque capacitiva IPS de 5 polegadas com resolução de 1280 x 720. Ele possui memória RAM suficiente (4 GB) para realizar multitarefas e também possui armazenamento eMMC suficiente (32 GB) para instalar um sistema operacional, permitindo tempos de inicialização rápidos e uma experiência geral fluida. Ele possui conectividade sem fio com Wi‑Fi de banda dupla 2,4 GHz/5 GHz e Bluetooth 5.0 BLE.

O reTerminal é composto por uma interface de expansão de alta velocidade e I/O rico para maior expansibilidade. Este dispositivo possui recursos de segurança, como um coprocessador criptográfico com armazenamento seguro de chaves baseado em hardware. Ele também possui módulos integrados, como um acelerômetro, sensor de luz e um RTC (Relógio de Tempo Real). O reTerminal possui uma porta Ethernet Gigabit para conexões de rede mais rápidas e também possui duas portas USB 2.0 Tipo A. O conector de 40 pinos no reTerminal o abre para uma ampla gama de aplicações de IoT.


O reTerminal é enviado com Raspberry Pi OS pronto para uso. Portanto, tudo o que você precisa fazer é conectá-lo à alimentação e começar a construir seus projetos maker, criações de IoT e automação residencial até experimentos DIY off‑grid

| Data de lançamento | SO pré-instalado | Firmware STM32 pré-instalado | Versão da placa | Informações adicionais |
|---|---|---|---|---|
| 15/06/2021 | 2021-06-02-Raspbian(modified)-32-bit | V1.0 | v1.3 | Inicial |
| 03/08/2021 | 2021-06-02-Raspbian(modified)-32-bit | V1.1 | v1.4 |  |
| 03/09/2021 | 2021-06-02-Raspbian(modified)-32-bit | V1.6 | v1.6 | Alterar chip de expansão de IO de MCP23008-E para PCA9554, <br />Alterar microchip de criptografia de ATECC608A-SSHDA-B para ATECC608A-TNGTLSS-G [Mais informações](#../reTerminal-FAQ#q13-como-verificar-se-o-chip-de-criptografia-é-atecc608a-sshda-b-ou-atecc608a-tngtlss-g) |
| 02/11/2021 | 2021-09-14-Raspbian(modified)-32-bit | V1.8 | v1.6 |  |



<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos

- Design modular integrado com alta estabilidade e expansibilidade
- Alimentado por Raspberry Pi Computer Module 4 com 4 GB de RAM e 32 GB de eMMC
- Tela multitoque capacitiva IPS de 5 polegadas em 1280 x 720 e 293 PPI
- Conectividade sem fio com Wi‑Fi de banda dupla 2,4 GHz/5 GHz e Bluetooth 5.0 BLE
- Interface de expansão de alta velocidade e I/O rico para maior expansibilidade
- Coprocessador criptográfico com armazenamento seguro de chaves baseado em hardware
- Módulos integrados, como acelerômetro, sensor de luz e RTC
- Porta Ethernet Gigabit e duas portas USB 2.0 Tipo A
- Conector de 40 pinos para aplicações de IoT

## Especificações

<table style={{tableLayout: 'fixed', width: 743}}>
  <colgroup>
    <col style={{width: 146}} />
    <col style={{width: 198}} />
    <col style={{width: 399}} />
  </colgroup>
  <thead>
    <tr>
      <th colSpan={2}>Especificação</th>
      <th>Detalhes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Plataforma</td>
      <td>Processador</td>
      <td>Broadcom BCM2711 quad-core Cortex-A72 (ARM v8)</td>
    </tr>
    <tr>
      <td>Frequência</td>
      <td>SoC de 64 bits @ 1,5 GHz</td>
    </tr>
    <tr>
      <td rowSpan={2}>Memória</td>
      <td>Capacidade</td>
      <td>4 GB</td>
    </tr>
    <tr>
      <td>Tecnologia</td>
      <td>LPDDR4 com ECC on-die</td>
    </tr>
    <tr>
      <td>eMMC</td>
      <td>Capacidade</td>
      <td>32 GB</td>
    </tr>
    <tr>
      <td rowSpan={2}>Sem fio</td>
      <td>Wi‑Fi</td>
      <td>2,4 GHz e 5,0 GHz IEEE 802.11b/g/n/ac</td>
    </tr>
    <tr>
      <td>Bluetooth</td>
      <td>Bluetooth 5.0, BLE</td>
    </tr>
    <tr>
      <td rowSpan={2}>Tela</td>
      <td>LCD</td>
      <td>LCD de 5 polegadas 720x1280</td>
    </tr>
    <tr>
      <td>Painel de toque</td>
      <td>Painel de toque capacitivo (suporta multitoque)</td>
    </tr>
    <tr>
      <td rowSpan={5}>Vídeo</td>
      <td>HDMI</td>
      <td>1 x saída Micro HDMI (até 4Kp60 suportado)</td>
    </tr>
    <tr>
      <td>CSI</td>
      <td>1 x interface de câmera MIPI CSI de 2 vias</td>
    </tr>
    <tr>
      <td rowSpan={3}>Multimídia</td>
      <td>H.265 (decodificação 4Kp60)</td>
    </tr>
    <tr>
      <td>H.264 (decodificação 1080p60, codificação 1080p30)</td>
    </tr>
    <tr>
      <td>Gráficos OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td rowSpan={10}>Módulos integrados</td>
      <td rowSpan={2}>Relógio de tempo real</td>
      <td>NXP Semiconductors PCF8563T</td>
    </tr>
    <tr>
      <td>Baixa corrente de backup; típico 0,25 μA em VDD = 3,0 V e temperatura = 25 ℃</td>
    </tr>
    <tr>
      <td rowSpan={2}>Acelerômetro</td>
      <td>STMicroelectronics LIS3DHTR</td>
    </tr>
    <tr>
      <td>16 bits, ±2g/±4g/±8g/±16g escala completa selecionável dinamicamente</td>
    </tr>
    <tr>
      <td rowSpan={2}>Criptografia</td>
      <td>Microchip ATECC608A</td>
    </tr>
    <tr>
      <td>Armazenamento seguro de chaves baseado em hardware, assinatura assimétrica, verificação, acordo de chaves</td>
    </tr>
    <tr>
      <td rowSpan={2}>Sensor de luz</td>
      <td>Levelek LTR-303ALS-01</td>
    </tr>
    <tr>
      <td>Sensor de luz digital</td>
    </tr>
    <tr>
      <td>Expansão de IO<br />interna</td>
      <td>Microchip MCP23008-E/ PCA9554</td>
    </tr>
    <tr>
      <td>Buzzer</td>
      <td>≥85 dB @10 cm 2700±300 Hz</td>
    </tr>
    <tr>
      <td rowSpan={12}>I/O externo</td>
      <td rowSpan={8}>GPIOs</td>
      <td>Até 5 × UART</td>
    </tr>
    <tr>
      <td>Até 5 × I2C</td>
    </tr>
    <tr>
      <td>Até 5 × SPI</td>
    </tr>
    <tr>
      <td>1 × interface SDIO</td>
    </tr>
    <tr>
      <td>1 × DPI (Display RGB paralelo)</td>
    </tr>
    <tr>
      <td>1 × PCM</td>
    </tr>
    <tr>
      <td>1 × canal PWM</td>
    </tr>
    <tr>
      <td>Até 3 × saídas GPCLK</td>
    </tr>
    <tr>
      <td rowSpan={4}>Interface de expansão<br />vertical</td>
      <td>1 × Host PCIe de 1 via, Gen 2 (5 Gbps)</td>
    </tr>
    <tr>
      <td>1 × porta USB 2.0 (alta velocidade)</td>
    </tr>
    <tr>
      <td>26 x GPIOs</td>
    </tr>
    <tr>
      <td>POE</td>
    </tr>
    <tr>
      <td rowSpan={2}>Alimentação</td>
      <td>Tensão</td>
      <td>5 V CC</td>
    </tr>
    <tr>
      <td>Corrente</td>
      <td>3 A (mínimo)</td>
    </tr>
    <tr>
      <td>Temperatura</td>
      <td>Temperatura de operação</td>
      <td>0 - 70 °C (para a tela LCD: 0 - 60 °C)</td>
    </tr>
    <tr>
      <td rowSpan={2}>Mecânico</td>
      <td>Dimensões</td>
      <td>140 mm x 95 mm x 21 mm</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td>285 g</td>
    </tr>
  </tbody>
</table>

## Visão geral do hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Fix/reTerminal.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Fix/reTerminal_1.png" alt="pir" width="1000" height="auto"/></p>

## Diagrama em blocos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Fix/reTerminal_2.png" alt="pir" width="1000" height="auto"/></p>

## Diagrama de pinagem

**Nota:** Certifique-se de manter o reTerminal na orientação ilustrada abaixo. Aqui o LCD está voltado para o lado direito e a parte traseira está voltada para o lado esquerdo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/pinout-v2.jpg" alt="pir" width="1000" height="auto"/></p>

:::note
Preste muita atenção à orientação do reTerminal no diagrama acima. O LCD e os botões integrados estão no lado direito, enquanto a parte traseira do reTerminal está no lado esquerdo. Além disso, todo o dispositivo está virado de cabeça para baixo.
:::

## Início rápido com o reTerminal

Se você quiser começar a usar o reTerminal da maneira mais rápida e fácil, pode seguir o guia abaixo.

### Hardware necessário

Você precisa preparar o seguinte hardware antes de começar a usar o reTerminal

- reTerminal
- Cabo Ethernet ou conexão Wi‑Fi
- Adaptador de energia (5 V/3 A)
- Cabo USB Tipo C

### Configuração de software

#### Fazer login no Raspberry Pi OS

O reTerminal vem com Raspberry Pi OS pré-instalado de fábrica. Portanto, podemos ligar o reTerminal e fazer login no Raspberry Pi OS imediatamente!

- **Passo 1.** Conecte uma extremidade de um cabo USB Tipo C ao reTerminal e a outra extremidade a um adaptador de energia (5 V/4 A)

- **Passo 2.** Quando o Raspberry Pi OS for inicializado, pressione **OK** na janela de **Warning**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-1-new-1.png" alt="pir" width="800" height="auto"/></p>

- **Passo 3.** Na janela **Welcome to Raspberry Pi**, pressione **Next** para começar com a configuração inicial

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-2-new.png" alt="pir" width="400" height="auto"/></p>

- **Passo 4.** Escolha seu **país, idioma, fuso horário** e pressione **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-3-new.png" alt="pir" width="400" height="auto"/></p>

- **Passo 5.** Para alterar a senha, primeiro clique no ícone **Raspberry Pi**, navegue até `Universal Access > Onboard` para abrir o teclado na tela

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-4-new.png" alt="pir" width="400" height="auto"/></p>

- **Passo 6.** Digite a senha desejada e clique em **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-5-new.png" alt="pir" width="400" height="auto"/></p>

**Nota:** Se você quiser manter a senha padrão como **raspberry**, pode deixar isto em branco e clicar em **Next**

- **Passo 7.** Clique em **Next** para o seguinte

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-6-new.png" alt="pir" width="400" height="auto"/></p>

- **Passo 8.** Se você quiser se conectar a uma rede WiFi, pode escolher uma rede, conectar-se a ela e pressionar **Next**. No entanto, se quiser configurar isso mais tarde, você pode pressionar **Skip**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-7-new.png" alt="pir" width="400" height="auto"/></p>

- **Passo 9.** **Esta etapa é muito importante.** Você deve se certificar de pressionar **Skip** para pular a atualização do software. No entanto, se quiser atualizar o software, você pode seguir [este wiki](https://wiki.seeedstudio.com/pt-br/reTerminal-FAQ/#q3-how-to-upgrade-raspberry-pi-os-and-the-installed-packages)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-8-new.png" alt="pir" width="400" height="auto"/></p>

- **Passo 10.** Finalmente pressione **Done** para finalizar a configuração

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-9-new.png" alt="pir" width="400" height="auto"/></p>

**Nota:** O botão no canto superior esquerdo pode ser usado para ligar o reTerminal depois de desligá-lo usando o software

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/power-button-press.jpg" alt="pir" width="650" height="auto"/></p>

**Dica:** Se você quiser experimentar o Raspberry Pi OS em uma tela maior, pode conectar um monitor à porta micro-HDMI do reTerminal e também conectar um teclado e um mouse às portas USB do reTerminal.

## Introdução ao reTerminal (Avançado)

Se você quiser instalar o Raspberry Pi OS por conta própria, instalar outros sistemas operacionais como Ubuntu 64 bits, fazer login no reTerminal via SSH por WiFi, SSH por Ethernet e adaptador USB para serial, você pode seguir o guia abaixo!

### Hardware Necessário

Você precisa preparar o seguinte hardware

- reTerminal
- Computador (Windows/Mac/Linux)
- Cartão micro-SD de 8GB (ou mais) (opcional)
- Leitor de cartão micro-SD (opcional)
- Conversor USB para serial (opcional)
- Cabo Ethernet (opcional)
- Conexão Wi-Fi (opcional)
- Adaptador de energia (5V/3A)
- Cabo USB Tipo-C

### <span id="jump2">Gravar Raspberry Pi OS/ Ubuntu 64 bits ou outro sistema operacional na eMMC</span>

Podemos gravar **Raspberry Pi OS/ Ubuntu 64 bits ou outro sistema operacional** no **armazenamento eMMC** do CM4 no reTerminal. Depois que os drivers necessários forem instalados, você só precisa conectar a porta USB Tipo-C do reTerminal ao seu PC, e ele será exibido como uma unidade externa. Comece removendo a tampa traseira do reTerminal.

> **Nota:** A imagem de sistema mais recente empacotada pela Seeed, incluindo os drivers apropriados: [pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)


- **Passo 1.** Remova as 4 tampas de borracha e abra a tampa traseira do reTerminal desaparafusando os 4 parafusos abaixo delas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width="450" height="auto"/></p>

- **Passo 2.** Remova os 2 parafusos para desmontar o dissipador de calor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/remove-screw-heatsink-2.jpg" alt="pir" width="600" height="auto"/></p>

- **Passo 3.** Abaixe o **boot mode switch** de acordo com o diagrama abaixo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/boot-switch-2.jpg" alt="pir" width="600" height="auto"/></p>

Agora vamos passar para a configuração de software. Siga as etapas de acordo com o sistema operacional desejado

##### Para Windows

- **Passo 1.** Baixe o **rpiboot setup installer** clicando em **[este link](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** para instalar os drivers necessários e a ferramenta de boot

- **Passo 2.** Conecte o reTerminal ao PC via cabo USB Tipo-C

O Windows agora encontrará o hardware e instalará os drivers necessários

- **Passo 3.** Procure pela ferramenta **rpiboot** que instalamos antes e abra-a

- **Passo 4.** Abra o **explorador de arquivos** e você verá a eMMC do Compute Module 4 exibida como um **dispositivo de armazenamento em massa USB**

- **Passo 5.** Baixe o software **Raspberry Pi Imager** visitando **[este link](https://www.raspberrypi.org/software/)**

- **Passo 6.** Abra o software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Passo 7.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar o WiFi, definir configurações de localidade** e muito mais

- **Passo 8.** Clique em **CHOOSE OS** e selecione o sistema operacional de sua preferência

:::note
Se você estiver tentando instalar o Raspbian OS, realizamos testes e descobrimos que as versões *32 bits e 64 bits* do **Bullseye** funcionam bem com o reTerminal sem encontrar nenhum [**problema de tela preta**](https://wiki.seeedstudio.com/pt-br/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal). Além disso, também testamos a nova versão **Bookworm** *64 bits*, e ela funciona sem problemas no reTerminal.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Você pode selecionar outros sistemas operacionais como **Ubuntu 64 bits** navegando até **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Passo 9.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

- **Passo 10.** Finalmente, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

- **Passo 11.** Retorne o **Boot Mode switch** à posição original e monte novamente a carcaça do reTerminal

Agora você pode pular para **[aqui](#fazer-login-no-raspberry-pi-os-ubuntu-os-ou-outro-sistema-operacional-usando-ssh-por-wi-fi-ethernet)**

##### Para MAC

:::caution
**Você precisa instalar o [homebrew](https://brew.sh/) antes de prosseguir com as etapas a seguir.**
Abra um terminal e digite ```brew -V``` para verificar se você configurou corretamente o ambiente do homebrew; você deverá ver a versão do ambiente homebrew que instalou.
:::

- **Passo 1.** Clone o repositório **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Passo 2.** Instale o **libusb**

```sh
brew install libusb
```

- **Passo 3.** Instale o **pkg-config**

```sh
brew install pkg-config
```

- **Passo 4.** Compile usando make

```sh
make
```

- **Passo 5.** Execute o binário

```sh
sudo ./rpiboot
```

- **Passo 6.** Conecte o reTerminal ao seu computador Mac via cabo USB Tipo-C

- **Passo 7.** Baixe e instale o aplicativo **Raspberry Pi Imager** visitando [este link](https://www.raspberrypi.org/software/)

- **Passo 8.** Abra o aplicativo **Raspberry Pi Imager**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Passo 9.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar o WiFi, definir configurações de localidade** e muito mais

- **Passo 10.** Clique em **CHOOSE OS** e selecione o sistema operacional de sua preferência

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Você pode selecionar sistemas operacionais como **Ubuntu 64 bits** navegando até **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Passo 11.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

- **Passo 12.** Finalmente, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

- **Passo 13.** Retorne o **Boot Mode switch** à posição original e monte novamente a carcaça do reTerminal

Agora você pode pular para **[aqui](#fazer-login-no-raspberry-pi-os-ubuntu-os-ou-outro-sistema-operacional-usando-ssh-por-wi-fi-ethernet)**

##### Para Linux

Usaremos o Git para obter o código-fonte do **rpiboot**, portanto, certifique-se de que o Git esteja instalado

- **Passo 1.** Abra uma janela do **Terminal** e digite o seguinte para atualizar a **lista de pacotes**

```sh
sudo apt-get update
```

- **Passo 2.** Instale o **Git** com o seguinte comando

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **Passo 3.** O Git pode gerar um erro se a data não estiver configurada corretamente. Digite o seguinte para corrigir isso

```sh
sudo date MMDDhhmm
```

**NOTA:** Onde **MM** é o mês, **DD** é o dia, e **hh** e **mm** são, respectivamente, horas e minutos.

- **Passo 4.** Clone o repositório da ferramenta **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Passo 5.** Compile e instale a ferramenta usbboot

```sh
make
```

- **Passo 6.** Execute a ferramenta usbboot e ela aguardará uma conexão

```sh
sudo ./rpiboot
```

- **Passo 7.** Conecte o reTerminal ao PC via cabo USB Type-C

- **Passo 8.** Baixe o software **Raspberry Pi Imager** acessando [este link](https://www.raspberrypi.org/software/)

- **Passo 9.** Abra o software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Passo 10.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar o Wi‑Fi, definir configurações de localidade** e muito mais

- **Passo 11.** Clique em **CHOOSE OS** e selecione o seu sistema operacional preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Você pode selecionar sistemas como **64-bit Ubuntu** navegando até **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Passo 12.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

- **Passo 13.** Por fim, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

- **Passo 14.** Coloque o **Boot Mode switch** de volta à posição original e monte novamente a carcaça do reTerminal

### Faça login no Raspberry Pi OS/ Ubuntu OS ou outro OS usando SSH via Wi‑Fi/ Ethernet

Se você quiser fazer login no Raspberry Pi OS usando **SSH via Wi‑Fi/ Ethernet**, pode seguir os passos abaixo. Primeiro configure o Wi‑Fi/Ethernet no reTerminal e depois faça SSH usando Windows/Mac/Linux.

**Nota:** Se você configurou o Wi‑Fi e habilitou o SSH usando o Raspberry Pi Imager, pode pular os passos 1 - 4

- **Passo 1.** Se você tiver uma **conexão Wi‑Fi**, clique no **ícone de Wi‑Fi** no canto superior direito da área de trabalho do Raspberry Pi OS, selecione sua rede Wi‑Fi e insira a senha usando o teclado virtual na tela

**Nota:** A localização da configuração de Wi‑Fi pode ser diferente em outros sistemas operacionais

- **Passo 2.** Se você não tiver uma **conexão Wi‑Fi**, pode conectar um cabo Ethernet do seu roteador à porta Ethernet do reTerminal

**Nota:** Certifique-se de que o reTerminal e o seu computador estejam conectados à mesma rede

- **Passo 3.** Toque no ícone do Raspberry Pi no canto superior esquerdo e navegue até `Preferences > Raspberry Pi Configuration` e clique na aba **Interfaces**

- **Passo 4.** Selecione **Enable** que está ao lado de **SSH** e clique em **OK**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ssh-select-2.jpg" alt="pir" width="1000" height="auto"/></p>

Agora vamos configurar o software no computador. Siga de acordo com o seu sistema operacional

##### Para Windows

- **Passo 1.** Abra o **Command Prompt** e digite o seguinte

```sh
ssh pi@raspberrypi.local
```

- **Passo 2.** Digite **yes** quando for solicitado

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **Passo 3.** Insira a senha da seguinte forma

```sh
raspberry
```

- **Passo 4.** Se você tiver feito login com sucesso no Raspberry Pi OS, verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### Para Mac/Linux

- **Passo 1.** Abra o **Terminal** no computador e digite o seguinte

```sh
ssh pi@raspberrypi.local
```

- **Passo 2.** Digite **yes** para a seguinte mensagem

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Passo 3.** Quando for solicitada a senha, digite o seguinte

```sh
raspberry
```

- **Passo 4.** Se você tiver feito login com sucesso no Raspberry Pi OS, verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### <span id="jump1">Instalar drivers do reTerminal após gravar um novo Raspberry Pi OS/ Ubuntu OS ou outro OS</span>

O reTerminal vem com os drivers necessários pré-instalados de fábrica, então você não precisa instalar drivers adicionais. No entanto, se você gravar um novo sistema operacional por conta própria, precisará instalar os drivers necessários separadamente. O hardware que precisa de drivers inclui o **LCD de 5 polegadas, painel de toque, acelerômetro, sensor de luz, LEDs de usuário, botões de usuário, RTC, buzzer, co-processador criptográfico**.

:::note
Para **OS 32bit** você precisará adicionar o seguinte passo antes de executar `sudo ./scripts/reTerminal.sh`. Após concluir a instalação, lembre-se de **reiniciar** o reTerminal para que as alterações entrem em vigor.

```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
sudo reboot
```

Enquanto isso, se você estiver usando o mais recente Raspberry Pi OS oficial de 32 bits, o novo kernel dele é incompatível com este produto, o que resultará em falhas na atualização dos drivers e tela em branco. Se você realmente precisar de uma imagem de OS de 32 bits para desenvolvimento, recomendamos usar uma versão de imagem de 32 bits mais antiga.
:::

- **Passo 1.** Clone o seguinte repositório

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **Passo 2.** Entre no repositório

```sh
cd seeed-linux-dtoverlays
```

:::note
Para **OS 32bit** você precisará adicionar o seguinte passo antes de executar `sudo ./scripts/reTerminal.sh`. Após concluir a instalação, lembre-se de **reiniciar** o reTerminal para que as alterações entrem em vigor.
```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
sudo reboot
```
:::

- **Passo 3.** Digite o seguinte para instalar os drivers

```sh
sudo ./scripts/reTerminal.sh
```

:::note

Digite o seguinte se você não quiser atualizar o kernel ao mesmo tempo:

```sh
sudo ./scripts/reTerminal.sh --keep-kernel
```
:::

Você verá a seguinte saída se tiver instalado os drivers com sucesso

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p>


- **Passo 4.** Reinicie o reTerminal

```sh
sudo reboot
```

### Gravar Raspberry Pi OS com drivers da seeed na eMMC

- **Passo 1.** Como nos passos normais de gravação de imagem, primeiro você precisa selecionar o modelo do dispositivo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/01.png" alt="pir" width="700" height="auto"/></p>

- **Passo 2.** Ao escolher um sistema operacional, você precisa baixar o sistema de que precisa, descompactá-lo na pasta local e então selecioná-lo.

- **Baixe o Raspberry Pi OS acessando os links abaixo**

| Versão                     | Descrição      | TAG                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| [2024-03-14-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-arm64.zip)              | 64bit Debian12(bookworm) Linux versão 6.6.20 | lastest |
| [2024-03-14-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-armhf.zip) |  32bit Debian12(bookworm) Linux versão 6.6.20           | lastest |
| [2022-07-21-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)               | 64bit Debian11(Bullseye) Linux versão 5.15.32-v7+  | release |
| [2022-07-21-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)                    | 32bit Debian11(Bullseye) Linux versão 5.15.32-v7+  | release |

<br />
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/02.png" alt="pir" width="700" height="auto"/></p>

Selecione o OS que você baixou, ele deve terminar em **.img**.
<br />
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/03.png" alt="pir" width="700" height="auto"/></p>

:::caution

Se você instalar a versão mais recente bookworm da imagem, não vá configurar clicando no botão de opção avançada. Não entre nessa interface para nenhuma configuração inicial.
Caso contrário, podem ocorrer situações inesperadas de erro de driver!!!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/notice.png" alt="pir" width="450" height="auto"/></p>

Se você acidentalmente fizer uma configuração avançada e obtiver um erro de inversão de tela, será necessário [reinstalar o driver](#jump1) para corrigir o problema.

:::

- **Passo 3.** Para outras operações, consulte os [passos anteriores](#jump2).
Após a instalação da imagem, você não precisa instalar o driver para usá-la. (A imagem que fornecemos inclui o arquivo de driver)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/04.png" alt="pir" width="700" height="auto"/></p>

### Guia de desmontagem do reTerminal

Confira o vídeo abaixo sobre como desmontar o reTerminal:

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/hAfdb603emw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## FAQ

Para Perguntas Frequentes, [clique aqui](https://wiki.seeedstudio.com/pt-br/reTerminal-FAQ) para visitar o wiki de FAQs sobre o uso do reTerminal

## Recursos

- **[STP]** [Modelo 3D do reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/resources/reTerminal-3d-model.stp)

- **[PDF]** [Datasheet do Raspberry Pi Compute Module 4](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[Web Page]** [Documentação oficial do Raspberry Pi](https://www.raspberrypi.org/documentation/)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
