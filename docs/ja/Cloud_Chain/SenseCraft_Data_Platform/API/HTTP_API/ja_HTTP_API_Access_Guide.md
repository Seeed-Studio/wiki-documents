---
sidebar_position: 2
description: HTTP API アクセスガイド
title: HTTP API アクセスガイド
keywords:
- HTTP API 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/sensecraft-data-platform/api/http-api/http-api-access-guide
aliases:
  - /ja/Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide
last_update:
  date: 1/13/2023
  author: shuxu hu
---

## HTTP リクエストとレスポンス

  リクエストは HTTP Basic Authentication で認証されます。

### HTTP HOST

- China Station: https://sensecap.seeed.cn/openapi
- Global Station: https://sensecap.seeed.cc/openapi


### HTTP HEADER
 #### リクエスト
<table >
<tr>
<th> key </th>
<th> description </th>
</tr>
<tr>
<td width="300"> API-VERSION </td>
<td width="300"> api バージョン </td>
</tr>
</table>

 #### レスポンス
<table >
<tr>
<th> key </th>
<th> description </th>
</tr>
<tr>
<td width="300"> api-gateway-excute-second </td>
<td width="300"> api を実行するのにかかった時間（秒） </td>
</tr>
<tr>
<td width="300"> api-gateway-mpuo-consume </td>
<td width="300"> api の実行により消費されたクォータ </td>
</tr>
</table>

 #### HTTP 基本認証
  [HTTP Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) は RESTfull API 認証の最も一般的な方法の一つです。Access ID をユーザー名として、Access Key をパスワードとして使用します。すべての HTTP クライアントライブラリは Basic Authentication の組み込みサポートを持っているはずです。このドキュメントでは curl を使用し、Basic Authentication の認証情報を指定するために –user オプションを使用します。

  SenseCAP Portal を通じてアクセスキーを作成できます。アクセスキーの取得方法については、クイックスタートを参照してください。

 #### API レスポンス
 すべてのレスポンスキーは小文字とアンダースコアの規則に従います。

  #### 文字列での成功レスポンス
  ```cpp
    {
       "code":"0",
       "data":"
           // string
       "
   }
  ```
  #### オブジェクトでの成功レスポンス
  ```cpp
      {
       "code":"0",
       "data":{
           // object
       }
   }
  ```
  #### 配列での成功レスポンス
  ```cpp
      {
       "code":"0",
       "data":[
           // Array
       ]
   }
  ```
  #### エラーレスポンス
  ```cpp
   {
       "code":"1001",
       "msg":"error message"
   }
  ```
## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>