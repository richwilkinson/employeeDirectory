import React from "react";
import employees from "../../utils/employees.json";
import Search from "../Query"

class Table extends React.Component {

    state = {
      sortOrder: "",
      results: employees,
      search: ""
    }
  
    //Handle input in search bar 
    handleInputChange = event => {
  
      if (event.target.name === "search") {
        const searchTerm = event.target.value.toLowerCase();
        this.setState({
          search: searchTerm
        })
      }
    }
  
    //Sort by first name
    sortByFName = () => {
      const sortedEmployees = this.state.results.sort((a, b) => {
        if (b.name.first > a.name.first) {
          return -1
        }
        if (a.name.first > b.name.first) {
          return 1
        }
        return 0;
      });
  
      if (this.state.sortOrder === "DESC") {
        sortedEmployees.reverse();
        this.setState({ sortOrder: "ASC" });
      } else {
        this.setState({ sortOrder: "DESC" });
      }
      this.setState({ results: sortedEmployees })
    }
  
    //Sort by last name 
    sortByLName = () => {
      const sortedEmployees = this.state.results.sort((a, b) => {
        if (b.name.last > a.name.last) {
          return -1
        }
        if (a.name.last > b.name.last) {
          return 1
        }
        return 0;
      });
      if (this.state.sortOrder === "DESC") {
        sortedEmployees.reverse();
        this.setState({ sortOrder: "ASC" });
      } else {
        this.setState({ sortOrder: "DESC" });
      }
      this.setState({ results: sortedEmployees })
    }
  
    //Render items 
    render() {
      return (
        <div>
          <Search handleInputChange={this.handleInputChange}
            search={this.state.search} />
  
          <div className="table-responsive">
          <table className="table table-striped table-resposive text-center table-hover">
              <thead>
                <tr>
                  <th>First Name <span className="downArrow" onClick={this.sortByFName}></span></th>
                  <th>Last Name <span className="downArrow" onClick={this.sortByLName}></span></th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>DOB </th>
                </tr>
              </thead>
  
              { //First Name sort
                this.state.results && this.state.results.map(item =>
                  item.name.first.toLowerCase().includes(this.state.search) ?
                    <tbody>
                      <tr>
                        
                        <td >{item.name.first}</td>
                        <td >{item.name.last}</td>
                        <td >{item.phone}</td>
                        <td >{item.email}</td>
                          
                      </tr>
                    </tbody>
  
                    :
                    //Last Name sort
                    item.name.last.toLowerCase().includes(this.state.search) ?
                      <tbody>
                        <tr>
                          <td >{item.name.first}</td>
                          <td >{item.name.last}</td>
                          <td >{item.phone} </td>
                          <td >{item.email}</td>  
                        </tr>
                      </tbody>
                      :
                      null
                )}
            </table>
          </div>
        </div>
      )
    }
  }
  
  export default Table;
  