import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
      var art = this.props.data.art.map(function(art){
        var projectImage = 'images/'+art.image;
        return <div key={art.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={art.url} title={art.title}>
               <img alt={art.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{art.title}</h5>
                     <p>{art.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>
            <h3>Web Dev:</h3>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
            <h3>Art:</h3>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {art}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
