---
description: reComputer J1010 | J101
title: Placa Carrier J101
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_J1010_J101_Flash_Jetpack
sku: 110061362,102991694,110061441,110061481
last_update:
  date: 01/05/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-01-05'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/pt-br/reComputer_J1010_J101_Flash_Jetpack/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Placa carrier J101

Neste wiki, mostraremos como gravar o Jetpack OS na reComputer J1010. Como a placa carrier dela é projetada como a placa carrier oficial NVIDIA Nano Developer, podemos gravar o JetPack de duas maneiras.

## Primeiros Passos

Podemos usar o software Linux **NVIDIA SDK Manager** ou podemos usar diretamente o **NVIDIA Linux Driver Package** via linha de comando Linux para gravar o JetPack OS na reComputer J1010. Para iniciantes em NVIDIA Jetson, recomendamos fortemente o NVIDIA SDK Manager.

- [Opção 1 - Gravando JetPack OS via NVIDIA SDK Manager](#Gravando-JetPack-OS-via-NVIDIA-SDK-Manager)
- [Opção 2 - Gravando JetPack OS via Linha de Comando](#Gravando-JetPack-OS-via-Linha-de-Comando)

Ainda há algumas preparações que precisamos primeiro:

### Preparação de Software

- <a href="https://developer.nvidia.com/login" target="_blank"><span>Conta NVIDIA</span></a>
- Computador Host Linux com Ubuntu 18.04 OS (ou superior)

:::note
Neste tutorial, usaremos um sistema baseado em Ubuntu 18.04 LTS para concluir a instalação.
:::

### Preparação de Hardware (Modo Force Recovery)

Antes de prosseguirmos para as etapas de instalação, precisamos ter certeza de que nossa reComputer está no modo force recovery.

**Passo 1.** Antes de começar, você precisa desconectar a alimentação da reComputer

**Passo 2.** Use um jumper para conectar o pino **FC REC** e o pino **GND**.

<table align="center">
  <tbody><tr>
      <th> </th>
      <th align="center">Cabeçalho do Botão</th>
      <th align="center">Descrição</th>  
      <th align="center">Cabeçalho do Botão</th>
      <th align="center">Descrição</th>
    </tr>
    <tr>
      <td rowSpan="{6}"><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/4_3.jpg" /></div></td>
      <td align="center">1</td>
      <td align="center">PWR BTN</td>
      <td align="center">7</td>
      <td align="center">AUTO ON</td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td align="center">GND</td>
      <td align="center">8</td>
      <td align="center">DIS</td>
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
  </tbody>
</table>

**Passo 3.** Ligue a reComputer com um cabo Type-C à esquerda da reComputer e use outro cabo para conectar o PC Host Linux à direita da reComputer.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ1010_J101_flash_Jetpack.png" /></div>

!!!Attention
    Antes da fiação, preste atenção ao conector de alimentação e ao conector de dados, por favor não conecte o conector de dados diretamente à alimentação DC.

**Passo 4.** Na janela de linha de comando do computador host, insira o comando `lsusb`. Quando o conteúdo retornado tiver `ID 0955:7f21 NVidia Corp.` nele, significa que a reComputer está no modo force recovery e podemos prosseguir para as operações subsequentes.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

:::caution
A interface SPI no Jetson-Nano é multiplexada com GPIO por padrão e não está habilitada. Consulte [**este guia**](/pt-br/enable_spi_interface_on_jetsonnano) para obter instruções sobre como habilitá-la.
:::

## Gravando JetPack OS via NVIDIA SDK Manager

Em seguida, vamos seguir o tutorial sobre como instalar o sistema via NVIDIA SDK Manager. O NVIDIA SDK Manager é uma ferramenta tudo-em-um que agrupa o software de desenvolvimento e fornece uma solução de configuração de ambiente de desenvolvimento ponta a ponta para os SDKs NVIDIA. Portanto, é recomendado para iniciantes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### Passo 1.  Instalar o NVIDIA SDK Manager no PC Host Linux

Precisamos abrir o navegador no PC Host Linux e <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>baixar o NVIDIA SDK Manager</span></a> do site oficial da NVIDIA.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png" /></div>

### Passo 2.  Abrir o NVIDIA SDK Manager e fazer login

Na tela do PC Host Linux, podemos clicar com o botão direito do mouse e abrir um Terminal. Em seguida, podemos digitar o comando abaixo para iniciar o SDK Manager:

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

Na primeira vez que você usar o NVIDIA SDK Manager, uma página da web será exibida solicitando que você faça login com sua conta NVIDIA registrada anteriormente.

### Passo 3.  Selecionar o dispositivo de destino

Após o login, você será levado para a primeira tela onde está o primeiro passo da instalação. Como já conectamos a reComputer J1010, aparecerá uma janela para você selecionar o dispositivo de hardware.

A reComputer J1010 está equipada com o **módulo NVIDIA Jetson Nano 4GB**, então podemos escolher o primeiro.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

Há mais seleções para você escolher na primeira tela:

- O **Jetson** no painel Product Category precisa ser selecionado.
- No painel Hardware Configuration, recomendamos que você **não selecione Host Machine**. Isso levará mais tempo para instalar os componentes NVIDIA para o seu host Ubuntu atual. Você pode escolhê-lo se precisar.
- No painel Target Operating System, podemos selecionar diferentes **sistemas operacionais** e versões do **JetPack**. Mas tenha cuidado com a versão do JetPack, diferentes módulos podem suportar diferentes tipos de JetPack. Recomendamos "JetPack 4.6.1" aqui.
- Em Additional SDKs, como o espaço de armazenamento do eMMC é de apenas 16GB, a memória ficará cheia se instalarmos o DeepStream aqui.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Clique em Continue para prosseguir para o próximo passo.

### Passo 4.  Revisar os componentes desejados

Em **Details and License**, você pode expandir os painéis de componentes do host e de destino para revisar os componentes que serão instalados em seu sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

Se você só precisa instalar o sistema, pode desmarcar o componente SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!Tip
    Ao escolher quais componentes instalar, talvez você queira ficar de olho na capacidade usada. O tamanho do eMMC interno é de apenas 16GB, por favor, aloque e use esse espaço com sabedoria de acordo com suas necessidades reais.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
    Após testes reais, restam apenas cerca de 500MB de espaço no eMMC depois de instalar o conjunto completo de componentes SDK.
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
    Se você quiser verificar como resolver o problema de capacidade insuficiente, consulte [Troubleshooting](https://wiki.seeedstudio.com/pt-br/reComputer_Jetson_Series_Initiation/#Q1-o-espaço-restante-no-emmc-na-recomputer-jetson-recebida-é-de-apenas-cerca-de-2gb-como-posso-resolver-o-problema-de-espaço-insuficiente).

Se você quiser que o SDK Manager baixe todos os arquivos para um local diferente do caminho padrão, vá para Download & Install Options localizado na parte inferior da tela e selecione o caminho que deseja usar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

Selecione Continue para prosseguir para o próximo passo.

### Passo 5. Instalar o sistema

Antes do início da instalação, o SDK Manager solicita que você insira sua senha `sudo`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

Depois de um tempo, será solicitado que configuremos o novo sistema para nossa reComputer. Como forçamos manualmente o modo de recuperação, selecionamos `Manual setup: set the target to Force Recovery Mode via manual operations` aqui. Enquanto isso, escolhemos o **Pre-Config** padrão.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

Depois disso, precisamos inserir o nome e a senha do nosso novo sistema Jetson na nossa reComputer; isso é definido por você.

Quando estiver pronto, clique em `Flash` para continuar.

A tela mostra o progresso do download e da instalação do software. Aguarde pacientemente até a conclusão da instalação.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### (Opcional) Passo 6. Instalar os componentes SDK

Se você marcou a instalação do componente no **passo 4** anterior, precisará passar por esta etapa.

Depois de um momento, você verá uma nova janela aparecer no NVIDIA SDK Manager, informando que você precisa se conectar ao seu dispositivo via endereço IP. Isso significa que o sistema já foi instalado e a instalação dos componentes será iniciada.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

Nesse caso, podemos **puxar o jumper** e reiniciar a reComputer. Em seguida, precisamos conectar a reComputer a um monitor via HDMI, inserir a senha que você digitou no **passo 4** e fazer login na interface principal.

Neste ponto, você precisa conectar o reComputer à mesma LAN que o PC host Linux e determinar o **endereço IP** do Jetson usando o comando `ifconfig`.

Volte para o PC host Linux e insira o endereço IP que você acabou de obter. O NVIDIA SDK Manager tentará se conectar ao dispositivo Jetson e prosseguirá para concluir a instalação dos próximos componentes do SDK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

Quando a seguinte janela aparecer, a instalação terá sido concluída. Você pode começar a usar o Jetson ou continuar seguindo as etapas abaixo para concluir algumas configurações básicas do seu novo sistema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

!!!Attention
    Certifique-se de desconectar o jumper e sair do modo de recuperação forçada antes de energizar novamente o sistema.

## Gravando o JetPack OS via Linha de Comando

Graças à liberdade para personalizar o BSP (NVIDIA Linux Driver Package), gravar o JetPack OS via linha de comando pode ser muito fácil para usuários com conhecimento em Linux.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### Etapa 1. Baixar o NVIDIA Linux Driver Package adequado

No **PC host Linux**, precisamos abrir um navegador e acessar o <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. Primeiro devemos verificar se a versão do Jetson Linux é compatível com o nosso módulo reComputer Jetson.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png" /></div>

Depois de encontrar a versão adequada, clique para ir para a página de download. Encontre e clique em "L4T Driver Package (BSP)" e "Sample Root Filesystem" para baixar os arquivos de driver. Os nomes dos arquivos são como `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` e `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

Como exemplo, escolhemos a versão NVIDIA L4T 32.7.1, pois ela está incluída como parte do JetPack4.6.1 e é compatível com o módulo Jetson Nano. Os nomes dos arquivos:

- Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
- Jetson-210_Linux_R32.7.2_aarch64.tbz2

### Etapa 2. Descompactar os Arquivos do Pacote e Montar o Rootfs via Linha de Comando

No PC host Linux, devemos encontrar uma pasta e armazenar os arquivos de pacote que baixamos antes. Em seguida, abra uma janela de linha de comando (Terminal) na pasta e use a linha de comando abaixo para descompactar os arquivos e montar o rootfs:

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

:::tip
`${}` é onde você coloca os nomes dos arquivos.
:::

*Como exemplo do **NVIDIA L4T 32.7.1**, os arquivos baixados são armazenados em `/Desktop/L4T_Drivers`, então, no caminho '/Desktop/L4T_Drivers', abrimos a janela de linha de comando (Terminal) e executamos o seguinte comando.

```sh
tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

A saída deve ser como:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

### Etapa 3. Gravar o Sistema no reComputer

Como já colocamos o reComputer J1010 em modo de recuperação e o módulo é Jetson Nano, podemos gravar o sistema diretamente no reComputer executando o seguinte comando:

```sh
sudo ./flash.sh jetson-nano-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

Gravar o L4T leva cerca de 10 minutos, ou mais em um computador host lento.

Neste momento, podemos desconectar o jumper e então ligar o reComputer novamente para usá-lo.

## Gravando o Jetpack OS com o BSP da Seeed

:::info

Recentemente, a NVIDIA atualizou o modelo de DRAM, e a Seeed lançou um novo firmware que é compatível com essa atualização de módulo.

Se, durante o processo de gravação da imagem oficial da NVIDIA, o sistema travar devido ao sinal DP (manifestado como incapacidade de gravar e ficar preso na interface da NVIDIA), isso prova que você adquiriu o módulo atualizado. Nesse caso, você precisa gravar a imagem de fábrica que fornecemos atualmente.

As diferenças atuais entre essa imagem de fábrica e a original são as seguintes:

1. A configuração de DP foi modificada (para evitar que o sistema trave devido ao sinal DP em alguns módulos).
2. O slot do cartão SD é definido como disponível por padrão e não há necessidade de modificar adicionalmente a árvore de dispositivo para habilitar a função do slot do cartão SD.
3. A imagem contém o Jetpack4.6.6.
4. O PCN mais recente foi incorporado.

:::

### Etapa 1. Baixar o NVIDIA Linux Driver Package adequado

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versão do JetPack</th>
      <th>Link para Download</th>
      <th>SHA265</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.6.6</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EV7LGr3R0VRDsgfFibgOgfsBam44-zEqOrQJoUKpHXEmRw?e=gJEHhU" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>138547DF526D19F737DEC27856C078217D15FE9160F2669DF57823916BAA260E</td>
    </tr>
  </tbody>
</table>
</div>

### Etapa 2. Descompactar os Arquivos do Pacote e Montar o Rootfs via Linha de Comando

No PC host Linux, devemos encontrar uma pasta e armazenar os arquivos de pacote que baixamos antes. Em seguida, abra uma janela de linha de comando (Terminal) na pasta e use a linha de comando abaixo para descompactar os arquivos e montar o rootfs:

```sh
tar xpf  mfi_recomputer-nano-4g-4.6.6-32.7.6-2024-12-23.tbz2
cd mfi_jetson-nano-devkit-emmc
```

### Etapa 3. Gravar o Sistema no reComputer

Como já colocamos o reComputer J1010 em modo de recuperação e o módulo é Jetson Nano, podemos gravar o sistema diretamente no reComputer executando o seguinte comando:

```bash
sudo ./nvmflash.sh --showlogs
```

## Solução de Problemas

### Solução de problemas de instalação com o NVIDIA SDK Manager

Existem muitas causas para vários erros de instalação. Abaixo está uma lista de verificação de problemas comuns de instalação, que pode ajudar você a se recuperar de uma instalação com falha.

1. Revise a tabela de resumo para identificar qual componente falhou.

    a. Expanda o grupo com o status "Error".

    b. Quando você encontrar o componente que falhou, clique no ícone de detalhes à direita de Install Error para ser redirecionado para a aba Terminal, que exibirá o erro exato.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. Se o erro estiver relacionado a um problema de ambiente, como um repositório apt corrompido ou pré-requisito ausente, tente corrigi-lo manualmente e depois clique no botão Retry Failed Items.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. Tentar novamente a instalação também está disponível de outras duas maneiras:

    a. Em **Flashing to eMMC with SDK Manager -- Step 3**, use o botão Repair/Uninstall para ir até a página Manage NVIDIA SDKs. Se necessário, expanda o SDK que está com o status "Broken" e clique em Repair para a parte relevante (Host ou Target).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. Em **Flashing to eMMC with SDK Manager -- Step 3**, selecione o SDK necessário e execute novamente o processo de instalação.

5. Por fim, tente desinstalar e reinstalar o SDK relevante.

### Solução de problemas de instalação usando a linha de comando

O método de instalação pela linha de comando é relativamente simples e costuma ser propenso a erros em cenários em que o modo de recuperação forçada é usado.

Se você encontrar o erro mostrado abaixo em **Flashing to eMMC with command-line -- Step 2**, provavelmente não conseguiu colocar a Jetson-101 Carrier Board em modo de recuperação forçada. Por favor, preste atenção especial: não coloque em modo de recuperação forçada com a Jetson-101 Carrier Board ligada, pois isso não é válido.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

Se você não conseguir entrar no sistema em **Flashing to eMMC with command-line -- Step 3** e ficar preso na linha de comando exibida na inicialização, provavelmente você não saiu do modo de recuperação forçada. Da mesma forma, não é válido desconectar o jumper para sair do modo de recuperação forçada enquanto a Jetson-101 Carrier Board está ligada; tudo isso precisa ser feito enquanto o sistema está desligado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

:::note
Se for necessário mais espaço de armazenamento, podemos usar um cartão SD para expandir a capacidade ou gravar o sistema no cartão SD. Você pode consultar nossa solução recomendada [Flash System on SD card](https://wiki.seeedstudio.com/pt-br/J1010_Boot_From_SD_Card/)
:::

## Recursos

[reComputer J1010 datasheet](https://files.seeedstudio.com/wiki/reComputer/reComputer-J1010-datasheet.pdf)

[Esquema das Jetson Carrier Boards reComptuer J101](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J101_V2.0_SCH_240822.pdf)

[Arquivo 3D do reComputer J1010](https://files.seeedstudio.com/products/NVIDIA-Jetson/J1010-Jetson-Nano.stp)

[Catálogo das Séries Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Casos de Sucesso de Edge AI da Seeed Studio](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Comparação das Séries Jetson da Seeed](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Página Única dos Dispositivos Jetson da Seeed](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

<JetsonLeadQuote
  buttonText="Solicitar orçamento personalizado"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
