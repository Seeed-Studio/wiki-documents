---
description: Introduz como usar o SDK da Himax para desenvolver o Grove Vision AI V2.
title: Desenvolvendo Grove Vision AI V2 usando o Himax SDK
keywords:
  - himax
  - vision AI
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_vision_ai_v2_himax_sdk
last_update:
  date: 01/17/2023
  author: Citric
createdAt: '2024-01-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/grove_vision_ai_v2_himax_sdk/
---

# Desenvolvendo Grove Vision AI V2 usando o Himax SDK

Este tutorial foi elaborado para guiá-lo no uso do Himax SDK para a plataforma Grove Vision AI, com foco em como utilizar de forma eficaz cartões microSD para gerenciamento de dados e microfones PDM para captura de áudio. Ao final deste guia, você aprenderá a implementar esses componentes em seus projetos de IA, permitindo armazenar grandes conjuntos de dados e capturar som de alta qualidade com facilidade, diretamente no seu dispositivo Grove Vision AI.

Aqui está a lista do índice deste tutorial.

1. [Instalar Ubuntu 22.04 no Windows Subsystem for Linux (WSL)](#instalar-ubuntu-2204-no-windows-subsystem-for-linux-wsl)
2. [Preparação do ambiente de compilação](#preparação-do-ambiente-de-compilação)
3. [Executar o exemplo de gravação usando o Himax SDK](#executar-o-exemplo-de-gravação-usando-o-himax-sdk)
4. [Análise de código do Himax SDK](#análise-de-código-do-himax-sdk)

## Primeiros passos

Antes que o conteúdo deste tutorial comece, você pode precisar ter o seguinte hardware preparado.

### Materiais necessários

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Se você quiser usar rotinas com cartão microSD, então talvez precise adquirir seu próprio cartão microSD (a maior capacidade testada até agora é 64GB), o formato do cartão de memória suportado é: **FAT12/FAT16/FAT32/exFAT**.

## Instalar Ubuntu 22.04 no Windows Subsystem for Linux (WSL)

:::tip
Esta seção se aplica apenas a computadores com Windows; se você não estiver usando um computador com Windows, pule esta seção e continue para **[Preparação do ambiente de compilação](#preparação-do-ambiente-de-compilação)**.
:::

O Himax SDK precisa ser compilado em um ambiente Linux, então, se você estiver usando um computador com Windows, precisará instalar o WSL. Para instalar o Ubuntu 22.04 no Windows Subsystem for Linux (WSL), você precisará seguir estas etapas gerais. Antes de começar, certifique-se de que está executando uma versão compatível do Windows 10 ou Windows 11.

### Etapa 1. Baixar e instalar o Ubuntu 22.04.3

Agora, você pode instalar o Ubuntu pela Microsoft Store:

Abra a Microsoft Store. Pesquise por **Ubuntu 22.04.3 LTS**. Selecione a versão Ubuntu 22.04.3 LTS nos resultados da pesquisa. Clique em "Get" ou "Install" para baixar e instalar o aplicativo Ubuntu.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/4.png" style={{width:1000, height:'auto'}}/></div>

Como alternativa, você pode instalar o Ubuntu usando a linha de comando. Abra o PowerShell ou o Prompt de Comando. Execute o seguinte comando:

```shell
wsl --install -d Ubuntu-22.04
```

Quando o Ubuntu estiver instalado, inicie-o a partir do menu Iniciar. Na primeira vez que iniciar, será solicitado que você crie uma conta de usuário e uma senha. Siga as instruções para configurá-lo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/5.png" style={{width:800, height:'auto'}}/></div>

Agora você pode usar o Ubuntu na sua máquina Windows usando o WSL. Você pode acessar o terminal Linux, instalar pacotes e executar aplicativos Linux.

:::note
Se você já tiver instalado o WSL 1 anteriormente e quiser fazer upgrade para o WSL 2, será necessário seguir algumas etapas adicionais, que incluem instalar o pacote de atualização do kernel Linux do WSL 2 e configurar suas distribuições existentes para usar o WSL 2. Você pode encontrar as instruções para essas etapas adicionais na [documentação oficial da Microsoft](https://learn.microsoft.com/en-us/windows/wsl/install).
:::

Lembre-se de verificar a [documentação oficial da Microsoft](https://learn.microsoft.com/en-us/windows/wsl/install) para obter as instruções mais atualizadas e dicas de solução de problemas.

## Preparação do ambiente de compilação

### Etapa 2. Instalar o Microsoft VSCode

Visual Studio Code (VSCode) é um editor de código gratuito e de código aberto desenvolvido pela Microsoft, disponível para Windows, macOS e Linux. A seguir vou guiá-lo pelas etapas para instalar o VSCode em cada uma dessas plataformas.

**Windows**:

1. **Baixar o instalador:**
   - Visite a [página oficial de download do Visual Studio Code](https://code.visualstudio.com/Download).
   - Clique no instalador para Windows para baixar o arquivo `.exe`.

2. **Executar o instalador:**
   - Quando o download estiver concluído, execute o instalador (`VSCodeSetup-x.y.z.exe`, em que x.y.z é o número da versão).
   - Siga as instruções no assistente de instalação. Você pode aceitar as seleções padrão, embora possa querer marcar as opções para adicionar o VSCode ao PATH e criar um ícone na área de trabalho para fácil acesso.

3. **Concluir a instalação:**
   - Clique em 'Finish' para concluir a instalação. O VSCode deve abrir automaticamente.

4. **Iniciando o VSCode:**
   - Você pode iniciar o VSCode clicando duas vezes no ícone da área de trabalho ou procurando por ele no menu Iniciar.

**macOS**:

1. **Baixar o instalador:**
   - Acesse a [página oficial de download do Visual Studio Code](https://code.visualstudio.com/Download).
   - Clique na versão para macOS para baixar o arquivo `.zip`.

2. **Instalar o aplicativo:**
   - Quando o download estiver concluído, abra o arquivo `.zip` para extrair o aplicativo.
   - Arraste e solte o Visual Studio Code na pasta Applications. Isso o tornará disponível no Launcher.

3. **Iniciando o VSCode:**
   - Abra o Launchpad e clique no ícone do Visual Studio Code.
   - Na primeira vez que você abrir o VSCode, poderá receber um aviso, pois ele foi baixado da Internet. Clique em 'Open' para continuar.

**Linux**:

Você pode instalar o VSCode no Linux usando pacotes snap ou por meio do repositório de pacotes da sua distribuição. Aqui está como fazer isso pela linha de comando no Ubuntu como exemplo:

1. **Atualizar o índice de pacotes (distribuições baseadas em Ubuntu/Debian):**

    ```sh
    sudo apt update
    ```

2. **Instalar as dependências (se ainda não estiverem instaladas):**

    ```sh
    sudo apt install software-properties-common apt-transport-https wget
    ```

3. **Adicionar a chave GPG e o repositório da Microsoft:**

    ```sh
    wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
    ```

4. **Instalar o VSCode:**

    ```sh
    sudo apt update
    sudo apt install code
    ```

5. **Iniciando o VSCode:**
   - Você pode iniciar o VSCode procurando por ele no menu de aplicativos ou executando `code` no terminal.

Para distribuições que suportam pacotes snap:

```sh
sudo snap install --classic code
```

:::note
Lembre-se de que os comandos de instalação podem variar ligeiramente dependendo da sua distribuição Linux, portanto, você deve consultar a documentação oficial ou as instruções de gerenciamento de pacotes para sua distribuição específica de Linux.
:::

### Etapa 3. Instalar o Python

Instalar o Python 3 é um processo simples que pode variar dependendo do seu sistema operacional. A seguir, vou guiá-lo pelas etapas de instalação para Windows, macOS e Linux.

**Windows**:

1. **Baixar o Python:**
   - Acesse o site oficial do Python em [python.org](https://www.python.org/downloads/windows/).
   - Clique em "Download Python" para obter a versão mais recente para Windows.
   - Escolha o instalador executável para a versão desejada.

2. **Executar o instalador:**
   - Inicie o instalador.
   - Certifique-se de marcar a caixa "Add Python 3.x to PATH" na parte inferior da janela do instalador para garantir que o Python seja adicionado às variáveis de ambiente.
   - Clique em "Install Now".

3. **Verificar a instalação:**
   - Abra o Prompt de Comando e digite o seguinte comando para verificar se o Python foi instalado corretamente:

    ```
    python --version
    ```

    Você deverá ver a versão do Python que instalou.

**macOS**:

1. **Baixar o Python:**
   - Visite o site oficial do Python em [python.org](https://www.python.org/downloads/macos/).
   - Clique em "Download Python" para obter a versão mais recente para macOS.
   - Baixe o instalador macOS 64-bit.

2. **Executar o instalador:**
   - Abra o pacote baixado e siga as instruções para instalar o Python.

3. **Verificar a instalação:**
    - Abra o Terminal e digite o seguinte comando:

    ```sh
    python3 --version
    ```

    O sistema deverá exibir a versão do Python instalada.

**Linux**:

O Python 3 costuma vir pré-instalado em muitas distribuições Linux. Para verificar se o Python 3 já está instalado e para verificar a versão, abra um terminal e digite:

```sh
python3 --version
```

Se o Python 3 não estiver instalado ou se você quiser instalar uma versão diferente, pode usar o gerenciador de pacotes incluído na sua distribuição Linux.

Por exemplo, em sistemas baseados em Ubuntu ou Debian, você pode instalar o Python 3 seguindo estas etapas:

1. **Atualizar a lista de pacotes:**

   ```sh
   sudo apt update
   ```

2. **Instalar o Python 3:**

   ```sh
   sudo apt install python3
   ```

3. **Verificar a instalação:**

   ```sh
   python3 --version
   ```

Em sistemas baseados em Fedora ou Red Hat, você usaria `dnf`:

```sh
sudo dnf install python3
```

No Arch Linux ou Manjaro:

```sh
sudo pacman -S python
```

### Etapa 4. Instalar python-pip

- **Instalar o `pip`**:

  `pip` é o instalador de pacotes para Python. Você pode usá-lo para instalar pacotes do Python Package Index e de outros índices. No Windows e no macOS, `pip` é incluído com o instalador do Python. No Linux, talvez seja necessário instalá-lo separadamente:

  Para sistemas baseados em Ubuntu ou Debian:

  ```sh
  sudo apt install python3-pip
  ```

  Para Fedora:

  ```sh
  sudo dnf install python3-pip
  ```

  Para Arch Linux:

  ```sh
  sudo pacman -S python-pip
  ```

- **Verificar a instalação do `pip`:**

  Verifique a instalação do pip executando:

  ```sh
  pip3 --version
  ```

- **Ambientes virtuais:**

  É uma boa prática usar ambientes virtuais para gerenciar dependências dos seus projetos Python. Você pode criar um ambiente virtual usando o seguinte comando:

  ```sh
  python3 -m venv /path/to/new/virtual/environment
  ```

Lembre-se de substituir `/path/to/new/virtual/environment` pelo diretório onde você deseja colocar seu novo ambiente virtual.

Seguindo essas etapas, você conseguirá instalar o Python 3 e o `pip` no seu sistema e começar com o desenvolvimento em Python.

### Etapa 5. Instalar o ambiente de compilação do make

Clone o repositório do projeto para o local onde você deseja salvá-lo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed_Grove_Vision_AI_V2_SD-Mic" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o Projeto</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

```sh
cd /mnt/c/Users/mengd/Desktop/
git clone https://github.com/limengdu/Seeed_Grove_Vision_AI_V2_SD-Mic.git
```

Em seguida, abra o projeto no VSCode e entre no ambiente Linux digitando o comando `wsl` no terminal do VSCode. (Se você estiver no MacOS ou Linux, esse comando não é necessário)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/6.png" style={{width:1000, height:'auto'}}/></div>

A seguir, execute os seguintes comandos em um ambiente WSL (Windows) ou em um ambiente Linux para instalar o ambiente de compilação.

**Instalar pré-requisitos**

Primeiro, você precisa instalar o `make`, que é uma ferramenta essencial de automação de build.

```sh
sudo apt install make
```

Digite sua senha quando solicitado para prosseguir com a instalação.

**Baixar o Arm GNU Toolchain**

Você precisará do Arm GNU Toolchain para compilar projetos ARM. Para baixá-lo, navegue até o seu diretório home e use `wget` para baixar o pacote. Escolha um endereço adequado para instalá-lo e assim você poderá descobrir onde ele está. Aqui, irei instalá-lo no diretório acima da pasta do projeto.

```sh
cd /mnt/c/Users/mengd/Desktop/
wget https://developer.arm.com/-/media/Files/downloads/gnu/13.2.rel1/binrel/arm-gnu-toolchain-13.2.rel1-x86_64-arm-none-eabi.tar.xz
```

Este comando buscará a versão especificada da ferramenta ARM.

**Extrair o arquivo do Toolchain**

Após baixar o toolchain, você precisa extraí-lo. No seu terminal, execute o seguinte:

```sh
tar -xvf arm-gnu-toolchain-13.2.rel1-x86_64-arm-none-eabi.tar.xz
```

Isso criará um diretório com todos os arquivos necessários do toolchain.

**Atualizar seu PATH**

Por fim, para usar o toolchain a partir de qualquer diretório, você deve adicionar o diretório bin dos arquivos extraídos ao PATH do seu sistema. Execute este comando:

```sh
export PATH="/mnt/c/Users/mengd/Desktop/arm-gnu-toolchain-13.2.Rel1-x86_64-arm-none-eabi/bin/:$PATH"
```

Para que a alteração seja permanente, você deve adicionar o comando export ao seu `~/.bashrc`, `~/.zshrc` ou ao arquivo de configuração do shell de sua preferência.

```sh
echo 'export PATH="$HOME/arm-gnu-toolchain-13.2.Rel1-x86_64-arm-none-eabi/bin/:$PATH"' >> ~/.bashrc
```

Depois, aplique as alterações dando source no seu perfil ou fechando e reabrindo o terminal:

```sh
source ~/.bashrc
```

**Verificação**

Para verificar se tudo está configurado corretamente, você pode digitar:

```sh
echo $PATH | tr ':' '\n' | grep gnu
arm-none-eabi-gcc --version
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/7.png" style={{width:1000, height:'auto'}}/></div>

Isso deve exibir a versão do compilador ARM GCC, indicando que ele está corretamente instalado e acessível de qualquer lugar do seu sistema.

Agora, seu ambiente está pronto para desenvolvimento ARM.

:::note
Por favor, não use `apt install` para instalar o compilador ARM, essa versão é muito antiga e pode não compilar este projeto. Verifique se a versão que você está usando é a mesma que a versão 13.2 na captura de tela.
:::

## Executar o exemplo de gravação usando o Himax SDK

### Etapa 6. Compilar e enviar projetos de gravação

Neste ponto, concluímos a configuração básica do ambiente e então podemos compilar o projeto e enviá-lo. A pasta do projeto é chamada **EPII_CM55M_APP_S**.

Continue compilando o projeto executando os seguintes comandos em ambiente wsl ou Linux.

```sh
cd Seeed_Grove_Vision_AI_V2_SD-Mic/EPII_CM55M_APP_S
make clean
```

Em seguida, abra o arquivo **makefile** na pasta **EPII_CM55M_APP_S** e altere o caminho de **GNU_TOOLPATH** na [linha 47](https://github.com/limengdu/Seeed_Grove_Vision_AI_V2_SD-Mic/blob/3de76e628b74bdb075ea27d6fd98b89d6c2f80bb/EPII_CM55M_APP_S/makefile#L47) do código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/8.png" style={{width:1000, height:'auto'}}/></div>

Esse caminho precisa ser preenchido com o caminho absoluto para a pasta `bin` do Arm GNU Toolchain que você descompactou na [Etapa 5](#Etapa-5-Instalar-o-ambiente-de-compilação-do-make).

Depois salve o arquivo. Execute o seguinte comando para compilar o projeto.

```sh
make
```

Se a compilação correr bem, você verá o seguinte resultado de compilação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/1.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, precisamos converter o arquivo `.elf` em um arquivo `.img` para gravar no Grove Vision AI V2. Só precisamos executar o script `output.sh`.

```sh
./output.sh
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/2.png" style={{width:1000, height:'auto'}}/></div>

Executando o script flasher.py, podemos gravar o firmware gerado no dispositivo.

:::note
Se você tiver um computador Windows, crie um novo terminal e certifique-se de executar os seguintes comandos em um ambiente git bash.
:::

```sh
pip install xmodem --user
cd ..
python flasher.py we2_image_gen_local/output_case1_sec_wlcsp/output.img COM3
```

`COM3` no comando indica o número da porta do dispositivo, por favor altere-o de acordo com o número real da porta do seu Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/3.png" style={{width:800, height:'auto'}}/></div>

### Etapa 7. Gravação e salvamento

Então, podemos começar a executar os comandos de gravação com a ajuda do programa de gravação em Python.

```
pip install playsound --user
python getdate.py
```

O código grava um trecho de áudio de cerca de 4 segundos e o salva em uma pasta chamada `record.wav` em `Seeed_Grove_Vision_AI_V2_SD-Mic`.

## Análise de Código do Himax SDK

Para facilitar que os desenvolvedores usem o SDK da Himax para desenvolver hardware no Grove Vision AI V2, esta seção focará no código do microfone e do SD no SDK para você. O caminho principal do código do programa para este projeto é o seguinte:

```
EPII_CM55M_APP_S\app\scenario_app\grove_vision_ai\grove_vision_ai.c
```

O código fornecido configura e utiliza uma interface Pulse Density Modulation (PDM) para capturar dados de áudio em um sistema embarcado, transferindo os dados usando Direct Memory Access (DMA). Ele incorpora diversas bibliotecas externas e drivers de dispositivos, envolvendo operações de sistema de arquivos e controle de GPIO.

### Inclusão de cabeçalhos e definições de macro

```c
#include <stdio.h>
#include <assert.h>
#include <stdbool.h>
#include <stdint.h>
#include <string.h>
#include <stdlib.h>
```

Esta seção inclui cabeçalhos padrão da biblioteca C para entrada/saída, asserções, tipos de dados booleanos, tipos inteiros, operações de string e funcionalidades da biblioteca padrão.

```c
#ifdef TRUSTZONE_SEC
// ...
#endif
```

Este bloco de compilação condicional contém código de configuração de segurança relacionado ao TrustZone, que é compilado apenas se a macro `TRUSTZONE_SEC` estiver definida. Esta seção normalmente inclui recursos de segurança, como proteção de memória e chamadas seguras.

### Cabeçalhos de dispositivo e pacote de suporte à placa

```c
#include "WE2_device.h"
#include "WE2_device_addr.h"
#include "board.h"
#include "hx_drv_scu.h"
#include "hx_drv_spi.h"
#include "hx_drv_gpio.h"
#include "WE2_core.h"
#include "WE2_debug.h"
#include "mmc_we2.h"
#include "hx_drv_swreg_aon.h"
#include "hx_drv_pdm_rx.h"
```

Esses cabeçalhos incluem definições e interfaces específicas de hardware e em nível de placa, como drivers e configurações para GPIO, SPI e PDM.

### Definição do buffer de áudio PDM e flag de callback

```c
#define quarter_second_mono_bytes 8000
#define blk_num 20
int16_t audio_buf[blk_num * quarter_second_mono_bytes / 2];
volatile bool rx_cb_flag;
```

Define o tamanho do buffer de áudio e o número de blocos, declara um array de inteiros como buffer de áudio e uma variável de flag `rx_cb_flag` para indicar se a recepção via DMA foi concluída.

### Função de callback de recepção DMA do PDM

```c
void app_pdm_dma_rx_cb()
{
    // ...
}
```

Define uma função de callback que será chamada após a conclusão da recepção DMA do PDM. A função inclui invalidação de cache para garantir que os dados sejam lidos da memória atualizada pelo DMA.

### Função de Configuração do PDM

```c
int app_pdm_setting()
{
    // ...
}
```

Configura os parâmetros do dispositivo PDM, como a taxa de amostragem, o canal de DMA, a fonte de clock, etc., e associa as funções de callback ao dispositivo PDM.

### Função Principal

```c
int app_main(void)
{
    // ...
}
```

A função principal realiza a inicialização e a configuração do dispositivo:

- Define a multiplexação dos pinos GPIO e inicializa os estados dos GPIOs.
- Inicializa o PDM e configura a transferência por DMA.
- Configura o sistema de arquivos FatFS para operações com arquivos.
- Lê o estado de entrada por meio de GPIO e controla o estado de saída.
- Usa um loop para verificar a flag de recepção do DMA e capturar dados de áudio.
- Envia os dados para o console de depuração e interrompe o PDM após a conclusão.

### Parte do Microfone PDM

O código inclui o uso de um microfone, que é realizado por meio da configuração e uso de uma interface de Modulação por Densidade de Pulsos (PDM).

**Configuração do PDM**

```c
int app_pdm_setting()
{
    // PDM configuration settings
    // ...
}
```

Esta função, `app_pdm_setting`, define os parâmetros de configuração do dispositivo PDM. Esses parâmetros, como a taxa de amostragem, o canal de DMA (Acesso Direto à Memória) e a fonte de clock, são cruciais para capturar dados do microfone.

**Inicialização do PDM e Configuração da Transferência por DMA**

```c
if (hx_drv_pdm_init(&pdm_dev_info) != PDM_NO_ERROR)
    return -1;

hx_drv_pdm_dma_lli_transfer((void *)audio_buf, blk_num, quarter_second_mono_bytes, 0);
```

Esta parte do código inicializa o dispositivo PDM e configura a transferência por DMA. A chamada da função `hx_drv_pdm_dma_lli_transfer` inicia o processo de transferência por DMA, que capturará dados de áudio do microfone conectado e os armazenará no buffer predefinido `audio_buf`.

**Função de Callback de Recepção DMA do PDM**

```c
void app_pdm_dma_rx_cb()
{
    // Callback function invoked when PDM DMA reception is complete
    // ...
}
```

`app_pdm_dma_rx_cb` é uma função de callback que é chamada quando a interface PDM conclui a recepção de dados de áudio via DMA. Dentro dessa função, os dados de áudio recebidos (armazenados no buffer `audio_buf`) são enviados para processamento posterior.

Pelo código descrito, podemos ver que o programa envolve principalmente a configuração e o uso de um microfone para capturar dados de áudio.

### Parte da microSD

O código inclui operações relacionadas a um cartão microSD por meio do uso da biblioteca do sistema de arquivos FatFS.

```c
FATFS fs;
TCHAR drv[3] = {_T('0'), _T(':'), _T('0')};
FRESULT res = f_mount(&fs, drv, 1);
bool mount = false;
if (res != FR_OK)
{
    mount = false;
    xprintf("Mount Failed: %d\n", res);
}
else
{
    mount = true;
    xprintf("Mount Success\n");
}
```

Esta seção tenta montar o sistema de arquivos localizado no cartão microSD, o que é necessário para realizar operações de leitura e gravação no cartão.

```c
FIL file;
res = f_open(&file, _T("/test.txt"), FA_CREATE_ALWAYS | FA_WRITE | FA_READ);
// ...
```

Esta parte do código tenta abrir (ou criar, se não existir) um arquivo chamado "test.txt" no sistema de arquivos montado, que estará no cartão microSD se a montagem tiver sido bem-sucedida.

```c
res = f_write(&file, buffer, strlen(buffer), NULL);
// ...
```

Aqui, o código tenta gravar dados no arquivo que foi aberto anteriormente. Essa operação salvaria os dados no cartão microSD.

```c
res = f_read(&file, buffer, 512, NULL);
// ...
```

Esta seção lê dados do arquivo "test.txt" e os armazena em um buffer. Essa operação recuperaria dados do cartão microSD.

Em resumo, o código inclui funcionalidades para montar um cartão microSD, criar ou abrir um arquivo, gravar dados no arquivo e ler dados do arquivo, indicando que o cartão microSD está sendo usado para armazenamento nesta aplicação.

:::tip
O código `grove_vision_ai.c` já possui uma configuração mais completa para o uso do microfone PDM e do cartão de memória. No entanto, como a saída do microfone é pela porta serial no SDK, para salvar o arquivo de áudio você precisa usar `getdata.py` para ler a porta serial e então transcrevê-lo. Já o cartão microSD não requer um programa Python separado para as tarefas de armazenamento.
:::

## Recursos

- **[GITHUB]** [Repositório da Himax para o Grove Vision AI V2](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
