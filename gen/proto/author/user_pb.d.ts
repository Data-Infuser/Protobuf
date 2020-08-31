// package: grpc_author
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class UserReq extends jspb.Message { 
    getLoginId(): string;
    setLoginId(value: string): UserReq;

    getPassword(): string;
    setPassword(value: string): UserReq;

    getPasswordConfirmation(): string;
    setPasswordConfirmation(value: string): UserReq;

    getEmail(): string;
    setEmail(value: string): UserReq;

    getName(): string;
    setName(value: string): UserReq;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserReq.AsObject;
    static toObject(includeInstance: boolean, msg: UserReq): UserReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserReq;
    static deserializeBinaryFromReader(message: UserReq, reader: jspb.BinaryReader): UserReq;
}

export namespace UserReq {
    export type AsObject = {
        loginId: string,
        password: string,
        passwordConfirmation: string,
        email: string,
        name: string,
    }
}

export class UserRes extends jspb.Message { 
    getId(): number;
    setId(value: number): UserRes;

    getLoginId(): string;
    setLoginId(value: string): UserRes;

    getEmail(): string;
    setEmail(value: string): UserRes;

    getName(): string;
    setName(value: string): UserRes;

    getCode(): UserRes.Code;
    setCode(value: UserRes.Code): UserRes;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserRes.AsObject;
    static toObject(includeInstance: boolean, msg: UserRes): UserRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserRes;
    static deserializeBinaryFromReader(message: UserRes, reader: jspb.BinaryReader): UserRes;
}

export namespace UserRes {
    export type AsObject = {
        id: number,
        loginId: string,
        email: string,
        name: string,
        code: UserRes.Code,
    }

    export enum Code {
    VALID = 0,
    DUPLICATE_LOGIN_ID = -1,
    PASSWORD_NOT_MATCHED = -2,
    DUPLICATE_EMAIL = -3,
    INTERNAL_EXCEPTION = -99,
    }

}
