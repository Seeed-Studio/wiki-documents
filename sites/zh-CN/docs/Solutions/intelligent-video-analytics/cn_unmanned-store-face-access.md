---
description: 无人值守门口的人脸门禁：需要哪些硬件、怎么部署、有哪些接口，以及人脸库激活、开门时间与拒绝的实测数据
title: 无人门店人脸门禁：硬件构成、人脸库下发与实测边界
keywords:
  - 无人门店 人脸门禁
  - 人脸识别 门禁
  - 静默活体 防照片攻击
  - 人脸库 版本化 下发
  - MQTT 继电器 开门
  - 审计日志 哈希链
  - reCamera Pro GPIO 继电器
  - XIAO ESP32-S3 MQTT 继电器节点
  - InsightFace buffalo_l 许可
  - 门禁 可部署方案
image: https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/live-recognition-ce7667d4.jpg
slug: /solutions/unmanned-store-face-access
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/cn/solutions/unmanned-store-face-access/
generated_from: sensecraft-solutions@e1864ef
---

:::caution[使用须知]
不是安防认证产品，也不是人身安全系统。参考人脸权重（InsightFace `buffalo_l`）只授权非商业研究用途，商业部署要换成有商用授权的模型。
:::

## 这套方案是干什么的

一道没有人站在后面的门，门口的摄像头识别人脸，要求静默活体检查通过，再核对当前人脸库、
时段与黑名单——全部成立时才给继电器一个脉冲，由继电器切换一把跑在独立 12/24 V 电源上的
门锁。每一次判定，放行与拒绝一样，都发到 MQTT 并追加进带哈希链的审计日志，管理界面上
可以校验这条链。

它适合无人或少人值守门店的员工入口、库房与后门；名单每周都变、注册要能自助完成的共享
办公；留痕比吞吐更重要的设备间；以及门口本来就有 RTSP 摄像头、又不想换掉它们的站点。

- 选型与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/unmanned_store_access)
- 开源地址：暂无，代码目前在内部仓库。

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>断网照常开门（五个套餐中的三个）</h3>
                <p>识别、活体、判定和开门都在门口完成。设备连不上云端时，用最近一次加载成功的人脸库继续开门。两个 MQTT 继电器套餐的开门信号要经网络传到继电器。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>人脸库自动下发并校验</h3>
                <p>设备轮询新版本，分块下载，逐文件 SHA-256 校验、清单验签后原子切换；任何一步失败都保留旧版本。标准版 reCamera 实测激活时延 p50 491.6 ms。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>删除的人不会被回滚带回</h3>
                <p>移除一个人会生成一个不含他的新版本，并写入一条删除屏障。此后回滚到任何仍包含此人的版本都会被点名拒绝。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>每次判定都有审计记录</h3>
                <p>放行与拒绝都发到 MQTT，并追加进带哈希链的审计日志。改动任何一条历史记录，管理界面的链校验都会报出来。</p>
            </div>
        </li>
    </ul>
</div>

### 门口那台设备看到什么

reCamera Pro 的识别画面：人脸框上带着匹配到的人员编号与本次判定，画面里没有人时只保留取景。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/live-recognition-ce7667d4.jpg" alt="reCamera Pro 应用页的识别画面：人脸框与本次判定结果"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/live-no-person-5ee3d054.jpg" alt="同一机位在无人时的画面，用于确认取景与曝光"/>
</div>

## 需要哪些硬件

门口三个设备角色，加一台云端或本地主机。

**① 门口的摄像头。** 要么用设备自带的传感器（reCamera Pro 或标准版 reCamera），
要么用现有的 RTSP 摄像头接一台单独的主机。安装高度大致齐面部，取景要让人真正停下来的
距离上单张人脸在画面里占到可用比例。逆光门口与玻璃反光是常见的识别失败原因。

**② 做识别与判定的那台机器。**

| 识别主机 | 识别在哪里跑 | 安装形态 |
|---|---|---|
| reCamera Pro（RV1126B） | 摄像头本机，跑在已有的人脸识别应用旁边 | 装在摄像头本机，不用容器（Buildroot 系统，没有 docker） |
| 标准版 reCamera（SG2002 / CV181x） | 摄像头本机，在同一个原生进程里完成检测、嵌入、活体与匹配 | 拷一个小守护进程，不用容器 |
| reComputer Industrial J20 | 容器里，接现有 RTSP 流 | 经 SSH 部署容器 |
| reComputer J30 / J40 / R2000 | 容器里，接现有 RTSP 流 | 经 SSH 部署容器 |

**③ 继电器。** 锁必须接在继电器或干接点后面，用独立的 12/24 V 电源，
与计算板的供电分开。锁的工作电流 300 mA–1 A，GPIO 引脚和光隔数字输出只有 mA 级。
`active_high`、`pulse_ms`、`relay_contact`、`fail_mode` 这四项按安装现场配置，不设
默认值：断电即开的电磁锁接到常开触点上，门会一直敞着，不实测看不出来。

**④ 云端或本地主机。** 任意装了 Docker 的 amd64 或 arm64 Linux 机器，不需要 GPU。
它跑人脸库服务、管理界面与 MQTT broker，必须对每一台门口设备可达，并且自身时钟必须
准确——没有 RTC 的设备靠它的 HTTP `Date` 头做时间修正。

## 现场怎么部署

两部分，顺序不能反。

### 一、接门：先 LED，再继电器，最后锁

在 LED 上确认极性与脉宽，在继电器上确认触点会响，之后才把锁接上去。断电即开的电磁锁
走 COM/NC，断电即锁的电插锁走 COM/NO。接反会让门一直敞着，所以 `relay_contact`
不设默认值。

**先确认 GPIO 引脚空闲。** 盘点过的一台 reCamera Pro 上，`gpio131` 已被另一个
应用 export 并驱动。执行器在引脚当前状态与配置的空闲状态不符时拒绝启动，除非被显式
要求，否则不会接管任何引脚。reCamera 2002 HQ PoE 的底板上有一组 6-pin 排针，三路 IO
（D1 = sysfs 490，唯一一路非复用；CLK = 487；SMD = 488），但排针的电平极性与可供电流
厂商文档里没有写，用万用表和 LED 确认之前不要在那里接锁。J20 上按设计 spec，
DO1–DO4 是 sysfs 463/464/465/462；目标镜像以这种方式还是通过 `Jetson.GPIO` 暴露
它们，还没有在真机上确认。

### 二、先起云端，再装设备侧

逐套餐的完整步骤在可部署方案页，那里按现场条件选完配置后可以直接下载对应的应用包。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/unmanned_store_access" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并下载应用包 🖱️</font></span></strong>
    </a>
</div><br />

云端是人脸库服务、管理界面与一个 broker，来自 `assets/cloud/` 下的 compose 文件。
一个 token 都没配时管理界面直接拒绝启动。**共享 token 走明文 HTTP 等于没有鉴权**，要在反向代理上终止 TLS。随包的 broker 配置
是匿名明文，只用于测试；生产环境需要 TLS、按设备身份认证和 topic ACL，随包配置里都没有。

设备侧各套餐不同：reComputer 各套餐经 SSH 部署容器，两台 reCamera 都是拷一个
守护进程。

云端起来之后，先在管理界面的设备页确认这台门口设备已经上线、心跳与人脸库版本正常：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-devices-zh-9db4d54c.png" alt="管理界面设备页：设备在线状态、心跳、当前人脸库版本与执行器健康"/>
</div>

再在人员页把要放行的人注册进去。注册后会生成一个新的人脸库版本，设备下一次轮询时拉取。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-persons-zh-f4a1dfcb.png" alt="管理界面人员页：已注册人员列表与注册入口"/>
</div>

下面是一次完整的操作：注册一个人、发布新版本、设备拉取并切换、门口识别通过。

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-flow-7a02b8a9.gif" alt="从注册到设备拉取新人脸库、再到门口识别通过的完整流程"/>
</div>

接锁之前先在 PoE 底板上确认那一路 GPIO 真的能被驱动：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/poe-activation-2de5d904.png" alt="reCamera 2002 HQ PoE 上执行器启动、占用 D1 一路 GPIO 的日志"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/gpio-relay-check-ad22020d.png" alt="同一路 GPIO（sysfs 490）在一次放行判定后的电平回读"/>
</div>

<!-- TODO 图：门口实景（摄像头 + 继电器 + 锁的现场安装照）——需现场拍 -->

局域网内允许把人脸库配成明文 `http://` 地址，但必须带对 manifest 的 HMAC-SHA256 签名；
没有密钥设备拒绝启动。签名防的是链路上的篡改；任何一台设备的密钥泄漏，都可以用来伪造人脸库。

## 有哪些接口

对外界面是五个 MQTT 主题加两组 HTTP 接口。

| 主题 / 接口 | 内容 | retained |
|---|---|---|
| `access/v1/events`（MQTT 8883，QoS 1） | 每次判定一条 JSON——见下 | 否 |
| `access/v1/status/{device_id}` | 30 秒心跳：执行器健康、人脸库版本与 model tag、活体是否已加载 | 仅遗嘱 |
| `access/v1/commands/{door_id}` | `unlock` / `hold_open` / `lock` | **绝不** |
| `access/v1/receipts/{command_id}` | 一条指令的终态 | 否 |
| `access/v1/relay/{relay_id}/set` 与 `/state` | 仅 MQTT 继电器套餐；`state` 报的是物理触点状态，不反映门的实际开关 | `set` 否，`state` 是 |
| `GET /v1/facedb/current`、`GET /v1/facedb/{version}`（HTTP 8080） | 人脸库下发的全部接口。用 `Range` 做分块与断点续传 | — |
| `/api/events`、`/api/devices`、`/api/persons`、`/api/audit/verify`（HTTP 8088） | 管理界面 API，走三档 token 闸门。没有匿名读 | — |

管理界面的三档 token：viewer 只读，operator 可下发 `unlock` / `hold_open` / `lock`，admin 可注册、删除与回滚。`/api/audit/verify` 校验审计日志的哈希链：审计日志是只追加的 NDJSON，每条记录带上一条的哈希，改动任何一条历史记录都会被报出来。

### 事件载荷

```json
{
  "schema": "access-event/v1",
  "event_id": "6f1a2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4d",
  "time": "2026-09-06T03:20:11Z",
  "device_id": "door-front-01",
  "person_id": "p_alice",
  "anonymous_id": null,
  "score": 0.7412,
  "threshold": 0.62,
  "liveness": { "passed": true, "score": 0.958 },
  "decision": { "allow": true, "reason": "allowed" },
  "door_action": "pulse",
  "actuator_id": "door-front",
  "facedb_version": 3,
  "model_sha": "3a7f...",
  "clock": { "valid": true, "reason": null, "offset_ms": 12 }
}
```

对接时注意三个字段。**首次同步成功之前 `facedb_version` 是 `null`**，表示设备上还没有库
（不同于版本 0），拒绝原因单独报 `no_facedb`。**`threshold` 是这一次判定实际生效的值**，
阈值变化在事件流里就能看到。**`clock.valid`** 说明经修正的时间戳能不能信；设备从不设置系统时钟，
只带一个偏移量。活体结果为 `null` 表示这道检查没有运行，按失败处理，原因报 `liveness_unknown`。

### 指令闸门

一条指令必须带精确的字段集、UUIDv4 的 `command_id`、带时区的 RFC3339 `issued_at`，
以及在上界内的 TTL，还要过一张按身份隔离的重放表。重复投递的指令**不会第二次开门**，
设备返回原来那张回执供调用方对账。过期的以 `TTL_EXPIRED` 返回，
匿名身份被拒。

`set` 主题与指令主题都绝不 retained。retained 的开门指令会在每次重连时重放，
断电恢复后门会自己开。

### 人脸库下发

设备轮询 `current` 比对版本，变了才取文件，分块与断点续传走标准 `Range`。下载后逐文件 SHA-256 校验、manifest 验签，再原子切换；任何一步失败都保持旧版本不动。移除一个人会生成一个不含他的新版本并写入删除屏障，此后回滚到任何仍包含此人的版本都会被点名拒绝。

每个版本的 manifest 都带五个许可字段——`license_id`、`use_scope`、`redistributable`、
`source_revision`、`sha256`，许可条款随制品一起分发。

## 性能与实测数据

### 人脸库激活时延

从云端发布新版本到设备开始使用它的时间。

| 平台 | 全量激活 | 条件 |
|---|---|---|
| 标准版 reCamera（SG2002 / CV181x riscv64，固件 0.2.2） | **p50 491.6 ms、p95 507.8 ms**（n=20） | USB-RNDIS，2 人、16.5 KB 库。`op:reload` 往返 p50 100.0 ms（n=25） |
| reCamera Pro（RV1126B，Buildroot 2023.02.6） | 62.2 ms（v1）、45.4 ms（v2）；库不变时空转 6.2 ms | 以太网，1–2 人、不到 20 KB 的库 |

**随库大小的变化。** 标准版 reCamera 上两个规模点各跑一次：402 人 / 2.86 MB 用
9 801.7 ms，1502 人 / 10.66 MB 用 22 278.7 ms。激活时间随库的大小增加，首次铺开大库时
按这两个数字规划同步时间。

复现：上游仓库 `unmanned-store-access` 内 `evaluation/runs/2026-09-06-recamera-std-p3-r2/results.md`、`evaluation/runs/2026-09-07-recamera-pro-p1/results.md`。

### 开门时间（reCamera Pro，视频回放）

从第一帧回放帧交给应用，到 GPIO 引脚被写成触发电平，覆盖取帧、检测、活体、比对、判定与写引脚。p50，括号内为 p95，每档 12 次（n=12 时 p95 按上界读）。

| 摄像头 / 主机 | 10 人 | 1000 人 |
|---|---|---|
| reCamera Pro（RV1126B），f1-access 0.1.1 | **0.62 s**（0.67） | **0.66 s**（0.68） |

条件：1280x720 帧按 12.5 fps 回放，活体开启，最小人脸 40 px，匹配阈值 0.40；探测者是素材视频的回放帧，不是真人。24 次里引脚 24 次被写成触发电平。写引脚之后 1500 ms 的触点保持不计入；未接继电器与锁，不含机械响应。

### 拒绝（reCamera Pro，视频回放）

同一台设备、同一个应用，每行 20 次。

| 尝试 | 人脸库 | 引脚被写成触发电平 |
|---|---|---|
| 未注册人 | 9 个合成身份 | 0 / 20 |
| 未注册人 | 999 个合成身份 | 0 / 20 |
| 手机屏幕翻拍 A 段 | 10 人，模板由攻击素材本身建成 | 0 / 20 |
| 手机屏幕翻拍 B 段 | 10 人，模板由攻击素材本身建成 | 0 / 20 |
| 静止的屏幕画面 | 10 人，模板由攻击素材本身建成 | 0 / 20 |

条件：未注册人那两行的库里只有合成向量，素材里那位不在库中；三个屏幕行的模板由攻击素材本身建成，库里的脸与屏幕上的脸是同一个人；静止屏幕一行用定住的单帧屏幕画面。

### 其它实测

| 指标 | 数值 | 条件 |
|---|---|---|
| 识别事件到 GPIO 引脚回读 | p50 1.448 ms，p95 2.709 ms（n=22） | reCamera Pro，注入合成识别事件，sysfs 回读，未接外部电路；软件路径中单个环节的上界，不含开门动作 |
| 识别服务单帧：人脸框 + 活体判定 + 512 维嵌入 | 服务端 24–26 ms，HTTP 往返 p50 30.3 ms（12 次） | reComputer J40 系列（Orin NX 16 GB，JetPack 6），从 1280x720 RTSP 流取一帧 |
| 识别服务首次启动 | 本机构建 TensorRT engine 61 s + 62 s + 73 s，启动 214 s 后健康接口应答 | reComputer J40 系列（Orin NX 16 GB，JetPack 6） |

reCamera Pro 上回读的 `gpio130` 是扩展口 UART4 M0 的一对脚之一改配成 GPIO，属于 3.3 V 这一类，不是板上两路 12–21 V 原生输出之一。

复现（GPIO 回读）：`evaluation/runs/2026-09-07-recamera-pro-p1/results.md`。

### 运行时与关键参数

| 识别主机 | 识别模型与运行位置 |
|---|---|
| reCamera Pro | 设备自己跑的识别模型 `rv1126b:scrfd500m+mbf512@fp16` |
| 标准版 reCamera | 设备上的原生进程完成检测、嵌入、活体与匹配 |
| reComputer 各套餐 | 容器里的识别服务，TensorRT engine 首次启动时在本机构建 |

活体检查强制开启：识别服务没有报告活体已加载时，适配层拒绝运行。

影响部署效果的参数：

- 人脸库轮询周期（默认 30 s）— 设备按它轮询新版本，人脸库激活时延取决于它。
- 匹配阈值 — 随包阈值是初始值，装好摄像头后用正负样本对扫描确定；事件里的 `threshold` 报这一次实际生效的值。
- 继电器四项 `active_high`、`pulse_ms`、`relay_contact`、`fail_mode` — 没有默认值，按安装现场配置。

### 已知退化

- **reCamera Pro 的注册链路。** 云端注册用的 `buffalo_l` 与设备自己跑的 `rv1126b:scrfd500m+mbf512@fp16` 两个模型空间之间的余弦相似度约等于零，随包的注册链路目前产不出这台设备可用于生产的人脸库。标准版 reCamera 在设备上做嵌入，不受影响。
- **RKNN 后端的活体在上游尚未实现。** 跑在 RKNN 上的套餐满足不了活体强制开启。
- **换人脸骨干要重建全部人脸库版本。** 嵌入不跨模型可比，旧版本全部作废；manifest 里的 `model_tag` 防止设备误加载旧版本。

### 下一步

- 在 reCamera Pro 上接 Grove Relay 做触点回环实测（20 次），记录触点闭合时延与保持时长，再接门控。

## 数据与素材出处

**许可。** 方案包与上游仓库的代码是 Apache-2.0，**模型权重不是**。人脸检测与嵌入用的是 InsightFace
的 `buffalo_l`；InsightFace 自己的声明是代码为 MIT、商用无限制，但带标注的训练数据以及
用这些数据训练出的模型只能用于非商业研究用途。`buffalo_l` 正是这样一个模型：
`license_id: non-commercial`、`use_scope: non-commercial`、`redistributable: false`。
方案包不附带这些权重，商业部署必须把人脸骨干换成有商用授权的模型。

静默活体模型是 MiniVision 的 Silent-Face-Anti-Spoofing，Apache-2.0：
`use_scope: commercial`，可再分发，未做修改地使用。

- 许可条款：方案包内 `gallery/ATTRIBUTION.md`，以及包描述里的许可说明一节。
- 注册链路的模型空间缺口：上游 `docs/user-guide.md` §5.1。
- 门口识别画面来自 reCamera Pro，画面中人物为项目成员本人拍摄。
- 管理界面截图是**合成演示数据**，人员、分数与事件都不是现场结果。
