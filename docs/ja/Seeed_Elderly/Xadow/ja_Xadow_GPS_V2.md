---
description: Xadow - GPS V2
title: Xadow - GPS V2
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_GPS_V2
last_update:
  date: 05/15/2025
  author: shuxu hu
---


---
![](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/Xadow_GPS_v2.JPG)

Quectel®のGPS L70モジュールをベースにしたXadow GPS v2は、先進的なAGPS技術EASY™（Embedded Assist System）とAlwaysLocate™技術を組み合わせることで、高性能、超低消費電力、屋内信号レベルでも迅速な位置特定を実現します。高感度受信機（-163dBmトラッキング）と内蔵チップアンテナを備えたこのモジュールは、66チャンネルで最大22個の衛星を追跡できるため、ナビゲーションプロジェクトに最適です。また、モジュール接続の柔軟性を向上させるために、新しい11ピンXadowコネクタを採用しています。

[![](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html)

## 特徴
---

- EASY™、外部メモリ不要の先進的なAGPS技術
- トラッキングモードでの超低消費電力
- AlwaysLocate™、交互モードのインテリジェントコントローラー
- 高感度
- QZSS対応
- DGPS、SBAS（WAAS/EGNOS/MSAS/GAGAN）対応
- アンチジャミング、マルチトーンアクティブ干渉キャンセラー
- 効率最大83%の内蔵チップアンテナ
- 他のXadowモジュールとの完全な柔軟な接続を可能にする内蔵11ピンXadowコネクタ
- 他のXadowモジュールと積み重ね可能、チェーン接続可能、縫い付け可能

## 仕様
---

|||
|---|---|
|**マイクロコントローラー**|	Kinetis KL02|
|**コア**|	ARM® 32-bit Cortex® -M0+CPU|
|**電源供給**	|3.3 ~ 6 V (ブレークアウトピン経由)|
|**フラッシュ**|	32 KB|
|**SRAM**|	4 KB|
|**クロックスピード**|	48 MHz|
|**消費電力**	|18mA@トラッキング、21mA@取得|
|**省電力モード**|	Typ. 3mA@AlwaysLocateTM、7uA@バックアップモード、180uA@スタンバイモード|
|**チャンネル**|	22(トラッキング) / 66 (取得)|
|**更新レート**|	1Hz(デフォルト)、最大10Hz|
|**水平位置精度**|	&lt;2.5m CEP|
|**速度精度**|	&lt;0.1m/s|
|**最大速度**|	最大515m/s|
|**EASY™によるコールド/ウォームスタート**|215秒/5秒|
|**取得感度**|-145dBm|
|**トラッキング感度**|	-163dBm|
|**動作温度**|-40℃ ～ 85℃|
|**プロトコル	NMEA**|0183/PMTK|
|**アンテナタイプ**|	チップアンテナ|
|**インターフェース**|	Xadow GSM+BLEとのインターフェース / I2C (7ビットアドレス 0x05)|
|**寸法**|	25.37mm X 20.30mm / 1” × 0.8”|

## ハードウェア概要
---
![](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/Xadow_GPS_v2.png)

## グローバルポジショニングシステム（GPS）について
---
グローバルポジショニングシステム（GPS）は、宇宙ベースのナビゲーションシステムであり、リアルタイムかつ全天候型で地理的な位置、高度、移動速度、時間情報を提供します。地球上または地球近くで、4つ以上のGPS衛星への遮るもののない視線がある場所で利用可能です。かつては軍事プロジェクト専用でしたが、現在ではGPS受信機を持つ誰でも自由に利用できます。GPSの典型的な用途には、自動車ナビゲーション、時間転送、交通信号のタイミング、盗難防止および追跡デバイスなどがあります。

## Rephone コミュニティ
---
[![](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/300px-RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

私たちは、支援者（RePhone ユーザー）が集まり、温かく快適に座りながら、RePhone について会話し、技術的な問題を議論し、アイデアやプロジェクトを共有し、将来のモジュール開発に関するフィードバックを提供できる場所を探してきました。そして、ここに [RePhone コミュニティ](https://community.seeedstudio.com/discover.html?t=RePhone) が誕生しました。

今すぐ [RePhone コミュニティ](https://community.seeedstudio.com/discover.html?t=RePhone) に参加しましょう！一緒に答えを探し、面白いものを作り、お互いを気遣い、経験を共有しましょう。

**よくある質問**

[RePhone コミュニティ](https://community.seeedstudio.com/discover.html?t=RePhone) でよく寄せられる質問を「RePhone のよくある質問 (FAQ)」というトピックにまとめて回答しています。このトピックは、新しい FAQ が出るたびに更新されます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/202000729_PCBA%3BXadow%20GPS%20v2.1_schemic%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
私たちは GitHub ページでソースコードを随時更新していきます：

- [Xadow GPS v2 のソースコード](https://github.com/WayenWeng/Xadow_GPS_v2/)
- [Eclipse IDE を基にした Xadow GPS v2 のテストコード](https://github.com/WayenWeng/Xadow_GPS_v2_test/)

Xadow GPS v2 の回路図は以下のリンクから提供されています：

- [Xadow GPS v2 回路図ファイル](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/202000729_PCBA%3BXadow%20GPS%20v2.1_schemic%20file.zip)

GPS の値が実際の位置から少しずれている場合、新しいファームウェアを Xadow GPS V2 に書き込む必要があるかもしれません：

- [mbed ボードを使用して新しいファームウェアを書き込む方法を学ぶ](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/Burn_to_Xadow_modules.zip)

GPS L70 とチップアンテナに関する詳細情報を確認してください：

- [GPS L70 とチップアンテナの仕様](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/GPS_L70_%26_Chip_Antenna.rar)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>