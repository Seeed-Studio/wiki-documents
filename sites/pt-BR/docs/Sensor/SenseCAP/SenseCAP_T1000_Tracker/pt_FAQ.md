---
description: SenseCAP_Tracker_T1000-A/B_FAQ
title: FAQ
keywords:
  - Tracker
  - FAQ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /faq_for_SenseCAP_T1000
sku: 114993073,114993106,114993207,114993208
last_update:
  date: 2/14/2026
  author: Janet
createdAt: '2023-09-21'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/faq_for_SenseCAP_T1000/
---


## Relacionado à Localização

### Precisão do Posicionamento GPS

Os satélites de GPS transmitem seus sinais no espaço com uma certa precisão, mas o que você recebe depende de fatores adicionais, incluindo a geometria dos satélites, bloqueio de sinal, condições atmosféricas e recursos/qualidade de projeto do receptor.

Muitas coisas podem degradar a precisão do posicionamento GPS. As causas comuns incluem:

- Bloqueio do sinal do satélite devido a prédios, pontes, árvores, etc.
- Uso em ambiente interno ou subterrâneo
- Sinais refletidos por prédios ou paredes ("multipath")

Portanto, em uma área ampla e desobstruída você obterá um sinal GPS melhor, conseguindo assim resultados de posicionamento mais precisos.

### Por que não há dados de localização GPS?

- A localização por GPS pode não estar disponível quando o rastreador está em ambiente interno. O posicionamento GNSS requer um ambiente externo aberto. Se você estiver em ambiente interno, a localização por GPS pode exceder o tempo limite devido ao sinal fraco. Certifique-se de que o dispositivo esteja colocado ao ar livre para melhor precisão do GPS.

- Garanta a instalação correta do dispositivo orientando-o com a parte frontal voltada para cima para evitar obstruir a posição da antena

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/install.png" alt="pir" width={700} height="auto" /></p>

### Por que a localização por Wi-Fi ou Bluetooth não é exibida no mapa do aplicativo SenseCAP?

- A localização por Wi-Fi requer um serviço de interpretação de mapa de terceiros, que deve ser acionado pelos usuários para fazer a interpretação. Atualmente, o Mate App oferece suporte apenas à exibição de posicionamento GNSS.

- O posicionamento por Bluetooth depende de beacons Bluetooth e de suas respectivas localizações para rastreamento preciso. bloqueie a posição da antena.

## Relacionado à Rede

### Rede Helium

:::caution note
Para usuários operando na região **EU868**/**RU864**:

**Não é recomendado** definir o intervalo de envio para menos de 4 minutos.

Se você definir um intervalo de envio menor que 4 minutos, poderá notar um desalinhamento de carimbo de tempo entre o uplink do dispositivo e a hora atual.
:::

**Aqui está a justificativa**:

Dada a restrição de [1% de ciclo de trabalho](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle/#maximum-duty-cycle) em EU868, o dispositivo deve aguardar pacientemente aproximadamente 4 minutos para cada transmissão de uplink. Além disso, a rede Helium inicia correções de taxa de dados e potência somente após acumular 20 pacotes de uplink consecutivos marcados com o bit [ADR](https://docs.helium.com/console/profiles/#adr-algorithm) definido como 1.

Portanto, se o intervalo de upload definido for inferior a 4 minutos, os dados em tempo real serão temporariamente armazenados na RAM e mantidos até que a rede Helium acione as correções de taxa de dados e potência antes do envio.

### Como obter as chaves

Na página de configurações, selecione uma plataforma diferente de SenseCAP para obter as chaves.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get-keys.png" alt="pir" width={700} height="auto" /></p>

## Relacionado ao Botão

### Entrar na Rede

Pressione e segure o botão por 3 segundos, a luz verde piscará lentamente, em seguida pressione o botão uma vez, a luz verde ficará em modo respiração, e então o dispositivo tentará entrar na rede LoRaWAN.

### Reinicialização forçada

Pressione e segure o botão, depois conecte o cabo de carregamento, solte o botão após conectar, a luz verde ficará em modo respiração, e então o dispositivo será forçado a reiniciar.

## Relacionado à Bateria

### Vida útil da Bateria

A vida útil da bateria depende de fatores como intervalo de uplink, uso de sensores, distância de transmissão LoRa e temperatura de operação. A vida útil prevista da bateria é baseada em um ambiente de trabalho típico (25°C) e serve como referência. A vida útil real da bateria pode variar.

#### EU868(1C/SF12)

|Intervalo de Upload|1 minuto|5 minutos |60 minutos|1 dia|
|--|--|--|--|--|
|Vida útil da Bateria(dia)|2.62|27.21|106.78|209.3|

#### US915(1C/SF9)

|Intervalo de Upload|1 minuto|5 minutos |60 minutos|1 dia|
|--|--|--|--|--|
|Vida útil da Bateria(dia)|3.02|37.52|117.32|210.7|

Para cálculos detalhados de vida útil da bateria, consulte o [Battery Life Calculation Form](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx).

### Status de Carga

|Status|Indicador|
|----|----|
|Carregando| O LED piscará uma vez a cada 3 segundos.|
|Totalmente carregado| O LED permanecerá sempre aceso.|
|Anomalia de carregamento|Quando o dispositivo é carregado abaixo de 0 °C ou acima de 45 °C, o dispositivo entrará no estado de proteção de carga e não poderá ser carregado.<br/>O LED piscará rapidamente.|

:::caution Charging abnormality Alarm
Se o indicador `piscar rapidamente` durante o carregamento, pode ser que a tensão de alimentação esteja insuficiente ou haja mau contato.

Verifique sua fonte de alimentação ou tente outro adaptador de energia.
:::

### Quanto tempo leva para carregar totalmente?

Normalmente leva cerca de **2 horas** para carregar totalmente.

### Ele pode continuar enviando dados enquanto carrega?

Sim, ele pode continuar enviando dados enquanto carrega.

## Relacionado ao Sensor

### Sem dados do sensor

Para economizar energia, a função do sensor de temperatura/luz vem desativada por padrão, então você precisa ativá-la primeiro no SenseCAP Mate APP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/enable-sensor.png" alt="pir" width={500} height="auto" /></p>

## Dados em Cache

### Como funciona

Quando o sinal LoRaWAN é fraco ou não há cobertura de rede, os dados serão salvos no dispositivo. Quando o dispositivo retornar a uma área com cobertura de rede LoRaWAN, ele enviará primeiro os dados em tempo real e depois fará o upload dos dados em cache.

Durante cada período de upload, ele enviará primeiro a localização mais recente e depois os dados em cache.
Apenas alguns pacotes de dados históricos são enviados por ciclo, portanto isso não afetará o ciclo de trabalho.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={700} height="auto" /></p>

### Observação

Como o dispositivo pode armazenar em cache apenas cerca de 1.000 dados off-line, se você permanecer em um local sem cobertura de rede LoRaWAN por um longo tempo, quando os dados off-line atingirem o limite, alguns dados antigos serão sobrescritos por novos dados, então você pode 'perder' alguns dados.

## Como configurar em lote

Verifique o [Quick Start](https://wiki.seeedstudio.com/pt-br/Get_Started_with_SenseCAP_T1000_tracker/#connect-to-sensecap-mate-app) para configurar o primeiro dispositivo e depois clique no módulo `Template` no canto superior direito.

Clique em `Save as Template`, dê um nome ao seu template e depois clique em `Confirm`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/template-save.png" alt="pir" width={600} height="auto" /></p>

Quando você configurar outros dispositivos depois, poderá selecionar diretamente o template que salvou.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-template.png" alt="pir" width={600} height="auto" /></p>

Se quiser compartilhar seu template com outras pessoas, você pode escolher `Copy Link to Share` ou `Download Template`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/share-temp.png" alt="pir" width={600} height="auto" /></p>

Outros usuários podem optar por usar seu template copiando a URL compartilhada ou importando o arquivo de template.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/import-temp.png" alt="pir" width={600} height="auto" /></p>

## Como sair do modo DFU

Após uma falha de atualização de firmware, o dispositivo pode entrar no modo DFU. Você pode ver o nome do dispositivo `SENSECAP_GR_DFU_XXXX` no aplicativo SenseCraft e os LEDs continuam piscando.

- No modo DFU, o dispositivo sairá automaticamente após 3 minutos de inatividade.

- Se você quiser sair imediatamente, pode pressionar e segurar o botão por 3 segundos, e o dispositivo irá reiniciar e voltar à operação normal.

Se você perceber que o dispositivo não consegue sair do modo DFU, apesar de pressionar uma vez, pressionar e segurar por 3 segundos, ou pressionar e segurar por 10 segundos, siga estas etapas:

**Etapa 1: Conectar o Dispositivo no SenseCraft APP**

Siga as etapas anteriores para acessar a página de configuração Bluetooth no T1000, conecte o dispositivo e então você poderá ver a página abaixo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000-dfu-mode.png" alt="pir" width={200} height="auto" /></p>

**Etapa 2: Enviar Arquivo de Firmware**

Clique em `Upload Firmware File`, escolha o arquivo bin para gravar o firmware.

Para o arquivo de firmware mais recente, entre em contato com **techsupport@seeed.io**

## Erro de carimbo de tempo

Se você perceber que o carimbo de tempo no payload está errado, atualize o firmware para a versão mais recente.

Consulte [Firmware Upgrade and Release Note](https://wiki.seeedstudio.com/pt-br/fm_release_for_SenseCAP_T1000/) para mais detalhes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/time-error.png" alt="pir" width={400} height="auto" /></p>

## Integração

A integração de um aplicativo pode ser feita de várias maneiras, dependendo de suas necessidades e objetivos. Aqui estão algumas opções de integração comuns:

- **SenseCAP API**:

Usar uma Interface de Programação de Aplicações (API) é uma forma comum de permitir que seu aplicativo se comunique com outros aplicativos ou serviços; você pode conectar seu dispositivo à SenseCAP Cloud e então usar a SenseCAP API para obter os dados.

SenseCAP API é para usuários gerenciarem dispositivos e dados de IoT. Ela combina três tipos de métodos de API: protocolo HTTP, protocolo MQTT e protocolo WebSocket.

Consulte [SenseCAP API](https://wiki.seeedstudio.com/pt-br/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction/) para mais detalhes.

- **LoRaWAN Network Server**：

Você pode usar o [SenseCAP M2 Multi-Platform gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html), então poderá usar diretamente o LoRaWAN Network Server integrado para integração.

Consulte a [LNS Configuration](https://wiki.seeedstudio.com/pt-br/SenseCAP_m2_LNS_config) para mais detalhes.
