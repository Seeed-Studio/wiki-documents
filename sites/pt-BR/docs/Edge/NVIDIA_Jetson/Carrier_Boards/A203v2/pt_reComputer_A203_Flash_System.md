---
description: Placa Carrier A203
title: Placa Carrier A203
keywords:
  - Edge
  - reComputer Carrier_Board_for_Jetson_Moudule
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_A203_Flash_System
sku: 114110047,114110049,114110048,103110043
last_update:
  date: 01/05/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reComputer_A203_Flash_System/
---
<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 
tags:
--- -->

# Gravar o JetPack OS na Placa Carrier A203 (compatível com NVIDIA Jetson Nano e NVIDIA Jetson Xavier NX)

Neste wiki, mostraremos como gravar o JetPack OS na Placa Carrier A203, que oferece suporte tanto ao módulo NVIDIA Jetson Nano quanto ao módulo NVIDIA Jetson Xavier. Aqui apresentaremos duas maneiras de gravar o sistema e, como a Placa Carrier A203 é diferente da Placa Carrier oficial da NVIDIA Jetson, o driver correspondente também deve ser instalado.

![image](https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A203/Flash_A203.jpeg)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A203-Carrier-Board-for-Jetson-Nano-Xavier-NX-V2-p-5214.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
</div>

## Primeiros Passos

Podemos usar o **NVIDIA SDK Manager e o terminal Linux** para gravar o sistema, ou podemos fazer isso facilmente usando apenas o **terminal Linux**. Para pessoas que têm conhecimento prévio de Linux, recomendamos fortemente usar somente o terminal Linux.

- [Gravando o JetPack OS via NVIDIA SDK Manager e terminal Linux](#gravando-o-jetpack-os-via-nvidia-sdk-manager)
- [Gravando o JetPack OS via terminal Linux](#gravando-o-jetpack-os-via-command-line)

Ainda há algumas preparações que precisamos fazer antes:

### Preparação de Software

- <a href="https://developer.nvidia.com/login" target="_blank"><span>Conta NVIDIA</span></a>
- Computador Host Linux com Ubuntu 18.04 OS (ou superior)

!!!note
 In this tutorial, we will use Ubuntu 18.04 LTS based system to complete the installation.

### Preparação de Hardware (Modo de Recuperação Forçada)

Antes de podermos prosseguir para as etapas de instalação, precisamos garantir que a placa esteja em modo de recuperação forçada. Existem diferentes tipos de placa, observe a diferença.

**Etapa 1.** Primeiro, precisamos desconectar a alimentação da placa.

**Etapa 2.** Para entrar no modo de recuperação, você precisa conectar **FC REC** e **GND** usando jumpers.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/A20X/A203.png" /></div></td>
      <td colSpan={4}><div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/A20X/A203V2.png" /></div></td>
    </tr>
    <tr>
      <th colSpan={4} align="center"><a href="https://files.seeedstudio.com/products/114110047/A203_Pin_Description.pdf">Placas Carrier A203</a></th>
      <th colSpan={4} align="center"><a href="https://files.seeedstudio.com/products/103110043/A203%20V2%20pin%20description.pdf">Placas Carrier A203 V2</a></th>
    </tr>
    <tr>
      <th align="center">Pino</th>
      <th align="center">Descrição</th>
      <th align="center">Pino</th>
      <th align="center">Descrição</th>
      <th align="center">Pino</th>
      <th align="center">Descrição</th>
      <th align="center">Pino</th>
      <th align="center">Descrição</th>
    </tr>
    <tr>
      <td align="center">1</td>
      <td align="center">GND</td>
      <td align="center">5</td>
      <td align="center">PWR_BTN-</td>
      <td align="center">1</td>
      <td align="center">SYS_RST</td>
      <td align="center">8</td>
      <td align="center">LATCH_SET</td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td align="center">GND</td>
      <td align="center">6</td>
      <td align="center">RECOVERY</td>
      <td align="center">2</td>
      <td align="center">GND</td>
      <td align="center">9</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">3</td>
      <td align="center">GND</td>
      <td align="center">7</td>
      <td align="center">RST</td>
      <td align="center">3</td>
      <td align="center">RECOVERY</td>
      <td align="center">7</td>
      <td align="center">UART2_RXD</td>
    </tr>
    <tr>
      <td align="center">4</td>
      <td align="center">GND</td>
      <td align="center">8</td>
      <td align="center">PWR_BTN+</td>
      <td align="center">4</td>
      <td align="center">GND</td>
      <td align="center">11</td>
      <td align="center">CAN_L</td>
    </tr>
    <tr>
      <td align="center" />
      <td align="center" />
      <td align="center" />
      <td align="center" />
      <td align="center">5</td>
      <td align="center">PWR_BTN-</td>
      <td align="center">12</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td colSpan={4} align="center" />
      <td align="center">6</td>
      <td align="center">GND</td>
      <td align="center">13</td>
      <td align="center">CAN_H</td>
    </tr>
    <tr>
      <td colSpan={4} align="center" />
      <td align="center">7</td>
      <td align="center">LATCH_SET_BUT</td>
      <td align="center">14</td>
      <td align="center">GND</td>
    </tr>
  </tbody></table>

**Etapa 3.** Conecte sua placa carrier e o PC host Linux com um **cabo Micro USB**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A203/Flash_A2032.jpg" /></div>

**Etapa 4.** Ligue a placa com um adaptador de alimentação DC.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A203/Flash_A2033.jpg" /></div>

**Etapa 5.** Na tela do PC host Linux, podemos clicar com o botão direito do mouse para abrir um Terminal e inserir o comando `lsusb`. Quando o conteúdo retornado tiver `NVidia Corp.` nele, significa que sua Placa Carrier A203 está em modo de recuperação forçada e você pode prosseguir para as operações subsequentes.

O ID depende dos módulos na placa carrier e as informações são exibidas conforme abaixo:

- Para Jetson Nano: **0955:7f21 NVidia Corp**
- Para Jetson Xavier NX: **0955:7e19 NVidia Corp**
- Para Jetson TX2 NX: **0955:7c18 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

## Gravando o JetPack OS via NVIDIA SDK Manager

Em seguida, passaremos pelo tutorial sobre como instalar o sistema via NVIDIA SDK Manager. O NVIDIA SDK Manager é uma ferramenta tudo‑em‑um que agrupa softwares de desenvolvimento e fornece uma solução de configuração de ambiente de desenvolvimento ponta a ponta para NVIDIA SDKs.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### Etapa 1.  Instalar o NVIDIA SDK Manager no PC host Linux

Precisamos abrir o navegador no PC host Linux e <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>baixar o NVIDIA SDK Manager</span></a> do site oficial da NVIDIA.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack1.png" /></div>

### Etapa 2.  Abrir o NVIDIA SDK Manager e fazer login

Na tela do PC host Linux, podemos clicar com o botão direito do mouse e abrir um Terminal. Em seguida, podemos digitar o comando abaixo para iniciar o SDK Manager:

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

Na primeira vez que você usar o NVIDIA SDK Manager, uma página da web será exibida solicitando que você faça login com sua conta NVIDIA registrada anteriormente.

### Etapa 3.  Selecionar o dispositivo de destino

Depois de fazer login, você será levado para a primeira tela, onde está o primeiro passo da instalação. Como já conectamos a placa, aparecerá uma janela para você selecionar o dispositivo de hardware.

O exemplo aqui está equipado com o **módulo NVIDIA Jetson Nano 4GB**, então podemos escolher o primeiro.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

Há mais opções para você escolher na primeira tela:

- O **Jetson** no painel Product Category precisa ser selecionado.
- No painel Hardware Configuration, recomendamos que você **não selecione Host Machine**. Isso levará mais tempo para instalar os componentes NVIDIA no seu host Ubuntu atual. Você pode escolhê-lo se precisar.
- No painel Target Operating System, podemos selecionar diferentes **sistemas operacionais** e **versões do JetPack**. Mas tenha cuidado com a versão do JetPack, módulos diferentes podem suportar tipos diferentes de JetPack. Recomendamos "JetPack 4.6.1" aqui.
- Em Additional SDKs, como o espaço de armazenamento do eMMC é de apenas 16GB, ele ficará sem memória se instalarmos o DeepStream aqui.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Clique em Continue para prosseguir para a próxima etapa.

### Etapa 4.  Revisar os componentes desejados

Em **Details and License**, você pode expandir os painéis de componentes do host e de componentes de destino para revisar os componentes que serão instalados no seu sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

Se você só precisa instalar o sistema, pode desmarcar o componente SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!Tip
    Ao escolher quais componentes instalar, talvez você queira ficar de olho na capacidade utilizada. O tamanho do eMMC integrado é de apenas 16GB, aloque e utilize esse espaço com sabedoria de acordo com suas necessidades reais.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
    Após testes reais, restam apenas cerca de 500MB de espaço no eMMC depois de instalar o conjunto completo de componentes do SDK.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
    Se você quiser verificar como resolver o problema de capacidade insuficiente, consulte a seção [Troubleshooting](https://wiki.seeedstudio.com/pt-br/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space).

Se você quiser que o SDK Manager faça o download de todos os arquivos para um local diferente do caminho padrão, vá para Download & Install Options localizado na parte inferior da tela e selecione o caminho que deseja usar.

E como a placa-carregadora A203 requer uma unidade flash, certifique-se de marcar primeiro a caixa **Download now. Install later.** para fazer o download do sistema, mas não instalá‑lo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/60.png" /></div>

Selecione Continue para prosseguir para a próxima etapa.

Neste ponto, o sistema começará a ser baixado para o caminho de sua escolha, então podemos aproveitar esse tempo para preparar o driver.

### Etapa 5. Escolher os Drivers Adequados

Agora, também precisamos instalar o driver para garantir que cada componente na placa esteja funcionando. Primeiro, precisamos escolher os arquivos do driver no host Ubuntu de acordo com a placa-carregadora e o módulo.

<table align="center">
  <tbody><tr>
      <th align="center">Placa-carregadora</th>
      <th align="center">Módulo Jetson</th>  
      <th align="center">Versão do JetPack</th>
      <th align="center">Versão do L4T</th>
      <th align="center">Endereço para Download</th>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Nano eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_nano.zip">Download</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_nx.zip">Download</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX SD</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_nx_devkit.zip">Download</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson TX2NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_tx2nx.zip">Download</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">5.0.2</td>
      <td align="center">35.1.0</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/A203_V.2/203_jp5.0.2.zip">Download</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">5.1.4</td>
      <td align="center">35.6.0</td>
      <td align="center"><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETrn1ItMYHVPmWPvDgMyXbABcpzAgQHQpgwf5CFecVDscA?e=gHOJ4T">Download</a></td>
    </tr>
  </tbody>
</table>

!!!Note
 Existem dois drivers JetPack 5.0.2 para A203 incluídos nos arquivos baixados. Ambos funcionam bem, exceto que um deles é compatível com a **câmera IMX-219** e o outro é compatível com a **câmera IMX-477**.

### Etapa 6. Descompactar o Driver na pasta do sistema

!!!Attention
 Atenção, certifique‑se de que o SDK Manager concluiu o download do sistema antes de prosseguir com esta etapa!

No PC host Linux, precisamos substituir alguns arquivos da imagem oficial pelos arquivos do pacote de driver baixado. Como estamos usando o SDK Manager aqui, a posição (caminho) da imagem oficial é:

`/home/<username>/nvidia/nvidia_sdk/JetPack_<version num>_Linux_<board name>_TARGETS/Linux_for_Tegra`

### Substituir os Arquivos

!!!Attention
 Antes de substituir os arquivos, você pode optar por fazer um backup do arquivo `.dtb` que será substituído na pasta `kernel` e salvá‑lo temporariamente em outro caminho, para que possa restaurar o download oficial a qualquer momento.

Podemos arrastar o arquivo para dentro do arquivo oficial:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A20X/12.png" /></div>

Ou podemos executar o seguinte comando para substituir os arquivos:

```sh
cp -a -f ${Drive package kernel path} ${Officially unpacked Linux_for_Tegra path}
```

!!!Note
    `${}` é o uso de variáveis de ambiente.
 `${Drive package kernel path}` indica o caminho completo para a pasta da imagem do kernel
 `${Officially unpacked Linux_for_Tegra path}` indica o caminho completo para a pasta Linux_for_Tegra fornecida oficialmente após a extração do pacote zip L4T.

### Etapa 7. Instalando o sistema

Como escolhemos instalar o sistema mais tarde anteriormente, precisaremos refazer as **etapas 3 a 4** neste momento, o que instalará o sistema no A203 com os arquivos de driver já substituídos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/61.png" /></div>

Antes de a instalação começar, o SDK Manager solicita que você insira a sua senha `sudo`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

O SDK Manager oferece duas opções para colocar o seu alvo Jetson em Force Recovery Mode. Nós entendemos a operação da Jetson-202 Carrier Board para entrar em Force Recovery Mode e já estivemos em Force Recovery Mode nas etapas anteriores. Portanto, selecionamos `Manual setup: set the target to Force Recovery Mode via manual operations`.

Você também pode escolher se deseja pré-configurar a configuração OEM.

- **Pre-Config**: O SDK Manager fará o flash do alvo com a configuração predefinida, e não será necessário concluir o System Configuration Wizard após o flash.
- **Runtime**: Nenhuma configuração padrão é definida no alvo, e você precisará concluir manualmente o System Configuration Wizard após o flash.

Aqui, selecionamos o **Pre-Config** padrão.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

Depois disso, insira o nome e a senha do novo sistema Jetson na parte inferior, por favor, memorize‑os.

Quando estiver tudo pronto, clique em `Flash` para continuar.

A tela mostra o progresso do download e da instalação do software. Aguarde pacientemente até que a instalação seja concluída.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### (Opcional) Etapa 7. Instalar os componentes do SDK

Se você marcou a instalação do componente na **etapa 4** anterior, precisará passar por esta etapa.

Após alguns instantes, você verá uma nova janela aparecer no NVIDIA SDK Manager, informando que é necessário conectar‑se ao dispositivo via endereço IP. Isso significa que o sistema já foi instalado e a instalação dos componentes será iniciada.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

Neste caso, podemos **puxar o jumper** e reiniciar a placa. Em seguida, precisamos conectar a placa a um monitor via HDMI, inserir a senha que você digitou na **etapa 4** e fazer login na interface principal.

Neste ponto, você precisa conectar a placa à mesma LAN que o PC host Linux e determinar o **endereço IP** do Jetson usando o comando `ifconfig`.

Volte para o PC host Linux e insira o endereço IP que você acabou de obter. O NVIDIA SDK Manager tentará se conectar ao dispositivo Jetson e prosseguirá para concluir a instalação dos próximos componentes do SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

Quando você vir a seguinte janela aparecer, a instalação terá sido concluída. Mas ainda precisamos instalar o driver, portanto devemos manter a placa em **Force Recovery Mode**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

Após o flash você poderá utilizar plenamente a placa.

## Gravando o JetPack OS via Linha de Comando

Graças à liberdade de personalizar o BSP (NVIDIA Linux Driver Package), gravar o JetPack OS via linha de comando pode ser muito fácil para usuários com conhecimento em Linux.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### Etapa 1. Baixar o NVIDIA Linux Driver Package adequado

No **PC host Linux**, precisamos abrir um navegador e ir para o <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. Primeiro devemos verificar se a versão do Jetson Linux é compatível.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png" /></div>

Depois de encontrar a versão adequada, clique para ir para a página de download. Encontre e clique em "L4T Driver Package (BSP)" e "Sample Root Filesystem" para baixar os arquivos de driver. Os nomes dos arquivos são semelhantes a `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` e `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

Como exemplo, escolhemos a versão NVIDIA L4T 32.7.1, pois ela está incluída como parte do JetPack4.6.1 e oferece suporte ao módulo Jetson Nano. Os nomes dos arquivos:

- Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
- Jetson-210_Linux_R32.7.2_aarch64.tbz2

### Etapa 2. Descompactar os Arquivos de Pacote e Montar o Rootfs via Linha de Comando

No PC host Linux, devemos encontrar uma pasta e armazenar os arquivos de pacote que baixamos antes. Em seguida, abra uma janela de linha de comando (Terminal) na pasta e use a linha de comando abaixo para descompactar os arquivos e montar o rootfs:

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
```

!!!Note
    `${}` é onde você coloca os nomes dos arquivos.

*No exemplo de **NVIDIA L4T 32.7.1**, os arquivos baixados são armazenados em `/Desktop/L4T_Drivers`, então, no caminho '/Desktop/L4T_Drivers', abrimos a janela de linha de comando (Terminal) e executamos o seguinte comando.

```sh
tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
```

### Etapa 3. Escolher os Drivers Adequados

Depois de descompactar o pacote, também precisamos instalar o driver para garantir que cada componente na placa esteja funcionando. Primeiro precisamos escolher os arquivos de driver no host Ubuntu de acordo com a carrier board e o módulo.

<table align="center">
  <tbody><tr>
      <th align="center">Carrier Board</th>
      <th align="center">Módulo Jetson</th>  
      <th align="center">Versão do JetPack</th>
      <th align="center">Versão do L4T</th>
      <th align="center">Endereço de Download</th>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Nano eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_nano.zip">Download</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_nx.zip">Download</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX SD</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_nx_devkit.zip">Download</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson TX2NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_tx2nx.zip">Download</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson TX2NX eMMC</td>
      <td align="center">4.6.6</td>
      <td align="center">32.7.6</td>
      <td align="center"><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQmiemIe-7tIjZmUDZ85E8sB81pOtZIyBe9WvdzzE3kPyA?e=8V7Sxt">Download</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">5.1.4</td>
      <td align="center">35.6.0</td>
      <td align="center"><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZY6h_VrBrBFhyaMpOGVX3oBDH0eeWQfIk15UB6uI_Ujsg?e=qVCggN">Download</a></td>
    </tr>
  </tbody>
</table>

:::note

 Existem dois drivers JetPack 5.0.2 para A203 incluídos nos arquivos baixados. Ambos funcionam bem, exceto que um deles oferece suporte à **câmera IMX-219** e o outro oferece suporte à **câmera IMX-477**.
:::

### Etapa 4. Descompactar o Driver no arquivo

Podemos arrastar o arquivo para o oficial:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A20X/12.png" /></div>

Ou podemos executar o seguinte comando para substituir os arquivos:

```sh
cp -a -f ${Drive package kernel path} ${Officially unpacked Linux_for_Tegra path}
```

!!!Note
    `${}` é o uso de variáveis de ambiente.
 `${Drive package kernel path}` indica o caminho completo para a pasta da imagem do kernel
 `${Officially unpacked Linux_for_Tegra path}` indica o caminho completo para a pasta oficial Linux_for_Tegra fornecida após a extração do pacote zip L4T.

### Etapa 5.  Gravar o Sistema na Placa

No exemplo usamos o módulo NVIDIA Jetson Nano e podemos gravar o sistema diretamente na placa executando o seguinte comando:

```sh
sudo ./apply_binaries.sh
sudo ./flash.sh ${BOARD} mmcblk0p1
```

!!!Note
    `${BOARD}` é o uso de variáveis de ambiente, e a informação nele deve ser o nome do seu módulo na carrier board. Você pode verificar <a href="https://files.seeedstudio.com/wiki/A20X/6.png" target="_blank"><span>aqui</span></a> para obter todas as informações.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

!!!Tip
    Gravar o L4T leva cerca de 10 minutos, ou mais em um computador host lento.

## Solução de Problemas

### Solução de problemas de instalação com o NVIDIA SDK Manager

Existem muitas causas para vários erros de instalação. Abaixo está uma lista de verificação de problemas comuns de instalação, que pode ajudar você a se recuperar de uma instalação com falha.

1. Revise a tabela de resumo para identificar qual componente falhou.

    a. Expanda o grupo com o status "Error".

    b. Quando você encontrar o componente com falha, clique no ícone de detalhes à direita de Install Error para ser redirecionado para a aba Terminal, que exibirá o erro exato.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. Se o erro estiver relacionado a um problema de ambiente, como um repositório apt corrompido ou pré-requisito ausente, tente corrigir isso manualmente e então clique no botão Retry Failed Items.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. Repetir a instalação também está disponível de duas outras maneiras:

    a. Em **Flashing to eMMC with SDK Manager -- Step 3**, use o botão Repair/Uninstall para ir até a página Manage NVIDIA SDKs. Se necessário, expanda o SDK que está com o status "Broken" e clique em Repair para a parte relevante (Host ou Target).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. Em **Flashing to eMMC with SDK Manager -- Step 3**, selecione o SDK necessário e execute novamente a instalação.

5. Por fim, tente desinstalar e reinstalar o SDK relevante.

### Solução de problemas de instalação usando a linha de comando

O método de instalação pela linha de comando é relativamente simples e costuma ser propenso a erros em cenários em que o modo de recuperação forçada é usado.

Se você encontrar o erro mostrado abaixo em **Flashing to eMMC with command-line -- Step 2**, provavelmente não conseguiu colocar a Carrier Board em modo de recuperação forçada. Por favor, preste atenção especial: não entre no modo de recuperação forçada com a Carrier Board ligada, pois isso não é válido.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

Se você não conseguir entrar no sistema em **Flashing to eMMC with command-line -- Step 3** e ficar preso na linha de comando de exibição de inicialização, você provavelmente não saiu do modo de recuperação forçada. Da mesma forma, não é válido desligar o jumper para sair do modo de recuperação forçada enquanto a Carrier Board estiver ligada, tudo isso precisa ser feito enquanto ela estiver desligada.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

!!!Note
    Se for necessário mais espaço de armazenamento, podemos usar um cartão SD para expandir a capacidade ou gravar o sistema no cartão SD. Você pode consultar nossa solução recomendada [Flash System on SD card](https://wiki.seeedstudio.com/pt-br/J101_Enable_SD_Card/)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
