---
description: Nvidia Jetson上でのリアルタイム字幕レコーダー
title: リアルタイム字幕レコーダー
keywords:
  - Edge
  - reComputer
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Real Time Subtitle Recoder on Nvidia Jetson
last_update:
  date: 02/23/2024
  author: Jiahao

no_comments: false # for Disqus

---

# Nvidia Jetson上での音声字幕生成

## はじめに

現在、私たちは毎日多くの会議を行っていますが、会議の内容の一部は公開を意図していません。会議内容をクラウドに送信して録音し、字幕を返すことは、会議のプライバシーに重大な脅威をもたらす可能性があります。そして最も重要なことは、インターネットが遅延した場合、会議内容を失う可能性があることです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recoder.gif" /></div>

ここで、[Jetson上での音声字幕生成](https://github.com/yuyoujiang/Real-time-Subtitle-Recorder-on-Jetson)をご紹介します。これは、インターネット上での情報漏洩を回避しながら、リアルタイムの音声から字幕へのサービスを提供できます。会議内容は、AIモデルを使用して字幕形式で転写され、画面に表示されることで、会議のプライバシーを保護し、会議記録者の作業負荷を軽減できます。

## ハードウェアセットアップ

- [reComputer](https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products) （またはJetsonベースの他のデバイス）

<p style={{textAlign: 'center'}}>
 <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputer_industrial_j3011_orin_nano_8gb.jpg" alt="left" width={800} height="auto" />
 </p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

- [reSpeaker](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html?queryID=2baffb980bdb6d5e65b2b3f511657cb2&objectID=139&indexName=bazaar_retailer_products) （またはその他のUSBインターフェースマイク）

<p style={{textAlign: 'center'}}>
 <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/ReSpeaker_Mic_Array_v2.0.png"
alt="auto" width={800} height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

- ハードウェア接続

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson/raw/main/sources/recorder_hardware_connection.png" alt="pir" width={800} height="auto"/></p>

## ランタイム環境の準備

#### ステップ1. Riva ASRサーバーのインストール：

Riva ASRサーバーのインストールについては、[このwiki](https://wiki.seeedstudio.com/ja/Local_Voice_Chatbot/#install-riva-server)を参照してください。

ターミナル（Ctrl+Alt+T）で```sudo docker ps```と入力すると、以下のような表示が見えるはずです。これは最初のステップが完了したことを意味します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/riva.png" alt="pir" width={1000} height="auto"/></p>

#### ステップ2. flaskのインストール：

ターミナル（`Ctrl+Alt+T`）を開き、以下のコマンドを使用してflaskをインストールします：

```shell
pip3 install flask
python3 -c 'import flask; print(flask.__version__)
```

以下のようなものが表示されれば、このステップは完了です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/flask.png" alt="pir" width={1000} height="auto"/></p>

#### ステップ3. pip setuptools wheelをアップグレード：

```shell
# riva client
git clone --depth=1 --recursive https://github.com/nvidia-riva/python-clients
cd python-clients
sudo pip3 install --upgrade pip setuptools wheel
pip3 install --no-cache-dir --verbose -r requirements.txt
python3 setup.py --verbose bdist_wheel
pip3 install --no-cache-dir --verbose dist/nvidia_riva_client*.whl
python3 -c 'import riva.client; print(riva.client.__version__)'
```

ターミナル（Ctrl+Alt+T）で ```pip --version``` を入力すると、以下のような表示が出ます。これはpipのアップグレードが完了したことを意味します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/pip.png" alt="pir" width={1000} height="auto"/></p>

ターミナル（Ctrl+Alt+T）で ```python3 -c 'import setuptools; print(setuptools.__version__)``` を入力し、以下のような表示が出れば、setuptoolsのアップグレードが完了したことを意味します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/setuptools.png" alt="pir" width={1000} height="auto"/></p>

ターミナル（Ctrl+Alt+T）で ```wheel version``` を入力すると、以下のような表示が出ます。これはwheelのアップグレードが完了したことを意味します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/wheel.png" alt="pir" width={1000} height="auto"/></p>

#### ステップ4. pyaudioをインストール：

```shell
# pyaudio
sudo apt-get install -y --no-install-recommends python3-pyaudio
python3 -c 'import pyaudio; print(pyaudio.__version__)'
```

ターミナルで以下のような表示が出れば、最後のステップが完了です。おめでとうございます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/pyaudio.png" alt="pir" width={1000} height="auto"/></p>

## 実行してみましょう

```shell
git clone https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson.git
cd Real-time-Subtitle-Recorder-on-Jetson
python3 recorder.py
```

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/XypO6BlXkCY?si=CczjuOXxak1xAelO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## プロジェクト概要

このプロジェクトでは、[Riva ASR Server](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/riva/resources/riva_quickstart)を使用してマイク入力からリアルタイムでデータを取得し、ウェブページに表示します。将来的には、ある言語を別の言語に翻訳する機能や、より高速な応答速度などの追加アプリケーションを実装予定です。
