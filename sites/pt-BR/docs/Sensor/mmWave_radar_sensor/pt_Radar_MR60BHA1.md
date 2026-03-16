---
description: Respiração estática e batimentos cardíacos em mmWave de 60GHz
title: Respiração estática e batimentos cardíacos em mmWave de 60GHz
keywords:
  - mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Radar_MR60BHA1
sku: 101990886
last_update:
  date: 03/03/2023
  author: Citric
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Radar_MR60BHA1/
---

# Sensor mmWave de 60GHz - Monitoramento Estático de Respiração Durante o Sono (MR60BHA1)

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O módulo de radar MR60BHA1 de 60GHz aplica a teoria de detecção FMCW para implementar, com alta precisão, a medição simultânea da taxa de respiração e da frequência cardíaca de uma pessoa, proporcionando um ambiente totalmente privado e seguro, independente de outros ruídos. É um sistema de radar biológico padrão em eletrônicos de consumo, cuidados de saúde, bem como em aplicações industriais. Neste wiki, apresentaremos como utilizá-lo.

### Aplicação

- Casa inteligente
- Cuidados de saúde
- Detecção da taxa de respiração
- Detecção da frequência cardíaca
- Hotel inteligente
- Assistentes médicos

### Características

- Teoria habilitada: Implementa detecção por radar baseada em sinais FMCW de onda contínua modulada em frequência
- Algoritmo padrão: Detecta e fornece simultaneamente a taxa respiratória humana e o ritmo cardíaco em ambiente de auto-adaptação
- Proteção de privacidade perfeita: Aplica tecnologia de monitoramento FMCW para fornecer capacidades de vigilância sem identificação
- Estado de funcionamento saudável: Potência de saída baixa o suficiente para ser inofensiva ao corpo humano
- Alta estabilidade: Independente de temperatura, umidade, ruído, fluxo de ar, poeira, luz e outras influências ambientais
- Alta precisão de medição: Alcança precisão de batimentos cardíacos de até 85% e precisão de respiração de até 90%
- Design de hardware de radar altamente flexível: Suporta desenvolvimento secundário, adaptando-se a aplicações em vários cenários

### Especificação

| Conteúdo do parâmetro             |  Mínimo  |  Típico  |  Máximo  |  Unidade |
|-----------------------------------|----------|----------|----------|---------|
|  **Desempenho**                   |          |          |          |         |
|  Distância de detecção (tórax)    |  0.4     |          |  1.5     |  m      |
|  Precisão da medição respiratória |          |  90      |          |  %      |
|  Precisão da medição de batimentos cardíacos   |          |  95      |          |  %      |
|  Tempo de atualização             |  1       |          |  30      |  s      |
|  Tempo de configuração de observação          |          |  20      |          |  s      |
|  **Parâmetros de operação**       |          |          |          |         |
|  Tensão de operação (VCC)         |  4.6     |  5       |  6       |  V      |
|  Corrente de operação (ICC)       |          |  150     |          |  mA     |
|  Temperatura de operação (TOP)    |  -20     |          |  60      |  ℃      |
|  Temperatura de armazenamento (TST)        |  -40     |          |  80      |  ℃      |
|  **Parâmetros de transmissão**    |          |          |          |         |
|  Frequência de operação (fTX)     |  58      |  60      |  63.5    |  GHz    |
|  Potência transmitida (Pout)      |          |  6       |          |  dBm    |
|  **Parâmetros da antena**         |          |          |          |         |
|  Ganho da antena (GANT)           |          |  4       |          |  dBi    |
|  Feixe horizontal (-3dB)          |  -20     |          |  20      |  º      |
|  Feixe vertical (-3dB)            |  -20     |          |  20      |  º      |

## Visão Geral de Hardware

Antes de tudo, é bastante essencial conhecer alguns parâmetros básicos do produto. A tabela a seguir fornece informações sobre as características do Módulo de Respiração e Batimentos Cardíacos em mmWave de 60GHz.

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/60GHzradar/pinout3.png"/></div>

- Interface 1:
  - O pino de 5V é a interface de alimentação para o sensor.
  - RX e TX são as interfaces de transmissão de dados do sensor. RX significa recepção serial e TX significa transmissão serial.
  - A interface de saída de status de presença humana. Você pode usar o nível desses dois pinos para determinar o movimento humano atual no ambiente.
    - Saída GP2: nível alto - ocupado, nível baixo - desocupado.
    - Saída GP1: nível alto - ativo, nível baixo - estacionário.
- Interface 2:
  - Pinagem para gravação de firmware: GND/3.3V/SWD/SWC.
  - Pinos de entrada/saída superiores: GP3~GP6.

## Primeiros Passos

### Atualizações de Versão de Firmware

O sensor mmwave passou por um longo período de maturação técnica e de valiosas sugestões fornecidas pelos usuários, e temos iterado sobre o produto original para oferecer resultados de monitoramento mais precisos e confiáveis e uma melhor experiência para nossos usuários.

Os sensores enviados recentemente vêm com o firmware mais recente por padrão para garantir a experiência mais atual do produto. No entanto, pelo bem da experiência dos antigos usuários, fornecemos aqui o firmware mais recente e o método de atualização para garantir que você possa utilizar nossa tecnologia mais recente.

#### Método universal - usar J-link para gravar o firmware

Se você encontrar firmware incorreto ou anomalia no radar, mau funcionamento do firmware, etc., usar este método para regravar o firmware é a forma mais eficaz.

**Download do firmware mais recente**

| Versão do firmware | Endereço para download |
|:----------------:|:----------------:|
| Jlink_MR60BHA1-V230104.bin | [Download](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR60BHA1-V230104.bin) |
| Jlink_MR60BHA1-V230904.bin | [Download](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR60BHA1-V230904.bin) |

:::caution

1. Verifique cuidadosamente a função do seu produto, não misture com outros sensores mmwave para gravar este firmware, caso contrário isso pode causar funcionamento anormal do produto, e as consequências serão de sua inteira responsabilidade!

2. Observe também que diferentes maneiras de atualizar o firmware utilizam conteúdos de firmware diferentes; o que você está baixando é o firmware gravado via **J-link**.

:::

**Para atualizar seu radar para a versão mais recente**

**Passo 1.** Você precisará ter um **Jlink** e um **MR60BHA1** Sensor mmWave de 60GHz.

Conecte o radar e o Jlink por meio de fios Dupont conforme mostrado no diagrama abaixo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/57.jpg"/></div>

**Passo 2.** Baixe o software e o firmware necessários.

| Arquivo | Endereço para download |
|:----------------:|:----------------:|
| JlinkV644e.rar | [Download](https://files.seeedstudio.com/wiki/60GHzradar/JlinkV644e.rar) |
| Pack_Segger_AT32F4xx_v1.3.3.zip | [Download](https://files.seeedstudio.com/wiki/60GHzradar/Pack_Segger_AT32F4xx_v1.3.3.zip)

**Passo 3.** Descompacte **JlinkV644e.rar** e abra o arquivo **JLink_Windows_V644e.exe** dentro.

Basta seguir as opções padrão para instalar. Quando a instalação estiver concluída, inicie o software **J-Flash V6.44e**.

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

Quando a conexão for bem-sucedida, será exibido Connected successfully.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/54.png"/></div>

Apagar firmware: **Target** -> **manual Programming** -> **Erase Chip**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/55.png"/></div>

Atualizar firmware: **Target** -> **manual Programming** -> **Program & Verify**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/56.png"/></div>

Neste ponto, a atualização do firmware está concluída.

#### Atualizar firmware via UART

Considerando que o J-link é caro, é muito extravagante comprar um J-link para a grande maioria dos usuários que só precisam atualizar o firmware do radar, portanto oferecemos um método de atualização via UART.

**Download do firmware mais recente**

| Versão do firmware | Endereço para download |
|:----------------:|:----------------:|
| UART_MR60BHA1-230104.bin | [Download](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60BHA1-230104.bin) |
| UART_MR60BHA1-230904.bin | [Download](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60BHA1-230904.bin) |

:::caution

1. Verifique cuidadosamente a função do seu produto, não misture com outros sensores mmwave para gravar este firmware, caso contrário isso pode causar funcionamento anormal do produto, e as consequências serão de sua inteira responsabilidade!

2. Observe também que diferentes maneiras de atualizar o firmware utilizam conteúdos de firmware diferentes; o que você está baixando é o firmware gravado via **UART**.

3. Certifique-se de que a versão do firmware do seu radar seja **pelo menos versão G60SM1SYv010003** antes de usar o UART para atualizar o firmware, caso contrário isso pode desabilitar o radar, e então você terá que usar o J-link para gravar o firmware para poder utilizá-lo!

Você pode consultar as informações do número da versão do firmware enviando o comando `0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43` para o Radar. Os dados reportados pelo radar são então exibidos como uma string, e você verá um efeito semelhante ao mostrado abaixo.

`G60SM1SYv010009` é o número do modelo reportado no radar, onde `10009` é o número da versão. Isso significa que este sensor suporta atualização via UART.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/20.png"/></div>
:::

**Para atualizar seu radar para a versão mais recente**

**Passo 1**. Você precisará ter um **UART para USB** e um sensor **MR60BHA1** 60GHz mmWave.

Conecte o radar e o UART para USB juntos via fio Dupont como mostrado no diagrama abaixo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**Passo 2**. Baixe o software e o firmware necessários.

| Arquivo | Endereço de Download |
|:----------------:|:----------------:|
| PackageMake-v1.1.1.zip | [Download](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**Passo 3**. Descompacte o pacote PackageMake-v1.1.1.zip e abra o arquivo PackageMake-v1.1.1.exe dentro dele.

Conecte o UART para USB com o sensor conectado ao computador, clique no ícone de engrenagem no canto superior esquerdo do software, selecione o número da porta, defina a taxa de transmissão para 115200 e, em seguida, clique no canto inferior direito para confirmar. (Se o número da porta não for encontrado, verifique a conexão e clique no botão de atualizar no canto inferior esquerdo para tentar novamente)

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**Passo 4**. Conectando o sensor

Depois de terminar de configurar a porta serial conforme descrito acima, clique no segundo ícone no canto superior direito e você verá os dados brutos do radar sendo impressos se a porta tiver sido selecionada corretamente.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**Passo 5**. Atualizar firmware

Clique com o botão esquerdo do mouse no último ícone no canto superior direito, isso abrirá uma janela para selecionar o firmware. Selecione a versão de firmware que você baixou.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

Após concluir a seleção, o caminho do arquivo selecionado aparecerá abaixo do software, por favor verifique novamente se a versão do firmware selecionada e o modelo são consistentes com o sensor que você está usando.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/17.png"/></div>

Para atualizar o firmware, clique duas vezes com o botão esquerdo do mouse na última imagem no canto superior esquerdo do software, então o firmware começará a ser transferido para o sensor.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/15.png"/></div>

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/16.png"/></div>

Espere a barra de progresso terminar e a atualização de firmware estará completa.

### Uso do computador superior

Conecte o sensor diretamente à porta USB do computador por meio de um dispositivo **UART para USB**. A fiação é mostrada na tabela abaixo.

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr>
 <tr>
     <td align="center">UART to USB</td>
     <td align="center"></td>
        <td align="center">Sensor MR60BHA1</td>
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

Além do software serial mencionado acima, você também pode usar diretamente o [software de computador superior](https://files.seeedstudio.com/wiki/60GHzradar/MR60BHA1_new.exe) projetado para o radar.

:::tip
Se você estiver usando uma versão mais antiga do OP e do firmware, por favor [atualize para a versão mais recente](#atualizações-de-versão-de-firmware) o mais rápido possível para garantir que você possa usufruir do protocolo de software e do conteúdo da Wiki.
:::

As cinco seções a seguir explicam o papel de cada parte do software.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/1.png"/></div>

1. Configuração de Conexão

    Selecione a porta à qual o sensor está conectado ao computador. Geralmente é necessário atualizar a porta clicando no **botão Refresh Serial Port** antes de selecioná-la. Uma vez que a porta serial seja selecionada corretamente, os dados são automaticamente atualizados no círculo 4 (se houver quaisquer dados disponíveis).

2. Configuração de Função

    - **Debugging**: Quando esta função é ativada, dados brutos em tempo real podem ser exibidos no software. Esta é a janela no círculo 3 na figura.
    - **Save Raw Data**: Quando você clica nela, pode optar por manter os dados originais no seu computador local. Note, porém, que esta opção não salva novos dados após o clique no botão, apenas os dados históricos mais recentes.
    - **Save Sleep Data**: Quando você clica nela, pode escolher o caminho para salvar as informações de dados brutos relacionadas ao sono, enquanto outros dados não serão salvos. Note, porém, que esta opção não salva novos dados após o clique no botão, apenas os dados históricos mais recentes.

3. Monitor Serial

    Esta janela aparece quando a opção **Debugging** no círculo 2 está marcada, momento em que a área exibe quadros de dados do sensor em tempo real. Na parte inferior você pode enviar quadros de comando para o sensor. Os comandos que podem ser enviados ou consultados podem ser encontrados no manual do usuário do sensor.

4. Exibição Gráfica

    Aqui é mostrado o gráfico de linhas em tempo real. O conteúdo de dados exibido são, respectivamente, taxa respiratória, frequência cardíaca e parâmetros físicos. A coordenada horizontal é o tempo e a coordenada vertical são os dados correspondentes.

5. Status & Orientação

    Esta área permite observar o estado de presença humana e a orientação do corpo humano. Os dados de orientação do corpo humano são apenas para referência.

## Desenvolvimento do sensor com Arduino

### Visão geral da biblioteca Arduino

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

O código da biblioteca usado neste exemplo pode ser baixado clicando no ícone abaixo.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

#### Função

Antes de começarmos a desenvolver um sketch, vamos analisar as funções disponíveis da biblioteca.

- `void recvRadarBytes()` —— Esta função coleta os quadros de dados reportados pelo Sensor via UART de acordo com os cabeçalhos e caudas de quadro no protocolo de dados do Sensor. Usada em conjunto com a função `showData()`, as informações de dados coletadas podem ser impressas via porta serial.

  - **Parâmetros de entrada:** Nenhum

  - **Valor de retorno:** Nenhum

- `void showData()` —— Esta função serve para imprimir de uma só vez o quadro de dados completo reportado pelo Sensor via porta serial e precisa ser usada em conjunto com a função `recvRadarBytes()`.

  - **Parâmetros de entrada:** Nenhum

  - **Valor de retorno:** Nenhum

- `void HumanExis_Func()` —— Esta função é responsável por analisar os quadros de dados do Sensor e fornecer os dados relevantes sobre o estado de presença humana.

  - **Parâmetros de entrada:** Nenhum

  - **Valor de retorno:**

    - `unsigned int sensor_report` —— O valor retornado indica a qual classe de status o quadro de dados analisado pertence. As categorias específicas podem ser encontradas na seção **Variáveis Padrão**. As informações de movimento humano são reportadas apenas quando ocorrem alterações.

    - `int bodysign_val` —— O valor retornado representa o valor do Parâmetro de Movimento Humano. Este valor é reportado uma vez por segundo.

    - `float distance` —— O sensor determina a distância atual até o corpo humano, o valor está em metros. Este valor é reportado uma vez a cada 2 segundos.

    - `float Dir_x, Dir_y, Dir_z` —— Indica as informações de posição do corpo detectadas pelo sensor. As informações de posição humana possuem unidades positivas e negativas em metros. Este valor é reportado uma vez a cada 2 segundos.

- `void Breath_Heart()` —— Esta função é responsável por analisar os dados de respiração e batimento cardíaco do sensor e retornar os valores associados.

  - **Parâmetros de entrada:** Nenhum

  - **Valor de retorno:**

    - `unsigned int sensor_report` —— O valor retornado indica a qual classe de status o quadro de dados analisado pertence. As categorias específicas podem ser encontradas na seção **Variáveis Padrão**.

    - `unsigned int heart_rate` —— Valores de frequência cardíaca. Reportado a cada 3 segundos. Faixa de valores 0~100.

    - `unsigned int heart_point_1, heart_point_2, heart_point_3, heart_point_4, heart_point_5` —— Dados da forma de onda da frequência cardíaca. 5 bytes representam 5 valores em 1s em tempo real, a forma de onda é um dado de onda senoidal, o eixo central é 128 o que significa que quando a intensidade da frequência cardíaca é 0, será exibida como 128. Este valor é reportado uma vez por segundo.

    - `unsigned int breath_rate` —— Valores de respiração. Reportado a cada 3 segundos. Faixa de valores 0~20.

    - `unsigned int breath_point_1, breath_point_2, breath_point_3, breath_point_4, breath_point_5` —— Dados da forma de onda da taxa de respiração. 5 bytes representam 5 valores em 1s em tempo real, a forma de onda é um dado de onda senoidal, o eixo central é 128, o que significa que, quando a intensidade da frequência cardíaca é 0, será exibido como 128. Esse valor é relatado uma vez por segundo.

- `void SleepInf_Decode()` —— Esta função é responsável por analisar as informações de dados de sono relatadas pelos sensores. Ela só é válida quando a pessoa monitorada entrou na cama e está dormindo há mais de cinco minutos. Certifique-se de que o modo de transferência de estado de sono esteja habilitado ao usar esta função.

  - **Parâmetros de entrada:** Nenhum

  - **Valor de retorno:**

    - `unsigned int sensor_report` —— O valor retornado indica a qual classe de estado o quadro de dados analisado pertence. As categorias específicas podem ser encontradas na seção **Default Variables**.

    - `unsigned int awake_time` —— Este valor indica o tempo acordado da pessoa monitorada, caso ela já tenha ido para a cama. Esse valor será relatado a cada dez minutos juntamente com outros dados de estado do sono.

    - `unsigned int light_time` —— Este valor indica o tempo de sono leve do indivíduo monitorado, caso ele já esteja na cama. Esse valor será relatado a cada dez minutos juntamente com outros dados de estado do sono.

    - `unsigned int deep_time` —— Este valor indica o tempo de sono profundo do indivíduo monitorado, caso ele já esteja na cama. Esse valor será relatado a cada dez minutos juntamente com outros dados de estado do sono.

    - `unsigned int sleep_score` —— Este valor indica a pontuação de qualidade do sono. Essa informação é relatada ao final do processo de sono.

    - `boolean existence` —— O valor indica a informação de presença humana. Um resultado de retorno True indica a presença de uma pessoa, e um resultado de retorno False indica a ausência de uma pessoa. Esse valor será relatado a cada dez minutos juntamente com outros dados de estado do sono.

    - `unsigned int sleep_status` —— Este valor indica o estado de sono. Existem quatro estados de sono, a saber: fora da cama, acordado, sono leve e sono profundo. Esse valor será relatado a cada dez minutos juntamente com outros dados de estado do sono.

    - `unsigned int breath_rate` —— Média de batimentos cardíacos em 10 minutos. Esse valor será relatado a cada dez minutos juntamente com outros dados de estado do sono.

    - `unsigned int heart_rate` —— Média de respiração em dez minutos. Esse valor será relatado a cada dez minutos juntamente com outros dados de estado do sono.

    - `unsigned int turn_num` —— Número de viradas em dez minutos. Esse valor será relatado a cada dez minutos juntamente com outros dados de estado do sono.

    - `unsigned int substantial_move_ratio` —— Proporção de movimentos substanciais do indivíduo ao longo de dez minutos. Esse valor será relatado a cada dez minutos juntamente com outros dados de estado do sono.

    - `unsigned int samll_move_ratio` —— A porcentagem de pequenos movimentos do indivíduo em dez minutos. Esse valor será relatado a cada dez minutos juntamente com outros dados de estado do sono.

    - `unsigned int apnea_num` —— O número de apneias em dez minutos. Esse valor será relatado a cada dez minutos juntamente com outros dados de estado do sono.

    - `unsigned int sleep_time` —— Total de horas de sono. Relatado quando o sensor determina que o processo de sono terminou.

    - `unsigned int awake_time_radio` —— A porcentagem de tempo em que a pessoa está acordada. Relatado quando o sensor determina que o processo de sono terminou.

    - `unsigned int light_time_radio` —— Porcentagem de tempo passado em sono leve. Relatado quando o sensor determina que o processo de sono terminou.

    - `unsigned int deep_time_radio` —— Porcentagem de tempo passado em sono profundo. Relatado quando o sensor determina que o processo de sono terminou.

    - `unsigned int outbed_time` —— A quantidade de tempo em que a pessoa permanece fora da cama. Relatado quando o sensor determina que o processo de sono terminou.

    - `unsigned int outbed_num` —— O número de vezes que a pessoa sai da cama. Relatado quando o sensor determina que o processo de sono terminou.

- `void send_func(const unsigned char* buff, int len, bool cyclic /*=false*/)` —— A função é usada para enviar quadros de consulta e quadros de comando.

  - **Parâmetros de entrada:**

    - `buff` —— O quadro de dados que você deseja enviar ao Sensor.

    - `len` —— O comprimento do quadro de dados que você deseja enviar ao Sensor.

    - `cyclic` —— Chave de envio cíclico. O padrão é false, podendo ser definido como **true** caso você deseje enviar esse quadro de dados ciclicamente.

  - **Valor de retorno:** Nenhum

- `void ModeSelect_fuc(int mode)` —— Esta função é usada para selecionar o modo de operação do sensor. Existem dois modos de operação, o modo de transmissão de estado de sono e o modo de transmissão de dados em tempo real. No modo de transmissão de estado de sono, a função de monitoramento de sono está ligada (`SleepInf_Decode()` é válida). No modo de transmissão de dados em tempo real, a função de monitoramento de sono está desligada (`SleepInf_Decode()` é inválida), mas os dados de forma de onda são relatados.

  - **Parâmetros de entrada:**

    - `mode` —— O número do modo selecionado. 1 indica modo de transmissão de dados em tempo real e 2 indica modo de transmissão de estado de sono.

  - **Valor de retorno:** Nenhum

- `void reset_func()` —— A função serve para reiniciar o Sensor.

  - **Parâmetros de entrada:** Nenhum

  - **Valor de retorno:** Nenhum

### Default Variables

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

#define DISTANCE 0x04           //Distance from the person being detected

#define DIRECTIONS 0x05         //Body orientation

#define HEART_INF 0x85          //Heart rate information

#define HEART_RATE 0x02         //Heart rate

#define HEART_RATE_WAVE 0x05    //Heart rate waveform (No analysis for now)

#define BREATH_RATE_RADAR 0x81  //Respiratory heart rate data

#define BREATH_INF 0x01         //Breathing data
#define BREATH_NORMAL 0x01      //Normal breathing
#define BREATH_RAPID 0x02       //Acute respiratory abnormalities
#define BREATH_SLOW 0x03        //Slow heartbeat
#define BREATH_NONE 0x04        //Radar detection nothing

#define BREATH_VAL 0x02         //Breathing values

#define BREATH_WAVE 0x05        //Respiratory waveform (No analysis for now)

#define SLEEP_INF 0x84          //Sleep information

#define INOUT_BED 0x01          //In bed or out of bed
#define OUT_BED 0x00            //Out of bed
#define IN_BED 0x01             //In bed
#define INOUT_NONE 0x02         //None (Display in real-time detection mode)

#define SLEEP_STATE 0x02        //Sleep state
#define DEEP_SLEEP 0x00         //Deep sleep
#define LIGHT_SLEEP 0x01        //Light sleep
#define AWAKE 0x02              //Awake
#define SLEEP_NONE 0x03         //None (Display in real-time detection mode)

#define AWAKE_TIME 0x03         //Awake time

#define LIGHTSLEEP_TIME 0x04    //Light sleep time

#define DEEPSLEEP_TIME 0x05     //Deep sleep time

#define SLEEP_SCORE 0x06        //Sleep quality score

#define SLEEP_STATUE 0x0C       //Sleep integrated status reporte

#define SLEEP_QUALITY 0x0D      //Comprehensive information reporting on sleep quality

#define SLEEP_ERROR 0x0E        //Abnormal sleep reporte

#define SLEEP_LESS4H 0x00        //Sleep less than 4 hours
#define SLEEP_OVER12H 0x01       //Sleep over 12 hours
#define SLEEP_LONGTIMENOONE 0x02 //Unusual situation, no one for a long time
#define SLEEP_ERRORNONE 0x03     //None

#define reset_frame_len 10      //Reset data frame length
//Reset data frame
const unsigned char breath_reset_frame[10] = {0x53, 0x59, 0x01, 0x02, 0x00, 0x01, 0x0F, 0xBF, 0x54, 0x43};

#define mode_frame_len 10       //Mode selection command frame length
//Mode selection command frame
const unsigned char realtime_mode_frame[10] = {0x53, 0x59, 0x84, 0x0F, 0x00, 0x01, 0x00, 0x40, 0x54, 0x43};
const unsigned char sleepstatus_mode_frame[10] = {0x53, 0x59, 0x84, 0x0F, 0x00, 0x01, 0x01, 0x41, 0x54, 0x43};

//Return status, Use in arduino
//Possible values for sensor_report
#define NOONE 0x01
#define SOMEONE 0x02
#define NONEPSE 0x03
#define STATION 0x04
#define MOVE 0x05
#define BODYVAL 0x06
#define DISVAL 0x07
#define DIREVAL 0x08

#define HEARTRATEVAL 0x09
#define HEARTRATEWAVE 0x10
#define BREATHNOR 0x11
#define BREATHRAPID 0x12
#define BREATHSLOW 0x13
#define BREATHNONE 0x14
#define BREATHVAL 0x15
#define BREATHWAVE 0x16

#define OUTBED 0x17
#define INBED 0x18
#define NOINOUT 0x19
#define SLEEPAWAKE 0x20
#define SLEEPLIGHT 0x21
#define SLEEPDEEP 0x22
#define SLEEPNONE 0x23
#define AWAKETIME 0x24
#define LIGHTTIME 0x25
#define DEEPTIME 0x26
#define SLEEPSCORE 0x27
#define SLEEPSTATUE 0x28
#define SLEEPQUALITY 0x29
#define SLEEPLESS4H 0x30
#define SLEEPOVER12H 0x31
#define LONGTIMENOONE 0x32
#define ERRORNONE 0x33


unsigned int sensor_report = 0, bodysign_val = 0, awake_time = 0, light_time = 0, deep_time = 0, sleep_score = 0, turn_num = 0;
unsigned int heart_rate = 0, heart_point_1 = 0, heart_point_2 = 0, heart_point_3 = 0, heart_point_4 = 0, heart_point_5 = 0;
unsigned int breath_rate = 0, breath_point_1 = 0, breath_point_2 = 0, breath_point_3 = 0, breath_point_4 = 0, breath_point_5 = 0;
unsigned int substantial_move_ratio = 0, samll_move_ratio = 0, apnea_num = 0, sleep_status = 0, sleep_time = 0;
unsigned int awake_time_radio = 0, light_time_radio = 0, deep_time_radio = 0;
unsigned int outbed_time = 0, outbed_num = 0;
float distance = 0;
float Dir_x = 0, Dir_y = 0, Dir_z = 0;
boolean existence;
```

### Instalação

**Passo 1.** Você precisa instalar o software Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**Passo 2.** Inicie o aplicativo Arduino.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Passo 3.** Selecione o modelo da sua placa de desenvolvimento e adicione-o à IDE do Arduino.

- Se você quiser usar **Seeeduino V4.2** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/) para concluir a adição.

- Se você quiser usar **Seeeduino XIAO** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#software) para concluir a adição.

- Se você quiser usar **XIAO RP2040** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#software-setup) para concluir a adição.

- Se você quiser usar **XIAO BLE** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#software-setup) para concluir a adição.

- Se você quiser usar **XIAO ESP32C3** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started/#software-setup) para concluir a adição.

:::caution
Para **XIAO nRF52840**, selecione **Seeed nRF52 mbed-enabled Boards**, caso contrário um erro poderá ser relatado ao executar programas.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png"/></div>
:::

**Passo 4.** Instale a biblioteca de código Arduino.

Comece obtendo a base de código no [GitHub](https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor) e fazendo o download para o seu computador local.

Como você baixou a biblioteca em formato zip, abra sua IDE do Arduino, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo zip que você acabou de baixar e, se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de aviso. Isso significa que a biblioteca foi instalada com sucesso.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Exemplo com Arduino

Agora que temos nossa biblioteca instalada e entendemos as funções básicas, vamos executar alguns exemplos para o nosso XIAO BLE para ver como ele se comporta.

### Materiais Necessários

Antes de concluir os exemplos a seguir, você precisará preparar os seguintes materiais.

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>| <div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="150" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**Sensor 60GHz MR60BHA1**](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**Cabo Flat de Passo 2mm para 2,54mm**|

**Passo 1.** Conecte o dispositivo ao computador através da placa principal. O diagrama de fiação é mostrado na tabela abaixo.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/60GHzradar/30.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Seeed Studio XIAO nRF52840</td>
      <td align="center" />
      <td align="center">Sensor MR60BHA1</td>
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

**Passo 2.** Na barra de menu no canto superior esquerdo da IDE do Arduino, selecione **tool**, escolha o tipo de placa de desenvolvimento que você está usando e selecione a porta serial correspondente.

:::tip
Se você estiver usando **MacOS**, o nome da porta serial do dispositivo geralmente começará com **/dev/cu.usbmodem xxx**, terminando com o nome do dispositivo. Se você estiver usando **Windows**, o nome da porta serial do dispositivo geralmente começará com **COM**, também terminando com o nome do dispositivo.
:::

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

Neste exemplo, demonstraremos como o radar funciona com o nosso popular produto XIAO BLE.

### Demo1 Exportação de dados brutos

Este exemplo irá guiá-lo através do processo de impressão dos dados brutos relatados pelo Sensor via porta serial.

O programa de exemplo a seguir está na pasta de exemplos da biblioteca, chamado **MR60BHA1_print_rawdata**.

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

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

Neste programa, estamos usando a porta de hardware **Serial1** do XIAO nRF52840 para conectar ao Sensor e usamos a porta de hardware **Serial** Serial para enviar os dados, então precisamos inicializar essa porta serial separadamente na função de inicialização `Setup()`.

Na função principal `loop()` usamos a função `recvRadarBytes()` para receber quadros de dados do Sensor e então usamos a função `showData()` para imprimir os quadros de dados recebidos via porta serial.

Neste programa, é importante notar que há um intervalo entre a recepção e a saída de cada dois quadros de dados para evitar um travamento na placa principal. Esse tempo não deve ser inferior a **150ms**.

Isso significa que não há como a placa principal receber todos os quadros de dados relatados pelo Sensor, mas como o número de quadros relatados pelo Sensor é muito grande e frequente, isso não afeta a precisão de usar o Sensor para determinar o ambiente.

Envie o programa. Ao abrir o monitor serial com uma taxa de transmissão de 115200, o resultado deverá ser exibido. A saída deverá se parecer com a imagem abaixo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/2.png"/></div>

### Demo2: Uso da função de detecção de presença humana

Neste exemplo, explicaremos como usar a função de detecção de presença humana e imprimir todos os valores dessa função por meio do monitor serial.

O programa de exemplo a seguir está na pasta de exemplos da biblioteca, chamado **MR60BHA1_human_existence_inf_output**.

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

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
      case DISVAL:
        Serial.print("The sensor judges the distance to the human body to be: ");
        Serial.print(radar.distance, DEC);
        Serial.println(" m");
        Serial.println("----------------------------");
        break;
      case DIREVAL:
        Serial.print("The sensor judges the orientation data with the human body as -- x: ");
        Serial.print(radar.Dir_x);
        Serial.print(" m, y: ");
        Serial.print(radar.Dir_y);
        Serial.print(" m, z: ");
        Serial.print(radar.Dir_z);
        Serial.println(" m");
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
Se você estiver usando a série XIAO ESP32 e não houver retorno de dados do radar mmwave, tente alterar o código acima de ```Serial1.begin(115200);``` para ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Neste exemplo, a função para detectar a presença de um corpo humano é implementada pela função `HumanExis_Func()`. A lógica básica da implementação do programa é que a função `HumanExis_Func()` atribui as informações de status relatadas pelo sensor à variável `sensor_report`. Com base no valor de `sensor_report`, imprimimos então todos os valores naquele estado através da porta serial.

Observe que o `sensor_report` corresponde aos dados de saída da porta serial com indentação. Por exemplo, a variável `bodysign_val` que representa o parâmetro de sinal só é válida quando `sensor_report` é `BODYVAL`, e não está presente em outros `sensor_reports` relatados pelo sensor.

Envie o programa. Ao abrir o monitor serial com uma taxa de baud de 115200, o resultado deverá ser exibido. A saída deve ser semelhante à imagem abaixo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/3.png"/></div>

### Demo3: Uso das funções de respiração e batimento cardíaco em pessoas em repouso

Neste exemplo, usaremos a função `Breath_Heart()` para detectar a respiração e a frequência cardíaca de um corpo humano estacionário.

:::tip
Nossa ênfase está em detectar a respiração e a frequência cardíaca em um corpo humano estacionário. Não use o produto enquanto o corpo humano estiver em movimento, pois limitamos a frequência cardíaca e a respiração do sensor. A frequência cardíaca máxima **não excederá 100** e a frequência respiratória máxima **não excederá 25**.
:::

O seguinte programa de exemplo está na pasta de exemplos da biblioteca chamado **MR60BHA1_Breath_heartbeat_inf_output**.

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");

  // radar.ModeSelect_fuc(1);  //1: indicates real-time transmission mode, 2: indicates sleep state mode.
  //After setting the mode, if you do not see data returned, you may need to re-power the sensor.
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.Breath_Heart();           //Breath and heartbeat information output
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case HEARTRATEVAL:
        Serial.print("Sensor monitored the current heart rate value is: ");
        Serial.println(radar.heart_rate, DEC);
        Serial.println("----------------------------");
        break;
      case HEARTRATEWAVE:  //Valid only when real-time data transfer mode is on
        Serial.print("The heart rate waveform(Sine wave) -- point 1: ");
        Serial.print(radar.heart_point_1);
        Serial.print(", point 2 : ");
        Serial.print(radar.heart_point_2);
        Serial.print(", point 3 : ");
        Serial.print(radar.heart_point_3);
        Serial.print(", point 4 : ");
        Serial.print(radar.heart_point_4);
        Serial.print(", point 5 : ");
        Serial.println(radar.heart_point_5);
        Serial.println("----------------------------");
        break;
      case BREATHNOR:
        Serial.println("Sensor detects current breath rate is normal.");
        Serial.println("----------------------------");
        break;
      case BREATHRAPID:
        Serial.println("Sensor detects current breath rate is too fast.");
        Serial.println("----------------------------");
        break;
      case BREATHSLOW:
        Serial.println("Sensor detects current breath rate is too slow.");
        Serial.println("----------------------------");
        break;
      case BREATHNONE:
        Serial.println("There is no breathing information yet, please wait...");
        Serial.println("----------------------------");
        break;
      case BREATHVAL:
        Serial.print("Sensor monitored the current breath rate value is: ");
        Serial.println(radar.breath_rate, DEC);
        Serial.println("----------------------------");
        break;
      case BREATHWAVE:  //Valid only when real-time data transfer mode is on
        Serial.print("The breath rate waveform(Sine wave) -- point 1: ");
        Serial.print(radar.breath_point_1);
        Serial.print(", point 2 : ");
        Serial.print(radar.breath_point_2);
        Serial.print(", point 3 : ");
        Serial.print(radar.breath_point_3);
        Serial.print(", point 4 : ");
        Serial.print(radar.breath_point_4);
        Serial.print(", point 5 : ");
        Serial.println(radar.breath_point_5);
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
Se você estiver usando a série XIAO ESP32 e não houver retorno de dados do radar mmwave, tente alterar o código acima de ```Serial1.begin(115200);``` para ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```.
:::

Envie o programa. Ao abrir o monitor serial com uma taxa de baud de 115200, o resultado deverá ser exibido. A saída deve ser semelhante à imagem abaixo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/4.png"/></div>

:::caution
Se você quiser ver dados de forma de onda, altere o sensor para o modo de transmissão de dados em tempo real. Após alternar os modos, o sensor pode precisar ser religado para que a alteração tenha efeito.
:::

### Demo4: Uso da função de sono

Neste exemplo, iremos orientá-lo sobre como obter informações sobre o sono utilizando a função `SleepInf_Decode()`. Certifique-se de que você ou a pessoa em teste esteja pronta para ir para a cama antes de usar este exemplo.

:::note
Por padrão, o sensor está no modo de transmissão de estado de sono. Nesse modo, a função de monitoramento do sono está ligada. Se você alternar para o modo de transmissão de dados em tempo real, os dados de sono podem não estar disponíveis. Se quiser alterar o modo de transferência, você pode usar a função `ModeSelect_fuc()` para isso. Exemplos de uso também podem ser encontrados em **MR60BHA1_Transfer_mode_selection** na pasta de exemplos. Após alternar os modos, o sensor pode precisar ser religado para que a alteração tenha efeito.
Os dados relacionados ao sono precisam ser relatados quando uma pessoa está na cama, e o firmware atual, por padrão, considera que alguém está na cama após um estado de pessoa durar 5 minutos.
:::

O seguinte programa de exemplo está na pasta de exemplos da biblioteca chamado **MR60BHA1_Sleep_inf_output**.

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

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
  radar.SleepInf_Decode();           //Sleep-related information output. Data output begins when the monitoring figure is in bed for five minutes.
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case OUTBED:
        Serial.println("Sensor detects someone currently leaving the bed.");
        Serial.println("----------------------------");
        break;
      case INBED:
        Serial.println("Sensor detects that someone is currently in bed.");
        Serial.println("----------------------------");
        break;
      case NOINOUT:
        Serial.println("No subject is detected leaving or going to bed.");
        Serial.println("----------------------------");
        break;
      case SLEEPAWAKE:
        Serial.println("Sensor detects that the monitoring people is awake.");
        Serial.println("----------------------------");
        break;
      case SLEEPLIGHT:
        Serial.println("Sensor detects that the monitoring people is in light sleeping.");
        Serial.println("----------------------------");
        break;
      case SLEEPDEEP:
        Serial.println("Sensor detects that the monitoring people is in deep sleeping.");
        Serial.println("----------------------------");
        break;
      case SLEEPNONE:
        Serial.println("Sleep state of the object is not detected.");
        Serial.println("----------------------------");
        break;
      case AWAKETIME:
        Serial.print("Sensor monitored the awake sleep time is: ");
        Serial.print(radar.awake_time);
        Serial.println(" min");
        Serial.println("----------------------------");
        break;
      case LIGHTTIME:
        Serial.print("Sensor monitored the light sleep time is: ");
        Serial.print(radar.light_time);
        Serial.println(" min");
        Serial.println("----------------------------");
        break;
      case DEEPTIME:
        Serial.print("Sensor monitored the deep sleep time is: ");
        Serial.print(radar.deep_time);
        Serial.println(" min");
        Serial.println("----------------------------");
        break;
      case SLEEPSCORE:
        Serial.print("Sensor judgment sleep score is: ");
        Serial.println(radar.sleep_score);
        Serial.println("----------------------------");
        break;
      case SLEEPSTATUE:
        Serial.println("Sleep integrated state information -- ");
        Serial.print("Human existence: ");
        if(radar.existence)Serial.println("human exis");
        else Serial.println("human non-existent");
        Serial.print("Sleep state: ");
        if(radar.sleep_status == SLEEPDEEP)Serial.println("sleeping soundly");
        else if(radar.sleep_status == SLEEPLIGHT)Serial.println("light sleep");
        else if(radar.sleep_status == SLEEPAWAKE)Serial.println("awake");
        else if(radar.sleep_status == SLEEPNONE)Serial.println("off the bed");
        Serial.print("Average breathing: ");
        Serial.println(radar.breath_rate);
        Serial.print("Average heart rate: ");
        Serial.println(radar.heart_rate);
        Serial.print("Number of turning over during sleep: ");
        Serial.println(radar.turn_num);
        Serial.print("Percentage of substantial exercise during sleep: ");
        Serial.println(radar.substantial_move_ratio);
        Serial.print("Percentage of small-amplitude movements during sleep: ");
        Serial.println(radar.samll_move_ratio);
        Serial.print("Number of apnea: ");
        Serial.println(radar.apnea_num);
        Serial.println("----------------------------");
        break;
      case SLEEPQUALITY:
        Serial.println("Quality of sleep information -- ");
        Serial.print("Sleep score: ");
        Serial.println(radar.sleep_score);
        Serial.print("Total time of sleep: ");
        Serial.print(radar.sleep_time);
        Serial.println(" min");
        Serial.print("Percentage of waking time: ");
        Serial.println(radar.awake_time_radio);
        Serial.print("Percentage of light sleep time: ");
        Serial.println(radar.light_time_radio);
        Serial.print("Percentage of deep sleep time: ");
        Serial.println(radar.deep_time_radio);
        Serial.print("Total time away from bed: ");
        Serial.print(radar.outbed_time);
        Serial.println(" min");
        Serial.print("Total number of times out of bed: ");
        Serial.println(radar.outbed_num);
        Serial.print("The number of turning over during sleep: ");
        Serial.println(radar.turn_num);
        Serial.print("Average breathing: ");
        Serial.println(radar.breath_rate);
        Serial.print("Average heart rate: ");
        Serial.println(radar.heart_rate);
        Serial.print("Number of apnea: ");
        Serial.println(radar.apnea_num);
        Serial.println("----------------------------");
        break;
      case SLEEPLESS4H:
        Serial.print("The monitored subjects slept for less than 4 hours.");
        Serial.println("----------------------------");
        break;
      case SLEEPOVER12H:
        Serial.print("The length of sleep of the monitored subjects exceeded 12 hours.");
        Serial.println("----------------------------");
        break;
      case LONGTIMENOONE:
        Serial.print("Abnormally unoccupied for long periods of time.");
        Serial.println("----------------------------");
        break;
      case ERRORNONE:
        Serial.print("No abnormal information.");
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

Envie o programa. Ao abrir o monitor serial com taxa de baud de 115200, o resultado deverá ser exibido. A saída deve ser semelhante à imagem abaixo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/6.png"/></div>

### Demo5: Enviar dados para o Sensor

Com base nos detalhes fornecidos no manual do usuário, o usuário pode enviar quadros de comando para o sensor para consultar ou definir certos estados ou modos do sensor de acordo com as necessidades reais.

O arquivo .ino chamado **MR60BHA1_Send_frame** na pasta de exemplos da biblioteca do sensor nos mostra como enviar para o sensor um programa que consulta o ID do dispositivo.

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

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

No programa deste exemplo, você pode ver que um array `DevID_buff[10]` é definido, que armazena o número hexadecimal do seu ID de dispositivo consultado, um local por byte.

E o envio é feito por `send_func()`. Os parâmetros passados são o array de quadros a serem enviados, o comprimento do array e se deve enviar em loop.

Se você precisar enviar seus próprios quadros de comando, então você precisa definir o array correto de acordo com o formato de quadro fornecido no manual do usuário.

:::tip
**Sobre o cálculo do dígito de verificação "sum".**

Todos os quadros de dados possuem um bit de checksum para garantir que os dados sejam enviados ou recebidos com precisão. O bit de checksum geralmente está no penúltimo bit do quadro de dados. Ele é calculado somando todos os bits que precedem o bit de verificação e tomando os dois dígitos inferiores em hexadecimal.
Vamos tomar como exemplo um quadro de dados que consulta o ID do dispositivo.
<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>

Pode-se ver que o bit de checksum está no penúltimo bit de todo o quadro de dados. Então começamos somando todos os números hexadecimais anteriores.

`0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160`

Então precisamos pegar os dois dígitos inferiores, que seriam **60**, portanto o checksum deste quadro de dados é **60**. Se quisermos consultar o ID do Sensor, então você pode definir o seguinte array.

`const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};`

:::

Envie o programa. Ao abrir o monitor serial com taxa de baud de 115200, o resultado deverá ser exibido. A saída deve ser semelhante à imagem abaixo.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/5.png"/></div>

Neste ponto, verifique os quadros de dados retornados e se eles correspondem aos quadros de dados retornados conforme descrito no manual do usuário.

Normalmente, nossos comandos não precisam ser repetidos para o Sensor, mas como o Sensor responde com mensagens tão rapidamente que não podemos ter certeza de que receberemos exatamente a mensagem de dados retornada pelo Sensor. Existem duas soluções para esse problema.

- Reenvie o procedimento acima várias vezes.
- Defina o terceiro parâmetro da função `send_func()` (envio cíclico) como `true`. Observe, porém, que enviar repetidamente quadros de dados do tipo de configuração **pode fazer com que o Sensor trave**, portanto use essa função com cautela. Se o Sensor travar, desconecte o pino de alimentação de 5V do Sensor e aguarde alguns instantes para que a função seja retomada.

### Demo6: Redefinir o Sensor

Pode haver momentos em que você tenha problemas com o Sensor detectando anomalias ou quando quiser limpar todas as configurações do Sensor; então você pode redefinir o Sensor de acordo com este exemplo.

O programa de exemplo a seguir está na pasta de exemplos da biblioteca chamado **MR60BHA1_Reset_sensor**.

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

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

Redefinir o Sensor é muito simples, você só precisa chamar `reset_func()`. A redefinição só precisa ser **executada uma vez**, então a usamos na função `Setup()`.

### Demo7: Usando Arduino/Seeeduino

Nossa biblioteca é compatível com Arduino e você também pode escolher o Arduino que tiver em mãos para desenvolver seu projeto com o Sensor.

O Sensor MR60BHA1 se comunica usando a porta serial UART, você só precisa conectar o Sensor ao seu Arduino conforme a fiação abaixo.

<table align="center">
 <tr>
     <td align="center">MR60BHA1 Sensor</td>
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
        <td align="center">TX da porta serial por software</td>
 </tr>
    <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">RX da porta serial por software</td>
 </tr>
</table>

Todas as funções são aplicadas da mesma forma que nas Demos 1 a 6 acima, portanto não iremos repeti-las neste exemplo. Neste exemplo, daremos uma visão geral de como usar a porta serial por software do Arduino para obter informações de dados do Sensor.

:::tip
Para observações sobre a porta serial por software do Arduino, consulte a [documentação oficial do Arduino](https://docs.arduino.cc/learn/built-in-libraries/software-serial).
:::

Para evitar confusão de dados causada pelo uso de Serial tanto para saída quanto para transmissão de dados, no lado do Arduino normalmente usamos uma porta serial por software.

A importação da biblioteca da porta serial por software e a definição dos pinos RX e TX precisam ser feitas anteriormente no programa. O programa a seguir define os pinos **A2** e **A3** como os pinos **RX** e **TX** da porta serial por software.

```c
#include <SoftwareSerial.h>
//Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

//we'll be using software serial
BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);
```

Além disso, não se esqueça de definir a taxa de baud para a porta serial por software na função `Setup()`.

```c
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}
```

Usando a **Demo1** como exemplo, se você quiser usar o Arduino para imprimir os quadros de dados reportados pelo Sensor, então o programa completo é o seguinte.

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

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

### Demo8: Conexão direta ao PC para dados

Você pode consultar esta rotina se quiser usar um computador hospedeiro projetado para o Sensor ou se quiser usar o software serial para obter um quadro de dados completo.

Conecte o Sensor diretamente à porta USB do computador por meio de um dispositivo **UART para USB**. A fiação é mostrada na tabela abaixo.

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr >
 <tr >
     <td align="center">UART para USB</td>
     <td align="center"></td>
        <td align="center">Sensor MR60BHA1</td>
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

Use um software como um assistente de depuração serial para selecionar a porta serial onde o Sensor está localizado.

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/60GHzradar/37.png"/></div>

:::caution
O Sensor MR60BHA1 precisa de uma fonte de alimentação de 5V, caso contrário o Sensor pode não funcionar corretamente.
:::

Após uma conexão bem-sucedida, você verá o Sensor enviando um fluxo constante de mensagens.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/39.png"/></div>

Ao mesmo tempo, você também pode enviar quadros de dados para o Sensor por meio da função de envio do software.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/40.png"/></div>

:::caution
Se você escolher **ASCII** como o formato para envio de dados, cada conjunto de dados precisa ter o prefixo **0x**. Se você escolher **HEX**, então cada conjunto de dados não precisa ter o prefixo **0x**.
:::

## Solução de Problemas

### FAQ1: Este Sensor pode detectar mais de uma pessoa ao mesmo tempo no mesmo ambiente?

> R: Não é possível. Este Sensor só pode ser usado em um único objeto vivo. Se mais de uma pessoa ou animal estiver dentro do alcance de monitoramento, isso terá um efeito nos resultados do monitoramento.

### FAQ2: Por que não consigo ver nada no monitor serial com o XIAO ESP32C3?

> A função de porta serial do XIAO ESP32C3 não é totalmente consistente com o hardware Arduino em geral, e usar Serial1 diretamente pode fazer com que a porta serial USB não funcione. Para casos de aplicação relacionados, consulte o [capítulo Serial do XIAO ESP32C3](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Pin_Multiplexing/#serial) para mais detalhes.

## Recursos

- **[PDF]** [Folha de Dados do Sensor de Radar de Respiração e Batimentos Cardíacos](https://files.seeedstudio.com/wiki/mmWave-radar/MR60BHA1_Datasheet.pdf)
- **[PDF]** [Manual do Usuário do Sensor de Radar de Respiração e Batimentos Cardíacos-V1.9](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60BHA1_user_manual-V1.9.pdf)
- **[PDF]** [Manual do Usuário do Sensor de Radar de Respiração e Batimentos Cardíacos-V2.3](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60BHA1_userManual_V2.3.pdf)
- **[EXE]** [Software Upper Computer_versão antiga](https://files.seeedstudio.com/wiki/60GHzradar/Human-Vital-Sign-Radar.exe)
- **[EXE]** [Software Upper Computer_nova versão](https://files.seeedstudio.com/wiki/60GHzradar/MR60BHA1_new.exe)
- **[PPTX]** [Série de sensores mmWave da Seeed V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)
- **[ZIP]** [60G-Radar-heartbeat-3D](https://files.seeedstudio.com/wiki/mmWave-radar/60G-Radar-heartbeat-3D.zip)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
