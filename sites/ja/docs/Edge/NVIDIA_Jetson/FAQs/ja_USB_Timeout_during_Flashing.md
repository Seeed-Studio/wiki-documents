---
description: 一般的な Jetson のフラッシュエラーと、そのトラブルシューティング方法。
title: 一般的なフラッシュエラーとその解決方法
keywords:
  - reComputer
  - Jetson
  - flashing
  - USB
  - NFS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /usb_timeout_during_flash
last_update:
  date: 3/18/2026
  author: Lorraine
createdAt: '2025-01-22'
updatedAt: '2026-03-18'
url: https://wiki.seeedstudio.com/ja/usb_timeout_during_flash/
---

このページでは、Jetson のフラッシュ時によく発生する失敗例をまとめています。特に、USB の再接続、NFS マウント、ホスト環境の問題、フラッシュツールの不足、初回起動時の OEM セットアップに関連するエラーを扱います。

## 作業を始める前に

特定のエラーをトラブルシューティングする前に、次の点を確認してください。

1. 可能な限り専用の物理 Ubuntu ホストを使用してください。フラッシュには仮想マシン、Docker コンテナ、WSL の使用は避けてください。
2. 安定したデータ転送をサポートする、短くて高品質な USB ケーブルを使用してください。
3. ケーブルはホスト PC に直接接続してください。USB ハブの使用は避けてください。
4. 必要に応じて Jetson を再度リカバリモードにし、電源を再接続してください。
5. ホスト OS が JetPack バージョンに対応していることを確認してください。
   - JetPack 5.x: Ubuntu 18.04 または 20.04 を推奨します。
   - JetPack 6.x: Ubuntu 20.04 または 22.04 を推奨します。

## エラー: フラッシュ中の USB タイムアウト

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/timeout_issue.png"/>
</div>

典型的な症状として、次のようなメッセージが表示されます。

```text
ERROR: might be timeout in usb write
```

または、フラッシュ処理の途中でデバイスが切断されます。

### 発生理由

フラッシュ中、Jetson は再起動して USB 上で再列挙されることがあります。物理 Ubuntu ホストでは通常、自動的に再接続されますが、VM や WSL 環境ではデバイスを手動で再アタッチする必要があり、その過程でタイムアウトが発生することがあります。

### 確認事項

1. ホストが物理 Ubuntu PC なのか、VM なのか、WSL なのかを確認します。
2. VM を使用している場合は、フラッシュ中に Jetson が再起動した後、Jetson の USB デバイスを手動で再接続します。
3. WSL を使用している場合は、再接続後にデバイスを再アタッチします。セットアップの詳細は [Flash JetPack with WSL2](/ja/ai_robotics_flash_jetpack_with_wsl2/) を参照してください。
4. DC 電源アダプタが Jetson デバイスに十分な電力を供給できることを確認します。
5. 別の高品質な USB Type-C ケーブルに交換します。ケーブルは少なくとも USB 2.0 のデータ通信をサポートし、理想的には 1.5m 未満である必要があります。
6. ホスト側の別の USB-A ポートを試します。
7. フラッシュ中の接続安定性が低下する可能性があるため、USB ハブの使用は避けてください。
8. 対象の Jetson 製品と JetPack バージョンに対して正しいフラッシュパッケージを選択していることを確認します。
9. 再度リカバリモードに入り、電源を再接続してからやり直してください。
10. 上記の項目を確認した後、フラッシュスクリプトを再起動して再試行します。

### 推奨

フラッシュには、専用の物理 Ubuntu ホストを使用することを強く推奨します。

## エラー: フラッシュ中の NFS マウント失敗

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/nfs_error.png"/>
</div>

典型的なログには次のようなものが含まれます。

```text
Formatting APP partition /dev/nvme0n1p1 ...
tar --checkpoint-action="ttyout=Hit %s checkpoint #%u%*\r" -x -I 'zstd -T0' -pf /mnt/external/system.img --warning=no-timestamp --numeric-owner --xattrs --xattrs-include=* -C /tmp/ci-EUsLOiqBxk
Flash failure
Either the device cannot mount the NFS server on the host or a flash command has failed.
Check your network setting (VPN, firewall,...) to make sure the device can mount NFS server.
```

参考:
[Flash fails Orin AGX at 99% - NVIDIA Developer Forums](https://forums.developer.nvidia.com/t/either-the-device-cannot-mount-the-nfs-server-on-the-host-or-a-flash-command-has-failed-while-using-sdk-manager/312719/3)

### 発生理由

initrd フラッシュを使用する場合、Jetson は USB0 ネットワークインターフェース経由でホスト PC がエクスポートする NFS 共有をマウントします。ホスト側の NFS サービスが利用できない、ファイアウォールルールでブロックされている、またはホスト環境が不安定な場合、フラッシュは終盤で失敗することがあります。

### チェックリスト

1. Ubuntu ホスト上で NFS サーバが動作していることを確認します。

```bash
systemctl status nfs-kernel-server
```

2. 一時的に Ubuntu のファイアウォールを無効化し、再度テストします。

```bash
sudo ufw status
sudo ufw disable
```

3. VM、Docker、WSL 環境の使用は避けてください。
4. 使用前に NVMe SSD を `ext4` でフォーマットしてください。
5. ホストに必要な依存パッケージをインストールします。

```bash
sudo apt install qemu-user-static sshpass abootimg nfs-kernel-server libxml2-utils binutils -y
```

6. ホスト PC に十分な空きディスク容量があることを確認します。ホスト側のストレージ不足が原因で NFS マウントが失敗することもあります。
7. 問題が解決しない場合は、検証済み SSD モデルでテストしてください。Seeed SSD 参考製品:
[NVMe M.2 2280 SSD 256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)

## エラー: `The connected jetson device is not ready for flash: Stat for blob_boot0.imgimg failed`

重要な行は次の部分です。

```text
Stat for blob_boot0.imgimg failed Error: Return value 19
```

### 発生理由

実際には、これはブート blob を生成するために使用したホスト環境が、フラッシュ用ツールチェーンと互換性がないことを意味する場合がほとんどです。Ubuntu 24.04 ホストでこの問題が発生している事例があります。

### 推奨される対処

フラッシュ用ホストとして Ubuntu 24.04 の代わりに Ubuntu 20.04 または Ubuntu 22.04 を使用してください。

## エラー: `could not find tegrarcm_v2`

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/tegrarcm_v2_failed.jpg"/>
</div>

典型的なログ:

```text
Error: could not find tegrarcm_v2
```

### 発生理由

このフラッシュパッケージと MFI フラッシュツールは x86 ホスト向けです。別の Jetson デバイスや、サポートされていないホストアーキテクチャからフラッシュしようとした場合に、このエラーがよく発生します。

### 推奨される対処

フラッシュには x86 Ubuntu ホスト PC を使用してください。

## エラー: 初回起動後に OEM 設定画面から進まない

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/oem_failed.png"/>
</div>

典型的なメッセージ:

```text
(1 of 2) A start job is running for End-user configuration after initial OEM installation (Debconf UI)
```

### 発生理由

これは通常、OEM セットアップサービスがユーザー操作を待機しているにもかかわらず、有効な表示経路が存在しないことを意味します。初回起動時に HDMI ディスプレイが接続されておらず、その後に接続した場合によく発生します。

### 対処方法

1. Jetson の電源を切ります。
2. 不要な周辺機器を取り外します。
3. HDMI モニタと電源のみを接続した状態にします。
4. デバイスを再起動します。
5. 必要に応じて、数回再起動を繰り返してください。

## 補足

- フラッシュ中にデバイスが再起動することは想定される動作です。重要なのは、ホストが Jetson を正しく再検出し、再接続できているかどうかです。
- NVMe にフラッシュする場合は、対象ドライブが健全で、すでに適切にフォーマットされていることを確認してください。
- SDK Manager を使用している場合は、失敗したコンポーネントを特定するために、ターミナルの詳細ログも確認してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
