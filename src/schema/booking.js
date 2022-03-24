/* -------------------------------------------------------------------------- */
/*                              external imports                              */
/* -------------------------------------------------------------------------- */
import Joi from "joi";

export const Booking = Joi.object({
  userId: Joi.number().required(),
  startAt: Joi.date().required(),
  finishAt: Joi.date().required(),
});
