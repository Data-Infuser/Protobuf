// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var api_auth_pb = require('./api_auth_pb.js');

function serialize_grpc_author_ApiAuthReq(arg) {
  if (!(arg instanceof api_auth_pb.ApiAuthReq)) {
    throw new Error('Expected argument of type grpc_author.ApiAuthReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_author_ApiAuthReq(buffer_arg) {
  return api_auth_pb.ApiAuthReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_author_ApiAuthRes(arg) {
  if (!(arg instanceof api_auth_pb.ApiAuthRes)) {
    throw new Error('Expected argument of type grpc_author.ApiAuthRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_author_ApiAuthRes(buffer_arg) {
  return api_auth_pb.ApiAuthRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var ApiAuthServiceService = exports.ApiAuthServiceService = {
  auth: {
    path: '/grpc_author.ApiAuthService/Auth',
    requestStream: false,
    responseStream: false,
    requestType: api_auth_pb.ApiAuthReq,
    responseType: api_auth_pb.ApiAuthRes,
    requestSerialize: serialize_grpc_author_ApiAuthReq,
    requestDeserialize: deserialize_grpc_author_ApiAuthReq,
    responseSerialize: serialize_grpc_author_ApiAuthRes,
    responseDeserialize: deserialize_grpc_author_ApiAuthRes,
  },
};

exports.ApiAuthServiceClient = grpc.makeGenericClientConstructor(ApiAuthServiceService);
