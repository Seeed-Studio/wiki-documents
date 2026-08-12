---
description: この記事では、SenseCraft AI のメインページについて簡単に紹介します。
title: 概要
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/1.webp
slug: /sensecraft-ai/overview
aliases:
  - /sensecraft_ai_overview
sidebar_position: 1
last_update:
  date: 08/06/2026
  author: Citric
createdAt: '2024-11-28'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/ja/sensecraft-ai/overview/
---


# SenseCraft AI 概要

SenseCraft AI は、開発者やクリエイターが AI プロジェクトを簡単に構築・デプロイできるように設計されたオールインワンのプラットフォームです。Web サイトには、AI 開発プロセスを効率化し、さまざまなスキルレベルのユーザーが利用できるようにするための幅広いツールと機能が用意されています。本 Wiki では、SenseCraft AI Web サイトの主なセクションを取り上げ、それぞれの主な機能と特徴を概観します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ワンクリックで直接アクセス 🖱️</font></span></strong>
    </a>
</div>

## Home

SenseCraft AI のホームページは中央ハブとして機能し、プラットフォームの主な機能の概要をユーザーに提供します。ページ上部のナビゲーションバーには、**Home**、**Applications**、**Models**、**Community** の 4 つのメインセクションがあります。

- **Home** – プラットフォームのランディングページ。
- **Applications** – すぐに使えるアプリを探せる **Application Square** を閲覧したり、**My Applications**（**Create New Applications** や **Create New Workspace for reCamera** を含む）で自分のアプリを管理したりできます。
- **Models** – **Model Library**（事前学習済みモデル）、デバイスごとの **Workspace**、**Training**（Image Classification Detection、Audio Classification Detection、Image Object Detection）、および **My Models**（**Add Model** を含む）を備えています。
- **Community** – 他の SenseCraft AI ユーザーやコントリビューターとつながることができます。

ホームページの主な焦点は **Start your journey: Deploy a pretrained Model** セクションであり、Seeed Studio ハードウェアを使用して事前学習済みモデルをデプロイする手順を、ステップバイステップでユーザーに案内します。このプロセスは 3 つの主なステップに分かれています：

<div style={{textAlign:'center'}}>
  <img
    src="https://sensecraft-wiki-static.oss-us-east-1.aliyuncs.com/seeed-studio-wiki-statics/sensecraft-ai/overview/sensecraft-ai-home-gesture-detection-170dd1cd.webp"
    alt="SenseCraft AI home page showing the Gesture Detection workflow from model discovery through deployment and sensor output before a device is connected"
    style={{width:950, maxWidth:'100%', height:'auto'}}
  />
</div>

1. モデルリポジトリから、事前学習済みモデルを選択します。
1. "Deploy and Preview Vision" 機能を使用して、モデルの結果をリアルタイムでデプロイおよびプレビューします。
1. 接続された Seeed Studio ハードウェアにモデルを適用し、センサー出力を確認します。

この機能は、ユーザー自身で完全なトレーニングプロセスを行うことなく、AI モデルを素早く試したいユーザーに特に有用です。

ページをさらに下にスクロールすると、ユーザーは "Training Models" 機能の紹介を見つけることができます。このセクションでは、モデルのトレーニングに関連するコンテンツが分類されており、ユーザーがプラットフォームのリソースを使って自分の AI モデルをトレーニングするために必要な情報を見つけやすくなっています。

最後に、ホームページでは "Sharing Vision AI Models" 機能が紹介されており、SenseCraft AI コミュニティ内でのコラボレーションと知識共有を促進します。この機能により、ユーザーは自分がトレーニングしたモデルを他のユーザーと共有でき、コミュニティ意識を育み、互いの成果を基に発展させることができます。

## ユーザーアカウント

[SenseCraft AI](https://sensecraft.seeed.cc/ai/model?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_model_library) はオープンプラットフォームであり、ユーザーはログインせずにすべての公開 AI モデルとホームページを閲覧できます。モデルをデプロイする場合や、自分のモデルを共有する場合にのみ、サインアップおよびサインインする必要があります。

[SenseCraft AI](https://sensecraft.seeed.cc/ai/model?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_model_library) と [SenseCraft Data Platform](https://sensecap.seeed.cc/portal/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_data_portal#/login)（旧 SenseCAP Cloud Platform）は、どちらも seeed studio がユーザー向けに提供するソフトウェアサービスです。ユーザーはどちらか一方のプラットフォームでアカウントを登録するだけで、同じアカウントを使って両方のプラットフォームにサインインできます。

### サインアップ

1. 名前と有効なメールアドレスを入力し、**get captcha** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/1.png" style={{width:1000, height:'auto'}}/></div>

2. メールから認証コードを取得し、サインアップページに入力します。

:::note
認証コードの有効期間は 10 分です。10 分以内に登録を完了してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/2.png" style={{width:700, height:'auto'}}/></div>

3. パスワードとその他のユーザー情報を入力して、登録を完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/3.png" style={{width:1000, height:'auto'}}/></div>

### サインイン

登録済みのメールアカウントでサインインします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/4.png" style={{width:1000, height:'auto'}}/></div>

### パスワードを忘れた場合

アカウントのパスワードを忘れた場合は、有効なアカウントを入力して認証コードを取得し、新しいパスワードを設定してください。

認証コードの有効期間は 10 分です。10 分以内にリセットを完了してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/5.png" style={{width:1000, height:'auto'}}/></div>

### パスワードの変更

1. ユーザーアカウントページにアクセスし、"Change your password" ボタンをクリックします。

2. 古いパスワードと新しいパスワードを入力して、パスワードを変更します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/6.png" style={{width:1000, height:'auto'}}/></div>

## 事前学習済みモデル

SenseCraft AI ウェブサイトの Pretrained Models セクションは、ユーザーが自分のデバイス上で簡単にアクセスしてデプロイできる AI モデルの包括的なリポジトリです。現在、このモデルリポジトリには 400 以上のモデルが収録されており、今後も継続的に追加されていきます。

### モデルカテゴリ

ユーザーが自分のニーズに最も適したモデルを見つけられるよう、ページ左側にはカテゴリ分けされたモデル一覧が表示されます。ユーザーは次のようなさまざまな条件に基づいてモデルをフィルタリングできます。

- **対応デバイス**: ユーザーは、自分が使用している特定のハードウェアと互換性のあるモデルを選択でき、シームレスな統合と最適なパフォーマンスを実現できます。

- **タスク**: モデルは、検出、分類、セグメンテーションなど、実行するように設計されたタスクに応じて分類されています。これにより、ユーザーは自分のプロジェクト要件に合致するモデルを素早く特定できます。

- **パブリッシャー**: ユーザーはパブリッシャーに基づいてモデルをフィルタリングすることもでき、信頼できるソースや特定の開発者によるモデルを簡単に見つけられます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/3.png" style={{width:1000, height:'auto'}}/></div>

### モデルの詳細

Pretrained Models ページの中央エリアには、各モデルの名前、簡単な説明、ビジュアル表現など、重要な情報が表示されます。このクイック概要により、ユーザーは各モデルが何を提供し、自分のプロジェクトにどのように適合するかを把握するのに役立ちます。

特定のモデルに関するより詳細な情報にアクセスするには、ユーザーはモデルのカードをクリックするだけです。すると、そのモデル専用のページに移動し、詳細な説明、パフォーマンス指標、デバイス上でモデルをインストールして使用するためのステップバイステップの手順を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/4.png" style={{width:1000, height:'auto'}}/></div>

### My Own Models

リポジトリで利用可能な公開 AI モデルに加えて、SenseCraft AI は、独自のモデルをトレーニングまたはアップロードしたユーザー向けにパーソナライズされたスペースも提供します。SenseCraft AI アカウントにログインすることで、ユーザーは "My Own Models" セクションにアクセスし、自分のプライベートモデルを見つけて管理できます。

"My Own Models" セクション内のモデルは完全に非公開であり、それらを作成したユーザーのみがアクセスできます。ただし、ユーザーは自分のモデルを公開するオプションも持っており、SenseCraft AI コミュニティの他の人々がその成果を活用できるようにすることができます。この機能は、ユーザー間のコラボレーションと知識共有を促進し、活気に満ちた支援的な AI 愛好家コミュニティの形成に寄与します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/5.png" style={{width:1000, height:'auto'}}/></div>

## トレーニング

SenseCraft AI ウェブサイトの Training セクションは、ユーザーが自分の特定のユースケースに合わせたカスタマイズモデルを作成できるように設計されています。現在、Training ページでは Classification と Object Detection の 2 種類のトレーニングを提供しています。

### Classification

Classification トレーニングは TensorFlow に基づいており、完全に Web ベースであるため、オペレーティングシステムの制限がありません。この機能により、ユーザーはローカルコンピュータのカメラや Seeed Studio 製品から取得した画像を使用してモデルをトレーニングできます。モデルをトレーニングするには、クラスごとに 40～50 枚の画像を収集するだけでよく、手動でのラベリングは不要です。トレーニングプロセスは高速で、数分でモデルを生成できます。さらに、Web インターフェースはリアルタイムプレビュー機能を提供しており、ユーザーはトレーニング済みモデルの結果を即座に確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/6.png" style={{width:1000, height:'auto'}}/></div>

### Object Detection

Object Detection トレーニングは YOLO-World モデルに基づいており、**Quick Training** と **Image Collection Training** の 2 つのサブセクションに分かれています。

- **Quick Training**: このオプションでは、オブジェクト名を入力するだけで単一クラス認識モデルを生成できます。ウェブサイトでは次のように説明されています: "Based on YOLO - World object detection model, you can quickly generate a single-class recognition model by inputting text."

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/7.png" style={{width:1000, height:'auto'}}/></div>

Object Detection トレーニングの Quick Training オプションは、最先端のリアルタイム物体検出システムである YOLO-World 物体検出モデルによって動作します。ユーザーがオブジェクト名を入力すると、システムは YOLO-World モデルの事前学習済み知識を活用し、そのオブジェクトの検出に特化した単一クラス認識モデルを生成します。

YOLO（You Only Look Once）モデルファミリーは、物体検出タスクにおける高速性と高精度で知られています。入力画像をグリッドに分割し、各グリッドセルに対してバウンディングボックスとクラス確率を予測します。特に YOLO-World モデルは、幅広いオブジェクトを網羅する膨大なデータセットでトレーニングされており、さまざまな検出タスクに対して優れた汎化性能を発揮します。

YOLO-World モデルの上に構築することで、Quick Training オプションはその堅牢な特徴抽出および物体位置特定能力を継承します。事前学習済みモデルが強力な基盤として機能するため、ユーザーは大量のトレーニングデータや計算資源を必要とせずに、単一クラス認識モデルを素早く生成できます。

しかし、Quick Training オプションには適応性や精度の面で制限がある可能性があることを認識しておくことが重要です。生成されたモデルは YOLO-World モデルの既存の知識に依存しているため、ユーザーが指定したオブジェクトの固有の特徴やバリエーションを常に十分に捉えられるとは限りません。その結果、特定の状況では精度の低下や誤検出が発生する可能性があります。

- **Image Collection Training**: このオプションでは、ユーザーはオブジェクト名を入力し、関連する画像をアップロードする必要があります。ウェブサイトではこの機能を次のように説明しています: "Based on YOLO - World object detection model, you can customize the training for text and image, which can improve the detection accuracy of the generated model."

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/8.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft AI の Image Collection Training オプションでは、ユーザーは手動で画像アノテーションを行うことなく、自分のデータセットを使用してカスタム物体検出モデルをトレーニングできます。この機能は YOLO-World 物体検出モデルに基づいており、バウンディングボックスのラベリングや物体セグメンテーションを必要としない、特別なトレーニング手法を利用しています。

このトレーニングオプションの背後にある重要な原理は、弱教師あり学習という概念です。弱教師あり学習では、モデルは正確な物体位置やバウンディングボックスのアノテーションを必要とせず、画像レベルのラベルだけを用いて物体を検出することを学習します。Image Collection Training の基盤となる YOLO-World モデルは、このアプローチを効果的に活用できるよう設計されています。

トレーニングプロセス中、ユーザーは検出したいオブジェクト名とともに一連の画像を提供します。モデルは、画像内に存在する視覚的パターンや特徴を、与えられたオブジェクト名と関連付けることを学習します。関心のあるオブジェクトを含む多様な画像をモデルに提示することで、モデルは一般化能力を獲得し、新しい未見の画像内でもそれらのオブジェクトを検出できるようになります。

YOLO-World モデルのアーキテクチャとトレーニング手法により、明示的なバウンディングボックスアノテーションを必要とせずに、画像内のオブジェクトを自動的に発見し位置特定することが可能になります。これは、畳み込みニューラルネットワーク（CNN）と、モデルが画像内の最も情報量の多い領域に注目するよう誘導する特別な損失関数の組み合わせによって実現されています。

手動での画像アノテーションの必要性を排除することで、Image Collection Training オプションはカスタム物体検出モデルを作成するために必要な労力と時間を大幅に削減します。ユーザーは、検出したいオブジェクトを含む画像のデータセットを収集し、オブジェクト名を指定するだけで、モデルにそれらのオブジェクトを自動的に認識させることができます。

ただし、結果として得られるモデルの性能には、データセットの品質と多様性が依然として重要な役割を果たすことに注意する必要があります。モデルが正確に一般化しオブジェクトを検出できるかどうかは、トレーニング画像の多様性と代表性に依存します。ユーザーは、異なるオブジェクトの外観、姿勢、背景、照明条件を網羅するデータセットを収集するよう努め、堅牢なパフォーマンスを確保する必要があります。

これら 2 つのトレーニングオプションを提供することで、SenseCraft AI はユーザーが自分の特定のニーズに最適化されたカスタム物体検出モデルを作成できるようにしています。Quick Training オプションは、シンプルな単一クラス認識モデルを素早く生成したいユーザーに最適です。一方、Image Collection Training オプションは、オブジェクト名と画像という形で独自のトレーニングデータを提供できるため、より高精度でカスタマイズされたモデルを必要とするユーザーに適しています。

## モデルの公開

SenseCraft AI は、開発者やモデラーのコンテンツ共創を支援するプラットフォームです！あなたの成果を世界中の開発者コミュニティと共有しましょう。同時に、当社の AI オープンプラットフォームを通じて、あなたの AI モデルを商業ニーズと結び付け、さまざまな業界の企業やユーザーに価値あるソリューションを提供する機会が得られます。商業分野における AI 技術のイノベーションと応用を共に実現するため、皆さまの参加と貢献を心よりお待ちしています。

1. モデルを追加するには、次の情報を入力する必要があります:

- Model Name
- Model Excerpt: モデルの簡単な説明
- Model Introduction：モデルの詳細な説明
- Model Deployment Preparation：モデルデプロイの前提条件、省略可
- Supported Device:モデルをどのデバイスにデプロイするかを選択します。現在、このプラットフォームは Jetson デバイス、XIAO ESP32-S3 などをサポートしています。
- Model Inference Example Image ：モデルの推論結果の画像をアップロードします

2. 情報の入力が完了したら、Next をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/8.png" style={{width:1000, height:'auto'}}/></div>

1. モデルパラメータに関する以下の情報を入力します。
2. 「モデルを公開 AI モデルライブラリに公開する」はデフォルトでチェックされています。チェックされたまま保存するとモデルは全員に表示され、チェックを外して保存するとモデルは自分にのみ表示されます。

|     | 内容|
| --- | --- |
| モデル形式 | 1 モデルの正しい形式<br />2 オプション:ONNX, Tensor RT, Pytorch<br />3 プラットフォームは今後さらに多くのモデル形式をサポートします |
| タスク | 1 モデルのタスクタイプ<br />2 オプション:Detection,Classification,Segment,Pose |
| AI フレームワーク | 1 モデルの AI フレームワーク<br />2 オプション:YOLOV5,YOLOV8,FOMO,MobileNetV2,PFLD<br />3 プラットフォームは今後さらに多くの AI フレームワークをサポートします |
| クラス | 1 特定のタスクまたは問題に対してモデルが分類するクラスまたはラベル<br />2 クラス ID とクラス名が正しく一致していることを確認してください。 |
| モデルファイル | 任意の形式のモデルファイルをアップロードします。 |
| モデル精度 | 1 モデルの精度<br />2 オプション:Int8,Float16,Float32 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::note
プラットフォームの健全な発展を確保するため、ユーザーが投稿したモデルおよびコンテンツを審査します。違法、不適切、または権利侵害となるコンテンツが見つかった場合、その公開は許可されず、必要に応じて削除されることがあります。
健全なプラットフォーム環境の維持にご理解とご協力をいただき、ありがとうございます。
:::

### カスタム AI モデル管理

ユーザーは自分のモデルを操作するためのすべての権限を持っています。

**モデルを公開**: 非公開モデルを公開し、すべてのユーザーが利用できるようにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image1.png" style={{width:1000, height:'auto'}}/></div>

**モデルを非公開化**: 公開モデルを非公開化し、そのモデルを自分だけが見られるようにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image2.png" style={{width:1000, height:'auto'}}/></div>

**モデルを削除**: 非公開モデルを削除します。公開モデルは削除できません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image3.png" style={{width:1000, height:'auto'}}/></div>

**モデルを編集**: モデルのすべての情報を変更できます。

## ワークスペース

SenseCraft AI の Workspace セクションは、デバイス固有の操作および学習済みモデルのデプロイに特化しています。ユーザーがカスタムモデルをさまざまなハードウェアデバイスと統合し、その結果をリアルタイムでプレビューできるシームレスなインターフェースを提供します。現在サポートされているデバイスには、Grove Vision AI V2、XIAO ESP32S3 Sense、NVIDIA Jetson、reCamera があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/9.png" style={{width:400, height:'auto'}}/></div>

### モデルのデプロイとプレビュー

ユーザーが学習済みモデルのアップロードに成功すると、Workspace 内のデバイス固有のページに移動できます。「Process」セクションでは、接続されたデバイスからのリアルタイム検出フィードを確認でき、モデルの動作中のパフォーマンスをプレビューできます。

このリアルタイムプレビュー機能は、デバイスのビデオストリーム内での物体検出におけるモデルの精度と有効性を評価できるため、特に有用です。ユーザーはモデルによって生成されたバウンディングボックス、ラベル、および信頼度スコアを視覚的に確認でき、そのパフォーマンスに関する即時のフィードバックを得られます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/10.png" style={{width:1000, height:'auto'}}/></div>

### モデルの微調整

リアルタイムプレビューに加えて、Workspace ではモデルの信頼度しきい値パラメータを微調整する機能も提供しています。この機能により、ユーザーは物体検出に対するモデルの感度を調整し、適合率と再現率のバランスを取ることができます。

信頼度しきい値を操作することで、ユーザーは物体検出に関するモデルの挙動を制御できます。信頼度しきい値を高くすると、モデルはより選択的になり、高い確信度を持つ物体のみを検出します。逆に、信頼度しきい値を低くすると、モデルはより高感度になり、低い信頼度スコアでも物体を検出するようになります。

この微調整機能により、ユーザーはアプリケーションの特性やデバイスが動作する環境に基づいてモデルを自分の要件に合わせて調整し、そのパフォーマンスを最適化できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/11.png" style={{width:1000, height:'auto'}}/></div>

### 出力とアプリケーション開発

Workspace はモデルのデプロイとプレビューにとどまらず、学習済みモデルを使用してアプリケーションを迅速にプロトタイピングおよび開発するためのツールも提供します。「Output」セクションでは、ユーザーがモデルの結果と対話し、それらを目的のアプリケーションに統合するためのさまざまなオプションを提供します。

XIAO ESP32S3 Sense を例にとると、Workspace は MQTT、GPIO、Serial Port など、さまざまな通信プロトコルおよびインターフェースをサポートしています。これらのオプションにより、ユーザーはモデルの出力を他のシステムへシームレスに送信したり、物体検出に基づいてアクションをトリガーしたり、検出結果に対してさらなる処理を行ったりできます。

これらの出力オプションを提供することで、SenseCraft AI は学習済みモデルを実用的なアプリケーションに統合するプロセスを簡素化します。ユーザーはさまざまな通信方法を素早く試し、自身のモデルの物体検出機能を活用したプロトタイプを開発できます。

例えば、ユーザーは MQTT 出力を利用して、リアルタイムの物体検出データを監視や分析目的でリモートサーバーに送信できます。あるいは、GPIO 出力を使用して、特定の物体の存在に基づいてライトを点灯させたり、アラームを作動させたりといった物理的なアクションをトリガーすることもできます。

Serial Port 出力は、デバイスと他のシステム間で通信を確立するための簡潔な方法を提供し、ユーザーがモデルの結果をさらなる処理や可視化のために送信できるようにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/12.png" style={{width:1000, height:'auto'}}/></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
