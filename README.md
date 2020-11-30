# types-apple-iap

Typescript typings for Apple in-app purchases. Use to add strong types to [Apple verifying receipts for in-app purchases](https://developer.apple.com/documentation/appstorereceipts/verifyreceipt) and [Apple Server to Server notifications](https://developer.apple.com/documentation/appstoreservernotifications). 

Before: 
```ts
const responseBody: any = // Notification from Apple or HTTP response body from verifying a receipt.
const latestTransactions: any = responseBody.latest_receipt_info // Hope there isn't a typo in there or you will have a runtime exception!
```

After: 
```ts
const responseBody: AppleVerifyReceiptResponseBody = // Notification from Apple or HTTP response body from verifying a receipt.
const latestTransactions: AppleLatestReceiptTransaction[] = responseBody.latest_receipt_info // Ah! Much better!
```

**Tip:** Check out [the npm module `dollabill-apple`](https://github.com/levibostian/dollabill-apple/) to make your life *much* easier working with Apple verifying receipts and server-to-server notifications. 

# Why use types-apple-iap?

- [X] Full documentation. Check out the full [API reference](https://levibostian.github.io/types-apple-iap/)!
- [X] Version controlled. As Apple updates their response body, this project updates it's typings. Update the typings when your project is ready. 
- [X] Deprecated fields from Apple are not present in this project. This helps you keep your project compliant with Apple's changes. 

# Documentation

[Here](https://levibostian.github.io/types-apple-iap/) you will find the full API reference for all of the typings in this repo.

# Getting started 

* Install typings: 

```
npm install --save-dev types-apple-iap
```

* Use in your code:
```ts
import {AppleVerifyReceiptResponseBody, AppleServerNotificationResponseBody} from "types-apple-iap"

const responseBody: AppleVerifyReceiptResponseBody = // HTTP response body from verifying a receipt.
const notificationResponseBody: AppleServerNotificationResponseBody = // Notification from Apple. 
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key))

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/levibostian"><img src="https://avatars1.githubusercontent.com/u/2041082?v=4" width="100px;" alt=""/><br /><sub><b>Levi Bostian</b></sub></a><br /><a href="https://github.com/levibostian/types-apple-iap/commits?author=levibostian" title="Code">💻</a> <a href="https://github.com/levibostian/types-apple-iap/commits?author=levibostian" title="Documentation">📖</a> <a href="#maintenance-levibostian" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
