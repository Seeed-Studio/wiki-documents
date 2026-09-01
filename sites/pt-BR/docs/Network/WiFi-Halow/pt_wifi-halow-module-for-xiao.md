---
description: Tutorial do módulo Wi-Fi HaLow Wio-WM6108 com XIAO ESP32S3
title: Introdução ao módulo Wi-Fi HaLow para XIAO
image: https://files.seeedstudio.com/wiki/wifi_halow/pic/20.webp
slug: /getting_started_with_wifi_halow_module_for_xiao
sku: 109100041
sidebar_class_name: hidden
last_update:
  date: 02/12/2025
  author: Citric
createdAt: '2025-02-13'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_wifi_halow_module_for_xiao/
---


# Introdução ao módulo Wi-Fi HaLow para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/20.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-Module-for-XIAO-p-6395.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

Este tutorial irá guiá-lo na configuração e uso do módulo Wio-WM6108 Wi-Fi HaLow com um XIAO ESP32S3 para construir um cliente Wi-Fi HaLow. Wi-Fi HaLow (IEEE 802.11ah) é projetado para aplicações IoT de longo alcance e baixo consumo de energia, operando na faixa de frequência abaixo de 1 GHz. Vamos passar pela configuração de hardware, configuração de software e demonstrar como estabelecer conectividade Wi-Fi HaLow para seus projetos de IoT.

### Principais recursos

- Conectividade Wi-Fi de longo alcance de até 1 km em linha de visada
- Baixo consumo de energia, ideal para dispositivos IoT
- Operação abaixo de 1 GHz para melhor penetração através de paredes e obstáculos
- Compatível com a placa de desenvolvimento XIAO ESP32S3
- Processo de configuração e ajuste fácil de seguir

## Visão geral de hardware

A tabela a seguir descreve as principais especificações do módulo Wio-WM6108 Wi-Fi HaLow:

| Característica | Valor | Unidade |
|:-------------:|:-----:|:----:|
| Tensão de operação | 3.3 (Digital) / 5.0 (RF front-end)| V |
| Corrente de operação | TBD | mA |
| Protocolo Wi-Fi | IEEE 802.11ah | - |
| Faixa de frequência | Abaixo de 1 GHz | - |
| Alcance | Até 1 | km |
| Interface | SPI | - |
| Dimensões | TBD | mm |

:::caution Both 3.3/5.0V power supply are required
Esta placa requer **duas** entradas de alimentação separadas:
- O **pad de 3.3V** alimenta os trilhos digitais do módulo.
- O **pad de 5.0V** alimenta o front-end de RF (amplificador de potência de TX) por meio de um trilho separado.

Quando o módulo é conectado a uma placa de expansão XIAO, ambos os trilhos de alimentação são fornecidos automaticamente através do conector de expansão.

No entanto, **ao conectar a placa a um sistema host via interface de pads (por exemplo, um Raspberry Pi via SPI), você deve conectar todos os 5V, 3.3V e GND.**

Se apenas 3.3V estiver conectado, o módulo poderá carregar o firmware e receber normalmente, mas **não poderá transmitir na potência nominal.**
:::

## O que é Wi-Fi HaLow?

Wi-Fi HaLow é um protocolo de rede sem fio baseado no padrão IEEE 802.11ah, projetado especificamente para aplicações de Internet das Coisas (IoT). Operando na faixa de frequência abaixo de 1 GHz (tipicamente 900 MHz), o Wi-Fi HaLow oferece várias vantagens significativas em relação ao Wi-Fi tradicional:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/Wi-Fi_HaLow_frequency_band_graphic.png" style={{width:800, height:'auto'}}/></div>

1. **Alcance estendido**: o Wi-Fi HaLow pode atingir distâncias de até 1 quilômetro em condições de linha de visada, superando em muito o alcance do Wi-Fi convencional.

2. **Melhor penetração**: os sinais de frequência mais baixa conseguem penetrar melhor em paredes e outros obstáculos, tornando-o ideal para ambientes desafiadores.

3. **Baixo consumo de energia**: projetado com dispositivos IoT em mente, o Wi-Fi HaLow permite anos de vida útil de bateria para dispositivos conectados.

4. **Escalabilidade**: suporta milhares de dispositivos conectados a um único ponto de acesso, perfeito para implantações IoT em grande escala.

5. **Segurança**: herda os recursos robustos de segurança da família Wi-Fi, incluindo criptografia WPA3.

### Por que o Wi-Fi HaLow é importante

O Wi-Fi HaLow atende às crescentes necessidades de aplicações IoT que exigem conectividade de longo alcance, baixo consumo de energia e capacidade de lidar com inúmeros dispositivos simultaneamente. Ele preenche a lacuna entre o Wi-Fi tradicional e as tecnologias LPWAN, oferecendo:

- **IoT industrial**: possibilita conectividade confiável em fábricas, armazéns e ambientes industriais.
- **Agricultura inteligente**: fornece cobertura em grandes áreas agrícolas para redes de sensores.
- **Cidades inteligentes**: suporta extensas redes de dispositivos conectados em ambientes urbanos.
- **Rastreamento de ativos**: permite o rastreamento de longo alcance de ativos e equipamentos valiosos.

Ao combinar a familiaridade do Wi-Fi com os benefícios de conectividade de longo alcance e baixo consumo de energia, o Wi-Fi HaLow está pronto para desempenhar um papel crucial na expansão das aplicações de IoT em diversos setores.

### Arquitetura de sistema Wi-Fi HaLow

Uma rede típica de Wi-Fi HaLow consiste em vários componentes principais que trabalham juntos para possibilitar conectividade IoT de longo alcance e baixo consumo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/wifi-halow-architecture.png" style={{width:800, height:'auto'}}/></div>

1. **Ponto de Acesso (AP)**: o hub central da rede Wi-Fi HaLow, responsável por gerenciar conexões e rotear dados entre dispositivos e a internet.

2. **Estações (STA)**: os dispositivos clientes que se conectam ao Ponto de Acesso. Podem ser sensores, atuadores ou outros dispositivos IoT.

3. **Gateway**: atua como uma ponte entre a rede Wi-Fi HaLow e outras redes (por exemplo, Ethernet ou celular).

Neste tutorial, vamos configurar o XIAO ESP32S3 como um cliente Estação (STA) que se conecta a um Ponto de Acesso Wi-Fi HaLow. O XIAO usará o módulo WM6108 para estabelecer e manter a conexão HaLow.

## Framework MM-IoT-SDK

O módulo WM6108 utiliza o [MM-IoT-SDK da MorseMicro](https://github.com/MorseMicro/mm-iot-esp32), que fornece:

- **Suporte multiprotocolo**: permite integração perfeita com vários protocolos de IoT
- **Gerenciamento de baixo consumo**: consumo de energia otimizado para dispositivos alimentados por bateria
- **Recursos de segurança**: mecanismos integrados de criptografia e autenticação
- **Configuração fácil**: API simplificada para configuração e gerenciamento de rede

A arquitetura do MM-IoT-SDK consiste em várias camadas:

1. **Camada de Abstração de Hardware (HAL)**: fornece uma interface unificada para diferentes plataformas de hardware
2. **Pilha de rede**: implementa a pilha de protocolo Wi-Fi HaLow
3. **Camada de aplicação**: oferece APIs para desenvolvimento de aplicações e gerenciamento de dispositivos

Esse framework permite que desenvolvedores implementem rapidamente funcionalidades Wi-Fi HaLow, mantendo flexibilidade para aplicações personalizadas.

## Materiais necessários

Aqui estão os materiais necessários para executar este tutorial.

<div class="table-center">
    <table align="center">
        <tr>
            <th>XIAO ESP32S3 Sense</th>
            <th>Módulo Wi-Fi HaLow Wio-WM6108 para XIAO</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/20.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-Module-for-XIAO-p-6395.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

:::note
Este tutorial é aplicável apenas à série XIAO ESP32-S3. Usaremos o XIAO ESP32S3 Sense como exemplo neste tutorial.
:::

Além do mencionado acima, você pode precisar preparar antenas adicionais adequadas para uso com WiFi-Halow. Aqui estão os modelos de antena verificados e recomendados.

<div class="table-center">
    <table align="center">
        <tr>
            <th>Kit de antena interna de longo alcance</th>
            <th>Antena de longo alcance de 2,6 dBi</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/long_range_indoor_antenna.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.6dBi_long_range_antenna.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

Para conectar a antena ao módulo WiFi-Halow, você também pode precisar adquirir o **cabo de antena SMA para I-PEX**.

<div class="table-center">
    <table align="center">
        <tr>
            <th>Cabo de antena SMA para I-PEX</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/antenna_cable.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

Se você estiver usando pela primeira vez, pode consultar o vídeo a seguir para a instalação da antena.

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/wifi_halow/pic/install_xiao_wifi_halow_module.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Instalar ESP-IDF v5.1.1

Antes de começarmos a programar, precisamos instalar o ESP-IDF v5.1.1 no seu computador. ESP-IDF é o framework oficial de desenvolvimento para os chips da série ESP32.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Windows" label="Windows">

**Passo 1.** Baixar o ESP-IDF Tools Installer para Windows

Baixe o [ESP-IDF Tools Installer](https://dl.espressif.com/dl/esp-idf/?idf=5.1.1) para Windows. Este instalador inclui todas as ferramentas necessárias para o desenvolvimento com ESP-IDF.

**Passo 2.** Executar o instalador

1. Execute o instalador baixado como administrador
2. Siga as instruções para instalar Python, Git e outras ferramentas necessárias
3. Quando solicitado, selecione as seguintes opções:
   - Instalar ESP-IDF v5.1.1
   - Instalar Python
   - Instalar Git
   - Adicionar ESP-IDF Tools ao Path

**Passo 3.** Verificar a instalação

Abra um novo Prompt de Comando e execute:

```bash
esp-idf --version
```

Se a instalação foi bem-sucedida, você deverá ver o número de versão 5.1.1.

</TabItem>

<TabItem value="MacOS" label="MacOS">

**Passo 1.** Instalar pré-requisitos

Abra o Terminal e instale o Homebrew se ainda não o tiver:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Instale os pacotes necessários:

```bash
brew install cmake ninja dfu-util
```

**Passo 2.** Baixar e instalar o ESP-IDF

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh esp32s3
```

**Passo 3.** Configurar as variáveis de ambiente

```bash
. $HOME/esp/esp-idf/export.sh
```

Adicione esta linha ao seu `~/.profile` ou `~/.zshrc` para configurar automaticamente as variáveis de ambiente ao abrir um novo terminal.

</TabItem>

<TabItem value="Linux" label="Linux">

**Passo 1.** Instalar pré-requisitos

Para Ubuntu e Debian:

```bash
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-setuptools cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

Para outras distribuições, instale os pacotes equivalentes.

**Passo 2.** Baixar e instalar o ESP-IDF

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh esp32s3
```

**Passo 3.** Configurar as variáveis de ambiente

```bash
. $HOME/esp/esp-idf/export.sh
```

Adicione esta linha ao seu `~/.bashrc` para configurar automaticamente as variáveis de ambiente ao abrir um novo terminal.

</TabItem>
</Tabs>

:::tip
Após a instalação, talvez seja necessário reiniciar o computador para garantir que todas as variáveis de ambiente sejam configuradas corretamente.
:::

:::note
Para instruções mais detalhadas sobre a instalação do ESP-IDF v5.1.1, você pode consultar a documentação oficial da Espressif:

- [Guia de Introdução ao ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/v5.1.1/esp32s3/get-started/index.html)

:::

## Clonar e Configurar o Repositório mm-iot-esp32

Siga estas etapas para clonar o repositório mm-iot-esp32 e configurar as variáveis de ambiente:

<Tabs>
<TabItem value="Windows" label="Windows">

**Passo 1.** Clonar o repositório

```bash
cd %USERPROFILE%
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**Passo 2.** Exportar variáveis do IDF

```bash
cd %USERPROFILE%\mm-iot-esp32
export.bat
```

**Passo 3.** Definir a variável de ambiente MMIOT_ROOT

Você pode defini-la permanentemente pelas Propriedades do Sistema do Windows:

1. Abra Propriedades do Sistema (Win + R, digite `sysdm.cpl`)
2. Clique em "Environment Variables"
3. Em "User variables", clique em "New"
4. Nome da variável: `MMIOT_ROOT`
5. Valor da variável: `C:\Users\YourUsername\mm-iot-esp32` (substitua pelo seu caminho real)
6. Clique em "OK" para salvar

Como alternativa, você pode defini-la temporariamente no Prompt de Comando:

```bash
set MMIOT_ROOT=C:\Users\YourUsername\mm-iot-esp32
```

</TabItem>

<TabItem value="MacOS" label="MacOS">

**Passo 1.** Clonar o repositório

```bash
cd ~
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**Passo 2.** Exportar variáveis do IDF

```bash
cd ~/mm-iot-esp32
source export.sh
```

**Passo 3.** Definir a variável de ambiente MMIOT_ROOT

Para uso temporário:

```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

Para uso permanente, adicione ao arquivo de configuração do seu shell:

```bash
# For bash users (add to ~/.bash_profile or ~/.bashrc)
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bash_profile

# For zsh users (add to ~/.zshrc)
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

Em seguida, recarregue a configuração do shell:

```bash
# For bash
source ~/.bash_profile

# For zsh
source ~/.zshrc
```

</TabItem>

<TabItem value="Linux" label="Linux">

**Passo 1.** Clonar o repositório

```bash
cd ~
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**Passo 2.** Exportar variáveis do IDF

```bash
cd ~/mm-iot-esp32
source export.sh
```

**Passo 3.** Definir a variável de ambiente MMIOT_ROOT

Para uso temporário:

```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

Para uso permanente, adicione ao arquivo de configuração do seu shell:

```bash
# For bash users
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bashrc

# For zsh users
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

Em seguida, recarregue a configuração do shell:

```bash
# For bash
source ~/.bashrc

# For zsh
source ~/.zshrc
```

</TabItem>
</Tabs>

:::tip
Certifique-se de usar caminhos absolutos ao definir a variável de ambiente MMIOT_ROOT. Caminhos relativos podem causar problemas ao compilar projetos.
:::

:::note
Depois de definir as variáveis de ambiente, talvez seja necessário fechar e reabrir o terminal para que as alterações entrem em vigor.
:::

## Compilando o Firmware de Exemplo

O repositório mm-iot-esp32 inclui vários aplicativos de exemplo que demonstram diferentes funcionalidades. Veja como compilar e configurar esses exemplos:

### Localização dos Aplicativos de Exemplo

Todos os aplicativos de exemplo podem ser encontrados no diretório `examples` do repositório. Exemplos disponíveis incluem:

- `scan`: exemplo de varredura Wi-Fi
- `iperf`: exemplo de servidor iperf
- `sta_reboot`: exemplo de reinicialização de estação Wi-Fi
- `sta_connect`: exemplo de conexão de estação Wi-Fi
- `web_camera_server`: exemplo de servidor de câmera web
- E mais...

### Configurar Credenciais de Rede

Antes de compilar o firmware, você precisa configurar as configurações de rede no arquivo de configuração do exemplo:

1. Navegue até o diretório do exemplo escolhido:

```bash
cd $MMIOT_ROOT/examples/example_name
```

2. Edite o arquivo de configuração:

```bash
# Open the configuration file
nano src/mm_app_loadconfig.c
```

3. Neste arquivo, você pode modificar:

- Código do país (deve ser definido como **US**, pois o produto está atualmente disponível apenas para a América do Norte)
- Credenciais da rede Wi-Fi HaLow
- Outros parâmetros relacionados à rede

:::caution
Nota Importante Sobre o Código do País:

- O código do país deve ser definido como "US", pois este produto está atualmente disponível apenas para o mercado norte-americano
- O produto ainda não está disponível para outras regiões devido a exigências regulatórias
- Usar o produto em regiões fora da América do Norte pode violar regulamentações locais

:::

### Processo de Compilação

Após configurar as definições de rede, você pode compilar o firmware usando estes comandos:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
```

:::note

- O comando `idf.py set-target` precisa ser executado apenas uma vez para cada exemplo
- `idf.py fullclean` garante uma compilação limpa, removendo todos os artefatos de compilação anteriores
- Após a compilação bem-sucedida, o binário do firmware estará localizado no diretório `build`

:::

### Saída da Compilação

Após uma compilação bem-sucedida, você deverá ver uma saída semelhante a esta:

```bash
# Project build complete. To flash, run this command:
idf.py -p (PORT) flash
```

A seguir, demonstraremos alguns exemplos.

## Exemplo 1. scan

Este exemplo demonstra como procurar redes Wi-Fi HaLow disponíveis nas proximidades. Siga estas etapas para compilar e executar o exemplo de varredura:

### Passo 1: Navegar até o Exemplo de Varredura

```bash
cd ~/mm-iot-esp32/example/scan
```

### Passo 2: Configurar o Código do País

1. Abra o arquivo de configuração:

```bash
nano main/src/mm_app_loadconfig.c
```

2. Localize e modifique a linha do código do país:

```c
#define COUNTRY_CODE "US"  // Must use "US" as the product is only available for North America
```

### Passo 3: Configuração de Hardware

1. Conecte o Módulo Wio-WM6108 Wi-Fi HaLow ao seu XIAO ESP32S3

2. Conecte o XIAO ESP32S3 ao seu computador via USB

### Passo 4: Compilar e Gravar

Execute os seguintes comandos em sequência:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### Passo 5: Monitorar Resultados

Se tudo estiver funcionando corretamente:

- O monitor serial será iniciado automaticamente após a gravação
- O programa começará a procurar redes Wi-Fi HaLow
- Se houver quaisquer gateways Wi-Fi HaLow ao alcance, suas informações serão exibidas no monitor serial

Exemplo de saída no monitor serial:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/9.png" style={{width:1000, height:'auto'}}/></div>

:::tip

- Certifique-se de que haja gateways Wi-Fi HaLow nas proximidades para detectar redes
- O processo de varredura é executado continuamente, portanto você verá atualizações periódicas das redes disponíveis
- Pressione Ctrl+C para parar o monitor e sair do programa

:::

:::note
Se você não vir nenhuma rede:

- Verifique se o seu gateway Wi-Fi HaLow está ligado e funcionando
- Verifique se você está dentro do alcance do gateway
- Certifique-se de que o módulo está conectado corretamente ao seu XIAO ESP32S3

:::

## Exemplo 2. iperf

Este exemplo demonstra como testar o desempenho de rede da sua conexão Wi-Fi HaLow usando iPerf. Siga estas etapas para compilar e executar o exemplo iPerf:

### Etapa 1: Navegar até o exemplo iPerf

```bash
cd ~/mm-iot-esp32/example/iperf
```

### Etapa 2: Configurar as definições de rede

1. Abra o arquivo de configuração:

```bash
nano main/src/mm_app_loadconfig.c
```

2. Modifique os seguintes parâmetros:

```cpp
// Set country code (must be "US" for North America)
#define COUNTRY_CODE "US"

// Set your Wi-Fi HaLow network credentials
#define SSID             Your_HaLow_SSID           // Replace with your network name
#define SAE_PASSPHRASE   Your_Password             // Replace with your network password
```

### Etapa 3: Configuração de hardware

1. Conecte o módulo Wio-WM6108 Wi-Fi HaLow ao seu XIAO ESP32S3
2. Conecte o XIAO ESP32S3 ao seu computador via USB

### Etapa 4: Compilar e gravar

Execute os seguintes comandos em sequência:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### Etapa 5: Executar o teste de desempenho

Quando o programa estiver em execução com sucesso, você verá o serviço iPerf iniciar. Agora você pode executar testes de desempenho a partir do seu gateway Wi-Fi HaLow.

Para testes IPv4, execute este comando no seu gateway:

```bash
iperf -c <device_ip> -p <port> -i 1 -u -b 20M
```

Para testes IPv6, execute este comando no seu gateway:

```bash
iperf -c <device_ip>%wlan0 -p <port> -i 1 -V -u -b 20M
```

Explicação dos parâmetros:

- `-c`: Executar em modo cliente
- `-p`: Número da porta
- `-i`: Intervalo de relatório (1 segundo)
- `-u`: Usar protocolo UDP
- `-b`: Largura de banda alvo (20 Mbps)
- `-V`: Modo IPv6 (apenas para testes IPv6)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/11.png" style={{width:1000, height:'auto'}}/></div>

:::tip

- Certifique-se de que seu dispositivo se conectou com sucesso à rede Wi-Fi HaLow antes de executar o teste de desempenho
- O endereço IP do dispositivo será exibido no monitor serial após a conexão
- Você pode ajustar a largura de banda (parâmetro -b) com base nas suas necessidades de teste

:::

:::note
Problemas comuns e soluções:

- Se a conexão falhar, verifique suas credenciais de rede
- Se o serviço iPerf não iniciar, verifique suas conexões de hardware
- Se o desempenho estiver ruim, certifique-se de que você está dentro de um bom alcance do gateway

:::

## Exemplo 3. web_camera_server

Este exemplo demonstra como transmitir o fluxo da câmera do XIAO ESP32S3 Sense pela rede Wi-Fi HaLow. Siga estas etapas para compilar e executar o servidor de câmera web:

### Etapa 1: Navegar até o exemplo de câmera web

```bash
cd ~/mm-iot-esp32/example/web_camera_serve
```

### Etapa 2: Configurar as definições de rede

1. Abra o arquivo de configuração:

```bash
nano main/src/mm_app_loadconfig.c
```

2. Modifique as credenciais Wi-Fi HaLow:

```cpp
// Set your Wi-Fi HaLow network credentials
#define SSID              Your_HaLow_SSID           // Replace with your network name
#define SAE_PASSPHRASE    Your_Password             // Replace with your network password
```

### Etapa 3: Configuração de hardware

1. Conecte o módulo Wio-WM6108 Wi-Fi HaLow ao seu XIAO ESP32S3 Sense
2. Certifique-se de que o módulo de câmera no seu XIAO ESP32S3 Sense está conectado corretamente
3. Conecte o XIAO ESP32S3 Sense ao seu computador via USB

### Etapa 4: Compilar e gravar

Execute os seguintes comandos em sequência:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### Etapa 5: Acessar o fluxo da câmera

Quando o programa estiver em execução com sucesso:

1. Anote o endereço IP exibido no monitor serial
2. Abra um navegador da web em qualquer dispositivo conectado à mesma rede que o seu gateway Wi-Fi HaLow
3. Digite o endereço IP na barra de endereços do navegador
4. Agora você deverá ver o fluxo de câmera ao vivo do seu XIAO ESP32S3 Sense

URL de exemplo:

```
http://192.168.4.1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/14.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Para a melhor experiência de streaming:

- Garanta boas condições de iluminação para melhor qualidade de imagem
- Mantenha o XIAO ESP32S3 Sense dentro de um bom alcance do gateway Wi-Fi HaLow
- Use um navegador web moderno para compatibilidade ideal

:::

:::note
Solução de problemas:

- Se você não conseguir acessar o fluxo da câmera, verifique se seu dispositivo está na mesma rede que o gateway Wi-Fi HaLow
- Se a imagem não estiver aparecendo, verifique se o módulo de câmera está conectado corretamente
- Se o fluxo estiver com atraso, tente se aproximar do gateway Wi-Fi HaLow

:::

## Recursos

- **[GITHUB]** [repositório mm-iot-esp32](https://github.com/Seeed-Studio/mm-iot-esp32.git)
- **[GITHUB]** [Documento mm-iot](https://github.com/Seeed-Studio/mm-iot-esp32/blob/main/documentation.html)
- **[PDF]** [WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107.pdf)
- **[KiCAD]** [Arquivo de PCB KiCAD WI-FI_HALOW_FGH100M_EXT01_V30](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30.kicad_pcb)
- **[PDF]** [Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0](https://files.seeedstudio.com/wiki/wifi_halow/res/Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0_Preliminary_20241018.pdf)

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
