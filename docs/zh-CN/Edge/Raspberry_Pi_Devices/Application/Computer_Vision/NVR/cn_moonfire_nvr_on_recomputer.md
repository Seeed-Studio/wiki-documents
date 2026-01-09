---
description: 本 wiki 演示如何在 reComputer 上部署 moonfire nvr。
title: reComputer 上的 Moonfire NVR
keywords:
  - reComputer
  - moonfire
  - NVR
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/result.webp
slug: /cn/moonfire_nvr_on_recomputer
sku: 113991274,E24010521,113991294,113991295,113991314,113991334,113991374,113991375,114993560,114993627,114993595,103990763,100020831,100045506,100080766,100026042,100099044,100061305,100091962,100097052,E2025091901,E2025091902
last_update:
  date: 11/05/2025
  author: Jiahao

no_comments: false # for Disqus
---

# reComputer 上的 Moonfire NVR

## 简介

[Moonfire-NVR](https://github.com/scottlamb/moonfire-nvr) 的设计目标是提供一个易于使用的 NVR 系统，该系统轻量且简约，这意味着它不会像其他更臃肿的商业 NVR 解决方案那样复杂。它强调功能性和简洁性，使用户能够直接从 IP 摄像头录制到文件系统或云存储。

## 先决条件

### 硬件要求

<div class="table-center">
 <table align="center">
 <tr>
 <th>reComputer R1125</th>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
 </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991334.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 下载 Moonfire

### 更新系统

请使用以下命令运行。

```bash
sudo apt update
sudo apt upgrade -y
```

### 下载 docker 和 docker compose

请使用以下命令安装 docker。

```bash
wget https://get.docker.com -O get-docker.sh
chmod +x 
sudo sh get-docker.sh
sudo systemctl start docker
sudo systemctl enable docker
docker --version
```
结果如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/docker_install.png" alt="pir" width="800" height="auto"/></p>


请使用以下命令安装 docker compose。

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/$(curl -s https://api.github.com/repos/docker/compose/releases/latest | jq -r .tag_name)/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

结果如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/docker_compose_version.png" alt="pir" width="800" height="auto"/></p>


### 创建 `docker-compose.yaml`

请使用以下命令识别您的 `ID` 和 `UID`。

```bash
id
```

结果如下所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/id.png" alt="pir" width="800" height="auto"/></p>


请使用以下命令创建 `docker-compose.yaml`。

```bash
cd ~ && nano docker-compose.yaml
```

>注意：根据您自己的 `ID` 和 `UID` 重写 `YAML` 文件。

然后将以下内容输入到 `YAML` 文件中。

```bash
services:
  moonfire-nvr:
    # The `vX.Y.Z` images will work on any architecture (x86-64, arm, or
    # aarch64); just pick the correct version.
    image: ghcr.io/scottlamb/moonfire-nvr:v0.7.23
    command: run

    volumes:
      # Pass through `/var/lib/moonfire-nvr` from the host.
      - "/var/lib/moonfire-nvr:/var/lib/moonfire-nvr"

      # Pass through `/etc/moonfire-nvr.toml` from the host.
      # Be sure to create `/etc/moonfire-nvr.toml` first (see below).
      # Docker will "helpfully" create a directory by this name otherwise.
      - "/etc/moonfire-nvr.toml:/etc/moonfire-nvr.toml:ro"

      # Pass through `/var/tmp` from the host.
      # SQLite expects to be able to create temporary files in this dir, which
      # is not created in Moonfire's minimal Docker image.
      # See: <https://www.sqlite.org/tempfiles.html>
      - "/var/tmp:/var/tmp"

      # Add additional mount lines here for each sample file directory
      # outside of /var/lib/moonfire-nvr, e.g.:
      # - "/media/nvr:/media/nvr"

      # The Docker image doesn't include the time zone database; you must mount
      # it from the host for Moonfire to support local time.
      - "/usr/share/zoneinfo:/usr/share/zoneinfo:ro"

    # Edit this to match your `moonfire-nvr` user.
    # Note that Docker will not honor names from the host here, even if
    # `/etc/passwd` is passed through.
    # - Be sure to run the `useradd` command below first.
    # - Then run `echo $(id -u moonfire-nvr):$(id -g moonfire-nvr)` to see
    #   what should be filled in here.
    user: "1000:1000"

    # Uncomment this if Moonfire fails with `clock_gettime failed` (likely on
    # older 32-bit hosts). <https://github.com/moby/moby/issues/40734>
    # security_opt:
    # - seccomp:unconfined

    environment:
      # Edit zone below to taste.
      TZ: "America/Los_Angeles"
      RUST_BACKTRACE: 1

    # docker's default log driver won't rotate logs properly, and will throw
    # away logs when you destroy and recreate the container. Using journald
    # solves these problems.
    # <https://docs.docker.com/config/containers/logging/configure/>
    logging:
      driver: journald
      options:
        tag: moonfire-nvr

    restart: unless-stopped

    ports:
    - "8080:8080/tcp"
```

请使用以下命令更改权限。

```bash
sudo chmod -R 777 /var/lib/moonfire-nvr
```

### 创建 `/etc/moonfire-nvr.toml`

请使用以下命令创建 `/etc/moonfire-nvr.toml`。

```bash
sudo nano /etc/moonfire-nvr.toml 
```

然后将以下内容输入到 `toml` 文件中。

```bash
ain@AI-Box:~ $ sudo cat /etc/moonfire-nvr.toml 
[[binds]]
ipv4 = "0.0.0.0:8080"
allowUnauthenticatedPermissions = { viewVideo = true }

[[binds]]
unix = "/var/lib/moonfire-nvr/sock"
ownUidIsPrivileged = true
```
## 配置 Moonfire

### 运行 docker compose

请使用以下命令初始化数据库。

```bash
sudo docker compose run --rm moonfire-nvr init
```

结果如下所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/database_init.png" alt="pir" width="800" height="auto"/></p>


### 创建文件夹

请创建一个文件夹来保存视频录制：

```bash
sudo mkdir -p /var/lib/moonfire-nvr/recordings
sudo chown 1000:1000 /var/lib/moonfire-nvr/recordings
```

运行交互式配置

```bash
sudo docker compose run --rm moonfire-nvr config 2>debug-log
```

请按照以下步骤添加文件夹。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/path1.png" alt="pir" width="800" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/path2.png" alt="pir" width="800" height="auto"/></p>

请按照以下步骤添加摄像头。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/config_1.png" alt="pir" width="800" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/config_2.png" alt="pir" width="800" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/config_3.png" alt="pir" width="800" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/config_4.png" alt="pir" width="800" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/config_5.png" alt="pir" width="800" height="auto"/></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/config_6.png" alt="pir" width="800" height="auto"/></p>


## 运行 Moonfire NVR

请使用以下命令运行 Moonfire NVR。

```bash
sudo docker compose up --detach moonfire-nvr
```

然后，在您的设备上打开 `localhost:8080` 端口进行访问。结果如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/result.png" alt="pir" width="800" height="auto"/></p>

>注意：不要忘记点击左上角的选项。


## 结果

一旦我们配置好所有内容，就可以查看当前摄像头的实时画面。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/moonfire.gif" alt="pir" width="800" height="auto"/></p>


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
