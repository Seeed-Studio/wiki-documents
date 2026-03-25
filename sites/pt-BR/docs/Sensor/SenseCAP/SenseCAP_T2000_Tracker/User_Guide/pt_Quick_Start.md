---
description: Get_Started_with_SenseCAP_T2000_tracker
title: Início Rápido
keywords:
  - SenseCAP_T2000_tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickStart.webp
slug: /Get_Started_with_SenseCAP_T2000_tracker
sku: 100082900,100057727,100087298
last_update:
  date: 1/5/2026
  author: Janet
createdAt: '2025-12-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Get_Started_with_SenseCAP_T2000_tracker/
---

# Primeiros Passos com o SenseCAP T2000 Tracker

Este capítulo mostra como configurar rapidamente o seu SenseCAP T2000 Tracker com o SenseCraft App.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickStart.png" alt="pir" width={800} height="auto" /></p>

:::caution note
Certifique-se de que você tem cobertura de uma rede LoRaWAN, como Helium, TTN ou outras redes LoRaWAN. Sem redes LoRaWAN, o dispositivo não consegue enviar dados para a nuvem. A maneira mais fácil de usar os trackers é com o `SenseCAP LoRaWAN Gateway` e o `SenseCraft app`.
:::

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/krE6HBgWnRA?si=CRcLRApl1NZUHhqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Visão Geral do Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Hardware_Overview.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000AB_Tracker_Hardware.jpg" alt="pir" width={800} height="auto" /></p>
<div align="center">Vista Explodida do T2000-A/B</div>  
<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000C_Tracker_Hardware.jpg" alt="pir" width={800} height="auto" /></p>
<div align="center">Vista Explodida do T2000-C com Painel Solar</div>  
<br />

### Ambiente de Operação

O SenseCAP T2000 Tracker foi projetado para operar de forma confiável dentro de uma faixa de temperatura específica para garantir desempenho estável e segurança da bateria. Certifique-se de que o dispositivo seja usado e carregado dentro dessas faixas de temperatura para evitar degradação de desempenho ou problemas na bateria.

| Parâmetro | T2000-A / T2000-B | T2000-C com Painel Solar|
|---------|------------------|--------|
| Temperatura de Operação | -40 °C ~ 85 °C | -20 °C ~ 60 °C |
| Temperatura de Carga | / | 0 °C ~ 45 °C |

## Funções do Dispositivo

### Modo de Trabalho

Para atender a diferentes cenários, existem vários modos de trabalho no SenseCAP T2000 tracker, que você pode escolher de acordo com suas necessidades.

| **Modo de Trabalho** | **Descrição** | **Cenário** |
| - | - | - |
| Modo de Espera | <ul><li>Apenas pacotes de batimento cardíaco são enviados, incluindo apenas informações da bateria.</li><li>A localização pode ser obtida usando o comando de downlink LoRa.</li></ul> | Se você precisar localizar o dispositivo por um longo período e ele puder funcionar por muito tempo antes de ser carregado, a plataforma em nuvem pode enviar um comando de solicitação de localização para localizar o dispositivo. |
| Modo Periódico | Define um intervalo no qual o dispositivo envia periodicamente localização, dados do acelerômetro de 3 eixos e informações da bateria. | Recomendado para a maioria dos cenários<ul><li>Rastreamento de ativos</li><li>Monitoramento de gado</li></ul> |
| Modo de Evento | Ajusta o intervalo de envio com base nos sensores de acelerômetro de 3 eixos, incluindo eventos de movimento, tempo limite sem movimento e eventos de choque. O dispositivo enviará localização, dados do acelerômetro de 3 eixos e informações da bateria sempre que um evento for acionado. | É recomendado quando você precisa monitorar o estado de movimento do objeto rastreado. |

### Função do Sensor

O SenseCAP T2000 Tracker está equipado com Acelerômetro de 3 Eixos.

- Você pode optar por ativar ou desativar o sensor no SenseCraft App (desativado por padrão).
- Você pode configurar os limiares correspondentes para o acelerômetro de 3 eixos com base nas necessidades da sua aplicação, eventos de movimento/sem movimento e eventos de choque são acionados.

### Cache de Dados

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_DataCache2.png" alt="pir" width={800} height="auto" /></p>

O dispositivo pode armazenar dados em cache, o que pode ser habilitado através da configuração por Bluetooth ativando `Location Data Cache`. O dispositivo envia pacotes de confirmação. Quando a cobertura do sinal LoRaWAN é fraca ou não há cobertura de rede, o dispositivo não consegue receber um ACK ao enviar dados. Nesse caso, os dados serão salvos e inseridos no próximo ciclo. Quando o dispositivo conseguir enviar dados com sucesso em algum momento, ele enviará os dados offline.

O dispositivo envia primeiro os dados de localização em tempo real. Assim que a plataforma devolver um ACK para esse uplink, o tracker começa a enviar os dados em cache armazenados localmente, a partir dos registros mais antigos para evitar sobrescrever dados mais recentes.

O intervalo de uplink do cache foi definido para 40s. Os dados em cache serão enviados continuamente nesse intervalo até que um novo uplink de localização em tempo real seja acionado ou que a plataforma pare de devolver ACKs durante o processo.

O número máximo de dados que podem ser armazenados em cache é de 1000 registros.

Clicar no botão `Clear Cache` limpará todos os dados em cache.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_DataCache.png" alt="pir" width={800} height="auto" /></p>

### Função do Botão

#### Instruções de Fixação Magnética

| **Status**        | **Operação** |
|-------------------|--------------|
| Ligar             | Aproxime o ímã da área do sensor e toque 4 vezes rapidamente. A ligação é bem-sucedida quando a luz verde acende. |
| Desligar          | Aproxime o ímã da área do sensor e toque 4 vezes rapidamente. O desligamento é bem-sucedido quando a luz verde acende. |
| Bluetooth Ligado  | Aproxime o ímã da área do sensor e toque 2 vezes rapidamente. A varredura Bluetooth é habilitada quando a luz azul pisca. |
| Bluetooth Desligado | Aproxime o ímã da área do sensor e toque 2 vezes rapidamente. |

#### Indicador de Status do LED

| Status              | Cor do LED | Padrão do Indicador      |
|---------------------|-----------|--------------------------|
| Ligado              | Verde     | Aceso por 1s             |
| Desligado           | Verde     | Aceso por 1s             |
| Conectando à Rede   | Verde     | Luz respirando           |
| Conexão Bem-sucedida| Verde     | Pisca rápido 5 vezes     |
| Falha na Conexão    | Vermelho  | Pisca rápido 5 vezes     |
| Busca por Bluetooth | Azul      | Pisca lento contínuo     |
| Bluetooth Conectado | Azul      | Aceso continuamente      |
| Alarme de Violação  | Vermelho  | Pisca rápido contínuo    |
| Atualizando Firmware| Verde     | Pisca lento contínuo     |
| Entrar no Modo DFU  | Verde     | Aceso continuamente      |

<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_PowerOn.gif" alt="pir" width={400} height="auto" /></p>
<div align="center">Ligar/Desligar</div>  
<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_GreenBreathingLight.gif" alt="pir" width={400} height="auto" /></p>
<div align="center">Após ligar, a luz verde respirando</div>
<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Bluetooth.gif" alt="pir" width={400} height="auto" /></p>
<div align="center">Entrar/Sair do modo Bluetooth</div>  

<br />

:::info Note

- Recomenda-se desligar o dispositivo se ele não estiver em uso.
- Quando ligado pela primeira vez, recomenda-se testá-lo em ambiente externo, pois o GPS precisa atualizar o horário via satélite.
- Certifique-se de que a banda de frequência corresponda à frequência do seu gateway.
:::

## Primeiros Passos

### Conectar ao SenseCraft App

- **Passo 1**: Baixar o SenseCraft App

O SenseCraft App é usado para configurar parâmetros LoRa, intervalo, vincular dispositivos à sua conta e verificar informações básicas do dispositivo.

- Para iOS, pesquise por “SenseCraft” na App Store e faça o download.
- Para Android, pesquise por “SenseCraft” na Google Store e faça o download.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/App_Download.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2**: Adicionar Dispositivo

Faça login no SenseCraft APP.
Clique na aba '+' no canto superior direito e, em seguida, escaneie o código QR no rótulo do dispositivo.
Clique em 'Add to account' e então você pode 'Configure' o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_AddDevice.png" alt="pir" width={800} height="auto" /></p>

Aproxime o ímã da área do sensor e toque 4 vezes rapidamente para ligá-lo, então o tracker entrará automaticamente no pareamento Bluetooth (se o tracker já estiver ligado, toque 2 vezes rapidamente para entrar manualmente no pareamento Bluetooth) e selecione o dispositivo pelo SN.

Existem 2 modos de configuração:

- **Configuração Rápida**: Para um início rápido, você pode selecionar a configuração rápida dos parâmetros básicos
- **Configuração Avançada**: Para definir mais parâmetros, verifique as etapas a seguir.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_ConfigurationMode.png" alt="pir" width={800} height="auto" /></p>

### Configuração Rápida

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/qne730YZtSo?si=jLYLlO8r6SgnYIEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br />

Para a Configuração Rápida, você só precisa definir os seguintes parâmetros:

- **Frequência**: deve ser a mesma do seu gateway.
- **Intervalo de uplink**: O intervalo de uplink do Modo Periódico (modo padrão), você pode definir outro modo via “Device Bluetooth Configuration” na página “User”.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickConfiguration.png" alt="pir" width={800} height="auto" /></p>

O rastreador tentará se conectar à rede LoRaWAN após sair do modo de emparelhamento Bluetooth; a luz verde respiratória pisca ao tentar se conectar à rede e pisca rapidamente 5 vezes se a conexão for bem-sucedida.

### Configuração Avançada

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ROjXT6D8xtA?si=roC5PW9Cce4Jp1Kl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br />

- Abra o APP e clique em `Device Bluetooth Configuration` na página `User`. Em seguida, selecione `SenseCAP Asset Tracker T2000` para entrar em `Setup` e configurar o rastreador.
- Siga as etapas acima para entrar no modo de emparelhamento Bluetooth.
- Selecione o dispositivo pelo S/N (o S/N está no rótulo do dispositivo) e escolha `Advanced Configuration`. Em seguida, as informações básicas do rastreador serão exibidas após a entrada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_AdvancedConfiguration.png" alt="pir" width={800} height="auto" /></p>

Há um total de quatro páginas de configuração.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_ConfigurationPage.png" alt="pir" width={800} height="auto" /></p>

Clique em `Measure` na página `Information` - `Basic`, então você obterá os valores do sensor:

1. **Acelerômetro de 3 Eixos (Valores X / Y / Z)**

- O dispositivo reporta valores de aceleração ao longo dos eixos X, Y e Z. Essas leituras ajudam os usuários a entender a postura do dispositivo, o movimento ou o estado de vibração durante a operação ou instalação.

2. **Status do Botão Antiviolação (Tamper)**
- Pressionado: o dispositivo está instalado com segurança
- Não pressionado: o dispositivo não está totalmente montado ou foi removido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Measure.png" alt="pir" width={800} height="auto" /></p>

<br />

#### Configuração de Parâmetros LoRa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000C_Tracker_Platform.png" alt="pir" width={800} height="auto" /></p>

**Plataforma**

<table align="center">
  <tbody>
    <tr>
    <td><h4>Platform</h4></td>
    <td><h4>Description</h4></td>
    </tr>
    <tr>
      <td>SenseCAP for The Things Network</td>
    <td>Plataforma padrão.
Deve ser usada com o SenseCAP Gateway. O SenseCAP constrói um servidor TTN proprietário que permite que os sensores sejam usados imediatamente quando emparelhados com um gateway SenseCAP. <br />
    <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCAP Outdoor Gateway</span></a><br />
    <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCAP Indoor Gateway</span></a></td>
    </tr>
        <tr>
    <td>SenseCAP for Helium</td>
    <td>Quando houver cobertura da rede Helium, os dados podem ser enviados via Helium. Os dispositivos operam em um console Helium privado da SenseCAP. Os usuários não precisam criar dispositivos no console Helium; funciona imediatamente com o SenseCraft App e o Portal. <br /><a href="https://explorer.helium.com/" target="_blank"><span>Helium Coverage</span></a></td>
    </tr>
        <tr>
    <td>Helium</td>
    <td>Conecte o dispositivo ao seu [Helium console](https://console.helium.com) público</td>
    </tr>
            <tr>
    <td>The Things Network</td>
    <td>Conecte o dispositivo ao seu [servidor TTN(TTS)](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3)</td>
    </tr>
            <tr>
    <td>Other Platform</td>
    <td>Outro Network Server LoRaWAN</td>
    </tr>
  </tbody>
</table>

**Plano de Frequência**

Os rastreadores são fabricados para suportar um plano de frequência universal de 863MHz~928MHz. Cada dispositivo individual pode suportar 8 planos de frequência, incluindo EU868, US915, AU915, AS923-1-TTN, AS923-2-TTN, IN865, KR920 e RU864.

<table align="center">
  <tbody>
    <tr>
    <td><h4>Parameters</h4></td>
    <td><h4>Description</h4></td>
    <td><h4></h4></td>
    </tr>
    <tr>
    <td>Frequency Plan</td>
    <td>EU868 / US915 / AU915 / KR920 / IN865 / AS923-1 / AS923-2 / RU864</td>
    <td>Padrão EU868</td>
    </tr>
        <tr>
    <td>Packet Policy</td>
    <td>1C</td>
    <td>LoRaWAN usa pacote confirmado</td>
    </tr>
            <tr>
    <td>LoRaWAN ADR</td>
    <td>Padrão ligado</td>
    <td>Parâmetros LoRaWAN; recomenda-se manter ligado como padrão</td>
    </tr>
            <tr>
    <td>Restore LoRa Configuration</td>
    <td>Quando “Platform” alterna de volta para SenseCAP a partir de outra plataforma, os parâmetros LoRa (EUI/App EUI/ App Key etc.) precisam ser restaurados</td>
    <td>Você pode usar esta função quando precisar restaurar os parâmetros LoRa para os padrões de fábrica</td>
    </tr>
  </tbody>
</table>

:::info Note
Países diferentes e Network Servers LoRaWAN diferentes usam planos de frequência distintos.<br />
Para a rede Helium, consulte: [Helium-frequency-plans](https://docs.helium.com/lorawan-on-helium/frequency-plans)<br />
Para The Things Network, consulte:[TTN-frequency-plans](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/)
Se você não tiver certeza de qual banda de frequência é necessária em sua região, consulte nossa equipe de suporte técnico ou veja [RP002-1.0.0 LoRaWAN® Regional Parameters](https://lora-alliance.org/wp-content/uploads/2019/11/rp_2-1.0.0_final_release.pdf) para informações detalhadas de frequência por região.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_FrequencyPlan.jpg" alt="pir" width={400} height="auto" /></p>

**Tipo de Ativação**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_LoRaSetup.png" alt="pir" width={800} height="auto" /></p>

O sensor suporta dois modos de acesso à rede, sendo OTAA o padrão.

|**Parameter**|**Description**|
| - | - |
|OTAA (default)|Over The Air Activation; conecta-se à rede por meio de Device EUI, App EUI e App Key.|
|ABP|Activation By Personalization; conecta-se à rede por meio de DevAddr, NwkSkey e AppSkey.|

O dispositivo usa OTAA para se conectar à rede LoRaWAN por padrão. Portanto, é possível definir o Device EUI, App EUI e App Key.

|**Parameter**|**Type**|
| - | - |
|Device EUI|<a name="ole_link10"></a>16, hexadecimal de 0 ~ F|
|App EUI|16, hexadecimal de 0 ~ F|
|App Key|32, hexadecimal de 0 ~ F|

:::info Note
Ao usar a plataforma SenseCAP, o EUI, APP EUI e APP Key são fixos e iguais aos do rótulo do sensor.<br />
Quando o sensor é selecionado para ser usado com uma plataforma pública, como Helium ou TTN, o EUI não mudará, e o sensor gerará um novo App EUI e App Key fixos para acesso à rede.<br />
Para obter informações de EUI em lote, entre em contato com nossa equipe de vendas.
:::

<br />

#### Configuração do Modo de Trabalho

Defina o modo de trabalho de acordo com suas necessidades.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_WorkMode.png" alt="pir" width={800} height="auto" /></p>

<table>
<tr><th colspan="1"><b>Parameters</b></th><th colspan="1"><b>Description</b></th><th colspan="1"><b>Default / Note</b></th></tr> <tr><td colspan="1">Heartbeat Interval</td><td colspan="1">Quando nenhum dado é enviado pelo dispositivo dentro do intervalo de heartbeat, um pacote de heartbeat será acionado. Este pacote contém apenas informações da bateria.</td><td colspan="1">Padrão 720 minutos.</td></tr> <tr><td colspan="1">Enable 3-axis Sensor</td><td colspan="1">Se esta chave estiver ligada, o sensor de 3 eixos será coletado e enviado, mas isso aumentará o consumo de energia.</td><td colspan="1">Off por padrão.</td></tr> <tr><td colspan="1">Enable Disassembly Alarm</td><td colspan="1">Se esta chave estiver ligada, o dispositivo ativa um alarme quando for removido após a instalação.</td><td colspan="1">Ativado por padrão.</td></tr> <tr><td colspan="1">Disassembly Alarm Duration(min)</td><td colspan="1">Este parâmetro especifica por quanto tempo o dispositivo continua reportando após um Disassembly Alarm ser acionado, enviando um pacote de posição em tempo real com o evento de alarme a cada minuto.</td><td colspan="1">Esta configuração só é visível quando Enable Disassembly Alarm está ligado. Padrão 3 minutos.</td></tr> <tr><td colspan="1" rowspan="3">Work Mode</td><td colspan="1"><b>Standby Mode</b></td><td colspan="1">Envia pacotes de heartbeat (apenas nível de bateria) com base no intervalo de heartbeat.</td></tr> <tr><td colspan="1"><b>Periodic Mode</b></td><td colspan="1">Os dados de localização e do sensor são enviados de acordo com o intervalo de uplink.</td></tr> <tr><td colspan="1"><b>Event Mode</b></td><td colspan="1">Define condições de disparo de limiar com base em valores medidos, como movimento e impacto, e ajusta o intervalo de uplink quando nenhum evento é disparado.</td></tr> <tr><td colspan="1">Uplink Interval (min)</td> <td colspan="1"><b>Periodic Mode</b></td> <td colspan="1">Localiza e envia dados periodicamente. Padrão 60 minutos. Maior frequência aumenta o consumo de energia.</td></tr> <tr><td colspan="1">Restore All Settings</td><td colspan="2">Restaura todos os parâmetros de configuração para as configurações de fábrica, incluindo LoRa, Work Mode e Geolocation.</td></tr>
</table>

<br />

Para o Event Mode, existem três eventos:

<table>
<tr><th><b>Event Mode</b></th><th colspan="2"><b>Description</b></th></tr>
<tr><td>Intervalo de Uplink – Não-evento (min)</td><td>Este é o intervalo de upload quando nenhum evento é acionado.</td><td><p>Padrão 60 minutos.</p><p>Faixa: 1~10080 min.</p></td></tr>
<tr><td rowspan="2">Evento de Choque</td><td>Quando o evento de choque está ativado, o choque do rastreador acionará um relatório de dados, incluindo o evento de choque, localização e dados do sensor.</td><td>Desativado por padrão.</td></tr>
<tr><td>Limiar de Movimento em 3 Eixos (mg)</td><td>O padrão é 300. Quando a aceleração exceder 300 mg, o evento de choque será acionado.</td></tr>
<tr><td rowspan="3">Evento de Movimento</td><td>Quando a aceleração exceder o valor definido, o dispositivo começa a se mover, e quando não houver movimento por 2 minutos, o movimento do dispositivo para. Defina o intervalo de upload de acordo com o início e a parada de movimento.</td><td>Desativado por padrão.</td></tr>
<tr><td>Limiar de Movimento em 3 Eixos (mg)</td><td>O padrão é 30. Quando a aceleração exceder 30 mg, determina-se que o dispositivo está em movimento; quando ficar 2 minutos abaixo desse valor, determina-se que o dispositivo está imóvel.</td></tr>
<tr><td>Intervalo de Uplink em Movimento (min)</td><td>Defina o intervalo de upload para o estado atual quando o dispositivo estiver em movimento.</td></tr>
<tr><td rowspan="2">Evento de Imobilidade</td><td colspan="2">Quando o dispositivo permanece parado em um local por mais do que um determinado tempo, um evento de tempo limite de imobilidade é acionado. </td></tr>
<tr><td>Tempo Limite de Imobilidade (min)</td><td>O padrão é 360 minutos.</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_EventMode.png" alt="pir" width={800} height="auto" /></p>

<br />

#### Configuração do Modo de Geolocalização

O rastreador suporta posicionamento via GNSS, Wi-Fi (apenas T2000-B suporta) e Bluetooth.

- **GNSS**: A longitude e latitude podem ser obtidas diretamente por meio de GPS e outros sistemas de posicionamento por satélite e, em seguida, os dados são enviados via LoRa.
- **Wi-Fi**: Varredura passiva, envia os 5 endereços MAC escaneados via LoRa.
- **BLE**: Envia os 5 endereços MAC de Beacon escaneados via LoRa.

<table>
<tr><th><b>Estratégia de Geolocalização</b></th><th colspan="2"><b>Descrição</b></th></tr>
<tr><td rowspan="9"><b>Estratégia de Geolocalização</b></td><td>Somente GNSS</td><td>Usar GNSS por padrão. Somente GNSS é usado para posicionamento.</td></tr>
<tr><td>Somente Wi-Fi</td><td>Apenas varreduras Wi-Fi são usadas para posicionamento.</td></tr>
<tr><td>Somente Bluetooth</td><td>Apenas varreduras Bluetooth são usadas para posicionamento.</td></tr>
<tr><td>GNSS + Wi-Fi</td><td>Usar GNSS antes de Wi-Fi. Se o GNSS falhar, então usar Wi-Fi em um ciclo de geolocalização.</td></tr>
<tr><td>GNSS + Bluetooth</td><td>Usar GNSS antes de Bluetooth. Se o GNSS falhar, então usar Bluetooth em um ciclo de geolocalização.</td></tr>
<tr><td>Wi-Fi + GNSS</td><td>Usar Wi-Fi antes de GNSS. Se o Wi-Fi falhar, então usar GNSS em um ciclo de geolocalização.</td></tr>
<tr><td>Bluetooth + GNSS</td><td>Usar Bluetooth antes de GNSS. Se o Bluetooth falhar, então usar GNSS em um ciclo de geolocalização.</td></tr>
<tr><td>Bluetooth + Wi-Fi</td><td>Usar Bluetooth antes de Wi-Fi. Se o Bluetooth falhar, então usar Wi-Fi em um ciclo de geolocalização.</td></tr>
<tr><td>Bluetooth + Wi-Fi + GNSS</td><td>Usar Bluetooth, Wi-Fi e GNSS para posicionamento em sequência (mudar para o próximo tipo de posicionamento após a falha de um tipo).</td></tr>
<tr><td><b>Tempo Máximo de Varredura GNSS (s)</b></td><td>O tempo máximo de espera para que o GNSS obtenha uma correção grosseira de posição.</td><td><p>O padrão é 60 s.</p><p>Não é recomendado modificar; quanto maior o tempo, maior o consumo de energia.</p></td></tr>
<tr><td><b>Tempo Limite de Varredura iBeacon (s)</b></td><td>No posicionamento por Bluetooth, o tempo máximo para o dispositivo escanear beacons Bluetooth ao redor para obter uma correção grosseira de posição.</td><td><p>O padrão é 3 s.</p><p>Faixa 1~10 s.</p></td></tr>
<tr><td><b>UUID de Grupo (Hex)</b></td><td>Permite que o rastreador apenas escaneie e reporte beacons Bluetooth cujos UUIDs correspondam ao padrão especificado, ajudando a filtrar beacons irrelevantes.</td><td><p>Defina o Filtro UUID, até 16 bytes. Por exemplo, se definido como '01 02 03 04' ele filtrará beacons com o padrão '01 02 03 04 xx xx ...'</p></td></tr>
<tr><td><b>Cache de Dados de Localização</b></td><td>Quando não puder enviar dados via LoRa, os dados serão salvos localmente (até 1000 registros) e enviados quando a cobertura LoRa for restabelecida.</td><td><p>Desativado por padrão.</p></td></tr>
<tr><td><b>Limpar Cache</b></td><td colspan="2">Limpa todos os dados históricos em cache.</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_ScanTime.png" alt="pir" width={800} height="auto" /></p>

Após configurar todos os parâmetros, clique em “Send”.
Se nenhum parâmetro precisar ser modificado, saia da configuração Bluetooth e retorne à página inicial.
Neste ponto, o dispositivo inicia uma solicitação de acesso à rede LoRa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_SendButton.png" alt="pir" width={400} height="auto" /></p>

### Visualização de Dados do Dispositivo

#### SenseCraft App

Verifique a localização no APP.
Após vincular o dispositivo, entre na página do dispositivo e clique no botão no canto superior direito para visualizar os dados históricos de localização do dispositivo.
Clique no filtro para escolher visualizar dados de localização nos modos de posicionamento como 'All/GNSS/BLE/Wi-Fi'.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_DataView.png" alt="pir" width={800} height="auto" /></p>

Clique em `History` para visualizar todos os dados históricos de posicionamento para uma data selecionada.
Clique no ícone de posicionamento no canto superior direito para visualizar todos os registros de `Positioning Abnormal`. Quando o GNSS, Wi-Fi ou Bluetooth exceder o tempo limite de varredura, o evento correspondente será mostrado nesta página.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000C_Tracker_DataView2.png" alt="pir" width={800} height="auto" /></p>

Se o dispositivo acionar um Alarme de Desmontagem, um ícone de alarme vermelho será exibido ao lado de cada pacote de dados durante o período de acionamento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Alarm1.png" alt="pir" width={800} height="auto" /></p>

Quando o alarme de desmontagem é acionado, uma mensagem de notificação de alarme será enviada para o seu telefone. Além disso, o alarme de desmontagem aparecerá nas páginas `Device` e `Details` no APP, juntamente com uma janela de notificação, o que ajuda os usuários a verificar rapidamente o status do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Alarm_Message.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Alarm2.png" alt="pir" width={800} height="auto" /></p>

#### SenseCAP Portal

A principal função do [SenseCAP Portal](https://sensecap.seeed.cc/portal/#/dashboard) é gerenciar dispositivos SenseCAP e armazenar dados. Ele é construído no Azure, um serviço de nuvem seguro e confiável da Microsoft. Os usuários podem solicitar uma conta e vincular todos os dispositivos a essa conta. O SenseCAP Portal fornece um portal web e uma API. O portal web inclui Dashboard, Gerenciamento de Dispositivos, Gerenciamento de Dados e Gerenciamento de Access Key. A API é aberta para os usuários para desenvolvimento adicional.

- **Dashboard:** Inclui Visão Geral do Dispositivo, Anúncios, Dados de Cenário e Gráfico de Dados, etc.
- **Gerenciamento de Dispositivos:** Gerenciar dispositivos SenseCAP.
- **Gerenciamento de Dados:** Gerenciar dados, incluindo Tabela de Dados e seção de Gráficos, fornecendo métodos para buscar dados.
- **Sistema de Subcontas:** Registrar subcontas com permissões diferentes.
- **Gerenciamento de Access Key:** Gerenciar Access Key (para acessar o serviço de API), incluindo Criação de Chave, Atualização de Chave e Verificação de Chave.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### Visualização de Dados do Dispositivo

Faça login no [SenseCAP Portal](http://sensecap.seeed.cc)

Se você criou uma conta pelo APP, pode fazer login diretamente.

1) Selecione registrar conta, insira as informações de e-mail e clique em "register"; o e-mail de registro será enviado para a caixa de entrada do usuário

2) Abra o e-mail "SenseCAP…", clique no link de redirecionamento, preencha as informações relevantes e conclua o registro

3) Retorne à interface de login e conclua o login

Consulte o [SenseCAP Portal User Guide](https://sensecap-docs.seeed.cc/quickstart.html) para mais detalhes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## SenseCAP API

SenseCAP API é para usuários gerenciarem dispositivos IoT e dados. Ela inclui 3 tipos de métodos de API: protocolo HTTP, protocolo MQTT e protocolo Websocket.

- Com a HTTP API, os usuários podem gerenciar dispositivos LoRa para obter dados brutos ou dados históricos.
- Com a MQTT API, os usuários podem assinar os dados de medição em tempo real do sensor por meio do protocolo MQTT.
- Com a Websocket API, os usuários podem obter dados de medição em tempo real dos sensores por meio do protocolo Websocket.

Confira o [API User Guide](https://sensecap-docs.seeed.cc/) para mais detalhes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
