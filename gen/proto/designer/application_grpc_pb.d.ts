// package: designer
// file: application.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as application_pb from "./application_pb";

interface IApplicationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listApplication: IApplicationServiceService_IListApplication;
}

interface IApplicationServiceService_IListApplication extends grpc.MethodDefinition<application_pb.ListApplicationRequest, application_pb.ApplicationList> {
    path: string; // "/designer.ApplicationService/ListApplication"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<application_pb.ListApplicationRequest>;
    requestDeserialize: grpc.deserialize<application_pb.ListApplicationRequest>;
    responseSerialize: grpc.serialize<application_pb.ApplicationList>;
    responseDeserialize: grpc.deserialize<application_pb.ApplicationList>;
}

export const ApplicationServiceService: IApplicationServiceService;

export interface IApplicationServiceServer {
    listApplication: grpc.handleUnaryCall<application_pb.ListApplicationRequest, application_pb.ApplicationList>;
}

export interface IApplicationServiceClient {
    listApplication(request: application_pb.ListApplicationRequest, callback: (error: grpc.ServiceError | null, response: application_pb.ApplicationList) => void): grpc.ClientUnaryCall;
    listApplication(request: application_pb.ListApplicationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: application_pb.ApplicationList) => void): grpc.ClientUnaryCall;
    listApplication(request: application_pb.ListApplicationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: application_pb.ApplicationList) => void): grpc.ClientUnaryCall;
}

export class ApplicationServiceClient extends grpc.Client implements IApplicationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listApplication(request: application_pb.ListApplicationRequest, callback: (error: grpc.ServiceError | null, response: application_pb.ApplicationList) => void): grpc.ClientUnaryCall;
    public listApplication(request: application_pb.ListApplicationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: application_pb.ApplicationList) => void): grpc.ClientUnaryCall;
    public listApplication(request: application_pb.ListApplicationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: application_pb.ApplicationList) => void): grpc.ClientUnaryCall;
}
