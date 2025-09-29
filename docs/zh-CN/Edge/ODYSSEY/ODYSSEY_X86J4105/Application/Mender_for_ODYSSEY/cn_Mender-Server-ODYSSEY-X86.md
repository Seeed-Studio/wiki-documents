---
description: 在 ODYSSEY - X86 上部署 Mender 服务器
title: 在 ODYSSEY - X86 上部署 Mender 服务器
keywords:
- 软件 Mender
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Mender-Server-ODYSSEY-X86
last_update:
  date: 03/16/2023
  author: Lakshantha
---

# 在 ODYSSEY - X86 上安装自托管 Mender 服务器

我们可以在 ODYSSEY - X86 板上设置自托管 Mender 服务器，然后将 OTA 更新推送到其他运行 Mender 客户端的设备。

本指南重点介绍如何在运行 Seeed 提供的 OpenWrt 系统的 ODYSSEY - X86 板上运行自托管 Mender 服务器。然后，我们将以 Docker 容器的形式在 OpenWrt 上运行自托管 Mender 服务器。

## 前置条件

- 在 [ODYSSEY - X86 板](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html) 上安装 [Seeed 提供的 OpenWrt 系统](https://wiki.seeedstudio.com/cn/OpenWrt-Getting-Started)
- 如果希望此自托管 Mender 服务器可以公开访问，则需要一个具有 443 端口公开访问权限的公网 IP 地址
- 如果使用上述公网 IP，则需要将公网 IP 绑定到 Mender 服务器的 DNS 名称

## 安装

请注意，以下指南基于 [官方 Mender 指南](https://docs.mender.io/3.1/server-installation/installation-with-docker-compose) 中的 Docker 安装方法。本版本与官方指南略有不同，因此请逐步按照本指南操作，以成功在 ODYSSEY - X86 板上设置自托管 Mender 服务器。

### 基本准备

- **步骤 1.** 启动运行 OpenWrt 系统的 ODYSSEY - X86 板后，将一个以太网端口连接到互联网，另一个以太网端口连接到 PC。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/odyssey-ports-2.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 2.** 通过访问 **192.168.2.1** 打开 OpenWrt Luci Web UI。

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2021/10/openwrt-webui-1030x723.png" alt="pir" width="1000" height="auto"/></p>

默认情况下，Mender 服务器设置为使用 **443** 端口（https）和 **80** 端口（http）。但 OpenWrt 使用 443 端口通过 https 访问 Luci Web 界面，使用 80 端口通过 http 访问 Luci Web 界面。因此，我们需要先更改 Luci Web UI 的端口。

- **步骤 3.** 导航到 `Services > Terminal` 并使用您的凭据登录。

- **步骤 4.** 输入以下命令以访问 **uhttpd 配置文件**：

```sh
vi /etc/config/uhttpd
```

- **步骤 5.** 将 **80** 和 **443** 更改为其他值。这里将 80 改为 85，将 443 改为 446：

```sh
config uhttpd 'main'
        list listen_http '0.0.0.0:85'
        list listen_http '[::]:85'
        list listen_https '0.0.0.0:446'
        list listen_https '[::]:446'
```

**注意：** 在 Vi 文本编辑器中按 "i" 进入插入模式。

- **步骤 6.** 按 "ESC" 并输入 ":wq" 保存并退出文本编辑器。

- **步骤 7.** 在终端中输入以下命令以重启 uhttpd 服务：

```sh
service uhttpd restart
```

- **步骤 8.** 使用新定义的端口再次访问 Luci Web UI：

```sh
示例：
192.168.2.1:85
```

- **步骤 9.** 再次打开终端并输入以下命令以更新 OpenWrt 包列表：

```sh
opkg update
```

- **步骤 10.** 安装 Git：

```sh
opkg install git-http
```

- **步骤 11.** 克隆以下仓库：

```sh
git clone -b 3.1.0 https://github.com/mendersoftware/integration mender-server
```

- **步骤 12.** 进入以下目录：

```sh
cd mender-server/production
```

- **步骤 13.** 将生产模板复制到一个独立文件中：

```sh
cp config/prod.yml.template config/prod.yml
```

- **步骤 14.** 列出目录中的文件：

```sh
ls -l *
```

```
-rwxr-xr-x    1 root     root          1489 Nov  8 18:35 run

config:
-rw-r--r--    1 root     root           660 Nov  8 18:35 enterprise.yml.template
-rw-r--r--    1 root     root          5298 Nov  8 18:36 prod.yml
-rw-r--r--    1 root     root          5298 Nov  8 18:35 prod.yml.template
```

- **步骤 15.** 删除 **enterprise.yml.template** 文件，因为我们将运行 Mender 服务器的开源版本：

```sh
rm config/enterprise.yml.template
```

但是，如果您打算运行 Mender 服务器的企业版，请保留 **enterprise.yml.template** 文件，并参考[此处](https://docs.mender.io/3.1/server-installation/installation-with-docker-compose#enterprise)。

- **步骤 16.** 当前工作目录仍为 **production**，下载必要的 Docker 镜像：

```sh
./run pull
```

```
Pulling mender-mongo                  ... done
Pulling mender-deviceconfig           ... done
Pulling mender-useradm                ... done
Pulling mender-workflows-worker       ... done
Pulling mender-create-artifact-worker ... done
Pulling mender-workflows-server       ... done
Pulling mender-device-auth            ... done
Pulling mender-gui                    ... done
Pulling mender-inventory              ... done
Pulling mender-api-gateway            ... done
Pulling minio                         ... done
Pulling mender-deployments            ... done
Pulling mender-nats                   ... done
Pulling mender-deviceconnect          ... done
Pulling mender-mongo (mongo:4.4)...
```

**注意：** 请注意，Docker Hub 对匿名用户的拉取次数限制为每 6 小时 100 次（参见：[Docker 定价](https://www.docker.com/pricing)）。这意味着，由于 Mender 无法控制的原因，上述步骤可能会失败，您可能需要稍后重试。

### 证书和密钥

- **步骤 1.** 设置服务器的公共域名：

```sh
API_GATEWAY_DOMAIN_NAME="mender.example.com"  # 替换为您的服务器公共域名
STORAGE_PROXY_DOMAIN_NAME="${API_GATEWAY_DOMAIN_NAME}"
```

**注意：** 如果您希望此自托管 Mender 服务器仅在本地可用，您可以选择一个已有的域名并附加一个您偏好的随机子域。例如：**mender.seeedstudio.com**。请确保不要直接使用 Mender 服务器的 IP 地址，因为这样无法正常工作。

- **步骤 2.** 使用辅助脚本 keygen 准备证书

```sh
CERT_CN=$API_GATEWAY_DOMAIN_NAME \
CERT_SAN="DNS:${API_GATEWAY_DOMAIN_NAME},DNS:*.${STORAGE_PROXY_DOMAIN_NAME}" \
../keygen
```

```
生成 EC 私钥
将新私钥写入 'private.key'
-----
................................................................................++++
...........................................................................................++++
写入 RSA 密钥
................................................................................................++++
...........................++++
写入 RSA 密钥
所有 Mender Server 的密钥和证书已生成在目录 /root/mender-server/production/keys-generated 中。
请将它们包含在您的 docker compose 和设备构建中。
更多信息，请参考 https://docs.mender.io/

```

您的本地目录树现在应如下所示：

```
├── keys-generated
│   ├── cert
│   │   ├── cert.crt
│   │   └── private.key
│   └── keys
│       ├── deviceauth
│       │   └── private.key
│       └── useradm
│           └── private.key
├── config/enterprise.yml.template
├── config/prod.yml
├── config/prod.yml.template
└── run
```

此处生成的 API Gateway 和 Storage Proxy 证书需要提供给 Mender 客户端。请参考[生产环境构建](https://docs.mender.io/3.1/system-updates-yocto-project/build-for-production)部分，了解如何在客户端构建中包含这些证书。

### 持久化存储

后端服务数据的持久化存储是通过命名的 Docker 卷实现的。模板配置为挂载以下卷：

- mender-artifacts - 用于存储工件对象
- mender-db - 用于存储 Mender 服务的数据库数据

创建这些卷：

```sh
docker volume create --name=mender-artifacts
docker volume create --name=mender-db
```

现在需要更新 **config/prod.yml** 中的部署配置。请按照以下步骤操作。

### Minio

**MINIO_ACCESS_KEY** 和 **MINIO_SECRET_KEY** 键控制上传工件到对象存储的凭据。由于 Minio 是一个兼容 S3 API 的服务，这些设置分别对应于 Amazon 的 AWS Access Key ID 和 Secret Access Key。

- **步骤 1.** 我们需要生成一个长度为 16 的密钥。有两种方法可以实现：

**方法 1：**

1. 如果您可以访问一台 Linux 机器，首先安装 pwgen 工具

```sh
sudo apt install pwgen
```

2. 然后生成一个长度为 16 的随机密钥

```sh
pwgen 16 1
```

**方法 2：**

手动输入一个长度为 16 的随机密钥。它需要包含**数字、大写和小写字符**。

- **步骤 2.** 使用以下命令替换上述生成的密钥

```sh
MINIO_SECRET_KEY_GENERATED=<secret key-generated>
```

- **步骤 3.** 使用以下命令将访问密钥和密钥插入 **config/prod.yml**

```sh
sed -i.bak "s/MINIO_ACCESS_KEY:.*/MINIO_ACCESS_KEY: mender-deployments/g" config/prod.yml
sed -i.bak "s/MINIO_SECRET_KEY:.*/MINIO_SECRET_KEY: $MINIO_SECRET_KEY_GENERATED/g" config/prod.yml
```

### 部署服务

部署服务将通过 storage-proxy 将工件对象上传到 minio 存储，更多详情请参阅[管理概览](https://docs.mender.io/3.1/server-installation/overview)。因此，需要更新访问凭据 **DEPLOYMENTS_AWS_AUTH_KEY** 和 **DEPLOYMENTS_AWS_AUTH_SECRET**，并且 **DEPLOYMENTS_AWS_URI** 必须指向您的 Storage Proxy 的域名。

- **步骤 1.** 运行以下命令，将 **DEPLOYMENTS_AWS_AUTH_KEY** 和 **DEPLOYMENTS_AWS_AUTH_SECRET** 分别设置为 **MINIO_ACCESS_KEY** 和 **MINIO_SECRET_KEY** 的值

```sh
sed -i.bak "s/DEPLOYMENTS_AWS_AUTH_KEY:.*/DEPLOYMENTS_AWS_AUTH_KEY: mender-deployments/g" config/prod.yml
sed -i.bak "s/DEPLOYMENTS_AWS_AUTH_SECRET:.*/DEPLOYMENTS_AWS_AUTH_SECRET: $MINIO_SECRET_KEY_GENERATED/g" config/prod.yml
```

- **步骤 2.** 运行以下命令，使 **DEPLOYMENTS_AWS_URI** 指向您的 Storage Proxy

```sh
sed -i.bak "s/https:\/\/set-my-alias-here.com/https:\/\/$STORAGE_PROXY_DOMAIN_NAME/g" config/prod.yml
```

### Storage Proxy

在默认设置中，没有单独的进程作为存储服务的代理。为此，您可以使用 Mender API Gateway，但需要一个额外的域名。通过运行以下命令，将占位符值 set-my-alias-here 替换为有效的域名，以使用 Mender API Gateway 作为存储服务的代理：

```sh
sed -i.bak "s/set-my-alias-here.com/$STORAGE_PROXY_DOMAIN_NAME/g" config/prod.yml
```

### API Gateway

出于安全目的，API Gateway 必须准确知道分配给它的 DNS 名称，您需要通过 ALLOWED_HOSTS 环境变量进行配置。

通过运行以下命令，将占位符值 my-gateway-dns-name 替换为有效的主机名：

```sh
sed -i.bak "s/my-gateway-dns-name/$API_GATEWAY_DOMAIN_NAME/g" config/prod.yml
```

## 启动服务器

- **步骤 1.** 使用以下命令以分离模式启动所有服务

```sh
./run up -d
```

```
创建网络 "menderproduction_mender"，使用默认驱动
创建 menderproduction_mender-nats_1                   ... 完成
创建 menderproduction_mender-mongo_1                  ... 完成
创建 menderproduction_minio_1                         ... 完成
创建 menderproduction_mender-gui_1                    ... 完成
创建 menderproduction_mender-workflows-worker_1       ... 完成
创建 menderproduction_mender-create-artifact-worker_1 ... 完成
创建 menderproduction_mender-useradm_1                ... 完成
创建 menderproduction_mender-workflows-server_1       ... 完成
创建 menderproduction_mender-deviceconfig_1           ... 完成
创建 menderproduction_mender-inventory_1              ... 完成
创建 menderproduction_mender-deviceconnect_1          ... 完成
创建 menderproduction_mender-device-auth_1            ... 完成
创建 menderproduction_mender-api-gateway_1            ... 完成
创建 menderproduction_mender-deployments_1            ... 完成
```

- **步骤 2.** 要验证服务是否正在运行，请执行以下命令并确认所有服务的状态为 "Up"

```sh
./run ps
```

```
                      名称                                    命令                  状态                  端口            
-------------------------------------------------------------------------------------------------------------------------------
menderproduction_mender-api-gateway_1              /entrypoint.sh --accesslog ...   Up             0.0.0.0:443->443/tcp, 80/tcp
menderproduction_mender-auditlogs_1                /usr/bin/auditlogs --confi ...   Up             8080/tcp                    
menderproduction_mender-create-artifact-worker_1   /usr/bin/workflows --confi ...   Up             8080/tcp                    
menderproduction_mender-deployments_1              /entrypoint.sh --config /e ...   Up             8080/tcp                    
menderproduction_mender-device-auth_1              /usr/bin/deviceauth --conf ...   Up             8080/tcp                    
menderproduction_mender-deviceconfig_1             /usr/bin/deviceconfig --co ...   Up             8080/tcp                    
menderproduction_mender-deviceconnect_1            /usr/bin/deviceconnect --c ...   Up             8080/tcp                    
menderproduction_mender-gui_1                      /entrypoint.sh nginx             Up (healthy)   80/tcp, 8080/tcp            
menderproduction_mender-inventory_1                /usr/bin/inventory-enterpr ...   Up             8080/tcp                    
menderproduction_mender-mongo_1                    docker-entrypoint.sh mongod      Up             27017/tcp                   
menderproduction_mender-nats_1                     docker-entrypoint.sh nats- ...   Up             4222/tcp, 6222/tcp, 8222/tcp
menderproduction_mender-tenantadm_1                /usr/bin/tenantadm --confi ...   Up             8080/tcp                    
menderproduction_mender-useradm_1                  /usr/bin/useradm-enterpris ...   Up             8080/tcp                    
menderproduction_mender-workflows-server_1         /usr/bin/workflows-enterpr ...   Up             8080/tcp                    
menderproduction_mender-workflows-worker_1         /entrypoint.sh worker --au ...   Up                                         
menderproduction_minio_1                           /usr/bin/docker-entrypoint ...   Up (healthy)   9000/tcp
```

- **步骤 3.** 由于这是一个全新的安装，我们需要通过用户管理服务提供的 CLI 创建初始用户。该服务的二进制文件嵌入在一个 Docker 容器中，因此要执行它，您需要使用 docker-compose 的 exec 子命令。

```sh
./run exec mender-useradm /usr/bin/useradm create-user --username=myname@host.com --password=mypassword
```

## 访问服务器

### 公共服务器

现在，您可以使用前面步骤中指定的域名访问公共 Mender 服务器。之后，您可以输入上述为第一个用户创建的凭据并登录到服务器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/server/login.png" alt="pir" width="400" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/server/after-login.jpg" alt="pir" width="1000" height="auto"/></p>

### 本地服务器

然而，如果您是在本地运行 Mender 服务器，则需要执行一些额外的步骤。

- **步骤 1.** 进入 OpenWrt Luci Web UI

```sh
示例：
192.168.2.1:85
```

- **步骤 2.** 导航到 `Network > DHCP and DNS`

- **步骤 3.** 在 **Server Settings** 下点击 **General Settings**

- **步骤 4.** 在 **Addresses** 旁边的输入框中，输入之前创建的子域名和域名，然后输入 X86 的 IP 地址，如下所示：

```sh
/mender.seeedstudio.com/192.168.2.1
```

- **步骤 5.** 点击 **SAVE & APPLY**

- **步骤 6.** 现在，您可以通过在浏览器中输入子域名和域名来访问本地 Mender 服务器

```sh
示例：
https://mender.seeedstudio.com
```

**注意：** 请记得在开头添加 **`https://`**

现在，您可以将 OTA 更新推送到连接到此自托管 Mender 服务器的客户端！

**注意：** 如果在启动或运行 Mender 服务器时遇到任何问题，您可以查看 [Mender 服务器故障排除](https://docs.mender.io/3.1/troubleshoot/mender-server) 部分。