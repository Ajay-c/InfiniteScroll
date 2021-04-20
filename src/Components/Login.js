
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

class Login extends React.Component {
  state = {
    items: Array.from({ length: 20 }),

  };

   projects = [{
        photo: "https://randomuser.me/api/portraits/women/74.jpg",
    },
    {
        photo: "https://randomuser.me/api/portraits/men/81.jpg",
    },
    {
        photo: "https://randomuser.me/api/portraits/women/50.jpg",
    }
]

  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 })),

      });
    }, 60000);
  };

  handleLogout() {
      this.props.history.push("/");
    }

  render() {
    console.log(this?.mapPhotos,"sdcdsvvf");

    return (
      <div style={{backgroundColor:"white",textAlign: "center"}}>
      <div style={{textAlign: "center"}}>
        <h1> Welcome</h1>
        <button
                   onClick={() => this.handleLogout()}
                 >
                   Log Out{" "}
                 </button>
                 </div>
        <hr />

        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
            <div key={index}>
            <p><img style={{height:320,width:480}} src={"https://randomuser.me/api/portraits/women/50.jpg"} alt="logo_image" /></p>
            Image- #{index}
            </div>
          ))}

        </InfiniteScroll>
      </div>
    );
  }
}

export default Login;
