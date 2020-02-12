import './ClientInfo.css'

class ClientInfo extends React.Component {

    clients = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        fetch("localhost:8080/users")
            .then(res => clients = res.json())
            .catch(e => console.log(e));

    }

    render() {
          
    }

} 