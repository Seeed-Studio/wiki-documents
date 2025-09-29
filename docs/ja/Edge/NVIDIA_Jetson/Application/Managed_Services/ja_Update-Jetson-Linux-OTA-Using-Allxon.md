---
description: Allxonを使用してJetson LinuxをOver-the-Air更新する
title: AllxonでNVIDIA JetsonをOTA更新する
keywords:
- Sorftware Allxon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Update-Jetson-Linux-OTA-Using-Allxon
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

# Allxonを使用してJetson LinuxをOver-the-Air更新する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/thumb.png" alt="pir" width="1000" height="auto"/></p>

## はじめに

一般的に、NVIDIAは「OTAペイロードパッケージ更新」メカニズムを提供しており、ユーザーがJetsonデバイスを新しいバージョンのJetPackに更新できるようにしています。JetsonデバイスのOSを更新するのは便利に見えますが、ユーザーが行う必要がある追加の作業があります。それは、OTAペイロードパッケージをJetsonデバイスに配信するためのOTAサーバーをホストする必要があることです。これは、OTAペイロードパッケージの生成に加えて、ユーザーが処理するには大きな負担となります。

今では、その心配は不要です。[Allxon](https://www.allxon.com)が、Allxon DMSポータル経由でOTAペイロードパッケージをJetsonデバイスに配信するお手伝いをします。OTAペイロードパッケージの生成を担当するユーザーや製造業者にとって、OTAペイロードパッケージのアップロードは非常に簡単です。Jetsonデバイス用のOTAペイロードパッケージ更新を実行したいユーザーにとっても、デバイス群に新しいバージョンのOTAペイロードパッケージを配布することが簡単です。上記のすべてについて、このwikiでステップバイステップで詳しく説明されています。それでは、一緒に進めて、Allxonを使用してJetsonデバイスをover-the-airで更新を始めましょう！

## ワークフロー

ワークフローは以下の通りです：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/20.jpg" alt="pir" width="1000" height="auto"/></p>

製造業者や開発者にOTAペイロードパッケージをAllxonに提供して検証を行っていただきたいと考えています。なぜAllxonがそれを行いたいのでしょうか？それは、AllxonがOTAペイロードパッケージが対応するJetsonデバイスで動作することを確認したいからです。Allxonによる検証の利点は、AllxonがOTAペイロードパッケージのアップロードをお手伝いし、それが動作することを確認できることです。このステップについては、このガイドの後半で説明します。

## サポートされているハードウェア

Allxonを使用したOTAペイロードパッケージ更新は、以下のハードウェアでサポートされています：

- NVIDIAの公式開発キット：

  - NVIDIA® Jetson Xavier™ NX Developer Kit
  - NVIDIA Jetson AGX Xavier Developer Kit
  - NVIDIA Jetson TX2 Developer Kit

- Seedのキャリアボード：

  - Jetson SUB Mini PC
  - A203 Carrier Board
  - A203 (Version 2) Carrier Board
  - A205 Carrier Board
  - A206 Carrier Board

**注意：** 上記のキャリアボード用のSoMを選択する際は、Jetson Xavier NXまたはJetson TX2 NXモジュールのいずれかを使用してください。Jetson Nanoモジュールはこのメカニズムではサポートされていません。

## 前提条件

- JetPack（Base BSP）を実行している上記のJetsonデバイスのいずれか
- Jetsonデバイスに[Allxon DMSエージェントがインストール](https://wiki.seeedstudio.com/ja/Allxon-Jetson-Getting-Started)され、Allxon DMSポータルとペアリングされていること
- UbuntuがインストールされたホストPC（ネイティブシステムを推奨）
- HDMIディスプレイとキーボード（オプション）

**注意：** このガイドで使用されたホストPCは、Ubuntu 20.04を実行するマシンでした。

## はじめに

このガイドは2つの主要なセクションに分かれています。最初のセクションでは、OTAペイロードパッケージを生成してAllxon DMSポータルにアップロードする方法について説明します。2番目のセクションでは、Allxon DMSポータルを使用してJetsonデバイスに実際にOTAペイロードパッケージ更新を実行する方法について説明します。

まず最初に、以下を実行してJetsonデバイスにインストールされている現在のL4Tバージョンを確認しましょう

```sh
cat /etc/nv_tegra_release
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/21.png" alt="pir" width="1000" height="auto"/></p>

これからL4T 32.6.1にアップデートを進めます

### OTAペイロードパッケージの生成とAllxon DMSポータルへのアップロード

OTAペイロードパッケージの生成を開始する前に、いくつかの背景知識をご紹介します：

1. OTAペイロードパッケージとは何ですか？

    - OTAペイロードパッケージは、Jetsonデバイスを低いバージョンのBSPから新しいバージョンにアップデートするために使用されます。
    - **ベースBSP**と**ターゲットBSP**に基づいて生成する必要があります。
    - つまり、ターゲットBSPが同じでもベースBSPが異なる場合、OTAペイロードパッケージは異なります。
    - さらに、OTAペイロードパッケージには、完全なターゲットBSPイメージではなく、ファイルの**差分**のみが含まれます。

2. このメカニズムとフローにおけるAllxonの役割は何ですか

    - Allxon DMSは、DMSポータル経由でOTAペイロードパッケージをJetsonデバイスに配信することをサポートできます。
    - メーカーと開発者は、OTAペイロードパッケージをAllxon DMSポータルにアップロードするだけです。
    - エンドユーザーは、Allxon DMSポータル上で対応するOTAペイロードパッケージをグループに割り当てるだけです。

3. OTAペイロードパッケージアップデートの実行後、デバイス上で消去されない場所はありますか？

    - パス**"/ota**"の下にあるファイルは、OTAペイロードパッケージアップデート後に消去されないことがわかりました。
    - これは、ユーザーが重要なデータをバックアップし、OTAペイロードパッケージプロセス中にそれらを復元できる場所になります。

#### 初期準備 - ベースBSP

前述のように、OTAペイロードパッケージはベースBSPとターゲットBSPに基づいて生成されます。そのため、OTAペイロードパッケージを生成する前に、ベースBSPとターゲットBSPを準備する必要があります。どのベースBSPを準備する必要があるかをどのように選択しますか？それは、どのデバイスをアップデートしたいかに基づいています。例えば、JetPackバージョン4.4.4を実行しているXavier NXデバイスをアップデートしたい場合、Xavier NX用のJetPackバージョン4.4.4をベースBSPとして準備する必要があります。

- **ステップ1.** 現在Jetsonデバイスにインストールされているバージョンに応じて、[こちらから](https://developer.nvidia.com/embedded/linux-tegra-archive)L4Tリリースを選択します

- **ステップ2.** お使いのボードに応じてL4Tドライバーパッケージ（BSP）とサンプルルートファイルシステムをダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/1.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ3.** 両方のファイルを同じディレクトリに配置します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/2.png" alt="pir" width="500" height="auto"/></p>

- **ステップ4.** ターミナルウィンドウを開き、上記のディレクトリに移動してL4Tドライバーパッケージ（BSP）を展開します

```sh
sudo tar -vxjf <Base_BSP_file_name>.tbz2
```

- **ステップ 5.** 展開されたNVIDIAドライバーパッケージの**rootfsディレクトリ**に移動します

```sh
cd <Base_BSP_L4T_root>/Linux_for_Tegra/rootfs
```

- **ステップ 6.** サンプルファイルシステムをrootfsディレクトリに展開する

```sh
sudo tar -jxpf ../../<rootfs_file_name>.tbz2
```

- **ステップ 7.** apply_binaries.sh スクリプトを実行して、NVIDIA ユーザー空間ライブラリをターゲットファイルシステムにコピーします

```sh
cd ..
sudo ./apply_binaries.sh
```

#### 初期準備 - ターゲットBSP

次に、ターゲットBSPを準備します。これは、デバイス上で更新されるBSPになります。

- **ステップ 1.** 上記の**初期準備 - ベースBSP**セクションの**ステップ1 - ステップ7**に従いますが、今回はデバイス上で更新されるBSPに応じて必要なファイルをダウンロードします

- **ステップ 2.** ターゲットBSPの**rootfs/etc/init.dディレクトリ**に移動します

```sh
cd <Target_BSP_L4T_root>/Linux_for_Tegra/rootfs/etc/init.d
```

- **ステップ 3.** **install_allxon_dms.sh** という名前の新しいファイルを作成します

```sh
sudo nano install_allxon_dms.sh
```

**注意:** 上記の任意のテキストエディタを使用できます。ここでは**nanoテキストエディタ**を使用しています

- **ステップ4.** 上記で作成したファイルに以下のコードをコピーしてください

```sh
#!/bin/bash
    
DOWNLOAD_URL="https://get.allxon.net"
RESUME_DATA="/ota/resume_data.sh"
 
SYNCAGENT_FOLDER="/var/lib/SyncAgent"
AGENT_IN_OTA_SRC_DIR="/ota/agent"
TRIAL_TAG="${AGENT_IN_OTA_SRC_DIR}/trial.tag"
TRIAL_AGENT_SN="${AGENT_IN_OTA_SRC_DIR}/agentsn"
    
verify_nvidia_jetson() {
    if [ -f "/etc/nv_tegra_release" ]; then
        echo "It's Jetson platform."
    else
        echo "It's non-Jetson platform, exit the process."
        exit 1
    fi
}
   
check_ota_folder() {
    if [ -d "/ota" ]; then
        echo "It's the case of OTA Payload Package update."
    else
        echo "It's not OTA Payload Package case."
        exit 0
    fi
}
 
resume_agent_cache() {
    echo "Resume Agent's cache"
    mkdir -p "${SYNCAGENT_FOLDER}"
 
    if [ -d "${AGENT_IN_OTA_SRC_DIR}/SyncAgent" ]; then
        echo " - Resume ${SYNCAGENT_FOLDER}"
        cp -r ${AGENT_IN_OTA_SRC_DIR}/SyncAgent/* ${SYNCAGENT_FOLDER}
    fi
 
    if [ -f "${TRIAL_AGENT_SN}" ]; then
        echo " - Resume ${TRIAL_AGENT_SN}"
        cp ${TRIAL_AGENT_SN} /var
    fi
}
 
remove_agent_cache() {
    echo "Remove Agent's cache"
 
    if [ -d "${AGENT_IN_OTA_SRC_DIR}" ]; then
        rm -rf ${AGENT_IN_OTA_SRC_DIR}
    fi
}
  
resume_data_after_ota() {
    if [ -f "${RESUME_DATA}" ]; then
        echo "Find the file ${RESUME_DATA}, start to do data resume."
        chmod 777 ${RESUME_DATA}
        bash ${RESUME_DATA}
        rm ${RESUME_DATA}
    else
        echo "No data needs to be resumed, skip the process."
    fi
}
   
check_agent_exists() {
    dpkg -l | grep "$@"
}
 
install_agent() {
    if [ -f "${TRIAL_TAG}" ]; then
        wget -qO - "$DOWNLOAD_URL/linux/trial" | bash -s -- --upgrade
    else
        wget -qO - "$DOWNLOAD_URL/linux/enterprise" | bash -s -- --upgrade
    fi
}
    
do_install() {
    verify_nvidia_jetson
    check_ota_folder
    resume_data_after_ota  
    if check_agent_exists allxon-dms-agent; then
        echo "Allxon DMS Agent is already installed in the system."
    else
        echo "Allxon DMS Agent doesn't exist, prepare to install."
        resume_agent_cache
        install_agent
        #remove_agent_cache
    fi  
}
    
do_install
```
- **ステップ 5.** Target BSPの**rootfs/etc/systemd/system**ディレクトリに移動する

```sh
cd <Target_BSP_L4T_root>/Linux_for_Tegra/rootfs/etc/systemd/system
```

- **ステップ 6.** **dms-install.service** という名前の新しいファイルを作成し、以下のコードをファイルにコピーします

```sh
[Unit]
Description=Service for Auto Install Allxon DMS Agent
Documentation=https://dms.allxon.com/
Wants=network-online.target
After=network.target network-online.target

[Service]
Type=simple
ExecStart=/etc/init.d/install_allxon_dms.sh
StandardOutput=null
Restart=always
RestartSec=60
DefaultStartLimitInterval=3600s
DefaultStartLimitBurst=10

[Install]
WantedBy=multi-user.target
```

- **ステップ 7.** 以下のコマンドを実行して、Target BSP の **dms-install.service** のファイル権限を変更し、シンボリックリンクを作成します

```sh
sudo chmod 644 ./etc/systemd/system/dms-install.service
sudo chmod 777 ./etc/init.d/install_allxon_dms.sh
sudo ln -s /etc/systemd/system/dms-install.service ./etc/systemd/system/multi-user.target.wants/dms-install.service
```

#### ターゲットBSPでの自動インストールエージェント機能

##### ストーリー

- ほとんどの場合、OTAペイロードパッケージの更新を実行した後、ファイルシステムは真新しい状態に消去され、消去されない場所は **"/ota"** フォルダのみです。
- ここで深刻な問題があります。ファイルシステムが消去されるため、システムにAllxon DMSエージェントが存在しません。OTAペイロードパッケージ更新後、デバイスはどのようにしてAllxon DMSポータルに接続し続け、ユーザーのリモート管理を支援できるでしょうか？
- さらに、ユーザーがOTAペイロードパッケージ更新後にデバイスデータを復元したい場合、どのように支援できるでしょうか？

##### 解決策1 - エンタープライズエージェントの自動インストール

- JetsonデバイスがJetpackの更新完了後に自動的にAllxon DMSエージェントをエンタープライズエディションでインストールできるようにするため、OTAペイロードパッケージ内のシステムディレクトリ **"/etc/init.d/"** にスクリプト **"install_allxon_dms.sh"** を配置し、同時にサービス **"dms-install.service"** もOTAペイロードパッケージに配置する必要があります。
- OTAペイロードパッケージ更新後にデバイスが起動する際、スクリプトがシステムによって実行され、Allxon DMSエージェントがエンタープライズエディションでインストールされます。

##### 解決策2 - デバイスデータの復元

- デバイスデータを復元するため、ユーザーはOTAペイロードパッケージ更新を実行する前に、復元が必要なデータをJetsonデバイスの **"/ota"** ディレクトリ下に配置する必要があります。
- さらに、ユーザーは **"/ota"** フォルダからデータ復元を行うスクリプトを実装する必要があり、スクリプトファイル名は **"resume_data.sh"** である必要があります。
- **"/ota"** 下に **"resume_data.sh"** スクリプトが存在する場合、スクリプト **"install_allxon_dms.sh"** は **"resume_data.sh"** を実行してユーザーが **"/ota"** フォルダからデータを復元することを支援し、このスクリプトは実行後に削除されて無限ループを防ぎます。

#### OTAペイロードパッケージの生成

ベースBSPとターゲットBSPの両方が準備できたら、私たちが提供するスクリプトを使用してOTAペイロードパッケージの生成を支援するだけです。それでは始めましょう！

- **ステップ1.** ターゲットBSPのL4Tリリースに[こちらから](https://developer.nvidia.com/embedded/linux-tegra-archive)移動し、**Jetson Platform Over-The-Air Update Tools** をクリックしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/3.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ2.** ダウンロードした **Jetson Platform Over-The-Air Update Tools**（例：ota_tools_R32.6.1_aarch64.tbz2）ファイルを、ターゲットBSPの **Linux_for_Tegra** と同じフォルダ内に配置します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/4.png" alt="pir" width="500" height="auto"/></p>

- **ステップ3.** **generate_ota_payload.sh** という名前の新しいファイルを作成し、任意の場所に配置します（上記と同じフォルダに配置するのが簡単です）

- **ステップ4.** ファイル内に以下のコードをコピーします

```sh
#!/bin/bash

BASE_BSP_PATH="<Base_BSP_L4T_root>/Linux_for_Tegra"
TOT_BSP_PATH="<Target_BSP_L4T_root>/Linux_for_Tegra"
 
OTA_TOOL="<ota_tools_file_name>.tbz2"
JETSON_MODEL="<name of Jetson SoM>"
BSP_VERSION="<Base_BSP_version--ex:R32-4>"
 
TARGET_FOLDER="<location of target folder>"
 
echo "1. Export variable BASE_BSP"
export BASE_BSP=${BASE_BSP_PATH}
 
echo "2. Export variable ToT_BSP"
export ToT_BSP=${TOT_BSP_PATH}
 
echo "3. Install OTA tool to ToT_BSP"
cd ${ToT_BSP}/../
tar xpf ${OTA_TOOL}
 
echo "4. Export variable ToT_BSP to TARGET_BSP"
export TARGET_BSP=${ToT_BSP}
 
echo "5. Check all exported variables"
echo " - BASE_BSP=${BASE_BSP}"
echo " - ToT_BSP=${ToT_BSP}"
echo " - TARGET_BSP=${TARGET_BSP}"
echo " - JETSON_MODEL=${JETSON_MODEL}"
echo " - BSP_VERSION=${BSP_VERSION}"
 
echo "6. Generate the base recovery image and recovery DTB. Go to TARGET_BSP folder"
cd ${TARGET_BSP}/
 
sudo ./tools/ota_tools/version_upgrade/build_base_recovery_image.sh ${JETSON_MODEL} ${BSP_VERSION} ${BASE_BSP} ${BASE_BSP}/rootfs ${TARGET_BSP}
 
echo "7. Generate the OTA update payload package. Go to TARGET_BSP folder"
cd ${TARGET_BSP}/
 
sudo ./tools/ota_tools/version_upgrade/l4t_generate_ota_package.sh ${JETSON_MODEL} ${BSP_VERSION}
 
echo "8. Copy ota_payload_package.tar.gz to ${TARGET_FOLDER}"
cp bootloader/${JETSON_MODEL}/ota_payload_package.tar.gz ${TARGET_FOLDER}
```

- **ステップ 5.** 上記のコード内の以下の変数を修正してください

  - BASE_BSP_PATH: Base BSPのディレクトリパス
  - TOT_BSP_PATH: Target BSPのディレクトリパス
  - OTA_TOOL: OTAツールのファイル名
  - JETSON_MODEL: モデル情報（対応するモデルを調べるには[このページ](https://docs.nvidia.com/jetson/l4t/index.html#page/Tegra%20Linux%20Driver%20Package%20Development%20Guide/quick_start.html#wwpID0EAAPNHA)をご利用ください）
  - BSP_VERSION: Base BSPのバージョン
  - TARGET_FOLDER: 生成されたOTA Payload Packageを配置するディレクトリパス

- **ステップ 6.** **generate_ota_payload.sh**に実行権限を付与してください

```sh
chmod 777 generate_ota_payload.sh
```

- **ステップ 7.** スクリプトを実行する

```sh
sudo ./generate_ota_payload.sh
```

これで、OTA ペイロードパッケージが、以前に定義した **TARGET_FOLDER** 内に **ota_payload_package.tar.gz** として生成されます

#### アップロード用の OTA ペイロードパッケージ zip ファイルを準備する

- **ステップ 1.** 以前にダウンロードした **Jetson Platform Over-The-Air Update Tools**（例：ota_tools_R32.6.1_aarch64.tbz2）をコピーし、以前に作成した **TARGET_FOLDER** 内に配置します

- **ステップ 2.** **TARGET_FOLDER** 内に **run_ota_payload.sh** という名前のファイルを作成し、以下のコードをその中にコピーします

```sh
#!/bin/bash
    
OTA_TOOL="<ota_tools_file_name>.tbz2"
OTA_PAYLOAD="ota_payload_package.tar.gz"
    
WORK_DIR="/allxon_ota" # OTA payload, tool and script should be put in this folder before updating
OTA_SRC_DIR="/ota" # Unless the emmc storage is struggle, DO NOT need to modify this path
TARGET_VERSION="<Target_BSP_version--ex:R32.6.1>"
  
DMS_BACKUP_SERVICE="dms-backup.service"
BACKUP_AGENT_CACHE="backup_agent_cache.sh"
   
release_space_rm_ota_files() {
    echo "Release unused files and space..."
   
    if [ -f "${OTA_PAYLOAD}" ]; then
        echo " - Remove ${OTA_PAYLOAD}"
        sudo rm ${OTA_PAYLOAD}
    fi
   
    if [ -f "${OTA_TOOL}" ]; then
        echo " - Remove ${OTA_TOOL}"
        sudo rm ${OTA_TOOL}
    fi     
}
  
enable_backup_agent_cache() {
    echo "Enable backup Agent's cache service"
    chmod 777 ${BACKUP_AGENT_CACHE}
    chmod 644 ${DMS_BACKUP_SERVICE}
 
    cp ${BACKUP_AGENT_CACHE} /etc/init.d/
    cp ${DMS_BACKUP_SERVICE} /etc/systemd/system/
  
    systemctl daemon-reload
    systemctl enable ${DMS_BACKUP_SERVICE}
}
   
   
if [ ! -f "/etc/nv_tegra_release" ]; then
    sudo echo "Not Supported"
    exit 1
fi
    
REVISION=$(cat /etc/nv_tegra_release | cut -d "," -f 2 | cut -d " " -f 3 | sed 1q) > /dev/null
    
if [ "$REVISION" == "" ]; then
    echo "Error!"
    exit 1
else
    if [ "$REVISION" == "$TARGET_VERSION" ]; then
        echo "Update to JetPack $REVISION success!"
        release_space_rm_ota_files
        exit 0
    else
        echo "It's JetPack $REVISION, need to do update!"
        enable_backup_agent_cache
    fi
fi
    
echo "1. Create ${OTA_SRC_DIR} directory"
    
sudo mkdir -p ${OTA_SRC_DIR}
    
echo "2. Move ${OTA_PAYLOAD} to ${OTA_SRC_DIR}"
    
sudo mv ${OTA_PAYLOAD} ${OTA_SRC_DIR}
    
echo "3. Extract ${OTA_TOOL}"
    
tar -jxvf ${OTA_TOOL}
    
echo "4. Set variable WORKDIR"
    
export WORKDIR=${WORK_DIR}
    
echo "WORKDIR=${WORKDIR}"
    
echo "5. Change directory to ${WORKDIR}/Linux_for_Tegra/tools/ota_tools/version_upgrade"
    
cd ${WORKDIR}/Linux_for_Tegra/tools/ota_tools/version_upgrade
    
echo "6. Execute nv_ota_start.sh"
    
sudo ./nv_ota_start.sh /dev/mmcblk0 ${OTA_SRC_DIR}/ota_payload_package.tar.gz

```

- **ステップ 3.** 必要に応じて、上記の「run_ota_payload.sh」スクリプトの変数を要件と条件に基づいて変更する

  - OTA_TOOL（ファイル名が正しいかどうかを確認するだけ）
  - OTA_PAYLOAD（ファイル名が正しいかどうかを確認するだけ）
  - TARGET_VERSION（ターゲット BSP バージョンに応じて、形式は「Rxx.x.x」）

- **ステップ 4.** **TARGET_FOLDER** 内に **dms-backup.service** という名前のファイルを作成し、以下のコードをその中にコピーする

```sh
[Unit]
Description=Back up Allxon DMS Agent cache during Pre-Shutdown Processes
DefaultDependencies=no
Before=shutdown.target reboot.target halt.target
 
[Service]
Type=oneshot
User=root
Group=root
ExecStart=/etc/init.d/backup_agent_cache.sh
 
[Install]
WantedBy=halt.target reboot.target shutdown.target
```

- **ステップ 5.** **TARGET_FOLDER** 内に **backup_agent_cache.sh** という名前のファイルを作成し、以下のコードをコピーしてください

```sh
#!/bin/bash
 
SYNCAGENT_FOLDER="/var/lib/SyncAgent"
TRIAL_TAG="/usr/share/allxon-dms-agent/trial.tag"
TRIAL_AGENT_SN="/var/agentsn"
AGENT_IN_OTA_SRC_DIR="/ota/agent"
 
backup_agent_cache() {
    echo "Backup Agent's cache"
    sudo mkdir -p "${AGENT_IN_OTA_SRC_DIR}"
 
    if [ -d "${SYNCAGENT_FOLDER}" ]; then
        echo " - Copy ${SYNCAGENT_FOLDER}"
        sudo cp -r ${SYNCAGENT_FOLDER} ${AGENT_IN_OTA_SRC_DIR}
    fi
 
    if [ -f "${TRIAL_TAG}" ]; then
        echo " - Copy ${TRIAL_TAG}"
        sudo cp ${TRIAL_TAG} ${AGENT_IN_OTA_SRC_DIR}
 
        if [ -f "${TRIAL_AGENT_SN}" ]; then
            echo " - Copy ${TRIAL_AGENT_SN}"
            sudo cp ${TRIAL_AGENT_SN} ${AGENT_IN_OTA_SRC_DIR}
        fi
    fi
}
 
backup_agent_cache
```

- **ステップ 6.** ターミナルウィンドウから **TARGET_FOLDER** に移動し、以下のコマンドを実行して上記のファイルを含むzipファイルを作成します

```sh
zip ota_payload.zip *
```

**TARGET_FOLDER** は、生成された **ota_payload.zip** ファイルと共に以下のようになります

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/5.png" alt="pir" width="400" height="auto"/></p>

#### OTA ペイロードパッケージ zip ファイルのアップロード

OTA ペイロードパッケージに使用される zip ファイルを生成した後、この zip ファイルを Allxon DMS ポータルまたは独自のストレージにアップロードを開始できます。

Allxon に検証とzip ファイルのアップロードを依頼したい場合は、[こちらから連絡](https://www.allxon.com/contact)してこのパッケージを Allxon に配信するだけです。その後、このセクションをスキップできます。

zip ファイルを自分でアップロードしたい場合は、以下の手順に従ってください

- **ステップ 1.** [Allxon DMS ポータル](https://dms.allxon.com/)にアクセスしてサインインします

**注意:** Jetson デバイスに Allxon DMS エージェントをインストールし、Allxon DMS ポータルとペアリングするために、[この wiki](https://wiki.seeedstudio.com/ja/Allxon-Jetson-Getting-Started) に従うことを確認してください

- **ステップ 2.** **Applications** ページに移動し、**Register** をクリックして新しいアプリケーションを登録します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/6.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 3.** 以下のように情報を入力し、**Next** をクリックします

  - Application Name: brand_model_BaseBSP_to_TargetBSP
  - App GUID: brand_model_BaseBSP_to_TargetBSP
  - Platform: Linux

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/8.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 4.** 説明を追加し、**Register** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/9.png" alt="pir" width="400" height="auto"/></p>

作成されたアプリケーションが表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/10.1.png" alt="pir" width="650" height="auto"/></p>

- **ステップ 5.** それをクリックし、**Versions** セクションの下にある **+** サインをクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/11.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 6.** バージョン番号を追加し、ニーズに合わせて以下の 2 つのシナリオに基づいてインストールコマンドを入力します

1. zip ファイルを Allxon DMS ポータルにアップロードしたい場合は、以下のインストールコマンドを使用してください。

```sh
mkdir -p /allxon_ota
unzip -o /var/lib/SyncAgent/download/"Application registered name" -d /allxon_ota/
chmod 777 /allxon_ota/run_ota_payload.sh
rm -rf /var/lib/SyncAgent/download/*
cd /allxon_ota/ && /allxon_ota/run_ota_payload.sh
shutdown -r +5 "Restart the system to upgrade the JetPack will be started in 5 mins."
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/12.png" alt="pir" width="400" height="auto"/></p>

**注意**：「Application registered name」は、以前に作成したアプリケーション名に変更する必要があります。例：**「jetson-xavier-nx-devkit-emmc_4.4_to_4.6」**

2. zipファイルを独自のストレージまたはサイトにアップロードしたい場合は、以下のインストールコマンドを使用してください。

```sh
mkdir -p /allxon_ota
wget -qO /allxon_ota/ota_payload.zip "ota_payload_package_download_url"
unzip -o /allxon_ota/ota_payload.zip -d /allxon_ota/
chmod 777 /allxon_ota/run_ota_payload.sh
rm /allxon_ota/ota_payload.zip
cd /allxon_ota/ && /allxon_ota/run_ota_payload.sh
shutdown -r +5 "Restart the system to upgrade the JetPack will be started in 5 mins."
```

- **ステップ 7.** 先ほど生成した **ota_payload.zip** ファイルを選択してアップロードし、アップロードが完了したら **Create** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/13.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 8.** **Version Description** を入力し、**Save** をクリックしてアプリケーションを保存します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/14.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 9.** **Versions** セクションの下にある **+** サインをクリックし、**Release** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/15.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 10.** 最後に **Release** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/16.png" alt="pir" width="400" height="auto"/></p>

これで、OTA ペイロードパッケージを Allxon DMS ポータルに正常にアップロードし、リリースしました。次のステップでは、この更新を Jetson デバイスに配布します。

### Allxon DMS ポータル経由での OTA ペイロードパッケージ更新の実行

続行する前に、以下の点にご注意ください：

- OTA ペイロードパッケージ更新を実行する前に、Jetson デバイスが全プロセス中にイーサネットケーブルで接続されていることを確認してください。そうでなければ、更新は失敗します。
- アップグレードプロセスが失敗した場合、**/ota_log** に移動してアップグレードプロセスのログを確認できます。
- アップグレードプロセスが成功した場合、フォルダ **/ota** 下のファイルは保持されます。
- eMMC または内部ストレージに少なくとも **「OTA ペイロードパッケージ * 2.5」** の利用可能な容量があることを確認してください。

それでは、Allxon DMS ポータル経由で OTA ペイロードパッケージ更新を実行しましょう

- **ステップ 1.** **Allxon DMS ポータル** の **Applications** ページに移動し、**Register** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/6.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 2.** **Existing** をクリックし、OTA ペイロードパッケージを選択して **Register** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/25.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 3.** 新しく追加されたアプリケーションをクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/26.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 4.** **Versions** セクションの下にある **+** サインをクリックし、**Distribute** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/27.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 2.** 配布したいグループを選択し、**Distribute** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/18.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 3.** **Distribution Time** を設定し、**Schedule** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/19.png" alt="pir" width="400" height="auto"/></p>

これで、選択されたグループ内の Jetson デバイスがこの OTA ペイロードパッケージを受信し、アップグレードプロセスを開始します。

Jetson デバイスが HDMI ディスプレイに接続されている場合、インストールが完了すると以下のような画面が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/23.jpg" alt="pir" width="1000" height="auto"/></p>

SSH 経由で Jetson デバイスに接続している場合、インストールが完了すると **「Restart the system to upgrade the JetPack will be started in 5 mins.」** というメッセージも表示されます。

アップグレードプロセスを開始するために、5分後に再起動されます。これは、ユーザーが未保存の作業を保存するための追加時間を提供するためです。ただし、上記のメッセージが表示された直後に Jetson デバイスを再起動することもできます。

- **ステップ 4.** Jetson デバイスが再び起動すると、黒い画面が表示されます。数分待つと、デバイスが自動的に再起動します。次に、新しい OS の初期設定画面が表示されるので、この設定を完了してデバイスに再度入る必要があります。

**注意：** 上記の設定セットアップを完了するために、Jetson デバイスを HDMI ディスプレイとキーボードに接続することをお勧めします

- **ステップ 5.** セットアップが完了し、デバイスがデスクトップに起動した後、以下のコマンドを実行して JetPack バージョンが更新されているかどうかを確認します

```sh
cat /etc/nv_tegra_release
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/24.png" alt="pir" width="1000" height="auto"/></p>

ご覧のとおり、この場合、L4T は 32.6.1 に更新されました

## Jetson デバイスから Allxon DMS をアンインストールする

デバイスから Allxon DMS Agent をアンインストールしたい場合は、まず以下のコマンドを使用して自動インストール Allxon DMS Agent メカニズム（サービス）を無効にしてください

```sh
sudo systemctl disable dms-install.service
```

その後、以下のコマンドを使用してAllxon DMS Agentをアンインストールできます

```sh
sudo wget -qO - "https://get.allxon.net/linux/uninstall" | sudo bash -s
```
