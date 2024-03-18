---
description: Datasets For Model Assistant
title: Datasets
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug:  /ModelAssistant_Tutorials_Datasets
last_update:
  date: 01/11/2024
  author: LynnL4
---

# Datasets

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) supports a variety of datasets. You can browse and download different datasets on the Internet, or annotate and create your own datasets.

## Internet Datasets

### [SSCMA](https://github.com/Seeed-Studio/ModelAssistant)

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) currently provides the following official datasets for training and testing of corresponding models.

Please make sure you are in the **Root Directory of [SSCMA](https://github.com/Seeed-Studio/ModelAssistant)** before running the command to download a specific datasets. The command will automatically download the datasets and save them in a folder named `datasets` in the current directory, and finally unpacking them.

- [Download Custom Meter Datasets](https://files.seeedstudio.com/sscma/datasets/meter.zip):

  ```sh
  wget https://files.seeedstudio.com/sscma/datasets/meter.zip -P datasets && unzip datasets/meter.zip -d datasets
  ```

- [Download COCO_MASK Datasets](https://files.seeedstudio.com/sscma/datasets/coco_mask.zip):

  ```sh
  wget https://files.seeedstudio.com/sscma/datasets/coco_mask.zip -P datasets && unzip datasets/coco_mask.zip -d datasets
  ```

### Roboflow

[Roboflow](https://public.roboflow.com/) is a free hosting platform for public computer vision datasets, supporting formats including CreateML JSON, COCO JSON, Pascal VOC XML, YOLO, and Tensorflow TFRecords, as well as additional reduced and enhanced versions of the corresponding datasets have been added.

:::tip

We highly recommend looking for datasets on Roboflow, and you can download hundreds of different datasets from Roboflow for free to meet your specific needs by simply signing up for an account.

:::

you can find some datasets for [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) on Roboflow below:

| Dataset | Description |
| -- | -- |
| [Digital Meter Water](https://universe.roboflow.com/seeed-studio-dbk14/digital-meter-water/dataset/1) | Digital Meter Water Dataset |
| [Digital Meter Seg7](https://universe.roboflow.com/seeed-studio-dbk14/digital-meter-seg7/dataset/1) | Digital Meter Seg7 Dataset |
| [Digit Seg7 Classification](https://universe.roboflow.com/seeed-studio-ovcjn/digit-seg7/1) | Digit Seg7 Classification Dataset |

### Kaggle

[Kaggle](https://www.kaggle.com/) is a data modeling and data analysis competition platform. Businesses and researchers can publish data on it, and statisticians and data mining experts can compete to produce the best models. Kaggle also offers thousands of datasets, and you can visit [Kaggle datasets](https://www.kaggle.com/datasets) to pick the right one for your needs.

## Custom Datasets

Creating a custom dataset usually involves the following steps.

1. **Collect Data:** Collect data related to the problem domain. This data can be in text, image, audio or video formats.

2. **Organize Data:** The collected data is cleaned, [annotated](#dataset-annotation), and de-duplicated to ensure accuracy and consistency. This step is crucial to ensure the accuracy of the trained model.

3. **Divide Dataset:** The organized dataset is divided into training set, validation set and test set. Usually, a ratio of 70%, 15%, and 15% is used to divide the dataset.

4. **Convert Data Format:** Convert the organized data set into a format that can be read by the model, such as text format, image format, etc.

5. **Load Dataset:** Load the converted dataset into the model for training and testing. When loading the dataset, it is important to use the appropriate data loader and batch size.

6. **Data Enhancement (optional, recommended to be done by [SSCMA](https://github.com/Seeed-Studio/ModelAssistant)):** Perform data enhancement on the dataset, such as rotate, flip, crop, etc., to increase the diversity and number of datasets.

## Datasets Annotation

Labeling a dataset is the process of classifying or labeling samples in a dataset, which usually requires manual intervention.

The process of labeling a dataset is very critical and determines the quality of the trained model. Here are some common ways and tools to label datasets.

- **Manual Annotation:** Annotating the dataset by hand, for each sample, ensures the accuracy of the annotation, but is slower.

- **Semi-automatic Annotation:** Apply the results of manual annotation to other datasets to reduce annotation time, but the accuracy of annotation may be reduced.

- **Automatic Annotation:** Automatic annotation of data using some algorithmic models, such as keyword extraction, text classification, etc. Although it can improve the efficiency of annotation, the accuracy of annotation may also be affected.

Commonly used data labeling tools:

- [LabelImg](https://github.com/heartexlabs/labelImg): A tool for image labeling, supporting various labeling formats, such as PASCAL VOC, YOLO, etc.

- [Labelbox](https://labelbox.com/): An online labeling tool that supports image, text, video and other formats with various labeling templates and custom labeling templates.

- [Doccano](https://github.com/doccano/doccano): An open source annotation tool for text classification and sequence annotation, supports a variety of annotation formats, such as NER, POS, etc.

- [Annotator](https://github.com/openannotation/annotator): A lightweight online annotation tool that supports image, text, audio and other formats.

- [VGG Image Annotator (VIA)](https://gitlab.com/vgg/via): An open source tool for image annotation, supporting a variety of annotation formats, such as PASCAL VOC, YOLO, etc.

- [COCO Annotator](https://github.com/jsbroks/coco-annotator): A web-based image and video annotation tool for target detection, segmentation, key point annotation and other tasks.

The above are some common data annotation tools, different tools are suitable for different dataset types and annotation needs, you can choose according to the actual needs.
