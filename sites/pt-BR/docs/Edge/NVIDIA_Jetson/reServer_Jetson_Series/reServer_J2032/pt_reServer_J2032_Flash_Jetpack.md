---
description: reServer J2032
title: reServer J2032 Gravar o sistema operacional NVIDIA JetPack™
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reServer_J2032_Flash_Jetpack
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reServer_J2032_Flash_Jetpack/
---

<!-- ---
name: reServer 2032 Flash Jetpack
category: reServer 2032 Flash Jetpack
bzurl: 
wikiurl: 
sku: 
--- -->

# Introdução

Neste wiki, mostraremos como gravar o sistema operacional NVIDIA JetPack no módulo Jetson Xavier NX com o reServer J2032.

Aqui está a visão geral da placa carrier reServer J2030 para referência:  

<div align="center">
  <p style={{fontSize: 'x-large', fontWeight: 'bold'}}>
    Visão geral da placa carrier reServer J2030
  </p><table>
    <tbody><tr>
      </tr>
      <tr>
        <td align="center">Frente</td>
        <td align="center">Traseira</td>
      </tr>
      <tr>
        <td align="center">
          <img width={700} src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ2032hardware1.png" alt />
        </td>
        <td align="center">
          <img width={700} src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ2032hardware2.png" alt />
        </td>
      </tr>
    </tbody></table>
</div>

## Primeiros Passos

Podemos usar o **NVIDIA SDK Manager** para gravar o sistema, ou podemos facilmente fazer isso usando o **Script de Linha de Comando**. Para pessoas que têm base de conhecimento em Linux, recomendamos fortemente o uso do **Script de Linha de Comando**, que fornece muito mais funcionalidades.

- [Gravar o JetPack OS via NVIDIA SDK Manager e terminal Linux](#gravar-o-jetpack-os-via-nvidia-sdk-manager)
- [Gravar o JetPack OS via terminal Linux](#gravar-o-jetpack-os-via-linha-de-comando)

Ainda há algumas preparações necessárias:

### Preparação de Software

- <a href="https://developer.nvidia.com/login" target="_blank"><span>Conta NVIDIA</span></a>
- Computador Host Linux com sistema Ubuntu 18.04 (ou superior)

!!!note
 Neste tutorial, usaremos um sistema baseado em Ubuntu 18.04 LTS para concluir a instalação.

### Preparação de Hardware (Modo de Recuperação Forçada)

Antes de podermos prosseguir para as etapas de instalação, precisamos garantir que o reServer J2032 esteja colocado em modo de recuperação forçada.

**Passo 1.** Antes de começar, você precisa desconectar a alimentação do reServer J2032.

**Passo 2.** Para entrar no modo de recuperação, você precisa conectar os pinos **FC REC** e **GND** usando jumpers. Os pinos podem ser localizados como mostrado abaixo:

<div align="center">
  <p style={{fontSize: 'x-large', fontWeight: 'bold'}}>
    Guia de Configuração do Jumper de Recuperação Forçada
  </p><table>
    <tbody><tr>
      </tr>
      <tr>
        <td align="center">
          <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reServerJ2032/force_recover.png" /></div>
        </td>
        <td align="center">
          <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/debugheader_REC.png" /></div>
          <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/j2032jumper.png" /></div>
        </td>
      </tr>
    </tbody></table>
</div>

**Passo 3.** Usando um cabo Type‑C, conecte o PC Host Linux à porta USB Type‑C `NX USB` (como mostrado na imagem abaixo) no reServer J2032, conecte o cabo DC de 12V/5A e pressione o botão liga/desliga na parte frontal para ligar a alimentação do reServer J2032.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/back_type_c.png" /></div>

<!-- !!!Attention
    Before wiring, please pay attention to the power connector and data connector, please do not connect the data connector directly to DC power. -->

**Passo 4.** Agora, no **computador Host (Ubuntu 18.04)** abra o `Terminal`, insira o comando `lsusb`. Quando o conteúdo retornado tiver `ID 0955:7e19 NVidia Corp.`, isso significa que o reServer J2032 está no modo de recuperação forçada e podemos prosseguir para o próximo passo.

- Para Jetson Xavier NX: **0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>

## Gravando o JetPack OS via NVIDIA SDK Manager

Em seguida, vamos seguir o tutorial sobre a instalação do sistema via NVIDIA SDK Manager. O NVIDIA SDK Manager é uma ferramenta tudo‑em‑um que reúne softwares de desenvolvimento e fornece uma solução de configuração de ambiente de desenvolvimento ponta a ponta para os SDKs da NVIDIA. Portanto, é recomendado para iniciantes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### Passo 1.  Instalar o NVIDIA SDK Manager no PC Host Linux

Precisamos abrir o navegador no PC Host Linux e <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>baixar o NVIDIA SDK Manager</span></a> do site oficial da NVIDIA.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png" /></div>

### Passo 2.  Abrir o NVIDIA SDK Manager e fazer login

Na tela do PC Host Linux, podemos clicar com o botão direito do mouse e abrir um `Terminal`. Em seguida, podemos digitar o comando abaixo para iniciar o SDK Manager:

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

Na primeira vez que você usar o NVIDIA SDK Manager, uma página da web aparecerá solicitando que você faça login com sua conta NVIDIA registrada anteriormente.

### Passo 3.  Selecionar o dispositivo de destino

Após o login, você será levado à primeira tela, onde ocorre o primeiro passo da instalação. Como já conectamos o reServer J2032, aparecerá uma janela para que você selecione o dispositivo de hardware.

O reServer J2032 está equipado com o **módulo NVIDIA Jetson NX**, então podemos escolher o primeiro.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

Há mais opções para você escolher na primeira tela:

- O **Jetson** no painel Product Category precisa ser selecionado.
- No painel Hardware Configuration, recomendamos que você **não selecione Host Machine**. Isso levará mais tempo para instalar os componentes NVIDIA no seu host Ubuntu atual. Você pode selecioná‑lo se precisar.
- No painel Target Operating System, podemos selecionar diferentes **sistemas operacionais** e **versões do JetPack**. Mas tenha cuidado com a versão do JetPack, pois diferentes módulos podem suportar tipos diferentes de JetPack. Recomendamos "JetPack 4.6.1" aqui.
- Em Additional SDKs, como o espaço de armazenamento do eMMC é de apenas 16GB, ele ficará sem memória se instalarmos o DeepStream aqui.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Clique em Continue para prosseguir para o próximo passo.

### Passo 4.  Revisar os componentes desejados

Em **Details and License**, você pode expandir os painéis de host components e target components para revisar os componentes que serão instalados no seu sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

Se você só precisa instalar o sistema, pode desmarcar o componente SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!Tip
    Ao escolher quais componentes instalar, você pode querer ficar de olho na capacidade utilizada. O tamanho do eMMC embutido é de apenas 16GB, portanto, aloque e utilize esse espaço com sabedoria de acordo com suas necessidades reais.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>

    Após testes práticos, resta apenas cerca de 500MB de espaço no eMMC depois de instalar o conjunto completo de componentes do SDK.

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>


    Se você quiser verificar como resolver o problema de capacidade insuficiente, consulte a seção [Troubleshooting](https://wiki.seeedstudio.com/pt-br/reComputer_Jetson_Series_Initiation/#q1-o-espaço-restante-no-emmc-no-recomputer-jetson-recebido-é-de-apenas-cerca-de-2gb-como-posso-resolver-o-problema-de-espaço-insuficiente).

Se você quiser que o SDK Manager baixe todos os arquivos para um local diferente do caminho padrão, vá para Download & Install Options localizada na parte inferior da tela e selecione o caminho que deseja usar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

Selecione Continue para prosseguir para o próximo passo.

### Passo 5. Instalar o sistema

Antes de a instalação começar, o SDK Manager solicita que você insira sua senha `sudo`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

Depois de um tempo, será solicitado que configure o novo sistema para o seu reServer J2032. Como forçamos manualmente a entrada no modo de recuperação, selecionamos `Manual setup: set the target to Force Recovery Mode via manual operations` aqui. Enquanto isso, escolhemos o **Pre-Config** padrão.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

Depois disso, precisamos inserir o nome e a senha do nosso novo sistema Jetson para o reServer J2032; isso é definido por você mesmo.

Quando estiver pronto, clique em `Flash` para continuar.

A tela mostra o progresso do download e da instalação do software. Aguarde pacientemente até que a instalação seja concluída.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### (Opcional) Passo 6. Instalar os componentes do SDK

Se você marcou a instalação do componente no **passo 4** anterior, precisará passar por esta etapa.

Depois de um momento, você verá uma nova janela aparecer no NVIDIA SDK Manager, informando que precisa se conectar ao seu dispositivo via endereço IP. Isso significa que o sistema já foi instalado e a instalação dos componentes será iniciada.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

Neste caso, podemos **remover o jumper** e reiniciar o reServer J2032. Em seguida, precisamos conectar o reServer J2032 a um monitor via HDMI/Display Port, inserir a senha que você digitou no **passo 4** e fazer login na interface principal.

Neste ponto, você precisa conectar o reServer J2032 à mesma LAN que o PC host Linux e determinar o **endereço IP** do Jetson usando o comando `ifconfig`.

Volte para o PC host Linux e insira o endereço IP que você acabou de obter. O NVIDIA SDK Manager tentará se conectar ao dispositivo Jetson e prosseguirá para concluir a instalação dos próximos componentes do SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

Quando você vir a janela a seguir aparecer, a instalação terá sido concluída. Você pode começar a usar o Jetson ou continuar a seguir as etapas abaixo para concluir algumas configurações básicas do seu novo sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

!!!Attention
    Certifique-se de desconectar o jumper e sair do modo de recuperação forçada antes de religar o sistema.

## Gravando o JetPack OS via Linha de Comando

Graças à liberdade para personalizar o BSP (NVIDIA Linux Driver Package), gravar o JetPack OS via linha de comando pode ser muito fácil para usuários com conhecimento em Linux.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### Etapa 1. Baixar o NVIDIA Linux Driver Package adequado

No **PC host Linux**, precisamos abrir um navegador e acessar o <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. Primeiro devemos verificar se a versão do Jetson Linux é compatível com o módulo Jetson do nosso reServer J2032.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/select_L4T.png" /></div>

Depois de encontrar a versão adequada, clique para ir para a página de download. Encontre e clique em "L4T Driver Package (BSP)" e "Sample Root Filesystem" para baixar os arquivos de driver. Os nomes dos arquivos são como `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` e `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/download_file.png" /></div>

Como exemplo, escolhemos a versão NVIDIA L4T 32.7.1, pois ela é incluída como parte do JetPack4.6.1 e oferece suporte ao módulo Jetson Nano. Os nomes dos arquivos:

- Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
- Jetson_Linux_R32.7.1_aarch64.tbz2

### Etapa 2. Descompactar os Pacotes e Montar o Rootfs via Linha de Comando

No PC host Linux, devemos encontrar uma pasta e armazenar nela os arquivos de pacote que baixamos antes. Em seguida, abra uma janela de linha de comando (Terminal) nessa pasta e use a linha de comando abaixo para descompactar os arquivos e montar o rootfs:

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

!!!Note
    `${}` é onde você coloca os nomes dos arquivos.

*Como exemplo do **NVIDIA L4T 32.7.1**, os arquivos baixados são armazenados em `/Desktop/L4T_Drivers`, então, no caminho '/Desktop/L4T_Drivers', abrimos a janela de linha de comando (Terminal) e executamos o seguinte comando.

```sh
tar xf Jetson_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

A saída deverá ser semelhante a:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

### Etapa 3. Gravar o Sistema no reComputer

Como já forçamos o reComputer J1020 ao modo de recuperação e o módulo é Jetson Nano, podemos gravar o sistema diretamente no reComputer executando o seguinte comando:

```sh
sudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

!!!Tip
    Gravar o L4T leva cerca de 10 minutos, ou mais em um computador host lento.

Neste momento, podemos remover o jumper e então ligar o reComputer novamente para usá-lo.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
