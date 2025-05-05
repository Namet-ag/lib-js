# ProfilesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**profilesControllerSubmit**](#profilescontrollersubmit) | **PUT** /profiles | |
|[**profilesControllerTempGetProfile**](#profilescontrollertempgetprofile) | **GET** /profiles/user/{id} | |

# **profilesControllerSubmit**
> Profile profilesControllerSubmit(submitProfileDto)


### Example

```typescript
import {
    ProfilesApi,
    Configuration,
    SubmitProfileDto
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new ProfilesApi(configuration);

let submitProfileDto: SubmitProfileDto; //

const { status, data } = await apiInstance.profilesControllerSubmit(
    submitProfileDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitProfileDto** | **SubmitProfileDto**|  | |


### Return type

**Profile**

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

# **profilesControllerTempGetProfile**
> profilesControllerTempGetProfile()


### Example

```typescript
import {
    ProfilesApi,
    Configuration
} from 'namet.ag';

const configuration = new Configuration();
const apiInstance = new ProfilesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.profilesControllerTempGetProfile(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

