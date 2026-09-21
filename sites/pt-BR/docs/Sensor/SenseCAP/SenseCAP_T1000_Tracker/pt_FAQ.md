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
  date: 9/19/2026
  author: Janet
createdAt: '2023-09-21'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/pt-br/faq_for_SenseCAP_T1000/
---


## Relacionado à localização

### Precisão do posicionamento GPS

Os satélites GPS transmitem seus sinais no espaço com uma certa precisão, mas o que você recebe depende de fatores adicionais, incluindo geometria dos satélites, bloqueio de sinal, condições atmosféricas e recursos/qualidade do design do receptor.

Muitas coisas podem degradar a precisão do posicionamento GPS. As causas comuns incluem:

- Bloqueio do sinal do satélite devido a prédios, pontes, árvores, etc.
- Uso em ambientes internos ou subterrâneos
- Sinais refletidos em prédios ou paredes ("multipath")

Portanto, em uma área ampla e desobstruída você obterá um sinal GPS melhor e, assim, resultados de posicionamento mais precisos.

### Por que não há dados de localização GPS?

- A localização por GPS pode não estar disponível quando o rastreador estiver em ambientes internos. O posicionamento GNSS requer um ambiente externo aberto. Se você estiver em ambiente interno, a localização por GPS pode exceder o tempo limite devido ao sinal fraco. Certifique-se de que o dispositivo esteja colocado ao ar livre para obter precisão de GPS.

- Garanta a instalação adequada do dispositivo orientando-o com a parte frontal voltada para cima para evitar obstrução da posição da antena

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/install.png" alt="pir" width={700} height="auto" /></p>

Se o seu T1000 não fornecer dados de localização GNSS, siga as etapas de solução de problemas abaixo para verificar a configuração do dispositivo, o ambiente de instalação e o status de posicionamento GNSS.


#### 1. Verifique o ambiente de instalação do dispositivo

O desempenho GNSS pode ser afetado pelo ambiente de instalação do dispositivo.

Certifique-se de que:

- **A parte frontal do T1000 não esteja obstruída**.
- O dispositivo não esteja colocado dentro de um invólucro metálico ou cercado por materiais que possam bloquear significativamente os sinais GNSS.
- **Não haja objetos metálicos próximos ao dispositivo**.
- O dispositivo seja testado em um **ambiente externo aberto** com visão desobstruída do céu.


#### 2. Aumente o tempo de varredura GNSS

O tempo de varredura GNSS determina por quanto tempo o T1000 procura por satélites GNSS durante uma operação de posicionamento.

Se o tempo de varredura GNSS for muito curto, o dispositivo pode não ter tempo suficiente para obter um fix GNSS válido, especialmente quando o dispositivo está sendo testado pela primeira vez ou em um ambiente com sinais GNSS relativamente fracos.

Abra as **Configurações gerais** do T1000 no aplicativo SenseCraft e aumente o **tempo de varredura GNSS**.

O tempo máximo de varredura GNSS é de **120 segundos**.

> **Dica:** Para solução de problemas, recomendamos usar primeiro um tempo de varredura GNSS mais longo para determinar se o problema está relacionado ao tempo disponível para aquisição de satélites.

#### 3. Verifique o status de posicionamento GNSS no payload uplink LoRaWAN

Se o T1000 ainda não fornecer uma localização, verifique o **payload uplink LoRaWAN bruto**.

O payload uplink contém o resultado e o status do posicionamento. Ao verificar o payload bruto, você pode determinar se:

- A varredura GNSS excedeu o tempo limite;
- Outro método de posicionamento foi usado;

Por exemplo, o payload a seguir é um exemplo de tempo limite de varredura GNSS:

`110100000064a763a0014100002f`

Neste exemplo, o primeiro byte 11 indica o status de posicionamento e o pacote do sensor, e o segundo byte 01 indica que a varredura GNSS excedeu o tempo limite e falhou em obter a localização. Você pode encontrar mais detalhes na documentação do formato de payload do T1000.


#### 4. Forneça o payload uplink LoRaWAN bruto

Se o problema persistir após verificar os itens acima, forneça **vários payloads uplink LoRaWAN brutos** do T1000 e entre em contato com nossa equipe de suporte técnico em techsupport@seeed.io.


### Por que a localização por Wi-Fi ou Bluetooth não é exibida no mapa do aplicativo SenseCAP?

- A localização por Wi-Fi requer um serviço de análise de mapa de terceiros, que deve ser invocado pelos usuários para a análise. Atualmente, o aplicativo Mate oferece suporte apenas à exibição de posicionamento GNSS.

- O posicionamento por Bluetooth depende de beacons Bluetooth e de suas respectivas localizações para rastreamento preciso. bloqueie a posição da antena.

## Relacionado à rede

### Rede Helium

:::caution note
Para usuários operando na região **EU868**/**RU864**:

**Não é recomendado** definir o intervalo de upload para menos de 4 minutos.

Se você definir um intervalo de upload menor que 4 minutos, poderá notar um desalinhamento de carimbo de data/hora entre o uplink do dispositivo e a hora atual.
:::

**Aqui está a justificativa**:

Dada a restrição de [ciclo de trabalho de 1%](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle/#maximum-duty-cycle) em EU868, o dispositivo deve aguardar pacientemente aproximadamente 4 minutos para cada transmissão uplink. Além disso, a rede Helium inicia correções de taxa de dados e potência somente após acumular 20 pacotes uplink consecutivos marcados com o bit [ADR](https://docs.helium.com/console/profiles/#adr-algorithm) definido como 1.

Portanto, se o intervalo de upload definido for inferior a 4 minutos, os dados em tempo real serão temporariamente armazenados na RAM e mantidos até que a rede Helium acione as correções de taxa de dados e potência antes do upload.

### Como obter as chaves

Na página de configurações, selecione uma plataforma diferente de SenseCAP para obter as chaves.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get-keys.png" alt="pir" width={700} height="auto" /></p>

## Relacionado ao botão

### Entrar na rede

Pressione e segure o botão por 3 segundos, a luz verde piscará lentamente, então pressione o botão uma vez, a luz verde ficará em modo respiração e o dispositivo tentará entrar na rede LoRaWAN.

### Reinicialização forçada

Pressione e segure o botão, em seguida conecte o cabo de carregamento, solte o botão após conectar, a luz verde ficará em modo respiração e o dispositivo será forçado a reiniciar.

## Relacionado à bateria

### Vida útil da bateria

A vida útil da bateria depende de fatores como intervalo de uplink, uso de sensores, distância de transmissão LoRa e temperatura de operação. A vida útil prevista da bateria é baseada em um ambiente de trabalho típico (25°C) e serve como referência. A vida útil real da bateria pode variar.

#### EU868(1C/SF12)

|Intervalo de upload|1 minuto|5 minutos |60 minutos|1 dia|
|--|--|--|--|--|
|Vida útil da bateria (dia)|2.62|27.21|106.78|209.3|

#### US915(1C/SF9)

|Intervalo de upload|1 minuto|5 minutos |60 minutos|1 dia|
|--|--|--|--|--|
|Vida útil da bateria (dia)|3.02|37.52|117.32|210.7|

Para cálculos detalhados da vida útil da bateria, consulte o [formulário de cálculo da vida útil da bateria](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx).

### Status de carregamento

|Status|Indicador|
|----|----|
|Carregando| O LED piscará uma vez a cada 3 segundos.|
|Totalmente carregado| O LED permanecerá sempre aceso.|
|Anomalia de carregamento|Quando o dispositivo é carregado abaixo de 0 °C ou acima de 45 °C, o dispositivo entrará no estado de proteção de carregamento e não poderá ser carregado.<br/>O LED piscará rapidamente.|

:::caution Charging abnormality Alarm
Se o indicador `piscar rapidamente` durante o carregamento, pode ser que a tensão de alimentação seja insuficiente ou haja mau contato.

Verifique sua fonte de alimentação ou tente outro adaptador de energia.
:::

### Quanto tempo leva para carregar totalmente?

Normalmente leva cerca de **2 horas** para carregar totalmente.

### Ele pode continuar enviando dados durante o carregamento?

Sim, ele pode continuar enviando dados durante o carregamento.

## Relacionado ao sensor

### Sem dados do sensor

Para economizar energia, a função do sensor de temperatura/luz é desativada por padrão, portanto, você precisa ativá-la primeiro no aplicativo SenseCAP Mate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/enable-sensor.png" alt="pir" width={500} height="auto" /></p>

## Dados em cache

### Como funciona

Quando o sinal LoRaWAN é fraco ou não há cobertura de rede, os dados serão salvos no dispositivo. Quando o dispositivo retornar a uma área com cobertura de rede LoRaWAN, ele enviará primeiro os dados em tempo real e depois fará o upload dos dados em cache.

Durante cada período de upload, ele enviará primeiro a localização mais recente e depois os dados em cache.
Apenas alguns pacotes de dados históricos são enviados por ciclo, portanto isso não afetará o ciclo de trabalho.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={700} height="auto" /></p>

### Observação

Como o dispositivo pode armazenar em cache apenas cerca de 1.000 dados offline, se você estiver em um local sem cobertura de rede LoRaWAN por um longo tempo, quando os dados offline atingirem o limite, alguns dados antigos serão sobrescritos por novos dados, então você pode "perder" alguns dados.

## Como configurar em lote

Consulte o [Guia de início rápido](https://wiki.seeedstudio.com/pt-br/Get_Started_with_SenseCAP_T1000_tracker/#connect-to-sensecap-mate-app) para configurar o primeiro dispositivo e, em seguida, clique no módulo `Template` no canto superior direito.

Clique em `Save as Template`, dê um nome ao seu template e depois clique em `Confirm`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/template-save.png" alt="pir" width={600} height="auto" /></p>

Quando você configurar outros dispositivos posteriormente, poderá selecionar diretamente o template que salvou.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-template.png" alt="pir" width={600} height="auto" /></p>

Se você quiser compartilhar seu template com outras pessoas, pode escolher `Copy Link to Share` ou `Download Template`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/share-temp.png" alt="pir" width={600} height="auto" /></p>

Outros usuários podem optar por usar seu template copiando a URL compartilhada ou importando o arquivo de template.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/import-temp.png" alt="pir" width={600} height="auto" /></p>

## Como sair do modo DFU

Após uma falha na atualização de firmware, o dispositivo pode entrar no modo DFU. Você pode ver o nome do dispositivo `SENSECAP_GR_DFU_XXXX` no aplicativo SenseCraft e os LEDs continuam piscando.

- No modo DFU, o dispositivo sairá automaticamente após 3 minutos de inatividade.

- Se você quiser sair imediatamente, pode pressionar e segurar o botão por 3 segundos, e o dispositivo será reiniciado e retornará à operação normal.

Se você perceber que o dispositivo não consegue sair do modo DFU, mesmo após pressionar uma vez, pressionar e segurar por 3 segundos ou pressionar e segurar por 10 segundos, siga estas etapas:

**Etapa 1: Conectar o dispositivo no aplicativo SenseCraft**

Siga as etapas anteriores para acessar a página de configuração de Bluetooth no T1000, conecte o dispositivo e então você verá a página abaixo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000-dfu-mode.png" alt="pir" width={200} height="auto" /></p>

**Etapa 2: Enviar arquivo de firmware**

Clique em `Upload Firmware File`, escolha o arquivo bin para gravar o firmware.

Para obter o arquivo de firmware mais recente, entre em contato com **techsupport@seeed.io**

## Erro de timestamp

Se você perceber que o timestamp no payload está incorreto, atualize o firmware para a versão mais recente.

Consulte [Firmware Upgrade and Release Note](https://wiki.seeedstudio.com/pt-br/fm_release_for_SenseCAP_T1000/) para mais detalhes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/time-error.png" alt="pir" width={400} height="auto" /></p>

## Erro de aplicativo

### Posso visualizar o status e os dados do dispositivo no aplicativo SenseCraft?

Se o dispositivo estiver conectado ao SenseCAP Cloud, você poderá visualizar o status e os dados do dispositivo, como status online, dados dos sensores e informações de posicionamento, diretamente no aplicativo SenseCraft.

Se o dispositivo estiver conectado a outra plataforma em nuvem LoRaWAN, as informações e os dados do dispositivo não serão sincronizados com o aplicativo SenseCraft. Nesse caso, você deve verificar o status correspondente do dispositivo e os dados de uplink na plataforma LoRaWAN que estiver usando.

## Integração

A integração de um aplicativo pode ser feita de várias maneiras, dependendo de suas necessidades e objetivos. Aqui estão algumas opções de integração comuns:

- **SenseCAP API**:

Usar uma Application Programming Interface (API) é uma forma comum de permitir que seu aplicativo se comunique com outros aplicativos ou serviços; você pode conectar seu dispositivo ao SenseCAP Cloud e então usar a SenseCAP API para obter os dados.

SenseCAP API é para que os usuários gerenciem dispositivos e dados de IoT. Ela combina três tipos de métodos de API: protocolo HTTP, protocolo MQTT e protocolo WebSocket.

Consulte [SenseCAP API](https://wiki.seeedstudio.com/pt-br/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction/) para mais detalhes.

- **LoRaWAN Network Server**：

Você pode usar o [SenseCAP M2 Multi-Platform gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html), e então poderá usar diretamente o LoRaWAN Network Server integrado para a integração.

Consulte a [LNS Configuration](https://wiki.seeedstudio.com/pt-br/SenseCAP_m2_LNS_config) para mais detalhes.

## Como redefinir o DevNonce no T1000

Um problema de DevNonce pode ocorrer quando o dispositivo faz tentativas repetidas de join OTAA.

Após tentativas de join repetidas por um longo período, o contador de DevNonce pode atingir seu limite e o dispositivo não consegue mais se juntar normalmente.

Um caso típico é: 
- O dispositivo foi usado por um longo tempo, mas em um determinado dia ele não consegue ingressar na rede com sucesso, mesmo que o plano de frequência do dispositivo corresponda ao plano de frequência do gateway. 
- Ao verificar os logs do dispositivo no lado do servidor, são observados erros repetidos de estouro de DevNonce.

Se o T1000 não conseguir ingressar na rede LoRaWAN devido a um problema de DevNonce, entre em contato com a equipe de suporte técnico da Seeed (techsupport@seeed.io). Podemos fornecer um firmware dedicado para limpar ou redefinir o DevNonce, permitindo que o dispositivo volte a ingressar normalmente na rede LoRaWAN.

