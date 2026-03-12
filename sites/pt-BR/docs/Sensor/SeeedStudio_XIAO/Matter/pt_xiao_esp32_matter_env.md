---
description: Apresenta como instalar e configurar o ambiente ESP-Matter.
title: Desenvolvimento Matter com XIAO ESP32 Série
keywords:
  - ESP-IDF
  - matter
  - XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32_matter_env
sku: 113991254,102010636,101991470
last_update:
  date: 05/15/2024
  author: Citric
createdAt: '2024-05-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32_matter_env/
---

# Desenvolvimento Matter com XIAO ESP32 Série

:::tip
Este artigo é o terceiro tutorial da série de desenvolvimento Matter com Seeed Studio XIAO ESP32. Se você ainda não leu os tutoriais anteriores, recomendamos que os leia primeiro para verificar se o seu dispositivo está e foi configurado conforme necessário.

- **[Desenvolvimento no XIAO usando Espressif ESP-IDF](https://wiki.seeedstudio.com/pt-br/xiao_idf)**
- **[Começando com Matter Rapidamente com XIAO ESP32 Série](https://wiki.seeedstudio.com/pt-br/getting_started_with_matter)**

:::

No cenário em rápida evolução da Internet das Coisas (IoT), um novo participante surgiu para revolucionar a forma como os dispositivos de casa inteligente se comunicam e interagem entre si. Conheça o Matter, o protocolo unificador que promete reduzir a lacuna entre vários ecossistemas de casa inteligente e criar uma experiência contínua e interoperável para usuários em todo o mundo.

Então, o que exatamente é o Matter e por que ele está gerando tanta empolgação na comunidade de IoT? Matter é um protocolo padronizado e de código aberto que permite que dispositivos de casa inteligente de diferentes fabricantes funcionem juntos sem esforço. Ele tem como objetivo simplificar o desenvolvimento e a implantação de dispositivos IoT, fornecendo uma linguagem e uma estrutura comuns para comunicação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Matter-stack.png" style={{width:700, height:'auto'}}/></div>

- Protocolo de comunicação para dispositivos de casa inteligente.
- Versão 1.0 lançada em 4 de outubro de 2022, após ter sido adiada duas vezes.
- Conjunto padronizado de comandos, para que dispositivos de diferentes fabricantes possam se comunicar entre si.
- Funciona sobre redes IP, utilizando Thread, Wi-Fi ou Ethernet.
- Utiliza Security by Design e Zero-Trust.
- Funciona localmente – geralmente conecta à nuvem por meio de um hub Matter.
- Existe em paralelo a outros padrões de casa inteligente, como Zigbee, Z-Wave e 433MHz.
- Vida útil da bateria e alcance dependem da tecnologia de rede sem fio.
- Coordenado por um hub Matter.

A proposta de valor do Matter é clara: ele oferece um caminho para uma experiência de casa inteligente mais conectada, amigável e segura. Ao adotar o Matter, os fabricantes de dispositivos podem garantir que seus produtos sejam compatíveis com uma ampla variedade de plataformas e assistentes de casa inteligente, como Amazon Alexa, Google Home e Apple HomeKit. Essa interoperabilidade não só beneficia os consumidores, como também abre novas oportunidades para desenvolvedores e empresas no espaço de IoT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Matter-network.jpg" style={{width:800, height:'auto'}}/></div>

Como desenvolvedor, adotar o Matter significa aproveitar um vasto ecossistema de dispositivos e serviços, permitindo que você crie soluções inovadoras que podem se integrar perfeitamente às configurações de casa inteligente existentes. Ao aproveitar o poder do Matter, você pode se concentrar em construir experiências e funcionalidades de usuário atraentes, em vez de se preocupar com as complexidades de comunicação e compatibilidade entre dispositivos.

Para embarcar na sua jornada de desenvolvimento com Matter, você precisará das ferramentas e do ambiente certos. Neste tutorial, vamos guiá-lo pelo processo de configuração de um ambiente de desenvolvimento Matter usando o Seeed Studio XIAO ESP32C6, uma placa compacta e poderosa projetada especificamente para aplicações IoT. Com seu microcontrolador ESP32-C6 e interfaces periféricas extensas, o XIAO ESP32C6 é uma escolha ideal para o desenvolvimento de dispositivos compatíveis com Matter.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Thread-matter-smart-homes.png" style={{width:800, height:'auto'}}/></div>

Nas seções a seguir, vamos guiá-lo pelas etapas para configurar seu ambiente de desenvolvimento Matter, incluindo a instalação do software necessário, a configuração da placa Seeed Studio XIAO ESP32C6 e a execução do seu primeiro programa de exemplo Matter. Ao final deste tutorial, você terá uma base sólida para começar a construir seus próprios dispositivos Matter e contribuir para o crescente ecossistema de soluções de casa inteligente interoperáveis.

Então, vamos mergulhar e liberar o potencial do desenvolvimento Matter com o Seeed Studio XIAO ESP32C6!

## Preparar o Software

Abaixo listarei a versão do sistema, a versão do ESP-IDF e a versão do ESP-Matter usadas neste artigo para referência. Esta é uma versão estável que foi testada e funciona corretamente.

- **Host**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/).
- **ESP-IDF**: Tags [v5.2.1](https://github.com/espressif/esp-idf/tree/v5.2.1).
- **ESP-Matter**: branch main, em 10 de maio de 2024, commit [bf56832](https://github.com/espressif/esp-matter/commit/bf568327d41ca29167fcf2743ace1941432e4aa5).
- **connectedhomeip**: atualmente funciona com o commit [13ab158f10](https://github.com/project-chip/connectedhomeip/tree/13ab158f10), em 10 de maio de 2024.
- **[Git](https://git-scm.com/)**
- **[Visual Studio Code](https://code.visualstudio.com/)**

## Preparar o Hardware

Nesta seção, detalharemos como configurar o uso do ESP-IDF no ambiente Ubuntu e executar o exemplo de iluminação fornecido pelo ESP-IDF. Portanto, para este artigo, você só precisa preparar qualquer um dos seguintes XIAO ESP32 série.

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO ESP32-C3</th>
   <th>XIAO ESP32-S3</th>
   <th>XIAO ESP32-C5</th>
    <th>XIAO ESP32-C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/3-100010048-Seeed-Studio-XIAO-ESP32C5.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Além do XIAO, também precisamos da barra de luz ou conta de luz modelo WS281x. Atualmente o exemplo de luz fornecido pela Espressif só suporta uma única conta, então, seja usando uma fita ou uma conta, apenas uma luz acenderá. Também recomendamos que você adquira o Grove Base para XIAO para facilitar a fiação.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Base para XIAO</th>
   <th>Grove - RGB LED Ring (20 - WS2813 Mini)</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a></div></td>
  </tr>
 </table>
</div>

Para unificar a interface, usaremos o pino **D9** como exemplo neste caso, portanto conecte sua fita ou conta de LED ao pino **D9** do XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/17.png" style={{width:400, height:'auto'}}/></div>

## Tutoriais em Vídeo

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/g9hBp84xs1E?si=fzE--HA7v8H8R090?si=iH-oouOl_ItkG7vF?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Instalação do ESP-Matter Passo a Passo

:::tip
Antes de iniciar a instalação do ambiente para Matter, certifique-se de que você já [instalou e acessou o ambiente de programação ESP-IDF](https://wiki.seeedstudio.com/pt-br/xiao_idf/#step-5-set-up-environment-variables).
:::

:::tip
Ao configurar o ambiente ESP-IDF, você precisa garantir que a placa XIAO que está utilizando seja compatível com o ambiente Matter atual. Por exemplo, ao usar o XIAO ESP32-C5 e o XIAO ESP32-C6, a versão mais recente suportada no momento da redação deste wiki é o ESP-IDF v5.5.1. Para mais detalhes, visite [Supported ESP-IDF and connectedhomeip versions](https://github.com/espressif/esp-matter)
:::

### Etapa 1. Instalar dependências

Primeiro, você precisa instalar os pacotes necessários usando `apt-get`. Abra o terminal e execute o seguinte comando:

```bash
sudo apt-get install git gcc g++ pkg-config libssl-dev libdbus-1-dev \
     libglib2.0-dev libavahi-client-dev ninja-build python3-venv python3-dev \
     python3-pip unzip libgirepository1.0-dev libcairo2-dev libreadline-dev
```

Este comando instala vários pacotes como `git`, compiladores (`gcc`, `g++`) e bibliotecas necessárias para compilar e executar o Matter SDK.

### Etapa 2. Clonar o repositório ESP-Matter

Clone o repositório `esp-matter` do GitHub usando o comando `git clone` com profundidade 1 para buscar apenas o snapshot mais recente:

```bash
cd ~/esp
git clone --depth 1 https://github.com/espressif/esp-matter.git
```

Acesse o diretório `esp-matter` e inicialize os submódulos Git necessários:

```bash
cd esp-matter
git submodule update --init --depth 1
```

Navegue até o diretório `connectedhomeip` e execute um script Python para gerenciar submódulos para plataformas específicas:

```bash
cd ./connectedhomeip/connectedhomeip
./scripts/checkout_submodules.py --platform esp32 linux --shallow
```

Este script atualiza os submódulos para as plataformas ESP32 e Linux de forma superficial (apenas o último commit).

### Etapa 3. Instalar o ESP-Matter

Volte para o diretório raiz do `esp-matter` e execute o script de instalação:

```bash
cd ../..
./install.sh
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/1.png" style={{width:1000, height:'auto'}}/></div>

Este script instalará dependências adicionais específicas do SDK ESP-Matter.

### Etapa 4. Definir variáveis de ambiente

Carregue o script `export.sh` para definir as variáveis de ambiente necessárias para o desenvolvimento:

```bash
source ./export.sh
```

Este comando configura o seu shell com os caminhos e variáveis de ambiente necessários.

### Etapa 5 (Opcional). Acesso rápido ao ambiente de desenvolvimento ESP-Matter

Para adicionar os aliases fornecidos e as configurações de variáveis de ambiente ao seu arquivo `.bashrc`, siga estes passos. Isso irá configurar o ambiente do seu shell para alternar facilmente entre os ambientes de desenvolvimento IDF e Matter, e habilitar o ccache para compilações mais rápidas.

Abra o terminal e use um editor de texto para abrir o arquivo `.bashrc` localizado no seu diretório home. Você pode usar `nano` ou qualquer editor de sua preferência. Por exemplo:

```bash
nano ~/.bashrc
```

Role até o final do arquivo `.bashrc` e adicione as seguintes linhas:

```bash
# Alias for setting up the ESP-Matter environment
alias get_matter='. ~/esp/esp-matter/export.sh'

# Enable ccache to speed up compilation
alias set_cache='export IDF_CCACHE_ENABLE=1'
```

Após adicionar as linhas, salve o arquivo e saia do editor de texto. Se você estiver usando `nano`, pode salvar pressionando `Ctrl+O`, apertar `Enter` para confirmar e depois `Ctrl+X` para sair.

Para que as alterações entrem em vigor, você precisa recarregar o arquivo `.bashrc`. Você pode fazer isso carregando o arquivo `.bashrc` ou fechando e reabrindo o terminal. Para carregar o arquivo `.bashrc`, use o seguinte comando:

```bash
source ~/.bashrc
```

Agora você pode executar `get_matter` e `set_cache` para configurar ou atualizar o ambiente esp-matter em qualquer sessão de terminal.

```bash
get_matter
set_cache
```

## Executando o exemplo light

Depois que o ambiente Matter estiver configurado, podemos compilar e enviar a aplicação de exemplo light para testá-la.

### Etapa 1. Configurar os parâmetros do projeto

Navegue até o diretório `examples/light`.

```bash
cd examples/light                # Navigate to the light example directory
```

Execute uma limpeza para remover arquivos de compilação anteriores.

```bash
rm -rf build/                     # Clean previous build files
```

Defina o alvo como ESP32-C6.

```bash
idf.py set-target esp32c6        # Set the build target to ESP32-C6
```

Entre no menu de configuração e faça as configurações necessárias.

```bash
idf.py menuconfig                # Enter the configuration menu
```

Dentro do `menuconfig`, você precisa localizar e habilitar a opção `Channel for console oputput`. Normalmente, essa opção pode ser encontrada em **Component config** -> **ESP System Settings**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/7.png" style={{width:1000, height:'auto'}}/></div>

1. Use as teclas de seta para navegar até a opção.
2. Pressione Espaço ou Enter para selecionar a opção: `USB Serial/JTAG Controller`.

Para um XIAO diferente, também precisamos atualizar o número do pino GPIO correspondente. Esta opção pode ser encontrada em **Component config -> Board Support Package (generic) -> LEDs**.

- Para XIAO ESP32-C3, o GPIO de D9 é 9.
- Para XIAO ESP32-S3, o GPIO de D9 é 8.
- Para XIAO ESP32-C5, o GPIO de D9 é 9.
- Para XIAO ESP32C6, o GPIO de D9 é 20.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/33.png" style={{width:1000, height:'auto'}}/></div>

1. Use as teclas de seta para navegar até a opção.
2. Pressione Espaço ou Enter para inserir o número GPIO.
3. Depois de habilitar as opções necessárias, saia do `menuconfig` pressionando `q` e, em seguida, pressione `y`.

### Etapa 2. Compilar e enviar a aplicação de exemplo

Continue com o processo de compilação e gravação:

```bash
idf.py build                      # Build the project
```

Se a compilação ocorrer bem, você verá o seguinte resultado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/2.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, você pode enviar o programa.

```bash
idf.py -p /dev/ttyACM0 flash monitor  # Flash the firmware and monitor the output
```

Substitua `/dev/ttyACM0` pelo arquivo de dispositivo USB real que corresponde ao seu XIAO ESP32, se for diferente.

Lembre-se de seguir todas as instruções com atenção e certifique-se de que cada etapa seja concluída com sucesso antes de passar para a próxima. Se você encontrar algum erro, ele precisará ser resolvido antes que você possa continuar.

:::tip
Durante o processo de gravação do firmware do Matter, você pode se deparar com uma situação em que não tem permissões; nesse momento, você pode usar o seguinte comando para conceder permissões às portas do dispositivo e reenviar o programa. Quando o dispositivo é conectado ou reiniciado, as permissões podem precisar ser concedidas novamente.

```
sudo chmod 666 /dev/ttyACM0       # Grant permissions to the USB device file
```

Substitua `/dev/ttyACM0` pelo arquivo de dispositivo USB real que corresponde ao seu XIAO ESP32, se for diferente.
:::

Então, parabéns; se você gravou o firmware com sucesso, verá o log de depuração sendo exibido no terminal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/3.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, vamos aprender como usar o comando matter e o chip-tool para configurar o dispositivo Matter a fim de concluir a depuração e verificação do dispositivo Matter.

## Controle pelo host e comissionamento do equipamento

Definimos Channel for `console oputput to USB Serial` em `menuconfig`; o objetivo é podermos usar a interface USB para controlar o XIAO, configurá-lo para entrar na rede ou realizar outras depurações. Esta etapa é crucial e determina se podemos ou não usar a ferramenta serial para enviar comandos ao dispositivo.

Estes são comandos que são conectados via cabo para controlar diretamente um dispositivo, geralmente começando com `matter`.

### Comandos comuns

- Comandos BLE: iniciar e parar a publicidade BLE:

 ```
 matter ble [start|stop|state]
 ```

- Comandos Wi-Fi: definir e obter o modo Wi-Fi:

 ```
 matter wifi mode [disable|ap|sta]
 ```

- Configuração do dispositivo: exibir a configuração estática do dispositivo:

 ```
 matter config
 ```

- Restauração de fábrica:

 ```
 matter device factoryreset
 ```

- Códigos de onboarding: exibir os payloads de código de pareamento de onboarding:

 ```
 matter onboardingcodes
 ```

- Obter atributo: (os IDs estão em hexadecimal):

 ```
 matter esp attribute get <endpoint_id> <cluster_id> <attribute_id>
 ```

  - Exemplo: on_off::on_off:

  ```
  matter esp attribute get 0x1 0x6 0x0
  ```

- Definir atributo: (os IDs estão em hexadecimal):

 ```
 matter esp attribute set <endpoint_id> <cluster_id> <attribute_id> <attribute value>
 ```

  - Exemplo: on_off::on_off:

  ```
  matter esp attribute set 0x1 0x6 0x0 1
  ```

- Diagnósticos:

 ```
 matter esp diagnostics mem-dump
 ```

- Wi-Fi

 ```
 matter esp wifi connect <ssid> <password>
 ```

### Uso

#### Etapa 1. Instalar o Minicom

Minicom é um programa de controle de modem e emulação de terminal baseado em texto para sistemas operacionais tipo Unix. Ao instalar o Minicom, podemos enviar facilmente comandos de controle Matter para o XIAO. Para instalar o Minicom no Ubuntu, abra um terminal e digite o seguinte comando:

```bash
sudo apt update
sudo apt install minicom
```

Este comando atualiza a lista de pacotes e instala o Minicom.

#### Etapa 2. Configurar permissões de usuário

Para permitir que usuários não root acessem portas seriais como `ttyACM0`, você precisa adicionar seu usuário ao grupo `dialout`. Você pode fazer isso com o seguinte comando:

```bash
sudo usermod -a -G dialout $USER
```

Substitua `$USER` pelo seu nome de usuário ou omita-o para aplicar ao usuário atualmente logado. Após executar este comando, você **deve sair e entrar novamente** para que a alteração de grupo tenha efeito.

#### Etapa 3. Configurar o Minicom

Agora você precisa configurar o Minicom para usar a porta `ttyACM0`. Execute o Minicom no modo de configuração com o seguinte comando:

```bash
sudo minicom -s
```

No menu de configuração, siga estes passos:

1. Selecione **Serial port setup**.
2. Pressione 'A' para alterar o Serial Device para `/dev/ttyACM0`.
3. Ajuste outras configurações conforme necessário. As configurações padrão geralmente são 9600 8N1 (9600 Baud, sem paridade, 8 bits de dados, 1 bit de parada). Só precisamos alterar a taxa de baud para **115200**.
4. Pressione 'Enter' para sair desta tela.

#### Etapa 4. Salvar configuração

Depois de configurar a porta serial:

1. Selecione **Save setup as dfl** para tornar essa a configuração padrão.
2. Saia da configuração do Minicom selecionando **Exit from Minicom**.

#### Etapa 5: Executar o Minicom

Para iniciar o Minicom com as configurações padrão, basta digitar:

```bash
minicom
```

Se você precisar executá-lo com privilégios de sudo (por exemplo, se encontrar problemas de permissão), pode usar:

```bash
sudo minicom
```

Para sair do Minicom, pressione `Ctrl-A` e depois pressione `Z` para abrir o menu de ajuda, e então pressione `X` para sair do programa.

#### Etapa 6. Configurando a rede de distribuição do XIAO

Use o comando a seguir para conectar o XIAO à sua rede. Ao selecionar uma rede, você pode optar pela conexão de rede de 2,4G.

:::tip
No tutorial, todas as placas da série XIAO suportam apenas WiFi 2,4G, exceto o XIAO ESP32-C5, que suporta WiFi dual-band 2,4G e 5G.
:::

```
matter esp wifi connect <ssid> <password>
```

Após o pareamento bem-sucedido, você pode usar os comandos a seguir para consultar informações muito importantes sobre o dispositivo Matter: **VendorID**, **ProductId**, **Discriminator** e **PinCode**. Essas informações ajudam você a parear dispositivos para uso ao depurar com a ferramenta Chip-tool.

```
matter config
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/8.png" style={{width:1000, height:'auto'}}/></div>

Por fim, use o comando a seguir para gerar os payloads do código de pareamento de onboarding.

```
matter onboardingcodes onnetwork
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/9.png" style={{width:1000, height:'auto'}}/></div>

A última coisa exibida aqui é o link para o código QR de pareamento do dispositivo. Com o código QR, você pode escaneá-lo no seu celular para vincular o dispositivo Matter exatamente como nas etapas de [Getting Started](https://wiki.seeedstudio.com/pt-br/getting_started_with_matter/#step-2-add-a-device-by-scanning-the-code-using-the-iphone-home-app).

## Depuração remota de dispositivos Matter usando Chip-tool

Dispositivos Matter são uma parte importante da casa inteligente, e não é prático usar cabos de dados o tempo todo para depuração e configuração. Entre as ferramentas de depuração Matter, a mais utilizada é o Chip-tool, que nos ajuda a depurar nossos dispositivos remotamente quando eles estão conectados.

Os comandos do Chip-tool geralmente exigem um script Chip-tool, portanto, normalmente começam com `chip-tool`.

### Fazer o pareamento de um dispositivo via IP

O comando abaixo irá descobrir dispositivos e tentar fazer o pareamento com o primeiro que encontrar usando o código de configuração fornecido:

```
chip-tool pairing onnetwork ${NODE_ID_TO_ASSIGN} 20202021
```

O comando abaixo irá descobrir dispositivos com o discriminador longo 3840 e tentar fazer o pareamento com o primeiro que encontrar usando o código de configuração fornecido:

```
chip-tool pairing onnetwork-long ${NODE_ID_TO_ASSIGN} 20202021 3840
```

O comando abaixo irá descobrir dispositivos com base no código QR fornecido (que os dispositivos registram quando são iniciados) e tentar fazer o pareamento com o primeiro que encontrar.

```
chip-tool pairing code ${NODE_ID_TO_ASSIGN} MT:#######
```

Em todos esses casos, será atribuído ao dispositivo o node id `${NODE_ID_TO_ASSIGN}` (que deve ser um número decimal ou um número hexadecimal com prefixo 0x).

### Esquecer o dispositivo atualmente comissionado

```
chip-tool pairing unpair
```

### Usar o Client para enviar comandos Matter

Para usar o Client para enviar comandos Matter, execute o executável compilado e passe para ele o nome do cluster de destino, o nome do comando de destino, bem como um endpoint id.

O endpoint id deve estar entre 1 e 240.

```
chip-tool onoff on 1
```

O client enviará um único pacote de comando e então será encerrado.

### Uso

Quando você estiver pronto para depurar com o Chip-tool, pode desconectar o XIAO do computador e conectá-lo a uma fonte de alimentação.

Como primeiro passo, precisamos parear o dispositivo, o que pode ser feito usando qualquer um dos métodos na seção [Fazer o pareamento de um dispositivo via IP](#Fazer-o-pareamento-de-um-dispositivo-via-IP) acima.

Por exemplo, eu uso o comando a seguir.

```
chip-tool pairing onnetwork-long 0x12 20202021 3840
```

Neste caso, será atribuído ao dispositivo o node id `0x12` (que deve ser um número decimal ou um número hexadecimal com prefixo 0x). 20202021 é o PinCode e 3840 é o Discriminator.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/5.png" style={{width:1000, height:'auto'}}/></div>

Por fim, verifique se você consegue controlar o acendimento e o desligamento das luzes com o comando a seguir.

Ligar a luz:

```
chip-tool onoff on 0x12 0x1
```

Desligar a luz:

```
chip-tool onoff off 0x12 0x1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/6.png" style={{width:1000, height:'auto'}}/></div>

0x12 é o node ID atribuído ao dispositivo quando fazemos o pareamento.

Parabéns a todos, com as etapas do tutorial realizadas aqui, acredito que você tenha um entendimento preliminar dos passos gerais do framework de desenvolvimento do ESP-Matter e do uso das ferramentas de depuração. Se ainda houver algo que você não entenda ou com o qual não esteja familiarizado, continuaremos a usar e orientar você nos tutoriais seguintes, portanto, fique atento!

## Solução de problemas

### P1: Por que obtenho vários tipos de erros durante a instalação do ambiente?

O ambiente do ESP-Matter é um pouco mais exigente e, se você estiver usando um host Ubuntu que é frequentemente usado para desenvolvimento, é provável que ocorram erros devido a diferentes versões de algumas dependências do Python. Como o framework Matter não é desenvolvido pela Seeed, provavelmente não podemos fazer muita coisa em relação a essa parte do problema, portanto recomendamos que você envie uma issue para o **[repositório oficial do ESP-Matter](https://github.com/espressif/esp-matter)** para obter ajuda se encontrar problemas com a instalação.

### P2: Falha ao resolver o componente

Após a atualização da v4.x para a v5.0+, muitos módulos funcionais (como mqtt, json, esp_https_server, etc.) foram removidos do framework principal e convertidos em componentes independentes. Consequentemente, erros de falta de dependência de componentes podem ocorrer durante a compilação. Você pode adicionar os componentes ausentes de acordo com as mensagens de erro.<br/>
Referência: [The ESP Component Registry](https://components.espressif.com/)

### P3: Como desinstalo o ambiente do Matter?

Se você estiver executando o script `./install.sh` e ficar preso na etapa de configuração do ambiente Python, então talvez precise verificar se a sua [versão](#prepare-the-software) do Matter corresponde à versão do connectedhomeip.

A maneira simples de redefini-lo é executar o comando a seguir.

```
rm -r connectedhomeip/connectedhomeip/.environment
```

Em seguida, faça novamente o pull da versão apropriada do branch connectedhomeip.

```
git submodule update --init --depth 1
```

Se ainda assim não funcionar, exclua toda a pasta esp-matter e execute tudo novamente seguindo o conteúdo da Wiki.

## Recursos

- **[ESPRESSIF Matter - Developing with the SDK](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#)**

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
