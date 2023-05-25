---
description: ChatGPT & DALL·E with Indicator
title: ChatGPT & DALL·E Application Development
keywords:
- SenseCAP Indicator ChatGPT DALL·E Application Development
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_Application_ChatGPT
last_update:
  date: 5/25/2023
  author: Thomas
---

# SenseCAP Indicator x ChatGPT x DALL·E Application Development

This guide will provide you with information on how to organize the OpenAI Demo for quick addition, deletion, and modification of programs according to the provided BSP (Board Support Package).

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/GPT_RES_BE_RICH.JPG"/></div>
<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/DALL_1_CAT.JPG"/></div>

## Prerequisites

- One [SenseCAP Indicator](https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html)
- The [ESP-IDF](https://github.com/espressif/esp-idf) toolchain installed on your computer

:::tip
If you want to learn how to change the user interface (UI), you can refer to the guide: [How to Create your own UI](/SenseCAP_Indicator_How_to_Create_your_own_UI)

If you haven't installed the IDF toolchain yet, you can follow the instructions in the guide: [How_To_Flash_The_Default_Firmware](/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware)
:::

## Get Started

The main code related to the OpenAI startup flowchart is shown below:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Indicator_openai_sys.png"/></div>

### Function

The SenseCAP Indicator x ChatGPT x DALL·E Application is developed based on the MVC (Model-View-Controller) architecture. The project's workflow indicates its reliance on the MVC architecture.

In this architecture, the components are structured as follows:

- View: The View handles various event-triggered signals and utilizes LVGL (Light and Versatile Graphics Library) for driving the display.

:::note
To quickly build the user interface (UI), you can use [SquareLine Studio](https://squareline.io/), which is also employed in our project. Recommend using SquareLine Studio version 1.3.0 to ensure a smooth and seamless experience while following this guide..
:::

- Model: The Model contains the `indicator_openai.c` file, which includes the `indicator_openai_init()` function. When executed at the Model entry, this function sends requests to OpenAI, receives responses, and parses them for display on the screen through the View.

Here are the key functions and workflow of the Model (once [the API Key](/SenseCAP_Indicator_How_to_Set_the_API_Key) is saved):

#### **ChatGPT flowchart**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/model_openai.png"/></div>

#### **DALLE flowchart**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/model_openai_DALLE.png"/></div>

## Example Code

To utilize the OpenAI service, we need to implement functions that can send requests to OpenAI, receive responses, and parse the JSON response. The following code snippet illustrates the necessary code structure:

### ChatGPT Code

```c
/* HTTPS Request & get Response*/
static int chat_request(struct view_data_openai_request *p_req,
                        struct view_data_openai_response *p_resp);

/* Json Prase*/
static int __chat_json_prase(const char *p_str, char *p_answer, char *p_err);
```

The `chat_request(...)` function in `indicator_openai.c` is responsible for sending requests to the OpenAI API, receiving responses, and parsing the JSON response. It generates an HTTP request encapsulating user-supplied data and communicates with the server using `mbedtls_send_then_recv(...)`.

To add a prompt to your application, you can modify the `data_buf` variable in the `chat_request(...)` function as follows:

**Adding Prompt:**

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

In this function, `mbedtls_send_then_recv` is called to do the request and get method.


### DALL·E Code

> Principle: When a request is successful, it returns a URL address. By downloading and decoding the image from this URL link, it can be displayed.

```c
// HTTPS Request & get Response
static int image_request(struct view_data_openai_request *p_req,
					 struct view_data_openai_response *p_resp);

// Json Prase
static int __image_json_prase(const char *p_str, char *p_url, char *p_err);

// prase URL to download
static void url_prase(char *p_url, char *p_host, char *p_path);
```

Same as [ChatGPT Code](/SenseCAP_Indicator_Application_ChatGPT#chatgpt-code), in the initial request, we will utilize a prompt to obtain the image URL. After acquiring the URL, we will attempt to download the image to the local buffer using the obtained URL.

For the detailed code, please refer to `indicator_openai.c` on [GitHub](https://raw.githubusercontent.com/Seeed-Solution/SenseCAP_Indicator_ESP32/main/examples/indicator_openai/main/model/indicator_openai.c).

# Resource

- [SenseCAP_Indicator_ESP32 · GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32)
- [SenseCAP_Indicator_ChatGPT Chat Completions](/SenseCAP_Indicator_ChatGPT)
- [SenseCAP_Indicator_DALL·E Image Generation](/SenseCAP_Indicator_DALL·E)

# **Tech Support**

Don't worry, we've got you covered! Please visit our [Seeed Official Discord Channel](https://discord.gg/cPpeuQMM) to ask your questions!

If you have large order or customization requirement, please contact iot@seeed.cc
