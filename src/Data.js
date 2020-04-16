import React, {Component} from 'react';

class Data extends Component{

    constructor(props) {
        super(props);
        this.state = {
          corona: []
        };
      }
     

    componentDidMount() {
        fetch('https://api.kawalcorona.com/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ corona: data })
          console.log(this.state.corona)
          //console.log(this.state.corona.attributes.indexOf("1"))
        })
        .catch(console.log)
      }

    render(){

        
        return(

            <div>
                <h1 class="sectionhead">Jumlah Kasus terkonfirmasi di Indonesia</h1>
                <div class="row">
                    <div class="col-md-6 morecenter">
                        {this.state.corona.map((corona) => {
                            if (corona.attributes.OBJECTID == 89) {

                                return (
                                    <div class="card text-white bg-success mb-3" style={{ maxwidth: '20rem' }}>
                                        <div class="card-header">Sembuh</div>
                                        <div class="card-body">
                                            <h2 key={corona.attributes.OBJECTID} class="card-text">{corona.attributes.Recovered}</h2>
                                        </div>
                                    </div>
                                );
                            }
                        })}</div>

                    <div class="col-md-6 morecenter">
                        {this.state.corona.map((corona) => {
                            if (corona.attributes.OBJECTID == 89) {

                                return (
                                    <div class="card text-white bg-danger mb-3" style={{ maxwidth: '20rem' }}>
                                        <div class="card-header">Meninggal</div>
                                        <div class="card-body">
                                            <h2 class="primarydata" key={corona.attributes.OBJECTID} class="card-text">{corona.attributes.Deaths}</h2>
                                        </div>
                                    </div>
                                );
                            }
                        })}</div>
                </div>
                
                <div class="row">
                    <div class="col-md-6 morecenter">
                        {this.state.corona.map((corona) => {
                            if (corona.attributes.OBJECTID == 89) {

                                return (
                                    <div class="card text-white bg-warning mb-3" style={{ maxwidth: '20rem' }}>
                                        <div class="card-header">Terkonfirmasi Positif</div>
                                        <div class="card-body">
                                            <h2 key={corona.attributes.OBJECTID} class="card-text">{corona.attributes.Confirmed}</h2>
                                        </div>
                                    </div>
                                );
                            }
                        })}</div>
                        
                        <div class="col-md-6 morecenter">
                        {this.state.corona.map((corona) => {
                            if (corona.attributes.OBJECTID == 89) {

                                return (
                                    <div class="card text-white bg-info mb-3" style={{ maxwidth: '20rem' }}>
                                        <div class="card-header">Dalam Perawatan</div>
                                        <div class="card-body">
                                            <h2 key={corona.attributes.OBJECTID} class="card-text">{corona.attributes.Active}</h2>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                        </div>
                </div>
            </div>
        );
    }
}

export default Data;