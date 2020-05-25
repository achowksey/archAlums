import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"

export default class database extends Component {
    constructor(props){
        super(props);
        this.onFilterSubmit = this.onFilterSubmit.bind(this);
        this.onChooseClass = this.onChooseClass.bind(this);
        this.onChooseSector = this.onChooseSector.bind(this);
        this.onChooseLocation = this.onChooseLocation.bind(this);

        this.state = {
            fullArray: [],
            displayArray: [],
            classArray: [],
            sectorArray: [],
            locationArray: [],
            chosenClass: '',
            chosenSector: '',
            chosenLocation: '',
            headingArray: ['Name', 'Class', 'Sector', 'Company', 'Location', 'LinkedIn']
        }
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:3210/data');
        for(let i = 0; i < res.data.length; ++i){
            this.state.fullArray.push(res.data[i]);
        }
        // GenerateTable(this.state.fullArray);
    }
    
    
    onFilterSubmit(e){
        e.preventDefault(); 
        this.setState({
            displayArray: [],
            classArray: [],
            sectorArray: [],
            locationArray: [],
        })

        if(this.state.chosenClass.localeCompare('All') === 0){
            for(let i=0; i < this.state.fullArray.length; ++i){
                this.state.classArray.push(this.state.fullArray[i]);
            }
        }
        else{
            for(let i=0; i < this.state.fullArray.length; ++i){
                if(this.state.chosenClass.localeCompare(this.state.fullArray[i]['Class']) === 0){
                    this.state.classArray.push(this.state.fullArray[i]);
                }
            }
        }

        if(this.state.chosenSector.localeCompare('All') === 0){
            for(let i=0; i < this.state.fullArray.length; ++i){
                this.state.sectorArray.push(this.state.fullArray[i]);
            }
        }
        else{
            for(let i=0; i < this.state.fullArray.length; ++i){
                if(this.state.chosenSector.localeCompare(this.state.fullArray[i]['Sector']) === 0){
                    this.state.sectorArray.push(this.state.fullArray[i]);
                }
            }
        }

        if(this.state.chosenLocation.localeCompare('All') === 0){
            for(let i=0; i < this.state.fullArray.length; ++i){
                this.state.locationArray.push(this.state.fullArray[i]);
            }
        }
        else{
            for(let i=0; i < this.state.fullArray.length; ++i){
                if(this.state.chosenLocation.localeCompare(this.state.fullArray[i]['Location']) === 0){
                    this.state.locationArray.push(this.state.fullArray[i]);
                }
            }
        }

        for(let c=0; c<this.state.classArray.length; ++c){
            let person = this.state.classArray[c]['Name'];
            for(let s=0; s<this.state.sectorArray.length; ++s){
                if(person.localeCompare(this.state.sectorArray[s]['Name']) === 0){
                    for(let l=0; l<this.state.locationArray.length; ++l){
                        if(person.localeCompare(this.state.locationArray[l]['Name']) === 0){
                            this.state.displayArray.push(this.state.classArray[c]);
                            break;
                        }
                    }
                }
            }
        }

        GenerateTable(this.state.displayArray);
    }

    onChooseClass(e){
        this.setState({
            chosenClass: e.target.value
        });
    }
    
    onChooseSector(e){
        this.setState({
            chosenSector: e.target.value
        });
    }

    onChooseLocation(e){
        this.setState({
            chosenLocation: e.target.value
        });
    }

    render(){
        return(    
            <div>
                <div style={{width: '85vw',textAlign: 'center', margin: 'auto'}}>
                    <br></br>
                    <h1 style={{fontSize: '500%', color: 'lightblue'}}>Arch Alumni Database</h1>
                    <hr></hr>
                    <br></br>
                    <form onSubmit={this.onFilterSubmit}>
                        <div className="input-group">
                            <select className="custom-select" id="inputGroupSelect01" onChange={this.onChooseClass}>
                                <option value="" disabled selected>Class...</option>
                                <option value="All">All Classes</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                            </select>
                            <select className="custom-select" id="inputGroupSelect02" onChange={this.onChooseSector}>
                                <option value="" disabled selected>Sector...</option>
                                <option value="All">All Sectors</option>
                                <option value="Current Student">Current Student</option>
                                <option value="Consulting">Consulting</option>
                                <option value="Investment Banking">Investment Banking</option>
                                <option value="Financial Services">Financial Services</option>
                                <option value="Technology">Technology</option>
                                <option value="Startup">Startup</option>
                                <option value="Private Equity">Private Equity</option>
                                <option value="Further Education">Further Education</option>
                                <option value="Public Policy">Public Policy</option>
                                <option value="Retail">Retail</option>
                                <option value="Human Resources">Human Resources</option>
                                <option value="Corporate Strategy">Corporate Strategy</option>
                            </select>
                            <select className="custom-select" id="inputGroupSelect03" onChange={this.onChooseLocation}>
                                <option value="" disabled selected>Location...</option>
                                <option value="All">All Locations</option>
                                <option value="Chicago, IL">Chicago, IL</option>
                                <option value="New York, NY">New York, NY</option>
                                <option value="Dallas, TX">Dallas, TX</option>
                                <option value="San Francisco, CA">San Francisco, CA</option>
                                <option value="Los Angeles, CA">Los Angeles, CA</option>
                                <option value="St. Louis, MO">St. Louis, MO</option>
                                <option value="Philadelphia, PA">Philadelphia, PA</option>
                                <option value="Mountain View, CA">Mountain View, CA</option>
                                <option value="Cleveland, OH">Cleveland, OH</option>
                                <option value="Clayton, MO">Clayton, MO</option>
                                <option value="Washington DC">Washington DC</option>
                                <option value="Austin, TX">Austin, TX</option>
                                <option value="Iowa City, IA">Iowa City, IA</option>
                                <option value="McLean, VA">McLean, VA</option>
                                <option value="Madison, WI">Madison, WI</option>
                                <option value="Riverwoods, IL">Riverwoods, IL</option>
                            </select>
                            <div className="input-group-append">
                                <button className="btn btn-outline-primary" type="submit" id="button-addon2">Filter</button>
                            </div>
                        </div>
                    </form>
                    <br></br>
                    <hr></hr>
                    <br></br>
                </div>
                <div style={{width: '85vw',textAlign: 'center', margin: 'auto'}} id='div1'></div>
                <br></br>
            </div>
        )
    }
}

function GenerateTable(array) {
    var totalRows = array.length;
    var div1 = document.getElementById('div1');
    div1.innerHTML = "";
    if(totalRows > 0){
        let headingArray = ['Name', 'Class', 'Sector', 'Company', 'Location', 'LinkedIn']
        var tbl = document.createElement("table");
        var row = document.createElement("tr");
        row.style.width = '85vw';
        row.style.border = '1px solid';
        row.style.backgroundColor = 'lightblue';
        var cell, cellText;

        // creating head
        for (let i = 0; i<headingArray.length-1; ++i){
            cell = document.createElement("td");
            cell.style.width = '17vw';
            cell.style.height = '2.5vw';
            cell.style.border = '1px solid';
            cell.style.fontWeight = 'bold';
            cellText = document.createTextNode(headingArray[i]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tbl.appendChild(row); // add the row to the end of the table body

        // creating rows
        for (var r = 0; r < totalRows; r++) {
            row = document.createElement("tr");
            row.style.width = '85vw';
            row.style.border = '1px solid';
            for (let i = 0; i<headingArray.length-1; ++i){
                let empty = '';
                if(empty.localeCompare(array[r][headingArray[i]]) === 0){
                    array[r][headingArray[i]] = "Unknown";
                }
                cell = document.createElement("td");
                cell.style.width = '17vw';
                cell.style.height = '5vw';
                cell.style.border = '1px solid';
                cellText = document.createTextNode(array[r][headingArray[i]]);
                if (i == 0){
                    let ref = document.createElement("a");
                    ref.href = array[r][headingArray[headingArray.length-1]];
                    ref.appendChild(cellText);
                    cell.appendChild(ref);
                }
                else{
                    cell.appendChild(cellText);
                }
                row.appendChild(cell);
            }    
            tbl.appendChild(row); // add the row to the end of the table body
        }
        div1.appendChild(tbl); // appends <table> into <div1>
    }
    else{
        cell = document.createElement("div");
        cellText = document.createTextNode("No Criteria Matches Your Search. Please Enter Another Filter.");
        cell.style.fontSize = 'large';
        cell.appendChild(cellText);
        div1.appendChild(cell); // appends <table> into <div1>
    }
}