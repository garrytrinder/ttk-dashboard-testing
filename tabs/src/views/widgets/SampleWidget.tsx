import { Button, Text } from "@fluentui/react-components";
import { Widget } from "../lib/Widget";
import { SampleModel } from "../../models/sampleModel";
import { getSampleData } from "../../services/sampleService";

export class SampleWidget extends Widget<SampleModel> {
  async getData(): Promise<SampleModel> {
    return getSampleData();
  }

  headerContent(): JSX.Element | undefined {
    return <Text>Sample Widget</Text>;
  }

  bodyContent(): JSX.Element | undefined {
    return <div>{this.state.data?.content}</div>;
  }

  footerContent(): JSX.Element | undefined {
    return (
      <Button
        appearance="primary"
        size="medium"
        style={{ width: "fit-content" }}
        onClick={() => { }}
      >
        View Details
      </Button>
    );
  }
}
