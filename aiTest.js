const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
const response = openai.listEngines();