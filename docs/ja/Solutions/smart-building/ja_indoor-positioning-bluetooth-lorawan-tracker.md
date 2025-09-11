---
title: "LoRaWANを使用したBluetooth屋内測位システム"
description: "SenseCAP Trackerを使用した信頼性の高い屋内測位ソリューション。精密な位置追跡のためのBluetoothと長距離データ伝送のためのLoRaWANを組み合わせ、簡単な導入を可能にします。"
keywords:
  - Bluetooth
  - LoRaWAN
  - SenseCAP Tracker
  - Indoor Positioning
  - Asset Tracking
  - SOS
  - Campus Safety
slug: /ja/solutions/indoor-positioning-bluetooth-lorawan-tracker
sidebar_position: 1
last_update:
  date: 09/10/2025
  author: Spencer
---

## はじめに

### 概要

屋内測位は多くの業界で共通の課題です。UWBのような高精度システムは存在しますが、コストが高く複雑になる場合があります。このソリューションは、2つの強力なワイヤレス技術を組み合わせることで、柔軟でコスト効率の良い代替案を提供します：位置検知のための**Bluetooth Low Energy (BLE)**と長距離・低消費電力データ伝送のための**LoRaWAN**。

このシステムは[SenseCAP T1000 Tracker](/ja/SenseCAP_T1000_tracker/Introduction)を中心に構築されており、2つの異なる測位モードをサポートし、ニーズに基づいて精度とバッテリー寿命のバランスを取ることができます：

1. **高精度追跡（三角測量）：** トラッカーが**3つ以上**のBLEビーコンからの信号を検出すると、マップ上の正確な(x, y)座標を計算できます。このモードは、資産や人員の移動を追跡するのに理想的で、定期的または移動が発生するたびに正確な位置更新を提供します。

2. **ゾーンベース測位（近接）：** トラッカーが1つまたは2つのビーコンの範囲内にある場合、最も近いビーコンへの近接性に基づいて位置を特定します。このモードは、自動チェックイン、資産が指定された部屋にあることの確認、または位置報告の頻度を下げてバッテリー寿命を節約するなど、よりシンプルな用途に最適です。

両方の方法をサポートすることで、このソリューションは、シンプルな存在検知からより詳細な座標ベースの監視まで、幅広い屋内追跡アプリケーションに対応する汎用性があり、導入しやすいシステムを提供します。

:::tip バンドルページへ移動

このソリューションを実装するために必要なすべての製品については、[屋内・屋外統合測位](https://www.seeedstudio.com/Indoor-Outdoor-Integrated-Positioning.html)バンドルページをご確認ください。

:::

### 主な機能と利点

- **コスト効率と拡張性**: 手頃な価格のBLEビーコンを活用し、各部屋への高価なゲートウェイ設置の必要性を回避します。
- **長距離データ伝送**: 単一のLoRaWANゲートウェイで建物全体やキャンパス全体をカバーでき、インフラストラクチャコストを大幅に削減します。
- **即座のSOS警報**: トラッカーには、押すとLoRaWAN経由で即座にSOS警報を送信し、迅速な緊急対応を可能にするパニックボタンが含まれています。
- **インテリジェント電源管理**: 内蔵の加速度計を使用することで、トラッカーは動きが検出されたときのみ報告し、それ以外は定期的な「ハートビート」信号を送信できます。これにより、多くの資産追跡アプリケーションで最適な設定により、バッテリー寿命を最大6ヶ月まで大幅に延長できます。
- **簡単な導入**: BLEビーコンとLoRaWANゲートウェイの設定は簡単で、測位システムを迅速にオンラインにできます。
- **オープンソースソフトウェア**: プロジェクトは完全にオープンソースで、[GitHubリポジトリ](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5)を使用して独自のバックエンドサーバーを構築・カスタマイズできます。

### 使用例

<div class="info-section">
    <div class="section-header">
        <h2>使用例</h2>
        <p>このソリューションは、幅広いゾーンベース追跡と安全アプリケーションに理想的です：</p>
    </div>
    <ul class="info-list">
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg></div><div class="info-content"><h3>キャンパス・学校の安全</h3><p>学生とスタッフにウェアラブルトラッカーを提供します。内蔵のSOSボタンにより、キャンパス内のどこからでも最後の既知の位置と共に緊急警報を即座に送信でき、安心感を提供し、より迅速な対応時間を可能にします。</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg></div><div class="info-content"><h3>資産管理</h3><p>屋内外の貴重な資産の位置を追跡します（例：駐車場の車両）。移動時のみ報告するようにトラッカーを設定し、バッテリーを節約しながら不正な移動を確実に警告します。</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c.266.059.537.1.82.118m7.542 2.72a3 3 0 01-4.682-2.72m0 0a3 3 0 013.741-.479m-.479 3.742a9.094 9.094 0 01-3.742.479m-12 .482c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479m0 0a3 3 0 01-3.741.479m5.421 2.053a3 3 0 01-4.682-2.72m0 0c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479M12 12a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3z" /></svg></div><div class="info-content"><h3>自動チェックイン・人員管理</h3><p>BLEビーコンの信号強度を調整することで、オフィスや介護施設の「チェックイン」ゾーンを作成できます。トラッカーを着用した人がゾーンに入ると、その存在が自動的に記録されます。</p></div></li>
    </ul>
</div>

### システムアーキテクチャ

システムは、シンプルでありながら強力な原理で動作します。モバイルトラッカーは固定ビーコンからの信号を聞き取り、聞いた内容を中央サーバーに報告します。

![System Architecture Diagram](https://media-cdn.seeedstudio.com/media/wysiwyg/IoT_Device/_163.png)

### 前提条件

主要コンポーネントは以下の通りです：

1. **BLEビーコン**: これらは既知の場所（例：部屋の入り口、重要なゾーン）に配置された小さな固定送信機です。一意のIDを継続的にブロードキャストします。
2. **SenseCAP T1000 Tracker**: これは追跡したい資産や人に取り付けられるモバイルデバイスです。近くのBLEビーコンをスキャンし、最も強い信号を持つものを特定します。
3. **LoRaWANゲートウェイ**: トラッカーは最も近いBLEビーコンのIDを含むデータパケットをLoRaWAN経由でゲートウェイに送信します。
4. **ネットワーク・アプリケーションサーバー**: ゲートウェイはデータをLoRaWANネットワークサーバー（[SenseCraft Data](https://sensecap.seeed.cc/portal)）に転送し、それがアプリケーションサーバーにルーティングします。アプリケーションサーバーはビーコンIDとその実世界の位置のマップを保持し、トラッカーの位置を決定できます（例：「トラッカー#58はビーコン#12の近くにあり、これは会議室3にあります」）。

開始する前に、以下のものが必要です：

- SenseCAP T1000 Tracker
- 1つ以上のBLEビーコン
- インターネットに接続されたLoRaWANゲートウェイ
- Dockerがインストールされたサーバーまたはコンピューター

<div class="seeed-features-container">
    <div class="seeed-features-grid">

  <!-- Card 1: SenseCAP T1000 Tracker -->
  <div class="seeed-feature-card">
      <div class="card-header">
          <h2><a href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html">SenseCAP T1000 Tracker</a></h2>
          <p>BLEスキャン機能を備えたLoRaWAN®モバイルトラッカー</p>
      </div>
      <div class="card-body">
          <ul class="features-list">
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                  </div>
                  <p><span class="highlight">BLEビーコン検出：</span> 精密な屋内外測位のためのBLE 5.1をサポート。</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 9.393a15 15 0 0121.213 0" />
                      </svg>
                  </div>
                  <p><span class="highlight">広域ネットワーク：</span> 長距離・低消費電力通信のためのLoRaWAN® Class A(v1.0.4)接続。</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                  </div>
                  <p><span class="highlight">動作検出：</span> リアルタイムの動作と静止状態検知のための内蔵加速度計。</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                  </div>
                  <p><span class="highlight">緊急ボタン：</span> ワンプレスで緊急警報をトリガーする独立したSOSボタン。</p>
              </li>
          </ul>
      </div>
  </div>

  <!-- Card 2: BLE Beacons -->
  <div class="seeed-feature-card">
    <div class="card-header">
        <h2><a href="https://www.seeedstudio.com/BC01-Indoor-Bluetooth-Beacon-p-5791.html">BLEビーコン</a></h2>
        <p>通常のBluetooth放送</p>
    </div>
    <div class="card-body">
        <ul class="features-list">
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                </div>
                <p><span class="highlight">プロトコル互換性：</span> Bluetooth® LE 5.0 | iBeaconおよびEddystoneフォーマットを完全サポート。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.572a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                    </svg>
                </div>
                <p><span class="highlight">柔軟な展開：</span> カバレッジ半径を調整可能な送信電力設定。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="size-2">
                    <path d="M4 7.75A.75.75 0 0 1 4.75 7h5.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-5.5A.75.75 0 0 1 4 8.25v-.5Z" />
                    <path fill-rule="evenodd" d="M3.25 4A2.25 2.25 0 0 0 1 6.25v3.5A2.25 2.25 0 0 0 3.25 12h8.5A2.25 2.25 0 0 0 14 9.75v-.085a1.5 1.5 0 0 0 1-1.415v-.5a1.5 1.5 0 0 0-1-1.415V6.25A2.25 2.25 0 0 0 11.75 4h-8.5ZM2.5 6.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-3.5Z" clip-rule="evenodd" />
                </svg>
                </div>
                <p><span class="highlight">長寿命：</span> 標準設定で最大<span class="highlight">2年間</span>のバッテリー寿命。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.456-2.456L11.25 18l1.938-.648a3.375 3.375 0 002.456-2.456L16.25 13.5l.648 1.938a3.375 3.375 0 002.456 2.456L21 18l-1.938.648a3.375 3.375 0 00-2.456 2.456z" />
                    </svg>
                </div>
                <p><span class="highlight">簡単設置：</span> 壁やその他の表面に簡単に取り付けられる粘着テープ付き。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-radio-icon lucide-radio"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"/><path d="M19.075 4.933a10 10 0 0 1 0 14.134"/><path d="M4.925 19.067a10 10 0 0 1 0-14.134"/><path d="M7.753 16.239a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <p><span class="highlight">放送範囲：</span> 屋外最大75メートル、開放的な屋内エリアで120メートル。</p>
            </li>
        </ul>
    </div>
</div>

  <!-- Card 3: SenseCAP M2 Multi-Platform Gateway -->
  <div class="seeed-feature-card">
    <div class="card-header">
        <h2><a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html">SenseCAP M2 マルチプラットフォームゲートウェイ</a></h2>
        <p>LoRaWAN® ネットワークインフラストラクチャ</p>
    </div>
    <div class="card-body">
        <ul class="features-list">
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <p><span class="highlight">広範囲カバレッジ：</span> 屋内カバレッジ半径最大<span class="highlight">2 km</span>、安定した信号を確保。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c.266.059.537.1.82.118m7.542 2.72a3 3 0 01-4.682-2.72m0 0a3 3 0 013.741-.479m-.479 3.742a9.094 9.094 0 01-3.742.479m-12 .482c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479m0 0a3 3 0 01-3.741.479m5.421 2.053a3 3 0 01-4.682-2.72m0 0c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479M12 12a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3z" />
                    </svg>
                </div>
                <p><span class="highlight">大規模接続：</span> <span class="highlight">200台</span>以上の同時接続デバイスを優れたパフォーマンスでサポート。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                    </svg>
                </div>
                <p><span class="highlight">複数のバックホール：</span> Ethernet、Wi-Fi、4Gを含む複数のネットワークバックホールオプションを提供。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008z" />
                    </svg>
                </div>
                <p><span class="highlight">統合ソリューション：</span> ネットワークの展開と管理を簡素化する内蔵ローカルLoRaWANサーバー機能。</p>
            </li>
        </ul>
    </div>
  </div>
</div>
</div>

## 入門ガイド

<div align="center">
<img class='img-responsive' width="1280" src="https://mermaid.ink/img/pako:eNo9jk9vwjAMxb9K5HOp2tE_JIdJQDcuO41phzUcotYtFW0SpYkYVHz3BSrmk9_Pz_aboFI1AoOmV-fqKIwlH59cEl_rcm-9PpDF4pVsygJ1ry5kg6JScpzpttyjdZrshMWzuMyweFrXWs_krdwq2XStM0i-jKhOaObBe_ndjU703RVnsPPOQfdo8cAlBNCargZmjcMABjSDuEuY7gE52CMOyIH5thbmxIHLm9_RQv4oNTzXjHLtEVgj-tErp2uftehEa8TwTw3KGs1WOWmB0Sh9HAE2wS-wLA6XeULzlyyL0piuaBLABVgc0ZBmeZymyTJa0SjJbgFcH3-jcJWntz-sxGvR?type=png" alt="Indoor positioning 2d map"/>
</div>

1. **ビーコンの配置**: 施設全体の戦略的な場所にBLEビーコンを配置します。各ビーコンの固有IDとその物理的な場所を記録したマップまたはリストを作成します（例：`Beacon_ID_01: "メインエントランス"`、`Beacon_ID_02: "倉庫ゾーンA"`）。
2. **ゲートウェイの設定**: LoRaWANゲートウェイをインターネットに接続し、選択したLoRaWANネットワークサーバーにパケットを転送するよう設定します。
3. **アプリケーションの展開**: アプリケーションサーバー上で、報告されたビーコンIDをステップ3で記録した物理的な場所にマッピングするロジックを作成します。
4. **トラッカーの設定**: SenseCAP T1000をアクティベートし、LoRaWANネットワークサーバーにオンボードします。BLEスキャンモード用に設定されていることを確認します。
5. **可視化**: トラッカーが施設内を移動すると、最も近いビーコンを報告し、アプリケーションはダッシュボードまたはマップ上にその位置を表示できます。

### ステップ1: ハードウェアのセットアップ

まず、施設内に物理デバイスをセットアップする必要があります。

#### **1a. ビーコンの配置**

:::info
完全な技術詳細については、**[BC01 屋内Bluetoothビーコンドキュメント](/ja/bluetooth_beacon_for_SenseCAP_Traker/)**を参照してください。
:::

まず、メインエントランス、倉庫、オフィスなど、施設全体の主要な場所に**BLEビーコン**を配置します。

<div align="center">
<img class='img-responsive' width="360" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/10.5.png" alt="Indoor positioning 2d map"/>
</div>

次に、各ビーコンの**固有MACアドレス**とその物理的な場所を記録するためのリスト（テンプレート）を作成します。この記録は、ソフトウェア設定ステップにとって**必須**です。

**記録例:**

```csv
MAC Address,Location,Beacon ID
c30000564b31,"Main Entrance",01
c30000564b32,"Warehouse Zone A",02
c30000564b33,"Corner Office",03
```

以下の動画は、後でアプリケーションのマップにビーコンを追加する際にこのリストをどのように使用するかを示しています。今正確な記録を作成することで、ソフトウェアのセットアップがはるかに簡単になります。

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-configuration.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

**プロのヒント：** 管理を簡単にするために、**SenseCraft アプリ**を使用してすべてのビーコンに一貫した**UUID**を設定できます。これにより、トラッカーがあなたのデバイスのみをリッスンし、他のデバイスを無視することが保証されます。詳細については[機能4：ビーコンUUIDによるフィルタリング](https://www.google.com/search?q=%23feature-4-filter-by-beacon-uuid)をご確認ください。

<details>
<summary>BC01ビーコンのパラメータのクイックビュー</summary>

| パラメータ | デフォルト値 |
|------------|---------------|
| UUID | FDA50693-A4E2-4FB1-AFCF-C6EB07647825 |
| Major | 10001 |
| Minor | 19641 |
| Measured power | -59dBm |
| Tx Power | -30 - +4dBm、デフォルト 0dBm |
| Adv Interval | 100ms~10s、デフォルト 500ms |
| Password | seeed123（文字と数字） |
| Device Name | BC01（1-7文字） |
| Soft Reboot | seeed123（パスワードと同じ） |

</details>

#### 1b. ゲートウェイのセットアップ

まず、**LoRaWAN ゲートウェイ**の電源を入れ、インターネットに接続します。ここから先の手順は、使用するネットワークサーバーによって異なります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="sensecap-portal" label="SenseCraft Data" default>

デフォルトの[SenseCraft Data](https://sensecap.seeed.cc/portal/)（旧SenseCAP Portal）プラットフォームを使用している場合、ゲートウェイは既に事前設定されています。

1. [公式ユーザーマニュアル](/ja/quick_start_with_M2_MP)に従って、ゲートウェイがオンラインでアカウントに接続されていることを確認してください。
2. それが完了したら、**ステップ2に進む**ことができます。

  </TabItem>
  <TabItem value="chirpstack" label="ChirpStack (Local LoRaWAN Server)">

セルフホストの**ChirpStack**サーバーを使用している場合、ゲートウェイを再設定し、デコーダースクリプトを準備する必要があります。

1. **ゲートウェイの設定：** このガイドに従って[ゲートウェイのデータをChirpStackにリダイレクト](/ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration/)してください。
2. **デコーダーのダウンロード：** ChirpStackはT1000トラッカーから送信されるデータを理解するためにデコーダーが必要です。後の手順で準備できるよう、今すぐスクリプトをダウンロードしてください。

    - [**T1000デコーダースクリプトをダウンロード**](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/TTN/SenseCAP_T1000_TTN_Decoder.js)

    **注意：** このスクリプトは**ChirpStackアプリケーション設定**内に追加します。ゲートウェイ自体には追加しません。

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-for-chripstack.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

  </TabItem>
</Tabs>

### ステップ2：測位アプリケーションのインストール

次に、Dockerを使用してサーバーにメインアプリケーションをインストールします。または、まず[デモ](https://indoorpositioning-demo.seeed.cc/)をご覧いただけます。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png" alt="Indoor positioning application preview"/>
</div>

#### インストールコマンドの実行

サーバーでターミナルを開き、以下のコマンドを実行してください：

```bash
docker run -p 5173:5173 -p 8022:8022 --name indoor-positioning --restart unless-stopped -v /data/indoor-positioning/db/:/app/db/ -d seeedcloud/sensecraft-indoor-positioning
```

**このコマンドの動作：**

- SenseCraft Indoor Positioningアプリケーションをダウンロードして開始します。
- `-p 5173:5173`により、Webダッシュボードがポート`5173`でアクセス可能になります。
- `-v /data/indoor-positioning/db/:/app/db/`により、アプリケーションはデータベースとマップをマシンの`/data/indoor-positioning/db/`フォルダに保存します。
- `-d`により、アプリケーションがバックグラウンドで実行されます。

コマンドを実行した後、Webブラウザを開いて`http://<your_server_ip>:5173`にアクセスすることでダッシュボードにアクセスできます。

### ステップ3：アプリケーションの設定

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="app-configuration-management"/>
</div>

次に、ブラウザでアプリケーションダッシュボードを開いて、システム設定を構成します。

#### 3a. ランタイム設定（LoRaWANへの接続）

この設定により、アプリケーションがLoRaWAN Network Serverに接続してトラッカーデータを受信します。重要な機能として、**アプリケーションはSenseCraft DataプラットフォームとChirpStackサーバーの両方への同時接続をサポートしています。**

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-server-runtime-configuration.png" alt="app-server-runtime-configuration"/>
</div>

ダッシュボードで、ネットワークサーバーに接続するために以下のMQTTソースの一方または両方を有効にできます。

##### SenseCraft Dataへの接続

1. **SenseCAP OpenStream MQTT**トグルを有効にします。
2. **ユーザー名**と**API キー**を入力します。
      - これらの認証情報は[Data OpenStream API クイックスタートガイド](https://www.google.com/search?q=/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_quickstart/)に従って生成できます。

##### ChirpStackへの接続

1. **ChirpStack MQTT**トグルを有効にします。
2. ChirpStackの**サーバーアドレス**と**アプリケーションID**を入力します。
      - MQTTトピックフィールドは自動的に更新されます。**アプリケーションID**はChirpStack内のアプリケーションのメインページで確認できます。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/chirpstack-application-id.png" alt="chirpstack-application-id"/>
</div>

---

**注意：** `{clientID}`フィールドはシステムによって使用され、起動時にランダムIDに置き換えられます。変更する必要はありません。

**重要：** これらの設定を有効にしたり変更したりした後は、設定を有効にするために**アプリケーション**（Dockerコンテナ）を**再起動**する必要があります。

##### その他の設定

以下の設定は、アプリケーションを再起動することなくいつでも変更できます：

- **認証：** アプリケーションのダッシュボードにログインするために使用するユーザー名とパスワードを更新します。
- **エリア測位：** 精密な多点測位に利用できるビーコン信号が少なすぎる場合に、トラッカーの位置を推定するためにこのオプションを有効にします。
- **トラッカーアクセス制御：** アプリケーションにデータを送信することが許可されているデバイスを設定します。任意のデバイスからのデータを許可するか、承認されたトラッカーの特定のリストを作成できます。
- **Webhook：** HTTP POSTリクエストを使用して位置結果を独自のサービスにプッシュするためにこれを有効にします。

#### 3b. マップとビーコンの設定

このステップでは、アプリケーションのダッシュボードを使用してフロアプランをアップロードし、先ほど物理的に配置したビーコンを追加します。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="Application Configuration Management"/>
</div>

1. マップのアップロード
まず、設定メニューに移動してフロアプランの画像をアップロードします。PNGやJPGなどの標準的な画像形式が推奨されます。
2. ビーコンの追加
「ビーコン」セクションに移動します。[ステップ1a](#1a-ビーコンの配置)で作成したリストを使用して、各ビーコンの情報（MACアドレスなど）を追加します。最も簡単な方法は、アップロードしたマップ上のビーコンの位置を直接クリックすることです。
3. 環境係数の調整（オプション）
これは位置精度を微調整する高度な設定です。特定の環境を考慮して信号強度（RSSI）をより正確な距離に変換するのに役立ちます。
    - オープンスペースの場合、デフォルト値の約2.0で通常十分です。
    - 多くの壁や障害物がある複雑な屋内エリアの場合、1.8から4.0の間で値を調整する必要があるかもしれません。
    - **推奨：** 開始時はデフォルト設定のままにしておくのが最適です。測位精度を向上させる必要がある場合は、後で戻って調整できます。

### ステップ4：トラッカーのアクティベートと可視化

最後のステップは、トラッカーの電源を入れてマップ上で確認することです。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/tracker-visualize-on-map.png" alt="tracker-visualize-on-map"/>
</div>

1. **SenseCAP T1000トラッカーをアクティベート**し、LoRaWAN Network Serverにオンボードします。ゲートウェイがオンラインで、トラッカーデバイスがLNSサーバーに「登録」されていることを確認してください。詳細は[ステップ1b](#1b-ゲートウェイのセットアップ)をご確認ください。
2. **BLEスキャンモードに設定されていることを確認**して、ビーコンを検出できるようにします。ヘルプについては以下の動画をご確認ください。
3. **可視化：** トラッカーが施設内を移動すると、最寄りのビーコンを検出してその位置を報告します。ダッシュボードのマップ上でアイコンが移動するのを確認できます。

<div style={{ textAlign: 'center' }}>
<video width="480" height="640" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-tracker-configuration.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
<p><em>ChirpStackを使用する場合は、`Other Platform`を選択してください。</em></p>
<p><em>SenseCraft Dataを使用する場合は、デフォルトのプラットフォーム設定（SenseCAP for The Things Network）を保持してください。</em></p>
</div>

## アプリケーション機能概要

### 機能1：データプッシュ（Webhook & WebSocket）

システムからリアルタイムデータを取得する方法は2つあります：

- **Webhook：** 設定で説明したように、これは提供されたURLにデータをプッシュします。
- **WebSocket：** リアルタイムアプリケーション用に、Basic HTTP認証を使用して`/ws`エンドポイントに接続できます。`sos`、`tracker_update`（三角測量）、`tracker_location_approximate`（近接）のデータ形式は、元の文書で提供されているJSON例で詳しく説明されています。

#### **データ形式**

<Tabs>
<TabItem value="sos" label="SOSアラート" default>

```json
{
    "type": "tracker_sos",
    "data": {
        "2CF7F1C0530004AD": {
            "timestamp": 1756967508000,
            "sos": 0
        }
    }
}
```

</TabItem>
<TabItem value="trilateration" label="三角測量/多角測量">

```json
{
    "type": "tracker_update",
    "data": {
        "2CF7F1C0530003BD": {
            "trackerId": "2CF7F1C0530003BD",
            "timestamp": 1756967455550,
            "position": {
                "x": 11.1,
                "y": 12.3
            },
            "last_detected_beacons": [
                {
                    "macAddress": "C3:00:00:56:4B:5D",
                    "major": null,
                    "minor": null,
                    "name": "Unknown Beacon",
                    "rssi": -79,
                    "txPower": null,
                    "configured_x": null,
                    "configured_y": null
                },
                {
                    "macAddress": "C3:00:00:3E:7D:AA",
                    "major": null,
                    "minor": null,
                    "name": "Unknown Beacon",
                    "rssi": -80,
                    "txPower": null,
                    "configured_x": null,
                    "configured_y": null
                },
                {
                    "macAddress": "C3:00:00:13:3C:99",
                    "major": null,
                    "minor": null,
                    "name": "Unknown Beacon",
                    "rssi": -80,
                    "txPower": null,
                    "configured_x": null,
                    "configured_y": null
                }
            ],
            "position_history": [],
            "map": "10 Floor",
            "sos": 2
        }
    }
}
```

</TabItem>
<TabItem value="area" label="エリア測位">

```json
{
    "type": "tracker_location_approximate",
    "data": {
        "2CF7F1C0530004AD": {
            "trackerId": "2CF7F1C0530004AD",
            "timestamp": 1756967098851,
            "radius": 5.248074602497725,
            "last_detected_beacons": [
                {
                    "txPower": -59,
                    "rssi": -77,
                    "name": "corner",
                    "configured_x": 32.41,
                    "configured_y": 21.26,
                    "macAddress": "C3:00:00:56:4B:59"
                }
            ],
            "map": "10.5 Floor",
            "sos": 0
        }
    }
}
```

</TabItem>
</Tabs>

### 特徴 2: 2つの位置決めモード

システムは2つの位置決め方法をサポートしています：

1. **三辺測量 (Trilateration):** トラッカーが **3つ以上** のビーコンを検出したとき、正確な (x, y) 座標を計算します。これがデフォルトで最も正確なモードです。
2. **近接（エリア位置決め）:** これを有効にし、トラッカーが **1つ** のビーコンしか検出できない場合、そのビーコンの近くにいると計算された半径内で位置を報告します。すべてのエリアをカバーするために便利です。

*三辺測量*

<table align="center">
<tr>
    <th>三辺測量</th>
    <th>三辺測量 (SOS)</th>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/Trilateration-normal.png" alt="area-positioning-normal" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/Trilateration-sos.png" alt="area-positioning-sos" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

*エリア位置決め*

<table align="center">
<tr>
    <th>エリア位置決め</th>
    <th>エリア位置決め (SOS)</th>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/area-positioning-normal.png" alt="area-positioning-normal" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/area-positioning-sos.png" alt="area-positioning-sos" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

### 特徴 3: アラート履歴の表示

地図上のトラッカーアイコンをクリックすると、そのトラッカーのアラート履歴（例：SOSボタン押下履歴）を確認できます。システムは新しいアラートを記録し、解決されるまで通知を送り続けます。

<div align="center">
<img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/alert-history-records.png" alt="alert-history-records"/>
</div>

### 特徴 4: ビーコンUUIDによるフィルタリング

地図上に表示されるトラッカーを、関連するビーコンUUIDでフィルタリングできます。これにより特定のエリアや資産を集中監視できます。ハッキング対策としても有効です。

<div align="center">
<img class='img-responsive' width="360" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/sensecraft-ble-filter.png" alt="sensecraft-ble-filter"/>
</div>

## 参考 & リソース

- **ランディングページ**: [SenseCraft 室内位置決めソリューション](https://cc.seeedstudio.com/solutions/campus-safety-management)
- **Docker イメージ**: [seeedcloud/sensecraft-indoor-positioning - Docker Hub](https://hub.docker.com/r/seeedcloud/sensecraft-indoor-positioning)
- **ライブデモサイト**: [IndoorPositioning](https://indoorpositioning-demo.seeed.cc/)

## FAQ

<details>
<summary>トラッカーが位置を報告しないのはなぜですか？</summary>

- **考えられる原因:** LoRaWAN 接続に問題がある可能性があります。
- **解決策:** LoRaWAN ゲートウェイがオンラインで接続されているか確認してください。また、トラッカーの Device EUI がネットワークサーバーに正しく登録されていることを確認してください。

</details>

<details>
<summary>トラッカーの位置が不正確なのはなぜですか？</summary>

- **考えられる原因:** BLEビーコンの設置場所が干渉や信号カバー不足を引き起こしている可能性があります。
- **解決策:** ビーコンの送信出力を調整してみてください。また、壁や機械による信号遮蔽を避けるために設置場所を変更する必要があるかもしれません。

</details>

<details>
<summary>トラッカーのバッテリーがすぐに減るのはなぜですか？</summary>

- **考えられる原因:** 報告頻度が高すぎ、必要以上にデータを送信している可能性があります。
- **解決策:** モーション検出設定を最適化して、トラッカーが移動しているときだけ報告するようにしてください。また、報告間隔（位置更新の時間間隔）を延長して電力を節約できます。

</details>

<details>
<summary>位置データが表示されない、または欠落しているのはなぜですか？</summary>

- **考えられる原因:** データベースや API に問題がある可能性があります。特にデータペイロードの解釈方法に関連します。
- **解決策:** まずアプリケーションサーバー上のペイロードデコーダーが正しく動作しているか確認してください。正しければ、アプリケーションサーバーのログでエラーや接続問題を確認してください。

</details>

<details>
<summary>SOSアラートが迅速に届かないのはなぜですか？</summary>

- **考えられる原因:** LoRaWAN ネットワークが混雑している、またはデバイスクラスが緊急メッセージに適していない可能性があります。
- **解決策:** SOS アラートのような時間に敏感なアプリケーションでは、トラッカーを **クラスCモード** に設定してください。これにより受信機が常時オンとなり、サーバーからのメッセージを即座に受信できます。

</details>

<details>
<summary>BC01ビーコンの広告間隔と送信出力を調整するには？</summary>

**SenseCraft アプリ**を使用して BC01 ビーコンを設定できます。

1. [Google Play Store](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate) または [Apple App Store](https://apps.apple.com/us/app/sensecraft/id1619944834) から SenseCraft アプリをインストールします。
2. アプリを開き、スマートフォンの Bluetooth を有効にします。
3. 近くのビーコンをスキャンして、設定したいものを選択します。
4. デフォルトのパスワード "**seeed123**" を入力して設定画面に入ります。
5. 広告間隔（100ms〜10s）と送信出力（-30dBm〜+4dBm）をニーズに合わせて調整します。
6. 設定を保存します。

</details>
