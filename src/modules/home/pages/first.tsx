import { Button } from '@kata-kit/button';
import { Board } from '@kata-kit/common';
import { Dashboard } from '@kata-kit/dashboard';
import { ModalBody, ModalFooter, ModalHeader } from '@kata-kit/modal';
import * as React from 'react';
import { Table } from 'reactstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactstrap';

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

  toggleDrawer() {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  renderInner() {
    console.log("renderInner terpencet")
    return (
      <>
        <ModalHeader title="Modal Title" />
        <ModalBody>
          <p>
            Congratulations! You have opened this modal.{' '}
            <a
              href="https://www.youtube.com/watch?v=ctSYCoMF4z4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Have some music.
            </a>
          </p>
          <img
            style={{ marginBottom: '1rem', maxWidth: '100%' }}
            src="https://picsum.photos/1280/720/?random"
            alt="Randomly-generated placeholder image from picsum.photos"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => this.toggleDrawer()}>
            Close modal
          </Button>
        </ModalFooter>
      </>
    );
  }

  async componentDidMount() {
    try {
      const hasil1 = await fetch('https://bot-event.firebaseio.com/events.json');
      const hasil = (await hasil1.json())[0]
      console.log(hasil)
      this.setState({ hasil });
    } catch (err) {
      this.setState({ errors: err.message });
      console.error(err);
      alert(err)
    }
  }

  _masihKosong() {
    return (
      <Dashboard title={this.title} tooltip="Homepage of the Wicara demo">
        masih kosong
    </Dashboard>
    );
  }

  render() {
    const { hasil, errors } = this.state;
    if (!hasil) {
      return this._masihKosong();
    }
    const { speakers } = hasil || ({} as any);

    if (!speakers) {
      return this._masihKosong();
    }

    return <Dashboard title={this.title}  tooltip="Homepage of the Wicara demo"><Board>
      <div style={{ textAlign: "right", marginBottom: "10px" }}>
      <Button color="primary" onClick={()=> this.renderInner()}>+ Add</Button>
      </div>
      <Table>
        <thead><td>Judul</td></thead>
        <tbody>
          {speakers.map((speaker: any) =>
            <>
              <tr><td>{speaker.nama_speaker}</td></tr>
              <tr><td>{speaker.nama_speaker}</td></tr>
              <tr><td>{speaker.nama_speaker}</td></tr>
            </>
          )}
        </tbody>
      </Table>
    </Board>
    </Dashboard>
  }
}

export default HomeFirstPage;
