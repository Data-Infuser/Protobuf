// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var token_pb = require('./token_pb.js');

function serialize_grpc_author_TokenReq(arg) {
  if (!(arg instanceof token_pb.TokenReq)) {
    throw new Error('Expected argument of type grpc_author.TokenReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_author_TokenReq(buffer_arg) {
  return token_pb.TokenReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_author_TokenRes(arg) {
  if (!(arg instanceof token_pb.TokenRes)) {
    throw new Error('Expected argument of type grpc_author.TokenRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_author_TokenRes(buffer_arg) {
  return token_pb.TokenRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var TokenManagerService = exports.TokenManagerService = {
  search: {
    path: '/grpc_author.TokenManager/Search',
    requestStream: false,
    responseStream: false,
    requestType: token_pb.TokenReq,
    responseType: token_pb.TokenRes,
    requestSerialize: serialize_grpc_author_TokenReq,
    requestDeserialize: deserialize_grpc_author_TokenReq,
    responseSerialize: serialize_grpc_author_TokenRes,
    responseDeserialize: deserialize_grpc_author_TokenRes,
  },
};

exports.TokenManagerClient = grpc.makeGenericClientConstructor(TokenManagerService);
