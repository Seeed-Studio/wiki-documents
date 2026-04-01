---
description: Data_OpenStream_API_Quickstart
title: Guia rápido da API Data OpenStream
keywords:
  - Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-data-platform/api/data-openstream-api/data_openstream_api_quickstart
aliases:
  - /Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Quickstart
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-03-01'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_quickstart/
---

<div class="post-content">
<div class="summary">

Este guia mostrará como assinar as mensagens dos seus dispositivos e também como enviar um comando para um dispositivo específico, usando as CLIs do Eclipse Mosquitto para assinar ou publicar mensagens.

</div>
<div id="toc"></div>
<h2 id="setup" class="clickable-header top-level-header">Configuração</h2>
<i class="icon-arrow-up back-to-top"></i>
<ul>
  <li>Instale ou <a href="https://mosquitto.org/download/">faça o download</a> do Mosquitto.</li>
</ul>
<h2 id="credentials" class="clickable-header top-level-header">Credenciais</h2>
<i class="icon-arrow-up back-to-top"></i>Acesse o SenseCAP Portal, navegue até “Security/Access API keys”, clique em “Create Access Key” e você obterá as “Access API keys”. Anote-as como &lt;Password&gt; e também o “Organization ID” como &lt;OrgID&gt;.
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/open_api/access_key_en.png" alt="" /></figure>
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/open_api/access_key_en_2.png" alt="" /></figure>
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/open_api/access_key_en_3.png" alt="" /></figure>
<h2 id="receive-devices-messages" class="clickable-header top-level-header">Receber mensagens dos dispositivos</h2>
<i class="icon-arrow-up back-to-top"></i>Vamos escutar todas as mensagens dos seus dispositivos.

1.Abra uma janela de terminal e execute o seguinte comando.
<ul>
  <li>OrgID = Organization ID</li>
  <li>Password = Access API keys</li>
</ul>

```bash
mosquitto_sub -h sensecap-openstream.seeed.cn -t '/device_sensor_data/<OrgID>/+/+/+/+' -u 'org-<OrgID>' -P '<Password>' -I 'org-<OrgID>-quickstart' -v
```

Substitua o Organization ID e o Access API Key que você acabou de obter pelos &lt;OrgID&gt; e &lt;Password&gt; acima.

2.Ligue os dispositivos; enquanto os dispositivos continuarem enviando mensagens, você deverá receber dados como:
<div className="language-ruby highlighter-rouge">
  <div className="highlight">
    <pre className="highlight"><code><span className="sr">/device_sensor_data/</span><span className="mi">1234</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12000000001</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4105</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">2</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151824139</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4097</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">23</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151900992</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4101</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">101629</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151901112</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4098</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">71</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151900992</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4099</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mf">69.12</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151902224</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4100</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">437</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151922137</span><span className="p" />{"\n"}</code></pre>
  </div>
</div>

<table>
<thead>
<tr>
<th>example</th>
<th>field</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td>1234</td>
<td>OrgId</td>
<td>Organization ID</td>
</tr>
<tr>
<td>2CF7F12000000001</td>
<td>DeviceEUI</td>
<td>Identificação exclusiva do dispositivo</td>
</tr>
<tr>
<td>1</td>
<td>Channel</td>
<td>Um conector físico no dispositivo ao qual um sensor é conectado</td>
</tr>
<tr>
<td>vs</td>
<td>Reserved</td>
<td>O campo reservado</td>
</tr>
<tr>
<td>4105</td>
<td>MeasureID</td>
<td>O tipo de medição; 4105 é a velocidade do vento</td>
</tr>
<tr>
<td>2</td>
<td>value</td>
<td>Medições coletadas; a velocidade do vento é 2 m/s</td>
</tr>
<tr>
<td>1544151824139</td>
<td>timestamp</td>
<td>O timestamp de coleta dos dados</td>
</tr>
</tbody>
</table>

<h2 id="subscribe-a-specific-key" class="clickable-header top-level-header">Assinar uma chave específica</h2>
<i class="icon-arrow-up back-to-top"></i>Especificar uma chave permite que você assine dados de um dispositivo ou canal em particular.

Exemplo:
Assinar o valor de temperatura coletado pelo sensor de temperatura e umidade do ar (DeviceEUI: 2CF7F12210400083; Channel: 1;). O ID da medição de temperatura é 4097.
Substitua &lt;OrgID&gt; por Organization ID, &lt;Password&gt; por Access API Key e execute o comando:

```bash
mosquitto_sub \
  -h sensecap-openstream.seeed.cn \
  -t '/device_sensor_data/<OrgID>/2CF7F12210400083/1/vs/4097' \
  -u 'org-<OrgID>' \
  -P '<Password>' \
  -I 'org-<OrgID>-quickstart' \
  -v
```

Dados recebidos:

```cpp
/device_sensor_data/521853156991/2CF7F12210400083/1/vs/4097 {"value":28,"timestamp":1561373812474}
```

Parabéns! Agora você sabe como monitorar e receber mensagens via MQTT. Vá construir algo incrível!

</div>
