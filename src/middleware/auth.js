import { JsonResponse } from "../utils/apiResponse";
import MsgTypes from "../constants/msgTypes";
import User from "../repository/user";


export const isAuthenticated = async (req, res, next) => {
  const agentId = req.header("x-agent-id");
  if (!agentId) return JsonResponse(res, 401, MsgTypes.ACCESS_DENIED);
  try {
    req.body.user = await User.findOne({
      where: { email: decoded.email },
    });
    next();
  } catch (err) {
    JsonResponse(res, 406, "USER NOT FOUND" + err);
  }
};

export const isAdmin = async (req, res, next) => {
  const user = req.body.user
  if (!user) return JsonResponse(res, 406, "NOT AUTHORIZED");
  if (user.type !== 'agent' || user.role !== "admin")
    return JsonResponse(res, 406, "UNAUTHORIZED, you are not authorized to access this resource");
  next();
};