# AdminApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**adminControllerIdentify**](#admincontrolleridentify) | **GET** /admin/identify | |
|[**adminControllerLogin**](#admincontrollerlogin) | **POST** /admin/login | |

# **adminControllerIdentify**
> AdminIdentifyResponse adminControllerIdentify()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

const { status, data } = await apiInstance.adminControllerIdentify();
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

# **adminControllerLogin**
> AdminLoginResponse adminControllerLogin(adminLoginDto)


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

const { status, data } = await apiInstance.adminControllerLogin(
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

