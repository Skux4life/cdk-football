#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkFootballStack } from '../lib/cdk-football-stack';

const app = new cdk.App();
new CdkFootballStack(app, 'CdkFootballStack');
