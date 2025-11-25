---
title: "LoRaWANを使用したBluetooth屋内測位システム"
description: "SenseCAP Trackerを使用した信頼性の高い屋内測位ソリューション。精密な位置追跡のためのBluetoothと長距離データ伝送のためのLoRaWANを組み合わせ、簡単な展開を可能にします。"
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

屋内測位は多くの業界で共通の課題です。UWBのような高精度システムは存在しますが、コストが高く複雑になる場合があります。このソリューションは、2つの強力なワイヤレス技術を組み合わせることで、柔軟で費用対効果の高い代替案を提供します：位置検知のための**Bluetooth Low Energy（BLE）**と長距離・低消費電力データ伝送のための**LoRaWAN**。

このシステムは[SenseCAP T1000 Tracker](/ja/SenseCAP_T1000_tracker/Introduction)を中心に構築されており、2つの異なる測位モードをサポートし、ニーズに基づいて精度とバッテリー寿命のバランスを取ることができます：

1. **高精度追跡（三角測量）：** トラッカーが**3つ以上**のBLEビーコンからの信号を検出すると、マップ上の正確な（x、y）座標を計算できます。このモードは、資産や人員の移動を追跡するのに理想的で、定期的または移動が発生するたびに正確な位置更新を提供します。

2. **ゾーンベース測位（近接）：** トラッカーが1つまたは2つのビーコンの範囲内にある場合、最も近いビーコンへの近接性に基づいて位置を特定します。このモードは、自動チェックイン、資産が指定された部屋にあることの確認、または位置報告の頻度を下げてバッテリー寿命を節約するなど、よりシンプルな用途に最適です。

両方の方法をサポートすることで、このソリューションは、シンプルな存在検知からより詳細な座標ベースの監視まで、幅広い屋内追跡アプリケーションに対応する汎用性があり、展開しやすいシステムを提供します。

:::tip バンドルページへ移動

このソリューションを実装するために必要なすべての製品については、[屋内・屋外統合測位](https://www.seeedstudio.com/Indoor-Outdoor-Integrated-Positioning.html)バンドルページをご確認ください。

:::

### 主な機能と利点

- **費用対効果が高くスケーラブル**：手頃な価格のBLEビーコンを活用し、各部屋に高価なゲートウェイを設置する必要がありません。
- **長距離データ伝送**：単一のLoRaWANゲートウェイで建物全体やキャンパス全体をカバーでき、インフラストラクチャコストを大幅に削減します。
- **即座のSOS警報**：トラッカーには、押すとLoRaWAN経由で即座にSOS警報を送信し、迅速な緊急対応を可能にするパニックボタンが含まれています。
- **インテリジェント電源管理**：内蔵の加速度計を使用することで、トラッカーは動きが検出されたときのみ報告し、それ以外の場合は定期的な「ハートビート」信号を送信できます。これにより、多くの資産追跡アプリケーションで最適な設定により、バッテリー寿命を最大6か月まで大幅に延長できます。
- **簡単な展開**：BLEビーコンとLoRaWANゲートウェイの設定は簡単で、測位システムを迅速にオンラインにできます。
- **オープンソースソフトウェア**：プロジェクトは完全にオープンソースで、[GitHubリポジトリ](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5)を使用して独自のバックエンドサーバーを構築およびカスタマイズできます。

### 使用例

<div class="info-section">
    <div class="section-header">
        <h2>使用例</h2>
        <p>このソリューションは、幅広いゾーンベースの追跡および安全アプリケーションに理想的です：</p>
    </div>
    <ul class="info-list">
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg></div><div class="info-content"><h3>キャンパス・学校の安全</h3><p>学生とスタッフにウェアラブルトラッカーを提供します。内蔵のSOSボタンにより、キャンパス内のどこからでも最後に確認された位置とともに緊急警報を即座に送信でき、安心感を提供し、より迅速な対応時間を可能にします。</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg></div><div class="info-content"><h3>資産管理</h3><p>屋内と屋外の両方で貴重な資産の位置を追跡します（例：駐車場の車両）。移動時のみ報告するようにトラッカーを設定し、バッテリーを節約しながら不正な移動に対する警報を確実に受け取れます。</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c.266.059.537.1.82.118m7.542 2.72a3 3 0 01-4.682-2.72m0 0a3 3 0 013.741-.479m-.479 3.742a9.094 9.094 0 01-3.742.479m-12 .482c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479m0 0a3 3 0 01-3.741.479m5.421 2.053a3 3 0 01-4.682-2.72m0 0c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479M12 12a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3z" /></svg></div><div class="info-content"><h3>自動チェックイン・人員管理</h3><p>BLEビーコンの信号強度を調整することで、オフィスや介護施設の「チェックイン」ゾーンを作成できます。トラッカーを着用した人がゾーンに入ると、その存在が自動的に記録されます。</p></div></li>
    </ul>
</div>

### システムアーキテクチャ

システムは、シンプルでありながら強力な原理で動作します。モバイルトラッカーは固定ビーコンからの信号を聞き取り、聞こえた内容を中央サーバーに報告します。

![システムアーキテクチャ図](https://media-cdn.seeedstudio.com/media/wysiwyg/IoT_Device/_163.png)

### 前提条件

主要コンポーネントは以下の通りです：

1. **BLEビーコン**：これらは既知の場所（例：部屋の入り口、重要なゾーン）に配置された小さな固定送信機です。一意のIDを継続的にブロードキャストします。
2. **SenseCAP T1000 Tracker**：これは追跡したい資産や人に取り付けられるモバイルデバイスです。近くのBLEビーコンをスキャンし、最も強い信号を持つものを特定します。
3. **LoRaWANゲートウェイ**：トラッカーは最も近いBLEビーコンのIDを含むデータパケットをLoRaWAN経由でゲートウェイに送信します。
4. **ネットワーク・アプリケーションサーバー**：ゲートウェイはデータをLoRaWANネットワークサーバー（[SenseCraft Data](https://sensecap.seeed.cc/portal)）に転送し、それがアプリケーションサーバーにルーティングします。アプリケーションサーバーはビーコンIDとその実世界の位置のマップを保持し、トラッカーの位置を決定できます（例：「トラッカー#58はビーコン#12の近くにあり、これは会議室3にあります」）。

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
                  <p><span class="highlight">BLEビーコン検出：</span>精密な屋内・屋外測位のためのBLE 5.1をサポート。</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 9.393a15 15 0 0121.213 0" />
                      </svg>
                  </div>
                  <p><span class="highlight">広域ネットワーク：</span>長距離・低消費電力通信のためのLoRaWAN® Class A（v1.0.4）接続。</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                  </div>
                  <p><span class="highlight">動作検出：</span>リアルタイムの動作と静止状態検知のための内蔵加速度計。</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                  </div>
                  <p><span class="highlight">緊急ボタン：</span>ワンプレスで緊急警報をトリガーする独立したSOSボタン。</p>
              </li>
          </ul>
      </div>
  </div>

  <!-- Card 2: BLE Beacons -->
  <div class="seeed-feature-card">
    <div class="card-header">
        <h2><a href="https://www.seeedstudio.com/BC01-Indoor-Bluetooth-Beacon-p-5791.html">BLEビーコン</a></h2>
        <p>通常のBluetoothブロードキャスト</p>
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
                <p><span class="highlight">柔軟な展開：</span> 調整可能なカバレッジ半径のための設定可能な送信電力。</p>
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
                <p><span class="highlight">簡単設置：</span> 壁やその他の表面への簡単な取り付けのための粘着バッキング付き。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-radio-icon lucide-radio"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"/><path d="M19.075 4.933a10 10 0 0 1 0 14.134"/><path d="M4.925 19.067a10 10 0 0 1 0-14.134"/><path d="M7.753 16.239a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <p><span class="highlight">ブロードキャスト範囲：</span> 屋外最大75メートル、開放エリアの屋内最大120メートル。</p>
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
                <p><span class="highlight">広範囲カバレッジ：</span> 最大<span class="highlight">2km</span>の屋内カバレッジ半径で、安定した信号を確保。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c.266.059.537.1.82.118m7.542 2.72a3 3 0 01-4.682-2.72m0 0a3 3 0 013.741-.479m-.479 3.742a9.094 9.094 0 01-3.742.479m-12 .482c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479m0 0a3 3 0 01-3.741.479m5.421 2.053a3 3 0 01-4.682-2.72m0 0c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479M12 12a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3z" />
                    </svg>
                </div>
                <p><span class="highlight">大規模接続性：</span> 優れたパフォーマンスで<span class="highlight">200台</span>以上の同時デバイスをサポート。</p>
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
                <p><span class="highlight">統合ソリューション：</span> ネットワークの展開と管理を簡素化するための内蔵ローカルLoRaWANサーバー機能。</p>
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

1. **ビーコンの展開**: 施設全体の戦略的な場所にBLEビーコンを配置します。各ビーコンの固有IDとその物理的な場所を記録したマップまたはリストを作成します（例：`Beacon_ID_01: "メインエントランス"`、`Beacon_ID_02: "倉庫ゾーンA"`）。
2. **ゲートウェイのセットアップ**: LoRaWANゲートウェイをインターネットに接続し、選択したLoRaWANネットワークサーバーにパケットを転送するように設定します。
3. **アプリケーションの展開**: アプリケーションサーバー上で、報告されたビーコンIDをステップ3で記録した物理的な場所にマッピングするロジックを作成します。
4. **トラッカーの設定**: SenseCAP T1000をアクティベートし、LoRaWANネットワークサーバーにオンボードします。BLEスキャンモード用に設定されていることを確認します。
5. **可視化**: トラッカーが施設内を移動すると、最も近いビーコンを報告し、アプリケーションはダッシュボードまたはマップ上にその場所を表示できます。

### ステップ1: ハードウェアのセットアップ

まず、施設内に物理デバイスをセットアップする必要があります。

#### **1a. ビーコンの展開**

:::info
完全な技術仕様については、**[BC01 屋内Bluetoothビーコンドキュメント](/ja/bluetooth_beacon_for_SenseCAP_Traker/)**を参照してください。
:::

**メインエントランス、倉庫、オフィスエリア**などの施設内の戦略的な場所に**BLE（Bluetooth Low Energy）ビーコン**を配置することから始めます。
<div align="center">
<img class='img-responsive' width="360" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/10.5.png" alt="Indoor positioning 2d map"/>
</div>


システムにビーコン情報を追加する手順については、以下のビデオを参照してください。
追加のヘルプについては、[ヒントセクション](#tips)も確認できます。

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-configuration.mp4" type="video/mp4" />
  お使いのブラウザはビデオタグをサポートしていません。
</video>
</div>

<details>
<summary>BC01 ビーコンのパラメータのクイックビュー</summary>

| パラメータ     | デフォルト値                        |
| -------------- | ------------------------------------ |
| UUID           | FDA50693-A4E2-4FB1-AFCF-C6EB07647825 |
| Major          | 10001                                |
| Minor          | 19641                                |
| Measured power | -59dBm                               |
| Tx Power       | -30 - +4dBm、デフォルト 0dBm            |
| Adv Interval   | 100ms~10s、デフォルト 500ms             |
| Password       | seeed123（文字と数字）       |
| Device Name    | BC01（1-7文字）                |
| Soft Reboot    | seeed123（パスワードと同じ）    |

</details>

#### 1b. ゲートウェイのセットアップ

**LoRaWAN ゲートウェイ**の電源を入れ、インターネットに接続します。  
次に、使用している**ネットワークサーバー**に応じて以下の手順に従ってください。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="sensecap-portal" label="SenseCraft Data" default>

デフォルトでは、LoRaWAN ゲートウェイは [**SenseCraft Data**](https://sensecap.seeed.cc/portal/) プラットフォーム（旧 **SenseCAP Portal**）にデータを転送します。

1. [公式ユーザーマニュアル](/ja/quick_start_with_M2_MP)に従って、ゲートウェイが**オンライン**で**アカウントにリンク**されていることを確認してください。  
2. 接続が確認できたら、**次のステップ（ステップ2）に進む**ことができます。

  </TabItem>

  <TabItem value="chirpstack" label="ChirpStack（ローカル LoRaWAN サーバー）">

ゲートウェイと統合された**セルフホスト ChirpStack** サーバーを使用している場合、**ゲートウェイデータのリダイレクト**と**デコーダースクリプトの準備**が必要です。

1. **ゲートウェイの設定：** このガイドに従って[ゲートウェイのアップリンクデータを ChirpStack にリダイレクト](/ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration/)してください。  
2. **デコーダースクリプトのダウンロード：** ChirpStack は T1000 トラッカーからのデータを解釈するためにデコーダーが必要です。後の設定ステップで使用できるよう、以下のスクリプトをダウンロードしてください。
    - [**T1000 デコーダースクリプトをダウンロード**](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/TTN/SenseCAP_T1000_TTN_Decoder.js)
    **注意：** このスクリプトは**ChirpStack アプリケーション設定**に追加する必要があり、ゲートウェイデバイス自体には追加しません。

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-for-chripstack.mp4" type="video/mp4" />
  お使いのブラウザはビデオタグをサポートしていません。
</video>
</div>

  </TabItem>
</Tabs>

### ステップ 2：測位アプリケーションのインストール

Docker を使用してサーバーに SenseCraft 屋内測位アプリケーションをインストールします。
まずインターフェースを確認したい場合は、[ライブデモ](https://indoorpositioning-demo.seeed.cc/)をチェックできます。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png" alt="屋内測位アプリケーションのプレビュー"/>
</div>

#### インストールコマンドの実行

サーバーでターミナルを開き、以下のコマンドを実行します：


<Tabs>
  <TabItem value="global" label="グローバル" default>

```shell
docker run -p 5173:5173 -p 8022:8022 \
--name indoor-positioning \
--restart unless-stopped \
-v $PWD/db:/app/db/ \
-v $PWD/config:/app/server/config/json \
-d seeedcloud/sensecraft-indoor-positioning
```

  </TabItem>

  <TabItem value="mirror" label="ミラー">
  中国本土のユーザーは、[chsrc](https://chsrc.run/)を使用してソースを変更し、より高速化することができます。
  </TabItem>
</Tabs>

> 💡 注意：Windows でコマンドを実行する場合は、CMD ターミナルではなく PowerShell を使用してください。

**このコマンドの動作：**

- SenseCraft 屋内測位アプリケーションコンテナをダウンロードして開始します。
- `-p 5173:5173` により、ポート `5173` でウェブダッシュボードにアクセスできるようになります。
- ローカルディレクトリをマウントします：
  - `/app/db/` → データベースとマップを保存します。
  - `/app/server/config/json` → 設定ファイルを保存します。
- `-d` はアプリケーションをバックグラウンドで実行します。

---

コンテナが正常に開始されたら、ウェブブラウザを開いて以下にアクセスします：

👉 `http://<your_server_ip>:5173`

これで、サーバー上で SenseCraft 屋内測位ダッシュボードが実行されているのが確認できるはずです。

### ステップ 3：アプリケーションの設定

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="app-configuration-management"/>
</div>

#### 3a. ランタイム設定（LoRaWAN への接続）

この設定を使用して、アプリケーションを LoRaWAN ネットワークサーバーに接続し、トラッカーデータを受信します。
アプリケーションは **SenseCraft Data** と**ローカル ChirpStack サーバー**の両方に同時に接続できます。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-server-runtime-configuration.png" alt="app-server-runtime-configuration"/>
</div>

ダッシュボードで1つまたは両方の MQTT ソースを有効にします：

##### SenseCraft Data への接続

1. **SenseCAP OpenStream MQTT** をオンにします。
2. **ユーザー名**と **API キー**を入力します - これらは [Data OpenStream API クイックスタートガイド](/ja/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_quickstart/)から取得してください。

##### ChirpStack への接続

1. **ChirpStack MQTT** をオンにします。
2. **サーバーアドレス**と **Application ID** を入力します - MQTT トピックは自動入力されます。Application ID は ChirpStack アプリケーションページで確認できます。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/chirpstack-application-id.png" alt="chirpstack-application-id"/>
</div>

> **注意：** `{clientID}` フィールドは自動生成されます。編集しないでください。  
> **重要：** 変更後は、更新を有効にするために Docker コンテナを再起動してください。

##### その他の設定

これらのオプションはいつでも変更できます（再起動不要）：

- **認証** – ダッシュボードのログイン認証情報を更新します。
- **エリア測位** – ビーコン信号が弱いまたは少ない場合にトラッカーのおおよその位置を推定します。
- **トラッカーアクセス制御** – 測位可能なデバイスを制限します（すべてに開放またはホワイトリスト）。
- **Webhook** – HTTP POST を介して位置データをサービスにプッシュします。
#### 3b. マップとビーコンの設定

`Create` をクリックして最初のマップを作成します。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="アプリケーション設定管理"/>
</div>

このパネルで**マップデータ**をアップロードします。
現在、デモ版では**ポリラインエンティティ**を含む **GeoJSON 形式**のファイルのインポートのみサポートしています。
以下は参考用のサンプル JSON テンプレートです：

```json
{
  "map": {
    "width": 29.53000000000094,
    "height": 22.212853765822828,
    "entities": [
      {
        "type": "polyline",
        "points": [
          [12.894968342021272, 17.07477114091087],
          [12.894968342021272, 17.114771140910868]
        ],
        "closed": false
      },
      {
        "type": "polyline",
        "points": [
          [12.944968342021284, 17.114771140910868],
          [12.894968342021272, 17.07477114091087]
        ],
        "closed": false
      }
    ]
  },
  "beacons": {}
}
```

この JSON は座標ベースの**ポリライン**を使用して **2D フロアレイアウト**を定義し、壁や境界などのマップ要素を表現します。
現在のデモ版では他のジオメトリタイプはサポートされていません。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/import-map-geo-json.png" alt="import-map-geo-json"/>
</div>

2. **ビーコンの追加**

ビーコンセクションで、各ビーコンの MAC アドレス、ID、位置を追加します。
[ステップ 1a](#1a-ビーコンの配置)で作成したリストを使用して、アップロードしたマップ上に直接配置できます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/maps-add-beacons.png" alt="maps-add-beacons"/>
</div>

3. **環境要因の調整（オプション）**

信号強度（**RSSI**）を距離に変換する方法を調整して、位置精度を微調整します。

- デフォルト値（~2.0）は開放エリアでうまく機能します。
- 複雑な屋内環境では、**1.8 から 4.0** の間の値を試してください。
- デフォルト設定から始めて、必要に応じて後で調整してください。

### ステップ 4：トラッカーのアクティベートと可視化

最後のステップは、トラッカーの電源を入れてマップ上で確認することです。

<div align="center">
<img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/tracker-visualize-on-map.png" alt="tracker-visualize-on-map"/>
</div>

1. **SenseCAP T1000 トラッカーをアクティベート**し、LoRaWAN ネットワークサーバーにオンボードします。ゲートウェイがオンラインで、トラッカーデバイスが LNS サーバーに「登録」されていることを確認してください。詳細は[ステップ 1b](#1b-ゲートウェイのセットアップ)を確認してください。
2. **BLE スキャンモードに設定されていることを確認**し、ビーコンを検出できるようにします。ヘルプについては以下のビデオを確認してください。
3. **可視化：** トラッカーが施設内を移動すると、最寄りのビーコンを検出してその位置を報告します。ダッシュボードのマップ上でアイコンが移動するのが確認できます。

<div style={{ textAlign: 'center' }}>
<video width="480" height="640" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-tracker-configuration.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
<p><em>ChirpStack を使用する場合は `Other Platform` を選択してください。</em></p>
<p><em>SenseCraft Data を使用する場合は、デフォルトのプラットフォーム設定（The Things Network 用の SenseCAP）を保持してください。</em></p>
</div>

## アプリケーション機能概要

### 機能 1: データプッシュ（Webhook & WebSocket）

システムからリアルタイムデータを取得する方法は2つあります：

- **Webhook:** 設定で説明したように、これは提供されたURLにデータをプッシュします。
- **WebSocket:** リアルタイムアプリケーション用に、Basic HTTP認証を使用して `/ws` エンドポイントに接続できます。`sos`、`tracker_update`（三角測量）、`tracker_location_approximate`（近接）のデータ形式は、元の文書で提供されているJSON例で詳しく説明されています。

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

### 機能 2: 2つの測位モード

システムは2つの測位方法をサポートしています：

1. **三角測量:** トラッカーが**3つ以上**のビーコンを検出すると、正確な(x, y)座標を計算します。これはデフォルトで最も正確なモードです。
2. **近接（エリア測位）:** これを有効にして、トラッカーが**1つ**のビーコンしか検出できない場合、計算された半径内でそのビーコンの「近く」にいると位置を報告します。これはすべてのエリアでカバレッジを確保するのに便利です。

*三角測量*

<table align="center">
<tr>
    <th>三角測量</th>
    <th>三角測量（SOS）</th>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/Trilateration-normal.png" alt="area-positioning-normal" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/Trilateration-sos.png" alt="area-positioning-sos" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

*エリア測位*

<table align="center">
<tr>
    <th>エリア測位</th>
    <th>エリア測位（SOS）</th>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/area-positioning-normal.png" alt="area-positioning-normal" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/area-positioning-sos.png" alt="area-positioning-sos" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

### 機能 3: アラート履歴の表示

マップ上のトラッカーアイコンをクリックすることで、任意のトラッカーのアラート履歴（例：SOSボタンの押下）を表示できます。システムは各新しいアラートをログに記録し、解決されるまでアクティブなアラートの通知をプッシュし続けます。

<div align="center">
<img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/alert-history-records.png" alt="alert-history-records"/>
</div>

### 機能 4: ビーコンUUIDによるフィルタリング

関連するビーコンUUIDによってマップ上に表示されるトラッカーをフィルタリングできます。これにより、特定のエリアや資産をより集中的に監視できます。ハッキングされないよう価値があります。

<div align="center">
<img class='img-responsive' width="360" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/sensecraft-ble-filter.png" alt="sensecraft-ble-filter"/>
</div>

## 参考資料とリソース

- **ランディングページ**: [SenseCraft 屋内測位ソリューション](https://www.seeed.cc/solutions/campus-safety-management)
- **Docker イメージ**: [seeedcloud/sensecraft-indoor-positioning - Docker Hub](https://hub.docker.com/r/seeedcloud/sensecraft-indoor-positioning)
- **ライブデモサイト**: [IndoorPositioning](https://indoorpositioning-demo.seeed.cc/)

## ヒント

ビーコンをより効率的に展開・設定するための便利なヒントをご紹介します：

### 1. ビーコン情報の記録
各ビーコンの**固有のMACアドレス**と**設置場所**を記録することを**強く推奨**します。  
これは[ソフトウェア設定ステップ](#3b-map-and-beacon-configuration)で**重要**になり、マッピングやトラブルシューティング時に**正しいビーコンを簡単に識別・選択**するのに役立ちます。

| **MACアドレス** | **場所**         | **ビーコンID** |
| --------------- | ---------------- | ------------- |
| c30000564b31    | メインエントランス    | 01            |
| c30000564b32    | 倉庫ゾーンA | 02            |
| c30000564b33    | コーナーオフィス    | 03            |

### 2. すべてのビーコンに一貫したUUIDを使用
管理を簡単にするため、**SenseCraft アプリ**を使用してすべてのビーコンに一貫した**UUID**を割り当てることができます。  
これにより、トラッカーが**自分のデバイスのみ**をリッスンし、**近くの他のビーコンを無視**することが保証されます。  
詳細については[機能 4: ビーコンUUIDによるフィルタリング](#機能-4-ビーコンuuidによるフィルタリング)をご確認ください。

### 3. 安定した設置場所の選択
安定したBluetooth信号を確保するため、**固定された、開放的で、障害物のない**エリアにビーコンを設置してください。  
干渉を引き起こす可能性のある**金属表面**、**電気パネル**、**Wi-Fiルーター**の近くへの設置は避けてください。

### 4. 各ビーコンのラベル付けと固定
メンテナンス時の混乱を避けるため、記録表と一致する**見やすいラベル**（例：Beacon-01、Beacon-02）を貼り付けてください。  
偶発的な移動を防ぐため、デバイスが**しっかりと固定**されていることを確認してください。

### 5. 信号範囲の確認
設置を確定する前に、BLEスキャナーアプリや設定ツールを使用して**信号カバレッジ**をテストし、対象ゾーンで**一貫した検出**が可能であることを確認してください。

### 6. ビーコンデータの迅速な追加・調整

*GeoJSON形式*の設定ファイルを使用している場合、エクスポートしたマップファイルを直接編集してビーコンデータを迅速に追加・調整し、その後アプリケーションに再インポートすることもできます。

```json
{
  "map": {
    "width": 29.53000000000094,
    "height": 22.212853765822828,
    "entities": [
      {
        "type": "polyline",
        "points": [
          [12.894968342021272, 17.07477114091087],
          [12.894968342021272, 17.114771140910868]
        ],
        "closed": false
      },
      {
        "type": "polyline",
        "points": [
          [12.944968342021284, 17.114771140910868],
          [12.894968342021272, 17.07477114091087]
        ],
        "closed": false
      }
    ]
  },
  "beacons": {
    "beacon-01": {
      "uuid": "FDA50693-A4E2-4FB1-AFCF-C6EB07647825",
      "major": 10001,
      "minor": 19641,
      "x": 26.38,
      "y": 4.4,
      "txPower": -59,
      "displayName": "Corner",
      "macAddress": "C3:00:00:58:4B:38",
    }
  }
}
```

> ヒント: JSONを直接編集することは、複数のビーコンを一度に追加したり、ダッシュボード外で座標を微調整したりする際に便利です。

## FAQ

<details>
<summary>なぜトラッカーが位置を報告しないのですか？</summary>

- **考えられる原因:** LoRaWAN接続に問題がある可能性があります。
- **解決策:** LoRaWANゲートウェイのステータスを確認し、オンラインで接続されていることを確認してください。また、トラッカーのDevice EUIがネットワークサーバーに正しく登録されていることを確認してください。

</details>

<details>
<summary>トラッカーの位置が不正確なのはなぜですか？</summary>

- **考えられる原因：** BLEビーコンの配置が干渉や弱い信号カバレッジを引き起こしている可能性があります。
- **解決策：** ビーコンの送信電力を調整してみてください。壁や機械による信号の遮蔽を減らすために、ビーコンの位置を変更する必要がある場合もあります。

</details>

<details>
<summary>トラッカーのバッテリーがすぐに消耗するのはなぜですか？</summary>

- **考えられる原因：** レポート頻度が高すぎて設定されており、デバイスが必要以上に頻繁にデータを送信している可能性があります。
- **解決策：** モーション検出設定を最適化して、トラッカーが動いているときのみレポートするようにしてください。電力を節約するために、レポート間隔（位置更新間の時間）を長くすることもできます。

</details>

<details>
<summary>位置データが欠落したり表示されないのはなぜですか？</summary>

- **考えられる原因：** データベースやAPIに問題がある可能性があり、多くの場合、データペイロードの解釈方法に関連しています。
- **解決策：** まず、アプリケーションサーバーのペイロードデコーダーが正しく動作していることを確認してください。デコーダーが正しい場合は、アプリケーションサーバーのログでエラーや接続の問題がないかチェックしてください。

</details>

<details>
<summary>SOSアラートが迅速に受信されないのはなぜですか？</summary>

- **考えられる原因：** LoRaWANネットワークが混雑しているか、デバイスクラスが緊急メッセージに適していない可能性があります。
- **解決策：** SOSアラートのような時間が重要なアプリケーションでは、トラッカーが**Class Cモード**を使用するように設定されていることを確認してください。これにより、デバイスの受信機が継続的にオンになり、サーバーからのメッセージを即座に受信できるようになります。

</details>

<details>
<summary>BC01ビーコンのアドバタイジング間隔と送信電力を調整するにはどうすればよいですか？</summary>

**SenseCraftアプリ**を使用してBC01ビーコンを設定できます。

1. [Google Play Store](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate)または[Apple App Store](https://apps.apple.com/us/app/sensecraft/id1619944834)からSenseCraftアプリをインストールします。
2. アプリを開き、スマートフォンのBluetoothを有効にします。
3. 近くのビーコンをスキャンし、設定したいビーコンを選択します。
4. デフォルトパスワード「**seeed123**」を入力して設定にアクセスします。
5. アドバタイジング間隔（100ms〜10s）と送信電力（-30dBm〜+4dBm）を必要に応じて調整します。
6. 変更を保存します。

</details>

## 変更履歴

**2025-11-10:**

- ビーコンの配置とゲートウェイ設定のガイダンスを見直し、配置のベストプラクティス、参考資料、SenseCraft DataとChirpStackのネットワークサーバー固有の指示を明確化しました。
- ランタイム設定とマップ/ビーコン設定セクションを拡張し、より明確なUIガイダンス、GeoJSONインポートサンプル、環境要因に対するオプションの調整ヒントを追加しました。
- ビーコンの記録管理、UUID管理、マウント、検証、一括編集をカバーする専用のTipsセクションを追加し、デプロイメントのスケールアップとトラブルシューティングを容易にしました。
