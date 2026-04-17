---
description: Um tutorial prático para configurar o ambiente do código-fonte do firmware Meshtastic, compilar o nó solar e gravar o firmware.
title: Tutorial de Desenvolvimento com Código-Fonte do Meshtastic
keywords:
  - Meshtastic
  - Código-fonte
  - PlatformIO
  - Nó Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png
slug: /meshtastic_source_code_practical_tutorial_solar_node
sidebar_position: 4
last_update:
  date: 3/18/2026
  author: ycl
url: https://wiki.seeedstudio.com/pt-br/meshtastic_source_code_practical_tutorial_solar_node/
createdAt: '2026-03-19'
updatedAt: '2026-03-19'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tutorial Prático do Código-Fonte do Firmware Meshtastic

Este tutorial é destinado a usuários que estão começando a trabalhar com o código-fonte do firmware Meshtastic. Ele inclui fluxos de trabalho comuns tanto para Windows quanto para macOS. O objetivo é direto: clonar o repositório oficial, concluir uma compilação bem-sucedida, fazer uma simples alteração na interface de usuário e gravar o firmware modificado no dispositivo para verificação.

Se você já está familiarizado com Git, Python ou PlatformIO, pode pular as seções correspondentes e ir diretamente para a parte prática.

:::tip
Este guia inclui comandos comuns para Windows e macOS. A maioria das capturas de tela ainda é feita em um ambiente Windows, mas o fluxo de trabalho geral no macOS é muito semelhante.
:::

## Pré-requisitos

Antes de começar, prepare as seguintes ferramentas:

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

Durante a instalação, o passo mais importante é **ajustar a variável de ambiente PATH**. Escolha:

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

**Etapas de correção via interface gráfica (GUI)**

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

**Configurar sua identidade do Git**

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

Se o primeiro comando conseguir encontrar o Python, o segundo normalmente deverá instalá-lo diretamente.

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

Esta etapa pode parecer menos amigável para iniciantes porque o PlatformIO baixa muitas dependências automaticamente, e a instalação pode levar algum tempo. Se aparecerem erros durante a instalação, geralmente é melhor esperar com paciência e resolver um problema de cada vez. Usar ferramentas de IA para ajudar a inspecionar as mensagens de erro também pode economizar tempo.

Pesquise por `PlatformIO` no marketplace de Extensões do VS Code e instale-o.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

Após a instalação, normalmente aparece um ícone em forma de formiga na barra de ferramentas à esquerda.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### 4. Clonar o repositório de firmware do Meshtastic

O repositório oficial de firmware do Meshtastic é `meshtastic/firmware`.

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

Depois que o repositório estiver pronto, você pode continuar com qualquer um dos dois projetos práticos a seguir. O Projeto A foca na personalização da interface do usuário do `Wio Tracker L1`. O Projeto B foca na telemetria ambiental com `XIAO ESP32S3` via Meshtastic.

## Projeto A: Personalização da interface do Wio Tracker L1

### Prática hands-on

Neste estágio, não tenha pressa em editar o código. Primeiro, certifique-se de que o projeto consegue executar todo o processo de compilação com sucesso.

Recomenda-se começar com três tarefas:

1. Abrir `firmware`
2. Verificar `platformio.ini`
3. Encontrar o ambiente de compilação para sua placa de destino

Um detalhe importante: não se concentre apenas no `platformio.ini` da raiz. Ele na verdade inclui arquivos de configuração adicionais, por exemplo:

```plain
extra_configs =
    variants/*/*.ini
    variants/*/*/platformio.ini
    variants/*/diy/*/platformio.ini
```

Isso significa que as definições reais de ambiente em nível de placa geralmente estão localizadas em `variants/.../platformio.ini`.

Ao identificar a placa de destino, preste atenção especial a estes dois diretórios:

- `variants/`
- `boards/`

Aqui usamos o **Wio Tracker L1 Pro** como placa de destino de exemplo.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image11.png)

Isso mostra que, no Meshtastic, **o alvo de compilação para Wio Tracker L1 / L1 Pro é** `seeed_wio_tracker_L1`.

**Resumo da modificação mínima**

Se você só quiser concluir uma prática mínima de ponta a ponta, concentre-se nestes passos principais:

1. Instalar Git, Python 3, VS Code e PlatformIO.
2. Clonar o repositório `meshtastic/firmware` e inicializar os submódulos.
3. Usar `pio run -e seeed_wio_tracker_L1` para confirmar que o projeto original compila com sucesso.
4. Modificar a lógica de exibição em `src/graphics/SharedUIDisplay.cpp`.
5. Recompilar o firmware e gravar o arquivo UF2 gerado no dispositivo para verificação.

**Passo 1: Confirmar que o projeto compila com sucesso**

Aqui usamos o PlatformIO Core CLI para compilar.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png)

Para a primeira compilação, recomenda-se executar o seguinte comando:

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

Se a interface estiver semelhante à captura de tela acima, o processo de build foi iniciado corretamente. A primeira compilação geralmente leva um tempo, então seja paciente.

**Se o build falhar**

Quando um build falha, você pode primeiro pedir ao PlatformIO para instalar as dependências exigidas pelo ambiente atual:

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

Essa abordagem tem vários benefícios:

- Ela instala apenas as dependências, sem iniciar imediatamente um build completo.
- Ela facilita ver qual pacote está causando o problema.
- As mensagens de erro geralmente são mais focadas e mais fáceis de depurar.

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

Quando a instalação das dependências terminar, execute novamente o build normal:

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

Se o build passar neste ponto, a saída do firmware foi gerada com sucesso.

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

Exatamente como você o modifica depende da sua capacidade de ler o código-fonte. Aqui começamos com um exemplo bem simples: modificar a interface da tela inicial.

**Alteração 1: Registrar a borda direita do texto da bateria**

```cpp
Before / After

// Before
int batteryX = 1;
int batteryY = HEADER_OFFSET_Y + 1;

// After
int batteryX = 1;
int batteryY = HEADER_OFFSET_Y + 1;
int batteryTextEndX = batteryX - 1;
```

`src/graphics/SharedUIDisplay.cpp:157`

Isso adiciona `batteryTextEndX`, que registra a posição final do texto de porcentagem da bateria. Isso facilita anexar texto personalizado após as informações da bateria mais tarde.

**Alteração 2: Calcular o limite direito ao desenhar a porcentagem da bateria**

```cpp
// Before
if (chargePercent != 101) {
    char chargeStr[4];
    snprintf(chargeStr, sizeof(chargeStr), "%d", chargePercent);
    int chargeNumWidth = display->getStringWidth(chargeStr);
    display->drawString(batteryX, textY, chargeStr);
    display->drawString(batteryX + chargeNumWidth - 1, textY, "%");
    if (isBold) {
        display->drawString(batteryX + 1, textY, chargeStr);
        display->drawString(batteryX + chargeNumWidth, textY, "%");
    }
}

// After
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
```

`src/graphics/SharedUIDisplay.cpp:204`

Esse código fica dentro da lógica de desenho da porcentagem da bateria. Além de exibir o nível da bateria normalmente, ele também calcula o limite direito da área de texto para que rótulos personalizados possam ser colocados após as informações da bateria.

**Alteração 3: Reservar um limite para a área de ícones à direita**

```cpp
// Before
int iconRightEdge = timeX - 2;

// After
int iconRightEdge = timeX - 2;
int headerLabelRight = timeX - 4;
```

`src/graphics/SharedUIDisplay.cpp:263`

Esta parte lida com a área usada pelos ícones de hora, correio, mudo e outros ícones no lado direito. Eu adicionei `headerLabelRight` para limitar o limite máximo à direita do texto central e evitar sobreposição com o conteúdo do lado direito.

**Alteração 4: Desenhar um rótulo personalizado quando o título estiver vazio**

```cpp
// Newly added core logic
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

`src/graphics/SharedUIDisplay.cpp:350`

Esta é a lógica central da modificação. Ela se aplica apenas a `SEEED_WIO_TRACKER_L1` e exclui explicitamente a variante de E-Ink. Ela centraliza o texto `made by AE` no espaço em branco entre as informações da bateria e a exibição da hora.

**Alteração 5: Tratar o ramo em que nenhuma hora é exibida**

```cpp
// Add the same boundary control for the no-time branch
int iconRightEdge = screenW - xOffset;
int headerLabelRight = screenW - xOffset - 2;
```

`src/graphics/SharedUIDisplay.cpp:377`

Este é o ramo usado quando nenhum valor de hora é exibido. O mesmo controle de limite precisa ser adicionado aqui também.

```cpp
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

`src/graphics/SharedUIDisplay.cpp:426`

Esta é a implementação para desenhar `made by AE` no ramo sem hora.

Você pode encontrar o código completo aqui:

[📎SharedUIDisplay.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/SharedUIDisplay.cpp)

**Etapa 3: Fazer o build do seu próprio firmware**

Depois de terminar a modificação, volte para a raiz do projeto e faça o build do mesmo alvo novamente:

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

A lógica de exibição foi alterada, mas o alvo de build ainda é o mesmo:

```plain
seeed_wio_tracker_L1
```

Após um build bem-sucedido, a saída geralmente fica localizada em:

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

### Gravar o firmware

Depois que o build estiver completo, abra a página oficial de gravação:

[Meshtastic Flasher](https://flasher.meshtastic.org/)

Na maioria dos casos, você deve executar primeiro uma operação de apagamento.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image18.png)

Em seguida, selecione o arquivo de firmware que você acabou de compilar e grave-o no dispositivo.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image19.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image20.png)

Neste ponto, o exercício prático com o código-fonte do Meshtastic está completo. Você passou por todo o fluxo de trabalho: configuração do ambiente, clonagem do repositório, descoberta da configuração da placa, compilação do firmware, modificação da lógica de exibição e verificação final da gravação.

Se quiser ir além, você pode continuar explorando estas direções:

1. Modificar mais elementos na tela inicial
2. Ajustar o comportamento dos botões, GPS, Bluetooth e outros módulos
3. Adicionar um `variant` independente para a sua própria placa
4. Continuar rastreando as relações entre `src/`, `variants/` e `boards/`

Se você quiser um exemplo em nível de código-fonte mais orientado a recursos, continue para o Projeto B abaixo. Ele constrói um nó dedicado de telemetria ambiental com `XIAO ESP32S3 + Wio-SX1262 + SHT40`. Em comparação com a modificação de UI do Wio Tracker L1 acima, esta parte foca em configuração padrão, temporização de telemetria e verificação real de mesh entre dois nós.

## Projeto B: nó de telemetria ambiental com XIAO ESP32S3

### Objetivo do projeto

Este exemplo avançado usa dois dispositivos Meshtastic na mesma malha (mesh).

**Nó sensor remoto**

- Ler temperatura e umidade do `SHT40`
- Usar telemetria ambiental do Meshtastic
- Enviar telemetria para a malha
- Alterar o intervalo de envio na malha para `60s`
- Pular a configuração interativa de região na primeira inicialização
- Definir a região padrão como `US`

**Nó gateway próximo**

- Entrar na rede Meshtastic como `CLIENT`
- Receber pacotes remotos `TELEMETRY_APP` via LoRa
- Analisar `environmentMetrics.temperature`
- Analisar `environmentMetrics.relativeHumidity`

**Caminho de comunicação**

```plain
XIAO ESP32S3 + Wio-SX1262 + SHT40 -> Meshtastic LoRa -> XIAO ESP32S3 + Wio-SX1262 (or any other device on the same mesh)
```

### Preparação de hardware

**Hardware do nó remoto**

- Seeed `XIAO ESP32S3`
- `Wio-SX1262`
- `SHT40`

**Hardware do nó gateway**

O nó próximo pode ser qualquer dispositivo Meshtastic que entre na mesma rede. Nos exemplos abaixo, ainda uso outro dispositivo `XIAO ESP32S3 + Wio-SX1262`.

**Fiação do SHT40**

- `VCC -> 3V3`
- `GND -> GND`
- `SDA -> GPIO5`
- `SCL -> GPIO6`

Configurações confirmadas em funcionamento:

- `I2C address = 0x44`
- `GPIO5 / GPIO6` é o par de fios I2C atualmente em uso

A foto a seguir mostra a fiação real usada no nó remoto:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image1.png)

**Módulos e SKUs usados neste projeto**

- [`Seeeduino XIAO Expansion Board`](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) (`SKU: 103030356`)
- [`XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic & LoRa`](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) (`SKU: 102010611`)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image11.png)

### Modificar o firmware Meshtastic para o nó remoto

O ambiente alvo para este projeto é:

```plain
seeed-xiao-s3
```

Os principais arquivos são:

- `variants/esp32s3/seeed_xiao_s3/platformio.ini`
- `src/modules/Telemetry/EnvironmentTelemetry.h`
- `src/modules/Telemetry/EnvironmentTelemetry.cpp`

Nesta parte, apenas atualize a seção `build_flags` em `variants/esp32s3/seeed_xiao_s3/platformio.ini`. Mantenha o restante do arquivo upstream inalterado.

```ini
build_flags =
  ${esp32s3_base.build_flags}
  -D SEEED_XIAO_S3
  -D ENVIRONMENTAL_TELEMETRY_MODULE_ENABLE=1 ; enable environmental telemetry by default
  -D USERPREFS_CONFIG_LORA_REGION=meshtastic_Config_LoRaConfig_RegionCode_US ; set the default region to US
  -D USERPREFS_CONFIG_DEVICE_ROLE=meshtastic_Config_DeviceConfig_Role_SENSOR ; set the default role to SENSOR
  -I variants/esp32s3/seeed_xiao_s3
  -DBOARD_HAS_PSRAM
  -DARDUINO_USB_MODE=0
```

A alteração em `build_flags` deve ficar semelhante a isto:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image4.png)

Essas três flags fazem o seguinte:

- Ativam a telemetria ambiental por padrão
- Definem a região padrão como `US`, para que a primeira inicialização não pare mais na seleção de região
- Definem a função padrão do dispositivo como `SENSOR`

A alteração de temporização da telemetria é implementada em `EnvironmentTelemetry.h` e `EnvironmentTelemetry.cpp`, não em `platformio.ini`.

Após a modificação completa, o comportamento passa a ser:

- A telemetria ambiental é ativada por padrão
- O dispositivo inicia com a região `US`
- O dispositivo inicia com a função `SENSOR`
- A telemetria ambiental da malha é enviada a cada `60s`
- `path=phone` e `path=mesh` são registrados separadamente
- O carimbo de data/hora de envio na malha é atualizado somente depois que um envio real na malha é bem-sucedido

O log de despacho esperado na malha se parece com isto:

```plain
Environment telemetry dispatch path=mesh dest=0xffffffff interval_mesh_s=60
```

### Configurar o nó gateway próximo

Use um dispositivo Meshtastic próximo como `CLIENT` na mesma malha. Depois que o nó remoto começar a enviar telemetria, confirme que o gateway consegue receber:

- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

Se o gateway continuar tentando se conectar ao Wi-Fi durante os testes, desative o Wi-Fi com o Meshtastic CLI. Substitua `<gateway_port>` pela sua porta serial real, como `COMx` no Windows ou `/dev/cu.usbmodem...` no macOS.

```bash
meshtastic --port <gateway_port> --set network.wifi_enabled false
```

### Compilar, gravar e verificar

**Etapa 1: Copiar os arquivos modificados**

Antes de compilar, copie os três arquivos modificados para a sua árvore de código-fonte Meshtastic `2.7.20` ou `2.7.21`:

| Arquivo no pacote | Substitua este arquivo na sua árvore de código-fonte Meshtastic |
| --- | --- |
| `meshtastic-2.7.20-s3-files/variants/esp32s3/seeed_xiao_s3/platformio.ini` | `<your Meshtastic directory>/variants/esp32s3/seeed_xiao_s3/platformio.ini` |
| `meshtastic-2.7.20-s3-files/src/modules/Telemetry/EnvironmentTelemetry.h` | `<your Meshtastic directory>/src/modules/Telemetry/EnvironmentTelemetry.h` |
| `meshtastic-2.7.20-s3-files/src/modules/Telemetry/EnvironmentTelemetry.cpp` | `<your Meshtastic directory>/src/modules/Telemetry/EnvironmentTelemetry.cpp` |

Links de download direto:

- [📎EnvironmentTelemetry.h](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/EnvironmentTelemetry.h)
- [📎EnvironmentTelemetry.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/EnvironmentTelemetry.cpp)

Se você copiar os arquivos com um gerenciador de arquivos gráfico, o prompt de substituição deve ser semelhante a este:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image5.png)

**Etapa 2: Compilar o firmware remoto**

A partir da raiz do firmware Meshtastic, execute:

```bash
pio run -e seeed-xiao-s3
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image6.png)

**Etapa 3: Enviar para o nó remoto**

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pio device list
pio run -e seeed-xiao-s3 -t upload --upload-port COMx
```

Se você precisar entrar no modo de download manualmente:

1. Mantenha pressionado `BOOT`
2. Toque em `RESET`
3. Solte `RESET`
4. Solte `BOOT`

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pio device list
pio run -e seeed-xiao-s3 -t upload --upload-port /dev/cu.usbmodemXXXX
```

</TabItem>
</Tabs>

Use `pio device list` primeiro para poder identificar a porta serial correta:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image7.png)

Depois que o envio terminar, o PlatformIO deve informar uma gravação bem-sucedida:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image8.png)

**Etapa 4: Monitorar os logs seriais**

Use o monitor serial do PlatformIO para verificar tanto o nó remoto quanto o gateway próximo.

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pio device monitor -p COMx -b 115200
pio device monitor -p COMy -b 115200
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pio device monitor -p /dev/cu.usbmodemE072A1D89EB81 -b 115200
pio device monitor -p /dev/cu.usbmodem3030F917FF281 -b 115200
```

</TabItem>
</Tabs>

Procure por logs como:

```plain
Environment telemetry dispatch path=mesh dest=0xffffffff interval_mesh_s=60
Send: relative_humidity=...
Send: ... temperature=...
```

**Etapa 5: Validar com o Meshtastic CLI**

Instale primeiro o CLI:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pip install meshtastic
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pip3 install meshtastic
```

</TabItem>
</Tabs>

Após a instalação, reabra o terminal e confirme que `meshtastic --help` funciona.

Para os comandos abaixo, substitua `<gateway_port>` pela porta serial real do seu gateway:

- Exemplo no Windows: `COMx`
- Exemplo no macOS: `/dev/cu.usbmodem3030F917FF281`

```bash
meshtastic --port <gateway_port> --listen --debug
meshtastic --port <gateway_port> --nodes --show-fields user.id,user.longName,user.shortName
meshtastic --port <gateway_port> --get bluetooth.enabled --get bluetooth.mode --get bluetooth.fixed_pin --get power.wait_bluetooth_secs --get power.is_power_saving
meshtastic --port <gateway_port> --set network.wifi_enabled false
```

Concentre-se em:

- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

**Etapa 6: Confirmar no aplicativo móvel**

Após a gravação, conecte-se ao nó remoto com o aplicativo móvel Meshtastic e confirme que os dados ambientais estão visíveis. Em seguida, conecte o aplicativo a outro dispositivo na mesma malha e verifique a visualização `Nodes` para confirmar que os valores do sensor estão sendo recebidos pela malha.

No nó sensor remoto, você deve conseguir ver os valores de telemetria ambiental diretamente no aplicativo:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image9.png)

No nó próximo, as mesmas leituras devem aparecer na visualização `Nodes` depois que forem encaminhadas pela malha:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image10.png)

## Problemas comuns

**O comando `git` não está disponível**

- No Windows, primeiro verifique se o Git foi adicionado ao `PATH`.
- No macOS, execute `git --version` primeiro. Se o sistema pedir para instalar as Command Line Tools, siga o prompt.

**`python3` ou `pip3` não está disponível**

- No Windows, confirme que o Python foi adicionado ao `PATH`, ou reabra o terminal e tente novamente.
- No macOS, primeiro verifique se `python3` / `pip3` já existe, e instale o Python com o Homebrew somente se necessário.

**O comando `pio` não está disponível**

- Execute `pio --version` primeiro.
- Se o comando ainda não estiver disponível, reinicie o VS Code e o terminal e tente novamente.
- Se necessário, reinstale a extensão PlatformIO e confirme que o PlatformIO Core foi inicializado corretamente.

**O código ainda parece incompleto após `git submodule update --init`**

- Primeiro, certifique-se de que você está no diretório raiz do repositório `firmware`.
- Se a conexão de rede estiver instável, tente novamente com:

```bash
git submodule update --init --recursive
```

**A primeira compilação leva muito tempo**

- É normal que a primeira compilação baixe muitas dependências.
- Se parecer travado por muito tempo, tente instalar os pacotes separadamente primeiro:

```bash
pio pkg install -e seeed_wio_tracker_L1
```

Depois execute a compilação novamente.

**O cliente web não mostra toda a telemetria ambiental**

- O cliente Web Meshtastic atualmente não fornece uma interface completa para telemetria ambiental remota.
- A página `Messages` / `Broadcast` é para tráfego de chat, não uma página dedicada à telemetria.
- Se os valores não aparecerem lá, isso não significa automaticamente que o link mesh falhou.

**Ver dados em um telefone não prova o encaminhamento via mesh**

- Ver valores atualizados em um telefone conectado diretamente apenas prova que o link local telefone‑para‑dispositivo está funcionando.
- Isso não prova automaticamente que a telemetria ambiental já foi encaminhada para a mesh.
- Para confirmar um encaminhamento real via mesh, verifique estes itens nos logs:
- `Environment telemetry dispatch path=mesh ...`
- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

**A build `seeed-xiao-s3` falha durante a primeira configuração**

- A primeira instalação de dependências pode levar muito tempo. Isso é normal.
- Se o ambiente de destino falhar, instale primeiro os pacotes e depois execute uma build detalhada:

```bash
pio pkg install -e seeed-xiao-s3
pio run -e seeed-xiao-s3 -v
```

- Depois que as dependências estiverem prontas, volte para a build normal:

```bash
pio run -e seeed-xiao-s3
```
