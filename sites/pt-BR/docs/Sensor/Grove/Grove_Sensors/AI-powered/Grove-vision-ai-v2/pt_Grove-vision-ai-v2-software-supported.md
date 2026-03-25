---
description: Primeiros passos com Grove Vision AI V2 e a plataforma de software
title: Suporte de Software
keywords:
  - vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_vision_ai_v2_software_support
last_update:
  date: 12/12/2023
  author: Citric
createdAt: '2023-12-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/grove_vision_ai_v2_software_support/
---

# Visão Geral dos Softwares Suportados

Existem dois métodos para habilitar o Grove Vision AI Module V2:

- [**Primeiros passos sem código com SenseCraft AI**](#jump1)
   - [O que é SenseCraft AI?](#jump2)
   - [Primeiros passos com SenseCraft AI Model Assistant](#jump3)
- [**Programar no Arduino conectando com a placa Seeed Studio XIAO**](#jump4)
   - [Introdução à Biblioteca Arduino](#jump5)
   - [Primeiros passos com Seeed Studio XIAO](#jump6)

## <span id="jump1"> Primeiros passos sem código com SenseCraft AI </span>

Nesta seção, vamos guiá-lo no uso do SenseCraft AI Model Assistant para implantar e observar rapidamente os resultados, sem código e sem outras placas de desenvolvimento:

### <span id="jump2"> O que é SenseCraft AI?  </span>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft AI capacita os usuários a implantar com facilidade uma vasta biblioteca de modelos de IA públicos em seus dispositivos de borda:

- reComputer (NVIDIA Jetson)
- Placa Seeed Studio XIAO S3
- Módulos Vision AI e muito mais

Ele oferece uma experiência contínua e fácil de usar, permitindo que você implante modelos de IA públicos diretamente em seus dispositivos de borda com apenas alguns cliques. 

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Saiba Mais 📕</font></span></strong></a>
</div>

Ele inclui:

- Serviço de software Model Assistant
- Serviço de software Device Workspace

Nesta seção, usaremos o "Model Assistant" para habilitar o módulo. Com o suporte do SenseCraft AI Model Assistant, você pode facilmente enviar uma grande variedade de modelos cocriados e observar diretamente os resultados.




### <span id="jump3"> Primeiros passos com SenseCraft AI Model Assistant  </span>

<!-- SenseCraft is a series of software services developed by Seeed Studio to provide users with faster and simpler software services and applications. With three product lines, Data line, Edge line and AI line, SenseCraft is able to fulfill users' needs in data services, device management and AI applications. No matter what solution you need, SenseCraft can provide you with efficient and reliable solutions and customized services. -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>
 -->
Agora iremos iniciar rapidamente os módulos com o SenseCraft AI, e isso exigirá apenas o módulo.

#### Passo 1. Escolher o modelo

Primeiro, precisamos abrir a página principal do SenseCraft AI Model Assistant.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Ir para SenseCraft AI</font></span></strong></a>
</div>
<br />

Escolha o modelo que você deseja implantar e clique nele.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a1.png" style={{width:1000, height:'auto'}}/></div>

Você pode ver a descrição deste modelo aqui e, se ele atender às suas necessidades, clique no botão **Deploy Model** no lado direito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a2.png" style={{width:1000, height:'auto'}}/></div>

#### Passo 2. Conectar o módulo e enviar um modelo adequado

Use um cabo tipo Type-C para conectar o Grove Vision AI V2 ao seu computador e, em seguida, clique no botão **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a3.png" style={{width:600, height:'auto'}}/></div>

Clique no botão **Confirm**. No canto superior esquerdo desta página, você pode selecionar **USB Single Serial**. Em seguida, clique no botão **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a4.png" style={{width:600, height:'auto'}}/></div>

Permaneça nesta página por 1–2 minutos até que o modelo seja enviado com sucesso. Observe que mudar para outra aba de página durante esse processo pode resultar em falha no envio (nossa equipe está trabalhando ativamente para resolver esse problema, e ele será corrigido em breve).

#### Passo 3. Observações

Quando o modelo for enviado com sucesso, você conseguirá ver o feed ao vivo da câmera do Grove Vision AI V2 na Pré-visualização à esquerda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a5.png" style={{width:1000, height:'auto'}}/></div>

<br />

Podemos ver que, nas Configurações de Pré-visualização no lado esquerdo, há duas opções de configuração que podem ser alteradas para otimizar a precisão de reconhecimento do modelo.

- **Confidence:** Confidence refere-se ao nível de certeza ou probabilidade atribuído por um modelo às suas previsões.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

- **IoU:** IoU é usado para avaliar a precisão das caixas delimitadoras previstas em comparação com as caixas delimitadoras verdadeiras.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

:::tip
- **Confidence:** Isso indica o quão certo o modelo de visão computacional está sobre seu palpite. Pense nisso como uma porcentagem: quanto maior a confiança, mais seguro o modelo está.
- **IoU (Intersection over Union):** Isso mede quanto de sobreposição existe entre duas caixas. Imagine que você desenhou uma caixa em volta de um objeto em uma imagem, e o modelo também desenhou uma caixa. O IoU indica quão bem essas caixas coincidem. Um IoU mais alto significa que as caixas estão mais próximas uma da outra.
:::

Neste ponto, você terminou de enviar o modelo e observar os resultados.

## <span id="jump4"> Programar no Arduino conectando com a placa Seeed Studio XIAO </span>

### <span id="jump5"> Introdução à Biblioteca Arduino </span>

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Grove Vision AI usa o chip WiseEye2 HX6538, o processamento de imagem e a inferência do modelo são processados localmente no Grove Vision AI e, em seguida, o resultado é enviado para o XIAO via IIC ou UART, portanto, o principal objetivo desta biblioteca é processar o fluxo de dados do Grove Vision AI e ela não envolve inferência de modelo ou processamento de imagem. Assim, o principal objetivo desta biblioteca é processar o fluxo de dados do Grove Vision AI, sem envolver inferência de modelo ou processamento de imagem.

O Grove Vision AI se comunica com o XIAO via IIC, e o endereço IIC do dispositivo é `0x62`. A transferência das informações de imagem é feita pela porta serial USB.

#### Função

Antes de começarmos a desenvolver um sketch, vamos analisar as funções disponíveis da biblioteca.

- `bool begin(TwoWire *wire = &Wire, uint16_t address = I2C_ADDRESS, uint32_t wait_delay = 2, uint32_t clock = 400000)` —— Inicializa o Grove Vision AI V2.

  **Parâmetros de Entrada:**
    - `TwoWire *wire` —— Este ponteiro aponta para um objeto TwoWire, normalmente usado para se comunicar com dispositivos I2C.
    - `uint16_t address` —— Este é o endereço do dispositivo I2C que identifica o dispositivo específico conectado ao barramento I2C.
    - `uint32_t wait_delay` —— O atraso (em milissegundos) para aguardar uma resposta antes de enviar um comando.
    - `uint32_t clock` —— Esta é a taxa de clock do barramento I2C (em Hz).

  **Retorno:** `True` ou `False`. Inicialização bem-sucedida é true, falha na inicialização é false.


- `int invoke(int times = 1, bool filter = 0, bool show = 0)` —— Usada para enviar comandos INVOKE ao Grove Vision AI V2 para permitir que o Grove Vision AI comece a chamar modelos, fazer inferência e reconhecimento.

  **Parâmetros de Entrada:** 
    - `int times` —— O número de Invoke.
    - `fileter` —— Significa que a resposta do evento só será enviada se o último resultado for diferente do resultado anterior (comparado por geometria e pontuação).
    - `bool show` —— Significa que a resposta do evento só será enviada se o último resultado for diferente do resultado anterior (comparado por geometria e pontuação).

:::note
Para mais informações sobre as definições de protocolo do Grove Vision AI, você pode ler a [**documentação do protocolo**](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md).
:::

  **Retorno:** `CMD_OK` ou `CMD_ETIMEDOUT`. Retorna **CMD_OK** se o modelo foi habilitado com sucesso, caso contrário retorna **CMD_ETIMEDOUT**.

- `int available()` —— Verifica quantos bytes de dados estão disponíveis para leitura do dispositivo conectado via IIC.

  **Parâmetros de Entrada:** Nenhum.

  **Retorno:** O número de bytes de dados que podem ser lidos do dispositivo.

- `int read(char *data, int length)` —— Lê dados do Grove Vision AI via interface IIC. A finalidade da função é preencher o array apontado pelo ponteiro de dados fornecido com os dados lidos.

  **Parâmetros de Entrada:** 
    - `char *data` —— Um array para armazenar dados.
    - `int length` —— O comprimento dos dados a serem lidos.

  **Retorno:** O comprimento dos dados a serem lidos.

- `int write(const char *data, int length)` —— Escreve dados no dispositivo especificado via interface I2C.

  **Parâmetros de Entrada:**
    - `const char *data` —— O conteúdo dos dados a serem escritos.
    - `int length` —— O comprimento dos dados a serem escritos.

  **Retorno:** O comprimento dos dados a serem escritos.

- `std::vector<boxes_t> &boxes() { return _boxes; }` —— Produz os resultados na forma de uma caixa.

```cpp
typedef struct
{
    uint16_t x;      // Horizontal coordinates of the centre of the box
    uint16_t y;      // Vertical coordinates of the centre of the box
    uint16_t w;      // Width of the identification box
    uint16_t h;      // Height of the identification box
    uint8_t score;   // Confidence in identifying as target
    uint8_t target;  // Target
} boxes_t;
```

- `std::vector<classes_t> &classes() { return _classes; }` —— Produz os resultados como categorias.

```cpp
typedef struct
{
    uint8_t target;  // Target
    uint8_t score;   // Confidence in identifying as target
} classes_t;
```

- `std::vector<point_t> &points() { return _points; }` —— Produz o resultado como um ponto.

```cpp
typedef struct
{
    uint16_t x;      // Horizontal coordinates of the identification point
    uint16_t y;      // Vertical coordinates of identification point
    uint16_t z;      // Relative depth coordinates of the identification point
    uint8_t score;   // Confidence in identifying as target
    uint8_t target;  // Target
} point_t;
```

:::note
A coordenada de profundidade aqui é relativa; isso não significa que o Grove Vision AI tenha recurso de câmera de profundidade, mas sim que o algoritmo calcula uma coordenada de profundidade relativa que é válida em alguns modelos (por exemplo, modelos face-3d).
:::

- `perf_t &perf() { return _perf; }` —— Tempo de processamento de imagem e inferência.

```cpp
typedef struct
{
    uint16_t prepocess;   // Pre-processing time
    uint16_t inference;   // inference time
    uint16_t postprocess; // Post-processing time
} perf_t;
```

:::note
As saídas nem sempre fornecem informações que identificam caixas e pontos, dependendo do modelo.
:::

#### Instalação

Como você baixou a biblioteca em formato zip, abra sua IDE Arduino, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo zip que você acabou de baixar, e se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de aviso. Isso significa que a biblioteca foi instalada com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

### <span id="jump6"> Primeiros Passos com o Seeed Studio XIAO </span>


Se você deseja obter um protótipo de sensor com recursos de visão computacional, pode querer considerar adicionar um XIAO. Usando o XIAO e o Grove Vision AI V2, você pode usar o modelo que deseja e implantá-lo rapidamente na sua área de aplicação.

<!-- Before that, you still need to follow the [**SenseCraft AI**](#step-1-connect-the-grove-vision-ai-v2-to-the-sscma) steps and content to upload a model you want to use first. -->

#### Pré-requisitos

**Etapa 1.** Materiais Necessários

Neste tutorial, usaremos o XIAO ESP32S3 como exemplo para apresentar o uso de programas Arduino. Portanto, recomendamos que você prepare o seguinte hardware.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Grove Vision AI V2</th>
      <th>Módulo de Câmera OV5647-62 FOV<br />para Raspberry Pi 3B+4B</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Em seguida, você precisa conectar o XIAO e o Grove Vision AI V2 através da fileira de pinos (ou usar a placa de expansão e a interface Grove).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

:::caution
Observe a direção da conexão, o conector Type-C do Grove Vision AI deve estar na mesma direção que o conector Type-C do XIAO.
:::

**Etapa 2.** Inicie o aplicativo Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

<br />

**Etapa 3.** Selecione o modelo da sua placa de desenvolvimento e adicione-a à IDE Arduino.

:::tip
Abaixo está uma lista de placas suportadas para o exemplo do Grove Vision AI V2; você pode escolher a placa que deseja usar para concluir o próximo exemplo. Neste tutorial, o XIAO ESP32S3 será usado como exemplo.
:::

- Se você quiser usar o **Seeed Studio XIAO SAMD21** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#software)** para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO RP2040** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#software-setup)** para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO nRF52840** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#software-setup)** para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO ESP32C3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started#software-setup)** para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO ESP32S3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started#software-preparation)** para concluir a adição.

- Se você quiser usar o **Seeeduino V4.3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino_v4.2/)** para concluir a adição.

**Etapa 4.** Instale a biblioteca **ArduinoJSON**.

Vá ao menu Sketch e selecione **Include Library > Manage Libraries...**. Isso abrirá o Gerenciador de Bibliotecas. Na barra de busca na parte superior do Gerenciador de Bibliotecas, digite **ArduinoJSON**. Os resultados da busca listarão a biblioteca ArduinoJSON. Haverá um botão Install ao lado da biblioteca. Clique no botão Install. A IDE Arduino fará o download e instalará automaticamente a biblioteca no seu ambiente de desenvolvimento Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/20.png" style={{width:1000, height:'auto'}}/></div>

#### Demo 1. Use o XIAO para obter resultados de reconhecimento

O procedimento a seguir é um exemplo simples para ajudar você a obter e analisar as informações de reconhecimento reportadas pelo Grove Vision AI V2.

```cpp
#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup()
{
    AI.begin();
    Serial.begin(9600);
}

void loop()
{
    if (!AI.invoke())
    {
        Serial.println("invoke success");
        Serial.print("perf: prepocess=");
        Serial.print(AI.perf().prepocess);
        Serial.print(", inference=");
        Serial.print(AI.perf().inference);
        Serial.print(", postpocess=");
        Serial.println(AI.perf().postprocess);

        for (int i = 0; i < AI.boxes().size(); i++)
        {
            Serial.print("Box[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.boxes()[i].target);
            Serial.print(", score=");
            Serial.print(AI.boxes()[i].score);
            Serial.print(", x=");
            Serial.print(AI.boxes()[i].x);
            Serial.print(", y=");
            Serial.print(AI.boxes()[i].y);
            Serial.print(", w=");
            Serial.print(AI.boxes()[i].w);
            Serial.print(", h=");
            Serial.println(AI.boxes()[i].h);
        }
        for (int i = 0; i < AI.classes().size(); i++)
        {
            Serial.print("Class[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.classes()[i].target);
            Serial.print(", score=");
            Serial.println(AI.classes()[i].score);
        }
        for (int i = 0; i < AI.points().size(); i++)
        {
            Serial.print("Point[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.points()[i].target);
            Serial.print(", score=");
            Serial.print(AI.points()[i].score);
            Serial.print(", x=");
            Serial.print(AI.points()[i].x);
            Serial.print(", y=");
            Serial.println(AI.points()[i].y);
        }
    }
}
```

##### Explicação do procedimento

Este sketch Arduino utiliza a biblioteca Seeed_Arduino_SSCMA para fazer a interface com o Grove Vision AI Module V2. Na função `setup()`, o módulo de IA é inicializado e a comunicação serial é iniciada.

A função `loop()` chama repetidamente o método `invoke()` para realizar inferência usando os algoritmos integrados do Grove Vision AI Module V2. Após uma inferência bem-sucedida, o sketch imprime no monitor serial as métricas de desempenho, incluindo os tempos de pré-processamento, inferência e pós-processamento.

O sketch processa e imprime informações detalhadas sobre os resultados da inferência, incluindo:

- Caixas delimitadoras (`boxes()`) que identificam as localizações e dimensões dos objetos detectados na forma de coordenadas x e y, largura e altura.
- Classificações (`classes()`) que identificam as categorias dos objetos detectados juntamente com suas pontuações de confiança.
- Pontos (`points()`) que representam características específicas ou pontos-chave dos objetos detectados, juntamente com suas coordenadas x e y e pontuações de confiança.

Esses resultados fornecem insights sobre os objetos detectados pelo módulo de IA, suas posições, tamanhos e o nível de confiança de cada detecção ou classificação. A saída é impressa no monitor serial para análise adicional ou depuração.


##### Efeito

Ainda estamos usando o modelo de Detecção de Gestos. Depois de carregar a aplicação, abra o monitor serial e defina a taxa de baud do monitor serial para **9600**. Prepare o seu "pedra-papel-tesoura" e aponte-o para a área de reconhecimento da câmera, e o monitor serial exibirá o resultado do reconhecimento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/12.png" style={{width:800, height:'auto'}}/></div>


#### Demo 2. Enviar comandos de controle via XIAO

O Grove Vision AI V2 suporta comunicação via [protocolo UART](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md) e, utilizando o protocolo integrado, é possível operar o chip Himax WE2 do Grove Vision AI V2. O programa de exemplo a seguir mostra como usar o XIAO para se comunicar com o Grove Vision AI V2 pela porta serial.

```cpp
#include <Arduino.h>
#include <Wire.h>

#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup()
{
    // put your setup code here, to run once:
    Wire.begin();
    Serial.begin(115200);
    while (!Serial)
        delay(1000);

    Serial.println("Proxy start");
}

char buf[512];
void loop()
{
    int s_len = Serial.available();
    if (s_len)
    {
        int len = Serial.readBytes((char *)buf, s_len);
        AI.write(buf, len);
    }
    int t_len = AI.available();
    if (t_len)
    {
        if (t_len > 512)
        {
            t_len = 512;
        }

        AI.read(buf, t_len);
        Serial.write(buf, t_len);
    }
}
```


##### Explicação do procedimento

Este sketch Arduino estabelece uma interface de comunicação entre o console serial e o módulo Grove Vision AI V2, utilizando o Seeed Studio Machine Learning Framework SSCMA. O sketch é projetado para enviar e receber dados do módulo Grove Vision AI V2 por meio de comandos seriais.

Aqui está a descrição modificada do sketch:

Na função `setup()`:
- O protocolo de comunicação I2C é inicializado com `Wire.begin()`, permitindo a comunicação com o módulo Grove Vision AI V2.
- A comunicação serial é configurada com uma taxa de baud de 115200.
- O sketch aguarda a conexão serial ficar ativa antes de exibir "Proxy start" no monitor serial, indicando que o canal de comunicação proxy está pronto.

Na função `loop()`:
- O sketch verifica se há dados seriais recebidos usando `Serial.available()`. Se houver dados, ele os lê em um buffer chamado `buf`.
- Os dados coletados no buffer são então enviados para o módulo Grove Vision AI V2 usando o método `AI.write()`.
- Em seguida, o sketch verifica se o módulo Grove Vision AI V2 tem algum dado para enviar de volta usando `AI.available()`.
- Se o módulo Grove Vision AI V2 tiver enviado dados, o sketch lê esses dados para o buffer `buf` com `AI.read()`, garantindo que os dados não excedam o tamanho do buffer de 512 bytes.
- Por fim, os dados recebidos do módulo Grove Vision AI V2 são transmitidos de volta para o console serial usando `Serial.write()`, completando a comunicação bidirecional entre a interface serial e o módulo de visão com IA.

Essa configuração permite uma comunicação interativa com o módulo Grove Vision AI V2, possibilitando que os usuários enviem instruções para o módulo e recebam dados dele por meio de uma conexão serial.


## Recursos
- [SenseCraft AI](https://sensecraft.seeed.cc/ai/#/home)
- [SenseCraft AI Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process)
- [Biblioteca Arduino para XIAO](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA)
- [Restaurar o Grove Vision AI V2 para o firmware de fábrica](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/Vision_AI_Module_V2_factory_flasher.zip)

## Solução de Problemas

### P1: Por que não consigo ver o resultado reconhecido na porta depois de carregar com sucesso o código do Demo1 usando o XIAO ESP32C3?

Se você estiver usando o Arduino IDE versão 1.xx, reabra o monitor serial depois de pressionar Reset no C3 para ver o resultado. Se você estiver usando o Arduino versão 2.xx, a mensagem será atualizada no monitor serial após pressionar o botão Reset.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
