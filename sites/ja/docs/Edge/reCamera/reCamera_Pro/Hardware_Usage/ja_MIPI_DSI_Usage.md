---
description: このWikiでは、MIPIスクリーンをデバイスに接続する方法について簡単に紹介します。
title: MIPI-DSI スクリーンの使用
keywords:
  - reCamera
  - reCamera Pro
  - MIPI-DSI Screen
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_mipi_dsi_screen_usage
sku: 10003420
sidebar_position: 2
last_update:
  date: 07/09/2026
  author: Sizhao zhou
createdAt: '2026-06-01'
updatedAt: '2026-07-10'
url: https://wiki.seeedstudio.com/ja/recamera_pro_mipi_dsi_screen_usage/
---

# reCamera Pro での MIPI DSI インターフェースの使用

デバイス背面には、MIPIスクリーンを接続するための MIPI DSI インターフェースがあります。

## MIPI スクリーンを接続する

ベースボードの背面カバーを開け、下図のように ***22PIN MIPI DSI*** インターフェースを見つけます。

:::note
MIPIスクリーンを接続する前に、必ずデバイスの電源を切ってください!!!
:::

![BASE_BOARD_PIN](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/base_board_pin.png)

MIPIスクリーンケーブルのTCON側を確認し、下図のように内側へ差し込みます：
![CONNECT_MIPI_SCREEN](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/MIPI-DSI-ton-duan.jpg)

## 電源を入れる

MIPIスクリーンを接続した後、デバイスの電源を入れると、MIPIスクリーンにカメラのリアルタイム映像が表示されます。
![SHOW_GIF](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/MIPI_DSI_SHOW_CAMERA.gif)

:::note
スクリーンには別途電源供給が必要です。デバイスはスクリーン専用の電源出力を提供しません。
:::

スクリーンのリンクは次のとおりです：
<table align="center">
  <tbody>
    <tr>
      <th>Raspberry Pi Touch Display 2</th>
    </tr>
    <tr>
      <td>
        <div style={{ textAlign: "center" }}>
          <img
            src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/104990902_1.jpg"
            alt="Raspberry Pi Touch Display 2"
            style={{
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div
          className="get_one_now_container"
          style={{ textAlign: "center" }}
        >
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Raspberry-Pi-Touch-Display-2-p-6255.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: "#FFFFFF", fontSize: "16px" }}>
                今すぐ入手 🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
