---
description: SenseCAP_Tracker_T1000-A/B_IPS
title: Guia do Sistema de Posicionamento Interno SenseCAP T1000
keywords:
  - Tracker
  - BLE
  - Posicionamento
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /IPS_For_SenseCAP_T1000_Traker
sku: E2025081201,E2025081501
last_update:
  date: 10/20/2023
  author: Jessie
createdAt: '2023-10-19'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/pt-br/IPS_For_SenseCAP_T1000_Traker/
---


Este capítulo fornece uma orientação geral sobre como integrar o [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) em uma solução de posicionamento interno usando o Traxmate.

[Traxmate](https://traxmate.io/) é uma plataforma IoT que permite que você ou seus clientes implantem, de forma fácil e eficiente, uma solução completa de rastreamento IoT, com recursos integrados de posicionamento, rastreamento e roteamento em ambientes internos e externos.

:::tip Procurando uma alternativa self-hosted?
Se você prefere executar seu próprio dashboard sem assinatura de plataforma de terceiros, confira o **[Campus-level BLE Beacon Positioning System](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)** — uma solução BLE-beacon + LoRaWAN pronta para implantação que você pode iniciar com um clique usando o SenseCraft Solution (ou fazer self-host via Docker).
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/system-archi.png" alt="pir" width={800} height="auto" /></p>

## Visão geral da arquitetura

Abaixo você encontra resumos breves, mas leia o restante do documento para ter uma visão completa.

● Faça login no Traxmate e crie seu(s) prédio(s).<br/>
● Implemente mais pontos de acesso Wi-Fi e/ou a [implantação de beacons de localização Bluetooth E5](https://wiki.seeedstudio.com/pt-br/bluetooth_beacon_for_SenseCAP_Traker/#diretrizes-de-implantação) (se necessário).<br/>
● Realize um levantamento interno para verificar a precisão fornecida pela sua infraestrutura Wi-Fi e/ou Bluetooth já instalada.<br/>
● Faça um novo levantamento interno para validar.<br/>
● Repita as etapas acima ou comece a usar a solução de posicionamento interno.<br/>
● Conecte o dispositivo ao [TTN](https://www.thethingsnetwork.org/) e envie dados para o Traxmate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/flow.png" alt="pir" width={800} height="auto" /></p>

## Implantar os beacons Wi-Fi/Bluetooth

Se você ainda não possui uma infraestrutura instalada de pontos de acesso Wi-Fi e/ou beacons Bluetooth, pode fazer uma implantação otimizada para posicionamento. A maioria das infraestruturas de pontos de acesso Wi-Fi já implantadas foi posicionada, muito provavelmente, para otimizar o alcance e o desempenho da conexão de dados. Ao considerar também o posicionamento, pense em “espalhar e manter próximo a cantos e paredes, e com maior densidade nas áreas onde você deseja maior precisão”.

:::tip
Beacons Bluetooth geralmente são alimentados por bateria e, portanto, podem ser implantados com mais facilidade. Pontos de acesso Wi-Fi têm maior alcance. Uma grade densa de beacons Bluetooth fornece melhor precisão do que uma grade esparsa de pontos de acesso Wi-Fi.
:::

Consulte [implantação de beacons de localização Bluetooth E5](https://wiki.seeedstudio.com/pt-br/bluetooth_beacon_for_SenseCAP_Traker/#diretrizes-de-implantação) para mais detalhes.

## Adicionar locais

Navegue até `Places` -> `Add New`, depois clique no mapa ou pesquise um endereço ou nome, clique no pop-up `Add place` e envie os detalhes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-place.png" alt="pir" width={800} height="auto" /></p>

O próximo passo é especificar o número de andares do prédio e enviar mapas de planta para os andares onde você deseja habilitar o posicionamento interno. O envio de mapas de planta aceita arquivos PNG e JPEG. Depois de enviar o arquivo, você usa ferramentas para dimensionar, girar e posicioná-lo corretamente no mapa. Há também uma ferramenta para recortar o arquivo PNG/JPEG de acordo com o formato do prédio.

Depois de configurar o prédio, clique em `SAVE`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buildings.png" alt="pir" width={800} height="auto" /></p>

## Fazer o levantamento

Depois que o prédio for adicionado e os mapas de planta enviados, é hora de realizar o levantamento usando o aplicativo Traxmate (versão Android).

:::note
A versão iOS do aplicativo Traxmate não pode ser usada, pois o iOS não oferece suporte à varredura de Wi-Fi por aplicativos de terceiros.
:::

:::tip
O Android normalmente tem uma limitação de com que frequência os aplicativos podem fazer varredura de Wi-Fi, definida como uma vez a cada 30 segundos. Para obter um levantamento mais preciso, é recomendável desativar essa limitação. Você precisa colocar o Android no modo desenvolvedor para conseguir fazer isso.

Vá para `Settings` > `Developer options` > encontre "Wi-Fi scan throttling" > desative (ou Settings>System>Advanced>Developer options).
Com o WiFi scan throttling desativado no seu Android, você pode ter certeza de que o NetSpot fará o seu melhor durante o levantamento, escaneando e analisando sua área de rede sem fio.<br/>
Confira mais informações [aqui](https://developer.android.com/guide/topics/connectivity/wifi-scan
).
:::

Abra o aplicativo e faça login, selecione `Places` -> `Select your Place` -> `Select Floor` -> `Start Survey`.

O aplicativo fará varreduras contínuas de Wi-Fis e Bluetooth. Você deve treinar o sistema de posicionamento interno colocando repetidamente Pontos de Referência. Quanto mais Pontos de Referência, melhor. O Ponto de Referência deve ser colocado no mapa de forma a representar onde você está fisicamente localizado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/survey1.png" alt="pir" width={600} height="auto" /></p>

● Você posiciona o ponto de referência ampliando e movendo o mapa de modo que o local onde você está fique sob a mira. Quando tiver mirado corretamente, clique no botão com o sinal de mais (+).<br/><br/>
● Em seguida, continue andando, tentando ao máximo caminhar em linha reta com velocidade constante.
Uma velocidade um pouco mais lenta do que a caminhada normal é recomendada. Mire em um novo bom local para usar como Ponto de Referência. Bons locais são pontos facilmente reconhecíveis no mapa, como cantos, cruzamentos, portas, elevadores, escadas e similares.<br/><br/>
● Coloque Pontos de Referência a cada 5–10 metros, no mínimo. Quanto mais precisamente você posicionar os Pontos de Referência, mais preciso será o posicionamento interno.<br/><br/>
● Quando você tiver feito o levantamento de toda a seção ou andar, pare o levantamento pressionando o botão vermelho de parada. O levantamento será enviado para o servidor e processado. Em um ou alguns minutos, haverá um novo Modelo de Prédio (consulte o capítulo sobre modelos de prédio) publicado automaticamente para o seu prédio (se o levantamento tiver contribuído de forma positiva e melhorado a precisão).

## Avaliar a precisão atualmente fornecida

Depois de realizar os levantamentos internos, é necessário avaliar os resultados. Faça login no [portal Traxmate](https://online.traxmate.io/) e acesse a aba Positioning do seu Local/Prédio.
Os dados brutos dos levantamentos serão processados pelos servidores de back-end e os resultados estarão disponíveis como Modelos de Prédio. Os detalhes do Modelo de Prédio publicado mais recentemente são exibidos na aba Positioning.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/51.png" alt="pir" width={800} height="auto" /></p>

<center><i>Esta imagem mostra que há um erro mediano de 4,33 metros. 51% do prédio foi coberto pelos levantamentos realizados, e verificou-se que Wi-Fis e Bluetooth (Cobertura RF) cobrem 13% do prédio</i></center>

### Modelos de prédio e o erro mediano

Um modelo de prédio é uma representação eletrônica de onde os beacons estão posicionados dentro de um prédio. O modelo de prédio é gerado quando um usuário (ou vários) realiza levantamentos ou trilhas de referência. Assim que estes são finalizados, são enviados ao sistema para serem calculados em um modelo de prédio.

Para cada modelo de prédio é calculado um erro mediano. O erro mediano é baseado na diferença (o erro) entre a trilha de referência/ground-truth (gerada pelo ponto de referência colocado durante o levantamento) e a trilha calculada (com base no posicionamento interno fornecido pela Combain Location API). O sistema seleciona automaticamente a publicação do melhor modelo de prédio disponível. O algoritmo para definir o “melhor” é baseado em uma combinação da taxa de cobertura e do erro mediano.

O processo automático pode ser substituído publicando manualmente um modelo de prédio selecionado. Os modelos de prédio podem ser editados. Os usuários podem adicionar ou editar beacons para melhorar ainda mais o esforço de posicionamento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model98.png" alt="pir" width={400} height="auto" /></p>

<center><i>Mostrando o modelo de prédio publicado 1892 para o prédio Mattehuset1. Ele possui, no total, 98 modelos de prédio disponíveis. O modelo de prédio atual inclui 179 endereços MAC Wi-Fi exclusivos e cobre 4 de 6 andares. O erro mediano para todos os andares é de 4,33 m. O melhor andar (veja a Figura 9) foi o Andar 3, com erro mediano de 3,9 m.</i></center>

### Mapa de cobertura do levantamento, cobertura RF e erro mediano

Ao avaliar um modelo de prédio específico, para ver se e como a precisão pode ser melhorada, pode ser útil observar os mapas de Cobertura do Levantamento, Cobertura RF e Erro Mediano.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sc-rf.png" alt="pir" width={800} height="auto" /></p>

### Como melhorar a precisão do posicionamento interno

Ao revisar o mapa de Erro Mediano e perceber que o erro mediano fornecido não está alinhado com os requisitos do seu caso de uso, é hora de analisar como a precisão pode ser melhorada.

●  **Passo 1** - Mais levantamentos<br/>
Você realizou levantamentos em todas as áreas do prédio onde pretende usar o posicionamento interno?
Se não, realize mais levantamentos.

●  **Passo 2** - Aumentar a cobertura Wi-Fi e Bluetooth<br/>
Você tem Wi-Fi e Bluetooth em todas as áreas do prédio onde pretende usar o posicionamento interno?
Se não, implemente mais pontos de acesso Wi-Fi e beacons Bluetooth nessas áreas e realize levantamentos nelas.

●  **Passo 3** - Aumentar a densidade de Wi-Fi e Bluetooth<br/>
Você tem Wi-Fi e Bluetooth em todas as áreas do prédio, mas a precisão ainda não é boa o suficiente.
Revise a densidade de Wi-Fi e Bluetooth nessas áreas. Compare com as tabelas no Apêndice 1 e veja se, de uma perspectiva teórica e simulada, é recomendado aumentar a densidade de Wi-Fis e Bluetooth para atender aos seus requisitos. Se sim, implemente mais Wi-Fis e beacons Bluetooth nessas áreas.

●  **Etapa 4** - Aumentar a precisão da pesquisa<br/>
Você tem Wi-Fi e Bluetooth em todas as áreas do prédio e a densidade está de acordo com os níveis teóricos sugeridos pelo Apêndice 1 para atender aos seus requisitos, MAS a precisão ainda não é boa o suficiente.
Realize pesquisas mais detalhadas. Certifique-se de posicionar pontos de referência com a maior frequência possível (uma vez por metro quadrado é o ideal) e com a maior precisão possível. É importante que você seja preciso e correto ao posicionar o ponto de referência no mapa. É relativamente fácil cometer erros e colocá-los em outros lugares que não correspondem à sua localização real.

## Começar a usar

O SenseCAP T1000 Tracker coleta as informações de varredura de Wi-Fi e Bluetooth, endereços MAC e intensidade de sinal e envia isso para o The Things Stack, depois envia para o portal Traxmate via API.

Verifique primeiro o [Connect to TTN](https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_tracker_TTN/) para configurar o tracker corretamente.

### Adicionar dispositivo

Faça login no portal Traxmate, navegue até `Devices` -> `Add new` -> `Device`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-devices.png" alt="pir" width={800} height="auto" /></p>

### Configuração do TTS

Faça login no [The Things Stack](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3), navegue até `Integrations` → `Webhooks` e clique em `Add Webhook`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Escolha o modelo `Custom Webhook`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-web.png" alt="pir" width={800} height="auto" /></p>

Dê um nome ao seu Webhook ID e selecione o formato `JSON`, depois copie a Base URL.

```cpp
https://capture.v1.traxmate.io/service/<Service Token>/device
```

:::tip
Navegue até `Settings` -> `Account` e copie o Service Token.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/service-token.png" alt="pir" width={800} height="auto" /></p>
:::

Habilite o seguinte tipo de evento recomendado e clique em `Add webhook`.

- Mensagem uplink
- Uplink normalizado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/websettings.png" alt="pir" width={800} height="auto" /></p>

### Verificar os dados do dispositivo

Quando o dispositivo estiver conectado com sucesso, volte ao portal Traxmate e você verá os dados do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-data.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-map.png" alt="pir" width={800} height="auto" /></p>

## Apêndice

### Requisitos de precisão

**O método e a tecnologia que descrevemos neste capítulo são adequados para casos de uso que exigem algo em torno de 2 a 10 metros de erro mediano.**

Todos os requisitos de precisão devem ser baseados nas necessidades dos casos de uso. Alguns casos de uso têm requisitos mais altos do que outros e alguns casos de uso têm um orçamento disponível maior para infraestrutura de posicionamento interno do que outros. A solução deve buscar encontrar um equilíbrio entre os requisitos de precisão e o orçamento disponível. A regra geral é: quanto mais dinheiro e esforço forem investidos em infraestrutura, melhor será a precisão. Mas observe que muitos casos de uso podem ser atendidos utilizando uma infraestrutura já existente.

Os gráficos a seguir mostram qual precisão você pode esperar se tiver uma determinada quantidade de Wi-Fis/Bluetooth para um determinado número de metros quadrados.

### Matriz estimada de precisão em ambientes internos

As tabelas abaixo mostram qual precisão estimada você pode esperar em um ambiente interno usando o posicionamento interno baseado em IA (ANN). A precisão dependerá da área a ser coberta e da quantidade de pontos de acesso Wi-Fi (APs) ou beacons Bluetooth instalados.

O erro mediano de precisão é:

● VERDE de 1 até 5 metros<br/>
● AMARELO de 5 até 10<br/>
● VERMELHO 10 metros<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table1.png" alt="pir" width={700} height="auto" /></p><center><i>Tabela mostrando a precisão se você tiver realizado uma pesquisa muito detalhada com um ponto de referência por 1 metro quadrado.</i></center>
<br/>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table2.png" alt="pir" width={700} height="auto" /></p><center><i>Tabela mostrando a precisão se você tiver realizado uma pesquisa detalhada com um ponto de referência por 4 metros quadrados.</i></center>
<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table3.png" alt="pir" width={700} height="auto" /></p><center><i>Tabela mostrando a precisão se você tiver realizado uma pesquisa esparsa com um ponto de referência por 100 metros quadrados.</i></center>
