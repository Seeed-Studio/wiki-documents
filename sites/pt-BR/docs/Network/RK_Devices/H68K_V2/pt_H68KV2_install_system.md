---
description: LinkStar-V2 Instalar Sistema Operacional
title: Instalar Sistema Operacional
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /H68KV2_install_system
sku: 102110958
last_update:
  date: 04/18/2024
  author: Parker
createdAt: '2024-04-18'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/H68KV2_install_system/
---

<!-- ---
name: LinkStar-H68K-1432-V2 Router with Wi-Fi 6, 4GB RAM & 32GB eMMC, dual-2.5G & dual-1G Ethernet, 4K output, Pre-installed OpenWRT support Armbian
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 102110958
tags:
--- -->

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/01.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H68K-1432-V2-p-5886.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O roteador LinkStar-H68K-V2 é equipado com o chip RK3568 quad-core Cortex-A55, apresentando 4 interfaces Ethernet para dual-2.5G e dual-1G, juntamente com a tecnologia Wi-Fi 6, além de oferecer alta capacidade de armazenamento e funcionalidade de media player. Neste wiki mostraremos como instalar um sistema operacional com cartão TF ou eMMC.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar_V2/24.png" /></div>

## Selecione o sistema que você precisa para o LinkStar-V2

O poderoso LinkStar-V2 suporta uma grande variedade de sistemas operacionais, como OpenWRT, Armbian e muitos outros. Nesta seção, traremos os métodos de instalação para cada sistema. Enquanto isso, ele é compatível com todo o [firmware](https://wiki.seeedstudio.com/pt-br/linkstar-install-system/#flash-android--ubuntu-to-emmc) das versões anteriores do LinkStar H68K.

### Notas e Instruções

O LinkStar-V2 possui dois tipos de armazenamento, um é o armazenamento em **cartão TF** e o outro é o armazenamento em **eMMC**. Ambas as memórias estão disponíveis para sistemas em memória flash.

Neste capítulo, podemos usar o cartão TF com um leitor de cartões para gravar o sistema no cartão TF. Devido à velocidade de leitura/gravação e à estabilidade, este método só pode ser utilizado para gravar o sistema **OpenWRT**.

- [Gravar OpenWRT no cartão TF](#jump1)

Também podemos gravar o sistema na eMMC que vem com o LinkStar-V2. Este método atualmente suporta todos os sistemas operacionais suportados pelo LinkStar-V2.

- [Gravar OpenWRT na eMMC](#jump2)

Quando um cartão TF é inserido no LinkStar-V2, o sistema no cartão TF é aquele que é inicializado quando o sistema é ligado, pois o **TF tem prioridade de boot**.

### <span id="jump1">Gravar OpenWRT no cartão TF</span>

#### Preparação

- PC com Windows/MacOS
- Cabo de dados USB - C
- Um cartão TF
- Um leitor de cartões
- [balenaEtcher](https://www.balena.io/etcher/) —— Baixe e instale o balenaEtcher, usaremos este software para gravar o sistema em um cartão TF.
- Pacote OpenWRT

Por favor, prepare os equipamentos necessários acima, os pacotes de atualização de firmware podem ser baixados clicando no botão de download abaixo.

| Versão | Descrição | Download |
|---------|----------|----------|
|  balenaEtcher  | Ferramenta de gravação de ISO  | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
|  OpenWRT R22.11.18  | Adiciona suporte ao Docker. | [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |

:::caution
Ao usar um cartão TF com o LinkStar-V2, é importante notar que ele pode ser incompatível com alguns **cartões de alta velocidade**. Se você estiver usando um cartão de alta velocidade, poderá experimentar erros de carregamento de dados, erros de inicialização ou falhas durante a energização e o carregamento do sistema devido à velocidade do cartão.

A vantagem de usar um cartão TF é que diferentes redes podem ser configuradas com diferentes cartões TF. Também é possível ter múltiplos sistemas — diferentes sistemas podem ser utilizados substituindo diferentes cartões TF.
:::

#### Procedimento

**Passo 1.** Conectar o TF ao PC

Coloque o cartão TF no leitor de cartões preparado e conecte-o ao seu PC.

**Passo 2.** Gravar o sistema em um cartão TF

Abra o balenaEtcher que já foi instalado previamente.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/25.png" /></div>

Selecione o firmware OpenWRT que você baixou, ele deve terminar em **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/26.png" /></div>

Selecione a unidade na qual você deseja gravar o sistema.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/27.png" /></div>

Clique no botão **Flash** e o software gravará o sistema no seu cartão TF.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/28.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/29.png" /></div>

:::caution
Alguns computadores podem avisar que o dispositivo USB não foi reconhecido após gravar o sistema e perguntar se deseja formatá-lo, por favor **não** reformate o cartão ou o sistema dentro dele será apagado.
:::

**Passo 3.** Inicializar o OpenWRT a partir do cartão TF

Remova o cartão TF do leitor de cartões e insira-o no slot de cartão TF do LinkStar-V2.

Em seguida, ligue o LinkStar; você pode optar por alimentá-lo via **alimentação Type-C**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/30.png" /></div>

**Passo 4.** Gerenciar o backend do OpenWRT

Use um cabo de rede para conectar à porta de rede ETH1/ETH2/ETH3 do LinkStar-V2. Em seguida, digite o endereço: `192.168.100.1` no seu navegador para acessar o backend de administração.

:::caution
ETH0 é a porta WAN e as outras portas de rede são portas LAN. Se você quiser gerenciar o OpenWRT do LinkStar-V2 via cabo de rede, conecte o cabo de rede a uma porta LAN diferente de ETH0.
:::

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/31.png" /></div>

A conta e a senha iniciais do sistema são as seguintes.

```
account: root
password: password
```

Parabéns, você instalou com sucesso o OpenWRT via cartão TF.

### <span id="jump2">Gravar OpenWRT na eMMC</span>

#### Preparação

- PC com Windows
- Cabo de dados USB - C
- Pacote OpenWRT
- Pacote Armbian (Opcional)

Por favor, prepare os equipamentos necessários acima, os pacotes de atualização de firmware podem ser baixados clicando no botão de download abaixo.

| Versão | Descrição | Download |
|---------|----------|----------|
| OpenWRT R22.11.18  | Adiciona suporte ao Docker. | [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |
| Ferramenta de gravação para eMMC e driver | - | [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) |
| Armbian 24.5.0 desktop (Opcional)  | - | [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/Armbian_community_24.5.0_trunk.389_h68k_desktop.zip) |

#### Procedimento

**Passo 1.** Instalar o driver

O [arquivo](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) que você baixou contém os três arquivos a seguir.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/07.png" /></div>

Vá para a pasta **Rockchip_DriverAssitant_v5.1.2** e clique duas vezes para abrir o arquivo **DriverInstall.exe** para instalar o driver.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/08.png" /></div>

No software de instalação do driver que é iniciado, clique em "驱动安装" (Instalar Driver).

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/09.png" /></div>

**Passo 2.** Colocar o dispositivo em modo Maskrom

Vá para a pasta **RKDevTool_Release_v2.84** e clique duas vezes para abrir o arquivo **RKDevTool.exe**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/10.png" /></div>

Neste momento, deve aparecer "No Devices Found" na parte inferior do software.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/11.png" /></div>

Pressione continuamente o botão do **Update keyhole** com o pino de remoção de cartão e não o solte. Em seguida, mantenha as mãos no LinkStar-V2 e conecte-o ao seu computador usando um cabo USB tipo C. Depois disso, você pode soltar o botão.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/12.png" /></div>

Neste ponto, observe novamente o software e ele mudará de "No Devices Found" para "Found One MASKROM Device".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/13.png" /></div>

**Passo 3.** Apagar o firmware

Clique em "Upgrade Firmware", depois clique em "Firmware" e selecione o arquivo **H6XK-Boot-Loader.bin** no diretório de arquivos.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/14.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/15.png" /></div>

Após importar o arquivo, clique em "EraseFlash".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/16.png" /></div>

Aguarde a conclusão da operação e clique em "确定" (OK).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/17.png" /></div>

**Passo 4.** Gravar o OpenWRT

:::note
se você seguiu os passos acima, seu LinkStar H68K-V2 ainda deve estar no modo MASKROOM; caso contrário, repita e siga novamente os passos a partir do **Passo 2**.
:::

Clique em "Download Image" no canto superior esquerdo do software e, em seguida, selecione o arquivo **H6XK-Boot-Loader.bin** para a primeira linha de opção **Boot**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/18.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/19.png" /></div>

Em seguida, na segunda linha de opções de **system**, selecione a imagem de sistema para o OpenWRT. Deve ser um arquivo terminado em **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/20.png" /></div>

Depois, clique no botão "Run" abaixo.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/21.png" /></div>

Aguarde o aviso "Download image OK"; em seguida, o sistema terá sido instalado com sucesso na eMMC do LInkStar-V2.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/22.png" /></div>

Quando a gravação do sistema estiver concluída, o LinkStar H68K-V2 deve reiniciar automaticamente e, após a reinicialização, ele entrará no sistema OpenWRT.

**Passo 5.** Gerenciar o backend do OpenWRT

Use um cabo de rede para se conectar à porta de rede ETH1/ETH2/ETH3 do LinkStar-V2. Em seguida, digite o endereço: `192.168.100.1` no seu navegador para acessar o backend de administração.

:::caution
ETH0 é a porta WAN e as outras portas de rede são portas LAN. Se você quiser gerenciar o OpenWRT do LinkStar-V2 por meio de um cabo de rede, conecte o cabo de rede a uma porta LAN diferente de ETH0.
:::

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/23.png" /></div>

A conta e a senha iniciais do sistema são as seguintes.

```
account: root
password: password
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/24.png" /></div>

Parabéns, você instalou com sucesso o OpenWRT na eMMC.

## Recursos

O LinkStar H68K-V2 é um hardware de código aberto. Abaixo estão os links de download para materiais relevantes.

| Versão                     | Descrição        | Download                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| OpenWRT R22.11.18           | Adiciona suporte a Docker| [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |
| Armbian 24.5.0 desktop (Opcional)|-| [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/Armbian_community_24.5.0_trunk.389_h68k_desktop.zip) |
| Ferramenta de gravação para eMMC & driver | - | [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) |
| balenaEtcher                | Ferramenta de gravação de ISO  | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| H68K-V2-SCH                    | Esquemático do H68K  | [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/H68K_V2_Schematic.pdf) |
| RK3568 Datasheet            | - | [Download](https://files.seeedstudio.com/wiki/LinkStar/RK3568_Brief_Datasheet.pdf) |
| M7921E Wi-Fi Module         | - | [Download](https://files.seeedstudio.com/wiki/LinkStar/M7921E_Wi-Fi_Module.pdf) |

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
