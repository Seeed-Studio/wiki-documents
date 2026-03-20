---
title: Ferramenta de Teste de Throughput Wi-Fi Seeed Studio XIAO ESP32-C5
description: ''
keywords:
  - xiao
  - esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xaio_esp32c5_wifi_throughput_tester
last_update:
  date: 1/16/2026
  author: Zeller
createdAt: '2026-01-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xaio_esp32c5_wifi_throughput_tester/
---


O Seeed Studio XIAO ESP32-C5 utiliza o ESP32-C5 como processador principal. O ESP32-C5 é o primeiro microcontrolador RISC-V da indústria a suportar Wi-Fi 6 (802.11ax) dual-band nas bandas de 2,4GHz e 5GHz. Com desempenho sem fio excepcional, ele possui grande potencial para aplicações em casas inteligentes, Internet das Coisas (IoT) e diversos outros cenários.

No uso prático, o throughput real de dados do Wi-Fi é uma das métricas mais importantes para medir a capacidade de transmissão.
Em seguida, usaremos uma ferramenta de teste de throughput Wi-Fi para demonstrar visualmente o poderoso throughput de dados do XIAO ESP32-C5 baseado em Wi-Fi 6, tanto na banda de 2,4GHz quanto na de 5GHz!

Este wiki será desenvolvido usando o [ESP-IDF](https://github.com/espressif/esp-idf).

*Referência*: [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32c5/index.html)

## Preparação de Hardware

Você precisará preparar uma placa XIAO ESP32-C5.

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Instalação da Antena

Dentro da embalagem do Seeed Studio XIAO ESP32-C5, há um conector dedicado de **Antena Wi-Fi/BT**. Para obter a melhor intensidade de sinal WiFi/Bluetooth, você precisa retirar a antena incluída no pacote e conectá-la ao conector.<br/>
:::tip
Se você deseja obter um efeito de ganho de sinal ainda mais forte, pode adquirir e instalar uma **Antena Externa 2.4G/5G com Conector RP-SMA Macho** — ela oferece um ganho muito maior do que a antena FPC interna incluída no pacote!
:::
<div class="table-center">
 <table>
  <tr>
   <th>Antena Externa 2.4G/5G com Conector RP-SMA Macho</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Preparação de Software

### Instalar o ESP-IDF

:::tip
Este wiki é desenvolvido em um ambiente de desenvolvimento Windows. Para operações ESP-IDF em Linux / Mac, consulte [Developed on XIAO using Espressif ESP-IDF](https://wiki.seeedstudio.com/pt-br/xiao_idf/)
:::

**Para Windows**

**Passo 1.** Clique em [ESP32-IDF Tools Installer](https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32c5/get-started/windows-setup.html#esp-idf-tools-installer)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_1.png" style={{width:800, height:'auto'}}/></div><br/>

**Passo 2.** Escolha uma versão apropriada para download.

:::tip
O XIAO ESP32-C5 requer ESP-IDF v5.5 ou posterior.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_2.png" style={{width:800, height:'auto'}}/></div><br/>

**Passo 3.** Instalar

1. Nos arquivos baixados, localize `esp-idf-tools-setup-offline-5.5.2.exe` e clique duas vezes para iniciar a instalação. Selecione o idioma de instalação de sua preferência

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_3.png" style={{width:800, height:'auto'}}/></div><br/>

2. Selecione I accept the agreement e clique em Next.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_4.png" style={{width:800, height:'auto'}}/></div><br/>

3. Clique em Next.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_5.png" style={{width:800, height:'auto'}}/></div><br/>

4. Escolha o caminho de instalação. A instalação requer uma quantidade significativa de espaço de armazenamento, portanto selecione um local adequado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_6.png" style={{width:800, height:'auto'}}/></div><br/>

5. Mantenha as configurações padrão; não é necessário fazer alterações.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_7.png" style={{width:800, height:'auto'}}/></div><br/>

6. Clique em Install e aguarde a conclusão da instalação. Isso pode levar algum tempo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_8.png" style={{width:800, height:'auto'}}/></div><br/>

7. Após a conclusão da instalação, os dois atalhos a seguir serão exibidos na área de trabalho do Windows.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_9.png" style={{width:400, height:'auto'}}/></div><br/>

**Para Linux(Ubuntu/Debian) & macOS**

**Passo 1.** Instalar dependências

```bash
# Linux
sudo apt update && sudo apt install \
    git wget flex bison gperf python3 python3-pip python3-venv \
    cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

```bash
#macOS
brew install git wget cmake ninja dfu-util ccache python3
pip3 install pyserial
```

**Passo 2.** Clonar a versão especificada do repositório.

```bash
mkdir -p ~/esp
cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git -b v5.5.1 esp-idf-v5.5.1
```

**Passo 3.** Instalar a toolchain

```bash
cd ~/esp/esp-idf-v5.5.1
./install.sh esp32c5
```

**Passo 4.** Adicionar variáveis de ambiente

```bash
. $HOME/esp/esp-idf-v5.5.1/export.sh
```

### Instalar o iperf

**Para Windows**

**Passo 1.** Clique em [iperf](https://sourceforge.net/projects/iperf2/), depois faça o download

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n1.png" style={{width:800, height:'auto'}}/></div><br/>

**Passo 2.** Coloque-o em uma pasta adequada, depois clique com o botão direito e abra um terminal ali. Esta etapa será usada mais tarde.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n2.png" style={{width:800, height:'auto'}}/></div><br/>

**Para Linux(Ubuntu/Debian) & macOS**

```bash
# Ubuntu/Debian
sudo apt install iperf

# macOS
brew install iperf
```

### Clonar o projeto de teste.

- Clone o projeto de teste na pasta de sua escolha.

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32C5_iperf_test" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
    </div><br />

```bash
git clone https://github.com/limengdu/XIAO-ESP32C5_iperf_test.git
```

**Para Windows**

**Passo 1.** Clique em `ESP-IDF 5.5 PowerShell` na área de trabalho; uma verificação de ambiente será então executada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n3.png" style={{width:800, height:'auto'}}/></div>

**Passo 2.** Abra o projeto de teste clonado

```bash
cd C:\User\yourname\XIAO-ESP32C5_iperf_test
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n4.png" style={{width:800, height:'auto'}}/></div>

**Passo 3.** Defina o chip de destino como `esp32c5`

```bash
idf.py --preview set-target esp32c5
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n5_1.png" style={{width:800, height:'auto'}}/></div>

**Passo 4.** Compile o projeto

```bash
idf.py build
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n5.png" style={{width:800, height:'auto'}}/></div>

Compilação concluída

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n6.png" style={{width:800, height:'auto'}}/></div>

**Passo 5.** Grave o código no XIAO ESP32-C5 e abra o monitor serial

Você pode optar por fazer o flash usando `idf.py flash`; a ferramenta de gravação do IDF detectará automaticamente sua porta para gravação, e também especificar a porta usando `idf.py -p PORT flash`. No Windows, você pode abrir o Gerenciador de Dispositivos para verificar a porta.

```bash
 idf.py flash monitor
or
 idf.py -p PORT flash monitor
or
```

Especifique a porta para gravação (o número de porta específico depende da porta do seu dispositivo.)

```bash
idf.py -p COM69 flash monitor
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n7.png" style={{width:800, height:'auto'}}/></div><br/>

Após o flash ser concluído com sucesso, o terminal exibirá o prompt **`iperf>`**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n8.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
Se o prompt `iperf>` não aparecer, desligue a alimentação do XIAO ESP32-C5 e, em seguida, pressione o botão Reset onboard para despertá‑lo e reconectá‑lo.
:::

**Para Linux(Ubuntu/Debian) & macOS**

```bash
# Navigate to the project directory
cd esp32c5_iperf_test

# Set the target chip
idf.py --preview set-target esp32c5

# Compile the project
idf.py build

# Flash the firmware and open the serial monitor
idf.py flash monitor
```

## Teste de taxa de transferência de dados Wi‑Fi

Vamos testar a taxa de transferência de dados Wi‑Fi do XIAO ESP32-C5 nas bandas de 2,4 GHz e 5 GHz usando os protocolos TCP e UDP.

Por que precisamos testar tanto TCP quanto UDP?<br/>
Ao avaliar o desempenho de RF Wi‑Fi do XIAO ESP32-C5, TCP e UDP fornecem duas perspectivas completamente diferentes:

- **Teste TCP (Mede a Experiência da Aplicação):** TCP é um protocolo orientado à conexão e confiável, que inclui mecanismos de handshake, retransmissão e controle de congestionamento.  
  - **Objetivo:** Simula aplicações do mundo real com requisitos rigorosos de integridade de dados, como navegação na web, atualizações OTA e controle MQTT. Reflete a capacidade geral do chip de lidar com pilhas de protocolo complexas garantindo perda zero de dados (ou seja, **estabilidade**).

- **Teste UDP (Mede os Limites de Hardware):** UDP é um protocolo sem conexão que se concentra apenas no envio de dados sem garantir a entrega.  
  - **Objetivo:** Remove a sobrecarga de confirmação na camada de protocolo para maximizar os limites de largura de banda física do rádio Wi‑Fi. Comumente usado para testes de streaming de áudio/vídeo, revela o máximo potencial de taxa de transferência "limpa" do chip nas bandas de 2,4GHz e 5GHz (ou seja, **velocidade**).

### Verificar o Endereço IP

Verifique o endereço IP da rede à qual seu computador está conectado, pois ele será usado nas etapas subsequentes.

```bash
# macOS/Linux
ifconfig | grep "inet " | grep -v 127.0.0.1

# Windows
ipconfig
```

### Teste de taxa de transferência na banda de 2,4GHz

Medição real da taxa de transferência de dados Wi‑Fi do XIAO ESP32-C5 na banda de 2,4GHz.

- Conecte o XIAO ESP32-C5 a uma rede WiFi de 2,4G

```bash
sta <Your WiFi Name> <Your WiFi Password>
```

O terminal então imprimirá as informações da conexão Wi‑Fi. Você precisa anotar o endereço IP do XIAO ESP32-C5.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x1_1.png" style={{width:800, height:'auto'}}/></div>

#### Teste de taxa de transferência TCP

:::tip
Certifique‑se de que seu computador e o XIAO ESP32-C5 estejam conectados à mesma rede ou roteador WiFi.
:::

1. Teste de Download (XIAO ESP32-C5 Recebendo Dados)

    1.1. **Execute o comando no lado do XIAO ESP32-C5**

      ```bash
      iperf -s -i 1
      ```

    1.2. **Execute o comando no lado do PC**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -i 1 -t 60
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -c <IP address of ESP32> -i 1 -t 60
      ```

- Resultados do Teste

Pelos resultados do teste, podemos ver que a velocidade média de download TCP do XIAO ESP32-C5 em WiFi de 2,4G é de 15 Mbps

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x2.png" style={{width:800, height:'auto'}}/></div>

2. Teste (XIAO ESP32-C5 Enviando Dados)

    2.1 **Execute o comando no lado do XIAO ESP32-C5**

      ```bash
      iperf -c <IP address of PC> -i 1 -t 60
      ```

    2.2 **Execute o comando no lado do PC**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -i 1
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -s -i 1
      ```

- Resultados do Teste

Pelos resultados do teste, podemos ver que a velocidade média de upload TCP do XIAO ESP32-C5 em WiFi de 2,4G é de 17 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x3.png" style={{width:800, height:'auto'}}/></div>

#### Teste de taxa de transferência UDP

:::tip
Certifique‑se de que seu computador e o XIAO ESP32-C5 estejam conectados à mesma rede ou roteador WiFi.
:::

1. Teste de Download (XIAO ESP32-C5 Recebendo Dados)

    1.1. **Execute o comando no lado do XIAO ESP32-C5**

      ```bash
      iperf -s -u -i 1
      ```

    1.2. **Execute o comando no lado do PC**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

- Resultados do Teste

Pelos resultados do teste, podemos ver que a velocidade média de download UDP do XIAO ESP32-C5 em WiFi de 2,4G é de 18 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x4.png" style={{width:800, height:'auto'}}/></div>

2. Teste (XIAO ESP32-C5 Enviando Dados)

    2.1 **Execute o comando no lado do XIAO ESP32-C5**

      ```bash
      iperf -c <IP address of PC> -u -b 100M -i 1 -t 60
      ```

    2.2 **Execute o comando no lado do PC**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -u -i 1
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -s -u -i 1
      ```

- Resultados do Teste

Pelos resultados do teste, podemos ver que a velocidade média de upload UDP do XIAO ESP32-C5 em WiFi de 2,4G é de 27 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x5.png" style={{width:800, height:'auto'}}/></div>

:::tip
Os resultados de teste acima são apenas para referência. Por favor, consulte as condições reais.
:::

### Teste de taxa de transferência na banda de 5GHz

Medição real da taxa de transferência de dados Wi‑Fi do XIAO ESP32-C5 na banda de 5GHz.

- Conecte o XIAO ESP32-C5 a uma rede WiFi de 5G

```bash
sta <Your WiFi Name> <Your WiFi Password>
```

O terminal então imprimirá as informações da conexão Wi‑Fi. Você precisa anotar o endereço IP do XIAO ESP32-C5.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x1_1.png" style={{width:800, height:'auto'}}/></div>

#### Teste de taxa de transferência TCP

:::tip
Certifique‑se de que seu computador e o XIAO ESP32-C5 estejam conectados à mesma rede ou roteador WiFi.
:::

1. Teste de Download (XIAO ESP32-C5 Recebendo Dados)

    1.1. **Execute o comando no lado do XIAO ESP32-C5**

      ```bash
      iperf -s -i 1
      ```

    1.2. **Execute o comando no lado do PC**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -i 1 -t 60
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -c <IP address of ESP32> -i 1 -t 60
      ```

- Resultados do Teste

Pelos resultados do teste, podemos ver que a velocidade média de download UDP do XIAO ESP32-C5 em WiFi de 5G é de 27 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x6.png" style={{width:800, height:'auto'}}/></div>

2. Teste (XIAO ESP32-C5 Enviando Dados)

    2.1 **Execute o comando no lado do XIAO ESP32-C5**

      ```bash
      iperf -c <IP address of PC> -i 1 -t 60
      ```

    2.2 **Execute o comando no lado do PC**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -i 1
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -s -i 1
      ```

- Resultados do Teste

Pelos resultados do teste, podemos ver que a velocidade média de upload UDP do XIAO ESP32-C5 em WiFi de 5G é de 29 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x7.png" style={{width:800, height:'auto'}}/></div>

#### Teste de taxa de transferência UDP

:::tip
Certifique‑se de que seu computador e o XIAO ESP32-C5 estejam conectados à mesma rede ou roteador WiFi.
:::

1. Teste de Download (XIAO ESP32-C5 Recebendo Dados)

    1.1. **Execute o comando no lado do XIAO ESP32-C5**

      ```bash
      iperf -s -u -i 1
      ```

    1.2. **Execute o comando no lado do PC**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

- Resultados do Teste

Pelos resultados do teste, podemos ver que a velocidade média de upload TCP do XIAO ESP32-C5 em WiFi de 5G é de 50 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x8.png" style={{width:800, height:'auto'}}/></div>

2. Teste (XIAO ESP32-C5 Enviando Dados)

    2.1 **Execute o comando no lado do XIAO ESP32-C5**

      ```bash
      iperf -c <IP address of PC> -u -b 100M -i 1 -t 60
      ```

    2.2 **Execute o comando no lado do PC**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -u -i 1
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -s -u -i 1
      ```

- Resultados do Teste

Pelos resultados do teste, podemos ver que a velocidade média de upload TCP do XIAO ESP32-C5 em WiFi de 5G é de 50 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x9.png" style={{width:800, height:'auto'}}/></div>

## Conclusão

Os resultados dos testes mostram que o XIAO ESP32-C5 apresenta excelente desempenho de transmissão de dados em ambientes Wi‑Fi 6 de banda dupla 2,4 GHz e 5 GHz, tornando‑o ideal para aplicações sem fio de alta largura de banda e baixa latência.

Além disso, os métodos de teste deste tutorial são aplicáveis a todas as placas de desenvolvimento da série XIAO ESP. Você pode realizar a mesma avaliação de desempenho em outras placas simplesmente consultando as diretrizes deste Wiki e ajustando o chip de destino durante a compilação. Esperamos que você explore seu potencial e compartilhe suas descobertas com a comunidade!

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
