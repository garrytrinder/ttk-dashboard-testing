import { SampleModel } from "../models/sampleModel";
import {
  createMicrosoftGraphClientWithCredential,
  ErrorCode,
  TeamsUserCredential,
  TeamsUserCredentialAuthConfig,
} from "@microsoft/teamsfx";
import { GraphError } from "@microsoft/microsoft-graph-client";

const authConfig: TeamsUserCredentialAuthConfig = {
  clientId: process.env.REACT_APP_CLIENT_ID!,
  initiateLoginEndpoint: process.env.REACT_APP_START_LOGIN_PAGE_URL!,
};

const teamsUserCredential = new TeamsUserCredential(authConfig);

export const getSampleData = async (): Promise<SampleModel> => {
  try {
    await teamsUserCredential.login(["User.Read"]);
    const graphClient = createMicrosoftGraphClientWithCredential(teamsUserCredential, ["User.Read"]); // Initializes MS Graph SDK using our MsGraphAuthProvider
    const profile = await graphClient.api("/me").get();
    return { content: profile.displayName };
  } catch (err: unknown) {
    // ErrorWithCode is handled by Graph client
    if (err instanceof GraphError && err.code?.includes(ErrorCode.UiRequiredError)) {
      // Need to show login button to ask for user consent.
      return { content: '' };
    }
    return { content: '' };
  }
}
