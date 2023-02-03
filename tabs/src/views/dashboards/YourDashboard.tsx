import { Dashboard } from "../lib/Dashboard";
import { oneColumn } from "../lib/Dashboard.styles";
import { SampleWidget } from "../widgets/SampleWidget";

export default class YourDashboard extends Dashboard {
  protected rowHeights(): string | undefined {
    return "500px";
  }

  protected columnWidths(): string | undefined {
    return "4fr 6fr";
  }

  protected dashboardLayout(): undefined | JSX.Element {
    return (
      <>
        <SampleWidget />
        <div style={oneColumn("6fr 4fr")}>
          <SampleWidget />
          <SampleWidget />
        </div>
      </>
    );
  }
}
