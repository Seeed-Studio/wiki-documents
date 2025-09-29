---
description: reComputer 的 ThingsBoard 安装指南提供了在 reComputer 设备上设置 ThingsBoard v3.8 和 PostgreSQL 的分步说明。它涵盖了 Java 17 安装、ThingsBoard 服务配置、PostgreSQL 设置以及无缝 IoT 数据管理的故障排除技巧。

title: 在 reComputer R1000 上开始使用 ThingsBoard
keywords:
  - reComputer-R1000
  - Getting started
  - IIoT
  - Industrial 
  - Thingsboard
  - Edge Computing
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/recomputer_r1000_thingsboard_ce
last_update:
  date: 10/14/2024
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/thingsboard_blue.png" style={{width:600}}/></div>

## 介绍

[ThingsBoard](https://thingsboard.io/) 是一个开源的 IoT 平台，专为快速开发、管理和扩展 IoT 项目而设计。它为云端和本地 IoT 基础设施提供了开箱即用的解决方案，使您能够轻松地配置设备、管理资产、收集和可视化数据，以及分析遥测数据。在本指南中，我们将介绍在 reComputer 上安装 ThingsBoard 社区版的过程，为您的 IoT 应用程序提供强大的基础。

## 先决条件

### 硬件

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

:::note
硬件要求取决于所选择的数据库和连接到系统的设备数量。要运行带有 PostgreSQL 的 ThingsBoard，您至少需要 **4GB 内存**。
:::

## 步骤 1：安装 Java 17 (OpenJDK)

ThingsBoard 需要 Java 17 才能运行。打开终端。

1. 更新您的软件包索引：

   ```bash
   sudo apt update
   ```

2. 安装 OpenJDK 17：

   ```bash
   sudo apt install openjdk-17-jdk
   ```
3. 配置您的系统默认使用 OpenJDK 17：

   ```bash
   sudo update-alternatives --config java
   ```

4. Verify the installation:

   ```bash
   java -version
   ```

## 步骤 2：安装 ThingsBoard 服务

1. 下载 ThingsBoard `.deb` 包：

   ```bash
   wget https://github.com/thingsboard/thingsboard/releases/download/v3.8/thingsboard-3.8.deb
   ```

2. 将 ThingsBoard 安装为服务：

   ```bash
   sudo dpkg -i thingsboard-3.8.deb
   ```

## 步骤 3：安装 PostgreSQL 数据库

1. 如果尚未安装，请安装 **wget**：

   ```bash
   sudo apt install -y wget
   ```

2. 添加 PostgreSQL 仓库并安装服务：

   ```bash
   wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
   echo "deb https://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" | sudo tee /etc/apt/sources.list.d/pgdg.list
   sudo apt update
   sudo apt -y install postgresql
   sudo service postgresql start
   ```
3. 为 `postgres` 用户设置密码：

   ```bash
   sudo -u postgres psql
   \password
   ```

4. 创建 ThingsBoard 数据库：

   ```bash
   psql -U postgres -d postgres -h 127.0.0.1 -W
   CREATE DATABASE thingsboard;
   ```

## 步骤 4: 配置 ThingsBoard

1. 打开 ThingsBoard 配置文件：

   ```bash
   sudo nano /etc/thingsboard/conf/thingsboard.conf
   ```

2. 添加以下数据库配置（将 `PUT_YOUR_POSTGRESQL_PASSWORD_HERE` 替换为为 `postgres` 用户设置的密码）：

   ```bash
   # DB Configuration 
   export DATABASE_TS_TYPE=sql
   export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/thingsboard
   export SPRING_DATASOURCE_USERNAME=postgres
   export SPRING_DATASOURCE_PASSWORD=PUT_YOUR_POSTGRESQL_PASSWORD_HERE
   export SQL_POSTGRES_TS_KV_PARTITIONING=MONTHS
   ```

3. (可选) 为具有 4GB 的 RAM 的机器更新内存设置:

   ```bash
   export JAVA_OPTS="$JAVA_OPTS -Xms2G -Xmx2G"
   ```

## 步骤 5：运行安装脚本

1. 执行 ThingsBoard 安装脚本：

   ```bash
   sudo /usr/share/thingsboard/bin/install/install.sh --loadDemo
   ```

   `--loadDemo` 选项将加载演示数据，如用户、设备、资产等。

## 步骤 6：启动 ThingsBoard 服务

启动 ThingsBoard 服务：

```bash
sudo service thingsboard start
```

启动后，您可以使用以下链接访问 ThingsBoard Web UI：

- **URL:** [http://localhost:8080](http://localhost:8080)

#### 默认凭据

- **系统管理员:** sysadmin@thingsboard.org / sysadmin
- **租户管理员:** tenant@thingsboard.org / tenant
- **客户用户:** customer@thingsboard.org / customer

## 故障排除

如果您遇到任何问题，请检查 ThingsBoard 日志以查看错误：

```bash
cat /var/log/thingsboard/thingsboard.log | grep ERROR
```

对于其他日志文件：

```bash
/var/log/thingsboard
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/openingwindow.PNG" style={{width:600}}/></div>

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
