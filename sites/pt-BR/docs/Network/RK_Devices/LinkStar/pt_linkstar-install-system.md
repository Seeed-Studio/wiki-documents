---
description: ODYSSEY - X86J4105
title: Instalar Sistema Operacional
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /linkstar-install-system
sku: 102110775,102110777
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/linkstar-install-system/
---

<!-- ---
name: LinkStar-H68K-1432 Router with Wi-Fi 6 & 32GB eMMC, dual-2.5G & dual-1G Ethernet, 4K output, Pre-installed Android 11, Ubuntu & OpenWRT support
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 102110777
tags:
--- -->

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/OVerview.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H68K-1432-p-5501.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O roteador LinkStar-H68K é equipado com o chip quad-core Cortex-A55 RK3568, com 4 interfaces Ethernet para dual-2.5G e dual-1G, juntamente com tecnologia Wi-Fi 6 (opcional), oferecendo alta capacidade de armazenamento e funcionalidade de media player. Neste wiki, mostraremos como instalar o sistema operacional com cartão TF ou eMMC.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar/25.png" /></div>

## Selecione o sistema que você precisa para o LinkStar

O poderoso LinkStar suporta uma ampla gama de sistemas operacionais, como Android, Ubuntu, OpenWRT, Debian e muitos outros. Nesta seção, traremos para você os métodos de instalação de cada sistema.

### Notas e Instruções

O LinkStar possui dois tipos de armazenamento, um é o armazenamento em **cartão TF** e o outro é o armazenamento em **eMMC**. Ambas as memórias estão disponíveis para sistemas de memória flash.

Neste capítulo, podemos usar o cartão TF com um leitor de cartões para gravar o sistema no cartão TF. Devido à velocidade de leitura/gravação e à estabilidade, este método só pode ser usado para gravar o sistema **OpenWRT**.

- [Gravar o OpenWRT no cartão TF](#jump1)

Também podemos gravar o sistema no eMMC que vem com o LinkStar. Este método atualmente suporta todos os sistemas operacionais compatíveis com o LinkStar.

- [Gravar o OpenWRT no eMMC](#jump2)
- [Gravar Android / Ubuntu no eMMC](#jump3)

Quando um cartão TF é inserido no LinkStar, o sistema no cartão TF é aquele que será inicializado quando o sistema for ligado, pois o **TF tem prioridade de boot**.

### <span id="jump1">Gravar o OpenWRT no cartão TF</span>

#### Preparação

- PC com Windows/MacOS
- Cabo de dados USB - C
- Um cartão TF
- Um leitor de cartões
- [balenaEtcher](https://www.balena.io/etcher/) —— Baixe e instale o balenaEtcher, usaremos este software para gravar o sistema em um cartão TF.
- Pacote OpenWRT

Prepare os equipamentos necessários acima; os pacotes de atualização de firmware podem ser baixados clicando no botão de download abaixo.

| Versão | Descrição | Download |
|---------|----------|----------|
|  balenaEtcher  | - | [Download](https://sourceforge.net/projects/linkstar-h68k-os/files/Flash-to-TF-card-tool/) |
|  OpenWRT R22.11.18  | Adiciona suporte ao Docker. | [Download](https://sourceforge.net/projects/linkstar-h68k-os/files/Openwrt/) |

:::caution
Ao usar um cartão TF com o LinkStar, é importante observar que ele pode ser incompatível com alguns **cartões de alta velocidade**. Se você estiver usando um cartão de alta velocidade, poderá encontrar erros de carregamento de dados, erros de boot ou mau funcionamento durante a energização e o carregamento do sistema devido à velocidade do cartão.

A vantagem de usar um cartão TF é que diferentes redes podem ser configuradas com diferentes cartões TF. Também é possível ter vários sistemas - sistemas diferentes podem ser usados substituindo diferentes cartões TF.
:::

#### Procedimento

**Passo 1.** Conectar o TF ao PC

Insira o cartão TF no leitor de cartões preparado e conecte-o ao seu PC.

**Passo 2.** Gravar o sistema em um cartão TF

Abra o balenaEtcher que já foi instalado anteriormente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/11.png" /></div>

Selecione o firmware OpenWRT que você baixou; ele deve terminar em **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/12.png" /></div>

Selecione a unidade na qual você deseja gravar o sistema.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/13.png" /></div>

Clique no botão **Flash** e o software gravará o sistema no seu cartão TF.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/14.png" /></div>

:::caution
Alguns computadores podem exibir um aviso de que o dispositivo USB não foi reconhecido após a gravação do sistema e perguntar se deseja formatá-lo; **não** reformate o cartão, caso contrário o sistema dentro dele será apagado.
:::

**Passo 3.** Inicializar o OpenWRT a partir do cartão TF

Remova o cartão TF do leitor de cartões e insira-o no slot para cartão TF do LinkStar.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/15.png" /></div>

Em seguida, ligue o LinkStar; você pode escolher alimentá-lo via **USB-C-5V** ou via **DC-12V**.

Quando ligado à energia, o botão de energia do LinkStar acenderá em branco. Pressione o botão de energia e o equipamento será ligado e entrará no sistema.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LinkStar/16.png" /></div>

**Passo 4.** Gerenciar o backend do OpenWRT

Use um cabo de rede para se conectar à porta de rede ETH1/ETH2/ETH3 do LinkStar. Em seguida, digite o endereço: `192.168.100.1` no seu navegador para acessar o backend de administração.

:::caution
ETH0 é a porta WAN e as outras portas de rede são portas LAN. Se você quiser gerenciar o OpenWRT do LinkStar via cabo de rede, conecte o cabo de rede a uma porta LAN diferente da ETH0.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar/17.png" /></div>

A conta e a senha iniciais do sistema são as seguintes.

```
account: root
password: password
```

Parabéns, você instalou com sucesso o OpenWRT via cartão TF.

### <span id="jump2">Gravar o OpenWRT no eMMC</span>

#### Preparação

- PC com Windows
- Cabo de dados USB - C
- Pacote OpenWRT
- Pacote Android (Opcional)

Prepare os equipamentos necessários acima; os pacotes de atualização de firmware podem ser baixados clicando no botão de download abaixo.

| Versão | Descrição | Download |
|---------|----------|----------|
| OpenWRT R22.11.18  | Adiciona suporte ao Docker. | [Download](https://sourceforge.net/projects/linkstar-h68k-os/files/Openwrt/) |
| Ferramenta de apagar firmware | - | [Download](https://sourceforge.net/projects/linkstar-h68k-os/files/Erase-tool/) |
| Ferramenta de gravação em eMMC e driver | - | [Download](https://sourceforge.net/projects/linkstar-h68k-os/files/Flash-to-eMMC-tool/) |
|  Android TV R22.11.17 (Opcional)  | Suporte a controle remoto (não disponível para venda no momento) | [Download](https://sourceforge.net/projects/linkstar-h68k-os/files/Android/) |

:::caution
Se você estiver instalando o OpenWRT a partir de outro sistema, será necessário gravar o sistema Android no eMMC antes de poder concluir a instalação do OpenWRT; nesse caso, você poderá precisar baixar o pacote Android.
:::

#### Procedimento

**Passo 1.** Instalar o driver

Vá para a pasta **Rockchip_DriverAssitant_v5.1.1** e dê um clique duplo para abrir o arquivo **DriverInstall.exe** a fim de instalar o driver.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/1.png" /></div>

No software de instalação do driver que for aberto, clique em "驱动安装" (Instalação do Driver).

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/2.png" /></div>

**Passo 2.** Colocar o dispositivo em modo Maskrom

Vá para a pasta **RKDevTool_Release_v2.84** e dê um clique duplo para abrir o arquivo **RKDevTool.exe**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/3.png" /></div>

Neste momento, deve aparecer "No Devices Found" na parte inferior do software.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/4.png" /></div>

Pressione continuamente o botão **Update keyhole** com o pino de ejeção de cartão e não o solte.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/5.png" /></div>

Mantenha as mãos no LinkStar e conecte-o ao seu computador usando um cabo USB-C. Depois disso, você pode soltar o botão.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/6.png" /></div>

Neste ponto, observe o software novamente e ele mudará de "No Devices Found" para "Found One MASKROM Device".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/7.png" /></div>

**Passo 3.** Apagar o firmware

Clique em "Upgrade Firmware", depois clique em "Firmware" e selecione o arquivo **LinkStar-H68K-EraseFlash.img** no diretório de arquivos.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/8.png" /></div>

Após importar o arquivo, clique em "EraseFlash".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/9.png" /></div>

Aguarde a conclusão da operação e clique em "确定" (OK).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/10.png" /></div>

<!-- **Step 4.** Flash Android (Optional)

!!!Note
    If you are installing OpenWRT from another system, please complete this step first, if not, you can skip this one.

Click on "Upgrade Firmware", then click on "Firmware" and select the Android image you want to install, this file ends with **.img**.

<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/LinkStar/8.png"/></div>

After importing the file, click on "Upgrade".

<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/LinkStar/23.png"/></div>

Wait for the prompt to appear that the "Reset Device Success", at which point the system has finished flashing.

<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/LinkStar/24.png"/></div>

Once the system flash is complete, the LInkStar will automatically reboot and once rebooted it will enter the system.

Neste ponto, desligue e corte a alimentação do LinkStar e tente novamente o **step2** para colocar o LinkStar em **modo Maskrom**. -->

**Etapa 4.** Gravar o OpenWRT

:::note
se você seguir as etapas acima, seu LinkStar H68K ainda deve estar no modo MASKROOM, caso contrário, repita e siga novamente as etapas a partir da **Etapa 2**.
:::

Clique em "Download Image" no canto superior esquerdo do software e, em seguida, selecione o arquivo **H68K-Boot-Loader_xxx.bin** para a primeira linha de opção de **Boot**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/18.png" /></div>

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/19.png" /></div>

Em seguida, na segunda linha de opções de **system**, selecione a imagem de sistema para o OpenWRT. Deve ser um arquivo terminando em **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/20.png" /></div>

Em seguida, clique no botão "Run" abaixo.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/21.png" /></div>

Aguarde o aviso "Download image OK", então o sistema terá sido instalado com sucesso na eMMC do LInkStar.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/22.png" /></div>

Quando a gravação do sistema estiver concluída, o LinkStar H68K deverá reiniciar automaticamente e, após reiniciar, entrará no sistema OpenWRT.

**Etapa 5.** Gerenciar o backend do OpenWRT

Use um cabo de rede para se conectar à porta de rede ETH1/ETH2/ETH3 do LinkStar. Depois, insira o endereço: `192.168.100.1` no seu navegador para acessar o painel de administração.

:::caution
ETH0 é a porta WAN e as outras portas de rede são portas LAN. Se você quiser gerenciar o OpenWRT do LinkStar por meio de um cabo de rede, conecte o cabo de rede a uma porta LAN diferente de ETH0.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar/17.png" /></div>

A conta e senha iniciais para o sistema são as seguintes.

```
account: root
password: password
```

Parabéns, você instalou com sucesso o OpenWRT na eMMC.

### <span id="jump3">Gravar Android / Ubuntu na eMMC</span>

#### Preparação

- PC com Windows
- Cabo de dados USB - C
- pacote do sistema.

Tenha os dispositivos e softwares acima preparados; os pacotes de atualização de firmware podem ser baixados clicando no botão de download abaixo.

| Versão | Descrição | Download |
|---------|----------|----------|
| Ferramenta de gravação na eMMC & driver | - | [Download](https://sourceforge.net/projects/linkstar-h68k-os/files/Flash-to-eMMC-tool/) |
|  Android Pad R22.11.17  | Corrige indicador de funcionamento; corrige problema de ausência de som HDMI; altera botão direito do mouse para voltar; altera densidade para 240 | [Download](https://sourceforge.net/projects/linkstar-h68k-os/files/Android/)  |
|  Android TV R22.11.17  | Suporte a controle remoto (não à venda no momento) | [Download](https://sourceforge.net/projects/linkstar-h68k-os/files/Android/)  |
| Ubuntu 20.04 R22.01.15 | Adiciona suporte para wifi AP256, `default Username: linkstar, Password: linkstar, Root Username:root, Root Password:root` | [Download](https://sourceforge.net/projects/linkstar-h68k-os/files/Ubuntu%2020.04/) |

:::note
Devido aos recursos limitados no núcleo de CPU baseado em ARM do Linkstar, o Ubuntu 20.04 é baseado no [Lubuntu](https://lubuntu.me/), que é uma distribuição Linux leve do Ubuntu que usa o ambiente de desktop LXDM ou LXQt.
:::

:::caution
A imagem fornecida aqui não suporta gravação por cartão.
:::

#### Procedimento

O tutorial aqui usa a instalação do **Android TV** como exemplo; as etapas de instalação para outros sistemas são mais ou menos as mesmas, apenas escolha um arquivo de imagem de sistema diferente.

**Etapa 1.** Instalar o driver

Vá para a pasta **Rockchip_DriverAssitant_v5.1.1** e clique duas vezes para abrir o arquivo **DriverInstall.exe** para instalar o driver.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/1.png" /></div>

No software de instalação do driver que for iniciado, clique em "驱动安装" (Instalação do Driver).

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/2.png" /></div>

**Etapa 2.** Colocar o dispositivo em modo Maskrom

Vá para a pasta **RKDevTool_Release_v2.84** e clique duas vezes para abrir o arquivo **RKDevTool.exe**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/3.png" /></div>

Neste momento deve aparecer "No Devices Found" na parte inferior do software.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/4.png" /></div>

Pressione continuamente o botão do **Update keyhole** com o pino de ejeção de cartão e não o solte.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/5.png" /></div>

Mantenha as mãos no LinkStar e conecte-o ao seu computador usando um cabo USB-C. Depois disso você pode soltar o botão.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/6.png" /></div>

Neste momento observe novamente o software e ele mostrará de "No Devices Found" para "Found One MASKROM Device".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/7.png" /></div>

**Etapa 3.** Gravar Firmware

Clique em "Upgrade Firmware", depois clique em "Firmware" e selecione a imagem do sistema que você deseja instalar; este arquivo termina com **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/8.png" /></div>

Após importar o arquivo, clique em "Upgrade".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/23.png" /></div>

Aguarde aparecer o aviso de que o "Reset Device Success"; neste ponto o sistema terminou a gravação.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/24.png" /></div>

Quando a gravação do sistema estiver concluída, o LInkStar reiniciará automaticamente e, após reiniciar, entrará no sistema.

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
