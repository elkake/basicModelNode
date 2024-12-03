

s3.js -> putIObject -> const result = await client.send(command)
  console.log({ result })

```
{
  result: {
    '$metadata': {
      httpStatusCode: 200,
      requestId: '834P1KYHN44QJM84',
      extendedRequestId: 'wW10scfGYnlU5AtUykztTzO631wzfqXdaGIWd7vmJVfl1Fk9TNGCiNCyg+JY5uIMbm8NpC2CfB0=',
      cfId: undefined,
      attempts: 1,
      totalRetryDelay: 0
    },
    ETag: '"07fa463e3bcdb9fca4044ad6efb13c95"',
    ServerSideEncryption: 'AES256'
  }
}
```

list: ListObjectsCommand,

````
{
  '$metadata': {
    httpStatusCode: 200,
    requestId: 'VS6X4XXBD71FP0EH',
    extendedRequestId: 'A3CaqrZ0KZ9Fc+D0Tov8kr+9SQuWwvEq9hNSYvUlfY3KJx6nyBvzDfQ5gFfs9/SOWNa/G6tMPF6eWVfo+JOKkrFbLzetbJFS',
    cfId: undefined,
    attempts: 1,
    totalRetryDelay: 0
  },
  Contents: [
    {
      Key: 'hola.png',
      LastModified: 2024-12-03T04:38:08.000Z,
      ETag: '"07fa463e3bcdb9fca4044ad6efb13c95"',
      Size: 10923,
      StorageClass: 'STANDARD',
      Owner: [Object]
    },
    {
      Key: 'images (1).jpg',
      LastModified: 2024-12-03T04:47:02.000Z,
      ETag: '"07fa463e3bcdb9fca4044ad6efb13c95"',
      Size: 10923,
      StorageClass: 'STANDARD',
      Owner: [Object]
    }
  ],
  IsTruncated: false,
  Marker: '',
  MaxKeys: 1000,
  Name: 'giakeruz',
  Prefix: ''
}
````

