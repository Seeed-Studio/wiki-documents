---
description: Tutorial de Inicialização do H28K
title: Instalar o Sistema Operacional
keywords:
  - Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /H28K-install-system
sku: 113991236,113991235
last_update:
  date: 11/24/2023
  author: Parker
createdAt: '2023-12-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/H28K-install-system/
---

<!-- ---
name: H28K Router with 8GB eMMC, QWRT support
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: *******
tags:
--- -->

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/Overview.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H28K-0208-p-5848.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O LinkStar-H28K possui duas portas de rede Gigabit que utilizam tecnologia gigabit PCIE/RGMII e um chip Quad-core. Ele tem memória LPDDR4X de 4GB e armazenamento eMMC de 8GB que pode ser expandido até 512GB com um cartão TF. Também possui uma conexão Type-C 5V-12V para capacidade PD (Power Delivery). Neste wiki mostraremos como instalar o sistema operacional com cartão TF ou eMMC.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/30.png" /></div>

## Selecione o sistema que você precisa para o H28K

O H28K suporta o sistema operacional Qwrt. Nesta seção, traremos o método de instalação para o sistema Qwrt.

### Notas e Instruções

O H28K possui dois tipos de armazenamento, um é o armazenamento em cartão TF e o outro é o armazenamento eMMC. Ambas as memórias podem ser usadas para sistemas de memória flash.

Neste capítulo, podemos usar o cartão TF com um leitor de cartão para gravar o sistema no cartão TF. 

- [Gravar QWRT no cartão TF](#jump1)

Também podemos gravar o sistema no eMMC que vem com o H28K. 

- [Gravar QWRT no eMMC](#jump2)

Quando um cartão TF é inserido no H28K, o sistema no cartão TF é o que é inicializado quando o sistema é ligado, pois o **TF tem prioridade de boot**.

### <span id="jump1">Gravar QWRT no cartão TF</span>

#### Preparação

- PC com Windows/MacOS
- Cabo de dados USB - C
- Um cartão TF
- Um leitor de cartões
- [balenaEtcher](https://www.balena.io/etcher/) —— Baixe e instale o balenaEtcher, usaremos este software para gravar o sistema em um cartão TF.
- Pacote QWRT

Prepare os equipamentos exigidos acima, pacotes de atualização de firmware podem ser baixados clicando no botão de download abaixo.

| Version           | Description                                               | Download                                                     |
| ----------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| balenaEtcher      | Ferramenta de gravação de ISO                            | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| QWRT R24.01.23              | Baseado em OpenWRT | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip) |

:::caution
Ao usar um cartão TF com o H28K, é importante notar que ele pode ser incompatível com alguns **cartões de alta velocidade**. Se você estiver usando um cartão de alta velocidade, poderá experimentar erros de carregamento de dados, erros de inicialização ou falhas durante a energização e o carregamento do sistema devido à velocidade do cartão.

A vantagem de usar um cartão TF é que redes diferentes podem ser configuradas com cartões TF diferentes. Também é possível ter vários sistemas – diferentes sistemas podem ser usados substituindo-se cartões TF diferentes.
:::

#### Procedimento

**Passo 1.** Conectar o TF ao PC

Coloque o cartão TF no leitor de cartões preparado e conecte-o ao seu PC.

**Passo 2.** Gravar o sistema em um cartão TF

Abra o balenaEtcher que foi instalado previamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/18.png" /></div>

Selecione o firmware QWRT que você baixou, ele deve terminar em **.img**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/19.png" /></div>

Selecione a unidade na qual você deseja gravar o sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/20.png" /></div>
<br />
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/21.png" /></div>

Clique no botão **Flash** e o software gravará o sistema no seu cartão TF.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/22.png" /></div>

:::caution
Alguns computadores podem exibir uma mensagem após a gravação do sistema indicando que o dispositivo USB não foi reconhecido e perguntando se deseja formatá-lo, por favor **não** reformate o cartão ou o sistema dentro dele será apagado.
:::

**Passo 3.** Inicializar o QWRT a partir do cartão TF

Remova o cartão TF do leitor de cartões e insira-o no slot de cartão TF do H28K.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/23.png" /></div>

Em seguida, ligue o H28K, você pode optar por alimentá-lo via **USB-C-5V**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/24.png" /></div>

**Passo 4.** Gerenciar o backend do QWRT

Use um cabo de rede para se conectar à porta de rede ETH0 do H28K. Em seguida, insira o endereço: `192.168.1.1` no seu navegador para acessar o backend de administração.

:::caution
ETH0 é a porta LAN e a porta ETH1 é a porta WAN. Se você quiser gerenciar o QWRT do H28K via cabo de rede, conecte o cabo de rede à ETH0.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/15.png" /></div>

A conta e a senha iniciais do sistema são as seguintes.

```text
account: root
password: password
```

Parabéns, você instalou com sucesso o QWRT via cartão TF.

### <span id="jump2">Gravar QWRT no eMMC</span>

#### Preparação

- PC com Windows
- Cabo de dados USB - C
- Pacote QWRT 

Prepare os equipamentos exigidos acima, pacotes de atualização de firmware podem ser baixados clicando no botão de download abaixo.

| Version                     | Description                                               | Download                                                     |
| --------------------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| QWRT R24.01.23              | Baseado em OpenWRT | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip) |
| Flash to eMMC tool & driver | V5.12                                                     | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/H28K_Flash_Tools.zip) |

#### Procedimento

**Passo 1.** Instalar o driver

Vá para a pasta **DriverAssitant_v5.12** e clique duas vezes para abrir o arquivo **DriverInstall.exe** para instalar o driver.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/2.png" /></div>

No software de instalação do driver que é iniciado, clique em "驱动安装" (Instalação do Driver).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/3.png" /></div>

**Passo 2.** Colocar o dispositivo em modo Maskrom

Vá para a pasta **RKDevTool_Release_v2.84** e clique duas vezes para abrir o arquivo **RKDevTool.exe**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/4.png" /></div>

Pressione continuamente o botão **Update keyhole** (caixa vermelha número um) com o pino de ejeção de cartão e não o solte.

Em seguida, mantenha as mãos no H28K e conecte-o (caixa vermelha número dois) ao seu computador usando um cabo USB-C. Depois disso, você pode soltar o botão **Update keyhole**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/5.png" /></div>

Neste ponto, observe o software e ele mostrará "Found One MASKROM Device".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/6.png" /></div>

**Passo 3.** Apagar firmware

Clique em "Upgrade Firmware", depois clique em "Firmware" e selecione o arquivo **rk3528_spl_loader_v1.05.104.bin** no diretório de arquivos.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/7.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/8.png" /></div>

Após importar o arquivo, clique em "EraseFlash".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/9.png" /></div>

Espere a conclusão da operação e clique em "确定" (OK).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/10.png" /></div>

**Passo 4.** Gravar QWRT

:::note
Se você seguiu os passos acima, seu H28K ainda deve estar no modo MASKROOM, caso contrário, repita e siga novamente os passos a partir do **Passo 2**.
:::

Clique em "Download Image" no canto superior esquerdo do software e, em seguida, selecione o arquivo **rk3528_spl_loader_v1.05.104.bin** para a primeira linha de opção **Boot**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/11.png" /></div>

Em seguida, na segunda linha de opções **system**, selecione a imagem de sistema para QWRT. Deve ser um arquivo terminando em **.img**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/12.png" /></div>

Depois clique no botão "Run" abaixo.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/13.png" /></div>

Espere pelo aviso "Download image OK", então o sistema terá sido instalado com sucesso no eMMC do H28K.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/14.png" /></div>

Quando a gravação do sistema estiver concluída, o H28K deve reiniciar automaticamente e, após a reinicialização, ele entrará no sistema QWRT.

**Passo 5.** Gerenciar o backend do QWRT

Use um cabo de rede para se conectar à porta de rede ETH0 do H28K. Em seguida, insira o endereço: `192.168.1.1` no seu navegador para acessar o backend de administração.

:::caution
ETH1 é a porta WAN e ETH0 é a porta LAN. Se você quiser gerenciar o QWRT do H28K via cabo de rede, conecte o cabo de rede a uma porta LAN.
:::

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/15.png" /></div>

A conta e a senha iniciais para o sistema são as seguintes.

```text
account: root
password: password
```

Parabéns, você instalou com sucesso o QqWRT no eMMC.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/30.png" /></div>

## Recursos

O H28K é um hardware de código aberto. Links de download para materiais relevantes.


| Versão                     | Descrição        | Download                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| QWRT R24.01.23              | Baseado no OpenWRT | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip) |
| Ferramenta de gravação em eMMC e driver | V5.12            | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/H28K_Flash_Tools.zip) |
| balenaEtcher                | Ferramenta de gravação de ISO | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| H28K-SCH                    | Esquemático do H28K | [Download](https://files.seeedstudio.com/wiki/H28K/Open_source/H28K-SCH.zip) |

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
