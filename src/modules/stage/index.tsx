import { Board } from '@kata-kit/common';
import { Dashboard } from '@kata-kit/dashboard';
// @ts-ignore
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { RightButton } from '../buttons';
import DatatablePage from '../schedule_list/datatable';
import { Button } from '@kata-kit/button';

const action = <>
  <Button size="sm"><i className="icon-edit" /></Button>
  <Button size="sm" color="danger"><i className="icon-trash" /></Button>
  <Button size="sm" color="primary"><i className="icon-view" /></Button>
</>;

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
    {
      label: 'Action',
      field: 'action',
      sort: 'asc',
      width: 50,
    }
  ],
  rows: [
    {
      name: 'Main Stage',
      capacity: 2000,
      label: 2,
      action
    },
    {
      name: 'Product Development Stage',
      capacity: 100,
      label: 1,
      action
    },
    {
      name: 'Technology Stage',
      capacity: 100,
      label: 1,
      action
    },
    {
      name: 'Code & Build Stage',
      capacity: 200,
      label: 1,
      action
    },
  ],
};

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
          <MDBTable
            striped
            bordered
            hover
            searching={false}
            paging={false}
          >
            <MDBTableHead columns={sampleData.columns} />
            <MDBTableBody rows={sampleData.rows} />
          </MDBTable>
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
