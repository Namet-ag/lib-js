# Cape


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique ID of the Cape | [default to undefined]
**service** | [**CapeService**](CapeService.md) | The external service that the Cape is from | [default to undefined]
**firstSeen** | **string** | The date that the Cape was first seen by Namet.ag | [default to undefined]
**textureHash** | **string** | The SHA1 hash of the image | [default to undefined]
**thumbnail** | **string** | The generated thumbnail of the Cape | [optional] [default to undefined]
**texture** | **string** | The image URL of the Cape | [default to undefined]
**name** | **string** | The name of the Cape | [optional] [default to undefined]
**frames** | **number** | The number of animated frames that the Cape has | [default to undefined]
**ticksPerFrame** | **number** | The number of ticks (50ms) that each frame should be displayed for | [default to undefined]
**hasElytra** | **boolean** | Whether the Cape image has an elytra | [default to undefined]
**description** | **string** | The description of the Cape | [optional] [default to undefined]
**dateUploaded** | **number** | The date that the Cape was uploaded to the external service | [optional] [default to undefined]
**websiteUrl** | **string** | The URL to the associated webpage of the Cape | [optional] [default to undefined]
**creator** | **string** | The UUID of the user that created the Cape | [optional] [default to undefined]

## Example

```typescript
import { Cape } from 'namet.ag';

const instance: Cape = {
    id,
    service,
    firstSeen,
    textureHash,
    thumbnail,
    texture,
    name,
    frames,
    ticksPerFrame,
    hasElytra,
    description,
    dateUploaded,
    websiteUrl,
    creator,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
