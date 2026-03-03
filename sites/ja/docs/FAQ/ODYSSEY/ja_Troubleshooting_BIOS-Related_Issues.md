---
description: ODYSSEY-FAQ
title: BIOS関連の問題のトラブルシューティング（WiFi/Bluetooth/ファン/自動電源オン/Boot Guard/GPIO）
#keywords:
slug: /ja/Troubleshooting_BIOS-Related_Issues
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
last_update:
  date: 6/26/2023
  author: Seraphina
---

# BIOS関連の問題のトラブルシューティング

Odysseyの一部の問題は、BIOS設定を構成することで解決できます。以下は、BIOS設定を使用して対処できる問題です。まず、BIOS設定にアクセスする方法について説明します。

### BIOS設定にアクセスする方法

電源ボタンを押し、BIOS設定画面が表示されるまで`DEL`キーを押し続けます。

### Wi-FiとBluetoothに接続できない問題の解決方法

BIOS設定を確認し、BIOSからWi-FiとBluetoothを有効にします。

### 内蔵ファンは制御可能ですか

現在、ファンはBIOSによって制御されており、ユーザーによって制御されません。ファン速度はCPU温度に応じて設定されます。詳細については、BIOS設定画面の`Chipset` -> `FAN Contorl`を確認してください。

### 電源が接続されたときにODYSSEY - X86J41x5を自動電源オンに設定する方法

これもBIOSで設定する必要があります。`DEL`キーを押してBIOS設定に入ります。`Chipset` -> `Restore on AC Power Loss`に移動し、設定を`Last State`に変更します。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Auto-power.png" alt="pir" width={600} height="auto" /></p>

### ODYSSEYボードにはセキュアブート用のBoot Guardがありますか

はい、BIOSで`Security Boot`オプションを有効にできます。これが有効になると、BIOSは認証されていないデバイスからの起動を無効にします。

### Odysseyがシャットダウンした後もGPIOが動作し続けるのはなぜですか

これを設定するには、私たちが提供する最新のBIOSに更新する必要があります。最新のBIOSでは、ここでenableをdisableに変更することで、GPIOとODYSSEYの両方をオフにできます。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105/OdysseyFAQ1.png" alt="pir" width={600} height="auto" /></p>