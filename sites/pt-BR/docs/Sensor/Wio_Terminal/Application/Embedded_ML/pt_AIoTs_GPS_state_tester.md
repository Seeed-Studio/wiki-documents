---
description: Nó LoRa com AIoTs GPS
title: Nó LoRa com AIoTs GPS
keywords:
  - Wio_terminal
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /AIoTs_GPS_state_tester
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/AIoTs_GPS_state_tester/
---

# Nó LoRa com AIoTs GPS no Wio Terminal

## Introdução

O testador de estado e AIoTs GPS é desenvolvido com base no Wio Terminal Chassis-LoRa-E5 e GNSS. Em comparação com os IoTs tradicionais, ele é mais conciso e inteligente. O modelo tradicional basicamente apenas recebe alguns dados e então executa uma ação de comando, independentemente de os dados estarem corretos ou não. Já o AIoTs, usando algoritmo de rede neural, é capaz de filtrar os dados inúteis para obter apenas os corretos.

Neste projeto, será utilizado um sensor acelerômetro de 3 eixos embutido e o algoritmo de rede neural para criar um sistema inteligente de reconhecimento. Com base no movimento do Wio Terminal, ele pode mostrar seu estado em tempo real. De modo geral, o projeto de exemplo aqui inclui três estados treinados, que são Stop (estado inativo do WT), Turn (girar o dispositivo WT) e Wave (segurar o WT e acenar com a mão). É incentivado que você vá ao site do [Edge Impulse](https://www.edgeimpulse.com/) para adicionar mais ações de treinamento.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" /></div>

## Recursos

- O dispositivo LoRa pode exibir o DevEui, APPEui e Appkey na primeira página.
- Algoritmo de rede neural corrige os dados
- Detecta com alta precisão o estado do Wio Terminal
- Exibe longitude, latitude e número de satélites.
- Exibe o status de conexão do dispositivo e do TTN.

## Primeiros passos

### Hardware

**Hardware Necessário**

Nesta demonstração você precisará dos dispositivos listados abaixo:

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Wio Terminal Chassis - LoRa-E5 and GNSS](https://www.seeedstudio.com/Wio-Terminal-Chassis-LoRa-E5-and-GNSS-p-5053.html)
- [Wio Terminal Chassis - Battery (Optional)](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)

**Conexão de Hardware**

Ele é conectado a um computador através do cabo Type-C.

![](https://files.seeedstudio.com/wiki/Alots/connectpc.jpg)

### Machine Learning com Wio Terminal

Aqui vamos mostrar como usar o Wio Terminal para treinar um modelo de Machine Learning e utilizá‑lo. O projeto é baseado na plataforma Arduino, o que significa que o Arduino IDE e várias bibliotecas Arduino são necessários. Se esta é a sua primeira vez usando o Wio Terminal, recomendamos o guia para rapidamente [Começar com o Wio Terminal](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/).

Baixe e instale na sua biblioteca do Arduino:

- [Seeed_Arduino_SFUD](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD)

#### Iniciando o Treinamento no Edge Impulse

Primeiro, você precisa ter a sua própria conta no Edge Impulse e então criar um projeto.

- **Etapa 1**. Abra o [site do Edge Impulse](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1) e registre uma conta.

![](https://files.seeedstudio.com/wiki/Alots/Alots1.png)

- **Etapa 2**. Crie um novo projeto.

![](https://files.seeedstudio.com/wiki/Alots/Alots2.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots3.png)

#### Conectando o Site ao Wio Terminal

- **Etapa 3**. Baixe o firmware [wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2) para a preparação da conexão.

Conforme sugerido nas diretrizes de [Começar com o Wio Terminal](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/):

 Ao pressionar rapidamente duas vezes o botão inferior esquerdo do Wio Terminal (já conectado ao seu PC), você verá um driver (como `Arduino (F:)` abaixo) aparecer no computador. Então você pode arrastar o firmware [wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2) para esse driver. E quando você vir o driver desaparecer, significa que o firmware foi programado. Agora você pode ir ao site para conectar o Wio Terminal.

![](https://files.seeedstudio.com/wiki/Alots/Alots5.png)

- **Etapa 4**. Uma vez que o firmware esteja configurado, clique em `connect using WebUSB` para conectar o Wio Terminal ao site.

![](https://files.seeedstudio.com/wiki/Alots/Alots4.png)

Quando `Device`, `Label` e `Sensor`, como abaixo, aparecerem, significa que a conexão foi concluída e a aquisição de dados pode ser ativada.

![](https://files.seeedstudio.com/wiki/Alots/Alots6.png)

#### Aquisição de Dados

Agora você pode coletar dados no Edge Impulse.

- **Etapa 5**. Insira `Label`, `Sample length (ms.)` e clique em `Start sampling`

  - `Label` significa as categorias que você deseja classificar.
  - `Sample length` significa o tempo da sua amostragem.

Você também pode querer escolher diferentes `Sensor` ou `Frequency` para ver o que acontece.

![](https://files.seeedstudio.com/wiki/Alots/Alots8.png)

É altamente recomendado amostrar os dados mais de 10 vezes.

![](https://files.seeedstudio.com/wiki/Alots/Alots9.png)

#### Geração do Modelo de Machine Learning

Depois que os dados forem coletados, você pode usá‑los para treinar seu modelo de ML.

- **Etapa 6**. Após amostrar os dados, clique em `create impulse` para processar os dados.

![](https://files.seeedstudio.com/wiki/Alots/Alots10.png)

O bloco de processamento e o bloco de aprendizagem que selecionamos aqui são os mesmos recomendados pelo site. Por outro lado, recomendamos fortemente que você escolha outros para ver que diferença pode ser obtida. Uma vez que os blocos forem configurados, clique em `Save Impulse` para salvar o impulso.

![](https://files.seeedstudio.com/wiki/Alots/Alots11.png)

- **Etapa 7**. Vá para a página `Spectral features` e, então, na parte inferior clique em `Save parameters`; ele moverá automaticamente para o lado `Generate feature`.

![](https://files.seeedstudio.com/wiki/Alots/Alots12.png)

Aqui está o lado `Generate feature`, que pode ajudar a traduzir seus dados para as características necessárias em Machine Learning.

![](https://files.seeedstudio.com/wiki/Alots/Alots13.png)

Clique em `Generate feature` e o resultado deverá aparecer à direita:

![](https://files.seeedstudio.com/wiki/Alots/Alots15.png)

- **Etapa 8**. Vá para a página `NN Classifier` para usar suas características treinando um modelo de Machine Learning. Na parte inferior da página, clique em `Start training`.

![](https://files.seeedstudio.com/wiki/Alots/Alots16.png)

A saída do treinamento fica à direita da página. Quando você vir a saída, significa que o modelo foi gerado.

![](https://files.seeedstudio.com/wiki/Alots/Alots17.png)

#### Implantação do Modelo de Machine Learning

Agora você pode implantar seu modelo de Machine Learning no seu Wio Terminal.

- **Etapa 9**. Selecione e clique na coluna `Deployment` à esquerda.

![](https://files.seeedstudio.com/wiki/Alots/Alots18.png)

Em seguida, escolha `Arduino Library`; na parte inferior selecione `build` para criar a biblioteca necessária no seu Arduino. Ele fará o download automático de um arquivo zip que inclui a biblioteca de terceiros.

![](https://files.seeedstudio.com/wiki/Alots/Alots19.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots20.png)

O nome da biblioteca desejada está relacionado ao nome do projeto, o que significa que qualquer nome que você tenha atribuído ao projeto na **etapa 2** será mostrado aqui. Isso pode ajudar você a encontrar o arquivo correto de que precisa.

![](https://files.seeedstudio.com/wiki/Alots/Alots21.png)

- **Etapa 10**. Baixe o arquivo de [código](https://github.com/0hotpotman0/AIoTs_GPS_state_tester) do Github e abra‑o com o Arduino IDE. Altere a biblioteca de terceiros para a sua própria, como acima, e então execute o código.

![](https://files.seeedstudio.com/wiki/Alots/Alots22.png)

:::note
Devido às diferenças entre as regiões do mundo, o código no arquivo deve ser ligeiramente alterado:
:::

![](https://files.seeedstudio.com/wiki/Alots/Alots35.png)

Se você conectou ao 'America server', então não há preocupações em relação ao código de exemplo, mas outros locais devem ser configurados como mostrado abaixo (`CN_470_510` significa que, na China, o valor deve estar no intervalo de 470 a 510):

![](https://files.seeedstudio.com/wiki/Alots/Alots36.png)

Por fim, o resultado deve ser algo como:

![](https://files.seeedstudio.com/wiki/Alots/connect1.jpg)

:::note
Se você quiser saber mais sobre o Edge Impulse ou se ainda houver algo não muito claro, acesse [Wio Terminal Edge Impulse Getting Started](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-TinyML-EI-1/) para obter mais informações.
:::

### Exibindo Dados no TheThingsNetwork via LoRa

Depois de treinarmos um modelo de Machine Learning e coletarmos dados, será mais divertido se pudermos transportar nossos dados para a nuvem. Neste projeto, poderemos exibir os dados na plataforma (nuvem) [TheThingsNetwork](https://www.thethingsnetwork.org/) através de LoRa.

**Hardware Necessário**

- Gateway

Você precisa configurar primeiro um gateway, permitindo que você conecte o Wio Terminal e a nuvem TTN (TheThingsNetwork).

#### Iniciando a Exibição de Dados no TheThingsNetwork

**Etapa 1** Acesse o [site do TTN](https://id.thethingsnetwork.org/oidc/interaction/3v59Li6ZEHe8cq1O0Ft1w) e crie sua conta, depois clique em `go to gateways` para configurar o dispositivo.

![](https://files.seeedstudio.com/wiki/Alots/Alots24a.png)

**Etapa 2** Clique em `Add gateway` na página Gateways.

![](https://files.seeedstudio.com/wiki/Alots/Alots25.png)

Adicione as informações do seu próprio gateway:

- Owner (seu nome)
- Gateway ID (depende do gateway)
- Gateway EUI (depende do gateway, às vezes igual ao gateway ID)
- Gateway name (à sua escolha)

![](https://files.seeedstudio.com/wiki/Alots/Alots26.png)

O `Frequence plan` nas opções LoRaWAN depende do lugar onde você mora. Antes de `Add gateway`, você pode encontrar uma página que inclui alguns clusters. A escolha do `Frequence Plan` e do cluster deve ser a mesma, o que significa que você deve escolher a área que encontrar mais próxima do seu local.

![](https://files.seeedstudio.com/wiki/Alots/Alots27.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots27a.png)

**Etapa 3** Depois que o gateway estiver configurado, você poderá adicionar o seu nó Wio Terminal conectando‑se a ele na página Applications. Clique em `Add application`:

![](https://files.seeedstudio.com/wiki/Alots/Alots28.png)

Preencha essas informações como desejar:

- Owner
- Application ID
- Application name

![](https://files.seeedstudio.com/wiki/Alots/Alots29.png)

**Passo 4** Depois que você criar um aplicativo, você pode ver na parte inferior à direita que há um `Add end device` que pode ajudar você a adicionar o dispositivo Wio Terminal.

![](https://files.seeedstudio.com/wiki/Alots/Alots30.png)

- Selecione **`Brand`** como **`Select Sense CAP`**
- escolha **`Model`** como **`LoRa-E5`**
- Hardware Ver e Firmware Ver são configurados por padrão
- Profile(Region) é definido de acordo com a sua localização (mesma região que o `Frequncy plan`)
- Frequency plan é o mesmo que a sua escolha no **Passo 2**
- AppEUI, DevEUI e AppKey são exclusivos em diferentes dispositivos LoRa-E5. Você pode encontrá-los facilmente programando um firmware [Gateway_Tester.uf2](https://files.seeedstudio.com/wiki/Alots/Gateway_Tester.uf2) no seu dispositivo. Como no tutorial do Edge Impulse, para programar um firmware você simplesmente arrasta o arquivo uf2 para a unidade após pressionar o botão esquerdo do Wio Terminal.

![](https://files.seeedstudio.com/wiki/Alots/Alots37.png)

- End Device ID será automaticamente preenchido depois que você inserir o DevEUI.

![](https://files.seeedstudio.com/wiki/Alots/Alots31.png)

**Passo 5** Depois de conectar o dispositivo, há a seleção `Payload formatters` e você precisa adicionar algum código para decodificar os dados (escolhendo o tipo Formatter como 'Javascript'):

![](https://files.seeedstudio.com/wiki/Alots/Alots32.png)

``` c++
function Decoder(bytes, port) {

  var decoded = {};
  if (port === 8) {
    decoded.Stop   = bytes[1];
    decoded.Turn   = bytes[3];
    decoded.Wave   = bytes[5];
  }

  return decoded;
}
```

**Passo 6** Por fim, vá para o gateway e clique em `Live data`. Você verá os resultados:

![](https://files.seeedstudio.com/wiki/Alots/Alots33a.png)
