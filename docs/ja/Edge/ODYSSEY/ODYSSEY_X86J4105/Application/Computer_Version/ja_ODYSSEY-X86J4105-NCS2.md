---
description: ODYSSEY - X86J41x5
title: Intel Neural Compute Stick 2
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY-X86J4105-NCS2
last_update:
  date: 05/15/2025
  author: w0x7ce

---


# ODYSSEY - X86J41x5でIntel® Neural Compute Stick 2を使い始める

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-bird.png)

**Intel Neural Compute Stick 2 (NCS2)**は、USBスティック型のデバイスで、大型で高価なハードウェアを必要とせずにニューラルネットワーク機能を利用することができます。これには**Intel Movidius Myriad X Vision Processing Unit (VPU)**が搭載されており、IoTやエッジデバイスにコンピュータビジョンや人工知能（AI）を組み込むことが可能です。

## ソフトウェア環境のセットアップ

Intel NCS2を使用するには、まず[ODYSSEY - X86J41x5用Intel® Distribution of OpenVINO™ toolkitのインストール](/ja/ODYSSEY-X86J4105-NCS2)を完了し、すべての依存ソフトウェア環境を構成してください。
<!-- 上述リンク有誤 -->

チュートリアルをすでに完了している場合は、以下の手順に従ってください。

## Intel® Neural Compute Stick 2の設定

1. 現在のLinuxユーザーをusersグループに追加します：

```sh
sudo usermod -a -G users "$(whoami)"
```

ログアウトして再ログインすると、変更が反映されます。

2. **Intel® Neural Compute Stick 2**で推論を行うために、以下のようにUSBルールをインストールします：

```sh
sudo cp /opt/intel/openvino/inference_engine/external/97-myriad-usbboot.rules /etc/udev/rules.d/
```

```sh
sudo udevadm control --reload-rules
```

```sh
sudo udevadm trigger
```

```sh
sudo ldconfig
```

**注意:** これを反映させるためにデバイスを再起動してください。

## NCS2のVPUを使用してサンプルを実行する

1. 推論エンジンのデモディレクトリに移動します：

```sh
cd /opt/intel/openvino/deployment_tools/demo
```

2. **NCS2を使用した画像分類検証スクリプトを実行します：**

```sh
./demo_squeezenet_download_convert_run.sh –d MYRIAD
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-demo-1.png)

3. **NCS2を使用した推論パイプライン検証スクリプトを実行します：**

```sh
./demo_security_barrier_camera.sh –d MYRIAD
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-demo-2.png)

以下のような結果が表示されれば、インストールが成功したことを示します！

## 次のステップ：[Ncappzoo](http://www.github.com/movidius/ncappzoo)

[Ncappzoo](http://www.github.com/movidius/ncappzoo)は、[http://www.github.com/movidius/ncappzoo](http://www.github.com/movidius/ncappzoo)で公開されているオープンソースのGitHubリポジトリで、シンプルなレイアウトと使いやすいMakefileを備えた多数の例を含んでいます。このリポジトリはIntel® NCS 2開発者コミュニティ向けに特化されており、事前学習済みのニューラルネットワークを使用するアプリケーションコードに集中することで、開発者が迅速に開始できるよう支援します。

1. 以下のコマンドでGitHubリポジトリをローカルファイルにクローンします：

```sh
git clone https://github.com/movidius/ncappzoo.git
```

2. 特定のサンプルに必要なシステムソフトウェア依存関係を確認するには、**app/network**フォルダ内で以下のコマンドを実行します：

```sh
make install_reqs
```

3. サンプルを実行します：

```sh
make run
```

## 実行例

実行可能な例は多数ありますが、ここでは`benchmark`デモを例として使用します：

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-benchmark-1.png)

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-benchmark-2.png)

### `birds`例の実行

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-bird.png)

## リソース

- [Intel® Distribution of OpenVINO™ toolkit](https://docs.openvinotoolkit.org/)

- [Ncappzoo](http://www.github.com/movidius/ncappzoo)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>