---
description: Data_OpenStream_API_Quickstart
title: Referência da API Data OpenStream
keywords:
  - Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-data-platform/api/data-openstream-api/data_openstream_api_reference
aliases:
  - /Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Reference
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-03-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_reference/
---

<div class="post-content">
<div id="toc">

&nbsp;

</div>
<h2 id="the-connection-information" class="clickable-header top-level-header">As Informações de Conexão</h2>
<i class="icon-arrow-up back-to-top"></i>
<ul>
  <li>Host: Estação da China: sensecap-openstream.seeed.cn Estação Global: sensecap-openstream.seeed.cc</li>
  <li>Porta: 1883 para MQTT, ou 8083 para MQTT sobre WebSocket</li>
  <li>ClientID: org-&lt;Organization ID&gt;-&lt;Random ID&gt;, substitua &lt;Orgnization ID&gt; pelo que você obteve no SenseCAP Portal e substitua &lt;Random ID&gt; por números gerados aleatoriamente e letras minúsculas.</li>
  <li>Nome de usuário: org-&lt;Organization ID&gt;, substitua &lt;Organization ID&gt; pelo que você obteve no dashboard (consulte o guia de início rápido).</li>
  <li>Senha: obtenha chaves de acesso à API no seu SenseCAP Portal em “security /API Access Key” (consulte o guia de início rápido).</li>
</ul>
<h2 id="publish-and-subscribe-model" class="clickable-header top-level-header">Modelo de Publicação e Assinatura</h2>
<i class="icon-arrow-up back-to-top"></i>SenseCAP OpenStream API implementa o “Modelo de Publicação e Assinatura”, assim como o protocolo MQTT. Você pode conectar seu servidor à SenseCAP OpenStream API por meio de MQTT ou MQTT sobre WebSocket para se comunicar com o protocolo padrão pub-sub.

Você pode “assinar” para receber mensagens. “assinar” é a forma mais comum de monitorar continuamente os dados de telemetria dos dispositivos.
<h2 id="message-topic" class="clickable-header top-level-header">Tópico da Mensagem</h2>
<i class="icon-arrow-up back-to-top"></i>
<h3 id="receive-devices-telemeasuring-data">Receber Dados de Telemensuração do Dispositivo</h3>
Formato do tópico: /device_sensor_data/&lt;OrgID&gt;/&lt;DeviceEUI&gt;/&lt;Channel&gt;/&lt;Reserved&gt;/&lt;MeasurementID&gt;
<table>
<thead>
<tr>
<th>Campo</th>
<th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
<td>OrgID</td>
<td>Seu “Organization ID”, você pode encontrá-lo no SenseCAP Portal. Você possui um Organization ID exclusivo e todos os tópicos precisarão dele.</td>
</tr>
<tr>
<td>DeviceEUI</td>
<td>Identificação exclusiva do dispositivo</td>
</tr>
<tr>
<td>Channel</td>
<td>Um conector físico no dispositivo ao qual um sensor é conectado</td>
</tr>
<tr>
<td>Reserved</td>
<td>Reservado</td>
</tr>
<tr>
<td>MeasurementID</td>
<td>Consulte “Lista de Measurement IDs” nesta documentação</td>
</tr>
</tbody>
</table>
<div class="alert alert-info" role="alert"><i class="fa fa-info-circle"></i> <b>Nota:</b> “+” significa que não há condição de filtragem para este campo, correspondendo a todas as configurações possíveis. Portanto, “/+/+/+/+” significa escutar todos os “&lt;DeviceEUI&gt;”, “&lt;Channel&gt;”, “&lt;SensorEUI&gt;”, “&lt;MeasurementID&gt;”</div>
O tópico pode especificar condições de filtragem para implementar a escuta em dispositivos, canais e tipos de medição especificados. Por exemplo, você pode apenas escutar o dispositivo cujo ID de dispositivo é “2F000000000000”, então você pode substituir o campo &lt;DeviceEUI&gt; por 2F000000000000.

O “2F000000000000” neste exemplo deve ser um dispositivo que você já vinculou à sua conta. E você deve sempre se lembrar de substituir &lt;OrgID&gt; pelo seu próprio “Organization ID”.
<h4 id="message-body">Corpo da Mensagem</h4>

```
{
    "value": "437",
    "timestamp": "1544151922137"
}
```

Este é um dado de medição de sensor enviado por um dispositivo, que está em conformidade com o formato JSON e pode ser analisado por um parser JSON. Em geral, para a maioria dos requisitos funcionais, é necessário usar um corpo em conjunto com alguns campos no tópico.
<table>
<thead>
<tr>
<th>Campo</th>
<th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>Valor de Medição do Sensor</td>
</tr>
<tr>
<td>timestamp</td>
<td>Timestamp de coleta dos dados, unidade milissegundo</td>
</tr>
</tbody>
</table>
<h3 id="receive-devices-status-data">Receber Dados de Status do Dispositivo</h3>
Formato do tópico: /device_status_event/&lt;OrgID&gt;/&lt;DeviceEUI&gt;/&lt;Reserved&gt;/&lt;StatusID&gt;
<table>
<thead>
<tr>
<th>Campo</th>
<th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
<td>OrgID</td>
<td>Seu “Organization ID”, você pode encontrá-lo no SenseCAP Portal. Você possui um Organization ID exclusivo e todos os tópicos precisarão dele.</td>
</tr>
<tr>
<td>DeviceEUI</td>
<td>Identificação exclusiva do dispositivo</td>
</tr>
<tr>
<td>Reserved</td>
<td>Reservado</td>
</tr>
<tr>
<td>StatusID</td>
<td>Consulte “Lista de Device Status IDs” nesta documentação</td>
</tr>
</tbody>
</table>
Assine o StatusID necessário de acordo com a lista de IDs de estado do dispositivo para evitar assinar IDs inesperados
<h4 id="message-body-1">Corpo da Mensagem</h4>

```
{
    "value": "437",
    "timestamp": "1544151922137"
}
```

<table>
<thead>
<tr>
<th>Campo</th>
<th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>Valor de Status do Sensor</td>
</tr>
<tr>
<td>timestamp</td>
<td>Timestamp de coleta dos dados, unidade milissegundo</td>
</tr>
</tbody>
</table>
</div>
