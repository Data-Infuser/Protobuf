// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var application_pb = require('./application_pb.js');

function serialize_designer_ApplicationList(arg) {
  if (!(arg instanceof application_pb.ApplicationList)) {
    throw new Error('Expected argument of type designer.ApplicationList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_designer_ApplicationList(buffer_arg) {
  return application_pb.ApplicationList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_designer_ListApplicationRequest(arg) {
  if (!(arg instanceof application_pb.ListApplicationRequest)) {
    throw new Error('Expected argument of type designer.ListApplicationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_designer_ListApplicationRequest(buffer_arg) {
  return application_pb.ListApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ApplicationServiceService = exports.ApplicationServiceService = {
  listApplication: {
    path: '/designer.ApplicationService/ListApplication',
    requestStream: false,
    responseStream: false,
    requestType: application_pb.ListApplicationRequest,
    responseType: application_pb.ApplicationList,
    requestSerialize: serialize_designer_ListApplicationRequest,
    requestDeserialize: deserialize_designer_ListApplicationRequest,
    responseSerialize: serialize_designer_ApplicationList,
    responseDeserialize: deserialize_designer_ApplicationList,
  },
};

exports.ApplicationServiceClient = grpc.makeGenericClientConstructor(ApplicationServiceService);
