# Account


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The UUID of the Account | [default to undefined]
**name** | **string** | The name of the Account | [default to undefined]
**createdAt** | **number** | The date that the Account was created | [default to undefined]
**updatedAt** | **number** | The date that the account was last modified | [default to undefined]
**jwtKey** | **string** | One of the keys used to identify if a JWT is valid for the Account | [default to undefined]
**namespaces** | **Array&lt;string&gt;** | The permissions that the Account has | [default to undefined]

## Example

```typescript
import { Account } from 'namet.ag';

const instance: Account = {
    id,
    name,
    createdAt,
    updatedAt,
    jwtKey,
    namespaces,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
