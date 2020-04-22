import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {

    axios.post('/repos', term)
     .then(function (response) {
        console.log(response);
     })
      .catch(function (error) {
        console.log(error);
     });

    /*var post = function (data,callback){
    $.ajax({
      type: "POST",
      url: 'http://127.0.0.1:1128/repos',
      data: data,
      success: callback
    });
  }

    return post(term, ((term) => {console.log(term)}))*/

    // TODO
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));