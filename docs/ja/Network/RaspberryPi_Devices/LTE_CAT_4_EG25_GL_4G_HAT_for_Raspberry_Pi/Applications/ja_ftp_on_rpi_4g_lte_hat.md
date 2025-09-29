---
description: IoTプロジェクトをFTPと4Gで強化しましょう。Raspberry Pi 4G HATを使用して、ファイルを安全に転送し、タスクを自動化し、リモートデバイスを監視する方法を学びます。

title: 接続と転送 - Raspberry Pi 4G LTE HATでのFTP
keywords:
  - Raspberry Pi Hat
  - 初めてのセットアップ
  - IIoT
  - FTP
  - 4G LTE
  - エッジコンピューティング
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /ja/ftp_with_raspberry_pi_4g_lte_hat
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---


## はじめに

FTPはRaspberry Pi 4G LTE HATアプリケーションにおいて非常に便利で、組み込みシステムとリモートサーバー間の信頼性の高いファイル転送を可能にします。これは、IoTやM2M通信環境での**ログ、設定、データファイルの管理**を簡素化します。FTPはその互換性と簡単なコマンドにより、接続されたプロジェクトに効率的な統合を提供します。

## 必要条件

### ハードウェア要件

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### ソフトウェア要件

関連するドライバや通信ツールをまだインストールしていない場合は、まず[ガイド](https://wiki.seeedstudio.com/ja/getting_started_raspberry_pi_4g_lte_hat/#software-preparation)を確認してください。

### 追加要件

以下の詳細を持つ事前設定済みのFTPサーバーが必要です：

- **ホスト**: 例: https://ftp.drivehq.com または FileZilla Server。
- **ポート**: 21。
- **ユーザー名とパスワード**: 認証に必要な資格情報。

## ATコマンドリファレンス

### ネットワークコンテキストの設定

FTP操作を開始する前に、ネットワーク接続のためにPDPコンテキストを設定します。

| **コマンド**                        | **説明**                                                           |
|------------------------------------|-------------------------------------------------------------------|
| `AT+QICSGP=1,1,"apn_name","","",1` | FTP接続用のPDPコンテキストを設定します。`apn_name`をオペレーターのAPNに置き換えてください。 |
| `AT+QIACT=1`                       | PDPコンテキストをアクティブ化します。                              |
| `AT+QIACT?`                        | PDPコンテキストのアクティブ化を確認します。                        |

---

### FTP設定
FTPセッションを必要なパラメータで設定します。

| **コマンド**                                  | **説明**                                        |
|----------------------------------------------|------------------------------------------------|
| `AT+QFTPCFG="contextid",1`                   | FTP接続をPDPコンテキスト1にリンクします。       |
| `AT+QFTPCFG="account","username","password"` | FTPアカウントの資格情報を設定します。`username`と`password`をFTPの詳細に置き換えてください。 |
| `AT+QFTPCFG="filetype",1`                    | ファイルタイプを設定します（1はバイナリ、0はASCII）。 |
| `AT+QFTPCFG="transmode",1`                   | 転送モードを設定します（1はパッシブ、0はアクティブ）。 |
| `AT+QFTPCFG="rsptimeout",90`                 | FTP応答タイムアウトを設定します（90秒）。       |

### FTPセッションの開始
FTPサーバーに接続し、ディレクトリを操作します。

| **コマンド**                           | **説明**                                   |
|---------------------------------------|-------------------------------------------|
| `AT+QFTPOPEN="ftp.drivehq.com",21`    | FTPサーバーに接続します。`ftp.drivehq.com`をサーバーアドレスに置き換えてください。 |
| `AT+QFTPCWD="/"`                      | ルートディレクトリに移動します。            |
| `AT+QFTPLIST="."`                     | 現在のパス内のファイルとディレクトリを一覧表示します。 |

---

### ファイル操作
ファイルの送受信には、USB COMポート、RAM、またはUFSを使用する方法があります。

| **コマンド**                          | **説明**                                      |
|--------------------------------------|----------------------------------------------|
| `AT+QFTPPUT="file_name","COM:",0`    | ファイルをアップロードします。`file_name`をサーバー上の希望するファイル名に置き換えてください。 |
| `AT+QFTPGET="file_name","COM:"`      | ファイルをダウンロードします。`file_name`をサーバーから取得するファイル名に置き換えてください。 |
| `AT+QFTPLEN`                         | 最後にアップロードしたファイルの長さを確認します。 |
| `AT+QFTPSIZE="file_name"`            | 特定のファイルのサイズを取得します。`file_name`を対象ファイルの名前に置き換えてください。 |

### FTPセッションの終了
FTPセッションを終了し、PDPコンテキストを非アクティブ化します。

| **コマンド**         | **説明**                               |
|---------------------|---------------------------------------|
| `AT+QFTPCLOSE`      | FTPセッションを終了します。            |
| `AT+QIDEACT=1`      | PDPコンテキストを非アクティブ化します。 |

---

## 例: ワークフロー

Windowsを使用している場合は、**WinCOM**ツールを開いてください。Raspberry Piを使用している場合は、以下のコマンドを実行して**Minicom**を起動してください：

```bash
sudo minicom -D /dev/ttyUSB2
```
### 手順

1. **ネットワークコンテキストの設定**:
   
```bash
    AT+QICSGP=1,1,"dialogbb","","",1
    AT+QIACT=1
    AT+QIACT?
 ```
2. **FTPの設定**:
   
```bash
    AT+QFTPCFG="contextid",1
    AT+QFTPCFG="account","your_username","your_password"
    AT+QFTPCFG="filetype",1
    AT+QFTPCFG="transmode",1
    AT+QFTPCFG="rsptimeout",90
```
3. **FTPサーバーへの接続**:
   
```bash
    AT+QFTPOPEN="ftp.drivehq.com",21
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ftp1.PNG" 
    style={{ width: 500}} 
  />
</div>

4. **ディレクトリの操作**:

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

5. **ファイルのアップロード**:
   
```bash
    AT+QFTPPUT="test_my2.txt","COM:",0
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/upload_ftp.PNG" 
    style={{ width: 600}} 
  />
</div>

6. **ファイルのダウンロード**:

```bash
    AT+QFTPGET="test_my2.txt","COM:"
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/download_ftp.PNG" 
    style={{ width: 500}} 
  />
</div>

7. **FTPセッションの終了**:

```bash
    AT+QFTPCLOSE
    AT+QIDEACT=1
```

---

## リソース

このモジュールに関するQuectel TCPガイドを確認することを強くお勧めします。このガイドでは高度なトピックがカバーされており、IoTプロジェクトを特定の要件に合わせて調整するのに役立ちます。

- **[ウェブページ]** [FTPアプリケーションガイド](https://www.quectel.com/download/quectel_ec2xeg2xeg9xem05_series_ftps_application_note_v1-3/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なるニーズや好みに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>