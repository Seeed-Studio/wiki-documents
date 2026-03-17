---
description: reComputer J1020 v1 | A206
title: reComputer J1020v1 | A206
keywords:
  - Edge
  - reComputer JetPack™_OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_J1020_A206_Flash_JetPack
last_update:
  date: 01/05/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reComputer_J1020_A206_Flash_JetPack/
---

# Gravar o JetPack no reComputer J1020v1 (placa-carregadora A206)

Neste wiki, mostraremos como gravar o JetPack OS no reComputer J1020. Como a placa-carregadora dele é projetada como a NVIDIA Nano Developer Carrier Board oficial, podemos gravar o JetPack de duas maneiras.

## Primeiros Passos

Podemos usar o software para Linux **NVIDIA SDK Manager** ou podemos usar diretamente o **NVIDIA Linux Driver Package** via linha de comando do Linux para gravar o JetPack OS no reComputer J1020. Para iniciantes em NVIDIA Jetson, recomendamos fortemente o NVIDIA SDK Manager.

- [Opção 1 - Gravando o JetPack OS via NVIDIA SDK Manager](#Opção-1---Gravando-o-JetPack-OS-via-NVIDIA-SDK-Manager)
- [Opção 2 - Gravando o JetPack OS via Linha de Comando](#Opção-2---Gravando-o-JetPack-OS-via-Linha-de-Comando)

Ainda há algumas preparações que precisamos primeiro:

### Preparação de Software

- <a href="https://developer.nvidia.com/login" target="_blank"><span>Conta NVIDIA</span></a>
- Computador Host Linux com Ubuntu 18.04 OS (ou superior)

!!!note
 In this tutorial, we will use Ubuntu 18.04 LTS based system to complete the installation.

### Preparação de Hardware (Modo de Recuperação Forçada)

Antes de podermos prosseguir para as etapas de instalação, precisamos nos certificar de que nosso reComputer está no modo de recuperação forçada.

**Passo 1.** Antes de começar, você precisa desconectar a alimentação do reComputer.
**Passo 2.** Para entrar no modo de recuperação, você precisa conectar **FC REC** e **GND** usando jumpers.

<table align="center">
  <tbody><tr>
      <th> </th>
      <th align="center">Header de Botão</th>
      <th align="center">Descrição</th>  
      <th align="center">Header de Botão</th>
      <th align="center">Descrição</th>
    </tr>
    <tr>
      <td rowSpan={6}><div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/J202-b.png" /></div></td>
      <td align="center">1</td>
      <td align="center">PWR BTN</td>
      <td align="center">7</td>
      <td align="center">AUTO ON</td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td align="center">GND</td>
      <td align="center">8</td>
      <td align="center">DISABLE</td>
    </tr>
    <tr>
      <td align="center">3</td>
      <td align="center">FC REC</td>
      <td align="center">9</td>
      <td align="center">UART TXD</td>
    </tr>
    <tr>
      <td align="center">4</td>
      <td align="center">GND</td>
      <td align="center">10</td>
      <td align="center">UART RXD</td>
    </tr>
    <tr>
      <td align="center">5</td>
      <td align="center">SYS RET</td>
      <td align="center">11</td>
      <td align="center">LED +</td>
    </tr>
    <tr>
      <td align="center">6</td>
      <td align="center">GND</td>
      <td align="center">12</td>
      <td align="center">LED -</td>
    </tr>
  </tbody></table>

**Passo 3.** Ligue o reComputer com o cabo DC de 12V/5A à esquerda do reComputer e use um cabo Tipo‑C para conectar o PC Host Linux à direita do reComputer.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack.png" /></div>

!!!Attention
    Before wiring, please pay attention to the power connector and data connector, please do not connect the data connector directly to DC power.

**Passo 4.** Na janela de linha de comando do computador host, insira o comando `lsusb`. Quando o conteúdo retornado contiver `ID 0955:7f21 NVidia Corp.`, isso significa que o reComputer está no modo de recuperação forçada e podemos prosseguir para as operações subsequentes.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

## Gravando o JetPack OS via NVIDIA SDK Manager

Em seguida, passaremos pelo tutorial sobre a instalação do sistema via NVIDIA SDK Manager. O NVIDIA SDK Manager é uma ferramenta tudo‑em‑um que agrupa softwares para desenvolvedores e fornece uma solução de configuração de ambiente de desenvolvimento ponta a ponta para os SDKs NVIDIA. Portanto, é recomendado para iniciantes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### Passo 1.  Instalar o NVIDIA SDK Manager no PC Host Linux

Precisamos abrir o navegador no PC Host Linux e <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>baixar o NVIDIA SDK Manager</span></a> no site oficial da NVIDIA.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png" /></div>

### Passo 2.  Abrir o NVIDIA SDK Manager e fazer login

Na tela do PC host Linux, podemos clicar com o botão direito do mouse e abrir um Terminal. Em seguida, podemos digitar o comando abaixo para iniciar o SDK Manager:

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

Na primeira vez que você usar o NVIDIA SDK Manager, uma página da web aparecerá solicitando que você faça login com sua conta NVIDIA previamente registrada.

### Passo 3.  Selecionar o dispositivo de destino

Após o login, você será levado à primeira tela, onde ocorre a primeira etapa da instalação. Como já conectamos o reComputer J1020, aparecerá uma janela para que você selecione o dispositivo de hardware.

O reComputer J1020 está equipado com o **módulo NVIDIA Jetson Nano 4GB**, então podemos escolher o primeiro.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

Há mais seleções para você escolher na primeira tela:

- O **Jetson** no painel Product Category precisa ser selecionado.
- No painel Hardware Configuration, recomendamos que você **não selecione Host Machine**. Isso levará mais tempo para instalar os componentes NVIDIA no seu host Ubuntu atual. Você pode escolhê‑lo se precisar.
- No painel Target Operating System, podemos selecionar diferentes **sistemas operacionais** e **versões do JetPack**. Mas tenha cuidado com a versão do JetPack, diferentes módulos podem suportar diferentes tipos de JetPack. Recomendamos "JetPack 4.6.1" aqui.
- Em Additional SDKs, como o espaço de armazenamento do eMMC é de apenas 16GB, ele ficará sem memória se instalarmos o DeepStream aqui.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Clique em Continue para prosseguir para o próximo passo.

### Passo 4.  Revisar os componentes desejados

Em **Details and License**, você pode expandir os painéis de componentes do host e de componentes de destino para revisar os componentes que serão instalados no seu sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

Se você só precisa instalar o sistema, pode desmarcar o componente SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!Tip
    When choosing which components to install, you may want to keep an eye on the capacity used. The built-in eMMC size is only 16GB, please allocate and use this space wisely according to your actual needs.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
    After actual testing, there is only about 500MB of eMMC space left after installing the full set of SDK components.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>

    If you want to check how to solve the problem of insufficient capacity, please refer to [Troubleshooting](https://wiki.seeedstudio.com/pt-br/reComputer_Jetson_Series_Initiation/#Q1-O-espaço-restante-no-emmc-no-recomputer-jetson-recebido-é-de-apenas-cerca-de-2gb-como-posso-resolver-o-problema-de-espaço-insuficiente).

Se você quiser que o SDK Manager faça download de todos os arquivos para um local diferente do caminho padrão, vá para Download & Install Options localizado na parte inferior da tela e selecione o caminho que deseja usar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

Selecione Continue para prosseguir para o próximo passo.

### Passo 5. Instalar o sistema

Antes de a instalação começar, o SDK Manager solicita que você insira sua senha `sudo`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

Depois de um tempo, seremos solicitados a configurar o novo sistema para o nosso reComputer. Como forçamos manualmente a entrada no modo de recuperação, selecionamos `Manual setup: set the target to Force Recovery Mode via manual operations` aqui. Enquanto isso, escolhemos o **Pre-Config** padrão.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

Depois disso, precisamos inserir o nome e a senha do nosso novo sistema Jetson para o reComputer, isso é definido por você.

Quando estiver pronto, clique em `Flash` para continuar.

O display mostra o progresso do download e da instalação do software. Aguarde pacientemente até a conclusão da instalação.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### (Opcional) Passo 6. Instalar os componentes do SDK

Se você marcou a instalação do componente no **passo 4** anterior, precisará passar por esta etapa.

Depois de um momento, você verá uma nova janela aparecer no NVIDIA SDK Manager, informando que você precisa se conectar ao seu dispositivo via endereço IP. Isso significa que o sistema já foi instalado e a instalação dos componentes será realizada.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

Neste caso, podemos **puxar o jumper** e reiniciar o reComputer. Em seguida, precisamos conectar o reComputer a um monitor via HDMI, inserir a senha que você digitou no **passo 4** e fazer login na interface principal.

Neste ponto, você precisa conectar o reComputer à mesma LAN que o PC host Linux e determinar o **endereço IP** do Jetson usando o comando `ifconfig`.

Volte para o PC host Linux e insira o endereço IP que você acabou de obter. O NVIDIA SDK Manager tentará se conectar ao dispositivo Jetson e continuará para concluir a instalação dos próximos componentes do SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

Quando você vir a janela a seguir aparecer, a instalação estará concluída. Você pode começar a usar o Jetson ou continuar a seguir as etapas abaixo para concluir algumas configurações básicas do seu novo sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

!!!Attention
    Certifique-se de desconectar o jumper e sair do modo de recuperação forçada antes de religar o sistema.

## Gravando o JetPack OS via Linha de Comando

Graças à liberdade de customizar o BSP (NVIDIA Linux Driver Package), gravar o JetPack OS via linha de comando pode ser muito fácil para usuários com conhecimento em Linux.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### Etapa 1. Baixar o NVIDIA Linux Driver Package apropriado

No **PC host Linux**, precisamos abrir um navegador e acessar o <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. Primeiro devemos verificar se a versão do Jetson Linux é compatível com o nosso módulo reComputer Jetson.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png" /></div>

Depois de encontrar a versão adequada, clique para ir para a página de download. Encontre e clique em "L4T Driver Package (BSP)" e "Sample Root Filesystem" para baixar os arquivos de driver. Os nomes dos arquivos são como `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` e `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

Como exemplo, escolhemos a versão NVIDIA L4T 32.7.1, pois ela está incluída como parte do JetPack4.6.1 e é compatível com o módulo Jetson Nano. Os nomes dos arquivos:

- Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
- Jetson-210_Linux_R32.7.2_aarch64.tbz2

### Etapa 2. Descompactar os pacotes e montar o Rootfs via linha de comando

No PC host Linux, devemos encontrar uma pasta e armazenar os pacotes que baixamos antes. Em seguida, abra uma janela de linha de comando (Terminal) nessa pasta e use a linha de comando abaixo para descompactar os arquivos e montar o rootfs:

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

!!!Note
    `${}` é onde você coloca os nomes dos arquivos.

*Como exemplo de **NVIDIA L4T 32.7.1**, os arquivos baixados são armazenados em `/Desktop/L4T_Drivers`, então, no caminho '/Desktop/L4T_Drivers', abrimos a janela de linha de comando (Terminal) e executamos o seguinte comando.

```sh
tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

A saída deve ser semelhante a:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

### Etapa 3.  Gravar o sistema no reComputer

Como já colocamos o reComputer J1020 em modo de recuperação forçada e o módulo é Jetson Nano, podemos gravar diretamente o sistema no reComputer executando o seguinte comando:

```sh
sudo ./flash.sh jetson-nano-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

!!!Tip
    Gravar o L4T leva cerca de 10 minutos, ou mais em um computador host lento.

Nesse momento, podemos desconectar o jumper e então ligar o reComputer novamente para usá-lo.

## Solução de Problemas

### Solução de problemas de instalação com o NVIDIA SDK Manager

Existem muitas causas para vários erros de instalação. Abaixo está uma lista de verificação de problemas comuns de instalação, que pode ajudar você a se recuperar de uma instalação com falha.

1. Revise a tabela de resumo para identificar qual componente falhou.

    a. Expanda o grupo com o status "Error".

    b. Quando encontrar o componente com falha, clique no ícone de detalhes à direita de Install Error para ser redirecionado para a aba Terminal, que exibirá o erro exato.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. Se o erro estiver relacionado a um problema de ambiente, como um repositório apt quebrado ou pré-requisito ausente, tente corrigir manualmente e, em seguida, clique no botão Retry Failed Items.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. Repetir a instalação também está disponível de outras duas maneiras:

    a. A partir de **Flashing to eMMC with SDK Manager -- Step 3**, use o botão Repair/Uninstall para acessar a página Manage NVIDIA SDKs. Se necessário, expanda o SDK que está com status "Broken" e clique em Repair para a parte relevante (Host ou Target).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. Em **Flashing to eMMC with SDK Manager -- Step 3**, selecione o SDK necessário e execute novamente a instalação.

5. Por fim, tente desinstalar e reinstalar o SDK relevante.

### Solução de problemas de instalação usando a linha de comando

O método de instalação via linha de comando é relativamente simples e é frequentemente propenso a erros em cenários em que o modo de recuperação forçada é usado.

Se você encontrar o erro mostrado abaixo em **Flashing to eMMC with command-line -- Step 2**, provavelmente não conseguiu colocar a Carrier Board em modo de recuperação forçada. Por favor, preste atenção especial: não entre em modo de recuperação forçada com a Carrier Board ligada, pois isso não é válido.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

Se você não conseguir entrar no sistema em **Flashing to eMMC with command-line -- Step 3** e ficar preso na linha de comando da tela de inicialização, provavelmente você não saiu do modo de recuperação forçada. Da mesma forma, não é válido remover o jumper para sair do modo de recuperação forçada enquanto a Carrier Board estiver ligada; tudo isso precisa ser feito enquanto estiver desligada.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

!!!Note
    Se for necessário mais espaço de armazenamento, podemos usar um cartão SD para expandir a capacidade ou gravar o sistema no cartão SD. Você pode consultar nossa solução recomendada [Flash System on SD card](https://wiki.seeedstudio.com/pt-br/J101_Enable_SD_Card/)

## Recursos

[reComputer J1020 datasheet](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-Jetson-J1020-w_o-power-adapter-datasheet.pdf)

[reComptuer J102 (Also J202) Carrier Boards Schematic](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J202_V1.0_SCH_PDF_240822.pdf)

[reComputer J1010 3D file](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Seeed Jetson Serials Catalog](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio Edge AI Success Stories](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetson Serials Comparision](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetson Devices One Page](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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
