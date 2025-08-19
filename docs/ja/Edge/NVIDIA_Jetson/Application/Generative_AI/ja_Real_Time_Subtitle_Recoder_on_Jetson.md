---
description: Nvidia Jetsonでのリアルタイム字幕レコーダー
title: リアルタイム字幕レコーダー
keywords:
  - Edge
  - reComputer
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Real Time Subtitle Recoder on Nvidia Jetson
last_update:
  date: 05/15/2025
  author: Jiahao

no_comments: false # for Disqus

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Nvidia Jetsonでの音声字幕生成

## はじめに

現在、私たちは毎日多くの会議を行っていますが、その中には公開を意図しない会議内容も含まれています。会議内容をクラウドに送信して記録し、字幕を返すことは、会議のプライバシーに重大な脅威をもたらす可能性があります。また、最も重要なことは、インターネットが遅延すると会議内容を失う可能性があるという点です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recoder.gif" /></div>

ここでは、[Jetsonでの音声字幕生成](https://github.com/yuyoujiang/Real-time-Subtitle-Recorder-on-Jetson)を紹介します。このソリューションは、インターネット上での情報漏洩を回避しながら、リアルタイムの音声から字幕への変換サービスを提供します。AIモデルを使用して会議内容を字幕形式で画面に表示することで、会議のプライバシーを保護し、会議記録の作業負担を軽減します。

## ハードウェアセットアップ

- [reComputer](https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products)（または他のJetsonベースのデバイス）

<p style={{textAlign: 'center'}}> 
 <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputer_industrial_j3011_orin_nano_8gb.jpg" alt="left" width={800} height="auto" />
 </p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products"  target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

- [reSpeaker](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html?queryID=2baffb980bdb6d5e65b2b3f511657cb2&objectID=139&indexName=bazaar_retailer_products)（または他のUSBインターフェースマイク）

<p style={{textAlign: 'center'}}> 
 <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/ReSpeaker_Mic_Array_v2.0.png" 
alt="auto" width={800} height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html?queryID=2baffb980bdb6d5e65b2b3f511657cb2&objectID=139&indexName=bazaar_retailer_products"  target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

- ハードウェア接続
<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson/raw/main/sources/recorder_hardware_connection.png" alt="pir" width={800} height="auto"/></p>

## 実行環境の準備

#### ステップ1. Riva ASRサーバーをインストールする：

Riva ASRサーバーのインストールについては、[このWiki](https://wiki.seeedstudio.com/ja/Local_Voice_Chatbot/#install-riva-server)を参照してください。

ターミナル（Ctrl+Alt+T）で```sudo docker ps```を入力すると、以下のような表示がされます。これで最初のステップが完了したことを意味します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/riva.png" alt="pir" width={1000} height="auto"/></p>

#### ステップ2. Flaskをインストールする：

ターミナル（`Ctrl+Alt+T`）を開き、以下のコマンドを使用してFlaskをインストールします：

```shell
pip3 install flask
python3 -c 'import flask; print(flask.__version__)'
```
以下のような表示がされれば、このステップが完了したことを意味します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/flask.png" alt="pir" width={1000} height="auto"/></p>

#### ステップ3. pip、setuptools、wheelをアップグレードする：

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
ターミナル（Ctrl+Alt+T）で```pip --version```を入力すると、以下のような表示がされます。これでpipのアップグレードが完了したことを意味します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/pip.png" alt="pir" width={1000} height="auto"/></p>

ターミナル（Ctrl+Alt+T）で```python3 -c 'import setuptools; print(setuptools.__version__)```を入力すると、以下のような表示がされます。これでsetuptoolsのアップグレードが完了したことを意味します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/setuptools.png" alt="pir" width={1000} height="auto"/></p>

ターミナル（Ctrl+Alt+T）で```wheel version```を入力すると、以下のような表示がされます。これでwheelのアップグレードが完了したことを意味します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/wheel.png" alt="pir" width={1000} height="auto"/></p>

#### ステップ4. pyaudioをインストールする：

```shell
# pyaudio
sudo apt-get install -y --no-install-recommends python3-pyaudio
python3 -c 'import pyaudio; print(pyaudio.__version__)'
```
ターミナルに以下のような表示がされれば、最後のステップが完了したことを意味します。おめでとうございます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/pyaudio.png" alt="pir" width={1000} height="auto"/></p>

## 実行してみましょう

```shell
git clone https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson.git
cd Real-time-Subtitle-Recorder-on-Jetson
python3 recorder.py
```
<iframe width="560" height="315" src="https://www.youtube.com/embed/XypO6BlXkCY?si=CczjuOXxak1xAelO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## プロジェクトの概要

このプロジェクトでは、[Riva ASR Server](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/riva/resources/riva_quickstart)を使用して、マイク入力からリアルタイムでデータを取得し、それをウェブページに表示します。将来的には、言語を別の言語に翻訳する機能や、より高速な応答速度など、さらに多くのアプリケーションを追加する予定です。