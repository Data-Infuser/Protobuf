// package: designer
// file: application.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Application extends jspb.Message { 
    getId(): number;
    setId(value: number): Application;

    getNameSpace(): string;
    setNameSpace(value: string): Application;

    getTitle(): string;
    setTitle(value: string): Application;

    getDescription(): string;
    setDescription(value: string): Application;

    getStatus(): string;
    setStatus(value: string): Application;

    getUserId(): number;
    setUserId(value: number): Application;

    getCreatedAt(): string;
    setCreatedAt(value: string): Application;

    getUpdatedAt(): string;
    setUpdatedAt(value: string): Application;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Application.AsObject;
    static toObject(includeInstance: boolean, msg: Application): Application.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Application, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Application;
    static deserializeBinaryFromReader(message: Application, reader: jspb.BinaryReader): Application;
}

export namespace Application {
    export type AsObject = {
        id: number,
        nameSpace: string,
        title: string,
        description: string,
        status: string,
        userId: number,
        createdAt: string,
        updatedAt: string,
    }
}

export class ApplicationList extends jspb.Message { 
    getTotalCount(): number;
    setTotalCount(value: number): ApplicationList;

    getPage(): number;
    setPage(value: number): ApplicationList;

    getPerPage(): number;
    setPerPage(value: number): ApplicationList;

    clearApplicationsList(): void;
    getApplicationsList(): Array<Application>;
    setApplicationsList(value: Array<Application>): ApplicationList;
    addApplications(value?: Application, index?: number): Application;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApplicationList.AsObject;
    static toObject(includeInstance: boolean, msg: ApplicationList): ApplicationList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApplicationList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApplicationList;
    static deserializeBinaryFromReader(message: ApplicationList, reader: jspb.BinaryReader): ApplicationList;
}

export namespace ApplicationList {
    export type AsObject = {
        totalCount: number,
        page: number,
        perPage: number,
        applicationsList: Array<Application.AsObject>,
    }
}

export class ListApplicationRequest extends jspb.Message { 
    getPerPage(): number;
    setPerPage(value: number): ListApplicationRequest;

    getPage(): number;
    setPage(value: number): ListApplicationRequest;

    getNameSpace(): string;
    setNameSpace(value: string): ListApplicationRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListApplicationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListApplicationRequest): ListApplicationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListApplicationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListApplicationRequest;
    static deserializeBinaryFromReader(message: ListApplicationRequest, reader: jspb.BinaryReader): ListApplicationRequest;
}

export namespace ListApplicationRequest {
    export type AsObject = {
        perPage: number,
        page: number,
        nameSpace: string,
    }
}
