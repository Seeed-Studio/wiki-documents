---
sidebar_position: 11
description: Este artigo descreve como usar as bibliotecas SSCMACore no XIAO.
title: Use a biblioteca SSCMACore para exibir informações do modelo
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/76.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-sscmacore-library
aliases:
  - /sensecraft_ai_sscmacore_library
last_update:
  date: 12/12/2024
  author: Citric
createdAt: '2024-12-12'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/tutorials/sensecraft-ai-sscmacore-library/
---

# Configurando a saída do modelo no SenseCraft AI para XIAO ESP32S3 Sense usando a biblioteca SSCMACore

Este wiki fornece um guia passo a passo sobre como configurar a saída do modelo no SenseCraft AI para a placa XIAO ESP32S3 Sense usando a biblioteca SSCMACore (Seeed SenseCraft Model Assistant Core). Seguindo estas instruções, você conseguirá configurar o seu XIAO ESP32S3 Sense para funcionar com um modelo pré-treinado e utilizar a biblioteca SSCMACore para processar a saída do modelo.

## Pré-requisitos

Antes de continuar, certifique-se de que você tem o seguinte:

- XIAO ESP32S3 Sense
- Cabo de dados USB-C para conectar o XIAO ESP32S3 Sense ao seu computador
- Arduino IDE com a biblioteca [Seeed_Arduino_SSCMACore](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore) instalada

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira o seu agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Etapa 1. Certifique-se de que um modelo está carregado no XIAO ESP32S3 Sense

Antes de continuar, verifique se a sua placa XIAO ESP32S3 Sense tem um modelo treinado carregado. Se você ainda não carregou um modelo, consulte a documentação do SenseCraft AI sobre como treinar e implantar modelos no seu dispositivo.

- [Usando um modelo para XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/pt-br/sensecraft_ai_pretrained_models_for_xiao/)

Se você quiser usar o seu próprio modelo treinado, pode consultar os dois Wikis a seguir.

- [Tipo de treinamento - Classificação](https://wiki.seeedstudio.com/pt-br/sensecraft_ai_training_classification/)
- [Tipo de treinamento - Detecção de Objetos](https://wiki.seeedstudio.com/pt-br/sensecraft_ai_training_object_detection/)

## Etapa 2. Configure a biblioteca SSCMA

Baixe a biblioteca [Seeed_Arduino_SSCMACore](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore) do repositório GitHub.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Adicione a biblioteca baixada ao seu ambiente Arduino seguindo estas etapas:

- Abra o Arduino IDE.
- Vá em **Sketch -> Include Library -> Add .ZIP Library**.
- Navegue até a biblioteca **Seeed_Arduino_SSCMACore** baixada e selecione-a.
- Clique em **Open** para adicionar a biblioteca ao seu ambiente Arduino.

## Etapa 3. Escolha e configure o código de exemplo

A biblioteca SSCMA fornece dois códigos de exemplo que demonstram como trabalhar com a saída do modelo na placa XIAO ESP32S3 Sense. Escolha um dos seguintes exemplos com base nas suas necessidades:

### Exemplo 1: Inferência

1. Abra o código de exemplo [`inference.ino`](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore/blob/main/examples/inference/inference.ino).

```cpp
#include <SSCMA_Micro_Core.h>

#include <Arduino.h>
#include <esp_camera.h>


SET_LOOP_TASK_STACK_SIZE(40 * 1024);


SSCMAMicroCore instance;
SSCMAMicroCore::VideoCapture capture;


void setup() {

    // Init serial port
    Serial.begin(115200);

    // Init video capture
    MA_RETURN_IF_UNEXPECTED(capture.begin(SSCMAMicroCore::VideoCapture::DefaultCameraConfigXIAOS3));

    // Init SSCMA Micro Core
    MA_RETURN_IF_UNEXPECTED(instance.begin(SSCMAMicroCore::Config::DefaultConfig));

    Serial.println("Init done");

}

void loop() {

    auto frame = capture.getManagedFrame();

    MA_RETURN_IF_UNEXPECTED(instance.invoke(frame));

    for (const auto& box : instance.getBoxes()) {
        Serial.printf("Box: x=%f, y=%f, w=%f, h=%f, score=%f, target=%d\n", box.x, box.y, box.w, box.h, box.score, box.target);
    }

    for (const auto& cls : instance.getClasses()) {
        Serial.printf("Class: target=%d, score=%f\n", cls.target, cls.score);
    }

    for (const auto& point : instance.getPoints()) {
        Serial.printf("Point: x=%f, y=%f, z=%f, score=%f, target=%d\n", point.x, point.y, point.z, point.score, point.target);
    }

    for (const auto& kp : instance.getKeypoints()) {
        Serial.printf("Keypoints: box: x=%f, y=%f, w=%f, h=%f, score=%f, target=%d\n", kp.box.x, kp.box.y, kp.box.w, kp.box.h, kp.box.score, kp.box.target);
        for (const auto& point : kp.points) {
            Serial.printf("Keypoint: x=%f, y=%f, z=%f, score=%f, target=%d\n", point.x, point.y, point.z, point.score, point.target);
        }
    }

    auto perf = instance.getPerf();
    Serial.printf("Perf: preprocess=%dms, inference=%dms, postprocess=%dms\n", perf.preprocess, perf.inference, perf.postprocess);

}
```

Este código de exemplo demonstra como executar inferência usando a biblioteca SSCMA e obter a saída do modelo, incluindo caixas delimitadoras, classes, pontos e keypoints. O código inicializa a captura de vídeo, o SSCMA Micro Core e realiza inferência em cada frame capturado pela câmera. A saída do modelo, como caixas delimitadoras, classes, pontos e keypoints, é impressa no monitor serial.

:::note
A função `loop()` é onde o processo de inferência ocorre. Ela começa capturando um frame usando `capture.getManagedFrame()` e invocando a inferência no frame capturado usando `instance.invoke(frame)`.

Após a inferência, o código obtém e imprime várias saídas do modelo:

- **Caixas delimitadoras (bounding boxes)**: A função `instance.getBoxes()` retorna um vetor de caixas delimitadoras. Cada caixa delimitadora contém informações como coordenadas (x, y, w, h), pontuação (score) e classe alvo.
- **Classes**: A função `instance.getClasses()` retorna um vetor de classes detectadas. Cada classe contém informações sobre a classe alvo e sua pontuação correspondente.
- **Pontos**: A função `instance.getPoints()` retorna um vetor de pontos detectados. Cada ponto contém informações como coordenadas (x, y, z), pontuação e classe alvo.
- **Keypoints**: A função `instance.getKeypoints()` retorna um vetor de keypoints detectados. Cada keypoint contém uma caixa delimitadora e um vetor de pontos associados. O código imprime as informações da caixa delimitadora e itera sobre os pontos, imprimindo suas coordenadas, pontuação e classe alvo.

Por fim, o código obtém as métricas de desempenho usando `instance.getPerf()` e imprime os tempos de pré-processamento, inferência e pós-processamento em milissegundos.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/74.png" style={{width:1000, height:'auto'}}/></div>

### Exemplo 2: Inferência com callbacks

1. Abra o código de exemplo [`inference_cb.ino`](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore/blob/main/examples/inference_cb/inference_cb.ino).

```cpp
#include <SSCMA_Micro_Core.h>

#include <Arduino.h>
#include <esp_camera.h>


SET_LOOP_TASK_STACK_SIZE(40 * 1024);


SSCMAMicroCore instance;
SSCMAMicroCore::VideoCapture capture;


void setup() {

    // Init serial port
    Serial.begin(115200);

    // Init video capture
    MA_RETURN_IF_UNEXPECTED(capture.begin(SSCMAMicroCore::VideoCapture::DefaultCameraConfigXIAOS3));

    // Init SSCMA Micro Core
    MA_RETURN_IF_UNEXPECTED(instance.begin(SSCMAMicroCore::Config::DefaultConfig));

    instance.registerPerfCallback(SSCMAMicroCore::DefaultPerfCallback);
    instance.registerBoxesCallback(SSCMAMicroCore::DefaultBoxesCallback);
    instance.registerClassesCallback(SSCMAMicroCore::DefaultClassesCallback);
    instance.registerPointsCallback(SSCMAMicroCore::DefaultPointsCallback);
    instance.registerKeypointsCallback(SSCMAMicroCore::DefaultKeypointsCallback);

    Serial.println("Init done");

}

void loop() {

    auto frame = capture.getManagedFrame();

    MA_RETURN_IF_UNEXPECTED(instance.invoke(frame));

}
```

Este código de exemplo demonstra como executar inferência usando a biblioteca SSCMA e registrar funções de callback para lidar com a saída do modelo. O código inicializa a captura de vídeo, o SSCMA Micro Core e registra funções de callback para métricas de desempenho, caixas delimitadoras, classes, pontos e keypoints. Durante o processo de inferência, as funções de callback registradas são invocadas, permitindo que você personalize o tratamento da saída do modelo.

:::note
O código define várias funções de callback:

- `perfCb`: Esta função é chamada quando as métricas de desempenho estão disponíveis. Ela recebe uma instância de `SSCMAMicroCore::PerfMetrics` e imprime os tempos de pré-processamento, inferência e pós-processamento.
- `boxCb`: Esta função é chamada para cada caixa delimitadora detectada. Ela recebe uma instância de `SSCMAMicroCore::Box` e imprime as coordenadas da caixa, pontuação e classe alvo.
- `classCb`: Esta função é chamada para cada classe detectada. Ela recebe uma instância de `SSCMAMicroCore::Class` e imprime a classe alvo e a pontuação.
- `pointCb`: Esta função é chamada para cada ponto detectado. Ela recebe uma instância de `SSCMAMicroCore::Point3D` e imprime as coordenadas do ponto, a pontuação e a classe alvo.
- `keypointsCb`: Esta função é chamada para cada ponto-chave detectado. Ela recebe uma instância de `SSCMAMicroCore::Keypoints`, que contém uma caixa delimitadora e um vetor de pontos associados. A função imprime as informações da caixa delimitadora e itera sobre os pontos, imprimindo suas coordenadas, pontuação e classe alvo.

Na função `setup()`, a comunicação serial é inicializada com uma taxa de baud de 115200. A captura de vídeo é então inicializada usando a função `capture.begin()` com a configuração de câmera padrão para XIAO ESP32S3 Sense. O SSCMA Micro Core é inicializado usando a função `instance.begin()` com a configuração padrão.

Após a inicialização, o código registra as funções de callback usando os métodos apropriados fornecidos pela instância SSCMAMicroCore:

- `instance.setPerfCallback(perfCb)`: Registra a função perfCb como callback para métricas de desempenho.
- `instance.setBoxCallback(boxCb)`: Registra a função boxCb como callback para caixas delimitadoras.
- `instance.setClassCallback(classCb)`: Registra a função classCb como callback para classes detectadas.
- `instance.setPointCallback(pointCb)`: Registra a função pointCb como callback para pontos detectados.
- `instance.setKeypointsCallback(keypointsCb)`: Registra a função keypointsCb como callback para pontos-chave detectados.

A função `loop()` captura um frame usando `capture.getManagedFrame()` e invoca a inferência no frame capturado usando `instance.invoke(frame)`. Durante o processo de inferência, as funções de callback registradas serão chamadas sempre que os dados de saída correspondentes estiverem disponíveis.

Você pode modificar as funções de callback para executar ações específicas ou processar ainda mais os dados recebidos com base nos requisitos da sua aplicação.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/76.png" style={{width:1000, height:'auto'}}/></div>

## Etapa 4. Carregar e Executar o Código

Conecte sua placa XIAO ESP32S3 Sense ao computador usando o cabo de dados USB-C. Abra o código de exemplo selecionado (`inference.ino` ou `inference_cb.ino`) na Arduino IDE.

Selecione a placa e a porta apropriadas na Arduino IDE:

- Vá em **Tools -> Board** e selecione "XIAO ESP32S3 Sense".
- Vá em **Tools -> Port** e selecione a porta à qual sua XIAO ESP32S3 Sense está conectada.
- Vá em **Tools -> PSRAM -> OPI PSRAM**. Certifique-se de ativar a PSRAM!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/75.png" style={{width:600, height:'auto'}}/></div>

Clique no botão "Upload" na Arduino IDE para compilar e carregar o código na sua placa XIAO ESP32S3 Sense. Quando o upload estiver concluído, abra o Serial Monitor na Arduino IDE para visualizar a saída do modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/73.png" style={{width:1000, height:'auto'}}/></div>

## Conclusão

Seguindo este guia passo a passo, você agora deve ser capaz de configurar a saída do modelo no SenseCraft AI para sua placa XIAO ESP32S3 Sense usando a biblioteca SSCMA. Dependendo do código de exemplo que você escolheu, você pode recuperar a saída do modelo diretamente ou usar funções de callback para personalizar o tratamento da saída.

Sinta-se à vontade para explorar e modificar os códigos de exemplo para atender aos seus requisitos específicos. A biblioteca SSCMA fornece um conjunto poderoso de ferramentas e funções para trabalhar com visão computacional e modelos de aprendizado de máquina na placa XIAO ESP32S3 Sense.

Se você encontrar qualquer problema ou tiver mais perguntas, consulte a documentação do SenseCraft AI ou busque ajuda nos fóruns da comunidade Seeed Studio.

Boa programação e boa exploração do mundo da visão computacional e do aprendizado de máquina com sua placa XIAO ESP32S3 Sense!

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
