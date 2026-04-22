---
description: Gravar o firmware nativo
title: Atualizar e Gravar Firmware
keywords:
  - SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_How_To_Flash_The_Default_Firmware
toc_max_heading_level: 4
sidebar_position: 3
last_update:
  date: 11/17/2023
  author: Spencer
createdAt: '2023-05-01'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# **Como Gravar o Firmware Nativo**

O SenseCAP Indicator possui dois MCUs, ESP32-S3 e RP2040. Este tutorial fornece um guia abrangente para ajudar o desenvolvedor a começar, incluindo gravar o firmware nativo de fábrica pronto para uso e atualizar dispositivos enviados nas primeiras remessas para o firmware mais recente.

A atualização de firmware é particularmente aplicável em dois cenários:

1. Se você comprou um produto sem firmware OpenAI antes de junho de 2023, com versão de firmware `1.0.0`, você pode baixar e atualizar para o firmware mais recente que inclui a funcionalidade OpenAI. O firmware mais recente pode ser baixado a partir [daqui](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases).
2. Se você desenvolveu uma aplicação e deseja gravar um firmware personalizado, pode seguir [o tutorial fornecido abaixo](#flash-esp32-s3-frimware-using-espressif-idf).

Resumidamente, você precisa deste tutorial porque:

1. Você tem um firmware que precisa ser gravado no ESP32-S3 ou RP2040.
2. Você modificou o código e precisa compilá-lo e gravá-lo no dispositivo.

Vamos começar este tutorial.

## Preparação

Para começar, tudo o que você precisa é do seu SenseCAP Indicator e de um computador Windows/Mac/Linux.

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/usb1.png"/></div>

## Obter o Firmware Nativo

O firmware padrão de envio do SenseCAP Indicator é totalmente open source tanto para ESP32-S3 quanto para RP2040.

:::tip Você tem duas opções para obter o Firmware Pronto para Uso:

- **Código-fonte:** Antes de gravá-lo, você tem a opção de modificar o código de acordo com seus requisitos. Você precisará de uma toolchain ([ESP-IDF](#ESP-IDF), [Arduino](#RP_Arduino)) para **compilá-lo**.
- **Firmware:** Grave diretamente o arquivo binário pré-compilado sem necessidade de qualquer modificação de código ou compilação. Usando ferramentas como [Esptool](#ESPTOOL) e [Flash Download Tools](#Flash_Tools).
:::

**Código-fonte**

- [🖱️Clique para obter o código-fonte do firmware ESP32-S3](https://github.com/Seeed-Solution/sensecap_indicator_esp32)
- [🖱️Clique para obter o código-fonte dos exemplos Arduino para RP2040](https://github.com/Seeed-Solution/sensecap_indicator_rp2040)

**Firmware**

- [🖱️Clique para baixar o firmware ESP32-S3](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.0)
- [🖱️Clique para baixar o firmware RP2040](https://github.com/Seeed-Solution/SenseCAP_Indicator_RP2040/releases/tag/v1.0.0)

## Para **ESP32-S3**

### **ESP-IDF** {#ESP-IDF}

> ESP-IDF (Espressif IoT Development Framework) é um framework de desenvolvimento de software fornecido pela Espressif Systems para projetar firmware e aplicações especificamente para suas séries de microcontroladores ESP32 e ESP8266. Para mais informações, você pode consultar o [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/index.html)

Se você optou por compilar o código-fonte em firmware, precisará do ESP-IDF para realizar o processo de compilação.

:::note **Nota**:
A versão do ESP-IDF deve ser superior à v5.0. Se você estiver usando uma versão mais antiga, precisará atualizá-la para a versão mais recente.
:::

Para usuários iniciantes, este vídeo pode ajudar a entender melhor as etapas abaixo:

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/oqJz6zKfc4A?si=glzTFfR7m392eITb" title="Set Up the ESP-IDF Toolchain for SenseCAP Indicator on Windows" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

#### **Instalação da Toolchain**

<Tabs
groupId="operating-systems"
defaultValue='Win'
values={[
{label: 'Windows', value: 'Win'},
{label: 'Linux and MacOS', value: 'Unix'},
]}>
<TabItem value="Win">

  > Documentação oficial da Espressif: [Standard Setup of Toolchain for Windows](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/windows-setup.html)

  **Opção 1: Usando o instalador offline**

  Para usuários Windows, você tem a opção de baixar diretamente o instalador offline do ESP-IDF. Aqui está um link de download direto: [🖱️Donwload Offline Installer v5.1.1](https://dl.espressif.com/dl/idf-installer/esp-idf-tools-setup-offline-5.1.1.exe)

  **Opção 2:  Usando o script recomendado**

Navegue até [Using the Command Promp](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/windows-setup.html#using-the-command-prompt)

</TabItem>

<TabItem value="Unix">

  > Documentação oficial da Espressif: [Standard Toolchain Setup for Linux and macOS](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/linux-macos-setup.html)

  Se estiver em Linux ou MacOS, você pode seguir este guia para alterar a versão do repositório git.

  ```
  git clone --recursive https://github.com/espressif/esp-idf.git
  ```

**Navegue até o diretório esp-idf**:

1. Execute `./install.sh esp32s3` para adicionar suporte ao ESP32-S3 (necessário para o SenseCAP Indicator)
2. digite `./export.sh` para configurar as variáveis PATH e IDF_PATH na sessão de terminal atual.

se você quiser chamar em qualquer sessão de shell, pode adicionar a seguinte linha ao seu arquivo de configuração do shell (por exemplo, ~/.bash_profile):

```
alias get_idf='. $HOME/esp/esp-idf/export.sh'
```

Então você pode usar `get_idf` para ativar o ambiente.[^refer](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/linux-macos-setup.html#step-4-set-up-the-environment-variables)

</TabItem>
</Tabs>

#### Compilar o projeto e gravar {#BUILD}

Se você optar por compilar o código-fonte em firmware, precisará do ESP-IDF para realizar o processo de compilação.

<!-- Please differentiate between flashing compiled firmware and directly downloading firmware using IDF! -->

Para compilar, gravar e monitorar o seu projeto, execute o seguinte comando:

```
cd  <your_sdk_path>/examples/indicator_basis/
idf.py -p PORT build flash monitor
```

:::tip
Sem `PORT`, o IDF selecionará automaticamente a porta disponível.
:::

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/upgrade.png"/></div>

<!-- Need to change the PIcure -->

Até este ponto, digitando o comando `idf.py -p PORT flash`, o firmware foi gravado com sucesso no ESP32-S3.

<!-- Why is this patch not placed in the later Q/A section? Also, are there too few Compile Code instructions? There's no Compile Code, just direct flashing. -->

### **Esptool** {#ESPTOOL}

> [ESPtool - GitHub](https://github.com/espressif/esptool) é um utilitário open source baseado em Python que fornece uma forma independente de plataforma para se comunicar com o bootloader em ROM dos chips Espressif.

Esptool pode ser usado como parte do seu script em Python. Neste guia, usaremos o `packaged software` disponível na [página de releases do Esptool](https://github.com/espressif/esptool/releases). Escolha o software que corresponde ao sistema operacional do seu computador.

#### Usando o Esptool para Gravação

Há dois scripts fornecidos que mostram como usar de forma eficaz o Esptool para gravar firmware em microcontroladores ESP32-S3.

:::note **Nota**:
Esteja ciente de que os scripts fornecidos são feitos para sistemas operacionais Windows. Se você estiver usando um sistema operacional diferente, precisará adaptar os scripts ao seu ambiente.
:::

O script merge.bat é particularmente útil, pois consolida de forma inteligente o bootloader, a tabela de partição e os binários básicos do indicator em um único arquivo de firmware. Uma vez mesclado, esse firmware pode ser gravado perfeitamente no ESP32-S3 usando o script flash.bat. Quando solicitado, insira a porta COM correspondente ao seu dispositivo e o processo de gravação será iniciado. A operação completa pode ser resumida da seguinte forma:

```sh title="merge.bat"
esptool.exe --chip esp32s3 ^
merge_bin -o sensecap_indicator_basis_v1.0.0.bin ^ # Target file name
--flash_mode dio ^
--flash_size 8MB ^
0x0 ../../build/bootloader/bootloader.bin ^
0x8000 ../../build/partition_table/partition-table.bin ^
0x10000 ../../build/indicator_basis.bin
```

Como alternativa, se você preferir gravar arquivos binários individuais em vez de mesclar arquivos e depois gravar, pode usar diretamente o script `just_flash.bat`:

```sh title="just_flash.bat"
esptool.exe --chip esp32s3 --port COMx --baud 921600 write_flash -z ^
0x0 ../../build/bootloader/bootloader.bin ^
0x8000 ../../build/partition_table/partition-table.bin ^
0x10000 ../../build/indicator_basis.bin
```

E para um processo de gravação direto usando o firmware mesclado:

```sh title="flash.bat"
esptool.exe --chip esp32s3 --port COMx --baud 921600 write_flash -z 0x0 indicator_basis_v1.0.0.bin
```

> Preste bastante atenção ao endereço inicial (0x0), especialmente quando não estiver mesclando binários. Para arquivos binários separados, consulte as instruções em [Flash Download Tools for separate binary files](#Flash-Download-Tools-para-arquivos-binários-separados). Seguir essas diretrizes garante uma gravação sem erros.

Para utilizar esses scripts, salve o código em arquivos de texto separados chamados `merge.bat` e `flash.bat` dentro da pasta do projeto. Essa abordagem de organização simplifica o acesso e o uso.

Ao utilizar esses scripts, você simplifica tanto a preparação do firmware quanto as etapas de gravação, contribuindo para um processo mais suave e confiável.

```
├── indicator_basis
│   ├── CMakeLists.txt
│   ├── build
│   ├── docs
│   ├── main
│   ├── partitions.csv
│   ├── sdkconfig
│   └── .defaults
│   └── flash.bat
│   └── merge.bat
```

1. Mescle os binários usando `merge.bat`.
2. Grave o firmware mesclado usando `flash.bat`.

#### Gravando o Firmware

Para gravar o firmware, você pode usar o script `flash.bat` fornecido. Este script foi projetado para simplificar o processo de gravação do seu firmware no microcontrolador ESP32-S3.

<details>
   <summary>Mostrar código do flash.bat</summary>
   ```bat
   @echo off
   setlocal
   cd /d "%~dp0"
   :: Set Chip
   set chip=esp32s3
   :: Set Baud
   set baud=921600
   :: List COM ports
   echo Available ports and devices:
   echo.
   for /F "tokens=* delims=" %%A in ('wmic path Win32_PnPEntity get Name ^| findstr /C:"COM" ^| findstr /C:"CH340"') do (
   echo %%A
   )
   :: Prompt for port
   :chooseport
   echo.
   echo Please enter the COM port to use (e.g., COM5):
   set /p port=
   :: Check if chosen port is valid and contains "CH340"
   for /F "tokens=* delims=" %%A in ('wmic path Win32_PnPEntity get Name ^| findstr /C:"%port%" ^| findstr /C:"CH340"') do (
   set device=%%A
   goto :flash
   )
   echo Port %port% not found
   goto :chooseport
   :flash:: Print chosen parameters
   echo.
   echo You have chosen:
   echo Chip: %chip%
   echo Port: %port% - %device%
   echo Baud: %baud%
   @REM echo Press any key to continue to...
   @REM pause >nul
   :: Run esptool for the single file
   esptool.exe --chip %chip% --port %port% --baud %baud% write_flash -z 0x0 indicator_basis_v1.0.0.bin
   if ERRORLEVEL 1 (
   echo Flashing with the single file failed with error %ERRORLEVEL%.
   goto :end
   )
   :: End of script
   :end
   endlocal
   ```
</details>

#### Mesclando Binários

O script `merge.bat` fornecido pode ser usado para mesclar os arquivos binários necessários em um único arquivo de firmware. Este script simplifica o processo e garante a mesclagem correta para uma gravação bem-sucedida, o que permite que você grave um único arquivo bin em vez de [gravar arquivos separados](#Nota_de_Endereço).

<details>
   <summary>Mostrar código do merge.bat</summary>
   ```bat
   @echo off
   SETLOCAL
   SET CurrentDir=%cd%
   SET ScriptDir=%~dp0
   SET CurrentDir=%CurrentDir:~0,-1%
   SET ScriptDir=%ScriptDir:~0,-1%
   IF NOT "%CurrentDir%"=="%ScriptDir%" (
   cd /d "%ScriptDir%"
   )
   esptool.exe --chip esp32s3 ^
   merge_bin -o indicator_basis_v1.0.0.bin ^
   --flash_mode dio ^
   --flash_size 8MB ^
   0x0 ../../build/bootloader/bootloader.bin ^
   0x8000 ../../build/partition_table/partition-table.bin ^
   0x10000 ../../build/indicator_basis.bin
   ENDLOCAL
   ```
</details>

### **Flash Download Tools** (somente Windows) {#Flash_Tools}

> **Flash Download Tools** são usadas para programar ou gravar firmware nos microcontroladores das séries ESP8266 e ESP32. Elas fornecem uma interface gráfica de usuário (GUI) para que os usuários possam gravar firmware facilmente nos microcontroladores ESP.

Siga os passos para gravar um firmware pré-compilado:

**Download:**
[Flash Download Tools (somente para Windows)](https://www.espressif.com.cn/en/support/download/other-tools?keys=&field_type_tid%5B%5D=842)

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_18.png"/></div>

- **Passo 1**: **Clique duas vezes** no arquivo `.exe` para entrar na interface principal da ferramenta.

- **Passo 2**: Selecione as seguintes opções:

<div class="table-center">
  <table align="center">
    <tr>
        <th>Opção</th>
        <th>Parâmetro</th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign: 'center'}}><strong>Chip Type</strong></div>
        </td>
        <td>
            <div style={{textAlign: 'center'}}>ESP32-S3</div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign: 'center'}}><strong>WorkMode</strong></div>
        </td>
        <td>
            <div style={{textAlign: 'center'}}>Develop</div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign: 'center'}}><strong>LoadMode</strong></div>
        </td>
        <td>
            <div style={{textAlign: 'center'}}>UART</div>
        </td>
    </tr>
  </table>
</div>

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_59.png"/></div>

- **Passo 3**: Conecte o SenseCAP Indicator ao seu laptop com um cabo USB tipo C.

- **Passo 4**: Na guia SPI Download, clique em "..." e navegue até o firmware que você acabou de baixar.

- **Passo 5**: Configure o SPI Flash:

<div class="table-center">
  <table align="center">
    <tr>
        <th>Opção</th>
        <th>Parâmetro</th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign: 'center'}}><strong>SPI SPEED</strong></div>
        </td>
        <td>
            <div style={{textAlign: 'center'}}>40MHz</div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign: 'center'}}><strong>SPI MODE</strong></div>
        </td>
        <td>
            <div style={{textAlign: 'center'}}>DIO</div>
        </td>
    </tr>
  </table>
</div>

- **Passo 6**: Configure o Painel de Download:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator23.png"/></div>

- **COM**: Verifique as portas no seu Gerenciador de Dispositivos, a USB-SERIAL é a correta.
(`Aqui escolhemos COM4`)
- **Baud**: 921600 (valor recomendado)

<!-- Previous: Click `Start` Downloading -->

Então clique em `START` para iniciar a gravação.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/start.png"/></div>

Quando aparecer `FINISH`, a gravação do firmware foi concluída.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/finish.png"/></div>

#### Flash Download Tools para arquivos binários separados {#Address_Note}

No guia mencionado anteriormente, o arquivo binário "Default_Factory_Firmware_ESP32-S3.bin" mescla três binários em um.

No entanto, se você estiver usando ESP-IDF para compilar o firmware, gravar diretamente um único arquivo pode resultar em erros. Em vez disso, você precisará encontrar **três arquivos binários separados** que você compilou e especificar os endereços corretos (você pode usar seus próprios endereços) da seguinte forma:

- **bootloader.bin** ----> **0x0**
- **partion-table.bin** ----> **0x6800**
- **termial_demo.bin** ----> **0x10000**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/3binfiles.png"/></div>

## Para **RP2040**

### Gravar com Arduino IDE {#RP_Arduino}

A Ferramenta de Desenvolvimento RP2040 utiliza o Arduino para aprimorar sua experiência de programação.

> O Arduino IDE é um software gratuito para programar placas Arduino. Com sua interface amigável, você pode escrever e enviar código facilmente. Baseado em uma versão simplificada de C++, ele oferece bibliotecas e exemplos, sendo ótimo para iniciantes.

**Download:**

- **Passo 1**: Instale o [Arduino IDE](https://www.arduino.cc/en/software)

- **Passo 2**: Adicione a Placa Raspberry Pi Pico

Abra o seu Arduino IDE, clique em **Arduino IDE** > **Preferences**, e copie a URL abaixo para **Additional Boards Manager URLs**:

`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`

<div class="table-center">
  <table align="center">
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_29.png" style={{width:680, height:'auto'}}/></div>
        </td>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_80.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
  </table>
</div>

Clique em **Tools** > **Board** > **Board Manager**.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_30.png"/></div>

Pesquise por "indicator" e instale "Raspberry Pi Pico/RP2040" no Boards Manager

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator.png"/></div>

- **Passo 3**: Adicionar Bibliotecas

:::note **Bibliotecas para referência**

- Sensirion Core: [Sensirion Arduino Core library](https://github.com/Sensirion/arduino-core)
- PacketSerial : [Serial communication protoco](https://github.com/bakercp/PacketSerial)
- Sensirion I2C SGP40 : [SGP40 TVOC sensor library](https://github.com/Sensirion/arduino-i2c-sgp40)
- Sensirion I2C SCD4x : [SCD41 CO2 sensor library](https://github.com/Sensirion/arduino-i2c-scd4x)
- Sensirion Gas Index Algorithm : [Transfer index library](https://github.com/Sensirion/arduino-gas-index-algorithm)
- Seeed_Arduino_AHT20 : [AHT20 temperature and humidity sensor library](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20)
:::

No Arduino IDE, você pode pesquisá-las no `Library Manager`, por exemplo `Seeed_Arduino_AHT20`, e então instalá-las.

<details>
<summary>Clique para visualizar a instalação offline</summary>

Para instalá-las *offline*, você pode **baixar o arquivo zip do repositório** no GitHub, navegar até **Sketch** -> **Include Library** -> **Add .ZIP Library**, e então selecionar as bibliotecas que você baixou.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"/></div>

</details>

- **Passo 4**: Conecte o dispositivo ao seu PC com o cabo USB Tipo C fornecido.

- **Passo 5**: Selecione a placa e a porta

Pesquise por "Indicator" e selecione a placa `Seeed INDICATOR RP2040` e selecione a Porta Serial `usbmodem`.

<div class="table-center">
  <table align="center">
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/board.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
     <td>
        <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/portport.png" style={{width:680, height:'auto'}}/></div>
    </td>
  </table>
</div>

- **Passo 6**: Abra o arquivo de código de exemplo

**File** -> **Open**, depois selecione o arquivo de código de exemplo ([arquivo .ino](https://github.com/Seeed-Solution/SenseCAP_Indicator_RP2040/tree/main/examples/indicator_rp2040)).

Nós fornecemos um código de exemplo, você pode modificá-lo de acordo com suas necessidades.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_35.png"/></div>

- **Passo 7**: Verifique e envie (Upload) o arquivo.

<div class="table-center">
  <table align="center">
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_36.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_37.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_38.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
  </table>
</div>

Aqui, concluímos a compilação e a gravação (download) do firmware no RP2040.

### Gravar o arquivo .uf2

- **Passo 1**: Conecte o dispositivo ao seu PC

Pressione e segure este botão interno usando uma agulha, depois conecte o dispositivo ao seu PC com o cabo USB tipo C fornecido, solte o botão assim que estiver conectado.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png"/></div>

- **Passo 2**: Gravação do Firmware

Após a conexão ser bem-sucedida, seu PC exibirá um disco.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png"/></div>

Copie o arquivo [.uf2](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/releases/download/v1.0.0/terminal_rp2040_v1.0.0.uf2) para o disco, então o disco será ejetado.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/uf2.png"/></div>

A atualização será executada automaticamente.

## Protocolo de Comunicação ESP32 & RP2040

ESP32 e RP2040 usam comunicação via porta serial, utilizando o protocolo de comunicação [cobs](http://www.stuartcheshire.org/papers/COBSforToN.pdf). A lista de comandos usados na demonstração é a seguinte:

O formato de comando consiste no tipo de pacote e nos parâmetros do pacote.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_41.png"/></div>

## Recursos

[SenseCAP Indicator ESP32 SDK](https://github.com/Seeed-Solution/sensecap_indicator_esp32.git)

[SenseCAP Indicator RP2040 Demo](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main)

## FAQ

<details>
    <summary>Como distinguir a porta serial?</summary>
    <Tabs
    groupId="operating-systems"
    defaultValue='Win'
    values={[
    {label: 'Windows', value: 'Win'},
    {label: 'MacOS', value: 'Unix'},
    ]}
    >
    <TabItem value="Win" >
      Verifique a porta no seu Gerenciador de Dispositivos
      - "USB Serial Device(COMx)" ou "USB 串行设备" é para o RP2040
      - "USB-SERIAL CH340" é para o ESP32
      Em resumo, a porta CH340 é para o ESP32.
      <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_39.png"/></div>
    </TabItem>
    <TabItem value="Unix">
      - "/dev/cu.usbmodem" é para o RP2040
      <div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_40.png"/></div>
    </TabItem>
    </Tabs>
</details>

# **Atualizações Recentes**

- 2023-11-17
  - Seção de correção removida
- 2023-08-25
  - Tornar a seção de correção mais clara
- 2023-07-25
  - Conteúdo adicionado para gravação de firmware usando Esptool
- 2023-05-29
  - Seção de correção adicionada

# **Suporte Técnico**

**Precisa de ajuda com o seu SenseCAP Indicator? Estamos aqui para ajudar você!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
