---
description: reComputerJ2021 | J202
title: Placa Carrier J202
keywords:
  - Edge
  - Jetson
  - reComputer JetPack™_OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_J2021_J202_Flash_Jetpack
sku: 102991695, 102991714, 110061402, 110061481
last_update:
  date: 08/27/2024
  author: Youjiang
no_comments: false
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reComputer_J2021_J202_Flash_Jetpack/
---

# Primeiros Passos com o reComputer J202

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/carrier_board-Photoroom.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/recomputer-j202-carrier-board-for-jetson-nano-xavier-nx-without-power-adapter-p-5435.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
  </a>
</div>

O reComputer J202 possui praticamente o mesmo design e função que a placa carrier NVIDIA® Jetson Xavier NX™, funciona perfeitamente com o módulo Jetson Nano/Xavier NX/TX2 NX e é composto por 4 portas USB 3.2 gen 2, M.2 key E para Wi‑Fi, M.2 Key M para SSD, RTC, CAN, Raspberry Pi GPIO de 40 pinos e assim por diante.

## Recursos

- **Perfeitamente Adequado:** Projetado para Jetson Nano/Xavier NX/TX2 NX (SODIMM de 260 pinos).
- **Periféricos Ricos:** Maior estabilidade de desempenho composta por portas USB 3.1 (4x), M.2 key E para Wi‑Fi, M.2 Key M para SSD, RTC, CAN, Raspberry Pi GPIO de 40 pinos e assim por diante.
- **Alta Versatilidade:** Adequado para aplicações gráficas de IA complexas.
- **Certificações Abrangentes:** inclui FCC, CE, RoHS.
- **Customização Flexível:** oferece serviços de alteração de módulos de acessórios, logotipo e modificação de interfaces de hardware com base no design original do J202.

:::note

Como o Jetson Nano possui apenas uma faixa PCIe, se o módulo usar o Jetson Nano para se conectar à placa carrier J202, ele só poderá selecionar o M.2 Key M para SSD.

:::

## Especificações

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <td colspan={2}>Armazenamento</td>
      <td>1x M.2 Key M</td>
    </tr>
    <tr>
      <td rowspan={2}>Rede</td>
      <td>Ethernet</td>
      <td>1x RJ-45 Gigabit Ethernet (10/100/1000M)</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E para módulo WiFi/Bluetooth</td>
    </tr>
    <tr>
      <td rowspan={7}>E/S</td>
      <td>USB</td>
      <td>4x USB 3.1 Type-A (10Gbps para Xavier NX, 5Gbps para Nano) <br/> 1x USB2.0 Type-C (Modo Dispositivo)</td>
    </tr>
    <tr>
      <td>Câmera</td>
      <td>2x CSI</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1x HDMI 2.1, 1x DP</td>
    </tr>
    <tr>
      <td>Ventoinha</td>
      <td>1x Conector de Ventoinha</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>1x CAN (Apenas para Nvidia Xavier Série)</td>
    </tr>
    <tr>
      <td>Porta Multifuncional</td>
      <td>1x Header de Expansão de 40 Pinos <br/> 1x Header de Controle e UART de 12 Pinos</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC de 2 pinos</td>
    </tr>
    <tr>
      <td colspan={2}>Alimentação</td>
      <td>DC 12V/5A</td>
    </tr>
    <tr>
      <td rowspan={2}>Mecânico</td>
      <td>Dimensões (L x P)</td>
      <td>100mm x 80mm</td>
    </tr>
    <tr>
      <td>Instalação</td>
      <td>Mesa, montagem em parede</td>
    </tr>
    <tr>
      <td colspan={2}>Temperatura de Operação</td>
      <td>10℃~60℃</td>
    </tr>
  </tbody>
</table>
</div>

## Visão Geral de Hardware

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/J202_1.jpg"/></div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/J202_2.jpg"/></div>

## Módulo Suportado

- [NVIDIA® Jetson Nano™ 4GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Nanotm-Module-1.html)
- [NVIDIA® Jetson Xavier™ NX 8GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Xaviertm-NX-Module-1.html)
- [NVIDIA® Jetson Xavier™ NX 16GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Xaviertm-NX-Module-16GB-1.html)

## Gravar o JetPack

:::danger
Gravar o JetPack apagará todos os dados do dispositivo. Prossiga com cautela.

Se você comprou o sistema completo em vez de apenas a placa carrier, ele virá pré-instalado com o sistema operacional JetPack, permitindo que você o inicialize e use diretamente. No entanto, você também pode seguir o tutorial abaixo para instalar um novo sistema operacional, se preferir.
:::

O conteúdo a seguir demonstrará como gravar o sistema JetPack 4.6.1 no J2021. Você pode se referir a este processo para gravar a versão desejada do JetPack em outro dispositivo.

:::info
Consulte [aqui](https://developer.nvidia.com/embedded/jetson-linux-archive) para determinar as versões de sistema suportadas para diferentes [módulos Jetson](#módulo-suportado).
:::

### Pré-requisitos

- **Computador Host** com **Ubuntu 18.04 OS ou Ubuntu 20.04 OS**
- reComputer J1020/J2021/J2022 ou placa carrier J202 + módulo Nvidia Jetson
- Fonte de Alimentação 9V-12V/5A
- Cabo USB Type-C
- Jumper ou fio Dupont Fêmea‑para‑Fêmea

### Entrar no Modo Force Recovery

Antes de podermos prosseguir para as etapas de instalação, precisamos garantir que nosso reComputer esteja no modo force recovery.

**Passo 1.** Antes de começar, você precisa desconectar a alimentação do reComputer.

**Passo 2.** Para entrar no modo recovery, você precisa conectar **FC REC** e **GND** usando jumpers.

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

**Passo 3.** Ligue o reComputer com o cabo DC 12V/5A à esquerda do reComputer e use um cabo Type-C para conectar o PC Host Linux à direita do reComputer.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack.png" /></div>

**Passo 4.** Na tela do PC host Linux, podemos clicar com o botão direito do mouse para abrir um Terminal e inserir o comando `lsusb`. Quando o conteúdo retornado tiver `ID 0955:xxxx NVidia Corp.` nele, significa que sua Placa Carrier J202 está em modo force recovery e você pode prosseguir para as operações subsequentes.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

:::note

- Para NVIDIA® Jetson Nano™: 0955:7f21 NVidia Corp
- Para NVIDIA® Jetson Xavier™ NX: 0955:7e19 NVidia Corp

:::

:::caution
A interface SPI no Jetson-Nano é multiplexada com GPIO por padrão e não está habilitada. Consulte [**este guia**](/pt-br/enable_spi_interface_on_jetsonnano) para obter instruções sobre como habilitá-la.
:::

### Gravar no Jetson

Existem duas maneiras opcionais de gravar o JetPack OS no reComputer J2021. Para iniciantes em NVIDIA Jetson, recomendamos fortemente o NVIDIA SDK Manager:

- [Gravar o JetPack OS via NVIDIA SDK Manage](#gravar-o-jetpack-os-via-nvidia-sdk-manager)
- [Gravar o JetPack OS via Linha de Comando](#gravar-no-emmc-com-linha-de-comando)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="SDK Manager" label="SDK Manager">

O NVIDIA SDK Manager é uma ferramenta tudo‑em‑um que agrupa softwares de desenvolvimento e fornece uma solução de configuração de ambiente de desenvolvimento de ponta a ponta para SDKs da NVIDIA. Portanto, é recomendado para iniciantes.

:::note
 Neste tutorial, usaremos o sistema operacional Ubuntu 18.04 LTS no computador host e a versão do Jetpack a ser instalada é a 4.6.1 neste guia.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

**Passo 1.**  Instalar o NVIDIA SDK Manager no PC Host Linux

Primeiro, você precisa criar uma  <a href="https://developer.nvidia.com/login" target="_blank">conta NVIDIA</a> para poder usar o sdkmanager. Em seguida, no PC Host Linux baixe o <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank">NVIDIA SDK Manager</a> do site oficial da NVIDIA.

**Passo 2.**  Abra o NVIDIA SDK Manager e faça login

Na tela do PC host Linux, podemos clicar com o botão direito do mouse e abrir um Terminal. Então podemos digitar o comando abaixo para iniciar o SDK Manager:

```bash
sdkmanager
```

:::note
Na primeira vez que você usar o NVIDIA SDK Manager, uma página da web será exibida solicitando que você faça login com sua conta NVIDIA previamente registrada.
:::

**Passo 3.**  Selecione o dispositivo de destino

Como já conectamos o reComputer J2021, haverá uma janela pop‑up para você selecionar o dispositivo de hardware.

O reComputer J2021 está equipado com o **módulo NVIDIA Jetson Xavier 8GB**, então podemos escolher `Jetson Xavier NX` (a primeira opção).

<!-- <div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/select_target_device.png" />
</div> -->

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/1.png"/></div>

:::info
Observe que a interface de diferentes versões do SDK Manager pode variar ligeiramente. Escolha as opções apropriadas com base na sua situação real.
:::

Existem mais seleções para você escolher na primeira tela:

- O **Jetson** no painel Product Category precisa ser selecionado.
- No painel Hardware Configuration, recomendamos que você **não selecione Host Machine**. Isso levará mais tempo para instalar os componentes NVIDIA no seu host Ubuntu atual. Você pode escolhê-lo se precisar.
- No painel Target Operating System, podemos selecionar diferentes **sistemas operacionais** e **versões do JetPack**. Mas tenha cuidado com a versão do JetPack, diferentes módulos podem suportar tipos diferentes de JetPack, como `JetPack 4.6.1`, `JetPack 5.1.x` e assim por diante. Recomendamos **JetPack 4.6.1** aqui.
- Em Additional SDKs, como o espaço de armazenamento da eMMC é de apenas 16GB, a memória ficará esgotada se instalarmos o DeepStream aqui.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Clique em Continue para prosseguir para a próxima etapa.

**Step 4.**  Review wanted components

Em **Details and License**, você pode expandir os painéis de componentes do host e de componentes de destino para revisar os componentes que serão instalados no seu sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

Se você só precisa instalar o sistema, pode desmarcar o componente SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

:::tip
Ao escolher quais componentes instalar, você deve ficar de olho na capacidade usada. O tamanho da eMMC integrada é de apenas 16GB, portanto, aloque e use esse espaço com sabedoria de acordo com suas necessidades reais.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
Após testes reais, resta apenas cerca de 500MB de espaço na eMMC depois de instalar o conjunto completo de componentes do SDK.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
Se você quiser verificar como resolver o problema de capacidade insuficiente, consulte:

https://wiki.seeedstudio.com/pt-br/reComputer_Jetson_Series_Initiation/#q1-o-espaço-restante-no-emmc-no-recomputer-jetson-recebido-é-de-apenas-2gb-como-posso-resolver-o-problema-de-espaço-insuficiente .
:::

Se você quiser que o SDK Manager baixe todos os arquivos para um local diferente do caminho padrão, vá para Download & Install Options localizado na parte inferior da tela e selecione o caminho que deseja usar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

Selecione Continue para prosseguir para a próxima etapa.

**Step 5.** Install the system

Antes de a instalação começar, o SDK Manager solicita que você insira sua senha `sudo`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

Depois de um tempo, será solicitado que configure o novo sistema para o nosso reComputer. Como forçamos manualmente a entrada no modo de recuperação, selecionamos `Manual setup: set the target to Force Recovery Mode via manual operations` aqui. Enquanto isso, escolhemos o **Pre-Config** padrão.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

Depois disso, precisamos inserir o nome e a senha do nosso novo sistema Jetson no nosso reComputer; isso é definido por você mesmo.

Quando estiver pronto, clique em `Flash` para continuar.

A tela mostra o progresso do download e da instalação do software. Aguarde pacientemente até a conclusão da instalação.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

**(Optional)Step 6.** Install the SDK components

Se você marcou a instalação do componente no **step 4** anterior, precisará passar por esta etapa.

Depois de um momento, você verá uma nova janela aparecer no NVIDIA SDK Manager, informando que você precisa se conectar ao seu dispositivo via endereço IP. Isso significa que o sistema já foi instalado e a instalação dos componentes será continuada.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

Neste caso, podemos **puxar o jumper para fora** e reiniciar o reComputer. Em seguida, precisamos conectar o reComputer a um monitor via HDMI, inserir a senha que você digitou no **step 4** e fazer login na interface principal.

Neste ponto, você precisa conectar o reComputer à mesma LAN que o PC host Linux e determinar o **endereço IP** do Jetson usando o comando `ifconfig`.

Volte para o PC host Linux e insira o endereço IP que você acabou de obter. O NVIDIA SDK Manager tentará se conectar ao dispositivo Jetson e prosseguirá para concluir a instalação dos próximos componentes do SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

Quando você vir a seguinte janela aparecer, a instalação foi concluída. Você pode começar a usar o Jetson ou continuar a seguir as etapas abaixo para concluir algumas configurações básicas do seu novo sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

:::note
Certifique-se de desconectar o jumper e sair do modo de recuperação forçada antes de ligar o sistema novamente.
:::
</TabItem>

<TabItem value="Command Line" label="Command Line">

Graças à liberdade de personalizar o BSP (NVIDIA Linux Driver Package), gravar o JetPack OS via linha de comando pode ser muito fácil para usuários com conhecimentos de Linux.

**Step 1.** Download the proper NVIDIA Linux Driver Package

No **Linux host PC**, precisamos abrir um navegador e acessar o <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. Primeiro devemos verificar se a versão do Jetson Linux é compatível com o nosso módulo reComputer Jetson.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack2.png" /></div>

Depois de encontrar a versão correta, clique para ir à página de download. Localize e clique em "L4T Driver Package (BSP)" e "Sample Root Filesystem" para baixar os arquivos de driver. Os nomes dos arquivos são como `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` e `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

Como exemplo, escolhemos a versão NVIDIA L4T 35.1, pois ela está incluída como parte do JetPack 5.0.2 e oferece suporte ao módulo Jetson Xavier NX. Os nomes dos arquivos:

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

:::info
Você também pode escolher outra versão, como NVIDIA L4T 32.7.2, que oferece suporte ao Jetpack 4.6.2.
:::

**Step 2.**  Unzip Package Files and Assemble the Rootfs via Command Line

No PC host Linux, devemos encontrar uma pasta e armazenar os arquivos de pacote que baixamos antes. Em seguida, abra uma janela de linha de comando (Terminal) na pasta e use a linha de comando abaixo para descompactar os arquivos e montar o rootfs:

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

:::note
`${}` é onde você coloca os nomes dos arquivos.
:::

Como exemplo de **NVIDIA L4T 35.1**, os arquivos baixados são armazenados em `/Desktop/L4T_Drivers`, então, no caminho '/Desktop/L4T_Drivers' abrimos a janela de linha de comando (Terminal) e executamos o seguinte comando.

```sh
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

A saída deve ser semelhante a:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

**Step 3.**  Flash the System to reComputer

Como já forçamos o reComputer J2021 a entrar no modo de recuperação e o módulo é Jetson Xavier NX, podemos gravar diretamente o sistema no reComputer executando o seguinte comando:

```sh
sudo ./flash.sh jetson-xavier-nx-devkit-emmc mmcblk0p1
```

Se você usar o módulo Jetson nano, o comando de gravação será:

```sh
sudo ./flash.sh jetson-nano-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

:::note
Gravar o L4T leva cerca de 10 minutos, ou mais em um computador host lento.
:::

Neste momento, podemos desconectar o jumper e então ligar o reComputer novamente para usá-lo.

</TabItem>

<TabItem value="With Seeed BSP (nano)" label="With Seeed BSP (nano)">

:::info

Recentemente, a NVIDIA atualizou o modelo de DRAM, e a Seeed lançou atualmente um novo firmware compatível com essa atualização de módulo.

Se, durante o processo de gravação da imagem oficial da NVIDIA, o sistema travar devido ao sinal DP (manifestado como incapacidade de gravar e travar na interface da NVIDIA), isso prova que você comprou o módulo atualizado. Nesse caso, você precisa gravar a imagem de fábrica que fornecemos atualmente.

As diferenças atuais entre essa imagem de fábrica e a original são as seguintes:

1. A configuração de DP foi modificada (para evitar que o sistema trave devido ao sinal DP em alguns módulos).
2. O slot para cartão SD está definido como estado disponível por padrão, e não há necessidade de modificar adicionalmente a device tree para habilitar a função do slot para cartão SD.
3. A imagem contém Jetpack4.6.6.
4. O PCN mais recente foi incorporado.

:::

### Step 1. Download the proper NVIDIA Linux Driver Package

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versão JetPack</th>
      <th>Link para Download</th>
      <th>SHA265</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.6.6</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EV7LGr3R0VRDsgfFibgOgfsBam44-zEqOrQJoUKpHXEmRw?e=gJEHhU" target="_blank" rel="noopener noreferrer">Baixar</a></td>
      <td>138547DF526D19F737DEC27856C078217D15FE9160F2669DF57823916BAA260E</td>
    </tr>
  </tbody>
</table>
</div>

### Etapa 2. Descompactar os arquivos do pacote e montar o Rootfs via linha de comando

No PC host Linux, precisamos encontrar uma pasta e armazenar nela os arquivos de pacote que baixamos antes. Depois, abra uma janela de linha de comando (Terminal) nessa pasta e use a linha de comando abaixo para descompactar os arquivos e montar o rootfs:

```sh
tar xpf  mfi_recomputer-nano-4g-4.6.6-32.7.6-2024-12-23.tbz2
cd mfi_jetson-nano-devkit-emmc
```

### Etapa 3. Gravar o sistema no reComputer

Como já forçamos o reComputer J1010 a entrar no modo de recuperação e o módulo é Jetson Nano, podemos gravar o sistema diretamente no reComputer executando o seguinte comando:

```bash
sudo ./nvmflash.sh --showlogs
```

</TabItem>

<TabItem value="With Seeed BSP (Xavier NX)" label="Com Seeed BSP (Xavier NX)">

Aqui vamos instalar o Jetpack 5.1.3 no reComputer.

**Etapa 1:** Baixe a imagem do sistema para o seu PC com Ubuntu correspondente ao módulo Jetson que você está usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Link para download</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Xavier NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfKRq92vAAxEhDx43JOBDxkBCQvjy_-h8UC7HmWK6COMEg?e=PCDzib" target="_blank" rel="noopener noreferrer">Baixar</a>
      </td>
      <td>0cded5b093da648e5371c880037601d1593132780bb869c814ac21b11f2aae5c</td>
    </tr>
    <tr>
      <td>Xavier NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EaNbv75ItvNHqdsj9LEW4E0BvP_CCTRWMyUvJOA2JUQv8g?e=lToSlK" target="_blank" rel="noopener noreferrer">Baixar</a>
      </td>
      <td>db960d3f0e31909aa443e3d4317c737de6cec4de9a7df7c09801fcb1574f4595</td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido na wiki, isso confirma que o firmware que você baixou está completo e intacto.
:::

**Etapa 2:** Extraia o arquivo de imagem baixado:

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Etapa 3:** Navegue até o diretório descompactado e execute o seguinte comando para gravar o sistema Jetpack no SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer_J2021/flash-jetpack.png"/></div>

:::note
O comando de gravação pode ser executado por 2 a 10 minutos.
:::

**Etapa 4:** Conecte o J20 a um monitor usando o conector HDMI na placa e finalize a configuração inicial:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Conclua a **Configuração do Sistema** de acordo com suas necessidades.
:::

</TabItem>

</Tabs>

## Solução de Problemas

### Solução de problemas de instalação com o NVIDIA SDK Manager

Há muitas causas para vários erros de instalação. Abaixo está uma lista de verificação de problemas comuns de instalação, que pode ajudar você a recuperar uma instalação com falha.

1. Revise a tabela de resumo para identificar qual componente falhou.

    a. Expanda o grupo com o status "Error".

    b. Quando encontrar o componente com falha, clique no ícone de detalhes à direita de Install Error para ser redirecionado para a aba Terminal, que exibirá o erro exato.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. Se o erro estiver relacionado a um problema de ambiente, como um repositório apt corrompido ou pré-requisito ausente, tente corrigi-lo manualmente e clique no botão Retry Failed Items.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. A repetição da instalação também está disponível de outras duas maneiras:

    a. Em **Flashing to eMMC with SDK Manager -- Step 3**, use o botão Repair/Uninstall para ir para a página Manage NVIDIA SDKs. Se necessário, expanda o SDK que está com status "Broken" e clique em Repair para a parte relevante (Host ou Target).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. Em **Flashing to eMMC with SDK Manager -- Step 3**, selecione o SDK necessário e execute novamente a instalação.

5. Por fim, tente desinstalar e reinstalar o SDK relevante.

### Solução de problemas de instalação usando a linha de comando

O método de instalação pela linha de comando é relativamente simples e costuma ser propenso a erros em cenários em que o modo de recuperação forçada é usado.

Se você encontrar o erro mostrado abaixo em **Flashing to eMMC with command-line -- Step 2**, provavelmente não conseguiu colocar a Jetson-202 Carrier Board em modo de recuperação forçada. Por favor, preste atenção especial: não entre no modo de recuperação forçada com a Jetson-202 Carrier Board ligada, pois isso não é válido.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

Se você não conseguir entrar no sistema em **Flashing to eMMC with command-line -- Step 3** e ficar travado na linha de comando exibida durante a inicialização, provavelmente você não saiu do modo de recuperação forçada. Da mesma forma, não é válido remover o jumper para sair do modo de recuperação forçada enquanto a Jetson-202 Carrier Board estiver ligada; tudo isso precisa ser feito enquanto o dispositivo estiver desligado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

:::note
Se for necessário mais espaço de armazenamento, podemos usar um cartão SD para expandir a capacidade ou gravar o sistema no cartão SD. Você pode consultar nossa solução recomendada [Flash System on SD card](/pt-br/J101_Enable_SD_Card)
:::

## Recursos

[reComputer J202x datasheet](https://files.seeedstudio.com/wiki/reComputer/reComputer-J202x-datasheet.pdf)

[reComputer J202x 3D file](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Seeed Jetson Serials Catalog](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio Edge AI Success Stories](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetson Serials Comparision](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetson Devices One Page](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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
