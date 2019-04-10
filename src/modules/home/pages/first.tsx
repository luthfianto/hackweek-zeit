import { Board } from '@kata-kit/common';
import { Dashboard } from '@kata-kit/dashboard';
import * as React from 'react';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import { RightButton } from '../../buttons';


import { Table } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactstrap';

// imp

//@ts-ignore
// import BootstrapTable from 'react-bootstrap-table-next';



import MaterialIcon, {colorPalette} from 'material-icons-react';

interface HomeFirstPageState {
  open: boolean;
  hasil: any;
  errors?: string;
}

class HomeFirstPage extends React.Component<{}, HomeFirstPageState> {
  state = {
    open: false,
    hasil: null as any,
    errors: undefined,
  };

  private readonly title = "Speakers";

  constructor(props: any) {
    super(props);
  }

  public render() {
    const { hasil } = this.state;
    if (!hasil) {
      return this._masihKosong();
    }
    const { speakers } = hasil || ({} as any);

    if (!speakers) {
      return this._masihKosong();
    }

    console.log(speakers)

    return <Dashboard title={this.title}  tooltip="Homepage of the Wicara demo"><Board>
      <RightButton />
      <br/>
      <Table>
        <thead>
          <th>&nbsp; Speaker Name</th>
          <th>Title</th>
          {/* <th>Topic</th> */}
          <th>Linkedin</th>
        </thead>
        <tbody>
          {speakers.map((speaker: any) =>
            <>
              <tr>
                <td>{speaker.nama_speaker}</td>
                <td>{speaker.title}</td>
                {/* <td>{speaker.topik}</td> */}
                <td>{speaker.linkedin}</td>
              </tr>
            </>,
          )}
        </tbody>
      </Table>
    </Board>
    </Dashboard>;
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
    return <Dashboard title={this.title}  tooltip="Homepage of the Wicara demo"><Board>
      <RightButton />
      <br/>
      <Table>
        <thead>
          <th>&nbsp; Speaker Name</th>
          <th>Title</th>
          {/* <th>Topic</th> */}
          <th>Linkedin</th>
        </thead>
        <tbody>
        </tbody>
      </Table>
    </Board>
    </Dashboard>;
  }

  private _renderMantap() {

  }
}

export default HomeFirstPage;
