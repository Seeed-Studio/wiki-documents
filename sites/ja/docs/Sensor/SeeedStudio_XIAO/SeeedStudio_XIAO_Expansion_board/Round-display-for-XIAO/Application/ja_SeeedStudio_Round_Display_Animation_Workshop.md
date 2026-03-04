---
description: XIAO ラウンドディスプレイ アニメーションワークショップ
title: XIAO ESP32-S3 と LVGL 最適化ガイド
keywords:
- XIAO
- Round Display
- LVGL
- Animation
slug: /round_display_animation_workshop
last_update:
 date: 02/23/2026
 author: Sunil Pedapudi
---

# アニメーションワークショップ: XIAO ESP32-S3 と LVGL 最適化ガイド

アニメーションワークショップへようこそ！このチュートリアルでは、基本的な SVG アニメーションを ESP32-S3 向けに最適化するプロセスを順を追って説明します。最適化は 5 つのフェーズで進み、カクついた **7〜9 FPS** から滑らかな **30 FPS** まで改善していく様子を確認できます。

このワークショップでは、3 つのベクターアセット、**Hummingbird**、**Raccoon**、**Whale** を描画・アニメーションするアプリケーションを実装します。リソースに制約のあるハードウェア上で複雑な SVG をレンダリングする方法を、段階的な最適化フェーズを通して学びます。

<div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', alignItems: 'flex-start', margin: '20px 0'}}>
  <div style={{flex: 1, minWidth: '200px', maxWidth: '300px'}}>
    <img src="https://files.seeedstudio.com/wiki/round_display_animation_workshop/hb_screen.jpg" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}} alt="Hummingbird" />
    <p style={{textAlign: 'center', fontWeight: 'bold', marginTop: '8px'}}>Hummingbird</p>
  </div>
  <div style={{flex: 1, minWidth: '200px', maxWidth: '300px'}}>
    <img src="https://files.seeedstudio.com/wiki/round_display_animation_workshop/raccoon_screen.gif" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}} alt="Raccoon" />
    <p style={{textAlign: 'center', fontWeight: 'bold', marginTop: '8px'}}>Raccoon</p>
  </div>
  <div style={{flex: 1, minWidth: '200px', maxWidth: '300px'}}>
    <img src="https://files.seeedstudio.com/wiki/round_display_animation_workshop/whale_screen.gif" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}} alt="Whale" />
    <p style={{textAlign: 'center', fontWeight: 'bold', marginTop: '8px'}}>Whale</p>
  </div>
</div>

サンプルコードでは、[Seeed Studio XIAO ESP32-S3 Plus](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) と [XIAO Round Display](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) を使用します。

### 🌐 エコシステム
このプロジェクトは、高性能な組み込みグラフィックス向けに設計された強力なオープンソーススタックを活用します：
* **[ESP32-S3](https://www.espressif.com/en/products/socs/esp32-s3)**: ベクター命令と 8MB の Octal PSRAM を備えたデュアルコア MCU。
* **[ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/)**: Espressif SoC 向け公式開発フレームワーク。
* **[LVGL](https://lvgl.io/)**: 最も一般的なオープンソース組み込みグラフィックスライブラリ。
* **`lvgl_cpp`**: LVGL 向けのモダンな C++20 ラッパーで、オブジェクト、アニメーション、ディスプレイに対して型安全かつイディオマティックな抽象化を提供します。

---

## はじめに

### 前提条件
コードに入る前に、ESP32 を扱うための開発エコシステムが整っていることを確認してください。このチュートリアルでは、以下のツールがインストールされていることを前提とします：
* [Visual Studio Code](https://code.visualstudio.com/)
* [Espressif IDF Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=espressif.esp-idf-extension)

ただし、このプロジェクトは [PlatformIO](https://platformio.org/) や [ESP-IDF command-line interface](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/api-guides/tools/idf-cli.html) など、他のツールを使用することを妨げるものではありません。

### ステップ 0："Hello World" チェック（重要）
ESP-IDF を使った ESP32 エコシステムに不慣れな場合は、**このステップを飛ばさないでください**。
1. VS Code を開き、`F1` を押します。
2. `ESP-IDF: Show Examples Projects` と入力します。
3. `get-started` -> `blink`（または `hello_world`）を選択します。
4. プロジェクトをビルド、フラッシュし、デバイスでモニタします。

**なぜ？** C++ グラフィックスライブラリという複雑さを導入する前に、ツールチェーン、USB ドライバ、およびハードウェア接続が完全に機能していることを検証するためです。

### Step 1a: クイックスタート（ワークショップをクローン）
一から始めたくない場合は、すべてのコンポーネントと設定があらかじめ構成されたワークショップの完全なリポジトリをクローンできます。

```bash
git clone https://github.com/pedapudi/lvgl_workshop.git
cd lvgl_workshop
git submodule update --init --recursive
```

この方法を選んだ場合は、**ステップ 3（Configuration）** に進んで設定を確認するか、そのままビルドに進んでも構いません。

### Step 1b: 新規プロジェクトを作成（ゼロから）
自分でプロジェクトを構築したい場合：
1. 再度 `ESP-IDF: Show Examples Projects` を開きます。
2. `get-started` -> `sample_project` を選択します。
3. "Create project using example blink" をクリックします。

### ステップ 2：`lvgl_cpp` をインストール
ライブラリはローカルコンポーネントとしてインストールします。プロジェクトのルートでターミナルを開きます：

```bash
mkdir -p components
cd components
git submodule add https://github.com/pedapudi/lvgl_cpp.git lvgl_cpp
git submodule update --init --recursive
```

> **Note**: `lvgl_cpp` には `idf_component.yml` ファイルが含まれており、初回ビルド時に IDF Component Registry から適切なバージョンの `lvgl/lvgl`（v9.x）を自動的に取得します。LVGL を手動でインストールする必要はありません。

### ステップ 3：設定
C++20 と最適な設定を有効にするため、プロジェクト設定メニューを開きます：
1. `F1` を押して `ESP-IDF: SDK Configuration Editor (Menuconfig)` を実行します。
2. `Compiler options` -> `C++ Language Standard` に移動し、`C++20`（または `GNU++20`）を選択します。
3. （任意ですが推奨）`Compiler optimization level` を `Optimize for performance (-O2)` に設定します。

---

## 🛠️ このガイドの進め方
このワークショップでは、「ソフトウェアスロットル」を使用して、ブートローダーを頻繁に再コンパイルすることなくハードウェアの制約をシミュレートします。実装レベルは次の 2 通りの方法で切り替えられます：
1. **ワークショップ方式**: `idf.py menuconfig` -> `Animation Workshop` を使用してフェーズ 1〜5 を切り替えます。
2. **手動方式**: `main/workshop_config.h` 内の `#define WORKSHOP_PHASE` を変更します。

---

## 📊 フェーズ概要
このワークショップは、単純で素朴な実装から、PSRAM を高度に活用するエキスパートレベルまで、4 段階の最適化ステージを通じて進行します。

| フェーズ | タイトル | 主な最適化 | バッファ戦略 | レンダリングモード |
| :--- | :--- | :--- | :--- | :--- |
| **Phase 1** | Baseline | 160MHz CPU / 20MHz SPI | 1x フルフレーム（内部） | フルリフレッシュ |
| **Phase 2** | Foundation | 240MHz CPU / 80MHz SPI | 1x フルフレーム（内部） | フルリフレッシュ |
| **Phase 3** | Parallelism | ダブルバッファリング | 2x 部分ストリップ（内部） | 部分リフレッシュ |
| **Phase 4** | Expert | Octal PSRAM / SIMD | 2x フルフレーム（PSRAM） | 部分リフレッシュ |
| **Phase 5** | Native | ネイティブドライバ / SWAR SIMD | 2x 大きな部分（内部） | 部分リフレッシュ |

---

## Phase 1: ベースライン（素朴な実装）
**目標:** 最小限の設定で SVG を表示する。

このフェーズでは、まず機能的な正しさに焦点を当てます。LVGL の **ThorVG** エンジンを使用して SVG パスをデコードおよびレンダリングします。しかし、まだシステムを最適化していないため、CPU は低速（160MHz）で、レンダリングモードは **Full Refresh**（毎フレームすべてのピクセルを再描画）に設定されており、大きなオーバーヘッドが発生します。

### ⚙️ ESP-IDF 設定
このベースラインを本番プロジェクトで再現するには、次のように設定します：
- **CPU 周波数**: `sdkconfig` 内で `CONFIG_ESP_DEFAULT_CPU_FREQ_MHZ=160`。
- **LVGL タスクスタック**: `xTaskCreate` 呼び出しのパラメータとして設定（通常は `8192`）。
- **ディスプレイバス**: `esp_lcd_panel_io_spi_config_t` 構造体内で `.pclk_hz = 20 * 1000 * 1000`（20MHz）を設定。
- **最適化**: `CONFIG_COMPILER_OPTIMIZATION_DEFAULT`（-Og）。

### 💻 実装
Phase 1 でハードウェアと SVG 表示をセットアップするには、ディスプレイドライバと LVGL ポーティングレイヤーを連携させる必要があります。

**ハードウェアおよびポートの初期化（`app_main`）:**
```cpp
// Initialize the GC9A01 SPI display
Gc9a01 display_hw(display_cfg);
display_hw.init();

// Initialize the LVGL porting layer with SRAM-only buffers
LvglPort::Config lvgl_config;
lvgl_config.malloc_caps = MALLOC_CAP_DMA | MALLOC_CAP_INTERNAL;
lvgl_config.double_buffered = false;

LvglPort lvgl_port(lvgl_config);
lvgl_port.init(display_hw.get_panel_handle(), display_hw.get_io_handle());
```

**SVG 表示ロジック:**
```cpp
// 1. skip SVG header metadata to find the XML start tag
const char* raw_svg_ptr = hummingbird_svg;
while (*raw_svg_ptr && *raw_svg_ptr != '<') raw_svg_ptr++;

// 2. create an image descriptor for ThorVG
static lvgl::ImageDescriptor bird_dsc(75, 75, LV_COLOR_FORMAT_RAW,
 (const uint8_t*)raw_svg_ptr,
 strlen(raw_svg_ptr) + 1);

// 3. display the SVG on an image object
auto hummingbird = std::make_unique<lvgl::Image>(parent);
hummingbird->set_src(bird_dsc).center();
```

**結果:** 約 9 FPS。静的な hummingbird は正常にレンダリングされ、raccoon のアニメーションもクラッシュせずに動作します（ただし依然としてカクつきます）。しかし、複雑なパスをスケーリングする際、デフォルトの 8KB スタックはオーバーフロー寸前の危険な状態になります。

---

## Phase 2: ハードウェア基盤
**目標:** ESP32-S3 の生のクロックスピードを最大化する。

SVG レンダリングは「数学の問題」です。CPU 周波数を上げることで、ベクターエンジンにベジエ曲線を計算するためのサイクルをより多く与えることができます。

### ⚡ 戦略
1. **CPU ブースト**: 周波数を 160MHz から **240MHz** に引き上げます。
2. **SPI オーバークロック**: ディスプレイバスの速度を 20MHz から **80MHz** に引き上げます。
3. **コンパイラ強化**: ベクターマスエンジンを高速化するために **-O3** パフォーマンス最適化を有効にします。

### ⚙️ ESP-IDF 設定
- **CPU 速度**: `sdkconfig` 内で `CONFIG_ESP_DEFAULT_CPU_FREQ_MHZ=240`。
- **ディスプレイバス**: SPI 設定内で `.pclk_hz = 80 * 1000 * 1000`（80MHz）。
 > **Note**: 80MHz は S3 の SPI バスにおける絶対上限です。これ以上はハードウェアがサポートしておらず、これより低い速度ではバスがフレーム更新に追いつかず、目に見える「ティアリング」が発生します。
- **最適化レベル**: 設定で `CONFIG_COMPILER_OPTIMIZATION_PERF=y` を有効にして `-O3` を有効化します。
- **バイト補正**: `flush_cb` 内で、Little-Endian（CPU）から Big-Endian（LCD）へバイトを入れ替えるループを実装します：
```cpp
void LvglPort::flush_cb(lv_display_t* disp, const lv_area_t* area, uint8_t* px_map) {
 auto* port = (LvglPort*)lv_display_get_user_data(disp);
 uint16_t* buf = (uint16_t*)px_map;
 uint32_t len = (area->x2 - area->x1 + 1) * (area->y2 - area->y1 + 1);

 for (uint32_t i = 0; i < len; i++) {
  uint16_t color = buf[i];
  buf[i] = (color << 8) | (color >> 8);
 }

 esp_lcd_panel_draw_bitmap(port->panel_handle_, area->x1, area->y1,
  area->x2 + 1, area->y2 + 1, buf);
}
```

**結果：** 約15 FPS。フェーズ1と比べて、動きが目に見えて滑らかになりました。

---

## フェーズ3：並列ロジックとダブルバッファリング
**目標：** 画面のティアリングを排除し、CPU とディスプレイを分離する。

### ⚡ 戦略
* **ダブルバッファリング**：**2つ**の独立したバッファを確保します。ハードウェア DMA（Direct Memory Access）がバッファAを画面へ送信している間に、CPU はすぐにバッファBへの描画を開始できます。
* **スタック強化**：LVGL タスクのスタックを **64KB** に増やします。ベクターグラフィックスは再帰を使用するため、8KB スタックでは複雑なアセットをスケーリングするとオーバーフローしてクラッシュします。

### ⚙️ ESP-IDF の設定
- **DMA 有効化**：バッファ確保時に `MALLOC_CAP_DMA` を使用していることを確認します。
- **LVGL バッファ**：`lv_display_set_buffers` を呼び出す際、1つではなく2つのポインタを渡します。
- **バッファモード**：`LV_DISPLAY_RENDER_MODE_PARTIAL` を設定します。

### 💻 実装
フェーズ3へ移行するには、ダブルバッファリングを有効にし、複雑な SVG スケーリング中のスタックオーバーフローを防ぐためにタスクスタックを増やす必要があります。

**ダブルバッファの確保：**
```cpp
// Allocate two strike buffers in internal memory
lvgl_config.double_buffered = true;
lvgl_config.render_mode = LV_DISPLAY_RENDER_MODE_PARTIAL;

// Use small strip buffers (usually 1/10th or 1/20th of the screen)
// to fit both buffers in fast internal SRAM.
lvgl_config.full_frame = false;
```

**再帰に耐えるスタック強化：**
```cpp
// Increasing from 8KB (Standard) to 64KB (Vector-Safe)
lvgl_config.task_stack_size = 65536;
```

**結果：** 約9 FPS（後退！）。

### 🧠 深掘り：タイル化のペナルティ
なぜ並列処理を追加すると、アニメーションが*遅く*なることがあるのでしょうか？

1. **フェーズ2（フルフレーム）**：ThorVG エンジンは、240x240 全体の画像に対して、ベクターパスをフレームごとに**1回だけ**計算します。
2. **フェーズ3（部分ストリップ）**：限られた SRAM でダブルバッファリングしているため、小さなバッファ（例：20ライン）しか収まりません。その結果、ThorVG は完全な画像を生成するために、計算ループを**12回**（各ストリップごとに1回）実行する必要があります。

このベクター形状を12回再計算するオーバーヘッドが、DMA 並列転送の利点を大きく上回り、全体の FPS が低下します（約9 FPS 対 約15 FPS）。これは典型的な「計算 vs. 帯域幅」のトレードオフです。これを**フェーズ4**で解決します。

---

## フェーズ4：エキスパート最適化（26 FPS の秘密）
**目標：** 大容量 Octal PSRAM を使って「タイル化オーバーヘッド」を排除する。

### ⚡ 戦略
1. **フルフレームバッファ**：バッファを 8MB の **octal PSRAM** に移し、サイズを**フルフレーム**（240x240 ピクセル）に拡大します。
 * *利得*：ThorVG はアライグマを**1パス**でレンダリングします。PSRAM は SRAM よりやや遅いものの、12倍の再計算を避けられることは非常に大きなメリットです。
2. **Xtensa 組み込み関数**：手書きのスワップループを `__builtin_bswap16` に置き換えます。これはビットを**1サイクル**で入れ替えるハードウェア命令です。

### ⚙️ ESP-IDF の設定
- **PSRAM 初期化**：`CONFIG_SPIRAM=y`, `CONFIG_SPIRAM_MODE_OCT=y`, `CONFIG_SPIRAM_SPEED_80M=y`。
- **メモリ属性**：115KB のバッファ確保には `MALLOC_CAP_DMA | MALLOC_CAP_SPIRAM` を使用します。
- **コンパイラ性能**：`CONFIG_COMPILER_OPTIMIZATION_PERF=y` と `CONFIG_COMPILER_OPTIMIZATION_LTO=y` を有効にします。

**結果：** **約25 FPS**。滑らかで高忠実度な SVG アニメーション。

### 🧠 深掘り：明示的なハードウェア組み込み関数
レンダリングパイプラインで最もコストが高い部分は**フラッシュコールバック**です。各フレームごとに、すべてのピクセルのバイトを入れ替え（エンディアン補正）、色を反転させる（LCD パネルの要件）必要があります。

標準的な C の数値ループを使う代わりに、フェーズ4では次のようにします：
```cpp
buf[i] = __builtin_bswap16(buf[i]);
```
* **`__builtin_bswap16`**：これはコンパイラ組み込み関数で、CPU に専用ハードウェア命令（`BE`）を使うよう指示し、1クロックサイクルでバイトを入れ替えます。
* **⚠️ 落とし穴ではない (`~`)**：`~__builtin_bswap16()` を使った例を見ることがあるかもしれません。これは「アクティブ Low」の LCD パネルで、色を正しく表示するためにビット反転が必要な場合に使われます。もし色が「ネガ写真」のように見える場合は、`~` 演算子を取り除いてください。

**注意：** フェーズ1の実装中に、標準的な GC9A01 パネルで `~` 反転を使用すると、色が反転して表示されることがよくあります。フラッシュループでビット単位の否定を適用する前に、必ずパネルのロジックレベルを確認してください。

---


## フェーズ5：ネイティブアーキテクチャ（30+ FPS の標準）
**目標：** 「Large Partial」SRAM バッファリングと 32-bit SWAR ビットスワップ。

**フェーズ4**では巨大な PSRAM バッファを使って性能を力技で引き上げましたが、外部メモリのウェイトステートによりレイテンシが発生しました。**フェーズ5**では、「モバイルグレード」アーキテクチャへ移行することで **30+ FPS のマイルストーン**に到達します。つまり、高速な**内部 SRAM** バッファを使用しつつ、タイル化オーバーヘッドを最小限に抑えられるだけ十分に大きくするということです。

### ⚡ 戦略：「モバイルグレード」アーキテクチャ
1. **「Large Partial」バッファリング**：内部 SRAM に**1/2 画面バッファ**（240x120）を確保します。これにより、PSRAM より高い帯域幅を得つつ、タイル化倍率はフェーズ3の12倍に対して 2倍に抑えられ、両者の良いとこ取りができます。
2. **32-bit SWAR 処理**：ドライバのフラッシュロジックに **SIMD-within-a-Register (SWAR)** を実装します。これにより、標準的な組み込み関数で 16ビットピクセル1つを処理していたのと同じ時間で、2ピクセル（32ビット）を同時にスワップおよび反転できます。
3. **コア固定の解除**：タスクピニング（`tskNO_AFFINITY`）を外すことで、FreeRTOS スケジューラが S3 のデュアル CPU コアをフル活用できるようにします。1つのコアが重い ThorVG ラスタライズ処理を担当し、もう1つのコアが高頻度の SPI DMA 割り込みを処理できます。

### 🚀 加速：SIMD パッチ
C++ 最適化に加えて、重要なハードウェアアクセラレータである `lvgl_s3_simd_patch` に依存します。

* **問題：** デフォルトの LVGL はピクセルブレンディングに汎用的な C ループを使用します。ESP32 上では、1ピクセルずつ処理する（非効率）か、プラットフォーム固有命令を活かせない汎用コンパイラ最適化に頼るため、これは遅くなります。
* **解決策：** Xtensa LX7 の SIMD（Single Instruction, Multiple Data）機能を活用する、手書きの **ESP32-S3 アセンブリ**ルーチン（`lv_color_blend_to_rgb565_esp` のようなマクロ）を注入します。

**設定：**
これは `sdkconfig` によって制御されます：
```properties
CONFIG_LV_USE_DRAW_SW_ASM=255
```

:::note
**グローバル設定 vs. フェーズ5**：この設定はワークショップの全フェーズ（1〜5）で**グローバルに有効**です。ただし、その効果を実感できるのはおそらく **フェーズ5** になってからです。

**理由は？** フェーズ4（PSRAM）では、CPU は外部 RAM チップからメモリが届くのを待っている時間がほとんどです。アセンブリルーチン自体は高速ですが、データがなければ実行できません！**フェーズ5（内部 SRAM）**では、メモリ帯域幅が十分に高速になり、SIMD パイプラインへデータを供給できるようになるため、アセンブリ最適化の効果が発揮されます。
:::

**仕組み：**
1. **ヘッダー注入**：`lvgl_s3_simd_patch` コンポーネントは、自身を LVGL のインクルードパスに強制的に挿入します。
2. **マクロオーバーレイ**：標準マクロ（例：`LV_DRAW_SW_COLOR_BLEND_TO_RGB565`）を再定義し、カスタムのシム関数を指すようにします。
3. **リンカマジック**：`-u symbol` フラグを使ってリンカにアセンブリオブジェクトを必ず含めさせ、最適化で削除されないようにします。

---

### 💻 32-bit SWAR ループ
フェーズ5の秘訣は、**SIMD-Within-A-Register (SWAR)** 最適化です。
標準的なピクセル処理では、1度に 16ビットピクセル1つを扱います。バッファを `uint32_t*` にキャストすることで、**2ピクセル**を CPU サイクルあたり処理できます。

**直感的な説明：**
2ピクセルが詰め込まれた 32ビット整数 `0xAABBCCDD` に対して、バイトスワップ（`RGB565` -> `BGR565`）を行う必要があります。
* 目標：`0xBBAADDCC`
* マスク1（`0xFF00FF00`）：`AA` と `CC` を抽出します。
* マスク2（`0x00FF00FF`）：`BB` と `DD` を抽出します。
* シフトと OR：それらを同時に正しい位置へ移動させます。

**実装（`esp32_spi.cpp`）：**
```cpp
// 1. Cast 16-bit buffer to 32-bit pointer for 2x throughput
uint32_t* buf32 = reinterpret_cast<uint32_t*>(buf);
size_t len32 = len / 2; // Process 2 pixels at once

// 2. Define the SWAR lambda
auto swap_two_pixels = [](uint32_t v) {
 // 0xAABBCCDD -> 0xBBAADDCC
 return ((v & 0xFF00FF00) >> 8) |
        ((v & 0x00FF00FF) << 8);
};

// 3. Unrolled loop (8x) to maximize pipeline usage
// This processes 16 pixels per loop iteration!
size_t i = 0;
for (; i < len32 - 8; i += 8) {
 buf32[i + 0] = swap_two_pixels(buf32[i + 0]);
 buf32[i + 1] = swap_two_pixels(buf32[i + 1]);
 buf32[i + 2] = swap_two_pixels(buf32[i + 2]);
 buf32[i + 3] = swap_two_pixels(buf32[i + 3]);
 buf32[i + 4] = swap_two_pixels(buf32[i + 4]);
 buf32[i + 5] = swap_two_pixels(buf32[i + 5]);
 buf32[i + 6] = swap_two_pixels(buf32[i + 6]);
 buf32[i + 7] = swap_two_pixels(buf32[i + 7]);
}

// 4. Handle remaining pixels
for (; i < len32; i++) {
 buf32[i] = swap_two_pixels(buf32[i]);
}
```

### 🧠 深掘り：なぜ大きな部分バッファの方が速いのか？
**部分バッファ（フェーズ5）**の方が**フルフレーム（フェーズ4）**より速いというのは、直感に反するように思えます。

* **フェーズ4（PSRAM）**：
 * **長所**：レンダリングパスは1回。タイル化オーバーヘッドは0回。
 * **短所**：PSRAM への書き込みは SRAM より約3〜4倍遅い。CPU は SPI バスを待つ時間がかなり長くなります。
* **フェーズ5（内部 SRAM）**：
 * **長所**：SRAM への書き込みは（比較的）ほぼ瞬時です。
 * **短所**：レンダリングパスが2回（上半分と下半分）。
* **結論**：240MHz 動作の ESP32-S3 においては、**SVG レンダリングパスを1回余分に実行するコスト**よりも、115KB のデータを書き込む外部 PSRAM のコストの方が高くつきます。これは重要なアーキテクチャ上の発見であり、**メモリ帯域幅はしばしば計算サイクルよりも重要になる**ということを示しています。

**結果：** **約30 FPS**。XIAO Round Display の SPI バスの限界に達する、非常になめらかなアニメーションです。

---

## 🎨 アニメーションエンジン

この UI は静止画像を表示するだけでなく、`lvgl_cpp` を使って SVG 仕様から高忠実度の動きを再現します。LVGL の SVG レンダリングエンジンである ThorVG は SVG 内のアニメーションタグをサポートしていませんが、このワークショップでは `lvgl::Animation` を使って SVG をアニメーションさせています。これはアニメーションに便利なユーティリティであり、本ワークショップの目的としては、CPU 負荷の高い処理を生成し、各フェーズの性能を示すために利用しています。

### SVG から LVGL へのブリッジ
SVG アニメーションでは、滑らかな動きのために「三次ベジェ」曲線（`keySplines` として定義）をよく使用します。LVGL には組み込みのベジェエンジンがありますが、従来は内部のイージング用に使われてきました。

このロジックは `lvgl_cpp` 内でネイティブに公開されているため、標準的な SVG 制御点を C++ コード内で直接使用できます：

```cpp
// From main/ui/workshop_ui.cpp
// ANIMATION: FLAPPING (SVG keySpline="0.25 0.1 0.25 1.0")
a1.set_var(bird_dsc)
 .set_values(0, 7)
 .set_duration(150)
 // ...
 // Explicitly using the SVG cubic bezier curve
 .set_path_cb(lvgl::Animation::Path::CubicBezier(256, 102, 256, 1024));
```
*注: 制御点 (0.25, 0.1 など) は、LVGL の固定小数点演算エンジンで使用される 0..1024 の整数範囲にマッピングされます。*

### 🧪 設定を深掘り: sdkconfig.defaults
高性能なアニメーションのためには、`sdkconfig` はコードと同じくらい重要です。ここでは、このワークショップで使用した設定の内訳を示します：

| 設定 | 値 | 目的 |
| :--- | :--- | :--- |
| **`CONFIG_ESP_CONSOLE_USB_SERIAL_JTAG`** | `y` | **極めて重要**: ログ出力を S3 の専用ハードウェアにオフロードします。これにより、通常は UART0 コンソールにハードワイヤされていて Seeed XIAO Round Display 上のディスプレイ/タッチ用ピンと競合する XIAO S3 Plus の **GPIO 43/44** が解放されます。 |
| **`CONFIG_ESP_DEFAULT_CPU_FREQ_MHZ_240`** | `y` | CPU クロックを最大値に設定します。ベクタレンダリングは純粋な数学であり、1MHz たりとも無駄にできません。 |
| **`CONFIG_COMPILER_OPTIMIZATION_PERF`** | `y` | **`-O3`** 最適化を有効にします。これにより、コンパイラはバイナリサイズよりも実行速度を優先するよう指示されます（ThorVG の複雑なループには不可欠です）。 |
| **`CONFIG_COMPILER_OPTIMIZATION_LTO`** | `y` | **リンク時最適化 (link time optimization)** を有効にします。これにより、コンパイラはソースファイル間をまたいで最適化でき、`flush_cb` をエンジンのレンダーループに直接インライン展開できる可能性があります。 |
| **`CONFIG_SPIRAM`** | `y` | 外部 8MB PSRAM を有効にします。これがない場合、内部 RAM は約 320KB に制限され、フルフレームバッファリングは不可能になります。 |
| **`CONFIG_SPIRAM_MODE_OCT`** | `y` | PSRAM を **オクタルモード**（8 本のデータライン）で構成します。これにより、CPU が 240x240 ピクセルフレームをスタッタリングなしで読み書きするために必要な大容量帯域幅が提供されます。 |
| **`CONFIG_LV_USE_THORVG`** | `y` | LVGL が SVG レンダリングに使用する高性能 C++ ベクタエンジンを有効にします。 |
| **`CONFIG_LV_CACHE_DEF_SIZE`** | `2097152` | PSRAM 内に **2MB の画像キャッシュ** を割り当てます。これにより、レンダリング済みフレームを事実上「記憶」し、静的または繰り返しのフレームに対して高価なベクタ計算を単純なメモリコピーに変換します。 |

---

## 📊 最終パフォーマンスサマリ
| フェーズ | 最適化 | 目標 FPS | 主な焦点 |
| :--- | :--- | :--- | :--- |
| **Phase 1** | ベースライン | 約 9 FPS | SPI 20MHz / フルリフレッシュ |
| **Phase 2** | 基盤 | 約 15 FPS | CPU 240MHz / SPI 80MHz |
| **Phase 3** | 並列化 | 約 9 FPS（後退！） | ダブルバッファリング / DMA |
| **Phase 4** | エキスパートチューニング | 約 25 FPS | PSRAM / フルフレームバッファ |
| **Phase 5** | **ネイティブ** | **約 30 FPS** | **内部 SRAM / 32-bit SWAR / SIMD** |

---

### 最後に
プロダクションアプリでは、最初から **Phase 5** のパラメータを目標にすることができます。「旅路」は学習のためのものですが、目的地は常に ESP32-S3 上の **ネイティブアーキテクチャ** です。ソースファイルには、なぜ特定の C++ パターンが選択されたのかを説明するための詳細な教育的コメントが含まれています。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
