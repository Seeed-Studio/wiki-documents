---
description: Reachy Mini の Home Assistant 連携。LAN 自動検出、センサー監視、自動化ブループリントのために、HACS 経由で公式インテグレーションをインストールします。
title: Home Assistant 連携
slug: /reachymini_development_cases_home_assistant
keywords:
  - reachy mini
  - home assistant
sku: 100090917，100025004
last_update:
  date: 7/29/2026
  author: ZhuYuan
translation:
  skip: [zh-CN]
createdAt: '2026-07-29'
updatedAt: '2026-07-29'
url: https://wiki.seeedstudio.com/cn/reachymini_development_cases_home_assistant/
---
# Reachy Mini Home Assistant 連携

Reachy Mini でスマートホームデバイス ― Mi Home（Xiaomi）、Aqara、Midea、Haier など（冷蔵庫やエアコンなど）― を操作したいですか？このプロジェクトでは、Reachy Mini を使ってそれらをコード不要で操作する方法を詳しく説明します。このドキュメントをそのまま AI に渡して、インストールとセットアップをすべて任せることもできます。

**エンドユーザー向け:** 公式の Reachy Mini インテグレーション — [https://github.com/pollen-robotics/reachy_mini_homeassistant](https://github.com/pollen-robotics/reachy_mini_homeassistant) — を HACS（Custom Repository → Integration）経由でインストールします。ロボットが同じ LAN 上にあれば、Home Assistant が約 30 秒以内に自動検出し、センサーおよびバイナリセンサーをまとめた実デバイスカードを作成します。6 つの自動化ブループリントが同じリポジトリに同梱されています。**YAML も手動のエンティティ配線も不要です。**

このページでは、インテグレーション（およびその他の監視クライアント）が利用する SDK 側のインターフェースを文書化します：

- **mDNS / zeroconf ディスカバリ契約** — HA が LAN 上でデーモンを見つける方法。
- インテグレーションがロボット状態のビューを構成するためにポーリングする **既存の REST エンドポイント**。

SDK は専用の「Home Assistant アグリゲータ」エンドポイントを提供しません。HA 側のクライアントは、他のクライアントと同じルート（デーモンステータス、アプリロック状態、オーディオミキサー、DoA）にファンアウトします。`awake`、`active_app_transport`、`webrtc_active` といった HA 向けのセマンティクスは、すべてインテグレーションのリポジトリ内にのみ存在します。

## ディスカバリ面

Reachy Mini デーモンは、mDNS を介して LAN 上に `_reachy-mini._tcp.local.` として自らをアドバタイズします。Home Assistant の zeroconf コンポーネントは、TXT レコード内の `model=ReachyMini` に対して Reachy Mini インテグレーションをマッチさせるため、このプロパティフィルタによって自動検出が一意に決まります。


| TXT key        | Type            | 意味                                                                                                                                             |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `unit_id`      | 16-char hex     | ロボットごとに安定した識別子 — オーディオデバイスシリアルの SHA-256 を切り詰めたもの。インテグレーションで HA の config entry の unique-id として使用。 |
| `model`        | string          | `"ReachyMini"`。マニフェストフィルタとして使用。                                                                                                 |
| `manufacturer` | string          | `"Pollen Robotics"`。                                                                                                                            |
| `version`      | string          | デーモンパッケージのバージョン。                                                                                                                |
| `caps`         | comma-separated | 機能フラグ：`camera,mic,speaker,motion,apps`。                                                                                                   |
| `api`          | string          | `"rest+ws"`。                                                                                                                                    |
| `robot_name`   | string          | ユーザーが設定可能な表示名。                                                                                                                    |
| `ws_path`      | string          | `/ws/sdk` — SDK WebSocket パス。                                                                                                                |
| `address`      | string          | IP アドレス（A レコードからも解決可能）。                                                                                                       |

任意の LAN ホストから検証します：

```bash
avahi-browse -rt _reachy-mini._tcp        # Linux
dns-sd -Z _reachy-mini._tcp local.        # macOS
dns-sd.exe -B _reachy-mini._tcp           # Windows
Resolve-DnsName reachy-mini.local         # PowerShell
```

プラットフォーム非依存の確認方法：Home Assistant の **Settings → Devices & Services** に、HACS インテグレーションがインストールされロボットが同じ LAN 上にあると、「Discovered: Reachy Mini」カードが表示されます。これが実際のエンドユーザー向け検証です。上記の CLI コマンドは、ディスカバリがサイレントに失敗したときのデバッグ用です。

実装: `src/reachy_mini/utils/discovery.py`。

## インテグレーションが利用するエンドポイント

インテグレーションのコーディネーターは、これらを 30 秒ごとに並列でポーリングします（`asyncio.gather`）。各エンドポイントは独立して失敗するため、部分的な障害が発生しても影響を受けたエンティティだけがオフラインになり、デバイス全体は落ちません。


| Endpoint                                | インテグレーションが使用するフィールド                                                                                                                                                          |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GET /api/daemon/status`                | `version` → ファームウェアバージョン、`hardware_id` → unit_id（mDNS TXT とのクロスチェック）、`backend_status.motor_control_mode` → awake + 生の motor_mode、`backend_status.ready` → 利用可能性ゲート |
| `GET /api/daemon/robot-app-lock-status` | `state` + `holder_name` → active_app、active_app_transport、webrtc_active                                                                                                                         |
| `GET /api/state/doa`                    | `angle` → DoA ラジアン、`speech_detected` → 音声 VAD                                                                                                                                             |
| `GET /api/volume/current`               | `volume` → スピーカー音量                                                                                                                                                                        |
| `GET /api/volume/microphone/current`    | `volume` → マイク音量                                                                                                                                                                            |

インテグレーションのコーディネーター（`coordinator.py`）は、その上で HA 向けの整形を行います：`awake = motor_mode in {"enabled", "gravity_compensation"}`、ロック状態からの `active_app_transport` の導出など。SDK は HA 固有のフィールドを一切提供せず、コンシューマー側でそれらを合成します。

## 現在は公開されていないもの

これらは HA で有用ですが、現時点では SDK ルートが公開していません：

- **CPU / メモリ / 稼働時間（uptime）** — ホストプロセスのメトリクス。Lite と Wireless の両方で動作します（ロボットハードウェアセンサーではなく、デーモンプロセスの統計情報のため）。
- **IMU ピッチ / ロール / 温度** — Wireless のみ（BMI088 は CM4 ボード上にのみ搭載）。Lite では null になります。

どちらも、後から小さな追加ルート（例：`/api/daemon/host`、`/api/state/imu`）として追加しても、何も壊すことなく対応可能です。インテグレーション側はそれらを追加のファンアウト対象として取り込み、新しいエンティティとして公開します。

## インテグレーションなしでのフォールバック

カスタムインテグレーションをインストールしたくない場合でも、同じエンドポイントを Home Assistant 標準の `rest:` インテグレーションから直接利用できます ― エンドポイントごとに 1 つの `rest:` ブロックを定義します。その代わりに、YAML を自分で管理し、Jinja による導出（`awake`、`webrtc_active` など）をインラインで記述する必要があります。

```yaml
rest:
  - resource: http://reachy-mini.local:8000/api/daemon/status
    scan_interval: 30
    sensor:
      - name: "Reachy Mini Motor Mode"
        unique_id: reachy_mini_motor_mode
        value_template: "{{ value_json.backend_status.motor_control_mode }}"
      - name: "Reachy Mini Firmware"
        unique_id: reachy_mini_firmware
        value_template: "{{ value_json.version }}"
    binary_sensor:
      - name: "Reachy Mini Awake"
        unique_id: reachy_mini_awake
        value_template: >-
          {{ value_json.backend_status.motor_control_mode in
             ['enabled', 'gravity_compensation'] }}
        device_class: power

  - resource: http://reachy-mini.local:8000/api/daemon/robot-app-lock-status
    scan_interval: 30
    sensor:
      - name: "Reachy Mini Active App"
        unique_id: reachy_mini_active_app
        value_template: "{{ value_json.holder_name | default('none') }}"
    binary_sensor:
      - name: "Reachy Mini WebRTC Active"
        unique_id: reachy_mini_webrtc_active
        value_template: "{{ value_json.state == 'remote_session' }}"
        device_class: connectivity
```

必要に応じて、`/api/state/doa`、`/api/volume/current`、`/api/volume/microphone/current` 用の `rest:` ブロックを追加してください ― 正確なフィールド構造については、稼働中のデーモン上の `/docs` にあるレスポンススキーマを参照してください。

その後、`rest.reload` アクション（Developer Tools → Actions）を呼び出すか Home Assistant を再起動します。エンティティは **Settings → Devices & Services → Entities** で `reachy_mini` でフィルタすると表示されます。

## インストール後に操作を引き継ぐ

Home Assistant をインストールしたら、次の手順で操作を引き継ぎます：

1. [http://localhost:8123](http://localhost:8123) を開きます。
2. 初回起動時にオンボーディングウィザードが開始されます：管理者アカウント（名前 / ユーザー名 / パスワード）を作成し、地域として中国を選択し、そのまま「次へ」をクリックし続けます。
3. **Settings → Devices & Services** に移動します。
4. 約 30 秒以内に「Discovered: Reachy Mini」カードが表示されるはずです → **Add** をクリックして確定します。
   - 最初の追加時、HA はカメラ用の aiortc 依存関係を自動的にダウンロードします。これはインターネット接続を必要とするため、少し時間を置いてください。
5. ディスカバリカードが表示されない場合：右下の **Add Integration** をクリック → 「Reachy Mini」を検索 → アドレスを手動で入力します（Lite バージョンでは 127.0.0.1 を使用できます）。

追加が完了すると、次の機能を備えた Reachy Mini デバイスが表示されます：ライブカメラフィード、ウェイク／スリープボタン、81種類の表情＋34種類のダンスを選べるドロップダウン、音量スライダー、モーターモードセレクター（`disabled` はソフト非常停止として機能）、音声検出などのセンサー。

<div align="center">
  <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini-demo/reachymini-home.webp"
  />
</div>

## 設計メモ

- SDK は汎用的なエンドポイントのみを公開します — デーモンステータス、状態、音量、アプリロックです。**HA 向けに特化したセマンティクスはデーモン内には一切存在しません。**
- HA 固有の派生値（`awake`、`active_app_transport`、`webrtc_active`）は、すべてインテグレーションリポジトリのコーディネーター内にのみ存在します。これらの定義を変更しても SDK には一切影響しません。
- このインテグレーションは、存在しないエンドポイントに対しても意図的に寛容です — `/api/state/doa` が 404（オーディオ無効）を返した場合、DoA フィールドは利用不可になるだけで、デバイスカードの残りの部分はそのまま動作し続けます。
- **認証なし、LAN 内のみを信頼。** デーモン上の他のすべての `/api/*` ルートと同じ姿勢です。**ポート 8000 をインターネットに直接公開しないでください。**

ユーザー向けのインストール／設定／オートメーションの手順については、インテグレーションリポジトリ [https://github.com/pollen-robotics/reachy_mini_homeassistant](https://github.com/pollen-robotics/reachy_mini_homeassistant) を参照してください。
