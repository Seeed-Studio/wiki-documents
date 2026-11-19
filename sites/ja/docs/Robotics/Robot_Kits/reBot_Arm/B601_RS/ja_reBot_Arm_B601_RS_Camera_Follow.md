---
title: reBot-RS 手首カメラによる手のひら追従
description: 手首に取り付けた深度カメラで手を追跡し、つまみ動作で reBot Arm B601-RS のグリッパーを制御します。
slug: /rebot_arm_b601_rs_camera_follow
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp
keywords:
  - reBot Arm
  - B601-RS
  - 手の追跡
  - 深度カメラ
  - ビジュアルサーボ
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot-RS 手首カメラによる手のひら追従

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="reBot Arm B601-RS robotic arm" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>今すぐ入手</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10-blue.svg" alt="Reference environment: Python 3.10" />
  <img src="https://img.shields.io/badge/Platform-Linux-orange.svg" alt="Platform: Linux" />
  <img src="https://img.shields.io/badge/Camera-RGB--D-green.svg" alt="Camera: RGB-D depth camera" />
  <img src="https://img.shields.io/badge/Tracking-MediaPipe-yellow.svg" alt="Hand detection: MediaPipe" />
</p>

<p align="center">
  <strong>手首での深度センシング · 手のひら追従 · つまみ操作でグリップ · ローカル Web プレビュー</strong>
</p>

このチュートリアルでは、[reBot RS Camera Follow](https://github.com/Yang-Ci/reBot_RS_Camera-Follow) の実行方法を説明します。手首に取り付けた深度カメラがカラー画像と深度画像を取得し、プログラムが手のひらを検出してアームの追従コマンドを計算します。親指と人差し指でつまむ動作によってグリッパーを制御でき、ローカル Web ページでカメラ映像、関節状態、ロボットモデルを確認できます。

このプロジェクトは、手のランドマークと整列済み深度データを組み合わせて、手のひらの 3 次元位置を推定します。ターゲットをフィルタリングし、座標変換を行い、ロボットの運動学を用いて関節コマンドを計算します。Web ページはデータのプレビューと制御プロセスの管理を行います。関節値はフィードバック、コマンド、またはモデル推定のいずれかに由来する場合があり、ページ上のデータソースラベルを確認してください。

<GitHubStarButton
  owner="Yang-Ci"
  repo="reBot_RS_Camera-Follow"
  ariaLabel="Star reBot_RS_Camera-Follow on GitHub"
/>

:::warning 実機ロボットの安全性
初期化時にモーターが有効化され、アームが HOME に移動します。終了時もアームはゼロ位置に戻ります。動作範囲全体を片付け、アームを固定し、電源・CAN・HOME への経路を確認し、ハードウェアの非常停止が使用可能であることを確認してください。システムを初めて実行する場合やハードウェアを変更した後は、低速かつ小さな範囲から開始してください。ソフトウェア保護や Web 表示は、衝突検知やハードウェア非常停止の代わりにはなりません。
:::

## システム構成とアプローチ

### システム構成

<p align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/camera_follow/system-architecture-en-dark.png" alt="システム構成：手首カメラがフレームを Linux ホストに送信し、ホストが CAN 経由でアームを制御して関節フィードバックを受信する。ローカル Web ページがステータスを表示する。" />
</p>

手首カメラはカラーおよび深度フレームをホストに供給し、ホストは CAN 経由でアームを制御して関節フィードバックを受信します。ローカル Web ページはコントローラを管理し、プレビューとステータスを表示します。

ビジョンスレッドはカメラフレームを取得して手を検出します。サーボスレッドは最新のターゲットを読み取り、ロボットモデルとカメラ姿勢を用いて関節コマンドを計算します。Web ページはローカルサービスを通じてコントローラを起動・管理し、ステータスを受信しますが、CAN には直接接続しません。表示内容は実際のフィードバック、コマンド、または推定値のいずれかである可能性があり、データソースラベルを確認してください。

### 手のひら追従とグリッパー制御

<p align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/camera_follow/following-workflow-en-dark.png" alt="手のひら追従は 3D の手のひらを検出し、ターゲットを生成してアームを動かす。つまみ制御は指先を検出し、つまみ距離を計算してグリッパーを指令する。" />
</p>

手のひら追従は 3D の手のひらを検出し、追従ターゲットを計算してアームを動かします。グリッパー制御は指先位置とつまみ距離を用いて開度コマンドを生成します。

カメラは手首に取り付けられているため、コントローラはカメラ座標をロボット座標に変換する必要があります。手のひらが短時間だけ見失われた場合、プログラムは一定時間まで外挿することがありますが、長時間見失われた後は位置を保持します。手が再検出されると動作が再開する場合があります。つまみ制御は追従と手検出結果を共有し、Web ページからグリッパーを現在位置で保持することもできます。

## 前提条件

- 設定済みの reBot Arm B601-RS、本体用電源、および動作する CAN インターフェース。まず [reBot-RS クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/) を参照してください。
- Linux コンピュータ。リファレンス環境では Python 3.10 を使用します。プロジェクトにはカメラ SDK、Pinocchio、motorbridge が必要です。システムライブラリやデバイス権限はマシンによって異なります。
- 手首に取り付ける深度カメラと対応するマウント。Web ページでは Gemini 2、Gemini 305、Gemini 336、RealSense D435i を選択できます。カメラ姿勢の要件については後述を参照してください。

## カメラマウントを選ぶ

Gemini 2、D435i、Gemini 336 は V1 水平マウントを使用し、各モデルごとに個別のカメラ URDF を持ちます。図は共通マウントの STL モデルを 3 方向から示したもので、ラベルは中国語です。

<p align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/camera_follow/gemini2-level-mount.png" alt="Gemini 2、Gemini 336、D435i で共通のマウントの斜視図、上面図、側面図" />
</p>

図ではモデルのバウンディングボックスを X 95.8 × Y 51.0 × Z 25.1 mm と示しています。[共通マウントディレクトリ](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/tree/main/models/wrist_camera/gemini2-gemini336-d435i)から STEP および STL ファイルをダウンロードできます。

Gemini 305 は、下図の STL モデルプレビューに示すように、独立したセンタリングされた水平マウントを使用します。このマウントは D405 にも適合します。追従プログラムで選択できるカメラオプションは、プロジェクトがサポートする内容に依存します。

<p align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/camera_follow/gemini305-level-mount.png" alt="Gemini 305 と D405 で共通のマウントの斜視図、上面図、側面図" />
</p>

図のラベルは中国語で、モデルのバウンディングボックスを X 46.0 × Y 73.4 × Z 24.7 mm と示しています。[マウントの STL モデル](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/models/wrist_camera/meshes/Gemini305_D405_Mount.stl)および[モデルに関する注意](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/models/wrist_camera/README.md)を参照してください。Gemini 305 のカメラハウジングは URDF モデル内で近似されています。

カメラごとに光学中心と取り付け位置が異なります。これらの姿勢は公称 CAD アセンブリです。使用前に、取り付け状態、視野、URDF が実機構成と一致しているか確認し、その後低速で動作方向を検証してください。

## プロジェクトと依存関係をインストールする

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
  <div className="rebot-step-content">
    <h4>プロジェクトを取得して環境を作成する</h4>
    <p className="rebot-step-label">Step 1</p>

Linux ターミナルで次を実行します。

```bash
git clone https://github.com/Yang-Ci/reBot_RS_Camera-Follow.git
cd reBot_RS_Camera-Follow
python3.10 -m venv .venv-arm
.venv-arm/bin/python -m pip install -r requirements.txt
```

使用するカメラ用の SDK をインストールして検証します。D435i の場合は、この環境に RealSense Python バインディングもインストールします。

```bash
.venv-arm/bin/python -m pip install 'pyrealsense2>=2.54'
```

プロジェクトの [requirements-d435i.txt](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/requirements-d435i.txt) には、D435i をビジョン用途のみで使用するための依存関係セットが用意されています。実機ロボット制御には、これに加えてメインの依存関係も必要です。インストールに失敗した場合は、Python バージョン、システムライブラリ、デバイス権限、カメラ SDK を確認してください。
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
  <div className="rebot-step-content">
    <h4>同梱リソースを確認する</h4>
    <p className="rebot-step-label">Step 2</p>

ロボットコントローラ、RS URDF、Web モデル、ブラウザ用手検出リソースは、このリポジトリに同梱されています。他のプロジェクトをクローンしたり、リソースパスを設定したりする必要はありません。プロジェクトルートから次のファイルを確認します。

```bash
ls vendor/rebot_control
ls assets/robot/description/urdf/ReBot_Arm_RS.urdf
ls web/lib/mediapipe
```

これらのコマンドは、それぞれ対応するディレクトリまたはファイルを一覧表示するはずです。Python の依存関係とカメラ SDK は依然としてインストールが必要です。ソースについては [同梱リソースに関する注意](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/assets/README.md) を参照してください。
  </div>
</section>
</div>

## カメラ姿勢を確認する

Gemini 2、D435i、Gemini 305、Gemini 336 は、デフォルトでそれぞれの URDF ファイルに定義された公称 CAD カメラ姿勢を使用し、ハンドアイキャリブレーションファイルは不要です。Gemini 2、D435i、Gemini 336 は、それぞれ対応する V1 水平モデルを使用します。D435i は、現在のカラー画像または赤外線画像に応じて光学フレームを選択します。Gemini 305 はセンタリングされた水平マウントモデルを使用します。

使用前に、実機のカメラとマウントが選択した URDF と一致していることを確認し、その後低速で動作方向を確認してください。公称 CAD 姿勢は実測結果ではありません。詳細は [手首モデルに関する注意](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/models/wrist_camera/README.md) を参照してください。

## カメラプレビューを確認する

プロジェクトルートから Web サービスを起動します。

```bash
python3 web/server.py
```

同じコンピュータで [http://127.0.0.1:8765](http://127.0.0.1:8765) を開きます。このサービスはローカルマシン上でのみ待ち受けます。現在の Web インターフェースは中国語です。**Real Robot Control**（真机控制）を選択し、接続されているカメラを選択してから、**Open Camera**（打开摄像头）をクリックして、アームを接続する前に画像を確認します。Gemini のプレビューに表示される深度インセットは、深度データが利用可能かどうかを確認するのに役立ちますが、計測器や安全装置ではありません。

**Computer Camera Simulation**（パソコンカメラシミュレーション）用にモードを切り替え、**Enable Camera**（开启摄像头）をクリックして、ブラウザのアクセスを許可します。このモードは Web 上のモデルのみを駆動し、実機アームの制御、手のひらの奥行き推定、エンドエフェクタの逆運動学は行いません。

アームを接続せずに Gemini 336 のビジョンを実行するには：

```bash
.venv-arm/bin/python palm_follow_grasp.py --camera gemini336 --no-arm
```

画像が表示されない場合は、カメラ接続、デバイス権限、SDK、他のプログラムがカメラを使用していないかを確認してください。Web モデルが表示されない場合は、リポジトリ内の `assets/` および `web/lib/` リソースが揃っているか確認してください。

## 実機ロボットの追従を開始する

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
  <div className="rebot-step-content">
    <h4>装置と作業空間を確認する</h4>
    <p className="rebot-step-label">Step 1</p>

CAN を使用している他のプログラムを終了し、カメラ姿勢、関節のゼロ位置、HOME、作業空間、ハードウェア非常停止を確認します。現在の姿勢から HOME まで、そしてゼロ位置に戻るまでの経路が安全であることを確認してください。

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
  <div className="rebot-step-content">
    <h4>カメラと低速プリセットを選択する</h4>
    <p className="rebot-step-label">Step 2</p>

Web ページ上でカメラを選択します。初回は **Low-Speed Validation**（低速验证）と **Keep Gripper Position**（保持当前位置）を使用してください。低速プリセットでは、追従ゲインと水平ゲインの両方を 1.5 に設定し、エンドエフェクタ速度を 0.10 m/s に制限します。これらの設定は現在の実行にのみ適用され、設定ファイルには書き込まれません。

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
  <div className="rebot-step-content">
    <h4>実機ロボットを初期化する</h4>
    <p className="rebot-step-label">Step 3</p>

**Initialize Real Robot**（初始化真机）をクリックします。プログラムがカメラを占有し、アームを有効化して HOME に移動させます。実際の動きを監視し、HOME に到達したら、アームは開始コマンドを待機します。

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
  <div className="rebot-step-content">
    <h4>手のひら追従を開始する</h4>
    <p className="rebot-step-label">Step 4</p>

`R` を押すか、**Start Following**（开始跟随）をクリックするか、開いた手のひらを 3 秒間保持して開始します。手をゆっくり動かして、実際の動作方向と範囲を確認してください。**Pinch Control**（捏合控制）が選択されている場合は、追従が有効な間、親指と人差し指をつまむことでグリッパを制御できます。

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">5</span>
  <div className="rebot-step-content">
    <h4>一時停止と終了</h4>
    <p className="rebot-step-label">Step 5</p>

Space キーで一時停止します。**Exit and Return to Zero**（退出并回零）をクリックするか、`Q` / `Esc` を押して、プログラムに追従停止、ゼロ位置への復帰、モータの無効化を要求します。初期化中の終了要求は、初期化完了後に処理されます。緊急時はハードウェア非常停止を使用してください。

  </div>
</section>
</div>

手のひらが短時間見失われた場合、プログラムは一定時間まで外挿を行うことがあります。長時間見失われた場合は姿勢を保持します。手が再検出されると、自動的に動作が再開されることがあります。フィードバック保護やテーブルトップ保護によるロックでシステムが一時停止した後は、`R` を押すか再開コントロールをクリックして手動で再開してください。Web モデルとグリッパ表示はコマンドや推定値を示すものであり、実際の位置の安全性を証明する根拠として使用してはいけません。操作および保護の詳細については、[web guide](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/web/README.md) を参照してください。

## 設定とトラブルシューティング

| 症状 | 確認事項 |
| --- | --- |
| カメラプレビューは動作するが、初期化に失敗する | 選択したカメラモデル、URDF、CAN、HOME、関節のゼロ位置、およびページのエラーメッセージを確認してください。 |
| 追従方向または位置が正しくない | 直ちに一時停止し、実際のカメラの向き、カメラからアームへの変換、URDF、関節のゼロ位置を確認してください。速度を上げて問題を隠さないでください。 |
| 手または奥行きが検出されない | 照明、手が視野内にあるか、奥行き画像、デバイス接続を確認し、遮蔽を避けてください。 |
| アームが反応しない、または保護により一時停止する | 他のプログラムが CAN を使用していないか、デバイスからのフィードバック、およびページメッセージを確認してください。フィードバック保護を無効化しないでください。 |

`config/follow.yaml` は追従距離、ゲイン、速度、および作業空間パラメータを制御します。Gemini 336 がカスタム設定なしで選択された場合、`config/follow_gemini336.yaml` も適用されます。`config/grasp.yaml` はつまみジェスチャをグリッパにマッピングします。コマンドラインオプションは次で確認できます：

```bash
.venv-arm/bin/python palm_follow_grasp.py --help
```

:::warning
`--no-arm` はビジョン専用オプションです。`--no-gripper` と `--no-follow` は引き続きアームに接続します。設定またはハードウェアを変更した後は、セットアップを再確認し、低速で検証してください。
:::

## リソース

- [プロジェクトリポジトリと最新の README](https://github.com/Yang-Ci/reBot_RS_Camera-Follow)
- [Web 操作とデータソース](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/web/README.md)
- [キャリブレーション、制御、診断マニュアル](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/docs/技术手册.md)
- [同梱リソースとその出典](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/assets/README.md)
