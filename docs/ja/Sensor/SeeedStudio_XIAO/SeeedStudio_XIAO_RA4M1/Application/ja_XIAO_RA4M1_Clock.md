---
description: Seeed Studio XIAO RA4M1 を使用してシンプルな時計を作成します。
title: Seeed Studio XIAO RA4M1 による Hollow Clock
keywords:
- ra4m1
- xiao
- clock
image: https://files.seeedstudio.com/wiki/RA4M1_Application/top.webp
side_position: 2
slug: /ja/xiao_ra4m1_clock
sidebar_class_name: hidden 
last_update:
  date: 05/15/2025
  author: Jason
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/RA4M1_Application/1.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## インスピレーションの源

[Hollow Clock](https://www.youtube.com/watch?v=jvoOgxK4EvI&ab_channel=TheWrench) は以前 YouTube で大きな人気を集めました。オリジナルデザインは [sh1ura](https://www.instructables.com/Hollow-Clock-4/) によるもので、[素晴らしいデモ動画](https://youtu.be/hRpLiRoMx34) や [Thingsverse 上の 3D デザイン](https://www.thingiverse.com/thing:5636482) が公開されています。この素晴らしいインスピレーションを提供してくれた sh1ura に感謝します。
巨人の肩に立ちながら、今回は親指サイズの [XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html) とカスタムの小型モータードライバーボードを使用してリミックス版を作成しました！

## ハードウェア概要

### MCU

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO RA4M1</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### 回路基板

XIAO と同じサイズで、母座を溶接し、XIAO とモーターを挿入するだけで動作します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RA4M1_Application/2.png" style={{width:500, height:'auto'}}/></div>

詳細情報は最後のリソースに記載されています。

:::tip
モーターと部品は自分で購入する必要があります。
:::

### ソフトウェア概要
```c

// このコードは時計プロジェクト用のステッパーモーターを制御し、
// 時間に基づいて分針を正確に回転させます。

// 時計が進みすぎたり遅れたりする場合は、以下の値を調整してください。
// 理論的には標準値は1分あたり60000ミリ秒です。
#define MILLIS_PER_MIN 60000 // 1分あたりのミリ秒

// モーターと時計のパラメータ
// 分針の完全な回転に必要な総ステップ数
// 4096ステップ/回転 * 90度 / 12時間として計算
#define STEPS_PER_ROTATION 30720 // 分針の完全な回転に必要なステップ数

// ステッパーモーターの単一ステップの待機時間
int delaytime = 2;

// ステッパーモーターを制御するために使用されるポート
// モーターが逆方向に回転する場合は、ポート番号の順序を変更してください。
int port[4] = {0, 1, 2, 3};

// ステッパーモーター制御のシーケンス
// この配列はモーターフェーズの制御シーケンスを定義します。
int seq[8][4] = {
  {  LOW, HIGH, HIGH,  LOW},
  {  LOW,  LOW, HIGH,  LOW},
  {  LOW,  LOW, HIGH, HIGH},
  {  LOW,  LOW,  LOW, HIGH},
  { HIGH,  LOW,  LOW, HIGH},
  { HIGH,  LOW,  LOW,  LOW},
  { HIGH, HIGH,  LOW,  LOW},
  {  LOW, HIGH,  LOW,  LOW}
};

// 指定されたステップ数に基づいてステッパーモーターを回転させる関数
void rotate(int step) {
  static int phase = 0;
  int i, j;
  int delta = (step > 0) ? 1 : 7; // 回転方向を決定
  int dt = 20; // 初期待機時間

  step = (step > 0) ? step : -step; // ステップ数を正の値に変換
  for(j = 0; j < step; j++) {
    phase = (phase + delta) % 8; // フェーズを更新
    for(i = 0; i < 4; i++) {
      digitalWrite(port[i], seq[phase][i]); // モーターを制御
    }
    delay(dt); // 指定された待機時間を待つ
    if(dt > delaytime) dt--; // 待機時間を徐々に減少
  }
  // 電源を切る: モーターを停止
  for(i = 0; i < 4; i++) {
    digitalWrite(port[i], LOW);
  }
}

// セットアップ関数、起動時に1回実行
void setup() {
  // モーター制御ポートを出力として初期化
  pinMode(port[0], OUTPUT);
  pinMode(port[1], OUTPUT);
  pinMode(port[2], OUTPUT);
  pinMode(port[3], OUTPUT);
  
  // 分針を位置決めするための初期アプローチランを実行
  rotate(-20); // 一方向へのアプローチラン
  rotate(20);  // 逆方向へのアプローチラン
  rotate(STEPS_PER_ROTATION / 60); // 分針を位置決め
}

// メインループ、継続的に実行
void loop() {
  static long prev_min = 0, prev_pos = 0; // 前回の分と位置を追跡
  long min;
  static long pos;
  
  min = millis() / MILLIS_PER_MIN; // 現在の分を取得
  if(prev_min == min) {
    return; // 分が変わっていない場合は終了
  }
  prev_min = min; // 前回の分を更新
  pos = (STEPS_PER_ROTATION * min) / 60; // 目標位置を計算
  rotate(-20); // 一方向へのアプローチラン
  rotate(20);  // 逆方向へのアプローチラン
  if(pos - prev_pos > 0) {
    rotate(pos - prev_pos); // 必要に応じて新しい位置に回転
  }
  prev_pos = pos; // 前回の位置を更新
}

```

- **ステッパーモーター接続の確認**:
ステッパーモーターの4本の制御線をポート配列（0, 1, 2, 3）で指定されたポートに接続してください。

- **時間設定の調整**:
時計が正確になるように、実際の条件に応じて MILLIS_PER_MIN の値を調整してください。時計が進みすぎたり遅れたりする場合は、この値を調整してください。

- **ステップ計算の確認**:
モーターの実際のステップ数とシステム設計に基づいて STEPS_PER_ROTATION の値が正しく計算されていることを確認してください。

- **待機時間の調整**:
delaytime は各ステップ間の待機時間を制御します。モーターの性能と要件に基づいてこのパラメータを微調整し、モーターの動作を最適化してください。

- **制御シーケンス設定**:
seq 配列はステッパーモーターの制御シーケンスを定義します。モーターが逆方向に回転する場合は、この配列の値を調整することで修正できます。

- **関数の説明**:
rotate(int step): モーターを指定されたステップ数だけ回転させます。正の値または負の値を渡すことで回転方向を制御できます。モーターは各回転後に徐々に遅延を減少させ、速度を上げます。

- **setup():** 起動時に一度だけ実行され、制御ポートの初期化と初期位置の設定を行います。モーターのセットアップに必要なステップです。

- **loop():** 現在の分を計算し、分針の位置を更新するために継続的に実行されるメインループです。この関数は、分の更新ごとに rotate() 関数を呼び出して針を回転させます。

:::tip

- ステッピングモーターに適した電源を確保し、すべての接続が正しいことを確認してください。

- テスト中はモーターの動作を監視し、期待通りに動作していることを確認し、必要に応じて調整を行ってください。
:::

もしさらにアイデアや改良があれば、XIAOシリーズを使って自由に披露してください！

## リソース

- 📄 **[SCH]** [モータードライバーボード](https://files.seeedstudio.com/wiki/RA4M1_Application/4.zip)
- 📄 **[PCB]** [モータードライバーボード](https://files.seeedstudio.com/wiki/RA4M1_Application/xiao.pcb)
- 📄 **[3D]** [時計の3Dモデリング](https://files.seeedstudio.com/wiki/RA4M1_Application/clock.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>