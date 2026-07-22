---
title: LoRaWAN を用いた Bluetooth 屋内測位システム
description: SenseCAP Tracker を使用した信頼性の高い屋内測位ソリューションです。Bluetooth による高精度な位置追跡と LoRaWAN による長距離データ伝送を組み合わせ、容易な導入を実現します。
keywords:
  - Bluetooth
  - LoRaWAN
  - SenseCAP Tracker
  - 屋内測位
  - アセットトラッキング
  - SOS
  - キャンパスセキュリティ
slug: /solutions/indoor-positioning-bluetooth-lorawan-tracker
sidebar_position: 1
last_update:
  date: 05/31/2026
  author: Spencer
createdAt: '2025-09-10'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/ja/solutions/indoor-positioning-bluetooth-lorawan-tracker/
---

## はじめに

### 概要

屋内測位は多くの業界で共通の課題です。UWB のような高精度システムも存在しますが、高コストかつ複雑になりがちです。本ソリューションは、2 つの強力な無線技術、すなわち位置検知用の **Bluetooth Low Energy (BLE)** と長距離・低消費電力のデータ伝送を行う **LoRaWAN** を組み合わせることで、柔軟かつコスト効率の高い代替手段を提供します。

このシステムは [SenseCAP T1000 Tracker](/ja/SenseCAP_T1000_tracker/Introduction) を中心に構築されており、2 つの異なる測位モードをサポートします。これにより、ニーズに応じて精度とバッテリー寿命のバランスを取ることができます。

1. **高精度トラッキング（三辺測量）:** トラッカーが **3 つ以上** の BLE ビーコンからの信号を検出すると、マップ上で自らの正確な (x, y) 座標を算出できます。このモードは、アセットや人員の移動を追跡し、定期的または移動時に正確な位置情報を提供する用途に最適です。

2. **ゾーンベース測位（近接）:** トラッカーが 1 つまたは 2 つのビーコンの範囲内にある場合、最も近いビーコンへの近接情報に基づいて位置を特定します。このモードは、自動チェックイン、アセットが指定された部屋にあることの確認、あるいは位置報告頻度を下げてバッテリー寿命を延ばしたいといった、よりシンプルなユースケースに最適です。

両方の方式をサポートすることで、本ソリューションは、単純な在席検知から、より詳細な座標ベースのモニタリングまで、幅広い屋内トラッキング用途に対応できる柔軟で導入しやすいシステムを提供します。

:::tip SenseCraft Solution で数分でデプロイ

このシステムを最速で稼働させる方法は、**SenseCraft Solution** プラットフォーム上の **[Campus-level BLE Beacon Positioning System](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)** を利用することです。

**Deploy** をクリックし、キットサイズ（**Starter / Standard / Enterprise**）を選択すると、SenseCraft Solution が、位置測位アプリケーションのインストール（手動で Docker コマンドを実行する必要はありません）からビーコン、ゲートウェイ、トラッカーのセットアップまで、すべての手順を順番に案内します。

👉 **[このソリューションをデプロイ →](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)**

:::

:::tip バンドルページへ移動

本ソリューションの実装に必要な製品がすべて揃った [Indoor & Outdoor Integrated Positioning](https://www.seeedstudio.com/Indoor-Outdoor-Integrated-Positioning.html) バンドルページもぜひご覧ください。

:::

### 主な特長とメリット

- **低コストかつスケーラブル**: 手頃な BLE ビーコンを活用し、すべての部屋に高価なゲートウェイを設置する必要をなくします。
- **長距離データ伝送**: 1 台の LoRaWAN ゲートウェイで建物全体やキャンパス全体をカバーでき、インフラコストを大幅に削減します。
- **即時 SOS アラート**: トラッカーにはパニックボタンが搭載されており、押すとすぐに LoRaWAN 経由で SOS アラートを送信し、迅速な緊急対応を可能にします。
- **インテリジェントな電源管理**: 内蔵加速度センサーを使用することで、トラッカーは動きが検知されたときのみ報告し、それ以外は定期的な「ハートビート」信号を送信するようにできます。これにより、多くのアセットトラッキング用途で、最適な設定時には最大 6 か月までバッテリー寿命を大幅に延長できます。
- **シンプルな導入**: BLE ビーコンと LoRaWAN ゲートウェイのセットアップは簡単で、測位システムをすばやくオンラインにできます。
- **すぐに導入可能**: [SenseCraft Solution](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan) プラットフォームを使えばワンクリックで、セルフホストする場合でも単一の Docker コマンドで、システム全体を数分で稼働させられます。アプリケーションは完全な[オープンソース](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5)であり、必要に応じてカスタマイズすることもできます。

### ユースケース

<div class="info-section">
    <div class="section-header">
        <h2>ユースケース</h2>
        <p>このソリューションは、幅広いゾーンベースのトラッキングおよび安全管理アプリケーションに最適です。</p>
    </div>
    <ul class="info-list">
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg></div><div class="info-content"><h3>キャンパス・学校の安全対策</h3><p>学生や教職員にウェアラブルトラッカーを配布します。内蔵の SOS ボタンにより、キャンパス内のどこからでも、最後に確認された位置情報付きの緊急アラートを即座に送信でき、安心感を提供するとともに、より迅速な対応を可能にします。</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg></div><div class="info-content"><h3>アセット管理</h3><p>屋内外（例：駐車場内の車両）を問わず、貴重なアセットの位置を追跡します。トラッカーを移動時のみ報告するように設定することで、バッテリーを節約しつつ、不正な移動があった場合には確実に通知を受け取ることができます。</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c.266.059.537.1.82.118m7.542 2.72a3 3 0 01-4.682-2.72m0 0a3 3 0 013.741-.479m-.479 3.742a9.094 9.094 0 01-3.742.479m-12 .482c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479m0 0a3 3 0 01-3.741.479m5.421 2.053a3 3 0 01-4.682-2.72m0 0c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479M12 12a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3z" /></svg></div><div class="info-content"><h3>自動チェックインと人員管理</h3><p>BLE ビーコンの信号強度を調整することで、オフィスや介護施設向けの「チェックイン」ゾーンを作成できます。トラッカーを身に着けた人がゾーンに入ると、その在席情報が自動的に記録されます。</p></div></li>
    </ul>
</div>

### システムアーキテクチャ

このシステムは、シンプルでありながら強力な原理で動作します。モバイルトラッカーが固定ビーコンからの信号を受信し、その内容を中央サーバーへ報告します。

![システムアーキテクチャ図](https://media-cdn.seeedstudio.com/media/wysiwyg/IoT_Device/_163.png)

### 前提条件

主な構成要素は次のとおりです。

1. **BLE ビーコン**: これらは既知の場所（例：部屋の入口、重要なゾーン）に設置された小型の固定送信機です。常に一意の ID をブロードキャストします。
2. **SenseCAP T1000 Tracker**: 追跡したいアセットや人物に取り付けるモバイルデバイスです。周囲の BLE ビーコンをスキャンし、最も信号の強いビーコンを特定します。
3. **LoRaWAN ゲートウェイ**: トラッカーは、最も近い BLE ビーコンの ID を含むデータパケットを LoRaWAN 経由でゲートウェイに送信します。
4. **ネットワーク & アプリケーションサーバー**: ゲートウェイはデータを LoRaWAN ネットワークサーバー（[SenseCraft Data](https://sensecap.seeed.cc/portal)）に転送し、その後アプリケーションサーバーへルーティングします。アプリケーションサーバーはビーコン ID とその実世界での位置のマップを保持しており、それに基づいてトラッカーの位置を特定できます（例：「トラッカー #58 はビーコン #12 の近くにあり、それは会議室 3 にある」）。

開始する前に、以下を用意してください。

- SenseCAP T1000 Tracker 1 台
- 1 個以上の BLE ビーコン
- インターネットに接続された LoRaWAN ゲートウェイ
- Docker がインストールされたサーバーまたはコンピュータ

<div class="seeed-features-container">
    <div class="seeed-features-grid">

  <!-- Card 1: SenseCAP T1000 Tracker -->
  <div class="seeed-feature-card">
      <div class="card-header">
          <h2><a href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html">SenseCAP T1000 Tracker</a></h2>
          <p>BLE スキャン機能を備えた LoRaWAN® モバイルトラッカー</p>
      </div>
      <div class="card-body">
          <ul class="features-list">
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                  </div>
                  <p><span class="highlight">BLE ビーコン検出:</span> 高精度な屋内外測位のために BLE 5.1 をサポート。</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 9.393a15 15 0 0121.213 0" />
                      </svg>
                  </div>
                  <p><span class="highlight">広域ネットワーク:</span> 長距離・低消費電力通信のための LoRaWAN® Class A(v1.0.4) 接続。</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                  </div>
                  <p><span class="highlight">モーション検知:</span> 内蔵加速度センサーにより、リアルタイムの動作および静止状態を検知。</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                  </div>
                  <p><span class="highlight">緊急ボタン：</span>ワンプレスで緊急アラートを発報できる独立したSOSボタン。</p>
              </li>
          </ul>
      </div>
  </div>

  <!-- Card 2: BLE Beacons -->
  <div class="seeed-feature-card">
    <div class="card-header">
        <h2><a href="https://www.seeedstudio.com/BC01-Indoor-Bluetooth-Beacon-p-5791.html">BLE Beacons</a></h2>
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
                <p><span class="highlight">プロトコル互換：</span>Bluetooth® LE 5.0 | iBeaconおよびEddystoneフォーマットを完全サポート。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.572a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                    </svg>
                </div>
                <p><span class="highlight">柔軟な展開：</span>送信電力を設定可能で、カバレッジ半径を調整可能。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="size-2">
                    <path d="M4 7.75A.75.75 0 0 1 4.75 7h5.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-5.5A.75.75 0 0 1 4 8.25v-.5Z" />
                    <path fill-rule="evenodd" d="M3.25 4A2.25 2.25 0 0 0 1 6.25v3.5A2.25 2.25 0 0 0 3.25 12h8.5A2.25 2.25 0 0 0 14 9.75v-.085a1.5 1.5 0 0 0 1-1.415v-.5a1.5 1.5 0 0 0-1-1.415V6.25A2.25 2.25 0 0 0 11.75 4h-8.5ZM2.5 6.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-3.5Z" clip-rule="evenodd" />
                </svg>
                </div>
                <p><span class="highlight">長寿命：</span>標準設定で最大<span class="highlight">2年間</span>のバッテリー寿命。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.456-2.456L11.25 18l1.938-.648a3.375 3.375 0 002.456-2.456L16.25 13.5l.648 1.938a3.375 3.375 0 002.456 2.456L21 18l-1.938.648a3.375 3.375 0 00-2.456 2.456z" />
                    </svg>
                </div>
                <p><span class="highlight">簡単な設置：</span>壁やその他の表面に簡単に取り付けられる粘着テープ付き。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-radio-icon lucide-radio"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"/><path d="M19.075 4.933a10 10 0 0 1 0 14.134"/><path d="M4.925 19.067a10 10 0 0 1 0-14.134"/><path d="M7.753 16.239a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <p><span class="highlight">ブロードキャスト範囲：</span>屋外で最大75メートル、屋内の開放エリアで最大120メートル。</p>
            </li>
        </ul>
    </div>
</div>

  <!-- Card 3: SenseCAP M2 Multi-Platform Gateway -->
  <div class="seeed-feature-card">
    <div class="card-header">
        <h2><a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html">SenseCAP M2 Multi-Platform Gateway</a></h2>
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
                <p><span class="highlight">広いカバレッジ：</span>屋内で最大<span class="highlight">2 km</span>のカバレッジ半径を実現し、安定した信号を確保。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c.266.059.537.1.82.118m7.542 2.72a3 3 0 01-4.682-2.72m0 0a3 3 0 013.741-.479m-.479 3.742a9.094 9.094 0 01-3.742.479m-12 .482c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479m0 0a3 3 0 01-3.741.479m5.421 2.053a3 3 0 01-4.682-2.72m0 0c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479M12 12a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3z" />
                    </svg>
                </div>
                <p><span class="highlight">大規模接続：</span>優れたパフォーマンスで<span class="highlight">200台以上</span>のデバイスを同時接続可能。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                    </svg>
                </div>
                <p><span class="highlight">複数のバックホール：</span>Ethernet、Wi-Fi、4Gなど複数のネットワークバックホールオプションを提供。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008z" />
                    </svg>
                </div>
                <p><span class="highlight">統合ソリューション：</span>ローカルLoRaWANサーバー機能を内蔵し、ネットワークの展開と管理を簡素化。</p>
            </li>
        </ul>
    </div>
  </div>
</div>
</div>

## はじめにガイド

<div align="center">
<img class='img-responsive' width="1280" src="https://mermaid.ink/img/pako:eNo9jk9vwjAMxb9K5HOp2tE_JIdJQDcuO41phzUcotYtFW0SpYkYVHz3BSrmk9_Pz_aboFI1AoOmV-fqKIwlH59cEl_rcm-9PpDF4pVsygJ1ry5kg6JScpzpttyjdZrshMWzuMyweFrXWs_krdwq2XStM0i-jKhOaObBe_ndjU703RVnsPPOQfdo8cAlBNCargZmjcMABjSDuEuY7gE52CMOyIH5thbmxIHLm9_RQv4oNTzXjHLtEVgj-tErp2uftehEa8TwTw3KGs1WOWmB0Sh9HAE2wS-wLA6XeULzlyyL0piuaBLABVgc0ZBmeZymyTJa0SjJbgFcH3-jcJWntz-sxGvR?type=png" alt="Indoor positioning 2d map"/>
</div>

このシステムを展開する方法は2通りあります — **ステップ2**ではどちらか一方を選択してください：

- **推奨 — SenseCraft Solution（ガイド付き）：** [ソリューションページ](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)を開き、**Deploy** をクリックしてキットサイズを選択します。SenseCraft Solutionが位置測位アプリケーションを自動でインストールし、ハードウェアセットアップを最初から最後まで案内します。
- **手動 — Dockerでセルフホスト：** 自分で運用したい場合は、[ステップ2](#step-2-install-the-positioning-application)で説明している手動Docker手順を使用します。

どちらの方法でも、すべてのデプロイは同じ5つのステージに従います：

1. **ビーコンを配置**：施設全体の戦略的な場所にBLEビーコンを設置します。各ビーコンのユニークIDと物理的な設置場所（例：`Beacon_ID_01: "Main Entrance"`、`Beacon_ID_02: "Warehouse Zone A"`）を記録したマップまたはリストを作成します。
2. **ゲートウェイをセットアップする**: LoRaWAN ゲートウェイをインターネットに接続し、選択した LoRaWAN ネットワークサーバーにパケットを転送するように設定します。
3. **アプリケーションをデプロイする**: すぐに使える SenseCraft Indoor Positioning アプリケーションをインストールします — SenseCraft Solution からワンクリック、または Docker を使ったセルフホスト（[Step 2](#step-2-install-the-positioning-application) を参照）。カスタムバックエンドのコーディングは不要です。
4. **トラッカーを設定する**: SenseCAP T1000 を有効化し、LoRaWAN ネットワークサーバーにオンボードします。BLE スキャンモードに設定されていることを確認します。
5. **可視化**: トラッカーが施設内を移動すると、最も近いビーコンを報告し、アプリケーションはその位置をダッシュボードや地図上に表示できます。

### Step 1: ハードウェアをセットアップする

まず、施設内に物理デバイスを設置する必要があります。

#### **1a. ビーコンを配置する**

:::info
完全な技術仕様については、**[BC01 Indoor Bluetooth Beacon ドキュメント](/ja/bluetooth_beacon_for_SenseCAP_Traker/)** を参照してください。
:::

まず、施設内の戦略的な場所 — 例えば **正面入口、倉庫、オフィスエリア** などに **BLE（Bluetooth Low Energy）ビーコン** を設置します。
<div align="center">
<img class='img-responsive' width="360" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/10.5.png" alt="Indoor positioning 2d map"/>
</div>

以下のビデオを参照して、ビーコン情報をシステムに追加する手順を確認してください。
追加のヘルプについては、[Tips セクション](#tips) も確認できます。

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-configuration.mp4" type="video/mp4" />
  お使いのブラウザは video タグをサポートしていません。
</video>
</div>

<details>
<summary>BC01 ビーコンのパラメータのクイックビュー</summary>

| パラメータ       | デフォルト値                           |
| -------------- | ------------------------------------ |
| UUID           | FDA50693-A4E2-4FB1-AFCF-C6EB07647825 |
| Major          | 10001                                |
| Minor          | 19641                                |
| Measured power | -59dBm                               |
| Tx Power       | -30 - +4dBm, デフォルト 0dBm         |
| Adv Interval   | 100ms~10s, デフォルト 500ms          |
| Password       | seeed123 (英字と数字)                 |
| Device Name    | BC01 (1-7 文字)                       |
| Soft Reboot    | seeed123 (パスワードと同じ)           |

</details>

#### 1b. ゲートウェイをセットアップする

**LoRaWAN ゲートウェイ** の電源を入れ、インターネットに接続します。  
次に、使用している **ネットワークサーバー** に応じて、以下の手順に従います。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="sensecap-portal" label="SenseCraft Data" default>

デフォルトでは、LoRaWAN ゲートウェイは [**SenseCraft Data**](https://sensecap.seeed.cc/portal/) プラットフォーム（旧 **SenseCAP Portal**）にデータを転送します。

1. ゲートウェイが **オンライン** であり、**アカウントにリンクされている** ことを確認するために、[公式ユーザーマニュアル](/ja/quick_start_with_M2_MP) に従ってください。  
2. 接続が確認できたら、**次のステップ（Step 2）に進む** ことができます。

</TabItem>

<TabItem value="chirpstack" label="ChirpStack (ローカル LoRaWAN サーバー)">

ゲートウェイと統合された **セルフホストの ChirpStack** サーバーを使用している場合は、**ゲートウェイデータの転送先を変更** し、**デコーダースクリプトを準備** する必要があります。

1. **ゲートウェイを設定する:** このガイドに従って、[ゲートウェイのアップリンクデータを ChirpStack にリダイレクト](/ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration/) します。  
2. **デコーダースクリプトをダウンロードする:** ChirpStack は T1000 トラッカーからのデータを解釈するためのデコーダーを必要とします。後の設定ステップで使えるように、以下のスクリプトをダウンロードしておきます。
    - [**T1000 デコーダースクリプトをダウンロード**](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/TTN/SenseCAP_T1000_TTN_Decoder.js)
    **注:** このスクリプトは **ChirpStack Application Settings** に追加する必要があり、ゲートウェイデバイス自体には追加しません。

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-for-chripstack.mp4" type="video/mp4" />
  お使いのブラウザは video タグをサポートしていません。
</video>
</div>

</TabItem>
</Tabs>

### Step 2: ポジショニングアプリケーションをインストールする

ポジショニングアプリケーションは軽量な Web サービス（単一の Docker コンテナ）で、MQTT 経由でトラッカーデータを取り込み、ライブマップを描画します。インストール方法は 2 通りあるので、自分に合った方法を選んでください。

まずインターフェースを試してみたい場合は、[ライブデモ](https://indoorpositioning-demo.seeed.cc/) を確認できます。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png" alt="Indoor positioning application preview"/>
</div>

<Tabs>
<TabItem value="sensecraft-solution" label="SenseCraft Solution (推奨)" default>

最も簡単な方法 — ターミナルも手動コマンドも不要です。

1. **[Campus-level BLE Beacon Positioning System](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)** のソリューションページを開きます。
2. **Deploy** をクリックし、キットのサイズ（**Starter / Standard / Enterprise**）を選択します。
3. SenseCraft Solution が、ローカルマシン上または SSH 経由でリモートサーバー上にポジショニングアプリケーションをインストールし、サービスが正常になると自動的にダッシュボードを開きます。

ダッシュボードが開いたら、LoRaWAN データソースを接続するために [Step 3](#step-3-configure-the-application) に進みます。

</TabItem>

<TabItem value="manual-docker" label="手動 (Docker)">

セルフホストを希望しますか？ サーバー上でターミナルを開き、次のコマンドを実行します:

```shell
docker run -p 5173:5173 \
--name indoor-positioning \
--restart unless-stopped \
-v ./db:/app/db/ \
-v ./config:/app/server/config/json \
-v ./uploads:/app/uploads \
-d seeedcloud/sensecraft-indoor-positioning
```

> 💡 注: Windows でコマンドを実行する場合は、CMD ターミナルではなく PowerShell を使用してください。
> 中国本土のユーザーは、[chsrc](https://chsrc.run/) を使用して Docker レジストリミラーを切り替えることで、より高速にプルできます。

**このコマンドが行うこと:**

- SenseCraft Indoor Positioning アプリケーションコンテナをダウンロードして起動します。
- `-p 5173:5173` により、Web ダッシュボードをポート `5173` でアクセス可能にします。
- ローカルディレクトリをマウントします:
  - `/app/db/` → データベースとマップを保存します。
  - `/app/server/config/json` → 設定ファイルを保存します。
  - `/app/uploads` → アップロードされたファイルを保存します。
- `-d` により、アプリケーションをバックグラウンドで実行します。

</TabItem>
</Tabs>

---

アプリケーションが起動したら、Web ブラウザを開いて次のアドレスにアクセスします:

👉 `http://<your_server_ip>:5173`

これで、サーバー上で SenseCraft Indoor Positioning ダッシュボードが動作しているのが確認できるはずです。

:::info ログイン認証情報

- **Username:** `admin`
- **Password:** `83EtWJUbGrPnQjdCqyKq`
:::

### Step 3: アプリケーションを設定する

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="app-configuration-management"/>
</div>

#### 3a. ランタイム設定（LoRaWAN への接続）

この設定を使用して、アプリケーションを LoRaWAN ネットワークサーバーに接続し、トラッカーデータを受信します。
アプリケーションは **SenseCraft Data** と **ローカル ChirpStack サーバー** の両方に同時に接続できます。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-server-runtime-configuration.png" alt="app-server-runtime-configuration"/>
</div>

ダッシュボードで、1 つまたは両方の MQTT ソースを有効にします:

##### SenseCraft Data に接続する

1. **SenseCAP OpenStream MQTT** をオンにします。
2. **Username** と **API Key** を入力します - これらは [Data OpenStream API クイックスタートガイド](/ja/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_quickstart/) から取得します。

##### ChirpStack に接続する

1. **ChirpStack MQTT** をオンにします。
2. **サーバーアドレス** と **Application ID** を入力します - MQTT トピックは自動入力されます。Application ID は ChirpStack のアプリケーションページで確認できます。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/chirpstack-application-id.png" alt="chirpstack-application-id"/>
</div>

> **注:** `{clientID}` フィールドは自動生成されるため、編集しないでください。  
> **重要:** 変更を加えた後は、Docker コンテナを再起動して更新を反映させてください。

##### その他の設定

これらのオプションはいつでも変更できます（再起動は不要です）:

- **Authentication** – ダッシュボードのログイン認証情報を更新します。
- **Area Positioning** – ビーコン信号が弱い、またはまばらな場合にトラッカーのおおよその位置を推定します。
- **Tracker Access Control** – 位置特定を許可するデバイスを制限します（すべて許可またはホワイトリスト指定）。
- **Webhook** – HTTP POST を介して位置データを自分のサービスにプッシュします。

#### 3b. マップとビーコンの設定

`Create` をクリックして、最初のマップを作成します。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="Application Configuration Management"/>
</div>

このパネルで **マップデータ** をアップロードします。
現在、デモ版では **ポリラインエンティティ** を含む **GeoJSON 風フォーマット** のファイルのみインポートをサポートしています。
参考として、以下にサンプル JSON テンプレートを示します:

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

この JSON は、座標ベースの **ポリライン** を使用して **2D フロアレイアウト** を定義しており、壁や境界線などのマップ要素を表します。
他のジオメトリタイプは、現在のデモバージョンではサポートされていません。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/import-map-geo-json.png" alt="import-map-geo-json"/>
</div>

2. **ビーコンを追加する**

Beacons セクションで、各ビーコンの MAC アドレス、ID、および設置場所を追加します。
[Step 1a](#1a-ビーコンを展開する) で作成したリストを使用して、アップロードしたマップ上に直接配置できます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/maps-add-beacons.png" alt="maps-add-beacons"/>
</div>

3. **環境係数の調整（オプション）**

信号強度（**RSSI**）が距離に変換される方法を調整して、位置精度を微調整します。

- デフォルト値（約 2.0）は、開けたエリアで良好に機能します。
- 複雑な屋内環境では、**1.8 ～ 4.0** の値を試してください。
- まずはデフォルト設定から始め、必要に応じて後から調整してください。

### Step 4: トラッカーを有効化して可視化する

最後のステップは、トラッカーの電源を入れ、マップ上に表示させることです。

<div align="center">
<img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/tracker-visualize-on-map.png" alt="tracker-visualize-on-map"/>
</div>

1. **SenseCAP T1000 Tracker を有効化** し、LoRaWAN Network Server にオンボードします。ゲートウェイがオンラインであり、トラッカー デバイスが LNS サーバーに「登録」されていることを確認してください。詳細は [Step 1b](#1b-ゲートウェイをセットアップする) を確認してください。
2. **BLE スキャンモードに設定されていることを確認** し、ビーコンを検出できるようにします。ヘルプが必要な場合は、以下のビデオを確認してください。
3. **可視化:** トラッカーが施設内を移動すると、最も近いビーコンを検出して位置情報を報告します。ダッシュボード上のマップで、トラッカーのアイコンが移動する様子が確認できます。

<div style={{ textAlign: 'center' }}>
<video width="480" height="640" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-tracker-configuration.mp4" type="video/mp4" />
  お使いのブラウザは video タグをサポートしていません。
</video>
<p><em>ChirpStack を使用する場合は、`Other Platform` を選択してください。</em></p>
<p><em>SenseCraft Data を使用する場合は、デフォルトのプラットフォーム設定（The Things Network 用の SenseCAP）を維持してください。</em></p>
</div>

## アプリケーション機能の概要

### 機能 1: データプッシュ（Webhook & WebSocket）

システムからリアルタイムデータを取得する方法は 2 つあります：

- **Webhook:** 設定で説明したように、指定した URL にデータをプッシュします。
- **WebSocket:** リアルタイムアプリケーション向けに、Basic HTTP Authentication を使用して `/ws` エンドポイントに接続できます。`sos`、`tracker_update`（三辺測位）、`tracker_location_approximate`（近接）のデータ形式は、元のドキュメントで提供されている JSON 例に詳述されています。

#### **データ形式**

<Tabs>
<TabItem value="sos" label="SOS アラート" default>

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
<TabItem value="trilateration" label="三辺測位/多辺測位">

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

### 機能 2: 2 つの測位モード

本システムは、2 つの測位方式をサポートしています：

1. **三辺測位:** トラッカーが **3 個以上** のビーコンを検出した場合、正確な (x, y) 座標を計算します。これはデフォルトかつ最も高精度なモードです。
2. **近接（エリア測位）:** これを有効にしていて、トラッカーが **1 個** のビーコンしか検出できない場合、そのビーコンの近くにいるものとして、計算された半径内の位置を報告します。これは、すべてのエリアでカバレッジを確保するのに役立ちます。

*三辺測位*

<table align="center">
<tr>
    <th>三辺測位</th>
    <th>三辺測位（SOS）</th>
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

### 機能 3: アラート履歴の閲覧

マップ上でトラッカーのアイコンをクリックすると、そのトラッカーのアラート履歴（例：SOS ボタンの押下）を確認できます。システムは新しいアラートをすべて記録し、アラートが解決されるまで通知のプッシュを継続します。

<div align="center">
<img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/alert-history-records.png" alt="alert-history-records"/>
</div>

### 機能 4: Beacon UUID でフィルタリング

マップ上に表示されるトラッカーを、関連付けられた Beacon UUID によってフィルタリングできます。これにより、特定のエリアや資産をより集中的に監視できます。ハッキングされないようにするうえでも価値があります。

<div align="center">
<img class='img-responsive' width="360" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/sensecraft-ble-filter.png" alt="sensecraft-ble-filter"/>
</div>

## 参考情報 & リソース

- **SenseCraft ソリューションでの展開**: [キャンパス規模の BLE ビーコン測位システム](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan) — ワンクリックのガイド付きデプロイ
- **Docker イメージ**: [seeedcloud/sensecraft-indoor-positioning - Docker Hub](https://hub.docker.com/r/seeedcloud/sensecraft-indoor-positioning)
- **ソースコード**: [Solution_IndoorPositioning_H5 - GitHub](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5)
- **ライブデモサイト**: [IndoorPositioning](https://indoorpositioning-demo.seeed.cc/)

## ヒント

ビーコンをより効率的に展開および設定するための、便利なヒントをいくつか紹介します：

### 1. Beacon 情報を記録する

各ビーコンの **一意の MAC アドレス** とその **設置場所** を一緒に記録しておくことを**強く推奨**します。  
これは [ソフトウェア設定ステップ](#3b-マップとビーコンの設定) で **非常に重要** となり、マッピングやトラブルシューティングの際に、正しいビーコンを **簡単に特定して選択** するのに役立ちます。

| **MAC Address** | **Location**     | **Beacon ID** |
| --------------- | ---------------- | ------------- |
| c30000564b31    | Main Entrance    | 01            |
| c30000564b32    | Warehouse Zone A | 02            |
| c30000564b33    | Corner Office    | 03            |

### 2. すべての Beacon に一貫した UUID を使用する

管理を容易にするため、**SenseCraft アプリ** を使用して、すべてのビーコンに一貫した **UUID** を割り当てることができます。  
これにより、トラッカーは **自分のデバイスのみ** を受信し、**近くの他のビーコンを無視** するようになります。  
[機能 4: Beacon UUID でフィルタリング](#機能-4-beacon-uuid-でフィルタリング) を参照して、詳細を確認してください。

### 3. 安定した設置場所を選ぶ

ビーコンは、Bluetooth 信号が安定するように、**固定されていて、開けており、遮蔽物のない**場所に設置してください。  
**金属面**、**配電盤**、**Wi-Fi ルーター**など、干渉を引き起こす可能性のあるものの近くへの設置は避けてください。

### 4. 各ビーコンにラベルを付けて固定する

保守時の混乱を避けるため、記録表と対応する **見やすいラベル**（例：Beacon-01、Beacon-02）を貼り付けてください。  
誤って動かないように、デバイスが**しっかりと固定**されていることを確認してください。

### 5. 信号範囲を確認する

設置を確定する前に、BLE スキャナアプリや設定ツールを使って**信号カバレッジ**をテストし、対象エリアで**一貫して検出**できることを確認してください。

### 6. ビーコンデータを素早く追加・調整する

*GeoJSON 風*の設定ファイルを使用している場合は、エクスポートしたマップファイルを直接編集してビーコンデータを素早く追加または調整し、その後アプリケーションに再インポートすることもできます。

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

> ヒント：JSON を直接編集する方法は、一度に複数のビーコンを追加したり、ダッシュボードの外で座標を微調整したりする場合に便利です。

## FAQ

<details>
<summary>トラッカーが位置情報を報告しないのはなぜですか？</summary>

- **考えられる原因：** LoRaWAN 接続に問題がある可能性があります。
- **解決策：** LoRaWAN ゲートウェイがオンラインで接続されているかどうか、そのステータスを確認してください。また、トラッカーの Device EUI がネットワークサーバーに正しく登録されていることを確認してください。

</details>

<details>
<summary>トラッカーの位置が不正確なのはなぜですか？</summary>

- **考えられる原因：** BLE ビーコンの設置場所が原因で、干渉や信号カバレッジの弱さが発生している可能性があります。
- **解決策：** ビーコンの送信電力を調整してみてください。また、壁や機械による信号の遮蔽を減らすために、ビーコンの設置場所を変更する必要がある場合もあります。

</details>

<details>
<summary>トラッカーのバッテリーがすぐに消耗してしまうのはなぜですか？</summary>

- **考えられる原因：** 報告頻度が高すぎるため、デバイスが必要以上に頻繁にデータを送信している可能性があります。
- **解決策：** トラッカーが動いているときにのみ報告するよう、モーション検知設定を最適化してください。また、電力を節約するために、報告間隔（位置情報の更新間の時間）を長くすることもできます。

</details>

<details>
<summary>位置データが欠落している、または表示されないのはなぜですか？</summary>

- **考えられる原因：** データペイロードの解釈方法に関連して、データベースまたは API に問題がある可能性があります。
- **解決策：** まず、アプリケーションサーバー上のペイロードデコーダーが正しく動作しているか確認してください。デコーダーに問題がない場合は、アプリケーションサーバーのログを確認し、エラーや接続性の問題がないかを確認してください。

</details>

<details>
<summary>SOS アラートがすぐに受信されないのはなぜですか？</summary>

- **考えられる原因：** LoRaWAN ネットワークが輻輳しているか、緊急メッセージに適したデバイスクラスが設定されていない可能性があります。
- **解決策：** SOS アラートのような時間に敏感なアプリケーションでは、トラッカーが **Class C mode** を使用するように設定されていることを確認してください。これによりデバイスの受信機が常時オンになり、サーバーからのメッセージを即座に受信できるようになります。

</details>

<details>
<summary>BC01 ビーコンのアドバタイジング間隔と送信電力はどのように調整しますか？</summary>

BC01 ビーコンの設定には **SenseCraft アプリ**を使用できます。

1. [Google Play Store](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate) または [Apple App Store](https://apps.apple.com/us/app/sensecraft/id1619944834) から SenseCraft アプリをインストールします。
2. アプリを開き、スマートフォンの Bluetooth を有効にします。
3. 近くのビーコンをスキャンし、設定したいビーコンを選択します。
4. デフォルトパスワード "**seeed123**" を入力して設定画面にアクセスします。
5. ニーズに合わせて、アドバタイジング間隔（100ms ～ 10s）と送信電力（-30dBm ～ +4dBm）を調整します。
6. 変更内容を保存します。

</details>

## 変更履歴

**2026-05-29：**

- 手動の Docker 自己ホスティングを代替パスとして残しつつ、**SenseCraft Solution** のワンクリックガイド付きデプロイ（Starter / Standard / Enterprise キット）を先に紹介するように、デプロイガイドの構成を再設計しました。
- デプロイ用のコールトゥアクションを追加し、[Campus-level BLE Beacon Positioning System](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan) ソリューションページを指すように Reference & Resource リンクを更新し、GitHub ソースリンクを追加しました。

**2025-11-10：**

- ビーコンの展開およびゲートウェイセットアップのガイダンスを作り直し、設置のベストプラクティス、参考資料、SenseCraft Data と ChirpStack 向けのネットワークサーバー固有の手順を明確にしました。
- 実行時設定およびマップ／ビーコン設定セクションを拡充し、より分かりやすい UI ガイダンス、GeoJSON インポートサンプル、環境要因向けの任意のチューニングヒントを追加しました。
- ビーコン記録管理、UUID 管理、取り付け、検証、一括編集を扱う専用の Tips セクションを追加し、展開のスケールとトラブルシューティングを容易にしました。
