---
description: Introdução ao Grove Vision AI V2.
title: Módulo Grove Vision AI V2
keywords:
  - vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_vision_ai_v2a
last_update:
  date: 12/12/2023
  author: Citric
createdAt: '2023-12-15'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/grove_vision_ai_v2a/
---

# Módulo Grove Vision AI V2

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/0.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/pt-br/grove_vision_ai_v2" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O Grove - Vision AI V2 é um módulo de visão com IA do tamanho de um polegar, equipado com o processador WiseEye2 HX6538, que adota a arquitetura dual-core Arm Cortex-M55. Ele possui uma interface CSI padrão e é compatível com câmeras Raspberry Pi. Conta com um microfone digital onboard e um slot para cartão SD. É altamente adequado para diversos projetos embarcados de visão com IA. Com a plataforma de algoritmos SenseCraft AI, modelos de ML treinados podem ser implantados no sensor sem necessidade de programação. Ele é compatível com a série XIAO e o ecossistema Arduino, tornando-o uma escolha ideal para várias aplicações de detecção de objetos.

<div class="table-center">
<iframe width="900" height="500" src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/video.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Recursos

- A PRIMEIRA placa baseada no processador WiseEye2 HX6538 com arquitetura dual-core Arm Cortex-M55.
- Equipado com uma unidade integrada de aceleração de micro rede neural Arm Ethos-U55, ideal para aplicações de visão de imagem com IA.
- Compatibilidade com uma ampla gama de câmeras Raspberry Pi.
- Microfone PDM onboard, slot para cartão SD, Type-C, interface Grove e abundantes dispositivos periféricos que facilitam o desenvolvimento de protótipos.
- Expansibilidade com as placas Seeed Studio XIAO.
- Modelo de IA pronto para uso do SenseCraft AI para implantação sem código.
- Suporte para uma variedade de modelos de IA eficientes, incluindo MobilenetV1, MobilenetV2, Efficientnet-lite, Yolov5 e Yolov8.

### Aplicações

- Automação Industrial: Inspeção de qualidade, manutenção preditiva, controle por voz, etc.
- Cidades Inteligentes: Monitoramento de dispositivos, gerenciamento de energia, etc.
- Transporte: Monitoramento de status, rastreamento de localização, etc.
- Agricultura Inteligente: Monitoramento ambiental, etc.
- Dispositivos móveis de IoT: Dispositivos vestíveis, dispositivos portáteis, etc.

## Visão Geral de Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/15.jpg" style={{width:1000, height:'auto'}}/></div>

Para usar todas as funcionalidades do Grove Vision AI V2, talvez você precise comprar uma câmera CSI separadamente; recomendamos o [**OV5647-62 FOV Camera Module for Raspberry Pi**](https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html).

:::caution
Observe que a câmera não está na lista de peças do Grove Vision AI V2.
:::

Depois que você tiver o Grove Vision AI V2 e a câmera prontos para uso, poderá conectá-los por meio do cabo de conexão CSI. Ao conectar, por favor, preste atenção à direção da fileira de pinos e não os conecte invertidos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/9.gif" style={{width:600, height:'auto'}}/></div>

## Primeiros Passos

### Boot

Se você usou algum método incomum que fez com que o Grove Vision AI deixasse de funcionar corretamente (em nível de software), talvez seja necessário colocar o dispositivo em modo BootLoader para recuperá-lo. Veja como entrar no modo BootLoader.

**Método 1**

Desconecte o cabo de conexão entre o Grove Vision AI e o seu computador, depois pressione e mantenha pressionado o botão Boot no dispositivo sem soltá-lo. Nesse momento, conecte o Grove Vision AI ao seu computador com um cabo de dados tipo Type-C e então solte o botão. Neste ponto, o dispositivo entrará no modo BootLoader.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/6.gif" style={{width:600, height:'auto'}}/></div>

**Método 2**

Com o Grove Vision AI conectado ao seu computador, você pode entrar no modo BootLoader pressionando o botão Boot e em seguida pressionando rapidamente o botão Reset.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/7.gif" style={{width:600, height:'auto'}}/></div>

### Reset

Se você estiver enfrentando problemas como dados do dispositivo de repente não serem enviados ou imagens ficarem travadas, pode tentar reiniciar o dispositivo usando o botão Reset.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/8.gif" style={{width:600, height:'auto'}}/></div>

### Driver

Se você perceber que o Grove Vision AI V2 não é reconhecido após conectá-lo ao seu computador, talvez seja necessário instalar o driver CH343 no seu computador. Aqui estão alguns links para baixar e instalar o driver CH343.

- Instalador de um clique do driver Windows Vendor VCP: [CH343SER.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.EXE)
- Driver Windows Vendor VCP: [CH343SER.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP)
- Instalador de um clique do driver Windows CDC: [CH343CDC.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343CDC.EXE)
- Driver Windows CDC: [CH343CDC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343CDC.ZIP)
- Driver macOS Vendor VCP: [CH34xSER_MAC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH341SER_MAC.ZIP)



## Visão Geral da Biblioteca Arduino

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

O Grove Vision AI usa o chip WiseEye2 HX6538; o processamento de imagem e a inferência de modelo são processados localmente no Grove Vision AI e então o resultado é enviado para o XIAO via IIC ou UART, portanto o principal objetivo desta biblioteca é processar o fluxo de dados do Grove Vision AI, e ela não envolve inferência de modelo ou processamento de imagem. Assim, o principal objetivo desta biblioteca é processar o fluxo de dados do Grove Vision AI, sem envolver inferência de modelo ou processamento de imagem.

O Grove Vision AI se comunica com o XIAO via IIC, e o endereço IIC do dispositivo é `0x62`. A transferência de informações de imagem é feita via porta serial USB.

### Função

Antes de começarmos a desenvolver um sketch, vamos analisar as funções disponíveis da biblioteca.

- `bool begin(TwoWire *wire = &Wire, uint16_t address = I2C_ADDRESS, uint32_t wait_delay = 2, uint32_t clock = 400000)` —— Inicializa o Grove Vision AI V2.

  **Parâmetros de Entrada:**
    - `TwoWire *wire` —— Este ponteiro aponta para um objeto TwoWire, normalmente usado para se comunicar com dispositivos I2C.
    - `uint16_t address` —— Este é o endereço do dispositivo I2C que identifica o dispositivo específico conectado ao barramento I2C.
    - `uint32_t wait_delay` —— O atraso (em milissegundos) a esperar por uma resposta antes de enviar um comando.
    - `uint32_t clock` —— Esta é a taxa de clock do barramento I2C (em Hz).

  **Retorno:** `True` ou `False`. `True` indica inicialização bem-sucedida, `False` indica falha na inicialização.


- `int invoke(int times = 1, bool filter = 0, bool show = 0)` —— Usada para enviar comandos INVOKE ao Grove Vision AI V2 para permitir que o Grove Vision AI comece a chamar modelos, realizar inferência e reconhecimento.

  **Parâmetros de Entrada:** 
    - `int times` —— O número de invocações.
    - `fileter` —— Significa que a resposta do evento só será enviada se o último resultado for diferente do resultado anterior (comparado por geometria e pontuação).
    - `bool show` —— Significa que a resposta do evento só será enviada se o último resultado for diferente do resultado anterior (comparado por geometria e pontuação).

:::note
Para mais informações sobre as definições de protocolo do Grove Vision AI, você pode ler a [**documentação do protocolo**](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md).
:::

  **Retorno:** `CMD_OK` ou `CMD_ETIMEDOUT`. Retorna **CMD_OK** se o modelo foi habilitado com sucesso, caso contrário retorna **CMD_ETIMEDOUT**.

- `int available()` —— Verifica quantos bytes de dados estão disponíveis para leitura a partir do dispositivo conectado via IIC.

  **Parâmetros de Entrada:** Nenhum.

  **Retorno:** O número de bytes de dados que podem ser lidos do dispositivo.

- `int read(char *data, int length)` —— Lê dados do Grove Vision AI via interface IIC. O objetivo da função é preencher a matriz apontada pelo ponteiro de dados fornecido com os dados lidos.

  **Parâmetros de Entrada:** 
    - `char *data` —— Uma matriz para armazenar os dados.
    - `int length` —— O comprimento dos dados a serem lidos.

  **Retorno:** O comprimento dos dados a serem lidos.

- `int write(const char *data, int length)` —— Escreve dados para o dispositivo especificado via interface I2C.

  **Parâmetros de entrada:**
    - `const char *data` —— O conteúdo dos dados a serem escritos.
    - `int length` —— O comprimento dos dados a serem escritos.

  **Retorno:** O comprimento dos dados a serem escritos.

- `std::vector<boxes_t> &boxes() { return _boxes; }` —— Fornece os resultados na forma de uma caixa.

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

- `std::vector<classes_t> &classes() { return _classes; }` —— Fornece os resultados como categorias.

```cpp
typedef struct
{
    uint8_t target;  // Target
    uint8_t score;   // Confidence in identifying as target
} classes_t;
```

- `std::vector<point_t> &points() { return _points; }` —— Fornece o resultado como um ponto.

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
A coordenada de profundidade aqui é relativa, isso não significa que o Grove Vision AI tenha função de câmera de profundidade, mas sim que o algoritmo calcula uma coordenada de profundidade relativa que é válida em alguns modelos (por exemplo, modelos face-3d).
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

### Instalação

Como você fez o download da biblioteca em zip, abra sua IDE Arduino, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo zip que você acabou de baixar e, se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de aviso. Isso significa que a biblioteca foi instalada com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## SenseCraft AI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/sensecraftai.jpg" style={{width:1000, height:'auto'}}/></div>

SenseCraft é uma série de serviços de software desenvolvidos pela Seeed Studio para fornecer aos usuários serviços e aplicações de software mais rápidos e simples. Com três linhas de produtos, Data line, Edge line e AI line, SenseCraft é capaz de atender às necessidades dos usuários em serviços de dados, gerenciamento de dispositivos e aplicações de IA. Não importa de que solução você precise, SenseCraft pode oferecer soluções eficientes e confiáveis e serviços personalizados.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Saiba Mais 📕</font></span></strong></a>
</div>

<br />

Combinado com o potencial do SenseCraft AI Model Assistant, você pode facilmente enviar uma grande variedade de modelos cocriados e observar diretamente os resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Saiba Mais 📕</font></span></strong></a>
</div>

<br />

Nesta seção, vamos guiá-lo no uso do SenseCraft AI Model Assistant para implantar rapidamente e observar os resultados.

### Passo 1. Conectar o Grove Vision AI V2 ao SenseCraft AI Model Assistant

Primeiro, precisamos abrir a página principal do SenseCraft AI Model Assistant.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Ir para SenseCraft AI</font></span></strong></a>
</div>
<br />

Use um cabo tipo Type-C para conectar o Grove Vision AI V2 ao seu computador.

No canto superior direito da página do SenseCraft AI Model Assistant, você pode selecionar **Grove Vision AI (WE2)**. Em seguida, clique no botão **Connect** à extrema direita.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/2.png" style={{width:1000, height:'auto'}}/></div>

Na nova janela que aparecer, selecione a porta COM correta para o dispositivo e clique no botão Connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/3.png" style={{width:1000, height:'auto'}}/></div>

### Passo 2. Enviar um modelo adequado

Em seguida, basta selecionar um modelo que você deseja usar e clicar no botão **Send** abaixo. Aqui está um exemplo de Detecção de Gestos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/4.png" style={{width:600, height:'auto'}}/></div>

Aguarde de 1 a 2 minutos para o envio do modelo.

### Passo 3. Observações

Quando o modelo for enviado com sucesso, você poderá ver o feed ao vivo da câmera do Grove Vision AI V2 na visualização Preview à direita.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/5.gif" style={{width:1000, height:'auto'}}/></div>

<br />

Podemos ver que, em Preview Settings no lado direito, há duas opções de configuração que podem ser alteradas para otimizar a precisão de reconhecimento do modelo.

- **Confidence:** Confidence se refere ao nível de certeza ou probabilidade atribuído por um modelo às suas previsões.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

- **IoU:** IoU é usado para avaliar a precisão das caixas delimitadoras previstas em comparação com as caixas delimitadoras verdadeiras.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

Neste ponto, você terminou de enviar o modelo e observar os resultados.

## Exemplo com XIAO

Se você quiser obter um protótipo de um sensor com capacidades de visão computacional, talvez queira considerar adicionar um XIAO. Usando o XIAO e o Grove Vision AI V2, você pode usar o modelo que deseja e implantá-lo rapidamente na sua área de aplicação.

Antes disso, você ainda precisa seguir as etapas e o conteúdo de [**SenseCraft AI**](#Passo-1-Conectar-o-Grove-Vision-AI-V2-ao-SenseCraft-AI-Model-Assistant) para primeiro enviar um modelo que deseja usar.

**Passo 1.** Materiais Necessários

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
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="/pt-br/grove_vision_ai_v2" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Você então precisa conectar o XIAO e o Grove Vision AI V2 por meio da fileira de pinos (ou usar a placa de expansão e a interface Grove).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

:::caution
Observe a direção da conexão, o conector Type-C do Grove Vision AI deve estar na mesma direção que o conector Type-C do XIAO.
:::

**Passo 2.** Inicie o aplicativo Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Baixar Arduino IDE</font></span></strong></a>
</div>

<br />

**Passo 3.** Selecione o modelo da sua placa de desenvolvimento e adicione-o ao Arduino IDE.

:::tip
Abaixo está uma lista de placas compatíveis com o exemplo do Grove Vision AI V2; você pode escolher a placa que deseja usar para concluir o próximo exemplo. Neste tutorial, o XIAO ESP32S3 será usado como exemplo.
:::

- Se você quiser usar **Seeed Studio XIAO SAMD21** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO RP2040** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#software-setup)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO nRF52840** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#software-setup)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO ESP32C3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started#software-configuração)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO ESP32S3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started#preparação-do-software)** para concluir a adição.

- Se você quiser usar **Seeeduino V4.3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino_v4.2/)** para concluir a adição.


### Demo 1. Usando o XIAO para obter resultados de reconhecimento reportados pelo Grove Vision AI V2

O procedimento a seguir é um exemplo simples para ajudá-lo a obter e analisar as informações de reconhecimento reportadas pelo Grove Vision AI V2.

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

#### Explicação do procedimento

Este sketch Arduino utiliza a biblioteca Seeed_Arduino_SSCMA para fazer a interface com o Grove Vision AI Module V2. Na função `setup()`, o módulo de IA é inicializado e a comunicação serial é iniciada.

A função `loop()` chama repetidamente o método `invoke()` para realizar inferência usando os algoritmos integrados do Grove Vision AI Module V2. Após uma inferência bem-sucedida, o sketch imprime métricas de desempenho no monitor serial, incluindo os tempos de pré-processamento, inferência e pós-processamento.

O sketch processa e imprime informações detalhadas sobre os resultados da inferência, incluindo:

- Caixas delimitadoras (`boxes()`) que identificam os locais e as dimensões dos objetos detectados na forma de coordenadas x e y, largura e altura.
- Classificações (`classes()`) que identificam as categorias dos objetos detectados juntamente com suas pontuações de confiança.
- Pontos (`points()`) que representam características específicas ou pontos-chave dos objetos detectados, juntamente com suas coordenadas x e y e pontuações de confiança.

Esses resultados fornecem informações sobre os objetos detectados pelo módulo de IA, suas posições, tamanhos e o nível de confiança de cada detecção ou classificação. A saída é impressa no monitor serial para análise ou depuração adicionais.


#### Efeito

Ainda estamos usando o modelo de Detecção de Gestos. Depois de enviar o aplicativo, abra o monitor serial e defina a taxa de baud do monitor serial para **9600**. Prepare seu "pedra-papel-tesoura" e aponte-o para a área de reconhecimento da câmera, e o monitor serial exibirá o resultado do reconhecimento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/12.png" style={{width:800, height:'auto'}}/></div>


### Demo 2. Use o XIAO para se comunicar via serial com o Grove Vision AI V2

O Grove Vision AI V2 suporta comunicação via [protocolo UART](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md) e, usando o protocolo integrado, é possível operar o chip Himax WE2 do Grove Vision AI V2. O programa de exemplo a seguir mostra como usar o XIAO para se comunicar com o Grove Vision AI V2 pela porta serial.

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


#### Explicação do procedimento

Este sketch Arduino estabelece uma interface de comunicação entre o console serial e o módulo Grove Vision AI V2, utilizando o Framework de Aprendizado de Máquina da Seeed Studio, SSCMA. O sketch foi projetado para passar dados de e para o módulo Grove Vision AI V2 por meio de comandos seriais.

Aqui está a descrição modificada do sketch:

Na função `setup()`:
- O protocolo de comunicação I2C é inicializado com `Wire.begin()`, permitindo a comunicação com o módulo Grove Vision AI V2.
- A comunicação serial é configurada com uma taxa de baud de 115200.
- O sketch aguarda a conexão serial estar ativa antes de exibir "Proxy start" no monitor serial, indicando que o canal de comunicação proxy está pronto.

Na função `loop()`:
- O sketch verifica se há dados seriais de entrada usando `Serial.available()`. Se houver dados, ele os lê em um buffer chamado `buf`.
- Os dados coletados no buffer são então enviados para o módulo Grove Vision AI V2 usando o método `AI.write()`.
- Em seguida, o sketch verifica se o módulo Grove Vision AI V2 tem algum dado para enviar de volta usando `AI.available()`.
- Se o módulo Grove Vision AI V2 tiver enviado dados, o sketch lê esses dados para o buffer `buf` com `AI.read()`, garantindo que os dados não excedam o tamanho do buffer de 512 bytes.
- Por fim, os dados recebidos do módulo Grove Vision AI V2 são transmitidos de volta ao console serial usando `Serial.write()`, completando a comunicação bidirecional entre a interface serial e o módulo de visão com IA.

Essa configuração permite uma comunicação interativa com o módulo Grove Vision AI V2, possibilitando que os usuários enviem instruções para o módulo e recebam dados dele por meio de uma conexão serial.


## Solução de Problemas

### P1: É possível que o Grove Vision AI veja as informações de resultado do XIAO enquanto exibe uma tela ao vivo?

Não é possível. Considerando a taxa de quadros ou a velocidade da inferência de imagem, não suportamos a execução simultânea de ambos os trabalhos neste estágio. Se o XIAO estiver conectado, você só poderá receber as informações reconhecidas reportadas, mas não o quadro em tempo real.

### P2: Quais câmeras o Grove Vision AI V2 suporta? Ele suporta apenas a OV5647-62?

Atualmente, escrevemos drivers para a série de câmeras OV5642, portanto o Grove Vision AI V2 suporta toda a linha de câmeras Raspberry Pi OV5647, por exemplo, as OV5647-62, OV5647-67 e OV5647-160. As outras câmeras CSI são teoricamente suportadas, mas devido ao fato de que algumas câmeras não têm drivers escritos para elas ou não possuem uma unidade própria de processamento de cores, pode ocorrer um problema em que a cor seja apenas verde, e a perda de cores completas poderá ter um impacto possível na precisão do reconhecimento.


## Recursos

- **[PDF]** [Datasheet](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf)
- **[GitHub]** [Seeed Grove Vision AI Module V2 SDK](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)



## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

