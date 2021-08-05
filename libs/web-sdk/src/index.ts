/*
 * @forgerock/javascript-sdk
 *
 * index.ts
 *
 * Copyright (c) 2020-2021 ForgeRock. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import Auth, {
  CallbackType,
  ErrorCode,
  Callback,
  NameValue,
  PolicyRequirement,
  Step,
  StepDetail,
} from '@forgerock/util-auth';
import Config, { ConfigOptions, ValidConfigOptions } from '@forgerock/util-config';
import Dispatcher, { CallbackContainer, FREvent, Listener } from '@forgerock/util-event';
import FRAuth from '@forgerock/feature-fr-auth';
import {
  FRCallback,
  AttributeInputCallback,
  ChoiceCallback,
  ConfirmationCallback,
  DeviceProfileCallback,
  FRCallbackFactory,
  HiddenValueCallback,
  KbaCreateCallback,
  MetadataCallback,
  NameCallback,
  PasswordCallback,
  PollingWaitCallback,
  ReCaptchaCallback,
  RedirectCallback,
  SelectIdPCallback,
  IdPValue,
  SuspendedTextOutputCallback,
  TermsAndConditionsCallback,
  TextOutputCallback,
  ValidatedCreatePasswordCallback,
  ValidatedCreateUsernameCallback,
  StepType,
  FRLoginFailure,
  FRLoginSuccess,
  FRStep,
  FRStepHandler,
  AuthResponse,
  FailureDetail,
} from '@forgerock/feature-fr-auth';

import { FRDevice } from '@forgerock/feature-fr-device';
import {
  FRPolicy,
  defaultMessageCreator,
  MessageCreator,
  PolicyKey,
  ProcessedPropertyError,
} from '@forgerock/feature-fr-policy';
import { FRRecoveryCodes } from '@forgerock/feature-fr-recovery-codes';
import { FRUI } from '@forgerock/feature-fr-ui';
import { FRUser } from '@forgerock/feature-fr-user';
import {
  FRWebAuthn,
  RelyingParty,
  WebAuthnAuthenticationMetadata,
  WebAuthnCallbacks,
  WebAuthnOutcome,
  WebAuthnRegistrationMetadata,
  WebAuthnStepType,
} from '@forgerock/feature-fr-webauthn';
import { HttpClient } from '@forgerock/util-http-client';
import {
  OAuth2Client,
  GetAuthorizationUrlOptions,
  GetOAuth2TokensOptions,
  OAuth2Tokens,
  ResponseType,
} from '@forgerock/feature-oauth2-client';
import { SessionManager } from '@forgerock/util-session-manager';
import { Tokens } from '@forgerock/util-shared';
import { TokenManager, GetTokensOptions } from '@forgerock/util-token-manager';
import TokenStorage from '@forgerock/util-token-storage';
import UserManager from '@forgerock/feature-user-manager';
import { Deferred, PKCE, LocalStorage } from '@forgerock/utils';

export {
  defaultMessageCreator,
  AttributeInputCallback,
  Auth,
  AuthResponse,
  Callback,
  CallbackContainer,
  CallbackType,
  ChoiceCallback,
  Config,
  ConfigOptions,
  ConfirmationCallback,
  Deferred,
  DeviceProfileCallback,
  Dispatcher,
  ErrorCode,
  FailureDetail,
  FRAuth,
  FRCallback,
  FRCallbackFactory,
  FRDevice,
  FREvent,
  FRLoginFailure,
  FRLoginSuccess,
  FRPolicy,
  FRRecoveryCodes,
  FRStep,
  FRStepHandler,
  FRUI,
  FRUser,
  FRWebAuthn,
  GetAuthorizationUrlOptions,
  GetOAuth2TokensOptions,
  GetTokensOptions,
  HiddenValueCallback,
  HttpClient,
  IdPValue,
  KbaCreateCallback,
  Listener,
  LocalStorage,
  MessageCreator,
  MetadataCallback,
  NameCallback,
  NameValue,
  OAuth2Client,
  OAuth2Tokens,
  PasswordCallback,
  PKCE,
  PolicyKey,
  PolicyRequirement,
  PollingWaitCallback,
  ProcessedPropertyError,
  ReCaptchaCallback,
  RedirectCallback,
  RelyingParty,
  ResponseType,
  SelectIdPCallback,
  SessionManager,
  Step,
  StepDetail,
  StepType,
  SuspendedTextOutputCallback,
  TermsAndConditionsCallback,
  TextOutputCallback,
  TokenManager,
  Tokens,
  TokenStorage,
  UserManager,
  ValidatedCreatePasswordCallback,
  ValidatedCreateUsernameCallback,
  ValidConfigOptions,
  WebAuthnAuthenticationMetadata,
  WebAuthnCallbacks,
  WebAuthnOutcome,
  WebAuthnRegistrationMetadata,
  WebAuthnStepType,
};
