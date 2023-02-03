import { Dashboard } from '../lib/Dashboard';
import { oneColumn } from '../lib/Dashboard.styles';
import ChartWidget from '../widgets/ChartWidget';
import { ListWidget } from '../widgets/ListWidget';
import { SampleWidget } from '../widgets/SampleWidget';

export default class SampleDashboard extends Dashboard {
  protected rowHeights(): string | undefined {
    return "1fr";
  }

  protected columnWidths(): string | undefined {
    return "4fr 6fr";
  }

  protected dashboardLayout(): undefined | JSX.Element {
    return (
      <>
        <ListWidget />
        <div style={oneColumn()}>
          <ChartWidget />
          <SampleWidget />
        </div>
      </>
    );
  }
}
