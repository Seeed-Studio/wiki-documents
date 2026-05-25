---
description: Este artigo explica como usar o recurso de depuração DAPLink do XIAO Debug Mate.
title: Depurador DAPLink
image: https://files.seeedstudio.com/wiki/xiao_debug_mate/15.webp
slug: /xiao_debug_mate_debug
sku: 109990585
sidebar_position: 2
last_update:
  date: 10/22/2025
  author: Citric
createdAt: '2025-10-30'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao_debug_mate_debug/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/15.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

Bem-vindo ao manual oficial do usuário para a funcionalidade DAPLink do XIAO Debug Mate. Este guia abrangente foi projetado para ajudar tanto iniciantes quanto usuários avançados a liberar todo o potencial do seu XIAO Debug Mate para tarefas de depuração profissional. Aqui, você aprenderá como conectar, configurar e operar o depurador DAPLink, entender as ferramentas de software essenciais e seguir as melhores práticas para garantir uma experiência de depuração suave e produtiva com uma ampla variedade de placas de desenvolvimento da série XIAO. Esteja você solucionando problemas de firmware complexos ou otimizando o seu fluxo de trabalho de desenvolvimento, este documento oferece instruções claras passo a passo, dicas e explicações técnicas detalhadas para apoiar seus projetos do início ao fim.


## Explicação de Alguns Conceitos de Depurador

Para usar efetivamente a funcionalidade DAPLink do XIAO Debug Mate, é útil entender os principais componentes de software e protocolos que trabalham juntos para tornar a depuração possível. A seguir está uma explicação de cada conceito e como eles se relacionam entre si.

### GDB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/gdb.png" style={{width:800, height:'auto'}}/></div>

**[GDB](https://www.sourceware.org/gdb/)**, o Depurador do Projeto GNU, é o núcleo do processo de depuração. É uma poderosa ferramenta de linha de comando que roda no seu computador host (PC). O GDB é responsável por controlar a execução do seu programa no microcontrolador de destino. Ele permite que você:
*   Inicie e pare seu programa.
*   Defina breakpoints para pausar a execução em linhas específicas do código.
*   Execute o código passo a passo, linha por linha.
*   Inspecione os valores das variáveis e o conteúdo dos registradores de memória.

A maioria dos Ambientes Integrados de Desenvolvimento (IDEs) modernos, como o VS Code (com PlatformIO) ou Eclipse, fornece uma interface gráfica que atua como front-end para o GDB, traduzindo seus cliques em comandos GDB.

### OpenOCD/PyOCD

**[OpenOCD](https://openocd.org/)** (Open On-Chip Debugger) e **[PyOCD](https://pyocd.io/)** são aplicações "servidor" essenciais que rodam no seu computador host. Elas atuam como uma ponte ou tradutor entre os comandos de alto nível do GDB e os sinais de baixo nível exigidos pela sonda de depuração física (neste caso, o XIAO Debug Mate).

Quando o GDB emite um comando como "read the value of variable `x`", o OpenOCD recebe esse comando, o traduz em uma sequência de instruções que a sonda de depuração entende e envia essas instruções para a sonda via USB.

### DAPLink

**[DAPLink](https://github.com/ARMmbed/DAPLink)** é o firmware open source que roda no microcontrolador ESP32-S3 do XIAO Debug Mate. Esse firmware transforma o Debug Mate em uma sonda de depuração totalmente funcional. Sua principal função é implementar o protocolo CMSIS-DAP, permitindo que ele receba comandos de depuração de um computador host via USB e interaja fisicamente com os pinos de depuração (SWD) do chip de destino. Em essência, o DAPLink é o "agente" no dispositivo que executa as ordens enviadas pelo OpenOCD.

### CMSIS-DAP

**[CMSIS-DAP](https://github.com/ARM-software/CMSIS-DAP)** (Cortex Microcontroller Software Interface Standard - Debug Access Port) é um protocolo padronizado que define como um computador host se comunica com uma sonda de depuração via USB. Como o firmware DAPLink do XIAO Debug Mate segue esse padrão, ele é instantaneamente compatível com uma ampla gama de ferramentas padrão da indústria, como OpenOCD, PyOCD e Keil MDK, sem a necessidade de drivers ou softwares proprietários.

### Telnet

**Telnet** é um protocolo de rede simples baseado em texto. No contexto de depuração, o OpenOCD frequentemente abre um servidor Telnet em uma porta específica (geralmente a porta 4444). Isso fornece uma interface de linha de comando direta e legível para o próprio servidor OpenOCD. Enquanto o GDB é usado para depuração em nível de aplicação, a interface Telnet é útil para tarefas avançadas como configurar o OpenOCD, inspecionar o estado da sonda de depuração ou emitir comandos de reset de baixo nível.

### Como Eles Funcionam Juntos

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/36.png" style={{width:1000, height:'auto'}}/></div>

Aqui está um resumo de toda a cadeia de depuração, do seu IDE até o XIAO de destino:

1.  **Você** (no seu IDE) clica em "Start Debugging".
2.  O **IDE** inicia o **GDB** com o arquivo de programa apropriado.
3.  O **GDB** se conecta ao servidor **OpenOCD** em execução no seu PC.
4.  O **OpenOCD** detecta o **XIAO Debug Mate** conectado via USB. Ele se comunica com o dispositivo usando o protocolo **CMSIS-DAP**.
5.  O firmware **DAPLink** no Debug Mate recebe esses comandos CMSIS-DAP.
6.  O **DAPLink** traduz esses comandos em sinais elétricos nos pinos **SWD** (Serial Wire Debug) (SWDIO e SWCLK).
7.  Esses sinais SWD controlam diretamente o **núcleo ARM Cortex** dentro do XIAO de destino, permitindo que o OpenOCD e o GDB pausam a CPU, leiam a memória e realizem todas as outras ações de depuração.

Resumindo: o **GDB** é o comandante, o **OpenOCD** é o tradutor, o **CMSIS-DAP** é o idioma que eles falam, e o **DAPLink** é o soldado em campo executando as ordens.

## Primeiros Passos com Depuração

### Verificação de Compatibilidade

O XIAO Debug Mate foi projetado para todo o ecossistema XIAO, mas o recurso de depuração DAPLink é específico para núcleos ARM Cortex-M. As funções de monitoramento de UART e de Energia, no entanto, são universalmente compatíveis, pois são independentes de arquitetura. Consulte a tabela abaixo para obter informações detalhadas de compatibilidade.

<div class="table-center">

<table align="center">

<tr>

<th>Modelo XIAO</th>

<th>Arquitetura do Núcleo</th>

<th>Depuração DAPLink</th>

<th>Monitor UART</th>

<th>Analisador de Energia</th>

</tr>

<tr>

<td>XIAO SAMD21</td>

<td>ARM Cortex-M0+</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO RP2040</td>

<td>ARM Cortex-M0+</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO RP2350</td>

<td>ARM Cortex-M33</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO nRF52840</td>

<td>ARM Cortex-M4</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO RA4M1</td>

<td>ARM Cortex-M4</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO MG24</td>

<td>ARM Cortex-M33</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO nRF54L15</td>

<td>ARM Cortex-M33</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-C3</td>

<td>RISC-V</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-C5</td>

<td>RISC-V</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-C6</td>

<td>RISC-V</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-S3</td>

<td>Xtensa LX7</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

</table>

</div>

### Preparação de Software

Antes de começar a depurar, você precisa configurar o seu computador host com o software necessário.

#### Instalar o OpenOCD

:::tip
Verificado: Use a versão 0.12.0-7 ou posterior do OpenOCD.
:::

Para garantir compatibilidade e ter acesso aos recursos mais recentes, recomendamos fortemente o uso da versão **xPack** do OpenOCD. Gerenciadores de pacotes do sistema (como Homebrew no macOS ou APT no Linux) frequentemente fornecem versões antigas e desatualizadas que podem não funcionar corretamente com alvos modernos.

:::tip Observação sobre o PlatformIO
Se você estiver usando o VS Code com a extensão PlatformIO, o PlatformIO fará o download e configurará automaticamente a versão correta do OpenOCD para o seu projeto quando você iniciar uma sessão de depuração.
:::

<Tabs>
<TabItem value="Windows" label="Windows" default>

No Windows, o método de instalação manual é simples.

1.  **Baixe o pacote do OpenOCD**

Acesse a [página de lançamentos do xPack OpenOCD](https://github.com/xpack-dev-tools/openocd-xpack/releases). A versão mais recente é sempre listada no topo. Encontre a versão para Windows (por exemplo, `xpack-openocd-...-win32-x64.zip`) no lançamento mais recente e baixe esse arquivo.

2.  **Extraia os Arquivos**

Clique com o botão direito no arquivo ZIP baixado e selecione "Extract All...". Escolha um local estável, como `C:\Users\YourName\AppData\Local\xPacks\OpenOCD`. Após a extração, você terá uma pasta como `xpack-openocd-0.12.0-7` contendo um diretório `bin`.

3.  **Adicione o OpenOCD à variável PATH do sistema**

Isso permite que você execute `openocd` a partir de qualquer terminal.

    - Pesquise por "Environment Variables" no Menu Iniciar e selecione "Edit the system environment variables".
    - Clique em **"Environment Variables..."**.
    - Em "System variables", selecione a variável **"Path"** e clique em **"Edit..."**.
    - Clique em **"New"** e cole o caminho completo para o diretório `bin` que você extraiu anteriormente. Por exemplo:  
      `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\bin`
    - Clique em OK em todas as janelas para salvar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_3.png" style={{width:1000, height:'auto'}}/></div>

4.  **Verifique a Instalação**

Abra uma nova janela do Prompt de Comando ou do PowerShell e execute:

```bash
openocd --version
```

Se a instalação tiver sido bem-sucedida, você verá as informações de versão impressas (por exemplo, `xPack Open On-Chip Debugger 0.12.0+dev-02228`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_4.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="MacOS" label="MacOS">

Este processo é semelhante à configuração manual no Windows.

1.  **Baixar o pacote OpenOCD**

Acesse a [página de releases do xPack OpenOCD](https://github.com/xpack-dev-tools/openocd-xpack/releases). Encontre a versão mais recente e baixe o arquivo correto para o seu Mac (por exemplo, `...-darwin-x64.tar.gz` para Intel ou `...-darwin-arm64.tar.gz` para Apple Silicon).

2.  **Extrair os arquivos**

Abra um Terminal e execute os seguintes comandos. Vamos criar um local padrão no seu diretório inicial.

```bash
# Create a directory for xPack tools if it doesn't exist
mkdir -p ~/opt

# Go to the Downloads folder (or wherever you saved the file)
cd ~/Downloads

# Extract the archive into the opt directory
tar -xvf xpack-openocd-*.tar.gz -C ~/opt
```

3.  **Adicionar o OpenOCD ao seu PATH**

Você precisa informar ao seu shell onde encontrar o executável `openocd`. O shell padrão nas versões modernas do macOS é o Zsh.

```bash
# Add the path to your .zshrc file (for Zsh)
echo 'export PATH="$HOME/opt/xpack-openocd-0.12.0-7/bin:$PATH"' >> ~/.zshrc
```

:::note
Certifique-se de substituir `xpack-openocd-0.12.0-7` pelo nome real da pasta que foi criada. Se você usar Bash, edite `~/.bash_profile` em vez de `~/.zshrc`.
:::

4.  **Aplicar e verificar**

A alteração do `PATH` que você fez não fica ativa na sessão atual do terminal até que o arquivo de configuração seja recarregado.

Execute o seguinte comando no terminal existente:

```bash
# For Zsh (default on modern macOS)
source ~/.zshrc
```

Agora, verifique a instalação executando:

```bash
openocd --version
```

Você deverá ver as informações corretas da versão do xPack.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_5.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
<TabItem value="Linux" label="Linux">

Este processo espelha a configuração manual em outros sistemas operacionais.

1.  **Baixar o pacote OpenOCD**

Acesse a [página de releases do xPack OpenOCD](https://github.com/xpack-dev-tools/openocd-xpack/releases). Encontre a versão mais recente e baixe o arquivo para Linux (`...-linux-x64.tar.gz`).

2.  **Extrair os arquivos**

Abra um Terminal e execute os seguintes comandos.

```bash
# Create a directory for xPack tools if it doesn't exist
mkdir -p ~/opt

# Go to the Downloads folder
cd ~/Downloads

# Extract the archive into the opt directory
tar -xvf xpack-openocd-*.tar.gz -C ~/opt
```

3.  **Adicionar o OpenOCD ao seu PATH**

Você precisa informar ao seu shell onde encontrar o executável `openocd`. A maioria das distribuições Linux usa o shell Bash.

```bash
# Add the path to your .bashrc file
echo 'export PATH="$HOME/opt/xpack-openocd-0.12.0-7/bin:$PATH"' >> ~/.bashrc
```

:::note
Certifique-se de substituir `xpack-openocd-0.12.0-7` pelo nome real da pasta que foi criada.
:::

4.  **Aplicar e verificar**

A alteração do `PATH` que você fez não fica ativa na sessão atual do terminal até que o arquivo de configuração seja recarregado.

Execute o seguinte comando no terminal existente:

```bash
# For Bash (default on most Linux distros)
source ~/.bashrc
```

Agora, verifique a instalação executando:

```bash
openocd --version
```

Você deverá ver as informações corretas da versão do xPack.

</TabItem>
</Tabs>

#### Instalar o PyOCD

:::info
Se você pretende usar o recurso de gravação de firmware para o XIAO RA4M1, talvez seja necessário consultar as etapas aqui para baixar e usar adicionalmente o PyOCD.
:::

PyOCD é uma ferramenta baseada em Python para programação e depuração de microcontroladores Arm Cortex-M.

<Tabs>
<TabItem value="Windows" label="Windows" default>

1.  **Pré-requisitos**
    Certifique-se de que o **Python** esteja instalado em seu sistema. Caso não esteja, baixe-o no site oficial [python.org](https://www.python.org/) e garanta que a opção **"Add Python to PATH"** esteja marcada durante a instalação.

2.  **Instalar o PyOCD**
    Abra uma janela do Prompt de Comando ou do PowerShell e execute o seguinte comando:

    ```bash
    pip install -U pyocd
    ```

3.  **Instalar o pacote de suporte ao XIAO RA4M1**
    O XIAO RA4M1 usa o chip `R7FA4M1AB`. Você precisa instalar o pacote de suporte específico para que o PyOCD possa reconhecê-lo.

    Pesquise o pacote para confirmar a disponibilidade:
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    Instale o pacote:
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **Verificar alvos**
    Verifique se o alvo agora é reconhecido:
    ```bash
    pyocd list --targets
    ```
    Você deverá ver `r7fa4m1ab` na lista.

</TabItem>
<TabItem value="MacOS" label="MacOS">

1.  **Pré-requisitos**
    O MacOS geralmente vem com Python, mas é recomendável usar o Homebrew ou o instalador oficial para obter a versão mais recente. Abra o seu Terminal.

2.  **Instalar o PyOCD**
    Execute o seguinte comando no Terminal:

    ```bash
    pip3 install -U pyocd
    ```

3.  **Instalar o pacote de suporte ao XIAO RA4M1**
    O XIAO RA4M1 usa o chip `R7FA4M1AB`. Você precisa instalar o pacote de suporte específico.

    Pesquise o pacote:
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    Instale o pacote:
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **Verificar alvos**
    Verifique se o alvo é reconhecido:
    ```bash
    pyocd list --targets
    ```

</TabItem>
<TabItem value="Linux" label="Linux">

1.  **Pré-requisitos**
    Certifique-se de que `python3` e `pip` estejam instalados via seu gerenciador de pacotes (por exemplo, `sudo apt install python3-pip` no Ubuntu).

    :::note Permissões de USB
    No Linux, você também pode precisar configurar regras udev para permitir o acesso ao dispositivo USB sem usar `sudo`.
    :::

2.  **Instalar o PyOCD**
    Execute o seguinte comando no Terminal:

    ```bash
    pip3 install -U pyocd
    ```

3.  **Instalar o pacote de suporte ao XIAO RA4M1**
    O XIAO RA4M1 usa o chip `R7FA4M1AB`.

    Pesquise o pacote:
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    Instale o pacote:
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **Verificar alvos**
    Verifique se o alvo é reconhecido:
    ```bash
    pyocd list --targets
    ```

</TabItem>
</Tabs>


#### Entendendo o pacote `XIAO_Debug_Mate_DAPLink_Package`

Antes de começar a usar o recurso de Debugger DAPLink, você precisará baixar o arquivo ZIP separadamente. Esse arquivo contém todos os arquivos necessários para depurar várias placas XIAO.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_DAPLink_Package-v1.0.zip" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Baixar arquivo ZIP</font></span></strong>
    </a>
</div>


##### Explicação da estrutura de diretórios

Depois de descompactar o arquivo, você verá a seguinte estrutura de pastas. Cada parte tem uma finalidade específica:

```
XIAO_Debug_Mate_DAPLink_Package/
├── examples/
│   ├── Blink_nrf52840.elf
│   ├── Blink_SAMD21.bin
│   └── ... (other example firmwares)
├── target/
│   ├── XIAO_RA4M1/
│   │   └── ra4m1.cfg
│   └── XIAO_SAMD21/
│       └── at91samd21g18.cfg
├── XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0/
│   ├── bin/
│   │   └── openocd
│   └── share/
│       └── ... (OpenOCD scripts)
└── XIAO_MG24_Win_OpenOCD-v0.12.0/
    ├── bin/
    │   └── openocd.exe
    └── share/
        └── ... (OpenOCD scripts)
```

*   **`examples/`**
    Esta pasta contém arquivos de firmware de exemplo pré-compilados (por exemplo, `.bin`, `.elf`, `.hex`) para várias placas XIAO, que foram exportados do Arduino. Eles serão usados em tutoriais posteriores para demonstrar como gravar e depurar os microcontroladores.

*   **`target/`**
    Esta pasta contém arquivos de configuração de alvo (`.cfg`) para placas XIAO que podem estar ausentes na distribuição oficial do OpenOCD. Quando você usar placas como a XIAO SAMD21 ou XIAO RA4M1 com a instalação existente do OpenOCD no seu sistema, será necessário adicionar manualmente esses arquivos de configuração ao seu ambiente OpenOCD. As etapas específicas de como fazer isso serão abordadas mais adiante.

*   **`XIAO_MG24_..._OpenOCD-v0.12.0/`**
    Este é um componente especial e muito importante para a placa **XIAO MG24**. Atualmente, o suporte para esse chip não está disponível nos releases oficiais do OpenOCD nem nas distribuições padrão do xPack. Para resolver isso, fornecemos pacotes OpenOCD completos e independentes tanto para Windows (`XIAO_MG24_Win_...`) quanto para macOS/Linux (`XIAO_MG24_Mac_Linux_...`). Quando você estiver trabalhando com a XIAO MG24, **deve** usar o executável `openocd` fornecido dentro dessas pastas específicas.

### Preparação de hardware

Conectar seu hardware para depuração é simples.

#### Para placas XIAO

:::tip
De modo geral, todas as funções do XIAO no Debug Mate não exigem alimentação adicional para o XIAO, a menos que indicado de outra forma.
:::

O XIAO Debug Mate foi projetado para uma experiência perfeita de plug-and-play com todas as placas XIAO da Seeed Studio.

1.  Pegue sua placa XIAO e alinhe-a com os conectores fêmea no Debug Mate.
2.  **Certifique-se de que a porta USB-C do XIAO esteja voltada para a mesma direção da porta USB-C no Debug Mate.**
3.  Pressione firmemente o XIAO diretamente para baixo no soquete até que esteja totalmente encaixado. Isso garante que os pinos pogo no Debug Mate façam uma conexão sólida com os pads SWD na parte inferior do XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/connect_xiao.gif" style={{width:600, height:'auto'}}/></div>

:::note
Algumas das primeiras placas XIAO, como **XIAO SAMD21**, **XIAO RP2040** e **XIAO nRF52840**, foram projetadas antes de um padrão unificado para os pads da parte traseira ser estabelecido. Embora os pinos pogo do Debug Mate estejam posicionados para serem o mais compatíveis possível, pequenas variações nessas placas mais antigas podem levar a um contato imperfeito.

Se você tiver uma conexão de depuração instável, tente **ajustar levemente a posição** da placa XIAO dentro do soquete. Talvez você não precise pressioná-la até o fim. Um pequeno deslocamento geralmente é suficiente para garantir que os pinos pogo façam um contato firme com os pads SWD na parte de trás do XIAO.
:::

:::danger hot-swapping
Desaconselhamos fortemente a troca a quente entre o XIAO e o Debug Mate!
:::

#### Para Outras Placas de Desenvolvimento

Você também pode usar o XIAO Debug Mate como uma sonda de depuração SWD genérica para outras placas de desenvolvimento baseadas em ARM.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/16.jpg" style={{width:800, height:'auto'}}/></div>

1.  Você vai precisar de quatro fios DuPont (fêmea-para-macho ou fêmea-para-fêmea, dependendo da sua placa alvo).
2.  Localize os pinos de depuração SWD na sua placa alvo. Eles são tipicamente rotulados como `SWDIO`, `SWCLK`, `GND` e, às vezes, `VTref` ou `VCC`.
3.  Conecte os fios dos headers de expansão do XIAO Debug Mate à sua placa alvo da seguinte forma:

| Pino do XIAO Debug Mate | Pino da Placa Alvo | Descrição                               |
| :---------------------- | :----------------- | :-------------------------------------- |
| `SWDIO`                 | `SWDIO`            | Entrada/Saída de Dados Seriais (Serial Wire Data Input/Output)             |
| `SWCLK`                 | `SWCLK`            | Clock de Fio Serial (Serial Wire Clock)                        |
| `GND`                   | `GND`              | Terra Comum                             |
| `VCC`                   | `VTref` or `3V3`   | Referência de Tensão da Placa Alvo (Importante para mudança de nível) |

Uma vez conectado, você pode configurar o OpenOCD para usar a interface CMSIS-DAP e iniciar sua sessão de depuração como faria com qualquer outra sonda.


## Interagindo com o OpenOCD via Telnet

Embora IDEs modernas forneçam uma interface gráfica para depuração, às vezes você precisa de uma forma mais direta e de baixo nível de interagir com o depurador. É aí que entra o Telnet. O OpenOCD executa um servidor Telnet que permite que você se conecte diretamente e envie comandos baseados em texto para controlar o chip alvo. Isso é incrivelmente útil para verificações rápidas, scripts de tarefas automatizadas ou depuração de problemas quando uma IDE completa não está disponível ou não é necessária.

### Habilitando o Cliente Telnet

Antes de poder usar o Telnet, você talvez precise habilitá-lo em seu sistema operacional, já que ele nem sempre está instalado ou habilitado por padrão.

<Tabs>
<TabItem value="Windows" label="Windows" default>

Nos sistemas Windows modernos, o cliente Telnet é um recurso legado que precisa ser habilitado manualmente.

1.  Pressione `Win` + `R` para abrir a caixa de diálogo "Run", digite `control panel` e pressione Enter.
2.  Vá em **Programs** > **Programs and Features**.
3.  No lado esquerdo, clique em **Turn Windows features on or off**.
4.  Na nova janela que aparecer, role para baixo e encontre **Telnet Client**.
5.  Marque a caixa ao lado e clique em **OK**. O Windows irá instalar o recurso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_6.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="MacOS" label="MacOS">
O cliente Telnet nativo pode ter sido removido nas versões mais recentes do macOS. A maneira mais fácil de instalá-lo é usando o [Homebrew]. Abra o Terminal e execute:
```bash
brew install telnet
```
</TabItem>
<TabItem value="Linux" label="Linux">
A maioria das distribuições Linux vem com um cliente Telnet. Se ele não estiver presente, você pode instalá-lo facilmente usando o seu gerenciador de pacotes. Para sistemas baseados em Debian/Ubuntu, abra um terminal e execute:
```bash
sudo apt-get update
sudo apt-get install telnet
```
</TabItem>
</Tabs>

### Depuração Passo a Passo com Telnet

#### Passo 1: Executar o Servidor OpenOCD

Encontre sua placa XIAO na lista abaixo e siga as instruções específicas para o seu sistema operacional para iniciar o servidor OpenOCD. Esse processo de servidor irá aguardar uma conexão de um depurador como o GDB.

##### Para Seeed Studio XIAO SAMD21

O pacote padrão do OpenOCD não inclui o arquivo de configuração para o XIAO SAMD21. Você deve copiá-lo manualmente do pacote que fornecemos para o diretório de instalação do OpenOCD no seu sistema.

**1. Copiar o Arquivo de Configuração**

*   **Arquivo de Origem:** Do `XIAO_Debug_Mate_DAPLink_Package`, encontre o arquivo: `target/XIAO_SAMD21/at91samd21g18.cfg`.
*   **Pasta de Destino:** Copie esse arquivo para a pasta de scripts `target` da instalação do xPack OpenOCD. O caminho irá variar de acordo com o sistema operacional:

    *   **Windows:** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux:** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
Substitua `YourName` e `xpack-openocd-0.12.0-7` pelo seu nome de usuário real e pela versão do OpenOCD que você instalou.
:::

**2. Executar o Comando OpenOCD**

Abra um novo terminal em qualquer lugar do seu sistema e execute o comando correspondente:

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg
    ```

---

##### Para Seeed Studio XIAO RP2040

A configuração para o RP2040 está incluída no xPack OpenOCD padrão. Abra um terminal e execute o comando.

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000"
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000"
    ```

---

##### Para Seeed Studio XIAO RP2350

A configuração para o RP2350 está incluída no xPack OpenOCD padrão. Abra um terminal e execute o comando.

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000"
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000"
    ```

---

##### Para Seeed Studio XIAO nRF52840

A configuração para nRF52 está incluída no xPack OpenOCD padrão. Abra um terminal e execute o comando.

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg
    ```

---

##### Para Seeed Studio XIAO RA4M1

Semelhante ao SAMD21, o pacote padrão do OpenOCD não inclui o arquivo de configuração para o XIAO RA4M1. Você deve copiá-lo manualmente.

**1. Copiar o Arquivo de Configuração**

*   **Arquivo de Origem:** Do `XIAO_Debug_Mate_DAPLink_Package`, encontre o arquivo: `target/XIAO_RA4M1/ra4m1.cfg`.
*   **Pasta de Destino:** Copie esse arquivo para a pasta de scripts `target` da sua instalação do xPack OpenOCD.

    *   **Windows:** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux:** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
Substitua `YourName` e `xpack-openocd-0.12.0-7` pelo seu nome de usuário real e pela versão do OpenOCD que você instalou.
:::

**2. Executar o Comando OpenOCD**

Abra um novo terminal em qualquer lugar do seu sistema e execute o comando correspondente:

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/ra4m1.cfg
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/ra4m1.cfg
    ```

---

##### Para Seeed Studio XIAO MG24

:::warning[Important]
O XIAO MG24 requer uma versão especial do OpenOCD que está incluída no `XIAO_Debug_Mate_DAPLink_Package`. **Não** use a instalação do OpenOCD do seu sistema. Você **deve** executar os comandos dentro do diretório específico fornecido no pacote.
:::

**1. Preparar o Seu Terminal**

Abra sua ferramenta de linha de comando e navegue até a pasta correta para o seu sistema operacional dentro do pacote descompactado.

*   **Windows:**
    ```bash
    # Example if you unzipped it on your Desktop:
    cd C:\Users\YourName\Desktop\XIAO_Debug_Mate_DAPLink_Package\XIAO_MG24_Win_OpenOCD-v0.12.0
    ```
*   **macOS / Linux:**
    ```bash
    # Example if you unzipped it on your Desktop:
    cd ~/Desktop/XIAO_Debug_Mate_DAPLink_Package/XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0
    ```

**2. Executar o Comando OpenOCD**

Depois que você estiver dentro do diretório correto, execute o seguinte comando:

*   **Windows:**
    ```bash
    bin\openocd.exe -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "reset_config srst_nogate"
    ```
*   **macOS / Linux:**
    ```bash
    bin/openocd -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "reset_config srst_nogate"
    ```

#### Explicação do Comando

Entender o que cada parte do comando faz pode ajudar você a solucionar problemas ou personalizar seu fluxo de trabalho. Vamos dissecar um comando típico:

`bin/openocd -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "..."`

*   `bin/openocd` (ou `bin\openocd.exe`): Isso executa o programa OpenOCD. Assumimos que ele está localizado em um subdiretório `bin`, o que é uma convenção padrão. O nome e a extensão irão variar conforme o sistema operacional.

*   `-s share/openocd/scripts`: A opção `-s` é crucial. Ela informa ao OpenOCD onde **p**rocurar (search) sua biblioteca de scripts. Com esse caminho definido, o OpenOCD consegue encontrar os arquivos especificados pelas opções `-f`.

*   `-f interface/cmsis-dap.cfg`: A opção `-f` especifica um arquivo de con**f**iguração a ser carregado. Este primeiro define o adaptador de depuração que estamos usando (uma sonda CMSIS-DAP padrão).

*   `-f target/rp2040.cfg`: Essa segunda opção `-f` carrega a configuração para o microcontrolador alvo (o chip RP2040 na placa XIAO).

*   `-c "..."`: A opção `-c` passa um comando (**c**ommand) para o OpenOCD depois que ele é iniciado.
    *   `adapter speed 5000`: (Para RP2040/RP2350) Define a velocidade do clock SWD para 5000 kHz para uma comunicação estável.
    *   `reset_config srst_nogate`: (Para MG24) Uma configuração de reset especial exigida para esse alvo específico.

Depois de executar um desses comandos, o OpenOCD irá inicializar a conexão e aguardar que um depurador, como o GDB, se conecte (tipicamente na porta 3333). Você pode então usar o depurador para carregar seu programa (`load <path/to/your/firmware.elf>`), definir breakpoints e depurar seu código.

#### Passo 2: Conectar ao Servidor Telnet

Agora, abra uma **segunda, nova** janela de Prompt de Comando ou Terminal. Digite o seguinte comando e pressione Enter:

```bash
telnet localhost 4444
```

*   `localhost` se refere ao seu próprio computador.
*   `4444` é o número de porta padrão que o OpenOCD usa para conexões Telnet.

Se a conexão for bem-sucedida, seu terminal exibirá uma mensagem de boas-vindas do OpenOCD e você verá um prompt `>`, pronto para aceitar seus comandos.

#### Etapa 3: Executar comandos de depuração

Agora você pode digitar comandos diretamente na sessão Telnet para controlar o chip de destino. Aqui estão alguns dos comandos mais comuns:

| Comando             | Descrição                                                                                                                                                             |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `init`              | **Inicializar destino.** Estabelece a conexão com o chip. Este deve ser sempre o primeiro comando executado após a conexão.                                            |
| `reset halt`        | **Resetar e pausar.** Reinicia o microcontrolador e imediatamente pausa (interrompe) sua execução. Esta é a principal forma de entrar em um estado pronto para depuração. |
| `reg`               | **Mostrar registradores.** Exibe os valores atuais de todos os registradores da CPU.                                                                                   |
| `mdw [address] [count]` | **Exibir memória em palavras.** Lê e exibe o conteúdo da memória. Por exemplo, `mdw 0x20000000 10` exibirá 10 palavras (valores de 32 bits) começando do endereço de memória `0x20000000`. |
| `step`              | **Execução passo a passo.** Executa uma única instrução na CPU. Se a instrução for uma chamada de função, ele irá avançar *para dentro* da função.                    |
| `resume`            | **Retomar execução.** Permite que o programa seja executado livremente a partir de seu estado atual. Ele continuará até atingir um breakpoint (se houver algum definido) ou até você pausá‑lo novamente. |
| `exit`              | **Sair do Telnet.** Encerra a conexão Telnet e retorna ao seu prompt de comando. O servidor OpenOCD na outra janela continuará em execução.                           |

Uma sessão típica de depuração manual pode seguir estas etapas:
1.  Digite `init` para conectar ao chip.
2.  Digite `reset halt` para parar o programa logo no início.
3.  Digite `mdw 0x20000000 10` para inspecionar alguns valores da RAM.
4.  Digite `step` algumas vezes para percorrer o código inicial de inicialização.
5.  Digite `resume` para permitir que o programa seja executado normalmente.
6.  Digite `exit` quando terminar.

## Gravar o firmware usando OpenOCD/PyOCD

Além da depuração interativa, o XIAO Debug Mate se destaca em programar (gravar) firmware diretamente no microcontrolador de um XIAO usando ferramentas de linha de comando. As principais ferramentas para isso são o **OpenOCD** (Open On-Chip Debugger) e o **PyOCD**.

Este guia o conduzirá pelo uso dessas poderosas ferramentas para enviar arquivos de firmware pré‑compilados. Usamos a designação "OpenOCD/PyOCD" porque a maioria das placas XIAO compatíveis usa OpenOCD, enquanto o **XIAO RA4M1** especificamente exige PyOCD para gravação.

### Compatibilidade de gravação

Esta tabela resume quais placas XIAO e tipos de arquivo são compatíveis com gravação via linha de comando usando as ferramentas fornecidas.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Modelo XIAO</th>
			<th>.bin</th>
			<th>.elf</th>
			<th>.hex</th>
            <th>Bootloader</th>
		</tr>
		<tr>
			<td>Seeed Studio XIAO SAMD21</td>
			<td>✅ (OpenOCD)</td>
			<td>❌</td>
			<td>✅ (OpenOCD)</td>
            <td>✅ (arquivo .bin com OpenOCD)</td>
		</tr>
		<tr>
			<td>Seeed Studio XIAO RP2040</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
			<td>❌</td>
            <td>❌</td>
		</tr>
        <tr>
			<td>Seeed Studio XIAO RP2350</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
			<td>❌</td>
            <td>❌</td>
		</tr>
		<tr>
			<td>Seeed Studio XIAO nRF52840</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
            <td>✅ (arquivo .hex com OpenOCD)</td>
		</tr>
        <tr>
			<td>Seeed Studio XIAO RA4M1</td>
			<td>✅ (PyOCD)</td>
			<td>❌</td>
			<td>✅ (PyOCD)</td>
            <td>✅ (arquivo .hex com PyOCD)</td>
		</tr>
        <tr>
			<td>Seeed Studio XIAO MG24</td>
			<td>❌</td>
			<td>❌</td>
			<td>✅ (OpenOCD)</td>
            <td>❌</td>
		</tr>
	</table>
</div>

1. Os itens marcados com ❌ nesta tabela de compatibilidade são amostras que falharam nos testes com o OpenOCD v0.12.0. Utilize outros arquivos de firmware para economizar seu tempo.
2. Arquivos de bootloader: aqui são fornecidos apenas arquivos de bootloader XIAO e comandos de gravação. Se esse modelo XIAO não for fornecido com arquivos de bootloader, ele será marcado com ❌.
3. **O XIAO RA4M1 e o XIAO MG24 não suportam gravação de arquivos `.elf`. Tentar gravar arquivos `.elf` no XIAO RA4M1 ou XIAO MG24 resultará em travamento permanente do dispositivo**.

### Pré-requisitos

1.  **Instalação do OpenOCD:** Para todas as placas XIAO **exceto o XIAO MG24**, você precisa [ter o OpenOCD instalado em seu sistema e acessível a partir da linha de comando (ou seja, adicionado ao PATH do sistema)](#instalar-openocd).

2.  **Pacote de firmware XIAO Debug Mate:** Preparamos um pacote contendo arquivos de configuração personalizados e firmware de exemplo. Baixe e extraia-o. A estrutura é a seguinte:

    *   `examples/`: Contém firmware de exemplo pré‑compilado (`.elf`, `.hex`, `.bin`) para várias placas XIAO e alguns arquivos de bootloader XIAO.
    *   `target/`: Contém arquivos de configuração personalizados do OpenOCD (`.cfg`) necessários para placas específicas como o XIAO SAMD21 e o RA4M1.
    *   `XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0/`: Um OpenOCD independente para gravar o XIAO MG24 no macOS e Linux.
    *   `XIAO_MG24_Win_OpenOCD-v0.12.0/`: Um OpenOCD independente para gravar o XIAO MG24 no Windows.

3.  **Terminal/Prompt de comando:** Você precisará estar familiarizado em abrir e usar uma interface de linha de comando (por exemplo, Command Prompt, PowerShell ou Terminal).

#### Estratégia de execução de comandos

*   **Opção A (Recomendada): Executar a partir do diretório do pacote**

    Todos os comandos neste guia presumem que você abriu o terminal na raiz da pasta extraída `XIAO_Debug_Mate_DAPLink_Package`. Este é o método mais simples, pois caminhos relativos para firmware e arquivos de configuração funcionarão diretamente.

*   **Opção B (Avançada): Executar de qualquer diretório**

    Se preferir executar comandos a partir da sua própria pasta de projeto, você pode usar a flag `-s` para informar ao OpenOCD onde encontrar os scripts personalizados do nosso pacote.

    *   **Ação necessária:** Adicione `-s <path_to_package_folder>` ao seu comando `openocd`. Por exemplo:

        ```bash
        # Replace <path_to_package_folder> with the actual path
        openocd -s <path_to_package_folder> -f interface/cmsis-dap.cfg -f target/XIAO_SAMD21/at91samd21g18.cfg ...
        ```

:::note
**Windows vs. macOS/Linux:** Em todos os comandos, usuários de Windows devem usar `openocd.exe` em vez de `openocd`. Recomendamos usar barras normais (`/`) em caminhos de arquivos para compatibilidade entre plataformas.
:::

**Para gravar seu próprio firmware personalizado:**

Basta substituir o caminho de exemplo (por exemplo, `examples/Blink_RP2040.elf`) pelo caminho para o seu próprio arquivo de firmware.

### Entendendo arquivos de firmware (.bin, .hex, .elf)

Quando você compila um projeto, a toolchain produz um arquivo a ser enviado ao microcontrolador. Você encontrará comumente três formatos:

*   **.bin (Binary):** Um arquivo binário bruto e compacto contendo apenas o código de máquina. Ele não possui informações extras sobre endereços de memória, portanto a ferramenta de programação deve ser informada sobre onde colocá-lo.
*   **.hex (Intel HEX):** Uma representação em texto ASCII do código binário. Inclui endereços de memória, checksums e metadados, tornando‑o um formato mais robusto que o `.bin`.
*   **.elf (Executable and Linkable Format):** O formato mais completo. Contém o código de máquina, informações de endereço de memória e também informações de depuração como nomes de funções, nomes de variáveis e números de linha do código‑fonte. Este é o formato preferido para depuração.
*   **.bootloader (Arquivo de bootloader):** Um arquivo de bootloader é uma imagem de firmware especializada que reside em uma região protegida da memória do microcontrolador e é responsável por facilitar a gravação de firmware, recuperação do dispositivo e tarefas de inicialização. Nas placas XIAO, o bootloader permite que você envie novo código de aplicação para o dispositivo (geralmente via USB) sem precisar de um programador de hardware dedicado. Se um dispositivo se tornar não responsivo ou o programa principal falhar, regravar o bootloader pode ajudar a recuperar a placa. Utilize apenas o arquivo de bootloader oficial para o modelo específico da sua placa, pois usar um arquivo incorreto pode tornar o dispositivo inoperante até que seja reparado com ferramentas especiais.

**Como obter esses arquivos a partir do seu projeto:**

*   **Arduino IDE:** Após compilar (`Sketch > Verify/Compile`), use `Sketch > Export compiled Binary`. Isso salvará um arquivo `.hex` ou `.bin` na pasta do seu sketch.
*   **PlatformIO:** Após uma compilação bem-sucedida, os arquivos de firmware (`firmware.bin`, `firmware.hex`, `firmware.elf`) estarão localizados no diretório `.pio/build/<environment_name>/` do seu projeto.



### Gravando arquivos `.bin`

#### Para Seeed Studio XIAO SAMD21

O pacote padrão do OpenOCD não inclui o arquivo de configuração para o XIAO SAMD21. Você deve copiá‑lo manualmente do pacote fornecido para o diretório de instalação do OpenOCD em seu sistema.

**1. Copiar o arquivo de configuração**

*   **Arquivo de origem:** No `XIAO_Debug_Mate_DAPLink_Package`, localize o arquivo: `target/XIAO_SAMD21/at91samd21g18.cfg`.
*   **Pasta de destino:** Copie este arquivo para a pasta de scripts `target` da instalação xPack OpenOCD. O caminho varia de acordo com o sistema operacional:

    *   **Windows:** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux:** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
Substitua `YourName` e `xpack-openocd-0.12.0-7` pelo seu nome de usuário real e pela versão do OpenOCD que você instalou.
:::

**2. Gravar o firmware**

Abra um novo terminal em qualquer lugar do seu sistema e execute o comando correspondente:

*   **No Windows:**
    ```powershell
    openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.bin 0x00002000 verify reset; shutdown"
    ```

*   **No macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.bin 0x00002000 verify reset; shutdown"
    ```

---

#### Para Seeed Studio XIAO RP2040

Ao usar o OpenOCD para gravar o XIAO RP2040, é altamente recomendável usar arquivos `.elf` em vez de arquivos `.bin`.

Isso ocorre porque arquivos `.elf` já contêm internamente as informações de endereço de memória do programa (Linker Address). O OpenOCD irá gravá-lo automaticamente no local correto (geralmente `0x10000000`), portanto você não precisa calcular ou adivinhar manualmente o endereço de deslocamento.

Se você precisar usar arquivos `.bin`, será necessário especificar manualmente o endereço inicial da Flash do XIAO RP2040, `0x10000000`.

**No Windows:**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.bin 0x10000000 verify reset exit"
```

**No macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.bin 0x10000000 verify reset exit"
```

---

#### Para Seeed Studio XIAO RP2350

Ao usar o OpenOCD para gravar o XIAO RP2350, é altamente recomendável usar arquivos `.elf` em vez de arquivos `.bin`.

Isso ocorre porque arquivos `.elf` já contêm internamente as informações de endereço de memória do programa (Linker Address). O OpenOCD irá gravá-lo automaticamente no local correto (geralmente `0x10000000`), portanto você não precisa calcular ou adivinhar manualmente o endereço de deslocamento.

Se você precisar usar arquivos `.bin`, será necessário especificar manualmente o endereço inicial da Flash do XIAO RP2350, `0x10000000`.

**No Windows:**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.bin 0x10000000 verify reset exit"
```

**No macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.bin 0x10000000 verify reset exit"
```

---

#### Para Seeed Studio XIAO nRF52840

A configuração para nRF52 está incluída no xPack OpenOCD padrão. Abra um terminal e execute o comando.

**No Windows:**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.bin 0x27000 verify reset exit"
```

**No macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.bin 0x27000 verify reset exit"
```

---

#### Para Seeed Studio XIAO RA4M1

Atualmente, as distribuições padrão do OpenOCD frequentemente não possuem suporte integrado para a série Renesas RA, como drivers dedicados e arquivos de configuração de alvo. Isso torna o uso do OpenOCD para gravação um processo complexo que requer configuração manual.

Portanto, recomendamos fortemente o uso do `PyOCD`, que fornece suporte pronto para uso ao RA4M1.

Para gravar o firmware (por exemplo, `Blink_RA4M1.hex`), use o comando correspondente ao seu sistema operacional.

**No Windows:**
```powershell
pyocd flash -t r7fa4m1ab examples\Blink_RA4M1.bin —base-address 0x4000
```

**No macOS / Linux:**
```bash
pyocd flash -t r7fa4m1ab examples/Blink_RA4M1.bin —base-address 0x4000
```


### Gravando arquivos `.elf`

:::danger
Ao gravar arquivos `.elf`, preste muita atenção ao tamanho do firmware. Se o arquivo exceder 2MB, certifique-se de que o seu dispositivo tenha espaço de armazenamento Flash suficiente. Caso contrário, você pode acabar inutilizando o seu dispositivo!
:::

#### Para Seeed Studio XIAO SAMD21

Devido à memória Flash limitada de 256KB do XIAO SAMD21, ele normalmente não consegue gravar arquivos de firmware maiores que 256KB. O arquivo `.elf` do exemplo Blink já chega a 658KB, tornando impossível sua gravação. Recomendamos usar arquivos menores `.bin` ou `.hex` em seu lugar.

---

#### Para Seeed Studio XIAO RP2040

A configuração para RP2040 está incluída no xPack OpenOCD padrão. Abra um terminal e execute o comando.

**No Windows:**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.elf verify reset exit"
```

**No macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.elf verify reset exit"
```

---

#### Para Seeed Studio XIAO RP2350

A configuração para RP2350 está incluída no xPack OpenOCD padrão. Abra um terminal e execute o comando.

**No Windows:**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.elf verify reset exit"
```

**No macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.elf verify reset exit"
```

---

#### Para Seeed Studio XIAO nRF52840

A configuração para nRF52 está incluída no xPack OpenOCD padrão. Abra um terminal e execute o comando.

**No Windows:**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.elf verify reset exit"
```

**No macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.elf verify reset exit"
```

:::tip
Às vezes pode ser necessário gravar o firmware duas vezes para que ele tenha efeito; isso é normal.
:::

---

#### Para Seeed Studio XIAO RA4M1

:::danger NÃO INUTILIZE O DISPOSITIVO
O XIAO RA4M1 proíbe a gravação de arquivos `.elf`, pois isso pode inutilizar o dispositivo!!!
:::

---

#### Para Seeed Studio XIAO MG24

:::danger NÃO INUTILIZE O DISPOSITIVO
O XIAO MG24 proíbe a gravação de arquivos `.elf`, pois isso pode inutilizar o dispositivo!!!
:::


### Gravando arquivos `.hex`

#### Para Seeed Studio XIAO SAMD21

O pacote padrão do OpenOCD não inclui o arquivo de configuração para o XIAO SAMD21. Você precisa copiá-lo manualmente do pacote que fornecemos para o diretório de instalação do OpenOCD no seu sistema.

**1. Copie o arquivo de configuração**

*   **Arquivo de origem:** A partir do `XIAO_Debug_Mate_DAPLink_Package`, localize o arquivo: `target/XIAO_SAMD21/at91samd21g18.cfg`.
*   **Pasta de destino:** Copie esse arquivo para a pasta de scripts `target` da instalação do xPack OpenOCD. O caminho varia de acordo com o sistema operacional:

    *   **Windows:** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux:** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
Substitua `YourName` e `xpack-openocd-0.12.0-7` pelo seu nome de usuário real e pela versão do OpenOCD que você instalou.
:::

**2. Grave o firmware**

Abra um novo terminal em qualquer lugar do seu sistema e execute o comando correspondente:

*   **No Windows:**
    ```powershell
    openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.hex verify reset; shutdown"
    ```

*   **No macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.hex verify reset; shutdown"
    ```

---

#### Para Seeed Studio XIAO nRF52840

A configuração para nRF52 está incluída no xPack OpenOCD padrão. Abra um terminal e execute o comando.

**No Windows:**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.hex verify reset exit"
```

**No macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.hex verify reset exit"
```

---

#### Para Seeed Studio XIAO RA4M1

Atualmente, as distribuições padrão do OpenOCD frequentemente não possuem suporte integrado para a série Renesas RA, como drivers dedicados e arquivos de configuração de alvo. Isso torna o uso do OpenOCD para gravação um processo complexo que requer configuração manual.

Portanto, recomendamos fortemente o uso do `PyOCD`, que fornece suporte pronto para uso ao RA4M1.

Para gravar o firmware (por exemplo, `Blink_RA4M1.hex`), use o comando correspondente ao seu sistema operacional.

**No Windows:**
```powershell
pyocd flash -e sector -a 0x0 -t r7fa4m1ab examples\Blink_RA4M1.hex
```

**No macOS / Linux:**
```bash
pyocd flash -e sector -a 0x0 -t r7fa4m1ab examples/Blink_RA4M1.hex
```

**Explicação do comando:**
*   `pyocd flash`: Executa a operação de gravação.
*   `-e sector`: Apaga os setores necessários da memória flash antes da programação.
*   `-a 0x0`: Especifica o endereço inicial para gravação, que é `0x00000000`.
*   `-t r7fa4m1ab`: Especifica o tipo de MCU de destino.
*   `examples\Blink_RA4M1.hex` ou `examples/Blink_RA4M1.hex`: O caminho para o arquivo de firmware que você deseja gravar. Observe o uso de `\` no Windows e `/` no macOS/Linux.

#### Para Seeed Studio XIAO MG24

Esta placa requer sua versão dedicada do OpenOCD, presente no pacote. Você **deve** navegar até o diretório correto antes de executar o comando.

1.  **Navegue até o diretório correto:**
    *   **No Windows:** Abra um Prompt de Comando e execute:
        `cd XIAO_MG24_Win_OpenOCD-v0.12.0`
    *   **No macOS/Linux:** Abra um Terminal e execute:
        `cd XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0`

2.  **Execute o comando de gravação:**
    O caminho para o firmware agora é `../examples/Blink_MG24.hex` porque você está dois níveis abaixo dentro do diretório do pacote.

    **No Windows:**
    ```powershell
    bin\openocd.exe -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "init; reset_config srst_nogate; reset halt; program ../examples/Blink_MG24.hex; reset; exit"
    ```

    **No macOS / Linux:**
    ```bash
    bin/openocd -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "init; reset_config srst_nogate; reset halt; program ../examples/Blink_MG24.hex; reset; exit"
    ```


### Gravando arquivos de bootloader

Esta é uma operação crítica que pode restaurar uma placa.

#### Para Seeed Studio XIAO SAMD21

O pacote padrão do OpenOCD não inclui o arquivo de configuração para o XIAO SAMD21. Você deve copiá‑lo manualmente do pacote que fornecemos para o diretório de instalação do OpenOCD do seu sistema.

**1. Copiar o arquivo de configuração**

*   **Arquivo de origem:** No `XIAO_Debug_Mate_DAPLink_Package`, encontre o arquivo: `target/XIAO_SAMD21/at91samd21g18.cfg`.
*   **Pasta de destino:** Copie este arquivo para a pasta de scripts `target` da sua instalação do xPack OpenOCD. O caminho varia conforme o sistema operacional:

    *   **Windows:** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux:** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
Substitua `YourName` e `xpack-openocd-0.12.0-7` pelo seu nome de usuário e pela versão do OpenOCD que você instalou.
:::

**2. Gravar o firmware**

Este comando usa o arquivo personalizado `at91samd21g18.cfg` fornecido em nosso pacote para gravar um Bootloader `.bin`.

*   **No Windows:**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Bootloader_SAMD21.bin verify reset; shutdown"
```

*   **No macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Bootloader_SAMD21.bin verify reset; shutdown"
```

#### Para Seeed Studio XIAO nRF52840

Este processo envolve baixar o Bootloader, depois apagar o chip e gravar o novo arquivo.

Este comando usa o `nrf52.cfg` padrão da sua instalação do OpenOCD.

**No Windows:**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "init" -c "halt" -c "nrf5 mass_erase" -c "program examples/Bootloader_nRF52840-0.6.1.hex verify" -c "reset" -c "exit"
```

**No macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "init" -c "halt" -c "nrf5 mass_erase" -c "program examples/Bootloader_nRF52840-0.6.1.hex verify" -c "reset" -c "exit"
```

:::tip
Depois de gravar o Bootloader usando o OpenOCD e então gravar o binário do firmware, o binário do firmware não consegue ser executado corretamente. Você precisa enviar um programa usando o Arduino para que o programa seja executado normalmente.

Isso acontece porque os Bootloaders de chips da série Nordic (como o nRF52832) precisam verificar informações de validade sobre o firmware da aplicação em um endereço de memória específico (geralmente chamado de "Bootloader Settings Page") durante a inicialização. Esta "página de configurações" contém o checksum CRC do firmware, o tamanho e flags de validade.

Quando você utiliza ferramentas de programação de uso geral como o OpenOCD para gravar diretamente arquivos .bin, elas apenas escrevem os dados binários do firmware no endereço inicial da aplicação especificado e não geram nem escrevem automaticamente a "página de configurações" exigida pelo Bootloader. Portanto, quando o dispositivo reinicia, o Bootloader não consegue detectar uma página de configurações válida e determina que não há uma aplicação legítima, recusando‑se assim a iniciar o firmware e geralmente entrando no modo DFU (Device Firmware Update), aguardando atualizações via OTA ou porta serial.
:::

#### Para Seeed Studio XIAO RA4M1

Atualmente, distribuições padrão do OpenOCD frequentemente não possuem suporte embutido para a série Renesas RA, como drivers dedicados e arquivos de configuração de alvo. Isso torna o uso do OpenOCD para gravação um processo complexo que exige configuração manual.

Portanto, recomendamos fortemente usar o `PyOCD`, que oferece suporte pronto para uso ao RA4M1.

Para gravar o Bootloader, use o comando correspondente ao seu sistema operacional.

**No Windows:**
```powershell
pyocd flash -t r7fa4m1ab examples\Bootloader_RA4M1.hex —erase chip
```

**No macOS / Linux:**
```bash
pyocd flash -t r7fa4m1ab examples/Bootloader_RA4M1.hex —erase chip
```


## Usando depuração no PlatformIO

Primeiro, certifique‑se de que você tenha a extensão PlatformIO IDE instalada no Visual Studio Code.

1.  **Instalar o VS Code**: [Baixe e instale o Visual Studio Code](https://code.visualstudio.com/).
2.  **Instalar o PlatformIO IDE**: Abra o VS Code, vá para a visualização de Extensões (Ctrl+Shift+X), pesquise por `PlatformIO IDE` e instale.

### Criando e configurando um projeto PlatformIO

1.  **Iniciar o PlatformIO**: Clique no ícone do PlatformIO na Barra de Atividades do VS Code e selecione "Home" para abrir a tela inicial do PIO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/17.png" style={{width:1000, height:'auto'}}/></div>

2.  **Criar um novo projeto**: Clique em "New Project" e dê um nome ao seu projeto.
    *   **Selecionar placa**: Pesquise pela placa XIAO específica que você pretende usar.

:::note
Como as placas da Seeed Studio estão hospedadas em um repositório de terceiros, sua placa específica pode não aparecer na lista de pesquisa por padrão. Se isso acontecer, você pode selecionar uma placa genérica (ou qualquer placa disponível) para inicializar o projeto, e vamos corrigir isso na próxima etapa.
:::

3.  **Configurar o `platformio.ini`**: Esta é a etapa mais crítica. Para habilitar a depuração com o XIAO Debug Mate e reconhecer corretamente a placa, você deve modificar o arquivo `platformio.ini` localizado na raiz do seu projeto.

    **Adicionando suporte às placas Seeed Studio:**
    As placas de desenvolvimento da Seeed Studio não estão incluídas no registro padrão do PlatformIO, mas são mantidas em um **repositório de terceiros**. Para usá‑las, você deve especificar a URL do repositório na sua configuração.

    Você precisa definir o parâmetro `platform` para a seguinte URL:
    `https://github.com/Seeed-Studio/platform-seeedboards`

    O arquivo de configuração informa ao PlatformIO para baixar as definições de placa desse repositório personalizado e especifica quais ferramentas utilizar para upload e depuração. O XIAO Debug Mate funciona como um depurador padrão **CMSIS-DAP**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/18.png" style={{width:1000, height:'auto'}}/></div>

    Abaixo estão as configurações `platformio.ini` recomendadas para vários modelos XIAO. Copie o conteúdo correspondente à sua placa. Estamos usando a versão de desenvolvimento da plataforma a partir do GitHub para garantir que você tenha os arquivos de suporte mais recentes para as placas.

<Tabs>
<TabItem value="rp2350" label="XIAO RP2350" default>

```ini
[env:seeed_xiao_rp2350]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-rp2350
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```

</TabItem>
<TabItem value="rp2040" label="XIAO RP2040">

```ini
[env:seeed_xiao_rp2040]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-rp2040
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="samd21" label="XIAO SAMD21">

```ini
[env:seeed-xiao-samd]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-samd
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="nrf52840" label="XIAO nRF52840">

Para o nRF52840, o PlatformIO oferece dois pacotes de suporte de placa. Escolha aquele que se encaixa nos requisitos do seu projeto.

**Mbed Core:**
```ini
[env:seeed-xiao-mbed-nrf52840]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mbed-nrf52840
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```

**Adafruit Core:**
```ini
[env:seeed-xiao-afruitnrf52-nrf52840]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-afruitnrf52-nrf52840
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="ra4m1" label="XIAO RA4M1">

Observe que o RA4M1 é um caso especial. Ele usa `pyocd` para upload, mas ainda usa `cmsis-dap` para depuração.

```ini
[env:seeed-xiao-ra4m1]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-ra4m1
framework = arduino
upload_protocol = pyocd
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="mg24" label="XIAO MG24">

```ini
[env:seeed-xiao-mg24]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mg24
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
</Tabs>

Após salvar o arquivo `platformio.ini`, o PlatformIO fará o download automático de todas as toolchains e pacotes necessários na próxima vez que você compilar ou depurar.

### Depuração passo a passo

A execução passo a passo é um recurso central para rastrear a lógica do seu código e identificar bugs.

1.  **Conectar o hardware**: Conecte sua placa XIAO ao XIAO Debug Mate. Conecte o Debug Mate ao seu computador usando um cabo USB‑C.
2.  **Iniciar a depuração**: Você pode iniciar uma sessão de depuração de duas maneiras:
    *   Pressione a tecla `F5`.
    *   Vá para a visualização "Run and Debug" (ícone de inseto na Barra de Atividades) e clique na seta verde "Start Debugging" na parte superior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/19.png" style={{width:1000, height:'auto'}}/></div>

3.  **Controles de depuração**: O PlatformIO irá compilar seu código, enviá‑lo para o XIAO via Debug Mate e pausar a execução na primeira linha de `main()` ou `setup()`. Uma barra de ferramentas de depuração aparecerá na parte superior do editor, permitindo que você controle o fluxo do programa:
    *   **Continue (F5)**: Retoma a execução até que o próximo breakpoint seja atingido ou o programa termine.
    *   **Step Over (F10)**: Executa a linha atual. Se a linha contiver uma chamada de função, executará toda a função e parará na próxima linha.
    *   **Step Into (F11)**: Executa a linha atual. Se a linha contiver uma chamada de função, o depurador entrará na função e irá parar em sua primeira linha.
    *   **Step Out (Shift+F11)**: Se estiver pausado dentro de uma função, isso executará o restante da função e retornará para a linha em que ela foi chamada.
    *   **Reiniciar (Ctrl+Shift+F5)**: Encerra e reinicia a sessão de depuração atual.
    *   **Parar (Shift+F5)**: Encerra a sessão de depuração.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/20.png" style={{width:1000, height:'auto'}}/></div>

### Depuração com breakpoint

Se você quiser que o programa pause em um local específico, os breakpoints são a ferramenta ideal.

1.  **Definir um Breakpoint**: No editor de código, mova o cursor para a esquerda do número da linha onde você deseja pausar. Um ponto vermelho fraco aparecerá. Clique nele para definir um breakpoint (o ponto ficará vermelho brilhante).
2.  **Executar até o Breakpoint**: Inicie uma sessão de depuração (`F5`). O programa será executado em velocidade total e irá pausar automaticamente quando atingir a linha com o breakpoint.
3.  **Gerenciar Breakpoints**: No painel lateral "Run and Debug", a seção "BREAKPOINTS" lista todos os breakpoints ativos. Você pode ativá-los, desativá-los ou excluí-los a partir daí.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/21.png" style={{width:1000, height:'auto'}}/></div>

### Leitura/Gravação de RAM

Enquanto o programa está pausado em um breakpoint, você pode inspecionar e até modificar o estado das variáveis.

1.  **Ver Variáveis (Leitura)**: No painel lateral "Run and Debug", a seção "VARIABLES" exibe todas as variáveis locais e globais dentro do escopo atual e seus valores atuais.
2.  **Monitorar Variáveis**: Se quiser acompanhar variáveis ou expressões específicas, vá até a seção "WATCH", clique no ícone `+` e digite o nome da variável (por exemplo, `myVariable` ou `&myVariable` para ver seu endereço de memória).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/22.png" style={{width:1000, height:'auto'}}/></div>

3.  **Modificar Variáveis (Gravação)**: Nas seções "VARIABLES" ou "WATCH", geralmente você pode clicar duas vezes no valor de uma variável para inserir um novo. Pressione Enter para aplicar a alteração. Isso é extremamente útil para testar diferentes condições sem reiniciar o programa.


## Solução de problemas

### P1: Se eu corromper o meu XIAO RA4M1, existe alguma forma de consertá-lo?

Você pode tentar regravar o bootloader para restaurar o dispositivo. Para o modelo XIAO RA4M1, consulte **[este método](#for-seeed-studio-xiao-ra4m1-2)** para a recuperação do bootloader.

Ao restaurar o Bootloader, se ocorrer um erro, tente conectar o XIAO RA4M1 ao XIAO Debug Mate, que está conectado ao seu computador. Mantenha pressionado o botão B no XIAO RA4M1 enquanto clica uma vez no botão R e depois solte ambos, R e B. Em seguida, proceda para regravar o Bootloader.

Após gravar o Bootloader, tente atualizar novamente o firmware usando um software como o Arduino. Isso normalmente restaura a funcionalidade. Se não tiver sucesso, o dispositivo pode estar permanentemente danificado e irrecuperável. Qualquer ação envolvendo gravação de firmware com o XIAO Debug Mate pode exigir que você assuma total responsabilidade.


### P2: Como saber se um dispositivo foi corrompido?

A maneira mais simples de determinar se o dispositivo XIAO está danificado é que ele não mostra nenhuma conexão de porta serial quando conectado a um computador. Se o dispositivo ainda não mostrar nenhuma conexão de porta serial após manter pressionado o botão B e conectá-lo ao computador, o dispositivo está danificado.


### P3: Equipamentos danificados podem ser reparados? Posso contatar o suporte técnico para solicitar uma substituição?

Danos aos dispositivos XIAO são normalmente causados por problemas com a partição ou com o arquivo do Bootloader. Isso geralmente pode ser resolvido regravando o arquivo do Bootloader. Se isso falhar, atualmente não há soluções alternativas. Os usuários devem assumir total responsabilidade por realizar esta operação por conta própria, portanto, certifique-se de que os comandos de gravação e o firmware foram verificados e são válidos.

### P4: O XIAO Debug Mate requer um driver?

O XIAO Debug Mate foi testado e verificado nos sistemas operacionais de computador mais recentes e funciona normalmente sem exigir a instalação de driver. Para computadores com Windows, recomendamos o uso do sistema operacional **Windows 11**. Durante os testes, descobrimos que, se você instalou drivers usando o Zading, isso pode fazer com que o dispositivo não seja reconhecido.

### P5: Meu XIAO Debug Mate exibe constantemente uma luz vermelha no Windows 11 e não pode ser reconhecido, apresentando o erro: “unable to find a matching CMSIS-DAP device.”

Sobre o problema em que o seu XIAO Debug Mate mostra uma luz vermelha e apresenta o erro "unable to find a matching CMSIS-DAP device" no Windows 11, tente as seguintes etapas de solução de problemas:

**1. Verifique o Cabo USB**

Primeiro, certifique-se de que o cabo USB que você está usando oferece suporte à transferência de dados e não é apenas um cabo de carregamento. Você pode verificar isso conferindo se o dispositivo aparece em um software de monitor serial ou se consegue ver algum log do dispositivo. Se o computador não reagir de forma alguma quando o cabo for conectado, tente trocar o cabo.

**2. Reinstale o Driver via PowerShell**

Se o cabo estiver confirmado como funcionando, o problema provavelmente é causado por uma instalação incorreta de driver. Você pode resolver isso removendo o driver em conflito usando o PowerShell. Siga estas etapas:

1.  Clique com o botão direito no botão Iniciar e selecione **Terminal (Admin)** ou **PowerShell (Admin)**.

2.  Execute o seguinte comando para encontrar os detalhes do driver CMSIS-DAP:

    ```powershell
    dism /online /get-drivers /format:table | findstr /i "cmsis-dap"
    ```
3.  Procure o **"Published Name"** (geralmente se parece com `oemXX.inf`) na saída.

4.  Execute o seguinte comando para excluir e desinstalar o driver (substitua `{inf_name}` pelo nome real que você encontrou na etapa anterior, por exemplo, `oem10.inf`):

    ```powershell
    pnputil /delete-driver {inf_name} /uninstall
    ```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/40.png" style={{width:1000, height:'auto'}}/></div>

Após concluir essas etapas, reconecte o dispositivo e verifique se ele é reconhecido corretamente.

### P6: O que devo fazer se a versão do OpenOCD exibida no meu sistema for diferente da captura de tela no Wiki?

Se você verificar a versão do OpenOCD em seu sistema e a saída não corresponder à versão recomendada mostrada nas capturas de tela do Wiki, talvez você tenha várias instalações do OpenOCD ou seu sistema esteja usando uma versão diferente por padrão.

Em computadores com Windows, abra as **Variáveis de Ambiente do Sistema** e vá para a seção **Variáveis do sistema**. Edite a variável `Path` e mova o caminho da instalação do OpenOCD recomendada pelo Wiki (por exemplo, `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\bin`) para o topo da lista. Isso garante que a versão recomendada do OpenOCD seja encontrada e usada primeiro pelo sistema. Após fazer essa alteração, abra um novo terminal e execute novamente `openocd --version` para confirmar que a versão correta está sendo exibida.



## Recursos

- **[ZIP]** [XIAO_Debug_Mate_DAPLink_Package-v1.0](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_DAPLink_Package-v1.0.zip)


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
