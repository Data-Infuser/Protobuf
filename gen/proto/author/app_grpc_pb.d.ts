// package: grpc_author
// file: app.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as app_pb from "./app_pb";

interface IAppManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IAppManagerService_ICreate;
    update: IAppManagerService_IUpdate;
    destroy: IAppManagerService_IDestroy;
}

interface IAppManagerService_ICreate extends grpc.MethodDefinition<app_pb.AppReq, app_pb.AppRes> {
    path: string; // "/grpc_author.AppManager/Create"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<app_pb.AppReq>;
    requestDeserialize: grpc.deserialize<app_pb.AppReq>;
    responseSerialize: grpc.serialize<app_pb.AppRes>;
    responseDeserialize: grpc.deserialize<app_pb.AppRes>;
}
interface IAppManagerService_IUpdate extends grpc.MethodDefinition<app_pb.AppReq, app_pb.AppRes> {
    path: string; // "/grpc_author.AppManager/Update"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<app_pb.AppReq>;
    requestDeserialize: grpc.deserialize<app_pb.AppReq>;
    responseSerialize: grpc.serialize<app_pb.AppRes>;
    responseDeserialize: grpc.deserialize<app_pb.AppRes>;
}
interface IAppManagerService_IDestroy extends grpc.MethodDefinition<app_pb.AppReq, app_pb.AppRes> {
    path: string; // "/grpc_author.AppManager/Destroy"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<app_pb.AppReq>;
    requestDeserialize: grpc.deserialize<app_pb.AppReq>;
    responseSerialize: grpc.serialize<app_pb.AppRes>;
    responseDeserialize: grpc.deserialize<app_pb.AppRes>;
}

export const AppManagerService: IAppManagerService;

export interface IAppManagerServer {
    create: grpc.handleUnaryCall<app_pb.AppReq, app_pb.AppRes>;
    update: grpc.handleUnaryCall<app_pb.AppReq, app_pb.AppRes>;
    destroy: grpc.handleUnaryCall<app_pb.AppReq, app_pb.AppRes>;
}

export interface IAppManagerClient {
    create(request: app_pb.AppReq, callback: (error: grpc.ServiceError | null, response: app_pb.AppRes) => void): grpc.ClientUnaryCall;
    create(request: app_pb.AppReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: app_pb.AppRes) => void): grpc.ClientUnaryCall;
    create(request: app_pb.AppReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: app_pb.AppRes) => void): grpc.ClientUnaryCall;
    update(request: app_pb.AppReq, callback: (error: grpc.ServiceError | null, response: app_pb.AppRes) => void): grpc.ClientUnaryCall;
    update(request: app_pb.AppReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: app_pb.AppRes) => void): grpc.ClientUnaryCall;
    update(request: app_pb.AppReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: app_pb.AppRes) => void): grpc.ClientUnaryCall;
    destroy(request: app_pb.AppReq, callback: (error: grpc.ServiceError | null, response: app_pb.AppRes) => void): grpc.ClientUnaryCall;
    destroy(request: app_pb.AppReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: app_pb.AppRes) => void): grpc.ClientUnaryCall;
    destroy(request: app_pb.AppReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: app_pb.AppRes) => void): grpc.ClientUnaryCall;
}

export class AppManagerClient extends grpc.Client implements IAppManagerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: app_pb.AppReq, callback: (error: grpc.ServiceError | null, response: app_pb.AppRes) => void): grpc.ClientUnaryCall;
    public create(request: app_pb.AppReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: app_pb.AppRes) => void): grpc.ClientUnaryCall;
    public create(request: app_pb.AppReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: app_pb.AppRes) => void): grpc.ClientUnaryCall;
    public update(request: app_pb.AppReq, callback: (error: grpc.ServiceError | null, response: app_pb.AppRes) => void): grpc.ClientUnaryCall;
    public update(request: app_pb.AppReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: app_pb.AppRes) => void): grpc.ClientUnaryCall;
    public update(request: app_pb.AppReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: app_pb.AppRes) => void): grpc.ClientUnaryCall;
    public destroy(request: app_pb.AppReq, callback: (error: grpc.ServiceError | null, response: app_pb.AppRes) => void): grpc.ClientUnaryCall;
    public destroy(request: app_pb.AppReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: app_pb.AppRes) => void): grpc.ClientUnaryCall;
    public destroy(request: app_pb.AppReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: app_pb.AppRes) => void): grpc.ClientUnaryCall;
}
