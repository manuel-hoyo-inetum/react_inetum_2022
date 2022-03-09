import React from 'react';
import { View, Text } from 'react-native';

class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            year: 2016,
            name: 'Nader Dabit',
            colors: ['blue']
        };
    }

    render() {
        return (
            <View>
                <Text>My name is: {this.state.name}</Text>
                <Text>The year is: {this.state.year}</Text>
                <Text>My colors are {this.state.colors[0]}</Text>
            </View>
        );
    }
}

export default MyComponent;

