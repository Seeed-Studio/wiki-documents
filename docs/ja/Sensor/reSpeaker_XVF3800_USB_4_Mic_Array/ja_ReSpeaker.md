---
description: Seeed Studio の ReSpeaker は、インテリジェントな音声インタラクション製品を作成するための、オープンソースのモジュラー型音声インターフェースプラットフォームです。遠距離認識、ノイズ抑制、オーディオ処理アルゴリズムを備えた高度なマイクアレイを特徴とし、騒がしい環境でもクリアな音声キャプチャを実現します。複数のプラットフォームと言語に対応し、柔軟な開発、オープンソース設計、そして強力なコミュニティサポートを提供します。

title: reSpeaker 入門
keywords:
- reSpeaker
- Voice AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/respeaker
last_update:
  date: 8/12/2023
  author: Kasun Thushara
---


## ReSpeaker とは？

ReSpeaker は Seeed Studio によって開発されたオープンソースのモジュラー型音声インターフェースプラットフォームであり、メイカー、開発者、企業がインテリジェントな音声インタラクション製品を作成できるよう設計されています。マイクアレイ、オーディオプロセッサ、さまざまな接続オプションを統合しており、プロジェクトに音声認識や音声インタラクション機能を簡単に追加できます。

## 製品シリーズ

### ReSpeaker Lite

ReSpeaker Lite シリーズは、強力で高品質な音声対応プロジェクトを手軽に構築するための入り口です。XMOS XU316 AI オーディオチップセットと高精度デュアルマイクアレイを搭載し、クリアな遠距離音声キャプチャ（最大 3 メートル）、高度なノイズ抑制、エコーキャンセルを実現します。音声認識、スマートアシスタント、インタラクティブデバイスに最適です。ニーズに合わせて複数のバージョンから選択できます。すぐにセットアップできる ESPHome 対応の XIAO ESP32S3 をあらかじめはんだ付けした **ReSpeaker Lite 2-Mic Array Voice Kit**、またはアクリルケースとスピーカーを備えた、すぐに使える完全なソリューションである **ReSpeaker Lite Voice Assistant Kit** があります。メイカー、開発者、イノベーターのいずれであっても、ReSpeaker Lite は音声プロジェクトを実現するための性能、柔軟性、そしてオープンソースならではの自由度を提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeakerlite.png" alt="pir" width={600} height="auto" /></p>

<div className="table-center">
    <table className="table-nobg">
        <tbody>
            <tr className="table-trnobg">
                <td className="table-trnobg">
                    <div className="get_one_now_container" style={{ textAlign: 'center' }}>
                        <a
                            className="get_one_now_item"
                            href="https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html"
                            style={{ marginRight: '150px' }}
                        >
                            <strong>
                                <span>
                                    <font color="#FFFFFF" size="4">🖱️ 今すぐ購入</font>
                                </span>
                            </strong>
                        </a>
                    </div>
                </td>
                <td className="table-trnobg">
                    <div className="get_one_now_container" style={{ textAlign: 'center' }}>
                        <a
                            className="get_one_now_item"
                            href="https://wiki.seeedstudio.com/ja/reSpeaker_usb_v3/"
                        >
                            <strong>
                                <span>
                                    <font color="#FFFFFF" size="3">📚 Getting Started Page</font>
                                </span>
                            </strong>
                        </a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

### ReSpeaker XVF3800

ReSpeaker XMOS XVF3800 シリーズは、騒がしい実環境でもクリアな音声キャプチャを求めるメイカー、開発者、プロダクトデザイナー向けに構築されています。高度な XVF3800 AI オーディオプロセッサと高精度 4 マイク円形アレイを搭載し、360° の遠距離集音、強力なビームフォーミング、最大 5 メートル離れた場所でも業界水準のノイズおよびエコーキャンセルを実現します。プロジェクトに合わせて柔軟なオプションから選択できます。ESPHome や組み込み統合をすぐに行える **ReSpeaker XVF3800 with pre-soldered XIAO ESP32S3**、または洗練された筐体に収められた、すぐに使える音声インターフェースである **ReSpeaker XVF3800 enclosed AI voice solution** があります。スマートアシスタント、ロボット、インタラクティブキオスクなど、あらゆる用途において、XVF3800 シリーズはコンパクトでメイカーに優しいフォームファクタでプロフェッショナルグレードの音声性能を提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/xvf3800.png" alt="pir" width={600} height="auto" /></p>

<div className="table-center">
    <table className="table-nobg">
        <tbody>
            <tr className="table-trnobg">
                <td className="table-trnobg">
                    <div className="get_one_now_container" style={{ textAlign: 'center' }}>
                        <a
                            className="get_one_now_item"
                            href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html"
                            style={{ marginRight: '150px' }}
                        >
                            <strong>
                                <span>
                                    <font color="#FFFFFF" size="4">🖱️ 今すぐ購入</font>
                                </span>
                            </strong>
                        </a>
                    </div>
                </td>
                <td className="table-trnobg">
                    <div className="get_one_now_container" style={{ textAlign: 'center' }}>
                        <a
                            className="get_one_now_item"
                            href="https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/"
                        >
                            <strong>
                                <span>
                                    <font color="#FFFFFF" size="3">📚 Getting Started Page</font>
                                </span>
                            </strong>
                        </a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

### ReSpeaker 2-Mics Pi HAT

ReSpeaker 2-Mics Pi HAT V2.0 は、Raspberry Pi を強力な音声対応プラットフォームへと変身させ、スマートアシスタント、音声制御デバイス、インタラクティブな AI プロジェクトの構築に最適です。TLV320AIC3104 オーディオコーデック、デュアルアナログマイク、VAD、DOA、KWS 用の組み込み NLU アルゴリズムを備え、応答性の高いインタラクションのためにクリアで正確な音声キャプチャを実現します。プログラマブル RGB LED、ユーザーボタン、シンプルなプラグアンドプレイ設計により、Alexa や Google Assistant、あるいは独自の音声インターフェースを統合する場合でも、プロトタイピングやカスタマイズを容易に行えます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/hat.png" alt="pir" width={600} height="auto" /></p>

<div className="table-center">
    <table className="table-nobg">
        <tbody>
            <tr className="table-trnobg">
                <td className="table-trnobg">
                    <div className="get_one_now_container" style={{ textAlign: 'center' }}>
                        <a
                            className="get_one_now_item"
                            href="https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html"
                            style={{ marginRight: '150px' }}
                        >
                            <strong>
                                <span>
                                    <font color="#FFFFFF" size="4">🖱️ 今すぐ購入</font>
                                </span>
                            </strong>
                        </a>
                    </div>
                </td>
                <td className="table-trnobg">
                    <div className="get_one_now_container" style={{ textAlign: 'center' }}>
                        <a
                            className="get_one_now_item"
                            href="https://wiki.seeedstudio.com/ja/ReSpeaker_2_Mics_Pi_HAT/"
                        >
                            <strong>
                                <span>
                                    <font color="#FFFFFF" size="3">📚 Getting Started Page</font>
                                </span>
                            </strong>
                        </a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

### ReSpeaker XVF3000

ReSpeaker XVF3000 USB Mic Array は、アプリケーションにすぐ統合できる、プラグアンドプレイの遠距離音声キャプチャソリューションであり、ベアの開発ボードや複雑なセットアップは不要です。4 マイクアレイ、USB Audio Class 1.0 互換性、12 個のプログラマブル RGB LED を備え、スマートアシスタント、会議システム、インタラクティブな音声プロジェクトの構築に最適です。VAD、DOA、ビームフォーミング、ノイズ抑制、残響除去、アコースティックエコーキャンセルなどの音声アルゴリズムを内蔵し、厳しい環境下でもクリアな音声ピックアップを実現します。洗練された保護ケース付きバージョンを選択すれば、プロトタイピングにも量産展開にも適した、完成度の高いデプロイ準備済みセットアップとして利用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/xvf3000.png" alt="pir" width={600} height="auto" /></p>

<div className="table-center">
    <table className="table-nobg">
        <tbody>
            <tr className="table-trnobg">
                <td className="table-trnobg">
                    <div className="get_one_now_container" style={{ textAlign: 'center' }}>
                        <a
                            className="get_one_now_item"
                            href="https://www.seeedstudio.com/ReSpeaker-USB-Mic-Array-p-4247.html"
                            style={{ marginRight: '150px' }}
                        >
                            <strong>
                                <span>
                                    <font color="#FFFFFF" size="4">🖱️ 今すぐ購入</font>
                                </span>
                            </strong>
                        </a>
                    </div>
                </td>
                <td className="table-trnobg">
                    <div className="get_one_now_container" style={{ textAlign: 'center' }}>
                        <a
                            className="get_one_now_item"
                            href="https://wiki.seeedstudio.com/ja/ReSpeaker_Mic_Array_v2.0/#バージョン"
                        >
                            <strong>
                                <span>
                                    <font color="#FFFFFF" size="3">📚 入門ページ</font>
                                </span>
                            </strong>
                        </a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

## コア機能

**高度なマイクアレイ技術**

2〜4 個の MEMS マイクを備えた円形または線形アレイを採用し、遠距離音声認識、音源定位、ノイズ抑圧をサポートします。騒がしい環境でも、5 メートル以内の音声コマンドを正確に捉えることができます。

**強力なオーディオ処理**

Acoustic Echo Cancellation (AEC)、Noise Suppression (NS)、Voice Activity Detection (VAD)、ビームフォーミング技術など、プロフェッショナルなオーディオ処理アルゴリズムを内蔵し、明瞭な音声信号品質を実現します。

**柔軟な開発オプション**

Python、JavaScript、C/C++ を含む複数の開発プラットフォームおよびプログラミング言語をサポートします。Raspberry Pi、Arduino、各種 Linux 開発ボードと互換性があり、充実した SDK と API インターフェースを提供します。

**オープンソースエコシステム**

完全なオープンソースのハードウェア設計とソフトウェアスタックを備え、活発な開発者コミュニティが継続的な技術サポートを提供します。特定のアプリケーション要件を満たすために、機能を自由にカスタマイズおよび拡張できます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
