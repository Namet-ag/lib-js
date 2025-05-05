# UsersFindCapesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastChecked** | **number** | The date that the user\&#39;s capes were last checked | [optional] [default to undefined]
**capes** | [**Array&lt;CapeConnection&gt;**](CapeConnection.md) | The user\&#39;s capes from external services | [default to undefined]
**processTime** | **number** | The number of milliseconds that Namet.ag took to complete the query | [default to undefined]

## Example

```typescript
import { UsersFindCapesResponse } from 'namet.ag';

const instance: UsersFindCapesResponse = {
    lastChecked,
    capes,
    processTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
