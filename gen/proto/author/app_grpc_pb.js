// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var app_pb = require('./app_pb.js');

function serialize_grpc_author_AppReq(arg) {
  if (!(arg instanceof app_pb.AppReq)) {
    throw new Error('Expected argument of type grpc_author.AppReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_author_AppReq(buffer_arg) {
  return app_pb.AppReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_author_AppRes(arg) {
  if (!(arg instanceof app_pb.AppRes)) {
    throw new Error('Expected argument of type grpc_author.AppRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_author_AppRes(buffer_arg) {
  return app_pb.AppRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var AppManagerService = exports.AppManagerService = {
  create: {
    path: '/grpc_author.AppManager/Create',
    requestStream: false,
    responseStream: false,
    requestType: app_pb.AppReq,
    responseType: app_pb.AppRes,
    requestSerialize: serialize_grpc_author_AppReq,
    requestDeserialize: deserialize_grpc_author_AppReq,
    responseSerialize: serialize_grpc_author_AppRes,
    responseDeserialize: deserialize_grpc_author_AppRes,
  },
  update: {
    path: '/grpc_author.AppManager/Update',
    requestStream: false,
    responseStream: false,
    requestType: app_pb.AppReq,
    responseType: app_pb.AppRes,
    requestSerialize: serialize_grpc_author_AppReq,
    requestDeserialize: deserialize_grpc_author_AppReq,
    responseSerialize: serialize_grpc_author_AppRes,
    responseDeserialize: deserialize_grpc_author_AppRes,
  },
  destroy: {
    path: '/grpc_author.AppManager/Destroy',
    requestStream: false,
    responseStream: false,
    requestType: app_pb.AppReq,
    responseType: app_pb.AppRes,
    requestSerialize: serialize_grpc_author_AppReq,
    requestDeserialize: deserialize_grpc_author_AppReq,
    responseSerialize: serialize_grpc_author_AppRes,
    responseDeserialize: deserialize_grpc_author_AppRes,
  },
};

exports.AppManagerClient = grpc.makeGenericClientConstructor(AppManagerService);
