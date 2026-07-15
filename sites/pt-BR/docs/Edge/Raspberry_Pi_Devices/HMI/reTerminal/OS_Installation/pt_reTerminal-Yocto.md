---
description: Yocto para reTerminal
title: Yocto para reTerminal
keywords:
  - Edge
  - reTerminal OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-Yocto
sku: 102110638
last_update:
  date: 2/1/2023
  author: jianjing Huang
createdAt: '2023-02-01'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reTerminal-Yocto/
---

# Yocto para reTerminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/yocto-wiki-thumb.jpg" alt="pir" width="500" height="auto"/></p>

## Visão geral

### O que é o Yocto Project®?

O [Yocto Project](https://www.yoctoproject.org) é um projeto de colaboração open source que ajuda desenvolvedores a criar sistemas personalizados baseados em Linux para produtos embarcados, independentemente da arquitetura de hardware.

O projeto fornece um conjunto flexível de ferramentas e um espaço onde desenvolvedores embarcados do mundo todo podem compartilhar tecnologias, pilhas de software, configurações e boas práticas que podem ser usadas para criar imagens Linux sob medida para dispositivos embarcados.

O projeto fornece um padrão para entrega de suporte a hardware e pilhas de software, permitindo a troca de configurações de software e builds. As ferramentas permitem que os usuários criem e mantenham customizações para múltiplas plataformas de hardware e pilhas de software de maneira sustentável e escalável.

### Por que usar Yocto?

O Yocto Project possui um modelo de desenvolvimento para criação de Linux embarcado que o diferencia de outros sistemas de build simples. Ele é chamado de **Modelo de Camadas (Layer Model)**.

O Modelo de Camadas é projetado para suportar colaboração e personalização ao mesmo tempo. As camadas são repositórios que contêm conjuntos relacionados de instruções que dizem ao sistema de build o que fazer. Os usuários podem colaborar, compartilhar e reutilizar camadas. As camadas podem conter alterações em instruções ou configurações anteriores a qualquer momento.

Esse poderoso recurso de sobrescrita é o que permite que você personalize camadas colaborativas ou fornecidas pela comunidade anteriores para atender aos requisitos do seu produto.

Use diferentes camadas para separar logicamente as informações no seu build. Por exemplo, você pode ter uma camada de BSP, uma camada de GUI, uma configuração de distribuição, middleware ou um aplicativo. Colocar todo o seu build em uma única camada limita e complica futuras personalizações e reutilização. Isolar informações em camadas, por outro lado, ajuda a simplificar futuras personalizações e reutilização.

### Recursos do Yocto

O Yocto possui os seguintes recursos:

- **CII Best Practices:** O selo CII Best Practices da Linux Foundation (LF) Core Infrastructure Initiative (CII) é uma forma de projetos de Software Livre e Open Source (FLOSS) mostrarem que seguem as melhores práticas. O Yocto Project é registrado e possui o seguinte nível de selo.

- **Reprodutibilidade Binária:** Se uma distribuição não especifica quais pacotes devem ser usados para suportar dependências, ou sua ordem, sistemas de build podem incluir pacotes de forma arbitrária com base em quando as dependências são satisfeitas. O Yocto Project controla dependências evitando contaminação e atingiu reprodutibilidade de 99,8% em “core-image minimal” e ligeiramente menos em testes expandidos.

- **Cross Platform Development Framework (CROPS):** CROPS é um framework de desenvolvimento multiplataforma open source que utiliza contêineres Docker para fornecer um ambiente facilmente gerenciável e extensível que permite aos desenvolvedores gerar binários para uma variedade de arquiteturas a partir de hosts Windows, Linux e Mac OS X.

- **SDK Extensível:** O SDK Extensível (eSDK) do Yocto Project possui ferramentas que permitem adicionar facilmente novos aplicativos e bibliotecas a uma imagem, modificar o código-fonte de um componente existente e testar alterações no hardware de destino.

- **Toaster:** Toaster é uma interface web para OpenEmbedded e BitBake, o sistema de build usado pelo Yocto Project. O Toaster permite que você configure e execute seus builds e fornece informações e estatísticas sobre o processo de build.

- **Multi-Config:** O sistema de build pode compilar de forma automática e eficiente múltiplas arquiteturas especificadas com um único comando.

- **Builds Binários:** O Yocto Project permite que arquivos binários sejam incluídos no build sem incluir os arquivos de código-fonte correspondentes.

- **Geração de Manifesto de Licenças Open Source:** O Yocto Project pode rastrear todas as licenças open source usadas no build e fornecer um manifesto dessas licenças e referências de código-fonte.

Seguindo o guia abaixo, você poderá compilar sua própria imagem de sistema do [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) usando Yocto. Então vamos começar!

## Compilar o Código-Fonte do Yocto

### Compilação manual na máquina local - Usando Bitbake (Linha de Comando)

Agora vamos passar para a compilação manual da imagem do sistema para o reTerminal usando Yocto via linha de comando.

**Nota:** Este guia foi escrito após testes em um PC host com Ubuntu 20.04 instalado. Porém, ele funcionará em outros sistemas Linux.

#### Compilar com a configuração padrão para o reTerminal

Siga as etapas abaixo para começar a compilar com a configuração padrão do reTerminal

- **Passo 1.** Prepare o ambiente de desenvolvimento no PC host instalando os seguintes pacotes

```sh
sudo apt update
sudo apt install gawk wget git-core diffstat unzip texinfo gcc-multilib build-essential chrpath socat python3-distutils
```

**Nota:** Se o PC host estiver executando uma distribuição Linux diferente, verifique [aqui](https://www.yoctoproject.org/docs/1.8/ref-manual/ref-manual.html#required-packages-for-the-host-development-system)

- **Passo 2.** Crie um novo diretório de trabalho e entre nele

```sh
mkdir reterminal-yocto
cd reterminal-yocto
```

- **Passo 3.** Crie um novo diretório para adicionar camadas e entre nele

```sh
mkdir layers 
cd layers
```

- **Passo 4.** Clone o seguinte repositório GitHub

```sh
git clone -b dunfell git://git.yoctoproject.org/poky
```

- **Passo 5.** Clone os seguintes repositórios

```sh
git clone -b dunfell https://github.com/Seeed-Studio/meta-seeed-cm4.git
git clone -b master git://git.yoctoproject.org/meta-raspberrypi
git clone -b dunfell https://github.com/meta-qt5/meta-qt5.git
git clone -b dunfell https://github.com/openembedded/meta-openembedded.git
```

- **Passo 6.** Altere a versão do kernel de 5.4 para 5.10 na camada meta-raspberrypi

```sh
cd meta-raspberrypi/
cp -r recipes-kernel/linux/ ../
git checkout dunfell
rm -r recipes-kernel/linux/
mv -f ../linux/ recipes-kernel/
cd ../../
```

- **Passo 7.** Inicialize o ambiente de build

```sh
source layers/poky/oe-init-build-env
```

- **Passo 8.** Adicione as camadas ao ambiente de build

```sh
bitbake-layers add-layer ../layers/meta-raspberrypi
bitbake-layers add-layer ../layers/meta-seeed-cm4
bitbake-layers add-layer ../layers/meta-qt5
bitbake-layers add-layer ../layers/meta-openembedded/meta-oe
bitbake-layers add-layer ../layers/meta-openembedded/meta-python
```

- **Passo 9.** Volte para o diretório **build** e execute o seguinte para começar a compilar

```sh
MACHINE="seeed-reterminal" bitbake rpi-test-image
```

#### Encontrar a imagem compilada

Após a conclusão da compilação, vá para o diretório **build** e execute o seguinte comando para verificar se a **imagem do sistema** foi gerada com sucesso

```sh
cd tmp/deploy/images/seeed-reterminal/;ls -lh rpi-test-image*.wic.bz2
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/Yocto-bitbake-image-location.png" alt="pir" width="1000" height="auto"/></p>

Como mostrado na imagem acima, **rpi-test-image-seeed-reterminal.rootfs.wic.bz2** é a imagem de sistema gerada

#### Comandos úteis do Bitbake

Consulte o seguinte para se familiarizar com alguns comandos úteis do Bitbake

##### Iniciar a compilação da imagem

- bitbake `<image>`

Este comando iniciará a compilação da imagem. Você pode adicionar -k para continuar compilando mesmo que sejam encontrados erros. Embora o alvo que falhou e qualquer coisa que dependa dele não possam ser compilados, o máximo possível será compilado antes de parar.

Exemplo 1:

```sh
bitbake rpi-test-image
```

Exemplo 2:

```sh
bitbake rpi-test-image -k
```

##### Mostrar pacotes na imagem

- bitbake -g `<image>` && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '\{print $1\}' | sort | uniq

Isso salvará os pacotes dentro da imagem em um arquivo chamado **pn-buildlist** e então irá listá-los no console

Exemplo:

```sh
bitbake -g rpi-test-image && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '\{print $1\}' | sort | uniq
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/image-packages.png" alt="pir" width="800" height="auto"/></p>

##### Mostrar dependências de pacotes

- bitbake -g `<package>` && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '\{print $1\}' | sort | uniq

Isso salvará as dependências do pacote em um arquivo chamado **pn-buildlist** e então irá listá-las no console

Exemplo:

```sh
bitbake -g i2c-tools && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '\{print $1\}' | sort | uniq
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/package-depends.png" alt="pir" width="800" height="auto"/></p>

##### Interface de usuário do explorador de dependências de tarefas

- bitbake `<image>` -g -u taskexp

Isso será útil para mostrar a interface de usuário do Task Dependency Explorer. Ela mostra as dependências entre tarefas

Exemplo:

```sh
bitbake rpi-test-image -g -u taskexp
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/task-explorer-ui.png" alt="pir" width="800" height="auto"/></p>

##### Iniciar devshell para um pacote

- bitbake `<package>` -c devshell

Isso abrirá um novo shell com os valores de sistema necessários já definidos para o pacote

Exemplo:

```sh
bitbake evtest -c devshell
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/devshell.png" alt="pir" width="800" height="auto"/></p>

##### Listar tarefas do pacote

- bitbake -c listtasks

Isso listará todas as tarefas de um pacote

Exemplo:

```sh
bitbake evtest -c listtasks
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/tasks.png" alt="pir" width="800" height="auto"/></p>

##### Configuração interativa do kernel

- bitbake virtual/kernel -c menuconfig

Isto abrirá uma janela interativa de configuração do kernel onde você pode alterar as configurações de acordo com suas necessidades

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/kernel-config.png" alt="pir" width="800" height="auto"/></p>

##### Mostrar camadas

- bitbake-layers show-layers

Isso exibirá uma lista das camadas atualmente em uso e suas prioridades. Se um pacote existir em duas ou mais camadas, ele será compilado a partir da camada com maior prioridade

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/layers.png" alt="pir" width="800" height="auto"/></p>

##### Mostrar receitas

- bitbake-layers show-recipes

Isso exibirá todas as receitas disponíveis

Se você digitar o seguinte, poderá verificar a receita que usamos anteriormente, que é **rpi-test-image**

```sh
bitbake-layers show-recipes | grep rpi
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/rpi-test.png" alt="pir" width="800" height="auto"/></p>

##### Verificar pacote

- bitbake -s | grep

Isso verificará se um determinado pacote está presente na configuração Yocto atual

```sh
bitbake -s | grep openssl
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/check-package.png" alt="pir" width="800" height="auto"/></p>

##### Salvar log de compilação detalhado

- bitbake -v `<image>` 2>&1 | tee image_build.log

Isso imprimirá (no console) à medida que a imagem começar a ser compilada e armazenará a saída em **image_build.log** no modo detalhado

Exemplo:

```sh
bitbake -v rpi-test-image 2>&1 | tee image_build.log 
```

##### Limpar o ambiente de compilação

- bitbake -c cleanall [package]

Isto removerá tudo no diretório de trabalho, cache de estado e todos os arquivos fonte previamente baixados relacionados ao pacote. Isto será útil se você estiver enfrentando problemas de compilação para um determinado pacote

Exemplo:

```
bitbake -c cleanall i2c-tools
```

### Compilação Manual na Máquina Local - Usando Toaster (GUI)

Agora prosseguiremos para compilar manualmente a imagem do sistema para o reTerminal usando o Toaster.

Toaster é uma interface web para OpenEmbedded e BitBake, o sistema de compilação usado pelo Yocto Project®. O Toaster permite que você configure e execute suas compilações e fornece informações e estatísticas sobre o processo de compilação.

**Nota:** Este guia foi escrito após testes em um PC host com Ubuntu 20.04 instalado.

- **Passo 1.** Atualize a lista de pacotes

```sh
sudo apt update
```

- **Passo 2.** Prepare o ambiente de desenvolvimento no PC host instalando os seguintes pacotes

```sh
sudo apt-get install gawk wget git-core diffstat unzip texinfo gcc-multilib \
     build-essential chrpath socat cpio python3 python3-pip python3-pexpect \
     xz-utils debianutils iputils-ping python3-git python3-jinja2 libegl1-mesa libsdl1.2-dev \
     pylint3 xterm
```

**Nota:** Se o seu PC host estiver executando uma distribuição diferente de Linux, [clique aqui](https://www.yoctoproject.org/docs/3.1/ref-manual/ref-manual.html#required-packages-for-the-build-host) para verificar quais pacotes precisam ser instalados de acordo com o seu sistema operacional

- **Passo 3.** Clone o seguinte repositório GitHub

```sh
git clone -b master git://git.yoctoproject.org/poky
```

- **Passo 4.** Navegue até o diretório **poky**

```sh
cd poky
```

- **Passo 5.** Instale os seguintes pacotes do toaster

```sh
pip3 install --user -r bitbake/toaster-requirements.txt
```

- **Passo 6.** Reverta para o seguinte commit para o diretório poky

```sh
git reset --hard 7ade8346b3a09983257589d22aaada47e0eec010
```

- **Passo 7.** Faça o source do script de ambiente de compilação

```sh
source oe-init-build-env
```

- **Passo 8.** A partir do diretório **build**, inicie o toaster

```sh
source toaster start
```

- **Passo 9.** Para acessar a interface web do Toaster, abra seu navegador favorito e insira o seguinte

```sh
http://127.0.0.1:8000
```

**Nota:** Por padrão, o Toaster inicia na porta 8000. Você pode usar o parâmetro **WEBPORT** para definir uma porta diferente. Por exemplo, o comando a seguir define a porta como "9000"

```sh
source toaster start webport=9000
```

- **Passo 10.** Depois que estiver dentro da interface web do Toaster, clique em **New project**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-ui.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 11.** Insira um **Project name**, defina o **project type** como **New project**, em **Release**, selecione **Local Yocto Project** e por fim clique em **Create project**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-name.jpg" alt="pir" width="450" height="auto"/></p>

- **Passo 12.** Dentro da aba **Configuration**, em **Machine**, altere o nome para **raspberrypi4-64** e clique em **Save**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-rpi64.png" alt="pir" width="700" height="auto"/></p>

- **Passo 13.** Clique em **Import layer**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-import-layer.png" alt="pir" width="500" height="auto"/></p>

- **Passo 14.** Preencha as informações da seguinte forma

  - Layer name: meta-raspberrypi
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/agherzan/meta-raspberrypi.git](https://github.com/agherzan/meta-raspberrypi.git)
  - Git revision: 8dc3a310883ea87cd9900442f46f20bb08e57583

- **Passo 15.** Clique em **Import and add to project**

- **Passo 16.** Repita os passos acima para importar mais camadas da seguinte forma

- **meta-qt5**

  - Layer name: meta-qt5
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/meta-qt5/meta-qt5.git](https://github.com/meta-qt5/meta-qt5.git)
  - Git revision: master

- **meta-seeed-reterminal**

  - Layer name: meta-seeed-reterminal
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/Seeed-Studio/meta-seeed-reterminal.git](https://github.com/Seeed-Studio/meta-seeed-reterminal.git)
  - Git revision: main

- **meta-oe**

  - Layer name: meta-oe
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/openembedded/meta-openembedded.git](https://github.com/openembedded/meta-openembedded.git)
  - Repository subdirectory: meta-oe
  - Git revision: master

- **meta-python**

  - Layer name: meta-python
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/openembedded/meta-openembedded.git](https://github.com/openembedded/meta-openembedded.git)
  - Repository subdirectory: meta-python
  - Git revision: master

- **Passo 17.** Depois que todas as camadas forem importadas, clique na aba **Layers** para verificar as camadas que adicionamos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-layers.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 18.** Navegue até **BitBake variables** e adicione uma nova variável com o seguinte

```sh
- Variable:RPI_KERNEL_DEVICETREE_OVERLAYS_append
- Value: overlays/reTerminal.dtbo overlays/i2c3.dtbo
```

**Nota:** Certifique-se de adicionar um espaço antes de **overlays/xxxx**

- **Passo 19.** Repita o mesmo para adicionar o seguinte

```sh
- Variable:PACKAGECONFIG_append_pn-qtbase
- Value: eglfs 
```

**Nota:** Certifique-se de adicionar um espaço antes de **eglfs**

```sh
- Variable:DISTRO_FEATURES_remove
- Value: x11 wayland vulkan 
```

**Nota:** Certifique-se de adicionar um espaço antes de **x11 xxx**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-variables.png" alt="pir" width="500" height="auto"/></p>

- **Passo 20.** Finalmente digite **rpi-test-image** e clique em **Build** para começar a compilar o projeto

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build.png" alt="pir" width="500" height="auto"/></p>

Agora você verá o processo de compilação conforme abaixo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-process.png" alt="pir" width="1000" height="auto"/></p>

Quando a compilação terminar, você verá o seguinte

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-finish.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 21.** Clique em **rpi-test-image** para encontrar mais detalhes sobre a compilação da imagem

- **Passo 22.** Em **Image files**, clique em **tar.bz2** para baixar a imagem compilada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-stats-1.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 23.** Vá mais abaixo nesta página para saber mais sobre o **Build Summary**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-stats-2.png" alt="pir" width="1000" height="auto"/></p>

### Baixar Imagem Já Compilada

Se você quiser baixar uma imagem de sistema do reTerminal que já está compilada usando o Yocto, pode seguir os passos abaixo.

- **Passo 1.** Abra [este link](https://github.com/Seeed-Studio/meta-seeed-reterminal/actions) para entrar na página **Actions** do repositório GitHub **meta-seeed-reterminal**

- **Passo 2.** Clique no workflow mais recente **Seeed reTerminal Yocto embedded linux**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/workflows.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 3.** Em **Artifacts**, clique em **yocto deploy** para começar a baixar a imagem

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/deploy.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 4.** Após baixar a imagem, ela será nomeada como **yocto deploy.zip**. Extraia este arquivo **.zip** e você encontrará um arquivo chamado **yocto-image.tar.xz**

- **Passo 5.** Extraia este arquivo **yocto-image.tar.xz** e você encontrará um arquivo chamado **yocto-image.tar**

- **Passo 5.** Extraia este arquivo **yocto-image.tar** e navegue até `deploy > images > raspberrypi4-64`. Procure por um arquivo com extensão **.rootfs.wic.bz2**. Essa é a imagem de sistema

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/compiled-image-search.png" alt="pir" width="1000" height="auto"/></p>

## Gravar a Imagem no reTerminal

Agora vamos prosseguir para gravar a imagem na eMMC do CM4 no reTerminal.

Siga os passos descritos [neste wiki](https://wiki.seeedstudio.com/pt-br/reTerminal/#Primeiros-passos-com-o-reTerminal-Extended) e preste atenção ao seguinte passo:

**Nota:** Quando você abrir o **Raspberry Pi Imager**, clique em **CHOOSE OS**, selecione **Use custom** e escolha o arquivo **.rootfs.wic.bz2** baixado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/RPi-imager-1.png" alt="pir" width="600" height="auto"/></p>

## Primeiro Boot no reTerminal

Depois de gravarmos a imagem do sistema no reTerminal, ligue o reTerminal. Aqui você verá o log do kernel aparecer no LCD do reTerminal e, por fim, será aberta uma aplicação de demonstração feita com Qt.

O tempo de inicialização da imagem de sistema padrão é de cerca de 17 segundos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/bootup.gif" alt="pir" width="1000" height="auto"/></p>

## Fazer Login no reTerminal a partir do PC via Console Serial

É recomendado fazer login no sistema operacional dentro do reTerminal usando uma conexão de console serial. Consulte [este wiki](https://wiki.seeedstudio.com/pt-br/reTerminal-FAQ/#q5-como-posso-fazer-log-in-no-raspberry-pi-os-ubuntu-os-ou-outro-os-usando-um-conversor-usb-para-serial) para fazer as conexões de hardware e fazer login como **root**

## Testar a Imagem Yocto

Para testar a imagem Yocto acima com o reTerminal, você pode visitar o [wiki de Uso de Hardware e Interfaces do reTerminal](https://wiki.seeedstudio.com/pt-br/reTerminal-hardware-interfaces-usage) e seguir os passos mencionados.

## Palestra no Yocto Project Summit 2021

Esta palestra foca principalmente em explicar como você pode criar facilmente imagens Linux personalizadas para Carrier Boards CM4, X86 e placas STM32 usando o projeto Yocto. Além disso, ao final da palestra, há duas demos de IHM baseadas em Qt, LVGL, e uma demo para apresentar atualizações OTA seguras e robustas para essas SBCs usando o Mender.

<div class="video-container">
<iframe width="720" height="480" src="https://www.youtube.com/embed/OHT9f_NOEpA" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Recursos

- **[Webpage]** [Yocto Documentation](https://docs.yoctoproject.org/)
- **[Webpage]** [Toaster Manual](https://www.yoctoproject.org/docs/current/toaster-manual/toaster-manual.html)
- **[GitHub]** [meta-seeed-reterminal](https://github.com/Seeed-Studio/meta-seeed-reterminal)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
