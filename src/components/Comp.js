import React, { Component } from 'react'

class Comp extends Component {
  constructor(props) {
    super(props) // 이제 이 constructor 안에서 this 를 쓸 수 있도록 해주겠다는 의미
    this.countUp = this.countUp.bind(this) // bind 를 해줘야만 해당 메소드안에서 this 를 쓸 수 있다.
    this.state = {
      num: 0, // const [num, setNum] = useState(0)
      str: '안녕'
    }
  }

  countUp() { // 화살표 함수를 쓰지 않는 것이 전통적인 클래스형 컴포넌트의 문법
    this.setState({
      num: this.state.num + 1 // 위에 작성한 state 안의 num 값을 갖고 오게 됨
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.num !== prevState.num)
    this.setState({
      str: '잘가'
    })
  }

  render() {
      return  (
      <div>
        <h1>{this.state.str}</h1>
        <h1>{this.state.num}</h1>
        <button onClick={this.countUp}>카운트업!</button>
      </div>
    )
  }
}

export default Comp