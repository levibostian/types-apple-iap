// -----------------------------------
// Server to server notification
// -----------------------------------

/**
 * Response body of server-to-server notification sent by Apple.
 * 
 * [Reference](https://developer.apple.com/documentation/appstoreservernotifications/responsebody)
 */
export interface AppleServerNotificationResponseBody {  
  auto_renew_adam_id?: string 
  auto_renew_product_id?: string   
  auto_renew_status?: "true" | "false"
  /**
   * Example: `2013-08-01 07:00:00 Etc/GMT`
   */
  auto_renew_status_change_date: string
  /**
   * Example: `1605232028848`
   */
  auto_renew_status_change_date_ms: string 
  /**
   * Example: `2013-08-01 00:00:00 America/Los_Angeles`
   */
  auto_renew_status_change_date_pst: string 
  /**
   * The environment that Apple made the Receipt for.
   */
  environment: "Sandbox" | "PROD"  
  expiration_intent?: "1" | "2" | "3" | "4" | "5"
  /**
   * The most recent in-app purchase transactions. 
   */
  unified_receipt: AppleUnifiedReceipt
  /**
   * The reason this notification was sent to you
   */
  notification_type: AppleServerNotificationType
  /**
   * Same shared secret that you have in App Store Connect. Used to verify that this notification actually came from Apple. Make sure they match or the notification was not from Apple!
   */
  password: string 
  /**
   * The bundle ID for your app this notification is regarding
   */
  bid: string 
  /**
   * The bundle version string for your app this notification is regarding
   */
  bvrs: string 
}

/**
 * The most recent in-app purchase transactions. 
 * 
 * [Reference](https://developer.apple.com/documentation/appstoreservernotifications/unified_receipt)
 */
export interface AppleUnifiedReceipt {
  /**
   * The environment that Apple generated the receipt for
   */
  environment: "Sandbox" | "Production"
  /**
   * Base-64 encoded string for the latest receipt for the customer. 
   */
  latest_receipt: string 
  /**
   * Contains the latest 100 in-app purchase transactions for the receipt. 
   * 
   * > Note: This excludes transactions for consumables that are marked as finished. 
   */
  latest_receipt_info: AppleLatestReceiptInfo[]
  /**
   * Renewal information for auto-renewal subscriptions 
   */
  pending_renewal_info: ApplePendingRenewalInfo[]
}

/**
 * The reason that Apple sent you a notification. 
 * 
 * [Reference](https://developer.apple.com/documentation/appstoreservernotifications/notification_type)
 */
export enum AppleServerNotificationType {
  CANCEL = "CANCEL",
  DID_CHANGE_RENEWAL_PREF = "DID_CHANGE_RENEWAL_PREF",
  DID_CHANGE_RENEWAL_STATUS = "DID_CHANGE_RENEWAL_STATUS",
  DID_FAIL_TO_RENEW = "DID_FAIL_TO_RENEW",
  DID_RECOVER = "DID_RECOVER",
  DID_RENEW = "DID_RENEW",
  INITIAL_BUY = "INITIAL_BUY",
  INTERACTIVE_RENEWAL = "INTERACTIVE_RENEWAL",
  PRICE_INCREASE_CONSENT = "PRICE_INCREASE_CONSENT",
  REFUND = "REFUND"
}

// -----------------------------------
// Receipt 
// -----------------------------------

/**
 * A JSON representation of the receipt that was sent for verification.
 *
 * [Official Apple documentation](https://developer.apple.com/documentation/appstorereceipts/responsebody/receipt)
 */
export interface AppleReceipt {
  adam_id: number
  app_item_id: number
  /**
   * The bundle version string for your app this notification is regarding
   */
  application_version: string
  /**
   * The bundle ID for your app this notification is regarding
   */
  bundle_id: string
  download_id: number
  /**
   * > Note: Only present if app was purchased through the Volume Purchase Program.
   * 
   * Example: `2013-08-01 07:00:00 Etc/GMT`
   */
  expiration_date?: string
  /**
   * See {@link expiration_date}.
   * 
   * Example: `1605232028848`
   */
  expiration_date_ms?: string
  /**
   * See {@link expiration_date}.
   * 
   * Example: `2013-08-01 00:00:00 America/Los_Angeles`
   */
  expiration_date_pst?: string
  /**
   * Transactions for non-consumable, non-renewing subscriptions, and auto-renewing subscriptions previously purchased by the customer.
   *
   * This response is similar but different then `latest_receipt_info` where that is used most often for auto-renewable subscription transactions to see if a subscription is up-to-date or not.
   */
  in_app?: AppleInAppPurchaseTransaction[]
  original_application_version: string
  /**
   * Example: `2013-08-01 07:00:00 Etc/GMT`
   */
  original_purchase_date: string
  /**
   * Example: `1605232028848`
   */
  original_purchase_date_ms: string
  /**
   * Example: `2013-08-01 00:00:00 America/Los_Angeles`
   */
  original_purchase_date_pst: string
  /**
   * > Note: Only present if the app was ordered through pre-order.
   * 
   * Example: `2013-08-01 07:00:00 Etc/GMT`
   */
  preorder_date?: string
  /**
   * See {@link preorder_date}
   * 
   * Example: `1605232028848`
   */
  preorder_date_ms?: string
  /**
   * See {@link preorder_date}
   * 
   * Example: `2013-08-01 00:00:00 America/Los_Angeles`
   */
  preorder_date_pst?: string
  /**
   * Example: `2013-08-01 07:00:00 Etc/GMT`
   */
  receipt_creation_date: string
  /**
   * Example: `1605232028848`
   */
  receipt_creation_date_ms: string
  /**
   * Example: `2013-08-01 00:00:00 America/Los_Angeles`
   */
  receipt_creation_date_pst: string
  receipt_type: "Production" | "ProductionVPP" | "ProductionSandbox" | "ProductionVPPSandbox"
  /**
   * Example: `2013-08-01 07:00:00 Etc/GMT`
   */
  request_date: string
  /**
   * Example: `1605232028848`
   */
  request_date_ms: string
  /**
   * Example: `2013-08-01 00:00:00 America/Los_Angeles`
   */
  request_date_pst: string
  version_external_identifier: number
}

/**
 * [Official Apple documentation](https://developer.apple.com/documentation/appstorereceipts/responsebody/pending_renewal_info)
 */
export interface ApplePendingRenewalInfo {
  /**
   * The product id the customer will downgrade/crossgrade to when the current subscription period is over.
   *
   * > Note: Present if the user is downgrading or crossgrading.
   */
  auto_renew_product_id?: string
  /**
   * 1 - Subscription will auto-renew
   * 0 - Customer turned off auto-renew
   *
   * [Official Apple documentation](https://developer.apple.com/documentation/appstorereceipts/auto_renew_status)
   */
  auto_renew_status: "1" | "0"
  /**
   * Reason subscription expired.
   *
   * 1 - Customer cancelled their subscription
   * 2 - Billing error such as payment information not valid
   * 3 - Customer did not agree to price increase
   * 4 - Product not available for purchase
   * 5 - Unknown error
   *
   * > Note: Present for a receipt that contains an expired auto-renewable subscription.
   *
   * [Official Apple documentation](https://developer.apple.com/documentation/appstorereceipts/expiration_intent)
   */
  expiration_intent?: "1" | "2" | "3" | "4" | "5"
  /**
   * When Apple will stop automatically retrying to renew the expired subscription.
   *
   * > Note: Present if in a grace period
   * 
   * Example: `2013-08-01 07:00:00 Etc/GMT`
   */
  grace_period_expires_date?: string
  /**
   * When Apple will stop automatically retrying to renew the expired subscription.
   *
   * > Note: Present if in a grace period
   * 
   * Example: `1605232028848`
   */
  grace_period_expires_date_ms?: string
  /**
   * When Apple will stop automatically retrying to renew the expired subscription.
   *
   * > Note: Present if in a grace period
   */
  grace_period_expires_date_pst?: string
  /**
   * If auto-renewable subscription is actively trying to be automatically renewed by Apple. Check the {@link expires_intent}, {@link expires_intent} to determine if Apple is trying to renew *before or after* the subscription has expired. If the subscription has expired, you are going to need to think through the logic of Grace Periods. Read more about Grace Periods to learn more about them.
   *
   * 1 - Apple is trying to renew the subscription. See {@link grace_period_expires_date} to determine when Apple will stop trying.
   * 0 - Apple has stopped attempting to renew.
   *
   * > Note: Present if auto-renewable subscription has expired and Apple is or is not trying to renew it.
   *
   * [Official Apple documentation](https://developer.apple.com/documentation/appstorereceipts/is_in_billing_retry_period)
   */
  is_in_billing_retry_period?: "0" | "1"
  /**
   * > Note: Present if the customer redeemed [an offer code](https://developer.apple.com/app-store/subscriptions/#offer-codes).
   *
   * Resources:
   * 1. [Overview of what offer codes are](https://developer.apple.com/app-store/subscriptions/#offer-codes)
   * 2. [Set up offer codes](https://help.apple.com/app-store-connect/#/dev6a098e4b1)
   * 3. [Implement offer codes in your app](https://developer.apple.com/documentation/storekit/in-app_purchase/subscriptions_and_offers/implementing_offer_codes_in_your_app)
   */
  offer_code_ref_name?: string
  /**
   * The transaction ID that identifies a full payment history for a customer paying for a subscription through all of the renewals, upgrades/downgrades.
   *
   * [More details](https://developer.apple.com/documentation/appstorereceipts/original_transaction_id)
   */
  original_transaction_id: string
  /**
   * 1 - customer accepted the price increase
   * 0 - customer has not yet accepted the price increase
   *
   * > Note: Present if the customer was notified of price increase. When you enable a price increase for existing customers, Apple follows a schedule that it has set. [View the schedule here](https://help.apple.com/app-store-connect/#/devc9870599e) in the section "Increase the price of an auto-renewable subscription".
   *
   * See {@link expiration_intent} as the customer will have their subscription expire if they never accept the price increase.
   */
  price_consent_status?: "0" | "1"
  /**
   * Product id this renewal information is referring to.
   */
  product_id: string
}

/**
 * [Official Apple documentation](https://developer.apple.com/documentation/appstorereceipts/responsebody/latest_receipt_info)
 */
export type AppleLatestReceiptInfo = AppleInAppPurchaseTransaction & {
  /**
   * Indicates a subscription has been cancelled because of an upgrade.
   *
   * > Note: Only present for an upgrade transaction.
   */
  is_upgraded?: "true"
  offer_code_ref_name?: string
  /**
   * > Note: Only present for an auto-renewable subscription.
   */
  subscription_group_identifier?: string
}

/**
 * [Official Apple documentation](https://developer.apple.com/documentation/appstorereceipts/responsebody/receipt/in_app)
 */
export interface AppleInAppPurchaseTransaction {
  /**
   * Date Apple issued a refund to customer. Refund could be because of customer asking for a refund or a subscription upgrade occurred.
   *
   * > Note: Only present if a refund was made.
   * 
   * Example: `2013-08-01 07:00:00 Etc/GMT`
   */
  cancellation_date?: string
  /**
   * See {@link cancellation_date}
   * 
   * Example: `1605232028848`
   */
  cancellation_date_ms?: string
  /**
   * See {@link cancellation_date}
   * 
   * Example: `2013-08-01 00:00:00 America/Los_Angeles`
   */
  cancellation_date_pst?: string
  /**
   * Reason for the refund issued for a customer asking to end their subscription immediately.
   *
   * 1 - Customer indicated they had a problem using your app and wanted a refund.
   * 0 - Customer cancelled for another reason such as making purchase by mistake.
   */
  cancellation_reason?: "0" | "1"
  /**
   * Time subscription expires or will renew.
   *
   * > Note: Only present if this is an auto-renewable subscription purchase
   * 
   * Example: `2013-08-01 07:00:00 Etc/GMT`
   */
  expires_date?: string
  /**
   * See {@link expires_date}
   * 
   * Example: `1605232028848`
   */
  expires_date_ms: string
  /**
   * See {@link expires_date}
   * 
   * Example: `2013-08-01 00:00:00 America/Los_Angeles`
   */
  expires_date_pst: string
  /**
   * > Note: Only present if this is an auto-renewable subscription purchase
   *
   * [Official Apple documentation](https://developer.apple.com/documentation/appstorereceipts/is_in_intro_offer_period)
   */
  is_in_intro_offer_period?: "true" | "false"
  /**
   * > Note: Only present if this is an auto-renewable subscription purchase
   *
   * [Official Apple documentation](https://developer.apple.com/documentation/appstorereceipts/is_trial_period)
   */
  is_trial_period?: "true" | "false"
  /**
   * Example: `2013-08-01 07:00:00 Etc/GMT`
   */
  original_purchase_date: string
  /**
   * Example: `1605232028848`
   */
  original_purchase_date_ms: string
  /**
   * Example: `2013-08-01 00:00:00 America/Los_Angeles`
   */
  original_purchase_date_pst: string
  original_transaction_id: string
  product_id: string
  promotional_offer_id?: string
  /**
   * Example: `2013-08-01 07:00:00 Etc/GMT`
   */
  purchase_date: string
  /**
   * Example: `1605232028848`
   */
  purchase_date_ms: string
  /**
   * Example: `2013-08-01 00:00:00 America/Los_Angeles`
   */
  purchase_date_pst: string
  /**
   * Number of consumable products purchased.
   *
   * > Note: This value is usually present with purchases that are not consumables but it's an optional field here in case Apple changes that in the future and only includes it for consumable purchases, only.
   */
  quantity?: string
  transaction_id: string
  /**
   * > Note: Only present for subscription purchases
   */
  web_order_line_item_id?: string
}

// -----------------------------------
// Verify receipt 
// -----------------------------------

/**
 * All of the statuses that are not successful. Apple was not able to provide back receipt information.
 *
 * [Official Apple documentation](https://developer.apple.com/documentation/appstorereceipts/status)
 * 
 * > Note: There may be many more error codes then these. These are ones that are documented but Apple says that there are also codes in the range 21100-21199 that could be returned. 
 */
export enum AppleVerifyReceiptErrorCode {
  NOT_POST = 21000,
  SHOULD_NOT_HAPPEN = 21001,
  INVALID_RECEIPT_OR_DOWN = 21002,
  UNAUTHORIZED = 21003,
  WRONG_SHARED_SECRET = 21004,
  SERVICE_DOWN = 21005,
  USE_TEST_ENVIRONMENT = 21007,
  USE_PRODUCTION_ENVIRONMENT = 21008,
  APPLE_INTERNAL_ERROR = 21009,
  CUSTOMER_NOT_FOUND = 21010
}

/**
 * All of the statuses that are successful. Apple is able to return back receipt information when any of these status codes occur.
 *
 * > Note: 0 means the receipt is valid. 21006 means it's valid, but the subscription is expired. You will still receive back a receipt decoded in the response with this status code.
 *
 * [Official Apple documentation](https://developer.apple.com/documentation/appstorereceipts/status)
 */
export enum AppleVerifyReceiptSuccessfulStatus {
  SUCCESS = 0,
  VALID_BUT_SUBSCRIPTION_EXPIRED = 21006
} 

export interface AppleVerifyReceiptResponseBodySuccess {
  /**
   * The environment that Apple made the Receipt for.
   */
  environment: "Sandbox" | "Production"  
  /**
   * Base64 encoded string for the latest receipt from Apple.
   *
   * > Note: Only present if the receipt contains auto-renewable subscriptions.
   */
  latest_receipt?: string
  /**
   * All in-app purchase transactions except transactions for consumable products marked as finished by your app.
   *
   * This is the preferred place to look for the status of subscriptions and non-consumables. The field is similar but different from the transactions list in `receipt > in_app`. This field is the *latest transactions up to this moment* while the `in_app` field contains the transactions for the given receipt that got sent to Apple to process, only. If the receipt you sent up to get verified is out-of-date then `in_app` will be out-of-date.
   *
   * > Note: This is only present if the customer has purchased auto-renewable subscriptions.
   */
  latest_receipt_info?: AppleLatestReceiptInfo[]
  /**
   * All auto-renewable subscription status of their renewals.
   *
   * > Note: Only present if the receipt contains auto-renewable subscriptions.
   */
  pending_renewal_info?: ApplePendingRenewalInfo[]
  /**
   * JSON version of the receipt that was sent to Apple for verifying.
   */
  receipt: AppleReceipt
  /**
   * Determines if the receipt is a valid one, or there is some other result. Maybe the receipt is not valid, maybe you the developer made a mistake, maybe the Apple server encountered a problem.
   */
  status: AppleVerifyReceiptSuccessfulStatus
}

/**
 * The response body of a request that had an error. The receipt was not decoded and returned.
 */
export interface AppleVerifyReceiptResponseBodyError {
  /**
   * > Note: Type here is `number` because the status can be more then the options included in {@link AppleVerifyReceiptErrorCode}. 
   * 
   * See {@link AppleVerifyReceiptErrorCode} for documented options. 
   */
  status: AppleVerifyReceiptErrorCode | number
}

export type AppleVerifyReceiptResponseBody =
  | AppleVerifyReceiptResponseBodyError
  | AppleVerifyReceiptResponseBodySuccess

