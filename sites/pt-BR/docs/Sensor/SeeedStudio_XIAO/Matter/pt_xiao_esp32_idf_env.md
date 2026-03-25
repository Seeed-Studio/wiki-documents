---
description: Introduz como instalar e configurar o ambiente IDF.
title: Desenvolvendo no XIAO usando Espressif ESP-IDF
keywords:
  - ESP-IDF
  - XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_idf
last_update:
  date: 05/09/2024
  author: Citric
createdAt: '2024-05-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_idf/
---

# Desenvolvendo no XIAO usando Espressif ESP-IDF

:::tip
Este artigo é o primeiro tutorial da série de desenvolvimento Matter com Seeed Studio XIAO ESP32. Se você quiser iniciar sua jornada de desenvolvimento de dispositivos Matter com a Série XIAO ESP32, comece por aqui.

Este tutorial se aplica ao XIAO ESP32C3, XIAO ESP32S3 e XIAO ESP32C6.
:::

No mundo do desenvolvimento de IoT, o ESP-IDF (Espressif IoT Development Framework) ganhou popularidade significativa devido aos seus recursos poderosos e amplo suporte para microcontroladores da série ESP32. Com o surgimento do protocolo Matter, que visa fornecer um padrão unificado para dispositivos de casa inteligente, desenvolvedores estão ansiosos para explorar essa nova fronteira. Porém, o desenvolvimento com Matter atualmente não oferece suporte ao framework Arduino, deixando o ESP-IDF como a principal escolha para desenvolvimento. Neste tutorial, vamos guiá-lo pelo processo de instalação do ESP-IDF em um sistema Ubuntu, permitindo que você inicie sua jornada de desenvolvimento Matter na Série XIAO ESP32.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/matter-sdk.png" style={{width:800, height:'auto'}}/></div>

## Baseado em Ubuntu 22.04

Quando se trata de desenvolvimento com Matter, a escolha do sistema operacional é uma consideração importante. Embora o Windows não forneça suporte nativo para desenvolvimento Matter, os desenvolvedores ainda podem usar o Windows Subsystem for Linux (WSL) para **[criar um ambiente compatível](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#windows-10)**. O **[WSL](https://learn.microsoft.com/en-us/windows/wsl/install)** permite executar uma distribuição Linux, como o Ubuntu, diretamente no Windows, fornecendo acesso às ferramentas e bibliotecas necessárias para o desenvolvimento com Matter.

Por outro lado, o macOS é uma escolha popular entre desenvolvedores devido à sua base Unix e às suas ferramentas de desenvolvimento abrangentes.

Em última análise, a escolha do sistema operacional depende das suas preferências pessoais e dos requisitos específicos do seu projeto Matter. O Ubuntu, por ser uma distribuição Linux, oferece uma experiência nativa e simplificada para o desenvolvimento com Matter. No entanto, se você se sente mais à vontade com Windows ou macOS, ainda pode configurar um ambiente de desenvolvimento adequado usando ferramentas como o WSL no Windows ou o terminal integrado no macOS.

:::caution
Não recomendamos desenvolver ESP-Matter no Windows, mesmo com WSL. O Windows não suporta expor portas COM para distribuições WSL. Você pode precisar alternar de terminal com frequência ou instalar o [usbipd-win](https://github.com/dorssel/usbipd-win) para problemas de porta, incluindo o uso de [chip-tool também é um ponto crítico](https://github.com/espressif/esp-matter/blob/main/docs/en/using_chip_tool.rst).
:::

**Em resumo, usaremos o Ubuntu para as próximas etapas de desenvolvimento e utilizaremos o Ubuntu 22.04 mais recente atualmente suportado pelo Matter**. Se você quiser usar um sistema operacional diferente do descrito neste artigo para o desenvolvimento com Matter, você pode consultar a documentação oficial da Lexin. Este artigo não irá repetir.

- **[ESPRESSIF IDF - Get Started](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html)**

## Preparar o Software

A seguir listarei a versão do sistema e a versão do ESP-IDF usadas neste artigo como referência. Esta é uma versão estável que foi testada para funcionar corretamente.

- **Host**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/).
- **ESP-IDF**: Tags [v5.2.1](https://github.com/espressif/esp-idf/tree/v5.2.1).
- **[Git](https://git-scm.com/)**
- **[Visual Studio Code](https://code.visualstudio.com/)**

## Preparar o Hardware

Nesta seção, detalharemos como configurar o uso do ESP-IDF no ambiente do Ubuntu e executar o exemplo de iluminação fornecido pelo ESP-IDF. Portanto, para este artigo, você só precisa preparar qualquer uma das seguintes placas da série XIAO ESP32.

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO ESP32C3</th>
   <th>XIAO ESP32S3</th>
            <th>XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::caution
O XIAO ESP32C3 não possui um LED on-board, portanto, se você estiver usando o XIAO ESP32C3, poderá precisar de um LED adicional.
:::

## Tutoriais em Vídeo

Como o framework de desenvolvimento ESP-IDF é voltado para desenvolvedores de software mais profissionais, o limiar para usá-lo é maior do que o do Arduino. Os documentos e informações relacionados serão menos do que para Arduino. Para permitir que os usuários do XIAO comecem a usar o ESP-IDF o mais rápido possível e reduzir a possibilidade de encontrar problemas na configuração do ambiente de desenvolvimento, apresentaremos a configuração do ambiente na forma de vídeo e gráficos. Esta seção é a parte em vídeo; se você quiser acompanhar o vídeo, pode consultar este vídeo para instalar e configurar o ambiente ESP-IDF e, por fim, acender os LEDs on-board do XIAO ESP32C6.

<div class="video-container">
<iframe width="900" height="450" src="https://www.youtube.com/embed/QdPmsGDd7zs?si=5r_OO2EwZMX8D_HM?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Instalando ESP-IDF Passo a Passo

Esta seção é a parte do tutorial gráfico da configuração do ambiente ESP-IDF.

### Passo 1. Instalar Pré-requisitos

Comece atualizando e atualizando seu sistema Ubuntu para garantir que você tenha os pacotes e dependências mais recentes. Abra um terminal e execute os seguintes comandos:

```
sudo apt update
sudo apt upgrade
```

Instale os pré-requisitos necessários para o ESP-IDF executando o comando a seguir; se você tiver certeza de que os pacotes abaixo já foram instalados, pode pular esta etapa, mas ainda recomendamos que execute este comando para verificar novamente.

```
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-venv cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

:::note
O CMake versão 3.16 ou mais recente é necessário para uso com o ESP-IDF. Execute "[tools/idf_tools.py](https://github.com/espressif/esp-idf/blob/v5.2.1/tools/idf_tools.py) install cmake" para instalar uma versão adequada se a versão do seu sistema operacional não tiver uma.
:::

### Passo 2. Instalando Python3

Normalmente, a versão completa do Ubuntu 22.04 LTS instala o Python 3.12 por padrão. Se você não tiver certeza, pode verificar da seguinte forma. Se não estiver instalado ou se você o tiver desinstalado, também pode reinstalá-lo conforme abaixo. Se você tem certeza de que possui o Python 3 instalado, pode pular esta etapa.

Verifique qual Python você tem atualmente:

```
python --version
```

Se a saída for algo como `Python 2.7.17`, seu interpretador padrão é `Python 2.7`. Nesse caso, verifique também se o Python 3 já não está instalado no seu computador:

```
python3 --version
```

Se o comando acima retornar um erro, significa que o Python 3 não está instalado.

Abaixo está uma visão geral das etapas para instalar o Python 3.

- A instalação com HomeBrew pode ser feita da seguinte forma:

    ```
    brew install python3
    ```

- Se você tiver MacPorts, pode executar:

    ```
    sudo port install python38
    ```

### Passo 3. Obter ESP-IDF

Para obter o ESP-IDF, navegue até o diretório de instalação e clone o repositório com `git clone`, seguindo as instruções abaixo específicas para o seu sistema operacional. Abra o Terminal e execute os seguintes comandos:

```
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.1 --recursive https://github.com/espressif/esp-idf.git
```

Ao executar o comando acima, o ESP-IDF será baixado para `~/esp/esp-idf`.

### Passo 4. Configurar as Ferramentas

Além do ESP-IDF, você também precisa instalar as ferramentas usadas pelo ESP-IDF, como compilador, depurador, pacotes Python, etc., para projetos que suportam ESP32.

```
cd esp-idf/
./install.sh
```

### Passo 5. Configurar Variáveis de Ambiente

As ferramentas instaladas ainda não foram adicionadas à variável de ambiente PATH. Para tornar as ferramentas utilizáveis a partir da linha de comando, algumas variáveis de ambiente precisam ser definidas. O ESP-IDF fornece outro script que faz isso.

No terminal em que você vai usar o ESP-IDF, execute:

```
source ./export.sh
cd ..
```

Neste ponto, todo o ambiente ESP-IDF já está configurado. Para verificar se o ESP-IDF foi instalado corretamente, execute o seguinte comando:

```
idf.py --version
```

Se a instalação for bem-sucedida, você deverá ver as informações de versão do ESP-IDF.

### Passo 6 (Opcional). Acesso rápido ao ambiente de desenvolvimento ESP-IDF

Conforme descrito nas etapas acima, toda vez que iniciamos o terminal ou reiniciamos o computador, precisamos importar as variáveis de ambiente do ESP-IDF no novo terminal, o que nos traz grande inconveniência, especialmente se precisarmos desenvolver ESP32 com frequência. Podemos modificar o arquivo de configuração do Shell pelos seguintes passos para iniciar o ambiente do ESP-IDF com o comando `get_idf`.

Abra o arquivo `.bashrc` digitando o seguinte comando no terminal.

```
nano ~/.bashrc
```

Adicione o seguinte ao final do arquivo `.bashrc`.

```
alias get_idf='. ~/esp/esp-idf/export.sh'
```

Atualize a configuração reiniciando a sessão do terminal ou executando `source [path to profile]`, por exemplo, `source ~/.bashrc`.

Agora você pode executar `get_idf` para configurar ou atualizar o ambiente esp-idf em qualquer sessão do terminal.

:::caution
Tecnicamente, você pode adicionar `export.sh` diretamente ao perfil do seu shell; no entanto, isso não é recomendado. Fazer isso ativa o ambiente virtual do IDF em todas as sessões do terminal (incluindo aquelas em que o IDF não é necessário), anulando o propósito do ambiente virtual e provavelmente afetando outros softwares.
:::

## Executando o Programa de Exemplo do LED

Para garantir que o seu ambiente ESP-IDF esteja configurado corretamente, vamos executar um simples programa de exemplo para LED.

### Etapa 1. Conecte o XIAO ESP32C6 ao PC

Agora conecte sua placa da série XIAO ESP32 ao computador e verifique em qual porta serial a placa está visível. Usaremos o XIAO ESP32C6 como exemplo.

As portas seriais têm os seguintes padrões de nomenclatura: `/dev/tty`. Em geral, o seu computador pode ter muitas portas que começam com `tty`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/11.png" style={{width:800, height:'auto'}}/></div>

Determinar as portas também é fácil, você pode usar o comando de consulta para ver quais portas estão presentes por padrão quando você não está conectado ao XIAO.

```
ls /dev/tty*
```

Em seguida, depois de conectar o XIAO ao computador e consultá-lo novamente, o nome da porta serial extra é o número da porta do XIAO.

Mantenha o nome da porta à mão, pois ele será necessário nas próximas etapas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/12.png" style={{width:800, height:'auto'}}/></div>

Como você pode ver acima, o número da porta do meu XIAO no meu computador deve ser **ttyACM0**.

### Etapa 2. Iniciar um Projeto

Navegue até o diretório de exemplos

```
cd ~/esp/esp-idf/examples/get-started/blink
```

Defina o dispositivo de destino.

```
idf.py set-target esp32c6
```

:::tip

- Se você estiver usando o **XIAO ESP32C3**, então o comando que você precisa usar é `idf.py set-target esp32c3`.
- Se você estiver usando o **XIAO ESP32S3**, então o comando que você precisa usar é `idf.py set-target esp32s3`.

:::

Como o principal efeito deste projeto de exemplo é fazer os LEDs on-board piscarem, precisamos configurar o GPIO onde os LEDs estão localizados e o tempo de piscada e outros parâmetros. O ESP-IDF fornece o comando menuconfig para definir alguns parâmetros ajustáveis do projeto.

```
idf.py menuconfig
```

Este comando abre um menu de configuração onde você pode modificar várias configurações.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/14.png" style={{width:800, height:'auto'}}/></div>

Tomando o projeto blink como exemplo, há três parâmetros que podem ser ajustados.

1. Tipo de LED blink: Define o tipo de LED a ser usado, neste caso definimos como **GPIO**.

2. Número do GPIO blink: O número do pino GPIO onde o LED está localizado é definido como **15** aqui. O LED do XIAO ESP32C6 está conectado ao GPIO15.

3. Período do blink em ms: O intervalo de tempo entre os flashes de luz. O padrão é **1000** milissegundos, ou 1 segundo.

Quando a configuração estiver concluída, pressione **q** para sair do menu de configuração e depois **y** para confirmar as alterações.

### Etapa 3. Compilar e Gravar o Exemplo

Compile o projeto executando:

```
idf.py build
```

Este comando compila o aplicativo e todos os componentes do ESP-IDF, depois gera o bootloader, a tabela de partições e os binários do aplicativo. Se não houver erros, a compilação termina gerando os arquivos binários de firmware .bin.

Para gravar na placa os binários que você acabou de gerar para o ESP32 na etapa anterior, você precisa executar o seguinte comando:

```
idf.py -p PORT flash
```

Substitua `PORT` pelo nome da porta USB da sua placa XIAO ESP32. Se a **PORT** não for definida, o `idf.py` tentará se conectar automaticamente usando as portas USB disponíveis. De acordo com o número da porta do dispositivo que consultamos na primeira etapa, para mim, eu deveria inserir o seguinte comando para gravar o programa.

```
idf.py -p /dev/ttyACM0 flash
```

Se não houver problemas ao final do processo de gravação, o XIAO irá reiniciar e iniciar o aplicativo "blink".

Para visualizar a saída do programa de exemplo do LED, execute o seguinte comando

```
idf.py monitor
```

Você deverá ver o LED no seu XIAO piscando, indicando que o programa de exemplo está sendo executado com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/13.png" style={{width:800, height:'auto'}}/></div>

Se você quiser sair do monitor serial, pode usar o atalho `Ctrl+]`.

:::tip
Aqui estão alguns comandos comumente usados no ambiente ESP-IDF:

- `idf.py menuconfig`: Abre o menu de configuração do projeto.
- `idf.py build`: Compila o projeto.
- `idf.py flash`: Grava o firmware compilado no dispositivo conectado.
- `idf.py monitor`: Inicia o monitor serial para visualizar a saída do dispositivo.
- `idf.py clean`: Limpa o diretório de compilação.
- `idf.py fullclean`: Executa uma limpeza completa, incluindo as dependências baixadas.
- `idf.py set-target`: Define o chip de destino para o projeto.
- `idf.py size`: Exibe as informações de tamanho do firmware compilado.
- `idf.py app`: Gerencia aplicativos no projeto.
- `idf.py component`: Gerencia componentes no projeto.

:::

Parabéns! Você instalou com sucesso o ESP-IDF no seu sistema Ubuntu, estabelecendo a base para sua jornada de desenvolvimento com Matter. A Seeed Studio continuará a aprimorar e expandir a documentação de desenvolvimento para a série XIAO ESP32 no contexto de Matter. Com a conclusão da configuração e instalação do ESP-IDF, você está agora pronto para prosseguir para a parte de desenvolvimento com Matter da sua jornada.

A Seeed Studio está comprometida em fornecer recursos abrangentes e suporte para facilitar sua experiência de desenvolvimento com Matter. Fique atento à próxima documentação e tutoriais específicos de Matter, voltados para a série XIAO ESP32. Esses recursos irão guiá-lo no processo de utilização do framework ESP-IDF para construir dispositivos de casa inteligente de ponta que seguem o protocolo Matter.

À medida que você se aprofunda no desenvolvimento com Matter, certifique-se de consultar a documentação oficial do ESP-IDF para obter informações detalhadas sobre os recursos do framework e as melhores práticas. Envolva-se com a vibrante comunidade de desenvolvedores e entusiastas para trocar conhecimento, buscar orientação e colaborar em projetos inovadores.

Com o poder do ESP-IDF e os próximos recursos de desenvolvimento Matter da Seeed Studio, você está bem equipado para criar soluções de casa inteligente notáveis que ultrapassam os limites da interoperabilidade e da experiência do usuário. Abrace as empolgantes possibilidades que o aguardam e embarque em sua jornada de desenvolvimento com Matter com confiança. Boa programação!

## Solução de Problemas

### Por que recebo todos os tipos de erros durante a instalação do ambiente?

O ambiente do ESP-IDF é um pouco mais exigente e, se você estiver usando um host Ubuntu que é frequentemente usado para desenvolvimento, é provável que ocorram erros devido a diferentes versões de algumas dependências do Python. Como o framework Matter não é desenvolvido pela Seeed, provavelmente não há muito que possamos fazer em relação a esta parte do problema, por isso recomendamos que você envie uma issue para o **[repositório oficial do ESP-IDF](https://github.com/espressif/esp-idf)** para obter ajuda se você encontrar problemas com a instalação.

## Recursos

- **[ESPRESSIF IDF - Get Started](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html)**

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
