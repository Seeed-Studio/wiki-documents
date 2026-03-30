---
description: 24GHz mmWave Presença Humana Estática Lite
title: 24GHz mmWave Presença Humana Estática Lite
keywords:
  - mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Radar_MR24HPC1
sku: 101991030
last_update:
  date: 03/03/2023
  author: Citric
createdAt: '2023-01-12'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/pt-br/Radar_MR24HPC1/
---


# Sensor mmWave 24GHz - Módulo Lite de Presença Humana Estática (MR24HPC1)

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O Sensor mmWave 24GHz - Módulo Lite de Presença Humana Estática é um sensor de radar mmWave com antena integrada, amigável à saúde, que aplica tecnologia de medição FMCW, operando em 24GHz, para implementação de presença humana estática, independentemente das influências ambientais. Este também é um radar personalizado no qual os usuários podem configurar parâmetros subjacentes para determinar as funções detectadas.

### Aplicações

- Iluminação externa automática
- Abertura automática de portas
- Monitoramento de toda a casa
- Eletrodomésticos inteligentes (TV, aquecedor de banheiro, segurança, etc.)
- Eficiência energética em escritórios (ar-condicionado, iluminação)
- Curva de monitoramento do sono
- Segurança doméstica
- Disparo de IPC

### Características

- Radar mmWave de presença humana: Aplica tecnologia de medição FMCW, operando em 24GHz e com alcance de detecção de 5 metros, para detectar o comportamento humano na área de sensoriamento
- Detecção de radar personalizada: Fornece alcance de detecção configurável, gatilho de movimento, tempo de mudança de estado, bem como software de depuração visual para atender aos requisitos de vários cenários
- Estado de funcionamento amigável à saúde: Potência de saída tão baixa que é inofensiva ao corpo humano
- Alta imunidade a interferências: Emite dados independentemente de influências ambientais como temperatura, umidade, ruído, fluxo de ar, poeira, luz
- Suporte a Arduino

### Visão Geral do Hardware

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/13.jpg" style={{width:500, height:'auto'}}/></div>

1. O pino 5V é a interface de alimentação para o radar e RX e TX são as interfaces de transmissão de dados para o radar. RX significa recepção serial e TX significa transmissão serial.
2. A interface de saída de status de presença humana. Você pode usar o nível desses dois pinos para determinar o movimento humano atual no ambiente.
  Saída S1: nível alto - ocupado, nível baixo - desocupado.
  Saída S2: nível alto - ativo, nível baixo - estático.
3. Pinos para gravação de firmware.
4. Pinos de entrada/saída suspensos.

## Primeiros Passos

### Atualizações de Versão de Firmware

O sensor mmWave passou por um longo período de precipitação técnica e por valiosas sugestões fornecidas pelos usuários, e temos iterado sobre o produto original para fornecer resultados de monitoramento mais precisos e confiáveis e uma melhor experiência para nossos usuários.

Os sensores recém-enviados vêm com o firmware mais recente por padrão para garantir a experiência de produto mais atual. No entanto, para o bem da experiência dos antigos usuários, fornecemos aqui o firmware mais recente e o método de atualização para garantir que você possa usar nossa tecnologia mais recente.

#### Método universal - usar J-link para gravar o firmware

Se você encontrar firmware incorreto ou anomalia no radar, mau funcionamento do firmware, etc., usar este método para regravar o firmware é a maneira mais eficaz.

**Download do firmware mais recente**

| Versão do Firmware | Endereço de Download |
|:----------------:|:----------------:|
| Jlink_MR24HPC1-20230302.bin | [Download](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR24HPC1-20230302.bin) |

:::caution

1. Verifique cuidadosamente a função do seu produto, não misture com outros sensores mmWave para gravar este firmware, caso contrário isso pode causar funcionamento anormal do produto, e as consequências serão de sua própria responsabilidade!

2. Observe também que diferentes maneiras de atualizar o firmware usam conteúdos de firmware diferentes; o que você está baixando é o firmware gravado via **J-link**.

:::

**Para atualizar seu radar para a versão mais recente**

**Passo 1.** Você precisará ter um **Jlink** e um **MR24HPC1** Sensor mmWave 24GHz.

Conecte o radar e o Jlink juntos por meio de fio Dupont, como mostrado no diagrama abaixo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/57.jpg"/></div>

**Passo 2.** Baixe o software e o firmware necessários.

| Arquivo | Endereço de Download |
|:----------------:|:----------------:|
| JlinkV644e.rar | [Download](https://files.seeedstudio.com/wiki/60GHzradar/JlinkV644e.rar) |
| Pack_Segger_AT32F4xx_v1.3.3.zip | [Download](https://files.seeedstudio.com/wiki/60GHzradar/Pack_Segger_AT32F4xx_v1.3.3.zip)

**Passo 3.** Descompacte **JlinkV644e.rar** e abra o arquivo **JLink_Windows_V644e.exe** dentro.

Basta seguir as opções padrão para instalar. Quando a instalação estiver concluída, inicie o software **J-Flash V6.44e**.

**Passo 4.** Instale o pacote do chip.

Descompacte **Pack_Segger_AT32F4xx_v1.3.3.zip** e abra **Segger_AT32F4xx_AddOn.exe** dentro.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/47.png"/></div>

:::tip
Se você encontrar um erro como o da imagem abaixo ao adicionar algo ao JFlash, pode seguir as instruções abaixo para resolver o problema.
:::

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/arteryMcu.png"/></div>

Solução:

1. Baixe este arquivo em https://www.arterychip.com/en/product/AT32F403A.jsp

2. Descompacte o arquivo e abra

3. Copie JLinkDevices.xml de C:\Program Files\SEGGER\JLink_V794 para C:\Users[User]\AppData\Roaming\SEGGER

Isso corrige o problema e podemos gravar com o software JFlash ou JFlash Lite.

**Passo 5.** Crie um novo projeto.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/48.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/49.png"/></div>

Encontre e escolha **AT32F403ARGT7**.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/50.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/51.png"/></div>

**Passo 6.** Arraste e solte o firmware do radar (arquivo .bin) neste software e uma janela aparecerá; vamos apenas usar seu endereço inicial padrão de 0x8000000.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/52.png"/></div>

**Passo 7.** Clique em **Target** -> **Connect**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/53.png"/></div>

Quando a conexão for bem-sucedida, será exibido Connected successfully.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/54.png"/></div>

Apagar firmware: **Target** -> **manual Programming** -> **Erase Chip**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/55.png"/></div>

Atualizar firmware: **Target** -> **manual Programming** -> **Program & Verify**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/56.png"/></div>

Neste ponto, a atualização do firmware está completa.

#### Atualizar firmware via UART

Considerando que o J-link é caro, é muito extravagante comprar um J-link para a grande maioria dos usuários que só precisam atualizar o firmware do radar, portanto oferecemos um método de atualização via UART.

**Download do firmware mais recente**

| Versão do Firmware | Endereço de Download |
|:----------------:|:----------------:|
| UART_MR24HPC1-20230302.bin | [Download](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR24HPC1-20230302.bin) |

:::caution

1. Verifique cuidadosamente a função do seu produto, não misture com outros sensores mmWave para gravar este firmware, caso contrário isso pode causar funcionamento anormal do produto, e as consequências serão de sua própria responsabilidade!

2. Observe também que diferentes maneiras de atualizar o firmware usam conteúdos de firmware diferentes; o que você está baixando é o firmware gravado via **UART**.

3. Certifique-se de que a versão do firmware do seu radar seja **pelo menos a versão G24VD1SYV001006** antes de usar o UART para atualizar o firmware, caso contrário isso pode desabilitar o radar; nesse ponto você terá que usar J-link para gravar o firmware para poder usá-lo!

Você pode consultar as informações do número da versão do firmware enviando o comando `0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43` para o radar. Os dados relatados pelo radar são então exibidos como uma string, e você verá um efeito semelhante ao mostrado abaixo.

`G24VD1SYV000009` é o número de modelo relatado no radar, onde `000009` é o número da versão. Isso significa que este sensor **não** suporta atualização via UART.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/21.png"/></div>
:::

**Para atualizar seu radar para a versão mais recente**

**Passo 1**. Você precisará ter um **UART para USB** e um **MR24HPC1** Sensor mmWave 24GHz.

Conecte o radar e o UART para USB juntos por meio de fio Dupont, como mostrado no diagrama abaixo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**Passo 2**. Baixe o software e o firmware necessários.

| Arquivo | Endereço de Download |
|:----------------:|:----------------:|
| PackageMake-v1.1.1.zip | [Download](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**Passo 3**. Descompacte o pacote PackageMake-v1.1.1.zip e abra o arquivo PackageMake-v1.1.1.exe dentro.

Conecte o UART para USB com o sensor conectado ao computador, clique no ícone de engrenagem no canto superior esquerdo do software, selecione o número da porta, defina a taxa de baud para 115200 e clique no canto inferior direito para confirmar. (Se o número da porta não for encontrado, verifique a conexão e clique no botão de atualização no canto inferior esquerdo para tentar novamente)

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**Passo 4**. Conectando o sensor

Depois de terminar a configuração da porta serial conforme descrito acima, clique no segundo ícone no canto superior direito e você verá os dados brutos do radar sendo exibidos se a porta tiver sido selecionada corretamente.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**Etapa 5**. Atualizar firmware

Clique no último ícone no canto superior direito com o botão esquerdo do mouse, isto abrirá uma janela para selecionar o firmware. Selecione a versão do firmware que você baixou.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

Após concluir a seleção, o caminho do arquivo selecionado aparecerá abaixo do software, verifique novamente se a versão e o modelo do firmware selecionado são consistentes com o sensor que você está usando.

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/18.png"/></div>

Para atualizar o firmware, clique duas vezes com o botão esquerdo do mouse na última imagem na parte superior esquerda do software, então o firmware começará a ser baixado para o sensor.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/15.png"/></div>

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/16.png"/></div>

Espere a barra de progresso terminar e a atualização do firmware estará concluída.

### Uso do computador superior

Conecte o radar diretamente à porta USB do computador por meio de um dispositivo **UART to USB**. A fiação é mostrada na tabela abaixo.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/10.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Radar Sensor</td>
      <td align="center" />
      <td align="center">UART to USB</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">RX</td>
      <td align="center">--&gt;</td>
      <td align="center">TX</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--&gt;</td>
      <td align="center">RX</td>
    </tr>
  </tbody></table>

Além do software serial mencionado acima, você também pode usar diretamente o [software de computador superior](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe) projetado para o radar.

As dez seções a seguir explicam a função de cada parte do software.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/7.png"/></div>

1. Porta

    Selecione a porta à qual o radar está conectado ao computador. Geralmente é necessário **atualizar** a porta clicando no botão Refresh antes de selecioná-la. Uma vez selecionada, clique no botão **Open**.

2. Taxa de baud

    O radar MR24HPC1 precisa ser configurado com uma taxa de baud de 115200.

3. Energia de Movimento

    Este valor é equivalente ao **valor dinâmico**. A variação deste valor representa o ruído de movimento constante no ambiente. A Energia de Movimento é baixa quando não há ninguém no espaço, e a Energia de Movimento geral fica mais alta à medida que o movimento aumenta em magnitude e distância.

4. Energia de Saída

    Este valor é equivalente ao **valor estático**. A variação deste valor representa o ruído estático constante no ambiente. A Energia de Saída é baixa quando o espaço está desocupado, e a Energia de Saída geral oscila em valores mais altos quando há uma pessoa estacionária no espaço (leve movimento da respiração do peito).

5. Distância

    **Distância estacionária**: A distância em linha reta entre o ambiente e o radar na presença de uma área em leve movimento. Quando há alguém parado em um local no espaço, a distância em linha reta até o radar é exibida em tempo real.
    **Distância de movimento**: A distância em linha reta entre uma posição em movimento no ambiente e o radar. Quando há uma pessoa em movimento em um local no espaço, a distância em linha reta até o radar é exibida em tempo real para esse local. a distância em linha reta até o radar.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/9.png"/></div>

6. Configurações Gráficas

    Usado para determinar claramente a relação entre as formas de onda em tempo real e a relação de limiares. Com base nas mudanças da curva em tempo real, é possível observar a mudança no ruído de fundo em diferentes estados do espaço e, com base na mudança no ruído de fundo, é possível definir o limiar para a presença do corpo humano e fazer um julgamento simples da presença/ausência/atividade do estado estacionário.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/8.png"/></div>

7. Consulta

    Pesquisar as configurações atuais de parâmetros. Para o significado dos valores de cada parâmetro, consulte o manual do usuário para obter detalhes por questões de espaço.

8. Configurações

    Definir os valores de limiar para cada parâmetro.

9. Exibição de Status

    Esta janela mostra em tempo real, entre outros valores, a distância, velocidade e status de movimento atuais.

10. Enviar & Responder

    Os quadros de dados enviados e recebidos.

## Desenvolvimento do sensor com Arduino

### Visão geral da biblioteca Arduino

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

O código da biblioteca usado neste exemplo pode ser baixado clicando no ícone abaixo.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_24GHz_Human_Static_Presence_Module_Lite" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

#### Função {#function}

Antes de começarmos a desenvolver um sketch, vamos ver as funções disponíveis da biblioteca.

- `void recvRadarBytes()` —— Esta função coleta os quadros de dados reportados pelo Sensor via UART de acordo com os cabeçalhos e caudas de quadro no protocolo de dados do Sensor. Usada em conjunto com a função `showData()`, as informações de dados coletadas podem ser impressas pela porta serial.

  - **Parâmetros de entrada:** Nenhum

  - **Valor de retorno:** Nenhum

- `void showData()` —— Esta função serve para imprimir de uma só vez o quadro de dados completo reportado pelo Sensor via porta serial e precisa ser usada em conjunto com a função `recvRadarBytes()`.

  - **Parâmetros de entrada:** Nenhum

  - **Valor de retorno:** Nenhum

- `void HumanStatic_func(bool bodysign /*=false*/)` —— Esta função é responsável por analisar os quadros de dados do Sensor e exibir os dados relevantes sobre o estado da presença humana.

  - **Parâmetros de entrada:** `bodysign` —— Este parâmetro é uma chave que controla se os Parâmetros de Movimento Humano serão exibidos ou não. Se **true**, a saída conterá uma grande quantidade de dados de parâmetros de sinais humanos, o que pode afetar sua experiência de visualização dos dados. Por padrão, este parâmetro é **false** e nenhuma informação sobre os parâmetros de sinais do corpo é exibida.

  - <span id="function"><strong>Valor de retorno:</strong></span>

    - `int radarStatus` —— O valor retornado indica a qual classe de status o quadro de dados analisado pertence. As categorias específicas podem ser encontradas na seção **Variáveis Padrão**.

    - `int bodysign_val` —— O valor retornado representa o valor do Parâmetro de Movimento Humano. Este valor só é válido com o parâmetro `bodysign=true`.

    - `int static_val` —— Este valor é equivalente ao **valor estático**. A variação deste valor representa o ruído estático constante no ambiente. A Energia de Saída é baixa quando o espaço está desocupado, e a Energia de Saída geral oscila em valores mais altos quando há uma pessoa estacionária no espaço (leve movimento da respiração do peito). Este valor só é válido se a Mensagem Subjacente Aberta estiver ativada.

    - `int dynamic_val` —— A variação deste valor representa o ruído de movimento constante no ambiente. A Energia de Movimento é baixa quando não há ninguém no espaço, e a Energia de Movimento geral fica mais alta à medida que o movimento aumenta em magnitude e distância. Este valor só é válido se a mensagem subjacente aberta estiver ativada.

    - `int dis_static` —— A distância em linha reta entre o ambiente e o Sensor na presença de uma área em leve movimento. Quando há alguém parado em um local no espaço, a distância em linha reta até o Sensor é exibida em tempo real. Este valor só é válido se a Mensagem Subjacente Aberta estiver ativada.

    - `int dis_move` —— A distância em linha reta entre uma posição em movimento no ambiente e o Sensor. Quando há uma pessoa em movimento em um local no espaço, a distância em linha reta até o Sensor é exibida em tempo real para esse local. a distância em linha reta até o Sensor. Este valor só é válido se a Mensagem Subjacente Aberta estiver ativada.

    - `int speed` —— Este valor indica a velocidade de movimento do objeto em movimento. O valor é apenas para referência. Este valor só é válido se a Mensagem Subjacente Aberta estiver ativada.

- `void checkSetMode_func(const unsigned char* buff, int len, bool cyclic /*= false*/)` —— Esta função pode ser usada para enviar quadros de dados ao Sensor. Os quadros de dados enviados e os quadros de dados retornados são impressos via porta serial.

  - **Parâmetros de entrada:**

    - `buff` —— O quadro de dados que você deseja enviar ao Sensor.

    - `len` —— O comprimento do quadro de dados que você deseja enviar ao Sensor.

    - `cyclic` —— Interruptor de envio cíclico. O padrão é false, que pode ser definido como **true** se você quiser enviar este quadro de dados ciclicamente.

  - **Return value:** Nenhum

- `void reset_func()` —— A função serve para reiniciar o Sensor.

  - **Input parameters:** Nenhum

  - **Return value:** Nenhum

#### Default Variables

```c
#define MESSAGE_HEAD1 0x53       //Data frame header1
#define MESSAGE_HEAD2 0x59       //Data frame header2

#define MESSAGE_END1  0x54       //End1 of data frame
#define MESSAGE_END2  0x43       //End2 of data frame

#define HUMANSTATUS   0x80       //Human Presence Information
#define HUMANEXIST    0x01       //Presence of the human body
#define HUMANMOVE     0x02       //Human movement information
#define HUMANSIGN     0x03       //Body Signs Parameters
#define HUMANDIRECT   0x0B       //Human movement trends

#define SOMEBODY      0x01       //Somebody move
#define NOBODY        0x00       //No one here

#define NONE          0x00
#define SOMEBODY_STOP 0x01       //Somebody stop
#define SOMEBODY_MOVE 0x02       //Somebody move

#define CA_CLOSE      0x01       //Someone approaches
#define CA_AWAY       0x02       //Some people stay away


#define DETAILSTATUS  0x08       //Underlying parameters of the human state
#define DETAILINFO    0x01       //Detailed data on the state of human movement
#define DETAILDIRECT  0x06       //Human movement trends
#define DETAILSIGN    0x07       //Body Signs Parameters

//Return status, Use in arduino
#define SOMEONE       0x01       //There are people
#define NOONE         0x02       //No one
#define NOTHING       0x03       //No message
#define SOMEONE_STOP  0x04       //Somebody stop
#define SOMEONE_MOVE  0x05       //Somebody move
#define HUMANPARA     0x06       //Body Signs Parameters
#define SOMEONE_CLOSE 0x07       //Someone approaches
#define SOMEONE_AWAY  0x08       //Some people stay away
#define DETAILMESSAGE 0x09       //Underlying parameters of the human state

#define reset_frame_len 10       //Reset data frame length

//Reset data frame
const unsigned char reset_frame[10] = {0x53, 0x59, 0x01, 0x02, 0x00, 0x01, 0x0F, 0xBF, 0x54, 0x43};
```

### Installation

**Step 1.** Você precisa instalar o software Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**Step 2.** Inicie o aplicativo Arduino.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Step 3.** Selecione o modelo da sua placa de desenvolvimento e adicione-o ao Arduino IDE.

- Se você quiser usar **Seeeduino V4.2** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/) para concluir a adição.

- Se você quiser usar **Seeeduino XIAO** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#software) para concluir a adição.

- Se você quiser usar **XIAO RP2040** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#software-setup) para concluir a adição.

- Se você quiser usar **XIAO nRF52840** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#software-setup) para concluir a adição.

- Se você quiser usar **XIAO ESP32C3** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started/#software-setup) para concluir a adição.

:::caution
Para **XIAO nRF52840**, selecione **Seeed nRF52 mbed-enabled Boards**, caso contrário pode ser relatado um erro ao executar programas.
<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png" style={{width:600, height:'auto'}}/></div>
:::

**Step 4.** Instale a biblioteca de código Arduino.

Comece obtendo a base de código no [GitHub](https://github.com/limengdu/Seeed_24GHz_Human_Static_Presence_Module_Lite) e fazendo o download para o seu computador local.

Como você fez o download da biblioteca zip, abra o seu Arduino IDE, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo zip que você acabou de baixar e, se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de aviso. Isso significa que a biblioteca foi instalada com sucesso.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:600, height:'auto'}}/></div>

## Arduino Example

Agora que temos nossa biblioteca instalada e entendemos as funções básicas, vamos executar alguns exemplos para o nosso XIAO nRF52840 Sense para ver como ele se comporta.

### Materials Required

Antes de concluir os exemplos a seguir, você precisará preparar os seguintes materiais.

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:240, height:'auto'}}/></div>| <div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:210, height:'auto'}}/></div>| <div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg" style={{width:150, height:'auto'}}/></div>|
|[**MR24HPC1**](https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**Cabo Flat de Passo 2mm para 2,54mm**|

**Step 1.** Conecte o dispositivo ao computador através da placa principal. O diagrama de fiação é mostrado na tabela abaixo.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/11.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">MR24HPC1</td>
      <td align="center" />
      <td align="center">Main Board</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">RX</td>
      <td align="center">--&gt;</td>
      <td align="center">D6</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--&gt;</td>
      <td align="center">D7</td>
    </tr>
  </tbody></table>

**Step 2.** Na barra de menu no canto superior esquerdo do Arduino IDE, selecione **tool**, escolha o tipo de placa de desenvolvimento que você está usando e selecione a porta serial correspondente.

:::tip
Se você estiver usando **MacOS**, o nome da porta serial do dispositivo geralmente começará com **/dev/cu.usbmodem xxx**, terminando com o nome do dispositivo. Se você estiver usando **Windows**, o nome da porta serial do dispositivo geralmente começará com **COM**, novamente terminando com o nome do dispositivo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/3.png" style={{width:600, height:'auto'}}/></div>
:::

Neste exemplo, demonstraremos como o Sensor funciona com o nosso produto popular XIAO nRF52840 Sense.

### Demo 1: Impressão na porta serial de quadros de dados brutos da saída do Sensor {#demo1}

Este exemplo irá guiá-lo pelo processo de impressão dos dados brutos relatados pelo Sensor através da porta serial.

O seguinte programa de exemplo está na pasta de exemplos da biblioteca chamado **MR24HPCB1_rawdata_print**.

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
Se você estiver usando a série XIAO ESP32 e não houver retorno de dados do radar mmwave, você pode tentar mudar o código acima de ```Serial1.begin(115200);``` para ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Neste programa, estamos usando a porta de hardware **Serial1** do XIAO nRF52840 para conectar ao Sensor e usar a porta de hardware **Serial** Serial para enviar dados, portanto precisamos inicializar esta porta serial separadamente na função de inicialização `Setup()`.

Na função principal `loop()` usamos a função `recvRadarBytes()` para receber quadros de dados do Sensor e depois usamos a função `showData()` para imprimir os quadros de dados recebidos através da porta serial.

Neste programa, é importante observar que há um intervalo entre a recepção e a saída de cada dois quadros de dados para evitar um travamento na placa principal. Esse tempo não deve ser inferior a **150ms**.

Isso significa que não há como a placa principal receber todos os quadros de dados relatados pelo Sensor, mas como o número de quadros relatados pelo Sensor é muito grande e frequente, isso não afeta a precisão do uso do Sensor para determinar o ambiente.

Envie o programa. Abrindo o monitor serial em uma taxa de transmissão de 115200 você deverá ver o resultado. A saída deverá ser semelhante à imagem abaixo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/1.png" style={{width:600, height:'auto'}}/></div>

### Demo 2: Impressão pela porta serial das informações interpretadas de presença humana {#demo2}

Neste exemplo, usaremos as funções da biblioteca para analisar os quadros de dados recebidos e imprimir todos os dados de características reportados pelo Sensor ativo via porta serial.

O programa de exemplo a seguir está na pasta examples da biblioteca, chamado **MR24HPCB1_parsed_rawdata**.

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.HumanStatic_func(true);    //Turn on printing of human movement sign parameters
  if(radar.radarStatus != 0x00){
    switch(radar.radarStatus){
      Serial.println(radar.radarStatus);
      case SOMEONE:
        Serial.println("Someone is here.");
        Serial.println("---------------------------------");
        break;
      case NOONE:
        Serial.println("Nobody here.");
        Serial.println("---------------------------------");
        break;
      case NOTHING:
        Serial.println("No human activity messages.");
        Serial.println("---------------------------------");
        break;
      case SOMEONE_STOP:
        Serial.println("Someone stop");
        Serial.println("---------------------------------");
        break;
      case SOMEONE_MOVE:
        Serial.println("Someone moving");
        Serial.println("---------------------------------");
        break;
      case HUMANPARA:
        Serial.print("The parameters of human body signs are: ");
        Serial.println(radar.bodysign_val, DEC);
        Serial.println("---------------------------------");
        break;
      case SOMEONE_CLOSE:
        Serial.println("Someone is closing");
        Serial.println("---------------------------------");
        break;
      case SOMEONE_AWAY:
        Serial.println("Someone is staying away");
        Serial.println("---------------------------------");
        break;
      case DETAILMESSAGE:
        Serial.print("Spatial static values: ");
        Serial.println(radar.static_val);
        Serial.print("Distance to stationary object: ");
        Serial.print(radar.dis_static);
        Serial.println(" m");

        Serial.print("Spatial dynamic values: ");
        Serial.println(radar.dynamic_val);

        Serial.print("Distance from the movement object: ");
        Serial.print(radar.dis_move);
        Serial.println(" m");

        Serial.print("Speed of moving object: ");
        Serial.print(radar.speed);
        Serial.println(" m/s");
        Serial.println("---------------------------------");
        break;
    }
  }
  delay(200);
}
```

:::tip
Se você estiver usando a série XIAO ESP32 e não houver retorno de dados do radar mmwave, você pode tentar alterar o código acima de ```Serial1.begin(115200);``` para ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Para implementar a função de análise de dados, primeiro precisamos chamar a função `HumanStatic_func()`. O parâmetro passado pode ser `true` ou `false` para controlar se a exibição dos Parâmetros de Movimento Humano está habilitada ou não.

Se você optar por ligá-la, ou seja, passar o parâmetro `true`, poderá obter a seguinte mensagem na porta serial.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/2.png" style={{width:600, height:'auto'}}/></div>

:::note
Parâmetros de Movimento Humano: valores de amplitude de movimento humano. Os Parâmetros de Movimento Humano são **0** quando não há ninguém no ambiente, **1-5** quando alguém está presente e parado, e **2-100** quando o corpo está em movimento (quanto maior a amplitude de movimento, mais próximo estará o parâmetro de movimento do corpo).
Isso significa que, se você achar que os resultados do reconhecimento do Sensor não atendem às suas expectativas, pode exibir informações sobre a presença do corpo humano personalizando o julgamento dos Parâmetros de Movimento Humano.
:::

Se você quiser interromper a saída intensa dos Parâmetros de Movimento Humano na porta serial, passe o parâmetro `false` e então poderá ver informações limpas sobre o status do corpo na porta serial.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/3.png" style={{width:600, height:'auto'}}/></div>

:::tip
Talvez você não veja conteúdo impresso no monitor serial por um período longo; isso pode ser normal. O algoritmo incorporado ao Sensor é tal que as informações só são emitidas quando o estado de movimento do objeto monitorado muda. Se você estiver parado desde o upload do programa, tente se levantar, se movimentar e observar o efeito.
:::

Também é possível que os dados que você recebeu sejam diferentes das informações mostradas nos dados das duas imagens acima. Nesse caso, é possível que você tenha ligado a chave de saída de Open Underlying Message.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/4.png"  style={{width:600, height:'auto'}}/></div>

Para obter mais informações sobre como ligar e desligar o Open Underlying Message, consulte a seção relevante de [Demo 3](#demo3). Em resumo, ativar o Open Underlying Message significa que dados mais detalhados serão exportados.

Para o significado dos dados do Open Underlying Message, consulte a seção [**Function**](#function) ou o manual do usuário deste Sensor, por motivos de espaço.

### Demo 3: Enviar dados para o Sensor {#demo3}

O MR24HPC1 oferece uma grande variedade de funções de configuração de modo. Este exemplo explicará a implementação da chave Open Underlying Message como um exemplo de como enviar quadros de dados.

O programa de exemplo a seguir está na pasta examples da biblioteca, chamado **MR24HPCB1_open_underlyingMes**.

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&Serial1);

const unsigned char close_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x00, 0xB5, 0x54, 0x43};  //switch off Open Underlying Message
const unsigned char open_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x01, 0xB6, 0x54, 0x43};   //switch on Open Underlying Message

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.checkSetMode_func(open_buff, 10, false);
  delay(50);   //Do not set the delay time too long, as this may affect the reception of the data frames returned by the radar.
}
```

:::tip
Se você estiver usando a série XIAO ESP32 e não houver retorno de dados do radar mmwave, você pode tentar alterar o código acima de ```Serial1.begin(115200);``` para ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Antes de enviar dados para o Sensor, precisamos consultar o manual do usuário para obter os quadros de dados completos a serem enviados de acordo com nossas necessidades e definir um array no programa para armazenar os quadros de dados a serem enviados.

Neste exemplo, criamos dois arrays de quadros de dados de acordo com o manual do usuário. Sua função é ligar ou desligar a função Open Underlying Message.

```c
const unsigned char close_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x00, 0xB5, 0x54, 0x43};  //switch off Open Underlying Message
const unsigned char open_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x01, 0xB6, 0x54, 0x43};   //switch on Open Underlying Message
```

:::tip
**Sobre o cálculo do dígito de verificação "sum".**

Todos os quadros de dados têm um bit de verificação para garantir que os dados sejam enviados ou recebidos com precisão. O bit de verificação geralmente está no penúltimo byte do quadro de dados. Ele é calculado somando todos os bytes anteriores ao bit de verificação e pegando os dois dígitos inferiores em hexadecimal.
Vamos tomar como exemplo um quadro de dados que consulta o ID do dispositivo.
<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>

Pode-se ver que o bit de verificação está no penúltimo byte de todo o quadro de dados. Em seguida, começamos somando todos os números hexadecimais anteriores.

`0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160`

Então precisamos pegar os dois dígitos inferiores, que seriam **60**, portanto o checksum deste quadro de dados é **60**. Se quisermos consultar o ID do Sensor, você pode então definir o seguinte array.

`const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};`

:::

Em seguida, enviamos o quadro de dados chamando a função `checkSetMode_func()`. Os parâmetros passados são um array de quadros de dados, o comprimento do array e um valor booleano indicando se deve enviá-lo ciclicamente.

```c
radar.checkSetMode_func(open_buff, 10, false);
```

Carregue o programa. Ao abrir o monitor serial com uma taxa de baud de 115200, o resultado deve ser exibido. A saída deve se parecer com a imagem abaixo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/5.png" style={{width:600, height:'auto'}}/></div>

Neste ponto, verifique os quadros de dados retornados e, se eles corresponderem aos quadros de dados retornados conforme descrito no manual do usuário, então a configuração foi bem-sucedida.

Normalmente, nossos comandos não precisam ser repetidos para o Sensor, mas como o Sensor responde com mensagens tão rapidamente que não podemos ter certeza de que receberemos a mensagem de dados exata retornada pelo Sensor. Existem duas soluções para este problema.

- Recarregue o procedimento acima várias vezes.
- Defina o terceiro parâmetro da função `checkSetMode_func()` (envio cíclico) como `true`. No entanto, observe que o envio repetido de quadros de dados do tipo de configuração **pode fazer com que o Sensor trave**, portanto use esta função com cautela. Se o Sensor travar, desconecte o pino de alimentação de 5V do Sensor e aguarde alguns instantes para que a função seja retomada.

### Demo 4: Resetar o Sensor {#demo4}

Pode haver momentos em que você tenha problemas com o Sensor detectando anomalias ou quando quiser limpar todas as configurações do Sensor; então você pode resetar o Sensor de acordo com este exemplo.

O programa de exemplo a seguir está na pasta examples da biblioteca chamado **MR24HPCB1_reset_radar**.

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");

  radar.reset_func();
}

void loop() {
  // put your main code here, to run repeatedly:

}
```

:::tip
Se você estiver usando a série XIAO ESP32 e não houver retorno de dados do radar mmwave, você pode tentar alterar o código acima de ```Serial1.begin(115200);``` para ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Resetar o Sensor é muito simples, você só precisa chamar `reset_func()`. O reset precisa ser **executado apenas uma vez**, portanto o usamos na função `Setup()`.

### Demo 5: Usando Arduino/Seeeduino {#demo5}

Nossa biblioteca é compatível com Arduino e você também pode escolher o Arduino que tiver em mãos para desenvolver seu projeto com o Sensor.

O Sensor MR24HPC1 se comunica usando a porta serial UART, você só precisa conectar o Sensor ao seu Arduino conforme a fiação abaixo.

<table align="center">
  <tbody><tr>
      <td align="center">MR24HPC1</td>
      <td align="center" />
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
      <td align="center">soft serial port TX</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--></td>
      <td align="center">soft serial port RX</td>
    </tr>
  </tbody></table>

Todas as funções são aplicadas da mesma forma que em `Demo 1` a `Demo 4` acima, portanto não as repetiremos neste exemplo. Neste exemplo, daremos uma visão geral de como usar a porta serial por software do Arduino para obter informações de dados do Sensor.

:::tip
Para observações sobre a porta serial por software do Arduino, consulte a [documentação oficial do Arduino](https://docs.arduino.cc/learn/built-in-libraries/software-serial).
:::

Para evitar confusão de dados causada por usar a Serial tanto para saída quanto para transmissão de dados, no lado do Arduino normalmente usamos uma porta serial por software.

A importação da biblioteca de porta serial por software e a definição dos pinos RX e TX precisam ser feitas anteriormente no programa. O programa a seguir define os pinos **A2** e **A3** como os pinos **RX** e **TX** da porta serial por software.

```c
#include <SoftwareSerial.h>
//Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

//we'll be using software serial
HumanStaticLite radar = HumanStaticLite(&mySerial);
```

Além disso, não se esqueça de definir a taxa de baud para a porta serial por software na função `Setup()`.

```c
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");
}
```

Usando o **Demo 1** como exemplo, se você quiser usar o Arduino para imprimir os quadros de dados relatados pelo Sensor, então o programa completo é o seguinte.

```c
#include "Arduino.h"
#include <humanstaticLite.h>

#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
HumanStaticLite radar = HumanStaticLite(&mySerial);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

### Demo 6: Conexão direta ao PC para dados {#demo6}

Você pode se referir a esta rotina se quiser usar um computador superior projetado para o Sensor, ou se quiser usar o software serial para obter um quadro de dados completo.

Conecte o Sensor diretamente à porta usb do computador por meio de um dispositivo **UART para USB**. A fiação é mostrada na tabela abaixo.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/10.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Radar Sensor</td>
      <td align="center" />
      <td align="center">UART to USB</td>
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
  </tbody></table>

Use um software como assistente de depuração serial para selecionar a porta serial onde o Sensor está localizado.

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/37.png" style={{width:200, height:'auto'}}/></div>

:::caution
O Sensor MR24HPC1 precisa de alimentação de 5V, caso contrário o Sensor pode não funcionar corretamente.
:::

Após uma conexão bem-sucedida, você verá o Sensor enviando um fluxo constante de mensagens.

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/39.png" style={{width:600, height:'auto'}}/></div>

Ao mesmo tempo, você também pode enviar quadros de dados para o Sensor por meio da função de envio do software.

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/40.png" style={{width:600, height:'auto'}}/></div>

### Demo 7: MR24HPBC1 & XIAO ESP32C3 & ESPHome & Home Assistant {#demo7}

Criamos um tutorial para conexão ao ESPHome e Home Assistant para este radar e o XIAO ESP32C3; se você estiver interessado, pode consultar o tutorial aqui.

- [XIAO ESP32C3 acessa o Home Assistant via serviço ESPHome](https://wiki.seeedstudio.com/pt-br/xiao-esp32c3-esphome)

### Demo 8: Usando sensores no XIAO ESP32C3 {#demo8}

Devido ao [design especial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Pin_Multiplexing/#special-way---use-usb-serial-and-uart0uart1-at-the-same-time) da porta serial de hardware do XIAO ESP32C3, você precisará usar o código a seguir para poder usar a UART para enviar e receber mensagens de dados com o sensor.

```cpp
#include "Arduino.h"
#include <humanstaticLite.h>
#include <HardwareSerial.h>

//HardwareSerial MySerial(0); // If you want to use D6 and D7 as serial pins, uncomment this line and comment the following line instead.
HardwareSerial MySerial(1);   // Create a new HardwareSerial class

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&MySerial);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  /*
   * 4, 5 indicate GPIO4 and GPIO5, corresponding to pins D2 and D3. 
   * If you want to use the hardware UART pins of the XIAO ESP32C3 directly, you can change 4, 5 to -1, -1.
   * MySerial.begin(115200, SERIAL_8N1, -1, -1);
   * 
   * In addition to this you can also use the D9 (GPIO9) and D10 (GPIO10) pins as serial ports.
   * MySerial1.begin(115200, SERIAL_8N1, 9, 10);
   */
  MySerial.begin(115200, SERIAL_8N1, 4, 5);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  delay(500);

  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

## Solução de problemas

### FAQ 1: Este Sensor pode detectar mais de uma pessoa ao mesmo tempo no mesmo ambiente? {#faq1}

> A: Não disponível. Este sensor só pode ser usado em um único organismo vivo. Se mais de uma pessoa ou animal estiver dentro do alcance de monitoramento, isso terá efeito nos resultados do monitoramento.

### FAQ 2: Por que não consigo ver nada no monitor serial com o XIAO ESP32C3? {#faq2}

> A função de porta serial do XIAO ESP32C3 não é totalmente consistente com o hardware Arduino em geral, e usar Serial1 diretamente pode fazer com que a porta serial USB não funcione. Para casos de aplicação relacionados, acesse o [capítulo Serial do XIAO ESP32C3](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Pin_Multiplexing/#serial) para mais detalhes.

### FAQ 3: É possível usar outro chip em vez do XIAO ESP32-C3 para usar a biblioteca? {#faq3}

Sim, é realmente possível usar outros chips em vez do XIAO ESP32-C3 com a biblioteca. Apenas certifique-se de conectar os pinos RX/TX corretos ou dois pinos GPIO e definir a taxa de transmissão para `115200`.
Confirme qual método usar, software ou hardware, por exemplo, se você tiver um `Arduino Uno R3` que possui apenas uma porta serial, você pode implementar como abaixo:

```cpp
#include "Arduino.h"
#include <humanstaticLite.h>

#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
HumanStaticLite radar = HumanStaticLite(&mySerial);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  mySerial.begin(115200);
}
void loop() {
  // Your code here
}
```

## Recursos

- **[PDF]** [Modelo de Configuração Rápida](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **[PDF]** [Folha de Dados](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **[PDF]** [Manual do Usuário](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V2.0.pdf)
- **[EXE]** [software de computador host](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe)
- **[ZIP]** [documentos de certificação CE](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/101991030_CE.zip)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
