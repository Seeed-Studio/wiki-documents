---
description: Use XIAO ESP32C6 and sensors with AWS IoT Core to implement AI devices that can do anomaly detection.
title: Empowering AI with AWS IoT Core for the XIAO ESP32C6
keywords:
- xiao esp32c6
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32c6_aws_iot
last_update:
  date: 03/29/2024
  author: Citric
draft: true
---

# Empowering AI with AWS IoT Core for the XIAO ESP32C6

This Wiki serves as a comprehensive guide to deploying an advanced IoT system that harnesses the power of AWS services and the XIAO ESP32C6 microcontroller to monitor and analyze environmental data. Beginning with the seamless collection of sensor data, this documentation navigates through the intricacies of transmitting and storing this information on AWS IoT Core and AWS Analytics, respectively. It delves into the utilization of AWS Sagemaker to train machine learning models on normal environmental patterns, emphasizing the system's capability to learn and adapt to its operational context for enhanced efficiency.

Furthermore, the Wiki outlines the implementation of real-time anomaly detection using the XIAO ESP32C6, a critical component that actively scans for deviations from the norm and swiftly triggers alerts. It encapsulates the end-to-end process of setting up an alerting mechanism that notifies stakeholders of abnormal conditions, ensuring prompt attention and action. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/0.jpg" style={{width:1000, height:'auto'}}/></div>

- [**Capture sensor data to AWS IoT Core**](#capture-sensor-data-to-aws-iot-core).
- [**Store the data using AWS Analytics**](#store-the-data-using-aws-analytics).
- [**Use AWS Sagemaker to train data in normal environments**](#use-aws-sagemaker-to-train-data-in-normal-environments).
- [**XIAO ESP32C6 for abnormal environment detection**](#xiao-esp32c6-for-abnormal-environment-detection).
- [**Abnormal status message notification**](#abnormal-status-message-notification).

By exploring this Wiki, users will gain a detailed understanding of each component's role in creating a smart, responsive, and robust environmental monitoring system, complete with practical insights into configuration and maintenance.

## Capture sensor data to AWS IoT Core

We leverage a multitude of sensors interfaced with the XIAO ESP32C6 board to collect environmental data in real time and upload it to AWS IoT Core. This provides us with a reliable and secure method to handle the vast streams of data emerging from the various sensors.

To register for AWS IoT Core and create a Thing named "XIAO_ESP32C6", follow the steps below. Please note that this process assumes you already have an Amazon Web Services account. If you do not, you will need to [create one](https://aws.amazon.com/) before proceeding.

### Step 1. Sign in to AWS Management Console

1. Open your web browser and navigate to [AWS Management Console](https://aws.amazon.com/console/).
2. Sign in using your AWS account credentials.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/1.png" style={{width:1000, height:'auto'}}/></div>

### Step 2: Access AWS IoT Core

1. Once you are in the AWS Management Console, locate the "Services" dropdown menu at the top of the page.
2. In the "Services" menu, click on "IoT Core" under the "Internet of Things" section. If you cannot find it, use the search bar at the top to search for "IoT Core".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/2.png" style={{width:1000, height:'auto'}}/></div>


### Step 3: Register as an AWS IoT User

If this is your first time using AWS IoT Core, you may need to register as an IoT user:

1. On the AWS IoT Core welcome page, you may see a "Get started" button. Click on it.
2. Follow the on-screen instructions to register as an AWS IoT user.


### Step 4: Create a Thing

1. In the AWS IoT Core dashboard, click on "All devices" in the left-side navigation pane to expand the options.
2. Click on "Things".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/3.png" style={{width:1000, height:'auto'}}/></div>

3. Click on the "Create" button at the top right corner of the "Things" page.
4. Choose "Create a single thing" to proceed with registering one Thing.
5. On the "Create a thing" page, enter "XIAO_ESP32C6" as the name for your Thing.
6. (Optional) You can also add types, groups, or attributes to your Thing if needed. For a simple setup, you can skip these options.
7. Click "Next".

### Step 5: Register a Device Certificate

1. You will now be on the "Add a certificate for your thing" page. AWS IoT Core requires devices to use certificates for secure communication.
2. Click on "Create certificate". This will create and download a set of key pairs and a certificate for your Thing. Make sure to save the downloaded files securely, as you will need them to communicate with AWS IoT Core from your device.
3. After downloading, click the "Activate" button to activate the certificate.
4. Click on "Attach a policy" to define permissions for your Thing.

### Step 6: Attach a Policy

1. If you do not have a policy, you need to create one by clicking on "Create policy". You'll be taken to a new page where you can create a policy that defines the permissions for your Thing.
2. Once you have created and named your policy, attach it to your newly created certificate by checking the box next to the policy name and clicking "Register Thing".

### Step 7: Configure Your Thing

1. After your Thing is registered, you will be redirected to the Thing detail page where you can view your Thing's information.
2. Configure your device (in this case, XIAO_ESP32C6) to use the certificate and private key you downloaded when creating the Thing. You will need to follow the instructions for your specific device to set up the AWS IoT SDK and establish a secure connection to AWS IoT Core.

### Step 8: Interact with Your Thing

1. Once your Thing is set up and connected to AWS IoT Core, you can interact with it by subscribing to topics, publishing messages, and using the AWS IoT Core rules engine to process IoT data.

Remember to keep your certificates and keys confidential, and follow best practices for security. The AWS IoT Core documentation provides detailed guides and tutorials for setting up and managing IoT devices.



## Store the data using AWS Analytics

The gathered data is then forwarded to the AWS Analytics service, which not only stores the raw data but also provides us with powerful data processing and analysis tools. These tools assist us in extracting valuable insights from the collected data.


To use the AWS IoT MQTT test client to upload sensor data to AWS IoT Analytics and store it, follow these steps:

### Step 1: Access the MQTT Test Client

1. Sign in to the AWS Management Console and navigate to the IoT Core service.
2. In the left navigation pane, under the "Test" section, click on "MQTT test client". This client allows you to publish and subscribe to MQTT topics without writing any code.

### Step 2: Publish to an MQTT Topic

1. In the MQTT test client, select the "Publish to a topic" tab.
2. Enter the topic you want to publish to in the "Topic filter" field. For example, `sensor/data`.
3. In the "Message payload" box, input the JSON formatted data from your sensor. For instance:

    ```json
    {
      "sensor_id": "XIAO_ESP32C6",
      "temperature": 22.5,
      "humidity": 45
    }
    ```
4. Click the "Publish" button to send the data to the MQTT topic.

### Step 3: Configure AWS IoT Analytics

1. Navigate to AWS IoT Analytics in the AWS Console.
2. Create a channel:
    - Click on "Channels" in the left navigation pane, then click the "Create channel" button.
    - Enter a name for your channel and choose the IoT Core topic filter you published your data to (e.g., `sensor/data`).
    - Click "Create channel".
3. Create a data store:
    - Click on "Data stores" in the left navigation pane, then click the "Create data store" button.
    - Enter a name for your data store, which will be used to store the incoming data.
    - Click "Create data store".
4. Create a pipeline:
    - Click on "Pipelines" in the left navigation pane, then click the "Create pipeline" button.
    - Add a name for your pipeline.
    - Connect the channel you created to the pipeline as the source.
    - Optionally, you can add activities such as transforming or filtering the data.
    - Set the data store you created as the destination for the pipeline data.
    - Click "Create pipeline".

### Step 4: Run the Pipeline

1. Once your pipeline is set up, it should start processing data automatically if it's connected to a channel that is receiving data from the MQTT topic.
2. You can manually run the pipeline if needed by selecting the pipeline, then clicking the "Run" button.

### Step 5: Analyze the Data

1. After data is flowing into your data store, you can analyze it using AWS IoT Analytics:
    - Navigate to the "Data stores" section, select your data store, and you will be able to see the ingested data.
    - To run more complex analytics, you can use the built-in SQL query engine by navigating to the "Analyze" section and creating a new analysis.

### Step 6: Set Up Data Visualization (Optional)

1. To visualize the data, you can connect AWS IoT Analytics to AWS QuickSight or another visualization tool:
    - In AWS QuickSight, connect to your AWS IoT Analytics data store as a new data source.
    - Follow the prompts to import the data and then create analysis visualizations as desired.

Please ensure that your AWS IoT policy attached to your Thing (XIAO_ESP32C6) allows publishing to the MQTT topic you are using. If not, you will need to update the policy to include the necessary permissions.

Remember, these steps serve as a general guide. Depending on your specific use case, you may need to adjust the steps to fit the requirements of your sensor data and how you want to analyze it. Always refer to the latest AWS documentation for the most current instructions and best practices.



## Use AWS Sagemaker to train data in normal environments

With AWS Sagemaker, we train machine learning models to recognize patterns indicative of a normal environment. Sagemaker offers a comprehensive platform that facilitates the development, training, and deployment of machine learning models, enabling intelligent processing of environmental data.

To train a model with data stored in AWS IoT Analytics using Amazon SageMaker, you would typically follow the steps below. This process assumes that you have already set up AWS IoT Analytics, and you have data stored in a data store.

### Step 1: Prepare Your Data

1. Access your AWS IoT Analytics datastore and make sure that your data is clean, properly formatted, and ready for use in machine learning. This might involve transforming the data using IoT Analytics pipelines or running SQL queries within AWS IoT Analytics to get the data into the right shape.

2. Export your data from AWS IoT Analytics to an S3 bucket:
    - Navigate to your AWS IoT Analytics datastore.
    - Find an option to export data, and select Amazon S3 as your destination.
    - Choose the S3 bucket where you want to store your data and set the file format (CSV or Parquet are commonly used formats for machine learning).

### Step 2: Set Up an Amazon SageMaker Instance

1. Navigate to the Amazon SageMaker service in the AWS Management Console.

2. Create a new notebook instance:
    - Click on "Notebook instances" in the SageMaker dashboard.
    - Click the "Create notebook instance" button.
    - Fill in the necessary information such as instance type and IAM role. Make sure the IAM role has necessary permissions to access the S3 bucket where your data is stored.

3. Once the instance status is "InService", open the Jupyter notebook interface by clicking the "Open Jupyter" link.

### Step 3: Access and Process Your Data

1. In your Jupyter notebook, start by importing necessary libraries such as Pandas, NumPy, and Boto3.

2. Use Boto3 or the AWS SageMaker Python SDK to access your S3 bucket and load the data into a dataframe. For example:

    ```python
    import sagemaker
    import boto3
    import pandas as pd
    
    s3 = boto3.client('s3')
    bucket_name = 'your-s3-bucket-name'
    data_key = 'your-exported-data-file'
    data_location = 's3://{}/{}'.format(bucket_name, data_key)
    
    df = pd.read_csv(data_location)
    ```

3. Preprocess the data as needed for training, which may include normalization, handling missing values, feature engineering, etc.

### Step 4: Train Your Model

1. Choose a pre-built algorithm or create your custom model in SageMaker.

2. Split your data into training and validation sets.

3. Configure the SageMaker estimator with the necessary hyperparameters, and point to the training and validation datasets. For example:

    ```python
    from sagemaker.estimator import Estimator
    
    # Setup the SageMaker Estimator
    estimator = Estimator(image_name=algorithm_image,
                          role=sagemaker.get_execution_role(),
                          train_instance_count=1,
                          train_instance_type='ml.m4.xlarge',
                          output_path=output_path,
                          sagemaker_session=sagemaker.Session())
    
    # Set hyperparameters
    estimator.set_hyperparameters( ... )

    # Train the model
    estimator.fit({'train': s3_train_data, 'validation': s3_validation_data})
    ```

4. Start the training job by calling the `fit` method.

### Step 5: Deploy the Model

1. Deploy the trained model to an endpoint:

    ```python
    predictor = estimator.deploy(initial_instance_count=1, instance_type='ml.m4.xlarge')
    ```

2. Use the endpoint to make real-time predictions or perform a batch transform job for large datasets.

### Step 6: Evaluate and Optimize

1. Evaluate the model's performance using the test dataset.

2. Optimize your model by tuning hyperparameters or modifying the model architecture as needed.

### Step 7: Clean Up

1. To avoid incurring unnecessary charges, delete your SageMaker endpoint when you're done with it:

    ```python
    sagemaker.Session().delete_endpoint(predictor.endpoint)
    ```

2. Consider turning off or deleting any other resources that are no longer needed.

### Additional Considerations

- Ensure that you have the correct IAM roles and policies in place for SageMaker to access the data in S3.
- Consider using SageMaker's Automatic Model Tuning to find the best version of your model.
- Keep track of costs, as training models and deploying endpoints on SageMaker can incur significant charges depending on the compute resources used.

Always consult the latest AWS documentation for detailed instructions and best practices, as the interface and functionalities of AWS services are frequently updated.



## XIAO ESP32C6 for abnormal environment detection

Once a data model of the normal environment is established, the XIAO ESP32C6 continuously monitors the sensor data to detect any potential anomalies. As a powerful microcontroller, it is capable of rapidly responding when data indicates an abnormal situation.





## Abnormal status message notification

Upon detection of an abnormal state, the system immediately sends out an alert through a messaging notification mechanism to maintenance personnel, ensuring timely intervention and necessary action.






## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>


