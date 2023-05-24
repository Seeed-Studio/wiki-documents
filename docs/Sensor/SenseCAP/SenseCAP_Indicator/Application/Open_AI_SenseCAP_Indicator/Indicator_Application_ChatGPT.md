---
description: ChatGPT with Indicator
title: Indicator ChatGPT Application
keywords:
- SenseCAP ChatGPT AI Prompt
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_Application_ChatGPT
last_update:
  date: 5/23/2023
  author: Thomas
---
# Indicator ChatGPT Setup Guide
On this page, we will guide you on how to organize the OpenAI Demo for quick addition, deletion, and modification of programs according to the provided BSP.

## Prerequisites

- One SenseCAP Indicator
- The IDF toolchain installed on your computer

:::note
- Want to know how to change the UI? -> [How to Create your own UI](/SenseCAP_Indicator_How_to_Create_your_own_UI)
- Haven't installed toolchain? -> [How_To_Flash_The_Default_Firmware](/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware)
:::

The following code snippet is the main code related to OpenAI startup. flowchart:
![](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_openai_sys.png)

## MVC (Model-View-Controller)
The openai_demo is developed based on the MVC architecture.
From the above workflow, it can be seen that this project is based on the MVC architecture.

- View port: indicator_view_init();
- Model port: indicator_model_init();
- Controller port: indicator_controller_init();

### View 
In the View, various event-triggered signals are mainly processed, and LVGL is used for driving the display.

:::note
If you want to quickly build the UI, you can use [SquareLine Studio](https://squareline.io/), which is also used in our project. Use version 1.3.0.
:::


## Model
When the newly added indicator_openai.c with indicator_openai_init(); is placed into indicator_model_init(); and executed at the Model entry, various event triggering mechanisms within it will send requests to OpenAI, receive responses, and parse them for display on the screen through the View.

The following are the key functions and workflow of the Model (once the API Key is saved):

![](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/model_openai.png)


## Example Code

To utilize the OpenAI service, we need to implement functions that can send requests to OpenAI, receive responses, and parse the JSON response. As depicted in the flowchart above, it has provided us with the necessary information.


```c
/* HTTPS Request & get Response*/
static int chat_request(struct view_data_openai_request *p_req,
                        struct view_data_openai_response *p_resp);
/* Json Prase*/
static int __chat_json_prase(const char *p_str, char *p_answer, char *p_err);
```

In the `chat_request` function of `indicator_openai.c`, the `data_buf` variable is employed to store both the prompt and data input. If you are familiar with HTTP, you will recognize that this function generates an HTTP request that encapsulates user-supplied data.

```c
#define WEB_SERVER "api.openai.com"
#define WEB_PORT "443"

static char *p_recv_buf;
static size_t recv_buf_max_len;

static char openai_api_key[52];
static bool have_key = false;
static int chat_request(struct view_data_openai_request *p_req,
                        struct view_data_openai_response *p_resp)
{
	// store the request and data to be sent to the OpenAI API.
    char request_buf[2048];
    char data_buf[1536];

	
    int data_len = 0; // store the length of the data 
    int ret = 0;
	int len = 0; //store the length of the request

    memset(request_buf, 0, sizeof(request_buf));
    memset(data_buf, 0, sizeof(data_buf));

    data_len = sprintf(data_buf,
                       "{\"model\":\"gpt-3.5-turbo\",\"temperature\":0.7, \"messages\":[{\"role\":"
                       "\"user\",\"content\":\"");
                     
    data_len += sprintf(data_buf + data_len, "%s", p_req->question); // user question

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
    /*
    sending an HTTP request to the server specified by WEB_SERVER and WEB_PORT, with the request data stored in request_buf and the length of the request data stored in len. 
    It then waits for a response from the server, which is stored in
    p_recv_buf with a maximum length of recv_buf_max_len. The function mbedtls_send_then_recv is used to perform both the sending and receiving of data in a single call. If the function returns a negative value, it indicates an error has occurred.
    */
    ret = mbedtls_send_then_recv(WEB_SERVER, WEB_PORT, request_buf, len,
                                 p_recv_buf, recv_buf_max_len, 100, NULL);

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
    p_resp->p_answer = p_recv_buf + recv_buf_max_len / 2; // use p_recv_buf mem
    /*
    The chat_request() function sends a request to the OpenAI API for generating a chat response and parses the response to extract the answer and error message.
    */
    ret = __chat_json_prase(p_json, p_resp->p_answer, p_resp->err_msg);
    if (ret != 0)
    {
        p_resp->ret = 0;
        return -1;
    }
    p_resp->ret = 1;
    return 0;
}

```

In this function, `mbedtls_send_then_recv` is called to do the request and get method.

**Adding Prompt**

> If you want to add prompt to your application, just add codes like that:

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


To see the detail code, go to [indicator_openaI.c · GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/82d02957dbc71d4c1549246e823fac4ead89bb42/examples/SenseCAP_Indicator_openai/main/model/SenseCAP_Indicator_openai.c)

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
        strcpy(p_resp->err_msg, "Request fail");
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
    ESP_ERROR_CHECK(esp_event_handler_instance_register_with(view_event_handle, VIEW_EVENT_BASE, VIEW_EVENT_WIFI_ST, __view_event_handler, NULL, NULL));

ESP_ERROR_CHECK(esp_event_handler_instance_register_with(view_event_handle, VIEW_EVENT_BASE, VIEW_EVENT_CHATGPT_REQUEST, __view_event_handler, NULL, NULL));
   
   ESP_ERROR_CHECK(esp_event_handler_instance_register_with(view_event_handle, VIEW_EVENT_BASE, VIEW_EVENT_OPENAI_API_KEY_READ, __view_event_handler, NULL, NULL));

	xTaskCreate(&__indicator_openai_task, "__indicator_openai_task", 1024 * 10, NULL, 10, NULL);
}
 
```  
  
# Resource
- [Indicator OpenAI Demo · GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/82d02957dbc71d4c1549246e823fac4ead89bb42/examples/SenseCAP_Indicator_openai)
- The actual effect: [ChatGPT_Indicator](/SenseCAP_Indicator_ChatGPT)



# **Tech Support**

Don't worry, we've got you covered! Please visit our [Seeed Official Discord Channel](https://discord.gg/cPpeuQMM) to ask your questions! 

If you have large order or customization requirement, please contact iot@seeed.cc