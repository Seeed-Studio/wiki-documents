---
description: Distinguindo Bebidas
title: Distinguindo Bebidas
keywords:
  - Wio_terminal
  - Embedded_ML
  - Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-TinyML-EI-5
last_update:
  date: 1/30/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-TinyML-EI-5/
---

# Wio Terminal Edge Impulse Distinguir Bebidas com Sensor de Gás Multicanal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg"/></div>

Neste wiki, vamos apresentar como usar o [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) com o [**Edge Impulse**](http://edgeimpulse.com/) para simplesmente implantar um projeto de aprendizado de máquina. O Wio Terminal com os [**sistemas Grove**](https://www.seeedstudio.com/category/Grove-c-1003.html) pode ser muito poderoso, trazendo centenas de dados de sensores para análise e possivelmente avaliar diferentes cenários!

Este é um projeto inspirado pelo [projeto de Nariz Artificial de Benjamin Cabé](https://twitter.com/kartben/status/1258791793073815552). Através deste artigo, você terá uma compreensão do fluxo de trabalho do Edge Impulse usando o Wio Terminal.

## Hardware Necessário

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Grove - Multichannel Gas Sensor v2**](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html)

- Um pouco de álcool, café, refrigerante de cola

## Introdução

Vamos guiá‑lo através do fluxo de trabalho do Edge Impulse com o Wio Terminal.

### 1. Conectando ao Edge Impulse

#### ① Carregue o firmware mais recente do dispositivo no Wio Terminal

Conecte o Wio Terminal ao seu computador. Entre no modo bootloader deslizando o interruptor de energia duas vezes rapidamente. Para mais referências, consulte também [aqui](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/#faq).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif" /></div>

Uma unidade externa chamada `Arduino` deve aparecer no seu PC. Arraste os [**arquivos de firmware uf2 do Edge Impulse**](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/edge_impulse_firmware.uf2) baixados para a unidade `Arduino`. Agora, o Edge Impulse está carregado no Seeeduino Wio Terminal!

**NOTA:** Aqui está o [código‑fonte do Wio Terminal Edge Impulse](https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse), você também pode compilar o firmware a partir daqui.

#### ② Conectar usando WebUSB

 Vá para o seu projeto Edge Impulse e clique na aba Data acquisition, então você pode ver a opção `Connect using WebUSB` no canto superior direito. Clique nela.
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/webusb.jpg" /></div>
Então, você verá uma janela pop‑up, selecione a porta serial pareada e "Connect" como na figura a seguir.
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/paired.jpg" /></div>
Agora, você conectou com sucesso o Wio Terminal ao Edge Impulse.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/connected.jpg" /></div>

### 2. Coletando Dados

Conecte o **Grove - Multichannel Gas Sensor v2 à porta Grove I2C do Wio Terminal**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/I2C.jpg" /></div>

Coloque o Grove - Multichannel Gas Sensor v2 sobre a bebida que você vai testar, no meu caso é refrigerante de cola primeiro. Uma coisa a ser destacada aqui, o **Grove - Multichannel Gas Sensor v2 pode ser facilmente afetado pelo ambiente, você pode querer usar uma cobertura para garantir que ele esteja detectando apenas o conteúdo de teste**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/test.jpg"/></div>

No **dashboard do Edge Impulse**, navegue até **Data acquisition**, escolha seu dispositivo e nomeie seu **Label**. Como o nome indica, o rótulo deve ser nomeado de acordo com o conteúdo do teste, então aqui também será **cola**.

**Sample length (ms.)** será o tempo de amostragem em ms, em **Sensor** escolha **External multichannel gas** e em **Frequency** escolha **10Hz**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/cola.jpg"/></div>

Clique em **Start Sampling** e ele começará a coletar dados.

No meu teste, obtive dados de refrigerante de cola por **10s** por **9 vezes** e cada vez eles tiveram resultados semelhantes. Você precisará ter conjuntos de dados que sejam razoavelmente semelhantes entre si.

:::note
    Se você tiver dados variando muito, isso pode ser causado pelo ambiente.
:::

Quando você tiver dados suficientes para um rótulo, você pode fazer exatamente o mesmo passo para outros rótulos! No meu teste, tenho mais três conjuntos de dados: ar, café e álcool:

- **conjunto de dados de ar:**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/air.jpg"/></div>

- **conjunto de dados de café:**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/coffee.jpg"/></div>

- **conjunto de dados de álcool:**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/alcohol.jpg"/></div>

Você deve notar que bebidas diferentes terão valores de gás diferentes, o que a torna perfeita para aprendizado de máquina! Além disso, é sempre melhor ter mais dados para que eles sejam treinados depois, então sinta‑se à vontade para coletar mais dados!

:::note
    Sinta‑se à vontade para criar mais categorias de álcool!
:::

### 3. Projetando o Impulso

Em seguida, precisaremos projetar o impulso clicando em **Impulse Design** -> **Create Impulse**. Um impulso recebe dados brutos, usa processamento de sinal para extrair características e, em seguida, usa um bloco de aprendizado para classificar novos dados. Neste exemplo, adicionei um bloco de processamento de **raw data** com todos os eixos de entrada e adicionei um bloco de aprendizado **Neural Network (Keras)** como a seguir:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/impulse.jpg"/></div>

Clique em **Save Impulse** e em Impulse design clique em **Raw data** e você deverá ver as características brutas dos conjuntos de dados:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/rawdata.jpg"/></div>

Clique em **Save parameters** então ele irá navegar para outra página. Clique em **Generate Features**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/feature.jpg"/></div>

Isso irá gerar características a partir dos conjuntos de dados anteriores e você verá um gráfico à direita. Se os conjuntos de dados estiverem separados uns dos outros, isso significa que os conjuntos de dados são únicos entre si, o que o torna melhor para o aprendizado de máquina das diferenças.

### 4. Treinando os Dados

Em **Impulse Design**, clique em **NN Classifier** para configurar as definições para a Rede Neural, as seguintes são minhas configurações:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/net.jpg" /></div>

Você pode querer ajustar essas configurações de acordo com suas necessidades e configurar a **arquitetura da Rede Neural**, então clique em **Start training**! Isso irá executar o treinamento e pode levar um tempo.

Uma vez treinado, você verá uma tabela de desempenho de treinamento. Se seus conjuntos de dados forem únicos entre si, você deverá obter resultados muito bons! Aqui está o meu desempenho:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/performance.jpg"/></div>

A partir disso, você pode ver que a precisão não é ruim, isso porque há apenas 4 casos. Você pode querer adicionar mais casos/testes a este exemplo.

### 5. Classificação em Tempo Real

Agora que temos o modelo treinado, podemos testá‑lo com novos dados. Navegue até **Live classification** e faça a amostragem de novos conjuntos de dados para teste.

- Exemplo de Teste 1:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/test1.jpg"/></div>

- Exemplo de Teste 2:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/test2.jpg"/></div>

Como podemos ver pelos resultados, são resultados muito bons, em que você é capaz de distinguir álcool usando o Grove - Multichannel Gas Sensor v2 com a ajuda do Edge Impulse!

## Implantando no Wio Terminal

O próximo passo é a implantação no dispositivo. Depois de clicar na aba Deployment, escolha Arduino library e faça o download.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/deploy.png" /></div>

Extraia o arquivo compactado e coloque‑o na pasta de bibliotecas do Arduino. Abra o Arduino IDE e escolha o sketch static buffer (localizado em File -> Examples -> name of your project -> static_buffer), que já possui todo o código padrão para classificação com seu modelo pronto. Legal!

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/code.jpg" /></div>

A única coisa que os usuários precisam preencher é a função raw_feature_get_data(size_t offset, size_t length, float *out_ptr) .

```cpp
int raw_feature_get_data(size_t offset, size_t length, float *out_ptr) {
    float features[4];
    features[0]=gas.getGM102B();
    features[1] = gas.getGM302B();
    features[2]=gas.getGM502B();
    features[3]=gas.getGM702B();
    memcpy(out_ptr, features + offset, length * sizeof(float));
    return 0;
}
```

## Código Completo

```cpp
#include <coffee_cola_alcohol_big_inferencing.h>
#include <Multichannel_Gas_GMXXX.h>
#include <Wire.h>
GAS_GMXXX<TwoWire> gas;

int raw_feature_get_data(size_t offset, size_t length, float *out_ptr) {
    float features[4];

    features[0]=gas.getGM102B();
    features[1] = gas.getGM302B();
    features[2]=gas.getGM502B();
    features[3]=gas.getGM702B();
    memcpy(out_ptr, features + offset, length * sizeof(float));
    return 0;
}

void setup()
{
    // put your setup code here, to run once:
    Serial.begin(115200);
    gas.begin(Wire, 0x08); // use the hardware I2C
    Serial.println("Edge Impulse Inferencing Demo");
}

void loop()
{
    ei_printf("Edge Impulse standalone inferencing (Arduino)\n");


    ei_impulse_result_t result = { 0 };

    // the features are stored into flash, and we don't want to load everything into RAM
    signal_t features_signal;
    features_signal.total_length = sizeof(features) / sizeof(features[0]);
    features_signal.get_data = &raw_feature_get_data;

    // invoke the impulse
    EI_IMPULSE_ERROR res = run_classifier(&features_signal, &result, false /* debug */);
    ei_printf("run_classifier returned: %d\n", res);

    if (res != 0) return;

    // print the predictions
    ei_printf("Predictions ");
    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    ei_printf("[");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("%.5f", result.classification[ix].value);
#if EI_CLASSIFIER_HAS_ANOMALY == 1
        ei_printf(", ");
#else
        if (ix != EI_CLASSIFIER_LABEL_COUNT - 1) {
            ei_printf(", ");
        }
#endif
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("%.3f", result.anomaly);
#endif
    ei_printf("]\n");

    // human-readable predictions
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: %.3f\n", result.anomaly);
#endif

    delay(1);
}

/**
 * @brief      Printf function uses vsnprintf and output using Arduino Serial
 *
 * @param[in]  format     Variable argument list
 */
void ei_printf(const char *format, ...) {
    static char print_buf[1024] = { 0 };

    va_list args;
    va_start(args, format);
    int r = vsnprintf(print_buf, sizeof(print_buf), format, args);
    va_end(args);

    if (r > 0) {
        Serial.write(print_buf);
    }
}
```

## Referência

- [Projeto de nariz artificial de Benjamin Cabé](https://twitter.com/kartben/status/1258791793073815552)

- [Projeto público do Edge Impulse](https://studio.edgeimpulse.com/public/37392/latest)

- [Github do projeto](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Edge-Impulse)
