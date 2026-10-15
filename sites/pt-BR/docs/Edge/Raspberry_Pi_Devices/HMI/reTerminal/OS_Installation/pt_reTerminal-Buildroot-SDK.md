---
description: Buildroot para reTerminal
title: Buildroot para reTerminal
keywords:
  - Edge
  - reTerminal OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-Buildroot-SDK
sku: 102110638
last_update:
  date: 2/1/2023
  author: jianjing Huang
createdAt: '2023-02-01'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reTerminal-Buildroot-SDK/
---


# Buildroot para reTerminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/thumb.jpg" alt="pir" width="500" height="auto"/></p>

## Introdução

[Buildroot](https://buildroot.org) é uma ferramenta fácil de usar que simplifica e automatiza o processo de construção de um sistema Linux completo para um sistema embarcado, usando compilação cruzada.

Para isso, o Buildroot é capaz de gerar uma toolchain de compilação cruzada, um sistema de arquivos raiz, uma imagem do kernel Linux e um bootloader para o seu alvo. O Buildroot pode ser usado para qualquer combinação dessas opções, de forma independente (por exemplo, você pode usar uma toolchain de compilação cruzada existente e construir apenas o seu sistema de arquivos raiz com o Buildroot).

Ele tem uma estrutura simples que o torna fácil de entender e estender. Ele depende apenas da conhecida linguagem Makefile. Buildroot é um projeto de código aberto e muitos desenvolvedores contribuem para ele diariamente.

Seguindo o guia abaixo, você poderá construir a sua própria imagem de sistema do [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) usando o Buildroot. Então vamos começar!

## Compilar o Código-Fonte do Buildroot

### Compilação manual na máquina local

Agora vamos passar para a compilação manual da imagem do sistema para o reTerminal usando o Buildroot.

**nota:** Este guia foi escrito após testes em um PC host com Ubuntu 20.04 instalado. No entanto, ele funcionará para outros sistemas Linux.

- **Passo 1.** Prepare o ambiente de desenvolvimento no PC host instalando os seguintes pacotes (git, gcc e make)

```sh
sudo apt update
sudo apt install git
sudo apt install build-essential
```

**Nota:** Se você já tiver os pacotes acima instalados, pode pular este passo.

- **Passo 2.** Clone o seguinte repositório do GitHub

```sh
git clone --depth=1 https://github.com/Seeed-Studio/seeed-linux-buildroot.git -b master
```

- **Passo 3.** Navegue até o diretório **seeed-linux-buildroot**

```sh
cd seeed-linux-buildroot
```

#### Compilar com a configuração padrão para reTerminal

Digite o seguinte para iniciar a compilação com a configuração padrão do reTerminal

```sh
make reTerminal_64_defconfig
make
```

#### Compilar com a sua própria configuração para reTerminal

Digite o seguinte para instalar o pacote necessário para compilar com a sua própria configuração

```sh
sudo apt install libncurses-dev
```

- **Passo 5.** Digite o seguinte para abrir a janela de configuração do buildroot

```sh
make menuconfig
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/menuconfig.png" alt="pir" width="1000" height="auto"/></p>

Você pode usar esta janela de configuração e navegar pelas opções disponíveis e **personalizar a imagem** de acordo com suas necessidades. Além disso, se você clicar em **Save** e **Exit** nesta janela sem fazer nenhuma alteração, a configuração padrão do reTerminal será carregada.

#### Encontrar a imagem compilada

Quando a compilação for concluída com sucesso, navegue até `seeed-linux-buildroot/output/images` e você encontrará a imagem compilada como **sdcard.img**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/image-location-1.png" alt="pir" width="1000" height="auto"/></p>

### Baixar imagem já compilada

Se você quiser baixar uma imagem de sistema do reTerminal que já está compilada usando o Buildroot, pode seguir os passos abaixo.

- **Passo 1.** Abra [este link](https://github.com/Seeed-Studio/seeed-linux-buildroot/actions) para entrar na página **Actions** do repositório GitHub **seeed-linux-buildroot**

- **Passo 2.** Clique no workflow mais recente **Seeed reTerminal buildroot**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/workflow.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 3.** Em **Artifacts**, clique em **buildroot deploy** para iniciar o download da imagem

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/download.jpg" alt="pir" width="1000" height="auto"/></p>

**Nota:** Após baixar a imagem, extraia a imagem para obter o arquivo **sdcard.img**

## Gravar a imagem no reTerminal

Agora vamos prosseguir para gravar a imagem na eMMC do CM4 no reTerminal.

Siga os passos neste [wiki](https://wiki.seeedstudio.com/pt-br/reTerminal/#getting-started-with-reterminal-extended) e preste atenção ao seguinte passo:

**Nota:** Quando você abrir o **Raspberry Pi Imager**, clique em **CHOOSE OS**, selecione **Use custom** e escolha o arquivo **sdcard.img** baixado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/RPi-imager-1.png" alt="pir" width="600" height="auto"/></p>

## Primeiro boot no reTerminal

Depois de gravarmos a imagem do sistema no reTerminal, ligue o reTerminal. Aqui você verá o log do kernel aparecer no LCD do reTerminal e, por fim, será aberto um aplicativo de demonstração feito usando Qt.

O tempo de inicialização da imagem de sistema padrão é de cerca de 30 segundos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/bootup.gif" alt="pir" width="1000" height="auto"/></p>

## Analisar a imagem Buildroot

Como mencionado anteriormente, o Buildroot é uma ferramenta muito poderosa, pode depender de bibliotecas e ferramentas de terceiros e pode construir rapidamente o que precisamos. Se você quiser entender o tempo de compilação do Buildroot, dependências, tamanho dos recursos consumidos pela compilação e assim por diante, é muito inconveniente verificar isso através do código. No entanto, o Buildroot fornece ferramentas de análise visual para analisar o que foi mencionado acima e precisamos apenas de alguns comandos simples para usá-las.

Comece instalando os seguintes pacotes

```sh
sudo apt install python3-matplotlib python3-numpy
```

### Gerar diagramas de dependência

Uma das tarefas do Buildroot é entender as dependências entre pacotes e garantir que eles sejam construídos na ordem correta. Essas dependências às vezes podem ser complexas e, para um determinado sistema, muitas vezes não é fácil entender por que um pacote ou outro foi introduzido pelo Buildroot e construído com sucesso. Para ajudar a entender as dependências e compreender melhor o papel dos diferentes componentes em sistemas Linux embarcados, o Buildroot é capaz de gerar diagramas de dependência (em formato PDF)

- **Passo 1.** Instale o seguinte pacote

```sh
sudo apt install graphviz
```

- **Passo 2.** Gerar diagramas de dependência

```sh
make graph-depends
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/depends-command.png" alt="pir" width="1000" height="auto"/></p>

Após os comandos acima, os diagramas de dependência serão gerados em `seeed-linux-buildroot > output > graphs` como:

- graph-depends.pdf
- graph-depends.dot

[![](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-depends-img.png)](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-depends-img.png)

**Nota:** Clique na imagem acima para ver uma versão ampliada

### Gerar análise do tamanho dos recursos consumidos pela compilação

O Buildroot pode gerar uma análise do tamanho dos recursos consumidos pela compilação.

Digite o seguinte comando

```sh
make graph-size
```

Após o comando acima, os arquivos de análise visual serão gerados em `seeed-linux-buildroot > output > graphs` como:

- graph-size.pdf
- file-size-stats.csv
- package-size-stats.csv

[![](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-size-img.png)](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-size-img.png)

**Nota:** Clique na imagem acima para ver uma versão ampliada

## Testar a imagem Buildroot

Para testar a imagem Buildroot acima com o reTerminal, você pode visitar o [wiki de Uso de Hardware e Interfaces do reTerminal](https://wiki.seeedstudio.com/pt-br/reTerminal-hardware-interfaces-usage) e consultar os passos mencionados.

## Recursos

- **[Webpage]** [Documentação do Buildroot](https://buildroot.org/docs.html)
- **[GitHub]** [seeed-linux-buildroot](https://github.com/Seeed-Studio/seeed-linux-buildroot)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
