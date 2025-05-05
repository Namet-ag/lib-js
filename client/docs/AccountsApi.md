# AccountsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountsControllerCreate**](#accountscontrollercreate) | **PUT** /accounts | |
|[**accountsControllerDelete**](#accountscontrollerdelete) | **DELETE** /accounts/{id} | |
|[**accountsControllerFindAll**](#accountscontrollerfindall) | **GET** /accounts | |
|[**accountsControllerGenerateJwt**](#accountscontrollergeneratejwt) | **GET** /accounts/{id}/jwt | |
|[**accountsControllerIdentify**](#accountscontrolleridentify) | **GET** /accounts/identify | |
|[**accountsControllerResetJwtKey**](#accountscontrollerresetjwtkey) | **PATCH** /accounts/{id}/jwt | |
|[**accountsControllerUpdate**](#accountscontrollerupdate) | **PATCH** /accounts/{id} | |

# **accountsControllerCreate**
> Account accountsControllerCreate(createAccountDto)


### Example

```typescript
import {
    AccountsApi,
    Configuration,
    CreateAccountDto
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let createAccountDto: CreateAccountDto; //

const { status, data } = await apiInstance.accountsControllerCreate(
    createAccountDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAccountDto** | **CreateAccountDto**|  | |


### Return type

**Account**

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

# **accountsControllerDelete**
> accountsControllerDelete()


### Example

```typescript
import {
    AccountsApi,
    Configuration
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.accountsControllerDelete(
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountsControllerFindAll**
> Array<Account> accountsControllerFindAll()


### Example

```typescript
import {
    AccountsApi,
    Configuration
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

const { status, data } = await apiInstance.accountsControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Account>**

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

# **accountsControllerGenerateJwt**
> AccountGenerateJwtResponse accountsControllerGenerateJwt()


### Example

```typescript
import {
    AccountsApi,
    Configuration
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.accountsControllerGenerateJwt(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AccountGenerateJwtResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountsControllerIdentify**
> Account accountsControllerIdentify()


### Example

```typescript
import {
    AccountsApi,
    Configuration
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

const { status, data } = await apiInstance.accountsControllerIdentify();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Account**

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

# **accountsControllerResetJwtKey**
> Account accountsControllerResetJwtKey()


### Example

```typescript
import {
    AccountsApi,
    Configuration
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.accountsControllerResetJwtKey(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Account**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountsControllerUpdate**
> Account accountsControllerUpdate(updateAccountDto)


### Example

```typescript
import {
    AccountsApi,
    Configuration,
    UpdateAccountDto
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let id: string; // (default to undefined)
let updateAccountDto: UpdateAccountDto; //

const { status, data } = await apiInstance.accountsControllerUpdate(
    id,
    updateAccountDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAccountDto** | **UpdateAccountDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Account**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

