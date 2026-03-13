---
description: Sensor mmWave de 60GHz - Fall Detection Pro
title: Sensor mmWave de 60GHz - Fall Detection Pro
keywords:
  - mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Radar_MR60FDA1
sku: 101990981
last_update:
  date: 03/03/2023
  author: Citric
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Radar_MR60FDA1/
---
# Sensor mmWave de 60GHz - Módulo de Detecção de Queda Pro (MR60FDA1)

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"  style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Fall-Detection-Module-Pro-p-5375.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O Sensor de Radar mmWave de 60GHz - Módulo de Detecção de Queda Pro aplica a teoria de detecção FMCW para implementar a detecção simultânea de atividades humanas, incluindo movimento, queda e estado estacionário com alta precisão, fornecendo um ambiente totalmente privado e seguro, independente de outras influências ruidosas. É um sistema padrão de radar biótico em vigilância de propriedade privada, alerta de queda, cuidado com a saúde de idosos, tendo bom desempenho em casa, hotéis e também hospitais. Neste wiki, vamos mostrar como utilizá‑lo.

### Aplicações

- Casa inteligente
- Cuidados com a saúde
- Detecção de quedas
- Hotel inteligente
- Assistentes médicos

### Características

- Teoria habilitada: implementa detecção por radar baseada em sinais de onda contínua FM de 60GHz
- Algoritmo de detecção aprimorado: detecta e fornece simultaneamente as atividades humanas, incluindo movimento, queda e estado estacionário em um ambiente de auto‑adaptação
- Proteção perfeita de privacidade: aplica tecnologia de monitoramento FMCW para fornecer capacidades de vigilância sem identificação
- Estado de funcionamento amigável à saúde: potência de saída baixa a ponto de ser inofensiva ao corpo humano
- Alta estabilidade: independente de temperatura, umidade, ruído, fluxo de ar, poeira, luz e outras influências ambientais
- Alta precisão de medição: atinge precisão de detecção de quedas de até 90% e precisão de função de percepção de presença de até 90%
- Design de hardware de radar com alta flexibilidade: suporta desenvolvimento secundário, adaptando‑se a vários cenários de aplicação

### Especificações

| Ângulo e distância de detecção      |  Mínimo |  Típico |  Máximo |  Unidade |
|-----------------------------------|----------|----------|----------|-------|
| **Conteúdo Mínimo Típico Máximo Unidades**  |          |          |          |       |
| Raio de detecção de movimento de pessoas [1] |       |     6     |         |  metro    |
|  Raio de monitoramento de queda [2] |          |   3    |          |  metro   |
|  Ângulo de detecção do radar (horizontal)   |          |  60      |          |  grau    |
|  Ângulo de detecção do radar (inclinação)                     |         |    60      |        |  grau    |
|  Observação: [1][2] Altura de instalação do radar 2,8 m, raio de projeção do radar.             |          |          |
|  **Características elétricas**             |          |          |          |       |
|  Tensão de operação (VCC)          |  4.5     |  5       |  6       |  V    |
|  Corrente de operação (ICC)          |   90       |  93     |  100        |  mA   |
|  Temperatura de operação (TOP)      |  -20     |          |  60      |  ℃    |
|  Temperatura de armazenamento (TST)        |  -40     |          |  80      |  ℃    |
|  **Desempenho de RF**                |          |          |          |       |
|  Frequência de operação (fTX)        |  58      |        |  63.5    |  GHz  |
|  Potência transmitida (Pout)         |          |         |     6     |  dBm  |

## Visão Geral de Hardware

Antes de qualquer coisa, é bastante essencial conhecer alguns parâmetros básicos do produto. A tabela a seguir fornece informações sobre as características do Sensor mmWave de 60GHz - Módulo de Detecção de Queda Pro.

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/60GHzradar/pinout3.png"/></div>

- Interface 1:
  - O pino 5V é a interface de alimentação para o sensor.
  - RX e TX são as interfaces de transmissão de dados do sensor. RX significa recepção serial e TX significa transmissão serial.
  - A interface de saída do status de presença humana. Você pode usar o nível desses dois pinos para determinar o movimento humano atual no ambiente.
    - Saída GP2: nível alto - ocupado, nível baixo - desocupado.
    - Saída GP1: nível alto - ativo, nível baixo - estacionário.
- Interface 2:
  - Pinagem para gravação de firmware: GND/3.3V/SWD/SWC.
  - Pinos de entrada/saída reservados: GP3~GP6.

## Primeiros Passos

### Atualizações de Versão de Firmware

O sensor mmWave passou por um longo período de precipitação técnica e de valiosas sugestões fornecidas pelos usuários, e temos iterado sobre o produto original para oferecer resultados de monitoramento mais precisos e confiáveis e uma melhor experiência para nossos usuários.

Os sensores recém‑enviados vêm com o firmware mais recente por padrão para garantir a experiência mais atual do produto. No entanto, para o bem da experiência dos antigos usuários, fornecemos aqui o firmware mais recente e o método de atualização para garantir que você possa usar nossa tecnologia mais recente.

#### Método universal - usar J-link para gravar o firmware

Se você encontrar firmware incorreto ou anomalia do radar, mau funcionamento do firmware, etc., usar este método para regravar o firmware é a forma mais eficaz.

**Download do firmware mais recente**

| Versão do Firmware | Endereço de Download |
|:----------------:|:----------------:|
| Jlink_MR60FDA1-V0821.bin | [Download](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-230821.bin) |
| Jlink_MR60FDA1-V0728.bin | [Download](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-V0728.bin) |
| Jlink_MR60FDA1-V114.bin | [Download](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-V114.bin) |

:::caution

1. Verifique cuidadosamente a função do seu produto, não misture com outros sensores mmWave para gravar este firmware, caso contrário, isso pode causar funcionamento anormal do produto, e as consequências serão de sua inteira responsabilidade!

2. Observe também que diferentes maneiras de atualizar o firmware utilizam conteúdos de firmware diferentes; o que você está baixando é o firmware gravado via **J-link**.

:::

**Para atualizar seu radar para a versão mais recente**

**Passo 1.** Você precisará de um **Jlink** e de um Sensor mmWave de 60GHz **MR60FDA1**.

Conecte o radar e o Jlink juntos via fio Dupont conforme mostrado na figura abaixo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/57.jpg"/></div>

**Passo 2.** Baixe o software e o firmware necessários.

| Arquivo | Endereço de Download |
|:----------------:|:----------------:|
| JlinkV644e.rar | [Download](https://files.seeedstudio.com/wiki/60GHzradar/JlinkV644e.rar) |
| Pack_Segger_AT32F4xx_v1.3.3.zip | [Download](https://files.seeedstudio.com/wiki/60GHzradar/Pack_Segger_AT32F4xx_v1.3.3.zip)

**Passo 3.** Descompacte **JlinkV644e.rar** e abra o arquivo **JLink_Windows_V644e.exe** dentro.

Basta seguir as opções padrão para instalar. Quando a instalação for concluída, inicie o software **J-Flash V6.44e**.

**Passo 4.** Instale o pacote do chip.

Descompacte **Pack_Segger_AT32F4xx_v1.3.3.zip** e abra **Segger_AT32F4xx_AddOn.exe** dentro.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/47.png"/></div>

**Passo 5.** Crie um novo projeto.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/48.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/49.png"/></div>

Encontre e escolha **AT32F403ARGT7**.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/50.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/51.png"/></div>

**Passo 6.** Arraste e solte o firmware do radar (arquivo .bin) neste software e uma janela irá aparecer; usaremos apenas seu endereço inicial padrão de 0x8000000.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/52.png"/></div>

**Passo 7.** Clique em **Target** -> **Connect**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/53.png"/></div>

Quando a conexão for bem‑sucedida será exibido Connected successfully.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/54.png"/></div>

Apagar firmware: **Target** -> **manual Programming** -> **Erase Chip**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/55.png"/></div>

Atualizar firmware: **Target** -> **manual Programming** -> **Program & Verify**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/56.png"/></div>

Neste ponto, a atualização do firmware está concluída.

#### Atualizar firmware via UART

Considerando que o J-link é caro, é muito extravagante comprar um J-link para a grande maioria dos usuários que só precisam atualizar o firmware do seu radar, portanto oferecemos um método de atualização via UART.

**Download do firmware mais recente**

| Versão do Firmware | Endereço de Download |
|:----------------:|:----------------:|
| UART_MR60FDA1-230821.bin | [Download](https://files.seeedstudio.com/wiki/60GHzradar/UART_MR60FDA1-230821.bin) |
| UART_MR60FDA1-230728.bin | [Download](https://files.seeedstudio.com/wiki/60GHzradar/UART_MR60FDA1-230728.bin) |
| UART_MR60FDA1-230227.bin | [Download](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60FDA1-230227.bin) |
| UART_MR60FDA1-230915.bin | [Download](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60FDA1-230915.bin) |

:::caution

1. Verifique cuidadosamente a função do seu produto, não misture com outros sensores mmWave para gravar este firmware, caso contrário, isso pode causar funcionamento anormal do produto, e as consequências serão de sua inteira responsabilidade!

2. Observe também que diferentes maneiras de atualizar o firmware utilizam conteúdos de firmware diferentes; o que você está baixando é o firmware gravado via **UART**.

3. Certifique‑se de que a versão do firmware do seu radar é **pelo menos a versão G60FD1SYv010102** antes de usar a UART para atualizar o firmware, caso contrário isso pode inutilizar o radar, e nesse momento você terá que usar o J-link para gravar o firmware para poder utilizá‑lo!

Você pode consultar as informações do número da versão do firmware enviando o comando `0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43` para o Radar. Os dados reportados pelo radar são então exibidos como uma string, e você verá um efeito semelhante ao mostrado abaixo.

`G60FD1SYv010104` é o número do modelo reportado no radar, onde `010104` é o número da versão. Isso significa que este sensor suporta atualização via UART.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/19.png"/></div>
:::

**Para atualizar seu radar para a versão mais recente**

**Passo 1**. Você precisará de um **UART to USB** e de um sensor **MR60FDA1** 60GHz mmWave.

Conecte o radar e o UART to USB juntos via fio Dupont como mostrado no diagrama abaixo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**Passo 2**. Baixe o software e o firmware necessários.

| Arquivo | Endereço de Download |
|:----------------:|:----------------:|
| PackageMake-v1.1.1.zip | [Download](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**Passo 3**. Descompacte o pacote PackageMake-v1.1.1.zip e abra o arquivo PackageMake-v1.1.1.exe dentro dele.

Conecte o UART to USB com o sensor conectado ao computador, clique no ícone de engrenagem no canto superior esquerdo do software, selecione o número da porta, defina o baud rate para 115200 e então clique no canto inferior direito para confirmar. (Se o número da porta não for encontrado, verifique a conexão e então clique no botão de atualizar no canto inferior esquerdo para tentar novamente)

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**Passo 4**. Conectando o sensor

Depois de terminar de configurar a porta serial conforme descrito acima, clique no segundo ícone no canto superior direito e você verá os dados brutos do radar sendo exibidos se a porta tiver sido selecionada corretamente.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**Passo 5**. Atualizar firmware

Clique no último ícone no canto superior direito com o botão esquerdo do mouse, isso abrirá uma janela para selecionar o firmware. Selecione a versão de firmware que você baixou.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

Após concluir a seleção, o caminho do arquivo selecionado aparecerá abaixo do software, por favor verifique novamente se a versão e o modelo de firmware selecionados são consistentes com o sensor que você está usando.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/14.png"/></div>

Para atualizar o firmware, clique duas vezes com o botão esquerdo do mouse na última imagem no canto superior esquerdo do software, então o firmware começará a ser baixado para o sensor.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/15.png"/></div>

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/16.png"/></div>

Espere a barra de progresso terminar e a atualização do firmware estará concluída.

### Uso do software de supervisão (upper computer)

Conecte o sensor diretamente à porta USB do computador por meio de um dispositivo **UART to USB**. A fiação é mostrada na tabela abaixo.

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr>
 <tr>
     <td align="center">UART to USB</td>
     <td align="center"></td>
        <td align="center">Sensor MR60FDA1</td>
 </tr>
 <tr>
     <td align="center">5V</td>
     <td align="center">--></td>
        <td align="center">5V</td>
 </tr>
 <tr>
     <td align="center">GND</td>
     <td align="center">--></td>
        <td align="center">GND</td>
 </tr>
  <tr>
     <td align="center">RX</td>
     <td align="center">--></td>
        <td align="center">TX</td>
 </tr>
  <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">RX</td>
 </tr>
</table>

Além do software serial mencionado acima, você também pode usar diretamente o [software de supervisão](https://files.seeedstudio.com/wiki/60GHzradar/Fall_detection_radar.zip) projetado para o radar.

As duas seções a seguir explicam o papel de cada parte do software.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/10.png"/></div>

- **Área de Trabalho**

    Todas as funções do software de supervisão são exibidas somente na área de trabalho. O conteúdo principal da exibição é concentrado na parte superior da área de trabalho.

    **Station:** Mostra se há alguém presente, em movimento ou parado.

    **Fall state:** O estado da queda será apresentado como uma animação do personagem. O estado na figura é sem queda e, se alguém cair, será exibida uma imagem animada de uma pessoa caindo.

    **Settings:** Usado para definir o número da porta em que o sensor está conectado ao PC. Geralmente, quando o sensor está conectado ao computador via UART to USB, você precisa clicar no botão **Refresh** para atualizar a porta, em seguida selecionar o novo número de porta que apareceu, depois clicar no botão **Open** e, por fim, clicar no botão **Start** para habilitar a função de monitoramento.

    **Installing height/cm:** Refere-se à altura de instalação. Para garantir a precisão da detecção de quedas, instale o sensor com precisão conforme a seguir. Por favor, instale-o na parte superior! O radar deve ser instalado verticalmente com um ângulo de desvio horizontal ≤5° para garantir que o feixe principal do radar cubra a área de detecção; a altura de instalação recomendada do radar é 2m≤H≤3m. Não deve haver obstruções óbvias nem coberturas na frente do radar. Afetado pela altura de instalação do radar e pelo alcance do feixe do radar, o raio máximo de detecção de pessoa em movimento neste modo de instalação é R3 ≈ 3 metros; o raio máximo de detecção de pessoa estacionária é R2 ≈ 2,25 metros; o raio de detecção de queda é R1 ≤ 2 metros.

    Por exemplo, se minha altura de instalação for 2,6 metros, então devo preencher 260 e clicar no botão **Send**.

- **Área Inválida**

    Esta área não funcionará no momento, mas apenas como uma interface reservada.

:::caution
Este radar atualmente não suporta alcance, velocidade ou nuvens de pontos!
:::

## Desenvolvimento do sensor com Arduino

### Visão geral da biblioteca Arduino

:::tip
Se esta é sua primeira vez usando Arduino, recomendamos fortemente que consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

O código da biblioteca usado neste exemplo pode ser baixado clicando no ícone abaixo.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed-Studio-MR60FDA1-Sersor" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

### Função

Antes de começarmos a desenvolver um sketch, vamos analisar as funções disponíveis da biblioteca.

- `void recvRadarBytes()` —— Esta função coleta os quadros de dados reportados pelo Sensor via UART de acordo com os cabeçalhos e finais de quadro no protocolo de dados do Sensor. Usada em conjunto com a função `showData()`, as informações de dados coletadas podem ser impressas via porta serial.

  - **Parâmetros de entrada:** Nenhum

  - **Valor de retorno:** Nenhum

- `void showData()` —— Esta função serve para imprimir de uma vez o quadro de dados completo reportado pelo Sensor via porta serial e precisa ser usada em conjunto com a função `recvRadarBytes()`.

  - **Parâmetros de entrada:** Nenhum

  - **Valor de retorno:** Nenhum

- `void HumanExis_Func()` —— Esta função é responsável por analisar os quadros de dados do Sensor e fornecer os dados relevantes sobre o estado da presença humana.

  - **Parâmetros de entrada:** Nenhum

  - **Valor de retorno:**

    - `unsigned int sensor_report` —— O valor retornado indica a qual classe de status o quadro de dados analisado pertence. As categorias específicas podem ser encontradas na seção **Variáveis Padrão**. As informações de movimento humano são reportadas apenas quando ocorrem mudanças.

    - `int bodysign_val` —— O valor retornado representa o valor do Parâmetro de Movimento Humano. Este valor é reportado uma vez por segundo.

- `void Fall_Detection()` —— Esta função é usada para analisar e retornar a detecção de uma queda. A detecção é armazenada na variável sensor_report.

  - **Parâmetros de entrada:** Nenhum

  - **Valor de retorno:** - `unsigned int sensor_report` —— O valor retornado indica a qual classe de status o quadro de dados analisado pertence. As categorias específicas podem ser encontradas na seção **Variáveis Padrão**. As informações de queda são reportadas somente quando ocorrem mudanças.

- `void send_func(const unsigned char* buff, int len, bool cyclic /*=false*/)` —— A função é usada para enviar quadros de consulta e quadros de comando.

  - **Parâmetros de entrada:**

    - `buff` —— O quadro de dados que você deseja enviar ao Sensor.

    - `len` —— O comprimento do quadro de dados que você deseja enviar ao Sensor.

    - `cyclic` —— Interruptor de envio cíclico. O padrão é false, que pode ser definido como **true** se você desejar enviar este quadro de dados ciclicamente.

  - **Valor de retorno:** Nenhum

- `void reset_func()` —— A função serve para resetar o Sensor.

  - **Parâmetros de entrada:** Nenhum

  - **Valor de retorno:** Nenhum

### Variáveis Padrão

```c
#define MESSAGE_HEAD1 0x53      //Data frame header1
#define MESSAGE_HEAD2 0x59      //Data frame header2

#define MESSAGE_END1  0x54      //End1 of data frame
#define MESSAGE_END2  0x43      //End2 of data frame

#define HUMAN_PSE_RADAR 0x80    //Human presence data

#define PRESENCE_INF 0x01       //Presence Information
#define SOMEONE_HERE 0x01       //Someone here
#define NOONE_HERE 0x00         //Noone here

#define MOVE_INF 0x02           //Campaign Information
#define PSE_NONE 0x00           //None
#define STATIONARY 0x01         //A person is stationary
#define MOVEMENT 0x02           //A person in motion

#define BODY_SIG 0x03           //Body movement information

#define MOVE_DIS 0x0E           //Determine the distance at which the movement occurs

#define FALL_DETECTION 0x83     //Fall data markers

#define FALL_STATE 0x01         //Fall status marker
#define NO_FALL 0x00            //No falls detected
#define FALLING 0x01            //Fall detected

#define RESIDENT_STATE 0x05     //Resident status
#define NO_RESIDENT 0x00        //No stationary residency
#define RESIDENT 0x01           //There is a stationary residency

#define reset_frame_len 10      //Reset data frame length
//Reset data frame
const unsigned char fall_reset_frame[10] = {0x53, 0x59, 0x01, 0x02, 0x00, 0x01, 0x0F, 0xBF, 0x54, 0x43};

//Return status, Use in arduino
#define NOONE 0x01
#define SOMEONE 0x02
#define NONEPSE 0x03
#define STATION 0x04
#define MOVE 0x05
#define BODYVAL 0x06
#define MOVEDIS 0x07

#define NOFALL 0x08
#define FALL 0x09
#define NORESIDENT 0x10
#define RESIDENCY 0x11

unsigned int sensor_report = 0, bodysign_val = 0, total_detect = 0, height_0005 = 0, height_0510 = 0, height_1015 = 0, height_1520 = 0;
```

### Instalação

**Etapa 1.** Você precisa instalar o software Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**Etapa 2.** Inicie o aplicativo Arduino.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Etapa 3.** Selecione o modelo da sua placa de desenvolvimento e adicione-o ao Arduino IDE.

- Se você quiser usar **Seeeduino V4.2** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/) para concluir a adição.

- Se você quiser usar **Seeeduino XIAO** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#software) para concluir a adição.

- Se você quiser usar **XIAO RP2040** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#software-setup) para concluir a adição.

- Se você quiser usar **XIAO BLE** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#software-setup) para concluir a adição.

- Se você quiser usar **XIAO ESP32C3** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started/#software-setup) para concluir a adição.

:::caution
Para **XIAO nRF52840**, selecione **Seeed nRF52 mbed-enabled Boards**, caso contrário pode ser relatado um erro ao executar programas.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png"/></div>
:::

**Etapa 4.** Instale a biblioteca de código do Arduino.

Comece obtendo a base de código no [GitHub](https://github.com/limengdu/Seeed-Studio-MR60FDA1-Sersor) e fazendo o download para o seu computador local.

Como você fez o download da biblioteca em formato zip, abra seu Arduino IDE, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo zip que você acabou de baixar e, se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de notificações. Isso significa que a biblioteca foi instalada com sucesso.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Exemplo com Arduino

Agora que temos nossa biblioteca instalada e entendemos as funções básicas, vamos executar alguns exemplos para nosso XIAO BLE para ver como ele se comporta.

### Materiais necessários

Antes de concluir os exemplos a seguir, você precisará preparar os seguintes materiais.

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>| <div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="150" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**Sensor de Radar mmWave de 60GHz**](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Fall-Detection-Module-Pro-p-5375.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**Cabo Flat de Passo 2mm para 2,54mm**|

**Etapa 1.** Conecte o dispositivo ao computador por meio da placa principal. O diagrama de fiação é mostrado na tabela abaixo.

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/30.png"/></div></td>
 </tr >
 <tr >
     <td align="center">Seeed Studio XIAO nRF52840</td>
     <td align="center"></td>
        <td align="center">Sensor MR60FDA1</td>
 </tr>
 <tr>
     <td align="center">5V</td>
     <td align="center">--></td>
        <td align="center">5V</td>
 </tr>
 <tr>
     <td align="center">GND</td>
     <td align="center">--></td>
        <td align="center">GND</td>
 </tr>
  <tr>
     <td align="center">RX</td>
     <td align="center">--></td>
        <td align="center">D6</td>
 </tr>
  <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">D7</td>
 </tr>
</table>

**Etapa 2.** Na barra de menu no canto superior esquerdo do Arduino IDE, selecione **tool**, escolha o tipo de placa de desenvolvimento que você está usando e selecione a porta serial correspondente.

:::tip
Se você estiver usando **MacOS**, o nome da porta serial do dispositivo geralmente começará com **/dev/cu.usbmodem xxx**, terminando com o nome do dispositivo. Se você estiver usando **Windows**, o nome da porta serial do dispositivo geralmente começará com **COM**, novamente terminando com o nome do dispositivo.
:::

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

Neste exemplo, demonstraremos como o radar funciona com o nosso produto popular XIAO BLE.

### Demo1 Exportação de dados brutos

Este exemplo irá guiá-lo pelo processo de impressão dos dados brutos relatados pelo Sensor através da porta serial.

O programa de exemplo a seguir está na pasta de exemplos da biblioteca chamado **MR60FDA1_print_rawdata**.

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
Se você estiver usando a série XIAO ESP32 e não houver retorno de dados do radar mmwave, você pode tentar alterar o código acima de ```Serial1.begin(115200);``` para ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Neste programa, estamos usando a porta de hardware **Serial1** do XIAO nRF52840 para conectar ao Sensor e usamos a porta de hardware **Serial** Serial para enviar os dados, portanto precisamos inicializar essa porta serial separadamente na função de inicialização `Setup()`.

Na função principal `loop()` usamos a função `recvRadarBytes()` para receber quadros de dados do Sensor e então usamos a função `showData()` para imprimir os quadros de dados recebidos através da porta serial.

Neste programa, é importante observar que há um intervalo entre a recepção e a saída de cada dois quadros de dados para evitar um travamento na placa principal. Esse tempo não deve ser inferior a **150ms**.

Isso significa que não há como a placa principal receber todos os quadros de dados relatados pelo Sensor, mas como o número de quadros relatados pelo Sensor é muito grande e frequente, isso não afeta a precisão do uso do Sensor para determinar o ambiente.

Carregue o programa. Ao abrir o monitor serial com uma taxa de transmissão de 115200, o resultado deverá ser exibido. A saída deverá se parecer com a imagem abaixo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/7.png"/></div>

### Demo2: Uso da função de detecção de presença humana

Neste exemplo, explicaremos como usar a função de detecção de presença humana e imprimir todos os valores dessa função através do monitor serial.

O programa de exemplo a seguir está na pasta de exemplos da biblioteca chamado **MR60FDA1_human_existence_inf_output**.

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.HumanExis_Func();           //Human existence information output
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case NOONE:
        Serial.println("Nobody here.");
        Serial.println("----------------------------");
        break;
      case SOMEONE:
        Serial.println("Someone is here.");
        Serial.println("----------------------------");
        break;
      case NONEPSE:
        Serial.println("No human activity messages.");
        Serial.println("----------------------------");
        break;
      case STATION:
        Serial.println("Someone stop");
        Serial.println("----------------------------");
        break;
      case MOVE:
        Serial.println("Someone moving");
        Serial.println("----------------------------");
        break;
      case BODYVAL:
        Serial.print("The parameters of human body signs are: ");
        Serial.println(radar.bodysign_val, DEC);
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
Se você estiver usando a série XIAO ESP32 e não houver retorno de dados do radar mmwave, você pode tentar alterar o código acima de ```Serial1.begin(115200);``` para ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Neste exemplo, a função para detectar a presença de um corpo humano é implementada pela função `HumanExis_Func()`. A lógica básica da implementação do programa é que a função `HumanExis_Func()` atribui as informações de status relatadas pelo sensor à variável `sensor_report`. Com base no valor de `sensor_report`, imprimimos então todos os valores nesse estado pela porta serial.

Observe que o `sensor_report` corresponde à saída de dados da porta serial sob indentação. Por exemplo, a variável `bodysign_val` que representa o parâmetro de sinal só é válida quando `sensor_report` é `BODYVAL`, e não está presente em outros `sensor_reports` relatados pelo sensor.

Envie o programa. Ao abrir o monitor serial em uma taxa de baud de 115200, o resultado deverá ser exibido. A saída deverá se parecer com a imagem abaixo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/8.png"/></div>

### Demo3: Detecção de quedas humanas

Neste exemplo, usaremos a função `Fall_Detection()` para detectar quedas humanas.

:::tip
O princípio da saída de estado para quedas é que há conteúdo de saída apenas quando o sensor detecta uma mudança no estado da queda.
:::

O programa de exemplo a seguir está na pasta de exemplos da biblioteca chamada **MR60FDA1_Fall_detection**.

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.Fall_Detection();           //Receive radar data and start processing
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
        case NOFALL:
            Serial.println("The sensor detects this movement is not a fall.");
            Serial.println("----------------------------");
            break;
        case FALL:
            Serial.println("The sensor detects a fall.");
            Serial.println("----------------------------");
            break;
        case NORESIDENT:
            Serial.println("The sensors did not detect anyone staying in place.");
            Serial.println("----------------------------");
            break;
        case RESIDENCY:
            Serial.println("The sensor detects someone staying in place.");
            Serial.println("----------------------------");
            break;
    }
  }
  delay(200); //Add time delay to avoid program jam
}
```

:::tip
Se você estiver usando a série XIAO ESP32 e não houver retorno de dados do radar mmwave, você pode tentar alterar o código acima de ```Serial1.begin(115200);``` para ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Entre as funções de detecção de queda, também há uma função para detecção de permanência. A principal função dessa função é auxiliar o usuário ou o sensor a determinar se o corpo humano caiu ou não. Quando não há atividade humana por um período de tempo após uma mudança brusca de aceleração na direção vertical (ou seja, permanecendo no local), há uma alta probabilidade de o sensor determinar que alguém caiu e está inconsciente.

### Demo4: Enviar dados para o Sensor

Com base nos detalhes fornecidos no manual do usuário, o usuário pode enviar quadros de comando para o sensor para consultar ou definir certos estados ou modos do sensor de acordo com as necessidades reais.

O arquivo .ino chamado **MR60FDA1_Send_frame** na pasta de exemplos da biblioteca do sensor nos mostra como enviar para o sensor um programa que consulta o ID do dispositivo.

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x5F, 0x54, 0x43};

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.send_func(DevID_buff, 10, false);
  delay(50);                       //Do not set the delay time too long, as this may affect the reception of the data frames returned by the radar.
}
```

:::tip
Se você estiver usando a série XIAO ESP32 e não houver retorno de dados do radar mmwave, você pode tentar alterar o código acima de ```Serial1.begin(115200);``` para ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

No programa deste exemplo, você pode ver que é definido um array `DevID_buff[10]`, que armazena o número hexadecimal do ID do dispositivo consultado, um local por byte.

E o envio é feito por `send_func()`. Os parâmetros passados são o array de quadros a serem enviados, o comprimento do array e se deve ser enviado em loop.

Se você precisar enviar seus próprios quadros de comando, então será necessário definir o array correto de acordo com o formato de quadro fornecido no manual do usuário.

:::tip
**Sobre o cálculo do dígito de verificação "sum".**

Todos os quadros de dados têm um bit de verificação para garantir que os dados sejam enviados ou recebidos com precisão. O bit de verificação geralmente está no penúltimo bit do quadro de dados. Ele é calculado somando todos os bits anteriores ao bit de verificação e tomando os dois dígitos inferiores em hexadecimal.
Vamos tomar como exemplo um quadro de dados que consulta o ID do dispositivo.
<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>

Pode-se ver que o bit de verificação está no penúltimo bit de todo o quadro de dados. Em seguida, começamos somando todos os números hexadecimais anteriores.

`0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160`

Em seguida, precisamos pegar os dois dígitos inferiores, que seriam **60**, então o dígito de verificação deste quadro de dados é **60**. Se quisermos consultar o ID do Sensor, podemos definir o seguinte array.

`const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};`

:::

Envie o programa. Ao abrir o monitor serial em uma taxa de baud de 115200, o resultado deverá ser exibido. A saída deverá se parecer com a imagem abaixo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/9.png"/></div>

Neste ponto, verifique os quadros de dados retornados e se eles correspondem aos quadros de dados retornados conforme descrito no manual do usuário.

Normalmente, nossos comandos não precisam ser repetidos para o Sensor, mas como o Sensor responde com mensagens tão rapidamente, não podemos ter certeza de que receberemos exatamente a mensagem de dados retornada pelo Sensor. Existem duas soluções para esse problema.

- Reenvie o procedimento acima várias vezes.
- Defina o terceiro parâmetro da função `send_func()` (envio cíclico) como `true`. No entanto, observe que enviar repetidamente quadros de dados do tipo de configuração **pode fazer com que o Sensor trave**, portanto, use essa função com cautela. Se o Sensor travar, desconecte o pino de alimentação de 5V do Sensor e aguarde alguns instantes para que a função seja retomada.

### Demo5: Redefinir o Sensor

Pode haver momentos em que você tenha problemas com o Sensor detectando anomalias ou quando quiser limpar todas as configurações do Sensor; então você pode redefinir o Sensor de acordo com este exemplo.

O programa de exemplo a seguir está na pasta de exemplos da biblioteca chamada **MR60FDA1_Reset_sensor**.

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");

  radar.reset_func();
}

void loop()
{
  // put your main code here, to run repeatedly:
}
```

:::tip
Se você estiver usando a série XIAO ESP32 e não houver retorno de dados do radar mmwave, você pode tentar alterar o código acima de ```Serial1.begin(115200);``` para ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Redefinir o Sensor é muito simples, você só precisa chamar `reset_func()`. A redefinição só precisa ser **executada uma vez**, portanto a utilizamos na função `Setup()`.

### Demo6: Usando Arduino/Seeeduino

Nossa biblioteca é compatível com Arduino e você também pode escolher o Arduino que tiver em mãos para desenvolver seu projeto com o Sensor.

O Sensor MR60FDA1 se comunica usando a porta serial UART, você só precisa conectar o Sensor ao seu Arduino conforme a ligação abaixo.

<table align="center">
 <tr>
     <td align="center">MR60FDA1 Sensor</td>
     <td align="center"></td>
        <td align="center">MCU</td>
 </tr>
 <tr>
     <td align="center">5V</td>
     <td align="center">--></td>
        <td align="center">5V</td>
 </tr>
 <tr>
     <td align="center">GND</td>
     <td align="center">--></td>
        <td align="center">GND</td>
 </tr>
    <tr>
     <td align="center">RX</td>
     <td align="center">--></td>
        <td align="center">porta serial de software TX</td>
 </tr>
    <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">porta serial de software RX</td>
 </tr>
</table>

Todas as funções são aplicadas da mesma forma que em Demo1 a Demo5 acima, portanto não iremos repeti-las neste exemplo. Neste exemplo, daremos uma visão geral de como usar a porta serial de software do Arduino para obter informações de dados do Sensor.

:::tip
Para notas sobre a porta serial de software do Arduino, consulte a [documentação oficial do Arduino](https://docs.arduino.cc/learn/built-in-libraries/software-serial).
:::

Para evitar confusão de dados causada pelo uso de Serial tanto para saída quanto para transmissão de dados, no lado do Arduino geralmente usamos uma porta serial de software.

A importação da biblioteca da porta serial de software e a definição dos pinos RX e TX precisam ser feitas antes no programa. O programa a seguir define os pinos **A2** e **A3** como os pinos **RX** e **TX** da porta serial de software.

```c
#include <SoftwareSerial.h>
//Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

//we'll be using software serial
FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);
```

Além disso, não se esqueça de configurar a taxa de baud para a porta serial de software na função `Setup()`.

```c
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}
```

Usando o **Demo1** como exemplo, se você quiser usar o Arduino para imprimir os quadros de dados relatados pelo Sensor, então o programa completo é o seguinte.

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

### Demo7: Conexão direta ao PC para dados

Você pode se referir a esta rotina se quiser usar um computador host projetado para o Sensor, ou se quiser usar o software serial para obter um quadro de dados completo.

Conecte o Sensor diretamente à porta usb do computador por meio de um dispositivo **UART to USB**. A fiação é mostrada na tabela abaixo.

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr >
 <tr >
     <td align="center">UART to USB</td>
     <td align="center"></td>
        <td align="center">Sensor MR60FDA1</td>
 </tr>
 <tr>
     <td align="center">5V</td>
     <td align="center">--></td>
        <td align="center">5V</td>
 </tr>
 <tr>
     <td align="center">GND</td>
     <td align="center">--></td>
        <td align="center">GND</td>
 </tr>
    <tr>
     <td align="center">RX</td>
     <td align="center">--></td>
        <td align="center">TX</td>
 </tr>
    <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">RX</td>
 </tr>
</table>

Use um software como assistente de depuração serial para selecionar a porta serial onde o Sensor está localizado.

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/60GHzradar/37.png"/></div>

:::caution
O Sensor MR60FDA1 precisa de uma fonte de alimentação de 5V, caso contrário o Sensor pode não funcionar corretamente.
:::

Após uma conexão bem-sucedida, você verá o Sensor enviando um fluxo constante de mensagens.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/39.png"/></div>

Ao mesmo tempo, você também pode enviar quadros de dados para o Sensor por meio da função de envio do software.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/40.png"/></div>

:::caution
Se você escolher **ASCII** como o formato para envio de dados, cada conjunto de dados precisa ser prefixado com **0x**. Se você escolher **HEX**, então cada conjunto de dados não precisa ser prefixado com **0x**.
:::

## Solução de Problemas

### FAQ1: Este Sensor pode detectar mais de uma pessoa ao mesmo tempo no mesmo ambiente?

> R: Não disponível. Este Sensor só pode ser usado em um único objeto vivo. Se mais de uma pessoa ou animal estiver na faixa de monitoramento, isso terá efeito nos resultados do monitoramento.

### FAQ2: Por que não consigo ver nada no monitor serial com o XIAO ESP32C3?

> A função de porta serial do XIAO ESP32C3 não é totalmente consistente com o hardware Arduino comum, e usar Serial1 diretamente pode fazer com que a porta serial USB não funcione. Para casos de aplicação relacionados, acesse o [capítulo Serial do XIAO ESP32C3](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Pin_Multiplexing/#Serial) para mais detalhes.

## Recursos

- **[PDF]** [Protocolo Universal](https://files.seeedstudio.com/wiki/60GHzradar/60GHz_mmWave_Sensor_Fall_Detection_Module_Pro-Universal_Protocol.pdf)
- **[PDF]** [Manual do usuário V1.3](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60FDA1_user_manual-V1.3.pdf)
- **[PDF]** [Projeto de Case do Sensor MMWave da Seeed Studio](https://files.seeedstudio.com/wiki/60GHzradar/Seeed_Studio_MMWave_Sensor-Case_Design.pdf)
- **[EXE]** [Software de Computador Host](https://files.seeedstudio.com/wiki/60GHzradar/Fall_detection_radar.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
