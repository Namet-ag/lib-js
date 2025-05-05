# AdminApi

All URIs are relative to *https://api.namet.ag*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**identifyAdmin**](#identifyadmin) | **GET** /admin/identify | |
|[**loginAdmin**](#loginadmin) | **POST** /admin/login | |

# **identifyAdmin**
> AdminIdentifyResponse identifyAdmin()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

const { status, data } = await apiInstance.identifyAdmin();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AdminIdentifyResponse**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **loginAdmin**
> AdminLoginResponse loginAdmin(adminLoginDto)


### Example

```typescript
import {
    AdminApi,
    Configuration,
    AdminLoginDto
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let adminLoginDto: AdminLoginDto; //

const { status, data } = await apiInstance.loginAdmin(
    adminLoginDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminLoginDto** | **AdminLoginDto**|  | |


### Return type

**AdminLoginResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

