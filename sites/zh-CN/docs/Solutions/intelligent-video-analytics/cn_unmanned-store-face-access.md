---
description: 无人值守门口的人脸门禁——每种接门方式需要哪些硬件、版本化人脸库怎么下发与校验、MQTT 与 HTTP 契约长什么样，以及哪些边界在硬件上测过、哪些没有
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
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/cn/solutions/unmanned-store-face-access/
generated_from: sensecraft-solutions@e1864ef
---

:::caution[使用须知]
这**不是经过认证的安防产品，也不是人身安全系统**。识别准确率与活体假体拒绝率取决于
你部署的人脸模型与自己的注册照，请在现场实测。参考人脸权重（InsightFace `buffalo_l`）只授权非商业研究用途。请把它当作
一份需要你自己继续建、继续测的实现，而不是一个装上就可以信任的产品。
:::

## 这套方案是干什么的

一道没有人站在后面的门，门口的摄像头识别人脸，要求静默活体检查通过，再核对当前人脸库、
时段与黑名单——全部成立时才给继电器一个脉冲，由继电器切换一把跑在独立 12/24 V 电源上的
门锁。每一次判定，放行与拒绝一样，都发到 MQTT 并追加进带哈希链的审计日志，管理界面上
可以校验这条链。

它适合无人或少人值守门店的员工入口、库房与后门；名单每周都变、注册要能自助完成的共享
办公；留痕比吞吐更重要的设备间；以及门口本来就有 RTSP 摄像头、又不想换掉它们的站点。

- 选型与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/unmanned_store_access)
- 开源地址：暂无。本包没有 `intro.links.github`，打包时代码在内部仓库。

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>五个套餐里有三个把开门留在网络之外</h3>
                <p>识别、活体与判定都在门口完成。设备连不上云端时，仍然用最近一次加载成功的人脸库继续开门。两个 MQTT 继电器套餐是明摆着做的相反取舍。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>人脸库版本化、拉取、校验，从不推送</h3>
                <p>轮询、分块下载、逐文件 SHA-256、对清单验签，然后原子切换；任何一步失败都保持旧版本不动。标准版 reCamera 实测激活时延 p50 491.6 ms。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>删掉的人就是删掉了</h3>
                <p>移除一个人会生成一个不含他的新版本，并写入一条删除屏障。此后回滚到任何仍包含此人的版本都会被点名拒绝。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>七项边界只实测了一项</h3>
                <p>人脸库激活时延在两台设备上有数字。识别 FAR/FRR、活体假体拒绝、开锁时延、断网可用时长与 72 小时长稳请在自己的现场实测。</p>
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

这两张来自 2026-09-07 的 reCamera Pro 实验室会话，画面中人物为项目成员本人拍摄。

## 需要哪些硬件

三个设备角色加一台主机，外加一条不能通融的规矩。

**① 门口的摄像头。** 要么用设备自带的传感器（reCamera Pro 或标准版 reCamera），
要么用现有的 RTSP 摄像头接一台单独的主机。安装高度大致
齐面部，取景要让人真正停下来的距离上单张人脸在画面里占到可用比例。逆光门口与玻璃反光是
常见失效模式，本设计没有刻画过它们的边界。

**② 做识别与判定的那台机器。**

| 识别主机 | 识别在哪里跑 | 安装形态 | 真机状态 |
|---|---|---|---|
| reCamera Pro（RV1126B） | 摄像头本机，跑在已有的人脸识别应用旁边 | `/userdata/f1-access` 下一组平铺的纯标准库 Python 模块。Buildroot 设备：没有 docker、没有 dpkg、没有 systemd | 拉库链路与注入合成事件的 GPIO 回读已跑通 |
| 标准版 reCamera（SG2002 / CV181x） | 摄像头本机，在同一个原生进程里完成检测、嵌入、双头纹理活体加眨眼融合、匹配 | 人工拷一个纯标准库的小守护进程，不用容器 | 拉库链路跑过两轮真机探针 |
| reComputer Industrial J20 | 容器里，接现有 RTSP 流 | 经 SSH 部署容器 | 未上板验证 |
| reComputer J30 / J40 / R2000 | 容器里，接现有 RTSP 流 | 经 SSH 部署容器 | 未上板验证 |

**③ 继电器，这就是那条规矩。** 锁永远在继电器或干接点后面，永远用自己的 12/24 V 电源，
与计算板的供电分开。锁的工作电流 300 mA–1 A，GPIO 引脚和光隔数字输出只有 mA 级。
`active_high`、`pulse_ms`、`relay_contact`、`fail_mode` 这四项按安装现场配置并刻意不设
默认值——断电即开的电磁锁接到常开触点上会长期敞着，而且在有人去测之前看起来像装好了。

**④ 云端或本地主机。** 任意装了 Docker 的 amd64 或 arm64 Linux 机器，不需要 GPU。
它跑人脸库服务、管理界面与 MQTT broker，必须对每一台门口设备可达，并且自身时钟必须
准确——没有 RTC 的设备靠它的 HTTP `Date` 头做时间修正。两个容器镜像目前都还没有推送到
registry，compose 文件写的是它们将来的 tag，并在文件开头声明了这一点。

## 现场怎么部署

两部分，顺序不能反。

### 一、接门：先 LED，再继电器，最后锁

在 LED 上确认极性与脉宽，在继电器上确认触点会响，之后才把锁接上去。断电即开的电磁锁
走 COM/NC，断电即锁的电插锁走 COM/NO。接反会让门长期敞着——这正是 `relay_contact`
不设默认值的原因。

**不要假定 GPIO 引脚是空闲的。** 被盘点的那台 reCamera Pro 上，`gpio131` 已被另一个
应用 export 并驱动。执行器在引脚当前状态与配置的空闲状态不符时拒绝启动，除非被显式
要求，否则不会接管任何引脚。reCamera 2002 HQ PoE 的底板上有一组 6-pin 排针，三路 IO
（D1 = sysfs 490，唯一一路非复用；CLK = 487；SMD = 488），但排针的电平极性与可供电流
厂商文档里没有写，万用表与 LED 确认之前不得在那里接锁。J20 上按设计 spec，
DO1–DO4 是 sysfs 463/464/465/462；目标镜像究竟以这种方式还是通过 `Jetson.GPIO` 暴露
它们，需要在真机上确认。

### 二、先起云端，再装设备侧

逐套餐的完整步骤在可部署方案页，那里按现场条件选完配置后可以直接下载对应的应用包。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/unmanned_store_access" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并下载应用包 🖱️</font></span></strong>
    </a>
</div><br />

云端是人脸库服务、管理界面与一个 broker，来自 `assets/cloud/` 下的 compose 文件。
一个 token 都没配时管理界面直接拒绝启动；它的共享 token 闸门分三档：viewer 只读，
operator 可下发 `unlock` / `hold_open` / `lock`，admin 可注册、删除与回滚。
**共享 token 走明文 HTTP 等于没有鉴权**——必须在反代后面终止 TLS。随包的 broker 配置
是匿名明文，只能上台面；设计要求 TLS、按设备身份与 topic ACL，随包配置里三条都没有。

设备侧各套餐不同——reComputer 各套餐经 SSH 部署容器，两台 reCamera 都是人工拷一个
守护进程。逐套餐的完整步骤在可部署方案页的部署指南里。

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
没有密钥设备拒绝启动。这个签名挡的是链路上的篡改，挡不住被撬开的设备——任何一台设备的
密钥泄漏都足以伪造人脸库。

## 怎么接入自有系统

对外界面是五个 MQTT 主题加两组 HTTP 接口。

| 主题 / 接口 | 内容 | retained |
|---|---|---|
| `access/v1/events`（MQTT 8883，QoS 1） | 每次判定一条 JSON——见下 | 否 |
| `access/v1/status/{device_id}` | 30 秒心跳：执行器健康、人脸库版本与 model tag、活体是否已加载 | 仅遗嘱 |
| `access/v1/commands/{door_id}` | `unlock` / `hold_open` / `lock` | **绝不** |
| `access/v1/receipts/{command_id}` | 一条指令的终态 | 否 |
| `access/v1/relay/{relay_id}/set` 与 `/state` | 仅 MQTT 继电器套餐；`state` 报的是物理触点状态，不是"门开没开" | `set` 否，`state` 是 |
| `GET /v1/facedb/current`、`GET /v1/facedb/{version}`（HTTP 8080） | 人脸库下发的全部接口。用 `Range` 做分块与断点续传 | — |
| `/api/events`、`/api/devices`、`/api/persons`、`/api/audit/verify`（HTTP 8088） | 管理界面 API，走三档 token 闸门。没有匿名读 | — |

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

三个字段决定了大部分对接方式。**首次同步成功之前 `facedb_version` 是 `null`**——那是
"根本没有库"，与版本 0 不是一回事，会以单独的拒绝原因 `no_facedb` 上报，而不是当成
没匹配上。**`threshold` 是这一次判定实际生效的值**，因此阈值变化在事件流里看得见，
不必去翻配置文件。**`clock.valid`** 说明经修正的时间戳能不能信；设备从不设置系统时钟，
只带一个偏移量。

### 指令闸门

一条指令必须带精确的字段集、UUIDv4 的 `command_id`、带时区的 RFC3339 `issued_at`，
以及在上界内的 TTL，还要过一张按身份隔离的重放表。重复投递的指令**不会第二次开门**
——它回放原来那张回执，调用方仍拿得到可对账的凭据。过期的以 `TTL_EXPIRED` 返回，
匿名身份被拒。

`set` 主题与指令主题都绝不 retained。retained 的开门指令会在每次重连时重放，
断电恢复后门会自己开。

## 给工程师：实现细节

### 人脸库下发：两条接口，没有推送

设备轮询 `current` 比对版本，变了才取文件，分块与断点续传走标准 `Range`。因此激活时延
等于轮询周期——默认 30 s。换来的是设备侧只需要一个 HTTP 客户端，也不存在"通知丢了但
库已经变了"的不一致态。

完整时序：轮询 → 比对 → 分块下载 → 逐文件 SHA-256 → manifest 验签 → 加载新匹配器 →
**原子切换** → 落 gallery → `op:reload` ack。任何一步失败都保持旧版本不动。两台硬件上，
把 `gallery.json` 改了一个字节的版本、以及用错误密钥签名的 manifest，都在设备侧被拒绝，
设备停留在旧版本；中断的下载可以续传。

每个版本的 manifest 都带五个许可字段——`license_id`、`use_scope`、`redistributable`、
`source_revision`、`sha256`——让条款跟着制品走，而不是只活在一份文档里。仍在确认中的许可
记作 `license_id: unverified` 加 `use_scope: internal-only`，绝不先写成宽松许可再回头改。

### 删除屏障，以及为什么只有版本回滚不够

移除一个人会生成一个不含他的新版本，并写入一条删除屏障；此后回滚到任何仍包含此人的
版本都会被点名拒绝。没有这条屏障，一次回滚就会悄悄把所有曾被移除的人重新放回来——
这正是"版本化人脸库"从有用变成危险的那个失效模式。

### 活体不会被悄悄关掉

上游识别服务在模型文件缺失时会降级成"继续识别、跳过活体"。对一道门来说这个降级就是
敞门，因此适配层在启动时探测 `/health`，活体没有报告为已加载就拒绝运行。`live` 为
`null` 按**失败**处理而不是按通过：它的含义是这道检查根本没跑，会以单独的原因
`liveness_unknown` 呈现。

一条覆盖缺口写在这里。RKNN 后端的活体在上游尚未实现，跑在 RKNN 上的套餐无法满足
"活体强制开启"，它的活体边界也不得由这条路径填写。

### 审计日志

只追加的 NDJSON，每条记录带上一条的哈希。把一次历史拒绝改成放行会破坏链条，
`/api/audit/verify` 会报出来。软件闭环里，13 条记录的链校验通过，把一次拒绝改成放行
之后校验失败。

### 注册链路，以及 reCamera Pro 上的模型空间缺口

`face_rec_api` 的 `buffalo_l` 对 Pro 来说还有一层与许可无关的操作层面错配：设备自己跑的
识别模型是 `rv1126b:scrfd500m+mbf512@fp16`，两个模型空间之间的余弦相似度约等于零。
目前没有任何云端嵌入器能产出设备模型空间里的向量，因此**随包的注册链路目前还产不出
这台设备可用于生产的人脸库**。要修好这条路径，需要一个能对账到设备模型空间的云端
嵌入器，或者一条设备辅助注册的路径。上游正在往第二种形态走——云端下发图片、设备重算
嵌入——但随包版本走的是云端算向量、下发向量，本页描述的就是随包版本。标准版 reCamera
路径不受影响：它在设备上做嵌入，不经这个管理界面注册。

## 附录：实测数据 {#附录实测数据}

### 测过什么，没测什么

上游定义了七项边界指标。一项已实测，六项 `status: pending` 且各档全空，每一项都写明了
原因。

| 边界指标 | 状态 | 为什么还开着 |
|---|---|---|
| 人脸库激活时延 | **已实测** | 标准版 reCamera 两轮真机探针、reCamera Pro 一轮 |

### 人脸库激活时延

**它是从云端发布一个新版本，到设备真正用上它的时间，不是开门时延。**
开门时间在下文单独实测。

| 平台 | 全量激活 | 条件 |
|---|---|---|
| 标准版 reCamera（SG2002 / CV181x riscv64，固件 0.2.2） | **p50 491.6 ms、p95 507.8 ms**（n=20） | USB-RNDIS，2 人、16.5 KB 库。`op:reload` 往返 p50 100.0 ms（n=25） |
| reCamera Pro（RV1126B，Buildroot 2023.02.6） | 62.2 ms（v1）、45.4 ms（v2）；库不变时空转 6.2 ms | 以太网，1–2 人、不到 20 KB 的库。一致性闸门 `problems: []` |
| reCamera PoE | — | 待真机；设备侧代码只做过自测 |
| macOS 软件闭环 | 三次激活中最慢 11.6 ms（v1/v2/v3 为 11.6 / 3.7 / 3.5 ms） | loopback HTTP，无 TLS、无鉴权、零丢包，4 人 × 3 条 128 维嵌入，单次运行。**不是设备侧数字** |

**它怎么随规模变化。** 标准版 reCamera 上两个规模点各跑一次：402 人 / 2.86 MB 用
9 801.7 ms，1502 人 / 10.66 MB 用 22 278.7 ms。激活时间跟着库的大小走，大库的首次同步
是慢的——首次铺开时按这个规划，不要以为 491.6 ms 在任何规模下都成立。

### 识别事件到 GPIO 引脚回读（reCamera Pro）

n=22，p50 1.448 ms，p95 2.709 ms。**把它当作单个环节的上界，不要当成开门数字。**
输入是注入的合成识别事件而不是真人，回读走 sysfs，所以这些值只是软件路径的上界，
而且没有接任何外部电路。`gpio130` 的物理身份经设备树 pinctrl 证据核实，是扩展口
UART4 M0 的一对脚之一改配成 GPIO——属于 3.3 V 这一类，不是板上两路 12–21 V 原生
输出之一——电平与可供电流请在自己的设备上量，阈值也是 `calibration = pending`。

### 开门时间与拒绝（reCamera Pro，视频回放）

**开门时间**——第一帧回放帧交给应用，到 GPIO 引脚被写成触发电平，覆盖取帧、检测、活体、
比对、判定与写引脚，按人脸库规模分档。p50，括号内为 p95，每档 12 次——n=12 时 p95 一列按上界读。

| 摄像头 / 主机 | 10 人 | 1000 人 |
|---|---|---|
| reCamera Pro（RV1126B），f1-access 0.1.1 | **0.62 s**（0.67） | **0.66 s**（0.68） |

24 次里引脚 24 次被写成触发电平。条件：reCamera Pro 上跑 `f1-access` 0.1.1 应用本身，
1280x720 帧按 12.5 fps 回放，活体开启，最小人脸 40 px，匹配阈值 0.40；探测者是一段素材视频的
回放帧、不是真人。写引脚之后 1500 ms 的触点保持不计入。未接继电器与锁，因此这些数不含任何
机械响应。10 人库与 1000 人库的 p50 实测相差 37 ms。

**拒绝**——同一台设备、同一个应用，每行 20 次。其中 40 次是未注册人，60 次是把屏幕举到镜头前。

| 尝试 | 人脸库 | 引脚被写成触发电平 |
|---|---|---|
| 未注册人 | 9 个合成身份 | 0 / 20 |
| 未注册人 | 999 个合成身份 | 0 / 20 |
| 手机屏幕翻拍 A 段 | 10 人，模板由攻击素材本身建成 | 0 / 20 |
| 手机屏幕翻拍 B 段 | 10 人，模板由攻击素材本身建成 | 0 / 20 |
| 静止的屏幕画面 | 10 人，模板由攻击素材本身建成 | 0 / 20 |

未注册人那两行的库里只有合成向量，素材里那位不在库中。三个屏幕行的模板由攻击素材本身建成，
因此库里的脸与屏幕上的脸是同一个人。静止屏幕那一行用的是定住的单帧屏幕画面，打印照片没有测。

**AI 主机识别服务（reComputer J40 系列）。** 在 Orin NX 16 GB、JetPack 6 上，识别服务在本机构建
TensorRT engine 用了 61 s + 62 s + 73 s，启动 214 s 后健康接口有应答；从 1280x720 的 RTSP 流取一帧，
返回人脸框、活体判定与 512 维嵌入，服务端 24–26 ms（HTTP 往返 p50 30.3 ms，12 次）。标准版 reCamera
与 AI 主机没有开门时间：前者的识别是闭源原生进程、没有把帧喂进去的通道；AI 主机的测试盒子上没有
第二个排针引脚来回读继电器触点。

### 软件闭环立住了什么

在一台 macOS 开发机上，用假执行器、内存 broker 与假识别器：52 项检查全过，覆盖三个
人脸库版本的构建、发布、拉取、SHA 校验与原子切换；策略拒绝了照片（`liveness_failed`）、
活体为 null 的结果（`liveness_unknown`）、黑名单人员、阈值以下的陌生人、空帧，以及
去抖窗口内的重复出现；十帧里恰好两次开锁脉冲，宽度都是配置的 1500 ms；两个不同版本的
回滚都被删除屏障拒绝且当前版本不变；一次远程开门被接受并执行，一条过期指令以
`TTL_EXPIRED` 被拒，一次重放回放原回执且没有第二个脉冲，匿名身份被拒；掉线后 retained
遗嘱被投递；13 条记录的审计链校验通过，把一次拒绝改成放行后校验失败；管理界面三档
角色各就各位。

这些都不是"它认人认得多准、防伪防得多好"的测量。它们测的是协议与状态机是否照它宣称的做。

### 许可

本包与上游仓库的代码是 Apache-2.0，**模型权重不是**。人脸检测与嵌入用的是 InsightFace
的 `buffalo_l`；InsightFace 自己的声明是代码为 MIT、商用无限制，但带标注的训练数据以及
用这些数据训练出的模型只能用于非商业研究用途。`buffalo_l` 正是这样一个模型：
`license_id: non-commercial`、`use_scope: non-commercial`、`redistributable: false`。
本包不随附这些权重。

两条后果，趁早说清楚免得后面才发现。商业部署必须把人脸骨干换成有商用授权的。而换骨干
意味着**全部人脸库版本必须重建**——嵌入不跨模型可比，用一个骨干建的库对另一个骨干打分
约等于零，旧版本是作废而不只是过期；manifest 里的 `model_tag` 守卫就是用来阻止设备误
加载它们的。

静默活体模型是 MiniVision 的 Silent-Face-Anti-Spoofing，Apache-2.0：
`use_scope: commercial`，可再分发，未做修改地使用。

### 这份数据回答不了的问题

- **它能不能认出你门口的那些人。** 本项目在任何硬件上都没有 FAR/FRR 数字。随包阈值是起点，请在装好的摄像头上做正负对扫描后再定。
- **它挡不挡得住一张照片。** 请用真实假体样本（照片、屏幕、面具）在现场测活体。
- **接上继电器与锁后门开得有多快。** 上文开门时间止于触发引脚，不含继电器与锁的动作时间。
- **它能不能连续跑一周。** 断网可用时长与 72 小时长稳都开着。

## 数据与素材出处

下列路径均在上游仓库 `unmanned-store-access` 内。

- 人脸库激活，标准版 reCamera：`evaluation/runs/2026-09-06-recamera-std-p3-r2/results.md` §2 及同目录 `boundary.facedb-activation.yaml`
- 人脸库激活与 GPIO 回读，reCamera Pro：`evaluation/runs/2026-09-07-recamera-pro-p1/results.md` 与同目录两个 `boundary.*.yaml`
- 软件闭环与边界记录：`evaluation/runs/2026-09-06-c1-software/results.md` 及 `boundary.{recognition,liveness,latency-direct,latency-p3,offline,soak72h}.yaml`
- 注册链路的模型空间缺口：上游 `docs/user-guide.md` §5.1 与 `evaluation/runs/2026-09-07-recamera-pro-p1/results.md` §9.2
- 许可条款：方案包内 `gallery/ATTRIBUTION.md`，以及包描述里的许可说明一节
- 可部署方案页上的管理界面截图是**合成演示数据**——人员、分数与事件都是测试夹具，不是现场结果
