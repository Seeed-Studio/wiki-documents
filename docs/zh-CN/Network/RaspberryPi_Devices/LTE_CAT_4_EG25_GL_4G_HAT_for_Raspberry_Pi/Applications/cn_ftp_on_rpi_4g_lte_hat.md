---
description: 提升您的物联网项目，结合 FTP 和 4G 技术。学习如何使用 Raspberry Pi 4G HAT 安全传输文件、自动化任务以及监控远程设备。

title: 连接与传输 - 在 Raspberry Pi 4G LTE HAT 上使用 FTP
keywords:
  - Raspberry Pi Hat
  - 入门指南
  - 工业物联网 (IIoT)
  - FTP
  - 4G LTE
  - 边缘计算
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /cn/ftp_with_raspberry_pi_4g_lte_hat
last_update:
  date: 2024/12/17
  author: Kasun Thushara
---

## 简介

FTP 在 Raspberry Pi 4G LTE HAT 应用中非常有用，可实现嵌入式系统与远程服务器之间的可靠文件传输。它简化了物联网和 M2M 通信设置中**日志、配置或数据文件的管理**。凭借其兼容性和简单的命令，FTP 确保了连接项目的高效集成。

## 前置条件

### 硬件需求

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>    
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 软件需求

如果尚未安装相关驱动程序和通信工具，请先查看[指南](https://wiki.seeedstudio.com/cn/getting_started_raspberry_pi_4g_lte_hat/#software-preparation)：

### 其他需求

您需要一个预先配置的 FTP 服务器，并提供以下信息：

- **主机**：例如，https://ftp.drivehq.com 或 FileZilla Server。
- **端口**：21。
- **用户名和密码**：用于身份验证的凭据。

## AT 命令参考

### 设置网络上下文

在开始 FTP 操作之前，需配置 PDP 上下文以实现网络连接。

| **命令**                              | **描述**                                                                 |
|---------------------------------------|--------------------------------------------------------------------------|
| `AT+QICSGP=1,1,"apn_name","","",1`    | 为 FTP 连接设置 PDP 上下文。将 `apn_name` 替换为您的运营商 APN。          |
| `AT+QIACT=1`                          | 激活 PDP 上下文。                                                        |
| `AT+QIACT?`                           | 验证 PDP 上下文是否已激活。                                              |

---

### FTP 配置

使用必要的参数配置 FTP 会话。

| **命令**                                      | **描述**                                              |
|-----------------------------------------------|-------------------------------------------------------|
| `AT+QFTPCFG="contextid",1`                    | 将 FTP 连接链接到 PDP 上下文 1。                      |
| `AT+QFTPCFG="account","username","password"`  | 设置 FTP 帐户凭据。将 `username` 和 `password` 替换为您的 FTP 信息。 |
| `AT+QFTPCFG="filetype",1`                     | 设置文件类型（1 表示二进制，0 表示 ASCII）。          |
| `AT+QFTPCFG="transmode",1`                    | 设置传输模式（1 表示被动，0 表示主动）。              |
| `AT+QFTPCFG="rsptimeout",90`                  | 设置 FTP 响应超时时间（90 秒）。                      |

### 打开 FTP 会话

连接到 FTP 服务器并导航目录。

| **命令**                              | **描述**                                              |
|---------------------------------------|-------------------------------------------------------|
| `AT+QFTPOPEN="ftp.drivehq.com",21`    | 连接到 FTP 服务器。将 `ftp.drivehq.com` 替换为您的服务器地址。 |
| `AT+QFTPCWD="/"`                      | 切换到根目录。                                        |
| `AT+QFTPLIST="."`                     | 列出当前路径中的文件和目录。                          |

---

### 文件操作

可以通过 USB COM 端口、RAM 或 UFS 发送和接收文件。

| **命令**                              | **描述**                                              |
|---------------------------------------|-------------------------------------------------------|
| `AT+QFTPPUT="file_name","COM:",0`     | 上传文件。将 `file_name` 替换为服务器上文件的目标名称。 |
| `AT+QFTPGET="file_name","COM:"`       | 下载文件。将 `file_name` 替换为要从服务器检索的文件名。 |
| `AT+QFTPLEN`                          | 检查最后上传文件的长度。                              |
| `AT+QFTPSIZE="file_name"`             | 获取特定文件的大小。将 `file_name` 替换为目标文件名。  |

### 关闭 FTP 会话

结束 FTP 会话并停用 PDP 上下文。

| **命令**         | **描述**                              |
|------------------|---------------------------------------|
| `AT+QFTPCLOSE`   | 关闭 FTP 会话。                       |
| `AT+QIDEACT=1`   | 停用 PDP 上下文。                     |

---

## 示例工作流程

如果您使用的是 Windows，请打开 **WinCOM** 工具。对于 Raspberry Pi，请通过运行以下命令启动 **Minicom**：

```bash
sudo minicom -D /dev/ttyUSB2
```
### 分步操作

1. **设置网络上下文**：
   
```bash
    AT+QICSGP=1,1,"dialogbb","","",1
    AT+QIACT=1
    AT+QIACT?
 ```
2. **配置 FTP**：
   
```bash
    AT+QFTPCFG="contextid",1
    AT+QFTPCFG="account","your_username","your_password"
    AT+QFTPCFG="filetype",1
    AT+QFTPCFG="transmode",1
    AT+QFTPCFG="rsptimeout",90
```
3. **连接到 FTP 服务器**：
   
```bash
    AT+QFTPOPEN="ftp.drivehq.com",21
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ftp1.PNG" 
    style={{ width: 500}} 
  />
</div>

4. **导航目录**：

```bash
    AT+QFTPCWD="/"
    AT+QFTPLIST="."
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ftp2.PNG" 
    style={{ width: 500}} 
  />
</div>

5. **上传文件**：
   
```bash
    AT+QFTPPUT="test_my2.txt","COM:",0
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/upload_ftp.PNG" 
    style={{ width: 600}} 
  />
</div>

6. **下载文件**：

```bash
    AT+QFTPGET="test_my2.txt","COM:"
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/download_ftp.PNG" 
    style={{ width: 500}} 
  />
</div>

7. **关闭 FTP 会话**：

```bash
    AT+QFTPCLOSE
    AT+QIDEACT=1
```

---

## 资源

我们强烈建议您查看此模块的 Quectel TCP 指南，因为它涵盖了高级主题。此指南可以帮助您根据特定需求定制您的 IoT 项目。

- **[网页]** [FTP 应用指南](https://www.quectel.com/download/quectel_ec2xeg2xeg9xem05_series_ftps_application_note_v1-3/)
  



## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>