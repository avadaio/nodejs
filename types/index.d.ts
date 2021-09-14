// Type definitions for avadaio-node
// Project: avadaio-node
// Definitions by: Thomas Nguyen <anhnt@avada.io>

/*~ This is the module template file for class modules.
 *~ You should rename it to index.d.ts and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

/*~ Note that ES6 modules cannot directly export class objects.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */

export = AvadaEmailMarketing;

/*~ Write your module's methods and properties in this class */
declare class AvadaEmailMarketing {
  constructor(config: AvadaEmailMarketing.Config);
  getApiUrl: (endpoint: string) => string;

  makeRequest: (params: AvadaEmailMarketing.MakeRequestParams) => Promise<any>;

  connection: {
    test: () => Promise<AvadaEmailMarketing.ApiResponse>;
  };

  form: {
    list: () => Promise<AvadaEmailMarketing.ApiResponse>;
  };
}

declare namespace AvadaEmailMarketing {
  interface Config {
    appId: string;
    apiKey: string;
    apiUrl?: string;
  }

  interface MakeRequestParams {
    body: object;
    endpoint: string;
    isTest: boolean;
  }

  interface ApiResponse {
    success: boolean;
    message: string;
    data?: any;
  }
}
