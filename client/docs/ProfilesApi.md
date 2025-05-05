# ProfilesApi

All URIs are relative to *https://api.namet.ag*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**submitProfile**](#submitprofile) | **PUT** /profiles | |

# **submitProfile**
> Profile submitProfile(submitProfileDto)


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

const { status, data } = await apiInstance.submitProfile(
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

