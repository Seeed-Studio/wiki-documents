---
description: Codesys para Edge Box RPi 200
title: Codesys para Edge Box RPi 200
keywords:
  - Edge
  - Aplicação reTerminal
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edgebox-rpi-200-codesys
sku: 102991558, 102991559, 102110771, 102110772, E23010424, 114110227, 114993117
last_update:
  date: 2/1/2023
  author: Peter Pan
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Edgebox-rpi-200-codesys/
---

<!-- ---
name: Edgebox-RPI-200
category: 
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 102110771
tags:
--- -->

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

A série EdgeBox-RPi-200 são controladores de computação de borda industriais tudo em um baseados em Raspberry Pi, combinando múltiplas finalidades industriais. Projetado como hardware industrial robusto e de alta escalabilidade, montado com ricos recursos de IO e suportado pelo excelente ecossistema de software industrial Raspberry Pi, é uma escolha ideal para soluções de automação inteligente e Internet Industrial das Coisas (IIoT).

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

### Características

- Controlador Industrial Tudo em Um:

  - Mais do que apenas um PLC, PAC, ele também pode implementar funções de gateway IIoT, servidor OPC UA e PC industrial.

- Processadores Poderosos e Flexíveis:

  - Alimentado pelo Raspberry Pi Compute Module 4 (CM4), equipado com até 4GB de RAM e 16GB de eMMC, executando operação em tempo real e multiprocesso.

- Ricos Recursos de IO e Interfaces Industriais Instaladas:

  - Suporta uma ampla gama de protocolos e padrões de barramento industrial

- Múltiplos Recursos de Comunicação:

  - Possui conectividade sem fio completa e uma Ethernet Gigabit RJ45, suportada por múltiplos serviços em nuvem

- Design Robusto de Hardware de Grau Industrial:

  - Gerenciamento térmico integrado com gabinete dissipador de calor totalmente em alumínio, suportando montagem em trilho DIN de 35 mm e em parede

- Ótimo Ecossistema de Software Industrial Raspberry Pi:

  - Suporta uma variedade de softwares e plataformas industriais, incluindo Codesys, Node Red, MQTT, OPC UA, Ignition etc.

## O que é Codesys?

Codesys é um ambiente integrado de desenvolvimento de software padrão industrial IEC 61131-3 para programar controladores e automações industriais.

Neste wiki utilizamos o software Codesys Development System V3 como IDE para configurar e programar o software para rodar no Edgebox-RPI-200, que é um controlador PLC baseado em Raspberry Pi Computer Module 4, portanto o CODESYS Control for Raspberry Pi MC runtime será instalado e configurado com o Edgebox-RPI-200.

## Pré-requisitos

- 1 x computador host Windows PC
- 1 x [Edgebox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html)
- Software [CODESYS Development System V3](https://store.codesys.com/engineering/codesys.html?___store=en)
- Licença e instalador [CODESYS Control for Raspberry Pi MC SL](https://store.codesys.com/en/codesys-control-for-raspberry-pi-mc-sl.html)

Visite a [página de download do CODESYS Development System V3](https://store.codesys.com/engineering/codesys.html?___store=en) para baixar o instalador do CODESYS Development System V3 de acordo com a configuração do seu computador host Windows PC e siga o assistente de instalação para instalar o programa.

Visite [CODESYS Control for Raspberry Pi MC SL](https://store.codesys.com/en/codesys-control-for-raspberry-pi-mc-sl.html) para adquirir a licença, ou adquira [CODESYS Control for Raspberry Pi SL](https://store.codesys.com/en/codesys-control-for-raspberry-pi-sl.html) de acordo com suas preferências, e faça o download do pacote instalador CODESYS para Raspberry Pi.

## Primeiros passos

### Preparação do Projeto

:::note
Certifique-se de que o software CODESYS Development System V3 esteja instalado e aberto no seu computador host.
:::

- **PASSO 1:** **Instalar o pacote CODESYS Control for Raspberry PI no CODESYS Development System**

- **PASSO 1-1:** Por favor **abra** o **Codesys Installer** **clicando** em "**"TOOLS> CODESYS Installer"**"

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer.png"/></div>

- **PASSO 1-2:** Feche o **software CODESYS Development System V3** conforme solicitado durante a instalação do pacote, caso contrário você receberá o aviso abaixo:

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/quit_codesys.png"/></div>

- **PASSO 1-3:** Clique em **"browse"** e selecione **"CODESYS Control for Raspberry Pi MC SL package"** e depois **"install"**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_1.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_2.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_3.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_4.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_5.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_6.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_7.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_8.png"/></div>

### Projeto para Alternar o LED de USUÁRIO com Edgebox-RPI-200

:::note
Certifique-se de que o Edgebox-RPI-200 esteja ligado e conectado à mesma rede que o seu computador host, você precisará obter o endereço IP do Edgebox-RPI-200 na tabela de concessões DHCP do roteador ao qual ele está conectado.
:::

- **PASSO 1:** **Configuração do Projeto**
- **PASSO 1-1:** Abra o software CODESYS Development System V3 e selecione **"File>New Project..."**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project.png"/></div>

- **PASSO 1-2:** Na janela **"New Project"**, em **"Categories"** selecione **"projects"**, em **"Templates"** selecione **"Standard project"**, **digite** o **nome do seu projeto** e clique em **"OK"**.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_1.png"/></div>

- **PASSO 1-3:** Na janela Standard Project, selecione **"CODESYS Control for Raspberry Pi MC SL (CODESYS GmBH)"** para device e, para PLC_PRG, selecione **"Ladder Logic Diagram (LD)"**, depois clique em **"OK"**.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_2.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_3.png"/></div>

Você deverá ver uma tela semelhante após configurar um novo projeto para Raspberry Pi:

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_4.png"/></div>

- **PASSO 2:** Configurar Edgebox-RPI-200

- **PASSO 2-1:** Selecione **"Tools>Update Raspberry Pi"**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi.png"/></div>

- **PASSO 2-2:** No painel lateral do Raspberry Pi, preencha as seguintes informações e em seguida clique no botão **"Install"** para instalar o **"CODESYS Control for Raspberry Pi MC runtime"** no Edgebox-RPI-200.

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_1.png"/></div>

- Credenciais de login
  - Username: pi
  - Password: raspberry
- Selecionar Destino:
  - IP Address: 192.168.1.40
- Pacote CODESYS Runtime
  - Version: 4.6.0.0(raspberry, armhf)

- **PASSO 2-3:** Na janela pop-up **"Configure Runtime"** selecione o **"runtime mode"** de acordo com suas preferências, neste caso escolhemos o padrão **"Multicore"** e clicamos em **"OK"**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_2.png"/></div>

- **PASSO 2-4:** Para confirmar que o **"CODESYS Control for Raspberry Pi MC runtime"** está em execução no **"Edgebox-RPI-200"**, clique em **"Start"** na seção **"Runtime"** e verifique se a janela **"Messages"** indica **"Standard output: codesyscontrol already running"**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_3.png"/></div>

- **PASSO 3:** **Configurar Dispositivo GPIO:**

- **PASSO 3-1:** Adicionar GPIO na aba Devices, primeiro selecione a aba **"Devices"** na barra lateral esquerda, depois **clique com o botão direito** no Device e selecione **"Add Device"** na lista suspensa

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device.png"/></div>

- **PASSO 3-2:** Na janela **"Add Device"**, clique em **"+"** em Miscellaneous e selecione a opção **"GPIO"** e depois clique em **"Add Device"** para confirmar.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_1.png"/></div>

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_2.png"/></div>

Agora você deverá ver um novo dispositivo GPIO listado na aba de dispositivos.
<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_3.png"/></div>

- **PASSO 3-3:** Adicionar dispositivo GPIO de 1 bit, clique com o botão direito no novo dispositivo **"GPIO"** adicionado no passo acima e selecione **"Add Device..."** na lista suspensa.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_1.png"/></div>

- **PASSO 3-4:** Na janela **"Add Device"**, selecione a opção **"GPIOS 1 bit"** e clique em **"Add Device"** para confirmar.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_2.png"/></div>

- **ETAPA 3-5:** Para configurar o GPIO, dê um clique duplo no novo dispositivo adicionado na etapa acima **"GPIOS_1_bit(GPIOs 1 bit)"** para abrir a janela principal de configuração.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_3.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_4.png"/></div>

- **ETAPA 3-6:** Na janela **"GPIOs_1_bit"** **Main configuration**, selecione a primeira aba **"GPIOSysfsModuleParameters"** para configurar e atribuir a **Direção do GPIO**, o **Número do Pino** e o **estado atual do PIN**. Neste caso, vamos alternar o LED2 no Edgebox-RPI-200, que é o pino GPIO 21 de acordo com o [datasheet](#). Portanto, a configuração do pino deve ser igual à abaixo.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_1.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_2.png"/></div>

- **ETAPA 3-7:** Fazendo o mapeamento de E/S do GPIO, selecione a segunda aba **"GPIOSysfsModule I/O Mapping"** e, em seguida, atribua um nome de variável ao GPIO, neste caso eu o chamo de **"LED_in"** para **"GPIO 21 input"**, e **"LED_out"** para **"GPIO 21 Output"**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_3.png"/></div>

:::note
Por favor, exclua o dispositivo padrão **"GPIOs_A_B(GPIOs A/B)"**, caso contrário ele irá interferir com o novo dispositivo GPIO adicionado.
:::

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/delete_gpio_AB.png"/></div>

- **ETAPA 4:** **Conectar ao Edgebox-RPI-200 no modo Online Config para testar e alternar o LED2 no Edgebox-RPI-200**

- **ETAPA 4-1:** Primeiro precisamos configurar o dispositivo dando um clique duplo em **"Deivce (CODESYS Control for Raspberry Pi MC SL)"**, isso abrirá a janela de **configuração do dispositivo**.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device.png"/></div>

- **ETAPA 4-2:** Na aba de configurações **"Communication"** da janela de **"device configuration"**, clique na lista suspensa **"Device"** e selecione **"Options>Manage Favorite Devices..."**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_1.png"/></div>

- **ETAPA 4-3:** Na janela **"Manage Favorite Devices"**, clique em **"+ Add"**, na janela **"Add favorite"**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_2.png"/></div>

- **ETAPA 4-4:** por favor insira **o endereço IP do Edgebox-RPI-200** na caixa "**Enter name, device address or IP address"**.

> No meu caso, o endereço IP do Edgebox-RPI-200 é **"192.168.1.40"**, e então clique em **"OK"** para confirmar.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_3.png"/></div>

- **ETAPA 4-5:** Na janela **"Manage Favorite Devices"**, selecione o **novo dispositivo de endereço IP adicionado** para o campo Identifier e então clique em **"OK"** para confirmar.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_4.png"/></div>

- **ETAPA 4-6:** Na aba de configurações **"Communication"** da janela de **"device configuration"**, por favor **"clique"** na lista suspensa e selecione o novo dispositivo adicionado **"IP Address"**, você deverá ver algumas informações sobre o dispositivo conectado abaixo.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_5.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_6.png"/></div>

- **ETAPA 4-7:** Clique no botão **"Online Config Mode..."** na **"toolbar"**, o ícone do **"Online Config Mode..."** deverá mudar de verde para vermelho, o que significa que o IDE CODESYS Development System V3 está conectado ao Edgebox-RPI-200 e você pode testar e interagir diretamente a partir do IDE com o dispositivo de hardware conectado.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/online_config.png"/></div>

- **ETAPA 4-8:** Agora dê um clique duplo em **"GPIOs_1_bit(GPIOs 1 bit)"** na barra lateral do dispositivo para abrir a janela de configuração.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/online_config_1.png"/></div>

- **ETAPA 4-9:**  Selecione a segunda aba **"GPIOSysfsModule I/O Mapping"** na janela principal de configuração; você deverá ver que o **"Current Value"** está **"False"** tanto para LED_in quanto para LED_out. Agora você pode alternar o LED2 no Edgebox-RPI-200 dando um clique duplo em **"False"** na seção **"Current Value"** para alternar **"True/False"** para **"LED_out"**, onde o LED2 deverá ligar/desligar de acordo com o valor True/False.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_gpio.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_gpio_1.png"/></div>

Você pode verificar o LED2 no seu Edgebox-RPI-200, ele deverá responder ao valor alternado:

<div align="center"><img width ={200} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_led.jpg"/></div>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe proporcionar diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
