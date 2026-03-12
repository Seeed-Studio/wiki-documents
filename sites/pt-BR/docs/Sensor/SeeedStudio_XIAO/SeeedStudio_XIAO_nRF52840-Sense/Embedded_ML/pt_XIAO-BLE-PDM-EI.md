---
description: Reconhecimento de Fala baseado em Edge Impulse
title: Reconhecimento de Fala baseado em Edge Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-PDM-EI
last_update:
  date: 10/12/2023
  author: Bruno Santos (Feiticeir0)
createdAt: '2023-10-11'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/XIAO-BLE-PDM-EI/
---

:::caution
O conteúdo deste tutorial pode não ser mais válido e não há mais manutenção de software nem suporte técnico disponíveis.
:::

# Reconhecimento de Fala baseado em Edge Impulse usando XIAO nRF52840

Neste wiki, mostrarei como usar o Edge Impulse com os recursos de ML do Seeed Studio XIAO nRF52840 para Reconhecimento de Fala. Usaremos o microfone que já vem no XIAO nRF52840 Sense.

## Conhecimentos antes do projeto

O XIAO nRF52840 não é oficialmente suportado pelo Edge Impulse e não está presente como um dispositivo para coletar dados, mas vou apenas demonstrar como podemos usá‑lo para executar inferência usando o microfone do dispositivo.

## Primeiros Passos

Para acompanhar este tutorial, você precisa do seguinte hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO nRF52840-Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparação de Hardware

Não precisamos de nenhuma preparação de hardware. O XIAO nRF52840 já tem tudo o que precisamos para este projeto. Só precisamos do microfone PDM.

#### Aqui está o pinout de hardware do XIAO nRF52840 Sense

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/XIAO_nrf82840_hardware.png" alt="XIAO nrf82840 hardware" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}></p>

## Preparação de Software

Para testar isto, só precisamos de três coisas:

1. Conjunto de dados Google Speech commands (veja abaixo)
2. [Edge Impulse Account](https://edgeimpulse.com/)
3. [Arduino IDE](https://www.arduino.cc/)

### Conjunto de dados

- Vou usar o conjunto de dados Google speech command. Não o conjunto completo, apenas algumas palavras dele.
- Por enquanto, baixe o conjunto de dados e descompacte‑o. O conjunto completo tem 2,3 GB.
- Este <a href="https://www.tensorflow.org/lite/microcontrollers" target="_blank">Google Speech commands dataset</a> é usado pelo Google em seu exemplo de micro speech para o TensorFlow Lite for MicroControllers.
- <a href="https://github.com/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb" target="_blank"> Você pode encontrar o código aqui.</a>

Podemos baixar o conjunto de dados a partir do primeiro link acima e ele será extraído como:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/dataset_extracted.png" alt="Dataset extracted" alt="Speech commands dataset" width={600} height="auto" /></p>

## Primeiros Passos

Agora vamos começar a usar o Edge Impulse para criar um modelo de ML baseado no conjunto de dados.

### Etapa 1 - Abra o Edge Impulse

- Edge Impulse é uma plataforma de desenvolvimento de machine learning (ML) que permite aos desenvolvedores criar e implantar modelos de ML personalizados em dispositivos de borda, como microcontroladores e smartphones.
- Ele fornece uma variedade de ferramentas e recursos para ajudar a construir e otimizar modelos de ML para tarefas específicas, como detecção de palavras‑chave, detecção de anomalias e classificação.

Vamos criar um novo projeto. Dê um nome a ele.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge1.png" alt="Edge Impulse New project" width={600} height="auto" /></p>

Depois de criar um novo projeto, vá para a página de aquisição de dados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge2.png" alt="Edge Impulse Data Aquisition" width="{600}" height="auto" /></p>

### Etapa 2 - Adicionar dados

Como vamos usar o conjunto de dados Google speech commands, escolha "Add existing data".
Em seguida, escolha "Upload data"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge3.png" alt="Edge Impulse upload data" width={600} height="auto" /></p>

Em seguida, selecionamos os dados – Vamos escolher uma das pastas do conjunto de dados de fala.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge4.png" alt="Edge Impulse upload data screen" width={600} height="auto" /></p>

O conjunto de dados tem muitas palavras para treinar. Vamos escolher 3 pastas (nossos rótulos) para treinar e o ruído de fundo. Teremos 4 rótulos.
Pressione o botão "Browse".
A primeira é "go". Escolha a pasta – você pode ver todos os arquivos .wav – e pressione "Upload".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge5.png" alt="Files to upload" width={600} height="auto" /></p>

Em seguida, vamos manter as opções padrão para a categoria. Deixe o Edge Impulse dividir os dados.
Para o rótulo, escreva o rótulo você mesmo. Depois disso, pressione "Upload data".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge6.png" alt="Edge Impulse upload data screen" width={600} height="auto" /></p>

No lado direito, você verá os arquivos sendo enviados. Pode demorar um pouco, porque são muitos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge7.png" alt="Files upload progress" width={600} height="auto" /></p>

Depois de um tempo, ele termina e mostra um pequeno resumo dos arquivos enviados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge8.png" alt="Files upload resume" width={600} height="auto" /></p>

Depois disso, esta é a tela

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge9.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

Para enviar mais dados, pressione o pequeno botão de upload no lado direito, acima da lista de arquivos.
Repita isso mais 3 vezes – mais 2 rótulos e o ruído de fundo.
Vou escolher happy, bird e a pasta "background noise" com o rótulo "noise".
No final, estes são todos os rótulos que temos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge10.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

Em seguida, vamos criar a rede para aprender nossas palavras. Clique em Impulse design para criar o impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge11.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

### Etapa 3 - Selecionar o método de treinamento

Como os clipes têm 1 segundo cada e 16Khz, vamos manter o tamanho da janela e a frequência iguais. Agora, vamos adicionar um bloco de processamento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge12.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

O Edge Impulse também nos ajuda bastante aqui. Clique em "Add a processing block" e escolha Audio (MFCC).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge13.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

Em seguida, clique em "Add learning block" e escolha Classification.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge14.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

Agora, nossa última coluna – Output features – tem nossos 4 rótulos (bird, go, happy, noise).
Pressione "Save Impulse" para salvar nosso trabalho até aqui.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge15.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

### Etapa 4 - Gerar as features

Agora, vamos dar uma olhada nos parâmetros MFCC. Se quiser, você pode alterar os valores.
Por enquanto, vamos manter os valores padrão. Clique em "Save Parameters".
Depois de salvar os parâmetros, recebemos uma nova janela para "Generate features".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge16.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

Depois de clicar, o Edge Impulse começará a gerar as features.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge17.png" alt="Generate features" width={600} height="auto" /></p>

Depois de um tempo, teremos nossas features geradas e poderemos visualizá‑las

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge18.png" alt="Feature explorer" width={600} height="auto" /></p>

Agora podemos treinar nossa rede com os parâmetros escolhidos. Clique em "Classifier".

### Etapa 5 - Classifier

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge19.png" alt="Classifier" width={600} height="auto" /></p>

Aqui podemos ajustar as configurações da nossa rede, como ciclos de treinamento, se queremos aumento de dados e assim por diante.
O Edge Impulse fornece uma arquitetura de rede neural simples, mas eficaz, para detecção de palavras‑chave. A arquitetura consiste nas seguintes camadas:

- <b>Camada de entrada:</b> A camada de entrada recebe as features de MFCC como entrada.
- <b>Camadas ocultas:</b> As camadas ocultas aprendem a extrair features de nível mais alto a partir das features de MFCC. O Edge Impulse oferece suporte a vários tipos de camadas ocultas, como camadas convolucionais e camadas recorrentes.
- <b>Camada de saída:</b> A camada de saída prevê a probabilidade de que a entrada de áudio contenha uma palavra‑chave.

Podemos alterar os parâmetros padrão, mas os padrões são suficientes. Clique em "Start Training".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge20.png" alt="Arquitetura da rede" width={600} height="auto" /></p>

Após iniciar o treinamento, no lado direito da tela podemos acompanhar o progresso do treinamento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge21.png" alt="Progresso do treinamento" width={600} height="auto" /></p>

Podemos alterar o dispositivo alvo para nRF52840 - como o nosso XIAO nRF52840 Sense - assim podemos ver cálculos de desempenho e otimizações.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge22.png" alt="Dispositivo alvo" width={600} height="auto" /></p>

Após a conclusão do treinamento, obtemos a matriz de confusão e o explorador de dados

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge23.png" alt="Matriz de confusão" width={600} height="auto" /></p>

Agora, com a rede pronta, vamos testar algumas amostras e fazer uma classificação em tempo real.
Se você for para classificação em tempo real, podemos escolher uma amostra e ver o resultado da classificação. Aqui, para um exemplo de pássaro, obtemos pássaro no resultado. Isso é ótimo. O modelo está funcionando.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge24.png" alt="Classificação em tempo real" width={600} height="auto" /></p>

Agora, vamos para o teste do modelo.
Vamos testar o modelo usando as amostras divididas para teste. Clique em "Classify all".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge25.png" alt="Dados de teste" width={600} height="auto" /></p>

Obtemos quase 90% de acurácia.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge26.png" alt="Acurácia" width={600} height="auto" /></p>

### Etapa 6 - Implantação e obtenção da biblioteca Arduino

Agora, vamos para a implantação para obter os arquivos para o nosso microcontrolador.

#### Opções de Implantação

Vamos escolher Arduino

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge27.png" alt="Acurácia" width={600} height="auto" /></p>

Em seguida, vamos manter Quantized(int8) selecionado e clicar em "Build" para baixar os arquivos para usar com a Arduino IDE
Podemos brincar um pouco com as otimizações. Se você perceber que a acurácia está baixa, tente desativar o compilador EON e tente novamente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge28.png" alt="Acurácia" width={600} height="auto" /></p>

Depois de um tempo, os arquivos serão baixados automaticamente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge29.png" alt="Download dos arquivos Arduino" width={600} height="auto" /></p>

### Etapa 7 - Adicionar a biblioteca à Arduino IDE

Na Arduino IDE, vamos adicionar os arquivos recém-baixados.
Vá para Sketch > Include Library > Add .ZIP Library

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge30.png" alt="Arduino IDE Adicionar biblioteca" width={600} height="auto" /></p>

Escolha o arquivo baixado. Depois de um tempo, uma mensagem aparecerá na janela de saída informando que a biblioteca foi instalada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge31.png" alt="Biblioteca instalada" width={600} height="auto" /></p>

### Etapa 8 - Controlar por voz as luzes RGB no XIAO nRF52840 Sense

Vamos abrir um exemplo
Vá para Examples > &lt;your_files_names&gt; > nano_ble33_sense > nano_ble33_sense_microphone

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge32.png" alt="Biblioteca instalada" width={600} height="auto" /></p>

Por que o Arduino BLE 33 Sense? Eles usam a mesma biblioteca - PDM (pulse-density modulation) - para controlar o microfone. O Arduino Nano BLE 33 Sense tem um MP34DT05 e o XIAO nRF52840 Sense tem o MSM261D3526H1CPM.
Com o sketch aberto, vamos compilá-lo e ver se não temos nenhum erro.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge33.png" alt="Sketch aberto" width={600} height="auto" /></p>

Depois de um tempo, o sketch é compilado e nenhum erro é reportado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge34.png" alt="Sketch aberto" width={600} height="auto" /></p>

Agora, conecte o XIAO nRF52840 Sense (se você ainda não fez isso) e envie o código para a placa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge35.png" alt="Sketch aberto" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge36.png" alt="Resultado da compilação" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge37.png" alt="Upload" width={600} height="auto" /></p>

Agora, abra a porta serial (Ctrl+Shitf+M) e verifique os resultados de inferência (a placa já começou a gravar, fazer inferência e previsões)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge38.png" alt="Monitor Serial" width={600} height="auto" /></p>

Tente dizer uma das palavras escolhidas. Eu disse go

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge39.png" alt="Monitor Serial" width={600} height="auto" /></p>

Se ela detectar a palavra corretamente, a palavra mais provável terá um resultado mais próximo de 1.0 e as outras um valor mais próximo de 0.0
Agora, vamos nos divertir um pouco e mudar um pouco o código.
O XIAO nRF52840 Sense tem um LED embutido que possui 3 cores:

- Vermelho - LED_BUILTIN ou LED_RED

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge40.gif" alt="LED vermelho" width={600} height="auto" /></p>
- Verde - LED_GREEN
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge41.gif" alt="LED verde" width={600} height="auto" /></p>
- Azul - LED_BLUE
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge42.gif" alt="LED azul" width={600} height="auto" /></p>

Como temos 3 palavras, vamos atribuir uma cor para cada uma e acender a cor correspondente para a palavra.

- Vermelho será para bird
- Verde para Go
- Azul para happy

Porque será mais fácil, eu verifiquei as definições de PIN da placa e os seguintes PINs estão atribuídos à cor do LED:

- VERMELHO - Pino 11
- VERDE - Pino 13
- AZUL - Pino 12

Primeiro, precisamos definir um limite. Sabemos que as previsões vão de 0.0 a 1.0. Quanto mais próximo de 1.0, mais certeza temos da classificação da palavra. Esse valor pode ser ajustado depois. Vou defini-lo em 0.7.

Primeiro, defina algumas variáveis. Eu as defini logo após as bibliotecas incluídas:

```cpp
/* threshold for predictions */
float threshold = 0.7;

/** 
  LABELS INDEX:
  0 - bird
  1 - go
  2 - happy
  3 - noise
*/
// LED pin (defines color) to light up
/**
 PIN 11 - RED
 PIN 12 - BLUE
 PIN 13 - GREEN
*/
int LED = 0;
int oldLED;
```

<i>int oldLED</i> definirá o LED aceso anteriormente para que possamos desligá-lo quando não houver previsão ou quando a previsão mudar.

<i>int LED</i> é o LED atual que vamos acender.

Em seguida, na função loop(), dentro da instrução for loop, onde iteramos sobre CLASSIFIER_LABEL_COUNT (por volta da linha 129 - já com as linhas acima):

```cpp
for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
```

Usamos uma instrução if para verificar o valor da classificação. Se estiver acima do limite definido, verificamos qual palavra foi gravada usando uma instrução switch.

O laço for completo, com nossas adições, é:

```cpp
for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
        //lets light up some LEDS

        if (result.classification[ix].value > threshold) {
          //now let's see what label were in
          switch (ix) {
            case 0: LED = 11; break;
            case 1: LED = 13; break;
            case 2: LED = 12; break;
            default: LED = 0;
          }
          //in Sense, LOW will light up the LED
          if (LED != 0) {
            digitalWrite (oldLED, HIGH); //if we enter a word right next to previous - we turn off the previous LED
            digitalWrite (LED, LOW);            
            oldLED = LED;
          }
          else //turn off LED
            digitalWrite (oldLED, HIGH);
        }
    }
```

Após as alterações, basta enviar o código para o seu microcontrolador e tentar dizer as palavras treinadas e ver o LED acendendo de acordo com a palavra.

E é isso. Embora não seja diretamente suportado, agora podemos usar o XIAO nRF52840 Sense para executar alguns modelos de ML usando Edge Impulse

## ✨ Projeto de Contribuidor

- Este projeto é apoiado pelo [Projeto de Contribuidor](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Graças aos [esforços do Bruno](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237) e o seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/Honorary-Contributors/).

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
