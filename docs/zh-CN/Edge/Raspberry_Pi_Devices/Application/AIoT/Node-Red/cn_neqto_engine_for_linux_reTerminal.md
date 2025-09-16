---
description: 在 reTerminal 上开始使用 NEQTO Engine for Linux
title: 在 reTerminal 上开始使用 NEQTO Engine for Linux
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/neqto_engine_for_linux_reTerminal
last_update:
  date: 04/17/2024
  author: Kazuhiro Ozuchi
---

## 介绍

NEQTO 是一个轻量级且安全的软件包，允许公司在边缘设备上远程安装和配置其软件。NEQTO 通过即插即用的平台连接器和内置的软件生命周期管理，使公司能够为最终用户提供改进的软件服务。

安装了 NEQTO 的设备可以通过 API 或即用型 NEQTO Console 进行管理，其中包括数据存储、警报和看门狗监控的可选服务。企业可以通过在任何 Linux 设备上的近乎即时安装以及与任何本地或云服务器的无缝数据集成来启用 AIoT。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/header-img_2x.png" alt="pir" width={600} height="auto" /></p>

## 先决条件

### 支持的硬件

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

- (任何 Linux 机器)

:::tip

- 支持的架构：armv6l(32位)、armv7l(32位)、aarch64(64位)、x86_64(64位)
- 所需磁盘空间：≥ 32 MB
- 所需内存空间：≥ 4MB（默认设置下）
- 网络通信接口：必须配备物理网络适配器。
- 显示器、键盘、鼠标（可选）

:::

## 入门指南

### 硬件连接

请参考 reTerminal 入门指南 (https://wiki.seeedstudio.com/reTerminal/)

### 注册 NEQTO 账户：

- 步骤 1. 访问此页面 (https://console.neqto.com/register) 注册 NEQTO 账户
- 步骤 2. 输入您的电子邮件地址，创建密码，然后继续
- 步骤 3. 从您收到的激活邮件中验证账户

### 安装 NEQTO Linux

1. 在 NEQTO 控制台中选择 `Manage API Keys for Linux-based Device`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65eee22eccae06004c6d9459.png" alt="pir" width={20} height="auto" /></p>

在 NEQTO 控制台中

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65effd1accae06004c6d94a0.png" alt="pir" width={600} height="auto" /></p>

2. 点击 `CREATE API KEY`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65efff89ccae06004c6d94a6.png" alt="pir" width={600} height="auto" /></p>

然后将显示 API 密钥

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65efff33ccae06004c6d94a5.png" alt="pir" width={600} height="auto" /></p>

3. 使用 curl 或 wget 下载 `NEQTO Engine Linux Installer`。

    这次使用 wget 命令。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65eeeaa3ccae06004c6d945d.png" alt="pir" width={600} height="auto" /></p>

复制 `Installer of NEQTO Engine for Linux` 的 `Download link` 并将其粘贴到 "wget " 后面。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbce4ccae06004c6d9812.png" alt="pir" width={600} height="auto" /></p>

安装程序下载成功

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd0cccae06004c6d9813.png" alt="pir" width={600} height="auto" /></p>

4. 在运行 NEQTO Engine for Linux 安装之前，使用 chmod 命令更改下载的安装程序（`neqto-daemon-install.latest.sh`）的执行权限。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd27ccae06004c6d9814.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

5. 从 NEQTO 控制台的 `API Keys for NEQTO Engine for Linux` 中复制 `API Key`，并将其粘贴到 `sudo ./neqto-daemon-install.latest.sh -k` 后面。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd4dccae06004c6d9815.png" alt="pir" width={600} height="auto" /></p>

6. 执行后，将显示重要说明。请检查并在同意的情况下输入 "agree"。之后，将执行设备注册，软件安装将继续。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd63ccae06004c6d9816.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. 请等待直到显示最终状态 `Installation completed successfully!`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd7accae06004c6d9817.png" alt="pir" width={600} height="auto" /></p>

确认设备已在 NEQTO 控制台上注册

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd9cccae06004c6d9819.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

### Hello World

1. 在 `GROUPS` 下点击 `ADD GROUP`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660f9d61ccae06004c6d97b9.png" alt="pir" width={600} height="auto" /></p>

2. 在 `Name` 中输入 `reTerminal` 并点击 `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660f9e99ccae06004c6d97bd.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660f9ebbccae06004c6d97bf.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

3. 选择您创建的 `reTerminal` 并点击 `SCRIPTS`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbde5ccae06004c6d981a.png" alt="pir" width={600} height="auto" /></p>

4. 点击 `ADD SCRIPT`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe00ccae06004c6d981b.png" alt="pir" width={600} height="auto" /></p>

5. 在 `Name` 字段中输入 `Hello World` 并点击 `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe19ccae06004c6d981c.png" alt="pir" width={600} height="auto" /></p>

6. 从 `入门指南` 中复制并粘贴[示例代码](https://docs.neqto.com/docs/en/getting-started/tutorial-step1#sample-code)到 NEQTO 控制台脚本编辑器中，然后点击 `保存`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe2bccae06004c6d981d.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. 点击 `模板`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe46ccae06004c6d981e.png" alt="pir" width={600} height="auto" /></p>

然后点击 `添加模板`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe5dccae06004c6d981f.png" alt="pir" width={600} height="auto" /></p>

8. 按如下设置 `设备信息`

    - 在 `名称` 字段中输入 `reTerminal Template`

    - 在 `固件类型` 字段中选择 `Linux-based device`

    - 在 `固件版本` 字段中选择最新版本

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe7cccae06004c6d9820.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

9. 在 `选项` 中，在 `脚本` 字段中选择 `Hello World`，然后点击 `保存`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe98ccae06004c6d9821.png" alt="pir" width={600} height="auto" /></p>

10. 点击 `节点`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbea7ccae06004c6d9823.png" alt="pir" width={600} height="auto" /></p>

然后点击 `添加节点`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbeb4ccae06004c6d9824.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

11. 按如下设置 `元数据`

    - 将 `名称` 字段设置为 `reTerminal`

    - 将 `模板` 字段设置为 `reTerminal Template`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbec5ccae06004c6d9825.png" alt="pir" width={600} height="auto" /></p>

12. 在 `设备信息` 中选择您刚刚注册的设备，然后点击 `保存`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fca55ccae06004c6d982a.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fca62ccae06004c6d982b.png" alt="pir" width={600} height="auto" /></p>

13. 在 reTerminal 的终端中输入 `tail -F /tmp/neqto/log/neqto.log`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbef2ccae06004c6d9826.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

14. 在 NEQTO 控制台上运行 `重新加载脚本` 后，您可以在 reTerminal 的终端中看到 `Hello World!!!`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbf0dccae06004c6d9828.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fa3e0ccae06004c6d97e8.png" alt="pir" width={600} height="auto" /></p>

## 更多信息 / 故障排除

- [NEQTO 支持](https://support.neqto.com/hc/en-us)
- [支持指南](https://docs.neqto.com/docs/en/neqto/support-guidelines)

## 资源

- [NEQTO 资源中心](https://docs.neqto.com/docs/en/linux/software/requirements)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
