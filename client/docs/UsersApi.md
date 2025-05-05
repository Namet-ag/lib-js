# UsersApi

All URIs are relative to *https://api.namet.ag*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getUser**](#getuser) | **GET** /users/{id} | |
|[**getUserCapes**](#getusercapes) | **GET** /users/{id}/capes | |
|[**updateUserCapes**](#updateusercapes) | **GET** /users/{id}/capes/update | |

# **getUser**
> Profile getUser()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getUser(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Profile**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserCapes**
> UsersFindCapesResponse getUserCapes()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getUserCapes(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**UsersFindCapesResponse**

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

# **updateUserCapes**
> updateUserCapes()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.updateUserCapes(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

