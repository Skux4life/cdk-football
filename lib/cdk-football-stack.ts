import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import { Code } from 'aws-cdk-lib/aws-lambda';

require('dotenv').config();

export class CdkFootballStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Add lambda resource
    const football = new lambda.Function(this, 'FootballHandler', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'football.handler',
      code: Code.fromAsset('lambda'),
      environment: {
        FOOTBALL_API_URL: process.env.FOOTBALL_API_URL!,
        API_KEY: process.env.X_API_KEY!
      }
    });

    // add Api Gateway resource
    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: football
    })

  }
}
