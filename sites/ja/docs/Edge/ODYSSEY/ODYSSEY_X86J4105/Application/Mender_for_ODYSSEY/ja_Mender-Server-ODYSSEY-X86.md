---
description: ODYSSEY - X86でのMender Server
title: ODYSSEY - X86でのMender Server
keywords:
- ソフトウェア Mender
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Mender-Server-ODYSSEY-X86
last_update:
  date: 05/15/2025
  author: Lakshantha
---


# ODYSSEY - X86でのセルフホスト型Mender Serverのインストール

ODYSSEY - X86ボード上にセルフホスト型Mender Serverをセットアップし、Menderクライアントとして動作する他のクライアントデバイスにOTAアップデートをプッシュすることができます。

このガイドでは、SeeedによるOpenWrtシステムを実行しているODYSSEY - X86ボードを使用することに焦点を当てています。その後、OpenWrt上でDockerコンテナとしてセルフホスト型Mender Serverを実行します。

## 前提条件

- [SeeedによるOpenWrtシステム](https://wiki.seeedstudio.com/ja/OpenWrt-Getting-Started)がインストールされた[ODYSSEY - X86ボード](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)
- このセルフホスト型Mender Serverを公開する場合、ポート443が公開アクセス可能なパブリックIPアドレスが必要です
- 上記のようにパブリックIPを使用する場合、Mender ServerのDNS名にパブリックIPをバインドする必要があります

## インストール

以下のガイドは、Dockerを使用したインストールに関する[公式Menderガイド](https://docs.mender.io/3.1/server-installation/installation-with-docker-compose)に基づいています。このバージョンでは公式ガイドからいくつかの小さな変更があるため、このガイドをステップバイステップでフォローして、ODYSSEY - X86ボード上でセルフホスト型Mender Serverを正常にセットアップしてください。

### 基本準備

- **ステップ1.** OpenWrtシステムが実行されているODYSSEY - X86ボードを起動した後、1つのイーサネットポートをインターネットに接続し、もう1つのイーサネットポートをPCに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/odyssey-ports-2.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ2.** **192.168.2.1**にアクセスしてOpenWrt Luci Web UIを開きます。

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2021/10/openwrt-webui-1030x723.png" alt="pir" width="1000" height="auto"/></p>

デフォルトでは、Mender Serverは**httpsのポート443**と**httpのポート80**で設定されています。しかし、OpenWrtはhttps経由でLuci Webインターフェースにアクセスするためにポート443を使用し、http経由でポート80を使用します。そのため、まずLuci Web UIのポートを変更する必要があります。

- **ステップ3.** `Services > Terminal`に移動し、資格情報を使用してログインします。

- **ステップ4.** **uhttpd設定ファイル**にアクセスするために以下を入力します。

```sh
vi /etc/config/uhttpd
```

- **ステップ5.** **80**と**443**を異なる値に変更します。ここでは80を85に、443を446に変更します。

```sh
config uhttpd 'main'
        list listen_http '0.0.0.0:85'
        list listen_http '[::]:85'
        list listen_https '0.0.0.0:446'
        list listen_https '[::]:446'
```

**注意:** Viテキストエディタで挿入モードに入るには「i」を押してください。

- **ステップ6.** テキストエディタから保存して終了するには、「ESC」を押して「:wq」と入力します。

- **ステップ7.** ターミナルで以下を入力してuhttpdサービスを再起動します。

```sh
service uhttpd restart
```

- **ステップ8.** 新しく定義したポートを使用して再度Luci Web UIにアクセスします。

```sh
例:
192.168.2.1:85
```

- **ステップ9.** 再度ターミナルを開き、以下を入力してOpenWrtパッケージリストを更新します。

```sh
opkg update
```

- **ステップ10.** Gitをインストールします。

```sh
opkg install git-http
```

- **ステップ11.** 以下のリポジトリをクローンします。

```sh
git clone -b 3.1.0 https://github.com/mendersoftware/integration mender-server
```

- **ステップ12.** 以下のディレクトリに移動します。

```sh
cd mender-server/production
```

- **ステップ13.** productionテンプレートを独自のファイルにコピーします。

```sh
cp config/prod.yml.template config/prod.yml
```

- **ステップ14.** ディレクトリ内のファイルをリストします。

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

- **ステップ15.** Open Source版のMender Serverを実行するため、**enterprise.yml.template**ファイルを削除します。

```sh
rm config/enterprise.yml.template
```

ただし、Enterprise版のMender Serverを実行する場合は、**enterprise.yml.template**ファイルを保持し、[こちらをフォローしてください](https://docs.mender.io/3.1/server-installation/installation-with-docker-compose#enterprise)。

- **ステップ16.** 現在の作業ディレクトリが**production**のまま、必要なDockerイメージをダウンロードします。

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

**注意:** Docker Hubは匿名ユーザーからのプルを6時間あたり100回に制限しています（詳細は[Dockerの価格設定](https://www.docker.com/pricing)を参照）。これにより、Menderとは完全に独立した理由で上記のステップが失敗する可能性があり、しばらく時間を置いて再試行する必要があります。

### 証明書とキー

- **ステップ1.** サーバーの公開ドメイン名を設定します。

```sh
API_GATEWAY_DOMAIN_NAME="mender.example.com"  # サーバーの公開ドメイン名に置き換えてください
STORAGE_PROXY_DOMAIN_NAME="${API_GATEWAY_DOMAIN_NAME}"
```

**注意:** このセルフホスト型Mender Serverをローカルでのみ利用可能にしたい場合は、既存のドメイン名を選択し、任意のサブドメインを付けることができます。例: **mender.seeedstudio.com**。ここでMender ServerのIPアドレスを直接使用しないようにしてください。動作しません。

- **ステップ 2.** ヘルパースクリプト keygen を使用して証明書を準備する

```sh
CERT_CN=$API_GATEWAY_DOMAIN_NAME \
CERT_SAN="DNS:${API_GATEWAY_DOMAIN_NAME},DNS:*.${STORAGE_PROXY_DOMAIN_NAME}" \
../keygen
```

```
EC秘密鍵を生成中
新しい秘密鍵を 'private.key' に書き込み中
-----
................................................................................++++
...........................................................................................++++
RSA鍵を書き込み中
................................................................................................++++
...........................++++
RSA鍵を書き込み中
すべてのMenderサーバー鍵と証明書がディレクトリ /root/mender-server/production/keys-generated に生成されました。
これらをDocker Composeおよびデバイスビルドに含めてください。
詳細については、https://docs.mender.io/ を参照してください。
```

ローカルディレクトリツリーは次のようになっているはずです：

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

ここで生成されたAPI GatewayおよびStorage Proxyの証明書は、Menderクライアントに提供する必要があります。クライアントビルドに証明書を含める方法については、[本番環境用ビルド](https://docs.mender.io/3.1/system-updates-yocto-project/build-for-production)のセクションを参照してください。

### 永続ストレージ

バックエンドサービスのデータの永続ストレージは、名前付きDockerボリュームを使用して実装されています。テンプレートは次のボリュームをマウントするように設定されています：

- mender-artifacts - アーティファクトオブジェクトのストレージ
- mender-db - Menderサービスのデータベースデータ

ボリュームを作成します：

```sh
docker volume create --name=mender-artifacts
docker volume create --name=mender-db
```

**config/prod.yml** のデプロイメント構成を更新する必要があります。以下の手順を進めていきましょう。

### Minio

**MINIO_ACCESS_KEY** および **MINIO_SECRET_KEY** キーは、オブジェクトストアにアーティファクトをアップロードするための認証情報を制御します。MinioはS3 API互換サービスであるため、これらの設定はAmazonのAWSアクセスキーIDおよびシークレットアクセスキーに対応します。

- **ステップ 1.** 長さ16のシークレットキーを生成する必要があります。以下の2つの方法があります。

**方法 1:**

1. Linuxマシンにアクセスできる場合、まずpwgenユーティリティをインストールします。

```sh
sudo apt install pwgen
```

2. その後、長さ16のランダムなシークレットキーを生成します。

```sh
pwgen 16 1
```

**方法 2:**

自分でランダムな16文字のシークレットキーを入力します。このキーには**数字、大文字、小文字**を含める必要があります。

- **ステップ 2.** 上記で生成したシークレットキーを次のコマンドで置き換えます。

```sh
MINIO_SECRET_KEY_GENERATED=<生成したシークレットキー>
```

- **ステップ 3.** 次のコマンドを使用して、アクセスキーとシークレットキーを **config/prod.yml** に挿入します。

```sh
sed -i.bak "s/MINIO_ACCESS_KEY:.*/MINIO_ACCESS_KEY: mender-deployments/g" config/prod.yml
sed -i.bak "s/MINIO_SECRET_KEY:.*/MINIO_SECRET_KEY: $MINIO_SECRET_KEY_GENERATED/g" config/prod.yml
```

### デプロイメントサービス

デプロイメントサービスは、storage-proxyを介してMinioストレージにアーティファクトオブジェクトをアップロードします。詳細については、[管理概要](https://docs.mender.io/3.1/server-installation/overview)を参照してください。このため、認証情報 **DEPLOYMENTS_AWS_AUTH_KEY** および **DEPLOYMENTS_AWS_AUTH_SECRET** を更新し、**DEPLOYMENTS_AWS_URI** をStorage Proxyのドメイン名に設定する必要があります。

- **ステップ 1.** 次のコマンドを実行して、**DEPLOYMENTS_AWS_AUTH_KEY** および **DEPLOYMENTS_AWS_AUTH_SECRET** をそれぞれ **MINIO_ACCESS_KEY** および **MINIO_SECRET_KEY** の値に設定します。

```sh
sed -i.bak "s/DEPLOYMENTS_AWS_AUTH_KEY:.*/DEPLOYMENTS_AWS_AUTH_KEY: mender-deployments/g" config/prod.yml
sed -i.bak "s/DEPLOYMENTS_AWS_AUTH_SECRET:.*/DEPLOYMENTS_AWS_AUTH_SECRET: $MINIO_SECRET_KEY_GENERATED/g" config/prod.yml
```

- **ステップ 2.** 次のコマンドを実行して、**DEPLOYMENTS_AWS_URI** をStorage Proxyにポイントさせます。

```sh
sed -i.bak "s/https:\/\/set-my-alias-here.com/https:\/\/$STORAGE_PROXY_DOMAIN_NAME/g" config/prod.yml
```

### ストレージプロキシ

デフォルトのセットアップでは、ストレージサービスのプロキシとして動作する個別のプロセスはありません。この目的のためにMender API Gatewayを使用できますが、追加のドメイン名が必要です。次のコマンドを実行して、プレースホルダー値 set-my-alias-here を有効なドメイン名に変更し、Mender API Gatewayをストレージサービスのプロキシとして使用します。

```sh
sed -i.bak "s/set-my-alias-here.com/$STORAGE_PROXY_DOMAIN_NAME/g" config/prod.yml
```

### APIゲートウェイ

セキュリティ上の理由から、API Gatewayは割り当てられたDNS名を正確に知る必要があります。これは、ALLOWED_HOSTS環境変数を介して設定します。

次のコマンドを実行して、プレースホルダー値 my-gateway-dns-name を有効なホスト名に変更します。

```sh
sed -i.bak "s/my-gateway-dns-name/$API_GATEWAY_DOMAIN_NAME/g" config/prod.yml
```

## サーバーの起動

- **ステップ 1.** 以下のコマンドを使用して、すべてのサービスをデタッチモードで起動します。

```sh
./run up -d
```

```
Creating network "menderproduction_mender" with the default driver
Creating menderproduction_mender-nats_1                   ... done
Creating menderproduction_mender-mongo_1 ... done
Creating menderproduction_minio_1        ... done
Creating menderproduction_mender-gui_1   ... done
Creating menderproduction_mender-workflows-worker_1       ... done
Creating menderproduction_mender-create-artifact-worker_1 ... done
Creating menderproduction_mender-useradm_1                ... done
Creating menderproduction_mender-workflows-server_1       ... done
Creating menderproduction_mender-deviceconfig_1           ... done
Creating menderproduction_mender-inventory_1              ... done
Creating menderproduction_mender-deviceconnect_1          ... done
Creating menderproduction_mender-device-auth_1            ... done
Creating menderproduction_mender-api-gateway_1            ... done
Creating menderproduction_mender-deployments_1            ... done
```

- **ステップ 2.** サービスが実行中であることを確認するには、以下のコマンドを実行し、すべてのサービスの状態が "Up" であることを確認します。

```sh
./run ps
```

```
                      Name                                    Command                  State                  Ports            
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

- **ステップ 3.** これは新規インストールであるため、ユーザー管理サービスが提供するCLIを使用して初期ユーザーを作成する必要があります。このサービスのバイナリはDockerコンテナに埋め込まれているため、`docker-compose` の `exec` サブコマンドを使用して実行します。

```sh
./run exec mender-useradm /usr/bin/useradm create-user --username=myname@host.com --password=mypassword
```

## サーバーへのアクセス

### 公開サーバー

前の手順で指定したドメイン名を使用して、公開されている Mender サーバーにアクセスできます。その後、最初のユーザーのために上記の資格情報を入力し、サーバーにログインしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/server/login.png" alt="pir" width="400" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/server/after-login.jpg" alt="pir" width="1000" height="auto"/></p>

### ローカルサーバー

ただし、Mender サーバーをローカルで実行している場合は、いくつか追加の手順が必要です。

- **ステップ 1.** OpenWrt Luci Web UI にアクセスする

```sh
例:
192.168.2.1:85
```

- **ステップ 2.** `Network > DHCP and DNS` に移動する

- **ステップ 3.** **Server Settings** の下で **General Settings** をクリックする

- **ステップ 4.** **Addresses** の隣のスペースに、以前作成したサブドメインとドメイン名を入力し、その後 X86 の IP アドレスを以下のように入力する

```sh
/mender.seeedstudio.com/192.168.2.1
```

- **ステップ 5.** **SAVE & APPLY** をクリックする

- **ステップ 6.** ブラウザでサブドメインとドメイン名を入力してローカル Mender サーバーにアクセスする

```sh
例:
https://mender.seeedstudio.com
```

**注意:** 必ず **`https://`** を先頭に追加してください

これで、自己ホスト型の Mender サーバーに接続されているクライアントに OTA 更新をプッシュすることができます！

**注意:** Mender サーバーの起動や実行中に問題が発生した場合は、[Mender サーバーのトラブルシューティング](https://docs.mender.io/3.1/troubleshoot/mender-server)セクションを参照してください。