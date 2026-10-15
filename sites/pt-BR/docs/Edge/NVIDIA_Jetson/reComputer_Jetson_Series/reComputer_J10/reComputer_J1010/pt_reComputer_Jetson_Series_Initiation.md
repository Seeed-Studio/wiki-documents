---
description: Introdução ao reComputer para Jetson
title: Introdução ao reComputer para Jetson
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_Jetson_Series_Initiation
last_update:
  date: 01/04/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-01-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reComputer_Jetson_Series_Initiation/
---

# Introdução ao reComputer para Jetson

Todos os reComputer para Jetson vêm com 16 GB de eMMC nos quais `ubuntu 18.04 LTS` e `NVIDIA JetPack 4.6` já estão instalados. Siga as instruções, conecte os periféricos e você poderá ligá‑lo e usá‑lo diretamente em poucos segundos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaijiss.png" alt="pir" width="auto" height="auto" /></p>

## 1. Conectar periféricos

Conecte o host reComputer a um teclado e mouse USB e conecte‑o ao monitor por meio da porta HDMI ou da porta DP (apenas para a placa‑mãe A206).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji1.jpg" alt="pir" width={600} height="auto" /></p>

:::note
Para o host reComputer com interface HDMI e DP, embora ele tenha duas portas de saída de vídeo, não oferece suporte a saída em tela dupla, o que significa que apenas uma interface de saída de vídeo pode ser usada ao mesmo tempo.
:::

## 2. Ligar

Após conectar os periféricos, conecte a alimentação ao host reComputer.

- A fonte de alimentação do [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) é feita pela interface Type‑C, e a posição da alimentação próxima à interface HDMI é mostrada na figura abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/dc1.png" alt="pir" width={600} height="auto" /></p>

:::note
O [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) possui uma porta Type‑C em ambos os lados, sendo que a porta à direita, próxima à porta LAN, é a porta de transmissão de dados. É estritamente proibido conectar a fonte de alimentação Type‑C à porta de transmissão de dados à direita, pois isso pode causar danos aos componentes.
:::

- O [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html), o [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html) e o [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html) são alimentados pela interface DC que fica próxima à interface HDMI.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/dc2.png" alt="pir" width={600} height="auto" /></p>

Após conectar à fonte de alimentação, o host reComputer será ligado automaticamente.

## 3. Configuração inicial

O novo reComputer já vem com o sistema gravado. Mas, antes de podermos usá‑lo, ainda são necessárias algumas configurações iniciais essenciais.

### Passo 1: Aguardar a inicialização

Depois de ligar, a primeira coisa que você verá será o grande ícone da NVIDIA exibido no meio da tela. Antes de entrar na página de configuração, você pode notar que o reComputer reinicia automaticamente duas vezes; esse processo leva cerca de um minuto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji5.jpg" alt="pir" width={600} height="auto" /></p>

### Passo 2: Revisar e aceitar a licença

Na página de configuração, primeiro será solicitado que você verifique a licença e selecione "**I accept the terms of these licenses**" para concordar e então prosseguir para o próximo passo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji6.jpg" alt="pir" width={600} height="auto" /></p>

### Passo 3：Escolher idioma do sistema e layout do teclado

Depois de clicar no botão "Continue", a próxima página solicitará que você selecione o idioma do sistema e o layout do teclado. Você pode selecioná‑los de acordo com suas necessidades reais.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji7.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji8.jpg" alt="pir" width={600} height="auto" /></p>

### Passo 4: Conectar à rede

Há duas maneiras de conectar o reComputer à Internet. Uma é conectar diretamente com um cabo de rede e a outra é conectar à Internet via Wi‑Fi (é necessário um módulo sem fio). Se você não precisar de acesso à Internet para atualizações de software, pode optar por não se conectar à Internet neste passo e seguir para o próximo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji9.jpg" alt="pir" width={600} height="auto" /></p>

### Passo 5: Configurar informações de usuário e senha

Na próxima página, será solicitado que você insira seu nome de usuário e senha. Você precisará se lembrar da senha de inicialização, pois ela será necessária para iniciar o reComputer posteriormente.

Se você achar tedioso digitar sua senha toda vez que iniciar o reComputer e, ao mesmo tempo, quiser garantir que ninguém mais possa usá‑lo, você pode selecionar a opção "Require my password to log in" abaixo, embora não recomendemos isso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji10.jpg" alt="pir" width={600} height="auto" /></p>

### Passo 6: Selecionar a tensão de alimentação

Por fim, você escolherá a tensão de alimentação enquanto o reComputer estiver operando.

- O [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) e o [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) são ambos equipados com módulo Jetson Nano. Recomendamos fortemente o modo **MAXN**, para garantir que seu reComputer opere normalmente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji11.jpg" alt="pir" width={600} height="auto" /></p>

- O [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html) e o [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html) são ambos equipados com módulo Jetson Xavier NX, que fornece uma variedade de opções de potência de saída da fonte de alimentação. O modo padrão é 10 W, como `MODE_10W_DESKTOP - (Default)` que você pode ver aqui:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji12.jpg" alt="pir" width={600} height="auto" /></p>

:::note
A tabela a seguir mostra os modos de energia predefinidos da NVIDIA e os limites de uso de recursos do módulo associados.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/21.jpg" /></div>
:::

Após concluir as etapas acima, precisamos aguardar de 1 a 2 minutos para que o reComputer faça a configuração final.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/46.jpg" /></div>

## 4. Começar

Depois que o reComputer concluir a configuração inicial, ele será reiniciado automaticamente. Após isso, ele entrará na área de trabalho do sistema, como mostrado na figura abaixo. Isso indica que o sistema está pronto para uso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji4.jpg" alt="pir" width={800} height="auto" /></p>

Como o produto inclui uma eMMC integrada de 16 GB na qual já foram instalados `ubuntu 18.04 LTS` e `NVIDIA JetPack 4.6`, o espaço livre restante para o usuário é de cerca de 2 GB. A figura a seguir mostra o resultado após usar o comando de espaço em disco no terminal:

```shell
seeed@seeed-desktop:~$ df -hl
Filesystem      Size  Used Avail Use% Mounted on
/dev/mmcblk0p1   14G   12G  2.0G  86% /
none            3.5G     0  3.5G   0% /dev
tmpfs           3.8G   75M  3.8G   2% /dev/shm
tmpfs           3.8G   22M  3.8G   1% /run
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
tmpfs           3.8G     0  3.8G   0% /sys/fs/cgroup
tmpfs           777M  128K  777M   1% /run/user/1000
seeed@seeed-desktop:~$
```

## Instalar sistema NVIDIA no reComputer

Se o seu dispositivo reComputer travar e você quiser reinstalar o sistema NVIDIA, aqui fornecemos o wiki sobre como instalar o sistema NVIDIA no reComputer. Os wikis fornecidos incluem as placas‑mãe A20X e a placa‑mãe reComputer J1010:

- [Instalar sistema NVIDIA baseado na placa‑mãe A20X](https://wiki.seeedstudio.com/pt-br/reComputer_J2021_J202_Flash_Jetpack/)
- [Instalar sistema NVIDIA baseado na placa‑mãe reComputer J1010](https://wiki.seeedstudio.com/pt-br/reComputer_J1010_J101_Flash_Jetpack/)

## Solução de problemas

### P1: O espaço restante na eMMC do reComputer recebido é de apenas cerca de 2 GB. Como posso resolver o problema de espaço insuficiente?

Atualmente oferecemos três maneiras de lidar com essa situação específica, e você pode escolher a solução adequada com base na situação real.

**Opção 1.** Redistribuir o sistema para dispositivos de armazenamento externos

Se você ainda não iniciou um projeto com o reComputer, pode considerar usar esta opção para redistribuir o novo sistema em um dispositivo de armazenamento com capacidade suficiente.

- Em geral, há duas maneiras de instalar um sistema para o reComputer, a primeira é usar o **NVIDIA SDK Manager**.

Se você estiver em um **reComputer J2011** ou **reComputer J2012**, no **passo 12** de [Flashing to eMMC with SDK Manager](/pt-br/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line), você pode expandir a capacidade mudando o local da gravação do sistema.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/52.png" /></div>

:::tip
Esse método não é aplicável ao módulo Jetson Nano.
:::

- Em geral, há duas maneiras de instalar um sistema para o reComputer, a segunda é usar as **linhas de comando**.

- Se você estiver usando uma **placa‑mãe A20X**, o método para instalar o sistema usando a linha de comando está em [Flashing to eMMC with command-line](/pt-br/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line).

- Se você estiver usando a **placa‑mãe reComputer J1010**, use então a linha de comando para instalar o sistema em [Flashing to eMMC with command-line](/pt-br/reComputer_J1010_J101_Flash_Jetpack#flashing-jetpack-os-via-command-line).

Esses dois métodos basicamente concluem a instalação do sistema usando o seguinte comando.

```sh
sudo ./flash.sh [options] <board> <rootdev>
```

Onde:

1. `[options]` é uma ou mais opções de linha de comando. Todas as opções são opcionais. Consulte [Flashing Script Usage](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/SD/FlashingSupport.html#flashing-script-usage) para obter informações sobre as opções.

2. `<board>` especifica a configuração a ser aplicada ao dispositivo que será gravado. Os valores estão listados na tabela em [Jetson Modules and Configurations](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart-jetsonmodulesandconfigurations-configurations), no tópico [Quick Start](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart). `flash.sh` obtém a configuração a partir de um arquivo de configuração chamado `<board>.conf`.

3. `<rootdev>` especifica o tipo de dispositivo a ser gravado. Use o valor **mmcblk0p1** para gravar um dispositivo de armazenamento local (eMMC ou cartão SD, dependendo da plataforma), em contraste com um servidor NFS, por exemplo.

Como você pode ver pela explicação acima, se quisermos instalar o sistema em um armazenamento externo, podemos fazê‑lo alterando a opção `<rootdev>`.

Para uma partição em um dispositivo de armazenamento USB conectado ao dispositivo reComputer, insira este comando:

```sh
sudo ./flash.sh <board> sda<x>
```

Para uma partição em um dispositivo de armazenamento NVMe conectado ao dispositivo reComputer, insira este comando:

```sh
sudo ./flash.sh <board> nvme0n1p<x>
```

`<x>` é um número que especifica a posição da partição APP no dispositivo de armazenamento, por exemplo, `sda1` para um dispositivo USB ou `nvme0n1p1` para um dispositivo de armazenamento NVMe.

**Opção 2.** Remover componentes JetPack desnecessários para aumentar o espaço da eMMC.

NVIDIA JetPack SDK é a solução mais abrangente para construir aplicações de IA aceleradas ponta a ponta. Todos os módulos e kits de desenvolvimento Jetson são suportados pelo JetPack SDK.

O JetPack SDK inclui o Jetson Linux Driver Package (L4T) com sistema operacional Linux e bibliotecas e APIs CUDA-X aceleradas para Deep Learning, Visão Computacional, Computação Acelerada e Multimídia. Ele também inclui exemplos, documentação e ferramentas de desenvolvimento tanto para o computador host quanto para o kit de desenvolvimento, e oferece suporte a SDKs de nível mais alto, como DeepStream para análise de vídeo em streaming e Isaac para robótica.

[Esta tabela](https://docs.nvidia.com/jetson/jetpack/install-jetpack/index.html#jetpack-ota-packages) lista todos os componentes incluídos no JetPack 4.6.

<table align="center">
  <tbody><tr>
      <th align="center">Grupo de Componentes</th>
      <th colSpan={2} align="center" valign="middle">Pacotes</th>
    </tr>
    <tr>
      <th align="center" valign="middle">CUDA Toolkit para L4T</th>
      <td align="center">cuda <br /> cuda-11-4 <br /> cuda-cccl-11-4 <br /> cuda-command-line-tools-11-4 <br /> cuda-compiler-11-4 <br /> cuda-cudart-11-4 <br /> cuda-cudart-dev-11-4 <br /> cuda-cuobjdump-11-4 <br /> cuda-cupti-11-4 <br /> cuda-cupti-dev-11-4 <br /> cuda-cuxxfilt-11-4 <br /> cuda-documentation-11-4 <br /> cuda-driver-dev-11-4 <br /> cuda-gdb-11-4 <br /> cuda-gdb-src-11-4 <br /> cuda-libraries-11-4 <br /> cuda-libraries-dev-11-4 <br /> cuda-minimal-build-11-4 <br /> cuda-nvcc-11-4 <br /> cuda-nvdisasm-11-4 <br /> cuda-nvml-dev-11-4 <br /> cuda-nvprof-11-4 <br /> cuda-nvprune-11-4 <br /> cuda-nvrtc-11-4 <br /> cuda-nvrtc-dev-11-4 <br /> cuda-nvtx-11-4</td>
      <td align="center">cuda-runtime-11-4 <br /> cuda-samples-11-4 <br /> cuda-sanitizer-11-4 <br /> cuda-toolkit-11-4 <br /> cuda-toolkit-11-4-config-common <br /> cuda-toolkit-11-config-common <br /> cuda-toolkit-config-common <br /> cuda-tools-11-4 <br /> cuda-visual-tools-11-4 <br /> libcublas-11-4 <br /> libcublas-dev-11-4 <br /> libcudla-11-4 <br /> libcudla-dev-11-4 <br /> libcufft-11-4 <br /> libcufft-dev-11-4 <br /> libcurand-11-4 <br /> libcurand-dev-11-4 <br /> libcusolver-11-4 <br /> libcusolver-dev-11-4 <br /> libcusparse-11-4 <br /> libcusparse-dev-11-4 <br /> libnpp-11-4 <br /> libnpp-dev-11-4</td>
    </tr>
    <tr>
      <th align="center">cuDNN</th>
      <td align="center">libcudnn8 <br /> libcudnn8-dev</td>
      <td align="center">libcudnn8-samples</td>
    </tr>
    <tr>
      <th align="center">TensorRT</th>
      <td align="center">graphsurgeon-tf <br /> libnvinfer-bin <br /> libnvinfer-dev <br /> libnvinfer-doc <br /> libnvinfer-plugin-dev <br /> libnvinfer-plugin8 <br /> libnvinfer-samples <br /> libnvinfer8</td>
      <td align="center">libnvonnxparsers-dev <br /> libnvonnxparsers8 <br /> libnvparsers-dev <br /> libnvparsers8 <br /> python3-libnvinfer <br /> python3-libnvinfer-dev <br /> tensorrt <br /> uff-converter-tf</td>
    </tr>
    <tr>
      <th align="center">OpenCV</th>
      <td align="center">libopencv <br /> libopencv-dev <br /> opencv-licenses</td>
      <td align="center">libopencv-python <br /> libopencv-samples</td>
    </tr>
    <tr>
      <th align="center">VPI</th>
      <td align="center">libnvvpi2 <br /> vpi2-dev <br /> python-vpi2</td>
      <td align="center">python3.9-vpi2 <br /> vpi2-samples <br /> vpi2-demos</td>
    </tr>
    <tr>
      <th align="center">Runtime de contêiner NVIDIA com integração Docker</th>
      <td align="center">libnvidia-container0 <br /> libnvidia-container1 <br /> libnvidia-container-tools</td>
      <td align="center">nvidia-container-toolkit <br /> nvidia-container-runtime <br /> nvidia-docker2</td>
    </tr>
    <tr>
      <th align="center">Multimedia API</th>
      <td colSpan={2} align="center">nvidia-l4t-jetson-multimedia-api</td>
    </tr>
  </tbody></table>

O JetPack SDK contém muito conteúdo, mas não é algo que todos os desenvolvedores precisarão usar. Portanto, uma das boas opções é removê‑los seletivamente para obter mais espaço de armazenamento.

Podemos visualizar informações sobre o JetPack instalado no reComputer Jetson com o seguinte comando.

```sh
sudo apt-cache show nvidia-jetpack
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/50.png" /></div>

Com este comando, você pode rapidamente saber o conteúdo dos componentes instalados no JetPack, como CUDA, openCV, etc.

Para obter informações mais detalhadas, você pode usar o seguinte comando para descobrir todo o software atualmente instalado pelo reComputer e suas informações de descrição.

```sh
dpkg-query -l
```

Em seguida, você pode remover seletivamente o conteúdo de que não precisa, de acordo com suas necessidades reais e as informações de descrição do componente. O comando para excluir é o seguinte.

```sh
sudo apt autoremove ${packagesname}
```

A variável de ambiente `${packagesname}` indica o nome do pacote de componente que você deseja remover. Se quiser remover todos os pacotes prefixados por um determinado nome, você pode adicionar `*` a esse prefixo para indicar isso.

Como exemplo, se quisermos remover todos os componentes relacionados ao **CUDA**, então podemos usar o seguinte comando.

```sh
sudo apt autoremove cuda*
```

Depois de liberar o conteúdo do componente CUDA, você pode ver que a capacidade restante da eMMC também ficará maior.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/51.png" /></div>

O mesmo se aplica a outros componentes do JetPack.

**Opção 3.** Expansão de capacidade por meio de dispositivos de armazenamento externos.

Você pode escolher esta opção se estiver usando o reComputer normalmente há algum tempo e não quiser destruir o ambiente de sistema existente para concluir a solução de expansão.

Nós já temos uma wiki de expansão bem desenvolvida [Memory Expansion for reComputer series](https://wiki.seeedstudio.com/pt-br/reComputer_Jetson_Memory_Expansion/).

Vale ressaltar que qualquer operação de expansão é perigosa e esperamos que você seja proativo em **fazer backups** do seu sistema antes de que tudo comece.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
