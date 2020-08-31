// package: grpc_author
// file: app.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AppReq extends jspb.Message { 
    getAppId(): number;
    setAppId(value: number): AppReq;

    getNameSpace(): string;
    setNameSpace(value: string): AppReq;

    clearTrafficsList(): void;
    getTrafficsList(): Array<AppReq.AppTraffic>;
    setTrafficsList(value: Array<AppReq.AppTraffic>): AppReq;
    addTraffics(value?: AppReq.AppTraffic, index?: number): AppReq.AppTraffic;

    clearOperationsList(): void;
    getOperationsList(): Array<AppReq.Operation>;
    setOperationsList(value: Array<AppReq.Operation>): AppReq;
    addOperations(value?: AppReq.Operation, index?: number): AppReq.Operation;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppReq.AsObject;
    static toObject(includeInstance: boolean, msg: AppReq): AppReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppReq;
    static deserializeBinaryFromReader(message: AppReq, reader: jspb.BinaryReader): AppReq;
}

export namespace AppReq {
    export type AsObject = {
        appId: number,
        nameSpace: string,
        trafficsList: Array<AppReq.AppTraffic.AsObject>,
        operationsList: Array<AppReq.Operation.AsObject>,
    }


    export class AppTraffic extends jspb.Message { 
        getUnit(): string;
        setUnit(value: string): AppTraffic;

        getValue(): number;
        setValue(value: number): AppTraffic;

        getSeq(): number;
        setSeq(value: number): AppTraffic;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AppTraffic.AsObject;
        static toObject(includeInstance: boolean, msg: AppTraffic): AppTraffic.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AppTraffic, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AppTraffic;
        static deserializeBinaryFromReader(message: AppTraffic, reader: jspb.BinaryReader): AppTraffic;
    }

    export namespace AppTraffic {
        export type AsObject = {
            unit: string,
            value: number,
            seq: number,
        }
    }

    export class Operation extends jspb.Message { 
        getEndPoint(): string;
        setEndPoint(value: string): Operation;

        getOperationId(): number;
        setOperationId(value: number): Operation;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Operation.AsObject;
        static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Operation;
        static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
    }

    export namespace Operation {
        export type AsObject = {
            endPoint: string,
            operationId: number,
        }
    }

}

export class AppRes extends jspb.Message { 
    getStatus(): AppRes.Status;
    setStatus(value: AppRes.Status): AppRes;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppRes.AsObject;
    static toObject(includeInstance: boolean, msg: AppRes): AppRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppRes;
    static deserializeBinaryFromReader(message: AppRes, reader: jspb.BinaryReader): AppRes;
}

export namespace AppRes {
    export type AsObject = {
        status: AppRes.Status,
    }

    export enum Status {
    OK = 0,
    ERROR = 1,
    }

}
