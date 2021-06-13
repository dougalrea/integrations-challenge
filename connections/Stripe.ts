import {
  APIKeyCredentials,
  CardDetails,
  ParsedAuthorizationResponse,
  ParsedCancelResponse,
  ParsedCaptureResponse,
  ProcessorConnection,
  RawAuthorizationRequest,
  RawCancelRequest,
  RawCaptureRequest,
} from '@primer-io/app-framework';

import HttpClient from '../common/HTTPClient';

const StripeConnection: ProcessorConnection<APIKeyCredentials, CardDetails> = {
  name: 'STRIPE',

  website: 'stripe.com',

  configuration: {
    accountId: 'acct_1J1pPKK6CA6lGmFj',
    apiKey: 'pk_test_51J1pPKK6CA6lGmFjDwoYvaTFkwWy9j8bflIfdkcBMBkMdzG6VCQ3Zg000LDXahoJMNp4w7jSVg7HVlKX6gzrcJRQ00Q6toO3N8',
  },

  /**
   *
   * You should authorize a transaction and return an appropriate response
   */
  authorize(
    request: RawAuthorizationRequest<APIKeyCredentials, CardDetails>,
  ): Promise<ParsedAuthorizationResponse> {
      throw new Error('Method Not Implemented');
  },

  /**
   * Capture a payment intent
   * This method should capture the funds on an authorized transaction
   */
  capture(
    request: RawCaptureRequest<APIKeyCredentials>,
  ): Promise<ParsedCaptureResponse> {
    throw new Error('Method Not Implemented');
  },

  /**
   * Cancel a payment intent
   * This one should cancel an authorized transaction
   */
  cancel(
    request: RawCancelRequest<APIKeyCredentials>,
  ): Promise<ParsedCancelResponse> {
    throw new Error('Method Not Implemented');
  },
};

export default StripeConnection;
