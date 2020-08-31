// package: grpc_author
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class LoginReq extends jspb.Message { 
    getLoginId(): string;
    setLoginId(value: string): LoginReq;

    getPassword(): string;
    setPassword(value: string): LoginReq;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginReq.AsObject;
    static toObject(includeInstance: boolean, msg: LoginReq): LoginReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginReq;
    static deserializeBinaryFromReader(message: LoginReq, reader: jspb.BinaryReader): LoginReq;
}

export namespace LoginReq {
    export type AsObject = {
        loginId: string,
        password: string,
    }
}

export class JwtReq extends jspb.Message { 
    getJwt(): string;
    setJwt(value: string): JwtReq;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JwtReq.AsObject;
    static toObject(includeInstance: boolean, msg: JwtReq): JwtReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JwtReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JwtReq;
    static deserializeBinaryFromReader(message: JwtReq, reader: jspb.BinaryReader): JwtReq;
}

export namespace JwtReq {
    export type AsObject = {
        jwt: string,
    }
}

export class RefreshTokenReq extends jspb.Message { 
    getRefreshToken(): string;
    setRefreshToken(value: string): RefreshTokenReq;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefreshTokenReq.AsObject;
    static toObject(includeInstance: boolean, msg: RefreshTokenReq): RefreshTokenReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RefreshTokenReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefreshTokenReq;
    static deserializeBinaryFromReader(message: RefreshTokenReq, reader: jspb.BinaryReader): RefreshTokenReq;
}

export namespace RefreshTokenReq {
    export type AsObject = {
        refreshToken: string,
    }
}

export class AuthRes extends jspb.Message { 
    getJwt(): string;
    setJwt(value: string): AuthRes;


    hasExpiresIn(): boolean;
    clearExpiresIn(): void;
    getExpiresIn(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpiresIn(value?: google_protobuf_timestamp_pb.Timestamp): AuthRes;

    getRefreshToken(): string;
    setRefreshToken(value: string): AuthRes;


    hasRefreshTokenExpiresIn(): boolean;
    clearRefreshTokenExpiresIn(): void;
    getRefreshTokenExpiresIn(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRefreshTokenExpiresIn(value?: google_protobuf_timestamp_pb.Timestamp): AuthRes;

    getCode(): AuthResult;
    setCode(value: AuthResult): AuthRes;

    getMsg(): string;
    setMsg(value: string): AuthRes;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthRes.AsObject;
    static toObject(includeInstance: boolean, msg: AuthRes): AuthRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthRes;
    static deserializeBinaryFromReader(message: AuthRes, reader: jspb.BinaryReader): AuthRes;
}

export namespace AuthRes {
    export type AsObject = {
        jwt: string,
        expiresIn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        refreshToken: string,
        refreshTokenExpiresIn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        code: AuthResult,
        msg: string,
    }
}

export enum AuthResult {
    VALID = 0,
    NOT_REGISTERED = -1,
    INVALID_PASSWORD = -2,
    WITHDRAWAL_USER = -3,
    INVALID_TOKEN = -4,
    INTERNAL_EXCEPTION = -9,
}
