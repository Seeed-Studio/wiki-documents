---
description: Allxon を使用して Jetson Linux を OTA で更新する
title: Allxon を使用して NVIDIA Jetson を OTA 更新
keywords:
- Sorftware Allxon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Update-Jetson-Linux-OTA-Using-Allxon
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Allxon を使用して Jetson Linux を OTA で更新する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/thumb.png" alt="pir" width="1000" height="auto"/></p>

## はじめに

一般的に、NVIDIA は「OTA ペイロードパッケージ更新」メカニズムを提供しており、これによりユーザーは Jetson デバイスを新しいバージョンの JetPack に更新することができます。一見すると、Jetson デバイスの OS を更新するのは便利に思えますが、ユーザーが追加で行う必要がある作業があります。それは、OTA ペイロードパッケージを Jetson デバイスに配信するための OTA サーバーをホストすることです。OTA ペイロードパッケージの生成に加えて、この作業を処理するのはユーザーにとって大きな負担となります。

しかし、もうその心配は必要ありません。[Allxon](https://www.allxon.com) を使用すれば、Allxon DMS ポータルを介して OTA ペイロードパッケージを Jetson デバイスに配信することができます。OTA ペイロードパッケージを生成する責任を持つユーザーやメーカーにとっては、OTA ペイロードパッケージをアップロードするのは非常に簡単です。また、Jetson デバイスの OTA ペイロードパッケージ更新を実行したいユーザーにとっても、デバイス群に新しいバージョンの OTA ペイロードパッケージを配布するのは簡単です。これらすべての手順は、この Wiki でステップバイステップで詳しく説明されています。それでは、Allxon を使用して Jetson デバイスを OTA で更新する方法を学びましょう！

## ワークフロー

ワークフローは以下の通りです：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/20.jpg" alt="pir" width="1000" height="auto"/></p>

メーカーや開発者の皆様には、Allxon に OTA ペイロードパッケージを提供して検証を行うようお願いしています。なぜ Allxon がこれを行うのかというと、それは対応する Jetson デバイスで OTA ペイロードパッケージが正常に動作することを確認したいからです。Allxon による検証の利点は、Allxon が OTA ペイロードパッケージをアップロードし、それが確実に動作することを保証できる点です。この手順については、このガイドの後半で説明します。

## 対応ハードウェア

Allxon を使用した OTA ペイロードパッケージ更新は、以下のハードウェアでサポートされています：

- NVIDIA の公式開発キット：

  - NVIDIA® Jetson Xavier™ NX Developer Kit
  - NVIDIA Jetson AGX Xavier Developer Kit
  - NVIDIA Jetson TX2 Developer Kit

- Seeed のキャリアボード：

  - Jetson SUB Mini PC
  - A203 キャリアボード
  - A203 (バージョン 2) キャリアボード
  - A205 キャリアボード
  - A206 キャリアボード

**注意:** 上記のキャリアボードに SoM を選択する際は、Jetson Xavier NX または Jetson TX2 NX モジュールを使用してください。Jetson Nano モジュールはこのメカニズムではサポートされていません。

## 必要条件

- JetPack (Base BSP) を実行している上記のいずれかの Jetson デバイス
- Jetson デバイスにインストールされ、Allxon DMS ポータルとペアリングされた [Allxon DMS エージェント](https://wiki.seeedstudio.com/ja/Allxon-Jetson-Getting-Started)
- Ubuntu がインストールされたホスト PC（ネイティブシステム推奨）
- HDMI ディスプレイとキーボード（オプション）

**注意:** このガイドで使用されたホスト PC は、Ubuntu 20.04 を実行しているマシンでした。

## はじめに

このガイドは2つの主要なセクションに分かれています。最初のセクションでは、OTAペイロードパッケージを生成してAllxon DMSポータルにアップロードする方法について説明します。次のセクションでは、Allxon DMSポータルを使用してJetsonデバイスにOTAペイロードパッケージの更新を実行する方法について説明します。

まず、以下のコマンドを実行してJetsonデバイスにインストールされている現在のL4Tバージョンを確認します。

```sh
cat /etc/nv_tegra_release
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/21.png" alt="pir" width="1000" height="auto"/></p>

次に、これをL4T 32.6.1に更新します。

### OTAペイロードパッケージを生成してAllxon DMSポータルにアップロードする

OTAペイロードパッケージを生成する前に、以下の背景知識を確認してください：

1. OTAペイロードパッケージとは？

    - OTAペイロードパッケージは、Jetsonデバイスを古いバージョンのBSPから新しいバージョンに更新するために使用されます。
    - **BASE BSP**と**Target BSP**に基づいて生成する必要があります。
    - つまり、Target BSPが同じでもBASE BSPが異なる場合、OTAペイロードパッケージは異なります。
    - さらに、OTAペイロードパッケージには、ファイル全体ではなく**差分**のみが含まれます。

2. このメカニズムとフローにおけるAllxonの役割

    - Allxon DMSは、DMSポータルを介してOTAペイロードパッケージをJetsonデバイスに配信するのを支援します。
    - 製造業者や開発者は、OTAペイロードパッケージをAllxon DMSポータルにアップロードするだけで済みます。
    - エンドユーザーは、Allxon DMSポータル上で対応するOTAペイロードパッケージをグループに割り当てるだけです。

3. OTAペイロードパッケージ更新後にデバイス上で消去されない場所はありますか？

    - OTAペイロードパッケージ更新後、**"/ota"**パスの下にあるファイルは消去されないことがわかっています。
    - これは、ユーザーが重要なデータをバックアップし、OTAペイロードパッケージプロセス中に復元できる場所となります。

#### 初期準備 - Base BSP

前述のように、OTAペイロードパッケージはBase BSPとTarget BSPに基づいて生成されます。そのため、OTAペイロードパッケージを生成する前にBase BSPとTarget BSPを準備する必要があります。どのBase BSPを準備するかは、更新したいデバイスに基づいて決定されます。例えば、JetPackバージョン4.4.4を実行しているXavier NXデバイスを更新したい場合、Base BSPとしてJetPackバージョン4.4.4をXavier NX用に準備する必要があります。

- **ステップ1.** Jetsonデバイスに現在インストールされているバージョンに応じて、[こちら](https://developer.nvidia.com/embedded/linux-tegra-archive)からL4Tリリースを選択します。

- **ステップ2.** ボードに応じてL4Tドライバーパッケージ（BSP）とサンプルルートファイルシステムをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/1.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ3.** 両方のファイルを同じディレクトリに配置します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/2.png" alt="pir" width="500" height="auto"/></p>

- **ステップ4.** ターミナルウィンドウを開き、上記のディレクトリに移動してL4Tドライバーパッケージ（BSP）を抽出します。

```sh
sudo tar -vxjf <Base_BSP_file_name>.tbz2
```

- **ステップ5.** 抽出されたNVIDIAドライバーパッケージの**rootfsディレクトリ**に移動します。

```sh
cd <Base_BSP_L4T_root>/Linux_for_Tegra/rootfs
```

- **ステップ6.** サンプルファイルシステムをrootfsディレクトリに抽出します。

```sh
sudo tar -jxpf ../../<rootfs_file_name>.tbz2
```

- **ステップ7.** apply_binaries.shスクリプトを実行して、NVIDIAユーザースペースライブラリをターゲットファイルシステムにコピーします。

```sh
cd ..
sudo ./apply_binaries.sh
```

#### 初期準備 - Target BSP

次にTarget BSPを準備します。これはデバイスに更新されるBSPです。

- **ステップ1.** 上記の**初期準備 - Base BSP**セクションの**ステップ1 - ステップ7**を実行しますが、今回はデバイスに更新されるBSPに応じて必要なファイルをダウンロードします。

- **ステップ2.** Target BSPの**rootfs/etc/init.dディレクトリ**に移動します。

```sh
cd <Target_BSP_L4T_root>/Linux_for_Tegra/rootfs/etc/init.d
```

- **ステップ3.** **install_allxon_dms.sh**という名前の新しいファイルを作成します。

```sh
sudo nano install_allxon_dms.sh
```

**注意:** 上記では任意のテキストエディタを使用できます。ここでは**nanoテキストエディタ**を使用しています。

- **ステップ4.** 以下のコードを上記で作成したファイルにコピーします。

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

- **ステップ 5.** Target BSP の **rootfs/etc/systemd/system** ディレクトリに移動します

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

- **ステップ 7.** 以下のコマンドを実行して、ファイルの権限を変更し、Target BSP の **dms-install.service** のシンボリックリンクを作成します

```sh
sudo chmod 644 ./etc/systemd/system/dms-install.service
sudo chmod 777 ./etc/init.d/install_allxon_dms.sh
sudo ln -s /etc/systemd/system/dms-install.service ./etc/systemd/system/multi-user.target.wants/dms-install.service
```

#### Target BSP におけるエージェント自動インストールメカニズム

##### ストーリー

- 多くの場合、OTAペイロードパッケージ更新を実行すると、ファイルシステムは完全に新しい状態に消去されます。ただし、消去されない唯一の場所は **"/ota"** フォルダです。
- ここで深刻な問題が発生します。ファイルシステムが消去されるため、システムに Allxon DMS Agent が存在しません。OTAペイロードパッケージ更新後にデバイスが Allxon DMS Portal に接続し、ユーザーがリモート管理を行えるようにするにはどうすればよいでしょうか？
- さらに、ユーザーがOTAペイロードパッケージ更新後にデバイスデータを復元したい場合、どのように支援すればよいでしょうか？

##### 解決策 1 - エンタープライズエージェントの自動インストール

- Jetson デバイスが Jetpack 更新後に自動的にエンタープライズ版の Allxon DMS Agent をインストールできるようにするためには、OTAペイロードパッケージ内のシステムディレクトリ **"/etc/init.d/"** にスクリプト **"install_allxon_dms.sh"** を配置し、サービス **"dms-install.service"** も配置する必要があります。
- デバイスがOTAペイロードパッケージ更新後に起動すると、スクリプトがシステムによって実行され、エンタープライズ版の Allxon DMS Agent がインストールされます。

##### 解決策 2 - デバイスデータの復元

- デバイスデータを復元するためには、ユーザーはOTAペイロードパッケージ更新を実行する前に、復元が必要なデータを Jetson デバイスの **"/ota"** ディレクトリに配置する必要があります。
- さらに、ユーザーは **"/ota"** フォルダからデータを復元するスクリプトを実装する必要があり、そのスクリプトファイル名は **"resume_data.sh"** である必要があります。
- **"/ota"** に **"resume_data.sh"** スクリプトが存在する場合、スクリプト **"install_allxon_dms.sh"** が **"resume_data.sh"** を実行して **"/ota"** フォルダからデータを復元するのを支援します。このスクリプトは無限ループを防ぐために実行後に削除されます。

#### OTAペイロードパッケージの生成

Base BSP と Target BSP の準備が整ったら、提供されたスクリプトを使用して OTAペイロードパッケージを生成するだけです。それでは始めましょう！

- **ステップ 1.** Target BSP の L4Tリリースに移動し、[こちら](https://developer.nvidia.com/embedded/linux-tegra-archive)から **Jetson Platform Over-The-Air Update Tools** をクリックしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/3.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 2.** ダウンロードした **Jetson Platform Over-The-Air Update Tools"(例: ota_tools_R32.6.1_aarch64.tbz2)** ファイルを Target BSP の **Linux_for_Tegra** と同じフォルダに配置します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/4.png" alt="pir" width="500" height="auto"/></p>

- **ステップ 3.** **generate_ota_payload.sh** という名前の新しいファイルを作成し、任意の場所に配置します（上記と同じフォルダに配置すると簡単です）

- **ステップ 4.** 以下のコードをファイル内にコピーします

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

- **ステップ 5.** 上記コード内の以下の変数を修正します

  - BASE_BSP_PATH: Base BSP のディレクトリパス
  - TOT_BSP_PATH: Target BSP のディレクトリパス
  - OTA_TOOL: OTA Tool のファイル名
  - JETSON_MODEL: モデル情報（対応するモデルを調べるには[このページ](https://docs.nvidia.com/jetson/l4t/index.html#page/Tegra%20Linux%20Driver%20Package%20Development%20Guide/quick_start.html#wwpID0EAAPNHA)を使用してください）
  - BSP_VERSION: Base BSP のバージョン
  - TARGET_FOLDER: 生成された OTAペイロードパッケージを配置するディレクトリパス

- **ステップ 6.** **generate_ota_payload.sh** に実行権限を付与します

```sh
chmod 777 generate_ota_payload.sh
```

- **ステップ 7.** スクリプトを実行します

```sh
sudo ./generate_ota_payload.sh
```

これでOTAペイロードパッケージが**ota_payload_package.tar.gz**として、以前に定義した**TARGET_FOLDER**内に生成されます。

#### OTAペイロードパッケージのzipファイルをアップロード用に準備する

- **ステップ1.** 以前にダウンロードした**Jetson Platform Over-The-Air Update Tools"(例: ota_tools_R32.6.1_aarch64.tbz2)**をコピーし、以前に作成した**TARGET_FOLDER**内に配置します。

- **ステップ2.** **run_ota_payload.sh**という名前のファイルを**TARGET_FOLDER**内に作成し、以下のコードをコピーします。

```sh
#!/bin/bash
    
OTA_TOOL="<ota_tools_file_name>.tbz2"
OTA_PAYLOAD="ota_payload_package.tar.gz"
    
WORK_DIR="/allxon_ota" # OTAペイロード、ツール、スクリプトは更新前にこのフォルダに配置する必要があります
OTA_SRC_DIR="/ota" # emmcストレージに余裕がある場合、このパスを変更する必要はありません
TARGET_VERSION="<Target_BSP_version--ex:R32.6.1>"
  
DMS_BACKUP_SERVICE="dms-backup.service"
BACKUP_AGENT_CACHE="backup_agent_cache.sh"
   
release_space_rm_ota_files() {
    echo "未使用のファイルとスペースを解放します..."
   
    if [ -f "${OTA_PAYLOAD}" ]; then
        echo " - ${OTA_PAYLOAD}を削除します"
        sudo rm ${OTA_PAYLOAD}
    fi
   
    if [ -f "${OTA_TOOL}" ]; then
        echo " - ${OTA_TOOL}を削除します"
        sudo rm ${OTA_TOOL}
    fi     
}
  
enable_backup_agent_cache() {
    echo "バックアップエージェントのキャッシュサービスを有効にします"
    chmod 777 ${BACKUP_AGENT_CACHE}
    chmod 644 ${DMS_BACKUP_SERVICE}
 
    cp ${BACKUP_AGENT_CACHE} /etc/init.d/
    cp ${DMS_BACKUP_SERVICE} /etc/systemd/system/
  
    systemctl daemon-reload
    systemctl enable ${DMS_BACKUP_SERVICE}
}
   
   
if [ ! -f "/etc/nv_tegra_release" ]; then
    sudo echo "サポートされていません"
    exit 1
fi
    
REVISION=$(cat /etc/nv_tegra_release | cut -d "," -f 2 | cut -d " " -f 3 | sed 1q) > /dev/null
    
if [ "$REVISION" == "" ]; then
    echo "エラー!"
    exit 1
else
    if [ "$REVISION" == "$TARGET_VERSION" ]; then
        echo "JetPack $REVISIONへの更新が成功しました!"
        release_space_rm_ota_files
        exit 0
    else
        echo "現在のJetPackは$REVISIONです。更新が必要です!"
        enable_backup_agent_cache
    fi
fi
    
echo "1. ${OTA_SRC_DIR}ディレクトリを作成します"
    
sudo mkdir -p ${OTA_SRC_DIR}
    
echo "2. ${OTA_PAYLOAD}を${OTA_SRC_DIR}に移動します"
    
sudo mv ${OTA_PAYLOAD} ${OTA_SRC_DIR}
    
echo "3. ${OTA_TOOL}を展開します"
    
tar -jxvf ${OTA_TOOL}
    
echo "4. WORKDIR変数を設定します"
    
export WORKDIR=${WORK_DIR}
    
echo "WORKDIR=${WORKDIR}"
    
echo "5. ${WORKDIR}/Linux_for_Tegra/tools/ota_tools/version_upgradeにディレクトリを変更します"
    
cd ${WORKDIR}/Linux_for_Tegra/tools/ota_tools/version_upgrade
    
echo "6. nv_ota_start.shを実行します"
    
sudo ./nv_ota_start.sh /dev/mmcblk0 ${OTA_SRC_DIR}/ota_payload_package.tar.gz

```

- **ステップ3.** 必要に応じて、上記の"run_ota_payload.sh"スクリプトの変数を要件と条件に基づいて変更します。

  - OTA_TOOL (ファイル名が正しいか確認してください)
  - OTA_PAYLOAD (ファイル名が正しいか確認してください)
  - TARGET_VERSION (ターゲットBSPバージョンに応じて、形式は"Rxx.x.x")

- **ステップ4.** **dms-backup.service**という名前のファイルを**TARGET_FOLDER**内に作成し、以下のコードをコピーします。

```sh
[Unit]
Description=シャットダウン前のプロセス中にAllxon DMSエージェントキャッシュをバックアップ
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

- **ステップ5.** **backup_agent_cache.sh**という名前のファイルを**TARGET_FOLDER**内に作成し、以下のコードをコピーします。

```sh
#!/bin/bash
 
SYNCAGENT_FOLDER="/var/lib/SyncAgent"
TRIAL_TAG="/usr/share/allxon-dms-agent/trial.tag"
TRIAL_AGENT_SN="/var/agentsn"
AGENT_IN_OTA_SRC_DIR="/ota/agent"
 
backup_agent_cache() {
    echo "エージェントのキャッシュをバックアップします"
    sudo mkdir -p "${AGENT_IN_OTA_SRC_DIR}"
 
    if [ -d "${SYNCAGENT_FOLDER}" ]; then
        echo " - ${SYNCAGENT_FOLDER}をコピーします"
        sudo cp -r ${SYNCAGENT_FOLDER} ${AGENT_IN_OTA_SRC_DIR}
    fi
 
    if [ -f "${TRIAL_TAG}" ]; then
        echo " - ${TRIAL_TAG}をコピーします"
        sudo cp ${TRIAL_TAG} ${AGENT_IN_OTA_SRC_DIR}
 
        if [ -f "${TRIAL_AGENT_SN}" ]; then
            echo " - ${TRIAL_AGENT_SN}をコピーします"
            sudo cp ${TRIAL_AGENT_SN} ${AGENT_IN_OTA_SRC_DIR}
        fi
    fi
}
 
backup_agent_cache
```

- **ステップ6.** ターミナルウィンドウから**TARGET_FOLDER**に移動し、以下のコマンドを実行して上記のファイルを含むzipファイルを作成します。

```sh
zip ota_payload.zip *
```

これで**TARGET_FOLDER**は以下のようになり、生成された**ota_payload.zip**ファイルが含まれます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/5.png" alt="pir" width="400" height="auto"/></p>

#### OTAペイロードパッケージのzipファイルをアップロードする

OTAペイロードパッケージに使用されるzipファイルを生成した後、このzipファイルをAllxon DMSポータルまたは独自のストレージにアップロードすることができます。

Allxonに検証とzipファイルのアップロードを依頼したい場合は、このパッケージを[こちらから連絡](https://www.allxon.com/contact)してAllxonに送信するだけです。このセクションをスキップできます。

自分でzipファイルをアップロードしたい場合は、以下の手順に従ってください。

- **ステップ1.** [Allxon DMSポータル](https://dms.allxon.com/)にアクセスしてサインインします。

**注意:** [このWiki](https://wiki.seeedstudio.com/ja/Allxon-Jetson-Getting-Started)に従って、JetsonデバイスにAllxon DMSエージェントをインストールし、Allxon DMSポータルとペアリングしてください。

- **ステップ2.** **Applications**ページに移動し、**Register**をクリックして新しいアプリケーションを登録します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/6.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ3.** 以下の情報を入力し、**Next**をクリックします。

  - Application Name: brand_model_BaseBSP_to_TargetBSP
  - App GUID: brand_model_BaseBSP_to_TargetBSP
  - Platform: Linux

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/8.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 4.** 説明を追加し、**Register** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/9.png" alt="pir" width="400" height="auto"/></p>

これで作成したアプリケーションが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/10.1.png" alt="pir" width="650" height="auto"/></p>

- **ステップ 5.** アプリケーションをクリックし、**Versions** セクションの **+** 記号をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/11.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 6.** バージョン番号を追加し、以下の2つのシナリオに基づいてインストールコマンドを記入してニーズに合わせます。

1. ZIPファイルをAllxon DMSポータルにアップロードする場合、以下のインストールコマンドを使用してください。

```sh
mkdir -p /allxon_ota
unzip -o /var/lib/SyncAgent/download/"Application registered name" -d /allxon_ota/
chmod 777 /allxon_ota/run_ota_payload.sh
rm -rf /var/lib/SyncAgent/download/*
cd /allxon_ota/ && /allxon_ota/run_ota_payload.sh
shutdown -r +5 "JetPackのアップグレードのためにシステムが5分後に再起動します。"
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/12.png" alt="pir" width="400" height="auto"/></p>

**注意:** "Application registered name" は、以前作成したアプリケーション名に置き換えてください。例: **"jetson-xavier-nx-devkit-emmc_4.4_to_4.6"**

2. ZIPファイルを独自のストレージまたはサイトにアップロードする場合、以下のインストールコマンドを使用してください。

```sh
mkdir -p /allxon_ota
wget -qO /allxon_ota/ota_payload.zip "ota_payload_package_download_url"
unzip -o /allxon_ota/ota_payload.zip -d /allxon_ota/
chmod 777 /allxon_ota/run_ota_payload.sh
rm /allxon_ota/ota_payload.zip
cd /allxon_ota/ && /allxon_ota/run_ota_payload.sh
shutdown -r +5 "JetPackのアップグレードのためにシステムが5分後に再起動します。"
```

- **ステップ 7.** 以前生成した **ota_payload.zip** ファイルを選択してアップロードし、アップロードが完了したら **Create** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/13.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 8.** **Version Description** を入力し、**Save** をクリックしてアプリケーションを保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/14.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 9.** **Versions** セクションの **+** 記号をクリックし、**Release** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/15.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 10.** 最後に **Release** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/16.png" alt="pir" width="400" height="auto"/></p>

これで、OTAペイロードパッケージをAllxon DMSポータルに正常にアップロードしてリリースしました。次のステップでは、このアップデートを Jetson デバイスに配布します。

### Allxon DMSポータルを使用したOTAペイロードパッケージの更新実行

以下の点に注意してください：

- OTAペイロードパッケージの更新を実行する前に、Jetson デバイスがプロセス全体を通じてイーサネットケーブルで接続されていることを確認してください。そうでない場合、更新は失敗します。
- アップグレードプロセスが失敗した場合、**/ota_log** に移動してアップグレードプロセスのログを確認できます。
- アップグレードプロセスが成功した場合、フォルダ **/ota** 内のファイルは保持されます。
- eMMCまたは内部ストレージに、少なくとも **"OTAペイロードパッケージ * 2.5"** の空き容量があることを確認してください。

それでは、Allxon DMSポータルを使用してOTAペイロードパッケージの更新を実行しましょう。

- **ステップ 1.** **Allxon DMSポータル** の **Applications** ページに移動し、**Register** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/6.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 2.** **Existing** をクリックし、OTAペイロードパッケージを選択して **Register** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/25.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 3.** 新しく追加されたアプリケーションをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/26.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 4.** **Versions** セクションの **+** 記号をクリックし、**Distribute** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/27.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 5.** 配布したいグループを選択し、**Distribute** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/18.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 6.** **Distribution Time** を設定し、**Schedule** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/19.png" alt="pir" width="400" height="auto"/></p>

これで、選択したグループ内の Jetson デバイスがこのOTAペイロードパッケージを受信し、アップグレードプロセスを開始します。

Jetson デバイスがHDMIディスプレイに接続されている場合、インストールが完了すると以下の画面が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/23.jpg" alt="pir" width="1000" height="auto"/></p>

また、SSH経由で Jetson デバイスに接続している場合、インストールが完了すると **"JetPackのアップグレードのためにシステムが5分後に再起動します。"** というメッセージが表示されます。

これで、アップグレードプロセスを開始するために5分後に再起動します。この時間は、ユーザーが保存されていない作業を保存するための余裕を与えるためのものです。ただし、上記のメッセージが表示された後、すぐに Jetson デバイスを再起動することもできます。

- **ステップ 4.** Jetson デバイスが再起動すると、黒い画面が表示されます。数分待つと、デバイスが再び自動的に再起動します。その後、新しいOSの初期設定画面が表示されます。このセットアップを完了してデバイスに再度アクセスしてください。

**注意:** 上記の設定を完了するために、Jetson デバイスをHDMIディスプレイとキーボードに接続することを推奨します。

- **ステップ 5.** セットアップが完了し、デバイスがデスクトップに起動した後、以下のコマンドを実行してJetPackバージョンが更新されているか確認してください。

```sh
cat /etc/nv_tegra_release
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/24.png" alt="pir" width="1000" height="auto"/></p>

この例では、L4Tが32.6.1に更新されていることが確認できます。

## Jetson デバイスからAllxon DMSをアンインストールする

デバイスからAllxon DMS Agentをアンインストールしたい場合は、まず以下のコマンドを使用して自動インストールのAllxon DMS Agentメカニズム（サービス）を無効化してください。

```sh
sudo systemctl disable dms-install.service
```

その後、以下のコマンドを使用してAllxon DMS Agentをアンインストールできます。

```sh
sudo wget -qO - "https://get.allxon.net/linux/uninstall" | sudo bash -s
```