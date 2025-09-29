---
description: Data_OpenStream_API_Quickstart
title: Data OpenStream API 参考
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /cn/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_reference
aliases:
  - /cn/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Reference
last_update:
  date: 02/14/2023
  author: Matthew
---

<div class="post-content">
<div id="toc">

&nbsp;

</div>
<h2 id="the-connection-information" class="clickable-header top-level-header">连接信息</h2>
<i class="icon-arrow-up back-to-top"></i>
<ul>
  <li>主机: 中国站: sensecap-openstream.seeed.cn 全球站: sensecap-openstream.seeed.cc</li>
  <li>端口: 1883 用于 MQTT，或 8083 用于 MQTT Over WebSocket</li>
  <li>ClientID: org-&lt;Organization ID&gt;-&lt;Random ID&gt;，将 &lt;Orgnization ID&gt; 替换为您从 SenseCAP Portal 获得的组织 ID，将 &lt;Random ID&gt; 替换为您随机生成的数字和小写字母。</li>
  <li>用户名: org-&lt;Organization ID&gt;，将 &lt;Organization ID&gt; 替换为您从仪表板获得的组织 ID（参考快速入门）。</li>
  <li>密码: 在您的 SenseCAP Portal "安全 /API 访问密钥" 中获取访问 API 密钥（参考快速入门）。</li>
</ul>
<h2 id="publish-and-subscribe-model" class="clickable-header top-level-header">发布和订阅模型</h2>
<i class="icon-arrow-up back-to-top"></i>SenseCAP OpenStream API 实现了"发布和订阅模型"，就像 MQTT 协议一样。您可以通过 MQTT 或 MQTT Over WebSocket 将您的服务器连接到 SenseCAP OpenStream API，以使用标准的发布-订阅协议进行通信。

您可以"订阅"来接收消息。"订阅"是持续监控设备遥测数据的最常见方式。
<h2 id="message-topic" class="clickable-header top-level-header">消息主题</h2>
<i class="icon-arrow-up back-to-top"></i>
<h3 id="receive-devices-telemeasuring-data">接收设备的遥测数据</h3>
主题格式: /device_sensor_data/&lt;OrgID&gt;/&lt;DeviceEUI&gt;/&lt;Channel&gt;/&lt;Reserved&gt;/&lt;MeasurementID&gt;
<table>
<thead>
<tr>
<th>字段</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>OrgID</td>
<td>您的"组织 ID"，您可以在 SenseCAP Portal 上找到它。您拥有唯一的组织 ID，所有主题都需要它。</td>
</tr>
<tr>
<td>DeviceEUI</td>
<td>设备的唯一标识</td>
</tr>
<tr>
<td>Channel</td>
<td>设备上用于连接传感器的物理插槽</td>
</tr>
<tr>
<td>Reserved</td>
<td>保留字段</td>
</tr>
<tr>
<td>MeasurementID</td>
<td>请参考本文档中的"测量 ID 列表"</td>
</tr>
</tbody>
</table>
<div class="alert alert-info" role="alert"><i class="fa fa-info-circle"></i> <b>注意:</b> "+" 表示此字段没有过滤条件，匹配所有可能的配置。因此，"/+/+/+/+" 表示监听所有 "&lt;DeviceEUI&gt;"、"&lt;Channel&gt;"、"&lt;SensorEUI&gt;"、"&lt;MeasurementID&gt;"</div>
主题可以指定过滤条件来实现对指定设备、通道和测量类型的监听。例如，如果您只想监听设备 ID 为 "2F000000000000" 的设备，那么您可以将 &lt;DeviceEUI&gt; 字段替换为 2F000000000000。

此示例中的 "2F000000000000" 必须是您已经绑定到您账户的设备。您应该始终记住将 &lt;OrgID&gt; 替换为您自己的"组织 ID"。
<h4 id="message-body">消息体</h4>

```
{
    "value": "437",
    "timestamp": "1544151922137"
}
```

这是设备上传的传感器测量数据，符合 JSON 格式，可以通过 JSON 解析器解析。一般来说，对于大多数功能需求，消息体需要与主题中的某些字段结合使用。
<table>
<thead>
<tr>
<th>字段</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>传感器的测量值</td>
</tr>
<tr>
<td>timestamp</td>
<td>数据的采集时间戳，单位毫秒</td>
</tr>
</tbody>
</table>
<h3 id="receive-devices-status-data">接收设备的状态数据</h3>
主题格式: /device_status_event/&lt;OrgID&gt;/&lt;DeviceEUI&gt;/&lt;Reserved&gt;/&lt;StatusID&gt;
<table>
<thead>
<tr>
<th>字段</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>OrgID</td>
<td>您的"组织 ID"，您可以在 SenseCAP Portal 上找到它。您拥有唯一的组织 ID，所有主题都需要它。</td>
</tr>
<tr>
<td>DeviceEUI</td>
<td>设备的唯一标识</td>
</tr>
<tr>
<td>Reserved</td>
<td>保留字段</td>
</tr>
<tr>
<td>StatusID</td>
<td>请参考本文档中的"设备状态 ID 列表"</td>
</tr>
</tbody>
</table>
根据设备状态 ID 列表订阅所需的 StatusID，以避免订阅意外的 ID
<h4 id="message-body-1">消息体</h4>

```
{
    "value": "437",
    "timestamp": "1544151922137"
}
```

<table>
<thead>
<tr>
<th>字段</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>传感器的状态值</td>
</tr>
<tr>
<td>timestamp</td>
<td>数据的采集时间戳，单位毫秒</td>
</tr>
</tbody>
</table>
</div>
