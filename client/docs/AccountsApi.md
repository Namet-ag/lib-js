# AccountsApi

All URIs are relative to *https://api.namet.ag*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAccount**](#createaccount) | **PUT** /accounts | |
|[**deleteAccount**](#deleteaccount) | **DELETE** /accounts/{id} | |
|[**generateAccountJwt**](#generateaccountjwt) | **GET** /accounts/{id}/jwt | |
|[**getAllAccounts**](#getallaccounts) | **GET** /accounts | |
|[**identifyAccount**](#identifyaccount) | **GET** /accounts/identify | |
|[**resetAccountJwtKey**](#resetaccountjwtkey) | **PATCH** /accounts/{id}/jwt | |
|[**updateAccount**](#updateaccount) | **PATCH** /accounts/{id} | |

# **createAccount**
> Account createAccount(createAccountDto)


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

const { status, data } = await apiInstance.createAccount(
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

# **deleteAccount**
> deleteAccount()


### Example

```typescript
import {
    AccountsApi,
    Configuration
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAccount(
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

# **generateAccountJwt**
> AccountGenerateJwtResponse generateAccountJwt()


### Example

```typescript
import {
    AccountsApi,
    Configuration
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.generateAccountJwt(
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

# **getAllAccounts**
> Array<Account> getAllAccounts()


### Example

```typescript
import {
    AccountsApi,
    Configuration
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

const { status, data } = await apiInstance.getAllAccounts();
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

# **identifyAccount**
> Account identifyAccount()


### Example

```typescript
import {
    AccountsApi,
    Configuration
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

const { status, data } = await apiInstance.identifyAccount();
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

# **resetAccountJwtKey**
> Account resetAccountJwtKey()


### Example

```typescript
import {
    AccountsApi,
    Configuration
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.resetAccountJwtKey(
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

# **updateAccount**
> Account updateAccount(updateAccountDto)


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

const { status, data } = await apiInstance.updateAccount(
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

