import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
  })
  .unknown(true); // This unknown(true) will accept more environment variables although they are not defined here for my taste and should not be

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validtion error ${error.message}`);
}

const envVars: EnvVars = value;

//console.log(error);
//console.log(envValues);

export const envs = {
  port: envVars.PORT || 3000,
};
