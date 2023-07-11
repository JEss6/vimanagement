const serverConfig: any = {
  BE_TYPE: "dev",
  BE_ADDRESS_DEV: "localhost:18080",
  BE_ADDRESS_RELEASE: "jdi.iptime.org:123123",
};

serverConfig.BE_ADDRESS =
  serverConfig.BE_TYPE === "dev"
    ? serverConfig.BE_ADDRESS_DEV
    : serverConfig.BE_ADDRESS_RELEASE;

export default serverConfig;
