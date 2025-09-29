---
description: Data_OpenStream_API_Quickstart
title: Data OpenStream API クイックスタート
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /ja/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_quickstart
aliases:
  - /ja/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Quickstart
last_update:
  date: 02/14/2023
  author: Matthew
---

<div class="post-content">
<div class="summary">

このガイドでは、Eclipse Mosquitto の CLI を使用してメッセージを購読または公開し、デバイスのメッセージを購読する方法と特定のデバイスにコマンドを送信する方法について説明します。

</div>
<div id="toc"></div>
<h2 id="setup" class="clickable-header top-level-header">セットアップ</h2>
<i class="icon-arrow-up back-to-top"></i>
<ul>
  <li>Mosquitto を<a href="https://mosquitto.org/download/">インストールまたはダウンロード</a>してください。</li>
</ul>
<h2 id="credentials" class="clickable-header top-level-header">認証情報</h2>
<i class="icon-arrow-up back-to-top"></i>SenseCAP Portal を参照し、「Security/Access API keys」に移動し、「Create Access Key」をクリックすると、「Access API keys」を取得できます。これを &lt;Password&gt; として設定し、「Organization ID」を &lt;OrgID&gt; として設定してください。
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/open_api/access_key_en.png" alt="" /></figure>
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/open_api/access_key_en_2.png" alt="" /></figure>
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/open_api/access_key_en_3.png" alt="" /></figure>
<h2 id="receive-devices-messages" class="clickable-header top-level-header">デバイスのメッセージを受信する</h2>
<i class="icon-arrow-up back-to-top"></i>すべてのデバイスのメッセージを受信してみましょう。

1.ターミナルウィンドウを開き、以下のコマンドを実行してください。
<ul>
  <li>OrgID = Organization ID</li>
  <li>Password = Access API keys</li>
</ul>

```bash
mosquitto_sub -h sensecap-openstream.seeed.cn -t '/device_sensor_data/<OrgID>/+/+/+/+' -u 'org-<OrgID>' -P '<Password>' -I 'org-<OrgID>-quickstart' -v
```

上記で取得したOrganization IDとAccess API Keyを、上記の&lt;OrgID&gt;と&lt;Password&gt;に置き換えてください。

2.デバイスの電源を入れ、デバイスがメッセージを送信し続けている間、以下のようなデータを受信するはずです：
<div className="language-ruby highlighter-rouge">
  <div className="highlight">
    <pre className="highlight"><code><span className="sr">/device_sensor_data/</span><span className="mi">1234</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12000000001</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4105</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">2</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151824139</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4097</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">23</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151900992</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4101</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">101629</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151901112</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4098</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">71</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151900992</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4099</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mf">69.12</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151902224</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4100</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">437</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151922137</span><span className="p" />{"\n"}</code></pre>
  </div>
</div>

<table>
<thead>
<tr>
<th>例</th>
<th>フィールド</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr>
<td>1234</td>
<td>OrgId</td>
<td>組織ID</td>
</tr>
<tr>
<td>2CF7F12000000001</td>
<td>DeviceEUI</td>
<td>デバイスの一意識別子</td>
</tr>
<tr>
<td>1</td>
<td>Channel</td>
<td>センサーが接続されるデバイス上の物理ソケット</td>
</tr>
<tr>
<td>vs</td>
<td>Reserved</td>
<td>予約フィールド</td>
</tr>
<tr>
<td>4105</td>
<td>MeasureID</td>
<td>測定の種類、4105は風速</td>
</tr>
<tr>
<td>2</td>
<td>value</td>
<td>収集された測定値、風速は2m/s</td>
</tr>
<tr>
<td>1544151824139</td>
<td>timestamp</td>
<td>データの収集タイムスタンプ</td>
</tr>
</tbody>
</table>

<h2 id="subscribe-a-specific-key" class="clickable-header top-level-header">特定のキーを購読する</h2>
<i class="icon-arrow-up back-to-top"></i>特定のキーを指定することで、特定のデバイスやチャンネルのデータを購読できます。

例：
気温・湿度センサー（DeviceEUI: 2CF7F12210400083；チャンネル: 1；）によって収集された温度値を購読します。温度測定IDは4097です。
&lt;OrgID&gt;を組織ID、&lt;Password&gt;をアクセスAPIキーに置き換えて、以下のコマンドを実行してください：

```bash
mosquitto_sub \
  -h sensecap-openstream.seeed.cn \
  -t '/device_sensor_data/<OrgID>/2CF7F12210400083/1/vs/4097' \
  -u 'org-<OrgID>' \
  -P '<Password>' \
  -I 'org-<OrgID>-quickstart' \
  -v
```

Received the data:

```cpp
/device_sensor_data/521853156991/2CF7F12210400083/1/vs/4097 {"value":28,"timestamp":1561373812474}
```

おめでとうございます！これでMQTTを介してメッセージを監視し、受信する方法がわかりました。素晴らしいものを作ってください！

</div>
