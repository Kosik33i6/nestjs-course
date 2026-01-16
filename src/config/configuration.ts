import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

export const configuration = () => {
  const port = Number(process.env.PORT) || 3000;
  const dbPort = Number(process.env.DATABASE_PORT) || 5432;
  const host = process.env.DATABASE_HOST;
  const password = process.env.DATABASE_PASSWORD;

  if (!host) throw new BadRequestException('DATABASE_HOST is missing');
  if (!password) throw new BadRequestException('DATABASE_PASSWORD is missing');
  if (isNaN(port) || isNaN(dbPort))
    throw new InternalServerErrorException('Invalid port number');

  return {
    port,
    database: {
      host,
      port: dbPort,
      password,
    },
  };
};
