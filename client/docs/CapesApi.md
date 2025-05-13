# CapesApi

All URIs are relative to *https://api.namet.ag*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCape**](#getcape) | **GET** /capes/{id} | |

# **getCape**
> Cape getCape()


### Example

```typescript
import {
    CapesApi,
    Configuration
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new CapesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getCape(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Cape**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

