---
description: ChatGPT & DALL·E with Indicator
title: ChatGPT - DALL·E - SenseCAP Indicator
keywords:
- SenseCAP Indicator ChatGPT DALL·E Application Development
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_Application_ChatGPT
sidebar_position: 9
last_update:
  date: 11/16/2023
  author: Spencer
---

# SenseCAP Indicator - ChatGPT - DALL·E アプリケーション開発

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/xUX47UnT7xk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="button-container">
    <a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">
            今すぐ購入 🖱️
    </a>
</div>

このガイドでは、提供されたBSP（Board Support Package）に従って、プログラムの迅速な追加、削除、変更のためのOpenAIデモの構成方法について説明します。

## 前提条件

- [SenseCAP Indicator](https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html) 1台
- コンピューターにインストールされた[ESP-IDF](https://github.com/espressif/esp-idf)ツールチェーン

:::tip
ユーザーインターフェース（UI）の変更方法を学びたい場合は、ガイドを参照してください：[独自のUIを作成する方法](/ja/SenseCAP_Indicator_How_to_Create_your_own_UI)

IDFツールチェーンをまだインストールしていない場合は、ガイドの手順に従ってください：[デフォルトファームウェアのフラッシュ方法](/ja/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware)
:::

## はじめに

<div class="img-container">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/GPT_RES_BE_RICH.JPG"/>

  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/DALL_1_CAT.JPG"/>

</div>

OpenAI起動フローチャートに関連する主要なコードは以下の通りです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Indicator_openai_sys.png"/></div>

### 機能

SenseCAP Indicator x ChatGPT x DALL·E アプリケーションは、MVC（Model-View-Controller）アーキテクチャに基づいて開発されています。プロジェクトのワークフローは、MVCアーキテクチャへの依存を示しています。

このアーキテクチャでは、コンポーネントは以下のように構成されています：

- View：Viewは様々なイベントトリガー信号を処理し、ディスプレイの駆動にLVGL（Light and Versatile Graphics Library）を利用します。

:::note
ユーザーインターフェース（UI）を迅速に構築するために、[SquareLine Studio](https://squareline.io/)を使用できます。これは私たちのプロジェクトでも採用されています。このガイドに従ってスムーズでシームレスな体験を確保するために、SquareLine Studio バージョン1.3.0の使用を推奨します。
:::

- Model：Modelには`indicator_openai.c`ファイルが含まれており、`indicator_openai_init()`関数が含まれています。Modelエントリで実行されると、この関数はOpenAIにリクエストを送信し、レスポンスを受信し、Viewを通じて画面に表示するためにそれらを解析します。

以下は、Modelの主要な機能とワークフローです（[API Key](/ja/Sensor/SenseCAP/SenseCAP_Indicator/Set_An_API_Key)が保存された後）：

#### **ChatGPTフローチャート**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/model_openai.png"/></div>

#### **DALL·Eフローチャート**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/model_openai_DALLE.png"/></div>

## サンプルコード

OpenAIサービスを利用するために、OpenAIにリクエストを送信し、レスポンスを受信し、JSONレスポンスを解析できる関数を実装する必要があります。以下のコードスニペットは、必要なコード構造を示しています：

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ChatGPT" label="ChatGPT Code">

```c title="openai.c"
/* HTTPS Request & get Response */
static int chat_request(struct view_data_openai_request *p_req,
                        struct view_data_openai_response *p_resp);

/* Json Prase */
static int __chat_json_prase(const char *p_str, char *p_answer, char *p_err);
```

`indicator_openai.c` の `chat_request(...)` 関数は、OpenAI API にリクエストを送信し、レスポンスを受信し、JSON レスポンスを解析する役割を担っています。この関数は、ユーザーが提供したデータをカプセル化した HTTP リクエストを生成し、`mbedtls_send_then_recv(...)` を使用してサーバーと通信します。

アプリケーションにプロンプトを追加するには、`chat_request(...)` 関数の `data_buf` 変数を以下のように変更できます：

**プロンプトの追加：**

```c
data_len += sprintf(data_buf + data_len, "Your are SenseCAP Indicator, developed by Seeed Studio, has been launched on April 20th, 2023.");
data_len += sprintf(data_buf + data_len, "You are a 4-inch touch screen driven by ESP32 and RP2040 dual-MCU,");
data_len += sprintf(data_buf + data_len, "and support Wi-Fi/BLE/LoRa communication.");
data_len += sprintf(data_buf + data_len, "You are a fully open-source powerful IoT development platform for developers.");
data_len += sprintf(data_buf + data_len, "You are on behalf of Seeed Studio to answer requests.");
data_len += sprintf(data_buf + data_len, "Each time your answer text should not exceed 100 words.");
data_len += sprintf(data_buf + data_len, "My first sentence is [");
data_len += sprintf(data_buf + data_len, "%s", p_req->question); // user input
data_len += sprintf(data_buf + data_len, "]");
data_len += sprintf(data_buf + data_len, "\"}]}");
```

この関数では、`mbedtls_send_then_recv` が呼び出されてリクエストを実行し、メソッドを取得します。

</TabItem>
<TabItem value="DALL·E" label="DALL·E Code">

```c title="openai.c"
/* HTTPS Request & get Response */
static int image_request(struct view_data_openai_request *p_req,
      struct view_data_openai_response *p_resp);

/* Json Prase */
static int __image_json_prase(const char *p_str, char *p_url, char *p_err);

/* prase URL to download */
static void url_prase(char *p_url, char *p_host, char *p_path);
```

> 原理：リクエストが成功すると、URL アドレスが返されます。この URL リンクから画像をダウンロードしてデコードすることで、表示することができます。

`ChatGPT Code` と同様に、初期リクエストでプロンプトを利用して画像 URL を取得します。URL を取得した後、取得した URL を使用して画像をローカルバッファにダウンロードを試みます。

</TabItem>
</Tabs>

<!-- Code END -->

---

<details>

<summary>ChatGPT & DALL·E Code</summary>

詳細かつ最新のコードについては、[SenseCAP Indicator OpenAI](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/main/examples/indicator_openai) を参照してください。

```c
#include "indicator_openai.h"
#include "cJSON.h"
#include "esp_http_client.h"
#include "esp_tls.h"
#include "freertos/semphr.h"

#include "lwip/dns.h"
#include "lwip/err.h"
#include "lwip/netdb.h"
#include "lwip/sockets.h"
#include "lwip/sys.h"

#include "esp_crt_bundle.h"
#include "mbedtls/ctr_drbg.h"
#include "mbedtls/entropy.h"
#include "mbedtls/error.h"
#include "mbedtls/esp_debug.h"
#include "mbedtls/net_sockets.h"
#include "mbedtls/platform.h"
#include "mbedtls/ssl.h"
#include "nvs.h"

struct indicator_openai
{
};

static const char *TAG = "openai";

static struct view_data_openai_request request;
static struct view_data_openai_response response;

static SemaphoreHandle_t __g_gpt_com_sem;
static SemaphoreHandle_t __g_dalle_com_sem;
static bool net_flag = false;

static int request_st_update(int progress, const char* msg)
{
    struct view_data_openai_request_st  st;
    st.progress = progress;
    strcpy(st.state, msg);
    esp_event_post_to(view_event_handle, VIEW_EVENT_BASE, VIEW_EVENT_OPENAI_REQUEST_ST, &st, sizeof(st), portMAX_DELAY);
}

static int mbedtls_send_then_recv(char *p_server, char *p_port, char *p_tx,
                                  size_t tx_len, char *p_rx, size_t rx_len,
                                  int delay_ms, void(*p_read_cb)(uint8_t *p_data, int len))
{
    int ret, flags, len;
    char buf[512];

    mbedtls_entropy_context entropy;
    mbedtls_ctr_drbg_context ctr_drbg;
    mbedtls_ssl_context ssl;
    mbedtls_x509_crt cacert;
    mbedtls_ssl_config conf;
    mbedtls_net_context server_fd;

    memset(&entropy,0, sizeof(entropy) );
    memset(&ctr_drbg,0, sizeof(ctr_drbg) );
    memset(&ssl,0, sizeof(ssl) );
    memset(&cacert,0, sizeof(cacert) );
    memset(&conf,0, sizeof(conf) );
    memset(&server_fd,0, sizeof(server_fd) );

    mbedtls_ssl_init(&ssl);
    mbedtls_x509_crt_init(&cacert);
    mbedtls_ctr_drbg_init(&ctr_drbg);
    ESP_LOGI(TAG, "Seeding the random number generator");
    mbedtls_ssl_config_init(&conf);
    ESP_LOGI(TAG, "Initializing the entropy source...");
    mbedtls_entropy_init(&entropy);
    ESP_LOGI(TAG, "Initializing the ctr_drbg...");
    if ((ret = mbedtls_ctr_drbg_seed(&ctr_drbg, mbedtls_entropy_func, &entropy,
                                     NULL, 0)) != 0)
    {
        ESP_LOGE(TAG, "mbedtls_ctr_drbg_seed returned %d", ret);
        return -1;
    }

    ESP_LOGI(TAG, "Attaching the certificate bundle...");
    ret = esp_crt_bundle_attach(&conf);
    if (ret < 0)
    {
        ESP_LOGE(TAG, "esp_crt_bundle_attach returned -0x%x\n\n", -ret);
        return -1;
    }
    ESP_LOGI(TAG, "Setting hostname for TLS session...");
    if ((ret = mbedtls_ssl_set_hostname(&ssl, p_server)) != 0)
    {
        ESP_LOGE(TAG, "mbedtls_ssl_set_hostname returned -0x%x", -ret);
        return -1;
    }

    ESP_LOGI(TAG, "Setting up the SSL/TLS structure...");
    if ((ret = mbedtls_ssl_config_defaults(&conf, MBEDTLS_SSL_IS_CLIENT,
                                           MBEDTLS_SSL_TRANSPORT_STREAM,
                                           MBEDTLS_SSL_PRESET_DEFAULT)) != 0)
    {
        ESP_LOGE(TAG, "mbedtls_ssl_config_defaults returned %d", ret);
        goto exit;
    }

    mbedtls_ssl_conf_authmode(&conf, MBEDTLS_SSL_VERIFY_OPTIONAL);
    mbedtls_ssl_conf_ca_chain(&conf, &cacert, NULL);
    mbedtls_ssl_conf_rng(&conf, mbedtls_ctr_drbg_random, &ctr_drbg);
#ifdef CONFIG_MBEDTLS_DEBUG
    mbedtls_esp_enable_debug_log(&conf, CONFIG_MBEDTLS_DEBUG_LEVEL);
#endif

#ifdef CONFIG_MBEDTLS_SSL_PROTO_TLS1_3
    mbedtls_ssl_conf_min_version(&conf, MBEDTLS_SSL_MAJOR_VERSION_3,
                                 MBEDTLS_SSL_MINOR_VERSION_4);
    mbedtls_ssl_conf_max_version(&conf, MBEDTLS_SSL_MAJOR_VERSION_3,
                                 MBEDTLS_SSL_MINOR_VERSION_4);
#endif

    if ((ret = mbedtls_ssl_setup(&ssl, &conf)) != 0)
    {
        ESP_LOGE(TAG, "mbedtls_ssl_setup returned -0x%x\n\n", -ret);
        goto exit;
    }

    mbedtls_net_init(&server_fd);

    ESP_LOGI(TAG, "Connecting to %s:%s...", p_server, p_port);

    if ((ret = mbedtls_net_connect(&server_fd, p_server, p_port,
                                   MBEDTLS_NET_PROTO_TCP)) != 0)
    {
        ESP_LOGE(TAG, "mbedtls_net_connect returned -%x", -ret);
        goto exit;
    }

    ESP_LOGI(TAG, "Connected.");

    mbedtls_ssl_set_bio(&ssl, &server_fd, mbedtls_net_send, mbedtls_net_recv,
                        NULL);

    ESP_LOGI(TAG, "Performing the SSL/TLS handshake...");

    while ((ret = mbedtls_ssl_handshake(&ssl)) != 0)
    {
        if (ret != MBEDTLS_ERR_SSL_WANT_READ && ret != MBEDTLS_ERR_SSL_WANT_WRITE)
        {
            ESP_LOGE(TAG, "mbedtls_ssl_handshake returned -0x%x", -ret);
            goto exit;
        }
    }

    ESP_LOGI(TAG, "Verifying peer X.509 certificate...");

    if ((flags = mbedtls_ssl_get_verify_result(&ssl)) != 0)
    {
        /* In real life, we probably want to close connection if ret != 0 */
        ESP_LOGW(TAG, "Failed to verify peer certificate!");
        bzero(buf, sizeof(buf));
        mbedtls_x509_crt_verify_info(buf, sizeof(buf), "  ! ", flags);
        ESP_LOGW(TAG, "verification info: %s", buf);
    }
    else
    {
        ESP_LOGI(TAG, "Certificate verified.");
    }

    ESP_LOGI(TAG, "Cipher suite is %s", mbedtls_ssl_get_ciphersuite(&ssl));

    ESP_LOGI(TAG, "Writing HTTP request\r\n%s", p_tx);

    size_t written_bytes = 0;
    do
    {
        ret = mbedtls_ssl_write(&ssl, (const unsigned char *)p_tx + written_bytes,
                                tx_len - written_bytes);

        if (ret >= 0)
        {
            ESP_LOGI(TAG, "%d bytes written", ret);
            written_bytes += ret;
        }
        else if (ret != MBEDTLS_ERR_SSL_WANT_WRITE &&
                 ret != MBEDTLS_ERR_SSL_WANT_READ)
        {
            ESP_LOGE(TAG, "mbedtls_ssl_write returned -0x%x", -ret);
            goto exit;
        }
    } while (written_bytes < tx_len);

    if (delay_ms > 0)
    {
        vTaskDelay(delay_ms / portTICK_PERIOD_MS); // wait
    }

    ESP_LOGI(TAG, "Reading HTTP response..."); // HERE！！！

    size_t recv_len = 0;

    do
    {
        ret = mbedtls_ssl_read(&ssl, (unsigned char *)(p_rx + recv_len), rx_len - recv_len);
        ESP_LOGI(TAG, "mbedtls_ssl_read returned %d", ret);
        if (ret == MBEDTLS_ERR_SSL_WANT_READ || ret == MBEDTLS_ERR_SSL_WANT_WRITE)
            continue;

        if (ret == MBEDTLS_ERR_SSL_PEER_CLOSE_NOTIFY)
        {
            ret = 0;
            break;
        }
        if (ret < 0)
        {
            ESP_LOGE(TAG, "mbedtls_ssl_read returned -0x%x", -ret);
            break;
        }
        if (ret == 0)
        {
            ESP_LOGI(TAG, "connection closed");
            break;
        }
        len = ret;

        // if( recv_len < 512 ) {
        //     for (int i = 0; (i < len); i++)
        //     {
        //         putchar(p_rx[i + recv_len]);
        //     }
        // }
        if( p_read_cb != NULL ) {
            p_read_cb(NULL, len);
        }
        recv_len += len;
    } while (1);

    ESP_LOGI(TAG, "recv total: %d bytes ", recv_len);

    mbedtls_ssl_close_notify(&ssl);
exit:
    mbedtls_ssl_session_reset(&ssl);
    mbedtls_net_free(&server_fd);

    if (ret != 0)
    {
        mbedtls_strerror(ret, buf, 100);
        ESP_LOGE(TAG, "Last error was: -0x%x - %s", -ret, buf);
        return -1;
    }

    return recv_len;
}

#define WEB_SERVER "api.openai.com"
#define WEB_PORT "443"

static char *p_recv_buf;
static size_t recv_buf_max_len;

static char openai_api_key[52];
static bool have_key = false;

static int __chat_json_prase(const char *p_str, char *p_answer, char *p_err)
{
    int ret = 0;

    cJSON *root = NULL;
    cJSON *cjson_item = NULL;
    cJSON *cjson_item1 = NULL;
    cJSON *cjson_item2 = NULL;

    root = cJSON_Parse(p_str);
    if (root == NULL)
    {
        strcpy(p_err, "Parse json fail");
        return -1;
    }

    // {
    //     "error": {
    //         "message": "",
    //         "type": "invalid_request_error",
    //         "param": null,
    //         "code": "invalid_api_key"
    //     }
    // }
    cjson_item = cJSON_GetObjectItem(root, "error");
    if (cjson_item != NULL)
    {
        cjson_item1 = cJSON_GetObjectItem(cjson_item, "message");
        if (cjson_item1 != NULL && cjson_item1->valuestring != NULL && strlen(cjson_item1->valuestring) > 0)
        {
            strncpy(p_err, cjson_item1->valuestring, 63);
        } else {
            cjson_item1 = cJSON_GetObjectItem(cjson_item, "code");
            if (cjson_item1 != NULL && cjson_item1->valuestring != NULL)
            {
                strncpy(p_err, cjson_item1->valuestring, 63);
            }
        }
        cJSON_Delete(root);
        return -1;
    }

    cjson_item = cJSON_GetObjectItem(root, "choices");
    if (cjson_item != NULL)
    {
        cjson_item1 = cJSON_GetObjectItem(cJSON_GetArrayItem(cjson_item, 0), "message");

        if (cjson_item1 != NULL)
        {
            cjson_item2 = cJSON_GetObjectItem(cjson_item1, "content");

            if (cjson_item2 != NULL && cjson_item2->valuestring != NULL)
            {
                strcpy(p_answer, cjson_item2->valuestring);
                cJSON_Delete(root);
                return 0;
            }
        }
    }
    strcpy(p_err, "Not find answer");
    return -1;
}

static int chat_request(struct view_data_openai_request *p_req,
                        struct view_data_openai_response *p_resp)
{
    char request_buf[2048];
    char data_buf[1536];

    int data_len = 0;
    int ret = 0;
    int len = 0;

    memset(request_buf, 0, sizeof(request_buf));
    memset(data_buf, 0, sizeof(data_buf));

    data_len = sprintf(data_buf,
                       "{\"model\":\"gpt-3.5-turbo\",\"temperature\":0.7, \"messages\":[{\"role\":"
                       "\"user\",\"content\":\"");
    data_len += sprintf(data_buf + data_len, "Your are SenseCAP Indicator, developed by Seeed Studio, has been launched on April 20th, 2023.");
    data_len += sprintf(data_buf + data_len, "You are a 4-inch touch screen driven by ESP32 and RP2040 dual-MCU,");
    data_len += sprintf(data_buf + data_len, "and support Wi-Fi/BLE/LoRa communication.");
    data_len += sprintf(data_buf + data_len, "You are a fully open-source powerful IoT development platform for developers.");
    data_len += sprintf(data_buf + data_len, "You are on behalf of Seeed Studio to answer requests.");
    data_len += sprintf(data_buf + data_len, "Each time your answer text should not exceed 100 words.");
    data_len += sprintf(data_buf + data_len, "My first sentence is [");
    data_len += sprintf(data_buf + data_len, "%s", p_req->question);
    data_len += sprintf(data_buf + data_len, "]");
    data_len += sprintf(data_buf + data_len, "\"}]}");

    len += sprintf(request_buf + len, "POST /v1/chat/completions HTTP/1.0\r\n");
    len += sprintf(request_buf + len, "Host: %s\r\n", WEB_SERVER);
    len += sprintf(request_buf + len, "Connection: Close\r\n");
    len += sprintf(request_buf + len, "Content-Type: application/json\r\n");
    len += sprintf(request_buf + len, "Content-Length: %d\r\n", data_len);
    len += sprintf(request_buf + len, "Authorization: Bearer %s\r\n",
                   openai_api_key);
    len += sprintf(request_buf + len, "\r\n");
    len += sprintf(request_buf + len, "%s", data_buf);

    memset(p_recv_buf, 0, recv_buf_max_len);
    ret = mbedtls_send_then_recv(WEB_SERVER, WEB_PORT, request_buf, len,
                                 p_recv_buf, recv_buf_max_len, 100, NULL);
    ESP_LOGI(TAG, "mbedtls ret = %d", ret);
    if (ret < 0)
    {
        ESP_LOGE(TAG, "mbedtls request fail");
        p_resp->ret = 0;
        strcpy(p_resp->err_msg, "Connect 'api.openai.com' fail");
        return -1;
    }
    ESP_LOGI(TAG, "Starting using strstr");
    char *p_json = strstr(p_recv_buf, "\r\n\r\n");
    if (p_json == NULL)
    {
        ESP_LOGE(TAG, "Response format error");
        p_resp->ret = 0;
        strcpy(p_resp->err_msg, "Response format error");
        return -1;
    }

    p_json += 4;

    p_resp->p_answer = p_recv_buf + recv_buf_max_len / 2; // use p_recv_buf mem

    ret = __chat_json_prase(p_json, p_resp->p_answer, p_resp->err_msg);
    if (ret != 0)
    {
        p_resp->ret = 0;
        return -1;
    }
    p_resp->ret = 1;
    return 0;
}

static int __image_json_prase(const char *p_str, char *p_url, char *p_err)
{
    int ret = 0;

    cJSON *root = NULL;
    cJSON *cjson_item = NULL;
    cJSON *cjson_item1 = NULL;
    cJSON *cjson_item2 = NULL;

    root = cJSON_Parse(p_str);
    if (root == NULL)
    {
        strcpy(p_err, "Parse json fail");
        return -1;
    }

    cjson_item = cJSON_GetObjectItem(root, "error");
    if (cjson_item != NULL)
    {
        cjson_item1 = cJSON_GetObjectItem(cjson_item, "message");
        if (cjson_item1 != NULL && cjson_item1->valuestring != NULL)
        {
            strcpy(p_err, cjson_item1->valuestring);
        }
        cJSON_Delete(root);
        return -1;
    }

    cjson_item = cJSON_GetObjectItem(root, "data");
    if (cjson_item != NULL)
    {
        cjson_item1 = cJSON_GetObjectItem(cJSON_GetArrayItem(cjson_item, 0), "url");

        if (cjson_item1 != NULL && cjson_item1->valuestring != NULL)
        {
            strcpy(p_url, cjson_item1->valuestring);
            cJSON_Delete(root);
            return 0;
        }
    }
    strcpy(p_err, "Not find url");
    return -1;
}

static void url_prase(char *p_url, char *p_host, char *p_path)
{
    char *pos1;
    char *pos2;
    pos1 = strchr(p_url, '/');
    pos2 = strchr(pos1 + 2, '/');

    strncpy(p_host, pos1 + 2, pos2 - (pos1 + 2));
    strncpy(p_path, pos2, strlen(pos2) + 1);
}

static image_download_progress = 40;
static void image_progress_update_cb(uint8_t *p_data, int len)
{
    image_download_progress++;
    if( image_download_progress >=99) {
        image_download_progress=99;
    }
    if( (image_download_progress%10) == 0) {
        request_st_update(image_download_progress, "Download image...");
    }
}

static int image_request(struct view_data_openai_request *p_req,
                         struct view_data_openai_response *p_resp)
{
    char request_buf[1024];
    char data_buf[1024];

    int data_len = 0;
    int ret = 0;
    int len = 0;

    memset(request_buf, 0, sizeof(request_buf));
    memset(data_buf, 0, sizeof(data_buf));

    if( strlen(request.question) == 0) {
        strcpy(request.question, "Astronaut riding a horse in space.");
    }

    data_len =
    sprintf(data_buf, "{\"prompt\":\"%s\",\"n\":1,\"size\":\"512x512\"}",
                p_req->question);

    len += sprintf(request_buf + len, "POST /v1/images/generations HTTP/1.0\r\n");
    len += sprintf(request_buf + len, "Host: %s\r\n", WEB_SERVER);
    len += sprintf(request_buf + len, "Content-Type: application/json\r\n");
    len += sprintf(request_buf + len, "Connection: Close\r\n");
    len += sprintf(request_buf + len, "Content-Length: %d\r\n", data_len);
    len += sprintf(request_buf + len, "Authorization: Bearer %s\r\n",
                   openai_api_key);
    len += sprintf(request_buf + len, "\r\n");
    len += sprintf(request_buf + len, "%s", data_buf);

    memset(p_recv_buf, 0, recv_buf_max_len);

    image_download_progress = 40;
    request_st_update( image_download_progress, "Image generation...");
    ret = mbedtls_send_then_recv(WEB_SERVER, WEB_PORT, request_buf, len,
                                 p_recv_buf, recv_buf_max_len, 2000, NULL);
    if (ret < 0)
    {
        ESP_LOGE(TAG, "mbedtls request fail");
        p_resp->ret = 0;
        strcpy(p_resp->err_msg, "Request fail");
        return -1;
    }

    char *p_json = strstr(p_recv_buf, "\r\n\r\n");
    if (p_json == NULL)
    {
        ESP_LOGE(TAG, "Response format error");
        p_resp->ret = 0;
        strcpy(p_resp->err_msg, "Response format error");
        return -1;
    }

    p_json += 4;

    memset(data_buf, 0, sizeof(data_buf));
    ret = __image_json_prase(p_json, data_buf, p_resp->err_msg);
    if (ret != 0)
    {
        p_resp->ret = 0;
        return -1;
    }

    // download image
    ESP_LOGI(TAG, "Download image from (%s)...", data_buf);

    char host[64];
    char path[512];

    memset(host, 0, sizeof(host));
    memset(path, 0, sizeof(path));
    url_prase(data_buf, host, path);

    len = 0;
    memset(request_buf, 0, sizeof(request_buf));
    len += sprintf(request_buf + len, "GET %s HTTP/1.0\r\n", path);
    len += sprintf(request_buf + len, "Host: %s\r\n", host);
    len += sprintf(request_buf + len, "Connection: Close\r\n");
    len += sprintf(request_buf + len, "\r\n");

    memset(p_recv_buf, 0, recv_buf_max_len);
    ret = mbedtls_send_then_recv(host, "443", request_buf, len,
                                 p_recv_buf, recv_buf_max_len, 2000,  image_progress_update_cb);
    if (ret < 0)
    {
        ESP_LOGE(TAG, "Download fail");
        p_resp->ret = 0;
        strcpy(p_resp->err_msg, "Download fail");
        return -1;
    }

    // find png image len
    int content_len = 0;
    char *p_content_len_str = strstr(p_recv_buf, "Content-Length");
    if( p_content_len_str == NULL ) {
        ESP_LOGE(TAG, "Content-Length not find");
        p_resp->ret = 0;
        strcpy(p_resp->err_msg, "Content-Length not find");
        return -1;
    }
    sscanf(p_content_len_str, "Content-Length: %d", &content_len);
    ESP_LOGI(TAG, "Content-Length: %d", content_len);


    // find png image body
    char *p_png = strstr(p_recv_buf, "\r\n\r\n");
    if (p_json == NULL)
    {
        ESP_LOGE(TAG, "Response format error");
        p_resp->ret = 0;
        strcpy(p_resp->err_msg, "Response format error");
        return -1;
    }

    p_png += 4;
    p_resp->p_answer = p_png;
    p_resp->ret = 1;
    p_resp->len = content_len;
    return 0;
}

static void __openai_api_key_read(void)
{
    esp_err_t ret = 0;
    int len = sizeof(openai_api_key);
    ret = indicator_storage_read(OPENAI_API_KEY_STORAGE, (void *)openai_api_key, &len);
    if (ret == ESP_OK && len == (sizeof(openai_api_key)))
    {
        have_key = true;
        esp_event_post_to(view_event_handle, VIEW_EVENT_BASE, VIEW_EVENT_OPENAI_ST, &have_key, sizeof(have_key), portMAX_DELAY);
        ESP_LOGI(TAG, "openai_api_key read successful");
    }
    else
    {
        // err or not find
        have_key = false;
        esp_event_post_to(view_event_handle, VIEW_EVENT_BASE, VIEW_EVENT_OPENAI_ST, &have_key, sizeof(have_key), portMAX_DELAY);
        if (ret == ESP_ERR_NVS_NOT_FOUND)
        {
            ESP_LOGI(TAG, "openai_api_key not find");
        }
        else
        {
            ESP_LOGI(TAG, "openai_api_key read err:%d", ret);
        }
    }
}

static int __openai_init()
{
    recv_buf_max_len = 1024 * 1024;
    p_recv_buf = malloc(recv_buf_max_len); // from psram
    if (p_recv_buf == NULL)
    {
        ESP_LOGE(TAG, "malloc %s bytes fail!", recv_buf_max_len);
    }
}

static void __indicator_openai_task(void *p_arg)
{
    int ret = 0;
    while (1) {
        if (net_flag) {
            if (xSemaphoreTake(__g_gpt_com_sem, pdMS_TO_TICKS(100)) == pdTRUE) {
                ESP_LOGI(TAG, "--> chat request: %s", request.question);
                memset(&response, 0, sizeof(response));
                request_st_update(99, "Request...");
                ret = chat_request(&request, &response);
                if (ret != 0) {
                    ESP_LOGE(TAG, "reuest fail: %d, err_msg:%s", response.ret, response.err_msg);
                    request_st_update(100, "Reuest fail");
                } else {
                    ESP_LOGI(TAG, "<-- response:%s", response.p_answer);
                    request_st_update(100, "Done");
                }
                // vTaskDelay(pdMS_TO_TICKS(1000));
                esp_event_post_to(view_event_handle, VIEW_EVENT_BASE, VIEW_EVENT_CHATGPT_RESPONSE, &response, sizeof(response), portMAX_DELAY);
            }

            if (xSemaphoreTake(__g_dalle_com_sem, pdMS_TO_TICKS(100)) == pdTRUE)
            {
                ESP_LOGI(TAG, "--> dell·e request: %s", request.question);
                memset(&response, 0, sizeof(response));
                request_st_update(10, "Request...");
                ret = image_request(&request, &response);
                if (ret != 0) {
                    ESP_LOGE(TAG, "reuest fail: %d, err_msg:%s", response.ret, response.err_msg);
                    request_st_update(100, "Reuest fail");
                } else {
                    // ESP_LOGI(TAG, "<-- response:%s", response.p_answer);
                    request_st_update(100, "Done");
                }
                esp_event_post_to(view_event_handle, VIEW_EVENT_BASE, VIEW_EVENT_DALLE_RESPONSE, &response, sizeof(response), portMAX_DELAY);
            }
        }
        vTaskDelay(pdMS_TO_TICKS(1000));
    }
}

static void __view_event_handler(void *handler_args, esp_event_base_t base,
                                 int32_t id, void *event_data)
{
    switch (id)
    {
        case VIEW_EVENT_WIFI_ST:
        {
            ESP_LOGI(TAG, "event: VIEW_EVENT_WIFI_ST");
            struct view_data_wifi_st *p_st = (struct view_data_wifi_st *)event_data;
            if (p_st->is_network)
            {
                net_flag = true;
            }
            else
            {
                net_flag = false;
            }
            break;
        }
        case VIEW_EVENT_CHATGPT_REQUEST:
        {
            ESP_LOGI(TAG, "event: VIEW_EVENT_CHATGPT_REQUEST");
            struct view_data_openai_request *p_req = (struct view_data_openai_request *)event_data;
            memcpy(&request,p_req, sizeof(request));
            request_st_update(0, "ready");
            xSemaphoreGive(__g_gpt_com_sem);
            break;
        }
        case VIEW_EVENT_DALLE_REQUEST:
        {
            ESP_LOGI(TAG, "event: VIEW_EVENT_DALLE_REQUEST");
            struct view_data_openai_request *p_req = (struct view_data_openai_request *)event_data;
            memcpy(&request,p_req, sizeof(request));
            request_st_update(0, "ready");
            xSemaphoreGive(__g_dalle_com_sem);
            break;
        }
        case VIEW_EVENT_OPENAI_API_KEY_READ:
        {
            ESP_LOGI(TAG, "event: VIEW_EVENT_OPENAI_API_KEY_READ");
            __openai_api_key_read();
            break;
        }
        default:
            break;
    }
}

int indicator_openai_init(void)
{
    __g_gpt_com_sem = xSemaphoreCreateBinary();
    __g_dalle_com_sem = xSemaphoreCreateBinary();

    __openai_api_key_read();
    __openai_init();

    ESP_ERROR_CHECK(esp_event_handler_instance_register_with( view_event_handle,
                                                            VIEW_EVENT_BASE, VIEW_EVENT_WIFI_ST,
                                                            __view_event_handler, NULL, NULL));
    ESP_ERROR_CHECK(esp_event_handler_instance_register_with( view_event_handle,
                                                            VIEW_EVENT_BASE, VIEW_EVENT_CHATGPT_REQUEST,
                                                            __view_event_handler, NULL, NULL));
    ESP_ERROR_CHECK(esp_event_handler_instance_register_with( view_event_handle,
                                                            VIEW_EVENT_BASE, VIEW_EVENT_DALLE_REQUEST,
                                                            __view_event_handler, NULL, NULL));
    ESP_ERROR_CHECK(esp_event_handler_instance_register_with( view_event_handle,
                                                            VIEW_EVENT_BASE, VIEW_EVENT_OPENAI_API_KEY_READ,
                                                            __view_event_handler, NULL, NULL));
    xTaskCreate(&__indicator_openai_task, "__indicator_openai_task", 1024 * 10, NULL, 10, NULL);
}
```

</details>

## リソース

1. [SenseCAP Indicator X ChatGPT](/ja/SenseCAP_Indicator_ChatGPT)
2. [SenseCAP Indicator X DALL·E](/ja/SenseCAP_Indicator_DALL-E)
3. **Demo SDK**: SenseCAP IndicatorのDemo SDKは[GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32)で入手できます。
4. **SenseCAP Indicator ユーザーガイド**: ユーザーガイドでは、SenseCAP Indicatorボードのソフトウェアとハードウェアに関する詳細情報を提供しています。[こちら](/ja/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator)でお読みいただけます。
5. **Chat completions OpenAI ガイド**: Chat APIが初めての方は、このガイドが役立ちます。[こちら](https://platform.openai.com/docs/guides/chat/chat-completions-beta)でご確認ください。
6. **`indicator_openai.c` ファイル**: このファイルには、`ChatGPT`と`DALL·E`統合のメイン関数が含まれています。[こちら](https://raw.githubusercontent.com/Seeed-Solution/SenseCAP_Indicator_ESP32/main/examples/indicator_openai/main/model/indicator_openai.c)でご覧いただけます。
7. **ESP-IDF入門ガイド**: このガイドでは、ESP-IDFを設定してプロジェクトをビルドするための完全な手順を提供しています。[こちら](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html)でアクセスできます。

## 技術サポート

**SenseCAP Indicatorでお困りですか？私たちがサポートします！**

このチュートリアルに従っている間に問題が発生したり、ご質問がある場合は、お気軽に技術サポートまでお問い合わせください。私たちは常にお手伝いする準備ができています！

質問については[Seeed公式Discordチャンネル](https://discord.gg/kpY74apCWj)にアクセスするか、[GitHub discussions](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions)で何でもシェアしてください！
