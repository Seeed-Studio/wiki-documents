---
description: Introdução sobre como desenvolver Sensor mmWave no XIAO.
title: Desenvolvimento de mmWave de 24GHz em XIAO e Arduino
keywords:
  - mmwave
  - radar
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /mmwave_for_xiao_arduino
last_update:
  date: 11/13/2023
  author: Citric
createdAt: '2023-11-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/mmwave_for_xiao_arduino/
---

# Desenvolvimento do Sensor mmWave de 24GHz em XIAO e Arduino

Esta seção descreve como usar a biblioteca e o desenvolvimento secundário do mmWave para XIAO.

:::caution
Todo o conteúdo deste Wiki se aplica apenas ao 24GHz mmWave para XIAO e não pode ser usado em outros sensores de ondas milimétricas.
:::

## Primeiros Passos

### Preparações de Hardware

Antes de começarmos o conteúdo do tutorial deste artigo, recomendamos que você adquira qualquer um dos XIAOs que temos atualmente à venda para poder usar o sensor de ondas milimétricas.

<table align="center">
	<tr>
		<th>Seeed Studio XIAO SAMD21</th>
		<th>Seeed Studio XIAO RP2040</th>
		<th>Seeed Studio XIAO nRF52840 (Sense)</th>
		<th>Seeed Studio XIAO ESP32C3</th>
        <th>Seeed Studio XIAO ESP32S3</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>

Nos tutoriais deste artigo, usaremos o XIAO ESP32C3 e o Sensor mmWave como exemplos de uso para guiá-lo sobre como usar as bibliotecas Arduino do sensor e recursos relacionados.

<table align="center">
	<tr>
		<th>Seeed Studio XIAO ESP32C3</th>
        <th>24GHz mmWave for XIAO</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/1.png" style={{width:150, height:'auto'}}/></div></td>
	</tr>
    <tr>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>

O sensor é projetado para compatibilidade com XIAO, portanto, em geral, se você quiser usar este sensor, precisa preparar um XIAO e instalar o conector de pinos fêmea em fileira para o sensor. Ao conectar ao XIAO, preste atenção especial à direção de instalação do sensor, não o conecte invertido, caso contrário há grande chance de queimar o sensor ou o XIAO.

:::caution
A direção correta a ser seguida é que a antena do sensor deve estar voltada para fora.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

Depois de confirmar que a direção da conexão está correta, você pode conectar o cabo tipo USB-C ao computador ou à fonte de alimentação, e o sensor começará a funcionar.

### Preparações de Software

Como a taxa de transmissão (`baud rate`) padrão usada pelo sensor é 256000, e a taxa de transmissão da porta serial por software projetada pelo XIAO pode não conseguir satisfazer uma transmissão de dados em `baud rate` tão alta, precisamos usar um software para ajustar o `baud rate` do sensor antes de usá-lo. Em seguida, baixe o APP correspondente de acordo com o sistema do celular que você está usando.

:::note
O APP não consegue ler o `baud rate`. Mesmo após a modificação, o APP ainda exibe o `baud rate` padrão.
:::

- [Baixar HLKRadarTool do Google Play](https://play.google.com/store/apps/details?id=com.hlk.hlkradartool).

- [Baixar HLKRadarTool da App Store](https://apps.apple.com/us/app/hlkradartool/id1638651152).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/3.png" style={{width:500, height:'auto'}}/></div>

## Visão Geral da Biblioteca Arduino

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Primeiros Passos com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave_for_XIAO" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Função

Antes de começarmos a desenvolver um sketch, vamos olhar as funções disponíveis da biblioteca.

- `Seeed_HSP24(Stream &serial)` —— Usado para passar a porta serial à qual o sensor está conectado e iniciar a inicialização do sensor.
    - **Parâmetros de Entrada**:

        - **serial**: A porta serial à qual o sensor está conectado.

- `Seeed_HSP24(Stream &serial, Stream &debugSerial)` —— Usado para passar a porta serial à qual o sensor está conectado, adicionar a porta serial de depuração e iniciar a inicialização do sensor.
    - **Parâmetros de Entrada**:

        - **serial**: A porta serial à qual o sensor está conectado.
        - **debugSerial**: Habilita a depuração serial e faz a saída na porta serial passada.

- `String getVersion()` —— Obtém o número da versão de software do sensor.
    - **Retorno**: O número da versão de software do sensor.

- `RadarStatus getStatus()` —— Obtém as informações de status do sensor, todas as informações reportadas pelo sensor serão analisadas por esta função.
    - **Retorno**: 
        - **radarStatus.radarMode**: Modo de Engenharia ou Modo Básico. 1 corresponde ao Modo de Engenharia e 2 corresponde ao Modo Básico.
        - **radarStatus.targetStatus**: Indica a situação atual do objeto monitorado. Existem quatro situações ao todo (NoTarget): a primeira é nenhuma pessoa detectada (MovingTarget), a segunda é alguém detectado como parado (StaticTarget), a terceira é detectado ao mesmo tempo (BothTargets) e a quarta é uma anomalia (ErrorFrame). Onde BothTarget se refere ao movimento de alguém. Como o sensor monitora o ambiente atual, a energia de movimento e a energia estacionária excedem o limite definido, por isso nomeamos como "BothTarget"; se apenas a energia de movimento exceder o limite, então ele irá gerar "MovingTarget".
        - **radarStatus.distance**: Este valor se refere à distância que o sensor detecta em relação ao objeto detectado.
        - **radarStatus.radarMovePower.moveGate** (Válido no modo de engenharia): Este array armazena os valores de energia de movimento para diferentes janelas de distância.
        - **radarStatus.radarStaticPower.staticGate** (Válido no modo de engenharia): Este array armazena os valores de energia estática para diferentes janelas de distância.
        - **radarStatus.photosensitive** (Effective in engineering mode): Este valor se refere ao valor de fotosensibilidade do sensor, intervalo 0-255.

- `DataResult sendCommand(const byte* sendData, int sendDataLength)` —— Os comandos são enviados ao sensor através desta função.
    - **Input Parameters**:
        - **sendData**: O array de quadros de comando enviados.
        - **sendDataLength**: O comprimento do quadro de comando enviado.

    - **Return**:
        - **resultBuffer**: Aponta para um array alocado dinamicamente.
        - **length**: Comprimento do array.

- `AskStatus setDetectionDistance(int distance,int times)` —— Configure o portão de distância máxima e a duração sem ocupação com esta função.
    - **Input Parameters**:
        - **distance**: Configura o portão de distância máxima.
        - **times**: Tempo de duração sem ocupação.

    - **Return**:
        - Sucesso 0x00 ou Erro 0x01.

- `AskStatus setGatePower(int gate,int movePower, int staticPower)` —— Diferentes portões de distância, bem como sensibilidades, são configurados com esta função.
    - **Input Parameters**:
        - **gate**: Distância até a porta, intervalo 0-8 m.
        - **movePower**: O valor de energia que aciona o limiar de movimento.
        - **staticPower**: O valor de energia que aciona o limiar de repouso.

    - **Ruturn**:
        - Sucesso 0x00 ou Erro 0x01.

- `RadarStatus getConfig()` —— Lê os valores de parâmetro do sensor de configuração.
    - **Return**:
        - **radarStatus.detectionDistance**: Número de portões de distância de detecção de movimento para o radar.
        - **radarStatus.moveSetDistance**: Número de portões de distância de detecção estacionária para o radar.
        - **radarStatus.staticSetDistance**: Portão de alcance de detecção mais longo do radar.
        - **radarStatus.noTargrtduration**: Duração sem pessoas.


- `AskStatus setResolution(int resolution)` —— Define a resolução da distância até a porta, 1 é 0,25M, 0 é 0,75M. Padrão 0,75M.
    - **Input Parameters**:
        - **resolution**: 1 é 0,25M, 0 é 0,75M. Padrão 0,75M.

    - **Ruturn**:
        - Sucesso 0x00 ou Erro 0x01.

- `RadarStatus getResolution()` —— Obtém a resolução da distância até a porta, 1 é 0,25M, 0 é 0,75M. Padrão 0,75M.
    - **Ruturn**:
        - **radarStatus.resolution**: 1 é 0,25M, 0 é 0,75M. Padrão 0,75M.

- `AskStatus rebootRadar()` —— Comando de reinicialização do radar.
    - **Ruturn**:
        - Sucesso 0x00 ou Erro 0x01.

- `AskStatus refactoryRadar()` —— Restaura o radar para as configurações de fábrica.
    - **Ruturn**:
        - Sucesso 0x00 ou Erro 0x01.

- `AskStatus enableEngineeringModel()` —— Habilita a saída em modo de engenharia do sensor.
    - **Ruturn**:
        - Sucesso 0x00 ou Erro 0x01.

- `AskStatus disableEngineeringModel()` —— Sai da saída em modo de engenharia.
    - **Ruturn**:
        - Sucesso 0x00 ou Erro 0x01.


### Variáveis Padrão

```cpp
#define BUFFER_SIZE 256     // Serial Buffer Size

class Seeed_HSP24
{
    public:
        static const int FRAME_START_SIZE = 4;
        static const int FRAME_END_SIZE = 4;

        static const byte frameStart[FRAME_START_SIZE];
        static const byte frameEnd[FRAME_END_SIZE];
        static const byte frameAskStart[FRAME_START_SIZE];
        static const byte frameAskEnd[FRAME_END_SIZE];

        struct RadarMovePower // Energy value per movement distance gate
        {
            int moveGate[9] = {-1, -1, -1, -1, -1, -1, -1, -1, -1};
        };

        struct RadarStaticPower // Energy value per stationary distance gate
        {
            int staticGate[9] = {-1, -1, -1, -1, -1, -1, -1, -1, -1};
        };

        //  Define the TargetStatus enum class
        enum class AskStatus : byte
        {
            Success = 0x00, // Success
            Error = 0x01,   // Failed
        };

        //  定义TargetStatus枚举类
        enum class TargetStatus : byte
        {
            NoTarget = 0x00,     // No target
            MovingTarget = 0x01, // Moving target
            StaticTarget = 0x02, // Static target
            BothTargets = 0x03,  // It can be interpreted as motion, meaning that both the set motion and stationary thresholds are above the set value
            ErrorFrame = 0x04    // Failed to get status
        };

        // Define the RadarStatus structure
        struct RadarStatus
        {
            TargetStatus targetStatus = TargetStatus::ErrorFrame; // Target status of the radar
            int distance = -1;                                    // Target distance of the radar in mm
            int moveSetDistance = -1;                             // The number of motion detection distance gates of the radar, which generally do not have to be configured
            int staticSetDistance = -1;                           // Number of static detection distance gates of the radar, which generally do not have to be configured
            int detectionDistance = -1;                           // Radar's longest detection range gate
            int resolution = -1;                                  // Distance gate resolution of radar
            int noTargrtduration = -1;                            // Unmanned duration
            int radarMode = -1;                                   // Used to distinguish whether the module is in basic reporting mode (2) or engineering reporting mode (1)
            RadarMovePower radarMovePower;                        // Exercise Energy Value
            RadarStaticPower radarStaticPower;                    // Stationary energy value
            int photosensitive = -1;                              // Photosensitive 0-255
        };

        // Used to return the result of an issued command
        struct DataResult
        {
            byte *resultBuffer; // Points to a dynamically allocated array
            int length;         // Length of the array
        };
};
```

### Instalação

Como você já baixou a biblioteca zip, abra sua IDE do Arduino, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo zip que você acabou de baixar, e se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de aviso. Isso significa que a biblioteca foi instalada com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

## Exemplo com XIAO

Agora que temos nossa biblioteca instalada e entendemos as funções básicas, vamos executar alguns exemplos para nosso Sensor mmWave de 24GHz para ver como ele se comporta.

**Passo 1.** Inicie o aplicativo Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

**Passo 2.** Selecione o modelo da sua placa de desenvolvimento e adicione-o à IDE do Arduino.

- Se você quiser usar **Seeed Studio XIAO SAMD21** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO RP2040** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#software-setup)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO nRF52840** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#software-setup)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO ESP32C3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started#software-setup)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO ESP32S3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started#software-preparation)** para concluir a adição.

:::tip
Este tutorial usará o XIAO ESP32C3 como exemplo.
:::

**Passo 3.** Conecte o sensor ao XIAO e conecte o XIAO ao PC por meio de um cabo do tipo USB-C.

**Passo 4.** Abra o APP **HLKRadarTool** baixado e configure a taxa de baud apropriada para o sensor.

Abra o aplicativo, e o aplicativo procura por dispositivos de radar próximos. O nome de broadcast do dispositivo é **HLK-LD2410_xxxx** (xxxx são os últimos quatro dígitos do endereço MAC).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/6.png" style={{width:500, height:'auto'}}/></div>

Na opção More no canto superior direito do software, você pode acessar o menu de configurações para definir parâmetros e recursos personalizados para o sensor. Defina a taxa de baud do sensor para **9600** e salve.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/15.png" style={{width:400, height:'auto'}}/></div>

Depois, aguarde o reinício do sensor.

**Passo 5.** Adicione as bibliotecas necessárias.

Além das bibliotecas para os sensores que você precisa adicionar ao seu ambiente Arduino, se você estiver usando um **XIAO da série ESP32**, talvez seja necessário instalar separadamente as bibliotecas para as portas de soft-serial para poder usar os exemplos fornecidos.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/plerup/espsoftwareserial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Demo 1. Saída em modo básico

Para o primeiro exemplo de programa, vamos analisar as informações gerais reportadas pelo sensor. Isso representará as principais informações funcionais de saída deste produto. Por exemplo, dados sobre presença humana, movimento, distância, etc.

```cpp
#if defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
#error "XIAO nRF52840 please use the non-mbed-enable version."
#endif

#include <SoftwareSerial.h>
#include <mmwave_for_xiao.h>

// Define the SoftwareSerial object, D2 as RX, D3 as TX, connect to the serial port of the mmwave sensor
SoftwareSerial COMSerial(D2, D3);

// Creates a global Serial object for printing debugging information
#define ShowSerial Serial

// Initialising the radar configuration
// Seeed_HSP24 xiao_config(COMSerial, ShowSerial);
Seeed_HSP24 xiao_config(COMSerial);

Seeed_HSP24::RadarStatus radarStatus;

void setup() {
  COMSerial.begin(9600);
  ShowSerial.begin(9600);
  delay(500);

  ShowSerial.println("Programme Starting!");

  xiao_config.disableEngineeringModel();
}

void loop() {
  int retryCount = 0;
  const int MAX_RETRIES = 10;  // Maximum number of retries to prevent infinite loops

  //Get radar status
  do {
    radarStatus = xiao_config.getStatus();
    retryCount++;
  } while (radarStatus.targetStatus == Seeed_HSP24::TargetStatus::ErrorFrame && retryCount < MAX_RETRIES);

  //Parses radar status and prints results from debug serial port
  if (radarStatus.targetStatus != Seeed_HSP24::TargetStatus::ErrorFrame) {
    ShowSerial.print("Status: " + String(targetStatusToString(radarStatus.targetStatus)) + " ---- ");
    ShowSerial.println("Distance: " + String(radarStatus.distance) + "  Mode: " + String(radarStatus.radarMode));
  }
  delay(200);
}

// Parsing the acquired radar status
const char* targetStatusToString(Seeed_HSP24::TargetStatus status) {
  switch (status) {
    case Seeed_HSP24::TargetStatus::NoTarget:
      return "NoTarget";
    case Seeed_HSP24::TargetStatus::MovingTarget:
      return "MovingTarget";
    case Seeed_HSP24::TargetStatus::StaticTarget:
      return "StaticTarget";
    case Seeed_HSP24::TargetStatus::BothTargets:
      return "BothTargets";
    default:
      return "Unknown";
  }
}
```

Depois de compilar e fazer o upload do programa, abra o monitor serial e ajuste a taxa de transmissão para 9600. Se tudo correr bem, você deverá ver a seguinte saída de resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/16.png" style={{width:700, height:'auto'}}/></div>


### Demo 2. Saída em modo de engenharia

Para o segundo exemplo de programa, vamos ativar o envio de dados de engenharia do sensor e analisar essas informações de engenharia. Em comparação com o modo básico, as informações de engenharia possuem mais valores de energia de movimento e valores de energia estática para diferentes portas de distância. A exibição desses valores permite visualizar as mudanças de energia dinâmica e estática no ambiente atual, facilitando o ajuste dos gatilhos dos sensores para determinar se há alguém presente, parado ou em movimento, de acordo com a situação real.

```cpp
#if defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
#error "XIAO nRF52840 please use the non-mbed-enable version."
#endif

#include <SoftwareSerial.h>
#include <mmwave_for_xiao.h>

// Define the SoftwareSerial object, D2 as RX, D3 as TX, connect to the serial port of the mmwave sensor
SoftwareSerial COMSerial(D2, D3);

// Creates a global Serial object for printing debugging information
#define ShowSerial Serial

// Initialising the radar configuration
// Seeed_HSP24 xiao_config(COMSerial, ShowSerial);
Seeed_HSP24 xiao_config(COMSerial);

Seeed_HSP24::RadarStatus radarStatus;

void setup() {
  COMSerial.begin(9600);
  ShowSerial.begin(9600);
  delay(500);

  ShowSerial.println("Programme Starting!");

  xiao_config.enableEngineeringModel();
}

void loop() {
  int retryCount = 0;
  const int MAX_RETRIES = 10;  // Maximum number of retries to prevent infinite loops

  //Get radar status
  do {
    radarStatus = xiao_config.getStatus();
    retryCount++;
  } while (radarStatus.targetStatus == Seeed_HSP24::TargetStatus::ErrorFrame && retryCount < MAX_RETRIES);

  //Parses radar status and prints results from debug serial port
  if (radarStatus.targetStatus != Seeed_HSP24::TargetStatus::ErrorFrame) {
    ShowSerial.print("Status: " + String(targetStatusToString(radarStatus.targetStatus)) + "  ----   ");
    ShowSerial.println("Distance: " + String(radarStatus.distance) + "  Mode: " + String(radarStatus.radarMode));

    if (radarStatus.radarMode == 1) {
      ShowSerial.print("Move:");
      for (int i = 0; i < 9; i++) {
        ShowSerial.print(" " + String(radarStatus.radarMovePower.moveGate[i]) + ",");
      }
      ShowSerial.println("");
      ShowSerial.print("Static:");
      for (int i = 0; i < 9; i++) {
        ShowSerial.print(" " + String(radarStatus.radarStaticPower.staticGate[i]) + ",");
      }
      ShowSerial.println("");
      ShowSerial.println("Photosensitive: " + String(radarStatus.photosensitive));
    }
  }
  delay(100);
}

// Parsing the acquired radar status
const char* targetStatusToString(Seeed_HSP24::TargetStatus status) {
  switch (status) {
    case Seeed_HSP24::TargetStatus::NoTarget:
      return "NoTarget";
    case Seeed_HSP24::TargetStatus::MovingTarget:
      return "MovingTarget";
    case Seeed_HSP24::TargetStatus::StaticTarget:
      return "StaticTarget";
    case Seeed_HSP24::TargetStatus::BothTargets:
      return "BothTargets";
    default:
      return "Unknown";
  }
}
```

Depois de compilar e fazer o upload do programa, abra o monitor serial e ajuste a taxa de transmissão para 9600. Se tudo correr bem, você deverá ver a seguinte saída de resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/17.png" style={{width:800, height:'auto'}}/></div>

### Demo 3. Consulta de outras configurações e restauração das configurações de fábrica

No terceiro exemplo, fornecemos um método para restaurar as configurações do sensor e alguns outros exemplos de uso das funções de consulta de parâmetros.

:::caution
Deve-se prestar atenção especial ao fato de que, quando o sensor é restaurado para as configurações de fábrica, isso também significa que a taxa de transmissão do sensor será restaurada para **256000**. Você precisa seguir os passos anteriores para redefinir a taxa de transmissão para **9600** no aplicativo do seu celular antes de poder usar outros programas XIAO.
:::

```cpp
#if defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
#error "XIAO nRF52840 please use the non-mbed-enable version."
#endif

#include <SoftwareSerial.h>
#include <mmwave_for_xiao.h>

// Define the SoftwareSerial object, D2 as RX, D3 as TX, connect to the serial port of the mmwave sensor
SoftwareSerial COMSerial(D2, D3);

// Creates a global Serial object for printing debugging information
#define ShowSerial Serial

// Initialising the radar configuration
// Seeed_HSP24 xiao_config(COMSerial, ShowSerial);
Seeed_HSP24 xiao_config(COMSerial);

Seeed_HSP24::RadarStatus radarStatus;

void setup() {
  COMSerial.begin(9600);
  ShowSerial.begin(9600);
  while(!ShowSerial);                   // Turn on the serial monitor and start executing
  delay(500);

  ShowSerial.println("Programme Starting!");

  ShowSerial.print("Sensor Software Version: ");
  ShowSerial.println(xiao_config.getVersion());

  radarStatus = xiao_config.getConfig();
  if (radarStatus.detectionDistance != -1) {
    ShowSerial.println("Detection Distance: " + String(radarStatus.detectionDistance) + " m ");
    ShowSerial.println("Moveing Set Distance: " + String(radarStatus.moveSetDistance) + " m ");
    ShowSerial.println("Static Set Distance: " + String(radarStatus.staticSetDistance) + " m ");
    ShowSerial.println("No Target Duration Time: " + String(radarStatus.noTargrtduration) + " seconds ");
  }
  else ShowSerial.println("Failed to get configuration information, please retry.");

  /*** Restore or reset the radar settings, please operate with caution.
   * * After restoring or resetting the factory settings, please re-modify 
   * * the baud rate to 9600 before using XIAO!
   * */
  xiao_config.refactoryRadar();
//   xiao_config.rebootRadar();                // Reboot the Sensor
}

void loop() {}
```

Este programa executará um reset após você abrir o monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/18.png" style={{width:600, height:'auto'}}/></div>


## Solução de Problemas

### P1: Estou usando o XIAO nRF52840 (Sense), qual versão da placa de desenvolvimento devo escolher?

Você deve usar a versão não-mbed do pacote da placa de desenvolvimento XIAO nRF52840, pois ela contém as bibliotecas de porta serial por software necessárias para o programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/19.png" style={{width:800, height:'auto'}}/></div>

### P2: Por que estou obtendo quadros perdidos e fluxos de dados do sensor corrompidos?

Isso provavelmente acontece porque você não modificou o baud rate do sensor. O baud rate padrão do firmware de fábrica deste produto é 256000. A porta serial por software do XIAO pode não ser capaz de lidar com um fluxo de dados em velocidade tão alta, então o programa pode travar de forma anormal e não conseguir analisar corretamente os quadros de dados. Portanto, reduza o baud rate e execute o programa novamente. Recomendamos usar um baud rate de **9600**.

### P3: Por que o fluxo de dados atrasa de 1 a 2 segundos ao usar o Demo2?

Isso pode ser um fenômeno normal. O fluxo de dados no modo de engenharia é grande, a porta serial por software ocupa a CPU para processar os dados de forma limitada, então ela fará uma pausa de vez em quando.


## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
