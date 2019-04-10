import { Board } from '@kata-kit/common';
import { Dashboard } from '@kata-kit/dashboard';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { RightButton } from '../buttons';
import DatatablePage from '../schedule_list/datatable';

const sampleData = {
  columns: [
    {
      label: 'Stage Name',
      field: 'name',
      sort: 'asc',
      width: 150,
    },
    {
      label: 'Capacity',
      field: 'capacity',
      sort: 'asc',
      width: 270,
    },
    {
      label: 'Keyword Label',
      field: 'label',
      sort: 'asc',
      width: 100,
    },
  ],
  rows: [
    {
      name: 'Main Stage',
      capacity: 420,
      label: '[main, utama]',
    },
    {
      name: 'Product Development Stage',
      capacity: 69,
      label: '[product, dev]',
    },
  ],
};

const MyTable = () => DatatablePage(sampleData)

export default class ListStageModule extends React.PureComponent<RouteComponentProps> {
  readonly title = "Stage List";

  constructor(props: RouteComponentProps) {
    super(props);
  }

  routeChange() {
    this.props.history.push("stage");
  }

  render() {
    return (
      <Dashboard title={this.title}>
        <Board>
          <RightButton onClick={this.routeChange.bind(this)} />
          <br />
          <MyTable />
        </Board>
      </Dashboard>
    );
  }


  public async componentDidMount() {
    try {
      const hasil1 = await fetch('https://bot-event.firebaseio.com/events.json');
      const hasil = (await hasil1.json())[0];
      console.log(hasil);
      this.setState({ hasil });
    } catch (err) {
      this.setState({ errors: err.message });
      console.error(err);
      alert(err);
    }
  }

  private _masihKosong() {
    return (
      <Dashboard title={this.title}>
        <Board>
          <RightButton onClick={this.routeChange.bind(this)} />
          <br />
          <DatatablePage />
        </Board>
      </Dashboard>
    );
  }
}
