import MsgTypes from '../constants/msgTypes'

export const sendFailureResponse = (error) => {
  if (!error.statusCode) error.statusCode = 500;
  throw error;
};

export const sendNotFoundResponse = (message) => {
  const error = new Error(`${message}`);
  error.statusCode = 404;
  throw error;
};

export const sendSuccessResponse = (res, message, body = null) => {
  res.status(200).json({
    error: false,
    message,
    body,
  });
};

export const JsonResponse = (
  res,
  status,
  msg,
  data = null,
  meta = null
) => {
  const body = {};

  if (msg) {
    body.message = msg;
  }
  if (data) {
    body.data = data;
  }
  if (meta) {
    body.meta = meta;
  }

  if (typeof msg === "string") {
    const data = MsgTypes[msg];

    if (typeof data !== "undefined") {
      body.message = MsgTypes[msg];
    } else {
      body.message = msg;
    }
    
  }
  
  res.status(status ?? 200).send(body);
};
