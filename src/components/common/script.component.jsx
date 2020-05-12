import React from "react"

export class Script extends React.Component {
  constructor(props) {
    super(props)

    this.elRef = React.createRef();
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = this.props.scriptUrl;
    this.elRef.current.appendChild(script);
  }

  render() {
    return <div ref={this.elRef}>
    </div>
  }
}

