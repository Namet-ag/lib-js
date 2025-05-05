# Profile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The Profile\&#39;s unique ID | [default to undefined]
**timestamp** | **number** | The date that the profile was signed by Minecraft | [default to undefined]
**uuid** | **string** | The UUID of the player associated with the Profile | [default to undefined]
**username** | **string** | The username of the player associated with the Profile | [default to undefined]
**slim** | **boolean** | Whether the skin of the player associated with the Profile is slim | [default to undefined]
**skin** | [**Skin**](Skin.md) | The skin of the player associated with the Profile | [optional] [default to undefined]
**capeUrl** | **string** | The URL of the cape of the player associated with the Profile | [optional] [default to undefined]

## Example

```typescript
import { Profile } from 'namet.ag';

const instance: Profile = {
    id,
    timestamp,
    uuid,
    username,
    slim,
    skin,
    capeUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
