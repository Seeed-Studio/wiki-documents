---
description: Um tutorial prático para configurar o ambiente do código-fonte do firmware Meshtastic, compilar o alvo Wio Tracker L1, fazer uma alteração simples na interface e gravar o firmware.
title: Tutorial de Desenvolvimento com Código-Fonte do Meshtastic
keywords:
  - Meshtastic
  - Source Code
  - PlatformIO
  - Wio Tracker L1
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png
slug: /meshtastic_source_code_practical_tutorial
sidebar_position: 4
last_update:
  date: 3/18/2026
  author: ycl
url: https://wiki.seeedstudio.com/pt-br/meshtastic_source_code_practical_tutorial/
createdAt: '2026-03-19'
updatedAt: '2026-04-03'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tutorial Prático do Código-Fonte do Firmware Meshtastic

Este tutorial aborda um fluxo de trabalho básico do firmware Meshtastic no Windows e no macOS: clonar o repositório, compilar `seeed_wio_tracker_L1`, fazer uma pequena alteração na interface e gravar o resultado.

Se Git, Python e PlatformIO já estiverem instalados, você pode pular direto para a parte prática.

:::tip
Os comandos são fornecidos tanto para Windows quanto para macOS. A maioria das capturas de tela usa Windows, mas o fluxo de trabalho é o mesmo no macOS.
:::

## Pré-requisitos

Prepare as seguintes ferramentas:

1. Git
2. Python 3
3. VS Code
4. PlatformIO

### 1. Instalar o Git

<Tabs>
<TabItem value="windows" label="Windows">

Abra a página oficial de download do Git para Windows:

[Git for Windows](https://git-scm.com/install/windows)

O instalador geralmente começa a ser baixado automaticamente quando você abre a página. Após a conclusão do download, clique duas vezes no instalador e siga o assistente de instalação.

Durante a instalação, a etapa mais importante é **Adjusting your PATH environment**. Escolha:

**Git from the command line and also from 3rd-party software**

Para as outras opções, os valores padrão geralmente são suficientes. Basta continuar clicando em `Next`.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image1.png)

Aguarde até que a instalação termine.

Após a instalação, **feche todas as janelas atuais do PowerShell e terminais do VS Code**, depois abra uma nova janela do PowerShell e execute:

```plain
& "C:\Program Files\Git\cmd\git.exe" --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image2.png)

Se um número de versão do Git for exibido, o Git foi instalado com sucesso.

**Se o comando `git` ainda não estiver disponível**

Você pode primeiro executar os seguintes comandos no PowerShell para confirmar os caminhos padrão de instalação do Git:

```plain
$gitCmd = "C:\Program Files\Git\cmd"
$gitBin = "C:\Program Files\Git\bin"
Write-Host $gitCmd
Write-Host $gitBin
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image3.png)

Em seguida, adicione o Git manualmente às variáveis de ambiente do sistema.

**Etapas de correção pela interface gráfica (GUI)**

1. Pressione `Win`
2. Pesquise por "Edit the system environment variables"
3. Abra e clique em **Environment Variables**
4. Encontre `Path` em **System variables**
5. Clique em **Edit**
6. Clique em **New** e adicione os dois caminhos a seguir:

```plain
C:\Program Files\Git\cmd
C:\Program Files\Git\bin
```

7. Clique em **OK** em todas as janelas para salvar

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image4.png)

Depois de salvar, você ainda precisa:

- Fechar **todas** as janelas do PowerShell
- Abrir o PowerShell novamente

Depois execute:

```plain
git --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image5.png)

Se um número de versão aparecer, a instalação está concluída.

</TabItem>

<TabItem value="macos" label="macOS">

No macOS, o Git pode ser instalado de mais de uma forma, mas usar o Homebrew geralmente é a opção mais fácil:

1. Instale primeiro as Command Line Tools:

```bash
xcode-select --install
```

2. Se o Homebrew ainda não estiver instalado, instale-o primeiro:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3. Instale o Git:

```bash
brew install git
```

4. Verifique a versão instalada:

```bash
git --version
```

Se o seu terminal já retornar uma versão válida do Git, você não precisa instalá-lo novamente.

</TabItem>
</Tabs>

**Configure sua identidade do Git**

Em seguida, configure suas informações de usuário do Git. Substitua os valores de exemplo pelo seu próprio nome e endereço de e-mail:

```plain
git config --global user.name "your name"
git config --global user.email "your mail@gmail.com"
```

Depois execute:

```plain
git config --global --list
```

para confirmar que a configuração entrou em vigor.

### 2. Instalar o Python 3

**Instalar o Python pela linha de comando**

<Tabs>
<TabItem value="windows" label="Windows">

Execute os seguintes comandos no terminal:

```plain
winget search --id Python.Python.3.13 --source winget
winget install -e --id Python.Python.3.13 --source winget
```

Se o primeiro comando conseguir encontrar o Python, o segundo normalmente deve instalá-lo diretamente.

Após a instalação, feche o terminal e abra-o novamente, depois execute:

```plain
python --version
pip --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image6.png)

Se forem exibidos números de versão, o Python e o pip estão prontos para uso.

</TabItem>

<TabItem value="macos" label="macOS">

O macOS frequentemente já inclui um ambiente Python. Antes de instalar uma nova versão, verifique se `python3` e `pip3` já estão disponíveis:

```bash
python3 --version
pip3 --version
```

Se eles não estiverem disponíveis, ou se você quiser uma versão mais recente, instale o Python com o Homebrew:

```bash
brew install python
```

Após a instalação, reabra o terminal e execute:

```bash
python3 --version
pip3 --version
```

Se você preferir usar `python` e `pip`, pode definir aliases no shell por conta própria. No macOS, porém, usar `python3` e `pip3` costuma ser a opção mais confiável.

</TabItem>
</Tabs>

### 3. Instalar o PlatformIO

O PlatformIO baixa dependências automaticamente durante a instalação, portanto esta etapa pode levar algum tempo. Se ocorrerem erros, analise-os um por um.

Pesquise por `PlatformIO` no marketplace de Extensões do VS Code e instale-o.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

Após a instalação, normalmente aparece um ícone em forma de formiga na barra de ferramentas à esquerda.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### 4. Clonar o repositório do firmware Meshtastic

O repositório oficial do firmware Meshtastic é `meshtastic/firmware`.

<Tabs>
<TabItem value="windows" label="Windows">

Execute os seguintes comandos no terminal do seu diretório de trabalho:

```plain
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

Se o diretório do seu projeto estiver em outra unidade ou em um caminho diferente, mude para esse local primeiro.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image9.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image10.png)

Se a saída for semelhante às capturas de tela acima, o repositório foi clonado com sucesso.

</TabItem>

<TabItem value="macos" label="macOS">

Execute os seguintes comandos no terminal do seu diretório de trabalho:

```bash
cd ~/workplace
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

Se `~/workplace` ainda não existir, crie-o primeiro:

```bash
mkdir -p ~/workplace
```

Se os comandos forem concluídos normalmente, o repositório foi clonado com sucesso.

</TabItem>
</Tabs>

### 5. Prática hands-on

Neste estágio, não tenha pressa em editar o código. Primeiro, certifique-se de que o projeto consegue passar com sucesso por todo o processo de compilação.

É recomendado começar com três tarefas:

1. Abrir `firmware`
2. Verificar `platformio.ini`
3. Encontrar o ambiente de compilação para a sua placa de destino

Um detalhe importante: não se concentre apenas no `platformio.ini` da raiz. Ele na verdade inclui arquivos de configuração adicionais, por exemplo:

```plain
extra_configs =
    variants/*/*.ini
    variants/*/*/platformio.ini
    variants/*/diy/*/platformio.ini
```

Isso significa que as definições reais de ambiente em nível de placa geralmente ficam em `variants/.../platformio.ini`.

Ao identificar a placa de destino, preste atenção especial a estes dois diretórios:

- `variants/`
- `boards/`

Aqui usamos **Wio Tracker L1 Pro** como placa de destino de exemplo.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image11.png)

Isso mostra que, no Meshtastic, **o alvo de compilação para Wio Tracker L1 / L1 Pro é** `seeed_wio_tracker_L1`.

**Etapa 1: Confirmar que o projeto compila com sucesso**

Aqui usamos a CLI do PlatformIO Core para compilar.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png)

Para a primeira compilação, é recomendado executar o seguinte comando:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
cd D:\workplace\firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
cd ~/workplace/firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image13.png)

Se a interface estiver semelhante à captura de tela acima, o processo de compilação foi iniciado corretamente. A primeira compilação costuma levar um tempo, então seja paciente.

**Se a compilação falhar**

Quando uma compilação falhar, você pode primeiro pedir ao PlatformIO para instalar as dependências exigidas pelo ambiente atual:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
cd D:\workplace\firmware  # Adjust to your actual project path
pio pkg install -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
cd ~/workplace/firmware  # Adjust to your actual project path
pio pkg install -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

Essa abordagem traz vários benefícios:

- Ela instala apenas as dependências, sem iniciar imediatamente uma compilação completa.
- Facilita ver qual pacote está causando o problema.
- As mensagens de erro geralmente são mais focadas e fáceis de depurar.

Depois que as dependências forem instaladas, execute:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pio run -e seeed_wio_tracker_L1 -v
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pio run -e seeed_wio_tracker_L1 -v
```

</TabItem>
</Tabs>

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image14.png)

Quando a instalação das dependências estiver concluída, execute novamente a compilação normal:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pio run -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pio run -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image15.png)

Se a compilação for concluída com êxito neste ponto, a saída do firmware terá sido gerada com sucesso.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image16.png)

**Etapa 2: Modificar o código**

**Prática 1: Modificar a exibição da interface (UI)**

Comece rastreando a implementação da tela a partir da configuração em nível de placa. Você pode primeiro verificar:

- `variants/nrf52840/seeed_wio_tracker_L1/platformio.ini`
- `variants/nrf52840/seeed_wio_tracker_L1/variant.h`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image17.png)

A partir desses arquivos de configuração, você pode ver que o L1 define `HAS_SCREEN` e `USE_SSD1306`. Isso significa que ele usa o pipeline padrão de exibição OLED, não uma configuração sem tela e não uma solução de E-Ink.

Se você continuar rastreando a lógica de exibição, a maior parte do código relacionado está localizada em:

- `src/graphics/`
- `src/graphics/draw/`

Aqui usamos um exemplo simples: adicionar um rótulo personalizado ao cabeçalho da tela inicial.

Atualize `src/graphics/SharedUIDisplay.cpp` com as seguintes alterações:

```cpp
// Track the end of the battery text
int batteryX = 1;
int batteryY = HEADER_OFFSET_Y + 1;
int batteryTextEndX = batteryX - 1;

// Update the boundary while drawing the battery percentage
if (chargePercent != 101) {
    char chargeStr[4];
    snprintf(chargeStr, sizeof(chargeStr), "%d", chargePercent);
    int chargeNumWidth = display->getStringWidth(chargeStr);
    int percentWidth = display->getStringWidth("%");
    display->drawString(batteryX, textY, chargeStr);
    display->drawString(batteryX + chargeNumWidth - 1, textY, "%");
    if (isBold) {
        display->drawString(batteryX + 1, textY, chargeStr);
        display->drawString(batteryX + chargeNumWidth, textY, "%");
    }
    batteryTextEndX = batteryX + chargeNumWidth + percentWidth - 1 + (isBold ? 1 : 0);
} else {
    batteryTextEndX = batteryX - 1;
}

// In the branch that displays time
int iconRightEdge = timeX - 2;
int headerLabelRight = timeX - 4;

#if defined(SEEED_WIO_TRACKER_L1) && !defined(SEEED_WIO_TRACKER_L1_EINK)
if (titleStr && titleStr[0] == '\0') {
    static const char *yclLabel = "made by AE";
    int labelWidth = display->getStringWidth(yclLabel);
    int labelLeft = batteryTextEndX + 4;
    if (labelLeft + labelWidth <= headerLabelRight) {
        int labelX = labelLeft + ((headerLabelRight - labelLeft) - labelWidth) / 2;
        display->drawString(labelX, textY, yclLabel);
        if (isBold)
            display->drawString(labelX + 1, textY, yclLabel);
    }
}
#endif

// In the branch that does not display time
int iconRightEdge = screenW - xOffset;
int headerLabelRight = screenW - xOffset - 2;

#if defined(SEEED_WIO_TRACKER_L1) && !defined(SEEED_WIO_TRACKER_L1_EINK)
if (titleStr && titleStr[0] == '\0') {
    static const char *yclLabel = "made by AE";
    int labelWidth = display->getStringWidth(yclLabel);
    int labelLeft = batteryTextEndX + 4;
    if (labelLeft + labelWidth <= headerLabelRight) {
        int labelX = labelLeft + ((headerLabelRight - labelLeft) - labelWidth) / 2;
        display->drawString(labelX, textY, yclLabel);
        if (isBold)
            display->drawString(labelX + 1, textY, yclLabel);
    }
}
#endif
```

Essa atualização faz três coisas:

- Registra a borda direita do texto da bateria.
- Reserva espaço entre a área da bateria e os ícones do lado direito.
- Desenha `made by AE` apenas em `SEEED_WIO_TRACKER_L1` quando o título está vazio.

Você pode encontrar o código completo aqui:

[📎SharedUIDisplay.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/SharedUIDisplay.cpp)

**Etapa 3: Compilar o seu próprio firmware**

Depois de terminar a modificação, volte para o diretório raiz do projeto e compile o mesmo alvo novamente:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
cd D:\workplace\firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
cd ~/workplace/firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

A lógica de exibição foi alterada, mas o alvo de compilação ainda é o mesmo:

```plain
seeed_wio_tracker_L1
```

Após uma compilação bem-sucedida, a saída geralmente fica localizada em:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
D:\workplace\firmware\.pio\build\seeed_wio_tracker_L1\
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
~/workplace/firmware/.pio/build/seeed_wio_tracker_L1/
```

</TabItem>
</Tabs>

O arquivo que você deve confirmar que foi atualizado é:

```plain
firmware-seeed_wio_tracker_L1-*.uf2
```

### 6. Gravar o firmware

Depois que a compilação estiver concluída, abra a página oficial de gravação:

[Meshtastic Flasher](https://flasher.meshtastic.org/)

Na maioria dos casos, você deve executar primeiro uma operação de apagamento.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image18.png)

Em seguida, selecione o arquivo de firmware que você acabou de compilar e grave-o no dispositivo.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image19.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image20.png)

Neste ponto, o exercício prático com o código-fonte do Meshtastic está concluído. Você passou por todo o fluxo de trabalho: configuração do ambiente, clonagem do repositório, descoberta da configuração da placa, compilação do firmware, modificação da lógica de exibição e verificação final da gravação.

Se quiser ir além, você pode continuar explorando estas direções:

1. Modificar mais elementos na tela inicial
2. Ajustar o comportamento dos botões, GPS, Bluetooth e outros módulos
3. Adicionar um `variant` independente para a sua própria placa
4. Continuar rastreando as relações entre `src/`, `variants/` e `boards/`

## Problemas comuns

**O comando `git` não está disponível**

- No Windows, primeiro verifique se o Git foi adicionado ao `PATH`.
- No macOS, execute primeiro `git --version`. Se o sistema pedir para instalar as Command Line Tools, siga a instrução.

**`python3` ou `pip3` não está disponível**

- No Windows, confirme se o Python foi adicionado ao `PATH` ou reabra o terminal e tente novamente.
- No macOS, primeiro verifique se `python3` / `pip3` já existe e instale o Python com o Homebrew somente se necessário.

**O comando `pio` não está disponível**

- Execute primeiro `pio --version`.
- Se o comando ainda não estiver disponível, reinicie o VS Code e o terminal e tente novamente.
- Se necessário, reinstale a extensão PlatformIO e confirme se o PlatformIO Core foi inicializado corretamente.

**O código ainda parece incompleto após `git submodule update --init`**

- Primeiro, certifique-se de que você está no diretório raiz do repositório `firmware`.
- Se a conexão de rede estiver instável, tente novamente com:

```bash
git submodule update --init --recursive
```

**A primeira compilação leva muito tempo**

- É normal que a primeira compilação faça o download de muitas dependências.
- Se parecer travado por muito tempo, tente instalar os pacotes separadamente primeiro:

```bash
pio pkg install -e seeed_wio_tracker_L1
```

Em seguida, execute a compilação novamente.

## Suporte técnico e discussão sobre o produto

<p style={{textAlign: 'center'}}><a href="https://www.facebook.com/groups/1755190828846458" target="_blank"><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Banner_QRCode_FB.jpg" border="0" /></a></p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>